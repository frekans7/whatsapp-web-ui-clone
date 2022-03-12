import styled from 'styled-components';
import { useContext } from 'react';
import { UsersContext } from '../../store/context/userState';
import { Space } from '../index';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 5.125rem;
  background-color: var(--component-bg);
`;

const Motto = styled.div`
  font-size: 1rem;
  display: flex;
  margin-left: 1.875rem;
  max-width: 23.25rem;
  min-width: 15rem;
  height: 1.188rem;
  margin-bottom: 0.563rem;
`;

const Text = styled(Motto)`
  height: 1rem;
  font-size: 0.875rem;
  color: var(--text-gray);
`;

function AboutPhoneNumber() {
  const { state2 } = useContext(UsersContext);

  return (
    <>
      <Container>
        <Text>About</Text>
        <Motto>{state2?.about || 'Hey there! I am using WhatsApp.'}</Motto>
      </Container>
      <Space />
    </>
  );
}

export default AboutPhoneNumber;
