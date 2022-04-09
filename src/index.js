import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import MainReducer from './reducers/MainReducer';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import CreateTodo from './containers/CreateTodo';

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f =>
  f)(createStore)(MainReducer)

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(<Provider store={store}> <CreateTodo /> </Provider>);

// ReactDOM.render(<Provider store={store}>
//   <CreateTodo />
//   </Provider>
//   , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
