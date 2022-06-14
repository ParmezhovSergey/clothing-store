import React from 'react';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './components/reduxStore';
import { render } from 'react-dom';


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);