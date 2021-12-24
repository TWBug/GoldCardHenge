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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * We want to click button, merge master -> test-prod. Once we know it's working
 * we can merge into real prod. Ideally, you also get a warning if there are
 * changes in the CMS that have not yet been merged to master.
 */
// @note Use the test-prod branch when developing this component to avoid
// unwanted changes to the prod branch.
// const PROD_BRANCH = 'test-prod';
var PROD_BRANCH = 'prod';

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
      rest = _objectWithoutProperties(props, ["style", "className", "children"]);

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
    var styleTag = document.createElement('style'); // Need to put hover styles in an actual style tag

    styleTag.innerText = "\n        .tego-Button {\n            color: rgb(255, 255, 255);\n            background-color: rgb(121, 130, 145);\n        }\n        .tego-Button:hover {\n            color: rgb(255, 255, 255);\n            background-color: rgb(85, 90, 101);\n        }\n        ".trim();
    _this.styleTag = styleTag; // Only show this control if we are on the "home page" layout, where the
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
      document.head.appendChild(this.styleTag); // Display or hide the button based on route

      var fn = function fn() {
        try {
          // User is a full github-user object, but most notable for our use is user.token
          _this2.user = JSON.parse(localStorage.getItem('netlify-cms-user'));
          console.log("[Deployment Manager] Authenciated as ".concat(_this2.user.email));
          var headerControls = document.querySelector('[class*="AppHeaderActions"]');

          if (headerControls) {
            _this2.targetBox = headerControls.getBoundingClientRect(); // Call the handler once to determine whether or not to show these
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

        if (window.confirm('Are you sure? If you confirm then the site will be deployed to goldcard.nat.gov.tw.')) {
          _this3.setState({
            loading: true
          });

          return fetch('https://api.github.com/repos/tego-tech/www/merges', {
            method: 'POST',
            headers: {
              Accept: 'application/vnd.github.v3+json',
              Authorization: "token ".concat(_this3.user.token),
              'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
              base: PROD_BRANCH,
              head: 'master',
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
              return Promise.resolve(window.alert('Conflicting changes. See: https://github.com/tego-tech/www/compare/prod...master'));
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