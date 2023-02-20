import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { $settings } from 'nexus-prisma';
import { schema } from './schema';

const app = express();

const prisma = new PrismaClient();

app.use(express.json());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
  context: { prisma },
}));

$settings({
  prismaClientContextField: 'db',
})

app.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Hello World' });
});

app.listen(4000, () => {
  console.log('Server started on port 4000!');
});
