import { inputObjectType, objectType } from "nexus";
import { Show_Run } from "nexus-prisma";

export const ShowRunType = objectType({
  name: Show_Run.$name,
  description: Show_Run.$description,
  definition(t) {
    t.field(Show_Run.id);
    t.field(Show_Run.cast);
    t.field(Show_Run.Production);
  },
});

export const ShowRunArg = inputObjectType({
  name: "ShowRunInput",
  definition(t) {
    t.string("id");
  }
});
