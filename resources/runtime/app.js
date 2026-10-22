"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef,
  useCallback = _React.useCallback;

// --- Configuration ---
var EMOTION_LEVELS = [{
  id: 1,
  label: "開心",
  color: "bg-green-400",
  description: "心情很好，\n充滿活力！"
}, {
  id: 2,
  label: "平靜",
  color: "bg-teal-400",
  description: "感覺放鬆，\n心情平和。"
}, {
  id: 3,
  label: "不安",
  color: "bg-blue-400",
  description: "有點不舒服，\n心裡怪怪的。"
}, {
  id: 4,
  label: "擔憂",
  color: "bg-yellow-500",
  description: "心裡七上八下，\n很煩惱。"
}, {
  id: 5,
  label: "傷心",
  color: "bg-indigo-500",
  description: "非常難過，\n想哭。"
}, {
  id: 6,
  label: "生氣",
  color: "bg-orange-600",
  description: "很生氣，\n心跳變快了！"
}, {
  id: 7,
  label: "憤怒",
  color: "bg-red-700",
  description: "氣炸了，\n快要爆炸了！"
}];

// --- Assets & Smart Pathing ---
// If we are in the AI Studio preview environment, use GitHub URLs.
// If we are running locally or on GitHub Pages, use relative paths.
var BASE_URL = './resources/images/';
var AUDIO_URL = './resources/audio/';
var LOGO_URL = "".concat(BASE_URL, "sign.png");

// --- Components ---

function AbstractIcon(_ref) {
  var type = _ref.type,
    color = _ref.color;
  if (type === 'meter') {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 100 100",
      className: "w-16 h-16 drop-shadow-sm"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "grad1",
      x1: "0%",
      y1: "0%",
      x2: "100%",
      y2: "100%"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      style: {
        stopColor: '#FFEDD5',
        stopOpacity: 1
      }
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      style: {
        stopColor: '#FED7AA',
        stopOpacity: 1
      }
    }))), /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "50",
      r: "45",
      fill: "url(#grad1)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M50 25 V65",
      stroke: "#F97316",
      strokeWidth: "6",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "70",
      r: "10",
      fill: "#F97316"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "65",
      cy: "35",
      r: "5",
      fill: "#FDBA74"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "30",
      cy: "60",
      r: "3",
      fill: "#FDBA74"
    }));
  }
  if (type === 'search') {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 100 100",
      className: "w-16 h-16 drop-shadow-sm"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "gradSearch",
      x1: "0%",
      y1: "0%",
      x2: "100%",
      y2: "100%"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      style: {
        stopColor: '#DBEAFE',
        stopOpacity: 1
      }
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      style: {
        stopColor: '#BFDBFE',
        stopOpacity: 1
      }
    }))), /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "50",
      r: "45",
      fill: "url(#gradSearch)"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "48",
      cy: "48",
      r: "18",
      stroke: "#3B82F6",
      strokeWidth: "5",
      fill: "white"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "62",
      y1: "62",
      x2: "75",
      y2: "75",
      stroke: "#3B82F6",
      strokeWidth: "7",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "55",
      cy: "40",
      r: "4",
      fill: "#93C5FD"
    }));
  }
  if (type === 'breath') {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 100 100",
      className: "w-16 h-16 drop-shadow-sm"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "50",
      r: "45",
      fill: "#ECFDF5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30 55 Q 50 25 70 55",
      stroke: "#34D399",
      strokeWidth: "4",
      fill: "none",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30 65 Q 50 35 70 65",
      stroke: "#6EE7B7",
      strokeWidth: "4",
      fill: "none",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "45",
      r: "2",
      fill: "#34D399"
    }));
  }
  return null;
}
function ReverseArrowIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "w-8 h-8 text-slate-500"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3v5h5"
  }));
}
function FloatingLogo(_ref2) {
  var visible = _ref2.visible,
    show = _ref2.show;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  if (!visible) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed bottom-6 right-6 z-50 flex flex-col items-end transition-opacity duration-700 ease-in-out ".concat(show ? 'opacity-100' : 'opacity-0'),
    onMouseLeave: function onMouseLeave() {
      return setIsOpen(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-2 bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-100 transform transition-all duration-500 ease-out origin-bottom-right ".concat(isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4 pointer-events-none')
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 font-bold text-sm whitespace-nowrap"
  }, "\u672C\u5E73\u53F0\u7531\u6559\u80B2\u5FC3\u7406\u5B78\u5BB6\u8A2D\u8A08"), /*#__PURE__*/React.createElement("div", {
    className: "absolute -bottom-1.5 right-6 w-3 h-3 bg-white transform rotate-45 border-r border-b border-slate-100"
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    className: "w-10 h-10 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-300 focus:outline-none"
  }, /*#__PURE__*/React.createElement("img", {
    src: emotionAsset(LOGO_URL),
    alt: "Logo",
    className: "w-full h-full object-contain drop-shadow-md"
  })));
}
function MainMenu(_ref3) {
  var onNavigate = _ref3.onNavigate,
    show = _ref3.show;
  React.useLayoutEffect(function () {
    document.documentElement.dataset.homeLocked = 'true';
    window.scrollTo(0, 0);
    return function () {
      delete document.documentElement.dataset.homeLocked;
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "platform-home w-full bg-[#FDFBF7] flex flex-col items-center justify-center p-6 font-main pb-32 transition-opacity duration-700 ease-in-out select-none ".concat(show ? 'opacity-100' : 'opacity-0')
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-md w-full space-y-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center space-y-2"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-5xl font-bold text-slate-700 tracking-tight mb-2"
  }, "\u60C5\u7DD2\u8ABF\u63A7\u5DE5\u5177"), /*#__PURE__*/React.createElement("p", {
    className: "text-xl text-slate-500"
  }, "\u9078\u64C7\u9069\u5408\u4F60\u7684\u7DF4\u7FD2")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onNavigate('meter');
    },
    className: "w-full bg-white hover:bg-orange-50 active:bg-orange-100 border-2 border-orange-100 hover:border-orange-200 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 group flex items-center gap-6"
  }, /*#__PURE__*/React.createElement(AbstractIcon, {
    type: "meter"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-left"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-bold text-slate-700 group-hover:text-orange-800 transition-colors"
  }, "\u60C5\u7DD2\u6EAB\u5EA6\u8A08"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400 mt-1"
  }, "\u89BA\u5BDF\u7576\u4E0B\u7684\u60C5\u7DD2\u80FD\u91CF"))), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onNavigate('explorer');
    },
    className: "w-full bg-white hover:bg-blue-50 active:bg-blue-100 border-2 border-blue-100 hover:border-blue-200 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 group flex items-center gap-6"
  }, /*#__PURE__*/React.createElement(AbstractIcon, {
    type: "search"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-left"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-bold text-slate-700 group-hover:text-blue-800 transition-colors"
  }, "\u60C5\u7DD2\u63A2\u7D22\u5668"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400 mt-1"
  }, "\u8FA8\u8B58\u4F60\u7684\u60C5\u7DD2"))), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onNavigate('breathing');
    },
    className: "w-full bg-white hover:bg-green-50 active:bg-green-100 border-2 border-green-100 hover:border-green-200 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 group flex items-center gap-6"
  }, /*#__PURE__*/React.createElement(AbstractIcon, {
    type: "breath"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-left"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-bold text-slate-700 group-hover:text-green-800 transition-colors"
  }, "\u547C\u5438\u7DF4\u7FD2"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400 mt-1"
  }, "\u8ABF\u7BC0\u547C\u5438\uFF0C\u653E\u9B06\u8EAB\u5FC3"))))));
}
function BoxBreathingTool() {
  var _useState3 = useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isActive = _useState4[0],
    setIsActive = _useState4[1]; // Auto-start
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    startupPhase = _useState6[0],
    setStartupPhase = _useState6[1]; // 0: Flash instruction, 1: Show labels, 2: Highlight first label, 3: Start animation
  var startupPhaseRef = useRef(0);
  var _useState7 = useState(0),
    _useState8 = _slicedToArray(_useState7, 2),
    phase = _useState8[0],
    setPhase = _useState8[1]; // 0: Inhale, 1: Hold, 2: Exhale, 3: Hold
  var _useState9 = useState(4),
    _useState10 = _slicedToArray(_useState9, 2),
    timeLeft = _useState10[0],
    setTimeLeft = _useState10[1];
  var _useState11 = useState(0),
    _useState12 = _slicedToArray(_useState11, 2),
    progress = _useState12[0],
    setProgress = _useState12[1];
  var _useState13 = useState(0),
    _useState14 = _slicedToArray(_useState13, 2),
    animTime = _useState14[0],
    setAnimTime = _useState14[1];
  var requestRef = useRef(null);
  var startTimeRef = useRef(null);
  // Reduced particles from 120 to 80 for better performance
  var _useState15 = useState(function () {
      return Array.from({
        length: 80
      }).map(function (_, i) {
        return {
          id: i,
          angle: Math.random() * Math.PI * 2,
          distance: 12 + Math.random() * 26,
          // percentage from center
          speed: 0.5 + Math.random() * 1.5,
          size: 4 + Math.random() * 6,
          opacity: 0.2 + Math.random() * 0.6
        };
      });
    }),
    _useState16 = _slicedToArray(_useState15, 1),
    particles = _useState16[0];
  useEffect(function () {
    var updateStartup = function updateStartup(val) {
      setStartupPhase(val);
      startupPhaseRef.current = val;
    };
    var t1 = setTimeout(function () {
      return updateStartup(1);
    }, 3000);
    var t2 = setTimeout(function () {
      return updateStartup(2);
    }, 4000);
    var t3 = setTimeout(function () {
      return updateStartup(3);
    }, 5000);
    return function () {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);
  useEffect(function () {
    if (!isActive) {
      cancelAnimationFrame(requestRef.current);
      setPhase(0);
      setTimeLeft(4);
      setProgress(0);
      startTimeRef.current = null;
      return;
    }
    var CYCLE_DURATION = 4000; // 4 seconds per edge

    var animate = function animate(time) {
      setAnimTime(time / 1000);
      if (startupPhaseRef.current < 3) {
        startTimeRef.current = null;
        setProgress(0);
        setPhase(0);
        setTimeLeft(4);
        requestRef.current = requestAnimationFrame(animate);
        return;
      }
      if (!startTimeRef.current) startTimeRef.current = time;
      var elapsed = time - startTimeRef.current;
      var currentProgress = elapsed / CYCLE_DURATION;
      if (currentProgress >= 1) {
        var overflow = elapsed % CYCLE_DURATION;
        currentProgress = overflow / CYCLE_DURATION;
        startTimeRef.current = time - overflow;
        setPhase(function (prev) {
          var nextPhase = (prev + 1) % 4;
          if (navigator.vibrate) navigator.vibrate(60);
          return nextPhase;
        });
      }
      setProgress(currentProgress);
      setTimeLeft(Math.ceil(4 - currentProgress * 4));
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return function () {
      return cancelAnimationFrame(requestRef.current);
    };
  }, [isActive]); // Removed startupPhase from dependencies to prevent restarts

  var continuousTime = animTime;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center justify-center w-full h-full animate-[fadeInUp_0.5s_ease-out] box-breathing-landscape-fix gap-12 sm:gap-16 pb-8 sm:pb-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-56 h-56 sm:w-72 sm:h-72 flex items-center justify-center breathing-square-container -mt-8 sm:-mt-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-8 sm:-top-10 left-0 right-0 text-center transition-opacity duration-1000 ease-in-out",
    style: {
      opacity: startupPhase < 1 ? 0 : startupPhase >= 3 ? phase === 0 ? 1 : 0.2 : startupPhase === 2 ? 1 : 0.2
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-lg sm:text-xl font-bold text-slate-600 tracking-widest whitespace-nowrap"
  }, "\u5438\u6C23")), /*#__PURE__*/React.createElement("div", {
    className: "absolute -right-10 sm:-right-16 top-0 bottom-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out",
    style: {
      opacity: startupPhase < 1 ? 0 : startupPhase >= 3 ? phase === 1 ? 1 : 0.2 : 0.2
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-lg sm:text-xl font-bold text-slate-600 tracking-widest whitespace-nowrap",
    style: {
      writingMode: 'vertical-rl'
    }
  }, "\u5C4F\u4F4F\u547C\u5438")), /*#__PURE__*/React.createElement("div", {
    className: "absolute -bottom-8 sm:-bottom-10 left-0 right-0 text-center transition-opacity duration-1000 ease-in-out",
    style: {
      opacity: startupPhase < 1 ? 0 : startupPhase >= 3 ? phase === 2 ? 1 : 0.2 : 0.2
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-lg sm:text-xl font-bold text-slate-600 tracking-widest whitespace-nowrap"
  }, "\u547C\u6C23")), /*#__PURE__*/React.createElement("div", {
    className: "absolute -left-10 sm:-left-16 top-0 bottom-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out",
    style: {
      opacity: startupPhase < 1 ? 0 : startupPhase >= 3 ? phase === 3 ? 1 : 0.2 : 0.2
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-lg sm:text-xl font-bold text-slate-600 tracking-widest whitespace-nowrap",
    style: {
      writingMode: 'vertical-rl'
    }
  }, "\u5C4F\u4F4F\u547C\u5438")), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 flex items-center justify-center pointer-events-none z-0"
  }, particles.map(function (p) {
    var currentDist = 0;
    var minScale = 0.35; // Keep particles visible and loose during exhale
    if (phase === 0) currentDist = p.distance * (minScale + (1 - minScale) * progress);else if (phase === 1) currentDist = p.distance;else if (phase === 2) currentDist = p.distance * (minScale + (1 - minScale) * (1 - progress));else if (phase === 3) currentDist = p.distance * minScale;
    var floatX = Math.sin(continuousTime * p.speed + p.id) * 4;
    var floatY = Math.cos(continuousTime * p.speed + p.id) * 4;
    var currentAngle = p.angle + continuousTime * 0.15 * (p.id % 2 === 0 ? 1 : -1);
    var x = Math.cos(currentAngle) * currentDist + floatX;
    var y = Math.sin(currentAngle) * currentDist + floatY;
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      className: "absolute rounded-full bg-blue-400",
      style: {
        width: p.size,
        height: p.size,
        opacity: p.opacity,
        left: "calc(50% + ".concat(x, "%)"),
        top: "calc(50% + ".concat(y, "%)"),
        transform: 'translate(-50%, -50%)',
        transition: isActive ? 'none' : 'all 0.5s ease'
      }
    });
  })), /*#__PURE__*/React.createElement("svg", {
    className: "absolute inset-0 w-full h-full z-10",
    viewBox: "0 0 280 280"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "12",
    y: "12",
    width: "256",
    height: "256",
    rx: "24",
    fill: "none",
    stroke: "#E2E8F0",
    strokeWidth: "4",
    pathLength: "100"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "12",
    y: "12",
    width: "256",
    height: "256",
    rx: "24",
    fill: "none",
    stroke: "#3B82F6",
    strokeWidth: "12",
    strokeLinecap: "round",
    pathLength: "100",
    strokeDasharray: "0.1 100",
    strokeDashoffset: -(phase * 25 + progress * 25),
    className: startupPhase < 3 ? "animate-pulse" : "",
    style: {
      filter: 'drop-shadow(0 0 16px rgba(59,130,246,0.9)) drop-shadow(0 0 8px rgba(59,130,246,0.6))'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "text-center animate-[fadeInUp_0.5s_ease-out] guide-sentence-container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-slate-500 text-2xl sm:text-3xl tracking-wide font-bold opacity-100"
  }, "\u8ACB\u8DDF\u96A8\u5149\u9EDE\uFF0C\u6162\u6162\u547C\u5438...")));
}
function BreathingExercise(_ref4) {
  var onBack = _ref4.onBack,
    show = _ref4.show;
  var _useState17 = useState(null),
    _useState18 = _slicedToArray(_useState17, 2),
    exerciseType = _useState18[0],
    setExerciseType = _useState18[1]; // null | 'sphere44' | 'sphere478' | 'square' | 'body'
  var _useState19 = useState(false),
    _useState20 = _slicedToArray(_useState19, 2),
    showSphereOptions = _useState20[0],
    setShowSphereOptions = _useState20[1];
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    showSquareOptions = _useState22[0],
    setShowSquareOptions = _useState22[1];
  var _useState23 = useState(null),
    _useState24 = _slicedToArray(_useState23, 2),
    selectedPattern = _useState24[0],
    setSelectedPattern = _useState24[1];
  var _useState25 = useState(null),
    _useState26 = _slicedToArray(_useState25, 2),
    selectedDuration = _useState26[0],
    setSelectedDuration = _useState26[1];
  var _useState27 = useState(null),
    _useState28 = _slicedToArray(_useState27, 2),
    duration = _useState28[0],
    setDuration = _useState28[1];
  var _useState29 = useState(false),
    _useState30 = _slicedToArray(_useState29, 2),
    isTransitioning = _useState30[0],
    setIsTransitioning = _useState30[1];
  var _useState31 = useState(null),
    _useState32 = _slicedToArray(_useState31, 2),
    exerciseStartTime = _useState32[0],
    setExerciseStartTime = _useState32[1];
  var _useState33 = useState(0),
    _useState34 = _slicedToArray(_useState33, 2),
    totalProgress = _useState34[0],
    setTotalProgress = _useState34[1];
  var _useState35 = useState('prepare'),
    _useState36 = _slicedToArray(_useState35, 2),
    phase = _useState36[0],
    setPhase = _useState36[1]; // 'prepare' | 'inhale' | 'hold-in' | 'exhale' | 'hold-out'
  var _useState37 = useState([]),
    _useState38 = _slicedToArray(_useState37, 2),
    bubbles = _useState38[0],
    setBubbles = _useState38[1];
  var _useState39 = useState(0),
    _useState40 = _slicedToArray(_useState39, 2),
    seconds = _useState40[0],
    setSeconds = _useState40[1];
  var _useState41 = useState(''),
    _useState42 = _slicedToArray(_useState41, 2),
    guideText = _useState42[0],
    setGuideText = _useState42[1];
  var startTimeRef = useRef(null);
  var _useState43 = useState(0),
    _useState44 = _slicedToArray(_useState43, 2),
    restartKey = _useState44[0],
    setRestartKey = _useState44[1];

  // Bubble effect
  useEffect(function () {
    if (phase === 'exhale') {
      var newBubbles = Array.from({
        length: 8
      }, function (_, i) {
        return {
          id: Date.now() + i,
          angle: Math.random() * 360,
          distance: 100 + Math.random() * 100,
          size: 10 + Math.random() * 20,
          delay: Math.random() * 0.5
        };
      });
      setBubbles(newBubbles);
      var timer = setTimeout(function () {
        return setBubbles([]);
      }, 3500);
      return function () {
        return clearTimeout(timer);
      };
    }
  }, [phase]);

  // Timer logic
  useEffect(function () {
    var interval;
    if (exerciseType && exerciseType.startsWith('sphere')) {
      var _is = exerciseType === 'sphere478';
      var INHALE_TIME = 4000;
      var HOLD_IN_TIME = _is ? 7000 : 1000;
      var EXHALE_TIME = _is ? 8000 : 4000;
      var HOLD_OUT_TIME = _is ? 0 : 1000;
      var TOTAL_CYCLE = INHALE_TIME + HOLD_IN_TIME + EXHALE_TIME + HOLD_OUT_TIME;
      if (phase === 'prepare') {
        var isIntro = exerciseType === 'sphere-intro';
        setGuideText(isIntro ? '' : '請跟隨圓形的舒張，\n慢慢呼吸...');
        if (isIntro) return;
        var timer = setTimeout(function () {
          setPhase('inhale');
          startTimeRef.current = Date.now();
        }, 3000);
        return function () {
          return clearTimeout(timer);
        };
      }
      var updateTimer = function updateTimer() {
        if (!startTimeRef.current) startTimeRef.current = Date.now();
        var elapsed = Date.now() - startTimeRef.current;
        var cycleTime = elapsed % TOTAL_CYCLE;
        var newPhase = phase;
        var newSeconds = seconds;
        if (cycleTime < INHALE_TIME) {
          newPhase = 'inhale';
          newSeconds = 4 - Math.floor(cycleTime / 1000);
        } else if (cycleTime < INHALE_TIME + HOLD_IN_TIME) {
          newPhase = 'hold-in';
          if (_is) {
            var holdProgress = cycleTime - INHALE_TIME;
            newSeconds = 7 - Math.floor(holdProgress / 1000);
          } else {
            newSeconds = 4;
          }
        } else if (cycleTime < INHALE_TIME + HOLD_IN_TIME + EXHALE_TIME) {
          newPhase = 'exhale';
          var exhaleProgress = cycleTime - (INHALE_TIME + HOLD_IN_TIME);
          var totalExhaleSecs = _is ? 8 : 4;
          newSeconds = totalExhaleSecs - Math.floor(exhaleProgress / 1000);
        } else {
          newPhase = 'hold-out';
          newSeconds = 1;
        }
        if (newPhase !== phase) {
          setPhase(newPhase);
          if (newPhase === 'inhale') {
            if (navigator.vibrate) navigator.vibrate(50);
          } else if (newPhase === 'exhale') {
            if (navigator.vibrate) navigator.vibrate([40, 60, 40]);
          }
        }
        if (newSeconds !== seconds) {
          setSeconds(newSeconds);
        }
      };
      interval = setInterval(updateTimer, 50);
      return function () {
        return clearInterval(interval);
      };
    }
    return function () {
      return clearInterval(interval);
    };
  }, [exerciseType, phase, seconds, restartKey]);

  // Duration timer
  useEffect(function () {
    if (exerciseType && duration && duration !== 'infinite') {
      var timer = setTimeout(function () {
        setExerciseType(null);
        setDuration(null);
        setSelectedPattern(null);
        setSelectedDuration(null);
        setPhase('prepare');
        setTotalProgress(0);
      }, duration);
      return function () {
        return clearTimeout(timer);
      };
    }
  }, [exerciseType, duration, restartKey]);

  // Progress bar update
  useEffect(function () {
    var interval;
    if (exerciseType && duration && duration !== 'infinite' && exerciseStartTime) {
      interval = setInterval(function () {
        var elapsed = Date.now() - exerciseStartTime;
        var p = Math.min(elapsed / duration * 100, 100);
        setTotalProgress(p);
      }, 100);
    } else {
      setTotalProgress(0);
    }
    return function () {
      return clearInterval(interval);
    };
  }, [exerciseType, duration, exerciseStartTime, restartKey]);

  // Auto-start when both pattern and duration are selected
  useEffect(function () {
    if (selectedPattern && selectedDuration) {
      setIsTransitioning(true);
      var timer = setTimeout(function () {
        setExerciseType(selectedPattern);
        setDuration(selectedDuration);
        setPhase('prepare');
        setShowSphereOptions(false);
        setShowSquareOptions(false);
        setExerciseStartTime(Date.now());
        setIsTransitioning(false);
      }, 600);
      return function () {
        return clearTimeout(timer);
      };
    }
  }, [selectedPattern, selectedDuration]);
  var isExpanded = phase === 'inhale' || phase === 'hold-in';
  var is478 = exerciseType === 'sphere478';
  return /*#__PURE__*/React.createElement("div", {
    className: "breathing-platform fixed inset-0 w-full h-full bg-[#FDFBF7] flex flex-col items-center select-none overflow-hidden transition-opacity duration-700 ease-in-out ".concat(show ? 'opacity-100' : 'opacity-0')
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full p-3 sm:p-6 flex items-center justify-center z-30 relative min-h-[64px] sm:min-h-[80px] mobile-landscape-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute left-4 sm:left-6 mobile-landscape-home"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setExerciseType(null);
      setDuration(null);
      setExerciseStartTime(null);
      setTotalProgress(0);
      onBack();
    },
    className: "w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md border border-slate-100 hover:scale-105 active:scale-95 transition-all duration-300"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "w-5 h-5 text-slate-600"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "9 22 9 12 15 12 15 22"
  })))), exerciseType && /*#__PURE__*/React.createElement("div", {
    className: "absolute right-4 sm:right-6 mobile-landscape-restart"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setPhase('prepare');
      setRestartKey(function (prev) {
        return prev + 1;
      });
      setExerciseStartTime(Date.now());
    },
    className: "w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md border border-slate-100 hover:scale-105 active:scale-95 transition-all duration-300"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "w-5 h-5 text-slate-600"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3v5h5"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center gap-4 sm:gap-6 z-20 mobile-landscape-options"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setShowSphereOptions(!showSphereOptions);
      setShowSquareOptions(false);
      setSelectedPattern(null);
      setSelectedDuration(null);
      setExerciseType('sphere-intro');
      setDuration(null);
      setExerciseStartTime(null);
      setTotalProgress(0);
      setPhase('prepare');
    },
    className: "w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm border-2 mobile-landscape-btn ".concat(exerciseType && exerciseType.startsWith('sphere') ? 'bg-green-100 border-green-400 scale-110' : 'bg-white border-slate-100 hover:bg-slate-50')
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 sm:w-6 sm:h-6 rounded-full ".concat(is478 ? 'bg-purple-400' : 'bg-green-400')
  })), showSphereOptions && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-10",
    onClick: function onClick() {
      return setShowSphereOptions(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fixed top-[64px] sm:top-[80px] left-1/2 -translate-x-1/2 z-50 mobile-landscape-submenu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-3 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 animate-[fadeInUp_0.3s_ease-out] w-max"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 justify-center"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelectedPattern('sphere44');
    },
    className: "px-4 py-2 rounded-xl text-sm font-bold transition-all ".concat(selectedPattern === 'sphere44' ? 'bg-green-500 text-white shadow-inner' : 'bg-slate-50 text-green-600 border border-green-100 hover:bg-green-100')
  }, "4-4 \u547C\u5438"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelectedPattern('sphere478');
    },
    className: "px-4 py-2 rounded-xl text-sm font-bold transition-all ".concat(selectedPattern === 'sphere478' ? 'bg-purple-500 text-white shadow-inner' : 'bg-slate-50 text-purple-600 border border-purple-100 hover:bg-purple-100')
  }, "4-7-8 \u547C\u5438")), /*#__PURE__*/React.createElement("div", {
    className: "h-px bg-slate-100 w-full"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 justify-center"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelectedDuration('infinite');
    },
    className: "w-10 h-10 rounded-xl flex items-center justify-center transition-all ".concat(selectedDuration === 'infinite' ? 'bg-slate-800 text-white' : 'bg-slate-50 text-slate-400 border border-slate-100 hover:bg-slate-100'),
    title: "\u7121\u9650"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "w-5 h-5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.178 8c5.096 0 5.096 8 0 8-1.761 0-3.358-1.43-4.822-4-1.464-2.57-3.061-4-4.822-4-5.096 0-5.096 8 0 8 1.761 0 3.358-1.43 4.822-4 1.464-2.57 3.061-4 4.822-4z"
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelectedDuration(60000);
    },
    className: "px-3 h-10 rounded-xl text-sm font-bold transition-all ".concat(selectedDuration === 60000 ? 'bg-slate-800 text-white' : 'bg-slate-50 text-slate-400 border border-slate-100 hover:bg-slate-100')
  }, "1m"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelectedDuration(120000);
    },
    className: "px-3 h-10 rounded-xl text-sm font-bold transition-all ".concat(selectedDuration === 120000 ? 'bg-slate-800 text-white' : 'bg-slate-50 text-slate-400 border border-slate-100 hover:bg-slate-100')
  }, "2m"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelectedDuration(180000);
    },
    className: "px-3 h-10 rounded-xl text-sm font-bold transition-all ".concat(selectedDuration === 180000 ? 'bg-slate-800 text-white' : 'bg-slate-50 text-slate-400 border border-slate-100 hover:bg-slate-100')
  }, "3m")))))), /*#__PURE__*/React.createElement("div", {
    className: "relative flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setShowSquareOptions(!showSquareOptions);
      setShowSphereOptions(false);
      setSelectedPattern('square');
      setSelectedDuration(null);
      setExerciseType('square-intro');
      setDuration(null);
      setExerciseStartTime(null);
      setTotalProgress(0);
      setPhase('prepare');
    },
    className: "w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm border-2 mobile-landscape-btn ".concat(exerciseType === 'square' || exerciseType === 'square-intro' ? 'bg-blue-100 border-blue-400 scale-110' : 'bg-white border-slate-100 hover:bg-slate-50')
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 sm:w-6 sm:h-6 bg-blue-400 rounded-md sm:rounded-lg"
  })), showSquareOptions && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-10",
    onClick: function onClick() {
      return setShowSquareOptions(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fixed top-[64px] sm:top-[80px] left-1/2 -translate-x-1/2 z-50 mobile-landscape-submenu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-3 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 animate-[fadeInUp_0.3s_ease-out] w-max"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 justify-center"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelectedDuration('infinite');
    },
    className: "w-10 h-10 rounded-xl flex items-center justify-center transition-all ".concat(selectedDuration === 'infinite' ? 'bg-slate-800 text-white' : 'bg-slate-50 text-slate-400 border border-slate-100 hover:bg-slate-100'),
    title: "\u7121\u9650"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "w-5 h-5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.178 8c5.096 0 5.096 8 0 8-1.761 0-3.358-1.43-4.822-4-1.464-2.57-3.061-4-4.822-4-5.096 0-5.096 8 0 8 1.761 0 3.358-1.43 4.822-4 1.464-2.57 3.061-4 4.822-4z"
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelectedDuration(60000);
    },
    className: "px-3 h-10 rounded-xl text-sm font-bold transition-all ".concat(selectedDuration === 60000 ? 'bg-slate-800 text-white' : 'bg-slate-50 text-slate-400 border border-slate-100 hover:bg-slate-100')
  }, "1m"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelectedDuration(120000);
    },
    className: "px-3 h-10 rounded-xl text-sm font-bold transition-all ".concat(selectedDuration === 120000 ? 'bg-slate-800 text-white' : 'bg-slate-50 text-slate-400 border border-slate-100 hover:bg-slate-100')
  }, "2m"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelectedDuration(180000);
    },
    className: "px-3 h-10 rounded-xl text-sm font-bold transition-all ".concat(selectedDuration === 180000 ? 'bg-slate-800 text-white' : 'bg-slate-50 text-slate-400 border border-slate-100 hover:bg-slate-100')
  }, "3m")))))), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setExerciseType('body');
      setShowSphereOptions(false);
      setShowSquareOptions(false);
      setDuration('infinite');
      setExerciseStartTime(null);
      setTotalProgress(0);
      setPhase('prepare');
    },
    className: "w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm border-2 mobile-landscape-btn ".concat(exerciseType === 'body' ? 'bg-orange-100 border-orange-400 scale-110' : 'bg-white border-slate-100 hover:bg-slate-50')
  }, /*#__PURE__*/React.createElement("img", {
    src: emotionAsset("resources/images/body-awareness.svg"),
    className: "body-awareness-logo w-7 h-7 sm:w-8 sm:h-8",
    alt: "",
    draggable: "false"
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setExerciseType('emotion-tree');
      setShowSphereOptions(false);
      setShowSquareOptions(false);
      setDuration('infinite');
      setExerciseStartTime(null);
      setTotalProgress(0);
      setPhase('prepare');
    },
    className: "w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm border-2 mobile-landscape-btn ".concat(exerciseType === 'emotion-tree' ? 'bg-emerald-100 border-emerald-400 scale-110' : 'bg-white border-slate-100 hover:bg-slate-50')
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl sm:text-3xl mobile-landscape-emoji"
  }, "\uD83C\uDF33"))))), exerciseType && duration && duration !== 'infinite' && /*#__PURE__*/React.createElement("div", {
    className: "w-full h-1 sm:h-1.5 bg-slate-100/50 relative overflow-hidden z-40 mobile-landscape-progress"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 h-full bg-blue-500 transition-all duration-100 ease-linear shadow-[0_0_10px_rgba(59,130,246,0.5)]",
    style: {
      width: "".concat(totalProgress, "%")
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "breathing-content flex-1 w-full flex flex-col items-center ".concat(exerciseType === 'emotion-tree' ? 'justify-start pt-2 sm:pt-4' : 'justify-center', " relative transition-all duration-700 ").concat(isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100', " ").concat(exerciseType === 'body' || exerciseType === 'emotion-tree' ? '' : 'mobile-landscape-scale')
  }, exerciseType && exerciseType.startsWith('sphere') && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "relative flex flex-col items-center justify-center gap-8 sm:gap-12 mobile-landscape-compact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-64 h-64 flex items-center justify-center transition-opacity duration-500 sphere-landscape-size-fix ".concat(exerciseType === 'sphere-intro' ? 'opacity-0 pointer-events-none' : 'opacity-100')
  }, /*#__PURE__*/React.createElement("div", {
    className: "breath-orb w-48 h-48 rounded-full relative z-10 flex items-center justify-center",
    style: {
      backgroundColor: isExpanded ? is478 ? '#C084FC' : '#86EFAC' : is478 ? '#E9D5FF' : '#A7F3D0',
      transform: isExpanded ? 'scale(1.5)' : 'scale(0.75)',
      boxShadow: isExpanded ? "0 0 60px 20px ".concat(is478 ? 'rgba(192, 132, 252, 0.6)' : 'rgba(134, 239, 172, 0.6)') : '0 0 0 0 rgba(0,0,0,0)',
      opacity: phase === 'prepare' ? 0.8 : 1,
      transition: "all ".concat(phase === 'exhale' ? is478 ? 8000 : 4000 : phase === 'inhale' ? 4000 : 1000, "ms cubic-bezier(0.4,0,0.2,1)")
    }
  }, phase !== 'prepare' && (!is478 && (phase === 'hold-in' || phase === 'hold-out') ? null : /*#__PURE__*/React.createElement("span", {
    key: seconds,
    className: "text-5xl font-bold text-white drop-shadow-md font-mono animate-[fadeInUp_0.5s_ease-out]"
  }, seconds))), phase === 'exhale' && bubbles.map(function (bubble) {
    return /*#__PURE__*/React.createElement("div", {
      key: bubble.id,
      className: "absolute rounded-full bg-[#A7F3D0]/60 pointer-events-none",
      style: {
        width: bubble.size,
        height: bubble.size,
        left: '50%',
        top: '50%',
        transform: "translate(-50%, -50%) rotate(".concat(bubble.angle, "deg) translateX(").concat(bubble.distance, "px)"),
        opacity: 0,
        transition: "transform 3s ease-out ".concat(bubble.delay, "s, opacity 3s ease-out ").concat(bubble.delay, "s"),
        animation: "bubbleFloat 3s ease-out ".concat(bubble.delay, "s forwards")
      }
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-center h-20 sm:h-32 flex flex-col items-center justify-center gap-3 w-full relative sphere-landscape-instruction-fix"
  }, /*#__PURE__*/React.createElement("p", {
    className: "absolute w-full left-0 text-2xl sm:text-3xl text-slate-500 font-bold whitespace-pre leading-relaxed transition-opacity duration-500 ".concat(phase === 'prepare' && exerciseType !== 'sphere-intro' ? 'opacity-100 animate-pulse' : 'opacity-0 pointer-events-none')
  }, guideText), /*#__PURE__*/React.createElement("div", {
    className: "relative flex items-center justify-center w-full transition-opacity duration-500 ".concat(phase === 'prepare' || exerciseType === 'sphere-intro' ? 'opacity-0 pointer-events-none' : 'opacity-100')
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute right-[calc(50%+90px)] w-24 h-24 flex items-center justify-center pointer-events-none"
  }, /*#__PURE__*/React.createElement("img", {
    src: emotionAsset("".concat(BASE_URL, "breath1.png")),
    alt: "Wind Inhale",
    className: "w-full h-full object-contain transform ".concat(phase === 'inhale' || !is478 && phase === 'hold-in' ? 'opacity-100 scale-100 translate-x-24' : 'opacity-0 scale-50 -translate-x-12'),
    style: {
      transitionProperty: 'opacity, transform',
      transitionDuration: phase === 'inhale' || !is478 && phase === 'hold-in' ? '1000ms, 4000ms' : '1000ms, 0ms',
      transitionDelay: phase === 'inhale' || !is478 && phase === 'hold-in' ? '0ms, 0ms' : '0ms, 1000ms',
      transitionTimingFunction: 'ease-out'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative flex flex-col items-center justify-center z-10 min-w-[160px] h-[100px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute flex flex-col items-center transition-all duration-1000 ease-in-out ".concat(phase === 'inhale' || !is478 && phase === 'hold-in' ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2')
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-6xl font-bold text-slate-700"
  }, "\u5438\u6C23"), /*#__PURE__*/React.createElement("p", {
    className: "text-2xl text-slate-400 font-medium tracking-widest"
  }, "INHALE")), /*#__PURE__*/React.createElement("div", {
    className: "absolute flex flex-col items-center transition-all duration-1000 ease-in-out ".concat(phase === 'exhale' || !is478 && phase === 'hold-out' ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2')
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-6xl font-bold text-slate-700"
  }, "\u547C\u6C23"), /*#__PURE__*/React.createElement("p", {
    className: "text-2xl text-slate-400 font-medium tracking-widest"
  }, "EXHALE")), /*#__PURE__*/React.createElement("div", {
    className: "absolute flex flex-col items-center transition-all duration-1000 ease-in-out ".concat(is478 && (phase === 'hold-in' || phase === 'hold-out') ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2')
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-6xl font-bold text-slate-700 whitespace-nowrap"
  }, "\u5C4F\u4F4F\u547C\u5438"), /*#__PURE__*/React.createElement("p", {
    className: "text-2xl text-slate-400 font-medium tracking-widest"
  }, "HOLD"))), /*#__PURE__*/React.createElement("div", {
    className: "absolute left-[calc(50%+90px)] w-24 h-24 flex items-center justify-center pointer-events-none"
  }, /*#__PURE__*/React.createElement("img", {
    src: emotionAsset("".concat(BASE_URL, "breath1.png")),
    alt: "Wind Exhale",
    className: "w-full h-full object-contain transform ".concat(phase === 'exhale' || !is478 && phase === 'hold-out' ? 'opacity-100 scale-100 -translate-x-4' : 'opacity-0 scale-50 -translate-x-32'),
    style: {
      transitionProperty: 'opacity, transform',
      transitionDuration: phase === 'exhale' || !is478 && phase === 'hold-out' ? "1000ms, ".concat(is478 ? 8000 : 4000, "ms") : '1000ms, 0ms',
      transitionDelay: phase === 'exhale' || !is478 && phase === 'hold-out' ? '0ms, 0ms' : '0ms, 1000ms',
      transitionTimingFunction: 'ease-out'
    }
  })))))), exerciseType === 'square' && /*#__PURE__*/React.createElement(BoxBreathingTool, {
    key: restartKey
  }), exerciseType === 'body' && /*#__PURE__*/React.createElement(BodyScanTool, {
    key: restartKey
  }), exerciseType === 'emotion-tree' && /*#__PURE__*/React.createElement(EmotionTreeTool, {
    key: restartKey
  }), (!exerciseType || exerciseType === 'sphere-intro' || exerciseType === 'square-intro') && /*#__PURE__*/React.createElement("div", {
    className: "breathing-intro-guidance absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-2 w-full flex flex-col items-center gap-16 md:gap-8",
    style: {
      animation: 'fadeInUpCentered 0.5s ease-out forwards'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-2xl sm:text-3xl text-slate-500 font-bold tracking-wide"
  }, exerciseType === 'sphere-intro' ? '請選擇呼吸模式與時間' : exerciseType === 'square-intro' ? '請選擇呼吸時間' : '請在上方選擇你想要的呼吸練習'), /*#__PURE__*/React.createElement("p", {
    className: "text-xl sm:text-2xl text-slate-400 font-medium max-w-[280px] sm:max-w-none whitespace-pre-line"
  }, "\u627E\u4E00\u500B\u8212\u9069\u7684\u59FF\u52E2\u5750\u597D\uFF0C\n\u6E96\u5099\u958B\u59CB\u6DF1\u547C\u5438\u7DF4\u7FD2..."))), /*#__PURE__*/React.createElement("style", null, "\n                        .body-scan-container {\n                            display: flex;\n                            flex-direction: column;\n                            align-items: center;\n                            width: 100%;\n                            max-width: 600px;\n                            margin: 0 auto;\n                            height: 100%;\n                            justify-content: flex-start;\n                            gap: 1rem;\n                            padding-top: 1rem;\n                        }\n                        .body-image-wrapper {\n                            position: relative;\n                            width: 100%;\n                            height: auto;\n                            max-height: 75vh;\n                            aspect-ratio: 706/1000;\n                            background: transparent;\n                            border-radius: 1rem;\n                            overflow: visible;\n                            display: flex;\n                            justify-content: center;\n                            align-items: center;\n                        }\n                        /* Mobile Portrait (iPhone 13 mini etc) */\n                        @media (max-width: 480px) and (orientation: portrait) {\n                            .body-image-wrapper {\n                                max-height: 60vh;\n                            }\n                            .body-scan-container {\n                                gap: 0.5rem;\n                                padding-top: 0.5rem;\n                            }\n                        }\n                        /* Mobile Landscape */\n                        @media (orientation: landscape) and (max-height: 500px) {\n                            .body-scan-container {\n                                flex-direction: row;\n                                justify-content: center;\n                                align-items: center;\n                                gap: 2rem;\n                                padding: 40px 1rem 0 1rem !important;\n                                max-width: 98%;\n                                height: 100%;\n                            }\n                            .body-image-wrapper {\n                                height: 85vh !important;\n                                max-height: 85vh !important;\n                                width: auto;\n                                flex: 0 0 auto;\n                                margin-top: -4.5rem !important;\n                            }\n                            .guidance-area {\n                                flex: 1;\n                                text-align: left;\n                                white-space: nowrap;\n                            }\n                        }\n                        /* Tablet/Desktop Landscape (Mac & Tablet Horizontal) */\n                        @media (orientation: landscape) and (min-height: 501px) {\n                            .body-sensation-tool .body-image-wrapper {\n                                max-height: 65vh !important;\n                                margin-top: -1rem !important;\n                            }\n                            .body-sensation-tool .guidance-area {\n                                margin-top: -1rem !important;\n                            }\n                        }\n                        /* Tablet Portrait */\n                        @media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {\n                            .body-image-wrapper {\n                                max-height: 70vh;\n                            }\n                        }\n                        .body-image {\n                            display: block;\n                            width: auto;\n                            height: auto;\n                            max-width: 100%;\n                            max-height: 100%;\n                            object-fit: contain;\n                        }\n                        .guidance-area {\n                            width: 100%;\n                            padding: 0.5rem;\n                            background: transparent;\n                            text-align: center;\n                        }\n                        @keyframes gentleFadeIn {\n                            from { opacity: 0; transform: translateY(15px); }\n                            to { opacity: 1; transform: translateY(0); }\n                        }\n                    "));
}
function EmotionTreeTool() {
  var _useState45 = useState(0),
    _useState46 = _slicedToArray(_useState45, 2),
    growth = _useState46[0],
    setGrowth = _useState46[1];
  var _useState47 = useState(false),
    _useState48 = _slicedToArray(_useState47, 2),
    isPressing = _useState48[0],
    setIsPressing = _useState48[1];
  var _useState49 = useState(false),
    _useState50 = _slicedToArray(_useState49, 2),
    isComplete = _useState50[0],
    setIsComplete = _useState50[1];
  var _useState51 = useState(0),
    _useState52 = _slicedToArray(_useState51, 2),
    sway = _useState52[0],
    setSway = _useState52[1];
  var _useState53 = useState(0),
    _useState54 = _slicedToArray(_useState53, 2),
    cycleTime = _useState54[0],
    setCycleTime = _useState54[1]; // 0-12s cycle
  var _useState55 = useState(false),
    _useState56 = _slicedToArray(_useState55, 2),
    musicStarted = _useState56[0],
    setMusicStarted = _useState56[1];
  var audioRef = useRef(null);
  var growthRef = useRef(0);
  var lastTimeRef = useRef(null);
  var treeStructureRef = useRef(null);
  var cycleRef = useRef(0);
  var fadeIntervalRef = useRef(null);
  var canvasRef = useRef(null);
  var treeRendererRef = useRef(null);
  var treeReadyRef = useRef(false);
  useEffect(function () {
    var cancelled = false;
    window.emotionTreeReady.then(function (_ref5) {
      var createTree = _ref5.createTree;
      if (cancelled) return;
      try {
        treeRendererRef.current = createTree(canvasRef.current);
      } catch (error) {
        console.warn('Using original tree renderer', error);
      }
      treeReadyRef.current = true;
    })["catch"](function () {
      treeReadyRef.current = true;
    });
    return function () {
      var _treeRendererRef$curr;
      cancelled = true;
      (_treeRendererRef$curr = treeRendererRef.current) === null || _treeRendererRef$curr === void 0 || _treeRendererRef$curr.dispose();
    };
  }, []);

  // Generate tree structure once
  if (!treeStructureRef.current) {
    var generateTree = function generateTree(depth, angle, length) {
      var curve = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var thicknessScale = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      if (depth === 0) return null;
      var branches = [];

      // More varied branch counts for a more natural, non-symmetric look
      var numBranches = 0;
      if (depth > 1) {
        var rand = Math.random();
        if (depth === 7) {
          // 第一層分出 4 根主枝 (Trunk)
          numBranches = 4;
        } else if (depth === 6) {
          // 第二層分枝數量
          numBranches = rand > 0.5 ? 3 : 4;
        } else if (depth > 5) {
          numBranches = rand > 0.3 ? 2 : 3;
        } else if (depth > 2) {
          numBranches = rand > 0.4 ? 3 : 2;
        } else {
          numBranches = rand > 0.3 ? 2 : 3;
        }
      }
      for (var i = 0; i < numBranches; i++) {
        // 90% layer grows upward: tighten spread and angle constraints
        var spread = 20 + Math.random() * 30;
        if (depth === 6) spread = 35 + Math.random() * 25; // Layer 2
        else if (depth === 5) spread = 30 + Math.random() * 20; // Layer 3: Increase spread to prevent sticking
        else if (depth >= 2) spread = 15 + Math.random() * 25;
        var angleOffset = 0;
        if (numBranches === 1) {
          angleOffset = Math.random() * 20 - 10;
        } else if (numBranches === 2) {
          angleOffset = (i === 0 ? -spread / 2 : spread / 2) + (Math.random() * 15 - 7.5);
        } else {
          var step = spread / (numBranches - 1);
          angleOffset = -spread / 2 + i * step + (Math.random() * 10 - 5);
        }
        var newAngle = angle + angleOffset;
        if (depth >= 2) newAngle = Math.max(-35, Math.min(35, newAngle));
        var lengthScale = 0.58 + Math.random() * 0.22;
        // Shorten Layer 2 (depth 6) to improve proportions
        if (depth === 6) lengthScale *= 0.75;
        // Shorten layers 5, 6, 7 (depth 3, 2, 1) to keep tree on screen
        if (depth <= 3) lengthScale *= 0.7;

        // Upward bias: central branches (angle near 0) grow longer to avoid flat top
        var upwardBoost = Math.cos(newAngle * Math.PI / 180);
        lengthScale *= 1 + Math.pow(upwardBoost, 4) * 0.35;
        if (depth === 7) lengthScale = 0.45 + Math.random() * 0.15;
        var newLength = length * lengthScale;
        var nextCurve = Math.random() * 6 - 3;
        var nextThicknessScale = 0.7 + Math.random() * 0.6;
        var staggerOffset = 1.0; // 預設從頂端長出

        if (depth === 7) {
          nextThicknessScale = 1.6;
          // Raise branch starting points to 85% - 94% of trunk height
          // This keeps the lower trunk clean and pushes the canopy higher
          staggerOffset = 0.85 + i * 0.03;
        } else if (depth === 6) {
          // Layer 2 branches: slightly stagger Layer 3 children to avoid sticking
          staggerOffset = 0.88 + i * 0.03;
          if (i >= 3) nextThicknessScale *= 0.6;
        }
        branches.push(_objectSpread(_objectSpread({}, generateTree(depth - 1, newAngle, newLength, nextCurve, nextThicknessScale)), {}, {
          staggerOffset: staggerOffset
        }));
      }

      // Add extra fine branches (twigs) for depths 3-6 to increase leaf density
      // Removed depth 7 (trunk) to keep the lower section clean
      if (depth >= 3 && depth <= 6) {
        var numTwigs = 1 + Math.floor(Math.random() * 2);
        for (var t = 0; t < numTwigs; t++) {
          var twigAngle = angle + (Math.random() * 80 - 40);
          var twigLength = length * (0.25 + Math.random() * 0.2);
          var twigThickness = thicknessScale * 0.4;
          var twigCurve = Math.random() * 10 - 5;
          branches.push(_objectSpread(_objectSpread({}, generateTree(depth - 1, twigAngle, twigLength, twigCurve, twigThickness)), {}, {
            staggerOffset: 0.4 + Math.random() * 0.5 // Grow from along the branch
          }));
        }
      }
      var result = {
        angle: angle,
        length: length,
        branches: branches,
        curve: curve,
        thicknessScale: thicknessScale,
        id: Math.random()
      };

      // 為樹幹 (depth 7) 預先計算根部與鋸齒數據，防止生長時抖動
      if (depth === 7) {
        var numRoots = 7 + Math.floor(Math.random() * 3);
        var roots = [];
        for (var r = 0; r < numRoots; r++) {
          var rt = r / (numRoots - 1);
          var rAngle = rt < 0.5 ? -30 - Math.random() * 40 : 30 + Math.random() * 40;
          var rLen = 12 + Math.random() * 18;
          var subAngle = rAngle + (Math.random() * 50 - 25);
          var subLen = rLen * (0.5 + Math.random() * 0.3);
          roots.push({
            rt: rt,
            rAngle: rAngle,
            rLen: rLen,
            subAngle: subAngle,
            subLen: subLen
          });
        }
        result.roots = roots;
        result.topNoise = Array.from({
          length: 6
        }, function () {
          return Math.random() * 3 - 1.5;
        });
        result.bottomNoise = Math.random() * 2.5;
      }
      return result;
    };
    // Increase depth to 8 for more detail and density
    // 根據螢幕寬度動態調整起始長度，手機與平板版調大，桌面版維持 60 以防頂部遮擋
    var isLandscape = window.innerWidth > window.innerHeight;
    var initialLength = isLandscape ? window.innerHeight < 500 ? 120 : 100 : window.innerWidth < 640 ? 85 : window.innerWidth < 1024 ? 75 : 60;
    treeStructureRef.current = generateTree(7, 0, initialLength, 0);
  }
  useEffect(function () {
    var audio = new Audio(emotionAsset(AUDIO_URL + 'music2.mp3'));
    audio.loop = true;
    audioRef.current = audio;
    var handleKeyDown = function handleKeyDown(e) {
      if (e.code === 'Space') {
        e.preventDefault();
        setIsPressing(true);
        setMusicStarted(true);
      }
    };
    var handleKeyUp = function handleKeyUp(e) {
      if (e.code === 'Space') {
        setIsPressing(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return function () {
      audio.pause();
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
  useEffect(function () {
    if (musicStarted && !isComplete) {
      if (audioRef.current) {
        audioRef.current.volume = 1;
        audioRef.current.play()["catch"](function (e) {
          return console.log(e);
        });
      }
    } else if (isComplete) {
      // Fade out music instead of stopping suddenly
      var audio = audioRef.current;
      if (audio) {
        var vol = audio.volume;
        if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
        fadeIntervalRef.current = setInterval(function () {
          vol -= 0.05;
          if (vol <= 0) {
            if (audioRef.current) {
              audioRef.current.volume = 0;
              audioRef.current.pause();
            }
            if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
            fadeIntervalRef.current = null;
          } else {
            if (audioRef.current) audioRef.current.volume = Math.max(0, vol);
          }
        }, 200);
      }
    } else {
      var _audioRef$current;
      (_audioRef$current = audioRef.current) === null || _audioRef$current === void 0 || _audioRef$current.pause();
    }
  }, [musicStarted, isComplete]);
  useEffect(function () {
    var handleGlobalUp = function handleGlobalUp() {
      return setIsPressing(false);
    };
    window.addEventListener('mouseup', handleGlobalUp);
    window.addEventListener('touchend', handleGlobalUp);
    window.addEventListener('touchcancel', handleGlobalUp);
    return function () {
      window.removeEventListener('mouseup', handleGlobalUp);
      window.removeEventListener('touchend', handleGlobalUp);
      window.removeEventListener('touchcancel', handleGlobalUp);
    };
  }, []);
  useEffect(function () {
    var frame;
    var drawBranch = function drawBranch(ctx, branch, x, y, currentAngle, currentGrowth, depth, currentSway) {
      if (!branch) return;
      var getThreshold = function getThreshold(d, sOffset) {
        if (d === 8) return 0;
        // 如果有錯位偏移，根據偏移量動態計算啟動時間
        // 確保分枝在樹幹長到該位置時準時冒出
        if (d === 7 && sOffset) return sOffset * 0.1;
        if (d === 7) return 0.08;
        if (d >= 2) return 0.08 + (7 - d) * 0.05;
        return 0.45;
      };
      var branchThreshold = getThreshold(depth, branch.staggerOffset);
      var growthSpeed = depth > 1 ? 6 : 1.8;
      var localGrowth = Math.max(0, Math.min(1, (currentGrowth - branchThreshold) * growthSpeed));
      if (localGrowth <= 0) return;
      var angleOffset = depth < 6 ? currentSway * (6 - depth) * 0.5 : 0;
      var angleRad = (currentAngle + branch.angle + angleOffset) * Math.PI / 180;
      var endX = x + branch.length * Math.sin(angleRad) * localGrowth;
      var endY = y - branch.length * Math.cos(angleRad) * localGrowth;
      var midX = x + (endX - x) / 2 + Math.cos(angleRad + Math.PI / 2) * (branch.curve || 0) * localGrowth;
      var midY = y + (endY - y) / 2 + Math.sin(angleRad + Math.PI / 2) * (branch.curve || 0) * localGrowth;

      // Draw Branch
      ctx.beginPath();

      // Dynamic Thickening: 隨生長進度平滑增加粗度
      // 調整基礎厚度，確保銜接處足夠粗壯
      var nextLayerWidth = (7 * 0.8 + 0.5) * 1.6; // 匹配加厚後的第二層
      var trunkBaseWidth = (8 * 0.8 + 0.5) * 2.2;
      var baseWidth = (depth * 0.8 + 0.5) * (branch.thicknessScale || 1);
      var growthFactor = 0.5 + 0.5 * localGrowth;
      ctx.lineWidth = baseWidth * growthFactor;
      ctx.lineCap = "round";
      ctx.strokeStyle = depth > 4 ? "#3E2723" : depth > 2 ? "#795548" : "#4CAF50";
      if (depth === 8) {
        // 為第一層樹幹實現平滑的手繪形狀
        var segments = 30; // 增加片段以提高平滑度
        var leftPoints = [];
        var rightPoints = [];

        // 預先計算完整路徑參數以實現平滑生長
        var fullAngleRad = (currentAngle + branch.angle) * Math.PI / 180;
        var fullEndX = x + branch.length * Math.sin(fullAngleRad);
        var fullEndY = y - branch.length * Math.cos(fullAngleRad);
        var fullMidX = x + (fullEndX - x) / 2 + Math.cos(fullAngleRad + Math.PI / 2) * (branch.curve || 0);
        var fullMidY = y + (fullEndY - y) / 2 + Math.sin(fullAngleRad + Math.PI / 2) * (branch.curve || 0);
        for (var i = 0; i <= segments; i++) {
          // 使用 localGrowth 作為上限，並均勻分佈片段，實現平滑生長
          var t = i / segments * localGrowth;

          // 計算中心路徑
          var tx = (1 - t) * (1 - t) * x + 2 * (1 - t) * t * fullMidX + t * t * fullEndX;
          var ty = (1 - t) * (1 - t) * y + 2 * (1 - t) * t * fullMidY + t * t * fullEndY;

          // 底部擴張 (Flare)：底部較寬，頂部精確收縮到與下一層分枝一致
          var currentTaperWidth = trunkBaseWidth * (1 - t) + nextLayerWidth * t;
          var flare = (1 - t) * (1 - t) * 15;
          var currentHalfWidth = currentTaperWidth / 2 * growthFactor + flare;
          var noiseL = Math.sin(branch.id * 1000 + i * 0.8) * 0.5;
          var noiseR = Math.cos(branch.id * 500 + i * 0.8) * 0.5;
          leftPoints.push({
            x: tx - currentHalfWidth + noiseL,
            y: ty
          });
          rightPoints.push({
            x: tx + currentHalfWidth + noiseR,
            y: ty
          });
        }
        if (leftPoints.length > 1) {
          ctx.beginPath();
          // 底部表面：使用預設噪點，消除抖動
          ctx.moveTo(leftPoints[0].x, leftPoints[0].y);
          var bottomMidX = (leftPoints[0].x + rightPoints[0].x) / 2;
          var bottomMidY = (leftPoints[0].y + rightPoints[0].y) / 2 + (branch.bottomNoise || 0) * localGrowth;
          ctx.quadraticCurveTo(bottomMidX, bottomMidY, rightPoints[0].x, rightPoints[0].y);

          // 右側邊緣
          for (var _i = 1; _i < rightPoints.length; _i++) ctx.lineTo(rightPoints[_i].x, rightPoints[_i].y);

          // 頂部表面：使用預設噪點，且生長初期就可見
          var topR = rightPoints[rightPoints.length - 1];
          var topL = leftPoints[leftPoints.length - 1];
          var steps = 5;
          for (var j = 1; j <= steps; j++) {
            var jt = j / steps;
            var jx = topR.x * (1 - jt) + topL.x * jt;
            // 噪點隨生長進度縮放
            var noise = (branch.topNoise ? branch.topNoise[j] : 0) * localGrowth;
            var jy = topR.y * (1 - jt) + topL.y * jt + noise;
            ctx.lineTo(jx, jy);
          }

          // 左側邊緣
          for (var _i2 = leftPoints.length - 2; _i2 >= 0; _i2--) ctx.lineTo(leftPoints[_i2].x, leftPoints[_i2].y);
          ctx.closePath();
          ctx.fillStyle = "#3E2723";
          ctx.fill();
          ctx.strokeStyle = "#1A0F0D";
          ctx.lineWidth = 1;
          ctx.stroke();

          // 根部細節：使用預先計算的數據，消除抖動
          if (localGrowth > 0.05 && branch.roots) {
            var rootG = Math.min(1, (localGrowth - 0.05) * 3);
            ctx.strokeStyle = "#1A0F0D";
            branch.roots.forEach(function (root) {
              // 起點 (在底部邊緣)
              var rx = leftPoints[0].x * (1 - root.rt) + rightPoints[0].x * root.rt;
              var ry = leftPoints[0].y * (1 - root.rt) + rightPoints[0].y * root.rt;
              var rLen = root.rLen * rootG;
              var rAngleRad = root.rAngle * Math.PI / 180;
              var rex = rx + rLen * Math.sin(rAngleRad);
              var rey = ry + rLen * Math.cos(rAngleRad);

              // 繪製主根，帶有收縮效果
              var rootSegments = 6;
              var lastRx = rx;
              var lastRy = ry;
              for (var _i3 = 1; _i3 <= rootSegments; _i3++) {
                var _t = _i3 / rootSegments;
                var currX = rx + (rex - rx) * _t;
                var currY = ry + (rey - ry) * _t;

                // 基部較厚 (2.5)，末端較細 (0.5)
                var taper = 2.5 * (1 - _t * 0.8);
                ctx.lineWidth = taper * growthFactor;
                ctx.beginPath();
                ctx.moveTo(lastRx, lastRy);
                ctx.lineTo(currX, currY);
                ctx.stroke();
                lastRx = currX;
                lastRy = currY;
              }

              // 根部二級分支
              if (rootG > 0.5) {
                var subG = (rootG - 0.5) * 2;
                var subLen = root.subLen * subG;
                var subAngleRad = root.subAngle * Math.PI / 180;

                // 從主根中間分叉
                var rmx = rx + (rex - rx) * 0.6;
                var rmy = ry + (rey - ry) * 0.6;
                ctx.lineWidth = 0.8 * growthFactor;
                ctx.beginPath();
                ctx.moveTo(rmx, rmy);
                ctx.lineTo(rmx + subLen * Math.sin(subAngleRad), rmy + subLen * Math.cos(subAngleRad));
                ctx.stroke();
              }
            });
          }
        }
      } else {
        // 普通樹枝繪製：僅在末端分枝（無子代或深度極低）時進行尖端收縮
        // 這樣可以確保層與層之間的銜接處厚度一致，看起來更自然
        var hasChildren = branch.branches && branch.branches.length > 0;
        var shouldTaper = !hasChildren || depth <= 2;
        if (shouldTaper) {
          var branchSegments = 8;
          var lastX = x;
          var lastY = y;
          for (var _i4 = 1; _i4 <= branchSegments; _i4++) {
            var _t2 = _i4 / branchSegments;
            var _tx = _t2 < 0.5 ? x + (midX - x) * (_t2 * 2) : midX + (endX - midX) * ((_t2 - 0.5) * 2);
            var _ty = _t2 < 0.5 ? y + (midY - y) * (_t2 * 2) : midY + (endY - midY) * ((_t2 - 0.5) * 2);

            // 寬度從 baseWidth 漸變到末端
            var taper = 1 - _t2 * 0.85;
            ctx.lineWidth = Math.max(0.6, baseWidth * taper * growthFactor);
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(_tx, _ty);
            ctx.stroke();
            lastX = _tx;
            lastY = _ty;
          }
        } else {
          // 中間分枝：不收縮，保持厚度以連接下一層
          ctx.lineWidth = baseWidth * growthFactor;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(midX, midY);
          ctx.lineTo(endX, endY);
          ctx.stroke();
        }
      }

      // Draw Children
      branch.branches.forEach(function (b) {
        var startX = endX;
        var startY = endY;

        // 如果有錯位偏移 (主要用於樹幹到分枝的過渡)
        if (b.staggerOffset && b.staggerOffset < 1.0) {
          var _t3 = b.staggerOffset;
          // 使用二次貝塞爾曲線公式計算偏移起點
          startX = (1 - _t3) * (1 - _t3) * x + 2 * (1 - _t3) * _t3 * midX + _t3 * _t3 * endX;
          startY = (1 - _t3) * (1 - _t3) * y + 2 * (1 - _t3) * _t3 * midY + _t3 * _t3 * endY;
        }
        drawBranch(ctx, b, startX, startY, currentAngle + branch.angle, currentGrowth, depth - 1, currentSway);
      });

      // Draw Leaves
      // User requested no leaves on layer 3 (depth 5) and layer 4 (depth 4). 
      // Leaves now start from layer 5 (depth 3) down to layer 7 (depth 1).
      if (depth <= 3) {
        // 調整葉子生長節奏：30秒 (0.5) 開始冒芽，55秒 (0.9) 達到最茂盛
        var leafOpacity = Math.max(0, Math.min(1, (currentGrowth - 0.5) * 2.5)) * localGrowth;
        if (leafOpacity > 0) {
          ctx.save();
          ctx.globalAlpha = leafOpacity * 0.6;
          // Color variation based on depth to add depth and avoid "broccoli" look
          ctx.fillStyle = depth <= 2 ? "#A5D6A7" : "#81C784";
          ctx.beginPath();
          ctx.arc(endX, endY, depth <= 2 ? 6 : 4, 0, Math.PI * 2);
          ctx.fill();

          // Lush clusters for all leafy layers (depth 1-3)
          if (depth <= 3) {
            ctx.globalAlpha = leafOpacity * 0.5;
            ctx.fillStyle = "#C8E6C9";
            ctx.beginPath();
            ctx.arc(endX + 5, endY - 4, 3, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#81C784";
            ctx.beginPath();
            ctx.arc(endX - 5, endY + 3, 3.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = leafOpacity * 0.4;
            ctx.fillStyle = "#66BB6A";
            ctx.beginPath();
            ctx.arc(endX + 3, endY + 5, 2.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#4CAF50";
            ctx.beginPath();
            ctx.arc(endX - 3, endY - 5, 2.8, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#A5D6A7";
            ctx.beginPath();
            ctx.arc(endX + 7, endY, 2.2, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#81C784";
            ctx.beginPath();
            ctx.arc(endX - 7, endY, 2.2, 0, Math.PI * 2);
            ctx.fill();
          }

          // Extra lushness for the very tips and the starting leafy layer
          if (depth === 1 || depth === 3) {
            ctx.globalAlpha = leafOpacity * 0.5;
            ctx.fillStyle = "#A5D6A7";
            ctx.beginPath();
            ctx.arc(endX + 8, endY + 2, 2.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#C8E6C9";
            ctx.beginPath();
            ctx.arc(endX - 8, endY - 2, 3, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = leafOpacity * 0.4;
            ctx.fillStyle = "#E8F5E9";
            ctx.beginPath();
            ctx.arc(endX, endY - 8, 2.5, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        }
      }
    };
    var animate = function animate(time) {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      var delta = time - lastTimeRef.current;
      lastTimeRef.current = time;
      if (musicStarted && !isComplete) {
        // Update cycle time (0-10s cycle for slower breathing)
        cycleRef.current = (cycleRef.current + delta) % 10000;
        setCycleTime(cycleRef.current / 1000);

        // Grow whenever pressing
        if (isPressing) {
          // Grow 60s of total pressing time to full (1.0)
          growthRef.current = Math.min(1, growthRef.current + delta / 60000);
          setGrowth(growthRef.current);
          if (growthRef.current >= 1) {
            setIsComplete(true);
          }
        }
      }

      // Sway animation
      var currentSway = Math.sin(time / 1500) * 2; // Slower sway
      // Canvas Drawing
      var canvas = canvasRef.current;
      if (canvas && treeReadyRef.current) {
        if (treeRendererRef.current) {
          treeRendererRef.current.update(growthRef.current, time);
        } else {
          var ctx = canvas.getContext('2d');
          var rect = canvas.getBoundingClientRect();

          // Match resolution to display size for sharpness
          var dpr = window.devicePixelRatio || 1;
          if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
          }
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.save();
          ctx.scale(dpr, dpr);

          // Map SVG coordinate system to Canvas
          // SVG: viewBox="-200 -450 400 500"
          var scale = rect.width / 400;
          ctx.translate(rect.width / 2, rect.height * 0.85);
          ctx.scale(scale, scale);
          if (treeStructureRef.current) {
            drawBranch(ctx, treeStructureRef.current, 0, 0, 0, growthRef.current, 8, currentSway);
          }
          ctx.restore();
        }
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return function () {
      return cancelAnimationFrame(frame);
    };
  }, [isPressing, isComplete, musicStarted]);
  var isInhalePhase = cycleTime < 5;
  var glowScale = musicStarted && !isComplete ? isInhalePhase ? cycleTime / 5 : 1 - (cycleTime - 5) / 5 : 0;
  var showGlow = growth > 0;
  var getGuidance = function getGuidance() {
    if (isComplete) return {
      line1: "練習完成",
      line2: "小樹已經茂盛成長，感受此刻的平靜"
    };
    if (!musicStarted) return {
      line1: "準備開始",
      line2: "按住下方的影子，讓小樹隨你的呼吸茁壯成長"
    };
    return {
      line1: isInhalePhase ? "吸氣" : "呼氣",
      line2: ""
    };
  };
  var _getGuidance = getGuidance(),
    line1 = _getGuidance.line1,
    line2 = _getGuidance.line2;
  return /*#__PURE__*/React.createElement("div", {
    className: "tree-breathing-tool body-scan-container !justify-start !pt-0 animate-[gentleFadeIn_0.8s_ease-in-out]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "body-image-wrapper !max-h-[60vh] sm:!max-h-[45vh] [@media(orientation:landscape)]:!max-h-[72vh] [@media(orientation:landscape)]:!-mt-8 !mt-0 !aspect-[4/5] relative"
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    className: "absolute inset-0 w-full h-full drop-shadow-xl pointer-events-none",
    style: {
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "-200 -460 400 500",
    className: "w-full h-full overflow-visible relative",
    style: {
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: "shadowBlur",
    x: "-50%",
    y: "-50%",
    width: "200%",
    height: "200%"
  }, /*#__PURE__*/React.createElement("feGaussianBlur", {
    "in": "SourceGraphic",
    stdDeviation: "10"
  }))), /*#__PURE__*/React.createElement("ellipse", {
    key: "interaction-shadow",
    cx: "0",
    cy: "-10",
    rx: "140",
    ry: "30",
    fill: isPressing ? "#34D399" : "#000",
    opacity: isPressing ? "0.2" : "0.1",
    filter: "url(#shadowBlur)",
    style: {
      cursor: 'pointer',
      transition: 'fill 0.5s ease, opacity 0.5s ease',
      userSelect: 'none',
      touchAction: 'none',
      WebkitUserSelect: 'none',
      WebkitTouchCallout: 'none'
    },
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();
      setIsPressing(true);
      setMusicStarted(true);
    },
    onContextMenu: function onContextMenu(e) {
      return e.preventDefault();
    },
    onTouchStart: function onTouchStart(e) {
      e.preventDefault();
      setIsPressing(true);
      setMusicStarted(true);
    },
    onTouchMove: function onTouchMove(e) {
      return e.preventDefault();
    }
  }), showGlow && /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "treeGlow",
    cx: "50%",
    cy: "50%",
    r: "50%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#FEF08A",
    stopOpacity: "0.6"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#FEF08A",
    stopOpacity: "0"
  }))), showGlow && /*#__PURE__*/React.createElement("circle", {
    cx: "0",
    cy: "-200",
    r: 250 * (0.05 + 0.95 * glowScale),
    fill: "url(#treeGlow)"
  })), musicStarted && /*#__PURE__*/React.createElement("div", {
    className: "tree-breathing-progress absolute bottom-[-24px] [@media(orientation:landscape)]:bottom-[-12px] left-1/2 -translate-x-1/2 w-48 h-1 bg-slate-200/50 rounded-full overflow-hidden backdrop-blur-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]",
    style: {
      width: "".concat(growth * 100, "%")
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tree-guidance-footer guidance-area flex flex-col items-center justify-center mt-0 sm:mt-2 min-h-[80px] sm:min-h-[100px]"
  }, /*#__PURE__*/React.createElement("div", {
    key: line1 + line2,
    className: "flex flex-col items-center gap-2 animate-[slowFadeInOut_5s_ease-in-out]"
  }, /*#__PURE__*/React.createElement("p", {
    className: "".concat(isInhalePhase ? 'text-emerald-600' : 'text-sky-600', " text-2xl sm:text-3xl font-black tracking-widest whitespace-nowrap transition-colors duration-1000")
  }, line1), line2 && /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 text-lg sm:text-xl font-bold leading-relaxed px-2 whitespace-nowrap"
  }, line2))));
}
function BodyScanTool() {
  var _useState57 = useState(null),
    _useState58 = _slicedToArray(_useState57, 2),
    selectedPart = _useState58[0],
    setSelectedPart = _useState58[1];
  var _useState59 = useState(0),
    _useState60 = _slicedToArray(_useState59, 2),
    stage = _useState60[0],
    setStage = _useState60[1];
  var _useState61 = useState(false),
    _useState62 = _slicedToArray(_useState61, 2),
    isPlaying = _useState62[0],
    setIsPlaying = _useState62[1];
  var audioRef = useRef(null);
  var playbackRequestRef = useRef(0);
  var playSelectedAudio = function playSelectedAudio(audio) {
    var request = ++playbackRequestRef.current;
    setIsPlaying(true);
    audio.play().then(function () {
      if (request === playbackRequestRef.current) setIsPlaying(!audio.paused);
    })["catch"](function (error) {
      if (request !== playbackRequestRef.current) return;
      setIsPlaying(false);
      if (error.name !== 'AbortError') console.error('Audio play failed:', error);
    });
  };
  var fadeIntervalRef = useRef(null);
  var bodyCanvasRef = useRef(null);
  var bodyRendererRef = useRef(null);
  var selectedBodyRef = useRef(null);
  var _useState63 = useState(false),
    _useState64 = _slicedToArray(_useState63, 2),
    bodyReady = _useState64[0],
    setBodyReady = _useState64[1];
  var _useState65 = useState({}),
    _useState66 = _slicedToArray(_useState65, 2),
    bodyPoints = _useState66[0],
    setBodyPoints = _useState66[1];
  selectedBodyRef.current = (selectedPart === null || selectedPart === void 0 ? void 0 : selectedPart.id) || null;
  useEffect(function () {
    var cancelled = false;
    window.emotionBodyReady.then(function (_ref6) {
      var createBody = _ref6.createBody;
      return createBody(bodyCanvasRef.current, function (points) {
        if (!cancelled) setBodyPoints(points);
      });
    }).then(function (renderer) {
      if (cancelled) {
        renderer.dispose();
        return;
      }
      bodyRendererRef.current = renderer;
      renderer.setSelected(selectedBodyRef.current);
      setBodyReady(true);
    })["catch"](function (error) {
      return console.warn('Body figure unavailable; using original image', error);
    });
    return function () {
      var _bodyRendererRef$curr;
      cancelled = true;
      (_bodyRendererRef$curr = bodyRendererRef.current) === null || _bodyRendererRef$curr === void 0 || _bodyRendererRef$curr.dispose();
    };
  }, []);
  useEffect(function () {
    var _bodyRendererRef$curr2;
    (_bodyRendererRef$curr2 = bodyRendererRef.current) === null || _bodyRendererRef$curr2 === void 0 || _bodyRendererRef$curr2.setSelected((selectedPart === null || selectedPart === void 0 ? void 0 : selectedPart.id) || null);
  }, [selectedPart]);
  var MUSIC_BASE_URL = AUDIO_URL;
  var BODY_PARTS = [{
    id: 'head',
    name: '頭部',
    top: '8.4%',
    left: '46.1%',
    music: 'head-piano-v4.m4a'
  }, {
    id: 'shoulders',
    name: '肩膀',
    top: '30.6%',
    left: '32.0%',
    music: 'music6.mp3'
  }, {
    id: 'chest',
    name: '胸口',
    top: '39.0%',
    left: '57.9%',
    music: 'music1.mp3'
  }, {
    id: 'stomach',
    name: '胃部',
    top: '56.4%',
    left: '50.4%',
    music: 'music4.mp3'
  }, {
    id: 'hands',
    name: '手部',
    top: '55.0%',
    left: '18.9%',
    music: 'music3.mp3'
  }, {
    id: 'feet',
    name: '腳部',
    top: '89.6%',
    left: '62.9%',
    music: 'music5.mp3'
  }];
  useEffect(function () {
    var audio = new Audio();
    audio.loop = false; // Disable loop to allow music to end naturally
    audioRef.current = audio;
    return function () {
      playbackRequestRef.current++;
      audio.pause();
      audioRef.current = null;
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    };
  }, []);
  useEffect(function () {
    if (!selectedPart) {
      setStage(0);
      return;
    }

    // Clear any existing fade interval
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }

    // Switch music and play
    if (audioRef.current) {
      audioRef.current.volume = 1;
      audioRef.current.src = emotionAsset(MUSIC_BASE_URL + selectedPart.music);
      playSelectedAudio(audioRef.current);
    }
    setStage(0);
    var stage1Timer = setTimeout(function () {
      return setStage(1);
    }, 10000);
    var stage2Timer = setTimeout(function () {
      return setStage(2);
    }, 20000);
    var stage3Timer = setTimeout(function () {
      return setStage(3);
    }, 30000);
    var stage4Timer = setTimeout(function () {
      return setStage(4);
    }, 40000);
    var handleTimeUpdate = function handleTimeUpdate() {
      if (audioRef.current) {
        var audio = audioRef.current;
        var remainingTime = audio.duration - audio.currentTime;

        // Start fade out when 20 seconds are remaining
        if (remainingTime <= 20 && !fadeIntervalRef.current && !audio.paused) {
          var startVolume = audio.volume;
          var duration = remainingTime * 1000; // Use remaining time for fade duration
          var steps = 400;
          var interval = duration / steps;
          var volumeStep = startVolume / steps;
          var step = 0;
          fadeIntervalRef.current = setInterval(function () {
            step++;
            if (step >= steps) {
              audio.pause();
              audio.volume = 1;
              setIsPlaying(false);
              clearInterval(fadeIntervalRef.current);
              fadeIntervalRef.current = null;
              setSelectedPart(null); // End the session when music ends
            } else {
              audio.volume = Math.max(0, startVolume - volumeStep * step);
            }
          }, interval);
        }
      }
    };
    var handleEnded = function handleEnded() {
      setSelectedPart(null);
      setIsPlaying(false);
    };
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.addEventListener('ended', handleEnded);
    }
    return function () {
      var _audioRef$current2;
      playbackRequestRef.current++;
      (_audioRef$current2 = audioRef.current) === null || _audioRef$current2 === void 0 || _audioRef$current2.pause();
      clearTimeout(stage1Timer);
      clearTimeout(stage2Timer);
      clearTimeout(stage3Timer);
      clearTimeout(stage4Timer);
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        audioRef.current.removeEventListener('ended', handleEnded);
      }
    };
  }, [selectedPart]);
  var toggleMusic = function toggleMusic() {
    if (!audioRef.current || !audioRef.current.src) return;
    if (isPlaying) {
      playbackRequestRef.current++;
      audioRef.current.pause();
      setIsPlaying(false);
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
        fadeIntervalRef.current = null;
      }
      audioRef.current.volume = 1;
    } else {
      audioRef.current.volume = 1;
      playSelectedAudio(audioRef.current);
    }
  };
  var BODY_PARTS_TEXT = {
    head: ["覺察額頭肌肉現在的高低位置", "留意光線在眼皮外的變化", "想像頭部像氣球輕輕往上飄", "感受額頭皮膚向兩旁慢慢舒展", "閉上雙眼，保持平靜，靜候音樂淡出"],
    shoulders: ["覺察肩膀目前的高低位置", "留意衣物接觸皮膚的觸感", "感受肩膀隨著呼氣時慢慢下降", "想像肩膀像冰塊在陽光下融化", "閉上雙眼，保持平靜，靜候音樂淡出"],
    chest: ["感受呼吸像海浪緩緩推向沙灘", "留意每一次吸氣進出的路徑", "呼吸像潮汐一樣平穩升起落下", "想像胸口內部空間變得更寬闊", "閉上雙眼，保持平靜，靜候音樂淡出"],
    stomach: ["感受肚子隨呼吸慢慢變大", "留意腹部肌肉收縮的過程", "覺察呼吸在肚子停留的時間", "想像溫暖的陽光停留在中心", "閉上雙眼，保持平靜，靜候音樂淡出"],
    hands: ["感受手掌目前微溫的熱度", "覺察雙手放在支撐物上的重量", "雙手像羽毛掉落在身體上方", "留意指縫之間流過的空氣", "閉上雙眼，保持平靜，靜候音樂淡出"],
    feet: ["感受腳底踩在地面上的壓力", "覺察雙腿支撐全身的感覺", "腳掌像大樹根部鑽進泥土", "想像地面像地毯支撐著你", "閉上雙眼，保持平靜，靜候音樂淡出"]
  };
  var getGuidanceText = function getGuidanceText() {
    if (!selectedPart) return "選擇一個身體部位，感受身體的變化";
    return BODY_PARTS_TEXT[selectedPart.id][stage];
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "body-scan-container body-sensation-tool animate-[gentleFadeIn_0.8s_ease-in-out] relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-4 right-[12%] sm:right-0 z-50 p-2 sm:p-4 mobile-landscape-music"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: toggleMusic,
    className: "w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 transform active:scale-95 backdrop-blur-sm ".concat(isPlaying ? 'bg-emerald-100/40 text-emerald-600 shadow-[0_8px_32px_rgba(16,185,129,0.15)]' : 'bg-stone-200/30 text-stone-500 shadow-sm'),
    title: isPlaying ? "關閉音樂" : "開啟音樂"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "w-7 h-7"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 18V5l12-2v13"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "18",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "16",
    r: "3"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "body-image-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "body-figure relative h-full aspect-[706/1000]",
    "data-ready": bodyReady
  }, /*#__PURE__*/React.createElement("img", {
    src: emotionAsset("".concat(BASE_URL, "body-mist-d.png")),
    alt: "Body Scan",
    className: "body-image",
    style: {
      opacity: bodyReady ? 0 : 1,
      transition: 'opacity 0.8s'
    },
    referrerPolicy: "no-referrer"
  }), /*#__PURE__*/React.createElement("canvas", {
    ref: bodyCanvasRef,
    className: "absolute inset-0 w-full h-full pointer-events-none",
    role: "img",
    "aria-label": "\u67D4\u9727\u8EAB\u9AD4\u4EBA\u5F62",
    style: {
      opacity: bodyReady ? 1 : 0,
      transition: 'opacity 0.8s'
    }
  }), BODY_PARTS.map(function (part) {
    var _bodyPoints$part$id, _bodyPoints$part$id2;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": part.name,
      "aria-pressed": (selectedPart === null || selectedPart === void 0 ? void 0 : selectedPart.id) === part.id,
      key: part.id,
      onClick: function onClick() {
        return setSelectedPart(part);
      },
      className: "body-hotspot absolute cursor-pointer flex items-center justify-center",
      style: {
        top: ((_bodyPoints$part$id = bodyPoints[part.id]) === null || _bodyPoints$part$id === void 0 ? void 0 : _bodyPoints$part$id.top) || part.top,
        left: ((_bodyPoints$part$id2 = bodyPoints[part.id]) === null || _bodyPoints$part$id2 === void 0 ? void 0 : _bodyPoints$part$id2.left) || part.left,
        width: '60px',
        height: '60px',
        transform: 'translate(-50%, -50%)',
        zIndex: 10
      }
    }, !bodyReady && /*#__PURE__*/React.createElement("span", {
      className: "body-marker",
      "aria-hidden": "true"
    }), !bodyReady && (selectedPart === null || selectedPart === void 0 ? void 0 : selectedPart.id) === part.id && /*#__PURE__*/React.createElement("div", {
      className: "absolute w-[140px] h-[140px] rounded-full animate-[breathing_4s_ease-in-out_infinite] pointer-events-none",
      style: {
        background: 'radial-gradient(circle, rgba(241, 246, 210, 0.24) 0%, rgba(178, 219, 194, 0.10) 40%, transparent 72%)',
        boxShadow: '0 0 30px rgba(164, 210, 179, 0.12)'
      }
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "body-sensation-footer guidance-area flex flex-col items-center justify-center"
  }, /*#__PURE__*/React.createElement("p", {
    key: selectedPart ? "".concat(selectedPart.id, "-").concat(stage) : 'none',
    className: "text-slate-700 text-xl sm:text-2xl font-bold leading-relaxed px-2 animate-[fadeInUp_0.5s_ease-out]"
  }, getGuidanceText()), selectedPart && /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3 mt-4"
  }, [0, 1, 2, 3, 4].map(function (i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "w-3 h-3 rounded-full transition-all duration-500 ".concat(i < stage ? 'bg-slate-400' : i === stage ? 'bg-emerald-500 animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_infinite] scale-150 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-slate-200')
    });
  }))));
}
function EmotionMeterTool(_ref7) {
  var onBack = _ref7.onBack,
    show = _ref7.show;
  var _useState67 = useState(1),
    _useState68 = _slicedToArray(_useState67, 2),
    level = _useState68[0],
    setLevel = _useState68[1];
  var currentState = EMOTION_LEVELS.find(function (e) {
    return e.id === level;
  }) || EMOTION_LEVELS[0];
  var getGradient = function getGradient(val) {
    if (val <= 1) return 'from-green-400 to-green-200';
    if (val <= 2) return 'from-teal-400 to-teal-200';
    if (val <= 3) return 'from-blue-400 to-blue-200';
    if (val <= 4) return 'from-yellow-400 to-yellow-200';
    if (val <= 5) return 'from-indigo-500 to-indigo-300';
    if (val <= 6) return 'from-orange-600 to-orange-400';
    return 'from-red-700 to-red-500';
  };
  var currentGradient = getGradient(level);
  var getSolidColor = function getSolidColor(val) {
    if (val <= 1) return '#4ADE80';
    if (val <= 2) return '#2DD4BF';
    if (val <= 3) return '#60A5FA';
    if (val <= 4) return '#EAB308';
    if (val <= 5) return '#6366F1';
    if (val <= 6) return '#EA580C';
    return '#B91C1C';
  };
  var solidColor = getSolidColor(level);
  var heightPercentage = level / 7 * 100;
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ".concat(currentGradient, " p-4 font-main text-slate-800 overflow-hidden transition-opacity duration-700 ease-in-out select-none ").concat(show ? 'opacity-100' : 'opacity-0')
  }, /*#__PURE__*/React.createElement("style", null, "\n                        input[type=range]::-webkit-slider-thumb {\n                            border: 5px solid ".concat(solidColor, ";\n                        }\n                        input[type=range]::-moz-range-thumb {\n                            border: 5px solid ").concat(solidColor, ";\n                        }\n                    ")), /*#__PURE__*/React.createElement("div", {
    className: "main-card-scale z-10 w-full max-w-[380px] bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col items-center gap-6 border border-white/50 transition-transform duration-300 ease-out relative"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-6xl font-bold text-slate-800 tracking-tighter"
  }, "\u60C5\u7DD2\u6EAB\u5EA6\u8A08"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row w-full justify-between items-center gap-4 sm:gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative h-80 w-24 bg-slate-100 rounded-full border-4 border-slate-300 flex flex-col justify-end items-center shadow-inner overflow-hidden shrink-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 z-20 flex flex-col justify-between py-4 pointer-events-none"
  }, _toConsumableArray(Array(7)).map(function (_, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "w-full h-0.5 ".concat(i === 0 || i === 6 ? 'bg-slate-400/50 w-1/2 mx-auto' : 'bg-slate-300/50 w-1/3 mx-auto')
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-full relative z-10",
    style: {
      height: "".concat(heightPercentage, "%"),
      backgroundColor: solidColor,
      transition: 'height 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), background-color 0.5s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 w-full h-4 bg-white/30 rounded-t-full"
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute -bottom-6 w-32 h-32 rounded-full border-4 border-slate-300 z-30 flex items-center justify-center shadow-lg transition-colors duration-500",
    style: {
      backgroundColor: solidColor
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-white font-bold text-7xl drop-shadow-md"
  }, level))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col gap-6 items-center text-center min-w-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 min-h-[180px] flex flex-col justify-center w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-32 h-32 mb-4 drop-shadow-md"
  }, EMOTION_LEVELS.map(function (emotion) {
    return /*#__PURE__*/React.createElement("img", {
      key: emotion.id,
      src: emotionAsset("".concat(BASE_URL, "basic").concat(emotion.id, ".png")),
      alt: emotion.label,
      className: "absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ".concat(level === emotion.id ? 'opacity-100' : 'opacity-0'),
      referrerPolicy: "no-referrer"
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center h-[140px] justify-start"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-6xl font-bold transition-colors duration-300 whitespace-nowrap",
    style: {
      color: solidColor
    }
  }, currentState.label), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 text-2xl font-bold mt-2 leading-snug whitespace-pre-wrap"
  }, currentState.description)))), /*#__PURE__*/React.createElement("div", {
    className: "w-full space-y-4 pt-2"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "emotion-slider",
    className: "sr-only"
  }, "Emotion Level"), /*#__PURE__*/React.createElement("div", {
    className: "relative w-full h-14 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("input", {
    id: "emotion-slider",
    type: "range",
    min: "1",
    max: "7",
    step: "1",
    value: level,
    onChange: function onChange(e) {
      return setLevel(Number(e.target.value));
    },
    className: "w-full appearance-none bg-transparent focus:outline-none z-20"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "w-full pt-4 sm:pt-6 border-t border-slate-200 flex items-center gap-3 sm:gap-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    className: "w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-full shadow-lg border border-slate-100 hover:scale-105 active:scale-95 transition-all duration-300 shrink-0",
    "aria-label": "Back to Menu"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "w-5 h-5 sm:w-6 sm:h-6 text-slate-600"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "9 22 9 12 15 12 15 22"
  }))), /*#__PURE__*/React.createElement("p", {
    className: "flex-1 text-lg sm:text-xl md:text-2xl text-slate-600 text-center font-bold leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis"
  }, level >= 6 ? "深呼吸，慢慢數到十。" : level >= 4 ? "找人說說你的煩惱。" : level >= 3 ? "聽聽音樂，轉換心情。" : "保持笑容，傳遞快樂！"))));
}
var EMOTION_DEFINITIONS = {
  p1: {
    title: "開心",
    desc: "臉上有笑容，\n覺得心裡很舒服。"
  },
  p2: {
    title: "平靜",
    desc: "呼吸很順、很慢，\n覺得環境很安全。"
  },
  p3: {
    title: "興奮",
    desc: "身體很有動力，\n很想跳一跳或大聲說話。"
  },
  p4: {
    title: "輕鬆",
    desc: "覺得不累，\n沒有壓力。"
  },
  p5: {
    title: "期待",
    desc: "想著將來要做的事，\n覺得很棒。"
  },
  p6: {
    title: "自豪",
    desc: "我把事情做好了，\n覺得自己很棒。"
  },
  p7: {
    title: "好感",
    desc: "覺得對方很友善，\n喜歡跟這個人在一起，\n或者很喜歡這件事。"
  },
  p8: {
    title: "自信",
    desc: "覺得「我可以做到」，\n身體感覺很有力量。"
  },
  p9: {
    title: "驚喜",
    desc: "發生了沒想過的好事，\n覺得很新奇，\n有一種「哇！」的感覺。"
  },
  p10: {
    title: "滿足",
    desc: "覺得所擁有的事物或感覺很足夠，\n不需要額外的。"
  },
  p11: {
    title: "感恩",
    desc: "發現有人對我好，\n或是事情很順利，\n心裡很溫馨。"
  },
  p12: {
    title: "好奇",
    desc: "看到新事物，\n想要去嘗試、觀察或觸摸。"
  },
  p13: {
    title: "舒服",
    desc: "身體感覺很自在，\n覺得放鬆。"
  },
  n1: {
    title: "傷心",
    desc: "心裡重重的，\n可能想流眼淚。"
  },
  n2: {
    title: "厭惡",
    desc: "聞到、摸到或看到不喜歡的東西，\n想趕快走開。"
  },
  n3: {
    title: "擔心",
    desc: "一直想著，\n「如果不順利怎麼辦」。"
  },
  n4: {
    title: "害怕",
    desc: "遇到危險或不喜歡的事，\n想要躲起來或逃跑。"
  },
  n5: {
    title: "尷尬",
    desc: "覺得大家都在看我，\n或者覺得不自在，想躲起來。"
  },
  n6: {
    title: "生氣",
    desc: "感到不滿或被冒犯，\n拳頭握緊，可能會想大叫。"
  },
  n7: {
    title: "疲倦",
    desc: "身體沒力氣，\n很想睡覺或休息。"
  },
  n8: {
    title: "失望",
    desc: "想要的結果沒有出現，\n覺得心裡空空的。"
  },
  n9: {
    title: "緊張",
    desc: "手心出汗，心跳變快，\n不確定會發生什麼。"
  },
  n10: {
    title: "委屈",
    desc: "被誤會或被不公平對待，\n心裡悶悶、酸酸的。"
  },
  n11: {
    title: "沉悶",
    desc: "覺得沒有興趣、很無聊，\n甚至覺得時間過得特別慢。"
  },
  n12: {
    title: "孤單",
    desc: "沒有人陪伴理解及傾訴，\n覺得只有自己一個。"
  },
  n13: {
    title: "內疚",
    desc: "發現自己做錯事或傷害了別人，\n心裡很抱歉。"
  }
};
function EmotionWritingView(_ref8) {
  var emotion = _ref8.emotion,
    onBack = _ref8.onBack,
    onHome = _ref8.onHome,
    show = _ref8.show;
  var _useState69 = useState('draw'),
    _useState70 = _slicedToArray(_useState69, 2),
    mode = _useState70[0],
    setMode = _useState70[1]; // 'draw', 'type', 'erase', null
  var _useState71 = useState(function () {
      return localStorage.getItem('emotionExplorer_text') || '';
    }),
    _useState72 = _slicedToArray(_useState71, 2),
    text = _useState72[0],
    setText = _useState72[1];
  var _useState73 = useState(function () {
      return Number(localStorage.getItem('emotionExplorer_meterLevel')) || 1;
    }),
    _useState74 = _slicedToArray(_useState73, 2),
    meterLevel = _useState74[0],
    setMeterLevel = _useState74[1];
  var canvasRef = useRef(null);
  var activeCanvasRef = useRef(null); // Second canvas for active stroke
  var _useState75 = useState(false),
    _useState76 = _slicedToArray(_useState75, 2),
    isDrawing = _useState76[0],
    setIsDrawing = _useState76[1];
  var isDrawingRef = useRef(false);
  var _useState77 = useState(false),
    _useState78 = _slicedToArray(_useState77, 2),
    isDraggingMeter = _useState78[0],
    setIsDraggingMeter = _useState78[1];
  var _useState79 = useState(20),
    _useState80 = _slicedToArray(_useState79, 2),
    eraserSize = _useState80[0],
    setEraserSize = _useState80[1]; // 20: Medium, 40: Big
  var _useState81 = useState({
      x: 0,
      y: 0
    }),
    _useState82 = _slicedToArray(_useState81, 2),
    cursorPos = _useState82[0],
    setCursorPos = _useState82[1];
  var _useState83 = useState(function () {
      var saved = localStorage.getItem('emotionExplorer_strokes');
      return saved ? JSON.parse(saved) : [];
    }),
    _useState84 = _slicedToArray(_useState83, 2),
    strokeHistory = _useState84[0],
    setStrokeHistory = _useState84[1];
  var _useState85 = useState(function () {
      var saved = localStorage.getItem('emotionExplorer_strokes');
      var parsed = saved ? JSON.parse(saved) : [];
      return parsed.length > 0;
    }),
    _useState86 = _slicedToArray(_useState85, 2),
    hasDrawn = _useState86[0],
    setHasDrawn = _useState86[1];
  var hasDrawnRef = useRef(false);
  useEffect(function () {
    hasDrawnRef.current = hasDrawn;
  }, [hasDrawn]);
  var trackRef = useRef(null);
  var saveTimeoutRef = useRef(null);
  var currentStrokeRef = useRef(null);
  var canvasRectRef = useRef(null);
  var eraserRef = useRef(null);
  var modeRef = useRef('draw');
  useEffect(function () {
    modeRef.current = mode;
  }, [mode]);

  // Enlargement Logic
  var _useState87 = useState(null),
    _useState88 = _slicedToArray(_useState87, 2),
    enlargedEmotion = _useState88[0],
    setEnlargedEmotion = _useState88[1];
  var _useState89 = useState(false),
    _useState90 = _slicedToArray(_useState89, 2),
    isEnlargedVisible = _useState90[0],
    setIsEnlargedVisible = _useState90[1];
  var _useState91 = useState('desktop'),
    _useState92 = _slicedToArray(_useState91, 2),
    layoutMode = _useState92[0],
    setLayoutMode = _useState92[1];
  useEffect(function () {
    var checkLayout = function checkLayout() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var isLandscape = width > height;
      if (isLandscape && height <= 500) {
        setLayoutMode('mobile-landscape');
      } else if (!isLandscape && width <= 600) {
        setLayoutMode('mobile-portrait');
      } else if (!isLandscape && width <= 1024) {
        setLayoutMode('tablet-portrait');
      } else {
        setLayoutMode('desktop');
      }
    };
    checkLayout();
    window.addEventListener('resize', checkLayout);
    return function () {
      return window.removeEventListener('resize', checkLayout);
    };
  }, []);
  var handleEnlarge = function handleEnlarge(e, emotion) {
    e.stopPropagation();
    setEnlargedEmotion(emotion);
    setTimeout(function () {
      return setIsEnlargedVisible(true);
    }, 10);
  };
  var closeEnlarged = function closeEnlarged(e) {
    if (e) e.stopPropagation();
    setIsEnlargedVisible(false);
    setTimeout(function () {
      return setEnlargedEmotion(null);
    }, 700);
  };
  useEffect(function () {
    if (!enlargedEmotion) return;
    var handleKeyDown = function handleKeyDown(e) {
      if (e.key === 'Escape') {
        closeEnlarged();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return function () {
      return window.removeEventListener('keydown', handleKeyDown);
    };
  }, [enlargedEmotion]);
  var handleMeterPointerDown = function handleMeterPointerDown(e) {
    setMode(null); // Deselect writing/drawing mode
    setIsDraggingMeter(true);
    e.target.setPointerCapture(e.pointerId);
    updateMeterLevel(e);
  };
  var handleMeterPointerMove = function handleMeterPointerMove(e) {
    if (isDraggingMeter) {
      updateMeterLevel(e);
    }
  };
  var handleMeterPointerUp = function handleMeterPointerUp(e) {
    setIsDraggingMeter(false);
    e.target.releasePointerCapture(e.pointerId);
  };
  var updateMeterLevel = function updateMeterLevel(e) {
    if (!trackRef.current) return;
    var rect = trackRef.current.getBoundingClientRect();
    var clientY = e.clientY;
    var height = rect.bottom - clientY;
    var percentage = Math.max(0, Math.min(1, height / rect.height));
    var newLevel = Math.max(1, Math.min(7, Math.ceil(percentage * 7)));
    setMeterLevel(newLevel);
    localStorage.setItem('emotionExplorer_meterLevel', newLevel);
  };
  var strokeHistoryRef = useRef(strokeHistory);
  strokeHistoryRef.current = strokeHistory;
  var eraserSizeRef = useRef(eraserSize);
  eraserSizeRef.current = eraserSize;
  var inkControllerRef = useRef(null);
  useEffect(function () {
    var canvas = canvasRef.current,
      activeCanvas = activeCanvasRef.current;
    if (!canvas || !activeCanvas) return;
    inkControllerRef.current = window.EmotionInk.mount({
      canvas: canvas,
      activeCanvas: activeCanvas,
      getMode: function getMode() {
        return modeRef.current;
      },
      getEraserSize: function getEraserSize() {
        return eraserSizeRef.current;
      },
      getHistory: function getHistory() {
        return strokeHistoryRef.current;
      },
      onStroke: function onStroke(stroke) {
        strokeHistoryRef.current = [].concat(_toConsumableArray(strokeHistoryRef.current), [stroke]);
        setStrokeHistory(strokeHistoryRef.current);
      },
      onDrawing: function onDrawing(drawing) {
        isDrawingRef.current = drawing;
        setIsDrawing(drawing);
      },
      onHasDrawn: function onHasDrawn() {
        hasDrawnRef.current = true;
        setHasDrawn(true);
      },
      onCursor: function onCursor(p) {
        if (eraserRef.current) {
          eraserRef.current.style.left = "".concat(p.x, "px");
          eraserRef.current.style.top = "".concat(p.y, "px");
        }
      }
    });
    return function () {
      inkControllerRef.current.dispose();
      inkControllerRef.current = null;
    };
  }, []);
  useEffect(function () {
    var _inkControllerRef$cur;
    (_inkControllerRef$cur = inkControllerRef.current) === null || _inkControllerRef$cur === void 0 || _inkControllerRef$cur.redraw();
  }, [strokeHistory]);

  // Persistence logic
  useEffect(function () {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(function () {
      localStorage.setItem('emotionExplorer_text', text);
      localStorage.setItem('emotionExplorer_strokes', JSON.stringify(strokeHistory));
      localStorage.setItem('emotionExplorer_meterLevel', meterLevel);
    }, 500); // Debounce save
  }, [text, strokeHistory, meterLevel]);

  // Handle backgrounding
  useEffect(function () {
    var handleVisibilityChange = function handleVisibilityChange() {
      if (document.visibilityState === 'hidden') {
        localStorage.setItem('emotionExplorer_text', text);
        localStorage.setItem('emotionExplorer_strokes', JSON.stringify(strokeHistory));
        localStorage.setItem('emotionExplorer_meterLevel', meterLevel);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return function () {
      return document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [text, strokeHistory, meterLevel]);
  var clearAll = function clearAll() {
    var canvas = canvasRef.current;
    var activeCanvas = activeCanvasRef.current;
    if (canvas) {
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    if (activeCanvas) {
      var _ctx = activeCanvas.getContext('2d');
      _ctx.clearRect(0, 0, activeCanvas.width, activeCanvas.height);
    }
    setText('');
    setHasDrawn(false);
    setStrokeHistory([]);
    localStorage.removeItem('emotionExplorer_text');
    localStorage.removeItem('emotionExplorer_strokes');
    localStorage.setItem('emotionExplorer_meterLevel', 1);
  };
  var toggleMode = function toggleMode(newMode) {
    if (mode === newMode) {
      setMode(null);
    } else {
      setMode(newMode);
    }
  };
  var getSolidColor = function getSolidColor(val) {
    if (val <= 1) return '#4ADE80';
    if (val <= 2) return '#2DD4BF';
    if (val <= 3) return '#60A5FA';
    if (val <= 4) return '#EAB308';
    if (val <= 5) return '#6366F1';
    if (val <= 6) return '#EA580C';
    return '#B91C1C';
  };
  var solidColor = getSolidColor(meterLevel);
  var heightPercentage = meterLevel / 7 * 100;
  var getCursorStyle = function getCursorStyle() {
    if (mode === 'erase') {
      var size = eraserSize;
      var svg = "<svg width=\"".concat(size, "\" height=\"").concat(size, "\" viewBox=\"0 0 ").concat(size, " ").concat(size, "\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"").concat(size / 2, "\" cy=\"").concat(size / 2, "\" r=\"").concat(size / 2 - 1, "\" fill=\"rgba(255, 255, 255, 0.5)\" stroke=\"#334155\" stroke-width=\"2\"/></svg>");
      var url = "data:image/svg+xml;base64,".concat(btoa(svg));
      return "url(\"".concat(url, "\") ").concat(size / 2, " ").concat(size / 2, ", auto");
    }
    if (mode === 'draw') return 'crosshair';
    return 'default';
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 w-full h-full bg-[#FDFBF7] flex flex-col z-50 transition-opacity duration-700 ease-in-out select-none ".concat(show ? 'opacity-100' : 'opacity-0'),
    onClick: function onClick() {
      return setMode(null);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full p-2 flex justify-between items-center bg-[#FDFBF7]/95 backdrop-blur-sm shadow-sm shrink-0",
    onClick: function onClick() {
      return setMode(null);
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      onBack();
    },
    className: "w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md border border-slate-100 hover:scale-105 active:scale-95 transition-all duration-300"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "w-5 h-5 text-slate-600"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5M12 19l-7-7 7-7"
  }))), /*#__PURE__*/React.createElement("h1", {
    className: "text-xl font-bold text-slate-700"
  }, "\u8A18\u9304\u5FC3\u60C5"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      onHome();
    },
    className: "w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md border border-slate-100 hover:scale-105 active:scale-95 transition-all duration-300"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "w-5 h-5 text-slate-600"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "9 22 9 12 15 12 15 22"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-row p-4 gap-4 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "writing-sidebar w-1/3 max-w-[220px] flex flex-col gap-4 items-center overflow-hidden",
    onClick: function onClick() {
      return setMode(null);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full aspect-square bg-white rounded-2xl shadow-sm border-2 border-slate-100 p-2 flex items-center justify-center shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300 active:scale-95",
    onClick: function onClick(e) {
      return handleEnlarge(e, emotion);
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: emotionAsset("".concat(BASE_URL).concat(emotion.type).concat(emotion.index, ".png")),
    alt: "Selected Emotion",
    className: "w-full h-full object-contain",
    referrerPolicy: "no-referrer"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 w-full bg-white rounded-2xl shadow-sm border-2 border-slate-100 p-4 flex flex-col items-center justify-between min-h-[300px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-slate-500 font-bold mb-2"
  }, "\u60C5\u7DD2\u6307\u6578"), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 w-full flex items-center justify-center py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative h-full w-12 bg-slate-100 rounded-full border-2 border-slate-300 flex flex-col justify-end items-center shadow-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 z-20 flex flex-col justify-between py-4 pointer-events-none"
  }, _toConsumableArray(Array(7)).map(function (_, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "w-full h-0.5 ".concat(i === 0 || i === 6 ? 'bg-slate-400/50 w-1/2 mx-auto' : 'bg-slate-300/50 w-1/3 mx-auto')
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-full relative z-10 rounded-b-full",
    style: {
      height: "".concat(heightPercentage, "%"),
      backgroundColor: solidColor,
      transition: isDraggingMeter ? 'none' : 'height 0.3s ease, background-color 0.3s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 w-full h-2 bg-white/30 rounded-t-full"
  })), /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    className: "absolute inset-0 z-40 cursor-pointer touch-none",
    onPointerDown: handleMeterPointerDown,
    onPointerMove: handleMeterPointerMove,
    onPointerUp: handleMeterPointerUp,
    onPointerLeave: handleMeterPointerUp
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute w-16 h-16 rounded-full border-4 border-white shadow-lg z-50 flex items-center justify-center transition-colors duration-300 pointer-events-none",
    style: {
      bottom: "".concat(heightPercentage, "%"),
      left: '50%',
      transform: 'translate(-50%, 50%)',
      backgroundColor: solidColor,
      transition: isDraggingMeter ? 'none' : 'bottom 0.3s ease, background-color 0.3s ease'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-white font-bold text-2xl drop-shadow-md"
  }, meterLevel)))))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 bg-white rounded-3xl shadow-sm border-2 border-slate-100 flex flex-col relative overflow-hidden",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-2 right-2 sm:top-4 sm:right-4 flex gap-1 sm:gap-2 z-20"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return toggleMode('draw');
    },
    className: "w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md transition-all ".concat(mode === 'draw' ? 'bg-orange-500 text-white scale-110' : 'bg-white text-slate-500 hover:bg-slate-50'),
    title: "Draw"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "w-5 h-5 sm:w-6 sm:h-6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 20h9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return toggleMode('type');
    },
    className: "w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md transition-all ".concat(mode === 'type' ? 'bg-orange-500 text-white scale-110' : 'bg-white text-slate-500 hover:bg-slate-50'),
    title: "Type"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "w-5 h-5 sm:w-6 sm:h-6"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 8h.001"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 8h.001"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 8h.001"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 8h.001"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 12h.001"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 12h.001"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 12h.001"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 12h.001"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 16h10"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "relative flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return toggleMode('erase');
    },
    className: "w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md transition-all ".concat(mode === 'erase' ? 'bg-orange-500 text-white scale-110' : 'bg-white text-slate-500 hover:bg-slate-50'),
    title: "Eraser"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "w-5 h-5 sm:w-6 sm:h-6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 13l-5-5L3 18h10l5-5z",
    fill: mode === 'erase' ? 'white' : 'currentColor',
    stroke: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 6l3 3 3-3-3-3-3 3z",
    stroke: mode === 'erase' ? 'white' : 'currentColor'
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 13l-5-5L3 18h10l5-5z",
    stroke: mode === 'erase' ? 'white' : 'currentColor',
    fill: "none"
  }))), mode === 'erase' && !isDrawing && /*#__PURE__*/React.createElement("div", {
    className: "absolute top-full mt-2 flex flex-col gap-2 bg-white p-1.5 rounded-xl shadow-md border border-slate-100 animate-in slide-in-from-top-2 fade-in duration-200 z-30"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      setEraserSize(20);
    },
    className: "w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ".concat(eraserSize === 20 ? 'border-orange-500 bg-orange-50' : 'border-slate-200 hover:border-slate-300'),
    title: "Medium Eraser"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-3 h-3 bg-slate-600 rounded-full"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      setEraserSize(40);
    },
    className: "w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ".concat(eraserSize === 40 ? 'border-orange-500 bg-orange-50' : 'border-slate-200 hover:border-slate-300'),
    title: "Big Eraser"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 bg-slate-600 rounded-full"
  })))), /*#__PURE__*/React.createElement("button", {
    onClick: clearAll,
    className: "w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white text-slate-500 shadow-md hover:bg-red-50 hover:text-red-500 transition-all",
    title: "Clear All"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "w-5 h-5 sm:w-6 sm:h-6"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "3 6 5 6 21 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 w-full h-full"
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    className: "absolute inset-0 w-full h-full"
  }), /*#__PURE__*/React.createElement("canvas", {
    ref: activeCanvasRef,
    className: "absolute inset-0 w-full h-full touch-none ".concat(mode === 'draw' || mode === 'erase' ? 'z-10' : 'z-0 pointer-events-none'),
    style: {
      cursor: getCursorStyle()
    }
  })), mode === 'erase' && isDrawing && /*#__PURE__*/React.createElement("div", {
    ref: eraserRef,
    className: "absolute rounded-full border-2 border-slate-600 bg-white/50 pointer-events-none z-50",
    style: {
      width: eraserSize,
      height: eraserSize,
      transform: 'translate(-50%, -50%)'
    }
  }), /*#__PURE__*/React.createElement("textarea", {
    value: text,
    onChange: function onChange(e) {
      return setText(e.target.value);
    },
    placeholder: hasDrawn ? "" : "在這裡寫下你的想法...",
    className: "absolute inset-0 w-full h-full bg-transparent p-4 pt-20 pr-4 landscape:pt-6 landscape:pr-44 sm:p-6 sm:pt-24 sm:pr-12 sm:landscape:pt-8 sm:landscape:pr-56 text-base sm:text-xl leading-relaxed resize-none focus:outline-none select-text ".concat(mode === 'type' ? 'z-10' : 'z-0 pointer-events-none opacity-50')
  }))), enlargedEmotion && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-opacity duration-700 ease-in-out ".concat(isEnlargedVisible ? 'opacity-100' : 'opacity-0'),
    onClick: closeEnlarged
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative bg-white rounded-3xl shadow-2xl p-6 flex items-center gap-4 transition-all duration-700 ease-out transform \n                                ".concat(isEnlargedVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0', "\n                                ").concat(layoutMode === 'mobile-landscape' ? 'w-[90vw] max-w-3xl h-[85vh] flex-row gap-8 p-4' : 'w-[90vw] max-w-lg max-h-[85vh] flex-col'),
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-h-0 flex items-center justify-center ".concat(layoutMode === 'mobile-landscape' ? 'w-1/2 h-full justify-end' : 'w-full')
  }, /*#__PURE__*/React.createElement("img", {
    src: emotionAsset("".concat(BASE_URL).concat(enlargedEmotion.type).concat(enlargedEmotion.index, ".png")),
    alt: "Enlarged Emotion",
    className: "max-w-full max-h-full object-contain drop-shadow-md",
    referrerPolicy: "no-referrer"
  })), EMOTION_DEFINITIONS[enlargedEmotion.id] && /*#__PURE__*/React.createElement("div", {
    className: "shrink-0 ".concat(layoutMode === 'mobile-landscape' ? 'w-1/2 flex items-center text-left' : 'w-full text-center')
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 text-xl font-medium leading-relaxed whitespace-pre-wrap"
  }, EMOTION_DEFINITIONS[enlargedEmotion.id].desc)), /*#__PURE__*/React.createElement("button", {
    className: "absolute top-4 right-4 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors shadow-sm z-10",
    onClick: closeEnlarged
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "w-6 h-6 text-slate-600"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))))));
}
function EmotionExplorerTool(_ref9) {
  var onBack = _ref9.onBack,
    show = _ref9.show;
  var zones = [{
    id: 'red',
    energy: '高能量',
    feeling: '低愉悅度',
    name: '紅區',
    rgb: '207,126,123',
    ink: '#98605d',
    ids: ['n6', 'n2', 'n3', 'n4', 'n5', 'n9'],
    crop: '8 6 611 524'
  }, {
    id: 'yellow',
    energy: '高能量',
    feeling: '高愉悅度',
    name: '黃區',
    rgb: '210,174,78',
    ink: '#8c773e',
    ids: ['p1', 'p3', 'p5', 'p6', 'p8', 'p9', 'p12'],
    crop: '640 6 606 524'
  }, {
    id: 'blue',
    energy: '低能量',
    feeling: '低愉悅度',
    name: '藍區',
    rgb: '119,159,193',
    ink: '#577b9a',
    ids: ['n1', 'n7', 'n8', 'n10', 'n11', 'n12', 'n13'],
    crop: '8 640 611 482'
  }, {
    id: 'green',
    energy: '低能量',
    feeling: '高愉悅度',
    name: '綠區',
    rgb: '126,164,139',
    ink: '#557c63',
    ids: ['p2', 'p4', 'p7', 'p10', 'p11', 'p13'],
    crop: '640 640 606 482'
  }];
  var modes = [{
    id: 'weather',
    label: '情緒天氣'
  }, {
    id: 'clouds',
    label: '四格雲'
  }, {
    id: 'all',
    label: '全部情緒'
  }];
  var _useState93 = useState('weather'),
    _useState94 = _slicedToArray(_useState93, 2),
    displayMode = _useState94[0],
    setDisplayMode = _useState94[1],
    _useState95 = useState(false),
    _useState96 = _slicedToArray(_useState95, 2),
    menuOpen = _useState96[0],
    setMenuOpen = _useState96[1];
  var _useState97 = useState(null),
    _useState98 = _slicedToArray(_useState97, 2),
    previousMode = _useState98[0],
    setPreviousMode = _useState98[1],
    _useState99 = useState(null),
    _useState100 = _slicedToArray(_useState99, 2),
    litZoneId = _useState100[0],
    setLitZoneId = _useState100[1],
    _useState101 = useState(false),
    _useState102 = _slicedToArray(_useState101, 2),
    zoneClosing = _useState102[0],
    setZoneClosing = _useState102[1];
  var _useState103 = useState(null),
    _useState104 = _slicedToArray(_useState103, 2),
    activeZoneId = _useState104[0],
    setActiveZoneId = _useState104[1],
    _useState105 = useState(null),
    _useState106 = _slicedToArray(_useState105, 2),
    selectedEmotion = _useState106[0],
    setSelectedEmotion = _useState106[1];
  var _useState107 = useState(null),
    _useState108 = _slicedToArray(_useState107, 2),
    enlargedEmotion = _useState108[0],
    setEnlargedEmotion = _useState108[1],
    _useState109 = useState(false),
    _useState110 = _slicedToArray(_useState109, 2),
    isEnlargedVisible = _useState110[0],
    setIsEnlargedVisible = _useState110[1];
  var _useState111 = useState('desktop'),
    _useState112 = _slicedToArray(_useState111, 2),
    layoutMode = _useState112[0],
    setLayoutMode = _useState112[1],
    _useState113 = useState('select'),
    _useState114 = _slicedToArray(_useState113, 2),
    step = _useState114[0],
    setStep = _useState114[1],
    _useState115 = useState(false),
    _useState116 = _slicedToArray(_useState115, 2),
    isTransitioning = _useState116[0],
    setIsTransitioning = _useState116[1];
  var sheetRef = useRef(null),
    triggerRef = useRef(null),
    menuRef = useRef(null),
    switchRef = useRef(null),
    emotionTriggerRef = useRef(null),
    closeTimer = useRef(null);
  var modeTimer = useRef(null),
    zoneTimer = useRef(null),
    pressTimer = useRef(null),
    stageScroll = useRef(0);
  var motionTime = function motionTime() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 700;
  };
  var releaseLogo = function releaseLogo(event) {
    delete event.currentTarget.dataset.pressing;
  };
  var logoPress = {
    onPointerDown: function onPointerDown(event) {
      event.currentTarget.dataset.pressing = 'true';
      event.currentTarget.setPointerCapture(event.pointerId);
    },
    onPointerUp: releaseLogo,
    onPointerCancel: releaseLogo,
    onLostPointerCapture: releaseLogo,
    onBlur: releaseLogo,
    onKeyDown: function onKeyDown(event) {
      if (event.key === ' ' || event.key === 'Enter') event.currentTarget.dataset.pressing = 'true';
    },
    onKeyUp: releaseLogo
  };
  var activeZone = zones.find(function (zone) {
      return zone.id === activeZoneId;
    }),
    contentShow = show && !isTransitioning;
  var getEmotion = function getEmotion(id) {
    return {
      id: id,
      type: id.startsWith('p') ? 'positive' : 'negative',
      index: Number(id.slice(1))
    };
  };
  var imageFor = function imageFor(id) {
    var emotion = getEmotion(id);
    return BASE_URL + emotion.type + emotion.index + '.png';
  };
  var positiveIds = Array.from({
      length: 13
    }, function (_, i) {
      return 'p' + (i + 1);
    }),
    negativeIds = Array.from({
      length: 13
    }, function (_, i) {
      return 'n' + (i + 1);
    });
  var portrait = layoutMode === 'portrait';
  var rowsFor = function rowsFor(ids) {
    return portrait ? [ids.slice(0, 3), ids.slice(3, 5), ids.slice(5, 8), ids.slice(8, 10), ids.slice(10)] : [ids.slice(0, 7), ids.slice(7)];
  };
  var modeIcon = function modeIcon(id) {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 32 32",
      fill: "none",
      "aria-hidden": "true"
    }, id === 'weather' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "8",
      y: "5",
      width: "9",
      height: "9",
      rx: "1.6",
      fill: "#d99e98"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "18",
      y: "5",
      width: "9",
      height: "9",
      rx: "1.6",
      fill: "#e4ca7d"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "8",
      y: "15",
      width: "9",
      height: "9",
      rx: "1.6",
      fill: "#a8c3d8"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "18",
      y: "15",
      width: "9",
      height: "9",
      rx: "1.6",
      fill: "#afcbb9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 3v25h25M2 5l2-2 2 2M27 26l2 2-2 2",
      stroke: "#7c918b",
      strokeWidth: "1.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })) : id === 'clouds' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M8 25a5.8 5.8 0 0 1-1-11.5 6.5 6.5 0 0 1 11.7-3.1A6 6 0 0 1 27 17a4.5 4.5 0 0 1-2.5 8Z",
      fill: "#e8d9b7",
      stroke: "#cbb894",
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M11 18h.1M21 18h.1",
      stroke: "#786e61",
      strokeWidth: "2.5",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13 21q3 3 6 0",
      stroke: "#786e61",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "5",
      width: "17",
      height: "21",
      rx: "3",
      transform: "rotate(-13 12.5 15.5)",
      fill: "#c7dae8",
      stroke: "#9bb6c8",
      strokeWidth: ".8"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "11",
      y: "5",
      width: "17",
      height: "21",
      rx: "3",
      transform: "rotate(13 19.5 15.5)",
      fill: "#cce0d4",
      stroke: "#9abaaa",
      strokeWidth: ".8"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "7.5",
      y: "7",
      width: "17",
      height: "21",
      rx: "3",
      fill: "#fff9e9",
      stroke: "#cdbd98",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "16",
      cy: "16",
      r: "5.1",
      fill: "#ecd797"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 15h.1M18 15h.1",
      stroke: "#887d65",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13.7 17.3q2.3 2.5 4.6 0",
      stroke: "#887d65",
      strokeWidth: "1.1",
      strokeLinecap: "round"
    })));
  };
  useEffect(function () {
    var resize = function resize() {
      return setLayoutMode(window.innerWidth > window.innerHeight && window.innerHeight <= 500 ? 'mobile-landscape' : window.innerWidth <= window.innerHeight ? 'portrait' : 'desktop');
    };
    resize();
    window.addEventListener('resize', resize);
    ['weather-pearl-v3.png', 'cloud-pastel-v1.png'].forEach(function (name) {
      var img = new Image();
      img.src = emotionAsset('resources/images/demo/' + name);
    });
    return function () {
      window.removeEventListener('resize', resize);
      [closeTimer, modeTimer, zoneTimer, pressTimer].forEach(function (timer) {
        return clearTimeout(timer.current);
      });
    };
  }, []);
  useEffect(function () {
    var _menuRef$current2;
    if (!menuOpen) return;
    var outside = function outside(event) {
      var _menuRef$current;
      if (!((_menuRef$current = menuRef.current) !== null && _menuRef$current !== void 0 && _menuRef$current.contains(event.target))) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', outside);
    (_menuRef$current2 = menuRef.current) === null || _menuRef$current2 === void 0 || (_menuRef$current2 = _menuRef$current2.querySelector('[aria-checked="true"]')) === null || _menuRef$current2 === void 0 || _menuRef$current2.focus({
      preventScroll: true
    });
    return function () {
      return document.removeEventListener('pointerdown', outside);
    };
  }, [menuOpen]);
  var closeZone = function closeZone() {
    clearTimeout(pressTimer.current);
    clearTimeout(zoneTimer.current);
    if (!activeZoneId) {
      setLitZoneId(null);
      return;
    }
    setZoneClosing(true);
    zoneTimer.current = setTimeout(function () {
      setActiveZoneId(null);
      setZoneClosing(false);
      setLitZoneId(null);
    }, motionTime());
  };
  var closeEnlarged = function closeEnlarged(event) {
    event === null || event === void 0 || event.stopPropagation();
    setIsEnlargedVisible(false);
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(function () {
      setEnlargedEmotion(null);
      requestAnimationFrame(function () {
        var _emotionTriggerRef$cu;
        return (_emotionTriggerRef$cu = emotionTriggerRef.current) === null || _emotionTriggerRef$cu === void 0 ? void 0 : _emotionTriggerRef$cu.focus({
          preventScroll: true
        });
      });
    }, 700);
  };
  useEffect(function () {
    if (!activeZoneId) return;
    var trigger = triggerRef.current,
      frame = requestAnimationFrame(function () {
        var _sheetRef$current;
        return (_sheetRef$current = sheetRef.current) === null || _sheetRef$current === void 0 || (_sheetRef$current = _sheetRef$current.querySelector('.zone-close')) === null || _sheetRef$current === void 0 ? void 0 : _sheetRef$current.focus({
          preventScroll: true
        });
      });
    return function () {
      cancelAnimationFrame(frame);
      trigger === null || trigger === void 0 || trigger.focus({
        preventScroll: true
      });
    };
  }, [activeZoneId]);
  useEffect(function () {
    if (enlargedEmotion) requestAnimationFrame(function () {
      var _document$querySelect;
      return (_document$querySelect = document.querySelector('.zone-definition button')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.focus({
        preventScroll: true
      });
    });
  }, [enlargedEmotion]);
  useEffect(function () {
    var keydown = function keydown(event) {
      if (menuOpen && !activeZoneId && !enlargedEmotion) {
        if (event.key === 'Escape') {
          var _switchRef$current;
          event.preventDefault();
          setMenuOpen(false);
          (_switchRef$current = switchRef.current) === null || _switchRef$current === void 0 || _switchRef$current.focus();
        }
        if (['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
          var _menuRef$current3, _items;
          event.preventDefault();
          var items = Array.from(((_menuRef$current3 = menuRef.current) === null || _menuRef$current3 === void 0 ? void 0 : _menuRef$current3.querySelectorAll('[role="menuitemradio"]')) || []);
          var index = items.indexOf(document.activeElement),
            delta = ['ArrowUp', 'ArrowLeft'].includes(event.key) ? -1 : 1;
          (_items = items[event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : (index + delta + items.length) % items.length]) === null || _items === void 0 || _items.focus();
        }
        return;
      }
      if (!activeZoneId && !enlargedEmotion) return;
      if (event.key === 'Escape') {
        event.preventDefault();
        enlargedEmotion ? closeEnlarged() : closeZone();
      }
      if (event.key !== 'Tab') return;
      var scope = enlargedEmotion ? document.querySelector('.zone-definition') : sheetRef.current;
      var buttons = Array.from((scope === null || scope === void 0 ? void 0 : scope.querySelectorAll('button:not([disabled]), [tabindex="0"]')) || []),
        first = buttons[0],
        last = buttons[buttons.length - 1];
      if (event.shiftKey && (document.activeElement === first || !(scope !== null && scope !== void 0 && scope.contains(document.activeElement)))) {
        event.preventDefault();
        last === null || last === void 0 || last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !(scope !== null && scope !== void 0 && scope.contains(document.activeElement)))) {
        event.preventDefault();
        first === null || first === void 0 || first.focus();
      }
    };
    window.addEventListener('keydown', keydown);
    return function () {
      return window.removeEventListener('keydown', keydown);
    };
  }, [activeZoneId, enlargedEmotion, menuOpen]);
  var changeMode = function changeMode(id) {
    var _switchRef$current2, _switchRef$current3, _document$querySelect2;
    setMenuOpen(false);
    (_switchRef$current2 = switchRef.current) === null || _switchRef$current2 === void 0 || _switchRef$current2.focus({
      preventScroll: true
    });
    if (motionTime()) (_switchRef$current3 = switchRef.current) === null || _switchRef$current3 === void 0 || _switchRef$current3.animate([{
      transform: 'translateY(1.5px) scale(.94)'
    }, {
      transform: 'translateY(0) scale(1.025)',
      offset: .65
    }, {
      transform: 'translateY(0) scale(1)'
    }], {
      duration: 460,
      easing: 'cubic-bezier(.2,.7,.3,1)'
    });
    if (id === displayMode || previousMode) return;
    stageScroll.current = ((_document$querySelect2 = document.querySelector('.zone-stage:not(.zone-stage-leaving)')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.scrollTop) || 0;
    clearTimeout(pressTimer.current);
    clearTimeout(zoneTimer.current);
    clearTimeout(modeTimer.current);
    setPreviousMode(displayMode);
    setDisplayMode(id);
    setSelectedEmotion(null);
    setActiveZoneId(null);
    setZoneClosing(false);
    setLitZoneId(null);
    modeTimer.current = setTimeout(function () {
      setPreviousMode(null);
      requestAnimationFrame(function () {
        var _switchRef$current4;
        return (_switchRef$current4 = switchRef.current) === null || _switchRef$current4 === void 0 ? void 0 : _switchRef$current4.focus({
          preventScroll: true
        });
      });
    }, motionTime());
  };
  var openZone = function openZone(event, id) {
    event.stopPropagation();
    if (previousMode) return;
    triggerRef.current = event.currentTarget;
    clearTimeout(pressTimer.current);
    setMenuOpen(false);
    setSelectedEmotion(null);
    setLitZoneId(id);
    setZoneClosing(false);
    pressTimer.current = setTimeout(function () {
      return setActiveZoneId(id);
    }, motionTime() ? 200 : 0);
  };
  var handleEmotionClick = function handleEmotionClick(event, id) {
    event.stopPropagation();
    if (selectedEmotion === id) {
      emotionTriggerRef.current = event.currentTarget;
      setEnlargedEmotion(getEmotion(id));
      requestAnimationFrame(function () {
        return requestAnimationFrame(function () {
          return setIsEnlargedVisible(true);
        });
      });
    } else setSelectedEmotion(id);
  };
  var handleNext = function handleNext(event) {
    event.stopPropagation();
    if (!selectedEmotion) return;
    closeZone();
    setMenuOpen(false);
    setIsTransitioning(true);
    setTimeout(function () {
      setStep('write');
      setTimeout(function () {
        return setIsTransitioning(false);
      }, 50);
    }, 700);
  };
  var handleBackFromWriting = function handleBackFromWriting() {
    setIsTransitioning(true);
    setTimeout(function () {
      var _zones$find;
      setStep('select');
      if (displayMode !== 'all') setActiveZoneId(((_zones$find = zones.find(function (zone) {
        return zone.ids.includes(selectedEmotion);
      })) === null || _zones$find === void 0 ? void 0 : _zones$find.id) || null);
      setTimeout(function () {
        return setIsTransitioning(false);
      }, 50);
    }, 700);
  };
  var card = function card(id) {
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      type: "button",
      className: "zone-emotion-card",
      "data-emotion": id,
      style: {
        animationDelay: index * 25 + 'ms'
      },
      "aria-label": EMOTION_DEFINITIONS[id].title,
      "aria-pressed": selectedEmotion === id,
      onClick: function onClick(event) {
        return handleEmotionClick(event, id);
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: emotionAsset(imageFor(id)),
      width: "1000",
      height: "1000",
      alt: "",
      draggable: "false"
    }));
  };
  var next = function next() {
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "zone-next",
      disabled: !selectedEmotion,
      "aria-label": "\u7E7C\u7E8C\u756B\u756B\uFF0F\u66F8\u5BEB",
      onClick: handleNext
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14m-6-6 6 6-6 6"
    })));
  };
  var weatherCrops = ['110 80 547 522', '657 80 546 522', '110 602 547 522', '657 602 546 522'];
  var renderStage = function renderStage(mode) {
    var leaving = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return /*#__PURE__*/React.createElement("main", {
      className: 'zone-stage ' + (leaving ? 'zone-stage-leaving' : previousMode ? 'zone-stage-entering' : ''),
      "data-mode": mode,
      "aria-hidden": leaving ? true : undefined,
      inert: leaving || previousMode ? '' : undefined,
      ref: function ref(node) {
        if (leaving && node) node.scrollTop = stageScroll.current;
      }
    }, mode === 'all' ? /*#__PURE__*/React.createElement("div", {
      className: 'zone-all ' + (portrait ? 'zone-all-portrait' : ''),
      onClick: function onClick() {
        return setSelectedEmotion(null);
      }
    }, [positiveIds, negativeIds].map(function (ids, group) {
      return /*#__PURE__*/React.createElement("div", {
        key: group,
        className: "zone-all-group",
        role: "group",
        "aria-label": group === 0 ? '正向情緒' : '負向情緒'
      }, rowsFor(ids).map(function (row, i) {
        return /*#__PURE__*/React.createElement("div", {
          className: "zone-all-row",
          key: i
        }, row.map(function (id, j) {
          return card(id, i * 3 + j);
        }));
      }));
    })) : /*#__PURE__*/React.createElement("div", {
      className: "zone-map",
      "data-mode": mode,
      role: "group",
      "aria-label": mode === 'weather' ? '情緒天氣。縱軸為能量，向上增加；橫軸為愉悅度，向右增加。' : '四格雲：四類能量及愉悅度'
    }, mode === 'weather' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "zone-axis-y",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("span", {
      className: "axis-y-name"
    }, "\u80FD\u91CF"), /*#__PURE__*/React.createElement("span", {
      className: "axis-y-high"
    }, "\u9AD8"), /*#__PURE__*/React.createElement("span", {
      className: "axis-y-low"
    }, "\u4F4E")), /*#__PURE__*/React.createElement("div", {
      className: "zone-axis-x",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("span", {
      className: "axis-x-name"
    }, "\u6109\u6085\u5EA6"), /*#__PURE__*/React.createElement("span", {
      className: "axis-x-low"
    }, "\u4F4E"), /*#__PURE__*/React.createElement("span", {
      className: "axis-x-high"
    }, "\u9AD8"))), /*#__PURE__*/React.createElement("div", {
      className: "zone-grid",
      "data-art": mode
    }, zones.map(function (zone, index) {
      return /*#__PURE__*/React.createElement("button", {
        key: zone.id,
        type: "button",
        className: "zone-tile",
        "data-zone": zone.id,
        "data-lit": litZoneId === zone.id,
        style: {
          '--zone-rgb': zone.rgb,
          '--zone-ink': zone.ink
        },
        "aria-label": zone.name + '：' + zone.energy + '、' + zone.feeling,
        "aria-haspopup": "dialog",
        onClick: function onClick(event) {
          return openZone(event, zone.id);
        }
      }, mode === 'weather' && /*#__PURE__*/React.createElement("svg", {
        className: "zone-weather-art",
        viewBox: weatherCrops[index],
        preserveAspectRatio: "none",
        "aria-hidden": "true"
      }, /*#__PURE__*/React.createElement("image", {
        href: emotionAsset("resources/images/demo/weather-pearl-v3.png"),
        width: "1254",
        height: "1254"
      })), mode === 'clouds' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
        className: "zone-cloud-art",
        viewBox: zone.crop,
        preserveAspectRatio: "xMidYMid slice",
        "aria-hidden": "true"
      }, function () {
        var _zone$crop$split$map = zone.crop.split(' ').map(Number),
          _zone$crop$split$map2 = _slicedToArray(_zone$crop$split$map, 4),
          x = _zone$crop$split$map2[0],
          y = _zone$crop$split$map2[1],
          width = _zone$crop$split$map2[2],
          height = _zone$crop$split$map2[3];
        // The artwork viewport is 80% of a square tile. Account
        // for slice cropping so alpha reaches zero before its
        // visible bottom, including fractional iPhone pixels.
        var visibleHeight = width * .8;
        var fadeStart = y + height / 2 + visibleHeight * .30;
        var fadeEnd = y + height / 2 + visibleHeight * .485;
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
          id: 'cloud-fade-' + zone.id,
          gradientUnits: "userSpaceOnUse",
          x1: "0",
          x2: "0",
          y1: fadeStart,
          y2: fadeEnd
        }, /*#__PURE__*/React.createElement("stop", {
          offset: "0",
          stopColor: "white",
          stopOpacity: "1"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        })), /*#__PURE__*/React.createElement("mask", {
          id: 'cloud-alpha-' + zone.id,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse",
          x: x,
          y: y,
          width: width,
          height: height,
          style: {
            maskType: 'alpha'
          }
        }, /*#__PURE__*/React.createElement("rect", {
          x: x,
          y: y,
          width: width,
          height: height,
          fill: 'url(#cloud-fade-' + zone.id + ')'
        }))), /*#__PURE__*/React.createElement("image", {
          href: emotionAsset("resources/images/demo/cloud-pastel-v1.png"),
          width: "1254",
          height: "1254",
          mask: 'url(#cloud-alpha-' + zone.id + ')'
        }));
      }()), /*#__PURE__*/React.createElement("span", {
        className: "zone-cloud-label"
      }, zone.energy, /*#__PURE__*/React.createElement("span", null, "\u30FB"), zone.feeling)));
    }))));
  };
  if (step === 'write' && selectedEmotion) return /*#__PURE__*/React.createElement(EmotionWritingView, {
    emotion: getEmotion(selectedEmotion),
    onBack: handleBackFromWriting,
    onHome: onBack,
    show: contentShow
  });
  return /*#__PURE__*/React.createElement("div", {
    className: 'zone-explorer fixed inset-0 w-full h-full bg-[#FDFBF7] flex flex-col transition-opacity duration-700 ease-in-out select-none ' + (contentShow ? 'opacity-100' : 'opacity-0'),
    "data-mode": displayMode
  }, /*#__PURE__*/React.createElement("div", {
    className: "zone-main",
    "data-muted": !!activeZoneId && !zoneClosing,
    inert: activeZoneId || enlargedEmotion ? '' : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "zone-topbar"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onBack,
    "aria-label": "\u8FD4\u56DE\u4E3B\u9801",
    className: "zone-home w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md border border-slate-100"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "w-5 h-5 text-slate-600"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "9 22 9 12 15 12 15 22"
  }))), /*#__PURE__*/React.createElement("h1", {
    className: "text-xl md:text-2xl font-bold text-slate-700 tracking-tight"
  }, "\u60C5\u7DD2\u63A2\u7D22\u5668"), /*#__PURE__*/React.createElement("div", {
    className: "zone-top-actions"
  }, displayMode === 'all' && selectedEmotion && next(), /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    className: "zone-switch-wrap"
  }, /*#__PURE__*/React.createElement("button", _extends({}, logoPress, {
    ref: switchRef,
    type: "button",
    className: "zone-switch",
    disabled: !!previousMode,
    "aria-label": "\u5207\u63DB\u60C5\u7DD2\u986F\u793A\u65B9\u5F0F",
    title: modes.find(function (mode) {
      return mode.id === displayMode;
    }).label,
    "aria-haspopup": "menu",
    "aria-expanded": menuOpen,
    "aria-controls": "emotion-view-menu",
    onClick: function onClick() {
      return setMenuOpen(!menuOpen);
    }
  }), modeIcon(displayMode)), menuOpen && /*#__PURE__*/React.createElement("div", {
    id: "emotion-view-menu",
    role: "menu",
    "aria-label": "\u60C5\u7DD2\u986F\u793A\u65B9\u5F0F",
    className: "zone-view-menu"
  }, modes.map(function (mode) {
    return /*#__PURE__*/React.createElement("button", _extends({}, logoPress, {
      key: mode.id,
      type: "button",
      role: "menuitemradio",
      "aria-label": mode.label,
      title: mode.label,
      "aria-checked": displayMode === mode.id,
      onClick: function onClick() {
        return changeMode(mode.id);
      }
    }), modeIcon(mode.id));
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "zone-stage-frame",
    "data-changing": !!previousMode
  }, previousMode && renderStage(previousMode, true), renderStage(displayMode))), activeZone && /*#__PURE__*/React.createElement("div", {
    className: "zone-overlay",
    "data-closing": zoneClosing,
    onClick: closeZone,
    inert: enlargedEmotion ? '' : undefined
  }, /*#__PURE__*/React.createElement("section", {
    ref: sheetRef,
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "zone-floating-title",
    className: "zone-floating",
    "data-zone": activeZone.id,
    style: {
      '--zone-rgb': activeZone.rgb,
      '--zone-ink': activeZone.ink
    },
    onClick: function onClick(event) {
      return event.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "zone-floating-heading"
  }, /*#__PURE__*/React.createElement("h2", {
    id: "zone-floating-title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "zone-heading-dot",
    "aria-hidden": "true"
  }), activeZone.energy, "\u30FB", activeZone.feeling), /*#__PURE__*/React.createElement("div", {
    className: "zone-floating-actions"
  }, next(), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "zone-close",
    "aria-label": "\u8FD4\u56DE\u56DB\u5340",
    onClick: closeZone
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m7 7 10 10M7 17 17 7"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "zone-emotions"
  }, activeZone.ids.map(card)))), enlargedEmotion && /*#__PURE__*/React.createElement("div", {
    className: 'fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-opacity duration-700 ' + (isEnlargedVisible ? 'opacity-100' : 'opacity-0'),
    onClick: closeEnlarged
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": EMOTION_DEFINITIONS[enlargedEmotion.id].title,
    className: 'zone-definition relative bg-white rounded-3xl shadow-2xl p-6 flex items-center gap-4 ' + (layoutMode === 'mobile-landscape' ? 'w-[90vw] max-w-3xl h-[85vh] flex-row' : 'w-[90vw] max-w-lg max-h-[85vh] flex-col'),
    onClick: function onClick(event) {
      return event.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: 'flex-1 min-h-0 flex items-center justify-center ' + (layoutMode === 'mobile-landscape' ? 'w-1/2 h-full' : 'w-full')
  }, /*#__PURE__*/React.createElement("img", {
    src: emotionAsset(imageFor(enlargedEmotion.id)),
    alt: EMOTION_DEFINITIONS[enlargedEmotion.id].title,
    className: "max-w-full max-h-full object-contain"
  })), /*#__PURE__*/React.createElement("p", {
    className: 'shrink-0 text-slate-600 text-xl font-medium leading-relaxed whitespace-pre-wrap ' + (layoutMode === 'mobile-landscape' ? 'w-1/2 text-left' : 'w-full text-center')
  }, EMOTION_DEFINITIONS[enlargedEmotion.id].desc), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\u95DC\u9589\u60C5\u7DD2\u89E3\u8AAA",
    onClick: closeEnlarged,
    className: "absolute top-4 right-4 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    className: "w-5 h-5 text-slate-600"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12M6 18 18 6"
  }))))));
}
function App() {
  var _useState117 = useState('menu'),
    _useState118 = _slicedToArray(_useState117, 2),
    view = _useState118[0],
    setView = _useState118[1]; // 'menu' or 'meter'
  var _useState119 = useState('idle'),
    _useState120 = _slicedToArray(_useState119, 2),
    transitionState = _useState120[0],
    setTransitionState = _useState120[1]; // 'idle', 'fading-out', 'mounting', 'fading-in'

  // Preload images for smoother experience
  useEffect(function () {
    var preloadImages = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var imageUrls;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              imageUrls = [LOGO_URL].concat(_toConsumableArray(Array.from({
                length: 7
              }, function (_, i) {
                return "".concat(BASE_URL, "basic").concat(i + 1, ".png");
              })), _toConsumableArray(Array.from({
                length: 13
              }, function (_, i) {
                return "".concat(BASE_URL, "positive").concat(i + 1, ".png");
              })), _toConsumableArray(Array.from({
                length: 13
              }, function (_, i) {
                return "".concat(BASE_URL, "negative").concat(i + 1, ".png");
              })), [// Body scan image
              "".concat(BASE_URL, "body.png")]);
              imageUrls.forEach(function (url) {
                var img = new Image();
                img.src = emotionAsset(url);
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function preloadImages() {
        return _ref10.apply(this, arguments);
      };
    }();

    // Start preloading after a short delay to allow initial render
    var timer = setTimeout(preloadImages, 1000);
    return function () {
      return clearTimeout(timer);
    };
  }, []);
  var handleNavigate = function handleNavigate(target) {
    setTransitionState('fading-out');
    setTimeout(function () {
      setView(target);
      setTransitionState('mounting');

      // Small delay to ensure mount happens before fade-in starts
      setTimeout(function () {
        setTransitionState('fading-in');
        setTimeout(function () {
          setTransitionState('idle');
        }, 700); // Match fade-in duration
      }, 50);
    }, 700); // Match fade-out duration
  };
  var show = transitionState === 'idle' || transitionState === 'fading-in';
  return /*#__PURE__*/React.createElement(React.Fragment, null, view === 'menu' && /*#__PURE__*/React.createElement(MainMenu, {
    onNavigate: handleNavigate,
    show: show
  }), view === 'meter' && /*#__PURE__*/React.createElement(EmotionMeterTool, {
    onBack: function onBack() {
      return handleNavigate('menu');
    },
    show: show
  }), view === 'explorer' && /*#__PURE__*/React.createElement(EmotionExplorerTool, {
    onBack: function onBack() {
      return handleNavigate('menu');
    },
    show: show
  }), view === 'breathing' && /*#__PURE__*/React.createElement(BreathingExercise, {
    onBack: function onBack() {
      return handleNavigate('menu');
    },
    show: show
  }), /*#__PURE__*/React.createElement(FloatingLogo, {
    visible: view === 'menu',
    show: show
  }));
}
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(App, null));