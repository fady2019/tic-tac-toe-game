import styles from './Cell.module.css';
import Card from '../../UI/Card';
import O from '../../UI/O';
import X from '../../UI/X';
import { useContext, useEffect, useRef, useState } from 'react';
import appContext from '../../../store/app-context';

const Cell = (props) => {
  const { width: windowWidth } = useContext(appContext).windowSize;
  const ref = useRef<HTMLElement>();
  const [cellHeight, setCellHeight] = useState(0);

  useEffect(() => {
    setCellHeight(ref.current ? ref.current.offsetWidth : 50);
  }, [windowWidth]);

  const [row, col] = props.cellIdx;

  const clickCellHandler = () => {
    props.onSelectCell(row, col);
  };

  return (
    <Card
      style={{ height: cellHeight + 'px' }}
      ref={ref}
      className={`
        ${styles.cell} 
        ${props.filled && styles.filled}
        ${props.cellMark === 'o' ? styles['o-mark'] : styles['x-mark']}
      `}
      tabIndex={row * 3 + col}
      onClick={clickCellHandler}
    >
      {props.cellMark === 'o' ? (
        <O
          size={windowWidth > 450 ? 60 : 40}
          color={props.filled ? 'var(--color1)' : ''}
        />
      ) : props.cellMark === 'x' ? (
        <X
          size={windowWidth > 450 ? 60 : 40}
          color={props.filled ? 'var(--color1)' : ''}
        />
      ) : (
        ''
      )}
    </Card>
  );
};

export default Cell;
