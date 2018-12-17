function _isFunction(x: any) {
  return Object.prototype.toString.call(x) === "[object Function]";
}

export { _isFunction };
