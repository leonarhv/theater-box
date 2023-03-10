import { mutationField, stringArg } from "nexus";
import { UserType } from "../../models/userType";

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

export const UpdateUserRoleMutation = mutationField("updateUserRole", {
  type: UserType,
  args: {
    id: stringArg(),
    role: stringArg(),
  },
  resolve: async (_, { id, role }, ctx) => {
    const user = await ctx.prisma.user.update({
      where: {
        id,
      },
      data: {
        role,
      },
    });

    return user;
  }
});
