import { _curry2 } from "./internals/_curry2";

const split = _curry2(function split(splitby: string | RegExp, a: string) {
  return a.split(splitby);
});

export { split };
