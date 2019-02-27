(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react);
    global.If = mod.exports;
  }
})(this, function (exports, _propTypes, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var If = function If(props) {
    if (props.condition) {
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        props.children
      );
    }
    return null;
  };

  If.propTypes = {
    condition: _propTypes2.default.any.isRequired,
    children: _propTypes2.default.any.isRequired
  };

  exports.default = If;
});