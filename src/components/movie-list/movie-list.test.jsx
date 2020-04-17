import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list.jsx";

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

it(`Should movie list render correctly`, () => {
  const tree = renderer
    .create(
        <MovieList
          movies={movieTestList}
          onMovieTitleClick={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
