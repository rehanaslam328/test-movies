import { FC, useState } from 'react';
import { Box, TextField, Button, Rating, Typography } from '@mui/material';
import { useAppDispatch } from '../../../state';
import { reviewsActions } from '../state';

interface ReviewFormProps {
    movieId: string;
    onCancel: () => void;
}

export const ReviewForm: FC<ReviewFormProps> = ({ movieId, onCancel }) => {
    const dispatch = useAppDispatch();
    const [body, setBody] = useState('');
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState<number | null>(5);

    const handleSubmit = () => {
        if (rating === null) return;

        // Hardcoded user ID for demonstration purposes (Chrono)
        const userReviewerId = '5f1e6707-7c3a-4acd-b11f-fd96096abd5a';

        dispatch(reviewsActions.addReview({
            title,
            body,
            rating,
            movieId,
            userReviewerId
        }));

        // Reset form
        setTitle('');
        setBody('');
        setRating(5);
        onCancel();
    };

    return (
        <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h6">Write a Review</Typography>
            <TextField
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                required
            />
            <Box display="flex" alignItems="center">
                <Typography component="legend" sx={{ marginRight: 1 }}>Rating:</Typography>
                <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                        setRating(newValue);
                    }}
                />
            </Box>
            <TextField
                label="Review"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                multiline
                rows={4}
                fullWidth
                required
            />
            <Box display="flex" justifyContent="flex-end" gap={1}>
                <Button onClick={onCancel}>Cancel</Button>
                <Button variant="contained" onClick={handleSubmit} disabled={!title || !body || !rating}>
                    Submit Review
                </Button>
            </Box>
        </Box>
    );
};
