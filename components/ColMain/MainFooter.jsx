import styled from 'styled-components';

import * as Icons from '../icons';
import { IconButton } from '../index';

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 3.875rem;
  background-color: var(--header-bg);
`;

const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 4rem;
  height: 1.5rem;
  margin-left: 1.3125rem;
  font-size: 1.5rem;
  color: var(--gray);
`;

const Text = styled.div`
  display: flex;
  margin-left: 1.125rem;
  margin-right: 1.125rem;
  width: 51.9375rem;
  height: 2.625rem;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 0.9375rem;
  border-radius: 1.3125rem;
  padding-left: 0.8125rem;
  padding-right: 0.8125rem;
`;

const FooterRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.25rem;
  font-size: 1.5rem;
  color: var(--gray);
`;

function MainFooter() {
  return (
    <Box>
      <FooterLeft>
        <IconButton onClick={() => {}}>
          <Icons.Smile />
        </IconButton>
        <IconButton onClick={() => {}}>
          <Icons.Attach />
        </IconButton>
      </FooterLeft>
      <Text>
        <Input type="text" placeholder="Type a message" />
      </Text>
      <FooterRight>
        <IconButton onClick={() => {}}>
          <Icons.Microphone />
        </IconButton>
      </FooterRight>
    </Box>
  );
}

export default MainFooter;
