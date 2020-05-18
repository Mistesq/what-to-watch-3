import {reducer, ActionCreator, ActionType} from "./reducer.js";
import {films} from "./mocks/films.js";

const FilmsCount = {
  ON_START: 8,
  BY_BUTTON: 8
};

const ALL_GENRES = `All genres`;
const GENRES_MAX_COUNT = 9;

const genres = [...new Set(films.map((film) => film.genre))].slice(0, GENRES_MAX_COUNT).sort();
const allGenres = [ALL_GENRES, ...genres];

describe(`Reducer tests group`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      filterType: ALL_GENRES,
      movieCards: films,
      genres: allGenres,
      showingCardsCount: FilmsCount.ON_START,
      selectedMovieId: -1
    });
  });

  it(`Reducer should return correctly set new filter by a given value`, () => {
    expect(reducer({
      filterType: ALL_GENRES,
    }, {
      type: ActionType.CHANGE_GENRE_FILTER,
      filterType: `Comedy`
    })).toEqual({
      filterType: `Comedy`,
    });
  });

  it(`Reducer should correctly return movieCards by a given filter type`, () => {
    expect(reducer({
      movieCards: films,
      filterType: `Horror`,
      showingCardsCount: FilmsCount.ON_START
    }, {
      type: ActionType.GET_FILTERED_MOVIE_CARDS,
      payload: [films[2]]
    })).toEqual({
      movieCards: [films[2]],
      filterType: `Horror`,
      showingCardsCount: 1
    });
  });

  it(`Reducer should correctly increment showingCardsCount by a given value`, () => {
    expect(reducer({
      movieCards: films,
      filterType: ALL_GENRES,
      showingCardsCount: FilmsCount.ON_START
    }, {
      type: ActionType.INCREMENT_SHOWING_CARDS_COUNT,
      payload: 1
    })).toEqual({
      movieCards: films,
      filterType: ALL_GENRES,
      showingCardsCount: 2
    });
  });

  it(`Reducer should correctly reset showingCardsCount to default`, () => {
    expect(reducer({
      movieCards: films,
      filterType: ALL_GENRES,
      showingCardsCount: 1
    }, {
      type: ActionType.RESET_SHOWING_CARDS_COUNT,
      payload: FilmsCount.ON_START
    })).toEqual({
      movieCards: films,
      filterType: ALL_GENRES,
      showingCardsCount: FilmsCount.ON_START
    });
  });

  it(`Reducer should correctly return movieCard id by a given value`, () => {
    expect(reducer({
      selectedMovieId: -1
    }, {
      type: ActionType.SET_MOVIE_CARD_ID,
      payload: 1
    })).toEqual({
      selectedMovieId: 1
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for getFilteredMovieCards returns correct action`, () => {
    expect(ActionCreator.getFilteredMovieCards(`Horror`)).toEqual({
      type: ActionType.GET_FILTERED_MOVIE_CARDS,
      payload: [films[2]]
    });
  });

  it(`Action creator for changing genre filter returns correct action`, () => {
    expect(ActionCreator.changeGenreFilter(`Horror`)).toEqual({
      type: ActionType.CHANGE_GENRE_FILTER,
      filterType: `Horror`
    });
  });

  it(`Action creator for incrementShowingCardsCount returns correct action`, () => {
    expect(ActionCreator.incrementShowingCardsCount()).toEqual({
      type: ActionType.INCREMENT_SHOWING_CARDS_COUNT,
      payload: FilmsCount.BY_BUTTON
    });
  });

  it(`Action creator for resetShowingCardsCount returns correct action`, () => {
    expect(ActionCreator.resetShowingCardsCount()).toEqual({
      type: ActionType.RESET_SHOWING_CARDS_COUNT,
      payload: FilmsCount.BY_BUTTON
    });
  });

  it(`Action creator for setMovieCardId returns correct action`, () => {
    expect(ActionCreator.setMovieCardId(1)).toEqual({
      type: ActionType.SET_MOVIE_CARD_ID,
      payload: 1
    });
  })
});
