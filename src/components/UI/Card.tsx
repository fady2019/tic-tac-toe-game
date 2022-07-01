import styled from 'styled-components';

interface CardInterface {
  padding?: boolean;
}

const Card = styled.div<CardInterface | HTMLElement | any>`
  background-color: var(--color);
  border-radius: 4px;
  box-shadow: 0px 5px var(--color0);
  ${(props) => props.padding !== false && 'padding: 15px'};
`;

export default Card;
