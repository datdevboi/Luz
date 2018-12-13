export function _isPlaceholder(a: Symbol) {
  return Symbol.for("@@placeholder") == a;
}
