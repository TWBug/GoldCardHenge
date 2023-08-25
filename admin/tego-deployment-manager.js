"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["style", "className", "children"];
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * We want to click button, merge master -> test-prod. Once we know it's working
 * we can merge into real prod. Ideally, you also get a warning if there are
 * changes in the CMS that have not yet been merged to master.
 */

// @note Use the test-prod branch when developing this component to avoid
// unwanted changes to the prod branch.
// const PROD_BRANCH = 'test-prod';
var PROD_BRANCH = 'master';
var TextSpinner = function TextSpinner(props) {
  var _React$useState = React.useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    dots = _React$useState2[0],
    setDots = _React$useState2[1];
  React.useEffect(function () {
    var interval = setInterval(function () {
      var nextLength = dots.length % 3 + 1;
      setDots(Array.from({
        length: nextLength
      }).map(function () {
        return '.';
      }).join(''));
    }, 200);
    return function () {
      clearInterval(interval);
    };
  });
  return /*#__PURE__*/React.createElement("span", props, "Loading", dots);
};
var Button = function Button(props) {
  var _props$style = props.style,
    style = _props$style === void 0 ? {} : _props$style,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    children = props.children,
    rest = _objectWithoutProperties(props, _excluded);
  var svgHeight = 20;
  return /*#__PURE__*/React.createElement("button", _extends({
    className: ['tego-Button', className].join(' '),
    style: _objectSpread({
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      border: '0px',
      cursor: 'pointer',
      height: '27px',
      lineHeight: '27px',
      fontSize: '12px',
      fontWeight: 600,
      borderRadius: '3px',
      padding: '0px 14px 0px 14px',
      marginRight: '8px'
    }, style)
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      marginRight: 5
    }
  }, children), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 ".concat(svgHeight, " ").concat(svgHeight),
    width: svgHeight,
    height: svgHeight,
    fill: "currentColor",
    style: {
      transform: 'scale(0.7)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
    clipRule: "evenodd"
  })));
};
var DeploymentManager = /*#__PURE__*/function (_React$Component) {
  _inherits(DeploymentManager, _React$Component);
  var _super = _createSuper(DeploymentManager);
  function DeploymentManager(props) {
    var _this;
    _classCallCheck(this, DeploymentManager);
    _this = _super.call(this, props);
    _this.state = {
      show: false,
      loading: false
    };
    _this.user = null;
    var styleTag = document.createElement('style');

    // Need to put hover styles in an actual style tag
    styleTag.innerText = "\n        .tego-Button {\n            color: rgb(255, 255, 255);\n            background-color: rgb(121, 130, 145);\n        }\n        .tego-Button:hover {\n            color: rgb(255, 255, 255);\n            background-color: rgb(85, 90, 101);\n        }\n        ".trim();
    _this.styleTag = styleTag;

    // Only show this control if we are on the "home page" layout, where the
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
      // Append styles
      document.head.appendChild(this.styleTag);

      // Display or hide the button based on route
      var fn = function fn() {
        try {
          // User is a full github-user object, but most notable for our use is user.token
          _this2.user = JSON.parse(localStorage.getItem('netlify-cms-user'));
          console.log("[Deployment Manager] Authenciated as ".concat(_this2.user.email));
          var headerControls = document.querySelector('[class*="AppHeaderActions"]');
          if (headerControls) {
            _this2.targetBox = headerControls.getBoundingClientRect();
            // Call the handler once to determine whether or not to show these
            // controls on the current route. Without this deep linking to a subpage
            // will still show the controls.
            _this2.handleRouteChange({
              newURL: window.location.href
            });
          } else {
            _this2.timeout = setTimeout(fn, 1000);
          }
        } catch (err) {
          console.warn('[Deployment Manager] Failed to authenticate. Will retry.');
          _this2.timeout = setTimeout(fn, 1000);
        }
      };
      fn(); // Run once to get things started

      window.addEventListener('hashchange', this.handleRouteChange);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timeout) clearTimeout(this.timeout);
      document.head.removeChild(this.styleTag);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      if (!this.state.show) return null;
      var handleDeploy = function handleDeploy(e) {
        e.preventDefault();
        if (window.confirm('Are you sure? If you confirm then the site will be deployed to hengetech.website')) {
          _this3.setState({
            loading: true
          });
          return fetch('https://api.github.com/repos/TWBug/GoldCardHenge/merges', {
            method: 'POST',
            headers: {
              Accept: 'application/vnd.github.v3+json',
              Authorization: "token ".concat(_this3.user.token),
              'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
              base: PROD_BRANCH,
              head: 'main',
              // Merge this branch into the base branch
              commit_message: 'Merged via CMS'
            })
          }).then(function (res) {
            if (res.status >= 300) {
              return Promise.reject(res.text());
            }
            if (res.status === 204) {
              return Promise.resolve(window.alert('No changes to deploy. Everything is up to date.'));
            }
            if (res.status === 209) {
              return Promise.resolve(window.alert('Conflicting changes. See: https://github.com/TWBug/GoldCardHenge/compare/master...main'));
            }
            return res.json().then(function (json) {
              window.alert('Success!');
            });
          }).then(function () {
            _this3.setState({
              loading: false
            });
          })["catch"](function (err) {
            _this3.setState({
              loading: false
            });
            console.warn(err);
            window.alert('Error. Deployment failed. See the console log for details.');
          });
        }
      };
      var loading = this.state.loading;
      return /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'relative',
          minWidth: '800px',
          maxWidth: '1440px',
          padding: '0px 12px',
          margin: '0px auto',
          zIndex: 999
        }
      }, /*#__PURE__*/React.createElement("div", _extends({
        style: {
          position: 'absolute',
          top: this.targetBox.top,
          right: this.targetBox.width + 20,
          height: 56,
          // height of header
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }
      }, this.props), /*#__PURE__*/React.createElement(Button, {
        onClick: handleDeploy,
        disabled: loading,
        style: {
          opacity: loading ? 0.6 : 1
        }
      }, loading ? /*#__PURE__*/React.createElement(TextSpinner, {
        style: {
          width: 60,
          textAlign: 'left',
          display: 'block'
        }
      }) : 'Deploy')));
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