// window.addEventListener('scroll', handleParallaxScrolling)
// function handleParallaxScrolling() {
//   const test = document.getElementById('test')
//   test.style.top = (window.scrollY / 2) + 'px'
//   console.info('test', test.getBoundingClientRect().top);
//   console.info("scrolly", window.scrollY);
// }
"use strict";
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

      this.replaceInDocument(this.wrapper[index], /Taiwan Gold Card/g, '<span class="font-bold">Taiwan <span class="highlight">Gold Card</span></span>');
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
        var href = e.target.getAttribute('href'); // fix for leading numbers
        // if ( !isNaN(href.substring(1,2))  ) {
        //     href = '#\\3' + href.substr(1)
        // }

        href = "[id=\"".concat(href.substr(1), "\"]");
        var scrollNavHeight = document.documentElement.style.getPropertyValue('--navigationScroll');
        var offsetTop = document.querySelector(href).offsetTop + parseInt(scrollNavHeight.substring(0, scrollNavHeight.indexOf('px')));
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
"use strict";

window.taFilter = function () {
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
    data: {},
    "default": {},
    init: function init() {
      var content = this.$el.querySelectorAll('.member');

      for (var index = 0; index < content.length; index++) {
        this.elements.push(content[index]);
        this.play.push(true);
      }
    },
    toggle: function toggle(index) {
      var top = this.elements[index].offsetTop;
      var left = this.elements[index].offsetLeft;
      this.play[index] = !this.play[index]; // console.info(' this.play[index] ', this.elements[index].offsetTop);

      this.active = index;
      this.modal = true;
      this.data = {
        name: this.elements[index].dataset.name,
        image: '/img/' + this.elements[index].dataset.image,
        origin: this.elements[index].dataset.origin,
        local: this.elements[index].dataset.local,
        description: this.elements[index].dataset.description,
        style: "--left:".concat(left, "px;--top:").concat(top, "px")
      }; // if (this.play[index]) {
      //     // this.elements[index].style.setProperty('--state', 'paused');
      //     this.play[index] = 'paused';
      //     return true;
      // }
      // // this.elements[index].style.setProperty('--state', 'running');
      // this.play[index] = 'running';
    },
    closeModal: function closeModal() {
      this.modal = false;
      this.play[this.active] = true;
      this.active = -1;
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
    dropdown: {
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
      });
      var menu = this.$refs.menu;

      if (typeof menu !== 'undefined') {
        document.documentElement.style.setProperty('--navigationMenu', "".concat(menu.offsetHeight, "px"));
      }
    },
    toggleModal: function toggleModal() {
      this.modal = !this.modal;
    },
    toggleDropdown: function toggleDropdown(topic, event) {
      for (var property in this.dropdown) {
        if (property === topic) {
          this.dropdown[topic] = !this.dropdown[topic];
          continue;
        }

        this.dropdown[property] = false;
      }

      event.preventDefault();
    },
    hideDropdown: function hideDropdown() {
      for (var property in this.dropdown) {
        this.dropdown[property] = false;
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