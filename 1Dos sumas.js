/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

  for (const position1 in nums) {

    for (const position2 in nums) {

      if (position1 < position2 && nums[position1] + nums[position2] === target) {
          return [parseInt(position1), parseInt(position2)];
      }
    }
  }
};

const array = [3,2,4,5,7,1,3,9,4];

console.log(twoSum(array, 11));
