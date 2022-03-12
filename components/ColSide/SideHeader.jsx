import styled from 'styled-components';
import { useContext } from 'react';
import Image from 'next/image';

import { IconButton, ProfileButton } from '../index';
import * as Icons from '../icons';
import { GlobalState } from '../../store/context/globalState';

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.6875rem;
  background-color: var(--header-bg);
`;

const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  margin-right: 1.5rem;
  min-width: 7.75rem;
  color: var(--gray);
`;

const StyledIconButton = styled.div`
  &:hover {
    border-radius: 50%;
    background-color: var(--icon-hover);
  }
`;

function SideHeader() {
  const { state, dispatch } = useContext(GlobalState);
  return (
    <Box>
      <ProfileButton onClick={() => {}}>
        <Image src="/profile.png" width={40} height={40} alt="progfile" />
      </ProfileButton>
      <ButtonsGroup>
        <IconButton onClick={() => {}}>
          <Icons.Status />
        </IconButton>
        <IconButton onClick={() => {}}>
          <Icons.NewMessage />
        </IconButton>

        <IconButton
          onClick={() =>
            state.menuIsOpen === false
              ? dispatch({ type: 'MenuOpen' })
              : dispatch({ type: 'MenuClose' })
          }
        >
          <StyledIconButton>
            <Icons.Menu />
          </StyledIconButton>
        </IconButton>
      </ButtonsGroup>
    </Box>
  );
}

export default SideHeader;
