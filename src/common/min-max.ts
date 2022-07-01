import { Board } from './Board';
import { Move } from './interfaces';

export function minMax(
  board: Board,
  mark: 'x' | 'o',
  pcMark: 'x' | 'o',
  maximizing: boolean,
  alpha: number = -100,
  beta: number = 100
): Move {
  const state = board.checkState();

  if (state) {
    const val =
      state.length === 0 ? 0 : board.getByCell(state[0]) === pcMark ? 1 : -1;

    return {
      cell: -1,
      alpha: maximizing ? val : alpha,
      beta: !maximizing ? val : beta,
    };
  }

  const possibleCells = getAllPossibleCells(board);

  const nextMark = mark === 'x' ? 'o' : 'x';

  let bestMove: Move = {
    cell: -1,
    alpha,
    beta,
  };

  for (let i = 0; i < possibleCells.length; i++) {
    const copiedBoard = board.clone();
    copiedBoard.setByCell(possibleCells[i], mark);

    const moveInfo = minMax(
      copiedBoard,
      nextMark,
      pcMark,
      !maximizing,
      bestMove.alpha,
      bestMove.beta
    );

    if (maximizing) {
      const maxVal = Math.max(bestMove.alpha, moveInfo.alpha, moveInfo.beta);
      if (maxVal !== bestMove.alpha) {
        bestMove.cell = possibleCells[i];
        bestMove.alpha = maxVal;
      }
    } else {
      const minVal = Math.min(bestMove.beta, moveInfo.alpha, moveInfo.beta);
      if (minVal !== bestMove.beta) {
        bestMove.cell = possibleCells[i];
        bestMove.beta = minVal;
      }
    }

    if (bestMove.alpha >= bestMove.beta) {
      break;
    }
  }

  return bestMove;
}

function getAllPossibleCells(board: Board) {
  let res: number[] = [];

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board.get(row, col) === '') {
        res.push(3 * row + col);
      }
    }
  }

  return res;
}
