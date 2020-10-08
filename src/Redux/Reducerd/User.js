export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER':
      return { ...action.payload };
    case 'CLEAR_USER':
      return { ...action.payload };
    default:
      return state;
  }
};
