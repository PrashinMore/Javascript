var reduce = function (nums, fn, init) {
  nums.forEach((val, i) => {
    init = fn(init, nums[i]);
  });
  return init;
};
