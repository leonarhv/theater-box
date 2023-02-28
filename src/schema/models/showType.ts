import { objectType } from 'nexus';
import {Show} from 'nexus-prisma';

export const ShowType = objectType({
  name: Show.$name,
  description: Show.$description,
  definition(t) {
    t.field(Show.id);
    t.field(Show.name);
    t.field(Show.description);
    t.field(Show.characters);
  }
})
