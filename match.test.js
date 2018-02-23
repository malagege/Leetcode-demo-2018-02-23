const isMatch = require("./match");

// isMatch("aa","a") → false
// isMatch("aa","aa") → true
// isMatch("aaa","aa") → false
// isMatch("aa", "a*") → true
// isMatch("aa", ".*") → true
// isMatch("ab", ".*") → true
// isMatch("aab", "c*a*b") → true


test('isMatch("aa","a") → false', () => {
  expect(isMatch("aa", "a")).toBe(false);
});

test('isMatch("aa","aa") → true', () => {
  expect(isMatch("aa", "aa")).toBe(true);
});

test('isMatch("aaa","aa") → false', () => {
  expect(isMatch("aaa", "aa")).toBe(false);
});


test('isMatch("aa", "a*") → true', () => {
  expect(isMatch("aa", "a*")).toBe(true);
});

test('isMatch("aa", ".*") → true', () => {
  expect(isMatch("aa", ".*")).toBe(true);
});

test('isMatch("ab", ".*") → true', () => {
  expect(isMatch("ab", ".*")).toBe(true);
});

test('isMatch("aab", "c*a*b") → true', () => {
  expect(isMatch("aab", "c*a*b")).toBe(true);
});
