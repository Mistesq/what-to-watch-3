import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main.jsx';
import MoviePage from "../movie-page/movie-page.jsx";

const SIMILAR_FILMS_COUNT = 4;

class App extends PureComponent {
  constructor(props) {
    super(props);

    this._handleSmallMovieCardClick = this._handleSmallMovieCardClick.bind(this);

    this.state = {
      selectedMovieId: null
    };
  }

  render() {
    const {films} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film">
            <MoviePage film={films[0]} similarFilms={films.slice(0, SIMILAR_FILMS_COUNT)} onCardClick={this._handleSmallMovieCardClick}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {films} = this.props;
    const {selectedMovieId} = this.state;

    if (selectedMovieId !== null) {
      const similarFilms = films.filter((film) => film.genre === films[selectedMovieId].genre && film.id !== selectedMovieId).slice(0, SIMILAR_FILMS_COUNT);
      return <MoviePage film={films[selectedMovieId]} similarFilms={similarFilms} onCardClick={this._handleSmallMovieCardClick} />;
    }

    return <Main
      promoFilm={this.props.promoFilm}
      films={this.props.films}
      onCardClick={this._handleSmallMovieCardClick}
    />;
  }

  _handleSmallMovieCardClick(selectedMovieId) {
    this.setState({selectedMovieId});
  }
}

App.propTypes = {
  promoFilm: PropTypes.exact({
    filmName: PropTypes.string.isRequired,
    filmGenre: PropTypes.string.isRequired,
    filmYear: PropTypes.number.isRequired
  }).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
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
    starring: PropTypes.arrayOf(PropTypes.string).isRequired
  }))
};

export default App;
