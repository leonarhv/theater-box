import { mutationField, stringArg } from "nexus";
import { RoleType } from "schema/models";

export const RoleMutation = mutationField("createRole", {
  type: RoleType,
  args: {
    characterId: stringArg(),
    actorId: stringArg(),
    showRunId: stringArg(),
  },
  resolve(_root, args, ctx) {
    return ctx.prisma.role.create({
      data: {
        characterId: args.characterId,
        actorId: args.actorId,
        showRunId: args.showRunId,
      }
    })
  },
});
