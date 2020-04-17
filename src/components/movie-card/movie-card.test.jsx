import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

const testMovie = {
  id: 1,
  title: `Bohemian Rhapsody`,
  genre: `Drama`,
  previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  year: 2019,
  previewImage: `bohemian-rhapsody.jpg`
};

it(`Should movie card render correctly`, () => {
  const tree = renderer
    .create(<MovieCard
      key={testMovie.id}
      film={testMovie}
      onMovieTitleClick={() => {}}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
