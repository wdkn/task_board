import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoStore from './component/Store'
// import SignUp from './component/SignUp';
import reportWebVitals from './reportWebVitals';

import { createStore, combinedReducers } from 'redux';
import { Provider } from 'react-redux';
import Todo from './component/Todo';

ReactDOM.render(
  <Provider store={TodoStore}>
    <App />
    {/* <SignUp /> */}
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
