import styled from '@emotion/styled';

const ButtonStyled = styled.button`
  background-color: #ffe033;
  font-size: 20px;
  padding: 5px 10px;
  margin: 10px 10px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  transition: background-color 0.4s;
  &:hover {
    background-color: #ffeb77;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
  }
`;

function Button({ event, children }) {
  return <ButtonStyled onClick={event}>{children}</ButtonStyled>;
}

export default Button;
