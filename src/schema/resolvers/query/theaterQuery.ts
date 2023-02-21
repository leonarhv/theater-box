import { list, queryField } from "nexus";
import { TheaterType } from "../../models/theaterType";

export const TheaterQuery = queryField('theaters', {
  type: list(TheaterType),
  resolve(_root, _args, ctx) {
    return ctx.prisma.theater.findMany();
  }
});
