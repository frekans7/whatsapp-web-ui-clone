import { createContext } from 'react';

// initial State
const initialGlobal = {
  colExtraIsOpen: false,
  menuIsOpen: false,
  settingsIsOpen: false,
  settingsStarted: false,
  colExtraStarted: false,
  showModal: false,
  src: null,
};
// create Context
const GlobalState = createContext({});

export { initialGlobal, GlobalState };
