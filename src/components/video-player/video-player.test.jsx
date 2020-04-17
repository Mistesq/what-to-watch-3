import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from "./video-player";

const film = {
  id: 1,
  title: `Bohemian Rhapsody`,
  genre: `Drama`,
  previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  year: 2019,
  previewImage: `bohemian-rhapsody.jpg`
};

it(`VideoPlayer component should render correct`, () => {
  const tree = renderer.create(<VideoPlayer
    src={film.previewSrc}
    isPlaying={false}
    previewImage={film.previewImage}
    muted={true}
  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
