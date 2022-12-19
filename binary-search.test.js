const binarySearch = require("./index");

test("check position of the number", () => {
  const array = [1, 3, 3, 5, 7, 8, 12, 15, 15, 15, 17, 20, 20];

  expect(binarySearch(array, 15)).toBe(7);
  expect(binarySearch(array, 19)).toBe(-1);
  expect(binarySearch(array, 1)).toBe(0);
  expect(binarySearch(array, 20)).toBe(11);
});
