import { intArg, mutationField, stringArg } from "nexus";
import { UserType } from "./schema";

export const UserMutation = mutationField("createUser", {
  type: UserType,
  args: {
    id: stringArg(),
  },
  resolve(_root, args, ctx) {
    return ctx.prisma.user.create({
      data: {
        id: args.id,
      },
    });
  },
});
