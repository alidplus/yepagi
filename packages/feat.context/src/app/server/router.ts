import { publicProcedure, router } from "@repo/rpc.core";

export const demoRouter = router({
  // Queries are the best place to fetch data
  hello: publicProcedure.query(() => {
    return {
      message: 'hello world',
    };
  }),
 
  // Mutations are the best place to do things like updating a database
  goodbye: publicProcedure.mutation(async () => {
 
    return {
      message: 'goodbye!',
    };
  }),
});

export type DemoRouter = typeof demoRouter