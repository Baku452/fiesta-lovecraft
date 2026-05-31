function dh(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ja = { exports: {} }, cs = {}, Qa = { exports: {} }, le = {};
var gd;
function Lp() {
  if (gd) return le;
  gd = 1;
  var n = /* @__PURE__ */ Symbol.for("react.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), l = /* @__PURE__ */ Symbol.for("react.profiler"), c = /* @__PURE__ */ Symbol.for("react.provider"), d = /* @__PURE__ */ Symbol.for("react.context"), f = /* @__PURE__ */ Symbol.for("react.forward_ref"), p = /* @__PURE__ */ Symbol.for("react.suspense"), g = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), _ = Symbol.iterator;
  function b(x) {
    return x === null || typeof x != "object" ? null : (x = _ && x[_] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var E = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, j = Object.assign, P = {};
  function U(x, O, oe) {
    this.props = x, this.context = O, this.refs = P, this.updater = oe || E;
  }
  U.prototype.isReactComponent = {}, U.prototype.setState = function(x, O) {
    if (typeof x != "object" && typeof x != "function" && x != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, x, O, "setState");
  }, U.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function z() {
  }
  z.prototype = U.prototype;
  function H(x, O, oe) {
    this.props = x, this.context = O, this.refs = P, this.updater = oe || E;
  }
  var D = H.prototype = new z();
  D.constructor = H, j(D, U.prototype), D.isPureReactComponent = !0;
  var Z = Array.isArray, me = Object.prototype.hasOwnProperty, ie = { current: null }, ue = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Oe(x, O, oe) {
    var ae, A = {}, F = null, V = null;
    if (O != null) for (ae in O.ref !== void 0 && (V = O.ref), O.key !== void 0 && (F = "" + O.key), O) me.call(O, ae) && !ue.hasOwnProperty(ae) && (A[ae] = O[ae]);
    var X = arguments.length - 2;
    if (X === 1) A.children = oe;
    else if (1 < X) {
      for (var ce = Array(X), Je = 0; Je < X; Je++) ce[Je] = arguments[Je + 2];
      A.children = ce;
    }
    if (x && x.defaultProps) for (ae in X = x.defaultProps, X) A[ae] === void 0 && (A[ae] = X[ae]);
    return { $$typeof: n, type: x, key: F, ref: V, props: A, _owner: ie.current };
  }
  function be(x, O) {
    return { $$typeof: n, type: x.type, key: O, ref: x.ref, props: x.props, _owner: x._owner };
  }
  function Xe(x) {
    return typeof x == "object" && x !== null && x.$$typeof === n;
  }
  function Bt(x) {
    var O = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(oe) {
      return O[oe];
    });
  }
  var ot = /\/+/g;
  function Ne(x, O) {
    return typeof x == "object" && x !== null && x.key != null ? Bt("" + x.key) : O.toString(36);
  }
  function at(x, O, oe, ae, A) {
    var F = typeof x;
    (F === "undefined" || F === "boolean") && (x = null);
    var V = !1;
    if (x === null) V = !0;
    else switch (F) {
      case "string":
      case "number":
        V = !0;
        break;
      case "object":
        switch (x.$$typeof) {
          case n:
          case r:
            V = !0;
        }
    }
    if (V) return V = x, A = A(V), x = ae === "" ? "." + Ne(V, 0) : ae, Z(A) ? (oe = "", x != null && (oe = x.replace(ot, "$&/") + "/"), at(A, O, oe, "", function(Je) {
      return Je;
    })) : A != null && (Xe(A) && (A = be(A, oe + (!A.key || V && V.key === A.key ? "" : ("" + A.key).replace(ot, "$&/") + "/") + x)), O.push(A)), 1;
    if (V = 0, ae = ae === "" ? "." : ae + ":", Z(x)) for (var X = 0; X < x.length; X++) {
      F = x[X];
      var ce = ae + Ne(F, X);
      V += at(F, O, oe, ce, A);
    }
    else if (ce = b(x), typeof ce == "function") for (x = ce.call(x), X = 0; !(F = x.next()).done; ) F = F.value, ce = ae + Ne(F, X++), V += at(F, O, oe, ce, A);
    else if (F === "object") throw O = String(x), Error("Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead.");
    return V;
  }
  function ft(x, O, oe) {
    if (x == null) return x;
    var ae = [], A = 0;
    return at(x, ae, "", "", function(F) {
      return O.call(oe, F, A++);
    }), ae;
  }
  function Ie(x) {
    if (x._status === -1) {
      var O = x._result;
      O = O(), O.then(function(oe) {
        (x._status === 0 || x._status === -1) && (x._status = 1, x._result = oe);
      }, function(oe) {
        (x._status === 0 || x._status === -1) && (x._status = 2, x._result = oe);
      }), x._status === -1 && (x._status = 0, x._result = O);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var ge = { current: null }, M = { transition: null }, re = { ReactCurrentDispatcher: ge, ReactCurrentBatchConfig: M, ReactCurrentOwner: ie };
  function W() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return le.Children = { map: ft, forEach: function(x, O, oe) {
    ft(x, function() {
      O.apply(this, arguments);
    }, oe);
  }, count: function(x) {
    var O = 0;
    return ft(x, function() {
      O++;
    }), O;
  }, toArray: function(x) {
    return ft(x, function(O) {
      return O;
    }) || [];
  }, only: function(x) {
    if (!Xe(x)) throw Error("React.Children.only expected to receive a single React element child.");
    return x;
  } }, le.Component = U, le.Fragment = s, le.Profiler = l, le.PureComponent = H, le.StrictMode = o, le.Suspense = p, le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = re, le.act = W, le.cloneElement = function(x, O, oe) {
    if (x == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + x + ".");
    var ae = j({}, x.props), A = x.key, F = x.ref, V = x._owner;
    if (O != null) {
      if (O.ref !== void 0 && (F = O.ref, V = ie.current), O.key !== void 0 && (A = "" + O.key), x.type && x.type.defaultProps) var X = x.type.defaultProps;
      for (ce in O) me.call(O, ce) && !ue.hasOwnProperty(ce) && (ae[ce] = O[ce] === void 0 && X !== void 0 ? X[ce] : O[ce]);
    }
    var ce = arguments.length - 2;
    if (ce === 1) ae.children = oe;
    else if (1 < ce) {
      X = Array(ce);
      for (var Je = 0; Je < ce; Je++) X[Je] = arguments[Je + 2];
      ae.children = X;
    }
    return { $$typeof: n, type: x.type, key: A, ref: F, props: ae, _owner: V };
  }, le.createContext = function(x) {
    return x = { $$typeof: d, _currentValue: x, _currentValue2: x, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, x.Provider = { $$typeof: c, _context: x }, x.Consumer = x;
  }, le.createElement = Oe, le.createFactory = function(x) {
    var O = Oe.bind(null, x);
    return O.type = x, O;
  }, le.createRef = function() {
    return { current: null };
  }, le.forwardRef = function(x) {
    return { $$typeof: f, render: x };
  }, le.isValidElement = Xe, le.lazy = function(x) {
    return { $$typeof: v, _payload: { _status: -1, _result: x }, _init: Ie };
  }, le.memo = function(x, O) {
    return { $$typeof: g, type: x, compare: O === void 0 ? null : O };
  }, le.startTransition = function(x) {
    var O = M.transition;
    M.transition = {};
    try {
      x();
    } finally {
      M.transition = O;
    }
  }, le.unstable_act = W, le.useCallback = function(x, O) {
    return ge.current.useCallback(x, O);
  }, le.useContext = function(x) {
    return ge.current.useContext(x);
  }, le.useDebugValue = function() {
  }, le.useDeferredValue = function(x) {
    return ge.current.useDeferredValue(x);
  }, le.useEffect = function(x, O) {
    return ge.current.useEffect(x, O);
  }, le.useId = function() {
    return ge.current.useId();
  }, le.useImperativeHandle = function(x, O, oe) {
    return ge.current.useImperativeHandle(x, O, oe);
  }, le.useInsertionEffect = function(x, O) {
    return ge.current.useInsertionEffect(x, O);
  }, le.useLayoutEffect = function(x, O) {
    return ge.current.useLayoutEffect(x, O);
  }, le.useMemo = function(x, O) {
    return ge.current.useMemo(x, O);
  }, le.useReducer = function(x, O, oe) {
    return ge.current.useReducer(x, O, oe);
  }, le.useRef = function(x) {
    return ge.current.useRef(x);
  }, le.useState = function(x) {
    return ge.current.useState(x);
  }, le.useSyncExternalStore = function(x, O, oe) {
    return ge.current.useSyncExternalStore(x, O, oe);
  }, le.useTransition = function() {
    return ge.current.useTransition();
  }, le.version = "18.3.1", le;
}
var yd;
function _l() {
  return yd || (yd = 1, Qa.exports = Lp()), Qa.exports;
}
var vd;
function $p() {
  if (vd) return cs;
  vd = 1;
  var n = _l(), r = /* @__PURE__ */ Symbol.for("react.element"), s = /* @__PURE__ */ Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(f, p, g) {
    var v, _ = {}, b = null, E = null;
    g !== void 0 && (b = "" + g), p.key !== void 0 && (b = "" + p.key), p.ref !== void 0 && (E = p.ref);
    for (v in p) o.call(p, v) && !c.hasOwnProperty(v) && (_[v] = p[v]);
    if (f && f.defaultProps) for (v in p = f.defaultProps, p) _[v] === void 0 && (_[v] = p[v]);
    return { $$typeof: r, type: f, key: b, ref: E, props: _, _owner: l.current };
  }
  return cs.Fragment = s, cs.jsx = d, cs.jsxs = d, cs;
}
var wd;
function Up() {
  return wd || (wd = 1, Ja.exports = $p()), Ja.exports;
}
var w = Up(), fe = _l();
const Dp = /* @__PURE__ */ dh(fe);
var Ii = {}, Ya = { exports: {} }, st = {}, Xa = { exports: {} }, Za = {};
var _d;
function Mp() {
  return _d || (_d = 1, (function(n) {
    function r(M, re) {
      var W = M.length;
      M.push(re);
      e: for (; 0 < W; ) {
        var x = W - 1 >>> 1, O = M[x];
        if (0 < l(O, re)) M[x] = re, M[W] = O, W = x;
        else break e;
      }
    }
    function s(M) {
      return M.length === 0 ? null : M[0];
    }
    function o(M) {
      if (M.length === 0) return null;
      var re = M[0], W = M.pop();
      if (W !== re) {
        M[0] = W;
        e: for (var x = 0, O = M.length, oe = O >>> 1; x < oe; ) {
          var ae = 2 * (x + 1) - 1, A = M[ae], F = ae + 1, V = M[F];
          if (0 > l(A, W)) F < O && 0 > l(V, A) ? (M[x] = V, M[F] = W, x = F) : (M[x] = A, M[ae] = W, x = ae);
          else if (F < O && 0 > l(V, W)) M[x] = V, M[F] = W, x = F;
          else break e;
        }
      }
      return re;
    }
    function l(M, re) {
      var W = M.sortIndex - re.sortIndex;
      return W !== 0 ? W : M.id - re.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      n.unstable_now = function() {
        return c.now();
      };
    } else {
      var d = Date, f = d.now();
      n.unstable_now = function() {
        return d.now() - f;
      };
    }
    var p = [], g = [], v = 1, _ = null, b = 3, E = !1, j = !1, P = !1, U = typeof setTimeout == "function" ? setTimeout : null, z = typeof clearTimeout == "function" ? clearTimeout : null, H = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function D(M) {
      for (var re = s(g); re !== null; ) {
        if (re.callback === null) o(g);
        else if (re.startTime <= M) o(g), re.sortIndex = re.expirationTime, r(p, re);
        else break;
        re = s(g);
      }
    }
    function Z(M) {
      if (P = !1, D(M), !j) if (s(p) !== null) j = !0, Ie(me);
      else {
        var re = s(g);
        re !== null && ge(Z, re.startTime - M);
      }
    }
    function me(M, re) {
      j = !1, P && (P = !1, z(Oe), Oe = -1), E = !0;
      var W = b;
      try {
        for (D(re), _ = s(p); _ !== null && (!(_.expirationTime > re) || M && !Bt()); ) {
          var x = _.callback;
          if (typeof x == "function") {
            _.callback = null, b = _.priorityLevel;
            var O = x(_.expirationTime <= re);
            re = n.unstable_now(), typeof O == "function" ? _.callback = O : _ === s(p) && o(p), D(re);
          } else o(p);
          _ = s(p);
        }
        if (_ !== null) var oe = !0;
        else {
          var ae = s(g);
          ae !== null && ge(Z, ae.startTime - re), oe = !1;
        }
        return oe;
      } finally {
        _ = null, b = W, E = !1;
      }
    }
    var ie = !1, ue = null, Oe = -1, be = 5, Xe = -1;
    function Bt() {
      return !(n.unstable_now() - Xe < be);
    }
    function ot() {
      if (ue !== null) {
        var M = n.unstable_now();
        Xe = M;
        var re = !0;
        try {
          re = ue(!0, M);
        } finally {
          re ? Ne() : (ie = !1, ue = null);
        }
      } else ie = !1;
    }
    var Ne;
    if (typeof H == "function") Ne = function() {
      H(ot);
    };
    else if (typeof MessageChannel < "u") {
      var at = new MessageChannel(), ft = at.port2;
      at.port1.onmessage = ot, Ne = function() {
        ft.postMessage(null);
      };
    } else Ne = function() {
      U(ot, 0);
    };
    function Ie(M) {
      ue = M, ie || (ie = !0, Ne());
    }
    function ge(M, re) {
      Oe = U(function() {
        M(n.unstable_now());
      }, re);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, n.unstable_continueExecution = function() {
      j || E || (j = !0, Ie(me));
    }, n.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : be = 0 < M ? Math.floor(1e3 / M) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, n.unstable_getFirstCallbackNode = function() {
      return s(p);
    }, n.unstable_next = function(M) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var re = 3;
          break;
        default:
          re = b;
      }
      var W = b;
      b = re;
      try {
        return M();
      } finally {
        b = W;
      }
    }, n.unstable_pauseExecution = function() {
    }, n.unstable_requestPaint = function() {
    }, n.unstable_runWithPriority = function(M, re) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var W = b;
      b = M;
      try {
        return re();
      } finally {
        b = W;
      }
    }, n.unstable_scheduleCallback = function(M, re, W) {
      var x = n.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? x + W : x) : W = x, M) {
        case 1:
          var O = -1;
          break;
        case 2:
          O = 250;
          break;
        case 5:
          O = 1073741823;
          break;
        case 4:
          O = 1e4;
          break;
        default:
          O = 5e3;
      }
      return O = W + O, M = { id: v++, callback: re, priorityLevel: M, startTime: W, expirationTime: O, sortIndex: -1 }, W > x ? (M.sortIndex = W, r(g, M), s(p) === null && M === s(g) && (P ? (z(Oe), Oe = -1) : P = !0, ge(Z, W - x))) : (M.sortIndex = O, r(p, M), j || E || (j = !0, Ie(me))), M;
    }, n.unstable_shouldYield = Bt, n.unstable_wrapCallback = function(M) {
      var re = b;
      return function() {
        var W = b;
        b = re;
        try {
          return M.apply(this, arguments);
        } finally {
          b = W;
        }
      };
    };
  })(Za)), Za;
}
var kd;
function Bp() {
  return kd || (kd = 1, Xa.exports = Mp()), Xa.exports;
}
var Sd;
function zp() {
  if (Sd) return st;
  Sd = 1;
  var n = _l(), r = Bp();
  function s(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++) t += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var o = /* @__PURE__ */ new Set(), l = {};
  function c(e, t) {
    d(e, t), d(e + "Capture", t);
  }
  function d(e, t) {
    for (l[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
  }
  var f = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), p = Object.prototype.hasOwnProperty, g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, _ = {};
  function b(e) {
    return p.call(_, e) ? !0 : p.call(v, e) ? !1 : g.test(e) ? _[e] = !0 : (v[e] = !0, !1);
  }
  function E(e, t, i, a) {
    if (i !== null && i.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return a ? !1 : i !== null ? !i.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function j(e, t, i, a) {
    if (t === null || typeof t > "u" || E(e, t, i, a)) return !0;
    if (a) return !1;
    if (i !== null) switch (i.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function P(e, t, i, a, u, h, m) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = a, this.attributeNamespace = u, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = h, this.removeEmptyString = m;
  }
  var U = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    U[e] = new P(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    U[t] = new P(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    U[e] = new P(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    U[e] = new P(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    U[e] = new P(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    U[e] = new P(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    U[e] = new P(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    U[e] = new P(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    U[e] = new P(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var z = /[\-:]([a-z])/g;
  function H(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      z,
      H
    );
    U[t] = new P(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(z, H);
    U[t] = new P(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(z, H);
    U[t] = new P(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    U[e] = new P(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), U.xlinkHref = new P("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    U[e] = new P(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function D(e, t, i, a) {
    var u = U.hasOwnProperty(t) ? U[t] : null;
    (u !== null ? u.type !== 0 : a || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (j(t, i, u, a) && (i = null), a || u === null ? b(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i)) : u.mustUseProperty ? e[u.propertyName] = i === null ? u.type === 3 ? !1 : "" : i : (t = u.attributeName, a = u.attributeNamespace, i === null ? e.removeAttribute(t) : (u = u.type, i = u === 3 || u === 4 && i === !0 ? "" : "" + i, a ? e.setAttributeNS(a, t, i) : e.setAttribute(t, i))));
  }
  var Z = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, me = /* @__PURE__ */ Symbol.for("react.element"), ie = /* @__PURE__ */ Symbol.for("react.portal"), ue = /* @__PURE__ */ Symbol.for("react.fragment"), Oe = /* @__PURE__ */ Symbol.for("react.strict_mode"), be = /* @__PURE__ */ Symbol.for("react.profiler"), Xe = /* @__PURE__ */ Symbol.for("react.provider"), Bt = /* @__PURE__ */ Symbol.for("react.context"), ot = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ne = /* @__PURE__ */ Symbol.for("react.suspense"), at = /* @__PURE__ */ Symbol.for("react.suspense_list"), ft = /* @__PURE__ */ Symbol.for("react.memo"), Ie = /* @__PURE__ */ Symbol.for("react.lazy"), ge = /* @__PURE__ */ Symbol.for("react.offscreen"), M = Symbol.iterator;
  function re(e) {
    return e === null || typeof e != "object" ? null : (e = M && e[M] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var W = Object.assign, x;
  function O(e) {
    if (x === void 0) try {
      throw Error();
    } catch (i) {
      var t = i.stack.trim().match(/\n( *(at )?)/);
      x = t && t[1] || "";
    }
    return `
` + x + e;
  }
  var oe = !1;
  function ae(e, t) {
    if (!e || oe) return "";
    oe = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (R) {
          var a = R;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (R) {
          a = R;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (R) {
          a = R;
        }
        e();
      }
    } catch (R) {
      if (R && a && typeof R.stack == "string") {
        for (var u = R.stack.split(`
`), h = a.stack.split(`
`), m = u.length - 1, y = h.length - 1; 1 <= m && 0 <= y && u[m] !== h[y]; ) y--;
        for (; 1 <= m && 0 <= y; m--, y--) if (u[m] !== h[y]) {
          if (m !== 1 || y !== 1)
            do
              if (m--, y--, 0 > y || u[m] !== h[y]) {
                var k = `
` + u[m].replace(" at new ", " at ");
                return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), k;
              }
            while (1 <= m && 0 <= y);
          break;
        }
      }
    } finally {
      oe = !1, Error.prepareStackTrace = i;
    }
    return (e = e ? e.displayName || e.name : "") ? O(e) : "";
  }
  function A(e) {
    switch (e.tag) {
      case 5:
        return O(e.type);
      case 16:
        return O("Lazy");
      case 13:
        return O("Suspense");
      case 19:
        return O("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = ae(e.type, !1), e;
      case 11:
        return e = ae(e.type.render, !1), e;
      case 1:
        return e = ae(e.type, !0), e;
      default:
        return "";
    }
  }
  function F(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ue:
        return "Fragment";
      case ie:
        return "Portal";
      case be:
        return "Profiler";
      case Oe:
        return "StrictMode";
      case Ne:
        return "Suspense";
      case at:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Bt:
        return (e.displayName || "Context") + ".Consumer";
      case Xe:
        return (e._context.displayName || "Context") + ".Provider";
      case ot:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ft:
        return t = e.displayName || null, t !== null ? t : F(e.type) || "Memo";
      case Ie:
        t = e._payload, e = e._init;
        try {
          return F(e(t));
        } catch {
        }
    }
    return null;
  }
  function V(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return F(t);
      case 8:
        return t === Oe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function X(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ce(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Je(e) {
    var t = ce(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), a = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var u = i.get, h = i.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return u.call(this);
      }, set: function(m) {
        a = "" + m, h.call(this, m);
      } }), Object.defineProperty(e, t, { enumerable: i.enumerable }), { getValue: function() {
        return a;
      }, setValue: function(m) {
        a = "" + m;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function zt(e) {
    e._valueTracker || (e._valueTracker = Je(e));
  }
  function En(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(), a = "";
    return e && (a = ce(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== i ? (t.setValue(e), !0) : !1;
  }
  function xs(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function to(e, t) {
    var i = t.checked;
    return W({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: i ?? e._wrapperState.initialChecked });
  }
  function bl(e, t) {
    var i = t.defaultValue == null ? "" : t.defaultValue, a = t.checked != null ? t.checked : t.defaultChecked;
    i = X(t.value != null ? t.value : i), e._wrapperState = { initialChecked: a, initialValue: i, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function El(e, t) {
    t = t.checked, t != null && D(e, "checked", t, !1);
  }
  function ro(e, t) {
    El(e, t);
    var i = X(t.value), a = t.type;
    if (i != null) a === "number" ? (i === 0 && e.value === "" || e.value != i) && (e.value = "" + i) : e.value !== "" + i && (e.value = "" + i);
    else if (a === "submit" || a === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? no(e, t.type, i) : t.hasOwnProperty("defaultValue") && no(e, t.type, X(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function xl(e, t, i) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var a = t.type;
      if (!(a !== "submit" && a !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, i || t === e.value || (e.value = t), e.defaultValue = t;
    }
    i = e.name, i !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, i !== "" && (e.name = i);
  }
  function no(e, t, i) {
    (t !== "number" || xs(e.ownerDocument) !== e) && (i == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + i && (e.defaultValue = "" + i));
  }
  var xn = Array.isArray;
  function Mr(e, t, i, a) {
    if (e = e.options, t) {
      t = {};
      for (var u = 0; u < i.length; u++) t["$" + i[u]] = !0;
      for (i = 0; i < e.length; i++) u = t.hasOwnProperty("$" + e[i].value), e[i].selected !== u && (e[i].selected = u), u && a && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + X(i), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === i) {
          e[u].selected = !0, a && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function so(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return W({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Tl(e, t) {
    var i = t.value;
    if (i == null) {
      if (i = t.children, t = t.defaultValue, i != null) {
        if (t != null) throw Error(s(92));
        if (xn(i)) {
          if (1 < i.length) throw Error(s(93));
          i = i[0];
        }
        t = i;
      }
      t == null && (t = ""), i = t;
    }
    e._wrapperState = { initialValue: X(i) };
  }
  function Cl(e, t) {
    var i = X(t.value), a = X(t.defaultValue);
    i != null && (i = "" + i, i !== e.value && (e.value = i), t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)), a != null && (e.defaultValue = "" + a);
  }
  function Rl(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function jl(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function io(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? jl(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Ts, Pl = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, a, u) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, i, a, u);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Ts = Ts || document.createElement("div"), Ts.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ts.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Tn(e, t) {
    if (t) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Cn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Dh = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Cn).forEach(function(e) {
    Dh.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Cn[t] = Cn[e];
    });
  });
  function Al(e, t, i) {
    return t == null || typeof t == "boolean" || t === "" ? "" : i || typeof t != "number" || t === 0 || Cn.hasOwnProperty(e) && Cn[e] ? ("" + t).trim() : t + "px";
  }
  function Ol(e, t) {
    e = e.style;
    for (var i in t) if (t.hasOwnProperty(i)) {
      var a = i.indexOf("--") === 0, u = Al(i, t[i], a);
      i === "float" && (i = "cssFloat"), a ? e.setProperty(i, u) : e[i] = u;
    }
  }
  var Mh = W({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function oo(e, t) {
    if (t) {
      if (Mh[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function ao(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var lo = null;
  function uo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var co = null, Br = null, zr = null;
  function Nl(e) {
    if (e = Jn(e)) {
      if (typeof co != "function") throw Error(s(280));
      var t = e.stateNode;
      t && (t = Js(t), co(e.stateNode, e.type, t));
    }
  }
  function Il(e) {
    Br ? zr ? zr.push(e) : zr = [e] : Br = e;
  }
  function Ll() {
    if (Br) {
      var e = Br, t = zr;
      if (zr = Br = null, Nl(e), t) for (e = 0; e < t.length; e++) Nl(t[e]);
    }
  }
  function $l(e, t) {
    return e(t);
  }
  function Ul() {
  }
  var ho = !1;
  function Dl(e, t, i) {
    if (ho) return e(t, i);
    ho = !0;
    try {
      return $l(e, t, i);
    } finally {
      ho = !1, (Br !== null || zr !== null) && (Ul(), Ll());
    }
  }
  function Rn(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var a = Js(i);
    if (a === null) return null;
    i = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != "function") throw Error(s(231, t, typeof i));
    return i;
  }
  var fo = !1;
  if (f) try {
    var jn = {};
    Object.defineProperty(jn, "passive", { get: function() {
      fo = !0;
    } }), window.addEventListener("test", jn, jn), window.removeEventListener("test", jn, jn);
  } catch {
    fo = !1;
  }
  function Bh(e, t, i, a, u, h, m, y, k) {
    var R = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(i, R);
    } catch (I) {
      this.onError(I);
    }
  }
  var Pn = !1, Cs = null, Rs = !1, po = null, zh = { onError: function(e) {
    Pn = !0, Cs = e;
  } };
  function Fh(e, t, i, a, u, h, m, y, k) {
    Pn = !1, Cs = null, Bh.apply(zh, arguments);
  }
  function Hh(e, t, i, a, u, h, m, y, k) {
    if (Fh.apply(this, arguments), Pn) {
      if (Pn) {
        var R = Cs;
        Pn = !1, Cs = null;
      } else throw Error(s(198));
      Rs || (Rs = !0, po = R);
    }
  }
  function Sr(e) {
    var t = e, i = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (i = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? i : null;
  }
  function Ml(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Bl(e) {
    if (Sr(e) !== e) throw Error(s(188));
  }
  function qh(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Sr(e), t === null) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var i = e, a = t; ; ) {
      var u = i.return;
      if (u === null) break;
      var h = u.alternate;
      if (h === null) {
        if (a = u.return, a !== null) {
          i = a;
          continue;
        }
        break;
      }
      if (u.child === h.child) {
        for (h = u.child; h; ) {
          if (h === i) return Bl(u), e;
          if (h === a) return Bl(u), t;
          h = h.sibling;
        }
        throw Error(s(188));
      }
      if (i.return !== a.return) i = u, a = h;
      else {
        for (var m = !1, y = u.child; y; ) {
          if (y === i) {
            m = !0, i = u, a = h;
            break;
          }
          if (y === a) {
            m = !0, a = u, i = h;
            break;
          }
          y = y.sibling;
        }
        if (!m) {
          for (y = h.child; y; ) {
            if (y === i) {
              m = !0, i = h, a = u;
              break;
            }
            if (y === a) {
              m = !0, a = h, i = u;
              break;
            }
            y = y.sibling;
          }
          if (!m) throw Error(s(189));
        }
      }
      if (i.alternate !== a) throw Error(s(190));
    }
    if (i.tag !== 3) throw Error(s(188));
    return i.stateNode.current === i ? e : t;
  }
  function zl(e) {
    return e = qh(e), e !== null ? Fl(e) : null;
  }
  function Fl(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Fl(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Hl = r.unstable_scheduleCallback, ql = r.unstable_cancelCallback, Wh = r.unstable_shouldYield, Vh = r.unstable_requestPaint, Re = r.unstable_now, Kh = r.unstable_getCurrentPriorityLevel, mo = r.unstable_ImmediatePriority, Wl = r.unstable_UserBlockingPriority, js = r.unstable_NormalPriority, Gh = r.unstable_LowPriority, Vl = r.unstable_IdlePriority, Ps = null, Ot = null;
  function Jh(e) {
    if (Ot && typeof Ot.onCommitFiberRoot == "function") try {
      Ot.onCommitFiberRoot(Ps, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var St = Math.clz32 ? Math.clz32 : Xh, Qh = Math.log, Yh = Math.LN2;
  function Xh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Qh(e) / Yh | 0) | 0;
  }
  var As = 64, Os = 4194304;
  function An(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Ns(e, t) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var a = 0, u = e.suspendedLanes, h = e.pingedLanes, m = i & 268435455;
    if (m !== 0) {
      var y = m & ~u;
      y !== 0 ? a = An(y) : (h &= m, h !== 0 && (a = An(h)));
    } else m = i & ~u, m !== 0 ? a = An(m) : h !== 0 && (a = An(h));
    if (a === 0) return 0;
    if (t !== 0 && t !== a && (t & u) === 0 && (u = a & -a, h = t & -t, u >= h || u === 16 && (h & 4194240) !== 0)) return t;
    if ((a & 4) !== 0 && (a |= i & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= a; 0 < t; ) i = 31 - St(t), u = 1 << i, a |= e[i], t &= ~u;
    return a;
  }
  function Zh(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ef(e, t) {
    for (var i = e.suspendedLanes, a = e.pingedLanes, u = e.expirationTimes, h = e.pendingLanes; 0 < h; ) {
      var m = 31 - St(h), y = 1 << m, k = u[m];
      k === -1 ? ((y & i) === 0 || (y & a) !== 0) && (u[m] = Zh(y, t)) : k <= t && (e.expiredLanes |= y), h &= ~y;
    }
  }
  function go(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Kl() {
    var e = As;
    return As <<= 1, (As & 4194240) === 0 && (As = 64), e;
  }
  function yo(e) {
    for (var t = [], i = 0; 31 > i; i++) t.push(e);
    return t;
  }
  function On(e, t, i) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - St(t), e[t] = i;
  }
  function tf(e, t) {
    var i = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var a = e.eventTimes;
    for (e = e.expirationTimes; 0 < i; ) {
      var u = 31 - St(i), h = 1 << u;
      t[u] = 0, a[u] = -1, e[u] = -1, i &= ~h;
    }
  }
  function vo(e, t) {
    var i = e.entangledLanes |= t;
    for (e = e.entanglements; i; ) {
      var a = 31 - St(i), u = 1 << a;
      u & t | e[a] & t && (e[a] |= t), i &= ~u;
    }
  }
  var pe = 0;
  function Gl(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Jl, wo, Ql, Yl, Xl, _o = !1, Is = [], er = null, tr = null, rr = null, Nn = /* @__PURE__ */ new Map(), In = /* @__PURE__ */ new Map(), nr = [], rf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Zl(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        er = null;
        break;
      case "dragenter":
      case "dragleave":
        tr = null;
        break;
      case "mouseover":
      case "mouseout":
        rr = null;
        break;
      case "pointerover":
      case "pointerout":
        Nn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        In.delete(t.pointerId);
    }
  }
  function Ln(e, t, i, a, u, h) {
    return e === null || e.nativeEvent !== h ? (e = { blockedOn: t, domEventName: i, eventSystemFlags: a, nativeEvent: h, targetContainers: [u] }, t !== null && (t = Jn(t), t !== null && wo(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function nf(e, t, i, a, u) {
    switch (t) {
      case "focusin":
        return er = Ln(er, e, t, i, a, u), !0;
      case "dragenter":
        return tr = Ln(tr, e, t, i, a, u), !0;
      case "mouseover":
        return rr = Ln(rr, e, t, i, a, u), !0;
      case "pointerover":
        var h = u.pointerId;
        return Nn.set(h, Ln(Nn.get(h) || null, e, t, i, a, u)), !0;
      case "gotpointercapture":
        return h = u.pointerId, In.set(h, Ln(In.get(h) || null, e, t, i, a, u)), !0;
    }
    return !1;
  }
  function eu(e) {
    var t = br(e.target);
    if (t !== null) {
      var i = Sr(t);
      if (i !== null) {
        if (t = i.tag, t === 13) {
          if (t = Ml(i), t !== null) {
            e.blockedOn = t, Xl(e.priority, function() {
              Ql(i);
            });
            return;
          }
        } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ls(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var i = So(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var a = new i.constructor(i.type, i);
        lo = a, i.target.dispatchEvent(a), lo = null;
      } else return t = Jn(i), t !== null && wo(t), e.blockedOn = i, !1;
      t.shift();
    }
    return !0;
  }
  function tu(e, t, i) {
    Ls(e) && i.delete(t);
  }
  function sf() {
    _o = !1, er !== null && Ls(er) && (er = null), tr !== null && Ls(tr) && (tr = null), rr !== null && Ls(rr) && (rr = null), Nn.forEach(tu), In.forEach(tu);
  }
  function $n(e, t) {
    e.blockedOn === t && (e.blockedOn = null, _o || (_o = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, sf)));
  }
  function Un(e) {
    function t(u) {
      return $n(u, e);
    }
    if (0 < Is.length) {
      $n(Is[0], e);
      for (var i = 1; i < Is.length; i++) {
        var a = Is[i];
        a.blockedOn === e && (a.blockedOn = null);
      }
    }
    for (er !== null && $n(er, e), tr !== null && $n(tr, e), rr !== null && $n(rr, e), Nn.forEach(t), In.forEach(t), i = 0; i < nr.length; i++) a = nr[i], a.blockedOn === e && (a.blockedOn = null);
    for (; 0 < nr.length && (i = nr[0], i.blockedOn === null); ) eu(i), i.blockedOn === null && nr.shift();
  }
  var Fr = Z.ReactCurrentBatchConfig, $s = !0;
  function of(e, t, i, a) {
    var u = pe, h = Fr.transition;
    Fr.transition = null;
    try {
      pe = 1, ko(e, t, i, a);
    } finally {
      pe = u, Fr.transition = h;
    }
  }
  function af(e, t, i, a) {
    var u = pe, h = Fr.transition;
    Fr.transition = null;
    try {
      pe = 4, ko(e, t, i, a);
    } finally {
      pe = u, Fr.transition = h;
    }
  }
  function ko(e, t, i, a) {
    if ($s) {
      var u = So(e, t, i, a);
      if (u === null) Mo(e, t, a, Us, i), Zl(e, a);
      else if (nf(u, e, t, i, a)) a.stopPropagation();
      else if (Zl(e, a), t & 4 && -1 < rf.indexOf(e)) {
        for (; u !== null; ) {
          var h = Jn(u);
          if (h !== null && Jl(h), h = So(e, t, i, a), h === null && Mo(e, t, a, Us, i), h === u) break;
          u = h;
        }
        u !== null && a.stopPropagation();
      } else Mo(e, t, a, null, i);
    }
  }
  var Us = null;
  function So(e, t, i, a) {
    if (Us = null, e = uo(a), e = br(e), e !== null) if (t = Sr(e), t === null) e = null;
    else if (i = t.tag, i === 13) {
      if (e = Ml(t), e !== null) return e;
      e = null;
    } else if (i === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Us = e, null;
  }
  function ru(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Kh()) {
          case mo:
            return 1;
          case Wl:
            return 4;
          case js:
          case Gh:
            return 16;
          case Vl:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var sr = null, bo = null, Ds = null;
  function nu() {
    if (Ds) return Ds;
    var e, t = bo, i = t.length, a, u = "value" in sr ? sr.value : sr.textContent, h = u.length;
    for (e = 0; e < i && t[e] === u[e]; e++) ;
    var m = i - e;
    for (a = 1; a <= m && t[i - a] === u[h - a]; a++) ;
    return Ds = u.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Ms(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Bs() {
    return !0;
  }
  function su() {
    return !1;
  }
  function lt(e) {
    function t(i, a, u, h, m) {
      this._reactName = i, this._targetInst = u, this.type = a, this.nativeEvent = h, this.target = m, this.currentTarget = null;
      for (var y in e) e.hasOwnProperty(y) && (i = e[y], this[y] = i ? i(h) : h[y]);
      return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? Bs : su, this.isPropagationStopped = su, this;
    }
    return W(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var i = this.nativeEvent;
      i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = Bs);
    }, stopPropagation: function() {
      var i = this.nativeEvent;
      i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = Bs);
    }, persist: function() {
    }, isPersistent: Bs }), t;
  }
  var Hr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Eo = lt(Hr), Dn = W({}, Hr, { view: 0, detail: 0 }), lf = lt(Dn), xo, To, Mn, zs = W({}, Dn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ro, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Mn && (Mn && e.type === "mousemove" ? (xo = e.screenX - Mn.screenX, To = e.screenY - Mn.screenY) : To = xo = 0, Mn = e), xo);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : To;
  } }), iu = lt(zs), uf = W({}, zs, { dataTransfer: 0 }), cf = lt(uf), df = W({}, Dn, { relatedTarget: 0 }), Co = lt(df), hf = W({}, Hr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ff = lt(hf), pf = W({}, Hr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), mf = lt(pf), gf = W({}, Hr, { data: 0 }), ou = lt(gf), yf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, vf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, wf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function _f(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = wf[e]) ? !!t[e] : !1;
  }
  function Ro() {
    return _f;
  }
  var kf = W({}, Dn, { key: function(e) {
    if (e.key) {
      var t = yf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Ms(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ro, charCode: function(e) {
    return e.type === "keypress" ? Ms(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ms(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Sf = lt(kf), bf = W({}, zs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), au = lt(bf), Ef = W({}, Dn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ro }), xf = lt(Ef), Tf = W({}, Hr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Cf = lt(Tf), Rf = W({}, zs, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), jf = lt(Rf), Pf = [9, 13, 27, 32], jo = f && "CompositionEvent" in window, Bn = null;
  f && "documentMode" in document && (Bn = document.documentMode);
  var Af = f && "TextEvent" in window && !Bn, lu = f && (!jo || Bn && 8 < Bn && 11 >= Bn), uu = " ", cu = !1;
  function du(e, t) {
    switch (e) {
      case "keyup":
        return Pf.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function hu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var qr = !1;
  function Of(e, t) {
    switch (e) {
      case "compositionend":
        return hu(t);
      case "keypress":
        return t.which !== 32 ? null : (cu = !0, uu);
      case "textInput":
        return e = t.data, e === uu && cu ? null : e;
      default:
        return null;
    }
  }
  function Nf(e, t) {
    if (qr) return e === "compositionend" || !jo && du(e, t) ? (e = nu(), Ds = bo = sr = null, qr = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return lu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var If = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function fu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!If[e.type] : t === "textarea";
  }
  function pu(e, t, i, a) {
    Il(a), t = Vs(t, "onChange"), 0 < t.length && (i = new Eo("onChange", "change", null, i, a), e.push({ event: i, listeners: t }));
  }
  var zn = null, Fn = null;
  function Lf(e) {
    Ou(e, 0);
  }
  function Fs(e) {
    var t = Jr(e);
    if (En(t)) return e;
  }
  function $f(e, t) {
    if (e === "change") return t;
  }
  var mu = !1;
  if (f) {
    var Po;
    if (f) {
      var Ao = "oninput" in document;
      if (!Ao) {
        var gu = document.createElement("div");
        gu.setAttribute("oninput", "return;"), Ao = typeof gu.oninput == "function";
      }
      Po = Ao;
    } else Po = !1;
    mu = Po && (!document.documentMode || 9 < document.documentMode);
  }
  function yu() {
    zn && (zn.detachEvent("onpropertychange", vu), Fn = zn = null);
  }
  function vu(e) {
    if (e.propertyName === "value" && Fs(Fn)) {
      var t = [];
      pu(t, Fn, e, uo(e)), Dl(Lf, t);
    }
  }
  function Uf(e, t, i) {
    e === "focusin" ? (yu(), zn = t, Fn = i, zn.attachEvent("onpropertychange", vu)) : e === "focusout" && yu();
  }
  function Df(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Fs(Fn);
  }
  function Mf(e, t) {
    if (e === "click") return Fs(t);
  }
  function Bf(e, t) {
    if (e === "input" || e === "change") return Fs(t);
  }
  function zf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var bt = typeof Object.is == "function" ? Object.is : zf;
  function Hn(e, t) {
    if (bt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var i = Object.keys(e), a = Object.keys(t);
    if (i.length !== a.length) return !1;
    for (a = 0; a < i.length; a++) {
      var u = i[a];
      if (!p.call(t, u) || !bt(e[u], t[u])) return !1;
    }
    return !0;
  }
  function wu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function _u(e, t) {
    var i = wu(e);
    e = 0;
    for (var a; i; ) {
      if (i.nodeType === 3) {
        if (a = e + i.textContent.length, e <= t && a >= t) return { node: i, offset: t - e };
        e = a;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = wu(i);
    }
  }
  function ku(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ku(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Su() {
    for (var e = window, t = xs(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof t.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = t.contentWindow;
      else break;
      t = xs(e.document);
    }
    return t;
  }
  function Oo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Ff(e) {
    var t = Su(), i = e.focusedElem, a = e.selectionRange;
    if (t !== i && i && i.ownerDocument && ku(i.ownerDocument.documentElement, i)) {
      if (a !== null && Oo(i)) {
        if (t = a.start, e = a.end, e === void 0 && (e = t), "selectionStart" in i) i.selectionStart = t, i.selectionEnd = Math.min(e, i.value.length);
        else if (e = (t = i.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var u = i.textContent.length, h = Math.min(a.start, u);
          a = a.end === void 0 ? h : Math.min(a.end, u), !e.extend && h > a && (u = a, a = h, h = u), u = _u(i, h);
          var m = _u(
            i,
            a
          );
          u && m && (e.rangeCount !== 1 || e.anchorNode !== u.node || e.anchorOffset !== u.offset || e.focusNode !== m.node || e.focusOffset !== m.offset) && (t = t.createRange(), t.setStart(u.node, u.offset), e.removeAllRanges(), h > a ? (e.addRange(t), e.extend(m.node, m.offset)) : (t.setEnd(m.node, m.offset), e.addRange(t)));
        }
      }
      for (t = [], e = i; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof i.focus == "function" && i.focus(), i = 0; i < t.length; i++) e = t[i], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Hf = f && "documentMode" in document && 11 >= document.documentMode, Wr = null, No = null, qn = null, Io = !1;
  function bu(e, t, i) {
    var a = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Io || Wr == null || Wr !== xs(a) || (a = Wr, "selectionStart" in a && Oo(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), qn && Hn(qn, a) || (qn = a, a = Vs(No, "onSelect"), 0 < a.length && (t = new Eo("onSelect", "select", null, t, i), e.push({ event: t, listeners: a }), t.target = Wr)));
  }
  function Hs(e, t) {
    var i = {};
    return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
  }
  var Vr = { animationend: Hs("Animation", "AnimationEnd"), animationiteration: Hs("Animation", "AnimationIteration"), animationstart: Hs("Animation", "AnimationStart"), transitionend: Hs("Transition", "TransitionEnd") }, Lo = {}, Eu = {};
  f && (Eu = document.createElement("div").style, "AnimationEvent" in window || (delete Vr.animationend.animation, delete Vr.animationiteration.animation, delete Vr.animationstart.animation), "TransitionEvent" in window || delete Vr.transitionend.transition);
  function qs(e) {
    if (Lo[e]) return Lo[e];
    if (!Vr[e]) return e;
    var t = Vr[e], i;
    for (i in t) if (t.hasOwnProperty(i) && i in Eu) return Lo[e] = t[i];
    return e;
  }
  var xu = qs("animationend"), Tu = qs("animationiteration"), Cu = qs("animationstart"), Ru = qs("transitionend"), ju = /* @__PURE__ */ new Map(), Pu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ir(e, t) {
    ju.set(e, t), c(t, [e]);
  }
  for (var $o = 0; $o < Pu.length; $o++) {
    var Uo = Pu[$o], qf = Uo.toLowerCase(), Wf = Uo[0].toUpperCase() + Uo.slice(1);
    ir(qf, "on" + Wf);
  }
  ir(xu, "onAnimationEnd"), ir(Tu, "onAnimationIteration"), ir(Cu, "onAnimationStart"), ir("dblclick", "onDoubleClick"), ir("focusin", "onFocus"), ir("focusout", "onBlur"), ir(Ru, "onTransitionEnd"), d("onMouseEnter", ["mouseout", "mouseover"]), d("onMouseLeave", ["mouseout", "mouseover"]), d("onPointerEnter", ["pointerout", "pointerover"]), d("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Wn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Vf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wn));
  function Au(e, t, i) {
    var a = e.type || "unknown-event";
    e.currentTarget = i, Hh(a, t, void 0, e), e.currentTarget = null;
  }
  function Ou(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var a = e[i], u = a.event;
      a = a.listeners;
      e: {
        var h = void 0;
        if (t) for (var m = a.length - 1; 0 <= m; m--) {
          var y = a[m], k = y.instance, R = y.currentTarget;
          if (y = y.listener, k !== h && u.isPropagationStopped()) break e;
          Au(u, y, R), h = k;
        }
        else for (m = 0; m < a.length; m++) {
          if (y = a[m], k = y.instance, R = y.currentTarget, y = y.listener, k !== h && u.isPropagationStopped()) break e;
          Au(u, y, R), h = k;
        }
      }
    }
    if (Rs) throw e = po, Rs = !1, po = null, e;
  }
  function _e(e, t) {
    var i = t[Wo];
    i === void 0 && (i = t[Wo] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    i.has(a) || (Nu(t, e, 2, !1), i.add(a));
  }
  function Do(e, t, i) {
    var a = 0;
    t && (a |= 4), Nu(i, e, a, t);
  }
  var Ws = "_reactListening" + Math.random().toString(36).slice(2);
  function Vn(e) {
    if (!e[Ws]) {
      e[Ws] = !0, o.forEach(function(i) {
        i !== "selectionchange" && (Vf.has(i) || Do(i, !1, e), Do(i, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ws] || (t[Ws] = !0, Do("selectionchange", !1, t));
    }
  }
  function Nu(e, t, i, a) {
    switch (ru(t)) {
      case 1:
        var u = of;
        break;
      case 4:
        u = af;
        break;
      default:
        u = ko;
    }
    i = u.bind(null, t, i, e), u = void 0, !fo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), a ? u !== void 0 ? e.addEventListener(t, i, { capture: !0, passive: u }) : e.addEventListener(t, i, !0) : u !== void 0 ? e.addEventListener(t, i, { passive: u }) : e.addEventListener(t, i, !1);
  }
  function Mo(e, t, i, a, u) {
    var h = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null) e: for (; ; ) {
      if (a === null) return;
      var m = a.tag;
      if (m === 3 || m === 4) {
        var y = a.stateNode.containerInfo;
        if (y === u || y.nodeType === 8 && y.parentNode === u) break;
        if (m === 4) for (m = a.return; m !== null; ) {
          var k = m.tag;
          if ((k === 3 || k === 4) && (k = m.stateNode.containerInfo, k === u || k.nodeType === 8 && k.parentNode === u)) return;
          m = m.return;
        }
        for (; y !== null; ) {
          if (m = br(y), m === null) return;
          if (k = m.tag, k === 5 || k === 6) {
            a = h = m;
            continue e;
          }
          y = y.parentNode;
        }
      }
      a = a.return;
    }
    Dl(function() {
      var R = h, I = uo(i), L = [];
      e: {
        var N = ju.get(e);
        if (N !== void 0) {
          var q = Eo, G = e;
          switch (e) {
            case "keypress":
              if (Ms(i) === 0) break e;
            case "keydown":
            case "keyup":
              q = Sf;
              break;
            case "focusin":
              G = "focus", q = Co;
              break;
            case "focusout":
              G = "blur", q = Co;
              break;
            case "beforeblur":
            case "afterblur":
              q = Co;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              q = iu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              q = cf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              q = xf;
              break;
            case xu:
            case Tu:
            case Cu:
              q = ff;
              break;
            case Ru:
              q = Cf;
              break;
            case "scroll":
              q = lf;
              break;
            case "wheel":
              q = jf;
              break;
            case "copy":
            case "cut":
            case "paste":
              q = mf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              q = au;
          }
          var Q = (t & 4) !== 0, je = !Q && e === "scroll", T = Q ? N !== null ? N + "Capture" : null : N;
          Q = [];
          for (var S = R, C; S !== null; ) {
            C = S;
            var $ = C.stateNode;
            if (C.tag === 5 && $ !== null && (C = $, T !== null && ($ = Rn(S, T), $ != null && Q.push(Kn(S, $, C)))), je) break;
            S = S.return;
          }
          0 < Q.length && (N = new q(N, G, null, i, I), L.push({ event: N, listeners: Q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (N = e === "mouseover" || e === "pointerover", q = e === "mouseout" || e === "pointerout", N && i !== lo && (G = i.relatedTarget || i.fromElement) && (br(G) || G[Ft])) break e;
          if ((q || N) && (N = I.window === I ? I : (N = I.ownerDocument) ? N.defaultView || N.parentWindow : window, q ? (G = i.relatedTarget || i.toElement, q = R, G = G ? br(G) : null, G !== null && (je = Sr(G), G !== je || G.tag !== 5 && G.tag !== 6) && (G = null)) : (q = null, G = R), q !== G)) {
            if (Q = iu, $ = "onMouseLeave", T = "onMouseEnter", S = "mouse", (e === "pointerout" || e === "pointerover") && (Q = au, $ = "onPointerLeave", T = "onPointerEnter", S = "pointer"), je = q == null ? N : Jr(q), C = G == null ? N : Jr(G), N = new Q($, S + "leave", q, i, I), N.target = je, N.relatedTarget = C, $ = null, br(I) === R && (Q = new Q(T, S + "enter", G, i, I), Q.target = C, Q.relatedTarget = je, $ = Q), je = $, q && G) t: {
              for (Q = q, T = G, S = 0, C = Q; C; C = Kr(C)) S++;
              for (C = 0, $ = T; $; $ = Kr($)) C++;
              for (; 0 < S - C; ) Q = Kr(Q), S--;
              for (; 0 < C - S; ) T = Kr(T), C--;
              for (; S--; ) {
                if (Q === T || T !== null && Q === T.alternate) break t;
                Q = Kr(Q), T = Kr(T);
              }
              Q = null;
            }
            else Q = null;
            q !== null && Iu(L, N, q, Q, !1), G !== null && je !== null && Iu(L, je, G, Q, !0);
          }
        }
        e: {
          if (N = R ? Jr(R) : window, q = N.nodeName && N.nodeName.toLowerCase(), q === "select" || q === "input" && N.type === "file") var Y = $f;
          else if (fu(N)) if (mu) Y = Bf;
          else {
            Y = Df;
            var ee = Uf;
          }
          else (q = N.nodeName) && q.toLowerCase() === "input" && (N.type === "checkbox" || N.type === "radio") && (Y = Mf);
          if (Y && (Y = Y(e, R))) {
            pu(L, Y, i, I);
            break e;
          }
          ee && ee(e, N, R), e === "focusout" && (ee = N._wrapperState) && ee.controlled && N.type === "number" && no(N, "number", N.value);
        }
        switch (ee = R ? Jr(R) : window, e) {
          case "focusin":
            (fu(ee) || ee.contentEditable === "true") && (Wr = ee, No = R, qn = null);
            break;
          case "focusout":
            qn = No = Wr = null;
            break;
          case "mousedown":
            Io = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Io = !1, bu(L, i, I);
            break;
          case "selectionchange":
            if (Hf) break;
          case "keydown":
          case "keyup":
            bu(L, i, I);
        }
        var te;
        if (jo) e: {
          switch (e) {
            case "compositionstart":
              var se = "onCompositionStart";
              break e;
            case "compositionend":
              se = "onCompositionEnd";
              break e;
            case "compositionupdate":
              se = "onCompositionUpdate";
              break e;
          }
          se = void 0;
        }
        else qr ? du(e, i) && (se = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (se = "onCompositionStart");
        se && (lu && i.locale !== "ko" && (qr || se !== "onCompositionStart" ? se === "onCompositionEnd" && qr && (te = nu()) : (sr = I, bo = "value" in sr ? sr.value : sr.textContent, qr = !0)), ee = Vs(R, se), 0 < ee.length && (se = new ou(se, e, null, i, I), L.push({ event: se, listeners: ee }), te ? se.data = te : (te = hu(i), te !== null && (se.data = te)))), (te = Af ? Of(e, i) : Nf(e, i)) && (R = Vs(R, "onBeforeInput"), 0 < R.length && (I = new ou("onBeforeInput", "beforeinput", null, i, I), L.push({ event: I, listeners: R }), I.data = te));
      }
      Ou(L, t);
    });
  }
  function Kn(e, t, i) {
    return { instance: e, listener: t, currentTarget: i };
  }
  function Vs(e, t) {
    for (var i = t + "Capture", a = []; e !== null; ) {
      var u = e, h = u.stateNode;
      u.tag === 5 && h !== null && (u = h, h = Rn(e, i), h != null && a.unshift(Kn(e, h, u)), h = Rn(e, t), h != null && a.push(Kn(e, h, u))), e = e.return;
    }
    return a;
  }
  function Kr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Iu(e, t, i, a, u) {
    for (var h = t._reactName, m = []; i !== null && i !== a; ) {
      var y = i, k = y.alternate, R = y.stateNode;
      if (k !== null && k === a) break;
      y.tag === 5 && R !== null && (y = R, u ? (k = Rn(i, h), k != null && m.unshift(Kn(i, k, y))) : u || (k = Rn(i, h), k != null && m.push(Kn(i, k, y)))), i = i.return;
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var Kf = /\r\n?/g, Gf = /\u0000|\uFFFD/g;
  function Lu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Kf, `
`).replace(Gf, "");
  }
  function Ks(e, t, i) {
    if (t = Lu(t), Lu(e) !== t && i) throw Error(s(425));
  }
  function Gs() {
  }
  var Bo = null, zo = null;
  function Fo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ho = typeof setTimeout == "function" ? setTimeout : void 0, Jf = typeof clearTimeout == "function" ? clearTimeout : void 0, $u = typeof Promise == "function" ? Promise : void 0, Qf = typeof queueMicrotask == "function" ? queueMicrotask : typeof $u < "u" ? function(e) {
    return $u.resolve(null).then(e).catch(Yf);
  } : Ho;
  function Yf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function qo(e, t) {
    var i = t, a = 0;
    do {
      var u = i.nextSibling;
      if (e.removeChild(i), u && u.nodeType === 8) if (i = u.data, i === "/$") {
        if (a === 0) {
          e.removeChild(u), Un(t);
          return;
        }
        a--;
      } else i !== "$" && i !== "$?" && i !== "$!" || a++;
      i = u;
    } while (i);
    Un(t);
  }
  function or(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Uu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (t === 0) return e;
          t--;
        } else i === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Gr = Math.random().toString(36).slice(2), Nt = "__reactFiber$" + Gr, Gn = "__reactProps$" + Gr, Ft = "__reactContainer$" + Gr, Wo = "__reactEvents$" + Gr, Xf = "__reactListeners$" + Gr, Zf = "__reactHandles$" + Gr;
  function br(e) {
    var t = e[Nt];
    if (t) return t;
    for (var i = e.parentNode; i; ) {
      if (t = i[Ft] || i[Nt]) {
        if (i = t.alternate, t.child !== null || i !== null && i.child !== null) for (e = Uu(e); e !== null; ) {
          if (i = e[Nt]) return i;
          e = Uu(e);
        }
        return t;
      }
      e = i, i = e.parentNode;
    }
    return null;
  }
  function Jn(e) {
    return e = e[Nt] || e[Ft], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Jr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Js(e) {
    return e[Gn] || null;
  }
  var Vo = [], Qr = -1;
  function ar(e) {
    return { current: e };
  }
  function ke(e) {
    0 > Qr || (e.current = Vo[Qr], Vo[Qr] = null, Qr--);
  }
  function ye(e, t) {
    Qr++, Vo[Qr] = e.current, e.current = t;
  }
  var lr = {}, We = ar(lr), Ze = ar(!1), Er = lr;
  function Yr(e, t) {
    var i = e.type.contextTypes;
    if (!i) return lr;
    var a = e.stateNode;
    if (a && a.__reactInternalMemoizedUnmaskedChildContext === t) return a.__reactInternalMemoizedMaskedChildContext;
    var u = {}, h;
    for (h in i) u[h] = t[h];
    return a && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = u), u;
  }
  function et(e) {
    return e = e.childContextTypes, e != null;
  }
  function Qs() {
    ke(Ze), ke(We);
  }
  function Du(e, t, i) {
    if (We.current !== lr) throw Error(s(168));
    ye(We, t), ye(Ze, i);
  }
  function Mu(e, t, i) {
    var a = e.stateNode;
    if (t = t.childContextTypes, typeof a.getChildContext != "function") return i;
    a = a.getChildContext();
    for (var u in a) if (!(u in t)) throw Error(s(108, V(e) || "Unknown", u));
    return W({}, i, a);
  }
  function Ys(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || lr, Er = We.current, ye(We, e), ye(Ze, Ze.current), !0;
  }
  function Bu(e, t, i) {
    var a = e.stateNode;
    if (!a) throw Error(s(169));
    i ? (e = Mu(e, t, Er), a.__reactInternalMemoizedMergedChildContext = e, ke(Ze), ke(We), ye(We, e)) : ke(Ze), ye(Ze, i);
  }
  var Ht = null, Xs = !1, Ko = !1;
  function zu(e) {
    Ht === null ? Ht = [e] : Ht.push(e);
  }
  function ep(e) {
    Xs = !0, zu(e);
  }
  function ur() {
    if (!Ko && Ht !== null) {
      Ko = !0;
      var e = 0, t = pe;
      try {
        var i = Ht;
        for (pe = 1; e < i.length; e++) {
          var a = i[e];
          do
            a = a(!0);
          while (a !== null);
        }
        Ht = null, Xs = !1;
      } catch (u) {
        throw Ht !== null && (Ht = Ht.slice(e + 1)), Hl(mo, ur), u;
      } finally {
        pe = t, Ko = !1;
      }
    }
    return null;
  }
  var Xr = [], Zr = 0, Zs = null, ei = 0, pt = [], mt = 0, xr = null, qt = 1, Wt = "";
  function Tr(e, t) {
    Xr[Zr++] = ei, Xr[Zr++] = Zs, Zs = e, ei = t;
  }
  function Fu(e, t, i) {
    pt[mt++] = qt, pt[mt++] = Wt, pt[mt++] = xr, xr = e;
    var a = qt;
    e = Wt;
    var u = 32 - St(a) - 1;
    a &= ~(1 << u), i += 1;
    var h = 32 - St(t) + u;
    if (30 < h) {
      var m = u - u % 5;
      h = (a & (1 << m) - 1).toString(32), a >>= m, u -= m, qt = 1 << 32 - St(t) + u | i << u | a, Wt = h + e;
    } else qt = 1 << h | i << u | a, Wt = e;
  }
  function Go(e) {
    e.return !== null && (Tr(e, 1), Fu(e, 1, 0));
  }
  function Jo(e) {
    for (; e === Zs; ) Zs = Xr[--Zr], Xr[Zr] = null, ei = Xr[--Zr], Xr[Zr] = null;
    for (; e === xr; ) xr = pt[--mt], pt[mt] = null, Wt = pt[--mt], pt[mt] = null, qt = pt[--mt], pt[mt] = null;
  }
  var ut = null, ct = null, Se = !1, Et = null;
  function Hu(e, t) {
    var i = wt(5, null, null, 0);
    i.elementType = "DELETED", i.stateNode = t, i.return = e, t = e.deletions, t === null ? (e.deletions = [i], e.flags |= 16) : t.push(i);
  }
  function qu(e, t) {
    switch (e.tag) {
      case 5:
        var i = e.type;
        return t = t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ut = e, ct = or(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ut = e, ct = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (i = xr !== null ? { id: qt, overflow: Wt } : null, e.memoizedState = { dehydrated: t, treeContext: i, retryLane: 1073741824 }, i = wt(18, null, null, 0), i.stateNode = t, i.return = e, e.child = i, ut = e, ct = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Qo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Yo(e) {
    if (Se) {
      var t = ct;
      if (t) {
        var i = t;
        if (!qu(e, t)) {
          if (Qo(e)) throw Error(s(418));
          t = or(i.nextSibling);
          var a = ut;
          t && qu(e, t) ? Hu(a, i) : (e.flags = e.flags & -4097 | 2, Se = !1, ut = e);
        }
      } else {
        if (Qo(e)) throw Error(s(418));
        e.flags = e.flags & -4097 | 2, Se = !1, ut = e;
      }
    }
  }
  function Wu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ut = e;
  }
  function ti(e) {
    if (e !== ut) return !1;
    if (!Se) return Wu(e), Se = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Fo(e.type, e.memoizedProps)), t && (t = ct)) {
      if (Qo(e)) throw Vu(), Error(s(418));
      for (; t; ) Hu(e, t), t = or(t.nextSibling);
    }
    if (Wu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var i = e.data;
            if (i === "/$") {
              if (t === 0) {
                ct = or(e.nextSibling);
                break e;
              }
              t--;
            } else i !== "$" && i !== "$!" && i !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        ct = null;
      }
    } else ct = ut ? or(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Vu() {
    for (var e = ct; e; ) e = or(e.nextSibling);
  }
  function en() {
    ct = ut = null, Se = !1;
  }
  function Xo(e) {
    Et === null ? Et = [e] : Et.push(e);
  }
  var tp = Z.ReactCurrentBatchConfig;
  function Qn(e, t, i) {
    if (e = i.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (i._owner) {
        if (i = i._owner, i) {
          if (i.tag !== 1) throw Error(s(309));
          var a = i.stateNode;
        }
        if (!a) throw Error(s(147, e));
        var u = a, h = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === h ? t.ref : (t = function(m) {
          var y = u.refs;
          m === null ? delete y[h] : y[h] = m;
        }, t._stringRef = h, t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!i._owner) throw Error(s(290, e));
    }
    return e;
  }
  function ri(e, t) {
    throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Ku(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Gu(e) {
    function t(T, S) {
      if (e) {
        var C = T.deletions;
        C === null ? (T.deletions = [S], T.flags |= 16) : C.push(S);
      }
    }
    function i(T, S) {
      if (!e) return null;
      for (; S !== null; ) t(T, S), S = S.sibling;
      return null;
    }
    function a(T, S) {
      for (T = /* @__PURE__ */ new Map(); S !== null; ) S.key !== null ? T.set(S.key, S) : T.set(S.index, S), S = S.sibling;
      return T;
    }
    function u(T, S) {
      return T = yr(T, S), T.index = 0, T.sibling = null, T;
    }
    function h(T, S, C) {
      return T.index = C, e ? (C = T.alternate, C !== null ? (C = C.index, C < S ? (T.flags |= 2, S) : C) : (T.flags |= 2, S)) : (T.flags |= 1048576, S);
    }
    function m(T) {
      return e && T.alternate === null && (T.flags |= 2), T;
    }
    function y(T, S, C, $) {
      return S === null || S.tag !== 6 ? (S = Ha(C, T.mode, $), S.return = T, S) : (S = u(S, C), S.return = T, S);
    }
    function k(T, S, C, $) {
      var Y = C.type;
      return Y === ue ? I(T, S, C.props.children, $, C.key) : S !== null && (S.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === Ie && Ku(Y) === S.type) ? ($ = u(S, C.props), $.ref = Qn(T, S, C), $.return = T, $) : ($ = Ti(C.type, C.key, C.props, null, T.mode, $), $.ref = Qn(T, S, C), $.return = T, $);
    }
    function R(T, S, C, $) {
      return S === null || S.tag !== 4 || S.stateNode.containerInfo !== C.containerInfo || S.stateNode.implementation !== C.implementation ? (S = qa(C, T.mode, $), S.return = T, S) : (S = u(S, C.children || []), S.return = T, S);
    }
    function I(T, S, C, $, Y) {
      return S === null || S.tag !== 7 ? (S = Ir(C, T.mode, $, Y), S.return = T, S) : (S = u(S, C), S.return = T, S);
    }
    function L(T, S, C) {
      if (typeof S == "string" && S !== "" || typeof S == "number") return S = Ha("" + S, T.mode, C), S.return = T, S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case me:
            return C = Ti(S.type, S.key, S.props, null, T.mode, C), C.ref = Qn(T, null, S), C.return = T, C;
          case ie:
            return S = qa(S, T.mode, C), S.return = T, S;
          case Ie:
            var $ = S._init;
            return L(T, $(S._payload), C);
        }
        if (xn(S) || re(S)) return S = Ir(S, T.mode, C, null), S.return = T, S;
        ri(T, S);
      }
      return null;
    }
    function N(T, S, C, $) {
      var Y = S !== null ? S.key : null;
      if (typeof C == "string" && C !== "" || typeof C == "number") return Y !== null ? null : y(T, S, "" + C, $);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case me:
            return C.key === Y ? k(T, S, C, $) : null;
          case ie:
            return C.key === Y ? R(T, S, C, $) : null;
          case Ie:
            return Y = C._init, N(
              T,
              S,
              Y(C._payload),
              $
            );
        }
        if (xn(C) || re(C)) return Y !== null ? null : I(T, S, C, $, null);
        ri(T, C);
      }
      return null;
    }
    function q(T, S, C, $, Y) {
      if (typeof $ == "string" && $ !== "" || typeof $ == "number") return T = T.get(C) || null, y(S, T, "" + $, Y);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case me:
            return T = T.get($.key === null ? C : $.key) || null, k(S, T, $, Y);
          case ie:
            return T = T.get($.key === null ? C : $.key) || null, R(S, T, $, Y);
          case Ie:
            var ee = $._init;
            return q(T, S, C, ee($._payload), Y);
        }
        if (xn($) || re($)) return T = T.get(C) || null, I(S, T, $, Y, null);
        ri(S, $);
      }
      return null;
    }
    function G(T, S, C, $) {
      for (var Y = null, ee = null, te = S, se = S = 0, Me = null; te !== null && se < C.length; se++) {
        te.index > se ? (Me = te, te = null) : Me = te.sibling;
        var he = N(T, te, C[se], $);
        if (he === null) {
          te === null && (te = Me);
          break;
        }
        e && te && he.alternate === null && t(T, te), S = h(he, S, se), ee === null ? Y = he : ee.sibling = he, ee = he, te = Me;
      }
      if (se === C.length) return i(T, te), Se && Tr(T, se), Y;
      if (te === null) {
        for (; se < C.length; se++) te = L(T, C[se], $), te !== null && (S = h(te, S, se), ee === null ? Y = te : ee.sibling = te, ee = te);
        return Se && Tr(T, se), Y;
      }
      for (te = a(T, te); se < C.length; se++) Me = q(te, T, se, C[se], $), Me !== null && (e && Me.alternate !== null && te.delete(Me.key === null ? se : Me.key), S = h(Me, S, se), ee === null ? Y = Me : ee.sibling = Me, ee = Me);
      return e && te.forEach(function(vr) {
        return t(T, vr);
      }), Se && Tr(T, se), Y;
    }
    function Q(T, S, C, $) {
      var Y = re(C);
      if (typeof Y != "function") throw Error(s(150));
      if (C = Y.call(C), C == null) throw Error(s(151));
      for (var ee = Y = null, te = S, se = S = 0, Me = null, he = C.next(); te !== null && !he.done; se++, he = C.next()) {
        te.index > se ? (Me = te, te = null) : Me = te.sibling;
        var vr = N(T, te, he.value, $);
        if (vr === null) {
          te === null && (te = Me);
          break;
        }
        e && te && vr.alternate === null && t(T, te), S = h(vr, S, se), ee === null ? Y = vr : ee.sibling = vr, ee = vr, te = Me;
      }
      if (he.done) return i(
        T,
        te
      ), Se && Tr(T, se), Y;
      if (te === null) {
        for (; !he.done; se++, he = C.next()) he = L(T, he.value, $), he !== null && (S = h(he, S, se), ee === null ? Y = he : ee.sibling = he, ee = he);
        return Se && Tr(T, se), Y;
      }
      for (te = a(T, te); !he.done; se++, he = C.next()) he = q(te, T, se, he.value, $), he !== null && (e && he.alternate !== null && te.delete(he.key === null ? se : he.key), S = h(he, S, se), ee === null ? Y = he : ee.sibling = he, ee = he);
      return e && te.forEach(function(Ip) {
        return t(T, Ip);
      }), Se && Tr(T, se), Y;
    }
    function je(T, S, C, $) {
      if (typeof C == "object" && C !== null && C.type === ue && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case me:
            e: {
              for (var Y = C.key, ee = S; ee !== null; ) {
                if (ee.key === Y) {
                  if (Y = C.type, Y === ue) {
                    if (ee.tag === 7) {
                      i(T, ee.sibling), S = u(ee, C.props.children), S.return = T, T = S;
                      break e;
                    }
                  } else if (ee.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === Ie && Ku(Y) === ee.type) {
                    i(T, ee.sibling), S = u(ee, C.props), S.ref = Qn(T, ee, C), S.return = T, T = S;
                    break e;
                  }
                  i(T, ee);
                  break;
                } else t(T, ee);
                ee = ee.sibling;
              }
              C.type === ue ? (S = Ir(C.props.children, T.mode, $, C.key), S.return = T, T = S) : ($ = Ti(C.type, C.key, C.props, null, T.mode, $), $.ref = Qn(T, S, C), $.return = T, T = $);
            }
            return m(T);
          case ie:
            e: {
              for (ee = C.key; S !== null; ) {
                if (S.key === ee) if (S.tag === 4 && S.stateNode.containerInfo === C.containerInfo && S.stateNode.implementation === C.implementation) {
                  i(T, S.sibling), S = u(S, C.children || []), S.return = T, T = S;
                  break e;
                } else {
                  i(T, S);
                  break;
                }
                else t(T, S);
                S = S.sibling;
              }
              S = qa(C, T.mode, $), S.return = T, T = S;
            }
            return m(T);
          case Ie:
            return ee = C._init, je(T, S, ee(C._payload), $);
        }
        if (xn(C)) return G(T, S, C, $);
        if (re(C)) return Q(T, S, C, $);
        ri(T, C);
      }
      return typeof C == "string" && C !== "" || typeof C == "number" ? (C = "" + C, S !== null && S.tag === 6 ? (i(T, S.sibling), S = u(S, C), S.return = T, T = S) : (i(T, S), S = Ha(C, T.mode, $), S.return = T, T = S), m(T)) : i(T, S);
    }
    return je;
  }
  var tn = Gu(!0), Ju = Gu(!1), ni = ar(null), si = null, rn = null, Zo = null;
  function ea() {
    Zo = rn = si = null;
  }
  function ta(e) {
    var t = ni.current;
    ke(ni), e._currentValue = t;
  }
  function ra(e, t, i) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === i) break;
      e = e.return;
    }
  }
  function nn(e, t) {
    si = e, Zo = rn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (tt = !0), e.firstContext = null);
  }
  function gt(e) {
    var t = e._currentValue;
    if (Zo !== e) if (e = { context: e, memoizedValue: t, next: null }, rn === null) {
      if (si === null) throw Error(s(308));
      rn = e, si.dependencies = { lanes: 0, firstContext: e };
    } else rn = rn.next = e;
    return t;
  }
  var Cr = null;
  function na(e) {
    Cr === null ? Cr = [e] : Cr.push(e);
  }
  function Qu(e, t, i, a) {
    var u = t.interleaved;
    return u === null ? (i.next = i, na(t)) : (i.next = u.next, u.next = i), t.interleaved = i, Vt(e, a);
  }
  function Vt(e, t) {
    e.lanes |= t;
    var i = e.alternate;
    for (i !== null && (i.lanes |= t), i = e, e = e.return; e !== null; ) e.childLanes |= t, i = e.alternate, i !== null && (i.childLanes |= t), i = e, e = e.return;
    return i.tag === 3 ? i.stateNode : null;
  }
  var cr = !1;
  function sa(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Yu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Kt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function dr(e, t, i) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (de & 2) !== 0) {
      var u = a.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), a.pending = t, Vt(e, i);
    }
    return u = a.interleaved, u === null ? (t.next = t, na(a)) : (t.next = u.next, u.next = t), a.interleaved = t, Vt(e, i);
  }
  function ii(e, t, i) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (i & 4194240) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, i |= a, t.lanes = i, vo(e, i);
    }
  }
  function Xu(e, t) {
    var i = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, i === a)) {
      var u = null, h = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var m = { eventTime: i.eventTime, lane: i.lane, tag: i.tag, payload: i.payload, callback: i.callback, next: null };
          h === null ? u = h = m : h = h.next = m, i = i.next;
        } while (i !== null);
        h === null ? u = h = t : h = h.next = t;
      } else u = h = t;
      i = { baseState: a.baseState, firstBaseUpdate: u, lastBaseUpdate: h, shared: a.shared, effects: a.effects }, e.updateQueue = i;
      return;
    }
    e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = t : e.next = t, i.lastBaseUpdate = t;
  }
  function oi(e, t, i, a) {
    var u = e.updateQueue;
    cr = !1;
    var h = u.firstBaseUpdate, m = u.lastBaseUpdate, y = u.shared.pending;
    if (y !== null) {
      u.shared.pending = null;
      var k = y, R = k.next;
      k.next = null, m === null ? h = R : m.next = R, m = k;
      var I = e.alternate;
      I !== null && (I = I.updateQueue, y = I.lastBaseUpdate, y !== m && (y === null ? I.firstBaseUpdate = R : y.next = R, I.lastBaseUpdate = k));
    }
    if (h !== null) {
      var L = u.baseState;
      m = 0, I = R = k = null, y = h;
      do {
        var N = y.lane, q = y.eventTime;
        if ((a & N) === N) {
          I !== null && (I = I.next = {
            eventTime: q,
            lane: 0,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          });
          e: {
            var G = e, Q = y;
            switch (N = t, q = i, Q.tag) {
              case 1:
                if (G = Q.payload, typeof G == "function") {
                  L = G.call(q, L, N);
                  break e;
                }
                L = G;
                break e;
              case 3:
                G.flags = G.flags & -65537 | 128;
              case 0:
                if (G = Q.payload, N = typeof G == "function" ? G.call(q, L, N) : G, N == null) break e;
                L = W({}, L, N);
                break e;
              case 2:
                cr = !0;
            }
          }
          y.callback !== null && y.lane !== 0 && (e.flags |= 64, N = u.effects, N === null ? u.effects = [y] : N.push(y));
        } else q = { eventTime: q, lane: N, tag: y.tag, payload: y.payload, callback: y.callback, next: null }, I === null ? (R = I = q, k = L) : I = I.next = q, m |= N;
        if (y = y.next, y === null) {
          if (y = u.shared.pending, y === null) break;
          N = y, y = N.next, N.next = null, u.lastBaseUpdate = N, u.shared.pending = null;
        }
      } while (!0);
      if (I === null && (k = L), u.baseState = k, u.firstBaseUpdate = R, u.lastBaseUpdate = I, t = u.shared.interleaved, t !== null) {
        u = t;
        do
          m |= u.lane, u = u.next;
        while (u !== t);
      } else h === null && (u.shared.lanes = 0);
      Pr |= m, e.lanes = m, e.memoizedState = L;
    }
  }
  function Zu(e, t, i) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var a = e[t], u = a.callback;
      if (u !== null) {
        if (a.callback = null, a = i, typeof u != "function") throw Error(s(191, u));
        u.call(a);
      }
    }
  }
  var Yn = {}, It = ar(Yn), Xn = ar(Yn), Zn = ar(Yn);
  function Rr(e) {
    if (e === Yn) throw Error(s(174));
    return e;
  }
  function ia(e, t) {
    switch (ye(Zn, t), ye(Xn, e), ye(It, Yn), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : io(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = io(t, e);
    }
    ke(It), ye(It, t);
  }
  function sn() {
    ke(It), ke(Xn), ke(Zn);
  }
  function ec(e) {
    Rr(Zn.current);
    var t = Rr(It.current), i = io(t, e.type);
    t !== i && (ye(Xn, e), ye(It, i));
  }
  function oa(e) {
    Xn.current === e && (ke(It), ke(Xn));
  }
  var Ee = ar(0);
  function ai(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var i = t.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || i.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var aa = [];
  function la() {
    for (var e = 0; e < aa.length; e++) aa[e]._workInProgressVersionPrimary = null;
    aa.length = 0;
  }
  var li = Z.ReactCurrentDispatcher, ua = Z.ReactCurrentBatchConfig, jr = 0, xe = null, Le = null, Ue = null, ui = !1, es = !1, ts = 0, rp = 0;
  function Ve() {
    throw Error(s(321));
  }
  function ca(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++) if (!bt(e[i], t[i])) return !1;
    return !0;
  }
  function da(e, t, i, a, u, h) {
    if (jr = h, xe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, li.current = e === null || e.memoizedState === null ? op : ap, e = i(a, u), es) {
      h = 0;
      do {
        if (es = !1, ts = 0, 25 <= h) throw Error(s(301));
        h += 1, Ue = Le = null, t.updateQueue = null, li.current = lp, e = i(a, u);
      } while (es);
    }
    if (li.current = hi, t = Le !== null && Le.next !== null, jr = 0, Ue = Le = xe = null, ui = !1, t) throw Error(s(300));
    return e;
  }
  function ha() {
    var e = ts !== 0;
    return ts = 0, e;
  }
  function Lt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ue === null ? xe.memoizedState = Ue = e : Ue = Ue.next = e, Ue;
  }
  function yt() {
    if (Le === null) {
      var e = xe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = Ue === null ? xe.memoizedState : Ue.next;
    if (t !== null) Ue = t, Le = e;
    else {
      if (e === null) throw Error(s(310));
      Le = e, e = { memoizedState: Le.memoizedState, baseState: Le.baseState, baseQueue: Le.baseQueue, queue: Le.queue, next: null }, Ue === null ? xe.memoizedState = Ue = e : Ue = Ue.next = e;
    }
    return Ue;
  }
  function rs(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function fa(e) {
    var t = yt(), i = t.queue;
    if (i === null) throw Error(s(311));
    i.lastRenderedReducer = e;
    var a = Le, u = a.baseQueue, h = i.pending;
    if (h !== null) {
      if (u !== null) {
        var m = u.next;
        u.next = h.next, h.next = m;
      }
      a.baseQueue = u = h, i.pending = null;
    }
    if (u !== null) {
      h = u.next, a = a.baseState;
      var y = m = null, k = null, R = h;
      do {
        var I = R.lane;
        if ((jr & I) === I) k !== null && (k = k.next = { lane: 0, action: R.action, hasEagerState: R.hasEagerState, eagerState: R.eagerState, next: null }), a = R.hasEagerState ? R.eagerState : e(a, R.action);
        else {
          var L = {
            lane: I,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null
          };
          k === null ? (y = k = L, m = a) : k = k.next = L, xe.lanes |= I, Pr |= I;
        }
        R = R.next;
      } while (R !== null && R !== h);
      k === null ? m = a : k.next = y, bt(a, t.memoizedState) || (tt = !0), t.memoizedState = a, t.baseState = m, t.baseQueue = k, i.lastRenderedState = a;
    }
    if (e = i.interleaved, e !== null) {
      u = e;
      do
        h = u.lane, xe.lanes |= h, Pr |= h, u = u.next;
      while (u !== e);
    } else u === null && (i.lanes = 0);
    return [t.memoizedState, i.dispatch];
  }
  function pa(e) {
    var t = yt(), i = t.queue;
    if (i === null) throw Error(s(311));
    i.lastRenderedReducer = e;
    var a = i.dispatch, u = i.pending, h = t.memoizedState;
    if (u !== null) {
      i.pending = null;
      var m = u = u.next;
      do
        h = e(h, m.action), m = m.next;
      while (m !== u);
      bt(h, t.memoizedState) || (tt = !0), t.memoizedState = h, t.baseQueue === null && (t.baseState = h), i.lastRenderedState = h;
    }
    return [h, a];
  }
  function tc() {
  }
  function rc(e, t) {
    var i = xe, a = yt(), u = t(), h = !bt(a.memoizedState, u);
    if (h && (a.memoizedState = u, tt = !0), a = a.queue, ma(ic.bind(null, i, a, e), [e]), a.getSnapshot !== t || h || Ue !== null && Ue.memoizedState.tag & 1) {
      if (i.flags |= 2048, ns(9, sc.bind(null, i, a, u, t), void 0, null), De === null) throw Error(s(349));
      (jr & 30) !== 0 || nc(i, t, u);
    }
    return u;
  }
  function nc(e, t, i) {
    e.flags |= 16384, e = { getSnapshot: t, value: i }, t = xe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, xe.updateQueue = t, t.stores = [e]) : (i = t.stores, i === null ? t.stores = [e] : i.push(e));
  }
  function sc(e, t, i, a) {
    t.value = i, t.getSnapshot = a, oc(t) && ac(e);
  }
  function ic(e, t, i) {
    return i(function() {
      oc(t) && ac(e);
    });
  }
  function oc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !bt(e, i);
    } catch {
      return !0;
    }
  }
  function ac(e) {
    var t = Vt(e, 1);
    t !== null && Rt(t, e, 1, -1);
  }
  function lc(e) {
    var t = Lt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: rs, lastRenderedState: e }, t.queue = e, e = e.dispatch = ip.bind(null, xe, e), [t.memoizedState, e];
  }
  function ns(e, t, i, a) {
    return e = { tag: e, create: t, destroy: i, deps: a, next: null }, t = xe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, xe.updateQueue = t, t.lastEffect = e.next = e) : (i = t.lastEffect, i === null ? t.lastEffect = e.next = e : (a = i.next, i.next = e, e.next = a, t.lastEffect = e)), e;
  }
  function uc() {
    return yt().memoizedState;
  }
  function ci(e, t, i, a) {
    var u = Lt();
    xe.flags |= e, u.memoizedState = ns(1 | t, i, void 0, a === void 0 ? null : a);
  }
  function di(e, t, i, a) {
    var u = yt();
    a = a === void 0 ? null : a;
    var h = void 0;
    if (Le !== null) {
      var m = Le.memoizedState;
      if (h = m.destroy, a !== null && ca(a, m.deps)) {
        u.memoizedState = ns(t, i, h, a);
        return;
      }
    }
    xe.flags |= e, u.memoizedState = ns(1 | t, i, h, a);
  }
  function cc(e, t) {
    return ci(8390656, 8, e, t);
  }
  function ma(e, t) {
    return di(2048, 8, e, t);
  }
  function dc(e, t) {
    return di(4, 2, e, t);
  }
  function hc(e, t) {
    return di(4, 4, e, t);
  }
  function fc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function pc(e, t, i) {
    return i = i != null ? i.concat([e]) : null, di(4, 4, fc.bind(null, t, e), i);
  }
  function ga() {
  }
  function mc(e, t) {
    var i = yt();
    t = t === void 0 ? null : t;
    var a = i.memoizedState;
    return a !== null && t !== null && ca(t, a[1]) ? a[0] : (i.memoizedState = [e, t], e);
  }
  function gc(e, t) {
    var i = yt();
    t = t === void 0 ? null : t;
    var a = i.memoizedState;
    return a !== null && t !== null && ca(t, a[1]) ? a[0] : (e = e(), i.memoizedState = [e, t], e);
  }
  function yc(e, t, i) {
    return (jr & 21) === 0 ? (e.baseState && (e.baseState = !1, tt = !0), e.memoizedState = i) : (bt(i, t) || (i = Kl(), xe.lanes |= i, Pr |= i, e.baseState = !0), t);
  }
  function np(e, t) {
    var i = pe;
    pe = i !== 0 && 4 > i ? i : 4, e(!0);
    var a = ua.transition;
    ua.transition = {};
    try {
      e(!1), t();
    } finally {
      pe = i, ua.transition = a;
    }
  }
  function vc() {
    return yt().memoizedState;
  }
  function sp(e, t, i) {
    var a = mr(e);
    if (i = { lane: a, action: i, hasEagerState: !1, eagerState: null, next: null }, wc(e)) _c(t, i);
    else if (i = Qu(e, t, i, a), i !== null) {
      var u = Ye();
      Rt(i, e, a, u), kc(i, t, a);
    }
  }
  function ip(e, t, i) {
    var a = mr(e), u = { lane: a, action: i, hasEagerState: !1, eagerState: null, next: null };
    if (wc(e)) _c(t, u);
    else {
      var h = e.alternate;
      if (e.lanes === 0 && (h === null || h.lanes === 0) && (h = t.lastRenderedReducer, h !== null)) try {
        var m = t.lastRenderedState, y = h(m, i);
        if (u.hasEagerState = !0, u.eagerState = y, bt(y, m)) {
          var k = t.interleaved;
          k === null ? (u.next = u, na(t)) : (u.next = k.next, k.next = u), t.interleaved = u;
          return;
        }
      } catch {
      }
      i = Qu(e, t, u, a), i !== null && (u = Ye(), Rt(i, e, a, u), kc(i, t, a));
    }
  }
  function wc(e) {
    var t = e.alternate;
    return e === xe || t !== null && t === xe;
  }
  function _c(e, t) {
    es = ui = !0;
    var i = e.pending;
    i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
  }
  function kc(e, t, i) {
    if ((i & 4194240) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, i |= a, t.lanes = i, vo(e, i);
    }
  }
  var hi = { readContext: gt, useCallback: Ve, useContext: Ve, useEffect: Ve, useImperativeHandle: Ve, useInsertionEffect: Ve, useLayoutEffect: Ve, useMemo: Ve, useReducer: Ve, useRef: Ve, useState: Ve, useDebugValue: Ve, useDeferredValue: Ve, useTransition: Ve, useMutableSource: Ve, useSyncExternalStore: Ve, useId: Ve, unstable_isNewReconciler: !1 }, op = { readContext: gt, useCallback: function(e, t) {
    return Lt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: gt, useEffect: cc, useImperativeHandle: function(e, t, i) {
    return i = i != null ? i.concat([e]) : null, ci(
      4194308,
      4,
      fc.bind(null, t, e),
      i
    );
  }, useLayoutEffect: function(e, t) {
    return ci(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return ci(4, 2, e, t);
  }, useMemo: function(e, t) {
    var i = Lt();
    return t = t === void 0 ? null : t, e = e(), i.memoizedState = [e, t], e;
  }, useReducer: function(e, t, i) {
    var a = Lt();
    return t = i !== void 0 ? i(t) : t, a.memoizedState = a.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, a.queue = e, e = e.dispatch = sp.bind(null, xe, e), [a.memoizedState, e];
  }, useRef: function(e) {
    var t = Lt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: lc, useDebugValue: ga, useDeferredValue: function(e) {
    return Lt().memoizedState = e;
  }, useTransition: function() {
    var e = lc(!1), t = e[0];
    return e = np.bind(null, e[1]), Lt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, i) {
    var a = xe, u = Lt();
    if (Se) {
      if (i === void 0) throw Error(s(407));
      i = i();
    } else {
      if (i = t(), De === null) throw Error(s(349));
      (jr & 30) !== 0 || nc(a, t, i);
    }
    u.memoizedState = i;
    var h = { value: i, getSnapshot: t };
    return u.queue = h, cc(ic.bind(
      null,
      a,
      h,
      e
    ), [e]), a.flags |= 2048, ns(9, sc.bind(null, a, h, i, t), void 0, null), i;
  }, useId: function() {
    var e = Lt(), t = De.identifierPrefix;
    if (Se) {
      var i = Wt, a = qt;
      i = (a & ~(1 << 32 - St(a) - 1)).toString(32) + i, t = ":" + t + "R" + i, i = ts++, 0 < i && (t += "H" + i.toString(32)), t += ":";
    } else i = rp++, t = ":" + t + "r" + i.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, ap = {
    readContext: gt,
    useCallback: mc,
    useContext: gt,
    useEffect: ma,
    useImperativeHandle: pc,
    useInsertionEffect: dc,
    useLayoutEffect: hc,
    useMemo: gc,
    useReducer: fa,
    useRef: uc,
    useState: function() {
      return fa(rs);
    },
    useDebugValue: ga,
    useDeferredValue: function(e) {
      var t = yt();
      return yc(t, Le.memoizedState, e);
    },
    useTransition: function() {
      var e = fa(rs)[0], t = yt().memoizedState;
      return [e, t];
    },
    useMutableSource: tc,
    useSyncExternalStore: rc,
    useId: vc,
    unstable_isNewReconciler: !1
  }, lp = { readContext: gt, useCallback: mc, useContext: gt, useEffect: ma, useImperativeHandle: pc, useInsertionEffect: dc, useLayoutEffect: hc, useMemo: gc, useReducer: pa, useRef: uc, useState: function() {
    return pa(rs);
  }, useDebugValue: ga, useDeferredValue: function(e) {
    var t = yt();
    return Le === null ? t.memoizedState = e : yc(t, Le.memoizedState, e);
  }, useTransition: function() {
    var e = pa(rs)[0], t = yt().memoizedState;
    return [e, t];
  }, useMutableSource: tc, useSyncExternalStore: rc, useId: vc, unstable_isNewReconciler: !1 };
  function xt(e, t) {
    if (e && e.defaultProps) {
      t = W({}, t), e = e.defaultProps;
      for (var i in e) t[i] === void 0 && (t[i] = e[i]);
      return t;
    }
    return t;
  }
  function ya(e, t, i, a) {
    t = e.memoizedState, i = i(a, t), i = i == null ? t : W({}, t, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var fi = { isMounted: function(e) {
    return (e = e._reactInternals) ? Sr(e) === e : !1;
  }, enqueueSetState: function(e, t, i) {
    e = e._reactInternals;
    var a = Ye(), u = mr(e), h = Kt(a, u);
    h.payload = t, i != null && (h.callback = i), t = dr(e, h, u), t !== null && (Rt(t, e, u, a), ii(t, e, u));
  }, enqueueReplaceState: function(e, t, i) {
    e = e._reactInternals;
    var a = Ye(), u = mr(e), h = Kt(a, u);
    h.tag = 1, h.payload = t, i != null && (h.callback = i), t = dr(e, h, u), t !== null && (Rt(t, e, u, a), ii(t, e, u));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var i = Ye(), a = mr(e), u = Kt(i, a);
    u.tag = 2, t != null && (u.callback = t), t = dr(e, u, a), t !== null && (Rt(t, e, a, i), ii(t, e, a));
  } };
  function Sc(e, t, i, a, u, h, m) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, h, m) : t.prototype && t.prototype.isPureReactComponent ? !Hn(i, a) || !Hn(u, h) : !0;
  }
  function bc(e, t, i) {
    var a = !1, u = lr, h = t.contextType;
    return typeof h == "object" && h !== null ? h = gt(h) : (u = et(t) ? Er : We.current, a = t.contextTypes, h = (a = a != null) ? Yr(e, u) : lr), t = new t(i, h), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = fi, e.stateNode = t, t._reactInternals = e, a && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = u, e.__reactInternalMemoizedMaskedChildContext = h), t;
  }
  function Ec(e, t, i, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, a), t.state !== e && fi.enqueueReplaceState(t, t.state, null);
  }
  function va(e, t, i, a) {
    var u = e.stateNode;
    u.props = i, u.state = e.memoizedState, u.refs = {}, sa(e);
    var h = t.contextType;
    typeof h == "object" && h !== null ? u.context = gt(h) : (h = et(t) ? Er : We.current, u.context = Yr(e, h)), u.state = e.memoizedState, h = t.getDerivedStateFromProps, typeof h == "function" && (ya(e, t, h, i), u.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (t = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), t !== u.state && fi.enqueueReplaceState(u, u.state, null), oi(e, i, u, a), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function on(e, t) {
    try {
      var i = "", a = t;
      do
        i += A(a), a = a.return;
      while (a);
      var u = i;
    } catch (h) {
      u = `
Error generating stack: ` + h.message + `
` + h.stack;
    }
    return { value: e, source: t, stack: u, digest: null };
  }
  function wa(e, t, i) {
    return { value: e, source: null, stack: i ?? null, digest: t ?? null };
  }
  function _a(e, t) {
    try {
      console.error(t.value);
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  var up = typeof WeakMap == "function" ? WeakMap : Map;
  function xc(e, t, i) {
    i = Kt(-1, i), i.tag = 3, i.payload = { element: null };
    var a = t.value;
    return i.callback = function() {
      _i || (_i = !0, La = a), _a(e, t);
    }, i;
  }
  function Tc(e, t, i) {
    i = Kt(-1, i), i.tag = 3;
    var a = e.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = t.value;
      i.payload = function() {
        return a(u);
      }, i.callback = function() {
        _a(e, t);
      };
    }
    var h = e.stateNode;
    return h !== null && typeof h.componentDidCatch == "function" && (i.callback = function() {
      _a(e, t), typeof a != "function" && (fr === null ? fr = /* @__PURE__ */ new Set([this]) : fr.add(this));
      var m = t.stack;
      this.componentDidCatch(t.value, { componentStack: m !== null ? m : "" });
    }), i;
  }
  function Cc(e, t, i) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new up();
      var u = /* @__PURE__ */ new Set();
      a.set(t, u);
    } else u = a.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(t, u));
    u.has(i) || (u.add(i), e = bp.bind(null, e, t, i), t.then(e, e));
  }
  function Rc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function jc(e, t, i, a, u) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, i.flags |= 131072, i.flags &= -52805, i.tag === 1 && (i.alternate === null ? i.tag = 17 : (t = Kt(-1, 1), t.tag = 2, dr(i, t, 1))), i.lanes |= 1), e) : (e.flags |= 65536, e.lanes = u, e);
  }
  var cp = Z.ReactCurrentOwner, tt = !1;
  function Qe(e, t, i, a) {
    t.child = e === null ? Ju(t, null, i, a) : tn(t, e.child, i, a);
  }
  function Pc(e, t, i, a, u) {
    i = i.render;
    var h = t.ref;
    return nn(t, u), a = da(e, t, i, a, h, u), i = ha(), e !== null && !tt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~u, Gt(e, t, u)) : (Se && i && Go(t), t.flags |= 1, Qe(e, t, a, u), t.child);
  }
  function Ac(e, t, i, a, u) {
    if (e === null) {
      var h = i.type;
      return typeof h == "function" && !Fa(h) && h.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (t.tag = 15, t.type = h, Oc(e, t, h, a, u)) : (e = Ti(i.type, null, a, t, t.mode, u), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (h = e.child, (e.lanes & u) === 0) {
      var m = h.memoizedProps;
      if (i = i.compare, i = i !== null ? i : Hn, i(m, a) && e.ref === t.ref) return Gt(e, t, u);
    }
    return t.flags |= 1, e = yr(h, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Oc(e, t, i, a, u) {
    if (e !== null) {
      var h = e.memoizedProps;
      if (Hn(h, a) && e.ref === t.ref) if (tt = !1, t.pendingProps = a = h, (e.lanes & u) !== 0) (e.flags & 131072) !== 0 && (tt = !0);
      else return t.lanes = e.lanes, Gt(e, t, u);
    }
    return ka(e, t, i, a, u);
  }
  function Nc(e, t, i) {
    var a = t.pendingProps, u = a.children, h = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ye(ln, dt), dt |= i;
    else {
      if ((i & 1073741824) === 0) return e = h !== null ? h.baseLanes | i : i, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ye(ln, dt), dt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, a = h !== null ? h.baseLanes : i, ye(ln, dt), dt |= a;
    }
    else h !== null ? (a = h.baseLanes | i, t.memoizedState = null) : a = i, ye(ln, dt), dt |= a;
    return Qe(e, t, u, i), t.child;
  }
  function Ic(e, t) {
    var i = t.ref;
    (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ka(e, t, i, a, u) {
    var h = et(i) ? Er : We.current;
    return h = Yr(t, h), nn(t, u), i = da(e, t, i, a, h, u), a = ha(), e !== null && !tt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~u, Gt(e, t, u)) : (Se && a && Go(t), t.flags |= 1, Qe(e, t, i, u), t.child);
  }
  function Lc(e, t, i, a, u) {
    if (et(i)) {
      var h = !0;
      Ys(t);
    } else h = !1;
    if (nn(t, u), t.stateNode === null) mi(e, t), bc(t, i, a), va(t, i, a, u), a = !0;
    else if (e === null) {
      var m = t.stateNode, y = t.memoizedProps;
      m.props = y;
      var k = m.context, R = i.contextType;
      typeof R == "object" && R !== null ? R = gt(R) : (R = et(i) ? Er : We.current, R = Yr(t, R));
      var I = i.getDerivedStateFromProps, L = typeof I == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      L || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (y !== a || k !== R) && Ec(t, m, a, R), cr = !1;
      var N = t.memoizedState;
      m.state = N, oi(t, a, m, u), k = t.memoizedState, y !== a || N !== k || Ze.current || cr ? (typeof I == "function" && (ya(t, i, I, a), k = t.memoizedState), (y = cr || Sc(t, i, y, a, N, k, R)) ? (L || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = k), m.props = a, m.state = k, m.context = R, a = y) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      m = t.stateNode, Yu(e, t), y = t.memoizedProps, R = t.type === t.elementType ? y : xt(t.type, y), m.props = R, L = t.pendingProps, N = m.context, k = i.contextType, typeof k == "object" && k !== null ? k = gt(k) : (k = et(i) ? Er : We.current, k = Yr(t, k));
      var q = i.getDerivedStateFromProps;
      (I = typeof q == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (y !== L || N !== k) && Ec(t, m, a, k), cr = !1, N = t.memoizedState, m.state = N, oi(t, a, m, u);
      var G = t.memoizedState;
      y !== L || N !== G || Ze.current || cr ? (typeof q == "function" && (ya(t, i, q, a), G = t.memoizedState), (R = cr || Sc(t, i, R, a, N, G, k) || !1) ? (I || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(a, G, k), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(a, G, k)), typeof m.componentDidUpdate == "function" && (t.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || y === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = G), m.props = a, m.state = G, m.context = k, a = R) : (typeof m.componentDidUpdate != "function" || y === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return Sa(e, t, i, a, h, u);
  }
  function Sa(e, t, i, a, u, h) {
    Ic(e, t);
    var m = (t.flags & 128) !== 0;
    if (!a && !m) return u && Bu(t, i, !1), Gt(e, t, h);
    a = t.stateNode, cp.current = t;
    var y = m && typeof i.getDerivedStateFromError != "function" ? null : a.render();
    return t.flags |= 1, e !== null && m ? (t.child = tn(t, e.child, null, h), t.child = tn(t, null, y, h)) : Qe(e, t, y, h), t.memoizedState = a.state, u && Bu(t, i, !0), t.child;
  }
  function $c(e) {
    var t = e.stateNode;
    t.pendingContext ? Du(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Du(e, t.context, !1), ia(e, t.containerInfo);
  }
  function Uc(e, t, i, a, u) {
    return en(), Xo(u), t.flags |= 256, Qe(e, t, i, a), t.child;
  }
  var ba = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ea(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Dc(e, t, i) {
    var a = t.pendingProps, u = Ee.current, h = !1, m = (t.flags & 128) !== 0, y;
    if ((y = m) || (y = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0), y ? (h = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u |= 1), ye(Ee, u & 1), e === null)
      return Yo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (m = a.children, e = a.fallback, h ? (a = t.mode, h = t.child, m = { mode: "hidden", children: m }, (a & 1) === 0 && h !== null ? (h.childLanes = 0, h.pendingProps = m) : h = Ci(m, a, 0, null), e = Ir(e, a, i, null), h.return = t, e.return = t, h.sibling = e, t.child = h, t.child.memoizedState = Ea(i), t.memoizedState = ba, e) : xa(t, m));
    if (u = e.memoizedState, u !== null && (y = u.dehydrated, y !== null)) return dp(e, t, m, a, y, u, i);
    if (h) {
      h = a.fallback, m = t.mode, u = e.child, y = u.sibling;
      var k = { mode: "hidden", children: a.children };
      return (m & 1) === 0 && t.child !== u ? (a = t.child, a.childLanes = 0, a.pendingProps = k, t.deletions = null) : (a = yr(u, k), a.subtreeFlags = u.subtreeFlags & 14680064), y !== null ? h = yr(y, h) : (h = Ir(h, m, i, null), h.flags |= 2), h.return = t, a.return = t, a.sibling = h, t.child = a, a = h, h = t.child, m = e.child.memoizedState, m = m === null ? Ea(i) : { baseLanes: m.baseLanes | i, cachePool: null, transitions: m.transitions }, h.memoizedState = m, h.childLanes = e.childLanes & ~i, t.memoizedState = ba, a;
    }
    return h = e.child, e = h.sibling, a = yr(h, { mode: "visible", children: a.children }), (t.mode & 1) === 0 && (a.lanes = i), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a;
  }
  function xa(e, t) {
    return t = Ci({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function pi(e, t, i, a) {
    return a !== null && Xo(a), tn(t, e.child, null, i), e = xa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function dp(e, t, i, a, u, h, m) {
    if (i)
      return t.flags & 256 ? (t.flags &= -257, a = wa(Error(s(422))), pi(e, t, m, a)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (h = a.fallback, u = t.mode, a = Ci({ mode: "visible", children: a.children }, u, 0, null), h = Ir(h, u, m, null), h.flags |= 2, a.return = t, h.return = t, a.sibling = h, t.child = a, (t.mode & 1) !== 0 && tn(t, e.child, null, m), t.child.memoizedState = Ea(m), t.memoizedState = ba, h);
    if ((t.mode & 1) === 0) return pi(e, t, m, null);
    if (u.data === "$!") {
      if (a = u.nextSibling && u.nextSibling.dataset, a) var y = a.dgst;
      return a = y, h = Error(s(419)), a = wa(h, a, void 0), pi(e, t, m, a);
    }
    if (y = (m & e.childLanes) !== 0, tt || y) {
      if (a = De, a !== null) {
        switch (m & -m) {
          case 4:
            u = 2;
            break;
          case 16:
            u = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            u = 32;
            break;
          case 536870912:
            u = 268435456;
            break;
          default:
            u = 0;
        }
        u = (u & (a.suspendedLanes | m)) !== 0 ? 0 : u, u !== 0 && u !== h.retryLane && (h.retryLane = u, Vt(e, u), Rt(a, e, u, -1));
      }
      return za(), a = wa(Error(s(421))), pi(e, t, m, a);
    }
    return u.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Ep.bind(null, e), u._reactRetry = t, null) : (e = h.treeContext, ct = or(u.nextSibling), ut = t, Se = !0, Et = null, e !== null && (pt[mt++] = qt, pt[mt++] = Wt, pt[mt++] = xr, qt = e.id, Wt = e.overflow, xr = t), t = xa(t, a.children), t.flags |= 4096, t);
  }
  function Mc(e, t, i) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), ra(e.return, t, i);
  }
  function Ta(e, t, i, a, u) {
    var h = e.memoizedState;
    h === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: i, tailMode: u } : (h.isBackwards = t, h.rendering = null, h.renderingStartTime = 0, h.last = a, h.tail = i, h.tailMode = u);
  }
  function Bc(e, t, i) {
    var a = t.pendingProps, u = a.revealOrder, h = a.tail;
    if (Qe(e, t, a.children, i), a = Ee.current, (a & 2) !== 0) a = a & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Mc(e, i, t);
        else if (e.tag === 19) Mc(e, i, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      a &= 1;
    }
    if (ye(Ee, a), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (u) {
      case "forwards":
        for (i = t.child, u = null; i !== null; ) e = i.alternate, e !== null && ai(e) === null && (u = i), i = i.sibling;
        i = u, i === null ? (u = t.child, t.child = null) : (u = i.sibling, i.sibling = null), Ta(t, !1, u, i, h);
        break;
      case "backwards":
        for (i = null, u = t.child, t.child = null; u !== null; ) {
          if (e = u.alternate, e !== null && ai(e) === null) {
            t.child = u;
            break;
          }
          e = u.sibling, u.sibling = i, i = u, u = e;
        }
        Ta(t, !0, i, null, h);
        break;
      case "together":
        Ta(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function mi(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Gt(e, t, i) {
    if (e !== null && (t.dependencies = e.dependencies), Pr |= t.lanes, (i & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, i = yr(e, e.pendingProps), t.child = i, i.return = t; e.sibling !== null; ) e = e.sibling, i = i.sibling = yr(e, e.pendingProps), i.return = t;
      i.sibling = null;
    }
    return t.child;
  }
  function hp(e, t, i) {
    switch (t.tag) {
      case 3:
        $c(t), en();
        break;
      case 5:
        ec(t);
        break;
      case 1:
        et(t.type) && Ys(t);
        break;
      case 4:
        ia(t, t.stateNode.containerInfo);
        break;
      case 10:
        var a = t.type._context, u = t.memoizedProps.value;
        ye(ni, a._currentValue), a._currentValue = u;
        break;
      case 13:
        if (a = t.memoizedState, a !== null)
          return a.dehydrated !== null ? (ye(Ee, Ee.current & 1), t.flags |= 128, null) : (i & t.child.childLanes) !== 0 ? Dc(e, t, i) : (ye(Ee, Ee.current & 1), e = Gt(e, t, i), e !== null ? e.sibling : null);
        ye(Ee, Ee.current & 1);
        break;
      case 19:
        if (a = (i & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (a) return Bc(e, t, i);
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), ye(Ee, Ee.current), a) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Nc(e, t, i);
    }
    return Gt(e, t, i);
  }
  var zc, Ca, Fc, Hc;
  zc = function(e, t) {
    for (var i = t.child; i !== null; ) {
      if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
      else if (i.tag !== 4 && i.child !== null) {
        i.child.return = i, i = i.child;
        continue;
      }
      if (i === t) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === t) return;
        i = i.return;
      }
      i.sibling.return = i.return, i = i.sibling;
    }
  }, Ca = function() {
  }, Fc = function(e, t, i, a) {
    var u = e.memoizedProps;
    if (u !== a) {
      e = t.stateNode, Rr(It.current);
      var h = null;
      switch (i) {
        case "input":
          u = to(e, u), a = to(e, a), h = [];
          break;
        case "select":
          u = W({}, u, { value: void 0 }), a = W({}, a, { value: void 0 }), h = [];
          break;
        case "textarea":
          u = so(e, u), a = so(e, a), h = [];
          break;
        default:
          typeof u.onClick != "function" && typeof a.onClick == "function" && (e.onclick = Gs);
      }
      oo(i, a);
      var m;
      i = null;
      for (R in u) if (!a.hasOwnProperty(R) && u.hasOwnProperty(R) && u[R] != null) if (R === "style") {
        var y = u[R];
        for (m in y) y.hasOwnProperty(m) && (i || (i = {}), i[m] = "");
      } else R !== "dangerouslySetInnerHTML" && R !== "children" && R !== "suppressContentEditableWarning" && R !== "suppressHydrationWarning" && R !== "autoFocus" && (l.hasOwnProperty(R) ? h || (h = []) : (h = h || []).push(R, null));
      for (R in a) {
        var k = a[R];
        if (y = u?.[R], a.hasOwnProperty(R) && k !== y && (k != null || y != null)) if (R === "style") if (y) {
          for (m in y) !y.hasOwnProperty(m) || k && k.hasOwnProperty(m) || (i || (i = {}), i[m] = "");
          for (m in k) k.hasOwnProperty(m) && y[m] !== k[m] && (i || (i = {}), i[m] = k[m]);
        } else i || (h || (h = []), h.push(
          R,
          i
        )), i = k;
        else R === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, y = y ? y.__html : void 0, k != null && y !== k && (h = h || []).push(R, k)) : R === "children" ? typeof k != "string" && typeof k != "number" || (h = h || []).push(R, "" + k) : R !== "suppressContentEditableWarning" && R !== "suppressHydrationWarning" && (l.hasOwnProperty(R) ? (k != null && R === "onScroll" && _e("scroll", e), h || y === k || (h = [])) : (h = h || []).push(R, k));
      }
      i && (h = h || []).push("style", i);
      var R = h;
      (t.updateQueue = R) && (t.flags |= 4);
    }
  }, Hc = function(e, t, i, a) {
    i !== a && (t.flags |= 4);
  };
  function ss(e, t) {
    if (!Se) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var i = null; t !== null; ) t.alternate !== null && (i = t), t = t.sibling;
        i === null ? e.tail = null : i.sibling = null;
        break;
      case "collapsed":
        i = e.tail;
        for (var a = null; i !== null; ) i.alternate !== null && (a = i), i = i.sibling;
        a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
    }
  }
  function Ke(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, i = 0, a = 0;
    if (t) for (var u = e.child; u !== null; ) i |= u.lanes | u.childLanes, a |= u.subtreeFlags & 14680064, a |= u.flags & 14680064, u.return = e, u = u.sibling;
    else for (u = e.child; u !== null; ) i |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = e, u = u.sibling;
    return e.subtreeFlags |= a, e.childLanes = i, t;
  }
  function fp(e, t, i) {
    var a = t.pendingProps;
    switch (Jo(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ke(t), null;
      case 1:
        return et(t.type) && Qs(), Ke(t), null;
      case 3:
        return a = t.stateNode, sn(), ke(Ze), ke(We), la(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (ti(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Et !== null && (Da(Et), Et = null))), Ca(e, t), Ke(t), null;
      case 5:
        oa(t);
        var u = Rr(Zn.current);
        if (i = t.type, e !== null && t.stateNode != null) Fc(e, t, i, a, u), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166));
            return Ke(t), null;
          }
          if (e = Rr(It.current), ti(t)) {
            a = t.stateNode, i = t.type;
            var h = t.memoizedProps;
            switch (a[Nt] = t, a[Gn] = h, e = (t.mode & 1) !== 0, i) {
              case "dialog":
                _e("cancel", a), _e("close", a);
                break;
              case "iframe":
              case "object":
              case "embed":
                _e("load", a);
                break;
              case "video":
              case "audio":
                for (u = 0; u < Wn.length; u++) _e(Wn[u], a);
                break;
              case "source":
                _e("error", a);
                break;
              case "img":
              case "image":
              case "link":
                _e(
                  "error",
                  a
                ), _e("load", a);
                break;
              case "details":
                _e("toggle", a);
                break;
              case "input":
                bl(a, h), _e("invalid", a);
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!h.multiple }, _e("invalid", a);
                break;
              case "textarea":
                Tl(a, h), _e("invalid", a);
            }
            oo(i, h), u = null;
            for (var m in h) if (h.hasOwnProperty(m)) {
              var y = h[m];
              m === "children" ? typeof y == "string" ? a.textContent !== y && (h.suppressHydrationWarning !== !0 && Ks(a.textContent, y, e), u = ["children", y]) : typeof y == "number" && a.textContent !== "" + y && (h.suppressHydrationWarning !== !0 && Ks(
                a.textContent,
                y,
                e
              ), u = ["children", "" + y]) : l.hasOwnProperty(m) && y != null && m === "onScroll" && _e("scroll", a);
            }
            switch (i) {
              case "input":
                zt(a), xl(a, h, !0);
                break;
              case "textarea":
                zt(a), Rl(a);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof h.onClick == "function" && (a.onclick = Gs);
            }
            a = u, t.updateQueue = a, a !== null && (t.flags |= 4);
          } else {
            m = u.nodeType === 9 ? u : u.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = jl(i)), e === "http://www.w3.org/1999/xhtml" ? i === "script" ? (e = m.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof a.is == "string" ? e = m.createElement(i, { is: a.is }) : (e = m.createElement(i), i === "select" && (m = e, a.multiple ? m.multiple = !0 : a.size && (m.size = a.size))) : e = m.createElementNS(e, i), e[Nt] = t, e[Gn] = a, zc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (m = ao(i, a), i) {
                case "dialog":
                  _e("cancel", e), _e("close", e), u = a;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  _e("load", e), u = a;
                  break;
                case "video":
                case "audio":
                  for (u = 0; u < Wn.length; u++) _e(Wn[u], e);
                  u = a;
                  break;
                case "source":
                  _e("error", e), u = a;
                  break;
                case "img":
                case "image":
                case "link":
                  _e(
                    "error",
                    e
                  ), _e("load", e), u = a;
                  break;
                case "details":
                  _e("toggle", e), u = a;
                  break;
                case "input":
                  bl(e, a), u = to(e, a), _e("invalid", e);
                  break;
                case "option":
                  u = a;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!a.multiple }, u = W({}, a, { value: void 0 }), _e("invalid", e);
                  break;
                case "textarea":
                  Tl(e, a), u = so(e, a), _e("invalid", e);
                  break;
                default:
                  u = a;
              }
              oo(i, u), y = u;
              for (h in y) if (y.hasOwnProperty(h)) {
                var k = y[h];
                h === "style" ? Ol(e, k) : h === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && Pl(e, k)) : h === "children" ? typeof k == "string" ? (i !== "textarea" || k !== "") && Tn(e, k) : typeof k == "number" && Tn(e, "" + k) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (l.hasOwnProperty(h) ? k != null && h === "onScroll" && _e("scroll", e) : k != null && D(e, h, k, m));
              }
              switch (i) {
                case "input":
                  zt(e), xl(e, a, !1);
                  break;
                case "textarea":
                  zt(e), Rl(e);
                  break;
                case "option":
                  a.value != null && e.setAttribute("value", "" + X(a.value));
                  break;
                case "select":
                  e.multiple = !!a.multiple, h = a.value, h != null ? Mr(e, !!a.multiple, h, !1) : a.defaultValue != null && Mr(
                    e,
                    !!a.multiple,
                    a.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof u.onClick == "function" && (e.onclick = Gs);
              }
              switch (i) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a = !!a.autoFocus;
                  break e;
                case "img":
                  a = !0;
                  break e;
                default:
                  a = !1;
              }
            }
            a && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Ke(t), null;
      case 6:
        if (e && t.stateNode != null) Hc(e, t, e.memoizedProps, a);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(s(166));
          if (i = Rr(Zn.current), Rr(It.current), ti(t)) {
            if (a = t.stateNode, i = t.memoizedProps, a[Nt] = t, (h = a.nodeValue !== i) && (e = ut, e !== null)) switch (e.tag) {
              case 3:
                Ks(a.nodeValue, i, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ks(a.nodeValue, i, (e.mode & 1) !== 0);
            }
            h && (t.flags |= 4);
          } else a = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(a), a[Nt] = t, t.stateNode = a;
        }
        return Ke(t), null;
      case 13:
        if (ke(Ee), a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Se && ct !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Vu(), en(), t.flags |= 98560, h = !1;
          else if (h = ti(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!h) throw Error(s(318));
              if (h = t.memoizedState, h = h !== null ? h.dehydrated : null, !h) throw Error(s(317));
              h[Nt] = t;
            } else en(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ke(t), h = !1;
          } else Et !== null && (Da(Et), Et = null), h = !0;
          if (!h) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = i, t) : (a = a !== null, a !== (e !== null && e.memoizedState !== null) && a && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Ee.current & 1) !== 0 ? $e === 0 && ($e = 3) : za())), t.updateQueue !== null && (t.flags |= 4), Ke(t), null);
      case 4:
        return sn(), Ca(e, t), e === null && Vn(t.stateNode.containerInfo), Ke(t), null;
      case 10:
        return ta(t.type._context), Ke(t), null;
      case 17:
        return et(t.type) && Qs(), Ke(t), null;
      case 19:
        if (ke(Ee), h = t.memoizedState, h === null) return Ke(t), null;
        if (a = (t.flags & 128) !== 0, m = h.rendering, m === null) if (a) ss(h, !1);
        else {
          if ($e !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (m = ai(e), m !== null) {
              for (t.flags |= 128, ss(h, !1), a = m.updateQueue, a !== null && (t.updateQueue = a, t.flags |= 4), t.subtreeFlags = 0, a = i, i = t.child; i !== null; ) h = i, e = a, h.flags &= 14680066, m = h.alternate, m === null ? (h.childLanes = 0, h.lanes = e, h.child = null, h.subtreeFlags = 0, h.memoizedProps = null, h.memoizedState = null, h.updateQueue = null, h.dependencies = null, h.stateNode = null) : (h.childLanes = m.childLanes, h.lanes = m.lanes, h.child = m.child, h.subtreeFlags = 0, h.deletions = null, h.memoizedProps = m.memoizedProps, h.memoizedState = m.memoizedState, h.updateQueue = m.updateQueue, h.type = m.type, e = m.dependencies, h.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), i = i.sibling;
              return ye(Ee, Ee.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          h.tail !== null && Re() > un && (t.flags |= 128, a = !0, ss(h, !1), t.lanes = 4194304);
        }
        else {
          if (!a) if (e = ai(m), e !== null) {
            if (t.flags |= 128, a = !0, i = e.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), ss(h, !0), h.tail === null && h.tailMode === "hidden" && !m.alternate && !Se) return Ke(t), null;
          } else 2 * Re() - h.renderingStartTime > un && i !== 1073741824 && (t.flags |= 128, a = !0, ss(h, !1), t.lanes = 4194304);
          h.isBackwards ? (m.sibling = t.child, t.child = m) : (i = h.last, i !== null ? i.sibling = m : t.child = m, h.last = m);
        }
        return h.tail !== null ? (t = h.tail, h.rendering = t, h.tail = t.sibling, h.renderingStartTime = Re(), t.sibling = null, i = Ee.current, ye(Ee, a ? i & 1 | 2 : i & 1), t) : (Ke(t), null);
      case 22:
      case 23:
        return Ba(), a = t.memoizedState !== null, e !== null && e.memoizedState !== null !== a && (t.flags |= 8192), a && (t.mode & 1) !== 0 ? (dt & 1073741824) !== 0 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function pp(e, t) {
    switch (Jo(t), t.tag) {
      case 1:
        return et(t.type) && Qs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return sn(), ke(Ze), ke(We), la(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return oa(t), null;
      case 13:
        if (ke(Ee), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(s(340));
          en();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ke(Ee), null;
      case 4:
        return sn(), null;
      case 10:
        return ta(t.type._context), null;
      case 22:
      case 23:
        return Ba(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var gi = !1, Ge = !1, mp = typeof WeakSet == "function" ? WeakSet : Set, K = null;
  function an(e, t) {
    var i = e.ref;
    if (i !== null) if (typeof i == "function") try {
      i(null);
    } catch (a) {
      Te(e, t, a);
    }
    else i.current = null;
  }
  function Ra(e, t, i) {
    try {
      i();
    } catch (a) {
      Te(e, t, a);
    }
  }
  var qc = !1;
  function gp(e, t) {
    if (Bo = $s, e = Su(), Oo(e)) {
      if ("selectionStart" in e) var i = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        i = (i = e.ownerDocument) && i.defaultView || window;
        var a = i.getSelection && i.getSelection();
        if (a && a.rangeCount !== 0) {
          i = a.anchorNode;
          var u = a.anchorOffset, h = a.focusNode;
          a = a.focusOffset;
          try {
            i.nodeType, h.nodeType;
          } catch {
            i = null;
            break e;
          }
          var m = 0, y = -1, k = -1, R = 0, I = 0, L = e, N = null;
          t: for (; ; ) {
            for (var q; L !== i || u !== 0 && L.nodeType !== 3 || (y = m + u), L !== h || a !== 0 && L.nodeType !== 3 || (k = m + a), L.nodeType === 3 && (m += L.nodeValue.length), (q = L.firstChild) !== null; )
              N = L, L = q;
            for (; ; ) {
              if (L === e) break t;
              if (N === i && ++R === u && (y = m), N === h && ++I === a && (k = m), (q = L.nextSibling) !== null) break;
              L = N, N = L.parentNode;
            }
            L = q;
          }
          i = y === -1 || k === -1 ? null : { start: y, end: k };
        } else i = null;
      }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (zo = { focusedElem: e, selectionRange: i }, $s = !1, K = t; K !== null; ) if (t = K, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, K = e;
    else for (; K !== null; ) {
      t = K;
      try {
        var G = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (G !== null) {
              var Q = G.memoizedProps, je = G.memoizedState, T = t.stateNode, S = T.getSnapshotBeforeUpdate(t.elementType === t.type ? Q : xt(t.type, Q), je);
              T.__reactInternalSnapshotBeforeUpdate = S;
            }
            break;
          case 3:
            var C = t.stateNode.containerInfo;
            C.nodeType === 1 ? C.textContent = "" : C.nodeType === 9 && C.documentElement && C.removeChild(C.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(s(163));
        }
      } catch ($) {
        Te(t, t.return, $);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, K = e;
        break;
      }
      K = t.return;
    }
    return G = qc, qc = !1, G;
  }
  function is(e, t, i) {
    var a = t.updateQueue;
    if (a = a !== null ? a.lastEffect : null, a !== null) {
      var u = a = a.next;
      do {
        if ((u.tag & e) === e) {
          var h = u.destroy;
          u.destroy = void 0, h !== void 0 && Ra(t, i, h);
        }
        u = u.next;
      } while (u !== a);
    }
  }
  function yi(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var i = t = t.next;
      do {
        if ((i.tag & e) === e) {
          var a = i.create;
          i.destroy = a();
        }
        i = i.next;
      } while (i !== t);
    }
  }
  function ja(e) {
    var t = e.ref;
    if (t !== null) {
      var i = e.stateNode;
      e.tag, e = i, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Wc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Wc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Nt], delete t[Gn], delete t[Wo], delete t[Xf], delete t[Zf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Vc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Kc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Vc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Pa(e, t, i) {
    var a = e.tag;
    if (a === 5 || a === 6) e = e.stateNode, t ? i.nodeType === 8 ? i.parentNode.insertBefore(e, t) : i.insertBefore(e, t) : (i.nodeType === 8 ? (t = i.parentNode, t.insertBefore(e, i)) : (t = i, t.appendChild(e)), i = i._reactRootContainer, i != null || t.onclick !== null || (t.onclick = Gs));
    else if (a !== 4 && (e = e.child, e !== null)) for (Pa(e, t, i), e = e.sibling; e !== null; ) Pa(e, t, i), e = e.sibling;
  }
  function Aa(e, t, i) {
    var a = e.tag;
    if (a === 5 || a === 6) e = e.stateNode, t ? i.insertBefore(e, t) : i.appendChild(e);
    else if (a !== 4 && (e = e.child, e !== null)) for (Aa(e, t, i), e = e.sibling; e !== null; ) Aa(e, t, i), e = e.sibling;
  }
  var ze = null, Tt = !1;
  function hr(e, t, i) {
    for (i = i.child; i !== null; ) Gc(e, t, i), i = i.sibling;
  }
  function Gc(e, t, i) {
    if (Ot && typeof Ot.onCommitFiberUnmount == "function") try {
      Ot.onCommitFiberUnmount(Ps, i);
    } catch {
    }
    switch (i.tag) {
      case 5:
        Ge || an(i, t);
      case 6:
        var a = ze, u = Tt;
        ze = null, hr(e, t, i), ze = a, Tt = u, ze !== null && (Tt ? (e = ze, i = i.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i)) : ze.removeChild(i.stateNode));
        break;
      case 18:
        ze !== null && (Tt ? (e = ze, i = i.stateNode, e.nodeType === 8 ? qo(e.parentNode, i) : e.nodeType === 1 && qo(e, i), Un(e)) : qo(ze, i.stateNode));
        break;
      case 4:
        a = ze, u = Tt, ze = i.stateNode.containerInfo, Tt = !0, hr(e, t, i), ze = a, Tt = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ge && (a = i.updateQueue, a !== null && (a = a.lastEffect, a !== null))) {
          u = a = a.next;
          do {
            var h = u, m = h.destroy;
            h = h.tag, m !== void 0 && ((h & 2) !== 0 || (h & 4) !== 0) && Ra(i, t, m), u = u.next;
          } while (u !== a);
        }
        hr(e, t, i);
        break;
      case 1:
        if (!Ge && (an(i, t), a = i.stateNode, typeof a.componentWillUnmount == "function")) try {
          a.props = i.memoizedProps, a.state = i.memoizedState, a.componentWillUnmount();
        } catch (y) {
          Te(i, t, y);
        }
        hr(e, t, i);
        break;
      case 21:
        hr(e, t, i);
        break;
      case 22:
        i.mode & 1 ? (Ge = (a = Ge) || i.memoizedState !== null, hr(e, t, i), Ge = a) : hr(e, t, i);
        break;
      default:
        hr(e, t, i);
    }
  }
  function Jc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var i = e.stateNode;
      i === null && (i = e.stateNode = new mp()), t.forEach(function(a) {
        var u = xp.bind(null, e, a);
        i.has(a) || (i.add(a), a.then(u, u));
      });
    }
  }
  function Ct(e, t) {
    var i = t.deletions;
    if (i !== null) for (var a = 0; a < i.length; a++) {
      var u = i[a];
      try {
        var h = e, m = t, y = m;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 5:
              ze = y.stateNode, Tt = !1;
              break e;
            case 3:
              ze = y.stateNode.containerInfo, Tt = !0;
              break e;
            case 4:
              ze = y.stateNode.containerInfo, Tt = !0;
              break e;
          }
          y = y.return;
        }
        if (ze === null) throw Error(s(160));
        Gc(h, m, u), ze = null, Tt = !1;
        var k = u.alternate;
        k !== null && (k.return = null), u.return = null;
      } catch (R) {
        Te(u, t, R);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Qc(t, e), t = t.sibling;
  }
  function Qc(e, t) {
    var i = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ct(t, e), $t(e), a & 4) {
          try {
            is(3, e, e.return), yi(3, e);
          } catch (Q) {
            Te(e, e.return, Q);
          }
          try {
            is(5, e, e.return);
          } catch (Q) {
            Te(e, e.return, Q);
          }
        }
        break;
      case 1:
        Ct(t, e), $t(e), a & 512 && i !== null && an(i, i.return);
        break;
      case 5:
        if (Ct(t, e), $t(e), a & 512 && i !== null && an(i, i.return), e.flags & 32) {
          var u = e.stateNode;
          try {
            Tn(u, "");
          } catch (Q) {
            Te(e, e.return, Q);
          }
        }
        if (a & 4 && (u = e.stateNode, u != null)) {
          var h = e.memoizedProps, m = i !== null ? i.memoizedProps : h, y = e.type, k = e.updateQueue;
          if (e.updateQueue = null, k !== null) try {
            y === "input" && h.type === "radio" && h.name != null && El(u, h), ao(y, m);
            var R = ao(y, h);
            for (m = 0; m < k.length; m += 2) {
              var I = k[m], L = k[m + 1];
              I === "style" ? Ol(u, L) : I === "dangerouslySetInnerHTML" ? Pl(u, L) : I === "children" ? Tn(u, L) : D(u, I, L, R);
            }
            switch (y) {
              case "input":
                ro(u, h);
                break;
              case "textarea":
                Cl(u, h);
                break;
              case "select":
                var N = u._wrapperState.wasMultiple;
                u._wrapperState.wasMultiple = !!h.multiple;
                var q = h.value;
                q != null ? Mr(u, !!h.multiple, q, !1) : N !== !!h.multiple && (h.defaultValue != null ? Mr(
                  u,
                  !!h.multiple,
                  h.defaultValue,
                  !0
                ) : Mr(u, !!h.multiple, h.multiple ? [] : "", !1));
            }
            u[Gn] = h;
          } catch (Q) {
            Te(e, e.return, Q);
          }
        }
        break;
      case 6:
        if (Ct(t, e), $t(e), a & 4) {
          if (e.stateNode === null) throw Error(s(162));
          u = e.stateNode, h = e.memoizedProps;
          try {
            u.nodeValue = h;
          } catch (Q) {
            Te(e, e.return, Q);
          }
        }
        break;
      case 3:
        if (Ct(t, e), $t(e), a & 4 && i !== null && i.memoizedState.isDehydrated) try {
          Un(t.containerInfo);
        } catch (Q) {
          Te(e, e.return, Q);
        }
        break;
      case 4:
        Ct(t, e), $t(e);
        break;
      case 13:
        Ct(t, e), $t(e), u = e.child, u.flags & 8192 && (h = u.memoizedState !== null, u.stateNode.isHidden = h, !h || u.alternate !== null && u.alternate.memoizedState !== null || (Ia = Re())), a & 4 && Jc(e);
        break;
      case 22:
        if (I = i !== null && i.memoizedState !== null, e.mode & 1 ? (Ge = (R = Ge) || I, Ct(t, e), Ge = R) : Ct(t, e), $t(e), a & 8192) {
          if (R = e.memoizedState !== null, (e.stateNode.isHidden = R) && !I && (e.mode & 1) !== 0) for (K = e, I = e.child; I !== null; ) {
            for (L = K = I; K !== null; ) {
              switch (N = K, q = N.child, N.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  is(4, N, N.return);
                  break;
                case 1:
                  an(N, N.return);
                  var G = N.stateNode;
                  if (typeof G.componentWillUnmount == "function") {
                    a = N, i = N.return;
                    try {
                      t = a, G.props = t.memoizedProps, G.state = t.memoizedState, G.componentWillUnmount();
                    } catch (Q) {
                      Te(a, i, Q);
                    }
                  }
                  break;
                case 5:
                  an(N, N.return);
                  break;
                case 22:
                  if (N.memoizedState !== null) {
                    Zc(L);
                    continue;
                  }
              }
              q !== null ? (q.return = N, K = q) : Zc(L);
            }
            I = I.sibling;
          }
          e: for (I = null, L = e; ; ) {
            if (L.tag === 5) {
              if (I === null) {
                I = L;
                try {
                  u = L.stateNode, R ? (h = u.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none") : (y = L.stateNode, k = L.memoizedProps.style, m = k != null && k.hasOwnProperty("display") ? k.display : null, y.style.display = Al("display", m));
                } catch (Q) {
                  Te(e, e.return, Q);
                }
              }
            } else if (L.tag === 6) {
              if (I === null) try {
                L.stateNode.nodeValue = R ? "" : L.memoizedProps;
              } catch (Q) {
                Te(e, e.return, Q);
              }
            } else if ((L.tag !== 22 && L.tag !== 23 || L.memoizedState === null || L === e) && L.child !== null) {
              L.child.return = L, L = L.child;
              continue;
            }
            if (L === e) break e;
            for (; L.sibling === null; ) {
              if (L.return === null || L.return === e) break e;
              I === L && (I = null), L = L.return;
            }
            I === L && (I = null), L.sibling.return = L.return, L = L.sibling;
          }
        }
        break;
      case 19:
        Ct(t, e), $t(e), a & 4 && Jc(e);
        break;
      case 21:
        break;
      default:
        Ct(
          t,
          e
        ), $t(e);
    }
  }
  function $t(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var i = e.return; i !== null; ) {
            if (Vc(i)) {
              var a = i;
              break e;
            }
            i = i.return;
          }
          throw Error(s(160));
        }
        switch (a.tag) {
          case 5:
            var u = a.stateNode;
            a.flags & 32 && (Tn(u, ""), a.flags &= -33);
            var h = Kc(e);
            Aa(e, h, u);
            break;
          case 3:
          case 4:
            var m = a.stateNode.containerInfo, y = Kc(e);
            Pa(e, y, m);
            break;
          default:
            throw Error(s(161));
        }
      } catch (k) {
        Te(e, e.return, k);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function yp(e, t, i) {
    K = e, Yc(e);
  }
  function Yc(e, t, i) {
    for (var a = (e.mode & 1) !== 0; K !== null; ) {
      var u = K, h = u.child;
      if (u.tag === 22 && a) {
        var m = u.memoizedState !== null || gi;
        if (!m) {
          var y = u.alternate, k = y !== null && y.memoizedState !== null || Ge;
          y = gi;
          var R = Ge;
          if (gi = m, (Ge = k) && !R) for (K = u; K !== null; ) m = K, k = m.child, m.tag === 22 && m.memoizedState !== null ? ed(u) : k !== null ? (k.return = m, K = k) : ed(u);
          for (; h !== null; ) K = h, Yc(h), h = h.sibling;
          K = u, gi = y, Ge = R;
        }
        Xc(e);
      } else (u.subtreeFlags & 8772) !== 0 && h !== null ? (h.return = u, K = h) : Xc(e);
    }
  }
  function Xc(e) {
    for (; K !== null; ) {
      var t = K;
      if ((t.flags & 8772) !== 0) {
        var i = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ge || yi(5, t);
              break;
            case 1:
              var a = t.stateNode;
              if (t.flags & 4 && !Ge) if (i === null) a.componentDidMount();
              else {
                var u = t.elementType === t.type ? i.memoizedProps : xt(t.type, i.memoizedProps);
                a.componentDidUpdate(u, i.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
              }
              var h = t.updateQueue;
              h !== null && Zu(t, h, a);
              break;
            case 3:
              var m = t.updateQueue;
              if (m !== null) {
                if (i = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    i = t.child.stateNode;
                    break;
                  case 1:
                    i = t.child.stateNode;
                }
                Zu(t, m, i);
              }
              break;
            case 5:
              var y = t.stateNode;
              if (i === null && t.flags & 4) {
                i = y;
                var k = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k.autoFocus && i.focus();
                    break;
                  case "img":
                    k.src && (i.src = k.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var R = t.alternate;
                if (R !== null) {
                  var I = R.memoizedState;
                  if (I !== null) {
                    var L = I.dehydrated;
                    L !== null && Un(L);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(s(163));
          }
          Ge || t.flags & 512 && ja(t);
        } catch (N) {
          Te(t, t.return, N);
        }
      }
      if (t === e) {
        K = null;
        break;
      }
      if (i = t.sibling, i !== null) {
        i.return = t.return, K = i;
        break;
      }
      K = t.return;
    }
  }
  function Zc(e) {
    for (; K !== null; ) {
      var t = K;
      if (t === e) {
        K = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        i.return = t.return, K = i;
        break;
      }
      K = t.return;
    }
  }
  function ed(e) {
    for (; K !== null; ) {
      var t = K;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var i = t.return;
            try {
              yi(4, t);
            } catch (k) {
              Te(t, i, k);
            }
            break;
          case 1:
            var a = t.stateNode;
            if (typeof a.componentDidMount == "function") {
              var u = t.return;
              try {
                a.componentDidMount();
              } catch (k) {
                Te(t, u, k);
              }
            }
            var h = t.return;
            try {
              ja(t);
            } catch (k) {
              Te(t, h, k);
            }
            break;
          case 5:
            var m = t.return;
            try {
              ja(t);
            } catch (k) {
              Te(t, m, k);
            }
        }
      } catch (k) {
        Te(t, t.return, k);
      }
      if (t === e) {
        K = null;
        break;
      }
      var y = t.sibling;
      if (y !== null) {
        y.return = t.return, K = y;
        break;
      }
      K = t.return;
    }
  }
  var vp = Math.ceil, vi = Z.ReactCurrentDispatcher, Oa = Z.ReactCurrentOwner, vt = Z.ReactCurrentBatchConfig, de = 0, De = null, Pe = null, Fe = 0, dt = 0, ln = ar(0), $e = 0, os = null, Pr = 0, wi = 0, Na = 0, as = null, rt = null, Ia = 0, un = 1 / 0, Jt = null, _i = !1, La = null, fr = null, ki = !1, pr = null, Si = 0, ls = 0, $a = null, bi = -1, Ei = 0;
  function Ye() {
    return (de & 6) !== 0 ? Re() : bi !== -1 ? bi : bi = Re();
  }
  function mr(e) {
    return (e.mode & 1) === 0 ? 1 : (de & 2) !== 0 && Fe !== 0 ? Fe & -Fe : tp.transition !== null ? (Ei === 0 && (Ei = Kl()), Ei) : (e = pe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ru(e.type)), e);
  }
  function Rt(e, t, i, a) {
    if (50 < ls) throw ls = 0, $a = null, Error(s(185));
    On(e, i, a), ((de & 2) === 0 || e !== De) && (e === De && ((de & 2) === 0 && (wi |= i), $e === 4 && gr(e, Fe)), nt(e, a), i === 1 && de === 0 && (t.mode & 1) === 0 && (un = Re() + 500, Xs && ur()));
  }
  function nt(e, t) {
    var i = e.callbackNode;
    ef(e, t);
    var a = Ns(e, e === De ? Fe : 0);
    if (a === 0) i !== null && ql(i), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = a & -a, e.callbackPriority !== t) {
      if (i != null && ql(i), t === 1) e.tag === 0 ? ep(rd.bind(null, e)) : zu(rd.bind(null, e)), Qf(function() {
        (de & 6) === 0 && ur();
      }), i = null;
      else {
        switch (Gl(a)) {
          case 1:
            i = mo;
            break;
          case 4:
            i = Wl;
            break;
          case 16:
            i = js;
            break;
          case 536870912:
            i = Vl;
            break;
          default:
            i = js;
        }
        i = cd(i, td.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = i;
    }
  }
  function td(e, t) {
    if (bi = -1, Ei = 0, (de & 6) !== 0) throw Error(s(327));
    var i = e.callbackNode;
    if (cn() && e.callbackNode !== i) return null;
    var a = Ns(e, e === De ? Fe : 0);
    if (a === 0) return null;
    if ((a & 30) !== 0 || (a & e.expiredLanes) !== 0 || t) t = xi(e, a);
    else {
      t = a;
      var u = de;
      de |= 2;
      var h = sd();
      (De !== e || Fe !== t) && (Jt = null, un = Re() + 500, Or(e, t));
      do
        try {
          kp();
          break;
        } catch (y) {
          nd(e, y);
        }
      while (!0);
      ea(), vi.current = h, de = u, Pe !== null ? t = 0 : (De = null, Fe = 0, t = $e);
    }
    if (t !== 0) {
      if (t === 2 && (u = go(e), u !== 0 && (a = u, t = Ua(e, u))), t === 1) throw i = os, Or(e, 0), gr(e, a), nt(e, Re()), i;
      if (t === 6) gr(e, a);
      else {
        if (u = e.current.alternate, (a & 30) === 0 && !wp(u) && (t = xi(e, a), t === 2 && (h = go(e), h !== 0 && (a = h, t = Ua(e, h))), t === 1)) throw i = os, Or(e, 0), gr(e, a), nt(e, Re()), i;
        switch (e.finishedWork = u, e.finishedLanes = a, t) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Nr(e, rt, Jt);
            break;
          case 3:
            if (gr(e, a), (a & 130023424) === a && (t = Ia + 500 - Re(), 10 < t)) {
              if (Ns(e, 0) !== 0) break;
              if (u = e.suspendedLanes, (u & a) !== a) {
                Ye(), e.pingedLanes |= e.suspendedLanes & u;
                break;
              }
              e.timeoutHandle = Ho(Nr.bind(null, e, rt, Jt), t);
              break;
            }
            Nr(e, rt, Jt);
            break;
          case 4:
            if (gr(e, a), (a & 4194240) === a) break;
            for (t = e.eventTimes, u = -1; 0 < a; ) {
              var m = 31 - St(a);
              h = 1 << m, m = t[m], m > u && (u = m), a &= ~h;
            }
            if (a = u, a = Re() - a, a = (120 > a ? 120 : 480 > a ? 480 : 1080 > a ? 1080 : 1920 > a ? 1920 : 3e3 > a ? 3e3 : 4320 > a ? 4320 : 1960 * vp(a / 1960)) - a, 10 < a) {
              e.timeoutHandle = Ho(Nr.bind(null, e, rt, Jt), a);
              break;
            }
            Nr(e, rt, Jt);
            break;
          case 5:
            Nr(e, rt, Jt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return nt(e, Re()), e.callbackNode === i ? td.bind(null, e) : null;
  }
  function Ua(e, t) {
    var i = as;
    return e.current.memoizedState.isDehydrated && (Or(e, t).flags |= 256), e = xi(e, t), e !== 2 && (t = rt, rt = i, t !== null && Da(t)), e;
  }
  function Da(e) {
    rt === null ? rt = e : rt.push.apply(rt, e);
  }
  function wp(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var i = t.updateQueue;
        if (i !== null && (i = i.stores, i !== null)) for (var a = 0; a < i.length; a++) {
          var u = i[a], h = u.getSnapshot;
          u = u.value;
          try {
            if (!bt(h(), u)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (i = t.child, t.subtreeFlags & 16384 && i !== null) i.return = t, t = i;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function gr(e, t) {
    for (t &= ~Na, t &= ~wi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var i = 31 - St(t), a = 1 << i;
      e[i] = -1, t &= ~a;
    }
  }
  function rd(e) {
    if ((de & 6) !== 0) throw Error(s(327));
    cn();
    var t = Ns(e, 0);
    if ((t & 1) === 0) return nt(e, Re()), null;
    var i = xi(e, t);
    if (e.tag !== 0 && i === 2) {
      var a = go(e);
      a !== 0 && (t = a, i = Ua(e, a));
    }
    if (i === 1) throw i = os, Or(e, 0), gr(e, t), nt(e, Re()), i;
    if (i === 6) throw Error(s(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Nr(e, rt, Jt), nt(e, Re()), null;
  }
  function Ma(e, t) {
    var i = de;
    de |= 1;
    try {
      return e(t);
    } finally {
      de = i, de === 0 && (un = Re() + 500, Xs && ur());
    }
  }
  function Ar(e) {
    pr !== null && pr.tag === 0 && (de & 6) === 0 && cn();
    var t = de;
    de |= 1;
    var i = vt.transition, a = pe;
    try {
      if (vt.transition = null, pe = 1, e) return e();
    } finally {
      pe = a, vt.transition = i, de = t, (de & 6) === 0 && ur();
    }
  }
  function Ba() {
    dt = ln.current, ke(ln);
  }
  function Or(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var i = e.timeoutHandle;
    if (i !== -1 && (e.timeoutHandle = -1, Jf(i)), Pe !== null) for (i = Pe.return; i !== null; ) {
      var a = i;
      switch (Jo(a), a.tag) {
        case 1:
          a = a.type.childContextTypes, a != null && Qs();
          break;
        case 3:
          sn(), ke(Ze), ke(We), la();
          break;
        case 5:
          oa(a);
          break;
        case 4:
          sn();
          break;
        case 13:
          ke(Ee);
          break;
        case 19:
          ke(Ee);
          break;
        case 10:
          ta(a.type._context);
          break;
        case 22:
        case 23:
          Ba();
      }
      i = i.return;
    }
    if (De = e, Pe = e = yr(e.current, null), Fe = dt = t, $e = 0, os = null, Na = wi = Pr = 0, rt = as = null, Cr !== null) {
      for (t = 0; t < Cr.length; t++) if (i = Cr[t], a = i.interleaved, a !== null) {
        i.interleaved = null;
        var u = a.next, h = i.pending;
        if (h !== null) {
          var m = h.next;
          h.next = u, a.next = m;
        }
        i.pending = a;
      }
      Cr = null;
    }
    return e;
  }
  function nd(e, t) {
    do {
      var i = Pe;
      try {
        if (ea(), li.current = hi, ui) {
          for (var a = xe.memoizedState; a !== null; ) {
            var u = a.queue;
            u !== null && (u.pending = null), a = a.next;
          }
          ui = !1;
        }
        if (jr = 0, Ue = Le = xe = null, es = !1, ts = 0, Oa.current = null, i === null || i.return === null) {
          $e = 1, os = t, Pe = null;
          break;
        }
        e: {
          var h = e, m = i.return, y = i, k = t;
          if (t = Fe, y.flags |= 32768, k !== null && typeof k == "object" && typeof k.then == "function") {
            var R = k, I = y, L = I.tag;
            if ((I.mode & 1) === 0 && (L === 0 || L === 11 || L === 15)) {
              var N = I.alternate;
              N ? (I.updateQueue = N.updateQueue, I.memoizedState = N.memoizedState, I.lanes = N.lanes) : (I.updateQueue = null, I.memoizedState = null);
            }
            var q = Rc(m);
            if (q !== null) {
              q.flags &= -257, jc(q, m, y, h, t), q.mode & 1 && Cc(h, R, t), t = q, k = R;
              var G = t.updateQueue;
              if (G === null) {
                var Q = /* @__PURE__ */ new Set();
                Q.add(k), t.updateQueue = Q;
              } else G.add(k);
              break e;
            } else {
              if ((t & 1) === 0) {
                Cc(h, R, t), za();
                break e;
              }
              k = Error(s(426));
            }
          } else if (Se && y.mode & 1) {
            var je = Rc(m);
            if (je !== null) {
              (je.flags & 65536) === 0 && (je.flags |= 256), jc(je, m, y, h, t), Xo(on(k, y));
              break e;
            }
          }
          h = k = on(k, y), $e !== 4 && ($e = 2), as === null ? as = [h] : as.push(h), h = m;
          do {
            switch (h.tag) {
              case 3:
                h.flags |= 65536, t &= -t, h.lanes |= t;
                var T = xc(h, k, t);
                Xu(h, T);
                break e;
              case 1:
                y = k;
                var S = h.type, C = h.stateNode;
                if ((h.flags & 128) === 0 && (typeof S.getDerivedStateFromError == "function" || C !== null && typeof C.componentDidCatch == "function" && (fr === null || !fr.has(C)))) {
                  h.flags |= 65536, t &= -t, h.lanes |= t;
                  var $ = Tc(h, y, t);
                  Xu(h, $);
                  break e;
                }
            }
            h = h.return;
          } while (h !== null);
        }
        od(i);
      } catch (Y) {
        t = Y, Pe === i && i !== null && (Pe = i = i.return);
        continue;
      }
      break;
    } while (!0);
  }
  function sd() {
    var e = vi.current;
    return vi.current = hi, e === null ? hi : e;
  }
  function za() {
    ($e === 0 || $e === 3 || $e === 2) && ($e = 4), De === null || (Pr & 268435455) === 0 && (wi & 268435455) === 0 || gr(De, Fe);
  }
  function xi(e, t) {
    var i = de;
    de |= 2;
    var a = sd();
    (De !== e || Fe !== t) && (Jt = null, Or(e, t));
    do
      try {
        _p();
        break;
      } catch (u) {
        nd(e, u);
      }
    while (!0);
    if (ea(), de = i, vi.current = a, Pe !== null) throw Error(s(261));
    return De = null, Fe = 0, $e;
  }
  function _p() {
    for (; Pe !== null; ) id(Pe);
  }
  function kp() {
    for (; Pe !== null && !Wh(); ) id(Pe);
  }
  function id(e) {
    var t = ud(e.alternate, e, dt);
    e.memoizedProps = e.pendingProps, t === null ? od(e) : Pe = t, Oa.current = null;
  }
  function od(e) {
    var t = e;
    do {
      var i = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (i = fp(i, t, dt), i !== null) {
          Pe = i;
          return;
        }
      } else {
        if (i = pp(i, t), i !== null) {
          i.flags &= 32767, Pe = i;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          $e = 6, Pe = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Pe = t;
        return;
      }
      Pe = t = e;
    } while (t !== null);
    $e === 0 && ($e = 5);
  }
  function Nr(e, t, i) {
    var a = pe, u = vt.transition;
    try {
      vt.transition = null, pe = 1, Sp(e, t, i, a);
    } finally {
      vt.transition = u, pe = a;
    }
    return null;
  }
  function Sp(e, t, i, a) {
    do
      cn();
    while (pr !== null);
    if ((de & 6) !== 0) throw Error(s(327));
    i = e.finishedWork;
    var u = e.finishedLanes;
    if (i === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, i === e.current) throw Error(s(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var h = i.lanes | i.childLanes;
    if (tf(e, h), e === De && (Pe = De = null, Fe = 0), (i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0 || ki || (ki = !0, cd(js, function() {
      return cn(), null;
    })), h = (i.flags & 15990) !== 0, (i.subtreeFlags & 15990) !== 0 || h) {
      h = vt.transition, vt.transition = null;
      var m = pe;
      pe = 1;
      var y = de;
      de |= 4, Oa.current = null, gp(e, i), Qc(i, e), Ff(zo), $s = !!Bo, zo = Bo = null, e.current = i, yp(i), Vh(), de = y, pe = m, vt.transition = h;
    } else e.current = i;
    if (ki && (ki = !1, pr = e, Si = u), h = e.pendingLanes, h === 0 && (fr = null), Jh(i.stateNode), nt(e, Re()), t !== null) for (a = e.onRecoverableError, i = 0; i < t.length; i++) u = t[i], a(u.value, { componentStack: u.stack, digest: u.digest });
    if (_i) throw _i = !1, e = La, La = null, e;
    return (Si & 1) !== 0 && e.tag !== 0 && cn(), h = e.pendingLanes, (h & 1) !== 0 ? e === $a ? ls++ : (ls = 0, $a = e) : ls = 0, ur(), null;
  }
  function cn() {
    if (pr !== null) {
      var e = Gl(Si), t = vt.transition, i = pe;
      try {
        if (vt.transition = null, pe = 16 > e ? 16 : e, pr === null) var a = !1;
        else {
          if (e = pr, pr = null, Si = 0, (de & 6) !== 0) throw Error(s(331));
          var u = de;
          for (de |= 4, K = e.current; K !== null; ) {
            var h = K, m = h.child;
            if ((K.flags & 16) !== 0) {
              var y = h.deletions;
              if (y !== null) {
                for (var k = 0; k < y.length; k++) {
                  var R = y[k];
                  for (K = R; K !== null; ) {
                    var I = K;
                    switch (I.tag) {
                      case 0:
                      case 11:
                      case 15:
                        is(8, I, h);
                    }
                    var L = I.child;
                    if (L !== null) L.return = I, K = L;
                    else for (; K !== null; ) {
                      I = K;
                      var N = I.sibling, q = I.return;
                      if (Wc(I), I === R) {
                        K = null;
                        break;
                      }
                      if (N !== null) {
                        N.return = q, K = N;
                        break;
                      }
                      K = q;
                    }
                  }
                }
                var G = h.alternate;
                if (G !== null) {
                  var Q = G.child;
                  if (Q !== null) {
                    G.child = null;
                    do {
                      var je = Q.sibling;
                      Q.sibling = null, Q = je;
                    } while (Q !== null);
                  }
                }
                K = h;
              }
            }
            if ((h.subtreeFlags & 2064) !== 0 && m !== null) m.return = h, K = m;
            else e: for (; K !== null; ) {
              if (h = K, (h.flags & 2048) !== 0) switch (h.tag) {
                case 0:
                case 11:
                case 15:
                  is(9, h, h.return);
              }
              var T = h.sibling;
              if (T !== null) {
                T.return = h.return, K = T;
                break e;
              }
              K = h.return;
            }
          }
          var S = e.current;
          for (K = S; K !== null; ) {
            m = K;
            var C = m.child;
            if ((m.subtreeFlags & 2064) !== 0 && C !== null) C.return = m, K = C;
            else e: for (m = S; K !== null; ) {
              if (y = K, (y.flags & 2048) !== 0) try {
                switch (y.tag) {
                  case 0:
                  case 11:
                  case 15:
                    yi(9, y);
                }
              } catch (Y) {
                Te(y, y.return, Y);
              }
              if (y === m) {
                K = null;
                break e;
              }
              var $ = y.sibling;
              if ($ !== null) {
                $.return = y.return, K = $;
                break e;
              }
              K = y.return;
            }
          }
          if (de = u, ur(), Ot && typeof Ot.onPostCommitFiberRoot == "function") try {
            Ot.onPostCommitFiberRoot(Ps, e);
          } catch {
          }
          a = !0;
        }
        return a;
      } finally {
        pe = i, vt.transition = t;
      }
    }
    return !1;
  }
  function ad(e, t, i) {
    t = on(i, t), t = xc(e, t, 1), e = dr(e, t, 1), t = Ye(), e !== null && (On(e, 1, t), nt(e, t));
  }
  function Te(e, t, i) {
    if (e.tag === 3) ad(e, e, i);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        ad(t, e, i);
        break;
      } else if (t.tag === 1) {
        var a = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (fr === null || !fr.has(a))) {
          e = on(i, e), e = Tc(t, e, 1), t = dr(t, e, 1), e = Ye(), t !== null && (On(t, 1, e), nt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function bp(e, t, i) {
    var a = e.pingCache;
    a !== null && a.delete(t), t = Ye(), e.pingedLanes |= e.suspendedLanes & i, De === e && (Fe & i) === i && ($e === 4 || $e === 3 && (Fe & 130023424) === Fe && 500 > Re() - Ia ? Or(e, 0) : Na |= i), nt(e, t);
  }
  function ld(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Os, Os <<= 1, (Os & 130023424) === 0 && (Os = 4194304)));
    var i = Ye();
    e = Vt(e, t), e !== null && (On(e, t, i), nt(e, i));
  }
  function Ep(e) {
    var t = e.memoizedState, i = 0;
    t !== null && (i = t.retryLane), ld(e, i);
  }
  function xp(e, t) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode, u = e.memoizedState;
        u !== null && (i = u.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    a !== null && a.delete(t), ld(e, i);
  }
  var ud;
  ud = function(e, t, i) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ze.current) tt = !0;
    else {
      if ((e.lanes & i) === 0 && (t.flags & 128) === 0) return tt = !1, hp(e, t, i);
      tt = (e.flags & 131072) !== 0;
    }
    else tt = !1, Se && (t.flags & 1048576) !== 0 && Fu(t, ei, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var a = t.type;
        mi(e, t), e = t.pendingProps;
        var u = Yr(t, We.current);
        nn(t, i), u = da(null, t, a, e, u, i);
        var h = ha();
        return t.flags |= 1, typeof u == "object" && u !== null && typeof u.render == "function" && u.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, et(a) ? (h = !0, Ys(t)) : h = !1, t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, sa(t), u.updater = fi, t.stateNode = u, u._reactInternals = t, va(t, a, e, i), t = Sa(null, t, a, !0, h, i)) : (t.tag = 0, Se && h && Go(t), Qe(null, t, u, i), t = t.child), t;
      case 16:
        a = t.elementType;
        e: {
          switch (mi(e, t), e = t.pendingProps, u = a._init, a = u(a._payload), t.type = a, u = t.tag = Cp(a), e = xt(a, e), u) {
            case 0:
              t = ka(null, t, a, e, i);
              break e;
            case 1:
              t = Lc(null, t, a, e, i);
              break e;
            case 11:
              t = Pc(null, t, a, e, i);
              break e;
            case 14:
              t = Ac(null, t, a, xt(a.type, e), i);
              break e;
          }
          throw Error(s(
            306,
            a,
            ""
          ));
        }
        return t;
      case 0:
        return a = t.type, u = t.pendingProps, u = t.elementType === a ? u : xt(a, u), ka(e, t, a, u, i);
      case 1:
        return a = t.type, u = t.pendingProps, u = t.elementType === a ? u : xt(a, u), Lc(e, t, a, u, i);
      case 3:
        e: {
          if ($c(t), e === null) throw Error(s(387));
          a = t.pendingProps, h = t.memoizedState, u = h.element, Yu(e, t), oi(t, a, null, i);
          var m = t.memoizedState;
          if (a = m.element, h.isDehydrated) if (h = { element: a, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, t.updateQueue.baseState = h, t.memoizedState = h, t.flags & 256) {
            u = on(Error(s(423)), t), t = Uc(e, t, a, i, u);
            break e;
          } else if (a !== u) {
            u = on(Error(s(424)), t), t = Uc(e, t, a, i, u);
            break e;
          } else for (ct = or(t.stateNode.containerInfo.firstChild), ut = t, Se = !0, Et = null, i = Ju(t, null, a, i), t.child = i; i; ) i.flags = i.flags & -3 | 4096, i = i.sibling;
          else {
            if (en(), a === u) {
              t = Gt(e, t, i);
              break e;
            }
            Qe(e, t, a, i);
          }
          t = t.child;
        }
        return t;
      case 5:
        return ec(t), e === null && Yo(t), a = t.type, u = t.pendingProps, h = e !== null ? e.memoizedProps : null, m = u.children, Fo(a, u) ? m = null : h !== null && Fo(a, h) && (t.flags |= 32), Ic(e, t), Qe(e, t, m, i), t.child;
      case 6:
        return e === null && Yo(t), null;
      case 13:
        return Dc(e, t, i);
      case 4:
        return ia(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = tn(t, null, a, i) : Qe(e, t, a, i), t.child;
      case 11:
        return a = t.type, u = t.pendingProps, u = t.elementType === a ? u : xt(a, u), Pc(e, t, a, u, i);
      case 7:
        return Qe(e, t, t.pendingProps, i), t.child;
      case 8:
        return Qe(e, t, t.pendingProps.children, i), t.child;
      case 12:
        return Qe(e, t, t.pendingProps.children, i), t.child;
      case 10:
        e: {
          if (a = t.type._context, u = t.pendingProps, h = t.memoizedProps, m = u.value, ye(ni, a._currentValue), a._currentValue = m, h !== null) if (bt(h.value, m)) {
            if (h.children === u.children && !Ze.current) {
              t = Gt(e, t, i);
              break e;
            }
          } else for (h = t.child, h !== null && (h.return = t); h !== null; ) {
            var y = h.dependencies;
            if (y !== null) {
              m = h.child;
              for (var k = y.firstContext; k !== null; ) {
                if (k.context === a) {
                  if (h.tag === 1) {
                    k = Kt(-1, i & -i), k.tag = 2;
                    var R = h.updateQueue;
                    if (R !== null) {
                      R = R.shared;
                      var I = R.pending;
                      I === null ? k.next = k : (k.next = I.next, I.next = k), R.pending = k;
                    }
                  }
                  h.lanes |= i, k = h.alternate, k !== null && (k.lanes |= i), ra(
                    h.return,
                    i,
                    t
                  ), y.lanes |= i;
                  break;
                }
                k = k.next;
              }
            } else if (h.tag === 10) m = h.type === t.type ? null : h.child;
            else if (h.tag === 18) {
              if (m = h.return, m === null) throw Error(s(341));
              m.lanes |= i, y = m.alternate, y !== null && (y.lanes |= i), ra(m, i, t), m = h.sibling;
            } else m = h.child;
            if (m !== null) m.return = h;
            else for (m = h; m !== null; ) {
              if (m === t) {
                m = null;
                break;
              }
              if (h = m.sibling, h !== null) {
                h.return = m.return, m = h;
                break;
              }
              m = m.return;
            }
            h = m;
          }
          Qe(e, t, u.children, i), t = t.child;
        }
        return t;
      case 9:
        return u = t.type, a = t.pendingProps.children, nn(t, i), u = gt(u), a = a(u), t.flags |= 1, Qe(e, t, a, i), t.child;
      case 14:
        return a = t.type, u = xt(a, t.pendingProps), u = xt(a.type, u), Ac(e, t, a, u, i);
      case 15:
        return Oc(e, t, t.type, t.pendingProps, i);
      case 17:
        return a = t.type, u = t.pendingProps, u = t.elementType === a ? u : xt(a, u), mi(e, t), t.tag = 1, et(a) ? (e = !0, Ys(t)) : e = !1, nn(t, i), bc(t, a, u), va(t, a, u, i), Sa(null, t, a, !0, e, i);
      case 19:
        return Bc(e, t, i);
      case 22:
        return Nc(e, t, i);
    }
    throw Error(s(156, t.tag));
  };
  function cd(e, t) {
    return Hl(e, t);
  }
  function Tp(e, t, i, a) {
    this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function wt(e, t, i, a) {
    return new Tp(e, t, i, a);
  }
  function Fa(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Cp(e) {
    if (typeof e == "function") return Fa(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ot) return 11;
      if (e === ft) return 14;
    }
    return 2;
  }
  function yr(e, t) {
    var i = e.alternate;
    return i === null ? (i = wt(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 14680064, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, t = e.dependencies, i.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i;
  }
  function Ti(e, t, i, a, u, h) {
    var m = 2;
    if (a = e, typeof e == "function") Fa(e) && (m = 1);
    else if (typeof e == "string") m = 5;
    else e: switch (e) {
      case ue:
        return Ir(i.children, u, h, t);
      case Oe:
        m = 8, u |= 8;
        break;
      case be:
        return e = wt(12, i, t, u | 2), e.elementType = be, e.lanes = h, e;
      case Ne:
        return e = wt(13, i, t, u), e.elementType = Ne, e.lanes = h, e;
      case at:
        return e = wt(19, i, t, u), e.elementType = at, e.lanes = h, e;
      case ge:
        return Ci(i, u, h, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Xe:
            m = 10;
            break e;
          case Bt:
            m = 9;
            break e;
          case ot:
            m = 11;
            break e;
          case ft:
            m = 14;
            break e;
          case Ie:
            m = 16, a = null;
            break e;
        }
        throw Error(s(130, e == null ? e : typeof e, ""));
    }
    return t = wt(m, i, t, u), t.elementType = e, t.type = a, t.lanes = h, t;
  }
  function Ir(e, t, i, a) {
    return e = wt(7, e, a, t), e.lanes = i, e;
  }
  function Ci(e, t, i, a) {
    return e = wt(22, e, a, t), e.elementType = ge, e.lanes = i, e.stateNode = { isHidden: !1 }, e;
  }
  function Ha(e, t, i) {
    return e = wt(6, e, null, t), e.lanes = i, e;
  }
  function qa(e, t, i) {
    return t = wt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = i, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Rp(e, t, i, a, u) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = yo(0), this.expirationTimes = yo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = yo(0), this.identifierPrefix = a, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null;
  }
  function Wa(e, t, i, a, u, h, m, y, k) {
    return e = new Rp(e, t, i, y, k), t === 1 ? (t = 1, h === !0 && (t |= 8)) : t = 0, h = wt(3, null, null, t), e.current = h, h.stateNode = e, h.memoizedState = { element: a, isDehydrated: i, cache: null, transitions: null, pendingSuspenseBoundaries: null }, sa(h), e;
  }
  function jp(e, t, i) {
    var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ie, key: a == null ? null : "" + a, children: e, containerInfo: t, implementation: i };
  }
  function dd(e) {
    if (!e) return lr;
    e = e._reactInternals;
    e: {
      if (Sr(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (et(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var i = e.type;
      if (et(i)) return Mu(e, i, t);
    }
    return t;
  }
  function hd(e, t, i, a, u, h, m, y, k) {
    return e = Wa(i, a, !0, e, u, h, m, y, k), e.context = dd(null), i = e.current, a = Ye(), u = mr(i), h = Kt(a, u), h.callback = t ?? null, dr(i, h, u), e.current.lanes = u, On(e, u, a), nt(e, a), e;
  }
  function Ri(e, t, i, a) {
    var u = t.current, h = Ye(), m = mr(u);
    return i = dd(i), t.context === null ? t.context = i : t.pendingContext = i, t = Kt(h, m), t.payload = { element: e }, a = a === void 0 ? null : a, a !== null && (t.callback = a), e = dr(u, t, m), e !== null && (Rt(e, u, m, h), ii(e, u, m)), m;
  }
  function ji(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function fd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function Va(e, t) {
    fd(e, t), (e = e.alternate) && fd(e, t);
  }
  function Pp() {
    return null;
  }
  var pd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Ka(e) {
    this._internalRoot = e;
  }
  Pi.prototype.render = Ka.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    Ri(e, t, null, null);
  }, Pi.prototype.unmount = Ka.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Ar(function() {
        Ri(null, e, null, null);
      }), t[Ft] = null;
    }
  };
  function Pi(e) {
    this._internalRoot = e;
  }
  Pi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Yl();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < nr.length && t !== 0 && t < nr[i].priority; i++) ;
      nr.splice(i, 0, e), i === 0 && eu(e);
    }
  };
  function Ga(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Ai(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function md() {
  }
  function Ap(e, t, i, a, u) {
    if (u) {
      if (typeof a == "function") {
        var h = a;
        a = function() {
          var R = ji(m);
          h.call(R);
        };
      }
      var m = hd(t, a, e, 0, null, !1, !1, "", md);
      return e._reactRootContainer = m, e[Ft] = m.current, Vn(e.nodeType === 8 ? e.parentNode : e), Ar(), m;
    }
    for (; u = e.lastChild; ) e.removeChild(u);
    if (typeof a == "function") {
      var y = a;
      a = function() {
        var R = ji(k);
        y.call(R);
      };
    }
    var k = Wa(e, 0, !1, null, null, !1, !1, "", md);
    return e._reactRootContainer = k, e[Ft] = k.current, Vn(e.nodeType === 8 ? e.parentNode : e), Ar(function() {
      Ri(t, k, i, a);
    }), k;
  }
  function Oi(e, t, i, a, u) {
    var h = i._reactRootContainer;
    if (h) {
      var m = h;
      if (typeof u == "function") {
        var y = u;
        u = function() {
          var k = ji(m);
          y.call(k);
        };
      }
      Ri(t, m, e, u);
    } else m = Ap(i, t, e, u, a);
    return ji(m);
  }
  Jl = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var i = An(t.pendingLanes);
          i !== 0 && (vo(t, i | 1), nt(t, Re()), (de & 6) === 0 && (un = Re() + 500, ur()));
        }
        break;
      case 13:
        Ar(function() {
          var a = Vt(e, 1);
          if (a !== null) {
            var u = Ye();
            Rt(a, e, 1, u);
          }
        }), Va(e, 1);
    }
  }, wo = function(e) {
    if (e.tag === 13) {
      var t = Vt(e, 134217728);
      if (t !== null) {
        var i = Ye();
        Rt(t, e, 134217728, i);
      }
      Va(e, 134217728);
    }
  }, Ql = function(e) {
    if (e.tag === 13) {
      var t = mr(e), i = Vt(e, t);
      if (i !== null) {
        var a = Ye();
        Rt(i, e, t, a);
      }
      Va(e, t);
    }
  }, Yl = function() {
    return pe;
  }, Xl = function(e, t) {
    var i = pe;
    try {
      return pe = e, t();
    } finally {
      pe = i;
    }
  }, co = function(e, t, i) {
    switch (t) {
      case "input":
        if (ro(e, i), t = i.name, i.type === "radio" && t != null) {
          for (i = e; i.parentNode; ) i = i.parentNode;
          for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < i.length; t++) {
            var a = i[t];
            if (a !== e && a.form === e.form) {
              var u = Js(a);
              if (!u) throw Error(s(90));
              En(a), ro(a, u);
            }
          }
        }
        break;
      case "textarea":
        Cl(e, i);
        break;
      case "select":
        t = i.value, t != null && Mr(e, !!i.multiple, t, !1);
    }
  }, $l = Ma, Ul = Ar;
  var Op = { usingClientEntryPoint: !1, Events: [Jn, Jr, Js, Il, Ll, Ma] }, us = { findFiberByHostInstance: br, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Np = { bundleType: us.bundleType, version: us.version, rendererPackageName: us.rendererPackageName, rendererConfig: us.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Z.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = zl(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: us.findFiberByHostInstance || Pp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ni.isDisabled && Ni.supportsFiber) try {
      Ps = Ni.inject(Np), Ot = Ni;
    } catch {
    }
  }
  return st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Op, st.createPortal = function(e, t) {
    var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ga(t)) throw Error(s(200));
    return jp(e, t, null, i);
  }, st.createRoot = function(e, t) {
    if (!Ga(e)) throw Error(s(299));
    var i = !1, a = "", u = pd;
    return t != null && (t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), t = Wa(e, 1, !1, null, null, i, !1, a, u), e[Ft] = t.current, Vn(e.nodeType === 8 ? e.parentNode : e), new Ka(t);
  }, st.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = zl(t), e = e === null ? null : e.stateNode, e;
  }, st.flushSync = function(e) {
    return Ar(e);
  }, st.hydrate = function(e, t, i) {
    if (!Ai(t)) throw Error(s(200));
    return Oi(null, e, t, !0, i);
  }, st.hydrateRoot = function(e, t, i) {
    if (!Ga(e)) throw Error(s(405));
    var a = i != null && i.hydratedSources || null, u = !1, h = "", m = pd;
    if (i != null && (i.unstable_strictMode === !0 && (u = !0), i.identifierPrefix !== void 0 && (h = i.identifierPrefix), i.onRecoverableError !== void 0 && (m = i.onRecoverableError)), t = hd(t, null, e, 1, i ?? null, u, !1, h, m), e[Ft] = t.current, Vn(e), a) for (e = 0; e < a.length; e++) i = a[e], u = i._getVersion, u = u(i._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [i, u] : t.mutableSourceEagerHydrationData.push(
      i,
      u
    );
    return new Pi(t);
  }, st.render = function(e, t, i) {
    if (!Ai(t)) throw Error(s(200));
    return Oi(null, e, t, !1, i);
  }, st.unmountComponentAtNode = function(e) {
    if (!Ai(e)) throw Error(s(40));
    return e._reactRootContainer ? (Ar(function() {
      Oi(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Ft] = null;
      });
    }), !0) : !1;
  }, st.unstable_batchedUpdates = Ma, st.unstable_renderSubtreeIntoContainer = function(e, t, i, a) {
    if (!Ai(i)) throw Error(s(200));
    if (e == null || e._reactInternals === void 0) throw Error(s(38));
    return Oi(e, t, i, !1, a);
  }, st.version = "18.3.1-next-f1338f8080-20240426", st;
}
var bd;
function Fp() {
  if (bd) return Ya.exports;
  bd = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Ya.exports = zp(), Ya.exports;
}
var Ed;
function Hp() {
  if (Ed) return Ii;
  Ed = 1;
  var n = Fp();
  return Ii.createRoot = n.createRoot, Ii.hydrateRoot = n.hydrateRoot, Ii;
}
var qp = Hp();
const Wp = /* @__PURE__ */ dh(qp);
function Yi(n, r) {
  var s = {};
  for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && r.indexOf(o) < 0 && (s[o] = n[o]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, o = Object.getOwnPropertySymbols(n); l < o.length; l++)
      r.indexOf(o[l]) < 0 && Object.prototype.propertyIsEnumerable.call(n, o[l]) && (s[o[l]] = n[o[l]]);
  return s;
}
function Vp(n, r, s, o) {
  function l(c) {
    return c instanceof s ? c : new s(function(d) {
      d(c);
    });
  }
  return new (s || (s = Promise))(function(c, d) {
    function f(v) {
      try {
        g(o.next(v));
      } catch (_) {
        d(_);
      }
    }
    function p(v) {
      try {
        g(o.throw(v));
      } catch (_) {
        d(_);
      }
    }
    function g(v) {
      v.done ? c(v.value) : l(v.value).then(f, p);
    }
    g((o = o.apply(n, r || [])).next());
  });
}
const Kp = (n) => n ? (...r) => n(...r) : (...r) => fetch(...r);
class kl extends Error {
  constructor(r, s = "FunctionsError", o) {
    super(r), this.name = s, this.context = o;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      context: this.context
    };
  }
}
class Gp extends kl {
  constructor(r) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", r);
  }
}
class xd extends kl {
  constructor(r) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", r);
  }
}
class Td extends kl {
  constructor(r) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", r);
  }
}
var al;
(function(n) {
  n.Any = "any", n.ApNortheast1 = "ap-northeast-1", n.ApNortheast2 = "ap-northeast-2", n.ApSouth1 = "ap-south-1", n.ApSoutheast1 = "ap-southeast-1", n.ApSoutheast2 = "ap-southeast-2", n.CaCentral1 = "ca-central-1", n.EuCentral1 = "eu-central-1", n.EuWest1 = "eu-west-1", n.EuWest2 = "eu-west-2", n.EuWest3 = "eu-west-3", n.SaEast1 = "sa-east-1", n.UsEast1 = "us-east-1", n.UsWest1 = "us-west-1", n.UsWest2 = "us-west-2";
})(al || (al = {}));
class Jp {
  /**
   * Creates a new Functions client bound to an Edge Functions URL.
   *
   * @example Using supabase-js (recommended)
   * ```ts
   * import { createClient } from '@supabase/supabase-js'
   *
   * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
   * const { data, error } = await supabase.functions.invoke('hello-world')
   * ```
   *
   * @category Edge Functions
   *
   * @example Standalone import for bundle-sensitive environments
   * ```ts
   * import { FunctionsClient, FunctionRegion } from '@supabase/functions-js'
   *
   * const functions = new FunctionsClient('https://xyzcompany.supabase.co/functions/v1', {
   *   headers: { apikey: 'your-publishable-key' },
   *   region: FunctionRegion.UsEast1,
   * })
   * ```
   */
  constructor(r, { headers: s = {}, customFetch: o, region: l = al.Any } = {}) {
    this.url = r, this.headers = s, this.region = l, this.fetch = Kp(o);
  }
  /**
   * Updates the authorization header
   * @param token - the new jwt token sent in the authorisation header
   *
   * @category Edge Functions
   *
   * @example Setting the authorization header
   * ```ts
   * functions.setAuth(session.access_token)
   * ```
   */
  setAuth(r) {
    this.headers.Authorization = `Bearer ${r}`;
  }
  /**
   * Invokes a function
   * @param functionName - The name of the Function to invoke.
   * @param options - Options for invoking the Function.
   * @example
   * ```ts
   * const { data, error } = await functions.invoke('hello-world', {
   *   body: { name: 'Ada' },
   * })
   * ```
   *
   * @category Edge Functions
   *
   * @remarks
   * - Requires an Authorization header.
   * - Invoke params generally match the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) spec.
   * - When you pass in a body to your function, we automatically attach the Content-Type header for `Blob`, `ArrayBuffer`, `File`, `FormData` and `String`. If it doesn't match any of these types we assume the payload is `json`, serialize it and attach the `Content-Type` header as `application/json`. You can override this behavior by passing in a `Content-Type` header of your own.
   * - Responses are automatically parsed as `json`, `blob` and `form-data` depending on the `Content-Type` header sent by your function. Responses are parsed as `text` by default.
   *
   * @example Basic invocation
   * ```js
   * const { data, error } = await supabase.functions.invoke('hello', {
   *   body: { foo: 'bar' }
   * })
   * ```
   *
   * @exampleDescription Error handling
   * A `FunctionsHttpError` error is returned if your function throws an error, `FunctionsRelayError` if the Supabase Relay has an error processing your function and `FunctionsFetchError` if there is a network error in calling your function.
   *
   * @example Error handling
   * ```js
   * import { FunctionsHttpError, FunctionsRelayError, FunctionsFetchError } from "@supabase/supabase-js";
   *
   * const { data, error } = await supabase.functions.invoke('hello', {
   *   headers: {
   *     "my-custom-header": 'my-custom-header-value'
   *   },
   *   body: { foo: 'bar' }
   * })
   *
   * if (error instanceof FunctionsHttpError) {
   *   const errorMessage = await error.context.json()
   *   console.log('Function returned an error', errorMessage)
   * } else if (error instanceof FunctionsRelayError) {
   *   console.log('Relay error:', error.message)
   * } else if (error instanceof FunctionsFetchError) {
   *   console.log('Fetch error:', error.message)
   * }
   * ```
   *
   * @exampleDescription Passing custom headers
   * You can pass custom headers to your function. Note: supabase-js automatically passes the `Authorization` header with the signed in user's JWT.
   *
   * @example Passing custom headers
   * ```js
   * const { data, error } = await supabase.functions.invoke('hello', {
   *   headers: {
   *     "my-custom-header": 'my-custom-header-value'
   *   },
   *   body: { foo: 'bar' }
   * })
   * ```
   *
   * @exampleDescription Calling with DELETE HTTP verb
   * You can also set the HTTP verb to `DELETE` when calling your Edge Function.
   *
   * @example Calling with DELETE HTTP verb
   * ```js
   * const { data, error } = await supabase.functions.invoke('hello', {
   *   headers: {
   *     "my-custom-header": 'my-custom-header-value'
   *   },
   *   body: { foo: 'bar' },
   *   method: 'DELETE'
   * })
   * ```
   *
   * @exampleDescription Invoking a Function in the UsEast1 region
   * Here are the available regions:
   * - `FunctionRegion.Any`
   * - `FunctionRegion.ApNortheast1`
   * - `FunctionRegion.ApNortheast2`
   * - `FunctionRegion.ApSouth1`
   * - `FunctionRegion.ApSoutheast1`
   * - `FunctionRegion.ApSoutheast2`
   * - `FunctionRegion.CaCentral1`
   * - `FunctionRegion.EuCentral1`
   * - `FunctionRegion.EuWest1`
   * - `FunctionRegion.EuWest2`
   * - `FunctionRegion.EuWest3`
   * - `FunctionRegion.SaEast1`
   * - `FunctionRegion.UsEast1`
   * - `FunctionRegion.UsWest1`
   * - `FunctionRegion.UsWest2`
   *
   * @example Invoking a Function in the UsEast1 region
   * ```js
   * import { createClient, FunctionRegion } from '@supabase/supabase-js'
   *
   * const { data, error } = await supabase.functions.invoke('hello', {
   *   body: { foo: 'bar' },
   *   region: FunctionRegion.UsEast1
   * })
   * ```
   *
   * @exampleDescription Calling with GET HTTP verb
   * You can also set the HTTP verb to `GET` when calling your Edge Function.
   *
   * @example Calling with GET HTTP verb
   * ```js
   * const { data, error } = await supabase.functions.invoke('hello', {
   *   headers: {
   *     "my-custom-header": 'my-custom-header-value'
   *   },
   *   method: 'GET'
   * })
   * ```
   *
   * @example Standalone client invoke
   * ```ts
   * const { data, error } = await functions.invoke('hello-world', {
   *   body: { name: 'Ada' },
   * })
   * ```
   */
  invoke(r) {
    return Vp(this, arguments, void 0, function* (s, o = {}) {
      var l;
      let c, d;
      try {
        const { headers: f, method: p, body: g, signal: v, timeout: _ } = o;
        let b = {}, { region: E } = o;
        E || (E = this.region);
        const j = new URL(`${this.url}/${s}`);
        E && E !== "any" && (b["x-region"] = E, j.searchParams.set("forceFunctionRegion", E));
        let P;
        g && (f && !Object.prototype.hasOwnProperty.call(f, "Content-Type") || !f) ? typeof Blob < "u" && g instanceof Blob || g instanceof ArrayBuffer ? (b["Content-Type"] = "application/octet-stream", P = g) : typeof g == "string" ? (b["Content-Type"] = "text/plain", P = g) : typeof FormData < "u" && g instanceof FormData ? P = g : (b["Content-Type"] = "application/json", P = JSON.stringify(g)) : g && typeof g != "string" && !(typeof Blob < "u" && g instanceof Blob) && !(g instanceof ArrayBuffer) && !(typeof FormData < "u" && g instanceof FormData) ? P = JSON.stringify(g) : P = g;
        let U = v;
        _ && (d = new AbortController(), c = setTimeout(() => d.abort(), _), v ? (U = d.signal, v.addEventListener("abort", () => d.abort())) : U = d.signal);
        const z = yield this.fetch(j.toString(), {
          method: p || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, b), this.headers), f),
          body: P,
          signal: U
        }).catch((me) => {
          throw new Gp(me);
        }), H = z.headers.get("x-relay-error");
        if (H && H === "true")
          throw new xd(z);
        if (!z.ok)
          throw new Td(z);
        let D = ((l = z.headers.get("Content-Type")) !== null && l !== void 0 ? l : "text/plain").split(";")[0].trim(), Z;
        return D === "application/json" ? Z = yield z.json() : D === "application/octet-stream" || D === "application/pdf" ? Z = yield z.blob() : D === "text/event-stream" ? Z = z : D === "multipart/form-data" ? Z = yield z.formData() : Z = yield z.text(), { data: Z, error: null, response: z };
      } catch (f) {
        return {
          data: null,
          error: f,
          response: f instanceof Td || f instanceof xd ? f.context : void 0
        };
      } finally {
        c && clearTimeout(c);
      }
    });
  }
}
const hh = 3, Cd = (n) => Math.min(1e3 * 2 ** n, 3e4), Qp = [520, 503], fh = [
  "GET",
  "HEAD",
  "OPTIONS"
];
var Yp = class extends Error {
  /**
  * @example
  * ```ts
  * import PostgrestError from '@supabase/postgrest-js'
  *
  * throw new PostgrestError({
  *   message: 'Row level security prevented the request',
  *   details: 'RLS denied the insert',
  *   hint: 'Check your policies',
  *   code: 'PGRST301',
  * })
  * ```
  */
  constructor(n) {
    super(n.message), this.name = "PostgrestError", this.details = n.details, this.hint = n.hint, this.code = n.code;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      details: this.details,
      hint: this.hint,
      code: this.code
    };
  }
};
function Rd(n, r) {
  return new Promise((s) => {
    if (r?.aborted) {
      s();
      return;
    }
    const o = setTimeout(() => {
      r?.removeEventListener("abort", l), s();
    }, n);
    function l() {
      clearTimeout(o), s();
    }
    r?.addEventListener("abort", l);
  });
}
function Xp(n, r, s, o) {
  return !(!o || s >= hh || !fh.includes(n) || !Qp.includes(r));
}
var Zp = class {
  /**
  * Creates a builder configured for a specific PostgREST request.
  *
  * @example Using supabase-js (recommended)
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const { data, error } = await supabase.from('users').select('*')
  * ```
  *
  * @category Database
  *
  * @example Standalone import for bundle-sensitive environments
  * ```ts
  * import { PostgrestQueryBuilder } from '@supabase/postgrest-js'
  *
  * const builder = new PostgrestQueryBuilder(
  *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
  *   { headers: new Headers({ apikey: 'your-publishable-key' }) }
  * )
  * ```
  */
  constructor(n) {
    var r, s, o, l, c;
    this.shouldThrowOnError = !1, this.retryEnabled = !0, this.method = n.method, this.url = n.url, this.headers = new Headers(n.headers), this.schema = n.schema, this.body = n.body, this.shouldThrowOnError = (r = n.shouldThrowOnError) !== null && r !== void 0 ? r : !1, this.signal = n.signal, this.isMaybeSingle = (s = n.isMaybeSingle) !== null && s !== void 0 ? s : !1, this.shouldStripNulls = (o = n.shouldStripNulls) !== null && o !== void 0 ? o : !1, this.urlLengthLimit = (l = n.urlLengthLimit) !== null && l !== void 0 ? l : 8e3, this.retryEnabled = (c = n.retry) !== null && c !== void 0 ? c : !0, n.fetch ? this.fetch = n.fetch : this.fetch = fetch;
  }
  /**
  * If there's an error with the query, throwOnError will reject the promise by
  * throwing the error instead of returning it as part of a successful response.
  *
  * {@link https://github.com/supabase/supabase-js/issues/92}
  *
  * @category Database
  */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
  * Strip null values from the response data. Properties with `null` values
  * will be omitted from the returned JSON objects.
  *
  * Requires PostgREST 11.2.0+.
  *
  * {@link https://docs.postgrest.org/en/stable/references/api/resource_representation.html#stripped-nulls}
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .stripNulls()
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text, bio text);
  *
  * insert into
  *   characters (id, name, bio)
  * values
  *   (1, 'Luke', null),
  *   (2, 'Leia', 'Princess of Alderaan');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     },
  *     {
  *       "id": 2,
  *       "name": "Leia",
  *       "bio": "Princess of Alderaan"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  stripNulls() {
    if (this.headers.get("Accept") === "text/csv") throw new Error("stripNulls() cannot be used with csv()");
    return this.shouldStripNulls = !0, this;
  }
  /**
  * Set an HTTP header for the request.
  *
  * @category Database
  */
  setHeader(n, r) {
    return this.headers = new Headers(this.headers), this.headers.set(n, r), this;
  }
  /**
  * @category Database
  *
  * Configure retry behavior for this request.
  *
  * By default, retries are enabled for idempotent requests (GET, HEAD, OPTIONS)
  * that fail with network errors or specific HTTP status codes (503, 520).
  * Retries use exponential backoff (1s, 2s, 4s) with a maximum of 3 attempts.
  *
  * @param enabled - Whether to enable retries for this request
  *
  * @example
  * ```ts
  * // Disable retries for a specific query
  * const { data, error } = await supabase
  *   .from('users')
  *   .select()
  *   .retry(false)
  * ```
  */
  retry(n) {
    return this.retryEnabled = n, this;
  }
  then(n, r) {
    var s = this;
    if (this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers.set("Accept-Profile", this.schema) : this.headers.set("Content-Profile", this.schema)), this.method !== "GET" && this.method !== "HEAD" && this.headers.set("Content-Type", "application/json"), this.shouldStripNulls) {
      const d = this.headers.get("Accept");
      d === "application/vnd.pgrst.object+json" ? this.headers.set("Accept", "application/vnd.pgrst.object+json;nulls=stripped") : (!d || d === "application/json") && this.headers.set("Accept", "application/vnd.pgrst.array+json;nulls=stripped");
    }
    const o = this.fetch;
    let c = (async () => {
      let d = 0;
      for (; ; ) {
        const g = new Headers(s.headers);
        d > 0 && g.set("X-Retry-Count", String(d));
        let v;
        try {
          v = await o(s.url.toString(), {
            method: s.method,
            headers: g,
            body: JSON.stringify(s.body, (_, b) => typeof b == "bigint" ? b.toString() : b),
            signal: s.signal
          });
        } catch (_) {
          if (_?.name === "AbortError" || _?.code === "ABORT_ERR" || !fh.includes(s.method)) throw _;
          if (s.retryEnabled && d < hh) {
            const b = Cd(d);
            d++, await Rd(b, s.signal);
            continue;
          }
          throw _;
        }
        if (Xp(s.method, v.status, d, s.retryEnabled)) {
          var f, p;
          const _ = (f = (p = v.headers) === null || p === void 0 ? void 0 : p.get("Retry-After")) !== null && f !== void 0 ? f : null, b = _ !== null ? Math.max(0, parseInt(_, 10) || 0) * 1e3 : Cd(d);
          await v.text(), d++, await Rd(b, s.signal);
          continue;
        }
        return await s.processResponse(v);
      }
    })();
    return this.shouldThrowOnError || (c = c.catch((d) => {
      var f;
      let p = "", g = "", v = "";
      const _ = d?.cause;
      if (_) {
        var b, E, j, P;
        const H = (b = _?.message) !== null && b !== void 0 ? b : "", D = (E = _?.code) !== null && E !== void 0 ? E : "";
        p = `${(j = d?.name) !== null && j !== void 0 ? j : "FetchError"}: ${d?.message}`, p += `

Caused by: ${(P = _?.name) !== null && P !== void 0 ? P : "Error"}: ${H}`, D && (p += ` (${D})`), _?.stack && (p += `
${_.stack}`);
      } else {
        var U;
        p = (U = d?.stack) !== null && U !== void 0 ? U : "";
      }
      const z = this.url.toString().length;
      return d?.name === "AbortError" || d?.code === "ABORT_ERR" ? (v = "", g = "Request was aborted (timeout or manual cancellation)", z > this.urlLengthLimit && (g += `. Note: Your request URL is ${z} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)) : (_?.name === "HeadersOverflowError" || _?.code === "UND_ERR_HEADERS_OVERFLOW") && (v = "", g = "HTTP headers exceeded server limits (typically 16KB)", z > this.urlLengthLimit && (g += `. Your request URL is ${z} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)), {
        success: !1,
        error: {
          message: `${(f = d?.name) !== null && f !== void 0 ? f : "FetchError"}: ${d?.message}`,
          details: p,
          hint: g,
          code: v
        },
        data: null,
        count: null,
        status: 0,
        statusText: ""
      };
    })), c.then(n, r);
  }
  /**
  * Process a fetch response and return the standardized postgrest response.
  */
  async processResponse(n) {
    var r = this;
    let s = null, o = null, l = null, c = n.status, d = n.statusText;
    if (n.ok) {
      var f, p;
      if (r.method !== "HEAD") {
        var g;
        const b = await n.text();
        b === "" || (r.headers.get("Accept") === "text/csv" || r.headers.get("Accept") && (!((g = r.headers.get("Accept")) === null || g === void 0) && g.includes("application/vnd.pgrst.plan+text")) ? o = b : o = JSON.parse(b));
      }
      const v = (f = r.headers.get("Prefer")) === null || f === void 0 ? void 0 : f.match(/count=(exact|planned|estimated)/), _ = (p = n.headers.get("content-range")) === null || p === void 0 ? void 0 : p.split("/");
      v && _ && _.length > 1 && (l = parseInt(_[1])), r.isMaybeSingle && Array.isArray(o) && (o.length > 1 ? (s = {
        code: "PGRST116",
        details: `Results contain ${o.length} rows, application/vnd.pgrst.object+json requires 1 row`,
        hint: null,
        message: "JSON object requested, multiple (or no) rows returned"
      }, o = null, l = null, c = 406, d = "Not Acceptable") : o.length === 1 ? o = o[0] : o = null);
    } else {
      const v = await n.text();
      try {
        s = JSON.parse(v), Array.isArray(s) && n.status === 404 && (o = [], s = null, c = 200, d = "OK");
      } catch {
        n.status === 404 && v === "" ? (c = 204, d = "No Content") : s = { message: v };
      }
      if (s && r.shouldThrowOnError) throw new Yp(s);
    }
    return {
      success: s === null,
      error: s,
      data: o,
      count: l,
      status: c,
      statusText: d
    };
  }
  /**
  * Override the type of the returned `data`.
  *
  * @typeParam NewResult - The new result type to override with
  * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
  *
  * @category Database
  */
  returns() {
    return this;
  }
  /**
  * Override the type of the returned `data` field in the response.
  *
  * @typeParam NewResult - The new type to cast the response data to
  * @typeParam Options - Optional type configuration (defaults to { merge: true })
  * @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
  * @example
  * ```typescript
  * // Merge with existing types (default behavior)
  * const query = supabase
  *   .from('users')
  *   .select()
  *   .overrideTypes<{ custom_field: string }>()
  *
  * // Replace existing types completely
  * const replaceQuery = supabase
  *   .from('users')
  *   .select()
  *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
  * ```
  * @returns A PostgrestBuilder instance with the new type
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example Complete Override type of successful response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .overrideTypes<Array<MyType>, { merge: false }>()
  * ```
  *
  * @exampleResponse Complete Override type of successful response
  * ```ts
  * let x: typeof data // MyType[]
  * ```
  *
  * @example Complete Override type of object response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .maybeSingle()
  *   .overrideTypes<MyType, { merge: false }>()
  * ```
  *
  * @exampleResponse Complete Override type of object response
  * ```ts
  * let x: typeof data // MyType | null
  * ```
  *
  * @example Partial Override type of successful response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .overrideTypes<Array<{ status: "A" | "B" }>>()
  * ```
  *
  * @exampleResponse Partial Override type of successful response
  * ```ts
  * let x: typeof data // Array<CountryRowProperties & { status: "A" | "B" }>
  * ```
  *
  * @example Partial Override type of object response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .maybeSingle()
  *   .overrideTypes<{ status: "A" | "B" }>()
  * ```
  *
  * @exampleResponse Partial Override type of object response
  * ```ts
  * let x: typeof data // CountryRowProperties & { status: "A" | "B" } | null
  * ```
  *
  * @example Merge vs replace existing types
  * ```typescript
  * // Merge with existing types (default behavior)
  * const query = supabase
  *   .from('users')
  *   .select()
  *   .overrideTypes<{ custom_field: string }>()
  *
  * // Replace existing types completely
  * const replaceQuery = supabase
  *   .from('users')
  *   .select()
  *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
  * ```
  */
  overrideTypes() {
    return this;
  }
}, em = class extends Zp {
  /**
  * Perform a SELECT on the query result.
  *
  * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
  * return modified rows. By calling this method, modified rows are returned in
  * `data`.
  *
  * @param columns - The columns to retrieve, separated by commas
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `upsert()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .upsert({ id: 1, name: 'Han Solo' })
  *   .select()
  * ```
  *
  * @exampleSql With `upsert()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Han');
  * ```
  *
  * @exampleResponse With `upsert()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Han Solo"
  *     }
  *   ],
  *   "status": 201,
  *   "statusText": "Created"
  * }
  * ```
  */
  select(n) {
    let r = !1;
    const s = (n ?? "*").split("").map((o) => /\s/.test(o) && !r ? "" : (o === '"' && (r = !r), o)).join("");
    return this.url.searchParams.set("select", s), this.headers.append("Prefer", "return=representation"), this;
  }
  /**
  * Order the query result by `column`.
  *
  * You can call this method multiple times to order by multiple columns.
  *
  * You can order referenced tables, but it only affects the ordering of the
  * parent table if you use `!inner` in the query.
  *
  * @param column - The column to order by
  * @param options - Named parameters
  * @param options.ascending - If `true`, the result will be in ascending order
  * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
  * `null`s appear last.
  * @param options.referencedTable - Set this to order a referenced table by
  * its columns
  * @param options.foreignTable - Deprecated, use `options.referencedTable`
  * instead
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('id, name')
  *   .order('id', { ascending: false })
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 3,
  *       "name": "Han"
  *     },
  *     {
  *       "id": 2,
  *       "name": "Leia"
  *     },
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription On a referenced table
  * Ordering with `referencedTable` doesn't affect the ordering of the
  * parent table.
  *
  * @example On a referenced table
  * ```ts
  *   const { data, error } = await supabase
  *     .from('orchestral_sections')
  *     .select(`
  *       name,
  *       instruments (
  *         name
  *       )
  *     `)
  *     .order('name', { referencedTable: 'instruments', ascending: false })
  *
  * ```
  *
  * @exampleSql On a referenced table
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 1, 'harp'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse On a referenced table
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "strings",
  *       "instruments": [
  *         {
  *           "name": "violin"
  *         },
  *         {
  *           "name": "harp"
  *         }
  *       ]
  *     },
  *     {
  *       "name": "woodwinds",
  *       "instruments": []
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Order parent table by a referenced table
  * Ordering with `referenced_table(col)` affects the ordering of the
  * parent table.
  *
  * @example Order parent table by a referenced table
  * ```ts
  *   const { data, error } = await supabase
  *     .from('instruments')
  *     .select(`
  *       name,
  *       section:orchestral_sections (
  *         name
  *       )
  *     `)
  *     .order('section(name)', { ascending: true })
  *
  * ```
  *
  * @exampleSql Order parent table by a referenced table
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 2, 'flute'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse Order parent table by a referenced table
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "violin",
  *       "orchestral_sections": {"name": "strings"}
  *     },
  *     {
  *       "name": "flute",
  *       "orchestral_sections": {"name": "woodwinds"}
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  order(n, { ascending: r = !0, nullsFirst: s, foreignTable: o, referencedTable: l = o } = {}) {
    const c = l ? `${l}.order` : "order", d = this.url.searchParams.get(c);
    return this.url.searchParams.set(c, `${d ? `${d},` : ""}${n}.${r ? "asc" : "desc"}${s === void 0 ? "" : s ? ".nullsfirst" : ".nullslast"}`), this;
  }
  /**
  * Limit the query result by `count`.
  *
  * @param count - The maximum number of rows to return
  * @param options - Named parameters
  * @param options.referencedTable - Set this to limit rows of referenced
  * tables instead of the parent table
  * @param options.foreignTable - Deprecated, use `options.referencedTable`
  * instead
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .limit(1)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Luke"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example On a referenced table
  * ```ts
  * const { data, error } = await supabase
  *   .from('orchestral_sections')
  *   .select(`
  *     name,
  *     instruments (
  *       name
  *     )
  *   `)
  *   .limit(1, { referencedTable: 'instruments' })
  * ```
  *
  * @exampleSql On a referenced table
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 1, 'harp'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse On a referenced table
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "strings",
  *       "instruments": [
  *         {
  *           "name": "violin"
  *         }
  *       ]
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  limit(n, { foreignTable: r, referencedTable: s = r } = {}) {
    const o = typeof s > "u" ? "limit" : `${s}.limit`;
    return this.url.searchParams.set(o, `${n}`), this;
  }
  /**
  * Limit the query result by starting at an offset `from` and ending at the offset `to`.
  * Only records within this range are returned.
  * This respects the query order and if there is no order clause the range could behave unexpectedly.
  * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
  * and fourth rows of the query.
  *
  * @param from - The starting index from which to limit the result
  * @param to - The last index to which to limit the result
  * @param options - Named parameters
  * @param options.referencedTable - Set this to limit rows of referenced
  * tables instead of the parent table
  * @param options.foreignTable - Deprecated, use `options.referencedTable`
  * instead
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .range(0, 1)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Luke"
  *     },
  *     {
  *       "name": "Leia"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  range(n, r, { foreignTable: s, referencedTable: o = s } = {}) {
    const l = typeof o > "u" ? "offset" : `${o}.offset`, c = typeof o > "u" ? "limit" : `${o}.limit`;
    return this.url.searchParams.set(l, `${n}`), this.url.searchParams.set(c, `${r - n + 1}`), this;
  }
  /**
  * Set the AbortSignal for the fetch request.
  *
  * @param signal - The AbortSignal to use for the fetch request
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @remarks
  * You can use this to set a timeout for the request.
  *
  * @exampleDescription Aborting requests in-flight
  * You can use an [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) to abort requests.
  * Note that `status` and `statusText` don't mean anything for aborted requests as the request wasn't fulfilled.
  *
  * @example Aborting requests in-flight
  * ```ts
  * const ac = new AbortController()
  *
  * const { data, error } = await supabase
  *   .from('very_big_table')
  *   .select()
  *   .abortSignal(ac.signal)
  *
  * // Abort the request after 100 ms
  * setTimeout(() => ac.abort(), 100)
  * ```
  *
  * @exampleResponse Aborting requests in-flight
  * ```json
  *   {
  *     "error": {
  *       "message": "AbortError: The user aborted a request.",
  *       "details": "",
  *       "hint": "The request was aborted locally via the provided AbortSignal.",
  *       "code": ""
  *     },
  *     "status": 0,
  *     "statusText": ""
  *   }
  *
  * ```
  *
  * @example Set a timeout
  * ```ts
  * const { data, error } = await supabase
  *   .from('very_big_table')
  *   .select()
  *   .abortSignal(AbortSignal.timeout(1000 /* ms *\/))
  * ```
  *
  * @exampleResponse Set a timeout
  * ```json
  *   {
  *     "error": {
  *       "message": "FetchError: The user aborted a request.",
  *       "details": "",
  *       "hint": "",
  *       "code": ""
  *     },
  *     "status": 400,
  *     "statusText": "Bad Request"
  *   }
  *
  * ```
  */
  abortSignal(n) {
    return this.signal = n, this;
  }
  /**
  * Return `data` as a single object instead of an array of objects.
  *
  * Query result must be one row (e.g. using `.limit(1)`), otherwise this
  * returns an error.
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .limit(1)
  *   .single()
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": {
  *     "name": "Luke"
  *   },
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  single() {
    return this.headers.set("Accept", "application/vnd.pgrst.object+json"), this;
  }
  /**
  * Return `data` as a single object instead of an array of objects.
  *
  * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
  * this returns an error.
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .eq('name', 'Katniss')
  *   .maybeSingle()
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  maybeSingle() {
    return this.isMaybeSingle = !0, this;
  }
  /**
  * Return `data` as a string in CSV format.
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @exampleDescription Return data as CSV
  * By default, the data is returned in JSON format, but can also be returned as Comma Separated Values.
  *
  * @example Return data as CSV
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .csv()
  * ```
  *
  * @exampleSql Return data as CSV
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse Return data as CSV
  * ```json
  * {
  *   "data": "id,name\n1,Luke\n2,Leia\n3,Han",
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  csv() {
    return this.headers.set("Accept", "text/csv"), this;
  }
  /**
  * Return `data` as an object in [GeoJSON](https://geojson.org) format.
  *
  * @category Database
  */
  geojson() {
    return this.headers.set("Accept", "application/geo+json"), this;
  }
  /**
  * Return `data` as the EXPLAIN plan for the query.
  *
  * You need to enable the
  * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
  * setting before using this method.
  *
  * @param options - Named parameters
  *
  * @param options.analyze - If `true`, the query will be executed and the
  * actual run time will be returned
  *
  * @param options.verbose - If `true`, the query identifier will be returned
  * and `data` will include the output columns of the query
  *
  * @param options.settings - If `true`, include information on configuration
  * parameters that affect query planning
  *
  * @param options.buffers - If `true`, include information on buffer usage
  *
  * @param options.wal - If `true`, include information on WAL record generation
  *
  * @param options.format - The format of the output, can be `"text"` (default)
  * or `"json"`
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @exampleDescription Get the execution plan
  * By default, the data is returned in TEXT format, but can also be returned as JSON by using the `format` parameter.
  *
  * @example Get the execution plan
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .explain()
  * ```
  *
  * @exampleSql Get the execution plan
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse Get the execution plan
  * ```js
  * Aggregate  (cost=33.34..33.36 rows=1 width=112)
  *   ->  Limit  (cost=0.00..18.33 rows=1000 width=40)
  *         ->  Seq Scan on characters  (cost=0.00..22.00 rows=1200 width=40)
  * ```
  *
  * @exampleDescription Get the execution plan with analyze and verbose
  * By default, the data is returned in TEXT format, but can also be returned as JSON by using the `format` parameter.
  *
  * @example Get the execution plan with analyze and verbose
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .explain({analyze:true,verbose:true})
  * ```
  *
  * @exampleSql Get the execution plan with analyze and verbose
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse Get the execution plan with analyze and verbose
  * ```js
  * Aggregate  (cost=33.34..33.36 rows=1 width=112) (actual time=0.041..0.041 rows=1 loops=1)
  *   Output: NULL::bigint, count(ROW(characters.id, characters.name)), COALESCE(json_agg(ROW(characters.id, characters.name)), '[]'::json), NULLIF(current_setting('response.headers'::text, true), ''::text), NULLIF(current_setting('response.status'::text, true), ''::text)
  *   ->  Limit  (cost=0.00..18.33 rows=1000 width=40) (actual time=0.005..0.006 rows=3 loops=1)
  *         Output: characters.id, characters.name
  *         ->  Seq Scan on public.characters  (cost=0.00..22.00 rows=1200 width=40) (actual time=0.004..0.005 rows=3 loops=1)
  *               Output: characters.id, characters.name
  * Query Identifier: -4730654291623321173
  * Planning Time: 0.407 ms
  * Execution Time: 0.119 ms
  * ```
  */
  explain({ analyze: n = !1, verbose: r = !1, settings: s = !1, buffers: o = !1, wal: l = !1, format: c = "text" } = {}) {
    var d;
    const f = [
      n ? "analyze" : null,
      r ? "verbose" : null,
      s ? "settings" : null,
      o ? "buffers" : null,
      l ? "wal" : null
    ].filter(Boolean).join("|"), p = (d = this.headers.get("Accept")) !== null && d !== void 0 ? d : "application/json";
    return this.headers.set("Accept", `application/vnd.pgrst.plan+${c}; for="${p}"; options=${f};`), c === "json" ? this : this;
  }
  /**
  * Rollback the query.
  *
  * `data` will still be returned, but the query is not committed.
  *
  * @category Database
  */
  rollback() {
    return this.headers.append("Prefer", "tx=rollback"), this;
  }
  /**
  * Override the type of the returned `data`.
  *
  * @typeParam NewResult - The new result type to override with
  * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @remarks
  * - Deprecated: use overrideTypes method instead
  *
  * @example Override type of successful response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .returns<Array<MyType>>()
  * ```
  *
  * @exampleResponse Override type of successful response
  * ```js
  * let x: typeof data // MyType[]
  * ```
  *
  * @example Override type of object response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .maybeSingle()
  *   .returns<MyType>()
  * ```
  *
  * @exampleResponse Override type of object response
  * ```js
  * let x: typeof data // MyType | null
  * ```
  */
  returns() {
    return this;
  }
  /**
  * Set the maximum number of rows that can be affected by the query.
  * Only available in PostgREST v13+ and only works with PATCH and DELETE methods.
  *
  * @param value - The maximum number of rows that can be affected
  *
  * @category Database
  */
  maxAffected(n) {
    return this.headers.append("Prefer", "handling=strict"), this.headers.append("Prefer", `max-affected=${n}`), this;
  }
};
const jd = /* @__PURE__ */ new RegExp("[,()]");
var gn = class extends em {
  /**
  * Match only rows where `column` is equal to `value`.
  *
  * To check if the value of `column` is NULL, you should use `.is()` instead.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .eq('name', 'Leia')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 2,
  *       "name": "Leia"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  eq(n, r) {
    return this.url.searchParams.append(n, `eq.${r}`), this;
  }
  /**
  * Match only rows where `column` is not equal to `value`.
  *
  * This filter does not include rows where `column` is `NULL`. To match null
  * values, use `.is(column, null)` instead.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .neq('name', 'Leia')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     },
  *     {
  *       "id": 3,
  *       "name": "Han"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  neq(n, r) {
    return this.url.searchParams.append(n, `neq.${r}`), this;
  }
  /**
  * Match only rows where `column` is greater than `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @exampleDescription With `select()`
  * When using [reserved words](https://www.postgresql.org/docs/current/sql-keywords-appendix.html) for column names you need
  * to add double quotes e.g. `.gt('"order"', 2)`
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .gt('id', 2)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 3,
  *       "name": "Han"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  gt(n, r) {
    return this.url.searchParams.append(n, `gt.${r}`), this;
  }
  /**
  * Match only rows where `column` is greater than or equal to `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .gte('id', 2)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 2,
  *       "name": "Leia"
  *     },
  *     {
  *       "id": 3,
  *       "name": "Han"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  gte(n, r) {
    return this.url.searchParams.append(n, `gte.${r}`), this;
  }
  /**
  * Match only rows where `column` is less than `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .lt('id', 2)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  lt(n, r) {
    return this.url.searchParams.append(n, `lt.${r}`), this;
  }
  /**
  * Match only rows where `column` is less than or equal to `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .lte('id', 2)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     },
  *     {
  *       "id": 2,
  *       "name": "Leia"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  lte(n, r) {
    return this.url.searchParams.append(n, `lte.${r}`), this;
  }
  /**
  * Match only rows where `column` matches `pattern` case-sensitively.
  *
  * @param column - The column to filter on
  * @param pattern - The pattern to match with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .like('name', '%Lu%')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  like(n, r) {
    return this.url.searchParams.append(n, `like.${r}`), this;
  }
  /**
  * Match only rows where `column` matches all of `patterns` case-sensitively.
  *
  * @param column - The column to filter on
  * @param patterns - The patterns to match with
  *
  * @category Database
  * @subcategory Using filters
  */
  likeAllOf(n, r) {
    return this.url.searchParams.append(n, `like(all).{${r.join(",")}}`), this;
  }
  /**
  * Match only rows where `column` matches any of `patterns` case-sensitively.
  *
  * @param column - The column to filter on
  * @param patterns - The patterns to match with
  *
  * @category Database
  * @subcategory Using filters
  */
  likeAnyOf(n, r) {
    return this.url.searchParams.append(n, `like(any).{${r.join(",")}}`), this;
  }
  /**
  * Match only rows where `column` matches `pattern` case-insensitively.
  *
  * @param column - The column to filter on
  * @param pattern - The pattern to match with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .ilike('name', '%lu%')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  ilike(n, r) {
    return this.url.searchParams.append(n, `ilike.${r}`), this;
  }
  /**
  * Match only rows where `column` matches all of `patterns` case-insensitively.
  *
  * @param column - The column to filter on
  * @param patterns - The patterns to match with
  *
  * @category Database
  * @subcategory Using filters
  */
  ilikeAllOf(n, r) {
    return this.url.searchParams.append(n, `ilike(all).{${r.join(",")}}`), this;
  }
  /**
  * Match only rows where `column` matches any of `patterns` case-insensitively.
  *
  * @param column - The column to filter on
  * @param patterns - The patterns to match with
  *
  * @category Database
  * @subcategory Using filters
  */
  ilikeAnyOf(n, r) {
    return this.url.searchParams.append(n, `ilike(any).{${r.join(",")}}`), this;
  }
  /**
  * Match only rows where `column` matches the PostgreSQL regex `pattern`
  * case-sensitively (using the `~` operator).
  *
  * @param column - The column to filter on
  * @param pattern - The PostgreSQL regular expression pattern to match with
  */
  regexMatch(n, r) {
    return this.url.searchParams.append(n, `match.${r}`), this;
  }
  /**
  * Match only rows where `column` matches the PostgreSQL regex `pattern`
  * case-insensitively (using the `~*` operator).
  *
  * @param column - The column to filter on
  * @param pattern - The PostgreSQL regular expression pattern to match with
  */
  regexIMatch(n, r) {
    return this.url.searchParams.append(n, `imatch.${r}`), this;
  }
  /**
  * Match only rows where `column` IS `value`.
  *
  * For non-boolean columns, this is only relevant for checking if the value of
  * `column` is NULL by setting `value` to `null`.
  *
  * For boolean columns, you can also set `value` to `true` or `false` and it
  * will behave the same way as `.eq()`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @exampleDescription Checking for nullness, true or false
  * Using the `eq()` filter doesn't work when filtering for `null`.
  *
  * Instead, you need to use `is()`.
  *
  * @example Checking for nullness, true or false
  * ```ts
  * const { data, error } = await supabase
  *   .from('countries')
  *   .select()
  *   .is('name', null)
  * ```
  *
  * @exampleSql Checking for nullness, true or false
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'null'),
  *   (2, null);
  * ```
  *
  * @exampleResponse Checking for nullness, true or false
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 2,
  *       "name": "null"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  is(n, r) {
    return this.url.searchParams.append(n, `is.${r}`), this;
  }
  /**
  * Match only rows where `column` IS DISTINCT FROM `value`.
  *
  * Unlike `.neq()`, this treats `NULL` as a comparable value. Two `NULL` values
  * are considered equal (not distinct), and comparing `NULL` with any non-NULL
  * value returns true (distinct).
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  isDistinct(n, r) {
    return this.url.searchParams.append(n, `isdistinct.${r}`), this;
  }
  /**
  * Match only rows where `column` is included in the `values` array.
  *
  * @param column - The column to filter on
  * @param values - The values array to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .in('name', ['Leia', 'Han'])
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 2,
  *       "name": "Leia"
  *     },
  *     {
  *       "id": 3,
  *       "name": "Han"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  in(n, r) {
    const s = Array.from(new Set(r)).map((o) => typeof o == "string" && jd.test(o) ? `"${o}"` : `${o}`).join(",");
    return this.url.searchParams.append(n, `in.(${s})`), this;
  }
  /**
  * Match only rows where `column` is NOT included in the `values` array.
  *
  * @param column - The column to filter on
  * @param values - The values array to filter with
  */
  notIn(n, r) {
    const s = Array.from(new Set(r)).map((o) => typeof o == "string" && jd.test(o) ? `"${o}"` : `${o}`).join(",");
    return this.url.searchParams.append(n, `not.in.(${s})`), this;
  }
  /**
  * Only relevant for jsonb, array, and range columns. Match only rows where
  * `column` contains every element appearing in `value`.
  *
  * @param column - The jsonb, array, or range column to filter on
  * @param value - The jsonb, array, or range value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example On array columns
  * ```ts
  * const { data, error } = await supabase
  *   .from('issues')
  *   .select()
  *   .contains('tags', ['is:open', 'priority:low'])
  * ```
  *
  * @exampleSql On array columns
  * ```sql
  * create table
  *   issues (
  *     id int8 primary key,
  *     title text,
  *     tags text[]
  *   );
  *
  * insert into
  *   issues (id, title, tags)
  * values
  *   (1, 'Cache invalidation is not working', array['is:open', 'severity:high', 'priority:low']),
  *   (2, 'Use better names', array['is:open', 'severity:low', 'priority:medium']);
  * ```
  *
  * @exampleResponse On array columns
  * ```json
  * {
  *   "data": [
  *     {
  *       "title": "Cache invalidation is not working"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription On range columns
  * Postgres supports a number of [range
  * types](https://www.postgresql.org/docs/current/rangetypes.html). You
  * can filter on range columns using the string representation of range
  * values.
  *
  * @example On range columns
  * ```ts
  * const { data, error } = await supabase
  *   .from('reservations')
  *   .select()
  *   .contains('during', '[2000-01-01 13:00, 2000-01-01 13:30)')
  * ```
  *
  * @exampleSql On range columns
  * ```sql
  * create table
  *   reservations (
  *     id int8 primary key,
  *     room_name text,
  *     during tsrange
  *   );
  *
  * insert into
  *   reservations (id, room_name, during)
  * values
  *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
  *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
  * ```
  *
  * @exampleResponse On range columns
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "room_name": "Emerald",
  *       "during": "[\"2000-01-01 13:00:00\",\"2000-01-01 15:00:00\")"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example On `jsonb` columns
  * ```ts
  * const { data, error } = await supabase
  *   .from('users')
  *   .select('name')
  *   .contains('address', { postcode: 90210 })
  * ```
  *
  * @exampleSql On `jsonb` columns
  * ```sql
  * create table
  *   users (
  *     id int8 primary key,
  *     name text,
  *     address jsonb
  *   );
  *
  * insert into
  *   users (id, name, address)
  * values
  *   (1, 'Michael', '{ "postcode": 90210, "street": "Melrose Place" }'),
  *   (2, 'Jane', '{}');
  * ```
  *
  * @exampleResponse On `jsonb` columns
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Michael"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  contains(n, r) {
    return typeof r == "string" ? this.url.searchParams.append(n, `cs.${r}`) : Array.isArray(r) ? this.url.searchParams.append(n, `cs.{${r.join(",")}}`) : this.url.searchParams.append(n, `cs.${JSON.stringify(r)}`), this;
  }
  /**
  * Only relevant for jsonb, array, and range columns. Match only rows where
  * every element appearing in `column` is contained by `value`.
  *
  * @param column - The jsonb, array, or range column to filter on
  * @param value - The jsonb, array, or range value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example On array columns
  * ```ts
  * const { data, error } = await supabase
  *   .from('classes')
  *   .select('name')
  *   .containedBy('days', ['monday', 'tuesday', 'wednesday', 'friday'])
  * ```
  *
  * @exampleSql On array columns
  * ```sql
  * create table
  *   classes (
  *     id int8 primary key,
  *     name text,
  *     days text[]
  *   );
  *
  * insert into
  *   classes (id, name, days)
  * values
  *   (1, 'Chemistry', array['monday', 'friday']),
  *   (2, 'History', array['monday', 'wednesday', 'thursday']);
  * ```
  *
  * @exampleResponse On array columns
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Chemistry"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription On range columns
  * Postgres supports a number of [range
  * types](https://www.postgresql.org/docs/current/rangetypes.html). You
  * can filter on range columns using the string representation of range
  * values.
  *
  * @example On range columns
  * ```ts
  * const { data, error } = await supabase
  *   .from('reservations')
  *   .select()
  *   .containedBy('during', '[2000-01-01 00:00, 2000-01-01 23:59)')
  * ```
  *
  * @exampleSql On range columns
  * ```sql
  * create table
  *   reservations (
  *     id int8 primary key,
  *     room_name text,
  *     during tsrange
  *   );
  *
  * insert into
  *   reservations (id, room_name, during)
  * values
  *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
  *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
  * ```
  *
  * @exampleResponse On range columns
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "room_name": "Emerald",
  *       "during": "[\"2000-01-01 13:00:00\",\"2000-01-01 15:00:00\")"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example On `jsonb` columns
  * ```ts
  * const { data, error } = await supabase
  *   .from('users')
  *   .select('name')
  *   .containedBy('address', {})
  * ```
  *
  * @exampleSql On `jsonb` columns
  * ```sql
  * create table
  *   users (
  *     id int8 primary key,
  *     name text,
  *     address jsonb
  *   );
  *
  * insert into
  *   users (id, name, address)
  * values
  *   (1, 'Michael', '{ "postcode": 90210, "street": "Melrose Place" }'),
  *   (2, 'Jane', '{}');
  * ```
  *
  * @exampleResponse On `jsonb` columns
  * ```json
  *   {
  *     "data": [
  *       {
  *         "name": "Jane"
  *       }
  *     ],
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *
  * ```
  */
  containedBy(n, r) {
    return typeof r == "string" ? this.url.searchParams.append(n, `cd.${r}`) : Array.isArray(r) ? this.url.searchParams.append(n, `cd.{${r.join(",")}}`) : this.url.searchParams.append(n, `cd.${JSON.stringify(r)}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where every element in
  * `column` is greater than any element in `range`.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @exampleDescription With `select()`
  * Postgres supports a number of [range
  * types](https://www.postgresql.org/docs/current/rangetypes.html). You
  * can filter on range columns using the string representation of range
  * values.
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('reservations')
  *   .select()
  *   .rangeGt('during', '[2000-01-02 08:00, 2000-01-02 09:00)')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   reservations (
  *     id int8 primary key,
  *     room_name text,
  *     during tsrange
  *   );
  *
  * insert into
  *   reservations (id, room_name, during)
  * values
  *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
  *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  *   {
  *     "data": [
  *       {
  *         "id": 2,
  *         "room_name": "Topaz",
  *         "during": "[\"2000-01-02 09:00:00\",\"2000-01-02 10:00:00\")"
  *       }
  *     ],
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *
  * ```
  */
  rangeGt(n, r) {
    return this.url.searchParams.append(n, `sr.${r}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where every element in
  * `column` is either contained in `range` or greater than any element in
  * `range`.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @exampleDescription With `select()`
  * Postgres supports a number of [range
  * types](https://www.postgresql.org/docs/current/rangetypes.html). You
  * can filter on range columns using the string representation of range
  * values.
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('reservations')
  *   .select()
  *   .rangeGte('during', '[2000-01-02 08:30, 2000-01-02 09:30)')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   reservations (
  *     id int8 primary key,
  *     room_name text,
  *     during tsrange
  *   );
  *
  * insert into
  *   reservations (id, room_name, during)
  * values
  *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
  *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  *   {
  *     "data": [
  *       {
  *         "id": 2,
  *         "room_name": "Topaz",
  *         "during": "[\"2000-01-02 09:00:00\",\"2000-01-02 10:00:00\")"
  *       }
  *     ],
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *
  * ```
  */
  rangeGte(n, r) {
    return this.url.searchParams.append(n, `nxl.${r}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where every element in
  * `column` is less than any element in `range`.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @exampleDescription With `select()`
  * Postgres supports a number of [range
  * types](https://www.postgresql.org/docs/current/rangetypes.html). You
  * can filter on range columns using the string representation of range
  * values.
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('reservations')
  *   .select()
  *   .rangeLt('during', '[2000-01-01 15:00, 2000-01-01 16:00)')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   reservations (
  *     id int8 primary key,
  *     room_name text,
  *     during tsrange
  *   );
  *
  * insert into
  *   reservations (id, room_name, during)
  * values
  *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
  *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "room_name": "Emerald",
  *       "during": "[\"2000-01-01 13:00:00\",\"2000-01-01 15:00:00\")"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  rangeLt(n, r) {
    return this.url.searchParams.append(n, `sl.${r}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where every element in
  * `column` is either contained in `range` or less than any element in
  * `range`.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @exampleDescription With `select()`
  * Postgres supports a number of [range
  * types](https://www.postgresql.org/docs/current/rangetypes.html). You
  * can filter on range columns using the string representation of range
  * values.
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('reservations')
  *   .select()
  *   .rangeLte('during', '[2000-01-01 14:00, 2000-01-01 16:00)')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   reservations (
  *     id int8 primary key,
  *     room_name text,
  *     during tsrange
  *   );
  *
  * insert into
  *   reservations (id, room_name, during)
  * values
  *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
  *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  *   {
  *     "data": [
  *       {
  *         "id": 1,
  *         "room_name": "Emerald",
  *         "during": "[\"2000-01-01 13:00:00\",\"2000-01-01 15:00:00\")"
  *       }
  *     ],
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *
  * ```
  */
  rangeLte(n, r) {
    return this.url.searchParams.append(n, `nxr.${r}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where `column` is
  * mutually exclusive to `range` and there can be no element between the two
  * ranges.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @exampleDescription With `select()`
  * Postgres supports a number of [range
  * types](https://www.postgresql.org/docs/current/rangetypes.html). You
  * can filter on range columns using the string representation of range
  * values.
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('reservations')
  *   .select()
  *   .rangeAdjacent('during', '[2000-01-01 12:00, 2000-01-01 13:00)')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   reservations (
  *     id int8 primary key,
  *     room_name text,
  *     during tsrange
  *   );
  *
  * insert into
  *   reservations (id, room_name, during)
  * values
  *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
  *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "room_name": "Emerald",
  *       "during": "[\"2000-01-01 13:00:00\",\"2000-01-01 15:00:00\")"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  rangeAdjacent(n, r) {
    return this.url.searchParams.append(n, `adj.${r}`), this;
  }
  /**
  * Only relevant for array and range columns. Match only rows where
  * `column` and `value` have an element in common.
  *
  * @param column - The array or range column to filter on
  * @param value - The array or range value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example On array columns
  * ```ts
  * const { data, error } = await supabase
  *   .from('issues')
  *   .select('title')
  *   .overlaps('tags', ['is:closed', 'severity:high'])
  * ```
  *
  * @exampleSql On array columns
  * ```sql
  * create table
  *   issues (
  *     id int8 primary key,
  *     title text,
  *     tags text[]
  *   );
  *
  * insert into
  *   issues (id, title, tags)
  * values
  *   (1, 'Cache invalidation is not working', array['is:open', 'severity:high', 'priority:low']),
  *   (2, 'Use better names', array['is:open', 'severity:low', 'priority:medium']);
  * ```
  *
  * @exampleResponse On array columns
  * ```json
  * {
  *   "data": [
  *     {
  *       "title": "Cache invalidation is not working"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription On range columns
  * Postgres supports a number of [range
  * types](https://www.postgresql.org/docs/current/rangetypes.html). You
  * can filter on range columns using the string representation of range
  * values.
  *
  * @example On range columns
  * ```ts
  * const { data, error } = await supabase
  *   .from('reservations')
  *   .select()
  *   .overlaps('during', '[2000-01-01 12:45, 2000-01-01 13:15)')
  * ```
  *
  * @exampleSql On range columns
  * ```sql
  * create table
  *   reservations (
  *     id int8 primary key,
  *     room_name text,
  *     during tsrange
  *   );
  *
  * insert into
  *   reservations (id, room_name, during)
  * values
  *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
  *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
  * ```
  *
  * @exampleResponse On range columns
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "room_name": "Emerald",
  *       "during": "[\"2000-01-01 13:00:00\",\"2000-01-01 15:00:00\")"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  overlaps(n, r) {
    return typeof r == "string" ? this.url.searchParams.append(n, `ov.${r}`) : this.url.searchParams.append(n, `ov.{${r.join(",")}}`), this;
  }
  /**
  * Only relevant for text and tsvector columns. Match only rows where
  * `column` matches the query string in `query`.
  *
  * @param column - The text or tsvector column to filter on
  * @param query - The query text to match with
  * @param options - Named parameters
  * @param options.config - The text search configuration to use
  * @param options.type - Change how the `query` text is interpreted
  *
  * @category Database
  * @subcategory Using filters
  *
  * @remarks
  * - For more information, see [Postgres full text search](/docs/guides/database/full-text-search).
  *
  * @example Text search
  * ```ts
  * const result = await supabase
  *   .from("texts")
  *   .select("content")
  *   .textSearch("content", `'eggs' & 'ham'`, {
  *     config: "english",
  *   });
  * ```
  *
  * @exampleSql Text search
  * ```sql
  * create table texts (
  *   id      bigint
  *           primary key
  *           generated always as identity,
  *   content text
  * );
  *
  * insert into texts (content) values
  *     ('Four score and seven years ago'),
  *     ('The road goes ever on and on'),
  *     ('Green eggs and ham')
  * ;
  * ```
  *
  * @exampleResponse Text search
  * ```json
  * {
  *   "data": [
  *     {
  *       "content": "Green eggs and ham"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Basic normalization
  * Uses PostgreSQL's `plainto_tsquery` function.
  *
  * @example Basic normalization
  * ```ts
  * const { data, error } = await supabase
  *   .from('quotes')
  *   .select('catchphrase')
  *   .textSearch('catchphrase', `'fat' & 'cat'`, {
  *     type: 'plain',
  *     config: 'english'
  *   })
  * ```
  *
  * @exampleDescription Full normalization
  * Uses PostgreSQL's `phraseto_tsquery` function.
  *
  * @example Full normalization
  * ```ts
  * const { data, error } = await supabase
  *   .from('quotes')
  *   .select('catchphrase')
  *   .textSearch('catchphrase', `'fat' & 'cat'`, {
  *     type: 'phrase',
  *     config: 'english'
  *   })
  * ```
  *
  * @exampleDescription Websearch
  * Uses PostgreSQL's `websearch_to_tsquery` function.
  * This function will never raise syntax errors, which makes it possible to use raw user-supplied input for search, and can be used
  * with advanced operators.
  *
  * - `unquoted text`: text not inside quote marks will be converted to terms separated by & operators, as if processed by plainto_tsquery.
  * - `"quoted text"`: text inside quote marks will be converted to terms separated by `<->` operators, as if processed by phraseto_tsquery.
  * - `OR`: the word “or” will be converted to the | operator.
  * - `-`: a dash will be converted to the ! operator.
  *
  * @example Websearch
  * ```ts
  * const { data, error } = await supabase
  *   .from('quotes')
  *   .select('catchphrase')
  *   .textSearch('catchphrase', `'fat or cat'`, {
  *     type: 'websearch',
  *     config: 'english'
  *   })
  * ```
  */
  textSearch(n, r, { config: s, type: o } = {}) {
    let l = "";
    o === "plain" ? l = "pl" : o === "phrase" ? l = "ph" : o === "websearch" && (l = "w");
    const c = s === void 0 ? "" : `(${s})`;
    return this.url.searchParams.append(n, `${l}fts${c}.${r}`), this;
  }
  /**
  * Match only rows where each column in `query` keys is equal to its
  * associated value. Shorthand for multiple `.eq()`s.
  *
  * @param query - The object to filter with, with column names as keys mapped
  * to their filter values
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .match({ id: 2, name: 'Leia' })
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Leia"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  match(n) {
    return Object.entries(n).filter(([r, s]) => s !== void 0).forEach(([r, s]) => {
      this.url.searchParams.append(r, `eq.${s}`);
    }), this;
  }
  /**
  * Match only rows which doesn't satisfy the filter.
  *
  * Unlike most filters, `opearator` and `value` are used as-is and need to
  * follow [PostgREST
  * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
  * to make sure they are properly sanitized.
  *
  * @param column - The column to filter on
  * @param operator - The operator to be negated to filter with, following
  * PostgREST syntax
  * @param value - The value to filter with, following PostgREST syntax
  *
  * @category Database
  * @subcategory Using filters
  *
  * @remarks
  * not() expects you to use the raw PostgREST syntax for the filter values.
  *
  * ```ts
  * .not('id', 'in', '(5,6,7)')  // Use `()` for `in` filter
  * .not('arraycol', 'cs', '{"a","b"}')  // Use `cs` for `contains()`, `{}` for array values
  * ```
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('countries')
  *   .select()
  *   .not('name', 'is', null)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'null'),
  *   (2, null);
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  *   {
  *     "data": [
  *       {
  *         "id": 1,
  *         "name": "null"
  *       }
  *     ],
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *
  * ```
  */
  not(n, r, s) {
    return this.url.searchParams.append(n, `not.${r}.${s}`), this;
  }
  /**
  * Match only rows which satisfy at least one of the filters.
  *
  * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
  * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
  * to make sure it's properly sanitized.
  *
  * It's currently not possible to do an `.or()` filter across multiple tables.
  *
  * @param filters - The filters to use, following PostgREST syntax
  * @param options - Named parameters
  * @param options.referencedTable - Set this to filter on referenced tables
  * instead of the parent table
  * @param options.foreignTable - Deprecated, use `referencedTable` instead
  *
  * @category Database
  * @subcategory Using filters
  *
  * @remarks
  * or() expects you to use the raw PostgREST syntax for the filter names and values.
  *
  * ```ts
  * .or('id.in.(5,6,7), arraycol.cs.{"a","b"}')  // Use `()` for `in` filter, `{}` for array values and `cs` for `contains()`.
  * .or('id.in.(5,6,7), arraycol.cd.{"a","b"}')  // Use `cd` for `containedBy()`
  * ```
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .or('id.eq.2,name.eq.Han')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Leia"
  *     },
  *     {
  *       "name": "Han"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Use `or` with `and`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .or('id.gt.3,and(id.eq.1,name.eq.Luke)')
  * ```
  *
  * @exampleSql Use `or` with `and`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse Use `or` with `and`
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Luke"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Use `or` on referenced tables
  * ```ts
  * const { data, error } = await supabase
  *   .from('orchestral_sections')
  *   .select(`
  *     name,
  *     instruments!inner (
  *       name
  *     )
  *   `)
  *   .or('section_id.eq.1,name.eq.guzheng', { referencedTable: 'instruments' })
  * ```
  *
  * @exampleSql Use `or` on referenced tables
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 2, 'flute'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse Use `or` on referenced tables
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "strings",
  *       "instruments": [
  *         {
  *           "name": "violin"
  *         }
  *       ]
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  or(n, { foreignTable: r, referencedTable: s = r } = {}) {
    const o = s ? `${s}.or` : "or";
    return this.url.searchParams.append(o, `(${n})`), this;
  }
  /**
  * Match only rows which satisfy the filter. This is an escape hatch - you
  * should use the specific filter methods wherever possible.
  *
  * Unlike most filters, `opearator` and `value` are used as-is and need to
  * follow [PostgREST
  * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
  * to make sure they are properly sanitized.
  *
  * @param column - The column to filter on
  * @param operator - The operator to filter with, following PostgREST syntax
  * @param value - The value to filter with, following PostgREST syntax
  *
  * @category Database
  * @subcategory Using filters
  *
  * @remarks
  * filter() expects you to use the raw PostgREST syntax for the filter values.
  *
  * ```ts
  * .filter('id', 'in', '(5,6,7)')  // Use `()` for `in` filter
  * .filter('arraycol', 'cs', '{"a","b"}')  // Use `cs` for `contains()`, `{}` for array values
  * ```
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .filter('name', 'in', '("Han","Yoda")')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 3,
  *       "name": "Han"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example On a referenced table
  * ```ts
  * const { data, error } = await supabase
  *   .from('orchestral_sections')
  *   .select(`
  *     name,
  *     instruments!inner (
  *       name
  *     )
  *   `)
  *   .filter('instruments.name', 'eq', 'flute')
  * ```
  *
  * @exampleSql On a referenced table
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *    instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 2, 'flute'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse On a referenced table
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "woodwinds",
  *       "instruments": [
  *         {
  *           "name": "flute"
  *         }
  *       ]
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  filter(n, r, s) {
    return this.url.searchParams.append(n, `${r}.${s}`), this;
  }
}, tm = class {
  /**
  * Creates a query builder scoped to a Postgres table or view.
  *
  * @category Database
  *
  * @param url - The URL for the query
  * @param options - Named parameters
  * @param options.headers - Custom headers
  * @param options.schema - Postgres schema to use
  * @param options.fetch - Custom fetch implementation
  * @param options.urlLengthLimit - Maximum URL length before warning
  * @param options.retry - Enable automatic retries for transient errors (default: true)
  *
  * @example Using supabase-js (recommended)
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const { data, error } = await supabase.from('users').select('*')
  * ```
  *
  * @example Standalone import for bundle-sensitive environments
  * ```ts
  * import { PostgrestQueryBuilder } from '@supabase/postgrest-js'
  *
  * const query = new PostgrestQueryBuilder(
  *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
  *   { headers: { apikey: 'your-publishable-key' }, retry: true }
  * )
  * ```
  */
  constructor(n, { headers: r = {}, schema: s, fetch: o, urlLengthLimit: l = 8e3, retry: c }) {
    this.url = n, this.headers = new Headers(r), this.schema = s, this.fetch = o, this.urlLengthLimit = l, this.retry = c;
  }
  /**
  * Clone URL and headers to prevent shared state between operations.
  */
  cloneRequestState() {
    return {
      url: new URL(this.url.toString()),
      headers: new Headers(this.headers)
    };
  }
  /**
  * Perform a SELECT query on the table or view.
  *
  * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
  *
  * @param options - Named parameters
  *
  * @param options.head - When set to `true`, `data` will not be returned.
  * Useful if you only need the count.
  *
  * @param options.count - Count algorithm to use to count rows in the table or view.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @remarks
  * When using `count` with `.range()` or `.limit()`, the returned `count` is the total number of rows
  * that match your filters, not the number of rows in the current page. Use this to build pagination UI.
  
  * - By default, Supabase projects return a maximum of 1,000 rows. This setting can be changed in your project's [API settings](/dashboard/project/_/settings/api). It's recommended that you keep it low to limit the payload size of accidental or malicious requests. You can use `range()` queries to paginate through your data.
  * - `select()` can be combined with [Filters](/docs/reference/javascript/using-filters)
  * - `select()` can be combined with [Modifiers](/docs/reference/javascript/using-modifiers)
  * - `apikey` is a reserved keyword if you're using the [Supabase Platform](/docs/guides/platform) and [should be avoided as a column name](https://github.com/supabase/supabase/issues/5465). *
  * @category Database
  *
  * @example Getting your data
  * ```js
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  * ```
  *
  * @exampleSql Getting your data
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Harry'),
  *   (2, 'Frodo'),
  *   (3, 'Katniss');
  * ```
  *
  * @exampleResponse Getting your data
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Harry"
  *     },
  *     {
  *       "id": 2,
  *       "name": "Frodo"
  *     },
  *     {
  *       "id": 3,
  *       "name": "Katniss"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Selecting specific columns
  * ```js
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  * ```
  *
  * @exampleSql Selecting specific columns
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Frodo'),
  *   (2, 'Harry'),
  *   (3, 'Katniss');
  * ```
  *
  * @exampleResponse Selecting specific columns
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Frodo"
  *     },
  *     {
  *       "name": "Harry"
  *     },
  *     {
  *       "name": "Katniss"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Query referenced tables
  * If your database has foreign key relationships, you can query related tables too.
  *
  * @example Query referenced tables
  * ```js
  * const { data, error } = await supabase
  *   .from('orchestral_sections')
  *   .select(`
  *     name,
  *     instruments (
  *       name
  *     )
  *   `)
  * ```
  *
  * @exampleSql Query referenced tables
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 2, 'flute'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse Query referenced tables
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "strings",
  *       "instruments": [
  *         {
  *           "name": "violin"
  *         }
  *       ]
  *     },
  *     {
  *       "name": "woodwinds",
  *       "instruments": [
  *         {
  *           "name": "flute"
  *         }
  *       ]
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Query referenced tables with spaces in their names
  * If your table name contains spaces, you must use double quotes in the `select` statement to reference the table.
  *
  * @example Query referenced tables with spaces in their names
  * ```js
  * const { data, error } = await supabase
  *   .from('orchestral sections')
  *   .select(`
  *     name,
  *     "musical instruments" (
  *       name
  *     )
  *   `)
  * ```
  *
  * @exampleSql Query referenced tables with spaces in their names
  * ```sql
  * create table
  *   "orchestral sections" (id int8 primary key, name text);
  * create table
  *   "musical instruments" (
  *     id int8 primary key,
  *     section_id int8 not null references "orchestral sections",
  *     name text
  *   );
  *
  * insert into
  *   "orchestral sections" (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   "musical instruments" (id, section_id, name)
  * values
  *   (1, 2, 'flute'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse Query referenced tables with spaces in their names
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "strings",
  *       "musical instruments": [
  *         {
  *           "name": "violin"
  *         }
  *       ]
  *     },
  *     {
  *       "name": "woodwinds",
  *       "musical instruments": [
  *         {
  *           "name": "flute"
  *         }
  *       ]
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Query referenced tables through a join table
  * If you're in a situation where your tables are **NOT** directly
  * related, but instead are joined by a _join table_, you can still use
  * the `select()` method to query the related data. The join table needs
  * to have the foreign keys as part of its composite primary key.
  *
  * @example Query referenced tables through a join table
  * ```ts
  * const { data, error } = await supabase
  *   .from('users')
  *   .select(`
  *     name,
  *     teams (
  *       name
  *     )
  *   `)
  *   
  * ```
  *
  * @exampleSql Query referenced tables through a join table
  * ```sql
  * create table
  *   users (
  *     id int8 primary key,
  *     name text
  *   );
  * create table
  *   teams (
  *     id int8 primary key,
  *     name text
  *   );
  * -- join table
  * create table
  *   users_teams (
  *     user_id int8 not null references users,
  *     team_id int8 not null references teams,
  *     -- both foreign keys must be part of a composite primary key
  *     primary key (user_id, team_id)
  *   );
  *
  * insert into
  *   users (id, name)
  * values
  *   (1, 'Kiran'),
  *   (2, 'Evan');
  * insert into
  *   teams (id, name)
  * values
  *   (1, 'Green'),
  *   (2, 'Blue');
  * insert into
  *   users_teams (user_id, team_id)
  * values
  *   (1, 1),
  *   (1, 2),
  *   (2, 2);
  * ```
  *
  * @exampleResponse Query referenced tables through a join table
  * ```json
  *   {
  *     "data": [
  *       {
  *         "name": "Kiran",
  *         "teams": [
  *           {
  *             "name": "Green"
  *           },
  *           {
  *             "name": "Blue"
  *           }
  *         ]
  *       },
  *       {
  *         "name": "Evan",
  *         "teams": [
  *           {
  *             "name": "Blue"
  *           }
  *         ]
  *       }
  *     ],
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *   
  * ```
  *
  * @exampleDescription Query the same referenced table multiple times
  * If you need to query the same referenced table twice, use the name of the
  * joined column to identify which join to use. You can also give each
  * column an alias.
  *
  * @example Query the same referenced table multiple times
  * ```ts
  * const { data, error } = await supabase
  *   .from('messages')
  *   .select(`
  *     content,
  *     from:sender_id(name),
  *     to:receiver_id(name)
  *   `)
  *
  * // To infer types, use the name of the table (in this case `users`) and
  * // the name of the foreign key constraint.
  * const { data, error } = await supabase
  *   .from('messages')
  *   .select(`
  *     content,
  *     from:users!messages_sender_id_fkey(name),
  *     to:users!messages_receiver_id_fkey(name)
  *   `)
  * ```
  *
  * @exampleSql Query the same referenced table multiple times
  * ```sql
  *  create table
  *  users (id int8 primary key, name text);
  *
  *  create table
  *    messages (
  *      sender_id int8 not null references users,
  *      receiver_id int8 not null references users,
  *      content text
  *    );
  *
  *  insert into
  *    users (id, name)
  *  values
  *    (1, 'Kiran'),
  *    (2, 'Evan');
  *
  *  insert into
  *    messages (sender_id, receiver_id, content)
  *  values
  *    (1, 2, '👋');
  *  ```
  * ```
  *
  * @exampleResponse Query the same referenced table multiple times
  * ```json
  * {
  *   "data": [
  *     {
  *       "content": "👋",
  *       "from": {
  *         "name": "Kiran"
  *       },
  *       "to": {
  *         "name": "Evan"
  *       }
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Query nested foreign tables through a join table
  * You can use the result of a joined table to gather data in
  * another foreign table. With multiple references to the same foreign
  * table you must specify the column on which to conduct the join.
  *
  * @example Query nested foreign tables through a join table
  * ```ts
  *   const { data, error } = await supabase
  *     .from('games')
  *     .select(`
  *       game_id:id,
  *       away_team:teams!games_away_team_fkey (
  *         users (
  *           id,
  *           name
  *         )
  *       )
  *     `)
  *   
  * ```
  *
  * @exampleSql Query nested foreign tables through a join table
  * ```sql
  * ```sql
  * create table
  *   users (
  *     id int8 primary key,
  *     name text
  *   );
  * create table
  *   teams (
  *     id int8 primary key,
  *     name text
  *   );
  * -- join table
  * create table
  *   users_teams (
  *     user_id int8 not null references users,
  *     team_id int8 not null references teams,
  *
  *     primary key (user_id, team_id)
  *   );
  * create table
  *   games (
  *     id int8 primary key,
  *     home_team int8 not null references teams,
  *     away_team int8 not null references teams,
  *     name text
  *   );
  *
  * insert into users (id, name)
  * values
  *   (1, 'Kiran'),
  *   (2, 'Evan');
  * insert into
  *   teams (id, name)
  * values
  *   (1, 'Green'),
  *   (2, 'Blue');
  * insert into
  *   users_teams (user_id, team_id)
  * values
  *   (1, 1),
  *   (1, 2),
  *   (2, 2);
  * insert into
  *   games (id, home_team, away_team, name)
  * values
  *   (1, 1, 2, 'Green vs Blue'),
  *   (2, 2, 1, 'Blue vs Green');
  * ```
  *
  * @exampleResponse Query nested foreign tables through a join table
  * ```json
  *   {
  *     "data": [
  *       {
  *         "game_id": 1,
  *         "away_team": {
  *           "users": [
  *             {
  *               "id": 1,
  *               "name": "Kiran"
  *             },
  *             {
  *               "id": 2,
  *               "name": "Evan"
  *             }
  *           ]
  *         }
  *       },
  *       {
  *         "game_id": 2,
  *         "away_team": {
  *           "users": [
  *             {
  *               "id": 1,
  *               "name": "Kiran"
  *             }
  *           ]
  *         }
  *       }
  *     ],
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *   
  * ```
  *
  * @exampleDescription Filtering through referenced tables
  * If the filter on a referenced table's column is not satisfied, the referenced
  * table returns `[]` or `null` but the parent table is not filtered out.
  * If you want to filter out the parent table rows, use the `!inner` hint
  *
  * @example Filtering through referenced tables
  * ```ts
  * const { data, error } = await supabase
  *   .from('instruments')
  *   .select('name, orchestral_sections(*)')
  *   .eq('orchestral_sections.name', 'percussion')
  * ```
  *
  * @exampleSql Filtering through referenced tables
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 2, 'flute'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse Filtering through referenced tables
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "flute",
  *       "orchestral_sections": null
  *     },
  *     {
  *       "name": "violin",
  *       "orchestral_sections": null
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Querying referenced table with count
  * You can get the number of rows in a related table by using the
  * **count** property.
  *
  * @example Querying referenced table with count
  * ```ts
  * const { data, error } = await supabase
  *   .from('orchestral_sections')
  *   .select(`*, instruments(count)`)
  * ```
  *
  * @exampleSql Querying referenced table with count
  * ```sql
  * create table orchestral_sections (
  *   "id" "uuid" primary key default "extensions"."uuid_generate_v4"() not null,
  *   "name" text
  * );
  *
  * create table characters (
  *   "id" "uuid" primary key default "extensions"."uuid_generate_v4"() not null,
  *   "name" text,
  *   "section_id" "uuid" references public.orchestral_sections on delete cascade
  * );
  *
  * with section as (
  *   insert into orchestral_sections (name)
  *   values ('strings') returning id
  * )
  * insert into instruments (name, section_id) values
  * ('violin', (select id from section)),
  * ('viola', (select id from section)),
  * ('cello', (select id from section)),
  * ('double bass', (select id from section));
  * ```
  *
  * @exampleResponse Querying referenced table with count
  * ```json
  * [
  *   {
  *     "id": "693694e7-d993-4360-a6d7-6294e325d9b6",
  *     "name": "strings",
  *     "instruments": [
  *       {
  *         "count": 4
  *       }
  *     ]
  *   }
  * ]
  * ```
  *
  * @exampleDescription Querying with count option
  * You can get the number of rows by using the
  * [count](/docs/reference/javascript/select#parameters) option.
  *
  * @example Querying with count option
  * ```ts
  * const { count, error } = await supabase
  *   .from('characters')
  *   .select('*', { count: 'exact', head: true })
  * ```
  *
  * @exampleSql Querying with count option
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse Querying with count option
  * ```json
  * {
  *   "count": 3,
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Querying JSON data
  * You can select and filter data inside of
  * [JSON](/docs/guides/database/json) columns. Postgres offers some
  * [operators](/docs/guides/database/json#query-the-jsonb-data) for
  * querying JSON data.
  *
  * @example Querying JSON data
  * ```ts
  * const { data, error } = await supabase
  *   .from('users')
  *   .select(`
  *     id, name,
  *     address->city
  *   `)
  * ```
  *
  * @exampleSql Querying JSON data
  * ```sql
  * create table
  *   users (
  *     id int8 primary key,
  *     name text,
  *     address jsonb
  *   );
  *
  * insert into
  *   users (id, name, address)
  * values
  *   (1, 'Frodo', '{"city":"Hobbiton"}');
  * ```
  *
  * @exampleResponse Querying JSON data
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Frodo",
  *       "city": "Hobbiton"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Querying referenced table with inner join
  * If you don't want to return the referenced table contents, you can leave the parenthesis empty.
  * Like `.select('name, orchestral_sections!inner()')`.
  *
  * @example Querying referenced table with inner join
  * ```ts
  * const { data, error } = await supabase
  *   .from('instruments')
  *   .select('name, orchestral_sections!inner(name)')
  *   .eq('orchestral_sections.name', 'woodwinds')
  *   .limit(1)
  * ```
  *
  * @exampleSql Querying referenced table with inner join
  * ```sql
  * create table orchestral_sections (
  *   "id" "uuid" primary key default "extensions"."uuid_generate_v4"() not null,
  *   "name" text
  * );
  *
  * create table instruments (
  *   "id" "uuid" primary key default "extensions"."uuid_generate_v4"() not null,
  *   "name" text,
  *   "section_id" "uuid" references public.orchestral_sections on delete cascade
  * );
  *
  * with section as (
  *   insert into orchestral_sections (name)
  *   values ('woodwinds') returning id
  * )
  * insert into instruments (name, section_id) values
  * ('flute', (select id from section)),
  * ('clarinet', (select id from section)),
  * ('bassoon', (select id from section)),
  * ('piccolo', (select id from section));
  * ```
  *
  * @exampleResponse Querying referenced table with inner join
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "flute",
  *       "orchestral_sections": {"name": "woodwinds"}
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Switching schemas per query
  * In addition to setting the schema during initialization, you can also switch schemas on a per-query basis.
  * Make sure you've set up your [database privileges and API settings](/docs/guides/api/using-custom-schemas).
  *
  * @example Switching schemas per query
  * ```ts
  * const { data, error } = await supabase
  *   .schema('myschema')
  *   .from('mytable')
  *   .select()
  * ```
  *
  * @exampleSql Switching schemas per query
  * ```sql
  * create schema myschema;
  *
  * create table myschema.mytable (
  *   id uuid primary key default gen_random_uuid(),
  *   data text
  * );
  *
  * insert into myschema.mytable (data) values ('mydata');
  * ```
  *
  * @exampleResponse Switching schemas per query
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": "4162e008-27b0-4c0f-82dc-ccaeee9a624d",
  *       "data": "mydata"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  select(n, r) {
    const { head: s = !1, count: o } = r ?? {}, l = s ? "HEAD" : "GET";
    let c = !1;
    const d = (n ?? "*").split("").map((g) => /\s/.test(g) && !c ? "" : (g === '"' && (c = !c), g)).join(""), { url: f, headers: p } = this.cloneRequestState();
    return f.searchParams.set("select", d), o && p.append("Prefer", `count=${o}`), new gn({
      method: l,
      url: f,
      headers: p,
      schema: this.schema,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Perform an INSERT into the table or view.
  *
  * By default, inserted rows are not returned. To return it, chain the call
  * with `.select()`.
  *
  * @param values - The values to insert. Pass an object to insert a single row
  * or an array to insert multiple rows.
  *
  * @param options - Named parameters
  *
  * @param options.count - Count algorithm to use to count inserted rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @param options.defaultToNull - Make missing fields default to `null`.
  * Otherwise, use the default value for the column. Only applies for bulk
  * inserts.
  *
  * @category Database
  *
  * @example Create a record
  * ```ts
  * const { error } = await supabase
  *   .from('countries')
  *   .insert({ id: 1, name: 'Mordor' })
  * ```
  *
  * @exampleSql Create a record
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  * ```
  *
  * @exampleResponse Create a record
  * ```json
  * {
  *   "status": 201,
  *   "statusText": "Created"
  * }
  * ```
  *
  * @example Create a record and return it
  * ```ts
  * const { data, error } = await supabase
  *   .from('countries')
  *   .insert({ id: 1, name: 'Mordor' })
  *   .select()
  * ```
  *
  * @exampleSql Create a record and return it
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  * ```
  *
  * @exampleResponse Create a record and return it
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Mordor"
  *     }
  *   ],
  *   "status": 201,
  *   "statusText": "Created"
  * }
  * ```
  *
  * @exampleDescription Bulk create
  * A bulk create operation is handled in a single transaction.
  * If any of the inserts fail, none of the rows are inserted.
  *
  * @example Bulk create
  * ```ts
  * const { error } = await supabase
  *   .from('countries')
  *   .insert([
  *     { id: 1, name: 'Mordor' },
  *     { id: 1, name: 'The Shire' },
  *   ])
  * ```
  *
  * @exampleSql Bulk create
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  * ```
  *
  * @exampleResponse Bulk create
  * ```json
  * {
  *   "error": {
  *     "code": "23505",
  *     "details": "Key (id)=(1) already exists.",
  *     "hint": null,
  *     "message": "duplicate key value violates unique constraint \"countries_pkey\""
  *   },
  *   "status": 409,
  *   "statusText": "Conflict"
  * }
  * ```
  */
  insert(n, { count: r, defaultToNull: s = !0 } = {}) {
    var o;
    const l = "POST", { url: c, headers: d } = this.cloneRequestState();
    if (r && d.append("Prefer", `count=${r}`), s || d.append("Prefer", "missing=default"), Array.isArray(n)) {
      const f = n.reduce((p, g) => p.concat(Object.keys(g)), []);
      if (f.length > 0) {
        const p = [...new Set(f)].map((g) => `"${g}"`);
        c.searchParams.set("columns", p.join(","));
      }
    }
    return new gn({
      method: l,
      url: c,
      headers: d,
      schema: this.schema,
      body: n,
      fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Perform an UPSERT on the table or view. Depending on the column(s) passed
  * to `onConflict`, `.upsert()` allows you to perform the equivalent of
  * `.insert()` if a row with the corresponding `onConflict` columns doesn't
  * exist, or if it does exist, perform an alternative action depending on
  * `ignoreDuplicates`.
  *
  * By default, upserted rows are not returned. To return it, chain the call
  * with `.select()`.
  *
  * @param values - The values to upsert with. Pass an object to upsert a
  * single row or an array to upsert multiple rows.
  *
  * @param options - Named parameters
  *
  * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
  * duplicate rows are determined. Two rows are duplicates if all the
  * `onConflict` columns are equal.
  *
  * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
  * `false`, duplicate rows are merged with existing rows.
  *
  * @param options.count - Count algorithm to use to count upserted rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @param options.defaultToNull - Make missing fields default to `null`.
  * Otherwise, use the default value for the column. This only applies when
  * inserting new rows, not when merging with existing rows under
  * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
  *
  * @example Upsert a single row using a unique key
  * ```ts
  * // Upserting a single row, overwriting based on the 'username' unique column
  * const { data, error } = await supabase
  *   .from('users')
  *   .upsert({ username: 'supabot' }, { onConflict: 'username' })
  *
  * // Example response:
  * // {
  * //   data: [
  * //     { id: 4, message: 'bar', username: 'supabot' }
  * //   ],
  * //   error: null
  * // }
  * ```
  *
  * @example Upsert with conflict resolution and exact row counting
  * ```ts
  * // Upserting and returning exact count
  * const { data, error, count } = await supabase
  *   .from('users')
  *   .upsert(
  *     {
  *       id: 3,
  *       message: 'foo',
  *       username: 'supabot'
  *     },
  *     {
  *       onConflict: 'username',
  *       count: 'exact'
  *     }
  *   )
  *
  * // Example response:
  * // {
  * //   data: [
  * //     {
  * //       id: 42,
  * //       handle: "saoirse",
  * //       display_name: "Saoirse"
  * //     }
  * //   ],
  * //   count: 1,
  * //   error: null
  * // }
  * ```
  *
  * @category Database
  *
  * @remarks
  * - Primary keys must be included in `values` to use upsert.
  *
  * @example Upsert your data
  * ```ts
  * const { data, error } = await supabase
  *   .from('instruments')
  *   .upsert({ id: 1, name: 'piano' })
  *   .select()
  * ```
  *
  * @exampleSql Upsert your data
  * ```sql
  * create table
  *   instruments (id int8 primary key, name text);
  *
  * insert into
  *   instruments (id, name)
  * values
  *   (1, 'harpsichord');
  * ```
  *
  * @exampleResponse Upsert your data
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "piano"
  *     }
  *   ],
  *   "status": 201,
  *   "statusText": "Created"
  * }
  * ```
  *
  * @example Bulk Upsert your data
  * ```ts
  * const { data, error } = await supabase
  *   .from('instruments')
  *   .upsert([
  *     { id: 1, name: 'piano' },
  *     { id: 2, name: 'harp' },
  *   ])
  *   .select()
  * ```
  *
  * @exampleSql Bulk Upsert your data
  * ```sql
  * create table
  *   instruments (id int8 primary key, name text);
  *
  * insert into
  *   instruments (id, name)
  * values
  *   (1, 'harpsichord');
  * ```
  *
  * @exampleResponse Bulk Upsert your data
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "piano"
  *     },
  *     {
  *       "id": 2,
  *       "name": "harp"
  *     }
  *   ],
  *   "status": 201,
  *   "statusText": "Created"
  * }
  * ```
  *
  * @exampleDescription Upserting into tables with constraints
  * In the following query, `upsert()` implicitly uses the `id`
  * (primary key) column to determine conflicts. If there is no existing
  * row with the same `id`, `upsert()` inserts a new row, which
  * will fail in this case as there is already a row with `handle` `"saoirse"`.
  * Using the `onConflict` option, you can instruct `upsert()` to use
  * another column with a unique constraint to determine conflicts.
  *
  * @example Upserting into tables with constraints
  * ```ts
  * const { data, error } = await supabase
  *   .from('users')
  *   .upsert({ id: 42, handle: 'saoirse', display_name: 'Saoirse' })
  *   .select()
  * ```
  *
  * @exampleSql Upserting into tables with constraints
  * ```sql
  * create table
  *   users (
  *     id int8 generated by default as identity primary key,
  *     handle text not null unique,
  *     display_name text
  *   );
  *
  * insert into
  *   users (id, handle, display_name)
  * values
  *   (1, 'saoirse', null);
  * ```
  *
  * @exampleResponse Upserting into tables with constraints
  * ```json
  * {
  *   "error": {
  *     "code": "23505",
  *     "details": "Key (handle)=(saoirse) already exists.",
  *     "hint": null,
  *     "message": "duplicate key value violates unique constraint \"users_handle_key\""
  *   },
  *   "status": 409,
  *   "statusText": "Conflict"
  * }
  * ```
  */
  upsert(n, { onConflict: r, ignoreDuplicates: s = !1, count: o, defaultToNull: l = !0 } = {}) {
    var c;
    const d = "POST", { url: f, headers: p } = this.cloneRequestState();
    if (p.append("Prefer", `resolution=${s ? "ignore" : "merge"}-duplicates`), r !== void 0 && f.searchParams.set("on_conflict", r), o && p.append("Prefer", `count=${o}`), l || p.append("Prefer", "missing=default"), Array.isArray(n)) {
      const g = n.reduce((v, _) => v.concat(Object.keys(_)), []);
      if (g.length > 0) {
        const v = [...new Set(g)].map((_) => `"${_}"`);
        f.searchParams.set("columns", v.join(","));
      }
    }
    return new gn({
      method: d,
      url: f,
      headers: p,
      schema: this.schema,
      body: n,
      fetch: (c = this.fetch) !== null && c !== void 0 ? c : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Perform an UPDATE on the table or view.
  *
  * By default, updated rows are not returned. To return it, chain the call
  * with `.select()` after filters.
  *
  * @param values - The values to update with
  *
  * @param options - Named parameters
  *
  * @param options.count - Count algorithm to use to count updated rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @category Database
  *
  * @remarks
  * - `update()` should always be combined with [Filters](/docs/reference/javascript/using-filters) to target the item(s) you wish to update.
  *
  * @example Updating your data
  * ```ts
  * const { error } = await supabase
  *   .from('instruments')
  *   .update({ name: 'piano' })
  *   .eq('id', 1)
  * ```
  *
  * @exampleSql Updating your data
  * ```sql
  * create table
  *   instruments (id int8 primary key, name text);
  *
  * insert into
  *   instruments (id, name)
  * values
  *   (1, 'harpsichord');
  * ```
  *
  * @exampleResponse Updating your data
  * ```json
  * {
  *   "status": 204,
  *   "statusText": "No Content"
  * }
  * ```
  *
  * @example Update a record and return it
  * ```ts
  * const { data, error } = await supabase
  *   .from('instruments')
  *   .update({ name: 'piano' })
  *   .eq('id', 1)
  *   .select()
  * ```
  *
  * @exampleSql Update a record and return it
  * ```sql
  * create table
  *   instruments (id int8 primary key, name text);
  *
  * insert into
  *   instruments (id, name)
  * values
  *   (1, 'harpsichord');
  * ```
  *
  * @exampleResponse Update a record and return it
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "piano"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Updating JSON data
  * Postgres offers some
  * [operators](/docs/guides/database/json#query-the-jsonb-data) for
  * working with JSON data. Currently, it is only possible to update the entire JSON document.
  *
  * @example Updating JSON data
  * ```ts
  * const { data, error } = await supabase
  *   .from('users')
  *   .update({
  *     address: {
  *       street: 'Melrose Place',
  *       postcode: 90210
  *     }
  *   })
  *   .eq('address->postcode', 90210)
  *   .select()
  * ```
  *
  * @exampleSql Updating JSON data
  * ```sql
  * create table
  *   users (
  *     id int8 primary key,
  *     name text,
  *     address jsonb
  *   );
  *
  * insert into
  *   users (id, name, address)
  * values
  *   (1, 'Michael', '{ "postcode": 90210 }');
  * ```
  *
  * @exampleResponse Updating JSON data
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Michael",
  *       "address": {
  *         "street": "Melrose Place",
  *         "postcode": 90210
  *       }
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  update(n, { count: r } = {}) {
    var s;
    const o = "PATCH", { url: l, headers: c } = this.cloneRequestState();
    return r && c.append("Prefer", `count=${r}`), new gn({
      method: o,
      url: l,
      headers: c,
      schema: this.schema,
      body: n,
      fetch: (s = this.fetch) !== null && s !== void 0 ? s : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Perform a DELETE on the table or view.
  *
  * By default, deleted rows are not returned. To return it, chain the call
  * with `.select()` after filters.
  *
  * @param options - Named parameters
  *
  * @param options.count - Count algorithm to use to count deleted rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @category Database
  *
  * @remarks
  * - `delete()` should always be combined with [filters](/docs/reference/javascript/using-filters) to target the item(s) you wish to delete.
  * - If you use `delete()` with filters and you have
  *   [RLS](/docs/learn/auth-deep-dive/auth-row-level-security) enabled, only
  *   rows visible through `SELECT` policies are deleted. Note that by default
  *   no rows are visible, so you need at least one `SELECT`/`ALL` policy that
  *   makes the rows visible.
  * - When using `delete().in()`, specify an array of values to target multiple rows with a single query. This is particularly useful for batch deleting entries that share common criteria, such as deleting users by their IDs. Ensure that the array you provide accurately represents all records you intend to delete to avoid unintended data removal.
  *
  * @example Delete a single record
  * ```ts
  * const response = await supabase
  *   .from('countries')
  *   .delete()
  *   .eq('id', 1)
  * ```
  *
  * @exampleSql Delete a single record
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'Mordor');
  * ```
  *
  * @exampleResponse Delete a single record
  * ```json
  * {
  *   "status": 204,
  *   "statusText": "No Content"
  * }
  * ```
  *
  * @example Delete a record and return it
  * ```ts
  * const { data, error } = await supabase
  *   .from('countries')
  *   .delete()
  *   .eq('id', 1)
  *   .select()
  * ```
  *
  * @exampleSql Delete a record and return it
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'Mordor');
  * ```
  *
  * @exampleResponse Delete a record and return it
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Mordor"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Delete multiple records
  * ```ts
  * const response = await supabase
  *   .from('countries')
  *   .delete()
  *   .in('id', [1, 2, 3])
  * ```
  *
  * @exampleSql Delete multiple records
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'Rohan'), (2, 'The Shire'), (3, 'Mordor');
  * ```
  *
  * @exampleResponse Delete multiple records
  * ```json
  * {
  *   "status": 204,
  *   "statusText": "No Content"
  * }
  * ```
  */
  delete({ count: n } = {}) {
    var r;
    const s = "DELETE", { url: o, headers: l } = this.cloneRequestState();
    return n && l.append("Prefer", `count=${n}`), new gn({
      method: s,
      url: o,
      headers: l,
      schema: this.schema,
      fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
};
function vs(n) {
  "@babel/helpers - typeof";
  return vs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, vs(n);
}
function rm(n, r) {
  if (vs(n) != "object" || !n) return n;
  var s = n[Symbol.toPrimitive];
  if (s !== void 0) {
    var o = s.call(n, r);
    if (vs(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(n);
}
function nm(n) {
  var r = rm(n, "string");
  return vs(r) == "symbol" ? r : r + "";
}
function sm(n, r, s) {
  return (r = nm(r)) in n ? Object.defineProperty(n, r, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[r] = s, n;
}
function Pd(n, r) {
  var s = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    r && (o = o.filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    })), s.push.apply(s, o);
  }
  return s;
}
function Li(n) {
  for (var r = 1; r < arguments.length; r++) {
    var s = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Pd(Object(s), !0).forEach(function(o) {
      sm(n, o, s[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : Pd(Object(s)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(s, o));
    });
  }
  return n;
}
var im = class ph {
  /**
  * Creates a PostgREST client.
  *
  * @param url - URL of the PostgREST endpoint
  * @param options - Named parameters
  * @param options.headers - Custom headers
  * @param options.schema - Postgres schema to switch to
  * @param options.fetch - Custom fetch
  * @param options.timeout - Optional timeout in milliseconds for all requests. When set, requests will automatically abort after this duration to prevent indefinite hangs.
  * @param options.urlLengthLimit - Maximum URL length in characters before warnings/errors are triggered. Defaults to 8000.
  * @param options.retry - Enable or disable automatic retries for transient errors.
  *   When enabled, idempotent requests (GET, HEAD, OPTIONS) that fail with network
  *   errors or HTTP 503/520 responses will be automatically retried up to 3 times
  *   with exponential backoff (1s, 2s, 4s). Defaults to `true`.
  * @example Using supabase-js (recommended)
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const { data, error } = await supabase.from('profiles').select('*')
  * ```
  *
  * @category Database
  *
  * @remarks
  * - A `timeout` option (in milliseconds) can be set to automatically abort requests that take too long.
  * - A `urlLengthLimit` option (default: 8000) can be set to control when URL length warnings are included in error messages for aborted requests.
  *
  * @example Standalone import for bundle-sensitive environments
  * ```ts
  * import { PostgrestClient } from '@supabase/postgrest-js'
  *
  * const postgrest = new PostgrestClient('https://xyzcompany.supabase.co/rest/v1', {
  *   headers: { apikey: 'your-publishable-key' },
  *   schema: 'public',
  *   timeout: 30000, // 30 second timeout
  * })
  * ```
  */
  constructor(r, { headers: s = {}, schema: o, fetch: l, timeout: c, urlLengthLimit: d = 8e3, retry: f } = {}) {
    this.url = r, this.headers = new Headers(s), this.schemaName = o, this.urlLengthLimit = d;
    const p = l ?? globalThis.fetch;
    c !== void 0 && c > 0 ? this.fetch = (g, v) => {
      const _ = new AbortController(), b = setTimeout(() => _.abort(), c), E = v?.signal;
      if (E) {
        if (E.aborted)
          return clearTimeout(b), p(g, v);
        const j = () => {
          clearTimeout(b), _.abort();
        };
        return E.addEventListener("abort", j, { once: !0 }), p(g, Li(Li({}, v), {}, { signal: _.signal })).finally(() => {
          clearTimeout(b), E.removeEventListener("abort", j);
        });
      }
      return p(g, Li(Li({}, v), {}, { signal: _.signal })).finally(() => clearTimeout(b));
    } : this.fetch = p, this.retry = f;
  }
  /**
  * Perform a query on a table or a view.
  *
  * @param relation - The table or view name to query
  *
  * @category Database
  */
  from(r) {
    if (!r || typeof r != "string" || r.trim() === "") throw new Error("Invalid relation name: relation must be a non-empty string.");
    return new tm(new URL(`${this.url}/${r}`), {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Select a schema to query or perform an function (rpc) call.
  *
  * The schema needs to be on the list of exposed schemas inside Supabase.
  *
  * @param schema - The schema to query
  *
  * @category Database
  */
  schema(r) {
    return new ph(this.url, {
      headers: this.headers,
      schema: r,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Perform a function call.
  *
  * @param fn - The function name to call
  * @param args - The arguments to pass to the function call
  * @param options - Named parameters
  * @param options.head - When set to `true`, `data` will not be returned.
  * Useful if you only need the count.
  * @param options.get - When set to `true`, the function will be called with
  * read-only access mode.
  * @param options.count - Count algorithm to use to count rows returned by the
  * function. Only applicable for [set-returning
  * functions](https://www.postgresql.org/docs/current/functions-srf.html).
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @example
  * ```ts
  * // For cross-schema functions where type inference fails, use overrideTypes:
  * const { data } = await supabase
  *   .schema('schema_b')
  *   .rpc('function_a', {})
  *   .overrideTypes<{ id: string; user_id: string }[]>()
  * ```
  *
  * @category Database
  *
  * @example Call a Postgres function without arguments
  * ```ts
  * const { data, error } = await supabase.rpc('hello_world')
  * ```
  *
  * @exampleSql Call a Postgres function without arguments
  * ```sql
  * create function hello_world() returns text as $$
  *   select 'Hello world';
  * $$ language sql;
  * ```
  *
  * @exampleResponse Call a Postgres function without arguments
  * ```json
  * {
  *   "data": "Hello world",
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Call a Postgres function with arguments
  * ```ts
  * const { data, error } = await supabase.rpc('echo', { say: '👋' })
  * ```
  *
  * @exampleSql Call a Postgres function with arguments
  * ```sql
  * create function echo(say text) returns text as $$
  *   select say;
  * $$ language sql;
  * ```
  *
  * @exampleResponse Call a Postgres function with arguments
  * ```json
  *   {
  *     "data": "👋",
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *
  * ```
  *
  * @exampleDescription Bulk processing
  * You can process large payloads by passing in an array as an argument.
  *
  * @example Bulk processing
  * ```ts
  * const { data, error } = await supabase.rpc('add_one_each', { arr: [1, 2, 3] })
  * ```
  *
  * @exampleSql Bulk processing
  * ```sql
  * create function add_one_each(arr int[]) returns int[] as $$
  *   select array_agg(n + 1) from unnest(arr) as n;
  * $$ language sql;
  * ```
  *
  * @exampleResponse Bulk processing
  * ```json
  * {
  *   "data": [
  *     2,
  *     3,
  *     4
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Call a Postgres function with filters
  * Postgres functions that return tables can also be combined with [Filters](/docs/reference/javascript/using-filters) and [Modifiers](/docs/reference/javascript/using-modifiers).
  *
  * @example Call a Postgres function with filters
  * ```ts
  * const { data, error } = await supabase
  *   .rpc('list_stored_countries')
  *   .eq('id', 1)
  *   .single()
  * ```
  *
  * @exampleSql Call a Postgres function with filters
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'Rohan'),
  *   (2, 'The Shire');
  *
  * create function list_stored_countries() returns setof countries as $$
  *   select * from countries;
  * $$ language sql;
  * ```
  *
  * @exampleResponse Call a Postgres function with filters
  * ```json
  * {
  *   "data": {
  *     "id": 1,
  *     "name": "Rohan"
  *   },
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Call a read-only Postgres function
  * ```ts
  * const { data, error } = await supabase.rpc('hello_world', undefined, { get: true })
  * ```
  *
  * @exampleSql Call a read-only Postgres function
  * ```sql
  * create function hello_world() returns text as $$
  *   select 'Hello world';
  * $$ language sql;
  * ```
  *
  * @exampleResponse Call a read-only Postgres function
  * ```json
  * {
  *   "data": "Hello world",
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  rpc(r, s = {}, { head: o = !1, get: l = !1, count: c } = {}) {
    var d;
    let f;
    const p = new URL(`${this.url}/rpc/${r}`);
    let g;
    const v = (E) => E !== null && typeof E == "object" && (!Array.isArray(E) || E.some(v)), _ = o && Object.values(s).some(v);
    _ ? (f = "POST", g = s) : o || l ? (f = o ? "HEAD" : "GET", Object.entries(s).filter(([E, j]) => j !== void 0).map(([E, j]) => [E, Array.isArray(j) ? `{${j.join(",")}}` : `${j}`]).forEach(([E, j]) => {
      p.searchParams.append(E, j);
    })) : (f = "POST", g = s);
    const b = new Headers(this.headers);
    return _ ? b.set("Prefer", c ? `count=${c},return=minimal` : "return=minimal") : c && b.set("Prefer", `count=${c}`), new gn({
      method: f,
      url: p,
      headers: b,
      schema: this.schemaName,
      body: g,
      fetch: (d = this.fetch) !== null && d !== void 0 ? d : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
};
class om {
  /**
   * Static-only utility – prevent instantiation.
   */
  constructor() {
  }
  static detectEnvironment() {
    var r;
    if (typeof WebSocket < "u")
      return { type: "native", wsConstructor: WebSocket };
    const s = globalThis;
    if (typeof globalThis < "u" && typeof s.WebSocket < "u")
      return { type: "native", wsConstructor: s.WebSocket };
    const o = typeof global < "u" ? global : void 0;
    if (o && typeof o.WebSocket < "u")
      return { type: "native", wsConstructor: o.WebSocket };
    if (typeof globalThis < "u" && typeof s.WebSocketPair < "u" && typeof globalThis.WebSocket > "u")
      return {
        type: "cloudflare",
        error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
      };
    if (typeof globalThis < "u" && s.EdgeRuntime || typeof navigator < "u" && (!((r = navigator.userAgent) === null || r === void 0) && r.includes("Vercel-Edge")))
      return {
        type: "unsupported",
        error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
      };
    const l = globalThis.process;
    if (l) {
      const c = l.versions;
      if (c && c.node) {
        const d = c.node, f = parseInt(d.replace(/^v/, "").split(".")[0]);
        return f >= 22 ? typeof globalThis.WebSocket < "u" ? { type: "native", wsConstructor: globalThis.WebSocket } : {
          type: "unsupported",
          error: `Node.js ${f} detected but native WebSocket not found.`,
          workaround: "Provide a WebSocket implementation via the transport option."
        } : {
          type: "unsupported",
          error: `Node.js ${f} detected without native WebSocket support.`,
          workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`
        };
      }
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
    };
  }
  /**
   * Returns the best available WebSocket constructor for the current runtime.
   *
   * @category Realtime
   *
   * @example Example with error handling
   * ```ts
   * try {
   *   const WS = WebSocketFactory.getWebSocketConstructor()
   *   const socket = new WS('wss://example.com/socket')
   * } catch (error) {
   *   console.error('WebSocket not available in this environment.', error)
   * }
   * ```
   */
  static getWebSocketConstructor() {
    const r = this.detectEnvironment();
    if (r.wsConstructor)
      return r.wsConstructor;
    let s = r.error || "WebSocket not supported in this environment.";
    throw r.workaround && (s += `

Suggested solution: ${r.workaround}`), new Error(s);
  }
  /**
   * Detects whether the runtime can establish WebSocket connections.
   *
   * @category Realtime
   *
   * @example Example in a Node.js script
   * ```ts
   * if (!WebSocketFactory.isWebSocketSupported()) {
   *   console.error('WebSockets are required for this script.')
   *   process.exitCode = 1
   * }
   * ```
   */
  static isWebSocketSupported() {
    try {
      const r = this.detectEnvironment();
      return r.type === "native" || r.type === "ws";
    } catch {
      return !1;
    }
  }
}
const am = "2.106.2", lm = `realtime-js/${am}`, um = "1.0.0", mh = "2.0.0", cm = mh, dm = 1e4, hm = 100, wr = {
  closed: "closed",
  errored: "errored",
  joined: "joined",
  joining: "joining",
  leaving: "leaving"
}, gh = {
  close: "phx_close",
  error: "phx_error",
  join: "phx_join",
  leave: "phx_leave",
  access_token: "access_token"
}, ll = {
  connecting: "connecting",
  closing: "closing",
  closed: "closed"
};
class fm {
  constructor(r) {
    this.HEADER_LENGTH = 1, this.USER_BROADCAST_PUSH_META_LENGTH = 6, this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 }, this.BINARY_ENCODING = 0, this.JSON_ENCODING = 1, this.BROADCAST_EVENT = "broadcast", this.allowedMetadataKeys = [], this.allowedMetadataKeys = r ?? [];
  }
  encode(r, s) {
    if (r.event === this.BROADCAST_EVENT && !(r.payload instanceof ArrayBuffer) && typeof r.payload.event == "string")
      return s(this._binaryEncodeUserBroadcastPush(r));
    let o = [r.join_ref, r.ref, r.topic, r.event, r.payload];
    return s(JSON.stringify(o));
  }
  _binaryEncodeUserBroadcastPush(r) {
    var s;
    return this._isArrayBuffer((s = r.payload) === null || s === void 0 ? void 0 : s.payload) ? this._encodeBinaryUserBroadcastPush(r) : this._encodeJsonUserBroadcastPush(r);
  }
  _encodeBinaryUserBroadcastPush(r) {
    var s, o;
    const l = (o = (s = r.payload) === null || s === void 0 ? void 0 : s.payload) !== null && o !== void 0 ? o : new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(r, this.BINARY_ENCODING, l);
  }
  _encodeJsonUserBroadcastPush(r) {
    var s, o;
    const l = (o = (s = r.payload) === null || s === void 0 ? void 0 : s.payload) !== null && o !== void 0 ? o : {}, d = new TextEncoder().encode(JSON.stringify(l)).buffer;
    return this._encodeUserBroadcastPush(r, this.JSON_ENCODING, d);
  }
  _encodeUserBroadcastPush(r, s, o) {
    var l, c;
    const d = r.topic, f = (l = r.ref) !== null && l !== void 0 ? l : "", p = (c = r.join_ref) !== null && c !== void 0 ? c : "", g = r.payload.event, v = this.allowedMetadataKeys ? this._pick(r.payload, this.allowedMetadataKeys) : {}, _ = Object.keys(v).length === 0 ? "" : JSON.stringify(v);
    if (p.length > 255)
      throw new Error(`joinRef length ${p.length} exceeds maximum of 255`);
    if (f.length > 255)
      throw new Error(`ref length ${f.length} exceeds maximum of 255`);
    if (d.length > 255)
      throw new Error(`topic length ${d.length} exceeds maximum of 255`);
    if (g.length > 255)
      throw new Error(`userEvent length ${g.length} exceeds maximum of 255`);
    if (_.length > 255)
      throw new Error(`metadata length ${_.length} exceeds maximum of 255`);
    const b = this.USER_BROADCAST_PUSH_META_LENGTH + p.length + f.length + d.length + g.length + _.length, E = new ArrayBuffer(this.HEADER_LENGTH + b);
    let j = new DataView(E), P = 0;
    j.setUint8(P++, this.KINDS.userBroadcastPush), j.setUint8(P++, p.length), j.setUint8(P++, f.length), j.setUint8(P++, d.length), j.setUint8(P++, g.length), j.setUint8(P++, _.length), j.setUint8(P++, s), Array.from(p, (z) => j.setUint8(P++, z.charCodeAt(0))), Array.from(f, (z) => j.setUint8(P++, z.charCodeAt(0))), Array.from(d, (z) => j.setUint8(P++, z.charCodeAt(0))), Array.from(g, (z) => j.setUint8(P++, z.charCodeAt(0))), Array.from(_, (z) => j.setUint8(P++, z.charCodeAt(0)));
    var U = new Uint8Array(E.byteLength + o.byteLength);
    return U.set(new Uint8Array(E), 0), U.set(new Uint8Array(o), E.byteLength), U.buffer;
  }
  decode(r, s) {
    if (this._isArrayBuffer(r)) {
      let o = this._binaryDecode(r);
      return s(o);
    }
    if (typeof r == "string") {
      const o = JSON.parse(r), [l, c, d, f, p] = o;
      return s({ join_ref: l, ref: c, topic: d, event: f, payload: p });
    }
    return s({});
  }
  _binaryDecode(r) {
    const s = new DataView(r), o = s.getUint8(0), l = new TextDecoder();
    if (o === this.KINDS.userBroadcast)
      return this._decodeUserBroadcast(r, s, l);
  }
  _decodeUserBroadcast(r, s, o) {
    const l = s.getUint8(1), c = s.getUint8(2), d = s.getUint8(3), f = s.getUint8(4);
    let p = this.HEADER_LENGTH + 4;
    const g = o.decode(r.slice(p, p + l));
    p = p + l;
    const v = o.decode(r.slice(p, p + c));
    p = p + c;
    const _ = o.decode(r.slice(p, p + d));
    p = p + d;
    const b = r.slice(p, r.byteLength), E = f === this.JSON_ENCODING ? JSON.parse(o.decode(b)) : b, j = {
      type: this.BROADCAST_EVENT,
      event: v,
      payload: E
    };
    return d > 0 && (j.meta = JSON.parse(_)), { join_ref: null, ref: null, topic: g, event: this.BROADCAST_EVENT, payload: j };
  }
  _isArrayBuffer(r) {
    var s;
    return r instanceof ArrayBuffer || ((s = r?.constructor) === null || s === void 0 ? void 0 : s.name) === "ArrayBuffer";
  }
  _pick(r, s) {
    return !r || typeof r != "object" ? {} : Object.fromEntries(Object.entries(r).filter(([o]) => s.includes(o)));
  }
}
var we;
(function(n) {
  n.abstime = "abstime", n.bool = "bool", n.date = "date", n.daterange = "daterange", n.float4 = "float4", n.float8 = "float8", n.int2 = "int2", n.int4 = "int4", n.int4range = "int4range", n.int8 = "int8", n.int8range = "int8range", n.json = "json", n.jsonb = "jsonb", n.money = "money", n.numeric = "numeric", n.oid = "oid", n.reltime = "reltime", n.text = "text", n.time = "time", n.timestamp = "timestamp", n.timestamptz = "timestamptz", n.timetz = "timetz", n.tsrange = "tsrange", n.tstzrange = "tstzrange";
})(we || (we = {}));
const Ad = (n, r, s = {}) => {
  var o;
  const l = (o = s.skipTypes) !== null && o !== void 0 ? o : [];
  return r ? Object.keys(r).reduce((c, d) => (c[d] = pm(d, n, r, l), c), {}) : {};
}, pm = (n, r, s, o) => {
  const l = r.find((f) => f.name === n), c = l?.type, d = s[n];
  return c && !o.includes(c) ? yh(c, d) : ul(d);
}, yh = (n, r) => {
  if (n.charAt(0) === "_") {
    const s = n.slice(1, n.length);
    return vm(r, s);
  }
  switch (n) {
    case we.bool:
      return mm(r);
    case we.float4:
    case we.float8:
    case we.int2:
    case we.int4:
    case we.int8:
    case we.numeric:
    case we.oid:
      return gm(r);
    case we.json:
    case we.jsonb:
      return ym(r);
    case we.timestamp:
      return wm(r);
    // Format to be consistent with PostgREST
    case we.abstime:
    // To allow users to cast it based on Timezone
    case we.date:
    // To allow users to cast it based on Timezone
    case we.daterange:
    case we.int4range:
    case we.int8range:
    case we.money:
    case we.reltime:
    // To allow users to cast it based on Timezone
    case we.text:
    case we.time:
    // To allow users to cast it based on Timezone
    case we.timestamptz:
    // To allow users to cast it based on Timezone
    case we.timetz:
    // To allow users to cast it based on Timezone
    case we.tsrange:
    case we.tstzrange:
      return ul(r);
    default:
      return ul(r);
  }
}, ul = (n) => n, mm = (n) => {
  switch (n) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return n;
  }
}, gm = (n) => {
  if (typeof n == "string") {
    const r = parseFloat(n);
    if (!Number.isNaN(r))
      return r;
  }
  return n;
}, ym = (n) => {
  if (typeof n == "string")
    try {
      return JSON.parse(n);
    } catch {
      return n;
    }
  return n;
}, vm = (n, r) => {
  if (typeof n != "string")
    return n;
  const s = n.length - 1, o = n[s];
  if (n[0] === "{" && o === "}") {
    let c;
    const d = n.slice(1, s);
    try {
      c = JSON.parse("[" + d + "]");
    } catch {
      c = d ? d.split(",") : [];
    }
    return c.map((f) => yh(r, f));
  }
  return n;
}, wm = (n) => typeof n == "string" ? n.replace(" ", "T") : n, vh = (n) => {
  const r = new URL(n);
  return r.protocol = r.protocol.replace(/^ws/i, "http"), r.pathname = r.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""), r.pathname === "" || r.pathname === "/" ? r.pathname = "/api/broadcast" : r.pathname = r.pathname + "/api/broadcast", r.href;
};
var ms = (n) => typeof n == "function" ? (
  /** @type {() => T} */
  n
) : function() {
  return n;
}, _m = typeof self < "u" ? self : null, yn = typeof window < "u" ? window : null, Dt = _m || yn || globalThis, km = "2.0.0", Sm = 1e4, bm = 1e3, Mt = (
  /** @type {const} */
  { connecting: 0, open: 1, closing: 2, closed: 3 }
), it = (
  /** @type {const} */
  {
    closed: "closed",
    errored: "errored",
    joined: "joined",
    joining: "joining",
    leaving: "leaving"
  }
), Yt = (
  /** @type {const} */
  {
    close: "phx_close",
    error: "phx_error",
    join: "phx_join",
    reply: "phx_reply",
    leave: "phx_leave"
  }
), cl = (
  /** @type {const} */
  {
    longpoll: "longpoll",
    websocket: "websocket"
  }
), Em = (
  /** @type {const} */
  {
    complete: 4
  }
), dl = "base64url.bearer.phx.", $i = class {
  /**
   * Initializes the Push
   * @param {Channel} channel - The Channel
   * @param {ChannelEvent} event - The event, for example `"phx_join"`
   * @param {() => Record<string, unknown>} payload - The payload, for example `{user_id: 123}`
   * @param {number} timeout - The push timeout in milliseconds
   */
  constructor(n, r, s, o) {
    this.channel = n, this.event = r, this.payload = s || function() {
      return {};
    }, this.receivedResp = null, this.timeout = o, this.timeoutTimer = null, this.recHooks = [], this.sent = !1, this.ref = void 0;
  }
  /**
   *
   * @param {number} timeout
   */
  resend(n) {
    this.timeout = n, this.reset(), this.send();
  }
  /**
   *
   */
  send() {
    this.hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload(),
      ref: this.ref,
      join_ref: this.channel.joinRef()
    }));
  }
  /**
   *
   * @param {string} status
   * @param {(response: any) => void} callback
   */
  receive(n, r) {
    return this.hasReceived(n) && r(this.receivedResp.response), this.recHooks.push({ status: n, callback: r }), this;
  }
  reset() {
    this.cancelRefEvent(), this.ref = null, this.refEvent = null, this.receivedResp = null, this.sent = !1;
  }
  destroy() {
    this.cancelRefEvent(), this.cancelTimeout();
  }
  /**
   * @private
   */
  matchReceive({ status: n, response: r, _ref: s }) {
    this.recHooks.filter((o) => o.status === n).forEach((o) => o.callback(r));
  }
  /**
   * @private
   */
  cancelRefEvent() {
    this.refEvent && this.channel.off(this.refEvent);
  }
  cancelTimeout() {
    clearTimeout(this.timeoutTimer), this.timeoutTimer = null;
  }
  startTimeout() {
    this.timeoutTimer && this.cancelTimeout(), this.ref = this.channel.socket.makeRef(), this.refEvent = this.channel.replyEventName(this.ref), this.channel.on(this.refEvent, (n) => {
      this.cancelRefEvent(), this.cancelTimeout(), this.receivedResp = n, this.matchReceive(n);
    }), this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  /**
   * @private
   */
  hasReceived(n) {
    return this.receivedResp && this.receivedResp.status === n;
  }
  trigger(n, r) {
    this.channel.trigger(this.refEvent, { status: n, response: r });
  }
}, wh = class {
  /**
  * @param {() => void} callback
  * @param {(tries: number) => number} timerCalc
  */
  constructor(n, r) {
    this.callback = n, this.timerCalc = r, this.timer = void 0, this.tries = 0;
  }
  reset() {
    this.tries = 0, clearTimeout(this.timer);
  }
  /**
   * Cancels any previous scheduleTimeout and schedules callback
   */
  scheduleTimeout() {
    clearTimeout(this.timer), this.timer = setTimeout(() => {
      this.tries = this.tries + 1, this.callback();
    }, this.timerCalc(this.tries + 1));
  }
}, xm = class {
  /**
   * @param {string} topic
   * @param {Params | (() => Params)} params
   * @param {Socket} socket
   */
  constructor(n, r, s) {
    this.state = it.closed, this.topic = n, this.params = ms(r || {}), this.socket = s, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = !1, this.joinPush = new $i(this, Yt.join, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new wh(() => {
      this.socket.isConnected() && this.rejoin();
    }, this.socket.rejoinAfterMs), this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset())), this.stateChangeRefs.push(
      this.socket.onOpen(() => {
        this.rejoinTimer.reset(), this.isErrored() && this.rejoin();
      })
    ), this.joinPush.receive("ok", () => {
      this.state = it.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((o) => o.send()), this.pushBuffer = [];
    }), this.joinPush.receive("error", (o) => {
      this.state = it.errored, this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, o), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
    }), this.onClose(() => {
      this.rejoinTimer.reset(), this.socket.hasLogger() && this.socket.log("channel", `close ${this.topic}`), this.state = it.closed, this.socket.remove(this);
    }), this.onError((o) => {
      this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, o), this.isJoining() && this.joinPush.reset(), this.state = it.errored, this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
    }), this.joinPush.receive("timeout", () => {
      this.socket.hasLogger() && this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), new $i(this, Yt.leave, ms({}), this.timeout).send(), this.state = it.errored, this.joinPush.reset(), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
    }), this.on(Yt.reply, (o, l) => {
      this.trigger(this.replyEventName(l), o);
    });
  }
  /**
   * Join the channel
   * @param {number} timeout
   * @returns {Push}
   */
  join(n = this.timeout) {
    if (this.joinedOnce)
      throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
    return this.timeout = n, this.joinedOnce = !0, this.rejoin(), this.joinPush;
  }
  /**
   * Teardown the channel.
   *
   * Destroys and stops related timers.
   */
  teardown() {
    this.pushBuffer.forEach((n) => n.destroy()), this.pushBuffer = [], this.rejoinTimer.reset(), this.joinPush.destroy(), this.state = it.closed, this.bindings = [];
  }
  /**
   * Hook into channel close
   * @param {ChannelBindingCallback} callback
   */
  onClose(n) {
    this.on(Yt.close, n);
  }
  /**
   * Hook into channel errors
   * @param {ChannelOnErrorCallback} callback
   * @return {number}
   */
  onError(n) {
    return this.on(Yt.error, (r) => n(r));
  }
  /**
   * Subscribes on channel events
   *
   * Subscription returns a ref counter, which can be used later to
   * unsubscribe the exact event listener
   *
   * @example
   * const ref1 = channel.on("event", do_stuff)
   * const ref2 = channel.on("event", do_other_stuff)
   * channel.off("event", ref1)
   * // Since unsubscription, do_stuff won't fire,
   * // while do_other_stuff will keep firing on the "event"
   *
   * @param {string} event
   * @param {ChannelBindingCallback} callback
   * @returns {number} ref
   */
  on(n, r) {
    let s = this.bindingRef++;
    return this.bindings.push({ event: n, ref: s, callback: r }), s;
  }
  /**
   * Unsubscribes off of channel events
   *
   * Use the ref returned from a channel.on() to unsubscribe one
   * handler, or pass nothing for the ref to unsubscribe all
   * handlers for the given event.
   *
   * @example
   * // Unsubscribe the do_stuff handler
   * const ref1 = channel.on("event", do_stuff)
   * channel.off("event", ref1)
   *
   * // Unsubscribe all handlers from event
   * channel.off("event")
   *
   * @param {string} event
   * @param {number} [ref]
   */
  off(n, r) {
    this.bindings = this.bindings.filter((s) => !(s.event === n && (typeof r > "u" || r === s.ref)));
  }
  /**
   * @private
   */
  canPush() {
    return this.socket.isConnected() && this.isJoined();
  }
  /**
   * Sends a message `event` to phoenix with the payload `payload`.
   * Phoenix receives this in the `handle_in(event, payload, socket)`
   * function. if phoenix replies or it times out (default 10000ms),
   * then optionally the reply can be received.
   *
   * @example
   * channel.push("event")
   *   .receive("ok", payload => console.log("phoenix replied:", payload))
   *   .receive("error", err => console.log("phoenix errored", err))
   *   .receive("timeout", () => console.log("timed out pushing"))
   * @param {string} event
   * @param {Object} payload
   * @param {number} [timeout]
   * @returns {Push}
   */
  push(n, r, s = this.timeout) {
    if (r = r || {}, !this.joinedOnce)
      throw new Error(`tried to push '${n}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
    let o = new $i(this, n, function() {
      return r;
    }, s);
    return this.canPush() ? o.send() : (o.startTimeout(), this.pushBuffer.push(o)), o;
  }
  /** Leaves the channel
   *
   * Unsubscribes from server events, and
   * instructs channel to terminate on server
   *
   * Triggers onClose() hooks
   *
   * To receive leave acknowledgements, use the `receive`
   * hook to bind to the server ack, ie:
   *
   * @example
   * channel.leave().receive("ok", () => alert("left!") )
   *
   * @param {number} timeout
   * @returns {Push}
   */
  leave(n = this.timeout) {
    this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), this.state = it.leaving;
    let r = () => {
      this.socket.hasLogger() && this.socket.log("channel", `leave ${this.topic}`), this.trigger(Yt.close, "leave");
    }, s = new $i(this, Yt.leave, ms({}), n);
    return s.receive("ok", () => r()).receive("timeout", () => r()), s.send(), this.canPush() || s.trigger("ok", {}), s;
  }
  /**
   * Overridable message hook
   *
   * Receives all events for specialized message handling
   * before dispatching to the channel callbacks.
   *
   * Must return the payload, modified or unmodified
   * @type{ChannelOnMessage}
   */
  onMessage(n, r, s) {
    return r;
  }
  /**
   * Overridable filter hook
   *
   * If this function returns `true`, `binding`'s callback will be called.
   *
   * @type{ChannelFilterBindings}
   */
  filterBindings(n, r, s) {
    return !0;
  }
  isMember(n, r, s, o) {
    return this.topic !== n ? !1 : o && o !== this.joinRef() ? (this.socket.hasLogger() && this.socket.log("channel", "dropping outdated message", { topic: n, event: r, payload: s, joinRef: o }), !1) : !0;
  }
  joinRef() {
    return this.joinPush.ref;
  }
  /**
   * @private
   */
  rejoin(n = this.timeout) {
    this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = it.joining, this.joinPush.resend(n));
  }
  /**
   * @param {string} event
   * @param {unknown} [payload]
   * @param {?string} [ref]
   * @param {?string} [joinRef]
   */
  trigger(n, r, s, o) {
    let l = this.onMessage(n, r, s, o);
    if (r && !l)
      throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
    let c = this.bindings.filter((d) => d.event === n && this.filterBindings(d, r, s));
    for (let d = 0; d < c.length; d++)
      c[d].callback(l, s, o || this.joinRef());
  }
  /**
  * @param {string} ref
  */
  replyEventName(n) {
    return `chan_reply_${n}`;
  }
  isClosed() {
    return this.state === it.closed;
  }
  isErrored() {
    return this.state === it.errored;
  }
  isJoined() {
    return this.state === it.joined;
  }
  isJoining() {
    return this.state === it.joining;
  }
  isLeaving() {
    return this.state === it.leaving;
  }
}, Wi = class {
  static request(n, r, s, o, l, c, d) {
    if (Dt.XDomainRequest) {
      let f = new Dt.XDomainRequest();
      return this.xdomainRequest(f, n, r, o, l, c, d);
    } else if (Dt.XMLHttpRequest) {
      let f = new Dt.XMLHttpRequest();
      return this.xhrRequest(f, n, r, s, o, l, c, d);
    } else {
      if (Dt.fetch && Dt.AbortController)
        return this.fetchRequest(n, r, s, o, l, c, d);
      throw new Error("No suitable XMLHttpRequest implementation found");
    }
  }
  static fetchRequest(n, r, s, o, l, c, d) {
    let f = {
      method: n,
      headers: s,
      body: o
    }, p = null;
    return l && (p = new AbortController(), setTimeout(() => p.abort(), l), f.signal = p.signal), Dt.fetch(r, f).then((g) => g.text()).then((g) => this.parseJSON(g)).then((g) => d && d(g)).catch((g) => {
      g.name === "AbortError" && c ? c() : d && d(null);
    }), p;
  }
  static xdomainRequest(n, r, s, o, l, c, d) {
    return n.timeout = l, n.open(r, s), n.onload = () => {
      let f = this.parseJSON(n.responseText);
      d && d(f);
    }, c && (n.ontimeout = c), n.onprogress = () => {
    }, n.send(o), n;
  }
  static xhrRequest(n, r, s, o, l, c, d, f) {
    n.open(r, s, !0), n.timeout = c;
    for (let [p, g] of Object.entries(o))
      n.setRequestHeader(p, g);
    return n.onerror = () => f && f(null), n.onreadystatechange = () => {
      if (n.readyState === Em.complete && f) {
        let p = this.parseJSON(n.responseText);
        f(p);
      }
    }, d && (n.ontimeout = d), n.send(l), n;
  }
  static parseJSON(n) {
    if (!n || n === "")
      return null;
    try {
      return JSON.parse(n);
    } catch {
      return console && console.log("failed to parse JSON response", n), null;
    }
  }
  static serialize(n, r) {
    let s = [];
    for (var o in n) {
      if (!Object.prototype.hasOwnProperty.call(n, o))
        continue;
      let l = r ? `${r}[${o}]` : o, c = n[o];
      typeof c == "object" ? s.push(this.serialize(c, l)) : s.push(encodeURIComponent(l) + "=" + encodeURIComponent(c));
    }
    return s.join("&");
  }
  static appendParams(n, r) {
    if (Object.keys(r).length === 0)
      return n;
    let s = n.match(/\?/) ? "&" : "?";
    return `${n}${s}${this.serialize(r)}`;
  }
}, Tm = (n) => {
  let r = "", s = new Uint8Array(n), o = s.byteLength;
  for (let l = 0; l < o; l++)
    r += String.fromCharCode(s[l]);
  return btoa(r);
}, dn = class {
  constructor(n, r) {
    r && r.length === 2 && r[1].startsWith(dl) && (this.authToken = atob(r[1].slice(dl.length))), this.endPoint = null, this.token = null, this.skipHeartbeat = !0, this.reqs = /* @__PURE__ */ new Set(), this.awaitingBatchAck = !1, this.currentBatch = null, this.currentBatchTimer = null, this.batchBuffer = [], this.onopen = function() {
    }, this.onerror = function() {
    }, this.onmessage = function() {
    }, this.onclose = function() {
    }, this.pollEndpoint = this.normalizeEndpoint(n), this.readyState = Mt.connecting, setTimeout(() => this.poll(), 0);
  }
  normalizeEndpoint(n) {
    return n.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + cl.websocket), "$1/" + cl.longpoll);
  }
  endpointURL() {
    return Wi.appendParams(this.pollEndpoint, { token: this.token });
  }
  closeAndRetry(n, r, s) {
    this.close(n, r, s), this.readyState = Mt.connecting;
  }
  ontimeout() {
    this.onerror("timeout"), this.closeAndRetry(1005, "timeout", !1);
  }
  isActive() {
    return this.readyState === Mt.open || this.readyState === Mt.connecting;
  }
  poll() {
    const n = { Accept: "application/json" };
    this.authToken && (n["X-Phoenix-AuthToken"] = this.authToken), this.ajax("GET", n, null, () => this.ontimeout(), (r) => {
      if (r) {
        var { status: s, token: o, messages: l } = r;
        if (s === 410 && this.token !== null) {
          this.onerror(410), this.closeAndRetry(3410, "session_gone", !1);
          return;
        }
        this.token = o;
      } else
        s = 0;
      switch (s) {
        case 200:
          l.forEach((c) => {
            setTimeout(() => this.onmessage({ data: c }), 0);
          }), this.poll();
          break;
        case 204:
          this.poll();
          break;
        case 410:
          this.readyState = Mt.open, this.onopen({}), this.poll();
          break;
        case 403:
          this.onerror(403), this.close(1008, "forbidden", !1);
          break;
        case 0:
        case 500:
          this.onerror(500), this.closeAndRetry(1011, "internal server error", 500);
          break;
        default:
          throw new Error(`unhandled poll status ${s}`);
      }
    });
  }
  // we collect all pushes within the current event loop by
  // setTimeout 0, which optimizes back-to-back procedural
  // pushes against an empty buffer
  send(n) {
    typeof n != "string" && (n = Tm(n)), this.currentBatch ? this.currentBatch.push(n) : this.awaitingBatchAck ? this.batchBuffer.push(n) : (this.currentBatch = [n], this.currentBatchTimer = setTimeout(() => {
      this.batchSend(this.currentBatch), this.currentBatch = null;
    }, 0));
  }
  batchSend(n) {
    this.awaitingBatchAck = !0, this.ajax("POST", { "Content-Type": "application/x-ndjson" }, n.join(`
`), () => this.onerror("timeout"), (r) => {
      this.awaitingBatchAck = !1, !r || r.status !== 200 ? (this.onerror(r && r.status), this.closeAndRetry(1011, "internal server error", !1)) : this.batchBuffer.length > 0 && (this.batchSend(this.batchBuffer), this.batchBuffer = []);
    });
  }
  close(n, r, s) {
    for (let l of this.reqs)
      l.abort();
    this.readyState = Mt.closed;
    let o = Object.assign({ code: 1e3, reason: void 0, wasClean: !0 }, { code: n, reason: r, wasClean: s });
    this.batchBuffer = [], clearTimeout(this.currentBatchTimer), this.currentBatchTimer = null, typeof CloseEvent < "u" ? this.onclose(new CloseEvent("close", o)) : this.onclose(o);
  }
  ajax(n, r, s, o, l) {
    let c, d = () => {
      this.reqs.delete(c), o();
    };
    c = Wi.request(n, this.endpointURL(), r, s, this.timeout, d, (f) => {
      this.reqs.delete(c), this.isActive() && l(f);
    }), this.reqs.add(c);
  }
}, Cm = class fs {
  /**
   * Initializes the Presence
   * @param {Channel} channel - The Channel
   * @param {PresenceOptions} [opts] - The options, for example `{events: {state: "state", diff: "diff"}}`
   */
  constructor(r, s = {}) {
    let o = s.events || /** @type {PresenceEvents} */
    { state: "presence_state", diff: "presence_diff" };
    this.state = {}, this.pendingDiffs = [], this.channel = r, this.joinRef = null, this.caller = {
      onJoin: function() {
      },
      onLeave: function() {
      },
      onSync: function() {
      }
    }, this.channel.on(o.state, (l) => {
      let { onJoin: c, onLeave: d, onSync: f } = this.caller;
      this.joinRef = this.channel.joinRef(), this.state = fs.syncState(this.state, l, c, d), this.pendingDiffs.forEach((p) => {
        this.state = fs.syncDiff(this.state, p, c, d);
      }), this.pendingDiffs = [], f();
    }), this.channel.on(o.diff, (l) => {
      let { onJoin: c, onLeave: d, onSync: f } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(l) : (this.state = fs.syncDiff(this.state, l, c, d), f());
    });
  }
  /**
   * @param {PresenceOnJoin} callback
   */
  onJoin(r) {
    this.caller.onJoin = r;
  }
  /**
   * @param {PresenceOnLeave} callback
   */
  onLeave(r) {
    this.caller.onLeave = r;
  }
  /**
   * @param {PresenceOnSync} callback
   */
  onSync(r) {
    this.caller.onSync = r;
  }
  /**
   * Returns the array of presences, with selected metadata.
   *
   * @template [T=PresenceState]
   * @param {((key: string, obj: PresenceState) => T)} [by]
   *
   * @returns {T[]}
   */
  list(r) {
    return fs.list(this.state, r);
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel.joinRef();
  }
  // lower-level public static API
  /**
   * Used to sync the list of presences on the server
   * with the client's state. An optional `onJoin` and `onLeave` callback can
   * be provided to react to changes in the client's local presences across
   * disconnects and reconnects with the server.
   *
   * @param {Record<string, PresenceState>} currentState
   * @param {Record<string, PresenceState>} newState
   * @param {PresenceOnJoin} onJoin
   * @param {PresenceOnLeave} onLeave
   *
   * @returns {Record<string, PresenceState>}
   */
  static syncState(r, s, o, l) {
    let c = this.clone(r), d = {}, f = {};
    return this.map(c, (p, g) => {
      s[p] || (f[p] = g);
    }), this.map(s, (p, g) => {
      let v = c[p];
      if (v) {
        let _ = g.metas.map((P) => P.phx_ref), b = v.metas.map((P) => P.phx_ref), E = g.metas.filter((P) => b.indexOf(P.phx_ref) < 0), j = v.metas.filter((P) => _.indexOf(P.phx_ref) < 0);
        E.length > 0 && (d[p] = g, d[p].metas = E), j.length > 0 && (f[p] = this.clone(v), f[p].metas = j);
      } else
        d[p] = g;
    }), this.syncDiff(c, { joins: d, leaves: f }, o, l);
  }
  /**
   *
   * Used to sync a diff of presence join and leave
   * events from the server, as they happen. Like `syncState`, `syncDiff`
   * accepts optional `onJoin` and `onLeave` callbacks to react to a user
   * joining or leaving from a device.
   *
   * @param {Record<string, PresenceState>} state
   * @param {PresenceDiff} diff
   * @param {PresenceOnJoin} onJoin
   * @param {PresenceOnLeave} onLeave
   *
   * @returns {Record<string, PresenceState>}
   */
  static syncDiff(r, s, o, l) {
    let { joins: c, leaves: d } = this.clone(s);
    return o || (o = function() {
    }), l || (l = function() {
    }), this.map(c, (f, p) => {
      let g = r[f];
      if (r[f] = this.clone(p), g) {
        let v = r[f].metas.map((b) => b.phx_ref), _ = g.metas.filter((b) => v.indexOf(b.phx_ref) < 0);
        r[f].metas.unshift(..._);
      }
      o(f, g, p);
    }), this.map(d, (f, p) => {
      let g = r[f];
      if (!g)
        return;
      let v = p.metas.map((_) => _.phx_ref);
      g.metas = g.metas.filter((_) => v.indexOf(_.phx_ref) < 0), l(f, g, p), g.metas.length === 0 && delete r[f];
    }), r;
  }
  /**
   * Returns the array of presences, with selected metadata.
   *
   * @template [T=PresenceState]
   * @param {Record<string, PresenceState>} presences
   * @param {((key: string, obj: PresenceState) => T)} [chooser]
   *
   * @returns {T[]}
   */
  static list(r, s) {
    return s || (s = function(o, l) {
      return l;
    }), this.map(r, (o, l) => s(o, l));
  }
  // private
  /**
  * @template T
  * @param {Record<string, PresenceState>} obj
  * @param {(key: string, obj: PresenceState) => T} func
  */
  static map(r, s) {
    return Object.getOwnPropertyNames(r).map((o) => s(o, r[o]));
  }
  /**
  * @template T
  * @param {T} obj
  * @returns {T}
  */
  static clone(r) {
    return JSON.parse(JSON.stringify(r));
  }
}, Ui = {
  HEADER_LENGTH: 1,
  META_LENGTH: 4,
  KINDS: { push: 0, reply: 1, broadcast: 2 },
  /**
  * @template T
  * @param {Message<Record<string, any>>} msg
  * @param {(msg: ArrayBuffer | string) => T} callback
  * @returns {T}
  */
  encode(n, r) {
    if (n.payload.constructor === ArrayBuffer)
      return r(this.binaryEncode(n));
    {
      let s = [n.join_ref, n.ref, n.topic, n.event, n.payload];
      return r(JSON.stringify(s));
    }
  },
  /**
  * @template T
  * @param {ArrayBuffer | string} rawPayload
  * @param {(msg: Message<unknown>) => T} callback
  * @returns {T}
  */
  decode(n, r) {
    if (n.constructor === ArrayBuffer)
      return r(this.binaryDecode(n));
    {
      let [s, o, l, c, d] = JSON.parse(n);
      return r({ join_ref: s, ref: o, topic: l, event: c, payload: d });
    }
  },
  /** @private */
  binaryEncode(n) {
    let { join_ref: r, ref: s, event: o, topic: l, payload: c } = n, d = this.META_LENGTH + r.length + s.length + l.length + o.length, f = new ArrayBuffer(this.HEADER_LENGTH + d), p = new DataView(f), g = 0;
    p.setUint8(g++, this.KINDS.push), p.setUint8(g++, r.length), p.setUint8(g++, s.length), p.setUint8(g++, l.length), p.setUint8(g++, o.length), Array.from(r, (_) => p.setUint8(g++, _.charCodeAt(0))), Array.from(s, (_) => p.setUint8(g++, _.charCodeAt(0))), Array.from(l, (_) => p.setUint8(g++, _.charCodeAt(0))), Array.from(o, (_) => p.setUint8(g++, _.charCodeAt(0)));
    var v = new Uint8Array(f.byteLength + c.byteLength);
    return v.set(new Uint8Array(f), 0), v.set(new Uint8Array(c), f.byteLength), v.buffer;
  },
  /**
  * @private
  */
  binaryDecode(n) {
    let r = new DataView(n), s = r.getUint8(0), o = new TextDecoder();
    switch (s) {
      case this.KINDS.push:
        return this.decodePush(n, r, o);
      case this.KINDS.reply:
        return this.decodeReply(n, r, o);
      case this.KINDS.broadcast:
        return this.decodeBroadcast(n, r, o);
    }
  },
  /** @private */
  decodePush(n, r, s) {
    let o = r.getUint8(1), l = r.getUint8(2), c = r.getUint8(3), d = this.HEADER_LENGTH + this.META_LENGTH - 1, f = s.decode(n.slice(d, d + o));
    d = d + o;
    let p = s.decode(n.slice(d, d + l));
    d = d + l;
    let g = s.decode(n.slice(d, d + c));
    d = d + c;
    let v = n.slice(d, n.byteLength);
    return { join_ref: f, ref: null, topic: p, event: g, payload: v };
  },
  /** @private */
  decodeReply(n, r, s) {
    let o = r.getUint8(1), l = r.getUint8(2), c = r.getUint8(3), d = r.getUint8(4), f = this.HEADER_LENGTH + this.META_LENGTH, p = s.decode(n.slice(f, f + o));
    f = f + o;
    let g = s.decode(n.slice(f, f + l));
    f = f + l;
    let v = s.decode(n.slice(f, f + c));
    f = f + c;
    let _ = s.decode(n.slice(f, f + d));
    f = f + d;
    let b = n.slice(f, n.byteLength), E = { status: _, response: b };
    return { join_ref: p, ref: g, topic: v, event: Yt.reply, payload: E };
  },
  /** @private */
  decodeBroadcast(n, r, s) {
    let o = r.getUint8(1), l = r.getUint8(2), c = this.HEADER_LENGTH + 2, d = s.decode(n.slice(c, c + o));
    c = c + o;
    let f = s.decode(n.slice(c, c + l));
    c = c + l;
    let p = n.slice(c, n.byteLength);
    return { join_ref: null, ref: null, topic: d, event: f, payload: p };
  }
}, Rm = class {
  /** Initializes the Socket *
   *
   * For IE8 support use an ES5-shim (https://github.com/es-shims/es5-shim)
   *
   * @constructor
   * @param {string} endPoint - The string WebSocket endpoint, ie, `"ws://example.com/socket"`,
   *                                               `"wss://example.com"`
   *                                               `"/socket"` (inherited host & protocol)
   * @param {SocketOptions} [opts] - Optional configuration
   */
  constructor(n, r = {}) {
    this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] }, this.channels = [], this.sendBuffer = [], this.ref = 0, this.fallbackRef = null, this.timeout = r.timeout || Sm, this.transport = r.transport || Dt.WebSocket || dn, this.conn = void 0, this.primaryPassedHealthCheck = !1, this.longPollFallbackMs = r.longPollFallbackMs, this.fallbackTimer = null;
    let s = null;
    try {
      s = Dt && Dt.sessionStorage;
    } catch {
    }
    this.sessionStore = r.sessionStorage || s, this.establishedConnections = 0, this.defaultEncoder = Ui.encode.bind(Ui), this.defaultDecoder = Ui.decode.bind(Ui), this.closeWasClean = !0, this.disconnecting = !1, this.binaryType = r.binaryType || "arraybuffer", this.connectClock = 1, this.pageHidden = !1, this.encode = void 0, this.decode = void 0, this.transport !== dn ? (this.encode = r.encode || this.defaultEncoder, this.decode = r.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder);
    let o = null;
    yn && yn.addEventListener && (yn.addEventListener("pagehide", (l) => {
      this.conn && (this.disconnect(), o = this.connectClock);
    }), yn.addEventListener("pageshow", (l) => {
      o === this.connectClock && (o = null, this.connect());
    }), yn.addEventListener("visibilitychange", () => {
      document.visibilityState === "hidden" ? this.pageHidden = !0 : (this.pageHidden = !1, !this.isConnected() && !this.closeWasClean && this.teardown(() => this.connect()));
    })), this.heartbeatIntervalMs = r.heartbeatIntervalMs || 3e4, this.autoSendHeartbeat = r.autoSendHeartbeat ?? !0, this.heartbeatCallback = r.heartbeatCallback ?? (() => {
    }), this.rejoinAfterMs = (l) => r.rejoinAfterMs ? r.rejoinAfterMs(l) : [1e3, 2e3, 5e3][l - 1] || 1e4, this.reconnectAfterMs = (l) => r.reconnectAfterMs ? r.reconnectAfterMs(l) : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][l - 1] || 5e3, this.logger = r.logger || null, !this.logger && r.debug && (this.logger = (l, c, d) => {
      console.log(`${l}: ${c}`, d);
    }), this.longpollerTimeout = r.longpollerTimeout || 2e4, this.params = ms(r.params || {}), this.endPoint = `${n}/${cl.websocket}`, this.vsn = r.vsn || km, this.heartbeatTimeoutTimer = null, this.heartbeatTimer = null, this.heartbeatSentAt = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new wh(() => {
      if (this.pageHidden) {
        this.log("Not reconnecting as page is hidden!"), this.teardown();
        return;
      }
      this.teardown(async () => {
        r.beforeReconnect && await r.beforeReconnect(), this.connect();
      });
    }, this.reconnectAfterMs), this.authToken = r.authToken;
  }
  /**
   * Returns the LongPoll transport reference
   */
  getLongPollTransport() {
    return dn;
  }
  /**
   * Disconnects and replaces the active transport
   *
   * @param {SocketTransport} newTransport - The new transport class to instantiate
   *
   */
  replaceTransport(n) {
    this.connectClock++, this.closeWasClean = !0, clearTimeout(this.fallbackTimer), this.reconnectTimer.reset(), this.conn && (this.conn.close(), this.conn = null), this.transport = n;
  }
  /**
   * Returns the socket protocol
   *
   * @returns {"wss" | "ws"}
   */
  protocol() {
    return location.protocol.match(/^https/) ? "wss" : "ws";
  }
  /**
   * The fully qualified socket url
   *
   * @returns {string}
   */
  endPointURL() {
    let n = Wi.appendParams(
      Wi.appendParams(this.endPoint, this.params()),
      { vsn: this.vsn }
    );
    return n.charAt(0) !== "/" ? n : n.charAt(1) === "/" ? `${this.protocol()}:${n}` : `${this.protocol()}://${location.host}${n}`;
  }
  /**
   * Disconnects the socket
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes for valid status codes.
   *
   * @param {() => void} [callback] - Optional callback which is called after socket is disconnected.
   * @param {number} [code] - A status code for disconnection (Optional).
   * @param {string} [reason] - A textual description of the reason to disconnect. (Optional)
   */
  disconnect(n, r, s) {
    this.connectClock++, this.disconnecting = !0, this.closeWasClean = !0, clearTimeout(this.fallbackTimer), this.reconnectTimer.reset(), this.teardown(() => {
      this.disconnecting = !1, n && n();
    }, r, s);
  }
  /**
   * @param {Params} [params] - [DEPRECATED] The params to send when connecting, for example `{user_id: userToken}`
   *
   * Passing params to connect is deprecated; pass them in the Socket constructor instead:
   * `new Socket("/socket", {params: {user_id: userToken}})`.
   */
  connect(n) {
    n && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"), this.params = ms(n)), !(this.conn && !this.disconnecting) && (this.longPollFallbackMs && this.transport !== dn ? this.connectWithFallback(dn, this.longPollFallbackMs) : this.transportConnect());
  }
  /**
   * Logs the message. Override `this.logger` for specialized logging. noops by default
   * @param {string} kind
   * @param {string} msg
   * @param {Object} data
   */
  log(n, r, s) {
    this.logger && this.logger(n, r, s);
  }
  /**
   * Returns true if a logger has been set on this socket.
   */
  hasLogger() {
    return this.logger !== null;
  }
  /**
   * Registers callbacks for connection open events
   *
   * @example socket.onOpen(function(){ console.info("the socket was opened") })
   *
   * @param {SocketOnOpen} callback
   */
  onOpen(n) {
    let r = this.makeRef();
    return this.stateChangeCallbacks.open.push([r, n]), r;
  }
  /**
   * Registers callbacks for connection close events
   * @param {SocketOnClose} callback
   * @returns {string}
   */
  onClose(n) {
    let r = this.makeRef();
    return this.stateChangeCallbacks.close.push([r, n]), r;
  }
  /**
   * Registers callbacks for connection error events
   *
   * @example socket.onError(function(error){ alert("An error occurred") })
   *
   * @param {SocketOnError} callback
   * @returns {string}
   */
  onError(n) {
    let r = this.makeRef();
    return this.stateChangeCallbacks.error.push([r, n]), r;
  }
  /**
   * Registers callbacks for connection message events
   * @param {SocketOnMessage} callback
   * @returns {string}
   */
  onMessage(n) {
    let r = this.makeRef();
    return this.stateChangeCallbacks.message.push([r, n]), r;
  }
  /**
   * Sets a callback that receives lifecycle events for internal heartbeat messages.
   * Useful for instrumenting connection health (e.g. sent/ok/timeout/disconnected).
   * @param {HeartbeatCallback} callback
   */
  onHeartbeat(n) {
    this.heartbeatCallback = n;
  }
  /**
   * Pings the server and invokes the callback with the RTT in milliseconds
   * @param {(timeDelta: number) => void} callback
   *
   * Returns true if the ping was pushed or false if unable to be pushed.
   */
  ping(n) {
    if (!this.isConnected())
      return !1;
    let r = this.makeRef(), s = Date.now();
    this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: r });
    let o = this.onMessage((l) => {
      l.ref === r && (this.off([o]), n(Date.now() - s));
    });
    return !0;
  }
  /**
   * @private
   *
   * @param {Function}
   */
  transportName(n) {
    return n === dn ? "LongPoll" : n.name;
  }
  /**
   * @private
   */
  transportConnect() {
    this.connectClock++, this.closeWasClean = !1;
    let n;
    this.authToken && (n = ["phoenix", `${dl}${btoa(this.authToken).replace(/=/g, "")}`]), this.conn = new this.transport(this.endPointURL(), n), this.conn.binaryType = this.binaryType, this.conn.timeout = this.longpollerTimeout, this.conn.onopen = () => this.onConnOpen(), this.conn.onerror = (r) => this.onConnError(r), this.conn.onmessage = (r) => this.onConnMessage(r), this.conn.onclose = (r) => this.onConnClose(r);
  }
  getSession(n) {
    return this.sessionStore && this.sessionStore.getItem(n);
  }
  storeSession(n, r) {
    this.sessionStore && this.sessionStore.setItem(n, r);
  }
  connectWithFallback(n, r = 2500) {
    clearTimeout(this.fallbackTimer);
    let s = !1, o = !0, l, c, d = this.transportName(n), f = (p) => {
      this.log("transport", `falling back to ${d}...`, p), this.off([l, c]), o = !1, this.replaceTransport(n), this.transportConnect();
    };
    if (this.getSession(`phx:fallback:${d}`))
      return f("memorized");
    this.fallbackTimer = setTimeout(f, r), c = this.onError((p) => {
      this.log("transport", "error", p), o && !s && (clearTimeout(this.fallbackTimer), f(p));
    }), this.fallbackRef && this.off([this.fallbackRef]), this.fallbackRef = this.onOpen(() => {
      if (s = !0, !o) {
        let p = this.transportName(n);
        return this.primaryPassedHealthCheck || this.storeSession(`phx:fallback:${p}`, "true"), this.log("transport", `established ${p} fallback`);
      }
      clearTimeout(this.fallbackTimer), this.fallbackTimer = setTimeout(f, r), this.ping((p) => {
        this.log("transport", "connected to primary after", p), this.primaryPassedHealthCheck = !0, clearTimeout(this.fallbackTimer);
      });
    }), this.transportConnect();
  }
  clearHeartbeats() {
    clearTimeout(this.heartbeatTimer), clearTimeout(this.heartbeatTimeoutTimer);
  }
  onConnOpen() {
    this.hasLogger() && this.log("transport", `connected to ${this.endPointURL()}`), this.closeWasClean = !1, this.disconnecting = !1, this.establishedConnections++, this.flushSendBuffer(), this.reconnectTimer.reset(), this.autoSendHeartbeat && this.resetHeartbeat(), this.triggerStateCallbacks("open");
  }
  /**
   * @private
   */
  heartbeatTimeout() {
    if (this.pendingHeartbeatRef) {
      this.pendingHeartbeatRef = null, this.heartbeatSentAt = null, this.hasLogger() && this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
      try {
        this.heartbeatCallback("timeout");
      } catch (n) {
        this.log("error", "error in heartbeat callback", n);
      }
      this.triggerChanError(new Error("heartbeat timeout")), this.closeWasClean = !1, this.teardown(() => this.reconnectTimer.scheduleTimeout(), bm, "heartbeat timeout");
    }
  }
  resetHeartbeat() {
    this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null, this.clearHeartbeats(), this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs));
  }
  teardown(n, r, s) {
    if (!this.conn)
      return n && n();
    const o = this.conn;
    this.waitForBufferDone(o, () => {
      r ? o.close(r, s || "") : o.close(), this.waitForSocketClosed(o, () => {
        this.conn === o && (this.conn.onopen = function() {
        }, this.conn.onerror = function() {
        }, this.conn.onmessage = function() {
        }, this.conn.onclose = function() {
        }, this.conn = null), n && n();
      });
    });
  }
  waitForBufferDone(n, r, s = 1) {
    if (s === 5 || !n.bufferedAmount) {
      r();
      return;
    }
    setTimeout(() => {
      this.waitForBufferDone(n, r, s + 1);
    }, 150 * s);
  }
  waitForSocketClosed(n, r, s = 1) {
    if (s === 5 || n.readyState === Mt.closed) {
      r();
      return;
    }
    setTimeout(() => {
      this.waitForSocketClosed(n, r, s + 1);
    }, 150 * s);
  }
  /**
  * @param {CloseEvent} event
  */
  onConnClose(n) {
    this.conn && (this.conn.onclose = () => {
    }), this.hasLogger() && this.log("transport", "close", n), this.triggerChanError(n), this.clearHeartbeats(), this.closeWasClean || this.reconnectTimer.scheduleTimeout(), this.triggerStateCallbacks("close", n);
  }
  /**
   * @private
   * @param {Event} error
   */
  onConnError(n) {
    this.hasLogger() && this.log("transport", "error", n);
    let r = this.transport, s = this.establishedConnections;
    this.triggerStateCallbacks("error", n, r, s), (r === this.transport || s > 0) && this.triggerChanError(n);
  }
  /**
   * @private
   * @param {unknown} [reason] underlying close/error event forwarded to channel error listeners
   */
  triggerChanError(n) {
    this.channels.forEach((r) => {
      r.isErrored() || r.isLeaving() || r.isClosed() || r.trigger(Yt.error, n);
    });
  }
  /**
   * @returns {string}
   */
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case Mt.connecting:
        return "connecting";
      case Mt.open:
        return "open";
      case Mt.closing:
        return "closing";
      default:
        return "closed";
    }
  }
  /**
   * @returns {boolean}
   */
  isConnected() {
    return this.connectionState() === "open";
  }
  /**
   *
   * @param {Channel} channel
   */
  remove(n) {
    this.off(n.stateChangeRefs), this.channels = this.channels.filter((r) => r !== n);
  }
  /**
   * Removes `onOpen`, `onClose`, `onError,` and `onMessage` registrations.
   *
   * @param {string[]} refs - list of refs returned by calls to
   *                 `onOpen`, `onClose`, `onError,` and `onMessage`
   */
  off(n) {
    for (let r in this.stateChangeCallbacks)
      this.stateChangeCallbacks[r] = this.stateChangeCallbacks[r].filter(([s]) => n.indexOf(s) === -1);
  }
  /**
   * Initiates a new channel for the given topic
   *
   * @param {string} topic
   * @param {Params | (() => Params)} [chanParams]- Parameters for the channel
   * @returns {Channel}
   */
  channel(n, r = {}) {
    let s = new xm(n, r, this);
    return this.channels.push(s), s;
  }
  /**
   * @param {Message<Record<string, any>>} data
   */
  push(n) {
    if (this.hasLogger()) {
      let { topic: r, event: s, payload: o, ref: l, join_ref: c } = n;
      this.log("push", `${r} ${s} (${c}, ${l})`, o);
    }
    this.isConnected() ? this.encode(n, (r) => this.conn.send(r)) : this.sendBuffer.push(() => this.encode(n, (r) => this.conn.send(r)));
  }
  /**
   * Return the next message ref, accounting for overflows
   * @returns {string}
   */
  makeRef() {
    let n = this.ref + 1;
    return n === this.ref ? this.ref = 0 : this.ref = n, this.ref.toString();
  }
  sendHeartbeat() {
    if (!this.isConnected()) {
      try {
        this.heartbeatCallback("disconnected");
      } catch (n) {
        this.log("error", "error in heartbeat callback", n);
      }
      return;
    }
    if (this.pendingHeartbeatRef) {
      this.heartbeatTimeout();
      return;
    }
    this.pendingHeartbeatRef = this.makeRef(), this.heartbeatSentAt = Date.now(), this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: this.pendingHeartbeatRef });
    try {
      this.heartbeatCallback("sent");
    } catch (n) {
      this.log("error", "error in heartbeat callback", n);
    }
    this.heartbeatTimeoutTimer = setTimeout(() => this.heartbeatTimeout(), this.heartbeatIntervalMs);
  }
  flushSendBuffer() {
    this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((n) => n()), this.sendBuffer = []);
  }
  /**
  * @param {MessageEvent<any>} rawMessage
  */
  onConnMessage(n) {
    this.decode(n.data, (r) => {
      let { topic: s, event: o, payload: l, ref: c, join_ref: d } = r;
      if (c && c === this.pendingHeartbeatRef) {
        const f = this.heartbeatSentAt ? Date.now() - this.heartbeatSentAt : void 0;
        this.clearHeartbeats();
        try {
          this.heartbeatCallback(l.status === "ok" ? "ok" : "error", f);
        } catch (p) {
          this.log("error", "error in heartbeat callback", p);
        }
        this.pendingHeartbeatRef = null, this.heartbeatSentAt = null, this.autoSendHeartbeat && (this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs));
      }
      this.hasLogger() && this.log("receive", `${l.status || ""} ${s} ${o} ${c && "(" + c + ")" || ""}`.trim(), l);
      for (let f = 0; f < this.channels.length; f++) {
        const p = this.channels[f];
        p.isMember(s, o, l, d) && p.trigger(o, l, c, d);
      }
      this.triggerStateCallbacks("message", r);
    });
  }
  /**
   * @private
   * @template {keyof SocketStateChangeCallbacks} K
   * @param {K} event
   * @param {...Parameters<SocketStateChangeCallbacks[K][number][1]>} args
   * @returns {void}
   */
  triggerStateCallbacks(n, ...r) {
    try {
      this.stateChangeCallbacks[n].forEach(([s, o]) => {
        try {
          o(...r);
        } catch (l) {
          this.log("error", `error in ${n} callback`, l);
        }
      });
    } catch (s) {
      this.log("error", `error triggering ${n} callbacks`, s);
    }
  }
  leaveOpenTopic(n) {
    let r = this.channels.find((s) => s.topic === n && (s.isJoined() || s.isJoining()));
    r && (this.hasLogger() && this.log("transport", `leaving duplicate topic "${n}"`), r.leave());
  }
};
class gs {
  constructor(r, s) {
    const o = Pm(s);
    this.presence = new Cm(r.getChannel(), o), this.presence.onJoin((l, c, d) => {
      const f = gs.onJoinPayload(l, c, d);
      r.getChannel().trigger("presence", f);
    }), this.presence.onLeave((l, c, d) => {
      const f = gs.onLeavePayload(l, c, d);
      r.getChannel().trigger("presence", f);
    }), this.presence.onSync(() => {
      r.getChannel().trigger("presence", { event: "sync" });
    });
  }
  get state() {
    return gs.transformState(this.presence.state);
  }
  /**
   * @private
   * Remove 'metas' key
   * Change 'phx_ref' to 'presence_ref'
   * Remove 'phx_ref' and 'phx_ref_prev'
   *
   * @example Transform state
   * // returns {
   *  abc123: [
   *    { presence_ref: '2', user_id: 1 },
   *    { presence_ref: '3', user_id: 2 }
   *  ]
   * }
   * RealtimePresence.transformState({
   *  abc123: {
   *    metas: [
   *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
   *      { phx_ref: '3', user_id: 2 }
   *    ]
   *  }
   * })
   *
   */
  static transformState(r) {
    return r = jm(r), Object.getOwnPropertyNames(r).reduce((s, o) => {
      const l = r[o];
      return s[o] = qi(l), s;
    }, {});
  }
  static onJoinPayload(r, s, o) {
    const l = Od(s), c = qi(o);
    return {
      event: "join",
      key: r,
      currentPresences: l,
      newPresences: c
    };
  }
  static onLeavePayload(r, s, o) {
    const l = Od(s), c = qi(o);
    return {
      event: "leave",
      key: r,
      currentPresences: l,
      leftPresences: c
    };
  }
}
function qi(n) {
  return n.metas.map((r) => (r.presence_ref = r.phx_ref, delete r.phx_ref, delete r.phx_ref_prev, r));
}
function jm(n) {
  return JSON.parse(JSON.stringify(n));
}
function Pm(n) {
  return n?.events && { events: n.events };
}
function Od(n) {
  return n?.metas ? qi(n) : [];
}
var Nd;
(function(n) {
  n.SYNC = "sync", n.JOIN = "join", n.LEAVE = "leave";
})(Nd || (Nd = {}));
class Am {
  get state() {
    return this.presenceAdapter.state;
  }
  /**
   * Creates a Presence helper that keeps the local presence state in sync with the server.
   *
   * @param channel - The realtime channel to bind to.
   * @param opts - Optional custom event names, e.g. `{ events: { state: 'state', diff: 'diff' } }`.
   *
   * @category Realtime
   *
   * @example Example for a presence channel
   * ```ts
   * const presence = new RealtimePresence(channel)
   *
   * channel.on('presence', ({ event, key }) => {
   *   console.log(`Presence ${event} on ${key}`)
   * })
   * ```
   */
  constructor(r, s) {
    this.channel = r, this.presenceAdapter = new gs(this.channel.channelAdapter, s);
  }
}
function Om(n) {
  if (n instanceof Error)
    return n;
  if (typeof n == "string")
    return new Error(n);
  if (n && typeof n == "object") {
    const r = n;
    if (typeof r.code == "number") {
      const s = typeof r.reason == "string" && r.reason ? ` (${r.reason})` : "";
      return new Error(`socket closed: ${r.code}${s}`, { cause: n });
    }
    return new Error("channel error: transport failure", { cause: n });
  }
  return new Error("channel error: connection lost");
}
class Nm {
  constructor(r, s, o) {
    const l = Im(o);
    this.channel = r.getSocket().channel(s, l), this.socket = r;
  }
  get state() {
    return this.channel.state;
  }
  set state(r) {
    this.channel.state = r;
  }
  get joinedOnce() {
    return this.channel.joinedOnce;
  }
  get joinPush() {
    return this.channel.joinPush;
  }
  get rejoinTimer() {
    return this.channel.rejoinTimer;
  }
  on(r, s) {
    return this.channel.on(r, s);
  }
  off(r, s) {
    this.channel.off(r, s);
  }
  subscribe(r) {
    return this.channel.join(r);
  }
  unsubscribe(r) {
    return this.channel.leave(r);
  }
  teardown() {
    this.channel.teardown();
  }
  onClose(r) {
    this.channel.onClose(r);
  }
  onError(r) {
    return this.channel.onError(r);
  }
  push(r, s, o) {
    let l;
    try {
      l = this.channel.push(r, s, o);
    } catch {
      throw new Error(`tried to push '${r}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`);
    }
    if (this.channel.pushBuffer.length > hm) {
      const c = this.channel.pushBuffer.shift();
      c.cancelTimeout(), this.socket.log("channel", `discarded push due to buffer overflow: ${c.event}`, c.payload());
    }
    return l;
  }
  updateJoinPayload(r) {
    const s = this.channel.joinPush.payload();
    this.channel.joinPush.payload = () => Object.assign(Object.assign({}, s), r);
  }
  canPush() {
    return this.socket.isConnected() && this.state === wr.joined;
  }
  isJoined() {
    return this.state === wr.joined;
  }
  isJoining() {
    return this.state === wr.joining;
  }
  isClosed() {
    return this.state === wr.closed;
  }
  isLeaving() {
    return this.state === wr.leaving;
  }
  updateFilterBindings(r) {
    this.channel.filterBindings = r;
  }
  updatePayloadTransform(r) {
    this.channel.onMessage = r;
  }
  /**
   * @internal
   */
  getChannel() {
    return this.channel;
  }
}
function Im(n) {
  return {
    config: Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "", enabled: !1 },
      private: !1
    }, n.config)
  };
}
var Id;
(function(n) {
  n.ALL = "*", n.INSERT = "INSERT", n.UPDATE = "UPDATE", n.DELETE = "DELETE";
})(Id || (Id = {}));
var _n;
(function(n) {
  n.BROADCAST = "broadcast", n.PRESENCE = "presence", n.POSTGRES_CHANGES = "postgres_changes", n.SYSTEM = "system";
})(_n || (_n = {}));
var Xt;
(function(n) {
  n.SUBSCRIBED = "SUBSCRIBED", n.TIMED_OUT = "TIMED_OUT", n.CLOSED = "CLOSED", n.CHANNEL_ERROR = "CHANNEL_ERROR";
})(Xt || (Xt = {}));
class ys {
  get state() {
    return this.channelAdapter.state;
  }
  set state(r) {
    this.channelAdapter.state = r;
  }
  get joinedOnce() {
    return this.channelAdapter.joinedOnce;
  }
  get timeout() {
    return this.socket.timeout;
  }
  get joinPush() {
    return this.channelAdapter.joinPush;
  }
  get rejoinTimer() {
    return this.channelAdapter.rejoinTimer;
  }
  /**
   * Creates a channel that can broadcast messages, sync presence, and listen to Postgres changes.
   *
   * The topic determines which realtime stream you are subscribing to. Config options let you
   * enable acknowledgement for broadcasts, presence tracking, or private channels.
   *
   * @category Realtime
   *
   * @example Using supabase-js (recommended)
   * ```ts
   * import { createClient } from '@supabase/supabase-js'
   *
   * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
   * const channel = supabase.channel('room1')
   * channel
   *   .on('broadcast', { event: 'cursor-pos' }, (payload) => console.log(payload))
   *   .subscribe()
   * ```
   *
   * @example Standalone import for bundle-sensitive environments
   * ```ts
   * import RealtimeClient from '@supabase/realtime-js'
   *
   * const client = new RealtimeClient('https://xyzcompany.supabase.co/realtime/v1', {
   *   params: { apikey: 'your-publishable-key' },
   * })
   * const channel = new RealtimeChannel('realtime:public:messages', { config: {} }, client)
   * ```
   */
  constructor(r, s = { config: {} }, o) {
    var l, c;
    if (this.topic = r, this.params = s, this.socket = o, this.bindings = {}, this.subTopic = r.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "", enabled: !1 },
      private: !1
    }, s.config), this.channelAdapter = new Nm(this.socket.socketAdapter, r, this.params), this.presence = new Am(this), this._onClose(() => {
      this.socket._remove(this);
    }), this._updateFilterTransform(), this.broadcastEndpointURL = vh(this.socket.socketAdapter.endPointURL()), this.private = this.params.config.private || !1, !this.private && (!((c = (l = this.params.config) === null || l === void 0 ? void 0 : l.broadcast) === null || c === void 0) && c.replay))
      throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`);
  }
  /**
   * Subscribe registers your client with the server
   * @category Realtime
   */
  subscribe(r, s = this.timeout) {
    var o, l, c;
    if (this.socket.isConnected() || this.socket.connect(), this.channelAdapter.isClosed()) {
      const { config: { broadcast: d, presence: f, private: p } } = this.params, g = (l = (o = this.bindings.postgres_changes) === null || o === void 0 ? void 0 : o.map((E) => E.filter)) !== null && l !== void 0 ? l : [], v = !!this.bindings[_n.PRESENCE] && this.bindings[_n.PRESENCE].length > 0 || ((c = this.params.config.presence) === null || c === void 0 ? void 0 : c.enabled) === !0, _ = {}, b = {
        broadcast: d,
        presence: Object.assign(Object.assign({}, f), { enabled: v }),
        postgres_changes: g,
        private: p
      };
      this.socket.accessTokenValue && (_.access_token = this.socket.accessTokenValue), this._onError((E) => {
        r?.(Xt.CHANNEL_ERROR, Om(E));
      }), this._onClose(() => r?.(Xt.CLOSED)), this.updateJoinPayload(Object.assign({ config: b }, _)), this._updateFilterMessage(), this.channelAdapter.subscribe(s).receive("ok", async ({ postgres_changes: E }) => {
        if (this.socket._isManualToken() || this.socket.setAuth(), E === void 0) {
          r?.(Xt.SUBSCRIBED);
          return;
        }
        this._updatePostgresBindings(E, r);
      }).receive("error", (E) => {
        this.state = wr.errored;
        const j = Object.values(E).join(", ") || "error";
        r?.(Xt.CHANNEL_ERROR, new Error(j, { cause: E }));
      }).receive("timeout", () => {
        r?.(Xt.TIMED_OUT);
      });
    }
    return this;
  }
  _updatePostgresBindings(r, s) {
    var o;
    const l = this.bindings.postgres_changes, c = (o = l?.length) !== null && o !== void 0 ? o : 0, d = [];
    for (let f = 0; f < c; f++) {
      const p = l[f], { filter: { event: g, schema: v, table: _, filter: b } } = p, E = r && r[f];
      if (E && E.event === g && ys.isFilterValueEqual(E.schema, v) && ys.isFilterValueEqual(E.table, _) && ys.isFilterValueEqual(E.filter, b))
        d.push(Object.assign(Object.assign({}, p), { id: E.id }));
      else {
        this.unsubscribe(), this.state = wr.errored, s?.(Xt.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
        return;
      }
    }
    this.bindings.postgres_changes = d, this.state != wr.errored && s && s(Xt.SUBSCRIBED);
  }
  /**
   * Returns the current presence state for this channel.
   *
   * The shape is a map keyed by presence key (for example a user id) where each entry contains the
   * tracked metadata for that user.
   *
   * @category Realtime
   */
  presenceState() {
    return this.presence.state;
  }
  /**
   * Sends the supplied payload to the presence tracker so other subscribers can see that this
   * client is online. Use `untrack` to stop broadcasting presence for the same key.
   *
   * @category Realtime
   */
  async track(r, s = {}) {
    return await this.send({
      type: "presence",
      event: "track",
      payload: r
    }, s.timeout || this.timeout);
  }
  /**
   * Removes the current presence state for this client.
   *
   * @category Realtime
   */
  async untrack(r = {}) {
    return await this.send({
      type: "presence",
      event: "untrack"
    }, r);
  }
  /**
   * Listen to realtime events on this channel.
   * @category Realtime
   *
   * @remarks
   * - By default, Broadcast and Presence are enabled for all projects.
   * - By default, listening to database changes is disabled for new projects due to database performance and security concerns. You can turn it on by managing Realtime's [replication](/docs/guides/api#realtime-api-overview).
   * - You can receive the "previous" data for updates and deletes by setting the table's `REPLICA IDENTITY` to `FULL` (e.g., `ALTER TABLE your_table REPLICA IDENTITY FULL;`).
   * - Row level security is not applied to delete statements. When RLS is enabled and replica identity is set to full, only the primary key is sent to clients.
   *
   * @example Listen to broadcast messages
   * ```js
   * const channel = supabase.channel("room1")
   *
   * channel.on("broadcast", { event: "cursor-pos" }, (payload) => {
   *   console.log("Cursor position received!", payload);
   * }).subscribe((status) => {
   *   if (status === "SUBSCRIBED") {
   *     channel.send({
   *       type: "broadcast",
   *       event: "cursor-pos",
   *       payload: { x: Math.random(), y: Math.random() },
   *     });
   *   }
   * });
   * ```
   *
   * @example Listen to presence sync
   * ```js
   * const channel = supabase.channel('room1')
   * channel
   *   .on('presence', { event: 'sync' }, () => {
   *     console.log('Synced presence state: ', channel.presenceState())
   *   })
   *   .subscribe(async (status) => {
   *     if (status === 'SUBSCRIBED') {
   *       await channel.track({ online_at: new Date().toISOString() })
   *     }
   *   })
   * ```
   *
   * @example Listen to presence join
   * ```js
   * const channel = supabase.channel('room1')
   * channel
   *   .on('presence', { event: 'join' }, ({ newPresences }) => {
   *     console.log('Newly joined presences: ', newPresences)
   *   })
   *   .subscribe(async (status) => {
   *     if (status === 'SUBSCRIBED') {
   *       await channel.track({ online_at: new Date().toISOString() })
   *     }
   *   })
   * ```
   *
   * @example Listen to presence leave
   * ```js
   * const channel = supabase.channel('room1')
   * channel
   *   .on('presence', { event: 'leave' }, ({ leftPresences }) => {
   *     console.log('Newly left presences: ', leftPresences)
   *   })
   *   .subscribe(async (status) => {
   *     if (status === 'SUBSCRIBED') {
   *       await channel.track({ online_at: new Date().toISOString() })
   *       await channel.untrack()
   *     }
   *   })
   * ```
   *
   * @example Listen to all database changes
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: '*', schema: '*' }, payload => {
   *     console.log('Change received!', payload)
   *   })
   *   .subscribe()
   * ```
   *
   * @example Listen to a specific table
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: '*', schema: 'public', table: 'countries' }, payload => {
   *     console.log('Change received!', payload)
   *   })
   *   .subscribe()
   * ```
   *
   * @example Listen to inserts
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'countries' }, payload => {
   *     console.log('Change received!', payload)
   *   })
   *   .subscribe()
   * ```
   *
   * @exampleDescription Listen to updates
   * By default, Supabase will send only the updated record. If you want to receive the previous values as well you can
   * enable full replication for the table you are listening to:
   *
   * ```sql
   * alter table "your_table" replica identity full;
   * ```
   *
   * @example Listen to updates
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'countries' }, payload => {
   *     console.log('Change received!', payload)
   *   })
   *   .subscribe()
   * ```
   *
   * @exampleDescription Listen to deletes
   * By default, Supabase does not send deleted records. If you want to receive the deleted record you can
   * enable full replication for the table you are listening to:
   *
   * ```sql
   * alter table "your_table" replica identity full;
   * ```
   *
   * @example Listen to deletes
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'countries' }, payload => {
   *     console.log('Change received!', payload)
   *   })
   *   .subscribe()
   * ```
   *
   * @exampleDescription Listen to multiple events
   * You can chain listeners if you want to listen to multiple events for each table.
   *
   * @example Listen to multiple events
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'countries' }, handleRecordInserted)
   *   .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'countries' }, handleRecordDeleted)
   *   .subscribe()
   * ```
   *
   * @exampleDescription Listen to row level changes
   * You can listen to individual rows using the format `{table}:{col}=eq.{val}` - where `{col}` is the column name, and `{val}` is the value which you want to match.
   *
   * @example Listen to row level changes
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'countries', filter: 'id=eq.200' }, handleRecordUpdated)
   *   .subscribe()
   * ```
   */
  on(r, s, o) {
    const l = this.channelAdapter.isJoined() || this.channelAdapter.isJoining(), c = r === _n.PRESENCE || r === _n.POSTGRES_CHANGES;
    if (l && c)
      throw this.socket.log("channel", `cannot add \`${r}\` callbacks for ${this.topic} after \`subscribe()\`.`), new Error(`cannot add \`${r}\` callbacks for ${this.topic} after \`subscribe()\`.`);
    return this._on(r, s, o);
  }
  /**
   * Sends a broadcast message explicitly via REST API.
   *
   * This method always uses the REST API endpoint regardless of WebSocket connection state.
   * Useful when you want to guarantee REST delivery or when gradually migrating from implicit REST fallback.
   *
   * @param event The name of the broadcast event
   * @param payload Payload to be sent (required)
   * @param opts Options including timeout
   * @returns Promise resolving to object with success status, and error details if failed
   *
   * @category Realtime
   */
  async httpSend(r, s, o = {}) {
    var l;
    if (s == null)
      return Promise.reject(new Error("Payload is required for httpSend()"));
    const c = {
      apikey: this.socket.apiKey ? this.socket.apiKey : "",
      "Content-Type": "application/json"
    };
    this.socket.accessTokenValue && (c.Authorization = `Bearer ${this.socket.accessTokenValue}`);
    const d = {
      method: "POST",
      headers: c,
      body: JSON.stringify({
        messages: [
          {
            topic: this.subTopic,
            event: r,
            payload: s,
            private: this.private
          }
        ]
      })
    }, f = await this._fetchWithTimeout(this.broadcastEndpointURL, d, (l = o.timeout) !== null && l !== void 0 ? l : this.timeout);
    if (f.status === 202)
      return { success: !0 };
    let p = f.statusText;
    try {
      const g = await f.json();
      p = g.error || g.message || p;
    } catch {
    }
    return Promise.reject(new Error(p));
  }
  /**
   * Sends a message into the channel.
   *
   * @param args Arguments to send to channel
   * @param args.type The type of event to send
   * @param args.event The name of the event being sent
   * @param args.payload Payload to be sent
   * @param opts Options to be used during the send process
   *
   * @category Realtime
   *
   * @remarks
   * - When using REST you don't need to subscribe to the channel
   * - REST calls are only available from 2.37.0 onwards
   * - If you create a channel only to send a REST broadcast, remove it from
   *   the client when the send completes
   *
   * @example Send a message via websocket
   * ```js
   * const channel = supabase.channel('room1')
   *
   * channel.subscribe((status) => {
   *   if (status === 'SUBSCRIBED') {
   *     channel.send({
   *       type: 'broadcast',
   *       event: 'cursor-pos',
   *       payload: { x: Math.random(), y: Math.random() },
   *     })
   *   }
   * })
   * ```
   *
   * @exampleResponse Send a message via websocket
   * ```js
   * ok | timed out | error
   * ```
   *
   * @example Send a message via REST
   * ```js
   * const channel = supabase.channel('room1')
   *
   * try {
   *   await channel.httpSend('cursor-pos', { x: Math.random(), y: Math.random() })
   * } finally {
   *   await supabase.removeChannel(channel)
   * }
   * ```
   */
  async send(r, s = {}) {
    var o, l;
    if (!this.channelAdapter.canPush() && r.type === "broadcast") {
      console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");
      const { event: c, payload: d } = r, f = {
        apikey: this.socket.apiKey ? this.socket.apiKey : "",
        "Content-Type": "application/json"
      };
      this.socket.accessTokenValue && (f.Authorization = `Bearer ${this.socket.accessTokenValue}`);
      const p = {
        method: "POST",
        headers: f,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: c,
              payload: d,
              private: this.private
            }
          ]
        })
      };
      try {
        const g = await this._fetchWithTimeout(this.broadcastEndpointURL, p, (o = s.timeout) !== null && o !== void 0 ? o : this.timeout);
        return await ((l = g.body) === null || l === void 0 ? void 0 : l.cancel()), g.ok ? "ok" : "error";
      } catch (g) {
        return g instanceof Error && g.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((c) => {
        var d, f, p;
        const g = this.channelAdapter.push(r.type, r, s.timeout || this.timeout);
        r.type === "broadcast" && !(!((p = (f = (d = this.params) === null || d === void 0 ? void 0 : d.config) === null || f === void 0 ? void 0 : f.broadcast) === null || p === void 0) && p.ack) && c("ok"), g.receive("ok", () => c("ok")), g.receive("error", () => c("error")), g.receive("timeout", () => c("timed out"));
      });
  }
  /**
   * Updates the payload that will be sent the next time the channel joins (reconnects).
   * Useful for rotating access tokens or updating config without re-creating the channel.
   *
   * @category Realtime
   */
  updateJoinPayload(r) {
    this.channelAdapter.updateJoinPayload(r);
  }
  /**
   * Leaves the channel.
   *
   * Unsubscribes from server events, and instructs channel to terminate on server.
   * Triggers onClose() hooks.
   *
   * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
   * channel.unsubscribe().receive("ok", () => alert("left!") )
   *
   * @category Realtime
   */
  async unsubscribe(r = this.timeout) {
    return new Promise((s) => {
      this.channelAdapter.unsubscribe(r).receive("ok", () => s("ok")).receive("timeout", () => s("timed out")).receive("error", () => s("error"));
    });
  }
  /**
   * Destroys and stops related timers.
   *
   * @category Realtime
   */
  teardown() {
    this.channelAdapter.teardown();
  }
  /** @internal */
  async _fetchWithTimeout(r, s, o) {
    const l = new AbortController(), c = setTimeout(() => l.abort(), o), d = await this.socket.fetch(r, Object.assign(Object.assign({}, s), { signal: l.signal }));
    return clearTimeout(c), d;
  }
  /** @internal */
  _on(r, s, o) {
    const l = r.toLocaleLowerCase(), c = this.channelAdapter.on(r, o), d = {
      type: l,
      filter: s,
      callback: o,
      ref: c
    };
    return this.bindings[l] ? this.bindings[l].push(d) : this.bindings[l] = [d], this._updateFilterMessage(), this;
  }
  /**
   * Registers a callback that will be executed when the channel closes.
   *
   * @internal
   */
  _onClose(r) {
    this.channelAdapter.onClose(r);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(r) {
    this.channelAdapter.onError(r);
  }
  /** @internal */
  _updateFilterMessage() {
    this.channelAdapter.updateFilterBindings((r, s, o) => {
      var l, c, d, f, p, g, v;
      const _ = r.event.toLocaleLowerCase();
      if (this._notThisChannelEvent(_, o))
        return !1;
      const b = (l = this.bindings[_]) === null || l === void 0 ? void 0 : l.find((E) => E.ref === r.ref);
      if (!b)
        return !0;
      if (["broadcast", "presence", "postgres_changes"].includes(_))
        if ("id" in b) {
          const E = b.id, j = (c = b.filter) === null || c === void 0 ? void 0 : c.event;
          return E && ((d = s.ids) === null || d === void 0 ? void 0 : d.includes(E)) && (j === "*" || j?.toLocaleLowerCase() === ((f = s.data) === null || f === void 0 ? void 0 : f.type.toLocaleLowerCase()));
        } else {
          const E = (g = (p = b?.filter) === null || p === void 0 ? void 0 : p.event) === null || g === void 0 ? void 0 : g.toLocaleLowerCase();
          return E === "*" || E === ((v = s?.event) === null || v === void 0 ? void 0 : v.toLocaleLowerCase());
        }
      else
        return b.type.toLocaleLowerCase() === _;
    });
  }
  /** @internal */
  _notThisChannelEvent(r, s) {
    const { close: o, error: l, leave: c, join: d } = gh;
    return s && [o, l, c, d].includes(r) && s !== this.joinPush.ref;
  }
  /** @internal */
  _updateFilterTransform() {
    this.channelAdapter.updatePayloadTransform((r, s, o) => {
      if (typeof s == "object" && "ids" in s) {
        const l = s.data, { schema: c, table: d, commit_timestamp: f, type: p, errors: g } = l;
        return Object.assign(Object.assign({}, {
          schema: c,
          table: d,
          commit_timestamp: f,
          eventType: p,
          new: {},
          old: {},
          errors: g
        }), this._getPayloadRecords(l));
      }
      return s;
    });
  }
  copyBindings(r) {
    if (this.joinedOnce)
      throw new Error("cannot copy bindings into joined channel");
    for (const s in r.bindings)
      for (const o of r.bindings[s])
        this._on(o.type, o.filter, o.callback);
  }
  /**
   * Compares two optional filter values for equality.
   * Treats undefined, null, and empty string as equivalent empty values.
   * @internal
   */
  static isFilterValueEqual(r, s) {
    return (r ?? void 0) === (s ?? void 0);
  }
  /** @internal */
  _getPayloadRecords(r) {
    const s = {
      new: {},
      old: {}
    };
    return (r.type === "INSERT" || r.type === "UPDATE") && (s.new = Ad(r.columns, r.record)), (r.type === "UPDATE" || r.type === "DELETE") && (s.old = Ad(r.columns, r.old_record)), s;
  }
}
class Lm {
  constructor(r, s) {
    this.socket = new Rm(r, s);
  }
  get timeout() {
    return this.socket.timeout;
  }
  get endPoint() {
    return this.socket.endPoint;
  }
  get transport() {
    return this.socket.transport;
  }
  get heartbeatIntervalMs() {
    return this.socket.heartbeatIntervalMs;
  }
  get heartbeatCallback() {
    return this.socket.heartbeatCallback;
  }
  set heartbeatCallback(r) {
    this.socket.heartbeatCallback = r;
  }
  get heartbeatTimer() {
    return this.socket.heartbeatTimer;
  }
  get pendingHeartbeatRef() {
    return this.socket.pendingHeartbeatRef;
  }
  get reconnectTimer() {
    return this.socket.reconnectTimer;
  }
  get vsn() {
    return this.socket.vsn;
  }
  get encode() {
    return this.socket.encode;
  }
  get decode() {
    return this.socket.decode;
  }
  get reconnectAfterMs() {
    return this.socket.reconnectAfterMs;
  }
  get sendBuffer() {
    return this.socket.sendBuffer;
  }
  get stateChangeCallbacks() {
    return this.socket.stateChangeCallbacks;
  }
  connect() {
    this.socket.connect();
  }
  disconnect(r, s, o, l = 1e4) {
    return new Promise((c) => {
      setTimeout(() => c("timeout"), l), this.socket.disconnect(() => {
        r(), c("ok");
      }, s, o);
    });
  }
  push(r) {
    this.socket.push(r);
  }
  log(r, s, o) {
    this.socket.log(r, s, o);
  }
  makeRef() {
    return this.socket.makeRef();
  }
  onOpen(r) {
    this.socket.onOpen(r);
  }
  onClose(r) {
    this.socket.onClose(r);
  }
  onError(r) {
    this.socket.onError(r);
  }
  onMessage(r) {
    this.socket.onMessage(r);
  }
  isConnected() {
    return this.socket.isConnected();
  }
  isConnecting() {
    return this.socket.connectionState() == ll.connecting;
  }
  isDisconnecting() {
    return this.socket.connectionState() == ll.closing;
  }
  connectionState() {
    return this.socket.connectionState();
  }
  endPointURL() {
    return this.socket.endPointURL();
  }
  sendHeartbeat() {
    this.socket.sendHeartbeat();
  }
  /**
   * @internal
   */
  getSocket() {
    return this.socket;
  }
}
const Ld = {
  HEARTBEAT_INTERVAL: 25e3
}, $m = [1e3, 2e3, 5e3, 1e4], Um = 1e4;
function Dm() {
  const n = /* @__PURE__ */ new Map();
  return {
    get length() {
      return n.size;
    },
    clear() {
      n.clear();
    },
    getItem(r) {
      return n.has(r) ? n.get(r) : null;
    },
    key(r) {
      var s;
      return (s = Array.from(n.keys())[r]) !== null && s !== void 0 ? s : null;
    },
    removeItem(r) {
      n.delete(r);
    },
    setItem(r, s) {
      n.set(r, String(s));
    }
  };
}
function Mm() {
  try {
    if (typeof globalThis < "u" && globalThis.sessionStorage)
      return globalThis.sessionStorage;
  } catch {
  }
  return Dm();
}
const Bm = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class zm {
  get endPoint() {
    return this.socketAdapter.endPoint;
  }
  get timeout() {
    return this.socketAdapter.timeout;
  }
  get transport() {
    return this.socketAdapter.transport;
  }
  get heartbeatCallback() {
    return this.socketAdapter.heartbeatCallback;
  }
  get heartbeatIntervalMs() {
    return this.socketAdapter.heartbeatIntervalMs;
  }
  get heartbeatTimer() {
    return this.worker ? this._workerHeartbeatTimer : this.socketAdapter.heartbeatTimer;
  }
  get pendingHeartbeatRef() {
    return this.worker ? this._pendingWorkerHeartbeatRef : this.socketAdapter.pendingHeartbeatRef;
  }
  get reconnectTimer() {
    return this.socketAdapter.reconnectTimer;
  }
  get vsn() {
    return this.socketAdapter.vsn;
  }
  get encode() {
    return this.socketAdapter.encode;
  }
  get decode() {
    return this.socketAdapter.decode;
  }
  get reconnectAfterMs() {
    return this.socketAdapter.reconnectAfterMs;
  }
  get sendBuffer() {
    return this.socketAdapter.sendBuffer;
  }
  get stateChangeCallbacks() {
    return this.socketAdapter.stateChangeCallbacks;
  }
  /**
   * Initializes the Socket.
   *
   * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
   * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
   * @param options.transport The Websocket Transport, for example WebSocket. This can be a custom implementation
   * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
   * @param options.params The optional params to pass when connecting.
   * @param options.headers Deprecated: headers cannot be set on websocket connections and this option will be removed in the future.
   * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
   * @param options.heartbeatCallback The optional function to handle heartbeat status and latency.
   * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
   * @param options.logLevel Sets the log level for Realtime
   * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
   * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
   * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
   * @param options.worker Use Web Worker to set a side flow. Defaults to false.
   * @param options.workerUrl The URL of the worker script. Defaults to https://realtime.supabase.com/worker.js that includes a heartbeat event call to keep the connection alive.
   * @param options.vsn The protocol version to use when connecting. Supported versions are "1.0.0" and "2.0.0". Defaults to "2.0.0".
   *
   * @category Realtime
   *
   * @example Using supabase-js (recommended)
   * ```ts
   * import { createClient } from '@supabase/supabase-js'
   *
   * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
   * const channel = supabase.channel('room1')
   * channel
   *   .on('broadcast', { event: 'cursor-pos' }, (payload) => console.log(payload))
   *   .subscribe()
   * ```
   *
   * @example Standalone import for bundle-sensitive environments
   * ```ts
   * import RealtimeClient from '@supabase/realtime-js'
   *
   * const client = new RealtimeClient('https://xyzcompany.supabase.co/realtime/v1', {
   *   params: { apikey: 'your-publishable-key' },
   * })
   * client.connect()
   * ```
   */
  constructor(r, s) {
    var o;
    if (this.channels = new Array(), this.accessTokenValue = null, this.accessToken = null, this.apiKey = null, this.httpEndpoint = "", this.headers = {}, this.params = {}, this.ref = 0, this.serializer = new fm(), this._manuallySetToken = !1, this._authPromise = null, this._workerHeartbeatTimer = void 0, this._pendingWorkerHeartbeatRef = null, this._pendingDisconnectTimer = null, this._disconnectOnEmptyChannelsAfterMs = 0, this._resolveFetch = (c) => c ? (...d) => c(...d) : (...d) => fetch(...d), !(!((o = s?.params) === null || o === void 0) && o.apikey))
      throw new Error("API key is required to connect to Realtime");
    this.apiKey = s.params.apikey;
    const l = this._initializeOptions(s);
    this.socketAdapter = new Lm(r, l), this.httpEndpoint = vh(r), this.fetch = this._resolveFetch(s?.fetch);
  }
  /**
   * Connects the socket, unless already connected.
   *
   * @category Realtime
   */
  connect() {
    if (!(this.isConnecting() || this.isDisconnecting() || this.isConnected())) {
      this.accessToken && !this._authPromise && this._setAuthSafely("connect"), this._setupConnectionHandlers();
      try {
        this.socketAdapter.connect();
      } catch (r) {
        const s = r.message;
        throw s.includes("Node.js") ? new Error(`${s}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`) : new Error(`WebSocket not available: ${s}`);
      }
      this._handleNodeJsRaceCondition();
    }
  }
  /**
   * Returns the URL of the websocket.
   * @returns string The URL of the websocket.
   *
   * @category Realtime
   */
  endpointURL() {
    return this.socketAdapter.endPointURL();
  }
  /**
   * Disconnects the socket.
   *
   * @param code A numeric status code to send on disconnect.
   * @param reason A custom reason for the disconnect.
   *
   * @category Realtime
   */
  async disconnect(r, s) {
    return this._cancelPendingDisconnect(), this.isDisconnecting() ? "ok" : await this.socketAdapter.disconnect(() => {
      clearInterval(this._workerHeartbeatTimer), this._terminateWorker();
    }, r, s);
  }
  /**
   * Returns all created channels
   *
   * @category Realtime
   */
  getChannels() {
    return this.channels;
  }
  /**
   * Unsubscribes, removes and tears down a single channel
   * @param channel A RealtimeChannel instance
   *
   * @category Realtime
   */
  async removeChannel(r) {
    const s = await r.unsubscribe();
    return s === "ok" && r.teardown(), s;
  }
  /**
   * Unsubscribes, removes and tears down all channels
   *
   * @category Realtime
   */
  async removeAllChannels() {
    const r = this.channels.map(async (o) => {
      const l = await o.unsubscribe();
      return o.teardown(), l;
    }), s = await Promise.all(r);
    return await this.disconnect(), s;
  }
  /**
   * Logs the message.
   *
   * For customized logging, `this.logger` can be overridden in Client constructor.
   *
   * @category Realtime
   */
  log(r, s, o) {
    this.socketAdapter.log(r, s, o);
  }
  /**
   * Returns the current state of the socket.
   *
   * @category Realtime
   */
  connectionState() {
    return this.socketAdapter.connectionState() || ll.closed;
  }
  /**
   * Returns `true` is the connection is open.
   *
   * @category Realtime
   */
  isConnected() {
    return this.socketAdapter.isConnected();
  }
  /**
   * Returns `true` if the connection is currently connecting.
   *
   * @category Realtime
   */
  isConnecting() {
    return this.socketAdapter.isConnecting();
  }
  /**
   * Returns `true` if the connection is currently disconnecting.
   *
   * @category Realtime
   */
  isDisconnecting() {
    return this.socketAdapter.isDisconnecting();
  }
  /**
   * Creates (or reuses) a {@link RealtimeChannel} for the provided topic.
   *
   * Topics are automatically prefixed with `realtime:` to match the Realtime service.
   * If a channel with the same topic already exists it will be returned instead of creating
   * a duplicate connection.
   *
   * @category Realtime
   */
  channel(r, s = { config: {} }) {
    const o = `realtime:${r}`, l = this.getChannels().find((c) => c.topic === o);
    if (l)
      return l;
    {
      const c = new ys(`realtime:${r}`, s, this);
      return this._cancelPendingDisconnect(), this.channels.push(c), c;
    }
  }
  /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   *
   * @category Realtime
   */
  push(r) {
    this.socketAdapter.push(r);
  }
  /**
   * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
   *
   * If param is null it will use the `accessToken` callback function or the token set on the client.
   *
   * On callback used, it will set the value of the token internal to the client.
   *
   * When a token is explicitly provided, it will be preserved across channel operations
   * (including removeChannel and resubscribe). The `accessToken` callback will not be
   * invoked until `setAuth()` is called without arguments.
   *
   * @param token A JWT string to override the token set on the client.
   *
   * @example Setting the authorization header
   * // Use a manual token (preserved across resubscribes, ignores accessToken callback)
   * client.realtime.setAuth('my-custom-jwt')
   *
   * // Switch back to using the accessToken callback
   * client.realtime.setAuth()
   *
   * @category Realtime
   */
  async setAuth(r = null) {
    this._authPromise = this._performAuth(r);
    try {
      await this._authPromise;
    } finally {
      this._authPromise = null;
    }
  }
  /**
   * Returns true if the current access token was explicitly set via setAuth(token),
   * false if it was obtained via the accessToken callback.
   * @internal
   */
  _isManualToken() {
    return this._manuallySetToken;
  }
  /**
   * Sends a heartbeat message if the socket is connected.
   *
   * @category Realtime
   */
  async sendHeartbeat() {
    this.socketAdapter.sendHeartbeat();
  }
  /**
   * Sets a callback that receives lifecycle events for internal heartbeat messages.
   * Useful for instrumenting connection health (e.g. sent/ok/timeout/disconnected).
   *
   * @category Realtime
   */
  onHeartbeat(r) {
    this.socketAdapter.heartbeatCallback = this._wrapHeartbeatCallback(r);
  }
  /**
   * Return the next message ref, accounting for overflows
   *
   * @internal
   */
  _makeRef() {
    return this.socketAdapter.makeRef();
  }
  /**
   * Removes a channel from RealtimeClient
   *
   * @param channel An open subscription.
   *
   * @internal
   */
  _remove(r) {
    this.channels = this.channels.filter((s) => s.topic !== r.topic), this.channels.length === 0 && (this.log("transport", "no channels remaining, scheduling disconnect"), this._schedulePendingDisconnect());
  }
  /** @internal */
  _schedulePendingDisconnect() {
    if (this._cancelPendingDisconnect(), this._disconnectOnEmptyChannelsAfterMs === 0) {
      this.log("transport", "disconnecting immediately - no channels"), this.disconnect();
      return;
    }
    this._pendingDisconnectTimer = setTimeout(() => {
      this._pendingDisconnectTimer = null, this.channels.length === 0 && (this.log("transport", "deferred disconnect fired - no channels, disconnecting"), this.disconnect());
    }, this._disconnectOnEmptyChannelsAfterMs), this.log("transport", `deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`);
  }
  /** @internal */
  _cancelPendingDisconnect() {
    this._pendingDisconnectTimer !== null && (this.log("transport", "pending disconnect cancelled - channel activity detected"), clearTimeout(this._pendingDisconnectTimer), this._pendingDisconnectTimer = null);
  }
  /**
   * Perform the actual auth operation
   * @internal
   */
  async _performAuth(r = null) {
    let s, o = !1;
    if (r)
      s = r, o = !0;
    else if (this.accessToken)
      try {
        s = await this.accessToken();
      } catch (l) {
        this.log("error", "Error fetching access token from callback", l), s = this.accessTokenValue;
      }
    else
      s = this.accessTokenValue;
    o ? this._manuallySetToken = !0 : this.accessToken && (this._manuallySetToken = !1), this.accessTokenValue != s && (this.accessTokenValue = s, this.channels.forEach((l) => {
      const c = {
        access_token: s,
        version: lm
      };
      s && l.updateJoinPayload(c), l.joinedOnce && l.channelAdapter.isJoined() && l.channelAdapter.push(gh.access_token, {
        access_token: s
      });
    }));
  }
  /**
   * Wait for any in-flight auth operations to complete
   * @internal
   */
  async _waitForAuthIfNeeded() {
    this._authPromise && await this._authPromise;
  }
  /**
   * Safely call setAuth with standardized error handling
   * @internal
   */
  _setAuthSafely(r = "general") {
    this._isManualToken() || this.setAuth().catch((s) => {
      this.log("error", `Error setting auth in ${r}`, s);
    });
  }
  /** @internal */
  _setupConnectionHandlers() {
    this.socketAdapter.onOpen(() => {
      (this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve())).catch((s) => {
        this.log("error", "error waiting for auth on connect", s);
      }), this.worker && !this.workerRef && this._startWorkerHeartbeat();
    }), this.socketAdapter.onClose(() => {
      this.worker && this.workerRef && this._terminateWorker();
    }), this.socketAdapter.onMessage((r) => {
      r.ref && r.ref === this._pendingWorkerHeartbeatRef && (this._pendingWorkerHeartbeatRef = null);
    });
  }
  /** @internal */
  _handleNodeJsRaceCondition() {
    this.socketAdapter.isConnected() && this.socketAdapter.getSocket().onConnOpen();
  }
  /** @internal */
  _wrapHeartbeatCallback(r) {
    return (s, o) => {
      s == "sent" && this._setAuthSafely(), r && r(s, o);
    };
  }
  /** @internal */
  _startWorkerHeartbeat() {
    this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
    const r = this._workerObjectUrl(this.workerUrl);
    this.workerRef = new Worker(r), this.workerRef.onerror = (s) => {
      this.log("worker", "worker error", s.message), this._terminateWorker(), this.disconnect();
    }, this.workerRef.onmessage = (s) => {
      s.data.event === "keepAlive" && this.sendHeartbeat();
    }, this.workerRef.postMessage({
      event: "start",
      interval: this.heartbeatIntervalMs
    });
  }
  /**
   * Terminate the Web Worker and clear the reference
   * @internal
   */
  _terminateWorker() {
    this.workerRef && (this.log("worker", "terminating worker"), this.workerRef.terminate(), this.workerRef = void 0);
  }
  /** @internal */
  _workerObjectUrl(r) {
    let s;
    if (r)
      s = r;
    else {
      const o = new Blob([Bm], { type: "application/javascript" });
      s = URL.createObjectURL(o);
    }
    return s;
  }
  /**
   * Initialize socket options with defaults
   * @internal
   */
  _initializeOptions(r) {
    var s, o, l, c, d, f, p, g, v, _, b, E;
    this.worker = (s = r?.worker) !== null && s !== void 0 ? s : !1, this.accessToken = (o = r?.accessToken) !== null && o !== void 0 ? o : null;
    const j = {};
    j.timeout = (l = r?.timeout) !== null && l !== void 0 ? l : dm, j.heartbeatIntervalMs = (c = r?.heartbeatIntervalMs) !== null && c !== void 0 ? c : Ld.HEARTBEAT_INTERVAL, this._disconnectOnEmptyChannelsAfterMs = (d = r?.disconnectOnEmptyChannelsAfterMs) !== null && d !== void 0 ? d : 2 * ((f = r?.heartbeatIntervalMs) !== null && f !== void 0 ? f : Ld.HEARTBEAT_INTERVAL), j.transport = (p = r?.transport) !== null && p !== void 0 ? p : om.getWebSocketConstructor(), j.params = r?.params, j.logger = r?.logger, j.heartbeatCallback = this._wrapHeartbeatCallback(r?.heartbeatCallback), j.sessionStorage = (g = r?.sessionStorage) !== null && g !== void 0 ? g : Mm(), j.reconnectAfterMs = (v = r?.reconnectAfterMs) !== null && v !== void 0 ? v : ((H) => $m[H - 1] || Um);
    let P, U;
    const z = (_ = r?.vsn) !== null && _ !== void 0 ? _ : cm;
    switch (z) {
      case um:
        P = (H, D) => D(JSON.stringify(H)), U = (H, D) => D(JSON.parse(H));
        break;
      case mh:
        P = this.serializer.encode.bind(this.serializer), U = this.serializer.decode.bind(this.serializer);
        break;
      default:
        throw new Error(`Unsupported serializer version: ${j.vsn}`);
    }
    if (j.vsn = z, j.encode = (b = r?.encode) !== null && b !== void 0 ? b : P, j.decode = (E = r?.decode) !== null && E !== void 0 ? E : U, j.beforeReconnect = this._reconnectAuth.bind(this), (r?.logLevel || r?.log_level) && (this.logLevel = r.logLevel || r.log_level, j.params = Object.assign(Object.assign({}, j.params), { log_level: this.logLevel })), this.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.workerUrl = r?.workerUrl, j.autoSendHeartbeat = !this.worker;
    }
    return j;
  }
  /** @internal */
  async _reconnectAuth() {
    await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
  }
}
var ws = class extends Error {
  constructor(n, r) {
    super(n), this.name = "IcebergError", this.status = r.status, this.icebergType = r.icebergType, this.icebergCode = r.icebergCode, this.details = r.details, this.isCommitStateUnknown = r.icebergType === "CommitStateUnknownException" || [500, 502, 504].includes(r.status) && r.icebergType?.includes("CommitState") === !0;
  }
  /**
   * Returns true if the error is a 404 Not Found error.
   */
  isNotFound() {
    return this.status === 404;
  }
  /**
   * Returns true if the error is a 409 Conflict error.
   */
  isConflict() {
    return this.status === 409;
  }
  /**
   * Returns true if the error is a 419 Authentication Timeout error.
   */
  isAuthenticationTimeout() {
    return this.status === 419;
  }
};
function Fm(n, r, s) {
  const o = new URL(r, n);
  if (s)
    for (const [l, c] of Object.entries(s))
      c !== void 0 && o.searchParams.set(l, c);
  return o.toString();
}
async function Hm(n) {
  return !n || n.type === "none" ? {} : n.type === "bearer" ? { Authorization: `Bearer ${n.token}` } : n.type === "header" ? { [n.name]: n.value } : n.type === "custom" ? await n.getHeaders() : {};
}
function qm(n) {
  const r = n.fetchImpl ?? globalThis.fetch;
  return {
    async request({
      method: s,
      path: o,
      query: l,
      body: c,
      headers: d
    }) {
      const f = Fm(n.baseUrl, o, l), p = await Hm(n.auth), g = await r(f, {
        method: s,
        headers: {
          ...c ? { "Content-Type": "application/json" } : {},
          ...p,
          ...d
        },
        body: c ? JSON.stringify(c) : void 0
      }), v = await g.text(), _ = (g.headers.get("content-type") || "").includes("application/json"), b = _ && v ? JSON.parse(v) : v;
      if (!g.ok) {
        const E = _ ? b : void 0, j = E?.error;
        throw new ws(
          j?.message ?? `Request failed with status ${g.status}`,
          {
            status: g.status,
            icebergType: j?.type,
            icebergCode: j?.code,
            details: E
          }
        );
      }
      return { status: g.status, headers: g.headers, data: b };
    }
  };
}
function Di(n) {
  return n.join("");
}
var Wm = class {
  constructor(n, r = "") {
    this.client = n, this.prefix = r;
  }
  async listNamespaces(n) {
    const r = n ? { parent: Di(n.namespace) } : void 0;
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces`,
      query: r
    })).data.namespaces.map((o) => ({ namespace: o }));
  }
  async createNamespace(n, r) {
    const s = {
      namespace: n.namespace,
      properties: r?.properties
    };
    return (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces`,
      body: s
    })).data;
  }
  async dropNamespace(n) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${Di(n.namespace)}`
    });
  }
  async loadNamespaceMetadata(n) {
    return {
      properties: (await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces/${Di(n.namespace)}`
      })).data.properties
    };
  }
  async namespaceExists(n) {
    try {
      return await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${Di(n.namespace)}`
      }), !0;
    } catch (r) {
      if (r instanceof ws && r.status === 404)
        return !1;
      throw r;
    }
  }
  async createNamespaceIfNotExists(n, r) {
    try {
      return await this.createNamespace(n, r);
    } catch (s) {
      if (s instanceof ws && s.status === 409)
        return;
      throw s;
    }
  }
};
function hn(n) {
  return n.join("");
}
var Vm = class {
  constructor(n, r = "", s) {
    this.client = n, this.prefix = r, this.accessDelegation = s;
  }
  async listTables(n) {
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${hn(n.namespace)}/tables`
    })).data.identifiers;
  }
  async createTable(n, r) {
    const s = {};
    return this.accessDelegation && (s["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${hn(n.namespace)}/tables`,
      body: r,
      headers: s
    })).data.metadata;
  }
  async updateTable(n, r) {
    const s = await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${hn(n.namespace)}/tables/${n.name}`,
      body: r
    });
    return {
      "metadata-location": s.data["metadata-location"],
      metadata: s.data.metadata
    };
  }
  async dropTable(n, r) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${hn(n.namespace)}/tables/${n.name}`,
      query: { purgeRequested: String(r?.purge ?? !1) }
    });
  }
  async loadTable(n) {
    const r = {};
    return this.accessDelegation && (r["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${hn(n.namespace)}/tables/${n.name}`,
      headers: r
    })).data.metadata;
  }
  async tableExists(n) {
    const r = {};
    this.accessDelegation && (r["X-Iceberg-Access-Delegation"] = this.accessDelegation);
    try {
      return await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${hn(n.namespace)}/tables/${n.name}`,
        headers: r
      }), !0;
    } catch (s) {
      if (s instanceof ws && s.status === 404)
        return !1;
      throw s;
    }
  }
  async createTableIfNotExists(n, r) {
    try {
      return await this.createTable(n, r);
    } catch (s) {
      if (s instanceof ws && s.status === 409)
        return await this.loadTable({ namespace: n.namespace, name: r.name });
      throw s;
    }
  }
}, Km = class {
  /**
   * Creates a new Iceberg REST Catalog client.
   *
   * @param options - Configuration options for the catalog client
   */
  constructor(n) {
    let r = "v1";
    n.catalogName && (r += `/${n.catalogName}`);
    const s = n.baseUrl.endsWith("/") ? n.baseUrl : `${n.baseUrl}/`;
    this.client = qm({
      baseUrl: s,
      auth: n.auth,
      fetchImpl: n.fetch
    }), this.accessDelegation = n.accessDelegation?.join(","), this.namespaceOps = new Wm(this.client, r), this.tableOps = new Vm(this.client, r, this.accessDelegation);
  }
  /**
   * Lists all namespaces in the catalog.
   *
   * @param parent - Optional parent namespace to list children under
   * @returns Array of namespace identifiers
   *
   * @example
   * ```typescript
   * // List all top-level namespaces
   * const namespaces = await catalog.listNamespaces();
   *
   * // List namespaces under a parent
   * const children = await catalog.listNamespaces({ namespace: ['analytics'] });
   * ```
   */
  async listNamespaces(n) {
    return this.namespaceOps.listNamespaces(n);
  }
  /**
   * Creates a new namespace in the catalog.
   *
   * @param id - Namespace identifier to create
   * @param metadata - Optional metadata properties for the namespace
   * @returns Response containing the created namespace and its properties
   *
   * @example
   * ```typescript
   * const response = await catalog.createNamespace(
   *   { namespace: ['analytics'] },
   *   { properties: { owner: 'data-team' } }
   * );
   * console.log(response.namespace); // ['analytics']
   * console.log(response.properties); // { owner: 'data-team', ... }
   * ```
   */
  async createNamespace(n, r) {
    return this.namespaceOps.createNamespace(n, r);
  }
  /**
   * Drops a namespace from the catalog.
   *
   * The namespace must be empty (contain no tables) before it can be dropped.
   *
   * @param id - Namespace identifier to drop
   *
   * @example
   * ```typescript
   * await catalog.dropNamespace({ namespace: ['analytics'] });
   * ```
   */
  async dropNamespace(n) {
    await this.namespaceOps.dropNamespace(n);
  }
  /**
   * Loads metadata for a namespace.
   *
   * @param id - Namespace identifier to load
   * @returns Namespace metadata including properties
   *
   * @example
   * ```typescript
   * const metadata = await catalog.loadNamespaceMetadata({ namespace: ['analytics'] });
   * console.log(metadata.properties);
   * ```
   */
  async loadNamespaceMetadata(n) {
    return this.namespaceOps.loadNamespaceMetadata(n);
  }
  /**
   * Lists all tables in a namespace.
   *
   * @param namespace - Namespace identifier to list tables from
   * @returns Array of table identifiers
   *
   * @example
   * ```typescript
   * const tables = await catalog.listTables({ namespace: ['analytics'] });
   * console.log(tables); // [{ namespace: ['analytics'], name: 'events' }, ...]
   * ```
   */
  async listTables(n) {
    return this.tableOps.listTables(n);
  }
  /**
   * Creates a new table in the catalog.
   *
   * @param namespace - Namespace to create the table in
   * @param request - Table creation request including name, schema, partition spec, etc.
   * @returns Table metadata for the created table
   *
   * @example
   * ```typescript
   * const metadata = await catalog.createTable(
   *   { namespace: ['analytics'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
   *       ],
   *       'schema-id': 0
   *     },
   *     'partition-spec': {
   *       'spec-id': 0,
   *       fields: [
   *         { source_id: 2, field_id: 1000, name: 'ts_day', transform: 'day' }
   *       ]
   *     }
   *   }
   * );
   * ```
   */
  async createTable(n, r) {
    return this.tableOps.createTable(n, r);
  }
  /**
   * Updates an existing table's metadata.
   *
   * Can update the schema, partition spec, or properties of a table.
   *
   * @param id - Table identifier to update
   * @param request - Update request with fields to modify
   * @returns Response containing the metadata location and updated table metadata
   *
   * @example
   * ```typescript
   * const response = await catalog.updateTable(
   *   { namespace: ['analytics'], name: 'events' },
   *   {
   *     properties: { 'read.split.target-size': '134217728' }
   *   }
   * );
   * console.log(response['metadata-location']); // s3://...
   * console.log(response.metadata); // TableMetadata object
   * ```
   */
  async updateTable(n, r) {
    return this.tableOps.updateTable(n, r);
  }
  /**
   * Drops a table from the catalog.
   *
   * @param id - Table identifier to drop
   *
   * @example
   * ```typescript
   * await catalog.dropTable({ namespace: ['analytics'], name: 'events' });
   * ```
   */
  async dropTable(n, r) {
    await this.tableOps.dropTable(n, r);
  }
  /**
   * Loads metadata for a table.
   *
   * @param id - Table identifier to load
   * @returns Table metadata including schema, partition spec, location, etc.
   *
   * @example
   * ```typescript
   * const metadata = await catalog.loadTable({ namespace: ['analytics'], name: 'events' });
   * console.log(metadata.schema);
   * console.log(metadata.location);
   * ```
   */
  async loadTable(n) {
    return this.tableOps.loadTable(n);
  }
  /**
   * Checks if a namespace exists in the catalog.
   *
   * @param id - Namespace identifier to check
   * @returns True if the namespace exists, false otherwise
   *
   * @example
   * ```typescript
   * const exists = await catalog.namespaceExists({ namespace: ['analytics'] });
   * console.log(exists); // true or false
   * ```
   */
  async namespaceExists(n) {
    return this.namespaceOps.namespaceExists(n);
  }
  /**
   * Checks if a table exists in the catalog.
   *
   * @param id - Table identifier to check
   * @returns True if the table exists, false otherwise
   *
   * @example
   * ```typescript
   * const exists = await catalog.tableExists({ namespace: ['analytics'], name: 'events' });
   * console.log(exists); // true or false
   * ```
   */
  async tableExists(n) {
    return this.tableOps.tableExists(n);
  }
  /**
   * Creates a namespace if it does not exist.
   *
   * If the namespace already exists, returns void. If created, returns the response.
   *
   * @param id - Namespace identifier to create
   * @param metadata - Optional metadata properties for the namespace
   * @returns Response containing the created namespace and its properties, or void if it already exists
   *
   * @example
   * ```typescript
   * const response = await catalog.createNamespaceIfNotExists(
   *   { namespace: ['analytics'] },
   *   { properties: { owner: 'data-team' } }
   * );
   * if (response) {
   *   console.log('Created:', response.namespace);
   * } else {
   *   console.log('Already exists');
   * }
   * ```
   */
  async createNamespaceIfNotExists(n, r) {
    return this.namespaceOps.createNamespaceIfNotExists(n, r);
  }
  /**
   * Creates a table if it does not exist.
   *
   * If the table already exists, returns its metadata instead.
   *
   * @param namespace - Namespace to create the table in
   * @param request - Table creation request including name, schema, partition spec, etc.
   * @returns Table metadata for the created or existing table
   *
   * @example
   * ```typescript
   * const metadata = await catalog.createTableIfNotExists(
   *   { namespace: ['analytics'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
   *       ],
   *       'schema-id': 0
   *     }
   *   }
   * );
   * ```
   */
  async createTableIfNotExists(n, r) {
    return this.tableOps.createTableIfNotExists(n, r);
  }
};
function _s(n) {
  "@babel/helpers - typeof";
  return _s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, _s(n);
}
function Gm(n, r) {
  if (_s(n) != "object" || !n) return n;
  var s = n[Symbol.toPrimitive];
  if (s !== void 0) {
    var o = s.call(n, r);
    if (_s(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(n);
}
function Jm(n) {
  var r = Gm(n, "string");
  return _s(r) == "symbol" ? r : r + "";
}
function Qm(n, r, s) {
  return (r = Jm(r)) in n ? Object.defineProperty(n, r, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[r] = s, n;
}
function $d(n, r) {
  var s = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    r && (o = o.filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    })), s.push.apply(s, o);
  }
  return s;
}
function ne(n) {
  for (var r = 1; r < arguments.length; r++) {
    var s = arguments[r] != null ? arguments[r] : {};
    r % 2 ? $d(Object(s), !0).forEach(function(o) {
      Qm(n, o, s[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : $d(Object(s)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(s, o));
    });
  }
  return n;
}
var Xi = class extends Error {
  constructor(n, r = "storage", s, o) {
    super(n), this.__isStorageError = !0, this.namespace = r, this.name = r === "vectors" ? "StorageVectorsError" : "StorageError", this.status = s, this.statusCode = o;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
};
function Zi(n) {
  return typeof n == "object" && n !== null && "__isStorageError" in n;
}
var hl = class extends Xi {
  constructor(n, r, s, o = "storage") {
    super(n, o, r, s), this.name = o === "vectors" ? "StorageVectorsApiError" : "StorageApiError", this.status = r, this.statusCode = s;
  }
  toJSON() {
    return ne({}, super.toJSON());
  }
}, _h = class extends Xi {
  constructor(n, r, s = "storage") {
    super(n, s), this.name = s === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError", this.originalError = r;
  }
};
function Vi(n, r, s) {
  const o = ne({}, n), l = r.toLowerCase();
  for (const c of Object.keys(o)) c.toLowerCase() === l && delete o[c];
  return o[l] = s, o;
}
function Ym(n) {
  const r = {};
  for (const [s, o] of Object.entries(n)) r[s.toLowerCase()] = o;
  return r;
}
const Xm = (n) => n ? (...r) => n(...r) : (...r) => fetch(...r), Zm = (n) => {
  if (typeof n != "object" || n === null) return !1;
  const r = Object.getPrototypeOf(n);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}, fl = (n) => {
  if (Array.isArray(n)) return n.map((s) => fl(s));
  if (typeof n == "function" || n !== Object(n)) return n;
  const r = {};
  return Object.entries(n).forEach(([s, o]) => {
    const l = s.replace(/([-_][a-z])/gi, (c) => c.toUpperCase().replace(/[-_]/g, ""));
    r[l] = fl(o);
  }), r;
}, eg = (n) => !n || typeof n != "string" || n.length === 0 || n.length > 100 || n.trim() !== n || n.includes("/") || n.includes("\\") ? !1 : /^[\w!.\*'() &$@=;:+,?-]+$/.test(n), Ud = (n) => {
  if (typeof n == "object" && n !== null) {
    const r = n;
    if (typeof r.msg == "string") return r.msg;
    if (typeof r.message == "string") return r.message;
    if (typeof r.error_description == "string") return r.error_description;
    if (typeof r.error == "string") return r.error;
    if (typeof r.error == "object" && r.error !== null) {
      const s = r.error;
      if (typeof s.message == "string") return s.message;
    }
  }
  return JSON.stringify(n);
}, tg = async (n, r, s, o) => {
  if (n !== null && typeof n == "object" && "json" in n && typeof n.json == "function") {
    const l = n;
    let c = parseInt(String(l.status), 10);
    Number.isFinite(c) || (c = 500), l.json().then((d) => {
      const f = d?.statusCode || d?.code || c + "";
      r(new hl(Ud(d), c, f, o));
    }).catch(() => {
      const d = c + "";
      r(new hl(l.statusText || `HTTP ${c} error`, c, d, o));
    });
  } else r(new _h(Ud(n), n, o));
}, rg = (n, r, s, o) => {
  const l = {
    method: n,
    headers: r?.headers || {}
  };
  if (n === "GET" || n === "HEAD" || !o) return ne(ne({}, l), s);
  if (Zm(o)) {
    var c;
    const d = r?.headers || {};
    let f;
    for (const [p, g] of Object.entries(d)) p.toLowerCase() === "content-type" && (f = g);
    l.headers = Vi(d, "Content-Type", (c = f) !== null && c !== void 0 ? c : "application/json"), l.body = JSON.stringify(o);
  } else l.body = o;
  return r?.duplex && (l.duplex = r.duplex), ne(ne({}, l), s);
};
async function ds(n, r, s, o, l, c, d) {
  return new Promise((f, p) => {
    n(s, rg(r, o, l, c)).then((g) => {
      if (!g.ok) throw g;
      if (o?.noResolveJson) return g;
      if (d === "vectors") {
        const v = g.headers.get("content-type");
        if (g.headers.get("content-length") === "0" || g.status === 204) return {};
        if (!v || !v.includes("application/json")) return {};
      }
      return g.json();
    }).then((g) => f(g)).catch((g) => tg(g, p, o, d));
  });
}
function kh(n = "storage") {
  return {
    get: async (r, s, o, l) => ds(r, "GET", s, o, l, void 0, n),
    post: async (r, s, o, l, c) => ds(r, "POST", s, l, c, o, n),
    put: async (r, s, o, l, c) => ds(r, "PUT", s, l, c, o, n),
    head: async (r, s, o, l) => ds(r, "HEAD", s, ne(ne({}, o), {}, { noResolveJson: !0 }), l, void 0, n),
    remove: async (r, s, o, l, c) => ds(r, "DELETE", s, l, c, o, n)
  };
}
const ng = kh("storage"), { get: ks, post: Pt, put: pl, head: sg, remove: Sl } = ng, ht = kh("vectors");
var bn = class {
  /**
  * Creates a new BaseApiClient instance
  * @param url - Base URL for API requests
  * @param headers - Default headers for API requests
  * @param fetch - Optional custom fetch implementation
  * @param namespace - Error namespace ('storage' or 'vectors')
  */
  constructor(n, r = {}, s, o = "storage") {
    this.shouldThrowOnError = !1, this.url = n, this.headers = Ym(r), this.fetch = Xm(s), this.namespace = o;
  }
  /**
  * Enable throwing errors instead of returning them.
  * When enabled, errors are thrown instead of returned in { data, error } format.
  *
  * @returns this - For method chaining
  */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
  * Set an HTTP header for the request.
  * Creates a shallow copy of headers to avoid mutating shared state.
  *
  * @param name - Header name
  * @param value - Header value
  * @returns this - For method chaining
  */
  setHeader(n, r) {
    return this.headers = Vi(this.headers, n, r), this;
  }
  /**
  * Handles API operation with standardized error handling
  * Eliminates repetitive try-catch blocks across all API methods
  *
  * This wrapper:
  * 1. Executes the operation
  * 2. Returns { data, error: null } on success
  * 3. Returns { data: null, error } on failure (if shouldThrowOnError is false)
  * 4. Throws error on failure (if shouldThrowOnError is true)
  *
  * @typeParam T - The expected data type from the operation
  * @param operation - Async function that performs the API call
  * @returns Promise with { data, error } tuple
  *
  * @example Handling an operation
  * ```typescript
  * async listBuckets() {
  *   return this.handleOperation(async () => {
  *     return await get(this.fetch, `${this.url}/bucket`, {
  *       headers: this.headers,
  *     })
  *   })
  * }
  * ```
  */
  async handleOperation(n) {
    var r = this;
    try {
      return {
        data: await n(),
        error: null
      };
    } catch (s) {
      if (r.shouldThrowOnError) throw s;
      if (Zi(s)) return {
        data: null,
        error: s
      };
      throw s;
    }
  }
};
let Sh;
Sh = Symbol.toStringTag;
var ig = class {
  constructor(n, r) {
    this.downloadFn = n, this.shouldThrowOnError = r, this[Sh] = "StreamDownloadBuilder", this.promise = null;
  }
  then(n, r) {
    return this.getPromise().then(n, r);
  }
  catch(n) {
    return this.getPromise().catch(n);
  }
  finally(n) {
    return this.getPromise().finally(n);
  }
  getPromise() {
    return this.promise || (this.promise = this.execute()), this.promise;
  }
  async execute() {
    var n = this;
    try {
      return {
        data: (await n.downloadFn()).body,
        error: null
      };
    } catch (r) {
      if (n.shouldThrowOnError) throw r;
      if (Zi(r)) return {
        data: null,
        error: r
      };
      throw r;
    }
  }
};
let bh;
bh = Symbol.toStringTag;
var og = class {
  constructor(n, r) {
    this.downloadFn = n, this.shouldThrowOnError = r, this[bh] = "BlobDownloadBuilder", this.promise = null;
  }
  asStream() {
    return new ig(this.downloadFn, this.shouldThrowOnError);
  }
  then(n, r) {
    return this.getPromise().then(n, r);
  }
  catch(n) {
    return this.getPromise().catch(n);
  }
  finally(n) {
    return this.getPromise().finally(n);
  }
  getPromise() {
    return this.promise || (this.promise = this.execute()), this.promise;
  }
  async execute() {
    var n = this;
    try {
      return {
        data: await (await n.downloadFn()).blob(),
        error: null
      };
    } catch (r) {
      if (n.shouldThrowOnError) throw r;
      if (Zi(r)) return {
        data: null,
        error: r
      };
      throw r;
    }
  }
};
const ag = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, Dd = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
var lg = class extends bn {
  constructor(n, r = {}, s, o) {
    super(n, r, o, "storage"), this.bucketId = s;
  }
  /**
  * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
  *
  * @param method HTTP method.
  * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
  * @param fileBody The body of the file to be stored in the bucket.
  */
  async uploadOrUpdate(n, r, s, o) {
    var l = this;
    return l.handleOperation(async () => {
      let c;
      const d = ne(ne({}, Dd), o);
      let f = ne(ne({}, l.headers), n === "POST" && { "x-upsert": String(d.upsert) });
      const p = d.metadata;
      if (typeof Blob < "u" && s instanceof Blob ? (c = new FormData(), c.append("cacheControl", d.cacheControl), p && c.append("metadata", l.encodeMetadata(p)), c.append("", s)) : typeof FormData < "u" && s instanceof FormData ? (c = s, c.has("cacheControl") || c.append("cacheControl", d.cacheControl), p && !c.has("metadata") && c.append("metadata", l.encodeMetadata(p))) : (c = s, f["cache-control"] = `max-age=${d.cacheControl}`, f["content-type"] = d.contentType, p && (f["x-metadata"] = l.toBase64(l.encodeMetadata(p))), (typeof ReadableStream < "u" && c instanceof ReadableStream || c && typeof c == "object" && "pipe" in c && typeof c.pipe == "function") && !d.duplex && (d.duplex = "half")), o?.headers) for (const [b, E] of Object.entries(o.headers)) f = Vi(f, b, E);
      const g = l._removeEmptyFolders(r), v = l._getFinalPath(g), _ = await (n == "PUT" ? pl : Pt)(l.fetch, `${l.url}/object/${v}`, c, ne({ headers: f }, d?.duplex ? { duplex: d.duplex } : {}));
      return {
        path: g,
        id: _.Id,
        fullPath: _.Key
      };
    });
  }
  /**
  * Uploads a file to an existing bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
  * @param fileBody The body of the file to be stored in the bucket.
  * @param fileOptions Optional file upload options including cacheControl, contentType, upsert, and metadata.
  * @returns Promise with response containing file path, id, and fullPath or error
  *
  * @example Upload file
  * ```js
  * const avatarFile = event.target.files[0]
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .upload('public/avatar1.png', avatarFile, {
  *     cacheControl: '3600',
  *     upsert: false
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "public/avatar1.png",
  *     "fullPath": "avatars/public/avatar1.png"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @example Upload file using `ArrayBuffer` from base64 file data
  * ```js
  * import { decode } from 'base64-arraybuffer'
  *
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .upload('public/avatar1.png', decode('base64FileData'), {
  *     contentType: 'image/png'
  *   })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: only `insert` when you are uploading new files and `select`, `insert` and `update` when you are upserting files
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  * - For React Native, using either `Blob`, `File` or `FormData` does not work as intended. Upload file using `ArrayBuffer` from base64 file data instead, see example below.
  */
  async upload(n, r, s) {
    return this.uploadOrUpdate("POST", n, r, s);
  }
  /**
  * Upload a file with a token generated from `createSignedUploadUrl`.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
  * @param token The token generated from `createSignedUploadUrl`
  * @param fileBody The body of the file to be stored in the bucket.
  * @param fileOptions HTTP headers (cacheControl, contentType, etc.).
  * **Note:** The `upsert` option has no effect here. To enable upsert behavior,
  * pass `{ upsert: true }` when calling `createSignedUploadUrl()` instead.
  * @returns Promise with response containing file path and fullPath or error
  *
  * @example Upload to a signed URL
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .uploadToSignedUrl('folder/cat.jpg', 'token-from-createSignedUploadUrl', file)
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "folder/cat.jpg",
  *     "fullPath": "avatars/folder/cat.jpg"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async uploadToSignedUrl(n, r, s, o) {
    var l = this;
    const c = l._removeEmptyFolders(n), d = l._getFinalPath(c), f = new URL(l.url + `/object/upload/sign/${d}`);
    return f.searchParams.set("token", r), l.handleOperation(async () => {
      let p;
      const g = ne(ne({}, Dd), o);
      let v = ne(ne({}, l.headers), { "x-upsert": String(g.upsert) });
      const _ = g.metadata;
      if (typeof Blob < "u" && s instanceof Blob ? (p = new FormData(), p.append("cacheControl", g.cacheControl), _ && p.append("metadata", l.encodeMetadata(_)), p.append("", s)) : typeof FormData < "u" && s instanceof FormData ? (p = s, p.has("cacheControl") || p.append("cacheControl", g.cacheControl), _ && !p.has("metadata") && p.append("metadata", l.encodeMetadata(_))) : (p = s, v["cache-control"] = `max-age=${g.cacheControl}`, v["content-type"] = g.contentType, _ && (v["x-metadata"] = l.toBase64(l.encodeMetadata(_))), (typeof ReadableStream < "u" && p instanceof ReadableStream || p && typeof p == "object" && "pipe" in p && typeof p.pipe == "function") && !g.duplex && (g.duplex = "half")), o?.headers) for (const [b, E] of Object.entries(o.headers)) v = Vi(v, b, E);
      return {
        path: c,
        fullPath: (await pl(l.fetch, f.toString(), p, ne({ headers: v }, g?.duplex ? { duplex: g.duplex } : {}))).Key
      };
    });
  }
  /**
  * Creates a signed upload URL.
  * Signed upload URLs can be used to upload files to the bucket without further authentication.
  * They are valid for 2 hours.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the current file name. For example `folder/image.png`.
  * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
  * @returns Promise with response containing signed upload URL, token, and path or error
  *
  * @example Create Signed Upload URL
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUploadUrl('folder/cat.jpg')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "signedUrl": "https://example.supabase.co/storage/v1/object/upload/sign/avatars/folder/cat.jpg?token=<TOKEN>",
  *     "path": "folder/cat.jpg",
  *     "token": "<TOKEN>"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `insert`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async createSignedUploadUrl(n, r) {
    var s = this;
    return s.handleOperation(async () => {
      let o = s._getFinalPath(n);
      const l = ne({}, s.headers);
      r?.upsert && (l["x-upsert"] = "true");
      const c = await Pt(s.fetch, `${s.url}/object/upload/sign/${o}`, {}, { headers: l }), d = new URL(s.url + c.url), f = d.searchParams.get("token");
      if (!f) throw new Xi("No token returned by API");
      return {
        signedUrl: d.toString(),
        path: n,
        token: f
      };
    });
  }
  /**
  * Replaces an existing file at the specified path with a new one.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
  * @param fileBody The body of the file to be stored in the bucket.
  * @param fileOptions Optional file upload options including cacheControl, contentType, and metadata.
  * **Note:** The `upsert` option has no effect here. `update()` always replaces the
  * file at the given path, so the `x-upsert` header is not sent. To control upsert
  * behavior, use `upload()` instead.
  * @returns Promise with response containing file path, id, and fullPath or error
  *
  * @example Update file
  * ```js
  * const avatarFile = event.target.files[0]
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .update('public/avatar1.png', avatarFile, {
  *     cacheControl: '3600'
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "public/avatar1.png",
  *     "fullPath": "avatars/public/avatar1.png"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @example Update file using `ArrayBuffer` from base64 file data
  * ```js
  * import {decode} from 'base64-arraybuffer'
  *
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .update('public/avatar1.png', decode('base64FileData'), {
  *     contentType: 'image/png'
  *   })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `update` and `select`
  * - `update()` always replaces the file at the given path regardless of the `upsert` option.
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  * - For React Native, using either `Blob`, `File` or `FormData` does not work as intended. Update file using `ArrayBuffer` from base64 file data instead, see example below.
  */
  async update(n, r, s) {
    return this.uploadOrUpdate("PUT", n, r, s);
  }
  /**
  * Moves an existing file to a new path in the same bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
  * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
  * @param options The destination options.
  * @returns Promise with response containing success message or error
  *
  * @example Move file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .move('public/avatar1.png', 'private/avatar2.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully moved"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `update` and `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async move(n, r, s) {
    var o = this;
    return o.handleOperation(async () => await Pt(o.fetch, `${o.url}/object/move`, {
      bucketId: o.bucketId,
      sourceKey: n,
      destinationKey: r,
      destinationBucket: s?.destinationBucket
    }, { headers: o.headers }));
  }
  /**
  * Copies an existing file to a new path in the same bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
  * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
  * @param options The destination options.
  * @returns Promise with response containing copied file path or error
  *
  * @example Copy file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .copy('public/avatar1.png', 'private/avatar2.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "avatars/private/avatar2.png"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `insert` and `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async copy(n, r, s) {
    var o = this;
    return o.handleOperation(async () => ({ path: (await Pt(o.fetch, `${o.url}/object/copy`, {
      bucketId: o.bucketId,
      sourceKey: n,
      destinationKey: r,
      destinationBucket: s?.destinationBucket
    }, { headers: o.headers })).Key }));
  }
  /**
  * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the current file name. For example `folder/image.png`.
  * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
  * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
  * @param options.transform Transform the asset before serving it to the client.
  * @param options.cacheNonce Append a cache nonce parameter to the URL to invalidate the cache.
  * @returns Promise with response containing signed URL or error
  *
  * @example Create Signed URL
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrl('folder/avatar1.png', 60)
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar1.png?token=<TOKEN>"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @example Create a signed URL for an asset with transformations
  * ```js
  * const { data } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrl('folder/avatar1.png', 60, {
  *     transform: {
  *       width: 100,
  *       height: 100,
  *     }
  *   })
  * ```
  *
  * @example Create a signed URL which triggers the download of the asset
  * ```js
  * const { data } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrl('folder/avatar1.png', 60, {
  *     download: true,
  *   })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async createSignedUrl(n, r, s) {
    var o = this;
    return o.handleOperation(async () => {
      let l = o._getFinalPath(n);
      const c = typeof s?.transform == "object" && s.transform !== null && Object.keys(s.transform).length > 0;
      let d = await Pt(o.fetch, `${o.url}/object/sign/${l}`, ne({ expiresIn: r }, c ? { transform: s.transform } : {}), { headers: o.headers });
      const f = new URLSearchParams();
      s?.download && f.set("download", s.download === !0 ? "" : s.download), s?.cacheNonce != null && f.set("cacheNonce", String(s.cacheNonce));
      const p = f.toString();
      return { signedUrl: encodeURI(`${o.url}${d.signedURL}${p ? `&${p}` : ""}`) };
    });
  }
  /**
  * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
  * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
  * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
  * @param options.cacheNonce Append a cache nonce parameter to the URL to invalidate the cache.
  * @returns Promise with response containing array of objects with signedUrl, path, and error or error
  *
  * @example Create Signed URLs
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrls(['folder/avatar1.png', 'folder/avatar2.png'], 60)
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [
  *     {
  *       "error": null,
  *       "path": "folder/avatar1.png",
  *       "signedURL": "/object/sign/avatars/folder/avatar1.png?token=<TOKEN>",
  *       "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar1.png?token=<TOKEN>"
  *     },
  *     {
  *       "error": null,
  *       "path": "folder/avatar2.png",
  *       "signedURL": "/object/sign/avatars/folder/avatar2.png?token=<TOKEN>",
  *       "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar2.png?token=<TOKEN>"
  *     }
  *   ],
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async createSignedUrls(n, r, s) {
    var o = this;
    return o.handleOperation(async () => {
      const l = await Pt(o.fetch, `${o.url}/object/sign/${o.bucketId}`, {
        expiresIn: r,
        paths: n
      }, { headers: o.headers }), c = new URLSearchParams();
      s?.download && c.set("download", s.download === !0 ? "" : s.download), s?.cacheNonce != null && c.set("cacheNonce", String(s.cacheNonce));
      const d = c.toString();
      return l.map((f) => ne(ne({}, f), {}, { signedUrl: f.signedURL ? encodeURI(`${o.url}${f.signedURL}${d ? `&${d}` : ""}`) : null }));
    });
  }
  /**
  * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
  * @param options.transform Transform the asset before serving it to the client.
  * @param options.cacheNonce Append a cache nonce parameter to the URL to invalidate the cache.
  * @param parameters Additional fetch parameters like signal for cancellation. Supports standard fetch options including cache control.
  * @returns BlobDownloadBuilder instance for downloading the file
  *
  * @example Download file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": <BLOB>,
  *   "error": null
  * }
  * ```
  *
  * @example Download file with transformations
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png', {
  *     transform: {
  *       width: 100,
  *       height: 100,
  *       quality: 80
  *     }
  *   })
  * ```
  *
  * @example Download with cache control (useful in Edge Functions)
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png', {}, { cache: 'no-store' })
  * ```
  *
  * @example Download with abort signal
  * ```js
  * const controller = new AbortController()
  * setTimeout(() => controller.abort(), 5000)
  *
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png', {}, { signal: controller.signal })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  download(n, r, s) {
    const o = typeof r?.transform == "object" && r.transform !== null && Object.keys(r.transform).length > 0 ? "render/image/authenticated" : "object", l = new URLSearchParams();
    r?.transform && this.applyTransformOptsToQuery(l, r.transform), r?.cacheNonce != null && l.set("cacheNonce", String(r.cacheNonce));
    const c = l.toString(), d = this._getFinalPath(n), f = () => ks(this.fetch, `${this.url}/${o}/${d}${c ? `?${c}` : ""}`, {
      headers: this.headers,
      noResolveJson: !0
    }, s);
    return new og(f, this.shouldThrowOnError);
  }
  /**
  * Retrieves the details of an existing file.
  *
  * Returns detailed file metadata including size, content type, and timestamps.
  * Note: The API returns `last_modified` field, not `updated_at`.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the file name. For example `folder/image.png`.
  * @returns Promise with response containing file metadata or error
  *
  * @example Get file info
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .info('folder/avatar1.png')
  *
  * if (data) {
  *   console.log('Last modified:', data.lastModified)
  *   console.log('Size:', data.size)
  * }
  * ```
  */
  async info(n) {
    var r = this;
    const s = r._getFinalPath(n);
    return r.handleOperation(async () => fl(await ks(r.fetch, `${r.url}/object/info/${s}`, { headers: r.headers })));
  }
  /**
  * Checks the existence of a file.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the file name. For example `folder/image.png`.
  * @returns Promise with response containing boolean indicating file existence or error
  *
  * @example Check file existence
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .exists('folder/avatar1.png')
  * ```
  */
  async exists(n) {
    var r = this;
    const s = r._getFinalPath(n);
    try {
      return await sg(r.fetch, `${r.url}/object/${s}`, { headers: r.headers }), {
        data: !0,
        error: null
      };
    } catch (l) {
      if (r.shouldThrowOnError) throw l;
      if (Zi(l)) {
        var o;
        const c = l instanceof hl ? l.status : l instanceof _h ? (o = l.originalError) === null || o === void 0 ? void 0 : o.status : void 0;
        if (c !== void 0 && [400, 404].includes(c)) return {
          data: !1,
          error: l
        };
      }
      throw l;
    }
  }
  /**
  * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
  * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
  * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
  * @param options.transform Transform the asset before serving it to the client.
  * @param options.cacheNonce Append a cache nonce parameter to the URL to invalidate the cache.
  * @returns Object with public URL
  *
  * @example Returns the URL for an asset in a public bucket
  * ```js
  * const { data } = supabase
  *   .storage
  *   .from('public-bucket')
  *   .getPublicUrl('folder/avatar1.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "publicUrl": "https://example.supabase.co/storage/v1/object/public/public-bucket/folder/avatar1.png"
  *   }
  * }
  * ```
  *
  * @example Returns the URL for an asset in a public bucket with transformations
  * ```js
  * const { data } = supabase
  *   .storage
  *   .from('public-bucket')
  *   .getPublicUrl('folder/avatar1.png', {
  *     transform: {
  *       width: 100,
  *       height: 100,
  *     }
  *   })
  * ```
  *
  * @example Returns the URL which triggers the download of an asset in a public bucket
  * ```js
  * const { data } = supabase
  *   .storage
  *   .from('public-bucket')
  *   .getPublicUrl('folder/avatar1.png', {
  *     download: true,
  *   })
  * ```
  *
  * @remarks
  * - The bucket needs to be set to public, either via [updateBucket()](/docs/reference/javascript/storage-updatebucket) or by going to Storage on [supabase.com/dashboard](https://supabase.com/dashboard), clicking the overflow menu on a bucket and choosing "Make public"
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  getPublicUrl(n, r) {
    const s = this._getFinalPath(n), o = new URLSearchParams();
    r?.download && o.set("download", r.download === !0 ? "" : r.download), r?.transform && this.applyTransformOptsToQuery(o, r.transform), r?.cacheNonce != null && o.set("cacheNonce", String(r.cacheNonce));
    const l = o.toString(), c = typeof r?.transform == "object" && r.transform !== null && Object.keys(r.transform).length > 0 ? "render/image" : "object";
    return { data: { publicUrl: encodeURI(`${this.url}/${c}/public/${s}`) + (l ? `?${l}` : "") } };
  }
  /**
  * Deletes files within the same bucket
  *
  * Returns an array of FileObject entries for the deleted files. Note that deprecated
  * fields like `bucket_id` may or may not be present in the response - do not rely on them.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
  * @returns Promise with response containing array of deleted file objects or error
  *
  * @example Delete file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .remove(['folder/avatar1.png'])
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [],
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `delete` and `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async remove(n) {
    var r = this;
    return r.handleOperation(async () => await Sl(r.fetch, `${r.url}/object/${r.bucketId}`, { prefixes: n }, { headers: r.headers }));
  }
  /**
  * Get file metadata
  * @param id the file id to retrieve metadata
  */
  /**
  * Update file metadata
  * @param id the file id to update metadata
  * @param meta the new file metadata
  */
  /**
  * Lists all the files and folders within a path of the bucket.
  *
  * **Important:** For folder entries, fields like `id`, `updated_at`, `created_at`,
  * `last_accessed_at`, and `metadata` will be `null`. Only files have these fields populated.
  * Additionally, deprecated fields like `bucket_id`, `owner`, and `buckets` are NOT returned
  * by this method.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The folder path.
  * @param options Search options including limit (defaults to 100), offset, sortBy, and search
  * @param parameters Optional fetch parameters including signal for cancellation
  * @returns Promise with response containing array of files/folders or error
  *
  * @example List files in a bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .list('folder', {
  *     limit: 100,
  *     offset: 0,
  *     sortBy: { column: 'name', order: 'asc' },
  *   })
  *
  * // Handle files vs folders
  * data?.forEach(item => {
  *   if (item.id !== null) {
  *     // It's a file
  *     console.log('File:', item.name, 'Size:', item.metadata?.size)
  *   } else {
  *     // It's a folder
  *     console.log('Folder:', item.name)
  *   }
  * })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "avatar1.png",
  *       "id": "e668cf7f-821b-4a2f-9dce-7dfa5dd1cfd2",
  *       "updated_at": "2024-05-22T23:06:05.580Z",
  *       "created_at": "2024-05-22T23:04:34.443Z",
  *       "last_accessed_at": "2024-05-22T23:04:34.443Z",
  *       "metadata": {
  *         "eTag": "\"c5e8c553235d9af30ef4f6e280790b92\"",
  *         "size": 32175,
  *         "mimetype": "image/png",
  *         "cacheControl": "max-age=3600",
  *         "lastModified": "2024-05-22T23:06:05.574Z",
  *         "contentLength": 32175,
  *         "httpStatusCode": 200
  *       }
  *     }
  *   ],
  *   "error": null
  * }
  * ```
  *
  * @example Search files in a bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .list('folder', {
  *     limit: 100,
  *     offset: 0,
  *     sortBy: { column: 'name', order: 'asc' },
  *     search: 'jon'
  *   })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async list(n, r, s) {
    var o = this;
    return o.handleOperation(async () => {
      const l = ne(ne(ne({}, ag), r), {}, { prefix: n || "" });
      return await Pt(o.fetch, `${o.url}/object/list/${o.bucketId}`, l, { headers: o.headers }, s);
    });
  }
  /**
  * Lists all the files and folders within a bucket using the V2 API with pagination support.
  *
  * **Important:** Folder entries in the `folders` array only contain `name` and optionally `key` —
  * they have no `id`, timestamps, or `metadata` fields. Full file metadata is only available
  * on entries in the `objects` array.
  *
  * @experimental this method signature might change in the future
  *
  * @category Storage
  * @subcategory File Buckets
  * @param options Search options including prefix, cursor for pagination, limit, with_delimiter
  * @param parameters Optional fetch parameters including signal for cancellation
  * @returns Promise with response containing folders/objects arrays with pagination info or error
  *
  * @example List files with pagination
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .listV2({
  *     prefix: 'folder/',
  *     limit: 100,
  *   })
  *
  * // Handle pagination
  * if (data?.hasNext) {
  *   const nextPage = await supabase
  *     .storage
  *     .from('avatars')
  *     .listV2({
  *       prefix: 'folder/',
  *       cursor: data.nextCursor,
  *     })
  * }
  *
  * // Handle files vs folders
  * data?.objects.forEach(file => {
  *   if (file.id !== null) {
  *     console.log('File:', file.name, 'Size:', file.metadata?.size)
  *   }
  * })
  * data?.folders.forEach(folder => {
  *   console.log('Folder:', folder.name)
  * })
  * ```
  */
  async listV2(n, r) {
    var s = this;
    return s.handleOperation(async () => {
      const o = ne({}, n);
      return await Pt(s.fetch, `${s.url}/object/list-v2/${s.bucketId}`, o, { headers: s.headers }, r);
    });
  }
  encodeMetadata(n) {
    return JSON.stringify(n);
  }
  toBase64(n) {
    return typeof Buffer < "u" ? Buffer.from(n).toString("base64") : btoa(n);
  }
  _getFinalPath(n) {
    return `${this.bucketId}/${n.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(n) {
    return n.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  /** Modifies the `query`, appending values the from `transform` */
  applyTransformOptsToQuery(n, r) {
    return r.width && n.set("width", r.width.toString()), r.height && n.set("height", r.height.toString()), r.resize && n.set("resize", r.resize), r.format && n.set("format", r.format), r.quality && n.set("quality", r.quality.toString()), n;
  }
};
const ug = "2.106.2", Es = { "X-Client-Info": `storage-js/${ug}` };
var cg = class extends bn {
  constructor(n, r = {}, s, o) {
    const l = new URL(n);
    o?.useNewHostname && /supabase\.(co|in|red)$/.test(l.hostname) && !l.hostname.includes("storage.supabase.") && (l.hostname = l.hostname.replace("supabase.", "storage.supabase."));
    const c = l.href.replace(/\/$/, ""), d = ne(ne({}, Es), r);
    super(c, d, s, "storage");
  }
  /**
  * Retrieves the details of all Storage buckets within an existing project.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param options Query parameters for listing buckets
  * @param options.limit Maximum number of buckets to return
  * @param options.offset Number of buckets to skip
  * @param options.sortColumn Column to sort by ('id', 'name', 'created_at', 'updated_at')
  * @param options.sortOrder Sort order ('asc' or 'desc')
  * @param options.search Search term to filter bucket names
  * @returns Promise with response containing array of buckets or error
  *
  * @example List buckets
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .listBuckets()
  * ```
  *
  * @example List buckets with options
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .listBuckets({
  *     limit: 10,
  *     offset: 0,
  *     sortColumn: 'created_at',
  *     sortOrder: 'desc',
  *     search: 'prod'
  *   })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `select`
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async listBuckets(n) {
    var r = this;
    return r.handleOperation(async () => {
      const s = r.listBucketOptionsToQueryString(n);
      return await ks(r.fetch, `${r.url}/bucket${s}`, { headers: r.headers });
    });
  }
  /**
  * Retrieves the details of an existing Storage bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param id The unique identifier of the bucket you would like to retrieve.
  * @returns Promise with response containing bucket details or error
  *
  * @example Get bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .getBucket('avatars')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "id": "avatars",
  *     "name": "avatars",
  *     "owner": "",
  *     "public": false,
  *     "file_size_limit": 1024,
  *     "allowed_mime_types": [
  *       "image/png"
  *     ],
  *     "created_at": "2024-05-22T22:26:05.100Z",
  *     "updated_at": "2024-05-22T22:26:05.100Z"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `select`
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async getBucket(n) {
    var r = this;
    return r.handleOperation(async () => await ks(r.fetch, `${r.url}/bucket/${n}`, { headers: r.headers }));
  }
  /**
  * Creates a new Storage bucket
  *
  * @category Storage
  * @subcategory File Buckets
  * @param id A unique identifier for the bucket you are creating.
  * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
  * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
  * The global file size limit takes precedence over this value.
  * The default value is null, which doesn't set a per bucket file size limit.
  * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
  * The default value is null, which allows files with all mime types to be uploaded.
  * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
  * @param options.type (private-beta) specifies the bucket type. see `BucketType` for more details.
  *   - default bucket type is `STANDARD`
  * @returns Promise with response containing newly created bucket name or error
  *
  * @example Create bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .createBucket('avatars', {
  *     public: false,
  *     allowedMimeTypes: ['image/png'],
  *     fileSizeLimit: 1024
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "name": "avatars"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `insert`
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async createBucket(n, r = { public: !1 }) {
    var s = this;
    return s.handleOperation(async () => await Pt(s.fetch, `${s.url}/bucket`, {
      id: n,
      name: n,
      type: r.type,
      public: r.public,
      file_size_limit: r.fileSizeLimit,
      allowed_mime_types: r.allowedMimeTypes
    }, { headers: s.headers }));
  }
  /**
  * Updates a Storage bucket
  *
  * @category Storage
  * @subcategory File Buckets
  * @param id A unique identifier for the bucket you are updating.
  * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
  * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
  * The global file size limit takes precedence over this value.
  * The default value is null, which doesn't set a per bucket file size limit.
  * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
  * The default value is null, which allows files with all mime types to be uploaded.
  * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
  * @returns Promise with response containing success message or error
  *
  * @example Update bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .updateBucket('avatars', {
  *     public: false,
  *     allowedMimeTypes: ['image/png'],
  *     fileSizeLimit: 1024
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully updated"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `select` and `update`
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async updateBucket(n, r) {
    var s = this;
    return s.handleOperation(async () => await pl(s.fetch, `${s.url}/bucket/${n}`, {
      id: n,
      name: n,
      public: r.public,
      file_size_limit: r.fileSizeLimit,
      allowed_mime_types: r.allowedMimeTypes
    }, { headers: s.headers }));
  }
  /**
  * Removes all objects inside a single bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param id The unique identifier of the bucket you would like to empty.
  * @returns Promise with success message or error
  *
  * @example Empty bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .emptyBucket('avatars')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully emptied"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `select`
  *   - `objects` table permissions: `select` and `delete`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async emptyBucket(n) {
    var r = this;
    return r.handleOperation(async () => await Pt(r.fetch, `${r.url}/bucket/${n}/empty`, {}, { headers: r.headers }));
  }
  /**
  * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
  * You must first `empty()` the bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param id The unique identifier of the bucket you would like to delete.
  * @returns Promise with success message or error
  *
  * @example Delete bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .deleteBucket('avatars')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully deleted"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `select` and `delete`
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async deleteBucket(n) {
    var r = this;
    return r.handleOperation(async () => await Sl(r.fetch, `${r.url}/bucket/${n}`, {}, { headers: r.headers }));
  }
  listBucketOptionsToQueryString(n) {
    const r = {};
    return n && ("limit" in n && (r.limit = String(n.limit)), "offset" in n && (r.offset = String(n.offset)), n.search && (r.search = n.search), n.sortColumn && (r.sortColumn = n.sortColumn), n.sortOrder && (r.sortOrder = n.sortOrder)), Object.keys(r).length > 0 ? "?" + new URLSearchParams(r).toString() : "";
  }
}, dg = class extends bn {
  /**
  * @alpha
  *
  * Creates a new StorageAnalyticsClient instance
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Analytics Buckets
  * @param url - The base URL for the storage API
  * @param headers - HTTP headers to include in requests
  * @param fetch - Optional custom fetch implementation
  *
  * @example Using supabase-js (recommended)
  * ```typescript
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const { data, error } = await supabase.storage.analytics.listBuckets()
  * ```
  *
  * @example Standalone import for bundle-sensitive environments
  * ```typescript
  * import { StorageAnalyticsClient } from '@supabase/storage-js'
  *
  * const client = new StorageAnalyticsClient(url, headers)
  * ```
  */
  constructor(n, r = {}, s) {
    const o = n.replace(/\/$/, ""), l = ne(ne({}, Es), r);
    super(o, l, s, "storage");
  }
  /**
  * @alpha
  *
  * Creates a new analytics bucket using Iceberg tables
  * Analytics buckets are optimized for analytical queries and data processing
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Analytics Buckets
  * @param name A unique name for the bucket you are creating
  * @returns Promise with response containing newly created analytics bucket or error
  *
  * @example Create analytics bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .analytics
  *   .createBucket('analytics-data')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "name": "analytics-data",
  *     "type": "ANALYTICS",
  *     "format": "iceberg",
  *     "created_at": "2024-05-22T22:26:05.100Z",
  *     "updated_at": "2024-05-22T22:26:05.100Z"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - Creates a new analytics bucket using Iceberg tables
  * - Analytics buckets are optimized for analytical queries and data processing
  */
  async createBucket(n) {
    var r = this;
    return r.handleOperation(async () => await Pt(r.fetch, `${r.url}/bucket`, { name: n }, { headers: r.headers }));
  }
  /**
  * @alpha
  *
  * Retrieves the details of all Analytics Storage buckets within an existing project
  * Only returns buckets of type 'ANALYTICS'
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Analytics Buckets
  * @param options Query parameters for listing buckets
  * @param options.limit Maximum number of buckets to return
  * @param options.offset Number of buckets to skip
  * @param options.sortColumn Column to sort by ('name', 'created_at', 'updated_at')
  * @param options.sortOrder Sort order ('asc' or 'desc')
  * @param options.search Search term to filter bucket names
  * @returns Promise with response containing array of analytics buckets or error
  *
  * @example List analytics buckets
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .analytics
  *   .listBuckets({
  *     limit: 10,
  *     offset: 0,
  *     sortColumn: 'created_at',
  *     sortOrder: 'desc'
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "analytics-data",
  *       "type": "ANALYTICS",
  *       "format": "iceberg",
  *       "created_at": "2024-05-22T22:26:05.100Z",
  *       "updated_at": "2024-05-22T22:26:05.100Z"
  *     }
  *   ],
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - Retrieves the details of all Analytics Storage buckets within an existing project
  * - Only returns buckets of type 'ANALYTICS'
  */
  async listBuckets(n) {
    var r = this;
    return r.handleOperation(async () => {
      const s = new URLSearchParams();
      n?.limit !== void 0 && s.set("limit", n.limit.toString()), n?.offset !== void 0 && s.set("offset", n.offset.toString()), n?.sortColumn && s.set("sortColumn", n.sortColumn), n?.sortOrder && s.set("sortOrder", n.sortOrder), n?.search && s.set("search", n.search);
      const o = s.toString(), l = o ? `${r.url}/bucket?${o}` : `${r.url}/bucket`;
      return await ks(r.fetch, l, { headers: r.headers });
    });
  }
  /**
  * @alpha
  *
  * Deletes an existing analytics bucket
  * A bucket can't be deleted with existing objects inside it
  * You must first empty the bucket before deletion
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Analytics Buckets
  * @param bucketName The unique identifier of the bucket you would like to delete
  * @returns Promise with response containing success message or error
  *
  * @example Delete analytics bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .analytics
  *   .deleteBucket('analytics-data')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully deleted"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - Deletes an analytics bucket
  */
  async deleteBucket(n) {
    var r = this;
    return r.handleOperation(async () => await Sl(r.fetch, `${r.url}/bucket/${n}`, {}, { headers: r.headers }));
  }
  /**
  * @alpha
  *
  * Get an Iceberg REST Catalog client configured for a specific analytics bucket
  * Use this to perform advanced table and namespace operations within the bucket
  * The returned client provides full access to the Apache Iceberg REST Catalog API
  * with the Supabase `{ data, error }` pattern for consistent error handling on all operations.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Analytics Buckets
  * @param bucketName - The name of the analytics bucket (warehouse) to connect to
  * @returns The wrapped Iceberg catalog client
  * @throws {StorageError} If the bucket name is invalid
  *
  * @example Get catalog and create table
  * ```js
  * // First, create an analytics bucket
  * const { data: bucket, error: bucketError } = await supabase
  *   .storage
  *   .analytics
  *   .createBucket('analytics-data')
  *
  * // Get the Iceberg catalog for that bucket
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // Create a namespace
  * const { error: nsError } = await catalog.createNamespace({ namespace: ['default'] })
  *
  * // Create a table with schema
  * const { data: tableMetadata, error: tableError } = await catalog.createTable(
  *   { namespace: ['default'] },
  *   {
  *     name: 'events',
  *     schema: {
  *       type: 'struct',
  *       fields: [
  *         { id: 1, name: 'id', type: 'long', required: true },
  *         { id: 2, name: 'timestamp', type: 'timestamp', required: true },
  *         { id: 3, name: 'user_id', type: 'string', required: false }
  *       ],
  *       'schema-id': 0,
  *       'identifier-field-ids': [1]
  *     },
  *     'partition-spec': {
  *       'spec-id': 0,
  *       fields: []
  *     },
  *     'write-order': {
  *       'order-id': 0,
  *       fields: []
  *     },
  *     properties: {
  *       'write.format.default': 'parquet'
  *     }
  *   }
  * )
  * ```
  *
  * @example List tables in namespace
  * ```js
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // List all tables in the default namespace
  * const { data: tables, error: listError } = await catalog.listTables({ namespace: ['default'] })
  * if (listError) {
  *   if (listError.isNotFound()) {
  *     console.log('Namespace not found')
  *   }
  *   return
  * }
  * console.log(tables) // [{ namespace: ['default'], name: 'events' }]
  * ```
  *
  * @example Working with namespaces
  * ```js
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // List all namespaces
  * const { data: namespaces } = await catalog.listNamespaces()
  *
  * // Create namespace with properties
  * await catalog.createNamespace(
  *   { namespace: ['production'] },
  *   { properties: { owner: 'data-team', env: 'prod' } }
  * )
  * ```
  *
  * @example Cleanup operations
  * ```js
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // Drop table with purge option (removes all data)
  * const { error: dropError } = await catalog.dropTable(
  *   { namespace: ['default'], name: 'events' },
  *   { purge: true }
  * )
  *
  * if (dropError?.isNotFound()) {
  *   console.log('Table does not exist')
  * }
  *
  * // Drop namespace (must be empty)
  * await catalog.dropNamespace({ namespace: ['default'] })
  * ```
  *
  * @remarks
  * This method provides a bridge between Supabase's bucket management and the standard
  * Apache Iceberg REST Catalog API. The bucket name maps to the Iceberg warehouse parameter.
  * All authentication and configuration is handled automatically using your Supabase credentials.
  *
  * **Error Handling**: Invalid bucket names throw immediately. All catalog
  * operations return `{ data, error }` where errors are `IcebergError` instances from iceberg-js.
  * Use helper methods like `error.isNotFound()` or check `error.status` for specific error handling.
  * Use `.throwOnError()` on the analytics client if you prefer exceptions for catalog operations.
  *
  * **Cleanup Operations**: When using `dropTable`, the `purge: true` option permanently
  * deletes all table data. Without it, the table is marked as deleted but data remains.
  *
  * **Library Dependency**: The returned catalog wraps `IcebergRestCatalog` from iceberg-js.
  * For complete API documentation and advanced usage, refer to the
  * [iceberg-js documentation](https://supabase.github.io/iceberg-js/).
  */
  from(n) {
    var r = this;
    if (!eg(n)) throw new Xi("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
    const s = new Km({
      baseUrl: this.url,
      catalogName: n,
      auth: {
        type: "custom",
        getHeaders: async () => r.headers
      },
      fetch: this.fetch
    }), o = this.shouldThrowOnError;
    return new Proxy(s, { get(l, c) {
      const d = l[c];
      return typeof d != "function" ? d : async (...f) => {
        try {
          return {
            data: await d.apply(l, f),
            error: null
          };
        } catch (p) {
          if (o) throw p;
          return {
            data: null,
            error: p
          };
        }
      };
    } });
  }
}, hg = class extends bn {
  /** Creates a new VectorIndexApi instance */
  constructor(n, r = {}, s) {
    const o = n.replace(/\/$/, ""), l = ne(ne({}, Es), {}, { "Content-Type": "application/json" }, r);
    super(o, l, s, "vectors");
  }
  /** Creates a new vector index within a bucket */
  async createIndex(n) {
    var r = this;
    return r.handleOperation(async () => await ht.post(r.fetch, `${r.url}/CreateIndex`, n, { headers: r.headers }) || {});
  }
  /** Retrieves metadata for a specific vector index */
  async getIndex(n, r) {
    var s = this;
    return s.handleOperation(async () => await ht.post(s.fetch, `${s.url}/GetIndex`, {
      vectorBucketName: n,
      indexName: r
    }, { headers: s.headers }));
  }
  /** Lists vector indexes within a bucket with optional filtering and pagination */
  async listIndexes(n) {
    var r = this;
    return r.handleOperation(async () => await ht.post(r.fetch, `${r.url}/ListIndexes`, n, { headers: r.headers }));
  }
  /** Deletes a vector index and all its data */
  async deleteIndex(n, r) {
    var s = this;
    return s.handleOperation(async () => await ht.post(s.fetch, `${s.url}/DeleteIndex`, {
      vectorBucketName: n,
      indexName: r
    }, { headers: s.headers }) || {});
  }
}, fg = class extends bn {
  /** Creates a new VectorDataApi instance */
  constructor(n, r = {}, s) {
    const o = n.replace(/\/$/, ""), l = ne(ne({}, Es), {}, { "Content-Type": "application/json" }, r);
    super(o, l, s, "vectors");
  }
  /** Inserts or updates vectors in batch (1-500 per request) */
  async putVectors(n) {
    var r = this;
    if (n.vectors.length < 1 || n.vectors.length > 500) throw new Error("Vector batch size must be between 1 and 500 items");
    return r.handleOperation(async () => await ht.post(r.fetch, `${r.url}/PutVectors`, n, { headers: r.headers }) || {});
  }
  /** Retrieves vectors by their keys in batch */
  async getVectors(n) {
    var r = this;
    return r.handleOperation(async () => await ht.post(r.fetch, `${r.url}/GetVectors`, n, { headers: r.headers }));
  }
  /** Lists vectors in an index with pagination */
  async listVectors(n) {
    var r = this;
    if (n.segmentCount !== void 0) {
      if (n.segmentCount < 1 || n.segmentCount > 16) throw new Error("segmentCount must be between 1 and 16");
      if (n.segmentIndex !== void 0 && (n.segmentIndex < 0 || n.segmentIndex >= n.segmentCount))
        throw new Error(`segmentIndex must be between 0 and ${n.segmentCount - 1}`);
    }
    return r.handleOperation(async () => await ht.post(r.fetch, `${r.url}/ListVectors`, n, { headers: r.headers }));
  }
  /** Queries for similar vectors using approximate nearest neighbor search */
  async queryVectors(n) {
    var r = this;
    return r.handleOperation(async () => await ht.post(r.fetch, `${r.url}/QueryVectors`, n, { headers: r.headers }));
  }
  /** Deletes vectors by their keys in batch (1-500 per request) */
  async deleteVectors(n) {
    var r = this;
    if (n.keys.length < 1 || n.keys.length > 500) throw new Error("Keys batch size must be between 1 and 500 items");
    return r.handleOperation(async () => await ht.post(r.fetch, `${r.url}/DeleteVectors`, n, { headers: r.headers }) || {});
  }
}, pg = class extends bn {
  /** Creates a new VectorBucketApi instance */
  constructor(n, r = {}, s) {
    const o = n.replace(/\/$/, ""), l = ne(ne({}, Es), {}, { "Content-Type": "application/json" }, r);
    super(o, l, s, "vectors");
  }
  /** Creates a new vector bucket */
  async createBucket(n) {
    var r = this;
    return r.handleOperation(async () => await ht.post(r.fetch, `${r.url}/CreateVectorBucket`, { vectorBucketName: n }, { headers: r.headers }) || {});
  }
  /** Retrieves metadata for a specific vector bucket */
  async getBucket(n) {
    var r = this;
    return r.handleOperation(async () => await ht.post(r.fetch, `${r.url}/GetVectorBucket`, { vectorBucketName: n }, { headers: r.headers }));
  }
  /** Lists vector buckets with optional filtering and pagination */
  async listBuckets(n = {}) {
    var r = this;
    return r.handleOperation(async () => await ht.post(r.fetch, `${r.url}/ListVectorBuckets`, n, { headers: r.headers }));
  }
  /** Deletes a vector bucket (must be empty first) */
  async deleteBucket(n) {
    var r = this;
    return r.handleOperation(async () => await ht.post(r.fetch, `${r.url}/DeleteVectorBucket`, { vectorBucketName: n }, { headers: r.headers }) || {});
  }
}, mg = class extends pg {
  /**
  * @alpha
  *
  * Creates a StorageVectorsClient that can manage buckets, indexes, and vectors.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param url - Base URL of the Storage Vectors REST API.
  * @param options.headers - Optional headers (for example `Authorization`) applied to every request.
  * @param options.fetch - Optional custom `fetch` implementation for non-browser runtimes.
  *
  * @example Using supabase-js (recommended)
  * ```typescript
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * ```
  *
  * @example Standalone import for bundle-sensitive environments
  * ```typescript
  * import { StorageVectorsClient } from '@supabase/storage-js'
  *
  * const client = new StorageVectorsClient(url, options)
  * ```
  */
  constructor(n, r = {}) {
    super(n, r.headers || {}, r.fetch);
  }
  /**
  *
  * @alpha
  *
  * Access operations for a specific vector bucket
  * Returns a scoped client for index and vector operations within the bucket
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param vectorBucketName - Name of the vector bucket
  * @returns Bucket-scoped client with index and vector operations
  *
  * @example Accessing a vector bucket
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * ```
  */
  from(n) {
    return new gg(this.url, this.headers, n, this.fetch);
  }
  /**
  *
  * @alpha
  *
  * Creates a new vector bucket
  * Vector buckets are containers for vector indexes and their data
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param vectorBucketName - Unique name for the vector bucket
  * @returns Promise with empty response on success or error
  *
  * @example Creating a vector bucket
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .createBucket('embeddings-prod')
  * ```
  */
  async createBucket(n) {
    var r = () => super.createBucket, s = this;
    return r().call(s, n);
  }
  /**
  *
  * @alpha
  *
  * Retrieves metadata for a specific vector bucket
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param vectorBucketName - Name of the vector bucket
  * @returns Promise with bucket metadata or error
  *
  * @example Get bucket metadata
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .getBucket('embeddings-prod')
  *
  * console.log('Bucket created:', data?.vectorBucket.creationTime)
  * ```
  */
  async getBucket(n) {
    var r = () => super.getBucket, s = this;
    return r().call(s, n);
  }
  /**
  *
  * @alpha
  *
  * Lists all vector buckets with optional filtering and pagination
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Optional filters (prefix, maxResults, nextToken)
  * @returns Promise with list of buckets or error
  *
  * @example List vector buckets
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .listBuckets({ prefix: 'embeddings-' })
  *
  * data?.vectorBuckets.forEach(bucket => {
  *   console.log(bucket.vectorBucketName)
  * })
  * ```
  */
  async listBuckets(n = {}) {
    var r = () => super.listBuckets, s = this;
    return r().call(s, n);
  }
  /**
  *
  * @alpha
  *
  * Deletes a vector bucket (bucket must be empty)
  * All indexes must be deleted before deleting the bucket
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param vectorBucketName - Name of the vector bucket to delete
  * @returns Promise with empty response on success or error
  *
  * @example Delete a vector bucket
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .deleteBucket('embeddings-old')
  * ```
  */
  async deleteBucket(n) {
    var r = () => super.deleteBucket, s = this;
    return r().call(s, n);
  }
}, gg = class extends hg {
  /**
  * @alpha
  *
  * Creates a helper that automatically scopes all index operations to the provided bucket.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @example Creating a vector bucket scope
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * ```
  */
  constructor(n, r, s, o) {
    super(n, r, o), this.vectorBucketName = s;
  }
  /**
  *
  * @alpha
  *
  * Creates a new vector index in this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Index configuration (vectorBucketName is automatically set)
  * @returns Promise with empty response on success or error
  *
  * @example Creating a vector index
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * await bucket.createIndex({
  *   indexName: 'documents-openai',
  *   dataType: 'float32',
  *   dimension: 1536,
  *   distanceMetric: 'cosine',
  *   metadataConfiguration: {
  *     nonFilterableMetadataKeys: ['raw_text']
  *   }
  * })
  * ```
  */
  async createIndex(n) {
    var r = () => super.createIndex, s = this;
    return r().call(s, ne(ne({}, n), {}, { vectorBucketName: s.vectorBucketName }));
  }
  /**
  *
  * @alpha
  *
  * Lists indexes in this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Listing options (vectorBucketName is automatically set)
  * @returns Promise with response containing indexes array and pagination token or error
  *
  * @example List indexes
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * const { data } = await bucket.listIndexes({ prefix: 'documents-' })
  * ```
  */
  async listIndexes(n = {}) {
    var r = () => super.listIndexes, s = this;
    return r().call(s, ne(ne({}, n), {}, { vectorBucketName: s.vectorBucketName }));
  }
  /**
  *
  * @alpha
  *
  * Retrieves metadata for a specific index in this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param indexName - Name of the index to retrieve
  * @returns Promise with index metadata or error
  *
  * @example Get index metadata
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * const { data } = await bucket.getIndex('documents-openai')
  * console.log('Dimension:', data?.index.dimension)
  * ```
  */
  async getIndex(n) {
    var r = () => super.getIndex, s = this;
    return r().call(s, s.vectorBucketName, n);
  }
  /**
  *
  * @alpha
  *
  * Deletes an index from this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param indexName - Name of the index to delete
  * @returns Promise with empty response on success or error
  *
  * @example Delete an index
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * await bucket.deleteIndex('old-index')
  * ```
  */
  async deleteIndex(n) {
    var r = () => super.deleteIndex, s = this;
    return r().call(s, s.vectorBucketName, n);
  }
  /**
  *
  * @alpha
  *
  * Access operations for a specific index within this bucket
  * Returns a scoped client for vector data operations
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param indexName - Name of the index
  * @returns Index-scoped client with vector data operations
  *
  * @example Accessing an index
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  *
  * // Insert vectors
  * await index.putVectors({
  *   vectors: [
  *     { key: 'doc-1', data: { float32: [...] }, metadata: { title: 'Intro' } }
  *   ]
  * })
  *
  * // Query similar vectors
  * const { data } = await index.queryVectors({
  *   queryVector: { float32: [...] },
  *   topK: 5
  * })
  * ```
  */
  index(n) {
    return new yg(this.url, this.headers, this.vectorBucketName, n, this.fetch);
  }
}, yg = class extends fg {
  /**
  *
  * @alpha
  *
  * Creates a helper that automatically scopes all vector operations to the provided bucket/index names.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @example Creating a vector index scope
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * ```
  */
  constructor(n, r, s, o, l) {
    super(n, r, l), this.vectorBucketName = s, this.indexName = o;
  }
  /**
  *
  * @alpha
  *
  * Inserts or updates vectors in this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Vector insertion options (bucket and index names automatically set)
  * @returns Promise with empty response on success or error
  *
  * @example Insert vectors into an index
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * await index.putVectors({
  *   vectors: [
  *     {
  *       key: 'doc-1',
  *       data: { float32: [0.1, 0.2, ...] },
  *       metadata: { title: 'Introduction', page: 1 }
  *     }
  *   ]
  * })
  * ```
  */
  async putVectors(n) {
    var r = () => super.putVectors, s = this;
    return r().call(s, ne(ne({}, n), {}, {
      vectorBucketName: s.vectorBucketName,
      indexName: s.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Retrieves vectors by keys from this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Vector retrieval options (bucket and index names automatically set)
  * @returns Promise with response containing vectors array or error
  *
  * @example Get vectors by keys
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * const { data } = await index.getVectors({
  *   keys: ['doc-1', 'doc-2'],
  *   returnMetadata: true
  * })
  * ```
  */
  async getVectors(n) {
    var r = () => super.getVectors, s = this;
    return r().call(s, ne(ne({}, n), {}, {
      vectorBucketName: s.vectorBucketName,
      indexName: s.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Lists vectors in this index with pagination
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Listing options (bucket and index names automatically set)
  * @returns Promise with response containing vectors array and pagination token or error
  *
  * @example List vectors with pagination
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * const { data } = await index.listVectors({
  *   maxResults: 500,
  *   returnMetadata: true
  * })
  * ```
  */
  async listVectors(n = {}) {
    var r = () => super.listVectors, s = this;
    return r().call(s, ne(ne({}, n), {}, {
      vectorBucketName: s.vectorBucketName,
      indexName: s.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Queries for similar vectors in this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Query options (bucket and index names automatically set)
  * @returns Promise with response containing matches array of similar vectors ordered by distance or error
  *
  * @example Query similar vectors
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * const { data } = await index.queryVectors({
  *   queryVector: { float32: [0.1, 0.2, ...] },
  *   topK: 5,
  *   filter: { category: 'technical' },
  *   returnDistance: true,
  *   returnMetadata: true
  * })
  * ```
  */
  async queryVectors(n) {
    var r = () => super.queryVectors, s = this;
    return r().call(s, ne(ne({}, n), {}, {
      vectorBucketName: s.vectorBucketName,
      indexName: s.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Deletes vectors by keys from this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Deletion options (bucket and index names automatically set)
  * @returns Promise with empty response on success or error
  *
  * @example Delete vectors by keys
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * await index.deleteVectors({
  *   keys: ['doc-1', 'doc-2', 'doc-3']
  * })
  * ```
  */
  async deleteVectors(n) {
    var r = () => super.deleteVectors, s = this;
    return r().call(s, ne(ne({}, n), {}, {
      vectorBucketName: s.vectorBucketName,
      indexName: s.indexName
    }));
  }
}, vg = class extends cg {
  /**
  * Creates a client for Storage buckets, files, analytics, and vectors.
  *
  * @category Storage
  * @subcategory File Buckets
  *
  * @example Using supabase-js (recommended)
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const avatars = supabase.storage.from('avatars')
  * ```
  *
  * @example Standalone import for bundle-sensitive environments
  * ```ts
  * import { StorageClient } from '@supabase/storage-js'
  *
  * const storage = new StorageClient('https://xyzcompany.supabase.co/storage/v1', {
  *   apikey: 'your-publishable-key',
  * })
  * const avatars = storage.from('avatars')
  * ```
  */
  constructor(n, r = {}, s, o) {
    super(n, r, s, o);
  }
  /**
  * Perform file operation in a bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  *
  * @param id The bucket id to operate on.
  *
  * @example Accessing a bucket
  * ```typescript
  * const avatars = supabase.storage.from('avatars')
  * ```
  */
  from(n) {
    return new lg(this.url, this.headers, n, this.fetch);
  }
  /**
  *
  * @alpha
  *
  * Access vector storage operations.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  *
  * @returns A StorageVectorsClient instance configured with the current storage settings.
  */
  get vectors() {
    return new mg(this.url + "/vector", {
      headers: this.headers,
      fetch: this.fetch
    });
  }
  /**
  *
  * @alpha
  *
  * Access analytics storage operations using Iceberg tables.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Analytics Buckets
  *
  * @returns A StorageAnalyticsClient instance configured with the current storage settings.
  */
  get analytics() {
    return new dg(this.url + "/iceberg", this.headers, this.fetch);
  }
};
const Eh = "2.106.2", vn = 30 * 1e3, ml = 3, el = ml * vn, wg = "http://localhost:9999", _g = "supabase.auth.token", kg = { "X-Client-Info": `gotrue-js/${Eh}` }, gl = "X-Supabase-Api-Version", xh = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
}, Sg = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, bg = 600 * 1e3;
class Sn extends Error {
  constructor(r, s, o) {
    super(r), this.__isAuthError = !0, this.name = "AuthError", this.status = s, this.code = o;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      code: this.code
    };
  }
}
function B(n) {
  return typeof n == "object" && n !== null && "__isAuthError" in n;
}
class Eg extends Sn {
  constructor(r, s, o) {
    super(r, s, o), this.name = "AuthApiError", this.status = s, this.code = o;
  }
}
function xg(n) {
  return B(n) && n.name === "AuthApiError";
}
class At extends Sn {
  constructor(r, s) {
    super(r), this.name = "AuthUnknownError", this.originalError = s;
  }
}
class Zt extends Sn {
  constructor(r, s, o, l) {
    super(r, o, l), this.name = s, this.status = o;
  }
}
class Be extends Zt {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function Mi(n) {
  return B(n) && n.name === "AuthSessionMissingError";
}
class fn extends Zt {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class Bi extends Zt {
  constructor(r) {
    super(r, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class zi extends Zt {
  constructor(r, s = null) {
    super(r, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = s;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { details: this.details });
  }
}
function Tg(n) {
  return B(n) && n.name === "AuthImplicitGrantRedirectError";
}
class Md extends Zt {
  constructor(r, s = null) {
    super(r, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = s;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { details: this.details });
  }
}
class Cg extends Zt {
  constructor() {
    super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.", "AuthPKCECodeVerifierMissingError", 400, "pkce_code_verifier_not_found");
  }
}
class yl extends Zt {
  constructor(r, s) {
    super(r, "AuthRetryableFetchError", s, void 0);
  }
}
function tl(n) {
  return B(n) && n.name === "AuthRetryableFetchError";
}
class Bd extends Zt {
  constructor(r, s, o) {
    super(r, "AuthWeakPasswordError", s, "weak_password"), this.reasons = o;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { reasons: this.reasons });
  }
}
class vl extends Zt {
  constructor(r) {
    super(r, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const Ki = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), zd = ` 	
\r=`.split(""), Rg = (() => {
  const n = new Array(128);
  for (let r = 0; r < n.length; r += 1)
    n[r] = -1;
  for (let r = 0; r < zd.length; r += 1)
    n[zd[r].charCodeAt(0)] = -2;
  for (let r = 0; r < Ki.length; r += 1)
    n[Ki[r].charCodeAt(0)] = r;
  return n;
})();
function Fd(n, r, s) {
  if (n !== null)
    for (r.queue = r.queue << 8 | n, r.queuedBits += 8; r.queuedBits >= 6; ) {
      const o = r.queue >> r.queuedBits - 6 & 63;
      s(Ki[o]), r.queuedBits -= 6;
    }
  else if (r.queuedBits > 0)
    for (r.queue = r.queue << 6 - r.queuedBits, r.queuedBits = 6; r.queuedBits >= 6; ) {
      const o = r.queue >> r.queuedBits - 6 & 63;
      s(Ki[o]), r.queuedBits -= 6;
    }
}
function Th(n, r, s) {
  const o = Rg[n];
  if (o > -1)
    for (r.queue = r.queue << 6 | o, r.queuedBits += 6; r.queuedBits >= 8; )
      s(r.queue >> r.queuedBits - 8 & 255), r.queuedBits -= 8;
  else {
    if (o === -2)
      return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(n)}"`);
  }
}
function Hd(n) {
  const r = [], s = (d) => {
    r.push(String.fromCodePoint(d));
  }, o = {
    utf8seq: 0,
    codepoint: 0
  }, l = { queue: 0, queuedBits: 0 }, c = (d) => {
    Ag(d, o, s);
  };
  for (let d = 0; d < n.length; d += 1)
    Th(n.charCodeAt(d), l, c);
  return r.join("");
}
function jg(n, r) {
  if (n <= 127) {
    r(n);
    return;
  } else if (n <= 2047) {
    r(192 | n >> 6), r(128 | n & 63);
    return;
  } else if (n <= 65535) {
    r(224 | n >> 12), r(128 | n >> 6 & 63), r(128 | n & 63);
    return;
  } else if (n <= 1114111) {
    r(240 | n >> 18), r(128 | n >> 12 & 63), r(128 | n >> 6 & 63), r(128 | n & 63);
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${n.toString(16)}`);
}
function Pg(n, r) {
  for (let s = 0; s < n.length; s += 1) {
    let o = n.charCodeAt(s);
    if (o > 55295 && o <= 56319) {
      const l = (o - 55296) * 1024 & 65535;
      o = (n.charCodeAt(s + 1) - 56320 & 65535 | l) + 65536, s += 1;
    }
    jg(o, r);
  }
}
function Ag(n, r, s) {
  if (r.utf8seq === 0) {
    if (n <= 127) {
      s(n);
      return;
    }
    for (let o = 1; o < 6; o += 1)
      if ((n >> 7 - o & 1) === 0) {
        r.utf8seq = o;
        break;
      }
    if (r.utf8seq === 2)
      r.codepoint = n & 31;
    else if (r.utf8seq === 3)
      r.codepoint = n & 15;
    else if (r.utf8seq === 4)
      r.codepoint = n & 7;
    else
      throw new Error("Invalid UTF-8 sequence");
    r.utf8seq -= 1;
  } else if (r.utf8seq > 0) {
    if (n <= 127)
      throw new Error("Invalid UTF-8 sequence");
    r.codepoint = r.codepoint << 6 | n & 63, r.utf8seq -= 1, r.utf8seq === 0 && s(r.codepoint);
  }
}
function kn(n) {
  const r = [], s = { queue: 0, queuedBits: 0 }, o = (l) => {
    r.push(l);
  };
  for (let l = 0; l < n.length; l += 1)
    Th(n.charCodeAt(l), s, o);
  return new Uint8Array(r);
}
function Og(n) {
  const r = [];
  return Pg(n, (s) => r.push(s)), new Uint8Array(r);
}
function Dr(n) {
  const r = [], s = { queue: 0, queuedBits: 0 }, o = (l) => {
    r.push(l);
  };
  return n.forEach((l) => Fd(l, s, o)), Fd(null, s, o), r.join("");
}
function Ng(n) {
  return Math.round(Date.now() / 1e3) + n;
}
function Ig() {
  return /* @__PURE__ */ Symbol("auth-callback");
}
const qe = () => typeof window < "u" && typeof document < "u", Lr = {
  tested: !1,
  writable: !1
}, Ch = () => {
  if (!qe())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (Lr.tested)
    return Lr.writable;
  const n = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(n, n), globalThis.localStorage.removeItem(n), Lr.tested = !0, Lr.writable = !0;
  } catch {
    Lr.tested = !0, Lr.writable = !1;
  }
  return Lr.writable;
};
function Lg(n) {
  const r = {}, s = new URL(n);
  if (s.hash && s.hash[0] === "#")
    try {
      new URLSearchParams(s.hash.substring(1)).forEach((l, c) => {
        r[c] = l;
      });
    } catch {
    }
  return s.searchParams.forEach((o, l) => {
    r[l] = o;
  }), r;
}
const Rh = (n) => n ? (...r) => n(...r) : (...r) => fetch(...r), $g = (n) => typeof n == "object" && n !== null && "status" in n && "ok" in n && "json" in n && typeof n.json == "function", wn = async (n, r, s) => {
  await n.setItem(r, JSON.stringify(s));
}, $r = async (n, r) => {
  const s = await n.getItem(r);
  if (!s)
    return null;
  try {
    return JSON.parse(s);
  } catch {
    return null;
  }
}, He = async (n, r) => {
  await n.removeItem(r);
};
class eo {
  constructor() {
    this.promise = new eo.promiseConstructor((r, s) => {
      this.resolve = r, this.reject = s;
    });
  }
}
eo.promiseConstructor = Promise;
function Fi(n) {
  const r = n.split(".");
  if (r.length !== 3)
    throw new vl("Invalid JWT structure");
  for (let o = 0; o < r.length; o++)
    if (!Sg.test(r[o]))
      throw new vl("JWT not in base64url format");
  return {
    // using base64url lib
    header: JSON.parse(Hd(r[0])),
    payload: JSON.parse(Hd(r[1])),
    signature: kn(r[2]),
    raw: {
      header: r[0],
      payload: r[1]
    }
  };
}
async function Ug(n) {
  return await new Promise((r) => {
    setTimeout(() => r(null), n);
  });
}
function Dg(n, r) {
  return new Promise((o, l) => {
    (async () => {
      for (let c = 0; c < 1 / 0; c++)
        try {
          const d = await n(c);
          if (!r(c, null, d)) {
            o(d);
            return;
          }
        } catch (d) {
          if (!r(c, d)) {
            l(d);
            return;
          }
        }
    })();
  });
}
function Mg(n) {
  return ("0" + n.toString(16)).substr(-2);
}
function Bg() {
  const r = new Uint32Array(56);
  if (typeof crypto > "u") {
    const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", o = s.length;
    let l = "";
    for (let c = 0; c < 56; c++)
      l += s.charAt(Math.floor(Math.random() * o));
    return l;
  }
  return crypto.getRandomValues(r), Array.from(r, Mg).join("");
}
async function zg(n) {
  const s = new TextEncoder().encode(n), o = await crypto.subtle.digest("SHA-256", s), l = new Uint8Array(o);
  return Array.from(l).map((c) => String.fromCharCode(c)).join("");
}
async function Fg(n) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), n;
  const s = await zg(n);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function pn(n, r, s = !1) {
  const o = Bg();
  let l = o;
  s && (l += "/recovery"), await wn(n, `${r}-code-verifier`, l);
  const c = await Fg(o);
  return [c, o === c ? "plain" : "s256"];
}
const Hg = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function qg(n) {
  const r = n.headers.get(gl);
  if (!r || !r.match(Hg))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${r}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function Wg(n) {
  if (!n)
    throw new Error("Missing exp claim");
  const r = Math.floor(Date.now() / 1e3);
  if (n <= r)
    throw new Error("JWT has expired");
}
function Vg(n) {
  switch (n) {
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: { name: "SHA-256" }
      };
    case "ES256":
      return {
        name: "ECDSA",
        namedCurve: "P-256",
        hash: { name: "SHA-256" }
      };
    default:
      throw new Error("Invalid alg claim");
  }
}
const Kg = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function Qt(n) {
  if (!Kg.test(n))
    throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
function jt(n) {
  if (!n.passkey)
    throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).");
}
function rl() {
  const n = {};
  return new Proxy(n, {
    get: (r, s) => {
      if (s === "__isUserNotAvailableProxy")
        return !0;
      if (typeof s == "symbol") {
        const o = s.toString();
        if (o === "Symbol(Symbol.toPrimitive)" || o === "Symbol(Symbol.toStringTag)" || o === "Symbol(util.inspect.custom)")
          return;
      }
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${s}" property of the session object is not supported. Please use getUser() instead.`);
    },
    set: (r, s) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    },
    deleteProperty: (r, s) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    }
  });
}
function Gg(n, r) {
  return new Proxy(n, {
    get: (s, o, l) => {
      if (o === "__isInsecureUserWarningProxy")
        return !0;
      if (typeof o == "symbol") {
        const c = o.toString();
        if (c === "Symbol(Symbol.toPrimitive)" || c === "Symbol(Symbol.toStringTag)" || c === "Symbol(util.inspect.custom)" || c === "Symbol(nodejs.util.inspect.custom)")
          return Reflect.get(s, o, l);
      }
      return !r.value && typeof o == "string" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), r.value = !0), Reflect.get(s, o, l);
    }
  });
}
function qd(n) {
  return JSON.parse(JSON.stringify(n));
}
const Ur = (n) => {
  if (typeof n == "object" && n !== null) {
    const r = n;
    if (typeof r.msg == "string")
      return r.msg;
    if (typeof r.message == "string")
      return r.message;
    if (typeof r.error_description == "string")
      return r.error_description;
    if (typeof r.error == "string")
      return r.error;
  }
  return JSON.stringify(n);
}, Jg = [502, 503, 504, 520, 521, 522, 523, 524, 530];
async function Wd(n) {
  var r;
  if (!$g(n))
    throw new yl(Ur(n), 0);
  if (Jg.includes(n.status))
    throw new yl(Ur(n), n.status);
  let s;
  try {
    s = await n.json();
  } catch (c) {
    throw new At(Ur(c), c);
  }
  let o;
  const l = qg(n);
  if (l && l.getTime() >= xh["2024-01-01"].timestamp && typeof s == "object" && s && typeof s.code == "string" ? o = s.code : typeof s == "object" && s && typeof s.error_code == "string" && (o = s.error_code), o) {
    if (o === "weak_password")
      throw new Bd(Ur(s), n.status, ((r = s.weak_password) === null || r === void 0 ? void 0 : r.reasons) || []);
    if (o === "session_not_found")
      throw new Be();
  } else if (typeof s == "object" && s && typeof s.weak_password == "object" && s.weak_password && Array.isArray(s.weak_password.reasons) && s.weak_password.reasons.length && s.weak_password.reasons.reduce((c, d) => c && typeof d == "string", !0))
    throw new Bd(Ur(s), n.status, s.weak_password.reasons);
  throw new Eg(Ur(s), n.status || 500, o);
}
const Qg = (n, r, s, o) => {
  const l = { method: n, headers: r?.headers || {} };
  return n === "GET" ? l : (l.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, r?.headers), l.body = JSON.stringify(o), Object.assign(Object.assign({}, l), s));
};
async function J(n, r, s, o) {
  var l;
  const c = Object.assign({}, o?.headers);
  c[gl] || (c[gl] = xh["2024-01-01"].name), o?.jwt && (c.Authorization = `Bearer ${o.jwt}`);
  const d = (l = o?.query) !== null && l !== void 0 ? l : {};
  o?.redirectTo && (d.redirect_to = o.redirectTo);
  const f = Object.keys(d).length ? "?" + new URLSearchParams(d).toString() : "", p = await Yg(n, r, s + f, {
    headers: c,
    noResolveJson: o?.noResolveJson
  }, {}, o?.body);
  return o?.xform ? o?.xform(p) : { data: Object.assign({}, p), error: null };
}
async function Yg(n, r, s, o, l, c) {
  const d = Qg(r, o, l, c);
  let f;
  try {
    f = await n(s, Object.assign({}, d));
  } catch (p) {
    throw console.error(p), new yl(Ur(p), 0);
  }
  if (f.ok || await Wd(f), o?.noResolveJson)
    return f;
  try {
    return await f.json();
  } catch (p) {
    await Wd(p);
  }
}
function kt(n) {
  var r;
  let s = null;
  ey(n) && (s = Object.assign({}, n), n.expires_at || (s.expires_at = Ng(n.expires_in)));
  const o = (r = n.user) !== null && r !== void 0 ? r : typeof n?.id == "string" ? n : null;
  return { data: { session: s, user: o }, error: null };
}
function Vd(n) {
  const r = kt(n);
  return !r.error && n.weak_password && typeof n.weak_password == "object" && Array.isArray(n.weak_password.reasons) && n.weak_password.reasons.length && n.weak_password.message && typeof n.weak_password.message == "string" && n.weak_password.reasons.reduce((s, o) => s && typeof o == "string", !0) && (r.data.weak_password = n.weak_password), r;
}
function _r(n) {
  var r;
  return { data: { user: (r = n.user) !== null && r !== void 0 ? r : n }, error: null };
}
function Xg(n) {
  return { data: n, error: null };
}
function Zg(n) {
  const { action_link: r, email_otp: s, hashed_token: o, redirect_to: l, verification_type: c } = n, d = Yi(n, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), f = {
    action_link: r,
    email_otp: s,
    hashed_token: o,
    redirect_to: l,
    verification_type: c
  }, p = Object.assign({}, d);
  return {
    data: {
      properties: f,
      user: p
    },
    error: null
  };
}
function Kd(n) {
  return n;
}
function ey(n) {
  return !!n.access_token && !!n.refresh_token && !!n.expires_in;
}
const nl = ["global", "local", "others"];
class ty {
  _encodePathSegment(r) {
    if (r === "." || r === "..")
      throw new Sn("Invalid path segment");
    return encodeURIComponent(r);
  }
  /**
   * Creates an admin API client that can be used to manage users and OAuth clients.
   *
   * @example Using supabase-js (recommended)
   * ```ts
   * import { createClient } from '@supabase/supabase-js'
   *
   * const supabase = createClient('https://xyzcompany.supabase.co', 'your-secret-key')
   * const { data, error } = await supabase.auth.admin.listUsers()
   * ```
   *
   * @example Standalone import for bundle-sensitive environments
   * ```ts
   * import { GoTrueAdminApi } from '@supabase/auth-js'
   *
   * const admin = new GoTrueAdminApi({
   *   url: 'https://xyzcompany.supabase.co/auth/v1',
   *   headers: { Authorization: `Bearer ${process.env.SUPABASE_SECRET_KEY}` },
   * })
   * ```
   */
  constructor({ url: r = "", headers: s = {}, fetch: o, experimental: l }) {
    this.url = r, this.headers = s, this.fetch = Rh(o), this.experimental = l ?? {}, this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    }, this.oauth = {
      listClients: this._listOAuthClients.bind(this),
      createClient: this._createOAuthClient.bind(this),
      getClient: this._getOAuthClient.bind(this),
      updateClient: this._updateOAuthClient.bind(this),
      deleteClient: this._deleteOAuthClient.bind(this),
      regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
    }, this.customProviders = {
      listProviders: this._listCustomProviders.bind(this),
      createProvider: this._createCustomProvider.bind(this),
      getProvider: this._getCustomProvider.bind(this),
      updateProvider: this._updateCustomProvider.bind(this),
      deleteProvider: this._deleteCustomProvider.bind(this)
    }, this.passkey = {
      listPasskeys: this._adminListPasskeys.bind(this),
      deletePasskey: this._adminDeletePasskey.bind(this)
    };
  }
  /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   * @param scope The logout sope.
   *
   * @category Auth
   * @subcategory Auth Admin
   */
  async signOut(r, s = nl[0]) {
    if (nl.indexOf(s) < 0)
      throw new Error(`@supabase/auth-js: Parameter scope must be one of ${nl.join(", ")}`);
    try {
      return await J(this.fetch, "POST", `${this.url}/logout?scope=${s}`, {
        headers: this.headers,
        jwt: r,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (o) {
      if (B(o))
        return { data: null, error: o };
      throw o;
    }
  }
  /**
   * Sends an invite link to an email address.
   * @param email The email address of the user.
   * @param options Additional options to be included when inviting.
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @remarks
   * - Sends an invite link to the user's email address.
   * - The `inviteUserByEmail()` method is typically used by administrators to invite users to join the application.
   * - Note that PKCE is not supported when using `inviteUserByEmail`. This is because the browser initiating the invite is often different from the browser accepting the invite which makes it difficult to provide the security guarantees required of the PKCE flow.
   *
   * @example Invite a user
   * ```js
   * const { data, error } = await supabase.auth.admin.inviteUserByEmail('email@example.com')
   * ```
   *
   * @exampleResponse Invite a user
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "invited_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmation_sent_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {},
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     }
   *   },
   *   "error": null
   * }
   * ```
   */
  async inviteUserByEmail(r, s = {}) {
    try {
      return await J(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: r, data: s.data },
        headers: this.headers,
        redirectTo: s.redirectTo,
        xform: _r
      });
    } catch (o) {
      if (B(o))
        return { data: { user: null }, error: o };
      throw o;
    }
  }
  /**
   * Generates email links and OTPs to be sent via a custom email provider.
   * @param email The user's email.
   * @param options.password User password. For signup only.
   * @param options.data Optional user metadata. For signup only.
   * @param options.redirectTo The redirect url which should be appended to the generated link
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @remarks
   * - The following types can be passed into `generateLink()`: `signup`, `magiclink`, `invite`, `recovery`, `email_change_current`, `email_change_new`, `phone_change`.
   * - `generateLink()` only generates the email link for `email_change_email` if the **Secure email change** is enabled in your project's [email auth provider settings](/dashboard/project/_/auth/providers).
   * - `generateLink()` handles the creation of the user for `signup`, `invite` and `magiclink`.
   *
   * @example Generate a signup link
   * ```js
   * const { data, error } = await supabase.auth.admin.generateLink({
   *   type: 'signup',
   *   email: 'email@example.com',
   *   password: 'secret'
   * })
   * ```
   *
   * @exampleResponse Generate a signup link
   * ```json
   * {
   *   "data": {
   *     "properties": {
   *       "action_link": "<LINK_TO_SEND_TO_USER>",
   *       "email_otp": "999999",
   *       "hashed_token": "<HASHED_TOKEN",
   *       "redirect_to": "<REDIRECT_URL>",
   *       "verification_type": "signup"
   *     },
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "email@example.com",
   *       "phone": "",
   *       "confirmation_sent_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {},
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "email@example.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "email@example.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Generate an invite link
   * ```js
   * const { data, error } = await supabase.auth.admin.generateLink({
   *   type: 'invite',
   *   email: 'email@example.com'
   * })
   * ```
   *
   * @example Generate a magic link
   * ```js
   * const { data, error } = await supabase.auth.admin.generateLink({
   *   type: 'magiclink',
   *   email: 'email@example.com'
   * })
   * ```
   *
   * @example Generate a recovery link
   * ```js
   * const { data, error } = await supabase.auth.admin.generateLink({
   *   type: 'recovery',
   *   email: 'email@example.com'
   * })
   * ```
   *
   * @example Generate links to change current email address
   * ```js
   * // generate an email change link to be sent to the current email address
   * const { data, error } = await supabase.auth.admin.generateLink({
   *   type: 'email_change_current',
   *   email: 'current.email@example.com',
   *   newEmail: 'new.email@example.com'
   * })
   *
   * // generate an email change link to be sent to the new email address
   * const { data, error } = await supabase.auth.admin.generateLink({
   *   type: 'email_change_new',
   *   email: 'current.email@example.com',
   *   newEmail: 'new.email@example.com'
   * })
   * ```
   */
  async generateLink(r) {
    try {
      const { options: s } = r, o = Yi(r, ["options"]), l = Object.assign(Object.assign({}, o), s);
      return "newEmail" in o && (l.new_email = o?.newEmail, delete l.newEmail), await J(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: l,
        headers: this.headers,
        xform: Zg,
        redirectTo: s?.redirectTo
      });
    } catch (s) {
      if (B(s))
        return {
          data: {
            properties: null,
            user: null
          },
          error: s
        };
      throw s;
    }
  }
  // User Admin API
  /**
   * Creates a new user.
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @remarks
   * - To confirm the user's email address or phone number, set `email_confirm` or `phone_confirm` to true. Both arguments default to false.
   * - `createUser()` will not send a confirmation email to the user. You can use [`inviteUserByEmail()`](/docs/reference/javascript/auth-admin-inviteuserbyemail) if you want to send them an email invite instead.
   * - If you are sure that the created user's email or phone number is legitimate and verified, you can set the `email_confirm` or `phone_confirm` param to `true`.
   *
   * @example With custom user metadata
   * ```js
   * const { data, error } = await supabase.auth.admin.createUser({
   *   email: 'user@email.com',
   *   password: 'password',
   *   user_metadata: { name: 'Yoda' }
   * })
   * ```
   *
   * @exampleResponse With custom user metadata
   * ```json
   * {
   *   data: {
   *     user: {
   *       id: '1',
   *       aud: 'authenticated',
   *       role: 'authenticated',
   *       email: 'example@email.com',
   *       email_confirmed_at: '2024-01-01T00:00:00Z',
   *       phone: '',
   *       confirmation_sent_at: '2024-01-01T00:00:00Z',
   *       confirmed_at: '2024-01-01T00:00:00Z',
   *       last_sign_in_at: '2024-01-01T00:00:00Z',
   *       app_metadata: {},
   *       user_metadata: {},
   *       identities: [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "1",
   *           "user_id": "1",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": true,
   *             "phone_verified": false,
   *             "sub": "1"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "email@example.com"
   *         },
   *       ],
   *       created_at: '2024-01-01T00:00:00Z',
   *       updated_at: '2024-01-01T00:00:00Z',
   *       is_anonymous: false,
   *     }
   *   }
   *   error: null
   * }
   * ```
   *
   * @example Auto-confirm the user's email
   * ```js
   * const { data, error } = await supabase.auth.admin.createUser({
   *   email: 'user@email.com',
   *   email_confirm: true
   * })
   * ```
   *
   * @example Auto-confirm the user's phone number
   * ```js
   * const { data, error } = await supabase.auth.admin.createUser({
   *   phone: '1234567890',
   *   phone_confirm: true
   * })
   * ```
   */
  async createUser(r) {
    try {
      return await J(this.fetch, "POST", `${this.url}/admin/users`, {
        body: r,
        headers: this.headers,
        xform: _r
      });
    } catch (s) {
      if (B(s))
        return { data: { user: null }, error: s };
      throw s;
    }
  }
  /**
   * Get a list of users.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @remarks
   * - Defaults to return 50 users per page.
   *
   * @example Get a page of users
   * ```js
   * const { data: { users }, error } = await supabase.auth.admin.listUsers()
   * ```
   *
   * @example Paginated list of users
   * ```js
   * const { data: { users }, error } = await supabase.auth.admin.listUsers({
   *   page: 1,
   *   perPage: 1000
   * })
   * ```
   */
  async listUsers(r) {
    var s, o, l, c, d, f, p;
    try {
      const g = { nextPage: null, lastPage: 0, total: 0 }, v = await J(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (o = (s = r?.page) === null || s === void 0 ? void 0 : s.toString()) !== null && o !== void 0 ? o : "",
          per_page: (c = (l = r?.perPage) === null || l === void 0 ? void 0 : l.toString()) !== null && c !== void 0 ? c : ""
        },
        xform: Kd
      });
      if (v.error)
        throw v.error;
      const _ = await v.json(), b = (d = v.headers.get("x-total-count")) !== null && d !== void 0 ? d : 0, E = (p = (f = v.headers.get("link")) === null || f === void 0 ? void 0 : f.split(",")) !== null && p !== void 0 ? p : [];
      return E.length > 0 && (E.forEach((j) => {
        const P = parseInt(j.split(";")[0].split("=")[1].substring(0, 1)), U = JSON.parse(j.split(";")[1].split("=")[1]);
        g[`${U}Page`] = P;
      }), g.total = parseInt(b)), { data: Object.assign(Object.assign({}, _), g), error: null };
    } catch (g) {
      if (B(g))
        return { data: { users: [] }, error: g };
      throw g;
    }
  }
  /**
   * Get user by id.
   *
   * @param uid The user's unique identifier
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @remarks
   * - Fetches the user object from the database based on the user's id.
   * - The `getUserById()` method requires the user's id which maps to the `auth.users.id` column.
   *
   * @example Fetch the user object using the access_token jwt
   * ```js
   * const { data, error } = await supabase.auth.admin.getUserById(1)
   * ```
   *
   * @exampleResponse Fetch the user object using the access_token jwt
   * ```json
   * {
   *   data: {
   *     user: {
   *       id: '1',
   *       aud: 'authenticated',
   *       role: 'authenticated',
   *       email: 'example@email.com',
   *       email_confirmed_at: '2024-01-01T00:00:00Z',
   *       phone: '',
   *       confirmation_sent_at: '2024-01-01T00:00:00Z',
   *       confirmed_at: '2024-01-01T00:00:00Z',
   *       last_sign_in_at: '2024-01-01T00:00:00Z',
   *       app_metadata: {},
   *       user_metadata: {},
   *       identities: [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "1",
   *           "user_id": "1",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": true,
   *             "phone_verified": false,
   *             "sub": "1"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "email@example.com"
   *         },
   *       ],
   *       created_at: '2024-01-01T00:00:00Z',
   *       updated_at: '2024-01-01T00:00:00Z',
   *       is_anonymous: false,
   *     }
   *   }
   *   error: null
   * }
   * ```
   */
  async getUserById(r) {
    Qt(r);
    try {
      return await J(this.fetch, "GET", `${this.url}/admin/users/${r}`, {
        headers: this.headers,
        xform: _r
      });
    } catch (s) {
      if (B(s))
        return { data: { user: null }, error: s };
      throw s;
    }
  }
  /**
   * Updates the user data. Changes are applied directly without confirmation flows.
   *
   * @param uid The user's unique identifier
   * @param attributes The data you want to update.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   *
   * @remarks
   * **Important:** This is a server-side operation and does **not** trigger client-side
   * `onAuthStateChange` listeners. The admin API has no connection to client state.
   *
   * To sync changes to the client after calling this method:
   * 1. On the client, call `supabase.auth.refreshSession()` to fetch the updated user data
   * 2. This will trigger the `TOKEN_REFRESHED` event and notify all listeners
   *
   * @example
   * ```typescript
   * // Server-side (Edge Function)
   * const { data, error } = await supabase.auth.admin.updateUserById(
   *   userId,
   *   { user_metadata: { preferences: { theme: 'dark' } } }
   * )
   *
   * // Client-side (to sync the changes)
   * const { data, error } = await supabase.auth.refreshSession()
   * // onAuthStateChange listeners will now be notified with updated user
   * ```
   *
   * @see {@link GoTrueClient.refreshSession} for syncing admin changes to the client
   * @see {@link GoTrueClient.updateUser} for client-side user updates (triggers listeners automatically)
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @example Updates a user's email
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '11111111-1111-1111-1111-111111111111',
   *   { email: 'new@email.com' }
   * )
   * ```
   *
   * @exampleResponse Updates a user's email
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "new@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmed_at": "2024-01-01T00:00:00Z",
   *       "recovery_sent_at": "2024-01-01T00:00:00Z",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {
   *         "email": "example@email.com",
   *         "email_verified": false,
   *         "phone_verified": false,
   *         "sub": "11111111-1111-1111-1111-111111111111"
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Updates a user's password
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '6aa5d0d4-2a9f-4483-b6c8-0cf4c6c98ac4',
   *   { password: 'new_password' }
   * )
   * ```
   *
   * @example Updates a user's metadata
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '6aa5d0d4-2a9f-4483-b6c8-0cf4c6c98ac4',
   *   { user_metadata: { hello: 'world' } }
   * )
   * ```
   *
   * @example Updates a user's app_metadata
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '6aa5d0d4-2a9f-4483-b6c8-0cf4c6c98ac4',
   *   { app_metadata: { plan: 'trial' } }
   * )
   * ```
   *
   * @example Confirms a user's email address
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '6aa5d0d4-2a9f-4483-b6c8-0cf4c6c98ac4',
   *   { email_confirm: true }
   * )
   * ```
   *
   * @example Confirms a user's phone number
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '6aa5d0d4-2a9f-4483-b6c8-0cf4c6c98ac4',
   *   { phone_confirm: true }
   * )
   * ```
   *
   * @example Ban a user for 100 years
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '6aa5d0d4-2a9f-4483-b6c8-0cf4c6c98ac4',
   *   { ban_duration: '876000h' }
   * )
   * ```
   */
  async updateUserById(r, s) {
    Qt(r);
    try {
      return await J(this.fetch, "PUT", `${this.url}/admin/users/${r}`, {
        body: s,
        headers: this.headers,
        xform: _r
      });
    } catch (o) {
      if (B(o))
        return { data: { user: null }, error: o };
      throw o;
    }
  }
  /**
   * Delete a user. Requires a `service_role` key.
   *
   * @param id The user id you want to remove.
   * @param shouldSoftDelete If true, then the user will be soft-deleted from the auth schema. Soft deletion allows user identification from the hashed user ID but is not reversible.
   * Defaults to false for backward compatibility.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @remarks
   * - The `deleteUser()` method requires the user's ID, which maps to the `auth.users.id` column.
   *
   * @example Removes a user
   * ```js
   * const { data, error } = await supabase.auth.admin.deleteUser(
   *   '715ed5db-f090-4b8c-a067-640ecee36aa0'
   * )
   * ```
   *
   * @exampleResponse Removes a user
   * ```json
   * {
   *   "data": {
   *     "user": {}
   *   },
   *   "error": null
   * }
   * ```
   */
  async deleteUser(r, s = !1) {
    Qt(r);
    try {
      return await J(this.fetch, "DELETE", `${this.url}/admin/users/${r}`, {
        headers: this.headers,
        body: {
          should_soft_delete: s
        },
        xform: _r
      });
    } catch (o) {
      if (B(o))
        return { data: { user: null }, error: o };
      throw o;
    }
  }
  async _listFactors(r) {
    Qt(r.userId);
    try {
      const { data: s, error: o } = await J(this.fetch, "GET", `${this.url}/admin/users/${r.userId}/factors`, {
        headers: this.headers,
        xform: (l) => ({ data: { factors: l }, error: null })
      });
      return { data: s, error: o };
    } catch (s) {
      if (B(s))
        return { data: null, error: s };
      throw s;
    }
  }
  async _deleteFactor(r) {
    Qt(r.userId), Qt(r.id);
    try {
      return { data: await J(this.fetch, "DELETE", `${this.url}/admin/users/${r.userId}/factors/${r.id}`, {
        headers: this.headers
      }), error: null };
    } catch (s) {
      if (B(s))
        return { data: null, error: s };
      throw s;
    }
  }
  /**
   * Lists all OAuth clients with optional pagination.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _listOAuthClients(r) {
    var s, o, l, c, d, f, p;
    try {
      const g = { nextPage: null, lastPage: 0, total: 0 }, v = await J(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (o = (s = r?.page) === null || s === void 0 ? void 0 : s.toString()) !== null && o !== void 0 ? o : "",
          per_page: (c = (l = r?.perPage) === null || l === void 0 ? void 0 : l.toString()) !== null && c !== void 0 ? c : ""
        },
        xform: Kd
      });
      if (v.error)
        throw v.error;
      const _ = await v.json(), b = (d = v.headers.get("x-total-count")) !== null && d !== void 0 ? d : 0, E = (p = (f = v.headers.get("link")) === null || f === void 0 ? void 0 : f.split(",")) !== null && p !== void 0 ? p : [];
      return E.length > 0 && (E.forEach((j) => {
        const P = parseInt(j.split(";")[0].split("=")[1].substring(0, 1)), U = JSON.parse(j.split(";")[1].split("=")[1]);
        g[`${U}Page`] = P;
      }), g.total = parseInt(b)), { data: Object.assign(Object.assign({}, _), g), error: null };
    } catch (g) {
      if (B(g))
        return { data: { clients: [] }, error: g };
      throw g;
    }
  }
  /**
   * Creates a new OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _createOAuthClient(r) {
    try {
      return await J(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: r,
        headers: this.headers,
        xform: (s) => ({ data: s, error: null })
      });
    } catch (s) {
      if (B(s))
        return { data: null, error: s };
      throw s;
    }
  }
  /**
   * Gets details of a specific OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _getOAuthClient(r) {
    try {
      const s = this._encodePathSegment(r);
      return await J(this.fetch, "GET", `${this.url}/admin/oauth/clients/${s}`, {
        headers: this.headers,
        xform: (o) => ({ data: o, error: null })
      });
    } catch (s) {
      if (B(s))
        return { data: null, error: s };
      throw s;
    }
  }
  /**
   * Updates an existing OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _updateOAuthClient(r, s) {
    try {
      const o = this._encodePathSegment(r);
      return await J(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${o}`, {
        body: s,
        headers: this.headers,
        xform: (l) => ({ data: l, error: null })
      });
    } catch (o) {
      if (B(o))
        return { data: null, error: o };
      throw o;
    }
  }
  /**
   * Deletes an OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _deleteOAuthClient(r) {
    try {
      const s = this._encodePathSegment(r);
      return await J(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${s}`, {
        headers: this.headers,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (s) {
      if (B(s))
        return { data: null, error: s };
      throw s;
    }
  }
  /**
   * Regenerates the secret for an OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _regenerateOAuthClientSecret(r) {
    try {
      const s = this._encodePathSegment(r);
      return await J(this.fetch, "POST", `${this.url}/admin/oauth/clients/${s}/regenerate_secret`, {
        headers: this.headers,
        xform: (o) => ({ data: o, error: null })
      });
    } catch (s) {
      if (B(s))
        return { data: null, error: s };
      throw s;
    }
  }
  /**
   * Lists all custom providers with optional type filter.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _listCustomProviders(r) {
    try {
      const s = {};
      return r?.type && (s.type = r.type), await J(this.fetch, "GET", `${this.url}/admin/custom-providers`, {
        headers: this.headers,
        query: s,
        xform: (o) => {
          var l;
          return { data: { providers: (l = o?.providers) !== null && l !== void 0 ? l : [] }, error: null };
        }
      });
    } catch (s) {
      if (B(s))
        return { data: { providers: [] }, error: s };
      throw s;
    }
  }
  /**
   * Creates a new custom OIDC/OAuth provider.
   *
   * For OIDC providers, the server fetches and validates the OpenID Connect discovery document
   * from the issuer's well-known endpoint (or the provided `discovery_url`) at creation time.
   * This may return a validation error (`error_code: "validation_failed"`) if the discovery
   * document is unreachable, not valid JSON, missing required fields, or if the issuer
   * in the document does not match the expected issuer.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _createCustomProvider(r) {
    try {
      return await J(this.fetch, "POST", `${this.url}/admin/custom-providers`, {
        body: r,
        headers: this.headers,
        xform: (s) => ({ data: s, error: null })
      });
    } catch (s) {
      if (B(s))
        return { data: null, error: s };
      throw s;
    }
  }
  /**
   * Gets details of a specific custom provider by identifier.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _getCustomProvider(r) {
    try {
      const s = this._encodePathSegment(r);
      return await J(this.fetch, "GET", `${this.url}/admin/custom-providers/${s}`, {
        headers: this.headers,
        xform: (o) => ({ data: o, error: null })
      });
    } catch (s) {
      if (B(s))
        return { data: null, error: s };
      throw s;
    }
  }
  /**
   * Updates an existing custom provider.
   *
   * When `issuer` or `discovery_url` is changed on an OIDC provider, the server re-fetches and
   * validates the discovery document before persisting. This may return a validation error
   * (`error_code: "validation_failed"`) if the discovery document is unreachable, invalid, or
   * the issuer does not match.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _updateCustomProvider(r, s) {
    try {
      const o = this._encodePathSegment(r);
      return await J(this.fetch, "PUT", `${this.url}/admin/custom-providers/${o}`, {
        body: s,
        headers: this.headers,
        xform: (l) => ({ data: l, error: null })
      });
    } catch (o) {
      if (B(o))
        return { data: null, error: o };
      throw o;
    }
  }
  /**
   * Deletes a custom provider.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _deleteCustomProvider(r) {
    try {
      const s = this._encodePathSegment(r);
      return await J(this.fetch, "DELETE", `${this.url}/admin/custom-providers/${s}`, {
        headers: this.headers,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (s) {
      if (B(s))
        return { data: null, error: s };
      throw s;
    }
  }
  /**
   * Lists all passkeys for a user.
   *
   * This function should only be called on a server. Never expose your secret key in the browser.
   *
   * Requires `auth.experimental.passkey: true`.
   */
  async _adminListPasskeys(r) {
    jt(this.experimental), Qt(r.userId);
    try {
      return await J(this.fetch, "GET", `${this.url}/admin/users/${r.userId}/passkeys`, { headers: this.headers, xform: (s) => ({ data: s, error: null }) });
    } catch (s) {
      if (B(s))
        return { data: null, error: s };
      throw s;
    }
  }
  /**
   * Deletes a user's passkey.
   *
   * This function should only be called on a server. Never expose your secret key in the browser.
   *
   * Requires `auth.experimental.passkey: true`.
   */
  async _adminDeletePasskey(r) {
    jt(this.experimental), Qt(r.userId), Qt(r.passkeyId);
    try {
      return await J(this.fetch, "DELETE", `${this.url}/admin/users/${r.userId}/passkeys/${r.passkeyId}`, { headers: this.headers, noResolveJson: !0 }), { data: null, error: null };
    } catch (s) {
      if (B(s))
        return { data: null, error: s };
      throw s;
    }
  }
}
function Gd(n = {}) {
  return {
    getItem: (r) => n[r] || null,
    setItem: (r, s) => {
      n[r] = s;
    },
    removeItem: (r) => {
      delete n[r];
    }
  };
}
const Ut = {
  /**
   * @experimental
   */
  debug: !!(globalThis && Ch() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class jh extends Error {
  constructor(r) {
    super(r), this.isAcquireTimeout = !0;
  }
}
class Jd extends jh {
}
async function ry(n, r, s) {
  Ut.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", n, r);
  const o = new globalThis.AbortController();
  let l;
  r > 0 && (l = setTimeout(() => {
    o.abort(), Ut.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", n);
  }, r)), await Promise.resolve();
  try {
    return await globalThis.navigator.locks.request(n, r === 0 ? {
      mode: "exclusive",
      ifAvailable: !0
    } : {
      mode: "exclusive",
      signal: o.signal
    }, async (c) => {
      if (c) {
        clearTimeout(l), Ut.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", n, c.name);
        try {
          return await s();
        } finally {
          Ut.debug && console.log("@supabase/gotrue-js: navigatorLock: released", n, c.name);
        }
      } else {
        if (r === 0)
          throw Ut.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", n), new Jd(`Acquiring an exclusive Navigator LockManager lock "${n}" immediately failed`);
        if (Ut.debug)
          try {
            const d = await globalThis.navigator.locks.query();
            console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(d, null, "  "));
          } catch (d) {
            console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", d);
          }
        return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), clearTimeout(l), await s();
      }
    });
  } catch (c) {
    if (r > 0 && clearTimeout(l), c !== null && typeof c == "object" && "name" in c && c.name === "AbortError" && r > 0) {
      if (o.signal.aborted)
        return Ut.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock", n), console.warn(`@supabase/gotrue-js: Lock "${n}" was not released within ${r}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`), await Promise.resolve().then(() => globalThis.navigator.locks.request(n, {
          mode: "exclusive",
          steal: !0
        }, async (d) => {
          if (d) {
            Ut.debug && console.log("@supabase/gotrue-js: navigatorLock: recovered (stolen)", n, d.name);
            try {
              return await s();
            } finally {
              Ut.debug && console.log("@supabase/gotrue-js: navigatorLock: released (stolen)", n, d.name);
            }
          } else
            return console.warn("@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true"), await s();
        }));
      throw Ut.debug && console.log("@supabase/gotrue-js: navigatorLock: lock was stolen by another request", n), new Jd(`Lock "${n}" was released because another request stole it`);
    }
    throw c;
  }
}
function ny() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function() {
          return this;
        },
        configurable: !0
      }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
function Ph(n) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(n))
    throw new Error(`@supabase/auth-js: Address "${n}" is invalid.`);
  return n.toLowerCase();
}
function sy(n) {
  return parseInt(n, 16);
}
function iy(n) {
  const r = new TextEncoder().encode(n);
  return "0x" + Array.from(r, (o) => o.toString(16).padStart(2, "0")).join("");
}
function oy(n) {
  var r;
  const { chainId: s, domain: o, expirationTime: l, issuedAt: c = /* @__PURE__ */ new Date(), nonce: d, notBefore: f, requestId: p, resources: g, scheme: v, uri: _, version: b } = n;
  {
    if (!Number.isInteger(s))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${s}`);
    if (!o)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');
    if (d && d.length < 8)
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${d}`);
    if (!_)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');
    if (b !== "1")
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${b}`);
    if (!((r = n.statement) === null || r === void 0) && r.includes(`
`))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${n.statement}`);
  }
  const E = Ph(n.address), j = v ? `${v}://${o}` : o, P = n.statement ? `${n.statement}
` : "", U = `${j} wants you to sign in with your Ethereum account:
${E}

${P}`;
  let z = `URI: ${_}
Version: ${b}
Chain ID: ${s}${d ? `
Nonce: ${d}` : ""}
Issued At: ${c.toISOString()}`;
  if (l && (z += `
Expiration Time: ${l.toISOString()}`), f && (z += `
Not Before: ${f.toISOString()}`), p && (z += `
Request ID: ${p}`), g) {
    let H = `
Resources:`;
    for (const D of g) {
      if (!D || typeof D != "string")
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${D}`);
      H += `
- ${D}`;
    }
    z += H;
  }
  return `${U}
${z}`;
}
class Ae extends Error {
  constructor({ message: r, code: s, cause: o, name: l }) {
    var c;
    super(r, { cause: o }), this.__isWebAuthnError = !0, this.name = (c = l ?? (o instanceof Error ? o.name : void 0)) !== null && c !== void 0 ? c : "Unknown Error", this.code = s;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code
    };
  }
}
class Gi extends Ae {
  constructor(r, s) {
    super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: s,
      message: r
    }), this.name = "WebAuthnUnknownError", this.originalError = s;
  }
}
function ay({ error: n, options: r }) {
  var s, o, l;
  const { publicKey: c } = r;
  if (!c)
    throw Error("options was missing required publicKey property");
  if (n.name === "AbortError") {
    if (r.signal instanceof AbortSignal)
      return new Ae({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: n
      });
  } else if (n.name === "ConstraintError") {
    if (((s = c.authenticatorSelection) === null || s === void 0 ? void 0 : s.requireResidentKey) === !0)
      return new Ae({
        message: "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: n
      });
    if (
      // @ts-ignore: `mediation` doesn't yet exist on CredentialCreationOptions but it's possible as of Sept 2024
      r.mediation === "conditional" && ((o = c.authenticatorSelection) === null || o === void 0 ? void 0 : o.userVerification) === "required"
    )
      return new Ae({
        message: "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: n
      });
    if (((l = c.authenticatorSelection) === null || l === void 0 ? void 0 : l.userVerification) === "required")
      return new Ae({
        message: "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: n
      });
  } else {
    if (n.name === "InvalidStateError")
      return new Ae({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: n
      });
    if (n.name === "NotAllowedError")
      return new Ae({
        message: n.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: n
      });
    if (n.name === "NotSupportedError")
      return c.pubKeyCredParams.filter((f) => f.type === "public-key").length === 0 ? new Ae({
        message: 'No entry in pubKeyCredParams was of type "public-key"',
        code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
        cause: n
      }) : new Ae({
        message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
        code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
        cause: n
      });
    if (n.name === "SecurityError") {
      const d = window.location.hostname;
      if (Ah(d)) {
        if (c.rp.id !== d)
          return new Ae({
            message: `The RP ID "${c.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: n
          });
      } else return new Ae({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: n
      });
    } else if (n.name === "TypeError") {
      if (c.user.id.byteLength < 1 || c.user.id.byteLength > 64)
        return new Ae({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: n
        });
    } else if (n.name === "UnknownError")
      return new Ae({
        message: "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: n
      });
  }
  return new Ae({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: n
  });
}
function ly({ error: n, options: r }) {
  const { publicKey: s } = r;
  if (!s)
    throw Error("options was missing required publicKey property");
  if (n.name === "AbortError") {
    if (r.signal instanceof AbortSignal)
      return new Ae({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: n
      });
  } else {
    if (n.name === "NotAllowedError")
      return new Ae({
        message: n.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: n
      });
    if (n.name === "SecurityError") {
      const o = window.location.hostname;
      if (Ah(o)) {
        if (s.rpId !== o)
          return new Ae({
            message: `The RP ID "${s.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: n
          });
      } else return new Ae({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: n
      });
    } else if (n.name === "UnknownError")
      return new Ae({
        message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: n
      });
  }
  return new Ae({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: n
  });
}
class uy {
  /**
   * Create an abort signal for a new WebAuthn operation.
   * Automatically cancels any existing operation.
   *
   * @returns {AbortSignal} Signal to pass to navigator.credentials.create() or .get()
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal MDN - AbortSignal}
   */
  createNewAbortSignal() {
    if (this.controller) {
      const s = new Error("Cancelling existing WebAuthn API call for new one");
      s.name = "AbortError", this.controller.abort(s);
    }
    const r = new AbortController();
    return this.controller = r, r.signal;
  }
  /**
   * Manually cancel the current WebAuthn operation.
   * Useful for cleaning up when user cancels or navigates away.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort MDN - AbortController.abort}
   */
  cancelCeremony() {
    if (this.controller) {
      const r = new Error("Manually cancelling existing WebAuthn API call");
      r.name = "AbortError", this.controller.abort(r), this.controller = void 0;
    }
  }
}
const wl = new uy();
function Qd(n) {
  if (!n)
    throw new Error("Credential creation options are required");
  if (typeof PublicKeyCredential < "u" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function")
    return PublicKeyCredential.parseCreationOptionsFromJSON(
      /** we assert the options here as typescript still doesn't know about future webauthn types */
      n
    );
  const { challenge: r, user: s, excludeCredentials: o } = n, l = Yi(
    n,
    ["challenge", "user", "excludeCredentials"]
  ), c = kn(r).buffer, d = Object.assign(Object.assign({}, s), { id: kn(s.id).buffer }), f = Object.assign(Object.assign({}, l), {
    challenge: c,
    user: d
  });
  if (o && o.length > 0) {
    f.excludeCredentials = new Array(o.length);
    for (let p = 0; p < o.length; p++) {
      const g = o[p];
      f.excludeCredentials[p] = Object.assign(Object.assign({}, g), {
        id: kn(g.id).buffer,
        type: g.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: g.transports
      });
    }
  }
  return f;
}
function Yd(n) {
  if (!n)
    throw new Error("Credential request options are required");
  if (typeof PublicKeyCredential < "u" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function")
    return PublicKeyCredential.parseRequestOptionsFromJSON(n);
  const { challenge: r, allowCredentials: s } = n, o = Yi(
    n,
    ["challenge", "allowCredentials"]
  ), l = kn(r).buffer, c = Object.assign(Object.assign({}, o), { challenge: l });
  if (s && s.length > 0) {
    c.allowCredentials = new Array(s.length);
    for (let d = 0; d < s.length; d++) {
      const f = s[d];
      c.allowCredentials[d] = Object.assign(Object.assign({}, f), {
        id: kn(f.id).buffer,
        type: f.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: f.transports
      });
    }
  }
  return c;
}
function Xd(n) {
  var r;
  if ("toJSON" in n && typeof n.toJSON == "function")
    return n.toJSON();
  const s = n;
  return {
    id: n.id,
    rawId: n.id,
    response: {
      attestationObject: Dr(new Uint8Array(n.response.attestationObject)),
      clientDataJSON: Dr(new Uint8Array(n.response.clientDataJSON))
    },
    type: "public-key",
    clientExtensionResults: n.getClientExtensionResults(),
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (r = s.authenticatorAttachment) !== null && r !== void 0 ? r : void 0
  };
}
function Zd(n) {
  var r;
  if ("toJSON" in n && typeof n.toJSON == "function")
    return n.toJSON();
  const s = n, o = n.getClientExtensionResults(), l = n.response;
  return {
    id: n.id,
    rawId: n.id,
    // W3C spec expects rawId to match id for JSON format
    response: {
      authenticatorData: Dr(new Uint8Array(l.authenticatorData)),
      clientDataJSON: Dr(new Uint8Array(l.clientDataJSON)),
      signature: Dr(new Uint8Array(l.signature)),
      userHandle: l.userHandle ? Dr(new Uint8Array(l.userHandle)) : void 0
    },
    type: "public-key",
    clientExtensionResults: o,
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (r = s.authenticatorAttachment) !== null && r !== void 0 ? r : void 0
  };
}
function Ah(n) {
  return (
    // Consider localhost valid as well since it's okay wrt Secure Contexts
    n === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(n)
  );
}
function Ji() {
  var n, r;
  return !!(qe() && "PublicKeyCredential" in window && window.PublicKeyCredential && "credentials" in navigator && typeof ((n = navigator?.credentials) === null || n === void 0 ? void 0 : n.create) == "function" && typeof ((r = navigator?.credentials) === null || r === void 0 ? void 0 : r.get) == "function");
}
async function Oh(n) {
  try {
    const r = await navigator.credentials.create(
      /** we assert the type here until typescript types are updated */
      n
    );
    return r ? r instanceof PublicKeyCredential ? { data: r, error: null } : {
      data: null,
      error: new Gi("Browser returned unexpected credential type", r)
    } : {
      data: null,
      error: new Gi("Empty credential response", r)
    };
  } catch (r) {
    return {
      data: null,
      error: ay({
        error: r,
        options: n
      })
    };
  }
}
async function Nh(n) {
  try {
    const r = await navigator.credentials.get(
      /** we assert the type here until typescript types are updated */
      n
    );
    return r ? r instanceof PublicKeyCredential ? { data: r, error: null } : {
      data: null,
      error: new Gi("Browser returned unexpected credential type", r)
    } : {
      data: null,
      error: new Gi("Empty credential response", r)
    };
  } catch (r) {
    return {
      data: null,
      error: ly({
        error: r,
        options: n
      })
    };
  }
}
const cy = {
  hints: ["security-key"],
  authenticatorSelection: {
    authenticatorAttachment: "cross-platform",
    requireResidentKey: !1,
    /** set to preferred because older yubikeys don't have PIN/Biometric */
    userVerification: "preferred",
    residentKey: "discouraged"
  },
  attestation: "direct"
}, dy = {
  /** set to preferred because older yubikeys don't have PIN/Biometric */
  userVerification: "preferred",
  hints: ["security-key"],
  attestation: "direct"
};
function Qi(...n) {
  const r = (l) => l !== null && typeof l == "object" && !Array.isArray(l), s = (l) => l instanceof ArrayBuffer || ArrayBuffer.isView(l), o = {};
  for (const l of n)
    if (l)
      for (const c in l) {
        const d = l[c];
        if (d !== void 0)
          if (Array.isArray(d))
            o[c] = d;
          else if (s(d))
            o[c] = d;
          else if (r(d)) {
            const f = o[c];
            r(f) ? o[c] = Qi(f, d) : o[c] = Qi(d);
          } else
            o[c] = d;
      }
  return o;
}
function hy(n, r) {
  return Qi(cy, n, r || {});
}
function fy(n, r) {
  return Qi(dy, n, r || {});
}
class py {
  constructor(r) {
    this.client = r, this.enroll = this._enroll.bind(this), this.challenge = this._challenge.bind(this), this.verify = this._verify.bind(this), this.authenticate = this._authenticate.bind(this), this.register = this._register.bind(this);
  }
  /**
   * Enroll a new WebAuthn factor.
   * Creates an unverified WebAuthn factor that must be verified with a credential.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Omit<MFAEnrollWebauthnParams, 'factorType'>} params - Enrollment parameters (friendlyName required)
   * @returns {Promise<AuthMFAEnrollWebauthnResponse>} Enrolled factor details or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-registering-a-new-credential W3C WebAuthn Spec - Registering a New Credential}
   */
  async _enroll(r) {
    return this.client.mfa.enroll(Object.assign(Object.assign({}, r), { factorType: "webauthn" }));
  }
  /**
   * Challenge for WebAuthn credential creation or authentication.
   * Combines server challenge with browser credential operations.
   * Handles both registration (create) and authentication (request) flows.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {MFAChallengeWebauthnParams & { friendlyName?: string; signal?: AbortSignal }} params - Challenge parameters including factorId
   * @param {Object} overrides - Allows you to override the parameters passed to navigator.credentials
   * @param {PublicKeyCredentialCreationOptionsFuture} overrides.create - Override options for credential creation
   * @param {PublicKeyCredentialRequestOptionsFuture} overrides.request - Override options for credential request
   * @returns {Promise<RequestResult>} Challenge response with credential or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-credential-creation W3C WebAuthn Spec - Credential Creation}
   * @see {@link https://w3c.github.io/webauthn/#sctn-verifying-assertion W3C WebAuthn Spec - Verifying Assertion}
   */
  async _challenge({ factorId: r, webauthn: s, friendlyName: o, signal: l }, c) {
    var d;
    try {
      const { data: f, error: p } = await this.client.mfa.challenge({
        factorId: r,
        webauthn: s
      });
      if (!f)
        return { data: null, error: p };
      const g = l ?? wl.createNewAbortSignal();
      if (f.webauthn.type === "create") {
        const { user: v } = f.webauthn.credential_options.publicKey;
        if (!v.name) {
          const _ = o;
          if (_)
            v.name = `${v.id}:${_}`;
          else {
            const E = (await this.client.getUser()).data.user, j = ((d = E?.user_metadata) === null || d === void 0 ? void 0 : d.name) || E?.email || E?.id || "User";
            v.name = `${v.id}:${j}`;
          }
        }
        v.displayName || (v.displayName = v.name);
      }
      switch (f.webauthn.type) {
        case "create": {
          const v = hy(f.webauthn.credential_options.publicKey, c?.create), { data: _, error: b } = await Oh({
            publicKey: v,
            signal: g
          });
          return _ ? {
            data: {
              factorId: r,
              challengeId: f.id,
              webauthn: {
                type: f.webauthn.type,
                credential_response: _
              }
            },
            error: null
          } : { data: null, error: b };
        }
        case "request": {
          const v = fy(f.webauthn.credential_options.publicKey, c?.request), { data: _, error: b } = await Nh(Object.assign(Object.assign({}, f.webauthn.credential_options), { publicKey: v, signal: g }));
          return _ ? {
            data: {
              factorId: r,
              challengeId: f.id,
              webauthn: {
                type: f.webauthn.type,
                credential_response: _
              }
            },
            error: null
          } : { data: null, error: b };
        }
      }
    } catch (f) {
      return B(f) ? { data: null, error: f } : {
        data: null,
        error: new At("Unexpected error in challenge", f)
      };
    }
  }
  /**
   * Verify a WebAuthn credential with the server.
   * Completes the WebAuthn ceremony by sending the credential to the server for verification.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Verification parameters
   * @param {string} params.challengeId - ID of the challenge being verified
   * @param {string} params.factorId - ID of the WebAuthn factor
   * @param {MFAVerifyWebauthnParams<T>['webauthn']} params.webauthn - WebAuthn credential response
   * @returns {Promise<AuthMFAVerifyResponse>} Verification result with session or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-verifying-assertion W3C WebAuthn Spec - Verifying an Authentication Assertion}
   * */
  async _verify({ challengeId: r, factorId: s, webauthn: o }) {
    return this.client.mfa.verify({
      factorId: s,
      challengeId: r,
      webauthn: o
    });
  }
  /**
   * Complete WebAuthn authentication flow.
   * Performs challenge and verification in a single operation for existing credentials.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Authentication parameters
   * @param {string} params.factorId - ID of the WebAuthn factor to authenticate with
   * @param {Object} params.webauthn - WebAuthn configuration
   * @param {string} params.webauthn.rpId - Relying Party ID (defaults to current hostname)
   * @param {string[]} params.webauthn.rpOrigins - Allowed origins (defaults to current origin)
   * @param {AbortSignal} params.webauthn.signal - Optional abort signal
   * @param {PublicKeyCredentialRequestOptionsFuture} overrides - Override options for navigator.credentials.get
   * @returns {Promise<RequestResult<AuthMFAVerifyResponseData, WebAuthnError | AuthError>>} Authentication result
   * @see {@link https://w3c.github.io/webauthn/#sctn-authentication W3C WebAuthn Spec - Authentication Ceremony}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions MDN - PublicKeyCredentialRequestOptions}
   */
  async _authenticate({ factorId: r, webauthn: { rpId: s = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: o = typeof window < "u" ? [window.location.origin] : void 0, signal: l } = {} }, c) {
    if (!s)
      return {
        data: null,
        error: new Sn("rpId is required for WebAuthn authentication")
      };
    try {
      if (!Ji())
        return {
          data: null,
          error: new At("Browser does not support WebAuthn", null)
        };
      const { data: d, error: f } = await this.challenge({
        factorId: r,
        webauthn: { rpId: s, rpOrigins: o },
        signal: l
      }, { request: c });
      if (!d)
        return { data: null, error: f };
      const { webauthn: p } = d;
      return this._verify({
        factorId: r,
        challengeId: d.challengeId,
        webauthn: {
          type: p.type,
          rpId: s,
          rpOrigins: o,
          credential_response: p.credential_response
        }
      });
    } catch (d) {
      return B(d) ? { data: null, error: d } : {
        data: null,
        error: new At("Unexpected error in authenticate", d)
      };
    }
  }
  /**
   * Complete WebAuthn registration flow.
   * Performs enrollment, challenge, and verification in a single operation for new credentials.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Registration parameters
   * @param {string} params.friendlyName - User-friendly name for the credential
   * @param {string} params.rpId - Relying Party ID (defaults to current hostname)
   * @param {string[]} params.rpOrigins - Allowed origins (defaults to current origin)
   * @param {AbortSignal} params.signal - Optional abort signal
   * @param {PublicKeyCredentialCreationOptionsFuture} overrides - Override options for navigator.credentials.create
   * @returns {Promise<RequestResult<AuthMFAVerifyResponseData, WebAuthnError | AuthError>>} Registration result
   * @see {@link https://w3c.github.io/webauthn/#sctn-registering-a-new-credential W3C WebAuthn Spec - Registration Ceremony}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions MDN - PublicKeyCredentialCreationOptions}
   */
  async _register({ friendlyName: r, webauthn: { rpId: s = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: o = typeof window < "u" ? [window.location.origin] : void 0, signal: l } = {} }, c) {
    if (!s)
      return {
        data: null,
        error: new Sn("rpId is required for WebAuthn registration")
      };
    try {
      if (!Ji())
        return {
          data: null,
          error: new At("Browser does not support WebAuthn", null)
        };
      const { data: d, error: f } = await this._enroll({
        friendlyName: r
      });
      if (!d)
        return await this.client.mfa.listFactors().then((v) => {
          var _;
          return (_ = v.data) === null || _ === void 0 ? void 0 : _.all.find((b) => b.factor_type === "webauthn" && b.friendly_name === r && b.status !== "unverified");
        }).then((v) => v ? this.client.mfa.unenroll({ factorId: v?.id }) : void 0), { data: null, error: f };
      const { data: p, error: g } = await this._challenge({
        factorId: d.id,
        friendlyName: d.friendly_name,
        webauthn: { rpId: s, rpOrigins: o },
        signal: l
      }, {
        create: c
      });
      return p ? this._verify({
        factorId: d.id,
        challengeId: p.challengeId,
        webauthn: {
          rpId: s,
          rpOrigins: o,
          type: p.webauthn.type,
          credential_response: p.webauthn.credential_response
        }
      }) : { data: null, error: g };
    } catch (d) {
      return B(d) ? { data: null, error: d } : {
        data: null,
        error: new At("Unexpected error in register", d)
      };
    }
  }
}
ny();
const my = {
  url: wg,
  storageKey: _g,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: kg,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
  throwOnError: !1,
  lockAcquireTimeout: 5e3,
  // 5 seconds
  skipAutoInitialize: !1,
  experimental: {}
};
async function eh(n, r, s) {
  return await s();
}
const mn = {};
class Ss {
  /**
   * The JWKS used for verifying asymmetric JWTs
   */
  get jwks() {
    var r, s;
    return (s = (r = mn[this.storageKey]) === null || r === void 0 ? void 0 : r.jwks) !== null && s !== void 0 ? s : { keys: [] };
  }
  set jwks(r) {
    mn[this.storageKey] = Object.assign(Object.assign({}, mn[this.storageKey]), { jwks: r });
  }
  get jwks_cached_at() {
    var r, s;
    return (s = (r = mn[this.storageKey]) === null || r === void 0 ? void 0 : r.cachedAt) !== null && s !== void 0 ? s : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(r) {
    mn[this.storageKey] = Object.assign(Object.assign({}, mn[this.storageKey]), { cachedAt: r });
  }
  /**
   * Create a new client for use in the browser.
   *
   * @example Using supabase-js (recommended)
   * ```ts
   * import { createClient } from '@supabase/supabase-js'
   *
   * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
   * const { data, error } = await supabase.auth.getUser()
   * ```
   *
   * @example Standalone import for bundle-sensitive environments
   * ```ts
   * import { GoTrueClient } from '@supabase/auth-js'
   *
   * const auth = new GoTrueClient({
   *   url: 'https://xyzcompany.supabase.co/auth/v1',
   *   headers: { apikey: 'your-publishable-key' },
   *   storageKey: 'supabase-auth',
   * })
   * ```
   */
  constructor(r) {
    var s, o, l, c;
    this.userStorage = null, this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.autoRefreshTickTimeout = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log;
    const d = Object.assign(Object.assign({}, my), r);
    if (this.storageKey = d.storageKey, this.instanceID = (s = Ss.nextInstanceID[this.storageKey]) !== null && s !== void 0 ? s : 0, Ss.nextInstanceID[this.storageKey] = this.instanceID + 1, this.logDebugMessages = !!d.debug, typeof d.debug == "function" && (this.logger = d.debug), this.instanceID > 0 && qe()) {
      const f = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      console.warn(f), this.logDebugMessages && console.trace(f);
    }
    if (this.persistSession = d.persistSession, this.autoRefreshToken = d.autoRefreshToken, this.experimental = (o = d.experimental) !== null && o !== void 0 ? o : {}, this.admin = new ty({
      url: d.url,
      headers: d.headers,
      fetch: d.fetch,
      experimental: this.experimental
    }), this.url = d.url, this.headers = d.headers, this.fetch = Rh(d.fetch), this.lock = d.lock || eh, this.detectSessionInUrl = d.detectSessionInUrl, this.flowType = d.flowType, this.hasCustomAuthorizationHeader = d.hasCustomAuthorizationHeader, this.throwOnError = d.throwOnError, this.lockAcquireTimeout = d.lockAcquireTimeout, d.lock ? this.lock = d.lock : this.persistSession && qe() && (!((l = globalThis?.navigator) === null || l === void 0) && l.locks) ? this.lock = ry : this.lock = eh, this.jwks || (this.jwks = { keys: [] }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER), this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
      webauthn: new py(this)
    }, this.oauth = {
      getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
      approveAuthorization: this._approveAuthorization.bind(this),
      denyAuthorization: this._denyAuthorization.bind(this),
      listGrants: this._listOAuthGrants.bind(this),
      revokeGrant: this._revokeOAuthGrant.bind(this)
    }, this.passkey = {
      startRegistration: this._startPasskeyRegistration.bind(this),
      verifyRegistration: this._verifyPasskeyRegistration.bind(this),
      startAuthentication: this._startPasskeyAuthentication.bind(this),
      verifyAuthentication: this._verifyPasskeyAuthentication.bind(this),
      list: this._listPasskeys.bind(this),
      update: this._updatePasskey.bind(this),
      delete: this._deletePasskey.bind(this)
    }, this.persistSession ? (d.storage ? this.storage = d.storage : Ch() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = Gd(this.memoryStorage)), d.userStorage && (this.userStorage = d.userStorage)) : (this.memoryStorage = {}, this.storage = Gd(this.memoryStorage)), qe() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (f) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", f);
      }
      (c = this.broadcastChannel) === null || c === void 0 || c.addEventListener("message", async (f) => {
        this._debug("received broadcast notification from other tab or client", f);
        try {
          await this._notifyAllSubscribers(f.data.event, f.data.session, !1);
        } catch (p) {
          this._debug("#broadcastChannel", "error", p);
        }
      });
    }
    d.skipAutoInitialize || this.initialize().catch((f) => {
      this._debug("#initialize()", "error", f);
    });
  }
  /**
   * Returns whether error throwing mode is enabled for this client.
   */
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  /**
   * Centralizes return handling with optional error throwing. When `throwOnError` is enabled
   * and the provided result contains a non-nullish error, the error is thrown instead of
   * being returned. This ensures consistent behavior across all public API methods.
   */
  _returnResult(r) {
    if (this.throwOnError && r && r.error)
      throw r.error;
    return r;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${Eh}) ${(/* @__PURE__ */ new Date()).toISOString()}`;
  }
  _debug(...r) {
    return this.logDebugMessages && this.logger(this._logPrefix(), ...r), this;
  }
  /**
   * Initializes the client session either from the url or from storage.
   * This method is automatically called when instantiating the client, but should also be called
   * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
   *
   * @category Auth
   */
  async initialize() {
    return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(this.lockAcquireTimeout, async () => await this._initialize()))(), await this.initializePromise);
  }
  /**
   * IMPORTANT:
   * 1. Never throw in this method, as it is called from the constructor
   * 2. Never return a session from this method as it would be cached over
   *    the whole lifetime of the client
   */
  async _initialize() {
    var r;
    try {
      let s = {}, o = "none";
      if (qe() && (s = Lg(window.location.href), this._isImplicitGrantCallback(s) ? o = "implicit" : await this._isPKCECallback(s) && (o = "pkce")), qe() && this.detectSessionInUrl && o !== "none") {
        const { data: l, error: c } = await this._getSessionFromURL(s, o);
        if (c) {
          if (this._debug("#_initialize()", "error detecting session from URL", c), Tg(c)) {
            const p = (r = c.details) === null || r === void 0 ? void 0 : r.code;
            if (p === "identity_already_exists" || p === "identity_not_found" || p === "single_identity_not_deletable")
              return { error: c };
          }
          return { error: c };
        }
        const { session: d, redirectType: f } = l;
        return this._debug("#_initialize()", "detected session in URL", d, "redirect type", f), await this._saveSession(d), setTimeout(async () => {
          f === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", d) : await this._notifyAllSubscribers("SIGNED_IN", d);
        }, 0), { error: null };
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (s) {
      return B(s) ? this._returnResult({ error: s }) : this._returnResult({
        error: new At("Unexpected error during initialization", s)
      });
    } finally {
      await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
    }
  }
  /**
   * Creates a new anonymous user.
   *
   * @returns A session where the is_anonymous claim in the access token JWT set to true
   *
   * @category Auth
   *
   * @remarks
   * - Returns an anonymous user
   * - It is recommended to set up captcha for anonymous sign-ins to prevent abuse. You can pass in the captcha token in the `options` param.
   *
   * @example Create an anonymous user
   * ```js
   * const { data, error } = await supabase.auth.signInAnonymously({
   *   options: {
   *     captchaToken
   *   }
   * });
   * ```
   *
   * @exampleResponse Create an anonymous user
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "",
   *       "phone": "",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {},
   *       "user_metadata": {},
   *       "identities": [],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": true
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "",
   *         "phone": "",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {},
   *         "user_metadata": {},
   *         "identities": [],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *         "is_anonymous": true
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Create an anonymous user with custom user metadata
   * ```js
   * const { data, error } = await supabase.auth.signInAnonymously({
   *   options: {
   *     data
   *   }
   * })
   * ```
   */
  async signInAnonymously(r) {
    var s, o, l;
    try {
      const c = await J(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (o = (s = r?.options) === null || s === void 0 ? void 0 : s.data) !== null && o !== void 0 ? o : {},
          gotrue_meta_security: { captcha_token: (l = r?.options) === null || l === void 0 ? void 0 : l.captchaToken }
        },
        xform: kt
      }), { data: d, error: f } = c;
      if (f || !d)
        return this._returnResult({ data: { user: null, session: null }, error: f });
      const p = d.session, g = d.user;
      return d.session && (await this._saveSession(d.session), await this._notifyAllSubscribers("SIGNED_IN", p)), this._returnResult({ data: { user: g, session: p }, error: null });
    } catch (c) {
      if (B(c))
        return this._returnResult({ data: { user: null, session: null }, error: c });
      throw c;
    }
  }
  /**
   * Creates a new user.
   *
   * Be aware that if a user account exists in the system you may get back an
   * error message that attempts to hide this information from the user.
   * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
   *
   * @returns A logged-in session if the server has "autoconfirm" ON
   * @returns A user if the server has "autoconfirm" OFF
   *
   * @category Auth
   *
   * @remarks
   * - By default, the user needs to verify their email address before logging in. To turn this off, disable **Confirm email** in [your project](/dashboard/project/_/auth/providers).
   * - **Confirm email** determines if users need to confirm their email address after signing up.
   *   - If **Confirm email** is enabled, a `user` is returned but `session` is null.
   *   - If **Confirm email** is disabled, both a `user` and a `session` are returned.
   * - When the user confirms their email address, they are redirected to the [`SITE_URL`](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls) by default. You can modify your `SITE_URL` or add additional redirect URLs in [your project](/dashboard/project/_/auth/url-configuration).
   * - If signUp() is called for an existing confirmed user:
   *   - When both **Confirm email** and **Confirm phone** (even when phone provider is disabled) are enabled in [your project](/dashboard/project/_/auth/providers), an obfuscated/fake user object is returned.
   *   - When either **Confirm email** or **Confirm phone** (even when phone provider is disabled) is disabled, the error message, `User already registered` is returned.
   * - To fetch the currently logged-in user, refer to [`getUser()`](/docs/reference/javascript/auth-getuser).
   *
   * @example Sign up with an email and password
   * ```js
   * const { data, error } = await supabase.auth.signUp({
   *   email: 'example@email.com',
   *   password: 'example-password',
   * })
   * ```
   *
   * @exampleResponse Sign up with an email and password
   * ```json
   * // Some fields may be null if "confirm email" is enabled.
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {},
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z"
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "example@email.com",
   *         "email_confirmed_at": "2024-01-01T00:00:00Z",
   *         "phone": "",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {
   *           "provider": "email",
   *           "providers": [
   *             "email"
   *           ]
   *         },
   *         "user_metadata": {},
   *         "identities": [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z"
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Sign up with a phone number and password (SMS)
   * ```js
   * const { data, error } = await supabase.auth.signUp({
   *   phone: '123456789',
   *   password: 'example-password',
   *   options: {
   *     channel: 'sms'
   *   }
   * })
   * ```
   *
   * @exampleDescription Sign up with a phone number and password (whatsapp)
   * The user will be sent a WhatsApp message which contains a OTP. By default, a given user can only request a OTP once every 60 seconds. Note that a user will need to have a valid WhatsApp account that is linked to Twilio in order to use this feature.
   *
   * @example Sign up with a phone number and password (whatsapp)
   * ```js
   * const { data, error } = await supabase.auth.signUp({
   *   phone: '123456789',
   *   password: 'example-password',
   *   options: {
   *     channel: 'whatsapp'
   *   }
   * })
   * ```
   *
   * @example Sign up with additional user metadata
   * ```js
   * const { data, error } = await supabase.auth.signUp(
   *   {
   *     email: 'example@email.com',
   *     password: 'example-password',
   *     options: {
   *       data: {
   *         first_name: 'John',
   *         age: 27,
   *       }
   *     }
   *   }
   * )
   * ```
   *
   * @exampleDescription Sign up with a redirect URL
   * - See [redirect URLs and wildcards](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls) to add additional redirect URLs to your project.
   *
   * @example Sign up with a redirect URL
   * ```js
   * const { data, error } = await supabase.auth.signUp(
   *   {
   *     email: 'example@email.com',
   *     password: 'example-password',
   *     options: {
   *       emailRedirectTo: 'https://example.com/welcome'
   *     }
   *   }
   * )
   * ```
   */
  async signUp(r) {
    var s, o, l;
    try {
      let c;
      if ("email" in r) {
        const { email: v, password: _, options: b } = r;
        let E = null, j = null;
        this.flowType === "pkce" && ([E, j] = await pn(this.storage, this.storageKey)), c = await J(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: b?.emailRedirectTo,
          body: {
            email: v,
            password: _,
            data: (s = b?.data) !== null && s !== void 0 ? s : {},
            gotrue_meta_security: { captcha_token: b?.captchaToken },
            code_challenge: E,
            code_challenge_method: j
          },
          xform: kt
        });
      } else if ("phone" in r) {
        const { phone: v, password: _, options: b } = r;
        c = await J(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: v,
            password: _,
            data: (o = b?.data) !== null && o !== void 0 ? o : {},
            channel: (l = b?.channel) !== null && l !== void 0 ? l : "sms",
            gotrue_meta_security: { captcha_token: b?.captchaToken }
          },
          xform: kt
        });
      } else
        throw new Bi("You must provide either an email or phone number and a password");
      const { data: d, error: f } = c;
      if (f || !d)
        return await He(this.storage, `${this.storageKey}-code-verifier`), this._returnResult({ data: { user: null, session: null }, error: f });
      const p = d.session, g = d.user;
      return d.session && (await this._saveSession(d.session), await this._notifyAllSubscribers("SIGNED_IN", p)), this._returnResult({ data: { user: g, session: p }, error: null });
    } catch (c) {
      if (await He(this.storage, `${this.storageKey}-code-verifier`), B(c))
        return this._returnResult({ data: { user: null, session: null }, error: c });
      throw c;
    }
  }
  /**
   * Log in an existing user with an email and password or phone and password.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or that the
   * email/phone and password combination is wrong or that the account can only
   * be accessed via social login.
   *
   * @category Auth
   *
   * @remarks
   * - Requires either an email and password or a phone number and password.
   *
   * @example Sign in with email and password
   * ```js
   * const { data, error } = await supabase.auth.signInWithPassword({
   *   email: 'example@email.com',
   *   password: 'example-password',
   * })
   * ```
   *
   * @exampleResponse Sign in with email and password
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {},
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z"
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "example@email.com",
   *         "email_confirmed_at": "2024-01-01T00:00:00Z",
   *         "phone": "",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {
   *           "provider": "email",
   *           "providers": [
   *             "email"
   *           ]
   *         },
   *         "user_metadata": {},
   *         "identities": [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z"
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Sign in with phone and password
   * ```js
   * const { data, error } = await supabase.auth.signInWithPassword({
   *   phone: '+13334445555',
   *   password: 'some-password',
   * })
   * ```
   */
  async signInWithPassword(r) {
    try {
      let s;
      if ("email" in r) {
        const { email: c, password: d, options: f } = r;
        s = await J(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: c,
            password: d,
            gotrue_meta_security: { captcha_token: f?.captchaToken }
          },
          xform: Vd
        });
      } else if ("phone" in r) {
        const { phone: c, password: d, options: f } = r;
        s = await J(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: c,
            password: d,
            gotrue_meta_security: { captcha_token: f?.captchaToken }
          },
          xform: Vd
        });
      } else
        throw new Bi("You must provide either an email or phone number and a password");
      const { data: o, error: l } = s;
      if (l)
        return this._returnResult({ data: { user: null, session: null }, error: l });
      if (!o || !o.session || !o.user) {
        const c = new fn();
        return this._returnResult({ data: { user: null, session: null }, error: c });
      }
      return o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", o.session)), this._returnResult({
        data: Object.assign({ user: o.user, session: o.session }, o.weak_password ? { weakPassword: o.weak_password } : null),
        error: l
      });
    } catch (s) {
      if (B(s))
        return this._returnResult({ data: { user: null, session: null }, error: s });
      throw s;
    }
  }
  /**
   * Log in an existing user via a third-party provider.
   * This method supports the PKCE flow.
   *
   * @category Auth
   *
   * @remarks
   * - This method is used for signing in using [Social Login (OAuth) providers](/docs/guides/auth#configure-third-party-providers).
   * - It works by redirecting your application to the provider's authorization screen, before bringing back the user to your app.
   *
   * @example Sign in using a third-party provider
   * ```js
   * const { data, error } = await supabase.auth.signInWithOAuth({
   *   provider: 'github'
   * })
   * ```
   *
   * @exampleResponse Sign in using a third-party provider
   * ```json
   * {
   *   data: {
   *     provider: 'github',
   *     url: <PROVIDER_URL_TO_REDIRECT_TO>
   *   },
   *   error: null
   * }
   * ```
   *
   * @exampleDescription Sign in using a third-party provider with redirect
   * - When the OAuth provider successfully authenticates the user, they are redirected to the URL specified in the `redirectTo` parameter. This parameter defaults to the [`SITE_URL`](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls). It does not redirect the user immediately after invoking this method.
   * - See [redirect URLs and wildcards](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls) to add additional redirect URLs to your project.
   *
   * @example Sign in using a third-party provider with redirect
   * ```js
   * const { data, error } = await supabase.auth.signInWithOAuth({
   *   provider: 'github',
   *   options: {
   *     redirectTo: 'https://example.com/welcome'
   *   }
   * })
   * ```
   *
   * @exampleDescription Sign in with scopes and access provider tokens
   * If you need additional access from an OAuth provider, in order to access provider specific APIs in the name of the user, you can do this by passing in the scopes the user should authorize for your application. Note that the `scopes` option takes in **a space-separated list** of scopes.
   *
   * Because OAuth sign-in often includes redirects, you should register an `onAuthStateChange` callback immediately after you create the Supabase client. This callback will listen for the presence of `provider_token` and `provider_refresh_token` properties on the `session` object and store them in local storage. The client library will emit these values **only once** immediately after the user signs in. You can then access them by looking them up in local storage, or send them to your backend servers for further processing.
   *
   * Finally, make sure you remove them from local storage on the `SIGNED_OUT` event. If the OAuth provider supports token revocation, make sure you call those APIs either from the frontend or schedule them to be called on the backend.
   *
   * @example Sign in with scopes and access provider tokens
   * ```js
   * // Register this immediately after calling createClient!
   * // Because signInWithOAuth causes a redirect, you need to fetch the
   * // provider tokens from the callback.
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (session && session.provider_token) {
   *     window.localStorage.setItem('oauth_provider_token', session.provider_token)
   *   }
   *
   *   if (session && session.provider_refresh_token) {
   *     window.localStorage.setItem('oauth_provider_refresh_token', session.provider_refresh_token)
   *   }
   *
   *   if (event === 'SIGNED_OUT') {
   *     window.localStorage.removeItem('oauth_provider_token')
   *     window.localStorage.removeItem('oauth_provider_refresh_token')
   *   }
   * })
   *
   * // Call this on your Sign in with GitHub button to initiate OAuth
   * // with GitHub with the requested elevated scopes.
   * await supabase.auth.signInWithOAuth({
   *   provider: 'github',
   *   options: {
   *     scopes: 'repo gist notifications'
   *   }
   * })
   * ```
   */
  async signInWithOAuth(r) {
    var s, o, l, c;
    return await this._handleProviderSignIn(r.provider, {
      redirectTo: (s = r.options) === null || s === void 0 ? void 0 : s.redirectTo,
      scopes: (o = r.options) === null || o === void 0 ? void 0 : o.scopes,
      queryParams: (l = r.options) === null || l === void 0 ? void 0 : l.queryParams,
      skipBrowserRedirect: (c = r.options) === null || c === void 0 ? void 0 : c.skipBrowserRedirect
    });
  }
  /**
   * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
   *
   * @category Auth
   *
   * @remarks
   * - Used when `flowType` is set to `pkce` in client options.
   *
   * @example Exchange Auth Code
   * ```js
   * supabase.auth.exchangeCodeForSession('34e770dd-9ff9-416c-87fa-43b31d7ef225')
   * ```
   *
   * @exampleResponse Exchange Auth Code
   * ```json
   * {
   *   "data": {
   *     session: {
   *       access_token: '<ACCESS_TOKEN>',
   *       token_type: 'bearer',
   *       expires_in: 3600,
   *       expires_at: 1700000000,
   *       refresh_token: '<REFRESH_TOKEN>',
   *       user: {
   *         id: '11111111-1111-1111-1111-111111111111',
   *         aud: 'authenticated',
   *         role: 'authenticated',
   *         email: 'example@email.com'
   *         email_confirmed_at: '2024-01-01T00:00:00Z',
   *         phone: '',
   *         confirmation_sent_at: '2024-01-01T00:00:00Z',
   *         confirmed_at: '2024-01-01T00:00:00Z',
   *         last_sign_in_at: '2024-01-01T00:00:00Z',
   *         app_metadata: {
   *           "provider": "email",
   *           "providers": [
   *             "email",
   *             "<OTHER_PROVIDER>"
   *           ]
   *         },
   *         user_metadata: {
   *           email: 'email@email.com',
   *           email_verified: true,
   *           full_name: 'User Name',
   *           iss: '<ISS>',
   *           name: 'User Name',
   *           phone_verified: false,
   *           provider_id: '<PROVIDER_ID>',
   *           sub: '<SUB>'
   *         },
   *         identities: [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "email@example.com"
   *           },
   *           {
   *             "identity_id": "33333333-3333-3333-3333-333333333333",
   *             "id": "<ID>",
   *             "user_id": "<USER_ID>",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": true,
   *               "full_name": "User Name",
   *               "iss": "<ISS>",
   *               "name": "User Name",
   *               "phone_verified": false,
   *               "provider_id": "<PROVIDER_ID>",
   *               "sub": "<SUB>"
   *             },
   *             "provider": "<PROVIDER>",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         created_at: '2024-01-01T00:00:00Z',
   *         updated_at: '2024-01-01T00:00:00Z',
   *         is_anonymous: false
   *       },
   *       provider_token: '<PROVIDER_TOKEN>',
   *       provider_refresh_token: '<PROVIDER_REFRESH_TOKEN>'
   *     },
   *     user: {
   *       id: '11111111-1111-1111-1111-111111111111',
   *       aud: 'authenticated',
   *       role: 'authenticated',
   *       email: 'example@email.com',
   *       email_confirmed_at: '2024-01-01T00:00:00Z',
   *       phone: '',
   *       confirmation_sent_at: '2024-01-01T00:00:00Z',
   *       confirmed_at: '2024-01-01T00:00:00Z',
   *       last_sign_in_at: '2024-01-01T00:00:00Z',
   *       app_metadata: {
   *         provider: 'email',
   *         providers: [
   *           "email",
   *           "<OTHER_PROVIDER>"
   *         ]
   *       },
   *       user_metadata: {
   *         email: 'email@email.com',
   *         email_verified: true,
   *         full_name: 'User Name',
   *         iss: '<ISS>',
   *         name: 'User Name',
   *         phone_verified: false,
   *         provider_id: '<PROVIDER_ID>',
   *         sub: '<SUB>'
   *       },
   *       identities: [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "email@example.com"
   *         },
   *         {
   *           "identity_id": "33333333-3333-3333-3333-333333333333",
   *           "id": "<ID>",
   *           "user_id": "<USER_ID>",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": true,
   *             "full_name": "User Name",
   *             "iss": "<ISS>",
   *             "name": "User Name",
   *             "phone_verified": false,
   *             "provider_id": "<PROVIDER_ID>",
   *             "sub": "<SUB>"
   *           },
   *           "provider": "<PROVIDER>",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       created_at: '2024-01-01T00:00:00Z',
   *       updated_at: '2024-01-01T00:00:00Z',
   *       is_anonymous: false
   *     },
   *     redirectType: null
   *   },
   *   "error": null
   * }
   * ```
   */
  async exchangeCodeForSession(r) {
    return await this.initializePromise, this._acquireLock(this.lockAcquireTimeout, async () => this._exchangeCodeForSession(r));
  }
  /**
   * Signs in a user by verifying a message signed by the user's private key.
   * Supports Ethereum (via Sign-In-With-Ethereum) & Solana (Sign-In-With-Solana) standards,
   * both of which derive from the EIP-4361 standard
   * With slight variation on Solana's side.
   * @reference https://eips.ethereum.org/EIPS/eip-4361
   *
   * @category Auth
   *
   * @remarks
   * - Uses a Web3 (Ethereum, Solana) wallet to sign a user in.
   * - Read up on the [potential for abuse](/docs/guides/auth/auth-web3#potential-for-abuse) before using it.
   *
   * @example Sign in with Solana or Ethereum (Window API)
   * ```js
   *   // uses window.ethereum for the wallet
   *   const { data, error } = await supabase.auth.signInWithWeb3({
   *     chain: 'ethereum',
   *     statement: 'I accept the Terms of Service at https://example.com/tos'
   *   })
   *
   *   // uses window.solana for the wallet
   *   const { data, error } = await supabase.auth.signInWithWeb3({
   *     chain: 'solana',
   *     statement: 'I accept the Terms of Service at https://example.com/tos'
   *   })
   * ```
   *
   * @example Sign in with Ethereum (Message and Signature)
   * ```js
   *   const { data, error } = await supabase.auth.signInWithWeb3({
   *     chain: 'ethereum',
   *     message: '<sign in with ethereum message>',
   *     signature: '<hex of the ethereum signature over the message>',
   *   })
   * ```
   *
   * @example Sign in with Solana (Brave)
   * ```js
   *   const { data, error } = await supabase.auth.signInWithWeb3({
   *     chain: 'solana',
   *     statement: 'I accept the Terms of Service at https://example.com/tos',
   *     wallet: window.braveSolana
   *   })
   * ```
   *
   * @example Sign in with Solana (Wallet Adapter)
   * ```jsx
   *   function SignInButton() {
   *   const wallet = useWallet()
   *
   *   return (
   *     <>
   *       {wallet.connected ? (
   *         <button
   *           onClick={() => {
   *             supabase.auth.signInWithWeb3({
   *               chain: 'solana',
   *               statement: 'I accept the Terms of Service at https://example.com/tos',
   *               wallet,
   *             })
   *           }}
   *         >
   *           Sign in with Solana
   *         </button>
   *       ) : (
   *         <WalletMultiButton />
   *       )}
   *     </>
   *   )
   * }
   *
   * function App() {
   *   const endpoint = clusterApiUrl('devnet')
   *   const wallets = useMemo(() => [], [])
   *
   *   return (
   *     <ConnectionProvider endpoint={endpoint}>
   *       <WalletProvider wallets={wallets}>
   *         <WalletModalProvider>
   *           <SignInButton />
   *         </WalletModalProvider>
   *       </WalletProvider>
   *     </ConnectionProvider>
   *   )
   * }
   * ```
   */
  async signInWithWeb3(r) {
    const { chain: s } = r;
    switch (s) {
      case "ethereum":
        return await this.signInWithEthereum(r);
      case "solana":
        return await this.signInWithSolana(r);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${s}"`);
    }
  }
  async signInWithEthereum(r) {
    var s, o, l, c, d, f, p, g, v, _, b;
    let E, j;
    if ("message" in r)
      E = r.message, j = r.signature;
    else {
      const { chain: P, wallet: U, statement: z, options: H } = r;
      let D;
      if (qe())
        if (typeof U == "object")
          D = U;
        else {
          const be = window;
          if ("ethereum" in be && typeof be.ethereum == "object" && "request" in be.ethereum && typeof be.ethereum.request == "function")
            D = be.ethereum;
          else
            throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof U != "object" || !H?.url)
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        D = U;
      }
      const Z = new URL((s = H?.url) !== null && s !== void 0 ? s : window.location.href), me = await D.request({
        method: "eth_requestAccounts"
      }).then((be) => be).catch(() => {
        throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid");
      });
      if (!me || me.length === 0)
        throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
      const ie = Ph(me[0]);
      let ue = (o = H?.signInWithEthereum) === null || o === void 0 ? void 0 : o.chainId;
      if (!ue) {
        const be = await D.request({
          method: "eth_chainId"
        });
        ue = sy(be);
      }
      const Oe = {
        domain: Z.host,
        address: ie,
        statement: z,
        uri: Z.href,
        version: "1",
        chainId: ue,
        nonce: (l = H?.signInWithEthereum) === null || l === void 0 ? void 0 : l.nonce,
        issuedAt: (d = (c = H?.signInWithEthereum) === null || c === void 0 ? void 0 : c.issuedAt) !== null && d !== void 0 ? d : /* @__PURE__ */ new Date(),
        expirationTime: (f = H?.signInWithEthereum) === null || f === void 0 ? void 0 : f.expirationTime,
        notBefore: (p = H?.signInWithEthereum) === null || p === void 0 ? void 0 : p.notBefore,
        requestId: (g = H?.signInWithEthereum) === null || g === void 0 ? void 0 : g.requestId,
        resources: (v = H?.signInWithEthereum) === null || v === void 0 ? void 0 : v.resources
      };
      E = oy(Oe), j = await D.request({
        method: "personal_sign",
        params: [iy(E), ie]
      });
    }
    try {
      const { data: P, error: U } = await J(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({
          chain: "ethereum",
          message: E,
          signature: j
        }, !((_ = r.options) === null || _ === void 0) && _.captchaToken ? { gotrue_meta_security: { captcha_token: (b = r.options) === null || b === void 0 ? void 0 : b.captchaToken } } : null),
        xform: kt
      });
      if (U)
        throw U;
      if (!P || !P.session || !P.user) {
        const z = new fn();
        return this._returnResult({ data: { user: null, session: null }, error: z });
      }
      return P.session && (await this._saveSession(P.session), await this._notifyAllSubscribers("SIGNED_IN", P.session)), this._returnResult({ data: Object.assign({}, P), error: U });
    } catch (P) {
      if (B(P))
        return this._returnResult({ data: { user: null, session: null }, error: P });
      throw P;
    }
  }
  async signInWithSolana(r) {
    var s, o, l, c, d, f, p, g, v, _, b, E;
    let j, P;
    if ("message" in r)
      j = r.message, P = r.signature;
    else {
      const { chain: U, wallet: z, statement: H, options: D } = r;
      let Z;
      if (qe())
        if (typeof z == "object")
          Z = z;
        else {
          const ie = window;
          if ("solana" in ie && typeof ie.solana == "object" && ("signIn" in ie.solana && typeof ie.solana.signIn == "function" || "signMessage" in ie.solana && typeof ie.solana.signMessage == "function"))
            Z = ie.solana;
          else
            throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof z != "object" || !D?.url)
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        Z = z;
      }
      const me = new URL((s = D?.url) !== null && s !== void 0 ? s : window.location.href);
      if ("signIn" in Z && Z.signIn) {
        const ie = await Z.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: (/* @__PURE__ */ new Date()).toISOString() }, D?.signInWithSolana), {
          // non-overridable properties
          version: "1",
          domain: me.host,
          uri: me.href
        }), H ? { statement: H } : null));
        let ue;
        if (Array.isArray(ie) && ie[0] && typeof ie[0] == "object")
          ue = ie[0];
        else if (ie && typeof ie == "object" && "signedMessage" in ie && "signature" in ie)
          ue = ie;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
        if ("signedMessage" in ue && "signature" in ue && (typeof ue.signedMessage == "string" || ue.signedMessage instanceof Uint8Array) && ue.signature instanceof Uint8Array)
          j = typeof ue.signedMessage == "string" ? ue.signedMessage : new TextDecoder().decode(ue.signedMessage), P = ue.signature;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
      } else {
        if (!("signMessage" in Z) || typeof Z.signMessage != "function" || !("publicKey" in Z) || typeof Z != "object" || !Z.publicKey || !("toBase58" in Z.publicKey) || typeof Z.publicKey.toBase58 != "function")
          throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
        j = [
          `${me.host} wants you to sign in with your Solana account:`,
          Z.publicKey.toBase58(),
          ...H ? ["", H, ""] : [""],
          "Version: 1",
          `URI: ${me.href}`,
          `Issued At: ${(l = (o = D?.signInWithSolana) === null || o === void 0 ? void 0 : o.issuedAt) !== null && l !== void 0 ? l : (/* @__PURE__ */ new Date()).toISOString()}`,
          ...!((c = D?.signInWithSolana) === null || c === void 0) && c.notBefore ? [`Not Before: ${D.signInWithSolana.notBefore}`] : [],
          ...!((d = D?.signInWithSolana) === null || d === void 0) && d.expirationTime ? [`Expiration Time: ${D.signInWithSolana.expirationTime}`] : [],
          ...!((f = D?.signInWithSolana) === null || f === void 0) && f.chainId ? [`Chain ID: ${D.signInWithSolana.chainId}`] : [],
          ...!((p = D?.signInWithSolana) === null || p === void 0) && p.nonce ? [`Nonce: ${D.signInWithSolana.nonce}`] : [],
          ...!((g = D?.signInWithSolana) === null || g === void 0) && g.requestId ? [`Request ID: ${D.signInWithSolana.requestId}`] : [],
          ...!((_ = (v = D?.signInWithSolana) === null || v === void 0 ? void 0 : v.resources) === null || _ === void 0) && _.length ? [
            "Resources",
            ...D.signInWithSolana.resources.map((ue) => `- ${ue}`)
          ] : []
        ].join(`
`);
        const ie = await Z.signMessage(new TextEncoder().encode(j), "utf8");
        if (!ie || !(ie instanceof Uint8Array))
          throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
        P = ie;
      }
    }
    try {
      const { data: U, error: z } = await J(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({ chain: "solana", message: j, signature: Dr(P) }, !((b = r.options) === null || b === void 0) && b.captchaToken ? { gotrue_meta_security: { captcha_token: (E = r.options) === null || E === void 0 ? void 0 : E.captchaToken } } : null),
        xform: kt
      });
      if (z)
        throw z;
      if (!U || !U.session || !U.user) {
        const H = new fn();
        return this._returnResult({ data: { user: null, session: null }, error: H });
      }
      return U.session && (await this._saveSession(U.session), await this._notifyAllSubscribers("SIGNED_IN", U.session)), this._returnResult({ data: Object.assign({}, U), error: z });
    } catch (U) {
      if (B(U))
        return this._returnResult({ data: { user: null, session: null }, error: U });
      throw U;
    }
  }
  async _exchangeCodeForSession(r) {
    const s = await $r(this.storage, `${this.storageKey}-code-verifier`), [o, l] = (s ?? "").split("/");
    try {
      if (!o && this.flowType === "pkce")
        throw new Cg();
      const { data: c, error: d } = await J(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: r,
          code_verifier: o
        },
        xform: kt
      });
      if (await He(this.storage, `${this.storageKey}-code-verifier`), d)
        throw d;
      if (!c || !c.session || !c.user) {
        const f = new fn();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: f
        });
      }
      return c.session && (await this._saveSession(c.session), await this._notifyAllSubscribers(l === "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", c.session)), this._returnResult({ data: Object.assign(Object.assign({}, c), { redirectType: l ?? null }), error: d });
    } catch (c) {
      if (await He(this.storage, `${this.storageKey}-code-verifier`), B(c))
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: c
        });
      throw c;
    }
  }
  /**
   * Allows signing in with an OIDC ID token. The authentication provider used
   * should be enabled and configured.
   *
   * @category Auth
   *
   * @remarks
   * - Use an ID token to sign in.
   * - Especially useful when implementing sign in using native platform dialogs in mobile or desktop apps using Sign in with Apple or Sign in with Google on iOS and Android.
   * - You can also use Google's [One Tap](https://developers.google.com/identity/gsi/web/guides/display-google-one-tap) and [Automatic sign-in](https://developers.google.com/identity/gsi/web/guides/automatic-sign-in-sign-out) via this API.
   *
   * @example Sign In using ID Token
   * ```js
   * const { data, error } = await supabase.auth.signInWithIdToken({
   *   provider: 'google',
   *   token: 'your-id-token'
   * })
   * ```
   *
   * @exampleResponse Sign In using ID Token
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         ...
   *       },
   *       "user_metadata": {
   *         ...
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "provider": "google",
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {
   *           ...
   *         },
   *         "user_metadata": {
   *           ...
   *         },
   *         "identities": [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "provider": "google",
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   */
  async signInWithIdToken(r) {
    try {
      const { options: s, provider: o, token: l, access_token: c, nonce: d } = r, f = await J(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: o,
          id_token: l,
          access_token: c,
          nonce: d,
          gotrue_meta_security: { captcha_token: s?.captchaToken }
        },
        xform: kt
      }), { data: p, error: g } = f;
      if (g)
        return this._returnResult({ data: { user: null, session: null }, error: g });
      if (!p || !p.session || !p.user) {
        const v = new fn();
        return this._returnResult({ data: { user: null, session: null }, error: v });
      }
      return p.session && (await this._saveSession(p.session), await this._notifyAllSubscribers("SIGNED_IN", p.session)), this._returnResult({ data: p, error: g });
    } catch (s) {
      if (B(s))
        return this._returnResult({ data: { user: null, session: null }, error: s });
      throw s;
    }
  }
  /**
   * Log in a user using magiclink or a one-time password (OTP).
   *
   * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
   * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
   * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or, that the account
   * can only be accessed via social login.
   *
   * Do note that you will need to configure a Whatsapp sender on Twilio
   * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
   * channel is not supported on other providers
   * at this time.
   * This method supports PKCE when an email is passed.
   *
   * @category Auth
   *
   * @remarks
   * - Requires either an email or phone number.
   * - This method is used for passwordless sign-ins where a OTP is sent to the user's email or phone number.
   * - If the user doesn't exist, `signInWithOtp()` will signup the user instead. To restrict this behavior, you can set `shouldCreateUser` in `SignInWithPasswordlessCredentials.options` to `false`.
   * - If you're using an email, you can configure whether you want the user to receive a magiclink or a OTP.
   * - If you're using phone, you can configure whether you want the user to receive a OTP.
   * - The magic link's destination URL is determined by the [`SITE_URL`](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls).
   * - See [redirect URLs and wildcards](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls) to add additional redirect URLs to your project.
   * - Magic links and OTPs share the same implementation. To send users a one-time code instead of a magic link, [modify the magic link email template](/dashboard/project/_/auth/templates) to include `{{ .Token }}` instead of `{{ .ConfirmationURL }}`.
   * - See our [Twilio Phone Auth Guide](/docs/guides/auth/phone-login?showSMSProvider=Twilio) for details about configuring WhatsApp sign in.
   *
   * @exampleDescription Sign in with email
   * The user will be sent an email which contains either a magiclink or a OTP or both. By default, a given user can only request a OTP once every 60 seconds.
   *
   * @example Sign in with email
   * ```js
   * const { data, error } = await supabase.auth.signInWithOtp({
   *   email: 'example@email.com',
   *   options: {
   *     emailRedirectTo: 'https://example.com/welcome'
   *   }
   * })
   * ```
   *
   * @exampleResponse Sign in with email
   * ```json
   * {
   *   "data": {
   *     "user": null,
   *     "session": null
   *   },
   *   "error": null
   * }
   * ```
   *
   * @exampleDescription Sign in with SMS OTP
   * The user will be sent a SMS which contains a OTP. By default, a given user can only request a OTP once every 60 seconds.
   *
   * @example Sign in with SMS OTP
   * ```js
   * const { data, error } = await supabase.auth.signInWithOtp({
   *   phone: '+13334445555',
   * })
   * ```
   *
   * @exampleDescription Sign in with WhatsApp OTP
   * The user will be sent a WhatsApp message which contains a OTP. By default, a given user can only request a OTP once every 60 seconds. Note that a user will need to have a valid WhatsApp account that is linked to Twilio in order to use this feature.
   *
   * @example Sign in with WhatsApp OTP
   * ```js
   * const { data, error } = await supabase.auth.signInWithOtp({
   *   phone: '+13334445555',
   *   options: {
   *     channel:'whatsapp',
   *   }
   * })
   * ```
   */
  async signInWithOtp(r) {
    var s, o, l, c, d;
    try {
      if ("email" in r) {
        const { email: f, options: p } = r;
        let g = null, v = null;
        this.flowType === "pkce" && ([g, v] = await pn(this.storage, this.storageKey));
        const { error: _ } = await J(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: f,
            data: (s = p?.data) !== null && s !== void 0 ? s : {},
            create_user: (o = p?.shouldCreateUser) !== null && o !== void 0 ? o : !0,
            gotrue_meta_security: { captcha_token: p?.captchaToken },
            code_challenge: g,
            code_challenge_method: v
          },
          redirectTo: p?.emailRedirectTo
        });
        return this._returnResult({ data: { user: null, session: null }, error: _ });
      }
      if ("phone" in r) {
        const { phone: f, options: p } = r, { data: g, error: v } = await J(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: f,
            data: (l = p?.data) !== null && l !== void 0 ? l : {},
            create_user: (c = p?.shouldCreateUser) !== null && c !== void 0 ? c : !0,
            gotrue_meta_security: { captcha_token: p?.captchaToken },
            channel: (d = p?.channel) !== null && d !== void 0 ? d : "sms"
          }
        });
        return this._returnResult({
          data: { user: null, session: null, messageId: g?.message_id },
          error: v
        });
      }
      throw new Bi("You must provide either an email or phone number.");
    } catch (f) {
      if (await He(this.storage, `${this.storageKey}-code-verifier`), B(f))
        return this._returnResult({ data: { user: null, session: null }, error: f });
      throw f;
    }
  }
  /**
   * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
   *
   * @category Auth
   *
   * @remarks
   * - The `verifyOtp` method takes in different verification types.
   * - If a phone number is used, the type can either be:
   *   1. `sms` – Used when verifying a one-time password (OTP) sent via SMS during sign-up or sign-in.
   *   2. `phone_change` – Used when verifying an OTP sent to a new phone number during a phone number update process.
   * - If an email address is used, the type can be one of the following (note: `signup` and `magiclink` types are deprecated):
   *   1. `email` – Used when verifying an OTP sent to the user's email during sign-up or sign-in.
   *   2. `recovery` – Used when verifying an OTP sent for account recovery, typically after a password reset request.
   *   3. `invite` – Used when verifying an OTP sent as part of an invitation to join a project or organization.
   *   4. `email_change` – Used when verifying an OTP sent to a new email address during an email update process.
   * - The verification type used should be determined based on the corresponding auth method called before `verifyOtp` to sign up / sign-in a user.
   * - The `TokenHash` is contained in the [email templates](/docs/guides/auth/auth-email-templates) and can be used to sign in.  You may wish to use the hash for the PKCE flow for Server Side Auth. Read [the Password-based Auth guide](/docs/guides/auth/passwords) for more details.
   *
   * @example Verify Signup One-Time Password (OTP)
   * ```js
   * const { data, error } = await supabase.auth.verifyOtp({ email, token, type: 'email'})
   * ```
   *
   * @exampleResponse Verify Signup One-Time Password (OTP)
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmed_at": "2024-01-01T00:00:00Z",
   *       "recovery_sent_at": "2024-01-01T00:00:00Z",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {
   *         "email": "example@email.com",
   *         "email_verified": false,
   *         "phone_verified": false,
   *         "sub": "11111111-1111-1111-1111-111111111111"
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "example@email.com",
   *         "email_confirmed_at": "2024-01-01T00:00:00Z",
   *         "phone": "",
   *         "confirmed_at": "2024-01-01T00:00:00Z",
   *         "recovery_sent_at": "2024-01-01T00:00:00Z",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {
   *           "provider": "email",
   *           "providers": [
   *             "email"
   *           ]
   *         },
   *         "user_metadata": {
   *           "email": "example@email.com",
   *           "email_verified": false,
   *           "phone_verified": false,
   *           "sub": "11111111-1111-1111-1111-111111111111"
   *         },
   *         "identities": [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *         "is_anonymous": false
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Verify SMS One-Time Password (OTP)
   * ```js
   * const { data, error } = await supabase.auth.verifyOtp({ phone, token, type: 'sms'})
   * ```
   *
   * @example Verify Email Auth (Token Hash)
   * ```js
   * const { data, error } = await supabase.auth.verifyOtp({ token_hash: tokenHash, type: 'email'})
   * ```
   */
  async verifyOtp(r) {
    var s, o;
    try {
      let l, c;
      "options" in r && (l = (s = r.options) === null || s === void 0 ? void 0 : s.redirectTo, c = (o = r.options) === null || o === void 0 ? void 0 : o.captchaToken);
      const { data: d, error: f } = await J(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, r), { gotrue_meta_security: { captcha_token: c } }),
        redirectTo: l,
        xform: kt
      });
      if (f)
        throw f;
      if (!d)
        throw new Error("An error occurred on token verification.");
      const p = d.session, g = d.user;
      return p?.access_token && (await this._saveSession(p), await this._notifyAllSubscribers(r.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", p)), this._returnResult({ data: { user: g, session: p }, error: null });
    } catch (l) {
      if (B(l))
        return this._returnResult({ data: { user: null, session: null }, error: l });
      throw l;
    }
  }
  /**
   * Attempts a single-sign on using an enterprise Identity Provider. A
   * successful SSO attempt will redirect the current page to the identity
   * provider authorization page. The redirect URL is implementation and SSO
   * protocol specific.
   *
   * You can use it by providing a SSO domain. Typically you can extract this
   * domain by asking users for their email address. If this domain is
   * registered on the Auth instance the redirect will use that organization's
   * currently active SSO Identity Provider for the login.
   *
   * If you have built an organization-specific login page, you can use the
   * organization's SSO Identity Provider UUID directly instead.
   *
   * @category Auth
   *
   * @remarks
   * - Before you can call this method you need to [establish a connection](/docs/guides/auth/sso/auth-sso-saml#managing-saml-20-connections) to an identity provider. Use the [CLI commands](/docs/reference/cli/supabase-sso) to do this.
   * - If you've associated an email domain to the identity provider, you can use the `domain` property to start a sign-in flow.
   * - In case you need to use a different way to start the authentication flow with an identity provider, you can use the `providerId` property. For example:
   *     - Mapping specific user email addresses with an identity provider.
   *     - Using different hints to identity the identity provider to be used by the user, like a company-specific page, IP address or other tracking information.
   *
   * @example Sign in with email domain
   * ```js
   *   // You can extract the user's email domain and use it to trigger the
   *   // authentication flow with the correct identity provider.
   *
   *   const { data, error } = await supabase.auth.signInWithSSO({
   *     domain: 'company.com'
   *   })
   *
   *   if (data?.url) {
   *     // redirect the user to the identity provider's authentication flow
   *     window.location.href = data.url
   *   }
   * ```
   *
   * @example Sign in with provider UUID
   * ```js
   *   // Useful when you need to map a user's sign in request according
   *   // to different rules that can't use email domains.
   *
   *   const { data, error } = await supabase.auth.signInWithSSO({
   *     providerId: '21648a9d-8d5a-4555-a9d1-d6375dc14e92'
   *   })
   *
   *   if (data?.url) {
   *     // redirect the user to the identity provider's authentication flow
   *     window.location.href = data.url
   *   }
   * ```
   */
  async signInWithSSO(r) {
    var s, o, l, c, d;
    try {
      let f = null, p = null;
      this.flowType === "pkce" && ([f, p] = await pn(this.storage, this.storageKey));
      const g = await J(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in r ? { provider_id: r.providerId } : null), "domain" in r ? { domain: r.domain } : null), { redirect_to: (o = (s = r.options) === null || s === void 0 ? void 0 : s.redirectTo) !== null && o !== void 0 ? o : void 0 }), !((l = r?.options) === null || l === void 0) && l.captchaToken ? { gotrue_meta_security: { captcha_token: r.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: f, code_challenge_method: p }),
        headers: this.headers,
        xform: Xg
      });
      return !((c = g.data) === null || c === void 0) && c.url && qe() && !(!((d = r.options) === null || d === void 0) && d.skipBrowserRedirect) && window.location.assign(g.data.url), this._returnResult(g);
    } catch (f) {
      if (await He(this.storage, `${this.storageKey}-code-verifier`), B(f))
        return this._returnResult({ data: null, error: f });
      throw f;
    }
  }
  /**
   * Sends a reauthentication OTP to the user's email or phone number.
   * Requires the user to be signed-in.
   *
   * @category Auth
   *
   * @remarks
   * - This method is used together with `updateUser()` when a user's password needs to be updated.
   * - If you require your user to reauthenticate before updating their password, you need to enable the **Secure password change** option in your [project's email provider settings](/dashboard/project/_/auth/providers).
   * - A user is only require to reauthenticate before updating their password if **Secure password change** is enabled and the user **hasn't recently signed in**. A user is deemed recently signed in if the session was created in the last 24 hours.
   * - This method will send a nonce to the user's email. If the user doesn't have a confirmed email address, the method will send the nonce to the user's confirmed phone number instead.
   * - After receiving the OTP, include it as the `nonce` in your `updateUser()` call to finalize the password change.
   *
   * @exampleDescription Send reauthentication nonce
   * Sends a reauthentication nonce to the user's email or phone number.
   *
   * @example Send reauthentication nonce
   * ```js
   * const { error } = await supabase.auth.reauthenticate()
   * ```
   */
  async reauthenticate() {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._reauthenticate());
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (r) => {
        const { data: { session: s }, error: o } = r;
        if (o)
          throw o;
        if (!s)
          throw new Be();
        const { error: l } = await J(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: s.access_token
        });
        return this._returnResult({ data: { user: null, session: null }, error: l });
      });
    } catch (r) {
      if (B(r))
        return this._returnResult({ data: { user: null, session: null }, error: r });
      throw r;
    }
  }
  /**
   * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
   *
   * @category Auth
   *
   * @remarks
   * - Resends a signup confirmation, email change or phone change email to the user.
   * - Passwordless sign-ins can be resent by calling the `signInWithOtp()` method again.
   * - Password recovery emails can be resent by calling the `resetPasswordForEmail()` method again.
   * - This method will only resend an email or phone OTP to the user if there was an initial signup, email change or phone change request being made(note: For existing users signing in with OTP, you should use `signInWithOtp()` again to resend the OTP).
   * - You can specify a redirect url when you resend an email link using the `emailRedirectTo` option.
   *
   * @exampleDescription Resend an email signup confirmation
   * Resends the email signup confirmation to the user
   *
   * @example Resend an email signup confirmation
   * ```js
   * const { error } = await supabase.auth.resend({
   *   type: 'signup',
   *   email: 'email@example.com',
   *   options: {
   *     emailRedirectTo: 'https://example.com/welcome'
   *   }
   * })
   * ```
   *
   * @exampleDescription Resend a phone signup confirmation
   * Resends the phone signup confirmation email to the user
   *
   * @example Resend a phone signup confirmation
   * ```js
   * const { error } = await supabase.auth.resend({
   *   type: 'sms',
   *   phone: '1234567890'
   * })
   * ```
   *
   * @exampleDescription Resend email change email
   * Resends the email change email to the user
   *
   * @example Resend email change email
   * ```js
   * const { error } = await supabase.auth.resend({
   *   type: 'email_change',
   *   email: 'email@example.com'
   * })
   * ```
   *
   * @exampleDescription Resend phone change OTP
   * Resends the phone change OTP to the user
   *
   * @example Resend phone change OTP
   * ```js
   * const { error } = await supabase.auth.resend({
   *   type: 'phone_change',
   *   phone: '1234567890'
   * })
   * ```
   */
  async resend(r) {
    try {
      const s = `${this.url}/resend`;
      if ("email" in r) {
        const { email: o, type: l, options: c } = r, { error: d } = await J(this.fetch, "POST", s, {
          headers: this.headers,
          body: {
            email: o,
            type: l,
            gotrue_meta_security: { captcha_token: c?.captchaToken }
          },
          redirectTo: c?.emailRedirectTo
        });
        return this._returnResult({ data: { user: null, session: null }, error: d });
      } else if ("phone" in r) {
        const { phone: o, type: l, options: c } = r, { data: d, error: f } = await J(this.fetch, "POST", s, {
          headers: this.headers,
          body: {
            phone: o,
            type: l,
            gotrue_meta_security: { captcha_token: c?.captchaToken }
          }
        });
        return this._returnResult({
          data: { user: null, session: null, messageId: d?.message_id },
          error: f
        });
      }
      throw new Bi("You must provide either an email or phone number and a type");
    } catch (s) {
      if (B(s))
        return this._returnResult({ data: { user: null, session: null }, error: s });
      throw s;
    }
  }
  /**
   * Returns the session, refreshing it if necessary.
   *
   * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
   *
   * **IMPORTANT:** This method loads values directly from the storage attached
   * to the client. If that storage is based on request cookies for example,
   * the values in it may not be authentic and therefore it's strongly advised
   * against using this method and its results in such circumstances. A warning
   * will be emitted if this is detected. Use {@link #getUser()} instead.
   *
   * @category Auth
   *
   * @remarks
   * - Since the introduction of [asymmetric JWT signing keys](/docs/guides/auth/signing-keys), this method is considered low-level and we encourage you to use `getClaims()` or `getUser()` instead.
   * - Retrieves the current [user session](/docs/guides/auth/sessions) from the storage medium (local storage, cookies).
   * - The session contains an access token (signed JWT), a refresh token and the user object.
   * - If the session's access token is expired or is about to expire, this method will use the refresh token to refresh the session.
   * - When using in a browser, or you've called `startAutoRefresh()` in your environment (React Native, etc.) this function always returns a valid access token without refreshing the session itself, as this is done in the background. This function returns very fast.
   * - **IMPORTANT SECURITY NOTICE:** If using an insecure storage medium, such as cookies or request headers, the user object returned by this function **must not be trusted**. Always verify the JWT using `getClaims()` or your own JWT verification library to securely establish the user's identity and access. You can also use `getUser()` to fetch the user object directly from the Auth server for this purpose.
   * - When using in a browser, this function is synchronized across all tabs using the [LockManager](https://developer.mozilla.org/en-US/docs/Web/API/LockManager) API. In other environments make sure you've defined a proper `lock` property, if necessary, to make sure there are no race conditions while the session is being refreshed.
   *
   * @example Get the session data
   * ```js
   * const { data, error } = await supabase.auth.getSession()
   * ```
   *
   * @exampleResponse Get the session data
   * ```json
   * {
   *   "data": {
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "example@email.com",
   *         "email_confirmed_at": "2024-01-01T00:00:00Z",
   *         "phone": "",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {
   *           "provider": "email",
   *           "providers": [
   *             "email"
   *           ]
   *         },
   *         "user_metadata": {
   *           "email": "example@email.com",
   *           "email_verified": false,
   *           "phone_verified": false,
   *           "sub": "11111111-1111-1111-1111-111111111111"
   *         },
   *         "identities": [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *         "is_anonymous": false
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   */
  async getSession() {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => this._useSession(async (s) => s));
  }
  /**
   * Acquires a global lock based on the storage key.
   */
  async _acquireLock(r, s) {
    this._debug("#_acquireLock", "begin", r);
    try {
      if (this.lockAcquired) {
        const o = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), l = (async () => (await o, await s()))();
        return this.pendingInLock.push((async () => {
          try {
            await l;
          } catch {
          }
        })()), l;
      }
      return await this.lock(`lock:${this.storageKey}`, r, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = !0;
          const o = s();
          for (this.pendingInLock.push((async () => {
            try {
              await o;
            } catch {
            }
          })()), await o; this.pendingInLock.length; ) {
            const l = [...this.pendingInLock];
            await Promise.all(l), this.pendingInLock.splice(0, l.length);
          }
          return await o;
        } finally {
          this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1;
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  /**
   * Use instead of {@link #getSession} inside the library. It is
   * semantically usually what you want, as getting a session involves some
   * processing afterwards that requires only one client operating on the
   * session at once across multiple tabs or processes.
   */
  async _useSession(r) {
    this._debug("#_useSession", "begin");
    try {
      const s = await this.__loadSession();
      return await r(s);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  /**
   * NEVER USE DIRECTLY!
   *
   * Always use {@link #_useSession}.
   */
  async __loadSession() {
    this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
    try {
      let r = null;
      const s = await $r(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", s), s !== null && (this._isValidSession(s) ? r = s : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !r)
        return { data: { session: null }, error: null };
      const o = r.expires_at ? r.expires_at * 1e3 - Date.now() < el : !1;
      if (this._debug("#__loadSession()", `session has${o ? "" : " not"} expired`, "expires_at", r.expires_at), !o) {
        if (this.userStorage) {
          const d = await $r(this.userStorage, this.storageKey + "-user");
          d?.user ? r.user = d.user : r.user = rl();
        }
        if (this.storage.isServer && r.user && !r.user.__isUserNotAvailableProxy) {
          const d = { value: this.suppressGetSessionWarning };
          r.user = Gg(r.user, d), d.value && (this.suppressGetSessionWarning = !0);
        }
        return { data: { session: r }, error: null };
      }
      const { data: l, error: c } = await this._callRefreshToken(r.refresh_token);
      return c ? this._returnResult({ data: { session: null }, error: c }) : this._returnResult({ data: { session: l }, error: null });
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  /**
   * Gets the current user details if there is an existing session. This method
   * performs a network request to the Supabase Auth server, so the returned
   * value is authentic and can be used to base authorization rules on.
   *
   * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
   *
   * @category Auth
   *
   * @remarks
   * - This method fetches the user object from the database instead of local session.
   * - This method is useful for checking if the user is authorized because it validates the user's access token JWT on the server.
   * - Should always be used when checking for user authorization on the server. On the client, you can instead use `getSession().session.user` for faster results. `getSession` is insecure on the server.
   *
   * @example Get the logged in user with the current existing session
   * ```js
   * const { data: { user } } = await supabase.auth.getUser()
   * ```
   *
   * @exampleResponse Get the logged in user with the current existing session
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmed_at": "2024-01-01T00:00:00Z",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {
   *         "email": "example@email.com",
   *         "email_verified": false,
   *         "phone_verified": false,
   *         "sub": "11111111-1111-1111-1111-111111111111"
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Get the logged in user with a custom access token jwt
   * ```js
   * const { data: { user } } = await supabase.auth.getUser(jwt)
   * ```
   */
  async getUser(r) {
    if (r)
      return await this._getUser(r);
    await this.initializePromise;
    const s = await this._acquireLock(this.lockAcquireTimeout, async () => await this._getUser());
    return s.data.user && (this.suppressGetSessionWarning = !0), s;
  }
  async _getUser(r) {
    try {
      return r ? await J(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: r,
        xform: _r
      }) : await this._useSession(async (s) => {
        var o, l, c;
        const { data: d, error: f } = s;
        if (f)
          throw f;
        return !(!((o = d.session) === null || o === void 0) && o.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new Be() } : await J(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (c = (l = d.session) === null || l === void 0 ? void 0 : l.access_token) !== null && c !== void 0 ? c : void 0,
          xform: _r
        });
      });
    } catch (s) {
      if (B(s))
        return Mi(s) && (await this._removeSession(), await He(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ data: { user: null }, error: s });
      throw s;
    }
  }
  /**
   * Updates user data for a logged in user.
   *
   * @category Auth
   *
   * @remarks
   * - In order to use the `updateUser()` method, the user needs to be signed in first.
   * - By default, email updates sends a confirmation link to both the user's current and new email.
   * To only send a confirmation link to the user's new email, disable **Secure email change** in your project's [email auth provider settings](/dashboard/project/_/auth/providers).
   *
   * @exampleDescription Update the email for an authenticated user
   * Sends a "Confirm Email Change" email to the new address. If **Secure Email Change** is enabled (default), confirmation is also required from the **old email** before the change is applied. To skip dual confirmation and apply the change after only the new email is verified, disable **Secure Email Change** in the [Email Auth Provider settings](/dashboard/project/_/auth/providers?provider=Email).
   *
   * @example Update the email for an authenticated user
   * ```js
   * const { data, error } = await supabase.auth.updateUser({
   *   email: 'new@email.com'
   * })
   * ```
   *
   * @exampleResponse Update the email for an authenticated user
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmed_at": "2024-01-01T00:00:00Z",
   *       "new_email": "new@email.com",
   *       "email_change_sent_at": "2024-01-01T00:00:00Z",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {
   *         "email": "example@email.com",
   *         "email_verified": false,
   *         "phone_verified": false,
   *         "sub": "11111111-1111-1111-1111-111111111111"
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @exampleDescription Update the phone number for an authenticated user
   * Sends a one-time password (OTP) to the new phone number.
   *
   * @example Update the phone number for an authenticated user
   * ```js
   * const { data, error } = await supabase.auth.updateUser({
   *   phone: '123456789'
   * })
   * ```
   *
   * @example Update the password for an authenticated user
   * ```js
   * const { data, error } = await supabase.auth.updateUser({
   *   password: 'new password'
   * })
   * ```
   *
   * @exampleDescription Update the user's metadata
   * Updates the user's custom metadata.
   *
   * **Note**: The `data` field maps to the `auth.users.raw_user_meta_data` column in your Supabase database. When calling `getUser()`, the data will be available as `user.user_metadata`.
   *
   * @example Update the user's metadata
   * ```js
   * const { data, error } = await supabase.auth.updateUser({
   *   data: { hello: 'world' }
   * })
   * ```
   *
   * @exampleDescription Update the user's password with a nonce
   * If **Secure password change** is enabled in your [project's email provider settings](/dashboard/project/_/auth/providers), updating the user's password would require a nonce if the user **hasn't recently signed in**. The nonce is sent to the user's email or phone number. A user is deemed recently signed in if the session was created in the last 24 hours.
   *
   * @example Update the user's password with a nonce
   * ```js
   * const { data, error } = await supabase.auth.updateUser({
   *   password: 'new password',
   *   nonce: '123456'
   * })
   * ```
   */
  async updateUser(r, s = {}) {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._updateUser(r, s));
  }
  async _updateUser(r, s = {}) {
    try {
      return await this._useSession(async (o) => {
        const { data: l, error: c } = o;
        if (c)
          throw c;
        if (!l.session)
          throw new Be();
        const d = l.session;
        let f = null, p = null;
        this.flowType === "pkce" && r.email != null && ([f, p] = await pn(this.storage, this.storageKey));
        const { data: g, error: v } = await J(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: s?.emailRedirectTo,
          body: Object.assign(Object.assign({}, r), { code_challenge: f, code_challenge_method: p }),
          jwt: d.access_token,
          xform: _r
        });
        if (v)
          throw v;
        return d.user = g.user, await this._saveSession(d), await this._notifyAllSubscribers("USER_UPDATED", d), this._returnResult({ data: { user: d.user }, error: null });
      });
    } catch (o) {
      if (await He(this.storage, `${this.storageKey}-code-verifier`), B(o))
        return this._returnResult({ data: { user: null }, error: o });
      throw o;
    }
  }
  /**
   * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
   * If the refresh token or access token in the current session is invalid, an error will be thrown.
   * @param currentSession The current session that minimally contains an access token and refresh token.
   *
   * @category Auth
   *
   * @remarks
   * - This method sets the session using an `access_token` and `refresh_token`.
   * - If successful, a `SIGNED_IN` event is emitted.
   *
   * @exampleDescription Set the session
   * Sets the session data from an access_token and refresh_token, then returns an auth response or error.
   *
   * @example Set the session
   * ```js
   *   const { data, error } = await supabase.auth.setSession({
   *     access_token,
   *     refresh_token
   *   })
   * ```
   *
   * @exampleResponse Set the session
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmed_at": "2024-01-01T00:00:00Z",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {
   *         "email": "example@email.com",
   *         "email_verified": false,
   *         "phone_verified": false,
   *         "sub": "11111111-1111-1111-1111-111111111111"
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "example@email.com",
   *         "email_confirmed_at": "2024-01-01T00:00:00Z",
   *         "phone": "",
   *         "confirmed_at": "2024-01-01T00:00:00Z",
   *         "last_sign_in_at": "11111111-1111-1111-1111-111111111111",
   *         "app_metadata": {
   *           "provider": "email",
   *           "providers": [
   *             "email"
   *           ]
   *         },
   *         "user_metadata": {
   *           "email": "example@email.com",
   *           "email_verified": false,
   *           "phone_verified": false,
   *           "sub": "11111111-1111-1111-1111-111111111111"
   *         },
   *         "identities": [
   *           {
   *             "identity_id": "2024-01-01T00:00:00Z",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *         "is_anonymous": false
   *       },
   *       "token_type": "bearer",
   *       "expires_in": 3500,
   *       "expires_at": 1700000000
   *     }
   *   },
   *   "error": null
   * }
   * ```
   */
  async setSession(r) {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._setSession(r));
  }
  async _setSession(r) {
    try {
      if (!r.access_token || !r.refresh_token)
        throw new Be();
      const s = Date.now() / 1e3;
      let o = s, l = !0, c = null;
      const { payload: d } = Fi(r.access_token);
      if (d.exp && (o = d.exp, l = o <= s), l) {
        const { data: f, error: p } = await this._callRefreshToken(r.refresh_token);
        if (p)
          return this._returnResult({ data: { user: null, session: null }, error: p });
        if (!f)
          return { data: { user: null, session: null }, error: null };
        c = f;
      } else {
        const { data: f, error: p } = await this._getUser(r.access_token);
        if (p)
          return this._returnResult({ data: { user: null, session: null }, error: p });
        c = {
          access_token: r.access_token,
          refresh_token: r.refresh_token,
          user: f.user,
          token_type: "bearer",
          expires_in: o - s,
          expires_at: o
        }, await this._saveSession(c), await this._notifyAllSubscribers("SIGNED_IN", c);
      }
      return this._returnResult({ data: { user: c.user, session: c }, error: null });
    } catch (s) {
      if (B(s))
        return this._returnResult({ data: { session: null, user: null }, error: s });
      throw s;
    }
  }
  /**
   * Returns a new session, regardless of expiry status.
   * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
   * If the current session's refresh token is invalid, an error will be thrown.
   * @param currentSession The current session. If passed in, it must contain a refresh token.
   *
   * @category Auth
   *
   * @remarks
   * - This method will refresh and return a new session whether the current one is expired or not.
   *
   * @example Refresh session using the current session
   * ```js
   * const { data, error } = await supabase.auth.refreshSession()
   * const { session, user } = data
   * ```
   *
   * @exampleResponse Refresh session using the current session
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmed_at": "2024-01-01T00:00:00Z",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {
   *         "email": "example@email.com",
   *         "email_verified": false,
   *         "phone_verified": false,
   *         "sub": "11111111-1111-1111-1111-111111111111"
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "example@email.com",
   *         "email_confirmed_at": "2024-01-01T00:00:00Z",
   *         "phone": "",
   *         "confirmed_at": "2024-01-01T00:00:00Z",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {
   *           "provider": "email",
   *           "providers": [
   *             "email"
   *           ]
   *         },
   *         "user_metadata": {
   *           "email": "example@email.com",
   *           "email_verified": false,
   *           "phone_verified": false,
   *           "sub": "11111111-1111-1111-1111-111111111111"
   *         },
   *         "identities": [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *         "is_anonymous": false
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Refresh session using a refresh token
   * ```js
   * const { data, error } = await supabase.auth.refreshSession({ refresh_token })
   * const { session, user } = data
   * ```
   */
  async refreshSession(r) {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._refreshSession(r));
  }
  async _refreshSession(r) {
    try {
      return await this._useSession(async (s) => {
        var o;
        if (!r) {
          const { data: d, error: f } = s;
          if (f)
            throw f;
          r = (o = d.session) !== null && o !== void 0 ? o : void 0;
        }
        if (!r?.refresh_token)
          throw new Be();
        const { data: l, error: c } = await this._callRefreshToken(r.refresh_token);
        return c ? this._returnResult({ data: { user: null, session: null }, error: c }) : l ? this._returnResult({ data: { user: l.user, session: l }, error: null }) : this._returnResult({ data: { user: null, session: null }, error: null });
      });
    } catch (s) {
      if (B(s))
        return this._returnResult({ data: { user: null, session: null }, error: s });
      throw s;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(r, s) {
    var o;
    try {
      if (!qe())
        throw new zi("No browser detected.");
      if (r.error || r.error_description || r.error_code)
        throw new zi(r.error_description || "Error in URL with unspecified error_description", {
          error: r.error || "unspecified_error",
          code: r.error_code || "unspecified_code"
        });
      switch (s) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new Md("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new zi("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (s === "pkce") {
        if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !r.code)
          throw new Md("No code detected.");
        const { data: D, error: Z } = await this._exchangeCodeForSession(r.code);
        if (Z)
          throw Z;
        const me = new URL(window.location.href);
        return me.searchParams.delete("code"), window.history.replaceState(window.history.state, "", me.toString()), {
          data: { session: D.session, redirectType: (o = D.redirectType) !== null && o !== void 0 ? o : null },
          error: null
        };
      }
      const { provider_token: l, provider_refresh_token: c, access_token: d, refresh_token: f, expires_in: p, expires_at: g, token_type: v } = r;
      if (!d || !p || !f || !v)
        throw new zi("No session defined in URL");
      const _ = Math.round(Date.now() / 1e3), b = parseInt(p);
      let E = _ + b;
      g && (E = parseInt(g));
      const j = E - _;
      j * 1e3 <= vn && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${j}s, should have been closer to ${b}s`);
      const P = E - b;
      _ - P >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", P, E, _) : _ - P < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", P, E, _);
      const { data: U, error: z } = await this._getUser(d);
      if (z)
        throw z;
      const H = {
        provider_token: l,
        provider_refresh_token: c,
        access_token: d,
        expires_in: b,
        expires_at: E,
        refresh_token: f,
        token_type: v,
        user: U.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), this._returnResult({ data: { session: H, redirectType: r.type }, error: null });
    } catch (l) {
      if (B(l))
        return this._returnResult({ data: { session: null, redirectType: null }, error: l });
      throw l;
    }
  }
  /**
   * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
   *
   * If `detectSessionInUrl` is a function, it will be called with the URL and params to determine
   * if the URL should be processed as a Supabase auth callback. This allows users to exclude
   * URLs from other OAuth providers (e.g., Facebook Login) that also return access_token in the fragment.
   */
  _isImplicitGrantCallback(r) {
    return typeof this.detectSessionInUrl == "function" ? this.detectSessionInUrl(new URL(window.location.href), r) : !!(r.access_token || r.error_description);
  }
  /**
   * Checks if the current URL and backing storage contain parameters given by a PKCE flow
   */
  async _isPKCECallback(r) {
    const s = await $r(this.storage, `${this.storageKey}-code-verifier`);
    return !!(r.code && s);
  }
  /**
   * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
   *
   * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
   * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
   *
   * If using `others` scope, no `SIGNED_OUT` event is fired!
   *
   * **Warning:** the default `scope` is `'global'`. This signs the user out of
   * **every device they are currently signed in on**, not just the current
   * tab/session. If you only want to sign the user out of the current session
   * (the behavior most other auth libraries default to), pass
   * `{ scope: 'local' }` explicitly.
   *
   * @category Auth
   *
   * @remarks
   * - In order to use the `signOut()` method, the user needs to be signed in first.
   * - By default, `signOut()` uses the **global** scope, which signs out the user
   *   on every device they are signed in on (not just the current one). Pass
   *   `{ scope: 'local' }` to only sign out the current session. This is
   *   usually what apps want on a "Sign out" button, especially when users
   *   sign in from multiple devices and do not expect signing out of one to
   *   terminate the others.
   * - Since Supabase Auth uses JWTs for authentication, the access token JWT will be valid until it's expired. When the user signs out, Supabase revokes the refresh token and deletes the JWT from the client-side. This does not revoke the JWT and it will still be valid until it expires.
   *
   * @example Sign out of every device (global – default)
   * ```js
   * const { error } = await supabase.auth.signOut()
   * ```
   *
   * @example Sign out only the current session (recommended for most apps)
   * ```js
   * const { error } = await supabase.auth.signOut({ scope: 'local' })
   * ```
   *
   * @example Sign out of all other sessions, keep the current one
   * ```js
   * const { error } = await supabase.auth.signOut({ scope: 'others' })
   * ```
   */
  async signOut(r = { scope: "global" }) {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._signOut(r));
  }
  async _signOut({ scope: r } = { scope: "global" }) {
    return await this._useSession(async (s) => {
      var o;
      const { data: l, error: c } = s;
      if (c && !Mi(c))
        return this._returnResult({ error: c });
      const d = (o = l.session) === null || o === void 0 ? void 0 : o.access_token;
      if (d) {
        const { error: f } = await this.admin.signOut(d, r);
        if (f && !(xg(f) && (f.status === 404 || f.status === 401 || f.status === 403) || Mi(f)))
          return this._returnResult({ error: f });
      }
      return r !== "others" && (await this._removeSession(), await He(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ error: null });
    });
  }
  /**  *
   * @category Auth
   *
   * @remarks
   * - Subscribes to important events occurring on the user's session.
   * - Use on the frontend/client. It is less useful on the server.
   * - Events are emitted across tabs to keep your application's UI up-to-date. Some events can fire very frequently, based on the number of tabs open. Use a quick and efficient callback function, and defer or debounce as many operations as you can to be performed outside of the callback.
   * - **Important:** A callback can be an `async` function and it runs synchronously during the processing of the changes causing the event. You can easily create a dead-lock by using `await` on a call to another method of the Supabase library.
   *   - Avoid using `async` functions as callbacks.
   *   - Limit the number of `await` calls in `async` callbacks.
   *   - Do not use other Supabase functions in the callback function. If you must, dispatch the functions once the callback has finished executing. Use this as a quick way to achieve this:
   *     ```js
   *     supabase.auth.onAuthStateChange((event, session) => {
   *       setTimeout(async () => {
   *         // await on other Supabase function here
   *         // this runs right after the callback has finished
   *       }, 0)
   *     })
   *     ```
   * - Emitted events:
   *   - `INITIAL_SESSION`
   *     - Emitted right after the Supabase client is constructed and the initial session from storage is loaded.
   *   - `SIGNED_IN`
   *     - Emitted each time a user session is confirmed or re-established, including on user sign in and when refocusing a tab.
   *     - Avoid making assumptions as to when this event is fired, this may occur even when the user is already signed in. Instead, check the user object attached to the event to see if a new user has signed in and update your application's UI.
   *     - This event can fire very frequently depending on the number of tabs open in your application.
   *   - `SIGNED_OUT`
   *     - Emitted when the user signs out. This can be after:
   *       - A call to `supabase.auth.signOut()`.
   *       - After the user's session has expired for any reason:
   *         - User has signed out on another device.
   *         - The session has reached its timebox limit or inactivity timeout.
   *         - User has signed in on another device with single session per user enabled.
   *         - Check the [User Sessions](/docs/guides/auth/sessions) docs for more information.
   *     - Use this to clean up any local storage your application has associated with the user.
   *   - `TOKEN_REFRESHED`
   *     - Emitted each time a new access and refresh token are fetched for the signed in user.
   *     - It's best practice and highly recommended to extract the access token (JWT) and store it in memory for further use in your application.
   *       - Avoid frequent calls to `supabase.auth.getSession()` for the same purpose.
   *     - There is a background process that keeps track of when the session should be refreshed so you will always receive valid tokens by listening to this event.
   *     - The frequency of this event is related to the JWT expiry limit configured on your project.
   *   - `USER_UPDATED`
   *     - Emitted each time the `supabase.auth.updateUser()` method finishes successfully. Listen to it to update your application's UI based on new profile information.
   *   - `PASSWORD_RECOVERY`
   *     - Emitted instead of the `SIGNED_IN` event when the user lands on a page that includes a password recovery link in the URL.
   *     - Use it to show a UI to the user where they can [reset their password](/docs/guides/auth/passwords#resetting-a-users-password-forgot-password).
   *
   * @example Listen to auth changes
   * ```js
   * const { data } = supabase.auth.onAuthStateChange((event, session) => {
   *   console.log(event, session)
   *
   *   if (event === 'INITIAL_SESSION') {
   *     // handle initial session
   *   } else if (event === 'SIGNED_IN') {
   *     // handle sign in event
   *   } else if (event === 'SIGNED_OUT') {
   *     // handle sign out event
   *   } else if (event === 'PASSWORD_RECOVERY') {
   *     // handle password recovery event
   *   } else if (event === 'TOKEN_REFRESHED') {
   *     // handle token refreshed event
   *   } else if (event === 'USER_UPDATED') {
   *     // handle user updated event
   *   }
   * })
   *
   * // call unsubscribe to remove the callback
   * data.subscription.unsubscribe()
   * ```
   *
   * @exampleDescription Listen to sign out
   * Make sure you clear out any local data, such as local and session storage, after the client library has detected the user's sign out.
   *
   * @example Listen to sign out
   * ```js
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (event === 'SIGNED_OUT') {
   *     console.log('SIGNED_OUT', session)
   *
   *     // clear local and session storage
   *     [
   *       window.localStorage,
   *       window.sessionStorage,
   *     ].forEach((storage) => {
   *       Object.entries(storage)
   *         .forEach(([key]) => {
   *           storage.removeItem(key)
   *         })
   *     })
   *   }
   * })
   * ```
   *
   * @exampleDescription Store OAuth provider tokens on sign in
   * When using [OAuth (Social Login)](/docs/guides/auth/social-login) you sometimes wish to get access to the provider's access token and refresh token, in order to call provider APIs in the name of the user.
   *
   * For example, if you are using [Sign in with Google](/docs/guides/auth/social-login/auth-google) you may want to use the provider token to call Google APIs on behalf of the user. Supabase Auth does not keep track of the provider access and refresh token, but does return them for you once, immediately after sign in. You can use the `onAuthStateChange` method to listen for the presence of the provider tokens and store them in local storage. You can further send them to your server's APIs for use on the backend.
   *
   * Finally, make sure you remove them from local storage on the `SIGNED_OUT` event. If the OAuth provider supports token revocation, make sure you call those APIs either from the frontend or schedule them to be called on the backend.
   *
   * @example Store OAuth provider tokens on sign in
   * ```js
   * // Register this immediately after calling createClient!
   * // Because signInWithOAuth causes a redirect, you need to fetch the
   * // provider tokens from the callback.
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (session && session.provider_token) {
   *     window.localStorage.setItem('oauth_provider_token', session.provider_token)
   *   }
   *
   *   if (session && session.provider_refresh_token) {
   *     window.localStorage.setItem('oauth_provider_refresh_token', session.provider_refresh_token)
   *   }
   *
   *   if (event === 'SIGNED_OUT') {
   *     window.localStorage.removeItem('oauth_provider_token')
   *     window.localStorage.removeItem('oauth_provider_refresh_token')
   *   }
   * })
   * ```
   *
   * @exampleDescription Use React Context for the User's session
   * Instead of relying on `supabase.auth.getSession()` within your React components, you can use a [React Context](https://react.dev/reference/react/createContext) to store the latest session information from the `onAuthStateChange` callback and access it that way.
   *
   * @example Use React Context for the User's session
   * ```js
   * const SessionContext = React.createContext(null)
   *
   * function main() {
   *   const [session, setSession] = React.useState(null)
   *
   *   React.useEffect(() => {
   *     const {data: { subscription }} = supabase.auth.onAuthStateChange(
   *       (event, session) => {
   *         if (event === 'SIGNED_OUT') {
   *           setSession(null)
   *         } else if (session) {
   *           setSession(session)
   *         }
   *       })
   *
   *     return () => {
   *       subscription.unsubscribe()
   *     }
   *   }, [])
   *
   *   return (
   *     <SessionContext.Provider value={session}>
   *       <App />
   *     </SessionContext.Provider>
   *   )
   * }
   * ```
   *
   * @example Listen to password recovery events
   * ```js
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (event === 'PASSWORD_RECOVERY') {
   *     console.log('PASSWORD_RECOVERY', session)
   *     // show screen to update user's password
   *     showPasswordResetScreen(true)
   *   }
   * })
   * ```
   *
   * @example Listen to sign in
   * ```js
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (event === 'SIGNED_IN') console.log('SIGNED_IN', session)
   * })
   * ```
   *
   * @example Listen to token refresh
   * ```js
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (event === 'TOKEN_REFRESHED') console.log('TOKEN_REFRESHED', session)
   * })
   * ```
   *
   * @example Listen to user updates
   * ```js
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (event === 'USER_UPDATED') console.log('USER_UPDATED', session)
   * })
   * ```
   */
  onAuthStateChange(r) {
    const s = Ig(), o = {
      id: s,
      callback: r,
      unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", s), this.stateChangeEmitters.delete(s);
      }
    };
    return this._debug("#onAuthStateChange()", "registered callback with id", s), this.stateChangeEmitters.set(s, o), (async () => (await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => {
      this._emitInitialSession(s);
    })))(), { data: { subscription: o } };
  }
  async _emitInitialSession(r) {
    return await this._useSession(async (s) => {
      var o, l;
      try {
        const { data: { session: c }, error: d } = s;
        if (d)
          throw d;
        await ((o = this.stateChangeEmitters.get(r)) === null || o === void 0 ? void 0 : o.callback("INITIAL_SESSION", c)), this._debug("INITIAL_SESSION", "callback id", r, "session", c);
      } catch (c) {
        await ((l = this.stateChangeEmitters.get(r)) === null || l === void 0 ? void 0 : l.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", r, "error", c), Mi(c) ? console.warn(c) : console.error(c);
      }
    });
  }
  /**
   * Sends a password reset request to an email address. This method supports the PKCE flow.
   *
   * @param email The email address of the user.
   * @param options.redirectTo The URL to send the user to after they click the password reset link.
   * @param options.captchaToken Verification token received when the user completes the captcha on the site.
   *
   * @category Auth
   *
   * @remarks
   * - The password reset flow consist of 2 broad steps: (i) Allow the user to login via the password reset link; (ii) Update the user's password.
   * - The `resetPasswordForEmail()` only sends a password reset link to the user's email.
   * To update the user's password, see [`updateUser()`](/docs/reference/javascript/auth-updateuser).
   * - A `PASSWORD_RECOVERY` event will be emitted when the password recovery link is clicked.
   * You can use [`onAuthStateChange()`](/docs/reference/javascript/auth-onauthstatechange) to listen and invoke a callback function on these events.
   * - When the user clicks the reset link in the email they are redirected back to your application.
   * You can configure the URL that the user is redirected to with the `redirectTo` parameter.
   * See [redirect URLs and wildcards](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls) to add additional redirect URLs to your project.
   * - After the user has been redirected successfully, prompt them for a new password and call `updateUser()`:
   * ```js
   * const { data, error } = await supabase.auth.updateUser({
   *   password: new_password
   * })
   * ```
   *
   * @example Reset password
   * ```js
   * const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
   *   redirectTo: 'https://example.com/update-password',
   * })
   * ```
   *
   * @exampleResponse Reset password
   * ```json
   * {
   *   data: {}
   *   error: null
   * }
   * ```
   *
   * @example Reset password (React)
   * ```js
   * /**
   *  * Step 1: Send the user an email to get a password reset token.
   *  * This email contains a link which sends the user back to your application.
   *  *\/
   * const { data, error } = await supabase.auth
   *   .resetPasswordForEmail('user@email.com')
   *
   * /**
   *  * Step 2: Once the user is redirected back to your application,
   *  * ask the user to reset their password.
   *  *\/
   *  useEffect(() => {
   *    supabase.auth.onAuthStateChange(async (event, session) => {
   *      if (event == "PASSWORD_RECOVERY") {
   *        const newPassword = prompt("What would you like your new password to be?");
   *        const { data, error } = await supabase.auth
   *          .updateUser({ password: newPassword })
   *
   *        if (data) alert("Password updated successfully!")
   *        if (error) alert("There was an error updating your password.")
   *      }
   *    })
   *  }, [])
   * ```
   */
  async resetPasswordForEmail(r, s = {}) {
    let o = null, l = null;
    this.flowType === "pkce" && ([o, l] = await pn(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await J(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: r,
          code_challenge: o,
          code_challenge_method: l,
          gotrue_meta_security: { captcha_token: s.captchaToken }
        },
        headers: this.headers,
        redirectTo: s.redirectTo
      });
    } catch (c) {
      if (await He(this.storage, `${this.storageKey}-code-verifier`), B(c))
        return this._returnResult({ data: null, error: c });
      throw c;
    }
  }
  /**
   * Gets all the identities linked to a user.
   *
   * @category Auth
   *
   * @remarks
   * - The user needs to be signed in to call `getUserIdentities()`.
   *
   * @example Returns a list of identities linked to the user
   * ```js
   * const { data, error } = await supabase.auth.getUserIdentities()
   * ```
   *
   * @exampleResponse Returns a list of identities linked to the user
   * ```json
   * {
   *   "data": {
   *     "identities": [
   *       {
   *         "identity_id": "22222222-2222-2222-2222-222222222222",
   *         "id": "2024-01-01T00:00:00Z",
   *         "user_id": "2024-01-01T00:00:00Z",
   *         "identity_data": {
   *           "email": "example@email.com",
   *           "email_verified": false,
   *           "phone_verified": false,
   *           "sub": "11111111-1111-1111-1111-111111111111"
   *         },
   *         "provider": "email",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *         "email": "example@email.com"
   *       }
   *     ]
   *   },
   *   "error": null
   * }
   * ```
   */
  async getUserIdentities() {
    var r;
    try {
      const { data: s, error: o } = await this.getUser();
      if (o)
        throw o;
      return this._returnResult({ data: { identities: (r = s.user.identities) !== null && r !== void 0 ? r : [] }, error: null });
    } catch (s) {
      if (B(s))
        return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  /**  *
   * @category Auth
   *
   * @remarks
   * - The **Enable Manual Linking** option must be enabled from your [project's authentication settings](/dashboard/project/_/auth/providers).
   * - The user needs to be signed in to call `linkIdentity()`.
   * - If the candidate identity is already linked to the existing user or another user, `linkIdentity()` will fail.
   * - If `linkIdentity` is run in the browser, the user is automatically redirected to the returned URL. On the server, you should handle the redirect.
   *
   * @example Link an identity to a user
   * ```js
   * const { data, error } = await supabase.auth.linkIdentity({
   *   provider: 'github'
   * })
   * ```
   *
   * @exampleResponse Link an identity to a user
   * ```json
   * {
   *   data: {
   *     provider: 'github',
   *     url: <PROVIDER_URL_TO_REDIRECT_TO>
   *   },
   *   error: null
   * }
   * ```
   */
  async linkIdentity(r) {
    return "token" in r ? this.linkIdentityIdToken(r) : this.linkIdentityOAuth(r);
  }
  async linkIdentityOAuth(r) {
    var s;
    try {
      const { data: o, error: l } = await this._useSession(async (c) => {
        var d, f, p, g, v;
        const { data: _, error: b } = c;
        if (b)
          throw b;
        const E = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, r.provider, {
          redirectTo: (d = r.options) === null || d === void 0 ? void 0 : d.redirectTo,
          scopes: (f = r.options) === null || f === void 0 ? void 0 : f.scopes,
          queryParams: (p = r.options) === null || p === void 0 ? void 0 : p.queryParams,
          skipBrowserRedirect: !0
        });
        return await J(this.fetch, "GET", E, {
          headers: this.headers,
          jwt: (v = (g = _.session) === null || g === void 0 ? void 0 : g.access_token) !== null && v !== void 0 ? v : void 0
        });
      });
      if (l)
        throw l;
      return qe() && !(!((s = r.options) === null || s === void 0) && s.skipBrowserRedirect) && window.location.assign(o?.url), this._returnResult({
        data: { provider: r.provider, url: o?.url },
        error: null
      });
    } catch (o) {
      if (B(o))
        return this._returnResult({ data: { provider: r.provider, url: null }, error: o });
      throw o;
    }
  }
  async linkIdentityIdToken(r) {
    return await this._useSession(async (s) => {
      var o;
      try {
        const { error: l, data: { session: c } } = s;
        if (l)
          throw l;
        const { options: d, provider: f, token: p, access_token: g, nonce: v } = r, _ = await J(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
          headers: this.headers,
          jwt: (o = c?.access_token) !== null && o !== void 0 ? o : void 0,
          body: {
            provider: f,
            id_token: p,
            access_token: g,
            nonce: v,
            link_identity: !0,
            gotrue_meta_security: { captcha_token: d?.captchaToken }
          },
          xform: kt
        }), { data: b, error: E } = _;
        return E ? this._returnResult({ data: { user: null, session: null }, error: E }) : !b || !b.session || !b.user ? this._returnResult({
          data: { user: null, session: null },
          error: new fn()
        }) : (b.session && (await this._saveSession(b.session), await this._notifyAllSubscribers("USER_UPDATED", b.session)), this._returnResult({ data: b, error: E }));
      } catch (l) {
        if (await He(this.storage, `${this.storageKey}-code-verifier`), B(l))
          return this._returnResult({ data: { user: null, session: null }, error: l });
        throw l;
      }
    });
  }
  /**
   * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
   *
   * @category Auth
   *
   * @remarks
   * - The **Enable Manual Linking** option must be enabled from your [project's authentication settings](/dashboard/project/_/auth/providers).
   * - The user needs to be signed in to call `unlinkIdentity()`.
   * - The user must have at least 2 identities in order to unlink an identity.
   * - The identity to be unlinked must belong to the user.
   *
   * @example Unlink an identity
   * ```js
   * // retrieve all identities linked to a user
   * const identities = await supabase.auth.getUserIdentities()
   *
   * // find the google identity
   * const googleIdentity = identities.find(
   *   identity => identity.provider === 'google'
   * )
   *
   * // unlink the google identity
   * const { error } = await supabase.auth.unlinkIdentity(googleIdentity)
   * ```
   */
  async unlinkIdentity(r) {
    try {
      return await this._useSession(async (s) => {
        var o, l;
        const { data: c, error: d } = s;
        if (d)
          throw d;
        return await J(this.fetch, "DELETE", `${this.url}/user/identities/${r.identity_id}`, {
          headers: this.headers,
          jwt: (l = (o = c.session) === null || o === void 0 ? void 0 : o.access_token) !== null && l !== void 0 ? l : void 0
        });
      });
    } catch (s) {
      if (B(s))
        return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  /**
   * Generates a new JWT.
   * @param refreshToken A valid refresh token that was returned on login.
   */
  async _refreshAccessToken(r) {
    const s = `#_refreshAccessToken(${r.substring(0, 5)}...)`;
    this._debug(s, "begin");
    try {
      const o = Date.now();
      return await Dg(async (l) => (l > 0 && await Ug(200 * Math.pow(2, l - 1)), this._debug(s, "refreshing attempt", l), await J(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: r },
        headers: this.headers,
        xform: kt
      })), (l, c) => {
        const d = 200 * Math.pow(2, l);
        return c && tl(c) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + d - o < vn;
      });
    } catch (o) {
      if (this._debug(s, "error", o), B(o))
        return this._returnResult({ data: { session: null, user: null }, error: o });
      throw o;
    } finally {
      this._debug(s, "end");
    }
  }
  _isValidSession(r) {
    return typeof r == "object" && r !== null && "access_token" in r && "refresh_token" in r && "expires_at" in r;
  }
  async _handleProviderSignIn(r, s) {
    const o = await this._getUrlForProvider(`${this.url}/authorize`, r, {
      redirectTo: s.redirectTo,
      scopes: s.scopes,
      queryParams: s.queryParams
    });
    return this._debug("#_handleProviderSignIn()", "provider", r, "options", s, "url", o), qe() && !s.skipBrowserRedirect && window.location.assign(o), { data: { provider: r, url: o }, error: null };
  }
  /**
   * Recovers the session from LocalStorage and refreshes the token
   * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
   */
  async _recoverAndRefresh() {
    var r, s;
    const o = "#_recoverAndRefresh()";
    this._debug(o, "begin");
    try {
      const l = await $r(this.storage, this.storageKey);
      if (l && this.userStorage) {
        let d = await $r(this.userStorage, this.storageKey + "-user");
        !this.storage.isServer && Object.is(this.storage, this.userStorage) && !d && (d = { user: l.user }, await wn(this.userStorage, this.storageKey + "-user", d)), l.user = (r = d?.user) !== null && r !== void 0 ? r : rl();
      } else if (l && !l.user && !l.user) {
        const d = await $r(this.storage, this.storageKey + "-user");
        d && d?.user ? (l.user = d.user, await He(this.storage, this.storageKey + "-user"), await wn(this.storage, this.storageKey, l)) : l.user = rl();
      }
      if (this._debug(o, "session from storage", l), !this._isValidSession(l)) {
        this._debug(o, "session is not valid"), l !== null && await this._removeSession();
        return;
      }
      const c = ((s = l.expires_at) !== null && s !== void 0 ? s : 1 / 0) * 1e3 - Date.now() < el;
      if (this._debug(o, `session has${c ? "" : " not"} expired with margin of ${el}s`), c) {
        if (this.autoRefreshToken && l.refresh_token) {
          const { error: d } = await this._callRefreshToken(l.refresh_token);
          d && (console.error(d), tl(d) || (this._debug(o, "refresh failed with a non-retryable error, removing the session", d), await this._removeSession()));
        }
      } else if (l.user && l.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: d, error: f } = await this._getUser(l.access_token);
          !f && d?.user ? (l.user = d.user, await this._saveSession(l), await this._notifyAllSubscribers("SIGNED_IN", l)) : this._debug(o, "could not get user data, skipping SIGNED_IN notification");
        } catch (d) {
          console.error("Error getting user data:", d), this._debug(o, "error getting user data, skipping SIGNED_IN notification", d);
        }
      else
        await this._notifyAllSubscribers("SIGNED_IN", l);
    } catch (l) {
      this._debug(o, "error", l), console.error(l);
      return;
    } finally {
      this._debug(o, "end");
    }
  }
  async _callRefreshToken(r) {
    var s, o;
    if (!r)
      throw new Be();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const l = `#_callRefreshToken(${r.substring(0, 5)}...)`;
    this._debug(l, "begin");
    try {
      this.refreshingDeferred = new eo();
      const { data: c, error: d } = await this._refreshAccessToken(r);
      if (d)
        throw d;
      if (!c.session)
        throw new Be();
      await this._saveSession(c.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", c.session);
      const f = { data: c.session, error: null };
      return this.refreshingDeferred.resolve(f), f;
    } catch (c) {
      if (this._debug(l, "error", c), B(c)) {
        const d = { data: null, error: c };
        return tl(c) || await this._removeSession(), (s = this.refreshingDeferred) === null || s === void 0 || s.resolve(d), d;
      }
      throw (o = this.refreshingDeferred) === null || o === void 0 || o.reject(c), c;
    } finally {
      this.refreshingDeferred = null, this._debug(l, "end");
    }
  }
  async _notifyAllSubscribers(r, s, o = !0) {
    const l = `#_notifyAllSubscribers(${r})`;
    this._debug(l, "begin", s, `broadcast = ${o}`);
    try {
      this.broadcastChannel && o && this.broadcastChannel.postMessage({ event: r, session: s });
      const c = [], d = Array.from(this.stateChangeEmitters.values()).map(async (f) => {
        try {
          await f.callback(r, s);
        } catch (p) {
          c.push(p);
        }
      });
      if (await Promise.all(d), c.length > 0) {
        for (let f = 0; f < c.length; f += 1)
          console.error(c[f]);
        throw c[0];
      }
    } finally {
      this._debug(l, "end");
    }
  }
  /**
   * set currentSession and currentUser
   * process to _startAutoRefreshToken if possible
   */
  async _saveSession(r) {
    this._debug("#_saveSession()", r), this.suppressGetSessionWarning = !0, await He(this.storage, `${this.storageKey}-code-verifier`);
    const s = Object.assign({}, r), o = s.user && s.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !o && s.user && await wn(this.userStorage, this.storageKey + "-user", {
        user: s.user
      });
      const l = Object.assign({}, s);
      delete l.user;
      const c = qd(l);
      await wn(this.storage, this.storageKey, c);
    } else {
      const l = qd(s);
      await wn(this.storage, this.storageKey, l);
    }
  }
  async _removeSession() {
    this._debug("#_removeSession()"), this.suppressGetSessionWarning = !1, await He(this.storage, this.storageKey), await He(this.storage, this.storageKey + "-code-verifier"), await He(this.storage, this.storageKey + "-user"), this.userStorage && await He(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  /**
   * Removes any registered visibilitychange callback.
   *
   * {@see #startAutoRefresh}
   * {@see #stopAutoRefresh}
   */
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const r = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      r && qe() && window?.removeEventListener && window.removeEventListener("visibilitychange", r);
    } catch (s) {
      console.error("removing visibilitychange callback failed", s);
    }
  }
  /**
   * This is the private implementation of {@link #startAutoRefresh}. Use this
   * within the library.
   */
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const r = setInterval(() => this._autoRefreshTokenTick(), vn);
    this.autoRefreshTicker = r, r && typeof r == "object" && typeof r.unref == "function" ? r.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(r);
    const s = setTimeout(async () => {
      await this.initializePromise, await this._autoRefreshTokenTick();
    }, 0);
    this.autoRefreshTickTimeout = s, s && typeof s == "object" && typeof s.unref == "function" ? s.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(s);
  }
  /**
   * This is the private implementation of {@link #stopAutoRefresh}. Use this
   * within the library.
   */
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const r = this.autoRefreshTicker;
    this.autoRefreshTicker = null, r && clearInterval(r);
    const s = this.autoRefreshTickTimeout;
    this.autoRefreshTickTimeout = null, s && clearTimeout(s);
  }
  /**
   * Starts an auto-refresh process in the background. The session is checked
   * every few seconds. Close to the time of expiration a process is started to
   * refresh the session. If refreshing fails it will be retried for as long as
   * necessary.
   *
   * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
   * to call this function, it will be called for you.
   *
   * On browsers the refresh process works only when the tab/window is in the
   * foreground to conserve resources as well as prevent race conditions and
   * flooding auth with requests. If you call this method any managed
   * visibility change callback will be removed and you must manage visibility
   * changes on your own.
   *
   * On non-browser platforms the refresh process works *continuously* in the
   * background, which may not be desirable. You should hook into your
   * platform's foreground indication mechanism and call these methods
   * appropriately to conserve resources.
   *
   * {@see #stopAutoRefresh}
   *
   * @category Auth
   *
   * @remarks
   * - Only useful in non-browser environments such as React Native or Electron.
   * - The Supabase Auth library automatically starts and stops proactively refreshing the session when a tab is focused or not.
   * - On non-browser platforms, such as mobile or desktop apps built with web technologies, the library is not able to effectively determine whether the application is _focused_ or not.
   * - To give this hint to the application, you should be calling this method when the app is in focus and calling `supabase.auth.stopAutoRefresh()` when it's out of focus.
   *
   * @example Start and stop auto refresh in React Native
   * ```js
   * import { AppState } from 'react-native'
   *
   * // make sure you register this only once!
   * AppState.addEventListener('change', (state) => {
   *   if (state === 'active') {
   *     supabase.auth.startAutoRefresh()
   *   } else {
   *     supabase.auth.stopAutoRefresh()
   *   }
   * })
   * ```
   */
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  /**
   * Stops an active auto refresh process running in the background (if any).
   *
   * If you call this method any managed visibility change callback will be
   * removed and you must manage visibility changes on your own.
   *
   * See {@link #startAutoRefresh} for more details.
   *
   * @category Auth
   *
   * @remarks
   * - Only useful in non-browser environments such as React Native or Electron.
   * - The Supabase Auth library automatically starts and stops proactively refreshing the session when a tab is focused or not.
   * - On non-browser platforms, such as mobile or desktop apps built with web technologies, the library is not able to effectively determine whether the application is _focused_ or not.
   * - When your application goes in the background or out of focus, call this method to stop the proactive refreshing of the session.
   *
   * @example Start and stop auto refresh in React Native
   * ```js
   * import { AppState } from 'react-native'
   *
   * // make sure you register this only once!
   * AppState.addEventListener('change', (state) => {
   *   if (state === 'active') {
   *     supabase.auth.startAutoRefresh()
   *   } else {
   *     supabase.auth.stopAutoRefresh()
   *   }
   * })
   * ```
   */
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  /**
   * Runs the auto refresh token tick.
   */
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const r = Date.now();
          try {
            return await this._useSession(async (s) => {
              const { data: { session: o } } = s;
              if (!o || !o.refresh_token || !o.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const l = Math.floor((o.expires_at * 1e3 - r) / vn);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${l} ticks, a tick lasts ${vn}ms, refresh threshold is ${ml} ticks`), l <= ml && await this._callRefreshToken(o.refresh_token);
            });
          } catch (s) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", s);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (r) {
      if (r instanceof jh)
        this._debug("auto refresh token tick lock not available");
      else
        throw r;
    }
  }
  /**
   * Registers callbacks on the browser / platform, which in-turn run
   * algorithms when the browser window/tab are in foreground. On non-browser
   * platforms it assumes always foreground.
   */
  async _handleVisibilityChange() {
    if (this._debug("#_handleVisibilityChange()"), !qe() || !window?.addEventListener)
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      this.visibilityChangedCallback = async () => {
        try {
          await this._onVisibilityChanged(!1);
        } catch (r) {
          this._debug("#visibilityChangedCallback", "error", r);
        }
      }, window?.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0);
    } catch (r) {
      console.error("_handleVisibilityChange", r);
    }
  }
  /**
   * Callback registered with `window.addEventListener('visibilitychange')`.
   */
  async _onVisibilityChanged(r) {
    const s = `#_onVisibilityChanged(${r})`;
    this._debug(s, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), r || (await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => {
      if (document.visibilityState !== "visible") {
        this._debug(s, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
        return;
      }
      await this._recoverAndRefresh();
    }))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
  }
  /**
   * Generates the relevant login URL for a third-party provider.
   * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param options.scopes A space-separated list of scopes granted to the OAuth application.
   * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
   */
  async _getUrlForProvider(r, s, o) {
    const l = [`provider=${encodeURIComponent(s)}`];
    if (o?.redirectTo && l.push(`redirect_to=${encodeURIComponent(o.redirectTo)}`), o?.scopes && l.push(`scopes=${encodeURIComponent(o.scopes)}`), this.flowType === "pkce") {
      const [c, d] = await pn(this.storage, this.storageKey), f = new URLSearchParams({
        code_challenge: `${encodeURIComponent(c)}`,
        code_challenge_method: `${encodeURIComponent(d)}`
      });
      l.push(f.toString());
    }
    if (o?.queryParams) {
      const c = new URLSearchParams(o.queryParams);
      l.push(c.toString());
    }
    return o?.skipBrowserRedirect && l.push(`skip_http_redirect=${o.skipBrowserRedirect}`), `${r}?${l.join("&")}`;
  }
  async _unenroll(r) {
    try {
      return await this._useSession(async (s) => {
        var o;
        const { data: l, error: c } = s;
        return c ? this._returnResult({ data: null, error: c }) : await J(this.fetch, "DELETE", `${this.url}/factors/${r.factorId}`, {
          headers: this.headers,
          jwt: (o = l?.session) === null || o === void 0 ? void 0 : o.access_token
        });
      });
    } catch (s) {
      if (B(s))
        return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  async _enroll(r) {
    try {
      return await this._useSession(async (s) => {
        var o, l;
        const { data: c, error: d } = s;
        if (d)
          return this._returnResult({ data: null, error: d });
        const f = Object.assign({ friendly_name: r.friendlyName, factor_type: r.factorType }, r.factorType === "phone" ? { phone: r.phone } : r.factorType === "totp" ? { issuer: r.issuer } : {}), { data: p, error: g } = await J(this.fetch, "POST", `${this.url}/factors`, {
          body: f,
          headers: this.headers,
          jwt: (o = c?.session) === null || o === void 0 ? void 0 : o.access_token
        });
        return g ? this._returnResult({ data: null, error: g }) : (r.factorType === "totp" && p.type === "totp" && (!((l = p?.totp) === null || l === void 0) && l.qr_code) && (p.totp.qr_code = `data:image/svg+xml;utf-8,${p.totp.qr_code}`), this._returnResult({ data: p, error: null }));
      });
    } catch (s) {
      if (B(s))
        return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  async _verify(r) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (s) => {
          var o;
          const { data: l, error: c } = s;
          if (c)
            return this._returnResult({ data: null, error: c });
          const d = Object.assign({ challenge_id: r.challengeId }, "webauthn" in r ? {
            webauthn: Object.assign(Object.assign({}, r.webauthn), { credential_response: r.webauthn.type === "create" ? Xd(r.webauthn.credential_response) : Zd(r.webauthn.credential_response) })
          } : { code: r.code }), { data: f, error: p } = await J(this.fetch, "POST", `${this.url}/factors/${r.factorId}/verify`, {
            body: d,
            headers: this.headers,
            jwt: (o = l?.session) === null || o === void 0 ? void 0 : o.access_token
          });
          return p ? this._returnResult({ data: null, error: p }) : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + f.expires_in }, f)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", f), this._returnResult({ data: f, error: p }));
        });
      } catch (s) {
        if (B(s))
          return this._returnResult({ data: null, error: s });
        throw s;
      }
    });
  }
  async _challenge(r) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (s) => {
          var o;
          const { data: l, error: c } = s;
          if (c)
            return this._returnResult({ data: null, error: c });
          const d = await J(this.fetch, "POST", `${this.url}/factors/${r.factorId}/challenge`, {
            body: r,
            headers: this.headers,
            jwt: (o = l?.session) === null || o === void 0 ? void 0 : o.access_token
          });
          if (d.error)
            return d;
          const { data: f } = d;
          if (f.type !== "webauthn")
            return { data: f, error: null };
          switch (f.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, f), { webauthn: Object.assign(Object.assign({}, f.webauthn), { credential_options: Object.assign(Object.assign({}, f.webauthn.credential_options), { publicKey: Qd(f.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, f), { webauthn: Object.assign(Object.assign({}, f.webauthn), { credential_options: Object.assign(Object.assign({}, f.webauthn.credential_options), { publicKey: Yd(f.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
          }
        });
      } catch (s) {
        if (B(s))
          return this._returnResult({ data: null, error: s });
        throw s;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challengeAndVerify}
   */
  async _challengeAndVerify(r) {
    const { data: s, error: o } = await this._challenge({
      factorId: r.factorId
    });
    return o ? this._returnResult({ data: null, error: o }) : await this._verify({
      factorId: r.factorId,
      challengeId: s.id,
      code: r.code
    });
  }
  /**
   * {@see GoTrueMFAApi#listFactors}
   */
  async _listFactors() {
    var r;
    const { data: { user: s }, error: o } = await this.getUser();
    if (o)
      return { data: null, error: o };
    const l = {
      all: [],
      phone: [],
      totp: [],
      webauthn: []
    };
    for (const c of (r = s?.factors) !== null && r !== void 0 ? r : [])
      l.all.push(c), c.status === "verified" && l[c.factor_type].push(c);
    return {
      data: l,
      error: null
    };
  }
  /**
   * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  async _getAuthenticatorAssuranceLevel(r) {
    var s, o, l, c;
    if (r)
      try {
        const { payload: E } = Fi(r);
        let j = null;
        E.aal && (j = E.aal);
        let P = j;
        const { data: { user: U }, error: z } = await this.getUser(r);
        if (z)
          return this._returnResult({ data: null, error: z });
        ((o = (s = U?.factors) === null || s === void 0 ? void 0 : s.filter((Z) => Z.status === "verified")) !== null && o !== void 0 ? o : []).length > 0 && (P = "aal2");
        const D = E.amr || [];
        return { data: { currentLevel: j, nextLevel: P, currentAuthenticationMethods: D }, error: null };
      } catch (E) {
        if (B(E))
          return this._returnResult({ data: null, error: E });
        throw E;
      }
    const { data: { session: d }, error: f } = await this.getSession();
    if (f)
      return this._returnResult({ data: null, error: f });
    if (!d)
      return {
        data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
        error: null
      };
    const { payload: p } = Fi(d.access_token);
    let g = null;
    p.aal && (g = p.aal);
    let v = g;
    ((c = (l = d.user.factors) === null || l === void 0 ? void 0 : l.filter((E) => E.status === "verified")) !== null && c !== void 0 ? c : []).length > 0 && (v = "aal2");
    const b = p.amr || [];
    return { data: { currentLevel: g, nextLevel: v, currentAuthenticationMethods: b }, error: null };
  }
  /**
   * Retrieves details about an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * Returns authorization details including client info, scopes, and user information.
   * If the response includes only a redirect_url field, it means consent was already given - the caller
   * should handle the redirect manually if needed.
   */
  async _getAuthorizationDetails(r) {
    try {
      return await this._useSession(async (s) => {
        const { data: { session: o }, error: l } = s;
        return l ? this._returnResult({ data: null, error: l }) : o ? await J(this.fetch, "GET", `${this.url}/oauth/authorizations/${r}`, {
          headers: this.headers,
          jwt: o.access_token,
          xform: (c) => ({ data: c, error: null })
        }) : this._returnResult({ data: null, error: new Be() });
      });
    } catch (s) {
      if (B(s))
        return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  /**
   * Approves an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _approveAuthorization(r, s) {
    try {
      return await this._useSession(async (o) => {
        const { data: { session: l }, error: c } = o;
        if (c)
          return this._returnResult({ data: null, error: c });
        if (!l)
          return this._returnResult({ data: null, error: new Be() });
        const d = await J(this.fetch, "POST", `${this.url}/oauth/authorizations/${r}/consent`, {
          headers: this.headers,
          jwt: l.access_token,
          body: { action: "approve" },
          xform: (f) => ({ data: f, error: null })
        });
        return d.data && d.data.redirect_url && qe() && !s?.skipBrowserRedirect && window.location.assign(d.data.redirect_url), d;
      });
    } catch (o) {
      if (B(o))
        return this._returnResult({ data: null, error: o });
      throw o;
    }
  }
  /**
   * Denies an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _denyAuthorization(r, s) {
    try {
      return await this._useSession(async (o) => {
        const { data: { session: l }, error: c } = o;
        if (c)
          return this._returnResult({ data: null, error: c });
        if (!l)
          return this._returnResult({ data: null, error: new Be() });
        const d = await J(this.fetch, "POST", `${this.url}/oauth/authorizations/${r}/consent`, {
          headers: this.headers,
          jwt: l.access_token,
          body: { action: "deny" },
          xform: (f) => ({ data: f, error: null })
        });
        return d.data && d.data.redirect_url && qe() && !s?.skipBrowserRedirect && window.location.assign(d.data.redirect_url), d;
      });
    } catch (o) {
      if (B(o))
        return this._returnResult({ data: null, error: o });
      throw o;
    }
  }
  /**
   * Lists all OAuth grants that the authenticated user has authorized.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _listOAuthGrants() {
    try {
      return await this._useSession(async (r) => {
        const { data: { session: s }, error: o } = r;
        return o ? this._returnResult({ data: null, error: o }) : s ? await J(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
          headers: this.headers,
          jwt: s.access_token,
          xform: (l) => ({ data: l, error: null })
        }) : this._returnResult({ data: null, error: new Be() });
      });
    } catch (r) {
      if (B(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**
   * Revokes a user's OAuth grant for a specific client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _revokeOAuthGrant(r) {
    try {
      return await this._useSession(async (s) => {
        const { data: { session: o }, error: l } = s;
        return l ? this._returnResult({ data: null, error: l }) : o ? (await J(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
          headers: this.headers,
          jwt: o.access_token,
          query: { client_id: r.clientId },
          noResolveJson: !0
        }), { data: {}, error: null }) : this._returnResult({ data: null, error: new Be() });
      });
    } catch (s) {
      if (B(s))
        return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  async fetchJwk(r, s = { keys: [] }) {
    let o = s.keys.find((f) => f.kid === r);
    if (o)
      return o;
    const l = Date.now();
    if (o = this.jwks.keys.find((f) => f.kid === r), o && this.jwks_cached_at + bg > l)
      return o;
    const { data: c, error: d } = await J(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
      headers: this.headers
    });
    if (d)
      throw d;
    return !c.keys || c.keys.length === 0 || (this.jwks = c, this.jwks_cached_at = l, o = c.keys.find((f) => f.kid === r), !o) ? null : o;
  }
  /**
   * Extracts the JWT claims present in the access token by first verifying the
   * JWT against the server's JSON Web Key Set endpoint
   * `/.well-known/jwks.json` which is often cached, resulting in significantly
   * faster responses. Prefer this method over {@link #getUser} which always
   * sends a request to the Auth server for each JWT.
   *
   * If the project is not using an asymmetric JWT signing key (like ECC or
   * RSA) it always sends a request to the Auth server (similar to {@link
   * #getUser}) to verify the JWT.
   *
   * @param jwt An optional specific JWT you wish to verify, not the one you
   *            can obtain from {@link #getSession}.
   * @param options Various additional options that allow you to customize the
   *                behavior of this method.
   *
   * @category Auth
   *
   * @remarks
   * - Parses the user's [access token](/docs/guides/auth/sessions#access-token-jwt-claims) as a [JSON Web Token (JWT)](/docs/guides/auth/jwts) and returns its components if valid and not expired.
   * - If your project is using asymmetric JWT signing keys, then the verification is done locally usually without a network request using the [WebCrypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API).
   * - A network request is sent to your project's JWT signing key discovery endpoint `https://project-id.supabase.co/auth/v1/.well-known/jwks.json`, which is cached locally. If your environment is ephemeral, such as a Lambda function that is destroyed after every request, a network request will be sent for each new invocation. Supabase provides a network-edge cache providing fast responses for these situations.
   * - If the user's access token is about to expire when calling this function, the user's session will first be refreshed before validating the JWT.
   * - If your project is using a symmetric secret to sign the JWT, it always sends a request similar to `getUser()` to validate the JWT at the server before returning the decoded token. This is also used if the WebCrypto API is not available in the environment. Make sure you polyfill it in such situations.
   * - The returned claims can be customized per project using the [Custom Access Token Hook](/docs/guides/auth/auth-hooks/custom-access-token-hook).
   *
   * @example Get JWT claims, header and signature
   * ```js
   * const { data, error } = await supabase.auth.getClaims()
   * ```
   *
   * @exampleResponse Get JWT claims, header and signature
   * ```json
   * {
   *   "data": {
   *     "claims": {
   *       "aal": "aal1",
   *       "amr": [{
   *         "method": "email",
   *         "timestamp": 1715766000
   *       }],
   *       "app_metadata": {},
   *       "aud": "authenticated",
   *       "email": "example@email.com",
   *       "exp": 1715769600,
   *       "iat": 1715766000,
   *       "is_anonymous": false,
   *       "iss": "https://project-id.supabase.co/auth/v1",
   *       "phone": "+13334445555",
   *       "role": "authenticated",
   *       "session_id": "11111111-1111-1111-1111-111111111111",
   *       "sub": "11111111-1111-1111-1111-111111111111",
   *       "user_metadata": {}
   *     },
   *     "header": {
   *       "alg": "RS256",
   *       "typ": "JWT",
   *       "kid": "11111111-1111-1111-1111-111111111111"
   *     },
   *     "signature": [/** Uint8Array *\/],
   *   },
   *   "error": null
   * }
   * ```
   */
  async getClaims(r, s = {}) {
    try {
      let o = r;
      if (!o) {
        const { data: E, error: j } = await this.getSession();
        if (j || !E.session)
          return this._returnResult({ data: null, error: j });
        o = E.session.access_token;
      }
      const { header: l, payload: c, signature: d, raw: { header: f, payload: p } } = Fi(o);
      s?.allowExpired || Wg(c.exp);
      const g = !l.alg || l.alg.startsWith("HS") || !l.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(l.kid, s?.keys ? { keys: s.keys } : s?.jwks);
      if (!g) {
        const { error: E } = await this.getUser(o);
        if (E)
          throw E;
        return {
          data: {
            claims: c,
            header: l,
            signature: d
          },
          error: null
        };
      }
      const v = Vg(l.alg), _ = await crypto.subtle.importKey("jwk", g, v, !0, [
        "verify"
      ]);
      if (!await crypto.subtle.verify(v, _, d, Og(`${f}.${p}`)))
        throw new vl("Invalid JWT signature");
      return {
        data: {
          claims: c,
          header: l,
          signature: d
        },
        error: null
      };
    } catch (o) {
      if (B(o))
        return this._returnResult({ data: null, error: o });
      throw o;
    }
  }
  // --- Passkey Methods ---
  /**
   * Sign in with a passkey. Handles the full WebAuthn ceremony:
   * 1. Fetches authentication challenge from server
   * 2. Prompts user via navigator.credentials.get()
   * 3. Verifies credential with server and creates session
   *
   * Requires `auth.experimental.passkey: true`.
   *
   * @category Auth
   */
  async signInWithPasskey(r) {
    var s, o, l;
    jt(this.experimental);
    try {
      if (!Ji())
        return this._returnResult({
          data: null,
          error: new At("Browser does not support WebAuthn", null)
        });
      const { data: c, error: d } = await this._startPasskeyAuthentication({
        options: { captchaToken: (s = r?.options) === null || s === void 0 ? void 0 : s.captchaToken }
      });
      if (d || !c)
        return this._returnResult({ data: null, error: d });
      const f = Yd(c.options), p = (l = (o = r?.options) === null || o === void 0 ? void 0 : o.signal) !== null && l !== void 0 ? l : wl.createNewAbortSignal(), { data: g, error: v } = await Nh({
        publicKey: f,
        signal: p
      });
      if (v || !g)
        return this._returnResult({
          data: null,
          error: v ?? new At("WebAuthn ceremony failed", null)
        });
      const _ = Zd(g);
      return this._verifyPasskeyAuthentication({
        challengeId: c.challenge_id,
        credential: _
      });
    } catch (c) {
      if (B(c))
        return this._returnResult({ data: null, error: c });
      throw c;
    }
  }
  /**
   * Register a passkey for the current authenticated user. Handles the full WebAuthn ceremony:
   * 1. Fetches registration challenge from server
   * 2. Prompts user via navigator.credentials.create()
   * 3. Verifies credential with server
   *
   * Requires an active session. Requires `auth.experimental.passkey: true`.
   *
   * @category Auth
   */
  async registerPasskey(r) {
    var s, o;
    jt(this.experimental);
    try {
      if (!Ji())
        return this._returnResult({
          data: null,
          error: new At("Browser does not support WebAuthn", null)
        });
      const { data: l, error: c } = await this._startPasskeyRegistration();
      if (c || !l)
        return this._returnResult({ data: null, error: c });
      const d = Qd(l.options), f = (o = (s = r?.options) === null || s === void 0 ? void 0 : s.signal) !== null && o !== void 0 ? o : wl.createNewAbortSignal(), { data: p, error: g } = await Oh({
        publicKey: d,
        signal: f
      });
      if (g || !p)
        return this._returnResult({
          data: null,
          error: g ?? new At("WebAuthn ceremony failed", null)
        });
      const v = Xd(p);
      return this._verifyPasskeyRegistration({
        challengeId: l.challenge_id,
        credential: v
      });
    } catch (l) {
      if (B(l))
        return this._returnResult({ data: null, error: l });
      throw l;
    }
  }
  /**
   * Start passkey registration for the current authenticated user.
   * Returns WebAuthn credential creation options to pass to navigator.credentials.create().
   */
  async _startPasskeyRegistration() {
    jt(this.experimental);
    try {
      return await this._useSession(async (r) => {
        const { data: { session: s }, error: o } = r;
        if (o)
          return this._returnResult({ data: null, error: o });
        if (!s)
          return this._returnResult({ data: null, error: new Be() });
        const { data: l, error: c } = await J(this.fetch, "POST", `${this.url}/passkeys/registration/options`, {
          headers: this.headers,
          jwt: s.access_token,
          body: {}
        });
        return c ? this._returnResult({ data: null, error: c }) : this._returnResult({ data: l, error: null });
      });
    } catch (r) {
      if (B(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**
   * Verify passkey registration with the credential response.
   * The credentialResponse should be the serialized output of navigator.credentials.create().
   */
  async _verifyPasskeyRegistration(r) {
    jt(this.experimental);
    try {
      return await this._useSession(async (s) => {
        const { data: { session: o }, error: l } = s;
        if (l)
          return this._returnResult({ data: null, error: l });
        if (!o)
          return this._returnResult({ data: null, error: new Be() });
        const { data: c, error: d } = await J(this.fetch, "POST", `${this.url}/passkeys/registration/verify`, {
          headers: this.headers,
          jwt: o.access_token,
          body: {
            challenge_id: r.challengeId,
            credential: r.credential
          }
        });
        return d ? this._returnResult({ data: null, error: d }) : this._returnResult({ data: c, error: null });
      });
    } catch (s) {
      if (B(s))
        return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  /**
   * Start passkey authentication.
   * Returns WebAuthn credential request options to pass to navigator.credentials.get().
   */
  async _startPasskeyAuthentication(r) {
    var s;
    jt(this.experimental);
    try {
      const { data: o, error: l } = await J(this.fetch, "POST", `${this.url}/passkeys/authentication/options`, {
        headers: this.headers,
        body: {
          gotrue_meta_security: { captcha_token: (s = r?.options) === null || s === void 0 ? void 0 : s.captchaToken }
        }
      });
      return l ? this._returnResult({ data: null, error: l }) : this._returnResult({ data: o, error: null });
    } catch (o) {
      if (B(o))
        return this._returnResult({ data: null, error: o });
      throw o;
    }
  }
  /**
   * Verify passkey authentication and create a session.
   * The credential should be the serialized output of navigator.credentials.get().
   */
  async _verifyPasskeyAuthentication(r) {
    jt(this.experimental);
    try {
      const { data: s, error: o } = await J(this.fetch, "POST", `${this.url}/passkeys/authentication/verify`, {
        headers: this.headers,
        body: {
          challenge_id: r.challengeId,
          credential: r.credential
        },
        xform: kt
      });
      return o ? this._returnResult({ data: null, error: o }) : (s.session && (await this._saveSession(s.session), await this._notifyAllSubscribers("SIGNED_IN", s.session)), this._returnResult({ data: s, error: null }));
    } catch (s) {
      if (B(s))
        return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  /**
   * List all passkeys for the current user.
   */
  async _listPasskeys() {
    jt(this.experimental);
    try {
      return await this._useSession(async (r) => {
        const { data: { session: s }, error: o } = r;
        if (o)
          return this._returnResult({ data: null, error: o });
        if (!s)
          return this._returnResult({ data: null, error: new Be() });
        const { data: l, error: c } = await J(this.fetch, "GET", `${this.url}/passkeys`, {
          headers: this.headers,
          jwt: s.access_token,
          xform: (d) => ({ data: d, error: null })
        });
        return c ? this._returnResult({ data: null, error: c }) : this._returnResult({ data: l, error: null });
      });
    } catch (r) {
      if (B(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**
   * Update a passkey.
   */
  async _updatePasskey(r) {
    jt(this.experimental);
    try {
      return await this._useSession(async (s) => {
        const { data: { session: o }, error: l } = s;
        if (l)
          return this._returnResult({ data: null, error: l });
        if (!o)
          return this._returnResult({ data: null, error: new Be() });
        const { data: c, error: d } = await J(this.fetch, "PATCH", `${this.url}/passkeys/${r.passkeyId}`, {
          headers: this.headers,
          jwt: o.access_token,
          body: { friendly_name: r.friendlyName }
        });
        return d ? this._returnResult({ data: null, error: d }) : this._returnResult({ data: c, error: null });
      });
    } catch (s) {
      if (B(s))
        return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  /**
   * Delete a passkey.
   */
  async _deletePasskey(r) {
    jt(this.experimental);
    try {
      return await this._useSession(async (s) => {
        const { data: { session: o }, error: l } = s;
        if (l)
          return this._returnResult({ data: null, error: l });
        if (!o)
          return this._returnResult({ data: null, error: new Be() });
        const { error: c } = await J(this.fetch, "DELETE", `${this.url}/passkeys/${r.passkeyId}`, {
          headers: this.headers,
          jwt: o.access_token,
          noResolveJson: !0
        });
        return c ? this._returnResult({ data: null, error: c }) : this._returnResult({ data: null, error: null });
      });
    } catch (s) {
      if (B(s))
        return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
}
Ss.nextInstanceID = {};
const gy = Ss, yy = "2.106.2";
let ps = "";
typeof Deno < "u" ? ps = "deno" : typeof document < "u" ? ps = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? ps = "react-native" : ps = "node";
const vy = { "X-Client-Info": `supabase-js-${ps}/${yy}` }, wy = { headers: vy }, _y = { schema: "public" }, ky = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, Sy = {}, by = {
  enabled: !1,
  respectSamplingDecision: !0
};
function Ey(n, r, s, o) {
  function l(c) {
    return c instanceof s ? c : new s(function(d) {
      d(c);
    });
  }
  return new (s || (s = Promise))(function(c, d) {
    function f(v) {
      try {
        g(o.next(v));
      } catch (_) {
        d(_);
      }
    }
    function p(v) {
      try {
        g(o.throw(v));
      } catch (_) {
        d(_);
      }
    }
    function g(v) {
      v.done ? c(v.value) : l(v.value).then(f, p);
    }
    g((o = o.apply(n, [])).next());
  });
}
let sl = null;
const xy = "@opentelemetry/api";
function Ty() {
  return sl === null && (sl = import(
    /* webpackIgnore: true */
    /* turbopackIgnore: true */
    /* @vite-ignore */
    xy
  ).catch(() => null)), sl;
}
function Cy() {
  return Ey(this, void 0, void 0, function* () {
    try {
      const n = yield Ty();
      if (!n || !n.propagation || !n.context) return null;
      const r = {};
      n.propagation.inject(n.context.active(), r);
      const s = r.traceparent;
      return s ? {
        traceparent: s,
        tracestate: r.tracestate,
        baggage: r.baggage
      } : null;
    } catch {
      return null;
    }
  });
}
function Ry(n) {
  if (!n || typeof n != "string") return null;
  const r = n.split("-");
  if (r.length !== 4) return null;
  const [s, o, l, c] = r;
  if (s.length !== 2 || o.length !== 32 || l.length !== 16 || c.length !== 2) return null;
  const d = /^[0-9a-f]+$/i;
  return !d.test(s) || !d.test(o) || !d.test(l) || !d.test(c) || o === "00000000000000000000000000000000" || l === "0000000000000000" ? null : {
    version: s,
    traceId: o,
    parentId: l,
    traceFlags: c,
    isSampled: (parseInt(c, 16) & 1) === 1
  };
}
function jy(n, r) {
  if (!n || !r || r.length === 0) return !1;
  let s;
  if (n instanceof URL) s = n;
  else try {
    s = new URL(n);
  } catch {
    return !1;
  }
  for (const o of r) try {
    if (typeof o == "string") {
      if (Py(s.hostname, o)) return !0;
    } else if (o instanceof RegExp) {
      if (o.test(s.hostname)) return !0;
    } else if (typeof o == "function" && o(s))
      return !0;
  } catch {
    continue;
  }
  return !1;
}
function Py(n, r) {
  if (r === n) return !0;
  if (r.startsWith("*.")) {
    const s = r.slice(2);
    if (n.endsWith(s) && (n === s || n.endsWith("." + s)))
      return !0;
  }
  return !1;
}
function Ay(n) {
  const r = [];
  try {
    const s = new URL(n);
    r.push(s.hostname);
  } catch {
  }
  return r.push("*.supabase.co", "*.supabase.in"), r.push("localhost", "127.0.0.1", "[::1]"), r;
}
function bs(n) {
  "@babel/helpers - typeof";
  return bs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, bs(n);
}
function Oy(n, r) {
  if (bs(n) != "object" || !n) return n;
  var s = n[Symbol.toPrimitive];
  if (s !== void 0) {
    var o = s.call(n, r);
    if (bs(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(n);
}
function Ny(n) {
  var r = Oy(n, "string");
  return bs(r) == "symbol" ? r : r + "";
}
function Iy(n, r, s) {
  return (r = Ny(r)) in n ? Object.defineProperty(n, r, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[r] = s, n;
}
function th(n, r) {
  var s = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    r && (o = o.filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    })), s.push.apply(s, o);
  }
  return s;
}
function Ce(n) {
  for (var r = 1; r < arguments.length; r++) {
    var s = arguments[r] != null ? arguments[r] : {};
    r % 2 ? th(Object(s), !0).forEach(function(o) {
      Iy(n, o, s[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : th(Object(s)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(s, o));
    });
  }
  return n;
}
const Ly = (n) => n ? (...r) => n(...r) : (...r) => fetch(...r), $y = () => Headers, Uy = (n, r, s, o, l) => {
  const c = Ly(o), d = $y(), f = l?.enabled === !0, p = l?.respectSamplingDecision !== !1, g = f ? Ay(r) : null;
  return async (v, _) => {
    var b;
    const E = (b = await s()) !== null && b !== void 0 ? b : n;
    let j = new d(_?.headers);
    if (j.has("apikey") || j.set("apikey", n), j.has("Authorization") || j.set("Authorization", `Bearer ${E}`), g) {
      const P = await Dy(v, g, p);
      P && (P.traceparent && !j.has("traceparent") && j.set("traceparent", P.traceparent), P.tracestate && !j.has("tracestate") && j.set("tracestate", P.tracestate), P.baggage && !j.has("baggage") && j.set("baggage", P.baggage));
    }
    return c(v, Ce(Ce({}, _), {}, { headers: j }));
  };
};
async function Dy(n, r, s) {
  if (!jy(typeof n == "string" || n instanceof URL ? n : n.url, r)) return null;
  const o = await Cy();
  if (!o || !o.traceparent) return null;
  if (s) {
    const l = Ry(o.traceparent);
    if (l && !l.isSampled) return null;
  }
  return o;
}
function rh(n) {
  return typeof n == "boolean" ? { enabled: n } : n;
}
function My(n) {
  return n.endsWith("/") ? n : n + "/";
}
function By(n, r) {
  var s, o, l, c, d, f;
  const { db: p, auth: g, realtime: v, global: _ } = n, { db: b, auth: E, realtime: j, global: P } = r, U = rh(n.tracePropagation), z = rh(r.tracePropagation), H = {
    db: Ce(Ce({}, b), p),
    auth: Ce(Ce({}, E), g),
    realtime: Ce(Ce({}, j), v),
    storage: {},
    global: Ce(Ce(Ce({}, P), _), {}, { headers: Ce(Ce({}, (s = P?.headers) !== null && s !== void 0 ? s : {}), (o = _?.headers) !== null && o !== void 0 ? o : {}) }),
    tracePropagation: {
      enabled: (l = (c = U?.enabled) !== null && c !== void 0 ? c : z?.enabled) !== null && l !== void 0 ? l : !1,
      respectSamplingDecision: (d = (f = U?.respectSamplingDecision) !== null && f !== void 0 ? f : z?.respectSamplingDecision) !== null && d !== void 0 ? d : !0
    },
    accessToken: async () => ""
  };
  return n.accessToken ? H.accessToken = n.accessToken : delete H.accessToken, H;
}
function zy(n) {
  const r = n?.trim();
  if (!r) throw new Error("supabaseUrl is required.");
  if (!r.match(/^https?:\/\//i)) throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(My(r));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var Fy = class extends gy {
  constructor(n) {
    super(n);
  }
}, Hy = class {
  /**
  * Create a new client for use in the browser.
  *
  * @category Initializing
  *
  * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
  * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
  * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
  * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
  * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
  * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
  * @param options.realtime Options passed along to realtime-js constructor.
  * @param options.storage Options passed along to the storage-js constructor.
  * @param options.global.fetch A custom fetch implementation.
  * @param options.global.headers Any additional headers to send with each network request.
  *
  * @example Creating a client
  * ```js
  * import { createClient } from '@supabase/supabase-js'
  *
  * // Create a single supabase client for interacting with your database
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * ```
  *
  * @example With a custom domain
  * ```js
  * import { createClient } from '@supabase/supabase-js'
  *
  * // Use a custom domain as the supabase URL
  * const supabase = createClient('https://my-custom-domain.com', 'your-publishable-key')
  * ```
  *
  * @example With additional parameters
  * ```js
  * import { createClient } from '@supabase/supabase-js'
  *
  * const options = {
  *   db: {
  *     schema: 'public',
  *   },
  *   auth: {
  *     autoRefreshToken: true,
  *     persistSession: true,
  *     detectSessionInUrl: true
  *   },
  *   global: {
  *     headers: { 'x-my-custom-header': 'my-app-name' },
  *   },
  * }
  * const supabase = createClient("https://xyzcompany.supabase.co", "your-publishable-key", options)
  * ```
  *
  * @exampleDescription With custom schemas
  * By default the API server points to the `public` schema. You can enable other database schemas within the Dashboard.
  * Go to [Settings > API > Exposed schemas](/dashboard/project/_/settings/api) and add the schema which you want to expose to the API.
  *
  * Note: each client connection can only access a single schema, so the code above can access the `other_schema` schema but cannot access the `public` schema.
  *
  * @example With custom schemas
  * ```js
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key', {
  *   // Provide a custom schema. Defaults to "public".
  *   db: { schema: 'other_schema' }
  * })
  * ```
  *
  * @exampleDescription Custom fetch implementation
  * `supabase-js` uses the [`cross-fetch`](https://www.npmjs.com/package/cross-fetch) library to make HTTP requests,
  * but an alternative `fetch` implementation can be provided as an option.
  * This is most useful in environments where `cross-fetch` is not compatible (for instance Cloudflare Workers).
  *
  * @example Custom fetch implementation
  * ```js
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key', {
  *   global: { fetch: fetch.bind(globalThis) }
  * })
  * ```
  *
  * @exampleDescription React Native options with AsyncStorage
  * For React Native we recommend using `AsyncStorage` as the storage implementation for Supabase Auth.
  *
  * @example React Native options with AsyncStorage
  * ```js
  * import 'react-native-url-polyfill/auto'
  * import { createClient } from '@supabase/supabase-js'
  * import AsyncStorage from "@react-native-async-storage/async-storage";
  *
  * const supabase = createClient("https://xyzcompany.supabase.co", "your-publishable-key", {
  *   auth: {
  *     storage: AsyncStorage,
  *     autoRefreshToken: true,
  *     persistSession: true,
  *     detectSessionInUrl: false,
  *   },
  * });
  * ```
  *
  * @exampleDescription React Native options with Expo SecureStore
  * If you wish to encrypt the user's session information, you can use `aes-js` and store the encryption key in Expo SecureStore.
  * The `aes-js` library, a reputable JavaScript-only implementation of the AES encryption algorithm in CTR mode.
  * A new 256-bit encryption key is generated using the `react-native-get-random-values` library.
  * This key is stored inside Expo's SecureStore, while the value is encrypted and placed inside AsyncStorage.
  *
  * Please make sure that:
  * - You keep the `expo-secure-store`, `aes-js` and `react-native-get-random-values` libraries up-to-date.
  * - Choose the correct [`SecureStoreOptions`](https://docs.expo.dev/versions/latest/sdk/securestore/#securestoreoptions) for your app's needs.
  *   E.g. [`SecureStore.WHEN_UNLOCKED`](https://docs.expo.dev/versions/latest/sdk/securestore/#securestorewhen_unlocked) regulates when the data can be accessed.
  * - Carefully consider optimizations or other modifications to the above example, as those can lead to introducing subtle security vulnerabilities.
  *
  * @example React Native options with Expo SecureStore
  * ```ts
  * import 'react-native-url-polyfill/auto'
  * import { createClient } from '@supabase/supabase-js'
  * import AsyncStorage from '@react-native-async-storage/async-storage';
  * import * as SecureStore from 'expo-secure-store';
  * import * as aesjs from 'aes-js';
  * import 'react-native-get-random-values';
  *
  * // As Expo's SecureStore does not support values larger than 2048
  * // bytes, an AES-256 key is generated and stored in SecureStore, while
  * // it is used to encrypt/decrypt values stored in AsyncStorage.
  * class LargeSecureStore {
  *   private async _encrypt(key: string, value: string) {
  *     const encryptionKey = crypto.getRandomValues(new Uint8Array(256 / 8));
  *
  *     const cipher = new aesjs.ModeOfOperation.ctr(encryptionKey, new aesjs.Counter(1));
  *     const encryptedBytes = cipher.encrypt(aesjs.utils.utf8.toBytes(value));
  *
  *     await SecureStore.setItemAsync(key, aesjs.utils.hex.fromBytes(encryptionKey));
  *
  *     return aesjs.utils.hex.fromBytes(encryptedBytes);
  *   }
  *
  *   private async _decrypt(key: string, value: string) {
  *     const encryptionKeyHex = await SecureStore.getItemAsync(key);
  *     if (!encryptionKeyHex) {
  *       return encryptionKeyHex;
  *     }
  *
  *     const cipher = new aesjs.ModeOfOperation.ctr(aesjs.utils.hex.toBytes(encryptionKeyHex), new aesjs.Counter(1));
  *     const decryptedBytes = cipher.decrypt(aesjs.utils.hex.toBytes(value));
  *
  *     return aesjs.utils.utf8.fromBytes(decryptedBytes);
  *   }
  *
  *   async getItem(key: string) {
  *     const encrypted = await AsyncStorage.getItem(key);
  *     if (!encrypted) { return encrypted; }
  *
  *     return await this._decrypt(key, encrypted);
  *   }
  *
  *   async removeItem(key: string) {
  *     await AsyncStorage.removeItem(key);
  *     await SecureStore.deleteItemAsync(key);
  *   }
  *
  *   async setItem(key: string, value: string) {
  *     const encrypted = await this._encrypt(key, value);
  *
  *     await AsyncStorage.setItem(key, encrypted);
  *   }
  * }
  *
  * const supabase = createClient("https://xyzcompany.supabase.co", "your-publishable-key", {
  *   auth: {
  *     storage: new LargeSecureStore(),
  *     autoRefreshToken: true,
  *     persistSession: true,
  *     detectSessionInUrl: false,
  *   },
  * });
  * ```
  *
  * @example With a database query
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  *
  * const { data } = await supabase.from('profiles').select('*')
  * ```
  *
  * @exampleDescription With OpenTelemetry tracing
  * Opt in to W3C trace context propagation so the `trace_id` from your
  * client-side spans is attached to Supabase requests and appears in API
  * Gateway and Edge Function logs. Requires `@opentelemetry/api` to be
  * installed in your application. See [Tracing with the JS SDK](https://supabase.com/docs/guides/telemetry/client-side-tracing).
  *
  * @example With OpenTelemetry tracing
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  * import { trace } from '@opentelemetry/api'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key', {
  *   tracePropagation: true,
  * })
  *
  * const tracer = trace.getTracer('my-app')
  *
  * await tracer.startActiveSpan('fetch-users', async (span) => {
  *   // Outgoing request carries the active trace context.
  *   const { data, error } = await supabase.from('users').select('*')
  *   span.end()
  * })
  * ```
  */
  constructor(n, r, s) {
    var o, l;
    this.supabaseUrl = n, this.supabaseKey = r;
    const c = zy(n);
    if (!r) throw new Error("supabaseKey is required.");
    this.realtimeUrl = new URL("realtime/v1", c), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", c), this.storageUrl = new URL("storage/v1", c), this.functionsUrl = new URL("functions/v1", c);
    const d = `sb-${c.hostname.split(".")[0]}-auth-token`, f = {
      db: _y,
      realtime: Sy,
      auth: Ce(Ce({}, ky), {}, { storageKey: d }),
      global: wy,
      tracePropagation: by
    }, p = By(s ?? {}, f);
    if (this.settings = p, this.storageKey = (o = p.auth.storageKey) !== null && o !== void 0 ? o : "", this.headers = (l = p.global.headers) !== null && l !== void 0 ? l : {}, p.accessToken)
      this.accessToken = p.accessToken, this.auth = new Proxy({}, { get: (v, _) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(_)} is not possible`);
      } });
    else {
      var g;
      this.auth = this._initSupabaseAuthClient((g = p.auth) !== null && g !== void 0 ? g : {}, this.headers, p.global.fetch);
    }
    this.fetch = Uy(r, n, this._getAccessToken.bind(this), p.global.fetch, p.tracePropagation), this.realtime = this._initRealtimeClient(Ce({
      headers: this.headers,
      accessToken: this._getAccessToken.bind(this),
      fetch: this.fetch
    }, p.realtime)), this.accessToken && Promise.resolve(this.accessToken()).then((v) => this.realtime.setAuth(v)).catch((v) => console.warn("Failed to set initial Realtime auth token:", v)), this.rest = new im(new URL("rest/v1", c).href, {
      headers: this.headers,
      schema: p.db.schema,
      fetch: this.fetch,
      timeout: p.db.timeout,
      urlLengthLimit: p.db.urlLengthLimit
    }), this.storage = new vg(this.storageUrl.href, this.headers, this.fetch, s?.storage), p.accessToken || this._listenForAuthEvents();
  }
  /**
  * Supabase Functions allows you to deploy and invoke edge functions.
  */
  get functions() {
    return new Jp(this.functionsUrl.href, {
      headers: this.headers,
      customFetch: this.fetch
    });
  }
  /**
  * Perform a query on a table or a view.
  *
  * @param relation - The table or view name to query
  */
  from(n) {
    return this.rest.from(n);
  }
  /**
  * Select a schema to query or perform an function (rpc) call.
  *
  * The schema needs to be on the list of exposed schemas inside Supabase.
  *
  * @param schema - The schema to query
  */
  schema(n) {
    return this.rest.schema(n);
  }
  /**
  * Perform a function call.
  *
  * @param fn - The function name to call
  * @param args - The arguments to pass to the function call
  * @param options - Named parameters
  * @param options.head - When set to `true`, `data` will not be returned.
  * Useful if you only need the count.
  * @param options.get - When set to `true`, the function will be called with
  * read-only access mode.
  * @param options.count - Count algorithm to use to count rows returned by the
  * function. Only applicable for [set-returning
  * functions](https://www.postgresql.org/docs/current/functions-srf.html).
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  */
  rpc(n, r = {}, s = {
    head: !1,
    get: !1,
    count: void 0
  }) {
    return this.rest.rpc(n, r, s);
  }
  /**
  * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
  *
  * @param {string} name - The name of the Realtime channel.
  * @param {Object} opts - The options to pass to the Realtime channel.
  *
  * @category Realtime
  */
  channel(n, r = { config: {} }) {
    return this.realtime.channel(n, r);
  }
  /**
  * Returns all Realtime channels.
  *
  * @category Realtime
  *
  * @example Get all channels
  * ```js
  * const channels = supabase.getChannels()
  * ```
  */
  getChannels() {
    return this.realtime.getChannels();
  }
  /**
  * Unsubscribes and removes Realtime channel from Realtime client.
  *
  * @param {RealtimeChannel} channel - The name of the Realtime channel.
  *
  *
  * @category Realtime
  *
  * @remarks
  * - Removing a channel is a great way to maintain the performance of your project's Realtime service as well as your database if you're listening to Postgres changes. Supabase will automatically handle cleanup 30 seconds after a client is disconnected, but unused channels may cause degradation as more clients are simultaneously subscribed.
  *
  * @example Removes a channel
  * ```js
  * supabase.removeChannel(myChannel)
  * ```
  */
  removeChannel(n) {
    return this.realtime.removeChannel(n);
  }
  /**
  * Unsubscribes and removes all Realtime channels from Realtime client.
  *
  * @category Realtime
  *
  * @remarks
  * - Removing channels is a great way to maintain the performance of your project's Realtime service as well as your database if you're listening to Postgres changes. Supabase will automatically handle cleanup 30 seconds after a client is disconnected, but unused channels may cause degradation as more clients are simultaneously subscribed.
  *
  * @example Remove all channels
  * ```js
  * supabase.removeAllChannels()
  * ```
  */
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  async _getAccessToken() {
    var n = this, r, s;
    if (n.accessToken) return await n.accessToken();
    const { data: o } = await n.auth.getSession();
    return (r = (s = o.session) === null || s === void 0 ? void 0 : s.access_token) !== null && r !== void 0 ? r : n.supabaseKey;
  }
  _initSupabaseAuthClient({ autoRefreshToken: n, persistSession: r, detectSessionInUrl: s, storage: o, userStorage: l, storageKey: c, flowType: d, lock: f, debug: p, throwOnError: g, experimental: v, lockAcquireTimeout: _, skipAutoInitialize: b }, E, j) {
    const P = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new Fy({
      url: this.authUrl.href,
      headers: Ce(Ce({}, P), E),
      storageKey: c,
      autoRefreshToken: n,
      persistSession: r,
      detectSessionInUrl: s,
      storage: o,
      userStorage: l,
      flowType: d,
      lock: f,
      debug: p,
      throwOnError: g,
      experimental: v,
      fetch: j,
      lockAcquireTimeout: _,
      skipAutoInitialize: b,
      hasCustomAuthorizationHeader: Object.keys(this.headers).some((U) => U.toLowerCase() === "authorization")
    });
  }
  _initRealtimeClient(n) {
    return new zm(this.realtimeUrl.href, Ce(Ce({}, n), {}, { params: Ce(Ce({}, { apikey: this.supabaseKey }), n?.params) }));
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((n, r) => {
      this._handleTokenChanged(n, "CLIENT", r?.access_token);
    });
  }
  _handleTokenChanged(n, r, s) {
    (n === "TOKEN_REFRESHED" || n === "SIGNED_IN") && this.changedAccessToken !== s ? (this.changedAccessToken = s, this.realtime.setAuth(s)) : n === "SIGNED_OUT" && (this.realtime.setAuth(), r == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
  }
};
const qy = (n, r, s) => new Hy(n, r, s);
function Wy() {
  if (typeof window < "u") return !1;
  const n = globalThis.process;
  if (!n) return !1;
  const r = n.version;
  if (r == null) return !1;
  const s = r.match(/^v(\d+)\./);
  return s ? parseInt(s[1], 10) <= 18 : !1;
}
Wy() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
const Vy = "https://njkerolpcbwvjiziubaj.supabase.co", Ih = "sb_publishable_vCXG6pBI7GcXr6re7utqaw_z6C0bwtH", hs = !!Ih, ve = qy(
  Vy,
  Ih
), nh = ["ABYSS", "RLYEH", "DAGON", "ELDER", "VOID", "TENT", "DREAM", "DEEP"];
function sh() {
  const n = nh[Math.floor(Math.random() * nh.length)], r = Math.floor(10 + Math.random() * 90);
  return `${n}-${r}`;
}
function ih(n) {
  return n.trim().toUpperCase().replace(/\s+/g, "");
}
function Ky() {
  return crypto.randomUUID();
}
function Lh(n) {
  return Math.max(0, Math.min(5, n));
}
function Gy(n) {
  return `Locura: ${Lh(n)}/5`;
}
const Jy = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), $h = (...n) => n.filter((r, s, o) => !!r && r.trim() !== "" && o.indexOf(r) === s).join(" ").trim();
var Qy = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Yy = fe.forwardRef(
  ({
    color: n = "currentColor",
    size: r = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: o,
    className: l = "",
    children: c,
    iconNode: d,
    ...f
  }, p) => fe.createElement(
    "svg",
    {
      ref: p,
      ...Qy,
      width: r,
      height: r,
      stroke: n,
      strokeWidth: o ? Number(s) * 24 / Number(r) : s,
      className: $h("lucide", l),
      ...f
    },
    [
      ...d.map(([g, v]) => fe.createElement(g, v)),
      ...Array.isArray(c) ? c : [c]
    ]
  )
);
const kr = (n, r) => {
  const s = fe.forwardRef(
    ({ className: o, ...l }, c) => fe.createElement(Yy, {
      ref: c,
      iconNode: r,
      className: $h(`lucide-${Jy(n)}`, o),
      ...l
    })
  );
  return s.displayName = `${n}`, s;
};
const Xy = kr("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
const Zy = kr("DoorOpen", [
  ["path", { d: "M13 4h3a2 2 0 0 1 2 2v14", key: "hrm0s9" }],
  ["path", { d: "M2 20h3", key: "1gaodv" }],
  ["path", { d: "M13 20h9", key: "s90cdi" }],
  ["path", { d: "M10 12v.01", key: "vx6srw" }],
  [
    "path",
    {
      d: "M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",
      key: "199qr4"
    }
  ]
]);
const ev = kr("Flame", [
  [
    "path",
    {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49"
    }
  ]
]);
const tv = kr("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
const Uh = kr("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const rv = kr("RotateCcw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
const nv = kr("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
]);
const sv = kr("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
]);
function iv({ configured: n, onCreate: r, onJoin: s }) {
  return /* @__PURE__ */ w.jsxs("main", { className: "mx-auto flex min-h-screen w-full max-w-md flex-col justify-center gap-5 px-4 py-8", children: [
    /* @__PURE__ */ w.jsxs("div", { children: [
      /* @__PURE__ */ w.jsx("p", { className: "label", children: "MVP realtime" }),
      /* @__PURE__ */ w.jsx("h1", { className: "mt-2 text-4xl font-black leading-tight text-bone", children: "Culto de Cthulhu" }),
      /* @__PURE__ */ w.jsx("p", { className: "mt-3 text-bone/70", children: "Una consola simple para dirigir la fiesta, asignar roles y mantener la Locura sincronizada." })
    ] }),
    /* @__PURE__ */ w.jsxs("div", { className: "panel grid gap-3", children: [
      !n && /* @__PURE__ */ w.jsx("p", { className: "rounded-md border border-amber-300/30 bg-amber-950/40 p-3 text-sm text-amber-100", children: "Configura Supabase en `.env` para crear y unir fiestas reales en realtime." }),
      /* @__PURE__ */ w.jsxs("button", { className: "btn w-full", onClick: r, children: [
        /* @__PURE__ */ w.jsx(Uh, { size: 20 }),
        " Crear fiesta"
      ] }),
      /* @__PURE__ */ w.jsxs("button", { className: "btn btn-secondary w-full", onClick: s, children: [
        /* @__PURE__ */ w.jsx(sv, { size: 20 }),
        " Unirse a fiesta"
      ] })
    ] })
  ] });
}
function ov({ code: n, hostUrl: r, playerUrl: s, loading: o, error: l, onCreate: c, onOpen: d, onBack: f }) {
  return /* @__PURE__ */ w.jsxs("main", { className: "mx-auto flex min-h-screen w-full max-w-md flex-col justify-center gap-4 px-4 py-8", children: [
    /* @__PURE__ */ w.jsx("button", { className: "btn btn-secondary w-fit", onClick: f, children: "Volver" }),
    /* @__PURE__ */ w.jsxs("section", { className: "panel grid gap-4", children: [
      /* @__PURE__ */ w.jsxs("div", { children: [
        /* @__PURE__ */ w.jsx("p", { className: "label", children: "Anfitrión" }),
        /* @__PURE__ */ w.jsx("h1", { className: "section-title", children: "Crear fiesta" })
      ] }),
      n ? /* @__PURE__ */ w.jsxs("div", { className: "grid gap-3", children: [
        /* @__PURE__ */ w.jsx("div", { className: "rounded-lg border border-relic/25 bg-elder/50 p-4 text-center text-3xl font-black text-relic", children: n }),
        /* @__PURE__ */ w.jsx(oh, { label: "Link jugadores", value: s || "" }),
        /* @__PURE__ */ w.jsx(oh, { label: "Link anfitrión", value: r || "" }),
        /* @__PURE__ */ w.jsx("button", { className: "btn w-full", onClick: d, children: "Entrar como anfitrión" })
      ] }) : /* @__PURE__ */ w.jsxs("button", { className: "btn w-full", disabled: o, onClick: c, children: [
        /* @__PURE__ */ w.jsx(nv, { size: 18 }),
        " ",
        o ? "Invocando..." : "Crear fiesta"
      ] }),
      l && /* @__PURE__ */ w.jsx("p", { className: "rounded-md border border-red-500/30 bg-red-950/60 p-3 text-sm text-red-100", children: l })
    ] })
  ] });
}
function oh({ label: n, value: r }) {
  return /* @__PURE__ */ w.jsxs("div", { className: "grid gap-1", children: [
    /* @__PURE__ */ w.jsx("span", { className: "label", children: n }),
    /* @__PURE__ */ w.jsxs("button", { className: "flex items-center justify-between gap-2 rounded-md border border-relic/20 bg-black/30 p-3 text-left text-xs text-bone/80", onClick: () => navigator.clipboard.writeText(r), children: [
      /* @__PURE__ */ w.jsx("span", { className: "break-all", children: r }),
      /* @__PURE__ */ w.jsx(Xy, { size: 16 })
    ] })
  ] });
}
function av({ initialCode: n = "", loading: r, error: s, onJoin: o, onBack: l }) {
  return /* @__PURE__ */ w.jsxs("main", { className: "mx-auto flex min-h-screen w-full max-w-md flex-col justify-center gap-4 px-4 py-8", children: [
    /* @__PURE__ */ w.jsx("button", { className: "btn btn-secondary w-fit", onClick: l, children: "Volver" }),
    /* @__PURE__ */ w.jsxs(
      "form",
      {
        className: "panel grid gap-4",
        onSubmit: (c) => {
          c.preventDefault();
          const d = new FormData(c.currentTarget);
          o(String(d.get("code")), String(d.get("name")));
        },
        children: [
          /* @__PURE__ */ w.jsxs("div", { children: [
            /* @__PURE__ */ w.jsx("p", { className: "label", children: "Ingreso" }),
            /* @__PURE__ */ w.jsx("h1", { className: "section-title", children: "Unirse al culto" })
          ] }),
          /* @__PURE__ */ w.jsxs("label", { className: "grid gap-1", children: [
            /* @__PURE__ */ w.jsx("span", { className: "label", children: "Código" }),
            /* @__PURE__ */ w.jsx("input", { className: "input uppercase", name: "code", defaultValue: n, placeholder: "ABYSS-42", required: !0 })
          ] }),
          /* @__PURE__ */ w.jsxs("label", { className: "grid gap-1", children: [
            /* @__PURE__ */ w.jsx("span", { className: "label", children: "Nombre" }),
            /* @__PURE__ */ w.jsx("input", { className: "input", name: "name", placeholder: "Tu nombre ritual", required: !0, maxLength: 40 })
          ] }),
          /* @__PURE__ */ w.jsxs("button", { className: "btn w-full", disabled: r, children: [
            /* @__PURE__ */ w.jsx(Zy, { size: 18 }),
            " ",
            r ? "Entrando..." : "Entrar"
          ] }),
          s && /* @__PURE__ */ w.jsx("p", { className: "rounded-md border border-red-500/30 bg-red-950/60 p-3 text-sm text-red-100", children: s })
        ]
      }
    )
  ] });
}
function lv({ connected: n, configured: r }) {
  const s = r ? n ? "Realtime conectado" : "Sincronizando..." : "Configura Supabase";
  return /* @__PURE__ */ w.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-relic/20 bg-black/30 px-3 py-1 text-xs text-bone/80", children: [
    /* @__PURE__ */ w.jsx("span", { className: `h-2 w-2 rounded-full ${n ? "bg-emerald-400" : "bg-amber-300"}` }),
    s
  ] });
}
function uv({ onAdd: n, onSubtract: r, onReset: s, onTribute: o }) {
  return /* @__PURE__ */ w.jsxs("div", { className: "mt-3 grid grid-cols-4 gap-2", children: [
    /* @__PURE__ */ w.jsx("button", { className: "btn min-h-10 px-2", title: "+1 Locura", onClick: n, children: /* @__PURE__ */ w.jsx(Uh, { size: 18 }) }),
    /* @__PURE__ */ w.jsx("button", { className: "btn btn-secondary min-h-10 px-2", title: "-1 Locura", onClick: r, children: /* @__PURE__ */ w.jsx(tv, { size: 18 }) }),
    /* @__PURE__ */ w.jsx("button", { className: "btn btn-secondary min-h-10 px-2", title: "Reset", onClick: s, children: /* @__PURE__ */ w.jsx(rv, { size: 18 }) }),
    /* @__PURE__ */ w.jsx("button", { className: "btn btn-danger min-h-10 px-2", title: "Tributo Ritual", onClick: o, children: /* @__PURE__ */ w.jsx(ev, { size: 18 }) })
  ] });
}
function cv({ player: n, isHost: r, onMadness: s, onReset: o, onTribute: l }) {
  return /* @__PURE__ */ w.jsxs("article", { className: "rounded-lg border border-relic/20 bg-black/30 p-3", children: [
    /* @__PURE__ */ w.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ w.jsxs("div", { children: [
        /* @__PURE__ */ w.jsx("h3", { className: "font-bold text-bone", children: n.name }),
        /* @__PURE__ */ w.jsx("p", { className: "text-xs text-bone/55", children: n.role || "Sin rol" })
      ] }),
      /* @__PURE__ */ w.jsx("span", { className: "rounded-full bg-relic/15 px-2 py-1 text-xs font-bold text-relic", children: Gy(n.madness_points) })
    ] }),
    /* @__PURE__ */ w.jsx("div", { className: "mt-3 h-2 overflow-hidden rounded-full bg-white/10", children: /* @__PURE__ */ w.jsx("div", { className: "h-full rounded-full bg-gradient-to-r from-plague to-relic", style: { width: `${n.madness_points / 5 * 100}%` } }) }),
    r && /* @__PURE__ */ w.jsx(
      uv,
      {
        onAdd: () => s(n, 1, "+1 Locura manual"),
        onSubtract: () => s(n, -1, "-1 Locura manual"),
        onReset: () => o(n),
        onTribute: () => l(n)
      }
    )
  ] });
}
const ah = [
  {
    id: "guardian-grimorio",
    name: "Guardián del Grimorio",
    description: "Crea reglas temporales para todos.",
    power: "Puede crear una regla absurda del Grimorio.",
    costOrLimit: "Quien rompa su regla gana +1 Locura."
  },
  {
    id: "rompe-reglas",
    name: "Rompe-Reglas",
    description: "Elimina reglas activas.",
    power: "Puede eliminar una regla del Grimorio.",
    costOrLimit: "Gana +1 Locura.",
    phrase: "¡El Grimorio arde!"
  },
  {
    id: "censor-culto",
    name: "Censor del Culto",
    description: "Prohíbe palabras comunes.",
    power: "Declara una palabra prohibida.",
    costOrLimit: "Quien diga la palabra gana +1 Locura."
  },
  {
    id: "traductor-profano",
    name: "Traductor Profano",
    description: "Obliga a una persona a hablar de forma rara.",
    power: "Elige a alguien para hablar como villano, narrador, vendedor, NPC o profeta.",
    costOrLimit: "Si se olvida, gana +1 Locura."
  },
  {
    id: "fiscal-herejia",
    name: "Fiscal de la Herejía",
    description: "Acusa dramáticamente cuando alguien rompe una regla.",
    power: "Puede acusar a alguien con una frase teatral.",
    costOrLimit: "Si el grupo acepta: acusado +1. Si fue forzado: Fiscal +1."
  },
  {
    id: "bufon-abismo",
    name: "Bufón del Abismo",
    description: "Cambia una penalización por reto.",
    power: "Cuando alguien va a ganar +1 Locura, puede ofrecer un reto alternativo.",
    costOrLimit: "Si falla o rechaza, gana +1 Locura."
  },
  {
    id: "portador-reliquia",
    name: "Portador de la Reliquia",
    description: "Tiene un objeto físico que bloquea una penalización.",
    power: "Puede bloquear una penalización de +1 Locura.",
    costOrLimit: "Después de usarlo, debe pasar la reliquia a otra persona."
  },
  {
    id: "copista-maldito",
    name: "Copista Maldito",
    description: "Convierte una regla general en una regla personal.",
    power: "Copia una regla activa y se la aplica a una persona.",
    costOrLimit: "Si esa persona la rompe, gana +1 Locura."
  },
  {
    id: "deudor-culto",
    name: "Deudor del Culto",
    description: "Puede salvarse ahora, pero paga peor después.",
    power: "Puede decir “Le debo una al culto” y evitar +1 Locura.",
    costOrLimit: "La próxima falla suma +1 y activa Tributo Ritual si corresponde."
  },
  {
    id: "confesor-culto",
    name: "Confesor del Culto",
    description: "Cura Locura de otros absorbiéndola.",
    power: "Elige a alguien para una confesión falsa o dramática aceptada por el grupo.",
    costOrLimit: "Esa persona pierde -1 Locura y el Confesor gana +1. No se cura a sí mismo.",
    phrase: "Confiesa ante el culto."
  },
  {
    id: "elegido-cthulhu",
    name: "Elegido de Cthulhu",
    description: "Se ofrece como canal del abismo para empujar al grupo al caos.",
    power: "Durante un Chequeo puede hacer un Tributo Mayor y arrastrar a 3 jugadores a +1 Locura.",
    costOrLimit: "Quiere que al final gane Invocar.",
    phrase: "Yo bebo por el abismo."
  }
];
function dv(n) {
  const r = [...n];
  for (let s = r.length - 1; s > 0; s -= 1) {
    const o = Math.floor(Math.random() * (s + 1));
    [r[s], r[o]] = [r[o], r[s]];
  }
  return r;
}
function hv({ players: n, isHost: r, onAssign: s }) {
  const o = () => {
    if (n.some((c) => c.role) && !confirm("¿Reasignar roles del culto?")) return;
    const l = dv(ah).slice(0, n.length);
    s(n.map((c, d) => ({ playerId: c.id, role: l[d]?.name ?? null })));
  };
  return /* @__PURE__ */ w.jsxs("section", { className: "panel grid gap-3", children: [
    /* @__PURE__ */ w.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ w.jsxs("div", { children: [
        /* @__PURE__ */ w.jsx("p", { className: "label", children: "Roles" }),
        /* @__PURE__ */ w.jsx("h2", { className: "section-title", children: "Máscaras del culto" })
      ] }),
      r && /* @__PURE__ */ w.jsx("button", { className: "btn btn-secondary", onClick: o, children: "Asignar" })
    ] }),
    /* @__PURE__ */ w.jsx("div", { className: "grid gap-2", children: n.map((l) => /* @__PURE__ */ w.jsxs("div", { className: "grid gap-2 rounded-md border border-relic/15 bg-black/25 p-3", children: [
      /* @__PURE__ */ w.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
        /* @__PURE__ */ w.jsx("span", { className: "font-bold", children: l.name }),
        /* @__PURE__ */ w.jsx("span", { className: "text-sm text-relic", children: l.role || "Sin rol" })
      ] }),
      r && /* @__PURE__ */ w.jsxs("select", { className: "input", value: l.role || "", onChange: (c) => s([{ playerId: l.id, role: c.target.value || null }]), children: [
        /* @__PURE__ */ w.jsx("option", { value: "", children: "Sin rol" }),
        ah.map((c) => /* @__PURE__ */ w.jsx("option", { value: c.name, children: c.name }, c.id))
      ] })
    ] }, l.id)) })
  ] });
}
function fv({ rules: n, players: r, isHost: s, onCreate: o, onToggle: l, onDelete: c, onBreak: d }) {
  return /* @__PURE__ */ w.jsxs("section", { className: "panel grid gap-4", children: [
    /* @__PURE__ */ w.jsxs("div", { children: [
      /* @__PURE__ */ w.jsx("p", { className: "label", children: "Grimorio" }),
      /* @__PURE__ */ w.jsx("h2", { className: "section-title", children: "Reglas activas" })
    ] }),
    s && /* @__PURE__ */ w.jsxs("form", { className: "grid gap-2", onSubmit: (f) => {
      f.preventDefault();
      const p = new FormData(f.currentTarget);
      o(String(p.get("text")), p.get("type"), String(p.get("target")) || null), f.currentTarget.reset();
    }, children: [
      /* @__PURE__ */ w.jsx("input", { className: "input", name: "text", placeholder: "Nadie puede decir “yo”", required: !0 }),
      /* @__PURE__ */ w.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ w.jsxs("select", { className: "input", name: "type", defaultValue: "general", children: [
          /* @__PURE__ */ w.jsx("option", { value: "general", children: "General" }),
          /* @__PURE__ */ w.jsx("option", { value: "palabra_prohibida", children: "Palabra prohibida" }),
          /* @__PURE__ */ w.jsx("option", { value: "personal", children: "Personal" })
        ] }),
        /* @__PURE__ */ w.jsxs("select", { className: "input", name: "target", children: [
          /* @__PURE__ */ w.jsx("option", { value: "", children: "Sin objetivo" }),
          r.map((f) => /* @__PURE__ */ w.jsx("option", { value: f.id, children: f.name }, f.id))
        ] })
      ] }),
      /* @__PURE__ */ w.jsx("button", { className: "btn", children: "Crear regla" })
    ] }),
    /* @__PURE__ */ w.jsxs("div", { className: "grid gap-2", children: [
      n.length === 0 && /* @__PURE__ */ w.jsx("p", { className: "text-sm text-bone/60", children: "El Grimorio está en blanco por ahora." }),
      n.map((f) => /* @__PURE__ */ w.jsxs("div", { className: `rounded-md border p-3 ${f.is_active ? "border-relic/20 bg-black/25" : "border-white/10 bg-white/5 opacity-60"}`, children: [
        /* @__PURE__ */ w.jsx("p", { className: "font-bold", children: f.text }),
        /* @__PURE__ */ w.jsxs("p", { className: "mt-1 text-xs text-bone/55", children: [
          f.type,
          f.target_player_id ? ` · ${r.find((p) => p.id === f.target_player_id)?.name || "jugador"}` : ""
        ] }),
        s && /* @__PURE__ */ w.jsxs("div", { className: "mt-3 grid grid-cols-3 gap-2", children: [
          /* @__PURE__ */ w.jsx("button", { className: "btn btn-secondary min-h-10 px-2", onClick: () => l(f), children: f.is_active ? "Pausar" : "Activar" }),
          /* @__PURE__ */ w.jsx("button", { className: "btn btn-danger min-h-10 px-2", onClick: () => c(f), children: "Eliminar" }),
          /* @__PURE__ */ w.jsxs("select", { className: "input min-h-10", defaultValue: "", onChange: (p) => p.target.value && d(p.target.value, f.text), children: [
            /* @__PURE__ */ w.jsx("option", { value: "", children: "Ruptura" }),
            r.map((p) => /* @__PURE__ */ w.jsx("option", { value: p.id, children: p.name }, p.id))
          ] })
        ] })
      ] }, f.id))
    ] })
  ] });
}
const lh = [
  {
    id: "grimorio-prohibido",
    name: "El Grimorio Prohibido",
    type: "Pasivo durante toda la fiesta",
    description: "Reglas absurdas, palabras prohibidas y reglas personales que conviven con todo lo demás."
  },
  {
    id: "profecias-aldair",
    name: "Profecías para Aldair",
    type: "Escritura anónima + deducción",
    description: "El culto escribe visiones sobre Aldair y él intenta adivinar quién las escribió."
  },
  {
    id: "letania-primigenio",
    name: "Letanía del Primigenio",
    type: "Recitación bajo presión",
    description: "Recitar fragmentos de horror cósmico respetando las reglas activas del Grimorio."
  },
  {
    id: "sotano",
    name: "Lo que Habita el Sótano",
    type: "Dibujo por equipos",
    description: "Dos equipos dibujan en silencio una criatura descrita una sola vez por el anfitrión."
  },
  {
    id: "chequeo-locura",
    name: "Chequeo de Locura",
    type: "Evento recurrente",
    description: "El jugador con más Locura cae bajo el foco del culto y recibe un tributo opcional."
  },
  {
    id: "ritual-final",
    name: "Ritual Final",
    type: "Cierre secreto",
    description: "Todos votan Invocar o Sellar. El resultado decide si gana la mayor o menor Locura."
  }
];
function pv({ prophecies: n, players: r, playerId: s, isHost: o, onCreate: l, onResolve: c, onOfficial: d, onFulfill: f }) {
  return /* @__PURE__ */ w.jsxs("section", { className: "grid gap-3", children: [
    /* @__PURE__ */ w.jsxs("form", { className: "grid gap-2", onSubmit: (p) => {
      p.preventDefault();
      const g = new FormData(p.currentTarget);
      l(String(g.get("text")), g.get("night") === "on"), p.currentTarget.reset();
    }, children: [
      /* @__PURE__ */ w.jsx("textarea", { className: "input min-h-24", name: "text", placeholder: "El culto ha visto que Aldair...", required: !0 }),
      /* @__PURE__ */ w.jsxs("label", { className: "flex items-center gap-2 text-sm text-bone/70", children: [
        /* @__PURE__ */ w.jsx("input", { type: "checkbox", name: "night" }),
        " Profecía de la noche"
      ] }),
      /* @__PURE__ */ w.jsx("button", { className: "btn", disabled: !s, children: "Enviar profecía" })
    ] }),
    /* @__PURE__ */ w.jsx("div", { className: "grid gap-2", children: n.map((p) => /* @__PURE__ */ w.jsxs("article", { className: "rounded-md border border-relic/15 bg-black/25 p-3", children: [
      /* @__PURE__ */ w.jsx("p", { children: p.text }),
      /* @__PURE__ */ w.jsxs("p", { className: "mt-1 text-xs text-bone/50", children: [
        p.is_night_prophecy ? "De la noche" : "Del futuro",
        " · ",
        p.is_official ? "Oficial" : "Anónima",
        p.fulfilled ? " · Cumplida" : ""
      ] }),
      o && /* @__PURE__ */ w.jsxs("div", { className: "mt-3 grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ w.jsx("button", { className: "btn btn-secondary min-h-10", onClick: () => c(p, !0), children: "Aldair acertó" }),
        /* @__PURE__ */ w.jsx("button", { className: "btn btn-secondary min-h-10", onClick: () => c(p, !1), children: "Aldair falló" }),
        /* @__PURE__ */ w.jsx("button", { className: "btn btn-secondary min-h-10", onClick: () => d(p), children: "Oficial" }),
        /* @__PURE__ */ w.jsx("button", { className: "btn btn-secondary min-h-10", onClick: () => f(p), children: "Cumplida" })
      ] }),
      o && p.author_player_id && /* @__PURE__ */ w.jsxs("p", { className: "mt-2 text-xs text-relic", children: [
        "Autor: ",
        r.find((g) => g.id === p.author_player_id)?.name
      ] })
    ] }, p.id)) })
  ] });
}
const il = [
  "Ningún mortal negará la voz que tiembla bajo las piedras antiguas.",
  "El mar conserva nombres que la lengua humana no debería recuperar.",
  "Cuando la vela se incline, el abismo contará hasta tres con nuestra sombra.",
  "La puerta no estaba cerrada: respiraba lentamente desde el otro lado.",
  "Todo juramento escrito en sal vuelve una noche con dientes nuevos.",
  "Aldair escuchó un coro remoto y fingió que era solo el viento."
];
function mv({ players: n, isHost: r, onResult: s }) {
  const [o, l] = fe.useState(il[0]), [c, d] = fe.useState(n[0]?.id || "");
  return /* @__PURE__ */ w.jsxs("section", { className: "grid gap-3", children: [
    /* @__PURE__ */ w.jsx("div", { className: "rounded-md border border-relic/20 bg-elder/35 p-4 text-lg font-bold leading-relaxed", children: o }),
    /* @__PURE__ */ w.jsx("button", { className: "btn btn-secondary", onClick: () => l(il[Math.floor(Math.random() * il.length)]), children: "Otro fragmento" }),
    r && /* @__PURE__ */ w.jsxs("div", { className: "grid gap-2", children: [
      /* @__PURE__ */ w.jsx("select", { className: "input", value: c, onChange: (f) => d(f.target.value), children: n.map((f) => /* @__PURE__ */ w.jsx("option", { value: f.id, children: f.name }, f.id)) }),
      /* @__PURE__ */ w.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
        /* @__PURE__ */ w.jsx("button", { className: "btn btn-secondary", disabled: !c, onClick: () => s(c, -1, "Recitó bien"), children: "Bien" }),
        /* @__PURE__ */ w.jsx("button", { className: "btn btn-secondary", disabled: !c, onClick: () => s(c, 1, "Falló Letanía"), children: "Falló" }),
        /* @__PURE__ */ w.jsx("button", { className: "btn btn-secondary", disabled: !c, onClick: () => s(c, 1, "Rompió regla en Letanía"), children: "Rompió" })
      ] })
    ] })
  ] });
}
const ol = [
  "Tenía tentáculos, cuatro ojos desiguales, piel viscosa, una boca demasiado abierta y manos saliendo del torso.",
  "Parecía una campana de carne con patas finas, tres rostros dormidos y una corona de espinas húmedas.",
  "Era bajo y ancho, cubierto de escamas negras, con una lengua luminosa enrollada alrededor del cuello.",
  "Caminaba hacia atrás con brazos de insecto, un ojo central enorme y pequeñas bocas en cada hombro.",
  "Su cabeza era una pecera opaca; dentro flotaban dientes, velas apagadas y una mano saludando.",
  "Tenía cuerpo de estatua rota, alas pegadas con barro y un rostro infantil hecho de conchas.",
  "Era una sombra gruesa con dedos largos, dos cuernos blandos y un vientre transparente lleno de relojes.",
  "Parecía un perro sin rostro, pero del lomo salían plumas, raíces y ojos que parpadeaban en distinto ritmo.",
  "Su torso se abría como flor oscura; dentro había una lengua seca que señalaba a los presentes.",
  "Era alto como una puerta, con rodillas invertidas, piel de pergamino y una máscara pegada al pecho."
];
function gv({ players: n, isHost: r, onTeamResult: s }) {
  const [o, l] = fe.useState(ol[0]), [c, d] = fe.useState(180), f = fe.useMemo(() => ({
    a: n.filter((p, g) => g % 2 === 0),
    b: n.filter((p, g) => g % 2 === 1)
  }), [n]);
  return /* @__PURE__ */ w.jsxs("section", { className: "grid gap-3", children: [
    /* @__PURE__ */ w.jsxs("div", { className: "rounded-md border border-relic/20 bg-black/25 p-3", children: [
      /* @__PURE__ */ w.jsx("p", { className: "label", children: "Descripción para anfitrión" }),
      /* @__PURE__ */ w.jsx("p", { className: "mt-1", children: r ? o : "La descripción está oculta para jugadores." })
    ] }),
    r && /* @__PURE__ */ w.jsxs("div", { className: "grid gap-2", children: [
      /* @__PURE__ */ w.jsx("button", { className: "btn btn-secondary", onClick: () => l(ol[Math.floor(Math.random() * ol.length)]), children: "Generar criatura" }),
      /* @__PURE__ */ w.jsxs("label", { className: "grid gap-1", children: [
        /* @__PURE__ */ w.jsx("span", { className: "label", children: "Timer de dibujo" }),
        /* @__PURE__ */ w.jsx("input", { className: "input", type: "number", min: "60", max: "600", step: "15", value: c, onChange: (p) => d(Number(p.target.value)) })
      ] }),
      /* @__PURE__ */ w.jsxs("div", { className: "rounded-md border border-relic/20 bg-elder/30 p-3 text-center text-3xl font-black text-relic", children: [
        Math.floor(c / 60),
        ":",
        String(c % 60).padStart(2, "0")
      ] }),
      /* @__PURE__ */ w.jsx(uh, { label: "Equipo A", players: f.a }),
      /* @__PURE__ */ w.jsx(uh, { label: "Equipo B", players: f.b }),
      /* @__PURE__ */ w.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ w.jsx("button", { className: "btn btn-secondary", onClick: () => s(f.a.map((p) => p.id), -1, "Equipo A ganó Sótano"), children: "Gana A" }),
        /* @__PURE__ */ w.jsx("button", { className: "btn btn-secondary", onClick: () => s(f.b.map((p) => p.id), -1, "Equipo B ganó Sótano"), children: "Gana B" }),
        /* @__PURE__ */ w.jsx("button", { className: "btn btn-danger", onClick: () => s(f.a.map((p) => p.id), 1, "Equipo A perdió Sótano"), children: "Pierde A" }),
        /* @__PURE__ */ w.jsx("button", { className: "btn btn-danger", onClick: () => s(f.b.map((p) => p.id), 1, "Equipo B perdió Sótano"), children: "Pierde B" })
      ] })
    ] })
  ] });
}
function uh({ label: n, players: r }) {
  return /* @__PURE__ */ w.jsxs("p", { className: "text-sm text-bone/70", children: [
    /* @__PURE__ */ w.jsxs("strong", { className: "text-relic", children: [
      n,
      ":"
    ] }),
    " ",
    r.map((s) => s.name).join(", ") || "Sin jugadores"
  ] });
}
function yv(n) {
  const [r, s] = fe.useState("profecias-aldair");
  return /* @__PURE__ */ w.jsxs("section", { className: "panel grid gap-4", children: [
    /* @__PURE__ */ w.jsxs("div", { children: [
      /* @__PURE__ */ w.jsx("p", { className: "label", children: "Minijuegos" }),
      /* @__PURE__ */ w.jsx("h2", { className: "section-title", children: "Juegos del culto" })
    ] }),
    /* @__PURE__ */ w.jsx("div", { className: "flex gap-2 overflow-x-auto pb-1", children: lh.map((o) => /* @__PURE__ */ w.jsx("button", { className: `btn min-w-fit ${r === o.id ? "" : "btn-secondary"}`, onClick: () => s(o.id), children: o.name }, o.id)) }),
    /* @__PURE__ */ w.jsx("p", { className: "text-sm text-bone/60", children: lh.find((o) => o.id === r)?.description }),
    r === "profecias-aldair" && /* @__PURE__ */ w.jsx(
      pv,
      {
        prophecies: n.prophecies,
        players: n.players,
        playerId: n.playerId,
        isHost: n.isHost,
        onCreate: n.onProphecyCreate,
        onResolve: n.onProphecyResolve,
        onOfficial: n.onProphecyOfficial,
        onFulfill: n.onProphecyFulfill
      }
    ),
    r === "letania-primigenio" && /* @__PURE__ */ w.jsx(mv, { players: n.players, isHost: n.isHost, onResult: n.onMadnessById }),
    r === "sotano" && /* @__PURE__ */ w.jsx(gv, { players: n.players, isHost: n.isHost, onTeamResult: n.onTeamResult }),
    r !== "profecias-aldair" && r !== "letania-primigenio" && r !== "sotano" && /* @__PURE__ */ w.jsx("p", { className: "rounded-md border border-relic/20 bg-black/25 p-3 text-sm text-bone/70", children: "Este juego se administra desde su sección principal del dashboard." })
  ] });
}
const ch = [
  "Reto corto elegido por el culto.",
  "Brindis oscuro sin obligación de alcohol.",
  "Confesión falsa de una verdad imposible.",
  "Regla personal durante 10 minutos.",
  "Brebaje ritual opcional o alternativa sin alcohol.",
  "Foto ritual con pose solemne.",
  "Lectura teatral de una frase del abismo."
];
function vv({ party: n, players: r, isHost: s, onUpdateTimer: o, onMadness: l }) {
  const [c, d] = fe.useState(Date.now()), f = n.next_check_at ? new Date(n.next_check_at).getTime() : null, p = f ? Math.max(0, f - c) : null, g = fe.useMemo(() => {
    const b = Math.max(0, ...r.map((E) => E.madness_points));
    return r.filter((E) => E.madness_points === b);
  }, [r]), v = r.find((b) => b.role === "Elegido de Cthulhu");
  fe.useEffect(() => {
    const b = window.setInterval(() => d(Date.now()), 1e3);
    return () => window.clearInterval(b);
  }, []);
  const _ = (b = n.check_interval_minutes) => {
    o(b, new Date(Date.now() + b * 6e4).toISOString());
  };
  return /* @__PURE__ */ w.jsxs("section", { className: "panel grid gap-3", children: [
    /* @__PURE__ */ w.jsxs("div", { children: [
      /* @__PURE__ */ w.jsx("p", { className: "label", children: "Chequeo de Locura" }),
      /* @__PURE__ */ w.jsx("h2", { className: "section-title", children: p === null ? "Timer pausado" : wv(p) })
    ] }),
    /* @__PURE__ */ w.jsxs("p", { className: "text-sm text-bone/65", children: [
      "Foco actual: ",
      g.map((b) => b.name).join(", ") || "sin jugadores"
    ] }),
    /* @__PURE__ */ w.jsxs("p", { className: "rounded-md border border-relic/20 bg-black/25 p-3 text-sm text-bone/75", children: [
      "Tributo sugerido: ",
      ch[Math.floor(c / 1e3) % ch.length],
      " El alcohol siempre es opcional."
    ] }),
    s && /* @__PURE__ */ w.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ w.jsx("button", { className: "btn btn-secondary", onClick: () => _(30), children: "30 min" }),
      /* @__PURE__ */ w.jsx("button", { className: "btn btn-secondary", onClick: () => _(15), children: "Intenso" }),
      /* @__PURE__ */ w.jsx("button", { className: "btn btn-secondary", onClick: () => o(n.check_interval_minutes, null), children: "Pausar" }),
      /* @__PURE__ */ w.jsx("button", { className: "btn", onClick: () => _(), children: "Reiniciar" }),
      /* @__PURE__ */ w.jsx("button", { className: "btn btn-danger col-span-2", onClick: () => o(n.check_interval_minutes, (/* @__PURE__ */ new Date()).toISOString()), children: "Activar ahora" })
    ] }),
    s && v && /* @__PURE__ */ w.jsx("button", { className: "btn btn-secondary", onClick: () => l(v, 1, "Yo bebo por el abismo"), children: "Yo bebo por el abismo" })
  ] });
}
function wv(n) {
  const r = Math.ceil(n / 1e3), s = Math.floor(r / 60), o = r % 60;
  return `${s}:${String(o).padStart(2, "0")}`;
}
function _v({ party: n, players: r, votes: s, playerId: o, isHost: l, onVote: c, onReveal: d }) {
  const f = s.find((E) => E.player_id === o), p = n.ritual_result, g = p === "invoke" ? Math.max(...r.map((E) => E.madness_points), 0) : Math.min(...r.map((E) => E.madness_points), 5), v = p ? r.filter((E) => E.madness_points === g) : [], _ = s.filter((E) => E.vote === "invoke").length, b = s.filter((E) => E.vote === "seal").length;
  return /* @__PURE__ */ w.jsxs("section", { className: "panel grid gap-3", children: [
    /* @__PURE__ */ w.jsxs("div", { children: [
      /* @__PURE__ */ w.jsx("p", { className: "label", children: "Ritual Final" }),
      /* @__PURE__ */ w.jsx("h2", { className: "section-title", children: n.ritual_revealed ? "Resultado revelado" : "Votos secretos" })
    ] }),
    /* @__PURE__ */ w.jsxs("p", { className: "text-sm text-bone/65", children: [
      "Faltan ",
      Math.max(0, r.length - s.length),
      " de ",
      r.length,
      " votos."
    ] }),
    !n.ritual_revealed && /* @__PURE__ */ w.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ w.jsx("button", { className: `btn ${f?.vote === "invoke" ? "" : "btn-secondary"}`, disabled: !o, onClick: () => c("invoke"), children: "Invocar" }),
      /* @__PURE__ */ w.jsx("button", { className: `btn ${f?.vote === "seal" ? "" : "btn-secondary"}`, disabled: !o, onClick: () => c("seal"), children: "Sellar" })
    ] }),
    l && !n.ritual_revealed && /* @__PURE__ */ w.jsx("button", { className: "btn btn-danger", onClick: d, children: "Revelar ritual" }),
    n.ritual_revealed && p && /* @__PURE__ */ w.jsxs("div", { className: "rounded-md border border-relic/20 bg-elder/35 p-3", children: [
      /* @__PURE__ */ w.jsxs("p", { className: "text-sm text-bone/70", children: [
        "Invocar ",
        _,
        " · Sellar ",
        b
      ] }),
      /* @__PURE__ */ w.jsx("p", { className: "mt-2 text-xl font-black text-relic", children: p === "invoke" ? "Gana Invocar: mayor Locura" : "Gana Sellar: menor Locura" }),
      /* @__PURE__ */ w.jsxs("p", { className: "mt-1", children: [
        "Ganadores: ",
        v.map((E) => E.name).join(", ")
      ] }),
      /* @__PURE__ */ w.jsx("p", { className: "mt-2 text-sm text-bone/65", children: "Perdedores pueden hacer un último Tributo Ritual, con alternativa sin alcohol." })
    ] })
  ] });
}
function kv(n) {
  const r = [...n.players].sort((s, o) => o.madness_points - s.madness_points);
  return /* @__PURE__ */ w.jsxs("main", { className: "mx-auto grid w-full max-w-5xl gap-4 px-4 py-5 md:grid-cols-[1fr_1fr]", children: [
    /* @__PURE__ */ w.jsx("header", { className: "md:col-span-2", children: /* @__PURE__ */ w.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
      /* @__PURE__ */ w.jsxs("div", { children: [
        /* @__PURE__ */ w.jsxs("p", { className: "label", children: [
          "Fiesta ",
          n.party.code
        ] }),
        /* @__PURE__ */ w.jsx("h1", { className: "text-3xl font-black text-bone", children: "Panel del culto" })
      ] }),
      /* @__PURE__ */ w.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ w.jsx(lv, { connected: n.connected, configured: n.configured }),
        /* @__PURE__ */ w.jsx("button", { className: "btn btn-secondary", onClick: n.onLeave, children: "Salir" })
      ] })
    ] }) }),
    /* @__PURE__ */ w.jsxs("section", { className: "panel grid gap-3", children: [
      /* @__PURE__ */ w.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ w.jsxs("div", { children: [
          /* @__PURE__ */ w.jsx("p", { className: "label", children: "Jugadores" }),
          /* @__PURE__ */ w.jsxs("h2", { className: "section-title", children: [
            n.players.length,
            "/11 reunidos"
          ] })
        ] }),
        /* @__PURE__ */ w.jsx("span", { className: "rounded-full border border-relic/20 px-3 py-1 text-xs text-bone/70", children: n.isHost ? "Anfitrión" : "Jugador" })
      ] }),
      /* @__PURE__ */ w.jsx("div", { className: "grid gap-2", children: r.map((s) => /* @__PURE__ */ w.jsx(
        cv,
        {
          player: s,
          isHost: n.isHost,
          onMadness: n.onMadness,
          onReset: n.onReset,
          onTribute: n.onTribute
        },
        s.id
      )) })
    ] }),
    /* @__PURE__ */ w.jsx(
      vv,
      {
        party: n.party,
        players: n.players,
        isHost: n.isHost,
        onUpdateTimer: n.onTimerUpdate,
        onMadness: n.onMadness
      }
    ),
    /* @__PURE__ */ w.jsx(hv, { players: n.players, isHost: n.isHost, onAssign: n.onRoleAssign }),
    /* @__PURE__ */ w.jsx(
      fv,
      {
        rules: n.rules,
        players: n.players,
        isHost: n.isHost,
        onCreate: n.onRuleCreate,
        onToggle: n.onRuleToggle,
        onDelete: n.onRuleDelete,
        onBreak: n.onRuleBreak
      }
    ),
    /* @__PURE__ */ w.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ w.jsx(
      yv,
      {
        players: n.players,
        prophecies: n.prophecies,
        playerId: n.playerId,
        isHost: n.isHost,
        onProphecyCreate: n.onProphecyCreate,
        onProphecyResolve: n.onProphecyResolve,
        onProphecyOfficial: n.onProphecyOfficial,
        onProphecyFulfill: n.onProphecyFulfill,
        onMadnessById: n.onMadnessById,
        onTeamResult: n.onTeamResult
      }
    ) }),
    /* @__PURE__ */ w.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ w.jsx(
      _v,
      {
        party: n.party,
        players: n.players,
        votes: n.votes,
        playerId: n.playerId,
        isHost: n.isHost,
        onVote: n.onVote,
        onReveal: n.onReveal
      }
    ) })
  ] });
}
const _t = {
  partyCode: "cthulhu_party_id",
  playerId: "cthulhu_player_id",
  playerName: "cthulhu_player_name",
  hostToken: "cthulhu_host_token"
};
function Hi(n) {
  return typeof window > "u" ? null : localStorage.getItem(n);
}
function Sv() {
  const [n, r] = fe.useState("home"), [s, o] = fe.useState(!1), [l, c] = fe.useState(null), [d, f] = fe.useState(null), [p, g] = fe.useState([]), [v, _] = fe.useState([]), [b, E] = fe.useState([]), [j, P] = fe.useState([]), [U, z] = fe.useState(!1), [H, D] = fe.useState(null), [Z, me] = fe.useState(() => Hi(_t.playerId)), ie = fe.useMemo(() => {
    if (typeof location > "u") return "";
    const A = location.pathname.match(/\/party\/([^/]+)/);
    return A ? decodeURIComponent(A[1]) : "";
  }, []), ue = fe.useMemo(() => new URLSearchParams(typeof location > "u" ? "" : location.search), []), Oe = ue.get("host"), be = ue.get("player") === "1", Xe = ue.get("party") || ie, Bt = !!(d && !be && (Oe === d.host_token || Hi(_t.hostToken) === d.host_token));
  fe.useEffect(() => {
    if (Xe) {
      const A = Oe && !be || Hi(_t.playerId) && !be ? "party" : "join";
      r(A), ot(Xe, A);
    }
  }, [Xe, Oe, be]), fe.useEffect(() => {
    if (!d) return;
    Ne(d.id);
    const A = ve.channel(`party-${d.id}`).on("postgres_changes", { event: "*", schema: "public", table: "parties", filter: `id=eq.${d.id}` }, () => ot(d.code)).on("postgres_changes", { event: "*", schema: "public", table: "players", filter: `party_id=eq.${d.id}` }, () => Ne(d.id)).on("postgres_changes", { event: "*", schema: "public", table: "rules", filter: `party_id=eq.${d.id}` }, () => Ne(d.id)).on("postgres_changes", { event: "*", schema: "public", table: "prophecies", filter: `party_id=eq.${d.id}` }, () => Ne(d.id)).on("postgres_changes", { event: "*", schema: "public", table: "ritual_votes", filter: `party_id=eq.${d.id}` }, () => Ne(d.id)).subscribe((F) => z(F === "SUBSCRIBED"));
    return () => {
      z(!1), ve.removeChannel(A);
    };
  }, [d?.id]);
  async function ot(A, F = "party") {
    if (!hs) {
      c("Faltan VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en .env.");
      return;
    }
    const { data: V, error: X } = await ve.from("parties").select("*").eq("code", ih(A)).single();
    if (X || !V) {
      c("No encontré esa fiesta.");
      return;
    }
    f(V), localStorage.setItem(_t.partyCode, V.code), Oe === V.host_token && localStorage.setItem(_t.hostToken, V.host_token), r(F);
  }
  async function Ne(A) {
    const [F, V, X, ce] = await Promise.all([
      ve.from("players").select("*").eq("party_id", A).order("created_at"),
      ve.from("rules").select("*").eq("party_id", A).order("created_at", { ascending: !1 }),
      ve.from("prophecies").select("*").eq("party_id", A).order("created_at", { ascending: !1 }),
      ve.from("ritual_votes").select("*").eq("party_id", A)
    ]);
    F.data && g(F.data), V.data && _(V.data), X.data && E(X.data), ce.data && P(ce.data);
  }
  async function at() {
    if (o(!0), c(null), !hs) {
      c("Faltan VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en .env. Sin Supabase no se puede crear una fiesta realtime."), o(!1);
      return;
    }
    try {
      const A = Ky();
      let F = sh(), V = await ve.from("parties").insert({ code: F, host_token: A, name: "Fiesta de Cthulhu" }).select("*").single();
      if (V.error?.code === "23505" && (F = sh(), V = await ve.from("parties").insert({ code: F, host_token: A, name: "Fiesta de Cthulhu" }).select("*").single()), V.error || !V.data) throw V.error;
      localStorage.setItem(_t.hostToken, A), localStorage.setItem(_t.partyCode, F);
      const X = `${location.origin}/game?party=${F}&player=1`, ce = `${X}&host=${A}`;
      D({ code: F, playerUrl: X, hostUrl: ce }), f(V.data);
    } catch (A) {
      c(A instanceof Error ? A.message : "No se pudo crear la fiesta.");
    } finally {
      o(!1);
    }
  }
  async function ft(A, F) {
    if (o(!0), c(null), !hs) {
      c("Faltan VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en .env. Sin Supabase no se puede unirse a una fiesta realtime."), o(!1);
      return;
    }
    try {
      const V = ih(A), { data: X, error: ce } = await ve.from("parties").select("*").eq("code", V).single();
      if (ce || !X) throw new Error("No encontré esa fiesta.");
      const { count: Je } = await ve.from("players").select("id", { count: "exact", head: !0 }).eq("party_id", X.id);
      if ((Je || 0) >= 11) throw new Error("El culto está completo.");
      const { data: zt, error: En } = await ve.from("players").insert({ party_id: X.id, name: F.trim() }).select("*").single();
      if (En || !zt) throw En;
      localStorage.setItem(_t.partyCode, V), localStorage.setItem(_t.playerId, zt.id), localStorage.setItem(_t.playerName, zt.name), me(zt.id), f(X), history.replaceState(null, "", `/game?party=${V}`), r("party");
    } catch (V) {
      c(V instanceof Error ? V.message : "No se pudo unir.");
    } finally {
      o(!1);
    }
  }
  async function Ie(A, F, V = null, X = 0) {
    d && await ve.from("game_logs").insert({ party_id: d.id, type: A, description: F, player_id: V, delta_madness: X });
  }
  async function ge(A, F, V) {
    if (F > 0 && A.madness_points >= 5) {
      await Ie("tributo", `${A.name}: Tributo Ritual por ${V}`, A.id, 0), alert(`${A.name} ya está en 5 Locura. Activa Tributo Ritual. Alcohol opcional, siempre con alternativa.`);
      return;
    }
    const X = Lh(A.madness_points + F);
    await ve.from("players").update({ madness_points: X }).eq("id", A.id), await Ie("locura", `${A.name}: ${V}`, A.id, X - A.madness_points);
  }
  function M(A, F, V) {
    const X = p.find((ce) => ce.id === A);
    X && ge(X, F, V);
  }
  async function re(A) {
    await ve.from("players").update({ madness_points: 0 }).eq("id", A.id), await Ie("reset", `${A.name}: Locura reiniciada`, A.id, -A.madness_points);
  }
  function W(A) {
    Ie("tributo", `${A.name}: Tributo Ritual activado`, A.id, 0), alert(`Tributo Ritual para ${A.name}. Puede ser reto corto, brindis oscuro sin alcohol obligatorio, confesión falsa, regla personal, brebaje opcional o foto ritual.`);
  }
  async function x(A) {
    await Promise.all(A.map((F) => ve.from("players").update({ role: F.role }).eq("id", F.playerId)));
  }
  async function O(A, F, V) {
    d && await ve.from("rules").insert({ party_id: d.id, text: A.trim(), type: F, target_player_id: V || null, created_by: Z || "host" });
  }
  async function oe(A) {
    !d || !Z || await ve.from("ritual_votes").upsert({ party_id: d.id, player_id: Z, vote: A }, { onConflict: "party_id,player_id" });
  }
  async function ae() {
    if (!d) return;
    const A = j.filter((V) => V.vote === "invoke").length, F = j.filter((V) => V.vote === "seal").length;
    await ve.from("parties").update({ ritual_revealed: !0, ritual_result: A > F ? "invoke" : "seal" }).eq("id", d.id);
  }
  return n === "create" ? /* @__PURE__ */ w.jsx(
    ov,
    {
      code: H?.code || null,
      hostUrl: H?.hostUrl || null,
      playerUrl: H?.playerUrl || null,
      loading: s,
      error: l,
      onCreate: at,
      onOpen: () => H && (location.href = H.hostUrl),
      onBack: () => r("home")
    }
  ) : n === "join" ? /* @__PURE__ */ w.jsx(av, { initialCode: Xe || Hi(_t.partyCode) || "", loading: s, error: l, onJoin: ft, onBack: () => r("home") }) : n === "party" && d ? /* @__PURE__ */ w.jsx(
    kv,
    {
      party: d,
      players: p,
      rules: v,
      prophecies: b,
      votes: j,
      playerId: Z,
      isHost: Bt,
      connected: U,
      configured: hs,
      onLeave: () => {
        localStorage.removeItem(_t.playerId), me(null), r("home"), history.replaceState(null, "", "/");
      },
      onMadness: ge,
      onMadnessById: M,
      onReset: re,
      onTribute: W,
      onRoleAssign: x,
      onRuleCreate: O,
      onRuleToggle: (A) => ve.from("rules").update({ is_active: !A.is_active }).eq("id", A.id),
      onRuleDelete: (A) => ve.from("rules").delete().eq("id", A.id),
      onRuleBreak: (A, F) => M(A, 1, `Rompió regla: ${F}`),
      onTimerUpdate: (A, F) => ve.from("parties").update({ check_interval_minutes: A, next_check_at: F }).eq("id", d.id),
      onProphecyCreate: (A, F) => ve.from("prophecies").insert({ party_id: d.id, text: A, is_night_prophecy: F, author_player_id: Z }),
      onProphecyResolve: async (A, F) => {
        await ve.from("prophecies").update({ was_guessed: F }).eq("id", A.id);
        const V = p.find((X) => X.name.toLowerCase().includes("aldair")) || p[0];
        F && A.author_player_id && M(A.author_player_id, 1, "Aldair adivinó la profecía"), !F && V && ge(V, 1, "Aldair falló la profecía");
      },
      onProphecyOfficial: (A) => ve.from("prophecies").update({ is_official: !0 }).eq("id", A.id),
      onProphecyFulfill: (A) => ve.from("prophecies").update({ fulfilled: !0 }).eq("id", A.id),
      onTeamResult: (A, F, V) => A.forEach((X) => M(X, F, V)),
      onVote: oe,
      onReveal: ae
    }
  ) : /* @__PURE__ */ w.jsx(iv, { configured: hs, onCreate: () => r("create"), onJoin: () => r("join") });
}
Wp.createRoot(document.getElementById("game-root")).render(
  /* @__PURE__ */ w.jsx(Dp.StrictMode, { children: /* @__PURE__ */ w.jsx(Sv, {}) })
);
