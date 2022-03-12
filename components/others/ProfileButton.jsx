import PropTypes from 'prop-types';
import styled from 'styled-components';

const Profile = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  color: inherit;
  cursor: pointer;
  outline: inherit;
  border: inherit;
  font-size: 2.5rem;
  padding-left: 0;
  margin-left: 1rem;
`;

function ProfileButton({ children, ...props }) {
  return <Profile {...props}>{children}</Profile>;
}

ProfileButton.propTypes = {
  children: PropTypes.node,
  props: PropTypes.any,
};

export default ProfileButton;
