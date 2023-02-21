import { Theater } from 'nexus-prisma';
import { objectType } from 'nexus';

export const TheaterType = objectType({
  name: Theater.$name,
  description: Theater.$description,
  definition(t) {
    t.field(Theater.name);
    t.field(Theater.address_street);
    t.field(Theater.address_number);
    t.field(Theater.country);
    t.field(Theater.capacity);
    t.field(Theater.history);
    t.field(Theater.id);
  }
})
