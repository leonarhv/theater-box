import { mutationField, stringArg, list } from "nexus";
import { CharacterType } from "schema/models";

export const CharacterMutation = mutationField("addCharacter", {
  type: CharacterType,
  args: {
    name: stringArg(),
    description: stringArg(),
    showId: stringArg(),
  },
  resolve(_root, args, ctx) {
    return ctx.prisma.character.create({
      data: {
        name: args.name,
        description: args.description,
        Show: {
          connect: {
            id: args.showId,
          },
        }
      }
    })
  },
});
