const userReducer = (state, { type, payload }) => {
  switch (type) {
    case 'userUpdate':
      return payload;

    default:
      return state;
  }
};

export default userReducer;
