import React from 'react';
import PropTypes from "prop-types";

import Main from '../main/main.jsx';

const App = ({promoFilm, filmList}) => {
  return <Main promoFilm={promoFilm} filmList={filmList}/>;
};

App.propTypes = {
  filmList: PropTypes.arrayOf(PropTypes.string).isRequired,
  promoFilm: PropTypes.exact({
    filmName: PropTypes.string.isRequired,
    filmGenre: PropTypes.string.isRequired,
    filmYear: PropTypes.number.isRequired
  }).isRequired
};

export default App;
