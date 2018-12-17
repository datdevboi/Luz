function compose(...func: any) {
  return function(x: any) {
    // TODO BUILD OUR OWN REDUCE METHOD
    return func
      .reverse()
      .reduce((previousValue: any, currentValue: CallableFunction) => {
        return currentValue(previousValue);
      }, x);
  };
}

export { compose };
