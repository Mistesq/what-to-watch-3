import React from 'react';
import ReactDOM from 'react-dom';
import {PromoFilm} from "./mocks/films.js";
import App from './components/app/app.jsx';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

ReactDOM.render(
    <Provider store={store}>
      <App promoFilm={PromoFilm}/>
    </Provider>,
    document.querySelector(`#root`)
);
