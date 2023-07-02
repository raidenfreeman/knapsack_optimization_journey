import { knap } from "./knap.ts";
import { otherCapacity, otherItems } from "./knapsack.test.ts";

Deno.bench("bench knap", () => {
  knap(otherItems, otherCapacity);
});
