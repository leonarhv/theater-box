import { makeSchema, scalarType } from 'nexus';
import * as theaterTypes from './Theater';
import * as userTypes from './User';

export const schema = makeSchema({
  types: [theaterTypes, userTypes],
  outputs: {
    schema: __dirname + '/schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
});
