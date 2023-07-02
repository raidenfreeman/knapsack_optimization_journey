export function knap(
  weights: ReadonlyArray<number>,
  values: ReadonlyArray<number>,
  capacity: number,
): number {
  return _knap(weights, values, capacity, 0, weights.length);
}

function _knap(
  weights: ReadonlyArray<number>,
  values: ReadonlyArray<number>,
  capacity: number,
  from: number,
  len: number,
): number {
  if (from + 1 === len) {
    return weights[from] <= capacity ? values[from] : 0;
  }

  if (weights[from] > capacity) {
    return _knap(weights, values, capacity, from + 1, len);
  }
  const res = _knap(weights, values, capacity - weights[from], from + 1, len);
  const res2 = _knap(weights, values, capacity, from + 1, len);
  return Math.max(res + values[from], res2);
}

interface Item {
  w: number;
  v: number;
}
