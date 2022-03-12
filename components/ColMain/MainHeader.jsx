import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useContext } from 'react';

import { GlobalState } from '../../store/context/globalState';
import { UsersContext } from '../../store/context/userState';
import { IconButton } from '../index';
import * as Icons from '../icons';

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 3.6875rem;
  background-color: var(--header-bg);
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  max-width: 47.8125rem;
  min-width: 11.25rem;
  height: 2.5rem;
  margin-left: 1rem;
  cursor: pointer;
`;

const ButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 4.625rem;
  height: 1.5rem;
  margin-right: 1.5rem;
  font-size: 1.5rem;
  color: var(--gray);
`;
const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  color: inherit;
  cursor: pointer;
  outline: inherit;
  border: inherit;
`;
const Text = styled.p`
  font-size: 0.9375rem;
  margin-left: 0.9375rem;
`;

function ManinHeader({ props }) {
  const { dispatch } = useContext(GlobalState);
  const { state2 } = useContext(UsersContext);

  return (
    <Box>
      <ProfileBox
        onClick={() => {
          dispatch({ type: 'Open' });
        }}
      >
        <Avatar>
          <Image
            src={state2?.picture || '/avatar.png'}
            alt="Avatar"
            width={40}
            height={40}
          />
          <Text> {state2?.name || 'Jaxson Westervelt'} </Text>
        </Avatar>
      </ProfileBox>
      <ButtonsGroup>
        <IconButton onClick={() => {}}>
          <Icons.Search />
        </IconButton>
        <IconButton onClick={() => {}}>
          <Icons.Menu />
        </IconButton>
      </ButtonsGroup>
    </Box>
  );
}

ManinHeader.propTypes = {
  props: PropTypes.array,
};

export default ManinHeader;
