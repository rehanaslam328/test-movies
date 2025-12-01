import { combineEpics } from 'redux-observable';
import { fetchMoviesEpic, addReviewEpic } from './reviews.epics';

export * from './reviews.slice';
export * from './reviews.epics';

export const reviewsEpics = combineEpics(fetchMoviesEpic, addReviewEpic);
