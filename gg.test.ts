import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.192.0/testing/asserts.ts";
import fib2 from "npm:fibonacci";

Deno.test("fib test", () => {
  // fibList.forEach((f, i) =>
  //   assertEquals(
  //     fib(i),
  //     f,
  //   )
  // );

  for (let i = 79; i <= 79; i++) {
    assertEquals(
      fib(i).toString(),
      fib2.iterate(i).number,
      `Failed at iteration ${i}`,
    );
  }
});

const fibCache: Record<number, number | undefined> = {};
function fib(n: number): any {
  return n === 1 && 1 ||
    n > 1 && (fibCache[n] || (fibCache[n] = fib(n - 1) + fib(n - 2))) || 0;
}

const fibList = [
  0,
  1,
  1,
  2,
  3,
  5,
  8,
  13,
  21,
  34,
  55,
  89,
  144,
  233,
  377,
  610,
  987,
  1597,
  2584,
  4181,
  6765,
  10946,
  17711,
  28657,
  46368,
  75025,
  121393,
  196418,
  317811,
  514229,
];
