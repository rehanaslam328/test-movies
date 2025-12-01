import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie, ReviewsState, Review } from '../types';

const initialState: ReviewsState = {
    movies: [],
    loading: false,
    error: null,
};

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        fetchMovies: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchMoviesSuccess: (state, action: PayloadAction<Movie[]>) => {
            state.movies = action.payload;
            state.loading = false;
        },
        fetchMoviesFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        addReview: (state, action: PayloadAction<{ title: string; body: string; rating: number; movieId: string; userReviewerId: string }>) => {
            // This action is handled by the epic
        },
        addReviewSuccess: (state, action: PayloadAction<Review>) => {
            // Find the movie and add the review to it
            const movie = state.movies.find(m => m.id === action.payload.movieId);
            if (movie) {
                movie.movieReviewsByMovieId.nodes.push(action.payload);
            }
            state.loading = false;
        },
        addReviewFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        }
    },
});

export const reviewsActions = reviewsSlice.actions;
export const reviewsReducer = reviewsSlice.reducer;
