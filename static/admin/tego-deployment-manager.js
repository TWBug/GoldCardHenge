"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(props) {
  var _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      rest = _objectWithoutProperties(props, ["style"]);

  return /*#__PURE__*/React.createElement("button", _extends({
    style: _objectSpread({
      display: 'block',
      position: 'relative',
      border: '0px',
      cursor: 'pointer',
      height: '27px',
      lineHeight: '27px',
      fontSize: '12px',
      fontWeight: 600,
      borderRadius: '3px',
      padding: '0px 24px 0px 14px',
      backgroundColor: 'rgb(121, 130, 145)',
      color: 'rgb(255, 255, 255)',
      marginRight: '8px'
    }, style)
  }, rest));
};

var DeploymentManager = /*#__PURE__*/function (_React$Component) {
  _inherits(DeploymentManager, _React$Component);

  var _super = _createSuper(DeploymentManager);

  function DeploymentManager(props) {
    var _this;

    _classCallCheck(this, DeploymentManager);

    _this = _super.call(this, props);
    _this.state = {
      show: false
    }; // Only show this control if we are on the "home page" layout, where the
    // header lines up with the appropriate built-in controls.

    _this.handleRouteChange = function (e) {
      var isSubpage = e.newURL.match(/\/admin\/#\/collections\/(.+)\/.+/);

      if (isSubpage) {
        _this.setState({
          show: false
        });
      } else {
        _this.setState({
          show: true
        });
      }

      console.log('change route', e);
      console.log('this', _assertThisInitialized(_this));
    };

    return _this;
  }

  _createClass(DeploymentManager, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var fn = function fn() {
        var headerControls = document.querySelector('[class*="AppHeaderActions"]');

        if (headerControls) {
          _this2.targetBox = headerControls.getBoundingClientRect();

          _this2.setState({
            show: true
          });
        } else {
          _this2.to = setTimeout(fn, 1000);
        }
      };

      window.addEventListener('hashchange', this.handleRouteChange);
      this.to = setTimeout(fn, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.to) clearTimeout(this.to);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.show) return null;
      return /*#__PURE__*/React.createElement("div", _extends({
        style: {
          position: 'absolute',
          top: this.targetBox.top,
          right: this.targetBox.width + 20,
          height: 56,
          // height of header
          display: 'flex',
          alignItems: 'center',
          zIndex: 999
        }
      }, this.props), /*#__PURE__*/React.createElement(Button, {
        onClick: function onClick(e) {
          e.preventDefault();
          console.log('deploy me!');
        }
      }, "Deploy"));
    }
  }]);

  return DeploymentManager;
}(React.Component);

try {
  var root = document.createElement('div');
  root.classList.add('DeploymentManager');
  document.body.appendChild(root);
  ReactDOM.render( /*#__PURE__*/React.createElement(DeploymentManager, null), root);
} catch (err) {
  console.warn(err);
}