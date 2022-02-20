import { FETCH_USER } from "../actions/actionTypes";

export default (initialState = [], action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload.data;

    default:
      return initialState;
  }
};
