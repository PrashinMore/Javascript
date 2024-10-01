var expect = function (val) {
  return {
    toBe: function (val2) {
      if (val !== val2) {
        throw "Not Equal";
      } else {
        return true;
      }
    },
    notToBe: function (val3) {
      if (val === val3) {
        throw "Equal";
      } else {
        return true;
      }
    }
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
