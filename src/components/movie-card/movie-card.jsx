import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import VideoPlayer from "./../video-player/video-player.jsx";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._handleCardMouseHoverOn = this._handleCardMouseHoverOn.bind(this);
    this._handleCardMouseHoverOff = this._handleCardMouseHoverOff.bind(this);
  }

  _handleCardMouseHoverOn() {
    const {film, onActiveItemChange} = this.props;
    onActiveItemChange(film.id);
  }

  _handleCardMouseHoverOff() {
    const {onActiveItemChange} = this.props;
    onActiveItemChange(-1);
  }

  render() {
    const {film, onCardClick, activeItem: activeCardId} = this.props;
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
            isPlaying={film.id === activeCardId}
            previewImage={`img/${previewImage}`}
            muted={true}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="#" onClick={onCardClick}>{title}</a>
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
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    runTime: PropTypes.number.isRequired,
  }).isRequired,
  onCardClick: PropTypes.func.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
  activeItem: PropTypes.number.isRequired,
};

export default MovieCard;
