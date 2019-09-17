(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-calendar-module"],{

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* sweetalert2 v7.22.0
* Released under the MIT License.
*/
(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var consolePrefix = 'SweetAlert2:';

/**
 * Filter the unique values into a new array
 * @param arr
 */
var uniqueArray = function uniqueArray(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
};

/**
 * Converts `inputOptions` into an array of `[value, label]`s
 * @param inputOptions
 */
var formatInputOptions = function formatInputOptions(inputOptions) {
  var result = [];
  if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
    inputOptions.forEach(function (value, key) {
      result.push([key, value]);
    });
  } else {
    Object.keys(inputOptions).forEach(function (key) {
      result.push([key, inputOptions[key]]);
    });
  }
  return result;
};

/**
 * Standardise console warnings
 * @param message
 */
var warn = function warn(message) {
  console.warn(consolePrefix + ' ' + message);
};

/**
 * Standardise console errors
 * @param message
 */
var error = function error(message) {
  console.error(consolePrefix + ' ' + message);
};

/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */
var previousWarnOnceMessages = [];

/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */
var warnOnce = function warnOnce(message) {
  if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};

/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */
var callIfFunction = function callIfFunction(arg) {
  return typeof arg === 'function' ? arg() : arg;
};

var isThenable = function isThenable(arg) {
  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && typeof arg.then === 'function';
};

var DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'overlay',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
});

var version = "7.22.0";

var argsToParams = function argsToParams(args) {
  var params = {};
  switch (_typeof(args[0])) {
    case 'string':
      ['title', 'html', 'type'].forEach(function (name, index) {
        switch (_typeof(args[index])) {
          case 'string':
            params[name] = args[index];
            break;
          case 'undefined':
            break;
          default:
            error('Unexpected type of ' + name + '! Expected "string", got ' + _typeof(args[index]));
        }
      });
      break;

    case 'object':
      _extends(params, args[0]);
      break;

    default:
      error('Unexpected type of argument! Expected "string" or "object", got ' + _typeof(args[0]));
      return false;
  }
  return params;
};

/**
 * Adapt a legacy inputValidator for use with expectRejections=false
 */
var adaptInputValidator = function adaptInputValidator(legacyValidator) {
  return function adaptedInputValidator(inputValue, extraParams) {
    return legacyValidator.call(this, inputValue, extraParams).then(function () {
      return undefined;
    }, function (validationError) {
      return validationError;
    });
  };
};

var swalPrefix = 'swal2-';

var prefix = function prefix(items) {
  var result = {};
  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }
  return result;
};

var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'header', 'content', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-text', 'image', 'input', 'has-input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea', 'inputerror', 'validationerror', 'progresssteps', 'activeprogressstep', 'progresscircle', 'progressline', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen']);

var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

// Remember state in cases where opening and handling a modal will fiddle with it.
var states = {
  previousBodyPadding: null
};

var hasClass = function hasClass(elem, className) {
  if (elem.classList) {
    return elem.classList.contains(className);
  }
  return false;
};

var focusInput = function focusInput(input) {
  input.focus();

  // place cursor at end of text in text input
  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915/1331425
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};

var addOrRemoveClass = function addOrRemoveClass(target, classList, add) {
  if (!target || !classList) {
    return;
  }
  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean);
  }
  classList.forEach(function (className) {
    if (target.forEach) {
      target.forEach(function (elem) {
        add ? elem.classList.add(className) : elem.classList.remove(className);
      });
    } else {
      add ? target.classList.add(className) : target.classList.remove(className);
    }
  });
};

var addClass = function addClass(target, classList) {
  addOrRemoveClass(target, classList, true);
};

var removeClass = function removeClass(target, classList) {
  addOrRemoveClass(target, classList, false);
};

var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};

var show = function show(elem) {
  elem.style.opacity = '';
  elem.style.display = elem.id === swalClasses.content ? 'block' : 'flex';
};

var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};

var empty = function empty(elem) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
};

// borrowed from jquery $(elem).is(':visible') implementation
var isVisible = function isVisible(elem) {
  return elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
};

var removeStyleProperty = function removeStyleProperty(elem, property) {
  if (elem.style.removeProperty) {
    elem.style.removeProperty(property);
  } else {
    elem.style.removeAttribute(property);
  }
};

var getContainer = function getContainer() {
  return document.body.querySelector('.' + swalClasses.container);
};

var elementByClass = function elementByClass(className) {
  var container = getContainer();
  return container ? container.querySelector('.' + className) : null;
};

var getPopup = function getPopup() {
  return elementByClass(swalClasses.popup);
};

var getIcons = function getIcons() {
  var popup = getPopup();
  return popup.querySelectorAll('.' + swalClasses.icon);
};

var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};

var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};

var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};

var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses.progresssteps);
};

var getValidationError = function getValidationError() {
  return elementByClass(swalClasses.validationerror);
};

var getConfirmButton = function getConfirmButton() {
  return elementByClass(swalClasses.confirm);
};

var getCancelButton = function getCancelButton() {
  return elementByClass(swalClasses.cancel);
};

var getButtonsWrapper = function getButtonsWrapper() {
  warnOnce('swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead');
  return elementByClass(swalClasses.actions);
};

var getActions = function getActions() {
  return elementByClass(swalClasses.actions);
};

var getFooter = function getFooter() {
  return elementByClass(swalClasses.footer);
};

var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
};

var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = Array.prototype.slice.call(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'))
  // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  });

  // https://github.com/jkup/focusable/blob/master/index.js
  var otherFocusableElements = Array.prototype.slice.call(getPopup().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]'));

  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements));
};

var isModal = function isModal() {
  return !document.body.classList.contains(swalClasses['toast-shown']);
};

var isToast = function isToast() {
  return document.body.classList.contains(swalClasses['toast-shown']);
};

var isLoading = function isLoading() {
  return getPopup().hasAttribute('data-loading');
};

// Detect Node env
var isNodeEnv = function isNodeEnv() {
  return typeof window === 'undefined' || typeof document === 'undefined';
};

var sweetHTML = ('\n <div aria-labelledby="' + swalClasses.title + '" aria-describedby="' + swalClasses.content + '" class="' + swalClasses.popup + '" tabindex="-1">\n   <div class="' + swalClasses.header + '">\n     <ul class="' + swalClasses.progresssteps + '"></ul>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.error + '">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.question + '">\n       <span class="' + swalClasses['icon-text'] + '">?</span>\n      </div>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.warning + '">\n       <span class="' + swalClasses['icon-text'] + '">!</span>\n      </div>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.info + '">\n       <span class="' + swalClasses['icon-text'] + '">i</span>\n      </div>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.success + '">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="' + swalClasses.image + '" />\n     <h2 class="' + swalClasses.title + '" id="' + swalClasses.title + '"></h2>\n     <button type="button" class="' + swalClasses.close + '">\xD7</button>\n   </div>\n   <div class="' + swalClasses.content + '">\n     <div id="' + swalClasses.content + '"></div>\n     <input class="' + swalClasses.input + '" />\n     <input type="file" class="' + swalClasses.file + '" />\n     <div class="' + swalClasses.range + '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="' + swalClasses.select + '"></select>\n     <div class="' + swalClasses.radio + '"></div>\n     <label for="' + swalClasses.checkbox + '" class="' + swalClasses.checkbox + '">\n       <input type="checkbox" />\n     </label>\n     <textarea class="' + swalClasses.textarea + '"></textarea>\n     <div class="' + swalClasses.validationerror + '" id="' + swalClasses.validationerror + '"></div>\n   </div>\n   <div class="' + swalClasses.actions + '">\n     <button type="button" class="' + swalClasses.confirm + '">OK</button>\n     <button type="button" class="' + swalClasses.cancel + '">Cancel</button>\n   </div>\n   <div class="' + swalClasses.footer + '">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, '');

/*
 * Add modal + backdrop to DOM
 */
var init = function init(params) {
  // Clean up the old popup if it exists
  var c = getContainer();
  if (c) {
    c.parentNode.removeChild(c);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['has-input'], swalClasses['toast-shown']]);
  }

  if (isNodeEnv()) {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;

  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  targetElement.appendChild(container);

  var popup = getPopup();
  var content = getContent();
  var input = getChildByClass(content, swalClasses.input);
  var file = getChildByClass(content, swalClasses.file);
  var range = content.querySelector('.' + swalClasses.range + ' input');
  var rangeOutput = content.querySelector('.' + swalClasses.range + ' output');
  var select = getChildByClass(content, swalClasses.select);
  var checkbox = content.querySelector('.' + swalClasses.checkbox + ' input');
  var textarea = getChildByClass(content, swalClasses.textarea);

  // a11y
  popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true');
  }

  var oldInputVal = void 0; // IE11 workaround, see #1109 for details
  var resetValidationError = function resetValidationError(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationError();
    }
    oldInputVal = e.target.value;
  };

  input.oninput = resetValidationError;
  file.onchange = resetValidationError;
  select.onchange = resetValidationError;
  checkbox.onchange = resetValidationError;
  textarea.oninput = resetValidationError;

  range.oninput = function (e) {
    resetValidationError(e);
    rangeOutput.value = range.value;
  };

  range.onchange = function (e) {
    resetValidationError(e);
    range.nextSibling.value = range.value;
  };

  return popup;
};

var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
  if (!param) {
    return hide(target);
  }

  if ((typeof param === 'undefined' ? 'undefined' : _typeof(param)) === 'object') {
    target.innerHTML = '';
    if (0 in param) {
      for (var i = 0; i in param; i++) {
        target.appendChild(param[i].cloneNode(true));
      }
    } else {
      target.appendChild(param.cloneNode(true));
    }
  } else if (param) {
    target.innerHTML = param;
  } else {}
  show(target);
};

var animationEndEvent = function () {
  // Prevent run in Node env
  if (isNodeEnv()) {
    return false;
  }

  var testEl = document.createElement('div');
  var transEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd oanimationend',
    'animation': 'animationend'
  };
  for (var i in transEndEventNames) {
    if (transEndEventNames.hasOwnProperty(i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
var measureScrollbar = function measureScrollbar() {
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
  if (supportsTouch) {
    return 0;
  }
  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  }
  // if the body has overflow
  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    document.body.style.paddingRight = states.previousBodyPadding + measureScrollbar() + 'px';
  }
};

var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = states.previousBodyPadding;
    states.previousBodyPadding = null;
  }
};

// Fix iOS scrolling http://stackoverflow.com/q/39626302/1331425
var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = offset * -1 + 'px';
    addClass(document.body, swalClasses.iosfix);
  }
};

var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

var globalState = {};

// Restore previous active (focused) element
var restoreActiveElement = function restoreActiveElement() {
  if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
    var previousActiveElement = globalState.previousActiveElement;
    globalState.previousActiveElement = null;
    var x = window.scrollX;
    var y = window.scrollY;
    setTimeout(function () {
      previousActiveElement.focus && previousActiveElement.focus();
    }, 100); // issues/900
    if (typeof x !== 'undefined' && typeof y !== 'undefined') {
      // IE doesn't have scrollX/scrollY support
      window.scrollTo(x, y);
    }
  }
};

/*
 * Global function to close sweetAlert
 */
var close = function close(onClose, onAfterClose) {
  var container = getContainer();
  var popup = getPopup();
  if (!popup) {
    return;
  }

  if (onClose !== null && typeof onClose === 'function') {
    onClose(popup);
  }

  removeClass(popup, swalClasses.show);
  addClass(popup, swalClasses.hide);

  var removePopupAndResetState = function removePopupAndResetState() {
    if (!isToast()) {
      restoreActiveElement();
      window.removeEventListener('keydown', globalState.keydownHandler, { capture: true });
      globalState.keydownHandlerAdded = false;
    }

    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['has-input'], swalClasses['toast-shown']]);

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
    }

    if (onAfterClose !== null && typeof onAfterClose === 'function') {
      setTimeout(function () {
        onAfterClose();
      });
    }
  };

  // If animation is supported, animate
  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);
      if (hasClass(popup, swalClasses.hide)) {
        removePopupAndResetState();
      }
    });
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState();
  }
};

/*
 * Global function to determine if swal2 popup is shown
 */
var isVisible$1 = function isVisible() {
  return !!getPopup();
};

/*
 * Global function to click 'Confirm' button
 */
var clickConfirm = function clickConfirm() {
  return getConfirmButton().click();
};

/*
 * Global function to click 'Cancel' button
 */
var clickCancel = function clickCancel() {
  return getCancelButton().click();
};

function fire() {
  var Swal = this;

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Swal, [null].concat(args)))();
}

/**
 * Extends a Swal class making it able to be instantiated without the `new` keyword (and thus without `Swal.fire`)
 * @param ParentSwal
 * @returns {NoNewKeywordSwal}
 */
function withNoNewKeyword(ParentSwal) {
  var NoNewKeywordSwal = function NoNewKeywordSwal() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!(this instanceof NoNewKeywordSwal)) {
      return new (Function.prototype.bind.apply(NoNewKeywordSwal, [null].concat(args)))();
    }
    Object.getPrototypeOf(NoNewKeywordSwal).apply(this, args);
  };
  NoNewKeywordSwal.prototype = _extends(Object.create(ParentSwal.prototype), { constructor: NoNewKeywordSwal });

  if (typeof Object.setPrototypeOf === 'function') {
    Object.setPrototypeOf(NoNewKeywordSwal, ParentSwal);
  } else {
    // Android 4.4
    // eslint-disable-next-line
    NoNewKeywordSwal.__proto__ = ParentSwal;
  }
  return NoNewKeywordSwal;
}

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  type: null,
  toast: false,
  customClass: '',
  target: 'body',
  backdrop: true,
  animation: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: null,
  confirmButtonClass: null,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: null,
  cancelButtonClass: null,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: null,
  timer: null,
  width: null,
  padding: null,
  background: null,
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: null,
  inputAttributes: {},
  inputValidator: null,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: null,
  onBeforeOpen: null,
  onAfterClose: null,
  onOpen: null,
  onClose: null,
  useRejections: false,
  expectRejections: false
};

var deprecatedParams = ['useRejections', 'expectRejections'];

/**
 * Is valid parameter
 * @param {String} paramName
 */
var isValidParameter = function isValidParameter(paramName) {
  return defaultParams.hasOwnProperty(paramName) || paramName === 'extraParams';
};

/**
 * Is deprecated parameter
 * @param {String} paramName
 */
var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
  return deprecatedParams.indexOf(paramName) !== -1;
};

/**
 * Show relevant warnings for given params
 *
 * @param params
 */
var showWarningsForParams = function showWarningsForParams(params) {
  for (var param in params) {
    if (!isValidParameter(param)) {
      warn('Unknown parameter "' + param + '"');
    }
    if (isDeprecatedParameter(param)) {
      warnOnce('The parameter "' + param + '" is deprecated and will be removed in the next major release.');
    }
  }
};

var deprecationWarning = '"setDefaults" & "resetDefaults" methods are deprecated in favor of "mixin" method and will be removed in the next major release. For new projects, use "mixin". For past projects already using "setDefaults", support will be provided through an additional package.';
var defaults$1 = {};

function withGlobalDefaults(ParentSwal) {
  var SwalWithGlobalDefaults = function (_ParentSwal) {
    inherits(SwalWithGlobalDefaults, _ParentSwal);

    function SwalWithGlobalDefaults() {
      classCallCheck(this, SwalWithGlobalDefaults);
      return possibleConstructorReturn(this, (SwalWithGlobalDefaults.__proto__ || Object.getPrototypeOf(SwalWithGlobalDefaults)).apply(this, arguments));
    }

    createClass(SwalWithGlobalDefaults, [{
      key: '_main',
      value: function _main(params) {
        return get(SwalWithGlobalDefaults.prototype.__proto__ || Object.getPrototypeOf(SwalWithGlobalDefaults.prototype), '_main', this).call(this, _extends({}, defaults$1, params));
      }
    }], [{
      key: 'setDefaults',
      value: function setDefaults(params) {
        warnOnce(deprecationWarning);
        if (!params || (typeof params === 'undefined' ? 'undefined' : _typeof(params)) !== 'object') {
          throw new TypeError('SweetAlert2: The argument for setDefaults() is required and has to be a object');
        }
        showWarningsForParams(params);
        // assign valid params from `params` to `defaults`
        Object.keys(params).forEach(function (param) {
          if (ParentSwal.isValidParameter(param)) {
            defaults$1[param] = params[param];
          }
        });
      }
    }, {
      key: 'resetDefaults',
      value: function resetDefaults() {
        warnOnce(deprecationWarning);
        defaults$1 = {};
      }
    }]);
    return SwalWithGlobalDefaults;
  }(ParentSwal);

  // Set default params if `window._swalDefaults` is an object


  if (typeof window !== 'undefined' && _typeof(window._swalDefaults) === 'object') {
    SwalWithGlobalDefaults.setDefaults(window._swalDefaults);
  }

  return SwalWithGlobalDefaults;
}

/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */
function mixin(mixinParams) {
  var Swal = this;
  return withNoNewKeyword(function (_Swal) {
    inherits(MixinSwal, _Swal);

    function MixinSwal() {
      classCallCheck(this, MixinSwal);
      return possibleConstructorReturn(this, (MixinSwal.__proto__ || Object.getPrototypeOf(MixinSwal)).apply(this, arguments));
    }

    createClass(MixinSwal, [{
      key: '_main',
      value: function _main(params) {
        return get(MixinSwal.prototype.__proto__ || Object.getPrototypeOf(MixinSwal.prototype), '_main', this).call(this, _extends({}, mixinParams, params));
      }
    }]);
    return MixinSwal;
  }(Swal));
}

// private global state for the queue feature
var currentSteps = [];

/*
 * Global function for chaining sweetAlert popups
 */
var queue = function queue(steps) {
  var swal = this;
  currentSteps = steps;
  var resetQueue = function resetQueue() {
    currentSteps = [];
    document.body.removeAttribute('data-swal2-queue-step');
  };
  var queueResult = [];
  return new Promise(function (resolve, reject) {
    (function step(i, callback) {
      if (i < currentSteps.length) {
        document.body.setAttribute('data-swal2-queue-step', i);

        swal(currentSteps[i]).then(function (result) {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value);
            step(i + 1, callback);
          } else {
            resetQueue();
            resolve({ dismiss: result.dismiss });
          }
        });
      } else {
        resetQueue();
        resolve({ value: queueResult });
      }
    })(0);
  });
};

/*
 * Global function for getting the index of current popup in queue
 */
var getQueueStep = function getQueueStep() {
  return document.body.getAttribute('data-swal2-queue-step');
};

/*
 * Global function for inserting a popup to the queue
 */
var insertQueueStep = function insertQueueStep(step, index) {
  if (index && index < currentSteps.length) {
    return currentSteps.splice(index, 0, step);
  }
  return currentSteps.push(step);
};

/*
 * Global function for deleting a popup from the queue
 */
var deleteQueueStep = function deleteQueueStep(index) {
  if (typeof currentSteps[index] !== 'undefined') {
    currentSteps.splice(index, 1);
  }
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
var showLoading = function showLoading() {
  var popup = getPopup();
  if (!popup) {
    Swal('');
  }
  popup = getPopup();
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();

  show(actions);
  show(confirmButton);
  addClass([popup, actions], swalClasses.loading);
  confirmButton.disabled = true;
  cancelButton.disabled = true;

  popup.setAttribute('data-loading', true);
  popup.setAttribute('aria-busy', true);
  popup.focus();
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
var getTimerLeft = function getTimerLeft() {
  return globalState.timeout && globalState.timeout.getTimerLeft();
};



var staticMethods = Object.freeze({
	isValidParameter: isValidParameter,
	isDeprecatedParameter: isDeprecatedParameter,
	argsToParams: argsToParams,
	adaptInputValidator: adaptInputValidator,
	close: close,
	closePopup: close,
	closeModal: close,
	closeToast: close,
	isVisible: isVisible$1,
	clickConfirm: clickConfirm,
	clickCancel: clickCancel,
	getPopup: getPopup,
	getTitle: getTitle,
	getContent: getContent,
	getImage: getImage,
	getButtonsWrapper: getButtonsWrapper,
	getActions: getActions,
	getConfirmButton: getConfirmButton,
	getCancelButton: getCancelButton,
	getFooter: getFooter,
	isLoading: isLoading,
	fire: fire,
	mixin: mixin,
	queue: queue,
	getQueueStep: getQueueStep,
	insertQueueStep: insertQueueStep,
	deleteQueueStep: deleteQueueStep,
	showLoading: showLoading,
	enableLoading: showLoading,
	getTimerLeft: getTimerLeft
});

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */

// WeakMap polyfill, needed for Android 4.4
// Related issue: https://github.com/sweetalert2/sweetalert2/issues/1071
if (typeof window !== 'undefined' && typeof window.WeakMap !== 'function') {
  // https://github.com/Riim/symbol-polyfill/blob/master/index.js
  var idCounter = 0;
  window.Symbol = function _Symbol(key) {
    return '__' + key + '_' + Math.floor(Math.random() * 1e9) + '_' + ++idCounter + '__';
  };
  Symbol.iterator = Symbol('Symbol.iterator');

  // http://webreflection.blogspot.fi/2015/04/a-weakmap-polyfill-in-20-lines-of-code.html
  window.WeakMap = function (s, dP, hOP) {
    function WeakMap() {
      dP(this, s, { value: Symbol('WeakMap') });
    }
    WeakMap.prototype = {
      'delete': function del(o) {
        delete o[this[s]];
      },
      get: function get(o) {
        return o[this[s]];
      },
      has: function has(o) {
        return hOP.call(o, this[s]);
      },
      set: function set(o, v) {
        dP(o, this[s], { configurable: true, value: v });
      }
    };
    return WeakMap;
  }(Symbol('WeakMap'), Object.defineProperty, {}.hasOwnProperty);
}

var privateProps = {
  promise: new WeakMap(),
  innerParams: new WeakMap(),
  domCache: new WeakMap()
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
function hideLoading() {
  var innerParams = privateProps.innerParams.get(this);
  var domCache = privateProps.domCache.get(this);
  if (!innerParams.showConfirmButton) {
    hide(domCache.confirmButton);
    if (!innerParams.showCancelButton) {
      hide(domCache.actions);
    }
  }
  removeClass([domCache.popup, domCache.actions], swalClasses.loading);
  domCache.popup.removeAttribute('aria-busy');
  domCache.popup.removeAttribute('data-loading');
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}

// Get input element by specified type or, if type isn't specified, by params.input
function getInput(inputType) {
  var innerParams = privateProps.innerParams.get(this);
  var domCache = privateProps.domCache.get(this);
  inputType = inputType || innerParams.input;
  if (!inputType) {
    return null;
  }
  switch (inputType) {
    case 'select':
    case 'textarea':
    case 'file':
      return getChildByClass(domCache.content, swalClasses[inputType]);
    case 'checkbox':
      return domCache.popup.querySelector('.' + swalClasses.checkbox + ' input');
    case 'radio':
      return domCache.popup.querySelector('.' + swalClasses.radio + ' input:checked') || domCache.popup.querySelector('.' + swalClasses.radio + ' input:first-child');
    case 'range':
      return domCache.popup.querySelector('.' + swalClasses.range + ' input');
    default:
      return getChildByClass(domCache.content, swalClasses.input);
  }
}

function enableButtons() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}

function disableButtons() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = true;
  domCache.cancelButton.disabled = true;
}

function enableConfirmButton() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = false;
}

function disableConfirmButton() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = true;
}

function enableInput() {
  var input = this.getInput();
  if (!input) {
    return false;
  }
  if (input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');
    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = false;
    }
  } else {
    input.disabled = false;
  }
}

function disableInput() {
  var input = this.getInput();
  if (!input) {
    return false;
  }
  if (input && input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');
    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = true;
    }
  } else {
    input.disabled = true;
  }
}

// Show block with validation error
function showValidationError(error) {
  var domCache = privateProps.domCache.get(this);
  domCache.validationError.innerHTML = error;
  var popupComputedStyle = window.getComputedStyle(domCache.popup);
  domCache.validationError.style.marginLeft = '-' + popupComputedStyle.getPropertyValue('padding-left');
  domCache.validationError.style.marginRight = '-' + popupComputedStyle.getPropertyValue('padding-right');
  show(domCache.validationError);

  var input = this.getInput();
  if (input) {
    input.setAttribute('aria-invalid', true);
    input.setAttribute('aria-describedBy', swalClasses.validationerror);
    focusInput(input);
    addClass(input, swalClasses.inputerror);
  }
}

// Hide block with validation error
function resetValidationError() {
  var domCache = privateProps.domCache.get(this);
  if (domCache.validationError) {
    hide(domCache.validationError);
  }

  var input = this.getInput();
  if (input) {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedBy');
    removeClass(input, swalClasses.inputerror);
  }
}

var Timer = function Timer(callback, delay) {
  classCallCheck(this, Timer);

  var id, started, running;
  var remaining = delay;
  this.start = function () {
    running = true;
    started = new Date();
    id = setTimeout(callback, remaining);
  };
  this.stop = function () {
    running = false;
    clearTimeout(id);
    remaining -= new Date() - started;
  };
  this.getTimerLeft = function () {
    if (running) {
      this.stop();
      this.start();
    }
    return remaining;
  };
  this.getStateRunning = function () {
    return running;
  };
  this.start();
};

var defaultInputValidators = {
  email: function email(string, extraParams) {
    return (/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.reject(extraParams && extraParams.validationMessage ? extraParams.validationMessage : 'Invalid email address')
    );
  },
  url: function url(string, extraParams) {
    // taken from https://stackoverflow.com/a/3809435/1331425
    return (/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(string) ? Promise.resolve() : Promise.reject(extraParams && extraParams.validationMessage ? extraParams.validationMessage : 'Invalid URL')
    );
  }
};

/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */
function setParameters(params) {
  // Use default `inputValidator` for supported input types if not provided
  if (!params.inputValidator) {
    Object.keys(defaultInputValidators).forEach(function (key) {
      if (params.input === key) {
        params.inputValidator = params.expectRejections ? defaultInputValidators[key] : Swal.adaptInputValidator(defaultInputValidators[key]);
      }
    });
  }

  // Determine if the custom target element is valid
  if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  }

  var popup = void 0;
  var oldPopup = getPopup();
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  // If the model target has changed, refresh the popup
  if (oldPopup && targetElement && oldPopup.parentNode !== targetElement.parentNode) {
    popup = init(params);
  } else {
    popup = oldPopup || init(params);
  }

  // Set popup width
  if (params.width) {
    popup.style.width = typeof params.width === 'number' ? params.width + 'px' : params.width;
  }

  // Set popup padding
  if (params.padding) {
    popup.style.padding = typeof params.padding === 'number' ? params.padding + 'px' : params.padding;
  }

  // Set popup background
  if (params.background) {
    popup.style.background = params.background;
  }
  var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
  var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor;
  }

  var container = getContainer();
  var title = getTitle();
  var content = getContent().querySelector('#' + swalClasses.content);
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();
  var closeButton = getCloseButton();
  var footer = getFooter();

  // Title
  if (params.titleText) {
    title.innerText = params.titleText;
  } else if (params.title) {
    title.innerHTML = params.title.split('\n').join('<br />');
  }

  if (typeof params.backdrop === 'string') {
    getContainer().style.background = params.backdrop;
  } else if (!params.backdrop) {
    addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
  }

  // Content as HTML
  if (params.html) {
    parseHtmlToContainer(params.html, content);

    // Content as plain text
  } else if (params.text) {
    content.textContent = params.text;
    show(content);
  } else {
    hide(content);
  }

  // Position
  if (params.position in swalClasses) {
    addClass(container, swalClasses[params.position]);
  } else {
    warn('The "position" parameter is not valid, defaulting to "center"');
    addClass(container, swalClasses.center);
  }

  // Grow
  if (params.grow && typeof params.grow === 'string') {
    var growClass = 'grow-' + params.grow;
    if (growClass in swalClasses) {
      addClass(container, swalClasses[growClass]);
    }
  }

  // Animation
  if (typeof params.animation === 'function') {
    params.animation = params.animation.call();
  }

  // Close button
  if (params.showCloseButton) {
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
    show(closeButton);
  } else {
    hide(closeButton);
  }

  // Default Class
  popup.className = swalClasses.popup;
  if (params.toast) {
    addClass([document.documentElement, document.body], swalClasses['toast-shown']);
    addClass(popup, swalClasses.toast);
  } else {
    addClass(popup, swalClasses.modal);
  }

  // Custom Class
  if (params.customClass) {
    addClass(popup, params.customClass);
  }

  // Progress steps
  var progressStepsContainer = getProgressSteps();
  var currentProgressStep = parseInt(params.currentProgressStep === null ? Swal.getQueueStep() : params.currentProgressStep, 10);
  if (params.progressSteps && params.progressSteps.length) {
    show(progressStepsContainer);
    empty(progressStepsContainer);
    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    params.progressSteps.forEach(function (step, index) {
      var circle = document.createElement('li');
      addClass(circle, swalClasses.progresscircle);
      circle.innerHTML = step;
      if (index === currentProgressStep) {
        addClass(circle, swalClasses.activeprogressstep);
      }
      progressStepsContainer.appendChild(circle);
      if (index !== params.progressSteps.length - 1) {
        var line = document.createElement('li');
        addClass(line, swalClasses.progressline);
        if (params.progressStepsDistance) {
          line.style.width = params.progressStepsDistance;
        }
        progressStepsContainer.appendChild(line);
      }
    });
  } else {
    hide(progressStepsContainer);
  }

  // Icon
  var icons = getIcons();
  for (var _i = 0; _i < icons.length; _i++) {
    hide(icons[_i]);
  }
  if (params.type) {
    var validType = false;
    for (var iconType in iconTypes) {
      if (params.type === iconType) {
        validType = true;
        break;
      }
    }
    if (!validType) {
      error('Unknown alert type: ' + params.type);
      return false;
    }
    var icon = popup.querySelector('.' + swalClasses.icon + '.' + iconTypes[params.type]);
    show(icon);

    // Animate icon
    if (params.animation) {
      addClass(icon, 'swal2-animate-' + params.type + '-icon');
    }
  }

  // Custom image
  var image = getImage();
  if (params.imageUrl) {
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt);
    show(image);

    if (params.imageWidth) {
      image.setAttribute('width', params.imageWidth);
    } else {
      image.removeAttribute('width');
    }

    if (params.imageHeight) {
      image.setAttribute('height', params.imageHeight);
    } else {
      image.removeAttribute('height');
    }

    image.className = swalClasses.image;
    if (params.imageClass) {
      addClass(image, params.imageClass);
    }
  } else {
    hide(image);
  }

  // Cancel button
  if (params.showCancelButton) {
    cancelButton.style.display = 'inline-block';
  } else {
    hide(cancelButton);
  }

  // Confirm button
  if (params.showConfirmButton) {
    removeStyleProperty(confirmButton, 'display');
  } else {
    hide(confirmButton);
  }

  // Actions (buttons) wrapper
  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(actions);
  } else {
    show(actions);
  }

  // Edit text on confirm and cancel buttons
  confirmButton.innerHTML = params.confirmButtonText;
  cancelButton.innerHTML = params.cancelButtonText;

  // ARIA labels for confirm and cancel buttons
  confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel);
  cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel);

  // Add buttons custom classes
  confirmButton.className = swalClasses.confirm;
  addClass(confirmButton, params.confirmButtonClass);
  cancelButton.className = swalClasses.cancel;
  addClass(cancelButton, params.cancelButtonClass);

  // Buttons styling
  if (params.buttonsStyling) {
    addClass([confirmButton, cancelButton], swalClasses.styled);

    // Buttons background colors
    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }
    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    }

    // Loading state
    var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
    confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
    confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
  } else {
    removeClass([confirmButton, cancelButton], swalClasses.styled);

    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }

  // Footer
  parseHtmlToContainer(params.footer, footer);

  // CSS animation
  if (params.animation === true) {
    removeClass(popup, swalClasses.noanimation);
  } else {
    addClass(popup, swalClasses.noanimation);
  }

  // showLoaderOnConfirm && preConfirm
  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
  }
}

/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param {Array} params
 */
var openPopup = function openPopup(params) {
  var container = getContainer();
  var popup = getPopup();

  if (params.onBeforeOpen !== null && typeof params.onBeforeOpen === 'function') {
    params.onBeforeOpen(popup);
  }

  if (params.animation) {
    addClass(popup, swalClasses.show);
    addClass(container, swalClasses.fade);
    removeClass(popup, swalClasses.hide);
  } else {
    removeClass(popup, swalClasses.fade);
  }
  show(popup);

  // scrolling is 'hidden' until animation is done, after that 'auto'
  container.style.overflowY = 'hidden';
  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);
      container.style.overflowY = 'auto';
    });
  } else {
    container.style.overflowY = 'auto';
  }

  addClass([document.documentElement, document.body, container], swalClasses.shown);
  if (params.heightAuto && params.backdrop && !params.toast) {
    addClass([document.documentElement, document.body], swalClasses['height-auto']);
  }

  if (isModal()) {
    fixScrollbar();
    iOSfix();
  }
  if (!globalState.previousActiveElement) {
    globalState.previousActiveElement = document.activeElement;
  }
  if (params.onOpen !== null && typeof params.onOpen === 'function') {
    setTimeout(function () {
      params.onOpen(popup);
    });
  }
};

function _main(userParams) {
  var _this = this;

  showWarningsForParams(userParams);

  var innerParams = _extends({}, defaultParams, userParams);
  setParameters(innerParams);
  Object.freeze(innerParams);
  privateProps.innerParams.set(this, innerParams);

  // clear the previous timer
  if (globalState.timeout) {
    globalState.timeout.stop();
    delete globalState.timeout;
  }

  var domCache = {
    popup: getPopup(),
    container: getContainer(),
    content: getContent(),
    actions: getActions(),
    confirmButton: getConfirmButton(),
    cancelButton: getCancelButton(),
    closeButton: getCloseButton(),
    validationError: getValidationError(),
    progressSteps: getProgressSteps()
  };
  privateProps.domCache.set(this, domCache);

  var constructor = this.constructor;

  return new Promise(function (resolve, reject) {
    // functions to handle all resolving/rejecting/settling
    var succeedWith = function succeedWith(value) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose); // TODO: make closePopup an *instance* method
      if (innerParams.useRejections) {
        resolve(value);
      } else {
        resolve({ value: value });
      }
    };
    var dismissWith = function dismissWith(dismiss) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose);
      if (innerParams.useRejections) {
        reject(dismiss);
      } else {
        resolve({ dismiss: dismiss });
      }
    };
    var errorWith = function errorWith(error$$1) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose);
      reject(error$$1);
    };

    // Close on timer
    if (innerParams.timer) {
      globalState.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);
    }

    // Get the value of the popup input
    var getInputValue = function getInputValue() {
      var input = _this.getInput();
      if (!input) {
        return null;
      }
      switch (innerParams.input) {
        case 'checkbox':
          return input.checked ? 1 : 0;
        case 'radio':
          return input.checked ? input.value : null;
        case 'file':
          return input.files.length ? input.files[0] : null;
        default:
          return innerParams.inputAutoTrim ? input.value.trim() : input.value;
      }
    };

    // input autofocus
    if (innerParams.input) {
      setTimeout(function () {
        var input = _this.getInput();
        if (input) {
          focusInput(input);
        }
      }, 0);
    }

    var confirm = function confirm(value) {
      if (innerParams.showLoaderOnConfirm) {
        constructor.showLoading(); // TODO: make showLoading an *instance* method
      }

      if (innerParams.preConfirm) {
        _this.resetValidationError();
        var preConfirmPromise = Promise.resolve().then(function () {
          return innerParams.preConfirm(value, innerParams.extraParams);
        });
        if (innerParams.expectRejections) {
          preConfirmPromise.then(function (preConfirmValue) {
            return succeedWith(preConfirmValue || value);
          }, function (validationError) {
            _this.hideLoading();
            if (validationError) {
              _this.showValidationError(validationError);
            }
          });
        } else {
          preConfirmPromise.then(function (preConfirmValue) {
            if (isVisible(domCache.validationError) || preConfirmValue === false) {
              _this.hideLoading();
            } else {
              succeedWith(preConfirmValue || value);
            }
          }, function (error$$1) {
            return errorWith(error$$1);
          });
        }
      } else {
        succeedWith(value);
      }
    };

    // Mouse interactions
    var onButtonEvent = function onButtonEvent(event) {
      var e = event || window.event;
      var target = e.target || e.srcElement;
      var confirmButton = domCache.confirmButton,
          cancelButton = domCache.cancelButton;

      var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
      var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));

      switch (e.type) {
        case 'click':
          // Clicked 'confirm'
          if (targetedConfirm && constructor.isVisible()) {
            _this.disableButtons();
            if (innerParams.input) {
              var inputValue = getInputValue();

              if (innerParams.inputValidator) {
                _this.disableInput();
                var validationPromise = Promise.resolve().then(function () {
                  return innerParams.inputValidator(inputValue, innerParams.extraParams);
                });
                if (innerParams.expectRejections) {
                  validationPromise.then(function () {
                    _this.enableButtons();
                    _this.enableInput();
                    confirm(inputValue);
                  }, function (validationError) {
                    _this.enableButtons();
                    _this.enableInput();
                    if (validationError) {
                      _this.showValidationError(validationError);
                    }
                  });
                } else {
                  validationPromise.then(function (validationError) {
                    _this.enableButtons();
                    _this.enableInput();
                    if (validationError) {
                      _this.showValidationError(validationError);
                    } else {
                      confirm(inputValue);
                    }
                  }, function (error$$1) {
                    return errorWith(error$$1);
                  });
                }
              } else {
                confirm(inputValue);
              }
            } else {
              confirm(true);
            }

            // Clicked 'cancel'
          } else if (targetedCancel && constructor.isVisible()) {
            _this.disableButtons();
            dismissWith(constructor.DismissReason.cancel);
          }
          break;
        default:
      }
    };

    var buttons = domCache.popup.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = onButtonEvent;
      buttons[i].onmouseover = onButtonEvent;
      buttons[i].onmouseout = onButtonEvent;
      buttons[i].onmousedown = onButtonEvent;
    }

    // Closing popup by close button
    domCache.closeButton.onclick = function () {
      dismissWith(constructor.DismissReason.close);
    };

    if (innerParams.toast) {
      // Closing popup by internal click
      domCache.popup.onclick = function (e) {
        if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
          return;
        }
        constructor.closePopup(innerParams.onClose, innerParams.onAfterClose);
        dismissWith(constructor.DismissReason.close);
      };
    } else {
      var ignoreOutsideClick = false;

      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      domCache.popup.onmousedown = function () {
        domCache.container.onmouseup = function (e) {
          domCache.container.onmouseup = undefined;
          // We only check if the mouseup target is the container because usually it doesn't
          // have any other direct children aside of the popup
          if (e.target === domCache.container) {
            ignoreOutsideClick = true;
          }
        };
      };

      // Ignore click events that had mousedown on the container but mouseup on the popup
      domCache.container.onmousedown = function () {
        domCache.popup.onmouseup = function (e) {
          domCache.popup.onmouseup = undefined;
          // We also need to check if the mouseup target is a child of the popup
          if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
            ignoreOutsideClick = true;
          }
        };
      };

      domCache.container.onclick = function (e) {
        if (ignoreOutsideClick) {
          ignoreOutsideClick = false;
          return;
        }
        if (e.target !== domCache.container) {
          return;
        }
        if (callIfFunction(innerParams.allowOutsideClick)) {
          dismissWith(constructor.DismissReason.backdrop);
        }
      };
    }

    // Reverse buttons (Confirm on the right side)
    if (innerParams.reverseButtons) {
      domCache.confirmButton.parentNode.insertBefore(domCache.cancelButton, domCache.confirmButton);
    } else {
      domCache.confirmButton.parentNode.insertBefore(domCache.confirmButton, domCache.cancelButton);
    }

    // Focus handling
    var setFocus = function setFocus(index, increment) {
      var focusableElements = getFocusableElements(innerParams.focusCancel);
      // search for visible elements and select the next possible match
      for (var _i = 0; _i < focusableElements.length; _i++) {
        index = index + increment;

        // rollover to first item
        if (index === focusableElements.length) {
          index = 0;

          // go to last item
        } else if (index === -1) {
          index = focusableElements.length - 1;
        }

        // determine if element is visible
        var el = focusableElements[index];
        if (isVisible(el)) {
          return el.focus();
        }
      }
      // no visible focusable elements, focus the popup
      domCache.popup.focus();
    };

    var keydownHandler = function keydownHandler(e, innerParams) {
      e.stopPropagation();

      var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
      ];

      if (e.key === 'Enter' && !e.isComposing) {
        if (e.target && _this.getInput() && e.target.outerHTML === _this.getInput().outerHTML) {
          if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
            return; // do not submit
          }

          constructor.clickConfirm();
          e.preventDefault();
        }

        // TAB
      } else if (e.key === 'Tab') {
        var targetElement = e.target || e.srcElement;

        var focusableElements = getFocusableElements(innerParams.focusCancel);
        var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
        for (var _i2 = 0; _i2 < focusableElements.length; _i2++) {
          if (targetElement === focusableElements[_i2]) {
            btnIndex = _i2;
            break;
          }
        }

        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(btnIndex, 1);
        } else {
          // Cycle to the prev button
          setFocus(btnIndex, -1);
        }
        e.stopPropagation();
        e.preventDefault();

        // ARROWS - switch focus between buttons
      } else if (arrowKeys.indexOf(e.key) !== -1) {
        // focus Cancel button if Confirm button is currently focused
        if (document.activeElement === domCache.confirmButton && isVisible(domCache.cancelButton)) {
          domCache.cancelButton.focus();
          // and vice versa
        } else if (document.activeElement === domCache.cancelButton && isVisible(domCache.confirmButton)) {
          domCache.confirmButton.focus();
        }

        // ESC
      } else if ((e.key === 'Escape' || e.key === 'Esc') && callIfFunction(innerParams.allowEscapeKey) === true) {
        dismissWith(constructor.DismissReason.esc);
      }
    };

    if (globalState.keydownHandlerAdded) {
      window.removeEventListener('keydown', globalState.keydownHandler, { capture: true });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(e, innerParams);
      };
      window.addEventListener('keydown', globalState.keydownHandler, { capture: true });
      globalState.keydownHandlerAdded = true;
    }

    _this.enableButtons();
    _this.hideLoading();
    _this.resetValidationError();

    if (innerParams.input) {
      addClass(document.body, swalClasses['has-input']);
    }

    // inputs
    var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
    var input = void 0;
    for (var _i3 = 0; _i3 < inputTypes.length; _i3++) {
      var inputClass = swalClasses[inputTypes[_i3]];
      var inputContainer = getChildByClass(domCache.content, inputClass);
      input = _this.getInput(inputTypes[_i3]);

      // set attributes
      if (input) {
        for (var j in input.attributes) {
          if (input.attributes.hasOwnProperty(j)) {
            var attrName = input.attributes[j].name;
            if (attrName !== 'type' && attrName !== 'value') {
              input.removeAttribute(attrName);
            }
          }
        }
        for (var attr in innerParams.inputAttributes) {
          input.setAttribute(attr, innerParams.inputAttributes[attr]);
        }
      }

      // set class
      inputContainer.className = inputClass;
      if (innerParams.inputClass) {
        addClass(inputContainer, innerParams.inputClass);
      }

      hide(inputContainer);
    }

    var populateInputOptions = void 0;
    switch (innerParams.input) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url':
        input = getChildByClass(domCache.content, swalClasses.input);
        input.value = innerParams.inputValue;
        input.placeholder = innerParams.inputPlaceholder;
        input.type = innerParams.input;
        show(input);
        break;
      case 'file':
        input = getChildByClass(domCache.content, swalClasses.file);
        input.placeholder = innerParams.inputPlaceholder;
        input.type = innerParams.input;
        show(input);
        break;
      case 'range':
        var range = getChildByClass(domCache.content, swalClasses.range);
        var rangeInput = range.querySelector('input');
        var rangeOutput = range.querySelector('output');
        rangeInput.value = innerParams.inputValue;
        rangeInput.type = innerParams.input;
        rangeOutput.value = innerParams.inputValue;
        show(range);
        break;
      case 'select':
        var select = getChildByClass(domCache.content, swalClasses.select);
        select.innerHTML = '';
        if (innerParams.inputPlaceholder) {
          var placeholder = document.createElement('option');
          placeholder.innerHTML = innerParams.inputPlaceholder;
          placeholder.value = '';
          placeholder.disabled = true;
          placeholder.selected = true;
          select.appendChild(placeholder);
        }
        populateInputOptions = function populateInputOptions(inputOptions) {
          inputOptions.forEach(function (_ref) {
            var _ref2 = slicedToArray(_ref, 2),
                optionValue = _ref2[0],
                optionLabel = _ref2[1];

            var option = document.createElement('option');
            option.value = optionValue;
            option.innerHTML = optionLabel;
            if (innerParams.inputValue.toString() === optionValue.toString()) {
              option.selected = true;
            }
            select.appendChild(option);
          });
          show(select);
          select.focus();
        };
        break;
      case 'radio':
        var radio = getChildByClass(domCache.content, swalClasses.radio);
        radio.innerHTML = '';
        populateInputOptions = function populateInputOptions(inputOptions) {
          inputOptions.forEach(function (_ref3) {
            var _ref4 = slicedToArray(_ref3, 2),
                radioValue = _ref4[0],
                radioLabel = _ref4[1];

            var radioInput = document.createElement('input');
            var radioLabelElement = document.createElement('label');
            radioInput.type = 'radio';
            radioInput.name = swalClasses.radio;
            radioInput.value = radioValue;
            if (innerParams.inputValue.toString() === radioValue.toString()) {
              radioInput.checked = true;
            }
            radioLabelElement.innerHTML = radioLabel;
            radioLabelElement.insertBefore(radioInput, radioLabelElement.firstChild);
            radio.appendChild(radioLabelElement);
          });
          show(radio);
          var radios = radio.querySelectorAll('input');
          if (radios.length) {
            radios[0].focus();
          }
        };
        break;
      case 'checkbox':
        var checkbox = getChildByClass(domCache.content, swalClasses.checkbox);
        var checkboxInput = _this.getInput('checkbox');
        checkboxInput.type = 'checkbox';
        checkboxInput.value = 1;
        checkboxInput.id = swalClasses.checkbox;
        checkboxInput.checked = Boolean(innerParams.inputValue);
        var label = checkbox.getElementsByTagName('span');
        if (label.length) {
          checkbox.removeChild(label[0]);
        }
        label = document.createElement('span');
        label.innerHTML = innerParams.inputPlaceholder;
        checkbox.appendChild(label);
        show(checkbox);
        break;
      case 'textarea':
        var textarea = getChildByClass(domCache.content, swalClasses.textarea);
        textarea.value = innerParams.inputValue;
        textarea.placeholder = innerParams.inputPlaceholder;
        show(textarea);
        break;
      case null:
        break;
      default:
        error('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + innerParams.input + '"');
        break;
    }

    if (innerParams.input === 'select' || innerParams.input === 'radio') {
      var processInputOptions = function processInputOptions(inputOptions) {
        return populateInputOptions(formatInputOptions(inputOptions));
      };
      if (isThenable(innerParams.inputOptions)) {
        constructor.showLoading();
        innerParams.inputOptions.then(function (inputOptions) {
          _this.hideLoading();
          processInputOptions(inputOptions);
        });
      } else if (_typeof(innerParams.inputOptions) === 'object') {
        processInputOptions(innerParams.inputOptions);
      } else {
        error('Unexpected type of inputOptions! Expected object, Map or Promise, got ' + _typeof(innerParams.inputOptions));
      }
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(innerParams.input) !== -1 && isThenable(innerParams.inputValue)) {
      constructor.showLoading();
      hide(input);
      innerParams.inputValue.then(function (inputValue) {
        input.value = innerParams.input === 'number' ? parseFloat(inputValue) || 0 : inputValue + '';
        show(input);
        _this.hideLoading();
      }).catch(function (err) {
        error('Error in inputValue promise: ' + err);
        input.value = '';
        show(input);
        _this.hideLoading();
      });
    }

    openPopup(innerParams);

    if (!innerParams.toast) {
      if (!callIfFunction(innerParams.allowEnterKey)) {
        if (document.activeElement) {
          document.activeElement.blur();
        }
      } else if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
        domCache.cancelButton.focus();
      } else if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
        domCache.confirmButton.focus();
      } else {
        setFocus(-1, 1);
      }
    }

    // fix scroll
    domCache.container.scrollTop = 0;
  });
}



var instanceMethods = Object.freeze({
	hideLoading: hideLoading,
	disableLoading: hideLoading,
	getInput: getInput,
	enableButtons: enableButtons,
	disableButtons: disableButtons,
	enableConfirmButton: enableConfirmButton,
	disableConfirmButton: disableConfirmButton,
	enableInput: enableInput,
	disableInput: disableInput,
	showValidationError: showValidationError,
	resetValidationError: resetValidationError,
	_main: _main
});

var currentInstance = void 0;

// SweetAlert constructor
function SweetAlert() {
  // Prevent run in Node env
  if (typeof window === 'undefined') {
    return;
  }

  // Check for the existence of Promise
  if (typeof Promise === 'undefined') {
    error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
  }

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (typeof args[0] === 'undefined') {
    error('SweetAlert2 expects at least 1 attribute!');
    return false;
  }

  currentInstance = this;

  var outerParams = Object.freeze(this.constructor.argsToParams(args));

  Object.defineProperties(this, {
    params: {
      value: outerParams,
      writable: false,
      enumerable: true
    }
  });

  var promise = this._main(this.params);
  privateProps.promise.set(this, promise);
}

// `catch` cannot be the name of a module export, so we define our thenable methods here instead
SweetAlert.prototype.then = function (onFulfilled, onRejected) {
  var promise = privateProps.promise.get(this);
  return promise.then(onFulfilled, onRejected);
};
SweetAlert.prototype.catch = function (onRejected) {
  var promise = privateProps.promise.get(this);
  return promise.catch(onRejected);
};
SweetAlert.prototype.finally = function (onFinally) {
  var promise = privateProps.promise.get(this);
  return promise.finally(onFinally);
};

// Assign instance methods from src/instanceMethods/*.js to prototype
_extends(SweetAlert.prototype, instanceMethods);

// Assign static methods from src/staticMethods/*.js to constructor
_extends(SweetAlert, staticMethods);

// Proxy to instance methods to constructor, for now, for backwards compatibility
Object.keys(instanceMethods).forEach(function (key) {
  SweetAlert[key] = function () {
    if (currentInstance) {
      var _currentInstance;

      return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
    }
  };
});

SweetAlert.DismissReason = DismissReason;

SweetAlert.noop = function () {};

SweetAlert.version = version;

var Swal = withNoNewKeyword(withGlobalDefaults(SweetAlert));
Swal.default = Swal;

return Swal;

})));
if (typeof window !== 'undefined' && window.Sweetalert2){  window.swal = window.sweetAlert = window.Swal = window.SweetAlert = window.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,"@-webkit-keyframes swal2-show {\n" +
"  0% {\n" +
"    -webkit-transform: scale(0.7);\n" +
"            transform: scale(0.7); }\n" +
"  45% {\n" +
"    -webkit-transform: scale(1.05);\n" +
"            transform: scale(1.05); }\n" +
"  80% {\n" +
"    -webkit-transform: scale(0.95);\n" +
"            transform: scale(0.95); }\n" +
"  100% {\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1); } }\n" +
"\n" +
"@keyframes swal2-show {\n" +
"  0% {\n" +
"    -webkit-transform: scale(0.7);\n" +
"            transform: scale(0.7); }\n" +
"  45% {\n" +
"    -webkit-transform: scale(1.05);\n" +
"            transform: scale(1.05); }\n" +
"  80% {\n" +
"    -webkit-transform: scale(0.95);\n" +
"            transform: scale(0.95); }\n" +
"  100% {\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1); } }\n" +
"\n" +
"@-webkit-keyframes swal2-hide {\n" +
"  0% {\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1);\n" +
"    opacity: 1; }\n" +
"  100% {\n" +
"    -webkit-transform: scale(0.5);\n" +
"            transform: scale(0.5);\n" +
"    opacity: 0; } }\n" +
"\n" +
"@keyframes swal2-hide {\n" +
"  0% {\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1);\n" +
"    opacity: 1; }\n" +
"  100% {\n" +
"    -webkit-transform: scale(0.5);\n" +
"            transform: scale(0.5);\n" +
"    opacity: 0; } }\n" +
"\n" +
"@-webkit-keyframes swal2-animate-success-line-tip {\n" +
"  0% {\n" +
"    top: 1.1875em;\n" +
"    left: .0625em;\n" +
"    width: 0; }\n" +
"  54% {\n" +
"    top: 1.0625em;\n" +
"    left: .125em;\n" +
"    width: 0; }\n" +
"  70% {\n" +
"    top: 2.1875em;\n" +
"    left: -.375em;\n" +
"    width: 3.125em; }\n" +
"  84% {\n" +
"    top: 3em;\n" +
"    left: 1.3125em;\n" +
"    width: 1.0625em; }\n" +
"  100% {\n" +
"    top: 2.8125em;\n" +
"    left: .875em;\n" +
"    width: 1.5625em; } }\n" +
"\n" +
"@keyframes swal2-animate-success-line-tip {\n" +
"  0% {\n" +
"    top: 1.1875em;\n" +
"    left: .0625em;\n" +
"    width: 0; }\n" +
"  54% {\n" +
"    top: 1.0625em;\n" +
"    left: .125em;\n" +
"    width: 0; }\n" +
"  70% {\n" +
"    top: 2.1875em;\n" +
"    left: -.375em;\n" +
"    width: 3.125em; }\n" +
"  84% {\n" +
"    top: 3em;\n" +
"    left: 1.3125em;\n" +
"    width: 1.0625em; }\n" +
"  100% {\n" +
"    top: 2.8125em;\n" +
"    left: .875em;\n" +
"    width: 1.5625em; } }\n" +
"\n" +
"@-webkit-keyframes swal2-animate-success-line-long {\n" +
"  0% {\n" +
"    top: 3.375em;\n" +
"    right: 2.875em;\n" +
"    width: 0; }\n" +
"  65% {\n" +
"    top: 3.375em;\n" +
"    right: 2.875em;\n" +
"    width: 0; }\n" +
"  84% {\n" +
"    top: 2.1875em;\n" +
"    right: 0;\n" +
"    width: 3.4375em; }\n" +
"  100% {\n" +
"    top: 2.375em;\n" +
"    right: .5em;\n" +
"    width: 2.9375em; } }\n" +
"\n" +
"@keyframes swal2-animate-success-line-long {\n" +
"  0% {\n" +
"    top: 3.375em;\n" +
"    right: 2.875em;\n" +
"    width: 0; }\n" +
"  65% {\n" +
"    top: 3.375em;\n" +
"    right: 2.875em;\n" +
"    width: 0; }\n" +
"  84% {\n" +
"    top: 2.1875em;\n" +
"    right: 0;\n" +
"    width: 3.4375em; }\n" +
"  100% {\n" +
"    top: 2.375em;\n" +
"    right: .5em;\n" +
"    width: 2.9375em; } }\n" +
"\n" +
"@-webkit-keyframes swal2-rotate-success-circular-line {\n" +
"  0% {\n" +
"    -webkit-transform: rotate(-45deg);\n" +
"            transform: rotate(-45deg); }\n" +
"  5% {\n" +
"    -webkit-transform: rotate(-45deg);\n" +
"            transform: rotate(-45deg); }\n" +
"  12% {\n" +
"    -webkit-transform: rotate(-405deg);\n" +
"            transform: rotate(-405deg); }\n" +
"  100% {\n" +
"    -webkit-transform: rotate(-405deg);\n" +
"            transform: rotate(-405deg); } }\n" +
"\n" +
"@keyframes swal2-rotate-success-circular-line {\n" +
"  0% {\n" +
"    -webkit-transform: rotate(-45deg);\n" +
"            transform: rotate(-45deg); }\n" +
"  5% {\n" +
"    -webkit-transform: rotate(-45deg);\n" +
"            transform: rotate(-45deg); }\n" +
"  12% {\n" +
"    -webkit-transform: rotate(-405deg);\n" +
"            transform: rotate(-405deg); }\n" +
"  100% {\n" +
"    -webkit-transform: rotate(-405deg);\n" +
"            transform: rotate(-405deg); } }\n" +
"\n" +
"@-webkit-keyframes swal2-animate-error-x-mark {\n" +
"  0% {\n" +
"    margin-top: 1.625em;\n" +
"    -webkit-transform: scale(0.4);\n" +
"            transform: scale(0.4);\n" +
"    opacity: 0; }\n" +
"  50% {\n" +
"    margin-top: 1.625em;\n" +
"    -webkit-transform: scale(0.4);\n" +
"            transform: scale(0.4);\n" +
"    opacity: 0; }\n" +
"  80% {\n" +
"    margin-top: -.375em;\n" +
"    -webkit-transform: scale(1.15);\n" +
"            transform: scale(1.15); }\n" +
"  100% {\n" +
"    margin-top: 0;\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1);\n" +
"    opacity: 1; } }\n" +
"\n" +
"@keyframes swal2-animate-error-x-mark {\n" +
"  0% {\n" +
"    margin-top: 1.625em;\n" +
"    -webkit-transform: scale(0.4);\n" +
"            transform: scale(0.4);\n" +
"    opacity: 0; }\n" +
"  50% {\n" +
"    margin-top: 1.625em;\n" +
"    -webkit-transform: scale(0.4);\n" +
"            transform: scale(0.4);\n" +
"    opacity: 0; }\n" +
"  80% {\n" +
"    margin-top: -.375em;\n" +
"    -webkit-transform: scale(1.15);\n" +
"            transform: scale(1.15); }\n" +
"  100% {\n" +
"    margin-top: 0;\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1);\n" +
"    opacity: 1; } }\n" +
"\n" +
"@-webkit-keyframes swal2-animate-error-icon {\n" +
"  0% {\n" +
"    -webkit-transform: rotateX(100deg);\n" +
"            transform: rotateX(100deg);\n" +
"    opacity: 0; }\n" +
"  100% {\n" +
"    -webkit-transform: rotateX(0deg);\n" +
"            transform: rotateX(0deg);\n" +
"    opacity: 1; } }\n" +
"\n" +
"@keyframes swal2-animate-error-icon {\n" +
"  0% {\n" +
"    -webkit-transform: rotateX(100deg);\n" +
"            transform: rotateX(100deg);\n" +
"    opacity: 0; }\n" +
"  100% {\n" +
"    -webkit-transform: rotateX(0deg);\n" +
"            transform: rotateX(0deg);\n" +
"    opacity: 1; } }\n" +
"\n" +
"body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast {\n" +
"  flex-direction: column;\n" +
"  align-items: stretch; }\n" +
"  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-actions {\n" +
"    flex: 1;\n" +
"    align-self: stretch;\n" +
"    justify-content: flex-end;\n" +
"    height: 2.2em; }\n" +
"  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-loading {\n" +
"    justify-content: center; }\n" +
"  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-input {\n" +
"    height: 2em;\n" +
"    margin: .3125em auto;\n" +
"    font-size: 1em; }\n" +
"  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-validationerror {\n" +
"    font-size: 1em; }\n" +
"\n" +
"body.swal2-toast-shown > .swal2-container {\n" +
"  position: fixed;\n" +
"  background-color: transparent; }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-shown {\n" +
"    background-color: transparent; }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-top {\n" +
"    top: 0;\n" +
"    right: auto;\n" +
"    bottom: auto;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translateX(-50%);\n" +
"            transform: translateX(-50%); }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-top-end, body.swal2-toast-shown > .swal2-container.swal2-top-right {\n" +
"    top: 0;\n" +
"    right: 0;\n" +
"    bottom: auto;\n" +
"    left: auto; }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-top-start, body.swal2-toast-shown > .swal2-container.swal2-top-left {\n" +
"    top: 0;\n" +
"    right: auto;\n" +
"    bottom: auto;\n" +
"    left: 0; }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-center-start, body.swal2-toast-shown > .swal2-container.swal2-center-left {\n" +
"    top: 50%;\n" +
"    right: auto;\n" +
"    bottom: auto;\n" +
"    left: 0;\n" +
"    -webkit-transform: translateY(-50%);\n" +
"            transform: translateY(-50%); }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-center {\n" +
"    top: 50%;\n" +
"    right: auto;\n" +
"    bottom: auto;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translate(-50%, -50%);\n" +
"            transform: translate(-50%, -50%); }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-center-end, body.swal2-toast-shown > .swal2-container.swal2-center-right {\n" +
"    top: 50%;\n" +
"    right: 0;\n" +
"    bottom: auto;\n" +
"    left: auto;\n" +
"    -webkit-transform: translateY(-50%);\n" +
"            transform: translateY(-50%); }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-bottom-start, body.swal2-toast-shown > .swal2-container.swal2-bottom-left {\n" +
"    top: auto;\n" +
"    right: auto;\n" +
"    bottom: 0;\n" +
"    left: 0; }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-bottom {\n" +
"    top: auto;\n" +
"    right: auto;\n" +
"    bottom: 0;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translateX(-50%);\n" +
"            transform: translateX(-50%); }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-bottom-end, body.swal2-toast-shown > .swal2-container.swal2-bottom-right {\n" +
"    top: auto;\n" +
"    right: 0;\n" +
"    bottom: 0;\n" +
"    left: auto; }\n" +
"\n" +
".swal2-popup.swal2-toast {\n" +
"  flex-direction: row;\n" +
"  align-items: center;\n" +
"  width: auto;\n" +
"  padding: 0.625em;\n" +
"  box-shadow: 0 0 0.625em #d9d9d9;\n" +
"  overflow-y: hidden; }\n" +
"  .swal2-popup.swal2-toast .swal2-header {\n" +
"    flex-direction: row; }\n" +
"  .swal2-popup.swal2-toast .swal2-title {\n" +
"    justify-content: flex-start;\n" +
"    margin: 0 .6em;\n" +
"    font-size: 1em; }\n" +
"  .swal2-popup.swal2-toast .swal2-close {\n" +
"    position: initial; }\n" +
"  .swal2-popup.swal2-toast .swal2-content {\n" +
"    justify-content: flex-start;\n" +
"    font-size: 1em; }\n" +
"  .swal2-popup.swal2-toast .swal2-icon {\n" +
"    width: 2em;\n" +
"    min-width: 2em;\n" +
"    height: 2em;\n" +
"    margin: 0; }\n" +
"    .swal2-popup.swal2-toast .swal2-icon-text {\n" +
"      font-size: 2em;\n" +
"      font-weight: bold;\n" +
"      line-height: 1em; }\n" +
"    .swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {\n" +
"      width: 2em;\n" +
"      height: 2em; }\n" +
"    .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n" +
"      top: .875em;\n" +
"      width: 1.375em; }\n" +
"      .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n" +
"        left: .3125em; }\n" +
"      .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n" +
"        right: .3125em; }\n" +
"  .swal2-popup.swal2-toast .swal2-actions {\n" +
"    height: auto;\n" +
"    margin: 0 .3125em; }\n" +
"  .swal2-popup.swal2-toast .swal2-styled {\n" +
"    margin: 0 .3125em;\n" +
"    padding: .3125em .625em;\n" +
"    font-size: 1em; }\n" +
"    .swal2-popup.swal2-toast .swal2-styled:focus {\n" +
"      box-shadow: 0 0 0 0.0625em #fff, 0 0 0 0.125em rgba(50, 100, 150, 0.4); }\n" +
"  .swal2-popup.swal2-toast .swal2-success {\n" +
"    border-color: #a5dc86; }\n" +
"    .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'] {\n" +
"      position: absolute;\n" +
"      width: 2em;\n" +
"      height: 2.8125em;\n" +
"      -webkit-transform: rotate(45deg);\n" +
"              transform: rotate(45deg);\n" +
"      border-radius: 50%; }\n" +
"      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n" +
"        top: -.25em;\n" +
"        left: -.9375em;\n" +
"        -webkit-transform: rotate(-45deg);\n" +
"                transform: rotate(-45deg);\n" +
"        -webkit-transform-origin: 2em 2em;\n" +
"                transform-origin: 2em 2em;\n" +
"        border-radius: 4em 0 0 4em; }\n" +
"      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n" +
"        top: -.25em;\n" +
"        left: .9375em;\n" +
"        -webkit-transform-origin: 0 2em;\n" +
"                transform-origin: 0 2em;\n" +
"        border-radius: 0 4em 4em 0; }\n" +
"    .swal2-popup.swal2-toast .swal2-success .swal2-success-ring {\n" +
"      width: 2em;\n" +
"      height: 2em; }\n" +
"    .swal2-popup.swal2-toast .swal2-success .swal2-success-fix {\n" +
"      top: 0;\n" +
"      left: .4375em;\n" +
"      width: .4375em;\n" +
"      height: 2.6875em; }\n" +
"    .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'] {\n" +
"      height: .3125em; }\n" +
"      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='tip'] {\n" +
"        top: 1.125em;\n" +
"        left: .1875em;\n" +
"        width: .75em; }\n" +
"      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='long'] {\n" +
"        top: .9375em;\n" +
"        right: .1875em;\n" +
"        width: 1.375em; }\n" +
"  .swal2-popup.swal2-toast.swal2-show {\n" +
"    -webkit-animation: showSweetToast .5s;\n" +
"            animation: showSweetToast .5s; }\n" +
"  .swal2-popup.swal2-toast.swal2-hide {\n" +
"    -webkit-animation: hideSweetToast .2s forwards;\n" +
"            animation: hideSweetToast .2s forwards; }\n" +
"  .swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip {\n" +
"    -webkit-animation: animate-toast-success-tip .75s;\n" +
"            animation: animate-toast-success-tip .75s; }\n" +
"  .swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long {\n" +
"    -webkit-animation: animate-toast-success-long .75s;\n" +
"            animation: animate-toast-success-long .75s; }\n" +
"\n" +
"@-webkit-keyframes showSweetToast {\n" +
"  0% {\n" +
"    -webkit-transform: translateY(-0.625em) rotateZ(2deg);\n" +
"            transform: translateY(-0.625em) rotateZ(2deg);\n" +
"    opacity: 0; }\n" +
"  33% {\n" +
"    -webkit-transform: translateY(0) rotateZ(-2deg);\n" +
"            transform: translateY(0) rotateZ(-2deg);\n" +
"    opacity: .5; }\n" +
"  66% {\n" +
"    -webkit-transform: translateY(0.3125em) rotateZ(2deg);\n" +
"            transform: translateY(0.3125em) rotateZ(2deg);\n" +
"    opacity: .7; }\n" +
"  100% {\n" +
"    -webkit-transform: translateY(0) rotateZ(0);\n" +
"            transform: translateY(0) rotateZ(0);\n" +
"    opacity: 1; } }\n" +
"\n" +
"@keyframes showSweetToast {\n" +
"  0% {\n" +
"    -webkit-transform: translateY(-0.625em) rotateZ(2deg);\n" +
"            transform: translateY(-0.625em) rotateZ(2deg);\n" +
"    opacity: 0; }\n" +
"  33% {\n" +
"    -webkit-transform: translateY(0) rotateZ(-2deg);\n" +
"            transform: translateY(0) rotateZ(-2deg);\n" +
"    opacity: .5; }\n" +
"  66% {\n" +
"    -webkit-transform: translateY(0.3125em) rotateZ(2deg);\n" +
"            transform: translateY(0.3125em) rotateZ(2deg);\n" +
"    opacity: .7; }\n" +
"  100% {\n" +
"    -webkit-transform: translateY(0) rotateZ(0);\n" +
"            transform: translateY(0) rotateZ(0);\n" +
"    opacity: 1; } }\n" +
"\n" +
"@-webkit-keyframes hideSweetToast {\n" +
"  0% {\n" +
"    opacity: 1; }\n" +
"  33% {\n" +
"    opacity: .5; }\n" +
"  100% {\n" +
"    -webkit-transform: rotateZ(1deg);\n" +
"            transform: rotateZ(1deg);\n" +
"    opacity: 0; } }\n" +
"\n" +
"@keyframes hideSweetToast {\n" +
"  0% {\n" +
"    opacity: 1; }\n" +
"  33% {\n" +
"    opacity: .5; }\n" +
"  100% {\n" +
"    -webkit-transform: rotateZ(1deg);\n" +
"            transform: rotateZ(1deg);\n" +
"    opacity: 0; } }\n" +
"\n" +
"@-webkit-keyframes animate-toast-success-tip {\n" +
"  0% {\n" +
"    top: .5625em;\n" +
"    left: .0625em;\n" +
"    width: 0; }\n" +
"  54% {\n" +
"    top: .125em;\n" +
"    left: .125em;\n" +
"    width: 0; }\n" +
"  70% {\n" +
"    top: .625em;\n" +
"    left: -.25em;\n" +
"    width: 1.625em; }\n" +
"  84% {\n" +
"    top: 1.0625em;\n" +
"    left: .75em;\n" +
"    width: .5em; }\n" +
"  100% {\n" +
"    top: 1.125em;\n" +
"    left: .1875em;\n" +
"    width: .75em; } }\n" +
"\n" +
"@keyframes animate-toast-success-tip {\n" +
"  0% {\n" +
"    top: .5625em;\n" +
"    left: .0625em;\n" +
"    width: 0; }\n" +
"  54% {\n" +
"    top: .125em;\n" +
"    left: .125em;\n" +
"    width: 0; }\n" +
"  70% {\n" +
"    top: .625em;\n" +
"    left: -.25em;\n" +
"    width: 1.625em; }\n" +
"  84% {\n" +
"    top: 1.0625em;\n" +
"    left: .75em;\n" +
"    width: .5em; }\n" +
"  100% {\n" +
"    top: 1.125em;\n" +
"    left: .1875em;\n" +
"    width: .75em; } }\n" +
"\n" +
"@-webkit-keyframes animate-toast-success-long {\n" +
"  0% {\n" +
"    top: 1.625em;\n" +
"    right: 1.375em;\n" +
"    width: 0; }\n" +
"  65% {\n" +
"    top: 1.25em;\n" +
"    right: .9375em;\n" +
"    width: 0; }\n" +
"  84% {\n" +
"    top: .9375em;\n" +
"    right: 0;\n" +
"    width: 1.125em; }\n" +
"  100% {\n" +
"    top: .9375em;\n" +
"    right: .1875em;\n" +
"    width: 1.375em; } }\n" +
"\n" +
"@keyframes animate-toast-success-long {\n" +
"  0% {\n" +
"    top: 1.625em;\n" +
"    right: 1.375em;\n" +
"    width: 0; }\n" +
"  65% {\n" +
"    top: 1.25em;\n" +
"    right: .9375em;\n" +
"    width: 0; }\n" +
"  84% {\n" +
"    top: .9375em;\n" +
"    right: 0;\n" +
"    width: 1.125em; }\n" +
"  100% {\n" +
"    top: .9375em;\n" +
"    right: .1875em;\n" +
"    width: 1.375em; } }\n" +
"\n" +
"body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n" +
"  overflow-y: hidden; }\n" +
"\n" +
"body.swal2-height-auto {\n" +
"  height: auto !important; }\n" +
"\n" +
"body.swal2-no-backdrop .swal2-shown {\n" +
"  top: auto;\n" +
"  right: auto;\n" +
"  bottom: auto;\n" +
"  left: auto;\n" +
"  background-color: transparent; }\n" +
"  body.swal2-no-backdrop .swal2-shown > .swal2-modal {\n" +
"    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-top {\n" +
"    top: 0;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translateX(-50%);\n" +
"            transform: translateX(-50%); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-top-start, body.swal2-no-backdrop .swal2-shown.swal2-top-left {\n" +
"    top: 0;\n" +
"    left: 0; }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-top-end, body.swal2-no-backdrop .swal2-shown.swal2-top-right {\n" +
"    top: 0;\n" +
"    right: 0; }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-center {\n" +
"    top: 50%;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translate(-50%, -50%);\n" +
"            transform: translate(-50%, -50%); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-center-start, body.swal2-no-backdrop .swal2-shown.swal2-center-left {\n" +
"    top: 50%;\n" +
"    left: 0;\n" +
"    -webkit-transform: translateY(-50%);\n" +
"            transform: translateY(-50%); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-center-end, body.swal2-no-backdrop .swal2-shown.swal2-center-right {\n" +
"    top: 50%;\n" +
"    right: 0;\n" +
"    -webkit-transform: translateY(-50%);\n" +
"            transform: translateY(-50%); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-bottom {\n" +
"    bottom: 0;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translateX(-50%);\n" +
"            transform: translateX(-50%); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-bottom-start, body.swal2-no-backdrop .swal2-shown.swal2-bottom-left {\n" +
"    bottom: 0;\n" +
"    left: 0; }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-bottom-end, body.swal2-no-backdrop .swal2-shown.swal2-bottom-right {\n" +
"    right: 0;\n" +
"    bottom: 0; }\n" +
"\n" +
".swal2-container {\n" +
"  display: flex;\n" +
"  position: fixed;\n" +
"  top: 0;\n" +
"  right: 0;\n" +
"  bottom: 0;\n" +
"  left: 0;\n" +
"  flex-direction: row;\n" +
"  align-items: center;\n" +
"  justify-content: center;\n" +
"  padding: 10px;\n" +
"  background-color: transparent;\n" +
"  z-index: 1060;\n" +
"  overflow-x: hidden;\n" +
"  -webkit-overflow-scrolling: touch; }\n" +
"  .swal2-container.swal2-top {\n" +
"    align-items: flex-start; }\n" +
"  .swal2-container.swal2-top-start, .swal2-container.swal2-top-left {\n" +
"    align-items: flex-start;\n" +
"    justify-content: flex-start; }\n" +
"  .swal2-container.swal2-top-end, .swal2-container.swal2-top-right {\n" +
"    align-items: flex-start;\n" +
"    justify-content: flex-end; }\n" +
"  .swal2-container.swal2-center {\n" +
"    align-items: center; }\n" +
"  .swal2-container.swal2-center-start, .swal2-container.swal2-center-left {\n" +
"    align-items: center;\n" +
"    justify-content: flex-start; }\n" +
"  .swal2-container.swal2-center-end, .swal2-container.swal2-center-right {\n" +
"    align-items: center;\n" +
"    justify-content: flex-end; }\n" +
"  .swal2-container.swal2-bottom {\n" +
"    align-items: flex-end; }\n" +
"  .swal2-container.swal2-bottom-start, .swal2-container.swal2-bottom-left {\n" +
"    align-items: flex-end;\n" +
"    justify-content: flex-start; }\n" +
"  .swal2-container.swal2-bottom-end, .swal2-container.swal2-bottom-right {\n" +
"    align-items: flex-end;\n" +
"    justify-content: flex-end; }\n" +
"  .swal2-container.swal2-grow-fullscreen > .swal2-modal {\n" +
"    display: flex !important;\n" +
"    flex: 1;\n" +
"    align-self: stretch;\n" +
"    justify-content: center; }\n" +
"  .swal2-container.swal2-grow-row > .swal2-modal {\n" +
"    display: flex !important;\n" +
"    flex: 1;\n" +
"    align-content: center;\n" +
"    justify-content: center; }\n" +
"  .swal2-container.swal2-grow-column {\n" +
"    flex: 1;\n" +
"    flex-direction: column; }\n" +
"    .swal2-container.swal2-grow-column.swal2-top, .swal2-container.swal2-grow-column.swal2-center, .swal2-container.swal2-grow-column.swal2-bottom {\n" +
"      align-items: center; }\n" +
"    .swal2-container.swal2-grow-column.swal2-top-start, .swal2-container.swal2-grow-column.swal2-center-start, .swal2-container.swal2-grow-column.swal2-bottom-start, .swal2-container.swal2-grow-column.swal2-top-left, .swal2-container.swal2-grow-column.swal2-center-left, .swal2-container.swal2-grow-column.swal2-bottom-left {\n" +
"      align-items: flex-start; }\n" +
"    .swal2-container.swal2-grow-column.swal2-top-end, .swal2-container.swal2-grow-column.swal2-center-end, .swal2-container.swal2-grow-column.swal2-bottom-end, .swal2-container.swal2-grow-column.swal2-top-right, .swal2-container.swal2-grow-column.swal2-center-right, .swal2-container.swal2-grow-column.swal2-bottom-right {\n" +
"      align-items: flex-end; }\n" +
"    .swal2-container.swal2-grow-column > .swal2-modal {\n" +
"      display: flex !important;\n" +
"      flex: 1;\n" +
"      align-content: center;\n" +
"      justify-content: center; }\n" +
"  .swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right) > .swal2-modal {\n" +
"    margin: auto; }\n" +
"  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n" +
"    .swal2-container .swal2-modal {\n" +
"      margin: 0 !important; } }\n" +
"  .swal2-container.swal2-fade {\n" +
"    transition: background-color .1s; }\n" +
"  .swal2-container.swal2-shown {\n" +
"    background-color: rgba(0, 0, 0, 0.4); }\n" +
"\n" +
".swal2-popup {\n" +
"  display: none;\n" +
"  position: relative;\n" +
"  flex-direction: column;\n" +
"  justify-content: center;\n" +
"  width: 32em;\n" +
"  max-width: 100%;\n" +
"  padding: 1.25em;\n" +
"  border-radius: 0.3125em;\n" +
"  background: #fff;\n" +
"  font-family: inherit;\n" +
"  font-size: 1rem;\n" +
"  box-sizing: border-box; }\n" +
"  .swal2-popup:focus {\n" +
"    outline: none; }\n" +
"  .swal2-popup.swal2-loading {\n" +
"    overflow-y: hidden; }\n" +
"  .swal2-popup .swal2-header {\n" +
"    display: flex;\n" +
"    flex-direction: column;\n" +
"    align-items: center; }\n" +
"  .swal2-popup .swal2-title {\n" +
"    display: block;\n" +
"    position: relative;\n" +
"    max-width: 100%;\n" +
"    margin: 0 0 0.4em;\n" +
"    padding: 0;\n" +
"    color: #595959;\n" +
"    font-size: 1.875em;\n" +
"    font-weight: 600;\n" +
"    text-align: center;\n" +
"    text-transform: none;\n" +
"    word-wrap: break-word; }\n" +
"  .swal2-popup .swal2-actions {\n" +
"    align-items: center;\n" +
"    justify-content: center;\n" +
"    margin: 1.25em auto 0; }\n" +
"    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled] {\n" +
"      opacity: .4; }\n" +
"    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover {\n" +
"      background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)); }\n" +
"    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active {\n" +
"      background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)); }\n" +
"    .swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm {\n" +
"      width: 2.5em;\n" +
"      height: 2.5em;\n" +
"      margin: .46875em;\n" +
"      padding: 0;\n" +
"      border: .25em solid transparent;\n" +
"      border-radius: 100%;\n" +
"      border-color: transparent;\n" +
"      background-color: transparent !important;\n" +
"      color: transparent;\n" +
"      cursor: default;\n" +
"      box-sizing: border-box;\n" +
"      -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n" +
"              animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n" +
"      -webkit-user-select: none;\n" +
"         -moz-user-select: none;\n" +
"          -ms-user-select: none;\n" +
"              user-select: none; }\n" +
"    .swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel {\n" +
"      margin-right: 30px;\n" +
"      margin-left: 30px; }\n" +
"    .swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after {\n" +
"      display: inline-block;\n" +
"      width: 15px;\n" +
"      height: 15px;\n" +
"      margin-left: 5px;\n" +
"      border: 3px solid #999999;\n" +
"      border-radius: 50%;\n" +
"      border-right-color: transparent;\n" +
"      box-shadow: 1px 1px 1px #fff;\n" +
"      content: '';\n" +
"      -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n" +
"              animation: swal2-rotate-loading 1.5s linear 0s infinite normal; }\n" +
"  .swal2-popup .swal2-styled {\n" +
"    margin: 0 .3125em;\n" +
"    padding: .625em 2em;\n" +
"    font-weight: 500;\n" +
"    box-shadow: none; }\n" +
"    .swal2-popup .swal2-styled:not([disabled]) {\n" +
"      cursor: pointer; }\n" +
"    .swal2-popup .swal2-styled.swal2-confirm {\n" +
"      border: 0;\n" +
"      border-radius: 0.25em;\n" +
"      background: initial;\n" +
"      background-color: #3085d6;\n" +
"      color: #fff;\n" +
"      font-size: 1.0625em; }\n" +
"    .swal2-popup .swal2-styled.swal2-cancel {\n" +
"      border: 0;\n" +
"      border-radius: 0.25em;\n" +
"      background: initial;\n" +
"      background-color: #aaa;\n" +
"      color: #fff;\n" +
"      font-size: 1.0625em; }\n" +
"    .swal2-popup .swal2-styled:focus {\n" +
"      outline: none;\n" +
"      box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4); }\n" +
"    .swal2-popup .swal2-styled::-moz-focus-inner {\n" +
"      border: 0; }\n" +
"  .swal2-popup .swal2-footer {\n" +
"    justify-content: center;\n" +
"    margin: 1.25em 0 0;\n" +
"    padding-top: 1em;\n" +
"    border-top: 1px solid #eee;\n" +
"    color: #545454;\n" +
"    font-size: 1em; }\n" +
"  .swal2-popup .swal2-image {\n" +
"    max-width: 100%;\n" +
"    margin: 1.25em auto; }\n" +
"  .swal2-popup .swal2-close {\n" +
"    position: absolute;\n" +
"    top: 0;\n" +
"    right: 0;\n" +
"    justify-content: center;\n" +
"    width: 1.2em;\n" +
"    height: 1.2em;\n" +
"    padding: 0;\n" +
"    transition: color 0.1s ease-out;\n" +
"    border: none;\n" +
"    border-radius: 0;\n" +
"    background: transparent;\n" +
"    color: #cccccc;\n" +
"    font-family: serif;\n" +
"    font-size: 2.5em;\n" +
"    line-height: 1.2;\n" +
"    cursor: pointer;\n" +
"    overflow: hidden; }\n" +
"    .swal2-popup .swal2-close:hover {\n" +
"      -webkit-transform: none;\n" +
"              transform: none;\n" +
"      color: #f27474; }\n" +
"  .swal2-popup > .swal2-input,\n" +
"  .swal2-popup > .swal2-file,\n" +
"  .swal2-popup > .swal2-textarea,\n" +
"  .swal2-popup > .swal2-select,\n" +
"  .swal2-popup > .swal2-radio,\n" +
"  .swal2-popup > .swal2-checkbox {\n" +
"    display: none; }\n" +
"  .swal2-popup .swal2-content {\n" +
"    justify-content: center;\n" +
"    margin: 0;\n" +
"    padding: 0;\n" +
"    color: #545454;\n" +
"    font-size: 1.125em;\n" +
"    font-weight: 300;\n" +
"    line-height: normal;\n" +
"    word-wrap: break-word; }\n" +
"  .swal2-popup #swal2-content {\n" +
"    text-align: center; }\n" +
"  .swal2-popup .swal2-input,\n" +
"  .swal2-popup .swal2-file,\n" +
"  .swal2-popup .swal2-textarea,\n" +
"  .swal2-popup .swal2-select,\n" +
"  .swal2-popup .swal2-radio,\n" +
"  .swal2-popup .swal2-checkbox {\n" +
"    margin: 1em auto; }\n" +
"  .swal2-popup .swal2-input,\n" +
"  .swal2-popup .swal2-file,\n" +
"  .swal2-popup .swal2-textarea {\n" +
"    width: 100%;\n" +
"    transition: border-color .3s, box-shadow .3s;\n" +
"    border: 1px solid #d9d9d9;\n" +
"    border-radius: 0.1875em;\n" +
"    font-size: 1.125em;\n" +
"    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n" +
"    box-sizing: border-box; }\n" +
"    .swal2-popup .swal2-input.swal2-inputerror,\n" +
"    .swal2-popup .swal2-file.swal2-inputerror,\n" +
"    .swal2-popup .swal2-textarea.swal2-inputerror {\n" +
"      border-color: #f27474 !important;\n" +
"      box-shadow: 0 0 2px #f27474 !important; }\n" +
"    .swal2-popup .swal2-input:focus,\n" +
"    .swal2-popup .swal2-file:focus,\n" +
"    .swal2-popup .swal2-textarea:focus {\n" +
"      border: 1px solid #b4dbed;\n" +
"      outline: none;\n" +
"      box-shadow: 0 0 3px #c4e6f5; }\n" +
"    .swal2-popup .swal2-input::-webkit-input-placeholder,\n" +
"    .swal2-popup .swal2-file::-webkit-input-placeholder,\n" +
"    .swal2-popup .swal2-textarea::-webkit-input-placeholder {\n" +
"      color: #cccccc; }\n" +
"    .swal2-popup .swal2-input:-ms-input-placeholder,\n" +
"    .swal2-popup .swal2-file:-ms-input-placeholder,\n" +
"    .swal2-popup .swal2-textarea:-ms-input-placeholder {\n" +
"      color: #cccccc; }\n" +
"    .swal2-popup .swal2-input::-ms-input-placeholder,\n" +
"    .swal2-popup .swal2-file::-ms-input-placeholder,\n" +
"    .swal2-popup .swal2-textarea::-ms-input-placeholder {\n" +
"      color: #cccccc; }\n" +
"    .swal2-popup .swal2-input::placeholder,\n" +
"    .swal2-popup .swal2-file::placeholder,\n" +
"    .swal2-popup .swal2-textarea::placeholder {\n" +
"      color: #cccccc; }\n" +
"  .swal2-popup .swal2-range input {\n" +
"    width: 80%; }\n" +
"  .swal2-popup .swal2-range output {\n" +
"    width: 20%;\n" +
"    font-weight: 600;\n" +
"    text-align: center; }\n" +
"  .swal2-popup .swal2-range input,\n" +
"  .swal2-popup .swal2-range output {\n" +
"    height: 2.625em;\n" +
"    margin: 1em auto;\n" +
"    padding: 0;\n" +
"    font-size: 1.125em;\n" +
"    line-height: 2.625em; }\n" +
"  .swal2-popup .swal2-input {\n" +
"    height: 2.625em;\n" +
"    padding: 0.75em; }\n" +
"    .swal2-popup .swal2-input[type='number'] {\n" +
"      max-width: 10em; }\n" +
"  .swal2-popup .swal2-file {\n" +
"    font-size: 1.125em; }\n" +
"  .swal2-popup .swal2-textarea {\n" +
"    height: 6.75em;\n" +
"    padding: 0.75em; }\n" +
"  .swal2-popup .swal2-select {\n" +
"    min-width: 50%;\n" +
"    max-width: 100%;\n" +
"    padding: .375em .625em;\n" +
"    color: #545454;\n" +
"    font-size: 1.125em; }\n" +
"  .swal2-popup .swal2-radio,\n" +
"  .swal2-popup .swal2-checkbox {\n" +
"    align-items: center;\n" +
"    justify-content: center; }\n" +
"    .swal2-popup .swal2-radio label,\n" +
"    .swal2-popup .swal2-checkbox label {\n" +
"      margin: 0 .6em;\n" +
"      font-size: 1.125em; }\n" +
"    .swal2-popup .swal2-radio input,\n" +
"    .swal2-popup .swal2-checkbox input {\n" +
"      margin: 0 .4em; }\n" +
"  .swal2-popup .swal2-validationerror {\n" +
"    display: none;\n" +
"    align-items: center;\n" +
"    justify-content: center;\n" +
"    padding: 0.625em;\n" +
"    background: #f0f0f0;\n" +
"    color: #666666;\n" +
"    font-size: 1em;\n" +
"    font-weight: 300;\n" +
"    overflow: hidden; }\n" +
"    .swal2-popup .swal2-validationerror::before {\n" +
"      display: inline-block;\n" +
"      width: 1.5em;\n" +
"      min-width: 1.5em;\n" +
"      height: 1.5em;\n" +
"      margin: 0 .625em;\n" +
"      border-radius: 50%;\n" +
"      background-color: #f27474;\n" +
"      color: #fff;\n" +
"      font-weight: 600;\n" +
"      line-height: 1.5em;\n" +
"      text-align: center;\n" +
"      content: '!';\n" +
"      zoom: normal; }\n" +
"\n" +
"@supports (-ms-accelerator: true) {\n" +
"  .swal2-range input {\n" +
"    width: 100% !important; }\n" +
"  .swal2-range output {\n" +
"    display: none; } }\n" +
"\n" +
"@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n" +
"  .swal2-range input {\n" +
"    width: 100% !important; }\n" +
"  .swal2-range output {\n" +
"    display: none; } }\n" +
"\n" +
"@-moz-document url-prefix() {\n" +
"  .swal2-close:focus {\n" +
"    outline: 2px solid rgba(50, 100, 150, 0.4); } }\n" +
"\n" +
".swal2-icon {\n" +
"  position: relative;\n" +
"  justify-content: center;\n" +
"  width: 5em;\n" +
"  height: 5em;\n" +
"  margin: 1.25em auto 1.875em;\n" +
"  border: .25em solid transparent;\n" +
"  border-radius: 50%;\n" +
"  line-height: 5em;\n" +
"  cursor: default;\n" +
"  box-sizing: content-box;\n" +
"  -webkit-user-select: none;\n" +
"     -moz-user-select: none;\n" +
"      -ms-user-select: none;\n" +
"          user-select: none;\n" +
"  zoom: normal; }\n" +
"  .swal2-icon-text {\n" +
"    font-size: 3.75em; }\n" +
"  .swal2-icon.swal2-error {\n" +
"    border-color: #f27474; }\n" +
"    .swal2-icon.swal2-error .swal2-x-mark {\n" +
"      position: relative;\n" +
"      flex-grow: 1; }\n" +
"    .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n" +
"      display: block;\n" +
"      position: absolute;\n" +
"      top: 2.3125em;\n" +
"      width: 2.9375em;\n" +
"      height: .3125em;\n" +
"      border-radius: .125em;\n" +
"      background-color: #f27474; }\n" +
"      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n" +
"        left: 1.0625em;\n" +
"        -webkit-transform: rotate(45deg);\n" +
"                transform: rotate(45deg); }\n" +
"      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n" +
"        right: 1em;\n" +
"        -webkit-transform: rotate(-45deg);\n" +
"                transform: rotate(-45deg); }\n" +
"  .swal2-icon.swal2-warning {\n" +
"    border-color: #facea8;\n" +
"    color: #f8bb86; }\n" +
"  .swal2-icon.swal2-info {\n" +
"    border-color: #9de0f6;\n" +
"    color: #3fc3ee; }\n" +
"  .swal2-icon.swal2-question {\n" +
"    border-color: #c9dae1;\n" +
"    color: #87adbd; }\n" +
"  .swal2-icon.swal2-success {\n" +
"    border-color: #a5dc86; }\n" +
"    .swal2-icon.swal2-success [class^='swal2-success-circular-line'] {\n" +
"      position: absolute;\n" +
"      width: 3.75em;\n" +
"      height: 7.5em;\n" +
"      -webkit-transform: rotate(45deg);\n" +
"              transform: rotate(45deg);\n" +
"      border-radius: 50%; }\n" +
"      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n" +
"        top: -.4375em;\n" +
"        left: -2.0635em;\n" +
"        -webkit-transform: rotate(-45deg);\n" +
"                transform: rotate(-45deg);\n" +
"        -webkit-transform-origin: 3.75em 3.75em;\n" +
"                transform-origin: 3.75em 3.75em;\n" +
"        border-radius: 7.5em 0 0 7.5em; }\n" +
"      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n" +
"        top: -.6875em;\n" +
"        left: 1.875em;\n" +
"        -webkit-transform: rotate(-45deg);\n" +
"                transform: rotate(-45deg);\n" +
"        -webkit-transform-origin: 0 3.75em;\n" +
"                transform-origin: 0 3.75em;\n" +
"        border-radius: 0 7.5em 7.5em 0; }\n" +
"    .swal2-icon.swal2-success .swal2-success-ring {\n" +
"      position: absolute;\n" +
"      top: -.25em;\n" +
"      left: -.25em;\n" +
"      width: 100%;\n" +
"      height: 100%;\n" +
"      border: 0.25em solid rgba(165, 220, 134, 0.3);\n" +
"      border-radius: 50%;\n" +
"      z-index: 2;\n" +
"      box-sizing: content-box; }\n" +
"    .swal2-icon.swal2-success .swal2-success-fix {\n" +
"      position: absolute;\n" +
"      top: .5em;\n" +
"      left: 1.625em;\n" +
"      width: .4375em;\n" +
"      height: 5.625em;\n" +
"      -webkit-transform: rotate(-45deg);\n" +
"              transform: rotate(-45deg);\n" +
"      z-index: 1; }\n" +
"    .swal2-icon.swal2-success [class^='swal2-success-line'] {\n" +
"      display: block;\n" +
"      position: absolute;\n" +
"      height: .3125em;\n" +
"      border-radius: .125em;\n" +
"      background-color: #a5dc86;\n" +
"      z-index: 2; }\n" +
"      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='tip'] {\n" +
"        top: 2.875em;\n" +
"        left: .875em;\n" +
"        width: 1.5625em;\n" +
"        -webkit-transform: rotate(45deg);\n" +
"                transform: rotate(45deg); }\n" +
"      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='long'] {\n" +
"        top: 2.375em;\n" +
"        right: .5em;\n" +
"        width: 2.9375em;\n" +
"        -webkit-transform: rotate(-45deg);\n" +
"                transform: rotate(-45deg); }\n" +
"\n" +
".swal2-progresssteps {\n" +
"  align-items: center;\n" +
"  margin: 0 0 1.25em;\n" +
"  padding: 0;\n" +
"  font-weight: 600; }\n" +
"  .swal2-progresssteps li {\n" +
"    display: inline-block;\n" +
"    position: relative; }\n" +
"  .swal2-progresssteps .swal2-progresscircle {\n" +
"    width: 2em;\n" +
"    height: 2em;\n" +
"    border-radius: 2em;\n" +
"    background: #3085d6;\n" +
"    color: #fff;\n" +
"    line-height: 2em;\n" +
"    text-align: center;\n" +
"    z-index: 20; }\n" +
"    .swal2-progresssteps .swal2-progresscircle:first-child {\n" +
"      margin-left: 0; }\n" +
"    .swal2-progresssteps .swal2-progresscircle:last-child {\n" +
"      margin-right: 0; }\n" +
"    .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep {\n" +
"      background: #3085d6; }\n" +
"      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progresscircle {\n" +
"        background: #add8e6; }\n" +
"      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progressline {\n" +
"        background: #add8e6; }\n" +
"  .swal2-progresssteps .swal2-progressline {\n" +
"    width: 2.5em;\n" +
"    height: .4em;\n" +
"    margin: 0 -1px;\n" +
"    background: #3085d6;\n" +
"    z-index: 10; }\n" +
"\n" +
"[class^='swal2'] {\n" +
"  -webkit-tap-highlight-color: transparent; }\n" +
"\n" +
".swal2-show {\n" +
"  -webkit-animation: swal2-show 0.3s;\n" +
"          animation: swal2-show 0.3s; }\n" +
"  .swal2-show.swal2-noanimation {\n" +
"    -webkit-animation: none;\n" +
"            animation: none; }\n" +
"\n" +
".swal2-hide {\n" +
"  -webkit-animation: swal2-hide 0.15s forwards;\n" +
"          animation: swal2-hide 0.15s forwards; }\n" +
"  .swal2-hide.swal2-noanimation {\n" +
"    -webkit-animation: none;\n" +
"            animation: none; }\n" +
"\n" +
"[dir='rtl'] .swal2-close {\n" +
"  right: auto;\n" +
"  left: 0; }\n" +
"\n" +
".swal2-animate-success-icon .swal2-success-line-tip {\n" +
"  -webkit-animation: swal2-animate-success-line-tip 0.75s;\n" +
"          animation: swal2-animate-success-line-tip 0.75s; }\n" +
"\n" +
".swal2-animate-success-icon .swal2-success-line-long {\n" +
"  -webkit-animation: swal2-animate-success-line-long 0.75s;\n" +
"          animation: swal2-animate-success-line-long 0.75s; }\n" +
"\n" +
".swal2-animate-success-icon .swal2-success-circular-line-right {\n" +
"  -webkit-animation: swal2-rotate-success-circular-line 4.25s ease-in;\n" +
"          animation: swal2-rotate-success-circular-line 4.25s ease-in; }\n" +
"\n" +
".swal2-animate-error-icon {\n" +
"  -webkit-animation: swal2-animate-error-icon 0.5s;\n" +
"          animation: swal2-animate-error-icon 0.5s; }\n" +
"  .swal2-animate-error-icon .swal2-x-mark {\n" +
"    -webkit-animation: swal2-animate-error-x-mark 0.5s;\n" +
"            animation: swal2-animate-error-x-mark 0.5s; }\n" +
"\n" +
"@-webkit-keyframes swal2-rotate-loading {\n" +
"  0% {\n" +
"    -webkit-transform: rotate(0deg);\n" +
"            transform: rotate(0deg); }\n" +
"  100% {\n" +
"    -webkit-transform: rotate(360deg);\n" +
"            transform: rotate(360deg); } }\n" +
"\n" +
"@keyframes swal2-rotate-loading {\n" +
"  0% {\n" +
"    -webkit-transform: rotate(0deg);\n" +
"            transform: rotate(0deg); }\n" +
"  100% {\n" +
"    -webkit-transform: rotate(360deg);\n" +
"            transform: rotate(360deg); } }");

/***/ }),

/***/ "./src/app/calendar/activity-log/activity-log.component.css":
/*!******************************************************************!*\
  !*** ./src/app/calendar/activity-log/activity-log.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL2FjdGl2aXR5LWxvZy9hY3Rpdml0eS1sb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/calendar/activity-log/activity-log.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/calendar/activity-log/activity-log.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <p class=\"text-left title clrs-h4-font\" style=\"color: darkslategray\">My Cumulative Time Sheet for Period</p>\n    </div>\n    <div class=\"row col-md-6\">\n      <div class=\"col-md-6\">\n        <ng-select [items]=\"timesheetCollection | async\" bindLabel=\"name\" name=\"sPeriod\" placeholder=\"Select Start\"\n          [(ngModel)]=\"selectedStartDate\"></ng-select><!--  (change)=\"setPeriod()\" -->\n      </div>\n      <div class=\"col-md-6\">\n        <ng-select [items]=\"timesheetCollection | async\" bindLabel=\"name\" name=\"sPeriod\" placeholder=\"Select Last\"\n          [(ngModel)]=\"selectedEndDate\"></ng-select><!--  (change)=\"setPeriod()\" -->\n      </div>\n    </div>\n    <div class=\"col-md-2\" style=\"margin-top: 9px;\">\n      <button class=\"btn-link btn-magnify\" (click)=\"setPeriod()\">Search</button>\n    </div>\n  </div>\n  <div class=\"card-content table-responsive table-full-width\">\n    <table class=\"table table-striped\">\n      <thead class=\"title clrs-h4-font\">\n        <th class=\"text-left table td-clrs\">Task Activity</th>\n        <th class=\"table td-clrs\">Start Date</th>\n        <th class=\"table td-clrs\">End Date</th>\n        <th class=\"text-right table td-clrs\">Hours Spent</th>\n      </thead>\n      <tbody>\n        <!-- <tr *ngFor=\"let action of actionItemsTotals | async\"> -->\n        <!-- <tr *ngFor=\"let action of viewPeriodTimeSheets | async\"> -->\n        <tr *ngFor=\"let action of ActionArrayAll\">\n          <!-- <ng-container *ngIf=\"action.id !== 'lapsed'; else showLapsedField\"> -->\n            <td class=\"text-left table td-clrs\">{{ action.name }} <span *ngIf=\"action.projectName !='' \">\n                :{{ action.projectName }}</span></td>\n            <!-- <td>{{ moment(action.actualStart).format('MMMM Do YYYY, h:mm:ss a') }}</td>\n            <td>{{ moment(action.actualEnd).format('MMMM Do YYYY,h:mm:ss a') }}</td> -->\n            <td class=\"table td-clrs\">{{ action.actualStart }}</td>\n            <td class=\"table td-clrs\">{{ action.actualEnd }}</td>\n            <td class=\"text-right table td-clrs\" style=\"padding-right:15px\">{{ action.Hours }}</td>\n            <!-- <td>{{ action.workHours }}</td> -->\n            <!-- <td *ngIf=\"action.id == 'lapsed'; else showLapsedField\">{{ action.workHours }}</td> -->\n          <!-- </ng-container> -->\n          <ng-template #showLapsedField>\n            <td class=\"text-left table td-clrs\">{{ action.name }}<span *ngIf=\"action.projectName !='' \">\n                :{{ action.projectName }}</span></td>\n            <td class=\"table td-clrs\">{{ action.actualStart }}</td>\n            <td class=\"table td-clrs\">{{ action.actualEnd }}</td>\n            <!-- <td class=\"table td-clrs\">{{ action.Hours }}</td> -->\n            <!-- <td class=\"text-right table td-clrs\" style=\"padding-right:2em\">{{ action.wrkHours }}</td> -->\n            <td class=\"text-right table td-clrs\" style=\"padding-right:15px\">{{ mlapsdata }}</td>\n          </ng-template>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/calendar/activity-log/activity-log.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/calendar/activity-log/activity-log.component.ts ***!
  \*****************************************************************/
/*! exports provided: ActivityLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityLogComponent", function() { return ActivityLogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _services_enterprise_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/enterprise.service */ "./src/app/services/enterprise.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_personal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/personal.service */ "./src/app/services/personal.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var app_services_project_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/services/project.service */ "./src/app/services/project.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ActivityLogComponent = /** @class */ (function () {
    function ActivityLogComponent(auth, pns, afAuth, es, ps, afs, location, renderer, element, router, as) {
        var _this = this;
        this.auth = auth;
        this.pns = pns;
        this.afAuth = afAuth;
        this.es = es;
        this.ps = ps;
        this.afs = afs;
        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.as = as;
        this.selectedStartDate = null;
        this.selectedEndDate = null;
        afAuth.user.subscribe(function (user) {
            _this.userId = user.uid;
            _this.user = user;
            _this.coloursUsername = user.displayName;
            console.log(_this.userId);
            console.log(_this.user);
            _this.companies = es.getCompanies(user.uid);
            _this.projects = es.getProjects(user.uid);
            _this.myProjects = es.getPersonalProjects(user.uid);
            _this.classifications = pns.getClassifications(user.uid);
            _this.dataCall();
        });
    }
    ActivityLogComponent.prototype.setPeriod = function () {
        if (this.selectedStartDate !== null) {
            if (this.selectedEndDate !== null) {
                console.log(this.selectedEndDate);
                // if (this.selectedStartDate.id !== this.setStartDate && this.selectedStartDate.id !== this.setStartDate) {
                this.revStrtDate = this.selectedStartDate.id;
                this.revEndDate = this.selectedEndDate.id;
            }
            console.log(this.selectedStartDate);
        }
        if (this.selectedEndDate !== null) {
            // if (this.selectedStartDate.id !== this.setStartDate) {
            console.log(this.selectedEndDate);
            this.revEndDate = this.selectedEndDate.id;
        }
        this.viewEnterprises();
        console.log('ýapedza');
    };
    ActivityLogComponent.prototype.viewEnterprises = function () {
        var _this = this;
        var selectedStartDate = this.revStrtDate;
        var selectedEndDate = this.revEndDate;
        this.setStartDate = this.revStrtDate;
        this.setdEndDate = this.revEndDate;
        // this.viewPeriodTimeSheets = this.afs.collection('Users').doc(this.userId).collection('TimeSheets');
        var sheetRef = this.afs.collection('Users').doc(this.userId).collection('TimeSheets');
        var viewPeriodTimeSheets;
        var ActionArrayAll = [];
        this.ActionArrayAll = [];
        this.actionItemsTotals.subscribe(function (dateSheets) {
            dateSheets.forEach(function (element) {
                var myActs = _this.afs.collection('Users').doc(_this.userId).collection('TimeSheets').doc(element.id).collection('actionItems');
                _this.viewPeriodTimeSheets = _this.afs.collection('Users').doc(_this.userId).collection('TimeSheets').doc(element.id).collection('actionItems').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    var workStatus = 0;
                    var mlapsdata;
                    var strtTym = data.actualStart;
                    // let mlapsdata
                    // data.Hours = String(moment(moment(data.actualStart).diff(moment(data.actualEnd))).format('hh:mm:ss'));
                    if (data.name !== 'Lapsed') {
                        data.actualStart = String(moment__WEBPACK_IMPORTED_MODULE_9__(data.actualStart).format('MMMM Do YYYY, h:mm:ss a'));
                        // console.log('start,', data.actualStart);
                        data.actualEnd = String(moment__WEBPACK_IMPORTED_MODULE_9__(data.actualEnd).format('MMMM Do YYYY, h:mm:ss a'));
                        // console.log('end,', data.actualEnd);
                        // myActs.doc(id).update({ 'actualStart': data.actualStart });
                        // myActs.doc(id).update({ 'actualEnd': data.actualEnd });
                        var tot_1 = 0;
                        if (data.workHours !== null) {
                            data.workHours.forEach(function (element) {
                                tot_1 = tot_1 + 1;
                            });
                        }
                        else {
                        }
                        // tot = data.workHours.length
                        // console.log(tot);
                        // console.log(moment(strtTym).add(tot, 'h'));
                        // data.Hours = String(moment(moment(data.actualStart).diff(moment(data.actualEnd))).format('hh'));
                        data.Hours = String(moment__WEBPACK_IMPORTED_MODULE_9__(strtTym).add(tot_1, 'h').format('hh'));
                        // console.log(data.Hours);
                    }
                    if (data.name === 'Lapsed') {
                        var lapData = myActs.doc('lapsed').collection('lapses').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
                            var data = a.payload.doc.data();
                            var id = a.payload.doc.id;
                            return __assign({ id: id }, data);
                        }); }));
                        lapData.subscribe(function (ldata) {
                            // console.log(ldata);
                            mlapsdata = (ldata.length);
                            _this.mlapsdata = mlapsdata;
                            // console.log(mlapsdata);
                        });
                        // data.wrkHours = String(mlapsdata)
                    }
                    return __assign({ id: id }, data);
                }); }));
                _this.viewPeriodTimeSheets.subscribe(function (dateSheetActions) {
                    console.log(dateSheetActions);
                    dateSheetActions.forEach(function (act) {
                        var meool = act;
                        console.log(meool);
                        console.log('hellllloooooooooooooooooooooooooooooooooooooooooooooooo');
                        ActionArrayAll.push(act);
                        _this.ActionArrayAll.push(act);
                        // filer using parameters
                        console.log(selectedStartDate);
                        console.log(_this.revStrtDate);
                        console.log(selectedEndDate);
                        console.log(meool.actualStart);
                        if (moment__WEBPACK_IMPORTED_MODULE_9__(meool.actualStart, 'DD-MM-YYYY').isSameOrAfter(selectedStartDate)) {
                            console.log(meool.name);
                            ActionArrayAll.push(meool);
                            _this.ActionArrayAll.push(meool);
                        }
                        // }
                        // console.log(ActionArrayAll);
                    });
                });
            });
            // this.ActionArrayAll = ActionArrayAll;/
            // console.log(ActionArrayAll);
            // console.log(this.ActionArrayAll);
        });
        return ActionArrayAll;
    };
    ActivityLogComponent.prototype.ArchviewEnterprises = function (selectedStartDate, selectedEndDate) {
        var _this = this;
        // this.viewPeriodTimeSheets = this.afs.collection('Users').doc(this.userId).collection('TimeSheets');
        var sheetRef = this.afs.collection('Users').doc(this.userId).collection('TimeSheets');
        var viewPeriodTimeSheets;
        var ActionArrayAll = [];
        this.ActionArrayAll = [];
        this.actionItemsTotals.subscribe(function (dateSheets) {
            dateSheets.forEach(function (element) {
                var myLapses = _this.afs.collection('Users').doc(_this.userId).collection('TimeSheets').doc(element.id).collection('actionItems');
                _this.viewPeriodTimeSheets = _this.afs.collection('Users').doc(_this.userId).collection('TimeSheets').doc(element.id).collection('actionItems').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    var workStatus = 0;
                    var mlapsdata;
                    var strtTym = data.actualStart;
                    // let mlapsdata
                    // data.Hours = String(moment(moment(data.actualStart).diff(moment(data.actualEnd))).format('hh:mm:ss'));
                    if (data.name !== 'Lapsed') {
                        data.actualStart = String(moment__WEBPACK_IMPORTED_MODULE_9__(data.actualStart).format('MMMM Do YYYY, h:mm:ss a'));
                        console.log('start,', data.actualStart);
                        data.actualEnd = String(moment__WEBPACK_IMPORTED_MODULE_9__(data.actualEnd).format('MMMM Do YYYY, h:mm:ss a'));
                        console.log('end,', data.actualEnd);
                        var tot_2 = 0;
                        if (data.workHours !== null) {
                            data.workHours.forEach(function (element) {
                                tot_2 = tot_2 + 1;
                            });
                        }
                        else {
                        }
                        // tot = data.workHours.length
                        console.log(tot_2);
                        console.log(moment__WEBPACK_IMPORTED_MODULE_9__(strtTym).add(tot_2, 'h'));
                        // data.Hours = String(moment(moment(data.actualStart).diff(moment(data.actualEnd))).format('hh'));
                        data.Hours = String(moment__WEBPACK_IMPORTED_MODULE_9__(strtTym).add(tot_2, 'h').format('hh'));
                        console.log(data.Hours);
                    }
                    if (data.name === 'Lapsed') {
                        var lapData = myLapses.doc('lapsed').collection('lapses').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
                            var data = a.payload.doc.data();
                            var id = a.payload.doc.id;
                            return __assign({ id: id }, data);
                        }); }));
                        lapData.subscribe(function (ldata) {
                            console.log(ldata);
                            mlapsdata = (ldata.length);
                            _this.mlapsdata = mlapsdata;
                            console.log(mlapsdata);
                        });
                        data.wrkHours = String(mlapsdata);
                    }
                    return __assign({ id: id }, data);
                }); }));
                _this.viewPeriodTimeSheets.subscribe(function (dateSheetActions) {
                    dateSheetActions.forEach(function (act) {
                        var meool = act;
                        console.log(meool);
                        ActionArrayAll.push(act);
                        _this.ActionArrayAll.push(act);
                        // filer using parameters
                        console.log(selectedStartDate);
                        console.log(selectedEndDate);
                        var revStrtDate = selectedStartDate.id;
                        var revEndDate = selectedEndDate.id;
                        if (selectedStartDate !== null && selectedEndDate !== null) {
                            if (moment__WEBPACK_IMPORTED_MODULE_9__(meool.actualStart, 'DD-MM-YYYY').isSameOrBefore(moment__WEBPACK_IMPORTED_MODULE_9__(revStrtDate, 'DD-MM-YYYY')) || moment__WEBPACK_IMPORTED_MODULE_9__(meool.actualEnd, 'DD-MM-YYYY').isSameOrAfter(moment__WEBPACK_IMPORTED_MODULE_9__(revEndDate, 'DD-MM-YYYY'))) {
                                ActionArrayAll.push(act);
                                _this.ActionArrayAll.push(act);
                            }
                        }
                        if (selectedStartDate !== null) {
                            if (moment__WEBPACK_IMPORTED_MODULE_9__(meool.actualStart, 'DD-MM-YYYY').isSameOrBefore(revStrtDate)) {
                                ActionArrayAll.push(act);
                                _this.ActionArrayAll.push(act);
                            }
                        }
                        if (selectedEndDate !== null) {
                            if (moment__WEBPACK_IMPORTED_MODULE_9__(meool.actualEnd, 'DD-MM-YYYY').isSameOrAfter(revEndDate)) {
                                ActionArrayAll.push(act);
                                _this.ActionArrayAll.push(act);
                            }
                        }
                        console.log(ActionArrayAll);
                    });
                });
            });
            _this.ActionArrayAll = ActionArrayAll;
            console.log(ActionArrayAll);
            console.log(_this.ActionArrayAll);
        });
        return ActionArrayAll;
    };
    ActivityLogComponent.prototype.dataCall = function () {
        this.myDocument = this.afs.collection('Users').doc(this.userId);
        this.timesheetCollection = this.myDocument.collection('TimeSheets').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.actionItemsTotals = this.afs.collection('Users').doc(this.userId).collection('TimeSheets').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        return;
    };
    ActivityLogComponent.prototype.ngOnInit = function () {
    };
    ActivityLogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activity-log',
            template: __webpack_require__(/*! ./activity-log.component.html */ "./src/app/calendar/activity-log/activity-log.component.html"),
            styles: [__webpack_require__(/*! ./activity-log.component.css */ "./src/app/calendar/activity-log/activity-log.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _services_personal_service__WEBPACK_IMPORTED_MODULE_8__["PersonalService"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _services_enterprise_service__WEBPACK_IMPORTED_MODULE_4__["EnterpriseService"], app_services_project_service__WEBPACK_IMPORTED_MODULE_10__["ProjectService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ActivityLogComponent);
    return ActivityLogComponent;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.component.css":
/*!*************************************************!*\
  !*** ./src/app/calendar/calendar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".act-colors {\r\n    height: 200px;\r\n}\r\n\r\n/* .scroll-em {\r\n    height: 110px;\r\n    overflow: auto;\r\n    white-space: nowrap;\r\n\r\n}\r\n\r\ndiv.scrollmenu {\r\n    background-color: #333;\r\n    overflow: auto;\r\n    white-space: nowrap;\r\n} */\r\n\r\n.clrs-h4-font {\r\n    /* font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */\r\n    font-family: ABeeZee;\r\n    /* color: steelblue; */\r\n    color: #333366;\r\n    font-size: 18px;\r\n    \r\n}\r\n\r\n.clrs-h1-font {\r\n    /* font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */\r\n    font-family: ABeeZee;\r\n    /* color: steelblue; */\r\n    color: #333366;\r\n    /* font-size: 18px; */\r\n    font-size: 23px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUg7SUFDSSxrRkFBa0Y7SUFDbEYsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZUFBZTs7QUFFbkI7O0FBR0E7SUFDSSxrRkFBa0Y7SUFDbEYsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGVBQWU7O0FBRW5CIiwiZmlsZSI6InNyYy9hcHAvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3QtY29sb3JzIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi8qIC5zY3JvbGwtZW0ge1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbn1cclxuXHJcbmRpdi5zY3JvbGxtZW51IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn0gKi9cclxuXHJcbi5jbHJzLWg0LWZvbnQge1xyXG4gICAgLyogZm9udC1mYW1pbHk6J0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjsgKi9cclxuICAgIGZvbnQtZmFtaWx5OiBBQmVlWmVlO1xyXG4gICAgLyogY29sb3I6IHN0ZWVsYmx1ZTsgKi9cclxuICAgIGNvbG9yOiAjMzMzMzY2O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4uY2xycy1oMS1mb250IHtcclxuICAgIC8qIGZvbnQtZmFtaWx5OidHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7ICovXHJcbiAgICBmb250LWZhbWlseTogQUJlZVplZTtcclxuICAgIC8qIGNvbG9yOiBzdGVlbGJsdWU7ICovXHJcbiAgICBjb2xvcjogIzMzMzM2NjtcclxuICAgIC8qIGZvbnQtc2l6ZTogMThweDsgKi9cclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/calendar/calendar.component.html":
/*!**************************************************!*\
  !*** ./src/app/calendar/calendar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"row\">\n          <div class=\"col-md-10\">\n            <div class=\"card-header\" *ngIf=\"afAuth.user | async as user\" style=\" margin-top: -2.5em;\">\n              <!-- <h4 class=\"card-category clrs-h1-font\"> -->\n              <h4 class=\"card-category clrs-h1-font\"><!-- style=\"height: 28px; font-size: 8;\" clrs-h4-font -->\n                Hi : {{ user.displayName }}\n                <!-- Hi {{ myData.name }} -->\n              </h4>\n            </div>\n          </div>\n          <div class=\"col-md-2\">\n            <!-- <button class=\"btn-link btn-magnify\" (click)=\"Update()\">Update</button> -->\n            <button class=\"btn-link btn-magnify\" (click)=\"update2()\">Update</button>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"clrs-tabs\">\n              <div class=\"nav-tabs-navigation vertical-navs\">\n                <div class=\"nav-tabs-wrapper\">\n                  <ul class=\"nav nav-tabs flex-column nav-stacked text-left\" role=\"tablist\">\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link active\" href=\"#dash\" role=\"tab\" (click)=\"minimizeSidebar()\" data-toggle=\"tab\">Dashboard</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#standards\" role=\"tab\" (click)=\"minimizeSidebar()\" data-toggle=\"tab\">Standards</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#setup\" (click)=\"minimizeSidebar()\" role=\"tab\" data-toggle=\"tab\">Setup</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#planning\" (click)=\"minimizeSidebar()\" role=\"tab\" data-toggle=\"tab\">Planning</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#implem\" (click)=\"minimizeSidebar()\" role=\"tab\" data-toggle=\"tab\">Implementation</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#reports\" (click)=\"minimizeSidebar()\" role=\"tab\" data-toggle=\"tab\">Reporting</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link nav-colors\" href=\"#popups\" (click)=\"minimizeSidebar();\" role=\"tab\" data-toggle=\"tab\">Diary</a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-9 col-md-8 col-sm-8 col-8 ml-auto mr-auto\" style=\"padding-right: 0px;padding-left: 0px;\"> <!--  dash-size  -->\n              <div class=\"tab-content\" style=\"padding-left:0px\">\n                <div class=\"tab-pane active\" id=\"dash\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-3 col-sm-4 dash-col-left\">\n                      <div class=\"card card-category\">\n                        <div class=\"btn-magnify\">\n                          <div class=\"row col-md-12\" style=\"margin-left:1em; padding-bottom: -1em \">\n                            <div class=\"pull-left card-category clrs-h1-font\">\n                              <a>\n                                <i class=\"nc-icon nc-palette\"></i> Colours Personal</a>\n                            </div>\n                          </div>\n                          <div class=\"pull-left col-md-10\" style=\"margin-left:1em;padding-top: -1em; color: steelblue \">\n                            <a>My Diary Today</a>\n                          </div>\n                          <div class=\"spacer\" style=\"height: 2.4em;\"></div>\n                          <div class=\"row\" style=\"height: 100px\" >\n                            <div  id=\"container\">\n                              <!-- <div class=\"content container scroll-em\" *ngIf=\"showActions\"> -->\n                              <div class=\"content container scroll-em\" *ngIf=\"myActionItems.length != 0\">\n                                <ol>\n                                  <!-- <li style=\"color:lightgrey\" class=\"mr-auto ml-auto\" *ngFor=\"let event of theseTasks\"><a>{{ event.name }}</a><br><small class=\"label text-success\"> {{ event.when }}</small>\n                                  </li> ->\n                                  <!- <li class=\"\" style=\"color:steelblue\" *ngFor=\"let event of theseTasks\"> ->\n                                  <!- <li class=\"\" style=\"color:steelblue\" *ngFor=\"let event of viewActions | async\"> -->\n                                  <li class=\"\" style=\"color:steelblue\" *ngFor=\"let event of myActionItems\">\n                                    <!-- <div class=\"row\"> -->\n                                      <div class=\"col-sm-12\" style=\"margin-left: 2px; margin-right:-.5em\"><!-- margin-left:1.0em; -->\n                                        <a style=\"color:slategrey\">\n                                          {{ event.name }}<span class=\"label text-warning\"> {{ event.when }}</span>\n                                        </a>\n                                      </div>\n                                    <!-- </div> -->\n                                  </li>\n                                </ol>\n                              </div>\n                              <!-- <div class=\"content container scroll-em\" *ngIf=\"hideActions\"> -->\n                              <div class=\"content container scroll-em\" *ngIf=\"myActionItems.length === 0\">\n                                <div class=\"row\">\n                                  <div class=\"col-sm-12\" style=\"margin-left:-.5em; margin-right:-.5em\">\n                                    <ol>\n                                      <li>\n                                        <!-- <div class=\"row\"> -->\n                                          <a style=\"color:lightgrey\">\n                                            <span class=\"col-md-9 text-info\">Meeting</span>\n                                            <span class=\"col-md-3 mr-auto number text-warning\"> 1000 hrs</span>\n                                          </a>\n                                        <!-- </div> -->\n                                      </li>\n                                      <li>\n                                        <!-- <div class=\"row\"> -->\n                                            <a style=\"color:lightgrey\">\n                                              <span class=\"col-md-9 text-info\">Email</span>\n                                              <span class=\"col-md-3 mr-auto ml-auto number text-success\">1230 Hrs</span>\n                                            </a>\n                                        <!-- </div> -->\n                                      </li>\n                                      <li>\n                                        <!-- <div class=\"row\"> -->\n                                          <a style=\"color:lightgrey\">\n                                            <span class=\"col-md-9 text-info\">Skype</span>\n                                            <span class=\"col-md-3 mr-auto ml-auto label text-success\"> 1400 Hrs </span>\n                                          </a>\n                                        <!-- </div> -->\n                                      </li>\n                                      <li>\n                                        <!-- <div class=\"row \"> -->\n                                          <a style=\"color:lightgrey\">\n                                            <span class=\"col-md-9 text-info\">Scheduling</span>\n                                            <span class=\"col-lg-3 mr-auto ml-auto label text-success\"> 0800 Hrs </span>\n                                          </a>\n                                        <!-- </div> -->\n                                      </li>\n                                    </ol>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <!-- <div class=\"card-body\">\n                          <h6 class=\"big-title\">total earnings in last ten quarters</h6>\n                          <canvas id=\"activeUsers\" width=\"auto\" height=\"200\"></canvas>\n                        </div> -->\n                        <div class=\"card-footer\">\n                          <hr>\n                          <div class=\"row\">\n                            <div class=\"col-sm-7\">\n                              <div class=\"footer-title\">View more.....</div>\n                            </div>\n                            <div class=\"col-sm-5\">\n                              <div class=\"pull-right\">\n                                <button class=\"btn btn-success btn-round btn-icon btn-sm\">\n                                  <i class=\"nc-icon nc-simple-add\"></i>\n                                </button>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-xs-3 col-sm-4 dash-col\">\n                      <div class=\"card card-category\">\n                        <div class=\"btn-magnify\">\n                          <div class=\"row col-md-12\" style=\"margin-left:1em; padding-bottom: -1em \">\n                            <div class=\"pull-left card-category clrs-h1-font\">\n                              <a>\n                                <i class=\"fa fa-folder-o [&#xf114;]\"></i> Colours Projects</a>\n                            </div>\n                          </div>\n                          <!-- <hr class=\"line\" style=\"padding-bottom:0em; padding-top: -1em\"> -->\n                          <!-- <div class=\"pull-left col-md-12 card-category\" style=\"margin-left:2em;padding-top: -1em; color: steelblue; \"> -->\n                          <div class=\"pull-left col-md-12\" style=\"margin-left:1em;padding-top: -1em; color: steelblue; \">\n                            <a>My Current Priority Projects</a>\n                          </div>\n                          <div class=\"spacer\" style=\"height:2.4em;\"></div>\n                          <div class=\"col-sm-10\" id=\"pTasklist\" style=\"height: 100px\"><!--  style=\"margin-left: 2em\" -->\n                            <div class=\"content container scroll-em\" *ngIf=\"showProjs\">\n                              <ol>\n                                  <li class=\"col-xs-12 ml-auto mr-auto\" style=\"color:steelblue\" *ngFor=\"let project of myProjects | async\"><a [routerLink]=\"[ '/projects/', project.id ]\" style=\"color:slategray\"><span class=\"text-info\">{{ project.name }}</span></a>\n                                  </li>\n                              </ol>\n                            </div>\n                            <div class=\"content container scroll-em\" *ngIf=\"hideProjs\">\n                              <div class=\"row\">\n                                <div class=\"col-sm-12\" style=\"margin-left:-.5em; margin-right:-.5em\">\n                                  <ol>\n                                    <li>\n                                      <!-- <div class=\"row\"> -->\n                                        <a style=\"color:lightgrey\">\n                                          <span class=\"col-md-12 text-info\">Project 1</span>\n                                        </a>\n                                      <!-- </div> -->\n                                    </li>\n                                    <li>\n                                      <!-- <div class=\"row\"> -->\n                                        <a style=\"color:lightgrey\">\n                                          <span class=\"col-md-12 text-info\">Project 2</span>\n                                        </a>\n                                      <!-- </div> -->\n                                    </li>\n                                    <li>\n                                      <!-- <div class=\"row\"> -->\n                                        <a style=\"color:lightgrey\">\n                                          <span class=\"col-md-12 text-info\">Project 3</span>\n                                        </a>\n                                      <!-- </div> -->\n                                    </li>\n                                    <li>\n                                      <!-- <div class=\"row \"> -->\n                                        <a style=\"color:lightgrey\">\n                                          <span class=\"col-md-12 text-info\">Project 4</span>\n                                        </a>\n                                      <!-- </div> -->\n                                    </li>\n                                  </ol>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <!-- <div class=\"card-body\">\n                          <h6 class=\"big-title\">total subscriptions in last 7 days</h6>\n                          <canvas id=\"emailsCampaignChart\" width=\"auto\" height=\"200\"></canvas>\n                        </div> -->\n                        <div class=\"card-footer\">\n                          <hr>\n                          <div class=\"row\">\n                            <div class=\"col-sm-7\">\n                              <div class=\"footer-title\">View more.....</div>\n                            </div>\n                            <div class=\"col-sm-5\">\n                              <div class=\"pull-right\">\n                                <button class=\"btn btn-danger btn-round btn-icon btn-sm\">\n                                  <i class=\"nc-icon nc-button-play\"></i>\n                                </button>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-xs-3 col-sm-4 ml-auto mar-auto dash-col-right\">\n                      <div class=\"card card-category\">\n                        <div class=\"btn-magnify\">\n                          <div class=\"row col-md-12 col-xs-12\" style=\"margin-left:2em; padding-bottom: -1em \">\n                            <div class=\"pull-left card-category clrs-h1-font\">\n                              <a>\n                                <i class=\"nc-icon nc-globe-2\"></i> Colours Enterprise</a>\n                            </div>\n                          </div>\n                          <!-- <hr class=\"line\" style=\"padding-bottom:0em; padding-top: -1em\"> -->\n                          <div class=\"pull-left col-md-12\" style=\"margin-left:2em;padding-top: -1em; color: steelblue; \">\n                            <a>High Priority Enterprise Tasks</a>\n                          </div>\n                          <!-- <div class=\"numbers\" style=\"margin-left:1em; color:rgb(15, 4, 4)\">High Priority Enterprise Tasks</div> -->\n                          <div class=\"spacer\" style=\"height:2.4em;\"></div>\n                          <div id=\"eTasklixt\" style=\"height: 100px\">\n                            <div class=\"content\">\n                              <ol>\n                                <li>\n                                  <!-- <div class=\"row\"> -->\n                                    <div class=\"col-xs-12\" style=\"margin-left:4.0em\">\n                                      <a style=\"color:lightgrey\" class=\"text-info\">Planning\n                                      </a>\n                                    </div>\n                                  <!-- </div> -->\n                                </li>\n                                <li>\n                                  <!-- <div class=\"row\"> -->\n                                    <div class=\"col-xs-12\" style=\"margin-left:4.0em\">\n                                      <a style=\"color:lightgrey\" class=\"text-info\">Business Case\n                                      </a>\n                                    </div>\n                                  <!-- </div> -->\n                                </li>\n                                <li>\n                                  <!-- <div class=\"row\"> -->\n                                    <div class=\"col-sm-12\" style=\"margin-left:3.0em; margin-right:-1em\">\n                                      <a style=\"color:lightgrey\" class=\"text-info\">Design\n                                      </a>\n                                    </div>\n                                  <!-- </div> -->\n                                </li>\n                                <li>\n                                  <!-- <div class=\"row\"> -->\n                                    <div class=\"col-sm-12\" style=\"margin-left:3.0em; margin-right:-1em\">\n                                      <a style=\"color:lightgrey; margin-bottom: 0px;\" class=\"text-info\">Implementation\n                                      </a>\n                                    </div>\n                                  <!-- </div> -->\n                                </li>\n                              </ol>                             \n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"card-footer\">\n                          <hr>\n                          <div class=\"row\">\n                            <div class=\"col-sm-7\">\n                              <div class=\"footer-title\">View more.....</div>\n                            </div>\n                            <div class=\"col-sm-5\">\n                              <div class=\"pull-right\">\n                                <button class=\"btn btn-warning btn-round btn-icon btn-sm\">\n                                  <i class=\"nc-icon nc-alert-circle-i\"></i>\n                                </button>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-pane\" id=\"standards\">\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <p class=\"card-category title clrs-h1-font\" style=\" color:darkslategray\">My Standards</p>\n                      <div class=\"card-content table-responsive table-full-width\">\n                        <table class=\"table table-striped\">\n                          <thead>\n                            <th>Name</th>\n                            <th>Classification</th>\n                            <th>Frequence</th>\n                            <!-- <th></th> -->\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let std of standards | async\">\n                              <td class=\"table td-clrs\">{{ std.name }}</td>\n                              <td class=\"table td-clrs\">{{ std.classificationName }}</td>\n                              <td class=\"table td-clrs\">{{ std.period }}</td>\n                              <!-- <td class=\"table td-clrs\">\n                                <button class=\"info btn-link\" rel=\"tooltip\" title=\"Add / Edit Time Budget\" data-toggle=\"modal\" data-target=\"#timeBudget\"><i\n                                    class=\"fa fa-calendar-plus-o\"></i></button>\n                              </td>\n                              <td class=\"table td-clrs\">\n                                <button class=\"info btn-link\" rel=\"tooltip\" (click)=\"selectStd(std)\" title=\"add Personal standards\"\n                                  data-toggle=\"modal\" data-target=\"#personalStandard\"><i class=\"fa fa-file-text\"></i></button>\n                              </td>\n                              <td class=\"table td-clrs\">\n                                <button class=\"danger btn-link remove\" (click)=\"deleteSTd(std)\"><i class=\"fa fa-times\"></i></button>\n                              </td> -->\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-pane\" id=\"setup\">\n                  <div class=\"col-md-12\">\n                    <!-- <div class=\"col-md-10 col-md-offset-1  \"> -->\n                      <div class=\"\">\n                        <p class=\"clrs-h1-font\" style=\"margin-top:0em; color:darkslategray\">Setup Your Personal Account...</p>\n                        <p class=\"category\" style=\"margin-top:-1em\">Map out your main life activities.\n                          <br>These are task classifications under which you do most of your life's daily activities</p>\n                      </div>\n                      <!-- <div class=\"spacer\" style=\"margin-top:-3em\"></div> -->\n                      <div class=\"card-content table-responsive table-full-width\">\n                        <table class=\"table\">\n                          <p>My Tasks Classifications</p>\n                          <tbody>\n                            <tr *ngFor=\"let classification of classifications | async\">\n                              <td class=\"table td-clrs\" *ngIf=\"classification.name != 'Work'\">{{ classification.name }}</td>\n                              <ng-container>\n                                <td class=\"table td-clrs\" *ngIf=\"classification.name === 'Work'\"><a routerLink=\"/enterprises/create\">Work</a></td>\n                              </ng-container>\n                              <td class=\"table td-clrs\">\n                                <!-- <a class=\"btn warning btn-link btn-icon btn-sm edit\" rel=\"tooltip\" title=\"Edit Classification\"><i class=\"fa fa-edit\"></i></a> -->\n                                <!-- <button class=\"info btn-link\" rel=\"tooltip\" (click)=\"selectClassification(classification)\" title=\"Add / Edit Time Budget\" data-toggle=\"modal\" data-target=\"#timeBudget\"><i class=\"fa fa-calendar-plus-o\"></i></button> -->\n                                <button class=\"info btn-link\" rel=\"tooltip\" title=\"Click to enter your weekly time budget\" data-toggle=\"modal\" data-target=\"#timeBudget\"><i class=\"fa fa-calendar-plus-o\"></i></button>\n                              </td>\n                              <td class=\"table td-clrs\">\n                                <button class=\"info btn-link\" rel=\"tooltip\" (click)=\"selectClassification(classification)\" title=\"Click to enter standards for this classification\" data-toggle=\"modal\" data-target=\"#personalStandard\"><i class=\"fa fa-file-text\"></i></button>\n                              </td>\n                              <td class=\"table td-clrs\">\n                                <button *ngIf=\"classification.name !== 'Work'\" class=\"danger btn-link remove\" (click)=\"deleteClass(classification)\"><i class=\"fa fa-times\"></i></button>\n                              </td>\n                            </tr>\n                            <ng-container *ngIf=\"workdemo\">\n                              <tr style=\"width: inherit\">\n                                <td class=\"table td-clrs\"><a routerLink=\"/enterprises/create\">Work</a></td>\n                                <td class=\"table td-clrs\">\n                                  <!-- <a class=\"btn warning btn-link btn-icon btn-sm edit\" rel=\"tooltip\" title=\"Edit Classification\"><i class=\"fa fa-edit\"></i></a> -->\n                                  <button class=\"info btn-link\" rel=\"tooltip\" (click)=\"addWork();\" title=\"Add / Edit Time Budget\" data-toggle=\"modal\" data-target=\"#timeBudget\"><i class=\"fa fa-calendar-plus-o\"></i></button>\n                                </td><!--  selectClassification(classification) -->\n                                <td class=\"table td-clrs\">\n                                  <button class=\"info btn-link\" rel=\"tooltip\" (click)=\"addWork();\" title=\"add Personal standards\" data-toggle=\"modal\" data-target=\"#personalStandard\"><i class=\"fa fa-file-text\"></i></button>\n                                </td><!--  selectClassification(classification) -->\n                                <td class=\"table td-clrs\">\n                                  <!-- <button class=\"danger btn-link remove\" (click)=\"deleteClass(classification)\"><i class=\"fa fa-times\"></i></button> -->\n                                </td>\n                              </tr>\n                            </ng-container>\n                            <br>\n                            <div class=\"title col-sm-12 control-label\">\n                              <!--  column-sizing -->\n                              <a class=\"title card-category\" style=\"margin-top:0em; color:darkslategray\">Add New Classification</a>\n                            </div>\n                            <tr>\n                              <td class=\"td-size\"><input name=\"classification_name\" placeholder=\"Classification: e.g. Health\"\n                                  class=\"form-control\" style=\"padding-left: 5px; padding-right: 5px;\" [(ngModel)]=\"classification.name\">\n                              </td>\n                              <td style=\"width: 1em; padding-left: 0px; padding-right: 0px; border-left-width: 0px;border-right-width: 0px;\">\n                                <button class=\"primary btn-link\" (click)=\"addClass(classification)\"><b>Add</b></button>\n                              </td>\n                              <td class=\"td-size\"></td>\n                              <td class=\"td-size\"></td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                    <!-- </div> -->\n                  </div>\n                </div>\n                <div class=\"tab-pane\" id=\"planning\">\n                  <app-map-task></app-map-task>\n                </div>\n                <div class=\"tab-pane\" id=\"implem\">\n                  <app-implementation></app-implementation>\n                </div>\n                <div class=\"tab-pane\" id=\"reports\">\n                  <p class=\"clrs-h1-font\" style=\"margin-top:0em; color:darkslategray\">Personal Report...</p>\n\n                  <div class=\"col-md-12\">\n                    <div class=\"card\">\n                      <!-- <div class=\"card-header\">\n                        <h5>Horizontal Tabs</h5>\n                      </div> -->\n                      <div class=\"card-body\" style=\"margin-top: -3em\">\n                        <div class=\"nav-tabs-navigation\">\n                          <div class=\"nav-tabs-wrapper\">\n                            <ul id=\"tabs\" class=\"nav nav-tabs\" role=\"tablist\">\n                              <li class=\"nav-item\">\n                                <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#personal\" role=\"tab\" aria-expanded=\"true\">Private</a>\n                              </li>\n                              <li class=\"nav-item\">\n                                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#public\" role=\"tab\" aria-expanded=\"false\">Public</a>\n                              </li>\n                              <!-- <li class=\"nav-item\">\n                                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#company\" role=\"tab\" aria-expanded=\"false\">Preferences</a>\n                              </li> -->\n                            </ul>\n                          </div>\n                        </div>\n                        <div id=\"my-tab-content\" class=\"tab-content text-center\">\n                          <!-- start Here -->\n                          \n                          \n                          \n                          <div class=\"tab-pane active\" id=\"personal\" role=\"tabpanel\" aria-expanded=\"true\">\n                            <code>personal</code>\n\n                            <!-- <div class=\"col-md-12 ml-auto mr-auto\">\n                              <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                  <p class=\"text-left title \" style=\"color: darkslategray\">\n                                    <span> <a routerLink=\"../total-actions\">Personal Details</a></span>\n                                  </p>\n                                </div>\n                              </div>\n                            </div> -->\n                          \n                          \n                          \n                            <div class=\"col-md-12 ml-auto mr-auto\">\n                              <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                  <p class=\"text-left title \" style=\"color: darkslategray\">\n                                    <span> <a routerLink=\"../../timeSpent-report\">Total time spent on an activity in a period</a></span>\n                                  </p>\n                                </div>\n                              </div>\n                            </div>\n                          \n                          \n                            <div class=\"col-md-12 ml-auto mr-auto\">\n                              <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                  <p class=\"text-left title \" style=\"color: darkslategray\">\n                                    <span> <a routerLink=\"../../activity-reportLog\">Time sheet report in a period</a></span>\n                                  </p>\n                                </div>\n                              </div>\n                            </div>\n                          \n                          \n                            <div class=\"col-md-12 ml-auto mr-auto\">\n                              <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                  <p class=\"text-left title \" style=\"color: darkslategray\">\n                                    <span> <a routerLink=\"../../total-actions\">My Time Sheet for each day</a></span>\n                                  </p>\n                                </div>\n                              </div>\n                            </div>\n                          \n                          \n                            <div class=\"col-md-12 ml-auto mr-auto\">\n                              <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                  <p class=\"text-left title \" style=\"color: darkslategray\">\n                                    <span> <a routerLink=\"../../classification-log\">Outstanding Action Items</a></span>\n                                  </p>\n                                </div>\n                              </div>\n                            </div>\n\n                            <!-- <div class=\"col-md-12 ml-auto mr-auto\">\n                              <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                  <p class=\"text-left title \" style=\"color: darkslategray\">\n                                    <span> <a routerLink=\"../classification-log\">My Summerized Time Sheet as @</a></span>\n                                  </p>\n                                </div>\n                              </div>\n                            </div> -->\n                          \n                          \n                          <div hidden>\n                            <div class=\"col-md-12 ml-auto mr-auto\">\n                              <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                  <p class=\"text-left title \" style=\"color: darkslategray\">My Work Time Sheet as @</p>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"col-md-12 ml-auto mr-auto\">\n                              <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                  <p class=\"text-left title \" style=\"color: darkslategray\">My Cumulative Time Sheet for Period\n                                  </p>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"col-md-12 ml-auto mr-auto\">\n                              <p class=\"text-left title \" style=\"color: darkslategray\">My Weekly Time Budget</p>\n                            </div>\n                            <div class=\"col-md-12 ml-auto mr-auto\">\n                              <p class=\"text-left title \" style=\"color: darkslategray\">Time Budget Actual vs\n                                Planned</p>\n                            </div>\n                            <div class=\"col-md-12 ml-auto mr-auto\">\n                              <p class=\"text-left title \" style=\"color: darkslategray\">Tasks</p>\n                              <!-- <br> -->\n                            </div>\n                            <div class=\"col-md-12 ml-auto mr-auto\">\n                              <p class=\"text-left title \" style=\"color: darkslategray\">Health Factor</p>\n                              <!-- <br> -->\n                            </div>\n                            <div class=\"col-md-12 ml-auto mr-auto\">\n                              <p class=\"text-left title \" style=\"color: darkslategray\">Work Factor</p>\n                              <!-- <br> -->\n                            </div>\n                            <div class=\"col-md-12 ml-auto mr-auto\">\n                              <p class=\"text-left\" style=\"color: darkslategray\"><span class=\"title \">Net Worth</span>\n                                (<small>As to date</small>)</p>\n                              <!-- <br> -->\n                            </div>\n                            <div class=\"col-md-12 ml-auto mr-auto\">\n                              <p class=\"text-left title \" style=\"color: darkslategray\">Schedule of Outstanding Personal Tasks\n                              </p>\n                              <!-- <br> -->\n                            </div>\n                            <div class=\"col-md-12 ml-auto mr-auto\">\n                              <p class=\"text-left title \" style=\"color: darkslategray\">Personal Project Reports\n                              </p>\n                              <!-- <br> -->\n                            </div>\n                            <div class=\"col-md-12 ml-auto mr-auto\">\n                              <p class=\"text-left title \" style=\"color: darkslategray\">User`s Enterprise Internal Reports</p>\n                            </div>\n                            <div class=\"col-md-12 ml-auto mr-auto\">\n                              <p class=\"text-left title \" style=\"color: darkslategray\">Personal Internal Perfomance reviews</p>\n                              <!-- <br> -->\n                            </div>\n                            <div class=\"col-md-12 ml-auto mr-auto\">\n                              <p class=\"text-left title \" style=\"color: darkslategray\">Profile Summary</p>\n                              <!-- <br> -->\n                            </div>\n                          </div>\n                          \n                            \n                          </div>\n\n\n                          <div class=\"tab-pane\" id=\"public\" role=\"tabpanel\" aria-expanded=\"true\">\n\n                            <code>public</code>\n                            <div class=\"col-md-12 ml-auto mr-auto\">\n                              <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                  <p class=\"text-left title \" style=\"color: darkslategray\">\n                                    <span> <a routerLink=\"../../total-actions\">Personal Details</a></span>\n                                  </p>\n                                </div>\n                              </div>\n                            </div>\n                          \n                          \n                          \n                            <div class=\"col-md-12 ml-auto mr-auto\">\n                              <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                  <p class=\"text-left title \" style=\"color: darkslategray\">\n                                    <span> <a routerLink=\"../../timeSpent-report\">Total time spent on an activity in a period</a></span>\n                                  </p>\n                                </div>\n                              </div>\n                            </div>\n                          \n                          \n                            <div class=\"col-md-12 ml-auto mr-auto\">\n                              <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                  <p class=\"text-left title \" style=\"color: darkslategray\">\n                                    <span> <a routerLink=\"../../activity-reportLog\">Time sheet report in a period</a></span>\n                                  </p>\n                                </div>\n                              </div>\n                            </div>\n                          \n                          \n                            <div class=\"col-md-12 ml-auto mr-auto\">\n                              <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                  <p class=\"text-left title \" style=\"color: darkslategray\">\n                                    <span> <a routerLink=\"../../total-actions\">My Time Sheet for each day</a></span>\n                                  </p>\n                                </div>\n                              </div>\n                            </div>\n                          \n                          \n                            <div class=\"col-md-12 ml-auto mr-auto\">\n                              <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                  <p class=\"text-left title \" style=\"color: darkslategray\">\n                                    <span> <a routerLink=\"../../outstandingTask-report\">Outstanding Action Items</a></span>\n                                  </p>\n                                </div>\n                              </div>\n                            </div>\n                          \n                          \n                            <div hidden>\n                              <div class=\"col-md-12 ml-auto mr-auto\">\n                                <div class=\"row\">\n                                  <div class=\"col-md-6\">\n                                    <p class=\"text-left title \" style=\"color: darkslategray\">My Work Time Sheet as @</p>\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"col-md-12 ml-auto mr-auto\">\n                                <div class=\"row\">\n                                  <div class=\"col-md-6\">\n                                    <p class=\"text-left title \" style=\"color: darkslategray\">My Cumulative Time Sheet for Period\n                                    </p>\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"col-md-12 ml-auto mr-auto\">\n                                <p class=\"text-left title \" style=\"color: darkslategray\">My Weekly Time Budget</p>\n                              </div>\n                              <div class=\"col-md-12 ml-auto mr-auto\">\n                                <p class=\"text-left title \" style=\"color: darkslategray\">Time Budget Actual vs\n                                  Planned</p>\n                              </div>\n                              <div class=\"col-md-12 ml-auto mr-auto\">\n                                <p class=\"text-left title \" style=\"color: darkslategray\">Tasks</p>\n                                <!-- <br> -->\n                              </div>\n                              <div class=\"col-md-12 ml-auto mr-auto\">\n                                <p class=\"text-left title \" style=\"color: darkslategray\">Health Factor</p>\n                                <!-- <br> -->\n                              </div>\n                              <div class=\"col-md-12 ml-auto mr-auto\">\n                                <p class=\"text-left title \" style=\"color: darkslategray\">Work Factor</p>\n                                <!-- <br> -->\n                              </div>\n                              <div class=\"col-md-12 ml-auto mr-auto\">\n                                <p class=\"text-left\" style=\"color: darkslategray\"><span class=\"title \">Net Worth</span>\n                                  (<small>As to date</small>)</p>\n                                <!-- <br> -->\n                              </div>\n                              <div class=\"col-md-12 ml-auto mr-auto\">\n                                <p class=\"text-left title \" style=\"color: darkslategray\">Schedule of Outstanding Personal Tasks\n                                </p>\n                                <!-- <br> -->\n                              </div>\n                              <div class=\"col-md-12 ml-auto mr-auto\">\n                                <p class=\"text-left title \" style=\"color: darkslategray\">Personal Project Reports\n                                </p>\n                                <!-- <br> -->\n                              </div>\n                              <div class=\"col-md-12 ml-auto mr-auto\">\n                                <p class=\"text-left title \" style=\"color: darkslategray\">User`s Enterprise Internal Reports</p>\n                              </div>\n                              <div class=\"col-md-12 ml-auto mr-auto\">\n                                <p class=\"text-left title \" style=\"color: darkslategray\">Personal Internal Perfomance reviews</p>\n                                <!-- <br> -->\n                              </div>\n                              <div class=\"col-md-12 ml-auto mr-auto\">\n                                <p class=\"text-left title \" style=\"color: darkslategray\">Profile Summary</p>\n                                <!-- <br> -->\n                              </div>\n                            </div>\n                          \n                          \n                          </div>\n                          \n                          \n                          \n                          \n                          \n                          <!-- End Here -->\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-pane\" id=\"popups\">\n                  <app-timesheet></app-timesheet>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"timeBudget\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n  <!-- <div class=\"modal-dialog modal-lg\"> -->\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"card-body \">\n        <!-- <code>Time Budget</code> -->\n        <!-- <form> -->\n          <div class=\"card-header \">\n            <p class=\"title clrs-h1-font\">Time Budget</p>\n            <p class=\"category\">Add or Edit the classifications Time</p>\n          </div>\n          <div class=\"card-body \">\n            <div class=\"form-group\">\n              <label class=\"control-label\" for=\"\">Plan Classifications Time in Hours\n                <span class=\"star\">*</span>\n              </label>\n\n              <table class=\"table\">\n                <thead class=\"title clrs-h4 text-info\">\n                  <th class=\"text-left\">Classification</th>\n                  <th class=\"text-left\">Frequence\n                    <!-- <small> (Hrs)</small> -->\n                  </th>\n                  <th>action</th>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of classificationsToDate | async\">                    \n                    <td class=\"text-left table td-clrs\">{{ item.name }}</td>\n                    <td class=\"table text-center td-clrs\">\n                      <input type=\"number\" class=\"form-control text-right\" [(ngModel)]=\"item.plannedTime\" required (focus)=\"focus1=true\"\n                        style=\"padding-top: 0px;padding-bottom: 0px; height: 32px; width: 6em\" placeholder=\"Add Time\" (blur)=\"focus1=false\">\n                    </td>\n                    <td class=\"table td-clrs\">\n                      <button class=\"danger btn-link remove\" (click)=\"addTimeBudget(item)\"><i class=\"fa fa-check\"></i></button>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left table td-clrs title clrs-h4\" style=\"color: darkslategray;border-bottom-style: double; border-top-color: black;border-bottom-color: black;\">Totals</td>\n                    <td class=\"text-center table td-clrs\" style=\"border-bottom-style: double; padding-right:3em; border-top-color:black; border-bottom-color:black\">{{ totalPlannedTime }}</td>\n                    <td></td>\n                  </tr>\n                  <!-- <hr> -->\n                  <!-- <tr>\n                    <td style=\"padding-right:4em; border-top-color:black; border-bottom-color:black\"></td>\n                    <td style=\"padding-right:4em; border-top-color:black; border-bottom-color:black\"></td>\n                  </tr> -->\n                </tbody>\n              </table>\n              \n                  <div style=\"width:fit-content category\">\n                    <small>Totals shouldn't exceed total week hours (168 hrs)</small>\n                  </div>\n            </div>\n          </div>\n          <div class=\"card-footer text-right\">\n            <button (click)=\"dismissTimeBudgdet()\" data-dismiss=\"modal\" class=\"btn btn-warning\">Dismiss</button>\n            <button (click)=\"dismissTimeBudgdet()\" data-dismiss=\"modal\" class=\"btn btn-primary\">Save</button>\n            <!-- <button (click)=\"addTimeBudget(time)\" data-dismiss=\"modal\" class=\"btn btn-primary\">Save</button> -->\n          </div>\n        <!-- </form> -->\n\n\n\n        <!-- <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n          <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n          </div>\n          <div class=\"divider\"></div>\n          <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-success btn-link\" data-dismiss=\"modal\" title=\"save action\">Enter</button>\n          </div>\n        </div> -->\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"personalStandard\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"card-body \">\n        <!-- <code>Personal Standards</code> -->\n          <form >\n            <div class=\"card-header \">\n              <h4 class=\"title clrs-h1-font\">Classification: {{ selectedClassification.name }}</h4>\n              <p class=\"title na-p\">Add Personal Standards</p>\n              \n            </div>\n            <div class=\"card-body \">\n              <div class=\"form-group\">\n                <label class=\"control-label\" for=\"\">Name:\n                  <span class=\"star\">*</span>\n                </label>\n                <input type=\"text\" class=\"form-control\" name=\"sName\" [(ngModel)]=\"newStandard.name\" required>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"\" class=\"control-label\">Frequence\n                  <span class=\"star\">*</span>\n                </label>\n                <ng-select [items]=\"stdPeriods\" bindLabel=\"name\" name=\"sPeriod\" placeholder=\"Select Frequence\"\n                  [(ngModel)]=\"selectedPeriod\"></ng-select>\n              </div>\n              <div class=\"category\"> <span class=\"star\">*</span> Required fields</div>\n              <div class=\"form-group\">\n                <label for=\"\" class=\"control-label\">Units\n                  <span class=\"star\">*</span>\n                </label>\n                <ng-select [items]=\"SIunits\" bindLabel=\"name\" name=\"jyu\" placeholder=\"Select unit of Measure\"\n                  [(ngModel)]=\"setUnit\">\n                </ng-select>\n              </div>\n              <div class=\"category\"> <span class=\"star\">*</span> Required fields</div>\n              \n            </div>\n            <div class=\"footer text-center pull-right\">\n              <button (click)=\"addPersonalStandards()\" data-dismiss=\"modal\" class=\"btn btn-primary\">Add</button>\n            </div>\n          </form>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"myAssets\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header justify-content-center\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <i class=\"nc-icon nc-simple-remove\"></i>\n        </button>\n        <h4 class=\"title clrs-h1-font title-up\">Assets</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"col-md-12\">\n          <div class=\"row\">\n            <h4 class=\" clrs-h4\"> Current Assets</h4>\n          </div>\n          <div class=\"row\">\n            <a class=\"btn-link col\" *ngFor=\"let item of (userData)?.personalAssets\" (click)=\"removeAsset(item)\">{{ item.name }}  \n              <small><i class=\"nc-icon nc-sm nc-simple-remove\"></i></small>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"row\">\n            <h4 class=\" clrs-h4\"> Add new assets</h4>\n          </div>\n          <!-- <form action=\"\"> -->\n            <div class=\"row\">\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Name</label>\n                  <input type=\"text\" class=\"form-control\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" name=\"City\" placeholder=\"Cluster\" [(ngModel)]=\"asset.name\">\n                </div>\n              </div>\n              <div class=\"col-md-4 px-1\">\n                <div class=\"form-group\">\n                  <label>Value</label>\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepand\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\">\n                      <span class=\"input-group-text\"><small>$</small>\n                      </span>\n                    </div>\n                    <input type=\"number\" class=\"form-control\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" name=\"10000\" placeholder=\"185000\" [(ngModel)]=\"asset.value\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-2 pl-1\">\n                <div class=\"form-group\" style=\"margin-top:28px\">\n                  <button *ngIf=\"editRpt\" class=\"btn-link btn-magnify\" (click)=\"addAsset(asset)\">Save</button>\n                </div>\n              </div>\n            </div>\n          <!-- </form> -->\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"left-side\">\n          <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Dismiss</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n          <button type=\"button\" class=\"btn btn-success btn-link\">Update</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"myLiabilities\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header justify-content-center\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <i class=\"nc-icon nc-simple-remove\"></i>\n        </button>\n        <h4 class=\"title clrs-h1-font title-up\">Liabilities</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"col-md-12\">\n          <div class=\"row\">\n            <h4 class=\" clrs-h4\"> Current Liabilities</h4>\n          </div>\n          <div class=\"row\">\n            <a class=\"btn-link col\" *ngFor=\"let item of (userData)?.personalLiabilities\" (click)=\"removeLiability(item)\">{{ item.name }}  \n              <small><i class=\"nc-icon nc-sm nc-simple-remove\"></i></small>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"row\">\n            <h4 class=\" clrs-h4\"> Add new Liabilities</h4>\n          </div>\n          <form action=\"\">\n            <div class=\"row\">\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Name</label>\n                  <input type=\"text\" class=\"form-control\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" name=\"liabilityName\" placeholder=\"Warehouse\" [(ngModel)]=\"liability.name\">\n                </div>\n              </div>\n              <div class=\"col-md-4 px-1\">\n                <div class=\"form-group\">\n                  <label>amount</label>\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepand\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\">\n                      <span class=\"input-group-text\"><small>$</small>\n                      </span>\n                    </div>\n                    <input type=\"number\" class=\"form-control\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" name=\"liabilityAmount\" placeholder=\"2000\" [(ngModel)]=\"liability.amount\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-2 pl-1\">\n                <div class=\"form-group\" style=\"margin-top:28px\">\n                  <button *ngIf=\"editRpt\" class=\"btn-link btn-magnify\" (click)=\"addLiability()\">Save</button>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"left-side\">\n          <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Dismiss</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n          <button type=\"button\" class=\"btn btn-success btn-link\">Update</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/calendar/calendar.component.ts":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _services_enterprise_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/enterprise.service */ "./src/app/services/enterprise.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_personal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/personal.service */ "./src/app/services/personal.service.ts");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var app_services_project_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/services/project.service */ "./src/app/services/project.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













// import firebase = require('firebase');
// import { PasswordValidation } from './password-validator.component';
var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(auth, pns, afAuth, es, ps, afs, location, renderer, element, router, as) {
        var _this = this;
        this.auth = auth;
        this.pns = pns;
        this.afAuth = afAuth;
        this.es = es;
        this.ps = ps;
        this.afs = afs;
        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.as = as;
        this.theseTasks = [];
        this.projectsTasks = [];
        this.companyTasks = [];
        this.companyCompleteTasks = [];
        this.projectsCompleteTasks = [];
        this.allCompleteTasks = [];
        this.workdemo = true;
        this.editRpt = false;
        this.showProjs = false;
        this.hideProjs = false;
        this.dailyTimeSheetDemo = true;
        this.pro = { name: "" };
        this.classification = { name: "", createdOn: "", plannedTime: "", actualTime: "", Varience: "", id: "" };
        this.userData = { name: "", gender: "", dob: "", age: 0, username: "", email: "", bus_email: "", phoneNumber: "", telephone: null, address: "", nationalId: "", nationality: "", zipCode: null, country: "", city: "", by: "", byId: "", companyName: "", companyId: "", createdOn: "", id: "", aboutMe: "", profession: [this.pro], qualifications: null, bodyWeight: 0, bodyHeight: 0, bodyMassIndex: 0, industrySector: "", personalAssets: null, personalLiabilities: null, reference: null, focusFactor: 0, referee: [this.userInit], userImg: "", LastTimeLogin: "", hierarchy: "", updated: false };
        this.asset = { name: "", value: "", id: "", by: "", byId: "", addeddOn: "", assetNumber: "" };
        this.liability = { name: "", amount: "", id: "", by: "", byId: "", addeddOn: "" };
        this.selectedDate = null;
        this.selectedSumDate = null;
        this.selectedWorkDate = null;
        this.selectedStartDate = null;
        this.selectedEndDate = null;
        this.SIunits = [
            { id: 'hours', name: 'Time(hrs)' },
            { id: 'items', name: 'Items' },
            { id: 'kg', name: 'Kilograms(Kg)' },
            { id: 'm2', name: 'Area(m2)' },
            { id: 'm3', name: 'Volume(m3)' },
            { id: 'mi', name: 'Miles(mi)' },
            { id: 'yd', name: 'Yards(yd)' },
            { id: 'mm', name: 'Millimeters(mm)' },
            { id: 'cm', name: 'Centimeters(cm)' },
            { id: 'm', name: 'Meters(m)' },
            { id: 'Km', name: 'Kilometers(km)' },
            { id: 'in', name: 'Inches(in)' },
            { id: 'ft', name: 'Feet(ft)' },
            { id: 'g', name: 'Grams(g)' },
        ];
        this.setUnit = null;
        this.stdPeriods = [
            { id: '3/Day', name: '3 times/Day' },
            { id: 'daily', name: 'Daily' },
            { id: 'weekly', name: 'Weekly' },
            { id: 'monthly', name: 'Monthly' },
            { id: 'quarterly', name: 'Quarterly' },
            { id: 'yearly', name: 'Yearly' },
            { id: 'term', name: 'Term' },
        ];
        // this.timesheetCollection = [
        //   { date: '01/01/2019', name: '01/01/2019' },
        //   { date: '03/01/2019', name: '03/01/2019' },
        //   { date: '05/01/2019', name: '05/01/2019' },
        //   { date: '08/01/2019', name: '08/01/2019' },
        //   { date: '09/01/2019', name: '09/01/2019' },
        //   { date: '10/01/2019', name: '10/01/2019' },
        //   { date: '11/01/2019', name: '11/01/2019' },
        //   { date: '12/01/2019', name: '12/01/2019' },
        // ]
        this.professions = [
            'Physician',
            'Engineer',
            'Technician',
            'Teacher',
            'Accountant',
            'Veterinarian',
            'Lawyer',
            'Pharmacist',
            'Psychologist',
            'Software Developer',
            'Architect',
            'Surgeon',
            'Midwife',
            'Dietitian',
            'Designer',
            'Physiotherapist',
            'Scientist',
            'Consultant',
            'Electrician',
            'Mechanic',
            'Surveyor',
            'Labourer',
            'Hairdresser',
            'Plumber',
            'Police officer',
            'Health professional',
            'Broker',
            'Tradesman',
            'Chef',
            'Radiographer',
            'Dentist',
            'Expert',
            'Medical laboratory scientist',
            'Dental hygienist',
            'Artist',
            'Operator',
            'Butcher',
            'Actuary',
            'Secretary',
            'Firefighter',
            'Musician',
            'Technologist',
            'Paramedic',
            'Actor',
            'Labourer',
            'Librarian',
            'Machinist',
            'Waiting staff',
            'Aviator',
            'Farmer',
            'Mechanical Engineer',
        ];
        this.industrySectors = [
            'Accountants',
            'Advertising/ Public Relations',
            'Aerospace, Defense Contractors ',
            'Agribusiness ',
            'Agricultural Services & Products',
            'Air Transport',
            'Air Transport Unions',
            'Airlines',
            'Alcoholic Beverages',
            'Alternative Energy Production & Services',
            'Architectural Services',
            'Attorneys / Law Firms',
            'Auto Dealers',
            'Auto Dealers, Japanese',
            ' Auto Manufacturers',
            'Automotive',
            'Abortion Policy / Anti - Abortion',
            'Abortion Policy / Pro - Abortion Rights',
            'Banking, Mortgage',
            'Banks, Commercial',
            'Banks, Savings & Loans',
            'Bars & Restaurants',
            'Beer, Wine & Liquor',
            'Books, Magazines & Newspapers',
            ' Broadcasters, Radio / TV',
            'Builders / General Contractors',
            'Builders / Residential',
            'Building Materials & Equipment',
            'Building Trade Unions ',
            'Business Associations',
            'Business Services',
            'Cable & Satellite TV Production & Distribution',
            'Candidate Committees ',
            'Candidate Committees, Democratic',
            'Candidate Committees, Republican',
            'Car Dealers',
            'Car Dealers, Imports',
            'Car Manufacturers',
            'Casinos / Gambling',
            'Cattle Ranchers / Livestock',
            'Chemical & Related Manufacturing',
            'Chiropractors',
            'Civil Servants / Public Officials',
            'Clergy & Religious Organizations ',
            'Clothing Manufacturing',
            'Coal Mining',
            'Colleges, Universities & Schools',
            'Commercial Banks',
            'Commercial TV & Radio Stations',
            'Communications / Electronics',
            'Computer Software',
            'Conservative / Republican',
            'Construction',
            'Construction Services',
            'Construction Unions',
            'Credit Unions',
            'Crop Production & Basic Processing',
            'Cruise Lines',
            'Cruise Ships & Lines',
            'Dairy',
            'Defense',
            'Defense Aerospace',
            'Defense Electronics',
            'Defense / Foreign Policy Advocates',
            'Democratic Candidate Committees ',
            'Democratic Leadership PACs',
            'Democratic / Liberal ',
            'Dentists',
            'Doctors & Other Health Professionals',
            'Drug Manufacturers',
            'Education ',
            'Electric Utilities',
            'Electronics Manufacturing & Equipment',
            'Electronics, Defense Contractors',
            'Energy & Natural Resources',
            'Entertainment Industry',
            'Environment ',
            'Farm Bureaus',
            'Farming',
            'Finance / Credit Companies',
            'Finance, Insurance & Real Estate',
            'Food & Beverage',
            'Food Processing & Sales',
            'Food Products Manufacturing',
            'Food Stores',
            'For - profit Education',
            'For - profit Prisons',
            'Foreign & Defense Policy ',
            'Forestry & Forest Products',
            'Foundations, Philanthropists & Non - Profits',
            'Funeral Services',
            'Gambling & Casinos',
            'Gambling, Indian Casinos',
            'Garbage Collection / Waste Management',
            'Gas & Oil',
            'Gay & Lesbian Rights & Issues',
            'General Contractors',
            'Government Employee Unions',
            'Government Employees',
            'Gun Control ',
            'Gun Rights ',
            'Health',
            'Health Professionals',
            'Health Services / HMOs',
            'Hedge Funds',
            'HMOs & Health Care Services',
            'Home Builders',
            'Hospitals & Nursing Homes',
            'Hotels, Motels & Tourism',
            'Human Rights ',
            'Ideological / Single - Issue',
            'Indian Gaming',
            'Industrial Unions',
            'Insurance',
            'Internet',
            'Israel Policy',
            'Labor',
            'Lawyers & Lobbyists',
            'Lawyers / Law Firms',
            'Leadership PACs ',
            'Liberal / Democratic',
            'Liquor, Wine & Beer',
            'Livestock',
            'Lobbyists',
            'Lodging / Tourism',
            'Logging, Timber & Paper Mills',
            'Manufacturing, Misc',
            'Marine Transport',
            'Meat processing & products',
            'Medical Supplies',
            'Mining',
            'Misc Business',
            'Misc Finance',
            'Misc Manufacturing & Distributing ',
            'Misc Unions ',
            'Miscellaneous Defense',
            'Miscellaneous Services',
            'Mortgage Bankers & Brokers',
            'Motion Picture Production & Distribution',
            'Music Production',
            'Natural Gas Pipelines',
            'Newspaper, Magazine & Book Publishing',
            'Non - profits, Foundations & Philanthropists',
            'Nurses',
            'Nursing Homes / Hospitals',
            'Nutritional & Dietary Supplements',
            'Oil & Gas',
            'Other',
            'Payday Lenders',
            'Pharmaceutical Manufacturing',
            'Pharmaceuticals / Health Products',
            'Phone Companies',
            'Physicians & Other Health Professionals',
            'Postal Unions',
            'Poultry & Eggs',
            'Power Utilities',
            'Printing & Publishing',
            'Private Equity & Investment Firms',
            'Pro - Israel ',
            'Professional Sports, Sports Arenas & Related Equipment & Services',
            'Progressive / Democratic',
            'Public Employees',
            'Public Sector Unions ',
            'Publishing & Printing',
            'Radio / TV Stations',
            'Railroads',
            'Real Estate',
            'Record Companies / Singers',
            'Recorded Music & Music Production',
            'Recreation / Live Entertainment',
            'Religious Organizations / Clergy',
            'Republican Candidate Committees ',
            'Republican Leadership PACs',
            'Republican / Conservative ',
            'Residential Construction',
            'Restaurants & Drinking Establishments',
            'Retail Sales',
            'Retired ',
            'Savings & Loans',
            'Schools / Education',
            'Sea Transport',
            'Securities & Investment',
            'Special Trade Contractors',
            'Sports, Professional',
            'Steel Production ',
            'Stock Brokers / Investment Industry',
            'Student Loan Companies',
            'Sugar Cane & Sugar Beets',
            'Teachers Unions',
            'Teachers / Education',
            'Telecom Services & Equipment',
            'Telephone Utilities',
            'Textiles ',
            'Timber, Logging & Paper Mills',
            'Tobacco',
            'Transportation',
            'Transportation Unions ',
            'Trash Collection / Waste Management',
            'Trucking',
            'TV / Movies / Music',
            'TV Production',
            'Unions',
            'Unions, Airline',
            'Unions, Building Trades',
            'Unions, Industrial',
            'Unions, Misc',
            'Unions, Public Sector',
            'Unions, Teacher',
            'Unions, Transportation',
            'Universities, Colleges & Schools',
            'Vegetables & Fruits',
            'Venture Capital',
            'Waste Management',
            'Wine, Beer & Liquor',
            'Womens Issues',
        ];
        this.afAuth.user.subscribe(function (user) {
            _this.userId = user.uid;
            _this.user = user;
            _this.dataCall().subscribe();
        });
    }
    CalendarComponent.prototype.returnReport = function () {
        this.editRpt = false;
    };
    CalendarComponent.prototype.editReport = function () {
        this.editRpt = true;
    };
    CalendarComponent.prototype.minimizeSidebar = function () {
        var body = document.getElementsByTagName('body')[0];
        if (misc.sidebar_mini_active === true) {
            body.classList.remove('sidebar-mini');
            // misc.sidebar_mini_active = false;
        }
        else {
            setTimeout(function () {
                body.classList.add('sidebar-mini');
                // misc.sidebar_mini_active = true;
            }, 300);
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    CalendarComponent.prototype.addWork = function () {
        var _this = this;
        this.classesArray = [];
        var newClassification = { name: 'Work', createdOn: new Date().toISOString(), id: 'colourWorkId', plannedTime: "", actualTime: "", Varience: "" };
        var value;
        var setClass = this.myDocument.collection('classifications').doc(newClassification.id);
        this.workClassifications = this.myDocument.collection('classifications').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.workdemo = true;
        this.workClassifications.subscribe(function (ref) {
            var index = ref.findIndex(function (workClass) { return workClass.name === 'Work'; });
            if (index > -1) {
                value = ref[index].name;
                _this.workdemo = false;
            }
            else {
                if (value === newClassification.name) {
                    setClass.update(newClassification);
                }
                else {
                    setClass.set(newClassification);
                }
            }
        });
        console.log(newClassification);
        this.selectedClassification = newClassification;
    };
    CalendarComponent.prototype.addClass = function (classification) {
        console.log(classification);
        this.classification.createdOn = new Date().toISOString();
        this.pns.addClassifications(this.userId, classification);
        this.classification = { name: "", createdOn: "", plannedTime: "", actualTime: "", Varience: "", id: "" };
    };
    CalendarComponent.prototype.addTimeBudget = function (item) {
        var time = item.plannedTime;
        this.totalPlannedTime, this.totalActualTime, this.totalVarience = 0;
        this.selectedClassification = item;
        console.log(this.selectedClassification);
        this.selectedClassification.plannedTime = time;
        var data = this.selectedClassification;
        var setClass = this.afs.collection('Users').doc(this.userId).collection('classifications').doc(this.selectedClassification.id);
        setClass.update({ 'plannedTime': time });
        this.time = 0;
        this.selectedClassification = { name: "", createdOn: "", plannedTime: "", actualTime: "", Varience: "", id: "" };
        this.showNotification('timeBudget', 'top', 'right');
    };
    CalendarComponent.prototype.dismissTimeBudgdet = function () {
        this.selectedClassification = { name: "", createdOn: "", plannedTime: "", actualTime: "", Varience: "", id: "" };
    };
    CalendarComponent.prototype.addPersonalStandards = function () {
        console.log(this.selectedClassification);
        // this.newStandard = std;
        this.newStandard.period = this.selectedPeriod.id;
        this.newStandard.createdOn = new Date().toString();
        this.newStandard.classificationName = this.selectedClassification.name;
        this.newStandard.classificationId = this.selectedClassification.id;
        this.newStandard.unit = this.setUnit.id;
        // this.newStandard.classifiation = this.selectClassification;
        console.log(this.newStandard);
        var data = this.newStandard;
        var standardRef = this.myDocument.collection('myStandards');
        var setClass = this.afs.collection('Users').doc(this.userId).collection('classifications').doc(this.selectedClassification.id).collection('myStandards');
        setClass.add(data).then(function (ref) {
            var id = ref.id;
            standardRef.doc(id).set(data);
            setClass.doc(id).update({ 'id': id });
            standardRef.doc(id).update({ 'id': id });
        });
        this.newStandard = { name: "", createdOn: "", id: "", period: "", classificationName: "", classificationId: "", unit: "" };
        this.selectedClassification = { name: "", createdOn: "", plannedTime: "", actualTime: "", Varience: "", id: "" };
        this.setUnit = null;
    };
    CalendarComponent.prototype.Update = function () {
        var _this = this;
        var usersRef = this.afs.collection('Users').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        usersRef.subscribe(function (allusers) {
            allusers.forEach(function (element) {
                // totalLialibility$ = + element.amount;
                if (element.hierarchy == "" || element.hierarchy == null || element.hierarchy == undefined) {
                    element.hierarchy = "";
                }
                else {
                }
                if (element.address == "" || element.address == null || element.address == undefined) {
                    element.address = "";
                    _this.afs.collection('Users').doc(element.id).update({ 'address': "" });
                    console.log('Done');
                }
                else {
                }
                if (element.phoneNumber == "" || element.phoneNumber == null || element.phoneNumber == undefined) {
                    element.phoneNumber = "";
                    _this.afs.collection('Users').doc(element.id).update({ 'phoneNumber': "" });
                    console.log('Done');
                }
                else {
                }
                if (element.bus_email == "" || element.bus_email == null || element.bus_email == undefined) {
                    element.bus_email = "";
                    _this.afs.collection('Users').doc(element.id).update({ 'bus_email': "" });
                    console.log('Done');
                }
                else {
                }
                if (element.nationalId == "" || element.nationalId == null || element.nationalId == undefined) {
                    element.nationalId = "";
                    _this.afs.collection('Users').doc(element.id).update({ 'nationalId': "" });
                    console.log('Done');
                }
                else {
                }
                if (element.nationality == "" || element.nationality == null || element.nationality == undefined) {
                    element.nationality = "";
                    _this.afs.collection('Users').doc(element.id).update({ 'nationality': "" });
                    console.log('Done');
                }
                else {
                }
            });
            _this.showNotification('update', 'top', 'right');
        });
    };
    // personal reports
    CalendarComponent.prototype.dailyTimeSheet = function () {
        var _this = this;
        var timesheetDocId;
        console.log(this.selectedDate);
        timesheetDocId = this.selectedDate;
        var myLapses = this.afs.collection('Users').doc(this.userId).collection('TimeSheets').doc(timesheetDocId.id).collection('actionItems');
        this.viewDailyTimeSheets = this.afs.collection('Users').doc(this.userId).collection('TimeSheets').doc(timesheetDocId.id).collection('actionItems').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            var workStatus = 0;
            var mlapsdata;
            // let mlapsdata
            // data.Hours = String(moment(moment(data.actualStart).diff(moment(data.actualEnd))).format('hh:mm:ss'));
            data.Hours = String(moment__WEBPACK_IMPORTED_MODULE_10__(moment__WEBPACK_IMPORTED_MODULE_10__(data.actualStart).diff(moment__WEBPACK_IMPORTED_MODULE_10__(data.actualEnd))).format('hh'));
            console.log(data.Hours);
            if (data.name === 'Lapsed') {
                var lapData = myLapses.doc('lapsed').collection('lapses').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    return __assign({ id: id }, data);
                }); }));
                lapData.subscribe(function (ldata) {
                    console.log(ldata);
                    mlapsdata = (ldata.length);
                    _this.mlapsdata = mlapsdata;
                    console.log(mlapsdata);
                });
                data.wrkHours = String(mlapsdata);
            }
            return __assign({ id: id }, data);
        }); }));
        this.dailyTimeSheetDemo = false;
    };
    /* end of personal Reports */
    CalendarComponent.prototype.dataCall = function () {
        var _this = this;
        /* myData */
        this.showProjs = false;
        this.hideProjs = false;
        this.myDocument = this.afs.collection('Users').doc(this.userId);
        this.timesheetCollection = this.myDocument.collection('TimeSheets').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        console.log(this.timesheetCollection);
        var noCompanies = 0;
        var noProjects = 0;
        this.projsNo = 0;
        var myProjects = this.ps.getProjects(this.userId);
        var myCompanies = this.es.getCompanies(this.userId);
        myCompanies.subscribe(function (ents) {
            console.log('Ents N0' + ' ' + ents.length);
            noCompanies = ents.length;
        });
        // noCompanies = myCompanies.operator.call.length;
        myProjects.subscribe(function (projs) {
            var projects = projs;
            console.log('Pojs N0' + ' ' + projs.length);
            noProjects = projs.length;
            _this.projsNo = projects.length;
            if (_this.projsNo == 0) {
                _this.showProjs = false;
                _this.hideProjs = true;
            }
            else {
                _this.showProjs = true;
                _this.hideProjs = false;
            }
        });
        this.userProfile = this.myDocument.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (a) {
            var data = a.payload.data();
            var id = a.payload.id;
            return __assign({ id: id }, data);
        }));
        this.userProfile.subscribe(function (userData) {
            console.log(userData);
            var myData = {
                name: _this.user.displayName,
                email: _this.user.email,
                bus_email: userData.bus_email,
                id: _this.user.uid,
                phoneNumber: _this.user.phoneNumber,
                photoURL: _this.user.photoURL,
                address: userData.address,
                nationalId: userData.nationalId,
                nationality: userData.nationality,
            };
            if (userData.address == "" || userData.address == null || userData.address == undefined) {
                userData.address = "";
            }
            else {
            }
            if (userData.phoneNumber == "" || userData.phoneNumber == null || userData.phoneNumber == undefined) {
                userData.phoneNumber = "";
            }
            else {
            }
            if (userData.bus_email == "" || userData.bus_email == null || userData.bus_email == undefined) {
                userData.bus_email = "";
            }
            else {
            }
            if (userData.nationalId == "" || userData.nationalId == null || userData.nationalId == undefined) {
                userData.nationalId = "";
            }
            else {
            }
            if (userData.nationality == "" || userData.nationality == null || userData.nationality == undefined) {
                userData.nationality = "";
            }
            else {
            }
            _this.myData = myData;
            // this.userData = userData;
            var liabilityArr = userData.personalLiabilities;
            var totalLialibility$ = 0;
            liabilityArr.forEach(function (element) {
                totalLialibility$ = +element.amount;
            });
            var assetArr = userData.personalAssets;
            var totalAsset$ = 0;
            assetArr.forEach(function (element) {
                totalAsset$ = +element.value;
            });
            console.log('No of my companies' + ' ' + noCompanies);
            console.log('No of my projects' + ' ' + noProjects);
            var pc = (noCompanies + noProjects);
            console.log('total Liability amount' + ' ' + totalLialibility$);
            console.log('total assets value' + ' ' + totalAsset$);
            var ff = (totalAsset$ - totalLialibility$);
            var dd = (ff / pc);
            userData.focusFactor = Number(dd.toFixed(1));
            // let ff = (totalAsset$ - totalLialibility$)
            console.log('user focus factor ==>' + (ff / pc));
            // userData.focusFactor = (ff / pc)
            var today = moment__WEBPACK_IMPORTED_MODULE_10__(new Date(), "DD-MM-YYYY");
            console.log(today);
            console.log(moment__WEBPACK_IMPORTED_MODULE_10__(userData.dob, "DD-MM-YYYY").year());
            console.log(moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).year());
            var age = (moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).year()) - (moment__WEBPACK_IMPORTED_MODULE_10__(userData.dob, "DD-MM-YYYY").year());
            if (moment__WEBPACK_IMPORTED_MODULE_10__(userData.dob).isSameOrAfter(today)) {
                userData.age = age;
            }
            else {
                userData.age = age - 1;
            }
            var bmi = (userData.bodyWeight / ((userData.bodyHeight * (1 / 100)) * ((userData.bodyHeight * (1 / 100)))));
            console.log(bmi.toFixed(1));
            userData.bodyMassIndex = Number(bmi.toFixed(1));
            console.log(userData.bodyMassIndex);
            _this.userData = userData;
        });
        console.log(this.userProfile);
        this.showActions = false;
        this.hideActions = false;
        var tct, tt, percentage;
        var currentDate = moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).format('L');
        ;
        var today = moment__WEBPACK_IMPORTED_MODULE_10__(new Date(), "YYYY-MM-DD");
        console.log(currentDate);
        var userDocRef = this.myDocument;
        this.viewActions = userDocRef.collection('WeeklyActions', function (ref) { return ref; }
        // .limit(4)
        // .where("startDate", '==', currentDate)
        // .orderBy('start', 'asc')
        // .limit(4)
        ).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.viewActions.subscribe(function (actions) {
            console.log(actions);
            _this.myActionItems = [];
            actions.forEach(function (element) {
                if (moment__WEBPACK_IMPORTED_MODULE_10__(element.startDate).isSameOrAfter(today) || element.complete == false) {
                    _this.myActionItems.push(element);
                }
            });
            console.log(actions.length);
            console.log(actions);
            _this.actionNo = actions.length;
            if (_this.actionNo == 0) {
                _this.showActions = false;
                _this.hideActions = true;
            }
            else {
                _this.hideActions = false;
                _this.showActions = true;
            }
        });
        var newClassification = { name: 'Work', createdOn: new Date().toISOString(), id: 'colourWorkId', plannedTime: "", actualTime: "", Varience: "" };
        var setClass = this.myDocument.collection('classifications').doc(newClassification.id);
        var qq = [];
        var value;
        this.classifications = this.pns.getClassifications(this.userId);
        this.calendarItems = this.auth.calendarItems;
        this.tasksImChamp = this.pns.getTasksImChamp(this.userId);
        this.classifications.subscribe(function (ref) {
            var index = ref.findIndex(function (workClass) { return workClass.name === 'Work'; });
            if (index > -1) {
                value = ref[index].name;
                _this.workdemo = false;
            }
            else {
                if (value === newClassification.name) {
                    setClass.update(newClassification);
                }
                else {
                    setClass.set(newClassification);
                }
            }
        });
        var TaskswithpId = [], TaskswithoutpID = [];
        var TaskswithcompId = [], TaskswithoutCompID = [];
        var projectsTasks = this.myDocument.collection('tasks').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        projectsTasks.subscribe(function (ref) {
            _this.projectsTasks = [];
            ref.forEach(function (element) {
                var task = element;
                if (task.companyId) {
                    withcompId.push(task);
                    _this.projectsTasks.push(task);
                }
                else {
                    withoutCompID.push(task);
                }
            });
        });
        console.log('Tasks array with cid' + TaskswithpId);
        console.log('Tasks array without cid' + TaskswithoutpID);
        var withcompId = [], withoutCompID = [];
        var enterprisesTasks = this.myDocument.collection('tasks').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        enterprisesTasks.subscribe(function (ref) {
            _this.enterprisesTasks = [];
            ref.forEach(function (element) {
                var task = element;
                if (task.companyId) {
                    withcompId.push(task);
                    _this.enterprisesTasks.push(task);
                }
                else {
                    withoutCompID.push(task);
                }
            });
        });
        console.log('Tasks array with cid' + TaskswithcompId);
        console.log('Tasks array without cid' + TaskswithoutCompID);
        this.allMyTasks = this.myDocument.collection('tasks').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.tasksComplete = this.myDocument.collection('tasks', function (ref) {
            return ref
                .where('start', '==', moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).format('YYYY-MM-DD'))
                .where('complete', '==', true);
        }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.completeTasksRt = 0;
        this.allMyTasks.subscribe(function (allData) {
            allData.forEach(function (element) {
                tt = 0;
                tt = allData.length;
                if (element.complete == true) {
                    _this.allCompleteTasks.push(element);
                    console.log(_this.companyCompleteTasks);
                    tct = 0;
                    tct = _this.allCompleteTasks.length;
                    console.log('total complete tasks -->' + tct);
                    console.log('total No tasks -->' + tt);
                }
                ;
            });
            _this.completeTasksRt = 0;
            percentage = 100 * (tct / tt);
            _this.completeTasksRt = percentage;
            console.log(percentage);
        });
        this.tasksComplete.forEach(function (element) { return element.map(function (a) {
            if (a.complete == true) {
                _this.allCompleteTasks.push(a);
                console.log(_this.companyCompleteTasks);
            }
        }); });
        this.allMyTasks.forEach(function (element) { return element.map(function (a) {
            if (a.projectId) {
                _this.projectsTasks.push(a);
                console.log(_this.projectsTasks);
                if (a.complete == true) {
                    _this.projectsCompleteTasks.push(a);
                    console.log(_this.projectsCompleteTasks);
                }
                _this.NoOfProjectsTasks = _this.projectsTasks.length;
                _this.NoOfProCompleteTasks = _this.projectsCompleteTasks.length;
                _this.proRatio = 100 * (_this.NoOfProCompleteTasks / _this.NoOfProjectsTasks);
            }
        }); });
        this.allMyTasks.forEach(function (element) { return element.map(function (a) {
            if (a.companyId) {
                _this.companyTasks.push(a);
                console.log(_this.companyTasks);
                if (a.complete == true) {
                    _this.companyCompleteTasks.push(a);
                    console.log(_this.companyCompleteTasks);
                }
                _this.NoOfCompanyTasks = _this.companyTasks.length;
                _this.NoOfCompanyCompleteTasks = _this.companyCompleteTasks.length;
                _this.compRatio = 100 * (_this.NoOfCompanyCompleteTasks / _this.NoOfCompanyTasks);
                console.log(_this.compRatio);
            }
            ;
        }); });
        this.totalPlannedTime, this.totalActualTime, this.totalVarience = 0;
        var totalPlannedTime = 0;
        var totalActualTime = 0;
        var totalVarience = 0;
        this.classifications.subscribe(function (data) {
            totalPlannedTime = 0, totalActualTime = 0, totalVarience = 0;
            _this.classArray = data;
            _this.classArray.forEach(function (element) {
                totalPlannedTime = totalPlannedTime + Number(element.plannedTime);
                _this.totalPlannedTime = totalPlannedTime;
                console.log('totalPlannedTime -->' + ' ' + totalPlannedTime);
                totalActualTime = totalActualTime + Number(element.actualTime);
                _this.totalActualTime = totalActualTime;
                console.log('totalActualTime -->' + ' ' + totalActualTime);
                totalVarience = +Number(element.Varience);
                _this.totalVarience = totalVarience;
                console.log('totalVarience -->' + ' ' + totalVarience);
            });
            _this.classArray.length;
        });
        this.classificationsToDate = this.pns.getClassifications(this.userId);
        console.log('ók');
        this.myProjects = this.ps.getProjects(this.userId);
        this.standards = this.myDocument.collection('myStandards', function (ref) { return ref.orderBy('classificationName'); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.tasks = this.myDocument.collection('tasks', function (ref) { return ref.orderBy('start'); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            _this.mydata = data;
            _this.mydata.when = moment__WEBPACK_IMPORTED_MODULE_10__(data.start, "YYYY-MM-DD").fromNow().toString();
            _this.mydata.then = moment__WEBPACK_IMPORTED_MODULE_10__(data.finish, "YYYY-MM-DD").fromNow().toString(),
                _this.theseTasks.push(_this.mydata);
            return __assign({ id: id }, data);
        }); }));
        return this.tasks;
    };
    CalendarComponent.prototype.deleteClass = function (classification) {
        console.log(classification);
        console.log(classification.id);
        this.pns.removeClass(this.userId, classification);
    };
    CalendarComponent.prototype.selectClassification = function (myClass) {
        console.log(myClass);
        this.selectedClassification = myClass;
    };
    CalendarComponent.prototype.addAsset = function (asset) {
        var _this = this;
        console.log(this.asset);
        console.log(asset);
        this.asset.addeddOn = new Date().toISOString();
        this.asset.by = this.userData.name;
        this.asset.byId = this.userData.id;
        this.myDocument.update({
            personalAssets: firebase__WEBPACK_IMPORTED_MODULE_11__["firestore"].FieldValue.arrayUnion(this.asset)
        });
        this.myDocument.collection('assets').add(this.asset).then(function (asset) {
            var id = asset.id;
            _this.myDocument.collection('assets').doc(id).update({ 'id': id });
        });
        this.asset = { name: "", value: "", id: "", by: "", byId: "", addeddOn: "", assetNumber: "" };
    };
    CalendarComponent.prototype.removeAsset = function (asset) {
        var id = asset.id;
        this.myDocument.update({
            personalAssets: firebase__WEBPACK_IMPORTED_MODULE_11__["firestore"].FieldValue.arrayRemove(asset)
        });
        this.myDocument.collection('assets').doc(id).delete();
    };
    CalendarComponent.prototype.addLiability = function () {
        var _this = this;
        console.log(this.liability);
        this.liability.addeddOn = new Date().toISOString();
        this.liability.by = this.userData.name;
        this.liability.byId = this.userData.id;
        this.myDocument.update({
            personalLiabilities: firebase__WEBPACK_IMPORTED_MODULE_11__["firestore"].FieldValue.arrayUnion(this.liability)
        });
        this.myDocument.collection('liabilities').add(this.liability).then(function (liabDoc) {
            var id = liabDoc.id;
            _this.myDocument.collection('liabilities').doc(id).update({ 'id': id });
        });
        this.liability = { name: "", amount: "", id: "", by: "", byId: "", addeddOn: "" };
    };
    CalendarComponent.prototype.removeLiability = function (item) {
        var id = item.id;
        this.myDocument.update({
            personalLiabilities: firebase__WEBPACK_IMPORTED_MODULE_11__["firestore"].FieldValue.arrayRemove(item)
        });
        this.myDocument.collection('liabilities').doc(id).delete();
    };
    CalendarComponent.prototype.saveProfile = function (userData) {
        console.log(userData);
        userData.nationality = userData.country;
        this.myDocument.set(userData);
        this.dataCall();
    };
    CalendarComponent.prototype.showNotification = function (data, from, align) {
        // var type = ["", 'info', 'success', 'warning', 'danger'];
        var type = ["", 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        if (data === 'project') {
            $.notify({
                icon: "ti-gift",
                message: "A new project has been created <br> check colours projects dropdown."
            }, {
                type: type[color],
                timer: 4000,
                placement: {
                    from: from,
                    align: align
                },
                template: '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
            });
        }
        if (data === 'update') {
            $.notify({
                icon: "ti-gift",
                message: "Please fill the following fields <br>1. address, <br>2. business email,<br>3. phoneNumber,<br>4. Country,<br>5. National Id,<br><br><br>You will not be able to create Tasks untill you have filled those filleds"
            }, {
                type: type[color],
                timer: 4000,
                placement: {
                    from: from,
                    align: align
                },
                template: '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
            });
        }
        if (data === 'timeBudget') {
            $.notify({
                icon: "ti-gift",
                message: "Time Budget has been updated !!!."
            }, {
                type: type[color],
                timer: 4000,
                placement: {
                    from: from,
                    align: align
                },
                template: '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
            });
        }
        if (data === 'timeBudget') {
            $.notify({
                icon: "ti-gift",
                message: "Time Budget has been updated !!!."
            }, {
                type: type[color],
                timer: 4000,
                placement: {
                    from: from,
                    align: align
                },
                template: '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
            });
        }
        if (data === 'Task') {
            $.notify({
                icon: "ti-gift",
                message: "Task has been updated."
            }, {
                type: type[color],
                timer: 4000,
                placement: {
                    from: from,
                    align: align
                },
                template: '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
            });
        }
        if (data === 'comp') {
            $.notify({
                icon: "ti-gift",
                message: "A new enterprise has been created <b> check colours enterprise dropdown."
            }, {
                type: type[color],
                timer: 4000,
                placement: {
                    from: from,
                    align: align
                },
                template: '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
            });
        }
    };
    CalendarComponent.prototype.update2 = function () {
        var _this = this;
        var compCollection = this.afs.collection('Enterprises').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        compCollection.subscribe(function (allcomps) {
            allcomps.forEach(function (element) {
                if (element.updated == "" || element.updated == null || element.updated == undefined) {
                    _this.afs.collection('Enterprises').doc(element.id).update({ 'updated': true });
                }
            });
        });
        var usersCollection = this.afs.collection('Enterprises').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        usersCollection.subscribe(function (allcomps) {
            allcomps.forEach(function (element) {
                if (element.updated == "" || element.updated == null || element.updated == undefined) {
                    _this.afs.collection('Users').doc(element.id).update({ 'updated': true });
                }
            });
        });
    };
    CalendarComponent.prototype.ngOnInit = function () {
        this.newStandard = {
            name: "", createdOn: "", id: "", period: "", classificationName: "", classificationId: "", unit: ""
        };
        this.selectedClassification = {
            name: "", createdOn: "", plannedTime: "", actualTime: "", Varience: "", id: ""
        };
        var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["default"]('#container');
        ps.update();
        // this.afAuth.user.subscribe(user => {
        //   this.userId = user.uid;
        //   this.user = user;
        //   let myData = {
        //     name: this.user.displayName,
        //     email: this.user.email,
        //     id: this.user.uid,
        //     phoneNumber: this.user.phoneNumber
        //   }
        //   this.myData = myData;
        //   this.dataCall();
        // })
    };
    CalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.css */ "./src/app/calendar/calendar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _services_personal_service__WEBPACK_IMPORTED_MODULE_8__["PersonalService"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _services_enterprise_service__WEBPACK_IMPORTED_MODULE_4__["EnterpriseService"], app_services_project_service__WEBPACK_IMPORTED_MODULE_12__["ProjectService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.module.ts":
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.module.ts ***!
  \*********************************************/
/*! exports provided: CalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _calendar_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calendar.routing */ "./src/app/calendar/calendar.routing.ts");
/* harmony import */ var _map_task_map_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map-task/map-task.component */ "./src/app/calendar/map-task/map-task.component.ts");
/* harmony import */ var _implementation_implementation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./implementation/implementation.component */ "./src/app/calendar/implementation/implementation.component.ts");
/* harmony import */ var _timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./timesheet/timesheet.component */ "./src/app/calendar/timesheet/timesheet.component.ts");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./popup/popup.component */ "./src/app/calendar/popup/popup.component.ts");
/* harmony import */ var _totals_action_items_totals_action_items_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./totals-action-items/totals-action-items.component */ "./src/app/calendar/totals-action-items/totals-action-items.component.ts");
/* harmony import */ var _activity_log_activity_log_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./activity-log/activity-log.component */ "./src/app/calendar/activity-log/activity-log.component.ts");
/* harmony import */ var _classification_timesheet_classification_timesheet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./classification-timesheet/classification-timesheet.component */ "./src/app/calendar/classification-timesheet/classification-timesheet.component.ts");
/* harmony import */ var _r_activity_log_r_activity_log_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./r-activity-log/r-activity-log.component */ "./src/app/calendar/r-activity-log/r-activity-log.component.ts");
/* harmony import */ var _rdashboard_rdashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rdashboard/rdashboard.component */ "./src/app/calendar/rdashboard/rdashboard.component.ts");
/* harmony import */ var _r_time_spent_r_time_spent_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./r-time-spent/r-time-spent.component */ "./src/app/calendar/r-time-spent/r-time-spent.component.ts");
/* harmony import */ var _personal_info_report_personal_info_report_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./personal-info-report/personal-info-report.component */ "./src/app/calendar/personal-info-report/personal-info-report.component.ts");
/* harmony import */ var _diary_diary_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./diary/diary.component */ "./src/app/calendar/diary/diary.component.ts");
/* harmony import */ var _r_os_tasks_r_os_tasks_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./r-os-tasks/r-os-tasks.component */ "./src/app/calendar/r-os-tasks/r-os-tasks.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//Ngx-Charts
















var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_calendar_routing__WEBPACK_IMPORTED_MODULE_8__["CalendarRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["NgxChartsModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_5__["TagInputModule"],
            ],
            declarations: [_calendar_component__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"], _map_task_map_task_component__WEBPACK_IMPORTED_MODULE_9__["MapTaskComponent"], _implementation_implementation_component__WEBPACK_IMPORTED_MODULE_10__["ImplementationComponent"], _diary_diary_component__WEBPACK_IMPORTED_MODULE_20__["DiaryComponent"], _timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_11__["TimesheetComponent"], _popup_popup_component__WEBPACK_IMPORTED_MODULE_12__["PopupComponent"], _totals_action_items_totals_action_items_component__WEBPACK_IMPORTED_MODULE_13__["TotalsActionItemsComponent"],
                _activity_log_activity_log_component__WEBPACK_IMPORTED_MODULE_14__["ActivityLogComponent"], _classification_timesheet_classification_timesheet_component__WEBPACK_IMPORTED_MODULE_15__["ClassificationTimesheetComponent"], _r_activity_log_r_activity_log_component__WEBPACK_IMPORTED_MODULE_16__["RActivityLogComponent"], _rdashboard_rdashboard_component__WEBPACK_IMPORTED_MODULE_17__["RdashboardComponent"], _r_time_spent_r_time_spent_component__WEBPACK_IMPORTED_MODULE_18__["RTimeSpentComponent"], _personal_info_report_personal_info_report_component__WEBPACK_IMPORTED_MODULE_19__["PersonalInfoReportComponent"], _r_os_tasks_r_os_tasks_component__WEBPACK_IMPORTED_MODULE_21__["ROsTasksComponent"]]
        })
    ], CalendarModule);
    return CalendarModule;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/calendar/calendar.routing.ts ***!
  \**********************************************/
/*! exports provided: CalendarRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarRoutes", function() { return CalendarRoutes; });
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _map_task_map_task_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-task/map-task.component */ "./src/app/calendar/map-task/map-task.component.ts");
/* harmony import */ var _implementation_implementation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./implementation/implementation.component */ "./src/app/calendar/implementation/implementation.component.ts");
/* harmony import */ var _timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timesheet/timesheet.component */ "./src/app/calendar/timesheet/timesheet.component.ts");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popup/popup.component */ "./src/app/calendar/popup/popup.component.ts");
/* harmony import */ var _totals_action_items_totals_action_items_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./totals-action-items/totals-action-items.component */ "./src/app/calendar/totals-action-items/totals-action-items.component.ts");
/* harmony import */ var _activity_log_activity_log_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activity-log/activity-log.component */ "./src/app/calendar/activity-log/activity-log.component.ts");
/* harmony import */ var _classification_timesheet_classification_timesheet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classification-timesheet/classification-timesheet.component */ "./src/app/calendar/classification-timesheet/classification-timesheet.component.ts");
/* harmony import */ var _r_activity_log_r_activity_log_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./r-activity-log/r-activity-log.component */ "./src/app/calendar/r-activity-log/r-activity-log.component.ts");
/* harmony import */ var _rdashboard_rdashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rdashboard/rdashboard.component */ "./src/app/calendar/rdashboard/rdashboard.component.ts");
/* harmony import */ var _r_time_spent_r_time_spent_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./r-time-spent/r-time-spent.component */ "./src/app/calendar/r-time-spent/r-time-spent.component.ts");
/* harmony import */ var _personal_info_report_personal_info_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./personal-info-report/personal-info-report.component */ "./src/app/calendar/personal-info-report/personal-info-report.component.ts");
/* harmony import */ var _diary_diary_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./diary/diary.component */ "./src/app/calendar/diary/diary.component.ts");
/* harmony import */ var _r_os_tasks_r_os_tasks_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./r-os-tasks/r-os-tasks.component */ "./src/app/calendar/r-os-tasks/r-os-tasks.component.ts");














var CalendarRoutes = [{
        path: '',
        children: [{
                path: 'tasks-24/7',
                component: _calendar_component__WEBPACK_IMPORTED_MODULE_0__["CalendarComponent"]
            }, {
                path: 'map-task',
                component: _map_task_map_task_component__WEBPACK_IMPORTED_MODULE_1__["MapTaskComponent"]
            }, {
                path: 'implementation',
                component: _implementation_implementation_component__WEBPACK_IMPORTED_MODULE_2__["ImplementationComponent"]
            },
            {
                path: 'popup',
                component: _popup_popup_component__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"]
            },
            {
                path: 'diary',
                component: _diary_diary_component__WEBPACK_IMPORTED_MODULE_12__["DiaryComponent"]
            },
            {
                path: 'timesheet',
                component: _timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_3__["TimesheetComponent"]
            },
            {
                path: 'total-actions',
                component: _totals_action_items_totals_action_items_component__WEBPACK_IMPORTED_MODULE_5__["TotalsActionItemsComponent"]
            },
            {
                path: 'activity-log',
                component: _activity_log_activity_log_component__WEBPACK_IMPORTED_MODULE_6__["ActivityLogComponent"]
            },
            {
                path: 'classification-log',
                component: _classification_timesheet_classification_timesheet_component__WEBPACK_IMPORTED_MODULE_7__["ClassificationTimesheetComponent"]
            },
            {
                path: 'activity-reportLog',
                component: _r_activity_log_r_activity_log_component__WEBPACK_IMPORTED_MODULE_8__["RActivityLogComponent"]
            },
            {
                path: 'report-dashboard',
                component: _rdashboard_rdashboard_component__WEBPACK_IMPORTED_MODULE_9__["RdashboardComponent"]
            },
            {
                path: 'timeSpent-report',
                component: _r_time_spent_r_time_spent_component__WEBPACK_IMPORTED_MODULE_10__["RTimeSpentComponent"]
            },
            {
                path: 'personalInfo-report',
                component: _personal_info_report_personal_info_report_component__WEBPACK_IMPORTED_MODULE_11__["PersonalInfoReportComponent"]
            },
            {
                path: 'outstandingTask-report',
                component: _r_os_tasks_r_os_tasks_component__WEBPACK_IMPORTED_MODULE_13__["ROsTasksComponent"]
            }]
    }];


/***/ }),

/***/ "./src/app/calendar/classification-timesheet/classification-timesheet.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/calendar/classification-timesheet/classification-timesheet.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL2NsYXNzaWZpY2F0aW9uLXRpbWVzaGVldC9jbGFzc2lmaWNhdGlvbi10aW1lc2hlZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/calendar/classification-timesheet/classification-timesheet.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/calendar/classification-timesheet/classification-timesheet.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <p class=\"text-left title clrs-h4-font\" style=\"color: darkslategray\">My Summerized Time Sheet</p>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"col-md-12\">\n        <ng-select [items]=\"timesheetCollection | async\" bindLabel=\"name\" name=\"sPeriod\" placeholder=\"Select Period\"\n          (change)=\"dailyTimeSheetQuery()\" [(ngModel)]=\"selectedDate\"></ng-select>\n      </div>\n      <!-- <div class=\"col-md-3\">\n        <-- <button *ngIf=\"editRpt\" class=\"btn-link btn-magnify\">search</button> ->\n        <button class=\"btn-link btn-magnify\" routerLink=\"./totalsAction\"> view</button>\n      </div> -->\n    </div>\n  </div>\n  <div class=\"card-content table-responsive table-full-width\">\n    <table class=\"table table-striped\">\n      <thead class=\"title clrs-h4-font\">\n        <th class=\"text-left table td-clrs\">Classification</th>\n        <th class=\"text-right table td-clrs\">Hours Spent</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let action of viewDailyTimeSheets | async\">\n          <ng-container *ngIf=\"action.id !== 'lapsed'; else showLapsedField\">\n            <td class=\"text-left table td-clrs\">{{ action.name }}</td>\n            <td class=\"text-right table td-clrs\" style=\"padding-right:2em\">{{ action.totalHours }}</td>\n          </ng-container>\n          <ng-template #showLapsedField>\n            <td class=\"text-left table td-clrs\">{{ action.name }}</td>\n            <td class=\"text-right table td-clrs\" style=\"padding-right:2em\">{{ mlapsdata }}</td>\n          </ng-template>\n        </tr>\n        <tr>\n          <td class=\"text-left table td-clrs title clrs-h4-font\"\n            style=\"color: darkslategray; border-bottom-style: double; border-top-color: black;border-bottom-color: black;\">Totals</td>\n          <td class=\"text-right table td-clrs\"\n            style=\"padding-right:2em; border-bottom-style: double; border-top-color: black;border-bottom-color: black;\"><span>{{ totalHours }}</span></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/calendar/classification-timesheet/classification-timesheet.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/calendar/classification-timesheet/classification-timesheet.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ClassificationTimesheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassificationTimesheetComponent", function() { return ClassificationTimesheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _services_enterprise_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/enterprise.service */ "./src/app/services/enterprise.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_personal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/personal.service */ "./src/app/services/personal.service.ts");
/* harmony import */ var app_services_project_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/services/project.service */ "./src/app/services/project.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ClassificationTimesheetComponent = /** @class */ (function () {
    function ClassificationTimesheetComponent(auth, pns, afAuth, es, ps, afs, location, renderer, element, router, as) {
        var _this = this;
        this.auth = auth;
        this.pns = pns;
        this.afAuth = afAuth;
        this.es = es;
        this.ps = ps;
        this.afs = afs;
        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.as = as;
        this.totalHours = 0;
        afAuth.user.subscribe(function (user) {
            _this.userId = user.uid;
            _this.user = user;
            _this.coloursUsername = user.displayName;
            console.log(_this.userId);
            console.log(_this.user);
            _this.companies = es.getCompanies(user.uid);
            _this.projects = es.getProjects(user.uid);
            _this.myProjects = es.getPersonalProjects(user.uid);
            _this.classifications = pns.getClassifications(user.uid);
            _this.dataCall();
        });
        // this.classTotals = afs.collection('Users').doc(this.userId).collection<workItem>('WeeklyActions').snapshotChanges().pipe(
    }
    ClassificationTimesheetComponent.prototype.dailyTimeSheetQuery = function () {
        var _this = this;
        var timesheetDocId;
        console.log(this.selectedDate);
        timesheetDocId = this.selectedDate;
        var myLapses = this.afs.collection('Users').doc(this.userId).collection('ClassTimeSheetsSum').doc(timesheetDocId.id).collection('classifications');
        this.viewDailyTimeSheets = this.afs.collection('Users').doc(this.userId).collection('ClassTimeSheetsSum').doc(timesheetDocId.id).collection('classifications').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            var mlapsdata;
            var totalHours = 0;
            var unTotalHours = 0;
            _this.myTaskData = data;
            totalHours = 0;
            var work = myLapses.doc(id).collection('woukHours').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            }); }));
            work.subscribe(function (ldata) {
                console.log(ldata);
                var alltime = ldata.length;
                console.log(alltime);
                data.totalHours = alltime;
                _this.myTaskData.totalHours = alltime;
                totalHours = totalHours + alltime;
            });
            console.log(totalHours);
            _this.totalHours = totalHours + unTotalHours;
            console.log(data.totalHours);
            return __assign({ id: id }, data);
        }); }));
    };
    ClassificationTimesheetComponent.prototype.dataCall = function () {
        this.myDocument = this.afs.collection('Users').doc(this.userId);
        this.timesheetCollection = this.myDocument.collection('ClassTimeSheetsSum').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.classTotals = this.myDocument.collection('ClassTimeSheetsSum').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            console.log(data.actualStart);
            return __assign({ id: id }, data);
        }); }));
        return;
    };
    ClassificationTimesheetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.user.subscribe(function (user) {
            _this.userId = user.uid;
            _this.user = user;
            // this.dataCall().subscribe();
        });
        console.log(this.userId);
    };
    ClassificationTimesheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-classification-timesheet',
            template: __webpack_require__(/*! ./classification-timesheet.component.html */ "./src/app/calendar/classification-timesheet/classification-timesheet.component.html"),
            styles: [__webpack_require__(/*! ./classification-timesheet.component.css */ "./src/app/calendar/classification-timesheet/classification-timesheet.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _services_personal_service__WEBPACK_IMPORTED_MODULE_8__["PersonalService"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _services_enterprise_service__WEBPACK_IMPORTED_MODULE_4__["EnterpriseService"], app_services_project_service__WEBPACK_IMPORTED_MODULE_9__["ProjectService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ClassificationTimesheetComponent);
    return ClassificationTimesheetComponent;
}());



/***/ }),

/***/ "./src/app/calendar/diary/diary.component.css":
/*!****************************************************!*\
  !*** ./src/app/calendar/diary/diary.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL2RpYXJ5L2RpYXJ5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/calendar/diary/diary.component.html":
/*!*****************************************************!*\
  !*** ./src/app/calendar/diary/diary.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"col-md-12\" style=\"margin-left: -3em;margin-right: 3em\">\n    <div class=\"card-plain\">\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"card col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <p class=\"na-p\">Your ToDo List Diary</p>\n              </div>\n              <div class=\"col-md-4 text-left\">\n                  <p class=\"clrs-h4-font text-center\"><span id=\"thrs\">{{ nHrs }} </span>: <span id=\"tmins\">{{ nMin }} </span>: <span>{{ nSecs }}</span></p>\n              </div>\n              <div class=\"col-md-4 text-right\">Today`s Overview</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"actNumber != 0\">\n          <div class=\"col-md-5\">\n            <p class=\"category text-left\" style=\"margin-bottom:-1em; padding-left: 25px;\">\n              Click on the task to Enter the Actuals\n            </p><br>\n            <div id=\"accordionActionData\" role=\"tablist\" aria-multiselectable=\"true\" class=\"card-collapse\">\n              <ol style=\"padding-left: 0px;\">\n                <li class=\"\" style=\"color:steelblue\" *ngFor=\"let item of myDiaryItems\">\n                  <div class=\"card card-plain\" *ngIf=\"item.champion.id == userId; else showNonChampField\">\n                    <div class=\"card-header\" role=\"tab\" id=\"heading2\">\n                      <a class=\"collapsed row col-md-12\" data-toggle=\"collapse\" href=\"#{{ item.id }}\" (click)=\"selectAction(item)\" aria-expanded=\"false\" aria-current=\"false\">\n                        <span class=\"label text-info card-category\" style=\"width: 20em;\">{{ item.name }}\n                          <span style=\"width: 10em;\" class=\"pull-right\"><small *ngIf=\"item.targetQty\">Target\n                              <span class=\"label text-warning\">{{ item.targetQty }} {{ item.unit }}</span></small>\n                            <i class=\"nc-icon nc-minimal-down\"></i>\n                          </span>\n                        </span>\n                      </a>\n                    </div>\n                    <div id=\"{{ item.id }}\" class=\"collapse\" data-parent=\"#accordionActionData\" role=\"tabpanel\" aria-labelledby=\"heading2\">\n                      <div class=\"card-body\">\n                        <div class=\"row\">\n                          <div class=\"col-sm-9\">\n                            <p class=\"category text-left\" style=\"margin-bottom: 0px;\">Enter Actual Measurements </p>\n                            <div class=\"form-group\">\n                              <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                <input type=\"number\" class=\"form-control panel-boader\" [(ngModel)]=\"dmData.qty\" style=\" padding-left: 10px; padding-right: 10px; height:2em\"\n                                  placeholder=\"Enter Data\"/>\n                                <div class=\"input-group-postpend\">\n                                  <span class=\"input-group-text\" style=\" padding-left: 10px; padding-right: 10px; height:28px\">\n                                    <small>{{ item.unit }}</small>\n                                  </span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"col-sm-2 card-category\">\n                            <button class=\"btn-link btn-round primary\" (click)=\"saveActual(dmData)\" style=\"margin-top: 11px\">\n                              <small> Save </small>\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <ng-template #showNonChampField>\n                    <div class=\"row\">\n                      <div class=\"col-md-9 text-info\">\n                        {{ item.name }}\n                      </div>\n                      <div class=\"col-md-3\" style=\"padding-top: 5px;\">\n                        <input class=\"card-category col-form-label\" type=\"checkbox\" (change)=\"updateAction($event, item)\">\n                      </div>\n                    </div>\n                  </ng-template>\n                </li>\n              </ol>\n            </div>\n            <div class=\"col-md-12 card-footer\" style=\"padding-right: 0px; padding-left: 0px;\">\n              <code> add new task activity</code>\n              <div class=\"form-group\">\n                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                  <input type=\"text\" class=\"form-control panel-boader\" [(ngModel)]=\"item.name\" style=\" padding-left: 10px; padding-right: 10px; height:2em\"\n                    placeholder=\"Enter current unplanned activity\" /><!-- clrs-cell  -->\n                  <div class=\"input-group-postpend\">\n                    <span class=\"input-group-text\" style=\" padding-left: 10px; padding-right: 10px; height:28px\">\n                      <small>\n                        <button class=\"\" (click)=\"unPlannedTAsk(item)\" title=\"Add item\" style=\"padding-top: 0px; padding-bottom: 0px; cursor: pointer;\">\n                          Add\n                        </button>\n                      </small>\n                    </span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-7\">\n            <ngx-charts-pie-chart *ngIf = \"chartdata\"\n              [view]=\"view\"\n              [scheme]=\"colorScheme\"\n              [results]=\"workItemData\"\n              [legend]=\"showLegend\"\n              [explodeSlices]=\"explodeSlices\"\n              [labels]=\"showLabels\"\n              [doughnut]=\"doughnut\"\n              (select)=\"onSelect($event)\">\n            </ngx-charts-pie-chart><!-- [labels]=\"showLabels\" -->\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-10 ml-auto mr-auto\" *ngIf=\"actNumber == 0\">\n            You have nothing in your Diary Today <br>\n            <p class=\"category\">To add Goto the Implementation Page on either Colours Personal, your enterprise in Colours Enterprises or existing Project Colours Projects dropdown</p>\n          </div>\n          <div class=\"col-md-10 ml-auto mr-auto\" *ngIf=\"actNumber == 0\">\n            <form>\n              <code> add new task activity</code>\n              <div class=\"form-group\">\n                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                  <input type=\"text\" class=\"form-control panel-boader\" [(ngModel)]=\"item.name\" name=\"unplannedWork\" style=\" padding-left: 10px; padding-right: 10px; height:2em\"\n                    placeholder=\"Enter current unplanned activity\" />\n                  <div class=\"input-group-postpend\">\n                    <span class=\"input-group-text\" style=\" padding-left: 10px; padding-right: 10px; height:28px\">\n                      <small>\n                        <button class=\"\" (click)=\"unPlannedTAsk(item)\" title=\"Add item\" style=\"padding-top: 0px; padding-bottom: 0px; cursor: pointer;\">\n                          Add\n                        </button>\n                      </small>\n                    </span>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n        <!-- <div class=\"row\">\n          <div class=\"card-footer col-md-10\">\n            <code> add new task activity</code>\n          </div>\n        </div> -->\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/calendar/diary/diary.component.ts":
/*!***************************************************!*\
  !*** ./src/app/calendar/diary/diary.component.ts ***!
  \***************************************************/
/*! exports provided: DiaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaryComponent", function() { return DiaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_services_initialise_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/initialise.service */ "./src/app/services/initialise.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var DiaryComponent = /** @class */ (function () {
    function DiaryComponent(afAuth, is, router, authService, afs) {
        this.afAuth = afAuth;
        this.is = is;
        this.router = router;
        this.authService = authService;
        this.afs = afs;
        this.updatedActionItems = [];
        this.msum = [];
        this.popData = false;
        this.showActions = false;
        this.chartdata = false;
        this.workItemCount = [];
        this.workItemData = [];
        //Chart
        this.view = [500, 300];
        this.showLegend = true;
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        this.dmData = { updateTime: "", qty: 0 };
        this.selectedAction = is.getActionItem();
        this.actualData = { name: "", time: "", actionId: "", id: "", actuals: null };
        this.actionData = { name: "", time: "", actionId: "", id: "", actuals: null };
        this.item = is.getActionItem();
        this.timedstamp = 0;
    }
    DiaryComponent.prototype.selectAction = function (item) {
        this.selectedAction = item;
        this.selectedTest = this.selectedAction;
        console.log(this.selectedAction);
    };
    DiaryComponent.prototype.checkTest = function (actual) {
        var item = this.selectedAction;
        var champId = this.selectedAction.champion.id;
        var itamName;
        var dataId = item.id + moment__WEBPACK_IMPORTED_MODULE_4__().format('DDDDYYYY');
        var docRef = this.afs.collection('Users').doc(champId).collection('actionItems').doc(item.id)
            .collection('actionActuals').doc(dataId).update({})
            .then(function () {
            // update successful (document exists)
        })
            .catch(function (error) {
            // console.log('Error updating user', error); // (document does not exists)
            // this.afs.doc(`users/${result.uid}`)
            // .set({ data });
        });
    };
    DiaryComponent.prototype.saveActual = function (actual) {
        var _this = this;
        console.log(actual.qty);
        console.log(moment__WEBPACK_IMPORTED_MODULE_4__().toString());
        console.log(moment__WEBPACK_IMPORTED_MODULE_4__().format('DDDD'));
        console.log(moment__WEBPACK_IMPORTED_MODULE_4__().format('TTTT'));
        actual.updateTime = moment__WEBPACK_IMPORTED_MODULE_4__().toString();
        console.log(actual);
        this.dmData = actual;
        console.log(this.selectedAction);
        console.log(this.dmData);
        var value;
        var classId;
        var champId = this.selectedAction.champion.id;
        var cleaningTime = this.aclear();
        // let notify = this.showNotification('Task', 'top', 'right');
        var item = this.selectedAction;
        this.actionData.name = item.name;
        this.actionData.actionId = item.id;
        this.actionData.time = new Date().toISOString();
        console.log(item);
        var timesheetDocId = String(moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).format('DD-MM-YYYY')); //dd/mm/yyyy
        console.log(timesheetDocId);
        // let timesheetDocId = String(moment(new Date()));
        var timesheetworktime = String(moment__WEBPACK_IMPORTED_MODULE_4__(new Date().getTime()));
        var work = {
            WorkingTime: moment__WEBPACK_IMPORTED_MODULE_4__().toString(),
            name: item.name,
            id: item.id,
        };
        var dataId = item.id + moment__WEBPACK_IMPORTED_MODULE_4__().format('DDDDYYYY');
        console.log(dataId);
        this.actionData.actuals = [actual];
        console.log(this.actionData.actuals.length);
        if (item.companyId) {
            console.log('Testing CompanyId passed');
            var allMyActionsRef_1 = this.afs.collection('Enterprises').doc(item.companyId).collection('actionItems').doc(item.id)
                .collection('actionActuals').doc(dataId);
            var allWeekActionsRef_1 = this.afs.collection('Enterprises').doc(item.companyId).collection('WeeklyActions').doc(item.id)
                .collection('actionActuals').doc(dataId);
            var myTaskActionsRef_1 = this.afs.collection('Enterprises').doc(item.companyId).collection('tasks').doc(item.taskId)
                .collection('actionItems').doc(item.id).collection('actionActuals').doc(dataId);
            var champProjectCompWeeklyRef_1 = this.afs.collection('Enterprises').doc(item.companyId)
                .collection('Participants').doc(this.userId).collection('WeeklyActions').doc(item.id).collection('actionActuals').doc(dataId);
            var champTimeSheetRef_1 = this.afs.collection('Enterprises').doc(item.companyId)
                .collection('Participants').doc(this.userId).collection('TimeSheets').doc(timesheetDocId).collection('actionItems').doc(item.id);
            champTimeSheetRef_1.update({
                actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(actual)
            }).then(function () {
                console.log('update successful (document exists)');
            }).catch(function (error) {
                champTimeSheetRef_1.set(_this.actionData);
            });
            allMyActionsRef_1.update({
                actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(actual)
            }).then(function () {
                console.log('update successful (document exists)');
            }).catch(function (error) {
                allMyActionsRef_1.set(_this.actionData);
            });
            allWeekActionsRef_1.update({
                actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(actual)
            }).then(function () {
                console.log('update successful (document exists)');
            }).catch(function (error) {
                allWeekActionsRef_1.set(_this.actionData);
            });
            myTaskActionsRef_1.update({
                actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(actual)
            }).then(function () {
                console.log('update successful (document exists)');
            }).catch(function (error) {
                myTaskActionsRef_1.set(_this.actionData);
            });
            champProjectCompWeeklyRef_1.update({
                actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(actual)
            }).then(function () {
                console.log('update successful (document exists)');
            }).catch(function (error) {
                champProjectCompWeeklyRef_1.set(_this.actionData);
            });
            if (item.projectId != "") {
                var weeklyRef_1 = this.afs.collection('Enterprises').doc(item.companyId).collection('projects').doc(item.projectId)
                    .collection('WeeklyActions').doc(item.id).collection('actionActuals').doc(dataId);
                var prjectWeeklyRef_1 = this.afs.collection('Projects').doc(item.projectId).collection('WeeklyActions').doc(item.id)
                    .collection('actionActuals').doc(dataId);
                var prjectCompWeeklyRef_1 = this.afs.collection('Projects').doc(item.projectId).collection('enterprises').doc(item.companyId)
                    .collection('WeeklyActions').doc(item.id).collection('actionActuals').doc(dataId);
                var champProjectCompWeeklyRef_2 = this.afs.collection('Projects').doc(item.projectId).collection('enterprises').doc(item.companyId)
                    .collection('labour').doc(this.userId).collection('WeeklyActions').doc(item.id).collection('actionActuals').doc(dataId);
                var champTimeSheetRef_2 = this.afs.collection('Projects').doc(item.projectId).collection('enterprises').doc(item.companyId)
                    .collection('labour').doc(this.userId).collection('TimeSheets').doc(timesheetDocId).collection('actionItems').doc(item.id);
                weeklyRef_1.update({
                    actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(actual)
                }).then(function () {
                    console.log('Update successful, document exists');
                    // update successful (document exists)
                }).catch(function (error) {
                    console.log('Error updating user, document does not exists', error);
                    // (document does not exists)
                    weeklyRef_1.set(_this.actionData);
                });
                champTimeSheetRef_2.update({
                    actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(actual)
                }).then(function () {
                    console.log('Update successful, document exists');
                    // update successful (document exists)
                }).catch(function (error) {
                    console.log('Error updating user, document does not exists', error);
                    // .set({ data });
                    champTimeSheetRef_2.set(_this.actionData);
                });
                prjectWeeklyRef_1.update({
                    actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(actual)
                }).then(function () {
                    console.log('Update successful, document exists');
                    // update successful (document exists)
                }).catch(function (error) {
                    console.log('Error updating user, document does not exists', error);
                    // .set({ data });
                    prjectWeeklyRef_1.set(_this.actionData);
                });
                prjectCompWeeklyRef_1.update({
                    actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(actual)
                }).then(function () {
                    console.log('Update successful, document exists');
                    // update successful (document exists)
                }).catch(function (error) {
                    console.log('Error updating user, document does not exists', error);
                    // .set({ data });
                    prjectCompWeeklyRef_1.set(_this.actionData);
                });
                champProjectCompWeeklyRef_2.update({
                    actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(actual)
                }).then(function () {
                    console.log('Update successful, document exists');
                    // update successful (document exists)
                }).catch(function (error) {
                    console.log('Error updating user, document does not exists', error);
                    // .set({ data });
                    champProjectCompWeeklyRef_2.set(_this.actionData);
                });
            }
        }
        ;
        var championTimeSheetRef = this.afs.collection('Users').doc(champId).collection('actionTimeSheets').doc(item.id);
        var championTimeSheetRef2 = this.afs.collection('Users').doc(champId).collection('TimeSheets').doc(timesheetDocId).collection('actionItems').doc(item.id);
        if (item.taskId != '') {
            var championRef2 = this.afs.collection('Users').doc(champId).collection('tasks').doc(item.taskId)
                .collection('actionItems').doc(item.id).collection('actionActuals').doc(dataId);
            championRef2.set(this.actionData);
            // championRef2.collection('actuals').add(actual);
        }
        var weeklyRef = this.afs.collection('Users').doc(champId).collection('WeeklyActions').doc(item.id)
            .collection('actionActuals').doc(dataId);
        var allMyActionsRef = this.afs.collection('Users').doc(champId).collection('actionItems').doc(item.id)
            .collection('actionActuals').doc(dataId);
        championTimeSheetRef.set(item);
        championTimeSheetRef2.set(item);
        championTimeSheetRef.collection('workTime').doc(timesheetworktime).set(work);
        championTimeSheetRef.collection('actionActuals').doc(timesheetworktime).set(work);
        championTimeSheetRef2.collection('workTime').doc(timesheetworktime).set(work);
        championTimeSheetRef2.collection('actionActuals').doc(timesheetworktime).set(work);
        weeklyRef.update({
            actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(actual)
        }).then(function () {
            console.log('Update successful, document exists');
            // update successful (document exists)
        }).catch(function (error) {
            console.log('Error updating user, document does not exists', error);
            // .set({ data });
            weeklyRef.set(_this.actionData);
        });
        allMyActionsRef.update({
            actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(actual)
        }).then(function () {
            console.log('Update successful, document exists');
            // update successful (document exists)
        }).catch(function (error) {
            console.log('Error updating user, document does not exists', error);
            // .set({ data });
            allMyActionsRef.set(_this.actionData);
        });
        if (item.companyId != "") {
            var championRef_1 = this.afs.collection('Users').doc(champId).collection('myenterprises').doc(item.companyId)
                .collection('WeeklyActions').doc(item.id).collection('actionActuals').doc(dataId);
            // championRef.collection('actuals').add(actual);
            championRef_1.update({
                actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(actual)
            }).then(function () {
                console.log('Update successful, document exists');
                cleaningTime;
                // notify;
                // update successful (document exists)
            }).catch(function (error) {
                console.log('Error updating user, document does not exists', error);
                // .set({ data });
                championRef_1.set(_this.actionData).then(function (ref) {
                    cleaningTime;
                    // notify;
                });
            });
        }
        else {
            cleaningTime;
            // notify;
        }
    };
    DiaryComponent.prototype.updateAction = function (e, workAction) {
        var _this = this;
        if (e.target.checked) {
            console.log("ActionItem" + " " + workAction.name + " " + " updated");
            console.log(moment__WEBPACK_IMPORTED_MODULE_4__().toString());
            console.log(moment__WEBPACK_IMPORTED_MODULE_4__().format('DDDD'));
            console.log(moment__WEBPACK_IMPORTED_MODULE_4__().format('TTTT'));
            workAction.UpdatedOn = moment__WEBPACK_IMPORTED_MODULE_4__().toString();
            console.log(workAction);
            var champId = this.userId;
            var cleaningTime_1 = this.aclear();
            var notify_1 = this.showNotification('Task', 'top', 'right');
            var item_1 = workAction;
            console.log(item_1);
            var dataId = item_1.id + moment__WEBPACK_IMPORTED_MODULE_4__().format('dd');
            console.log(dataId);
            var timesheetDocId = String(moment__WEBPACK_IMPORTED_MODULE_4__(new Date()));
            var timesheetworktime = String(moment__WEBPACK_IMPORTED_MODULE_4__(new Date().getTime()));
            var work = {
                WorkingTime: moment__WEBPACK_IMPORTED_MODULE_4__().toString(),
                name: item_1.name,
                id: item_1.id,
            };
            var championTimeSheetRef = this.afs.collection('Users').doc(champId).collection('actionTimeSheets').doc(item_1.id);
            var championTimeSheetRef2 = this.afs.collection('Users').doc(champId).collection('TimeSheets').doc(timesheetDocId).collection('actionItems').doc(item_1.id);
            var championRef2 = this.afs.collection('Users').doc(champId).collection('tasks').doc(item_1.taskId).collection('actionItems').doc(item_1.id);
            var weeklyRef = this.afs.collection('Users').doc(champId).collection('WeeklyActions').doc(item_1.id);
            var allMyActionsRef = this.afs.collection('Users').doc(champId).collection('actionItems').doc(item_1.id);
            championRef2.update({ 'UpdatedOn': workAction.UpdatedOn });
            weeklyRef.update({ 'UpdatedOn': workAction.UpdatedOn });
            allMyActionsRef.update({ 'UpdatedOn': workAction.UpdatedOn });
            championTimeSheetRef.set(item_1);
            championTimeSheetRef2.set(item_1);
            championTimeSheetRef.collection('workTime').doc(timesheetworktime).set(work);
            championTimeSheetRef.collection('actionActuals').doc(timesheetworktime).set(work);
            championTimeSheetRef2.collection('workTime').doc(timesheetworktime).set(work);
            championTimeSheetRef2.collection('actionActuals').doc(timesheetworktime).set(work);
            if (item_1.companyId != "") {
                var championRef_2 = this.afs.collection('Users').doc(champId).collection('enterprises').doc(item_1.companyId);
                championRef_2.collection('WeeklyActions').doc(item_1.id).update({ 'UpdatedOn': workAction.UpdatedOn }).then(function (ref) {
                    championRef_2.collection('TimeSheets').doc(item_1.id);
                    cleaningTime_1;
                    notify_1;
                });
                if (item_1.projectId != "") {
                    var cmpProjectDoc = this.afs.collection('Projects').doc(item_1.projectId).collection('enterprises').doc(item_1.companyId).collection('labour').doc(champId).collection('WeeklyActions').doc(item_1.id);
                    var weeklyRef_2 = this.afs.collection('Enterprises').doc(item_1.companyId).collection('projects').doc(item_1.projectId).collection('labour').doc(champId).collection('WeeklyActions').doc(item_1.id);
                    var champTimeSheetRef_3 = this.afs.collection('Projects').doc(item_1.projectId).collection('enterprises').doc(item_1.companyId)
                        .collection('labour').doc(this.userId).collection('TimeSheets').doc(timesheetDocId).collection('actionItems').doc(item_1.id);
                    champTimeSheetRef_3.update({
                        actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(work)
                    }).then(function () {
                        console.log('Update successful, document exists');
                        // update successful (document exists)
                    }).catch(function (error) {
                        console.log('Error updating user, document does not exists', error);
                        // .set({ data });
                        champTimeSheetRef_3.set(_this.actionData);
                    });
                    cmpProjectDoc.update({ 'UpdatedOn': workAction.UpdatedOn });
                    weeklyRef_2.update({ 'UpdatedOn': workAction.UpdatedOn });
                }
            }
        }
        else {
        }
    };
    DiaryComponent.prototype.unPlannedTAsk = function (unplannedTask) {
        var champId = this.userId;
        var selectedWork = true;
        console.log(unplannedTask);
        unplannedTask.selectedWork = selectedWork;
        // unplannedTask.start = String(this.nHrs + this.nMin);
        unplannedTask.startDate = moment__WEBPACK_IMPORTED_MODULE_4__(new Date(), 'MM-DD-YYYY').format('L');
        unplannedTask.endDate = moment__WEBPACK_IMPORTED_MODULE_4__(new Date(), 'MM-DD-YYYY').format('L');
        unplannedTask.startDay = moment__WEBPACK_IMPORTED_MODULE_4__(new Date(), 'MM-DD-YYYY').format('ddd').toString();
        unplannedTask.endDay = moment__WEBPACK_IMPORTED_MODULE_4__(new Date(), 'MM-DD-YYYY').format('ddd').toString();
        unplannedTask.start = "";
        unplannedTask.end = "";
        unplannedTask.type = "unPlanned";
        unplannedTask.by = this.myData.name;
        unplannedTask.byId = champId;
        unplannedTask.champion = this.myData;
        unplannedTask.createdOn = new Date().toString();
        var weeklyRef = this.afs.collection('Users').doc(champId).collection('WeeklyActions');
        var allMyActionsRef = this.afs.collection('Users').doc(champId).collection('actionItems');
        weeklyRef.add(unplannedTask).then(function (Ref) {
            var newActionId = Ref.id;
            console.log(Ref);
            weeklyRef.doc(newActionId).update({ 'id': newActionId });
            allMyActionsRef.doc(newActionId).set(unplannedTask);
            allMyActionsRef.doc(newActionId).update({ 'id': newActionId });
        });
        console.log(unplannedTask);
        this.item = { uid: "", id: "", name: "", unit: "", quantity: 0, selectedWork: false, targetQty: 0, rate: 0, workHours: null, amount: 0, by: "", byId: "", type: "", champion: null, classification: null, participants: null, departmentName: "", departmentId: "", billID: "", billName: "", projectId: "", projectName: "", createdOn: "", UpdatedOn: "", actualData: null, workStatus: null, complete: false, start: null, end: null, startWeek: "", startDay: "", startDate: "", endDay: "", endDate: "", endWeek: "", taskName: "", taskId: "", companyId: "", companyName: "", classificationName: "", classificationId: "", section: this.is.getSectionInit(), actualStart: "", actualEnd: "", Hours: "" };
    };
    DiaryComponent.prototype.aclear = function () {
        this.dmData = { updateTime: "", qty: 0 };
        this.actualData = { name: "", time: "", actionId: "", id: "", actuals: null };
        // this.selectedAction = this.is.getActionItem();
    };
    DiaryComponent.prototype.setDiary = function (e, action) {
        if (e.target.checked) {
            var selectedWork = true;
            console.log(action.name + '' + 'action checked');
            this.myDocument.collection('myStandards').doc(action.id).update({ 'selectedWork': selectedWork });
        }
        else {
            console.log(action.name + '' + 'action unchecked');
            var selectedWork = false;
            this.myDocument.collection('myStandards').doc(action.id).update({ 'selectedWork': selectedWork });
        }
    };
    DiaryComponent.prototype.dataCall = function () {
        var _this = this;
        this.myDocument = this.afs.collection('Users').doc(this.userId);
        this.userProfile = this.myDocument.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (a) {
            var data = a.payload.data();
            var id = a.payload.id;
            return __assign({ id: id }, data);
        }));
        this.userProfile.subscribe(function (userData) {
            console.log(userData);
            var myData = {
                name: _this.user.displayName,
                email: _this.user.email,
                bus_email: userData.bus_email,
                id: _this.user.uid,
                phoneNumber: _this.user.phoneNumber,
                photoURL: _this.user.photoURL,
                address: userData.address,
                nationality: userData.nationality,
                nationalId: userData.nationalId,
            };
            if (userData.address == "" || userData.address == null || userData.address == undefined) {
                userData.address = "";
            }
            else {
            }
            if (userData.phoneNumber == "" || userData.phoneNumber == null || userData.phoneNumber == undefined) {
                userData.phoneNumber = "";
            }
            else {
            }
            if (userData.bus_email == "" || userData.bus_email == null || userData.bus_email == undefined) {
                userData.bus_email = "";
            }
            else {
            }
            if (userData.nationalId == "" || userData.nationalId == null || userData.nationalId == undefined) {
                userData.nationalId = "";
            }
            else {
            }
            if (userData.nationality == "" || userData.nationality == null || userData.nationality == undefined) {
                userData.nationality = "";
            }
            else {
            }
            _this.myData = myData;
            _this.userData = userData;
        });
        var currentDate = moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).format('L');
        ;
        var today = moment__WEBPACK_IMPORTED_MODULE_4__(new Date(), "YYYY-MM-DD");
        console.log(currentDate);
        var userDocRef = this.myDocument;
        this.viewActions = userDocRef.collection('WeeklyActions'
        // , ref => ref
        // .where("startDate", '==', currentDate)
        // .limit(4)
        ).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.viewActions.subscribe(function (actions) {
            _this.actNumber = 0;
            _this.myDiaryItems = [];
            _this.myActionItems = [];
            actions.forEach(function (data) {
                var element = data;
                if (moment__WEBPACK_IMPORTED_MODULE_4__(element.startDate).isSameOrBefore(today) && element.complete == false) {
                    if (element.selectedWork == true) {
                        _this.myActionItems.push(element);
                        _this.myDiaryItems.push(element);
                        console.log(_this.myActionItems);
                        _this.chartdata = true;
                        _this.processData(_this.myActionItems);
                    }
                }
            });
            _this.actNumber = _this.myDiaryItems.length;
            // this.myActionItems = actions;
            // console.log(actions.length)
            // console.log(actions)
            _this.actionNo = actions.length;
        });
        if (this.actionNo == 0) {
            this.showActions = false;
        }
        else {
            this.showActions = true;
        }
    };
    DiaryComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    DiaryComponent.prototype.processData = function (entries) {
        var _this = this;
        this.workItemCount = [];
        this.workItemData = [];
        entries.forEach(function (element) {
            if (_this.workItemCount[element.name])
                _this.workItemCount[element.name] += 1;
            else
                _this.workItemCount[element.name] = 1;
        });
        for (var key in this.workItemCount) {
            var singleentry = {
                // id: key,
                name: key,
                value: this.workItemCount[key]
            };
            this.workItemData.push(singleentry);
        }
    };
    DiaryComponent.prototype.showNotification = function (data, from, align) {
        // var type = ['', 'info', 'success', 'warning', 'danger'];
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        if (data === 'project') {
            $.notify({
                icon: "ti-gift",
                message: "A new project has been created <br> check colours projects dropdown."
            }, {
                type: type[color],
                timer: 4000,
                placement: {
                    from: from,
                    align: align
                },
                template: '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
            });
        }
        if (data === 'Task') {
            $.notify({
                icon: "ti-gift",
                message: "Task has been updated."
            }, {
                type: type[color],
                timer: 4000,
                placement: {
                    from: from,
                    align: align
                },
                template: '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
            });
        }
        if (data === 'comp') {
            $.notify({
                icon: "ti-gift",
                message: "A new enterprise has been created <b> check colours enterprise dropdown."
            }, {
                type: type[color],
                timer: 4000,
                placement: {
                    from: from,
                    align: align
                },
                template: '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
            });
        }
    };
    DiaryComponent.prototype.showSwal = function (type) {
        if (type == 'basic') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Here's a message!",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-success"
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.noop);
        }
        else if (type == 'title-and-text') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Here's a message!",
                text: "It's pretty, isn't it?",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-info"
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.noop);
        }
        else if (type == 'success-message') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Good job!",
                text: "You clicked the button!",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-success",
                type: "success"
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.noop);
        }
        else if (type == 'warning-message-and-confirmation') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonClass: 'btn btn-success',
                cancelButtonClass: 'btn btn-danger',
                confirmButtonText: 'Yes, delete it!',
                buttonsStyling: false
            }).then(function (result) {
                if (result.value) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                        title: 'Deleted!',
                        text: 'Your file has been deleted.',
                        type: 'success',
                        confirmButtonClass: "btn btn-success",
                        buttonsStyling: false
                    });
                }
            });
        }
        else if (type == 'warning-message-and-cancel') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, keep it',
                confirmButtonClass: "btn btn-success",
                cancelButtonClass: "btn btn-danger",
                buttonsStyling: false
            }).then(function (result) {
                if (result.value) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                        title: 'Deleted!',
                        text: 'Your imaginary file has been deleted.',
                        type: 'success',
                        confirmButtonClass: "btn btn-success",
                        buttonsStyling: false
                    }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.noop);
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                        title: 'Cancelled',
                        text: 'Your imaginary file is safe :)',
                        type: 'error',
                        confirmButtonClass: "btn btn-info",
                        buttonsStyling: false
                    }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.noop);
                }
            });
        }
        else if (type == 'custom-html') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                title: 'HTML example',
                buttonsStyling: false,
                confirmButtonClass: "btn btn-success",
                html: 'You can use <b>bold text</b>, ' +
                    '<a href="https://github.com">links</a>' +
                    'and other HTML tags' +
                    '{{ userData.name }}'
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.noop);
        }
        else if (type == 'auto-close') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Auto close alert!",
                text: "I will close in 2 seconds.",
                timer: 2000,
                showConfirmButton: false
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.noop);
        }
        else if (type == 'input-field') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                title: 'Input something',
                html: '<div class="form-group">' +
                    '<input id="input-field" type="text" class="form-control" />' +
                    '</div>',
                showCancelButton: true,
                confirmButtonClass: 'btn btn-success',
                cancelButtonClass: 'btn btn-danger',
                buttonsStyling: false
            }).then(function (result) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                    type: 'success',
                    html: 'You entered: <strong>' +
                        $('#input-field').val() +
                        '</strong>',
                    confirmButtonClass: 'btn btn-success',
                    buttonsStyling: false
                });
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.noop);
        }
    };
    DiaryComponent.prototype.dhms = function (t) {
        this.mytime = ((new Date().getTime()) / 1000);
        this.mytime = new Date().getTime();
        this.future = new Date();
        // if (this.timedstamp > 0) {
        //   if (this.timedstamp % 60 == 0) {
        //     // alert('An hour has passed')
        //     this.showSwal('custom-html')
        //   };
        // }
        var days, hours, minutes, seconds;
        days = Math.floor(t / 86400);
        t -= days * 86400;
        hours = Math.floor(t / 3600) % 24;
        t -= hours * 3600;
        minutes = Math.floor(t / 60) % 60;
        t -= minutes * 60;
        seconds = t % 60;
        this.timedstamp += 1;
        // console.log(this.timedstamp);
        this.mygetTime();
        // console.log(this.nHrs, ':', this.nMin);
        return [
            //days + 'd',
            hours + 'h',
            minutes + 'm',
            seconds + 's'
        ].join(' ');
    };
    DiaryComponent.prototype.mygetTime = function () {
        return __awaiter(this, void 0, void 0, function () {
            var d, nHrs, nMin, nSecs;
            return __generator(this, function (_a) {
                d = new Date();
                nHrs = d.getHours();
                nMin = d.getMinutes();
                nSecs = d.getSeconds();
                this.nSecs = Math.floor(nSecs);
                this.nHrs = Math.floor(nHrs);
                this.nMin = Math.floor(nMin);
                return [2 /*return*/];
            });
        });
    };
    DiaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.future  = new Date(this.futureString);
        this.future = new Date();
        this.counter$ = rxjs_Rx__WEBPACK_IMPORTED_MODULE_6__["Observable"].interval(1000).map(function (x) {
            //return Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
            return Math.floor((_this.timedstamp - new Date().getTime()) / 1000);
            //return Math.floor(( new Date().getTime()));
        });
        this.subscription = this.counter$.subscribe(function (x) { return _this.message = _this.dhms(x); });
        var d = new Date();
        var da = new Date();
        this.afAuth.user.subscribe(function (user) {
            _this.userId = user.uid;
            _this.user = user;
            // let myData = {
            //   name: this.user.displayName,
            //   email: this.user.email,
            //   id: this.user.uid,
            //   phoneNumber: this.user.phoneNumber,
            //   photoURL: this.user.photoURL
            // }
            // this.myData = myData;
            _this.dataCall();
        });
    };
    DiaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-diary',
            template: __webpack_require__(/*! ./diary.component.html */ "./src/app/calendar/diary/diary.component.html"),
            styles: [__webpack_require__(/*! ./diary.component.css */ "./src/app/calendar/diary/diary.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], app_services_initialise_service__WEBPACK_IMPORTED_MODULE_8__["InitialiseService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], DiaryComponent);
    return DiaryComponent;
}());



/***/ }),

/***/ "./src/app/calendar/implementation/implementation.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/calendar/implementation/implementation.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL2ltcGxlbWVudGF0aW9uL2ltcGxlbWVudGF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/calendar/implementation/implementation.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/calendar/implementation/implementation.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"main-content\"> -->\n<div class=\"col-md-12\">\n  <div class=\"card-body nav-hor-tabs\">\n    <div class=\"nav-tabs-navigation\">\n      <div class=\"nav-tabs-wrapper\">\n        <ul id=\"tabs\" class=\"nav nav-tabs\" role=\"tablist\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-colors active\" data-toggle=\"tab\" href=\"#intray\" role=\"tab\" aria-expanded=\"true\">\n              Things To Do In Tray</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-colors\" data-toggle=\"tab\" href=\"#weekly\" role=\"tab\" aria-expanded=\"true\">\n              Weekly Calendar</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-colors\" data-toggle=\"tab\" (click)=\"initDiary()\" href=\"#diary\" role=\"tab\"\n              aria-expanded=\"false\">Daily Diary</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div id=\"my-tab-content\" class=\"tab-content text-center\">\n      <div class=\"tab-pane active\" id=\"intray\" role=\"tabpanel\" aria-expanded=\"true\">\n        <div class=\"row\">\n          <div class=\"col-md-6 ml-auto mr-auto\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\" style=\"padding-top:0px\">\n                <div class=\"card-category clrs-h1 text-left\">\n                  <a>Things To Do In Tray</a>\n                </div>\n                <div class=\"card-body\" style=\"padding-left: 0px;padding-right: 0px;\">\n                  <div id=\"accordionTsk\" role=\"tablist\" aria-multiselectable=\"true\" class=\"card-collapse\">\n                    <div class=\"card card-plain\">\n                      <div class=\"card-header text-left\" role=\"tab\" id=\"headingOne\">\n                        <a data-toggle=\"collapse\" href=\"#Outstanding\" aria-expanded=\"true\" aria-controls=\"Outstanding\" title=\"Click to see Tasks in your In Tray\"> <!--  (click)=\"dataCALL()\" -->\n                          Outstanding Tasks\n                          <i class=\"nc-icon nc-minimal-down\"></i>\n                        </a>\n                      </div>\n                      <div id=\"Outstanding\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordionTsk\">\n                        <div class=\"card-body\" style=\"padding-left: 0px;padding-right: 0px;\">\n                          <div class=\"content container scroll-task\" style=\"padding-left: 0px;\">\n                            <ol> \n                              <li class=\"\" style=\"color:steelblue\" *ngFor=\"let tss of OutstandingTasks\">\n                                <div class=\"row\">\n                                  <div class=\"col-sm-12 text-left\" style=\"margin-right:-.5em\">\n                                    <button class=\"dropdown-toggle btn-link\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"color:slategrey\">\n                                      {{ tss.name }}<span class=\"label text-warning\"> {{ tss.when }}</span>\n                                    </button>\n                                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                      <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" (click)=\"add2WeeklyPlan(tss)\" data-toggle=\"modal\" data-target=\"#dptModal\"\n                                       title=\"Add {{ tss.name }} to a week`s tasks\">\n                                        Add to my Week's tasks\n                                      </button>\n                                    </div>\n                                  </div>\n                                </div>\n                              </li>\n                            </ol>\n                            <p *ngIf=\"OutstandingTasks.length == 0\">No Outstanding Tasks</p>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"card card-plain\">\n                      <div class=\"card-header text-left\" role=\"tab\" id=\"headingTwo\">\n                        <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#currentTsk\" aria-expanded=\"false\" aria-controls=\"currentTsk\" title=\"Click to see Tasks in your In Tray\">\n                          Current Tasks\n                          <i class=\"nc-icon nc-minimal-down\"></i>\n                        </a>\n                      </div>\n                      <div id=\"currentTsk\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionTsk\">\n                        <div class=\"card-body\" style=\"padding-left: 0px;padding-right: 0px;\">\n                          <div class=\"content container scroll-task\" style=\"padding-left: 0px;\">\n                            <ol>\n                              <li class=\"\" style=\"color:steelblue\" *ngFor=\"let tss of CurrentTAsks\">\n                                <div class=\"row\">\n                                  <div class=\"col-sm-12 text-left\" style=\"margin-right:-.5em\">\n                                    <button class=\"dropdown-toggle btn-link\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"color:slategrey\">\n                                      {{ tss.name }}<span class=\"label text-warning\"> {{ tss.when }}</span>\n                                    </button>\n                                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                      <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" (click)=\"add2WeeklyPlan(tss)\" data-toggle=\"modal\" data-target=\"#dptModal\"\n                                       title=\"Add {{ tss.name }} to a week`s tasks\">\n                                        Add to my Week's tasks\n                                      </button>\n                                      <!-- <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" (click)=\"closeTask(project)\" title=\"Set task as completed\">Task\n                                        Complete</button> -->\n                                    </div>\n                                  </div>\n                                </div>\n                              </li>\n                            </ol>\n                            <p *ngIf=\"CurrentTAsks.length == 0\">No Current Tasks</p>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"card card-plain\">\n                      <div class=\"card-header text-left\" role=\"tab\" id=\"headingThree\">\n                        <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#upcoming\" aria-expanded=\"false\" aria-controls=\"upcoming\" title=\"Click to see Tasks in your In Tray\">\n                          Upcoming Tasks\n                          <i class=\"nc-icon nc-minimal-down\"></i>\n                        </a>\n                      </div>\n                      <div id=\"upcoming\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionTsk\">\n                        <div class=\"card-body\" style=\"padding-left: 0px;padding-right: 0px;\">\n                          <div class=\"content container scroll-task\" style=\"padding-left: 0px;\">\n                            <!-- Short Term Tasks<br> -->\n                          <div class=\"card-header text-left\"> Short Term Tasks</div><br>\n                            <ol>\n                              <li class=\"\" style=\"color:steelblue\" *ngFor=\"let tss of ShortTermTAsks\">\n                                <div class=\"row\">\n                                  <div class=\"col-sm-12 text-left\" style=\"margin-right:-.5em\">\n                                    <button class=\"dropdown-toggle btn-link\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                                      aria-expanded=\"false\" style=\"color:slategrey\">\n                                      {{ tss.name }}<span class=\"label text-warning\"> {{ tss.when }}</span>\n                                    </button>\n                                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                      <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" (click)=\"add2WeeklyPlan(tss)\" data-toggle=\"modal\"\n                                        data-target=\"#dptModal\" title=\"Add {{ tss.name }} to a week`s tasks\">Add\n                                        to my Week's tasks\n                                      </button>\n                                      <!-- <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" (click)=\"closeTask(project)\" title=\"Set task as completed\">Task\n                                                                        Complete</button> -->\n                                    </div>\n                                  </div>\n                                </div>\n                              </li>\n                            </ol>\n                            <!-- Medium Term Tasks<br> -->\n                          <div class=\"card-header text-left\">Medium Term Tasks</div><br>\n                            <ol>\n                              <li class=\"\" style=\"color:steelblue\" *ngFor=\"let tss of MediumTermTAsks\">\n                                <div class=\"row\">\n                                  <div class=\"col-sm-12 text-left\" style=\"margin-right:-.5em\">\n                                    <button class=\"dropdown-toggle btn-link\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                                      aria-expanded=\"false\" style=\"color:slategrey\">\n                                      {{ tss.name }}<span class=\"label text-warning\"> {{ tss.when }}</span>\n                                    </button>\n                                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                      <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" (click)=\"add2WeeklyPlan(tss)\" data-toggle=\"modal\"\n                                        data-target=\"#dptModal\" title=\"Add {{ tss.name }} to a week`s tasks\">Add\n                                        to my Week's tasks\n                                      </button>\n                                      <!-- <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" (click)=\"closeTask(project)\" title=\"Set task as completed\">Task\n                                                                        Complete</button> -->\n                                    </div>\n                                  </div>\n                                </div>\n                              </li>\n                            </ol>\n                            <!-- Long Term Tasks<br> -->\n                          <div class=\"card-header text-left\">Long Term Tasks</div><br>                          \n                            <ol>\n                              <li class=\"\" style=\"color:steelblue\" *ngFor=\"let tss of LongTermTAsks\">\n                                <div class=\"row\">\n                                  <div class=\"col-sm-12 text-left\" style=\"margin-right:-.5em\">\n                                    <button class=\"dropdown-toggle btn-link\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                                      aria-expanded=\"false\" style=\"color:slategrey\">\n                                      {{ tss.name }}<span class=\"label text-warning\"> {{ tss.when }}</span>\n                                    </button>\n                                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                      <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" (click)=\"add2WeeklyPlan(tss)\" data-toggle=\"modal\"\n                                        data-target=\"#dptModal\" title=\"Add {{ tss.name }} to a week`s tasks\">Add\n                                        to my Week's tasks\n                                      </button>\n                                      <!-- <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" (click)=\"closeTask(project)\" title=\"Set task as completed\">Task\n                                                                        Complete</button> -->\n                                    </div>\n                                  </div>\n                                </div>\n                              </li>\n                            </ol>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6 ml-auto mr-auto\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\" style=\"padding-top:0px\">\n                <div class=\"card-category clrs-h4-font text-left\">\n                  <a class=\"pull-left\">My Weekly To Do List</a><p class=\"category\" style=\"margin-top:-1em\">\n                      Click on a Task that you have selected for your weeks to create sub-Tasks called Task activities </p><br>\n                </div>\n                <div>\n                  <div id=\"accordionA\" role=\"tablist\" aria-multiselectable=\"true\" class=\"card-collapse\">\n                    <ol>\n                      <li *ngFor=\"let tss of weeklyTasks | async\" style=\"color:slategray\">\n                        <div class=\"row\">\n                          <div class=\"col-md-8 col-sm-8 ml-auto mr-auto\">\n                            <div class=\"card card-plain\">\n                              <div class=\"card-header\" role=\"tab\" id=\"heading2\">\n                                <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#{{  tss.id  }}\" (click)=\"viewMyTaskActions(tss)\" title=\"Click on Tasks in your In Tray\"\n                                  aria-expanded=\"false\" aria-current=\"false\">{{ tss.name }}<i class=\"nc-icon nc-minimal-down\"></i>\n                                </a>\n                              </div>\n                              <div id=\"{{  tss.id  }}\" class=\"collapse\" data-parent=\"#accordionA\" role=\"tabpanel\"\n                                aria-labelledby=\"heading2\">\n                                <div class=\"card-body\">\n                                  <ol style=\"padding-left: 0px;\">\n                                    <li *ngFor=\"let item of mytaskActions | async\">{{ item.name }}\n                                      <!-- <input [(ngModel)]=\"checkedAction\" class=\"form-check-input pull-right col-form-label\" id=\"checkbox1\" type=\"checkbox\"> -->\n                                      <input style=\"margin-top: 4px;\" class=\"pull-right col-form-label\" type=\"checkbox\" (change)=\"selectAction($event, item)\">\n                                    </li>\n                                  </ol>\n                                </div>\n                                <button class=\"btn-link btn-round primary\" (click)=\"selectTask(tss)\" data-toggle=\"modal\"\n                                  data-target=\"#newAction\">\n                                  <small>Add Task activity</small>\n                                </button>\n                              </div>\n                            </div>\n                          </div>\n                          <label class=\"col-md-1 col-sm-1 mr-auto\">\n                            <button class=\"btn btn-icon btn-round btn-danger btn-link remove\" (click)=\"removeWeekTask(tss)\"\n                              title=\"Remove {{ tss.name }}\"><i class=\"fa fa-times\"></i></button>\n                          </label>\n                        </div>\n                      </li>\n                    </ol>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <p class=\"na-an\" style=\"color: steelblue; margin-bottom: 0px;margin-left: 2em;\"><i class=\"ti-palette\"></i>list of week's selected Task activities</p>\n                  <ol>\n                    <li *ngFor=\"let item of selectedActionItems\">\n                      {{ item.name }}\n                    </li>\n                  </ol>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"tab-pane\" id=\"weekly\" role=\"tabpanel\" aria-expanded=\"false\">\n        <div class=\"col-md-12 col-sm-12 ml-auto mr-auto\">\n          <p class=\"clrs-h4-font text-left\" style=\"margin-top:-1em; color: darkslategrey\">Calendar Weekly Activities.</p>\n          <p class=\"category text-left\" style=\"margin-top:-1em\">\n            These are task classification standard activities and work activities picked for this week's activities\n          </p>\n        </div>\n        <div class=\"row card-category clrs-h4-font\">\n          <div class=\"col-sm-4\">Task Activity\n          </div>\n          <div class=\"col-sm-8\">\n            <div class=\"row\">\n              <div class=\"col-sm-6 text-left na-an\">Start Date</div>\n              <div class=\"col-sm-6 text-left ma-an\">Finish Date</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <ol>\n            <li *ngFor=\"let item of standards | async\">\n              <div class=\"row\" style=\"color: darkslategrey\" *ngIf=\"item.complete === false\">\n              <!-- <div class=\"row text-info\"> -->\n                <div class=\"col-sm-3 text-left\" style=\"padding-left: 2em\">\n                  {{ item.name }}\n                </div>\n                <div class=\"col-sm-9\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-5 text-left\">{{ item.startDay }}, {{ item.startDate }}</div>\n                    <div class=\"col-sm-5 text-left\">{{ item.endDay }}, {{ item.endDate }}</div>\n                    <button class=\"primary btn-link\" (click)=\"selectClassAction(item)\" data-toggle=\"modal\" data-target=\"#editClassActionItem\"\n                      style=\" padding-top: 0px; padding-bottom: 0px;\">\n                      Add date</button>\n                  </div>\n\n                </div>\n              </div>\n            </li>\n            <li *ngFor=\"let item of myWeeklyActions | async\">\n              <div class=\"row text-info\">\n                <div class=\"col-sm-3 text-left\" style=\"padding-left: 2em\">\n                  {{ item.name }}\n                </div>\n                <div class=\"col-sm-9\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-5 text-left\">{{ item.startDay }}, {{ item.startDate }}</div>\n                    <div class=\"col-sm-5 text-left\">{{ item.endDay }}, {{ item.endDate }}</div>\n                    <button class=\"primary btn-link\" (click)=\"selectEditAction(item)\" data-toggle=\"modal\" data-target=\"#editAction\"\n                      style=\" padding-top: 0px; padding-bottom: 0px;\">\n                      Add date</button>\n                  </div>\n                </div>\n              </div>\n            </li>\n          </ol>\n        </div>\n        <div class=\"row card-category\">\n          <div class=\"col-md-12 col-sm-12\">\n            <p class=\"category\">Click Add date to add or edit the start and end date for the Task Activity</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"tab-pane\" id=\"diary\" role=\"tabpanel\" aria-expanded=\"false\">\n        <div class=\"row card-category clrs-h4-font\">\n          <div class=\"col-sm-3\">\n            <a class=\"clrs-h1 text-left\">Daily Diary</a>\n          </div>\n          <div class=\"col-sm-2\"></div>\n          <div class=\"col-sm-2\"><a class=\"btn btn-primary btn-link a-mycol\" (click)=\"changeDay('previous')\">Previous</a></div>\n          <!-- <div class=\"col-sm-3 clrs-h1 text-info\">{{ workWeekDay }}, {{ workDay }}</div> -->\n          <div class=\"col-sm-3 clrs-h4-font text-info\">{{ workWeekDay }}, {{ workDay }}</div>\n          <div class=\"col-sm-2\"><a class=\"btn btn-primary btn-link a-mycol\" (click)=\"changeDay('next')\">Next</a></div>\n        </div>\n        <div class=\"card-body\" style=\"margin-top: -10px\">\n          <!-- <div class=\"row\" *ngIf= \"viewTodaystds || viewTodays\"> -->\n          <div class=\"row\" *ngIf= \"viewTodaystds\">\n            <div class=\"card-header text-left\"><i class=\"fa fa-check-box\"></i></div>\n            <div class=\"col-sm-2 card-header text-center\">Task Activity<small class=\"category\"> Item</small></div>\n            <div class=\"col-sm-3 card-header text-right\">Target Qty<small class=\"category\"> for today</small></div>\n            <div class=\"col-sm-2 card-header text-left\">Start time</div>\n            <div class=\"col-sm-2 card-header text-left\">Finish time</div>\n            <div class=\"col-sm-2 card-header text-left\"></div>\n          </div>\n          <ng-container>\n            <div class=\"col-sm-12\">\n              <ul style=\"list-style-type:none;padding-left: 10px;\">\n                <li *ngFor=\"let item of allMystandards | async\">\n                  <div class=\"row\">\n                    <div class=\"text-left\">\n                      <input style=\"margin-top: 4px;\" class=\"pull-right col-form-label\" *ngIf=\" item.selectedWork == true; else UCK\" type=\"checkbox\" checked (change)=\"setDiary($event, item)\">\n                      <ng-template #UCK>\n                        <input style=\"margin-top: 4px;\" class=\"pull-right col-form-label\" type=\"checkbox\" (change)=\"setDiary($event, item)\">\n                      </ng-template>\n                    </div>\n                    <div class=\"col-sm-3 pull-left\">\n                      <button class=\"form-control panel-boader clrs-cell btn-link text-left\" [ngClass]=\"{'text-success' : item.selectedWork == true}\"\n                        style=\"padding-top: 2px; padding-left: 10px; padding-right: 10px; height:2em\">{{ item.name }}\n                      </button>\n                    </div>\n                    <div class=\"col-sm-2\" style=\"padding-left: 5px; padding-right:5px\">\n                      <div class=\"form-group\">\n                        <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                          <input type=\"text\" class=\"form-control panel-boader\" [(ngModel)]=\"item.targetQty\" style=\" padding-left: 10px; padding-right: 10px; height:2em\"\n                            placeholder=\"No\" rel=\"tooltip\" title=\"Click and enter todays'arget quantity\"/>\n                          <div class=\"input-group-postpend\">\n                            <span class=\"input-group-text\" style=\" padding-left: 10px; padding-right: 10px; height:28px\">\n                              \n                              <small>{{ item.unit }}</small>\n                            </span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-2\" style=\"padding-left: 5px; padding-right:5px\">\n                      <div class=\"form-group\">\n                        <input type=\"time\" class=\"form-control panel-boader timepicker\" [(ngModel)]=\"item.start\" style=\" padding-left: 10px; padding-right: 10px; height:2em\"\n                          rel=\"tooltip\" title=\"Click, enter start time\" placeholder=\"Time from\" />\n                      </div>\n                    </div>\n                    <div class=\"col-sm-2\" style=\"padding-left: 5px; padding-right:5px\">\n                      <div class=\"form-group\">\n                        <input type=\"time\" class=\"form-control panel-boader timepicker\" [(ngModel)]=\"item.end\" style=\" padding-left: 10px; padding-right: 10px;  height:2em\"\n                          rel=\"tooltip\" title=\"Click, enter end time\" placeholder=\"Time to\" /> \n                      </div>\n                    </div>\n                    <div class=\"col-sm-2\" style=\"padding-left: 5px; padding-right:5px\">\n                      <div class=\"btn-group btn-group-toggle\">\n                        <button class=\"form-control panel-boader clrs-cell btn-link\" style=\"padding-top: 2px; padding-left: 10px; padding-right: 10px; height:2em\"\n                            rel=\"tooltip\" title=\"Click to  update the activity\" (click)=\"addClassActionTime(item)\"><small>Save</small></button>\n                        <!-- <button class=\"form-control panel-boader clrs-cell btn-link\" style=\"padding-top: 2px; padding-left: 10px; padding-right: 10px; height:2em\"\n                          rel=\"tooltip\" title=\"Click to confirm complete\"><small>Complete</small></button> -->\n                      </div>\n                    </div>\n                  </div>\n                </li>\n                <li *ngFor=\"let item of viewDayActions\">\n                  <div class=\"row\">\n                    <div class=\"text-left\">\n                      <input style=\"margin-top: 4px;\" class=\"pull-right col-form-label\" *ngIf=\"item.selectedWork == true; else NCK\" type=\"checkbox\" checked (change)=\"setDiaryAction($event, item)\">\n                      <ng-template #NCK>\n                        <input style=\"margin-top: 4px;\" class=\"pull-right col-form-label\" type=\"checkbox\" (change)=\"setDiaryAction($event, item)\">\n                      </ng-template>\n                    </div>\n                    <div class=\"col-sm-3 pull-left\">\n                      <button class=\"form-control panel-boader clrs-cell btn-link text-left\" [ngClass]=\"{'text-success' : item.selectedWork == true}\"\n                        style=\"padding-top: 2px; padding-left: 10px; padding-right: 10px; height:2em\">{{ item.name }}\n                      </button>\n                    </div>\n                    <div class=\"col-sm-2\" style=\"padding-left: 5px; padding-right:5px\">\n                      <div class=\"form-group\">\n                        <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                          <input type=\"text\" class=\"form-control panel-boader\" [(ngModel)]=\"item.targetQty\" \n                            style=\" padding-left: 10px; padding-right: 10px; height:2em\" placeholder=\"No\"  rel=\"tooltip\" title=\"Click and enter todays'arget quantity\"/>\n                          <div class=\"input-group-postpend\">\n                            <span  *ngIf=\"!item.unit.id; else showUnit\" class=\"input-group-text\" style=\" padding-left: 10px; padding-right: 10px; height:28px\">\n                              <small><span>{{ item.unit.id }}</span><span *ngIf=\"!item.unit.id\">{{ item.unit }}</span></small>\n                            </span>\n                            <ng-template #showUnit>\n                              <span class=\"input-group-text\" style=\" padding-left: 10px; padding-right: 10px; height:28px\">\n                                <small>{{ item.unit }}</small>\n                              </span>\n                            </ng-template>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-2\" style=\"padding-left: 5px; padding-right:5px\">\n                      <div class=\"form-group\">\n                        <input type=\"time\" class=\"form-control panel-boader timepicker\" [(ngModel)]=\"item.start\" rel=\"tooltip\" title=\"Click, enter start time\"\n                          style=\" padding-left: 10px; padding-right: 10px; height:2em\" placeholder=\"Time from\" /> <!-- clrs-cell  -->\n                      </div>\n                    </div>\n                    <div class=\"col-sm-2\" style=\"padding-left: 5px; padding-right:5px\">\n                      <div class=\"form-group\">\n                        <input type=\"time\" class=\"form-control panel-boader timepicker\" [(ngModel)]=\"item.end\" rel=\"tooltip\" title=\"Click, enter end time\"\n                          style=\" padding-left: 10px; padding-right: 10px;  height:2em\" placeholder=\"Time to\" />\n                      </div>\n                    </div>\n                    <div class=\"col-sm-2\" style=\"padding-left: 5px; padding-right:5px\">\n                      <div class=\"btn-group btn-group-toggle\">\n                        <button  class=\"form-control panel-boader clrs-cell btn-link\" rel=\"tooltip\" title=\"Click to update the activity\"\n                          style=\"padding-top: 2px; padding-left: 10px; padding-right: 10px; height:2em\" (click)=\"addActionTime(item)\"><small>Save</small></button>\n                        <button (click)=\"setAction(item)\" class=\"form-control panel-boader clrs-cell btn-link\" style=\"padding-top: 2px; padding-left: 10px; padding-right: 10px; height:2em\"\n                          rel=\"tooltip\" title=\"Click to confirm complete\" data-toggle=\"modal\" data-target=\"#actionClosure\"><small>Complete</small></button>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"!viewTodaystds && !viewTodayWork\">\n            <h4 class=\"clrs-h4-font\">\n              You have no activity planned Today\n            </h4>\n          </ng-container>\n          <div class=\"card-footer\">\n            <div class=\"row\">\n              <div class=\"col-md-9 text-left\">\n                <p class=\"category\">To create new task under<b> Daily Diary </b>If the new activity does not belong to any existing task Goto Planning & create the Task for your activity and remember to add the task to weekly Tasks</p>\n              </div>\n              <div class=\"col-md-3 text-right\">\n                <button class=\"primary btn-link\" data-toggle=\"modal\" data-target=\"#newActionToday\" rel=\"tooltip\" title=\"Create new Task Activity\"> <!-- (click)=\"selectEditAction(item);showActionParticipants()\"  -->\n                  New Task Activity\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- </div> -->\n<div class=\"modal fade modal-primary\" id=\"editUnits\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\"><!--  modal-sm -->\n    <div class=\"modal-content\">\n      <div class=\"modal-header justify-content-center\">\n        <div class=\"modal-profile ml-auto mr-auto\">\n          <i class=\"nc-icon nc-bulb-63\"></i>\n        </div>\n      </div>\n      <div class=\"modal-body\">\n        <p class=\"text-center\">Edit Units for {{ selectEditWorkItem.name }}</p>\n        <div class=\"row\">\n          <label class=\"col-md-4 col-form-label\">Select Unit</label>\n          <div class=\"col-md-7\">\n            <div class=\"form-group\">\n              <!-- <ng-select [items]=\"SIunits\" bindLabel=\"name\" name=\"jyu\" placeholder=\"Select unit of Measure\" [(ngModel)]=\"selectEditWorkItem.unit\"></ng-select> -->\n              <ng-select [items]=\"SIunits\" bindLabel=\"name\" id=\"sui1\" name=\"jyu\" placeholder=\"Select unit of Measure\" [(ngModel)]=\"setSui\">\n              </ng-select>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"left-side\">\n          <button type=\"button\" class=\"btn btn-link btn-link\" data-dismiss=\"modal\">Back</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n          <button type=\"button\" class=\"btn btn-link btn-link\" (click)=\"addUnit()\" data-dismiss=\"modal\">Save</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"newAction\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"card-body \">\n        <div class=\"card-header text-center\">\n          <p class=\"col-md-8 ml-auto mr-auto col-form-label info\" style=\"color:steelblue\">\n            <font size=4>New Task Activity for <br>{{ selectedTask.name }} task</font>\n          </p>\n        </div>\n        <!-- <a *ngIf=\"setUnit.id\"> Selected Unit: <span></span><small> {{ (setUnit)?.id }}</small></a><br> -->\n        <hr>\n        <form class=\"form-horizontal\">\n          <div class=\"row\">\n            <label class=\"col-md-4 col-form-label\">New Activity Name</label>\n            <div class=\"col-md-7\">\n              <div class=\"form-group\">\n                <input type=\"text\" [(ngModel)]=\"actionItem.name\" name=\"taskName\" class=\"form-control\" placeholder=\"New Activity name\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-md-4 col-form-label\">Unit measure</label>\n            <div class=\"col-md-7\">\n              <div class=\"form-group\">\n                <ng-select [items]=\"SIunits\" bindLabel=\"name\"  id=\"sui12\" name=\"jyu\" placeholder=\"Select unit of Measure\"\n                  [(ngModel)]=\"setUnit\"></ng-select>\n              </div>  \n            </div>\n          </div>\n          <!-- <div class=\"row\">\n            <label class=\"col-md-4 col-form-label\">Start Date</label>\n            <div class=\"col-md-7\">\n              <div class=\"form-group\">\n                <input type=\"date\" [(ngModel)]=\"actionItem.startDate\" name=\"siu\" class=\"form-control\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-md-4 col-form-label\">End Date</label>\n            <div class=\"col-md-7\">\n              <div class=\"form-group\">\n                <input type=\"date\" [(ngModel)]=\"actionItem.endDate\" name=\"siu\" class=\"form-control\">\n              </div>\n            </div>\n          </div> -->\n        </form>\n\n        <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n          <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n          </div>\n          <div class=\"divider\"></div>\n          <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"newAction(actionItem)\" data-dismiss=\"modal\"\n              title=\"save activity\">Enter</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"editAction\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"card-body \">\n        <div class=\"card-header text-center\">\n          <p class=\"col-md-8 ml-auto mr-auto col-form-label info\" style=\"color:steelblue\">\n            <font size=4>Edit New Activity item <br> \"{{ selectedAction.name }}\"</font>\n          </p>\n        </div>\n        <hr>\n        <form class=\"form-horizontal\">\n          <div class=\"row\">\n            <label class=\"col-md-4 col-form-label\">Start Date</label>\n            <div class=\"col-md-7\">\n              <div class=\"form-group\">\n                <input type=\"date\" [(ngModel)]=\"startDate\" name=\"startD\" class=\"form-control\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-md-4 col-form-label\">End Date</label>\n            <div class=\"col-md-7\">\n              <div class=\"form-group\">\n                <input type=\"date\" [(ngModel)]=\"endDate\" name=\"endD\" class=\"form-control\">\n              </div>\n            </div>\n          </div>\n        </form>\n\n        <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n          <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n          </div>\n          <div class=\"divider\"></div>\n          <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"editAction(startDate,endDate)\" data-dismiss=\"modal\"\n              title=\"save activity\">Enter</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"editClassActionItem\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"card-body \">\n        <div class=\"card-header text-center\">\n          <p class=\"col-md-8 ml-auto mr-auto col-form-label clrs-h1 info\" style=\"color:steelblue\">\n            <!-- <font size=4>Edit New Activity item <br> \"{{ selectedClassAction.name }}\"</font> -->\n            Edit New Activity item <br> \"{{ selectedClassAction.name }}\"\n          </p>\n        </div>\n        <hr>\n        <form class=\"form-horizontal\">\n          <div class=\"row\">\n            <label class=\"col-md-4 col-form-label\">Start Date</label>\n            <div class=\"col-md-7\">\n              <div class=\"form-group\">\n                <input type=\"date\" [(ngModel)]=\"startDate\" name=\"start\" class=\"form-control\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-md-4 col-form-label\">End Date</label>\n            <div class=\"col-md-7\">\n              <div class=\"form-group\">\n                <input type=\"date\" [(ngModel)]=\"endDate\" name=\"end\" class=\"form-control\">\n              </div>\n            </div>\n          </div>\n        </form>\n\n        <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n          <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n          </div>\n          <div class=\"divider\"></div>\n          <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"editClassAction(startDate,endDate)\"\n              data-dismiss=\"modal\" title=\"save activity\">Enter</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- 00000000000000000000000000000000000000000  old Stuff  00000000000000000000000000000000000000000 -->\n<div class=\"modal fade\" id=\"actionClosure\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-notice\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n          <i class=\"nc-icon nc-simple-remove\"></i>\n        </button>\n        <h5 class=\"modal-title\" id=\"myModalLabel\">{{ actionSet.name }}</h5>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"instruction\">\n          <div class=\"row\">\n            <div class=\"col-md-10 text-center\">\n              <strong>Are you sure you have completed full quantites of this activity</strong>\n              <!-- <p class=\"description\">The first step is to create an account at\n                <a href=\"https://www.creative-tim.com/\">Creative Tim</a>. You can choose a social network or go for the\n                classic version, whatever works best for you.</p> -->\n            </div>\n          </div>\n          <br>\n          <p>If you have completed, Click Confirm to complete</p>\n        </div>\n        <div class=\"modal-footer justify-content-center\">\n          <button type=\"button\" class=\"btn btn-info btn-round\" (click)=\"setComplete()\"\n            data-dismiss=\"modal\">Confirm</button>\n        </div>\n      </div>\n    </div>\n  </div>  \n</div>  "

/***/ }),

/***/ "./src/app/calendar/implementation/implementation.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/calendar/implementation/implementation.component.ts ***!
  \*********************************************************************/
/*! exports provided: ImplementationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImplementationComponent", function() { return ImplementationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var app_services_personal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/personal.service */ "./src/app/services/personal.service.ts");
/* harmony import */ var app_services_enterprise_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/enterprise.service */ "./src/app/services/enterprise.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var app_services_task_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var app_services_initialise_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/services/initialise.service */ "./src/app/services/initialise.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ImplementationComponent = /** @class */ (function () {
    function ImplementationComponent(auth, is, pns, ts, afAuth, es, afs, renderer, element, router, as) {
        this.auth = auth;
        this.is = is;
        this.pns = pns;
        this.ts = ts;
        this.afAuth = afAuth;
        this.es = es;
        this.afs = afs;
        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.as = as;
        this.allMyTasks = [];
        this.selectedActionItems = [];
        this.options = ['OptionA', 'OptionB', 'OptionC'];
        this.optionsMap = {
            OptionA: false,
            OptionB: false,
            OptionC: false,
        };
        this.optionsChecked = [];
        this.myActions = [];
        this.OutstandingTasks = [];
        this.CurrentTAsks = [];
        this.UpcomingTAsks = [];
        this.ShortTermTAsks = [];
        this.MediumTermTAsks = [];
        this.LongTermTAsks = [];
        this.viewTodayWork = false;
        this.viewTodaystds = false;
        this.currentWorkItems = [];
        this.todayDate = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(), "YYYY-MM-DD").day().toString();
        this.currentYear = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(), "YYYY-MM-DD").year().toString();
        this.currentQuarter = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(), "YYYY-MM-DD").quarter().toString();
        this.currentMonth = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(), "YYYY-MM-DD").month().toString();
        this.currentWeek = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(), "YYYY-MM-DD").week().toString();
        console.log(this.todayDate);
        this.startDate = null;
        this.endDate = null;
        this.SIunits = [
            { id: 'hours', name: 'Time(hrs)' },
            { id: 'items', name: 'Items' },
            { id: 'kg', name: 'Kilograms(Kg)' },
            { id: 'm2', name: 'Area(m2)' },
            { id: 'm3', name: 'Volume(m3)' },
            { id: 'mi', name: 'Miles(mi)' },
            { id: 'yd', name: 'Yards(yd)' },
            { id: 'mm', name: 'Millimeters(mm)' },
            { id: 'cm', name: 'Centimeters(cm)' },
            { id: 'm', name: 'Meters(m)' },
            { id: 'Km', name: 'Kilometers(km)' },
            { id: 'in', name: 'Inches(in)' },
            { id: 'ft', name: 'Feet(ft)' },
            { id: 'g', name: 'Grams(g)' },
        ];
        // this.setSui = { id: '', name: '' };
        this.setUnit = { id: '', name: '' };
        this.dp = "";
        this.mytaskActions = null;
        this.classification = { name: '', createdOn: '', plannedTime: '', actualTime: '', Varience: '', id: '' };
        this.task = is.getTask();
        this.selectedProject = is.getSelectedProject();
        this.userChampion = is.getUserChampion();
        this.selectedCompany = is.getSelectedCompany();
        this.selectedTask = { name: "", champion: null, projectName: "", department: "", departmentId: "", classification: this.classification, start: "", startDay: "", startWeek: "", startMonth: "", startQuarter: "", startYear: "", finish: "", finishDay: "", finishWeek: "", finishMonth: "", finishQuarter: "", finishYear: "", by: "", createdOn: "", projectId: "", byId: "", projectType: "", companyName: "", companyId: "", trade: "", section: null, complete: false, id: "", participants: null, status: "" };
        this.actionItem = is.getActionItem();
        this.selectedAction = is.getSelectedAction();
        this.actionSet = is.getSelectedAction();
        this.selectedClassAction = is.getSelectedAction();
        this.compChampion = is.getCompChampion();
        this.selectEditWorkItem = is.getActionItem();
        this.model = {
            left: true,
            middle: false,
            right: false
        };
    }
    ImplementationComponent.prototype.leftBtn = function () {
        console.log('left');
    };
    ImplementationComponent.prototype.rightBtn = function () {
        console.log('right');
    };
    ImplementationComponent.prototype.middleBtn = function () {
        console.log('middle');
    };
    ImplementationComponent.prototype.initOptionsMap = function () {
        for (var x = 0; x < this.order.options.length; x++) {
            this.optionsMap[this.options[x]] = true;
        }
    };
    ImplementationComponent.prototype.updateCheckedOptions = function (option, event) {
        this.optionsMap[option] = event.target.checked;
    };
    ImplementationComponent.prototype.updateOptions = function () {
        for (var x in this.optionsMap) {
            if (this.optionsMap[x]) {
                this.optionsChecked.push(x);
            }
        }
        this.options = this.optionsChecked;
        this.optionsChecked = [];
    };
    /* select a task */
    ImplementationComponent.prototype.selectTask = function (TAsk) {
        console.log(TAsk);
        this.selectedTask = TAsk;
    };
    ImplementationComponent.prototype.theItem = function (item) {
        this.selectEditWorkItem = item;
    };
    ImplementationComponent.prototype.addUnit = function () {
        console.log(this.selectEditWorkItem.unit);
        this.afs.collection('Users').doc(this.userId).collection('myStandards').doc(this.selectEditWorkItem.id).set(this.selectEditWorkItem);
        console.log(this.selectEditWorkItem.name + ' ' + 'updated untits' + this.selectEditWorkItem.unit);
        this.selectEditWorkItem = { uid: "", id: "", name: "", unit: "", quantity: 0, targetQty: 0, rate: 0, workHours: null, amount: 0, by: "", byId: "", type: "", champion: null, classification: null, participants: null, departmentName: "", departmentId: "", billID: "", billName: "", projectId: "", projectName: "", createdOn: "", UpdatedOn: "", actualData: null, workStatus: null, complete: false, start: null, end: null, startWeek: "", startDay: "", startDate: "", endDay: "", endDate: "", endWeek: "", taskName: "", taskId: "", companyId: "", companyName: "", classificationName: "", classificationId: "", selectedWork: false, section: this.is.getSectionInit(), actualStart: "", actualEnd: "", Hours: "" };
    };
    /* add to my weekly to do list */
    ImplementationComponent.prototype.add2WeeklyPlan = function (task) {
        this.selectedTask = task;
        console.log(this.selectedTask.name);
        console.log(this.selectedTask.id);
        this.ts.add2WeekPlan(task, this.userId);
        this.task = { name: "", champion: null, projectName: "", department: "", departmentId: "", start: "", startDay: "", startWeek: "", startMonth: "", startQuarter: "", startYear: "", finish: "", finishDay: "", finishWeek: "", finishMonth: "", finishQuarter: "", finishYear: "", by: "", createdOn: "", projectId: "", byId: "", projectType: "", companyName: "", companyId: "", trade: "", section: null, complete: null, id: "", participants: null, status: "", classification: null };
    };
    ImplementationComponent.prototype.removeWeekTask = function (task) {
        console.log('removing' + ' ' + task);
        var userRef = this.afs.collection('Users').doc(this.userId).collection('WeeklyTasks').doc(task.id);
        userRef.delete();
    };
    ImplementationComponent.prototype.removeWeekAction = function (action) {
        console.log('removing' + ' ' + action);
        var userRef = this.afs.collection('Users').doc(this.userId).collection('WeeklyActions').doc(action.id);
        userRef.delete();
    };
    ImplementationComponent.prototype.showTaskActions = function (task) {
        this.selectTask(task);
        this.taskActions = this.es.getDptTasksActions(this.compId, this.dp, task.id);
    };
    ImplementationComponent.prototype.viewMyTaskActions = function (task) {
        // this.selectTask(task)
        // console.log(this.selectedTask);
        console.log(task);
        this.mytaskActions = this.es.getMyTasksActions(this.userId, task.id);
    };
    ImplementationComponent.prototype.showActions = function () {
        // this.actionItems = this.es.getActionItems(this.selectedTask, this.companystaff);
        this.actionItems = this.es.getActionItems(this.myData);
    };
    ImplementationComponent.prototype.selectEditAction = function (action) {
        this.selectedAction = action;
    };
    // selectedClassAction
    ImplementationComponent.prototype.selectClassAction = function (action) {
        this.selectedClassAction = action;
    };
    ImplementationComponent.prototype.selectAction = function (e, action) {
        if (e.target.checked) {
            this.selectedActionItems.push(action);
            this.myDocument.collection('WeeklyActions').doc(action.id).set(action);
            console.log("action" + " " + action + " " + " has been added");
            // } else {
            //   this.selectedActionItems.splice(this.selectedActionItems.indexOf(action), 1);
            //   this.myDocument.collection<workItem>('WeeklyActions').doc(action.id).delete();
        }
    };
    ImplementationComponent.prototype.setDiary = function (e, action) {
        if (e.target.checked) {
            var selectedWork = true;
            console.log(action.name + '' + 'action checked');
            this.myDocument.collection('myStandards').doc(action.id).update({ 'selectedWork': selectedWork });
        }
        else {
            console.log(action.name + '' + 'action unchecked');
            var selectedWork = false;
            this.myDocument.collection('myStandards').doc(action.id).update({ 'selectedWork': selectedWork });
        }
    };
    ImplementationComponent.prototype.setDiaryAction = function (e, action) {
        if (e.target.checked) {
            console.log(action.name + '' + 'action checked');
            var selectedWork = true;
            this.myDocument.collection('WeeklyActions').doc(action.id).update({ 'selectedWork': selectedWork });
        }
        else {
            console.log(action.name + '' + 'action checked');
            var selectedWork = false;
            this.myDocument.collection('WeeklyActions').doc(action.id).update({ 'selectedWork': selectedWork });
        }
    };
    ImplementationComponent.prototype.changeDay = function (action) {
        switch (action) {
            case 'previous': {
                this.aPeriod = this.currentDate = moment__WEBPACK_IMPORTED_MODULE_8__(this.currentDate).subtract(1, 'd').format('L');
                this.weekNo = moment__WEBPACK_IMPORTED_MODULE_8__(this.currentDate).week();
                console.log(this.weekNo);
                console.log(this.currentDate);
                this.workDay = moment__WEBPACK_IMPORTED_MODULE_8__(this.aPeriod).format('LL');
                this.workWeekDay = moment__WEBPACK_IMPORTED_MODULE_8__(this.aPeriod).format('dddd');
                break;
            }
            case 'next': {
                this.aPeriod = this.currentDate = moment__WEBPACK_IMPORTED_MODULE_8__(this.currentDate).add(1, 'd').format('L');
                this.weekNo = moment__WEBPACK_IMPORTED_MODULE_8__(this.currentDate).week();
                console.log(this.currentDate);
                console.log(this.weekNo);
                this.workDay = moment__WEBPACK_IMPORTED_MODULE_8__(this.aPeriod).format('LL');
                this.workWeekDay = moment__WEBPACK_IMPORTED_MODULE_8__(this.aPeriod).format('dddd');
                break;
            }
            default:
                break;
        }
        var testPeriod = "startDate";
        this.dayTasks = this.viewTodayAction(testPeriod, this.aPeriod);
    };
    ImplementationComponent.prototype.initDiary = function () {
        var testPeriod = "startDate";
        // this.viewTodayAction(testPeriod, this.currentDate);
        this.viewTodayActionQuery(testPeriod, this.currentDate);
    };
    ImplementationComponent.prototype.viewTodayAction = function (testPeriod, checkPeriod) {
        var _this = this;
        var viewActionsRef = this.afs.collection('Users').doc(this.userId);
        this.viewActions = viewActionsRef.collection('WeeklyActions', function (ref) { return ref
            .where(testPeriod, '==', checkPeriod); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            if (actions.length > 0) {
                _this.viewTodayWork = true;
            }
            else {
                _this.viewTodayWork = false;
            }
            return __assign({ id: id }, data);
        }); }));
        console.log(testPeriod + ' ' + checkPeriod);
        var today = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(), "YYYY-MM-DD");
        this.currentWorkItems = [];
        // let viewActionsRef = this.afs.collection('Users').doc(this.userId);
        this.allActions = viewActionsRef.collection('WeeklyActions').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            if (actions.length > 0) {
                _this.viewTodayWork = true;
            }
            else {
                _this.viewTodayWork = false;
            }
            return __assign({ id: id }, data);
        }); }));
        this.viewDayActions = [];
        this.allActions.subscribe(function (actions) {
            _this.selectedActions = actions;
            actions.forEach(function (element) {
                if (moment__WEBPACK_IMPORTED_MODULE_8__(element.startDate).isSameOrAfter(today) || element.complete == false) {
                    // if (moment(element.startDate).isSameOrBefore(today) && element.complete == false) {
                    _this.viewDayActions.push(element);
                }
            });
            // console.log(this.selectedActions);
            // console.log(this.selectedActions.length);
            if (_this.selectedActions.length > 0) {
                _this.viewTodayWork = true;
            }
            else {
                _this.viewTodayWork = false;
            }
        });
        this.theViewedActions = this.viewActions;
        return this.viewActions;
    };
    ImplementationComponent.prototype.viewTodayActionQuery = function (testPeriod, checkPeriod) {
        var _this = this;
        var viewActionsRef = this.myDocument;
        // console.log(testPeriod + ' ' + checkPeriod);
        var today = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(), "YYYY-MM-DD");
        var today2 = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(), "MM-DD-YYYY").format('L');
        today2 = checkPeriod;
        this.currentWorkItems = [];
        this.allActions = viewActionsRef.collection('WeeklyActions').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            _this.viewDayActions = [];
            if (actions.length > 0) {
                _this.viewTodayWork = true;
            }
            else {
                _this.viewTodayWork = false;
            }
            return __assign({ id: id }, data);
        }); }));
        this.viewDayActions = [];
        this.allActions.subscribe(function (actions) {
            _this.selectedActions = actions;
            actions.forEach(function (element) {
                var data = element;
                if (moment__WEBPACK_IMPORTED_MODULE_8__(element.startDate).isSameOrBefore(today2) && element.complete == false) {
                    _this.viewDayActions.push(element);
                    console.log(_this.viewDayActions);
                }
            });
            if (_this.selectedActions.length > 0) {
                _this.viewTodayWork = true;
            }
            else {
                _this.viewTodayWork = false;
            }
        });
        this.theViewedActions = this.viewActions;
        return this.viewActions;
    };
    ImplementationComponent.prototype.addActionTime = function (action) {
        console.log(action);
        console.log(action.start);
        console.log(action.end);
        var weeklyRef = this.afs.collection('Users').doc(this.userId).collection('WeeklyActions');
        var allMyActionsRef = this.afs.collection('Users').doc(this.userId).collection('actionItems');
        weeklyRef.doc(action.id).set(action);
        allMyActionsRef.doc(action.id).set(action);
        if (action.taskId !== "") {
            var myTaskActionsRef = this.afs.collection('Users').doc(this.userId).collection('tasks').doc(action.taskId).collection('actionItems');
            myTaskActionsRef.doc(action.id).set(action);
        }
    };
    ImplementationComponent.prototype.addClassActionTime = function (action) {
        console.log(action);
        console.log(action.start);
        console.log(action.end);
        var weeklyRef = this.afs.collection('Users').doc(this.userId).collection('myStandards');
        weeklyRef.doc(action.id).set(action);
    };
    ImplementationComponent.prototype.setComplete = function () {
        var selectedAction = this.actionSet;
        console.log('the actionItem-->' + selectedAction.name);
        var weeklyRef = this.afs.collection('Users').doc(this.userId).collection('WeeklyActions');
        var allMyActionsRef = this.afs.collection('Users').doc(this.userId).collection('actionItems');
        weeklyRef.doc(selectedAction.id).update({ 'complete': true });
        allMyActionsRef.doc(selectedAction.id).update({ 'complete': true });
        if (selectedAction.taskId != "") {
            var myTaskActionsRef = this.afs.collection('Users').doc(this.userId).collection('tasks').doc(selectedAction.taskId).collection('actionItems');
            myTaskActionsRef.doc(selectedAction.id).update({ 'complete': true });
        }
        if (selectedAction.projectId != "") {
            var prjectCompWeeklyRef = this.afs.collection('Projects').doc(selectedAction.projectId).collection('enterprises').doc(this.compId).collection('WeeklyActions');
            prjectCompWeeklyRef.doc(selectedAction.id).update({ 'complete': true });
        }
        ;
        // Company update
        if (selectedAction.companyId != "") {
            var allMyActionsRef_1 = this.afs.collection('Enterprises').doc(selectedAction.companyId).collection('actionItems');
            var allWeekActionsRef = this.afs.collection('Enterprises').doc(selectedAction.companyId).collection('WeeklyActions');
            var myTaskActionsRef = this.afs.collection('Enterprises').doc(selectedAction.companyId).collection('tasks').doc(selectedAction.taskId).collection('actionItems');
            allMyActionsRef_1.doc(selectedAction.id).update({ 'complete': true });
            allWeekActionsRef.doc(selectedAction.id).update({ 'complete': true });
            myTaskActionsRef.doc(selectedAction.id).update({ 'complete': true });
            if (selectedAction.projectId != "") {
                var weeklyRef_1 = this.afs.collection('Enterprises').doc(selectedAction.companyId).collection('projects').doc(selectedAction.projectId).collection('WeeklyActions');
                weeklyRef_1.doc(selectedAction.id).update({ 'complete': true });
            }
        }
        ;
    };
    ImplementationComponent.prototype.newAction = function (action) {
        var _this = this;
        var task = this.selectedTask;
        // task.classification.id != ""
        // task = this.selectedTask;
        console.log(action);
        console.log(this.setUnit.id);
        action.by = this.user.displayName;
        action.byId = this.userId;
        action.createdOn = new Date().toISOString();
        action.taskId = this.selectedTask.id;
        action.taskName = this.selectedTask.name;
        action.type = "planned";
        // action.startDate = moment(action.startDate).format('L');
        // action.endDate = moment(action.endDate).format('L');
        // action.endWeek = moment(action.endDate, 'MM-DD-YYYY').week().toString();
        // action.startWeek = moment(action.startDate, 'MM-DD-YYYY').week().toString();
        // action.startDay = moment(action.startDate, 'MM-DD-YYYY').format('ddd').toString();
        // action.endDay = moment(action.endDate, 'MM-DD-YYYY').format('ddd').toString();
        action.startDate = "";
        action.endDate = "";
        action.startWeek = "";
        action.endWeek = "";
        action.startDay = "";
        action.endDay = "";
        action.champion = task.champion;
        action.unit = this.setUnit.id;
        if (task.classification != null) {
            action.classification = task.classification;
        }
        action.unit = this.setUnit.id;
        action.type = "planned";
        console.log(action);
        console.log('the task--->' + this.selectedTask.name + " " + this.selectedTask.id);
        console.log('the department-->' + action.name);
        var myTaskActionsRef = this.afs.collection('Users').doc(this.userId).collection('tasks').doc(this.selectedTask.id).collection('actionItems');
        var allMyActionsRef = this.afs.collection('Users').doc(this.userId).collection('actionItems');
        myTaskActionsRef.add(action).then(function (Ref) {
            var newActionId = Ref.id;
            console.log(Ref);
            myTaskActionsRef.doc(newActionId).update({ 'id': newActionId });
            allMyActionsRef.doc(newActionId).set(action);
            allMyActionsRef.doc(newActionId).update({ 'id': newActionId });
        }).then(function (refff) {
            _this.setSui = null;
            _this.actionItem = { uid: "", id: "", name: "", unit: "", quantity: 0, targetQty: 0, rate: 0, workHours: null, amount: 0, by: "", byId: "", type: "", champion: _this.is.getCompChampion(), classification: null, participants: null, departmentName: "", departmentId: "", billID: "", billName: "", projectId: "", projectName: "", createdOn: "", UpdatedOn: "", actualData: null, workStatus: null, complete: false, start: null, end: null, startWeek: "", startDay: "", startDate: "", endDay: "", endDate: "", endWeek: "", taskName: "", taskId: "", companyId: "", companyName: "", classificationName: "", classificationId: "", selectedWork: false, section: _this.is.getSectionInit(), actualStart: "", actualEnd: "", Hours: "" };
        });
    };
    ImplementationComponent.prototype.newActionToday = function (action) {
        var _this = this;
        var task = this.actionTask;
        // task.classification.id != ""
        // task = this.actionTask;
        console.log(action);
        console.log(this.setUnit.id);
        action.by = this.user.displayName;
        action.byId = this.userId;
        action.createdOn = new Date().toISOString();
        action.taskId = this.actionTask.id;
        action.taskName = this.actionTask.name;
        action.type = "planned";
        action.startDate = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).format('L');
        action.endDate = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).format('L');
        action.startDate = moment__WEBPACK_IMPORTED_MODULE_8__(action.startDate).format('L');
        action.endDate = moment__WEBPACK_IMPORTED_MODULE_8__(action.endDate).format('L');
        action.startWeek = moment__WEBPACK_IMPORTED_MODULE_8__(action.startDate, 'MM-DD-YYYY').week().toString();
        action.endWeek = moment__WEBPACK_IMPORTED_MODULE_8__(action.endDate, 'MM-DD-YYYY').week().toString();
        action.startDay = moment__WEBPACK_IMPORTED_MODULE_8__(action.startDate, 'MM-DD-YYYY').format('ddd').toString();
        action.endDay = moment__WEBPACK_IMPORTED_MODULE_8__(action.endDate, 'MM-DD-YYYY').format('ddd').toString();
        action.champion = task.champion;
        action.unit = this.setSui.id;
        var champ = task.champion;
        if (task.classification != null) {
            action.classification = task.classification;
        }
        // action.unit = this.setUnit.id;
        action.type = "planned";
        console.log(action);
        console.log(action.unit);
        console.log('the task--->' + this.actionTask.name + " " + this.actionTask.id);
        console.log('the action-->' + action.name);
        var myTaskActionsRef = this.afs.collection('Users').doc(this.userId).collection('tasks').doc(this.actionTask.id).collection('actionItems');
        var allMyActionsRef = this.afs.collection('Users').doc(this.userId).collection('actionItems');
        var allmyWeeklyActionsRef = this.afs.collection('Users').doc(this.userId).collection('WeeklyActions');
        var champTaskActionsRef = this.afs.collection('Users').doc(champ.id).collection('tasks').doc(this.actionTask.id).collection('actionItems');
        var allChmpMyActionsRef = this.afs.collection('Users').doc(champ.id).collection('actionItems');
        var allChmpWeklyeActionsRef = this.afs.collection('Users').doc(champ.id).collection('WeeklyActions');
        myTaskActionsRef.add(action).then(function (Ref) {
            var newActionId = Ref.id;
            console.log(Ref);
            myTaskActionsRef.doc(newActionId).update({ 'id': newActionId });
            allmyWeeklyActionsRef.doc(newActionId).set(action);
            allmyWeeklyActionsRef.doc(newActionId).update({ 'id': newActionId });
            allMyActionsRef.doc(newActionId).set(action);
            allMyActionsRef.doc(newActionId).update({ 'id': newActionId });
            champTaskActionsRef.doc(newActionId).set(action);
            champTaskActionsRef.doc(newActionId).update({ 'id': newActionId });
            allChmpMyActionsRef.doc(newActionId).set(action);
            allChmpMyActionsRef.doc(newActionId).update({ 'id': newActionId });
            allChmpWeklyeActionsRef.doc(newActionId).set(action);
            allChmpWeklyeActionsRef.doc(newActionId).update({ 'id': newActionId });
        }).then(function (refff) {
            _this.setSui = null;
            _this.actionTask = { name: "", champion: null, projectName: "", department: "", departmentId: "", classification: _this.classification, start: "", startDay: "", startWeek: "", startMonth: "", startQuarter: "", startYear: "", finish: "", finishDay: "", finishWeek: "", finishMonth: "", finishQuarter: "", finishYear: "", by: "", createdOn: "", projectId: "", byId: "", projectType: "", companyName: "", companyId: "", trade: "", section: null, complete: false, id: "", participants: null, status: "" };
            _this.actionItem = { uid: "", id: "", name: "", unit: "", quantity: 0, targetQty: 0, rate: 0, workHours: null, amount: 0, by: "", byId: "", type: "", champion: _this.is.getCompChampion(), classification: null, participants: null, departmentName: "", departmentId: "", billID: "", billName: "", projectId: "", projectName: "", createdOn: "", UpdatedOn: "", actualData: null, workStatus: null, complete: false, start: null, end: null, startWeek: "", startDay: "", startDate: "", endDay: "", endDate: "", endWeek: "", taskName: "", taskId: "", companyId: "", companyName: "", classificationName: "", classificationId: "", selectedWork: false, section: _this.is.getSectionInit(), actualStart: "", actualEnd: "", Hours: "" };
        });
    };
    ImplementationComponent.prototype.setAction = function (item) {
        this.actionSet = item;
    };
    ImplementationComponent.prototype.editAction = function (startDate, endDate) {
        console.log(startDate);
        console.log(endDate);
        console.log(moment__WEBPACK_IMPORTED_MODULE_8__(startDate).format('L'));
        console.log(moment__WEBPACK_IMPORTED_MODULE_8__(endDate).format('L'));
        this.selectedAction.startDay = moment__WEBPACK_IMPORTED_MODULE_8__(startDate, 'YYYY-MM-DD').format('ddd').toString();
        this.selectedAction.endDay = moment__WEBPACK_IMPORTED_MODULE_8__(endDate, 'YYYY-MM-DD').format('ddd').toString();
        this.selectedAction.startDate = moment__WEBPACK_IMPORTED_MODULE_8__(startDate).format('L');
        this.selectedAction.endDate = moment__WEBPACK_IMPORTED_MODULE_8__(endDate).format('L');
        console.log(this.selectedAction.startDate);
        console.log(this.selectedAction.endDate);
        // this.selectedAction.targetQty = 0;
        // this.selectedAction.start = "";
        // this.selectedAction.end = "";
        this.selectedAction.startWeek = moment__WEBPACK_IMPORTED_MODULE_8__(endDate, "YYYY-MM-DD").week().toString();
        this.selectedAction.endWeek = moment__WEBPACK_IMPORTED_MODULE_8__(startDate, "YYYY-MM-DD").week().toString();
        console.log('the actionItem-->' + this.selectedAction.name);
        var weeklyRef = this.afs.collection('Users').doc(this.userId).collection('WeeklyActions');
        var allMyActionsRef = this.afs.collection('Users').doc(this.userId).collection('actionItems');
        weeklyRef.doc(this.selectedAction.id).set(this.selectedAction);
        allMyActionsRef.doc(this.selectedAction.id).set(this.selectedAction);
        if (this.selectedAction.taskId != "") {
            var myTaskActionsRef = this.afs.collection('Users').doc(this.userId).collection('tasks').doc(this.selectedAction.taskId).collection('actionItems');
            myTaskActionsRef.doc(this.selectedAction.id).set(this.selectedAction);
        }
        this.startDate = null;
        this.endDate = null;
        this.selectedAction = { uid: "", id: "", name: "", unit: "", quantity: 0, targetQty: 0, rate: 0, workHours: null, amount: 0, by: "", byId: "", type: "", champion: null, classification: null, participants: null, departmentName: "", departmentId: "", billID: "", billName: "", projectId: "", projectName: "", createdOn: "", UpdatedOn: "", actualData: null, workStatus: null, complete: false, start: null, end: null, startWeek: "", startDay: "", startDate: "", endDay: "", endDate: "", endWeek: "", taskName: "", taskId: "", companyId: "", companyName: "", classificationName: "", classificationId: "", selectedWork: false, section: this.is.getSectionInit(), actualStart: "", actualEnd: "", Hours: "" };
    };
    ImplementationComponent.prototype.editClassAction = function (startDate, endDate) {
        console.log(startDate);
        console.log(endDate);
        console.log(moment__WEBPACK_IMPORTED_MODULE_8__(startDate).format('L'));
        console.log(moment__WEBPACK_IMPORTED_MODULE_8__(endDate).format('L'));
        this.selectedClassAction.startDay = moment__WEBPACK_IMPORTED_MODULE_8__(startDate, 'YYYY-MM-DD').format('ddd').toString();
        this.selectedClassAction.endDay = moment__WEBPACK_IMPORTED_MODULE_8__(endDate, 'YYYY-MM-DD').format('ddd').toString();
        this.selectedClassAction.startDate = moment__WEBPACK_IMPORTED_MODULE_8__(startDate).format('L');
        this.selectedClassAction.endDate = moment__WEBPACK_IMPORTED_MODULE_8__(endDate).format('L');
        console.log(this.selectedClassAction.startDate);
        console.log(this.selectedClassAction.endDate);
        this.selectedClassAction.startWeek = moment__WEBPACK_IMPORTED_MODULE_8__(endDate, "YYYY-MM-DD").week().toString();
        this.selectedClassAction.endWeek = moment__WEBPACK_IMPORTED_MODULE_8__(startDate, "YYYY-MM-DD").week().toString();
        console.log('the actionItem-->' + this.selectedClassAction.name);
        var weeklyRef = this.afs.collection('Users').doc(this.userId).collection('classifications').doc(this.selectedClassAction.classificationId);
        weeklyRef.collection('myStandards').doc(this.selectedClassAction.id).set(this.selectedClassAction);
        this.afs.collection('Users').doc(this.userId).collection('myStandards').doc(this.selectedClassAction.id).set(this.selectedClassAction);
        this.startDate = null;
        this.endDate = null;
        this.selectedClassAction = { uid: "", id: "", name: "", unit: "", quantity: 0, targetQty: 0, rate: 0, workHours: null, amount: 0, by: "", byId: "", type: "", champion: null, classification: null, participants: null, departmentName: "", departmentId: "", billID: "", billName: "", projectId: "", projectName: "", createdOn: "", UpdatedOn: "", actualData: null, workStatus: null, complete: false, start: null, end: null, startWeek: "", startDay: "", startDate: "", endDay: "", endDate: "", endWeek: "", taskName: "", taskId: "", companyId: "", companyName: "", classificationName: "", classificationId: "", selectedWork: false, section: this.is.getSectionInit(), actualStart: "", actualEnd: "", Hours: "" };
    };
    ImplementationComponent.prototype.refreshData = function () {
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).format('L');
        console.log(moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).format('YYYY-MM-DD'));
        console.log(this.currentDate);
        this.workDay = moment__WEBPACK_IMPORTED_MODULE_8__().format('LL');
        this.workWeekDay = moment__WEBPACK_IMPORTED_MODULE_8__(this.aPeriod).format('dddd');
        this.weeklyTasks = this.ts.getWeeklyTasks(this.userId);
        this.personalTasks = this.ts.getPersonalTasks(this.userId);
    };
    ImplementationComponent.prototype.dataCALL = function () {
        var _this = this;
        this.myDocument = this.afs.collection('Users').doc(this.user.uid);
        this.userProfile = this.myDocument.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (a) {
            var data = a.payload.data();
            var id = a.payload.id;
            return __assign({ id: id }, data);
        }));
        this.userProfile.subscribe(function (userData) {
            console.log(userData);
            var myData = {
                name: _this.user.displayName,
                email: _this.user.email,
                bus_email: userData.bus_email,
                id: _this.user.uid,
                phoneNumber: _this.user.phoneNumber,
                photoURL: _this.user.photoURL,
                address: userData.address,
                nationalId: userData.nationalId,
                nationality: userData.nationality,
            };
            if (userData.address == "" || userData.address == null || userData.address == undefined) {
                userData.address = "";
            }
            else {
            }
            if (userData.phoneNumber == "" || userData.phoneNumber == null || userData.phoneNumber == undefined) {
                userData.phoneNumber = "";
            }
            else {
            }
            if (userData.bus_email == "" || userData.bus_email == null || userData.bus_email == undefined) {
                userData.bus_email = "";
            }
            else {
            }
            if (userData.nationalId == "" || userData.nationalId == null || userData.nationalId == undefined) {
                userData.nationalId = "";
            }
            else {
            }
            if (userData.nationality == "" || userData.nationality == null || userData.nationality == undefined) {
                userData.nationality = "";
            }
            else {
            }
            _this.myData = myData;
            _this.userData = userData;
        });
        console.log(moment__WEBPACK_IMPORTED_MODULE_8__().week());
        console.log(this.userId);
        var userdataRef = this.afs.collection('Users').doc(this.userId);
        this.tasks = userdataRef.collection('tasks', function (ref) { return ref.orderBy('start'); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            _this.myTaskData = data;
            _this.myTaskData.when = moment__WEBPACK_IMPORTED_MODULE_8__(data.start, "YYYY-MM-DD").fromNow().toString();
            _this.myTaskData.then = moment__WEBPACK_IMPORTED_MODULE_8__(data.finish, "YYYY-MM-DD").fromNow().toString();
            // this.categorizedTasks.push(this.myTaskData);
            return __assign({ id: id }, data);
        }); }));
        this.tasks.subscribe(function (tasks) {
            console.log(tasks);
            _this.OutstandingTasks = [];
            _this.CurrentTAsks = [];
            _this.UpcomingTAsks = [];
            _this.ShortTermTAsks = [];
            _this.MediumTermTAsks = [];
            _this.LongTermTAsks = [];
            tasks.forEach(function (data) {
                var today = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(), "YYYY-MM-DD");
                if (data.champion.id == _this.userId) {
                    if (moment__WEBPACK_IMPORTED_MODULE_8__(data.start).isSameOrBefore(today) && moment__WEBPACK_IMPORTED_MODULE_8__(data.finish).isSameOrAfter(today)) {
                        // currentWorkItems
                        _this.CurrentTAsks.push(data);
                    }
                    ;
                    // outstanding tasks
                    if (moment__WEBPACK_IMPORTED_MODULE_8__(data.finish).isBefore(today)) {
                        _this.OutstandingTasks.push(data);
                    }
                    ;
                    // Upcoming tasks
                    if (moment__WEBPACK_IMPORTED_MODULE_8__(data.start).isAfter(today)) {
                        _this.UpcomingTAsks.push(data);
                        if (moment__WEBPACK_IMPORTED_MODULE_8__(data.start).isSameOrBefore(today.add(3, "month"))) {
                            _this.ShortTermTAsks.push(data);
                        }
                        else if (moment__WEBPACK_IMPORTED_MODULE_8__(data.start).isSameOrBefore(today.add(12, "month"))) {
                            _this.MediumTermTAsks.push(data);
                        }
                        else if (moment__WEBPACK_IMPORTED_MODULE_8__(data.start).isBefore(today.add(12, "month"))) {
                            _this.LongTermTAsks.push(data);
                            console.log('long term Tasks' + ' ' + _this.LongTermTAsks);
                        }
                        console.log(_this.OutstandingTasks);
                    }
                    ;
                }
            });
            _this.allMyTasks = tasks;
        });
        this.standards = this.afs.collection('Users').doc(this.userId).collection('myStandards', function (ref) { return ref.orderBy('classificationName'); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            data.startDate = moment__WEBPACK_IMPORTED_MODULE_8__(data.startDate, "MM-DD-YYYY").format('LL');
            data.endDate = moment__WEBPACK_IMPORTED_MODULE_8__(data.endDate, "MM-DD-YYYY").format('LL');
            console.log(b.length);
            if (b.length >= 1) {
                _this.viewTodaystds = true;
            }
            else {
                _this.viewTodaystds = false;
            }
            return __assign({ id: id }, data);
        }); }));
        this.allMystandards = this.standards;
        this.stdArray = [];
        this.standards.subscribe(function (actions) {
            _this.stdArray = actions;
            _this.stdNo = actions.length;
        });
        // if (this.stdNo > 0) {
        //   this.viewTodaystds = true;
        // } else {
        //   this.viewTodaystds = false;
        // }
        this.myWeeklyActions = userdataRef.collection('WeeklyActions').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            data.startDate = moment__WEBPACK_IMPORTED_MODULE_8__(data.startDate, "MM-DD-YYYY").format('LL');
            data.endDate = moment__WEBPACK_IMPORTED_MODULE_8__(data.endDate, "MM-DD-YYYY").format('LL');
            _this.actiondata = data;
            return __assign({ id: id }, _this.actiondata);
        }); }));
        var size = this.myWeeklyActions.operator.call.length;
        console.log(size);
        //  converting into san array
        this.myWeeklyActions.subscribe(function (actions) {
            _this.myActions = actions;
            console.log(_this.myActions);
            console.log(_this.myActions.length);
        });
        var arraySize = this.myActions.length;
        console.log(arraySize);
        this.dashboardActions = this.afs.collection('Users').doc(this.userId).collection('actionItems', function (ref) { return ref.orderBy('start'); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            _this.actionData = data;
            _this.actionData.startDate = moment__WEBPACK_IMPORTED_MODULE_8__(data.startDate, "YYYY-MM-DD").fromNow().toString();
            _this.actionData.startDate = moment__WEBPACK_IMPORTED_MODULE_8__(data.endDate, "YYYY-MM-DD").fromNow().toString();
            console.log(b.length);
            return __assign({ id: id }, _this.actionData);
        }); }));
    };
    ImplementationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.user.subscribe(function (user) {
            _this.userId = user.uid;
            _this.user = user;
            _this.refreshData();
            _this.dataCALL();
        });
        this.tableDataC = {
            headerRow: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
            dataRows: []
        };
    };
    ImplementationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-implementation',
            template: __webpack_require__(/*! ./implementation.component.html */ "./src/app/calendar/implementation/implementation.component.html"),
            styles: [__webpack_require__(/*! ./implementation.component.css */ "./src/app/calendar/implementation/implementation.component.css")]
        }),
        __metadata("design:paramtypes", [app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], app_services_initialise_service__WEBPACK_IMPORTED_MODULE_10__["InitialiseService"], app_services_personal_service__WEBPACK_IMPORTED_MODULE_2__["PersonalService"], app_services_task_service__WEBPACK_IMPORTED_MODULE_9__["TaskService"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"], app_services_enterprise_service__WEBPACK_IMPORTED_MODULE_3__["EnterpriseService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], ImplementationComponent);
    return ImplementationComponent;
}());



/***/ }),

/***/ "./src/app/calendar/map-task/map-task.component.css":
/*!**********************************************************!*\
  !*** ./src/app/calendar/map-task/map-task.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL21hcC10YXNrL21hcC10YXNrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/calendar/map-task/map-task.component.html":
/*!***********************************************************!*\
  !*** ./src/app/calendar/map-task/map-task.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div class=\"card-body nav-hor-tabs\">\n    <div class=\"nav-tabs-navigation\">\n      <div class=\"nav-tabs-wrapper\">\n        <ul id=\"tabs\" class=\"nav nav-tabs\" role=\"tablist\">\n          <li class=\"nav-item\"  hidden>\n            <a class=\"nav-link nav-colors\" title=\"click to view Week planning\" data-toggle=\"tab\" href=\"#week\" role=\"tab\" aria-expanded=\"true\">Week</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-colors active\" data-toggle=\"tab\" title=\"click to view Monthly planning\" href=\"#month\" role=\"tab\" aria-expanded=\"false\">Month</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-colors\" data-toggle=\"tab\" title=\"click to view Quarterly planning\" href=\"#quarter\" role=\"tab\" aria-expanded=\"false\">Quarter</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-colors\" data-toggle=\"tab\" title=\"click to view Yearly planning\" href=\"#year\" role=\"tab\" aria-expanded=\"false\">Year</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div id=\"my-tab-content\" class=\"tab-content text-center\">\n      <!-- <div class=\"tab-pane\" id=\"day\" role=\"tabpanel\" aria-expanded=\"true\">\n        <div class=\"card\">\n          <div class=\"\">\n            <div class=\"card-text\">\n              <p class=\"card-title\">\n                <button class=\"btn-link\" title=\"goto previous date\" (click)=\"changePeriod('previous','startDay')\"><i class=\"nc-icon nc-minimal-left\"\n                    style=\"margin-right:3em\"></i></button>\n                {{ currentDay }}'s Tasks\n                <button class=\"btn-link\" title=\"next date\" (click)=\"changePeriod('next','startDay')\"><i class=\"nc-icon nc-minimal-right\"\n                    style=\"margin-left:3em\"></i></button>\n              </p>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <thead class=\"text-primary\">\n                  <th class=\"text-left\">Name</th>\n                  <th class=\"text-center\">Classification</th>\n                  <th class=\"text-right\">Start Date</th>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let tss of todayTasks | async\">\n                    <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                    <td class=\"text-center td-clrs\">{{ tss.classification.name }}</td>\n                    <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                  </tr>\n                  <tr class=\"text-left\">\n                    <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\" data-toggle=\"modal\"\n                      data-target=\"#tskModal\">New Task</button>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div> -->\n      <div hidden class=\"tab-pane\" id=\"week\" role=\"tabpanel\" aria-expanded=\"false\">\n        <div class=\"card\">\n          <div class=\"\"><!-- title=\"Click to start planning your tasks\" -->\n            <div class=\"card-text\">\n              <p class=\"card-title\"><!--  {{ currentWeek.subtract(1, 'W').week() }} -->\n                <button class=\"btn-link\" title=\"goto the previous week\" (click)=\"changePeriod('previous','startWeek')\"><i class=\"nc-icon nc-minimal-left\"\n                    style=\"margin-right:3em\"></i></button>Week {{ currentWeek.week() }}'s Tasks of Year {{ currentWeek.year() }}\n                <button class=\"btn-link\" title=\"goto the next week\" (click)=\"changePeriod('next','startWeek')\"><i class=\"nc-icon nc-minimal-right\"\n                    style=\"margin-left:3em\"></i></button>\n              </p><!--  {{ currentWeek.add(1, 'W').week() }} -->\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div aria-multiselectable=\"true\" class=\"card-collapse\" id=\"accordionDay\" role=\"tablist\">\n              <div class=\"card card-plain\">\n                <div class=\"card-header\" role=\"tab\" id=\"pDAY0\">\n                  <a class=\"collapsed\" (click)=\"setDay('day0')\" title=\"Click to start planning your tasks\" data-toggle=\"collapse\" href=\"#planDay0\" aria-expanded=\"false\"\n                    aria-controls=\"planDay0\">\n                    {{ day0label }}\n                    <i class=\"nc-icon nc-minimal-down\"></i>\n                  </a>\n                </div>\n                <div id=\"planDay0\" class=\"collapse\" aria-labelledby=\"pDAY0\" data-parent=\"#accordionDay\">\n                  <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                      <table class=\"table\">\n                        <thead class=\"text-primary\">\n                          <th class=\"text-left\">Name</th>\n                          <th class=\"text-center\">Classification</th>\n                          <th class=\"text-right\">Start Date</th>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let tss of todayTasks | async\">\n                            <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                            <td class=\"text-center td-clrs\">{{ tss.classification.name }}</td>\n                            <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                          </tr>\n                          <tr class=\"text-left\">\n                            <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\" data-toggle=\"modal\"\n                              data-target=\"#tskModal\">New\n                              Task</button>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card card-plain\">\n                <div class=\"card-header\" role=\"tab\" id=\"pDAY0\">\n                  <a class=\"collapsed\" (click)=\"setDay('day1')\" title=\"Click to start planning your tasks\" data-toggle=\"collapse\" href=\"#planDay1\" aria-expanded=\"false\"\n                    aria-controls=\"planDay1\">\n                    {{ day1label }}\n                    <i class=\"nc-icon nc-minimal-down\"></i>\n                  </a>\n                </div>\n                <div id=\"planDay1\" class=\"collapse\" aria-labelledby=\"pDAY0\" data-parent=\"#accordionDay\">\n                  <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                      <table class=\"table\">\n                        <thead class=\"text-primary\">\n                          <th class=\"text-left\">Name</th>\n                          <th class=\"text-center\">Classification</th>\n                          <th class=\"text-right\">Start Date</th>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let tss of day1Tasks | async\">\n                            <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                            <td class=\"text-center td-clrs\">{{ tss.classification.name }}</td>\n                            <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                          </tr>\n                          <tr class=\"text-left\">\n                            <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\" data-toggle=\"modal\"\n                              data-target=\"#tskModal\">New\n                              Task</button>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card card-plain\">\n                <div class=\"card-header\" role=\"tab\" id=\"pDAY0\">\n                  <a class=\"collapsed\" (click)=\"setDay('day2')\" title=\"Click to start planning your tasks\" data-toggle=\"collapse\" href=\"#planDay2\" aria-expanded=\"false\"\n                    aria-controls=\"planDay2\">\n                    {{ day2label }}\n                    <i class=\"nc-icon nc-minimal-down\"></i>\n                  </a>\n                </div>\n                <div id=\"planDay2\" class=\"collapse\" aria-labelledby=\"pDAY0\" data-parent=\"#accordionDay\">\n                  <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                      <table class=\"table\">\n                        <thead class=\"text-primary\">\n                          <th class=\"text-left\">Name</th>\n                          <th class=\"text-center\">Classification</th>\n                          <th class=\"text-right\">Start Date</th>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let tss of day2Tasks | async\">\n                            <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                            <td class=\"text-center td-clrs\">{{ tss.classification.name }}</td>\n                            <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                          </tr>\n                          <tr class=\"text-left\">\n                            <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\" data-toggle=\"modal\"\n                              data-target=\"#tskModal\">New\n                              Task</button>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card card-plain\">\n                <div class=\"card-header\" role=\"tab\" id=\"pDAY0\">\n                  <a class=\"collapsed\" (click)=\"setDay('day3')\" title=\"Click to start planning your tasks\" data-toggle=\"collapse\" href=\"#planDay3\" aria-expanded=\"false\"\n                    aria-controls=\"planDay3\">\n                    {{ day3label }}\n                    <i class=\"nc-icon nc-minimal-down\"></i>\n                  </a>\n                </div>\n                <div id=\"planDay3\" class=\"collapse\" aria-labelledby=\"pDAY0\" data-parent=\"#accordionDay\">\n                  <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                      <table class=\"table\">\n                        <thead class=\"text-primary\">\n                          <th class=\"text-left\">Name</th>\n                          <th class=\"text-center\">Classification</th>\n                          <th class=\"text-right\">Start Date</th>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let tss of day3Tasks | async\">\n                            <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                            <td class=\"text-center td-clrs\">{{ tss.classification.name }}</td>\n                            <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                          </tr>\n                          <tr class=\"text-left\">\n                            <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\" data-toggle=\"modal\"\n                              data-target=\"#tskModal\">New\n                              Task</button>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card card-plain\">\n                <div class=\"card-header\" role=\"tab\" id=\"pDAY0\">\n                  <a class=\"collapsed\" (click)=\"setDay('day4')\" title=\"Click to start planning your tasks\" data-toggle=\"collapse\" href=\"#planDay4\" aria-expanded=\"false\"\n                    aria-controls=\"planDay4\">\n                    {{ day4label }}\n                    <i class=\"nc-icon nc-minimal-down\"></i>\n                  </a>\n                </div>\n                <div id=\"planDay4\" class=\"collapse\" aria-labelledby=\"pDAY0\" data-parent=\"#accordionDay\">\n                  <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                      <table class=\"table\">\n                        <thead class=\"text-primary\">\n                          <th class=\"text-left\">Name</th>\n                          <th class=\"text-center\">Classification</th>\n                          <th class=\"text-right\">Start Date</th>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let tss of day4Tasks | async\">\n                            <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                            <td class=\"text-center td-clrs\">{{ tss.classification.name }}</td>\n                            <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                          </tr>\n                          <tr class=\"text-left\">\n                            <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\" data-toggle=\"modal\"\n                              data-target=\"#tskModal\">New\n                              Task</button>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card card-plain\">\n                <div class=\"card-header\" role=\"tab\" id=\"pDAY0\">\n                  <a class=\"collapsed\" (click)=\"setDay('day5')\" title=\"Click to start planning your tasks\" data-toggle=\"collapse\" href=\"#planDay5\" aria-expanded=\"false\"\n                    aria-controls=\"planDay5\">\n                    {{ day5label }}\n                    <i class=\"nc-icon nc-minimal-down\"></i>\n                  </a>\n                </div>\n                <div id=\"planDay5\" class=\"collapse\" aria-labelledby=\"pDAY0\" data-parent=\"#accordionDay\">\n                  <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                      <table class=\"table\">\n                        <thead class=\"text-primary\">\n                          <th class=\"text-left\">Name</th>\n                          <th class=\"text-center\">Classification</th>\n                          <th class=\"text-right\">Start Date</th>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let tss of day5Tasks | async\">\n                            <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                            <td class=\"text-center td-clrs\">{{ tss.classification.name }}</td>\n                            <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                          </tr>\n                          <tr class=\"text-left\">\n                            <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\" data-toggle=\"modal\"\n                              data-target=\"#tskModal\">New\n                              Task</button>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card card-plain\">\n                <div class=\"card-header\" role=\"tab\" id=\"pDAY0\">\n                  <a class=\"collapsed\" (click)=\"setDay('day6')\" title=\"Click to start planning your tasks\" data-toggle=\"collapse\" href=\"#planDay6\" aria-expanded=\"false\"\n                    aria-controls=\"planDay6\">\n                    {{ day6label }}\n                    <i class=\"nc-icon nc-minimal-down\"></i>\n                  </a>\n                </div>\n                <div id=\"planDay6\" class=\"collapse\" aria-labelledby=\"pDAY0\" data-parent=\"#accordionDay\">\n                  <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                      <table class=\"table\">\n                        <thead class=\"text-primary\">\n                          <th class=\"text-left\">Name</th>\n                          <th class=\"text-center\">Classification</th>\n                          <th class=\"text-right\">Start Date</th>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let tss of day6Tasks | async\">\n                            <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                            <td class=\"text-center td-clrs\">{{ tss.classification.name }}</td>\n                            <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                          </tr>\n                          <tr class=\"text-left\">\n                            <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\" data-toggle=\"modal\"\n                              data-target=\"#tskModal\">New\n                              Task</button>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"tab-pane active\" id=\"month\" role=\"tabpanel\" aria-expanded=\"false\">\n        <div class=\"card\">\n          <div class=\"\">\n            <div class=\"card-text\">\n              <p class=\"card-title\">\n                <button class=\"btn-link\" (click)=\"changePeriod('previous','startMonth')\" title=\"goto the previous month\"><i class=\"nc-icon nc-minimal-left\"\n                    style=\"margin-right:3em\"></i></button>\n                {{ currentMonth.format(\"MMMM\") }}'s Tasks of Year {{ currentMonth.format(\"YYYY\") }}\n                <button class=\"btn-link\" (click)=\"changePeriod('next','startMonth')\" title=\"goto the next month\"><i class=\"nc-icon nc-minimal-right\"\n                    style=\"margin-left:3em\"></i></button>\n              </p>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div aria-multiselectable=\"true\" class=\"card-collapse\" id=\"accordionWeek\" role=\"tablist\">\n              <div class=\"card card-plain\">\n                <div class=\"card-header\" role=\"tab\" id=\"pWeek\">\n                  <a class=\"collapsed\" (click)=\"setWeek('week0')\"  title=\"Click to start planning your tasks\" data-toggle=\"collapse\" href=\"#planWeek0\"\n                    aria-expanded=\"false\" aria-controls=\"planWeek0\">\n                    Week {{ week0label.week() }} of year {{ week0label.year() }}\n                    <i class=\"nc-icon nc-minimal-down\"></i>\n                  </a>\n                </div>\n                <div id=\"planWeek0\" class=\"collapse\" aria-labelledby=\"pWeek\" data-parent=\"#accordionWeek\">\n                  <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                      <table class=\"table\">\n                        <thead class=\"text-primary\">\n                          <th class=\"text-left\">Name</th>\n                          <th class=\"text-center\">Classification</th>\n                          <th class=\"text-right\">Start Date</th>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let tss of week0Tasks | async\">\n                            <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                            <td class=\"text-center td-clrs\">{{ tss.classification.name }}</td>\n                            <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                          </tr>\n                          <tr class=\"text-left\">\n                            <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\" data-toggle=\"modal\"\n                              data-target=\"#tskModal\">New\n                              Task</button>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card card-plain\">\n                <div class=\"card-header\" role=\"tab\" id=\"pWeek\">\n                  <a class=\"collapsed\" (click)=\"setWeek('week1')\" title=\"Click to start planning your tasks\" data-toggle=\"collapse\" href=\"#planWeek1\"\n                    aria-expanded=\"false\" aria-controls=\"planWeek1\">\n                    Week {{ week1label.week() }} of year {{ week1label.year() }}\n                    <i class=\"nc-icon nc-minimal-down\"></i>\n                  </a>\n                </div>\n                <div id=\"planWeek1\" class=\"collapse\" aria-labelledby=\"pWeek\" data-parent=\"#accordionWeek\">\n                  <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                      <table class=\"table\">\n                        <thead class=\"text-primary\">\n                          <th class=\"text-left\">Name</th>\n                          <th class=\"text-center\">Classification</th>\n                          <th class=\"text-right\">Start Date</th>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let tss of week1Tasks | async\">\n                            <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                            <td class=\"text-center td-clrs\">{{ tss.classification.name }}</td>\n                            <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                          </tr>\n                          <tr class=\"text-left\">\n                            <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\" data-toggle=\"modal\"\n                              data-target=\"#tskModal\">New\n                              Task</button>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card card-plain\">\n                <div class=\"card-header\" role=\"tab\" id=\"pWeek\">\n                  <a class=\"collapsed\" (click)=\"setWeek('week2')\" title=\"Click to start planning your tasks\" data-toggle=\"collapse\" href=\"#planWeek2\"\n                    aria-expanded=\"false\" aria-controls=\"planWeek2\">\n                    Week {{ week2label.week() }}  of year {{ week2label.year() }}\n                    <i class=\"nc-icon nc-minimal-down\"></i>\n                  </a>\n                </div>\n                <div id=\"planWeek2\" class=\"collapse\" aria-labelledby=\"pWeek\" data-parent=\"#accordionWeek\">\n                  <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                      <table class=\"table\">\n                        <thead class=\"text-primary\">\n                          <th class=\"text-left\">Name</th>\n                          <th class=\"text-center\">Classification</th>\n                          <th class=\"text-right\">Start Date</th>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let tss of week2Tasks | async\">\n                            <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                            <td class=\"text-center td-clrs\">{{ tss.classification.name }}</td>\n                            <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                          </tr>\n                          <tr class=\"text-left\">\n                            <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\" data-toggle=\"modal\"\n                              data-target=\"#tskModal\">New\n                              Task</button>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card card-plain\">\n                <div class=\"card-header\" role=\"tab\" id=\"pWeek\">\n                  <a class=\"collapsed\" (click)=\"setWeek('week3')\" title=\"Click to start planning your tasks\" data-toggle=\"collapse\" href=\"#planWeek3\"\n                    aria-expanded=\"false\" aria-controls=\"planWeek3\">\n                    Week {{ week3label.week() }} of year {{ week3label.year() }}\n                    <i class=\"nc-icon nc-minimal-down\"></i>\n                  </a>\n                </div>\n                <div id=\"planWeek3\" class=\"collapse\" aria-labelledby=\"pWeek\" data-parent=\"#accordionWeek\">\n                  <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                      <table class=\"table\">\n                        <thead class=\"text-primary\">\n                          <th class=\"text-left\">Name</th>\n                          <th class=\"text-center\">Classification</th>\n                          <th class=\"text-right\">Start Date</th>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let tss of week3Tasks | async\">\n                            <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                            <td class=\"text-center td-clrs\">{{ tss.classification.name }}</td>\n                            <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                          </tr>\n                          <tr class=\"text-left\">\n                            <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\" data-toggle=\"modal\"\n                              data-target=\"#tskModal\">New\n                              Task</button>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"tab-pane\" id=\"quarter\" role=\"tabpanel\" aria-expanded=\"false\">\n        <div class=\"card\">\n          <div class=\"\">\n            <div class=\"card-text\">\n              <p class=\"card-title\">\n                <button class=\"btn-link\" (click)=\"changePeriod('previous','startQuarter')\" title=\"goto the previous Quarert\"><i class=\"nc-icon nc-minimal-left\"\n                    style=\"margin-right:3em\"></i></button>\n                {{ currentQuarter.quarter() }}<small>th</small> Quarter's Tasks of Year {{ currentQuarter.year() }}\n                <button class=\"btn-link\" (click)=\"changePeriod('next','startQuarter')\" title=\"goto the next Quarter\"><i class=\"nc-icon nc-minimal-right\"\n                    style=\"margin-left:3em\"></i></button>\n              </p>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div aria-multiselectable=\"true\" class=\"card-collapse\" id=\"accordionMonth\" role=\"tablist\">\n              <div class=\"card card-plain\">\n                <div class=\"card-header\" role=\"tab\" id=\"pMonth\">\n                  <a class=\"collapsed\" (click)=\"setMonth('month1')\" title=\"Click to start planning your tasks\" data-toggle=\"collapse\" href=\"#planMonth1\"\n                    aria-expanded=\"false\" aria-controls=\"planMonth1\">\n                    {{ month1label.format('MMMM') }}, {{ month1label.year() }}\n                    <i class=\"nc-icon nc-minimal-down\"></i>\n                  </a>\n                </div>\n                <div id=\"planMonth1\" class=\"collapse\" aria-labelledby=\"pMonth\" data-parent=\"#accordionMonth\">\n                  <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                      <table class=\"table\">\n                        <thead class=\"text-primary\">\n                          <th class=\"text-left\">Name</th>\n                          <th class=\"text-center\">Classification</th>\n                          <th class=\"text-right\">Start Date</th>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let tss of month1Tasks | async\">\n                            <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                            <td class=\"text-center td-clrs\">{{ tss.classification.name }}</td>\n                            <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                          </tr>\n                          <tr class=\"text-left\">\n                            <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\" data-toggle=\"modal\"\n                              data-target=\"#tskModal\">New\n                              Task</button>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card card-plain\">\n                <div class=\"card-header\" role=\"tab\" id=\"pMonth\">\n                  <a class=\"collapsed\" (click)=\"setMonth('month2')\" title=\"Click to start planning your tasks\" data-toggle=\"collapse\" href=\"#planMonth2\"\n                    aria-expanded=\"false\" aria-controls=\"planMonth2\">\n                    {{ month2label.format('MMMM') }}, {{ month2label.year() }}\n                    <i class=\"nc-icon nc-minimal-down\"></i>\n                  </a>\n                </div>\n                <div id=\"planMonth2\" class=\"collapse\" aria-labelledby=\"pMonth\" data-parent=\"#accordionMonth\">\n                  <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                      <table class=\"table\">\n                        <thead class=\"text-primary\">\n                          <th class=\"text-left\">Name</th>\n                          <th class=\"text-center\">Classification</th>\n                          <th class=\"text-right\">Start Date</th>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let tss of month2Tasks | async\">\n                            <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                            <td class=\"text-center td-clrs\">{{ tss.classification.name }}</td>                            \n                            <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                          </tr>\n                          <tr class=\"text-left\">\n                            <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\" data-toggle=\"modal\"\n                              data-target=\"#tskModal\">New\n                              Task</button>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card card-plain\">\n                <div class=\"card-header\" role=\"tab\" id=\"pMonth\">\n                  <a class=\"collapsed\" (click)=\"setMonth('month3')\" title=\"Click to start planning your tasks\" data-toggle=\"collapse\" href=\"#planMonth3\"\n                    aria-expanded=\"false\" aria-controls=\"planMonth3\">\n                    {{ month3label.format('MMMM') }}, {{ month3label.year() }}\n                    <i class=\"nc-icon nc-minimal-down\"></i>\n                  </a>\n                </div>\n                <div id=\"planMonth3\" class=\"collapse\" aria-labelledby=\"pMonth\" data-parent=\"#accordionMonth\">\n                  <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                      <table class=\"table\">\n                        <thead class=\"text-primary\">\n                          <th class=\"text-left\">Name</th>\n                          <th class=\"text-center\">Classification</th>\n                          <th class=\"text-right\">Start Date</th>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let tss of month3Tasks | async\">\n                            <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                            <td class=\"text-center td-clrs\">{{ tss.classification.name }}</td>\n                            <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                          </tr>\n                          <tr class=\"text-left\">\n                            <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\" data-toggle=\"modal\"\n                              data-target=\"#tskModal\">New\n                              Task</button>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"tab-pane\" id=\"year\" role=\"tabpanel\" aria-expanded=\"false\">\n        <div class=\"card\">\n          <div class=\"\">\n            <div class=\"card-text\">\n              <p class=\"card-title\">\n                <button class=\"btn-link\" (click)=\"changePeriod('previous','startYear')\" title=\"goto the previous Year\"><i class=\"nc-icon nc-minimal-left\"\n                    style=\"margin-right:3em\"></i></button>\n                Year {{ currentYear }}'s Tasks\n                <button class=\"btn-link\" (click)=\"changePeriod('next','startYear')\" title=\"goto the next Year\"><i class=\"nc-icon nc-minimal-right\"\n                    style=\"margin-left:3em\"></i></button>\n              </p>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div aria-multiselectable=\"true\" class=\"card-collapse\" id=\"accordionQuarter\" role=\"tablist\">\n              <div class=\"card card-plain\">\n                <div class=\"card-header\" role=\"tab\" id=\"pQuarter\">\n                  <a class=\"collapsed\" (click)=\"setQuarter('quarter0')\" title=\"Click to start planning your tasks\" data-toggle=\"collapse\" href=\"#planQuarter0\"\n                    aria-expanded=\"false\" aria-controls=\"planQuarter0\">\n                    Quarter {{ quarter0label.quarter() }} of year {{ quarter0label.year() }}\n                    <i class=\"nc-icon nc-minimal-down\"></i>\n                  </a>\n                </div>\n                <div id=\"planQuarter0\" class=\"collapse\" aria-labelledby=\"pQuarter\" data-parent=\"#accordionQuarter\">\n                  <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                      <table class=\"table\">\n                        <thead class=\"text-primary\">\n                          <th class=\"text-left\">Name</th>\n                          <th class=\"text-left\">Classification</th>\n                          <th class=\"text-right\">Start Date</th>\n                          <th class=\"text-right\">Action</th>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let tss of quarter0Tasks | async\">\n                            <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                            <td class=\"text-left td-clrs\">{{ tss.classification.name }}</td>\n                            <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                            <td class=\"text-right td-clrs\">\n                              <button class=\"dropdown-toggle primary btn-link\" type=\"button\" id=\"dropdownMenuButton\"\n                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <font size=5> ... </font>\n                              </button>\n                              <div class=\"primary dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                <button class=\"btn-primany dropdown-item text-danger btn-link\" rel=\"tooltip\" (click)=\"deleteTask(tss)\"\n                                  title=\"Remove {{ tss.name }} Task\">Remove</button>\n                              </div>\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card card-plain\">\n                <div class=\"card-header\" role=\"tab\" id=\"pQuarter\">\n                  <a class=\"collapsed\" (click)=\"setQuarter('quarter1')\" title=\"Click to start planning your tasks\" data-toggle=\"collapse\" href=\"#planQuarter1\"\n                    aria-expanded=\"false\" aria-controls=\"planQuarter1\">\n                    Quarter {{ quarter1label.quarter() }} of year {{ quarter1label.year() }}\n                    <i class=\"nc-icon nc-minimal-down\"></i>\n                  </a>\n                </div>\n                <div id=\"planQuarter1\" class=\"collapse\" aria-labelledby=\"pQuarter\" data-parent=\"#accordionQuarter\">\n                  <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                      <table class=\"table\">\n                        <thead class=\"text-primary\">\n                          <th class=\"text-left\">Name</th>\n                          <th class=\"text-center\">Classification</th>\n                          <th class=\"text-right\">Start Date</th>\n                          <th class=\"text-right\">Action</th>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let tss of quarter1Tasks | async\">\n                            <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                            <td class=\"text-center td-clrs\">{{ tss.classification.name }}</td>                            \n                            <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                            <td class=\"text-right td-clrs\">\n                              <button class=\"dropdown-toggle primary btn-link\" type=\"button\" id=\"dropdownMenuButton\"\n                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <font size=5> ... </font>\n                              </button>\n                              <div class=\"primary dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                <button class=\"btn-primany dropdown-item text-danger btn-link\" rel=\"tooltip\" (click)=\"deleteTask(tss)\"\n                                  title=\"Remove {{ tss.name }} Task\">Remove</button>\n                              </div>\n                            </td>\n                          </tr>\n                          <tr class=\"text-left\">\n                            <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\" data-toggle=\"modal\"\n                              data-target=\"#tskModal\">New\n                              Task</button>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card card-plain\">\n                <div class=\"card-header\" role=\"tab\" id=\"pQuarter\">\n                  <a class=\"collapsed\" (click)=\"setQuarter('quarter2')\" title=\"Click to start planning your tasks\" data-toggle=\"collapse\" href=\"#planQuarter2\"\n                    aria-expanded=\"false\" aria-controls=\"planQuarter2\">\n                    Quarter {{ quarter2label.quarter() }} of year {{ quarter2label.year() }}\n                    <i class=\"nc-icon nc-minimal-down\"></i>\n                  </a>\n                </div>\n                <div id=\"planQuarter2\" class=\"collapse\" aria-labelledby=\"pQuarter\" data-parent=\"#accordionQuarter\">\n                  <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                      <table class=\"table\">\n                        <thead class=\"text-primary\">\n                          <th class=\"text-left\">Name</th>\n                          <th class=\"text-center\">Classification</th>\n                          <th class=\"text-right\">Start Date</th>\n                          <th class=\"text-right\">Action</th>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let tss of quarter2Tasks | async\">\n                            <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                            <td class=\"text-center td-clrs\">{{ tss.classification.name }}</td>                            \n                            <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                            <td class=\"text-right td-clrs\">\n                              <button class=\"dropdown-toggle primary btn-link\" type=\"button\" id=\"dropdownMenuButton\"\n                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <font size=5> ... </font>\n                              </button>\n                              <div class=\"primary dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                <button class=\"btn-primany dropdown-item text-danger btn-link\" rel=\"tooltip\" (click)=\"deleteTask(tss)\"\n                                  title=\"Remove {{ tss.name }} Task\">Remove</button>\n                              </div>\n                            </td>\n                          </tr>\n                          <tr class=\"text-left\">\n                            <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\" data-toggle=\"modal\"\n                              data-target=\"#tskModal\">New\n                              Task</button>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card card-plain\">\n                <div class=\"card-header\" role=\"tab\" id=\"pQuarter\">\n                  <a class=\"collapsed\" (click)=\"setQuarter('quarter3')\" title=\"Click to start planning your tasks\" data-toggle=\"collapse\" href=\"#planQuarter3\"\n                    aria-expanded=\"false\" aria-controls=\"planQuarter3\">\n                    Quarter {{ quarter3label.quarter() }} of year {{ quarter3label.year() }}\n                    <i class=\"nc-icon nc-minimal-down\"></i>\n                  </a>\n                </div>\n                <div id=\"planQuarter3\" class=\"collapse\" aria-labelledby=\"pQuarter\" data-parent=\"#accordionQuarter\">\n                  <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                      <table class=\"table\">\n                        <thead class=\"text-primary\">\n                          <th class=\"text-left\">Name</th>\n                          <th class=\"text-center\">Classification</th>\n                          <th class=\"text-right\">Start Date</th>\n                          <th class=\"text-right\">Action</th>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let tss of quarter3Tasks | async\">\n                            <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                            <td class=\"text-center td-clrs\">{{ tss.classification.name }}</td>\n                            <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                            <td class=\"text-right td-clrs\">\n                              <button class=\"dropdown-toggle primary btn-link\" type=\"button\" id=\"dropdownMenuButton\"\n                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <font size=5> ... </font>\n                              </button>\n                              <div class=\"primary dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                <button class=\"btn-primany dropdown-item text-danger btn-link\" rel=\"tooltip\" (click)=\"deleteTask(tss)\"\n                                  title=\"Remove {{ tss.name }} Task\">Remove</button>\n                              </div>\n                            </td>\n                          </tr>\n                          <tr class=\"text-left\">\n                            <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\" data-toggle=\"modal\"\n                              data-target=\"#tskModal\">New\n                              Task</button>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"tskModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"card-body \">\n        <div class=\"card-header text-center\">\n          <p class=\"col-md-8 ml-auto mr-auto col-form-label info\">\n            <font size=4>Create a Task</font>\n          </p>\n        </div>\n        <hr>\n        <form class=\"form-horizontal\">\n          <ng-container>\n            <div class=\"row\">\n              <label class=\"col-md-3 col-form-label\">Classification</label>\n              <div class=\"col-md-8\">\n                <div class=\"form-group\" style=\"margin-top: -8px; margin-left: 15px; margin-bottom: -2px;\">\n                  <ng-select [items]=\"classifications | async\" bindLabel=\"name\" name=\"tClassification\" placeholder=\"Select classification\" [(ngModel)]=\"classification\">\n                  </ng-select>            \n                </div>\n              </div>\n            </div>\n          </ng-container>\n          <ng-container>\n            <div class=\"row\">\n              <label class=\"col-md-3 col-form-label\">Champion</label>\n              <div class=\"col-md-8\">\n                <div class=\"form-group\" style=\"margin-top: -8px; margin-left: 15px; margin-bottom: -2px;\">\n                  <ng-select [items]=\"myContacts | async\" bindLabel=\"name\" name=\"tChampion\" placeholder=\"Select champion\" [(ngModel)]=\"myChampion\">\n                  </ng-select>\n                </div>\n              </div>\n            </div>\n          </ng-container>\n          <div class=\"row\">\n            <label class=\"col-md-3 col-form-label\">Task name</label>\n            <div class=\"col-md-8\">\n              <div class=\"form-group\">\n                <input type=\"text\" [(ngModel)]=\"task.name\" name=\"taskName\" class=\"form-control\" placeholder=\"Task name\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-md-3 col-form-label\">Start Date</label>\n            <div class=\"col-md-8\">\n              <div class=\"form-group\">\n                <input type=\"date\" [(ngModel)]=\"task.start\" name=\"start\" class=\"form-control\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-md-3 col-form-label\">Finish Date</label>\n            <div class=\"col-md-8\">\n              <div class=\"form-group\">\n                <input type=\"date\" [(ngModel)]=\"task.finish\" name=\"finish\" class=\"form-control\">\n              </div>\n            </div>\n          </div>\n        </form>\n        <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n          <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n          </div>\n          <div class=\"divider\"></div>\n          <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"newTask()\" data-dismiss=\"modal\" title=\"save task\">Save</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/calendar/map-task/map-task.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/calendar/map-task/map-task.component.ts ***!
  \*********************************************************/
/*! exports provided: MapTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTaskComponent", function() { return MapTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var app_services_personal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/personal.service */ "./src/app/services/personal.service.ts");
/* harmony import */ var app_services_enterprise_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/enterprise.service */ "./src/app/services/enterprise.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var app_services_task_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var app_services_initialise_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/services/initialise.service */ "./src/app/services/initialise.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var MapTaskComponent = /** @class */ (function () {
    function MapTaskComponent(auth, is, pns, ts, afAuth, es, afs, renderer, element, router, as) {
        var _this = this;
        this.auth = auth;
        this.is = is;
        this.pns = pns;
        this.ts = ts;
        this.afAuth = afAuth;
        this.es = es;
        this.afs = afs;
        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.as = as;
        this.show = false;
        this.showEnterprise = false;
        this.buttonName = 'Show';
        this.btnName = 'Show';
        this.btnTable = 'Show';
        this.showUserTable = false;
        this.showChamp = true;
        this.btnChamp = 'Show';
        this.showChampBtn = true;
        this.showProjectTable = false;
        this.btnProjTable = 'Show';
        this.showProj = true;
        this.btnProj = 'Show';
        this.showProjBtn = true;
        this.showCompanyTable = false;
        this.btnCompanyTable = 'Show';
        this.showCompany = true;
        this.btnCompany = 'Show';
        this.task = is.getTask();
        this.selectedCompany = is.getSelectedCompany();
        this.selectedProject = is.getSelectedProject();
        this.userChampion = is.getUserChampion();
        this.myChampion = is.getUserChampion();
        // this.classification = { name: '', createdOn: '' };
        this.afAuth.user.subscribe(function (user) {
            _this.userId = user.uid;
            _this.user = user;
            _this.dataCall();
        });
        var mmm = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(), "DD-MM-YYYY");
        this.todayDate = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(), "DD-MM-YYYY").format('dddd');
        console.log(this.todayDate);
        this.currentDay = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(), "DD-MM-YYYY").dayOfYear();
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(), "DD-MM-YYYY");
        console.log(this.currentDate.format('L'));
        // this.testDay = moment(new Date().toISOString(), "DD-MM-YYYY").dayOfYear();
        console.log(moment__WEBPACK_IMPORTED_MODULE_8__().add(2, 'Q').toString());
        console.log(moment__WEBPACK_IMPORTED_MODULE_8__().add(4, 'M').toString());
        console.log(moment__WEBPACK_IMPORTED_MODULE_8__().add(4, 'M').get('M').toString());
        var ddref = moment__WEBPACK_IMPORTED_MODULE_8__().add(4, 'M');
        console.log(ddref.get('M'));
        console.log(moment__WEBPACK_IMPORTED_MODULE_8__(18 - 10 - 2018, "DD-MM-YYYY").dayOfYear().toString());
        // console.log(moment(2018-1-1).month().toString());
        this.currentMonth = moment__WEBPACK_IMPORTED_MODULE_8__();
        console.log(this.currentMonth);
        this.currentYear = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(), "DD-MM-YYYY").year().toString();
        // this.currentQuarter = moment(new Date(), "DD-MM-YYYY").quarter().toString();
        this.currentQuarter = moment__WEBPACK_IMPORTED_MODULE_8__();
        this.currentWeek = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(), "DD-MM-YYYY");
        /* moment().dayOfYear();  moment.locale()*/
        console.log(this.today);
        // let dayNo = moment(this.currentWeek, 'DD-MM-YYYY');
        var dayNo = moment__WEBPACK_IMPORTED_MODULE_8__();
        console.log(dayNo);
        console.log(dayNo.dayOfYear());
        console.log(moment__WEBPACK_IMPORTED_MODULE_8__().format('MMMM'));
        console.log("Week" + " " + moment__WEBPACK_IMPORTED_MODULE_8__().week() + " " + "of the year" + " " + moment__WEBPACK_IMPORTED_MODULE_8__().year());
        console.log(moment__WEBPACK_IMPORTED_MODULE_8__(this.currentWeek).week());
        console.log(moment__WEBPACK_IMPORTED_MODULE_8__(dayNo, "DD-MM-YYYY").add(1, "month").month());
        this.day0label = moment__WEBPACK_IMPORTED_MODULE_8__(dayNo, "DD-MM-YYYY").format('dddd');
        this.day1label = moment__WEBPACK_IMPORTED_MODULE_8__(dayNo, "DD-MM-YYYY").add(1, 'd').format('dddd');
        this.day2label = moment__WEBPACK_IMPORTED_MODULE_8__(dayNo, "DD-MM-YYYY").add(2, 'd').format('dddd');
        this.day3label = moment__WEBPACK_IMPORTED_MODULE_8__(dayNo, "DD-MM-YYYY").add(3, 'd').format('dddd');
        this.day4label = moment__WEBPACK_IMPORTED_MODULE_8__(dayNo, "DD-MM-YYYY").add(4, 'd').format('dddd');
        this.day5label = moment__WEBPACK_IMPORTED_MODULE_8__(dayNo, "DD-MM-YYYY").add(5, 'd').format('dddd');
        this.day6label = moment__WEBPACK_IMPORTED_MODULE_8__(dayNo, "DD-MM-YYYY").add(6, 'd').format('dddd');
        this.week0label = moment__WEBPACK_IMPORTED_MODULE_8__(dayNo, "DD-MM-YYYY");
        this.week1label = moment__WEBPACK_IMPORTED_MODULE_8__(dayNo, "DD-MM-YYYY").add(1, 'w');
        this.week2label = moment__WEBPACK_IMPORTED_MODULE_8__(dayNo, "DD-MM-YYYY").add(2, 'w');
        this.week3label = moment__WEBPACK_IMPORTED_MODULE_8__(dayNo, "DD-MM-YYYY").add(3, 'w');
        this.month1label = moment__WEBPACK_IMPORTED_MODULE_8__(dayNo, "DD-MM-YYYY");
        this.month2label = moment__WEBPACK_IMPORTED_MODULE_8__(dayNo, "DD-MM-YYYY").add(1, 'M');
        this.month3label = moment__WEBPACK_IMPORTED_MODULE_8__(dayNo, "DD-MM-YYYY").add(2, 'M');
        this.quarter0label = moment__WEBPACK_IMPORTED_MODULE_8__(dayNo, "DD-MM-YYYY");
        this.quarter1label = moment__WEBPACK_IMPORTED_MODULE_8__(dayNo, "DD-MM-YYYY").add(1, 'Q');
        this.quarter2label = moment__WEBPACK_IMPORTED_MODULE_8__(dayNo, "DD-MM-YYYY").add(2, 'Q');
        this.quarter3label = moment__WEBPACK_IMPORTED_MODULE_8__(dayNo, "DD-MM-YYYY").add(3, 'Q');
        this.SIunits = [
            { id: 'mm', name: 'Millimeters' },
            { id: 'cm', name: 'Centimeters' },
            { id: 'm', name: 'Meters' },
            { id: 'Km', name: 'Kilometers' },
            { id: 'in', name: 'Inches' },
            { id: 'ft', name: 'Feet' },
            { id: 'mi', name: 'Miles' },
            { id: 'yd', name: 'Yards' },
            { id: 'g', name: 'Grams' },
            { id: 'kg', name: 'Kilograms' },
            { id: 'm2', name: 'Area' },
            { id: 'm3', name: 'Volume' },
            { id: 'units', name: 'Units' },
            { id: 'items', name: 'Items' },
            { id: 9, name: 'Pavilnys', disabled: true },
        ];
    }
    MapTaskComponent.prototype.getTasks = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('get tasks');
                return [2 /*return*/];
            });
        });
    };
    MapTaskComponent.prototype.deleteTask = function (task) {
        console.log(task);
        var taskId = task.id;
        console.log(taskId);
        this.afs.collection('Users').doc(this.userId).collection('tasks').doc(taskId).delete();
        this.afs.collection('Users').doc(this.task.champion.id).collection('tasks').doc(taskId).delete();
    };
    MapTaskComponent.prototype.newTask = function () {
        console.log(this.task);
        var pr;
        console.log(this.selectedCompany);
        this.task.by = this.user.displayName;
        this.task.byId = this.userId;
        // setting dates
        this.task.createdOn = new Date().toISOString();
        this.task.startDay = moment__WEBPACK_IMPORTED_MODULE_8__(this.task.start, "YYYY-MM-DD").dayOfYear().toString();
        this.task.startWeek = moment__WEBPACK_IMPORTED_MODULE_8__(this.task.start, "YYYY-MM-DD").week().toString();
        this.task.startMonth = moment__WEBPACK_IMPORTED_MODULE_8__(this.task.start, "YYYY-MM-DD").month().toString();
        this.task.startQuarter = moment__WEBPACK_IMPORTED_MODULE_8__(this.task.start, "YYYY-MM-DD").quarter().toString();
        this.task.startYear = moment__WEBPACK_IMPORTED_MODULE_8__(this.task.start, "YYYY-MM-DD").year().toString();
        this.task.finishDay = moment__WEBPACK_IMPORTED_MODULE_8__(this.task.finish, "YYYY-MM-DD").dayOfYear().toString();
        this.task.finishWeek = moment__WEBPACK_IMPORTED_MODULE_8__(this.task.finish, "YYYY-MM-DD").week().toString();
        this.task.finishMonth = moment__WEBPACK_IMPORTED_MODULE_8__(this.task.finish, "YYYY-MM-DD").month().toString();
        this.task.finishQuarter = moment__WEBPACK_IMPORTED_MODULE_8__(this.task.finish, "YYYY-MM-DD").quarter().toString();
        this.task.finishYear = moment__WEBPACK_IMPORTED_MODULE_8__(this.task.finish, "YYYY-MM-DD").year().toString();
        this.task.companyName = "";
        this.task.companyId = "";
        this.task.projectId = "";
        this.task.projectName = "";
        this.task.projectType = "";
        if (this.myChampion.id != "") {
            this.task.champion = this.myChampion;
            this.task.participants = [this.myChampion];
        }
        else {
            this.task.champion = this.userChampion;
            this.task.participants = [this.userChampion];
        }
        // this.ts.addTask(this.task, this.selectedCompany);
        console.log('task created' + this.task);
        var createdTask;
        createdTask = this.task;
        createdTask.classification = this.classification;
        var userRef = this.afs.collection('Users').doc(this.userId).collection('tasks');
        var userClassRef = this.afs.collection('Users').doc(this.userId).collection('classifications').doc(this.classification.id).collection('tasks');
        var champRef = this.afs.collection('Users').doc(this.task.champion.id).collection('tasks');
        //set task under a user
        userRef.add(createdTask).then(function (Ref) {
            var newTaskId = Ref.id;
            console.log(Ref);
            //set task under a champion
            champRef.doc(newTaskId).set(createdTask);
            // update id for user
            userRef.doc(newTaskId).update({ 'id': newTaskId });
            // set task under user classifications
            userClassRef.doc(newTaskId).set(createdTask);
            // update id for user
            userClassRef.doc(newTaskId).update({ 'id': newTaskId });
            // update id for champion
            champRef.doc(newTaskId).update({ 'id': newTaskId });
        });
        //  this.task = this.is.getTask();
        this.task = { name: "", champion: null, projectName: "", department: "", departmentId: "", start: "", startDay: "", startWeek: "", startMonth: "", startQuarter: "", startYear: "", finish: "", finishDay: "", finishWeek: "", finishMonth: "", finishQuarter: "", finishYear: "", by: "", createdOn: "", projectId: "", byId: "", projectType: "", companyName: "", companyId: "", trade: "", section: null, complete: false, id: "", participants: null, status: "", classification: null };
        //  this.userChampion = { name: "", id: "", email: "", bus_email: "", phoneNumber: "", photoURL: "", address: "", nationalId: "", nationality: "" };
        this.myChampion = { name: "", id: "", email: "", bus_email: "", phoneNumber: "", photoURL: "", address: "", nationalId: "", nationality: "" };
    };
    MapTaskComponent.prototype.dataCall = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.myDocument = this.afs.collection('Users').doc(this.user.uid);
                this.userProfile = this.myDocument.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (a) {
                    var data = a.payload.data();
                    var id = a.payload.id;
                    return __assign({ id: id }, data);
                }));
                this.userProfile.subscribe(function (userData) {
                    console.log(userData);
                    var myData = {
                        name: _this.user.displayName,
                        email: _this.user.email,
                        bus_email: userData.bus_email,
                        id: _this.user.uid,
                        phoneNumber: _this.user.phoneNumber,
                        photoURL: _this.user.photoURL,
                        address: userData.address,
                        nationalId: userData.nationalId,
                        nationality: userData.nationality,
                    };
                    if (userData.address == "" || userData.address == null || userData.address == undefined) {
                        userData.address = "";
                    }
                    else {
                    }
                    if (userData.phoneNumber == "" || userData.phoneNumber == null || userData.phoneNumber == undefined) {
                        userData.phoneNumber = "";
                    }
                    else {
                    }
                    if (userData.bus_email == "" || userData.bus_email == null || userData.bus_email == undefined) {
                        userData.bus_email = "";
                    }
                    else {
                    }
                    if (userData.nationalId == "" || userData.nationalId == null || userData.nationalId == undefined) {
                        userData.nationalId = "";
                    }
                    else {
                    }
                    if (userData.nationality == "" || userData.nationality == null || userData.nationality == undefined) {
                        userData.nationality = "";
                    }
                    else {
                    }
                    _this.userChampion = myData;
                    _this.myData = myData;
                    _this.userData = userData;
                });
                this.classifications = this.pns.getClassifications(this.userId);
                this.myContacts = this.pns.getContacts(this.userId);
                this.tasks = this.afs.collection('/Users').doc(this.userId).collection('tasks', function (ref) { return ref.where('startDay', '==', _this.todayDate).orderBy('start', 'asc').limit(5); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (b) { return b.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    _this.mydata = data;
                    _this.mydata.when = moment__WEBPACK_IMPORTED_MODULE_8__(data.start, "YYYY-MM-DD").fromNow().toString();
                    _this.mydata.then = moment__WEBPACK_IMPORTED_MODULE_8__(data.finish, "YYYY-MM-DD").fromNow().toString(),
                        _this.theseTasks.push(_this.mydata);
                    return __assign({ id: id }, data);
                }); }));
                this.todayTasks = this.afs.collection('/Users').doc(this.userId).collection('tasks', function (ref) { return ref.where('startDay', '==', _this.todayDate); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (actions) { return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    return __assign({ id: id }, data);
                }); }));
                this.WeekTasks = this.afs.collection('/Users').doc(this.userId).collection('tasks', function (ref) { return ref.where('startWeek', '==', String(_this.currentWeek)); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (actions) { return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    return __assign({ id: id }, data);
                }); }));
                this.MonthTasks = this.afs.collection('/Users').doc(this.userId).collection('tasks', function (ref) { return ref.where('startWeek', '==', String(_this.currentWeek)); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (actions) { return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    return __assign({ id: id }, data);
                }); }));
                this.QuarterTasks = this.afs.collection('/Users').doc(this.userId).collection('tasks', function (ref) { return ref.where('startWeek', '==', String(_this.currentWeek)); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (actions) { return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    return __assign({ id: id }, data);
                }); }));
                this.YearTasks = this.afs.collection('/Users').doc(this.userId).collection('tasks', function (ref) { return ref.where('startWeek', '==', String(_this.currentWeek)); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (actions) { return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    return __assign({ id: id }, data);
                }); }));
                this.coloursUsers = this.afs.collection('Users').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (actions) { return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    return __assign({ id: id }, data);
                }); }));
                this.projectsCollection = this.afs.collection('/Users').doc(this.userId).collection('projects').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (actions) { return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    return __assign({ id: id }, data);
                }); }));
                this.enterpriseCollection = this.afs.collection('/Users').doc(this.userId).collection('myenterprises').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (actions) { return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    return __assign({ id: id }, data);
                }); }));
                return [2 /*return*/, (this.tasks, this.WeekTasks, this.MonthTasks, this.QuarterTasks, this.YearTasks, this.coloursUsers, this.projectsCollection)];
            });
        });
    };
    //00000000000000000000000000000000000000000000000000000000000000000
    MapTaskComponent.prototype.toggle = function () {
        this.show = !this.show;
        if (this.show)
            this.buttonName = "Hide";
        else
            this.buttonName = "Show";
    };
    MapTaskComponent.prototype.toggleEnt = function () {
        this.showEnterprise = !this.showEnterprise;
        if (this.showEnterprise)
            this.buttonName = "Hide";
        else
            this.buttonName = "Show";
    };
    // hideChampBtn() {
    //   this.showChampBtn = false;
    // }
    MapTaskComponent.prototype.toggleUsersTable = function () {
        this.showUserTable = !this.showUserTable;
        if (this.showUserTable) {
            this.btnTable = "Hide";
        }
        else {
            this.btnTable = "Show";
        }
    };
    MapTaskComponent.prototype.toggleProjTable = function () {
        this.showProjectTable = !this.showProjectTable;
        if (this.showProjectTable) {
            this.btnProjTable = "Hide";
        }
        else {
            this.btnProjTable = "Show";
        }
    };
    MapTaskComponent.prototype.toggleCompTable = function () {
        this.showCompanyTable = !this.showCompanyTable;
        if (this.showCompanyTable) {
            this.btnCompanyTable = "Hide";
        }
        else {
            this.btnCompanyTable = "Show";
        }
    };
    // hideProjBtn() {
    //   this.showProjBtn = false;
    // }
    MapTaskComponent.prototype.toggleProj = function () {
        this.showProj = !this.showProj;
        if (this.showProj)
            this.btnProj = "Hide";
        else
            this.btnProj = "Show";
    };
    // hideCompBtn() {
    //   this.showCompanyBtn = false;
    // }
    MapTaskComponent.prototype.toggleComp = function () {
        this.showCompany = !this.showCompany;
        if (this.showCompany)
            this.btnCompany = "Hide";
        else
            this.btnCompany = "Show";
    };
    MapTaskComponent.prototype.selectColoursUser = function (x) {
        if (x.phoneNumber == "" || x.phoneNumber == null || x.phoneNumber == undefined) {
            x.phoneNumber = "";
        }
        else {
        }
        if (x.address == "" || x.address == null || x.address == undefined) {
            x.address = "";
        }
        else {
        }
        if (x.bus_email == "" || x.bus_email == null || x.bus_email == undefined) {
            x.bus_email = "";
        }
        else {
        }
        if (x.nationalId == "" || x.nationalId == null || x.nationalId == undefined) {
            x.nationalId = "";
        }
        else {
        }
        if (x.nationality == "" || x.nationality == null || x.nationality == undefined) {
            x.nationality = "";
        }
        else {
        }
        var cUser = {
            name: x.name,
            email: x.email,
            bus_email: x.bus_email,
            id: x.id,
            phoneNumber: x.phoneNumber,
            photoURL: x.photoURL,
            address: x.address,
            nationalId: x.nationalId,
            nationality: x.nationality
        };
        this.userChampion = cUser;
        console.log(x);
        console.log(this.userChampion);
        this.toggleChamp();
        this.toggleUsersTable();
    };
    MapTaskComponent.prototype.toggleChamp = function () {
        this.showChamp = !this.showChamp;
        if (this.showChamp)
            this.btnChamp = "Hide";
        else
            this.btnChamp = "Show";
    };
    MapTaskComponent.prototype.selectCompany = function (company) {
        console.log(company);
        this.selectedCompany = company;
        console.log(this.selectedCompany);
        this.toggleComp();
        this.toggleCompTable();
    };
    MapTaskComponent.prototype.selectProject = function (proj) {
        console.log(proj);
        this.proj_ID = proj.id;
        this.selectedProject = proj;
        this.toggleProj();
        this.toggleProjTable();
    };
    /* 00000000000000000000000```````````Planning dates``````````0000000000000000000000000000 */
    MapTaskComponent.prototype.changePeriod = function (action, period) {
        console.log(period + " " + action);
        var subPeriod;
        if (period == 'startWeek') {
            switch (action) {
                case 'previous': {
                    subPeriod = 'startDay';
                    var week$ = Number(this.currentWeek);
                    if (this.currentWeek.week() > 1) {
                        this.currentWeek.subtract(1, 'w');
                        this.currentDate.subtract(7, 'd');
                        this.setDay('startDay');
                        console.log(this.currentWeek);
                    }
                    break;
                }
                case 'next': {
                    var week$ = Number(this.currentWeek);
                    if (this.currentWeek.week() < 52) {
                        // this.currentWeek = String(week$ + 1);
                        this.currentWeek.add(1, 'w');
                        this.currentDate.add(7, 'd');
                        console.log(this.currentWeek);
                        this.setDay('startDay');
                        console.log(this.currentWeek);
                    }
                    break;
                }
                default:
                    break;
            }
        }
        if (period == 'startMonth') {
            var ndays = this.currentDate.daysInMonth();
            console.log(ndays);
            var month$ = Number(this.currentMonth.month());
            switch (action) {
                case 'previous': {
                    // let week$ = this.currentWeek.week()
                    // if (month$ > 0) {
                    // month$ -= 1; console.log(moment(month$));
                    this.currentMonth = moment__WEBPACK_IMPORTED_MODULE_8__(this.currentMonth).subtract(1, "month");
                    this.currentMonthLabel = moment__WEBPACK_IMPORTED_MODULE_8__(this.currentDate).subtract(1, "month").format("MMMM");
                    console.log(this.currentMonthLabel);
                    this.week0label.subtract(1, 'M');
                    this.week1label.subtract(1, 'M');
                    this.week2label.subtract(1, 'M');
                    this.week3label.subtract(1, 'M');
                    // }
                    break;
                }
                case 'next':
                    {
                        // let month$ = Number(this.currentMonth)
                        // if (month$ <= 11) {
                        // month$ += 1; console.log(moment(month$));
                        this.currentMonth = moment__WEBPACK_IMPORTED_MODULE_8__(this.currentMonth).add(1, "month");
                        this.currentMonthLabel = moment__WEBPACK_IMPORTED_MODULE_8__(this.currentDate).add(1, "month").format("MMMM");
                        console.log(this.currentMonthLabel);
                        console.log(this.currentWeek.week());
                        this.week0label.add(1, 'M');
                        this.week1label.add(1, 'M');
                        this.week2label.add(1, 'M');
                        this.week3label.add(1, 'M');
                    }
                    break;
                // }
                default:
                    break;
            }
        }
        var quarter$ = Number(this.currentQuarter);
        if (period == 'startQuarter') {
            switch (action) {
                case 'previous': {
                    // let quarter$ = Number(this.currentQuarter);
                    // if (quarter$ > 1) {
                    // this.currentQuarter = String(quarter$ - 1);
                    this.currentQuarter = moment__WEBPACK_IMPORTED_MODULE_8__(this.currentQuarter).subtract(1, "Q");
                    console.log(this.currentQuarter);
                    this.month1label.subtract(1, 'Q');
                    this.month2label.subtract(1, 'Q');
                    this.month3label.subtract(1, 'Q');
                    // }
                    break;
                }
                case 'next': {
                    // let quarter$ = Number(this.currentQuarter);
                    // if (quarter$ < 4) {
                    // this.currentQuarter = String(quarter$ + 1);
                    this.currentQuarter = moment__WEBPACK_IMPORTED_MODULE_8__(this.currentQuarter).add(1, "Q");
                    console.log(this.currentQuarter);
                    this.month1label.add(1, 'Q');
                    this.month2label.add(1, 'Q');
                    this.month3label.add(1, 'Q');
                    // }
                    break;
                }
                default:
                    break;
            }
        }
        if (period == 'startYear') {
            subPeriod = 'startQuarter';
            switch (action) {
                case 'previous': {
                    var year$ = Number(this.currentYear);
                    this.currentYear = String(year$ - 1);
                    console.log(this.currentYear);
                    this.quarter0label.subtract(1, 'y');
                    this.quarter1label.subtract(1, 'y');
                    this.quarter2label.subtract(1, 'y');
                    this.quarter3label.subtract(1, 'y');
                    break;
                }
                case 'next': {
                    var year$ = Number(this.currentYear);
                    this.currentYear = String(year$ + 1);
                    console.log(this.currentYear);
                    this.quarter0label.add(1, 'y');
                    this.quarter1label.add(1, 'y');
                    this.quarter2label.add(1, 'y');
                    this.quarter3label.add(1, 'y');
                    break;
                }
                default:
                    break;
            }
        }
        else {
            console.log('something not right');
        }
        // this.setPeriod(period);
    };
    MapTaskComponent.prototype.setDay = function (day) {
        // console.log(period);
        // this.period = this.currentWeek;
        var dayNo = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(), 'DD-MM-YYYY').dayOfYear();
        // let periodWeek = 'startWeek';
        var period = 'startDay';
        if (day == 'day0') {
            console.log(dayNo);
            console.log(this.period);
            console.log(this.day0label);
            this.period = moment__WEBPACK_IMPORTED_MODULE_8__(this.currentDate, "DD-MM-YYYY").dayOfYear().toString();
            var year = moment__WEBPACK_IMPORTED_MODULE_8__(this.currentDate, "DD-MM-YYYY").year().toString();
            console.log(this.period);
            this.todayTasks = this.dayViewDateTasks(period, this.period, year);
        }
        if (day == 'day1') {
            this.period = moment__WEBPACK_IMPORTED_MODULE_8__(this.currentDate, "DD-MM-YYYY").add(1, 'd').dayOfYear().toString();
            var year = moment__WEBPACK_IMPORTED_MODULE_8__(this.currentDate, "DD-MM-YYYY").year().toString();
            console.log(this.period);
            this.day1Tasks = this.dayViewDateTasks(period, this.period, year);
        }
        if (day == 'day2') {
            this.period = moment__WEBPACK_IMPORTED_MODULE_8__(this.currentDate, "DD-MM-YYYY").add(2, 'd').dayOfYear().toString();
            var year = moment__WEBPACK_IMPORTED_MODULE_8__(this.currentDate, "DD-MM-YYYY").year().toString();
            console.log(this.period);
            this.day2Tasks = this.dayViewDateTasks(period, this.period, year);
        }
        if (day == 'day3') {
            this.period = moment__WEBPACK_IMPORTED_MODULE_8__(this.currentDate, "DD-MM-YYYY").add(3, 'd').dayOfYear().toString();
            var year = moment__WEBPACK_IMPORTED_MODULE_8__(this.currentDate, "DD-MM-YYYY").year().toString();
            console.log(this.period);
            this.day3Tasks = this.dayViewDateTasks(period, this.period, year);
        }
        if (day == 'day4') {
            this.period = moment__WEBPACK_IMPORTED_MODULE_8__(this.currentDate, "DD-MM-YYYY").add(4, 'd').dayOfYear().toString();
            var year = moment__WEBPACK_IMPORTED_MODULE_8__(this.currentDate, "DD-MM-YYYY").year().toString();
            console.log(this.period);
            this.day4Tasks = this.dayViewDateTasks(period, this.period, year);
        }
        if (day == 'day5') {
            this.period = moment__WEBPACK_IMPORTED_MODULE_8__(this.currentDate, "DD-MM-YYYY").add(5, 'd').dayOfYear().toString();
            var year = moment__WEBPACK_IMPORTED_MODULE_8__(this.currentDate, "DD-MM-YYYY").year().toString();
            console.log(this.period);
            this.day5Tasks = this.dayViewDateTasks(period, this.period, year);
        }
        if (day == 'day6') {
            this.period = moment__WEBPACK_IMPORTED_MODULE_8__(this.currentDate, "DD-MM-YYYY").add(6, 'd').dayOfYear().toString();
            var year = moment__WEBPACK_IMPORTED_MODULE_8__(this.currentDate, "DD-MM-YYYY").year().toString();
            console.log(this.period);
            this.day6Tasks = this.dayViewDateTasks(period, this.period, year);
        }
    };
    MapTaskComponent.prototype.setWeek = function (week) {
        var period = 'startWeek';
        if (week == 'week0') {
            console.log(week);
            this.period = String(this.week0label.week());
            this.week0Tasks = this.viewDateTasks(period, this.period);
            console.log(this.period);
        }
        if (week == 'week1') {
            this.period = String(this.week1label.week());
            this.week1Tasks = this.viewDateTasks(period, this.period);
            console.log(this.period);
        }
        if (week == 'week2') {
            this.period = String(this.week2label.week());
            this.week2Tasks = this.viewDateTasks(period, this.period);
            console.log(this.period);
        }
        if (week == 'week3') {
            this.period = String(this.week3label.week());
            this.week3Tasks = this.viewDateTasks(period, this.period);
            console.log(this.period);
        }
    };
    MapTaskComponent.prototype.setMonth = function (month) {
        var period = 'startMonth';
        if (month == 'month1') {
            console.log(month);
            this.period = String(this.month1label.month());
            this.qYear = String(this.month1label.year());
            // this.month1Tasks = this.viewDateTasks(period, this.period);
            this.month1Tasks = this.mviewDateTasks(period, this.period, this.qYear);
            console.log(this.period);
        }
        if (month == 'month2') {
            this.period = String(this.month2label.month());
            this.qYear = String(this.month2label.year());
            // this.month2Tasks = this.viewDateTasks(period, this.period);
            this.month2Tasks = this.mviewDateTasks(period, this.period, this.qYear);
            console.log(this.period);
        }
        if (month == 'month3') {
            this.period = String(this.month3label.month());
            this.qYear = String(this.month3label.year());
            // this.month3Tasks = this.viewDateTasks(period, this.period);
            this.month3Tasks = this.mviewDateTasks(period, this.period, this.qYear);
            console.log(this.period);
        }
    };
    MapTaskComponent.prototype.setQuarter = function (quarter) {
        var period = 'startQuarter';
        if (quarter == 'quarter0') {
            console.log(quarter);
            this.period = String(this.quarter0label.quarter());
            this.qYear = String(this.quarter0label.year());
            this.quarter0Tasks = this.mviewDateTasks(period, this.period, this.qYear);
            console.log(this.period);
        }
        if (quarter == 'quarter1') {
            this.period = String(this.quarter1label.quarter());
            this.qYear = String(this.quarter1label.year());
            this.quarter1Tasks = this.mviewDateTasks(period, this.period, this.qYear);
            console.log(this.period);
        }
        if (quarter == 'quarter2') {
            this.period = String(this.quarter2label.quarter());
            this.qYear = String(this.quarter2label.year());
            this.quarter2Tasks = this.viewDateTasks(period, this.period);
            console.log(this.period);
        }
        if (quarter == 'quarter3') {
            this.period = String(this.quarter3label.quarter());
            this.qYear = String(this.quarter3label.year());
            this.quarter3Tasks = this.mviewDateTasks(period, this.period, this.qYear);
            console.log(this.period);
        }
    };
    MapTaskComponent.prototype.dayViewDateTasks = function (testPeriod, checkPeriod, year) {
        // this.viewTasks = this.afs.collection('Users').doc(this.userId).collection('tasks', ref => { return ref.where(testPeriod, '==', checkPeriod) }).snapshotChanges().pipe(
        var viewTasksRef = this.afs.collection('Users').doc(this.userId);
        this.viewTasks = viewTasksRef.collection('tasks', function (ref) {
            return ref
                .where(testPeriod, '==', checkPeriod)
                .where('startYear', '==', year);
        }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        return this.viewTasks;
    };
    MapTaskComponent.prototype.viewDateTasks = function (testPeriod, checkPeriod) {
        // this.viewTasks = this.afs.collection('Users').doc(this.userId).collection('tasks', ref => { return ref.where(testPeriod, '==', checkPeriod) }).snapshotChanges().pipe(
        var viewTasksRef = this.afs.collection('Users').doc(this.userId);
        this.viewTasks = viewTasksRef.collection('tasks', function (ref) { return ref.where(testPeriod, '==', checkPeriod); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        return this.viewTasks;
    };
    MapTaskComponent.prototype.mviewDateTasks = function (testPeriod, checkPeriod, year) {
        var viewTasksRef = this.afs.collection('Users').doc(this.userId);
        this.viewTasks = viewTasksRef.collection('tasks', function (ref) { return ref
            .where(testPeriod, '==', checkPeriod)
            .where('startYear', '==', year); })
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        return this.viewTasks;
    };
    // 0000000000000000000000000000000000000000000000000000000000000000
    MapTaskComponent.prototype.OnInit = function () { };
    MapTaskComponent.prototype.ngOnInit = function () {
    };
    MapTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-task',
            template: __webpack_require__(/*! ./map-task.component.html */ "./src/app/calendar/map-task/map-task.component.html"),
            styles: [__webpack_require__(/*! ./map-task.component.css */ "./src/app/calendar/map-task/map-task.component.css")]
        }),
        __metadata("design:paramtypes", [app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], app_services_initialise_service__WEBPACK_IMPORTED_MODULE_10__["InitialiseService"], app_services_personal_service__WEBPACK_IMPORTED_MODULE_2__["PersonalService"], app_services_task_service__WEBPACK_IMPORTED_MODULE_9__["TaskService"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"], app_services_enterprise_service__WEBPACK_IMPORTED_MODULE_3__["EnterpriseService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], MapTaskComponent);
    return MapTaskComponent;
}());



/***/ }),

/***/ "./src/app/calendar/personal-info-report/personal-info-report.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/calendar/personal-info-report/personal-info-report.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL3BlcnNvbmFsLWluZm8tcmVwb3J0L3BlcnNvbmFsLWluZm8tcmVwb3J0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/calendar/personal-info-report/personal-info-report.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/calendar/personal-info-report/personal-info-report.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  personal-info-report works!\n</p>\n"

/***/ }),

/***/ "./src/app/calendar/personal-info-report/personal-info-report.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/calendar/personal-info-report/personal-info-report.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PersonalInfoReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoReportComponent", function() { return PersonalInfoReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var app_services_personal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/personal.service */ "./src/app/services/personal.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PersonalInfoReportComponent = /** @class */ (function () {
    function PersonalInfoReportComponent(afAuth, ps, afs, router) {
        this.afAuth = afAuth;
        this.ps = ps;
        this.afs = afs;
        this.router = router;
    }
    PersonalInfoReportComponent.prototype.myDataCall = function () {
        var _this = this;
        var docRef = this.afs.collection("Users").doc(this.userId).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (a) {
            var data = a.payload.data();
            var id = a.payload.id;
            return __assign({ id: id }, data);
        }));
        docRef.subscribe(function (userData) {
            console.log(userData);
            // userData.bodyMassIndex = Math.round(userData.bodyWeight / ((userData.bodyHeight * (1 / 100)) * ((userData.bodyHeight * (1 / 100)))));
            var bmi = (userData.bodyWeight / ((userData.bodyHeight * (1 / 100)) * ((userData.bodyHeight * (1 / 100)))));
            console.log(bmi.toFixed(1));
            userData.bodyMassIndex = Number(bmi.toFixed(1));
            console.log(userData.bodyMassIndex);
            _this.userData = userData;
        });
    };
    PersonalInfoReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.user.subscribe(function (user) {
            console.log(user);
            _this.userId = user.uid;
            _this.user = user;
            console.log(_this.userId);
            console.log(_this.user);
            var mer = _this.afs.doc("Users/" + _this.userId);
            console.log(mer.valueChanges());
            _this.myDataCall();
            // this.userData.name = this.user.displayName;
            // this.userData.email = this.user.email;
            // this.userData.id = this.user.uid;
            // this.userData.phoneNumber = this.user.phoneNumber;
        });
    };
    PersonalInfoReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal-info-report',
            template: __webpack_require__(/*! ./personal-info-report.component.html */ "./src/app/calendar/personal-info-report/personal-info-report.component.html"),
            styles: [__webpack_require__(/*! ./personal-info-report.component.css */ "./src/app/calendar/personal-info-report/personal-info-report.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], app_services_personal_service__WEBPACK_IMPORTED_MODULE_2__["PersonalService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PersonalInfoReportComponent);
    return PersonalInfoReportComponent;
}());



/***/ }),

/***/ "./src/app/calendar/popup/popup.component.css":
/*!****************************************************!*\
  !*** ./src/app/calendar/popup/popup.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dark-modal .modal-content {\r\n    background-color: #292b2c;\r\n    color: white;\r\n}\r\n\r\n.dark-modal .close {\r\n    color: white;\r\n}\r\n\r\n.light-blue-backdrop {\r\n    background-color: #5cb3fd;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kYXIvcG9wdXAvcG9wdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL3BvcHVwL3BvcHVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFyay1tb2RhbCAubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyYjJjO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZGFyay1tb2RhbCAuY2xvc2Uge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubGlnaHQtYmx1ZS1iYWNrZHJvcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiM2ZkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/calendar/popup/popup.component.html":
/*!*****************************************************!*\
  !*** ./src/app/calendar/popup/popup.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Modal title</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n    <!-- <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\"> -->\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>One fine body&hellip;</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\n  </div>\n</ng-template>\n\n<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openWindowCustomClass(content)\">Modal with window custom\n  class</button>\n<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openBackDropCustomClass(content)\">Modal with backdrop custom\n  class</button>\n<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openSm(content)\">Small modal</button>\n<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openLg(content)\">Large modal</button>\n<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openVerticallyCentered(content)\">Modal vertically centered</button>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/calendar/popup/popup.component.ts":
/*!***************************************************!*\
  !*** ./src/app/calendar/popup/popup.component.ts ***!
  \***************************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PopupComponent = /** @class */ (function () {
    function PopupComponent(modalService, afAuth, router, afs) {
        this.modalService = modalService;
        this.afAuth = afAuth;
        this.router = router;
        this.afs = afs;
    }
    PopupComponent.prototype.openBackDropCustomClass = function (content) {
        this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
    };
    PopupComponent.prototype.openWindowCustomClass = function (content) {
        this.modalService.open(content, { windowClass: 'dark-modal' });
    };
    PopupComponent.prototype.openSm = function (content) {
        this.modalService.open(content, { size: 'sm' });
    };
    PopupComponent.prototype.openLg = function (content) {
        this.modalService.open(content, { size: 'lg' });
    };
    PopupComponent.prototype.openVerticallyCentered = function (content) {
        this.modalService.open(content, { centered: true });
    };
    PopupComponent.prototype.dataCall = function () {
        var _this = this;
        this.myDocument = this.afs.collection('Users').doc(this.userId);
        this.userProfile = this.myDocument.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (a) {
            var data = a.payload.data();
            var id = a.payload.id;
            return __assign({ id: id }, data);
        }));
        this.userProfile.subscribe(function (userData) {
            console.log(userData);
            var myData = {
                name: _this.user.displayName,
                email: _this.user.email,
                bus_email: userData.bus_email,
                id: _this.user.uid,
                phoneNumber: _this.user.phoneNumber,
                photoURL: _this.user.photoURL,
                address: userData.address,
                nationalId: userData.nationalId,
                nationality: userData.nationality,
            };
            if (userData.address == "" || userData.address == null || userData.address == undefined) {
                userData.address = "";
            }
            else {
            }
            if (userData.phoneNumber == "" || userData.phoneNumber == null || userData.phoneNumber == undefined) {
                userData.phoneNumber = "";
            }
            else {
            }
            if (userData.bus_email == "" || userData.bus_email == null || userData.bus_email == undefined) {
                userData.bus_email = "";
            }
            else {
            }
            if (userData.nationalId == "" || userData.nationalId == null || userData.nationalId == undefined) {
                userData.nationalId = "";
            }
            else {
            }
            if (userData.nationality == "" || userData.nationality == null || userData.nationality == undefined) {
                userData.nationality = "";
            }
            else {
            }
            _this.myData = myData;
            _this.userData = userData;
        });
    };
    PopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        var d = new Date();
        var da = new Date();
        this.afAuth.user.subscribe(function (user) {
            _this.userId = user.uid;
            _this.user = user;
            // let myData = {
            //   name: this.user.displayName,
            //   email: this.user.email,
            //   id: this.user.uid,
            //   phoneNumber: this.user.phoneNumber,
            //   photoURL: this.user.photoURL
            // }
            // this.myData = myData;
            _this.dataCall();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("content"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], PopupComponent.prototype, "modalContent", void 0);
    PopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popup',
            template: __webpack_require__(/*! ./popup.component.html */ "./src/app/calendar/popup/popup.component.html"),
            styles: [__webpack_require__(/*! ./popup.component.css */ "./src/app/calendar/popup/popup.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "./src/app/calendar/r-activity-log/r-activity-log.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/calendar/r-activity-log/r-activity-log.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    font-family: arial, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n\r\ninput[type=\"date\"] {\r\n  color:blue;\r\n  font-weight:bold;\r\n  font-size:14px;\r\n  font-family:sans-serif;\r\n  width:140px;\r\n}\r\n\r\ntd, td0, td1, td2, td3, td4, th {\r\n    border: 1px solid #070707;\r\n    padding: 8px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kYXIvci1hY3Rpdml0eS1sb2cvci1hY3Rpdml0eS1sb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsV0FBVztFQUNiOztBQUVGO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY2FsZW5kYXIvci1hY3Rpdml0eS1sb2cvci1hY3Rpdml0eS1sb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XHJcbiAgY29sb3I6Ymx1ZTtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG4gIGZvbnQtc2l6ZToxNHB4O1xyXG4gIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XHJcbiAgd2lkdGg6MTQwcHg7XHJcbn1cclxuXHJcbnRkLCB0ZDAsIHRkMSwgdGQyLCB0ZDMsIHRkNCwgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzA3MDcwNztcclxuICAgIHBhZGRpbmc6IDhweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/calendar/r-activity-log/r-activity-log.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/calendar/r-activity-log/r-activity-log.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n\n    <div style=\"text-align:left;margin-left: 0px\">\n        <!-- <img alt=\"Southland Logo\" src=\"/src/app/southland-logo.jpg\"> -->\n        <img alt=\"Colours Logo\" width=\"100\" src=\"../../assets/Colourslogo.PNG\">\n    </div>\n    \n    <!-- Table heading -->\n    <h1 id=\"currUser\"></h1>\n    \n    <h3>Time Sheet Report for the period from <span>\n            <!-- placeholder will not work, so stuck with dd----yyyyy -->\n            <input type=\"date\" id=\"startdateP2\">\n        </span> to <span>\n            <input type=\"date\" id=\"enddateP2\">\n            <button (click)=\"rService.ractivitylog()\">Generate report for selected period</button>\n        </span></h3>\n    \n    <!-- button onclick=\"javascript:alert('kkkkk')\">Try it</button> -->\n    <!-- button (click)=\"rService.clearTable()\">Clear table</button> -->\n    <!-- Table rows and headings only -->\n    <table id=\"TbIdP2\">\n        <!-- headings -->\n        <tr>\n            <th align=\"left\">Action Item</th>\n            <th align=\"left\">Task Name</th>\n            <th align=\"left\">Start Date</th>\n            <th align=\"left\">End Date</th>\n            <th>Hours Spent</th>\n        </tr>\n    </table>\n    \n</div>"

/***/ }),

/***/ "./src/app/calendar/r-activity-log/r-activity-log.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/calendar/r-activity-log/r-activity-log.component.ts ***!
  \*********************************************************************/
/*! exports provided: RActivityLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RActivityLogComponent", function() { return RActivityLogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/reports.service */ "./src/app/services/reports.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { title } from 'process';

var RActivityLogComponent = /** @class */ (function () {
    // 05-May-2019: Use constructor for declaring services. Not a good idea to call functions here
    // although that can be done inside {}. (see Heroes tutorial on injectable services)
    function RActivityLogComponent(rService) {
        this.rService = rService;
        // 05-May-2019. All code for reports now done and called from reports service
        this.title = 'Activity log';
    }
    RActivityLogComponent.prototype.ngOnInit = function () {
        // 06-May-2019. Display User name even before user has chosen to generate report
        // by picking dates
        this.rService.getData();
        this.rService.User.forEach(function (doc) {
            //06-May-2019. doc.name was retrunign value but causing compile error, so ['name'] used 
            document.getElementById("currUser").innerText = doc['name'];
        });
        var strM = Date().substring(4, 7);
        var date = String(Date().substring(11, 15)) +
            '-' + String(this.rService.numMonth(strM)) +
            '-' + String(Date().substring(8, 10));
        //06-05-2019. Had to use value instead of Value for this to work
        //need to cast element type to prevent compile error
        var Inp1 = document.getElementById("startdateP2");
        Inp1.value = date;
        var Inp2 = document.getElementById("enddateP2");
        Inp2.value = date;
    };
    RActivityLogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-r-activity-log',
            template: __webpack_require__(/*! ./r-activity-log.component.html */ "./src/app/calendar/r-activity-log/r-activity-log.component.html"),
            styles: [__webpack_require__(/*! ./r-activity-log.component.css */ "./src/app/calendar/r-activity-log/r-activity-log.component.css")]
        }),
        __metadata("design:paramtypes", [_services_reports_service__WEBPACK_IMPORTED_MODULE_1__["ReportsService"]])
    ], RActivityLogComponent);
    return RActivityLogComponent;
}()); // export class closing bracket



/***/ }),

/***/ "./src/app/calendar/r-os-tasks/r-os-tasks.component.css":
/*!**************************************************************!*\
  !*** ./src/app/calendar/r-os-tasks/r-os-tasks.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    font-family: arial, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n\r\ninput[type=\"date\"] {\r\n  color:blue;\r\n  font-weight:bold;\r\n  font-size:14px;\r\n  font-family:sans-serif;\r\n  width:140px;\r\n}\r\n\r\ntd, td0, td1, td2, td3, td4, th {\r\n    border: 1px solid #070707;\r\n    padding: 8px;\r\n}\r\n\r\nh1,h2,h3,h4 {\r\n  font-family: Arial;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kYXIvci1vcy10YXNrcy9yLW9zLXRhc2tzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjs7QUFFRjtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL3Itb3MtdGFza3Mvci1vcy10YXNrcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbmlucHV0W3R5cGU9XCJkYXRlXCJdIHtcclxuICBjb2xvcjpibHVlO1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgZm9udC1zaXplOjE0cHg7XHJcbiAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxuICB3aWR0aDoxNDBweDtcclxufVxyXG5cclxudGQsIHRkMCwgdGQxLCB0ZDIsIHRkMywgdGQ0LCB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDcwNzA3O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG5oMSxoMixoMyxoNCB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/calendar/r-os-tasks/r-os-tasks.component.html":
/*!***************************************************************!*\
  !*** ./src/app/calendar/r-os-tasks/r-os-tasks.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div style=\"text-align:left;margin-left: 0px\">\n        <img alt=\"Colours Logo\" width=\"100\" src=\"../../assets/Colourslogo.png\">\n    </div>\n    \n    <!-- <h2 id=\"orgP\">Personal Reports</h2> -->\n\n    <!-- Table heading -->\n    <h1>{{ userName }}</h1>\n\n    <h3>Schedule of Outstanding Tasks as at <span>\n            <!-- placeholder will not work, so stuck with dd----yyyyy -->\n            <input type=\"date\" id=\"startdateP\">\n    <button (click)=\"rService.rostasks()\">View Oustanding Tasks for selected date</button>\n    </span></h3>\n    <!-- Table rows and headings only -->\n    <table id=\"TbIdP\">\n        <!-- headings -->\n        <tr>\n            <th align=\"left\">Task</th>\n            <th align=\"left\">Planned Finish Date</th>\n            <th align=\"left\">Classification</th>\n        </tr>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/calendar/r-os-tasks/r-os-tasks.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/calendar/r-os-tasks/r-os-tasks.component.ts ***!
  \*************************************************************/
/*! exports provided: ROsTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROsTasksComponent", function() { return ROsTasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/reports.service */ "./src/app/services/reports.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ROsTasksComponent = /** @class */ (function () {
    function ROsTasksComponent(rService) {
        this.rService = rService;
    }
    ROsTasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        // 06-May-2019. Display User name even before user has chosen to generate report
        this.rService.getData();
        this.rService.User.forEach(function (doc) {
            //06-May-2019. Use doc['name'] instead of doc.name to prevent compile errors
            //15-May-2019. User angular binding instead
            _this.userName = doc['name'];
        });
        var strM = Date().substring(4, 7);
        var date = String(Date().substring(11, 15)) +
            '-' + String(this.rService.numMonth(strM)) +
            '-' + String(Date().substring(8, 10));
        //06-05-2019. Had to use value instead of Value for this to work
        //need to cast element type to prevent compile error
        var Inp1 = document.getElementById("startdateP");
        Inp1.value = date;
    };
    ROsTasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-r-os-tasks',
            template: __webpack_require__(/*! ./r-os-tasks.component.html */ "./src/app/calendar/r-os-tasks/r-os-tasks.component.html"),
            styles: [__webpack_require__(/*! ./r-os-tasks.component.css */ "./src/app/calendar/r-os-tasks/r-os-tasks.component.css")]
        }),
        __metadata("design:paramtypes", [_services_reports_service__WEBPACK_IMPORTED_MODULE_1__["ReportsService"]])
    ], ROsTasksComponent);
    return ROsTasksComponent;
}());



/***/ }),

/***/ "./src/app/calendar/r-time-spent/r-time-spent.component.css":
/*!******************************************************************!*\
  !*** ./src/app/calendar/r-time-spent/r-time-spent.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    font-family: arial, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n\r\ninput[type=\"date\"] {\r\n    color:blue;\r\n    font-weight:bold;\r\n    font-size:14px;\r\n    font-family:sans-serif;\r\n    width:140px;\r\n}\r\n\r\ntd, td0, td1, td2, td3, td4, th {\r\n    border: 1px solid #070707;\r\n    padding: 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kYXIvci10aW1lLXNwZW50L3ItdGltZS1zcGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7O0FBRUY7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jYWxlbmRhci9yLXRpbWUtc3BlbnQvci10aW1lLXNwZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xyXG4gICAgY29sb3I6Ymx1ZTtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XHJcbiAgICB3aWR0aDoxNDBweDtcclxufVxyXG5cclxudGQsIHRkMCwgdGQxLCB0ZDIsIHRkMywgdGQ0LCB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDcwNzA3O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/calendar/r-time-spent/r-time-spent.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/calendar/r-time-spent/r-time-spent.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n\n    <div style=\"text-align:left\">\n        <img alt=\"Southland Logo\" src=\"../../../assets/img/Colourslogo.PNG\">\n    </div>\n    \n    <!-- Table heading -->\n    <h1 id=\"currUser\"></h1>\n\n    <h3>Total Time spent on an Activity for the period from <span>\n            <!-- placeholder will not work, so stuck with dd----yyyyy -->\n            <input type=\"date\" id=\"startdateP1\">\n        </span> to <span>\n            <input type=\"date\" id=\"enddateP1\">\n    <!-- <button (click)=\"rService.rtimespentshow()\">Generate report for selected period</button> -->\n    <button (click)=\"rService.rtimespent()\">Generate report for selected period</button>\n    </span></h3>\n    <!-- button onclick=\"javascript:alert('kkkkk')\">Try it</button> -->\n    <!-- button (click)=\"rService.clearTable()\">Clear table</button> -->\n    <!-- Table rows and headings only -->\n    <table id=\"TbIdP1\">\n        <!-- headings -->\n        <tr>\n            <th align=\"left\">Activity</th>\n            <th align=\"left\">Task Name</th>\n            <th>Hours Spent</th>\n        </tr>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/calendar/r-time-spent/r-time-spent.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/calendar/r-time-spent/r-time-spent.component.ts ***!
  \*****************************************************************/
/*! exports provided: RTimeSpentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTimeSpentComponent", function() { return RTimeSpentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/reports.service */ "./src/app/services/reports.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RTimeSpentComponent = /** @class */ (function () {
    //05-May-2019: Use constructor for declaring services. Not a good idea to call functions here
    // although that can be done inside {}. (see Heroes tutorial on injectable services)
    function RTimeSpentComponent(rService) {
        this.rService = rService;
        // 05-May-2019. All code for reports now done and called from reports service
        this.title = 'Time spent on activities';
    }
    RTimeSpentComponent.prototype.ngOnInit = function () {
        // 06-May-2019. Display User name even before user has chosen to generate report
        // by picking dates
        this.rService.getData();
        this.rService.User.forEach(function (doc) {
            //06-May-2019. Use doc['name'] instead of doc.name to prevent compile erros
            document.getElementById("currUser").innerText = doc['name'];
        });
        var strM = Date().substring(4, 7);
        var date = String(Date().substring(11, 15)) +
            '-' + String(this.rService.numMonth(strM)) +
            '-' + String(Date().substring(8, 10));
        //06-05-2019. Had to use value instead of Value for this to work
        // need to cast element type to prevent compile error
        var Inp1 = document.getElementById("startdateP1");
        Inp1.value = date;
        var Inp2 = document.getElementById("enddateP1");
        Inp2.value = date;
    };
    RTimeSpentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-r-time-spent',
            template: __webpack_require__(/*! ./r-time-spent.component.html */ "./src/app/calendar/r-time-spent/r-time-spent.component.html"),
            styles: [__webpack_require__(/*! ./r-time-spent.component.css */ "./src/app/calendar/r-time-spent/r-time-spent.component.css")]
        }),
        __metadata("design:paramtypes", [_services_reports_service__WEBPACK_IMPORTED_MODULE_1__["ReportsService"]])
    ], RTimeSpentComponent);
    return RTimeSpentComponent;
}());



/***/ }),

/***/ "./src/app/calendar/rdashboard/rdashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/calendar/rdashboard/rdashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL3JkYXNoYm9hcmQvcmRhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/calendar/rdashboard/rdashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/calendar/rdashboard/rdashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n\n  <h2>PERSONAL REPORTS</h2>\n  <nav>\n      <a routerLink=\"/timeSpent-report\">Total time spent on an activity in a period</a>\n  </nav>\n  <nav>\n    <a routerLink=\"/activity-reportLog\">Time sheet report in a period</a>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/calendar/rdashboard/rdashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/calendar/rdashboard/rdashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: RdashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RdashboardComponent", function() { return RdashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RdashboardComponent = /** @class */ (function () {
    function RdashboardComponent() {
    }
    RdashboardComponent.prototype.ngOnInit = function () {
    };
    RdashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rdashboard',
            template: __webpack_require__(/*! ./rdashboard.component.html */ "./src/app/calendar/rdashboard/rdashboard.component.html"),
            styles: [__webpack_require__(/*! ./rdashboard.component.css */ "./src/app/calendar/rdashboard/rdashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RdashboardComponent);
    return RdashboardComponent;
}());



/***/ }),

/***/ "./src/app/calendar/timesheet/timesheet.component.css":
/*!************************************************************!*\
  !*** ./src/app/calendar/timesheet/timesheet.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL3RpbWVzaGVldC90aW1lc2hlZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/calendar/timesheet/timesheet.component.html":
/*!*************************************************************!*\
  !*** ./src/app/calendar/timesheet/timesheet.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\" style=\"margin-left: -3em;margin-right: 3em\">\n  <div class=\"card-plain\">\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"card col-md-12\">\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <p class=\"na-p\">Your ToDo List Diary</p>\n            </div>\n            <div class=\"col-md-4 text-left\">\n                <p class=\"clrs-h4-font text-center\"><span id=\"thrs\">{{ nHrs }} </span>: <span id=\"tmins\">{{ nMin }} </span>: <span>{{ nSecs }}</span></p>\n            </div>\n            <div class=\"col-md-4 text-right\">Today`s Overview</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"actNumber != 0\">\n        <div class=\"col-md-5\">\n          <p class=\"category text-left\" style=\"margin-bottom:-1em; padding-left: 25px;\">\n            Click on the task to Enter the Actuals\n          </p><br>\n          <div id=\"accordionActionData\" role=\"tablist\" aria-multiselectable=\"true\" class=\"card-collapse\">\n            <ol style=\"padding-left: 0px;\">\n              <li class=\"\" style=\"color:steelblue\" *ngFor=\"let item of myDiaryItems\">\n                <div class=\"card card-plain\" *ngIf=\"item.champion.id == userId; else showNonChampField\">\n                  <div class=\"card-header\" role=\"tab\" id=\"heading2\">\n                    <a class=\"collapsed row col-md-12\" data-toggle=\"collapse\" href=\"#{{ item.id }}\" (click)=\"selectAction(item)\" aria-expanded=\"false\" aria-current=\"false\">\n                      <span class=\"label text-info card-category\" style=\"width: 20em;\">{{ item.name }}\n                        <span style=\"width: 10em;\" class=\"pull-right\"><small *ngIf=\"item.targetQty\">Target\n                            <span class=\"label text-warning\">{{ item.targetQty }} {{ item.unit }}</span></small>\n                          <i class=\"nc-icon nc-minimal-down\"></i>\n                        </span>\n                      </span>\n                    </a>\n                  </div>\n                  <div id=\"{{ item.id }}\" class=\"collapse\" data-parent=\"#accordionActionData\" role=\"tabpanel\" aria-labelledby=\"heading2\">\n                    <div class=\"card-body\">\n                      <div class=\"row\">\n                        <div class=\"col-sm-9\">\n                          <p class=\"category text-left\" style=\"margin-bottom: 0px;\">Enter Actual Measurements </p>\n                          <div class=\"form-group\">\n                            <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                              <input type=\"number\" class=\"form-control panel-boader\" [(ngModel)]=\"dmData.qty\" style=\" padding-left: 10px; padding-right: 10px; height:2em\"\n                                placeholder=\"Enter Data\"/>\n                              <div class=\"input-group-postpend\">\n                                <span class=\"input-group-text\" style=\" padding-left: 10px; padding-right: 10px; height:28px\">\n                                  <small>{{ item.unit }}</small>\n                                </span>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-sm-2 card-category\">\n                          <button class=\"btn-link btn-round primary\" (click)=\"saveActual(dmData)\" style=\"margin-top: 11px\">\n                            <small> Save </small>\n                          </button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <ng-template #showNonChampField>\n                  <div class=\"row\">\n                    <div class=\"col-md-9 text-info\">\n                      {{ item.name }}\n                    </div>\n                    <div class=\"col-md-3\" style=\"padding-top: 5px;\">\n                      <input class=\"card-category col-form-label\" type=\"checkbox\" (change)=\"updateAction($event, item)\">\n                    </div>\n                  </div>\n                </ng-template>\n              </li>\n            </ol>\n          </div>\n          <div class=\"col-md-12 card-footer\" style=\"padding-right: 0px; padding-left: 0px;\">\n            <code> add new task activity</code>\n            <div class=\"form-group\">\n              <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                <input type=\"text\" class=\"form-control panel-boader\" [(ngModel)]=\"item.name\" style=\" padding-left: 10px; padding-right: 10px; height:2em\"\n                  placeholder=\"Enter current unplanned activity\" /><!-- clrs-cell  -->\n                <div class=\"input-group-postpend\">\n                  <span class=\"input-group-text\" style=\" padding-left: 10px; padding-right: 10px; height:28px\">\n                    <small>\n                      <button class=\"\" (click)=\"unPlannedTAsk(item)\" title=\"Add item\" style=\"padding-top: 0px; padding-bottom: 0px; cursor: pointer;\">\n                        Add\n                      </button>\n                    </small>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-7\">\n          <ngx-charts-pie-chart *ngIf = \"chartdata\"\n            [view]=\"view\"\n            [scheme]=\"colorScheme\"\n            [results]=\"workItemData\"\n            [legend]=\"showLegend\"\n            [explodeSlices]=\"explodeSlices\"\n            [labels]=\"showLabels\"\n            [doughnut]=\"doughnut\"\n            (select)=\"onSelect($event)\">\n          </ngx-charts-pie-chart><!-- [labels]=\"showLabels\" -->\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-10 ml-auto mr-auto\" *ngIf=\"actNumber == 0\">\n          You have nothing in your Diary Today <br>\n          <p class=\"category\">To add Goto the Implementation Page on either Colours Personal, your enterprise in Colours Enterprises or existing Project Colours Projects dropdown</p>\n        </div>\n        <div class=\"col-md-10 ml-auto mr-auto\" *ngIf=\"actNumber == 0\">\n          <form>\n            <code> add new task activity</code>\n            <div class=\"form-group\">\n              <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                <input type=\"text\" class=\"form-control panel-boader\" [(ngModel)]=\"item.name\" name=\"unplannedWork\" style=\" padding-left: 10px; padding-right: 10px; height:2em\"\n                  placeholder=\"Enter current unplanned activity\" />\n                <div class=\"input-group-postpend\">\n                  <span class=\"input-group-text\" style=\" padding-left: 10px; padding-right: 10px; height:28px\">\n                    <small>\n                      <button class=\"\" (click)=\"unPlannedTAsk(item)\" title=\"Add item\" style=\"padding-top: 0px; padding-bottom: 0px; cursor: pointer;\">\n                        Add\n                      </button>\n                    </small>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n      <!-- <div class=\"row\">\n        <div class=\"card-footer col-md-10\">\n          <code> add new activity</code>\n        </div>\n      </div> -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/calendar/timesheet/timesheet.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/calendar/timesheet/timesheet.component.ts ***!
  \***********************************************************/
/*! exports provided: TimesheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetComponent", function() { return TimesheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_services_initialise_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/initialise.service */ "./src/app/services/initialise.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var TimesheetComponent = /** @class */ (function () {
    function TimesheetComponent(afAuth, is, router, authService, afs) {
        this.afAuth = afAuth;
        this.is = is;
        this.router = router;
        this.authService = authService;
        this.afs = afs;
        this.updatedActionItems = [];
        this.msum = [];
        this.popData = false;
        this.showActions = false;
        this.chartdata = false;
        this.workItemCount = [];
        this.workItemData = [];
        //Chart
        this.view = [500, 300];
        this.showLegend = true;
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        this.dmData = { updateTime: "", qty: 0 };
        this.selectedAction = is.getActionItem();
        this.actualData = { name: "", time: "", actionId: "", id: "", actuals: null };
        this.actionData = { name: "", time: "", actionId: "", id: "", actuals: null };
        this.item = is.getActionItem();
        this.timedstamp = 0;
    }
    TimesheetComponent.prototype.selectAction = function (item) {
        this.selectedAction = item;
        this.selectedTest = this.selectedAction;
        console.log(this.selectedAction);
    };
    TimesheetComponent.prototype.checkTest = function (actual) {
        var item = this.selectedAction;
        var champId = this.selectedAction.champion.id;
        var itamName;
        var dataId = item.id + moment__WEBPACK_IMPORTED_MODULE_4__().format('DDDDYYYY');
        var docRef = this.afs.collection('Users').doc(champId).collection('actionItems').doc(item.id)
            .collection('actionActuals').doc(dataId).update({})
            .then(function () {
            // update successful (document exists)
        })
            .catch(function (error) {
            // console.log('Error updating user', error); // (document does not exists)
            // this.afs.doc(`users/${result.uid}`)
            // .set({ data });
        });
    };
    TimesheetComponent.prototype.saveActual = function (actual) {
        var _this = this;
        console.log(actual.qty);
        console.log(moment__WEBPACK_IMPORTED_MODULE_4__().toString());
        console.log(moment__WEBPACK_IMPORTED_MODULE_4__().format('DDDD'));
        console.log(moment__WEBPACK_IMPORTED_MODULE_4__().format('TTTT'));
        actual.updateTime = moment__WEBPACK_IMPORTED_MODULE_4__().toString();
        console.log(actual);
        this.dmData = actual;
        console.log(this.selectedAction);
        console.log(this.dmData);
        var value;
        var classId;
        var champId = this.selectedAction.champion.id;
        var cleaningTime = this.aclear();
        // let notify = this.showNotification('Task', 'top', 'right');
        var item = this.selectedAction;
        this.actionData.name = item.name;
        this.actionData.actionId = item.id;
        this.actionData.time = new Date().toISOString();
        console.log(item);
        var timesheetDocId = String(moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).format('DD-MM-YYYY')); //dd/mm/yyyy
        console.log(timesheetDocId);
        // let timesheetDocId = String(moment(new Date()));
        var timesheetworktime = String(moment__WEBPACK_IMPORTED_MODULE_4__(new Date().getTime()));
        var work = {
            WorkingTime: moment__WEBPACK_IMPORTED_MODULE_4__().toString(),
            name: item.name,
            id: item.id,
        };
        var dataId = item.id + moment__WEBPACK_IMPORTED_MODULE_4__().format('DDDDYYYY');
        console.log(dataId);
        this.actionData.actuals = [actual];
        console.log(this.actionData.actuals.length);
        if (item.companyId) {
            console.log('Testing CompanyId passed');
            var allMyActionsRef_1 = this.afs.collection('Enterprises').doc(item.companyId).collection('actionItems').doc(item.id)
                .collection('actionActuals').doc(dataId);
            var allWeekActionsRef_1 = this.afs.collection('Enterprises').doc(item.companyId).collection('WeeklyActions').doc(item.id)
                .collection('actionActuals').doc(dataId);
            var myTaskActionsRef_1 = this.afs.collection('Enterprises').doc(item.companyId).collection('tasks').doc(item.taskId)
                .collection('actionItems').doc(item.id).collection('actionActuals').doc(dataId);
            var champProjectCompWeeklyRef_1 = this.afs.collection('Enterprises').doc(item.companyId)
                .collection('Participants').doc(this.userId).collection('WeeklyActions').doc(item.id).collection('actionActuals').doc(dataId);
            var champTimeSheetRef_1 = this.afs.collection('Enterprises').doc(item.companyId)
                .collection('Participants').doc(this.userId).collection('TimeSheets').doc(timesheetDocId).collection('actionItems').doc(item.id);
            champTimeSheetRef_1.update({
                actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(actual)
            }).then(function () {
                console.log('update successful (document exists)');
            }).catch(function (error) {
                champTimeSheetRef_1.set(_this.actionData);
            });
            allMyActionsRef_1.update({
                actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(actual)
            }).then(function () {
                console.log('update successful (document exists)');
            }).catch(function (error) {
                allMyActionsRef_1.set(_this.actionData);
            });
            allWeekActionsRef_1.update({
                actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(actual)
            }).then(function () {
                console.log('update successful (document exists)');
            }).catch(function (error) {
                allWeekActionsRef_1.set(_this.actionData);
            });
            myTaskActionsRef_1.update({
                actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(actual)
            }).then(function () {
                console.log('update successful (document exists)');
            }).catch(function (error) {
                myTaskActionsRef_1.set(_this.actionData);
            });
            champProjectCompWeeklyRef_1.update({
                actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(actual)
            }).then(function () {
                console.log('update successful (document exists)');
            }).catch(function (error) {
                champProjectCompWeeklyRef_1.set(_this.actionData);
            });
            if (item.projectId != "") {
                var weeklyRef_1 = this.afs.collection('Enterprises').doc(item.companyId).collection('projects').doc(item.projectId)
                    .collection('WeeklyActions').doc(item.id).collection('actionActuals').doc(dataId);
                var prjectWeeklyRef_1 = this.afs.collection('Projects').doc(item.projectId).collection('WeeklyActions').doc(item.id)
                    .collection('actionActuals').doc(dataId);
                var prjectCompWeeklyRef_1 = this.afs.collection('Projects').doc(item.projectId).collection('enterprises').doc(item.companyId)
                    .collection('WeeklyActions').doc(item.id).collection('actionActuals').doc(dataId);
                var champProjectCompWeeklyRef_2 = this.afs.collection('Projects').doc(item.projectId).collection('enterprises').doc(item.companyId)
                    .collection('labour').doc(this.userId).collection('WeeklyActions').doc(item.id).collection('actionActuals').doc(dataId);
                var champTimeSheetRef_2 = this.afs.collection('Projects').doc(item.projectId).collection('enterprises').doc(item.companyId)
                    .collection('labour').doc(this.userId).collection('TimeSheets').doc(timesheetDocId).collection('actionItems').doc(item.id);
                weeklyRef_1.update({
                    actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(actual)
                }).then(function () {
                    console.log('Update successful, document exists');
                    // update successful (document exists)
                }).catch(function (error) {
                    console.log('Error updating user, document does not exists', error);
                    // (document does not exists)
                    weeklyRef_1.set(_this.actionData);
                });
                champTimeSheetRef_2.update({
                    actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(actual)
                }).then(function () {
                    console.log('Update successful, document exists');
                    // update successful (document exists)
                }).catch(function (error) {
                    console.log('Error updating user, document does not exists', error);
                    // .set({ data });
                    champTimeSheetRef_2.set(_this.actionData);
                });
                prjectWeeklyRef_1.update({
                    actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(actual)
                }).then(function () {
                    console.log('Update successful, document exists');
                    // update successful (document exists)
                }).catch(function (error) {
                    console.log('Error updating user, document does not exists', error);
                    // .set({ data });
                    prjectWeeklyRef_1.set(_this.actionData);
                });
                prjectCompWeeklyRef_1.update({
                    actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(actual)
                }).then(function () {
                    console.log('Update successful, document exists');
                    // update successful (document exists)
                }).catch(function (error) {
                    console.log('Error updating user, document does not exists', error);
                    // .set({ data });
                    prjectCompWeeklyRef_1.set(_this.actionData);
                });
                champProjectCompWeeklyRef_2.update({
                    actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(actual)
                }).then(function () {
                    console.log('Update successful, document exists');
                    // update successful (document exists)
                }).catch(function (error) {
                    console.log('Error updating user, document does not exists', error);
                    // .set({ data });
                    champProjectCompWeeklyRef_2.set(_this.actionData);
                });
            }
        }
        ;
        var championTimeSheetRef = this.afs.collection('Users').doc(champId).collection('actionTimeSheets').doc(item.id);
        var championTimeSheetRef2 = this.afs.collection('Users').doc(champId).collection('TimeSheets').doc(timesheetDocId).collection('actionItems').doc(item.id);
        if (item.taskId != '') {
            var championRef2 = this.afs.collection('Users').doc(champId).collection('tasks').doc(item.taskId)
                .collection('actionItems').doc(item.id).collection('actionActuals').doc(dataId);
            championRef2.set(this.actionData);
            // championRef2.collection('actuals').add(actual);
        }
        var weeklyRef = this.afs.collection('Users').doc(champId).collection('WeeklyActions').doc(item.id)
            .collection('actionActuals').doc(dataId);
        var allMyActionsRef = this.afs.collection('Users').doc(champId).collection('actionItems').doc(item.id)
            .collection('actionActuals').doc(dataId);
        championTimeSheetRef.set(item);
        championTimeSheetRef2.set(item);
        championTimeSheetRef.collection('workTime').doc(timesheetworktime).set(work);
        championTimeSheetRef.collection('actionActuals').doc(timesheetworktime).set(work);
        championTimeSheetRef2.collection('workTime').doc(timesheetworktime).set(work);
        championTimeSheetRef2.collection('actionActuals').doc(timesheetworktime).set(work);
        weeklyRef.update({
            actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(actual)
        }).then(function () {
            console.log('Update successful, document exists');
            // update successful (document exists)
        }).catch(function (error) {
            console.log('Error updating user, document does not exists', error);
            // .set({ data });
            weeklyRef.set(_this.actionData);
        });
        allMyActionsRef.update({
            actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(actual)
        }).then(function () {
            console.log('Update successful, document exists');
            // update successful (document exists)
        }).catch(function (error) {
            console.log('Error updating user, document does not exists', error);
            // .set({ data });
            allMyActionsRef.set(_this.actionData);
        });
        if (item.companyId != "") {
            var championRef_1 = this.afs.collection('Users').doc(champId).collection('myenterprises').doc(item.companyId)
                .collection('WeeklyActions').doc(item.id).collection('actionActuals').doc(dataId);
            // championRef.collection('actuals').add(actual);
            championRef_1.update({
                actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(actual)
            }).then(function () {
                console.log('Update successful, document exists');
                cleaningTime;
                // notify;
                // update successful (document exists)
            }).catch(function (error) {
                console.log('Error updating user, document does not exists', error);
                // .set({ data });
                championRef_1.set(_this.actionData).then(function (ref) {
                    cleaningTime;
                    // notify;
                });
            });
        }
        else {
            cleaningTime;
            // notify;
        }
    };
    TimesheetComponent.prototype.updateAction = function (e, workAction) {
        var _this = this;
        if (e.target.checked) {
            console.log("ActionItem" + " " + workAction.name + " " + " updated");
            console.log(moment__WEBPACK_IMPORTED_MODULE_4__().toString());
            console.log(moment__WEBPACK_IMPORTED_MODULE_4__().format('DDDD'));
            console.log(moment__WEBPACK_IMPORTED_MODULE_4__().format('TTTT'));
            workAction.UpdatedOn = moment__WEBPACK_IMPORTED_MODULE_4__().toString();
            console.log(workAction);
            var champId = this.userId;
            var cleaningTime_1 = this.aclear();
            var notify_1 = this.showNotification('Task', 'top', 'right');
            var item_1 = workAction;
            console.log(item_1);
            var dataId = item_1.id + moment__WEBPACK_IMPORTED_MODULE_4__().format('dd');
            console.log(dataId);
            var timesheetDocId = String(moment__WEBPACK_IMPORTED_MODULE_4__(new Date()));
            var timesheetworktime = String(moment__WEBPACK_IMPORTED_MODULE_4__(new Date().getTime()));
            var work = {
                WorkingTime: moment__WEBPACK_IMPORTED_MODULE_4__().toString(),
                name: item_1.name,
                id: item_1.id,
            };
            var championTimeSheetRef = this.afs.collection('Users').doc(champId).collection('actionTimeSheets').doc(item_1.id);
            var championTimeSheetRef2 = this.afs.collection('Users').doc(champId).collection('TimeSheets').doc(timesheetDocId).collection('actionItems').doc(item_1.id);
            var championRef2 = this.afs.collection('Users').doc(champId).collection('tasks').doc(item_1.taskId).collection('actionItems').doc(item_1.id);
            var weeklyRef = this.afs.collection('Users').doc(champId).collection('WeeklyActions').doc(item_1.id);
            var allMyActionsRef = this.afs.collection('Users').doc(champId).collection('actionItems').doc(item_1.id);
            championRef2.update({ 'UpdatedOn': workAction.UpdatedOn });
            weeklyRef.update({ 'UpdatedOn': workAction.UpdatedOn });
            allMyActionsRef.update({ 'UpdatedOn': workAction.UpdatedOn });
            championTimeSheetRef.set(item_1);
            championTimeSheetRef2.set(item_1);
            championTimeSheetRef.collection('workTime').doc(timesheetworktime).set(work);
            championTimeSheetRef.collection('actionActuals').doc(timesheetworktime).set(work);
            championTimeSheetRef2.collection('workTime').doc(timesheetworktime).set(work);
            championTimeSheetRef2.collection('actionActuals').doc(timesheetworktime).set(work);
            if (item_1.companyId != "") {
                var championRef_2 = this.afs.collection('Users').doc(champId).collection('enterprises').doc(item_1.companyId);
                championRef_2.collection('WeeklyActions').doc(item_1.id).update({ 'UpdatedOn': workAction.UpdatedOn }).then(function (ref) {
                    championRef_2.collection('TimeSheets').doc(item_1.id);
                    cleaningTime_1;
                    notify_1;
                });
                if (item_1.projectId != "") {
                    var cmpProjectDoc = this.afs.collection('Projects').doc(item_1.projectId).collection('enterprises').doc(item_1.companyId).collection('labour').doc(champId).collection('WeeklyActions').doc(item_1.id);
                    var weeklyRef_2 = this.afs.collection('Enterprises').doc(item_1.companyId).collection('projects').doc(item_1.projectId).collection('labour').doc(champId).collection('WeeklyActions').doc(item_1.id);
                    var champTimeSheetRef_3 = this.afs.collection('Projects').doc(item_1.projectId).collection('enterprises').doc(item_1.companyId)
                        .collection('labour').doc(this.userId).collection('TimeSheets').doc(timesheetDocId).collection('actionItems').doc(item_1.id);
                    champTimeSheetRef_3.update({
                        actuals: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(work)
                    }).then(function () {
                        console.log('Update successful, document exists');
                        // update successful (document exists)
                    }).catch(function (error) {
                        console.log('Error updating user, document does not exists', error);
                        // .set({ data });
                        champTimeSheetRef_3.set(_this.actionData);
                    });
                    cmpProjectDoc.update({ 'UpdatedOn': workAction.UpdatedOn });
                    weeklyRef_2.update({ 'UpdatedOn': workAction.UpdatedOn });
                }
            }
        }
        else {
        }
    };
    TimesheetComponent.prototype.unPlannedTAsk = function (unplannedTask) {
        var champId = this.userId;
        var selectedWork = true;
        console.log(unplannedTask);
        unplannedTask.selectedWork = selectedWork;
        // unplannedTask.start = String(this.nHrs + this.nMin);
        unplannedTask.startDate = moment__WEBPACK_IMPORTED_MODULE_4__(new Date(), 'MM-DD-YYYY').format('L');
        unplannedTask.endDate = moment__WEBPACK_IMPORTED_MODULE_4__(new Date(), 'MM-DD-YYYY').format('L');
        unplannedTask.startDay = moment__WEBPACK_IMPORTED_MODULE_4__(new Date(), 'MM-DD-YYYY').format('ddd').toString();
        unplannedTask.endDay = moment__WEBPACK_IMPORTED_MODULE_4__(new Date(), 'MM-DD-YYYY').format('ddd').toString();
        unplannedTask.start = "";
        unplannedTask.end = "";
        unplannedTask.type = "unPlanned";
        unplannedTask.by = this.myData.name;
        unplannedTask.byId = champId;
        unplannedTask.champion = this.myData;
        unplannedTask.createdOn = new Date().toString();
        var weeklyRef = this.afs.collection('Users').doc(champId).collection('WeeklyActions');
        var allMyActionsRef = this.afs.collection('Users').doc(champId).collection('actionItems');
        weeklyRef.add(unplannedTask).then(function (Ref) {
            var newActionId = Ref.id;
            console.log(Ref);
            weeklyRef.doc(newActionId).update({ 'id': newActionId });
            allMyActionsRef.doc(newActionId).set(unplannedTask);
            allMyActionsRef.doc(newActionId).update({ 'id': newActionId });
        });
        console.log(unplannedTask);
        this.item = { uid: "", id: "", name: "", unit: "", quantity: 0, selectedWork: false, targetQty: 0, rate: 0, workHours: null, amount: 0, by: "", byId: "", type: "", champion: null, classification: null, participants: null, departmentName: "", departmentId: "", billID: "", billName: "", projectId: "", projectName: "", createdOn: "", UpdatedOn: "", actualData: null, workStatus: null, complete: false, start: null, end: null, startWeek: "", startDay: "", startDate: "", endDay: "", endDate: "", endWeek: "", taskName: "", taskId: "", companyId: "", companyName: "", classificationName: "", classificationId: "", section: this.is.getSectionInit(), actualStart: "", actualEnd: "", Hours: "" };
    };
    TimesheetComponent.prototype.aclear = function () {
        this.dmData = { updateTime: "", qty: 0 };
        this.actualData = { name: "", time: "", actionId: "", id: "", actuals: null };
        // this.selectedAction = this.is.getActionItem();
    };
    TimesheetComponent.prototype.setDiary = function (e, action) {
        if (e.target.checked) {
            var selectedWork = true;
            console.log(action.name + '' + 'action checked');
            this.myDocument.collection('myStandards').doc(action.id).update({ 'selectedWork': selectedWork });
        }
        else {
            console.log(action.name + '' + 'action unchecked');
            var selectedWork = false;
            this.myDocument.collection('myStandards').doc(action.id).update({ 'selectedWork': selectedWork });
        }
    };
    TimesheetComponent.prototype.dataCall = function () {
        var _this = this;
        this.myDocument = this.afs.collection('Users').doc(this.userId);
        this.userProfile = this.myDocument.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (a) {
            var data = a.payload.data();
            var id = a.payload.id;
            return __assign({ id: id }, data);
        }));
        this.userProfile.subscribe(function (userData) {
            console.log(userData);
            var myData = {
                name: _this.user.displayName,
                email: _this.user.email,
                bus_email: userData.bus_email,
                id: _this.user.uid,
                phoneNumber: _this.user.phoneNumber,
                photoURL: _this.user.photoURL,
                address: userData.address,
                nationality: userData.nationality,
                nationalId: userData.nationalId,
            };
            if (userData.address == "" || userData.address == null || userData.address == undefined) {
                userData.address = "";
            }
            else {
            }
            if (userData.phoneNumber == "" || userData.phoneNumber == null || userData.phoneNumber == undefined) {
                userData.phoneNumber = "";
            }
            else {
            }
            if (userData.bus_email == "" || userData.bus_email == null || userData.bus_email == undefined) {
                userData.bus_email = "";
            }
            else {
            }
            if (userData.nationalId == "" || userData.nationalId == null || userData.nationalId == undefined) {
                userData.nationalId = "";
            }
            else {
            }
            if (userData.nationality == "" || userData.nationality == null || userData.nationality == undefined) {
                userData.nationality = "";
            }
            else {
            }
            _this.myData = myData;
            _this.userData = userData;
        });
        var currentDate = moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).format('L');
        ;
        var today = moment__WEBPACK_IMPORTED_MODULE_4__(new Date(), "YYYY-MM-DD");
        console.log(currentDate);
        var userDocRef = this.myDocument;
        this.viewActions = userDocRef.collection('WeeklyActions'
        // , ref => ref
        // .where("startDate", '==', currentDate)
        // .limit(4)
        ).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.viewActions.subscribe(function (actions) {
            _this.actNumber = 0;
            _this.myDiaryItems = [];
            _this.myActionItems = [];
            actions.forEach(function (data) {
                var element = data;
                if (moment__WEBPACK_IMPORTED_MODULE_4__(element.startDate).isSameOrBefore(today) && element.complete == false) {
                    if (element.selectedWork == true) {
                        _this.myActionItems.push(element);
                        _this.myDiaryItems.push(element);
                        console.log(_this.myActionItems);
                        _this.chartdata = true;
                        _this.processData(_this.myActionItems);
                    }
                }
            });
            _this.actNumber = _this.myDiaryItems.length;
            // this.myActionItems = actions;
            // console.log(actions.length)
            // console.log(actions)
            _this.actionNo = actions.length;
        });
        if (this.actionNo == 0) {
            this.showActions = false;
        }
        else {
            this.showActions = true;
        }
    };
    TimesheetComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    TimesheetComponent.prototype.processData = function (entries) {
        var _this = this;
        this.workItemCount = [];
        this.workItemData = [];
        entries.forEach(function (element) {
            if (_this.workItemCount[element.name])
                _this.workItemCount[element.name] += 1;
            else
                _this.workItemCount[element.name] = 1;
        });
        for (var key in this.workItemCount) {
            var singleentry = {
                // id: key,
                name: key,
                value: this.workItemCount[key]
            };
            this.workItemData.push(singleentry);
        }
    };
    TimesheetComponent.prototype.showNotification = function (data, from, align) {
        // var type = ['', 'info', 'success', 'warning', 'danger'];
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        if (data === 'project') {
            $.notify({
                icon: "ti-gift",
                message: "A new project has been created <br> check colours projects dropdown."
            }, {
                type: type[color],
                timer: 4000,
                placement: {
                    from: from,
                    align: align
                },
                template: '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
            });
        }
        if (data === 'Task') {
            $.notify({
                icon: "ti-gift",
                message: "Task has been updated."
            }, {
                type: type[color],
                timer: 4000,
                placement: {
                    from: from,
                    align: align
                },
                template: '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
            });
        }
        if (data === 'comp') {
            $.notify({
                icon: "ti-gift",
                message: "A new enterprise has been created <b> check colours enterprise dropdown."
            }, {
                type: type[color],
                timer: 4000,
                placement: {
                    from: from,
                    align: align
                },
                template: '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
            });
        }
    };
    TimesheetComponent.prototype.showSwal = function (type) {
        if (type == 'basic') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Here's a message!",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-success"
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.noop);
        }
        else if (type == 'title-and-text') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Here's a message!",
                text: "It's pretty, isn't it?",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-info"
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.noop);
        }
        else if (type == 'success-message') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Good job!",
                text: "You clicked the button!",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-success",
                type: "success"
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.noop);
        }
        else if (type == 'warning-message-and-confirmation') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonClass: 'btn btn-success',
                cancelButtonClass: 'btn btn-danger',
                confirmButtonText: 'Yes, delete it!',
                buttonsStyling: false
            }).then(function (result) {
                if (result.value) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                        title: 'Deleted!',
                        text: 'Your file has been deleted.',
                        type: 'success',
                        confirmButtonClass: "btn btn-success",
                        buttonsStyling: false
                    });
                }
            });
        }
        else if (type == 'warning-message-and-cancel') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, keep it',
                confirmButtonClass: "btn btn-success",
                cancelButtonClass: "btn btn-danger",
                buttonsStyling: false
            }).then(function (result) {
                if (result.value) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                        title: 'Deleted!',
                        text: 'Your imaginary file has been deleted.',
                        type: 'success',
                        confirmButtonClass: "btn btn-success",
                        buttonsStyling: false
                    }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.noop);
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                        title: 'Cancelled',
                        text: 'Your imaginary file is safe :)',
                        type: 'error',
                        confirmButtonClass: "btn btn-info",
                        buttonsStyling: false
                    }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.noop);
                }
            });
        }
        else if (type == 'custom-html') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                title: 'HTML example',
                buttonsStyling: false,
                confirmButtonClass: "btn btn-success",
                html: 'You can use <b>bold text</b>, ' +
                    '<a href="https://github.com">links</a>' +
                    'and other HTML tags' +
                    '{{ userData.name }}'
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.noop);
        }
        else if (type == 'auto-close') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Auto close alert!",
                text: "I will close in 2 seconds.",
                timer: 2000,
                showConfirmButton: false
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.noop);
        }
        else if (type == 'input-field') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                title: 'Input something',
                html: '<div class="form-group">' +
                    '<input id="input-field" type="text" class="form-control" />' +
                    '</div>',
                showCancelButton: true,
                confirmButtonClass: 'btn btn-success',
                cancelButtonClass: 'btn btn-danger',
                buttonsStyling: false
            }).then(function (result) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                    type: 'success',
                    html: 'You entered: <strong>' +
                        $('#input-field').val() +
                        '</strong>',
                    confirmButtonClass: 'btn btn-success',
                    buttonsStyling: false
                });
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.noop);
        }
    };
    TimesheetComponent.prototype.dhms = function (t) {
        this.mytime = ((new Date().getTime()) / 1000);
        this.mytime = new Date().getTime();
        this.future = new Date();
        // if (this.timedstamp > 0) {
        //   if (this.timedstamp % 60 == 0) {
        //     // alert('An hour has passed')
        //     this.showSwal('custom-html')
        //   };
        // }
        var days, hours, minutes, seconds;
        days = Math.floor(t / 86400);
        t -= days * 86400;
        hours = Math.floor(t / 3600) % 24;
        t -= hours * 3600;
        minutes = Math.floor(t / 60) % 60;
        t -= minutes * 60;
        seconds = t % 60;
        this.timedstamp += 1;
        // console.log(this.timedstamp);
        this.mygetTime();
        // console.log(this.nHrs, ':', this.nMin);
        return [
            //days + 'd',
            hours + 'h',
            minutes + 'm',
            seconds + 's'
        ].join(' ');
    };
    TimesheetComponent.prototype.mygetTime = function () {
        return __awaiter(this, void 0, void 0, function () {
            var d, nHrs, nMin, nSecs;
            return __generator(this, function (_a) {
                d = new Date();
                nHrs = d.getHours();
                nMin = d.getMinutes();
                nSecs = d.getSeconds();
                this.nSecs = Math.floor(nSecs);
                this.nHrs = Math.floor(nHrs);
                this.nMin = Math.floor(nMin);
                return [2 /*return*/];
            });
        });
    };
    TimesheetComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.future  = new Date(this.futureString);
        this.future = new Date();
        this.counter$ = rxjs_Rx__WEBPACK_IMPORTED_MODULE_6__["Observable"].interval(1000).map(function (x) {
            //return Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
            return Math.floor((_this.timedstamp - new Date().getTime()) / 1000);
            //return Math.floor(( new Date().getTime()));
        });
        this.subscription = this.counter$.subscribe(function (x) { return _this.message = _this.dhms(x); });
        var d = new Date();
        var da = new Date();
        this.afAuth.user.subscribe(function (user) {
            _this.userId = user.uid;
            _this.user = user;
            // let myData = {
            //   name: this.user.displayName,
            //   email: this.user.email,
            //   id: this.user.uid,
            //   phoneNumber: this.user.phoneNumber,
            //   photoURL: this.user.photoURL
            // }
            // this.myData = myData;
            _this.dataCall();
        });
    };
    TimesheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timesheet',
            template: __webpack_require__(/*! ./timesheet.component.html */ "./src/app/calendar/timesheet/timesheet.component.html"),
            styles: [__webpack_require__(/*! ./timesheet.component.css */ "./src/app/calendar/timesheet/timesheet.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], app_services_initialise_service__WEBPACK_IMPORTED_MODULE_8__["InitialiseService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], TimesheetComponent);
    return TimesheetComponent;
}());



/***/ }),

/***/ "./src/app/calendar/totals-action-items/totals-action-items.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/calendar/totals-action-items/totals-action-items.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* table {\r\n    font-family: arial, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\ntd,\r\nth {\r\n    border: 1px solid #dddddd;\r\n    padding: 8px;\r\n}\r\n\r\ntr:nth-child(even) {\r\n    background-color: #dddddd;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kYXIvdG90YWxzLWFjdGlvbi1pdGVtcy90b3RhbHMtYWN0aW9uLWl0ZW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0dBY0ciLCJmaWxlIjoic3JjL2FwcC9jYWxlbmRhci90b3RhbHMtYWN0aW9uLWl0ZW1zL3RvdGFscy1hY3Rpb24taXRlbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRhYmxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGQsXHJcbnRoIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbnRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xyXG59ICovIl19 */"

/***/ }),

/***/ "./src/app/calendar/totals-action-items/totals-action-items.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/calendar/totals-action-items/totals-action-items.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <p class=\"text-left title clrs-h4-font\" style=\"color: darkslategray\">My Time Sheet for each day</p>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"col-md-12\">\n        <ng-select [items]=\"timesheetCollection | async\" bindLabel=\"name\" name=\"sPeriod\" placeholder=\"Select Period\"\n          (change)=\"dailyTimeSheet()\" [(ngModel)]=\"selectedDate\"></ng-select>\n      </div>\n      <!-- <div class=\"col-md-3\">\n        <-- <button *ngIf=\"editRpt\" class=\"btn-link btn-magnify\">search</button> ->\n        <button class=\"btn-link btn-magnify\" routerLink=\"./totalsAction\"> view</button>\n      </div> -->\n    </div>\n  </div>\n  <div class=\"card-content table-responsive table-full-width\">\n    <table class=\"table table-striped\">\n      <thead class=\"title clrs-h4-font\">\n        <th class=\"text-left table td-clrs\">Task Activity</th>\n        <th class=\"table td-clrs\">Start Date</th>\n        <th class=\"table td-clrs\">End Date</th>\n        <th class=\"text-right table td-clrs\">Hours Spent</th>\n      </thead>\n      <tbody>\n        <!-- <tr *ngFor=\"let action of actionItemsTotals | async\"> -->\n        <tr *ngFor=\"let action of viewDailyTimeSheets | async\">\n          <ng-container *ngIf=\"action.id !== 'lapsed'; else showLapsedField\">\n            <td class=\"text-left table td-clrs\">{{ action.name }} <span *ngIf=\"action.projectName !='' \"> :{{ action.projectName }}</span></td>\n            <!-- <td>{{ moment(action.actualStart).format('MMMM Do YYYY, h:mm:ss a') }}</td>\n            <td>{{ moment(action.actualEnd).format('MMMM Do YYYY,h:mm:ss a') }}</td> -->\n            <td class=\"table td-clrs\">{{ action.actualStart }}</td>\n            <td class=\"table td-clrs\">{{ action.actualEnd }}</td>\n            <td class=\"text-right table td-clrs\" style=\"padding-right:15px\">{{ action.Hours }}</td>\n            <!-- <td>{{ action.workHours }}</td> -->\n            <!-- <td *ngIf=\"action.id == 'lapsed'; else showLapsedField\">{{ action.workHours }}</td> -->\n          </ng-container>\n          <ng-template #showLapsedField>\n            <td class=\"text-left table td-clrs\">{{ action.name }}<span *ngIf=\"action.projectName !='' \"> :{{ action.projectName }}</span></td>\n            <td class=\"table td-clrs\">{{ action.actualStart }}</td>\n            <td class=\"table td-clrs\" >{{ action.actualEnd }}</td>\n            <!-- <td class=\"table td-clrs\">{{ action.Hours }}</td> -->\n            <!-- <td class=\"text-right table td-clrs\" style=\"padding-right:2em\">{{ action.wrkHours }}</td> -->\n            <td class=\"text-right table td-clrs\" style=\"padding-right:15px\">{{ mlapsdata }}</td>\n          </ng-template>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/calendar/totals-action-items/totals-action-items.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/calendar/totals-action-items/totals-action-items.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TotalsActionItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalsActionItemsComponent", function() { return TotalsActionItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _services_enterprise_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/enterprise.service */ "./src/app/services/enterprise.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_personal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/personal.service */ "./src/app/services/personal.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var app_services_project_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/services/project.service */ "./src/app/services/project.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var TotalsActionItemsComponent = /** @class */ (function () {
    function TotalsActionItemsComponent(auth, pns, afAuth, es, ps, afs, location, renderer, element, router, as) {
        var _this = this;
        this.auth = auth;
        this.pns = pns;
        this.afAuth = afAuth;
        this.es = es;
        this.ps = ps;
        this.afs = afs;
        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.as = as;
        afAuth.user.subscribe(function (user) {
            _this.userId = user.uid;
            _this.user = user;
            _this.coloursUsername = user.displayName;
            console.log(_this.userId);
            console.log(_this.user);
            _this.companies = es.getCompanies(user.uid);
            _this.projects = es.getProjects(user.uid);
            _this.myProjects = es.getPersonalProjects(user.uid);
            _this.classifications = pns.getClassifications(user.uid);
            _this.dataCall();
        });
        // this.actionItemsTotals = afs.collection('Users').doc(this.userId).collection<workItem>('WeeklyActions').snapshotChanges().pipe(
    }
    TotalsActionItemsComponent.prototype.dailyTimeSheet = function () {
        var _this = this;
        var timesheetDocId;
        console.log(this.selectedDate);
        timesheetDocId = this.selectedDate;
        var myLapses = this.afs.collection('Users').doc(this.userId).collection('TimeSheets').doc(timesheetDocId.id).collection('actionItems');
        this.viewDailyTimeSheets = this.afs.collection('Users').doc(this.userId).collection('TimeSheets').doc(timesheetDocId.id).collection('actionItems').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            var workStatus = 0;
            var mlapsdata;
            var strtTym = data.actualStart;
            var tot = .5;
            // let mlapsdata
            // data.Hours = String(moment(moment(data.actualStart).diff(moment(data.actualEnd))).format('hh:mm:ss'));
            if (data.name !== 'Lapsed') {
                data.actualStart = String(moment__WEBPACK_IMPORTED_MODULE_9__(data.actualStart).format('MMMM Do YYYY, h:mm:ss a'));
                console.log('start,', data.actualStart);
                data.actualEnd = String(moment__WEBPACK_IMPORTED_MODULE_9__(data.actualEnd).format('MMMM Do YYYY, h:mm:ss a'));
                console.log('end,', data.actualEnd);
                if (data.workHours !== null) {
                    data.workHours.forEach(function (element) {
                        console.log(moment__WEBPACK_IMPORTED_MODULE_9__(element.time).format('DD-MM-YYYY') + ' ' + _this.selectedDate.id);
                        var Tym = moment__WEBPACK_IMPORTED_MODULE_9__(element.time).format('DD-MM-YYYY');
                        var tet = moment__WEBPACK_IMPORTED_MODULE_9__(_this.selectedDate.id).format('DD-MM-YYYY');
                        if (Tym === _this.selectedDate.id) {
                            // if (moment(element.time).isSameOrBefore(tet)) {
                            tot = tot + .5;
                            // data.Hours = String(moment(strtTym).add(tot, 'h').format('hh'));
                            data.Hours = String(tot);
                            //   console.log(data.Hours);
                        }
                    });
                }
                else {
                }
                // tot = data.workHours.length
                console.log(tot);
                console.log(moment__WEBPACK_IMPORTED_MODULE_9__(strtTym).add(tot, 'h'));
                // data.Hours = String(moment(moment(data.actualStart).diff(moment(data.actualEnd))).format('hh'));
            }
            if (data.name === 'Lapsed') {
                var lapData = myLapses.doc('lapsed').collection('lapses').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    return __assign({ id: id }, data);
                }); }));
                lapData.subscribe(function (ldata) {
                    // console.log(ldata);
                    mlapsdata = (ldata.length);
                    _this.mlapsdata = mlapsdata;
                    // console.log(mlapsdata);
                });
                data.wrkHours = String(mlapsdata);
            }
            return __assign({ id: id }, data);
        }); }));
    };
    TotalsActionItemsComponent.prototype.ARCHdailyTimeSheet = function () {
        var _this = this;
        var timesheetDocId;
        console.log(this.selectedDate);
        timesheetDocId = this.selectedDate;
        var myLapses = this.afs.collection('Users').doc(this.userId).collection('TimeSheets').doc(timesheetDocId.id).collection('actionItems');
        this.viewDailyTimeSheets = this.afs.collection('Users').doc(this.userId).collection('TimeSheets').doc(timesheetDocId.id).collection('actionItems').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            var workStatus = 0;
            var mlapsdata;
            var endTym = data.actualStart;
            data.actualStart = String(moment__WEBPACK_IMPORTED_MODULE_9__(data.actualStart).format('MMMM Do YYYY, h:mm:ss a'));
            console.log('start,', data.actualStart);
            data.actualEnd = String(moment__WEBPACK_IMPORTED_MODULE_9__(data.actualEnd).format('MMMM Do YYYY, h:mm:ss a'));
            console.log('end,', data.actualEnd);
            // let mlapsdata
            // data.Hours = String(moment(moment(data.actualStart).diff(moment(data.actualEnd))).format('hh:mm:ss'));
            var myHours = moment__WEBPACK_IMPORTED_MODULE_9__(data.actualStart).diff(moment__WEBPACK_IMPORTED_MODULE_9__(data.actualEnd));
            data.Hours = String(myHours);
            console.log(data.Hours);
            if (data.name === 'Lapsed') {
                var lapData = myLapses.doc('lapsed').collection('lapses').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    return __assign({ id: id }, data);
                }); }));
                lapData.subscribe(function (ldata) {
                    console.log(ldata);
                    mlapsdata = (ldata.length);
                    _this.mlapsdata = mlapsdata;
                    console.log(mlapsdata);
                });
                data.wrkHours = String(mlapsdata);
            }
            return __assign({ id: id }, data);
        }); }));
    };
    TotalsActionItemsComponent.prototype.dataCall = function () {
        this.myDocument = this.afs.collection('Users').doc(this.userId);
        this.timesheetCollection = this.myDocument.collection('TimeSheets').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.actionItemsTotals = this.afs.collection('Users').doc(this.userId).collection('TimeSheets').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            console.log(data.actualStart);
            return __assign({ id: id }, data);
        }); }));
        return;
    };
    TotalsActionItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.user.subscribe(function (user) {
            _this.userId = user.uid;
            _this.user = user;
            // this.dataCall().subscribe();
        });
        console.log(this.userId);
    };
    TotalsActionItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-totals-action-items',
            template: __webpack_require__(/*! ./totals-action-items.component.html */ "./src/app/calendar/totals-action-items/totals-action-items.component.html"),
            styles: [__webpack_require__(/*! ./totals-action-items.component.css */ "./src/app/calendar/totals-action-items/totals-action-items.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _services_personal_service__WEBPACK_IMPORTED_MODULE_8__["PersonalService"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _services_enterprise_service__WEBPACK_IMPORTED_MODULE_4__["EnterpriseService"], app_services_project_service__WEBPACK_IMPORTED_MODULE_10__["ProjectService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TotalsActionItemsComponent);
    return TotalsActionItemsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=calendar-calendar-module.js.map