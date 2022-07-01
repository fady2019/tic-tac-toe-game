import styles from './Board.module.css';
import Cell from './Cell';

const Row = (props) => {
  return (
    <div className={styles.row}>
      {props.row.map((cell, idx) => (
        <Cell
          key={'cell-' + idx}
          filled={props.filledCells.includes(
            props.row.length * props.rowIdx + idx
          )}
          cellIdx={[props.rowIdx, idx]}
          cellMark={cell}
          onSelectCell={props.onSelectCell}
        />
      ))}
    </div>
  );
};

const Board = (props) => {
  return (
    <div className={styles.board}>
      {props.board.map((row, idx) => (
        <Row
          key={'row-' + idx}
          filledCells={props.filledCells}
          row={row}
          rowIdx={idx}
          onSelectCell={props.onSelectCell}
        />
      ))}
    </div>
  );
};

export default Board;
