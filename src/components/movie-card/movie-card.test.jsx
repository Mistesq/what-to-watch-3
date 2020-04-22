import React from "react";
import renderer from "react-test-renderer";
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

it(`Should movie card render correctly`, () => {
  const tree = renderer
    .create(<MovieCard
      key={testMovie.id}
      film={testMovie}
      onCardClick={() => {}}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
