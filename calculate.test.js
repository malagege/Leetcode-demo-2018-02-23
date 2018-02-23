const calculate = require("./calculate");

// "1 + 1" = 2
// " 2-1 + 2 " = 3
// "(1+(4+5+2)-3)+(6+8)" = 23

test('calculate("1 + 1") = 2', () => {
  expect(calculate("1 + 1")).toBe(2);
});

test('calculate(" 2-1 + 2 ") = 3', () => {
  expect(calculate(" 2-1 + 2 ")).toBe(3);
});

test('calculate("(1+(4+5+2)-3)+(6+8)") = 23', () => {
  expect(calculate('1 + (4 + 5 + 2) - 3 + (6 + 8)')).toBe(23);
});