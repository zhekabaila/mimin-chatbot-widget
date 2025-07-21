function c0(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ec = { exports: {} }, Bs = {};
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
  if (my) return Bs;
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
  return Bs.Fragment = i, Bs.jsx = s, Bs.jsxs = s, Bs;
}
var dy;
function aS() {
  return dy || (dy = 1, Ec.exports = iS()), Ec.exports;
}
var A = aS(), Mc = { exports: {} }, Ls = {}, Rc = { exports: {} }, Oc = {};
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
    function i(P, B) {
      var z = P.length;
      P.push(B);
      t: for (; 0 < z; ) {
        var ft = z - 1 >>> 1, pt = P[ft];
        if (0 < o(pt, B))
          P[ft] = B, P[z] = pt, z = ft;
        else break t;
      }
    }
    function s(P) {
      return P.length === 0 ? null : P[0];
    }
    function l(P) {
      if (P.length === 0) return null;
      var B = P[0], z = P.pop();
      if (z !== B) {
        P[0] = z;
        t: for (var ft = 0, pt = P.length, w = pt >>> 1; ft < w; ) {
          var X = 2 * (ft + 1) - 1, J = P[X], F = X + 1, at = P[F];
          if (0 > o(J, z))
            F < pt && 0 > o(at, J) ? (P[ft] = at, P[F] = z, ft = F) : (P[ft] = J, P[X] = z, ft = X);
          else if (F < pt && 0 > o(at, z))
            P[ft] = at, P[F] = z, ft = F;
          else break t;
        }
      }
      return B;
    }
    function o(P, B) {
      var z = P.sortIndex - B.sortIndex;
      return z !== 0 ? z : P.id - B.id;
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
    var p = [], h = [], g = 1, b = null, x = 3, D = !1, E = !1, R = !1, N = !1, V = typeof setTimeout == "function" ? setTimeout : null, L = typeof clearTimeout == "function" ? clearTimeout : null, H = typeof setImmediate < "u" ? setImmediate : null;
    function W(P) {
      for (var B = s(h); B !== null; ) {
        if (B.callback === null) l(h);
        else if (B.startTime <= P)
          l(h), B.sortIndex = B.expirationTime, i(p, B);
        else break;
        B = s(h);
      }
    }
    function Z(P) {
      if (R = !1, W(P), !E)
        if (s(p) !== null)
          E = !0, Q || (Q = !0, Tt());
        else {
          var B = s(h);
          B !== null && kt(Z, B.startTime - P);
        }
    }
    var Q = !1, $ = -1, G = 5, ot = -1;
    function rt() {
      return N ? !0 : !(n.unstable_now() - ot < G);
    }
    function mt() {
      if (N = !1, Q) {
        var P = n.unstable_now();
        ot = P;
        var B = !0;
        try {
          t: {
            E = !1, R && (R = !1, L($), $ = -1), D = !0;
            var z = x;
            try {
              e: {
                for (W(P), b = s(p); b !== null && !(b.expirationTime > P && rt()); ) {
                  var ft = b.callback;
                  if (typeof ft == "function") {
                    b.callback = null, x = b.priorityLevel;
                    var pt = ft(
                      b.expirationTime <= P
                    );
                    if (P = n.unstable_now(), typeof pt == "function") {
                      b.callback = pt, W(P), B = !0;
                      break e;
                    }
                    b === s(p) && l(p), W(P);
                  } else l(p);
                  b = s(p);
                }
                if (b !== null) B = !0;
                else {
                  var w = s(h);
                  w !== null && kt(
                    Z,
                    w.startTime - P
                  ), B = !1;
                }
              }
              break t;
            } finally {
              b = null, x = z, D = !1;
            }
            B = void 0;
          }
        } finally {
          B ? Tt() : Q = !1;
        }
      }
    }
    var Tt;
    if (typeof H == "function")
      Tt = function() {
        H(mt);
      };
    else if (typeof MessageChannel < "u") {
      var Vt = new MessageChannel(), Ft = Vt.port2;
      Vt.port1.onmessage = mt, Tt = function() {
        Ft.postMessage(null);
      };
    } else
      Tt = function() {
        V(mt, 0);
      };
    function kt(P, B) {
      $ = V(function() {
        P(n.unstable_now());
      }, B);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(P) {
      P.callback = null;
    }, n.unstable_forceFrameRate = function(P) {
      0 > P || 125 < P ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : G = 0 < P ? Math.floor(1e3 / P) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, n.unstable_next = function(P) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = x;
      }
      var z = x;
      x = B;
      try {
        return P();
      } finally {
        x = z;
      }
    }, n.unstable_requestPaint = function() {
      N = !0;
    }, n.unstable_runWithPriority = function(P, B) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var z = x;
      x = P;
      try {
        return B();
      } finally {
        x = z;
      }
    }, n.unstable_scheduleCallback = function(P, B, z) {
      var ft = n.unstable_now();
      switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? ft + z : ft) : z = ft, P) {
        case 1:
          var pt = -1;
          break;
        case 2:
          pt = 250;
          break;
        case 5:
          pt = 1073741823;
          break;
        case 4:
          pt = 1e4;
          break;
        default:
          pt = 5e3;
      }
      return pt = z + pt, P = {
        id: g++,
        callback: B,
        priorityLevel: P,
        startTime: z,
        expirationTime: pt,
        sortIndex: -1
      }, z > ft ? (P.sortIndex = z, i(h, P), s(p) === null && P === s(h) && (R ? (L($), $ = -1) : R = !0, kt(Z, z - ft))) : (P.sortIndex = pt, i(p, P), E || D || (E = !0, Q || (Q = !0, Tt()))), P;
    }, n.unstable_shouldYield = rt, n.unstable_wrapCallback = function(P) {
      var B = x;
      return function() {
        var z = x;
        x = B;
        try {
          return P.apply(this, arguments);
        } finally {
          x = z;
        }
      };
    };
  }(Oc)), Oc;
}
var py;
function rS() {
  return py || (py = 1, Rc.exports = sS()), Rc.exports;
}
var Dc = { exports: {} }, ht = {}, yy;
function lS() {
  if (yy) return ht;
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
  function D(w) {
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
  function V(w, X, J) {
    this.props = w, this.context = X, this.refs = N, this.updater = J || E;
  }
  V.prototype.isReactComponent = {}, V.prototype.setState = function(w, X) {
    if (typeof w != "object" && typeof w != "function" && w != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, w, X, "setState");
  }, V.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function L() {
  }
  L.prototype = V.prototype;
  function H(w, X, J) {
    this.props = w, this.context = X, this.refs = N, this.updater = J || E;
  }
  var W = H.prototype = new L();
  W.constructor = H, R(W, V.prototype), W.isPureReactComponent = !0;
  var Z = Array.isArray, Q = { H: null, A: null, T: null, S: null, V: null }, $ = Object.prototype.hasOwnProperty;
  function G(w, X, J, F, at, wt) {
    return J = wt.ref, {
      $$typeof: i,
      type: w,
      key: X,
      ref: J !== void 0 ? J : null,
      props: wt
    };
  }
  function ot(w, X) {
    return G(
      w.type,
      X,
      void 0,
      void 0,
      void 0,
      w.props
    );
  }
  function rt(w) {
    return typeof w == "object" && w !== null && w.$$typeof === i;
  }
  function mt(w) {
    var X = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(J) {
      return X[J];
    });
  }
  var Tt = /\/+/g;
  function Vt(w, X) {
    return typeof w == "object" && w !== null && w.key != null ? mt("" + w.key) : X.toString(36);
  }
  function Ft() {
  }
  function kt(w) {
    switch (w.status) {
      case "fulfilled":
        return w.value;
      case "rejected":
        throw w.reason;
      default:
        switch (typeof w.status == "string" ? w.then(Ft, Ft) : (w.status = "pending", w.then(
          function(X) {
            w.status === "pending" && (w.status = "fulfilled", w.value = X);
          },
          function(X) {
            w.status === "pending" && (w.status = "rejected", w.reason = X);
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
  function P(w, X, J, F, at) {
    var wt = typeof w;
    (wt === "undefined" || wt === "boolean") && (w = null);
    var I = !1;
    if (w === null) I = !0;
    else
      switch (wt) {
        case "bigint":
        case "string":
        case "number":
          I = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case i:
            case s:
              I = !0;
              break;
            case b:
              return I = w._init, P(
                I(w._payload),
                X,
                J,
                F,
                at
              );
          }
      }
    if (I)
      return at = at(w), I = F === "" ? "." + Vt(w, 0) : F, Z(at) ? (J = "", I != null && (J = I.replace(Tt, "$&/") + "/"), P(at, X, J, "", function(Me) {
        return Me;
      })) : at != null && (rt(at) && (at = ot(
        at,
        J + (at.key == null || w && w.key === at.key ? "" : ("" + at.key).replace(
          Tt,
          "$&/"
        ) + "/") + I
      )), X.push(at)), 1;
    I = 0;
    var Ct = F === "" ? "." : F + ":";
    if (Z(w))
      for (var At = 0; At < w.length; At++)
        F = w[At], wt = Ct + Vt(F, At), I += P(
          F,
          X,
          J,
          wt,
          at
        );
    else if (At = D(w), typeof At == "function")
      for (w = At.call(w), At = 0; !(F = w.next()).done; )
        F = F.value, wt = Ct + Vt(F, At++), I += P(
          F,
          X,
          J,
          wt,
          at
        );
    else if (wt === "object") {
      if (typeof w.then == "function")
        return P(
          kt(w),
          X,
          J,
          F,
          at
        );
      throw X = String(w), Error(
        "Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return I;
  }
  function B(w, X, J) {
    if (w == null) return w;
    var F = [], at = 0;
    return P(w, F, "", "", function(wt) {
      return X.call(J, wt, at++);
    }), F;
  }
  function z(w) {
    if (w._status === -1) {
      var X = w._result;
      X = X(), X.then(
        function(J) {
          (w._status === 0 || w._status === -1) && (w._status = 1, w._result = J);
        },
        function(J) {
          (w._status === 0 || w._status === -1) && (w._status = 2, w._result = J);
        }
      ), w._status === -1 && (w._status = 0, w._result = X);
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var ft = typeof reportError == "function" ? reportError : function(w) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var X = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof w == "object" && w !== null && typeof w.message == "string" ? String(w.message) : String(w),
        error: w
      });
      if (!window.dispatchEvent(X)) return;
    } else if (typeof n == "object" && typeof n.emit == "function") {
      n.emit("uncaughtException", w);
      return;
    }
    console.error(w);
  };
  function pt() {
  }
  return ht.Children = {
    map: B,
    forEach: function(w, X, J) {
      B(
        w,
        function() {
          X.apply(this, arguments);
        },
        J
      );
    },
    count: function(w) {
      var X = 0;
      return B(w, function() {
        X++;
      }), X;
    },
    toArray: function(w) {
      return B(w, function(X) {
        return X;
      }) || [];
    },
    only: function(w) {
      if (!rt(w))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return w;
    }
  }, ht.Component = V, ht.Fragment = l, ht.Profiler = m, ht.PureComponent = H, ht.StrictMode = o, ht.Suspense = h, ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q, ht.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(w) {
      return Q.H.useMemoCache(w);
    }
  }, ht.cache = function(w) {
    return function() {
      return w.apply(null, arguments);
    };
  }, ht.cloneElement = function(w, X, J) {
    if (w == null)
      throw Error(
        "The argument must be a React element, but you passed " + w + "."
      );
    var F = R({}, w.props), at = w.key, wt = void 0;
    if (X != null)
      for (I in X.ref !== void 0 && (wt = void 0), X.key !== void 0 && (at = "" + X.key), X)
        !$.call(X, I) || I === "key" || I === "__self" || I === "__source" || I === "ref" && X.ref === void 0 || (F[I] = X[I]);
    var I = arguments.length - 2;
    if (I === 1) F.children = J;
    else if (1 < I) {
      for (var Ct = Array(I), At = 0; At < I; At++)
        Ct[At] = arguments[At + 2];
      F.children = Ct;
    }
    return G(w.type, at, void 0, void 0, wt, F);
  }, ht.createContext = function(w) {
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
  }, ht.createElement = function(w, X, J) {
    var F, at = {}, wt = null;
    if (X != null)
      for (F in X.key !== void 0 && (wt = "" + X.key), X)
        $.call(X, F) && F !== "key" && F !== "__self" && F !== "__source" && (at[F] = X[F]);
    var I = arguments.length - 2;
    if (I === 1) at.children = J;
    else if (1 < I) {
      for (var Ct = Array(I), At = 0; At < I; At++)
        Ct[At] = arguments[At + 2];
      at.children = Ct;
    }
    if (w && w.defaultProps)
      for (F in I = w.defaultProps, I)
        at[F] === void 0 && (at[F] = I[F]);
    return G(w, wt, void 0, void 0, null, at);
  }, ht.createRef = function() {
    return { current: null };
  }, ht.forwardRef = function(w) {
    return { $$typeof: p, render: w };
  }, ht.isValidElement = rt, ht.lazy = function(w) {
    return {
      $$typeof: b,
      _payload: { _status: -1, _result: w },
      _init: z
    };
  }, ht.memo = function(w, X) {
    return {
      $$typeof: g,
      type: w,
      compare: X === void 0 ? null : X
    };
  }, ht.startTransition = function(w) {
    var X = Q.T, J = {};
    Q.T = J;
    try {
      var F = w(), at = Q.S;
      at !== null && at(J, F), typeof F == "object" && F !== null && typeof F.then == "function" && F.then(pt, ft);
    } catch (wt) {
      ft(wt);
    } finally {
      Q.T = X;
    }
  }, ht.unstable_useCacheRefresh = function() {
    return Q.H.useCacheRefresh();
  }, ht.use = function(w) {
    return Q.H.use(w);
  }, ht.useActionState = function(w, X, J) {
    return Q.H.useActionState(w, X, J);
  }, ht.useCallback = function(w, X) {
    return Q.H.useCallback(w, X);
  }, ht.useContext = function(w) {
    return Q.H.useContext(w);
  }, ht.useDebugValue = function() {
  }, ht.useDeferredValue = function(w, X) {
    return Q.H.useDeferredValue(w, X);
  }, ht.useEffect = function(w, X, J) {
    var F = Q.H;
    if (typeof J == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return F.useEffect(w, X);
  }, ht.useId = function() {
    return Q.H.useId();
  }, ht.useImperativeHandle = function(w, X, J) {
    return Q.H.useImperativeHandle(w, X, J);
  }, ht.useInsertionEffect = function(w, X) {
    return Q.H.useInsertionEffect(w, X);
  }, ht.useLayoutEffect = function(w, X) {
    return Q.H.useLayoutEffect(w, X);
  }, ht.useMemo = function(w, X) {
    return Q.H.useMemo(w, X);
  }, ht.useOptimistic = function(w, X) {
    return Q.H.useOptimistic(w, X);
  }, ht.useReducer = function(w, X, J) {
    return Q.H.useReducer(w, X, J);
  }, ht.useRef = function(w) {
    return Q.H.useRef(w);
  }, ht.useState = function(w) {
    return Q.H.useState(w);
  }, ht.useSyncExternalStore = function(w, X, J) {
    return Q.H.useSyncExternalStore(
      w,
      X,
      J
    );
  }, ht.useTransition = function() {
    return Q.H.useTransition();
  }, ht.version = "19.1.0", ht;
}
var gy;
function jf() {
  return gy || (gy = 1, Dc.exports = lS()), Dc.exports;
}
var Cc = { exports: {} }, me = {};
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
  var n = jf();
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
      var g = h.as, b = d(g, h.crossOrigin), x = typeof h.integrity == "string" ? h.integrity : void 0, D = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      g === "style" ? l.d.S(
        p,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: b,
          integrity: x,
          fetchPriority: D
        }
      ) : g === "script" && l.d.X(p, {
        crossOrigin: b,
        integrity: x,
        fetchPriority: D,
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
  if (by) return Cc.exports;
  by = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), Cc.exports = oS(), Cc.exports;
}
var xy;
function cS() {
  if (xy) return Ls;
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
  var i = rS(), s = jf(), l = uS();
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
  var b = Object.assign, x = Symbol.for("react.element"), D = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), H = Symbol.for("react.consumer"), W = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), ot = Symbol.for("react.lazy"), rt = Symbol.for("react.activity"), mt = Symbol.for("react.memo_cache_sentinel"), Tt = Symbol.iterator;
  function Vt(t) {
    return t === null || typeof t != "object" ? null : (t = Tt && t[Tt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Ft = Symbol.for("react.client.reference");
  function kt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Ft ? null : t.displayName || t.name || null;
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
      case $:
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
        case G:
          return e = t.displayName || null, e !== null ? e : kt(t.type) || "Memo";
        case ot:
          e = t._payload, t = t._init;
          try {
            return kt(t(e));
          } catch {
          }
      }
    return null;
  }
  var P = Array.isArray, B = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ft = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, pt = [], w = -1;
  function X(t) {
    return { current: t };
  }
  function J(t) {
    0 > w || (t.current = pt[w], pt[w] = null, w--);
  }
  function F(t, e) {
    w++, pt[w] = t.current, t.current = e;
  }
  var at = X(null), wt = X(null), I = X(null), Ct = X(null);
  function At(t, e) {
    switch (F(I, e), F(wt, t), F(at, null), e.nodeType) {
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
  function Me() {
    J(at), J(wt), J(I);
  }
  function oi(t) {
    t.memoizedState !== null && F(Ct, t);
    var e = at.current, a = qp(e, t.type);
    e !== a && (F(wt, t), F(at, a));
  }
  function mn(t) {
    wt.current === t && (J(at), J(wt)), Ct.current === t && (J(Ct), js._currentValue = ft);
  }
  var co = Object.prototype.hasOwnProperty, fo = i.unstable_scheduleCallback, mo = i.unstable_cancelCallback, Ub = i.unstable_shouldYield, Vb = i.unstable_requestPaint, en = i.unstable_now, Bb = i.unstable_getCurrentPriorityLevel, xm = i.unstable_ImmediatePriority, Sm = i.unstable_UserBlockingPriority, mr = i.unstable_NormalPriority, Lb = i.unstable_LowPriority, Tm = i.unstable_IdlePriority, kb = i.log, Hb = i.unstable_setDisableYieldValue, Ha = null, Re = null;
  function Nn(t) {
    if (typeof kb == "function" && Hb(t), Re && typeof Re.setStrictMode == "function")
      try {
        Re.setStrictMode(Ha, t);
      } catch {
      }
  }
  var Oe = Math.clz32 ? Math.clz32 : Yb, qb = Math.log, Pb = Math.LN2;
  function Yb(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (qb(t) / Pb | 0) | 0;
  }
  var dr = 256, hr = 4194304;
  function ui(t) {
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
  function pr(t, e, a) {
    var r = t.pendingLanes;
    if (r === 0) return 0;
    var u = 0, c = t.suspendedLanes, y = t.pingedLanes;
    t = t.warmLanes;
    var v = r & 134217727;
    return v !== 0 ? (r = v & ~c, r !== 0 ? u = ui(r) : (y &= v, y !== 0 ? u = ui(y) : a || (a = v & ~t, a !== 0 && (u = ui(a))))) : (v = r & ~c, v !== 0 ? u = ui(v) : y !== 0 ? u = ui(y) : a || (a = r & ~t, a !== 0 && (u = ui(a)))), u === 0 ? 0 : e !== 0 && e !== u && (e & c) === 0 && (c = u & -u, a = e & -e, c >= a || c === 32 && (a & 4194048) !== 0) ? e : u;
  }
  function qa(t, e) {
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
    var t = dr;
    return dr <<= 1, (dr & 4194048) === 0 && (dr = 256), t;
  }
  function Am() {
    var t = hr;
    return hr <<= 1, (hr & 62914560) === 0 && (hr = 4194304), t;
  }
  function ho(t) {
    for (var e = [], a = 0; 31 > a; a++) e.push(t);
    return e;
  }
  function Pa(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Xb(t, e, a, r, u, c) {
    var y = t.pendingLanes;
    t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
    var v = t.entanglements, S = t.expirationTimes, C = t.hiddenUpdates;
    for (a = y & ~a; 0 < a; ) {
      var k = 31 - Oe(a), Y = 1 << k;
      v[k] = 0, S[k] = -1;
      var j = C[k];
      if (j !== null)
        for (C[k] = null, k = 0; k < j.length; k++) {
          var _ = j[k];
          _ !== null && (_.lane &= -536870913);
        }
      a &= ~Y;
    }
    r !== 0 && Em(t, r, 0), c !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(y & ~e));
  }
  function Em(t, e, a) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var r = 31 - Oe(e);
    t.entangledLanes |= e, t.entanglements[r] = t.entanglements[r] | 1073741824 | a & 4194090;
  }
  function Mm(t, e) {
    var a = t.entangledLanes |= e;
    for (t = t.entanglements; a; ) {
      var r = 31 - Oe(a), u = 1 << r;
      u & e | t[r] & e && (t[r] |= e), a &= ~u;
    }
  }
  function po(t) {
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
  function yo(t) {
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
  var jn = Math.random().toString(36).slice(2), ce = "__reactFiber$" + jn, ve = "__reactProps$" + jn, Li = "__reactContainer$" + jn, go = "__reactEvents$" + jn, Qb = "__reactListeners$" + jn, Zb = "__reactHandles$" + jn, Om = "__reactResources$" + jn, Ya = "__reactMarker$" + jn;
  function vo(t) {
    delete t[ce], delete t[ve], delete t[go], delete t[Qb], delete t[Zb];
  }
  function ki(t) {
    var e = t[ce];
    if (e) return e;
    for (var a = t.parentNode; a; ) {
      if (e = a[Li] || a[ce]) {
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
  function Hi(t) {
    if (t = t[ce] || t[Li]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Ga(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function qi(t) {
    var e = t[Om];
    return e || (e = t[Om] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function ne(t) {
    t[Ya] = !0;
  }
  var Dm = /* @__PURE__ */ new Set(), Cm = {};
  function ci(t, e) {
    Pi(t, e), Pi(t + "Capture", e);
  }
  function Pi(t, e) {
    for (Cm[t] = e, t = 0; t < e.length; t++)
      Dm.add(e[t]);
  }
  var Fb = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Nm = {}, jm = {};
  function Wb(t) {
    return co.call(jm, t) ? !0 : co.call(Nm, t) ? !1 : Fb.test(t) ? jm[t] = !0 : (Nm[t] = !0, !1);
  }
  function yr(t, e, a) {
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
  function gr(t, e, a) {
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
  function dn(t, e, a, r) {
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
  var bo, _m;
  function Yi(t) {
    if (bo === void 0)
      try {
        throw Error();
      } catch (a) {
        var e = a.stack.trim().match(/\n( *(at )?)/);
        bo = e && e[1] || "", _m = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + bo + t + _m;
  }
  var xo = !1;
  function So(t, e) {
    if (!t || xo) return "";
    xo = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var Y = function() {
                throw Error();
              };
              if (Object.defineProperty(Y.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Y, []);
                } catch (_) {
                  var j = _;
                }
                Reflect.construct(t, [], Y);
              } else {
                try {
                  Y.call();
                } catch (_) {
                  j = _;
                }
                t.call(Y.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (_) {
                j = _;
              }
              (Y = t()) && typeof Y.catch == "function" && Y.catch(function() {
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
`), C = v.split(`
`);
        for (u = r = 0; r < S.length && !S[r].includes("DetermineComponentFrameRoot"); )
          r++;
        for (; u < C.length && !C[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (r === S.length || u === C.length)
          for (r = S.length - 1, u = C.length - 1; 1 <= r && 0 <= u && S[r] !== C[u]; )
            u--;
        for (; 1 <= r && 0 <= u; r--, u--)
          if (S[r] !== C[u]) {
            if (r !== 1 || u !== 1)
              do
                if (r--, u--, 0 > u || S[r] !== C[u]) {
                  var k = `
` + S[r].replace(" at new ", " at ");
                  return t.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", t.displayName)), k;
                }
              while (1 <= r && 0 <= u);
            break;
          }
      }
    } finally {
      xo = !1, Error.prepareStackTrace = a;
    }
    return (a = t ? t.displayName || t.name : "") ? Yi(a) : "";
  }
  function Jb(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Yi(t.type);
      case 16:
        return Yi("Lazy");
      case 13:
        return Yi("Suspense");
      case 19:
        return Yi("SuspenseList");
      case 0:
      case 15:
        return So(t.type, !1);
      case 11:
        return So(t.type.render, !1);
      case 1:
        return So(t.type, !0);
      case 31:
        return Yi("Activity");
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
  function Ve(t) {
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
  function vr(t) {
    t._valueTracker || (t._valueTracker = $b(t));
  }
  function Vm(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var a = e.getValue(), r = "";
    return t && (r = Um(t) ? t.checked ? "true" : "false" : t.value), t = r, t !== a ? (e.setValue(t), !0) : !1;
  }
  function br(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Ib = /[\n"\\]/g;
  function Be(t) {
    return t.replace(
      Ib,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function To(t, e, a, r, u, c, y, v) {
    t.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? t.type = y : t.removeAttribute("type"), e != null ? y === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ve(e)) : t.value !== "" + Ve(e) && (t.value = "" + Ve(e)) : y !== "submit" && y !== "reset" || t.removeAttribute("value"), e != null ? wo(t, y, Ve(e)) : a != null ? wo(t, y, Ve(a)) : r != null && t.removeAttribute("value"), u == null && c != null && (t.defaultChecked = !!c), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.name = "" + Ve(v) : t.removeAttribute("name");
  }
  function Bm(t, e, a, r, u, c, y, v) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.type = c), e != null || a != null) {
      if (!(c !== "submit" && c !== "reset" || e != null))
        return;
      a = a != null ? "" + Ve(a) : "", e = e != null ? "" + Ve(e) : a, v || e === t.value || (t.value = e), t.defaultValue = e;
    }
    r = r ?? u, r = typeof r != "function" && typeof r != "symbol" && !!r, t.checked = v ? t.checked : !!r, t.defaultChecked = !!r, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (t.name = y);
  }
  function wo(t, e, a) {
    e === "number" && br(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a);
  }
  function Gi(t, e, a, r) {
    if (t = t.options, e) {
      e = {};
      for (var u = 0; u < a.length; u++)
        e["$" + a[u]] = !0;
      for (a = 0; a < t.length; a++)
        u = e.hasOwnProperty("$" + t[a].value), t[a].selected !== u && (t[a].selected = u), u && r && (t[a].defaultSelected = !0);
    } else {
      for (a = "" + Ve(a), e = null, u = 0; u < t.length; u++) {
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
    if (e != null && (e = "" + Ve(e), e !== t.value && (t.value = e), a == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = a != null ? "" + Ve(a) : "";
  }
  function km(t, e, a, r) {
    if (e == null) {
      if (r != null) {
        if (a != null) throw Error(o(92));
        if (P(r)) {
          if (1 < r.length) throw Error(o(93));
          r = r[0];
        }
        a = r;
      }
      a == null && (a = ""), e = a;
    }
    a = Ve(e), t.defaultValue = a, r = t.textContent, r === a && r !== "" && r !== null && (t.value = r);
  }
  function Xi(t, e) {
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
  function Ao(t) {
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
  function xr(t) {
    return n1.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var Eo = null;
  function Mo(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Ki = null, Qi = null;
  function Pm(t) {
    var e = Hi(t);
    if (e && (t = e.stateNode)) {
      var a = t[ve] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (To(
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
              'input[name="' + Be(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < a.length; e++) {
              var r = a[e];
              if (r !== t && r.form === t.form) {
                var u = r[ve] || null;
                if (!u) throw Error(o(90));
                To(
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
          e = a.value, e != null && Gi(t, !!a.multiple, e, !1);
      }
    }
  }
  var Ro = !1;
  function Ym(t, e, a) {
    if (Ro) return t(e, a);
    Ro = !0;
    try {
      var r = t(e);
      return r;
    } finally {
      if (Ro = !1, (Ki !== null || Qi !== null) && (sl(), Ki && (e = Ki, t = Qi, Qi = Ki = null, Pm(e), t)))
        for (e = 0; e < t.length; e++) Pm(t[e]);
    }
  }
  function Xa(t, e) {
    var a = t.stateNode;
    if (a === null) return null;
    var r = a[ve] || null;
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
  var hn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Oo = !1;
  if (hn)
    try {
      var Ka = {};
      Object.defineProperty(Ka, "passive", {
        get: function() {
          Oo = !0;
        }
      }), window.addEventListener("test", Ka, Ka), window.removeEventListener("test", Ka, Ka);
    } catch {
      Oo = !1;
    }
  var _n = null, Do = null, Sr = null;
  function Gm() {
    if (Sr) return Sr;
    var t, e = Do, a = e.length, r, u = "value" in _n ? _n.value : _n.textContent, c = u.length;
    for (t = 0; t < a && e[t] === u[t]; t++) ;
    var y = a - t;
    for (r = 1; r <= y && e[a - r] === u[c - r]; r++) ;
    return Sr = u.slice(t, 1 < r ? 1 - r : void 0);
  }
  function Tr(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function wr() {
    return !0;
  }
  function Xm() {
    return !1;
  }
  function be(t) {
    function e(a, r, u, c, y) {
      this._reactName = a, this._targetInst = u, this.type = r, this.nativeEvent = c, this.target = y, this.currentTarget = null;
      for (var v in t)
        t.hasOwnProperty(v) && (a = t[v], this[v] = a ? a(c) : c[v]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? wr : Xm, this.isPropagationStopped = Xm, this;
    }
    return b(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = wr);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = wr);
      },
      persist: function() {
      },
      isPersistent: wr
    }), e;
  }
  var fi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ar = be(fi), Qa = b({}, fi, { view: 0, detail: 0 }), i1 = be(Qa), Co, No, Za, Er = b({}, Qa, {
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
    getModifierState: _o,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Za && (Za && t.type === "mousemove" ? (Co = t.screenX - Za.screenX, No = t.screenY - Za.screenY) : No = Co = 0, Za = t), Co);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : No;
    }
  }), Km = be(Er), a1 = b({}, Er, { dataTransfer: 0 }), s1 = be(a1), r1 = b({}, Qa, { relatedTarget: 0 }), jo = be(r1), l1 = b({}, fi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), o1 = be(l1), u1 = b({}, fi, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), c1 = be(u1), f1 = b({}, fi, { data: 0 }), Qm = be(f1), m1 = {
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
  function _o() {
    return p1;
  }
  var y1 = b({}, Qa, {
    key: function(t) {
      if (t.key) {
        var e = m1[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Tr(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? d1[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _o,
    charCode: function(t) {
      return t.type === "keypress" ? Tr(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Tr(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), g1 = be(y1), v1 = b({}, Er, {
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
  }), Zm = be(v1), b1 = b({}, Qa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _o
  }), x1 = be(b1), S1 = b({}, fi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), T1 = be(S1), w1 = b({}, Er, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), A1 = be(w1), E1 = b({}, fi, {
    newState: 0,
    oldState: 0
  }), M1 = be(E1), R1 = [9, 13, 27, 32], zo = hn && "CompositionEvent" in window, Fa = null;
  hn && "documentMode" in document && (Fa = document.documentMode);
  var O1 = hn && "TextEvent" in window && !Fa, Fm = hn && (!zo || Fa && 8 < Fa && 11 >= Fa), Wm = " ", Jm = !1;
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
  var Zi = !1;
  function D1(t, e) {
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
  function C1(t, e) {
    if (Zi)
      return t === "compositionend" || !zo && $m(t, e) ? (t = Gm(), Sr = Do = _n = null, Zi = !1, t) : null;
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
    Ki ? Qi ? Qi.push(r) : Qi = [r] : Ki = r, e = fl(e, "onChange"), 0 < e.length && (a = new Ar(
      "onChange",
      "change",
      null,
      a,
      r
    ), t.push({ event: a, listeners: e }));
  }
  var Wa = null, Ja = null;
  function j1(t) {
    Up(t, 0);
  }
  function Mr(t) {
    var e = Ga(t);
    if (Vm(e)) return t;
  }
  function nd(t, e) {
    if (t === "change") return e;
  }
  var id = !1;
  if (hn) {
    var Uo;
    if (hn) {
      var Vo = "oninput" in document;
      if (!Vo) {
        var ad = document.createElement("div");
        ad.setAttribute("oninput", "return;"), Vo = typeof ad.oninput == "function";
      }
      Uo = Vo;
    } else Uo = !1;
    id = Uo && (!document.documentMode || 9 < document.documentMode);
  }
  function sd() {
    Wa && (Wa.detachEvent("onpropertychange", rd), Ja = Wa = null);
  }
  function rd(t) {
    if (t.propertyName === "value" && Mr(Ja)) {
      var e = [];
      ed(
        e,
        Ja,
        t,
        Mo(t)
      ), Ym(j1, e);
    }
  }
  function _1(t, e, a) {
    t === "focusin" ? (sd(), Wa = e, Ja = a, Wa.attachEvent("onpropertychange", rd)) : t === "focusout" && sd();
  }
  function z1(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Mr(Ja);
  }
  function U1(t, e) {
    if (t === "click") return Mr(e);
  }
  function V1(t, e) {
    if (t === "input" || t === "change")
      return Mr(e);
  }
  function B1(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var De = typeof Object.is == "function" ? Object.is : B1;
  function $a(t, e) {
    if (De(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var a = Object.keys(t), r = Object.keys(e);
    if (a.length !== r.length) return !1;
    for (r = 0; r < a.length; r++) {
      var u = a[r];
      if (!co.call(e, u) || !De(t[u], e[u]))
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
    for (var e = br(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof e.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = e.contentWindow;
      else break;
      e = br(t.document);
    }
    return e;
  }
  function Bo(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var L1 = hn && "documentMode" in document && 11 >= document.documentMode, Fi = null, Lo = null, Ia = null, ko = !1;
  function fd(t, e, a) {
    var r = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    ko || Fi == null || Fi !== br(r) || (r = Fi, "selectionStart" in r && Bo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    }), Ia && $a(Ia, r) || (Ia = r, r = fl(Lo, "onSelect"), 0 < r.length && (e = new Ar(
      "onSelect",
      "select",
      null,
      e,
      a
    ), t.push({ event: e, listeners: r }), e.target = Fi)));
  }
  function mi(t, e) {
    var a = {};
    return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a;
  }
  var Wi = {
    animationend: mi("Animation", "AnimationEnd"),
    animationiteration: mi("Animation", "AnimationIteration"),
    animationstart: mi("Animation", "AnimationStart"),
    transitionrun: mi("Transition", "TransitionRun"),
    transitionstart: mi("Transition", "TransitionStart"),
    transitioncancel: mi("Transition", "TransitionCancel"),
    transitionend: mi("Transition", "TransitionEnd")
  }, Ho = {}, md = {};
  hn && (md = document.createElement("div").style, "AnimationEvent" in window || (delete Wi.animationend.animation, delete Wi.animationiteration.animation, delete Wi.animationstart.animation), "TransitionEvent" in window || delete Wi.transitionend.transition);
  function di(t) {
    if (Ho[t]) return Ho[t];
    if (!Wi[t]) return t;
    var e = Wi[t], a;
    for (a in e)
      if (e.hasOwnProperty(a) && a in md)
        return Ho[t] = e[a];
    return t;
  }
  var dd = di("animationend"), hd = di("animationiteration"), pd = di("animationstart"), k1 = di("transitionrun"), H1 = di("transitionstart"), q1 = di("transitioncancel"), yd = di("transitionend"), gd = /* @__PURE__ */ new Map(), qo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  qo.push("scrollEnd");
  function Ze(t, e) {
    gd.set(t, e), ci(e, [t]);
  }
  var vd = /* @__PURE__ */ new WeakMap();
  function Le(t, e) {
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
  var ke = [], Ji = 0, Po = 0;
  function Rr() {
    for (var t = Ji, e = Po = Ji = 0; e < t; ) {
      var a = ke[e];
      ke[e++] = null;
      var r = ke[e];
      ke[e++] = null;
      var u = ke[e];
      ke[e++] = null;
      var c = ke[e];
      if (ke[e++] = null, r !== null && u !== null) {
        var y = r.pending;
        y === null ? u.next = u : (u.next = y.next, y.next = u), r.pending = u;
      }
      c !== 0 && bd(a, u, c);
    }
  }
  function Or(t, e, a, r) {
    ke[Ji++] = t, ke[Ji++] = e, ke[Ji++] = a, ke[Ji++] = r, Po |= r, t.lanes |= r, t = t.alternate, t !== null && (t.lanes |= r);
  }
  function Yo(t, e, a, r) {
    return Or(t, e, a, r), Dr(t);
  }
  function $i(t, e) {
    return Or(t, null, null, e), Dr(t);
  }
  function bd(t, e, a) {
    t.lanes |= a;
    var r = t.alternate;
    r !== null && (r.lanes |= a);
    for (var u = !1, c = t.return; c !== null; )
      c.childLanes |= a, r = c.alternate, r !== null && (r.childLanes |= a), c.tag === 22 && (t = c.stateNode, t === null || t._visibility & 1 || (u = !0)), t = c, c = c.return;
    return t.tag === 3 ? (c = t.stateNode, u && e !== null && (u = 31 - Oe(a), t = c.hiddenUpdates, r = t[u], r === null ? t[u] = [e] : r.push(e), e.lane = a | 536870912), c) : null;
  }
  function Dr(t) {
    if (50 < As)
      throw As = 0, Fu = null, Error(o(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ii = {};
  function P1(t, e, a, r) {
    this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ce(t, e, a, r) {
    return new P1(t, e, a, r);
  }
  function Go(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function pn(t, e) {
    var a = t.alternate;
    return a === null ? (a = Ce(
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
  function Cr(t, e, a, r, u, c) {
    var y = 0;
    if (r = t, typeof t == "function") Go(t) && (y = 1);
    else if (typeof t == "string")
      y = Gx(
        t,
        a,
        at.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case rt:
          return t = Ce(31, a, e, u), t.elementType = rt, t.lanes = c, t;
        case R:
          return hi(a.children, u, c, e);
        case N:
          y = 8, u |= 24;
          break;
        case V:
          return t = Ce(12, a, e, u | 2), t.elementType = V, t.lanes = c, t;
        case Q:
          return t = Ce(13, a, e, u), t.elementType = Q, t.lanes = c, t;
        case $:
          return t = Ce(19, a, e, u), t.elementType = $, t.lanes = c, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case L:
              case W:
                y = 10;
                break t;
              case H:
                y = 9;
                break t;
              case Z:
                y = 11;
                break t;
              case G:
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
    return e = Ce(y, a, e, u), e.elementType = t, e.type = r, e.lanes = c, e;
  }
  function hi(t, e, a, r) {
    return t = Ce(7, t, r, e), t.lanes = a, t;
  }
  function Xo(t, e, a) {
    return t = Ce(6, t, null, e), t.lanes = a, t;
  }
  function Ko(t, e, a) {
    return e = Ce(
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
  var ta = [], ea = 0, Nr = null, jr = 0, He = [], qe = 0, pi = null, yn = 1, gn = "";
  function yi(t, e) {
    ta[ea++] = jr, ta[ea++] = Nr, Nr = t, jr = e;
  }
  function Sd(t, e, a) {
    He[qe++] = yn, He[qe++] = gn, He[qe++] = pi, pi = t;
    var r = yn;
    t = gn;
    var u = 32 - Oe(r) - 1;
    r &= ~(1 << u), a += 1;
    var c = 32 - Oe(e) + u;
    if (30 < c) {
      var y = u - u % 5;
      c = (r & (1 << y) - 1).toString(32), r >>= y, u -= y, yn = 1 << 32 - Oe(e) + u | a << u | r, gn = c + t;
    } else
      yn = 1 << c | a << u | r, gn = t;
  }
  function Qo(t) {
    t.return !== null && (yi(t, 1), Sd(t, 1, 0));
  }
  function Zo(t) {
    for (; t === Nr; )
      Nr = ta[--ea], ta[ea] = null, jr = ta[--ea], ta[ea] = null;
    for (; t === pi; )
      pi = He[--qe], He[qe] = null, gn = He[--qe], He[qe] = null, yn = He[--qe], He[qe] = null;
  }
  var pe = null, Pt = null, Mt = !1, gi = null, nn = !1, Fo = Error(o(519));
  function vi(t) {
    var e = Error(o(418, ""));
    throw ns(Le(e, t)), Fo;
  }
  function Td(t) {
    var e = t.stateNode, a = t.type, r = t.memoizedProps;
    switch (e[ce] = t, e[ve] = r, a) {
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
        for (a = 0; a < Ms.length; a++)
          xt(Ms[a], e);
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
        ), vr(e);
        break;
      case "select":
        xt("invalid", e);
        break;
      case "textarea":
        xt("invalid", e), km(e, r.value, r.defaultValue, r.children), vr(e);
    }
    a = r.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || r.suppressHydrationWarning === !0 || kp(e.textContent, a) ? (r.popover != null && (xt("beforetoggle", e), xt("toggle", e)), r.onScroll != null && xt("scroll", e), r.onScrollEnd != null && xt("scrollend", e), r.onClick != null && (e.onclick = ml), e = !0) : e = !1, e || vi(t);
  }
  function wd(t) {
    for (pe = t.return; pe; )
      switch (pe.tag) {
        case 5:
        case 13:
          nn = !1;
          return;
        case 27:
        case 3:
          nn = !0;
          return;
        default:
          pe = pe.return;
      }
  }
  function ts(t) {
    if (t !== pe) return !1;
    if (!Mt) return wd(t), Mt = !0, !1;
    var e = t.tag, a;
    if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || fc(t.type, t.memoizedProps)), a = !a), a && Pt && vi(t), wd(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (a = t.data, a === "/$") {
              if (e === 0) {
                Pt = We(t.nextSibling);
                break t;
              }
              e--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || e++;
          t = t.nextSibling;
        }
        Pt = null;
      }
    } else
      e === 27 ? (e = Pt, Fn(t.type) ? (t = pc, pc = null, Pt = t) : Pt = e) : Pt = pe ? We(t.stateNode.nextSibling) : null;
    return !0;
  }
  function es() {
    Pt = pe = null, Mt = !1;
  }
  function Ad() {
    var t = gi;
    return t !== null && (Te === null ? Te = t : Te.push.apply(
      Te,
      t
    ), gi = null), t;
  }
  function ns(t) {
    gi === null ? gi = [t] : gi.push(t);
  }
  var Wo = X(null), bi = null, vn = null;
  function zn(t, e, a) {
    F(Wo, e._currentValue), e._currentValue = a;
  }
  function bn(t) {
    t._currentValue = Wo.current, J(Wo);
  }
  function Jo(t, e, a) {
    for (; t !== null; ) {
      var r = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e), t === a) break;
      t = t.return;
    }
  }
  function $o(t, e, a, r) {
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
              c.lanes |= a, v = c.alternate, v !== null && (v.lanes |= a), Jo(
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
        y.lanes |= a, c = y.alternate, c !== null && (c.lanes |= a), Jo(y, a, t), y = null;
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
  function is(t, e, a, r) {
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
      } else if (u === Ct.current) {
        if (y = u.alternate, y === null) throw Error(o(387));
        y.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(js) : t = [js]);
      }
      u = u.return;
    }
    t !== null && $o(
      e,
      t,
      a,
      r
    ), e.flags |= 262144;
  }
  function _r(t) {
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
  function xi(t) {
    bi = t, vn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function fe(t) {
    return Ed(bi, t);
  }
  function zr(t, e) {
    return bi === null && xi(t), Ed(t, e);
  }
  function Ed(t, e) {
    var a = e._currentValue;
    if (e = { context: e, memoizedValue: a, next: null }, vn === null) {
      if (t === null) throw Error(o(308));
      vn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else vn = vn.next = e;
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
  }, G1 = i.unstable_scheduleCallback, X1 = i.unstable_NormalPriority, It = {
    $$typeof: W,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Io() {
    return {
      controller: new Y1(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function as(t) {
    t.refCount--, t.refCount === 0 && G1(X1, function() {
      t.controller.abort();
    });
  }
  var ss = null, tu = 0, na = 0, ia = null;
  function K1(t, e) {
    if (ss === null) {
      var a = ss = [];
      tu = 0, na = nc(), ia = {
        status: "pending",
        value: void 0,
        then: function(r) {
          a.push(r);
        }
      };
    }
    return tu++, e.then(Md, Md), e;
  }
  function Md() {
    if (--tu === 0 && ss !== null) {
      ia !== null && (ia.status = "fulfilled");
      var t = ss;
      ss = null, na = 0, ia = null;
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
  var Rd = B.S;
  B.S = function(t, e) {
    typeof e == "object" && e !== null && typeof e.then == "function" && K1(t, e), Rd !== null && Rd(t, e);
  };
  var Si = X(null);
  function eu() {
    var t = Si.current;
    return t !== null ? t : Ut.pooledCache;
  }
  function Ur(t, e) {
    e === null ? F(Si, Si.current) : F(Si, e.pool);
  }
  function Od() {
    var t = eu();
    return t === null ? null : { parent: It._currentValue, pool: t };
  }
  var rs = Error(o(460)), Dd = Error(o(474)), Vr = Error(o(542)), nu = { then: function() {
  } };
  function Cd(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Br() {
  }
  function Nd(t, e, a) {
    switch (a = t[a], a === void 0 ? t.push(e) : a !== e && (e.then(Br, Br), e = a), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, _d(t), t;
      default:
        if (typeof e.status == "string") e.then(Br, Br);
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
        throw ls = e, rs;
    }
  }
  var ls = null;
  function jd() {
    if (ls === null) throw Error(o(459));
    var t = ls;
    return ls = null, t;
  }
  function _d(t) {
    if (t === rs || t === Vr)
      throw Error(o(483));
  }
  var Un = !1;
  function iu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function au(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Vn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Bn(t, e, a) {
    var r = t.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (Rt & 2) !== 0) {
      var u = r.pending;
      return u === null ? e.next = e : (e.next = u.next, u.next = e), r.pending = e, e = Dr(t), bd(t, null, a), e;
    }
    return Or(t, r, e, a), Dr(t);
  }
  function os(t, e, a) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194048) !== 0)) {
      var r = e.lanes;
      r &= t.pendingLanes, a |= r, e.lanes = a, Mm(t, a);
    }
  }
  function su(t, e) {
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
  var ru = !1;
  function us() {
    if (ru) {
      var t = ia;
      if (t !== null) throw t;
    }
  }
  function cs(t, e, a, r) {
    ru = !1;
    var u = t.updateQueue;
    Un = !1;
    var c = u.firstBaseUpdate, y = u.lastBaseUpdate, v = u.shared.pending;
    if (v !== null) {
      u.shared.pending = null;
      var S = v, C = S.next;
      S.next = null, y === null ? c = C : y.next = C, y = S;
      var k = t.alternate;
      k !== null && (k = k.updateQueue, v = k.lastBaseUpdate, v !== y && (v === null ? k.firstBaseUpdate = C : v.next = C, k.lastBaseUpdate = S));
    }
    if (c !== null) {
      var Y = u.baseState;
      y = 0, k = C = S = null, v = c;
      do {
        var j = v.lane & -536870913, _ = j !== v.lane;
        if (_ ? (St & j) === j : (r & j) === j) {
          j !== 0 && j === na && (ru = !0), k !== null && (k = k.next = {
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
                  Y = ut.call(_t, Y, j);
                  break t;
                }
                Y = ut;
                break t;
              case 3:
                ut.flags = ut.flags & -65537 | 128;
              case 0:
                if (ut = st.payload, j = typeof ut == "function" ? ut.call(_t, Y, j) : ut, j == null) break t;
                Y = b({}, Y, j);
                break t;
              case 2:
                Un = !0;
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
          }, k === null ? (C = k = _, S = Y) : k = k.next = _, y |= j;
        if (v = v.next, v === null) {
          if (v = u.shared.pending, v === null)
            break;
          _ = v, v = _.next, _.next = null, u.lastBaseUpdate = _, u.shared.pending = null;
        }
      } while (!0);
      k === null && (S = Y), u.baseState = S, u.firstBaseUpdate = C, u.lastBaseUpdate = k, c === null && (u.shared.lanes = 0), Xn |= y, t.lanes = y, t.memoizedState = Y;
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
  var aa = X(null), Lr = X(0);
  function Vd(t, e) {
    t = Mn, F(Lr, t), F(aa, e), Mn = t | e.baseLanes;
  }
  function lu() {
    F(Lr, Mn), F(aa, aa.current);
  }
  function ou() {
    Mn = Lr.current, J(aa), J(Lr);
  }
  var Ln = 0, yt = null, Nt = null, Wt = null, kr = !1, sa = !1, Ti = !1, Hr = 0, fs = 0, ra = null, Z1 = 0;
  function Xt() {
    throw Error(o(321));
  }
  function uu(t, e) {
    if (e === null) return !1;
    for (var a = 0; a < e.length && a < t.length; a++)
      if (!De(t[a], e[a])) return !1;
    return !0;
  }
  function cu(t, e, a, r, u, c) {
    return Ln = c, yt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, B.H = t === null || t.memoizedState === null ? bh : xh, Ti = !1, c = a(r, u), Ti = !1, sa && (c = Ld(
      e,
      a,
      r,
      u
    )), Bd(t), c;
  }
  function Bd(t) {
    B.H = Kr;
    var e = Nt !== null && Nt.next !== null;
    if (Ln = 0, Wt = Nt = yt = null, kr = !1, fs = 0, ra = null, e) throw Error(o(300));
    t === null || ie || (t = t.dependencies, t !== null && _r(t) && (ie = !0));
  }
  function Ld(t, e, a, r) {
    yt = t;
    var u = 0;
    do {
      if (sa && (ra = null), fs = 0, sa = !1, 25 <= u) throw Error(o(301));
      if (u += 1, Wt = Nt = null, t.updateQueue != null) {
        var c = t.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      B.H = ex, c = e(a, r);
    } while (sa);
    return c;
  }
  function F1() {
    var t = B.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? ms(e) : e, t = t.useState()[0], (Nt !== null ? Nt.memoizedState : null) !== t && (yt.flags |= 1024), e;
  }
  function fu() {
    var t = Hr !== 0;
    return Hr = 0, t;
  }
  function mu(t, e, a) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~a;
  }
  function du(t) {
    if (kr) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      kr = !1;
    }
    Ln = 0, Wt = Nt = yt = null, sa = !1, fs = Hr = 0, ra = null;
  }
  function xe() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Wt === null ? yt.memoizedState = Wt = t : Wt = Wt.next = t, Wt;
  }
  function Jt() {
    if (Nt === null) {
      var t = yt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Nt.next;
    var e = Wt === null ? yt.memoizedState : Wt.next;
    if (e !== null)
      Wt = e, Nt = t;
    else {
      if (t === null)
        throw yt.alternate === null ? Error(o(467)) : Error(o(310));
      Nt = t, t = {
        memoizedState: Nt.memoizedState,
        baseState: Nt.baseState,
        baseQueue: Nt.baseQueue,
        queue: Nt.queue,
        next: null
      }, Wt === null ? yt.memoizedState = Wt = t : Wt = Wt.next = t;
    }
    return Wt;
  }
  function hu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ms(t) {
    var e = fs;
    return fs += 1, ra === null && (ra = []), t = Nd(ra, t, e), e = yt, (Wt === null ? e.memoizedState : Wt.next) === null && (e = e.alternate, B.H = e === null || e.memoizedState === null ? bh : xh), t;
  }
  function qr(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return ms(t);
      if (t.$$typeof === W) return fe(t);
    }
    throw Error(o(438, String(t)));
  }
  function pu(t) {
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
    if (e == null && (e = { data: [], index: 0 }), a === null && (a = hu(), yt.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0)
      for (a = e.data[e.index] = Array(t), r = 0; r < t; r++)
        a[r] = mt;
    return e.index++, a;
  }
  function xn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Pr(t) {
    var e = Jt();
    return yu(e, Nt, t);
  }
  function yu(t, e, a) {
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
      var v = y = null, S = null, C = e, k = !1;
      do {
        var Y = C.lane & -536870913;
        if (Y !== C.lane ? (St & Y) === Y : (Ln & Y) === Y) {
          var j = C.revertLane;
          if (j === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }), Y === na && (k = !0);
          else if ((Ln & j) === j) {
            C = C.next, j === na && (k = !0);
            continue;
          } else
            Y = {
              lane: 0,
              revertLane: C.revertLane,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }, S === null ? (v = S = Y, y = c) : S = S.next = Y, yt.lanes |= j, Xn |= j;
          Y = C.action, Ti && a(c, Y), c = C.hasEagerState ? C.eagerState : a(c, Y);
        } else
          j = {
            lane: Y,
            revertLane: C.revertLane,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, S === null ? (v = S = j, y = c) : S = S.next = j, yt.lanes |= Y, Xn |= Y;
        C = C.next;
      } while (C !== null && C !== e);
      if (S === null ? y = c : S.next = v, !De(c, t.memoizedState) && (ie = !0, k && (a = ia, a !== null)))
        throw a;
      t.memoizedState = c, t.baseState = y, t.baseQueue = S, r.lastRenderedState = c;
    }
    return u === null && (r.lanes = 0), [t.memoizedState, r.dispatch];
  }
  function gu(t) {
    var e = Jt(), a = e.queue;
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
    var r = yt, u = Jt(), c = Mt;
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
    if (ds(2048, 8, v, [t]), u.getSnapshot !== e || y || Wt !== null && Wt.memoizedState.tag & 1) {
      if (r.flags |= 2048, la(
        9,
        Yr(),
        qd.bind(
          null,
          r,
          u,
          a,
          e
        ),
        null
      ), Ut === null) throw Error(o(349));
      c || (Ln & 124) !== 0 || Hd(r, e, a);
    }
    return a;
  }
  function Hd(t, e, a) {
    t.flags |= 16384, t = { getSnapshot: e, value: a }, e = yt.updateQueue, e === null ? (e = hu(), yt.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t));
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
    var e = $i(t, 2);
    e !== null && Ue(e, t, 2);
  }
  function vu(t) {
    var e = xe();
    if (typeof t == "function") {
      var a = t;
      if (t = a(), Ti) {
        Nn(!0);
        try {
          a();
        } finally {
          Nn(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xn,
      lastRenderedState: t
    }, e;
  }
  function Xd(t, e, a, r) {
    return t.baseState = a, yu(
      t,
      Nt,
      typeof r == "function" ? r : xn
    );
  }
  function W1(t, e, a, r, u) {
    if (Xr(t)) throw Error(o(485));
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
      B.T !== null ? a(!0) : c.isTransition = !1, r(c), a = e.pending, a === null ? (c.next = e.pending = c, Kd(e, c)) : (c.next = a.next, e.pending = a.next = c);
    }
  }
  function Kd(t, e) {
    var a = e.action, r = e.payload, u = t.state;
    if (e.isTransition) {
      var c = B.T, y = {};
      B.T = y;
      try {
        var v = a(u, r), S = B.S;
        S !== null && S(y, v), Qd(t, e, v);
      } catch (C) {
        bu(t, e, C);
      } finally {
        B.T = c;
      }
    } else
      try {
        c = a(u, r), Qd(t, e, c);
      } catch (C) {
        bu(t, e, C);
      }
  }
  function Qd(t, e, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(r) {
        Zd(t, e, r);
      },
      function(r) {
        return bu(t, e, r);
      }
    ) : Zd(t, e, a);
  }
  function Zd(t, e, a) {
    e.status = "fulfilled", e.value = a, Fd(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, Kd(t, a)));
  }
  function bu(t, e, a) {
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
            if (Pt) {
              e: {
                for (var u = Pt, c = nn; u.nodeType !== 8; ) {
                  if (!c) {
                    u = null;
                    break e;
                  }
                  if (u = We(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break e;
                  }
                }
                c = u.data, u = c === "F!" || c === "F" ? u : null;
              }
              if (u) {
                Pt = We(
                  u.nextSibling
                ), r = u.data === "F!";
                break t;
              }
            }
            vi(r);
          }
          r = !1;
        }
        r && (e = a[0]);
      }
    }
    return a = xe(), a.memoizedState = a.baseState = e, r = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wd,
      lastRenderedState: e
    }, a.queue = r, a = yh.bind(
      null,
      yt,
      r
    ), r.dispatch = a, r = vu(!1), c = Au.bind(
      null,
      yt,
      !1,
      r.queue
    ), r = xe(), u = {
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
    var e = Jt();
    return Id(e, Nt, t);
  }
  function Id(t, e, a) {
    if (e = yu(
      t,
      e,
      Wd
    )[0], t = Pr(xn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var r = ms(e);
      } catch (y) {
        throw y === rs ? Vr : y;
      }
    else r = e;
    e = Jt();
    var u = e.queue, c = u.dispatch;
    return a !== e.memoizedState && (yt.flags |= 2048, la(
      9,
      Yr(),
      J1.bind(null, u, a),
      null
    )), [r, c, t];
  }
  function J1(t, e) {
    t.action = e;
  }
  function th(t) {
    var e = Jt(), a = Nt;
    if (a !== null)
      return Id(e, a, t);
    Jt(), e = e.memoizedState, a = Jt();
    var r = a.queue.dispatch;
    return a.memoizedState = t, [e, r, !1];
  }
  function la(t, e, a, r) {
    return t = { tag: t, create: a, deps: r, inst: e, next: null }, e = yt.updateQueue, e === null && (e = hu(), yt.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (r = a.next, a.next = t, t.next = r, e.lastEffect = t), t;
  }
  function Yr() {
    return { destroy: void 0, resource: void 0 };
  }
  function eh() {
    return Jt().memoizedState;
  }
  function Gr(t, e, a, r) {
    var u = xe();
    r = r === void 0 ? null : r, yt.flags |= t, u.memoizedState = la(
      1 | e,
      Yr(),
      a,
      r
    );
  }
  function ds(t, e, a, r) {
    var u = Jt();
    r = r === void 0 ? null : r;
    var c = u.memoizedState.inst;
    Nt !== null && r !== null && uu(r, Nt.memoizedState.deps) ? u.memoizedState = la(e, c, a, r) : (yt.flags |= t, u.memoizedState = la(
      1 | e,
      c,
      a,
      r
    ));
  }
  function nh(t, e) {
    Gr(8390656, 8, t, e);
  }
  function ih(t, e) {
    ds(2048, 8, t, e);
  }
  function ah(t, e) {
    return ds(4, 2, t, e);
  }
  function sh(t, e) {
    return ds(4, 4, t, e);
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
    a = a != null ? a.concat([t]) : null, ds(4, 4, rh.bind(null, e, t), a);
  }
  function xu() {
  }
  function oh(t, e) {
    var a = Jt();
    e = e === void 0 ? null : e;
    var r = a.memoizedState;
    return e !== null && uu(e, r[1]) ? r[0] : (a.memoizedState = [t, e], t);
  }
  function uh(t, e) {
    var a = Jt();
    e = e === void 0 ? null : e;
    var r = a.memoizedState;
    if (e !== null && uu(e, r[1]))
      return r[0];
    if (r = t(), Ti) {
      Nn(!0);
      try {
        t();
      } finally {
        Nn(!1);
      }
    }
    return a.memoizedState = [r, e], r;
  }
  function Su(t, e, a) {
    return a === void 0 || (Ln & 1073741824) !== 0 ? t.memoizedState = e : (t.memoizedState = a, t = mp(), yt.lanes |= t, Xn |= t, a);
  }
  function ch(t, e, a, r) {
    return De(a, e) ? a : aa.current !== null ? (t = Su(t, a, r), De(t, e) || (ie = !0), t) : (Ln & 42) === 0 ? (ie = !0, t.memoizedState = a) : (t = mp(), yt.lanes |= t, Xn |= t, e);
  }
  function fh(t, e, a, r, u) {
    var c = z.p;
    z.p = c !== 0 && 8 > c ? c : 8;
    var y = B.T, v = {};
    B.T = v, Au(t, !1, e, a);
    try {
      var S = u(), C = B.S;
      if (C !== null && C(v, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var k = Q1(
          S,
          r
        );
        hs(
          t,
          e,
          k,
          ze(t)
        );
      } else
        hs(
          t,
          e,
          r,
          ze(t)
        );
    } catch (Y) {
      hs(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: Y },
        ze()
      );
    } finally {
      z.p = c, B.T = y;
    }
  }
  function $1() {
  }
  function Tu(t, e, a, r) {
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
        lastRenderedReducer: xn,
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
        lastRenderedReducer: xn,
        lastRenderedState: a
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function dh(t) {
    var e = mh(t).next.queue;
    hs(t, e, {}, ze());
  }
  function wu() {
    return fe(js);
  }
  function hh() {
    return Jt().memoizedState;
  }
  function ph() {
    return Jt().memoizedState;
  }
  function I1(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var a = ze();
          t = Vn(a);
          var r = Bn(e, t, a);
          r !== null && (Ue(r, e, a), os(r, e, a)), e = { cache: Io() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function tx(t, e, a) {
    var r = ze();
    a = {
      lane: r,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Xr(t) ? gh(e, a) : (a = Yo(t, e, a, r), a !== null && (Ue(a, t, r), vh(a, e, r)));
  }
  function yh(t, e, a) {
    var r = ze();
    hs(t, e, a, r);
  }
  function hs(t, e, a, r) {
    var u = {
      lane: r,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Xr(t)) gh(e, u);
    else {
      var c = t.alternate;
      if (t.lanes === 0 && (c === null || c.lanes === 0) && (c = e.lastRenderedReducer, c !== null))
        try {
          var y = e.lastRenderedState, v = c(y, a);
          if (u.hasEagerState = !0, u.eagerState = v, De(v, y))
            return Or(t, e, u, 0), Ut === null && Rr(), !1;
        } catch {
        } finally {
        }
      if (a = Yo(t, e, u, r), a !== null)
        return Ue(a, t, r), vh(a, e, r), !0;
    }
    return !1;
  }
  function Au(t, e, a, r) {
    if (r = {
      lane: 2,
      revertLane: nc(),
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Xr(t)) {
      if (e) throw Error(o(479));
    } else
      e = Yo(
        t,
        a,
        r,
        2
      ), e !== null && Ue(e, t, 2);
  }
  function Xr(t) {
    var e = t.alternate;
    return t === yt || e !== null && e === yt;
  }
  function gh(t, e) {
    sa = kr = !0;
    var a = t.pending;
    a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e;
  }
  function vh(t, e, a) {
    if ((a & 4194048) !== 0) {
      var r = e.lanes;
      r &= t.pendingLanes, a |= r, e.lanes = a, Mm(t, a);
    }
  }
  var Kr = {
    readContext: fe,
    use: qr,
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
    use: qr,
    useCallback: function(t, e) {
      return xe().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: fe,
    useEffect: nh,
    useImperativeHandle: function(t, e, a) {
      a = a != null ? a.concat([t]) : null, Gr(
        4194308,
        4,
        rh.bind(null, e, t),
        a
      );
    },
    useLayoutEffect: function(t, e) {
      return Gr(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Gr(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var a = xe();
      e = e === void 0 ? null : e;
      var r = t();
      if (Ti) {
        Nn(!0);
        try {
          t();
        } finally {
          Nn(!1);
        }
      }
      return a.memoizedState = [r, e], r;
    },
    useReducer: function(t, e, a) {
      var r = xe();
      if (a !== void 0) {
        var u = a(e);
        if (Ti) {
          Nn(!0);
          try {
            a(e);
          } finally {
            Nn(!1);
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
      var e = xe();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = vu(t);
      var e = t.queue, a = yh.bind(null, yt, e);
      return e.dispatch = a, [t.memoizedState, a];
    },
    useDebugValue: xu,
    useDeferredValue: function(t, e) {
      var a = xe();
      return Su(a, t, e);
    },
    useTransition: function() {
      var t = vu(!1);
      return t = fh.bind(
        null,
        yt,
        t.queue,
        !0,
        !1
      ), xe().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, a) {
      var r = yt, u = xe();
      if (Mt) {
        if (a === void 0)
          throw Error(o(407));
        a = a();
      } else {
        if (a = e(), Ut === null)
          throw Error(o(349));
        (St & 124) !== 0 || Hd(r, e, a);
      }
      u.memoizedState = a;
      var c = { value: a, getSnapshot: e };
      return u.queue = c, nh(Pd.bind(null, r, c, t), [
        t
      ]), r.flags |= 2048, la(
        9,
        Yr(),
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
      var t = xe(), e = Ut.identifierPrefix;
      if (Mt) {
        var a = gn, r = yn;
        a = (r & ~(1 << 32 - Oe(r) - 1)).toString(32) + a, e = "«" + e + "R" + a, a = Hr++, 0 < a && (e += "H" + a.toString(32)), e += "»";
      } else
        a = Z1++, e = "«" + e + "r" + a.toString(32) + "»";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: wu,
    useFormState: Jd,
    useActionState: Jd,
    useOptimistic: function(t) {
      var e = xe();
      e.memoizedState = e.baseState = t;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = a, e = Au.bind(
        null,
        yt,
        !0,
        a
      ), a.dispatch = e, [t, e];
    },
    useMemoCache: pu,
    useCacheRefresh: function() {
      return xe().memoizedState = I1.bind(
        null,
        yt
      );
    }
  }, xh = {
    readContext: fe,
    use: qr,
    useCallback: oh,
    useContext: fe,
    useEffect: ih,
    useImperativeHandle: lh,
    useInsertionEffect: ah,
    useLayoutEffect: sh,
    useMemo: uh,
    useReducer: Pr,
    useRef: eh,
    useState: function() {
      return Pr(xn);
    },
    useDebugValue: xu,
    useDeferredValue: function(t, e) {
      var a = Jt();
      return ch(
        a,
        Nt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Pr(xn)[0], e = Jt().memoizedState;
      return [
        typeof t == "boolean" ? t : ms(t),
        e
      ];
    },
    useSyncExternalStore: kd,
    useId: hh,
    useHostTransitionStatus: wu,
    useFormState: $d,
    useActionState: $d,
    useOptimistic: function(t, e) {
      var a = Jt();
      return Xd(a, Nt, t, e);
    },
    useMemoCache: pu,
    useCacheRefresh: ph
  }, ex = {
    readContext: fe,
    use: qr,
    useCallback: oh,
    useContext: fe,
    useEffect: ih,
    useImperativeHandle: lh,
    useInsertionEffect: ah,
    useLayoutEffect: sh,
    useMemo: uh,
    useReducer: gu,
    useRef: eh,
    useState: function() {
      return gu(xn);
    },
    useDebugValue: xu,
    useDeferredValue: function(t, e) {
      var a = Jt();
      return Nt === null ? Su(a, t, e) : ch(
        a,
        Nt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = gu(xn)[0], e = Jt().memoizedState;
      return [
        typeof t == "boolean" ? t : ms(t),
        e
      ];
    },
    useSyncExternalStore: kd,
    useId: hh,
    useHostTransitionStatus: wu,
    useFormState: th,
    useActionState: th,
    useOptimistic: function(t, e) {
      var a = Jt();
      return Nt !== null ? Xd(a, Nt, t, e) : (a.baseState = t, [t, a.queue.dispatch]);
    },
    useMemoCache: pu,
    useCacheRefresh: ph
  }, oa = null, ps = 0;
  function Qr(t) {
    var e = ps;
    return ps += 1, oa === null && (oa = []), Nd(oa, t, e);
  }
  function ys(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Zr(t, e) {
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
      return M = pn(M, T), M.index = 0, M.sibling = null, M;
    }
    function c(M, T, O) {
      return M.index = O, t ? (O = M.alternate, O !== null ? (O = O.index, O < T ? (M.flags |= 67108866, T) : O) : (M.flags |= 67108866, T)) : (M.flags |= 1048576, T);
    }
    function y(M) {
      return t && M.alternate === null && (M.flags |= 67108866), M;
    }
    function v(M, T, O, q) {
      return T === null || T.tag !== 6 ? (T = Xo(O, M.mode, q), T.return = M, T) : (T = u(T, O), T.return = M, T);
    }
    function S(M, T, O, q) {
      var tt = O.type;
      return tt === R ? k(
        M,
        T,
        O.props.children,
        q,
        O.key
      ) : T !== null && (T.elementType === tt || typeof tt == "object" && tt !== null && tt.$$typeof === ot && Sh(tt) === T.type) ? (T = u(T, O.props), ys(T, O), T.return = M, T) : (T = Cr(
        O.type,
        O.key,
        O.props,
        null,
        M.mode,
        q
      ), ys(T, O), T.return = M, T);
    }
    function C(M, T, O, q) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== O.containerInfo || T.stateNode.implementation !== O.implementation ? (T = Ko(O, M.mode, q), T.return = M, T) : (T = u(T, O.children || []), T.return = M, T);
    }
    function k(M, T, O, q, tt) {
      return T === null || T.tag !== 7 ? (T = hi(
        O,
        M.mode,
        q,
        tt
      ), T.return = M, T) : (T = u(T, O), T.return = M, T);
    }
    function Y(M, T, O) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return T = Xo(
          "" + T,
          M.mode,
          O
        ), T.return = M, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case D:
            return O = Cr(
              T.type,
              T.key,
              T.props,
              null,
              M.mode,
              O
            ), ys(O, T), O.return = M, O;
          case E:
            return T = Ko(
              T,
              M.mode,
              O
            ), T.return = M, T;
          case ot:
            var q = T._init;
            return T = q(T._payload), Y(M, T, O);
        }
        if (P(T) || Vt(T))
          return T = hi(
            T,
            M.mode,
            O,
            null
          ), T.return = M, T;
        if (typeof T.then == "function")
          return Y(M, Qr(T), O);
        if (T.$$typeof === W)
          return Y(
            M,
            zr(M, T),
            O
          );
        Zr(M, T);
      }
      return null;
    }
    function j(M, T, O, q) {
      var tt = T !== null ? T.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return tt !== null ? null : v(M, T, "" + O, q);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case D:
            return O.key === tt ? S(M, T, O, q) : null;
          case E:
            return O.key === tt ? C(M, T, O, q) : null;
          case ot:
            return tt = O._init, O = tt(O._payload), j(M, T, O, q);
        }
        if (P(O) || Vt(O))
          return tt !== null ? null : k(M, T, O, q, null);
        if (typeof O.then == "function")
          return j(
            M,
            T,
            Qr(O),
            q
          );
        if (O.$$typeof === W)
          return j(
            M,
            T,
            zr(M, O),
            q
          );
        Zr(M, O);
      }
      return null;
    }
    function _(M, T, O, q, tt) {
      if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint")
        return M = M.get(O) || null, v(T, M, "" + q, tt);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case D:
            return M = M.get(
              q.key === null ? O : q.key
            ) || null, S(T, M, q, tt);
          case E:
            return M = M.get(
              q.key === null ? O : q.key
            ) || null, C(T, M, q, tt);
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
        if (P(q) || Vt(q))
          return M = M.get(O) || null, k(T, M, q, tt, null);
        if (typeof q.then == "function")
          return _(
            M,
            T,
            O,
            Qr(q),
            tt
          );
        if (q.$$typeof === W)
          return _(
            M,
            T,
            O,
            zr(T, q),
            tt
          );
        Zr(T, q);
      }
      return null;
    }
    function ut(M, T, O, q) {
      for (var tt = null, vt = null, it = T, lt = T = 0, se = null; it !== null && lt < O.length; lt++) {
        it.index > lt ? (se = it, it = null) : se = it.sibling;
        var Et = j(
          M,
          it,
          O[lt],
          q
        );
        if (Et === null) {
          it === null && (it = se);
          break;
        }
        t && it && Et.alternate === null && e(M, it), T = c(Et, T, lt), vt === null ? tt = Et : vt.sibling = Et, vt = Et, it = se;
      }
      if (lt === O.length)
        return a(M, it), Mt && yi(M, lt), tt;
      if (it === null) {
        for (; lt < O.length; lt++)
          it = Y(M, O[lt], q), it !== null && (T = c(
            it,
            T,
            lt
          ), vt === null ? tt = it : vt.sibling = it, vt = it);
        return Mt && yi(M, lt), tt;
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
      return t && it.forEach(function(ti) {
        return e(M, ti);
      }), Mt && yi(M, lt), tt;
    }
    function st(M, T, O, q) {
      if (O == null) throw Error(o(151));
      for (var tt = null, vt = null, it = T, lt = T = 0, se = null, Et = O.next(); it !== null && !Et.done; lt++, Et = O.next()) {
        it.index > lt ? (se = it, it = null) : se = it.sibling;
        var ti = j(M, it, Et.value, q);
        if (ti === null) {
          it === null && (it = se);
          break;
        }
        t && it && ti.alternate === null && e(M, it), T = c(ti, T, lt), vt === null ? tt = ti : vt.sibling = ti, vt = ti, it = se;
      }
      if (Et.done)
        return a(M, it), Mt && yi(M, lt), tt;
      if (it === null) {
        for (; !Et.done; lt++, Et = O.next())
          Et = Y(M, Et.value, q), Et !== null && (T = c(Et, T, lt), vt === null ? tt = Et : vt.sibling = Et, vt = Et);
        return Mt && yi(M, lt), tt;
      }
      for (it = r(it); !Et.done; lt++, Et = O.next())
        Et = _(it, M, lt, Et.value, q), Et !== null && (t && Et.alternate !== null && it.delete(Et.key === null ? lt : Et.key), T = c(Et, T, lt), vt === null ? tt = Et : vt.sibling = Et, vt = Et);
      return t && it.forEach(function(nS) {
        return e(M, nS);
      }), Mt && yi(M, lt), tt;
    }
    function _t(M, T, O, q) {
      if (typeof O == "object" && O !== null && O.type === R && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case D:
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
                    ), q = u(T, O.props), ys(q, O), q.return = M, M = q;
                    break t;
                  }
                  a(M, T);
                  break;
                } else e(M, T);
                T = T.sibling;
              }
              O.type === R ? (q = hi(
                O.props.children,
                M.mode,
                q,
                O.key
              ), q.return = M, M = q) : (q = Cr(
                O.type,
                O.key,
                O.props,
                null,
                M.mode,
                q
              ), ys(q, O), q.return = M, M = q);
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
              q = Ko(O, M.mode, q), q.return = M, M = q;
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
        if (P(O))
          return ut(
            M,
            T,
            O,
            q
          );
        if (Vt(O)) {
          if (tt = Vt(O), typeof tt != "function") throw Error(o(150));
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
            Qr(O),
            q
          );
        if (O.$$typeof === W)
          return _t(
            M,
            T,
            zr(M, O),
            q
          );
        Zr(M, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O, T !== null && T.tag === 6 ? (a(M, T.sibling), q = u(T, O), q.return = M, M = q) : (a(M, T), q = Xo(O, M.mode, q), q.return = M, M = q), y(M)) : a(M, T);
    }
    return function(M, T, O, q) {
      try {
        ps = 0;
        var tt = _t(
          M,
          T,
          O,
          q
        );
        return oa = null, tt;
      } catch (it) {
        if (it === rs || it === Vr) throw it;
        var vt = Ce(29, it, null, M.mode);
        return vt.lanes = q, vt.return = M, vt;
      } finally {
      }
    };
  }
  var ua = Th(!0), wh = Th(!1), Pe = X(null), an = null;
  function kn(t) {
    var e = t.alternate;
    F(te, te.current & 1), F(Pe, t), an === null && (e === null || aa.current !== null || e.memoizedState !== null) && (an = t);
  }
  function Ah(t) {
    if (t.tag === 22) {
      if (F(te, te.current), F(Pe, t), an === null) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (an = t);
      }
    } else Hn();
  }
  function Hn() {
    F(te, te.current), F(Pe, Pe.current);
  }
  function Sn(t) {
    J(Pe), an === t && (an = null), J(te);
  }
  var te = X(0);
  function Fr(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var a = e.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || hc(a)))
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
  function Eu(t, e, a, r) {
    e = t.memoizedState, a = a(r, e), a = a == null ? e : b({}, e, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a);
  }
  var Mu = {
    enqueueSetState: function(t, e, a) {
      t = t._reactInternals;
      var r = ze(), u = Vn(r);
      u.payload = e, a != null && (u.callback = a), e = Bn(t, u, r), e !== null && (Ue(e, t, r), os(e, t, r));
    },
    enqueueReplaceState: function(t, e, a) {
      t = t._reactInternals;
      var r = ze(), u = Vn(r);
      u.tag = 1, u.payload = e, a != null && (u.callback = a), e = Bn(t, u, r), e !== null && (Ue(e, t, r), os(e, t, r));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var a = ze(), r = Vn(a);
      r.tag = 2, e != null && (r.callback = e), e = Bn(t, r, a), e !== null && (Ue(e, t, a), os(e, t, a));
    }
  };
  function Eh(t, e, a, r, u, c, y) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, c, y) : e.prototype && e.prototype.isPureReactComponent ? !$a(a, r) || !$a(u, c) : !0;
  }
  function Mh(t, e, a, r) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, r), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, r), e.state !== t && Mu.enqueueReplaceState(e, e.state, null);
  }
  function wi(t, e) {
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
  var Wr = typeof reportError == "function" ? reportError : function(t) {
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
    Wr(t);
  }
  function Oh(t) {
    console.error(t);
  }
  function Dh(t) {
    Wr(t);
  }
  function Jr(t, e) {
    try {
      var a = t.onUncaughtError;
      a(e.value, { componentStack: e.stack });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function Ch(t, e, a) {
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
  function Ru(t, e, a) {
    return a = Vn(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Jr(t, e);
    }, a;
  }
  function Nh(t) {
    return t = Vn(t), t.tag = 3, t;
  }
  function jh(t, e, a, r) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      t.payload = function() {
        return u(c);
      }, t.callback = function() {
        Ch(e, a, r);
      };
    }
    var y = a.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (t.callback = function() {
      Ch(e, a, r), typeof u != "function" && (Kn === null ? Kn = /* @__PURE__ */ new Set([this]) : Kn.add(this));
      var v = r.stack;
      this.componentDidCatch(r.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function nx(t, e, a, r, u) {
    if (a.flags |= 32768, r !== null && typeof r == "object" && typeof r.then == "function") {
      if (e = a.alternate, e !== null && is(
        e,
        a,
        u,
        !0
      ), a = Pe.current, a !== null) {
        switch (a.tag) {
          case 13:
            return an === null ? Ju() : a.alternate === null && Yt === 0 && (Yt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = u, r === nu ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = /* @__PURE__ */ new Set([r]) : e.add(r), Iu(t, r, u)), !1;
          case 22:
            return a.flags |= 65536, r === nu ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([r])
            }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = /* @__PURE__ */ new Set([r]) : a.add(r)), Iu(t, r, u)), !1;
        }
        throw Error(o(435, a.tag));
      }
      return Iu(t, r, u), Ju(), !1;
    }
    if (Mt)
      return e = Pe.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = u, r !== Fo && (t = Error(o(422), { cause: r }), ns(Le(t, a)))) : (r !== Fo && (e = Error(o(423), {
        cause: r
      }), ns(
        Le(e, a)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, r = Le(r, a), u = Ru(
        t.stateNode,
        r,
        u
      ), su(t, u), Yt !== 4 && (Yt = 2)), !1;
    var c = Error(o(520), { cause: r });
    if (c = Le(c, a), ws === null ? ws = [c] : ws.push(c), Yt !== 4 && (Yt = 2), e === null) return !0;
    r = Le(r, a), a = e;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, t = u & -u, a.lanes |= t, t = Ru(a.stateNode, r, t), su(a, t), !1;
        case 1:
          if (e = a.type, c = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (Kn === null || !Kn.has(c))))
            return a.flags |= 65536, u &= -u, a.lanes |= u, u = Nh(u), jh(
              u,
              t,
              a,
              r
            ), su(a, u), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var _h = Error(o(461)), ie = !1;
  function re(t, e, a, r) {
    e.child = t === null ? wh(e, null, a, r) : ua(
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
    return xi(e), r = cu(
      t,
      e,
      a,
      y,
      c,
      u
    ), v = fu(), t !== null && !ie ? (mu(t, e, u), Tn(t, e, u)) : (Mt && v && Qo(e), e.flags |= 1, re(t, e, r, u), e.child);
  }
  function Uh(t, e, a, r, u) {
    if (t === null) {
      var c = a.type;
      return typeof c == "function" && !Go(c) && c.defaultProps === void 0 && a.compare === null ? (e.tag = 15, e.type = c, Vh(
        t,
        e,
        c,
        r,
        u
      )) : (t = Cr(
        a.type,
        null,
        r,
        e,
        e.mode,
        u
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (c = t.child, !Uu(t, u)) {
      var y = c.memoizedProps;
      if (a = a.compare, a = a !== null ? a : $a, a(y, r) && t.ref === e.ref)
        return Tn(t, e, u);
    }
    return e.flags |= 1, t = pn(c, r), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Vh(t, e, a, r, u) {
    if (t !== null) {
      var c = t.memoizedProps;
      if ($a(c, r) && t.ref === e.ref)
        if (ie = !1, e.pendingProps = r = c, Uu(t, u))
          (t.flags & 131072) !== 0 && (ie = !0);
        else
          return e.lanes = t.lanes, Tn(t, e, u);
    }
    return Ou(
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
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Ur(
          e,
          c !== null ? c.cachePool : null
        ), c !== null ? Vd(e, c) : lu(), Ah(e);
      else
        return e.lanes = e.childLanes = 536870912, Lh(
          t,
          e,
          c !== null ? c.baseLanes | a : a,
          a
        );
    } else
      c !== null ? (Ur(e, c.cachePool), Vd(e, c), Hn(), e.memoizedState = null) : (t !== null && Ur(e, null), lu(), Hn());
    return re(t, e, u, a), e.child;
  }
  function Lh(t, e, a, r) {
    var u = eu();
    return u = u === null ? null : { parent: It._currentValue, pool: u }, e.memoizedState = {
      baseLanes: a,
      cachePool: u
    }, t !== null && Ur(e, null), lu(), Ah(e), t !== null && is(t, e, r, !0), null;
  }
  function $r(t, e) {
    var a = e.ref;
    if (a === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(o(284));
      (t === null || t.ref !== a) && (e.flags |= 4194816);
    }
  }
  function Ou(t, e, a, r, u) {
    return xi(e), a = cu(
      t,
      e,
      a,
      r,
      void 0,
      u
    ), r = fu(), t !== null && !ie ? (mu(t, e, u), Tn(t, e, u)) : (Mt && r && Qo(e), e.flags |= 1, re(t, e, a, u), e.child);
  }
  function kh(t, e, a, r, u, c) {
    return xi(e), e.updateQueue = null, a = Ld(
      e,
      r,
      a,
      u
    ), Bd(t), r = fu(), t !== null && !ie ? (mu(t, e, c), Tn(t, e, c)) : (Mt && r && Qo(e), e.flags |= 1, re(t, e, a, c), e.child);
  }
  function Hh(t, e, a, r, u) {
    if (xi(e), e.stateNode === null) {
      var c = Ii, y = a.contextType;
      typeof y == "object" && y !== null && (c = fe(y)), c = new a(r, c), e.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Mu, e.stateNode = c, c._reactInternals = e, c = e.stateNode, c.props = r, c.state = e.memoizedState, c.refs = {}, iu(e), y = a.contextType, c.context = typeof y == "object" && y !== null ? fe(y) : Ii, c.state = e.memoizedState, y = a.getDerivedStateFromProps, typeof y == "function" && (Eu(
        e,
        a,
        y,
        r
      ), c.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (y = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), y !== c.state && Mu.enqueueReplaceState(c, c.state, null), cs(e, r, c, u), us(), c.state = e.memoizedState), typeof c.componentDidMount == "function" && (e.flags |= 4194308), r = !0;
    } else if (t === null) {
      c = e.stateNode;
      var v = e.memoizedProps, S = wi(a, v);
      c.props = S;
      var C = c.context, k = a.contextType;
      y = Ii, typeof k == "object" && k !== null && (y = fe(k));
      var Y = a.getDerivedStateFromProps;
      k = typeof Y == "function" || typeof c.getSnapshotBeforeUpdate == "function", v = e.pendingProps !== v, k || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (v || C !== y) && Mh(
        e,
        c,
        r,
        y
      ), Un = !1;
      var j = e.memoizedState;
      c.state = j, cs(e, r, c, u), us(), C = e.memoizedState, v || j !== C || Un ? (typeof Y == "function" && (Eu(
        e,
        a,
        Y,
        r
      ), C = e.memoizedState), (S = Un || Eh(
        e,
        a,
        S,
        r,
        j,
        C,
        y
      )) ? (k || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = r, e.memoizedState = C), c.props = r, c.state = C, c.context = y, r = S) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308), r = !1);
    } else {
      c = e.stateNode, au(t, e), y = e.memoizedProps, k = wi(a, y), c.props = k, Y = e.pendingProps, j = c.context, C = a.contextType, S = Ii, typeof C == "object" && C !== null && (S = fe(C)), v = a.getDerivedStateFromProps, (C = typeof v == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (y !== Y || j !== S) && Mh(
        e,
        c,
        r,
        S
      ), Un = !1, j = e.memoizedState, c.state = j, cs(e, r, c, u), us();
      var _ = e.memoizedState;
      y !== Y || j !== _ || Un || t !== null && t.dependencies !== null && _r(t.dependencies) ? (typeof v == "function" && (Eu(
        e,
        a,
        v,
        r
      ), _ = e.memoizedState), (k = Un || Eh(
        e,
        a,
        k,
        r,
        j,
        _,
        S
      ) || t !== null && t.dependencies !== null && _r(t.dependencies)) ? (C || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(r, _, S), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        r,
        _,
        S
      )), typeof c.componentDidUpdate == "function" && (e.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || y === t.memoizedProps && j === t.memoizedState || (e.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || y === t.memoizedProps && j === t.memoizedState || (e.flags |= 1024), e.memoizedProps = r, e.memoizedState = _), c.props = r, c.state = _, c.context = S, r = k) : (typeof c.componentDidUpdate != "function" || y === t.memoizedProps && j === t.memoizedState || (e.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || y === t.memoizedProps && j === t.memoizedState || (e.flags |= 1024), r = !1);
    }
    return c = r, $r(t, e), r = (e.flags & 128) !== 0, c || r ? (c = e.stateNode, a = r && typeof a.getDerivedStateFromError != "function" ? null : c.render(), e.flags |= 1, t !== null && r ? (e.child = ua(
      e,
      t.child,
      null,
      u
    ), e.child = ua(
      e,
      null,
      a,
      u
    )) : re(t, e, a, u), e.memoizedState = c.state, t = e.child) : t = Tn(
      t,
      e,
      u
    ), t;
  }
  function qh(t, e, a, r) {
    return es(), e.flags |= 256, re(t, e, a, r), e.child;
  }
  var Du = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Cu(t) {
    return { baseLanes: t, cachePool: Od() };
  }
  function Nu(t, e, a) {
    return t = t !== null ? t.childLanes & ~a : 0, e && (t |= Ye), t;
  }
  function Ph(t, e, a) {
    var r = e.pendingProps, u = !1, c = (e.flags & 128) !== 0, y;
    if ((y = c) || (y = t !== null && t.memoizedState === null ? !1 : (te.current & 2) !== 0), y && (u = !0, e.flags &= -129), y = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Mt) {
        if (u ? kn(e) : Hn(), Mt) {
          var v = Pt, S;
          if (S = v) {
            t: {
              for (S = v, v = nn; S.nodeType !== 8; ) {
                if (!v) {
                  v = null;
                  break t;
                }
                if (S = We(
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
              treeContext: pi !== null ? { id: yn, overflow: gn } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, S = Ce(
              18,
              null,
              null,
              0
            ), S.stateNode = v, S.return = e, e.child = S, pe = e, Pt = null, S = !0) : S = !1;
          }
          S || vi(e);
        }
        if (v = e.memoizedState, v !== null && (v = v.dehydrated, v !== null))
          return hc(v) ? e.lanes = 32 : e.lanes = 536870912, null;
        Sn(e);
      }
      return v = r.children, r = r.fallback, u ? (Hn(), u = e.mode, v = Ir(
        { mode: "hidden", children: v },
        u
      ), r = hi(
        r,
        u,
        a,
        null
      ), v.return = e, r.return = e, v.sibling = r, e.child = v, u = e.child, u.memoizedState = Cu(a), u.childLanes = Nu(
        t,
        y,
        a
      ), e.memoizedState = Du, r) : (kn(e), ju(e, v));
    }
    if (S = t.memoizedState, S !== null && (v = S.dehydrated, v !== null)) {
      if (c)
        e.flags & 256 ? (kn(e), e.flags &= -257, e = _u(
          t,
          e,
          a
        )) : e.memoizedState !== null ? (Hn(), e.child = t.child, e.flags |= 128, e = null) : (Hn(), u = r.fallback, v = e.mode, r = Ir(
          { mode: "visible", children: r.children },
          v
        ), u = hi(
          u,
          v,
          a,
          null
        ), u.flags |= 2, r.return = e, u.return = e, r.sibling = u, e.child = r, ua(
          e,
          t.child,
          null,
          a
        ), r = e.child, r.memoizedState = Cu(a), r.childLanes = Nu(
          t,
          y,
          a
        ), e.memoizedState = Du, e = u);
      else if (kn(e), hc(v)) {
        if (y = v.nextSibling && v.nextSibling.dataset, y) var C = y.dgst;
        y = C, r = Error(o(419)), r.stack = "", r.digest = y, ns({ value: r, source: null, stack: null }), e = _u(
          t,
          e,
          a
        );
      } else if (ie || is(t, e, a, !1), y = (a & t.childLanes) !== 0, ie || y) {
        if (y = Ut, y !== null && (r = a & -a, r = (r & 42) !== 0 ? 1 : po(r), r = (r & (y.suspendedLanes | a)) !== 0 ? 0 : r, r !== 0 && r !== S.retryLane))
          throw S.retryLane = r, $i(t, r), Ue(y, t, r), _h;
        v.data === "$?" || Ju(), e = _u(
          t,
          e,
          a
        );
      } else
        v.data === "$?" ? (e.flags |= 192, e.child = t.child, e = null) : (t = S.treeContext, Pt = We(
          v.nextSibling
        ), pe = e, Mt = !0, gi = null, nn = !1, t !== null && (He[qe++] = yn, He[qe++] = gn, He[qe++] = pi, yn = t.id, gn = t.overflow, pi = e), e = ju(
          e,
          r.children
        ), e.flags |= 4096);
      return e;
    }
    return u ? (Hn(), u = r.fallback, v = e.mode, S = t.child, C = S.sibling, r = pn(S, {
      mode: "hidden",
      children: r.children
    }), r.subtreeFlags = S.subtreeFlags & 65011712, C !== null ? u = pn(C, u) : (u = hi(
      u,
      v,
      a,
      null
    ), u.flags |= 2), u.return = e, r.return = e, r.sibling = u, e.child = r, r = u, u = e.child, v = t.child.memoizedState, v === null ? v = Cu(a) : (S = v.cachePool, S !== null ? (C = It._currentValue, S = S.parent !== C ? { parent: C, pool: C } : S) : S = Od(), v = {
      baseLanes: v.baseLanes | a,
      cachePool: S
    }), u.memoizedState = v, u.childLanes = Nu(
      t,
      y,
      a
    ), e.memoizedState = Du, r) : (kn(e), a = t.child, t = a.sibling, a = pn(a, {
      mode: "visible",
      children: r.children
    }), a.return = e, a.sibling = null, t !== null && (y = e.deletions, y === null ? (e.deletions = [t], e.flags |= 16) : y.push(t)), e.child = a, e.memoizedState = null, a);
  }
  function ju(t, e) {
    return e = Ir(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Ir(t, e) {
    return t = Ce(22, t, null, e), t.lanes = 0, t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, t;
  }
  function _u(t, e, a) {
    return ua(e, t.child, null, a), t = ju(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function Yh(t, e, a) {
    t.lanes |= e;
    var r = t.alternate;
    r !== null && (r.lanes |= e), Jo(t.return, e, a);
  }
  function zu(t, e, a, r, u) {
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
    if (re(t, e, r.children, a), r = te.current, (r & 2) !== 0)
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
    switch (F(te, r), u) {
      case "forwards":
        for (a = e.child, u = null; a !== null; )
          t = a.alternate, t !== null && Fr(t) === null && (u = a), a = a.sibling;
        a = u, a === null ? (u = e.child, e.child = null) : (u = a.sibling, a.sibling = null), zu(
          e,
          !1,
          u,
          a,
          c
        );
        break;
      case "backwards":
        for (a = null, u = e.child, e.child = null; u !== null; ) {
          if (t = u.alternate, t !== null && Fr(t) === null) {
            e.child = u;
            break;
          }
          t = u.sibling, u.sibling = a, a = u, u = t;
        }
        zu(
          e,
          !0,
          a,
          null,
          c
        );
        break;
      case "together":
        zu(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Tn(t, e, a) {
    if (t !== null && (e.dependencies = t.dependencies), Xn |= e.lanes, (a & e.childLanes) === 0)
      if (t !== null) {
        if (is(
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
      for (t = e.child, a = pn(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null; )
        t = t.sibling, a = a.sibling = pn(t, t.pendingProps), a.return = e;
      a.sibling = null;
    }
    return e.child;
  }
  function Uu(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && _r(t)));
  }
  function ix(t, e, a) {
    switch (e.tag) {
      case 3:
        At(e, e.stateNode.containerInfo), zn(e, It, t.memoizedState.cache), es();
        break;
      case 27:
      case 5:
        oi(e);
        break;
      case 4:
        At(e, e.stateNode.containerInfo);
        break;
      case 10:
        zn(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 13:
        var r = e.memoizedState;
        if (r !== null)
          return r.dehydrated !== null ? (kn(e), e.flags |= 128, null) : (a & e.child.childLanes) !== 0 ? Ph(t, e, a) : (kn(e), t = Tn(
            t,
            e,
            a
          ), t !== null ? t.sibling : null);
        kn(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (r = (a & e.childLanes) !== 0, r || (is(
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
        if (u = e.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), F(te, te.current), r) break;
        return null;
      case 22:
      case 23:
        return e.lanes = 0, Bh(t, e, a);
      case 24:
        zn(e, It, t.memoizedState.cache);
    }
    return Tn(t, e, a);
  }
  function Xh(t, e, a) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        ie = !0;
      else {
        if (!Uu(t, a) && (e.flags & 128) === 0)
          return ie = !1, ix(
            t,
            e,
            a
          );
        ie = (t.flags & 131072) !== 0;
      }
    else
      ie = !1, Mt && (e.flags & 1048576) !== 0 && Sd(e, jr, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          t = e.pendingProps;
          var r = e.elementType, u = r._init;
          if (r = u(r._payload), e.type = r, typeof r == "function")
            Go(r) ? (t = wi(r, t), e.tag = 1, e = Hh(
              null,
              e,
              r,
              t,
              a
            )) : (e.tag = 0, e = Ou(
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
              } else if (u === G) {
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
            throw e = kt(r) || r, Error(o(306, e, ""));
          }
        }
        return e;
      case 0:
        return Ou(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 1:
        return r = e.type, u = wi(
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
          if (At(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(o(387));
          r = e.pendingProps;
          var c = e.memoizedState;
          u = c.element, au(t, e), cs(e, r, null, a);
          var y = e.memoizedState;
          if (r = y.cache, zn(e, It, r), r !== c.cache && $o(
            e,
            [It],
            a,
            !0
          ), us(), r = y.element, c.isDehydrated)
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
              u = Le(
                Error(o(424)),
                e
              ), ns(u), e = qh(
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
              for (Pt = We(t.firstChild), pe = e, Mt = !0, gi = null, nn = !0, a = wh(
                e,
                null,
                r,
                a
              ), e.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (es(), r === u) {
              e = Tn(
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
        return $r(t, e), t === null ? (a = Fp(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = a : Mt || (a = e.type, t = e.pendingProps, r = dl(
          I.current
        ).createElement(a), r[ce] = e, r[ve] = t, oe(r, a, t), ne(r), e.stateNode = r) : e.memoizedState = Fp(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return oi(e), t === null && Mt && (r = e.stateNode = Kp(
          e.type,
          e.pendingProps,
          I.current
        ), pe = e, nn = !0, u = Pt, Fn(e.type) ? (pc = u, Pt = We(
          r.firstChild
        )) : Pt = u), re(
          t,
          e,
          e.pendingProps.children,
          a
        ), $r(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Mt && ((u = r = Pt) && (r = Nx(
          r,
          e.type,
          e.pendingProps,
          nn
        ), r !== null ? (e.stateNode = r, pe = e, Pt = We(
          r.firstChild
        ), nn = !1, u = !0) : u = !1), u || vi(e)), oi(e), u = e.type, c = e.pendingProps, y = t !== null ? t.memoizedProps : null, r = c.children, fc(u, c) ? r = null : y !== null && fc(u, y) && (e.flags |= 32), e.memoizedState !== null && (u = cu(
          t,
          e,
          F1,
          null,
          null,
          a
        ), js._currentValue = u), $r(t, e), re(t, e, r, a), e.child;
      case 6:
        return t === null && Mt && ((t = a = Pt) && (a = jx(
          a,
          e.pendingProps,
          nn
        ), a !== null ? (e.stateNode = a, pe = e, Pt = null, t = !0) : t = !1), t || vi(e)), null;
      case 13:
        return Ph(t, e, a);
      case 4:
        return At(
          e,
          e.stateNode.containerInfo
        ), r = e.pendingProps, t === null ? e.child = ua(
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
        return r = e.pendingProps, zn(e, e.type, r.value), re(
          t,
          e,
          r.children,
          a
        ), e.child;
      case 9:
        return u = e.type._context, r = e.pendingProps.children, xi(e), u = fe(u), r = r(u), e.flags |= 1, re(t, e, r, a), e.child;
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
        }, t === null ? (a = Ir(
          r,
          a
        ), a.ref = e.ref, e.child = a, a.return = e, e = a) : (a = pn(t.child, r), a.ref = e.ref, e.child = a, a.return = e, e = a), e;
      case 22:
        return Bh(t, e, a);
      case 24:
        return xi(e), r = fe(It), t === null ? (u = eu(), u === null && (u = Ut, c = Io(), u.pooledCache = c, c.refCount++, c !== null && (u.pooledCacheLanes |= a), u = c), e.memoizedState = {
          parent: r,
          cache: u
        }, iu(e), zn(e, It, u)) : ((t.lanes & a) !== 0 && (au(t, e), cs(e, null, null, a), us()), u = t.memoizedState, c = e.memoizedState, u.parent !== r ? (u = { parent: r, cache: r }, e.memoizedState = u, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u), zn(e, It, r)) : (r = c.cache, zn(e, It, r), r !== u.cache && $o(
          e,
          [It],
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
  function wn(t) {
    t.flags |= 4;
  }
  function Kh(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !ty(e)) {
      if (e = Pe.current, e !== null && ((St & 4194048) === St ? an !== null : (St & 62914560) !== St && (St & 536870912) === 0 || e !== an))
        throw ls = nu, Dd;
      t.flags |= 8192;
    }
  }
  function tl(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Am() : 536870912, t.lanes |= e, da |= e);
  }
  function gs(t, e) {
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
  function Ht(t) {
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
    switch (Zo(e), e.tag) {
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
        return Ht(e), null;
      case 1:
        return Ht(e), null;
      case 3:
        return a = e.stateNode, r = null, t !== null && (r = t.memoizedState.cache), e.memoizedState.cache !== r && (e.flags |= 2048), bn(It), Me(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (ts(e) ? wn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Ad())), Ht(e), null;
      case 26:
        return a = e.memoizedState, t === null ? (wn(e), a !== null ? (Ht(e), Kh(e, a)) : (Ht(e), e.flags &= -16777217)) : a ? a !== t.memoizedState ? (wn(e), Ht(e), Kh(e, a)) : (Ht(e), e.flags &= -16777217) : (t.memoizedProps !== r && wn(e), Ht(e), e.flags &= -16777217), null;
      case 27:
        mn(e), a = I.current;
        var u = e.type;
        if (t !== null && e.stateNode != null)
          t.memoizedProps !== r && wn(e);
        else {
          if (!r) {
            if (e.stateNode === null)
              throw Error(o(166));
            return Ht(e), null;
          }
          t = at.current, ts(e) ? Td(e) : (t = Kp(u, r, a), e.stateNode = t, wn(e));
        }
        return Ht(e), null;
      case 5:
        if (mn(e), a = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== r && wn(e);
        else {
          if (!r) {
            if (e.stateNode === null)
              throw Error(o(166));
            return Ht(e), null;
          }
          if (t = at.current, ts(e))
            Td(e);
          else {
            switch (u = dl(
              I.current
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
            t[ce] = e, t[ve] = r;
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
            t && wn(e);
          }
        }
        return Ht(e), e.flags &= -16777217, null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== r && wn(e);
        else {
          if (typeof r != "string" && e.stateNode === null)
            throw Error(o(166));
          if (t = I.current, ts(e)) {
            if (t = e.stateNode, a = e.memoizedProps, r = null, u = pe, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  r = u.memoizedProps;
              }
            t[ce] = e, t = !!(t.nodeValue === a || r !== null && r.suppressHydrationWarning === !0 || kp(t.nodeValue, a)), t || vi(e);
          } else
            t = dl(t).createTextNode(
              r
            ), t[ce] = e, e.stateNode = t;
        }
        return Ht(e), null;
      case 13:
        if (r = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = ts(e), r !== null && r.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(o(318));
              if (u = e.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[ce] = e;
            } else
              es(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Ht(e), u = !1;
          } else
            u = Ad(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return e.flags & 256 ? (Sn(e), e) : (Sn(e), null);
        }
        if (Sn(e), (e.flags & 128) !== 0)
          return e.lanes = a, e;
        if (a = r !== null, t = t !== null && t.memoizedState !== null, a) {
          r = e.child, u = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (u = r.alternate.memoizedState.cachePool.pool);
          var c = null;
          r.memoizedState !== null && r.memoizedState.cachePool !== null && (c = r.memoizedState.cachePool.pool), c !== u && (r.flags |= 2048);
        }
        return a !== t && a && (e.child.flags |= 8192), tl(e, e.updateQueue), Ht(e), null;
      case 4:
        return Me(), t === null && rc(e.stateNode.containerInfo), Ht(e), null;
      case 10:
        return bn(e.type), Ht(e), null;
      case 19:
        if (J(te), u = e.memoizedState, u === null) return Ht(e), null;
        if (r = (e.flags & 128) !== 0, c = u.rendering, c === null)
          if (r) gs(u, !1);
          else {
            if (Yt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (c = Fr(t), c !== null) {
                  for (e.flags |= 128, gs(u, !1), t = c.updateQueue, e.updateQueue = t, tl(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null; )
                    xd(a, t), a = a.sibling;
                  return F(
                    te,
                    te.current & 1 | 2
                  ), e.child;
                }
                t = t.sibling;
              }
            u.tail !== null && en() > il && (e.flags |= 128, r = !0, gs(u, !1), e.lanes = 4194304);
          }
        else {
          if (!r)
            if (t = Fr(c), t !== null) {
              if (e.flags |= 128, r = !0, t = t.updateQueue, e.updateQueue = t, tl(e, t), gs(u, !0), u.tail === null && u.tailMode === "hidden" && !c.alternate && !Mt)
                return Ht(e), null;
            } else
              2 * en() - u.renderingStartTime > il && a !== 536870912 && (e.flags |= 128, r = !0, gs(u, !1), e.lanes = 4194304);
          u.isBackwards ? (c.sibling = e.child, e.child = c) : (t = u.last, t !== null ? t.sibling = c : e.child = c, u.last = c);
        }
        return u.tail !== null ? (e = u.tail, u.rendering = e, u.tail = e.sibling, u.renderingStartTime = en(), e.sibling = null, t = te.current, F(te, r ? t & 1 | 2 : t & 1), e) : (Ht(e), null);
      case 22:
      case 23:
        return Sn(e), ou(), r = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== r && (e.flags |= 8192) : r && (e.flags |= 8192), r ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (Ht(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Ht(e), a = e.updateQueue, a !== null && tl(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), r = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), r !== a && (e.flags |= 2048), t !== null && J(Si), null;
      case 24:
        return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), bn(It), Ht(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, e.tag));
  }
  function sx(t, e) {
    switch (Zo(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return bn(It), Me(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return mn(e), null;
      case 13:
        if (Sn(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(o(340));
          es();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return J(te), null;
      case 4:
        return Me(), null;
      case 10:
        return bn(e.type), null;
      case 22:
      case 23:
        return Sn(e), ou(), t !== null && J(Si), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return bn(It), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Qh(t, e) {
    switch (Zo(e), e.tag) {
      case 3:
        bn(It), Me();
        break;
      case 26:
      case 27:
      case 5:
        mn(e);
        break;
      case 4:
        Me();
        break;
      case 13:
        Sn(e);
        break;
      case 19:
        J(te);
        break;
      case 10:
        bn(e.type);
        break;
      case 22:
      case 23:
        Sn(e), ou(), t !== null && J(Si);
        break;
      case 24:
        bn(It);
    }
  }
  function vs(t, e) {
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
  function qn(t, e, a) {
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
              var S = a, C = v;
              try {
                C();
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
    a.props = wi(
      t.type,
      t.memoizedProps
    ), a.state = t.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (r) {
      zt(t, e, r);
    }
  }
  function bs(t, e) {
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
  function sn(t, e) {
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
  function Vu(t, e, a) {
    try {
      var r = t.stateNode;
      Mx(r, t.type, a, e), r[ve] = e;
    } catch (u) {
      zt(t, t.return, u);
    }
  }
  function Jh(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Fn(t.type) || t.tag === 4;
  }
  function Bu(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Jh(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Fn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Lu(t, e, a) {
    var r = t.tag;
    if (r === 5 || r === 6)
      t = t.stateNode, e ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, e) : (e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, e.appendChild(t), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = ml));
    else if (r !== 4 && (r === 27 && Fn(t.type) && (a = t.stateNode, e = null), t = t.child, t !== null))
      for (Lu(t, e, a), t = t.sibling; t !== null; )
        Lu(t, e, a), t = t.sibling;
  }
  function el(t, e, a) {
    var r = t.tag;
    if (r === 5 || r === 6)
      t = t.stateNode, e ? a.insertBefore(t, e) : a.appendChild(t);
    else if (r !== 4 && (r === 27 && Fn(t.type) && (a = t.stateNode), t = t.child, t !== null))
      for (el(t, e, a), t = t.sibling; t !== null; )
        el(t, e, a), t = t.sibling;
  }
  function $h(t) {
    var e = t.stateNode, a = t.memoizedProps;
    try {
      for (var r = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      oe(e, r, a), e[ce] = t, e[ve] = a;
    } catch (c) {
      zt(t, t.return, c);
    }
  }
  var An = !1, Kt = !1, ku = !1, Ih = typeof WeakSet == "function" ? WeakSet : Set, ae = null;
  function rx(t, e) {
    if (t = t.containerInfo, uc = bl, t = cd(t), Bo(t)) {
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
            var y = 0, v = -1, S = -1, C = 0, k = 0, Y = t, j = null;
            e: for (; ; ) {
              for (var _; Y !== a || u !== 0 && Y.nodeType !== 3 || (v = y + u), Y !== c || r !== 0 && Y.nodeType !== 3 || (S = y + r), Y.nodeType === 3 && (y += Y.nodeValue.length), (_ = Y.firstChild) !== null; )
                j = Y, Y = _;
              for (; ; ) {
                if (Y === t) break e;
                if (j === a && ++C === u && (v = y), j === c && ++k === r && (S = y), (_ = Y.nextSibling) !== null) break;
                Y = j, j = Y.parentNode;
              }
              Y = _;
            }
            a = v === -1 || S === -1 ? null : { start: v, end: S };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (cc = { focusedElem: t, selectionRange: a }, bl = !1, ae = e; ae !== null; )
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
                  var ut = wi(
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
                  dc(t);
                else if (a === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      dc(t);
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
        Pn(t, a), r & 4 && vs(5, a);
        break;
      case 1:
        if (Pn(t, a), r & 4)
          if (t = a.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (y) {
              zt(a, a.return, y);
            }
          else {
            var u = wi(
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
        r & 64 && Zh(a), r & 512 && bs(a, a.return);
        break;
      case 3:
        if (Pn(t, a), r & 64 && (t = a.updateQueue, t !== null)) {
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
        Pn(t, a), e === null && r & 4 && Wh(a), r & 512 && bs(a, a.return);
        break;
      case 12:
        Pn(t, a);
        break;
      case 13:
        Pn(t, a), r & 4 && ip(t, a), r & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (a = px.bind(
          null,
          a
        ), _x(t, a))));
        break;
      case 22:
        if (r = a.memoizedState !== null || An, !r) {
          e = e !== null && e.memoizedState !== null || Kt, u = An;
          var c = Kt;
          An = r, (Kt = e) && !c ? Yn(
            t,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Pn(t, a), An = u, Kt = c;
        }
        break;
      case 30:
        break;
      default:
        Pn(t, a);
    }
  }
  function ep(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, ep(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && vo(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Bt = null, Se = !1;
  function En(t, e, a) {
    for (a = a.child; a !== null; )
      np(t, e, a), a = a.sibling;
  }
  function np(t, e, a) {
    if (Re && typeof Re.onCommitFiberUnmount == "function")
      try {
        Re.onCommitFiberUnmount(Ha, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        Kt || sn(a, e), En(
          t,
          e,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Kt || sn(a, e);
        var r = Bt, u = Se;
        Fn(a.type) && (Bt = a.stateNode, Se = !1), En(
          t,
          e,
          a
        ), Os(a.stateNode), Bt = r, Se = u;
        break;
      case 5:
        Kt || sn(a, e);
      case 6:
        if (r = Bt, u = Se, Bt = null, En(
          t,
          e,
          a
        ), Bt = r, Se = u, Bt !== null)
          if (Se)
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
        Bt !== null && (Se ? (t = Bt, Gp(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          a.stateNode
        ), Vs(t)) : Gp(Bt, a.stateNode));
        break;
      case 4:
        r = Bt, u = Se, Bt = a.stateNode.containerInfo, Se = !0, En(
          t,
          e,
          a
        ), Bt = r, Se = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Kt || qn(2, a, e), Kt || qn(4, a, e), En(
          t,
          e,
          a
        );
        break;
      case 1:
        Kt || (sn(a, e), r = a.stateNode, typeof r.componentWillUnmount == "function" && Fh(
          a,
          e,
          r
        )), En(
          t,
          e,
          a
        );
        break;
      case 21:
        En(
          t,
          e,
          a
        );
        break;
      case 22:
        Kt = (r = Kt) || a.memoizedState !== null, En(
          t,
          e,
          a
        ), Kt = r;
        break;
      default:
        En(
          t,
          e,
          a
        );
    }
  }
  function ip(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Vs(t);
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
  function Hu(t, e) {
    var a = lx(t);
    e.forEach(function(r) {
      var u = yx.bind(null, t, r);
      a.has(r) || (a.add(r), r.then(u, u));
    });
  }
  function Ne(t, e) {
    var a = e.deletions;
    if (a !== null)
      for (var r = 0; r < a.length; r++) {
        var u = a[r], c = t, y = e, v = y;
        t: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (Fn(v.type)) {
                Bt = v.stateNode, Se = !1;
                break t;
              }
              break;
            case 5:
              Bt = v.stateNode, Se = !1;
              break t;
            case 3:
            case 4:
              Bt = v.stateNode.containerInfo, Se = !0;
              break t;
          }
          v = v.return;
        }
        if (Bt === null) throw Error(o(160));
        np(c, y, u), Bt = null, Se = !1, c = u.alternate, c !== null && (c.return = null), u.return = null;
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; )
        ap(e, t), e = e.sibling;
  }
  var Fe = null;
  function ap(t, e) {
    var a = t.alternate, r = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ne(e, t), je(t), r & 4 && (qn(3, t, t.return), vs(3, t), qn(5, t, t.return));
        break;
      case 1:
        Ne(e, t), je(t), r & 512 && (Kt || a === null || sn(a, a.return)), r & 64 && An && (t = t.updateQueue, t !== null && (r = t.callbacks, r !== null && (a = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = a === null ? r : a.concat(r))));
        break;
      case 26:
        var u = Fe;
        if (Ne(e, t), je(t), r & 512 && (Kt || a === null || sn(a, a.return)), r & 4) {
          var c = a !== null ? a.memoizedState : null;
          if (r = t.memoizedState, a === null)
            if (r === null)
              if (t.stateNode === null) {
                t: {
                  r = t.type, a = t.memoizedProps, u = u.ownerDocument || u;
                  e: switch (r) {
                    case "title":
                      c = u.getElementsByTagName("title")[0], (!c || c[Ya] || c[ce] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = u.createElement(r), u.head.insertBefore(
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
            )) : r === null && t.stateNode !== null && Vu(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Ne(e, t), je(t), r & 512 && (Kt || a === null || sn(a, a.return)), a !== null && r & 4 && Vu(
          t,
          t.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Ne(e, t), je(t), r & 512 && (Kt || a === null || sn(a, a.return)), t.flags & 32) {
          u = t.stateNode;
          try {
            Xi(u, "");
          } catch (_) {
            zt(t, t.return, _);
          }
        }
        r & 4 && t.stateNode != null && (u = t.memoizedProps, Vu(
          t,
          u,
          a !== null ? a.memoizedProps : u
        )), r & 1024 && (ku = !0);
        break;
      case 6:
        if (Ne(e, t), je(t), r & 4) {
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
        if (yl = null, u = Fe, Fe = hl(e.containerInfo), Ne(e, t), Fe = u, je(t), r & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Vs(e.containerInfo);
          } catch (_) {
            zt(t, t.return, _);
          }
        ku && (ku = !1, sp(t));
        break;
      case 4:
        r = Fe, Fe = hl(
          t.stateNode.containerInfo
        ), Ne(e, t), je(t), Fe = r;
        break;
      case 12:
        Ne(e, t), je(t);
        break;
      case 13:
        Ne(e, t), je(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Ku = en()), r & 4 && (r = t.updateQueue, r !== null && (t.updateQueue = null, Hu(t, r)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var S = a !== null && a.memoizedState !== null, C = An, k = Kt;
        if (An = C || u, Kt = k || S, Ne(e, t), Kt = k, An = C, je(t), r & 8192)
          t: for (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, u && (a === null || S || An || Kt || Ai(t)), a = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (a === null) {
                S = a = e;
                try {
                  if (c = S.stateNode, u)
                    y = c.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                  else {
                    v = S.stateNode;
                    var Y = S.memoizedProps.style, j = Y != null && Y.hasOwnProperty("display") ? Y.display : null;
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
        r & 4 && (r = t.updateQueue, r !== null && (a = r.retryQueue, a !== null && (r.retryQueue = null, Hu(t, a))));
        break;
      case 19:
        Ne(e, t), je(t), r & 4 && (r = t.updateQueue, r !== null && (t.updateQueue = null, Hu(t, r)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ne(e, t), je(t);
    }
  }
  function je(t) {
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
            var u = a.stateNode, c = Bu(t);
            el(t, c, u);
            break;
          case 5:
            var y = a.stateNode;
            a.flags & 32 && (Xi(y, ""), a.flags &= -33);
            var v = Bu(t);
            el(t, v, y);
            break;
          case 3:
          case 4:
            var S = a.stateNode.containerInfo, C = Bu(t);
            Lu(
              t,
              C,
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
  function Pn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        tp(t, e.alternate, e), e = e.sibling;
  }
  function Ai(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          qn(4, e, e.return), Ai(e);
          break;
        case 1:
          sn(e, e.return);
          var a = e.stateNode;
          typeof a.componentWillUnmount == "function" && Fh(
            e,
            e.return,
            a
          ), Ai(e);
          break;
        case 27:
          Os(e.stateNode);
        case 26:
        case 5:
          sn(e, e.return), Ai(e);
          break;
        case 22:
          e.memoizedState === null && Ai(e);
          break;
        case 30:
          Ai(e);
          break;
        default:
          Ai(e);
      }
      t = t.sibling;
    }
  }
  function Yn(t, e, a) {
    for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var r = e.alternate, u = t, c = e, y = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Yn(
            u,
            c,
            a
          ), vs(4, c);
          break;
        case 1:
          if (Yn(
            u,
            c,
            a
          ), r = c, u = r.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (C) {
              zt(r, r.return, C);
            }
          if (r = c, u = r.updateQueue, u !== null) {
            var v = r.stateNode;
            try {
              var S = u.shared.hiddenCallbacks;
              if (S !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < S.length; u++)
                  zd(S[u], v);
            } catch (C) {
              zt(r, r.return, C);
            }
          }
          a && y & 64 && Zh(c), bs(c, c.return);
          break;
        case 27:
          $h(c);
        case 26:
        case 5:
          Yn(
            u,
            c,
            a
          ), a && r === null && y & 4 && Wh(c), bs(c, c.return);
          break;
        case 12:
          Yn(
            u,
            c,
            a
          );
          break;
        case 13:
          Yn(
            u,
            c,
            a
          ), a && y & 4 && ip(u, c);
          break;
        case 22:
          c.memoizedState === null && Yn(
            u,
            c,
            a
          ), bs(c, c.return);
          break;
        case 30:
          break;
        default:
          Yn(
            u,
            c,
            a
          );
      }
      e = e.sibling;
    }
  }
  function qu(t, e) {
    var a = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && as(a));
  }
  function Pu(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && as(t));
  }
  function rn(t, e, a, r) {
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
        rn(
          t,
          e,
          a,
          r
        ), u & 2048 && vs(9, e);
        break;
      case 1:
        rn(
          t,
          e,
          a,
          r
        );
        break;
      case 3:
        rn(
          t,
          e,
          a,
          r
        ), u & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && as(t)));
        break;
      case 12:
        if (u & 2048) {
          rn(
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
          rn(
            t,
            e,
            a,
            r
          );
        break;
      case 13:
        rn(
          t,
          e,
          a,
          r
        );
        break;
      case 23:
        break;
      case 22:
        c = e.stateNode, y = e.alternate, e.memoizedState !== null ? c._visibility & 2 ? rn(
          t,
          e,
          a,
          r
        ) : xs(t, e) : c._visibility & 2 ? rn(
          t,
          e,
          a,
          r
        ) : (c._visibility |= 2, ca(
          t,
          e,
          a,
          r,
          (e.subtreeFlags & 10256) !== 0
        )), u & 2048 && qu(y, e);
        break;
      case 24:
        rn(
          t,
          e,
          a,
          r
        ), u & 2048 && Pu(e.alternate, e);
        break;
      default:
        rn(
          t,
          e,
          a,
          r
        );
    }
  }
  function ca(t, e, a, r, u) {
    for (u = u && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var c = t, y = e, v = a, S = r, C = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          ca(
            c,
            y,
            v,
            S,
            u
          ), vs(8, y);
          break;
        case 23:
          break;
        case 22:
          var k = y.stateNode;
          y.memoizedState !== null ? k._visibility & 2 ? ca(
            c,
            y,
            v,
            S,
            u
          ) : xs(
            c,
            y
          ) : (k._visibility |= 2, ca(
            c,
            y,
            v,
            S,
            u
          )), u && C & 2048 && qu(
            y.alternate,
            y
          );
          break;
        case 24:
          ca(
            c,
            y,
            v,
            S,
            u
          ), u && C & 2048 && Pu(y.alternate, y);
          break;
        default:
          ca(
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
  function xs(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var a = t, r = e, u = r.flags;
        switch (r.tag) {
          case 22:
            xs(a, r), u & 2048 && qu(
              r.alternate,
              r
            );
            break;
          case 24:
            xs(a, r), u & 2048 && Pu(r.alternate, r);
            break;
          default:
            xs(a, r);
        }
        e = e.sibling;
      }
  }
  var Ss = 8192;
  function fa(t) {
    if (t.subtreeFlags & Ss)
      for (t = t.child; t !== null; )
        lp(t), t = t.sibling;
  }
  function lp(t) {
    switch (t.tag) {
      case 26:
        fa(t), t.flags & Ss && t.memoizedState !== null && Kx(
          Fe,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        fa(t);
        break;
      case 3:
      case 4:
        var e = Fe;
        Fe = hl(t.stateNode.containerInfo), fa(t), Fe = e;
        break;
      case 22:
        t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = Ss, Ss = 16777216, fa(t), Ss = e) : fa(t));
        break;
      default:
        fa(t);
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
  function Ts(t) {
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
        Ts(t), t.flags & 2048 && qn(9, t, t.return);
        break;
      case 3:
        Ts(t);
        break;
      case 12:
        Ts(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, nl(t)) : Ts(t);
        break;
      default:
        Ts(t);
    }
  }
  function nl(t) {
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
          qn(8, e, e.return), nl(e);
          break;
        case 22:
          a = e.stateNode, a._visibility & 2 && (a._visibility &= -3, nl(e));
          break;
        default:
          nl(e);
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
          qn(8, a, e);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var r = a.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          as(a.memoizedState.cache);
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
      var e = fe(It), a = e.data.get(t);
      return a === void 0 && (a = t(), e.data.set(t, a)), a;
    }
  }, ux = typeof WeakMap == "function" ? WeakMap : Map, Rt = 0, Ut = null, bt = null, St = 0, Ot = 0, _e = null, Gn = !1, ma = !1, Yu = !1, Mn = 0, Yt = 0, Xn = 0, Ei = 0, Gu = 0, Ye = 0, da = 0, ws = null, Te = null, Xu = !1, Ku = 0, il = 1 / 0, al = null, Kn = null, le = 0, Qn = null, ha = null, pa = 0, Qu = 0, Zu = null, fp = null, As = 0, Fu = null;
  function ze() {
    if ((Rt & 2) !== 0 && St !== 0)
      return St & -St;
    if (B.T !== null) {
      var t = na;
      return t !== 0 ? t : nc();
    }
    return Rm();
  }
  function mp() {
    Ye === 0 && (Ye = (St & 536870912) === 0 || Mt ? wm() : 536870912);
    var t = Pe.current;
    return t !== null && (t.flags |= 32), Ye;
  }
  function Ue(t, e, a) {
    (t === Ut && (Ot === 2 || Ot === 9) || t.cancelPendingCommit !== null) && (ya(t, 0), Zn(
      t,
      St,
      Ye,
      !1
    )), Pa(t, a), ((Rt & 2) === 0 || t !== Ut) && (t === Ut && ((Rt & 2) === 0 && (Ei |= a), Yt === 4 && Zn(
      t,
      St,
      Ye,
      !1
    )), ln(t));
  }
  function dp(t, e, a) {
    if ((Rt & 6) !== 0) throw Error(o(327));
    var r = !a && (e & 124) === 0 && (e & t.expiredLanes) === 0 || qa(t, e), u = r ? mx(t, e) : $u(t, e, !0), c = r;
    do {
      if (u === 0) {
        ma && !r && Zn(t, e, 0, !1);
        break;
      } else {
        if (a = t.current.alternate, c && !cx(a)) {
          u = $u(t, e, !1), c = !1;
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
              u = ws;
              var S = v.current.memoizedState.isDehydrated;
              if (S && (ya(v, y).flags |= 256), y = $u(
                v,
                y,
                !1
              ), y !== 2) {
                if (Yu && !S) {
                  v.errorRecoveryDisabledLanes |= c, Ei |= c, u = 4;
                  break t;
                }
                c = Te, Te = u, c !== null && (Te === null ? Te = c : Te.push.apply(
                  Te,
                  c
                ));
              }
              u = y;
            }
            if (c = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          ya(t, 0), Zn(t, e, 0, !0);
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
              Zn(
                r,
                e,
                Ye,
                !Gn
              );
              break t;
            case 2:
              Te = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((e & 62914560) === e && (u = Ku + 300 - en(), 10 < u)) {
            if (Zn(
              r,
              e,
              Ye,
              !Gn
            ), pr(r, 0, !0) !== 0) break t;
            r.timeoutHandle = Pp(
              hp.bind(
                null,
                r,
                a,
                Te,
                al,
                Xu,
                e,
                Ye,
                Ei,
                da,
                Gn,
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
            Te,
            al,
            Xu,
            e,
            Ye,
            Ei,
            da,
            Gn,
            c,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ln(t);
  }
  function hp(t, e, a, r, u, c, y, v, S, C, k, Y, j, _) {
    if (t.timeoutHandle = -1, Y = e.subtreeFlags, (Y & 8192 || (Y & 16785408) === 16785408) && (Ns = { stylesheets: null, count: 0, unsuspend: Xx }, lp(e), Y = Qx(), Y !== null)) {
      t.cancelPendingCommit = Y(
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
      ), Zn(t, c, y, !C);
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
  function Zn(t, e, a, r) {
    e &= ~Gu, e &= ~Ei, t.suspendedLanes |= e, t.pingedLanes &= ~e, r && (t.warmLanes |= e), r = t.expirationTimes;
    for (var u = e; 0 < u; ) {
      var c = 31 - Oe(u), y = 1 << c;
      r[c] = -1, u &= ~y;
    }
    a !== 0 && Em(t, a, e);
  }
  function sl() {
    return (Rt & 6) === 0 ? (Es(0), !1) : !0;
  }
  function Wu() {
    if (bt !== null) {
      if (Ot === 0)
        var t = bt.return;
      else
        t = bt, vn = bi = null, du(t), oa = null, ps = 0, t = bt;
      for (; t !== null; )
        Qh(t.alternate, t), t = t.return;
      bt = null;
    }
  }
  function ya(t, e) {
    var a = t.timeoutHandle;
    a !== -1 && (t.timeoutHandle = -1, Ox(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), Wu(), Ut = t, bt = a = pn(t.current, null), St = e, Ot = 0, _e = null, Gn = !1, ma = qa(t, e), Yu = !1, da = Ye = Gu = Ei = Xn = Yt = 0, Te = ws = null, Xu = !1, (e & 8) !== 0 && (e |= e & 32);
    var r = t.entangledLanes;
    if (r !== 0)
      for (t = t.entanglements, r &= e; 0 < r; ) {
        var u = 31 - Oe(r), c = 1 << u;
        e |= t[u], r &= ~c;
      }
    return Mn = e, Rr(), a;
  }
  function pp(t, e) {
    yt = null, B.H = Kr, e === rs || e === Vr ? (e = jd(), Ot = 3) : e === Dd ? (e = jd(), Ot = 4) : Ot = e === _h ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, _e = e, bt === null && (Yt = 1, Jr(
      t,
      Le(e, t.current)
    ));
  }
  function yp() {
    var t = B.H;
    return B.H = Kr, t === null ? Kr : t;
  }
  function gp() {
    var t = B.A;
    return B.A = ox, t;
  }
  function Ju() {
    Yt = 4, Gn || (St & 4194048) !== St && Pe.current !== null || (ma = !0), (Xn & 134217727) === 0 && (Ei & 134217727) === 0 || Ut === null || Zn(
      Ut,
      St,
      Ye,
      !1
    );
  }
  function $u(t, e, a) {
    var r = Rt;
    Rt |= 2;
    var u = yp(), c = gp();
    (Ut !== t || St !== e) && (al = null, ya(t, e)), e = !1;
    var y = Yt;
    t: do
      try {
        if (Ot !== 0 && bt !== null) {
          var v = bt, S = _e;
          switch (Ot) {
            case 8:
              Wu(), y = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Pe.current === null && (e = !0);
              var C = Ot;
              if (Ot = 0, _e = null, ga(t, v, S, C), a && ma) {
                y = 0;
                break t;
              }
              break;
            default:
              C = Ot, Ot = 0, _e = null, ga(t, v, S, C);
          }
        }
        fx(), y = Yt;
        break;
      } catch (k) {
        pp(t, k);
      }
    while (!0);
    return e && t.shellSuspendCounter++, vn = bi = null, Rt = r, B.H = u, B.A = c, bt === null && (Ut = null, St = 0, Rr()), y;
  }
  function fx() {
    for (; bt !== null; ) vp(bt);
  }
  function mx(t, e) {
    var a = Rt;
    Rt |= 2;
    var r = yp(), u = gp();
    Ut !== t || St !== e ? (al = null, il = en() + 500, ya(t, e)) : ma = qa(
      t,
      e
    );
    t: do
      try {
        if (Ot !== 0 && bt !== null) {
          e = bt;
          var c = _e;
          e: switch (Ot) {
            case 1:
              Ot = 0, _e = null, ga(t, e, c, 1);
              break;
            case 2:
            case 9:
              if (Cd(c)) {
                Ot = 0, _e = null, bp(e);
                break;
              }
              e = function() {
                Ot !== 2 && Ot !== 9 || Ut !== t || (Ot = 7), ln(t);
              }, c.then(e, e);
              break t;
            case 3:
              Ot = 7;
              break t;
            case 4:
              Ot = 5;
              break t;
            case 7:
              Cd(c) ? (Ot = 0, _e = null, bp(e)) : (Ot = 0, _e = null, ga(t, e, c, 7));
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
                    Ot = 0, _e = null;
                    var S = v.sibling;
                    if (S !== null) bt = S;
                    else {
                      var C = v.return;
                      C !== null ? (bt = C, rl(C)) : bt = null;
                    }
                    break e;
                  }
              }
              Ot = 0, _e = null, ga(t, e, c, 5);
              break;
            case 6:
              Ot = 0, _e = null, ga(t, e, c, 6);
              break;
            case 8:
              Wu(), Yt = 6;
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
    return vn = bi = null, B.H = r, B.A = u, Rt = a, bt !== null ? 0 : (Ut = null, St = 0, Rr(), Yt);
  }
  function dx() {
    for (; bt !== null && !Ub(); )
      vp(bt);
  }
  function vp(t) {
    var e = Xh(t.alternate, t, Mn);
    t.memoizedProps = t.pendingProps, e === null ? rl(t) : bt = e;
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
          St
        );
        break;
      case 11:
        e = kh(
          a,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          St
        );
        break;
      case 5:
        du(e);
      default:
        Qh(a, e), e = bt = xd(e, Mn), e = Xh(a, e, Mn);
    }
    t.memoizedProps = t.pendingProps, e === null ? rl(t) : bt = e;
  }
  function ga(t, e, a, r) {
    vn = bi = null, du(e), oa = null, ps = 0;
    var u = e.return;
    try {
      if (nx(
        t,
        u,
        e,
        a,
        St
      )) {
        Yt = 1, Jr(
          t,
          Le(a, t.current)
        ), bt = null;
        return;
      }
    } catch (c) {
      if (u !== null) throw bt = u, c;
      Yt = 1, Jr(
        t,
        Le(a, t.current)
      ), bt = null;
      return;
    }
    e.flags & 32768 ? (Mt || r === 1 ? t = !0 : ma || (St & 536870912) !== 0 ? t = !1 : (Gn = t = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Pe.current, r !== null && r.tag === 13 && (r.flags |= 16384))), xp(e, t)) : rl(e);
  }
  function rl(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        xp(
          e,
          Gn
        );
        return;
      }
      t = e.return;
      var a = ax(
        e.alternate,
        e,
        Mn
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
    Yt === 0 && (Yt = 5);
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
    Yt = 6, bt = null;
  }
  function Sp(t, e, a, r, u, c, y, v, S) {
    t.cancelPendingCommit = null;
    do
      ll();
    while (le !== 0);
    if ((Rt & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      if (c = e.lanes | e.childLanes, c |= Po, Xb(
        t,
        a,
        c,
        y,
        v,
        S
      ), t === Ut && (bt = Ut = null, St = 0), ha = e, Qn = t, pa = a, Qu = c, Zu = u, fp = r, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, gx(mr, function() {
        return Mp(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), r = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || r) {
        r = B.T, B.T = null, u = z.p, z.p = 2, y = Rt, Rt |= 4;
        try {
          rx(t, e, a);
        } finally {
          Rt = y, z.p = u, B.T = r;
        }
      }
      le = 1, Tp(), wp(), Ap();
    }
  }
  function Tp() {
    if (le === 1) {
      le = 0;
      var t = Qn, e = ha, a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        a = B.T, B.T = null;
        var r = z.p;
        z.p = 2;
        var u = Rt;
        Rt |= 4;
        try {
          ap(e, t);
          var c = cc, y = cd(t.containerInfo), v = c.focusedElem, S = c.selectionRange;
          if (y !== v && v && v.ownerDocument && ud(
            v.ownerDocument.documentElement,
            v
          )) {
            if (S !== null && Bo(v)) {
              var C = S.start, k = S.end;
              if (k === void 0 && (k = C), "selectionStart" in v)
                v.selectionStart = C, v.selectionEnd = Math.min(
                  k,
                  v.value.length
                );
              else {
                var Y = v.ownerDocument || document, j = Y && Y.defaultView || window;
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
                    var O = Y.createRange();
                    O.setStart(M.node, M.offset), _.removeAllRanges(), st > _t ? (_.addRange(O), _.extend(T.node, T.offset)) : (O.setEnd(T.node, T.offset), _.addRange(O));
                  }
                }
              }
            }
            for (Y = [], _ = v; _ = _.parentNode; )
              _.nodeType === 1 && Y.push({
                element: _,
                left: _.scrollLeft,
                top: _.scrollTop
              });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < Y.length; v++) {
              var q = Y[v];
              q.element.scrollLeft = q.left, q.element.scrollTop = q.top;
            }
          }
          bl = !!uc, cc = uc = null;
        } finally {
          Rt = u, z.p = r, B.T = a;
        }
      }
      t.current = e, le = 2;
    }
  }
  function wp() {
    if (le === 2) {
      le = 0;
      var t = Qn, e = ha, a = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || a) {
        a = B.T, B.T = null;
        var r = z.p;
        z.p = 2;
        var u = Rt;
        Rt |= 4;
        try {
          tp(t, e.alternate, e);
        } finally {
          Rt = u, z.p = r, B.T = a;
        }
      }
      le = 3;
    }
  }
  function Ap() {
    if (le === 4 || le === 3) {
      le = 0, Vb();
      var t = Qn, e = ha, a = pa, r = fp;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? le = 5 : (le = 0, ha = Qn = null, Ep(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (u === 0 && (Kn = null), yo(a), e = e.stateNode, Re && typeof Re.onCommitFiberRoot == "function")
        try {
          Re.onCommitFiberRoot(
            Ha,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (r !== null) {
        e = B.T, u = z.p, z.p = 2, B.T = null;
        try {
          for (var c = t.onRecoverableError, y = 0; y < r.length; y++) {
            var v = r[y];
            c(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          B.T = e, z.p = u;
        }
      }
      (pa & 3) !== 0 && ll(), ln(t), u = t.pendingLanes, (a & 4194090) !== 0 && (u & 42) !== 0 ? t === Fu ? As++ : (As = 0, Fu = t) : As = 0, Es(0);
    }
  }
  function Ep(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, as(e)));
  }
  function ll(t) {
    return Tp(), wp(), Ap(), Mp();
  }
  function Mp() {
    if (le !== 5) return !1;
    var t = Qn, e = Qu;
    Qu = 0;
    var a = yo(pa), r = B.T, u = z.p;
    try {
      z.p = 32 > a ? 32 : a, B.T = null, a = Zu, Zu = null;
      var c = Qn, y = pa;
      if (le = 0, ha = Qn = null, pa = 0, (Rt & 6) !== 0) throw Error(o(331));
      var v = Rt;
      if (Rt |= 4, up(c.current), rp(
        c,
        c.current,
        y,
        a
      ), Rt = v, Es(0, !1), Re && typeof Re.onPostCommitFiberRoot == "function")
        try {
          Re.onPostCommitFiberRoot(Ha, c);
        } catch {
        }
      return !0;
    } finally {
      z.p = u, B.T = r, Ep(t, e);
    }
  }
  function Rp(t, e, a) {
    e = Le(a, e), e = Ru(t.stateNode, e, 2), t = Bn(t, e, 2), t !== null && (Pa(t, 2), ln(t));
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
          if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Kn === null || !Kn.has(r))) {
            t = Le(a, t), a = Nh(2), r = Bn(e, a, 2), r !== null && (jh(
              a,
              r,
              e,
              t
            ), Pa(r, 2), ln(r));
            break;
          }
        }
        e = e.return;
      }
  }
  function Iu(t, e, a) {
    var r = t.pingCache;
    if (r === null) {
      r = t.pingCache = new ux();
      var u = /* @__PURE__ */ new Set();
      r.set(e, u);
    } else
      u = r.get(e), u === void 0 && (u = /* @__PURE__ */ new Set(), r.set(e, u));
    u.has(a) || (Yu = !0, u.add(a), t = hx.bind(null, t, e, a), e.then(t, t));
  }
  function hx(t, e, a) {
    var r = t.pingCache;
    r !== null && r.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, Ut === t && (St & a) === a && (Yt === 4 || Yt === 3 && (St & 62914560) === St && 300 > en() - Ku ? (Rt & 2) === 0 && ya(t, 0) : Gu |= a, da === St && (da = 0)), ln(t);
  }
  function Op(t, e) {
    e === 0 && (e = Am()), t = $i(t, e), t !== null && (Pa(t, e), ln(t));
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
    return fo(t, e);
  }
  var ol = null, va = null, tc = !1, ul = !1, ec = !1, Mi = 0;
  function ln(t) {
    t !== va && t.next === null && (va === null ? ol = va = t : va = va.next = t), ul = !0, tc || (tc = !0, bx());
  }
  function Es(t, e) {
    if (!ec && ul) {
      ec = !0;
      do
        for (var a = !1, r = ol; r !== null; ) {
          if (t !== 0) {
            var u = r.pendingLanes;
            if (u === 0) var c = 0;
            else {
              var y = r.suspendedLanes, v = r.pingedLanes;
              c = (1 << 31 - Oe(42 | t) + 1) - 1, c &= u & ~(y & ~v), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (a = !0, jp(r, c));
          } else
            c = St, c = pr(
              r,
              r === Ut ? c : 0,
              r.cancelPendingCommit !== null || r.timeoutHandle !== -1
            ), (c & 3) === 0 || qa(r, c) || (a = !0, jp(r, c));
          r = r.next;
        }
      while (a);
      ec = !1;
    }
  }
  function vx() {
    Dp();
  }
  function Dp() {
    ul = tc = !1;
    var t = 0;
    Mi !== 0 && (Rx() && (t = Mi), Mi = 0);
    for (var e = en(), a = null, r = ol; r !== null; ) {
      var u = r.next, c = Cp(r, e);
      c === 0 ? (r.next = null, a === null ? ol = u : a.next = u, u === null && (va = a)) : (a = r, (t !== 0 || (c & 3) !== 0) && (ul = !0)), r = u;
    }
    Es(t);
  }
  function Cp(t, e) {
    for (var a = t.suspendedLanes, r = t.pingedLanes, u = t.expirationTimes, c = t.pendingLanes & -62914561; 0 < c; ) {
      var y = 31 - Oe(c), v = 1 << y, S = u[y];
      S === -1 ? ((v & a) === 0 || (v & r) !== 0) && (u[y] = Gb(v, e)) : S <= e && (t.expiredLanes |= v), c &= ~v;
    }
    if (e = Ut, a = St, a = pr(
      t,
      t === e ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), r = t.callbackNode, a === 0 || t === e && (Ot === 2 || Ot === 9) || t.cancelPendingCommit !== null)
      return r !== null && r !== null && mo(r), t.callbackNode = null, t.callbackPriority = 0;
    if ((a & 3) === 0 || qa(t, a)) {
      if (e = a & -a, e === t.callbackPriority) return e;
      switch (r !== null && mo(r), yo(a)) {
        case 2:
        case 8:
          a = Sm;
          break;
        case 32:
          a = mr;
          break;
        case 268435456:
          a = Tm;
          break;
        default:
          a = mr;
      }
      return r = Np.bind(null, t), a = fo(a, r), t.callbackPriority = e, t.callbackNode = a, e;
    }
    return r !== null && r !== null && mo(r), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Np(t, e) {
    if (le !== 0 && le !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var a = t.callbackNode;
    if (ll() && t.callbackNode !== a)
      return null;
    var r = St;
    return r = pr(
      t,
      t === Ut ? r : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), r === 0 ? null : (dp(t, r, e), Cp(t, en()), t.callbackNode != null && t.callbackNode === a ? Np.bind(null, t) : null);
  }
  function jp(t, e) {
    if (ll()) return null;
    dp(t, e, !0);
  }
  function bx() {
    Dx(function() {
      (Rt & 6) !== 0 ? fo(
        xm,
        vx
      ) : Dp();
    });
  }
  function nc() {
    return Mi === 0 && (Mi = wm()), Mi;
  }
  function _p(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : xr("" + t);
  }
  function zp(t, e) {
    var a = e.ownerDocument.createElement("input");
    return a.name = e.name, a.value = e.value, t.id && a.setAttribute("form", t.id), e.parentNode.insertBefore(a, e), t = new FormData(t), a.parentNode.removeChild(a), t;
  }
  function xx(t, e, a, r, u) {
    if (e === "submit" && a && a.stateNode === u) {
      var c = _p(
        (u[ve] || null).action
      ), y = r.submitter;
      y && (e = (e = y[ve] || null) ? _p(e.formAction) : y.getAttribute("formAction"), e !== null && (c = e, y = null));
      var v = new Ar(
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
                if (Mi !== 0) {
                  var S = y ? zp(u, y) : new FormData(u);
                  Tu(
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
                typeof c == "function" && (v.preventDefault(), S = y ? zp(u, y) : new FormData(u), Tu(
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
  for (var ic = 0; ic < qo.length; ic++) {
    var ac = qo[ic], Sx = ac.toLowerCase(), Tx = ac[0].toUpperCase() + ac.slice(1);
    Ze(
      Sx,
      "on" + Tx
    );
  }
  Ze(dd, "onAnimationEnd"), Ze(hd, "onAnimationIteration"), Ze(pd, "onAnimationStart"), Ze("dblclick", "onDoubleClick"), Ze("focusin", "onFocus"), Ze("focusout", "onBlur"), Ze(k1, "onTransitionRun"), Ze(H1, "onTransitionStart"), Ze(q1, "onTransitionCancel"), Ze(yd, "onTransitionEnd"), Pi("onMouseEnter", ["mouseout", "mouseover"]), Pi("onMouseLeave", ["mouseout", "mouseover"]), Pi("onPointerEnter", ["pointerout", "pointerover"]), Pi("onPointerLeave", ["pointerout", "pointerover"]), ci(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ci(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ci("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ci(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ci(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ci(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ms = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), wx = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ms)
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
            var v = r[y], S = v.instance, C = v.currentTarget;
            if (v = v.listener, S !== c && u.isPropagationStopped())
              break t;
            c = v, u.currentTarget = C;
            try {
              c(u);
            } catch (k) {
              Wr(k);
            }
            u.currentTarget = null, c = S;
          }
        else
          for (y = 0; y < r.length; y++) {
            if (v = r[y], S = v.instance, C = v.currentTarget, v = v.listener, S !== c && u.isPropagationStopped())
              break t;
            c = v, u.currentTarget = C;
            try {
              c(u);
            } catch (k) {
              Wr(k);
            }
            u.currentTarget = null, c = S;
          }
      }
    }
  }
  function xt(t, e) {
    var a = e[go];
    a === void 0 && (a = e[go] = /* @__PURE__ */ new Set());
    var r = t + "__bubble";
    a.has(r) || (Vp(e, t, 2, !1), a.add(r));
  }
  function sc(t, e, a) {
    var r = 0;
    e && (r |= 4), Vp(
      a,
      t,
      r,
      e
    );
  }
  var cl = "_reactListening" + Math.random().toString(36).slice(2);
  function rc(t) {
    if (!t[cl]) {
      t[cl] = !0, Dm.forEach(function(a) {
        a !== "selectionchange" && (wx.has(a) || sc(a, !1, t), sc(a, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[cl] || (e[cl] = !0, sc("selectionchange", !1, e));
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
        u = xc;
    }
    a = u.bind(
      null,
      e,
      a,
      t
    ), u = void 0, !Oo || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (u = !0), r ? u !== void 0 ? t.addEventListener(e, a, {
      capture: !0,
      passive: u
    }) : t.addEventListener(e, a, !0) : u !== void 0 ? t.addEventListener(e, a, {
      passive: u
    }) : t.addEventListener(e, a, !1);
  }
  function lc(t, e, a, r, u) {
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
            if (y = ki(v), y === null) return;
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
      var C = c, k = Mo(a), Y = [];
      t: {
        var j = gd.get(t);
        if (j !== void 0) {
          var _ = Ar, ut = t;
          switch (t) {
            case "keypress":
              if (Tr(a) === 0) break t;
            case "keydown":
            case "keyup":
              _ = g1;
              break;
            case "focusin":
              ut = "focus", _ = jo;
              break;
            case "focusout":
              ut = "blur", _ = jo;
              break;
            case "beforeblur":
            case "afterblur":
              _ = jo;
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
          for (var T = C, O; T !== null; ) {
            var q = T;
            if (O = q.stateNode, q = q.tag, q !== 5 && q !== 26 && q !== 27 || O === null || M === null || (q = Xa(T, M), q != null && st.push(
              Rs(T, q, O)
            )), _t) break;
            T = T.return;
          }
          0 < st.length && (j = new _(
            j,
            ut,
            null,
            a,
            k
          ), Y.push({ event: j, listeners: st }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (j = t === "mouseover" || t === "pointerover", _ = t === "mouseout" || t === "pointerout", j && a !== Eo && (ut = a.relatedTarget || a.fromElement) && (ki(ut) || ut[Li]))
            break t;
          if ((_ || j) && (j = k.window === k ? k : (j = k.ownerDocument) ? j.defaultView || j.parentWindow : window, _ ? (ut = a.relatedTarget || a.toElement, _ = C, ut = ut ? ki(ut) : null, ut !== null && (_t = f(ut), st = ut.tag, ut !== _t || st !== 5 && st !== 27 && st !== 6) && (ut = null)) : (_ = null, ut = C), _ !== ut)) {
            if (st = Km, q = "onMouseLeave", M = "onMouseEnter", T = "mouse", (t === "pointerout" || t === "pointerover") && (st = Zm, q = "onPointerLeave", M = "onPointerEnter", T = "pointer"), _t = _ == null ? j : Ga(_), O = ut == null ? j : Ga(ut), j = new st(
              q,
              T + "leave",
              _,
              a,
              k
            ), j.target = _t, j.relatedTarget = O, q = null, ki(k) === C && (st = new st(
              M,
              T + "enter",
              ut,
              a,
              k
            ), st.target = O, st.relatedTarget = _t, q = st), _t = q, _ && ut)
              e: {
                for (st = _, M = ut, T = 0, O = st; O; O = ba(O))
                  T++;
                for (O = 0, q = M; q; q = ba(q))
                  O++;
                for (; 0 < T - O; )
                  st = ba(st), T--;
                for (; 0 < O - T; )
                  M = ba(M), O--;
                for (; T--; ) {
                  if (st === M || M !== null && st === M.alternate)
                    break e;
                  st = ba(st), M = ba(M);
                }
                st = null;
              }
            else st = null;
            _ !== null && Bp(
              Y,
              j,
              _,
              st,
              !1
            ), ut !== null && _t !== null && Bp(
              Y,
              _t,
              ut,
              st,
              !0
            );
          }
        }
        t: {
          if (j = C ? Ga(C) : window, _ = j.nodeName && j.nodeName.toLowerCase(), _ === "select" || _ === "input" && j.type === "file")
            var tt = nd;
          else if (td(j))
            if (id)
              tt = V1;
            else {
              tt = z1;
              var vt = _1;
            }
          else
            _ = j.nodeName, !_ || _.toLowerCase() !== "input" || j.type !== "checkbox" && j.type !== "radio" ? C && Ao(C.elementType) && (tt = nd) : tt = U1;
          if (tt && (tt = tt(t, C))) {
            ed(
              Y,
              tt,
              a,
              k
            );
            break t;
          }
          vt && vt(t, j, C), t === "focusout" && C && j.type === "number" && C.memoizedProps.value != null && wo(j, "number", j.value);
        }
        switch (vt = C ? Ga(C) : window, t) {
          case "focusin":
            (td(vt) || vt.contentEditable === "true") && (Fi = vt, Lo = C, Ia = null);
            break;
          case "focusout":
            Ia = Lo = Fi = null;
            break;
          case "mousedown":
            ko = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ko = !1, fd(Y, a, k);
            break;
          case "selectionchange":
            if (L1) break;
          case "keydown":
          case "keyup":
            fd(Y, a, k);
        }
        var it;
        if (zo)
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
          Zi ? $m(t, a) && (lt = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (lt = "onCompositionStart");
        lt && (Fm && a.locale !== "ko" && (Zi || lt !== "onCompositionStart" ? lt === "onCompositionEnd" && Zi && (it = Gm()) : (_n = k, Do = "value" in _n ? _n.value : _n.textContent, Zi = !0)), vt = fl(C, lt), 0 < vt.length && (lt = new Qm(
          lt,
          t,
          null,
          a,
          k
        ), Y.push({ event: lt, listeners: vt }), it ? lt.data = it : (it = Im(a), it !== null && (lt.data = it)))), (it = O1 ? D1(t, a) : C1(t, a)) && (lt = fl(C, "onBeforeInput"), 0 < lt.length && (vt = new Qm(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          k
        ), Y.push({
          event: vt,
          listeners: lt
        }), vt.data = it)), xx(
          Y,
          t,
          C,
          a,
          k
        );
      }
      Up(Y, e);
    });
  }
  function Rs(t, e, a) {
    return {
      instance: t,
      listener: e,
      currentTarget: a
    };
  }
  function fl(t, e) {
    for (var a = e + "Capture", r = []; t !== null; ) {
      var u = t, c = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || c === null || (u = Xa(t, a), u != null && r.unshift(
        Rs(t, u, c)
      ), u = Xa(t, e), u != null && r.push(
        Rs(t, u, c)
      )), t.tag === 3) return r;
      t = t.return;
    }
    return [];
  }
  function ba(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Bp(t, e, a, r, u) {
    for (var c = e._reactName, y = []; a !== null && a !== r; ) {
      var v = a, S = v.alternate, C = v.stateNode;
      if (v = v.tag, S !== null && S === r) break;
      v !== 5 && v !== 26 && v !== 27 || C === null || (S = C, u ? (C = Xa(a, c), C != null && y.unshift(
        Rs(a, C, S)
      )) : u || (C = Xa(a, c), C != null && y.push(
        Rs(a, C, S)
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
  function ml() {
  }
  function jt(t, e, a, r, u, c) {
    switch (a) {
      case "children":
        typeof r == "string" ? e === "body" || e === "textarea" && r === "" || Xi(t, r) : (typeof r == "number" || typeof r == "bigint") && e !== "body" && Xi(t, "" + r);
        break;
      case "className":
        gr(t, "class", r);
        break;
      case "tabIndex":
        gr(t, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        gr(t, a, r);
        break;
      case "style":
        qm(t, r, c);
        break;
      case "data":
        if (e !== "object") {
          gr(t, "data", r);
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
        r = xr("" + r), t.setAttribute(a, r);
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
        r = xr("" + r), t.setAttribute(a, r);
        break;
      case "onClick":
        r != null && (t.onclick = ml);
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
        a = xr("" + r), t.setAttributeNS(
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
        xt("beforetoggle", t), xt("toggle", t), yr(t, "popover", r);
        break;
      case "xlinkActuate":
        dn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          r
        );
        break;
      case "xlinkArcrole":
        dn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          r
        );
        break;
      case "xlinkRole":
        dn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          r
        );
        break;
      case "xlinkShow":
        dn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          r
        );
        break;
      case "xlinkTitle":
        dn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          r
        );
        break;
      case "xlinkType":
        dn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          r
        );
        break;
      case "xmlBase":
        dn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          r
        );
        break;
      case "xmlLang":
        dn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          r
        );
        break;
      case "xmlSpace":
        dn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          r
        );
        break;
      case "is":
        yr(t, "is", r);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = e1.get(a) || a, yr(t, a, r));
    }
  }
  function oc(t, e, a, r, u, c) {
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
        typeof r == "string" ? Xi(t, r) : (typeof r == "number" || typeof r == "bigint") && Xi(t, "" + r);
        break;
      case "onScroll":
        r != null && xt("scroll", t);
        break;
      case "onScrollEnd":
        r != null && xt("scrollend", t);
        break;
      case "onClick":
        r != null && (t.onclick = ml);
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
        if (!Cm.hasOwnProperty(a))
          t: {
            if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"), e = a.slice(2, u ? a.length - 7 : void 0), c = t[ve] || null, c = c != null ? c[a] : null, typeof c == "function" && t.removeEventListener(e, c, u), typeof r == "function")) {
              typeof c != "function" && c !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(e, r, u);
              break t;
            }
            a in t ? t[a] = r : r === !0 ? t.setAttribute(a, "") : yr(t, a, r);
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
        var v = c = y = u = null, S = null, C = null;
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
                  C = k;
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
          C,
          y,
          u,
          !1
        ), vr(t);
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
        e = c, a = y, t.multiple = !!r, e != null ? Gi(t, !!r, e, !1) : a != null && Gi(t, !!r, a, !0);
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
        km(t, r, u, c), vr(t);
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
        for (r = 0; r < Ms.length; r++)
          xt(Ms[r], t);
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
        for (C in a)
          if (a.hasOwnProperty(C) && (r = a[C], r != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, e));
              default:
                jt(t, e, C, r, a, null);
            }
        return;
      default:
        if (Ao(e)) {
          for (k in a)
            a.hasOwnProperty(k) && (r = a[k], r !== void 0 && oc(
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
        var u = null, c = null, y = null, v = null, S = null, C = null, k = null;
        for (_ in a) {
          var Y = a[_];
          if (a.hasOwnProperty(_) && Y != null)
            switch (_) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = Y;
              default:
                r.hasOwnProperty(_) || jt(t, e, _, null, r, Y);
            }
        }
        for (var j in r) {
          var _ = r[j];
          if (Y = a[j], r.hasOwnProperty(j) && (_ != null || Y != null))
            switch (j) {
              case "type":
                c = _;
                break;
              case "name":
                u = _;
                break;
              case "checked":
                C = _;
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
                _ !== Y && jt(
                  t,
                  e,
                  j,
                  _,
                  r,
                  Y
                );
            }
        }
        To(
          t,
          y,
          v,
          S,
          C,
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
        e = v, a = y, r = _, j != null ? Gi(t, !!a, j, !1) : !!r != !!a && (e != null ? Gi(t, !!a, e, !0) : Gi(t, !!a, a ? [] : "", !1));
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
        for (C in r)
          if (j = r[C], _ = a[C], r.hasOwnProperty(C) && j !== _ && (j != null || _ != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null)
                  throw Error(o(137, e));
                break;
              default:
                jt(
                  t,
                  e,
                  C,
                  j,
                  r,
                  _
                );
            }
        return;
      default:
        if (Ao(e)) {
          for (var _t in a)
            j = a[_t], a.hasOwnProperty(_t) && j !== void 0 && !r.hasOwnProperty(_t) && oc(
              t,
              e,
              _t,
              void 0,
              r,
              j
            );
          for (k in r)
            j = r[k], _ = a[k], !r.hasOwnProperty(k) || j === _ || j === void 0 && _ === void 0 || oc(
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
    for (Y in r)
      j = r[Y], _ = a[Y], !r.hasOwnProperty(Y) || j === _ || j == null && _ == null || jt(t, e, Y, j, r, _);
  }
  var uc = null, cc = null;
  function dl(t) {
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
  function fc(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var mc = null;
  function Rx() {
    var t = window.event;
    return t && t.type === "popstate" ? t === mc ? !1 : (mc = t, !0) : (mc = null, !1);
  }
  var Pp = typeof setTimeout == "function" ? setTimeout : void 0, Ox = typeof clearTimeout == "function" ? clearTimeout : void 0, Yp = typeof Promise == "function" ? Promise : void 0, Dx = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yp < "u" ? function(t) {
    return Yp.resolve(null).then(t).catch(Cx);
  } : Pp;
  function Cx(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Fn(t) {
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
            if (a & 1 && Os(y.documentElement), a & 2 && Os(y.body), a & 4)
              for (a = y.head, Os(a), y = a.firstChild; y; ) {
                var v = y.nextSibling, S = y.nodeName;
                y[Ya] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && y.rel.toLowerCase() === "stylesheet" || a.removeChild(y), y = v;
              }
          }
          if (u === 0) {
            t.removeChild(c), Vs(e);
            return;
          }
          u--;
        } else
          a === "$" || a === "$?" || a === "$!" ? u++ : r = a.charCodeAt(0) - 48;
      else r = 0;
      a = c;
    } while (a);
    Vs(e);
  }
  function dc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var a = e;
      switch (e = e.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          dc(a), vo(a);
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
        if (!t[Ya])
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
      if (t = We(t.nextSibling), t === null) break;
    }
    return null;
  }
  function jx(t, e, a) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = We(t.nextSibling), t === null)) return null;
    return t;
  }
  function hc(t) {
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
  function We(t) {
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
  var pc = null;
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
    switch (e = dl(a), t) {
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
  function Os(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    vo(t);
  }
  var Ge = /* @__PURE__ */ new Map(), Qp = /* @__PURE__ */ new Set();
  function hl(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Rn = z.d;
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
    var t = Rn.f(), e = sl();
    return t || e;
  }
  function Ux(t) {
    var e = Hi(t);
    e !== null && e.tag === 5 && e.type === "form" ? dh(e) : Rn.r(t);
  }
  var xa = typeof document > "u" ? null : document;
  function Zp(t, e, a) {
    var r = xa;
    if (r && typeof e == "string" && e) {
      var u = Be(e);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof a == "string" && (u += '[crossorigin="' + a + '"]'), Qp.has(u) || (Qp.add(u), t = { rel: t, crossOrigin: a, href: e }, r.querySelector(u) === null && (e = r.createElement("link"), oe(e, "link", t), ne(e), r.head.appendChild(e)));
    }
  }
  function Vx(t) {
    Rn.D(t), Zp("dns-prefetch", t, null);
  }
  function Bx(t, e) {
    Rn.C(t, e), Zp("preconnect", t, e);
  }
  function Lx(t, e, a) {
    Rn.L(t, e, a);
    var r = xa;
    if (r && t && e) {
      var u = 'link[rel="preload"][as="' + Be(e) + '"]';
      e === "image" && a && a.imageSrcSet ? (u += '[imagesrcset="' + Be(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (u += '[imagesizes="' + Be(
        a.imageSizes
      ) + '"]')) : u += '[href="' + Be(t) + '"]';
      var c = u;
      switch (e) {
        case "style":
          c = Sa(t);
          break;
        case "script":
          c = Ta(t);
      }
      Ge.has(c) || (t = b(
        {
          rel: "preload",
          href: e === "image" && a && a.imageSrcSet ? void 0 : t,
          as: e
        },
        a
      ), Ge.set(c, t), r.querySelector(u) !== null || e === "style" && r.querySelector(Ds(c)) || e === "script" && r.querySelector(Cs(c)) || (e = r.createElement("link"), oe(e, "link", t), ne(e), r.head.appendChild(e)));
    }
  }
  function kx(t, e) {
    Rn.m(t, e);
    var a = xa;
    if (a && t) {
      var r = e && typeof e.as == "string" ? e.as : "script", u = 'link[rel="modulepreload"][as="' + Be(r) + '"][href="' + Be(t) + '"]', c = u;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = Ta(t);
      }
      if (!Ge.has(c) && (t = b({ rel: "modulepreload", href: t }, e), Ge.set(c, t), a.querySelector(u) === null)) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Cs(c)))
              return;
        }
        r = a.createElement("link"), oe(r, "link", t), ne(r), a.head.appendChild(r);
      }
    }
  }
  function Hx(t, e, a) {
    Rn.S(t, e, a);
    var r = xa;
    if (r && t) {
      var u = qi(r).hoistableStyles, c = Sa(t);
      e = e || "default";
      var y = u.get(c);
      if (!y) {
        var v = { loading: 0, preload: null };
        if (y = r.querySelector(
          Ds(c)
        ))
          v.loading = 5;
        else {
          t = b(
            { rel: "stylesheet", href: t, "data-precedence": e },
            a
          ), (a = Ge.get(c)) && yc(t, a);
          var S = y = r.createElement("link");
          ne(S), oe(S, "link", t), S._p = new Promise(function(C, k) {
            S.onload = C, S.onerror = k;
          }), S.addEventListener("load", function() {
            v.loading |= 1;
          }), S.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, pl(y, e, r);
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
    Rn.X(t, e);
    var a = xa;
    if (a && t) {
      var r = qi(a).hoistableScripts, u = Ta(t), c = r.get(u);
      c || (c = a.querySelector(Cs(u)), c || (t = b({ src: t, async: !0 }, e), (e = Ge.get(u)) && gc(t, e), c = a.createElement("script"), ne(c), oe(c, "link", t), a.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, r.set(u, c));
    }
  }
  function Px(t, e) {
    Rn.M(t, e);
    var a = xa;
    if (a && t) {
      var r = qi(a).hoistableScripts, u = Ta(t), c = r.get(u);
      c || (c = a.querySelector(Cs(u)), c || (t = b({ src: t, async: !0, type: "module" }, e), (e = Ge.get(u)) && gc(t, e), c = a.createElement("script"), ne(c), oe(c, "link", t), a.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, r.set(u, c));
    }
  }
  function Fp(t, e, a, r) {
    var u = (u = I.current) ? hl(u) : null;
    if (!u) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (e = Sa(a.href), a = qi(
          u
        ).hoistableStyles, r = a.get(e), r || (r = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(e, r)), r) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          t = Sa(a.href);
          var c = qi(
            u
          ).hoistableStyles, y = c.get(t);
          if (y || (u = u.ownerDocument || u, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(t, y), (c = u.querySelector(
            Ds(t)
          )) && !c._p && (y.instance = c, y.state.loading = 5), Ge.has(t) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Ge.set(t, a), c || Yx(
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
        return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Ta(a), a = qi(
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
  function Sa(t) {
    return 'href="' + Be(t) + '"';
  }
  function Ds(t) {
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
  function Ta(t) {
    return '[src="' + Be(t) + '"]';
  }
  function Cs(t) {
    return "script[async]" + t;
  }
  function Jp(t, e, a) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var r = t.querySelector(
            'style[data-href~="' + Be(a.href) + '"]'
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
          ), ne(r), oe(r, "style", u), pl(r, a.precedence, t), e.instance = r;
        case "stylesheet":
          u = Sa(a.href);
          var c = t.querySelector(
            Ds(u)
          );
          if (c)
            return e.state.loading |= 4, e.instance = c, ne(c), c;
          r = Wp(a), (u = Ge.get(u)) && yc(r, u), c = (t.ownerDocument || t).createElement("link"), ne(c);
          var y = c;
          return y._p = new Promise(function(v, S) {
            y.onload = v, y.onerror = S;
          }), oe(c, "link", r), e.state.loading |= 4, pl(c, a.precedence, t), e.instance = c;
        case "script":
          return c = Ta(a.src), (u = t.querySelector(
            Cs(c)
          )) ? (e.instance = u, ne(u), u) : (r = a, (u = Ge.get(c)) && (r = b({}, a), gc(r, u)), t = t.ownerDocument || t, u = t.createElement("script"), ne(u), oe(u, "link", r), t.head.appendChild(u), e.instance = u);
        case "void":
          return null;
        default:
          throw Error(o(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (r = e.instance, e.state.loading |= 4, pl(r, a.precedence, t));
    return e.instance;
  }
  function pl(t, e, a) {
    for (var r = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = r.length ? r[r.length - 1] : null, c = u, y = 0; y < r.length; y++) {
      var v = r[y];
      if (v.dataset.precedence === e) c = v;
      else if (c !== u) break;
    }
    c ? c.parentNode.insertBefore(t, c.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild));
  }
  function yc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function gc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var yl = null;
  function $p(t, e, a) {
    if (yl === null) {
      var r = /* @__PURE__ */ new Map(), u = yl = /* @__PURE__ */ new Map();
      u.set(a, r);
    } else
      u = yl, r = u.get(a), r || (r = /* @__PURE__ */ new Map(), u.set(a, r));
    if (r.has(t)) return r;
    for (r.set(t, null), a = a.getElementsByTagName(t), u = 0; u < a.length; u++) {
      var c = a[u];
      if (!(c[Ya] || c[ce] || t === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
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
  var Ns = null;
  function Xx() {
  }
  function Kx(t, e, a) {
    if (Ns === null) throw Error(o(475));
    var r = Ns;
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var u = Sa(a.href), c = t.querySelector(
          Ds(u)
        );
        if (c) {
          t = c._p, t !== null && typeof t == "object" && typeof t.then == "function" && (r.count++, r = gl.bind(r), t.then(r, r)), e.state.loading |= 4, e.instance = c, ne(c);
          return;
        }
        c = t.ownerDocument || t, a = Wp(a), (u = Ge.get(u)) && yc(a, u), c = c.createElement("link"), ne(c);
        var y = c;
        y._p = new Promise(function(v, S) {
          y.onload = v, y.onerror = S;
        }), oe(c, "link", a), e.instance = c;
      }
      r.stylesheets === null && (r.stylesheets = /* @__PURE__ */ new Map()), r.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (r.count++, e = gl.bind(r), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  function Qx() {
    if (Ns === null) throw Error(o(475));
    var t = Ns;
    return t.stylesheets && t.count === 0 && vc(t, t.stylesheets), 0 < t.count ? function(e) {
      var a = setTimeout(function() {
        if (t.stylesheets && vc(t, t.stylesheets), t.unsuspend) {
          var r = t.unsuspend;
          t.unsuspend = null, r();
        }
      }, 6e4);
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function gl() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) vc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var vl = null;
  function vc(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, vl = /* @__PURE__ */ new Map(), e.forEach(Zx, t), vl = null, gl.call(t));
  }
  function Zx(t, e) {
    if (!(e.state.loading & 4)) {
      var a = vl.get(t);
      if (a) var r = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), vl.set(t, a);
        for (var u = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < u.length; c++) {
          var y = u[c];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (a.set(y.dataset.precedence, y), r = y);
        }
        r && a.set(null, r);
      }
      u = e.instance, y = u.getAttribute("data-precedence"), c = a.get(y) || r, c === r && a.set(null, u), a.set(y, u), this.count++, r = gl.bind(this), u.addEventListener("load", r), u.addEventListener("error", r), c ? c.parentNode.insertBefore(u, c.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), e.state.loading |= 4;
    }
  }
  var js = {
    $$typeof: W,
    Provider: null,
    Consumer: null,
    _currentValue: ft,
    _currentValue2: ft,
    _threadCount: 0
  };
  function Fx(t, e, a, r, u, c, y, v) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ho(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ho(0), this.hiddenUpdates = ho(null), this.identifierPrefix = r, this.onUncaughtError = u, this.onCaughtError = c, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ey(t, e, a, r, u, c, y, v, S, C, k, Y) {
    return t = new Fx(
      t,
      e,
      a,
      y,
      v,
      S,
      C,
      Y
    ), e = 1, c === !0 && (e |= 24), c = Ce(3, null, null, e), t.current = c, c.stateNode = t, e = Io(), e.refCount++, t.pooledCache = e, e.refCount++, c.memoizedState = {
      element: r,
      isDehydrated: a,
      cache: e
    }, iu(c), t;
  }
  function ny(t) {
    return t ? (t = Ii, t) : Ii;
  }
  function iy(t, e, a, r, u, c) {
    u = ny(u), r.context === null ? r.context = u : r.pendingContext = u, r = Vn(e), r.payload = { element: a }, c = c === void 0 ? null : c, c !== null && (r.callback = c), a = Bn(t, r, e), a !== null && (Ue(a, t, e), os(a, t, e));
  }
  function ay(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < e ? a : e;
    }
  }
  function bc(t, e) {
    ay(t, e), (t = t.alternate) && ay(t, e);
  }
  function sy(t) {
    if (t.tag === 13) {
      var e = $i(t, 67108864);
      e !== null && Ue(e, t, 67108864), bc(t, 67108864);
    }
  }
  var bl = !0;
  function Wx(t, e, a, r) {
    var u = B.T;
    B.T = null;
    var c = z.p;
    try {
      z.p = 2, xc(t, e, a, r);
    } finally {
      z.p = c, B.T = u;
    }
  }
  function Jx(t, e, a, r) {
    var u = B.T;
    B.T = null;
    var c = z.p;
    try {
      z.p = 8, xc(t, e, a, r);
    } finally {
      z.p = c, B.T = u;
    }
  }
  function xc(t, e, a, r) {
    if (bl) {
      var u = Sc(r);
      if (u === null)
        lc(
          t,
          e,
          r,
          xl,
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
          var c = Hi(u);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var y = ui(c.pendingLanes);
                  if (y !== 0) {
                    var v = c;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; y; ) {
                      var S = 1 << 31 - Oe(y);
                      v.entanglements[1] |= S, y &= ~S;
                    }
                    ln(c), (Rt & 6) === 0 && (il = en() + 500, Es(0));
                  }
                }
                break;
              case 13:
                v = $i(c, 2), v !== null && Ue(v, c, 2), sl(), bc(c, 2);
            }
          if (c = Sc(r), c === null && lc(
            t,
            e,
            r,
            xl,
            a
          ), c === u) break;
          u = c;
        }
        u !== null && r.stopPropagation();
      } else
        lc(
          t,
          e,
          r,
          null,
          a
        );
    }
  }
  function Sc(t) {
    return t = Mo(t), Tc(t);
  }
  var xl = null;
  function Tc(t) {
    if (xl = null, t = ki(t), t !== null) {
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
    return xl = t, null;
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
          case mr:
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
  var wc = !1, Wn = null, Jn = null, $n = null, _s = /* @__PURE__ */ new Map(), zs = /* @__PURE__ */ new Map(), In = [], $x = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function ly(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Wn = null;
        break;
      case "dragenter":
      case "dragleave":
        Jn = null;
        break;
      case "mouseover":
      case "mouseout":
        $n = null;
        break;
      case "pointerover":
      case "pointerout":
        _s.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        zs.delete(e.pointerId);
    }
  }
  function Us(t, e, a, r, u, c) {
    return t === null || t.nativeEvent !== c ? (t = {
      blockedOn: e,
      domEventName: a,
      eventSystemFlags: r,
      nativeEvent: c,
      targetContainers: [u]
    }, e !== null && (e = Hi(e), e !== null && sy(e)), t) : (t.eventSystemFlags |= r, e = t.targetContainers, u !== null && e.indexOf(u) === -1 && e.push(u), t);
  }
  function Ix(t, e, a, r, u) {
    switch (e) {
      case "focusin":
        return Wn = Us(
          Wn,
          t,
          e,
          a,
          r,
          u
        ), !0;
      case "dragenter":
        return Jn = Us(
          Jn,
          t,
          e,
          a,
          r,
          u
        ), !0;
      case "mouseover":
        return $n = Us(
          $n,
          t,
          e,
          a,
          r,
          u
        ), !0;
      case "pointerover":
        var c = u.pointerId;
        return _s.set(
          c,
          Us(
            _s.get(c) || null,
            t,
            e,
            a,
            r,
            u
          )
        ), !0;
      case "gotpointercapture":
        return c = u.pointerId, zs.set(
          c,
          Us(
            zs.get(c) || null,
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
    var e = ki(t.target);
    if (e !== null) {
      var a = f(e);
      if (a !== null) {
        if (e = a.tag, e === 13) {
          if (e = d(a), e !== null) {
            t.blockedOn = e, Kb(t.priority, function() {
              if (a.tag === 13) {
                var r = ze();
                r = po(r);
                var u = $i(a, r);
                u !== null && Ue(u, a, r), bc(a, r);
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
  function Sl(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var a = Sc(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var r = new a.constructor(
          a.type,
          a
        );
        Eo = r, a.target.dispatchEvent(r), Eo = null;
      } else
        return e = Hi(a), e !== null && sy(e), t.blockedOn = a, !1;
      e.shift();
    }
    return !0;
  }
  function uy(t, e, a) {
    Sl(t) && a.delete(e);
  }
  function tS() {
    wc = !1, Wn !== null && Sl(Wn) && (Wn = null), Jn !== null && Sl(Jn) && (Jn = null), $n !== null && Sl($n) && ($n = null), _s.forEach(uy), zs.forEach(uy);
  }
  function Tl(t, e) {
    t.blockedOn === e && (t.blockedOn = null, wc || (wc = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      tS
    )));
  }
  var wl = null;
  function cy(t) {
    wl !== t && (wl = t, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        wl === t && (wl = null);
        for (var e = 0; e < t.length; e += 3) {
          var a = t[e], r = t[e + 1], u = t[e + 2];
          if (typeof r != "function") {
            if (Tc(r || a) === null)
              continue;
            break;
          }
          var c = Hi(a);
          c !== null && (t.splice(e, 3), e -= 3, Tu(
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
  function Vs(t) {
    function e(S) {
      return Tl(S, t);
    }
    Wn !== null && Tl(Wn, t), Jn !== null && Tl(Jn, t), $n !== null && Tl($n, t), _s.forEach(e), zs.forEach(e);
    for (var a = 0; a < In.length; a++) {
      var r = In[a];
      r.blockedOn === t && (r.blockedOn = null);
    }
    for (; 0 < In.length && (a = In[0], a.blockedOn === null); )
      oy(a), a.blockedOn === null && In.shift();
    if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
      for (r = 0; r < a.length; r += 3) {
        var u = a[r], c = a[r + 1], y = u[ve] || null;
        if (typeof c == "function")
          y || cy(a);
        else if (y) {
          var v = null;
          if (c && c.hasAttribute("formAction")) {
            if (u = c, y = c[ve] || null)
              v = y.formAction;
            else if (Tc(u) !== null) continue;
          } else v = y.action;
          typeof v == "function" ? a[r + 1] = v : (a.splice(r, 3), r -= 3), cy(a);
        }
      }
  }
  function Ac(t) {
    this._internalRoot = t;
  }
  Al.prototype.render = Ac.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(o(409));
    var a = e.current, r = ze();
    iy(a, r, t, e, null, null);
  }, Al.prototype.unmount = Ac.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      iy(t.current, 2, null, t, null, null), sl(), e[Li] = null;
    }
  };
  function Al(t) {
    this._internalRoot = t;
  }
  Al.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Rm();
      t = { blockedOn: null, target: t, priority: e };
      for (var a = 0; a < In.length && e !== 0 && e < In[a].priority; a++) ;
      In.splice(a, 0, t), a === 0 && oy(t);
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
    currentDispatcherRef: B,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var El = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!El.isDisabled && El.supportsFiber)
      try {
        Ha = El.inject(
          eS
        ), Re = El;
      } catch {
      }
  }
  return Ls.createRoot = function(t, e) {
    if (!m(t)) throw Error(o(299));
    var a = !1, r = "", u = Rh, c = Oh, y = Dh, v = null;
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
    ), t[Li] = e.current, rc(t), new Ac(e);
  }, Ls.hydrateRoot = function(t, e, a) {
    if (!m(t)) throw Error(o(299));
    var r = !1, u = "", c = Rh, y = Oh, v = Dh, S = null, C = null;
    return a != null && (a.unstable_strictMode === !0 && (r = !0), a.identifierPrefix !== void 0 && (u = a.identifierPrefix), a.onUncaughtError !== void 0 && (c = a.onUncaughtError), a.onCaughtError !== void 0 && (y = a.onCaughtError), a.onRecoverableError !== void 0 && (v = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (S = a.unstable_transitionCallbacks), a.formState !== void 0 && (C = a.formState)), e = ey(
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
      C
    ), e.context = ny(null), a = e.current, r = ze(), r = po(r), u = Vn(r), u.callback = null, Bn(a, u, r), a = r, e.current.lanes = a, Pa(e, a), ln(e), t[Li] = e.current, rc(t), new Al(e);
  }, Ls.version = "19.1.0", Ls;
}
var Sy;
function fS() {
  if (Sy) return Mc.exports;
  Sy = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), Mc.exports = cS(), Mc.exports;
}
var mS = fS();
const dS = /* @__PURE__ */ c0(mS);
var K = jf();
const $e = /* @__PURE__ */ c0(K), Ty = (n) => {
  let i;
  const s = /* @__PURE__ */ new Set(), l = (h, g) => {
    const b = typeof h == "function" ? h(i) : h;
    if (!Object.is(b, i)) {
      const x = i;
      i = g ?? (typeof b != "object" || b === null) ? b : Object.assign({}, i, b), s.forEach((D) => D(i, x));
    }
  }, o = () => i, d = { setState: l, getState: o, getInitialState: () => p, subscribe: (h) => (s.add(h), () => s.delete(h)) }, p = i = n(l, o, d);
  return d;
}, hS = (n) => n ? Ty(n) : Ty, pS = (n) => n;
function yS(n, i = pS) {
  const s = $e.useSyncExternalStore(
    n.subscribe,
    () => i(n.getState()),
    () => i(n.getInitialState())
  );
  return $e.useDebugValue(s), s;
}
const gS = (n) => {
  const i = hS(n), s = (l) => yS(i, l);
  return Object.assign(s, i), s;
}, _f = (n) => gS;
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
const Ic = (n) => (i) => {
  try {
    const s = n(i);
    return s instanceof Promise ? s : {
      then(l) {
        return Ic(l)(s);
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
        return Ic(l)(s);
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
  let D;
  const E = () => {
    var R, N;
    if (!h) return;
    f = !1, d.forEach((L) => {
      var H;
      return L((H = l()) != null ? H : x);
    });
    const V = ((N = m.onRehydrateStorage) == null ? void 0 : N.call(m, (R = l()) != null ? R : x)) || void 0;
    return Ic(h.getItem.bind(h))(m.name).then((L) => {
      if (L)
        if (typeof L.version == "number" && L.version !== m.version) {
          if (m.migrate) {
            const H = m.migrate(
              L.state,
              L.version
            );
            return H instanceof Promise ? H.then((W) => [!0, W]) : [!0, H];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, L.state];
      return [!1, void 0];
    }).then((L) => {
      var H;
      const [W, Z] = L;
      if (D = m.merge(
        Z,
        (H = l()) != null ? H : x
      ), s(D, !0), W)
        return g();
    }).then(() => {
      V?.(D, void 0), D = l(), f = !0, p.forEach((L) => L(D));
    }).catch((L) => {
      V?.(void 0, L);
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
  }, m.skipHydration || E(), D || x;
}, zf = bS, sr = _f()(
  zf(
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
), f0 = _f()(
  zf(
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
const AS = K.forwardRef(
  ({
    color: n = "currentColor",
    size: i = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: l,
    className: o = "",
    children: m,
    iconNode: f,
    ...d
  }, p) => K.createElement(
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
      ...f.map(([h, g]) => K.createElement(h, g)),
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
const Jl = (n, i) => {
  const s = K.forwardRef(
    ({ className: l, ...o }, m) => K.createElement(AS, {
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
], tf = Jl("eye-off", ES);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MS = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ef = Jl("eye", MS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RS = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], d0 = Jl("triangle-alert", RS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OS = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], DS = Jl("x", OS), CS = ({ onClickCreateAccount: n }) => {
  const [i, s] = K.useState({
    email: "",
    password: "",
    rememberMe: !1
  }), [l, o] = K.useState(null), [m, f] = K.useState(!1), d = (p) => {
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
              children: m ? /* @__PURE__ */ A.jsx(ef, { className: "mimin-w-4 mimin-h-4" }) : /* @__PURE__ */ A.jsx(tf, { className: "mimin-w-4 mimin-h-4" })
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
}, NS = ({ onClickSignin: n }) => {
  const [i, s] = K.useState({
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: !1
  }), [l, o] = K.useState(!1), [m, f] = K.useState(!1), [d, p] = K.useState(null), h = (g) => {
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
                children: l ? /* @__PURE__ */ A.jsx(ef, { className: "mimin-w-4 mimin-h-4" }) : /* @__PURE__ */ A.jsx(tf, { className: "mimin-w-4 mimin-h-4" })
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
                children: m ? /* @__PURE__ */ A.jsx(ef, { className: "mimin-w-4 mimin-h-4" }) : /* @__PURE__ */ A.jsx(tf, { className: "mimin-w-4 mimin-h-4" })
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
}, jS = () => {
  const [n, i] = K.useState("create-account");
  return /* @__PURE__ */ A.jsxs("div", { className: "mimin-p-4 mimin-h-full mimin-overflow-y-auto", children: [
    n === "sign-in" && /* @__PURE__ */ A.jsx(CS, { onClickCreateAccount: () => i("create-account") }),
    n === "create-account" && /* @__PURE__ */ A.jsx(NS, { onClickSignin: () => i("sign-in") })
  ] });
};
var h0 = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ay = $e.createContext && /* @__PURE__ */ $e.createContext(h0), _S = ["attr", "size", "title"];
function zS(n, i) {
  if (n == null) return {};
  var s = US(n, i), l, o;
  if (Object.getOwnPropertySymbols) {
    var m = Object.getOwnPropertySymbols(n);
    for (o = 0; o < m.length; o++)
      l = m[o], !(i.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(n, l) && (s[l] = n[l]);
  }
  return s;
}
function US(n, i) {
  if (n == null) return {};
  var s = {};
  for (var l in n)
    if (Object.prototype.hasOwnProperty.call(n, l)) {
      if (i.indexOf(l) >= 0) continue;
      s[l] = n[l];
    }
  return s;
}
function ql() {
  return ql = Object.assign ? Object.assign.bind() : function(n) {
    for (var i = 1; i < arguments.length; i++) {
      var s = arguments[i];
      for (var l in s)
        Object.prototype.hasOwnProperty.call(s, l) && (n[l] = s[l]);
    }
    return n;
  }, ql.apply(this, arguments);
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
function Pl(n) {
  for (var i = 1; i < arguments.length; i++) {
    var s = arguments[i] != null ? arguments[i] : {};
    i % 2 ? Ey(Object(s), !0).forEach(function(l) {
      VS(n, l, s[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : Ey(Object(s)).forEach(function(l) {
      Object.defineProperty(n, l, Object.getOwnPropertyDescriptor(s, l));
    });
  }
  return n;
}
function VS(n, i, s) {
  return i = BS(i), i in n ? Object.defineProperty(n, i, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : n[i] = s, n;
}
function BS(n) {
  var i = LS(n, "string");
  return typeof i == "symbol" ? i : i + "";
}
function LS(n, i) {
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
  return n && n.map((i, s) => /* @__PURE__ */ $e.createElement(i.tag, Pl({
    key: s
  }, i.attr), p0(i.child)));
}
function Uf(n) {
  return (i) => /* @__PURE__ */ $e.createElement(kS, ql({
    attr: Pl({}, n.attr)
  }, i), p0(n.child));
}
function kS(n) {
  var i = (s) => {
    var {
      attr: l,
      size: o,
      title: m
    } = n, f = zS(n, _S), d = o || s.size || "1em", p;
    return s.className && (p = s.className), n.className && (p = (p ? p + " " : "") + n.className), /* @__PURE__ */ $e.createElement("svg", ql({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, s.attr, l, f, {
      className: p,
      style: Pl(Pl({
        color: n.color || s.color
      }, s.style), n.style),
      height: d,
      width: d,
      xmlns: "http://www.w3.org/2000/svg"
    }), m && /* @__PURE__ */ $e.createElement("title", null, m), n.children);
  };
  return Ay !== void 0 ? /* @__PURE__ */ $e.createElement(Ay.Consumer, null, (s) => i(s)) : i(h0);
}
function HS(n) {
  return Uf({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M6.758 8.758 5.344 7.344a8.048 8.048 0 0 0-1.841 2.859l1.873.701a6.048 6.048 0 0 1 1.382-2.146zM19 12.999a7.935 7.935 0 0 0-2.344-5.655A7.917 7.917 0 0 0 12 5.069V2L7 6l5 4V7.089a5.944 5.944 0 0 1 3.242 1.669A5.956 5.956 0 0 1 17 13v.002c0 .33-.033.655-.086.977-.007.043-.011.088-.019.131a6.053 6.053 0 0 1-1.138 2.536c-.16.209-.331.412-.516.597a5.954 5.954 0 0 1-.728.613 5.906 5.906 0 0 1-2.277 1.015c-.142.03-.285.05-.43.069-.062.009-.122.021-.184.027a6.104 6.104 0 0 1-1.898-.103L9.3 20.819a8.087 8.087 0 0 0 2.534.136c.069-.007.138-.021.207-.03.205-.026.409-.056.61-.098l.053-.009-.001-.005a7.877 7.877 0 0 0 2.136-.795l.001.001.028-.019a7.906 7.906 0 0 0 1.01-.67c.27-.209.532-.43.777-.675.248-.247.47-.513.681-.785.021-.028.049-.053.07-.081l-.006-.004a7.899 7.899 0 0 0 1.093-1.997l.008.003c.029-.078.05-.158.076-.237.037-.11.075-.221.107-.333.04-.14.073-.281.105-.423.022-.099.048-.195.066-.295.032-.171.056-.344.076-.516.01-.076.023-.15.03-.227.023-.249.037-.5.037-.753.002-.002.002-.004.002-.008zM6.197 16.597l-1.6 1.201a8.045 8.045 0 0 0 2.569 2.225l.961-1.754a6.018 6.018 0 0 1-1.93-1.672zM5 13c0-.145.005-.287.015-.429l-1.994-.143a7.977 7.977 0 0 0 .483 3.372l1.873-.701A5.975 5.975 0 0 1 5 13z" }, child: [] }] })(n);
}
function y0(n) {
  return Uf({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" }, child: [] }] })(n);
}
const qS = ({
  onToggleCallWindow: n,
  onToggleChatWindow: i
}) => {
  const { config: s } = sr(), { setChatType: l, clearInteractions: o } = f0();
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
              alt: "ICON",
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
                HS,
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
                DS,
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
function PS() {
  for (var n, i, s = 0, l = "", o = arguments.length; s < o; s++) (n = arguments[s]) && (i = g0(n)) && (l && (l += " "), l += i);
  return l;
}
const Vf = "-", YS = (n) => {
  const i = XS(n), {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: l
  } = n;
  return {
    getClassGroupId: (f) => {
      const d = f.split(Vf);
      return d[0] === "" && d.length !== 1 && d.shift(), v0(d, i) || GS(f);
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
}, My = /^\[(.+)\]$/, GS = (n) => {
  if (My.test(n)) {
    const i = My.exec(n)[1], s = i?.substring(0, i.indexOf(":"));
    if (s)
      return "arbitrary.." + s;
  }
}, XS = (n) => {
  const {
    theme: i,
    classGroups: s
  } = n, l = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in s)
    nf(s[o], l, o, i);
  return l;
}, nf = (n, i, s, l) => {
  n.forEach((o) => {
    if (typeof o == "string") {
      const m = o === "" ? i : Ry(i, o);
      m.classGroupId = s;
      return;
    }
    if (typeof o == "function") {
      if (KS(o)) {
        nf(o(l), i, s, l);
        return;
      }
      i.validators.push({
        validator: o,
        classGroupId: s
      });
      return;
    }
    Object.entries(o).forEach(([m, f]) => {
      nf(f, Ry(i, m), s, l);
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
}, KS = (n) => n.isThemeGetter, QS = (n) => {
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
}, af = "!", sf = ":", ZS = sf.length, FS = (n) => {
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
        if (R === sf) {
          m.push(o.slice(p, E)), p = E + ZS;
          continue;
        }
        if (R === "/") {
          h = E;
          continue;
        }
      }
      R === "[" ? f++ : R === "]" ? f-- : R === "(" ? d++ : R === ")" && d--;
    }
    const g = m.length === 0 ? o : o.substring(p), b = WS(g), x = b !== g, D = h && h > p ? h - p : void 0;
    return {
      modifiers: m,
      hasImportantModifier: x,
      baseClassName: b,
      maybePostfixModifierPosition: D
    };
  };
  if (i) {
    const o = i + sf, m = l;
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
}, WS = (n) => n.endsWith(af) ? n.substring(0, n.length - 1) : n.startsWith(af) ? n.substring(1) : n, JS = (n) => {
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
}, $S = (n) => ({
  cache: QS(n.cacheSize),
  parseClassName: FS(n),
  sortModifiers: JS(n),
  ...YS(n)
}), IS = /\s+/, tT = (n, i) => {
  const {
    parseClassName: s,
    getClassGroupId: l,
    getConflictingClassGroupIds: o,
    sortModifiers: m
  } = i, f = [], d = n.trim().split(IS);
  let p = "";
  for (let h = d.length - 1; h >= 0; h -= 1) {
    const g = d[h], {
      isExternal: b,
      modifiers: x,
      hasImportantModifier: D,
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
    const L = m(x).join(":"), H = D ? L + af : L, W = H + V;
    if (f.includes(W))
      continue;
    f.push(W);
    const Z = o(V, N);
    for (let Q = 0; Q < Z.length; ++Q) {
      const $ = Z[Q];
      f.push(H + $);
    }
    p = g + (p.length > 0 ? " " + p : p);
  }
  return p;
};
function eT() {
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
function nT(n, ...i) {
  let s, l, o, m = f;
  function f(p) {
    const h = i.reduce((g, b) => b(g), n());
    return s = $S(h), l = s.cache.get, o = s.cache.set, m = d, d(p);
  }
  function d(p) {
    const h = l(p);
    if (h)
      return h;
    const g = tT(p, s);
    return o(p, g), g;
  }
  return function() {
    return m(eT.apply(null, arguments));
  };
}
const ee = (n) => {
  const i = (s) => s[n] || [];
  return i.isThemeGetter = !0, i;
}, x0 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, S0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i, iT = /^\d+\/\d+$/, aT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, sT = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, rT = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, lT = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, oT = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, wa = (n) => iT.test(n), gt = (n) => !!n && !Number.isNaN(Number(n)), ei = (n) => !!n && Number.isInteger(Number(n)), Nc = (n) => n.endsWith("%") && gt(n.slice(0, -1)), On = (n) => aT.test(n), uT = () => !0, cT = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  sT.test(n) && !rT.test(n)
), T0 = () => !1, fT = (n) => lT.test(n), mT = (n) => oT.test(n), dT = (n) => !et(n) && !nt(n), hT = (n) => _a(n, E0, T0), et = (n) => x0.test(n), Ri = (n) => _a(n, M0, cT), jc = (n) => _a(n, bT, gt), Oy = (n) => _a(n, w0, T0), pT = (n) => _a(n, A0, mT), Ml = (n) => _a(n, R0, fT), nt = (n) => S0.test(n), ks = (n) => za(n, M0), yT = (n) => za(n, xT), Dy = (n) => za(n, w0), gT = (n) => za(n, E0), vT = (n) => za(n, A0), Rl = (n) => za(n, R0, !0), _a = (n, i, s) => {
  const l = x0.exec(n);
  return l ? l[1] ? i(l[1]) : s(l[2]) : !1;
}, za = (n, i, s = !1) => {
  const l = S0.exec(n);
  return l ? l[1] ? i(l[1]) : s : !1;
}, w0 = (n) => n === "position" || n === "percentage", A0 = (n) => n === "image" || n === "url", E0 = (n) => n === "length" || n === "size" || n === "bg-size", M0 = (n) => n === "length", bT = (n) => n === "number", xT = (n) => n === "family-name", R0 = (n) => n === "shadow", ST = () => {
  const n = ee("color"), i = ee("font"), s = ee("text"), l = ee("font-weight"), o = ee("tracking"), m = ee("leading"), f = ee("breakpoint"), d = ee("container"), p = ee("spacing"), h = ee("radius"), g = ee("shadow"), b = ee("inset-shadow"), x = ee("text-shadow"), D = ee("drop-shadow"), E = ee("blur"), R = ee("perspective"), N = ee("aspect"), V = ee("ease"), L = ee("animate"), H = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], W = () => [
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
  ], Z = () => [...W(), nt, et], Q = () => ["auto", "hidden", "clip", "visible", "scroll"], $ = () => ["auto", "contain", "none"], G = () => [nt, et, p], ot = () => [wa, "full", "auto", ...G()], rt = () => [ei, "none", "subgrid", nt, et], mt = () => ["auto", {
    span: ["full", ei, nt, et]
  }, ei, nt, et], Tt = () => [ei, "auto", nt, et], Vt = () => ["auto", "min", "max", "fr", nt, et], Ft = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], kt = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], P = () => ["auto", ...G()], B = () => [wa, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...G()], z = () => [n, nt, et], ft = () => [...W(), Dy, Oy, {
    position: [nt, et]
  }], pt = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], w = () => ["auto", "cover", "contain", gT, hT, {
    size: [nt, et]
  }], X = () => [Nc, ks, Ri], J = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    h,
    nt,
    et
  ], F = () => ["", gt, ks, Ri], at = () => ["solid", "dashed", "dotted", "double"], wt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], I = () => [gt, Nc, Dy, Oy], Ct = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    E,
    nt,
    et
  ], At = () => ["none", gt, nt, et], Me = () => ["none", gt, nt, et], oi = () => [gt, nt, et], mn = () => [wa, "full", ...G()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [On],
      breakpoint: [On],
      color: [uT],
      container: [On],
      "drop-shadow": [On],
      ease: ["in", "out", "in-out"],
      font: [dT],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [On],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [On],
      shadow: [On],
      spacing: ["px", gt],
      text: [On],
      "text-shadow": [On],
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
        aspect: ["auto", "square", wa, et, nt, N]
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
        overscroll: $()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": $()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": $()
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
        z: [ei, "auto", nt, et]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [wa, "full", "auto", d, ...G()]
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
        flex: [gt, wa, "auto", "initial", "none", et]
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
        order: [ei, "first", "last", "none", nt, et]
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
        col: mt()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Tt()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Tt()
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
        row: mt()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Tt()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Tt()
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
        "auto-cols": Vt()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Vt()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: G()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": G()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": G()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...Ft(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...kt(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...kt()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Ft()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...kt(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...kt(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": Ft()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...kt(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...kt()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: G()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: G()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: G()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: G()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: G()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: G()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: G()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: G()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: G()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: P()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: P()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: P()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: P()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: P()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: P()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: P()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: P()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: P()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": G()
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
        "space-y": G()
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
        size: B()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [d, "screen", ...B()]
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
          ...B()
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
          ...B()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...B()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...B()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...B()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", s, ks, Ri]
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
        font: [l, nt, jc]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Nc, et]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [yT, et, i]
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
        "line-clamp": [gt, "none", nt, jc]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          m,
          ...G()
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
        decoration: [gt, "from-font", "auto", nt, Ri]
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
        indent: G()
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
        bg: pt()
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
          }, ei, nt, et],
          radial: ["", nt, et],
          conic: [ei, nt, et]
        }, vT, pT]
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
        from: X()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: X()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: X()
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
        outline: ["", gt, ks, Ri]
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
          Rl,
          Ml
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
        "inset-shadow": ["none", b, Rl, Ml]
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
        "ring-offset": [gt, Ri]
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
        "text-shadow": ["none", x, Rl, Ml]
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
        "mix-blend": [...wt(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": wt()
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
        "mask-linear-from": I()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": I()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": z()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": z()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": I()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": I()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": z()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": z()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": I()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": I()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": z()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": z()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": I()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": I()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": z()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": z()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": I()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": I()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": z()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": z()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": I()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": I()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": z()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": z()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": I()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": I()
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
        "mask-radial-from": I()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": I()
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
        "mask-conic-from": I()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": I()
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
        mask: pt()
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
        blur: Ct()
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
          D,
          Rl,
          Ml
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
        "backdrop-blur": Ct()
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
        "border-spacing": G()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": G()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": G()
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
        animate: ["none", L, nt, et]
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
        rotate: At()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": At()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": At()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": At()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Me()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Me()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Me()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Me()
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
        skew: oi()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": oi()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": oi()
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
        translate: mn()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": mn()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": mn()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": mn()
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
        "scroll-m": G()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": G()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": G()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": G()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": G()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": G()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": G()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": G()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": G()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": G()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": G()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": G()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": G()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": G()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": G()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": G()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": G()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": G()
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
        stroke: [gt, ks, Ri, jc]
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
}, TT = /* @__PURE__ */ nT(ST);
function Ol(...n) {
  return TT(PS(n));
}
const wT = (n) => {
  if (!isFinite(n) || isNaN(n)) return "00:00:00";
  n < 0 && (n = 0);
  const i = Math.floor(n / 3600), s = Math.floor(n % 3600 / 60), l = n % 60;
  return [i, s, Math.floor(l)].map((o) => String(o).padStart(2, "0")).join(":");
}, AT = (n) => new Promise((i, s) => {
  const l = new FileReader();
  l.onloadend = () => i(l.result), l.onerror = s, l.readAsDataURL(n);
}), O0 = 6048e5, ET = 864e5, Cy = Symbol.for("constructDateFrom");
function ai(n, i) {
  return typeof n == "function" ? n(i) : n && typeof n == "object" && Cy in n ? n[Cy](i) : n instanceof Date ? new n.constructor(i) : new Date(i);
}
function Ie(n, i) {
  return ai(i || n, n);
}
let MT = {};
function $l() {
  return MT;
}
function Ws(n, i) {
  const s = $l(), l = i?.weekStartsOn ?? i?.locale?.options?.weekStartsOn ?? s.weekStartsOn ?? s.locale?.options?.weekStartsOn ?? 0, o = Ie(n, i?.in), m = o.getDay(), f = (m < l ? 7 : 0) + m - l;
  return o.setDate(o.getDate() - f), o.setHours(0, 0, 0, 0), o;
}
function Yl(n, i) {
  return Ws(n, { ...i, weekStartsOn: 1 });
}
function D0(n, i) {
  const s = Ie(n, i?.in), l = s.getFullYear(), o = ai(s, 0);
  o.setFullYear(l + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const m = Yl(o), f = ai(s, 0);
  f.setFullYear(l, 0, 4), f.setHours(0, 0, 0, 0);
  const d = Yl(f);
  return s.getTime() >= m.getTime() ? l + 1 : s.getTime() >= d.getTime() ? l : l - 1;
}
function Ny(n) {
  const i = Ie(n), s = new Date(
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
function RT(n, ...i) {
  const s = ai.bind(
    null,
    i.find((l) => typeof l == "object")
  );
  return i.map(s);
}
function jy(n, i) {
  const s = Ie(n, i?.in);
  return s.setHours(0, 0, 0, 0), s;
}
function OT(n, i, s) {
  const [l, o] = RT(
    s?.in,
    n,
    i
  ), m = jy(l), f = jy(o), d = +m - Ny(m), p = +f - Ny(f);
  return Math.round((d - p) / ET);
}
function DT(n, i) {
  const s = D0(n, i), l = ai(n, 0);
  return l.setFullYear(s, 0, 4), l.setHours(0, 0, 0, 0), Yl(l);
}
function CT(n) {
  return n instanceof Date || typeof n == "object" && Object.prototype.toString.call(n) === "[object Date]";
}
function NT(n) {
  return !(!CT(n) && typeof n != "number" || isNaN(+Ie(n)));
}
function jT(n, i) {
  const s = Ie(n, i?.in);
  return s.setFullYear(s.getFullYear(), 0, 1), s.setHours(0, 0, 0, 0), s;
}
const _T = {
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
}, zT = (n, i, s) => {
  let l;
  const o = _T[n];
  return typeof o == "string" ? l = o : i === 1 ? l = o.one : l = o.other.replace("{{count}}", i.toString()), s?.addSuffix ? s.comparison && s.comparison > 0 ? "in " + l : l + " ago" : l;
};
function _c(n) {
  return (i = {}) => {
    const s = i.width ? String(i.width) : n.defaultWidth;
    return n.formats[s] || n.formats[n.defaultWidth];
  };
}
const UT = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, VT = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, BT = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, LT = {
  date: _c({
    formats: UT,
    defaultWidth: "full"
  }),
  time: _c({
    formats: VT,
    defaultWidth: "full"
  }),
  dateTime: _c({
    formats: BT,
    defaultWidth: "full"
  })
}, kT = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, HT = (n, i, s, l) => kT[n];
function Hs(n) {
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
const qT = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, PT = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, YT = {
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
}, GT = {
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
}, XT = {
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
}, KT = {
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
}, QT = (n, i) => {
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
}, ZT = {
  ordinalNumber: QT,
  era: Hs({
    values: qT,
    defaultWidth: "wide"
  }),
  quarter: Hs({
    values: PT,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: Hs({
    values: YT,
    defaultWidth: "wide"
  }),
  day: Hs({
    values: GT,
    defaultWidth: "wide"
  }),
  dayPeriod: Hs({
    values: XT,
    defaultWidth: "wide",
    formattingValues: KT,
    defaultFormattingWidth: "wide"
  })
};
function qs(n) {
  return (i, s = {}) => {
    const l = s.width, o = l && n.matchPatterns[l] || n.matchPatterns[n.defaultMatchWidth], m = i.match(o);
    if (!m)
      return null;
    const f = m[0], d = l && n.parsePatterns[l] || n.parsePatterns[n.defaultParseWidth], p = Array.isArray(d) ? WT(d, (b) => b.test(f)) : (
      // [TODO] -- I challenge you to fix the type
      FT(d, (b) => b.test(f))
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
function FT(n, i) {
  for (const s in n)
    if (Object.prototype.hasOwnProperty.call(n, s) && i(n[s]))
      return s;
}
function WT(n, i) {
  for (let s = 0; s < n.length; s++)
    if (i(n[s]))
      return s;
}
function JT(n) {
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
const $T = /^(\d+)(th|st|nd|rd)?/i, IT = /\d+/i, tw = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, ew = {
  any: [/^b/i, /^(a|c)/i]
}, nw = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, iw = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, aw = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, sw = {
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
}, rw = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, lw = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ow = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, uw = {
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
}, cw = {
  ordinalNumber: JT({
    matchPattern: $T,
    parsePattern: IT,
    valueCallback: (n) => parseInt(n, 10)
  }),
  era: qs({
    matchPatterns: tw,
    defaultMatchWidth: "wide",
    parsePatterns: ew,
    defaultParseWidth: "any"
  }),
  quarter: qs({
    matchPatterns: nw,
    defaultMatchWidth: "wide",
    parsePatterns: iw,
    defaultParseWidth: "any",
    valueCallback: (n) => n + 1
  }),
  month: qs({
    matchPatterns: aw,
    defaultMatchWidth: "wide",
    parsePatterns: sw,
    defaultParseWidth: "any"
  }),
  day: qs({
    matchPatterns: rw,
    defaultMatchWidth: "wide",
    parsePatterns: lw,
    defaultParseWidth: "any"
  }),
  dayPeriod: qs({
    matchPatterns: ow,
    defaultMatchWidth: "any",
    parsePatterns: uw,
    defaultParseWidth: "any"
  })
}, fw = {
  code: "en-US",
  formatDistance: zT,
  formatLong: LT,
  formatRelative: HT,
  localize: ZT,
  match: cw,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function mw(n, i) {
  const s = Ie(n, i?.in);
  return OT(s, jT(s)) + 1;
}
function dw(n, i) {
  const s = Ie(n, i?.in), l = +Yl(s) - +DT(s);
  return Math.round(l / O0) + 1;
}
function C0(n, i) {
  const s = Ie(n, i?.in), l = s.getFullYear(), o = $l(), m = i?.firstWeekContainsDate ?? i?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, f = ai(i?.in || n, 0);
  f.setFullYear(l + 1, 0, m), f.setHours(0, 0, 0, 0);
  const d = Ws(f, i), p = ai(i?.in || n, 0);
  p.setFullYear(l, 0, m), p.setHours(0, 0, 0, 0);
  const h = Ws(p, i);
  return +s >= +d ? l + 1 : +s >= +h ? l : l - 1;
}
function hw(n, i) {
  const s = $l(), l = i?.firstWeekContainsDate ?? i?.locale?.options?.firstWeekContainsDate ?? s.firstWeekContainsDate ?? s.locale?.options?.firstWeekContainsDate ?? 1, o = C0(n, i), m = ai(i?.in || n, 0);
  return m.setFullYear(o, 0, l), m.setHours(0, 0, 0, 0), Ws(m, i);
}
function pw(n, i) {
  const s = Ie(n, i?.in), l = +Ws(s, i) - +hw(s, i);
  return Math.round(l / O0) + 1;
}
function Dt(n, i) {
  const s = n < 0 ? "-" : "", l = Math.abs(n).toString().padStart(i, "0");
  return s + l;
}
const ni = {
  // Year
  y(n, i) {
    const s = n.getFullYear(), l = s > 0 ? s : 1 - s;
    return Dt(i === "yy" ? l % 100 : l, i.length);
  },
  // Month
  M(n, i) {
    const s = n.getMonth();
    return i === "M" ? String(s + 1) : Dt(s + 1, 2);
  },
  // Day of the month
  d(n, i) {
    return Dt(n.getDate(), i.length);
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
    return Dt(n.getHours() % 12 || 12, i.length);
  },
  // Hour [0-23]
  H(n, i) {
    return Dt(n.getHours(), i.length);
  },
  // Minute
  m(n, i) {
    return Dt(n.getMinutes(), i.length);
  },
  // Second
  s(n, i) {
    return Dt(n.getSeconds(), i.length);
  },
  // Fraction of second
  S(n, i) {
    const s = i.length, l = n.getMilliseconds(), o = Math.trunc(
      l * Math.pow(10, s - 3)
    );
    return Dt(o, i.length);
  }
}, Aa = {
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
    return ni.y(n, i);
  },
  // Local week-numbering year
  Y: function(n, i, s, l) {
    const o = C0(n, l), m = o > 0 ? o : 1 - o;
    if (i === "YY") {
      const f = m % 100;
      return Dt(f, 2);
    }
    return i === "Yo" ? s.ordinalNumber(m, { unit: "year" }) : Dt(m, i.length);
  },
  // ISO week-numbering year
  R: function(n, i) {
    const s = D0(n);
    return Dt(s, i.length);
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
    return Dt(s, i.length);
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
        return Dt(l, 2);
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
        return Dt(l, 2);
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
        return ni.M(n, i);
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
        return Dt(l + 1, 2);
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
    const o = pw(n, l);
    return i === "wo" ? s.ordinalNumber(o, { unit: "week" }) : Dt(o, i.length);
  },
  // ISO week of year
  I: function(n, i, s) {
    const l = dw(n);
    return i === "Io" ? s.ordinalNumber(l, { unit: "week" }) : Dt(l, i.length);
  },
  // Day of the month
  d: function(n, i, s) {
    return i === "do" ? s.ordinalNumber(n.getDate(), { unit: "date" }) : ni.d(n, i);
  },
  // Day of year
  D: function(n, i, s) {
    const l = mw(n);
    return i === "Do" ? s.ordinalNumber(l, { unit: "dayOfYear" }) : Dt(l, i.length);
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
        return Dt(m, 2);
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
        return Dt(m, i.length);
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
        return Dt(o, i.length);
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
    switch (l === 12 ? o = Aa.noon : l === 0 ? o = Aa.midnight : o = l / 12 >= 1 ? "pm" : "am", i) {
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
    switch (l >= 17 ? o = Aa.evening : l >= 12 ? o = Aa.afternoon : l >= 4 ? o = Aa.morning : o = Aa.night, i) {
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
    return ni.h(n, i);
  },
  // Hour [0-23]
  H: function(n, i, s) {
    return i === "Ho" ? s.ordinalNumber(n.getHours(), { unit: "hour" }) : ni.H(n, i);
  },
  // Hour [0-11]
  K: function(n, i, s) {
    const l = n.getHours() % 12;
    return i === "Ko" ? s.ordinalNumber(l, { unit: "hour" }) : Dt(l, i.length);
  },
  // Hour [1-24]
  k: function(n, i, s) {
    let l = n.getHours();
    return l === 0 && (l = 24), i === "ko" ? s.ordinalNumber(l, { unit: "hour" }) : Dt(l, i.length);
  },
  // Minute
  m: function(n, i, s) {
    return i === "mo" ? s.ordinalNumber(n.getMinutes(), { unit: "minute" }) : ni.m(n, i);
  },
  // Second
  s: function(n, i, s) {
    return i === "so" ? s.ordinalNumber(n.getSeconds(), { unit: "second" }) : ni.s(n, i);
  },
  // Fraction of second
  S: function(n, i) {
    return ni.S(n, i);
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
        return Di(l);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Di(l, ":");
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
        return Di(l);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Di(l, ":");
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
        return "GMT" + Di(l, ":");
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
        return "GMT" + Di(l, ":");
    }
  },
  // Seconds timestamp
  t: function(n, i, s) {
    const l = Math.trunc(+n / 1e3);
    return Dt(l, i.length);
  },
  // Milliseconds timestamp
  T: function(n, i, s) {
    return Dt(+n, i.length);
  }
};
function zy(n, i = "") {
  const s = n > 0 ? "-" : "+", l = Math.abs(n), o = Math.trunc(l / 60), m = l % 60;
  return m === 0 ? s + String(o) : s + String(o) + i + Dt(m, 2);
}
function Uy(n, i) {
  return n % 60 === 0 ? (n > 0 ? "-" : "+") + Dt(Math.abs(n) / 60, 2) : Di(n, i);
}
function Di(n, i = "") {
  const s = n > 0 ? "-" : "+", l = Math.abs(n), o = Dt(Math.trunc(l / 60), 2), m = Dt(l % 60, 2);
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
}, yw = (n, i) => {
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
}, gw = {
  p: N0,
  P: yw
}, vw = /^D+$/, bw = /^Y+$/, xw = ["D", "DD", "YY", "YYYY"];
function Sw(n) {
  return vw.test(n);
}
function Tw(n) {
  return bw.test(n);
}
function ww(n, i, s) {
  const l = Aw(n, i, s);
  if (console.warn(l), xw.includes(n)) throw new RangeError(l);
}
function Aw(n, i, s) {
  const l = n[0] === "Y" ? "years" : "days of the month";
  return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${i}\`) for formatting ${l} to the input \`${s}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Ew = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Mw = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Rw = /^'([^]*?)'?$/, Ow = /''/g, Dw = /[a-zA-Z]/;
function Cw(n, i, s) {
  const l = $l(), o = l.locale ?? fw, m = l.firstWeekContainsDate ?? l.locale?.options?.firstWeekContainsDate ?? 1, f = l.weekStartsOn ?? l.locale?.options?.weekStartsOn ?? 0, d = Ie(n, s?.in);
  if (!NT(d))
    throw new RangeError("Invalid time value");
  let p = i.match(Mw).map((g) => {
    const b = g[0];
    if (b === "p" || b === "P") {
      const x = gw[b];
      return x(g, o.formatLong);
    }
    return g;
  }).join("").match(Ew).map((g) => {
    if (g === "''")
      return { isToken: !1, value: "'" };
    const b = g[0];
    if (b === "'")
      return { isToken: !1, value: Nw(g) };
    if (_y[b])
      return { isToken: !0, value: g };
    if (b.match(Dw))
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
    (Tw(b) || Sw(b)) && ww(b, i, String(n));
    const x = _y[b[0]];
    return x(d, b, o.localize, h);
  }).join("");
}
function Nw(n) {
  const i = n.match(Rw);
  return i ? i[1].replace(Ow, "'") : n;
}
const Dl = ({ message: n, isUser: i = !1, thinking: s = !1, date: l }) => {
  const { config: o } = sr(), m = (f, d) => f.replace(
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
      className: Ol(
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
      className: Ol(
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
            className: Ol(
              "mimin-flex mimin-items-end mimin-gap-3" + (i ? " mimin-flex-row-reverse" : " mimin-flex-row")
            ),
            children: [
              /* @__PURE__ */ A.jsx("div", { className: "mimin-flex mimin-items-end mimin-justify-center mimin-w-3 mimin-h-3", children: i ? /* @__PURE__ */ A.jsx(
                "img",
                {
                  src: o?.theme?.chatWindow?.userMessage?.iconUrl || "https://res.cloudinary.com/dctqloe37/image/upload/v1752570930/circle-user-round_1_ja2oac.svg",
                  alt: " ",
                  width: 100,
                  height: 100,
                  className: "mimin-w-3 mimin-h-3 mimin-aspect-square"
                }
              ) : /* @__PURE__ */ A.jsx(
                "img",
                {
                  src: o?.theme?.chatWindow?.botMessage?.iconUrl || "https://appstaging.mimin.io/favicon.ico",
                  alt: " ",
                  width: 100,
                  height: 100,
                  className: "mimin-w-3 mimin-h-3 mimin-aspect-square"
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
            className: Ol(
              "mimin-absolute mimin-top-full mimin-mt-0.5 mimin-w-fit" + (i ? " mimin-right-0" : " mimin-left-0")
            ),
            children: /* @__PURE__ */ A.jsx("p", { className: "mimin-text-[10px] mimin-font-light mimin-text-gray-500 mimin-w-max", children: Cw(new Date(l), "dd MMMM yyyy, HH:mm") })
          }
        )
      ]
    }
  ) : (console.error("message is null!"), null);
}, jw = ({ messages: n, currentResponseMsg: i, loading: s, fetching: l }) => {
  const o = $e.useRef(null);
  return $e.useEffect(() => {
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
              Dl,
              {
                message: m.human.content,
                isUser: !0,
                date: m.date
              }
            ),
            m.ai && m.ai.content && /* @__PURE__ */ A.jsx(
              Dl,
              {
                message: m.ai.content,
                isUser: !1,
                date: m.date
              }
            )
          ] }, f)) }),
          !l && i && n.length > 0 && !n[0]?.ai && /* @__PURE__ */ A.jsx(
            Dl,
            {
              message: i,
              isUser: !1,
              date: /* @__PURE__ */ new Date()
            }
          ),
          s && !i && /* @__PURE__ */ A.jsx(Dl, { thinking: !0, date: /* @__PURE__ */ new Date() })
        ] }),
        /* @__PURE__ */ A.jsx("div", { ref: o, id: "bottom-ref", className: "mimin-pb-9" })
      ]
    }
  );
};
function _w(n) {
  return Uf({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M3 12.9999H9V10.9999H3V1.84558C3 1.56944 3.22386 1.34558 3.5 1.34558C3.58425 1.34558 3.66714 1.36687 3.74096 1.40747L22.2034 11.5618C22.4454 11.6949 22.5337 11.9989 22.4006 12.2409C22.3549 12.324 22.2865 12.3924 22.2034 12.4381L3.74096 22.5924C3.499 22.7255 3.19497 22.6372 3.06189 22.3953C3.02129 22.3214 3 22.2386 3 22.1543V12.9999Z" }, child: [] }] })(n);
}
const zw = ({
  onSendMessage: n,
  loading: i,
  fetching: s
}) => {
  const [l, o] = K.useState(""), { config: m } = sr(), f = K.useRef(null), d = () => {
    const h = f.current;
    h && (h.style.height = "auto", h.style.height = h.scrollHeight + "px");
  }, p = () => {
    !s && !i && l.length > 0 && (n(l), o(""));
  };
  return /* @__PURE__ */ A.jsxs(
    "div",
    {
      className: "mimin-px-2 mimin-py-2 mimin-overflow-hidden mimin-max-h-full",
      style: {
        backgroundColor: m?.theme?.chatWindow?.textInput?.backgroundColor || "#0096a2",
        overflowAnchor: "none"
      },
      children: [
        /* @__PURE__ */ A.jsxs(
          "form",
          {
            onSubmit: (h) => {
              h.preventDefault(), h.stopPropagation(), p();
            },
            className: "mimin-relative mimin-flex mimin-items-center mimin-gap-2",
            children: [
              /* @__PURE__ */ A.jsx(
                "textarea",
                {
                  className: "mimin-flex-1 mimin-border mimin-rounded-md mimin-p-2 mimin-max-h-[80px] mimin-bg-white mimin-pr-10 mimin-focus:outline mimin-focus:outline-[#ffa100] mimin-resize-none",
                  style: {
                    borderColor: m?.theme?.chatWindow?.textInput?.borderColor || "#ffffff"
                  },
                  placeholder: m?.theme?.chatWindow?.textInput?.placeholder || "Ketik pertanyaan Anda...",
                  rows: 1,
                  value: l,
                  onChange: (h) => o(h.target.value),
                  onInput: d,
                  ref: f
                }
              ),
              /* @__PURE__ */ A.jsx(
                "button",
                {
                  className: "mimin-absolute mimin-right-4 mimin-top-1/2 mimin--translate-y-1/2 mimin-cursor-pointer mimin-disabled:opacity-50 mimin-disabled:cursor-not-allowed",
                  disabled: i || l.trim().length === 0,
                  children: /* @__PURE__ */ A.jsx(
                    _w,
                    {
                      className: "mimin-w-4 mimin-h-4 mimin-text-[#0096a2]",
                      color: m?.theme?.chatWindow?.textInput?.sendButtonColor || "#0096a2"
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ A.jsxs("p", { className: "mimin-text-white mimin-text-[10px] mimin-tracking-wide mimin-text-center mimin-mt-1", children: [
          "Powered by",
          " ",
          /* @__PURE__ */ A.jsx("a", { href: "https://mimin.io", className: "mimin-underline", children: "Mimin" })
        ] })
      ]
    }
  );
}, Bf = K.createContext({});
function Lf(n) {
  const i = K.useRef(null);
  return i.current === null && (i.current = n()), i.current;
}
const kf = typeof window < "u", j0 = kf ? K.useLayoutEffect : K.useEffect, Il = /* @__PURE__ */ K.createContext(null);
function Hf(n, i) {
  n.indexOf(i) === -1 && n.push(i);
}
function qf(n, i) {
  const s = n.indexOf(i);
  s > -1 && n.splice(s, 1);
}
const Dn = (n, i, s) => s > i ? i : s < n ? n : s;
let Pf = () => {
};
const Cn = {}, _0 = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
function z0(n) {
  return typeof n == "object" && n !== null;
}
const U0 = (n) => /^0[^.\s]+$/u.test(n);
// @__NO_SIDE_EFFECTS__
function Yf(n) {
  let i;
  return () => (i === void 0 && (i = n()), i);
}
const Qe = /* @__NO_SIDE_EFFECTS__ */ (n) => n, Uw = (n, i) => (s) => i(n(s)), rr = (...n) => n.reduce(Uw), Js = /* @__NO_SIDE_EFFECTS__ */ (n, i, s) => {
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
const un = /* @__NO_SIDE_EFFECTS__ */ (n) => n * 1e3, cn = /* @__NO_SIDE_EFFECTS__ */ (n) => n / 1e3;
function V0(n, i) {
  return i ? n * (1e3 / i) : 0;
}
const B0 = (n, i, s) => (((1 - 3 * s + 3 * i) * n + (3 * s - 6 * i)) * n + 3 * i) * n, Vw = 1e-7, Bw = 12;
function Lw(n, i, s, l, o) {
  let m, f, d = 0;
  do
    f = i + (s - i) / 2, m = B0(f, l, o) - n, m > 0 ? s = f : i = f;
  while (Math.abs(m) > Vw && ++d < Bw);
  return f;
}
function lr(n, i, s, l) {
  if (n === i && s === l)
    return Qe;
  const o = (m) => Lw(m, 0, 1, n, s);
  return (m) => m === 0 || m === 1 ? m : B0(o(m), i, l);
}
const L0 = (n) => (i) => i <= 0.5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2, k0 = (n) => (i) => 1 - n(1 - i), H0 = /* @__PURE__ */ lr(0.33, 1.53, 0.69, 0.99), Xf = /* @__PURE__ */ k0(H0), q0 = /* @__PURE__ */ L0(Xf), P0 = (n) => (n *= 2) < 1 ? 0.5 * Xf(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1))), Kf = (n) => 1 - Math.sin(Math.acos(n)), Y0 = k0(Kf), G0 = L0(Kf), kw = /* @__PURE__ */ lr(0.42, 0, 1, 1), Hw = /* @__PURE__ */ lr(0, 0, 0.58, 1), X0 = /* @__PURE__ */ lr(0.42, 0, 0.58, 1), qw = (n) => Array.isArray(n) && typeof n[0] != "number", K0 = (n) => Array.isArray(n) && typeof n[0] == "number", Pw = {
  linear: Qe,
  easeIn: kw,
  easeInOut: X0,
  easeOut: Hw,
  circIn: Kf,
  circInOut: G0,
  circOut: Y0,
  backIn: Xf,
  backInOut: q0,
  backOut: H0,
  anticipate: P0
}, Yw = (n) => typeof n == "string", By = (n) => {
  if (K0(n)) {
    Pf(n.length === 4);
    const [i, s, l, o] = n;
    return lr(i, s, l, o);
  } else if (Yw(n))
    return Pw[n];
  return n;
}, Cl = [
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
function Gw(n, i) {
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
const Xw = 40;
function Q0(n, i) {
  let s = !1, l = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, m = () => s = !0, f = Cl.reduce((H, W) => (H[W] = Gw(m), H), {}), { setup: d, read: p, resolveKeyframes: h, preUpdate: g, update: b, preRender: x, render: D, postRender: E } = f, R = () => {
    const H = Cn.useManualTiming ? o.timestamp : performance.now();
    s = !1, Cn.useManualTiming || (o.delta = l ? 1e3 / 60 : Math.max(Math.min(H - o.timestamp, Xw), 1)), o.timestamp = H, o.isProcessing = !0, d.process(o), p.process(o), h.process(o), g.process(o), b.process(o), x.process(o), D.process(o), E.process(o), o.isProcessing = !1, s && i && (l = !1, n(R));
  }, N = () => {
    s = !0, l = !0, o.isProcessing || n(R);
  };
  return { schedule: Cl.reduce((H, W) => {
    const Z = f[W];
    return H[W] = (Q, $ = !1, G = !1) => (s || N(), Z.schedule(Q, $, G)), H;
  }, {}), cancel: (H) => {
    for (let W = 0; W < Cl.length; W++)
      f[Cl[W]].cancel(H);
  }, state: o, steps: f };
}
const { schedule: Lt, cancel: si, state: ue, steps: zc } = /* @__PURE__ */ Q0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Qe, !0);
let zl;
function Kw() {
  zl = void 0;
}
const we = {
  now: () => (zl === void 0 && we.set(ue.isProcessing || Cn.useManualTiming ? ue.timestamp : performance.now()), zl),
  set: (n) => {
    zl = n, queueMicrotask(Kw);
  }
}, Z0 = (n) => (i) => typeof i == "string" && i.startsWith(n), Qf = /* @__PURE__ */ Z0("--"), Qw = /* @__PURE__ */ Z0("var(--"), Zf = (n) => Qw(n) ? Zw.test(n.split("/*")[0].trim()) : !1, Zw = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Ua = {
  test: (n) => typeof n == "number",
  parse: parseFloat,
  transform: (n) => n
}, $s = {
  ...Ua,
  transform: (n) => Dn(0, 1, n)
}, Nl = {
  ...Ua,
  default: 1
}, Xs = (n) => Math.round(n * 1e5) / 1e5, Ff = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Fw(n) {
  return n == null;
}
const Ww = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Wf = (n, i) => (s) => !!(typeof s == "string" && Ww.test(s) && s.startsWith(n) || i && !Fw(s) && Object.prototype.hasOwnProperty.call(s, i)), F0 = (n, i, s) => (l) => {
  if (typeof l != "string")
    return l;
  const [o, m, f, d] = l.match(Ff);
  return {
    [n]: parseFloat(o),
    [i]: parseFloat(m),
    [s]: parseFloat(f),
    alpha: d !== void 0 ? parseFloat(d) : 1
  };
}, Jw = (n) => Dn(0, 255, n), Uc = {
  ...Ua,
  transform: (n) => Math.round(Jw(n))
}, Ni = {
  test: /* @__PURE__ */ Wf("rgb", "red"),
  parse: /* @__PURE__ */ F0("red", "green", "blue"),
  transform: ({ red: n, green: i, blue: s, alpha: l = 1 }) => "rgba(" + Uc.transform(n) + ", " + Uc.transform(i) + ", " + Uc.transform(s) + ", " + Xs($s.transform(l)) + ")"
};
function $w(n) {
  let i = "", s = "", l = "", o = "";
  return n.length > 5 ? (i = n.substring(1, 3), s = n.substring(3, 5), l = n.substring(5, 7), o = n.substring(7, 9)) : (i = n.substring(1, 2), s = n.substring(2, 3), l = n.substring(3, 4), o = n.substring(4, 5), i += i, s += s, l += l, o += o), {
    red: parseInt(i, 16),
    green: parseInt(s, 16),
    blue: parseInt(l, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const rf = {
  test: /* @__PURE__ */ Wf("#"),
  parse: $w,
  transform: Ni.transform
}, or = /* @__NO_SIDE_EFFECTS__ */ (n) => ({
  test: (i) => typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
  parse: parseFloat,
  transform: (i) => `${i}${n}`
}), ii = /* @__PURE__ */ or("deg"), fn = /* @__PURE__ */ or("%"), ct = /* @__PURE__ */ or("px"), Iw = /* @__PURE__ */ or("vh"), tA = /* @__PURE__ */ or("vw"), Ly = {
  ...fn,
  parse: (n) => fn.parse(n) / 100,
  transform: (n) => fn.transform(n * 100)
}, Ea = {
  test: /* @__PURE__ */ Wf("hsl", "hue"),
  parse: /* @__PURE__ */ F0("hue", "saturation", "lightness"),
  transform: ({ hue: n, saturation: i, lightness: s, alpha: l = 1 }) => "hsla(" + Math.round(n) + ", " + fn.transform(Xs(i)) + ", " + fn.transform(Xs(s)) + ", " + Xs($s.transform(l)) + ")"
}, $t = {
  test: (n) => Ni.test(n) || rf.test(n) || Ea.test(n),
  parse: (n) => Ni.test(n) ? Ni.parse(n) : Ea.test(n) ? Ea.parse(n) : rf.parse(n),
  transform: (n) => typeof n == "string" ? n : n.hasOwnProperty("red") ? Ni.transform(n) : Ea.transform(n),
  getAnimatableNone: (n) => {
    const i = $t.parse(n);
    return i.alpha = 0, $t.transform(i);
  }
}, eA = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function nA(n) {
  return isNaN(n) && typeof n == "string" && (n.match(Ff)?.length || 0) + (n.match(eA)?.length || 0) > 0;
}
const W0 = "number", J0 = "color", iA = "var", aA = "var(", ky = "${}", sA = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Is(n) {
  const i = n.toString(), s = [], l = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let m = 0;
  const d = i.replace(sA, (p) => ($t.test(p) ? (l.color.push(m), o.push(J0), s.push($t.parse(p))) : p.startsWith(aA) ? (l.var.push(m), o.push(iA), s.push(p)) : (l.number.push(m), o.push(W0), s.push(parseFloat(p))), ++m, ky)).split(ky);
  return { values: s, split: d, indexes: l, types: o };
}
function $0(n) {
  return Is(n).values;
}
function I0(n) {
  const { split: i, types: s } = Is(n), l = i.length;
  return (o) => {
    let m = "";
    for (let f = 0; f < l; f++)
      if (m += i[f], o[f] !== void 0) {
        const d = s[f];
        d === W0 ? m += Xs(o[f]) : d === J0 ? m += $t.transform(o[f]) : m += o[f];
      }
    return m;
  };
}
const rA = (n) => typeof n == "number" ? 0 : $t.test(n) ? $t.getAnimatableNone(n) : n;
function lA(n) {
  const i = $0(n);
  return I0(n)(i.map(rA));
}
const ri = {
  test: nA,
  parse: $0,
  createTransformer: I0,
  getAnimatableNone: lA
};
function Vc(n, i, s) {
  return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? n + (i - n) * 6 * s : s < 1 / 2 ? i : s < 2 / 3 ? n + (i - n) * (2 / 3 - s) * 6 : n;
}
function oA({ hue: n, saturation: i, lightness: s, alpha: l }) {
  n /= 360, i /= 100, s /= 100;
  let o = 0, m = 0, f = 0;
  if (!i)
    o = m = f = s;
  else {
    const d = s < 0.5 ? s * (1 + i) : s + i - s * i, p = 2 * s - d;
    o = Vc(p, d, n + 1 / 3), m = Vc(p, d, n), f = Vc(p, d, n - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(m * 255),
    blue: Math.round(f * 255),
    alpha: l
  };
}
function Gl(n, i) {
  return (s) => s > 0 ? i : n;
}
const qt = (n, i, s) => n + (i - n) * s, Bc = (n, i, s) => {
  const l = n * n, o = s * (i * i - l) + l;
  return o < 0 ? 0 : Math.sqrt(o);
}, uA = [rf, Ni, Ea], cA = (n) => uA.find((i) => i.test(n));
function Hy(n) {
  const i = cA(n);
  if (!i)
    return !1;
  let s = i.parse(n);
  return i === Ea && (s = oA(s)), s;
}
const qy = (n, i) => {
  const s = Hy(n), l = Hy(i);
  if (!s || !l)
    return Gl(n, i);
  const o = { ...s };
  return (m) => (o.red = Bc(s.red, l.red, m), o.green = Bc(s.green, l.green, m), o.blue = Bc(s.blue, l.blue, m), o.alpha = qt(s.alpha, l.alpha, m), Ni.transform(o));
}, lf = /* @__PURE__ */ new Set(["none", "hidden"]);
function fA(n, i) {
  return lf.has(n) ? (s) => s <= 0 ? n : i : (s) => s >= 1 ? i : n;
}
function mA(n, i) {
  return (s) => qt(n, i, s);
}
function Jf(n) {
  return typeof n == "number" ? mA : typeof n == "string" ? Zf(n) ? Gl : $t.test(n) ? qy : pA : Array.isArray(n) ? tv : typeof n == "object" ? $t.test(n) ? qy : dA : Gl;
}
function tv(n, i) {
  const s = [...n], l = s.length, o = n.map((m, f) => Jf(m)(m, i[f]));
  return (m) => {
    for (let f = 0; f < l; f++)
      s[f] = o[f](m);
    return s;
  };
}
function dA(n, i) {
  const s = { ...n, ...i }, l = {};
  for (const o in s)
    n[o] !== void 0 && i[o] !== void 0 && (l[o] = Jf(n[o])(n[o], i[o]));
  return (o) => {
    for (const m in l)
      s[m] = l[m](o);
    return s;
  };
}
function hA(n, i) {
  const s = [], l = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < i.values.length; o++) {
    const m = i.types[o], f = n.indexes[m][l[m]], d = n.values[f] ?? 0;
    s[o] = d, l[m]++;
  }
  return s;
}
const pA = (n, i) => {
  const s = ri.createTransformer(i), l = Is(n), o = Is(i);
  return l.indexes.var.length === o.indexes.var.length && l.indexes.color.length === o.indexes.color.length && l.indexes.number.length >= o.indexes.number.length ? lf.has(n) && !o.values.length || lf.has(i) && !l.values.length ? fA(n, i) : rr(tv(hA(l, o), o.values), s) : Gl(n, i);
};
function ev(n, i, s) {
  return typeof n == "number" && typeof i == "number" && typeof s == "number" ? qt(n, i, s) : Jf(n)(n, i);
}
const yA = (n) => {
  const i = ({ timestamp: s }) => n(s);
  return {
    start: (s = !0) => Lt.update(i, s),
    stop: () => si(i),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ue.isProcessing ? ue.timestamp : we.now()
  };
}, nv = (n, i, s = 10) => {
  let l = "";
  const o = Math.max(Math.round(i / s), 2);
  for (let m = 0; m < o; m++)
    l += Math.round(n(m / (o - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${l.substring(0, l.length - 2)})`;
}, Xl = 2e4;
function $f(n) {
  let i = 0;
  const s = 50;
  let l = n.next(i);
  for (; !l.done && i < Xl; )
    i += s, l = n.next(i);
  return i >= Xl ? 1 / 0 : i;
}
function gA(n, i = 100, s) {
  const l = s({ ...n, keyframes: [0, i] }), o = Math.min($f(l), Xl);
  return {
    type: "keyframes",
    ease: (m) => l.next(o * m).value / i,
    duration: /* @__PURE__ */ cn(o)
  };
}
const vA = 5;
function iv(n, i, s) {
  const l = Math.max(i - vA, 0);
  return V0(s - n(l), i - l);
}
const Gt = {
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
}, Lc = 1e-3;
function bA({ duration: n = Gt.duration, bounce: i = Gt.bounce, velocity: s = Gt.velocity, mass: l = Gt.mass }) {
  let o, m, f = 1 - i;
  f = Dn(Gt.minDamping, Gt.maxDamping, f), n = Dn(Gt.minDuration, Gt.maxDuration, /* @__PURE__ */ cn(n)), f < 1 ? (o = (h) => {
    const g = h * f, b = g * n, x = g - s, D = of(h, f), E = Math.exp(-b);
    return Lc - x / D * E;
  }, m = (h) => {
    const b = h * f * n, x = b * s + s, D = Math.pow(f, 2) * Math.pow(h, 2) * n, E = Math.exp(-b), R = of(Math.pow(h, 2), f);
    return (-o(h) + Lc > 0 ? -1 : 1) * ((x - D) * E) / R;
  }) : (o = (h) => {
    const g = Math.exp(-h * n), b = (h - s) * n + 1;
    return -Lc + g * b;
  }, m = (h) => {
    const g = Math.exp(-h * n), b = (s - h) * (n * n);
    return g * b;
  });
  const d = 5 / n, p = SA(o, m, d);
  if (n = /* @__PURE__ */ un(n), isNaN(p))
    return {
      stiffness: Gt.stiffness,
      damping: Gt.damping,
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
const xA = 12;
function SA(n, i, s) {
  let l = s;
  for (let o = 1; o < xA; o++)
    l = l - n(l) / i(l);
  return l;
}
function of(n, i) {
  return n * Math.sqrt(1 - i * i);
}
const TA = ["duration", "bounce"], wA = ["stiffness", "damping", "mass"];
function Py(n, i) {
  return i.some((s) => n[s] !== void 0);
}
function AA(n) {
  let i = {
    velocity: Gt.velocity,
    stiffness: Gt.stiffness,
    damping: Gt.damping,
    mass: Gt.mass,
    isResolvedFromDuration: !1,
    ...n
  };
  if (!Py(n, wA) && Py(n, TA))
    if (n.visualDuration) {
      const s = n.visualDuration, l = 2 * Math.PI / (s * 1.2), o = l * l, m = 2 * Dn(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(o);
      i = {
        ...i,
        mass: Gt.mass,
        stiffness: o,
        damping: m
      };
    } else {
      const s = bA(n);
      i = {
        ...i,
        ...s,
        mass: Gt.mass
      }, i.isResolvedFromDuration = !0;
    }
  return i;
}
function Kl(n = Gt.visualDuration, i = Gt.bounce) {
  const s = typeof n != "object" ? {
    visualDuration: n,
    keyframes: [0, 1],
    bounce: i
  } : n;
  let { restSpeed: l, restDelta: o } = s;
  const m = s.keyframes[0], f = s.keyframes[s.keyframes.length - 1], d = { done: !1, value: m }, { stiffness: p, damping: h, mass: g, duration: b, velocity: x, isResolvedFromDuration: D } = AA({
    ...s,
    velocity: -/* @__PURE__ */ cn(s.velocity || 0)
  }), E = x || 0, R = h / (2 * Math.sqrt(p * g)), N = f - m, V = /* @__PURE__ */ cn(Math.sqrt(p / g)), L = Math.abs(N) < 5;
  l || (l = L ? Gt.restSpeed.granular : Gt.restSpeed.default), o || (o = L ? Gt.restDelta.granular : Gt.restDelta.default);
  let H;
  if (R < 1) {
    const Z = of(V, R);
    H = (Q) => {
      const $ = Math.exp(-R * V * Q);
      return f - $ * ((E + R * V * N) / Z * Math.sin(Z * Q) + N * Math.cos(Z * Q));
    };
  } else if (R === 1)
    H = (Z) => f - Math.exp(-V * Z) * (N + (E + V * N) * Z);
  else {
    const Z = V * Math.sqrt(R * R - 1);
    H = (Q) => {
      const $ = Math.exp(-R * V * Q), G = Math.min(Z * Q, 300);
      return f - $ * ((E + R * V * N) * Math.sinh(G) + Z * N * Math.cosh(G)) / Z;
    };
  }
  const W = {
    calculatedDuration: D && b || null,
    next: (Z) => {
      const Q = H(Z);
      if (D)
        d.done = Z >= b;
      else {
        let $ = Z === 0 ? E : 0;
        R < 1 && ($ = Z === 0 ? /* @__PURE__ */ un(E) : iv(H, Z, Q));
        const G = Math.abs($) <= l, ot = Math.abs(f - Q) <= o;
        d.done = G && ot;
      }
      return d.value = d.done ? f : Q, d;
    },
    toString: () => {
      const Z = Math.min($f(W), Xl), Q = nv(($) => W.next(Z * $).value, Z, 30);
      return Z + "ms " + Q;
    },
    toTransition: () => {
    }
  };
  return W;
}
Kl.applyToOptions = (n) => {
  const i = gA(n, 100, Kl);
  return n.ease = i.ease, n.duration = /* @__PURE__ */ un(i.duration), n.type = "keyframes", n;
};
function uf({ keyframes: n, velocity: i = 0, power: s = 0.8, timeConstant: l = 325, bounceDamping: o = 10, bounceStiffness: m = 500, modifyTarget: f, min: d, max: p, restDelta: h = 0.5, restSpeed: g }) {
  const b = n[0], x = {
    done: !1,
    value: b
  }, D = (G) => d !== void 0 && G < d || p !== void 0 && G > p, E = (G) => d === void 0 ? p : p === void 0 || Math.abs(d - G) < Math.abs(p - G) ? d : p;
  let R = s * i;
  const N = b + R, V = f === void 0 ? N : f(N);
  V !== N && (R = V - b);
  const L = (G) => -R * Math.exp(-G / l), H = (G) => V + L(G), W = (G) => {
    const ot = L(G), rt = H(G);
    x.done = Math.abs(ot) <= h, x.value = x.done ? V : rt;
  };
  let Z, Q;
  const $ = (G) => {
    D(x.value) && (Z = G, Q = Kl({
      keyframes: [x.value, E(x.value)],
      velocity: iv(H, G, x.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: m,
      restDelta: h,
      restSpeed: g
    }));
  };
  return $(0), {
    calculatedDuration: null,
    next: (G) => {
      let ot = !1;
      return !Q && Z === void 0 && (ot = !0, W(G), $(G)), Z !== void 0 && G >= Z ? Q.next(G - Z) : (!ot && W(G), x);
    }
  };
}
function EA(n, i, s) {
  const l = [], o = s || Cn.mix || ev, m = n.length - 1;
  for (let f = 0; f < m; f++) {
    let d = o(n[f], n[f + 1]);
    if (i) {
      const p = Array.isArray(i) ? i[f] || Qe : i;
      d = rr(p, d);
    }
    l.push(d);
  }
  return l;
}
function MA(n, i, { clamp: s = !0, ease: l, mixer: o } = {}) {
  const m = n.length;
  if (Pf(m === i.length), m === 1)
    return () => i[0];
  if (m === 2 && i[0] === i[1])
    return () => i[1];
  const f = n[0] === n[1];
  n[0] > n[m - 1] && (n = [...n].reverse(), i = [...i].reverse());
  const d = EA(i, l, o), p = d.length, h = (g) => {
    if (f && g < n[0])
      return i[0];
    let b = 0;
    if (p > 1)
      for (; b < n.length - 2 && !(g < n[b + 1]); b++)
        ;
    const x = /* @__PURE__ */ Js(n[b], n[b + 1], g);
    return d[b](x);
  };
  return s ? (g) => h(Dn(n[0], n[m - 1], g)) : h;
}
function RA(n, i) {
  const s = n[n.length - 1];
  for (let l = 1; l <= i; l++) {
    const o = /* @__PURE__ */ Js(0, i, l);
    n.push(qt(s, 1, o));
  }
}
function OA(n) {
  const i = [0];
  return RA(i, n.length - 1), i;
}
function DA(n, i) {
  return n.map((s) => s * i);
}
function CA(n, i) {
  return n.map(() => i || X0).splice(0, n.length - 1);
}
function Ks({ duration: n = 300, keyframes: i, times: s, ease: l = "easeInOut" }) {
  const o = qw(l) ? l.map(By) : By(l), m = {
    done: !1,
    value: i[0]
  }, f = DA(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    s && s.length === i.length ? s : OA(i),
    n
  ), d = MA(f, i, {
    ease: Array.isArray(o) ? o : CA(i, o)
  });
  return {
    calculatedDuration: n,
    next: (p) => (m.value = d(p), m.done = p >= n, m)
  };
}
const NA = (n) => n !== null;
function If(n, { repeat: i, repeatType: s = "loop" }, l, o = 1) {
  const m = n.filter(NA), d = o < 0 || i && s !== "loop" && i % 2 === 1 ? 0 : m.length - 1;
  return !d || l === void 0 ? m[d] : l;
}
const jA = {
  decay: uf,
  inertia: uf,
  tween: Ks,
  keyframes: Ks,
  spring: Kl
};
function av(n) {
  typeof n.type == "string" && (n.type = jA[n.type]);
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
const _A = (n) => n / 100;
class em extends tm {
  constructor(i) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const { motionValue: s } = this.options;
      s && s.updatedAt !== we.now() && this.tick(we.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = i, this.initAnimation(), this.play(), i.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: i } = this;
    av(i);
    const { type: s = Ks, repeat: l = 0, repeatDelay: o = 0, repeatType: m, velocity: f = 0 } = i;
    let { keyframes: d } = i;
    const p = s || Ks;
    p !== Ks && typeof d[0] != "number" && (this.mixKeyframes = rr(_A, ev(d[0], d[1])), d = [0, 100]);
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
    const { delay: h = 0, keyframes: g, repeat: b, repeatType: x, repeatDelay: D, type: E, onUpdate: R, finalKeyframe: N } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, i) : this.speed < 0 && (this.startTime = Math.min(i - o / this.speed, this.startTime)), s ? this.currentTime = i : this.updateTime(i);
    const V = this.currentTime - h * (this.playbackSpeed >= 0 ? 1 : -1), L = this.playbackSpeed >= 0 ? V < 0 : V > o;
    this.currentTime = Math.max(V, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = o);
    let H = this.currentTime, W = l;
    if (b) {
      const G = Math.min(this.currentTime, o) / d;
      let ot = Math.floor(G), rt = G % 1;
      !rt && G >= 1 && (rt = 1), rt === 1 && ot--, ot = Math.min(ot, b + 1), !!(ot % 2) && (x === "reverse" ? (rt = 1 - rt, D && (rt -= D / d)) : x === "mirror" && (W = f)), H = Dn(0, 1, rt) * d;
    }
    const Z = L ? { done: !1, value: g[0] } : W.next(H);
    m && (Z.value = m(Z.value));
    let { done: Q } = Z;
    !L && p !== null && (Q = this.playbackSpeed >= 0 ? this.currentTime >= o : this.currentTime <= 0);
    const $ = this.holdTime === null && (this.state === "finished" || this.state === "running" && Q);
    return $ && E !== uf && (Z.value = If(g, this.options, N, this.speed)), R && R(Z.value), $ && this.finish(), Z;
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
    return /* @__PURE__ */ cn(this.calculatedDuration);
  }
  get time() {
    return /* @__PURE__ */ cn(this.currentTime);
  }
  set time(i) {
    i = /* @__PURE__ */ un(i), this.currentTime = i, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = i : this.driver && (this.startTime = this.driver.now() - i / this.playbackSpeed), this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(i) {
    this.updateTime(we.now());
    const s = this.playbackSpeed !== i;
    this.playbackSpeed = i, s && (this.time = /* @__PURE__ */ cn(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: i = yA, startTime: s } = this.options;
    this.driver || (this.driver = i((o) => this.tick(o))), this.options.onPlay?.();
    const l = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = l) : this.holdTime !== null ? this.startTime = l - this.holdTime : this.startTime || (this.startTime = s ?? l), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(we.now()), this.holdTime = this.currentTime;
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
function zA(n) {
  for (let i = 1; i < n.length; i++)
    n[i] ?? (n[i] = n[i - 1]);
}
const ji = (n) => n * 180 / Math.PI, cf = (n) => {
  const i = ji(Math.atan2(n[1], n[0]));
  return ff(i);
}, UA = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (n) => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
  rotate: cf,
  rotateZ: cf,
  skewX: (n) => ji(Math.atan(n[1])),
  skewY: (n) => ji(Math.atan(n[2])),
  skew: (n) => (Math.abs(n[1]) + Math.abs(n[2])) / 2
}, ff = (n) => (n = n % 360, n < 0 && (n += 360), n), Yy = cf, Gy = (n) => Math.sqrt(n[0] * n[0] + n[1] * n[1]), Xy = (n) => Math.sqrt(n[4] * n[4] + n[5] * n[5]), VA = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Gy,
  scaleY: Xy,
  scale: (n) => (Gy(n) + Xy(n)) / 2,
  rotateX: (n) => ff(ji(Math.atan2(n[6], n[5]))),
  rotateY: (n) => ff(ji(Math.atan2(-n[2], n[0]))),
  rotateZ: Yy,
  rotate: Yy,
  skewX: (n) => ji(Math.atan(n[4])),
  skewY: (n) => ji(Math.atan(n[1])),
  skew: (n) => (Math.abs(n[1]) + Math.abs(n[4])) / 2
};
function mf(n) {
  return n.includes("scale") ? 1 : 0;
}
function df(n, i) {
  if (!n || n === "none")
    return mf(i);
  const s = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let l, o;
  if (s)
    l = VA, o = s;
  else {
    const d = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    l = UA, o = d;
  }
  if (!o)
    return mf(i);
  const m = l[i], f = o[1].split(",").map(LA);
  return typeof m == "function" ? m(f) : f[m];
}
const BA = (n, i) => {
  const { transform: s = "none" } = getComputedStyle(n);
  return df(s, i);
};
function LA(n) {
  return parseFloat(n.trim());
}
const Va = [
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
], Ba = new Set(Va), Ky = (n) => n === Ua || n === ct, kA = /* @__PURE__ */ new Set(["x", "y", "z"]), HA = Va.filter((n) => !kA.has(n));
function qA(n) {
  const i = [];
  return HA.forEach((s) => {
    const l = n.getValue(s);
    l !== void 0 && (i.push([s, l.get()]), l.set(s.startsWith("scale") ? 1 : 0));
  }), i;
}
const zi = {
  // Dimensions
  width: ({ x: n }, { paddingLeft: i = "0", paddingRight: s = "0" }) => n.max - n.min - parseFloat(i) - parseFloat(s),
  height: ({ y: n }, { paddingTop: i = "0", paddingBottom: s = "0" }) => n.max - n.min - parseFloat(i) - parseFloat(s),
  top: (n, { top: i }) => parseFloat(i),
  left: (n, { left: i }) => parseFloat(i),
  bottom: ({ y: n }, { top: i }) => parseFloat(i) + (n.max - n.min),
  right: ({ x: n }, { left: i }) => parseFloat(i) + (n.max - n.min),
  // Transform
  x: (n, { transform: i }) => df(i, "x"),
  y: (n, { transform: i }) => df(i, "y")
};
zi.translateX = zi.x;
zi.translateY = zi.y;
const Ui = /* @__PURE__ */ new Set();
let hf = !1, pf = !1, yf = !1;
function sv() {
  if (pf) {
    const n = Array.from(Ui).filter((l) => l.needsMeasurement), i = new Set(n.map((l) => l.element)), s = /* @__PURE__ */ new Map();
    i.forEach((l) => {
      const o = qA(l);
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
  pf = !1, hf = !1, Ui.forEach((n) => n.complete(yf)), Ui.clear();
}
function rv() {
  Ui.forEach((n) => {
    n.readKeyframes(), n.needsMeasurement && (pf = !0);
  });
}
function PA() {
  yf = !0, rv(), sv(), yf = !1;
}
class nm {
  constructor(i, s, l, o, m, f = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...i], this.onComplete = s, this.name = l, this.motionValue = o, this.element = m, this.isAsync = f;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Ui.add(this), hf || (hf = !0, Lt.read(rv), Lt.resolveKeyframes(sv))) : (this.readKeyframes(), this.complete());
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
    zA(i);
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
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i), Ui.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Ui.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const YA = (n) => n.startsWith("--");
function GA(n, i, s) {
  YA(i) ? n.style.setProperty(i, s) : n.style[i] = s;
}
const XA = /* @__PURE__ */ Yf(() => window.ScrollTimeline !== void 0), KA = {};
function QA(n, i) {
  const s = /* @__PURE__ */ Yf(n);
  return () => KA[i] ?? s();
}
const lv = /* @__PURE__ */ QA(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Gs = ([n, i, s, l]) => `cubic-bezier(${n}, ${i}, ${s}, ${l})`, Qy = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Gs([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Gs([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Gs([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Gs([0.33, 1.53, 0.69, 0.99])
};
function ov(n, i) {
  if (n)
    return typeof n == "function" ? lv() ? nv(n, i) : "ease-out" : K0(n) ? Gs(n) : Array.isArray(n) ? n.map((s) => ov(s, i) || Qy.easeOut) : Qy[n];
}
function ZA(n, i, s, { delay: l = 0, duration: o = 300, repeat: m = 0, repeatType: f = "loop", ease: d = "easeOut", times: p } = {}, h = void 0) {
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
function FA({ type: n, ...i }) {
  return uv(n) && lv() ? n.applyToOptions(i) : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i);
}
class WA extends tm {
  constructor(i) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !i)
      return;
    const { element: s, name: l, keyframes: o, pseudoElement: m, allowFlatten: f = !1, finalKeyframe: d, onComplete: p } = i;
    this.isPseudoElement = !!m, this.allowFlatten = f, this.options = i, Pf(typeof i.type != "string");
    const h = FA(i);
    this.animation = ZA(s, l, o, h, m), h.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !m) {
        const g = If(o, this.options, d, this.speed);
        this.updateMotionValue ? this.updateMotionValue(g) : GA(s, l, g), this.animation.cancel();
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
    return /* @__PURE__ */ cn(Number(i));
  }
  get time() {
    return /* @__PURE__ */ cn(Number(this.animation.currentTime) || 0);
  }
  set time(i) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ un(i);
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
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, i && XA() ? (this.animation.timeline = i, Qe) : s(this);
  }
}
const cv = {
  anticipate: P0,
  backInOut: q0,
  circInOut: G0
};
function JA(n) {
  return n in cv;
}
function $A(n) {
  typeof n.ease == "string" && JA(n.ease) && (n.ease = cv[n.ease]);
}
const Zy = 10;
class IA extends WA {
  constructor(i) {
    $A(i), av(i), super(i), i.startTime && (this.startTime = i.startTime), this.options = i;
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
    }), p = /* @__PURE__ */ un(this.finishedTime ?? this.time);
    s.setWithVelocity(d.sample(p - Zy).value, d.sample(p).value, Zy), d.stop();
  }
}
const Fy = (n, i) => i === "zIndex" ? !1 : !!(typeof n == "number" || Array.isArray(n) || typeof n == "string" && // It's animatable if we have a string
(ri.test(n) || n === "0") && // And it contains numbers and/or colors
!n.startsWith("url("));
function tE(n) {
  const i = n[0];
  if (n.length === 1)
    return !0;
  for (let s = 0; s < n.length; s++)
    if (n[s] !== i)
      return !0;
}
function eE(n, i, s, l) {
  const o = n[0];
  if (o === null)
    return !1;
  if (i === "display" || i === "visibility")
    return !0;
  const m = n[n.length - 1], f = Fy(o, i), d = Fy(m, i);
  return !f || !d ? !1 : tE(n) || (s === "spring" || uv(s)) && l;
}
const nE = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), iE = /* @__PURE__ */ Yf(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function aE(n) {
  const { motionValue: i, name: s, repeatDelay: l, repeatType: o, damping: m, type: f } = n;
  if (!(i?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: p, transformTemplate: h } = i.owner.getProps();
  return iE() && s && nE.has(s) && (s !== "transform" || !h) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !p && !l && o !== "mirror" && m !== 0 && f !== "inertia";
}
const sE = 40;
class rE extends tm {
  constructor({ autoplay: i = !0, delay: s = 0, type: l = "keyframes", repeat: o = 0, repeatDelay: m = 0, repeatType: f = "loop", keyframes: d, name: p, motionValue: h, element: g, ...b }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = we.now();
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
    }, D = g?.KeyframeResolver || nm;
    this.keyframeResolver = new D(d, (E, R, N) => this.onKeyframesResolved(E, R, x, !N), p, h, g), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(i, s, l, o) {
    this.keyframeResolver = void 0;
    const { name: m, type: f, velocity: d, delay: p, isHandoff: h, onUpdate: g } = l;
    this.resolvedAt = we.now(), eE(i, m, f, d) || ((Cn.instantAnimations || !p) && g?.(If(i, l, s)), i[0] = i[i.length - 1], l.duration = 0, l.repeat = 0);
    const x = {
      startTime: o ? this.resolvedAt ? this.resolvedAt - this.createdAt > sE ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: s,
      ...l,
      keyframes: i
    }, D = !h && aE(x) ? new IA({
      ...x,
      element: x.motionValue.owner.current
    }) : new em(x);
    D.finished.then(() => this.notifyFinished()).catch(Qe), this.pendingTimeline && (this.stopTimeline = D.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = D;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(i, s) {
    return this.finished.finally(i).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), PA()), this._animation;
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
const lE = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function oE(n) {
  const i = lE.exec(n);
  if (!i)
    return [,];
  const [, s, l, o] = i;
  return [`--${s ?? l}`, o];
}
function fv(n, i, s = 1) {
  const [l, o] = oE(n);
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
  ...Va
]), uE = {
  test: (n) => n === "auto",
  parse: (n) => n
}, dv = (n) => (i) => i.test(n), hv = [Ua, ct, fn, ii, tA, Iw, uE], Wy = (n) => hv.find(dv(n));
function cE(n) {
  return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || U0(n) : !0;
}
const fE = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function mE(n) {
  const [i, s] = n.slice(0, -1).split("(");
  if (i === "drop-shadow")
    return n;
  const [l] = s.match(Ff) || [];
  if (!l)
    return n;
  const o = s.replace(l, "");
  let m = fE.has(i) ? 1 : 0;
  return l !== s && (m *= 100), i + "(" + m + o + ")";
}
const dE = /\b([a-z-]*)\(.*?\)/gu, gf = {
  ...ri,
  getAnimatableNone: (n) => {
    const i = n.match(dE);
    return i ? i.map(mE).join(" ") : n;
  }
}, Jy = {
  ...Ua,
  transform: Math.round
}, hE = {
  rotate: ii,
  rotateX: ii,
  rotateY: ii,
  rotateZ: ii,
  scale: Nl,
  scaleX: Nl,
  scaleY: Nl,
  scaleZ: Nl,
  skew: ii,
  skewX: ii,
  skewY: ii,
  distance: ct,
  translateX: ct,
  translateY: ct,
  translateZ: ct,
  x: ct,
  y: ct,
  z: ct,
  perspective: ct,
  transformPerspective: ct,
  opacity: $s,
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
  ...hE,
  zIndex: Jy,
  // SVG
  fillOpacity: $s,
  strokeOpacity: $s,
  numOctaves: Jy
}, pE = {
  ...am,
  // Color props
  color: $t,
  backgroundColor: $t,
  outlineColor: $t,
  fill: $t,
  stroke: $t,
  // Border props
  borderColor: $t,
  borderTopColor: $t,
  borderRightColor: $t,
  borderBottomColor: $t,
  borderLeftColor: $t,
  filter: gf,
  WebkitFilter: gf
}, pv = (n) => pE[n];
function yv(n, i) {
  let s = pv(n);
  return s !== gf && (s = ri), s.getAnimatableNone ? s.getAnimatableNone(i) : void 0;
}
const yE = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function gE(n, i, s) {
  let l = 0, o;
  for (; l < n.length && !o; ) {
    const m = n[l];
    typeof m == "string" && !yE.has(m) && Is(m).values.length && (o = n[l]), l++;
  }
  if (o && s)
    for (const m of i)
      n[m] = yv(s, o);
}
class vE extends nm {
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
      else zi[l] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: s } = this, l = [];
    for (let o = 0; o < i.length; o++)
      (i[o] === null || cE(i[o])) && l.push(o);
    l.length && gE(i, l, s);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: s, name: l } = this;
    if (!i || !i.current)
      return;
    l === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = zi[l](i.measureViewportBox(), window.getComputedStyle(i.current)), s[0] = this.measuredOrigin;
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
    l[m] = zi[s](i.measureViewportBox(), window.getComputedStyle(i.current)), f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f), this.removedTransforms?.length && this.removedTransforms.forEach(([d, p]) => {
      i.getValue(d).set(p);
    }), this.resolveNoneKeyframes();
  }
}
function bE(n, i, s) {
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
const $y = 30, xE = (n) => !isNaN(parseFloat(n));
class SE {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(i, s = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (l, o = !0) => {
      const m = we.now();
      if (this.updatedAt !== m && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(l), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const f of this.dependents)
          f.dirty();
      o && this.events.renderRequest?.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(i), this.owner = s.owner;
  }
  setCurrent(i) {
    this.current = i, this.updatedAt = we.now(), this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = xE(this.current));
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
    const i = we.now();
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
function Na(n, i) {
  return new SE(n, i);
}
const { schedule: sm } = /* @__PURE__ */ Q0(queueMicrotask, !1), Je = {
  x: !1,
  y: !1
};
function bv() {
  return Je.x || Je.y;
}
function TE(n) {
  return n === "x" || n === "y" ? Je[n] ? null : (Je[n] = !0, () => {
    Je[n] = !1;
  }) : Je.x || Je.y ? null : (Je.x = Je.y = !0, () => {
    Je.x = Je.y = !1;
  });
}
function xv(n, i) {
  const s = bE(n), l = new AbortController(), o = {
    passive: !0,
    ...i,
    signal: l.signal
  };
  return [s, o, () => l.abort()];
}
function Iy(n) {
  return !(n.pointerType === "touch" || bv());
}
function wE(n, i, s = {}) {
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
const Sv = (n, i) => i ? n === i ? !0 : Sv(n, i.parentElement) : !1, rm = (n) => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1, AE = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function EE(n) {
  return AE.has(n.tagName) || n.tabIndex !== -1;
}
const Ul = /* @__PURE__ */ new WeakSet();
function tg(n) {
  return (i) => {
    i.key === "Enter" && n(i);
  };
}
function kc(n, i) {
  n.dispatchEvent(new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }));
}
const ME = (n, i) => {
  const s = n.currentTarget;
  if (!s)
    return;
  const l = tg(() => {
    if (Ul.has(s))
      return;
    kc(s, "down");
    const o = tg(() => {
      kc(s, "up");
    }), m = () => kc(s, "cancel");
    s.addEventListener("keyup", o, i), s.addEventListener("blur", m, i);
  });
  s.addEventListener("keydown", l, i), s.addEventListener("blur", () => s.removeEventListener("keydown", l), i);
};
function eg(n) {
  return rm(n) && !bv();
}
function RE(n, i, s = {}) {
  const [l, o, m] = xv(n, s), f = (d) => {
    const p = d.currentTarget;
    if (!eg(d))
      return;
    Ul.add(p);
    const h = i(p, d), g = (D, E) => {
      window.removeEventListener("pointerup", b), window.removeEventListener("pointercancel", x), Ul.has(p) && Ul.delete(p), eg(D) && typeof h == "function" && h(D, { success: E });
    }, b = (D) => {
      g(D, p === window || p === document || s.useGlobalTarget || Sv(p, D.target));
    }, x = (D) => {
      g(D, !1);
    };
    window.addEventListener("pointerup", b, o), window.addEventListener("pointercancel", x, o);
  };
  return l.forEach((d) => {
    (s.useGlobalTarget ? window : d).addEventListener("pointerdown", f, o), vv(d) && (d.addEventListener("focus", (h) => ME(h, o)), !EE(d) && !d.hasAttribute("tabindex") && (d.tabIndex = 0));
  }), m;
}
function Tv(n) {
  return z0(n) && "ownerSVGElement" in n;
}
function OE(n) {
  return Tv(n) && n.tagName === "svg";
}
const he = (n) => !!(n && n.getVelocity), DE = [...hv, $t, ri], CE = (n) => DE.find(dv(n)), lm = K.createContext({
  transformPagePoint: (n) => n,
  isStatic: !1,
  reducedMotion: "never"
});
class NE extends K.Component {
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
function jE({ children: n, isPresent: i, anchorX: s, root: l }) {
  const o = K.useId(), m = K.useRef(null), f = K.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: d } = K.useContext(lm);
  return K.useInsertionEffect(() => {
    const { width: p, height: h, top: g, left: b, right: x } = f.current;
    if (i || !m.current || !p || !h)
      return;
    const D = s === "left" ? `left: ${b}` : `right: ${x}`;
    m.current.dataset.motionPopId = o;
    const E = document.createElement("style");
    d && (E.nonce = d);
    const R = l ?? document.head;
    return R.appendChild(E), E.sheet && E.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${h}px !important;
            ${D}px !important;
            top: ${g}px !important;
          }
        `), () => {
      R.removeChild(E), R.contains(E) && R.removeChild(E);
    };
  }, [i]), A.jsx(NE, { isPresent: i, childRef: m, sizeRef: f, children: K.cloneElement(n, { ref: m }) });
}
const _E = ({ children: n, initial: i, isPresent: s, onExitComplete: l, custom: o, presenceAffectsLayout: m, mode: f, anchorX: d, root: p }) => {
  const h = Lf(zE), g = K.useId();
  let b = !0, x = K.useMemo(() => (b = !1, {
    id: g,
    initial: i,
    isPresent: s,
    custom: o,
    onExitComplete: (D) => {
      h.set(D, !0);
      for (const E of h.values())
        if (!E)
          return;
      l && l();
    },
    register: (D) => (h.set(D, !1), () => h.delete(D))
  }), [s, h, l]);
  return m && b && (x = { ...x }), K.useMemo(() => {
    h.forEach((D, E) => h.set(E, !1));
  }, [s]), K.useEffect(() => {
    !s && !h.size && l && l();
  }, [s]), f === "popLayout" && (n = A.jsx(jE, { isPresent: s, anchorX: d, root: p, children: n })), A.jsx(Il.Provider, { value: x, children: n });
};
function zE() {
  return /* @__PURE__ */ new Map();
}
function wv(n = !0) {
  const i = K.useContext(Il);
  if (i === null)
    return [!0, null];
  const { isPresent: s, onExitComplete: l, register: o } = i, m = K.useId();
  K.useEffect(() => {
    if (n)
      return o(m);
  }, [n]);
  const f = K.useCallback(() => n && l && l(m), [m, l, n]);
  return !s && l ? [!1, f] : [!0];
}
const jl = (n) => n.key || "";
function ng(n) {
  const i = [];
  return K.Children.forEach(n, (s) => {
    K.isValidElement(s) && i.push(s);
  }), i;
}
const UE = ({ children: n, custom: i, initial: s = !0, onExitComplete: l, presenceAffectsLayout: o = !0, mode: m = "sync", propagate: f = !1, anchorX: d = "left", root: p }) => {
  const [h, g] = wv(f), b = K.useMemo(() => ng(n), [n]), x = f && !h ? [] : b.map(jl), D = K.useRef(!0), E = K.useRef(b), R = Lf(() => /* @__PURE__ */ new Map()), [N, V] = K.useState(b), [L, H] = K.useState(b);
  j0(() => {
    D.current = !1, E.current = b;
    for (let Q = 0; Q < L.length; Q++) {
      const $ = jl(L[Q]);
      x.includes($) ? R.delete($) : R.get($) !== !0 && R.set($, !1);
    }
  }, [L, x.length, x.join("-")]);
  const W = [];
  if (b !== N) {
    let Q = [...b];
    for (let $ = 0; $ < L.length; $++) {
      const G = L[$], ot = jl(G);
      x.includes(ot) || (Q.splice($, 0, G), W.push(G));
    }
    return m === "wait" && W.length && (Q = W), H(ng(Q)), V(b), null;
  }
  const { forceRender: Z } = K.useContext(Bf);
  return A.jsx(A.Fragment, { children: L.map((Q) => {
    const $ = jl(Q), G = f && !h ? !1 : b === L || x.includes($), ot = () => {
      if (R.has($))
        R.set($, !0);
      else
        return;
      let rt = !0;
      R.forEach((mt) => {
        mt || (rt = !1);
      }), rt && (Z?.(), H(E.current), f && g?.(), l && l());
    };
    return A.jsx(_E, { isPresent: G, initial: !D.current || s ? void 0 : !1, custom: i, presenceAffectsLayout: o, mode: m, root: p, onExitComplete: G ? void 0 : ot, anchorX: d, children: Q }, $);
  }) });
}, Av = K.createContext({ strict: !1 }), ig = {
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
}, ja = {};
for (const n in ig)
  ja[n] = {
    isEnabled: (i) => ig[n].some((s) => !!i[s])
  };
function VE(n) {
  for (const i in n)
    ja[i] = {
      ...ja[i],
      ...n[i]
    };
}
const BE = /* @__PURE__ */ new Set([
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
function Ql(n) {
  return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || BE.has(n);
}
let Ev = (n) => !Ql(n);
function LE(n) {
  typeof n == "function" && (Ev = (i) => i.startsWith("on") ? !Ql(i) : n(i));
}
try {
  LE(require("@emotion/is-prop-valid").default);
} catch {
}
function kE(n, i, s) {
  const l = {};
  for (const o in n)
    o === "values" && typeof n.values == "object" || (Ev(o) || s === !0 && Ql(o) || !i && !Ql(o) || // If trying to use native HTML drag events, forward drag listeners
    n.draggable && o.startsWith("onDrag")) && (l[o] = n[o]);
  return l;
}
const to = /* @__PURE__ */ K.createContext({});
function eo(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
function tr(n) {
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
function no(n) {
  return eo(n.animate) || um.some((i) => tr(n[i]));
}
function Mv(n) {
  return !!(no(n) || n.variants);
}
function HE(n, i) {
  if (no(n)) {
    const { initial: s, animate: l } = n;
    return {
      initial: s === !1 || tr(s) ? s : void 0,
      animate: tr(l) ? l : void 0
    };
  }
  return n.inherit !== !1 ? i : {};
}
function qE(n) {
  const { initial: i, animate: s } = HE(n, K.useContext(to));
  return K.useMemo(() => ({ initial: i, animate: s }), [ag(i), ag(s)]);
}
function ag(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const er = {};
function PE(n) {
  for (const i in n)
    er[i] = n[i], Qf(i) && (er[i].isCSSVariable = !0);
}
function Rv(n, { layout: i, layoutId: s }) {
  return Ba.has(n) || n.startsWith("origin") || (i || s !== void 0) && (!!er[n] || n === "opacity");
}
const YE = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, GE = Va.length;
function XE(n, i, s) {
  let l = "", o = !0;
  for (let m = 0; m < GE; m++) {
    const f = Va[m], d = n[f];
    if (d === void 0)
      continue;
    let p = !0;
    if (typeof d == "number" ? p = d === (f.startsWith("scale") ? 1 : 0) : p = parseFloat(d) === 0, !p || s) {
      const h = gv(d, am[f]);
      if (!p) {
        o = !1;
        const g = YE[f] || f;
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
    if (Ba.has(p)) {
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
  if (i.transform || (f || s ? l.transform = XE(i, n.transform, s) : l.transform && (l.transform = "none")), d) {
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
function KE({ transformTemplate: n }, i) {
  return K.useMemo(() => {
    const s = fm();
    return cm(s, i, n), Object.assign({}, s.vars, s.style);
  }, [i]);
}
function QE(n, i) {
  const s = n.style || {}, l = {};
  return Ov(l, s, n), Object.assign(l, KE(n, i)), l;
}
function ZE(n, i) {
  const s = {}, l = QE(n, i);
  return n.drag && n.dragListener !== !1 && (s.draggable = !1, l.userSelect = l.WebkitUserSelect = l.WebkitTouchCallout = "none", l.touchAction = n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`), n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (s.tabIndex = 0), s.style = l, s;
}
const FE = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, WE = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function JE(n, i, s = 1, l = 0, o = !0) {
  n.pathLength = 1;
  const m = o ? FE : WE;
  n[m.offset] = ct.transform(-l);
  const f = ct.transform(i), d = ct.transform(s);
  n[m.array] = `${f} ${d}`;
}
function Dv(n, {
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
  b.transform && (x.transform = b.transform, delete b.transform), (x.transform || b.transformOrigin) && (x.transformOrigin = b.transformOrigin ?? "50% 50%", delete b.transformOrigin), x.transform && (x.transformBox = g?.transformBox ?? "fill-box", delete b.transformBox), i !== void 0 && (b.x = i), s !== void 0 && (b.y = s), l !== void 0 && (b.scale = l), o !== void 0 && JE(b, o, m, f, !1);
}
const Cv = () => ({
  ...fm(),
  attrs: {}
}), Nv = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function $E(n, i, s, l) {
  const o = K.useMemo(() => {
    const m = Cv();
    return Dv(m, i, Nv(l), n.transformTemplate, n.style), {
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
const IE = [
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
      !!(IE.indexOf(n) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(n))
    )
  );
}
function tM(n, i, s, { latestValues: l }, o, m = !1) {
  const d = (mm(n) ? $E : ZE)(i, l, o, n), p = kE(i, typeof n == "string", m), h = n !== K.Fragment ? { ...p, ...d, ref: s } : {}, { children: g } = i, b = K.useMemo(() => he(g) ? g.get() : g, [g]);
  return K.createElement(n, {
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
function Vl(n) {
  return he(n) ? n.get() : n;
}
function eM({ scrapeMotionValuesFromProps: n, createRenderState: i }, s, l, o) {
  return {
    latestValues: nM(s, l, o, n),
    renderState: i()
  };
}
function nM(n, i, s, l) {
  const o = {}, m = l(n, {});
  for (const x in m)
    o[x] = Vl(m[x]);
  let { initial: f, animate: d } = n;
  const p = no(n), h = Mv(n);
  i && h && !p && n.inherit !== !1 && (f === void 0 && (f = i.initial), d === void 0 && (d = i.animate));
  let g = s ? s.initial === !1 : !1;
  g = g || f === !1;
  const b = g ? d : f;
  if (b && typeof b != "boolean" && !eo(b)) {
    const x = Array.isArray(b) ? b : [b];
    for (let D = 0; D < x.length; D++) {
      const E = dm(n, x[D]);
      if (E) {
        const { transitionEnd: R, transition: N, ...V } = E;
        for (const L in V) {
          let H = V[L];
          if (Array.isArray(H)) {
            const W = g ? H.length - 1 : 0;
            H = H[W];
          }
          H !== null && (o[L] = H);
        }
        for (const L in R)
          o[L] = R[L];
      }
    }
  }
  return o;
}
const jv = (n) => (i, s) => {
  const l = K.useContext(to), o = K.useContext(Il), m = () => eM(n, i, l, o);
  return s ? m() : Lf(m);
};
function hm(n, i, s) {
  const { style: l } = n, o = {};
  for (const m in l)
    (he(l[m]) || i.style && he(i.style[m]) || Rv(m, n) || s?.getValue(m)?.liveStyle !== void 0) && (o[m] = l[m]);
  return o;
}
const iM = /* @__PURE__ */ jv({
  scrapeMotionValuesFromProps: hm,
  createRenderState: fm
});
function _v(n, i, s) {
  const l = hm(n, i, s);
  for (const o in n)
    if (he(n[o]) || he(i[o])) {
      const m = Va.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      l[m] = n[o];
    }
  return l;
}
const aM = /* @__PURE__ */ jv({
  scrapeMotionValuesFromProps: _v,
  createRenderState: Cv
}), sM = Symbol.for("motionComponentSymbol");
function Ma(n) {
  return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current");
}
function rM(n, i, s) {
  return K.useCallback(
    (l) => {
      l && n.onMount && n.onMount(l), i && (l ? i.mount(l) : i.unmount()), s && (typeof s == "function" ? s(l) : Ma(s) && (s.current = l));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [i]
  );
}
const pm = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), lM = "framerAppearId", zv = "data-" + pm(lM), Uv = K.createContext({});
function oM(n, i, s, l, o) {
  const { visualElement: m } = K.useContext(to), f = K.useContext(Av), d = K.useContext(Il), p = K.useContext(lm).reducedMotion, h = K.useRef(null);
  l = l || f.renderer, !h.current && l && (h.current = l(n, {
    visualState: i,
    parent: m,
    props: s,
    presenceContext: d,
    blockInitialAnimation: d ? d.initial === !1 : !1,
    reducedMotionConfig: p
  }));
  const g = h.current, b = K.useContext(Uv);
  g && !g.projection && o && (g.type === "html" || g.type === "svg") && uM(h.current, s, o, b);
  const x = K.useRef(!1);
  K.useInsertionEffect(() => {
    g && x.current && g.update(s, d);
  });
  const D = s[zv], E = K.useRef(!!D && !window.MotionHandoffIsComplete?.(D) && window.MotionHasOptimisedAnimation?.(D));
  return j0(() => {
    g && (x.current = !0, window.MotionIsMounted = !0, g.updateFeatures(), g.scheduleRenderMicrotask(), E.current && g.animationState && g.animationState.animateChanges());
  }), K.useEffect(() => {
    g && (!E.current && g.animationState && g.animationState.animateChanges(), E.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(D);
    }), E.current = !1));
  }), g;
}
function uM(n, i, s, l) {
  const { layoutId: o, layout: m, drag: f, dragConstraints: d, layoutScroll: p, layoutRoot: h, layoutCrossfade: g } = i;
  n.projection = new s(n.latestValues, i["data-framer-portal-id"] ? void 0 : Vv(n.parent)), n.projection.setOptions({
    layoutId: o,
    layout: m,
    alwaysMeasureLayout: !!f || d && Ma(d),
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
function Hc(n, { forwardMotionProps: i = !1 } = {}, s, l) {
  s && VE(s);
  const o = mm(n) ? aM : iM;
  function m(d, p) {
    let h;
    const g = {
      ...K.useContext(lm),
      ...d,
      layoutId: cM(d)
    }, { isStatic: b } = g, x = qE(d), D = o(d, b);
    if (!b && kf) {
      fM();
      const E = mM(g);
      h = E.MeasureLayout, x.visualElement = oM(n, D, g, l, E.ProjectionNode);
    }
    return A.jsxs(to.Provider, { value: x, children: [h && x.visualElement ? A.jsx(h, { visualElement: x.visualElement, ...g }) : null, tM(n, d, rM(D, x.visualElement, p), D, b, i)] });
  }
  m.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
  const f = K.forwardRef(m);
  return f[sM] = n, f;
}
function cM({ layoutId: n }) {
  const i = K.useContext(Bf).id;
  return i && n !== void 0 ? i + "-" + n : n;
}
function fM(n, i) {
  K.useContext(Av).strict;
}
function mM(n) {
  const { drag: i, layout: s } = ja;
  if (!i && !s)
    return {};
  const l = { ...i, ...s };
  return {
    MeasureLayout: i?.isEnabled(n) || s?.isEnabled(n) ? l.MeasureLayout : void 0,
    ProjectionNode: l.ProjectionNode
  };
}
function dM(n, i) {
  if (typeof Proxy > "u")
    return Hc;
  const s = /* @__PURE__ */ new Map(), l = (m, f) => Hc(m, f, n, i), o = (m, f) => l(m, f);
  return new Proxy(o, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (m, f) => f === "create" ? l : (s.has(f) || s.set(f, Hc(f, void 0, n, i)), s.get(f))
  });
}
function Bv({ top: n, left: i, right: s, bottom: l }) {
  return {
    x: { min: i, max: s },
    y: { min: n, max: l }
  };
}
function hM({ x: n, y: i }) {
  return { top: i.min, right: n.max, bottom: i.max, left: n.min };
}
function pM(n, i) {
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
function qc(n) {
  return n === void 0 || n === 1;
}
function vf({ scale: n, scaleX: i, scaleY: s }) {
  return !qc(n) || !qc(i) || !qc(s);
}
function Ci(n) {
  return vf(n) || Lv(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY;
}
function Lv(n) {
  return rg(n.x) || rg(n.y);
}
function rg(n) {
  return n && n !== "0%";
}
function Zl(n, i, s) {
  const l = n - s, o = i * l;
  return s + o;
}
function lg(n, i, s, l, o) {
  return o !== void 0 && (n = Zl(n, o, l)), Zl(n, s, l) + i;
}
function bf(n, i = 0, s = 1, l, o) {
  n.min = lg(n.min, i, s, l, o), n.max = lg(n.max, i, s, l, o);
}
function kv(n, { x: i, y: s }) {
  bf(n.x, i.translate, i.scale, i.originPoint), bf(n.y, s.translate, s.scale, s.originPoint);
}
const og = 0.999999999999, ug = 1.0000000000001;
function yM(n, i, s, l = !1) {
  const o = s.length;
  if (!o)
    return;
  i.x = i.y = 1;
  let m, f;
  for (let d = 0; d < o; d++) {
    m = s[d], f = m.projectionDelta;
    const { visualElement: p } = m.options;
    p && p.props.style && p.props.style.display === "contents" || (l && m.options.layoutScroll && m.scroll && m !== m.root && Oa(n, {
      x: -m.scroll.offset.x,
      y: -m.scroll.offset.y
    }), f && (i.x *= f.x.scale, i.y *= f.y.scale, kv(n, f)), l && Ci(m.latestValues) && Oa(n, m.latestValues));
  }
  i.x < ug && i.x > og && (i.x = 1), i.y < ug && i.y > og && (i.y = 1);
}
function Ra(n, i) {
  n.min = n.min + i, n.max = n.max + i;
}
function cg(n, i, s, l, o = 0.5) {
  const m = qt(n.min, n.max, o);
  bf(n, i, s, m, l);
}
function Oa(n, i) {
  cg(n.x, i.x, i.scaleX, i.scale, i.originX), cg(n.y, i.y, i.scaleY, i.scale, i.originY);
}
function Hv(n, i) {
  return Bv(pM(n.getBoundingClientRect(), i));
}
function gM(n, i, s) {
  const l = Hv(n, s), { scroll: o } = i;
  return o && (Ra(l.x, o.offset.x), Ra(l.y, o.offset.y)), l;
}
const fg = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Da = () => ({
  x: fg(),
  y: fg()
}), mg = () => ({ min: 0, max: 0 }), Qt = () => ({
  x: mg(),
  y: mg()
}), xf = { current: null }, qv = { current: !1 };
function vM() {
  if (qv.current = !0, !!kf)
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"), i = () => xf.current = n.matches;
      n.addEventListener("change", i), i();
    } else
      xf.current = !1;
}
const bM = /* @__PURE__ */ new WeakMap();
function xM(n, i, s) {
  for (const l in i) {
    const o = i[l], m = s[l];
    if (he(o))
      n.addValue(l, o);
    else if (he(m))
      n.addValue(l, Na(o, { owner: n }));
    else if (m !== o)
      if (n.hasValue(l)) {
        const f = n.getValue(l);
        f.liveStyle === !0 ? f.jump(o) : f.hasAnimated || f.set(o);
      } else {
        const f = n.getStaticValue(l);
        n.addValue(l, Na(f !== void 0 ? f : o, { owner: n }));
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
class SM {
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
      const x = we.now();
      this.renderScheduledAt < x && (this.renderScheduledAt = x, Lt.render(this.render, !1, !0));
    };
    const { latestValues: p, renderState: h } = f;
    this.latestValues = p, this.baseTarget = { ...p }, this.initialValues = s.initial ? { ...p } : {}, this.renderState = h, this.parent = i, this.props = s, this.presenceContext = l, this.depth = i ? i.depth + 1 : 0, this.reducedMotionConfig = o, this.options = d, this.blockInitialAnimation = !!m, this.isControllingVariants = no(s), this.isVariantNode = Mv(s), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(i && i.current);
    const { willChange: g, ...b } = this.scrapeMotionValuesFromProps(s, {}, this);
    for (const x in b) {
      const D = b[x];
      p[x] !== void 0 && he(D) && D.set(p[x], !1);
    }
  }
  mount(i) {
    this.current = i, bM.set(i, this), this.projection && !this.projection.instance && this.projection.mount(i), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((s, l) => this.bindToMotionValue(l, s)), qv.current || vM(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : xf.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), si(this.notifyUpdate), si(this.render), this.valueSubscriptions.forEach((i) => i()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const l = Ba.has(i);
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
    for (i in ja) {
      const s = ja[i];
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
    this.prevMotionValues = xM(this, this.scrapeMotionValuesFromProps(i, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    return l === void 0 && s !== void 0 && (l = Na(s === null ? void 0 : s, { owner: this }), this.addValue(i, l)), l;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(i, s) {
    let l = this.latestValues[i] !== void 0 || !this.current ? this.latestValues[i] : this.getBaseTargetFromProps(this.props, i) ?? this.readValueFromInstance(this.current, i, this.options);
    return l != null && (typeof l == "string" && (_0(l) || U0(l)) ? l = parseFloat(l) : !CE(l) && ri.test(s) && (l = yv(i, s)), this.setBaseTarget(i, he(l) ? l.get() : l)), he(l) ? l.get() : l;
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
class Pv extends SM {
  constructor() {
    super(...arguments), this.KeyframeResolver = vE;
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
function TM(n) {
  return window.getComputedStyle(n);
}
class wM extends Pv {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Yv;
  }
  readValueFromInstance(i, s) {
    if (Ba.has(s))
      return this.projection?.isProjecting ? mf(s) : BA(i, s);
    {
      const l = TM(i), o = (Qf(s) ? l.getPropertyValue(s) : l[s]) || 0;
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
function AM(n, i, s, l) {
  Yv(n, i, void 0, l);
  for (const o in i.attrs)
    n.setAttribute(Gv.has(o) ? o : pm(o), i.attrs[o]);
}
class EM extends Pv {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Qt;
  }
  getBaseTargetFromProps(i, s) {
    return i[s];
  }
  readValueFromInstance(i, s) {
    if (Ba.has(s)) {
      const l = pv(s);
      return l && l.default || 0;
    }
    return s = Gv.has(s) ? s : pm(s), i.getAttribute(s);
  }
  scrapeMotionValuesFromProps(i, s, l) {
    return _v(i, s, l);
  }
  build(i, s, l) {
    Dv(i, s, this.isSVGTag, l.transformTemplate, l.style);
  }
  renderInstance(i, s, l, o) {
    AM(i, s, l, o);
  }
  mount(i) {
    this.isSVGTag = Nv(i.tagName), super.mount(i);
  }
}
const MM = (n, i) => mm(n) ? new EM(i) : new wM(i, {
  allowProjection: n !== K.Fragment
});
function nr(n, i, s) {
  const l = n.getProps();
  return dm(l, i, s !== void 0 ? s : l.custom, n);
}
const Sf = (n) => Array.isArray(n);
function RM(n, i, s) {
  n.hasValue(i) ? n.getValue(i).set(s) : n.addValue(i, Na(s));
}
function OM(n) {
  return Sf(n) ? n[n.length - 1] || 0 : n;
}
function DM(n, i) {
  const s = nr(n, i);
  let { transitionEnd: l = {}, transition: o = {}, ...m } = s || {};
  m = { ...m, ...l };
  for (const f in m) {
    const d = OM(m[f]);
    RM(n, f, d);
  }
}
function CM(n) {
  return !!(he(n) && n.add);
}
function Tf(n, i) {
  const s = n.getValue("willChange");
  if (CM(s))
    return s.add(i);
  if (!s && Cn.WillChange) {
    const l = new Cn.WillChange("auto");
    n.addValue("willChange", l), l.add(i);
  }
}
function Xv(n) {
  return n.props[zv];
}
const NM = (n) => n !== null;
function jM(n, { repeat: i, repeatType: s = "loop" }, l) {
  const o = n.filter(NM), m = i && s !== "loop" && i % 2 === 1 ? 0 : o.length - 1;
  return o[m];
}
const _M = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, zM = (n) => ({
  type: "spring",
  stiffness: 550,
  damping: n === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), UM = {
  type: "keyframes",
  duration: 0.8
}, VM = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, BM = (n, { keyframes: i }) => i.length > 2 ? UM : Ba.has(n) ? n.startsWith("scale") ? zM(i[1]) : _M : VM;
function LM({ when: n, delay: i, delayChildren: s, staggerChildren: l, staggerDirection: o, repeat: m, repeatType: f, repeatDelay: d, from: p, elapsed: h, ...g }) {
  return !!Object.keys(g).length;
}
const ym = (n, i, s, l = {}, o, m) => (f) => {
  const d = im(l, n) || {}, p = d.delay || l.delay || 0;
  let { elapsed: h = 0 } = l;
  h = h - /* @__PURE__ */ un(p);
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
  LM(d) || Object.assign(g, BM(n, g)), g.duration && (g.duration = /* @__PURE__ */ un(g.duration)), g.repeatDelay && (g.repeatDelay = /* @__PURE__ */ un(g.repeatDelay)), g.from !== void 0 && (g.keyframes[0] = g.from);
  let b = !1;
  if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (g.duration = 0, g.delay === 0 && (b = !0)), (Cn.instantAnimations || Cn.skipAnimations) && (b = !0, g.duration = 0, g.delay = 0), g.allowFlatten = !d.type && !d.ease, b && !m && i.get() !== void 0) {
    const x = jM(g.keyframes, d);
    if (x !== void 0) {
      Lt.update(() => {
        g.onUpdate(x), g.onComplete();
      });
      return;
    }
  }
  return d.isSync ? new em(g) : new rE(g);
};
function kM({ protectedKeys: n, needsAnimating: i }, s) {
  const l = n.hasOwnProperty(s) && i[s] !== !0;
  return i[s] = !1, l;
}
function Kv(n, i, { delay: s = 0, transitionOverride: l, type: o } = {}) {
  let { transition: m = n.getDefaultTransition(), transitionEnd: f, ...d } = i;
  l && (m = l);
  const p = [], h = o && n.animationState && n.animationState.getState()[o];
  for (const g in d) {
    const b = n.getValue(g, n.latestValues[g] ?? null), x = d[g];
    if (x === void 0 || h && kM(h, g))
      continue;
    const D = {
      delay: s,
      ...im(m || {}, g)
    }, E = b.get();
    if (E !== void 0 && !b.isAnimating && !Array.isArray(x) && x === E && !D.velocity)
      continue;
    let R = !1;
    if (window.MotionHandoffAnimation) {
      const V = Xv(n);
      if (V) {
        const L = window.MotionHandoffAnimation(V, g, Lt);
        L !== null && (D.startTime = L, R = !0);
      }
    }
    Tf(n, g), b.start(ym(g, b, x, n.shouldReduceMotion && mv.has(g) ? { type: !1 } : D, n, R));
    const N = b.animation;
    N && p.push(N);
  }
  return f && Promise.all(p).then(() => {
    Lt.update(() => {
      f && DM(n, f);
    });
  }), p;
}
function wf(n, i, s = {}) {
  const l = nr(n, i, s.type === "exit" ? n.presenceContext?.custom : void 0);
  let { transition: o = n.getDefaultTransition() || {} } = l || {};
  s.transitionOverride && (o = s.transitionOverride);
  const m = l ? () => Promise.all(Kv(n, l, s)) : () => Promise.resolve(), f = n.variantChildren && n.variantChildren.size ? (p = 0) => {
    const { delayChildren: h = 0, staggerChildren: g, staggerDirection: b } = o;
    return HM(n, i, p, h, g, b, s);
  } : () => Promise.resolve(), { when: d } = o;
  if (d) {
    const [p, h] = d === "beforeChildren" ? [m, f] : [f, m];
    return p().then(() => h());
  } else
    return Promise.all([m(), f(s.delay)]);
}
function HM(n, i, s = 0, l = 0, o = 0, m = 1, f) {
  const d = [], p = n.variantChildren.size, h = (p - 1) * o, g = typeof l == "function", b = g ? (x) => l(x, p) : (
    // Support deprecated staggerChildren
    m === 1 ? (x = 0) => x * o : (x = 0) => h - x * o
  );
  return Array.from(n.variantChildren).sort(qM).forEach((x, D) => {
    x.notify("AnimationStart", i), d.push(wf(x, i, {
      ...f,
      delay: s + (g ? 0 : l) + b(D)
    }).then(() => x.notify("AnimationComplete", i)));
  }), Promise.all(d);
}
function qM(n, i) {
  return n.sortNodePosition(i);
}
function PM(n, i, s = {}) {
  n.notify("AnimationStart", i);
  let l;
  if (Array.isArray(i)) {
    const o = i.map((m) => wf(n, m, s));
    l = Promise.all(o);
  } else if (typeof i == "string")
    l = wf(n, i, s);
  else {
    const o = typeof i == "function" ? nr(n, i, s.custom) : i;
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
const YM = um.length;
function Zv(n) {
  if (!n)
    return;
  if (!n.isControllingVariants) {
    const s = n.parent ? Zv(n.parent) || {} : {};
    return n.props.initial !== void 0 && (s.initial = n.props.initial), s;
  }
  const i = {};
  for (let s = 0; s < YM; s++) {
    const l = um[s], o = n.props[l];
    (tr(o) || o === !1) && (i[l] = o);
  }
  return i;
}
const GM = [...om].reverse(), XM = om.length;
function KM(n) {
  return (i) => Promise.all(i.map(({ animation: s, options: l }) => PM(n, s, l)));
}
function QM(n) {
  let i = KM(n), s = hg(), l = !0;
  const o = (p) => (h, g) => {
    const b = nr(n, g, p === "exit" ? n.presenceContext?.custom : void 0);
    if (b) {
      const { transition: x, transitionEnd: D, ...E } = b;
      h = { ...h, ...E, ...D };
    }
    return h;
  };
  function m(p) {
    i = p(n);
  }
  function f(p) {
    const { props: h } = n, g = Zv(n.parent) || {}, b = [], x = /* @__PURE__ */ new Set();
    let D = {}, E = 1 / 0;
    for (let N = 0; N < XM; N++) {
      const V = GM[N], L = s[V], H = h[V] !== void 0 ? h[V] : g[V], W = tr(H), Z = V === p ? L.isActive : null;
      Z === !1 && (E = N);
      let Q = H === g[V] && H !== h[V] && W;
      if (Q && l && n.manuallyAnimateOnMount && (Q = !1), L.protectedKeys = { ...D }, // If it isn't active and hasn't *just* been set as inactive
      !L.isActive && Z === null || // If we didn't and don't have any defined prop for this animation type
      !H && !L.prevProp || // Or if the prop doesn't define an animation
      eo(H) || typeof H == "boolean")
        continue;
      const $ = ZM(L.prevProp, H);
      let G = $ || // If we're making this variant active, we want to always make it active
      V === p && L.isActive && !Q && W || // If we removed a higher-priority variant (i is in reverse order)
      N > E && W, ot = !1;
      const rt = Array.isArray(H) ? H : [H];
      let mt = rt.reduce(o(V), {});
      Z === !1 && (mt = {});
      const { prevResolvedValues: Tt = {} } = L, Vt = {
        ...Tt,
        ...mt
      }, Ft = (B) => {
        G = !0, x.has(B) && (ot = !0, x.delete(B)), L.needsAnimating[B] = !0;
        const z = n.getValue(B);
        z && (z.liveStyle = !1);
      };
      for (const B in Vt) {
        const z = mt[B], ft = Tt[B];
        if (D.hasOwnProperty(B))
          continue;
        let pt = !1;
        Sf(z) && Sf(ft) ? pt = !Qv(z, ft) : pt = z !== ft, pt ? z != null ? Ft(B) : x.add(B) : z !== void 0 && x.has(B) ? Ft(B) : L.protectedKeys[B] = !0;
      }
      L.prevProp = H, L.prevResolvedValues = mt, L.isActive && (D = { ...D, ...mt }), l && n.blockInitialAnimation && (G = !1), G && (!(Q && $) || ot) && b.push(...rt.map((B) => ({
        animation: B,
        options: { type: V }
      })));
    }
    if (x.size) {
      const N = {};
      if (typeof h.initial != "boolean") {
        const V = nr(n, Array.isArray(h.initial) ? h.initial[0] : h.initial);
        V && V.transition && (N.transition = V.transition);
      }
      x.forEach((V) => {
        const L = n.getBaseTarget(V), H = n.getValue(V);
        H && (H.liveStyle = !0), N[V] = L ?? null;
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
function ZM(n, i) {
  return typeof i == "string" ? i !== n : Array.isArray(i) ? !Qv(i, n) : !1;
}
function Oi(n = !1) {
  return {
    isActive: n,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function hg() {
  return {
    animate: Oi(!0),
    whileInView: Oi(),
    whileHover: Oi(),
    whileTap: Oi(),
    whileDrag: Oi(),
    whileFocus: Oi(),
    exit: Oi()
  };
}
class li {
  constructor(i) {
    this.isMounted = !1, this.node = i;
  }
  update() {
  }
}
class FM extends li {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(i) {
    super(i), i.animationState || (i.animationState = QM(i));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    eo(i) && (this.unmountControls = i.subscribe(this.node));
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
let WM = 0;
class JM extends li {
  constructor() {
    super(...arguments), this.id = WM++;
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
const $M = {
  animation: {
    Feature: FM
  },
  exit: {
    Feature: JM
  }
};
function ir(n, i, s, l = { passive: !0 }) {
  return n.addEventListener(i, s, l), () => n.removeEventListener(i, s);
}
function ur(n) {
  return {
    point: {
      x: n.pageX,
      y: n.pageY
    }
  };
}
const IM = (n) => (i) => rm(i) && n(i, ur(i));
function Qs(n, i, s, l) {
  return ir(n, i, IM(s), l);
}
const Fv = 1e-4, tR = 1 - Fv, eR = 1 + Fv, Wv = 0.01, nR = 0 - Wv, iR = 0 + Wv;
function ge(n) {
  return n.max - n.min;
}
function aR(n, i, s) {
  return Math.abs(n - i) <= s;
}
function pg(n, i, s, l = 0.5) {
  n.origin = l, n.originPoint = qt(i.min, i.max, n.origin), n.scale = ge(s) / ge(i), n.translate = qt(s.min, s.max, n.origin) - n.originPoint, (n.scale >= tR && n.scale <= eR || isNaN(n.scale)) && (n.scale = 1), (n.translate >= nR && n.translate <= iR || isNaN(n.translate)) && (n.translate = 0);
}
function Zs(n, i, s, l) {
  pg(n.x, i.x, s.x, l ? l.originX : void 0), pg(n.y, i.y, s.y, l ? l.originY : void 0);
}
function yg(n, i, s) {
  n.min = s.min + i.min, n.max = n.min + ge(i);
}
function sR(n, i, s) {
  yg(n.x, i.x, s.x), yg(n.y, i.y, s.y);
}
function gg(n, i, s) {
  n.min = i.min - s.min, n.max = n.min + ge(i);
}
function Fs(n, i, s) {
  gg(n.x, i.x, s.x), gg(n.y, i.y, s.y);
}
function Ke(n) {
  return [n("x"), n("y")];
}
const Jv = ({ current: n }) => n ? n.ownerDocument.defaultView : null, vg = (n, i) => Math.abs(n - i);
function rR(n, i) {
  const s = vg(n.x, i.x), l = vg(n.y, i.y);
  return Math.sqrt(s ** 2 + l ** 2);
}
class $v {
  constructor(i, s, { transformPagePoint: l, contextWindow: o = window, dragSnapToOrigin: m = !1, distanceThreshold: f = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const x = Yc(this.lastMoveEventInfo, this.history), D = this.startEvent !== null, E = rR(x.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!D && !E)
        return;
      const { point: R } = x, { timestamp: N } = ue;
      this.history.push({ ...R, timestamp: N });
      const { onStart: V, onMove: L } = this.handlers;
      D || (V && V(this.lastMoveEvent, x), this.startEvent = this.lastMoveEvent), L && L(this.lastMoveEvent, x);
    }, this.handlePointerMove = (x, D) => {
      this.lastMoveEvent = x, this.lastMoveEventInfo = Pc(D, this.transformPagePoint), Lt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (x, D) => {
      this.end();
      const { onEnd: E, onSessionEnd: R, resumeAnimation: N } = this.handlers;
      if (this.dragSnapToOrigin && N && N(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const V = Yc(x.type === "pointercancel" ? this.lastMoveEventInfo : Pc(D, this.transformPagePoint), this.history);
      this.startEvent && E && E(x, V), R && R(x, V);
    }, !rm(i))
      return;
    this.dragSnapToOrigin = m, this.handlers = s, this.transformPagePoint = l, this.distanceThreshold = f, this.contextWindow = o || window;
    const d = ur(i), p = Pc(d, this.transformPagePoint), { point: h } = p, { timestamp: g } = ue;
    this.history = [{ ...h, timestamp: g }];
    const { onSessionStart: b } = s;
    b && b(i, Yc(p, this.history)), this.removeListeners = rr(Qs(this.contextWindow, "pointermove", this.handlePointerMove), Qs(this.contextWindow, "pointerup", this.handlePointerUp), Qs(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    this.removeListeners && this.removeListeners(), si(this.updatePoint);
  }
}
function Pc(n, i) {
  return i ? { point: i(n.point) } : n;
}
function bg(n, i) {
  return { x: n.x - i.x, y: n.y - i.y };
}
function Yc({ point: n }, i) {
  return {
    point: n,
    delta: bg(n, Iv(i)),
    offset: bg(n, lR(i)),
    velocity: oR(i, 0.1)
  };
}
function lR(n) {
  return n[0];
}
function Iv(n) {
  return n[n.length - 1];
}
function oR(n, i) {
  if (n.length < 2)
    return { x: 0, y: 0 };
  let s = n.length - 1, l = null;
  const o = Iv(n);
  for (; s >= 0 && (l = n[s], !(o.timestamp - l.timestamp > /* @__PURE__ */ un(i))); )
    s--;
  if (!l)
    return { x: 0, y: 0 };
  const m = /* @__PURE__ */ cn(o.timestamp - l.timestamp);
  if (m === 0)
    return { x: 0, y: 0 };
  const f = {
    x: (o.x - l.x) / m,
    y: (o.y - l.y) / m
  };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function uR(n, { min: i, max: s }, l) {
  return i !== void 0 && n < i ? n = l ? qt(i, n, l.min) : Math.max(n, i) : s !== void 0 && n > s && (n = l ? qt(s, n, l.max) : Math.min(n, s)), n;
}
function xg(n, i, s) {
  return {
    min: i !== void 0 ? n.min + i : void 0,
    max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0
  };
}
function cR(n, { top: i, left: s, bottom: l, right: o }) {
  return {
    x: xg(n.x, s, o),
    y: xg(n.y, i, l)
  };
}
function Sg(n, i) {
  let s = i.min - n.min, l = i.max - n.max;
  return i.max - i.min < n.max - n.min && ([s, l] = [l, s]), { min: s, max: l };
}
function fR(n, i) {
  return {
    x: Sg(n.x, i.x),
    y: Sg(n.y, i.y)
  };
}
function mR(n, i) {
  let s = 0.5;
  const l = ge(n), o = ge(i);
  return o > l ? s = /* @__PURE__ */ Js(i.min, i.max - l, n.min) : l > o && (s = /* @__PURE__ */ Js(n.min, n.max - o, i.min)), Dn(0, 1, s);
}
function dR(n, i) {
  const s = {};
  return i.min !== void 0 && (s.min = i.min - n.min), i.max !== void 0 && (s.max = i.max - n.min), s;
}
const Af = 0.35;
function hR(n = Af) {
  return n === !1 ? n = 0 : n === !0 && (n = Af), {
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
const pR = /* @__PURE__ */ new WeakMap();
class yR {
  constructor(i) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Qt(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = i;
  }
  start(i, { snapToCursor: s = !1, distanceThreshold: l } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1)
      return;
    const m = (b) => {
      const { dragSnapToOrigin: x } = this.getProps();
      x ? this.pauseAnimation() : this.stopAnimation(), s && this.snapToCursor(ur(b).point);
    }, f = (b, x) => {
      const { drag: D, dragPropagation: E, onDragStart: R } = this.getProps();
      if (D && !E && (this.openDragLock && this.openDragLock(), this.openDragLock = TE(D), !this.openDragLock))
        return;
      this.latestPointerEvent = b, this.latestPanInfo = x, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Ke((V) => {
        let L = this.getAxisMotionValue(V).get() || 0;
        if (fn.test(L)) {
          const { projection: H } = this.visualElement;
          if (H && H.layout) {
            const W = H.layout.layoutBox[V];
            W && (L = ge(W) * (parseFloat(L) / 100));
          }
        }
        this.originPoint[V] = L;
      }), R && Lt.postRender(() => R(b, x)), Tf(this.visualElement, "transform");
      const { animationState: N } = this.visualElement;
      N && N.setActive("whileDrag", !0);
    }, d = (b, x) => {
      this.latestPointerEvent = b, this.latestPanInfo = x;
      const { dragPropagation: D, dragDirectionLock: E, onDirectionLock: R, onDrag: N } = this.getProps();
      if (!D && !this.openDragLock)
        return;
      const { offset: V } = x;
      if (E && this.currentDirection === null) {
        this.currentDirection = gR(V), this.currentDirection !== null && R && R(this.currentDirection);
        return;
      }
      this.updateAxis("x", x.point, V), this.updateAxis("y", x.point, V), this.visualElement.render(), N && N(b, x);
    }, p = (b, x) => {
      this.latestPointerEvent = b, this.latestPanInfo = x, this.stop(b, x), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, h = () => Ke((b) => this.getAnimationState(b) === "paused" && this.getAxisMotionValue(b).animation?.play()), { dragSnapToOrigin: g } = this.getProps();
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
    if (!l || !_l(i, o, this.currentDirection))
      return;
    const m = this.getAxisMotionValue(i);
    let f = this.originPoint[i] + l[i];
    this.constraints && this.constraints[i] && (f = uR(f, this.constraints[i], this.elastic[i])), m.set(f);
  }
  resolveConstraints() {
    const { dragConstraints: i, dragElastic: s } = this.getProps(), l = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, o = this.constraints;
    i && Ma(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && l ? this.constraints = cR(l.layoutBox, i) : this.constraints = !1, this.elastic = hR(s), o !== this.constraints && l && this.constraints && !this.hasMutatedConstraints && Ke((m) => {
      this.constraints !== !1 && this.getAxisMotionValue(m) && (this.constraints[m] = dR(l.layoutBox[m], this.constraints[m]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: s } = this.getProps();
    if (!i || !Ma(i))
      return !1;
    const l = i.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const m = gM(l, o.root, this.visualElement.getTransformPagePoint());
    let f = fR(o.layout.layoutBox, m);
    if (s) {
      const d = s(hM(f));
      this.hasMutatedConstraints = !!d, d && (f = Bv(d));
    }
    return f;
  }
  startAnimation(i) {
    const { drag: s, dragMomentum: l, dragElastic: o, dragTransition: m, dragSnapToOrigin: f, onDragTransitionEnd: d } = this.getProps(), p = this.constraints || {}, h = Ke((g) => {
      if (!_l(g, s, this.currentDirection))
        return;
      let b = p && p[g] || {};
      f && (b = { min: 0, max: 0 });
      const x = o ? 200 : 1e6, D = o ? 40 : 1e7, E = {
        type: "inertia",
        velocity: l ? i[g] : 0,
        bounceStiffness: x,
        bounceDamping: D,
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
    return Tf(this.visualElement, i), l.start(ym(i, l, 0, s, this.visualElement, !1));
  }
  stopAnimation() {
    Ke((i) => this.getAxisMotionValue(i).stop());
  }
  pauseAnimation() {
    Ke((i) => this.getAxisMotionValue(i).animation?.pause());
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
    Ke((s) => {
      const { drag: l } = this.getProps();
      if (!_l(s, l, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, m = this.getAxisMotionValue(s);
      if (o && o.layout) {
        const { min: f, max: d } = o.layout.layoutBox[s];
        m.set(i[s] - qt(f, d, 0.5));
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
    if (!Ma(s) || !l || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Ke((f) => {
      const d = this.getAxisMotionValue(f);
      if (d && this.constraints !== !1) {
        const p = d.get();
        o[f] = mR({ min: p, max: p }, this.constraints[f]);
      }
    });
    const { transformTemplate: m } = this.visualElement.getProps();
    this.visualElement.current.style.transform = m ? m({}, "") : "none", l.root && l.root.updateScroll(), l.updateLayout(), this.resolveConstraints(), Ke((f) => {
      if (!_l(f, i, null))
        return;
      const d = this.getAxisMotionValue(f), { min: p, max: h } = this.constraints[f];
      d.set(qt(p, h, o[f]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    pR.set(this.visualElement, this);
    const i = this.visualElement.current, s = Qs(i, "pointerdown", (p) => {
      const { drag: h, dragListener: g = !0 } = this.getProps();
      h && g && this.start(p);
    }), l = () => {
      const { dragConstraints: p } = this.getProps();
      Ma(p) && p.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, m = o.addEventListener("measure", l);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), Lt.read(l);
    const f = ir(window, "resize", () => this.scalePositionWithinConstraints()), d = o.addEventListener("didUpdate", ({ delta: p, hasLayoutChanged: h }) => {
      this.isDragging && h && (Ke((g) => {
        const b = this.getAxisMotionValue(g);
        b && (this.originPoint[g] += p[g].translate, b.set(b.get() + p[g].translate));
      }), this.visualElement.render());
    });
    return () => {
      f(), s(), m(), d && d();
    };
  }
  getProps() {
    const i = this.visualElement.getProps(), { drag: s = !1, dragDirectionLock: l = !1, dragPropagation: o = !1, dragConstraints: m = !1, dragElastic: f = Af, dragMomentum: d = !0 } = i;
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
function _l(n, i, s) {
  return (i === !0 || i === n) && (s === null || s === n);
}
function gR(n, i = 10) {
  let s = null;
  return Math.abs(n.y) > i ? s = "y" : Math.abs(n.x) > i && (s = "x"), s;
}
class vR extends li {
  constructor(i) {
    super(i), this.removeGroupControls = Qe, this.removeListeners = Qe, this.controls = new yR(i);
  }
  mount() {
    const { dragControls: i } = this.node.getProps();
    i && (this.removeGroupControls = i.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Qe;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Ag = (n) => (i, s) => {
  n && Lt.postRender(() => n(i, s));
};
class bR extends li {
  constructor() {
    super(...arguments), this.removePointerDownListener = Qe;
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
    this.removePointerDownListener = Qs(this.node.current, "pointerdown", (i) => this.onPointerDown(i));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Bl = {
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
const Ps = {
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
}, xR = {
  correct: (n, { treeScale: i, projectionDelta: s }) => {
    const l = n, o = ri.parse(n);
    if (o.length > 5)
      return l;
    const m = ri.createTransformer(n), f = typeof o[0] != "number" ? 1 : 0, d = s.x.scale * i.x, p = s.y.scale * i.y;
    o[0 + f] /= d, o[1 + f] /= p;
    const h = qt(d, p, 0.5);
    return typeof o[2 + f] == "number" && (o[2 + f] /= h), typeof o[3 + f] == "number" && (o[3 + f] /= h), m(o);
  }
};
let Mg = !1;
class SR extends K.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: i, layoutGroup: s, switchLayoutGroup: l, layoutId: o } = this.props, { projection: m } = i;
    PE(TR), m && (s.group && s.group.add(m), l && l.register && o && l.register(m), Mg && m.root.didUpdate(), m.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), m.setOptions({
      ...m.options,
      onExitComplete: () => this.safeToRemove()
    })), Bl.hasEverUpdated = !0;
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
  const [i, s] = wv(), l = K.useContext(Bf);
  return A.jsx(SR, { ...n, layoutGroup: l, switchLayoutGroup: K.useContext(Uv), isPresent: i, safeToRemove: s });
}
const TR = {
  borderRadius: {
    ...Ps,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Ps,
  borderTopRightRadius: Ps,
  borderBottomLeftRadius: Ps,
  borderBottomRightRadius: Ps,
  boxShadow: xR
};
function wR(n, i, s) {
  const l = he(n) ? n : Na(n);
  return l.start(ym("", l, i, s)), l.animation;
}
const AR = (n, i) => n.depth - i.depth;
class ER {
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
    this.isDirty && this.children.sort(AR), this.isDirty = !1, this.children.forEach(i);
  }
}
function MR(n, i) {
  const s = we.now(), l = ({ timestamp: o }) => {
    const m = o - s;
    m >= i && (si(l), n(m - i));
  };
  return Lt.setup(l, !0), () => si(l);
}
const eb = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], RR = eb.length, Rg = (n) => typeof n == "string" ? parseFloat(n) : n, Og = (n) => typeof n == "number" || ct.test(n);
function OR(n, i, s, l, o, m) {
  o ? (n.opacity = qt(0, s.opacity ?? 1, DR(l)), n.opacityExit = qt(i.opacity ?? 1, 0, CR(l))) : m && (n.opacity = qt(i.opacity ?? 1, s.opacity ?? 1, l));
  for (let f = 0; f < RR; f++) {
    const d = `border${eb[f]}Radius`;
    let p = Dg(i, d), h = Dg(s, d);
    if (p === void 0 && h === void 0)
      continue;
    p || (p = 0), h || (h = 0), p === 0 || h === 0 || Og(p) === Og(h) ? (n[d] = Math.max(qt(Rg(p), Rg(h), l), 0), (fn.test(h) || fn.test(p)) && (n[d] += "%")) : n[d] = h;
  }
  (i.rotate || s.rotate) && (n.rotate = qt(i.rotate || 0, s.rotate || 0, l));
}
function Dg(n, i) {
  return n[i] !== void 0 ? n[i] : n.borderRadius;
}
const DR = /* @__PURE__ */ nb(0, 0.5, Y0), CR = /* @__PURE__ */ nb(0.5, 0.95, Qe);
function nb(n, i, s) {
  return (l) => l < n ? 0 : l > i ? 1 : s(/* @__PURE__ */ Js(n, i, l));
}
function Cg(n, i) {
  n.min = i.min, n.max = i.max;
}
function Xe(n, i) {
  Cg(n.x, i.x), Cg(n.y, i.y);
}
function Ng(n, i) {
  n.translate = i.translate, n.scale = i.scale, n.originPoint = i.originPoint, n.origin = i.origin;
}
function jg(n, i, s, l, o) {
  return n -= i, n = Zl(n, 1 / s, l), o !== void 0 && (n = Zl(n, 1 / o, l)), n;
}
function NR(n, i = 0, s = 1, l = 0.5, o, m = n, f = n) {
  if (fn.test(i) && (i = parseFloat(i), i = qt(f.min, f.max, i / 100) - f.min), typeof i != "number")
    return;
  let d = qt(m.min, m.max, l);
  n === m && (d -= i), n.min = jg(n.min, i, s, d, o), n.max = jg(n.max, i, s, d, o);
}
function _g(n, i, [s, l, o], m, f) {
  NR(n, i[s], i[l], i[o], i.scale, m, f);
}
const jR = ["x", "scaleX", "originX"], _R = ["y", "scaleY", "originY"];
function zg(n, i, s, l) {
  _g(n.x, i, jR, s ? s.x : void 0, l ? l.x : void 0), _g(n.y, i, _R, s ? s.y : void 0, l ? l.y : void 0);
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
function zR(n, i) {
  return Vg(n.x, i.x) && Vg(n.y, i.y);
}
function Bg(n, i) {
  return Math.round(n.min) === Math.round(i.min) && Math.round(n.max) === Math.round(i.max);
}
function ab(n, i) {
  return Bg(n.x, i.x) && Bg(n.y, i.y);
}
function Lg(n) {
  return ge(n.x) / ge(n.y);
}
function kg(n, i) {
  return n.translate === i.translate && n.scale === i.scale && n.originPoint === i.originPoint;
}
class UR {
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
function VR(n, i, s) {
  let l = "";
  const o = n.x.translate / i.x, m = n.y.translate / i.y, f = s?.z || 0;
  if ((o || m || f) && (l = `translate3d(${o}px, ${m}px, ${f}px) `), (i.x !== 1 || i.y !== 1) && (l += `scale(${1 / i.x}, ${1 / i.y}) `), s) {
    const { transformPerspective: h, rotate: g, rotateX: b, rotateY: x, skewX: D, skewY: E } = s;
    h && (l = `perspective(${h}px) ${l}`), g && (l += `rotate(${g}deg) `), b && (l += `rotateX(${b}deg) `), x && (l += `rotateY(${x}deg) `), D && (l += `skewX(${D}deg) `), E && (l += `skewY(${E}deg) `);
  }
  const d = n.x.scale * i.x, p = n.y.scale * i.y;
  return (d !== 1 || p !== 1) && (l += `scale(${d}, ${p})`), l || "none";
}
const Gc = ["", "X", "Y", "Z"], BR = 1e3;
let LR = 0;
function Xc(n, i, s, l) {
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
      this.id = LR++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(qR), this.nodes.forEach(XR), this.nodes.forEach(KR), this.nodes.forEach(PR);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = f, this.root = d ? d.root || d : this, this.path = d ? [...d.path, d] : [], this.parent = d, this.depth = d ? d.depth + 1 : 0;
      for (let p = 0; p < this.path.length; p++)
        this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new ER());
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
      this.isSVG = Tv(f) && !OE(f), this.instance = f;
      const { layoutId: d, layout: p, visualElement: h } = this.options;
      if (h && !h.current && h.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (p || d) && (this.isLayoutDirty = !0), n) {
        let g, b = 0;
        const x = () => this.root.updateBlockedByResize = !1;
        Lt.read(() => {
          b = window.innerWidth;
        }), n(f, () => {
          const D = window.innerWidth;
          D !== b && (b = D, this.root.updateBlockedByResize = !0, g && g(), g = MR(x, 250), Bl.hasAnimatedSinceResize && (Bl.hasAnimatedSinceResize = !1, this.nodes.forEach(Pg)));
        });
      }
      d && this.root.registerSharedNode(d, this), this.options.animate !== !1 && h && (d || p) && this.addEventListener("didUpdate", ({ delta: g, hasLayoutChanged: b, hasRelativeLayoutChanged: x, layout: D }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const E = this.options.transition || h.getDefaultTransition() || JR, { onLayoutAnimationStart: R, onLayoutAnimationComplete: N } = h.getProps(), V = !this.targetLayout || !ab(this.targetLayout, D), L = !b && x;
        if (this.options.layoutRoot || this.resumeFrom || L || b && (V || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const H = {
            ...im(E, "layout"),
            onPlay: R,
            onComplete: N
          };
          (h.shouldReduceMotion || this.options.layoutRoot) && (H.delay = 0, H.type = !1), this.startAnimation(H), this.setAnimationOrigin(g, L);
        } else
          b || Pg(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = D;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const f = this.getStack();
      f && f.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), si(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(QR), this.animationId++);
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
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(GR), this.nodes.forEach(kR), this.nodes.forEach(HR)) : this.nodes.forEach(qg), this.clearAllSnapshots();
      const d = we.now();
      ue.delta = Dn(0, 1e3 / 60, d - ue.timestamp), ue.timestamp = d, ue.isProcessing = !0, zc.update.process(ue), zc.preRender.process(ue), zc.render.process(ue), ue.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, sm.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(YR), this.sharedNodes.forEach(ZR);
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
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !ge(this.snapshot.measuredBox.x) && !ge(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
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
      f && this.instance && (d || Ci(this.latestValues) || g) && (o(this.instance, h), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(f = !0) {
      const d = this.measurePageBox();
      let p = this.removeElementScroll(d);
      return f && (p = this.removeTransform(p)), $R(p), {
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
      if (!(this.scroll?.wasRoot || this.path.some(IR))) {
        const { scroll: h } = this.root;
        h && (Ra(d.x, h.offset.x), Ra(d.y, h.offset.y));
      }
      return d;
    }
    removeElementScroll(f) {
      const d = Qt();
      if (Xe(d, f), this.scroll?.wasRoot)
        return d;
      for (let p = 0; p < this.path.length; p++) {
        const h = this.path[p], { scroll: g, options: b } = h;
        h !== this.root && g && b.layoutScroll && (g.wasRoot && Xe(d, f), Ra(d.x, g.offset.x), Ra(d.y, g.offset.y));
      }
      return d;
    }
    applyTransform(f, d = !1) {
      const p = Qt();
      Xe(p, f);
      for (let h = 0; h < this.path.length; h++) {
        const g = this.path[h];
        !d && g.options.layoutScroll && g.scroll && g !== g.root && Oa(p, {
          x: -g.scroll.offset.x,
          y: -g.scroll.offset.y
        }), Ci(g.latestValues) && Oa(p, g.latestValues);
      }
      return Ci(this.latestValues) && Oa(p, this.latestValues), p;
    }
    removeTransform(f) {
      const d = Qt();
      Xe(d, f);
      for (let p = 0; p < this.path.length; p++) {
        const h = this.path[p];
        if (!h.instance || !Ci(h.latestValues))
          continue;
        vf(h.latestValues) && h.updateSnapshot();
        const g = Qt(), b = h.measurePageBox();
        Xe(g, b), zg(d, h.latestValues, h.snapshot ? h.snapshot.layoutBox : void 0, g);
      }
      return Ci(this.latestValues) && zg(d, this.latestValues), d;
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
          x && x.layout && this.animationProgress !== 1 ? (this.relativeParent = x, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Qt(), this.relativeTargetOrigin = Qt(), Fs(this.relativeTargetOrigin, this.layout.layoutBox, x.layout.layoutBox), Xe(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Qt(), this.targetWithTransforms = Qt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), sR(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Xe(this.target, this.layout.layoutBox), kv(this.target, this.targetDelta)) : Xe(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const x = this.getClosestProjectingParent();
          x && !!x.resumingFrom == !!this.resumingFrom && !x.options.layoutScroll && x.target && this.animationProgress !== 1 ? (this.relativeParent = x, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Qt(), this.relativeTargetOrigin = Qt(), Fs(this.relativeTargetOrigin, this.target, x.target), Xe(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || vf(this.parent.latestValues) || Lv(this.parent.latestValues)))
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
      Xe(this.layoutCorrected, this.layout.layoutBox);
      const b = this.treeScale.x, x = this.treeScale.y;
      yM(this.layoutCorrected, this.treeScale, this.path, d), f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox, f.targetWithTransforms = Qt());
      const { target: D } = f;
      if (!D) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ng(this.prevProjectionDelta.x, this.projectionDelta.x), Ng(this.prevProjectionDelta.y, this.projectionDelta.y)), Zs(this.projectionDelta, this.layoutCorrected, D, this.latestValues), (this.treeScale.x !== b || this.treeScale.y !== x || !kg(this.projectionDelta.x, this.prevProjectionDelta.x) || !kg(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", D));
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
      this.prevProjectionDelta = Da(), this.projectionDelta = Da(), this.projectionDeltaWithTransform = Da();
    }
    setAnimationOrigin(f, d = !1) {
      const p = this.snapshot, h = p ? p.latestValues : {}, g = { ...this.latestValues }, b = Da();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !d;
      const x = Qt(), D = p ? p.source : void 0, E = this.layout ? this.layout.source : void 0, R = D !== E, N = this.getStack(), V = !N || N.members.length <= 1, L = !!(R && !V && this.options.crossfade === !0 && !this.path.some(WR));
      this.animationProgress = 0;
      let H;
      this.mixTargetDelta = (W) => {
        const Z = W / 1e3;
        Yg(b.x, f.x, Z), Yg(b.y, f.y, Z), this.setTargetDelta(b), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Fs(x, this.layout.layoutBox, this.relativeParent.layout.layoutBox), FR(this.relativeTarget, this.relativeTargetOrigin, x, Z), H && zR(this.relativeTarget, H) && (this.isProjectionDirty = !1), H || (H = Qt()), Xe(H, this.relativeTarget)), R && (this.animationValues = g, OR(g, h, this.latestValues, Z, L, V)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = Z;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (si(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Lt.update(() => {
        Bl.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Na(0)), this.currentAnimation = wR(this.motionValue, [0, 1e3], {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(BR), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let { targetWithTransforms: d, target: p, layout: h, latestValues: g } = f;
      if (!(!d || !p || !h)) {
        if (this !== f && this.layout && h && lb(this.options.animationType, this.layout.layoutBox, h.layoutBox)) {
          p = this.target || Qt();
          const b = ge(this.layout.layoutBox.x);
          p.x.min = f.target.x.min, p.x.max = p.x.min + b;
          const x = ge(this.layout.layoutBox.y);
          p.y.min = f.target.y.min, p.y.max = p.y.min + x;
        }
        Xe(d, p), Oa(d, g), Zs(this.projectionDeltaWithTransform, this.layoutCorrected, d, g);
      }
    }
    registerSharedNode(f, d) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new UR()), this.sharedNodes.get(f).add(d);
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
      p.z && Xc("z", f, h, this.animationValues);
      for (let g = 0; g < Gc.length; g++)
        Xc(`rotate${Gc[g]}`, f, h, this.animationValues), Xc(`skew${Gc[g]}`, f, h, this.animationValues);
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
        this.needsReset = !1, f.visibility = "", f.opacity = "", f.pointerEvents = Vl(d?.pointerEvents) || "", f.transform = p ? p(this.latestValues, "") : "none";
        return;
      }
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, f.pointerEvents = Vl(d?.pointerEvents) || ""), this.hasProjected && !Ci(this.latestValues) && (f.transform = p ? p({}, "") : "none", this.hasProjected = !1);
        return;
      }
      f.visibility = "";
      const g = h.animationValues || h.latestValues;
      this.applyTransformsToTarget();
      let b = VR(this.projectionDeltaWithTransform, this.treeScale, g);
      p && (b = p(g, b)), f.transform = b;
      const { x, y: D } = this.projectionDelta;
      f.transformOrigin = `${x.origin * 100}% ${D.origin * 100}% 0`, h.animationValues ? f.opacity = h === this ? g.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : g.opacityExit : f.opacity = h === this ? g.opacity !== void 0 ? g.opacity : "" : g.opacityExit !== void 0 ? g.opacityExit : 0;
      for (const E in er) {
        if (g[E] === void 0)
          continue;
        const { correct: R, applyTo: N, isCSSVariable: V } = er[E], L = b === "none" ? g[E] : R(g[E], h);
        if (N) {
          const H = N.length;
          for (let W = 0; W < H; W++)
            f[N[W]] = L;
        } else
          V ? this.options.visualElement.renderState.vars[E] = L : f[E] = L;
      }
      this.options.layoutId && (f.pointerEvents = h === this ? Vl(d?.pointerEvents) || "" : "none");
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
function kR(n) {
  n.updateLayout();
}
function HR(n) {
  const i = n.resumeFrom?.snapshot || n.snapshot;
  if (n.isLead() && n.layout && i && n.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: l } = n.layout, { animationType: o } = n.options, m = i.source !== n.layout.source;
    o === "size" ? Ke((g) => {
      const b = m ? i.measuredBox[g] : i.layoutBox[g], x = ge(b);
      b.min = s[g].min, b.max = b.min + x;
    }) : lb(o, i.layoutBox, s) && Ke((g) => {
      const b = m ? i.measuredBox[g] : i.layoutBox[g], x = ge(s[g]);
      b.max = b.min + x, n.relativeTarget && !n.currentAnimation && (n.isProjectionDirty = !0, n.relativeTarget[g].max = n.relativeTarget[g].min + x);
    });
    const f = Da();
    Zs(f, s, i.layoutBox);
    const d = Da();
    m ? Zs(d, n.applyTransform(l, !0), i.measuredBox) : Zs(d, s, i.layoutBox);
    const p = !ib(f);
    let h = !1;
    if (!n.resumeFrom) {
      const g = n.getClosestProjectingParent();
      if (g && !g.resumeFrom) {
        const { snapshot: b, layout: x } = g;
        if (b && x) {
          const D = Qt();
          Fs(D, i.layoutBox, b.layoutBox);
          const E = Qt();
          Fs(E, s, x.layoutBox), ab(D, E) || (h = !0), g.options.layoutRoot && (n.relativeTarget = E, n.relativeTargetOrigin = D, n.relativeParent = g);
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
function qR(n) {
  n.parent && (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty), n.isSharedProjectionDirty || (n.isSharedProjectionDirty = !!(n.isProjectionDirty || n.parent.isProjectionDirty || n.parent.isSharedProjectionDirty)), n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty));
}
function PR(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function YR(n) {
  n.clearSnapshot();
}
function Hg(n) {
  n.clearMeasurements();
}
function qg(n) {
  n.isLayoutDirty = !1;
}
function GR(n) {
  const { visualElement: i } = n.options;
  i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"), n.resetTransform();
}
function Pg(n) {
  n.finishAnimation(), n.targetDelta = n.relativeTarget = n.target = void 0, n.isProjectionDirty = !0;
}
function XR(n) {
  n.resolveTargetDelta();
}
function KR(n) {
  n.calcProjection();
}
function QR(n) {
  n.resetSkewAndRotation();
}
function ZR(n) {
  n.removeLeadSnapshot();
}
function Yg(n, i, s) {
  n.translate = qt(i.translate, 0, s), n.scale = qt(i.scale, 1, s), n.origin = i.origin, n.originPoint = i.originPoint;
}
function Gg(n, i, s, l) {
  n.min = qt(i.min, s.min, l), n.max = qt(i.max, s.max, l);
}
function FR(n, i, s, l) {
  Gg(n.x, i.x, s.x, l), Gg(n.y, i.y, s.y, l);
}
function WR(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const JR = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Xg = (n) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n), Kg = Xg("applewebkit/") && !Xg("chrome/") ? Math.round : Qe;
function Qg(n) {
  n.min = Kg(n.min), n.max = Kg(n.max);
}
function $R(n) {
  Qg(n.x), Qg(n.y);
}
function lb(n, i, s) {
  return n === "position" || n === "preserve-aspect" && !aR(Lg(i), Lg(s), 0.2);
}
function IR(n) {
  return n !== n.root && n.scroll?.wasRoot;
}
const tO = rb({
  attachResizeListener: (n, i) => ir(n, "resize", i),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Kc = {
  current: void 0
}, ob = rb({
  measureScroll: (n) => ({
    x: n.scrollLeft,
    y: n.scrollTop
  }),
  defaultParent: () => {
    if (!Kc.current) {
      const n = new tO({});
      n.mount(window), n.setOptions({ layoutScroll: !0 }), Kc.current = n;
    }
    return Kc.current;
  },
  resetTransform: (n, i) => {
    n.style.transform = i !== void 0 ? i : "none";
  },
  checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed"
}), eO = {
  pan: {
    Feature: bR
  },
  drag: {
    Feature: vR,
    ProjectionNode: ob,
    MeasureLayout: tb
  }
};
function Zg(n, i, s) {
  const { props: l } = n;
  n.animationState && l.whileHover && n.animationState.setActive("whileHover", s === "Start");
  const o = "onHover" + s, m = l[o];
  m && Lt.postRender(() => m(i, ur(i)));
}
class nO extends li {
  mount() {
    const { current: i } = this.node;
    i && (this.unmount = wE(i, (s, l) => (Zg(this.node, l, "Start"), (o) => Zg(this.node, o, "End"))));
  }
  unmount() {
  }
}
class iO extends li {
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
    this.unmount = rr(ir(this.node.current, "focus", () => this.onFocus()), ir(this.node.current, "blur", () => this.onBlur()));
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
  m && Lt.postRender(() => m(i, ur(i)));
}
class aO extends li {
  mount() {
    const { current: i } = this.node;
    i && (this.unmount = RE(i, (s, l) => (Fg(this.node, l, "Start"), (o, { success: m }) => Fg(this.node, o, m ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Ef = /* @__PURE__ */ new WeakMap(), Qc = /* @__PURE__ */ new WeakMap(), sO = (n) => {
  const i = Ef.get(n.target);
  i && i(n);
}, rO = (n) => {
  n.forEach(sO);
};
function lO({ root: n, ...i }) {
  const s = n || document;
  Qc.has(s) || Qc.set(s, {});
  const l = Qc.get(s), o = JSON.stringify(i);
  return l[o] || (l[o] = new IntersectionObserver(rO, { root: n, ...i })), l[o];
}
function oO(n, i, s) {
  const l = lO(i);
  return Ef.set(n, s), l.observe(n), () => {
    Ef.delete(n), l.unobserve(n);
  };
}
const uO = {
  some: 0,
  all: 1
};
class cO extends li {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: i = {} } = this.node.getProps(), { root: s, margin: l, amount: o = "some", once: m } = i, f = {
      root: s ? s.current : void 0,
      rootMargin: l,
      threshold: typeof o == "number" ? o : uO[o]
    }, d = (p) => {
      const { isIntersecting: h } = p;
      if (this.isInView === h || (this.isInView = h, m && !h && this.hasEnteredView))
        return;
      h && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", h);
      const { onViewportEnter: g, onViewportLeave: b } = this.node.getProps(), x = h ? g : b;
      x && x(p);
    };
    return oO(this.node.current, f, d);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: i, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(fO(i, s)) && this.startObserver();
  }
  unmount() {
  }
}
function fO({ viewport: n = {} }, { viewport: i = {} } = {}) {
  return (s) => n[s] !== i[s];
}
const mO = {
  inView: {
    Feature: cO
  },
  tap: {
    Feature: aO
  },
  focus: {
    Feature: iO
  },
  hover: {
    Feature: nO
  }
}, dO = {
  layout: {
    ProjectionNode: ob,
    MeasureLayout: tb
  }
}, hO = {
  ...$M,
  ...mO,
  ...eO,
  ...dO
}, ye = /* @__PURE__ */ dM(hO, MM), pO = {
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
}, Zc = {
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
}, yO = {
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
}, gO = {
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
}, vO = {
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
}, bO = {
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
}, xO = ({
  audioStream: n,
  isActive: i = !0,
  size: s = 56,
  // 14 * 4 (w-14 h-14)
  color: l = "rgba(255, 255, 255, 0.8)",
  sensitivity: o = 1
}) => {
  const [m, f] = K.useState(new Array(8).fill(0)), [d, p] = K.useState(!1), h = K.useRef(null), g = K.useRef(null), b = K.useRef(null), x = K.useRef(null), D = K.useRef(null);
  K.useEffect(() => {
    if (!n || !i) {
      E();
      return;
    }
    return (async () => {
      try {
        b.current = new (window.AudioContext || window.webkitAudioContext)(), h.current = b.current.createAnalyser(), h.current.fftSize = 64, h.current.smoothingTimeConstant = 0.8, D.current = b.current.createMediaStreamSource(n), D.current.connect(h.current);
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
    x.current && cancelAnimationFrame(x.current), D.current && D.current.disconnect(), b.current && b.current.state !== "closed" && b.current.close(), p(!1), f(new Array(8).fill(0));
  }, R = () => {
    if (!h.current || !g.current) return;
    const N = () => {
      if (!h.current || !g.current) return;
      h.current.getByteFrequencyData(g.current);
      const V = [], L = Math.floor(g.current.length / 8);
      for (let H = 0; H < 8; H++) {
        let W = 0;
        const Z = H * L, Q = Z + L;
        for (let G = Z; G < Q; G++)
          W += g.current[G];
        const $ = W / L / 255 * o;
        V.push(Math.min($, 1));
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
          ye.div,
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
}, SO = ({ audioStream: n, isActive: i = !0 }) => /* @__PURE__ */ A.jsx(
  xO,
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
const { toString: TO } = Object.prototype, { getPrototypeOf: gm } = Object, { iterator: io, toStringTag: cb } = Symbol, ao = /* @__PURE__ */ ((n) => (i) => {
  const s = TO.call(i);
  return n[s] || (n[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), tn = (n) => (n = n.toLowerCase(), (i) => ao(i) === n), so = (n) => (i) => typeof i === n, { isArray: La } = Array, ar = so("undefined");
function wO(n) {
  return n !== null && !ar(n) && n.constructor !== null && !ar(n.constructor) && Ae(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const fb = tn("ArrayBuffer");
function AO(n) {
  let i;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(n) : i = n && n.buffer && fb(n.buffer), i;
}
const EO = so("string"), Ae = so("function"), mb = so("number"), ro = (n) => n !== null && typeof n == "object", MO = (n) => n === !0 || n === !1, Ll = (n) => {
  if (ao(n) !== "object")
    return !1;
  const i = gm(n);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(cb in n) && !(io in n);
}, RO = tn("Date"), OO = tn("File"), DO = tn("Blob"), CO = tn("FileList"), NO = (n) => ro(n) && Ae(n.pipe), jO = (n) => {
  let i;
  return n && (typeof FormData == "function" && n instanceof FormData || Ae(n.append) && ((i = ao(n)) === "formdata" || // detect form-data instance
  i === "object" && Ae(n.toString) && n.toString() === "[object FormData]"));
}, _O = tn("URLSearchParams"), [zO, UO, VO, BO] = ["ReadableStream", "Request", "Response", "Headers"].map(tn), LO = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function cr(n, i, { allOwnKeys: s = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let l, o;
  if (typeof n != "object" && (n = [n]), La(n))
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
const _i = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, hb = (n) => !ar(n) && n !== _i;
function Mf() {
  const { caseless: n } = hb(this) && this || {}, i = {}, s = (l, o) => {
    const m = n && db(i, o) || o;
    Ll(i[m]) && Ll(l) ? i[m] = Mf(i[m], l) : Ll(l) ? i[m] = Mf({}, l) : La(l) ? i[m] = l.slice() : i[m] = l;
  };
  for (let l = 0, o = arguments.length; l < o; l++)
    arguments[l] && cr(arguments[l], s);
  return i;
}
const kO = (n, i, s, { allOwnKeys: l } = {}) => (cr(i, (o, m) => {
  s && Ae(o) ? n[m] = ub(o, s) : n[m] = o;
}, { allOwnKeys: l }), n), HO = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), qO = (n, i, s, l) => {
  n.prototype = Object.create(i.prototype, l), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: i.prototype
  }), s && Object.assign(n.prototype, s);
}, PO = (n, i, s, l) => {
  let o, m, f;
  const d = {};
  if (i = i || {}, n == null) return i;
  do {
    for (o = Object.getOwnPropertyNames(n), m = o.length; m-- > 0; )
      f = o[m], (!l || l(f, n, i)) && !d[f] && (i[f] = n[f], d[f] = !0);
    n = s !== !1 && gm(n);
  } while (n && (!s || s(n, i)) && n !== Object.prototype);
  return i;
}, YO = (n, i, s) => {
  n = String(n), (s === void 0 || s > n.length) && (s = n.length), s -= i.length;
  const l = n.indexOf(i, s);
  return l !== -1 && l === s;
}, GO = (n) => {
  if (!n) return null;
  if (La(n)) return n;
  let i = n.length;
  if (!mb(i)) return null;
  const s = new Array(i);
  for (; i-- > 0; )
    s[i] = n[i];
  return s;
}, XO = /* @__PURE__ */ ((n) => (i) => n && i instanceof n)(typeof Uint8Array < "u" && gm(Uint8Array)), KO = (n, i) => {
  const l = (n && n[io]).call(n);
  let o;
  for (; (o = l.next()) && !o.done; ) {
    const m = o.value;
    i.call(n, m[0], m[1]);
  }
}, QO = (n, i) => {
  let s;
  const l = [];
  for (; (s = n.exec(i)) !== null; )
    l.push(s);
  return l;
}, ZO = tn("HTMLFormElement"), FO = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, l, o) {
    return l.toUpperCase() + o;
  }
), Jg = (({ hasOwnProperty: n }) => (i, s) => n.call(i, s))(Object.prototype), WO = tn("RegExp"), pb = (n, i) => {
  const s = Object.getOwnPropertyDescriptors(n), l = {};
  cr(s, (o, m) => {
    let f;
    (f = i(o, m, n)) !== !1 && (l[m] = f || o);
  }), Object.defineProperties(n, l);
}, JO = (n) => {
  pb(n, (i, s) => {
    if (Ae(n) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
      return !1;
    const l = n[s];
    if (Ae(l)) {
      if (i.enumerable = !1, "writable" in i) {
        i.writable = !1;
        return;
      }
      i.set || (i.set = () => {
        throw Error("Can not rewrite read-only method '" + s + "'");
      });
    }
  });
}, $O = (n, i) => {
  const s = {}, l = (o) => {
    o.forEach((m) => {
      s[m] = !0;
    });
  };
  return La(n) ? l(n) : l(String(n).split(i)), s;
}, IO = () => {
}, tD = (n, i) => n != null && Number.isFinite(n = +n) ? n : i;
function eD(n) {
  return !!(n && Ae(n.append) && n[cb] === "FormData" && n[io]);
}
const nD = (n) => {
  const i = new Array(10), s = (l, o) => {
    if (ro(l)) {
      if (i.indexOf(l) >= 0)
        return;
      if (!("toJSON" in l)) {
        i[o] = l;
        const m = La(l) ? [] : {};
        return cr(l, (f, d) => {
          const p = s(f, o + 1);
          !ar(p) && (m[d] = p);
        }), i[o] = void 0, m;
      }
    }
    return l;
  };
  return s(n, 0);
}, iD = tn("AsyncFunction"), aD = (n) => n && (ro(n) || Ae(n)) && Ae(n.then) && Ae(n.catch), yb = ((n, i) => n ? setImmediate : i ? ((s, l) => (_i.addEventListener("message", ({ source: o, data: m }) => {
  o === _i && m === s && l.length && l.shift()();
}, !1), (o) => {
  l.push(o), _i.postMessage(s, "*");
}))(`axios@${Math.random()}`, []) : (s) => setTimeout(s))(
  typeof setImmediate == "function",
  Ae(_i.postMessage)
), sD = typeof queueMicrotask < "u" ? queueMicrotask.bind(_i) : typeof Wg < "u" && Wg.nextTick || yb, rD = (n) => n != null && Ae(n[io]), U = {
  isArray: La,
  isArrayBuffer: fb,
  isBuffer: wO,
  isFormData: jO,
  isArrayBufferView: AO,
  isString: EO,
  isNumber: mb,
  isBoolean: MO,
  isObject: ro,
  isPlainObject: Ll,
  isReadableStream: zO,
  isRequest: UO,
  isResponse: VO,
  isHeaders: BO,
  isUndefined: ar,
  isDate: RO,
  isFile: OO,
  isBlob: DO,
  isRegExp: WO,
  isFunction: Ae,
  isStream: NO,
  isURLSearchParams: _O,
  isTypedArray: XO,
  isFileList: CO,
  forEach: cr,
  merge: Mf,
  extend: kO,
  trim: LO,
  stripBOM: HO,
  inherits: qO,
  toFlatObject: PO,
  kindOf: ao,
  kindOfTest: tn,
  endsWith: YO,
  toArray: GO,
  forEachEntry: KO,
  matchAll: QO,
  isHTMLForm: ZO,
  hasOwnProperty: Jg,
  hasOwnProp: Jg,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: pb,
  freezeMethods: JO,
  toObjectSet: $O,
  toCamelCase: FO,
  noop: IO,
  toFiniteNumber: tD,
  findKey: db,
  global: _i,
  isContextDefined: hb,
  isSpecCompliantForm: eD,
  toJSONObject: nD,
  isAsyncFn: iD,
  isThenable: aD,
  setImmediate: yb,
  asap: sD,
  isIterable: rD
};
function dt(n, i, s, l, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", i && (this.code = i), s && (this.config = s), l && (this.request = l), o && (this.response = o, this.status = o.status ? o.status : null);
}
U.inherits(dt, Error, {
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
const gb = dt.prototype, vb = {};
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
Object.defineProperties(dt, vb);
Object.defineProperty(gb, "isAxiosError", { value: !0 });
dt.from = (n, i, s, l, o, m) => {
  const f = Object.create(gb);
  return U.toFlatObject(n, f, function(p) {
    return p !== Error.prototype;
  }, (d) => d !== "isAxiosError"), dt.call(f, n.message, i, s, l, o), f.cause = n, f.name = n.name, m && Object.assign(f, m), f;
};
const lD = null;
function Rf(n) {
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
function oD(n) {
  return U.isArray(n) && !n.some(Rf);
}
const uD = U.toFlatObject(U, {}, null, function(i) {
  return /^is[A-Z]/.test(i);
});
function lo(n, i, s) {
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
      throw new dt("Blob is not supported. Use a Buffer instead.");
    return U.isArrayBuffer(E) || U.isTypedArray(E) ? p && typeof Blob == "function" ? new Blob([E]) : Buffer.from(E) : E;
  }
  function g(E, R, N) {
    let V = E;
    if (E && !N && typeof E == "object") {
      if (U.endsWith(R, "{}"))
        R = l ? R : R.slice(0, -2), E = JSON.stringify(E);
      else if (U.isArray(E) && oD(E) || (U.isFileList(E) || U.endsWith(R, "[]")) && (V = U.toArray(E)))
        return R = bb(R), V.forEach(function(H, W) {
          !(U.isUndefined(H) || H === null) && i.append(
            // eslint-disable-next-line no-nested-ternary
            f === !0 ? $g([R], W, m) : f === null ? R : R + "[]",
            h(H)
          );
        }), !1;
    }
    return Rf(E) ? !0 : (i.append($g(N, R, m), h(E)), !1);
  }
  const b = [], x = Object.assign(uD, {
    defaultVisitor: g,
    convertValue: h,
    isVisitable: Rf
  });
  function D(E, R) {
    if (!U.isUndefined(E)) {
      if (b.indexOf(E) !== -1)
        throw Error("Circular reference detected in " + R.join("."));
      b.push(E), U.forEach(E, function(V, L) {
        (!(U.isUndefined(V) || V === null) && o.call(
          i,
          V,
          U.isString(L) ? L.trim() : L,
          R,
          x
        )) === !0 && D(V, R ? R.concat(L) : [L]);
      }), b.pop();
    }
  }
  if (!U.isObject(n))
    throw new TypeError("data must be an object");
  return D(n), i;
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
  this._pairs = [], n && lo(n, this, i);
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
function cD(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Sb(n, i, s) {
  if (!i)
    return n;
  const l = s && s.encode || cD;
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
}, fD = typeof URLSearchParams < "u" ? URLSearchParams : vm, mD = typeof FormData < "u" ? FormData : null, dD = typeof Blob < "u" ? Blob : null, hD = {
  isBrowser: !0,
  classes: {
    URLSearchParams: fD,
    FormData: mD,
    Blob: dD
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, bm = typeof window < "u" && typeof document < "u", Of = typeof navigator == "object" && navigator || void 0, pD = bm && (!Of || ["ReactNative", "NativeScript", "NS"].indexOf(Of.product) < 0), yD = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", gD = bm && window.location.href || "http://localhost", vD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: bm,
  hasStandardBrowserEnv: pD,
  hasStandardBrowserWebWorkerEnv: yD,
  navigator: Of,
  origin: gD
}, Symbol.toStringTag, { value: "Module" })), de = {
  ...vD,
  ...hD
};
function bD(n, i) {
  return lo(n, new de.classes.URLSearchParams(), Object.assign({
    visitor: function(s, l, o, m) {
      return de.isNode && U.isBuffer(s) ? (this.append(l, s.toString("base64")), !1) : m.defaultVisitor.apply(this, arguments);
    }
  }, i));
}
function xD(n) {
  return U.matchAll(/\w+|\[(\w*)]/g, n).map((i) => i[0] === "[]" ? "" : i[1] || i[0]);
}
function SD(n) {
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
    return f = !f && U.isArray(o) ? o.length : f, p ? (U.hasOwnProp(o, f) ? o[f] = [o[f], l] : o[f] = l, !d) : ((!o[f] || !U.isObject(o[f])) && (o[f] = []), i(s, l, o[f], m) && U.isArray(o[f]) && (o[f] = SD(o[f])), !d);
  }
  if (U.isFormData(n) && U.isFunction(n.entries)) {
    const s = {};
    return U.forEachEntry(n, (l, o) => {
      i(xD(l), o, s, 0);
    }), s;
  }
  return null;
}
function TD(n, i, s) {
  if (U.isString(n))
    try {
      return (i || JSON.parse)(n), U.trim(n);
    } catch (l) {
      if (l.name !== "SyntaxError")
        throw l;
    }
  return (s || JSON.stringify)(n);
}
const fr = {
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
        return bD(i, this.formSerializer).toString();
      if ((d = U.isFileList(i)) || l.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return lo(
          d ? { "files[]": i } : i,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return m || o ? (s.setContentType("application/json", !1), TD(i)) : i;
  }],
  transformResponse: [function(i) {
    const s = this.transitional || fr.transitional, l = s && s.forcedJSONParsing, o = this.responseType === "json";
    if (U.isResponse(i) || U.isReadableStream(i))
      return i;
    if (i && U.isString(i) && (l && !this.responseType || o)) {
      const f = !(s && s.silentJSONParsing) && o;
      try {
        return JSON.parse(i);
      } catch (d) {
        if (f)
          throw d.name === "SyntaxError" ? dt.from(d, dt.ERR_BAD_RESPONSE, this, null, this.response) : d;
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
  fr.headers[n] = {};
});
const wD = U.toObjectSet([
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
]), AD = (n) => {
  const i = {};
  let s, l, o;
  return n && n.split(`
`).forEach(function(f) {
    o = f.indexOf(":"), s = f.substring(0, o).trim().toLowerCase(), l = f.substring(o + 1).trim(), !(!s || i[s] && wD[s]) && (s === "set-cookie" ? i[s] ? i[s].push(l) : i[s] = [l] : i[s] = i[s] ? i[s] + ", " + l : l);
  }), i;
}, e0 = Symbol("internals");
function Ys(n) {
  return n && String(n).trim().toLowerCase();
}
function kl(n) {
  return n === !1 || n == null ? n : U.isArray(n) ? n.map(kl) : String(n);
}
function ED(n) {
  const i = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let l;
  for (; l = s.exec(n); )
    i[l[1]] = l[2];
  return i;
}
const MD = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function Fc(n, i, s, l, o) {
  if (U.isFunction(l))
    return l.call(this, i, s);
  if (o && (i = s), !!U.isString(i)) {
    if (U.isString(l))
      return i.indexOf(l) !== -1;
    if (U.isRegExp(l))
      return l.test(i);
  }
}
function RD(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (i, s, l) => s.toUpperCase() + l);
}
function OD(n, i) {
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
let Ee = class {
  constructor(i) {
    i && this.set(i);
  }
  set(i, s, l) {
    const o = this;
    function m(d, p, h) {
      const g = Ys(p);
      if (!g)
        throw new Error("header name must be a non-empty string");
      const b = U.findKey(o, g);
      (!b || o[b] === void 0 || h === !0 || h === void 0 && o[b] !== !1) && (o[b || p] = kl(d));
    }
    const f = (d, p) => U.forEach(d, (h, g) => m(h, g, p));
    if (U.isPlainObject(i) || i instanceof this.constructor)
      f(i, s);
    else if (U.isString(i) && (i = i.trim()) && !MD(i))
      f(AD(i), s);
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
    if (i = Ys(i), i) {
      const l = U.findKey(this, i);
      if (l) {
        const o = this[l];
        if (!s)
          return o;
        if (s === !0)
          return ED(o);
        if (U.isFunction(s))
          return s.call(this, o, l);
        if (U.isRegExp(s))
          return s.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(i, s) {
    if (i = Ys(i), i) {
      const l = U.findKey(this, i);
      return !!(l && this[l] !== void 0 && (!s || Fc(this, this[l], l, s)));
    }
    return !1;
  }
  delete(i, s) {
    const l = this;
    let o = !1;
    function m(f) {
      if (f = Ys(f), f) {
        const d = U.findKey(l, f);
        d && (!s || Fc(l, l[d], d, s)) && (delete l[d], o = !0);
      }
    }
    return U.isArray(i) ? i.forEach(m) : m(i), o;
  }
  clear(i) {
    const s = Object.keys(this);
    let l = s.length, o = !1;
    for (; l--; ) {
      const m = s[l];
      (!i || Fc(this, this[m], m, i, !0)) && (delete this[m], o = !0);
    }
    return o;
  }
  normalize(i) {
    const s = this, l = {};
    return U.forEach(this, (o, m) => {
      const f = U.findKey(l, m);
      if (f) {
        s[f] = kl(o), delete s[m];
        return;
      }
      const d = i ? RD(m) : String(m).trim();
      d !== m && delete s[m], s[d] = kl(o), l[d] = !0;
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
      const d = Ys(f);
      l[d] || (OD(o, f), l[d] = !0);
    }
    return U.isArray(i) ? i.forEach(m) : m(i), this;
  }
};
Ee.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
U.reduceDescriptors(Ee.prototype, ({ value: n }, i) => {
  let s = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => n,
    set(l) {
      this[s] = l;
    }
  };
});
U.freezeMethods(Ee);
function Wc(n, i) {
  const s = this || fr, l = i || s, o = Ee.from(l.headers);
  let m = l.data;
  return U.forEach(n, function(d) {
    m = d.call(s, m, o.normalize(), i ? i.status : void 0);
  }), o.normalize(), m;
}
function Ab(n) {
  return !!(n && n.__CANCEL__);
}
function ka(n, i, s) {
  dt.call(this, n ?? "canceled", dt.ERR_CANCELED, i, s), this.name = "CanceledError";
}
U.inherits(ka, dt, {
  __CANCEL__: !0
});
function Eb(n, i, s) {
  const l = s.config.validateStatus;
  !s.status || !l || l(s.status) ? n(s) : i(new dt(
    "Request failed with status code " + s.status,
    [dt.ERR_BAD_REQUEST, dt.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
function DD(n) {
  const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return i && i[1] || "";
}
function CD(n, i) {
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
    const D = g && h - g;
    return D ? Math.round(x * 1e3 / D) : void 0;
  };
}
function ND(n, i) {
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
const Fl = (n, i, s = 3) => {
  let l = 0;
  const o = CD(50, 250);
  return ND((m) => {
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
}, i0 = (n) => (...i) => U.asap(() => n(...i)), jD = de.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, i) => (s) => (s = new URL(s, de.origin), n.protocol === s.protocol && n.host === s.host && (i || n.port === s.port)))(
  new URL(de.origin),
  de.navigator && /(msie|trident)/i.test(de.navigator.userAgent)
) : () => !0, _D = de.hasStandardBrowserEnv ? (
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
function zD(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function UD(n, i) {
  return i ? n.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : n;
}
function Mb(n, i, s) {
  let l = !zD(i);
  return n && (l || s == !1) ? UD(n, i) : i;
}
const a0 = (n) => n instanceof Ee ? { ...n } : n;
function Bi(n, i) {
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
  const i = Bi({}, n);
  let { data: s, withXSRFToken: l, xsrfHeaderName: o, xsrfCookieName: m, headers: f, auth: d } = i;
  i.headers = f = Ee.from(f), i.url = Sb(Mb(i.baseURL, i.url, i.allowAbsoluteUrls), n.params, n.paramsSerializer), d && f.set(
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
  if (de.hasStandardBrowserEnv && (l && U.isFunction(l) && (l = l(i)), l || l !== !1 && jD(i.url))) {
    const h = o && m && _D.read(m);
    h && f.set(o, h);
  }
  return i;
}, VD = typeof XMLHttpRequest < "u", BD = VD && function(n) {
  return new Promise(function(s, l) {
    const o = Rb(n);
    let m = o.data;
    const f = Ee.from(o.headers).normalize();
    let { responseType: d, onUploadProgress: p, onDownloadProgress: h } = o, g, b, x, D, E;
    function R() {
      D && D(), E && E(), o.cancelToken && o.cancelToken.unsubscribe(g), o.signal && o.signal.removeEventListener("abort", g);
    }
    let N = new XMLHttpRequest();
    N.open(o.method.toUpperCase(), o.url, !0), N.timeout = o.timeout;
    function V() {
      if (!N)
        return;
      const H = Ee.from(
        "getAllResponseHeaders" in N && N.getAllResponseHeaders()
      ), Z = {
        data: !d || d === "text" || d === "json" ? N.responseText : N.response,
        status: N.status,
        statusText: N.statusText,
        headers: H,
        config: n,
        request: N
      };
      Eb(function($) {
        s($), R();
      }, function($) {
        l($), R();
      }, Z), N = null;
    }
    "onloadend" in N ? N.onloadend = V : N.onreadystatechange = function() {
      !N || N.readyState !== 4 || N.status === 0 && !(N.responseURL && N.responseURL.indexOf("file:") === 0) || setTimeout(V);
    }, N.onabort = function() {
      N && (l(new dt("Request aborted", dt.ECONNABORTED, n, N)), N = null);
    }, N.onerror = function() {
      l(new dt("Network Error", dt.ERR_NETWORK, n, N)), N = null;
    }, N.ontimeout = function() {
      let W = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const Z = o.transitional || Tb;
      o.timeoutErrorMessage && (W = o.timeoutErrorMessage), l(new dt(
        W,
        Z.clarifyTimeoutError ? dt.ETIMEDOUT : dt.ECONNABORTED,
        n,
        N
      )), N = null;
    }, m === void 0 && f.setContentType(null), "setRequestHeader" in N && U.forEach(f.toJSON(), function(W, Z) {
      N.setRequestHeader(Z, W);
    }), U.isUndefined(o.withCredentials) || (N.withCredentials = !!o.withCredentials), d && d !== "json" && (N.responseType = o.responseType), h && ([x, E] = Fl(h, !0), N.addEventListener("progress", x)), p && N.upload && ([b, D] = Fl(p), N.upload.addEventListener("progress", b), N.upload.addEventListener("loadend", D)), (o.cancelToken || o.signal) && (g = (H) => {
      N && (l(!H || H.type ? new ka(null, n, N) : H), N.abort(), N = null);
    }, o.cancelToken && o.cancelToken.subscribe(g), o.signal && (o.signal.aborted ? g() : o.signal.addEventListener("abort", g)));
    const L = DD(o.url);
    if (L && de.protocols.indexOf(L) === -1) {
      l(new dt("Unsupported protocol " + L + ":", dt.ERR_BAD_REQUEST, n));
      return;
    }
    N.send(m || null);
  });
}, LD = (n, i) => {
  const { length: s } = n = n ? n.filter(Boolean) : [];
  if (i || s) {
    let l = new AbortController(), o;
    const m = function(h) {
      if (!o) {
        o = !0, d();
        const g = h instanceof Error ? h : this.reason;
        l.abort(g instanceof dt ? g : new ka(g instanceof Error ? g.message : g));
      }
    };
    let f = i && setTimeout(() => {
      f = null, m(new dt(`timeout ${i} of ms exceeded`, dt.ETIMEDOUT));
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
}, kD = function* (n, i) {
  let s = n.byteLength;
  if (s < i) {
    yield n;
    return;
  }
  let l = 0, o;
  for (; l < s; )
    o = l + i, yield n.slice(l, o), l = o;
}, HD = async function* (n, i) {
  for await (const s of qD(n))
    yield* kD(s, i);
}, qD = async function* (n) {
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
  const o = HD(n, i);
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
}, oo = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ob = oo && typeof ReadableStream == "function", PD = oo && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((n) => (i) => n.encode(i))(new TextEncoder()) : async (n) => new Uint8Array(await new Response(n).arrayBuffer())), Db = (n, ...i) => {
  try {
    return !!n(...i);
  } catch {
    return !1;
  }
}, YD = Ob && Db(() => {
  let n = !1;
  const i = new Request(de.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return n = !0, "half";
    }
  }).headers.has("Content-Type");
  return n && !i;
}), r0 = 64 * 1024, Df = Ob && Db(() => U.isReadableStream(new Response("").body)), Wl = {
  stream: Df && ((n) => n.body)
};
oo && ((n) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((i) => {
    !Wl[i] && (Wl[i] = U.isFunction(n[i]) ? (s) => s[i]() : (s, l) => {
      throw new dt(`Response type '${i}' is not supported`, dt.ERR_NOT_SUPPORT, l);
    });
  });
})(new Response());
const GD = async (n) => {
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
    return (await PD(n)).byteLength;
}, XD = async (n, i) => {
  const s = U.toFiniteNumber(n.getContentLength());
  return s ?? GD(i);
}, KD = oo && (async (n) => {
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
  let D = LD([o, m && m.toAbortSignal()], f), E;
  const R = D && D.unsubscribe && (() => {
    D.unsubscribe();
  });
  let N;
  try {
    if (p && YD && s !== "get" && s !== "head" && (N = await XD(g, l)) !== 0) {
      let Z = new Request(i, {
        method: "POST",
        body: l,
        duplex: "half"
      }), Q;
      if (U.isFormData(l) && (Q = Z.headers.get("content-type")) && g.setContentType(Q), Z.body) {
        const [$, G] = n0(
          N,
          Fl(i0(p))
        );
        l = s0(Z.body, r0, $, G);
      }
    }
    U.isString(b) || (b = b ? "include" : "omit");
    const V = "credentials" in Request.prototype;
    E = new Request(i, {
      ...x,
      signal: D,
      method: s.toUpperCase(),
      headers: g.normalize().toJSON(),
      body: l,
      duplex: "half",
      credentials: V ? b : void 0
    });
    let L = await fetch(E, x);
    const H = Df && (h === "stream" || h === "response");
    if (Df && (d || H && R)) {
      const Z = {};
      ["status", "statusText", "headers"].forEach((ot) => {
        Z[ot] = L[ot];
      });
      const Q = U.toFiniteNumber(L.headers.get("content-length")), [$, G] = d && n0(
        Q,
        Fl(i0(d), !0)
      ) || [];
      L = new Response(
        s0(L.body, r0, $, () => {
          G && G(), R && R();
        }),
        Z
      );
    }
    h = h || "text";
    let W = await Wl[U.findKey(Wl, h) || "text"](L, n);
    return !H && R && R(), await new Promise((Z, Q) => {
      Eb(Z, Q, {
        data: W,
        headers: Ee.from(L.headers),
        status: L.status,
        statusText: L.statusText,
        config: n,
        request: E
      });
    });
  } catch (V) {
    throw R && R(), V && V.name === "TypeError" && /Load failed|fetch/i.test(V.message) ? Object.assign(
      new dt("Network Error", dt.ERR_NETWORK, n, E),
      {
        cause: V.cause || V
      }
    ) : dt.from(V, V && V.code, n, E);
  }
}), Cf = {
  http: lD,
  xhr: BD,
  fetch: KD
};
U.forEach(Cf, (n, i) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: i });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: i });
  }
});
const l0 = (n) => `- ${n}`, QD = (n) => U.isFunction(n) || n === null || n === !1, Cb = {
  getAdapter: (n) => {
    n = U.isArray(n) ? n : [n];
    const { length: i } = n;
    let s, l;
    const o = {};
    for (let m = 0; m < i; m++) {
      s = n[m];
      let f;
      if (l = s, !QD(s) && (l = Cf[(f = String(s)).toLowerCase()], l === void 0))
        throw new dt(`Unknown adapter '${f}'`);
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
      throw new dt(
        "There is no suitable adapter to dispatch the request " + f,
        "ERR_NOT_SUPPORT"
      );
    }
    return l;
  },
  adapters: Cf
};
function Jc(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new ka(null, n);
}
function o0(n) {
  return Jc(n), n.headers = Ee.from(n.headers), n.data = Wc.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), Cb.getAdapter(n.adapter || fr.adapter)(n).then(function(l) {
    return Jc(n), l.data = Wc.call(
      n,
      n.transformResponse,
      l
    ), l.headers = Ee.from(l.headers), l;
  }, function(l) {
    return Ab(l) || (Jc(n), l && l.response && (l.response.data = Wc.call(
      n,
      n.transformResponse,
      l.response
    ), l.response.headers = Ee.from(l.response.headers))), Promise.reject(l);
  });
}
const Nb = "1.10.0", uo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, i) => {
  uo[n] = function(l) {
    return typeof l === n || "a" + (i < 1 ? "n " : " ") + n;
  };
});
const u0 = {};
uo.transitional = function(i, s, l) {
  function o(m, f) {
    return "[Axios v" + Nb + "] Transitional option '" + m + "'" + f + (l ? ". " + l : "");
  }
  return (m, f, d) => {
    if (i === !1)
      throw new dt(
        o(f, " has been removed" + (s ? " in " + s : "")),
        dt.ERR_DEPRECATED
      );
    return s && !u0[f] && (u0[f] = !0, console.warn(
      o(
        f,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), i ? i(m, f, d) : !0;
  };
};
uo.spelling = function(i) {
  return (s, l) => (console.warn(`${l} is likely a misspelling of ${i}`), !0);
};
function ZD(n, i, s) {
  if (typeof n != "object")
    throw new dt("options must be an object", dt.ERR_BAD_OPTION_VALUE);
  const l = Object.keys(n);
  let o = l.length;
  for (; o-- > 0; ) {
    const m = l[o], f = i[m];
    if (f) {
      const d = n[m], p = d === void 0 || f(d, m, n);
      if (p !== !0)
        throw new dt("option " + m + " must be " + p, dt.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0)
      throw new dt("Unknown option " + m, dt.ERR_BAD_OPTION);
  }
}
const Hl = {
  assertOptions: ZD,
  validators: uo
}, on = Hl.validators;
let Vi = class {
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
    typeof i == "string" ? (s = s || {}, s.url = i) : s = i || {}, s = Bi(this.defaults, s);
    const { transitional: l, paramsSerializer: o, headers: m } = s;
    l !== void 0 && Hl.assertOptions(l, {
      silentJSONParsing: on.transitional(on.boolean),
      forcedJSONParsing: on.transitional(on.boolean),
      clarifyTimeoutError: on.transitional(on.boolean)
    }, !1), o != null && (U.isFunction(o) ? s.paramsSerializer = {
      serialize: o
    } : Hl.assertOptions(o, {
      encode: on.function,
      serialize: on.function
    }, !0)), s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0), Hl.assertOptions(s, {
      baseUrl: on.spelling("baseURL"),
      withXsrfToken: on.spelling("withXSRFToken")
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
    ), s.headers = Ee.concat(f, m);
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
    let D = s;
    for (b = 0; b < x; ) {
      const E = d[b++], R = d[b++];
      try {
        D = E(D);
      } catch (N) {
        R.call(this, N);
        break;
      }
    }
    try {
      g = o0.call(this, D);
    } catch (E) {
      return Promise.reject(E);
    }
    for (b = 0, x = h.length; b < x; )
      g = g.then(h[b++], h[b++]);
    return g;
  }
  getUri(i) {
    i = Bi(this.defaults, i);
    const s = Mb(i.baseURL, i.url, i.allowAbsoluteUrls);
    return Sb(s, i.params, i.paramsSerializer);
  }
};
U.forEach(["delete", "get", "head", "options"], function(i) {
  Vi.prototype[i] = function(s, l) {
    return this.request(Bi(l || {}, {
      method: i,
      url: s,
      data: (l || {}).data
    }));
  };
});
U.forEach(["post", "put", "patch"], function(i) {
  function s(l) {
    return function(m, f, d) {
      return this.request(Bi(d || {}, {
        method: i,
        headers: l ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: m,
        data: f
      }));
    };
  }
  Vi.prototype[i] = s(), Vi.prototype[i + "Form"] = s(!0);
});
let FD = class jb {
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
      l.reason || (l.reason = new ka(m, f, d), s(l.reason));
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
function WD(n) {
  return function(s) {
    return n.apply(null, s);
  };
}
function JD(n) {
  return U.isObject(n) && n.isAxiosError === !0;
}
const Nf = {
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
Object.entries(Nf).forEach(([n, i]) => {
  Nf[i] = n;
});
function _b(n) {
  const i = new Vi(n), s = ub(Vi.prototype.request, i);
  return U.extend(s, Vi.prototype, i, { allOwnKeys: !0 }), U.extend(s, i, null, { allOwnKeys: !0 }), s.create = function(o) {
    return _b(Bi(n, o));
  }, s;
}
const Zt = _b(fr);
Zt.Axios = Vi;
Zt.CanceledError = ka;
Zt.CancelToken = FD;
Zt.isCancel = Ab;
Zt.VERSION = Nb;
Zt.toFormData = lo;
Zt.AxiosError = dt;
Zt.Cancel = Zt.CanceledError;
Zt.all = function(i) {
  return Promise.all(i);
};
Zt.spread = WD;
Zt.isAxiosError = JD;
Zt.mergeConfig = Bi;
Zt.AxiosHeaders = Ee;
Zt.formToJSON = (n) => wb(U.isHTMLForm(n) ? new FormData(n) : n);
Zt.getAdapter = Cb.getAdapter;
Zt.HttpStatusCode = Nf;
Zt.default = Zt;
const {
  Axios: oC,
  AxiosError: uC,
  CanceledError: cC,
  isCancel: fC,
  CancelToken: mC,
  VERSION: dC,
  all: hC,
  Cancel: pC,
  isAxiosError: yC,
  spread: gC,
  toFormData: vC,
  AxiosHeaders: bC,
  HttpStatusCode: xC,
  formToJSON: SC,
  getAdapter: TC,
  mergeConfig: wC
} = Zt, $c = {
  NEXT_PUBLIC_CUSTOMER_API: "https://mimin-test.mimin.io/mimin-backend",
  NEXT_PUBLIC_CHATBOT_URL: "https://mimin-api.mimin.io/backend-gen-ai",
  NEXT_PUBLIC_OPENAI_URL: "https://api.openai.com"
};
function Ca(n, i) {
  const s = $c.NEXT_PUBLIC_CUSTOMER_API, l = $c.NEXT_PUBLIC_CHATBOT_URL, o = $c.NEXT_PUBLIC_OPENAI_URL, m = i === "openai" ? "v1" : "api", f = i === "customer" ? `${s}/${m}` : i === "chatbot" ? `${l}/${m}` : `${o}/${m}`;
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
}, $D = ({
  isVisible: n,
  onToggleCallWindow: i
}) => {
  const [s, l] = K.useState(!1), [o, m] = K.useState("00:00:00"), [f, d] = K.useState(null), [p, h] = K.useState(!1), [g, b] = K.useState(null), [x, D] = K.useState(null), [E, R] = K.useState(
    "idle"
  ), { config: N, signature: V } = sr(), L = K.useRef(null), H = K.useRef([]), W = K.useRef(null), Z = K.useRef(null), Q = K.useRef(null), $ = async () => {
    try {
      const rt = new AudioContext(), mt = rt.createMediaStreamDestination();
      if (Z.current = await navigator.mediaDevices.getUserMedia({ audio: !0 }), rt.createMediaStreamSource(Z.current).connect(mt), Q.current && Q.current.srcObject) {
        const P = Q.current.srcObject;
        rt.createMediaStreamSource(P).connect(mt);
      }
      W.current = mt.stream;
      const Vt = MediaRecorder.isTypeSupported("audio/webm") ? "audio/webm" : "audio/mp4";
      L.current = new MediaRecorder(mt.stream, {
        mimeType: Vt
      }), H.current = [], L.current.ondataavailable = (P) => {
        P.data.size > 0 && H.current.push(P.data);
      }, L.current.onstop = () => {
        const P = new Blob(H.current, { type: Vt }), B = URL.createObjectURL(P);
        b(B);
      }, L.current.start(), h(!0);
      const { isError: Ft, ip: kt } = await zb();
      if (!Ft) {
        const P = await Ca("axios", "customer")({
          url: `/v1/call-session/create-draft/${N?.credentials?.username}`,
          method: "POST",
          data: { phone_number: kt },
          headers: { "x-api-key": N?.credentials?.apiKey }
        });
        P.data?.session_id._id && d(P.data.session_id._id);
      }
    } catch (rt) {
      console.error("Error starting recording:", rt);
    }
  }, G = () => {
    L.current && p && (L.current.stop(), h(!1), W.current && W.current.getTracks().forEach((rt) => rt.stop()), Z.current && (Z.current.getTracks().forEach((rt) => rt.stop()), Z.current = null), f && (L.current.onstop = async () => {
      const rt = MediaRecorder.isTypeSupported("audio/webm") ? "audio/webm" : "audio/mp4", mt = new Blob(H.current, { type: rt });
      b(URL.createObjectURL(mt));
      try {
        const Tt = await AT(mt);
        await Ca("axios", "customer")({
          url: `/v1/call-session/update/${N?.credentials?.username}/${f}`,
          method: "POST",
          data: { audio_base64: Tt },
          headers: { "x-api-key": N?.credentials?.apiKey }
        }), d(null);
      } catch (Tt) {
        console.error("Failed to upload recording:", Tt);
      }
    }));
  };
  K.useEffect(() => {
    let rt = null, mt = null;
    if (n)
      return (async () => {
        mt = new RTCPeerConnection();
        const Tt = await Ca("axios", "customer")(
          `/v1/call-session/create-realtime-session/${N?.credentials?.username}`,
          {
            method: "POST",
            headers: {
              "x-api-key": N?.credentials?.apiKey
            }
          }
        ), { client_secret: Vt, model: Ft, instructions: kt } = Tt.data;
        mt.ontrack = (z) => {
          Q.current && (D(z.streams[0]), Q.current.srcObject = z.streams[0], Q.current.play());
        };
        const P = mt.createDataChannel("response"), B = () => {
          P.send(
            JSON.stringify({
              type: "session.update",
              session: {
                modalities: ["text", "audio"],
                tools: []
              }
            })
          );
        };
        P.addEventListener("message", (z) => {
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
        }), P.addEventListener("open", async () => {
          B(), $();
          const z = {
            type: "response.create",
            response: {
              instructions: kt
            }
          };
          P.send(JSON.stringify(z));
        }), navigator.mediaDevices.getUserMedia({ audio: !0 }).then((z) => {
          rt = z, z.getTracks().forEach(
            (ft) => mt.addTransceiver(ft, { direction: "sendrecv" })
          ), mt.createOffer().then((ft) => {
            mt.setLocalDescription(ft), Ca("fetch", "openai")(`/realtime?model=${Ft}`, {
              method: "POST",
              body: ft.sdp,
              headers: {
                Authorization: `Bearer ${Vt.value}`,
                "Content-Type": "application/sdp"
              },
              // @ts-expect-error: fetch support duplex property
              duplex: "half"
            }).then((pt) => pt.text()).then((pt) => {
              mt.setRemoteDescription({
                sdp: pt,
                type: "answer"
              });
            }).catch((pt) => console.log(pt));
          });
        });
      })(), () => {
        rt && rt.getTracks().forEach((Tt) => Tt.stop()), mt && (mt.getSenders().forEach((Tt) => Tt.track?.stop()), mt.close());
      };
  }, [n]), K.useEffect(() => () => {
    g && URL.revokeObjectURL(g);
  }, [g]);
  const ot = () => {
    l(!0), setTimeout(() => {
      p && G(), Q.current && (m("00:00:00"), Q.current.pause()), D(null), i(), l(!1);
    }, 300);
  };
  return n ? /* @__PURE__ */ A.jsx(
    ye.div,
    {
      className: "mimin-absolute mimin-inset-0 mimin-bg-white mimin-z-10",
      initial: "hidden",
      animate: "visible",
      exit: "exit",
      variants: pO,
      children: /* @__PURE__ */ A.jsx("div", { className: "mimin-h-full mimin-px-6 mimin-py-10 mimin-overflow-y-auto", children: /* @__PURE__ */ A.jsxs("div", { className: "mimin-flex mimin-flex-col mimin-items-center mimin-justify-center", children: [
        /* @__PURE__ */ A.jsx(
          ye.h4,
          {
            className: "mimin-text-[#0096a2] mimin-text-xl mimin-font-bold mimin-mb-6",
            variants: vO,
            initial: "initial",
            animate: "animate",
            children: "IN CALL"
          }
        ),
        /* @__PURE__ */ A.jsxs("div", { className: "mimin-relative", children: [
          /* @__PURE__ */ A.jsx(
            ye.div,
            {
              className: "mimin-flex mimin-items-center mimin-justify-center mimin-p-4 mimin-rounded-full mimin-w-[204px] mimin-h-[204px] mimin-bg-gradient-to-br mimin-from-[#0096a2]/30 mimin-to-[#f26075]/30",
              variants: yO,
              initial: "initial",
              animate: "animate",
              children: /* @__PURE__ */ A.jsx(
                ye.div,
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
                    ye.div,
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
            SO,
            {
              audioStream: x,
              isActive: n
            }
          ) }),
          !!x && /* @__PURE__ */ A.jsx("div", { className: "mimin-absolute mimin-text-white mimin-text-xs mimin-capitalize mimin-tracking-wide mimin-bottom-[25%] mimin-left-[50%] -mimin-translate-x-[50%] mimin-mt-4 mimin-animate-pulse", children: E })
        ] }),
        /* @__PURE__ */ A.jsx(
          ye.p,
          {
            className: "mimin-text-[#0096a2] mimin-text-base mimin-font-bold mimin-mt-5",
            variants: Zc,
            children: "MIMIN AI"
          }
        ),
        /* @__PURE__ */ A.jsx(
          ye.p,
          {
            className: "mimin-text-[#0096a2] mimin-text-sm mimin-font-medium mimin-mt-0",
            variants: Zc,
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.3 },
            children: o
          },
          o
        ),
        /* @__PURE__ */ A.jsx(
          ye.div,
          {
            className: "mimin-h-[1.5px] mimin-w-full mimin-bg-gray-200 mimin-my-6",
            variants: bO,
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
              m(wT(rt.target.currentTime));
            }
          }
        ),
        /* @__PURE__ */ A.jsx(
          ye.div,
          {
            className: "mimin-grid mimin-grid-cols-2 mimin-gap-4 mimin-w-full",
            variants: Zc,
            children: /* @__PURE__ */ A.jsx("div", { className: "mimin-col-span-2 mimin-flex mimin-items-center mimin-justify-center", children: /* @__PURE__ */ A.jsx(
              ye.button,
              {
                type: "button",
                className: "mimin-cursor-pointer mimin-bg-gradient-to-br mimin-from-[#0096a2]/30 mimin-to-[#f26075]/30 mimin-rounded-full mimin-w-[60px] mimin-h-[60px] mimin-p-4 mimin-aspect-square mimin-flex mimin-items-center mimin-justify-center",
                variants: gO,
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
          ye.div,
          {
            className: "mimin-absolute mimin-inset-0 mimin-pointer-events-none",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.5 },
            children: [...Array(3)].map((rt, mt) => /* @__PURE__ */ A.jsx(
              ye.div,
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
                  delay: mt * 1,
                  ease: "easeOut"
                }
              },
              mt
            ))
          }
        )
      ] }) })
    }
  ) : null;
}, ID = _f()(
  zf(
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
), tC = ({ onClickStartChat: n }) => /* @__PURE__ */ A.jsxs("div", { className: "mimin-h-full mimin-overflow-y-auto mimin-bg-[#0096A2] mimin-flex mimin-flex-col mimin-justify-between", children: [
  /* @__PURE__ */ A.jsxs("div", { className: "mimin-flex mimin-flex-col mimin-items-center mimin-justify-center mimin-py-11 mimin-px-11", children: [
    /* @__PURE__ */ A.jsx("h2", { className: "mimin-text-sm mimin-font-bold mimin-text-white", children: "MINA AGENT" }),
    /* @__PURE__ */ A.jsx(
      "img",
      {
        src: "https://res.cloudinary.com/dctqloe37/image/upload/v1752571979/Icon_AI_Agent_lrdrhr.png",
        alt: " ",
        width: 1e3,
        height: 1e3,
        className: "mimin-w-40 mimin-h-w-40 mimin-rounded-full mimin-mt-10"
      }
    )
  ] }),
  /* @__PURE__ */ A.jsxs("div", { className: "mimin-flex mimin-flex-col mimin-items-center mimin-justify-center mimin-px-6 mimin-py-10 mimin-rounded-t-3xl mimin-mt-6 mimin-bg-white mimin-h-max", children: [
    /* @__PURE__ */ A.jsx("h3", { className: "mimin-text-lg mimin-font-bold mimin-text-[#0096A2] mimin-text-center mimin-px-8", children: "Hai, Aku Mina – AI Agent Kamu! 🤖" }),
    /* @__PURE__ */ A.jsx("p", { className: "mimin-text-sm mimin-text-gray-500 mimin-text-center mimin-mt-7 mimin-mb-7", children: "Butuh bantuan atau info lainnya? Chat dengan Mina sekarang juga, ya!" }),
    /* @__PURE__ */ A.jsx(
      "button",
      {
        onClick: n,
        className: "mimin-bg-[#0096A2] mimin-text-white mimin-px-4 mimin-py-2 mimin-rounded-md mimin-w-full mimin-cursor-pointer mimin-disabled:opacity-50 mimin-disabled:cursor-not-allowed",
        children: "Start Chat"
      }
    )
  ] })
] }), eC = {
  limit: 10,
  page: 0,
  pages: 0,
  size: 10
}, nC = ({
  config: n,
  signature: i
}) => {
  const [s, l] = K.useState(!1), [o, m] = K.useState(!1), { isFirstTime: f, setIsFirstTime: d } = ID(), [p, h] = K.useState(""), [g, b] = K.useState(""), [x, D] = K.useState(eC), { setConfig: E, setSignature: R } = sr(), [N, V] = K.useState(!1), [L, H] = K.useState(!1), [W, Z] = K.useState(!1), [Q, $] = K.useState(!1), {
    interactions: G,
    addInteraction: ot,
    updateAiInteractionByIndex: rt,
    chatType: mt,
    setChatType: Tt
  } = f0(), Vt = () => {
    N ? V(!1) : (Z(!0), V(!0));
  }, Ft = () => {
    H(!L);
  }, kt = async (P) => {
    const { isError: B, errorMessage: z, ip: ft, userAgent: pt } = await zb();
    if (B) {
      console.error(z);
      return;
    }
    l(!0);
    const w = {
      name: pt,
      phone: ft,
      message_id: crypto.randomUUID(),
      message: P,
      media_type: "text",
      media: "",
      type: mt || ""
    };
    try {
      const X = await Ca("fetch", "chatbot")(
        `/chat/new-website/${n?.credentials?.username}`,
        {
          headers: {
            Signature: i,
            Accept: "text/event-stream",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(w),
          method: "POST"
        }
      );
      if (!X.ok) {
        console.error("Failed to send message");
        return;
      }
      const J = X.body.pipeThrough(new TextDecoderStream()).getReader();
      for (; ; ) {
        const { value: F, done: at } = await J.read();
        if (at) break;
        const wt = '{"event": ';
        F.split(`data: ${wt}`).filter(Boolean).map(
          (Ct) => JSON.parse(`${wt}${Ct}`.replace(/\n\n$/gm, ""))
        ).filter((Ct) => Ct.event === "token" ? !!Ct.data : !0).forEach(async (Ct) => {
          if (Ct.event === "payload") {
            const At = {
              additional_kwargs: {},
              content: Ct.message,
              example: !1
            };
            rt(0, At), mt || Tt(Ct.type), h(Ct.chat_history_id);
          } else Ct.event === "token" && b((At) => At + Ct.data);
        });
      }
    } catch {
      console.error(
        "We apologize, a system error has occurred. Please try again!"
      );
    } finally {
      l(!1);
    }
  };
  return K.useEffect(() => {
    E(n || null), R(i || "");
  }, []), /* @__PURE__ */ A.jsx(UE, { children: /* @__PURE__ */ A.jsxs("div", { className: "mimin-fixed mimin-bottom-6 mimin-right-6 mimin-z-[9999]", children: [
    /* @__PURE__ */ A.jsxs(
      "button",
      {
        id: "mimin-widget-btn-trigger",
        className: "mimin-relative mimin-flex mimin-items-center mimin-gap-2.5 mimin-px-4 mimin-py-2 mimin-rounded-full mimin-border mimin-border-[#0096a2] mimin-shadow-md mimin-transition-all mimin-duration-300 mimin-ease-in-out mimin-cursor-pointer",
        style: {
          backgroundColor: N ? "#0096a2" : n?.theme?.button?.backgroundColor || "#ffffff",
          color: N ? "#ffffff" : n?.theme?.button?.textColor || "#0096a2"
        },
        onClick: Vt,
        children: [
          /* @__PURE__ */ A.jsx(
            "img",
            {
              src: n?.theme?.button?.iconSrc || "https://appstaging.mimin.io/favicon.ico",
              alt: "ICON",
              className: "mimin-w-4 mimin-h-auto"
            }
          ),
          /* @__PURE__ */ A.jsx("span", { className: "mimin-text-sm mimin-font-bold", children: n?.theme?.button?.tooltip || "Ask Mimin" }),
          L && !N && /* @__PURE__ */ A.jsx(
            ye.div,
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
      ye.div,
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
              (n?.theme?.chatWindow.needAuthentication || !1) && !Q && !f && /* @__PURE__ */ A.jsx(jS, {}),
              (Q || !n?.theme?.chatWindow.needAuthentication) && !f && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
                /* @__PURE__ */ A.jsx(
                  qS,
                  {
                    onToggleCallWindow: Ft,
                    onToggleChatWindow: Vt
                  }
                ),
                /* @__PURE__ */ A.jsx(
                  jw,
                  {
                    messages: G,
                    currentResponseMsg: g,
                    loading: s,
                    fetching: o
                  }
                ),
                /* @__PURE__ */ A.jsx(
                  zw,
                  {
                    onSendMessage: (P) => {
                      b(""), P = P.trim().replaceAll(/\n\n+/g, `

`);
                      const B = {
                        human: {
                          content: P,
                          additional_kwargs: {},
                          example: !1
                        },
                        date: /* @__PURE__ */ new Date(),
                        id: crypto.randomUUID()
                      };
                      ot(B), kt(P);
                    },
                    loading: s,
                    fetching: o
                  }
                ),
                /* @__PURE__ */ A.jsx(
                  $D,
                  {
                    isVisible: L,
                    onToggleCallWindow: Ft
                  }
                )
              ] }),
              f && /* @__PURE__ */ A.jsx(
                tC,
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
function iC() {
  if (!document.getElementById("mimin-chatbot-widget-css")) {
    const n = document.createElement("link");
    n.rel = "stylesheet", n.href = "https://unpkg.com/mimin-chatbot-widget-react@latest/dist/chat-widget.css", n.id = "mimin-chatbot-widget-css", document.head.appendChild(n);
  }
}
const aC = {
  init: async function(n = {}) {
    try {
      if (console.log("INIT V2 INDEX>TSX"), iC(), !n.credentials)
        throw new Error("credentials are required");
      if (!n.credentials.username)
        throw new Error("username is required");
      if (!n.credentials.apiKey)
        throw new Error("apiKey is required");
      const i = await Ca("fetch", "customer")(
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
          nC,
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
window.Chatbot = aC;
export {
  aC as Chatbot
};
//# sourceMappingURL=chat-widget.js.map
