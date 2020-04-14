import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";
import {FilmListTest, PromoFilmTest} from "./main.test.mock.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should movie title button be pressed`, () => {
  const onMovieTitleClick = jest.fn();

  const mainPage = shallow(
      <Main
        promoFilm={PromoFilmTest}
        filmList={FilmListTest}
        onMovieTitleClick={onMovieTitleClick}
      />
  );

  const movieTitleLink = mainPage.find(`.small-movie-card__link`);

  movieTitleLink.forEach((it) => {
    it.props().onClick();
  });

  expect(onMovieTitleClick.mock.calls.length).toBe(FilmListTest.length);
});
