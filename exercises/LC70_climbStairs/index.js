// Solution #1: Time Complexity O(N), Space Complexity O(N)

// const climbStairs = n => {
//   if (n <= 3) {
//     return n;
//   }

//   let ways = [0, 1, 2, 3];

//   for (let i = 4; i <= n; i++) {
//     ways.push(ways[i - 1] + ways[i -2])
//   }

//   return ways.pop();
// }


// Solution #2: Time Complexity O(N), Space Complexity O(1)

function climbStairs(n) {
  if (n === 1 || n === 2 || n === 3) {
    return n;
  }

  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
    const third = first + second;
    first = second;
    second = third;
  }

  return second;
}

module.exports = climbStairs;
