import styled from 'styled-components';

import styles from './X.module.css';

interface XArm {
  size: number;
  color?: string;
}

const XArmCom = styled.span<XArm>`
  --size: ${(props) => props.size + 'px'};
  --height: ${(props) => props.size / 3.5 + 'px'};
  --w: ${(props) => Math.sqrt(2 * Math.pow(props.size, 2)) + 'px'};
  --width: calc(var(--w) - var(--height));

  --left-pos: calc((var(--width) - var(--size)) / -2);

  position: absolute;
  top: 50%;
  left: var(--left-pos);
  width: var(--width);
  height: var(--height);
  background-color: ${(props) =>
    props.color ? props.color : 'var(--x-color)'};
  border-radius: 2px;

  &.fx {
    transform: translateY(-50%) rotate(45deg);
  }

  &.sx {
    transform: translateY(-50%) rotate(-45deg);
  }
`;

const X = (props) => {
  return (
    <span
      className={styles.x}
      style={{ width: props.size || 15, height: props.size || 15 }}
    >
      <XArmCom className="fx" size={props.size} color={props.color} />
      <XArmCom className="sx" size={props.size} color={props.color} />
    </span>
  );
};

export default X;
