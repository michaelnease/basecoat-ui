"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _world = require("./world");

var _world2 = _interopRequireDefault(_world);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var place = (0, _world2.default)();

var hello = function hello() {
  return "hello, " + place;
};

exports.default = hello;