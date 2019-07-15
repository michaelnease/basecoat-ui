import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  font-size: 15px;
  color: white;
  border-radius: 4px;
  padding: 10px 25px;
  background-color: blue;
`;

const Button = () => {
  return <ButtonStyled>Button</ButtonStyled>;
};

export default Button;
