import styled from 'styled-components';

import * as Icons from '../icons';
import { Icon } from '../others/IconButton';

const Box = styled.div`
  display: flex;
  max-width: 27rem;
  height: 5.525rem;
  background-color: var(--notification-bg);
  cursor: pointer;
`;

const NotifyButton = styled(Icon)`
  color: white;
  font-size: 3rem;
  margin-left: 0.8125rem;
`;
const Text = styled.div`
  max-width: 20.6875rem;
  height: 2.5rem;
  margin-left: 0.9375rem;
  margin-top: 1.3125rem;
  color: var(--fg);
`;

const Title = styled.p`
  font-size: 1.125rem;
  margin: 0;
  padding: 0;
`;
const SubTitle = styled.p`
  display: inline;
  font-size: 0.875rem;
  margin: 0;
  padding: 0;
  color: var(--text-gray);

  &:hover {
    text-decoration: underline;
  }
`;

const Sub = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
`;

function DesktopNotifications() {
  return (
    <Box>
      <NotifyButton>
        <Icons.NotificationsSlash />
      </NotifyButton>
      <Text>
        <Title>Get notified of new messages</Title>
        <Sub>
          <SubTitle>Turn on desktop notifications </SubTitle>
          <Icons.ArrowRight />
        </Sub>
      </Text>
    </Box>
  );
}

export default DesktopNotifications;
