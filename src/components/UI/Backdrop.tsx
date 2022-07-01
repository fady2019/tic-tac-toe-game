import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--color0);
  opacity: 0.6;
  z-index: 1000;
`;

export default Backdrop;
