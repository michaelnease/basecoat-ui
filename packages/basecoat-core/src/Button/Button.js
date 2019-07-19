import React from 'react';
import {theme} from '../Style/Theme';
import  { ThemeProvider } from 'styled-components'
import { ButtonStyled } from './Button.styles';


const Button = ({color, disabled, varient}) => {
  return (
      <ThemeProvider theme={theme}>
        <ButtonStyled color={color} disabled={disabled} varient={varient}>Button</ButtonStyled>
      </ThemeProvider>
   );
};

export default Button;


