import { makeSchema, scalarType } from 'nexus';
import * as types from './models';
import * as resolvers from './resolvers';

export const schema = makeSchema({
  types: [types, resolvers],
  outputs: {
    schema: __dirname + '/schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
});
