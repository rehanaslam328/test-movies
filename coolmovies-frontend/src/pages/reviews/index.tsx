import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { Container, Typography, Box, CircularProgress, Alert } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../state';
import { reviewsActions, MovieItem } from '../../features/reviews';

const ReviewsPage: NextPage = () => {
    const dispatch = useAppDispatch();
    const { movies, loading, error } = useAppSelector((state) => state.reviews);

    useEffect(() => {
        dispatch(reviewsActions.fetchMovies());
    }, [dispatch]);

    return (
        <Container maxWidth="md" sx={{ paddingY: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom align="center">
                Movie Reviews
            </Typography>

            {loading && movies.length === 0 && (
                <Box display="flex" justifyContent="center" my={4}>
                    <CircularProgress />
                </Box>
            )}

            {error && (
                <Alert severity="error" sx={{ marginBottom: 2 }}>
                    {error}
                </Alert>
            )}

            <Box>
                {movies.map((movie) => (
                    <MovieItem key={movie.id} movie={movie} />
                ))}
            </Box>
        </Container>
    );
};

export default ReviewsPage;
