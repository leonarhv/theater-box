import { objectType } from "nexus";
import { Production } from "nexus-prisma";

export const productionType = objectType({
  name: Production.$name,
  description: Production.$description,
  definition(t) {
    t.field(Production.id);
    t.field(Production.Show);
    t.field(Production.Theater);
    t.field(Production.ShowRuns);
  }
})
