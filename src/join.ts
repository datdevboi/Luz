import { _curry2 } from "./internals/_curry2";

function join(joinBy?: any) {
  return function(arr: string[]) {
    return Array.prototype.join.call(arr, joinBy);
  };
}
export { join };
