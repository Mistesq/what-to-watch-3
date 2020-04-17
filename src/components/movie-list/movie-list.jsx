import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "./../movie-card/movie-card.jsx";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movies, onMovieTitleClick} = this.props;
    return (
      <div className="catalog__movies-list">
        {movies.map((movie) =>
          <MovieCard
            key={movie.id}
            film={movie}
            onMovieTitleClick={onMovieTitleClick}
          />
        )}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    previewSrc: PropTypes.string.isRequired
  })).isRequired,
  onMovieTitleClick: PropTypes.func.isRequired
};

export default MovieList;
