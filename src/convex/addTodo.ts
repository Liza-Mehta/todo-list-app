// src/convex/addTodo.ts
import { mutation } from "convex/functions";
import { v } from "convex/values";

export const addTodo = mutation({
  args: { text: v.string() },
  handler: async ({ db }, { text }) => {
    await db.insert("todos", {
      text,
      isCompleted: false,
    });
  },
});
