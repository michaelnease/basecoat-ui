import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: ${props => props.width};
  font-size: 15px;
  color: white;
  border-radius: 4px;
  padding: 10px 25px;
  background-color: ${props => {
    switch (props.color) {
      case 'primary':
        return 'red';
      case 'secondary':
        return 'blue';
      default:
        return 'red'; // primary
    }
  }};
  &:disabled {
    background: #555;
  }
`;
