import { createStore } from 'redux';
import { combineReducers } from 'redux';

const ownerReducer = (nowState, action) => {
  return {};
};

export const store = createStore(
  ownerReducer
);

store.asyncReducers = {};

function createReducer(asyncReducers) {
  return combineReducers({
    ownerReducer,
    ...asyncReducers
  });
}

export function injectAsyncReducer(name, asyncReducer) {
  if(name !== '' && name !== null){
    store.asyncReducers[name] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  }

  return store;
}

export default store;