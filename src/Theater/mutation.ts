import { intArg, mutationField, mutationType, stringArg } from "nexus";
import { TheaterType } from "./schema";

export const TheaterMutation = mutationField("createTheater", {
  type: TheaterType,
  args: {
    name: stringArg(),
    address_street: stringArg(),
    address_number: stringArg(),
    country: stringArg(),
    capacity: intArg(),
    history: stringArg(),
    opening_date: stringArg(),
  },
  resolve(_root, args, ctx) {
    return ctx.prisma.theater.create({
      data: {
        name: args.name,
        address_street: args.address_street,
        address_number: args.address_number,
        country: args.country,
        capacity: args.capacity,
        history: args.history,
        opening_date: args.opening_date ? new Date(args.opening_date) : null,
      },
    });
  },
});
