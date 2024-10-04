function memoize(fn) {
  let memoizedObject = {};
  return function (...args) {
    console.log(args);
    if (args in memoizedObject) {
      return memoizedObject[args];
    }
    let result = fn(...args);
    memoizedObject[args] = result;
    return result;
  };
}
