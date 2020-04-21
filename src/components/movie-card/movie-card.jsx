import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import VideoPlayer from "./../video-player/video-player.jsx";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      activeCard: null
    };

    this._handleCardMouseHoverOn = this._handleCardMouseHoverOn.bind(this);
    this._handleCardMouseHoverOff = this._handleCardMouseHoverOff.bind(this);
  }

  _handleCardMouseHoverOn() {
    const {film} = this.props;
    this.setState({
      activeCard: film,
      isPlaying: true
    });
  }

  _handleCardMouseHoverOff() {
    this.setState({
      activeCard: null,
      isPlaying: false
    });
  }

  render() {
    const {film, onMovieTitleClick} = this.props;
    const {id, title, previewImage, previewSrc} = film;

    return (
      <article
        key={id}
        onMouseEnter={this._handleCardMouseHoverOn}
        onMouseLeave={this._handleCardMouseHoverOff}
        className="small-movie-card catalog__movies-card"
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            src={previewSrc}
            isPlaying={this.state.isPlaying}
            previewImage={`img/${previewImage}`}
            muted={true}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="#" onClick={onMovieTitleClick}>{title}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    previewSrc: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    posterImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    ratingScore: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  onMovieTitleClick: PropTypes.func.isRequired
};

export default MovieCard;
