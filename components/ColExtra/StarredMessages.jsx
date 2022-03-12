import styled from 'styled-components';
import { Space } from '../index';
import * as Icons from '../icons';

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

const ArrowIcon = styled.div`
  display: flex;
  margin-right: 1.875rem;
  margin-left: auto;
  font-size: 1.5rem;
  color: var(--gray);
`;

function StarredMessages() {
  return (
    <>
      <Container>
        <Box>
          <Text>Starred Messages</Text>
          <ArrowIcon>
            <Icons.ArrowRight />
          </ArrowIcon>
        </Box>
      </Container>
      <Space />
    </>
  );
}

export default StarredMessages;
