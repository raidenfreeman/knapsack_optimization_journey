export function knap(items: readonly Item[], capacity: number): number {
  return _knap(items, capacity, 0, items.length);
}

function _knap(
  items: readonly Item[],
  capacity: number,
  from: number,
  len: number,
): number {
  if (from + 1 === len) {
    const item = items[from];
    return item.w <= capacity ? item.v : 0;
  }

  const first = items[from]; // compare implementation with last
  if (first.w > capacity) {
    return _knap(items, capacity, from + 1, len);
  }
  const res = _knap(items, capacity - first.w, from + 1, len);
  const res2 = _knap(items, capacity, from + 1, len);
  return Math.max(res + first.v, res2);
}

interface Item {
  w: number;
  v: number;
}
