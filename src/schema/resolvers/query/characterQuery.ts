import { list, queryField } from "nexus";
import { CharacterType } from "../../models/characterType";

export const CharacterQuery = queryField('characters', {
  type: list(CharacterType),
  resolve(_root, _args, ctx) {
    return ctx.prisma.character.findMany();
  }
});
