import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

const testMovie = {
  id: 1,
  title: `Bohemian Rhapsody`,
  previewImage: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Comedy`,
  releaseDate: 2011,
  posterImage: `the-grand-budapest-hotel-poster.jpg`,
  backgroundImage: `bg-the-grand-budapest-hotel.jpg`,
  ratingScore: 8,
  ratingCount: 1240,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  director: `director2`,
  starring: [`actor`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  runTime: 30,
  comments: [
    {
      id: 0,
      text: `I didnt find it amusing, and while I can appreciate the creativity, its an
      hour and 40 minutes I wish I could take back.`,
      author: `Amanda Greever`,
      date: `November 18, 2015`,
      rating: `8,0`
    },
  ],
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MovieCard group`, () => {
  const onCardClick = jest.fn();
  const movieCard = shallow(
      <MovieCard
        key={testMovie.id}
        film={testMovie}
        onCardClick={onCardClick}
      />
  );

  it(`MovieCard click on card/title is correct`, () => {
    const movieTitleLink = movieCard.find(`.small-movie-card__link`);
    movieTitleLink.forEach((it) => {
      it.props().onClick();
    });

    expect(onCardClick).toHaveBeenCalledTimes(1);
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
