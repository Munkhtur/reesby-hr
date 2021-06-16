const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_EVENT':
      return [...state, action.payload];
    case 'GET_EVENTS':
      return action.payload;

    default:
      return state;
  }
}
