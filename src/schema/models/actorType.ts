import { objectType } from "nexus";
import { Actor } from "nexus-prisma";

export const ActorType = objectType({
  name: Actor.$name,
  description: Actor.$description,
  definition(t) {
    t.field(Actor.id);
    t.field(Actor.name);
    t.field(Actor.roles);
  },
});
