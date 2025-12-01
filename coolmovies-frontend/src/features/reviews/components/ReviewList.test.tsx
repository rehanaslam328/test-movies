// @ts-nocheck
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ReviewList } from './ReviewList';
import { Review } from '../types';

const mockReviews: Review[] = [
    {
        id: '1',
        title: 'Great Movie',
        body: 'I loved it!',
        rating: 5,
        movieId: 'm1',
        userReviewerId: 'u1',
    },
    {
        id: '2',
        title: 'Not bad',
        body: 'It was okay.',
        rating: 3,
        movieId: 'm1',
        userReviewerId: 'u2',
    },
];

describe('ReviewList', () => {
    it('renders reviews correctly', () => {
        render(<ReviewList reviews={mockReviews} />);

        expect(screen.getByText('Great Movie')).toBeInTheDocument();
        expect(screen.getByText('I loved it!')).toBeInTheDocument();
        expect(screen.getByText('Not bad')).toBeInTheDocument();
        expect(screen.getByText('It was okay.')).toBeInTheDocument();
    });

    it('renders message when no reviews', () => {
        render(<ReviewList reviews={[]} />);

        expect(screen.getByText('No reviews yet.')).toBeInTheDocument();
    });
});
