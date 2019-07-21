import styled from 'styled-components';

export const ButtonStyled = styled.button.attrs(props => {
  return {
    width: '100px',
  };
})`

  


  width: ${props => props.width};
  font-size: 15px;
  color: white;
  border-radius: 4px;
  padding: 10px 25px;
  background-color: ${props => props.theme.primary};



  /* background-color: ${props => props.theme.green}; */
  /* background-image: linear-gradient(135deg, #2bd1fc, #fff);
  border: 1px solid ${props => props.theme.main}; */
`;
