import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const movieTestList = [
  {
    id: 1,
    title: `Bohemian Rhapsody`,
    genre: `Drama`,
    previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    releaseDate: 2014,
    previewImage: `bohemian-rhapsody.jpg`,
    posterImage: `the-grand-budapest-hotel-poster.jpg`,
    backgroundImage: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 8.9,
    ratingCount: 240,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege. Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`]
  },
  {
    id: 2,
    title: `Battlefield Earth: A Saga of the Year 3000`,
    genre: `Comedy`,
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    releaseDate: 2011,
    previewImage: `bohemian-rhapsody.jpg`,
    posterImage: `the-grand-budapest-hotel-poster.jpg`,
    backgroundImage: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 8,
    ratingCount: 1240,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    director: `director2`,
    starring: [`actor`, `Edward Norton`, `Jude Law`, `Willem Dafoe`]
  }
];

const promoFilmTest = {
  filmName: `The Wizard of Oz`,
  filmGenre: `Adventure`,
  filmYear: 1939
};

it(`Render App`, () => {
  const tree = renderer
    .create(<App promoFilm={promoFilmTest} movieList={movieTestList} />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
