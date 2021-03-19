const climbStairs = require("./index");

test("Returns 1 way to climb 1 stair", () => {
  expect(climbStairs(1)).toEqual(1);
});

test("Returns 2 ways to climb 2 stairs", () => {
  expect(climbStairs(2)).toEqual(2);
});

test("Returns 3 ways to climb 3 stairs", () => {
  expect(climbStairs(3)).toEqual(3);
});

test("Returns 5 ways to climb 4 stairs", () => {
  expect(climbStairs(4)).toEqual(5);
});

test("Returns 21 ways to climb 7 stairs", () => {
  expect(climbStairs(7)).toEqual(21);
})
 test("Returns 20365011074 ways to climb 50 stairs", () => {
   expect(climbStairs(50)).toEqual(20365011074);
 });