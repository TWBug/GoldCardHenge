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

    for (var index = 0; index < this.wrapper.length; index++) {
      if (typeof this.wrapper[index] === 'undefined') {
        continue;
      }

      this.replaceInDocument(this.wrapper[index], /Taiwan Employment Gold Card/g, '<span class="font-semibold">Taiwan Employment<span class="highlight">Gold Card</span></span>');
      this.replaceInDocument(this.wrapper[index], /台灣就業金卡/g, '<span class="font-bold">台灣就業<span class="highlight">金卡</span></span>');
    }

    this.wrapper = this.wrapper[0]; // this.replaceInDocument(
    //     /Taiwan Gold Card/g,
    //     '<span class="font-bold text-black">Taiwan <span class="highlight">Gold Card</span></span>'
    // )
    // this.replaceInDocument(
    //     /Gold Card/g,
    //     '<span class="tinline-block bg-highlight text-black rounded-md px-2">Gold Card</span>'
    // )
    // this.replaceInDocument(
    //     /Gold-Card/g,
    //     '<span class="inline-block bg-highlight text-black rounded-md px-2">Gold Card</span>'
    // )
  },
  replaceInDocument: function replaceInDocument(wrapper, pattern, string) {
    ;
    [wrapper].concat(_toConsumableArray(wrapper.querySelectorAll('*:not(script):not(noscript):not(style)'))).forEach(function (_ref) {
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
// window.addEventListener('scroll', handleParallaxScrolling)
// function handleParallaxScrolling() {
//   const test = document.getElementById('test')
//   test.style.top = (window.scrollY / 2) + 'px'
//   console.info('test', test.getBoundingClientRect().top);
//   console.info("scrolly", window.scrollY);
// }
"use strict";
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
  var home_hero = 'calc(var(--vh) * 75)';

  if (window.innerWidth < 1024) {
    home_hero = 'calc(var(--vh) * 100)';
  } else {
    if (w_aspect > 1.64) {
      home_hero = 'calc(var(--vh) * 100)';
    } else if (w_aspect < 1.2) {
      home_hero = 'calc(var(--vh) * 50)';
    }
  }

  document.documentElement.style.setProperty('--homeHero', "".concat(home_hero));
  console.info('width x height: ', window.innerWidth + ' x ' + window.innerHeight); // view port height fix for mobile browsers

  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
}
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function smoothScroll() {
  var links = document.querySelectorAll(".copy a[href^='#']"); // const links = document.querySelectorAll("#tableofcontents a[href^='#'], .copy a[href^='#']")

  var _iterator = _createForOfIteratorHelper(links),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var link = _step.value;
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var href = e.target.getAttribute('href'); // fix for leading numbers
        // if ( !isNaN(href.substring(1,2))  ) {
        //     href = '#\\3' + href.substr(1)
        // }

        href = "[id=\"".concat(href.substr(1), "\"]");
        var scrollNavHeight = document.documentElement.style.getPropertyValue('--navigationScroll');
        var offsetTop = document.querySelector(href).offsetTop + parseInt(scrollNavHeight.substring(0, scrollNavHeight.indexOf('px')));
        scroll({
          top: offsetTop - 20,
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

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
          console.warn(error);
        });
      } else {
        fetch(url).then(function (response) {
          return response.json();
        }).then(function (json) {
          _this.index = json;
          _this.initialized = true;

          _this.resetResult();
        })["catch"](function (error) {
          console.warn(error);
        });
      }

      this.$watch('filter', function (value) {
        if (value.length === 0) {
          return _this.resetResult();
        }

        _this.findContent();
      });
    },
    resetFilter: function resetFilter() {
      this.filter = '';
      document.getElementById('filter').focus();
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

window.taMap = function () {
  return {
    elements: [],
    play: [],
    active: -1,
    modal: false,
    wrapper: {},
    data: {},
    "default": {},
    init: function init() {
      var content = this.$el.querySelectorAll('.member');

      for (var index = 0; index < content.length; index++) {
        this.elements.push(content[index]);
        this.play.push(true);
      }

      var wrapper = this.$el.querySelector('.wrapper');
      this.wrapper = {
        left: wrapper.offsetLeft,
        width: wrapper.innerWidth
      };
    },
    toggle: function toggle(index) {
      var top = this.elements[index].offsetTop;
      var left = this.elements[index].offsetLeft + this.wrapper.left;
      this.play[this.active] = true;
      this.play[index] = !this.play[index];
      this.active = index;
      this.modal = true;
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
    },
    closeModal: function closeModal() {
      this.modal = false;
      this.play[this.active] = true;

      for (var index = 0; index < this.play.length; index++) {
        this.play[index] = true;
      }

      this.active = -1;
    }
  };
};
"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.taNavigation = function () {
  var _ref;

  return _ref = {
    scroll: false,
    modal: false,
    search: false,
    fixed: false,
    checked_menu_height: false,
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
      var scroll_top = scroll.getBoundingClientRect().top + window.scrollY; // console.info('scroll_top', scroll_top);

      window.addEventListener('scroll', function () {
        // scroll
        // var position = document.documentElement.style.getPropertyValue('--navscroll')
        if (window.scrollY >= scroll_top) {
          _this.scroll = true;
        } else {
          _this.scroll = false;
        }
      }); // const menu = this.$refs.menu
      // if (typeof menu !== 'undefined') {
      //     document.documentElement.style.setProperty('--navigationMenu', `${menu.offsetHeight}px`);
      // }

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

      event.preventDefault();
    },
    toggleMenue: function toggleMenue(topic, event) {
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
    }
  }, _defineProperty(_ref, "hideDropdown", function hideDropdown() {
    for (var property in this.dropdown) {
      this.dropdown[property] = false;
    }
  }), _defineProperty(_ref, "hideMenue", function hideMenue() {
    for (var property in this.menue) {
      this.menue[property] = false;
    }
  }), _ref;
};
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

window.taSearch = function () {
  return {
    initialized: false,
    query: '',
    is_chinese_ui: false,
    has_chinese_characters: false,
    result: [],
    active: -1,
    has_results: false,
    init: function init() {
      var _this = this;

      var _console = console,
          assert = _console.assert;
      assert(window.lunr, 'Lunr.js not found. Search cannot be supported without Lunr.js.');
      this.is_chinese_ui = window.location.pathname.startsWith('/zh/');
      this.loadIndex();
      this.initLunr();
      this.$watch('query', function (value) {
        if (value.length === 0) {
          _this.reset();

          return;
        }

        _this.search(_this.query);
      });
    },
    reset: function reset() {
      this.result = [];
      this.has_results = false;
      this.query = '';
      this.active = -1;
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
    excerpt: function excerpt(string, length) {
      return string.slice(0, length) + '…';
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
      var _this2 = this;

      console.log('[ALPINEJS] Lunr index loading:', this.$el.dataset.file); // First retrieve the index file

      fetch(this.$el.dataset.file).then(function (x) {
        return x.json();
      }).then(function (index) {
        window.lunrPages = index; // Set up lunrjs by declaring the fields we use
        // Also provide their boost level for the ranking

        window.lunrIndex = window.lunr(function () {
          if (window.location.pathname.startsWith('/zh/')) {
            console.log('[ALPINEJS] 中文頁面，開啟Lunr中文支援');
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
        _this2.initialized = true;
      })["catch"](function (err) {
        console.error('Error getting Hugo index file:', err.message);
      });
    },
    search: function search(query) {
      // Find the item in our index corresponding to the lunr one to have more info
      // Lunr result:
      //  {ref: "/section/page1", score: 0.2725657778206127}
      // Our result:
      //  {title:"Page1", href:"/section/page1", ...}
      this.result = window.lunrIndex.search(query).map(function (result) {
        return window.lunrPages.find(function (page) {
          return page.href === result.ref;
        });
      });
      this.result = this.result.slice(0, 8);

      if (this.result.length > 0) {
        this.has_results = true;
      } else {
        this.has_results = false;
      }
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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.taToc = function () {
  return {
    initialized: false,
    folded: true,
    options: {
      folded: true,
      length: 100,
      threshold: 100
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
            var scrollNavHeightInt = parseInt(scrollNavHeight.substring(0, scrollNavHeight.indexOf('px')));
            var offsetTop = document.querySelector(href).offsetTop + scrollNavHeightInt - Math.round(scrollNavHeightInt * 0.2);
            scroll({
              top: offsetTop,
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

window.taAccordion = function () {
  return {
    show: false,
    "default": {},
    init: function init(tags) {
      if (typeof this.$store === 'undefined') {
        return false;
      }

      if (typeof this.$store.filter === 'undefined') {
        return false;
      }

      var id = this.$el.id;
      this.$store.filter.faqs[id] = {
        active: true,
        tags: tags
      };
    },
    toggle: function toggle() {
      this.show = !this.show;
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

var TxtRotate = function TxtRotate(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = this.txt;
  var that = this;
  var delta = 100 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typing");

  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");

    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
};
"use strict";

Spruce.store('filter', {
  faqs: {},
  empty: false,
  log: function log() {
    console.info('faqs', this.faqs);
  }
}, false);
window.languageDetection.init();
window.highlight.replace();
window.linksTargetBlank.replace();
window.addEventListener('resize', handleResize);
handleResize();
smoothScroll();