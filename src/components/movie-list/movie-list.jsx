import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import MovieCard from "./../movie-card/movie-card.jsx";
const MovieCardWrapped = withActiveItem(MovieCard);

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movies, onCardClick} = this.props;
    return (
      <div className="catalog__movies-list">
        {movies.map((movie) =>
          <MovieCardWrapped film={film} onCardClick={onCardClick} key={film.id}/>
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
    releaseDate: PropTypes.number.isRequired,
    previewSrc: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    ratingScore: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    runTime: PropTypes.number.isRequired,
  })).isRequired,
  onCardClick: PropTypes.func.isRequired
};

export default MovieList;
