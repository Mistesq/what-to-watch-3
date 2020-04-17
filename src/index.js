import React from 'react';
import ReactDOM from 'react-dom';
import {MovieList, PromoFilm} from "./mocks/films.js";
import App from './components/app/app.jsx';

ReactDOM.render(
    <App promoFilm={PromoFilm} movieList={MovieList}/>,
    document.querySelector(`#root`)
);
