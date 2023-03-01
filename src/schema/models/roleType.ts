import { inputObjectType, objectType } from "nexus";
import { Role } from "nexus-prisma";

export const RoleType = objectType({
  name: Role.$name,
  description: Role.$description,
  definition(t) {
    t.field(Role.id);
    t.field(Role.Character);
    t.field(Role.Actor);
    t.field(Role.ShowRun);
  },
});

export const RoleArg = inputObjectType({
  name: "RoleInput",
  definition(t) {
    t.string("characterId");
    t.string("actorId");
  }
});
