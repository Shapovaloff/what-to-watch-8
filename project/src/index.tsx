import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const mainFilmCard = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App mainFilmCard={mainFilmCard} />
  </React.StrictMode>,
  document.getElementById('root'));
