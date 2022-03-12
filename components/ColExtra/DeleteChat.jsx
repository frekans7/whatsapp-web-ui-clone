import styled from 'styled-components';
import * as Icons from '../icons';
import { Space } from '../index';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 3.75rem;
  background-color: var(--component-bg);
  &:hover {
    cursor: pointer;
  }
`;
const Box = styled.div`
  display: flex;
  margin-left: 1.5625rem;
  color: var(--text-red);
`;
const Icon = styled(Icons.Delete)`
  font-size: 1.5rem;
  margin-right: 1.5625rem;
`;
const Text = styled.div`
  display: flex;
  align-items: center;
`;

function DeleteChat() {
  return (
    <>
      <Container>
        <Box>
          <Icon />
          <Text>Delete chat</Text>
        </Box>
      </Container>
      <Space />
      <Space />
      <Space />
      <Space />
    </>
  );
}
export default DeleteChat;
