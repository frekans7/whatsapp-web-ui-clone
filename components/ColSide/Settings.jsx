/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import styled from 'styled-components';
import { useContext } from 'react';
import Image from 'next/image';

import { SETTINGS } from '../../constants';
import { IconButton } from '../index';
import * as Icons from '../icons';
import { GlobalState } from '../../store/context/globalState';

const Header = styled.div`
  display: flex;
  max-width: 27rem;
  height: 6.75rem;
  background-color: var(--light-green);
`;

const BackIcon = styled(Icons.Back)`
  font-size: 1.5rem;
  color: white;
`;

const Text = styled.div`
  max-width: 20.1875rem;
  height: 1.25rem;
  font-size: 1.1875rem;
  color: white;
  margin-left: 1.8125rem;
`;

const Box = styled.div`
  display: inline-flex;
  max-width: 23.5rem;
  height: 1.5rem;
  margin-left: 1.8125rem;
  margin-top: 4.125rem;
`;

const Profile = styled.div`
  display: flex;
  max-width: 27rem;
  height: 7.0625rem;
  background-color: var(--component-bg);
  cursor: pointer;
  &:hover {
    background-color: var(--header-bg);
  }
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  font-size: 5.125rem;
  margin-left: 1.1875rem;
`;
const Name = styled.div`
  height: 1.25rem;
  font-size: 1.1875rem;
  margin-top: 2.5rem;
  margin-left: 1.1875rem;
`;
const About = styled.div`
  margin-left: 1.1875rem;
  height: 1.25rem;
`;
const List = styled.div`
  display: flex;
  max-width: 27rem;
  height: 26.25rem;
  background-color: var(--component-bg);

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 26.25rem;

    @media screen and (max-width: 1440px) {
      width: 27rem;
    }

    li {
      display: flex;
      justify-content: start;
      align-items: start;
      height: 3.75rem;
      padding-left: 1.5625rem;
      flex-direction: column;
      padding: 0.813rem;

      &:hover {
        background-color: var(--header-bg);
      }

      &:nth-child(2),
      &:nth-child(7) {
        font-weight: bold;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;

const ListIcon = styled.div`
  display: flex;
  color: var(--gray);
  font-size: 1.5rem;
  margin-left: 0.438rem;
  margin-right: 1.5625rem;
  justify-content: start;
  align-items: center;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25vw;

  @media screen and (min-width: 1441px) {
    width: 18vw;
  }
`;

const Divider = styled.div`
  display: flex;
  position: relative;
  left: 0rem;
  top: 1.3rem;
  background-color: var(--gray);
  height: 1px;
  transform: scaleY(0.2);
  margin-left: 3.125rem;
  width: 88%;

  @media screen and (min-width: 1440px) {
    width: 90.5%;
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Container = styled.div`
  height: 100vh;
`;
const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

function Settings() {
  const { state, dispatch } = useContext(GlobalState);

  const back = () => {
    dispatch({ type: 'SettingsMenuClose' });
  };

  const handle = (e) => {
    if (e.target.innerText === 'Theme') {
      dispatch({ type: 'ModalOpen' });
    }
    if (e.target.innerText === 'GitHub') {
      dispatch({ type: 'LinkLoad' });
    }
    if (e.target.innerText !== 'GitHub') {
      dispatch({ type: 'LinkReset' });
    }
  };

  return (
    <Container>
      <Header>
        <Box>
          <IconButton onClick={back}>
            <BackIcon />
          </IconButton>
          <Text>Settings</Text>
        </Box>
      </Header>
      <Profile>
        <Avatar>
          <Image src="/profile.png" width={82} height={82} alt="progfile" />
        </Avatar>
        <div>
          <Name>Serkan</Name>
          <About>.</About>
        </div>
      </Profile>
      <List>
        <ul>
          {SETTINGS.map((item, index) => (
            <li key={index} onClick={(e) => handle(e)} onKeyPress={null}>
              <>
                <Link href={state?.src} target="_blank">
                  <Row>
                    <ListIcon>{item.icon}</ListIcon> <Title>{item.title}</Title>
                  </Row>
                </Link>
              </>

              <Divider />
            </li>
          ))}
        </ul>
      </List>
    </Container>
  );
}

export default Settings;
