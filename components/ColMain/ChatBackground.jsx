import styled, { css } from 'styled-components';
import { useTheme } from 'next-themes';

const ChatBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url('/chatBackground.png');

  ${({ props }) =>
    props === 'dark' &&
    css`
      background-image: url('/chatBackground-dark.png');
    `}

  ${({ props }) =>
    props === 'system' &&
    css`
       @media (prefers-color-scheme: dark) {
        background-image: url('/chatBackground-dark.png');
        @media (prefers-color-scheme: light) {
        background-image: url('/chatBackground.png');        
      `}
`;

function ChatBackground() {
  const { theme } = useTheme();
  return <ChatBox props={theme} />;
}
export default ChatBackground;
