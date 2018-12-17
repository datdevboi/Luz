import { _curry2 } from "./internals/_curry2";
import { nativeInvoker } from "./nativeInvoker";

// const split = _curry2(function split(splitby: string | RegExp, a: string) {
//   return a.split(splitby);
// });

const split = nativeInvoker(1, "split");

export { split };
