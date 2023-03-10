import { User } from 'nexus-prisma';
import { objectType } from 'nexus';

export const UserType = objectType({
  name: User.$name,
  description: User.$description,
  definition(t) {
    t.field(User.id)
    t.field(User.name)
    t.field(User.email)
    t.field(User.role)
  }
})
