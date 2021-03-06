
import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page";

const films = [
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
  },
  {
    id: 2,
    title: `Macbeth`,
    previewImage: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Horror`,
    releaseDate: 2010,
    posterImage: `the-grand-budapest-hotel-poster.jpg`,
    backgroundImage: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 7,
    ratingCount: 40,
    description: `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    director: `director3`,
    starring: [`Bill Murray`, `actor`, `Jude Law`, `Willem Dafoe`],
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: 50,
    comments: [
      {
        id: 0,
        text: `The mannered, madcap proceedings are often delightful, occasionally silly, and
        here and there, gruesome and/or heartbreaking.`,
        author: `Matthew Lickona`,
        date: `December 20, 2016`,
        rating: `7,2`
      },
      {
        id: 0,
        text: `It is certainly a magical and childlike way of storytelling, even if the
        content is a little more adult.`,
        author: `Paula Fleri-Soler`,
        date: `December 20, 2016`,
        rating: `7,6`
      },
    ],
  },
  {
    id: 3,
    title: `Aviator`,
    previewImage: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Comedy`,
    releaseDate: 2012,
    posterImage: `the-grand-budapest-hotel-poster.jpg`,
    backgroundImage: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 1.9,
    ratingCount: 2240,
    description: `Fusce tristique felis at fermentum pharetra.`,
    director: `director4`,
    starring: [`Bill Murray`, `Edward Norton`, `actor`, `Willem Dafoe`],
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: 40,
    comments: [
      {
        id: 0,
        text: `It is certainly a magical and childlike way of storytelling, even if the
        content is a little more adult.`,
        author: `Paula Fleri-Soler`,
        date: `December 20, 2016`,
        rating: `7,0`
      },
    ],
  },
  {
    id: 4,
    title: `We need to talk about Kevin`,
    previewImage: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Crime`,
    releaseDate: 2013,
    posterImage: `the-grand-budapest-hotel-poster.jpg`,
    backgroundImage: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 2.9,
    ratingCount: 20,
    description: `Aliquam id orci ut lectus varius viverra.`,
    director: `director5`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `actor`],
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: 20,
    comments: [],
  },
  {
    id: 5,
    title: `What We Do in the Shadows`,
    previewImage: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Drama`,
    releaseDate: 2000,
    posterImage: `the-grand-budapest-hotel-poster.jpg`,
    backgroundImage: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 5.9,
    ratingCount: 240,
    description: `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    director: `director6`,
    starring: [`actor`, `actor2`, `Jude Law`, `Willem Dafoe`],
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: 31,
    comments: [
      {
        id: 0,
        text: `The mannered, madcap proceedings are often delightful, occasionally silly, and
        here and there, gruesome and/or heartbreaking.`,
        author: `Matthew Lickona`,
        date: `December 20, 2016`,
        rating: `7,2`
      },
      {
        id: 0,
        text: `It is certainly a magical and childlike way of storytelling, even if the
        content is a little more adult.`,
        author: `Paula Fleri-Soler`,
        date: `December 20, 2016`,
        rating: `7,6`
      },
    ],
  },
  {
    id: 6,
    title: `Revenant`,
    previewImage: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Comedy`,
    releaseDate: 2001,
    posterImage: `the-grand-budapest-hotel-poster.jpg`,
    backgroundImage: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 4.9,
    ratingCount: 245,
    description: `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    director: `director7`,
    starring: [`Bill Murray`, `actor`, `actor2`, `Willem Dafoe`],
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: 50,
    comments: [],
  },
  {
    id: 7,
    title: `Johnny English`,
    previewImage: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Sci-Fi`,
    releaseDate: 2004,
    posterImage: `the-grand-budapest-hotel-poster.jpg`,
    backgroundImage: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 8.7,
    ratingCount: 2440,
    description: `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    director: `director8`,
    starring: [`Bill Murray`, `Edward Norton`, `actor`, `actor2`],
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: 40,
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
  }
];

const similarFilms = films.slice(0, 4);

it(`MoviePage component should render correct`, () => {
  const tree = renderer
    .create(<MoviePage film={films[0]} similarFilms={similarFilms} onCardClick={() => {}} activeItem={0} onActiveItemChange={() => {}} />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
