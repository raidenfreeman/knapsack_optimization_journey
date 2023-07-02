import { assertEquals } from "https://deno.land/std@0.192.0/testing/asserts.ts";
import { knap } from "./knap.ts";

const items = [{ w: 2, v: 3 }, { w: 3, v: 4 }, { w: 4, v: 5 }, {
  w: 5,
  v: 6,
}] as const;
const capacity = 5;
Deno.test("knapsack full", () => {
  assertEquals(knap(items.map((x) => x.w), items.map((x) => x.v), capacity), 7);
});
Deno.test("knapsack simple", () => {
  assertEquals(knap([items[0].w], [items[0].v], capacity), 3);
});
Deno.test("knapsack 2", () => {
  assertEquals(
    knap([items[0].w, items[1].w], [items[0].v, items[1].v], capacity),
    7,
  );
});
Deno.test("knapsack 3", () => {
  assertEquals(
    knap([items[0].w, items[2].w], [items[0].v, items[2].v], capacity),
    5,
  );
});

export const weights = [
  10,
  14,
  6,
  8,
  18,
  4,
  2,
  16,
  12,
  20,
  10,
  8,
  6,
  14,
  10,
  4,
  8,
  6,
  16,
  12,
  20,
  10,
  8,
  6,
  14,
  10,
  4,
  8,
  6,
  12,
];
export const values = [
  8,
  12,
  4,
  6,
  15,
  3,
  2,
  13,
  10,
  16,
  8,
  6,
  4,
  12,
  8,
  3,
  6,
  4,
  13,
  10,
  16,
  8,
  6,
  4,
  12,
  8,
  3,
  6,
  4,
  10,
];
export const otherItems = weights.map((x, i) => ({ w: x, v: values[i] }));
export const otherCapacity = 70;

Deno.test("knapsack 10", () => {
  assertEquals(knap(weights, values, otherCapacity), 59);
});
