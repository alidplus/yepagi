type User = { id: string; name: string, bd: Date };
 
// Imaginary database
const users: User[] = [{
  id: '11',
  name: "Ali",
  bd: new Date()
}];
export const db = {
  user: {
    findMany: async () => users,
    findById: async (id: string) => users.find((user) => user.id === id),
    create: async (data: { name: string }) => {
      const user = { id: String(users.length + 1), ...data };
      return user;
    },
  },
};