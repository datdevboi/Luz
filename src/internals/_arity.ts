function _arity(n: number, fn: any) {
  switch (n) {
    case 0:
      return function() {
        return fn.apply(null, arguments);
      };
    case 1:
      return function(a0: any) {
        return fn.apply(null, arguments);
      };
    case 2:
      return function(a0: any, a1: any) {
        return fn.apply(null, arguments);
      };
    case 3:
      return function(a0: any, a1: any, a2: any) {
        return fn.apply(null, arguments);
      };
    case 4:
      return function(a0: any, a1: any, a2: any, a3: any) {
        return fn.apply(null, arguments);
      };
    case 5:
      return function(a0: any, a1: any, a2: any, a3: any, a4: any) {
        return fn.apply(null, arguments);
      };
    case 6:
      return function(a0: any, a1: any, a2: any, a3: any, a4: any, a5: any) {
        return fn.apply(null, arguments);
      };
    case 7:
      return function(
        a0: any,
        a1: any,
        a2: any,
        a3: any,
        a4: any,
        a5: any,
        a6: any
      ) {
        return fn.apply(null, arguments);
      };
    case 8:
      return function(
        a0: any,
        a1: any,
        a2: any,
        a3: any,
        a4: any,
        a5: any,
        a6: any,
        a7: any
      ) {
        return fn.apply(null, arguments);
      };
    case 9:
      return function(
        a0: any,
        a1: any,
        a2: any,
        a3: any,
        a4: any,
        a5: any,
        a6: any,
        a7: any,
        a8: any
      ) {
        return fn.apply(null, arguments);
      };
    case 10:
      return function(
        a0: any,
        a1: any,
        a2: any,
        a3: any,
        a4: any,
        a5: any,
        a6: any,
        a7: any,
        a8: any,
        a9: any
      ) {
        return fn.apply(null, arguments);
      };
    default:
      throw new Error(
        "First argument to _arity must be a non-negative integer no greater than ten"
      );
  }
}

export { _arity };
