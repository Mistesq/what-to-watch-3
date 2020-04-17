import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

const testMovie = {
  id: 1,
  title: `Bohemian Rhapsody`,
  genre: `Drama`,
  previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  year: 2019,
  previewImage: `bohemian-rhapsody.jpg`
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MovieCard group`, () => {
  const onMovieTitleClick = jest.fn();
  const movieCard = shallow(
      <MovieCard
        key={testMovie.id}
        film={testMovie}
        onMovieTitleClick={onMovieTitleClick}
      />
    );

  it(`MovieCard click on card/title is correct`, () => {
    const movieTitleLink = movieCard.find(`.small-movie-card__link`);
    movieTitleLink.forEach((it) => {
      it.props().onClick();
    });

    expect(onMovieTitleClick).toHaveBeenCalledTimes(1);
  });

  it(`MovieCard mouseenter event is correctly changes state`, () => {
    movieCard.simulate(`mouseenter`);
    expect(movieCard.state().activeCard).toEqual(testMovie);
  });

  it(`MovieCard mouseleave event is correctly changes state`, () => {
    movieCard.simulate(`mouseleave`);
    expect(movieCard.state().isPlaying).toBe(false);
    expect(movieCard.state().activeCard).toEqual(null);
  });
});
