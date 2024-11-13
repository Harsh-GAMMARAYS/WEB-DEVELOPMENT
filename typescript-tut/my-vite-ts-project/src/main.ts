function mul(x: number, y: number): number {
  return x * y;
}

function div(x: number, y: number): number {
  return x / y;
}

function applyFunc(
  func: ((a: number, b: number) => number)[],
  values: [number, number][],
): number[] {
  const result = [] as number[];
  for (let i = 0; i < func.length; i++) {
    const args = values[i];
    const results = func[i](args[0], args[1]);
    result.push(results);
  }
  return result;
}

const result = applyFunc(
  [mul, div],
  [
    [1, 2],
    [4, 5],
  ],
);
console.log(result);

