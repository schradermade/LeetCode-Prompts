function rob(nums) {

  var begin = new Date();
  const start = begin.getTime();
  console.log("start of function: " + start)
  // If nums array is empty, simply return 0
  if (nums.length === 0) {
    console.log("testing");
    return 0;
  }
  // If nums array has one element, return that one
  if (nums.length === 1) {
    console.log("testing1");
    return nums[0]
  }
  // If nums array contains two elements, return the larger of the 2 with Math.max()
  if (nums.length === 2) {
    console.log("testing2");
    // Math.max returns the largest number passed into it
    return Math.max(nums[0], nums[1])
  }

  // If nums array contains 3+ elements...
  const maxLootAtNth = [nums[0], Math.max(nums[0], nums[1])];
  // console.log("maxLootAtNth initial: " + maxLootAtNth);

  for (let i = 2; i < nums.length; i++) {
    // console.log("i: " + i);
    // console.log("current nums[i] value : " + nums[i]);
    // console.log("current maxLootAtNth " + maxLootAtNth);
    // console.log("push either " + (nums[i] + " + " + maxLootAtNth[i - 2]) + ", " + maxLootAtNth[i - 1]);
    maxLootAtNth.push(
      Math.max(nums[i] + maxLootAtNth[i - 2], maxLootAtNth[i - 1])
      );

      // console.log("end of loop maxLootAtNth at " + i + " index position: " + maxLootAtNth);

  }
  // return last item in array with .pop()
  // console.log("Final maxLootAtNth Array: " + maxLootAtNth);
  var end = new Date(); 
  const stop = end.getTime();
 
  console.log("end of function: " + stop);
  console.log((Math.abs(start - stop)));
  return maxLootAtNth.pop();
}

module.exports = rob;

// index position: 0,1,2,3,4, 5,6,7, 8,9,10
// values:         3,4,2,3,7,55,7,4,54,7,34
