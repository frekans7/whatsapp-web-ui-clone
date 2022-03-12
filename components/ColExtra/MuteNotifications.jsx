import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 3.8125rem;
  background-color: var(--component-bg);
  &:hover {
    cursor: pointer;
  }
`;
const Box = styled.div`
  display: flex;
`;

const Text = styled.div`
  display: flex;
  margin-left: 1.875rem;
  width: 20rem;
  height: 1.3125rem;
`;

const MuteIcon = styled.div`
  display: flex;
  margin-right: 1.875rem;
  margin-left: auto;
`;

const Input = styled.input`
  height: 1.125rem;
  width: 1.125rem;
  &:hover {
    cursor: pointer;
  }
`;

function MuteNotifications() {
  const [checked, setChecked] = useState(false);
  const handle = () => {
    setChecked(!checked);
  };
  return (
    <Container onClick={handle}>
      <Box>
        <Text>Mute notifications</Text>
        <MuteIcon>
          <Input type="checkbox" checked={checked} onChange={handle} />
        </MuteIcon>
      </Box>
    </Container>
  );
}

export default MuteNotifications;
