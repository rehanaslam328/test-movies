import { Epic } from 'redux-observable';
import { filter, map, delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { reviewsActions } from './reviews.slice';
import { RootState } from '../../../state/store';
import { EpicDependencies } from '../../../state/types';
import { movies as mockMovies, reviews as mockReviews } from '../../../mockData';
import { Movie, Review } from '../types';

// Transform mockData into the expected Movie format
const transformMockData = (): Movie[] => {
  return mockMovies.map(movie => ({
    ...movie,
    movieReviewsByMovieId: {
      nodes: mockReviews.filter(review => review.movieId === movie.id)
    }
  }));
};

export const fetchMoviesEpic: Epic<any, any, RootState, EpicDependencies> = (action$) =>
  action$.pipe(
    filter(reviewsActions.fetchMovies.match),
    delay(300), // Simulate async operation
    map(() => {
      const moviesWithReviews = transformMockData();
      return reviewsActions.fetchMoviesSuccess(moviesWithReviews);
    })
  );

export const addReviewEpic: Epic<any, any, RootState, EpicDependencies> = (action$) =>
  action$.pipe(
    filter(reviewsActions.addReview.match),
    delay(300), // Simulate async operation
    map((action) => {
      // Create a new review object with a generated ID
      const newReview: Review = {
        id: `review-${Date.now()}`,
        ...action.payload
      };

      // Add to the mockReviews array so it persists
      mockReviews.push(newReview);

      return reviewsActions.addReviewSuccess(newReview);
    })
  );

export const reviewsEpics = [fetchMoviesEpic, addReviewEpic];
