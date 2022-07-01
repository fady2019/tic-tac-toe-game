import styled from 'styled-components';

const Button = styled.button`
  display: block;
  font-family: inherit;
  font-weight: bold;
  font-size: 14px;
  padding: 12px 30px;
  text-transform: uppercase;
  margin: 20px 0;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;

  &.btn1 {
    background-color: var(--color6);
    box-shadow: 0px 5px var(--color7);
  }

  &.btn2 {
    background-color: var(--color4);
    box-shadow: 0px 5px var(--color5);
  }

  &.btn3 {
    background-color: var(--color2);
    box-shadow: 0px 5px var(--color2_1);
  }

  @media screen and (max-width: 450px) {
    & {
      font-size: 12px;
      padding: 10px 25px;
    }
  }
`;

export default Button;
