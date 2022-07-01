import { Fragment, useContext } from 'react';
import appContext from '../../../store/app-context';
import Backdrop from '../../UI/Backdrop';
import Button from '../../UI/Button';
import O from '../../UI/O';
import X from '../../UI/X';

import styles from './GameModal.module.css';

const GameModal = (props) => {
  const { width: windowWidth } = useContext(appContext).windowSize;
  const { noWinner, id, mark } = props.winnerInfo;

  return (
    <Fragment>
      <Backdrop />

      <div className={styles['game-modal']}>
        <div className={styles['game-modal-wrapper']}>
          <span className={styles['player-id']}>
            {noWinner ? `tie!` : `${id} won!`}
          </span>

          <div
            className={`
              ${styles['player-mark']}
              ${
                noWinner
                  ? styles['no-mark']
                  : mark === 'o'
                  ? styles['o-mark']
                  : styles['x-mark']
              }
            `}
          >
            {noWinner && <h2>no one takes the round</h2>}

            {!noWinner && (
              <>
                {mark === 'o' ? (
                  <O size={windowWidth > 450 ? 60 : 40} />
                ) : (
                  <X size={windowWidth > 450 ? 60 : 40} />
                )}

                <h2>takes the round</h2>
              </>
            )}
          </div>

          <div className={styles['game-modal-actions']}>
            <Button className="btn3" onClick={props.onQuit}>
              quit
            </Button>
            <Button
              className={noWinner ? 'btn3' : mark === 'o' ? 'btn2' : 'btn1'}
              onClick={props.onPlayNewRound}
            >
              next round
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GameModal;
