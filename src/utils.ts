export function add(x: number, y: number) {
  return x + y;
}

export function sample<T>(num: T[]): T {
  const idx = Math.floor(Math.random() * num.length);
  return num[idx];
}
