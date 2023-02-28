import { list, queryField } from "nexus";
import { ShowType } from "../../models/showType";

export const ShowQuery = queryField('shows', {
  type: list(ShowType),
  resolve(_root, _args, ctx) {
    return ctx.prisma.show.findMany();
  }
});
