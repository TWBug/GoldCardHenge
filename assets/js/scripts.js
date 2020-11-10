"use strict";

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

window.highlight = {
  wrapper: {},
  replace: function replace() {
    this.wrapper = document.getElementsByClassName('replace');

    if (this.wrapper === 0) {
      return false;
    }

    this.wrapper = this.wrapper[0];

    if (typeof this.wrapper === 'undefined') {
      return false;
    }

    this.replaceInDocument(/Taiwan Gold Card/g, '<span class="font-bold text-black">Taiwan <span class="highlight">Gold Card</span></span>'); // this.replaceInDocument(
    //     /Gold Card/g,
    //     '<span class="tinline-block bg-highlight text-black rounded-md px-2">Gold Card</span>'
    // )
    // this.replaceInDocument(
    //     /Gold-Card/g,
    //     '<span class="inline-block bg-highlight text-black rounded-md px-2">Gold Card</span>'
    // )
  },
  replaceInDocument: function replaceInDocument(pattern, string) {
    ;
    [this.wrapper].concat(_toConsumableArray(this.wrapper.querySelectorAll('*:not(script):not(noscript):not(style)'))).forEach(function (_ref) {
      var _ref$childNodes = _toArray(_ref.childNodes),
          nodes = _ref$childNodes.slice(0);

      return nodes.filter(function (_ref2) {
        var nodeType = _ref2.nodeType;
        return nodeType === document.ELEMENT_NODE;
      }).forEach(function (textNode) {
        textNode.innerHTML = textNode.innerHTML.replace(pattern, string);
      });
    });
  }
};
"use strict";

window.languageDetection = {
  language: 'en',
  message: "Sorry, it looks like your browser storage has been corrupted. Please clear your storage by going to Tools -> Clear Recent History -> Cookies and set time range to 'Everything'. This will remove the corrupted browser storage across all sites.",
  init: function init() {
    // checks always the language - if not valid reset it to default english
    this.language = this.getStorage('language');

    if (this.language !== null) {
      if (this.checkValidLanguage(this.language) === false) {
        this.language = 'en';
        this.setStorage('language', this.language);
      }
    } else {
      this.language = this.getBrowserLanguage();
    } // if not redirect to a valid and checked destination
    // var path = location.pathname


    var old_language = location.pathname.substring(1, 3);

    if (old_language !== this.language) {
      this.redirect(old_language);
    }

    return this.language;
  },
  getBrowserLanguage: function getBrowserLanguage() {
    var browser_language = navigator.language || navigator.userLanguage;
    var user_language = browser_language.split('-');
    var language = user_language[0];

    if (this.checkValidLanguage(language) === false) {
      language = 'en';
    }

    this.setStorage('language', language);
    return language;
  },
  setStorage: function setStorage(item, value) {
    try {
      localStorage.setItem(item, value);
      return true;
    } catch (e) {
      if (e.name == 'NS_ERROR_FILE_CORRUPTED') {
        alert(this.message);
      }

      this.setCookie(item, value);
      return false;
    }
  },
  getStorage: function getStorage(item) {
    try {
      return localStorage.getItem(item);
    } catch (e) {
      if (e.name == 'NS_ERROR_FILE_CORRUPTED') {
        alert(this.message);
      }

      return this.getCookie(item);
    }
  },
  redirect: function redirect(old_language) {
    var new_location = location.pathname.replace(old_language, this.language);
    var new_href = location.origin + new_location;

    if (this.checkDestination(new_href) === true) {
      window.location.href = new_location;
    } else {
      window.location.href = location.origin + '/' + this.language + '/';
    }

    return true;
  },
  checkDestination: function checkDestination(url) {
    var request;
    if (window.XMLHttpRequest) request = new XMLHttpRequest();else request = new ActiveXObject('Microsoft.XMLHTTP');
    request.open('GET', url, false);
    request.send();

    if (request.status === 404) {
      return false;
    }

    return true;
  },
  checkValidLanguage: function checkValidLanguage(language) {
    var valid_languages = ['en', 'zh'];

    if (valid_languages.indexOf(language) !== -1) {
      return true;
    }

    return false;
  },
  setCookie: function setCookie(item, value) {
    var expires = '';
    var date = new Date();
    date.setTime(date.getTime() + 12 * 30 * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
    document.cookie = item + '=' + value + expires + '; path=/';
  },
  getCookie: function getCookie(item) {
    var itemValue = document.cookie.match('(^|;) ?' + item + '=([^;]*)(;|$)');
    return itemValue ? itemValue[2] : null;
  }
};
"use strict";

window.linksTargetBlank = {
  wrapper: {},
  replace: function replace() {
    this.wrapper = document.getElementsByClassName('replace');

    if (this.wrapper === 0) {
      return false;
    }

    this.wrapper = this.wrapper[0];

    if (typeof this.wrapper === 'undefined') {
      return false;
    }

    this.wrapper.querySelectorAll('a').forEach(function (node) {
      var files = ['pdf', 'doc', 'txt', 'docx'];
      var last_dot = node.href.lastIndexOf('.') + 1;
      var suffix = node.href.substring(last_dot, node.href.length);

      if (files.indexOf(suffix) === -1) {
        return false;
      }

      node.setAttribute('target', '_blank');
    });
  }
};
"use strict";

function handleResize() {
  // get the scroll navigations height and store it in a css custom propperty
  var navigationScrollHeight = document.getElementById('navigationScroll').offsetHeight;

  if (navigationScrollHeight === 0) {
    navigationScrollHeight = 58;
  }

  document.documentElement.style.setProperty('--navigationScroll', "".concat(navigationScrollHeight, "px")); // view port height fix for mobile browsers

  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
}
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function smoothScroll() {
  var links = document.querySelectorAll("#tableofcontents a[href^='#']");

  var _iterator = _createForOfIteratorHelper(links),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var link = _step.value;
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var href = e.target.getAttribute('href');
        var scrollNavHeight = document.documentElement.style.getPropertyValue('--navigationScroll');
        var offsetTop = document.querySelector(href).offsetTop + parseInt(scrollNavHeight.substring(0, scrollNavHeight.indexOf('px')));
        scroll({
          top: offsetTop,
          behavior: "smooth"
        });
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
"use strict";

window.taImageViewer = function () {
  return {
    modal: false,
    "default": {},
    init: function init() {},
    toggleModal: function toggleModal() {
      this.modal = !this.modal;
    },
    hideModal: function hideModal() {
      this.modal = false;
    }
  };
};
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.taLanguage = function () {
  return {
    language: 'en',
    "default": {
      language: 'en',
      supported: ['en', 'zh']
    },
    init: function init(options) {
      if (typeof options !== 'undefined') {
        if (_typeof(options) !== 'object' || options instanceof Array) {
          console.warn('Options are in wrong type - should be object - default options been used');
        }

        for (var _i = 0, _Object$entries = Object.entries(options); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          this["default"][key] = value;
        }
      }

      this.language = this["default"].language;
    },
    switchLanguage: function switchLanguage(language) {
      if (this["default"].supported.indexOf(language) === -1) {
        return false;
      }

      var location_path_name = location.pathname;
      var path_language = location_path_name.substring(1, 3);
      var location_new = location.origin + location_path_name.replace(path_language, language);
      localStorage.setItem('language', language);
      this.language = language;

      if (this.checkDestination(location_new) === true) {
        window.location.href = location_new;
      } else {
        window.location.href = location.origin + '/' + language + '/';
      }
    },
    checkDestination: function checkDestination(url) {
      var request;
      if (window.XMLHttpRequest) request = new XMLHttpRequest();else request = new ActiveXObject('Microsoft.XMLHTTP');
      request.open('GET', url, false);
      request.send();

      if (request.status === 404) {
        return false;
      }

      return true;
    }
  };
};
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.taNavigation = function () {
  return {
    scroll: false,
    modal: false,
    fixed: false,
    "default": {
      initiator: 'scroll'
    },
    init: function init(options) {
      var _this = this;

      if (typeof options !== 'undefined') {
        if (_typeof(options) !== 'object' || options instanceof Array) {
          console.warn('Options are in wrong type - should be object - default options been used');
        }

        for (var _i = 0, _Object$entries = Object.entries(options); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          this["default"][key] = value;
        }
      }

      var scroll = document.getElementById(this["default"].initiator);
      var scroll_top = scroll.getBoundingClientRect().top + window.scrollY; // console.info('scroll_top', scroll_top);

      window.addEventListener('scroll', function () {
        // scroll
        // var position = document.documentElement.style.getPropertyValue('--navscroll')
        if (window.scrollY >= scroll_top) {
          _this.scroll = true;
        } else {
          _this.scroll = false;
        }
      });
    },
    toggleModal: function toggleModal() {
      this.modal = !this.modal;
    }
  };
};
"use strict";

window.taWelcome = function () {
  return {
    show: false,
    language: 'en',
    available_languages: ['de', 'es', 'ar'],
    supported_languages: ['en', 'zh'],
    headline: '',
    description: '',
    init: function init() {
      var welcome = localStorage.getItem('welcome');

      if (welcome === null) {
        this.showModal();
        return false;
      }

      var timestamp = Date.parse(welcome);

      if (Number.isNaN(timestamp)) {
        this.showModal();
        return false;
      }

      var date = new Date(welcome);
      var today = new Date();
      var difference = Math.round((today - date) / 1000);

      if (difference > 2592000) {
        this.showModal();
        return false;
      }

      return true;
    },
    setLanguage: function setLanguage(language) {
      if (this.supported_languages.indexOf(language) === -1) {
        return false;
      }

      this.hide();
      localStorage.setItem('language', language);
      window.location.href = location.origin + '/' + language + '/';
    },
    hide: function hide() {
      this.show = false;
      localStorage.setItem('welcome', new Date().toString());
    },
    fetchData: function fetchData(language) {
      var _this = this;

      var url = location.origin + '/' + language + '/welcome.json';
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (json) {
        if (typeof json.headline !== 'undefined' && typeof json.description !== 'undefined') {
          _this.headline = json.headline;
          _this.description = json.description;
          _this.show = true;
        }
      })["catch"](function (error) {
        console.warn(error);
      });
    },
    listenerKeyupEscape: function listenerKeyupEscape() {
      var _this2 = this;

      document.addEventListener('keyup', function (event) {
        var key = event.key || event.keyCode;

        if (key === 27 || key === 'Escape') {
          _this2.hide();
        }
      });
    },
    showModal: function showModal() {
      var browser_language = navigator.language || navigator.userLanguage;
      var user_language = browser_language.split('-');
      this.language = user_language[0];

      if (this.available_languages.indexOf(this.language) === -1) {
        return false;
      }

      this.fetchData(this.language);
      this.listenerKeyupEscape();
      return true;
    }
  };
};
"use strict";

window.languageDetection.init();
window.highlight.replace();
window.linksTargetBlank.replace();
window.addEventListener('resize', handleResize);
handleResize();
smoothScroll();