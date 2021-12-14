"use strict";

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

window.highlight = {
  wrapper: {},
  replace: function replace() {
    this.wrapper = document.getElementsByClassName('replace');

    if (this.wrapper === 0) {
      return false;
    }

    for (var index = 0; index < this.wrapper.length; index++) {
      if (typeof this.wrapper[index] === 'undefined') {
        continue;
      }

      this.replaceInDocument(this.wrapper[index], /Gold Card/g, '<span class="font-bold">Gold Card</span>');
      this.replaceInDocument(this.wrapper[index], /金卡/g, '<span class="font-bold">金卡</span>');
    }

    this.wrapper = this.wrapper[0];
  },
  replaceInDocument: function replaceInDocument(wrapper, pattern, string) {
    [wrapper].concat(_toConsumableArray(wrapper.querySelectorAll('*:not(script):not(noscript):not(style)'))).forEach(function (_ref) {
      var _ref$childNodes = _toArray(_ref.childNodes),
          nodes = _ref$childNodes.slice(0);

      return nodes.filter(function (_ref2) {
        var nodeType = _ref2.nodeType;
        return nodeType === document.ELEMENT_NODE;
      }).forEach(function (textNode) {
        if (textNode.classList.contains('nohighlight')) {
          return;
        }

        if (textNode.innerHTML.substr(0, 1) === '<') {
          return;
        }

        if (textNode.innerHTML.indexOf(string) !== -1) {
          return;
        }

        if (['OPTION', 'SELECT', 'path', 'INPUT', 'TEXTAREA', 'animateTransform'].indexOf(textNode.nodeName) !== -1) {
          return;
        }

        textNode.innerHTML = textNode.innerHTML.replace(pattern, string);
      });
    });
  }
};
"use strict";

window.languageDetection = {
  language: 'en',
  default_language: 'en',
  supported_languages: ['en', 'zh'],
  validCharacters: '0123456789abcdefghijklmnopqrstuvwxyz-/:%=_#&.@()+*,;',
  message: "Sorry, it looks like your browser storage has been corrupted. Please clear your storage by going to Tools -> Clear Recent History -> Cookies and set time range to 'Everything'. This will remove the corrupted browser storage across all sites.",
  init: function init() {
    // checks always the language - if not valid reset it to default english
    this.language = this.getStorage('language');

    if (this.supported_languages.indexOf(this.language) === -1) {
      this.language = this.default_language;
    }

    if (this.language !== null) {
      if (this.checkValidLanguage(this.language) === false) {
        this.language = 'en';
        this.setStorage('language', this.language);
      }
    } else {
      this.language = this.getBrowserLanguage();
    } // if not redirect to a valid and checked destination


    var old_language = location.pathname.substring(1, 3);

    if (old_language !== this.language) {
      this.redirect(old_language);
    }

    return this.language;
  },

  /**
   * Given a URL, ensure that it is under a whitelisted hostname and url
   * encoded.
   * @note This is duplicated in _ta-language.js
   * @param {string} str
   * @returns str
   */
  cleanURL: function cleanURL(str) {
    var u = new URL(str);
    var whitelist = ['staging.taiwangoldcard.tw', 'goldcard.nat.gov.tw'];

    if ("production" !== 'production') {
      console.warn('%cDev URLs enabled', 'color:red;background:yellow;');
      whitelist.push('localhost:1313');
    }

    if (!whitelist.includes(u.host)) {
      console.warn("%cNon whitelisted URL: ".concat(str, "!"), 'color:red;background:yellow;');
      u.host = 'goldcard.nat.gov.tw';
    } // NOTE: The string is automatically URI encoded, so no need for manual
    // encoding logic.


    return u.toString();
  },
  getCleanLocationPathname: function getCleanLocationPathname() {
    var source = location.pathname.substr(3).toString();
    var destination = '';

    for (var i = 0; i < source.length; i++) {
      if (this.validCharacters.indexOf(source[i].toLowerCase()) !== -1) {
        destination += source[i];
      } else {
        console.warn("%cStriped out character: ".concat(source[i], "!"), 'color:red;background:yellow;');
      }
    }

    return destination;
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
      return localStorage.getItem(item).replace(/(<([^>]+)>)/gi, '');
    } catch (e) {
      if (e.name == 'NS_ERROR_FILE_CORRUPTED') {
        alert(this.message);
      }

      return this.getCookie(item);
    }
  },
  redirect: function redirect(old_language) {
    if (this.supported_languages.indexOf(old_language) === -1) {
      old_language = this.default_language;
    }

    var location_path_name = this.getCleanLocationPathname();
    var location_new = location.origin + '/' + this.language + location_path_name;
    window.location.href = this.cleanURL(location_new);
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
    return itemValue ? itemValue[2].replace(/(<([^>]+)>)/gi, '') : null;
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
  var navigationScroll = document.getElementById('navigationScroll');
  var navigationScrollHeight = 0;

  if (navigationScroll !== null) {
    navigationScrollHeight = navigationScroll.offsetHeight;
  }

  if (navigationScrollHeight === 0) {
    navigationScrollHeight = 58;
  }

  document.documentElement.style.setProperty('--navigationScroll', "".concat(navigationScrollHeight, "px"));
  var w_aspect = Math.round(window.innerWidth / window.innerHeight * 100) / 100;
  var home_hero = '75vh';
  document.documentElement.style.setProperty('--homeHeroScrollHint', 'none');

  if (window.innerWidth < 1024) {
    home_hero = '100vh';
    document.documentElement.style.setProperty('--homeHeroScrollHint', 'block');
  } else {
    if (w_aspect > 1.64) {
      home_hero = '100vh';
      document.documentElement.style.setProperty('--homeHeroScrollHint', 'block');
    } else if (w_aspect < 1.2) {
      home_hero = '50vh';
    }
  }

  document.documentElement.style.setProperty('--homeHero', "".concat(home_hero)); // view port height fix for mobile browsers

  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
}
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function smoothScroll() {
  var links = document.querySelectorAll(".copy a[href^='#']");

  var _iterator = _createForOfIteratorHelper(links),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var link = _step.value;
      link.addEventListener('click', function (e) {
        // removed because of accessibility issues
        // e.preventDefault();
        var href = e.target.getAttribute('href');
        href = "[id=\"".concat(href.substr(1), "\"]");
        var scrollNavHeight = document.documentElement.style.getPropertyValue('--navigationScroll');
        scrollNavHeight = parseInt(scrollNavHeight.substring(0, scrollNavHeight.indexOf('px')));

        if (scrollNavHeight < 40) {
          scrollNavHeight = 75;
        }

        var bodyRect = document.body.getBoundingClientRect();
        var elemRect = document.querySelector(href).getBoundingClientRect();
        var offsetTop = elemRect.top - bodyRect.top + scrollNavHeight - 20;
        scroll({
          top: parseInt(offsetTop),
          behavior: 'smooth'
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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

window.taCheckList = function () {
  return {
    initialized: false,
    trigger_id: '',
    trigger_checked: false,
    checked: {},
    storage: false,
    name: false,
    elements: [],
    has_resume: false,
    has_finished: false,
    resume: {},
    options: {
      id: '',
      namespace: 'application',
      prefix: 'ta-check'
    },
    init: function init(options) {
      if (typeof options !== 'undefined') {
        if (_typeof(options) !== 'object' || options instanceof Array) {
          console.warn('Options are in wrong type - should be object - options been used');
        }

        for (var _i = 0, _Object$entries = Object.entries(options); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          this.options[key] = value;
        }
      } // checks if options are defined by data


      for (var _i2 = 0, _Object$entries2 = Object.entries(this.$el.dataset); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            _key = _Object$entries2$_i[0],
            _value = _Object$entries2$_i[1];

        if (typeof this.options[_key] !== 'undefined') {
          if (isNaN(_value)) {
            this.options[_key] = _value;
          } else {
            this.options[_key] = parseInt(_value);
          }
        }
      }

      this.name = this.options.prefix + '.' + this.options.namespace;
      this.storage = this.getStorage(this.name);

      if (this.storage === null) {
        this.storage = [];
      } else {
        try {
          this.storage = JSON.parse(this.storage);
        } catch (e) {
          console.warn('TA-Check - storage file corrupted');
          this.storage = [];
        }
      }
    },
    list: function list(options) {
      this.init(options);
      var elements = this.$el.querySelectorAll('[data-id]');

      for (var _index = 0; _index < elements.length; _index++) {
        var id = elements[_index].dataset.id;
        var checked = this.storage.indexOf(id) !== -1 ? true : false;
        this.checked[elements[_index].dataset.id] = checked;
        this.elements.push({
          index: _index,
          id: id,
          checked: checked,
          href: elements[_index].dataset.href,
          text: elements[_index].dataset.text
        });
      }

      var index = 0;

      for (index = 0; index < this.elements.length; index++) {
        if (this.elements[index].checked === false) {
          break;
        }
      }

      if (index > 0) {
        if (index >= this.elements.length) {
          this.has_finished = true;
        } else {
          this.resume = this.elements[index];

          if (this.resume.href !== location.pathname) {
            this.has_resume = true;
          }
        }
      }

      this.initialized = true;
    },
    trigger: function trigger(options) {
      var _this = this;

      this.init(options);
      this.trigger_id = location.pathname.replace(/\//gi, '');

      if (this.options.id.length !== 0) {
        this.trigger_id = this.options.id;
      }

      if (this.storage.length === 0) {
        this.setStorage(this.name, JSON.stringify(this.storage));
      }

      if (this.storage.indexOf(this.trigger_id) !== -1) {
        this.trigger_checked = true;
      }

      this.initialized = true;
      this.$watch('trigger_checked', function (value) {
        if (value === true) {
          if (_this.storage.indexOf(_this.trigger_id) === -1) {
            _this.storage.push(_this.trigger_id);
          }
        } else {
          var index = _this.storage.indexOf(_this.trigger_id);

          if (index !== -1) {
            _this.storage.splice(index, 1);
          }
        }

        _this.setStorage(_this.name, JSON.stringify(_this.storage));
      });
    },
    toggleCheck: function toggleCheck() {
      this.trigger_checked = !this.trigger_checked;
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
        return localStorage.getItem(item).replace(/(<([^>]+)>)/gi, '');
      } catch (e) {
        if (e.name == 'NS_ERROR_FILE_CORRUPTED') {
          alert(this.message);
        }

        return this.getCookie(item);
      }
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
      return itemValue ? itemValue[2].replace(/(<([^>]+)>)/gi, '') : null;
    }
  };
};
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

window.taCounter = function () {
  return {
    status: false,
    element: false,
    negative: false,
    options: {
      ref: 'number',
      start: 0,
      end: 1000,
      duration: 4000,
      interval: 100,
      locale: false,
      suffix: '',
      prefix: '',
      animate: true
    },
    init: function init(options) {
      var _this = this;

      if (typeof options !== 'undefined') {
        if (_typeof(options) !== 'object' || options instanceof Array) {
          console.warn('Options are in wrong type - should be object - options been used');
        }

        for (var _i = 0, _Object$entries = Object.entries(options); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          this.options[key] = value;
        }
      }

      if (this.options.animate === false) return;

      if (this.prefersReducedMotion() && this.options.interval < 1000) {
        this.options.interval = 1000;
      }

      if (this.options.locale === false) {
        this.options.locale = this.getVisitorLocale();
      }

      this.element = this.$refs[this.options.ref];

      if (typeof this.element === 'undefined') {
        console.warn('taCounter: ref element was not found:', this.options.ref);
        return;
      }

      this.element.innerHTML = this.options.start; // if element is already in the viewport -> start counting

      if (this.isInViewport()) {
        this.status = true;
        this.startCounting();
      } // check if element is in the viewport -> start counting


      window.addEventListener('scroll', function () {
        if (_this.isInViewport() && _this.status === false) {
          _this.status = true;

          _this.startCounting();
        }
      });
    },
    startCounting: function startCounting() {
      var _this2 = this;

      if (this.options.start === this.options.end) return;

      if (this.options.start > this.options.end) {
        this.negative = true;
      }

      this.element.innerHTML = this.options.start;
      var current = this.options.start;
      var range = this.options.end - this.options.start;
      var single_step = range / this.options.duration * this.options.interval;
      var timer = setInterval(function () {
        current += single_step;
        _this2.element.innerHTML = _this2.getCounterString(current);

        if (current >= _this2.options.end && _this2.negative === false || current <= _this2.options.end && _this2.negative === true) {
          _this2.element.innerHTML = _this2.getCounterString(_this2.options.end);
          clearInterval(timer);
        }
      }, this.options.interval);
    },
    isInViewport: function isInViewport() {
      var position = this.element.getBoundingClientRect();
      return position.top >= 0 && position.left >= 0 && position.bottom <= (window.innerHeight || document.documentElement.clientHeight) && position.right <= (window.innerWidth || document.documentElement.clientWidth);
    },
    prefersReducedMotion: function prefersReducedMotion() {
      var QUERY = '(prefers-reduced-motion: no-preference)';
      var mediaQueryList = window.matchMedia(QUERY);
      var prefersReducedMotion = !mediaQueryList.matches;
      return prefersReducedMotion;
    },
    getVisitorLocale: function getVisitorLocale() {
      var browser_language = navigator.language || navigator.userLanguage;
      var visitor_language = browser_language.split('-');
      return visitor_language[0];
    },
    getCounterString: function getCounterString(current) {
      return this.options.prefix + Math.floor(current).toLocaleString(this.options.locale) + this.options.suffix;
    }
  };
};
"use strict";

window.taFilter = function () {
  return {
    initialized: false,
    filter: '',
    is_empty: true,
    index: [],
    result: [],
    init: function init() {
      var _this = this;

      var url = location.origin + location.pathname + 'data.json';

      if (typeof this.$fetch !== 'undefined') {
        this.$fetch(url).then(function (response) {
          _this.index = response;
          _this.initialized = true;

          _this.resetResult();
        })["catch"](function (error) {
          console.warn('Unable to load data.json for filtering');
        });
      } else {
        fetch(url).then(function (response) {
          return response.json();
        }).then(function (json) {
          _this.index = json;
          _this.initialized = true;

          _this.resetResult();
        })["catch"](function (error) {
          console.warn('Unable to parse json format for data.json for filtering');
        });
      }

      this.$watch('filter', function (value) {
        if (value.length === 0) {
          _this.is_empty = true;
          return _this.resetResult();
        }

        _this.is_empty = false;

        _this.findContent();
      });
    },
    resetFilter: function resetFilter() {
      this.filter = ''; // document.getElementById('filter').focus();
    },
    findContent: function findContent() {
      var _this2 = this;

      var result = [];
      this.index.forEach(function (element) {
        if (element.summary.indexOf(_this2.filter) !== -1) {
          if (result.indexOf(element.index) === -1) {
            result.push(parseInt(element.index));
          }
        }
      });
      result.sort(function (a, b) {
        if (a < b) {
          return -1;
        }

        return 1;
      });
      this.result = result;
    },
    // NOT USED BECAUSE OF ACCESSIBILITY ISSUES
    // setFocus() {
    //     setTimeout(() => {
    //         this.$refs.input.focus();
    //     }, 200);
    // },
    resetResult: function resetResult() {
      var result = [];

      for (var index = 0; index < this.index.length; index++) {
        result.push(index);
      }

      this.result = result;
      return true;
    },
    isInResult: function isInResult(index) {
      if (this.initialized) {
        return this.result.indexOf(index) !== -1 ? true : false;
      }

      return true;
    },
    isNoResult: function isNoResult() {
      if (this.initialized === false) return false;
      return this.result.length === 0 ? true : false;
    },
    isFiltered: function isFiltered() {
      return this.result.length !== this.index.length ? true : false;
    }
  };
};
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

window.taForm = function () {
  return {
    language: 'en',
    options: {
      language: 'en',
      supported: ['en', 'zh']
    },
    loading: false,
    valid: false,
    sent: false,
    message: '',
    form: {},
    error: {},
    filled: {},
    "default": {},
    init: function init(options) {
      if (typeof options !== 'undefined') {
        if (_typeof(options) !== 'object' || options instanceof Array) {
          console.warn('Options are in wrong type - should be object - default options been used');
        }

        for (var property in options) {
          this.form[property] = options[property];
        }
      } // checks if options are defined by data


      for (var _property in this.$el.dataset) {
        this.form[_property] = this.$el.dataset[_property];
      } // defines error object
      // + set default value


      for (var _property2 in this.form) {
        this.error[_property2] = false;
        this["default"][_property2] = this.form[_property2];
      }
    },
    submit: function submit() {
      var _this = this;

      if (this.check() === false) {
        return;
      }

      this.loading = true;
      this.$fetch({
        url: 'https://ticket.taiwan-gold-card-office.workers.dev',
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': window.TGC_SESSION_ID
        },
        data: JSON.stringify(this.form)
      }).then(function () {
        _this.valid = true;

        _this.reset();
      })["catch"](function () {
        _this.valid = false;
      })["finally"](function () {
        _this.loading = false;
        _this.sent = true;
      });
    },
    check: function check() {
      for (var property in this.error) {
        this.error[property] = false;
        this.filled[property] = false;
      }

      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email) === false) {
        this.error.email = true;
      } else {
        this.filled.email = true;
      }

      if (this.form.type.length === 0) {
        this.error.type = true;
      } else {
        this.filled.type = true;
      }

      if (this.form.name.length === 0) {
        this.error.name = true;
      } else {
        this.filled.name = true;
      }

      if (this.form.subject.length === 0) {
        this.error.subject = true;
      } else {
        this.filled.subject = true;
      }

      if (this.form.description.length === 0) {
        this.error.description = true;
      } else {
        this.filled.description = true;
      }

      for (var _property3 in this.error) {
        if (this.error[_property3] === true) {
          return false;
        }
      }

      return true;
    },
    reset: function reset() {
      // set form to default values
      for (var property in this["default"]) {
        this.form[property] = this["default"][property];
      }
    }
  };
};
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

window.taGallery = function () {
  return {
    initialized: false,
    modal: false,
    image: {},
    items: [],
    index: 0,
    active_element: false,
    options: {
      id: '',
      item: 'ta-gallery-item'
    },
    init: function init(options) {
      var _this = this;

      if (typeof options !== 'undefined') {
        if (_typeof(options) !== 'object' || options instanceof Array) {
          console.warn('Options are in wrong type - should be object - options been used');
        }

        for (var _i = 0, _Object$entries = Object.entries(options); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          this.options[key] = value;
        }
      } // checks if options are defined by data


      for (var _i2 = 0, _Object$entries2 = Object.entries(this.$el.dataset); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            _key = _Object$entries2$_i[0],
            _value = _Object$entries2$_i[1];

        if (typeof this.options[_key] !== 'undefined') {
          if (isNaN(_value)) {
            this.options[_key] = _value;
          } else {
            this.options[_key] = parseInt(_value);
          }
        }
      }

      var items = this.$el.querySelectorAll('.' + this.options.item);

      for (var index = 0; index < items.length; index++) {
        if (typeof items[index].href === 'undefined') {
          continue;
        }

        this.items.push(items[index]);
      }

      var _loop = function _loop(_index) {
        _this.items[_index].addEventListener('click', function (event) {
          event.preventDefault();

          _this.showModal(_index);
        });
      };

      for (var _index = 0; _index < this.items.length; _index++) {
        _loop(_index);
      }

      window.addEventListener('keyup', function (event) {
        if (_this.modal === false) {
          return;
        }

        if (event.key === 'Escape') {
          _this.hideModal();

          return;
        } else if (event.key === 'ArrowRight') {
          _this.next();

          return;
        } else if (event.key === 'ArrowLeft') {
          _this.previous();

          return;
        }
      });
    },
    showModal: function showModal(index) {
      var _this2 = this;

      this.index = index;
      this.setImage();
      this.modal = true;
      this.active_element = document.activeElement;
      setTimeout(function () {
        _this2.$refs['focus'].focus();
      }, 100);
    },
    toggleModal: function toggleModal() {
      if (this.modal === true) {
        this.hideModal();
        return;
      }

      this.showModal();
    },
    hideModal: function hideModal() {
      this.modal = false;
      this.active_element.focus();
    },
    next: function next() {
      var next_index = this.index + 1;

      if (next_index > this.items.length - 1) {
        next_index = 0;
      }

      this.index = next_index;
      this.setImage();
    },
    previous: function previous() {
      var previous_index = this.index - 1;

      if (previous_index < 0) {
        previous_index = this.items.length - 1;
      }

      this.index = previous_index;
      this.setImage();
    },
    setImage: function setImage() {
      this.image.src = this.items[this.index].href;
      this.image.title = false;

      if (typeof this.items[this.index].dataset.title !== 'undefined') {
        if (this.items[this.index].dataset.title !== '') {
          this.image.title = this.items[this.index].dataset.title;
        }
      }

      this.image.description = false;

      if (typeof this.items[this.index].dataset.description !== 'undefined') {
        if (this.items[this.index].dataset.description !== '') {
          this.image.description = this.items[this.index].dataset.description;
        }
      }

      this.image.alt = false;

      if (typeof this.items[this.index].dataset.alt !== 'undefined') {
        if (this.items[this.index].dataset.alt !== '') {
          this.image.alt = this.items[this.index].dataset.alt;
        }
      }
    }
  };
};
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

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

window.taLanguage = function () {
  return {
    language: 'en',
    "default": {
      language: 'en',
      supported: ['en', 'zh'],
      validCharacters: '0123456789abcdefghijklmnopqrstuvwxyz-/:%=_#&.@()+*,;'
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

    /**
     * Given a URL, ensure that it is under a whitelisted hostname and url
     * encoded.
     * @note This is duplicated in _language-detection.js
     * @param {string} str
     * @returns str
     */
    cleanURL: function cleanURL(str) {
      var u = new URL(str);
      var whitelist = ['staging.taiwangoldcard.tw', 'goldcard.nat.gov.tw'];

      if ("production" !== 'production') {
        console.warn('%cDev URLs enabled', 'color:red;background:yellow;');
        whitelist.push('localhost:1313');
      }

      if (!whitelist.includes(u.host)) {
        console.warn("%cNon whitelisted URL: ".concat(str, "!"), 'color:red;background:yellow;');
        u.host = 'goldcard.nat.gov.tw';
      } // NOTE: The string is automatically URI encoded, so no need for manual
      // encoding logic.


      return u.toString();
    },
    getCleanLocationPathname: function getCleanLocationPathname() {
      var source = location.pathname.substr(3).toString();
      var destination = '';

      for (var i = 0; i < source.length; i++) {
        if (this["default"].validCharacters.indexOf(source[i].toLowerCase()) !== -1) {
          destination += source[i];
        } else {
          console.warn("%cStriped out character: ".concat(source[i], "!"), 'color:red;background:yellow;');
        }
      }

      return destination;
    },
    switchLanguage: function switchLanguage(language) {
      if (this["default"].supported.indexOf(language) === -1) {
        return false;
      }

      var location_path_name = this.getCleanLocationPathname();
      var location_new = location.origin + '/' + language + location_path_name;
      localStorage.setItem('language', language);
      this.language = language;
      window.location.href = this.cleanURL(location_new);
    }
  };
};
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

window.taMainContent = function () {
  // https://www.w3.org/TR/WCAG-TECHS/G1.html
  return {
    href: '',
    offsetTop: 0,
    options: {
      tag: 'h1',
      fallback: 'maincontent',
      wrapper: 'scroll',
      offset: 0
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

          this.options[key] = value;
        }
      } // checks if options are defined by data


      for (var _i2 = 0, _Object$entries2 = Object.entries(this.$el.dataset); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            _key = _Object$entries2$_i[0],
            _value = _Object$entries2$_i[1];

        if (typeof this.options[_key] !== 'undefined') {
          if (isNaN(_value)) {
            this.options[_key] = _value;
          } else {
            this.options[_key] = parseInt(_value);
          }
        }
      }

      var element = document.getElementsByTagName(this.options.tag);

      if (typeof element[0] === 'undefined') {
        return;
      }

      var element_id = this.options.fallback;

      if (element[0].id === '') {
        element[0].id = this.options.fallback;
      } else {
        element_id = element[0].id;
      } // set the id of the found element


      this.id = element[0].id;
      var scrollNavHeight = document.documentElement.style.getPropertyValue('--navigationScroll');

      if (scrollNavHeight === '') {
        scrollNavHeight = 0;
      } else {
        scrollNavHeight = parseInt(scrollNavHeight.substring(0, scrollNavHeight.indexOf('px')));
      }

      this.offsetTop = element[0].offsetTop + scrollNavHeight;
      this.href = window.location.pathname + '#' + element_id;
    },
    go: function go() {
      scroll({
        top: parseInt(this.offsetTop) - parseInt(this.options.offset),
        behavior: 'smooth'
      });
      var wrapper = document.getElementById(this.options.wrapper);

      if (wrapper === null) {
        return;
      }

      var focus = wrapper.querySelector('a:first-of-type, input:first-of-type, button:first-of-type');
      console.info('focus', focus);

      if (focus === null) {
        return;
      }

      focus.focus(); // console.info('main_content', main_content);
      // const test = main_content.querySelector('a:first-of-type');
      // console.info('test', test);
      // scroll({
      //     top: parseInt(this.offsetTop) - parseInt(this.options.offset),
      //     behavior: 'smooth',
      // });
    }
  };
};
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

window.taMap = function () {
  return {
    status: false,
    elements: [],
    play: [],
    paused: [],
    expanded: [],
    stop: false,
    active: -1,
    modal: false,
    title: '',
    titleButton: [],
    wrapper: {},
    data: {},
    "default": {},
    previousActiveElement: false,
    options: {
      ref: 'map',
      file: 'file',
      titleStop: '',
      titlePlay: ''
    },
    init: function init() {
      var _this = this;

      // checks if options are defined by data
      for (var _i = 0, _Object$entries = Object.entries(this.$el.dataset); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        if (typeof this.options[key] !== 'undefined') {
          this.options[key] = value;
        }
      }

      var content = this.$el.querySelectorAll('.member');

      for (var index = 0; index < content.length; index++) {
        this.elements.push(content[index]);
        this.play.push(true);
        this.paused.push(false);
        this.expanded.push(false);
        this.titleButton.push(content[index].dataset.titleShow);
      }

      var wrapper = this.$el.querySelector('.wrapper');
      this.wrapper = {
        left: wrapper.offsetLeft,
        width: wrapper.innerWidth
      };

      if (this.options.titleStop.length > 0) {
        this.title = this.options.titleStop;
        this.$watch('stop', function (value) {
          if (value === true) {
            _this.title = _this.options.titlePlay;
            return;
          }

          _this.title = _this.options.titleStop;
        });
      } // check if element is in the viewport -> start counting


      window.addEventListener('scroll', function () {
        _this.startAnimation();
      });
      this.startAnimation();
      this.$el.addEventListener('keydown', function (event) {
        if (event.code === 'Escape') {
          _this.closeModal();
        }
      }, false);
    },
    toggle: function toggle(index) {
      var top = this.elements[index].offsetTop;
      var left = this.elements[index].offsetLeft + this.wrapper.left;
      this.paused[this.active] = false;
      this.paused[index] = !this.paused[index];

      if (this.stop !== true) {
        this.play[this.active] = true;
        this.play[index] = !this.play[index];
      }

      this.active = index;
      this.modal = !this.modal;

      if (this.modal === true) {
        this.titleButton[index] = this.elements[index].dataset.titleHide;
      } else {
        this.titleButton[index] = this.elements[index].dataset.titleShow;
      }

      this.data = {
        name: this.elements[index].dataset.name,
        image: this.elements[index].dataset.image,
        origin: this.elements[index].dataset.origin,
        local: this.elements[index].dataset.local,
        description: this.elements[index].dataset.description,
        style: "--left:".concat(left, "px;--top:").concat(top, "px;--translatex:-2px;--translatey:-28px")
      };

      if (window.innerWidth < this.$refs.file.width) {
        this.data.style = '';
      }

      if (this.modal) {
        this.previousActiveElement = document.activeElement;
        this.setFocus(document.getElementById('map-modal-close-button'));
      } else {
        if (document.activeElement !== this.previousActiveElement) {
          this.setFocus(this.previousActiveElement);
        }
      }
    },
    closeModal: function closeModal() {
      this.modal = false;
      this.paused[this.active] = false;
      this.active = -1;
      this.previousActiveElement.focus();

      if (this.stop === true) {
        return;
      }

      for (var index = 0; index < this.play.length; index++) {
        this.play[index] = true;
      }
    },
    startAnimation: function startAnimation() {
      var _this2 = this;

      if (this.status === false) {
        if (this.isInViewport()) {
          var max_scroll = Math.floor(this.$refs[this.options.file].offsetWidth - this.$refs[this.options.ref].offsetWidth - 1);

          if (max_scroll > 250) {
            max_scroll = 250;
          }

          this.status = true;
          var interval = setInterval(function () {
            _this2.$refs[_this2.options.ref].scrollLeft += 10;

            if (_this2.$refs[_this2.options.ref].scrollLeft > max_scroll) {
              clearInterval(interval);
            }
          }, 40);
        }
      }
    },
    stopAnimation: function stopAnimation() {
      this.stop = true;

      for (var index = 0; index < this.play.length; index++) {
        this.play[index] = false;
      }
    },
    isInViewport: function isInViewport() {
      var position = this.$refs[this.options.ref].getBoundingClientRect();
      return position.top >= 0 && position.left >= 0 && position.bottom <= (window.innerHeight || document.documentElement.clientHeight) && position.right <= (window.innerWidth || document.documentElement.clientWidth);
    },
    setFocus: function setFocus(element) {
      setTimeout(function () {
        element.focus();
      }, 10);
    }
  };
};
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

window.taNavigation = function () {
  return {
    scroll: false,
    modal: false,
    search: false,
    fixed: false,
    checked_menu_height: false,
    active_element: '',
    active_dropdown: '',
    dropdown: {
      goldcard: false,
      faq: false,
      whytaiwan: false,
      eventsnews: false,
      resources: false
    },
    menue: {
      goldcard: false,
      faq: false,
      whytaiwan: false,
      eventsnews: false,
      resources: false
    },
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

      if (scroll === null) {
        return;
      }

      var scroll_top = scroll.getBoundingClientRect().top + window.scrollY;
      window.addEventListener('scroll', function () {
        if (window.scrollY >= scroll_top) {
          _this.scroll = true;
        } else {
          _this.scroll = false;
        }
      });
      var all_links = document.querySelectorAll('a');

      for (var i = 0; i < all_links.length; i++) {
        all_links[i].addEventListener('focus', function () {
          _this.active_element = document.activeElement;
        });
      }

      window.addEventListener('resize', function () {
        _this.setMenuHeight();
      });
      this.setMenuHeight();
      this.$watch('scroll', function (value) {
        if (value !== false) {
          // if the scroll menue gets hidden - the menue must be hidden too
          _this.hideMenue();

          _this.hideDropdown();
        }
      });
      this.$watch('active_element', function (value) {
        if (_this.active_dropdown.length === 0) {
          return;
        }

        if (_this.focusIsChild() === false) {
          _this.hideDropdown();

          console.info('hide');
        }
      });
    },
    focusIsChild: function focusIsChild() {
      if (this.active_dropdown.length === 0) {
        return false;
      }

      return this.$refs[this.active_dropdown].contains(this.active_element);
    },
    toggleModal: function toggleModal() {
      this.modal = !this.modal;
    },
    toggleSearch: function toggleSearch() {
      this.search = !this.search;
    },
    scrollTop: function scrollTop() {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    },
    setMenuHeight: function setMenuHeight() {
      var menu = this.$refs.menu;

      if (typeof menu !== 'undefined') {
        document.documentElement.style.setProperty('--navigationMenu', "".concat(menu.offsetHeight, "px"));
      }
    },
    toggleDropdown: function toggleDropdown(topic, event) {
      if (this.checked_menu_height === false) {
        this.setMenuHeight();
        this.checked_menu_height = true;
      }

      for (var property in this.dropdown) {
        if (property === topic) {
          this.dropdown[topic] = !this.dropdown[topic];
          continue;
        }

        this.dropdown[property] = false;
      }

      this.active_dropdown = '';

      for (var _property in this.dropdown) {
        if (this.dropdown[_property] === true) {
          this.active_dropdown = _property;
          break;
        }
      }

      event.preventDefault();
    },
    toggleMenue: function toggleMenue(topic, event) {
      var navigationScroll = document.getElementById('navigationScroll');

      if (navigationScroll !== null) {
        document.documentElement.style.setProperty('--navigationScroll', "".concat(navigationScroll.offsetHeight, "px"));
      }

      for (var property in this.menue) {
        if (property === topic) {
          this.menue[topic] = !this.menue[topic];
          continue;
        }

        this.menue[property] = false;
      }

      event.preventDefault();
    },
    hideDropdown: function hideDropdown() {
      for (var property in this.dropdown) {
        this.dropdown[property] = false;
      }
    },
    hideMenue: function hideMenue() {
      for (var property in this.menue) {
        this.menue[property] = false;
      }
    }
  };
};
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var __shouldDebug = false;

function escapeJSONSpecialChars(str) {
  return String(str).replace(/\\+&/gim, '') // Replace malformed ampersand escape sequences. See https://github.com/tego-tech/www/blob/9ce5e41a68db437d883aa47d43ece14633a0ef8e/content/why-taiwan/taiwan%E2%80%99s-offshore-islands-tourist-attractions.en.md#L22-L23
  .replace(/[\b\f\n\r\t]/g, function (_char) {
    switch (_char) {
      case '\b':
        // backspace
        return '\\b';

      case '\f':
        // formfeed
        return '\\f';

      case '\n':
        // newline
        return '\\n';

      case '\r':
        // carriage return
        return '\\r';

      case '\t':
        // tab
        return '\\t';

      default:
        console.warn('Unhandled special character', _char);
        return _char;
    }
  });
}

window.taSearchDebug = function () {
  var activated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  __shouldDebug = activated;
  localStorage.setItem('@@TEGO_DBG', activated);
};

window.taSearch = function () {
  try {
    __shouldDebug = localStorage.getItem('@@TEGO_DBG') === 'true';
  } catch (err) {
    console.warn('Could not init debugger.');
  }

  var shouldUseChinese = window.location.pathname.startsWith('/zh/');

  var dbg = function dbg() {
    if (__shouldDebug) {
      var _console;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_console = console).info.apply(_console, ['[TA-SEARCH]'].concat(args));
    }
  }; // not needed min length defined in the template
  // var is_chinese_ui = window.location.pathname.startsWith('/zh/');


  var searcher = {
    initialized: false,
    visible: false,
    query: '',
    // is_chinese_ui: false,
    has_chinese_characters: false,
    result: [],
    active: -1,
    trigger: '',
    is_dirty: false,
    is_enough: false,
    is_empty: true,
    has_results: false,
    excerpt_length: 200,
    // not needed min length defined in the template
    // minimum_length: is_chinese_ui ? 2 : 3,
    highlight: true,
    highlight_style: 'font-weight:bold;',
    options: {
      file: '',
      excerpt_length: 200,
      minimum_length: 3
    },
    init: function init() {
      var _this = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (typeof options !== 'undefined') {
        if (_typeof(options) !== 'object' || options instanceof Array) {
          console.warn('Options are in wrong type - should be object - options been used');
        }

        for (var _i = 0, _Object$entries = Object.entries(options); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          this.options[key] = value;
        }
      } // checks if options are defined by data


      for (var _i2 = 0, _Object$entries2 = Object.entries(this.$el.dataset); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            _key2 = _Object$entries2$_i[0],
            _value = _Object$entries2$_i[1];

        if (typeof this.options[_key2] !== 'undefined') {
          if (isNaN(_value)) {
            this.options[_key2] = _value;
          } else {
            this.options[_key2] = parseInt(_value);
          }
        }
      }

      var _console2 = console,
          assert = _console2.assert;
      assert(window.lunr, 'Lunr.js not found. Search cannot be supported without Lunr.js.'); // not needed min length defined in the template
      // this.is_chinese_ui = is_chinese_ui;

      this.loadIndex();
      this.initLunr();
      this.$watch('visible', function (value) {
        if (value === true) {
          setTimeout(function () {
            _this.$refs.input.focus();
          }, 300);
        }
      });
      window.addEventListener('ta-search-show', function (event) {
        _this.visible = true;
        _this.trigger = event.detail;
        setTimeout(function () {
          _this.$refs.input.focus();
        }, 300);
      });
      this.$watch('query', function (value) {
        _this.query = value.replace(/(<([^>]+)>)/gi, '');

        if (_this.query.length === 0) {
          _this.reset();

          return;
        }

        _this.is_empty = false;

        if (_this.query.length < _this.options.minimum_length) {
          _this.reset(false);

          return;
        }

        _this.is_enough = true;
        _this.is_dirty = true;

        _this.search(_this.query);
      });
    },
    reset: function reset() {
      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.result = [];
      this.has_results = false;
      this.is_enough = false;
      this.active = -1;
      this.is_dirty = false;

      if (query === true) {
        this.$refs.input.focus();
        this.is_empty = true;
        this.query = '';
      }
    },
    up: function up() {
      if (this.active > 0) {
        this.active -= 1;
      }
    },
    down: function down() {
      if (this.active < this.result.length - 1) {
        this.active += 1;
      }
    },
    enter: function enter() {
      if (this.active === -1 && this.result.length === 0) {
        return false;
      }

      var url = this.result[this.active].href;
      location.href = url;
    },
    esc: function esc() {
      if (this.query.length < 1) {
        this.visible = false;
        this.eventSearchHide();
      }

      this.reset();
    },
    away: function away() {
      if (this.initialized === true && this.visible === true) {
        this.visible = false;
        this.eventSearchHide();
      }
    },
    show: function show(details) {
      var _this2 = this;

      this.visible = true;
      this.trigger = details;
      setTimeout(function () {
        _this2.$refs.input.focus();
      }, 300);
    },
    hide: function hide() {
      this.reset(true);
      this.visible = false;
      this.eventSearchHide();
    },
    eventSearchHide: function eventSearchHide() {
      var _this3 = this;

      setTimeout(function () {
        var event = new CustomEvent('ta-search-hide', {
          detail: _this3.trigger
        });
        window.dispatchEvent(event);
      }, 300);
    },
    excerpt: function excerpt(string) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (length === 0) {
        length = this.options.excerpt_length;
      }

      var string_lower = string.toLowerCase();
      var matchIndex = string_lower.indexOf(this.query.toLowerCase());
      var excerpt = '';

      if (matchIndex === -1) {
        excerpt = string.slice(0, length);
      } else {
        excerpt = string.slice(Math.max(0, matchIndex - length / 2), matchIndex) + string.slice(matchIndex + this.query.length, matchIndex + length / 2);
      }

      if (this.highlight) {
        excerpt = this.replace(excerpt);
      }

      if (excerpt.length < string.length) {
        return excerpt + '…';
      }

      return excerpt;
    },
    replace: function replace(string) {
      var query = string.substr(string.toLowerCase().indexOf(this.query.toLowerCase()), this.query.length);

      if (query.length !== this.query.length) {
        return string;
      }

      var regex = new RegExp(this.query, 'gi');
      return string.replaceAll(regex, '<span style="' + this.highlight_style + '">' + query + '</span>');
    },
    initLunr: function initLunr() {
      // Set up support for chinese
      window.lunr.zh = function () {
        this.pipeline.reset();
        this.pipeline.add(window.lunr.zh.trimmer, window.lunr.stopWordFilter, window.lunr.stemmer);
      };

      window.lunr.zh.trimmer = function (token) {
        return token.update(function (str) {
          if (function (str) {
            /[\u4E00-\u9FA5\uF900-\uFA2D]/.test(str);
          }) return str;
          return str.replace(/^\W+/, '').replace(/\W+$/, '');
        });
      };

      window.lunr.Pipeline.registerFunction(lunr.zh.trimmer, 'trimmer-zh');
    },
    loadIndex: function loadIndex() {
      var _this4 = this;

      dbg('Lunr index loading:', this.$el.dataset.file); // First retrieve the index file

      fetch(this.options.file).then(function (x) {
        return x.text();
      }).then(function (s) {
        try {
          return JSON.parse(s);
        } catch (err) {
          console.warn('JSON appears malformed. Trying again with escaping.');
          return JSON.parse(escapeJSONSpecialChars(s));
        }
      }).then(function (index) {
        window.lunrPages = index; // Set up lunrjs by declaring the fields we use
        // Also provide their boost level for the ranking

        window.lunrIndex = window.lunr(function () {
          dbg('Lunr index loaded');

          if (shouldUseChinese) {
            dbg('Lunr chinese mode');
            this.use(window.lunr.zh); // Set up Chinese support
          }

          this.field('title', {
            boost: 10
          });
          this.field('tags', {
            boost: 5
          });
          this.field('categories', {
            boost: 8
          });
          this.field('content'); // ref is the result item identifier (I chose the page URL)

          this.ref('href'); // Feed lunr with each file and let lunr actually index them

          var _iterator = _createForOfIteratorHelper(window.lunrPages),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var page = _step.value;
              this.add(page);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        });
        _this4.initialized = true;
      })["catch"](function (err) {
        console.error('Error getting Hugo index file.', err);
      });
    },
    search: function search(query) {
      if (query.length < this.minimum_length) {
        this.reset(false);
        dbg('Query not long enough.');
        return false;
      }

      dbg('Stemmed query', lunrIndex.pipeline.runString(query)); // @note Search query is built up here
      // Initially we were constructing a query using the `search(string)`
      // approach. This is fine, however, it was giving us issues with the
      // wildcards. Namely, typing an exact term would cause the search
      // results to disappear, because unlike regex a Lunr `*` wildcard
      // tries to match at least one char. So searching "licens" would
      // turn up results for the english word "license" but searching the
      // whole word would result in an empty result set since it was
      // looking for "license_" with at least one character in the place
      // of the underscore. Initial search approach was as follows:
      //     this.result = window.lunrIndex.search('*' + query + '*')
      // To test manually:
      // - "183" -> has results
      // - "183 days" -> has results
      // - "如何" -> has results
      // - "如何申請" -> has results
      // For additional guidance on the query API see this issue: https://github.com/olivernn/lunr.js/issues/256

      var xs = [];

      if (shouldUseChinese) {
        dbg('zh: 中文搜尋 ->', query);
        xs = window.lunrIndex.query(function (q
        /* lunr.Query */
        ) {
          q.term(query, {
            usePipeline: true,
            boost: 100
          });
          q.term(query + '*', {
            usePipeline: false,
            boost: 10
          });
          q.term(query, {
            usePipeline: false,
            editDistance: 2,
            boost: 2
          });
          q.term(query);
        });
      } else {
        dbg('en: English search ->', query);
        xs = window.lunrIndex.search(query);
      }

      this.result = xs.map(function (result) {
        return window.lunrPages.find(function (page) {
          return page.href === result.ref;
        });
      }).slice(0, 10);

      if (this.result.length > 0) {
        this.has_results = true;
      } else {
        this.has_results = false;
      }

      return this.result;
    }
  };
  window.searcher = searcher;
  return searcher;
};

window.taSearchTrigger = function () {
  return {
    trigger: '',
    show: function show() {
      var event = new CustomEvent('ta-search-show', {
        detail: this.trigger
      });
      window.dispatchEvent(event);
    },
    init: function init(trigger) {
      var _this5 = this;

      this.trigger = trigger;
      window.addEventListener('ta-search-hide', function (event) {
        if (event.detail === _this5.trigger) {
          _this5.$el.focus();
        }
      });
    }
  };
};
"use strict";

window.taTags = function () {
  return {
    tags: {},
    active: [],
    // default: {
    //     language: 'en',
    //     supported: ['en', 'zh'],
    // },
    init: function init() {
      var content = this.$refs.content.childNodes;

      for (var index = 0; index < content.length; index++) {
        var tag = content[index].dataset.tag;
        this.active.push(tag);
        this.tags[tag] = true;
      }
    },
    toggle: function toggle(tag) {
      if (this.tags[tag] === true) {
        this.active.splice(this.active.indexOf(tag), 1);
      } else {
        this.active.push(tag);
      }

      this.tags[tag] = !this.tags[tag];
      this.checkFaqs();
    },
    checkFaqs: function checkFaqs() {
      var count = 0;

      for (var key in this.$store.filter.faqs) {
        if (this.$store.filter.faqs.hasOwnProperty(key)) {
          var active = false;

          for (var index = 0; index < this.active.length; index++) {
            var tag = this.active[index];

            if (this.$store.filter.faqs[key].tags.indexOf(tag) !== -1) {
              active = true;
              count++;
              break;
            }
          }

          this.$store.filter.faqs[key].active = active;
        }
      }

      this.$store.filter.empty = count > 0 ? false : true;
    }
  };
};
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

window.taTimezone = function () {
  return {
    show: false,
    time: 0,
    local_date: '',
    user_date: '',
    user_locale: '',
    breaks: [],
    morning: false,
    day: false,
    evening: false,
    night: false,
    options: {
      timezone: 'America/Los_Angeles',
      locale: 'en-US',
      start: '9',
      end: '23',
      breaks: 'sa,su'
    },
    init: function init() {
      var _this = this;

      this.user_locale = navigator.language || navigator.userLanguage; // checks if options are defined by data

      for (var _i = 0, _Object$entries = Object.entries(this.$el.dataset); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        if (typeof this.options[key] !== 'undefined') {
          if (isNaN(value)) {
            this.options[key] = value;
          } else {
            this.options[key] = parseInt(value);
          }
        }
      }

      var breaks = this.options.breaks.split(',');

      for (var index = 0; index < breaks.length; index++) {
        switch (breaks[index]) {
          case 'mo':
            this.breaks.push(1);
            break;

          case 'tu':
            this.breaks.push(2);
            break;

          case 'we':
            this.breaks.push(3);
            break;

          case 'th':
            this.breaks.push(4);
            break;

          case 'fr':
            this.breaks.push(5);
            break;

          case 'sa':
            this.breaks.push(6);
            break;

          default:
            this.breaks.push(0);
            break;
        }
      }

      this.checkDate();
      setInterval(function () {
        _this.checkDate();
      }, 1000);
    },
    checkDate: function checkDate() {
      var user_date = new Date();
      var local_date = new Date(user_date.toLocaleString('en-US', {
        timeZone: this.options.timezone
      }));
      this.time = user_date.getTime();
      this.user_date = user_date.toLocaleString(this.user_locale, {
        dateStyle: 'medium',
        timeStyle: 'short'
      });
      this.local_date = local_date.toLocaleString(this.user_locale, {
        dateStyle: 'medium'
      });
      this.local_time = local_date.toLocaleString(this.user_locale, {
        timeStyle: 'short'
      });
      var local_hours = local_date.getHours();
      this.morning = false;
      this.day = false;
      this.evening = false;
      this.night = false;

      if (local_hours > 6 && local_hours < 9) {
        this.morning = true;
      } else if (local_hours >= 9 && local_hours < 17) {
        this.day = true;
      } else if (local_hours >= 17 && local_hours < 20) {
        this.day = true;
      } else {
        this.night = true;
      }

      var local_date_start = new Date(user_date.toLocaleString('en-US', {
        timeZone: this.options.timezone
      }));
      var local_date_end = new Date(user_date.toLocaleString('en-US', {
        timeZone: this.options.timezone
      }));
      local_date_start.setHours(this.options.start, 0, 0, 0);
      local_date_end.setHours(this.options.end, 0, 0, 0);

      if (this.breaks.indexOf(local_date.getDay()) !== -1) {
        return;
      }

      if (local_date_start.getTime() < local_date.getTime() && local_date_end.getTime() > local_date.getTime()) {
        this.show = true;
        return;
      }

      this.show = false;
    }
  };
};
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

window.taToc = function () {
  return {
    initialized: false,
    folded: true,
    title: '',
    options: {
      folded: true,
      length: 100,
      threshold: 100,
      titleShow: '',
      titleHide: ''
    },
    init: function init(options) {
      var _this = this;

      if (typeof options !== 'undefined') {
        if (_typeof(options) !== 'object' || options instanceof Array) {
          console.warn('Options are in wrong type - should be object - options been used');
        }

        for (var _i = 0, _Object$entries = Object.entries(options); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          this.options[key] = value;
        }
      } // checks if options are defined by data


      for (var _i2 = 0, _Object$entries2 = Object.entries(this.$el.dataset); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            _key = _Object$entries2$_i[0],
            _value = _Object$entries2$_i[1];

        if (typeof this.options[_key] !== 'undefined') {
          if (isNaN(_value)) {
            this.options[_key] = _value;
          } else {
            this.options[_key] = parseInt(_value);
          }
        }
      }

      if (this.options.titleShow.length > 0) {
        this.title = this.options.titleShow;
        this.$watch('folded', function (value) {
          if (value === true) {
            _this.title = _this.options.titleHide;
            return;
          }

          _this.title = _this.options.titleShow;
        });
      }

      this.checkFolded();
      this.setSmoothScrolling();
    },
    toggle: function toggle() {
      this.folded = !this.folded;
    },
    checkFolded: function checkFolded() {
      this.folded = this.options.folded;

      if (this.options.length > this.options.threshold) {
        this.folded = false;
      }
    },
    setSmoothScrolling: function setSmoothScrolling() {
      var links = this.$el.querySelectorAll("a[href^='#']");

      var _iterator = _createForOfIteratorHelper(links),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var link = _step.value;
          link.addEventListener('click', function (e) {
            e.preventDefault();
            var href = e.target.getAttribute('href');
            href = "[id=\"".concat(href.substr(1), "\"]");
            var scrollNavHeight = document.documentElement.style.getPropertyValue('--navigationScroll');
            scrollNavHeight = parseInt(scrollNavHeight.substring(0, scrollNavHeight.indexOf('px')));

            if (scrollNavHeight < 40) {
              scrollNavHeight = 75;
            }

            var bodyRect = document.body.getBoundingClientRect();
            var elemRect = document.querySelector(href).getBoundingClientRect();
            var offsetTop = elemRect.top - bodyRect.top + scrollNavHeight - 20 - 40;
            scroll({
              top: parseInt(offsetTop),
              behavior: 'smooth'
            });
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  };
};
"use strict";

window.taWelcome = function () {
  return {
    show: false,
    language: 'en',
    available_languages: ['de', 'es', 'ar', 'fr', 'hi', 'it', 'ko', 'ms', 'pa', 'ru', 'th', 'tr', 'he', 'pt', 'ja', 'bn', 'id'],
    supported_languages: ['en', 'zh'],
    headline: '',
    description: '',
    languages: {
      en: "",
      zh: ""
    },
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

      var url = location.origin + '/welcome/' + language + '.json';
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (json) {
        if (typeof json.headline !== 'undefined' && typeof json.description !== 'undefined') {
          _this.headline = json.headline;
          _this.description = json.description;
          _this.languages.en = json.en;
          _this.languages.zh = json.zh;
          _this.show = true;
        }
      })["catch"](function (error) {
        console.warn('Unable to load welcome message for language: ' + language);
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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

window.taAccordion = function () {
  return {
    show: false,
    link: '',
    shortcut: false,
    clipboard: '',
    title: '',
    options: {
      shortcut: true,
      clipboard: false,
      titleShow: '',
      titleHide: ''
    },
    init: function init() {
      var _this = this;

      // checks if options are defined by data
      for (var _i = 0, _Object$entries = Object.entries(this.$el.dataset); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        if (typeof this.options[key] !== 'undefined') {
          this.options[key] = value;
        }
      }

      this.options.shortcut = String(this.options.shortcut).toLowerCase() === 'true';
      this.options.clipboard = String(this.options.clipboard).toLowerCase() === 'true';

      if (this.options.titleShow.length > 0) {
        this.title = this.options.titleShow;
        this.$watch('show', function (value) {
          if (value === true) {
            _this.title = _this.options.titleHide;
            return;
          }

          _this.title = _this.options.titleShow;
        });
      }

      if (this.options.shortcut === true) {
        this.$el.addEventListener('keydown', function (key) {
          // CTRL + d
          if (key.ctrlKey === true && key.keyCode === 68) {
            _this.shortcut = !_this.shortcut;
          }
        });
      }

      if (this.options.clipboard === true && typeof this.$clipboard === 'function') {
        this.$el.addEventListener('keydown', function (key) {
          // CTRL + c
          if (key.ctrlKey === true && key.keyCode === 67) {
            _this.$clipboard(_this.$el.innerText);
          }
        });
      }
    },
    toggle: function toggle() {
      this.show = !this.show;
    }
  };
};
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

window.taAlert = function () {
  return {
    show: false,
    options: {
      name: 'ta-alert',
      delay: 1500,
      timeout: 0,
      language: 'en',
      interval: 24
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

          this.options[key] = value;
        }
      } // checks if options are defined by data


      for (var _i2 = 0, _Object$entries2 = Object.entries(this.$el.dataset); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            _key = _Object$entries2$_i[0],
            _value = _Object$entries2$_i[1];

        if (typeof this.options[_key] !== 'undefined') {
          this.options[_key] = _value;
        }
      } // convert values to the right format


      this.options.interval = parseFloat(this.options.interval);
      this.options.delay = parseInt(this.options.delay);
      this.options.timeout = parseInt(this.options.timeout); // check if user clicked away
      // get last time user clicked

      var storage = this.getStorage();
      var date_now = new Date().getTime();
      var date_last = date_now;

      if (!isNaN(storage)) {
        date_last = parseInt(storage);
      } // if user clicked but in actual interval


      if (date_now < date_last + this.options.interval * 60 * 60 * 1000) {
        return;
      } // set timeout for delay to show alert


      setTimeout(function () {
        _this.show = true;
      }, this.options.delay); // if timeout is set alert will be gone after this amount of ms

      if (this.options.timeout > 0) {
        setTimeout(function () {
          _this.show = false;
        }, this.options.delay + this.options.timeout);
      }
    },
    hide: function hide() {
      this.show = false;
      this.setStorage(new Date().getTime());
    },
    setStorage: function setStorage(value) {
      var item = this.options.name + '-' + this.options.language;

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
    getStorage: function getStorage() {
      var item = this.options.name + '-' + this.options.language;

      try {
        return localStorage.getItem(item).replace(/(<([^>]+)>)/gi, '');
      } catch (e) {
        if (e.name == 'NS_ERROR_FILE_CORRUPTED') {
          alert(this.message);
        }

        return this.getCookie(item);
      }
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
      return itemValue ? itemValue[2].replace(/(<([^>]+)>)/gi, '') : null;
    }
  };
};
"use strict";

window.taToTop = function () {
  return {
    show: false,
    top: 0,
    init: function init() {
      var _this = this;

      var scroll = document.getElementById('scroll');

      if (scroll === null) {
        return false;
      }

      this.top = Math.round(scroll.getBoundingClientRect().top + window.scrollY);
      document.addEventListener('scroll', function () {
        var topY = window.scrollY;

        if (topY > _this.top) {
          _this.show = true;
        } else {
          _this.show = false;
        }
      });
    },
    scrollToTop: function scrollToTop() {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    }
  };
};
"use strict";

window.languageDetection.init();
window.highlight.replace();
window.linksTargetBlank.replace();
handleResize();
smoothScroll();