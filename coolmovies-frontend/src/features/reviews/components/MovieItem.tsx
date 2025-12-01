import { FC, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Button, Collapse } from '@mui/material';
import { Movie } from '../types';
import { ReviewList } from './ReviewList';
import { ReviewForm } from './ReviewForm';

interface MovieItemProps {
    movie: Movie;
}

export const MovieItem: FC<MovieItemProps> = ({ movie }) => {
    const [showReviews, setShowReviews] = useState(false);
    const [showAddReview, setShowAddReview] = useState(false);

    return (
        <Card sx={{ display: 'flex', marginBottom: 2, flexDirection: { xs: 'column', sm: 'row' }, ':hover': { boxShadow: '10px 10px 4px rgba(161, 148, 148, 0.1)' } }}>
            {/* <Box sx={{ overflow: 'hidden', position: 'relative' }}> */}
                <CardMedia
                    component="img"
                    sx={{ width: { xs: '100%', sm: 150 }, height: { xs: 200, sm: 200 }, objectFit: 'fill', ':hover': { transform: 'scale(1.1)', transition: 'transform 0.3s ease-in-out' } }}
                    image={movie.imgUrl}
                    alt={movie.title}
                />
            {/* </Box> */}
            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {movie.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Released: {movie.releaseDate}
                    </Typography>
                    <Box sx={{ marginTop: 2 }}>
                        <Button onClick={() => setShowReviews(!showReviews)}>
                            {showReviews ? 'Hide Reviews' : `Show Reviews (${movie.movieReviewsByMovieId.nodes.length})`}
                        </Button>
                        <Button onClick={() => setShowAddReview(!showAddReview)} sx={{ marginLeft: 1 }}>
                            {showAddReview ? 'Cancel Review' : 'Add Review'}
                        </Button>
                    </Box>
                </CardContent>
                <Collapse in={showAddReview} timeout="auto" unmountOnExit>
                    <Box sx={{ p: 2, bgcolor: 'background.default' }}>
                        <ReviewForm movieId={movie.id} onCancel={() => setShowAddReview(false)} />
                    </Box>
                </Collapse>
                <Collapse in={showReviews} timeout="auto" unmountOnExit>
                    <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
                        <ReviewList reviews={movie.movieReviewsByMovieId.nodes} />
                    </Box>
                </Collapse>
            </Box>
        </Card>
    );
};
