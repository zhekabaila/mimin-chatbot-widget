function c0(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Mc = { exports: {} }, qs = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var my;
function iS() {
  if (my) return qs;
  my = 1;
  var n = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function s(l, o, m) {
    var f = null;
    if (m !== void 0 && (f = "" + m), o.key !== void 0 && (f = "" + o.key), "key" in o) {
      m = {};
      for (var d in o)
        d !== "key" && (m[d] = o[d]);
    } else m = o;
    return o = m.ref, {
      $$typeof: n,
      type: l,
      key: f,
      ref: o !== void 0 ? o : null,
      props: m
    };
  }
  return qs.Fragment = i, qs.jsx = s, qs.jsxs = s, qs;
}
var dy;
function aS() {
  return dy || (dy = 1, Mc.exports = iS()), Mc.exports;
}
var A = aS(), Rc = { exports: {} }, Ps = {}, Oc = { exports: {} }, Cc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hy;
function sS() {
  return hy || (hy = 1, function(n) {
    function i(X, L) {
      var z = X.length;
      X.push(L);
      t: for (; 0 < z; ) {
        var ft = z - 1 >>> 1, mt = X[ft];
        if (0 < o(mt, L))
          X[ft] = L, X[z] = mt, z = ft;
        else break t;
      }
    }
    function s(X) {
      return X.length === 0 ? null : X[0];
    }
    function l(X) {
      if (X.length === 0) return null;
      var L = X[0], z = X.pop();
      if (z !== L) {
        X[0] = z;
        t: for (var ft = 0, mt = X.length, w = mt >>> 1; ft < w; ) {
          var K = 2 * (ft + 1) - 1, J = X[K], F = K + 1, at = X[F];
          if (0 > o(J, z))
            F < mt && 0 > o(at, J) ? (X[ft] = at, X[F] = z, ft = F) : (X[ft] = J, X[K] = z, ft = K);
          else if (F < mt && 0 > o(at, z))
            X[ft] = at, X[F] = z, ft = F;
          else break t;
        }
      }
      return L;
    }
    function o(X, L) {
      var z = X.sortIndex - L.sortIndex;
      return z !== 0 ? z : X.id - L.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      n.unstable_now = function() {
        return m.now();
      };
    } else {
      var f = Date, d = f.now();
      n.unstable_now = function() {
        return f.now() - d;
      };
    }
    var p = [], h = [], g = 1, b = null, x = 3, C = !1, E = !1, R = !1, N = !1, V = typeof setTimeout == "function" ? setTimeout : null, B = typeof clearTimeout == "function" ? clearTimeout : null, H = typeof setImmediate < "u" ? setImmediate : null;
    function W(X) {
      for (var L = s(h); L !== null; ) {
        if (L.callback === null) l(h);
        else if (L.startTime <= X)
          l(h), L.sortIndex = L.expirationTime, i(p, L);
        else break;
        L = s(h);
      }
    }
    function Z(X) {
      if (R = !1, W(X), !E)
        if (s(p) !== null)
          E = !0, Q || (Q = !0, wt());
        else {
          var L = s(h);
          L !== null && Vt(Z, L.startTime - X);
        }
    }
    var Q = !1, I = -1, Y = 5, ot = -1;
    function rt() {
      return N ? !0 : !(n.unstable_now() - ot < Y);
    }
    function dt() {
      if (N = !1, Q) {
        var X = n.unstable_now();
        ot = X;
        var L = !0;
        try {
          t: {
            E = !1, R && (R = !1, B(I), I = -1), C = !0;
            var z = x;
            try {
              e: {
                for (W(X), b = s(p); b !== null && !(b.expirationTime > X && rt()); ) {
                  var ft = b.callback;
                  if (typeof ft == "function") {
                    b.callback = null, x = b.priorityLevel;
                    var mt = ft(
                      b.expirationTime <= X
                    );
                    if (X = n.unstable_now(), typeof mt == "function") {
                      b.callback = mt, W(X), L = !0;
                      break e;
                    }
                    b === s(p) && l(p), W(X);
                  } else l(p);
                  b = s(p);
                }
                if (b !== null) L = !0;
                else {
                  var w = s(h);
                  w !== null && Vt(
                    Z,
                    w.startTime - X
                  ), L = !1;
                }
              }
              break t;
            } finally {
              b = null, x = z, C = !1;
            }
            L = void 0;
          }
        } finally {
          L ? wt() : Q = !1;
        }
      }
    }
    var wt;
    if (typeof H == "function")
      wt = function() {
        H(dt);
      };
    else if (typeof MessageChannel < "u") {
      var Dt = new MessageChannel(), Gt = Dt.port2;
      Dt.port1.onmessage = dt, wt = function() {
        Gt.postMessage(null);
      };
    } else
      wt = function() {
        V(dt, 0);
      };
    function Vt(X, L) {
      I = V(function() {
        X(n.unstable_now());
      }, L);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, n.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Y = 0 < X ? Math.floor(1e3 / X) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, n.unstable_next = function(X) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = x;
      }
      var z = x;
      x = L;
      try {
        return X();
      } finally {
        x = z;
      }
    }, n.unstable_requestPaint = function() {
      N = !0;
    }, n.unstable_runWithPriority = function(X, L) {
      switch (X) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          X = 3;
      }
      var z = x;
      x = X;
      try {
        return L();
      } finally {
        x = z;
      }
    }, n.unstable_scheduleCallback = function(X, L, z) {
      var ft = n.unstable_now();
      switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? ft + z : ft) : z = ft, X) {
        case 1:
          var mt = -1;
          break;
        case 2:
          mt = 250;
          break;
        case 5:
          mt = 1073741823;
          break;
        case 4:
          mt = 1e4;
          break;
        default:
          mt = 5e3;
      }
      return mt = z + mt, X = {
        id: g++,
        callback: L,
        priorityLevel: X,
        startTime: z,
        expirationTime: mt,
        sortIndex: -1
      }, z > ft ? (X.sortIndex = z, i(h, X), s(p) === null && X === s(h) && (R ? (B(I), I = -1) : R = !0, Vt(Z, z - ft))) : (X.sortIndex = mt, i(p, X), E || C || (E = !0, Q || (Q = !0, wt()))), X;
    }, n.unstable_shouldYield = rt, n.unstable_wrapCallback = function(X) {
      var L = x;
      return function() {
        var z = x;
        x = L;
        try {
          return X.apply(this, arguments);
        } finally {
          x = z;
        }
      };
    };
  }(Cc)), Cc;
}
var py;
function rS() {
  return py || (py = 1, Oc.exports = sS()), Oc.exports;
}
var Dc = { exports: {} }, pt = {}, yy;
function lS() {
  if (yy) return pt;
  yy = 1;
  var n = {};
  /**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var i = Symbol.for("react.transitional.element"), s = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), x = Symbol.iterator;
  function C(w) {
    return w === null || typeof w != "object" ? null : (w = x && w[x] || w["@@iterator"], typeof w == "function" ? w : null);
  }
  var E = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, R = Object.assign, N = {};
  function V(w, K, J) {
    this.props = w, this.context = K, this.refs = N, this.updater = J || E;
  }
  V.prototype.isReactComponent = {}, V.prototype.setState = function(w, K) {
    if (typeof w != "object" && typeof w != "function" && w != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, w, K, "setState");
  }, V.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function B() {
  }
  B.prototype = V.prototype;
  function H(w, K, J) {
    this.props = w, this.context = K, this.refs = N, this.updater = J || E;
  }
  var W = H.prototype = new B();
  W.constructor = H, R(W, V.prototype), W.isPureReactComponent = !0;
  var Z = Array.isArray, Q = { H: null, A: null, T: null, S: null, V: null }, I = Object.prototype.hasOwnProperty;
  function Y(w, K, J, F, at, St) {
    return J = St.ref, {
      $$typeof: i,
      type: w,
      key: K,
      ref: J !== void 0 ? J : null,
      props: St
    };
  }
  function ot(w, K) {
    return Y(
      w.type,
      K,
      void 0,
      void 0,
      void 0,
      w.props
    );
  }
  function rt(w) {
    return typeof w == "object" && w !== null && w.$$typeof === i;
  }
  function dt(w) {
    var K = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(J) {
      return K[J];
    });
  }
  var wt = /\/+/g;
  function Dt(w, K) {
    return typeof w == "object" && w !== null && w.key != null ? dt("" + w.key) : K.toString(36);
  }
  function Gt() {
  }
  function Vt(w) {
    switch (w.status) {
      case "fulfilled":
        return w.value;
      case "rejected":
        throw w.reason;
      default:
        switch (typeof w.status == "string" ? w.then(Gt, Gt) : (w.status = "pending", w.then(
          function(K) {
            w.status === "pending" && (w.status = "fulfilled", w.value = K);
          },
          function(K) {
            w.status === "pending" && (w.status = "rejected", w.reason = K);
          }
        )), w.status) {
          case "fulfilled":
            return w.value;
          case "rejected":
            throw w.reason;
        }
    }
    throw w;
  }
  function X(w, K, J, F, at) {
    var St = typeof w;
    (St === "undefined" || St === "boolean") && (w = null);
    var $ = !1;
    if (w === null) $ = !0;
    else
      switch (St) {
        case "bigint":
        case "string":
        case "number":
          $ = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case i:
            case s:
              $ = !0;
              break;
            case b:
              return $ = w._init, X(
                $(w._payload),
                K,
                J,
                F,
                at
              );
          }
      }
    if ($)
      return at = at(w), $ = F === "" ? "." + Dt(w, 0) : F, Z(at) ? (J = "", $ != null && (J = $.replace(wt, "$&/") + "/"), X(at, K, J, "", function(pe) {
        return pe;
      })) : at != null && (rt(at) && (at = ot(
        at,
        J + (at.key == null || w && w.key === at.key ? "" : ("" + at.key).replace(
          wt,
          "$&/"
        ) + "/") + $
      )), K.push(at)), 1;
    $ = 0;
    var ee = F === "" ? "." : F + ":";
    if (Z(w))
      for (var Et = 0; Et < w.length; Et++)
        F = w[Et], St = ee + Dt(F, Et), $ += X(
          F,
          K,
          J,
          St,
          at
        );
    else if (Et = C(w), typeof Et == "function")
      for (w = Et.call(w), Et = 0; !(F = w.next()).done; )
        F = F.value, St = ee + Dt(F, Et++), $ += X(
          F,
          K,
          J,
          St,
          at
        );
    else if (St === "object") {
      if (typeof w.then == "function")
        return X(
          Vt(w),
          K,
          J,
          F,
          at
        );
      throw K = String(w), Error(
        "Objects are not valid as a React child (found: " + (K === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : K) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return $;
  }
  function L(w, K, J) {
    if (w == null) return w;
    var F = [], at = 0;
    return X(w, F, "", "", function(St) {
      return K.call(J, St, at++);
    }), F;
  }
  function z(w) {
    if (w._status === -1) {
      var K = w._result;
      K = K(), K.then(
        function(J) {
          (w._status === 0 || w._status === -1) && (w._status = 1, w._result = J);
        },
        function(J) {
          (w._status === 0 || w._status === -1) && (w._status = 2, w._result = J);
        }
      ), w._status === -1 && (w._status = 0, w._result = K);
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var ft = typeof reportError == "function" ? reportError : function(w) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var K = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof w == "object" && w !== null && typeof w.message == "string" ? String(w.message) : String(w),
        error: w
      });
      if (!window.dispatchEvent(K)) return;
    } else if (typeof n == "object" && typeof n.emit == "function") {
      n.emit("uncaughtException", w);
      return;
    }
    console.error(w);
  };
  function mt() {
  }
  return pt.Children = {
    map: L,
    forEach: function(w, K, J) {
      L(
        w,
        function() {
          K.apply(this, arguments);
        },
        J
      );
    },
    count: function(w) {
      var K = 0;
      return L(w, function() {
        K++;
      }), K;
    },
    toArray: function(w) {
      return L(w, function(K) {
        return K;
      }) || [];
    },
    only: function(w) {
      if (!rt(w))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return w;
    }
  }, pt.Component = V, pt.Fragment = l, pt.Profiler = m, pt.PureComponent = H, pt.StrictMode = o, pt.Suspense = h, pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q, pt.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(w) {
      return Q.H.useMemoCache(w);
    }
  }, pt.cache = function(w) {
    return function() {
      return w.apply(null, arguments);
    };
  }, pt.cloneElement = function(w, K, J) {
    if (w == null)
      throw Error(
        "The argument must be a React element, but you passed " + w + "."
      );
    var F = R({}, w.props), at = w.key, St = void 0;
    if (K != null)
      for ($ in K.ref !== void 0 && (St = void 0), K.key !== void 0 && (at = "" + K.key), K)
        !I.call(K, $) || $ === "key" || $ === "__self" || $ === "__source" || $ === "ref" && K.ref === void 0 || (F[$] = K[$]);
    var $ = arguments.length - 2;
    if ($ === 1) F.children = J;
    else if (1 < $) {
      for (var ee = Array($), Et = 0; Et < $; Et++)
        ee[Et] = arguments[Et + 2];
      F.children = ee;
    }
    return Y(w.type, at, void 0, void 0, St, F);
  }, pt.createContext = function(w) {
    return w = {
      $$typeof: d,
      _currentValue: w,
      _currentValue2: w,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, w.Provider = w, w.Consumer = {
      $$typeof: f,
      _context: w
    }, w;
  }, pt.createElement = function(w, K, J) {
    var F, at = {}, St = null;
    if (K != null)
      for (F in K.key !== void 0 && (St = "" + K.key), K)
        I.call(K, F) && F !== "key" && F !== "__self" && F !== "__source" && (at[F] = K[F]);
    var $ = arguments.length - 2;
    if ($ === 1) at.children = J;
    else if (1 < $) {
      for (var ee = Array($), Et = 0; Et < $; Et++)
        ee[Et] = arguments[Et + 2];
      at.children = ee;
    }
    if (w && w.defaultProps)
      for (F in $ = w.defaultProps, $)
        at[F] === void 0 && (at[F] = $[F]);
    return Y(w, St, void 0, void 0, null, at);
  }, pt.createRef = function() {
    return { current: null };
  }, pt.forwardRef = function(w) {
    return { $$typeof: p, render: w };
  }, pt.isValidElement = rt, pt.lazy = function(w) {
    return {
      $$typeof: b,
      _payload: { _status: -1, _result: w },
      _init: z
    };
  }, pt.memo = function(w, K) {
    return {
      $$typeof: g,
      type: w,
      compare: K === void 0 ? null : K
    };
  }, pt.startTransition = function(w) {
    var K = Q.T, J = {};
    Q.T = J;
    try {
      var F = w(), at = Q.S;
      at !== null && at(J, F), typeof F == "object" && F !== null && typeof F.then == "function" && F.then(mt, ft);
    } catch (St) {
      ft(St);
    } finally {
      Q.T = K;
    }
  }, pt.unstable_useCacheRefresh = function() {
    return Q.H.useCacheRefresh();
  }, pt.use = function(w) {
    return Q.H.use(w);
  }, pt.useActionState = function(w, K, J) {
    return Q.H.useActionState(w, K, J);
  }, pt.useCallback = function(w, K) {
    return Q.H.useCallback(w, K);
  }, pt.useContext = function(w) {
    return Q.H.useContext(w);
  }, pt.useDebugValue = function() {
  }, pt.useDeferredValue = function(w, K) {
    return Q.H.useDeferredValue(w, K);
  }, pt.useEffect = function(w, K, J) {
    var F = Q.H;
    if (typeof J == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return F.useEffect(w, K);
  }, pt.useId = function() {
    return Q.H.useId();
  }, pt.useImperativeHandle = function(w, K, J) {
    return Q.H.useImperativeHandle(w, K, J);
  }, pt.useInsertionEffect = function(w, K) {
    return Q.H.useInsertionEffect(w, K);
  }, pt.useLayoutEffect = function(w, K) {
    return Q.H.useLayoutEffect(w, K);
  }, pt.useMemo = function(w, K) {
    return Q.H.useMemo(w, K);
  }, pt.useOptimistic = function(w, K) {
    return Q.H.useOptimistic(w, K);
  }, pt.useReducer = function(w, K, J) {
    return Q.H.useReducer(w, K, J);
  }, pt.useRef = function(w) {
    return Q.H.useRef(w);
  }, pt.useState = function(w) {
    return Q.H.useState(w);
  }, pt.useSyncExternalStore = function(w, K, J) {
    return Q.H.useSyncExternalStore(
      w,
      K,
      J
    );
  }, pt.useTransition = function() {
    return Q.H.useTransition();
  }, pt.version = "19.1.0", pt;
}
var gy;
function _f() {
  return gy || (gy = 1, Dc.exports = lS()), Dc.exports;
}
var Nc = { exports: {} }, me = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vy;
function oS() {
  if (vy) return me;
  vy = 1;
  var n = _f();
  function i(p) {
    var h = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        h += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return "Minified React error #" + p + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s() {
  }
  var l = {
    d: {
      f: s,
      r: function() {
        throw Error(i(522));
      },
      D: s,
      C: s,
      L: s,
      m: s,
      X: s,
      S: s,
      M: s
    },
    p: 0,
    findDOMNode: null
  }, o = Symbol.for("react.portal");
  function m(p, h, g) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: b == null ? null : "" + b,
      children: p,
      containerInfo: h,
      implementation: g
    };
  }
  var f = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(p, h) {
    if (p === "font") return "";
    if (typeof h == "string")
      return h === "use-credentials" ? h : "";
  }
  return me.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l, me.createPortal = function(p, h) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(i(299));
    return m(p, h, null, g);
  }, me.flushSync = function(p) {
    var h = f.T, g = l.p;
    try {
      if (f.T = null, l.p = 2, p) return p();
    } finally {
      f.T = h, l.p = g, l.d.f();
    }
  }, me.preconnect = function(p, h) {
    typeof p == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, l.d.C(p, h));
  }, me.prefetchDNS = function(p) {
    typeof p == "string" && l.d.D(p);
  }, me.preinit = function(p, h) {
    if (typeof p == "string" && h && typeof h.as == "string") {
      var g = h.as, b = d(g, h.crossOrigin), x = typeof h.integrity == "string" ? h.integrity : void 0, C = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      g === "style" ? l.d.S(
        p,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: b,
          integrity: x,
          fetchPriority: C
        }
      ) : g === "script" && l.d.X(p, {
        crossOrigin: b,
        integrity: x,
        fetchPriority: C,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      });
    }
  }, me.preinitModule = function(p, h) {
    if (typeof p == "string")
      if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var g = d(
            h.as,
            h.crossOrigin
          );
          l.d.M(p, {
            crossOrigin: g,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && l.d.M(p);
  }, me.preload = function(p, h) {
    if (typeof p == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var g = h.as, b = d(g, h.crossOrigin);
      l.d.L(p, g, {
        crossOrigin: b,
        integrity: typeof h.integrity == "string" ? h.integrity : void 0,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0,
        type: typeof h.type == "string" ? h.type : void 0,
        fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
        referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
        imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
        imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
        media: typeof h.media == "string" ? h.media : void 0
      });
    }
  }, me.preloadModule = function(p, h) {
    if (typeof p == "string")
      if (h) {
        var g = d(h.as, h.crossOrigin);
        l.d.m(p, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: g,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else l.d.m(p);
  }, me.requestFormReset = function(p) {
    l.d.r(p);
  }, me.unstable_batchedUpdates = function(p, h) {
    return p(h);
  }, me.useFormState = function(p, h, g) {
    return f.H.useFormState(p, h, g);
  }, me.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, me.version = "19.1.0", me;
}
var by;
function uS() {
  if (by) return Nc.exports;
  by = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), Nc.exports = oS(), Nc.exports;
}
var xy;
function cS() {
  if (xy) return Ps;
  xy = 1;
  var n = {};
  /**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var i = rS(), s = _f(), l = uS();
  function o(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        e += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function m(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function f(t) {
    var e = t, a = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (a = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? a : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (f(t) !== t)
      throw Error(o(188));
  }
  function h(t) {
    var e = t.alternate;
    if (!e) {
      if (e = f(t), e === null) throw Error(o(188));
      return e !== t ? null : t;
    }
    for (var a = t, r = e; ; ) {
      var u = a.return;
      if (u === null) break;
      var c = u.alternate;
      if (c === null) {
        if (r = u.return, r !== null) {
          a = r;
          continue;
        }
        break;
      }
      if (u.child === c.child) {
        for (c = u.child; c; ) {
          if (c === a) return p(u), t;
          if (c === r) return p(u), e;
          c = c.sibling;
        }
        throw Error(o(188));
      }
      if (a.return !== r.return) a = u, r = c;
      else {
        for (var y = !1, v = u.child; v; ) {
          if (v === a) {
            y = !0, a = u, r = c;
            break;
          }
          if (v === r) {
            y = !0, r = u, a = c;
            break;
          }
          v = v.sibling;
        }
        if (!y) {
          for (v = c.child; v; ) {
            if (v === a) {
              y = !0, a = c, r = u;
              break;
            }
            if (v === r) {
              y = !0, r = c, a = u;
              break;
            }
            v = v.sibling;
          }
          if (!y) throw Error(o(189));
        }
      }
      if (a.alternate !== r) throw Error(o(190));
    }
    if (a.tag !== 3) throw Error(o(188));
    return a.stateNode.current === a ? t : e;
  }
  function g(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = g(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var b = Object.assign, x = Symbol.for("react.element"), C = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), B = Symbol.for("react.provider"), H = Symbol.for("react.consumer"), W = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), ot = Symbol.for("react.lazy"), rt = Symbol.for("react.activity"), dt = Symbol.for("react.memo_cache_sentinel"), wt = Symbol.iterator;
  function Dt(t) {
    return t === null || typeof t != "object" ? null : (t = wt && t[wt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Gt = Symbol.for("react.client.reference");
  function Vt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Gt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case R:
        return "Fragment";
      case V:
        return "Profiler";
      case N:
        return "StrictMode";
      case Q:
        return "Suspense";
      case I:
        return "SuspenseList";
      case rt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case E:
          return "Portal";
        case W:
          return (t.displayName || "Context") + ".Provider";
        case H:
          return (t._context.displayName || "Context") + ".Consumer";
        case Z:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case Y:
          return e = t.displayName || null, e !== null ? e : Vt(t.type) || "Memo";
        case ot:
          e = t._payload, t = t._init;
          try {
            return Vt(t(e));
          } catch {
          }
      }
    return null;
  }
  var X = Array.isArray, L = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ft = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, mt = [], w = -1;
  function K(t) {
    return { current: t };
  }
  function J(t) {
    0 > w || (t.current = mt[w], mt[w] = null, w--);
  }
  function F(t, e) {
    w++, mt[w] = t.current, t.current = e;
  }
  var at = K(null), St = K(null), $ = K(null), ee = K(null);
  function Et(t, e) {
    switch (F($, e), F(St, t), F(at, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Hp(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Hp(e), t = qp(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    J(at), F(at, t);
  }
  function pe() {
    J(at), J(St), J($);
  }
  function nn(t) {
    t.memoizedState !== null && F(ee, t);
    var e = at.current, a = qp(e, t.type);
    e !== a && (F(St, t), F(at, a));
  }
  function an(t) {
    St.current === t && (J(at), J(St)), ee.current === t && (J(ee), Vs._currentValue = ft);
  }
  var ye = Object.prototype.hasOwnProperty, ci = i.unstable_scheduleCallback, ho = i.unstable_cancelCallback, Ub = i.unstable_shouldYield, Vb = i.unstable_requestPaint, sn = i.unstable_now, Bb = i.unstable_getCurrentPriorityLevel, xm = i.unstable_ImmediatePriority, Sm = i.unstable_UserBlockingPriority, pr = i.unstable_NormalPriority, Lb = i.unstable_LowPriority, Tm = i.unstable_IdlePriority, kb = i.log, Hb = i.unstable_setDisableYieldValue, Ga = null, Oe = null;
  function _n(t) {
    if (typeof kb == "function" && Hb(t), Oe && typeof Oe.setStrictMode == "function")
      try {
        Oe.setStrictMode(Ga, t);
      } catch {
      }
  }
  var Ce = Math.clz32 ? Math.clz32 : Yb, qb = Math.log, Pb = Math.LN2;
  function Yb(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (qb(t) / Pb | 0) | 0;
  }
  var yr = 256, gr = 4194304;
  function fi(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return 64;
      case 128:
        return 128;
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
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function vr(t, e, a) {
    var r = t.pendingLanes;
    if (r === 0) return 0;
    var u = 0, c = t.suspendedLanes, y = t.pingedLanes;
    t = t.warmLanes;
    var v = r & 134217727;
    return v !== 0 ? (r = v & ~c, r !== 0 ? u = fi(r) : (y &= v, y !== 0 ? u = fi(y) : a || (a = v & ~t, a !== 0 && (u = fi(a))))) : (v = r & ~c, v !== 0 ? u = fi(v) : y !== 0 ? u = fi(y) : a || (a = r & ~t, a !== 0 && (u = fi(a)))), u === 0 ? 0 : e !== 0 && e !== u && (e & c) === 0 && (c = u & -u, a = e & -e, c >= a || c === 32 && (a & 4194048) !== 0) ? e : u;
  }
  function Xa(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Gb(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
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
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function wm() {
    var t = yr;
    return yr <<= 1, (yr & 4194048) === 0 && (yr = 256), t;
  }
  function Am() {
    var t = gr;
    return gr <<= 1, (gr & 62914560) === 0 && (gr = 4194304), t;
  }
  function po(t) {
    for (var e = [], a = 0; 31 > a; a++) e.push(t);
    return e;
  }
  function Ka(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Xb(t, e, a, r, u, c) {
    var y = t.pendingLanes;
    t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
    var v = t.entanglements, S = t.expirationTimes, D = t.hiddenUpdates;
    for (a = y & ~a; 0 < a; ) {
      var k = 31 - Ce(a), P = 1 << k;
      v[k] = 0, S[k] = -1;
      var j = D[k];
      if (j !== null)
        for (D[k] = null, k = 0; k < j.length; k++) {
          var _ = j[k];
          _ !== null && (_.lane &= -536870913);
        }
      a &= ~P;
    }
    r !== 0 && Em(t, r, 0), c !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(y & ~e));
  }
  function Em(t, e, a) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var r = 31 - Ce(e);
    t.entangledLanes |= e, t.entanglements[r] = t.entanglements[r] | 1073741824 | a & 4194090;
  }
  function Mm(t, e) {
    var a = t.entangledLanes |= e;
    for (t = t.entanglements; a; ) {
      var r = 31 - Ce(a), u = 1 << r;
      u & e | t[r] & e && (t[r] |= e), a &= ~u;
    }
  }
  function yo(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function go(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Rm() {
    var t = z.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : ry(t.type));
  }
  function Kb(t, e) {
    var a = z.p;
    try {
      return z.p = t, e();
    } finally {
      z.p = a;
    }
  }
  var zn = Math.random().toString(36).slice(2), ce = "__reactFiber$" + zn, xe = "__reactProps$" + zn, Hi = "__reactContainer$" + zn, vo = "__reactEvents$" + zn, Qb = "__reactListeners$" + zn, Zb = "__reactHandles$" + zn, Om = "__reactResources$" + zn, Qa = "__reactMarker$" + zn;
  function bo(t) {
    delete t[ce], delete t[xe], delete t[vo], delete t[Qb], delete t[Zb];
  }
  function qi(t) {
    var e = t[ce];
    if (e) return e;
    for (var a = t.parentNode; a; ) {
      if (e = a[Hi] || a[ce]) {
        if (a = e.alternate, e.child !== null || a !== null && a.child !== null)
          for (t = Xp(t); t !== null; ) {
            if (a = t[ce]) return a;
            t = Xp(t);
          }
        return e;
      }
      t = a, a = t.parentNode;
    }
    return null;
  }
  function Pi(t) {
    if (t = t[ce] || t[Hi]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Za(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function Yi(t) {
    var e = t[Om];
    return e || (e = t[Om] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function ne(t) {
    t[Qa] = !0;
  }
  var Cm = /* @__PURE__ */ new Set(), Dm = {};
  function mi(t, e) {
    Gi(t, e), Gi(t + "Capture", e);
  }
  function Gi(t, e) {
    for (Dm[t] = e, t = 0; t < e.length; t++)
      Cm.add(e[t]);
  }
  var Fb = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Nm = {}, jm = {};
  function Wb(t) {
    return ye.call(jm, t) ? !0 : ye.call(Nm, t) ? !1 : Fb.test(t) ? jm[t] = !0 : (Nm[t] = !0, !1);
  }
  function br(t, e, a) {
    if (Wb(e))
      if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var r = e.toLowerCase().slice(0, 5);
            if (r !== "data-" && r !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + a);
      }
  }
  function xr(t, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + a);
    }
  }
  function pn(t, e, a, r) {
    if (r === null) t.removeAttribute(a);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(e, a, "" + r);
    }
  }
  var xo, _m;
  function Xi(t) {
    if (xo === void 0)
      try {
        throw Error();
      } catch (a) {
        var e = a.stack.trim().match(/\n( *(at )?)/);
        xo = e && e[1] || "", _m = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + xo + t + _m;
  }
  var So = !1;
  function To(t, e) {
    if (!t || So) return "";
    So = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var P = function() {
                throw Error();
              };
              if (Object.defineProperty(P.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(P, []);
                } catch (_) {
                  var j = _;
                }
                Reflect.construct(t, [], P);
              } else {
                try {
                  P.call();
                } catch (_) {
                  j = _;
                }
                t.call(P.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (_) {
                j = _;
              }
              (P = t()) && typeof P.catch == "function" && P.catch(function() {
              });
            }
          } catch (_) {
            if (_ && j && typeof _.stack == "string")
              return [_.stack, j.stack];
          }
          return [null, null];
        }
      };
      r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        r.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        r.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var c = r.DetermineComponentFrameRoot(), y = c[0], v = c[1];
      if (y && v) {
        var S = y.split(`
`), D = v.split(`
`);
        for (u = r = 0; r < S.length && !S[r].includes("DetermineComponentFrameRoot"); )
          r++;
        for (; u < D.length && !D[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (r === S.length || u === D.length)
          for (r = S.length - 1, u = D.length - 1; 1 <= r && 0 <= u && S[r] !== D[u]; )
            u--;
        for (; 1 <= r && 0 <= u; r--, u--)
          if (S[r] !== D[u]) {
            if (r !== 1 || u !== 1)
              do
                if (r--, u--, 0 > u || S[r] !== D[u]) {
                  var k = `
` + S[r].replace(" at new ", " at ");
                  return t.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", t.displayName)), k;
                }
              while (1 <= r && 0 <= u);
            break;
          }
      }
    } finally {
      So = !1, Error.prepareStackTrace = a;
    }
    return (a = t ? t.displayName || t.name : "") ? Xi(a) : "";
  }
  function Jb(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Xi(t.type);
      case 16:
        return Xi("Lazy");
      case 13:
        return Xi("Suspense");
      case 19:
        return Xi("SuspenseList");
      case 0:
      case 15:
        return To(t.type, !1);
      case 11:
        return To(t.type.render, !1);
      case 1:
        return To(t.type, !0);
      case 31:
        return Xi("Activity");
      default:
        return "";
    }
  }
  function zm(t) {
    try {
      var e = "";
      do
        e += Jb(t), t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function Be(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Um(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function $b(t) {
    var e = Um(t) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    ), r = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var u = a.get, c = a.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(y) {
          r = "" + y, c.call(this, y);
        }
      }), Object.defineProperty(t, e, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return r;
        },
        setValue: function(y) {
          r = "" + y;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function Sr(t) {
    t._valueTracker || (t._valueTracker = $b(t));
  }
  function Vm(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var a = e.getValue(), r = "";
    return t && (r = Um(t) ? t.checked ? "true" : "false" : t.value), t = r, t !== a ? (e.setValue(t), !0) : !1;
  }
  function Tr(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Ib = /[\n"\\]/g;
  function Le(t) {
    return t.replace(
      Ib,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function wo(t, e, a, r, u, c, y, v) {
    t.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? t.type = y : t.removeAttribute("type"), e != null ? y === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Be(e)) : t.value !== "" + Be(e) && (t.value = "" + Be(e)) : y !== "submit" && y !== "reset" || t.removeAttribute("value"), e != null ? Ao(t, y, Be(e)) : a != null ? Ao(t, y, Be(a)) : r != null && t.removeAttribute("value"), u == null && c != null && (t.defaultChecked = !!c), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.name = "" + Be(v) : t.removeAttribute("name");
  }
  function Bm(t, e, a, r, u, c, y, v) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.type = c), e != null || a != null) {
      if (!(c !== "submit" && c !== "reset" || e != null))
        return;
      a = a != null ? "" + Be(a) : "", e = e != null ? "" + Be(e) : a, v || e === t.value || (t.value = e), t.defaultValue = e;
    }
    r = r ?? u, r = typeof r != "function" && typeof r != "symbol" && !!r, t.checked = v ? t.checked : !!r, t.defaultChecked = !!r, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (t.name = y);
  }
  function Ao(t, e, a) {
    e === "number" && Tr(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a);
  }
  function Ki(t, e, a, r) {
    if (t = t.options, e) {
      e = {};
      for (var u = 0; u < a.length; u++)
        e["$" + a[u]] = !0;
      for (a = 0; a < t.length; a++)
        u = e.hasOwnProperty("$" + t[a].value), t[a].selected !== u && (t[a].selected = u), u && r && (t[a].defaultSelected = !0);
    } else {
      for (a = "" + Be(a), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === a) {
          t[u].selected = !0, r && (t[u].defaultSelected = !0);
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Lm(t, e, a) {
    if (e != null && (e = "" + Be(e), e !== t.value && (t.value = e), a == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = a != null ? "" + Be(a) : "";
  }
  function km(t, e, a, r) {
    if (e == null) {
      if (r != null) {
        if (a != null) throw Error(o(92));
        if (X(r)) {
          if (1 < r.length) throw Error(o(93));
          r = r[0];
        }
        a = r;
      }
      a == null && (a = ""), e = a;
    }
    a = Be(e), t.defaultValue = a, r = t.textContent, r === a && r !== "" && r !== null && (t.value = r);
  }
  function Qi(t, e) {
    if (e) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var t1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Hm(t, e, a) {
    var r = e.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? r ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : r ? t.setProperty(e, a) : typeof a != "number" || a === 0 || t1.has(e) ? e === "float" ? t.cssFloat = a : t[e] = ("" + a).trim() : t[e] = a + "px";
  }
  function qm(t, e, a) {
    if (e != null && typeof e != "object")
      throw Error(o(62));
    if (t = t.style, a != null) {
      for (var r in a)
        !a.hasOwnProperty(r) || e != null && e.hasOwnProperty(r) || (r.indexOf("--") === 0 ? t.setProperty(r, "") : r === "float" ? t.cssFloat = "" : t[r] = "");
      for (var u in e)
        r = e[u], e.hasOwnProperty(u) && a[u] !== r && Hm(t, u, r);
    } else
      for (var c in e)
        e.hasOwnProperty(c) && Hm(t, c, e[c]);
  }
  function Eo(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var e1 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), n1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function wr(t) {
    return n1.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var Mo = null;
  function Ro(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Zi = null, Fi = null;
  function Pm(t) {
    var e = Pi(t);
    if (e && (t = e.stateNode)) {
      var a = t[xe] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (wo(
            t,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), e = a.name, a.type === "radio" && e != null) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + Le(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < a.length; e++) {
              var r = a[e];
              if (r !== t && r.form === t.form) {
                var u = r[xe] || null;
                if (!u) throw Error(o(90));
                wo(
                  r,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (e = 0; e < a.length; e++)
              r = a[e], r.form === t.form && Vm(r);
          }
          break t;
        case "textarea":
          Lm(t, a.value, a.defaultValue);
          break t;
        case "select":
          e = a.value, e != null && Ki(t, !!a.multiple, e, !1);
      }
    }
  }
  var Oo = !1;
  function Ym(t, e, a) {
    if (Oo) return t(e, a);
    Oo = !0;
    try {
      var r = t(e);
      return r;
    } finally {
      if (Oo = !1, (Zi !== null || Fi !== null) && (ol(), Zi && (e = Zi, t = Fi, Fi = Zi = null, Pm(e), t)))
        for (e = 0; e < t.length; e++) Pm(t[e]);
    }
  }
  function Fa(t, e) {
    var a = t.stateNode;
    if (a === null) return null;
    var r = a[xe] || null;
    if (r === null) return null;
    a = r[e];
    t: switch (e) {
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
        (r = !r.disabled) || (t = t.type, r = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !r;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function")
      throw Error(
        o(231, e, typeof a)
      );
    return a;
  }
  var yn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Co = !1;
  if (yn)
    try {
      var Wa = {};
      Object.defineProperty(Wa, "passive", {
        get: function() {
          Co = !0;
        }
      }), window.addEventListener("test", Wa, Wa), window.removeEventListener("test", Wa, Wa);
    } catch {
      Co = !1;
    }
  var Un = null, Do = null, Ar = null;
  function Gm() {
    if (Ar) return Ar;
    var t, e = Do, a = e.length, r, u = "value" in Un ? Un.value : Un.textContent, c = u.length;
    for (t = 0; t < a && e[t] === u[t]; t++) ;
    var y = a - t;
    for (r = 1; r <= y && e[a - r] === u[c - r]; r++) ;
    return Ar = u.slice(t, 1 < r ? 1 - r : void 0);
  }
  function Er(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Mr() {
    return !0;
  }
  function Xm() {
    return !1;
  }
  function Se(t) {
    function e(a, r, u, c, y) {
      this._reactName = a, this._targetInst = u, this.type = r, this.nativeEvent = c, this.target = y, this.currentTarget = null;
      for (var v in t)
        t.hasOwnProperty(v) && (a = t[v], this[v] = a ? a(c) : c[v]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Mr : Xm, this.isPropagationStopped = Xm, this;
    }
    return b(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Mr);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Mr);
      },
      persist: function() {
      },
      isPersistent: Mr
    }), e;
  }
  var di = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Rr = Se(di), Ja = b({}, di, { view: 0, detail: 0 }), i1 = Se(Ja), No, jo, $a, Or = b({}, Ja, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: zo,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== $a && ($a && t.type === "mousemove" ? (No = t.screenX - $a.screenX, jo = t.screenY - $a.screenY) : jo = No = 0, $a = t), No);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : jo;
    }
  }), Km = Se(Or), a1 = b({}, Or, { dataTransfer: 0 }), s1 = Se(a1), r1 = b({}, Ja, { relatedTarget: 0 }), _o = Se(r1), l1 = b({}, di, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), o1 = Se(l1), u1 = b({}, di, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), c1 = Se(u1), f1 = b({}, di, { data: 0 }), Qm = Se(f1), m1 = {
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
  }, d1 = {
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
  }, h1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function p1(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = h1[t]) ? !!e[t] : !1;
  }
  function zo() {
    return p1;
  }
  var y1 = b({}, Ja, {
    key: function(t) {
      if (t.key) {
        var e = m1[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Er(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? d1[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zo,
    charCode: function(t) {
      return t.type === "keypress" ? Er(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Er(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), g1 = Se(y1), v1 = b({}, Or, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Zm = Se(v1), b1 = b({}, Ja, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zo
  }), x1 = Se(b1), S1 = b({}, di, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), T1 = Se(S1), w1 = b({}, Or, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), A1 = Se(w1), E1 = b({}, di, {
    newState: 0,
    oldState: 0
  }), M1 = Se(E1), R1 = [9, 13, 27, 32], Uo = yn && "CompositionEvent" in window, Ia = null;
  yn && "documentMode" in document && (Ia = document.documentMode);
  var O1 = yn && "TextEvent" in window && !Ia, Fm = yn && (!Uo || Ia && 8 < Ia && 11 >= Ia), Wm = " ", Jm = !1;
  function $m(t, e) {
    switch (t) {
      case "keyup":
        return R1.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Im(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Wi = !1;
  function C1(t, e) {
    switch (t) {
      case "compositionend":
        return Im(e);
      case "keypress":
        return e.which !== 32 ? null : (Jm = !0, Wm);
      case "textInput":
        return t = e.data, t === Wm && Jm ? null : t;
      default:
        return null;
    }
  }
  function D1(t, e) {
    if (Wi)
      return t === "compositionend" || !Uo && $m(t, e) ? (t = Gm(), Ar = Do = Un = null, Wi = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Fm && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var N1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function td(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!N1[t.type] : e === "textarea";
  }
  function ed(t, e, a, r) {
    Zi ? Fi ? Fi.push(r) : Fi = [r] : Zi = r, e = hl(e, "onChange"), 0 < e.length && (a = new Rr(
      "onChange",
      "change",
      null,
      a,
      r
    ), t.push({ event: a, listeners: e }));
  }
  var ts = null, es = null;
  function j1(t) {
    Up(t, 0);
  }
  function Cr(t) {
    var e = Za(t);
    if (Vm(e)) return t;
  }
  function nd(t, e) {
    if (t === "change") return e;
  }
  var id = !1;
  if (yn) {
    var Vo;
    if (yn) {
      var Bo = "oninput" in document;
      if (!Bo) {
        var ad = document.createElement("div");
        ad.setAttribute("oninput", "return;"), Bo = typeof ad.oninput == "function";
      }
      Vo = Bo;
    } else Vo = !1;
    id = Vo && (!document.documentMode || 9 < document.documentMode);
  }
  function sd() {
    ts && (ts.detachEvent("onpropertychange", rd), es = ts = null);
  }
  function rd(t) {
    if (t.propertyName === "value" && Cr(es)) {
      var e = [];
      ed(
        e,
        es,
        t,
        Ro(t)
      ), Ym(j1, e);
    }
  }
  function _1(t, e, a) {
    t === "focusin" ? (sd(), ts = e, es = a, ts.attachEvent("onpropertychange", rd)) : t === "focusout" && sd();
  }
  function z1(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Cr(es);
  }
  function U1(t, e) {
    if (t === "click") return Cr(e);
  }
  function V1(t, e) {
    if (t === "input" || t === "change")
      return Cr(e);
  }
  function B1(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var De = typeof Object.is == "function" ? Object.is : B1;
  function ns(t, e) {
    if (De(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var a = Object.keys(t), r = Object.keys(e);
    if (a.length !== r.length) return !1;
    for (r = 0; r < a.length; r++) {
      var u = a[r];
      if (!ye.call(e, u) || !De(t[u], e[u]))
        return !1;
    }
    return !0;
  }
  function ld(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function od(t, e) {
    var a = ld(t);
    t = 0;
    for (var r; a; ) {
      if (a.nodeType === 3) {
        if (r = t + a.textContent.length, t <= e && r >= e)
          return { node: a, offset: e - t };
        t = r;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = ld(a);
    }
  }
  function ud(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? ud(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function cd(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Tr(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof e.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = e.contentWindow;
      else break;
      e = Tr(t.document);
    }
    return e;
  }
  function Lo(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var L1 = yn && "documentMode" in document && 11 >= document.documentMode, Ji = null, ko = null, is = null, Ho = !1;
  function fd(t, e, a) {
    var r = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Ho || Ji == null || Ji !== Tr(r) || (r = Ji, "selectionStart" in r && Lo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    }), is && ns(is, r) || (is = r, r = hl(ko, "onSelect"), 0 < r.length && (e = new Rr(
      "onSelect",
      "select",
      null,
      e,
      a
    ), t.push({ event: e, listeners: r }), e.target = Ji)));
  }
  function hi(t, e) {
    var a = {};
    return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a;
  }
  var $i = {
    animationend: hi("Animation", "AnimationEnd"),
    animationiteration: hi("Animation", "AnimationIteration"),
    animationstart: hi("Animation", "AnimationStart"),
    transitionrun: hi("Transition", "TransitionRun"),
    transitionstart: hi("Transition", "TransitionStart"),
    transitioncancel: hi("Transition", "TransitionCancel"),
    transitionend: hi("Transition", "TransitionEnd")
  }, qo = {}, md = {};
  yn && (md = document.createElement("div").style, "AnimationEvent" in window || (delete $i.animationend.animation, delete $i.animationiteration.animation, delete $i.animationstart.animation), "TransitionEvent" in window || delete $i.transitionend.transition);
  function pi(t) {
    if (qo[t]) return qo[t];
    if (!$i[t]) return t;
    var e = $i[t], a;
    for (a in e)
      if (e.hasOwnProperty(a) && a in md)
        return qo[t] = e[a];
    return t;
  }
  var dd = pi("animationend"), hd = pi("animationiteration"), pd = pi("animationstart"), k1 = pi("transitionrun"), H1 = pi("transitionstart"), q1 = pi("transitioncancel"), yd = pi("transitionend"), gd = /* @__PURE__ */ new Map(), Po = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Po.push("scrollEnd");
  function Fe(t, e) {
    gd.set(t, e), mi(e, [t]);
  }
  var vd = /* @__PURE__ */ new WeakMap();
  function ke(t, e) {
    if (typeof t == "object" && t !== null) {
      var a = vd.get(t);
      return a !== void 0 ? a : (e = {
        value: t,
        source: e,
        stack: zm(e)
      }, vd.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: zm(e)
    };
  }
  var He = [], Ii = 0, Yo = 0;
  function Dr() {
    for (var t = Ii, e = Yo = Ii = 0; e < t; ) {
      var a = He[e];
      He[e++] = null;
      var r = He[e];
      He[e++] = null;
      var u = He[e];
      He[e++] = null;
      var c = He[e];
      if (He[e++] = null, r !== null && u !== null) {
        var y = r.pending;
        y === null ? u.next = u : (u.next = y.next, y.next = u), r.pending = u;
      }
      c !== 0 && bd(a, u, c);
    }
  }
  function Nr(t, e, a, r) {
    He[Ii++] = t, He[Ii++] = e, He[Ii++] = a, He[Ii++] = r, Yo |= r, t.lanes |= r, t = t.alternate, t !== null && (t.lanes |= r);
  }
  function Go(t, e, a, r) {
    return Nr(t, e, a, r), jr(t);
  }
  function ta(t, e) {
    return Nr(t, null, null, e), jr(t);
  }
  function bd(t, e, a) {
    t.lanes |= a;
    var r = t.alternate;
    r !== null && (r.lanes |= a);
    for (var u = !1, c = t.return; c !== null; )
      c.childLanes |= a, r = c.alternate, r !== null && (r.childLanes |= a), c.tag === 22 && (t = c.stateNode, t === null || t._visibility & 1 || (u = !0)), t = c, c = c.return;
    return t.tag === 3 ? (c = t.stateNode, u && e !== null && (u = 31 - Ce(a), t = c.hiddenUpdates, r = t[u], r === null ? t[u] = [e] : r.push(e), e.lane = a | 536870912), c) : null;
  }
  function jr(t) {
    if (50 < Os)
      throw Os = 0, Wu = null, Error(o(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var ea = {};
  function P1(t, e, a, r) {
    this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ne(t, e, a, r) {
    return new P1(t, e, a, r);
  }
  function Xo(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function gn(t, e) {
    var a = t.alternate;
    return a === null ? (a = Ne(
      t.tag,
      e,
      t.key,
      t.mode
    ), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a.alternate = t, t.alternate = a) : (a.pendingProps = e, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = t.flags & 65011712, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, e = t.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a;
  }
  function xd(t, e) {
    t.flags &= 65011714;
    var a = t.alternate;
    return a === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, e = a.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function _r(t, e, a, r, u, c) {
    var y = 0;
    if (r = t, typeof t == "function") Xo(t) && (y = 1);
    else if (typeof t == "string")
      y = Gx(
        t,
        a,
        at.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case rt:
          return t = Ne(31, a, e, u), t.elementType = rt, t.lanes = c, t;
        case R:
          return yi(a.children, u, c, e);
        case N:
          y = 8, u |= 24;
          break;
        case V:
          return t = Ne(12, a, e, u | 2), t.elementType = V, t.lanes = c, t;
        case Q:
          return t = Ne(13, a, e, u), t.elementType = Q, t.lanes = c, t;
        case I:
          return t = Ne(19, a, e, u), t.elementType = I, t.lanes = c, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case B:
              case W:
                y = 10;
                break t;
              case H:
                y = 9;
                break t;
              case Z:
                y = 11;
                break t;
              case Y:
                y = 14;
                break t;
              case ot:
                y = 16, r = null;
                break t;
            }
          y = 29, a = Error(
            o(130, t === null ? "null" : typeof t, "")
          ), r = null;
      }
    return e = Ne(y, a, e, u), e.elementType = t, e.type = r, e.lanes = c, e;
  }
  function yi(t, e, a, r) {
    return t = Ne(7, t, r, e), t.lanes = a, t;
  }
  function Ko(t, e, a) {
    return t = Ne(6, t, null, e), t.lanes = a, t;
  }
  function Qo(t, e, a) {
    return e = Ne(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = a, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var na = [], ia = 0, zr = null, Ur = 0, qe = [], Pe = 0, gi = null, vn = 1, bn = "";
  function vi(t, e) {
    na[ia++] = Ur, na[ia++] = zr, zr = t, Ur = e;
  }
  function Sd(t, e, a) {
    qe[Pe++] = vn, qe[Pe++] = bn, qe[Pe++] = gi, gi = t;
    var r = vn;
    t = bn;
    var u = 32 - Ce(r) - 1;
    r &= ~(1 << u), a += 1;
    var c = 32 - Ce(e) + u;
    if (30 < c) {
      var y = u - u % 5;
      c = (r & (1 << y) - 1).toString(32), r >>= y, u -= y, vn = 1 << 32 - Ce(e) + u | a << u | r, bn = c + t;
    } else
      vn = 1 << c | a << u | r, bn = t;
  }
  function Zo(t) {
    t.return !== null && (vi(t, 1), Sd(t, 1, 0));
  }
  function Fo(t) {
    for (; t === zr; )
      zr = na[--ia], na[ia] = null, Ur = na[--ia], na[ia] = null;
    for (; t === gi; )
      gi = qe[--Pe], qe[Pe] = null, bn = qe[--Pe], qe[Pe] = null, vn = qe[--Pe], qe[Pe] = null;
  }
  var ge = null, qt = null, Mt = !1, bi = null, rn = !1, Wo = Error(o(519));
  function xi(t) {
    var e = Error(o(418, ""));
    throw rs(ke(e, t)), Wo;
  }
  function Td(t) {
    var e = t.stateNode, a = t.type, r = t.memoizedProps;
    switch (e[ce] = t, e[xe] = r, a) {
      case "dialog":
        xt("cancel", e), xt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        xt("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Ds.length; a++)
          xt(Ds[a], e);
        break;
      case "source":
        xt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        xt("error", e), xt("load", e);
        break;
      case "details":
        xt("toggle", e);
        break;
      case "input":
        xt("invalid", e), Bm(
          e,
          r.value,
          r.defaultValue,
          r.checked,
          r.defaultChecked,
          r.type,
          r.name,
          !0
        ), Sr(e);
        break;
      case "select":
        xt("invalid", e);
        break;
      case "textarea":
        xt("invalid", e), km(e, r.value, r.defaultValue, r.children), Sr(e);
    }
    a = r.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || r.suppressHydrationWarning === !0 || kp(e.textContent, a) ? (r.popover != null && (xt("beforetoggle", e), xt("toggle", e)), r.onScroll != null && xt("scroll", e), r.onScrollEnd != null && xt("scrollend", e), r.onClick != null && (e.onclick = pl), e = !0) : e = !1, e || xi(t);
  }
  function wd(t) {
    for (ge = t.return; ge; )
      switch (ge.tag) {
        case 5:
        case 13:
          rn = !1;
          return;
        case 27:
        case 3:
          rn = !0;
          return;
        default:
          ge = ge.return;
      }
  }
  function as(t) {
    if (t !== ge) return !1;
    if (!Mt) return wd(t), Mt = !0, !1;
    var e = t.tag, a;
    if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || mc(t.type, t.memoizedProps)), a = !a), a && qt && xi(t), wd(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (a = t.data, a === "/$") {
              if (e === 0) {
                qt = Je(t.nextSibling);
                break t;
              }
              e--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || e++;
          t = t.nextSibling;
        }
        qt = null;
      }
    } else
      e === 27 ? (e = qt, Jn(t.type) ? (t = yc, yc = null, qt = t) : qt = e) : qt = ge ? Je(t.stateNode.nextSibling) : null;
    return !0;
  }
  function ss() {
    qt = ge = null, Mt = !1;
  }
  function Ad() {
    var t = bi;
    return t !== null && (Ae === null ? Ae = t : Ae.push.apply(
      Ae,
      t
    ), bi = null), t;
  }
  function rs(t) {
    bi === null ? bi = [t] : bi.push(t);
  }
  var Jo = K(null), Si = null, xn = null;
  function Vn(t, e, a) {
    F(Jo, e._currentValue), e._currentValue = a;
  }
  function Sn(t) {
    t._currentValue = Jo.current, J(Jo);
  }
  function $o(t, e, a) {
    for (; t !== null; ) {
      var r = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e), t === a) break;
      t = t.return;
    }
  }
  function Io(t, e, a, r) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var c = u.dependencies;
      if (c !== null) {
        var y = u.child;
        c = c.firstContext;
        t: for (; c !== null; ) {
          var v = c;
          c = u;
          for (var S = 0; S < e.length; S++)
            if (v.context === e[S]) {
              c.lanes |= a, v = c.alternate, v !== null && (v.lanes |= a), $o(
                c.return,
                a,
                t
              ), r || (y = null);
              break t;
            }
          c = v.next;
        }
      } else if (u.tag === 18) {
        if (y = u.return, y === null) throw Error(o(341));
        y.lanes |= a, c = y.alternate, c !== null && (c.lanes |= a), $o(y, a, t), y = null;
      } else y = u.child;
      if (y !== null) y.return = u;
      else
        for (y = u; y !== null; ) {
          if (y === t) {
            y = null;
            break;
          }
          if (u = y.sibling, u !== null) {
            u.return = y.return, y = u;
            break;
          }
          y = y.return;
        }
      u = y;
    }
  }
  function ls(t, e, a, r) {
    t = null;
    for (var u = e, c = !1; u !== null; ) {
      if (!c) {
        if ((u.flags & 524288) !== 0) c = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var y = u.alternate;
        if (y === null) throw Error(o(387));
        if (y = y.memoizedProps, y !== null) {
          var v = u.type;
          De(u.pendingProps.value, y.value) || (t !== null ? t.push(v) : t = [v]);
        }
      } else if (u === ee.current) {
        if (y = u.alternate, y === null) throw Error(o(387));
        y.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(Vs) : t = [Vs]);
      }
      u = u.return;
    }
    t !== null && Io(
      e,
      t,
      a,
      r
    ), e.flags |= 262144;
  }
  function Vr(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!De(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Ti(t) {
    Si = t, xn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function fe(t) {
    return Ed(Si, t);
  }
  function Br(t, e) {
    return Si === null && Ti(t), Ed(t, e);
  }
  function Ed(t, e) {
    var a = e._currentValue;
    if (e = { context: e, memoizedValue: a, next: null }, xn === null) {
      if (t === null) throw Error(o(308));
      xn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else xn = xn.next = e;
    return a;
  }
  var Y1 = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(a, r) {
        t.push(r);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(a) {
        return a();
      });
    };
  }, G1 = i.unstable_scheduleCallback, X1 = i.unstable_NormalPriority, $t = {
    $$typeof: W,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function tu() {
    return {
      controller: new Y1(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function os(t) {
    t.refCount--, t.refCount === 0 && G1(X1, function() {
      t.controller.abort();
    });
  }
  var us = null, eu = 0, aa = 0, sa = null;
  function K1(t, e) {
    if (us === null) {
      var a = us = [];
      eu = 0, aa = ic(), sa = {
        status: "pending",
        value: void 0,
        then: function(r) {
          a.push(r);
        }
      };
    }
    return eu++, e.then(Md, Md), e;
  }
  function Md() {
    if (--eu === 0 && us !== null) {
      sa !== null && (sa.status = "fulfilled");
      var t = us;
      us = null, aa = 0, sa = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Q1(t, e) {
    var a = [], r = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        a.push(u);
      }
    };
    return t.then(
      function() {
        r.status = "fulfilled", r.value = e;
        for (var u = 0; u < a.length; u++) (0, a[u])(e);
      },
      function(u) {
        for (r.status = "rejected", r.reason = u, u = 0; u < a.length; u++)
          (0, a[u])(void 0);
      }
    ), r;
  }
  var Rd = L.S;
  L.S = function(t, e) {
    typeof e == "object" && e !== null && typeof e.then == "function" && K1(t, e), Rd !== null && Rd(t, e);
  };
  var wi = K(null);
  function nu() {
    var t = wi.current;
    return t !== null ? t : Ut.pooledCache;
  }
  function Lr(t, e) {
    e === null ? F(wi, wi.current) : F(wi, e.pool);
  }
  function Od() {
    var t = nu();
    return t === null ? null : { parent: $t._currentValue, pool: t };
  }
  var cs = Error(o(460)), Cd = Error(o(474)), kr = Error(o(542)), iu = { then: function() {
  } };
  function Dd(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Hr() {
  }
  function Nd(t, e, a) {
    switch (a = t[a], a === void 0 ? t.push(e) : a !== e && (e.then(Hr, Hr), e = a), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, _d(t), t;
      default:
        if (typeof e.status == "string") e.then(Hr, Hr);
        else {
          if (t = Ut, t !== null && 100 < t.shellSuspendCounter)
            throw Error(o(482));
          t = e, t.status = "pending", t.then(
            function(r) {
              if (e.status === "pending") {
                var u = e;
                u.status = "fulfilled", u.value = r;
              }
            },
            function(r) {
              if (e.status === "pending") {
                var u = e;
                u.status = "rejected", u.reason = r;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, _d(t), t;
        }
        throw fs = e, cs;
    }
  }
  var fs = null;
  function jd() {
    if (fs === null) throw Error(o(459));
    var t = fs;
    return fs = null, t;
  }
  function _d(t) {
    if (t === cs || t === kr)
      throw Error(o(483));
  }
  var Bn = !1;
  function au(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function su(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Ln(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function kn(t, e, a) {
    var r = t.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (Rt & 2) !== 0) {
      var u = r.pending;
      return u === null ? e.next = e : (e.next = u.next, u.next = e), r.pending = e, e = jr(t), bd(t, null, a), e;
    }
    return Nr(t, r, e, a), jr(t);
  }
  function ms(t, e, a) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194048) !== 0)) {
      var r = e.lanes;
      r &= t.pendingLanes, a |= r, e.lanes = a, Mm(t, a);
    }
  }
  function ru(t, e) {
    var a = t.updateQueue, r = t.alternate;
    if (r !== null && (r = r.updateQueue, a === r)) {
      var u = null, c = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var y = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          c === null ? u = c = y : c = c.next = y, a = a.next;
        } while (a !== null);
        c === null ? u = c = e : c = c.next = e;
      } else u = c = e;
      a = {
        baseState: r.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: c,
        shared: r.shared,
        callbacks: r.callbacks
      }, t.updateQueue = a;
      return;
    }
    t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = e : t.next = e, a.lastBaseUpdate = e;
  }
  var lu = !1;
  function ds() {
    if (lu) {
      var t = sa;
      if (t !== null) throw t;
    }
  }
  function hs(t, e, a, r) {
    lu = !1;
    var u = t.updateQueue;
    Bn = !1;
    var c = u.firstBaseUpdate, y = u.lastBaseUpdate, v = u.shared.pending;
    if (v !== null) {
      u.shared.pending = null;
      var S = v, D = S.next;
      S.next = null, y === null ? c = D : y.next = D, y = S;
      var k = t.alternate;
      k !== null && (k = k.updateQueue, v = k.lastBaseUpdate, v !== y && (v === null ? k.firstBaseUpdate = D : v.next = D, k.lastBaseUpdate = S));
    }
    if (c !== null) {
      var P = u.baseState;
      y = 0, k = D = S = null, v = c;
      do {
        var j = v.lane & -536870913, _ = j !== v.lane;
        if (_ ? (Tt & j) === j : (r & j) === j) {
          j !== 0 && j === aa && (lu = !0), k !== null && (k = k.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          t: {
            var ut = t, st = v;
            j = e;
            var _t = a;
            switch (st.tag) {
              case 1:
                if (ut = st.payload, typeof ut == "function") {
                  P = ut.call(_t, P, j);
                  break t;
                }
                P = ut;
                break t;
              case 3:
                ut.flags = ut.flags & -65537 | 128;
              case 0:
                if (ut = st.payload, j = typeof ut == "function" ? ut.call(_t, P, j) : ut, j == null) break t;
                P = b({}, P, j);
                break t;
              case 2:
                Bn = !0;
            }
          }
          j = v.callback, j !== null && (t.flags |= 64, _ && (t.flags |= 8192), _ = u.callbacks, _ === null ? u.callbacks = [j] : _.push(j));
        } else
          _ = {
            lane: j,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, k === null ? (D = k = _, S = P) : k = k.next = _, y |= j;
        if (v = v.next, v === null) {
          if (v = u.shared.pending, v === null)
            break;
          _ = v, v = _.next, _.next = null, u.lastBaseUpdate = _, u.shared.pending = null;
        }
      } while (!0);
      k === null && (S = P), u.baseState = S, u.firstBaseUpdate = D, u.lastBaseUpdate = k, c === null && (u.shared.lanes = 0), Qn |= y, t.lanes = y, t.memoizedState = P;
    }
  }
  function zd(t, e) {
    if (typeof t != "function")
      throw Error(o(191, t));
    t.call(e);
  }
  function Ud(t, e) {
    var a = t.callbacks;
    if (a !== null)
      for (t.callbacks = null, t = 0; t < a.length; t++)
        zd(a[t], e);
  }
  var ra = K(null), qr = K(0);
  function Vd(t, e) {
    t = On, F(qr, t), F(ra, e), On = t | e.baseLanes;
  }
  function ou() {
    F(qr, On), F(ra, ra.current);
  }
  function uu() {
    On = qr.current, J(ra), J(qr);
  }
  var Hn = 0, yt = null, Nt = null, Ft = null, Pr = !1, la = !1, Ai = !1, Yr = 0, ps = 0, oa = null, Z1 = 0;
  function Xt() {
    throw Error(o(321));
  }
  function cu(t, e) {
    if (e === null) return !1;
    for (var a = 0; a < e.length && a < t.length; a++)
      if (!De(t[a], e[a])) return !1;
    return !0;
  }
  function fu(t, e, a, r, u, c) {
    return Hn = c, yt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, L.H = t === null || t.memoizedState === null ? bh : xh, Ai = !1, c = a(r, u), Ai = !1, la && (c = Ld(
      e,
      a,
      r,
      u
    )), Bd(t), c;
  }
  function Bd(t) {
    L.H = Fr;
    var e = Nt !== null && Nt.next !== null;
    if (Hn = 0, Ft = Nt = yt = null, Pr = !1, ps = 0, oa = null, e) throw Error(o(300));
    t === null || ie || (t = t.dependencies, t !== null && Vr(t) && (ie = !0));
  }
  function Ld(t, e, a, r) {
    yt = t;
    var u = 0;
    do {
      if (la && (oa = null), ps = 0, la = !1, 25 <= u) throw Error(o(301));
      if (u += 1, Ft = Nt = null, t.updateQueue != null) {
        var c = t.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      L.H = ex, c = e(a, r);
    } while (la);
    return c;
  }
  function F1() {
    var t = L.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? ys(e) : e, t = t.useState()[0], (Nt !== null ? Nt.memoizedState : null) !== t && (yt.flags |= 1024), e;
  }
  function mu() {
    var t = Yr !== 0;
    return Yr = 0, t;
  }
  function du(t, e, a) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~a;
  }
  function hu(t) {
    if (Pr) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Pr = !1;
    }
    Hn = 0, Ft = Nt = yt = null, la = !1, ps = Yr = 0, oa = null;
  }
  function Te() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ft === null ? yt.memoizedState = Ft = t : Ft = Ft.next = t, Ft;
  }
  function Wt() {
    if (Nt === null) {
      var t = yt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Nt.next;
    var e = Ft === null ? yt.memoizedState : Ft.next;
    if (e !== null)
      Ft = e, Nt = t;
    else {
      if (t === null)
        throw yt.alternate === null ? Error(o(467)) : Error(o(310));
      Nt = t, t = {
        memoizedState: Nt.memoizedState,
        baseState: Nt.baseState,
        baseQueue: Nt.baseQueue,
        queue: Nt.queue,
        next: null
      }, Ft === null ? yt.memoizedState = Ft = t : Ft = Ft.next = t;
    }
    return Ft;
  }
  function pu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ys(t) {
    var e = ps;
    return ps += 1, oa === null && (oa = []), t = Nd(oa, t, e), e = yt, (Ft === null ? e.memoizedState : Ft.next) === null && (e = e.alternate, L.H = e === null || e.memoizedState === null ? bh : xh), t;
  }
  function Gr(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return ys(t);
      if (t.$$typeof === W) return fe(t);
    }
    throw Error(o(438, String(t)));
  }
  function yu(t) {
    var e = null, a = yt.updateQueue;
    if (a !== null && (e = a.memoCache), e == null) {
      var r = yt.alternate;
      r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (e = {
        data: r.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), a === null && (a = pu(), yt.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0)
      for (a = e.data[e.index] = Array(t), r = 0; r < t; r++)
        a[r] = dt;
    return e.index++, a;
  }
  function Tn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Xr(t) {
    var e = Wt();
    return gu(e, Nt, t);
  }
  function gu(t, e, a) {
    var r = t.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = a;
    var u = t.baseQueue, c = r.pending;
    if (c !== null) {
      if (u !== null) {
        var y = u.next;
        u.next = c.next, c.next = y;
      }
      e.baseQueue = u = c, r.pending = null;
    }
    if (c = t.baseState, u === null) t.memoizedState = c;
    else {
      e = u.next;
      var v = y = null, S = null, D = e, k = !1;
      do {
        var P = D.lane & -536870913;
        if (P !== D.lane ? (Tt & P) === P : (Hn & P) === P) {
          var j = D.revertLane;
          if (j === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }), P === aa && (k = !0);
          else if ((Hn & j) === j) {
            D = D.next, j === aa && (k = !0);
            continue;
          } else
            P = {
              lane: 0,
              revertLane: D.revertLane,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }, S === null ? (v = S = P, y = c) : S = S.next = P, yt.lanes |= j, Qn |= j;
          P = D.action, Ai && a(c, P), c = D.hasEagerState ? D.eagerState : a(c, P);
        } else
          j = {
            lane: P,
            revertLane: D.revertLane,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          }, S === null ? (v = S = j, y = c) : S = S.next = j, yt.lanes |= P, Qn |= P;
        D = D.next;
      } while (D !== null && D !== e);
      if (S === null ? y = c : S.next = v, !De(c, t.memoizedState) && (ie = !0, k && (a = sa, a !== null)))
        throw a;
      t.memoizedState = c, t.baseState = y, t.baseQueue = S, r.lastRenderedState = c;
    }
    return u === null && (r.lanes = 0), [t.memoizedState, r.dispatch];
  }
  function vu(t) {
    var e = Wt(), a = e.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = t;
    var r = a.dispatch, u = a.pending, c = e.memoizedState;
    if (u !== null) {
      a.pending = null;
      var y = u = u.next;
      do
        c = t(c, y.action), y = y.next;
      while (y !== u);
      De(c, e.memoizedState) || (ie = !0), e.memoizedState = c, e.baseQueue === null && (e.baseState = c), a.lastRenderedState = c;
    }
    return [c, r];
  }
  function kd(t, e, a) {
    var r = yt, u = Wt(), c = Mt;
    if (c) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = e();
    var y = !De(
      (Nt || u).memoizedState,
      a
    );
    y && (u.memoizedState = a, ie = !0), u = u.queue;
    var v = Pd.bind(null, r, u, t);
    if (gs(2048, 8, v, [t]), u.getSnapshot !== e || y || Ft !== null && Ft.memoizedState.tag & 1) {
      if (r.flags |= 2048, ua(
        9,
        Kr(),
        qd.bind(
          null,
          r,
          u,
          a,
          e
        ),
        null
      ), Ut === null) throw Error(o(349));
      c || (Hn & 124) !== 0 || Hd(r, e, a);
    }
    return a;
  }
  function Hd(t, e, a) {
    t.flags |= 16384, t = { getSnapshot: e, value: a }, e = yt.updateQueue, e === null ? (e = pu(), yt.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t));
  }
  function qd(t, e, a, r) {
    e.value = a, e.getSnapshot = r, Yd(e) && Gd(t);
  }
  function Pd(t, e, a) {
    return a(function() {
      Yd(e) && Gd(t);
    });
  }
  function Yd(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var a = e();
      return !De(t, a);
    } catch {
      return !0;
    }
  }
  function Gd(t) {
    var e = ta(t, 2);
    e !== null && Ve(e, t, 2);
  }
  function bu(t) {
    var e = Te();
    if (typeof t == "function") {
      var a = t;
      if (t = a(), Ai) {
        _n(!0);
        try {
          a();
        } finally {
          _n(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Tn,
      lastRenderedState: t
    }, e;
  }
  function Xd(t, e, a, r) {
    return t.baseState = a, gu(
      t,
      Nt,
      typeof r == "function" ? r : Tn
    );
  }
  function W1(t, e, a, r, u) {
    if (Zr(t)) throw Error(o(485));
    if (t = e.action, t !== null) {
      var c = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(y) {
          c.listeners.push(y);
        }
      };
      L.T !== null ? a(!0) : c.isTransition = !1, r(c), a = e.pending, a === null ? (c.next = e.pending = c, Kd(e, c)) : (c.next = a.next, e.pending = a.next = c);
    }
  }
  function Kd(t, e) {
    var a = e.action, r = e.payload, u = t.state;
    if (e.isTransition) {
      var c = L.T, y = {};
      L.T = y;
      try {
        var v = a(u, r), S = L.S;
        S !== null && S(y, v), Qd(t, e, v);
      } catch (D) {
        xu(t, e, D);
      } finally {
        L.T = c;
      }
    } else
      try {
        c = a(u, r), Qd(t, e, c);
      } catch (D) {
        xu(t, e, D);
      }
  }
  function Qd(t, e, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(r) {
        Zd(t, e, r);
      },
      function(r) {
        return xu(t, e, r);
      }
    ) : Zd(t, e, a);
  }
  function Zd(t, e, a) {
    e.status = "fulfilled", e.value = a, Fd(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, Kd(t, a)));
  }
  function xu(t, e, a) {
    var r = t.pending;
    if (t.pending = null, r !== null) {
      r = r.next;
      do
        e.status = "rejected", e.reason = a, Fd(e), e = e.next;
      while (e !== r);
    }
    t.action = null;
  }
  function Fd(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Wd(t, e) {
    return e;
  }
  function Jd(t, e) {
    if (Mt) {
      var a = Ut.formState;
      if (a !== null) {
        t: {
          var r = yt;
          if (Mt) {
            if (qt) {
              e: {
                for (var u = qt, c = rn; u.nodeType !== 8; ) {
                  if (!c) {
                    u = null;
                    break e;
                  }
                  if (u = Je(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break e;
                  }
                }
                c = u.data, u = c === "F!" || c === "F" ? u : null;
              }
              if (u) {
                qt = Je(
                  u.nextSibling
                ), r = u.data === "F!";
                break t;
              }
            }
            xi(r);
          }
          r = !1;
        }
        r && (e = a[0]);
      }
    }
    return a = Te(), a.memoizedState = a.baseState = e, r = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wd,
      lastRenderedState: e
    }, a.queue = r, a = yh.bind(
      null,
      yt,
      r
    ), r.dispatch = a, r = bu(!1), c = Eu.bind(
      null,
      yt,
      !1,
      r.queue
    ), r = Te(), u = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, r.queue = u, a = W1.bind(
      null,
      yt,
      u,
      c,
      a
    ), u.dispatch = a, r.memoizedState = t, [e, a, !1];
  }
  function $d(t) {
    var e = Wt();
    return Id(e, Nt, t);
  }
  function Id(t, e, a) {
    if (e = gu(
      t,
      e,
      Wd
    )[0], t = Xr(Tn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var r = ys(e);
      } catch (y) {
        throw y === cs ? kr : y;
      }
    else r = e;
    e = Wt();
    var u = e.queue, c = u.dispatch;
    return a !== e.memoizedState && (yt.flags |= 2048, ua(
      9,
      Kr(),
      J1.bind(null, u, a),
      null
    )), [r, c, t];
  }
  function J1(t, e) {
    t.action = e;
  }
  function th(t) {
    var e = Wt(), a = Nt;
    if (a !== null)
      return Id(e, a, t);
    Wt(), e = e.memoizedState, a = Wt();
    var r = a.queue.dispatch;
    return a.memoizedState = t, [e, r, !1];
  }
  function ua(t, e, a, r) {
    return t = { tag: t, create: a, deps: r, inst: e, next: null }, e = yt.updateQueue, e === null && (e = pu(), yt.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (r = a.next, a.next = t, t.next = r, e.lastEffect = t), t;
  }
  function Kr() {
    return { destroy: void 0, resource: void 0 };
  }
  function eh() {
    return Wt().memoizedState;
  }
  function Qr(t, e, a, r) {
    var u = Te();
    r = r === void 0 ? null : r, yt.flags |= t, u.memoizedState = ua(
      1 | e,
      Kr(),
      a,
      r
    );
  }
  function gs(t, e, a, r) {
    var u = Wt();
    r = r === void 0 ? null : r;
    var c = u.memoizedState.inst;
    Nt !== null && r !== null && cu(r, Nt.memoizedState.deps) ? u.memoizedState = ua(e, c, a, r) : (yt.flags |= t, u.memoizedState = ua(
      1 | e,
      c,
      a,
      r
    ));
  }
  function nh(t, e) {
    Qr(8390656, 8, t, e);
  }
  function ih(t, e) {
    gs(2048, 8, t, e);
  }
  function ah(t, e) {
    return gs(4, 2, t, e);
  }
  function sh(t, e) {
    return gs(4, 4, t, e);
  }
  function rh(t, e) {
    if (typeof e == "function") {
      t = t();
      var a = e(t);
      return function() {
        typeof a == "function" ? a() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function lh(t, e, a) {
    a = a != null ? a.concat([t]) : null, gs(4, 4, rh.bind(null, e, t), a);
  }
  function Su() {
  }
  function oh(t, e) {
    var a = Wt();
    e = e === void 0 ? null : e;
    var r = a.memoizedState;
    return e !== null && cu(e, r[1]) ? r[0] : (a.memoizedState = [t, e], t);
  }
  function uh(t, e) {
    var a = Wt();
    e = e === void 0 ? null : e;
    var r = a.memoizedState;
    if (e !== null && cu(e, r[1]))
      return r[0];
    if (r = t(), Ai) {
      _n(!0);
      try {
        t();
      } finally {
        _n(!1);
      }
    }
    return a.memoizedState = [r, e], r;
  }
  function Tu(t, e, a) {
    return a === void 0 || (Hn & 1073741824) !== 0 ? t.memoizedState = e : (t.memoizedState = a, t = mp(), yt.lanes |= t, Qn |= t, a);
  }
  function ch(t, e, a, r) {
    return De(a, e) ? a : ra.current !== null ? (t = Tu(t, a, r), De(t, e) || (ie = !0), t) : (Hn & 42) === 0 ? (ie = !0, t.memoizedState = a) : (t = mp(), yt.lanes |= t, Qn |= t, e);
  }
  function fh(t, e, a, r, u) {
    var c = z.p;
    z.p = c !== 0 && 8 > c ? c : 8;
    var y = L.T, v = {};
    L.T = v, Eu(t, !1, e, a);
    try {
      var S = u(), D = L.S;
      if (D !== null && D(v, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var k = Q1(
          S,
          r
        );
        vs(
          t,
          e,
          k,
          Ue(t)
        );
      } else
        vs(
          t,
          e,
          r,
          Ue(t)
        );
    } catch (P) {
      vs(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: P },
        Ue()
      );
    } finally {
      z.p = c, L.T = y;
    }
  }
  function $1() {
  }
  function wu(t, e, a, r) {
    if (t.tag !== 5) throw Error(o(476));
    var u = mh(t).queue;
    fh(
      t,
      u,
      e,
      ft,
      a === null ? $1 : function() {
        return dh(t), a(r);
      }
    );
  }
  function mh(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: ft,
      baseState: ft,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Tn,
        lastRenderedState: ft
      },
      next: null
    };
    var a = {};
    return e.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Tn,
        lastRenderedState: a
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function dh(t) {
    var e = mh(t).next.queue;
    vs(t, e, {}, Ue());
  }
  function Au() {
    return fe(Vs);
  }
  function hh() {
    return Wt().memoizedState;
  }
  function ph() {
    return Wt().memoizedState;
  }
  function I1(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var a = Ue();
          t = Ln(a);
          var r = kn(e, t, a);
          r !== null && (Ve(r, e, a), ms(r, e, a)), e = { cache: tu() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function tx(t, e, a) {
    var r = Ue();
    a = {
      lane: r,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zr(t) ? gh(e, a) : (a = Go(t, e, a, r), a !== null && (Ve(a, t, r), vh(a, e, r)));
  }
  function yh(t, e, a) {
    var r = Ue();
    vs(t, e, a, r);
  }
  function vs(t, e, a, r) {
    var u = {
      lane: r,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Zr(t)) gh(e, u);
    else {
      var c = t.alternate;
      if (t.lanes === 0 && (c === null || c.lanes === 0) && (c = e.lastRenderedReducer, c !== null))
        try {
          var y = e.lastRenderedState, v = c(y, a);
          if (u.hasEagerState = !0, u.eagerState = v, De(v, y))
            return Nr(t, e, u, 0), Ut === null && Dr(), !1;
        } catch {
        } finally {
        }
      if (a = Go(t, e, u, r), a !== null)
        return Ve(a, t, r), vh(a, e, r), !0;
    }
    return !1;
  }
  function Eu(t, e, a, r) {
    if (r = {
      lane: 2,
      revertLane: ic(),
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zr(t)) {
      if (e) throw Error(o(479));
    } else
      e = Go(
        t,
        a,
        r,
        2
      ), e !== null && Ve(e, t, 2);
  }
  function Zr(t) {
    var e = t.alternate;
    return t === yt || e !== null && e === yt;
  }
  function gh(t, e) {
    la = Pr = !0;
    var a = t.pending;
    a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e;
  }
  function vh(t, e, a) {
    if ((a & 4194048) !== 0) {
      var r = e.lanes;
      r &= t.pendingLanes, a |= r, e.lanes = a, Mm(t, a);
    }
  }
  var Fr = {
    readContext: fe,
    use: Gr,
    useCallback: Xt,
    useContext: Xt,
    useEffect: Xt,
    useImperativeHandle: Xt,
    useLayoutEffect: Xt,
    useInsertionEffect: Xt,
    useMemo: Xt,
    useReducer: Xt,
    useRef: Xt,
    useState: Xt,
    useDebugValue: Xt,
    useDeferredValue: Xt,
    useTransition: Xt,
    useSyncExternalStore: Xt,
    useId: Xt,
    useHostTransitionStatus: Xt,
    useFormState: Xt,
    useActionState: Xt,
    useOptimistic: Xt,
    useMemoCache: Xt,
    useCacheRefresh: Xt
  }, bh = {
    readContext: fe,
    use: Gr,
    useCallback: function(t, e) {
      return Te().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: fe,
    useEffect: nh,
    useImperativeHandle: function(t, e, a) {
      a = a != null ? a.concat([t]) : null, Qr(
        4194308,
        4,
        rh.bind(null, e, t),
        a
      );
    },
    useLayoutEffect: function(t, e) {
      return Qr(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Qr(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var a = Te();
      e = e === void 0 ? null : e;
      var r = t();
      if (Ai) {
        _n(!0);
        try {
          t();
        } finally {
          _n(!1);
        }
      }
      return a.memoizedState = [r, e], r;
    },
    useReducer: function(t, e, a) {
      var r = Te();
      if (a !== void 0) {
        var u = a(e);
        if (Ai) {
          _n(!0);
          try {
            a(e);
          } finally {
            _n(!1);
          }
        }
      } else u = e;
      return r.memoizedState = r.baseState = u, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: u
      }, r.queue = t, t = t.dispatch = tx.bind(
        null,
        yt,
        t
      ), [r.memoizedState, t];
    },
    useRef: function(t) {
      var e = Te();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = bu(t);
      var e = t.queue, a = yh.bind(null, yt, e);
      return e.dispatch = a, [t.memoizedState, a];
    },
    useDebugValue: Su,
    useDeferredValue: function(t, e) {
      var a = Te();
      return Tu(a, t, e);
    },
    useTransition: function() {
      var t = bu(!1);
      return t = fh.bind(
        null,
        yt,
        t.queue,
        !0,
        !1
      ), Te().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, a) {
      var r = yt, u = Te();
      if (Mt) {
        if (a === void 0)
          throw Error(o(407));
        a = a();
      } else {
        if (a = e(), Ut === null)
          throw Error(o(349));
        (Tt & 124) !== 0 || Hd(r, e, a);
      }
      u.memoizedState = a;
      var c = { value: a, getSnapshot: e };
      return u.queue = c, nh(Pd.bind(null, r, c, t), [
        t
      ]), r.flags |= 2048, ua(
        9,
        Kr(),
        qd.bind(
          null,
          r,
          c,
          a,
          e
        ),
        null
      ), a;
    },
    useId: function() {
      var t = Te(), e = Ut.identifierPrefix;
      if (Mt) {
        var a = bn, r = vn;
        a = (r & ~(1 << 32 - Ce(r) - 1)).toString(32) + a, e = "«" + e + "R" + a, a = Yr++, 0 < a && (e += "H" + a.toString(32)), e += "»";
      } else
        a = Z1++, e = "«" + e + "r" + a.toString(32) + "»";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Au,
    useFormState: Jd,
    useActionState: Jd,
    useOptimistic: function(t) {
      var e = Te();
      e.memoizedState = e.baseState = t;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = a, e = Eu.bind(
        null,
        yt,
        !0,
        a
      ), a.dispatch = e, [t, e];
    },
    useMemoCache: yu,
    useCacheRefresh: function() {
      return Te().memoizedState = I1.bind(
        null,
        yt
      );
    }
  }, xh = {
    readContext: fe,
    use: Gr,
    useCallback: oh,
    useContext: fe,
    useEffect: ih,
    useImperativeHandle: lh,
    useInsertionEffect: ah,
    useLayoutEffect: sh,
    useMemo: uh,
    useReducer: Xr,
    useRef: eh,
    useState: function() {
      return Xr(Tn);
    },
    useDebugValue: Su,
    useDeferredValue: function(t, e) {
      var a = Wt();
      return ch(
        a,
        Nt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Xr(Tn)[0], e = Wt().memoizedState;
      return [
        typeof t == "boolean" ? t : ys(t),
        e
      ];
    },
    useSyncExternalStore: kd,
    useId: hh,
    useHostTransitionStatus: Au,
    useFormState: $d,
    useActionState: $d,
    useOptimistic: function(t, e) {
      var a = Wt();
      return Xd(a, Nt, t, e);
    },
    useMemoCache: yu,
    useCacheRefresh: ph
  }, ex = {
    readContext: fe,
    use: Gr,
    useCallback: oh,
    useContext: fe,
    useEffect: ih,
    useImperativeHandle: lh,
    useInsertionEffect: ah,
    useLayoutEffect: sh,
    useMemo: uh,
    useReducer: vu,
    useRef: eh,
    useState: function() {
      return vu(Tn);
    },
    useDebugValue: Su,
    useDeferredValue: function(t, e) {
      var a = Wt();
      return Nt === null ? Tu(a, t, e) : ch(
        a,
        Nt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = vu(Tn)[0], e = Wt().memoizedState;
      return [
        typeof t == "boolean" ? t : ys(t),
        e
      ];
    },
    useSyncExternalStore: kd,
    useId: hh,
    useHostTransitionStatus: Au,
    useFormState: th,
    useActionState: th,
    useOptimistic: function(t, e) {
      var a = Wt();
      return Nt !== null ? Xd(a, Nt, t, e) : (a.baseState = t, [t, a.queue.dispatch]);
    },
    useMemoCache: yu,
    useCacheRefresh: ph
  }, ca = null, bs = 0;
  function Wr(t) {
    var e = bs;
    return bs += 1, ca === null && (ca = []), Nd(ca, t, e);
  }
  function xs(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Jr(t, e) {
    throw e.$$typeof === x ? Error(o(525)) : (t = Object.prototype.toString.call(e), Error(
      o(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Sh(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Th(t) {
    function e(M, T) {
      if (t) {
        var O = M.deletions;
        O === null ? (M.deletions = [T], M.flags |= 16) : O.push(T);
      }
    }
    function a(M, T) {
      if (!t) return null;
      for (; T !== null; )
        e(M, T), T = T.sibling;
      return null;
    }
    function r(M) {
      for (var T = /* @__PURE__ */ new Map(); M !== null; )
        M.key !== null ? T.set(M.key, M) : T.set(M.index, M), M = M.sibling;
      return T;
    }
    function u(M, T) {
      return M = gn(M, T), M.index = 0, M.sibling = null, M;
    }
    function c(M, T, O) {
      return M.index = O, t ? (O = M.alternate, O !== null ? (O = O.index, O < T ? (M.flags |= 67108866, T) : O) : (M.flags |= 67108866, T)) : (M.flags |= 1048576, T);
    }
    function y(M) {
      return t && M.alternate === null && (M.flags |= 67108866), M;
    }
    function v(M, T, O, q) {
      return T === null || T.tag !== 6 ? (T = Ko(O, M.mode, q), T.return = M, T) : (T = u(T, O), T.return = M, T);
    }
    function S(M, T, O, q) {
      var tt = O.type;
      return tt === R ? k(
        M,
        T,
        O.props.children,
        q,
        O.key
      ) : T !== null && (T.elementType === tt || typeof tt == "object" && tt !== null && tt.$$typeof === ot && Sh(tt) === T.type) ? (T = u(T, O.props), xs(T, O), T.return = M, T) : (T = _r(
        O.type,
        O.key,
        O.props,
        null,
        M.mode,
        q
      ), xs(T, O), T.return = M, T);
    }
    function D(M, T, O, q) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== O.containerInfo || T.stateNode.implementation !== O.implementation ? (T = Qo(O, M.mode, q), T.return = M, T) : (T = u(T, O.children || []), T.return = M, T);
    }
    function k(M, T, O, q, tt) {
      return T === null || T.tag !== 7 ? (T = yi(
        O,
        M.mode,
        q,
        tt
      ), T.return = M, T) : (T = u(T, O), T.return = M, T);
    }
    function P(M, T, O) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return T = Ko(
          "" + T,
          M.mode,
          O
        ), T.return = M, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case C:
            return O = _r(
              T.type,
              T.key,
              T.props,
              null,
              M.mode,
              O
            ), xs(O, T), O.return = M, O;
          case E:
            return T = Qo(
              T,
              M.mode,
              O
            ), T.return = M, T;
          case ot:
            var q = T._init;
            return T = q(T._payload), P(M, T, O);
        }
        if (X(T) || Dt(T))
          return T = yi(
            T,
            M.mode,
            O,
            null
          ), T.return = M, T;
        if (typeof T.then == "function")
          return P(M, Wr(T), O);
        if (T.$$typeof === W)
          return P(
            M,
            Br(M, T),
            O
          );
        Jr(M, T);
      }
      return null;
    }
    function j(M, T, O, q) {
      var tt = T !== null ? T.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return tt !== null ? null : v(M, T, "" + O, q);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case C:
            return O.key === tt ? S(M, T, O, q) : null;
          case E:
            return O.key === tt ? D(M, T, O, q) : null;
          case ot:
            return tt = O._init, O = tt(O._payload), j(M, T, O, q);
        }
        if (X(O) || Dt(O))
          return tt !== null ? null : k(M, T, O, q, null);
        if (typeof O.then == "function")
          return j(
            M,
            T,
            Wr(O),
            q
          );
        if (O.$$typeof === W)
          return j(
            M,
            T,
            Br(M, O),
            q
          );
        Jr(M, O);
      }
      return null;
    }
    function _(M, T, O, q, tt) {
      if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint")
        return M = M.get(O) || null, v(T, M, "" + q, tt);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case C:
            return M = M.get(
              q.key === null ? O : q.key
            ) || null, S(T, M, q, tt);
          case E:
            return M = M.get(
              q.key === null ? O : q.key
            ) || null, D(T, M, q, tt);
          case ot:
            var vt = q._init;
            return q = vt(q._payload), _(
              M,
              T,
              O,
              q,
              tt
            );
        }
        if (X(q) || Dt(q))
          return M = M.get(O) || null, k(T, M, q, tt, null);
        if (typeof q.then == "function")
          return _(
            M,
            T,
            O,
            Wr(q),
            tt
          );
        if (q.$$typeof === W)
          return _(
            M,
            T,
            O,
            Br(T, q),
            tt
          );
        Jr(T, q);
      }
      return null;
    }
    function ut(M, T, O, q) {
      for (var tt = null, vt = null, it = T, lt = T = 0, se = null; it !== null && lt < O.length; lt++) {
        it.index > lt ? (se = it, it = null) : se = it.sibling;
        var At = j(
          M,
          it,
          O[lt],
          q
        );
        if (At === null) {
          it === null && (it = se);
          break;
        }
        t && it && At.alternate === null && e(M, it), T = c(At, T, lt), vt === null ? tt = At : vt.sibling = At, vt = At, it = se;
      }
      if (lt === O.length)
        return a(M, it), Mt && vi(M, lt), tt;
      if (it === null) {
        for (; lt < O.length; lt++)
          it = P(M, O[lt], q), it !== null && (T = c(
            it,
            T,
            lt
          ), vt === null ? tt = it : vt.sibling = it, vt = it);
        return Mt && vi(M, lt), tt;
      }
      for (it = r(it); lt < O.length; lt++)
        se = _(
          it,
          M,
          lt,
          O[lt],
          q
        ), se !== null && (t && se.alternate !== null && it.delete(
          se.key === null ? lt : se.key
        ), T = c(
          se,
          T,
          lt
        ), vt === null ? tt = se : vt.sibling = se, vt = se);
      return t && it.forEach(function(ni) {
        return e(M, ni);
      }), Mt && vi(M, lt), tt;
    }
    function st(M, T, O, q) {
      if (O == null) throw Error(o(151));
      for (var tt = null, vt = null, it = T, lt = T = 0, se = null, At = O.next(); it !== null && !At.done; lt++, At = O.next()) {
        it.index > lt ? (se = it, it = null) : se = it.sibling;
        var ni = j(M, it, At.value, q);
        if (ni === null) {
          it === null && (it = se);
          break;
        }
        t && it && ni.alternate === null && e(M, it), T = c(ni, T, lt), vt === null ? tt = ni : vt.sibling = ni, vt = ni, it = se;
      }
      if (At.done)
        return a(M, it), Mt && vi(M, lt), tt;
      if (it === null) {
        for (; !At.done; lt++, At = O.next())
          At = P(M, At.value, q), At !== null && (T = c(At, T, lt), vt === null ? tt = At : vt.sibling = At, vt = At);
        return Mt && vi(M, lt), tt;
      }
      for (it = r(it); !At.done; lt++, At = O.next())
        At = _(it, M, lt, At.value, q), At !== null && (t && At.alternate !== null && it.delete(At.key === null ? lt : At.key), T = c(At, T, lt), vt === null ? tt = At : vt.sibling = At, vt = At);
      return t && it.forEach(function(nS) {
        return e(M, nS);
      }), Mt && vi(M, lt), tt;
    }
    function _t(M, T, O, q) {
      if (typeof O == "object" && O !== null && O.type === R && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case C:
            t: {
              for (var tt = O.key; T !== null; ) {
                if (T.key === tt) {
                  if (tt = O.type, tt === R) {
                    if (T.tag === 7) {
                      a(
                        M,
                        T.sibling
                      ), q = u(
                        T,
                        O.props.children
                      ), q.return = M, M = q;
                      break t;
                    }
                  } else if (T.elementType === tt || typeof tt == "object" && tt !== null && tt.$$typeof === ot && Sh(tt) === T.type) {
                    a(
                      M,
                      T.sibling
                    ), q = u(T, O.props), xs(q, O), q.return = M, M = q;
                    break t;
                  }
                  a(M, T);
                  break;
                } else e(M, T);
                T = T.sibling;
              }
              O.type === R ? (q = yi(
                O.props.children,
                M.mode,
                q,
                O.key
              ), q.return = M, M = q) : (q = _r(
                O.type,
                O.key,
                O.props,
                null,
                M.mode,
                q
              ), xs(q, O), q.return = M, M = q);
            }
            return y(M);
          case E:
            t: {
              for (tt = O.key; T !== null; ) {
                if (T.key === tt)
                  if (T.tag === 4 && T.stateNode.containerInfo === O.containerInfo && T.stateNode.implementation === O.implementation) {
                    a(
                      M,
                      T.sibling
                    ), q = u(T, O.children || []), q.return = M, M = q;
                    break t;
                  } else {
                    a(M, T);
                    break;
                  }
                else e(M, T);
                T = T.sibling;
              }
              q = Qo(O, M.mode, q), q.return = M, M = q;
            }
            return y(M);
          case ot:
            return tt = O._init, O = tt(O._payload), _t(
              M,
              T,
              O,
              q
            );
        }
        if (X(O))
          return ut(
            M,
            T,
            O,
            q
          );
        if (Dt(O)) {
          if (tt = Dt(O), typeof tt != "function") throw Error(o(150));
          return O = tt.call(O), st(
            M,
            T,
            O,
            q
          );
        }
        if (typeof O.then == "function")
          return _t(
            M,
            T,
            Wr(O),
            q
          );
        if (O.$$typeof === W)
          return _t(
            M,
            T,
            Br(M, O),
            q
          );
        Jr(M, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O, T !== null && T.tag === 6 ? (a(M, T.sibling), q = u(T, O), q.return = M, M = q) : (a(M, T), q = Ko(O, M.mode, q), q.return = M, M = q), y(M)) : a(M, T);
    }
    return function(M, T, O, q) {
      try {
        bs = 0;
        var tt = _t(
          M,
          T,
          O,
          q
        );
        return ca = null, tt;
      } catch (it) {
        if (it === cs || it === kr) throw it;
        var vt = Ne(29, it, null, M.mode);
        return vt.lanes = q, vt.return = M, vt;
      } finally {
      }
    };
  }
  var fa = Th(!0), wh = Th(!1), Ye = K(null), ln = null;
  function qn(t) {
    var e = t.alternate;
    F(It, It.current & 1), F(Ye, t), ln === null && (e === null || ra.current !== null || e.memoizedState !== null) && (ln = t);
  }
  function Ah(t) {
    if (t.tag === 22) {
      if (F(It, It.current), F(Ye, t), ln === null) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (ln = t);
      }
    } else Pn();
  }
  function Pn() {
    F(It, It.current), F(Ye, Ye.current);
  }
  function wn(t) {
    J(Ye), ln === t && (ln = null), J(It);
  }
  var It = K(0);
  function $r(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var a = e.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || pc(a)))
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  function Mu(t, e, a, r) {
    e = t.memoizedState, a = a(r, e), a = a == null ? e : b({}, e, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a);
  }
  var Ru = {
    enqueueSetState: function(t, e, a) {
      t = t._reactInternals;
      var r = Ue(), u = Ln(r);
      u.payload = e, a != null && (u.callback = a), e = kn(t, u, r), e !== null && (Ve(e, t, r), ms(e, t, r));
    },
    enqueueReplaceState: function(t, e, a) {
      t = t._reactInternals;
      var r = Ue(), u = Ln(r);
      u.tag = 1, u.payload = e, a != null && (u.callback = a), e = kn(t, u, r), e !== null && (Ve(e, t, r), ms(e, t, r));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var a = Ue(), r = Ln(a);
      r.tag = 2, e != null && (r.callback = e), e = kn(t, r, a), e !== null && (Ve(e, t, a), ms(e, t, a));
    }
  };
  function Eh(t, e, a, r, u, c, y) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, c, y) : e.prototype && e.prototype.isPureReactComponent ? !ns(a, r) || !ns(u, c) : !0;
  }
  function Mh(t, e, a, r) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, r), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, r), e.state !== t && Ru.enqueueReplaceState(e, e.state, null);
  }
  function Ei(t, e) {
    var a = e;
    if ("ref" in e) {
      a = {};
      for (var r in e)
        r !== "ref" && (a[r] = e[r]);
    }
    if (t = t.defaultProps) {
      a === e && (a = b({}, a));
      for (var u in t)
        a[u] === void 0 && (a[u] = t[u]);
    }
    return a;
  }
  var Ir = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof n == "object" && typeof n.emit == "function") {
      n.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function Rh(t) {
    Ir(t);
  }
  function Oh(t) {
    console.error(t);
  }
  function Ch(t) {
    Ir(t);
  }
  function tl(t, e) {
    try {
      var a = t.onUncaughtError;
      a(e.value, { componentStack: e.stack });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function Dh(t, e, a) {
    try {
      var r = t.onCaughtError;
      r(a.value, {
        componentStack: a.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function Ou(t, e, a) {
    return a = Ln(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      tl(t, e);
    }, a;
  }
  function Nh(t) {
    return t = Ln(t), t.tag = 3, t;
  }
  function jh(t, e, a, r) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      t.payload = function() {
        return u(c);
      }, t.callback = function() {
        Dh(e, a, r);
      };
    }
    var y = a.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (t.callback = function() {
      Dh(e, a, r), typeof u != "function" && (Zn === null ? Zn = /* @__PURE__ */ new Set([this]) : Zn.add(this));
      var v = r.stack;
      this.componentDidCatch(r.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function nx(t, e, a, r, u) {
    if (a.flags |= 32768, r !== null && typeof r == "object" && typeof r.then == "function") {
      if (e = a.alternate, e !== null && ls(
        e,
        a,
        u,
        !0
      ), a = Ye.current, a !== null) {
        switch (a.tag) {
          case 13:
            return ln === null ? $u() : a.alternate === null && Pt === 0 && (Pt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = u, r === iu ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = /* @__PURE__ */ new Set([r]) : e.add(r), tc(t, r, u)), !1;
          case 22:
            return a.flags |= 65536, r === iu ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([r])
            }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = /* @__PURE__ */ new Set([r]) : a.add(r)), tc(t, r, u)), !1;
        }
        throw Error(o(435, a.tag));
      }
      return tc(t, r, u), $u(), !1;
    }
    if (Mt)
      return e = Ye.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = u, r !== Wo && (t = Error(o(422), { cause: r }), rs(ke(t, a)))) : (r !== Wo && (e = Error(o(423), {
        cause: r
      }), rs(
        ke(e, a)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, r = ke(r, a), u = Ou(
        t.stateNode,
        r,
        u
      ), ru(t, u), Pt !== 4 && (Pt = 2)), !1;
    var c = Error(o(520), { cause: r });
    if (c = ke(c, a), Rs === null ? Rs = [c] : Rs.push(c), Pt !== 4 && (Pt = 2), e === null) return !0;
    r = ke(r, a), a = e;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, t = u & -u, a.lanes |= t, t = Ou(a.stateNode, r, t), ru(a, t), !1;
        case 1:
          if (e = a.type, c = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (Zn === null || !Zn.has(c))))
            return a.flags |= 65536, u &= -u, a.lanes |= u, u = Nh(u), jh(
              u,
              t,
              a,
              r
            ), ru(a, u), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var _h = Error(o(461)), ie = !1;
  function re(t, e, a, r) {
    e.child = t === null ? wh(e, null, a, r) : fa(
      e,
      t.child,
      a,
      r
    );
  }
  function zh(t, e, a, r, u) {
    a = a.render;
    var c = e.ref;
    if ("ref" in r) {
      var y = {};
      for (var v in r)
        v !== "ref" && (y[v] = r[v]);
    } else y = r;
    return Ti(e), r = fu(
      t,
      e,
      a,
      y,
      c,
      u
    ), v = mu(), t !== null && !ie ? (du(t, e, u), An(t, e, u)) : (Mt && v && Zo(e), e.flags |= 1, re(t, e, r, u), e.child);
  }
  function Uh(t, e, a, r, u) {
    if (t === null) {
      var c = a.type;
      return typeof c == "function" && !Xo(c) && c.defaultProps === void 0 && a.compare === null ? (e.tag = 15, e.type = c, Vh(
        t,
        e,
        c,
        r,
        u
      )) : (t = _r(
        a.type,
        null,
        r,
        e,
        e.mode,
        u
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (c = t.child, !Vu(t, u)) {
      var y = c.memoizedProps;
      if (a = a.compare, a = a !== null ? a : ns, a(y, r) && t.ref === e.ref)
        return An(t, e, u);
    }
    return e.flags |= 1, t = gn(c, r), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Vh(t, e, a, r, u) {
    if (t !== null) {
      var c = t.memoizedProps;
      if (ns(c, r) && t.ref === e.ref)
        if (ie = !1, e.pendingProps = r = c, Vu(t, u))
          (t.flags & 131072) !== 0 && (ie = !0);
        else
          return e.lanes = t.lanes, An(t, e, u);
    }
    return Cu(
      t,
      e,
      a,
      r,
      u
    );
  }
  function Bh(t, e, a) {
    var r = e.pendingProps, u = r.children, c = t !== null ? t.memoizedState : null;
    if (r.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (r = c !== null ? c.baseLanes | a : a, t !== null) {
          for (u = e.child = t.child, c = 0; u !== null; )
            c = c | u.lanes | u.childLanes, u = u.sibling;
          e.childLanes = c & ~r;
        } else e.childLanes = 0, e.child = null;
        return Lh(
          t,
          e,
          r,
          a
        );
      }
      if ((a & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Lr(
          e,
          c !== null ? c.cachePool : null
        ), c !== null ? Vd(e, c) : ou(), Ah(e);
      else
        return e.lanes = e.childLanes = 536870912, Lh(
          t,
          e,
          c !== null ? c.baseLanes | a : a,
          a
        );
    } else
      c !== null ? (Lr(e, c.cachePool), Vd(e, c), Pn(), e.memoizedState = null) : (t !== null && Lr(e, null), ou(), Pn());
    return re(t, e, u, a), e.child;
  }
  function Lh(t, e, a, r) {
    var u = nu();
    return u = u === null ? null : { parent: $t._currentValue, pool: u }, e.memoizedState = {
      baseLanes: a,
      cachePool: u
    }, t !== null && Lr(e, null), ou(), Ah(e), t !== null && ls(t, e, r, !0), null;
  }
  function el(t, e) {
    var a = e.ref;
    if (a === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(o(284));
      (t === null || t.ref !== a) && (e.flags |= 4194816);
    }
  }
  function Cu(t, e, a, r, u) {
    return Ti(e), a = fu(
      t,
      e,
      a,
      r,
      void 0,
      u
    ), r = mu(), t !== null && !ie ? (du(t, e, u), An(t, e, u)) : (Mt && r && Zo(e), e.flags |= 1, re(t, e, a, u), e.child);
  }
  function kh(t, e, a, r, u, c) {
    return Ti(e), e.updateQueue = null, a = Ld(
      e,
      r,
      a,
      u
    ), Bd(t), r = mu(), t !== null && !ie ? (du(t, e, c), An(t, e, c)) : (Mt && r && Zo(e), e.flags |= 1, re(t, e, a, c), e.child);
  }
  function Hh(t, e, a, r, u) {
    if (Ti(e), e.stateNode === null) {
      var c = ea, y = a.contextType;
      typeof y == "object" && y !== null && (c = fe(y)), c = new a(r, c), e.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Ru, e.stateNode = c, c._reactInternals = e, c = e.stateNode, c.props = r, c.state = e.memoizedState, c.refs = {}, au(e), y = a.contextType, c.context = typeof y == "object" && y !== null ? fe(y) : ea, c.state = e.memoizedState, y = a.getDerivedStateFromProps, typeof y == "function" && (Mu(
        e,
        a,
        y,
        r
      ), c.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (y = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), y !== c.state && Ru.enqueueReplaceState(c, c.state, null), hs(e, r, c, u), ds(), c.state = e.memoizedState), typeof c.componentDidMount == "function" && (e.flags |= 4194308), r = !0;
    } else if (t === null) {
      c = e.stateNode;
      var v = e.memoizedProps, S = Ei(a, v);
      c.props = S;
      var D = c.context, k = a.contextType;
      y = ea, typeof k == "object" && k !== null && (y = fe(k));
      var P = a.getDerivedStateFromProps;
      k = typeof P == "function" || typeof c.getSnapshotBeforeUpdate == "function", v = e.pendingProps !== v, k || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (v || D !== y) && Mh(
        e,
        c,
        r,
        y
      ), Bn = !1;
      var j = e.memoizedState;
      c.state = j, hs(e, r, c, u), ds(), D = e.memoizedState, v || j !== D || Bn ? (typeof P == "function" && (Mu(
        e,
        a,
        P,
        r
      ), D = e.memoizedState), (S = Bn || Eh(
        e,
        a,
        S,
        r,
        j,
        D,
        y
      )) ? (k || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = r, e.memoizedState = D), c.props = r, c.state = D, c.context = y, r = S) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308), r = !1);
    } else {
      c = e.stateNode, su(t, e), y = e.memoizedProps, k = Ei(a, y), c.props = k, P = e.pendingProps, j = c.context, D = a.contextType, S = ea, typeof D == "object" && D !== null && (S = fe(D)), v = a.getDerivedStateFromProps, (D = typeof v == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (y !== P || j !== S) && Mh(
        e,
        c,
        r,
        S
      ), Bn = !1, j = e.memoizedState, c.state = j, hs(e, r, c, u), ds();
      var _ = e.memoizedState;
      y !== P || j !== _ || Bn || t !== null && t.dependencies !== null && Vr(t.dependencies) ? (typeof v == "function" && (Mu(
        e,
        a,
        v,
        r
      ), _ = e.memoizedState), (k = Bn || Eh(
        e,
        a,
        k,
        r,
        j,
        _,
        S
      ) || t !== null && t.dependencies !== null && Vr(t.dependencies)) ? (D || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(r, _, S), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        r,
        _,
        S
      )), typeof c.componentDidUpdate == "function" && (e.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || y === t.memoizedProps && j === t.memoizedState || (e.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || y === t.memoizedProps && j === t.memoizedState || (e.flags |= 1024), e.memoizedProps = r, e.memoizedState = _), c.props = r, c.state = _, c.context = S, r = k) : (typeof c.componentDidUpdate != "function" || y === t.memoizedProps && j === t.memoizedState || (e.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || y === t.memoizedProps && j === t.memoizedState || (e.flags |= 1024), r = !1);
    }
    return c = r, el(t, e), r = (e.flags & 128) !== 0, c || r ? (c = e.stateNode, a = r && typeof a.getDerivedStateFromError != "function" ? null : c.render(), e.flags |= 1, t !== null && r ? (e.child = fa(
      e,
      t.child,
      null,
      u
    ), e.child = fa(
      e,
      null,
      a,
      u
    )) : re(t, e, a, u), e.memoizedState = c.state, t = e.child) : t = An(
      t,
      e,
      u
    ), t;
  }
  function qh(t, e, a, r) {
    return ss(), e.flags |= 256, re(t, e, a, r), e.child;
  }
  var Du = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Nu(t) {
    return { baseLanes: t, cachePool: Od() };
  }
  function ju(t, e, a) {
    return t = t !== null ? t.childLanes & ~a : 0, e && (t |= Ge), t;
  }
  function Ph(t, e, a) {
    var r = e.pendingProps, u = !1, c = (e.flags & 128) !== 0, y;
    if ((y = c) || (y = t !== null && t.memoizedState === null ? !1 : (It.current & 2) !== 0), y && (u = !0, e.flags &= -129), y = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Mt) {
        if (u ? qn(e) : Pn(), Mt) {
          var v = qt, S;
          if (S = v) {
            t: {
              for (S = v, v = rn; S.nodeType !== 8; ) {
                if (!v) {
                  v = null;
                  break t;
                }
                if (S = Je(
                  S.nextSibling
                ), S === null) {
                  v = null;
                  break t;
                }
              }
              v = S;
            }
            v !== null ? (e.memoizedState = {
              dehydrated: v,
              treeContext: gi !== null ? { id: vn, overflow: bn } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, S = Ne(
              18,
              null,
              null,
              0
            ), S.stateNode = v, S.return = e, e.child = S, ge = e, qt = null, S = !0) : S = !1;
          }
          S || xi(e);
        }
        if (v = e.memoizedState, v !== null && (v = v.dehydrated, v !== null))
          return pc(v) ? e.lanes = 32 : e.lanes = 536870912, null;
        wn(e);
      }
      return v = r.children, r = r.fallback, u ? (Pn(), u = e.mode, v = nl(
        { mode: "hidden", children: v },
        u
      ), r = yi(
        r,
        u,
        a,
        null
      ), v.return = e, r.return = e, v.sibling = r, e.child = v, u = e.child, u.memoizedState = Nu(a), u.childLanes = ju(
        t,
        y,
        a
      ), e.memoizedState = Du, r) : (qn(e), _u(e, v));
    }
    if (S = t.memoizedState, S !== null && (v = S.dehydrated, v !== null)) {
      if (c)
        e.flags & 256 ? (qn(e), e.flags &= -257, e = zu(
          t,
          e,
          a
        )) : e.memoizedState !== null ? (Pn(), e.child = t.child, e.flags |= 128, e = null) : (Pn(), u = r.fallback, v = e.mode, r = nl(
          { mode: "visible", children: r.children },
          v
        ), u = yi(
          u,
          v,
          a,
          null
        ), u.flags |= 2, r.return = e, u.return = e, r.sibling = u, e.child = r, fa(
          e,
          t.child,
          null,
          a
        ), r = e.child, r.memoizedState = Nu(a), r.childLanes = ju(
          t,
          y,
          a
        ), e.memoizedState = Du, e = u);
      else if (qn(e), pc(v)) {
        if (y = v.nextSibling && v.nextSibling.dataset, y) var D = y.dgst;
        y = D, r = Error(o(419)), r.stack = "", r.digest = y, rs({ value: r, source: null, stack: null }), e = zu(
          t,
          e,
          a
        );
      } else if (ie || ls(t, e, a, !1), y = (a & t.childLanes) !== 0, ie || y) {
        if (y = Ut, y !== null && (r = a & -a, r = (r & 42) !== 0 ? 1 : yo(r), r = (r & (y.suspendedLanes | a)) !== 0 ? 0 : r, r !== 0 && r !== S.retryLane))
          throw S.retryLane = r, ta(t, r), Ve(y, t, r), _h;
        v.data === "$?" || $u(), e = zu(
          t,
          e,
          a
        );
      } else
        v.data === "$?" ? (e.flags |= 192, e.child = t.child, e = null) : (t = S.treeContext, qt = Je(
          v.nextSibling
        ), ge = e, Mt = !0, bi = null, rn = !1, t !== null && (qe[Pe++] = vn, qe[Pe++] = bn, qe[Pe++] = gi, vn = t.id, bn = t.overflow, gi = e), e = _u(
          e,
          r.children
        ), e.flags |= 4096);
      return e;
    }
    return u ? (Pn(), u = r.fallback, v = e.mode, S = t.child, D = S.sibling, r = gn(S, {
      mode: "hidden",
      children: r.children
    }), r.subtreeFlags = S.subtreeFlags & 65011712, D !== null ? u = gn(D, u) : (u = yi(
      u,
      v,
      a,
      null
    ), u.flags |= 2), u.return = e, r.return = e, r.sibling = u, e.child = r, r = u, u = e.child, v = t.child.memoizedState, v === null ? v = Nu(a) : (S = v.cachePool, S !== null ? (D = $t._currentValue, S = S.parent !== D ? { parent: D, pool: D } : S) : S = Od(), v = {
      baseLanes: v.baseLanes | a,
      cachePool: S
    }), u.memoizedState = v, u.childLanes = ju(
      t,
      y,
      a
    ), e.memoizedState = Du, r) : (qn(e), a = t.child, t = a.sibling, a = gn(a, {
      mode: "visible",
      children: r.children
    }), a.return = e, a.sibling = null, t !== null && (y = e.deletions, y === null ? (e.deletions = [t], e.flags |= 16) : y.push(t)), e.child = a, e.memoizedState = null, a);
  }
  function _u(t, e) {
    return e = nl(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function nl(t, e) {
    return t = Ne(22, t, null, e), t.lanes = 0, t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, t;
  }
  function zu(t, e, a) {
    return fa(e, t.child, null, a), t = _u(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function Yh(t, e, a) {
    t.lanes |= e;
    var r = t.alternate;
    r !== null && (r.lanes |= e), $o(t.return, e, a);
  }
  function Uu(t, e, a, r, u) {
    var c = t.memoizedState;
    c === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: a,
      tailMode: u
    } : (c.isBackwards = e, c.rendering = null, c.renderingStartTime = 0, c.last = r, c.tail = a, c.tailMode = u);
  }
  function Gh(t, e, a) {
    var r = e.pendingProps, u = r.revealOrder, c = r.tail;
    if (re(t, e, r.children, a), r = It.current, (r & 2) !== 0)
      r = r & 1 | 2, e.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && Yh(t, a, e);
          else if (t.tag === 19)
            Yh(t, a, e);
          else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
              break t;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      r &= 1;
    }
    switch (F(It, r), u) {
      case "forwards":
        for (a = e.child, u = null; a !== null; )
          t = a.alternate, t !== null && $r(t) === null && (u = a), a = a.sibling;
        a = u, a === null ? (u = e.child, e.child = null) : (u = a.sibling, a.sibling = null), Uu(
          e,
          !1,
          u,
          a,
          c
        );
        break;
      case "backwards":
        for (a = null, u = e.child, e.child = null; u !== null; ) {
          if (t = u.alternate, t !== null && $r(t) === null) {
            e.child = u;
            break;
          }
          t = u.sibling, u.sibling = a, a = u, u = t;
        }
        Uu(
          e,
          !0,
          a,
          null,
          c
        );
        break;
      case "together":
        Uu(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function An(t, e, a) {
    if (t !== null && (e.dependencies = t.dependencies), Qn |= e.lanes, (a & e.childLanes) === 0)
      if (t !== null) {
        if (ls(
          t,
          e,
          a,
          !1
        ), (a & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(o(153));
    if (e.child !== null) {
      for (t = e.child, a = gn(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null; )
        t = t.sibling, a = a.sibling = gn(t, t.pendingProps), a.return = e;
      a.sibling = null;
    }
    return e.child;
  }
  function Vu(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Vr(t)));
  }
  function ix(t, e, a) {
    switch (e.tag) {
      case 3:
        Et(e, e.stateNode.containerInfo), Vn(e, $t, t.memoizedState.cache), ss();
        break;
      case 27:
      case 5:
        nn(e);
        break;
      case 4:
        Et(e, e.stateNode.containerInfo);
        break;
      case 10:
        Vn(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 13:
        var r = e.memoizedState;
        if (r !== null)
          return r.dehydrated !== null ? (qn(e), e.flags |= 128, null) : (a & e.child.childLanes) !== 0 ? Ph(t, e, a) : (qn(e), t = An(
            t,
            e,
            a
          ), t !== null ? t.sibling : null);
        qn(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (r = (a & e.childLanes) !== 0, r || (ls(
          t,
          e,
          a,
          !1
        ), r = (a & e.childLanes) !== 0), u) {
          if (r)
            return Gh(
              t,
              e,
              a
            );
          e.flags |= 128;
        }
        if (u = e.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), F(It, It.current), r) break;
        return null;
      case 22:
      case 23:
        return e.lanes = 0, Bh(t, e, a);
      case 24:
        Vn(e, $t, t.memoizedState.cache);
    }
    return An(t, e, a);
  }
  function Xh(t, e, a) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        ie = !0;
      else {
        if (!Vu(t, a) && (e.flags & 128) === 0)
          return ie = !1, ix(
            t,
            e,
            a
          );
        ie = (t.flags & 131072) !== 0;
      }
    else
      ie = !1, Mt && (e.flags & 1048576) !== 0 && Sd(e, Ur, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          t = e.pendingProps;
          var r = e.elementType, u = r._init;
          if (r = u(r._payload), e.type = r, typeof r == "function")
            Xo(r) ? (t = Ei(r, t), e.tag = 1, e = Hh(
              null,
              e,
              r,
              t,
              a
            )) : (e.tag = 0, e = Cu(
              null,
              e,
              r,
              t,
              a
            ));
          else {
            if (r != null) {
              if (u = r.$$typeof, u === Z) {
                e.tag = 11, e = zh(
                  null,
                  e,
                  r,
                  t,
                  a
                );
                break t;
              } else if (u === Y) {
                e.tag = 14, e = Uh(
                  null,
                  e,
                  r,
                  t,
                  a
                );
                break t;
              }
            }
            throw e = Vt(r) || r, Error(o(306, e, ""));
          }
        }
        return e;
      case 0:
        return Cu(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 1:
        return r = e.type, u = Ei(
          r,
          e.pendingProps
        ), Hh(
          t,
          e,
          r,
          u,
          a
        );
      case 3:
        t: {
          if (Et(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(o(387));
          r = e.pendingProps;
          var c = e.memoizedState;
          u = c.element, su(t, e), hs(e, r, null, a);
          var y = e.memoizedState;
          if (r = y.cache, Vn(e, $t, r), r !== c.cache && Io(
            e,
            [$t],
            a,
            !0
          ), ds(), r = y.element, c.isDehydrated)
            if (c = {
              element: r,
              isDehydrated: !1,
              cache: y.cache
            }, e.updateQueue.baseState = c, e.memoizedState = c, e.flags & 256) {
              e = qh(
                t,
                e,
                r,
                a
              );
              break t;
            } else if (r !== u) {
              u = ke(
                Error(o(424)),
                e
              ), rs(u), e = qh(
                t,
                e,
                r,
                a
              );
              break t;
            } else {
              switch (t = e.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (qt = Je(t.firstChild), ge = e, Mt = !0, bi = null, rn = !0, a = wh(
                e,
                null,
                r,
                a
              ), e.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (ss(), r === u) {
              e = An(
                t,
                e,
                a
              );
              break t;
            }
            re(
              t,
              e,
              r,
              a
            );
          }
          e = e.child;
        }
        return e;
      case 26:
        return el(t, e), t === null ? (a = Fp(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = a : Mt || (a = e.type, t = e.pendingProps, r = yl(
          $.current
        ).createElement(a), r[ce] = e, r[xe] = t, oe(r, a, t), ne(r), e.stateNode = r) : e.memoizedState = Fp(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return nn(e), t === null && Mt && (r = e.stateNode = Kp(
          e.type,
          e.pendingProps,
          $.current
        ), ge = e, rn = !0, u = qt, Jn(e.type) ? (yc = u, qt = Je(
          r.firstChild
        )) : qt = u), re(
          t,
          e,
          e.pendingProps.children,
          a
        ), el(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Mt && ((u = r = qt) && (r = Nx(
          r,
          e.type,
          e.pendingProps,
          rn
        ), r !== null ? (e.stateNode = r, ge = e, qt = Je(
          r.firstChild
        ), rn = !1, u = !0) : u = !1), u || xi(e)), nn(e), u = e.type, c = e.pendingProps, y = t !== null ? t.memoizedProps : null, r = c.children, mc(u, c) ? r = null : y !== null && mc(u, y) && (e.flags |= 32), e.memoizedState !== null && (u = fu(
          t,
          e,
          F1,
          null,
          null,
          a
        ), Vs._currentValue = u), el(t, e), re(t, e, r, a), e.child;
      case 6:
        return t === null && Mt && ((t = a = qt) && (a = jx(
          a,
          e.pendingProps,
          rn
        ), a !== null ? (e.stateNode = a, ge = e, qt = null, t = !0) : t = !1), t || xi(e)), null;
      case 13:
        return Ph(t, e, a);
      case 4:
        return Et(
          e,
          e.stateNode.containerInfo
        ), r = e.pendingProps, t === null ? e.child = fa(
          e,
          null,
          r,
          a
        ) : re(
          t,
          e,
          r,
          a
        ), e.child;
      case 11:
        return zh(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 7:
        return re(
          t,
          e,
          e.pendingProps,
          a
        ), e.child;
      case 8:
        return re(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 12:
        return re(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 10:
        return r = e.pendingProps, Vn(e, e.type, r.value), re(
          t,
          e,
          r.children,
          a
        ), e.child;
      case 9:
        return u = e.type._context, r = e.pendingProps.children, Ti(e), u = fe(u), r = r(u), e.flags |= 1, re(t, e, r, a), e.child;
      case 14:
        return Uh(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 15:
        return Vh(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 19:
        return Gh(t, e, a);
      case 31:
        return r = e.pendingProps, a = e.mode, r = {
          mode: r.mode,
          children: r.children
        }, t === null ? (a = nl(
          r,
          a
        ), a.ref = e.ref, e.child = a, a.return = e, e = a) : (a = gn(t.child, r), a.ref = e.ref, e.child = a, a.return = e, e = a), e;
      case 22:
        return Bh(t, e, a);
      case 24:
        return Ti(e), r = fe($t), t === null ? (u = nu(), u === null && (u = Ut, c = tu(), u.pooledCache = c, c.refCount++, c !== null && (u.pooledCacheLanes |= a), u = c), e.memoizedState = {
          parent: r,
          cache: u
        }, au(e), Vn(e, $t, u)) : ((t.lanes & a) !== 0 && (su(t, e), hs(e, null, null, a), ds()), u = t.memoizedState, c = e.memoizedState, u.parent !== r ? (u = { parent: r, cache: r }, e.memoizedState = u, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u), Vn(e, $t, r)) : (r = c.cache, Vn(e, $t, r), r !== u.cache && Io(
          e,
          [$t],
          a,
          !0
        ))), re(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(o(156, e.tag));
  }
  function En(t) {
    t.flags |= 4;
  }
  function Kh(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !ty(e)) {
      if (e = Ye.current, e !== null && ((Tt & 4194048) === Tt ? ln !== null : (Tt & 62914560) !== Tt && (Tt & 536870912) === 0 || e !== ln))
        throw fs = iu, Cd;
      t.flags |= 8192;
    }
  }
  function il(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Am() : 536870912, t.lanes |= e, pa |= e);
  }
  function Ss(t, e) {
    if (!Mt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), e = e.sibling;
          a === null ? t.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = t.tail;
          for (var r = null; a !== null; )
            a.alternate !== null && (r = a), a = a.sibling;
          r === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : r.sibling = null;
      }
  }
  function kt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, a = 0, r = 0;
    if (e)
      for (var u = t.child; u !== null; )
        a |= u.lanes | u.childLanes, r |= u.subtreeFlags & 65011712, r |= u.flags & 65011712, u.return = t, u = u.sibling;
    else
      for (u = t.child; u !== null; )
        a |= u.lanes | u.childLanes, r |= u.subtreeFlags, r |= u.flags, u.return = t, u = u.sibling;
    return t.subtreeFlags |= r, t.childLanes = a, e;
  }
  function ax(t, e, a) {
    var r = e.pendingProps;
    switch (Fo(e), e.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return kt(e), null;
      case 1:
        return kt(e), null;
      case 3:
        return a = e.stateNode, r = null, t !== null && (r = t.memoizedState.cache), e.memoizedState.cache !== r && (e.flags |= 2048), Sn($t), pe(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (as(e) ? En(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Ad())), kt(e), null;
      case 26:
        return a = e.memoizedState, t === null ? (En(e), a !== null ? (kt(e), Kh(e, a)) : (kt(e), e.flags &= -16777217)) : a ? a !== t.memoizedState ? (En(e), kt(e), Kh(e, a)) : (kt(e), e.flags &= -16777217) : (t.memoizedProps !== r && En(e), kt(e), e.flags &= -16777217), null;
      case 27:
        an(e), a = $.current;
        var u = e.type;
        if (t !== null && e.stateNode != null)
          t.memoizedProps !== r && En(e);
        else {
          if (!r) {
            if (e.stateNode === null)
              throw Error(o(166));
            return kt(e), null;
          }
          t = at.current, as(e) ? Td(e) : (t = Kp(u, r, a), e.stateNode = t, En(e));
        }
        return kt(e), null;
      case 5:
        if (an(e), a = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== r && En(e);
        else {
          if (!r) {
            if (e.stateNode === null)
              throw Error(o(166));
            return kt(e), null;
          }
          if (t = at.current, as(e))
            Td(e);
          else {
            switch (u = yl(
              $.current
            ), t) {
              case 1:
                t = u.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                t = u.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    t = u.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    t = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    t = u.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                    break;
                  case "select":
                    t = typeof r.is == "string" ? u.createElement("select", { is: r.is }) : u.createElement("select"), r.multiple ? t.multiple = !0 : r.size && (t.size = r.size);
                    break;
                  default:
                    t = typeof r.is == "string" ? u.createElement(a, { is: r.is }) : u.createElement(a);
                }
            }
            t[ce] = e, t[xe] = r;
            t: for (u = e.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6)
                t.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                u.child.return = u, u = u.child;
                continue;
              }
              if (u === e) break t;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === e)
                  break t;
                u = u.return;
              }
              u.sibling.return = u.return, u = u.sibling;
            }
            e.stateNode = t;
            t: switch (oe(t, a, r), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!r.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && En(e);
          }
        }
        return kt(e), e.flags &= -16777217, null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== r && En(e);
        else {
          if (typeof r != "string" && e.stateNode === null)
            throw Error(o(166));
          if (t = $.current, as(e)) {
            if (t = e.stateNode, a = e.memoizedProps, r = null, u = ge, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  r = u.memoizedProps;
              }
            t[ce] = e, t = !!(t.nodeValue === a || r !== null && r.suppressHydrationWarning === !0 || kp(t.nodeValue, a)), t || xi(e);
          } else
            t = yl(t).createTextNode(
              r
            ), t[ce] = e, e.stateNode = t;
        }
        return kt(e), null;
      case 13:
        if (r = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = as(e), r !== null && r.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(o(318));
              if (u = e.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[ce] = e;
            } else
              ss(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            kt(e), u = !1;
          } else
            u = Ad(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return e.flags & 256 ? (wn(e), e) : (wn(e), null);
        }
        if (wn(e), (e.flags & 128) !== 0)
          return e.lanes = a, e;
        if (a = r !== null, t = t !== null && t.memoizedState !== null, a) {
          r = e.child, u = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (u = r.alternate.memoizedState.cachePool.pool);
          var c = null;
          r.memoizedState !== null && r.memoizedState.cachePool !== null && (c = r.memoizedState.cachePool.pool), c !== u && (r.flags |= 2048);
        }
        return a !== t && a && (e.child.flags |= 8192), il(e, e.updateQueue), kt(e), null;
      case 4:
        return pe(), t === null && lc(e.stateNode.containerInfo), kt(e), null;
      case 10:
        return Sn(e.type), kt(e), null;
      case 19:
        if (J(It), u = e.memoizedState, u === null) return kt(e), null;
        if (r = (e.flags & 128) !== 0, c = u.rendering, c === null)
          if (r) Ss(u, !1);
          else {
            if (Pt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (c = $r(t), c !== null) {
                  for (e.flags |= 128, Ss(u, !1), t = c.updateQueue, e.updateQueue = t, il(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null; )
                    xd(a, t), a = a.sibling;
                  return F(
                    It,
                    It.current & 1 | 2
                  ), e.child;
                }
                t = t.sibling;
              }
            u.tail !== null && sn() > rl && (e.flags |= 128, r = !0, Ss(u, !1), e.lanes = 4194304);
          }
        else {
          if (!r)
            if (t = $r(c), t !== null) {
              if (e.flags |= 128, r = !0, t = t.updateQueue, e.updateQueue = t, il(e, t), Ss(u, !0), u.tail === null && u.tailMode === "hidden" && !c.alternate && !Mt)
                return kt(e), null;
            } else
              2 * sn() - u.renderingStartTime > rl && a !== 536870912 && (e.flags |= 128, r = !0, Ss(u, !1), e.lanes = 4194304);
          u.isBackwards ? (c.sibling = e.child, e.child = c) : (t = u.last, t !== null ? t.sibling = c : e.child = c, u.last = c);
        }
        return u.tail !== null ? (e = u.tail, u.rendering = e, u.tail = e.sibling, u.renderingStartTime = sn(), e.sibling = null, t = It.current, F(It, r ? t & 1 | 2 : t & 1), e) : (kt(e), null);
      case 22:
      case 23:
        return wn(e), uu(), r = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== r && (e.flags |= 8192) : r && (e.flags |= 8192), r ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (kt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : kt(e), a = e.updateQueue, a !== null && il(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), r = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), r !== a && (e.flags |= 2048), t !== null && J(wi), null;
      case 24:
        return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Sn($t), kt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, e.tag));
  }
  function sx(t, e) {
    switch (Fo(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Sn($t), pe(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return an(e), null;
      case 13:
        if (wn(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(o(340));
          ss();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return J(It), null;
      case 4:
        return pe(), null;
      case 10:
        return Sn(e.type), null;
      case 22:
      case 23:
        return wn(e), uu(), t !== null && J(wi), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Sn($t), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Qh(t, e) {
    switch (Fo(e), e.tag) {
      case 3:
        Sn($t), pe();
        break;
      case 26:
      case 27:
      case 5:
        an(e);
        break;
      case 4:
        pe();
        break;
      case 13:
        wn(e);
        break;
      case 19:
        J(It);
        break;
      case 10:
        Sn(e.type);
        break;
      case 22:
      case 23:
        wn(e), uu(), t !== null && J(wi);
        break;
      case 24:
        Sn($t);
    }
  }
  function Ts(t, e) {
    try {
      var a = e.updateQueue, r = a !== null ? a.lastEffect : null;
      if (r !== null) {
        var u = r.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            r = void 0;
            var c = a.create, y = a.inst;
            r = c(), y.destroy = r;
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (v) {
      zt(e, e.return, v);
    }
  }
  function Yn(t, e, a) {
    try {
      var r = e.updateQueue, u = r !== null ? r.lastEffect : null;
      if (u !== null) {
        var c = u.next;
        r = c;
        do {
          if ((r.tag & t) === t) {
            var y = r.inst, v = y.destroy;
            if (v !== void 0) {
              y.destroy = void 0, u = e;
              var S = a, D = v;
              try {
                D();
              } catch (k) {
                zt(
                  u,
                  S,
                  k
                );
              }
            }
          }
          r = r.next;
        } while (r !== c);
      }
    } catch (k) {
      zt(e, e.return, k);
    }
  }
  function Zh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var a = t.stateNode;
      try {
        Ud(e, a);
      } catch (r) {
        zt(t, t.return, r);
      }
    }
  }
  function Fh(t, e, a) {
    a.props = Ei(
      t.type,
      t.memoizedProps
    ), a.state = t.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (r) {
      zt(t, e, r);
    }
  }
  function ws(t, e) {
    try {
      var a = t.ref;
      if (a !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var r = t.stateNode;
            break;
          case 30:
            r = t.stateNode;
            break;
          default:
            r = t.stateNode;
        }
        typeof a == "function" ? t.refCleanup = a(r) : a.current = r;
      }
    } catch (u) {
      zt(t, e, u);
    }
  }
  function on(t, e) {
    var a = t.ref, r = t.refCleanup;
    if (a !== null)
      if (typeof r == "function")
        try {
          r();
        } catch (u) {
          zt(t, e, u);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          zt(t, e, u);
        }
      else a.current = null;
  }
  function Wh(t) {
    var e = t.type, a = t.memoizedProps, r = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && r.focus();
          break t;
        case "img":
          a.src ? r.src = a.src : a.srcSet && (r.srcset = a.srcSet);
      }
    } catch (u) {
      zt(t, t.return, u);
    }
  }
  function Bu(t, e, a) {
    try {
      var r = t.stateNode;
      Mx(r, t.type, a, e), r[xe] = e;
    } catch (u) {
      zt(t, t.return, u);
    }
  }
  function Jh(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Jn(t.type) || t.tag === 4;
  }
  function Lu(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Jh(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Jn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function ku(t, e, a) {
    var r = t.tag;
    if (r === 5 || r === 6)
      t = t.stateNode, e ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, e) : (e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, e.appendChild(t), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = pl));
    else if (r !== 4 && (r === 27 && Jn(t.type) && (a = t.stateNode, e = null), t = t.child, t !== null))
      for (ku(t, e, a), t = t.sibling; t !== null; )
        ku(t, e, a), t = t.sibling;
  }
  function al(t, e, a) {
    var r = t.tag;
    if (r === 5 || r === 6)
      t = t.stateNode, e ? a.insertBefore(t, e) : a.appendChild(t);
    else if (r !== 4 && (r === 27 && Jn(t.type) && (a = t.stateNode), t = t.child, t !== null))
      for (al(t, e, a), t = t.sibling; t !== null; )
        al(t, e, a), t = t.sibling;
  }
  function $h(t) {
    var e = t.stateNode, a = t.memoizedProps;
    try {
      for (var r = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      oe(e, r, a), e[ce] = t, e[xe] = a;
    } catch (c) {
      zt(t, t.return, c);
    }
  }
  var Mn = !1, Kt = !1, Hu = !1, Ih = typeof WeakSet == "function" ? WeakSet : Set, ae = null;
  function rx(t, e) {
    if (t = t.containerInfo, cc = Tl, t = cd(t), Lo(t)) {
      if ("selectionStart" in t)
        var a = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          a = (a = t.ownerDocument) && a.defaultView || window;
          var r = a.getSelection && a.getSelection();
          if (r && r.rangeCount !== 0) {
            a = r.anchorNode;
            var u = r.anchorOffset, c = r.focusNode;
            r = r.focusOffset;
            try {
              a.nodeType, c.nodeType;
            } catch {
              a = null;
              break t;
            }
            var y = 0, v = -1, S = -1, D = 0, k = 0, P = t, j = null;
            e: for (; ; ) {
              for (var _; P !== a || u !== 0 && P.nodeType !== 3 || (v = y + u), P !== c || r !== 0 && P.nodeType !== 3 || (S = y + r), P.nodeType === 3 && (y += P.nodeValue.length), (_ = P.firstChild) !== null; )
                j = P, P = _;
              for (; ; ) {
                if (P === t) break e;
                if (j === a && ++D === u && (v = y), j === c && ++k === r && (S = y), (_ = P.nextSibling) !== null) break;
                P = j, j = P.parentNode;
              }
              P = _;
            }
            a = v === -1 || S === -1 ? null : { start: v, end: S };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (fc = { focusedElem: t, selectionRange: a }, Tl = !1, ae = e; ae !== null; )
      if (e = ae, t = e.child, (e.subtreeFlags & 1024) !== 0 && t !== null)
        t.return = e, ae = t;
      else
        for (; ae !== null; ) {
          switch (e = ae, c = e.alternate, t = e.flags, e.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && c !== null) {
                t = void 0, a = e, u = c.memoizedProps, c = c.memoizedState, r = a.stateNode;
                try {
                  var ut = Ei(
                    a.type,
                    u,
                    a.elementType === a.type
                  );
                  t = r.getSnapshotBeforeUpdate(
                    ut,
                    c
                  ), r.__reactInternalSnapshotBeforeUpdate = t;
                } catch (st) {
                  zt(
                    a,
                    a.return,
                    st
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, a = t.nodeType, a === 9)
                  hc(t);
                else if (a === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      hc(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(o(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, ae = t;
            break;
          }
          ae = e.return;
        }
  }
  function tp(t, e, a) {
    var r = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Gn(t, a), r & 4 && Ts(5, a);
        break;
      case 1:
        if (Gn(t, a), r & 4)
          if (t = a.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (y) {
              zt(a, a.return, y);
            }
          else {
            var u = Ei(
              a.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                u,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (y) {
              zt(
                a,
                a.return,
                y
              );
            }
          }
        r & 64 && Zh(a), r & 512 && ws(a, a.return);
        break;
      case 3:
        if (Gn(t, a), r & 64 && (t = a.updateQueue, t !== null)) {
          if (e = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                e = a.child.stateNode;
                break;
              case 1:
                e = a.child.stateNode;
            }
          try {
            Ud(t, e);
          } catch (y) {
            zt(a, a.return, y);
          }
        }
        break;
      case 27:
        e === null && r & 4 && $h(a);
      case 26:
      case 5:
        Gn(t, a), e === null && r & 4 && Wh(a), r & 512 && ws(a, a.return);
        break;
      case 12:
        Gn(t, a);
        break;
      case 13:
        Gn(t, a), r & 4 && ip(t, a), r & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (a = px.bind(
          null,
          a
        ), _x(t, a))));
        break;
      case 22:
        if (r = a.memoizedState !== null || Mn, !r) {
          e = e !== null && e.memoizedState !== null || Kt, u = Mn;
          var c = Kt;
          Mn = r, (Kt = e) && !c ? Xn(
            t,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Gn(t, a), Mn = u, Kt = c;
        }
        break;
      case 30:
        break;
      default:
        Gn(t, a);
    }
  }
  function ep(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, ep(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && bo(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Bt = null, we = !1;
  function Rn(t, e, a) {
    for (a = a.child; a !== null; )
      np(t, e, a), a = a.sibling;
  }
  function np(t, e, a) {
    if (Oe && typeof Oe.onCommitFiberUnmount == "function")
      try {
        Oe.onCommitFiberUnmount(Ga, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        Kt || on(a, e), Rn(
          t,
          e,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Kt || on(a, e);
        var r = Bt, u = we;
        Jn(a.type) && (Bt = a.stateNode, we = !1), Rn(
          t,
          e,
          a
        ), js(a.stateNode), Bt = r, we = u;
        break;
      case 5:
        Kt || on(a, e);
      case 6:
        if (r = Bt, u = we, Bt = null, Rn(
          t,
          e,
          a
        ), Bt = r, we = u, Bt !== null)
          if (we)
            try {
              (Bt.nodeType === 9 ? Bt.body : Bt.nodeName === "HTML" ? Bt.ownerDocument.body : Bt).removeChild(a.stateNode);
            } catch (c) {
              zt(
                a,
                e,
                c
              );
            }
          else
            try {
              Bt.removeChild(a.stateNode);
            } catch (c) {
              zt(
                a,
                e,
                c
              );
            }
        break;
      case 18:
        Bt !== null && (we ? (t = Bt, Gp(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          a.stateNode
        ), Hs(t)) : Gp(Bt, a.stateNode));
        break;
      case 4:
        r = Bt, u = we, Bt = a.stateNode.containerInfo, we = !0, Rn(
          t,
          e,
          a
        ), Bt = r, we = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Kt || Yn(2, a, e), Kt || Yn(4, a, e), Rn(
          t,
          e,
          a
        );
        break;
      case 1:
        Kt || (on(a, e), r = a.stateNode, typeof r.componentWillUnmount == "function" && Fh(
          a,
          e,
          r
        )), Rn(
          t,
          e,
          a
        );
        break;
      case 21:
        Rn(
          t,
          e,
          a
        );
        break;
      case 22:
        Kt = (r = Kt) || a.memoizedState !== null, Rn(
          t,
          e,
          a
        ), Kt = r;
        break;
      default:
        Rn(
          t,
          e,
          a
        );
    }
  }
  function ip(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Hs(t);
      } catch (a) {
        zt(e, e.return, a);
      }
  }
  function lx(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Ih()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Ih()), e;
      default:
        throw Error(o(435, t.tag));
    }
  }
  function qu(t, e) {
    var a = lx(t);
    e.forEach(function(r) {
      var u = yx.bind(null, t, r);
      a.has(r) || (a.add(r), r.then(u, u));
    });
  }
  function je(t, e) {
    var a = e.deletions;
    if (a !== null)
      for (var r = 0; r < a.length; r++) {
        var u = a[r], c = t, y = e, v = y;
        t: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (Jn(v.type)) {
                Bt = v.stateNode, we = !1;
                break t;
              }
              break;
            case 5:
              Bt = v.stateNode, we = !1;
              break t;
            case 3:
            case 4:
              Bt = v.stateNode.containerInfo, we = !0;
              break t;
          }
          v = v.return;
        }
        if (Bt === null) throw Error(o(160));
        np(c, y, u), Bt = null, we = !1, c = u.alternate, c !== null && (c.return = null), u.return = null;
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; )
        ap(e, t), e = e.sibling;
  }
  var We = null;
  function ap(t, e) {
    var a = t.alternate, r = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        je(e, t), _e(t), r & 4 && (Yn(3, t, t.return), Ts(3, t), Yn(5, t, t.return));
        break;
      case 1:
        je(e, t), _e(t), r & 512 && (Kt || a === null || on(a, a.return)), r & 64 && Mn && (t = t.updateQueue, t !== null && (r = t.callbacks, r !== null && (a = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = a === null ? r : a.concat(r))));
        break;
      case 26:
        var u = We;
        if (je(e, t), _e(t), r & 512 && (Kt || a === null || on(a, a.return)), r & 4) {
          var c = a !== null ? a.memoizedState : null;
          if (r = t.memoizedState, a === null)
            if (r === null)
              if (t.stateNode === null) {
                t: {
                  r = t.type, a = t.memoizedProps, u = u.ownerDocument || u;
                  e: switch (r) {
                    case "title":
                      c = u.getElementsByTagName("title")[0], (!c || c[Qa] || c[ce] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = u.createElement(r), u.head.insertBefore(
                        c,
                        u.querySelector("head > title")
                      )), oe(c, r, a), c[ce] = t, ne(c), r = c;
                      break t;
                    case "link":
                      var y = $p(
                        "link",
                        "href",
                        u
                      ).get(r + (a.href || ""));
                      if (y) {
                        for (var v = 0; v < y.length; v++)
                          if (c = y[v], c.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && c.getAttribute("rel") === (a.rel == null ? null : a.rel) && c.getAttribute("title") === (a.title == null ? null : a.title) && c.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            y.splice(v, 1);
                            break e;
                          }
                      }
                      c = u.createElement(r), oe(c, r, a), u.head.appendChild(c);
                      break;
                    case "meta":
                      if (y = $p(
                        "meta",
                        "content",
                        u
                      ).get(r + (a.content || ""))) {
                        for (v = 0; v < y.length; v++)
                          if (c = y[v], c.getAttribute("content") === (a.content == null ? null : "" + a.content) && c.getAttribute("name") === (a.name == null ? null : a.name) && c.getAttribute("property") === (a.property == null ? null : a.property) && c.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && c.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            y.splice(v, 1);
                            break e;
                          }
                      }
                      c = u.createElement(r), oe(c, r, a), u.head.appendChild(c);
                      break;
                    default:
                      throw Error(o(468, r));
                  }
                  c[ce] = t, ne(c), r = c;
                }
                t.stateNode = r;
              } else
                Ip(
                  u,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Jp(
                u,
                r,
                t.memoizedProps
              );
          else
            c !== r ? (c === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : c.count--, r === null ? Ip(
              u,
              t.type,
              t.stateNode
            ) : Jp(
              u,
              r,
              t.memoizedProps
            )) : r === null && t.stateNode !== null && Bu(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        je(e, t), _e(t), r & 512 && (Kt || a === null || on(a, a.return)), a !== null && r & 4 && Bu(
          t,
          t.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (je(e, t), _e(t), r & 512 && (Kt || a === null || on(a, a.return)), t.flags & 32) {
          u = t.stateNode;
          try {
            Qi(u, "");
          } catch (_) {
            zt(t, t.return, _);
          }
        }
        r & 4 && t.stateNode != null && (u = t.memoizedProps, Bu(
          t,
          u,
          a !== null ? a.memoizedProps : u
        )), r & 1024 && (Hu = !0);
        break;
      case 6:
        if (je(e, t), _e(t), r & 4) {
          if (t.stateNode === null)
            throw Error(o(162));
          r = t.memoizedProps, a = t.stateNode;
          try {
            a.nodeValue = r;
          } catch (_) {
            zt(t, t.return, _);
          }
        }
        break;
      case 3:
        if (bl = null, u = We, We = gl(e.containerInfo), je(e, t), We = u, _e(t), r & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Hs(e.containerInfo);
          } catch (_) {
            zt(t, t.return, _);
          }
        Hu && (Hu = !1, sp(t));
        break;
      case 4:
        r = We, We = gl(
          t.stateNode.containerInfo
        ), je(e, t), _e(t), We = r;
        break;
      case 12:
        je(e, t), _e(t);
        break;
      case 13:
        je(e, t), _e(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Qu = sn()), r & 4 && (r = t.updateQueue, r !== null && (t.updateQueue = null, qu(t, r)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var S = a !== null && a.memoizedState !== null, D = Mn, k = Kt;
        if (Mn = D || u, Kt = k || S, je(e, t), Kt = k, Mn = D, _e(t), r & 8192)
          t: for (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, u && (a === null || S || Mn || Kt || Mi(t)), a = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (a === null) {
                S = a = e;
                try {
                  if (c = S.stateNode, u)
                    y = c.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                  else {
                    v = S.stateNode;
                    var P = S.memoizedProps.style, j = P != null && P.hasOwnProperty("display") ? P.display : null;
                    v.style.display = j == null || typeof j == "boolean" ? "" : ("" + j).trim();
                  }
                } catch (_) {
                  zt(S, S.return, _);
                }
              }
            } else if (e.tag === 6) {
              if (a === null) {
                S = e;
                try {
                  S.stateNode.nodeValue = u ? "" : S.memoizedProps;
                } catch (_) {
                  zt(S, S.return, _);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              a === e && (a = null), e = e.return;
            }
            a === e && (a = null), e.sibling.return = e.return, e = e.sibling;
          }
        r & 4 && (r = t.updateQueue, r !== null && (a = r.retryQueue, a !== null && (r.retryQueue = null, qu(t, a))));
        break;
      case 19:
        je(e, t), _e(t), r & 4 && (r = t.updateQueue, r !== null && (t.updateQueue = null, qu(t, r)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        je(e, t), _e(t);
    }
  }
  function _e(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var a, r = t.return; r !== null; ) {
          if (Jh(r)) {
            a = r;
            break;
          }
          r = r.return;
        }
        if (a == null) throw Error(o(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode, c = Lu(t);
            al(t, c, u);
            break;
          case 5:
            var y = a.stateNode;
            a.flags & 32 && (Qi(y, ""), a.flags &= -33);
            var v = Lu(t);
            al(t, v, y);
            break;
          case 3:
          case 4:
            var S = a.stateNode.containerInfo, D = Lu(t);
            ku(
              t,
              D,
              S
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (k) {
        zt(t, t.return, k);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function sp(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        sp(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function Gn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        tp(t, e.alternate, e), e = e.sibling;
  }
  function Mi(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Yn(4, e, e.return), Mi(e);
          break;
        case 1:
          on(e, e.return);
          var a = e.stateNode;
          typeof a.componentWillUnmount == "function" && Fh(
            e,
            e.return,
            a
          ), Mi(e);
          break;
        case 27:
          js(e.stateNode);
        case 26:
        case 5:
          on(e, e.return), Mi(e);
          break;
        case 22:
          e.memoizedState === null && Mi(e);
          break;
        case 30:
          Mi(e);
          break;
        default:
          Mi(e);
      }
      t = t.sibling;
    }
  }
  function Xn(t, e, a) {
    for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var r = e.alternate, u = t, c = e, y = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Xn(
            u,
            c,
            a
          ), Ts(4, c);
          break;
        case 1:
          if (Xn(
            u,
            c,
            a
          ), r = c, u = r.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (D) {
              zt(r, r.return, D);
            }
          if (r = c, u = r.updateQueue, u !== null) {
            var v = r.stateNode;
            try {
              var S = u.shared.hiddenCallbacks;
              if (S !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < S.length; u++)
                  zd(S[u], v);
            } catch (D) {
              zt(r, r.return, D);
            }
          }
          a && y & 64 && Zh(c), ws(c, c.return);
          break;
        case 27:
          $h(c);
        case 26:
        case 5:
          Xn(
            u,
            c,
            a
          ), a && r === null && y & 4 && Wh(c), ws(c, c.return);
          break;
        case 12:
          Xn(
            u,
            c,
            a
          );
          break;
        case 13:
          Xn(
            u,
            c,
            a
          ), a && y & 4 && ip(u, c);
          break;
        case 22:
          c.memoizedState === null && Xn(
            u,
            c,
            a
          ), ws(c, c.return);
          break;
        case 30:
          break;
        default:
          Xn(
            u,
            c,
            a
          );
      }
      e = e.sibling;
    }
  }
  function Pu(t, e) {
    var a = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && os(a));
  }
  function Yu(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && os(t));
  }
  function un(t, e, a, r) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        rp(
          t,
          e,
          a,
          r
        ), e = e.sibling;
  }
  function rp(t, e, a, r) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        un(
          t,
          e,
          a,
          r
        ), u & 2048 && Ts(9, e);
        break;
      case 1:
        un(
          t,
          e,
          a,
          r
        );
        break;
      case 3:
        un(
          t,
          e,
          a,
          r
        ), u & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && os(t)));
        break;
      case 12:
        if (u & 2048) {
          un(
            t,
            e,
            a,
            r
          ), t = e.stateNode;
          try {
            var c = e.memoizedProps, y = c.id, v = c.onPostCommit;
            typeof v == "function" && v(
              y,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (S) {
            zt(e, e.return, S);
          }
        } else
          un(
            t,
            e,
            a,
            r
          );
        break;
      case 13:
        un(
          t,
          e,
          a,
          r
        );
        break;
      case 23:
        break;
      case 22:
        c = e.stateNode, y = e.alternate, e.memoizedState !== null ? c._visibility & 2 ? un(
          t,
          e,
          a,
          r
        ) : As(t, e) : c._visibility & 2 ? un(
          t,
          e,
          a,
          r
        ) : (c._visibility |= 2, ma(
          t,
          e,
          a,
          r,
          (e.subtreeFlags & 10256) !== 0
        )), u & 2048 && Pu(y, e);
        break;
      case 24:
        un(
          t,
          e,
          a,
          r
        ), u & 2048 && Yu(e.alternate, e);
        break;
      default:
        un(
          t,
          e,
          a,
          r
        );
    }
  }
  function ma(t, e, a, r, u) {
    for (u = u && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var c = t, y = e, v = a, S = r, D = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          ma(
            c,
            y,
            v,
            S,
            u
          ), Ts(8, y);
          break;
        case 23:
          break;
        case 22:
          var k = y.stateNode;
          y.memoizedState !== null ? k._visibility & 2 ? ma(
            c,
            y,
            v,
            S,
            u
          ) : As(
            c,
            y
          ) : (k._visibility |= 2, ma(
            c,
            y,
            v,
            S,
            u
          )), u && D & 2048 && Pu(
            y.alternate,
            y
          );
          break;
        case 24:
          ma(
            c,
            y,
            v,
            S,
            u
          ), u && D & 2048 && Yu(y.alternate, y);
          break;
        default:
          ma(
            c,
            y,
            v,
            S,
            u
          );
      }
      e = e.sibling;
    }
  }
  function As(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var a = t, r = e, u = r.flags;
        switch (r.tag) {
          case 22:
            As(a, r), u & 2048 && Pu(
              r.alternate,
              r
            );
            break;
          case 24:
            As(a, r), u & 2048 && Yu(r.alternate, r);
            break;
          default:
            As(a, r);
        }
        e = e.sibling;
      }
  }
  var Es = 8192;
  function da(t) {
    if (t.subtreeFlags & Es)
      for (t = t.child; t !== null; )
        lp(t), t = t.sibling;
  }
  function lp(t) {
    switch (t.tag) {
      case 26:
        da(t), t.flags & Es && t.memoizedState !== null && Kx(
          We,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        da(t);
        break;
      case 3:
      case 4:
        var e = We;
        We = gl(t.stateNode.containerInfo), da(t), We = e;
        break;
      case 22:
        t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = Es, Es = 16777216, da(t), Es = e) : da(t));
        break;
      default:
        da(t);
    }
  }
  function op(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Ms(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var r = e[a];
          ae = r, cp(
            r,
            t
          );
        }
      op(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        up(t), t = t.sibling;
  }
  function up(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ms(t), t.flags & 2048 && Yn(9, t, t.return);
        break;
      case 3:
        Ms(t);
        break;
      case 12:
        Ms(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, sl(t)) : Ms(t);
        break;
      default:
        Ms(t);
    }
  }
  function sl(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var r = e[a];
          ae = r, cp(
            r,
            t
          );
        }
      op(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Yn(8, e, e.return), sl(e);
          break;
        case 22:
          a = e.stateNode, a._visibility & 2 && (a._visibility &= -3, sl(e));
          break;
        default:
          sl(e);
      }
      t = t.sibling;
    }
  }
  function cp(t, e) {
    for (; ae !== null; ) {
      var a = ae;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Yn(8, a, e);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var r = a.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          os(a.memoizedState.cache);
      }
      if (r = a.child, r !== null) r.return = a, ae = r;
      else
        t: for (a = t; ae !== null; ) {
          r = ae;
          var u = r.sibling, c = r.return;
          if (ep(r), r === a) {
            ae = null;
            break t;
          }
          if (u !== null) {
            u.return = c, ae = u;
            break t;
          }
          ae = c;
        }
    }
  }
  var ox = {
    getCacheForType: function(t) {
      var e = fe($t), a = e.data.get(t);
      return a === void 0 && (a = t(), e.data.set(t, a)), a;
    }
  }, ux = typeof WeakMap == "function" ? WeakMap : Map, Rt = 0, Ut = null, bt = null, Tt = 0, Ot = 0, ze = null, Kn = !1, ha = !1, Gu = !1, On = 0, Pt = 0, Qn = 0, Ri = 0, Xu = 0, Ge = 0, pa = 0, Rs = null, Ae = null, Ku = !1, Qu = 0, rl = 1 / 0, ll = null, Zn = null, le = 0, Fn = null, ya = null, ga = 0, Zu = 0, Fu = null, fp = null, Os = 0, Wu = null;
  function Ue() {
    if ((Rt & 2) !== 0 && Tt !== 0)
      return Tt & -Tt;
    if (L.T !== null) {
      var t = aa;
      return t !== 0 ? t : ic();
    }
    return Rm();
  }
  function mp() {
    Ge === 0 && (Ge = (Tt & 536870912) === 0 || Mt ? wm() : 536870912);
    var t = Ye.current;
    return t !== null && (t.flags |= 32), Ge;
  }
  function Ve(t, e, a) {
    (t === Ut && (Ot === 2 || Ot === 9) || t.cancelPendingCommit !== null) && (va(t, 0), Wn(
      t,
      Tt,
      Ge,
      !1
    )), Ka(t, a), ((Rt & 2) === 0 || t !== Ut) && (t === Ut && ((Rt & 2) === 0 && (Ri |= a), Pt === 4 && Wn(
      t,
      Tt,
      Ge,
      !1
    )), cn(t));
  }
  function dp(t, e, a) {
    if ((Rt & 6) !== 0) throw Error(o(327));
    var r = !a && (e & 124) === 0 && (e & t.expiredLanes) === 0 || Xa(t, e), u = r ? mx(t, e) : Iu(t, e, !0), c = r;
    do {
      if (u === 0) {
        ha && !r && Wn(t, e, 0, !1);
        break;
      } else {
        if (a = t.current.alternate, c && !cx(a)) {
          u = Iu(t, e, !1), c = !1;
          continue;
        }
        if (u === 2) {
          if (c = e, t.errorRecoveryDisabledLanes & c)
            var y = 0;
          else
            y = t.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
          if (y !== 0) {
            e = y;
            t: {
              var v = t;
              u = Rs;
              var S = v.current.memoizedState.isDehydrated;
              if (S && (va(v, y).flags |= 256), y = Iu(
                v,
                y,
                !1
              ), y !== 2) {
                if (Gu && !S) {
                  v.errorRecoveryDisabledLanes |= c, Ri |= c, u = 4;
                  break t;
                }
                c = Ae, Ae = u, c !== null && (Ae === null ? Ae = c : Ae.push.apply(
                  Ae,
                  c
                ));
              }
              u = y;
            }
            if (c = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          va(t, 0), Wn(t, e, 0, !0);
          break;
        }
        t: {
          switch (r = t, c = u, c) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Wn(
                r,
                e,
                Ge,
                !Kn
              );
              break t;
            case 2:
              Ae = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((e & 62914560) === e && (u = Qu + 300 - sn(), 10 < u)) {
            if (Wn(
              r,
              e,
              Ge,
              !Kn
            ), vr(r, 0, !0) !== 0) break t;
            r.timeoutHandle = Pp(
              hp.bind(
                null,
                r,
                a,
                Ae,
                ll,
                Ku,
                e,
                Ge,
                Ri,
                pa,
                Kn,
                c,
                2,
                -0,
                0
              ),
              u
            );
            break t;
          }
          hp(
            r,
            a,
            Ae,
            ll,
            Ku,
            e,
            Ge,
            Ri,
            pa,
            Kn,
            c,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    cn(t);
  }
  function hp(t, e, a, r, u, c, y, v, S, D, k, P, j, _) {
    if (t.timeoutHandle = -1, P = e.subtreeFlags, (P & 8192 || (P & 16785408) === 16785408) && (Us = { stylesheets: null, count: 0, unsuspend: Xx }, lp(e), P = Qx(), P !== null)) {
      t.cancelPendingCommit = P(
        Sp.bind(
          null,
          t,
          e,
          c,
          a,
          r,
          u,
          y,
          v,
          S,
          k,
          1,
          j,
          _
        )
      ), Wn(t, c, y, !D);
      return;
    }
    Sp(
      t,
      e,
      c,
      a,
      r,
      u,
      y,
      v,
      S
    );
  }
  function cx(t) {
    for (var e = t; ; ) {
      var a = e.tag;
      if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var r = 0; r < a.length; r++) {
          var u = a[r], c = u.getSnapshot;
          u = u.value;
          try {
            if (!De(c(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = e.child, e.subtreeFlags & 16384 && a !== null)
        a.return = e, e = a;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function Wn(t, e, a, r) {
    e &= ~Xu, e &= ~Ri, t.suspendedLanes |= e, t.pingedLanes &= ~e, r && (t.warmLanes |= e), r = t.expirationTimes;
    for (var u = e; 0 < u; ) {
      var c = 31 - Ce(u), y = 1 << c;
      r[c] = -1, u &= ~y;
    }
    a !== 0 && Em(t, a, e);
  }
  function ol() {
    return (Rt & 6) === 0 ? (Cs(0), !1) : !0;
  }
  function Ju() {
    if (bt !== null) {
      if (Ot === 0)
        var t = bt.return;
      else
        t = bt, xn = Si = null, hu(t), ca = null, bs = 0, t = bt;
      for (; t !== null; )
        Qh(t.alternate, t), t = t.return;
      bt = null;
    }
  }
  function va(t, e) {
    var a = t.timeoutHandle;
    a !== -1 && (t.timeoutHandle = -1, Ox(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), Ju(), Ut = t, bt = a = gn(t.current, null), Tt = e, Ot = 0, ze = null, Kn = !1, ha = Xa(t, e), Gu = !1, pa = Ge = Xu = Ri = Qn = Pt = 0, Ae = Rs = null, Ku = !1, (e & 8) !== 0 && (e |= e & 32);
    var r = t.entangledLanes;
    if (r !== 0)
      for (t = t.entanglements, r &= e; 0 < r; ) {
        var u = 31 - Ce(r), c = 1 << u;
        e |= t[u], r &= ~c;
      }
    return On = e, Dr(), a;
  }
  function pp(t, e) {
    yt = null, L.H = Fr, e === cs || e === kr ? (e = jd(), Ot = 3) : e === Cd ? (e = jd(), Ot = 4) : Ot = e === _h ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, ze = e, bt === null && (Pt = 1, tl(
      t,
      ke(e, t.current)
    ));
  }
  function yp() {
    var t = L.H;
    return L.H = Fr, t === null ? Fr : t;
  }
  function gp() {
    var t = L.A;
    return L.A = ox, t;
  }
  function $u() {
    Pt = 4, Kn || (Tt & 4194048) !== Tt && Ye.current !== null || (ha = !0), (Qn & 134217727) === 0 && (Ri & 134217727) === 0 || Ut === null || Wn(
      Ut,
      Tt,
      Ge,
      !1
    );
  }
  function Iu(t, e, a) {
    var r = Rt;
    Rt |= 2;
    var u = yp(), c = gp();
    (Ut !== t || Tt !== e) && (ll = null, va(t, e)), e = !1;
    var y = Pt;
    t: do
      try {
        if (Ot !== 0 && bt !== null) {
          var v = bt, S = ze;
          switch (Ot) {
            case 8:
              Ju(), y = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ye.current === null && (e = !0);
              var D = Ot;
              if (Ot = 0, ze = null, ba(t, v, S, D), a && ha) {
                y = 0;
                break t;
              }
              break;
            default:
              D = Ot, Ot = 0, ze = null, ba(t, v, S, D);
          }
        }
        fx(), y = Pt;
        break;
      } catch (k) {
        pp(t, k);
      }
    while (!0);
    return e && t.shellSuspendCounter++, xn = Si = null, Rt = r, L.H = u, L.A = c, bt === null && (Ut = null, Tt = 0, Dr()), y;
  }
  function fx() {
    for (; bt !== null; ) vp(bt);
  }
  function mx(t, e) {
    var a = Rt;
    Rt |= 2;
    var r = yp(), u = gp();
    Ut !== t || Tt !== e ? (ll = null, rl = sn() + 500, va(t, e)) : ha = Xa(
      t,
      e
    );
    t: do
      try {
        if (Ot !== 0 && bt !== null) {
          e = bt;
          var c = ze;
          e: switch (Ot) {
            case 1:
              Ot = 0, ze = null, ba(t, e, c, 1);
              break;
            case 2:
            case 9:
              if (Dd(c)) {
                Ot = 0, ze = null, bp(e);
                break;
              }
              e = function() {
                Ot !== 2 && Ot !== 9 || Ut !== t || (Ot = 7), cn(t);
              }, c.then(e, e);
              break t;
            case 3:
              Ot = 7;
              break t;
            case 4:
              Ot = 5;
              break t;
            case 7:
              Dd(c) ? (Ot = 0, ze = null, bp(e)) : (Ot = 0, ze = null, ba(t, e, c, 7));
              break;
            case 5:
              var y = null;
              switch (bt.tag) {
                case 26:
                  y = bt.memoizedState;
                case 5:
                case 27:
                  var v = bt;
                  if (!y || ty(y)) {
                    Ot = 0, ze = null;
                    var S = v.sibling;
                    if (S !== null) bt = S;
                    else {
                      var D = v.return;
                      D !== null ? (bt = D, ul(D)) : bt = null;
                    }
                    break e;
                  }
              }
              Ot = 0, ze = null, ba(t, e, c, 5);
              break;
            case 6:
              Ot = 0, ze = null, ba(t, e, c, 6);
              break;
            case 8:
              Ju(), Pt = 6;
              break t;
            default:
              throw Error(o(462));
          }
        }
        dx();
        break;
      } catch (k) {
        pp(t, k);
      }
    while (!0);
    return xn = Si = null, L.H = r, L.A = u, Rt = a, bt !== null ? 0 : (Ut = null, Tt = 0, Dr(), Pt);
  }
  function dx() {
    for (; bt !== null && !Ub(); )
      vp(bt);
  }
  function vp(t) {
    var e = Xh(t.alternate, t, On);
    t.memoizedProps = t.pendingProps, e === null ? ul(t) : bt = e;
  }
  function bp(t) {
    var e = t, a = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = kh(
          a,
          e,
          e.pendingProps,
          e.type,
          void 0,
          Tt
        );
        break;
      case 11:
        e = kh(
          a,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          Tt
        );
        break;
      case 5:
        hu(e);
      default:
        Qh(a, e), e = bt = xd(e, On), e = Xh(a, e, On);
    }
    t.memoizedProps = t.pendingProps, e === null ? ul(t) : bt = e;
  }
  function ba(t, e, a, r) {
    xn = Si = null, hu(e), ca = null, bs = 0;
    var u = e.return;
    try {
      if (nx(
        t,
        u,
        e,
        a,
        Tt
      )) {
        Pt = 1, tl(
          t,
          ke(a, t.current)
        ), bt = null;
        return;
      }
    } catch (c) {
      if (u !== null) throw bt = u, c;
      Pt = 1, tl(
        t,
        ke(a, t.current)
      ), bt = null;
      return;
    }
    e.flags & 32768 ? (Mt || r === 1 ? t = !0 : ha || (Tt & 536870912) !== 0 ? t = !1 : (Kn = t = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Ye.current, r !== null && r.tag === 13 && (r.flags |= 16384))), xp(e, t)) : ul(e);
  }
  function ul(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        xp(
          e,
          Kn
        );
        return;
      }
      t = e.return;
      var a = ax(
        e.alternate,
        e,
        On
      );
      if (a !== null) {
        bt = a;
        return;
      }
      if (e = e.sibling, e !== null) {
        bt = e;
        return;
      }
      bt = e = t;
    } while (e !== null);
    Pt === 0 && (Pt = 5);
  }
  function xp(t, e) {
    do {
      var a = sx(t.alternate, t);
      if (a !== null) {
        a.flags &= 32767, bt = a;
        return;
      }
      if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !e && (t = t.sibling, t !== null)) {
        bt = t;
        return;
      }
      bt = t = a;
    } while (t !== null);
    Pt = 6, bt = null;
  }
  function Sp(t, e, a, r, u, c, y, v, S) {
    t.cancelPendingCommit = null;
    do
      cl();
    while (le !== 0);
    if ((Rt & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      if (c = e.lanes | e.childLanes, c |= Yo, Xb(
        t,
        a,
        c,
        y,
        v,
        S
      ), t === Ut && (bt = Ut = null, Tt = 0), ya = e, Fn = t, ga = a, Zu = c, Fu = u, fp = r, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, gx(pr, function() {
        return Mp(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), r = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || r) {
        r = L.T, L.T = null, u = z.p, z.p = 2, y = Rt, Rt |= 4;
        try {
          rx(t, e, a);
        } finally {
          Rt = y, z.p = u, L.T = r;
        }
      }
      le = 1, Tp(), wp(), Ap();
    }
  }
  function Tp() {
    if (le === 1) {
      le = 0;
      var t = Fn, e = ya, a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        a = L.T, L.T = null;
        var r = z.p;
        z.p = 2;
        var u = Rt;
        Rt |= 4;
        try {
          ap(e, t);
          var c = fc, y = cd(t.containerInfo), v = c.focusedElem, S = c.selectionRange;
          if (y !== v && v && v.ownerDocument && ud(
            v.ownerDocument.documentElement,
            v
          )) {
            if (S !== null && Lo(v)) {
              var D = S.start, k = S.end;
              if (k === void 0 && (k = D), "selectionStart" in v)
                v.selectionStart = D, v.selectionEnd = Math.min(
                  k,
                  v.value.length
                );
              else {
                var P = v.ownerDocument || document, j = P && P.defaultView || window;
                if (j.getSelection) {
                  var _ = j.getSelection(), ut = v.textContent.length, st = Math.min(S.start, ut), _t = S.end === void 0 ? st : Math.min(S.end, ut);
                  !_.extend && st > _t && (y = _t, _t = st, st = y);
                  var M = od(
                    v,
                    st
                  ), T = od(
                    v,
                    _t
                  );
                  if (M && T && (_.rangeCount !== 1 || _.anchorNode !== M.node || _.anchorOffset !== M.offset || _.focusNode !== T.node || _.focusOffset !== T.offset)) {
                    var O = P.createRange();
                    O.setStart(M.node, M.offset), _.removeAllRanges(), st > _t ? (_.addRange(O), _.extend(T.node, T.offset)) : (O.setEnd(T.node, T.offset), _.addRange(O));
                  }
                }
              }
            }
            for (P = [], _ = v; _ = _.parentNode; )
              _.nodeType === 1 && P.push({
                element: _,
                left: _.scrollLeft,
                top: _.scrollTop
              });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < P.length; v++) {
              var q = P[v];
              q.element.scrollLeft = q.left, q.element.scrollTop = q.top;
            }
          }
          Tl = !!cc, fc = cc = null;
        } finally {
          Rt = u, z.p = r, L.T = a;
        }
      }
      t.current = e, le = 2;
    }
  }
  function wp() {
    if (le === 2) {
      le = 0;
      var t = Fn, e = ya, a = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || a) {
        a = L.T, L.T = null;
        var r = z.p;
        z.p = 2;
        var u = Rt;
        Rt |= 4;
        try {
          tp(t, e.alternate, e);
        } finally {
          Rt = u, z.p = r, L.T = a;
        }
      }
      le = 3;
    }
  }
  function Ap() {
    if (le === 4 || le === 3) {
      le = 0, Vb();
      var t = Fn, e = ya, a = ga, r = fp;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? le = 5 : (le = 0, ya = Fn = null, Ep(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (u === 0 && (Zn = null), go(a), e = e.stateNode, Oe && typeof Oe.onCommitFiberRoot == "function")
        try {
          Oe.onCommitFiberRoot(
            Ga,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (r !== null) {
        e = L.T, u = z.p, z.p = 2, L.T = null;
        try {
          for (var c = t.onRecoverableError, y = 0; y < r.length; y++) {
            var v = r[y];
            c(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          L.T = e, z.p = u;
        }
      }
      (ga & 3) !== 0 && cl(), cn(t), u = t.pendingLanes, (a & 4194090) !== 0 && (u & 42) !== 0 ? t === Wu ? Os++ : (Os = 0, Wu = t) : Os = 0, Cs(0);
    }
  }
  function Ep(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, os(e)));
  }
  function cl(t) {
    return Tp(), wp(), Ap(), Mp();
  }
  function Mp() {
    if (le !== 5) return !1;
    var t = Fn, e = Zu;
    Zu = 0;
    var a = go(ga), r = L.T, u = z.p;
    try {
      z.p = 32 > a ? 32 : a, L.T = null, a = Fu, Fu = null;
      var c = Fn, y = ga;
      if (le = 0, ya = Fn = null, ga = 0, (Rt & 6) !== 0) throw Error(o(331));
      var v = Rt;
      if (Rt |= 4, up(c.current), rp(
        c,
        c.current,
        y,
        a
      ), Rt = v, Cs(0, !1), Oe && typeof Oe.onPostCommitFiberRoot == "function")
        try {
          Oe.onPostCommitFiberRoot(Ga, c);
        } catch {
        }
      return !0;
    } finally {
      z.p = u, L.T = r, Ep(t, e);
    }
  }
  function Rp(t, e, a) {
    e = ke(a, e), e = Ou(t.stateNode, e, 2), t = kn(t, e, 2), t !== null && (Ka(t, 2), cn(t));
  }
  function zt(t, e, a) {
    if (t.tag === 3)
      Rp(t, t, a);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Rp(
            e,
            t,
            a
          );
          break;
        } else if (e.tag === 1) {
          var r = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Zn === null || !Zn.has(r))) {
            t = ke(a, t), a = Nh(2), r = kn(e, a, 2), r !== null && (jh(
              a,
              r,
              e,
              t
            ), Ka(r, 2), cn(r));
            break;
          }
        }
        e = e.return;
      }
  }
  function tc(t, e, a) {
    var r = t.pingCache;
    if (r === null) {
      r = t.pingCache = new ux();
      var u = /* @__PURE__ */ new Set();
      r.set(e, u);
    } else
      u = r.get(e), u === void 0 && (u = /* @__PURE__ */ new Set(), r.set(e, u));
    u.has(a) || (Gu = !0, u.add(a), t = hx.bind(null, t, e, a), e.then(t, t));
  }
  function hx(t, e, a) {
    var r = t.pingCache;
    r !== null && r.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, Ut === t && (Tt & a) === a && (Pt === 4 || Pt === 3 && (Tt & 62914560) === Tt && 300 > sn() - Qu ? (Rt & 2) === 0 && va(t, 0) : Xu |= a, pa === Tt && (pa = 0)), cn(t);
  }
  function Op(t, e) {
    e === 0 && (e = Am()), t = ta(t, e), t !== null && (Ka(t, e), cn(t));
  }
  function px(t) {
    var e = t.memoizedState, a = 0;
    e !== null && (a = e.retryLane), Op(t, a);
  }
  function yx(t, e) {
    var a = 0;
    switch (t.tag) {
      case 13:
        var r = t.stateNode, u = t.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        r = t.stateNode;
        break;
      case 22:
        r = t.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    r !== null && r.delete(e), Op(t, a);
  }
  function gx(t, e) {
    return ci(t, e);
  }
  var fl = null, xa = null, ec = !1, ml = !1, nc = !1, Oi = 0;
  function cn(t) {
    t !== xa && t.next === null && (xa === null ? fl = xa = t : xa = xa.next = t), ml = !0, ec || (ec = !0, bx());
  }
  function Cs(t, e) {
    if (!nc && ml) {
      nc = !0;
      do
        for (var a = !1, r = fl; r !== null; ) {
          if (t !== 0) {
            var u = r.pendingLanes;
            if (u === 0) var c = 0;
            else {
              var y = r.suspendedLanes, v = r.pingedLanes;
              c = (1 << 31 - Ce(42 | t) + 1) - 1, c &= u & ~(y & ~v), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (a = !0, jp(r, c));
          } else
            c = Tt, c = vr(
              r,
              r === Ut ? c : 0,
              r.cancelPendingCommit !== null || r.timeoutHandle !== -1
            ), (c & 3) === 0 || Xa(r, c) || (a = !0, jp(r, c));
          r = r.next;
        }
      while (a);
      nc = !1;
    }
  }
  function vx() {
    Cp();
  }
  function Cp() {
    ml = ec = !1;
    var t = 0;
    Oi !== 0 && (Rx() && (t = Oi), Oi = 0);
    for (var e = sn(), a = null, r = fl; r !== null; ) {
      var u = r.next, c = Dp(r, e);
      c === 0 ? (r.next = null, a === null ? fl = u : a.next = u, u === null && (xa = a)) : (a = r, (t !== 0 || (c & 3) !== 0) && (ml = !0)), r = u;
    }
    Cs(t);
  }
  function Dp(t, e) {
    for (var a = t.suspendedLanes, r = t.pingedLanes, u = t.expirationTimes, c = t.pendingLanes & -62914561; 0 < c; ) {
      var y = 31 - Ce(c), v = 1 << y, S = u[y];
      S === -1 ? ((v & a) === 0 || (v & r) !== 0) && (u[y] = Gb(v, e)) : S <= e && (t.expiredLanes |= v), c &= ~v;
    }
    if (e = Ut, a = Tt, a = vr(
      t,
      t === e ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), r = t.callbackNode, a === 0 || t === e && (Ot === 2 || Ot === 9) || t.cancelPendingCommit !== null)
      return r !== null && r !== null && ho(r), t.callbackNode = null, t.callbackPriority = 0;
    if ((a & 3) === 0 || Xa(t, a)) {
      if (e = a & -a, e === t.callbackPriority) return e;
      switch (r !== null && ho(r), go(a)) {
        case 2:
        case 8:
          a = Sm;
          break;
        case 32:
          a = pr;
          break;
        case 268435456:
          a = Tm;
          break;
        default:
          a = pr;
      }
      return r = Np.bind(null, t), a = ci(a, r), t.callbackPriority = e, t.callbackNode = a, e;
    }
    return r !== null && r !== null && ho(r), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Np(t, e) {
    if (le !== 0 && le !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var a = t.callbackNode;
    if (cl() && t.callbackNode !== a)
      return null;
    var r = Tt;
    return r = vr(
      t,
      t === Ut ? r : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), r === 0 ? null : (dp(t, r, e), Dp(t, sn()), t.callbackNode != null && t.callbackNode === a ? Np.bind(null, t) : null);
  }
  function jp(t, e) {
    if (cl()) return null;
    dp(t, e, !0);
  }
  function bx() {
    Cx(function() {
      (Rt & 6) !== 0 ? ci(
        xm,
        vx
      ) : Cp();
    });
  }
  function ic() {
    return Oi === 0 && (Oi = wm()), Oi;
  }
  function _p(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : wr("" + t);
  }
  function zp(t, e) {
    var a = e.ownerDocument.createElement("input");
    return a.name = e.name, a.value = e.value, t.id && a.setAttribute("form", t.id), e.parentNode.insertBefore(a, e), t = new FormData(t), a.parentNode.removeChild(a), t;
  }
  function xx(t, e, a, r, u) {
    if (e === "submit" && a && a.stateNode === u) {
      var c = _p(
        (u[xe] || null).action
      ), y = r.submitter;
      y && (e = (e = y[xe] || null) ? _p(e.formAction) : y.getAttribute("formAction"), e !== null && (c = e, y = null));
      var v = new Rr(
        "action",
        "action",
        null,
        r,
        u
      );
      t.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (r.defaultPrevented) {
                if (Oi !== 0) {
                  var S = y ? zp(u, y) : new FormData(u);
                  wu(
                    a,
                    {
                      pending: !0,
                      data: S,
                      method: u.method,
                      action: c
                    },
                    null,
                    S
                  );
                }
              } else
                typeof c == "function" && (v.preventDefault(), S = y ? zp(u, y) : new FormData(u), wu(
                  a,
                  {
                    pending: !0,
                    data: S,
                    method: u.method,
                    action: c
                  },
                  c,
                  S
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var ac = 0; ac < Po.length; ac++) {
    var sc = Po[ac], Sx = sc.toLowerCase(), Tx = sc[0].toUpperCase() + sc.slice(1);
    Fe(
      Sx,
      "on" + Tx
    );
  }
  Fe(dd, "onAnimationEnd"), Fe(hd, "onAnimationIteration"), Fe(pd, "onAnimationStart"), Fe("dblclick", "onDoubleClick"), Fe("focusin", "onFocus"), Fe("focusout", "onBlur"), Fe(k1, "onTransitionRun"), Fe(H1, "onTransitionStart"), Fe(q1, "onTransitionCancel"), Fe(yd, "onTransitionEnd"), Gi("onMouseEnter", ["mouseout", "mouseover"]), Gi("onMouseLeave", ["mouseout", "mouseover"]), Gi("onPointerEnter", ["pointerout", "pointerover"]), Gi("onPointerLeave", ["pointerout", "pointerover"]), mi(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), mi(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), mi("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), mi(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), mi(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), mi(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ds = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), wx = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ds)
  );
  function Up(t, e) {
    e = (e & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var r = t[a], u = r.event;
      r = r.listeners;
      t: {
        var c = void 0;
        if (e)
          for (var y = r.length - 1; 0 <= y; y--) {
            var v = r[y], S = v.instance, D = v.currentTarget;
            if (v = v.listener, S !== c && u.isPropagationStopped())
              break t;
            c = v, u.currentTarget = D;
            try {
              c(u);
            } catch (k) {
              Ir(k);
            }
            u.currentTarget = null, c = S;
          }
        else
          for (y = 0; y < r.length; y++) {
            if (v = r[y], S = v.instance, D = v.currentTarget, v = v.listener, S !== c && u.isPropagationStopped())
              break t;
            c = v, u.currentTarget = D;
            try {
              c(u);
            } catch (k) {
              Ir(k);
            }
            u.currentTarget = null, c = S;
          }
      }
    }
  }
  function xt(t, e) {
    var a = e[vo];
    a === void 0 && (a = e[vo] = /* @__PURE__ */ new Set());
    var r = t + "__bubble";
    a.has(r) || (Vp(e, t, 2, !1), a.add(r));
  }
  function rc(t, e, a) {
    var r = 0;
    e && (r |= 4), Vp(
      a,
      t,
      r,
      e
    );
  }
  var dl = "_reactListening" + Math.random().toString(36).slice(2);
  function lc(t) {
    if (!t[dl]) {
      t[dl] = !0, Cm.forEach(function(a) {
        a !== "selectionchange" && (wx.has(a) || rc(a, !1, t), rc(a, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[dl] || (e[dl] = !0, rc("selectionchange", !1, e));
    }
  }
  function Vp(t, e, a, r) {
    switch (ry(e)) {
      case 2:
        var u = Wx;
        break;
      case 8:
        u = Jx;
        break;
      default:
        u = Sc;
    }
    a = u.bind(
      null,
      e,
      a,
      t
    ), u = void 0, !Co || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (u = !0), r ? u !== void 0 ? t.addEventListener(e, a, {
      capture: !0,
      passive: u
    }) : t.addEventListener(e, a, !0) : u !== void 0 ? t.addEventListener(e, a, {
      passive: u
    }) : t.addEventListener(e, a, !1);
  }
  function oc(t, e, a, r, u) {
    var c = r;
    if ((e & 1) === 0 && (e & 2) === 0 && r !== null)
      t: for (; ; ) {
        if (r === null) return;
        var y = r.tag;
        if (y === 3 || y === 4) {
          var v = r.stateNode.containerInfo;
          if (v === u) break;
          if (y === 4)
            for (y = r.return; y !== null; ) {
              var S = y.tag;
              if ((S === 3 || S === 4) && y.stateNode.containerInfo === u)
                return;
              y = y.return;
            }
          for (; v !== null; ) {
            if (y = qi(v), y === null) return;
            if (S = y.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              r = c = y;
              continue t;
            }
            v = v.parentNode;
          }
        }
        r = r.return;
      }
    Ym(function() {
      var D = c, k = Ro(a), P = [];
      t: {
        var j = gd.get(t);
        if (j !== void 0) {
          var _ = Rr, ut = t;
          switch (t) {
            case "keypress":
              if (Er(a) === 0) break t;
            case "keydown":
            case "keyup":
              _ = g1;
              break;
            case "focusin":
              ut = "focus", _ = _o;
              break;
            case "focusout":
              ut = "blur", _ = _o;
              break;
            case "beforeblur":
            case "afterblur":
              _ = _o;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              _ = Km;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _ = s1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _ = x1;
              break;
            case dd:
            case hd:
            case pd:
              _ = o1;
              break;
            case yd:
              _ = T1;
              break;
            case "scroll":
            case "scrollend":
              _ = i1;
              break;
            case "wheel":
              _ = A1;
              break;
            case "copy":
            case "cut":
            case "paste":
              _ = c1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _ = Zm;
              break;
            case "toggle":
            case "beforetoggle":
              _ = M1;
          }
          var st = (e & 4) !== 0, _t = !st && (t === "scroll" || t === "scrollend"), M = st ? j !== null ? j + "Capture" : null : j;
          st = [];
          for (var T = D, O; T !== null; ) {
            var q = T;
            if (O = q.stateNode, q = q.tag, q !== 5 && q !== 26 && q !== 27 || O === null || M === null || (q = Fa(T, M), q != null && st.push(
              Ns(T, q, O)
            )), _t) break;
            T = T.return;
          }
          0 < st.length && (j = new _(
            j,
            ut,
            null,
            a,
            k
          ), P.push({ event: j, listeners: st }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (j = t === "mouseover" || t === "pointerover", _ = t === "mouseout" || t === "pointerout", j && a !== Mo && (ut = a.relatedTarget || a.fromElement) && (qi(ut) || ut[Hi]))
            break t;
          if ((_ || j) && (j = k.window === k ? k : (j = k.ownerDocument) ? j.defaultView || j.parentWindow : window, _ ? (ut = a.relatedTarget || a.toElement, _ = D, ut = ut ? qi(ut) : null, ut !== null && (_t = f(ut), st = ut.tag, ut !== _t || st !== 5 && st !== 27 && st !== 6) && (ut = null)) : (_ = null, ut = D), _ !== ut)) {
            if (st = Km, q = "onMouseLeave", M = "onMouseEnter", T = "mouse", (t === "pointerout" || t === "pointerover") && (st = Zm, q = "onPointerLeave", M = "onPointerEnter", T = "pointer"), _t = _ == null ? j : Za(_), O = ut == null ? j : Za(ut), j = new st(
              q,
              T + "leave",
              _,
              a,
              k
            ), j.target = _t, j.relatedTarget = O, q = null, qi(k) === D && (st = new st(
              M,
              T + "enter",
              ut,
              a,
              k
            ), st.target = O, st.relatedTarget = _t, q = st), _t = q, _ && ut)
              e: {
                for (st = _, M = ut, T = 0, O = st; O; O = Sa(O))
                  T++;
                for (O = 0, q = M; q; q = Sa(q))
                  O++;
                for (; 0 < T - O; )
                  st = Sa(st), T--;
                for (; 0 < O - T; )
                  M = Sa(M), O--;
                for (; T--; ) {
                  if (st === M || M !== null && st === M.alternate)
                    break e;
                  st = Sa(st), M = Sa(M);
                }
                st = null;
              }
            else st = null;
            _ !== null && Bp(
              P,
              j,
              _,
              st,
              !1
            ), ut !== null && _t !== null && Bp(
              P,
              _t,
              ut,
              st,
              !0
            );
          }
        }
        t: {
          if (j = D ? Za(D) : window, _ = j.nodeName && j.nodeName.toLowerCase(), _ === "select" || _ === "input" && j.type === "file")
            var tt = nd;
          else if (td(j))
            if (id)
              tt = V1;
            else {
              tt = z1;
              var vt = _1;
            }
          else
            _ = j.nodeName, !_ || _.toLowerCase() !== "input" || j.type !== "checkbox" && j.type !== "radio" ? D && Eo(D.elementType) && (tt = nd) : tt = U1;
          if (tt && (tt = tt(t, D))) {
            ed(
              P,
              tt,
              a,
              k
            );
            break t;
          }
          vt && vt(t, j, D), t === "focusout" && D && j.type === "number" && D.memoizedProps.value != null && Ao(j, "number", j.value);
        }
        switch (vt = D ? Za(D) : window, t) {
          case "focusin":
            (td(vt) || vt.contentEditable === "true") && (Ji = vt, ko = D, is = null);
            break;
          case "focusout":
            is = ko = Ji = null;
            break;
          case "mousedown":
            Ho = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ho = !1, fd(P, a, k);
            break;
          case "selectionchange":
            if (L1) break;
          case "keydown":
          case "keyup":
            fd(P, a, k);
        }
        var it;
        if (Uo)
          t: {
            switch (t) {
              case "compositionstart":
                var lt = "onCompositionStart";
                break t;
              case "compositionend":
                lt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                lt = "onCompositionUpdate";
                break t;
            }
            lt = void 0;
          }
        else
          Wi ? $m(t, a) && (lt = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (lt = "onCompositionStart");
        lt && (Fm && a.locale !== "ko" && (Wi || lt !== "onCompositionStart" ? lt === "onCompositionEnd" && Wi && (it = Gm()) : (Un = k, Do = "value" in Un ? Un.value : Un.textContent, Wi = !0)), vt = hl(D, lt), 0 < vt.length && (lt = new Qm(
          lt,
          t,
          null,
          a,
          k
        ), P.push({ event: lt, listeners: vt }), it ? lt.data = it : (it = Im(a), it !== null && (lt.data = it)))), (it = O1 ? C1(t, a) : D1(t, a)) && (lt = hl(D, "onBeforeInput"), 0 < lt.length && (vt = new Qm(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          k
        ), P.push({
          event: vt,
          listeners: lt
        }), vt.data = it)), xx(
          P,
          t,
          D,
          a,
          k
        );
      }
      Up(P, e);
    });
  }
  function Ns(t, e, a) {
    return {
      instance: t,
      listener: e,
      currentTarget: a
    };
  }
  function hl(t, e) {
    for (var a = e + "Capture", r = []; t !== null; ) {
      var u = t, c = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || c === null || (u = Fa(t, a), u != null && r.unshift(
        Ns(t, u, c)
      ), u = Fa(t, e), u != null && r.push(
        Ns(t, u, c)
      )), t.tag === 3) return r;
      t = t.return;
    }
    return [];
  }
  function Sa(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Bp(t, e, a, r, u) {
    for (var c = e._reactName, y = []; a !== null && a !== r; ) {
      var v = a, S = v.alternate, D = v.stateNode;
      if (v = v.tag, S !== null && S === r) break;
      v !== 5 && v !== 26 && v !== 27 || D === null || (S = D, u ? (D = Fa(a, c), D != null && y.unshift(
        Ns(a, D, S)
      )) : u || (D = Fa(a, c), D != null && y.push(
        Ns(a, D, S)
      ))), a = a.return;
    }
    y.length !== 0 && t.push({ event: e, listeners: y });
  }
  var Ax = /\r\n?/g, Ex = /\u0000|\uFFFD/g;
  function Lp(t) {
    return (typeof t == "string" ? t : "" + t).replace(Ax, `
`).replace(Ex, "");
  }
  function kp(t, e) {
    return e = Lp(e), Lp(t) === e;
  }
  function pl() {
  }
  function jt(t, e, a, r, u, c) {
    switch (a) {
      case "children":
        typeof r == "string" ? e === "body" || e === "textarea" && r === "" || Qi(t, r) : (typeof r == "number" || typeof r == "bigint") && e !== "body" && Qi(t, "" + r);
        break;
      case "className":
        xr(t, "class", r);
        break;
      case "tabIndex":
        xr(t, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        xr(t, a, r);
        break;
      case "style":
        qm(t, r, c);
        break;
      case "data":
        if (e !== "object") {
          xr(t, "data", r);
          break;
        }
      case "src":
      case "href":
        if (r === "" && (e !== "a" || a !== "href")) {
          t.removeAttribute(a);
          break;
        }
        if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
          t.removeAttribute(a);
          break;
        }
        r = wr("" + r), t.setAttribute(a, r);
        break;
      case "action":
      case "formAction":
        if (typeof r == "function") {
          t.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof c == "function" && (a === "formAction" ? (e !== "input" && jt(t, e, "name", u.name, u, null), jt(
            t,
            e,
            "formEncType",
            u.formEncType,
            u,
            null
          ), jt(
            t,
            e,
            "formMethod",
            u.formMethod,
            u,
            null
          ), jt(
            t,
            e,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (jt(t, e, "encType", u.encType, u, null), jt(t, e, "method", u.method, u, null), jt(t, e, "target", u.target, u, null)));
        if (r == null || typeof r == "symbol" || typeof r == "boolean") {
          t.removeAttribute(a);
          break;
        }
        r = wr("" + r), t.setAttribute(a, r);
        break;
      case "onClick":
        r != null && (t.onclick = pl);
        break;
      case "onScroll":
        r != null && xt("scroll", t);
        break;
      case "onScrollEnd":
        r != null && xt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r))
            throw Error(o(61));
          if (a = r.__html, a != null) {
            if (u.children != null) throw Error(o(60));
            t.innerHTML = a;
          }
        }
        break;
      case "multiple":
        t.multiple = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "muted":
        t.muted = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        a = wr("" + r), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        r != null && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(a, "" + r) : t.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        r && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
        break;
      case "capture":
      case "download":
        r === !0 ? t.setAttribute(a, "") : r !== !1 && r != null && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(a, r) : t.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? t.setAttribute(a, r) : t.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? t.removeAttribute(a) : t.setAttribute(a, r);
        break;
      case "popover":
        xt("beforetoggle", t), xt("toggle", t), br(t, "popover", r);
        break;
      case "xlinkActuate":
        pn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          r
        );
        break;
      case "xlinkArcrole":
        pn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          r
        );
        break;
      case "xlinkRole":
        pn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          r
        );
        break;
      case "xlinkShow":
        pn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          r
        );
        break;
      case "xlinkTitle":
        pn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          r
        );
        break;
      case "xlinkType":
        pn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          r
        );
        break;
      case "xmlBase":
        pn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          r
        );
        break;
      case "xmlLang":
        pn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          r
        );
        break;
      case "xmlSpace":
        pn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          r
        );
        break;
      case "is":
        br(t, "is", r);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = e1.get(a) || a, br(t, a, r));
    }
  }
  function uc(t, e, a, r, u, c) {
    switch (a) {
      case "style":
        qm(t, r, c);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r))
            throw Error(o(61));
          if (a = r.__html, a != null) {
            if (u.children != null) throw Error(o(60));
            t.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof r == "string" ? Qi(t, r) : (typeof r == "number" || typeof r == "bigint") && Qi(t, "" + r);
        break;
      case "onScroll":
        r != null && xt("scroll", t);
        break;
      case "onScrollEnd":
        r != null && xt("scrollend", t);
        break;
      case "onClick":
        r != null && (t.onclick = pl);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Dm.hasOwnProperty(a))
          t: {
            if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"), e = a.slice(2, u ? a.length - 7 : void 0), c = t[xe] || null, c = c != null ? c[a] : null, typeof c == "function" && t.removeEventListener(e, c, u), typeof r == "function")) {
              typeof c != "function" && c !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(e, r, u);
              break t;
            }
            a in t ? t[a] = r : r === !0 ? t.setAttribute(a, "") : br(t, a, r);
          }
    }
  }
  function oe(t, e, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        xt("error", t), xt("load", t);
        var r = !1, u = !1, c;
        for (c in a)
          if (a.hasOwnProperty(c)) {
            var y = a[c];
            if (y != null)
              switch (c) {
                case "src":
                  r = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, e));
                default:
                  jt(t, e, c, y, a, null);
              }
          }
        u && jt(t, e, "srcSet", a.srcSet, a, null), r && jt(t, e, "src", a.src, a, null);
        return;
      case "input":
        xt("invalid", t);
        var v = c = y = u = null, S = null, D = null;
        for (r in a)
          if (a.hasOwnProperty(r)) {
            var k = a[r];
            if (k != null)
              switch (r) {
                case "name":
                  u = k;
                  break;
                case "type":
                  y = k;
                  break;
                case "checked":
                  S = k;
                  break;
                case "defaultChecked":
                  D = k;
                  break;
                case "value":
                  c = k;
                  break;
                case "defaultValue":
                  v = k;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (k != null)
                    throw Error(o(137, e));
                  break;
                default:
                  jt(t, e, r, k, a, null);
              }
          }
        Bm(
          t,
          c,
          v,
          S,
          D,
          y,
          u,
          !1
        ), Sr(t);
        return;
      case "select":
        xt("invalid", t), r = y = c = null;
        for (u in a)
          if (a.hasOwnProperty(u) && (v = a[u], v != null))
            switch (u) {
              case "value":
                c = v;
                break;
              case "defaultValue":
                y = v;
                break;
              case "multiple":
                r = v;
              default:
                jt(t, e, u, v, a, null);
            }
        e = c, a = y, t.multiple = !!r, e != null ? Ki(t, !!r, e, !1) : a != null && Ki(t, !!r, a, !0);
        return;
      case "textarea":
        xt("invalid", t), c = u = r = null;
        for (y in a)
          if (a.hasOwnProperty(y) && (v = a[y], v != null))
            switch (y) {
              case "value":
                r = v;
                break;
              case "defaultValue":
                u = v;
                break;
              case "children":
                c = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(o(91));
                break;
              default:
                jt(t, e, y, v, a, null);
            }
        km(t, r, u, c), Sr(t);
        return;
      case "option":
        for (S in a)
          if (a.hasOwnProperty(S) && (r = a[S], r != null))
            switch (S) {
              case "selected":
                t.selected = r && typeof r != "function" && typeof r != "symbol";
                break;
              default:
                jt(t, e, S, r, a, null);
            }
        return;
      case "dialog":
        xt("beforetoggle", t), xt("toggle", t), xt("cancel", t), xt("close", t);
        break;
      case "iframe":
      case "object":
        xt("load", t);
        break;
      case "video":
      case "audio":
        for (r = 0; r < Ds.length; r++)
          xt(Ds[r], t);
        break;
      case "image":
        xt("error", t), xt("load", t);
        break;
      case "details":
        xt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        xt("error", t), xt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (D in a)
          if (a.hasOwnProperty(D) && (r = a[D], r != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, e));
              default:
                jt(t, e, D, r, a, null);
            }
        return;
      default:
        if (Eo(e)) {
          for (k in a)
            a.hasOwnProperty(k) && (r = a[k], r !== void 0 && uc(
              t,
              e,
              k,
              r,
              a,
              void 0
            ));
          return;
        }
    }
    for (v in a)
      a.hasOwnProperty(v) && (r = a[v], r != null && jt(t, e, v, r, a, null));
  }
  function Mx(t, e, a, r) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, c = null, y = null, v = null, S = null, D = null, k = null;
        for (_ in a) {
          var P = a[_];
          if (a.hasOwnProperty(_) && P != null)
            switch (_) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = P;
              default:
                r.hasOwnProperty(_) || jt(t, e, _, null, r, P);
            }
        }
        for (var j in r) {
          var _ = r[j];
          if (P = a[j], r.hasOwnProperty(j) && (_ != null || P != null))
            switch (j) {
              case "type":
                c = _;
                break;
              case "name":
                u = _;
                break;
              case "checked":
                D = _;
                break;
              case "defaultChecked":
                k = _;
                break;
              case "value":
                y = _;
                break;
              case "defaultValue":
                v = _;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(o(137, e));
                break;
              default:
                _ !== P && jt(
                  t,
                  e,
                  j,
                  _,
                  r,
                  P
                );
            }
        }
        wo(
          t,
          y,
          v,
          S,
          D,
          k,
          c,
          u
        );
        return;
      case "select":
        _ = y = v = j = null;
        for (c in a)
          if (S = a[c], a.hasOwnProperty(c) && S != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                _ = S;
              default:
                r.hasOwnProperty(c) || jt(
                  t,
                  e,
                  c,
                  null,
                  r,
                  S
                );
            }
        for (u in r)
          if (c = r[u], S = a[u], r.hasOwnProperty(u) && (c != null || S != null))
            switch (u) {
              case "value":
                j = c;
                break;
              case "defaultValue":
                v = c;
                break;
              case "multiple":
                y = c;
              default:
                c !== S && jt(
                  t,
                  e,
                  u,
                  c,
                  r,
                  S
                );
            }
        e = v, a = y, r = _, j != null ? Ki(t, !!a, j, !1) : !!r != !!a && (e != null ? Ki(t, !!a, e, !0) : Ki(t, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        _ = j = null;
        for (v in a)
          if (u = a[v], a.hasOwnProperty(v) && u != null && !r.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                jt(t, e, v, null, r, u);
            }
        for (y in r)
          if (u = r[y], c = a[y], r.hasOwnProperty(y) && (u != null || c != null))
            switch (y) {
              case "value":
                j = u;
                break;
              case "defaultValue":
                _ = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(o(91));
                break;
              default:
                u !== c && jt(t, e, y, u, r, c);
            }
        Lm(t, j, _);
        return;
      case "option":
        for (var ut in a)
          if (j = a[ut], a.hasOwnProperty(ut) && j != null && !r.hasOwnProperty(ut))
            switch (ut) {
              case "selected":
                t.selected = !1;
                break;
              default:
                jt(
                  t,
                  e,
                  ut,
                  null,
                  r,
                  j
                );
            }
        for (S in r)
          if (j = r[S], _ = a[S], r.hasOwnProperty(S) && j !== _ && (j != null || _ != null))
            switch (S) {
              case "selected":
                t.selected = j && typeof j != "function" && typeof j != "symbol";
                break;
              default:
                jt(
                  t,
                  e,
                  S,
                  j,
                  r,
                  _
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var st in a)
          j = a[st], a.hasOwnProperty(st) && j != null && !r.hasOwnProperty(st) && jt(t, e, st, null, r, j);
        for (D in r)
          if (j = r[D], _ = a[D], r.hasOwnProperty(D) && j !== _ && (j != null || _ != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null)
                  throw Error(o(137, e));
                break;
              default:
                jt(
                  t,
                  e,
                  D,
                  j,
                  r,
                  _
                );
            }
        return;
      default:
        if (Eo(e)) {
          for (var _t in a)
            j = a[_t], a.hasOwnProperty(_t) && j !== void 0 && !r.hasOwnProperty(_t) && uc(
              t,
              e,
              _t,
              void 0,
              r,
              j
            );
          for (k in r)
            j = r[k], _ = a[k], !r.hasOwnProperty(k) || j === _ || j === void 0 && _ === void 0 || uc(
              t,
              e,
              k,
              j,
              r,
              _
            );
          return;
        }
    }
    for (var M in a)
      j = a[M], a.hasOwnProperty(M) && j != null && !r.hasOwnProperty(M) && jt(t, e, M, null, r, j);
    for (P in r)
      j = r[P], _ = a[P], !r.hasOwnProperty(P) || j === _ || j == null && _ == null || jt(t, e, P, j, r, _);
  }
  var cc = null, fc = null;
  function yl(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Hp(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function qp(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function mc(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var dc = null;
  function Rx() {
    var t = window.event;
    return t && t.type === "popstate" ? t === dc ? !1 : (dc = t, !0) : (dc = null, !1);
  }
  var Pp = typeof setTimeout == "function" ? setTimeout : void 0, Ox = typeof clearTimeout == "function" ? clearTimeout : void 0, Yp = typeof Promise == "function" ? Promise : void 0, Cx = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yp < "u" ? function(t) {
    return Yp.resolve(null).then(t).catch(Dx);
  } : Pp;
  function Dx(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Jn(t) {
    return t === "head";
  }
  function Gp(t, e) {
    var a = e, r = 0, u = 0;
    do {
      var c = a.nextSibling;
      if (t.removeChild(a), c && c.nodeType === 8)
        if (a = c.data, a === "/$") {
          if (0 < r && 8 > r) {
            a = r;
            var y = t.ownerDocument;
            if (a & 1 && js(y.documentElement), a & 2 && js(y.body), a & 4)
              for (a = y.head, js(a), y = a.firstChild; y; ) {
                var v = y.nextSibling, S = y.nodeName;
                y[Qa] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && y.rel.toLowerCase() === "stylesheet" || a.removeChild(y), y = v;
              }
          }
          if (u === 0) {
            t.removeChild(c), Hs(e);
            return;
          }
          u--;
        } else
          a === "$" || a === "$?" || a === "$!" ? u++ : r = a.charCodeAt(0) - 48;
      else r = 0;
      a = c;
    } while (a);
    Hs(e);
  }
  function hc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var a = e;
      switch (e = e.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          hc(a), bo(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(a);
    }
  }
  function Nx(t, e, a, r) {
    for (; t.nodeType === 1; ) {
      var u = a;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!r && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (r) {
        if (!t[Qa])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (c = t.getAttribute("rel"), c === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (c !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (c = t.getAttribute("src"), (c !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && c && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var c = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === c)
          return t;
      } else return t;
      if (t = Je(t.nextSibling), t === null) break;
    }
    return null;
  }
  function jx(t, e, a) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = Je(t.nextSibling), t === null)) return null;
    return t;
  }
  function pc(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete";
  }
  function _x(t, e) {
    var a = t.ownerDocument;
    if (t.data !== "$?" || a.readyState === "complete")
      e();
    else {
      var r = function() {
        e(), a.removeEventListener("DOMContentLoaded", r);
      };
      a.addEventListener("DOMContentLoaded", r), t._reactRetry = r;
    }
  }
  function Je(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var yc = null;
  function Xp(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (e === 0) return t;
          e--;
        } else a === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Kp(t, e, a) {
    switch (e = yl(a), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(o(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(o(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  function js(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    bo(t);
  }
  var Xe = /* @__PURE__ */ new Map(), Qp = /* @__PURE__ */ new Set();
  function gl(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Cn = z.d;
  z.d = {
    f: zx,
    r: Ux,
    D: Vx,
    C: Bx,
    L: Lx,
    m: kx,
    X: qx,
    S: Hx,
    M: Px
  };
  function zx() {
    var t = Cn.f(), e = ol();
    return t || e;
  }
  function Ux(t) {
    var e = Pi(t);
    e !== null && e.tag === 5 && e.type === "form" ? dh(e) : Cn.r(t);
  }
  var Ta = typeof document > "u" ? null : document;
  function Zp(t, e, a) {
    var r = Ta;
    if (r && typeof e == "string" && e) {
      var u = Le(e);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof a == "string" && (u += '[crossorigin="' + a + '"]'), Qp.has(u) || (Qp.add(u), t = { rel: t, crossOrigin: a, href: e }, r.querySelector(u) === null && (e = r.createElement("link"), oe(e, "link", t), ne(e), r.head.appendChild(e)));
    }
  }
  function Vx(t) {
    Cn.D(t), Zp("dns-prefetch", t, null);
  }
  function Bx(t, e) {
    Cn.C(t, e), Zp("preconnect", t, e);
  }
  function Lx(t, e, a) {
    Cn.L(t, e, a);
    var r = Ta;
    if (r && t && e) {
      var u = 'link[rel="preload"][as="' + Le(e) + '"]';
      e === "image" && a && a.imageSrcSet ? (u += '[imagesrcset="' + Le(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (u += '[imagesizes="' + Le(
        a.imageSizes
      ) + '"]')) : u += '[href="' + Le(t) + '"]';
      var c = u;
      switch (e) {
        case "style":
          c = wa(t);
          break;
        case "script":
          c = Aa(t);
      }
      Xe.has(c) || (t = b(
        {
          rel: "preload",
          href: e === "image" && a && a.imageSrcSet ? void 0 : t,
          as: e
        },
        a
      ), Xe.set(c, t), r.querySelector(u) !== null || e === "style" && r.querySelector(_s(c)) || e === "script" && r.querySelector(zs(c)) || (e = r.createElement("link"), oe(e, "link", t), ne(e), r.head.appendChild(e)));
    }
  }
  function kx(t, e) {
    Cn.m(t, e);
    var a = Ta;
    if (a && t) {
      var r = e && typeof e.as == "string" ? e.as : "script", u = 'link[rel="modulepreload"][as="' + Le(r) + '"][href="' + Le(t) + '"]', c = u;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = Aa(t);
      }
      if (!Xe.has(c) && (t = b({ rel: "modulepreload", href: t }, e), Xe.set(c, t), a.querySelector(u) === null)) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(zs(c)))
              return;
        }
        r = a.createElement("link"), oe(r, "link", t), ne(r), a.head.appendChild(r);
      }
    }
  }
  function Hx(t, e, a) {
    Cn.S(t, e, a);
    var r = Ta;
    if (r && t) {
      var u = Yi(r).hoistableStyles, c = wa(t);
      e = e || "default";
      var y = u.get(c);
      if (!y) {
        var v = { loading: 0, preload: null };
        if (y = r.querySelector(
          _s(c)
        ))
          v.loading = 5;
        else {
          t = b(
            { rel: "stylesheet", href: t, "data-precedence": e },
            a
          ), (a = Xe.get(c)) && gc(t, a);
          var S = y = r.createElement("link");
          ne(S), oe(S, "link", t), S._p = new Promise(function(D, k) {
            S.onload = D, S.onerror = k;
          }), S.addEventListener("load", function() {
            v.loading |= 1;
          }), S.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, vl(y, e, r);
        }
        y = {
          type: "stylesheet",
          instance: y,
          count: 1,
          state: v
        }, u.set(c, y);
      }
    }
  }
  function qx(t, e) {
    Cn.X(t, e);
    var a = Ta;
    if (a && t) {
      var r = Yi(a).hoistableScripts, u = Aa(t), c = r.get(u);
      c || (c = a.querySelector(zs(u)), c || (t = b({ src: t, async: !0 }, e), (e = Xe.get(u)) && vc(t, e), c = a.createElement("script"), ne(c), oe(c, "link", t), a.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, r.set(u, c));
    }
  }
  function Px(t, e) {
    Cn.M(t, e);
    var a = Ta;
    if (a && t) {
      var r = Yi(a).hoistableScripts, u = Aa(t), c = r.get(u);
      c || (c = a.querySelector(zs(u)), c || (t = b({ src: t, async: !0, type: "module" }, e), (e = Xe.get(u)) && vc(t, e), c = a.createElement("script"), ne(c), oe(c, "link", t), a.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, r.set(u, c));
    }
  }
  function Fp(t, e, a, r) {
    var u = (u = $.current) ? gl(u) : null;
    if (!u) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (e = wa(a.href), a = Yi(
          u
        ).hoistableStyles, r = a.get(e), r || (r = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(e, r)), r) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          t = wa(a.href);
          var c = Yi(
            u
          ).hoistableStyles, y = c.get(t);
          if (y || (u = u.ownerDocument || u, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(t, y), (c = u.querySelector(
            _s(t)
          )) && !c._p && (y.instance = c, y.state.loading = 5), Xe.has(t) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Xe.set(t, a), c || Yx(
            u,
            t,
            a,
            y.state
          ))), e && r === null)
            throw Error(o(528, ""));
          return y;
        }
        if (e && r !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Aa(a), a = Yi(
          u
        ).hoistableScripts, r = a.get(e), r || (r = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(e, r)), r) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, t));
    }
  }
  function wa(t) {
    return 'href="' + Le(t) + '"';
  }
  function _s(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Wp(t) {
    return b({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Yx(t, e, a, r) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? r.loading = 1 : (e = t.createElement("link"), r.preload = e, e.addEventListener("load", function() {
      return r.loading |= 1;
    }), e.addEventListener("error", function() {
      return r.loading |= 2;
    }), oe(e, "link", a), ne(e), t.head.appendChild(e));
  }
  function Aa(t) {
    return '[src="' + Le(t) + '"]';
  }
  function zs(t) {
    return "script[async]" + t;
  }
  function Jp(t, e, a) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var r = t.querySelector(
            'style[data-href~="' + Le(a.href) + '"]'
          );
          if (r)
            return e.instance = r, ne(r), r;
          var u = b({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return r = (t.ownerDocument || t).createElement(
            "style"
          ), ne(r), oe(r, "style", u), vl(r, a.precedence, t), e.instance = r;
        case "stylesheet":
          u = wa(a.href);
          var c = t.querySelector(
            _s(u)
          );
          if (c)
            return e.state.loading |= 4, e.instance = c, ne(c), c;
          r = Wp(a), (u = Xe.get(u)) && gc(r, u), c = (t.ownerDocument || t).createElement("link"), ne(c);
          var y = c;
          return y._p = new Promise(function(v, S) {
            y.onload = v, y.onerror = S;
          }), oe(c, "link", r), e.state.loading |= 4, vl(c, a.precedence, t), e.instance = c;
        case "script":
          return c = Aa(a.src), (u = t.querySelector(
            zs(c)
          )) ? (e.instance = u, ne(u), u) : (r = a, (u = Xe.get(c)) && (r = b({}, a), vc(r, u)), t = t.ownerDocument || t, u = t.createElement("script"), ne(u), oe(u, "link", r), t.head.appendChild(u), e.instance = u);
        case "void":
          return null;
        default:
          throw Error(o(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (r = e.instance, e.state.loading |= 4, vl(r, a.precedence, t));
    return e.instance;
  }
  function vl(t, e, a) {
    for (var r = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = r.length ? r[r.length - 1] : null, c = u, y = 0; y < r.length; y++) {
      var v = r[y];
      if (v.dataset.precedence === e) c = v;
      else if (c !== u) break;
    }
    c ? c.parentNode.insertBefore(t, c.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild));
  }
  function gc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function vc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var bl = null;
  function $p(t, e, a) {
    if (bl === null) {
      var r = /* @__PURE__ */ new Map(), u = bl = /* @__PURE__ */ new Map();
      u.set(a, r);
    } else
      u = bl, r = u.get(a), r || (r = /* @__PURE__ */ new Map(), u.set(a, r));
    if (r.has(t)) return r;
    for (r.set(t, null), a = a.getElementsByTagName(t), u = 0; u < a.length; u++) {
      var c = a[u];
      if (!(c[Qa] || c[ce] || t === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = c.getAttribute(e) || "";
        y = t + y;
        var v = r.get(y);
        v ? v.push(c) : r.set(y, [c]);
      }
    }
    return r;
  }
  function Ip(t, e, a) {
    t = t.ownerDocument || t, t.head.insertBefore(
      a,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function Gx(t, e, a) {
    if (a === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function ty(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Us = null;
  function Xx() {
  }
  function Kx(t, e, a) {
    if (Us === null) throw Error(o(475));
    var r = Us;
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var u = wa(a.href), c = t.querySelector(
          _s(u)
        );
        if (c) {
          t = c._p, t !== null && typeof t == "object" && typeof t.then == "function" && (r.count++, r = xl.bind(r), t.then(r, r)), e.state.loading |= 4, e.instance = c, ne(c);
          return;
        }
        c = t.ownerDocument || t, a = Wp(a), (u = Xe.get(u)) && gc(a, u), c = c.createElement("link"), ne(c);
        var y = c;
        y._p = new Promise(function(v, S) {
          y.onload = v, y.onerror = S;
        }), oe(c, "link", a), e.instance = c;
      }
      r.stylesheets === null && (r.stylesheets = /* @__PURE__ */ new Map()), r.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (r.count++, e = xl.bind(r), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  function Qx() {
    if (Us === null) throw Error(o(475));
    var t = Us;
    return t.stylesheets && t.count === 0 && bc(t, t.stylesheets), 0 < t.count ? function(e) {
      var a = setTimeout(function() {
        if (t.stylesheets && bc(t, t.stylesheets), t.unsuspend) {
          var r = t.unsuspend;
          t.unsuspend = null, r();
        }
      }, 6e4);
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function xl() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) bc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Sl = null;
  function bc(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Sl = /* @__PURE__ */ new Map(), e.forEach(Zx, t), Sl = null, xl.call(t));
  }
  function Zx(t, e) {
    if (!(e.state.loading & 4)) {
      var a = Sl.get(t);
      if (a) var r = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Sl.set(t, a);
        for (var u = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < u.length; c++) {
          var y = u[c];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (a.set(y.dataset.precedence, y), r = y);
        }
        r && a.set(null, r);
      }
      u = e.instance, y = u.getAttribute("data-precedence"), c = a.get(y) || r, c === r && a.set(null, u), a.set(y, u), this.count++, r = xl.bind(this), u.addEventListener("load", r), u.addEventListener("error", r), c ? c.parentNode.insertBefore(u, c.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Vs = {
    $$typeof: W,
    Provider: null,
    Consumer: null,
    _currentValue: ft,
    _currentValue2: ft,
    _threadCount: 0
  };
  function Fx(t, e, a, r, u, c, y, v) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = po(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = po(0), this.hiddenUpdates = po(null), this.identifierPrefix = r, this.onUncaughtError = u, this.onCaughtError = c, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ey(t, e, a, r, u, c, y, v, S, D, k, P) {
    return t = new Fx(
      t,
      e,
      a,
      y,
      v,
      S,
      D,
      P
    ), e = 1, c === !0 && (e |= 24), c = Ne(3, null, null, e), t.current = c, c.stateNode = t, e = tu(), e.refCount++, t.pooledCache = e, e.refCount++, c.memoizedState = {
      element: r,
      isDehydrated: a,
      cache: e
    }, au(c), t;
  }
  function ny(t) {
    return t ? (t = ea, t) : ea;
  }
  function iy(t, e, a, r, u, c) {
    u = ny(u), r.context === null ? r.context = u : r.pendingContext = u, r = Ln(e), r.payload = { element: a }, c = c === void 0 ? null : c, c !== null && (r.callback = c), a = kn(t, r, e), a !== null && (Ve(a, t, e), ms(a, t, e));
  }
  function ay(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < e ? a : e;
    }
  }
  function xc(t, e) {
    ay(t, e), (t = t.alternate) && ay(t, e);
  }
  function sy(t) {
    if (t.tag === 13) {
      var e = ta(t, 67108864);
      e !== null && Ve(e, t, 67108864), xc(t, 67108864);
    }
  }
  var Tl = !0;
  function Wx(t, e, a, r) {
    var u = L.T;
    L.T = null;
    var c = z.p;
    try {
      z.p = 2, Sc(t, e, a, r);
    } finally {
      z.p = c, L.T = u;
    }
  }
  function Jx(t, e, a, r) {
    var u = L.T;
    L.T = null;
    var c = z.p;
    try {
      z.p = 8, Sc(t, e, a, r);
    } finally {
      z.p = c, L.T = u;
    }
  }
  function Sc(t, e, a, r) {
    if (Tl) {
      var u = Tc(r);
      if (u === null)
        oc(
          t,
          e,
          r,
          wl,
          a
        ), ly(t, r);
      else if (Ix(
        u,
        t,
        e,
        a,
        r
      ))
        r.stopPropagation();
      else if (ly(t, r), e & 4 && -1 < $x.indexOf(t)) {
        for (; u !== null; ) {
          var c = Pi(u);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var y = fi(c.pendingLanes);
                  if (y !== 0) {
                    var v = c;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; y; ) {
                      var S = 1 << 31 - Ce(y);
                      v.entanglements[1] |= S, y &= ~S;
                    }
                    cn(c), (Rt & 6) === 0 && (rl = sn() + 500, Cs(0));
                  }
                }
                break;
              case 13:
                v = ta(c, 2), v !== null && Ve(v, c, 2), ol(), xc(c, 2);
            }
          if (c = Tc(r), c === null && oc(
            t,
            e,
            r,
            wl,
            a
          ), c === u) break;
          u = c;
        }
        u !== null && r.stopPropagation();
      } else
        oc(
          t,
          e,
          r,
          null,
          a
        );
    }
  }
  function Tc(t) {
    return t = Ro(t), wc(t);
  }
  var wl = null;
  function wc(t) {
    if (wl = null, t = qi(t), t !== null) {
      var e = f(t);
      if (e === null) t = null;
      else {
        var a = e.tag;
        if (a === 13) {
          if (t = d(e), t !== null) return t;
          t = null;
        } else if (a === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return wl = t, null;
  }
  function ry(t) {
    switch (t) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Bb()) {
          case xm:
            return 2;
          case Sm:
            return 8;
          case pr:
          case Lb:
            return 32;
          case Tm:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ac = !1, $n = null, In = null, ti = null, Bs = /* @__PURE__ */ new Map(), Ls = /* @__PURE__ */ new Map(), ei = [], $x = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function ly(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        $n = null;
        break;
      case "dragenter":
      case "dragleave":
        In = null;
        break;
      case "mouseover":
      case "mouseout":
        ti = null;
        break;
      case "pointerover":
      case "pointerout":
        Bs.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ls.delete(e.pointerId);
    }
  }
  function ks(t, e, a, r, u, c) {
    return t === null || t.nativeEvent !== c ? (t = {
      blockedOn: e,
      domEventName: a,
      eventSystemFlags: r,
      nativeEvent: c,
      targetContainers: [u]
    }, e !== null && (e = Pi(e), e !== null && sy(e)), t) : (t.eventSystemFlags |= r, e = t.targetContainers, u !== null && e.indexOf(u) === -1 && e.push(u), t);
  }
  function Ix(t, e, a, r, u) {
    switch (e) {
      case "focusin":
        return $n = ks(
          $n,
          t,
          e,
          a,
          r,
          u
        ), !0;
      case "dragenter":
        return In = ks(
          In,
          t,
          e,
          a,
          r,
          u
        ), !0;
      case "mouseover":
        return ti = ks(
          ti,
          t,
          e,
          a,
          r,
          u
        ), !0;
      case "pointerover":
        var c = u.pointerId;
        return Bs.set(
          c,
          ks(
            Bs.get(c) || null,
            t,
            e,
            a,
            r,
            u
          )
        ), !0;
      case "gotpointercapture":
        return c = u.pointerId, Ls.set(
          c,
          ks(
            Ls.get(c) || null,
            t,
            e,
            a,
            r,
            u
          )
        ), !0;
    }
    return !1;
  }
  function oy(t) {
    var e = qi(t.target);
    if (e !== null) {
      var a = f(e);
      if (a !== null) {
        if (e = a.tag, e === 13) {
          if (e = d(a), e !== null) {
            t.blockedOn = e, Kb(t.priority, function() {
              if (a.tag === 13) {
                var r = Ue();
                r = yo(r);
                var u = ta(a, r);
                u !== null && Ve(u, a, r), xc(a, r);
              }
            });
            return;
          }
        } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Al(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var a = Tc(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var r = new a.constructor(
          a.type,
          a
        );
        Mo = r, a.target.dispatchEvent(r), Mo = null;
      } else
        return e = Pi(a), e !== null && sy(e), t.blockedOn = a, !1;
      e.shift();
    }
    return !0;
  }
  function uy(t, e, a) {
    Al(t) && a.delete(e);
  }
  function tS() {
    Ac = !1, $n !== null && Al($n) && ($n = null), In !== null && Al(In) && (In = null), ti !== null && Al(ti) && (ti = null), Bs.forEach(uy), Ls.forEach(uy);
  }
  function El(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Ac || (Ac = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      tS
    )));
  }
  var Ml = null;
  function cy(t) {
    Ml !== t && (Ml = t, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        Ml === t && (Ml = null);
        for (var e = 0; e < t.length; e += 3) {
          var a = t[e], r = t[e + 1], u = t[e + 2];
          if (typeof r != "function") {
            if (wc(r || a) === null)
              continue;
            break;
          }
          var c = Pi(a);
          c !== null && (t.splice(e, 3), e -= 3, wu(
            c,
            {
              pending: !0,
              data: u,
              method: a.method,
              action: r
            },
            r,
            u
          ));
        }
      }
    ));
  }
  function Hs(t) {
    function e(S) {
      return El(S, t);
    }
    $n !== null && El($n, t), In !== null && El(In, t), ti !== null && El(ti, t), Bs.forEach(e), Ls.forEach(e);
    for (var a = 0; a < ei.length; a++) {
      var r = ei[a];
      r.blockedOn === t && (r.blockedOn = null);
    }
    for (; 0 < ei.length && (a = ei[0], a.blockedOn === null); )
      oy(a), a.blockedOn === null && ei.shift();
    if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
      for (r = 0; r < a.length; r += 3) {
        var u = a[r], c = a[r + 1], y = u[xe] || null;
        if (typeof c == "function")
          y || cy(a);
        else if (y) {
          var v = null;
          if (c && c.hasAttribute("formAction")) {
            if (u = c, y = c[xe] || null)
              v = y.formAction;
            else if (wc(u) !== null) continue;
          } else v = y.action;
          typeof v == "function" ? a[r + 1] = v : (a.splice(r, 3), r -= 3), cy(a);
        }
      }
  }
  function Ec(t) {
    this._internalRoot = t;
  }
  Rl.prototype.render = Ec.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(o(409));
    var a = e.current, r = Ue();
    iy(a, r, t, e, null, null);
  }, Rl.prototype.unmount = Ec.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      iy(t.current, 2, null, t, null, null), ol(), e[Hi] = null;
    }
  };
  function Rl(t) {
    this._internalRoot = t;
  }
  Rl.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Rm();
      t = { blockedOn: null, target: t, priority: e };
      for (var a = 0; a < ei.length && e !== 0 && e < ei[a].priority; a++) ;
      ei.splice(a, 0, t), a === 0 && oy(t);
    }
  };
  var fy = s.version;
  if (fy !== "19.1.0")
    throw Error(
      o(
        527,
        fy,
        "19.1.0"
      )
    );
  z.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
    return t = h(e), t = t !== null ? g(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var eS = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: L,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ol = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ol.isDisabled && Ol.supportsFiber)
      try {
        Ga = Ol.inject(
          eS
        ), Oe = Ol;
      } catch {
      }
  }
  return Ps.createRoot = function(t, e) {
    if (!m(t)) throw Error(o(299));
    var a = !1, r = "", u = Rh, c = Oh, y = Ch, v = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (r = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (c = e.onCaughtError), e.onRecoverableError !== void 0 && (y = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (v = e.unstable_transitionCallbacks)), e = ey(
      t,
      1,
      !1,
      null,
      null,
      a,
      r,
      u,
      c,
      y,
      v,
      null
    ), t[Hi] = e.current, lc(t), new Ec(e);
  }, Ps.hydrateRoot = function(t, e, a) {
    if (!m(t)) throw Error(o(299));
    var r = !1, u = "", c = Rh, y = Oh, v = Ch, S = null, D = null;
    return a != null && (a.unstable_strictMode === !0 && (r = !0), a.identifierPrefix !== void 0 && (u = a.identifierPrefix), a.onUncaughtError !== void 0 && (c = a.onUncaughtError), a.onCaughtError !== void 0 && (y = a.onCaughtError), a.onRecoverableError !== void 0 && (v = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (S = a.unstable_transitionCallbacks), a.formState !== void 0 && (D = a.formState)), e = ey(
      t,
      1,
      !0,
      e,
      a ?? null,
      r,
      u,
      c,
      y,
      v,
      S,
      D
    ), e.context = ny(null), a = e.current, r = Ue(), r = yo(r), u = Ln(r), u.callback = null, kn(a, u, r), a = r, e.current.lanes = a, Ka(e, a), cn(e), t[Hi] = e.current, lc(t), new Rl(e);
  }, Ps.version = "19.1.0", Ps;
}
var Sy;
function fS() {
  if (Sy) return Rc.exports;
  Sy = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), Rc.exports = cS(), Rc.exports;
}
var mS = fS();
const dS = /* @__PURE__ */ c0(mS);
var G = _f();
const Ie = /* @__PURE__ */ c0(G), Ty = (n) => {
  let i;
  const s = /* @__PURE__ */ new Set(), l = (h, g) => {
    const b = typeof h == "function" ? h(i) : h;
    if (!Object.is(b, i)) {
      const x = i;
      i = g ?? (typeof b != "object" || b === null) ? b : Object.assign({}, i, b), s.forEach((C) => C(i, x));
    }
  }, o = () => i, d = { setState: l, getState: o, getInitialState: () => p, subscribe: (h) => (s.add(h), () => s.delete(h)) }, p = i = n(l, o, d);
  return d;
}, hS = (n) => n ? Ty(n) : Ty, pS = (n) => n;
function yS(n, i = pS) {
  const s = Ie.useSyncExternalStore(
    n.subscribe,
    () => i(n.getState()),
    () => i(n.getInitialState())
  );
  return Ie.useDebugValue(s), s;
}
const gS = (n) => {
  const i = hS(n), s = (l) => yS(i, l);
  return Object.assign(s, i), s;
}, zf = (n) => gS;
function vS(n, i) {
  let s;
  try {
    s = n();
  } catch {
    return;
  }
  return {
    getItem: (o) => {
      var m;
      const f = (p) => p === null ? null : JSON.parse(p, void 0), d = (m = s.getItem(o)) != null ? m : null;
      return d instanceof Promise ? d.then(f) : f(d);
    },
    setItem: (o, m) => s.setItem(o, JSON.stringify(m, void 0)),
    removeItem: (o) => s.removeItem(o)
  };
}
const tf = (n) => (i) => {
  try {
    const s = n(i);
    return s instanceof Promise ? s : {
      then(l) {
        return tf(l)(s);
      },
      catch(l) {
        return this;
      }
    };
  } catch (s) {
    return {
      then(l) {
        return this;
      },
      catch(l) {
        return tf(l)(s);
      }
    };
  }
}, bS = (n, i) => (s, l, o) => {
  let m = {
    storage: vS(() => localStorage),
    partialize: (R) => R,
    version: 0,
    merge: (R, N) => ({
      ...N,
      ...R
    }),
    ...i
  }, f = !1;
  const d = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set();
  let h = m.storage;
  if (!h)
    return n(
      (...R) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${m.name}', the given storage is currently unavailable.`
        ), s(...R);
      },
      l,
      o
    );
  const g = () => {
    const R = m.partialize({ ...l() });
    return h.setItem(m.name, {
      state: R,
      version: m.version
    });
  }, b = o.setState;
  o.setState = (R, N) => {
    b(R, N), g();
  };
  const x = n(
    (...R) => {
      s(...R), g();
    },
    l,
    o
  );
  o.getInitialState = () => x;
  let C;
  const E = () => {
    var R, N;
    if (!h) return;
    f = !1, d.forEach((B) => {
      var H;
      return B((H = l()) != null ? H : x);
    });
    const V = ((N = m.onRehydrateStorage) == null ? void 0 : N.call(m, (R = l()) != null ? R : x)) || void 0;
    return tf(h.getItem.bind(h))(m.name).then((B) => {
      if (B)
        if (typeof B.version == "number" && B.version !== m.version) {
          if (m.migrate) {
            const H = m.migrate(
              B.state,
              B.version
            );
            return H instanceof Promise ? H.then((W) => [!0, W]) : [!0, H];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, B.state];
      return [!1, void 0];
    }).then((B) => {
      var H;
      const [W, Z] = B;
      if (C = m.merge(
        Z,
        (H = l()) != null ? H : x
      ), s(C, !0), W)
        return g();
    }).then(() => {
      V?.(C, void 0), C = l(), f = !0, p.forEach((B) => B(C));
    }).catch((B) => {
      V?.(void 0, B);
    });
  };
  return o.persist = {
    setOptions: (R) => {
      m = {
        ...m,
        ...R
      }, R.storage && (h = R.storage);
    },
    clearStorage: () => {
      h?.removeItem(m.name);
    },
    getOptions: () => m,
    rehydrate: () => E(),
    hasHydrated: () => f,
    onHydrate: (R) => (d.add(R), () => {
      d.delete(R);
    }),
    onFinishHydration: (R) => (p.add(R), () => {
      p.delete(R);
    })
  }, m.skipHydration || E(), C || x;
}, Uf = bS, Ua = zf()(
  Uf(
    (n) => ({
      config: null,
      signature: "",
      setConfig: (i) => n({ config: i }),
      setSignature: (i) => n({ signature: i })
    }),
    {
      name: "config-store"
    }
  )
), f0 = zf()(
  Uf(
    (n, i) => ({
      interactions: [],
      chatType: null,
      setInteractions: (s) => n({ interactions: s }),
      addInteraction: (s) => n((l) => ({
        interactions: [s, ...l.interactions]
      })),
      updateAiInteractionByIndex: (s, l) => {
        n((o) => ({
          interactions: o.interactions.map(
            (m, f) => f === s ? { ...m, ai: { ...m.ai, ...l } } : m
          )
        }));
      },
      setChatType: (s) => n({ chatType: s }),
      clearInteractions: () => n({ interactions: [] })
    }),
    {
      name: "interactions-store"
    }
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xS = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), SS = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (i, s, l) => l ? l.toUpperCase() : s.toLowerCase()
), wy = (n) => {
  const i = SS(n);
  return i.charAt(0).toUpperCase() + i.slice(1);
}, m0 = (...n) => n.filter((i, s, l) => !!i && i.trim() !== "" && l.indexOf(i) === s).join(" ").trim(), TS = (n) => {
  for (const i in n)
    if (i.startsWith("aria-") || i === "role" || i === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var wS = {
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
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AS = G.forwardRef(
  ({
    color: n = "currentColor",
    size: i = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: l,
    className: o = "",
    children: m,
    iconNode: f,
    ...d
  }, p) => G.createElement(
    "svg",
    {
      ref: p,
      ...wS,
      width: i,
      height: i,
      stroke: n,
      strokeWidth: l ? Number(s) * 24 / Number(i) : s,
      className: m0("lucide", o),
      ...!m && !TS(d) && { "aria-hidden": "true" },
      ...d
    },
    [
      ...f.map(([h, g]) => G.createElement(h, g)),
      ...Array.isArray(m) ? m : [m]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Va = (n, i) => {
  const s = G.forwardRef(
    ({ className: l, ...o }, m) => G.createElement(AS, {
      ref: m,
      iconNode: i,
      className: m0(
        `lucide-${xS(wy(n))}`,
        `lucide-${n}`,
        l
      ),
      ...o
    })
  );
  return s.displayName = wy(n), s;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ES = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
], MS = Va("bot", ES);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RS = [
  ["path", { d: "M18 20a6 6 0 0 0-12 0", key: "1qehca" }],
  ["circle", { cx: "12", cy: "10", r: "4", key: "1h16sb" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], OS = Va("circle-user-round", RS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CS = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], ef = Va("eye-off", CS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DS = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], nf = Va("eye", DS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NS = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], d0 = Va("triangle-alert", NS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jS = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], _S = Va("x", jS), zS = ({ onClickCreateAccount: n }) => {
  const [i, s] = G.useState({
    email: "",
    password: "",
    rememberMe: !1
  }), [l, o] = G.useState(null), [m, f] = G.useState(!1), d = (p) => {
    s({ ...i, [p.target.name]: p.target.value });
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "mimin-mt-10", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "mimin-space-y-2", children: [
      /* @__PURE__ */ A.jsx("h2", { className: "mimin-text-base mimin-font-bold", children: "Hi, Welcome Back!" }),
      /* @__PURE__ */ A.jsx("p", { className: "mimin-text-sm mimin-text-gray-500", children: "Log in to access your account and continue your activity." })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "mimin-space-y-2 mimin-mt-6", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "mimin-flex mimin-flex-col mimin-gap-1", children: [
        /* @__PURE__ */ A.jsx("label", { htmlFor: "email", className: "mimin-text-sm mimin-font-medium", children: "Email" }),
        /* @__PURE__ */ A.jsx(
          "input",
          {
            type: "text",
            name: "email",
            value: i.email,
            onChange: d,
            autoComplete: "off",
            className: "mimin-border mimin-border-[#0096A2] mimin-rounded-md mimin-p-2 mimin-focus:outline mimin-focus:outline-2 mimin-focus:outline-[#0096A2]"
          }
        )
      ] }),
      /* @__PURE__ */ A.jsxs("div", { className: "mimin-flex mimin-flex-col mimin-gap-1", children: [
        /* @__PURE__ */ A.jsx("label", { htmlFor: "password", className: "mimin-text-sm mimin-font-medium", children: "Password" }),
        /* @__PURE__ */ A.jsxs("div", { className: "mimin-relative", children: [
          /* @__PURE__ */ A.jsx(
            "input",
            {
              type: m ? "text" : "password",
              name: "password",
              value: i.password,
              onChange: d,
              autoComplete: "off",
              className: "mimin-border mimin-border-[#0096A2] mimin-rounded-md mimin-p-2 mimin-focus:outline mimin-focus:outline-2 mimin-focus:outline-[#0096A2] mimin-w-full"
            }
          ),
          /* @__PURE__ */ A.jsx(
            "button",
            {
              className: "mimin-absolute mimin-right-2.5 mimin-top-1/2 -mimin-translate-y-1/2",
              onClick: () => f((p) => !p),
              children: m ? /* @__PURE__ */ A.jsx(nf, { className: "mimin-w-4 mimin-h-4" }) : /* @__PURE__ */ A.jsx(ef, { className: "mimin-w-4 mimin-h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { className: "mimin-flex mimin-items-start mimin-justify-between mimin-gap-3 mimin-py-2", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "mimin-flex mimin-items-center mimin-gap-2", children: [
          /* @__PURE__ */ A.jsx(
            "input",
            {
              type: "checkbox",
              name: "acceptTerms",
              id: "acceptTerms",
              checked: i.rememberMe,
              onChange: (p) => s({ ...i, rememberMe: p.target.checked }),
              className: "mimin-size-3.5 mimin-accent-[#0096A2]"
            }
          ),
          /* @__PURE__ */ A.jsx(
            "label",
            {
              className: "mimin-block mimin-text-xs mimin-text-gray-500",
              htmlFor: "acceptTerms",
              children: "Remember me"
            }
          )
        ] }),
        /* @__PURE__ */ A.jsx("button", { className: "mimin-block mimin-text-xs mimin-text-gray-500 mimin-cursor-pointer mimin-underline", children: "Forgot password?" })
      ] }),
      l && /* @__PURE__ */ A.jsxs("div", { className: "mimin-flex mimin-items-start mimin-gap-3 mimin-bg-[#F26075]/10 mimin-p-2 mimin-rounded-md mimin-mt-5 mimin-border mimin-border-[#F26075]/20", children: [
        /* @__PURE__ */ A.jsx("div", { className: "mimin-flex mimin-items-start mimin-justify-center mimin-pt-1", children: /* @__PURE__ */ A.jsx(d0, { className: "mimin-w-4 mimin-h-4 mimin-text-[#F26075]" }) }),
        /* @__PURE__ */ A.jsx("p", { className: "mimin-text-[#F26075] mimin-text-sm", children: l })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { className: "mimin-flex mimin-flex-col mimin-gap-1.5 mimin-pt-4 mimin-pb-6", children: [
        /* @__PURE__ */ A.jsx("button", { className: "mimin-bg-[#0096A2] mimin-text-white mimin-px-4 mimin-py-2 mimin-rounded-md mimin-w-full mimin-cursor-pointer mimin-disabled:opacity-50 mimin-disabled:cursor-not-allowed", children: "Sign In" }),
        /* @__PURE__ */ A.jsxs("div", { className: "mimin-text-xs mimin-text-center mimin-text-gray-500", children: [
          "Don't have an account?",
          " ",
          /* @__PURE__ */ A.jsx(
            "button",
            {
              onClick: n,
              className: "mimin-inline mimin-text-[#0096A2] mimin-underline mimin-cursor-pointer",
              children: "Create an account"
            }
          )
        ] })
      ] })
    ] })
  ] });
}, US = ({ onClickSignin: n }) => {
  const [i, s] = G.useState({
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: !1
  }), [l, o] = G.useState(!1), [m, f] = G.useState(!1), [d, p] = G.useState(null), h = (g) => {
    s({ ...i, [g.target.name]: g.target.value });
  };
  return /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
    /* @__PURE__ */ A.jsx("div", { className: "mimin-flex mimin-justify-center mimin-items-center mimin-w-full mimin-h-auto", children: /* @__PURE__ */ A.jsx(
      "img",
      {
        src: "https://res.cloudinary.com/dctqloe37/image/upload/v1752455653/undraw_chat_qmyo_1_wwzcjj.svg",
        alt: " ",
        width: 1e3,
        height: 1e3,
        loading: "lazy",
        className: "mimin-w-full mimin-h-auto mimin-object-contain mimin-object-center"
      }
    ) }),
    /* @__PURE__ */ A.jsxs("div", { className: "mimin-mt-10", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "mimin-space-y-2", children: [
        /* @__PURE__ */ A.jsx("h2", { className: "mimin-text-base mimin-font-bold", children: "Create Account" }),
        /* @__PURE__ */ A.jsx("p", { className: "mimin-text-sm mimin-text-gray-500", children: "Fill your information below to create your account" })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { className: "mimin-space-y-2 mimin-mt-6", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "mimin-flex mimin-flex-col mimin-gap-1", children: [
          /* @__PURE__ */ A.jsx(
            "label",
            {
              htmlFor: "companyName",
              className: "mimin-text-sm mimin-font-medium",
              children: "Company Name"
            }
          ),
          /* @__PURE__ */ A.jsx(
            "input",
            {
              type: "text",
              name: "companyName",
              value: i.companyName,
              onChange: h,
              autoComplete: "off",
              className: "mimin-border mimin-border-[#0096A2] mimin-rounded-md mimin-p-2 mimin-focus:outline mimin-focus:outline-2 mimin-focus:outline-[#0096A2]"
            }
          )
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "mimin-flex mimin-flex-col mimin-gap-1", children: [
          /* @__PURE__ */ A.jsx("label", { htmlFor: "email", className: "mimin-text-sm mimin-font-medium", children: "Email" }),
          /* @__PURE__ */ A.jsx(
            "input",
            {
              type: "text",
              name: "email",
              autoComplete: "off",
              value: i.email,
              onChange: h,
              className: "mimin-border mimin-border-[#0096A2] mimin-rounded-md mimin-p-2 mimin-focus:outline mimin-focus:outline-2 mimin-focus:outline-[#0096A2]"
            }
          )
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "mimin-flex mimin-flex-col mimin-gap-1", children: [
          /* @__PURE__ */ A.jsx(
            "label",
            {
              htmlFor: "password",
              className: "mimin-text-sm mimin-font-medium",
              children: "Password"
            }
          ),
          /* @__PURE__ */ A.jsxs("div", { className: "mimin-relative", children: [
            /* @__PURE__ */ A.jsx(
              "input",
              {
                type: l ? "text" : "password",
                name: "password",
                value: i.password,
                onChange: h,
                autoComplete: "off",
                className: "mimin-border mimin-border-[#0096A2] mimin-rounded-md mimin-p-2 mimin-focus:outline mimin-focus:outline-2 mimin-focus:outline-[#0096A2] mimin-w-full"
              }
            ),
            /* @__PURE__ */ A.jsx(
              "button",
              {
                className: "mimin-absolute mimin-right-2.5 mimin-top-1/2 -mimin-translate-y-1/2",
                onClick: () => o((g) => !g),
                children: l ? /* @__PURE__ */ A.jsx(nf, { className: "mimin-w-4 mimin-h-4" }) : /* @__PURE__ */ A.jsx(ef, { className: "mimin-w-4 mimin-h-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "mimin-flex mimin-flex-col mimin-gap-1", children: [
          /* @__PURE__ */ A.jsx(
            "label",
            {
              htmlFor: "confirmPassword",
              className: "mimin-text-sm mimin-font-medium",
              children: "Confirm Password"
            }
          ),
          /* @__PURE__ */ A.jsxs("div", { className: "mimin-relative", children: [
            /* @__PURE__ */ A.jsx(
              "input",
              {
                type: m ? "text" : "password",
                name: "confirmPassword",
                value: i.confirmPassword,
                onChange: h,
                autoComplete: "off",
                className: "mimin-border mimin-border-[#0096A2] mimin-rounded-md mimin-p-2 mimin-focus:outline mimin-focus:outline-2 mimin-focus:outline-[#0096A2] mimin-w-full"
              }
            ),
            /* @__PURE__ */ A.jsx(
              "button",
              {
                className: "mimin-absolute mimin-right-2.5 mimin-top-1/2 -mimin-translate-y-1/2",
                onClick: () => f((g) => !g),
                children: m ? /* @__PURE__ */ A.jsx(nf, { className: "mimin-w-4 mimin-h-4" }) : /* @__PURE__ */ A.jsx(ef, { className: "mimin-w-4 mimin-h-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "mimin-flex mimin-items-start mimin-gap-3 mimin-py-2", children: [
          /* @__PURE__ */ A.jsx(
            "input",
            {
              type: "checkbox",
              name: "acceptTerms",
              id: "acceptTerms",
              checked: i.acceptTerms,
              onChange: (g) => s({ ...i, acceptTerms: g.target.checked }),
              className: "mimin-mt-1 mimin-size-3.5 mimin-accent-[#0096A2]"
            }
          ),
          /* @__PURE__ */ A.jsxs(
            "label",
            {
              className: "mimin-block mimin-text-xs mimin-text-gray-500",
              htmlFor: "acceptTerms",
              children: [
                "By creating an account, you agree to our",
                " ",
                /* @__PURE__ */ A.jsx("a", { href: "#", className: "mimin-text-[#0096A2]", children: "Terms of Service" })
              ]
            }
          )
        ] }),
        d && /* @__PURE__ */ A.jsxs("div", { className: "mimin-flex mimin-items-start mimin-gap-3 mimin-bg-[#F26075]/10 mimin-p-2 mimin-rounded-md mimin-mt-5 mimin-border mimin-border-[#F26075]/20", children: [
          /* @__PURE__ */ A.jsx("div", { className: "mimin-flex mimin-items-start mimin-justify-center mimin-pt-1", children: /* @__PURE__ */ A.jsx(d0, { className: "mimin-w-4 mimin-h-4 mimin-text-[#F26075]" }) }),
          /* @__PURE__ */ A.jsx("p", { className: "mimin-text-[#F26075] mimin-text-sm", children: d })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "mimin-flex mimin-flex-col mimin-gap-1 mimin-pb-6", children: [
          /* @__PURE__ */ A.jsx(
            "button",
            {
              className: "mimin-bg-[#0096A2] mimin-text-white mimin-px-4 mimin-py-2 mimin-rounded-md mimin-w-full mimin-cursor-pointer mimin-disabled:opacity-50 mimin-disabled:cursor-not-allowed",
              disabled: !i.companyName || !i.email || !i.password || !i.confirmPassword || !i.acceptTerms,
              children: "Create Account"
            }
          ),
          /* @__PURE__ */ A.jsxs("div", { className: "mimin-text-xs mimin-text-center mimin-text-gray-500", children: [
            "Already have an account?",
            " ",
            /* @__PURE__ */ A.jsx(
              "button",
              {
                onClick: n,
                className: "mimin-inline mimin-text-[#0096A2] mimin-underline mimin-cursor-pointer",
                children: "Sign in"
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
}, VS = () => {
  const [n, i] = G.useState("create-account");
  return /* @__PURE__ */ A.jsxs("div", { className: "mimin-p-4 mimin-h-full mimin-overflow-y-auto", children: [
    n === "sign-in" && /* @__PURE__ */ A.jsx(zS, { onClickCreateAccount: () => i("create-account") }),
    n === "create-account" && /* @__PURE__ */ A.jsx(US, { onClickSignin: () => i("sign-in") })
  ] });
};
var h0 = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ay = Ie.createContext && /* @__PURE__ */ Ie.createContext(h0), BS = ["attr", "size", "title"];
function LS(n, i) {
  if (n == null) return {};
  var s = kS(n, i), l, o;
  if (Object.getOwnPropertySymbols) {
    var m = Object.getOwnPropertySymbols(n);
    for (o = 0; o < m.length; o++)
      l = m[o], !(i.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(n, l) && (s[l] = n[l]);
  }
  return s;
}
function kS(n, i) {
  if (n == null) return {};
  var s = {};
  for (var l in n)
    if (Object.prototype.hasOwnProperty.call(n, l)) {
      if (i.indexOf(l) >= 0) continue;
      s[l] = n[l];
    }
  return s;
}
function Gl() {
  return Gl = Object.assign ? Object.assign.bind() : function(n) {
    for (var i = 1; i < arguments.length; i++) {
      var s = arguments[i];
      for (var l in s)
        Object.prototype.hasOwnProperty.call(s, l) && (n[l] = s[l]);
    }
    return n;
  }, Gl.apply(this, arguments);
}
function Ey(n, i) {
  var s = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(n);
    i && (l = l.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), s.push.apply(s, l);
  }
  return s;
}
function Xl(n) {
  for (var i = 1; i < arguments.length; i++) {
    var s = arguments[i] != null ? arguments[i] : {};
    i % 2 ? Ey(Object(s), !0).forEach(function(l) {
      HS(n, l, s[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : Ey(Object(s)).forEach(function(l) {
      Object.defineProperty(n, l, Object.getOwnPropertyDescriptor(s, l));
    });
  }
  return n;
}
function HS(n, i, s) {
  return i = qS(i), i in n ? Object.defineProperty(n, i, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : n[i] = s, n;
}
function qS(n) {
  var i = PS(n, "string");
  return typeof i == "symbol" ? i : i + "";
}
function PS(n, i) {
  if (typeof n != "object" || !n) return n;
  var s = n[Symbol.toPrimitive];
  if (s !== void 0) {
    var l = s.call(n, i);
    if (typeof l != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(n);
}
function p0(n) {
  return n && n.map((i, s) => /* @__PURE__ */ Ie.createElement(i.tag, Xl({
    key: s
  }, i.attr), p0(i.child)));
}
function to(n) {
  return (i) => /* @__PURE__ */ Ie.createElement(YS, Gl({
    attr: Xl({}, n.attr)
  }, i), p0(n.child));
}
function YS(n) {
  var i = (s) => {
    var {
      attr: l,
      size: o,
      title: m
    } = n, f = LS(n, BS), d = o || s.size || "1em", p;
    return s.className && (p = s.className), n.className && (p = (p ? p + " " : "") + n.className), /* @__PURE__ */ Ie.createElement("svg", Gl({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, s.attr, l, f, {
      className: p,
      style: Xl(Xl({
        color: n.color || s.color
      }, s.style), n.style),
      height: d,
      width: d,
      xmlns: "http://www.w3.org/2000/svg"
    }), m && /* @__PURE__ */ Ie.createElement("title", null, m), n.children);
  };
  return Ay !== void 0 ? /* @__PURE__ */ Ie.createElement(Ay.Consumer, null, (s) => i(s)) : i(h0);
}
function GS(n) {
  return to({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M6.758 8.758 5.344 7.344a8.048 8.048 0 0 0-1.841 2.859l1.873.701a6.048 6.048 0 0 1 1.382-2.146zM19 12.999a7.935 7.935 0 0 0-2.344-5.655A7.917 7.917 0 0 0 12 5.069V2L7 6l5 4V7.089a5.944 5.944 0 0 1 3.242 1.669A5.956 5.956 0 0 1 17 13v.002c0 .33-.033.655-.086.977-.007.043-.011.088-.019.131a6.053 6.053 0 0 1-1.138 2.536c-.16.209-.331.412-.516.597a5.954 5.954 0 0 1-.728.613 5.906 5.906 0 0 1-2.277 1.015c-.142.03-.285.05-.43.069-.062.009-.122.021-.184.027a6.104 6.104 0 0 1-1.898-.103L9.3 20.819a8.087 8.087 0 0 0 2.534.136c.069-.007.138-.021.207-.03.205-.026.409-.056.61-.098l.053-.009-.001-.005a7.877 7.877 0 0 0 2.136-.795l.001.001.028-.019a7.906 7.906 0 0 0 1.01-.67c.27-.209.532-.43.777-.675.248-.247.47-.513.681-.785.021-.028.049-.053.07-.081l-.006-.004a7.899 7.899 0 0 0 1.093-1.997l.008.003c.029-.078.05-.158.076-.237.037-.11.075-.221.107-.333.04-.14.073-.281.105-.423.022-.099.048-.195.066-.295.032-.171.056-.344.076-.516.01-.076.023-.15.03-.227.023-.249.037-.5.037-.753.002-.002.002-.004.002-.008zM6.197 16.597l-1.6 1.201a8.045 8.045 0 0 0 2.569 2.225l.961-1.754a6.018 6.018 0 0 1-1.93-1.672zM5 13c0-.145.005-.287.015-.429l-1.994-.143a7.977 7.977 0 0 0 .483 3.372l1.873-.701A5.975 5.975 0 0 1 5 13z" }, child: [] }] })(n);
}
function y0(n) {
  return to({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" }, child: [] }] })(n);
}
const XS = ({
  onToggleCallWindow: n,
  onToggleChatWindow: i
}) => {
  const { config: s } = Ua(), { setChatType: l, clearInteractions: o } = f0();
  return /* @__PURE__ */ A.jsxs(
    "div",
    {
      className: "mimin-flex mimin-items-center mimin-justify-between mimin-gap-2 mimin-px-4 mimin-py-2",
      style: {
        backgroundColor: s?.theme?.chatWindow?.header?.backgroundColor || "#0096a2"
      },
      children: [
        /* @__PURE__ */ A.jsxs("div", { className: "mimin-flex mimin-items-center mimin-gap-3", children: [
          /* @__PURE__ */ A.jsx("div", { className: "mimin-flex mimin-items-center mimin-justify-center mimin-w-9 mimin-h-9 mimin-rounded-full mimin-bg-white", children: /* @__PURE__ */ A.jsx(
            "img",
            {
              src: s?.theme?.chatWindow?.header?.avatarSrc || "https://res.cloudinary.com/dctqloe37/image/upload/v1752147771/agent_ohofti.jpg",
              alt: " ",
              onError: (m) => {
                const f = m.target;
                f.onerror = null, f.src = "https://res.cloudinary.com/dctqloe37/image/upload/v1752147771/agent_ohofti.jpg";
              },
              className: "mimin-w-6 mimin-h-6 mimin-rounded-full"
            }
          ) }),
          /* @__PURE__ */ A.jsxs("div", { className: "mimin-flex-1", children: [
            /* @__PURE__ */ A.jsx(
              "h3",
              {
                className: "mimin-text-base mimin-font-bold",
                style: {
                  color: s?.theme?.chatWindow?.header?.color || "#ffffff"
                },
                children: s?.theme?.chatWindow?.header?.title || "MINA"
              }
            ),
            /* @__PURE__ */ A.jsx(
              "p",
              {
                className: "mimin-text-white mimin-font-light mimin-text-[9px]",
                style: {
                  color: s?.theme?.chatWindow?.header?.color || "#ffffff"
                },
                children: s?.theme?.chatWindow?.header?.description || "Ngobrol langsung dengan AI, cepat & mudah."
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "mimin-flex mimin-items-center mimin-gap-4", children: [
          s?.theme?.chatWindow?.isActiveCall && /* @__PURE__ */ A.jsxs(
            "button",
            {
              style: {
                color: s?.theme?.chatWindow?.header?.color || "#ffffff"
              },
              className: "mimin-relative mimin-cursor-pointer mimin-disabled:opacity-50 mimin-disabled:cursor-not-allowed",
              onClick: n,
              children: [
                /* @__PURE__ */ A.jsx(
                  y0,
                  {
                    className: "mimin-w-5 mimin-h-5",
                    color: s?.theme?.chatWindow?.header?.color || "#ffffff"
                  }
                ),
                /* @__PURE__ */ A.jsx("div", { className: "mimin-absolute mimin--top-0 mimin--right-0", children: /* @__PURE__ */ A.jsx("p", { className: "mimin-text-[8px] mimin-font-medium", children: "AI" }) })
              ]
            }
          ),
          /* @__PURE__ */ A.jsx(
            "button",
            {
              className: "mimin-cursor-pointer mimin-disabled:opacity-50 mimin-disabled:cursor-not-allowed",
              style: {
                color: s?.theme?.chatWindow?.header?.color || "#ffffff"
              },
              onClick: () => {
                o(), l(null);
              },
              children: /* @__PURE__ */ A.jsx(
                GS,
                {
                  className: "mimin-w-5 mimin-h-5",
                  color: s?.theme?.chatWindow?.header?.color || "#ffffff"
                }
              )
            }
          ),
          /* @__PURE__ */ A.jsx(
            "button",
            {
              className: "mimin-cursor-pointer mimin-disabled:opacity-50 mimin-disabled:cursor-not-allowed",
              style: {
                color: s?.theme?.chatWindow?.header?.color || "#ffffff"
              },
              onClick: i,
              children: /* @__PURE__ */ A.jsx(
                _S,
                {
                  className: "mimin-w-5 mimin-h-5",
                  color: s?.theme?.chatWindow?.header?.color || "#ffffff"
                }
              )
            }
          )
        ] })
      ]
    }
  );
};
function g0(n) {
  var i, s, l = "";
  if (typeof n == "string" || typeof n == "number") l += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var o = n.length;
    for (i = 0; i < o; i++) n[i] && (s = g0(n[i])) && (l && (l += " "), l += s);
  } else for (s in n) n[s] && (l && (l += " "), l += s);
  return l;
}
function KS() {
  for (var n, i, s = 0, l = "", o = arguments.length; s < o; s++) (n = arguments[s]) && (i = g0(n)) && (l && (l += " "), l += i);
  return l;
}
const Vf = "-", QS = (n) => {
  const i = FS(n), {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: l
  } = n;
  return {
    getClassGroupId: (f) => {
      const d = f.split(Vf);
      return d[0] === "" && d.length !== 1 && d.shift(), v0(d, i) || ZS(f);
    },
    getConflictingClassGroupIds: (f, d) => {
      const p = s[f] || [];
      return d && l[f] ? [...p, ...l[f]] : p;
    }
  };
}, v0 = (n, i) => {
  if (n.length === 0)
    return i.classGroupId;
  const s = n[0], l = i.nextPart.get(s), o = l ? v0(n.slice(1), l) : void 0;
  if (o)
    return o;
  if (i.validators.length === 0)
    return;
  const m = n.join(Vf);
  return i.validators.find(({
    validator: f
  }) => f(m))?.classGroupId;
}, My = /^\[(.+)\]$/, ZS = (n) => {
  if (My.test(n)) {
    const i = My.exec(n)[1], s = i?.substring(0, i.indexOf(":"));
    if (s)
      return "arbitrary.." + s;
  }
}, FS = (n) => {
  const {
    theme: i,
    classGroups: s
  } = n, l = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in s)
    af(s[o], l, o, i);
  return l;
}, af = (n, i, s, l) => {
  n.forEach((o) => {
    if (typeof o == "string") {
      const m = o === "" ? i : Ry(i, o);
      m.classGroupId = s;
      return;
    }
    if (typeof o == "function") {
      if (WS(o)) {
        af(o(l), i, s, l);
        return;
      }
      i.validators.push({
        validator: o,
        classGroupId: s
      });
      return;
    }
    Object.entries(o).forEach(([m, f]) => {
      af(f, Ry(i, m), s, l);
    });
  });
}, Ry = (n, i) => {
  let s = n;
  return i.split(Vf).forEach((l) => {
    s.nextPart.has(l) || s.nextPart.set(l, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), s = s.nextPart.get(l);
  }), s;
}, WS = (n) => n.isThemeGetter, JS = (n) => {
  if (n < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let i = 0, s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  const o = (m, f) => {
    s.set(m, f), i++, i > n && (i = 0, l = s, s = /* @__PURE__ */ new Map());
  };
  return {
    get(m) {
      let f = s.get(m);
      if (f !== void 0)
        return f;
      if ((f = l.get(m)) !== void 0)
        return o(m, f), f;
    },
    set(m, f) {
      s.has(m) ? s.set(m, f) : o(m, f);
    }
  };
}, sf = "!", rf = ":", $S = rf.length, IS = (n) => {
  const {
    prefix: i,
    experimentalParseClassName: s
  } = n;
  let l = (o) => {
    const m = [];
    let f = 0, d = 0, p = 0, h;
    for (let E = 0; E < o.length; E++) {
      let R = o[E];
      if (f === 0 && d === 0) {
        if (R === rf) {
          m.push(o.slice(p, E)), p = E + $S;
          continue;
        }
        if (R === "/") {
          h = E;
          continue;
        }
      }
      R === "[" ? f++ : R === "]" ? f-- : R === "(" ? d++ : R === ")" && d--;
    }
    const g = m.length === 0 ? o : o.substring(p), b = tT(g), x = b !== g, C = h && h > p ? h - p : void 0;
    return {
      modifiers: m,
      hasImportantModifier: x,
      baseClassName: b,
      maybePostfixModifierPosition: C
    };
  };
  if (i) {
    const o = i + rf, m = l;
    l = (f) => f.startsWith(o) ? m(f.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: f,
      maybePostfixModifierPosition: void 0
    };
  }
  if (s) {
    const o = l;
    l = (m) => s({
      className: m,
      parseClassName: o
    });
  }
  return l;
}, tT = (n) => n.endsWith(sf) ? n.substring(0, n.length - 1) : n.startsWith(sf) ? n.substring(1) : n, eT = (n) => {
  const i = Object.fromEntries(n.orderSensitiveModifiers.map((l) => [l, !0]));
  return (l) => {
    if (l.length <= 1)
      return l;
    const o = [];
    let m = [];
    return l.forEach((f) => {
      f[0] === "[" || i[f] ? (o.push(...m.sort(), f), m = []) : m.push(f);
    }), o.push(...m.sort()), o;
  };
}, nT = (n) => ({
  cache: JS(n.cacheSize),
  parseClassName: IS(n),
  sortModifiers: eT(n),
  ...QS(n)
}), iT = /\s+/, aT = (n, i) => {
  const {
    parseClassName: s,
    getClassGroupId: l,
    getConflictingClassGroupIds: o,
    sortModifiers: m
  } = i, f = [], d = n.trim().split(iT);
  let p = "";
  for (let h = d.length - 1; h >= 0; h -= 1) {
    const g = d[h], {
      isExternal: b,
      modifiers: x,
      hasImportantModifier: C,
      baseClassName: E,
      maybePostfixModifierPosition: R
    } = s(g);
    if (b) {
      p = g + (p.length > 0 ? " " + p : p);
      continue;
    }
    let N = !!R, V = l(N ? E.substring(0, R) : E);
    if (!V) {
      if (!N) {
        p = g + (p.length > 0 ? " " + p : p);
        continue;
      }
      if (V = l(E), !V) {
        p = g + (p.length > 0 ? " " + p : p);
        continue;
      }
      N = !1;
    }
    const B = m(x).join(":"), H = C ? B + sf : B, W = H + V;
    if (f.includes(W))
      continue;
    f.push(W);
    const Z = o(V, N);
    for (let Q = 0; Q < Z.length; ++Q) {
      const I = Z[Q];
      f.push(H + I);
    }
    p = g + (p.length > 0 ? " " + p : p);
  }
  return p;
};
function sT() {
  let n = 0, i, s, l = "";
  for (; n < arguments.length; )
    (i = arguments[n++]) && (s = b0(i)) && (l && (l += " "), l += s);
  return l;
}
const b0 = (n) => {
  if (typeof n == "string")
    return n;
  let i, s = "";
  for (let l = 0; l < n.length; l++)
    n[l] && (i = b0(n[l])) && (s && (s += " "), s += i);
  return s;
};
function rT(n, ...i) {
  let s, l, o, m = f;
  function f(p) {
    const h = i.reduce((g, b) => b(g), n());
    return s = nT(h), l = s.cache.get, o = s.cache.set, m = d, d(p);
  }
  function d(p) {
    const h = l(p);
    if (h)
      return h;
    const g = aT(p, s);
    return o(p, g), g;
  }
  return function() {
    return m(sT.apply(null, arguments));
  };
}
const te = (n) => {
  const i = (s) => s[n] || [];
  return i.isThemeGetter = !0, i;
}, x0 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, S0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i, lT = /^\d+\/\d+$/, oT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, uT = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, cT = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, fT = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, mT = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ea = (n) => lT.test(n), gt = (n) => !!n && !Number.isNaN(Number(n)), ii = (n) => !!n && Number.isInteger(Number(n)), jc = (n) => n.endsWith("%") && gt(n.slice(0, -1)), Dn = (n) => oT.test(n), dT = () => !0, hT = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  uT.test(n) && !cT.test(n)
), T0 = () => !1, pT = (n) => fT.test(n), yT = (n) => mT.test(n), gT = (n) => !et(n) && !nt(n), vT = (n) => Ba(n, E0, T0), et = (n) => x0.test(n), Ci = (n) => Ba(n, M0, hT), _c = (n) => Ba(n, wT, gt), Oy = (n) => Ba(n, w0, T0), bT = (n) => Ba(n, A0, yT), Cl = (n) => Ba(n, R0, pT), nt = (n) => S0.test(n), Ys = (n) => La(n, M0), xT = (n) => La(n, AT), Cy = (n) => La(n, w0), ST = (n) => La(n, E0), TT = (n) => La(n, A0), Dl = (n) => La(n, R0, !0), Ba = (n, i, s) => {
  const l = x0.exec(n);
  return l ? l[1] ? i(l[1]) : s(l[2]) : !1;
}, La = (n, i, s = !1) => {
  const l = S0.exec(n);
  return l ? l[1] ? i(l[1]) : s : !1;
}, w0 = (n) => n === "position" || n === "percentage", A0 = (n) => n === "image" || n === "url", E0 = (n) => n === "length" || n === "size" || n === "bg-size", M0 = (n) => n === "length", wT = (n) => n === "number", AT = (n) => n === "family-name", R0 = (n) => n === "shadow", ET = () => {
  const n = te("color"), i = te("font"), s = te("text"), l = te("font-weight"), o = te("tracking"), m = te("leading"), f = te("breakpoint"), d = te("container"), p = te("spacing"), h = te("radius"), g = te("shadow"), b = te("inset-shadow"), x = te("text-shadow"), C = te("drop-shadow"), E = te("blur"), R = te("perspective"), N = te("aspect"), V = te("ease"), B = te("animate"), H = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], W = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], Z = () => [...W(), nt, et], Q = () => ["auto", "hidden", "clip", "visible", "scroll"], I = () => ["auto", "contain", "none"], Y = () => [nt, et, p], ot = () => [Ea, "full", "auto", ...Y()], rt = () => [ii, "none", "subgrid", nt, et], dt = () => ["auto", {
    span: ["full", ii, nt, et]
  }, ii, nt, et], wt = () => [ii, "auto", nt, et], Dt = () => ["auto", "min", "max", "fr", nt, et], Gt = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Vt = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], X = () => ["auto", ...Y()], L = () => [Ea, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...Y()], z = () => [n, nt, et], ft = () => [...W(), Cy, Oy, {
    position: [nt, et]
  }], mt = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], w = () => ["auto", "cover", "contain", ST, vT, {
    size: [nt, et]
  }], K = () => [jc, Ys, Ci], J = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    h,
    nt,
    et
  ], F = () => ["", gt, Ys, Ci], at = () => ["solid", "dashed", "dotted", "double"], St = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], $ = () => [gt, jc, Cy, Oy], ee = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    E,
    nt,
    et
  ], Et = () => ["none", gt, nt, et], pe = () => ["none", gt, nt, et], nn = () => [gt, nt, et], an = () => [Ea, "full", ...Y()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Dn],
      breakpoint: [Dn],
      color: [dT],
      container: [Dn],
      "drop-shadow": [Dn],
      ease: ["in", "out", "in-out"],
      font: [gT],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Dn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Dn],
      shadow: [Dn],
      spacing: ["px", gt],
      text: [Dn],
      "text-shadow": [Dn],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Ea, et, nt, N]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [gt, et, nt, d]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": H()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": H()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: Z()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Q()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Q()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Q()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: I()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": I()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": I()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: ot()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": ot()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": ot()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: ot()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: ot()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: ot()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: ot()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: ot()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: ot()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [ii, "auto", nt, et]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ea, "full", "auto", d, ...Y()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [gt, Ea, "auto", "initial", "none", et]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", gt, nt, et]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", gt, nt, et]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ii, "first", "last", "none", nt, et]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": rt()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: dt()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": wt()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": wt()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": rt()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: dt()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": wt()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": wt()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": Dt()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Dt()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: Y()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": Y()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": Y()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...Gt(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...Vt(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...Vt()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Gt()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...Vt(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...Vt(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": Gt()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...Vt(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...Vt()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: Y()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: Y()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: Y()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: Y()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: Y()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: Y()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: Y()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: Y()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: Y()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: X()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: X()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: X()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: X()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: X()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: X()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: X()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: X()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: X()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": Y()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": Y()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: L()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [d, "screen", ...L()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          d,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...L()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          d,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [f]
          },
          ...L()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...L()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...L()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...L()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", s, Ys, Ci]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [l, nt, _c]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", jc, et]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [xT, et, i]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [o, nt, et]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [gt, "none", nt, _c]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          m,
          ...Y()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", nt, et]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", nt, et]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: z()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: z()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...at(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [gt, "from-font", "auto", nt, Ci]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: z()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [gt, "auto", nt, et]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: Y()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", nt, et]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", nt, et]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: ft()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: mt()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: w()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, ii, nt, et],
          radial: ["", nt, et],
          conic: [ii, nt, et]
        }, TT, bT]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: z()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: K()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: K()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: K()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: z()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: z()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: z()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: J()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": J()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": J()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": J()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": J()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": J()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": J()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": J()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": J()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": J()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": J()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": J()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": J()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": J()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": J()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: F()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": F()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": F()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": F()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": F()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": F()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": F()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": F()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": F()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": F()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": F()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...at(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...at(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: z()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": z()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": z()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": z()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": z()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": z()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": z()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": z()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": z()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: z()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...at(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [gt, nt, et]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", gt, Ys, Ci]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: z()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          g,
          Dl,
          Cl
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: z()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", b, Dl, Cl]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": z()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: F()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: z()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [gt, Ci]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": z()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": F()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": z()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", x, Dl, Cl]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": z()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [gt, nt, et]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...St(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": St()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [gt]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": $()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": $()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": z()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": z()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": $()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": $()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": z()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": z()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": $()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": $()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": z()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": z()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": $()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": $()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": z()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": z()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": $()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": $()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": z()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": z()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": $()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": $()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": z()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": z()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": $()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": $()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": z()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": z()
      }],
      "mask-image-radial": [{
        "mask-radial": [nt, et]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": $()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": $()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": z()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": z()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": W()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [gt]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": $()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": $()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": z()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": z()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: ft()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: mt()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: w()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", nt, et]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          nt,
          et
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ee()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [gt, nt, et]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [gt, nt, et]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          C,
          Dl,
          Cl
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": z()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", gt, nt, et]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [gt, nt, et]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", gt, nt, et]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [gt, nt, et]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", gt, nt, et]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          nt,
          et
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ee()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [gt, nt, et]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [gt, nt, et]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", gt, nt, et]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [gt, nt, et]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", gt, nt, et]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [gt, nt, et]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [gt, nt, et]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", gt, nt, et]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": Y()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": Y()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": Y()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", nt, et]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [gt, "initial", nt, et]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", V, nt, et]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [gt, nt, et]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", B, nt, et]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [R, nt, et]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": Z()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Et()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Et()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Et()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Et()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: pe()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": pe()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": pe()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": pe()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: nn()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": nn()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": nn()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [nt, et, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: Z()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: an()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": an()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": an()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": an()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: z()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: z()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", nt, et]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": Y()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": Y()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": Y()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": Y()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": Y()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": Y()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": Y()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": Y()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": Y()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": Y()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": Y()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": Y()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": Y()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": Y()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": Y()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": Y()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": Y()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": Y()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", nt, et]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...z()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [gt, Ys, Ci, _c]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...z()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, MT = /* @__PURE__ */ rT(ET);
function Nl(...n) {
  return MT(KS(n));
}
const RT = (n) => {
  if (!isFinite(n) || isNaN(n)) return "00:00:00";
  n < 0 && (n = 0);
  const i = Math.floor(n / 3600), s = Math.floor(n % 3600 / 60), l = n % 60;
  return [i, s, Math.floor(l)].map((o) => String(o).padStart(2, "0")).join(":");
}, OT = (n) => new Promise((i, s) => {
  const l = new FileReader();
  l.onloadend = () => i(l.result), l.onerror = s, l.readAsDataURL(n);
}), O0 = 6048e5, CT = 864e5, Dy = Symbol.for("constructDateFrom");
function ri(n, i) {
  return typeof n == "function" ? n(i) : n && typeof n == "object" && Dy in n ? n[Dy](i) : n instanceof Date ? new n.constructor(i) : new Date(i);
}
function tn(n, i) {
  return ri(i || n, n);
}
let DT = {};
function eo() {
  return DT;
}
function tr(n, i) {
  const s = eo(), l = i?.weekStartsOn ?? i?.locale?.options?.weekStartsOn ?? s.weekStartsOn ?? s.locale?.options?.weekStartsOn ?? 0, o = tn(n, i?.in), m = o.getDay(), f = (m < l ? 7 : 0) + m - l;
  return o.setDate(o.getDate() - f), o.setHours(0, 0, 0, 0), o;
}
function Kl(n, i) {
  return tr(n, { ...i, weekStartsOn: 1 });
}
function C0(n, i) {
  const s = tn(n, i?.in), l = s.getFullYear(), o = ri(s, 0);
  o.setFullYear(l + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const m = Kl(o), f = ri(s, 0);
  f.setFullYear(l, 0, 4), f.setHours(0, 0, 0, 0);
  const d = Kl(f);
  return s.getTime() >= m.getTime() ? l + 1 : s.getTime() >= d.getTime() ? l : l - 1;
}
function Ny(n) {
  const i = tn(n), s = new Date(
    Date.UTC(
      i.getFullYear(),
      i.getMonth(),
      i.getDate(),
      i.getHours(),
      i.getMinutes(),
      i.getSeconds(),
      i.getMilliseconds()
    )
  );
  return s.setUTCFullYear(i.getFullYear()), +n - +s;
}
function NT(n, ...i) {
  const s = ri.bind(
    null,
    i.find((l) => typeof l == "object")
  );
  return i.map(s);
}
function jy(n, i) {
  const s = tn(n, i?.in);
  return s.setHours(0, 0, 0, 0), s;
}
function jT(n, i, s) {
  const [l, o] = NT(
    s?.in,
    n,
    i
  ), m = jy(l), f = jy(o), d = +m - Ny(m), p = +f - Ny(f);
  return Math.round((d - p) / CT);
}
function _T(n, i) {
  const s = C0(n, i), l = ri(n, 0);
  return l.setFullYear(s, 0, 4), l.setHours(0, 0, 0, 0), Kl(l);
}
function zT(n) {
  return n instanceof Date || typeof n == "object" && Object.prototype.toString.call(n) === "[object Date]";
}
function UT(n) {
  return !(!zT(n) && typeof n != "number" || isNaN(+tn(n)));
}
function VT(n, i) {
  const s = tn(n, i?.in);
  return s.setFullYear(s.getFullYear(), 0, 1), s.setHours(0, 0, 0, 0), s;
}
const BT = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, LT = (n, i, s) => {
  let l;
  const o = BT[n];
  return typeof o == "string" ? l = o : i === 1 ? l = o.one : l = o.other.replace("{{count}}", i.toString()), s?.addSuffix ? s.comparison && s.comparison > 0 ? "in " + l : l + " ago" : l;
};
function zc(n) {
  return (i = {}) => {
    const s = i.width ? String(i.width) : n.defaultWidth;
    return n.formats[s] || n.formats[n.defaultWidth];
  };
}
const kT = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, HT = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, qT = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, PT = {
  date: zc({
    formats: kT,
    defaultWidth: "full"
  }),
  time: zc({
    formats: HT,
    defaultWidth: "full"
  }),
  dateTime: zc({
    formats: qT,
    defaultWidth: "full"
  })
}, YT = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, GT = (n, i, s, l) => YT[n];
function Gs(n) {
  return (i, s) => {
    const l = s?.context ? String(s.context) : "standalone";
    let o;
    if (l === "formatting" && n.formattingValues) {
      const f = n.defaultFormattingWidth || n.defaultWidth, d = s?.width ? String(s.width) : f;
      o = n.formattingValues[d] || n.formattingValues[f];
    } else {
      const f = n.defaultWidth, d = s?.width ? String(s.width) : n.defaultWidth;
      o = n.values[d] || n.values[f];
    }
    const m = n.argumentCallback ? n.argumentCallback(i) : i;
    return o[m];
  };
}
const XT = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, KT = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, QT = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, ZT = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, FT = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, WT = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, JT = (n, i) => {
  const s = Number(n), l = s % 100;
  if (l > 20 || l < 10)
    switch (l % 10) {
      case 1:
        return s + "st";
      case 2:
        return s + "nd";
      case 3:
        return s + "rd";
    }
  return s + "th";
}, $T = {
  ordinalNumber: JT,
  era: Gs({
    values: XT,
    defaultWidth: "wide"
  }),
  quarter: Gs({
    values: KT,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: Gs({
    values: QT,
    defaultWidth: "wide"
  }),
  day: Gs({
    values: ZT,
    defaultWidth: "wide"
  }),
  dayPeriod: Gs({
    values: FT,
    defaultWidth: "wide",
    formattingValues: WT,
    defaultFormattingWidth: "wide"
  })
};
function Xs(n) {
  return (i, s = {}) => {
    const l = s.width, o = l && n.matchPatterns[l] || n.matchPatterns[n.defaultMatchWidth], m = i.match(o);
    if (!m)
      return null;
    const f = m[0], d = l && n.parsePatterns[l] || n.parsePatterns[n.defaultParseWidth], p = Array.isArray(d) ? tw(d, (b) => b.test(f)) : (
      // [TODO] -- I challenge you to fix the type
      IT(d, (b) => b.test(f))
    );
    let h;
    h = n.valueCallback ? n.valueCallback(p) : p, h = s.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      s.valueCallback(h)
    ) : h;
    const g = i.slice(f.length);
    return { value: h, rest: g };
  };
}
function IT(n, i) {
  for (const s in n)
    if (Object.prototype.hasOwnProperty.call(n, s) && i(n[s]))
      return s;
}
function tw(n, i) {
  for (let s = 0; s < n.length; s++)
    if (i(n[s]))
      return s;
}
function ew(n) {
  return (i, s = {}) => {
    const l = i.match(n.matchPattern);
    if (!l) return null;
    const o = l[0], m = i.match(n.parsePattern);
    if (!m) return null;
    let f = n.valueCallback ? n.valueCallback(m[0]) : m[0];
    f = s.valueCallback ? s.valueCallback(f) : f;
    const d = i.slice(o.length);
    return { value: f, rest: d };
  };
}
const nw = /^(\d+)(th|st|nd|rd)?/i, iw = /\d+/i, aw = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, sw = {
  any: [/^b/i, /^(a|c)/i]
}, rw = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, lw = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, ow = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, uw = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, cw = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, fw = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, mw = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, dw = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, hw = {
  ordinalNumber: ew({
    matchPattern: nw,
    parsePattern: iw,
    valueCallback: (n) => parseInt(n, 10)
  }),
  era: Xs({
    matchPatterns: aw,
    defaultMatchWidth: "wide",
    parsePatterns: sw,
    defaultParseWidth: "any"
  }),
  quarter: Xs({
    matchPatterns: rw,
    defaultMatchWidth: "wide",
    parsePatterns: lw,
    defaultParseWidth: "any",
    valueCallback: (n) => n + 1
  }),
  month: Xs({
    matchPatterns: ow,
    defaultMatchWidth: "wide",
    parsePatterns: uw,
    defaultParseWidth: "any"
  }),
  day: Xs({
    matchPatterns: cw,
    defaultMatchWidth: "wide",
    parsePatterns: fw,
    defaultParseWidth: "any"
  }),
  dayPeriod: Xs({
    matchPatterns: mw,
    defaultMatchWidth: "any",
    parsePatterns: dw,
    defaultParseWidth: "any"
  })
}, pw = {
  code: "en-US",
  formatDistance: LT,
  formatLong: PT,
  formatRelative: GT,
  localize: $T,
  match: hw,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function yw(n, i) {
  const s = tn(n, i?.in);
  return jT(s, VT(s)) + 1;
}
function gw(n, i) {
  const s = tn(n, i?.in), l = +Kl(s) - +_T(s);
  return Math.round(l / O0) + 1;
}
function D0(n, i) {
  const s = tn(n, i?.in), l = s.getFullYear(), o = eo(), m = i?.firstWeekContainsDate ?? i?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, f = ri(i?.in || n, 0);
  f.setFullYear(l + 1, 0, m), f.setHours(0, 0, 0, 0);
  const d = tr(f, i), p = ri(i?.in || n, 0);
  p.setFullYear(l, 0, m), p.setHours(0, 0, 0, 0);
  const h = tr(p, i);
  return +s >= +d ? l + 1 : +s >= +h ? l : l - 1;
}
function vw(n, i) {
  const s = eo(), l = i?.firstWeekContainsDate ?? i?.locale?.options?.firstWeekContainsDate ?? s.firstWeekContainsDate ?? s.locale?.options?.firstWeekContainsDate ?? 1, o = D0(n, i), m = ri(i?.in || n, 0);
  return m.setFullYear(o, 0, l), m.setHours(0, 0, 0, 0), tr(m, i);
}
function bw(n, i) {
  const s = tn(n, i?.in), l = +tr(s, i) - +vw(s, i);
  return Math.round(l / O0) + 1;
}
function Ct(n, i) {
  const s = n < 0 ? "-" : "", l = Math.abs(n).toString().padStart(i, "0");
  return s + l;
}
const ai = {
  // Year
  y(n, i) {
    const s = n.getFullYear(), l = s > 0 ? s : 1 - s;
    return Ct(i === "yy" ? l % 100 : l, i.length);
  },
  // Month
  M(n, i) {
    const s = n.getMonth();
    return i === "M" ? String(s + 1) : Ct(s + 1, 2);
  },
  // Day of the month
  d(n, i) {
    return Ct(n.getDate(), i.length);
  },
  // AM or PM
  a(n, i) {
    const s = n.getHours() / 12 >= 1 ? "pm" : "am";
    switch (i) {
      case "a":
      case "aa":
        return s.toUpperCase();
      case "aaa":
        return s;
      case "aaaaa":
        return s[0];
      case "aaaa":
      default:
        return s === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(n, i) {
    return Ct(n.getHours() % 12 || 12, i.length);
  },
  // Hour [0-23]
  H(n, i) {
    return Ct(n.getHours(), i.length);
  },
  // Minute
  m(n, i) {
    return Ct(n.getMinutes(), i.length);
  },
  // Second
  s(n, i) {
    return Ct(n.getSeconds(), i.length);
  },
  // Fraction of second
  S(n, i) {
    const s = i.length, l = n.getMilliseconds(), o = Math.trunc(
      l * Math.pow(10, s - 3)
    );
    return Ct(o, i.length);
  }
}, Ma = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, _y = {
  // Era
  G: function(n, i, s) {
    const l = n.getFullYear() > 0 ? 1 : 0;
    switch (i) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return s.era(l, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return s.era(l, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return s.era(l, { width: "wide" });
    }
  },
  // Year
  y: function(n, i, s) {
    if (i === "yo") {
      const l = n.getFullYear(), o = l > 0 ? l : 1 - l;
      return s.ordinalNumber(o, { unit: "year" });
    }
    return ai.y(n, i);
  },
  // Local week-numbering year
  Y: function(n, i, s, l) {
    const o = D0(n, l), m = o > 0 ? o : 1 - o;
    if (i === "YY") {
      const f = m % 100;
      return Ct(f, 2);
    }
    return i === "Yo" ? s.ordinalNumber(m, { unit: "year" }) : Ct(m, i.length);
  },
  // ISO week-numbering year
  R: function(n, i) {
    const s = C0(n);
    return Ct(s, i.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(n, i) {
    const s = n.getFullYear();
    return Ct(s, i.length);
  },
  // Quarter
  Q: function(n, i, s) {
    const l = Math.ceil((n.getMonth() + 1) / 3);
    switch (i) {
      // 1, 2, 3, 4
      case "Q":
        return String(l);
      // 01, 02, 03, 04
      case "QQ":
        return Ct(l, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return s.ordinalNumber(l, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return s.quarter(l, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return s.quarter(l, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return s.quarter(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(n, i, s) {
    const l = Math.ceil((n.getMonth() + 1) / 3);
    switch (i) {
      // 1, 2, 3, 4
      case "q":
        return String(l);
      // 01, 02, 03, 04
      case "qq":
        return Ct(l, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return s.ordinalNumber(l, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return s.quarter(l, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return s.quarter(l, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return s.quarter(l, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(n, i, s) {
    const l = n.getMonth();
    switch (i) {
      case "M":
      case "MM":
        return ai.M(n, i);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return s.ordinalNumber(l + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return s.month(l, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return s.month(l, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return s.month(l, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(n, i, s) {
    const l = n.getMonth();
    switch (i) {
      // 1, 2, ..., 12
      case "L":
        return String(l + 1);
      // 01, 02, ..., 12
      case "LL":
        return Ct(l + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return s.ordinalNumber(l + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return s.month(l, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return s.month(l, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return s.month(l, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(n, i, s, l) {
    const o = bw(n, l);
    return i === "wo" ? s.ordinalNumber(o, { unit: "week" }) : Ct(o, i.length);
  },
  // ISO week of year
  I: function(n, i, s) {
    const l = gw(n);
    return i === "Io" ? s.ordinalNumber(l, { unit: "week" }) : Ct(l, i.length);
  },
  // Day of the month
  d: function(n, i, s) {
    return i === "do" ? s.ordinalNumber(n.getDate(), { unit: "date" }) : ai.d(n, i);
  },
  // Day of year
  D: function(n, i, s) {
    const l = yw(n);
    return i === "Do" ? s.ordinalNumber(l, { unit: "dayOfYear" }) : Ct(l, i.length);
  },
  // Day of week
  E: function(n, i, s) {
    const l = n.getDay();
    switch (i) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return s.day(l, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return s.day(l, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return s.day(l, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return s.day(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(n, i, s, l) {
    const o = n.getDay(), m = (o - l.weekStartsOn + 8) % 7 || 7;
    switch (i) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(m);
      // Padded numerical value
      case "ee":
        return Ct(m, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return s.ordinalNumber(m, { unit: "day" });
      case "eee":
        return s.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return s.day(o, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return s.day(o, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return s.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(n, i, s, l) {
    const o = n.getDay(), m = (o - l.weekStartsOn + 8) % 7 || 7;
    switch (i) {
      // Numerical value (same as in `e`)
      case "c":
        return String(m);
      // Padded numerical value
      case "cc":
        return Ct(m, i.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return s.ordinalNumber(m, { unit: "day" });
      case "ccc":
        return s.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return s.day(o, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return s.day(o, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return s.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(n, i, s) {
    const l = n.getDay(), o = l === 0 ? 7 : l;
    switch (i) {
      // 2
      case "i":
        return String(o);
      // 02
      case "ii":
        return Ct(o, i.length);
      // 2nd
      case "io":
        return s.ordinalNumber(o, { unit: "day" });
      // Tue
      case "iii":
        return s.day(l, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return s.day(l, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return s.day(l, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return s.day(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(n, i, s) {
    const o = n.getHours() / 12 >= 1 ? "pm" : "am";
    switch (i) {
      case "a":
      case "aa":
        return s.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return s.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return s.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return s.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(n, i, s) {
    const l = n.getHours();
    let o;
    switch (l === 12 ? o = Ma.noon : l === 0 ? o = Ma.midnight : o = l / 12 >= 1 ? "pm" : "am", i) {
      case "b":
      case "bb":
        return s.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return s.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return s.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return s.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(n, i, s) {
    const l = n.getHours();
    let o;
    switch (l >= 17 ? o = Ma.evening : l >= 12 ? o = Ma.afternoon : l >= 4 ? o = Ma.morning : o = Ma.night, i) {
      case "B":
      case "BB":
      case "BBB":
        return s.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return s.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return s.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(n, i, s) {
    if (i === "ho") {
      let l = n.getHours() % 12;
      return l === 0 && (l = 12), s.ordinalNumber(l, { unit: "hour" });
    }
    return ai.h(n, i);
  },
  // Hour [0-23]
  H: function(n, i, s) {
    return i === "Ho" ? s.ordinalNumber(n.getHours(), { unit: "hour" }) : ai.H(n, i);
  },
  // Hour [0-11]
  K: function(n, i, s) {
    const l = n.getHours() % 12;
    return i === "Ko" ? s.ordinalNumber(l, { unit: "hour" }) : Ct(l, i.length);
  },
  // Hour [1-24]
  k: function(n, i, s) {
    let l = n.getHours();
    return l === 0 && (l = 24), i === "ko" ? s.ordinalNumber(l, { unit: "hour" }) : Ct(l, i.length);
  },
  // Minute
  m: function(n, i, s) {
    return i === "mo" ? s.ordinalNumber(n.getMinutes(), { unit: "minute" }) : ai.m(n, i);
  },
  // Second
  s: function(n, i, s) {
    return i === "so" ? s.ordinalNumber(n.getSeconds(), { unit: "second" }) : ai.s(n, i);
  },
  // Fraction of second
  S: function(n, i) {
    return ai.S(n, i);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(n, i, s) {
    const l = n.getTimezoneOffset();
    if (l === 0)
      return "Z";
    switch (i) {
      // Hours and optional minutes
      case "X":
        return Uy(l);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Ni(l);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Ni(l, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(n, i, s) {
    const l = n.getTimezoneOffset();
    switch (i) {
      // Hours and optional minutes
      case "x":
        return Uy(l);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Ni(l);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Ni(l, ":");
    }
  },
  // Timezone (GMT)
  O: function(n, i, s) {
    const l = n.getTimezoneOffset();
    switch (i) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + zy(l, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Ni(l, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(n, i, s) {
    const l = n.getTimezoneOffset();
    switch (i) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + zy(l, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Ni(l, ":");
    }
  },
  // Seconds timestamp
  t: function(n, i, s) {
    const l = Math.trunc(+n / 1e3);
    return Ct(l, i.length);
  },
  // Milliseconds timestamp
  T: function(n, i, s) {
    return Ct(+n, i.length);
  }
};
function zy(n, i = "") {
  const s = n > 0 ? "-" : "+", l = Math.abs(n), o = Math.trunc(l / 60), m = l % 60;
  return m === 0 ? s + String(o) : s + String(o) + i + Ct(m, 2);
}
function Uy(n, i) {
  return n % 60 === 0 ? (n > 0 ? "-" : "+") + Ct(Math.abs(n) / 60, 2) : Ni(n, i);
}
function Ni(n, i = "") {
  const s = n > 0 ? "-" : "+", l = Math.abs(n), o = Ct(Math.trunc(l / 60), 2), m = Ct(l % 60, 2);
  return s + o + i + m;
}
const Vy = (n, i) => {
  switch (n) {
    case "P":
      return i.date({ width: "short" });
    case "PP":
      return i.date({ width: "medium" });
    case "PPP":
      return i.date({ width: "long" });
    case "PPPP":
    default:
      return i.date({ width: "full" });
  }
}, N0 = (n, i) => {
  switch (n) {
    case "p":
      return i.time({ width: "short" });
    case "pp":
      return i.time({ width: "medium" });
    case "ppp":
      return i.time({ width: "long" });
    case "pppp":
    default:
      return i.time({ width: "full" });
  }
}, xw = (n, i) => {
  const s = n.match(/(P+)(p+)?/) || [], l = s[1], o = s[2];
  if (!o)
    return Vy(n, i);
  let m;
  switch (l) {
    case "P":
      m = i.dateTime({ width: "short" });
      break;
    case "PP":
      m = i.dateTime({ width: "medium" });
      break;
    case "PPP":
      m = i.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      m = i.dateTime({ width: "full" });
      break;
  }
  return m.replace("{{date}}", Vy(l, i)).replace("{{time}}", N0(o, i));
}, Sw = {
  p: N0,
  P: xw
}, Tw = /^D+$/, ww = /^Y+$/, Aw = ["D", "DD", "YY", "YYYY"];
function Ew(n) {
  return Tw.test(n);
}
function Mw(n) {
  return ww.test(n);
}
function Rw(n, i, s) {
  const l = Ow(n, i, s);
  if (console.warn(l), Aw.includes(n)) throw new RangeError(l);
}
function Ow(n, i, s) {
  const l = n[0] === "Y" ? "years" : "days of the month";
  return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${i}\`) for formatting ${l} to the input \`${s}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Cw = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Dw = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Nw = /^'([^]*?)'?$/, jw = /''/g, _w = /[a-zA-Z]/;
function zw(n, i, s) {
  const l = eo(), o = l.locale ?? pw, m = l.firstWeekContainsDate ?? l.locale?.options?.firstWeekContainsDate ?? 1, f = l.weekStartsOn ?? l.locale?.options?.weekStartsOn ?? 0, d = tn(n, s?.in);
  if (!UT(d))
    throw new RangeError("Invalid time value");
  let p = i.match(Dw).map((g) => {
    const b = g[0];
    if (b === "p" || b === "P") {
      const x = Sw[b];
      return x(g, o.formatLong);
    }
    return g;
  }).join("").match(Cw).map((g) => {
    if (g === "''")
      return { isToken: !1, value: "'" };
    const b = g[0];
    if (b === "'")
      return { isToken: !1, value: Uw(g) };
    if (_y[b])
      return { isToken: !0, value: g };
    if (b.match(_w))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + b + "`"
      );
    return { isToken: !1, value: g };
  });
  o.localize.preprocessor && (p = o.localize.preprocessor(d, p));
  const h = {
    firstWeekContainsDate: m,
    weekStartsOn: f,
    locale: o
  };
  return p.map((g) => {
    if (!g.isToken) return g.value;
    const b = g.value;
    (Mw(b) || Ew(b)) && Rw(b, i, String(n));
    const x = _y[b[0]];
    return x(d, b, o.localize, h);
  }).join("");
}
function Uw(n) {
  const i = n.match(Nw);
  return i ? i[1].replace(jw, "'") : n;
}
const jl = ({ message: n, isUser: i = !1, thinking: s = !1, date: l }) => {
  const { config: o } = Ua(), m = (f, d) => f.replace(
    /<a href="([^"]+)"[^>]*>(.*?)<\/a>/g,
    `<a href="$1" target="_blank" style="color: ${d ? "#ffffff" : "#1565c0"}; text-decoration-line: underline; word-break: break-word; white-space: normal;" rel="noopener noreferrer">$2</a>`
  ).replace(
    /\*(.*?)\*/g,
    "<strong>$1</strong>"
  ).replace(
    /\[(.*?)\]\((https?:\/\/[^\s]+)\)/g,
    `<a href="$2" target="_blank" style="color: ${d ? "#ffffff" : "#1565c0"}; text-decoration-line: underline; word-break: break-word; white-space: normal;" rel="noopener noreferrer">$1</a>`
  ).replace(
    new RegExp('(?<!href=")https?:\\/\\/[^\\s"]+', "g"),
    `<a href="$&" target="_blank" style="color: ${d ? "#ffffff" : "#1565c0"}; text-decoration-line: underline; word-break: break-word; white-space: normal;" rel="noopener noreferrer">$&</a>`
  ).replace(/\n/g, "<br>");
  return s ? /* @__PURE__ */ A.jsx(
    "div",
    {
      className: Nl(
        "mimin-relative mimin-flex mimin-w-fit mimin-max-w-[90%] mimin-border mimin-rounded-t-2xl mimin-py-3 mimin-px-3.5 mimin-rounded-br-2xl mimin-bg-white mimin-text-[#0096a2] mimin-border-[#0096a2] mimin-mr-auto mimin-justify-start"
      ),
      style: {
        backgroundColor: o?.theme?.chatWindow?.botMessage?.backgroundColor || "#ffffff",
        borderColor: o?.theme?.chatWindow?.botMessage?.borderColor || "#0096a2"
      },
      children: /* @__PURE__ */ A.jsx(
        "div",
        {
          className: "mimin-text-sm",
          style: {
            color: o?.theme?.chatWindow?.botMessage?.textColor || "#0096a2"
          },
          children: /* @__PURE__ */ A.jsx("div", { className: "mimin-flex mimin-gap-3", children: /* @__PURE__ */ A.jsx("div", { className: "mimin-text-base mimin-flex mimin-gap-2 mimin-items-end", children: Array.from({ length: 3 }).map((f, d) => /* @__PURE__ */ A.jsx(
            "span",
            {
              className: "mimin-block mimin-w-2 mimin-h-2 mimin-rounded-full mimin-bg-[#0096a2] mimin-animate-bounce",
              style: { animationDelay: `${250 * d}ms` }
            },
            `loading-circle-${d}`
          )) }) })
        }
      )
    }
  ) : n ? /* @__PURE__ */ A.jsxs(
    "div",
    {
      className: Nl(
        "mimin-relative mimin-flex mimin-w-fit mimin-max-w-[90%] mimin-border mimin-rounded-t-3xl mimin-py-3 mimin-px-3.5" + (i ? " mimin-rounded-bl-3xl mimin-bg-white mimin-text-[#0096a2] mimin-border-[#0096a2] mimin-ml-auto mimin-justify-end" : " mimin-rounded-br-3xl mimin-bg-white mimin-text-[#0096a2] mimin-border-[#0096a2] mimin-mr-auto mimin-justify-start")
      ),
      style: {
        backgroundColor: i ? o?.theme?.chatWindow?.userMessage?.backgroundColor || "#0096a2" : o?.theme?.chatWindow?.botMessage?.backgroundColor || "#ffffff",
        borderColor: i ? o?.theme?.chatWindow?.userMessage?.borderColor || "#0096a2" : o?.theme?.chatWindow?.botMessage?.borderColor || "#0096a2"
      },
      children: [
        /* @__PURE__ */ A.jsxs(
          "div",
          {
            className: Nl(
              "mimin-flex mimin-items-end mimin-gap-3" + (i ? " mimin-flex-row-reverse" : " mimin-flex-row")
            ),
            children: [
              /* @__PURE__ */ A.jsx("div", { className: "mimin-flex mimin-items-end mimin-justify-center mimin-w-3 mimin-h-3", children: i ? /* @__PURE__ */ A.jsx(
                OS,
                {
                  className: "mimin-w-4 mimin-h-4 mimin-aspect-square",
                  color: o?.theme?.chatWindow?.userMessage?.textColor || "#ffffff"
                }
              ) : /* @__PURE__ */ A.jsx(
                MS,
                {
                  className: "mimin-w-4 mimin-h-4 mimin-aspect-square",
                  color: o?.theme?.chatWindow?.botMessage?.textColor || "#0096a2"
                }
              ) }),
              /* @__PURE__ */ A.jsx(
                "div",
                {
                  className: "mimin-text-sm mimin-flex-1 mimin-pb-2",
                  style: {
                    color: i ? o?.theme?.chatWindow?.userMessage?.textColor || "#ffffff" : o?.theme?.chatWindow?.botMessage?.textColor || "#0096a2"
                  },
                  dangerouslySetInnerHTML: {
                    __html: m(n, i)
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ A.jsx(
          "div",
          {
            className: Nl(
              "mimin-absolute mimin-top-full mimin-mt-0.5 mimin-w-fit" + (i ? " mimin-right-0" : " mimin-left-0")
            ),
            children: /* @__PURE__ */ A.jsx("p", { className: "mimin-text-[10px] mimin-font-light mimin-text-gray-500 mimin-w-max", children: zw(new Date(l), "dd MMMM yyyy, HH:mm") })
          }
        )
      ]
    }
  ) : (console.error("message is null!"), null);
}, Vw = ({ messages: n, currentResponseMsg: i, loading: s, fetching: l }) => {
  const o = Ie.useRef(null);
  return Ie.useEffect(() => {
    setTimeout(() => {
      o.current?.scrollIntoView({
        behavior: "smooth",
        block: "end"
      });
    }, 200);
  }, [i, n.length]), /* @__PURE__ */ A.jsxs(
    "div",
    {
      className: "mimin-relative mimin-flex-1 mimin-h-full mimin-px-4 mimin-py-6 mimin-max-h-full mimin-overflow-y-scroll",
      style: { overflowAnchor: "none" },
      children: [
        /* @__PURE__ */ A.jsxs("div", { className: "mimin-flex mimin-flex-col mimin-gap-9", children: [
          /* @__PURE__ */ A.jsx("div", { className: "mimin-flex mimin-flex-col-reverse mimin-gap-9", children: n.map((m, f) => /* @__PURE__ */ A.jsxs("div", { className: "mimin-flex mimin-flex-col mimin-gap-6", children: [
            m.human && m.human.content && /* @__PURE__ */ A.jsx(
              jl,
              {
                message: m.human.content,
                isUser: !0,
                date: m.date
              }
            ),
            m.ai && m.ai.content && /* @__PURE__ */ A.jsx(
              jl,
              {
                message: m.ai.content,
                isUser: !1,
                date: m.date
              }
            )
          ] }, f)) }),
          !l && i && n.length > 0 && !n[0]?.ai && /* @__PURE__ */ A.jsx(
            jl,
            {
              message: i,
              isUser: !1,
              date: /* @__PURE__ */ new Date()
            }
          ),
          s && !i && /* @__PURE__ */ A.jsx(jl, { thinking: !0, date: /* @__PURE__ */ new Date() })
        ] }),
        /* @__PURE__ */ A.jsx("div", { ref: o, id: "bottom-ref", className: "mimin-pb-9" })
      ]
    }
  );
};
function Bw(n) {
  return to({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M3 12.9999H9V10.9999H3V1.84558C3 1.56944 3.22386 1.34558 3.5 1.34558C3.58425 1.34558 3.66714 1.36687 3.74096 1.40747L22.2034 11.5618C22.4454 11.6949 22.5337 11.9989 22.4006 12.2409C22.3549 12.324 22.2865 12.3924 22.2034 12.4381L3.74096 22.5924C3.499 22.7255 3.19497 22.6372 3.06189 22.3953C3.02129 22.3214 3 22.2386 3 22.1543V12.9999Z" }, child: [] }] })(n);
}
function Lw(n) {
  return to({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192 160l128 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32z" }, child: [] }] })(n);
}
const kw = ({
  onSendMessage: n,
  onCancelSendMessage: i,
  loading: s,
  fetching: l
}) => {
  const [o, m] = G.useState(""), { config: f } = Ua(), d = G.useRef(null), p = () => {
    const g = d.current;
    g && (g.style.height = "auto", g.style.height = g.scrollHeight + "px");
  }, h = () => {
    !l && !s && o.length > 0 && (n(o), m(""));
  };
  return /* @__PURE__ */ A.jsxs(
    "div",
    {
      className: "mimin-px-2 mimin-py-2 mimin-overflow-hidden mimin-max-h-full",
      style: {
        backgroundColor: f?.theme?.chatWindow?.textInput?.backgroundColor || "#0096a2",
        overflowAnchor: "none"
      },
      children: [
        /* @__PURE__ */ A.jsxs(
          "form",
          {
            onSubmit: (g) => {
              g.preventDefault(), g.stopPropagation(), s ? i(o) : h();
            },
            className: "mimin-relative mimin-flex mimin-items-center mimin-gap-2",
            children: [
              /* @__PURE__ */ A.jsx(
                "textarea",
                {
                  className: "mimin-flex-1 mimin-border mimin-rounded-md mimin-p-2 mimin-max-h-[80px] mimin-bg-white mimin-text-black mimin-pr-10 mimin-focus:outline mimin-focus:outline-[#ffa100] mimin-resize-none",
                  style: {
                    borderColor: f?.theme?.chatWindow?.textInput?.borderColor || "#ffffff"
                  },
                  placeholder: f?.theme?.chatWindow?.textInput?.placeholder || "Ketik pertanyaan Anda...",
                  rows: 1,
                  value: o,
                  onChange: (g) => m(g.target.value),
                  onInput: p,
                  ref: d
                }
              ),
              /* @__PURE__ */ A.jsx(
                "button",
                {
                  className: "mimin-absolute mimin-right-4 mimin-top-1/2 mimin--translate-y-1/2 mimin-cursor-pointer disabled:mimin-opacity-50 disabled:mimin-cursor-not-allowed",
                  disabled: o.trim().length === 0 && !s,
                  style: {
                    color: f?.theme?.chatWindow?.textInput?.sendButtonColor || "#0096a2"
                  },
                  children: s ? /* @__PURE__ */ A.jsx(Lw, { className: "mimin-w-4 mimin-h-4" }) : /* @__PURE__ */ A.jsx(Bw, { className: "mimin-w-4 mimin-h-4" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ A.jsx(
          "p",
          {
            className: "mimin-text-[10px] mimin-tracking-wide mimin-text-center mimin-mt-1",
            style: {
              color: f?.theme?.chatWindow?.textInput?.footerTextColor || "$ffffff"
            },
            children: f?.theme?.chatWindow?.textInput?.footerText || "Ada yang bisa saya bantu?"
          }
        )
      ]
    }
  );
}, Bf = G.createContext({});
function Lf(n) {
  const i = G.useRef(null);
  return i.current === null && (i.current = n()), i.current;
}
const kf = typeof window < "u", j0 = kf ? G.useLayoutEffect : G.useEffect, no = /* @__PURE__ */ G.createContext(null);
function Hf(n, i) {
  n.indexOf(i) === -1 && n.push(i);
}
function qf(n, i) {
  const s = n.indexOf(i);
  s > -1 && n.splice(s, 1);
}
const Nn = (n, i, s) => s > i ? i : s < n ? n : s;
let Pf = () => {
};
const jn = {}, _0 = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
function z0(n) {
  return typeof n == "object" && n !== null;
}
const U0 = (n) => /^0[^.\s]+$/u.test(n);
// @__NO_SIDE_EFFECTS__
function Yf(n) {
  let i;
  return () => (i === void 0 && (i = n()), i);
}
const Ze = /* @__NO_SIDE_EFFECTS__ */ (n) => n, Hw = (n, i) => (s) => i(n(s)), ur = (...n) => n.reduce(Hw), er = /* @__NO_SIDE_EFFECTS__ */ (n, i, s) => {
  const l = i - n;
  return l === 0 ? 1 : (s - n) / l;
};
class Gf {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return Hf(this.subscriptions, i), () => qf(this.subscriptions, i);
  }
  notify(i, s, l) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](i, s, l);
      else
        for (let m = 0; m < o; m++) {
          const f = this.subscriptions[m];
          f && f(i, s, l);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const mn = /* @__NO_SIDE_EFFECTS__ */ (n) => n * 1e3, dn = /* @__NO_SIDE_EFFECTS__ */ (n) => n / 1e3;
function V0(n, i) {
  return i ? n * (1e3 / i) : 0;
}
const B0 = (n, i, s) => (((1 - 3 * s + 3 * i) * n + (3 * s - 6 * i)) * n + 3 * i) * n, qw = 1e-7, Pw = 12;
function Yw(n, i, s, l, o) {
  let m, f, d = 0;
  do
    f = i + (s - i) / 2, m = B0(f, l, o) - n, m > 0 ? s = f : i = f;
  while (Math.abs(m) > qw && ++d < Pw);
  return f;
}
function cr(n, i, s, l) {
  if (n === i && s === l)
    return Ze;
  const o = (m) => Yw(m, 0, 1, n, s);
  return (m) => m === 0 || m === 1 ? m : B0(o(m), i, l);
}
const L0 = (n) => (i) => i <= 0.5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2, k0 = (n) => (i) => 1 - n(1 - i), H0 = /* @__PURE__ */ cr(0.33, 1.53, 0.69, 0.99), Xf = /* @__PURE__ */ k0(H0), q0 = /* @__PURE__ */ L0(Xf), P0 = (n) => (n *= 2) < 1 ? 0.5 * Xf(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1))), Kf = (n) => 1 - Math.sin(Math.acos(n)), Y0 = k0(Kf), G0 = L0(Kf), Gw = /* @__PURE__ */ cr(0.42, 0, 1, 1), Xw = /* @__PURE__ */ cr(0, 0, 0.58, 1), X0 = /* @__PURE__ */ cr(0.42, 0, 0.58, 1), Kw = (n) => Array.isArray(n) && typeof n[0] != "number", K0 = (n) => Array.isArray(n) && typeof n[0] == "number", Qw = {
  linear: Ze,
  easeIn: Gw,
  easeInOut: X0,
  easeOut: Xw,
  circIn: Kf,
  circInOut: G0,
  circOut: Y0,
  backIn: Xf,
  backInOut: q0,
  backOut: H0,
  anticipate: P0
}, Zw = (n) => typeof n == "string", By = (n) => {
  if (K0(n)) {
    Pf(n.length === 4);
    const [i, s, l, o] = n;
    return cr(i, s, l, o);
  } else if (Zw(n))
    return Qw[n];
  return n;
}, _l = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function Fw(n, i) {
  let s = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), o = !1, m = !1;
  const f = /* @__PURE__ */ new WeakSet();
  let d = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function p(g) {
    f.has(g) && (h.schedule(g), n()), g(d);
  }
  const h = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (g, b = !1, x = !1) => {
      const E = x && o ? s : l;
      return b && f.add(g), E.has(g) || E.add(g), g;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (g) => {
      l.delete(g), f.delete(g);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (g) => {
      if (d = g, o) {
        m = !0;
        return;
      }
      o = !0, [s, l] = [l, s], s.forEach(p), s.clear(), o = !1, m && (m = !1, h.process(g));
    }
  };
  return h;
}
const Ww = 40;
function Q0(n, i) {
  let s = !1, l = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, m = () => s = !0, f = _l.reduce((H, W) => (H[W] = Fw(m), H), {}), { setup: d, read: p, resolveKeyframes: h, preUpdate: g, update: b, preRender: x, render: C, postRender: E } = f, R = () => {
    const H = jn.useManualTiming ? o.timestamp : performance.now();
    s = !1, jn.useManualTiming || (o.delta = l ? 1e3 / 60 : Math.max(Math.min(H - o.timestamp, Ww), 1)), o.timestamp = H, o.isProcessing = !0, d.process(o), p.process(o), h.process(o), g.process(o), b.process(o), x.process(o), C.process(o), E.process(o), o.isProcessing = !1, s && i && (l = !1, n(R));
  }, N = () => {
    s = !0, l = !0, o.isProcessing || n(R);
  };
  return { schedule: _l.reduce((H, W) => {
    const Z = f[W];
    return H[W] = (Q, I = !1, Y = !1) => (s || N(), Z.schedule(Q, I, Y)), H;
  }, {}), cancel: (H) => {
    for (let W = 0; W < _l.length; W++)
      f[_l[W]].cancel(H);
  }, state: o, steps: f };
}
const { schedule: Lt, cancel: li, state: ue, steps: Uc } = /* @__PURE__ */ Q0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ze, !0);
let Bl;
function Jw() {
  Bl = void 0;
}
const Ee = {
  now: () => (Bl === void 0 && Ee.set(ue.isProcessing || jn.useManualTiming ? ue.timestamp : performance.now()), Bl),
  set: (n) => {
    Bl = n, queueMicrotask(Jw);
  }
}, Z0 = (n) => (i) => typeof i == "string" && i.startsWith(n), Qf = /* @__PURE__ */ Z0("--"), $w = /* @__PURE__ */ Z0("var(--"), Zf = (n) => $w(n) ? Iw.test(n.split("/*")[0].trim()) : !1, Iw = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, ka = {
  test: (n) => typeof n == "number",
  parse: parseFloat,
  transform: (n) => n
}, nr = {
  ...ka,
  transform: (n) => Nn(0, 1, n)
}, zl = {
  ...ka,
  default: 1
}, Fs = (n) => Math.round(n * 1e5) / 1e5, Ff = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function tA(n) {
  return n == null;
}
const eA = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Wf = (n, i) => (s) => !!(typeof s == "string" && eA.test(s) && s.startsWith(n) || i && !tA(s) && Object.prototype.hasOwnProperty.call(s, i)), F0 = (n, i, s) => (l) => {
  if (typeof l != "string")
    return l;
  const [o, m, f, d] = l.match(Ff);
  return {
    [n]: parseFloat(o),
    [i]: parseFloat(m),
    [s]: parseFloat(f),
    alpha: d !== void 0 ? parseFloat(d) : 1
  };
}, nA = (n) => Nn(0, 255, n), Vc = {
  ...ka,
  transform: (n) => Math.round(nA(n))
}, _i = {
  test: /* @__PURE__ */ Wf("rgb", "red"),
  parse: /* @__PURE__ */ F0("red", "green", "blue"),
  transform: ({ red: n, green: i, blue: s, alpha: l = 1 }) => "rgba(" + Vc.transform(n) + ", " + Vc.transform(i) + ", " + Vc.transform(s) + ", " + Fs(nr.transform(l)) + ")"
};
function iA(n) {
  let i = "", s = "", l = "", o = "";
  return n.length > 5 ? (i = n.substring(1, 3), s = n.substring(3, 5), l = n.substring(5, 7), o = n.substring(7, 9)) : (i = n.substring(1, 2), s = n.substring(2, 3), l = n.substring(3, 4), o = n.substring(4, 5), i += i, s += s, l += l, o += o), {
    red: parseInt(i, 16),
    green: parseInt(s, 16),
    blue: parseInt(l, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const lf = {
  test: /* @__PURE__ */ Wf("#"),
  parse: iA,
  transform: _i.transform
}, fr = /* @__NO_SIDE_EFFECTS__ */ (n) => ({
  test: (i) => typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
  parse: parseFloat,
  transform: (i) => `${i}${n}`
}), si = /* @__PURE__ */ fr("deg"), hn = /* @__PURE__ */ fr("%"), ct = /* @__PURE__ */ fr("px"), aA = /* @__PURE__ */ fr("vh"), sA = /* @__PURE__ */ fr("vw"), Ly = {
  ...hn,
  parse: (n) => hn.parse(n) / 100,
  transform: (n) => hn.transform(n * 100)
}, Ra = {
  test: /* @__PURE__ */ Wf("hsl", "hue"),
  parse: /* @__PURE__ */ F0("hue", "saturation", "lightness"),
  transform: ({ hue: n, saturation: i, lightness: s, alpha: l = 1 }) => "hsla(" + Math.round(n) + ", " + hn.transform(Fs(i)) + ", " + hn.transform(Fs(s)) + ", " + Fs(nr.transform(l)) + ")"
}, Jt = {
  test: (n) => _i.test(n) || lf.test(n) || Ra.test(n),
  parse: (n) => _i.test(n) ? _i.parse(n) : Ra.test(n) ? Ra.parse(n) : lf.parse(n),
  transform: (n) => typeof n == "string" ? n : n.hasOwnProperty("red") ? _i.transform(n) : Ra.transform(n),
  getAnimatableNone: (n) => {
    const i = Jt.parse(n);
    return i.alpha = 0, Jt.transform(i);
  }
}, rA = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function lA(n) {
  return isNaN(n) && typeof n == "string" && (n.match(Ff)?.length || 0) + (n.match(rA)?.length || 0) > 0;
}
const W0 = "number", J0 = "color", oA = "var", uA = "var(", ky = "${}", cA = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ir(n) {
  const i = n.toString(), s = [], l = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let m = 0;
  const d = i.replace(cA, (p) => (Jt.test(p) ? (l.color.push(m), o.push(J0), s.push(Jt.parse(p))) : p.startsWith(uA) ? (l.var.push(m), o.push(oA), s.push(p)) : (l.number.push(m), o.push(W0), s.push(parseFloat(p))), ++m, ky)).split(ky);
  return { values: s, split: d, indexes: l, types: o };
}
function $0(n) {
  return ir(n).values;
}
function I0(n) {
  const { split: i, types: s } = ir(n), l = i.length;
  return (o) => {
    let m = "";
    for (let f = 0; f < l; f++)
      if (m += i[f], o[f] !== void 0) {
        const d = s[f];
        d === W0 ? m += Fs(o[f]) : d === J0 ? m += Jt.transform(o[f]) : m += o[f];
      }
    return m;
  };
}
const fA = (n) => typeof n == "number" ? 0 : Jt.test(n) ? Jt.getAnimatableNone(n) : n;
function mA(n) {
  const i = $0(n);
  return I0(n)(i.map(fA));
}
const oi = {
  test: lA,
  parse: $0,
  createTransformer: I0,
  getAnimatableNone: mA
};
function Bc(n, i, s) {
  return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? n + (i - n) * 6 * s : s < 1 / 2 ? i : s < 2 / 3 ? n + (i - n) * (2 / 3 - s) * 6 : n;
}
function dA({ hue: n, saturation: i, lightness: s, alpha: l }) {
  n /= 360, i /= 100, s /= 100;
  let o = 0, m = 0, f = 0;
  if (!i)
    o = m = f = s;
  else {
    const d = s < 0.5 ? s * (1 + i) : s + i - s * i, p = 2 * s - d;
    o = Bc(p, d, n + 1 / 3), m = Bc(p, d, n), f = Bc(p, d, n - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(m * 255),
    blue: Math.round(f * 255),
    alpha: l
  };
}
function Ql(n, i) {
  return (s) => s > 0 ? i : n;
}
const Ht = (n, i, s) => n + (i - n) * s, Lc = (n, i, s) => {
  const l = n * n, o = s * (i * i - l) + l;
  return o < 0 ? 0 : Math.sqrt(o);
}, hA = [lf, _i, Ra], pA = (n) => hA.find((i) => i.test(n));
function Hy(n) {
  const i = pA(n);
  if (!i)
    return !1;
  let s = i.parse(n);
  return i === Ra && (s = dA(s)), s;
}
const qy = (n, i) => {
  const s = Hy(n), l = Hy(i);
  if (!s || !l)
    return Ql(n, i);
  const o = { ...s };
  return (m) => (o.red = Lc(s.red, l.red, m), o.green = Lc(s.green, l.green, m), o.blue = Lc(s.blue, l.blue, m), o.alpha = Ht(s.alpha, l.alpha, m), _i.transform(o));
}, of = /* @__PURE__ */ new Set(["none", "hidden"]);
function yA(n, i) {
  return of.has(n) ? (s) => s <= 0 ? n : i : (s) => s >= 1 ? i : n;
}
function gA(n, i) {
  return (s) => Ht(n, i, s);
}
function Jf(n) {
  return typeof n == "number" ? gA : typeof n == "string" ? Zf(n) ? Ql : Jt.test(n) ? qy : xA : Array.isArray(n) ? tv : typeof n == "object" ? Jt.test(n) ? qy : vA : Ql;
}
function tv(n, i) {
  const s = [...n], l = s.length, o = n.map((m, f) => Jf(m)(m, i[f]));
  return (m) => {
    for (let f = 0; f < l; f++)
      s[f] = o[f](m);
    return s;
  };
}
function vA(n, i) {
  const s = { ...n, ...i }, l = {};
  for (const o in s)
    n[o] !== void 0 && i[o] !== void 0 && (l[o] = Jf(n[o])(n[o], i[o]));
  return (o) => {
    for (const m in l)
      s[m] = l[m](o);
    return s;
  };
}
function bA(n, i) {
  const s = [], l = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < i.values.length; o++) {
    const m = i.types[o], f = n.indexes[m][l[m]], d = n.values[f] ?? 0;
    s[o] = d, l[m]++;
  }
  return s;
}
const xA = (n, i) => {
  const s = oi.createTransformer(i), l = ir(n), o = ir(i);
  return l.indexes.var.length === o.indexes.var.length && l.indexes.color.length === o.indexes.color.length && l.indexes.number.length >= o.indexes.number.length ? of.has(n) && !o.values.length || of.has(i) && !l.values.length ? yA(n, i) : ur(tv(bA(l, o), o.values), s) : Ql(n, i);
};
function ev(n, i, s) {
  return typeof n == "number" && typeof i == "number" && typeof s == "number" ? Ht(n, i, s) : Jf(n)(n, i);
}
const SA = (n) => {
  const i = ({ timestamp: s }) => n(s);
  return {
    start: (s = !0) => Lt.update(i, s),
    stop: () => li(i),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ue.isProcessing ? ue.timestamp : Ee.now()
  };
}, nv = (n, i, s = 10) => {
  let l = "";
  const o = Math.max(Math.round(i / s), 2);
  for (let m = 0; m < o; m++)
    l += Math.round(n(m / (o - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${l.substring(0, l.length - 2)})`;
}, Zl = 2e4;
function $f(n) {
  let i = 0;
  const s = 50;
  let l = n.next(i);
  for (; !l.done && i < Zl; )
    i += s, l = n.next(i);
  return i >= Zl ? 1 / 0 : i;
}
function TA(n, i = 100, s) {
  const l = s({ ...n, keyframes: [0, i] }), o = Math.min($f(l), Zl);
  return {
    type: "keyframes",
    ease: (m) => l.next(o * m).value / i,
    duration: /* @__PURE__ */ dn(o)
  };
}
const wA = 5;
function iv(n, i, s) {
  const l = Math.max(i - wA, 0);
  return V0(s - n(l), i - l);
}
const Yt = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, kc = 1e-3;
function AA({ duration: n = Yt.duration, bounce: i = Yt.bounce, velocity: s = Yt.velocity, mass: l = Yt.mass }) {
  let o, m, f = 1 - i;
  f = Nn(Yt.minDamping, Yt.maxDamping, f), n = Nn(Yt.minDuration, Yt.maxDuration, /* @__PURE__ */ dn(n)), f < 1 ? (o = (h) => {
    const g = h * f, b = g * n, x = g - s, C = uf(h, f), E = Math.exp(-b);
    return kc - x / C * E;
  }, m = (h) => {
    const b = h * f * n, x = b * s + s, C = Math.pow(f, 2) * Math.pow(h, 2) * n, E = Math.exp(-b), R = uf(Math.pow(h, 2), f);
    return (-o(h) + kc > 0 ? -1 : 1) * ((x - C) * E) / R;
  }) : (o = (h) => {
    const g = Math.exp(-h * n), b = (h - s) * n + 1;
    return -kc + g * b;
  }, m = (h) => {
    const g = Math.exp(-h * n), b = (s - h) * (n * n);
    return g * b;
  });
  const d = 5 / n, p = MA(o, m, d);
  if (n = /* @__PURE__ */ mn(n), isNaN(p))
    return {
      stiffness: Yt.stiffness,
      damping: Yt.damping,
      duration: n
    };
  {
    const h = Math.pow(p, 2) * l;
    return {
      stiffness: h,
      damping: f * 2 * Math.sqrt(l * h),
      duration: n
    };
  }
}
const EA = 12;
function MA(n, i, s) {
  let l = s;
  for (let o = 1; o < EA; o++)
    l = l - n(l) / i(l);
  return l;
}
function uf(n, i) {
  return n * Math.sqrt(1 - i * i);
}
const RA = ["duration", "bounce"], OA = ["stiffness", "damping", "mass"];
function Py(n, i) {
  return i.some((s) => n[s] !== void 0);
}
function CA(n) {
  let i = {
    velocity: Yt.velocity,
    stiffness: Yt.stiffness,
    damping: Yt.damping,
    mass: Yt.mass,
    isResolvedFromDuration: !1,
    ...n
  };
  if (!Py(n, OA) && Py(n, RA))
    if (n.visualDuration) {
      const s = n.visualDuration, l = 2 * Math.PI / (s * 1.2), o = l * l, m = 2 * Nn(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(o);
      i = {
        ...i,
        mass: Yt.mass,
        stiffness: o,
        damping: m
      };
    } else {
      const s = AA(n);
      i = {
        ...i,
        ...s,
        mass: Yt.mass
      }, i.isResolvedFromDuration = !0;
    }
  return i;
}
function Fl(n = Yt.visualDuration, i = Yt.bounce) {
  const s = typeof n != "object" ? {
    visualDuration: n,
    keyframes: [0, 1],
    bounce: i
  } : n;
  let { restSpeed: l, restDelta: o } = s;
  const m = s.keyframes[0], f = s.keyframes[s.keyframes.length - 1], d = { done: !1, value: m }, { stiffness: p, damping: h, mass: g, duration: b, velocity: x, isResolvedFromDuration: C } = CA({
    ...s,
    velocity: -/* @__PURE__ */ dn(s.velocity || 0)
  }), E = x || 0, R = h / (2 * Math.sqrt(p * g)), N = f - m, V = /* @__PURE__ */ dn(Math.sqrt(p / g)), B = Math.abs(N) < 5;
  l || (l = B ? Yt.restSpeed.granular : Yt.restSpeed.default), o || (o = B ? Yt.restDelta.granular : Yt.restDelta.default);
  let H;
  if (R < 1) {
    const Z = uf(V, R);
    H = (Q) => {
      const I = Math.exp(-R * V * Q);
      return f - I * ((E + R * V * N) / Z * Math.sin(Z * Q) + N * Math.cos(Z * Q));
    };
  } else if (R === 1)
    H = (Z) => f - Math.exp(-V * Z) * (N + (E + V * N) * Z);
  else {
    const Z = V * Math.sqrt(R * R - 1);
    H = (Q) => {
      const I = Math.exp(-R * V * Q), Y = Math.min(Z * Q, 300);
      return f - I * ((E + R * V * N) * Math.sinh(Y) + Z * N * Math.cosh(Y)) / Z;
    };
  }
  const W = {
    calculatedDuration: C && b || null,
    next: (Z) => {
      const Q = H(Z);
      if (C)
        d.done = Z >= b;
      else {
        let I = Z === 0 ? E : 0;
        R < 1 && (I = Z === 0 ? /* @__PURE__ */ mn(E) : iv(H, Z, Q));
        const Y = Math.abs(I) <= l, ot = Math.abs(f - Q) <= o;
        d.done = Y && ot;
      }
      return d.value = d.done ? f : Q, d;
    },
    toString: () => {
      const Z = Math.min($f(W), Zl), Q = nv((I) => W.next(Z * I).value, Z, 30);
      return Z + "ms " + Q;
    },
    toTransition: () => {
    }
  };
  return W;
}
Fl.applyToOptions = (n) => {
  const i = TA(n, 100, Fl);
  return n.ease = i.ease, n.duration = /* @__PURE__ */ mn(i.duration), n.type = "keyframes", n;
};
function cf({ keyframes: n, velocity: i = 0, power: s = 0.8, timeConstant: l = 325, bounceDamping: o = 10, bounceStiffness: m = 500, modifyTarget: f, min: d, max: p, restDelta: h = 0.5, restSpeed: g }) {
  const b = n[0], x = {
    done: !1,
    value: b
  }, C = (Y) => d !== void 0 && Y < d || p !== void 0 && Y > p, E = (Y) => d === void 0 ? p : p === void 0 || Math.abs(d - Y) < Math.abs(p - Y) ? d : p;
  let R = s * i;
  const N = b + R, V = f === void 0 ? N : f(N);
  V !== N && (R = V - b);
  const B = (Y) => -R * Math.exp(-Y / l), H = (Y) => V + B(Y), W = (Y) => {
    const ot = B(Y), rt = H(Y);
    x.done = Math.abs(ot) <= h, x.value = x.done ? V : rt;
  };
  let Z, Q;
  const I = (Y) => {
    C(x.value) && (Z = Y, Q = Fl({
      keyframes: [x.value, E(x.value)],
      velocity: iv(H, Y, x.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: m,
      restDelta: h,
      restSpeed: g
    }));
  };
  return I(0), {
    calculatedDuration: null,
    next: (Y) => {
      let ot = !1;
      return !Q && Z === void 0 && (ot = !0, W(Y), I(Y)), Z !== void 0 && Y >= Z ? Q.next(Y - Z) : (!ot && W(Y), x);
    }
  };
}
function DA(n, i, s) {
  const l = [], o = s || jn.mix || ev, m = n.length - 1;
  for (let f = 0; f < m; f++) {
    let d = o(n[f], n[f + 1]);
    if (i) {
      const p = Array.isArray(i) ? i[f] || Ze : i;
      d = ur(p, d);
    }
    l.push(d);
  }
  return l;
}
function NA(n, i, { clamp: s = !0, ease: l, mixer: o } = {}) {
  const m = n.length;
  if (Pf(m === i.length), m === 1)
    return () => i[0];
  if (m === 2 && i[0] === i[1])
    return () => i[1];
  const f = n[0] === n[1];
  n[0] > n[m - 1] && (n = [...n].reverse(), i = [...i].reverse());
  const d = DA(i, l, o), p = d.length, h = (g) => {
    if (f && g < n[0])
      return i[0];
    let b = 0;
    if (p > 1)
      for (; b < n.length - 2 && !(g < n[b + 1]); b++)
        ;
    const x = /* @__PURE__ */ er(n[b], n[b + 1], g);
    return d[b](x);
  };
  return s ? (g) => h(Nn(n[0], n[m - 1], g)) : h;
}
function jA(n, i) {
  const s = n[n.length - 1];
  for (let l = 1; l <= i; l++) {
    const o = /* @__PURE__ */ er(0, i, l);
    n.push(Ht(s, 1, o));
  }
}
function _A(n) {
  const i = [0];
  return jA(i, n.length - 1), i;
}
function zA(n, i) {
  return n.map((s) => s * i);
}
function UA(n, i) {
  return n.map(() => i || X0).splice(0, n.length - 1);
}
function Ws({ duration: n = 300, keyframes: i, times: s, ease: l = "easeInOut" }) {
  const o = Kw(l) ? l.map(By) : By(l), m = {
    done: !1,
    value: i[0]
  }, f = zA(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    s && s.length === i.length ? s : _A(i),
    n
  ), d = NA(f, i, {
    ease: Array.isArray(o) ? o : UA(i, o)
  });
  return {
    calculatedDuration: n,
    next: (p) => (m.value = d(p), m.done = p >= n, m)
  };
}
const VA = (n) => n !== null;
function If(n, { repeat: i, repeatType: s = "loop" }, l, o = 1) {
  const m = n.filter(VA), d = o < 0 || i && s !== "loop" && i % 2 === 1 ? 0 : m.length - 1;
  return !d || l === void 0 ? m[d] : l;
}
const BA = {
  decay: cf,
  inertia: cf,
  tween: Ws,
  keyframes: Ws,
  spring: Fl
};
function av(n) {
  typeof n.type == "string" && (n.type = BA[n.type]);
}
class tm {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((i) => {
      this.resolve = i;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(i, s) {
    return this.finished.then(i, s);
  }
}
const LA = (n) => n / 100;
class em extends tm {
  constructor(i) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const { motionValue: s } = this.options;
      s && s.updatedAt !== Ee.now() && this.tick(Ee.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = i, this.initAnimation(), this.play(), i.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: i } = this;
    av(i);
    const { type: s = Ws, repeat: l = 0, repeatDelay: o = 0, repeatType: m, velocity: f = 0 } = i;
    let { keyframes: d } = i;
    const p = s || Ws;
    p !== Ws && typeof d[0] != "number" && (this.mixKeyframes = ur(LA, ev(d[0], d[1])), d = [0, 100]);
    const h = p({ ...i, keyframes: d });
    m === "mirror" && (this.mirroredGenerator = p({
      ...i,
      keyframes: [...d].reverse(),
      velocity: -f
    })), h.calculatedDuration === null && (h.calculatedDuration = $f(h));
    const { calculatedDuration: g } = h;
    this.calculatedDuration = g, this.resolvedDuration = g + o, this.totalDuration = this.resolvedDuration * (l + 1) - o, this.generator = h;
  }
  updateTime(i) {
    const s = Math.round(i - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = s;
  }
  tick(i, s = !1) {
    const { generator: l, totalDuration: o, mixKeyframes: m, mirroredGenerator: f, resolvedDuration: d, calculatedDuration: p } = this;
    if (this.startTime === null)
      return l.next(0);
    const { delay: h = 0, keyframes: g, repeat: b, repeatType: x, repeatDelay: C, type: E, onUpdate: R, finalKeyframe: N } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, i) : this.speed < 0 && (this.startTime = Math.min(i - o / this.speed, this.startTime)), s ? this.currentTime = i : this.updateTime(i);
    const V = this.currentTime - h * (this.playbackSpeed >= 0 ? 1 : -1), B = this.playbackSpeed >= 0 ? V < 0 : V > o;
    this.currentTime = Math.max(V, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = o);
    let H = this.currentTime, W = l;
    if (b) {
      const Y = Math.min(this.currentTime, o) / d;
      let ot = Math.floor(Y), rt = Y % 1;
      !rt && Y >= 1 && (rt = 1), rt === 1 && ot--, ot = Math.min(ot, b + 1), !!(ot % 2) && (x === "reverse" ? (rt = 1 - rt, C && (rt -= C / d)) : x === "mirror" && (W = f)), H = Nn(0, 1, rt) * d;
    }
    const Z = B ? { done: !1, value: g[0] } : W.next(H);
    m && (Z.value = m(Z.value));
    let { done: Q } = Z;
    !B && p !== null && (Q = this.playbackSpeed >= 0 ? this.currentTime >= o : this.currentTime <= 0);
    const I = this.holdTime === null && (this.state === "finished" || this.state === "running" && Q);
    return I && E !== cf && (Z.value = If(g, this.options, N, this.speed)), R && R(Z.value), I && this.finish(), Z;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(i, s) {
    return this.finished.then(i, s);
  }
  get duration() {
    return /* @__PURE__ */ dn(this.calculatedDuration);
  }
  get time() {
    return /* @__PURE__ */ dn(this.currentTime);
  }
  set time(i) {
    i = /* @__PURE__ */ mn(i), this.currentTime = i, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = i : this.driver && (this.startTime = this.driver.now() - i / this.playbackSpeed), this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(i) {
    this.updateTime(Ee.now());
    const s = this.playbackSpeed !== i;
    this.playbackSpeed = i, s && (this.time = /* @__PURE__ */ dn(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: i = SA, startTime: s } = this.options;
    this.driver || (this.driver = i((o) => this.tick(o))), this.options.onPlay?.();
    const l = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = l) : this.holdTime !== null ? this.startTime = l - this.holdTime : this.startTime || (this.startTime = s ?? l), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Ee.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(i) {
    return this.startTime = 0, this.tick(i, !0);
  }
  attachTimeline(i) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), i.observe(this);
  }
}
function kA(n) {
  for (let i = 1; i < n.length; i++)
    n[i] ?? (n[i] = n[i - 1]);
}
const zi = (n) => n * 180 / Math.PI, ff = (n) => {
  const i = zi(Math.atan2(n[1], n[0]));
  return mf(i);
}, HA = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (n) => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
  rotate: ff,
  rotateZ: ff,
  skewX: (n) => zi(Math.atan(n[1])),
  skewY: (n) => zi(Math.atan(n[2])),
  skew: (n) => (Math.abs(n[1]) + Math.abs(n[2])) / 2
}, mf = (n) => (n = n % 360, n < 0 && (n += 360), n), Yy = ff, Gy = (n) => Math.sqrt(n[0] * n[0] + n[1] * n[1]), Xy = (n) => Math.sqrt(n[4] * n[4] + n[5] * n[5]), qA = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Gy,
  scaleY: Xy,
  scale: (n) => (Gy(n) + Xy(n)) / 2,
  rotateX: (n) => mf(zi(Math.atan2(n[6], n[5]))),
  rotateY: (n) => mf(zi(Math.atan2(-n[2], n[0]))),
  rotateZ: Yy,
  rotate: Yy,
  skewX: (n) => zi(Math.atan(n[4])),
  skewY: (n) => zi(Math.atan(n[1])),
  skew: (n) => (Math.abs(n[1]) + Math.abs(n[4])) / 2
};
function df(n) {
  return n.includes("scale") ? 1 : 0;
}
function hf(n, i) {
  if (!n || n === "none")
    return df(i);
  const s = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let l, o;
  if (s)
    l = qA, o = s;
  else {
    const d = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    l = HA, o = d;
  }
  if (!o)
    return df(i);
  const m = l[i], f = o[1].split(",").map(YA);
  return typeof m == "function" ? m(f) : f[m];
}
const PA = (n, i) => {
  const { transform: s = "none" } = getComputedStyle(n);
  return hf(s, i);
};
function YA(n) {
  return parseFloat(n.trim());
}
const Ha = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], qa = new Set(Ha), Ky = (n) => n === ka || n === ct, GA = /* @__PURE__ */ new Set(["x", "y", "z"]), XA = Ha.filter((n) => !GA.has(n));
function KA(n) {
  const i = [];
  return XA.forEach((s) => {
    const l = n.getValue(s);
    l !== void 0 && (i.push([s, l.get()]), l.set(s.startsWith("scale") ? 1 : 0));
  }), i;
}
const Vi = {
  // Dimensions
  width: ({ x: n }, { paddingLeft: i = "0", paddingRight: s = "0" }) => n.max - n.min - parseFloat(i) - parseFloat(s),
  height: ({ y: n }, { paddingTop: i = "0", paddingBottom: s = "0" }) => n.max - n.min - parseFloat(i) - parseFloat(s),
  top: (n, { top: i }) => parseFloat(i),
  left: (n, { left: i }) => parseFloat(i),
  bottom: ({ y: n }, { top: i }) => parseFloat(i) + (n.max - n.min),
  right: ({ x: n }, { left: i }) => parseFloat(i) + (n.max - n.min),
  // Transform
  x: (n, { transform: i }) => hf(i, "x"),
  y: (n, { transform: i }) => hf(i, "y")
};
Vi.translateX = Vi.x;
Vi.translateY = Vi.y;
const Bi = /* @__PURE__ */ new Set();
let pf = !1, yf = !1, gf = !1;
function sv() {
  if (yf) {
    const n = Array.from(Bi).filter((l) => l.needsMeasurement), i = new Set(n.map((l) => l.element)), s = /* @__PURE__ */ new Map();
    i.forEach((l) => {
      const o = KA(l);
      o.length && (s.set(l, o), l.render());
    }), n.forEach((l) => l.measureInitialState()), i.forEach((l) => {
      l.render();
      const o = s.get(l);
      o && o.forEach(([m, f]) => {
        l.getValue(m)?.set(f);
      });
    }), n.forEach((l) => l.measureEndState()), n.forEach((l) => {
      l.suspendedScrollY !== void 0 && window.scrollTo(0, l.suspendedScrollY);
    });
  }
  yf = !1, pf = !1, Bi.forEach((n) => n.complete(gf)), Bi.clear();
}
function rv() {
  Bi.forEach((n) => {
    n.readKeyframes(), n.needsMeasurement && (yf = !0);
  });
}
function QA() {
  gf = !0, rv(), sv(), gf = !1;
}
class nm {
  constructor(i, s, l, o, m, f = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...i], this.onComplete = s, this.name = l, this.motionValue = o, this.element = m, this.isAsync = f;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Bi.add(this), pf || (pf = !0, Lt.read(rv), Lt.resolveKeyframes(sv))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, name: s, element: l, motionValue: o } = this;
    if (i[0] === null) {
      const m = o?.get(), f = i[i.length - 1];
      if (m !== void 0)
        i[0] = m;
      else if (l && s) {
        const d = l.readValue(s, f);
        d != null && (i[0] = d);
      }
      i[0] === void 0 && (i[0] = f), o && m === void 0 && o.set(i[0]);
    }
    kA(i);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(i = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i), Bi.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Bi.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const ZA = (n) => n.startsWith("--");
function FA(n, i, s) {
  ZA(i) ? n.style.setProperty(i, s) : n.style[i] = s;
}
const WA = /* @__PURE__ */ Yf(() => window.ScrollTimeline !== void 0), JA = {};
function $A(n, i) {
  const s = /* @__PURE__ */ Yf(n);
  return () => JA[i] ?? s();
}
const lv = /* @__PURE__ */ $A(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Zs = ([n, i, s, l]) => `cubic-bezier(${n}, ${i}, ${s}, ${l})`, Qy = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Zs([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Zs([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Zs([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Zs([0.33, 1.53, 0.69, 0.99])
};
function ov(n, i) {
  if (n)
    return typeof n == "function" ? lv() ? nv(n, i) : "ease-out" : K0(n) ? Zs(n) : Array.isArray(n) ? n.map((s) => ov(s, i) || Qy.easeOut) : Qy[n];
}
function IA(n, i, s, { delay: l = 0, duration: o = 300, repeat: m = 0, repeatType: f = "loop", ease: d = "easeOut", times: p } = {}, h = void 0) {
  const g = {
    [i]: s
  };
  p && (g.offset = p);
  const b = ov(d, o);
  Array.isArray(b) && (g.easing = b);
  const x = {
    delay: l,
    duration: o,
    easing: Array.isArray(b) ? "linear" : b,
    fill: "both",
    iterations: m + 1,
    direction: f === "reverse" ? "alternate" : "normal"
  };
  return h && (x.pseudoElement = h), n.animate(g, x);
}
function uv(n) {
  return typeof n == "function" && "applyToOptions" in n;
}
function tE({ type: n, ...i }) {
  return uv(n) && lv() ? n.applyToOptions(i) : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i);
}
class eE extends tm {
  constructor(i) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !i)
      return;
    const { element: s, name: l, keyframes: o, pseudoElement: m, allowFlatten: f = !1, finalKeyframe: d, onComplete: p } = i;
    this.isPseudoElement = !!m, this.allowFlatten = f, this.options = i, Pf(typeof i.type != "string");
    const h = tE(i);
    this.animation = IA(s, l, o, h, m), h.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !m) {
        const g = If(o, this.options, d, this.speed);
        this.updateMotionValue ? this.updateMotionValue(g) : FA(s, l, g), this.animation.cancel();
      }
      p?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: i } = this;
    i === "idle" || i === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const i = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ dn(Number(i));
  }
  get time() {
    return /* @__PURE__ */ dn(Number(this.animation.currentTime) || 0);
  }
  set time(i) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ mn(i);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(i) {
    i < 0 && (this.finishedTime = null), this.animation.playbackRate = i;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(i) {
    this.animation.startTime = i;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: i, observe: s }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, i && WA() ? (this.animation.timeline = i, Ze) : s(this);
  }
}
const cv = {
  anticipate: P0,
  backInOut: q0,
  circInOut: G0
};
function nE(n) {
  return n in cv;
}
function iE(n) {
  typeof n.ease == "string" && nE(n.ease) && (n.ease = cv[n.ease]);
}
const Zy = 10;
class aE extends eE {
  constructor(i) {
    iE(i), av(i), super(i), i.startTime && (this.startTime = i.startTime), this.options = i;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(i) {
    const { motionValue: s, onUpdate: l, onComplete: o, element: m, ...f } = this.options;
    if (!s)
      return;
    if (i !== void 0) {
      s.set(i);
      return;
    }
    const d = new em({
      ...f,
      autoplay: !1
    }), p = /* @__PURE__ */ mn(this.finishedTime ?? this.time);
    s.setWithVelocity(d.sample(p - Zy).value, d.sample(p).value, Zy), d.stop();
  }
}
const Fy = (n, i) => i === "zIndex" ? !1 : !!(typeof n == "number" || Array.isArray(n) || typeof n == "string" && // It's animatable if we have a string
(oi.test(n) || n === "0") && // And it contains numbers and/or colors
!n.startsWith("url("));
function sE(n) {
  const i = n[0];
  if (n.length === 1)
    return !0;
  for (let s = 0; s < n.length; s++)
    if (n[s] !== i)
      return !0;
}
function rE(n, i, s, l) {
  const o = n[0];
  if (o === null)
    return !1;
  if (i === "display" || i === "visibility")
    return !0;
  const m = n[n.length - 1], f = Fy(o, i), d = Fy(m, i);
  return !f || !d ? !1 : sE(n) || (s === "spring" || uv(s)) && l;
}
const lE = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), oE = /* @__PURE__ */ Yf(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function uE(n) {
  const { motionValue: i, name: s, repeatDelay: l, repeatType: o, damping: m, type: f } = n;
  if (!(i?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: p, transformTemplate: h } = i.owner.getProps();
  return oE() && s && lE.has(s) && (s !== "transform" || !h) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !p && !l && o !== "mirror" && m !== 0 && f !== "inertia";
}
const cE = 40;
class fE extends tm {
  constructor({ autoplay: i = !0, delay: s = 0, type: l = "keyframes", repeat: o = 0, repeatDelay: m = 0, repeatType: f = "loop", keyframes: d, name: p, motionValue: h, element: g, ...b }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = Ee.now();
    const x = {
      autoplay: i,
      delay: s,
      type: l,
      repeat: o,
      repeatDelay: m,
      repeatType: f,
      name: p,
      motionValue: h,
      element: g,
      ...b
    }, C = g?.KeyframeResolver || nm;
    this.keyframeResolver = new C(d, (E, R, N) => this.onKeyframesResolved(E, R, x, !N), p, h, g), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(i, s, l, o) {
    this.keyframeResolver = void 0;
    const { name: m, type: f, velocity: d, delay: p, isHandoff: h, onUpdate: g } = l;
    this.resolvedAt = Ee.now(), rE(i, m, f, d) || ((jn.instantAnimations || !p) && g?.(If(i, l, s)), i[0] = i[i.length - 1], l.duration = 0, l.repeat = 0);
    const x = {
      startTime: o ? this.resolvedAt ? this.resolvedAt - this.createdAt > cE ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: s,
      ...l,
      keyframes: i
    }, C = !h && uE(x) ? new aE({
      ...x,
      element: x.motionValue.owner.current
    }) : new em(x);
    C.finished.then(() => this.notifyFinished()).catch(Ze), this.pendingTimeline && (this.stopTimeline = C.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = C;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(i, s) {
    return this.finished.finally(i).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), QA()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(i) {
    this.animation.time = i;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(i) {
    this.animation.speed = i;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(i) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(i) : this.pendingTimeline = i, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
const mE = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function dE(n) {
  const i = mE.exec(n);
  if (!i)
    return [,];
  const [, s, l, o] = i;
  return [`--${s ?? l}`, o];
}
function fv(n, i, s = 1) {
  const [l, o] = dE(n);
  if (!l)
    return;
  const m = window.getComputedStyle(i).getPropertyValue(l);
  if (m) {
    const f = m.trim();
    return _0(f) ? parseFloat(f) : f;
  }
  return Zf(o) ? fv(o, i, s + 1) : o;
}
function im(n, i) {
  return n?.[i] ?? n?.default ?? n;
}
const mv = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Ha
]), hE = {
  test: (n) => n === "auto",
  parse: (n) => n
}, dv = (n) => (i) => i.test(n), hv = [ka, ct, hn, si, sA, aA, hE], Wy = (n) => hv.find(dv(n));
function pE(n) {
  return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || U0(n) : !0;
}
const yE = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function gE(n) {
  const [i, s] = n.slice(0, -1).split("(");
  if (i === "drop-shadow")
    return n;
  const [l] = s.match(Ff) || [];
  if (!l)
    return n;
  const o = s.replace(l, "");
  let m = yE.has(i) ? 1 : 0;
  return l !== s && (m *= 100), i + "(" + m + o + ")";
}
const vE = /\b([a-z-]*)\(.*?\)/gu, vf = {
  ...oi,
  getAnimatableNone: (n) => {
    const i = n.match(vE);
    return i ? i.map(gE).join(" ") : n;
  }
}, Jy = {
  ...ka,
  transform: Math.round
}, bE = {
  rotate: si,
  rotateX: si,
  rotateY: si,
  rotateZ: si,
  scale: zl,
  scaleX: zl,
  scaleY: zl,
  scaleZ: zl,
  skew: si,
  skewX: si,
  skewY: si,
  distance: ct,
  translateX: ct,
  translateY: ct,
  translateZ: ct,
  x: ct,
  y: ct,
  z: ct,
  perspective: ct,
  transformPerspective: ct,
  opacity: nr,
  originX: Ly,
  originY: Ly,
  originZ: ct
}, am = {
  // Border props
  borderWidth: ct,
  borderTopWidth: ct,
  borderRightWidth: ct,
  borderBottomWidth: ct,
  borderLeftWidth: ct,
  borderRadius: ct,
  radius: ct,
  borderTopLeftRadius: ct,
  borderTopRightRadius: ct,
  borderBottomRightRadius: ct,
  borderBottomLeftRadius: ct,
  // Positioning props
  width: ct,
  maxWidth: ct,
  height: ct,
  maxHeight: ct,
  top: ct,
  right: ct,
  bottom: ct,
  left: ct,
  // Spacing props
  padding: ct,
  paddingTop: ct,
  paddingRight: ct,
  paddingBottom: ct,
  paddingLeft: ct,
  margin: ct,
  marginTop: ct,
  marginRight: ct,
  marginBottom: ct,
  marginLeft: ct,
  // Misc
  backgroundPositionX: ct,
  backgroundPositionY: ct,
  ...bE,
  zIndex: Jy,
  // SVG
  fillOpacity: nr,
  strokeOpacity: nr,
  numOctaves: Jy
}, xE = {
  ...am,
  // Color props
  color: Jt,
  backgroundColor: Jt,
  outlineColor: Jt,
  fill: Jt,
  stroke: Jt,
  // Border props
  borderColor: Jt,
  borderTopColor: Jt,
  borderRightColor: Jt,
  borderBottomColor: Jt,
  borderLeftColor: Jt,
  filter: vf,
  WebkitFilter: vf
}, pv = (n) => xE[n];
function yv(n, i) {
  let s = pv(n);
  return s !== vf && (s = oi), s.getAnimatableNone ? s.getAnimatableNone(i) : void 0;
}
const SE = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function TE(n, i, s) {
  let l = 0, o;
  for (; l < n.length && !o; ) {
    const m = n[l];
    typeof m == "string" && !SE.has(m) && ir(m).values.length && (o = n[l]), l++;
  }
  if (o && s)
    for (const m of i)
      n[m] = yv(s, o);
}
class wE extends nm {
  constructor(i, s, l, o, m) {
    super(i, s, l, o, m, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: s, name: l } = this;
    if (!s || !s.current)
      return;
    super.readKeyframes();
    for (let p = 0; p < i.length; p++) {
      let h = i[p];
      if (typeof h == "string" && (h = h.trim(), Zf(h))) {
        const g = fv(h, s.current);
        g !== void 0 && (i[p] = g), p === i.length - 1 && (this.finalKeyframe = h);
      }
    }
    if (this.resolveNoneKeyframes(), !mv.has(l) || i.length !== 2)
      return;
    const [o, m] = i, f = Wy(o), d = Wy(m);
    if (f !== d)
      if (Ky(f) && Ky(d))
        for (let p = 0; p < i.length; p++) {
          const h = i[p];
          typeof h == "string" && (i[p] = parseFloat(h));
        }
      else Vi[l] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: s } = this, l = [];
    for (let o = 0; o < i.length; o++)
      (i[o] === null || pE(i[o])) && l.push(o);
    l.length && TE(i, l, s);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: s, name: l } = this;
    if (!i || !i.current)
      return;
    l === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Vi[l](i.measureViewportBox(), window.getComputedStyle(i.current)), s[0] = this.measuredOrigin;
    const o = s[s.length - 1];
    o !== void 0 && i.getValue(l, o).jump(o, !1);
  }
  measureEndState() {
    const { element: i, name: s, unresolvedKeyframes: l } = this;
    if (!i || !i.current)
      return;
    const o = i.getValue(s);
    o && o.jump(this.measuredOrigin, !1);
    const m = l.length - 1, f = l[m];
    l[m] = Vi[s](i.measureViewportBox(), window.getComputedStyle(i.current)), f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f), this.removedTransforms?.length && this.removedTransforms.forEach(([d, p]) => {
      i.getValue(d).set(p);
    }), this.resolveNoneKeyframes();
  }
}
function AE(n, i, s) {
  if (n instanceof EventTarget)
    return [n];
  if (typeof n == "string") {
    let l = document;
    const o = s?.[n] ?? l.querySelectorAll(n);
    return o ? Array.from(o) : [];
  }
  return Array.from(n);
}
const gv = (n, i) => i && typeof n == "number" ? i.transform(n) : n;
function vv(n) {
  return z0(n) && "offsetHeight" in n;
}
const $y = 30, EE = (n) => !isNaN(parseFloat(n));
class ME {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(i, s = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (l, o = !0) => {
      const m = Ee.now();
      if (this.updatedAt !== m && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(l), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const f of this.dependents)
          f.dirty();
      o && this.events.renderRequest?.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(i), this.owner = s.owner;
  }
  setCurrent(i) {
    this.current = i, this.updatedAt = Ee.now(), this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = EE(this.current));
  }
  setPrevFrameValue(i = this.current) {
    this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(i) {
    return this.on("change", i);
  }
  on(i, s) {
    this.events[i] || (this.events[i] = new Gf());
    const l = this.events[i].add(s);
    return i === "change" ? () => {
      l(), Lt.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : l;
  }
  clearListeners() {
    for (const i in this.events)
      this.events[i].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(i, s) {
    this.passiveEffect = i, this.stopPassiveEffect = s;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(i, s = !0) {
    !s || !this.passiveEffect ? this.updateAndNotify(i, s) : this.passiveEffect(i, this.updateAndNotify);
  }
  setWithVelocity(i, s, l) {
    this.set(s), this.prev = void 0, this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt - l;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(i, s = !0) {
    this.updateAndNotify(i), this.prev = i, this.prevUpdatedAt = this.prevFrameValue = void 0, s && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(i) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(i);
  }
  removeDependent(i) {
    this.dependents && this.dependents.delete(i);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const i = Ee.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > $y)
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, $y);
    return V0(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(i) {
    return this.stop(), new Promise((s) => {
      this.hasAnimated = !0, this.animation = i(s), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function _a(n, i) {
  return new ME(n, i);
}
const { schedule: sm } = /* @__PURE__ */ Q0(queueMicrotask, !1), $e = {
  x: !1,
  y: !1
};
function bv() {
  return $e.x || $e.y;
}
function RE(n) {
  return n === "x" || n === "y" ? $e[n] ? null : ($e[n] = !0, () => {
    $e[n] = !1;
  }) : $e.x || $e.y ? null : ($e.x = $e.y = !0, () => {
    $e.x = $e.y = !1;
  });
}
function xv(n, i) {
  const s = AE(n), l = new AbortController(), o = {
    passive: !0,
    ...i,
    signal: l.signal
  };
  return [s, o, () => l.abort()];
}
function Iy(n) {
  return !(n.pointerType === "touch" || bv());
}
function OE(n, i, s = {}) {
  const [l, o, m] = xv(n, s), f = (d) => {
    if (!Iy(d))
      return;
    const { target: p } = d, h = i(p, d);
    if (typeof h != "function" || !p)
      return;
    const g = (b) => {
      Iy(b) && (h(b), p.removeEventListener("pointerleave", g));
    };
    p.addEventListener("pointerleave", g, o);
  };
  return l.forEach((d) => {
    d.addEventListener("pointerenter", f, o);
  }), m;
}
const Sv = (n, i) => i ? n === i ? !0 : Sv(n, i.parentElement) : !1, rm = (n) => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1, CE = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function DE(n) {
  return CE.has(n.tagName) || n.tabIndex !== -1;
}
const Ll = /* @__PURE__ */ new WeakSet();
function tg(n) {
  return (i) => {
    i.key === "Enter" && n(i);
  };
}
function Hc(n, i) {
  n.dispatchEvent(new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }));
}
const NE = (n, i) => {
  const s = n.currentTarget;
  if (!s)
    return;
  const l = tg(() => {
    if (Ll.has(s))
      return;
    Hc(s, "down");
    const o = tg(() => {
      Hc(s, "up");
    }), m = () => Hc(s, "cancel");
    s.addEventListener("keyup", o, i), s.addEventListener("blur", m, i);
  });
  s.addEventListener("keydown", l, i), s.addEventListener("blur", () => s.removeEventListener("keydown", l), i);
};
function eg(n) {
  return rm(n) && !bv();
}
function jE(n, i, s = {}) {
  const [l, o, m] = xv(n, s), f = (d) => {
    const p = d.currentTarget;
    if (!eg(d))
      return;
    Ll.add(p);
    const h = i(p, d), g = (C, E) => {
      window.removeEventListener("pointerup", b), window.removeEventListener("pointercancel", x), Ll.has(p) && Ll.delete(p), eg(C) && typeof h == "function" && h(C, { success: E });
    }, b = (C) => {
      g(C, p === window || p === document || s.useGlobalTarget || Sv(p, C.target));
    }, x = (C) => {
      g(C, !1);
    };
    window.addEventListener("pointerup", b, o), window.addEventListener("pointercancel", x, o);
  };
  return l.forEach((d) => {
    (s.useGlobalTarget ? window : d).addEventListener("pointerdown", f, o), vv(d) && (d.addEventListener("focus", (h) => NE(h, o)), !DE(d) && !d.hasAttribute("tabindex") && (d.tabIndex = 0));
  }), m;
}
function Tv(n) {
  return z0(n) && "ownerSVGElement" in n;
}
function _E(n) {
  return Tv(n) && n.tagName === "svg";
}
const he = (n) => !!(n && n.getVelocity), zE = [...hv, Jt, oi], UE = (n) => zE.find(dv(n)), lm = G.createContext({
  transformPagePoint: (n) => n,
  isStatic: !1,
  reducedMotion: "never"
});
class VE extends G.Component {
  getSnapshotBeforeUpdate(i) {
    const s = this.props.childRef.current;
    if (s && i.isPresent && !this.props.isPresent) {
      const l = s.offsetParent, o = vv(l) && l.offsetWidth || 0, m = this.props.sizeRef.current;
      m.height = s.offsetHeight || 0, m.width = s.offsetWidth || 0, m.top = s.offsetTop, m.left = s.offsetLeft, m.right = o - m.width - m.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function BE({ children: n, isPresent: i, anchorX: s, root: l }) {
  const o = G.useId(), m = G.useRef(null), f = G.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: d } = G.useContext(lm);
  return G.useInsertionEffect(() => {
    const { width: p, height: h, top: g, left: b, right: x } = f.current;
    if (i || !m.current || !p || !h)
      return;
    const C = s === "left" ? `left: ${b}` : `right: ${x}`;
    m.current.dataset.motionPopId = o;
    const E = document.createElement("style");
    d && (E.nonce = d);
    const R = l ?? document.head;
    return R.appendChild(E), E.sheet && E.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${h}px !important;
            ${C}px !important;
            top: ${g}px !important;
          }
        `), () => {
      R.removeChild(E), R.contains(E) && R.removeChild(E);
    };
  }, [i]), A.jsx(VE, { isPresent: i, childRef: m, sizeRef: f, children: G.cloneElement(n, { ref: m }) });
}
const LE = ({ children: n, initial: i, isPresent: s, onExitComplete: l, custom: o, presenceAffectsLayout: m, mode: f, anchorX: d, root: p }) => {
  const h = Lf(kE), g = G.useId();
  let b = !0, x = G.useMemo(() => (b = !1, {
    id: g,
    initial: i,
    isPresent: s,
    custom: o,
    onExitComplete: (C) => {
      h.set(C, !0);
      for (const E of h.values())
        if (!E)
          return;
      l && l();
    },
    register: (C) => (h.set(C, !1), () => h.delete(C))
  }), [s, h, l]);
  return m && b && (x = { ...x }), G.useMemo(() => {
    h.forEach((C, E) => h.set(E, !1));
  }, [s]), G.useEffect(() => {
    !s && !h.size && l && l();
  }, [s]), f === "popLayout" && (n = A.jsx(BE, { isPresent: s, anchorX: d, root: p, children: n })), A.jsx(no.Provider, { value: x, children: n });
};
function kE() {
  return /* @__PURE__ */ new Map();
}
function wv(n = !0) {
  const i = G.useContext(no);
  if (i === null)
    return [!0, null];
  const { isPresent: s, onExitComplete: l, register: o } = i, m = G.useId();
  G.useEffect(() => {
    if (n)
      return o(m);
  }, [n]);
  const f = G.useCallback(() => n && l && l(m), [m, l, n]);
  return !s && l ? [!1, f] : [!0];
}
const Ul = (n) => n.key || "";
function ng(n) {
  const i = [];
  return G.Children.forEach(n, (s) => {
    G.isValidElement(s) && i.push(s);
  }), i;
}
const HE = ({ children: n, custom: i, initial: s = !0, onExitComplete: l, presenceAffectsLayout: o = !0, mode: m = "sync", propagate: f = !1, anchorX: d = "left", root: p }) => {
  const [h, g] = wv(f), b = G.useMemo(() => ng(n), [n]), x = f && !h ? [] : b.map(Ul), C = G.useRef(!0), E = G.useRef(b), R = Lf(() => /* @__PURE__ */ new Map()), [N, V] = G.useState(b), [B, H] = G.useState(b);
  j0(() => {
    C.current = !1, E.current = b;
    for (let Q = 0; Q < B.length; Q++) {
      const I = Ul(B[Q]);
      x.includes(I) ? R.delete(I) : R.get(I) !== !0 && R.set(I, !1);
    }
  }, [B, x.length, x.join("-")]);
  const W = [];
  if (b !== N) {
    let Q = [...b];
    for (let I = 0; I < B.length; I++) {
      const Y = B[I], ot = Ul(Y);
      x.includes(ot) || (Q.splice(I, 0, Y), W.push(Y));
    }
    return m === "wait" && W.length && (Q = W), H(ng(Q)), V(b), null;
  }
  const { forceRender: Z } = G.useContext(Bf);
  return A.jsx(A.Fragment, { children: B.map((Q) => {
    const I = Ul(Q), Y = f && !h ? !1 : b === B || x.includes(I), ot = () => {
      if (R.has(I))
        R.set(I, !0);
      else
        return;
      let rt = !0;
      R.forEach((dt) => {
        dt || (rt = !1);
      }), rt && (Z?.(), H(E.current), f && g?.(), l && l());
    };
    return A.jsx(LE, { isPresent: Y, initial: !C.current || s ? void 0 : !1, custom: i, presenceAffectsLayout: o, mode: m, root: p, onExitComplete: Y ? void 0 : ot, anchorX: d, children: Q }, I);
  }) });
}, Av = G.createContext({ strict: !1 }), ig = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, za = {};
for (const n in ig)
  za[n] = {
    isEnabled: (i) => ig[n].some((s) => !!i[s])
  };
function qE(n) {
  for (const i in n)
    za[i] = {
      ...za[i],
      ...n[i]
    };
}
const PE = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function Wl(n) {
  return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || PE.has(n);
}
let Ev = (n) => !Wl(n);
function YE(n) {
  typeof n == "function" && (Ev = (i) => i.startsWith("on") ? !Wl(i) : n(i));
}
try {
  YE(require("@emotion/is-prop-valid").default);
} catch {
}
function GE(n, i, s) {
  const l = {};
  for (const o in n)
    o === "values" && typeof n.values == "object" || (Ev(o) || s === !0 && Wl(o) || !i && !Wl(o) || // If trying to use native HTML drag events, forward drag listeners
    n.draggable && o.startsWith("onDrag")) && (l[o] = n[o]);
  return l;
}
const io = /* @__PURE__ */ G.createContext({});
function ao(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
function ar(n) {
  return typeof n == "string" || Array.isArray(n);
}
const om = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], um = ["initial", ...om];
function so(n) {
  return ao(n.animate) || um.some((i) => ar(n[i]));
}
function Mv(n) {
  return !!(so(n) || n.variants);
}
function XE(n, i) {
  if (so(n)) {
    const { initial: s, animate: l } = n;
    return {
      initial: s === !1 || ar(s) ? s : void 0,
      animate: ar(l) ? l : void 0
    };
  }
  return n.inherit !== !1 ? i : {};
}
function KE(n) {
  const { initial: i, animate: s } = XE(n, G.useContext(io));
  return G.useMemo(() => ({ initial: i, animate: s }), [ag(i), ag(s)]);
}
function ag(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const sr = {};
function QE(n) {
  for (const i in n)
    sr[i] = n[i], Qf(i) && (sr[i].isCSSVariable = !0);
}
function Rv(n, { layout: i, layoutId: s }) {
  return qa.has(n) || n.startsWith("origin") || (i || s !== void 0) && (!!sr[n] || n === "opacity");
}
const ZE = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, FE = Ha.length;
function WE(n, i, s) {
  let l = "", o = !0;
  for (let m = 0; m < FE; m++) {
    const f = Ha[m], d = n[f];
    if (d === void 0)
      continue;
    let p = !0;
    if (typeof d == "number" ? p = d === (f.startsWith("scale") ? 1 : 0) : p = parseFloat(d) === 0, !p || s) {
      const h = gv(d, am[f]);
      if (!p) {
        o = !1;
        const g = ZE[f] || f;
        l += `${g}(${h}) `;
      }
      s && (i[f] = h);
    }
  }
  return l = l.trim(), s ? l = s(i, o ? "" : l) : o && (l = "none"), l;
}
function cm(n, i, s) {
  const { style: l, vars: o, transformOrigin: m } = n;
  let f = !1, d = !1;
  for (const p in i) {
    const h = i[p];
    if (qa.has(p)) {
      f = !0;
      continue;
    } else if (Qf(p)) {
      o[p] = h;
      continue;
    } else {
      const g = gv(h, am[p]);
      p.startsWith("origin") ? (d = !0, m[p] = g) : l[p] = g;
    }
  }
  if (i.transform || (f || s ? l.transform = WE(i, n.transform, s) : l.transform && (l.transform = "none")), d) {
    const { originX: p = "50%", originY: h = "50%", originZ: g = 0 } = m;
    l.transformOrigin = `${p} ${h} ${g}`;
  }
}
const fm = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Ov(n, i, s) {
  for (const l in i)
    !he(i[l]) && !Rv(l, s) && (n[l] = i[l]);
}
function JE({ transformTemplate: n }, i) {
  return G.useMemo(() => {
    const s = fm();
    return cm(s, i, n), Object.assign({}, s.vars, s.style);
  }, [i]);
}
function $E(n, i) {
  const s = n.style || {}, l = {};
  return Ov(l, s, n), Object.assign(l, JE(n, i)), l;
}
function IE(n, i) {
  const s = {}, l = $E(n, i);
  return n.drag && n.dragListener !== !1 && (s.draggable = !1, l.userSelect = l.WebkitUserSelect = l.WebkitTouchCallout = "none", l.touchAction = n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`), n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (s.tabIndex = 0), s.style = l, s;
}
const tM = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, eM = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function nM(n, i, s = 1, l = 0, o = !0) {
  n.pathLength = 1;
  const m = o ? tM : eM;
  n[m.offset] = ct.transform(-l);
  const f = ct.transform(i), d = ct.transform(s);
  n[m.array] = `${f} ${d}`;
}
function Cv(n, {
  attrX: i,
  attrY: s,
  attrScale: l,
  pathLength: o,
  pathSpacing: m = 1,
  pathOffset: f = 0,
  // This is object creation, which we try to avoid per-frame.
  ...d
}, p, h, g) {
  if (cm(n, d, h), p) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  n.attrs = n.style, n.style = {};
  const { attrs: b, style: x } = n;
  b.transform && (x.transform = b.transform, delete b.transform), (x.transform || b.transformOrigin) && (x.transformOrigin = b.transformOrigin ?? "50% 50%", delete b.transformOrigin), x.transform && (x.transformBox = g?.transformBox ?? "fill-box", delete b.transformBox), i !== void 0 && (b.x = i), s !== void 0 && (b.y = s), l !== void 0 && (b.scale = l), o !== void 0 && nM(b, o, m, f, !1);
}
const Dv = () => ({
  ...fm(),
  attrs: {}
}), Nv = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function iM(n, i, s, l) {
  const o = G.useMemo(() => {
    const m = Dv();
    return Cv(m, i, Nv(l), n.transformTemplate, n.style), {
      ...m.attrs,
      style: { ...m.style }
    };
  }, [i]);
  if (n.style) {
    const m = {};
    Ov(m, n.style, n), o.style = { ...m, ...o.style };
  }
  return o;
}
const aM = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function mm(n) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof n != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    n.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(aM.indexOf(n) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(n))
    )
  );
}
function sM(n, i, s, { latestValues: l }, o, m = !1) {
  const d = (mm(n) ? iM : IE)(i, l, o, n), p = GE(i, typeof n == "string", m), h = n !== G.Fragment ? { ...p, ...d, ref: s } : {}, { children: g } = i, b = G.useMemo(() => he(g) ? g.get() : g, [g]);
  return G.createElement(n, {
    ...h,
    children: b
  });
}
function sg(n) {
  const i = [{}, {}];
  return n?.values.forEach((s, l) => {
    i[0][l] = s.get(), i[1][l] = s.getVelocity();
  }), i;
}
function dm(n, i, s, l) {
  if (typeof i == "function") {
    const [o, m] = sg(l);
    i = i(s !== void 0 ? s : n.custom, o, m);
  }
  if (typeof i == "string" && (i = n.variants && n.variants[i]), typeof i == "function") {
    const [o, m] = sg(l);
    i = i(s !== void 0 ? s : n.custom, o, m);
  }
  return i;
}
function kl(n) {
  return he(n) ? n.get() : n;
}
function rM({ scrapeMotionValuesFromProps: n, createRenderState: i }, s, l, o) {
  return {
    latestValues: lM(s, l, o, n),
    renderState: i()
  };
}
function lM(n, i, s, l) {
  const o = {}, m = l(n, {});
  for (const x in m)
    o[x] = kl(m[x]);
  let { initial: f, animate: d } = n;
  const p = so(n), h = Mv(n);
  i && h && !p && n.inherit !== !1 && (f === void 0 && (f = i.initial), d === void 0 && (d = i.animate));
  let g = s ? s.initial === !1 : !1;
  g = g || f === !1;
  const b = g ? d : f;
  if (b && typeof b != "boolean" && !ao(b)) {
    const x = Array.isArray(b) ? b : [b];
    for (let C = 0; C < x.length; C++) {
      const E = dm(n, x[C]);
      if (E) {
        const { transitionEnd: R, transition: N, ...V } = E;
        for (const B in V) {
          let H = V[B];
          if (Array.isArray(H)) {
            const W = g ? H.length - 1 : 0;
            H = H[W];
          }
          H !== null && (o[B] = H);
        }
        for (const B in R)
          o[B] = R[B];
      }
    }
  }
  return o;
}
const jv = (n) => (i, s) => {
  const l = G.useContext(io), o = G.useContext(no), m = () => rM(n, i, l, o);
  return s ? m() : Lf(m);
};
function hm(n, i, s) {
  const { style: l } = n, o = {};
  for (const m in l)
    (he(l[m]) || i.style && he(i.style[m]) || Rv(m, n) || s?.getValue(m)?.liveStyle !== void 0) && (o[m] = l[m]);
  return o;
}
const oM = /* @__PURE__ */ jv({
  scrapeMotionValuesFromProps: hm,
  createRenderState: fm
});
function _v(n, i, s) {
  const l = hm(n, i, s);
  for (const o in n)
    if (he(n[o]) || he(i[o])) {
      const m = Ha.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      l[m] = n[o];
    }
  return l;
}
const uM = /* @__PURE__ */ jv({
  scrapeMotionValuesFromProps: _v,
  createRenderState: Dv
}), cM = Symbol.for("motionComponentSymbol");
function Oa(n) {
  return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current");
}
function fM(n, i, s) {
  return G.useCallback(
    (l) => {
      l && n.onMount && n.onMount(l), i && (l ? i.mount(l) : i.unmount()), s && (typeof s == "function" ? s(l) : Oa(s) && (s.current = l));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [i]
  );
}
const pm = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), mM = "framerAppearId", zv = "data-" + pm(mM), Uv = G.createContext({});
function dM(n, i, s, l, o) {
  const { visualElement: m } = G.useContext(io), f = G.useContext(Av), d = G.useContext(no), p = G.useContext(lm).reducedMotion, h = G.useRef(null);
  l = l || f.renderer, !h.current && l && (h.current = l(n, {
    visualState: i,
    parent: m,
    props: s,
    presenceContext: d,
    blockInitialAnimation: d ? d.initial === !1 : !1,
    reducedMotionConfig: p
  }));
  const g = h.current, b = G.useContext(Uv);
  g && !g.projection && o && (g.type === "html" || g.type === "svg") && hM(h.current, s, o, b);
  const x = G.useRef(!1);
  G.useInsertionEffect(() => {
    g && x.current && g.update(s, d);
  });
  const C = s[zv], E = G.useRef(!!C && !window.MotionHandoffIsComplete?.(C) && window.MotionHasOptimisedAnimation?.(C));
  return j0(() => {
    g && (x.current = !0, window.MotionIsMounted = !0, g.updateFeatures(), g.scheduleRenderMicrotask(), E.current && g.animationState && g.animationState.animateChanges());
  }), G.useEffect(() => {
    g && (!E.current && g.animationState && g.animationState.animateChanges(), E.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(C);
    }), E.current = !1));
  }), g;
}
function hM(n, i, s, l) {
  const { layoutId: o, layout: m, drag: f, dragConstraints: d, layoutScroll: p, layoutRoot: h, layoutCrossfade: g } = i;
  n.projection = new s(n.latestValues, i["data-framer-portal-id"] ? void 0 : Vv(n.parent)), n.projection.setOptions({
    layoutId: o,
    layout: m,
    alwaysMeasureLayout: !!f || d && Oa(d),
    visualElement: n,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof m == "string" ? m : "both",
    initialPromotionConfig: l,
    crossfade: g,
    layoutScroll: p,
    layoutRoot: h
  });
}
function Vv(n) {
  if (n)
    return n.options.allowProjection !== !1 ? n.projection : Vv(n.parent);
}
function qc(n, { forwardMotionProps: i = !1 } = {}, s, l) {
  s && qE(s);
  const o = mm(n) ? uM : oM;
  function m(d, p) {
    let h;
    const g = {
      ...G.useContext(lm),
      ...d,
      layoutId: pM(d)
    }, { isStatic: b } = g, x = KE(d), C = o(d, b);
    if (!b && kf) {
      yM();
      const E = gM(g);
      h = E.MeasureLayout, x.visualElement = dM(n, C, g, l, E.ProjectionNode);
    }
    return A.jsxs(io.Provider, { value: x, children: [h && x.visualElement ? A.jsx(h, { visualElement: x.visualElement, ...g }) : null, sM(n, d, fM(C, x.visualElement, p), C, b, i)] });
  }
  m.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
  const f = G.forwardRef(m);
  return f[cM] = n, f;
}
function pM({ layoutId: n }) {
  const i = G.useContext(Bf).id;
  return i && n !== void 0 ? i + "-" + n : n;
}
function yM(n, i) {
  G.useContext(Av).strict;
}
function gM(n) {
  const { drag: i, layout: s } = za;
  if (!i && !s)
    return {};
  const l = { ...i, ...s };
  return {
    MeasureLayout: i?.isEnabled(n) || s?.isEnabled(n) ? l.MeasureLayout : void 0,
    ProjectionNode: l.ProjectionNode
  };
}
function vM(n, i) {
  if (typeof Proxy > "u")
    return qc;
  const s = /* @__PURE__ */ new Map(), l = (m, f) => qc(m, f, n, i), o = (m, f) => l(m, f);
  return new Proxy(o, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (m, f) => f === "create" ? l : (s.has(f) || s.set(f, qc(f, void 0, n, i)), s.get(f))
  });
}
function Bv({ top: n, left: i, right: s, bottom: l }) {
  return {
    x: { min: i, max: s },
    y: { min: n, max: l }
  };
}
function bM({ x: n, y: i }) {
  return { top: i.min, right: n.max, bottom: i.max, left: n.min };
}
function xM(n, i) {
  if (!i)
    return n;
  const s = i({ x: n.left, y: n.top }), l = i({ x: n.right, y: n.bottom });
  return {
    top: s.y,
    left: s.x,
    bottom: l.y,
    right: l.x
  };
}
function Pc(n) {
  return n === void 0 || n === 1;
}
function bf({ scale: n, scaleX: i, scaleY: s }) {
  return !Pc(n) || !Pc(i) || !Pc(s);
}
function ji(n) {
  return bf(n) || Lv(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY;
}
function Lv(n) {
  return rg(n.x) || rg(n.y);
}
function rg(n) {
  return n && n !== "0%";
}
function Jl(n, i, s) {
  const l = n - s, o = i * l;
  return s + o;
}
function lg(n, i, s, l, o) {
  return o !== void 0 && (n = Jl(n, o, l)), Jl(n, s, l) + i;
}
function xf(n, i = 0, s = 1, l, o) {
  n.min = lg(n.min, i, s, l, o), n.max = lg(n.max, i, s, l, o);
}
function kv(n, { x: i, y: s }) {
  xf(n.x, i.translate, i.scale, i.originPoint), xf(n.y, s.translate, s.scale, s.originPoint);
}
const og = 0.999999999999, ug = 1.0000000000001;
function SM(n, i, s, l = !1) {
  const o = s.length;
  if (!o)
    return;
  i.x = i.y = 1;
  let m, f;
  for (let d = 0; d < o; d++) {
    m = s[d], f = m.projectionDelta;
    const { visualElement: p } = m.options;
    p && p.props.style && p.props.style.display === "contents" || (l && m.options.layoutScroll && m.scroll && m !== m.root && Da(n, {
      x: -m.scroll.offset.x,
      y: -m.scroll.offset.y
    }), f && (i.x *= f.x.scale, i.y *= f.y.scale, kv(n, f)), l && ji(m.latestValues) && Da(n, m.latestValues));
  }
  i.x < ug && i.x > og && (i.x = 1), i.y < ug && i.y > og && (i.y = 1);
}
function Ca(n, i) {
  n.min = n.min + i, n.max = n.max + i;
}
function cg(n, i, s, l, o = 0.5) {
  const m = Ht(n.min, n.max, o);
  xf(n, i, s, m, l);
}
function Da(n, i) {
  cg(n.x, i.x, i.scaleX, i.scale, i.originX), cg(n.y, i.y, i.scaleY, i.scale, i.originY);
}
function Hv(n, i) {
  return Bv(xM(n.getBoundingClientRect(), i));
}
function TM(n, i, s) {
  const l = Hv(n, s), { scroll: o } = i;
  return o && (Ca(l.x, o.offset.x), Ca(l.y, o.offset.y)), l;
}
const fg = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Na = () => ({
  x: fg(),
  y: fg()
}), mg = () => ({ min: 0, max: 0 }), Qt = () => ({
  x: mg(),
  y: mg()
}), Sf = { current: null }, qv = { current: !1 };
function wM() {
  if (qv.current = !0, !!kf)
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"), i = () => Sf.current = n.matches;
      n.addEventListener("change", i), i();
    } else
      Sf.current = !1;
}
const AM = /* @__PURE__ */ new WeakMap();
function EM(n, i, s) {
  for (const l in i) {
    const o = i[l], m = s[l];
    if (he(o))
      n.addValue(l, o);
    else if (he(m))
      n.addValue(l, _a(o, { owner: n }));
    else if (m !== o)
      if (n.hasValue(l)) {
        const f = n.getValue(l);
        f.liveStyle === !0 ? f.jump(o) : f.hasAnimated || f.set(o);
      } else {
        const f = n.getStaticValue(l);
        n.addValue(l, _a(f !== void 0 ? f : o, { owner: n }));
      }
  }
  for (const l in s)
    i[l] === void 0 && n.removeValue(l);
  return i;
}
const dg = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class MM {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(i, s, l) {
    return {};
  }
  constructor({ parent: i, props: s, presenceContext: l, reducedMotionConfig: o, blockInitialAnimation: m, visualState: f }, d = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = nm, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const x = Ee.now();
      this.renderScheduledAt < x && (this.renderScheduledAt = x, Lt.render(this.render, !1, !0));
    };
    const { latestValues: p, renderState: h } = f;
    this.latestValues = p, this.baseTarget = { ...p }, this.initialValues = s.initial ? { ...p } : {}, this.renderState = h, this.parent = i, this.props = s, this.presenceContext = l, this.depth = i ? i.depth + 1 : 0, this.reducedMotionConfig = o, this.options = d, this.blockInitialAnimation = !!m, this.isControllingVariants = so(s), this.isVariantNode = Mv(s), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(i && i.current);
    const { willChange: g, ...b } = this.scrapeMotionValuesFromProps(s, {}, this);
    for (const x in b) {
      const C = b[x];
      p[x] !== void 0 && he(C) && C.set(p[x], !1);
    }
  }
  mount(i) {
    this.current = i, AM.set(i, this), this.projection && !this.projection.instance && this.projection.mount(i), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((s, l) => this.bindToMotionValue(l, s)), qv.current || wM(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Sf.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), li(this.notifyUpdate), li(this.render), this.valueSubscriptions.forEach((i) => i()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const i in this.events)
      this.events[i].clear();
    for (const i in this.features) {
      const s = this.features[i];
      s && (s.unmount(), s.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(i, s) {
    this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)();
    const l = qa.has(i);
    l && this.onBindTransform && this.onBindTransform();
    const o = s.on("change", (d) => {
      this.latestValues[i] = d, this.props.onUpdate && Lt.preRender(this.notifyUpdate), l && this.projection && (this.projection.isTransformDirty = !0);
    }), m = s.on("renderRequest", this.scheduleRender);
    let f;
    window.MotionCheckAppearSync && (f = window.MotionCheckAppearSync(this, i, s)), this.valueSubscriptions.set(i, () => {
      o(), m(), f && f(), s.owner && s.stop();
    });
  }
  sortNodePosition(i) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== i.type ? 0 : this.sortInstanceNodePosition(this.current, i.current);
  }
  updateFeatures() {
    let i = "animation";
    for (i in za) {
      const s = za[i];
      if (!s)
        continue;
      const { isEnabled: l, Feature: o } = s;
      if (!this.features[i] && o && l(this.props) && (this.features[i] = new o(this)), this.features[i]) {
        const m = this.features[i];
        m.isMounted ? m.update() : (m.mount(), m.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Qt();
  }
  getStaticValue(i) {
    return this.latestValues[i];
  }
  setStaticValue(i, s) {
    this.latestValues[i] = s;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(i, s) {
    (i.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = i, this.prevPresenceContext = this.presenceContext, this.presenceContext = s;
    for (let l = 0; l < dg.length; l++) {
      const o = dg[l];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const m = "on" + o, f = i[m];
      f && (this.propEventSubscriptions[o] = this.on(o, f));
    }
    this.prevMotionValues = EM(this, this.scrapeMotionValuesFromProps(i, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(i) {
    return this.props.variants ? this.props.variants[i] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(i) {
    const s = this.getClosestVariantNode();
    if (s)
      return s.variantChildren && s.variantChildren.add(i), () => s.variantChildren.delete(i);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(i, s) {
    const l = this.values.get(i);
    s !== l && (l && this.removeValue(i), this.bindToMotionValue(i, s), this.values.set(i, s), this.latestValues[i] = s.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(i) {
    this.values.delete(i);
    const s = this.valueSubscriptions.get(i);
    s && (s(), this.valueSubscriptions.delete(i)), delete this.latestValues[i], this.removeValueFromRenderState(i, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(i) {
    return this.values.has(i);
  }
  getValue(i, s) {
    if (this.props.values && this.props.values[i])
      return this.props.values[i];
    let l = this.values.get(i);
    return l === void 0 && s !== void 0 && (l = _a(s === null ? void 0 : s, { owner: this }), this.addValue(i, l)), l;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(i, s) {
    let l = this.latestValues[i] !== void 0 || !this.current ? this.latestValues[i] : this.getBaseTargetFromProps(this.props, i) ?? this.readValueFromInstance(this.current, i, this.options);
    return l != null && (typeof l == "string" && (_0(l) || U0(l)) ? l = parseFloat(l) : !UE(l) && oi.test(s) && (l = yv(i, s)), this.setBaseTarget(i, he(l) ? l.get() : l)), he(l) ? l.get() : l;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(i, s) {
    this.baseTarget[i] = s;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(i) {
    const { initial: s } = this.props;
    let l;
    if (typeof s == "string" || typeof s == "object") {
      const m = dm(this.props, s, this.presenceContext?.custom);
      m && (l = m[i]);
    }
    if (s && l !== void 0)
      return l;
    const o = this.getBaseTargetFromProps(this.props, i);
    return o !== void 0 && !he(o) ? o : this.initialValues[i] !== void 0 && l === void 0 ? void 0 : this.baseTarget[i];
  }
  on(i, s) {
    return this.events[i] || (this.events[i] = new Gf()), this.events[i].add(s);
  }
  notify(i, ...s) {
    this.events[i] && this.events[i].notify(...s);
  }
  scheduleRenderMicrotask() {
    sm.render(this.render);
  }
}
class Pv extends MM {
  constructor() {
    super(...arguments), this.KeyframeResolver = wE;
  }
  sortInstanceNodePosition(i, s) {
    return i.compareDocumentPosition(s) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(i, s) {
    return i.style ? i.style[s] : void 0;
  }
  removeValueFromRenderState(i, { vars: s, style: l }) {
    delete s[i], delete l[i];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: i } = this.props;
    he(i) && (this.childSubscription = i.on("change", (s) => {
      this.current && (this.current.textContent = `${s}`);
    }));
  }
}
function Yv(n, { style: i, vars: s }, l, o) {
  const m = n.style;
  let f;
  for (f in i)
    m[f] = i[f];
  o?.applyProjectionStyles(m, l);
  for (f in s)
    m.setProperty(f, s[f]);
}
function RM(n) {
  return window.getComputedStyle(n);
}
class OM extends Pv {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Yv;
  }
  readValueFromInstance(i, s) {
    if (qa.has(s))
      return this.projection?.isProjecting ? df(s) : PA(i, s);
    {
      const l = RM(i), o = (Qf(s) ? l.getPropertyValue(s) : l[s]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: s }) {
    return Hv(i, s);
  }
  build(i, s, l) {
    cm(i, s, l.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, s, l) {
    return hm(i, s, l);
  }
}
const Gv = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function CM(n, i, s, l) {
  Yv(n, i, void 0, l);
  for (const o in i.attrs)
    n.setAttribute(Gv.has(o) ? o : pm(o), i.attrs[o]);
}
class DM extends Pv {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Qt;
  }
  getBaseTargetFromProps(i, s) {
    return i[s];
  }
  readValueFromInstance(i, s) {
    if (qa.has(s)) {
      const l = pv(s);
      return l && l.default || 0;
    }
    return s = Gv.has(s) ? s : pm(s), i.getAttribute(s);
  }
  scrapeMotionValuesFromProps(i, s, l) {
    return _v(i, s, l);
  }
  build(i, s, l) {
    Cv(i, s, this.isSVGTag, l.transformTemplate, l.style);
  }
  renderInstance(i, s, l, o) {
    CM(i, s, l, o);
  }
  mount(i) {
    this.isSVGTag = Nv(i.tagName), super.mount(i);
  }
}
const NM = (n, i) => mm(n) ? new DM(i) : new OM(i, {
  allowProjection: n !== G.Fragment
});
function rr(n, i, s) {
  const l = n.getProps();
  return dm(l, i, s !== void 0 ? s : l.custom, n);
}
const Tf = (n) => Array.isArray(n);
function jM(n, i, s) {
  n.hasValue(i) ? n.getValue(i).set(s) : n.addValue(i, _a(s));
}
function _M(n) {
  return Tf(n) ? n[n.length - 1] || 0 : n;
}
function zM(n, i) {
  const s = rr(n, i);
  let { transitionEnd: l = {}, transition: o = {}, ...m } = s || {};
  m = { ...m, ...l };
  for (const f in m) {
    const d = _M(m[f]);
    jM(n, f, d);
  }
}
function UM(n) {
  return !!(he(n) && n.add);
}
function wf(n, i) {
  const s = n.getValue("willChange");
  if (UM(s))
    return s.add(i);
  if (!s && jn.WillChange) {
    const l = new jn.WillChange("auto");
    n.addValue("willChange", l), l.add(i);
  }
}
function Xv(n) {
  return n.props[zv];
}
const VM = (n) => n !== null;
function BM(n, { repeat: i, repeatType: s = "loop" }, l) {
  const o = n.filter(VM), m = i && s !== "loop" && i % 2 === 1 ? 0 : o.length - 1;
  return o[m];
}
const LM = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, kM = (n) => ({
  type: "spring",
  stiffness: 550,
  damping: n === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), HM = {
  type: "keyframes",
  duration: 0.8
}, qM = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, PM = (n, { keyframes: i }) => i.length > 2 ? HM : qa.has(n) ? n.startsWith("scale") ? kM(i[1]) : LM : qM;
function YM({ when: n, delay: i, delayChildren: s, staggerChildren: l, staggerDirection: o, repeat: m, repeatType: f, repeatDelay: d, from: p, elapsed: h, ...g }) {
  return !!Object.keys(g).length;
}
const ym = (n, i, s, l = {}, o, m) => (f) => {
  const d = im(l, n) || {}, p = d.delay || l.delay || 0;
  let { elapsed: h = 0 } = l;
  h = h - /* @__PURE__ */ mn(p);
  const g = {
    keyframes: Array.isArray(s) ? s : [null, s],
    ease: "easeOut",
    velocity: i.getVelocity(),
    ...d,
    delay: -h,
    onUpdate: (x) => {
      i.set(x), d.onUpdate && d.onUpdate(x);
    },
    onComplete: () => {
      f(), d.onComplete && d.onComplete();
    },
    name: n,
    motionValue: i,
    element: m ? void 0 : o
  };
  YM(d) || Object.assign(g, PM(n, g)), g.duration && (g.duration = /* @__PURE__ */ mn(g.duration)), g.repeatDelay && (g.repeatDelay = /* @__PURE__ */ mn(g.repeatDelay)), g.from !== void 0 && (g.keyframes[0] = g.from);
  let b = !1;
  if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (g.duration = 0, g.delay === 0 && (b = !0)), (jn.instantAnimations || jn.skipAnimations) && (b = !0, g.duration = 0, g.delay = 0), g.allowFlatten = !d.type && !d.ease, b && !m && i.get() !== void 0) {
    const x = BM(g.keyframes, d);
    if (x !== void 0) {
      Lt.update(() => {
        g.onUpdate(x), g.onComplete();
      });
      return;
    }
  }
  return d.isSync ? new em(g) : new fE(g);
};
function GM({ protectedKeys: n, needsAnimating: i }, s) {
  const l = n.hasOwnProperty(s) && i[s] !== !0;
  return i[s] = !1, l;
}
function Kv(n, i, { delay: s = 0, transitionOverride: l, type: o } = {}) {
  let { transition: m = n.getDefaultTransition(), transitionEnd: f, ...d } = i;
  l && (m = l);
  const p = [], h = o && n.animationState && n.animationState.getState()[o];
  for (const g in d) {
    const b = n.getValue(g, n.latestValues[g] ?? null), x = d[g];
    if (x === void 0 || h && GM(h, g))
      continue;
    const C = {
      delay: s,
      ...im(m || {}, g)
    }, E = b.get();
    if (E !== void 0 && !b.isAnimating && !Array.isArray(x) && x === E && !C.velocity)
      continue;
    let R = !1;
    if (window.MotionHandoffAnimation) {
      const V = Xv(n);
      if (V) {
        const B = window.MotionHandoffAnimation(V, g, Lt);
        B !== null && (C.startTime = B, R = !0);
      }
    }
    wf(n, g), b.start(ym(g, b, x, n.shouldReduceMotion && mv.has(g) ? { type: !1 } : C, n, R));
    const N = b.animation;
    N && p.push(N);
  }
  return f && Promise.all(p).then(() => {
    Lt.update(() => {
      f && zM(n, f);
    });
  }), p;
}
function Af(n, i, s = {}) {
  const l = rr(n, i, s.type === "exit" ? n.presenceContext?.custom : void 0);
  let { transition: o = n.getDefaultTransition() || {} } = l || {};
  s.transitionOverride && (o = s.transitionOverride);
  const m = l ? () => Promise.all(Kv(n, l, s)) : () => Promise.resolve(), f = n.variantChildren && n.variantChildren.size ? (p = 0) => {
    const { delayChildren: h = 0, staggerChildren: g, staggerDirection: b } = o;
    return XM(n, i, p, h, g, b, s);
  } : () => Promise.resolve(), { when: d } = o;
  if (d) {
    const [p, h] = d === "beforeChildren" ? [m, f] : [f, m];
    return p().then(() => h());
  } else
    return Promise.all([m(), f(s.delay)]);
}
function XM(n, i, s = 0, l = 0, o = 0, m = 1, f) {
  const d = [], p = n.variantChildren.size, h = (p - 1) * o, g = typeof l == "function", b = g ? (x) => l(x, p) : (
    // Support deprecated staggerChildren
    m === 1 ? (x = 0) => x * o : (x = 0) => h - x * o
  );
  return Array.from(n.variantChildren).sort(KM).forEach((x, C) => {
    x.notify("AnimationStart", i), d.push(Af(x, i, {
      ...f,
      delay: s + (g ? 0 : l) + b(C)
    }).then(() => x.notify("AnimationComplete", i)));
  }), Promise.all(d);
}
function KM(n, i) {
  return n.sortNodePosition(i);
}
function QM(n, i, s = {}) {
  n.notify("AnimationStart", i);
  let l;
  if (Array.isArray(i)) {
    const o = i.map((m) => Af(n, m, s));
    l = Promise.all(o);
  } else if (typeof i == "string")
    l = Af(n, i, s);
  else {
    const o = typeof i == "function" ? rr(n, i, s.custom) : i;
    l = Promise.all(Kv(n, o, s));
  }
  return l.then(() => {
    n.notify("AnimationComplete", i);
  });
}
function Qv(n, i) {
  if (!Array.isArray(i))
    return !1;
  const s = i.length;
  if (s !== n.length)
    return !1;
  for (let l = 0; l < s; l++)
    if (i[l] !== n[l])
      return !1;
  return !0;
}
const ZM = um.length;
function Zv(n) {
  if (!n)
    return;
  if (!n.isControllingVariants) {
    const s = n.parent ? Zv(n.parent) || {} : {};
    return n.props.initial !== void 0 && (s.initial = n.props.initial), s;
  }
  const i = {};
  for (let s = 0; s < ZM; s++) {
    const l = um[s], o = n.props[l];
    (ar(o) || o === !1) && (i[l] = o);
  }
  return i;
}
const FM = [...om].reverse(), WM = om.length;
function JM(n) {
  return (i) => Promise.all(i.map(({ animation: s, options: l }) => QM(n, s, l)));
}
function $M(n) {
  let i = JM(n), s = hg(), l = !0;
  const o = (p) => (h, g) => {
    const b = rr(n, g, p === "exit" ? n.presenceContext?.custom : void 0);
    if (b) {
      const { transition: x, transitionEnd: C, ...E } = b;
      h = { ...h, ...E, ...C };
    }
    return h;
  };
  function m(p) {
    i = p(n);
  }
  function f(p) {
    const { props: h } = n, g = Zv(n.parent) || {}, b = [], x = /* @__PURE__ */ new Set();
    let C = {}, E = 1 / 0;
    for (let N = 0; N < WM; N++) {
      const V = FM[N], B = s[V], H = h[V] !== void 0 ? h[V] : g[V], W = ar(H), Z = V === p ? B.isActive : null;
      Z === !1 && (E = N);
      let Q = H === g[V] && H !== h[V] && W;
      if (Q && l && n.manuallyAnimateOnMount && (Q = !1), B.protectedKeys = { ...C }, // If it isn't active and hasn't *just* been set as inactive
      !B.isActive && Z === null || // If we didn't and don't have any defined prop for this animation type
      !H && !B.prevProp || // Or if the prop doesn't define an animation
      ao(H) || typeof H == "boolean")
        continue;
      const I = IM(B.prevProp, H);
      let Y = I || // If we're making this variant active, we want to always make it active
      V === p && B.isActive && !Q && W || // If we removed a higher-priority variant (i is in reverse order)
      N > E && W, ot = !1;
      const rt = Array.isArray(H) ? H : [H];
      let dt = rt.reduce(o(V), {});
      Z === !1 && (dt = {});
      const { prevResolvedValues: wt = {} } = B, Dt = {
        ...wt,
        ...dt
      }, Gt = (L) => {
        Y = !0, x.has(L) && (ot = !0, x.delete(L)), B.needsAnimating[L] = !0;
        const z = n.getValue(L);
        z && (z.liveStyle = !1);
      };
      for (const L in Dt) {
        const z = dt[L], ft = wt[L];
        if (C.hasOwnProperty(L))
          continue;
        let mt = !1;
        Tf(z) && Tf(ft) ? mt = !Qv(z, ft) : mt = z !== ft, mt ? z != null ? Gt(L) : x.add(L) : z !== void 0 && x.has(L) ? Gt(L) : B.protectedKeys[L] = !0;
      }
      B.prevProp = H, B.prevResolvedValues = dt, B.isActive && (C = { ...C, ...dt }), l && n.blockInitialAnimation && (Y = !1), Y && (!(Q && I) || ot) && b.push(...rt.map((L) => ({
        animation: L,
        options: { type: V }
      })));
    }
    if (x.size) {
      const N = {};
      if (typeof h.initial != "boolean") {
        const V = rr(n, Array.isArray(h.initial) ? h.initial[0] : h.initial);
        V && V.transition && (N.transition = V.transition);
      }
      x.forEach((V) => {
        const B = n.getBaseTarget(V), H = n.getValue(V);
        H && (H.liveStyle = !0), N[V] = B ?? null;
      }), b.push({ animation: N });
    }
    let R = !!b.length;
    return l && (h.initial === !1 || h.initial === h.animate) && !n.manuallyAnimateOnMount && (R = !1), l = !1, R ? i(b) : Promise.resolve();
  }
  function d(p, h) {
    if (s[p].isActive === h)
      return Promise.resolve();
    n.variantChildren?.forEach((b) => b.animationState?.setActive(p, h)), s[p].isActive = h;
    const g = f(p);
    for (const b in s)
      s[b].protectedKeys = {};
    return g;
  }
  return {
    animateChanges: f,
    setActive: d,
    setAnimateFunction: m,
    getState: () => s,
    reset: () => {
      s = hg(), l = !0;
    }
  };
}
function IM(n, i) {
  return typeof i == "string" ? i !== n : Array.isArray(i) ? !Qv(i, n) : !1;
}
function Di(n = !1) {
  return {
    isActive: n,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function hg() {
  return {
    animate: Di(!0),
    whileInView: Di(),
    whileHover: Di(),
    whileTap: Di(),
    whileDrag: Di(),
    whileFocus: Di(),
    exit: Di()
  };
}
class ui {
  constructor(i) {
    this.isMounted = !1, this.node = i;
  }
  update() {
  }
}
class tR extends ui {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(i) {
    super(i), i.animationState || (i.animationState = $M(i));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    ao(i) && (this.unmountControls = i.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: i } = this.node.getProps(), { animate: s } = this.node.prevProps || {};
    i !== s && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let eR = 0;
class nR extends ui {
  constructor() {
    super(...arguments), this.id = eR++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: i, onExitComplete: s } = this.node.presenceContext, { isPresent: l } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || i === l)
      return;
    const o = this.node.animationState.setActive("exit", !i);
    s && !i && o.then(() => {
      s(this.id);
    });
  }
  mount() {
    const { register: i, onExitComplete: s } = this.node.presenceContext || {};
    s && s(this.id), i && (this.unmount = i(this.id));
  }
  unmount() {
  }
}
const iR = {
  animation: {
    Feature: tR
  },
  exit: {
    Feature: nR
  }
};
function lr(n, i, s, l = { passive: !0 }) {
  return n.addEventListener(i, s, l), () => n.removeEventListener(i, s);
}
function mr(n) {
  return {
    point: {
      x: n.pageX,
      y: n.pageY
    }
  };
}
const aR = (n) => (i) => rm(i) && n(i, mr(i));
function Js(n, i, s, l) {
  return lr(n, i, aR(s), l);
}
const Fv = 1e-4, sR = 1 - Fv, rR = 1 + Fv, Wv = 0.01, lR = 0 - Wv, oR = 0 + Wv;
function be(n) {
  return n.max - n.min;
}
function uR(n, i, s) {
  return Math.abs(n - i) <= s;
}
function pg(n, i, s, l = 0.5) {
  n.origin = l, n.originPoint = Ht(i.min, i.max, n.origin), n.scale = be(s) / be(i), n.translate = Ht(s.min, s.max, n.origin) - n.originPoint, (n.scale >= sR && n.scale <= rR || isNaN(n.scale)) && (n.scale = 1), (n.translate >= lR && n.translate <= oR || isNaN(n.translate)) && (n.translate = 0);
}
function $s(n, i, s, l) {
  pg(n.x, i.x, s.x, l ? l.originX : void 0), pg(n.y, i.y, s.y, l ? l.originY : void 0);
}
function yg(n, i, s) {
  n.min = s.min + i.min, n.max = n.min + be(i);
}
function cR(n, i, s) {
  yg(n.x, i.x, s.x), yg(n.y, i.y, s.y);
}
function gg(n, i, s) {
  n.min = i.min - s.min, n.max = n.min + be(i);
}
function Is(n, i, s) {
  gg(n.x, i.x, s.x), gg(n.y, i.y, s.y);
}
function Qe(n) {
  return [n("x"), n("y")];
}
const Jv = ({ current: n }) => n ? n.ownerDocument.defaultView : null, vg = (n, i) => Math.abs(n - i);
function fR(n, i) {
  const s = vg(n.x, i.x), l = vg(n.y, i.y);
  return Math.sqrt(s ** 2 + l ** 2);
}
class $v {
  constructor(i, s, { transformPagePoint: l, contextWindow: o = window, dragSnapToOrigin: m = !1, distanceThreshold: f = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const x = Gc(this.lastMoveEventInfo, this.history), C = this.startEvent !== null, E = fR(x.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!C && !E)
        return;
      const { point: R } = x, { timestamp: N } = ue;
      this.history.push({ ...R, timestamp: N });
      const { onStart: V, onMove: B } = this.handlers;
      C || (V && V(this.lastMoveEvent, x), this.startEvent = this.lastMoveEvent), B && B(this.lastMoveEvent, x);
    }, this.handlePointerMove = (x, C) => {
      this.lastMoveEvent = x, this.lastMoveEventInfo = Yc(C, this.transformPagePoint), Lt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (x, C) => {
      this.end();
      const { onEnd: E, onSessionEnd: R, resumeAnimation: N } = this.handlers;
      if (this.dragSnapToOrigin && N && N(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const V = Gc(x.type === "pointercancel" ? this.lastMoveEventInfo : Yc(C, this.transformPagePoint), this.history);
      this.startEvent && E && E(x, V), R && R(x, V);
    }, !rm(i))
      return;
    this.dragSnapToOrigin = m, this.handlers = s, this.transformPagePoint = l, this.distanceThreshold = f, this.contextWindow = o || window;
    const d = mr(i), p = Yc(d, this.transformPagePoint), { point: h } = p, { timestamp: g } = ue;
    this.history = [{ ...h, timestamp: g }];
    const { onSessionStart: b } = s;
    b && b(i, Gc(p, this.history)), this.removeListeners = ur(Js(this.contextWindow, "pointermove", this.handlePointerMove), Js(this.contextWindow, "pointerup", this.handlePointerUp), Js(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    this.removeListeners && this.removeListeners(), li(this.updatePoint);
  }
}
function Yc(n, i) {
  return i ? { point: i(n.point) } : n;
}
function bg(n, i) {
  return { x: n.x - i.x, y: n.y - i.y };
}
function Gc({ point: n }, i) {
  return {
    point: n,
    delta: bg(n, Iv(i)),
    offset: bg(n, mR(i)),
    velocity: dR(i, 0.1)
  };
}
function mR(n) {
  return n[0];
}
function Iv(n) {
  return n[n.length - 1];
}
function dR(n, i) {
  if (n.length < 2)
    return { x: 0, y: 0 };
  let s = n.length - 1, l = null;
  const o = Iv(n);
  for (; s >= 0 && (l = n[s], !(o.timestamp - l.timestamp > /* @__PURE__ */ mn(i))); )
    s--;
  if (!l)
    return { x: 0, y: 0 };
  const m = /* @__PURE__ */ dn(o.timestamp - l.timestamp);
  if (m === 0)
    return { x: 0, y: 0 };
  const f = {
    x: (o.x - l.x) / m,
    y: (o.y - l.y) / m
  };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function hR(n, { min: i, max: s }, l) {
  return i !== void 0 && n < i ? n = l ? Ht(i, n, l.min) : Math.max(n, i) : s !== void 0 && n > s && (n = l ? Ht(s, n, l.max) : Math.min(n, s)), n;
}
function xg(n, i, s) {
  return {
    min: i !== void 0 ? n.min + i : void 0,
    max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0
  };
}
function pR(n, { top: i, left: s, bottom: l, right: o }) {
  return {
    x: xg(n.x, s, o),
    y: xg(n.y, i, l)
  };
}
function Sg(n, i) {
  let s = i.min - n.min, l = i.max - n.max;
  return i.max - i.min < n.max - n.min && ([s, l] = [l, s]), { min: s, max: l };
}
function yR(n, i) {
  return {
    x: Sg(n.x, i.x),
    y: Sg(n.y, i.y)
  };
}
function gR(n, i) {
  let s = 0.5;
  const l = be(n), o = be(i);
  return o > l ? s = /* @__PURE__ */ er(i.min, i.max - l, n.min) : l > o && (s = /* @__PURE__ */ er(n.min, n.max - o, i.min)), Nn(0, 1, s);
}
function vR(n, i) {
  const s = {};
  return i.min !== void 0 && (s.min = i.min - n.min), i.max !== void 0 && (s.max = i.max - n.min), s;
}
const Ef = 0.35;
function bR(n = Ef) {
  return n === !1 ? n = 0 : n === !0 && (n = Ef), {
    x: Tg(n, "left", "right"),
    y: Tg(n, "top", "bottom")
  };
}
function Tg(n, i, s) {
  return {
    min: wg(n, i),
    max: wg(n, s)
  };
}
function wg(n, i) {
  return typeof n == "number" ? n : n[i] || 0;
}
const xR = /* @__PURE__ */ new WeakMap();
class SR {
  constructor(i) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Qt(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = i;
  }
  start(i, { snapToCursor: s = !1, distanceThreshold: l } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1)
      return;
    const m = (b) => {
      const { dragSnapToOrigin: x } = this.getProps();
      x ? this.pauseAnimation() : this.stopAnimation(), s && this.snapToCursor(mr(b).point);
    }, f = (b, x) => {
      const { drag: C, dragPropagation: E, onDragStart: R } = this.getProps();
      if (C && !E && (this.openDragLock && this.openDragLock(), this.openDragLock = RE(C), !this.openDragLock))
        return;
      this.latestPointerEvent = b, this.latestPanInfo = x, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Qe((V) => {
        let B = this.getAxisMotionValue(V).get() || 0;
        if (hn.test(B)) {
          const { projection: H } = this.visualElement;
          if (H && H.layout) {
            const W = H.layout.layoutBox[V];
            W && (B = be(W) * (parseFloat(B) / 100));
          }
        }
        this.originPoint[V] = B;
      }), R && Lt.postRender(() => R(b, x)), wf(this.visualElement, "transform");
      const { animationState: N } = this.visualElement;
      N && N.setActive("whileDrag", !0);
    }, d = (b, x) => {
      this.latestPointerEvent = b, this.latestPanInfo = x;
      const { dragPropagation: C, dragDirectionLock: E, onDirectionLock: R, onDrag: N } = this.getProps();
      if (!C && !this.openDragLock)
        return;
      const { offset: V } = x;
      if (E && this.currentDirection === null) {
        this.currentDirection = TR(V), this.currentDirection !== null && R && R(this.currentDirection);
        return;
      }
      this.updateAxis("x", x.point, V), this.updateAxis("y", x.point, V), this.visualElement.render(), N && N(b, x);
    }, p = (b, x) => {
      this.latestPointerEvent = b, this.latestPanInfo = x, this.stop(b, x), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, h = () => Qe((b) => this.getAnimationState(b) === "paused" && this.getAxisMotionValue(b).animation?.play()), { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new $v(i, {
      onSessionStart: m,
      onStart: f,
      onMove: d,
      onSessionEnd: p,
      resumeAnimation: h
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: g,
      distanceThreshold: l,
      contextWindow: Jv(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(i, s) {
    const l = i || this.latestPointerEvent, o = s || this.latestPanInfo, m = this.isDragging;
    if (this.cancel(), !m || !o || !l)
      return;
    const { velocity: f } = o;
    this.startAnimation(f);
    const { onDragEnd: d } = this.getProps();
    d && Lt.postRender(() => d(l, o));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: i, animationState: s } = this.visualElement;
    i && (i.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: l } = this.getProps();
    !l && this.openDragLock && (this.openDragLock(), this.openDragLock = null), s && s.setActive("whileDrag", !1);
  }
  updateAxis(i, s, l) {
    const { drag: o } = this.getProps();
    if (!l || !Vl(i, o, this.currentDirection))
      return;
    const m = this.getAxisMotionValue(i);
    let f = this.originPoint[i] + l[i];
    this.constraints && this.constraints[i] && (f = hR(f, this.constraints[i], this.elastic[i])), m.set(f);
  }
  resolveConstraints() {
    const { dragConstraints: i, dragElastic: s } = this.getProps(), l = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, o = this.constraints;
    i && Oa(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && l ? this.constraints = pR(l.layoutBox, i) : this.constraints = !1, this.elastic = bR(s), o !== this.constraints && l && this.constraints && !this.hasMutatedConstraints && Qe((m) => {
      this.constraints !== !1 && this.getAxisMotionValue(m) && (this.constraints[m] = vR(l.layoutBox[m], this.constraints[m]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: s } = this.getProps();
    if (!i || !Oa(i))
      return !1;
    const l = i.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const m = TM(l, o.root, this.visualElement.getTransformPagePoint());
    let f = yR(o.layout.layoutBox, m);
    if (s) {
      const d = s(bM(f));
      this.hasMutatedConstraints = !!d, d && (f = Bv(d));
    }
    return f;
  }
  startAnimation(i) {
    const { drag: s, dragMomentum: l, dragElastic: o, dragTransition: m, dragSnapToOrigin: f, onDragTransitionEnd: d } = this.getProps(), p = this.constraints || {}, h = Qe((g) => {
      if (!Vl(g, s, this.currentDirection))
        return;
      let b = p && p[g] || {};
      f && (b = { min: 0, max: 0 });
      const x = o ? 200 : 1e6, C = o ? 40 : 1e7, E = {
        type: "inertia",
        velocity: l ? i[g] : 0,
        bounceStiffness: x,
        bounceDamping: C,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...m,
        ...b
      };
      return this.startAxisValueAnimation(g, E);
    });
    return Promise.all(h).then(d);
  }
  startAxisValueAnimation(i, s) {
    const l = this.getAxisMotionValue(i);
    return wf(this.visualElement, i), l.start(ym(i, l, 0, s, this.visualElement, !1));
  }
  stopAnimation() {
    Qe((i) => this.getAxisMotionValue(i).stop());
  }
  pauseAnimation() {
    Qe((i) => this.getAxisMotionValue(i).animation?.pause());
  }
  getAnimationState(i) {
    return this.getAxisMotionValue(i).animation?.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(i) {
    const s = `_drag${i.toUpperCase()}`, l = this.visualElement.getProps(), o = l[s];
    return o || this.visualElement.getValue(i, (l.initial ? l.initial[i] : void 0) || 0);
  }
  snapToCursor(i) {
    Qe((s) => {
      const { drag: l } = this.getProps();
      if (!Vl(s, l, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, m = this.getAxisMotionValue(s);
      if (o && o.layout) {
        const { min: f, max: d } = o.layout.layoutBox[s];
        m.set(i[s] - Ht(f, d, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: i, dragConstraints: s } = this.getProps(), { projection: l } = this.visualElement;
    if (!Oa(s) || !l || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Qe((f) => {
      const d = this.getAxisMotionValue(f);
      if (d && this.constraints !== !1) {
        const p = d.get();
        o[f] = gR({ min: p, max: p }, this.constraints[f]);
      }
    });
    const { transformTemplate: m } = this.visualElement.getProps();
    this.visualElement.current.style.transform = m ? m({}, "") : "none", l.root && l.root.updateScroll(), l.updateLayout(), this.resolveConstraints(), Qe((f) => {
      if (!Vl(f, i, null))
        return;
      const d = this.getAxisMotionValue(f), { min: p, max: h } = this.constraints[f];
      d.set(Ht(p, h, o[f]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    xR.set(this.visualElement, this);
    const i = this.visualElement.current, s = Js(i, "pointerdown", (p) => {
      const { drag: h, dragListener: g = !0 } = this.getProps();
      h && g && this.start(p);
    }), l = () => {
      const { dragConstraints: p } = this.getProps();
      Oa(p) && p.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, m = o.addEventListener("measure", l);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), Lt.read(l);
    const f = lr(window, "resize", () => this.scalePositionWithinConstraints()), d = o.addEventListener("didUpdate", ({ delta: p, hasLayoutChanged: h }) => {
      this.isDragging && h && (Qe((g) => {
        const b = this.getAxisMotionValue(g);
        b && (this.originPoint[g] += p[g].translate, b.set(b.get() + p[g].translate));
      }), this.visualElement.render());
    });
    return () => {
      f(), s(), m(), d && d();
    };
  }
  getProps() {
    const i = this.visualElement.getProps(), { drag: s = !1, dragDirectionLock: l = !1, dragPropagation: o = !1, dragConstraints: m = !1, dragElastic: f = Ef, dragMomentum: d = !0 } = i;
    return {
      ...i,
      drag: s,
      dragDirectionLock: l,
      dragPropagation: o,
      dragConstraints: m,
      dragElastic: f,
      dragMomentum: d
    };
  }
}
function Vl(n, i, s) {
  return (i === !0 || i === n) && (s === null || s === n);
}
function TR(n, i = 10) {
  let s = null;
  return Math.abs(n.y) > i ? s = "y" : Math.abs(n.x) > i && (s = "x"), s;
}
class wR extends ui {
  constructor(i) {
    super(i), this.removeGroupControls = Ze, this.removeListeners = Ze, this.controls = new SR(i);
  }
  mount() {
    const { dragControls: i } = this.node.getProps();
    i && (this.removeGroupControls = i.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ze;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Ag = (n) => (i, s) => {
  n && Lt.postRender(() => n(i, s));
};
class AR extends ui {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ze;
  }
  onPointerDown(i) {
    this.session = new $v(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Jv(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: i, onPanStart: s, onPan: l, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Ag(i),
      onStart: Ag(s),
      onMove: l,
      onEnd: (m, f) => {
        delete this.session, o && Lt.postRender(() => o(m, f));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Js(this.node.current, "pointerdown", (i) => this.onPointerDown(i));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Hl = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Eg(n, i) {
  return i.max === i.min ? 0 : n / (i.max - i.min) * 100;
}
const Ks = {
  correct: (n, i) => {
    if (!i.target)
      return n;
    if (typeof n == "string")
      if (ct.test(n))
        n = parseFloat(n);
      else
        return n;
    const s = Eg(n, i.target.x), l = Eg(n, i.target.y);
    return `${s}% ${l}%`;
  }
}, ER = {
  correct: (n, { treeScale: i, projectionDelta: s }) => {
    const l = n, o = oi.parse(n);
    if (o.length > 5)
      return l;
    const m = oi.createTransformer(n), f = typeof o[0] != "number" ? 1 : 0, d = s.x.scale * i.x, p = s.y.scale * i.y;
    o[0 + f] /= d, o[1 + f] /= p;
    const h = Ht(d, p, 0.5);
    return typeof o[2 + f] == "number" && (o[2 + f] /= h), typeof o[3 + f] == "number" && (o[3 + f] /= h), m(o);
  }
};
let Mg = !1;
class MR extends G.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: i, layoutGroup: s, switchLayoutGroup: l, layoutId: o } = this.props, { projection: m } = i;
    QE(RR), m && (s.group && s.group.add(m), l && l.register && o && l.register(m), Mg && m.root.didUpdate(), m.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), m.setOptions({
      ...m.options,
      onExitComplete: () => this.safeToRemove()
    })), Hl.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(i) {
    const { layoutDependency: s, visualElement: l, drag: o, isPresent: m } = this.props, { projection: f } = l;
    return f && (f.isPresent = m, Mg = !0, o || i.layoutDependency !== s || s === void 0 || i.isPresent !== m ? f.willUpdate() : this.safeToRemove(), i.isPresent !== m && (m ? f.promote() : f.relegate() || Lt.postRender(() => {
      const d = f.getStack();
      (!d || !d.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: i } = this.props.visualElement;
    i && (i.root.didUpdate(), sm.postRender(() => {
      !i.currentAnimation && i.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: i, layoutGroup: s, switchLayoutGroup: l } = this.props, { projection: o } = i;
    o && (o.scheduleCheckAfterUnmount(), s && s.group && s.group.remove(o), l && l.deregister && l.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props;
    i && i();
  }
  render() {
    return null;
  }
}
function tb(n) {
  const [i, s] = wv(), l = G.useContext(Bf);
  return A.jsx(MR, { ...n, layoutGroup: l, switchLayoutGroup: G.useContext(Uv), isPresent: i, safeToRemove: s });
}
const RR = {
  borderRadius: {
    ...Ks,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Ks,
  borderTopRightRadius: Ks,
  borderBottomLeftRadius: Ks,
  borderBottomRightRadius: Ks,
  boxShadow: ER
};
function OR(n, i, s) {
  const l = he(n) ? n : _a(n);
  return l.start(ym("", l, i, s)), l.animation;
}
const CR = (n, i) => n.depth - i.depth;
class DR {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(i) {
    Hf(this.children, i), this.isDirty = !0;
  }
  remove(i) {
    qf(this.children, i), this.isDirty = !0;
  }
  forEach(i) {
    this.isDirty && this.children.sort(CR), this.isDirty = !1, this.children.forEach(i);
  }
}
function NR(n, i) {
  const s = Ee.now(), l = ({ timestamp: o }) => {
    const m = o - s;
    m >= i && (li(l), n(m - i));
  };
  return Lt.setup(l, !0), () => li(l);
}
const eb = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], jR = eb.length, Rg = (n) => typeof n == "string" ? parseFloat(n) : n, Og = (n) => typeof n == "number" || ct.test(n);
function _R(n, i, s, l, o, m) {
  o ? (n.opacity = Ht(0, s.opacity ?? 1, zR(l)), n.opacityExit = Ht(i.opacity ?? 1, 0, UR(l))) : m && (n.opacity = Ht(i.opacity ?? 1, s.opacity ?? 1, l));
  for (let f = 0; f < jR; f++) {
    const d = `border${eb[f]}Radius`;
    let p = Cg(i, d), h = Cg(s, d);
    if (p === void 0 && h === void 0)
      continue;
    p || (p = 0), h || (h = 0), p === 0 || h === 0 || Og(p) === Og(h) ? (n[d] = Math.max(Ht(Rg(p), Rg(h), l), 0), (hn.test(h) || hn.test(p)) && (n[d] += "%")) : n[d] = h;
  }
  (i.rotate || s.rotate) && (n.rotate = Ht(i.rotate || 0, s.rotate || 0, l));
}
function Cg(n, i) {
  return n[i] !== void 0 ? n[i] : n.borderRadius;
}
const zR = /* @__PURE__ */ nb(0, 0.5, Y0), UR = /* @__PURE__ */ nb(0.5, 0.95, Ze);
function nb(n, i, s) {
  return (l) => l < n ? 0 : l > i ? 1 : s(/* @__PURE__ */ er(n, i, l));
}
function Dg(n, i) {
  n.min = i.min, n.max = i.max;
}
function Ke(n, i) {
  Dg(n.x, i.x), Dg(n.y, i.y);
}
function Ng(n, i) {
  n.translate = i.translate, n.scale = i.scale, n.originPoint = i.originPoint, n.origin = i.origin;
}
function jg(n, i, s, l, o) {
  return n -= i, n = Jl(n, 1 / s, l), o !== void 0 && (n = Jl(n, 1 / o, l)), n;
}
function VR(n, i = 0, s = 1, l = 0.5, o, m = n, f = n) {
  if (hn.test(i) && (i = parseFloat(i), i = Ht(f.min, f.max, i / 100) - f.min), typeof i != "number")
    return;
  let d = Ht(m.min, m.max, l);
  n === m && (d -= i), n.min = jg(n.min, i, s, d, o), n.max = jg(n.max, i, s, d, o);
}
function _g(n, i, [s, l, o], m, f) {
  VR(n, i[s], i[l], i[o], i.scale, m, f);
}
const BR = ["x", "scaleX", "originX"], LR = ["y", "scaleY", "originY"];
function zg(n, i, s, l) {
  _g(n.x, i, BR, s ? s.x : void 0, l ? l.x : void 0), _g(n.y, i, LR, s ? s.y : void 0, l ? l.y : void 0);
}
function Ug(n) {
  return n.translate === 0 && n.scale === 1;
}
function ib(n) {
  return Ug(n.x) && Ug(n.y);
}
function Vg(n, i) {
  return n.min === i.min && n.max === i.max;
}
function kR(n, i) {
  return Vg(n.x, i.x) && Vg(n.y, i.y);
}
function Bg(n, i) {
  return Math.round(n.min) === Math.round(i.min) && Math.round(n.max) === Math.round(i.max);
}
function ab(n, i) {
  return Bg(n.x, i.x) && Bg(n.y, i.y);
}
function Lg(n) {
  return be(n.x) / be(n.y);
}
function kg(n, i) {
  return n.translate === i.translate && n.scale === i.scale && n.originPoint === i.originPoint;
}
class HR {
  constructor() {
    this.members = [];
  }
  add(i) {
    Hf(this.members, i), i.scheduleRender();
  }
  remove(i) {
    if (qf(this.members, i), i === this.prevLead && (this.prevLead = void 0), i === this.lead) {
      const s = this.members[this.members.length - 1];
      s && this.promote(s);
    }
  }
  relegate(i) {
    const s = this.members.findIndex((o) => i === o);
    if (s === 0)
      return !1;
    let l;
    for (let o = s; o >= 0; o--) {
      const m = this.members[o];
      if (m.isPresent !== !1) {
        l = m;
        break;
      }
    }
    return l ? (this.promote(l), !0) : !1;
  }
  promote(i, s) {
    const l = this.lead;
    if (i !== l && (this.prevLead = l, this.lead = i, i.show(), l)) {
      l.instance && l.scheduleRender(), i.scheduleRender(), i.resumeFrom = l, s && (i.resumeFrom.preserveOpacity = !0), l.snapshot && (i.snapshot = l.snapshot, i.snapshot.latestValues = l.animationValues || l.latestValues), i.root && i.root.isUpdating && (i.isLayoutDirty = !0);
      const { crossfade: o } = i.options;
      o === !1 && l.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((i) => {
      const { options: s, resumingFrom: l } = i;
      s.onExitComplete && s.onExitComplete(), l && l.options.onExitComplete && l.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((i) => {
      i.instance && i.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function qR(n, i, s) {
  let l = "";
  const o = n.x.translate / i.x, m = n.y.translate / i.y, f = s?.z || 0;
  if ((o || m || f) && (l = `translate3d(${o}px, ${m}px, ${f}px) `), (i.x !== 1 || i.y !== 1) && (l += `scale(${1 / i.x}, ${1 / i.y}) `), s) {
    const { transformPerspective: h, rotate: g, rotateX: b, rotateY: x, skewX: C, skewY: E } = s;
    h && (l = `perspective(${h}px) ${l}`), g && (l += `rotate(${g}deg) `), b && (l += `rotateX(${b}deg) `), x && (l += `rotateY(${x}deg) `), C && (l += `skewX(${C}deg) `), E && (l += `skewY(${E}deg) `);
  }
  const d = n.x.scale * i.x, p = n.y.scale * i.y;
  return (d !== 1 || p !== 1) && (l += `scale(${d}, ${p})`), l || "none";
}
const Xc = ["", "X", "Y", "Z"], PR = 1e3;
let YR = 0;
function Kc(n, i, s, l) {
  const { latestValues: o } = i;
  o[n] && (s[n] = o[n], i.setStaticValue(n, 0), l && (l[n] = 0));
}
function sb(n) {
  if (n.hasCheckedOptimisedAppear = !0, n.root === n)
    return;
  const { visualElement: i } = n.options;
  if (!i)
    return;
  const s = Xv(i);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: o, layoutId: m } = n.options;
    window.MotionCancelOptimisedAnimation(s, "transform", Lt, !(o || m));
  }
  const { parent: l } = n;
  l && !l.hasCheckedOptimisedAppear && sb(l);
}
function rb({ attachResizeListener: n, defaultParent: i, measureScroll: s, checkIsScrollRoot: l, resetTransform: o }) {
  return class {
    constructor(f = {}, d = i?.()) {
      this.id = YR++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(KR), this.nodes.forEach(WR), this.nodes.forEach(JR), this.nodes.forEach(QR);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = f, this.root = d ? d.root || d : this, this.path = d ? [...d.path, d] : [], this.parent = d, this.depth = d ? d.depth + 1 : 0;
      for (let p = 0; p < this.path.length; p++)
        this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new DR());
    }
    addEventListener(f, d) {
      return this.eventHandlers.has(f) || this.eventHandlers.set(f, new Gf()), this.eventHandlers.get(f).add(d);
    }
    notifyListeners(f, ...d) {
      const p = this.eventHandlers.get(f);
      p && p.notify(...d);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    /**
     * Lifecycles
     */
    mount(f) {
      if (this.instance)
        return;
      this.isSVG = Tv(f) && !_E(f), this.instance = f;
      const { layoutId: d, layout: p, visualElement: h } = this.options;
      if (h && !h.current && h.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (p || d) && (this.isLayoutDirty = !0), n) {
        let g, b = 0;
        const x = () => this.root.updateBlockedByResize = !1;
        Lt.read(() => {
          b = window.innerWidth;
        }), n(f, () => {
          const C = window.innerWidth;
          C !== b && (b = C, this.root.updateBlockedByResize = !0, g && g(), g = NR(x, 250), Hl.hasAnimatedSinceResize && (Hl.hasAnimatedSinceResize = !1, this.nodes.forEach(Pg)));
        });
      }
      d && this.root.registerSharedNode(d, this), this.options.animate !== !1 && h && (d || p) && this.addEventListener("didUpdate", ({ delta: g, hasLayoutChanged: b, hasRelativeLayoutChanged: x, layout: C }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const E = this.options.transition || h.getDefaultTransition() || nO, { onLayoutAnimationStart: R, onLayoutAnimationComplete: N } = h.getProps(), V = !this.targetLayout || !ab(this.targetLayout, C), B = !b && x;
        if (this.options.layoutRoot || this.resumeFrom || B || b && (V || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const H = {
            ...im(E, "layout"),
            onPlay: R,
            onComplete: N
          };
          (h.shouldReduceMotion || this.options.layoutRoot) && (H.delay = 0, H.type = !1), this.startAnimation(H), this.setAnimationOrigin(g, B);
        } else
          b || Pg(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = C;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const f = this.getStack();
      f && f.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), li(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach($R), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && sb(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const b = this.path[g];
        b.shouldResetTransform = !0, b.updateScroll("snapshot"), b.options.layoutRoot && b.willUpdate(!1);
      }
      const { layoutId: d, layout: p } = this.options;
      if (d === void 0 && !p)
        return;
      const h = this.getTransformTemplate();
      this.prevTransformTemplateValue = h ? h(this.latestValues, "") : void 0, this.updateSnapshot(), f && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Hg);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(qg);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(FR), this.nodes.forEach(GR), this.nodes.forEach(XR)) : this.nodes.forEach(qg), this.clearAllSnapshots();
      const d = Ee.now();
      ue.delta = Nn(0, 1e3 / 60, d - ue.timestamp), ue.timestamp = d, ue.isProcessing = !0, Uc.update.process(ue), Uc.preRender.process(ue), Uc.render.process(ue), ue.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, sm.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(ZR), this.sharedNodes.forEach(IR);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Lt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Lt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !be(this.snapshot.measuredBox.x) && !be(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let p = 0; p < this.path.length; p++)
          this.path[p].updateScroll();
      const f = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = Qt(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: d } = this.options;
      d && d.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0);
    }
    updateScroll(f = "measure") {
      let d = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === f && (d = !1), d && this.instance) {
        const p = l(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: p,
          offset: s(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : p
        };
      }
    }
    resetTransform() {
      if (!o)
        return;
      const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, d = this.projectionDelta && !ib(this.projectionDelta), p = this.getTransformTemplate(), h = p ? p(this.latestValues, "") : void 0, g = h !== this.prevTransformTemplateValue;
      f && this.instance && (d || ji(this.latestValues) || g) && (o(this.instance, h), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(f = !0) {
      const d = this.measurePageBox();
      let p = this.removeElementScroll(d);
      return f && (p = this.removeTransform(p)), iO(p), {
        animationId: this.root.animationId,
        measuredBox: d,
        layoutBox: p,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: f } = this.options;
      if (!f)
        return Qt();
      const d = f.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(aO))) {
        const { scroll: h } = this.root;
        h && (Ca(d.x, h.offset.x), Ca(d.y, h.offset.y));
      }
      return d;
    }
    removeElementScroll(f) {
      const d = Qt();
      if (Ke(d, f), this.scroll?.wasRoot)
        return d;
      for (let p = 0; p < this.path.length; p++) {
        const h = this.path[p], { scroll: g, options: b } = h;
        h !== this.root && g && b.layoutScroll && (g.wasRoot && Ke(d, f), Ca(d.x, g.offset.x), Ca(d.y, g.offset.y));
      }
      return d;
    }
    applyTransform(f, d = !1) {
      const p = Qt();
      Ke(p, f);
      for (let h = 0; h < this.path.length; h++) {
        const g = this.path[h];
        !d && g.options.layoutScroll && g.scroll && g !== g.root && Da(p, {
          x: -g.scroll.offset.x,
          y: -g.scroll.offset.y
        }), ji(g.latestValues) && Da(p, g.latestValues);
      }
      return ji(this.latestValues) && Da(p, this.latestValues), p;
    }
    removeTransform(f) {
      const d = Qt();
      Ke(d, f);
      for (let p = 0; p < this.path.length; p++) {
        const h = this.path[p];
        if (!h.instance || !ji(h.latestValues))
          continue;
        bf(h.latestValues) && h.updateSnapshot();
        const g = Qt(), b = h.measurePageBox();
        Ke(g, b), zg(d, h.latestValues, h.snapshot ? h.snapshot.layoutBox : void 0, g);
      }
      return ji(this.latestValues) && zg(d, this.latestValues), d;
    }
    setTargetDelta(f) {
      this.targetDelta = f, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ue.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      const d = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = d.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = d.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = d.isSharedProjectionDirty);
      const p = !!this.resumingFrom || this !== d;
      if (!(f || p && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: g, layoutId: b } = this.options;
      if (!(!this.layout || !(g || b))) {
        if (this.resolvedRelativeTargetAt = ue.timestamp, !this.targetDelta && !this.relativeTarget) {
          const x = this.getClosestProjectingParent();
          x && x.layout && this.animationProgress !== 1 ? (this.relativeParent = x, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Qt(), this.relativeTargetOrigin = Qt(), Is(this.relativeTargetOrigin, this.layout.layoutBox, x.layout.layoutBox), Ke(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Qt(), this.targetWithTransforms = Qt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), cR(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ke(this.target, this.layout.layoutBox), kv(this.target, this.targetDelta)) : Ke(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const x = this.getClosestProjectingParent();
          x && !!x.resumingFrom == !!this.resumingFrom && !x.options.layoutScroll && x.target && this.animationProgress !== 1 ? (this.relativeParent = x, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Qt(), this.relativeTargetOrigin = Qt(), Is(this.relativeTargetOrigin, this.target, x.target), Ke(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || bf(this.parent.latestValues) || Lv(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      const f = this.getLead(), d = !!this.resumingFrom || this !== f;
      let p = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (p = !1), d && (this.isSharedProjectionDirty || this.isTransformDirty) && (p = !1), this.resolvedRelativeTargetAt === ue.timestamp && (p = !1), p)
        return;
      const { layout: h, layoutId: g } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(h || g))
        return;
      Ke(this.layoutCorrected, this.layout.layoutBox);
      const b = this.treeScale.x, x = this.treeScale.y;
      SM(this.layoutCorrected, this.treeScale, this.path, d), f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox, f.targetWithTransforms = Qt());
      const { target: C } = f;
      if (!C) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ng(this.prevProjectionDelta.x, this.projectionDelta.x), Ng(this.prevProjectionDelta.y, this.projectionDelta.y)), $s(this.projectionDelta, this.layoutCorrected, C, this.latestValues), (this.treeScale.x !== b || this.treeScale.y !== x || !kg(this.projectionDelta.x, this.prevProjectionDelta.x) || !kg(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", C));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      if (this.options.visualElement?.scheduleRender(), f) {
        const d = this.getStack();
        d && d.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Na(), this.projectionDelta = Na(), this.projectionDeltaWithTransform = Na();
    }
    setAnimationOrigin(f, d = !1) {
      const p = this.snapshot, h = p ? p.latestValues : {}, g = { ...this.latestValues }, b = Na();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !d;
      const x = Qt(), C = p ? p.source : void 0, E = this.layout ? this.layout.source : void 0, R = C !== E, N = this.getStack(), V = !N || N.members.length <= 1, B = !!(R && !V && this.options.crossfade === !0 && !this.path.some(eO));
      this.animationProgress = 0;
      let H;
      this.mixTargetDelta = (W) => {
        const Z = W / 1e3;
        Yg(b.x, f.x, Z), Yg(b.y, f.y, Z), this.setTargetDelta(b), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Is(x, this.layout.layoutBox, this.relativeParent.layout.layoutBox), tO(this.relativeTarget, this.relativeTargetOrigin, x, Z), H && kR(this.relativeTarget, H) && (this.isProjectionDirty = !1), H || (H = Qt()), Ke(H, this.relativeTarget)), R && (this.animationValues = g, _R(g, h, this.latestValues, Z, B, V)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = Z;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (li(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Lt.update(() => {
        Hl.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = _a(0)), this.currentAnimation = OR(this.motionValue, [0, 1e3], {
          ...f,
          velocity: 0,
          isSync: !0,
          onUpdate: (d) => {
            this.mixTargetDelta(d), f.onUpdate && f.onUpdate(d);
          },
          onStop: () => {
          },
          onComplete: () => {
            f.onComplete && f.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const f = this.getStack();
      f && f.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(PR), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let { targetWithTransforms: d, target: p, layout: h, latestValues: g } = f;
      if (!(!d || !p || !h)) {
        if (this !== f && this.layout && h && lb(this.options.animationType, this.layout.layoutBox, h.layoutBox)) {
          p = this.target || Qt();
          const b = be(this.layout.layoutBox.x);
          p.x.min = f.target.x.min, p.x.max = p.x.min + b;
          const x = be(this.layout.layoutBox.y);
          p.y.min = f.target.y.min, p.y.max = p.y.min + x;
        }
        Ke(d, p), Da(d, g), $s(this.projectionDeltaWithTransform, this.layoutCorrected, d, g);
      }
    }
    registerSharedNode(f, d) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new HR()), this.sharedNodes.get(f).add(d);
      const h = d.options.initialPromotionConfig;
      d.promote({
        transition: h ? h.transition : void 0,
        preserveFollowOpacity: h && h.shouldPreserveFollowOpacity ? h.shouldPreserveFollowOpacity(d) : void 0
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f)
        return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: d, preserveFollowOpacity: p } = {}) {
      const h = this.getStack();
      h && h.promote(this, p), f && (this.projectionDelta = void 0, this.needsReset = !0), d && this.setOptions({ transition: d });
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f)
        return;
      let d = !1;
      const { latestValues: p } = f;
      if ((p.z || p.rotate || p.rotateX || p.rotateY || p.rotateZ || p.skewX || p.skewY) && (d = !0), !d)
        return;
      const h = {};
      p.z && Kc("z", f, h, this.animationValues);
      for (let g = 0; g < Xc.length; g++)
        Kc(`rotate${Xc[g]}`, f, h, this.animationValues), Kc(`skew${Xc[g]}`, f, h, this.animationValues);
      f.render();
      for (const g in h)
        f.setStaticValue(g, h[g]), this.animationValues && (this.animationValues[g] = h[g]);
      f.scheduleRender();
    }
    applyProjectionStyles(f, d) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const p = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, f.visibility = "", f.opacity = "", f.pointerEvents = kl(d?.pointerEvents) || "", f.transform = p ? p(this.latestValues, "") : "none";
        return;
      }
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, f.pointerEvents = kl(d?.pointerEvents) || ""), this.hasProjected && !ji(this.latestValues) && (f.transform = p ? p({}, "") : "none", this.hasProjected = !1);
        return;
      }
      f.visibility = "";
      const g = h.animationValues || h.latestValues;
      this.applyTransformsToTarget();
      let b = qR(this.projectionDeltaWithTransform, this.treeScale, g);
      p && (b = p(g, b)), f.transform = b;
      const { x, y: C } = this.projectionDelta;
      f.transformOrigin = `${x.origin * 100}% ${C.origin * 100}% 0`, h.animationValues ? f.opacity = h === this ? g.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : g.opacityExit : f.opacity = h === this ? g.opacity !== void 0 ? g.opacity : "" : g.opacityExit !== void 0 ? g.opacityExit : 0;
      for (const E in sr) {
        if (g[E] === void 0)
          continue;
        const { correct: R, applyTo: N, isCSSVariable: V } = sr[E], B = b === "none" ? g[E] : R(g[E], h);
        if (N) {
          const H = N.length;
          for (let W = 0; W < H; W++)
            f[N[W]] = B;
        } else
          V ? this.options.visualElement.renderState.vars[E] = B : f[E] = B;
      }
      this.options.layoutId && (f.pointerEvents = h === this ? kl(d?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((f) => f.currentAnimation?.stop()), this.root.nodes.forEach(Hg), this.root.sharedNodes.clear();
    }
  };
}
function GR(n) {
  n.updateLayout();
}
function XR(n) {
  const i = n.resumeFrom?.snapshot || n.snapshot;
  if (n.isLead() && n.layout && i && n.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: l } = n.layout, { animationType: o } = n.options, m = i.source !== n.layout.source;
    o === "size" ? Qe((g) => {
      const b = m ? i.measuredBox[g] : i.layoutBox[g], x = be(b);
      b.min = s[g].min, b.max = b.min + x;
    }) : lb(o, i.layoutBox, s) && Qe((g) => {
      const b = m ? i.measuredBox[g] : i.layoutBox[g], x = be(s[g]);
      b.max = b.min + x, n.relativeTarget && !n.currentAnimation && (n.isProjectionDirty = !0, n.relativeTarget[g].max = n.relativeTarget[g].min + x);
    });
    const f = Na();
    $s(f, s, i.layoutBox);
    const d = Na();
    m ? $s(d, n.applyTransform(l, !0), i.measuredBox) : $s(d, s, i.layoutBox);
    const p = !ib(f);
    let h = !1;
    if (!n.resumeFrom) {
      const g = n.getClosestProjectingParent();
      if (g && !g.resumeFrom) {
        const { snapshot: b, layout: x } = g;
        if (b && x) {
          const C = Qt();
          Is(C, i.layoutBox, b.layoutBox);
          const E = Qt();
          Is(E, s, x.layoutBox), ab(C, E) || (h = !0), g.options.layoutRoot && (n.relativeTarget = E, n.relativeTargetOrigin = C, n.relativeParent = g);
        }
      }
    }
    n.notifyListeners("didUpdate", {
      layout: s,
      snapshot: i,
      delta: d,
      layoutDelta: f,
      hasLayoutChanged: p,
      hasRelativeLayoutChanged: h
    });
  } else if (n.isLead()) {
    const { onExitComplete: s } = n.options;
    s && s();
  }
  n.options.transition = void 0;
}
function KR(n) {
  n.parent && (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty), n.isSharedProjectionDirty || (n.isSharedProjectionDirty = !!(n.isProjectionDirty || n.parent.isProjectionDirty || n.parent.isSharedProjectionDirty)), n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty));
}
function QR(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function ZR(n) {
  n.clearSnapshot();
}
function Hg(n) {
  n.clearMeasurements();
}
function qg(n) {
  n.isLayoutDirty = !1;
}
function FR(n) {
  const { visualElement: i } = n.options;
  i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"), n.resetTransform();
}
function Pg(n) {
  n.finishAnimation(), n.targetDelta = n.relativeTarget = n.target = void 0, n.isProjectionDirty = !0;
}
function WR(n) {
  n.resolveTargetDelta();
}
function JR(n) {
  n.calcProjection();
}
function $R(n) {
  n.resetSkewAndRotation();
}
function IR(n) {
  n.removeLeadSnapshot();
}
function Yg(n, i, s) {
  n.translate = Ht(i.translate, 0, s), n.scale = Ht(i.scale, 1, s), n.origin = i.origin, n.originPoint = i.originPoint;
}
function Gg(n, i, s, l) {
  n.min = Ht(i.min, s.min, l), n.max = Ht(i.max, s.max, l);
}
function tO(n, i, s, l) {
  Gg(n.x, i.x, s.x, l), Gg(n.y, i.y, s.y, l);
}
function eO(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const nO = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Xg = (n) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n), Kg = Xg("applewebkit/") && !Xg("chrome/") ? Math.round : Ze;
function Qg(n) {
  n.min = Kg(n.min), n.max = Kg(n.max);
}
function iO(n) {
  Qg(n.x), Qg(n.y);
}
function lb(n, i, s) {
  return n === "position" || n === "preserve-aspect" && !uR(Lg(i), Lg(s), 0.2);
}
function aO(n) {
  return n !== n.root && n.scroll?.wasRoot;
}
const sO = rb({
  attachResizeListener: (n, i) => lr(n, "resize", i),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Qc = {
  current: void 0
}, ob = rb({
  measureScroll: (n) => ({
    x: n.scrollLeft,
    y: n.scrollTop
  }),
  defaultParent: () => {
    if (!Qc.current) {
      const n = new sO({});
      n.mount(window), n.setOptions({ layoutScroll: !0 }), Qc.current = n;
    }
    return Qc.current;
  },
  resetTransform: (n, i) => {
    n.style.transform = i !== void 0 ? i : "none";
  },
  checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed"
}), rO = {
  pan: {
    Feature: AR
  },
  drag: {
    Feature: wR,
    ProjectionNode: ob,
    MeasureLayout: tb
  }
};
function Zg(n, i, s) {
  const { props: l } = n;
  n.animationState && l.whileHover && n.animationState.setActive("whileHover", s === "Start");
  const o = "onHover" + s, m = l[o];
  m && Lt.postRender(() => m(i, mr(i)));
}
class lO extends ui {
  mount() {
    const { current: i } = this.node;
    i && (this.unmount = OE(i, (s, l) => (Zg(this.node, l, "Start"), (o) => Zg(this.node, o, "End"))));
  }
  unmount() {
  }
}
class oO extends ui {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let i = !1;
    try {
      i = this.node.current.matches(":focus-visible");
    } catch {
      i = !0;
    }
    !i || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = ur(lr(this.node.current, "focus", () => this.onFocus()), lr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Fg(n, i, s) {
  const { props: l } = n;
  if (n.current instanceof HTMLButtonElement && n.current.disabled)
    return;
  n.animationState && l.whileTap && n.animationState.setActive("whileTap", s === "Start");
  const o = "onTap" + (s === "End" ? "" : s), m = l[o];
  m && Lt.postRender(() => m(i, mr(i)));
}
class uO extends ui {
  mount() {
    const { current: i } = this.node;
    i && (this.unmount = jE(i, (s, l) => (Fg(this.node, l, "Start"), (o, { success: m }) => Fg(this.node, o, m ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Mf = /* @__PURE__ */ new WeakMap(), Zc = /* @__PURE__ */ new WeakMap(), cO = (n) => {
  const i = Mf.get(n.target);
  i && i(n);
}, fO = (n) => {
  n.forEach(cO);
};
function mO({ root: n, ...i }) {
  const s = n || document;
  Zc.has(s) || Zc.set(s, {});
  const l = Zc.get(s), o = JSON.stringify(i);
  return l[o] || (l[o] = new IntersectionObserver(fO, { root: n, ...i })), l[o];
}
function dO(n, i, s) {
  const l = mO(i);
  return Mf.set(n, s), l.observe(n), () => {
    Mf.delete(n), l.unobserve(n);
  };
}
const hO = {
  some: 0,
  all: 1
};
class pO extends ui {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: i = {} } = this.node.getProps(), { root: s, margin: l, amount: o = "some", once: m } = i, f = {
      root: s ? s.current : void 0,
      rootMargin: l,
      threshold: typeof o == "number" ? o : hO[o]
    }, d = (p) => {
      const { isIntersecting: h } = p;
      if (this.isInView === h || (this.isInView = h, m && !h && this.hasEnteredView))
        return;
      h && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", h);
      const { onViewportEnter: g, onViewportLeave: b } = this.node.getProps(), x = h ? g : b;
      x && x(p);
    };
    return dO(this.node.current, f, d);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: i, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(yO(i, s)) && this.startObserver();
  }
  unmount() {
  }
}
function yO({ viewport: n = {} }, { viewport: i = {} } = {}) {
  return (s) => n[s] !== i[s];
}
const gO = {
  inView: {
    Feature: pO
  },
  tap: {
    Feature: uO
  },
  focus: {
    Feature: oO
  },
  hover: {
    Feature: lO
  }
}, vO = {
  layout: {
    ProjectionNode: ob,
    MeasureLayout: tb
  }
}, bO = {
  ...iR,
  ...gO,
  ...rO,
  ...vO
}, ve = /* @__PURE__ */ vM(bO, NM), xO = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: -50,
    transition: {
      duration: 0.3
    }
  }
}, Fc = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  }
}, SO = {
  initial: {
    scale: 1
  },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: 1 / 0,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
}, TO = {
  initial: {
    scale: 1,
    rotate: 0
  },
  hover: {
    scale: 1.1,
    rotate: 90,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17
    }
  },
  tap: {
    scale: 0.9,
    rotate: 180
  }
}, wO = {
  initial: {
    opacity: 1
  },
  animate: {
    opacity: [1, 0.5, 1],
    transition: {
      duration: 2,
      repeat: 1 / 0,
      repeatType: "reverse"
      // ease: "easeInOut"
    }
  }
}, AO = {
  initial: {
    scaleX: 0,
    opacity: 0
  },
  animate: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: "easeOut"
    }
  }
}, EO = ({
  audioStream: n,
  isActive: i = !0,
  size: s = 56,
  // 14 * 4 (w-14 h-14)
  color: l = "rgba(255, 255, 255, 0.8)",
  sensitivity: o = 1
}) => {
  const [m, f] = G.useState(new Array(8).fill(0)), [d, p] = G.useState(!1), h = G.useRef(null), g = G.useRef(null), b = G.useRef(null), x = G.useRef(null), C = G.useRef(null);
  G.useEffect(() => {
    if (!n || !i) {
      E();
      return;
    }
    return (async () => {
      try {
        b.current = new (window.AudioContext || window.webkitAudioContext)(), h.current = b.current.createAnalyser(), h.current.fftSize = 64, h.current.smoothingTimeConstant = 0.8, C.current = b.current.createMediaStreamSource(n), C.current.connect(h.current);
        const V = h.current.frequencyBinCount;
        g.current = new Uint8Array(V), p(!0), R();
      } catch (V) {
        console.error("Error setting up audio analysis:", V);
      }
    })(), () => {
      E();
    };
  }, [n, i]);
  const E = () => {
    x.current && cancelAnimationFrame(x.current), C.current && C.current.disconnect(), b.current && b.current.state !== "closed" && b.current.close(), p(!1), f(new Array(8).fill(0));
  }, R = () => {
    if (!h.current || !g.current) return;
    const N = () => {
      if (!h.current || !g.current) return;
      h.current.getByteFrequencyData(g.current);
      const V = [], B = Math.floor(g.current.length / 8);
      for (let H = 0; H < 8; H++) {
        let W = 0;
        const Z = H * B, Q = Z + B;
        for (let Y = Z; Y < Q; Y++)
          W += g.current[Y];
        const I = W / B / 255 * o;
        V.push(Math.min(I, 1));
      }
      f(V), i && (x.current = requestAnimationFrame(N));
    };
    N();
  };
  return /* @__PURE__ */ A.jsx(
    "div",
    {
      className: "mimin-flex mimin-items-center mimin-justify-center",
      style: { width: s, height: s },
      children: d ? (
        // Real-time audio visualizer
        /* @__PURE__ */ A.jsx("div", { className: "mimin-flex mimin-items-end mimin-justify-center mimin-space-x-1", children: m.map((N, V) => /* @__PURE__ */ A.jsx(
          ve.div,
          {
            className: "mimin-rounded-full mimin-bg-current",
            style: {
              width: Math.max(2, s / 16),
              minHeight: Math.max(2, s / 16),
              backgroundColor: l,
              opacity: 0.7 + N * 0.3
            },
            animate: {
              height: Math.max(s / 16, N * s * 0.8),
              scaleY: 1 + N * 0.5
            },
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 30
            }
          },
          V
        )) })
      ) : (
        // Fallback animation (seperti sebelumnya)
        /* @__PURE__ */ A.jsx("div", { className: "mimin-flex mimin-items-center mimin-justify-center mimin-animate-pulse", children: /* @__PURE__ */ A.jsx("span", { className: "mimin-text-white mimin-text-sm", children: "Connecting..." }) })
      )
    }
  );
}, MO = ({ audioStream: n, isActive: i = !0 }) => /* @__PURE__ */ A.jsx(
  EO,
  {
    audioStream: n,
    isActive: i,
    size: 56,
    color: "rgba(255, 255, 255, 0.8)",
    sensitivity: 1.2
  }
);
function ub(n, i) {
  return function() {
    return n.apply(i, arguments);
  };
}
var Wg = {};
const { toString: RO } = Object.prototype, { getPrototypeOf: gm } = Object, { iterator: ro, toStringTag: cb } = Symbol, lo = /* @__PURE__ */ ((n) => (i) => {
  const s = RO.call(i);
  return n[s] || (n[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), en = (n) => (n = n.toLowerCase(), (i) => lo(i) === n), oo = (n) => (i) => typeof i === n, { isArray: Pa } = Array, or = oo("undefined");
function OO(n) {
  return n !== null && !or(n) && n.constructor !== null && !or(n.constructor) && Me(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const fb = en("ArrayBuffer");
function CO(n) {
  let i;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(n) : i = n && n.buffer && fb(n.buffer), i;
}
const DO = oo("string"), Me = oo("function"), mb = oo("number"), uo = (n) => n !== null && typeof n == "object", NO = (n) => n === !0 || n === !1, ql = (n) => {
  if (lo(n) !== "object")
    return !1;
  const i = gm(n);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(cb in n) && !(ro in n);
}, jO = en("Date"), _O = en("File"), zO = en("Blob"), UO = en("FileList"), VO = (n) => uo(n) && Me(n.pipe), BO = (n) => {
  let i;
  return n && (typeof FormData == "function" && n instanceof FormData || Me(n.append) && ((i = lo(n)) === "formdata" || // detect form-data instance
  i === "object" && Me(n.toString) && n.toString() === "[object FormData]"));
}, LO = en("URLSearchParams"), [kO, HO, qO, PO] = ["ReadableStream", "Request", "Response", "Headers"].map(en), YO = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function dr(n, i, { allOwnKeys: s = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let l, o;
  if (typeof n != "object" && (n = [n]), Pa(n))
    for (l = 0, o = n.length; l < o; l++)
      i.call(null, n[l], l, n);
  else {
    const m = s ? Object.getOwnPropertyNames(n) : Object.keys(n), f = m.length;
    let d;
    for (l = 0; l < f; l++)
      d = m[l], i.call(null, n[d], d, n);
  }
}
function db(n, i) {
  i = i.toLowerCase();
  const s = Object.keys(n);
  let l = s.length, o;
  for (; l-- > 0; )
    if (o = s[l], i === o.toLowerCase())
      return o;
  return null;
}
const Ui = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, hb = (n) => !or(n) && n !== Ui;
function Rf() {
  const { caseless: n } = hb(this) && this || {}, i = {}, s = (l, o) => {
    const m = n && db(i, o) || o;
    ql(i[m]) && ql(l) ? i[m] = Rf(i[m], l) : ql(l) ? i[m] = Rf({}, l) : Pa(l) ? i[m] = l.slice() : i[m] = l;
  };
  for (let l = 0, o = arguments.length; l < o; l++)
    arguments[l] && dr(arguments[l], s);
  return i;
}
const GO = (n, i, s, { allOwnKeys: l } = {}) => (dr(i, (o, m) => {
  s && Me(o) ? n[m] = ub(o, s) : n[m] = o;
}, { allOwnKeys: l }), n), XO = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), KO = (n, i, s, l) => {
  n.prototype = Object.create(i.prototype, l), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: i.prototype
  }), s && Object.assign(n.prototype, s);
}, QO = (n, i, s, l) => {
  let o, m, f;
  const d = {};
  if (i = i || {}, n == null) return i;
  do {
    for (o = Object.getOwnPropertyNames(n), m = o.length; m-- > 0; )
      f = o[m], (!l || l(f, n, i)) && !d[f] && (i[f] = n[f], d[f] = !0);
    n = s !== !1 && gm(n);
  } while (n && (!s || s(n, i)) && n !== Object.prototype);
  return i;
}, ZO = (n, i, s) => {
  n = String(n), (s === void 0 || s > n.length) && (s = n.length), s -= i.length;
  const l = n.indexOf(i, s);
  return l !== -1 && l === s;
}, FO = (n) => {
  if (!n) return null;
  if (Pa(n)) return n;
  let i = n.length;
  if (!mb(i)) return null;
  const s = new Array(i);
  for (; i-- > 0; )
    s[i] = n[i];
  return s;
}, WO = /* @__PURE__ */ ((n) => (i) => n && i instanceof n)(typeof Uint8Array < "u" && gm(Uint8Array)), JO = (n, i) => {
  const l = (n && n[ro]).call(n);
  let o;
  for (; (o = l.next()) && !o.done; ) {
    const m = o.value;
    i.call(n, m[0], m[1]);
  }
}, $O = (n, i) => {
  let s;
  const l = [];
  for (; (s = n.exec(i)) !== null; )
    l.push(s);
  return l;
}, IO = en("HTMLFormElement"), tC = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, l, o) {
    return l.toUpperCase() + o;
  }
), Jg = (({ hasOwnProperty: n }) => (i, s) => n.call(i, s))(Object.prototype), eC = en("RegExp"), pb = (n, i) => {
  const s = Object.getOwnPropertyDescriptors(n), l = {};
  dr(s, (o, m) => {
    let f;
    (f = i(o, m, n)) !== !1 && (l[m] = f || o);
  }), Object.defineProperties(n, l);
}, nC = (n) => {
  pb(n, (i, s) => {
    if (Me(n) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
      return !1;
    const l = n[s];
    if (Me(l)) {
      if (i.enumerable = !1, "writable" in i) {
        i.writable = !1;
        return;
      }
      i.set || (i.set = () => {
        throw Error("Can not rewrite read-only method '" + s + "'");
      });
    }
  });
}, iC = (n, i) => {
  const s = {}, l = (o) => {
    o.forEach((m) => {
      s[m] = !0;
    });
  };
  return Pa(n) ? l(n) : l(String(n).split(i)), s;
}, aC = () => {
}, sC = (n, i) => n != null && Number.isFinite(n = +n) ? n : i;
function rC(n) {
  return !!(n && Me(n.append) && n[cb] === "FormData" && n[ro]);
}
const lC = (n) => {
  const i = new Array(10), s = (l, o) => {
    if (uo(l)) {
      if (i.indexOf(l) >= 0)
        return;
      if (!("toJSON" in l)) {
        i[o] = l;
        const m = Pa(l) ? [] : {};
        return dr(l, (f, d) => {
          const p = s(f, o + 1);
          !or(p) && (m[d] = p);
        }), i[o] = void 0, m;
      }
    }
    return l;
  };
  return s(n, 0);
}, oC = en("AsyncFunction"), uC = (n) => n && (uo(n) || Me(n)) && Me(n.then) && Me(n.catch), yb = ((n, i) => n ? setImmediate : i ? ((s, l) => (Ui.addEventListener("message", ({ source: o, data: m }) => {
  o === Ui && m === s && l.length && l.shift()();
}, !1), (o) => {
  l.push(o), Ui.postMessage(s, "*");
}))(`axios@${Math.random()}`, []) : (s) => setTimeout(s))(
  typeof setImmediate == "function",
  Me(Ui.postMessage)
), cC = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ui) : typeof Wg < "u" && Wg.nextTick || yb, fC = (n) => n != null && Me(n[ro]), U = {
  isArray: Pa,
  isArrayBuffer: fb,
  isBuffer: OO,
  isFormData: BO,
  isArrayBufferView: CO,
  isString: DO,
  isNumber: mb,
  isBoolean: NO,
  isObject: uo,
  isPlainObject: ql,
  isReadableStream: kO,
  isRequest: HO,
  isResponse: qO,
  isHeaders: PO,
  isUndefined: or,
  isDate: jO,
  isFile: _O,
  isBlob: zO,
  isRegExp: eC,
  isFunction: Me,
  isStream: VO,
  isURLSearchParams: LO,
  isTypedArray: WO,
  isFileList: UO,
  forEach: dr,
  merge: Rf,
  extend: GO,
  trim: YO,
  stripBOM: XO,
  inherits: KO,
  toFlatObject: QO,
  kindOf: lo,
  kindOfTest: en,
  endsWith: ZO,
  toArray: FO,
  forEachEntry: JO,
  matchAll: $O,
  isHTMLForm: IO,
  hasOwnProperty: Jg,
  hasOwnProp: Jg,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: pb,
  freezeMethods: nC,
  toObjectSet: iC,
  toCamelCase: tC,
  noop: aC,
  toFiniteNumber: sC,
  findKey: db,
  global: Ui,
  isContextDefined: hb,
  isSpecCompliantForm: rC,
  toJSONObject: lC,
  isAsyncFn: oC,
  isThenable: uC,
  setImmediate: yb,
  asap: cC,
  isIterable: fC
};
function ht(n, i, s, l, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", i && (this.code = i), s && (this.config = s), l && (this.request = l), o && (this.response = o, this.status = o.status ? o.status : null);
}
U.inherits(ht, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: U.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const gb = ht.prototype, vb = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((n) => {
  vb[n] = { value: n };
});
Object.defineProperties(ht, vb);
Object.defineProperty(gb, "isAxiosError", { value: !0 });
ht.from = (n, i, s, l, o, m) => {
  const f = Object.create(gb);
  return U.toFlatObject(n, f, function(p) {
    return p !== Error.prototype;
  }, (d) => d !== "isAxiosError"), ht.call(f, n.message, i, s, l, o), f.cause = n, f.name = n.name, m && Object.assign(f, m), f;
};
const mC = null;
function Of(n) {
  return U.isPlainObject(n) || U.isArray(n);
}
function bb(n) {
  return U.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function $g(n, i, s) {
  return n ? n.concat(i).map(function(o, m) {
    return o = bb(o), !s && m ? "[" + o + "]" : o;
  }).join(s ? "." : "") : i;
}
function dC(n) {
  return U.isArray(n) && !n.some(Of);
}
const hC = U.toFlatObject(U, {}, null, function(i) {
  return /^is[A-Z]/.test(i);
});
function co(n, i, s) {
  if (!U.isObject(n))
    throw new TypeError("target must be an object");
  i = i || new FormData(), s = U.toFlatObject(s, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(R, N) {
    return !U.isUndefined(N[R]);
  });
  const l = s.metaTokens, o = s.visitor || g, m = s.dots, f = s.indexes, p = (s.Blob || typeof Blob < "u" && Blob) && U.isSpecCompliantForm(i);
  if (!U.isFunction(o))
    throw new TypeError("visitor must be a function");
  function h(E) {
    if (E === null) return "";
    if (U.isDate(E))
      return E.toISOString();
    if (U.isBoolean(E))
      return E.toString();
    if (!p && U.isBlob(E))
      throw new ht("Blob is not supported. Use a Buffer instead.");
    return U.isArrayBuffer(E) || U.isTypedArray(E) ? p && typeof Blob == "function" ? new Blob([E]) : Buffer.from(E) : E;
  }
  function g(E, R, N) {
    let V = E;
    if (E && !N && typeof E == "object") {
      if (U.endsWith(R, "{}"))
        R = l ? R : R.slice(0, -2), E = JSON.stringify(E);
      else if (U.isArray(E) && dC(E) || (U.isFileList(E) || U.endsWith(R, "[]")) && (V = U.toArray(E)))
        return R = bb(R), V.forEach(function(H, W) {
          !(U.isUndefined(H) || H === null) && i.append(
            // eslint-disable-next-line no-nested-ternary
            f === !0 ? $g([R], W, m) : f === null ? R : R + "[]",
            h(H)
          );
        }), !1;
    }
    return Of(E) ? !0 : (i.append($g(N, R, m), h(E)), !1);
  }
  const b = [], x = Object.assign(hC, {
    defaultVisitor: g,
    convertValue: h,
    isVisitable: Of
  });
  function C(E, R) {
    if (!U.isUndefined(E)) {
      if (b.indexOf(E) !== -1)
        throw Error("Circular reference detected in " + R.join("."));
      b.push(E), U.forEach(E, function(V, B) {
        (!(U.isUndefined(V) || V === null) && o.call(
          i,
          V,
          U.isString(B) ? B.trim() : B,
          R,
          x
        )) === !0 && C(V, R ? R.concat(B) : [B]);
      }), b.pop();
    }
  }
  if (!U.isObject(n))
    throw new TypeError("data must be an object");
  return C(n), i;
}
function Ig(n) {
  const i = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(l) {
    return i[l];
  });
}
function vm(n, i) {
  this._pairs = [], n && co(n, this, i);
}
const xb = vm.prototype;
xb.append = function(i, s) {
  this._pairs.push([i, s]);
};
xb.toString = function(i) {
  const s = i ? function(l) {
    return i.call(this, l, Ig);
  } : Ig;
  return this._pairs.map(function(o) {
    return s(o[0]) + "=" + s(o[1]);
  }, "").join("&");
};
function pC(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Sb(n, i, s) {
  if (!i)
    return n;
  const l = s && s.encode || pC;
  U.isFunction(s) && (s = {
    serialize: s
  });
  const o = s && s.serialize;
  let m;
  if (o ? m = o(i, s) : m = U.isURLSearchParams(i) ? i.toString() : new vm(i, s).toString(l), m) {
    const f = n.indexOf("#");
    f !== -1 && (n = n.slice(0, f)), n += (n.indexOf("?") === -1 ? "?" : "&") + m;
  }
  return n;
}
class t0 {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(i, s, l) {
    return this.handlers.push({
      fulfilled: i,
      rejected: s,
      synchronous: l ? l.synchronous : !1,
      runWhen: l ? l.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(i) {
    this.handlers[i] && (this.handlers[i] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(i) {
    U.forEach(this.handlers, function(l) {
      l !== null && i(l);
    });
  }
}
const Tb = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, yC = typeof URLSearchParams < "u" ? URLSearchParams : vm, gC = typeof FormData < "u" ? FormData : null, vC = typeof Blob < "u" ? Blob : null, bC = {
  isBrowser: !0,
  classes: {
    URLSearchParams: yC,
    FormData: gC,
    Blob: vC
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, bm = typeof window < "u" && typeof document < "u", Cf = typeof navigator == "object" && navigator || void 0, xC = bm && (!Cf || ["ReactNative", "NativeScript", "NS"].indexOf(Cf.product) < 0), SC = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", TC = bm && window.location.href || "http://localhost", wC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: bm,
  hasStandardBrowserEnv: xC,
  hasStandardBrowserWebWorkerEnv: SC,
  navigator: Cf,
  origin: TC
}, Symbol.toStringTag, { value: "Module" })), de = {
  ...wC,
  ...bC
};
function AC(n, i) {
  return co(n, new de.classes.URLSearchParams(), Object.assign({
    visitor: function(s, l, o, m) {
      return de.isNode && U.isBuffer(s) ? (this.append(l, s.toString("base64")), !1) : m.defaultVisitor.apply(this, arguments);
    }
  }, i));
}
function EC(n) {
  return U.matchAll(/\w+|\[(\w*)]/g, n).map((i) => i[0] === "[]" ? "" : i[1] || i[0]);
}
function MC(n) {
  const i = {}, s = Object.keys(n);
  let l;
  const o = s.length;
  let m;
  for (l = 0; l < o; l++)
    m = s[l], i[m] = n[m];
  return i;
}
function wb(n) {
  function i(s, l, o, m) {
    let f = s[m++];
    if (f === "__proto__") return !0;
    const d = Number.isFinite(+f), p = m >= s.length;
    return f = !f && U.isArray(o) ? o.length : f, p ? (U.hasOwnProp(o, f) ? o[f] = [o[f], l] : o[f] = l, !d) : ((!o[f] || !U.isObject(o[f])) && (o[f] = []), i(s, l, o[f], m) && U.isArray(o[f]) && (o[f] = MC(o[f])), !d);
  }
  if (U.isFormData(n) && U.isFunction(n.entries)) {
    const s = {};
    return U.forEachEntry(n, (l, o) => {
      i(EC(l), o, s, 0);
    }), s;
  }
  return null;
}
function RC(n, i, s) {
  if (U.isString(n))
    try {
      return (i || JSON.parse)(n), U.trim(n);
    } catch (l) {
      if (l.name !== "SyntaxError")
        throw l;
    }
  return (s || JSON.stringify)(n);
}
const hr = {
  transitional: Tb,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(i, s) {
    const l = s.getContentType() || "", o = l.indexOf("application/json") > -1, m = U.isObject(i);
    if (m && U.isHTMLForm(i) && (i = new FormData(i)), U.isFormData(i))
      return o ? JSON.stringify(wb(i)) : i;
    if (U.isArrayBuffer(i) || U.isBuffer(i) || U.isStream(i) || U.isFile(i) || U.isBlob(i) || U.isReadableStream(i))
      return i;
    if (U.isArrayBufferView(i))
      return i.buffer;
    if (U.isURLSearchParams(i))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), i.toString();
    let d;
    if (m) {
      if (l.indexOf("application/x-www-form-urlencoded") > -1)
        return AC(i, this.formSerializer).toString();
      if ((d = U.isFileList(i)) || l.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return co(
          d ? { "files[]": i } : i,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return m || o ? (s.setContentType("application/json", !1), RC(i)) : i;
  }],
  transformResponse: [function(i) {
    const s = this.transitional || hr.transitional, l = s && s.forcedJSONParsing, o = this.responseType === "json";
    if (U.isResponse(i) || U.isReadableStream(i))
      return i;
    if (i && U.isString(i) && (l && !this.responseType || o)) {
      const f = !(s && s.silentJSONParsing) && o;
      try {
        return JSON.parse(i);
      } catch (d) {
        if (f)
          throw d.name === "SyntaxError" ? ht.from(d, ht.ERR_BAD_RESPONSE, this, null, this.response) : d;
      }
    }
    return i;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: de.classes.FormData,
    Blob: de.classes.Blob
  },
  validateStatus: function(i) {
    return i >= 200 && i < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
U.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  hr.headers[n] = {};
});
const OC = U.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), CC = (n) => {
  const i = {};
  let s, l, o;
  return n && n.split(`
`).forEach(function(f) {
    o = f.indexOf(":"), s = f.substring(0, o).trim().toLowerCase(), l = f.substring(o + 1).trim(), !(!s || i[s] && OC[s]) && (s === "set-cookie" ? i[s] ? i[s].push(l) : i[s] = [l] : i[s] = i[s] ? i[s] + ", " + l : l);
  }), i;
}, e0 = Symbol("internals");
function Qs(n) {
  return n && String(n).trim().toLowerCase();
}
function Pl(n) {
  return n === !1 || n == null ? n : U.isArray(n) ? n.map(Pl) : String(n);
}
function DC(n) {
  const i = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let l;
  for (; l = s.exec(n); )
    i[l[1]] = l[2];
  return i;
}
const NC = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function Wc(n, i, s, l, o) {
  if (U.isFunction(l))
    return l.call(this, i, s);
  if (o && (i = s), !!U.isString(i)) {
    if (U.isString(l))
      return i.indexOf(l) !== -1;
    if (U.isRegExp(l))
      return l.test(i);
  }
}
function jC(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (i, s, l) => s.toUpperCase() + l);
}
function _C(n, i) {
  const s = U.toCamelCase(" " + i);
  ["get", "set", "has"].forEach((l) => {
    Object.defineProperty(n, l + s, {
      value: function(o, m, f) {
        return this[l].call(this, i, o, m, f);
      },
      configurable: !0
    });
  });
}
let Re = class {
  constructor(i) {
    i && this.set(i);
  }
  set(i, s, l) {
    const o = this;
    function m(d, p, h) {
      const g = Qs(p);
      if (!g)
        throw new Error("header name must be a non-empty string");
      const b = U.findKey(o, g);
      (!b || o[b] === void 0 || h === !0 || h === void 0 && o[b] !== !1) && (o[b || p] = Pl(d));
    }
    const f = (d, p) => U.forEach(d, (h, g) => m(h, g, p));
    if (U.isPlainObject(i) || i instanceof this.constructor)
      f(i, s);
    else if (U.isString(i) && (i = i.trim()) && !NC(i))
      f(CC(i), s);
    else if (U.isObject(i) && U.isIterable(i)) {
      let d = {}, p, h;
      for (const g of i) {
        if (!U.isArray(g))
          throw TypeError("Object iterator must return a key-value pair");
        d[h = g[0]] = (p = d[h]) ? U.isArray(p) ? [...p, g[1]] : [p, g[1]] : g[1];
      }
      f(d, s);
    } else
      i != null && m(s, i, l);
    return this;
  }
  get(i, s) {
    if (i = Qs(i), i) {
      const l = U.findKey(this, i);
      if (l) {
        const o = this[l];
        if (!s)
          return o;
        if (s === !0)
          return DC(o);
        if (U.isFunction(s))
          return s.call(this, o, l);
        if (U.isRegExp(s))
          return s.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(i, s) {
    if (i = Qs(i), i) {
      const l = U.findKey(this, i);
      return !!(l && this[l] !== void 0 && (!s || Wc(this, this[l], l, s)));
    }
    return !1;
  }
  delete(i, s) {
    const l = this;
    let o = !1;
    function m(f) {
      if (f = Qs(f), f) {
        const d = U.findKey(l, f);
        d && (!s || Wc(l, l[d], d, s)) && (delete l[d], o = !0);
      }
    }
    return U.isArray(i) ? i.forEach(m) : m(i), o;
  }
  clear(i) {
    const s = Object.keys(this);
    let l = s.length, o = !1;
    for (; l--; ) {
      const m = s[l];
      (!i || Wc(this, this[m], m, i, !0)) && (delete this[m], o = !0);
    }
    return o;
  }
  normalize(i) {
    const s = this, l = {};
    return U.forEach(this, (o, m) => {
      const f = U.findKey(l, m);
      if (f) {
        s[f] = Pl(o), delete s[m];
        return;
      }
      const d = i ? jC(m) : String(m).trim();
      d !== m && delete s[m], s[d] = Pl(o), l[d] = !0;
    }), this;
  }
  concat(...i) {
    return this.constructor.concat(this, ...i);
  }
  toJSON(i) {
    const s = /* @__PURE__ */ Object.create(null);
    return U.forEach(this, (l, o) => {
      l != null && l !== !1 && (s[o] = i && U.isArray(l) ? l.join(", ") : l);
    }), s;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([i, s]) => i + ": " + s).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(i) {
    return i instanceof this ? i : new this(i);
  }
  static concat(i, ...s) {
    const l = new this(i);
    return s.forEach((o) => l.set(o)), l;
  }
  static accessor(i) {
    const l = (this[e0] = this[e0] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function m(f) {
      const d = Qs(f);
      l[d] || (_C(o, f), l[d] = !0);
    }
    return U.isArray(i) ? i.forEach(m) : m(i), this;
  }
};
Re.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
U.reduceDescriptors(Re.prototype, ({ value: n }, i) => {
  let s = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => n,
    set(l) {
      this[s] = l;
    }
  };
});
U.freezeMethods(Re);
function Jc(n, i) {
  const s = this || hr, l = i || s, o = Re.from(l.headers);
  let m = l.data;
  return U.forEach(n, function(d) {
    m = d.call(s, m, o.normalize(), i ? i.status : void 0);
  }), o.normalize(), m;
}
function Ab(n) {
  return !!(n && n.__CANCEL__);
}
function Ya(n, i, s) {
  ht.call(this, n ?? "canceled", ht.ERR_CANCELED, i, s), this.name = "CanceledError";
}
U.inherits(Ya, ht, {
  __CANCEL__: !0
});
function Eb(n, i, s) {
  const l = s.config.validateStatus;
  !s.status || !l || l(s.status) ? n(s) : i(new ht(
    "Request failed with status code " + s.status,
    [ht.ERR_BAD_REQUEST, ht.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
function zC(n) {
  const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return i && i[1] || "";
}
function UC(n, i) {
  n = n || 10;
  const s = new Array(n), l = new Array(n);
  let o = 0, m = 0, f;
  return i = i !== void 0 ? i : 1e3, function(p) {
    const h = Date.now(), g = l[m];
    f || (f = h), s[o] = p, l[o] = h;
    let b = m, x = 0;
    for (; b !== o; )
      x += s[b++], b = b % n;
    if (o = (o + 1) % n, o === m && (m = (m + 1) % n), h - f < i)
      return;
    const C = g && h - g;
    return C ? Math.round(x * 1e3 / C) : void 0;
  };
}
function VC(n, i) {
  let s = 0, l = 1e3 / i, o, m;
  const f = (h, g = Date.now()) => {
    s = g, o = null, m && (clearTimeout(m), m = null), n.apply(null, h);
  };
  return [(...h) => {
    const g = Date.now(), b = g - s;
    b >= l ? f(h, g) : (o = h, m || (m = setTimeout(() => {
      m = null, f(o);
    }, l - b)));
  }, () => o && f(o)];
}
const $l = (n, i, s = 3) => {
  let l = 0;
  const o = UC(50, 250);
  return VC((m) => {
    const f = m.loaded, d = m.lengthComputable ? m.total : void 0, p = f - l, h = o(p), g = f <= d;
    l = f;
    const b = {
      loaded: f,
      total: d,
      progress: d ? f / d : void 0,
      bytes: p,
      rate: h || void 0,
      estimated: h && d && g ? (d - f) / h : void 0,
      event: m,
      lengthComputable: d != null,
      [i ? "download" : "upload"]: !0
    };
    n(b);
  }, s);
}, n0 = (n, i) => {
  const s = n != null;
  return [(l) => i[0]({
    lengthComputable: s,
    total: n,
    loaded: l
  }), i[1]];
}, i0 = (n) => (...i) => U.asap(() => n(...i)), BC = de.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, i) => (s) => (s = new URL(s, de.origin), n.protocol === s.protocol && n.host === s.host && (i || n.port === s.port)))(
  new URL(de.origin),
  de.navigator && /(msie|trident)/i.test(de.navigator.userAgent)
) : () => !0, LC = de.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, i, s, l, o, m) {
      const f = [n + "=" + encodeURIComponent(i)];
      U.isNumber(s) && f.push("expires=" + new Date(s).toGMTString()), U.isString(l) && f.push("path=" + l), U.isString(o) && f.push("domain=" + o), m === !0 && f.push("secure"), document.cookie = f.join("; ");
    },
    read(n) {
      const i = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
      return i ? decodeURIComponent(i[3]) : null;
    },
    remove(n) {
      this.write(n, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function kC(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function HC(n, i) {
  return i ? n.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : n;
}
function Mb(n, i, s) {
  let l = !kC(i);
  return n && (l || s == !1) ? HC(n, i) : i;
}
const a0 = (n) => n instanceof Re ? { ...n } : n;
function ki(n, i) {
  i = i || {};
  const s = {};
  function l(h, g, b, x) {
    return U.isPlainObject(h) && U.isPlainObject(g) ? U.merge.call({ caseless: x }, h, g) : U.isPlainObject(g) ? U.merge({}, g) : U.isArray(g) ? g.slice() : g;
  }
  function o(h, g, b, x) {
    if (U.isUndefined(g)) {
      if (!U.isUndefined(h))
        return l(void 0, h, b, x);
    } else return l(h, g, b, x);
  }
  function m(h, g) {
    if (!U.isUndefined(g))
      return l(void 0, g);
  }
  function f(h, g) {
    if (U.isUndefined(g)) {
      if (!U.isUndefined(h))
        return l(void 0, h);
    } else return l(void 0, g);
  }
  function d(h, g, b) {
    if (b in i)
      return l(h, g);
    if (b in n)
      return l(void 0, h);
  }
  const p = {
    url: m,
    method: m,
    data: m,
    baseURL: f,
    transformRequest: f,
    transformResponse: f,
    paramsSerializer: f,
    timeout: f,
    timeoutMessage: f,
    withCredentials: f,
    withXSRFToken: f,
    adapter: f,
    responseType: f,
    xsrfCookieName: f,
    xsrfHeaderName: f,
    onUploadProgress: f,
    onDownloadProgress: f,
    decompress: f,
    maxContentLength: f,
    maxBodyLength: f,
    beforeRedirect: f,
    transport: f,
    httpAgent: f,
    httpsAgent: f,
    cancelToken: f,
    socketPath: f,
    responseEncoding: f,
    validateStatus: d,
    headers: (h, g, b) => o(a0(h), a0(g), b, !0)
  };
  return U.forEach(Object.keys(Object.assign({}, n, i)), function(g) {
    const b = p[g] || o, x = b(n[g], i[g], g);
    U.isUndefined(x) && b !== d || (s[g] = x);
  }), s;
}
const Rb = (n) => {
  const i = ki({}, n);
  let { data: s, withXSRFToken: l, xsrfHeaderName: o, xsrfCookieName: m, headers: f, auth: d } = i;
  i.headers = f = Re.from(f), i.url = Sb(Mb(i.baseURL, i.url, i.allowAbsoluteUrls), n.params, n.paramsSerializer), d && f.set(
    "Authorization",
    "Basic " + btoa((d.username || "") + ":" + (d.password ? unescape(encodeURIComponent(d.password)) : ""))
  );
  let p;
  if (U.isFormData(s)) {
    if (de.hasStandardBrowserEnv || de.hasStandardBrowserWebWorkerEnv)
      f.setContentType(void 0);
    else if ((p = f.getContentType()) !== !1) {
      const [h, ...g] = p ? p.split(";").map((b) => b.trim()).filter(Boolean) : [];
      f.setContentType([h || "multipart/form-data", ...g].join("; "));
    }
  }
  if (de.hasStandardBrowserEnv && (l && U.isFunction(l) && (l = l(i)), l || l !== !1 && BC(i.url))) {
    const h = o && m && LC.read(m);
    h && f.set(o, h);
  }
  return i;
}, qC = typeof XMLHttpRequest < "u", PC = qC && function(n) {
  return new Promise(function(s, l) {
    const o = Rb(n);
    let m = o.data;
    const f = Re.from(o.headers).normalize();
    let { responseType: d, onUploadProgress: p, onDownloadProgress: h } = o, g, b, x, C, E;
    function R() {
      C && C(), E && E(), o.cancelToken && o.cancelToken.unsubscribe(g), o.signal && o.signal.removeEventListener("abort", g);
    }
    let N = new XMLHttpRequest();
    N.open(o.method.toUpperCase(), o.url, !0), N.timeout = o.timeout;
    function V() {
      if (!N)
        return;
      const H = Re.from(
        "getAllResponseHeaders" in N && N.getAllResponseHeaders()
      ), Z = {
        data: !d || d === "text" || d === "json" ? N.responseText : N.response,
        status: N.status,
        statusText: N.statusText,
        headers: H,
        config: n,
        request: N
      };
      Eb(function(I) {
        s(I), R();
      }, function(I) {
        l(I), R();
      }, Z), N = null;
    }
    "onloadend" in N ? N.onloadend = V : N.onreadystatechange = function() {
      !N || N.readyState !== 4 || N.status === 0 && !(N.responseURL && N.responseURL.indexOf("file:") === 0) || setTimeout(V);
    }, N.onabort = function() {
      N && (l(new ht("Request aborted", ht.ECONNABORTED, n, N)), N = null);
    }, N.onerror = function() {
      l(new ht("Network Error", ht.ERR_NETWORK, n, N)), N = null;
    }, N.ontimeout = function() {
      let W = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const Z = o.transitional || Tb;
      o.timeoutErrorMessage && (W = o.timeoutErrorMessage), l(new ht(
        W,
        Z.clarifyTimeoutError ? ht.ETIMEDOUT : ht.ECONNABORTED,
        n,
        N
      )), N = null;
    }, m === void 0 && f.setContentType(null), "setRequestHeader" in N && U.forEach(f.toJSON(), function(W, Z) {
      N.setRequestHeader(Z, W);
    }), U.isUndefined(o.withCredentials) || (N.withCredentials = !!o.withCredentials), d && d !== "json" && (N.responseType = o.responseType), h && ([x, E] = $l(h, !0), N.addEventListener("progress", x)), p && N.upload && ([b, C] = $l(p), N.upload.addEventListener("progress", b), N.upload.addEventListener("loadend", C)), (o.cancelToken || o.signal) && (g = (H) => {
      N && (l(!H || H.type ? new Ya(null, n, N) : H), N.abort(), N = null);
    }, o.cancelToken && o.cancelToken.subscribe(g), o.signal && (o.signal.aborted ? g() : o.signal.addEventListener("abort", g)));
    const B = zC(o.url);
    if (B && de.protocols.indexOf(B) === -1) {
      l(new ht("Unsupported protocol " + B + ":", ht.ERR_BAD_REQUEST, n));
      return;
    }
    N.send(m || null);
  });
}, YC = (n, i) => {
  const { length: s } = n = n ? n.filter(Boolean) : [];
  if (i || s) {
    let l = new AbortController(), o;
    const m = function(h) {
      if (!o) {
        o = !0, d();
        const g = h instanceof Error ? h : this.reason;
        l.abort(g instanceof ht ? g : new Ya(g instanceof Error ? g.message : g));
      }
    };
    let f = i && setTimeout(() => {
      f = null, m(new ht(`timeout ${i} of ms exceeded`, ht.ETIMEDOUT));
    }, i);
    const d = () => {
      n && (f && clearTimeout(f), f = null, n.forEach((h) => {
        h.unsubscribe ? h.unsubscribe(m) : h.removeEventListener("abort", m);
      }), n = null);
    };
    n.forEach((h) => h.addEventListener("abort", m));
    const { signal: p } = l;
    return p.unsubscribe = () => U.asap(d), p;
  }
}, GC = function* (n, i) {
  let s = n.byteLength;
  if (s < i) {
    yield n;
    return;
  }
  let l = 0, o;
  for (; l < s; )
    o = l + i, yield n.slice(l, o), l = o;
}, XC = async function* (n, i) {
  for await (const s of KC(n))
    yield* GC(s, i);
}, KC = async function* (n) {
  if (n[Symbol.asyncIterator]) {
    yield* n;
    return;
  }
  const i = n.getReader();
  try {
    for (; ; ) {
      const { done: s, value: l } = await i.read();
      if (s)
        break;
      yield l;
    }
  } finally {
    await i.cancel();
  }
}, s0 = (n, i, s, l) => {
  const o = XC(n, i);
  let m = 0, f, d = (p) => {
    f || (f = !0, l && l(p));
  };
  return new ReadableStream({
    async pull(p) {
      try {
        const { done: h, value: g } = await o.next();
        if (h) {
          d(), p.close();
          return;
        }
        let b = g.byteLength;
        if (s) {
          let x = m += b;
          s(x);
        }
        p.enqueue(new Uint8Array(g));
      } catch (h) {
        throw d(h), h;
      }
    },
    cancel(p) {
      return d(p), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, fo = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ob = fo && typeof ReadableStream == "function", QC = fo && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((n) => (i) => n.encode(i))(new TextEncoder()) : async (n) => new Uint8Array(await new Response(n).arrayBuffer())), Cb = (n, ...i) => {
  try {
    return !!n(...i);
  } catch {
    return !1;
  }
}, ZC = Ob && Cb(() => {
  let n = !1;
  const i = new Request(de.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return n = !0, "half";
    }
  }).headers.has("Content-Type");
  return n && !i;
}), r0 = 64 * 1024, Df = Ob && Cb(() => U.isReadableStream(new Response("").body)), Il = {
  stream: Df && ((n) => n.body)
};
fo && ((n) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((i) => {
    !Il[i] && (Il[i] = U.isFunction(n[i]) ? (s) => s[i]() : (s, l) => {
      throw new ht(`Response type '${i}' is not supported`, ht.ERR_NOT_SUPPORT, l);
    });
  });
})(new Response());
const FC = async (n) => {
  if (n == null)
    return 0;
  if (U.isBlob(n))
    return n.size;
  if (U.isSpecCompliantForm(n))
    return (await new Request(de.origin, {
      method: "POST",
      body: n
    }).arrayBuffer()).byteLength;
  if (U.isArrayBufferView(n) || U.isArrayBuffer(n))
    return n.byteLength;
  if (U.isURLSearchParams(n) && (n = n + ""), U.isString(n))
    return (await QC(n)).byteLength;
}, WC = async (n, i) => {
  const s = U.toFiniteNumber(n.getContentLength());
  return s ?? FC(i);
}, JC = fo && (async (n) => {
  let {
    url: i,
    method: s,
    data: l,
    signal: o,
    cancelToken: m,
    timeout: f,
    onDownloadProgress: d,
    onUploadProgress: p,
    responseType: h,
    headers: g,
    withCredentials: b = "same-origin",
    fetchOptions: x
  } = Rb(n);
  h = h ? (h + "").toLowerCase() : "text";
  let C = YC([o, m && m.toAbortSignal()], f), E;
  const R = C && C.unsubscribe && (() => {
    C.unsubscribe();
  });
  let N;
  try {
    if (p && ZC && s !== "get" && s !== "head" && (N = await WC(g, l)) !== 0) {
      let Z = new Request(i, {
        method: "POST",
        body: l,
        duplex: "half"
      }), Q;
      if (U.isFormData(l) && (Q = Z.headers.get("content-type")) && g.setContentType(Q), Z.body) {
        const [I, Y] = n0(
          N,
          $l(i0(p))
        );
        l = s0(Z.body, r0, I, Y);
      }
    }
    U.isString(b) || (b = b ? "include" : "omit");
    const V = "credentials" in Request.prototype;
    E = new Request(i, {
      ...x,
      signal: C,
      method: s.toUpperCase(),
      headers: g.normalize().toJSON(),
      body: l,
      duplex: "half",
      credentials: V ? b : void 0
    });
    let B = await fetch(E, x);
    const H = Df && (h === "stream" || h === "response");
    if (Df && (d || H && R)) {
      const Z = {};
      ["status", "statusText", "headers"].forEach((ot) => {
        Z[ot] = B[ot];
      });
      const Q = U.toFiniteNumber(B.headers.get("content-length")), [I, Y] = d && n0(
        Q,
        $l(i0(d), !0)
      ) || [];
      B = new Response(
        s0(B.body, r0, I, () => {
          Y && Y(), R && R();
        }),
        Z
      );
    }
    h = h || "text";
    let W = await Il[U.findKey(Il, h) || "text"](B, n);
    return !H && R && R(), await new Promise((Z, Q) => {
      Eb(Z, Q, {
        data: W,
        headers: Re.from(B.headers),
        status: B.status,
        statusText: B.statusText,
        config: n,
        request: E
      });
    });
  } catch (V) {
    throw R && R(), V && V.name === "TypeError" && /Load failed|fetch/i.test(V.message) ? Object.assign(
      new ht("Network Error", ht.ERR_NETWORK, n, E),
      {
        cause: V.cause || V
      }
    ) : ht.from(V, V && V.code, n, E);
  }
}), Nf = {
  http: mC,
  xhr: PC,
  fetch: JC
};
U.forEach(Nf, (n, i) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: i });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: i });
  }
});
const l0 = (n) => `- ${n}`, $C = (n) => U.isFunction(n) || n === null || n === !1, Db = {
  getAdapter: (n) => {
    n = U.isArray(n) ? n : [n];
    const { length: i } = n;
    let s, l;
    const o = {};
    for (let m = 0; m < i; m++) {
      s = n[m];
      let f;
      if (l = s, !$C(s) && (l = Nf[(f = String(s)).toLowerCase()], l === void 0))
        throw new ht(`Unknown adapter '${f}'`);
      if (l)
        break;
      o[f || "#" + m] = l;
    }
    if (!l) {
      const m = Object.entries(o).map(
        ([d, p]) => `adapter ${d} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let f = i ? m.length > 1 ? `since :
` + m.map(l0).join(`
`) : " " + l0(m[0]) : "as no adapter specified";
      throw new ht(
        "There is no suitable adapter to dispatch the request " + f,
        "ERR_NOT_SUPPORT"
      );
    }
    return l;
  },
  adapters: Nf
};
function $c(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new Ya(null, n);
}
function o0(n) {
  return $c(n), n.headers = Re.from(n.headers), n.data = Jc.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), Db.getAdapter(n.adapter || hr.adapter)(n).then(function(l) {
    return $c(n), l.data = Jc.call(
      n,
      n.transformResponse,
      l
    ), l.headers = Re.from(l.headers), l;
  }, function(l) {
    return Ab(l) || ($c(n), l && l.response && (l.response.data = Jc.call(
      n,
      n.transformResponse,
      l.response
    ), l.response.headers = Re.from(l.response.headers))), Promise.reject(l);
  });
}
const Nb = "1.10.0", mo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, i) => {
  mo[n] = function(l) {
    return typeof l === n || "a" + (i < 1 ? "n " : " ") + n;
  };
});
const u0 = {};
mo.transitional = function(i, s, l) {
  function o(m, f) {
    return "[Axios v" + Nb + "] Transitional option '" + m + "'" + f + (l ? ". " + l : "");
  }
  return (m, f, d) => {
    if (i === !1)
      throw new ht(
        o(f, " has been removed" + (s ? " in " + s : "")),
        ht.ERR_DEPRECATED
      );
    return s && !u0[f] && (u0[f] = !0, console.warn(
      o(
        f,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), i ? i(m, f, d) : !0;
  };
};
mo.spelling = function(i) {
  return (s, l) => (console.warn(`${l} is likely a misspelling of ${i}`), !0);
};
function IC(n, i, s) {
  if (typeof n != "object")
    throw new ht("options must be an object", ht.ERR_BAD_OPTION_VALUE);
  const l = Object.keys(n);
  let o = l.length;
  for (; o-- > 0; ) {
    const m = l[o], f = i[m];
    if (f) {
      const d = n[m], p = d === void 0 || f(d, m, n);
      if (p !== !0)
        throw new ht("option " + m + " must be " + p, ht.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0)
      throw new ht("Unknown option " + m, ht.ERR_BAD_OPTION);
  }
}
const Yl = {
  assertOptions: IC,
  validators: mo
}, fn = Yl.validators;
let Li = class {
  constructor(i) {
    this.defaults = i || {}, this.interceptors = {
      request: new t0(),
      response: new t0()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(i, s) {
    try {
      return await this._request(i, s);
    } catch (l) {
      if (l instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const m = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          l.stack ? m && !String(l.stack).endsWith(m.replace(/^.+\n.+\n/, "")) && (l.stack += `
` + m) : l.stack = m;
        } catch {
        }
      }
      throw l;
    }
  }
  _request(i, s) {
    typeof i == "string" ? (s = s || {}, s.url = i) : s = i || {}, s = ki(this.defaults, s);
    const { transitional: l, paramsSerializer: o, headers: m } = s;
    l !== void 0 && Yl.assertOptions(l, {
      silentJSONParsing: fn.transitional(fn.boolean),
      forcedJSONParsing: fn.transitional(fn.boolean),
      clarifyTimeoutError: fn.transitional(fn.boolean)
    }, !1), o != null && (U.isFunction(o) ? s.paramsSerializer = {
      serialize: o
    } : Yl.assertOptions(o, {
      encode: fn.function,
      serialize: fn.function
    }, !0)), s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0), Yl.assertOptions(s, {
      baseUrl: fn.spelling("baseURL"),
      withXsrfToken: fn.spelling("withXSRFToken")
    }, !0), s.method = (s.method || this.defaults.method || "get").toLowerCase();
    let f = m && U.merge(
      m.common,
      m[s.method]
    );
    m && U.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (E) => {
        delete m[E];
      }
    ), s.headers = Re.concat(f, m);
    const d = [];
    let p = !0;
    this.interceptors.request.forEach(function(R) {
      typeof R.runWhen == "function" && R.runWhen(s) === !1 || (p = p && R.synchronous, d.unshift(R.fulfilled, R.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function(R) {
      h.push(R.fulfilled, R.rejected);
    });
    let g, b = 0, x;
    if (!p) {
      const E = [o0.bind(this), void 0];
      for (E.unshift.apply(E, d), E.push.apply(E, h), x = E.length, g = Promise.resolve(s); b < x; )
        g = g.then(E[b++], E[b++]);
      return g;
    }
    x = d.length;
    let C = s;
    for (b = 0; b < x; ) {
      const E = d[b++], R = d[b++];
      try {
        C = E(C);
      } catch (N) {
        R.call(this, N);
        break;
      }
    }
    try {
      g = o0.call(this, C);
    } catch (E) {
      return Promise.reject(E);
    }
    for (b = 0, x = h.length; b < x; )
      g = g.then(h[b++], h[b++]);
    return g;
  }
  getUri(i) {
    i = ki(this.defaults, i);
    const s = Mb(i.baseURL, i.url, i.allowAbsoluteUrls);
    return Sb(s, i.params, i.paramsSerializer);
  }
};
U.forEach(["delete", "get", "head", "options"], function(i) {
  Li.prototype[i] = function(s, l) {
    return this.request(ki(l || {}, {
      method: i,
      url: s,
      data: (l || {}).data
    }));
  };
});
U.forEach(["post", "put", "patch"], function(i) {
  function s(l) {
    return function(m, f, d) {
      return this.request(ki(d || {}, {
        method: i,
        headers: l ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: m,
        data: f
      }));
    };
  }
  Li.prototype[i] = s(), Li.prototype[i + "Form"] = s(!0);
});
let tD = class jb {
  constructor(i) {
    if (typeof i != "function")
      throw new TypeError("executor must be a function.");
    let s;
    this.promise = new Promise(function(m) {
      s = m;
    });
    const l = this;
    this.promise.then((o) => {
      if (!l._listeners) return;
      let m = l._listeners.length;
      for (; m-- > 0; )
        l._listeners[m](o);
      l._listeners = null;
    }), this.promise.then = (o) => {
      let m;
      const f = new Promise((d) => {
        l.subscribe(d), m = d;
      }).then(o);
      return f.cancel = function() {
        l.unsubscribe(m);
      }, f;
    }, i(function(m, f, d) {
      l.reason || (l.reason = new Ya(m, f, d), s(l.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(i) {
    if (this.reason) {
      i(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(i) : this._listeners = [i];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(i) {
    if (!this._listeners)
      return;
    const s = this._listeners.indexOf(i);
    s !== -1 && this._listeners.splice(s, 1);
  }
  toAbortSignal() {
    const i = new AbortController(), s = (l) => {
      i.abort(l);
    };
    return this.subscribe(s), i.signal.unsubscribe = () => this.unsubscribe(s), i.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let i;
    return {
      token: new jb(function(o) {
        i = o;
      }),
      cancel: i
    };
  }
};
function eD(n) {
  return function(s) {
    return n.apply(null, s);
  };
}
function nD(n) {
  return U.isObject(n) && n.isAxiosError === !0;
}
const jf = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(jf).forEach(([n, i]) => {
  jf[i] = n;
});
function _b(n) {
  const i = new Li(n), s = ub(Li.prototype.request, i);
  return U.extend(s, Li.prototype, i, { allOwnKeys: !0 }), U.extend(s, i, null, { allOwnKeys: !0 }), s.create = function(o) {
    return _b(ki(n, o));
  }, s;
}
const Zt = _b(hr);
Zt.Axios = Li;
Zt.CanceledError = Ya;
Zt.CancelToken = tD;
Zt.isCancel = Ab;
Zt.VERSION = Nb;
Zt.toFormData = co;
Zt.AxiosError = ht;
Zt.Cancel = Zt.CanceledError;
Zt.all = function(i) {
  return Promise.all(i);
};
Zt.spread = eD;
Zt.isAxiosError = nD;
Zt.mergeConfig = ki;
Zt.AxiosHeaders = Re;
Zt.formToJSON = (n) => wb(U.isHTMLForm(n) ? new FormData(n) : n);
Zt.getAdapter = Db.getAdapter;
Zt.HttpStatusCode = jf;
Zt.default = Zt;
const {
  Axios: dD,
  AxiosError: hD,
  CanceledError: pD,
  isCancel: yD,
  CancelToken: gD,
  VERSION: vD,
  all: bD,
  Cancel: xD,
  isAxiosError: SD,
  spread: TD,
  toFormData: wD,
  AxiosHeaders: AD,
  HttpStatusCode: ED,
  formToJSON: MD,
  getAdapter: RD,
  mergeConfig: OD
} = Zt, Ic = {
  NEXT_PUBLIC_CUSTOMER_API: "https://mimin-test.mimin.io/mimin-backend",
  NEXT_PUBLIC_CHATBOT_URL: "https://mimin-api.mimin.io/backend-gen-ai",
  NEXT_PUBLIC_OPENAI_URL: "https://api.openai.com"
};
function ja(n, i) {
  const s = Ic.NEXT_PUBLIC_CUSTOMER_API, l = Ic.NEXT_PUBLIC_CHATBOT_URL, o = Ic.NEXT_PUBLIC_OPENAI_URL, m = i === "openai" ? "v1" : "api", f = i === "customer" ? `${s}/${m}` : i === "chatbot" ? `${l}/${m}` : `${o}/${m}`;
  return n === "axios" ? Zt.create({
    baseURL: f,
    headers: {
      "Content-Type": "application/json"
    }
  }) : async (d, p = {}) => fetch(`${f}${d}`, {
    headers: {
      "Content-Type": "application/json",
      ...p.headers || {}
    },
    ...p
  });
}
const zb = async () => {
  try {
    const s = (await (await fetch("https://api.ipify.org?format=json")).json()).ip, l = navigator.userAgent;
    return { ip: s, userAgent: l, isError: !1 };
  } catch (n) {
    return { isError: !0, errorMessage: n.message };
  }
}, iD = ({
  isVisible: n,
  onToggleCallWindow: i
}) => {
  const [s, l] = G.useState(!1), [o, m] = G.useState("00:00:00"), [f, d] = G.useState(null), [p, h] = G.useState(!1), [g, b] = G.useState(null), [x, C] = G.useState(null), [E, R] = G.useState(
    "idle"
  ), { config: N, signature: V } = Ua(), B = G.useRef(null), H = G.useRef([]), W = G.useRef(null), Z = G.useRef(null), Q = G.useRef(null), I = async () => {
    try {
      const rt = new AudioContext(), dt = rt.createMediaStreamDestination();
      if (Z.current = await navigator.mediaDevices.getUserMedia({ audio: !0 }), rt.createMediaStreamSource(Z.current).connect(dt), Q.current && Q.current.srcObject) {
        const X = Q.current.srcObject;
        rt.createMediaStreamSource(X).connect(dt);
      }
      W.current = dt.stream;
      const Dt = MediaRecorder.isTypeSupported("audio/webm") ? "audio/webm" : "audio/mp4";
      B.current = new MediaRecorder(dt.stream, {
        mimeType: Dt
      }), H.current = [], B.current.ondataavailable = (X) => {
        X.data.size > 0 && H.current.push(X.data);
      }, B.current.onstop = () => {
        const X = new Blob(H.current, { type: Dt }), L = URL.createObjectURL(X);
        b(L);
      }, B.current.start(), h(!0);
      const { isError: Gt, ip: Vt } = await zb();
      if (!Gt) {
        const X = await ja("axios", "customer")({
          url: `/v1/call-session/create-draft/${N?.credentials?.username}`,
          method: "POST",
          data: { phone_number: Vt },
          headers: { "x-api-key": N?.credentials?.apiKey }
        });
        X.data?.session_id._id && d(X.data.session_id._id);
      }
    } catch (rt) {
      console.error("Error starting recording:", rt);
    }
  }, Y = () => {
    B.current && p && (B.current.stop(), h(!1), W.current && W.current.getTracks().forEach((rt) => rt.stop()), Z.current && (Z.current.getTracks().forEach((rt) => rt.stop()), Z.current = null), f && (B.current.onstop = async () => {
      const rt = MediaRecorder.isTypeSupported("audio/webm") ? "audio/webm" : "audio/mp4", dt = new Blob(H.current, { type: rt });
      b(URL.createObjectURL(dt));
      try {
        const wt = await OT(dt);
        await ja("axios", "customer")({
          url: `/v1/call-session/update/${N?.credentials?.username}/${f}`,
          method: "POST",
          data: { audio_base64: wt },
          headers: { "x-api-key": N?.credentials?.apiKey }
        }), d(null);
      } catch (wt) {
        console.error("Failed to upload recording:", wt);
      }
    }));
  };
  G.useEffect(() => {
    let rt = null, dt = null;
    if (n)
      return (async () => {
        dt = new RTCPeerConnection();
        const wt = await ja("axios", "customer")(
          `/v1/call-session/create-realtime-session/${N?.credentials?.username}`,
          {
            method: "POST",
            headers: {
              "x-api-key": N?.credentials?.apiKey
            }
          }
        ), { client_secret: Dt, model: Gt, instructions: Vt } = wt.data;
        dt.ontrack = (z) => {
          Q.current && (C(z.streams[0]), Q.current.srcObject = z.streams[0], Q.current.play());
        };
        const X = dt.createDataChannel("response"), L = () => {
          X.send(
            JSON.stringify({
              type: "session.update",
              session: {
                modalities: ["text", "audio"],
                tools: []
              }
            })
          );
        };
        X.addEventListener("message", (z) => {
          switch (JSON.parse(z.data).type) {
            case "output_audio_buffer.started":
              R("speaking");
              break;
            case "output_audio_buffer.stopped":
              R("idle");
              break;
            case "input_audio_buffer.speech_started":
              R("listening");
              break;
          }
        }), X.addEventListener("open", async () => {
          L(), I();
          const z = {
            type: "response.create",
            response: {
              instructions: Vt
            }
          };
          X.send(JSON.stringify(z));
        }), navigator.mediaDevices.getUserMedia({ audio: !0 }).then((z) => {
          rt = z, z.getTracks().forEach(
            (ft) => dt.addTransceiver(ft, { direction: "sendrecv" })
          ), dt.createOffer().then((ft) => {
            dt.setLocalDescription(ft), ja("fetch", "openai")(`/realtime?model=${Gt}`, {
              method: "POST",
              body: ft.sdp,
              headers: {
                Authorization: `Bearer ${Dt.value}`,
                "Content-Type": "application/sdp"
              },
              // @ts-expect-error: fetch support duplex property
              duplex: "half"
            }).then((mt) => mt.text()).then((mt) => {
              dt.setRemoteDescription({
                sdp: mt,
                type: "answer"
              });
            }).catch((mt) => console.log(mt));
          });
        });
      })(), () => {
        rt && rt.getTracks().forEach((wt) => wt.stop()), dt && (dt.getSenders().forEach((wt) => wt.track?.stop()), dt.close());
      };
  }, [n]), G.useEffect(() => () => {
    g && URL.revokeObjectURL(g);
  }, [g]);
  const ot = () => {
    l(!0), setTimeout(() => {
      p && Y(), Q.current && (m("00:00:00"), Q.current.pause()), C(null), i(), l(!1);
    }, 300);
  };
  return n ? /* @__PURE__ */ A.jsx(
    ve.div,
    {
      className: "mimin-absolute mimin-inset-0 mimin-bg-white mimin-z-10",
      initial: "hidden",
      animate: "visible",
      exit: "exit",
      variants: xO,
      children: /* @__PURE__ */ A.jsx("div", { className: "mimin-h-full mimin-px-6 mimin-py-10 mimin-overflow-y-auto", children: /* @__PURE__ */ A.jsxs("div", { className: "mimin-flex mimin-flex-col mimin-items-center mimin-justify-center", children: [
        /* @__PURE__ */ A.jsx(
          ve.h4,
          {
            className: "mimin-text-[#0096a2] mimin-text-xl mimin-font-bold mimin-mb-6",
            variants: wO,
            initial: "initial",
            animate: "animate",
            children: "IN CALL"
          }
        ),
        /* @__PURE__ */ A.jsxs("div", { className: "mimin-relative", children: [
          /* @__PURE__ */ A.jsx(
            ve.div,
            {
              className: "mimin-flex mimin-items-center mimin-justify-center mimin-p-4 mimin-rounded-full mimin-w-[204px] mimin-h-[204px] mimin-bg-gradient-to-br mimin-from-[#0096a2]/30 mimin-to-[#f26075]/30",
              variants: SO,
              initial: "initial",
              animate: "animate",
              children: /* @__PURE__ */ A.jsx(
                ve.div,
                {
                  className: "mimin-flex mimin-items-center mimin-justify-center mimin-p-4 mimin-rounded-full mimin-w-full mimin-h-full mimin-bg-gradient-to-br mimin-from-[#0096a2]/40 mimin-to-[#f26075]/40",
                  animate: {
                    scale: [1, 1.02, 1],
                    transition: {
                      duration: 1.8,
                      repeat: 1 / 0,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: 0.2
                    }
                  },
                  children: /* @__PURE__ */ A.jsx(
                    ve.div,
                    {
                      className: "mimin-flex mimin-items-center mimin-justify-center mimin-p-4 mimin-rounded-full mimin-w-full mimin-h-full mimin-bg-gradient-to-br mimin-from-[#0096a2]/50 mimin-to-[#f26075]/50",
                      animate: {
                        scale: [1, 1.03, 1],
                        transition: {
                          duration: 1.6,
                          repeat: 1 / 0,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: 0.4
                        }
                      }
                    }
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ A.jsx("div", { className: "mimin-absolute mimin-inset-0 mimin-flex mimin-justify-center mimin-items-center", children: /* @__PURE__ */ A.jsx(
            MO,
            {
              audioStream: x,
              isActive: n
            }
          ) }),
          !!x && /* @__PURE__ */ A.jsx("div", { className: "mimin-absolute mimin-text-white mimin-text-xs mimin-capitalize mimin-tracking-wide mimin-bottom-[25%] mimin-left-[50%] -mimin-translate-x-[50%] mimin-mt-4 mimin-animate-pulse", children: E })
        ] }),
        /* @__PURE__ */ A.jsx(
          ve.p,
          {
            className: "mimin-text-[#0096a2] mimin-text-base mimin-font-bold mimin-mt-5",
            variants: Fc,
            children: "MIMIN AI"
          }
        ),
        /* @__PURE__ */ A.jsx(
          ve.p,
          {
            className: "mimin-text-[#0096a2] mimin-text-sm mimin-font-medium mimin-mt-0",
            variants: Fc,
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.3 },
            children: o
          },
          o
        ),
        /* @__PURE__ */ A.jsx(
          ve.div,
          {
            className: "mimin-h-[1.5px] mimin-w-full mimin-bg-gray-200 mimin-my-6",
            variants: AO,
            initial: "initial",
            animate: "animate"
          }
        ),
        /* @__PURE__ */ A.jsx(
          "audio",
          {
            ref: Q,
            className: "mimin-hidden",
            controls: !0,
            autoPlay: !1,
            onTimeUpdate: (rt) => {
              m(RT(rt.target.currentTime));
            }
          }
        ),
        /* @__PURE__ */ A.jsx(
          ve.div,
          {
            className: "mimin-grid mimin-grid-cols-2 mimin-gap-4 mimin-w-full",
            variants: Fc,
            children: /* @__PURE__ */ A.jsx("div", { className: "mimin-col-span-2 mimin-flex mimin-items-center mimin-justify-center", children: /* @__PURE__ */ A.jsx(
              ve.button,
              {
                type: "button",
                className: "mimin-cursor-pointer mimin-bg-gradient-to-br mimin-from-[#0096a2]/30 mimin-to-[#f26075]/30 mimin-rounded-full mimin-w-[60px] mimin-h-[60px] mimin-p-4 mimin-aspect-square mimin-flex mimin-items-center mimin-justify-center",
                variants: TO,
                initial: "initial",
                whileHover: "hover",
                whileTap: "tap",
                onClick: ot,
                disabled: s,
                animate: s ? {
                  scale: [1, 1.2, 0.8],
                  rotate: [0, 180, 360],
                  transition: { duration: 0.3 }
                } : {},
                children: /* @__PURE__ */ A.jsx(y0, { className: "mimin-w-full mimin-h-full mimin-text-[#f26075]/90 mimin-rotate-90" })
              }
            ) })
          }
        ),
        /* @__PURE__ */ A.jsx(
          ve.div,
          {
            className: "mimin-absolute mimin-inset-0 mimin-pointer-events-none",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.5 },
            children: [...Array(3)].map((rt, dt) => /* @__PURE__ */ A.jsx(
              ve.div,
              {
                className: "mimin-absolute mimin-top-1/2 mimin-left-1/2 mimin-w-4 mimin-h-4 mimin-bg-[#0096a2]/10 mimin-rounded-full",
                style: {
                  transform: "translate(-50%, -50%)"
                },
                animate: {
                  scale: [0, 20, 0],
                  opacity: [0, 0.3, 0]
                },
                transition: {
                  duration: 3,
                  repeat: 1 / 0,
                  delay: dt * 1,
                  ease: "easeOut"
                }
              },
              dt
            ))
          }
        )
      ] }) })
    }
  ) : null;
}, aD = zf()(
  Uf(
    (n) => ({
      user: null,
      isFirstTime: !0,
      setUser: (i) => n({ user: i }),
      setIsFirstTime: (i) => n({ isFirstTime: i })
    }),
    {
      name: "auth-store"
    }
  )
), sD = ({ onClickStartChat: n }) => {
  const { config: i } = Ua();
  return /* @__PURE__ */ A.jsxs(
    "div",
    {
      className: "mimin-h-full mimin-overflow-y-auto mimin-flex mimin-flex-col mimin-justify-between",
      style: { backgroundColor: i?.theme?.button.backgroundColor },
      children: [
        /* @__PURE__ */ A.jsxs("div", { className: "mimin-flex mimin-flex-col mimin-items-center mimin-justify-center mimin-py-11 mimin-px-11", children: [
          /* @__PURE__ */ A.jsx("h2", { className: "mimin-text-sm mimin-font-bold mimin-text-white", children: i?.theme?.chatWindow?.header?.title || "Mimin" }),
          /* @__PURE__ */ A.jsx(
            "img",
            {
              src: i?.theme?.chatWindow?.greating?.avatar || "https://res.cloudinary.com/dctqloe37/image/upload/v1752571979/Icon_AI_Agent_lrdrhr.png",
              alt: " ",
              onError: (s) => {
                const l = s.target;
                l.onerror = null, l.src = "https://res.cloudinary.com/dctqloe37/image/upload/v1752571979/Icon_AI_Agent_lrdrhr.png";
              },
              width: 1e3,
              height: 1e3,
              className: "mimin-w-40 mimin-h-w-40 mimin-rounded-full mimin-mt-10"
            }
          )
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "mimin-flex mimin-flex-col mimin-items-center mimin-justify-center mimin-px-6 mimin-py-10 mimin-rounded-t-3xl mimin-mt-6 mimin-bg-white mimin-h-max", children: [
          /* @__PURE__ */ A.jsx(
            "h3",
            {
              className: "mimin-text-lg mimin-font-bold mimin-text-center mimin-px-8",
              style: { color: i?.theme?.button.backgroundColor },
              children: i?.theme?.chatWindow.greating?.title || "Hai, Aku Mina – AI Agent Kamu! 🤖"
            }
          ),
          /* @__PURE__ */ A.jsx(
            "p",
            {
              className: "mimin-text-sm mimin-text-center mimin-mt-7 mimin-mb-7",
              style: { color: i?.theme?.button.backgroundColor },
              children: i?.theme?.chatWindow.greating?.title || "Butuh bantuan atau info lainnya? Chat dengan Mina sekarang juga, ya!"
            }
          ),
          /* @__PURE__ */ A.jsx(
            "button",
            {
              onClick: n,
              className: "mimin-text-white mimin-px-4 mimin-py-2 mimin-rounded-md mimin-w-full mimin-cursor-pointer mimin-disabled:opacity-50 mimin-disabled:cursor-not-allowed",
              style: { backgroundColor: i?.theme?.button.backgroundColor },
              children: "Start Chat"
            }
          )
        ] })
      ]
    }
  );
}, rD = {
  limit: 10,
  page: 0,
  pages: 0,
  size: 10
}, lD = ({
  config: n,
  signature: i
}) => {
  const [s, l] = G.useState(!1), [o, m] = G.useState(!1), { isFirstTime: f, setIsFirstTime: d } = aD(), [p, h] = G.useState(""), [g, b] = G.useState(""), [x, C] = G.useState(rD), { setConfig: E, setSignature: R } = Ua(), [N, V] = G.useState(!1), [B, H] = G.useState(!1), [W, Z] = G.useState(!1), [Q, I] = G.useState(!1), {
    interactions: Y,
    addInteraction: ot,
    updateAiInteractionByIndex: rt,
    chatType: dt,
    setChatType: wt
  } = f0(), Dt = G.useRef(null), Gt = () => {
    Dt.current && (Dt.current.abort(), Dt.current = null);
  }, Vt = () => {
    N ? V(!1) : (Z(!0), V(!0));
  }, X = () => {
    H(!B);
  }, L = async (mt) => {
    Gt();
    const { isError: w, errorMessage: K, ip: J, userAgent: F } = await zb();
    if (w) {
      console.error(K);
      return;
    }
    l(!0);
    const at = {
      name: F,
      phone: J,
      message_id: crypto.randomUUID(),
      message: mt,
      media_type: "text",
      media: "",
      type: dt || ""
    }, St = new AbortController();
    Dt.current = St;
    try {
      const $ = await ja("fetch", "chatbot")(
        `/chat/new-website/${n?.credentials?.username}`,
        {
          headers: {
            Signature: i,
            Accept: "text/event-stream",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(at),
          method: "POST",
          signal: St.signal
        }
      );
      if (!$.ok) {
        console.error("Failed to send message");
        return;
      }
      const ee = $.body.pipeThrough(new TextDecoderStream()).getReader();
      for (; !St.signal.aborted; ) {
        const { value: Et, done: pe } = await ee.read();
        if (pe) break;
        const nn = '{"event": ';
        Et.split(`data: ${nn}`).filter(Boolean).map(
          (ye) => JSON.parse(`${nn}${ye}`.replace(/\n\n$/gm, ""))
        ).filter((ye) => ye.event === "token" ? !!ye.data : !0).forEach(async (ye) => {
          if (ye.event === "payload") {
            const ci = {
              additional_kwargs: {},
              content: ye.message,
              example: !1
            };
            rt(0, ci), dt || wt(ye.type), h(ye.chat_history_id);
          } else ye.event === "token" && b((ci) => ci + ye.data);
        });
      }
    } catch ($) {
      $?.name === "AbortError" || console.error("Maaf, terjadi kesalahan sistem. Silakan coba lagi!");
    } finally {
      l(!1), Dt.current = null;
    }
  };
  G.useEffect(() => (E(n || null), R(i || ""), () => {
    Gt();
  }), []);
  const z = N ? n?.theme?.button?.backgroundColor : n?.theme?.button?.backgroundColor + "80" || "#ffffff", ft = N ? n?.theme?.button?.textColor : n?.theme?.button?.backgroundColor || "#0096a2";
  return /* @__PURE__ */ A.jsx(HE, { children: /* @__PURE__ */ A.jsxs("div", { className: "mimin-fixed mimin-bottom-6 mimin-right-6 mimin-z-[9999]", children: [
    /* @__PURE__ */ A.jsxs(
      "button",
      {
        id: "mimin-widget-btn-trigger",
        className: "mimin-relative mimin-flex mimin-items-center mimin-gap-2.5 mimin-px-4 mimin-py-2 mimin-rounded-full mimin-border mimin-border-[#0096a2] mimin-shadow-md mimin-transition-all mimin-duration-300 mimin-ease-in-out mimin-cursor-pointer",
        style: {
          backgroundColor: z,
          color: ft
        },
        onClick: Vt,
        children: [
          /* @__PURE__ */ A.jsx(
            "img",
            {
              src: n?.theme?.button?.iconSrc || "https://appstaging.mimin.io/favicon.ico",
              onError: (mt) => {
                const w = mt.target;
                w.onerror = null, w.src = "https://appstaging.mimin.io/favicon.ico";
              },
              alt: " ",
              className: "mimin-w-4 mimin-h-auto"
            }
          ),
          /* @__PURE__ */ A.jsx("span", { className: "mimin-text-sm mimin-font-bold", children: n?.theme?.button?.tooltip || "Ask Mimin" }),
          B && !N && /* @__PURE__ */ A.jsx(
            ve.div,
            {
              initial: { opacity: 0, scale: 0.8, y: -10 },
              animate: { opacity: 1, scale: 1, y: 0 },
              exit: { opacity: 0, scale: 0.8, y: -10 },
              transition: { duration: 0.25, ease: "easeOut" },
              className: "mimin-absolute -mimin-top-3 mimin-right-0 mimin-text-white mimin-px-1.5 mimin-py-0.5 mimin-text-[10px] mimin-rounded-full mimin-bg-red-500 mimin-animate-pulse",
              children: "In Call"
            },
            "call-badge"
          )
        ]
      }
    ),
    W && /* @__PURE__ */ A.jsx(
      ve.div,
      {
        id: "mimin-widget-main",
        className: "mimin-absolute mimin-bottom-full mimin-mb-4 mimin-right-0",
        initial: { opacity: 0, y: 20 },
        animate: N ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 },
        transition: { duration: 0.3, ease: "easeOut" },
        onAnimationComplete: () => {
          N || Z(!1);
        },
        children: /* @__PURE__ */ A.jsxs(
          "div",
          {
            className: "mimin-relative mimin-flex mimin-flex-col mimin-border mimin-border-gray-200 mimin-rounded-xl mimin-shadow-lg mimin-overflow-hidden",
            style: {
              width: n?.theme?.chatWindow?.width || "330px",
              height: n?.theme?.chatWindow?.height || "600px",
              backgroundColor: n?.theme?.chatWindow?.body?.backgroundColor || "#ffffff"
            },
            children: [
              (n?.theme?.chatWindow.needAuthentication || !1) && !Q && !f && /* @__PURE__ */ A.jsx(VS, {}),
              (Q || !n?.theme?.chatWindow.needAuthentication) && !f && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
                /* @__PURE__ */ A.jsx(
                  XS,
                  {
                    onToggleCallWindow: X,
                    onToggleChatWindow: Vt
                  }
                ),
                /* @__PURE__ */ A.jsx(
                  Vw,
                  {
                    messages: Y,
                    currentResponseMsg: g,
                    loading: s,
                    fetching: o
                  }
                ),
                /* @__PURE__ */ A.jsx(
                  kw,
                  {
                    onSendMessage: (mt) => {
                      b(""), mt = mt.trim().replaceAll(/\n\n+/g, `

`);
                      const w = {
                        human: {
                          content: mt,
                          additional_kwargs: {},
                          example: !1
                        },
                        date: /* @__PURE__ */ new Date(),
                        id: crypto.randomUUID()
                      };
                      ot(w), L(mt);
                    },
                    loading: s,
                    fetching: o,
                    onCancelSendMessage: Gt
                  }
                ),
                /* @__PURE__ */ A.jsx(
                  iD,
                  {
                    isVisible: B,
                    onToggleCallWindow: X
                  }
                )
              ] }),
              f && (n?.theme?.chatWindow?.enableGreating || !1) && /* @__PURE__ */ A.jsx(
                sD,
                {
                  onClickStartChat: () => {
                    d(!1);
                  }
                }
              )
            ]
          }
        )
      }
    )
  ] }) });
};
function oD() {
  if (!document.getElementById("mimin-chatbot-widget-css")) {
    const n = document.createElement("link");
    n.rel = "stylesheet", n.href = "https://unpkg.com/mimin-chatbot-widget-react@latest/dist/chat-widget.css", n.id = "mimin-chatbot-widget-css", document.head.appendChild(n);
  }
}
const uD = {
  init: async function(n = {}) {
    try {
      if (console.log("INIT V2 INDEX>TSX"), oD(), !n.credentials)
        throw new Error("credentials are required");
      if (!n.credentials.username)
        throw new Error("username is required");
      if (!n.credentials.apiKey)
        throw new Error("apiKey is required");
      const i = await ja("fetch", "customer")(
        `/v1/chatbotdata/create-signature/${n.credentials.username}`,
        {
          method: "POST",
          headers: {
            "x-api-key": n.credentials.apiKey
          }
        }
      ), { signature: s } = await i.json();
      if (!s)
        throw new Error("Failed to get signature");
      const l = document.getElementById("mimin-widget-container");
      l && l.remove();
      const o = document.createElement("div");
      o.id = "mimin-widget-container", document.body.appendChild(o), dS.createRoot(o).render(
        /* @__PURE__ */ A.jsx(A.Fragment, { children: /* @__PURE__ */ A.jsx(
          lD,
          {
            config: {
              ...n,
              credentials: {
                ...n.credentials
              }
            },
            signature: s
          }
        ) })
      );
    } catch (i) {
      console.error("Failed to initialize Mimin Chatbot React:", i);
    }
  }
};
window.Chatbot = uD;
export {
  uD as Chatbot
};
//# sourceMappingURL=chat-widget.js.map
