import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

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

it(`Should main-screen render correctly`, () => {
  const tree = renderer
    .create(<Main promoFilm={promoFilmTest} movieList={movieTestList} onMovieTitleClick={() => {}} />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
