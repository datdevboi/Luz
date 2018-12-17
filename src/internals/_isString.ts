function _isString(a: any) {
  return Object.prototype.toString.call(a) === "[object String]";
}

export { _isString };
