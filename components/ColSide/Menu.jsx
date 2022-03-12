/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import styled from 'styled-components';
import { useContext } from 'react';

import { GlobalState } from '../../store/context/globalState';

const Container = styled.div`
  width: 12.5rem;
  height: 17.5rem;
  background-color: var(--menu-bg);
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    padding-top: 0.5625rem;

    li {
      height: 2rem;
      margin-bottom: 0.4rem;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      padding-left: 1rem;

      &:hover {
        background-color: var(--header-bg);
      }

      &:nth-child(6) {
        font-weight: bold;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;
const items = [
  'New group',
  'Create a room',
  'Profile',
  'Archived',
  'Starred',
  'Settings',
  'Logout',
];

const Menu = () => {
  const { dispatch } = useContext(GlobalState);
  const handle = (e) => {
    e.target.innerText === 'Settings' && dispatch({ type: 'SettingsMenuOpen' });
  };

  return (
    <Container>
      <ul>
        {items.map((title) => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <li key={title} onClick={(e) => handle(e)}>
            {title}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Menu;
