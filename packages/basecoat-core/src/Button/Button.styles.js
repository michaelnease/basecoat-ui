import styled from 'styled-components';
import Color from 'color';

const lighter = Color('#000').lighten(0.5);

const theme = {
  test: 'yellow',
};

export const ButtonStyled = styled.button`
  font-size: 15px;
  color: white;
  border-radius: 4px;
  padding: 10px 25px;
  /* background-color: ${props => props.theme.green}; */
  background-image: linear-gradient(-90deg, red, ${Color('#7743CE')
    .alpha(0.5)
    .lighten(0.5)});
`;
