import express, { Request, Response } from 'express';
import { isAutoAccessorPropertyDeclaration } from 'typescript';

const app = express();

app.use(express.json());

app.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Hello World' });
});

app.listen(3333, () => {
  console.log(' Server started on port 3333!');
});
