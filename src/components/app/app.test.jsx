import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {App} from "./app.jsx"

const mockStore = configureStore([]);

const ALL_GENRES = `All genres`;

const movieTestList = [
  {
    id: 0,
    title: `The Grand Budapest Hotel`,
    previewImage: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Drama`,
    releaseDate: 2014,
    posterImage: `the-grand-budapest-hotel-poster.jpg`,
    backgroundImage: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 8.9,
    ratingCount: 240,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege. Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: 20,
    comments: [
      {
        id: 0,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `December 24, 2016`,
        rating: `8,9`
      },
      {
        id: 1,
        text: `Andersons films are too precious for some, but for those of us willing to
        lose ourselves in them, theyre a delight. The Grand Budapest Hotel is no different, except that he
        has added a hint of gravitas to the mix, improving the recipe.`,
        author: `Bill Goodykoontz`,
        date: `November 18, 2015`,
        rating: `8,0`
      }
    ],
  },
  {
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
  }
];

const promoFilmTest = {
  filmName: `The Wizard of Oz`,
  filmGenre: `Adventure`,
  filmYear: 1939
};

it(`Render App`, () => {
  const tree = renderer
  .create(<Provider store={store}>(<App promoFilm={promoFilmTest} films={movieTestList} />
    </Provider>, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
