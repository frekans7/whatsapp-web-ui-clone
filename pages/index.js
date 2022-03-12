import styled, { css } from 'styled-components';
import { useContext, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import useWindowSize from '../hooks/useWindowSize';
import { GlobalState } from '../store/context/globalState';

import {
  ColSide,
  ColMain,
  CoolExtra,
  Layout,
  MobileMessage,
  Modal,
  Theme,
} from '../components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-image: url('/appBackground.png');
  ${({ props }) =>
    props === 'dark' &&
    css`
      background-image: none;
      background-color: #0a1014;
    `}

  ${({ props }) =>
    props === 'system' &&
    css`
      @media (prefers-color-scheme: dark) {
        background-image: none;
        background-color: #0a1014;
      }
    `}
`;

function HomePage() {
  const size = useWindowSize();
  const { state, dispatch } = useContext(GlobalState);
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handle = () => {
    if (state.menuIsOpen === true) {
      dispatch({ type: 'MenuClose' });
    }
  };

  return (
    <Wrapper onClick={handle} props={theme}>
      {size.width < 750 && <MobileMessage />}
      <Modal show={state.showModal}>
        <Theme onClose={() => dispatch({ type: 'ModalClose' })} />
      </Modal>
      <Layout>
        <ColSide />
        <ColMain>
          <CoolExtra />
        </ColMain>
      </Layout>
    </Wrapper>
  );
}

export default HomePage;
