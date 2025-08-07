// src/convex/deleteTodo.ts
import { mutation } from "convex/functions";
import { v } from "convex/values";

export const deleteTodo = mutation({
  args: { id: v.id("todos") },
  handler: async ({ db }, { id }) => {
    await db.delete(id);
  },
});
