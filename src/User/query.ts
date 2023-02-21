import { list, queryField } from "nexus";
import { UserType } from "./schema";

export const UserQuery = queryField('users', {
  type: list(UserType),
  resolve(_root, _args, ctx) {
    if(ctx.auth.user.role === 'admin') return ctx.prisma.user.findMany();
    return null;
  }
});
