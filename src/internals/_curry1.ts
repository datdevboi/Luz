import { _isPlaceholder } from "./_isPlaceholder";

function _curry1(fn: any) {
  return function f1(a: any) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(null, arguments);
    }
  };
}

export { _curry1 };
