// src/convex/getTodos.ts
import { query } from "convex/functions";

export const getTodos = query({
  handler: async ({ db }) => {
    return await db.query("todos").collect();
  },
});
