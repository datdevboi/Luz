import { _curry2 } from "./internals/_curry2";
import { _curry1 } from "./internals/_curry1";
import { _arity } from "./internals/_arity";
import { _curryN } from "./internals/_curryN";

var curryN = _curry2(function curryN(length: number, fn: CallableFunction) {
  if (length === 1) {
    return _curry1(fn);
  }
  return _arity(length, _curryN(length, [], fn));
});

export { curryN };
