export function knap(items: readonly Item[], capacity: number): number {
  return _knap(items, capacity);
}

function _knap(items: readonly Item[], capacity: number): number {
  if (items.length === 1) {
    const item = items[0];
    return item.w <= capacity ? item.v : 0;
  }

  const first = items[0]; // compare implementation with last
  const remaining = items.filter((_, i) => i > 0);
  if (first.w > capacity) {
    return _knap(remaining, capacity);
  }
  const res = _knap(remaining, capacity - first.w);
  const res2 = _knap(remaining, capacity);
  return Math.max(res + first.v, res2);
}

interface Item {
  w: number;
  v: number;
}
