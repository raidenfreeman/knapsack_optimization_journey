import { knap } from "./knap.ts";
import { otherCapacity, otherItems, values, weights } from "./knapsack.test.ts";

Deno.bench("bench knap", () => {
  knap(weights, values, otherCapacity);
});
