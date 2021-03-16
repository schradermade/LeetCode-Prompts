const isSymmetric = require("./index");

test("rootTrue returns true", () => {
  var rootTrue = [1, 2, 2, 3, 4, 4, 3]; //evalues to true
  expect(isSymmetric(rootTrue)).toEqual(true);
});

test("rootFalse returns false", () => {
  var rootFalse = [1, 2, 2, null, 3, null, 3]; //evaluates to false
  expect(isSymmetric(rootFalse)).toEqual(false);
});
