import { useContext } from 'react';
import appContext from '../../../store/app-context';
import Button from '../../UI/Button';
import Logo from '../../UI/Logo';
import O from '../../UI/O';
import X from '../../UI/X';

import styles from './Head.module.css';

const Head = (props) => {
  const { width: windowWidth } = useContext(appContext).windowSize;

  return (
    <div className={styles['game-head']}>
      <Logo size={windowWidth > 450 ? 30 : 24} />

      <div className={styles.turn}>
        {props.turn === 'x' ? (
          <X size={windowWidth > 450 ? 18 : 12} color={'var(--color2)'} />
        ) : (
          <O size={windowWidth > 450 ? 18 : 12} color={'var(--color2)'} />
        )}{' '}
        <span>Turn</span>
      </div>

      <Button className="btn3" onClick={props.onBackHome}>
        Back
      </Button>
    </div>
  );
};

export default Head;
