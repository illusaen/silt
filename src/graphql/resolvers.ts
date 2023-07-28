import { potionData } from './';

export const resolvers = {
  Query: {
    potions: () => potionData,
  }
};