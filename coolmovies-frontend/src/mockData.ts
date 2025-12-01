export const users = [
  { id: '5f1e6707-7c3a-4acd-b11f-fd96096abd5a', name: 'Chrono' },
  { id: '65549e6a-2389-42c5-909a-4475fdbb3e69', name: 'Ayla' },
  { id: 'beb2473b-2c31-44a2-81e3-01efd5c7ac6e', name: 'Robo' },
  { id: 'ffd3a780-26e8-450b-856d-c45dc43c1315', name: 'Lucca' },
  { id: '7b4c31df-04b3-452f-a9ee-e9f8836013cc', name: 'Marle' },
];

export const directors = [
  { id: '7467db60-d506-4f1a-b5b4-7f2620d61669', name: 'George Lucas', age: 100 },
  { id: 'c103cc08-ed39-4a3c-a1f3-0f431c07539e', name: 'Gareth Edwards', age: 46 },
];

export const movies = [
  {
    id: 'b8d93229-e02a-4060-9370-3e073ada86c3',
    title: 'Star Wars: A New Hope',
    movieDirectorId: '7467db60-d506-4f1a-b5b4-7f2620d61669',
    userCreatorId: '5f1e6707-7c3a-4acd-b11f-fd96096abd5a',
    releaseDate: '1977-05-25',
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81aA7hEEykL.jpg',
  },
  {
    id: '70351289-8756-4101-bf9a-37fc8c7a82cd',
    title: 'Rogue One: A Star Wars Story',
    movieDirectorId: 'c103cc08-ed39-4a3c-a1f3-0f431c07539e',
    userCreatorId: '7b4c31df-04b3-452f-a9ee-e9f8836013cc',
    releaseDate: '2016-12-16',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d4/Rogue_One%2C_A_Star_Wars_Story_poster.png',
  },
  {
    id: 'b8d93229-e02a-4060-9370-3e073ada86c1',
    title: 'Game of Thrones Season 1',
    movieDirectorId: '7467db60-d506-4f1a-b5b4-7f2620d61669',
    userCreatorId: '5f1e6707-7c3a-4acd-b11f-fd96096abd5a',
    releaseDate: '2011-04-25',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b7/Game_of_thrones_telltale_games_season_one.jpg',
  },
  {
    id: '70351289-8756-4101-bf9a-37fc8c7a82cd',
    title: 'Game of Thrones Season 2',
    movieDirectorId: 'c103cc08-ed39-4a3c-a1f3-0f431c07539e',
    userCreatorId: '7b4c31df-04b3-452f-a9ee-e9f8836013cc',
    releaseDate: '2012-04-25',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b7/Game_of_thrones_telltale_games_season_one.jpg',
  },
];

export const reviews = [
  {
    id: 'e8edc53a-29cf-4470-8351-ed22cc144a3f',
    title: 'Great Movie',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    rating: 5,
    movieId: 'b8d93229-e02a-4060-9370-3e073ada86c3',
    userReviewerId: '5f1e6707-7c3a-4acd-b11f-fd96096abd5a',
  },
  {
    id: '3a295d43-da93-4994-8211-4bbccd59d06b',
    title: 'Instant Hit!',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    rating: 4,
    movieId: 'b8d93229-e02a-4060-9370-3e073ada86c3',
    userReviewerId: '65549e6a-2389-42c5-909a-4475fdbb3e69',
  },
  {
    id: '335f0ff2-7f96-413f-8d26-6224039356c4',
    title: 'Best Action Movie',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    rating: 4,
    movieId: '70351289-8756-4101-bf9a-37fc8c7a82cd',
    userReviewerId: '65549e6a-2389-42c5-909a-4475fdbb3e69',
  },
  {
    id: '5750da72-238b-44b3-9a92-02e3543861c4',
    title: 'One of the best',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    rating: 5,
    movieId: '70351289-8756-4101-bf9a-37fc8c7a82cd',
    userReviewerId: '5f1e6707-7c3a-4acd-b11f-fd96096abd5a',
  },
];
