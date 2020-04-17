import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const movieTestList = [
  {
    id: 1,
    title: `Bohemian Rhapsody`,
    genre: `Drama`,
    year: 2019,
    img: `bohemian-rhapsody.jpg`
  },
  {
    id: 2,
    title: `Battlefield Earth: A Saga of the Year 3000`,
    genre: `Drama`,
    year: 2019,
    img: `bohemian-rhapsody.jpg`
  }
];

const promoFilmTest = {
  filmName: `The Wizard of Oz`,
  filmGenre: `Adventure`,
  filmYear: 1939
};

it(`Should main-screen render correctly`, () => {
  const tree = renderer
    .create(<Main promoFilm={promoFilmTest} movieList={movieTestList} onMovieTitleClick={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
