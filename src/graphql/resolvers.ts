import { potionData } from './data';

export const resolvers = {
  Query: {
    potions: () => potionData,
  }
};