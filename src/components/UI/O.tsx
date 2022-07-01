import styled from 'styled-components';

interface O {
  size: number;
  color?: string;
}

const O = styled.span<O>`
  display: inline-block;
  width: ${(props) => props.size + 'px'};
  height: ${(props) => props.size + 'px'};
  border: ${(props) =>
    `${props.size / 3.5 + 'px'} solid ${
      props.color ? props.color : 'var(--o-color)'
    }`};
  border-radius: 50%;
`;

export default O;
