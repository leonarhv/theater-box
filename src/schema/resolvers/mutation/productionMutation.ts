import { list, mutationField, stringArg } from "nexus";
import { productionType, ShowRunArg } from "schema/models";

export const ProductionMutation = mutationField("addProduction", {
  type: productionType,
  args: {
    showId: stringArg(),
    theaterId: stringArg(),
  },
  resolve(_root, args, ctx) {
    return ctx.prisma.production.create({
      data: {
        showId: args.showId,
        theaterId: args.theaterId,
      }
    })
  },
});
