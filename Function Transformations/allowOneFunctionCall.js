var once = function (fn) {
  let counter = 0;
  return function (...args) {
    if (counter >= 1) {
      return undefined;
    }
    counter += 1;
    try {
      let result = fn(...args);
      counter += 1;
      return result;
    } catch (error) {
      throw error;
    }
  };
};
