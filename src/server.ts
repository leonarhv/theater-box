import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import { $settings } from "nexus-prisma";
import { BcryptHashProvider } from "providers/HashProvider/BcryptHashProvider";
import { schema } from "./schema/schema";
import jwt from "jsonwebtoken";
import { expressjwt, Request as AuthRequest } from "express-jwt";
import { secret } from './constants';

const app = express();

const prisma = new PrismaClient();
const hashProvider = new BcryptHashProvider();

app.use(express.json());

app.use(
  "/",
  expressjwt({ secret, algorithms: ["HS256"] }).unless({ path: ["/login"] })
);

app.use(
  "/graphql",
  graphqlHTTP(request => ({
    schema: schema,
    graphiql: true,
    context: {
      prisma,
      hashProvider,
      auth: (request as AuthRequest).auth,
    },
  }))
);

$settings({
  prismaClientContextField: "db",
});

app.get("/", (request: Request, response: Response) => {
  return response.json({ message: "Hello World" });
});

app.post("/login", async (request: Request, response: Response) => {
  const { email, password } = request.body;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return response.status(400).json({ message: "User not found" });
  }

  const passwordMatched = await hashProvider.compareHash(
    password,
    user.password
  );

  if (!passwordMatched) {
    return response.status(401).json({ message: "Incorrect password" });
  }

  const token = jwt.sign(
    {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    },
    secret,
    { expiresIn: "1d" }
  );

  return response.json({
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
});

app.listen(4000, () => {
  console.log("Server started on port 4000!");
});
