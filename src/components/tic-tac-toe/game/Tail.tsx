import { GameMetadataInterface } from '../../../common/interfaces';
import styles from './Tail.module.css';

const Tail = (props) => {
  const {
    player1Id,
    player1Mark,
    player1WinCount,
    player2Id,
    player2Mark,
    player2WinCount,
    tiesCount,
  } = props.gameMetadata as GameMetadataInterface;

  return (
    <div className={styles['game-stats']}>
      <div
        className={`
          ${styles['stat']} 
          ${player1Mark === 'x' ? styles['x-player'] : styles['o-player']}
        `}
      >
        <span className={styles['player-id']}>
          <span>{player1Mark}</span> <span>({player1Id})</span>
        </span>
        <span className={styles['player-score']}>{player1WinCount}</span>
      </div>

      <div className={`${styles['stat']} ${styles.ties}`}>
        <span className={styles['player-id']}>
          <span>ties</span>
        </span>
        <span className={styles['player-score']}>{tiesCount}</span>
      </div>

      <div
        className={`
          ${styles['stat']}
          ${player2Mark === 'x' ? styles['x-player'] : styles['o-player']}
        `}
      >
        <span className={styles['player-id']}>
          <span>{player2Mark}</span> <span>({player2Id})</span>
        </span>
        <span className={styles['player-score']}>{player2WinCount}</span>
      </div>
    </div>
  );
};

export default Tail;
