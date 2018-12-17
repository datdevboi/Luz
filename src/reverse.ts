import { _isString } from "./internals/_isString";
import { compose } from "./compose";
import { split } from "./split";
import { join } from "./join";

function reverse(a: string | []) {
  if (_isString(a)) {
    return compose(
      join(""),
      reverse,
      split("")
    )(a);
  }

  return Array.prototype.reverse.call(a);
}

export { reverse };
