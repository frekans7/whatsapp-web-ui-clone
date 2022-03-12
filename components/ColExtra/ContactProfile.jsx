import styled from 'styled-components';
import Image from 'next/image';
import { useContext } from 'react';

import { UsersContext } from '../../store/context/userState';
import { Space } from '../index';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 19.875rem;
  background-color: var(--component-bg);
`;
const Avatar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.75rem;
  cursor: pointer;
  outline: inherit;
  border: inherit;
`;
const Text = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: center;
  font-size: 1.5rem;
`;
const PhoneNumber = styled.div`
  display: flex;
  margin-top: 0.375rem;
  justify-content: center;
  color: var(--text-gray);
`;

function ContactProfile() {
  const { state2 } = useContext(UsersContext);

  return (
    <>
      <Box>
        <Avatar>
          <Image
            src={state2?.picture || '/avatar.png'}
            alt="ContactProfile"
            width={200}
            height={200}
            quality={100}
          />
        </Avatar>
        <Text>{state2?.name || 'Jaxson Westervelt'}</Text>
        <PhoneNumber>{state2?.phone_number || '+90 123 456 78 90'}</PhoneNumber>
      </Box>
      <Space />
    </>
  );
}

export default ContactProfile;
