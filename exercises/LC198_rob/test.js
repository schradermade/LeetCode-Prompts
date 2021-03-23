const rob = require("./index");

test("rob([1,2,3,1]) returns 4", () => {
  expect(rob([1, 2, 3, 1])).toEqual(4);
});

test("rob([2,1,1,2]) returns 4", () => {
  expect(rob([2, 1, 1, 2])).toEqual(4);
});

test("rob([]) returns 0", () => {
  expect(rob([])).toEqual(0);
});

test("rob([3,4,2,3,7,55,7,4,54,7,34]) returns", () => {
  expect(rob([3,4,2,3,7,55,7,4,54,7,34])).toEqual(150);
});