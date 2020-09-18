import * as t from "./actionTypes";

const requestInitialize = () => ({ type: t.REQUEST_INITIALIZE });
const receiveInitialize = () => ({ type: t.RECEIVE_INITIALIZE });

export const initialize = () => (dispatch) => {
  dispatch(requestInitialize());
  // Do something
  dispatch(receiveInitialize());
};
