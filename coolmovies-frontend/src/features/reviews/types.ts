export interface Review {
    id: string;
    title: string;
    body: string;
    rating: number;
    movieId: string;
    userReviewerId: string;
}

export interface Movie {
    id: string;
    title: string;
    imgUrl: string;
    releaseDate: string;
    movieReviewsByMovieId: {
        nodes: Review[];
    };
    userCreatorId: string;
}

export interface ReviewsState {
    movies: Movie[];
    loading: boolean;
    error: string | null;
}
