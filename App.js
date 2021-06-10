import React from 'react';
import Login from './Login';
import store from './Store';
import { Provider } from 'react-redux';

export default function App() {

  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}
