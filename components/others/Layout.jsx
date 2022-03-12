import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  min-width: 72.916vw;
  margin-top: 1.188rem;
  margin-bottom: 1.188rem;
  overflow-x: hidden;

  @media screen and (max-width: 1440px) {
    width: 100vw;
    margin: 0;
  }
  @media screen and (min-width: 1441px) {
    overflow-y: hidden;
  }
  @media screen and (max-width: 749px) {
    display: none;
  }
`;

function Layout({ children }) {
  return <Container>{children}</Container>;
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
