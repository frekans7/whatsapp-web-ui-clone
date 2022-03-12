import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { useContext } from 'react';

import { MainHeader, ChatBackground, MainFooter } from '../index';
import { GlobalState } from '../../store/context/globalState';

import users from '../../data';

const Right = keyframes`
  from {
    transform: translateX(-40%);
  }
  to {
    transform: translateX(0%);
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  width: 61.25rem;
  min-width: 27.75rem;
  overflow-x: hidden;
  overflow-y: auto;

  @media screen and (max-width: 1440px) {
    width: 70%;
  }
`;

const MainCol = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1401px) {
    ${({ active }) => (active === true ? 'width: 60%' : 'width: 100%')}
  }
  @media screen and (max-width: 1400px) {
    ${({ active }) => (active === true ? 'width: 57%' : 'width: 100%')}
  }

  @media screen and (max-width: 1024px) {
    ${({ active }) => active && `display: none;`}
  }

  ${({ active, starter }) =>
    active === false &&
    starter === true &&
    css`
      animation: ${Right} 0.2s linear;
    `}
`;

const MainExtra = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  transform: translateX(100vw);
  transition: transform 0.15s ease;

  ${({ active }) =>
    active === true &&
    css`
      transform: translateX(0);
      transition: transform 0.15s ease;
    `}

  @media screen and (min-width: 1401px) {
    ${({ active }) => (active === true ? 'width: 40%' : 'width: 0%')}
  }
  @media screen and (max-width: 1400px) {
    ${({ active }) => (active === true ? 'width: 43%' : 'width: 0%')}
  }
  @media screen and (max-width: 1024px) {
    min-width: 100%;
  }
`;

function ColMain({ children }) {
  const { state } = useContext(GlobalState);
  return (
    <Main>
      <MainCol active={state.colExtraIsOpen} starter={state.colExtraStarted}>
        <MainHeader props={users} />
        <ChatBackground />
        <MainFooter />
      </MainCol>
      <MainExtra active={state.colExtraIsOpen}>{children}</MainExtra>
    </Main>
  );
}
ColMain.propTypes = {
  children: PropTypes.node,
};

export default ColMain;
