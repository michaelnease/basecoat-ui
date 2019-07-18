import React from 'react';
import theme from '../Theme';
import { ButtonStyled } from './Button.styles';

const Button = ({color, disabled, varient}) => {
  return <ButtonStyled theme={theme} color={color} disabled={disabled} varient={varient}>Button</ButtonStyled>;
};

export default Button;
