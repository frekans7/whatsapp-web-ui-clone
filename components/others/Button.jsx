import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: red;
  color: white;
`;

function Button({ children }) {
  return <ButtonStyled>{children}</ButtonStyled>;
}

Button.propTypes = {
  children: PropTypes.string,
};

export default Button;
