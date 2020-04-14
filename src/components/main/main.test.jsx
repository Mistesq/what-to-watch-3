import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {FilmListTest, PromoFilmTest} from "./main.test.mock.js";

it(`Should main-screen render correctly`, () => {
  const tree = renderer
    .create(<Main promoFilm={PromoFilmTest} filmList={FilmListTest} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
