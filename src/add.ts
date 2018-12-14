import { _curry2 } from "./internals/_curry2";

const add = _curry2((a: number, b: number) => {
  return a + b;
});

export { add };
