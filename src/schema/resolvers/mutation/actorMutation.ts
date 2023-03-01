import { mutationField, stringArg } from "nexus";
import { ActorType } from "schema/models";

export const ActorMutation = mutationField("createActor", {
  type: ActorType,
  args: {
    name: stringArg(),
  },
  resolve(_root, args, ctx) {
    return ctx.prisma.actor.create({
      data: {
        name: args.name
      }
    })
  },
});
