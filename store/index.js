import { useReducer } from 'react';
import PropTypes from 'prop-types';

import { GlobalState, initialGlobal } from './context/globalState';
import globalReducer from './reducer/globalReducer';

import { UsersContext, initialUser } from './context/userState';
import userReducer from './reducer/userReducer';

// combine Reducer function
const combineReducers = (...reducers) => (state, action) => {
  for (let i = 0; i < reducers.length; i += 1)
    // eslint-disable-next-line no-param-reassign
    state = reducers[i](state, action);
  return state;
};

// context Provider
const Provider = ({ children }) => {
  // Global State
  const [state, dispatch] = useReducer(
    combineReducers(globalReducer),
    initialGlobal
  );
  const value = { state, dispatch };

  // User State
  const [state2, dispatch2] = useReducer(
    combineReducers(userReducer),
    initialUser
  );
  const value2 = { state2, dispatch2 };

  return (
    <GlobalState.Provider value={value}>
      <UsersContext.Provider value={value2}>{children}</UsersContext.Provider>
    </GlobalState.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Provider;
