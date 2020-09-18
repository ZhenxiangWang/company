import * as t from "./actionTypes";

const initialState = {
  initialized: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.REQUEST_INITIALIZE:
      return { ...state, initialized: false };
    case t.RECEIVE_INITIALIZE:
      return { ...state, initialized: true };
    default:
      return state;
  }
};
