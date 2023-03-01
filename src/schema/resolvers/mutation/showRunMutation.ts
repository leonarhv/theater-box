import { list, mutationField, stringArg } from "nexus";
import { RoleArg, ShowRunType } from "schema/models";

export const ShowRunMutation = mutationField("createShowRun", {
  type: ShowRunType,
  args: {
    cast: list(RoleArg),
    productionId: stringArg(),
  },
  resolve(_root, args, ctx) {
    return ctx.prisma.show_Run.create({
      data: {
        cast: {
          create: args.cast,
        },
        productionId: args.productionId,
      }
    })
  },
});
