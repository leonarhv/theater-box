import { mutationField, stringArg, list } from "nexus";
import { CharacterArg } from "schema/models";
import { ShowType } from "../../models/showType";

export const ShowMutation = mutationField("createShow", {
  type: ShowType,
  args: {
    name: stringArg(),
    description: stringArg(),
    characters: list(CharacterArg),
  },
  resolve(_root, args, ctx) {
    return ctx.prisma.show.create({
      data: {
        name: args.name,
        description: args.description,
        characters: {
          create: args.characters,
        },
      },
    });
  },
});
