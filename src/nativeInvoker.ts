import { _curry2 } from "./internals/_curry2";
import { _isFunction } from "./internals/_isFunction";
import { curryN } from "./curryN";

const nativeInvoker = _curry2(function nativeInvoker(
  arity: number,
  method: CallableFunction
) {
  return curryN(arity + 1, function() {
    var target = arguments[arity];
    if (target != null && _isFunction(target[method])) {
      return target[method].apply(
        target,
        Array.prototype.slice.call(arguments, 0, arity)
      );
    }
    throw new TypeError(
      target.toString() + ' does not have a method named "' + method + '"'
    );
  });
});
