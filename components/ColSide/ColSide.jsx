import { useContext } from 'react';
import styled, { keyframes, css } from 'styled-components';

import {
  SideHeader,
  DesktopNotifications,
  SearchBar,
  NewChat,
  Menu,
  Settings,
} from '../index';

import { GlobalState } from '../../store/context/globalState';

import users from '../../data';

const Side = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--component-bg);
  width: 30%;
  overflow-x: hidden;
  overflow-y: hidden;

  @media screen and (max-width: 1440px) {
    max-width: 27rem;
    min-width: 20.813rem;
  }
  @media screen and (min-width: 1440px) {
    min-width: 26.25rem;
  }
`;
const StyledMenu = styled.div`
  z-index: 1;
  position: absolute;

  background-color: var(--menu-bg);
  padding: 0.625rem 0;
  border-radius: 0.188rem;
  margin-top: -0.313rem;

  margin-left: clamp(100px, 12%, 180px);
  box-shadow: 0 2px 5px 0 #00000042;
  transition: all 0.5s ease-in;

  ${({ active }) => (active === true ? 'display:show' : 'display:none')}
`;
const Left = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
`;
const Right = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const StyledSettings = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;

  ${({ active }) =>
    active === true
      ? css`
          z-index: 1;
          animation: ${Left} 0.2s linear;
        `
      : css`
          z-index: 0;
          height: 0vh;
        `}
`;
const Box = styled.div`
  ${({ active, starter }) =>
    active === true
      ? css`
          height: 0vh;
        `
      : starter &&
        css`
          z-index: 2;
          flex-direction: column;
          overflow-x: hidden;
          overflow-y: hidden;
          animation: ${Right} 0.2s linear;
          height: 100vh;
        `};
`;

function ColSide() {
  const NewChatItem = users.map((user) => (
    <NewChat key={user.id} props={user} />
  ));
  const { state } = useContext(GlobalState);

  return (
    <Side>
      <StyledSettings active={state.settingsIsOpen}>
        <Settings />
      </StyledSettings>
      <Box active={state.settingsIsOpen} starter={state.settingsStarted}>
        <SideHeader />
        <StyledMenu active={state.menuIsOpen}>
          <Menu />
        </StyledMenu>
        <DesktopNotifications />
        <SearchBar />
        {NewChatItem}
      </Box>
    </Side>
  );
}

export default ColSide;
