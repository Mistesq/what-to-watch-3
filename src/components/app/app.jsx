import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import Main from '../main/main.jsx';

const movieTitleClickHandler = () => {};

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Main
        promoFilm={this.props.promoFilm}
        movieList={this.props.movieList}
        onMovieTitleClick={movieTitleClickHandler}
      />
    );
  }
}

App.propTypes = {
  promoFilm: PropTypes.exact({
    filmName: PropTypes.string.isRequired,
    filmGenre: PropTypes.string.isRequired,
    filmYear: PropTypes.number.isRequired
  }).isRequired,
  movieList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewSrc: PropTypes.string.isRequired
  }))
};

export default App;
