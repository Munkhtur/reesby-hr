const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case 'POST_ATTENDANCE':
      return [...state, action.payload];
    case 'GET_ATTENDANCE':
      return action.payload;

    default:
      return state;
  }
}
