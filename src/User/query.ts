import { list, queryField } from "nexus";
import { UserType } from "./schema";

export const UserQuery = queryField('users', {
  type: list(UserType),
  resolve(_root, _args, ctx) {
    return ctx.prisma.user.findMany();
  }
});
