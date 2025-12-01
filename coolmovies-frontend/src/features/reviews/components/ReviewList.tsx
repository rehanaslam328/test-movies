import React from 'react';
import { List, ListItem, ListItemText, Typography, Rating, Divider, Box } from '@mui/material';
import { Review } from '../types';

interface ReviewListProps {
    reviews: Review[];
}

export const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
    if (reviews.length === 0) {
        return <Typography variant="body2" color="text.secondary">No reviews yet.</Typography>;
    }

    return (
        <List>
            {reviews.map((review, index) => (
                <React.Fragment key={review.id}>
                    <ListItem alignItems="flex-start">
                        <ListItemText
                            primary={
                                <Box display="flex" alignItems="center">
                                    <Typography variant="subtitle1" component="span" sx={{ fontWeight: 'bold', marginRight: 1 }}>
                                        {review.title}
                                    </Typography>
                                    <Rating value={review.rating} readOnly size="small" />
                                </Box>
                            }
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {review.body}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    {index < reviews.length - 1 && <Divider variant="inset" component="li" />}
                </React.Fragment>
            ))}
        </List>
    );
};
