import { objectType, inputObjectType } from "nexus";
import { Character } from "nexus-prisma";

export const CharacterType = objectType({
  name: Character.$name,
  description: Character.$description,
  definition(t) {
    t.field(Character.id);
    t.field(Character.name);
    t.field(Character.description);
    t.field(Character.Show);
  },
});

export const CharacterArg = inputObjectType({
  name: "CharacterInput",
  definition(t) {
    t.string("name");
    t.string("description");
  }
});
