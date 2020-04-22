import React from 'react';
import ReactDOM from 'react-dom';
import {films, PromoFilm} from "./mocks/films.js";
import App from './components/app/app.jsx';

ReactDOM.render(
    <App promoFilm={PromoFilm} films={films}/>,
    document.querySelector(`#root`)
);
