import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Icon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  color: inherit;
  cursor: pointer;
  outline: inherit;
  border: inherit;
  padding: 0;
`;

function IconButton({ children, ...props }) {
  return <Icon {...props}>{children}</Icon>;
}

IconButton.propTypes = {
  children: PropTypes.node,
  props: PropTypes.any,
};

export default IconButton;
