"use strict";

var _hello = require("../hello");

var _hello2 = _interopRequireDefault(_hello);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sum(a, b) {
  return a + b;
}

test("adds 1 + 2 to equal 3", function () {
  expect((0, _hello2.default)()).toBe("hello, world");
});