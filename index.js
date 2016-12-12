'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorMessage = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var errorMessage = exports.errorMessage = 'Your prop value should match one of the `states` or you should provide a `DefaultComponent`'; // eslint-disable-line max-len

exports.default = function (config) {
  var _ref = config || {},
      _ref$prop = _ref.prop,
      prop = _ref$prop === undefined ? 'state' : _ref$prop,
      _ref$states = _ref.states,
      states = _ref$states === undefined ? {} : _ref$states,
      DefaultComponent = _ref.DefaultComponent;

  return function (props) {
    var propValue = props[prop];

    if (propValue === undefined && !DefaultComponent) throw new Error(errorMessage);
    if (propValue === undefined || !states[propValue]) return _react2.default.createElement(DefaultComponent, props);

    var ComposedComponent = states[propValue];
    return _react2.default.createElement(ComposedComponent, props);
  };
};