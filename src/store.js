import { createStore } from 'redux';


const TOGGLE_THEME = 'TOGGLE_THEME';


const initialState = {
  isDarkTheme: false,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, isDarkTheme: !state.isDarkTheme };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;