import { useEffect, useReducer, useState } from 'react';
import { Board as BoardClass } from '../../../common/Board';

import { GameMetadataInterface } from '../../../common/interfaces';
import { minMax } from '../../../common/min-max';

import Board from './Board';
import GameModal from './GameModal';
import Head from './Head';
import Tail from './Tail';

const initGameMetadata = (
  player1Mark: 'o' | 'x',
  enemy: string
): GameMetadataInterface => {
  return {
    player1Id: enemy === 'PC' ? 'you' : 'player1',
    player1Mark: player1Mark,
    player1WinCount: 0,
    player2Id: enemy === 'PC' ? 'cpu' : 'player2',
    player2Mark: player1Mark === 'x' ? 'o' : 'x',
    player2WinCount: 0,
    tiesCount: 0,
  };
};

const gameMetadataReducer = (
  state: GameMetadataInterface,
  action: { type: string; payload?: any }
): GameMetadataInterface => {
  switch (action.type) {
    case 'PLAYER1_WON': {
      return {
        ...state,
        player1WinCount: state.player1WinCount + 1,
      };
    }
    case 'PLAYER2_WON': {
      return {
        ...state,
        player2WinCount: state.player2WinCount + 1,
      };
    }
    case 'TIES': {
      return {
        ...state,
        tiesCount: state.tiesCount + 1,
      };
    }
    default: {
      return state;
    }
  }
};

let isRoundJustStarted = true;
let roundStarter: 'x' | 'o' | null = 'x';

const Game = (props) => {
  let { player1Mark, enemy } = props.gameMetadata;

  const [gameMetadata, dispatch] = useReducer(
    gameMetadataReducer,
    initGameMetadata(player1Mark, enemy)
  );

  const [board, setBoard] = useState<BoardClass>(new BoardClass());
  const [turn, setTurn] = useState<'x' | 'o' | null>(roundStarter);
  const [filledCells, setFilledCells] = useState<number[]>([]);
  const [winnerInfo, setWinnerInfo] = useState<{
    noWinner: boolean;
    id?: string;
    mark?: 'o' | 'x';
  } | null>(null);

  useEffect(() => {
    if (isRoundJustStarted) {
      isRoundJustStarted = false;
      return;
    }

    const boardState = board.checkState();

    if (!!boardState) {
      if (boardState.length === 0) {
        setWinnerInfo({ noWinner: true });
        dispatch({ type: 'TIES' });
        return;
      }

      setFilledCells(boardState);

      if (turn === gameMetadata.player1Mark) {
        setWinnerInfo({
          noWinner: false,
          id: gameMetadata.player1Id,
          mark: gameMetadata.player1Mark,
        });
        dispatch({ type: 'PLAYER1_WON' });
      } else {
        setWinnerInfo({
          noWinner: false,
          id: gameMetadata.player2Id,
          mark: gameMetadata.player2Mark,
        });
        dispatch({ type: 'PLAYER2_WON' });
      }

      return;
    }

    setTurn((prev) => (prev === 'x' ? 'o' : 'x'));
  }, [board]);

  useEffect(() => {
    if (enemy === 'PC' && turn === gameMetadata.player2Mark) {
      const { cell } = minMax(
        board,
        gameMetadata.player2Mark,
        gameMetadata.player2Mark,
        true
      );

      setTimeout(() => {
        selectCellHandler(Math.floor(cell / 3), cell % 3);
      }, 250);
    }
  }, [turn]);

  const selectCellHandler = (row: number, col: number) => {
    if (winnerInfo) {
      return;
    }

    if (board.get(row, col) !== '') {
      return;
    }

    setBoard((currentBoard) => {
      if (turn === null) {
        return currentBoard;
      }

      const updatedBoard = currentBoard.clone();
      updatedBoard.set(row, col, turn);

      return updatedBoard;
    });
  };

  const newRoundHandler = () => {
    roundStarter = roundStarter === 'x' ? 'o' : 'x';
    isRoundJustStarted = true;
    setWinnerInfo(null);
    setBoard(new BoardClass());
    setTurn(roundStarter);
    setFilledCells([]);
  };

  const quitGameHandler = () => {
    isRoundJustStarted = true;
    roundStarter = 'x';
    props.onQuitGame();
  };

  return (
    <section>
      {winnerInfo && (
        <GameModal
          winnerInfo={winnerInfo}
          onQuit={quitGameHandler}
          onPlayNewRound={newRoundHandler}
        />
      )}

      <Head turn={turn} onBackHome={quitGameHandler} />

      <Board
        board={board.board}
        filledCells={filledCells}
        onSelectCell={selectCellHandler}
      />

      <Tail gameMetadata={gameMetadata} />
    </section>
  );
};

export default Game;
