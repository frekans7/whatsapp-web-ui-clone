const globalReducer = (state, { type }) => {
  switch (type) {
    case 'Open':
      return {
        ...state,
        colExtraIsOpen: true,
        colExtraStarted: true,
      };
    case 'Close':
      return {
        ...state,
        colExtraIsOpen: false,
      };
    case 'MenuOpen':
      return {
        ...state,
        menuIsOpen: true,
      };
    case 'MenuClose':
      return {
        ...state,
        menuIsOpen: false,
      };
    case 'SettingsMenuOpen':
      return {
        ...state,
        settingsIsOpen: true,
        settingsStarted: true,
      };
    case 'SettingsMenuClose':
      return {
        ...state,
        settingsIsOpen: false,
      };
    case 'ModalOpen':
      return {
        ...state,
        showModal: true,
      };
    case 'ModalClose':
      return {
        ...state,
        showModal: false,
      };
    case 'LinkLoad':
      return {
        ...state,
        src: 'https://github.com/frekans7/whatsapp-web-ui-clone',
      };
    case 'LinkReset':
      return {
        ...state,
        src: null,
      };

    default:
      return state;
  }
};

export default globalReducer;
