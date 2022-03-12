import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

import { UsersContext } from '../../store/context/userState';
import { IconButton } from '../index';
import * as Icons from '../icons';

const Divider = styled.div`
  position: relative;
  top: 0.98rem;
  background-color: var(--gray);
  height: 1px;
  transform: scaleY(0.2);
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
  margin-left: 0.8125rem;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-left: 0.9375rem;
  margin-right: 0.9375rem;
`;

const Box1 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Box2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
`;

const Box3 = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.p`
  font-size: 0.9375rem;
  margin: 0;
  padding: 0;
`;
const Date = styled.p`
  font-size: 0.9375rem;
  margin: 0;
  padding: 0;
  color: var(--gray);
`;

// const TickIcon = styled(Icons.Tick)`
//   color: var(--gray);
// `;
const DoubleTickIcon = styled(Icons.DoubleTick)`
  color: var(--gray);
`;
// const ReadedTickIcon = styled(Icons.DoubleTick)`
//   color: var(--blue);
// `;

const Message = styled.p`
  color: var(--gray);
  margin: 0;
  padding: 0;
`;
const move = keyframes`
  from {right: -0.938rem;}
  to {right : 0;}
`;

const OptionIcon = styled(Icons.ArrowDown)`
  color: var(--gray);
  font-size: 1.5rem;
  visibility: hidden;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 4.5625rem;
  background-color: var(--component-bg);

  &:hover {
    cursor: pointer;
    background-color: var(--header-bg);
    transition: 0.5s;

    ${OptionIcon} {
      visibility: visible;
      position: relative;
      animation: ${move} 0.2s;
    }
  }

  ${({ active }) => active === true && `background-color: var(--header-bg);`}
`;

function NewChat({ props }) {
  const { dispatch2 } = useContext(UsersContext);

  const handle = () => {
    dispatch2({
      type: 'userUpdate',
      payload: props,
    });
  };

  return (
    <Container onClick={handle}>
      <Avatar>
        <Image
          src={props.picture || '/avatar.png'}
          alt={props.picture}
          width={49}
          height={49}
        />
      </Avatar>
      <Box>
        <Box1>
          <Name>{props.name || 'Jocelyn Lipshutz'}</Name>
          <Date>{props.date || 'yesterday'}</Date>
        </Box1>
        <Box2>
          <Box3>
            <DoubleTickIcon />
            <Message>{props.message || 'see you latter'}</Message>
          </Box3>
          <IconButton>
            <OptionIcon />
          </IconButton>
        </Box2>
        <Divider />
      </Box>
    </Container>
  );
}

NewChat.propTypes = {
  props: PropTypes.object,
  picture: PropTypes.object,
  name: PropTypes.string,
  date: PropTypes.string,
  message: PropTypes.string,
};

export default NewChat;
