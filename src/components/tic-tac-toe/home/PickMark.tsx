import { useEffect, useState } from 'react';

import styles from './PickMark.module.css';

import O from '../../UI/O';
import X from '../../UI/X';

const PickMark = (props) => {
  const [activeMark, setActiveMark] = useState('x');

  useEffect(() => {
    props.onPickMark(activeMark);
  }, [activeMark]);

  const pickingMarkHandler = (mark) => {
    setActiveMark(mark);
  };

  return (
    <div className={styles['pick-mark-container']}>
      <button
        className={`${activeMark === 'x' && styles.active}`}
        onClick={pickingMarkHandler.bind(null, 'x')}
      >
        <X
          size={20}
          color={`${activeMark === 'x' ? 'var(--color1)' : 'var(--color2)'}`}
        />
      </button>
      <button
        className={`${activeMark === 'o' && styles.active}`}
        onClick={pickingMarkHandler.bind(null, 'o')}
      >
        <O
          size={20}
          color={`${activeMark === 'o' ? 'var(--color1)' : 'var(--color2)'}`}
        />
      </button>
    </div>
  );
};

export default PickMark;
