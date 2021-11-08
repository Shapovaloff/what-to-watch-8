import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './moks/films';
import {comments} from './moks/comments';
import {Provider} from 'react-redux';
import {createStore} from '@reduxjs/toolkit';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App films={films} comments={comments} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
