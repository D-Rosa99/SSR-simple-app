import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../client/reducers";

const setupReduxCreateStore = () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));

  return store;
};

export default setupReduxCreateStore;
