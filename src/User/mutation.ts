import { mutationField, stringArg } from "nexus";
import { UserType } from "./schema";

export const UserMutation = mutationField("createUser", {
  type: UserType,
  args: {
    name: stringArg(),
    email: stringArg(),
    password: stringArg(),
  },
  resolve: async (_, { name, email, password }, ctx) => {
    const hashedPassword = await ctx.hashProvider.generateHash(password);
    const user = await ctx.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return user;
  }
});
