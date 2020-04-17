import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const movieTestList = [
  {
    id: 1,
    title: `Bohemian Rhapsody`,
    genre: `Drama`,
    previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    year: 2019,
    previewImage: `bohemian-rhapsody.jpg`
  },
  {
    id: 2,
    title: `Battlefield Earth: A Saga of the Year 3000`,
    genre: `Drama`,
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    year: 2019,
    previewImage: `bohemian-rhapsody.jpg`
  }
];

const promoFilmTest = {
  filmName: `The Wizard of Oz`,
  filmGenre: `Adventure`,
  filmYear: 1939
};

it(`Render App`, () => {
  const tree = renderer
    .create(<App promoFilm={promoFilmTest} movieList={movieTestList} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
