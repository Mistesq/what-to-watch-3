import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

const testMovie = {
  id: 1,
  title: `Bohemian Rhapsody`,
  genre: `Drama`,
  previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  releaseDate: 2014,
  previewImage: `bohemian-rhapsody.jpg`,
  posterImage: `the-grand-budapest-hotel-poster.jpg`,
  backgroundImage: `bg-the-grand-budapest-hotel.jpg`,
  ratingScore: 8.9,
  ratingCount: 240,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege. Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`]
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
