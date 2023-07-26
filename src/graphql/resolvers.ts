import { bookData } from './data';

export const resolvers = {
  Query: {
    books: () => bookData,
  },
};