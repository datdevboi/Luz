import { _isPlaceholder } from "./_isPlaceholder";
import { _curry1 } from "./_curry1";

function _curry2(fn: any) {
  return function f2(a: any, b: any) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2 : _curry1((_b: any) => fn(a, _b));
      default:
        return _isPlaceholder(a) && _isPlaceholder(b)
          ? f2
          : _isPlaceholder(a)
          ? _curry1((_a: any) => fn(_a, b))
          : _isPlaceholder(b)
          ? _curry1((_b: any) => fn(a, _b))
          : fn(a, b);
    }
  };
}

export { _curry2 };
