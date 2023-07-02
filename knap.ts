export function knap(items: readonly Item[], capacity: number): number {
  if (items.length === 1) {
    const item = items[0];
    return item.w <= capacity ? item.v : 0;
  }

  const first = items[0]; // compare implementation with last
  const remaining = items.filter((_, i) => i > 0);
  if (first.w > capacity) {
    return knap(remaining, capacity);
  }
  const res = knap(remaining, capacity - first.w);
  const res2 = knap(remaining, capacity);
  return Math.max(res + first.v, res2);
}

interface Item {
  w: number;
  v: number;
}
