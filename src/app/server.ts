import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from '../graphql/typedefs';
import { resolvers } from '../graphql/resolvers';

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer( { typeDefs, resolvers } );
startStandaloneServer( server, { listen: { port: 4000 } } );
