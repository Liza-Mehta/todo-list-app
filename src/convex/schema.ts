// src/convex/schema.ts
import { s } from "convex/schema";

export const schema = {
  todos: s.table({
    text: s.string(),
    isCompleted: s.boolean(),
  }),
};
