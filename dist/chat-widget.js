function c0(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ec = { exports: {} }, Us = {};
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
function nS() {
  if (my) return Us;
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
  return Us.Fragment = i, Us.jsx = s, Us.jsxs = s, Us;
}
var dy;
function iS() {
  return dy || (dy = 1, Ec.exports = nS()), Ec.exports;
}
var A = iS(), Mc = { exports: {} }, Bs = {}, Rc = { exports: {} }, Oc = {};
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
function aS() {
  return hy || (hy = 1, function(n) {
    function i(Z, B) {
      var z = Z.length;
      Z.push(B);
      t: for (; 0 < z; ) {
        var ct = z - 1 >>> 1, bt = Z[ct];
        if (0 < o(bt, B))
          Z[ct] = B, Z[z] = bt, z = ct;
        else break t;
      }
    }
    function s(Z) {
      return Z.length === 0 ? null : Z[0];
    }
    function l(Z) {
      if (Z.length === 0) return null;
      var B = Z[0], z = Z.pop();
      if (z !== B) {
        Z[0] = z;
        t: for (var ct = 0, bt = Z.length, w = bt >>> 1; ct < w; ) {
          var K = 2 * (ct + 1) - 1, W = Z[K], F = K + 1, at = Z[F];
          if (0 > o(W, z))
            F < bt && 0 > o(at, W) ? (Z[ct] = at, Z[F] = z, ct = F) : (Z[ct] = W, Z[K] = z, ct = K);
          else if (F < bt && 0 > o(at, z))
            Z[ct] = at, Z[F] = z, ct = F;
          else break t;
        }
      }
      return B;
    }
    function o(Z, B) {
      var z = Z.sortIndex - B.sortIndex;
      return z !== 0 ? z : Z.id - B.id;
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
    var p = [], h = [], g = 1, b = null, x = 3, C = !1, E = !1, R = !1, j = !1, U = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, q = typeof setImmediate < "u" ? setImmediate : null;
    function J(Z) {
      for (var B = s(h); B !== null; ) {
        if (B.callback === null) l(h);
        else if (B.startTime <= Z)
          l(h), B.sortIndex = B.expirationTime, i(p, B);
        else break;
        B = s(h);
      }
    }
    function Q(Z) {
      if (R = !1, J(Z), !E)
        if (s(p) !== null)
          E = !0, G || (G = !0, Ut());
        else {
          var B = s(h);
          B !== null && Mt(Q, B.startTime - Z);
        }
    }
    var G = !1, $ = -1, Y = 5, lt = -1;
    function St() {
      return j ? !0 : !(n.unstable_now() - lt < Y);
    }
    function _t() {
      if (j = !1, G) {
        var Z = n.unstable_now();
        lt = Z;
        var B = !0;
        try {
          t: {
            E = !1, R && (R = !1, k($), $ = -1), C = !0;
            var z = x;
            try {
              e: {
                for (J(Z), b = s(p); b !== null && !(b.expirationTime > Z && St()); ) {
                  var ct = b.callback;
                  if (typeof ct == "function") {
                    b.callback = null, x = b.priorityLevel;
                    var bt = ct(
                      b.expirationTime <= Z
                    );
                    if (Z = n.unstable_now(), typeof bt == "function") {
                      b.callback = bt, J(Z), B = !0;
                      break e;
                    }
                    b === s(p) && l(p), J(Z);
                  } else l(p);
                  b = s(p);
                }
                if (b !== null) B = !0;
                else {
                  var w = s(h);
                  w !== null && Mt(
                    Q,
                    w.startTime - Z
                  ), B = !1;
                }
              }
              break t;
            } finally {
              b = null, x = z, C = !1;
            }
            B = void 0;
          }
        } finally {
          B ? Ut() : G = !1;
        }
      }
    }
    var Ut;
    if (typeof q == "function")
      Ut = function() {
        q(_t);
      };
    else if (typeof MessageChannel < "u") {
      var At = new MessageChannel(), qt = At.port2;
      At.port1.onmessage = _t, Ut = function() {
        qt.postMessage(null);
      };
    } else
      Ut = function() {
        U(_t, 0);
      };
    function Mt(Z, B) {
      $ = U(function() {
        Z(n.unstable_now());
      }, B);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(Z) {
      Z.callback = null;
    }, n.unstable_forceFrameRate = function(Z) {
      0 > Z || 125 < Z ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Y = 0 < Z ? Math.floor(1e3 / Z) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, n.unstable_next = function(Z) {
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
        return Z();
      } finally {
        x = z;
      }
    }, n.unstable_requestPaint = function() {
      j = !0;
    }, n.unstable_runWithPriority = function(Z, B) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Z = 3;
      }
      var z = x;
      x = Z;
      try {
        return B();
      } finally {
        x = z;
      }
    }, n.unstable_scheduleCallback = function(Z, B, z) {
      var ct = n.unstable_now();
      switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? ct + z : ct) : z = ct, Z) {
        case 1:
          var bt = -1;
          break;
        case 2:
          bt = 250;
          break;
        case 5:
          bt = 1073741823;
          break;
        case 4:
          bt = 1e4;
          break;
        default:
          bt = 5e3;
      }
      return bt = z + bt, Z = {
        id: g++,
        callback: B,
        priorityLevel: Z,
        startTime: z,
        expirationTime: bt,
        sortIndex: -1
      }, z > ct ? (Z.sortIndex = z, i(h, Z), s(p) === null && Z === s(h) && (R ? (k($), $ = -1) : R = !0, Mt(Q, z - ct))) : (Z.sortIndex = bt, i(p, Z), E || C || (E = !0, G || (G = !0, Ut()))), Z;
    }, n.unstable_shouldYield = St, n.unstable_wrapCallback = function(Z) {
      var B = x;
      return function() {
        var z = x;
        x = B;
        try {
          return Z.apply(this, arguments);
        } finally {
          x = z;
        }
      };
    };
  }(Oc)), Oc;
}
var py;
function sS() {
  return py || (py = 1, Rc.exports = aS()), Rc.exports;
}
var Cc = { exports: {} }, dt = {}, yy;
function rS() {
  if (yy) return dt;
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
  }, R = Object.assign, j = {};
  function U(w, K, W) {
    this.props = w, this.context = K, this.refs = j, this.updater = W || E;
  }
  U.prototype.isReactComponent = {}, U.prototype.setState = function(w, K) {
    if (typeof w != "object" && typeof w != "function" && w != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, w, K, "setState");
  }, U.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function k() {
  }
  k.prototype = U.prototype;
  function q(w, K, W) {
    this.props = w, this.context = K, this.refs = j, this.updater = W || E;
  }
  var J = q.prototype = new k();
  J.constructor = q, R(J, U.prototype), J.isPureReactComponent = !0;
  var Q = Array.isArray, G = { H: null, A: null, T: null, S: null, V: null }, $ = Object.prototype.hasOwnProperty;
  function Y(w, K, W, F, at, Tt) {
    return W = Tt.ref, {
      $$typeof: i,
      type: w,
      key: K,
      ref: W !== void 0 ? W : null,
      props: Tt
    };
  }
  function lt(w, K) {
    return Y(
      w.type,
      K,
      void 0,
      void 0,
      void 0,
      w.props
    );
  }
  function St(w) {
    return typeof w == "object" && w !== null && w.$$typeof === i;
  }
  function _t(w) {
    var K = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(W) {
      return K[W];
    });
  }
  var Ut = /\/+/g;
  function At(w, K) {
    return typeof w == "object" && w !== null && w.key != null ? _t("" + w.key) : K.toString(36);
  }
  function qt() {
  }
  function Mt(w) {
    switch (w.status) {
      case "fulfilled":
        return w.value;
      case "rejected":
        throw w.reason;
      default:
        switch (typeof w.status == "string" ? w.then(qt, qt) : (w.status = "pending", w.then(
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
  function Z(w, K, W, F, at) {
    var Tt = typeof w;
    (Tt === "undefined" || Tt === "boolean") && (w = null);
    var I = !1;
    if (w === null) I = !0;
    else
      switch (Tt) {
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
              return I = w._init, Z(
                I(w._payload),
                K,
                W,
                F,
                at
              );
          }
      }
    if (I)
      return at = at(w), I = F === "" ? "." + At(w, 0) : F, Q(at) ? (W = "", I != null && (W = I.replace(Ut, "$&/") + "/"), Z(at, K, W, "", function(re) {
        return re;
      })) : at != null && (St(at) && (at = lt(
        at,
        W + (at.key == null || w && w.key === at.key ? "" : ("" + at.key).replace(
          Ut,
          "$&/"
        ) + "/") + I
      )), K.push(at)), 1;
    I = 0;
    var se = F === "" ? "." : F + ":";
    if (Q(w))
      for (var mt = 0; mt < w.length; mt++)
        F = w[mt], Tt = se + At(F, mt), I += Z(
          F,
          K,
          W,
          Tt,
          at
        );
    else if (mt = C(w), typeof mt == "function")
      for (w = mt.call(w), mt = 0; !(F = w.next()).done; )
        F = F.value, Tt = se + At(F, mt++), I += Z(
          F,
          K,
          W,
          Tt,
          at
        );
    else if (Tt === "object") {
      if (typeof w.then == "function")
        return Z(
          Mt(w),
          K,
          W,
          F,
          at
        );
      throw K = String(w), Error(
        "Objects are not valid as a React child (found: " + (K === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : K) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return I;
  }
  function B(w, K, W) {
    if (w == null) return w;
    var F = [], at = 0;
    return Z(w, F, "", "", function(Tt) {
      return K.call(W, Tt, at++);
    }), F;
  }
  function z(w) {
    if (w._status === -1) {
      var K = w._result;
      K = K(), K.then(
        function(W) {
          (w._status === 0 || w._status === -1) && (w._status = 1, w._result = W);
        },
        function(W) {
          (w._status === 0 || w._status === -1) && (w._status = 2, w._result = W);
        }
      ), w._status === -1 && (w._status = 0, w._result = K);
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var ct = typeof reportError == "function" ? reportError : function(w) {
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
  function bt() {
  }
  return dt.Children = {
    map: B,
    forEach: function(w, K, W) {
      B(
        w,
        function() {
          K.apply(this, arguments);
        },
        W
      );
    },
    count: function(w) {
      var K = 0;
      return B(w, function() {
        K++;
      }), K;
    },
    toArray: function(w) {
      return B(w, function(K) {
        return K;
      }) || [];
    },
    only: function(w) {
      if (!St(w))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return w;
    }
  }, dt.Component = U, dt.Fragment = l, dt.Profiler = m, dt.PureComponent = q, dt.StrictMode = o, dt.Suspense = h, dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G, dt.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(w) {
      return G.H.useMemoCache(w);
    }
  }, dt.cache = function(w) {
    return function() {
      return w.apply(null, arguments);
    };
  }, dt.cloneElement = function(w, K, W) {
    if (w == null)
      throw Error(
        "The argument must be a React element, but you passed " + w + "."
      );
    var F = R({}, w.props), at = w.key, Tt = void 0;
    if (K != null)
      for (I in K.ref !== void 0 && (Tt = void 0), K.key !== void 0 && (at = "" + K.key), K)
        !$.call(K, I) || I === "key" || I === "__self" || I === "__source" || I === "ref" && K.ref === void 0 || (F[I] = K[I]);
    var I = arguments.length - 2;
    if (I === 1) F.children = W;
    else if (1 < I) {
      for (var se = Array(I), mt = 0; mt < I; mt++)
        se[mt] = arguments[mt + 2];
      F.children = se;
    }
    return Y(w.type, at, void 0, void 0, Tt, F);
  }, dt.createContext = function(w) {
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
  }, dt.createElement = function(w, K, W) {
    var F, at = {}, Tt = null;
    if (K != null)
      for (F in K.key !== void 0 && (Tt = "" + K.key), K)
        $.call(K, F) && F !== "key" && F !== "__self" && F !== "__source" && (at[F] = K[F]);
    var I = arguments.length - 2;
    if (I === 1) at.children = W;
    else if (1 < I) {
      for (var se = Array(I), mt = 0; mt < I; mt++)
        se[mt] = arguments[mt + 2];
      at.children = se;
    }
    if (w && w.defaultProps)
      for (F in I = w.defaultProps, I)
        at[F] === void 0 && (at[F] = I[F]);
    return Y(w, Tt, void 0, void 0, null, at);
  }, dt.createRef = function() {
    return { current: null };
  }, dt.forwardRef = function(w) {
    return { $$typeof: p, render: w };
  }, dt.isValidElement = St, dt.lazy = function(w) {
    return {
      $$typeof: b,
      _payload: { _status: -1, _result: w },
      _init: z
    };
  }, dt.memo = function(w, K) {
    return {
      $$typeof: g,
      type: w,
      compare: K === void 0 ? null : K
    };
  }, dt.startTransition = function(w) {
    var K = G.T, W = {};
    G.T = W;
    try {
      var F = w(), at = G.S;
      at !== null && at(W, F), typeof F == "object" && F !== null && typeof F.then == "function" && F.then(bt, ct);
    } catch (Tt) {
      ct(Tt);
    } finally {
      G.T = K;
    }
  }, dt.unstable_useCacheRefresh = function() {
    return G.H.useCacheRefresh();
  }, dt.use = function(w) {
    return G.H.use(w);
  }, dt.useActionState = function(w, K, W) {
    return G.H.useActionState(w, K, W);
  }, dt.useCallback = function(w, K) {
    return G.H.useCallback(w, K);
  }, dt.useContext = function(w) {
    return G.H.useContext(w);
  }, dt.useDebugValue = function() {
  }, dt.useDeferredValue = function(w, K) {
    return G.H.useDeferredValue(w, K);
  }, dt.useEffect = function(w, K, W) {
    var F = G.H;
    if (typeof W == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return F.useEffect(w, K);
  }, dt.useId = function() {
    return G.H.useId();
  }, dt.useImperativeHandle = function(w, K, W) {
    return G.H.useImperativeHandle(w, K, W);
  }, dt.useInsertionEffect = function(w, K) {
    return G.H.useInsertionEffect(w, K);
  }, dt.useLayoutEffect = function(w, K) {
    return G.H.useLayoutEffect(w, K);
  }, dt.useMemo = function(w, K) {
    return G.H.useMemo(w, K);
  }, dt.useOptimistic = function(w, K) {
    return G.H.useOptimistic(w, K);
  }, dt.useReducer = function(w, K, W) {
    return G.H.useReducer(w, K, W);
  }, dt.useRef = function(w) {
    return G.H.useRef(w);
  }, dt.useState = function(w) {
    return G.H.useState(w);
  }, dt.useSyncExternalStore = function(w, K, W) {
    return G.H.useSyncExternalStore(
      w,
      K,
      W
    );
  }, dt.useTransition = function() {
    return G.H.useTransition();
  }, dt.version = "19.1.0", dt;
}
var gy;
function jf() {
  return gy || (gy = 1, Cc.exports = rS()), Cc.exports;
}
var Dc = { exports: {} }, de = {};
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
function lS() {
  if (vy) return de;
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
  return de.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l, de.createPortal = function(p, h) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(i(299));
    return m(p, h, null, g);
  }, de.flushSync = function(p) {
    var h = f.T, g = l.p;
    try {
      if (f.T = null, l.p = 2, p) return p();
    } finally {
      f.T = h, l.p = g, l.d.f();
    }
  }, de.preconnect = function(p, h) {
    typeof p == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, l.d.C(p, h));
  }, de.prefetchDNS = function(p) {
    typeof p == "string" && l.d.D(p);
  }, de.preinit = function(p, h) {
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
  }, de.preinitModule = function(p, h) {
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
  }, de.preload = function(p, h) {
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
  }, de.preloadModule = function(p, h) {
    if (typeof p == "string")
      if (h) {
        var g = d(h.as, h.crossOrigin);
        l.d.m(p, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: g,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else l.d.m(p);
  }, de.requestFormReset = function(p) {
    l.d.r(p);
  }, de.unstable_batchedUpdates = function(p, h) {
    return p(h);
  }, de.useFormState = function(p, h, g) {
    return f.H.useFormState(p, h, g);
  }, de.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, de.version = "19.1.0", de;
}
var by;
function oS() {
  if (by) return Dc.exports;
  by = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), Dc.exports = lS(), Dc.exports;
}
var xy;
function uS() {
  if (xy) return Bs;
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
  var i = sS(), s = jf(), l = oS();
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
  var b = Object.assign, x = Symbol.for("react.element"), C = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), q = Symbol.for("react.consumer"), J = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), lt = Symbol.for("react.lazy"), St = Symbol.for("react.activity"), _t = Symbol.for("react.memo_cache_sentinel"), Ut = Symbol.iterator;
  function At(t) {
    return t === null || typeof t != "object" ? null : (t = Ut && t[Ut] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var qt = Symbol.for("react.client.reference");
  function Mt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === qt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case R:
        return "Fragment";
      case U:
        return "Profiler";
      case j:
        return "StrictMode";
      case G:
        return "Suspense";
      case $:
        return "SuspenseList";
      case St:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case E:
          return "Portal";
        case J:
          return (t.displayName || "Context") + ".Provider";
        case q:
          return (t._context.displayName || "Context") + ".Consumer";
        case Q:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case Y:
          return e = t.displayName || null, e !== null ? e : Mt(t.type) || "Memo";
        case lt:
          e = t._payload, t = t._init;
          try {
            return Mt(t(e));
          } catch {
          }
      }
    return null;
  }
  var Z = Array.isArray, B = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ct = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, bt = [], w = -1;
  function K(t) {
    return { current: t };
  }
  function W(t) {
    0 > w || (t.current = bt[w], bt[w] = null, w--);
  }
  function F(t, e) {
    w++, bt[w] = t.current, t.current = e;
  }
  var at = K(null), Tt = K(null), I = K(null), se = K(null);
  function mt(t, e) {
    switch (F(I, e), F(Tt, t), F(at, null), e.nodeType) {
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
    W(at), F(at, t);
  }
  function re() {
    W(at), W(Tt), W(I);
  }
  function oi(t) {
    t.memoizedState !== null && F(se, t);
    var e = at.current, a = qp(e, t.type);
    e !== a && (F(Tt, t), F(at, a));
  }
  function mn(t) {
    Tt.current === t && (W(at), W(Tt)), se.current === t && (W(se), Ns._currentValue = ct);
  }
  var co = Object.prototype.hasOwnProperty, fo = i.unstable_scheduleCallback, mo = i.unstable_cancelCallback, zb = i.unstable_shouldYield, Vb = i.unstable_requestPaint, en = i.unstable_now, Ub = i.unstable_getCurrentPriorityLevel, xm = i.unstable_ImmediatePriority, Sm = i.unstable_UserBlockingPriority, mr = i.unstable_NormalPriority, Bb = i.unstable_LowPriority, Tm = i.unstable_IdlePriority, Lb = i.log, kb = i.unstable_setDisableYieldValue, ka = null, Re = null;
  function Nn(t) {
    if (typeof Lb == "function" && kb(t), Re && typeof Re.setStrictMode == "function")
      try {
        Re.setStrictMode(ka, t);
      } catch {
      }
  }
  var Oe = Math.clz32 ? Math.clz32 : Pb, Hb = Math.log, qb = Math.LN2;
  function Pb(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Hb(t) / qb | 0) | 0;
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
  function Ha(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Yb(t, e) {
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
  function qa(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Gb(t, e, a, r, u, c) {
    var y = t.pendingLanes;
    t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
    var v = t.entanglements, S = t.expirationTimes, D = t.hiddenUpdates;
    for (a = y & ~a; 0 < a; ) {
      var L = 31 - Oe(a), P = 1 << L;
      v[L] = 0, S[L] = -1;
      var N = D[L];
      if (N !== null)
        for (D[L] = null, L = 0; L < N.length; L++) {
          var _ = N[L];
          _ !== null && (_.lane &= -536870913);
        }
      a &= ~P;
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
  function Xb(t, e) {
    var a = z.p;
    try {
      return z.p = t, e();
    } finally {
      z.p = a;
    }
  }
  var jn = Math.random().toString(36).slice(2), fe = "__reactFiber$" + jn, be = "__reactProps$" + jn, Li = "__reactContainer$" + jn, go = "__reactEvents$" + jn, Kb = "__reactListeners$" + jn, Qb = "__reactHandles$" + jn, Om = "__reactResources$" + jn, Pa = "__reactMarker$" + jn;
  function vo(t) {
    delete t[fe], delete t[be], delete t[go], delete t[Kb], delete t[Qb];
  }
  function ki(t) {
    var e = t[fe];
    if (e) return e;
    for (var a = t.parentNode; a; ) {
      if (e = a[Li] || a[fe]) {
        if (a = e.alternate, e.child !== null || a !== null && a.child !== null)
          for (t = Xp(t); t !== null; ) {
            if (a = t[fe]) return a;
            t = Xp(t);
          }
        return e;
      }
      t = a, a = t.parentNode;
    }
    return null;
  }
  function Hi(t) {
    if (t = t[fe] || t[Li]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Ya(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function qi(t) {
    var e = t[Om];
    return e || (e = t[Om] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function ee(t) {
    t[Pa] = !0;
  }
  var Cm = /* @__PURE__ */ new Set(), Dm = {};
  function ci(t, e) {
    Pi(t, e), Pi(t + "Capture", e);
  }
  function Pi(t, e) {
    for (Dm[t] = e, t = 0; t < e.length; t++)
      Cm.add(e[t]);
  }
  var Zb = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Nm = {}, jm = {};
  function Fb(t) {
    return co.call(jm, t) ? !0 : co.call(Nm, t) ? !1 : Zb.test(t) ? jm[t] = !0 : (Nm[t] = !0, !1);
  }
  function yr(t, e, a) {
    if (Fb(e))
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
                  var N = _;
                }
                Reflect.construct(t, [], P);
              } else {
                try {
                  P.call();
                } catch (_) {
                  N = _;
                }
                t.call(P.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (_) {
                N = _;
              }
              (P = t()) && typeof P.catch == "function" && P.catch(function() {
              });
            }
          } catch (_) {
            if (_ && N && typeof _.stack == "string")
              return [_.stack, N.stack];
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
                  var L = `
` + S[r].replace(" at new ", " at ");
                  return t.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", t.displayName)), L;
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
  function Wb(t) {
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
        e += Wb(t), t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function Ue(t) {
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
  function Vm(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Jb(t) {
    var e = Vm(t) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
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
    t._valueTracker || (t._valueTracker = Jb(t));
  }
  function Um(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var a = e.getValue(), r = "";
    return t && (r = Vm(t) ? t.checked ? "true" : "false" : t.value), t = r, t !== a ? (e.setValue(t), !0) : !1;
  }
  function br(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var $b = /[\n"\\]/g;
  function Be(t) {
    return t.replace(
      $b,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function To(t, e, a, r, u, c, y, v) {
    t.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? t.type = y : t.removeAttribute("type"), e != null ? y === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ue(e)) : t.value !== "" + Ue(e) && (t.value = "" + Ue(e)) : y !== "submit" && y !== "reset" || t.removeAttribute("value"), e != null ? wo(t, y, Ue(e)) : a != null ? wo(t, y, Ue(a)) : r != null && t.removeAttribute("value"), u == null && c != null && (t.defaultChecked = !!c), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.name = "" + Ue(v) : t.removeAttribute("name");
  }
  function Bm(t, e, a, r, u, c, y, v) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.type = c), e != null || a != null) {
      if (!(c !== "submit" && c !== "reset" || e != null))
        return;
      a = a != null ? "" + Ue(a) : "", e = e != null ? "" + Ue(e) : a, v || e === t.value || (t.value = e), t.defaultValue = e;
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
      for (a = "" + Ue(a), e = null, u = 0; u < t.length; u++) {
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
    if (e != null && (e = "" + Ue(e), e !== t.value && (t.value = e), a == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = a != null ? "" + Ue(a) : "";
  }
  function km(t, e, a, r) {
    if (e == null) {
      if (r != null) {
        if (a != null) throw Error(o(92));
        if (Z(r)) {
          if (1 < r.length) throw Error(o(93));
          r = r[0];
        }
        a = r;
      }
      a == null && (a = ""), e = a;
    }
    a = Ue(e), t.defaultValue = a, r = t.textContent, r === a && r !== "" && r !== null && (t.value = r);
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
  var Ib = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Hm(t, e, a) {
    var r = e.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? r ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : r ? t.setProperty(e, a) : typeof a != "number" || a === 0 || Ib.has(e) ? e === "float" ? t.cssFloat = a : t[e] = ("" + a).trim() : t[e] = a + "px";
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
  var t1 = /* @__PURE__ */ new Map([
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
  ]), e1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function xr(t) {
    return e1.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var Eo = null;
  function Mo(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Ki = null, Qi = null;
  function Pm(t) {
    var e = Hi(t);
    if (e && (t = e.stateNode)) {
      var a = t[be] || null;
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
                var u = r[be] || null;
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
              r = a[e], r.form === t.form && Um(r);
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
  function Ga(t, e) {
    var a = t.stateNode;
    if (a === null) return null;
    var r = a[be] || null;
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
      var Xa = {};
      Object.defineProperty(Xa, "passive", {
        get: function() {
          Oo = !0;
        }
      }), window.addEventListener("test", Xa, Xa), window.removeEventListener("test", Xa, Xa);
    } catch {
      Oo = !1;
    }
  var _n = null, Co = null, Sr = null;
  function Gm() {
    if (Sr) return Sr;
    var t, e = Co, a = e.length, r, u = "value" in _n ? _n.value : _n.textContent, c = u.length;
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
  function xe(t) {
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
  }, Ar = xe(fi), Ka = b({}, fi, { view: 0, detail: 0 }), n1 = xe(Ka), Do, No, Qa, Er = b({}, Ka, {
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
      return "movementX" in t ? t.movementX : (t !== Qa && (Qa && t.type === "mousemove" ? (Do = t.screenX - Qa.screenX, No = t.screenY - Qa.screenY) : No = Do = 0, Qa = t), Do);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : No;
    }
  }), Km = xe(Er), i1 = b({}, Er, { dataTransfer: 0 }), a1 = xe(i1), s1 = b({}, Ka, { relatedTarget: 0 }), jo = xe(s1), r1 = b({}, fi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), l1 = xe(r1), o1 = b({}, fi, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), u1 = xe(o1), c1 = b({}, fi, { data: 0 }), Qm = xe(c1), f1 = {
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
  }, m1 = {
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
  }, d1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function h1(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = d1[t]) ? !!e[t] : !1;
  }
  function _o() {
    return h1;
  }
  var p1 = b({}, Ka, {
    key: function(t) {
      if (t.key) {
        var e = f1[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Tr(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? m1[t.keyCode] || "Unidentified" : "";
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
  }), y1 = xe(p1), g1 = b({}, Er, {
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
  }), Zm = xe(g1), v1 = b({}, Ka, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _o
  }), b1 = xe(v1), x1 = b({}, fi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), S1 = xe(x1), T1 = b({}, Er, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), w1 = xe(T1), A1 = b({}, fi, {
    newState: 0,
    oldState: 0
  }), E1 = xe(A1), M1 = [9, 13, 27, 32], zo = hn && "CompositionEvent" in window, Za = null;
  hn && "documentMode" in document && (Za = document.documentMode);
  var R1 = hn && "TextEvent" in window && !Za, Fm = hn && (!zo || Za && 8 < Za && 11 >= Za), Wm = " ", Jm = !1;
  function $m(t, e) {
    switch (t) {
      case "keyup":
        return M1.indexOf(e.keyCode) !== -1;
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
  function O1(t, e) {
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
      return t === "compositionend" || !zo && $m(t, e) ? (t = Gm(), Sr = Co = _n = null, Zi = !1, t) : null;
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
  var D1 = {
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
    return e === "input" ? !!D1[t.type] : e === "textarea";
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
  var Fa = null, Wa = null;
  function N1(t) {
    Vp(t, 0);
  }
  function Mr(t) {
    var e = Ya(t);
    if (Um(e)) return t;
  }
  function nd(t, e) {
    if (t === "change") return e;
  }
  var id = !1;
  if (hn) {
    var Vo;
    if (hn) {
      var Uo = "oninput" in document;
      if (!Uo) {
        var ad = document.createElement("div");
        ad.setAttribute("oninput", "return;"), Uo = typeof ad.oninput == "function";
      }
      Vo = Uo;
    } else Vo = !1;
    id = Vo && (!document.documentMode || 9 < document.documentMode);
  }
  function sd() {
    Fa && (Fa.detachEvent("onpropertychange", rd), Wa = Fa = null);
  }
  function rd(t) {
    if (t.propertyName === "value" && Mr(Wa)) {
      var e = [];
      ed(
        e,
        Wa,
        t,
        Mo(t)
      ), Ym(N1, e);
    }
  }
  function j1(t, e, a) {
    t === "focusin" ? (sd(), Fa = e, Wa = a, Fa.attachEvent("onpropertychange", rd)) : t === "focusout" && sd();
  }
  function _1(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Mr(Wa);
  }
  function z1(t, e) {
    if (t === "click") return Mr(e);
  }
  function V1(t, e) {
    if (t === "input" || t === "change")
      return Mr(e);
  }
  function U1(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Ce = typeof Object.is == "function" ? Object.is : U1;
  function Ja(t, e) {
    if (Ce(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var a = Object.keys(t), r = Object.keys(e);
    if (a.length !== r.length) return !1;
    for (r = 0; r < a.length; r++) {
      var u = a[r];
      if (!co.call(e, u) || !Ce(t[u], e[u]))
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
  var B1 = hn && "documentMode" in document && 11 >= document.documentMode, Fi = null, Lo = null, $a = null, ko = !1;
  function fd(t, e, a) {
    var r = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    ko || Fi == null || Fi !== br(r) || (r = Fi, "selectionStart" in r && Bo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    }), $a && Ja($a, r) || ($a = r, r = fl(Lo, "onSelect"), 0 < r.length && (e = new Ar(
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
  var dd = di("animationend"), hd = di("animationiteration"), pd = di("animationstart"), L1 = di("transitionrun"), k1 = di("transitionstart"), H1 = di("transitioncancel"), yd = di("transitionend"), gd = /* @__PURE__ */ new Map(), qo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
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
    return Or(t, e, a, r), Cr(t);
  }
  function $i(t, e) {
    return Or(t, null, null, e), Cr(t);
  }
  function bd(t, e, a) {
    t.lanes |= a;
    var r = t.alternate;
    r !== null && (r.lanes |= a);
    for (var u = !1, c = t.return; c !== null; )
      c.childLanes |= a, r = c.alternate, r !== null && (r.childLanes |= a), c.tag === 22 && (t = c.stateNode, t === null || t._visibility & 1 || (u = !0)), t = c, c = c.return;
    return t.tag === 3 ? (c = t.stateNode, u && e !== null && (u = 31 - Oe(a), t = c.hiddenUpdates, r = t[u], r === null ? t[u] = [e] : r.push(e), e.lane = a | 536870912), c) : null;
  }
  function Cr(t) {
    if (50 < ws)
      throw ws = 0, Fu = null, Error(o(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ii = {};
  function q1(t, e, a, r) {
    this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function De(t, e, a, r) {
    return new q1(t, e, a, r);
  }
  function Go(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function pn(t, e) {
    var a = t.alternate;
    return a === null ? (a = De(
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
  function Dr(t, e, a, r, u, c) {
    var y = 0;
    if (r = t, typeof t == "function") Go(t) && (y = 1);
    else if (typeof t == "string")
      y = Yx(
        t,
        a,
        at.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case St:
          return t = De(31, a, e, u), t.elementType = St, t.lanes = c, t;
        case R:
          return hi(a.children, u, c, e);
        case j:
          y = 8, u |= 24;
          break;
        case U:
          return t = De(12, a, e, u | 2), t.elementType = U, t.lanes = c, t;
        case G:
          return t = De(13, a, e, u), t.elementType = G, t.lanes = c, t;
        case $:
          return t = De(19, a, e, u), t.elementType = $, t.lanes = c, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case k:
              case J:
                y = 10;
                break t;
              case q:
                y = 9;
                break t;
              case Q:
                y = 11;
                break t;
              case Y:
                y = 14;
                break t;
              case lt:
                y = 16, r = null;
                break t;
            }
          y = 29, a = Error(
            o(130, t === null ? "null" : typeof t, "")
          ), r = null;
      }
    return e = De(y, a, e, u), e.elementType = t, e.type = r, e.lanes = c, e;
  }
  function hi(t, e, a, r) {
    return t = De(7, t, r, e), t.lanes = a, t;
  }
  function Xo(t, e, a) {
    return t = De(6, t, null, e), t.lanes = a, t;
  }
  function Ko(t, e, a) {
    return e = De(
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
  var ye = null, Pt = null, Et = !1, gi = null, nn = !1, Fo = Error(o(519));
  function vi(t) {
    var e = Error(o(418, ""));
    throw es(Le(e, t)), Fo;
  }
  function Td(t) {
    var e = t.stateNode, a = t.type, r = t.memoizedProps;
    switch (e[fe] = t, e[be] = r, a) {
      case "dialog":
        vt("cancel", e), vt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        vt("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Es.length; a++)
          vt(Es[a], e);
        break;
      case "source":
        vt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        vt("error", e), vt("load", e);
        break;
      case "details":
        vt("toggle", e);
        break;
      case "input":
        vt("invalid", e), Bm(
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
        vt("invalid", e);
        break;
      case "textarea":
        vt("invalid", e), km(e, r.value, r.defaultValue, r.children), vr(e);
    }
    a = r.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || r.suppressHydrationWarning === !0 || kp(e.textContent, a) ? (r.popover != null && (vt("beforetoggle", e), vt("toggle", e)), r.onScroll != null && vt("scroll", e), r.onScrollEnd != null && vt("scrollend", e), r.onClick != null && (e.onclick = ml), e = !0) : e = !1, e || vi(t);
  }
  function wd(t) {
    for (ye = t.return; ye; )
      switch (ye.tag) {
        case 5:
        case 13:
          nn = !1;
          return;
        case 27:
        case 3:
          nn = !0;
          return;
        default:
          ye = ye.return;
      }
  }
  function Ia(t) {
    if (t !== ye) return !1;
    if (!Et) return wd(t), Et = !0, !1;
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
      e === 27 ? (e = Pt, Fn(t.type) ? (t = pc, pc = null, Pt = t) : Pt = e) : Pt = ye ? We(t.stateNode.nextSibling) : null;
    return !0;
  }
  function ts() {
    Pt = ye = null, Et = !1;
  }
  function Ad() {
    var t = gi;
    return t !== null && (we === null ? we = t : we.push.apply(
      we,
      t
    ), gi = null), t;
  }
  function es(t) {
    gi === null ? gi = [t] : gi.push(t);
  }
  var Wo = K(null), bi = null, vn = null;
  function zn(t, e, a) {
    F(Wo, e._currentValue), e._currentValue = a;
  }
  function bn(t) {
    t._currentValue = Wo.current, W(Wo);
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
  function ns(t, e, a, r) {
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
          Ce(u.pendingProps.value, y.value) || (t !== null ? t.push(v) : t = [v]);
        }
      } else if (u === se.current) {
        if (y = u.alternate, y === null) throw Error(o(387));
        y.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(Ns) : t = [Ns]);
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
      if (!Ce(
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
  function me(t) {
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
  var P1 = typeof AbortController < "u" ? AbortController : function() {
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
  }, Y1 = i.unstable_scheduleCallback, G1 = i.unstable_NormalPriority, $t = {
    $$typeof: J,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Io() {
    return {
      controller: new P1(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function is(t) {
    t.refCount--, t.refCount === 0 && Y1(G1, function() {
      t.controller.abort();
    });
  }
  var as = null, tu = 0, na = 0, ia = null;
  function X1(t, e) {
    if (as === null) {
      var a = as = [];
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
    if (--tu === 0 && as !== null) {
      ia !== null && (ia.status = "fulfilled");
      var t = as;
      as = null, na = 0, ia = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function K1(t, e) {
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
    typeof e == "object" && e !== null && typeof e.then == "function" && X1(t, e), Rd !== null && Rd(t, e);
  };
  var Si = K(null);
  function eu() {
    var t = Si.current;
    return t !== null ? t : Vt.pooledCache;
  }
  function Vr(t, e) {
    e === null ? F(Si, Si.current) : F(Si, e.pool);
  }
  function Od() {
    var t = eu();
    return t === null ? null : { parent: $t._currentValue, pool: t };
  }
  var ss = Error(o(460)), Cd = Error(o(474)), Ur = Error(o(542)), nu = { then: function() {
  } };
  function Dd(t) {
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
          if (t = Vt, t !== null && 100 < t.shellSuspendCounter)
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
        throw rs = e, ss;
    }
  }
  var rs = null;
  function jd() {
    if (rs === null) throw Error(o(459));
    var t = rs;
    return rs = null, t;
  }
  function _d(t) {
    if (t === ss || t === Ur)
      throw Error(o(483));
  }
  var Vn = !1;
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
  function Un(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Bn(t, e, a) {
    var r = t.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (Rt & 2) !== 0) {
      var u = r.pending;
      return u === null ? e.next = e : (e.next = u.next, u.next = e), r.pending = e, e = Cr(t), bd(t, null, a), e;
    }
    return Or(t, r, e, a), Cr(t);
  }
  function ls(t, e, a) {
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
  function os() {
    if (ru) {
      var t = ia;
      if (t !== null) throw t;
    }
  }
  function us(t, e, a, r) {
    ru = !1;
    var u = t.updateQueue;
    Vn = !1;
    var c = u.firstBaseUpdate, y = u.lastBaseUpdate, v = u.shared.pending;
    if (v !== null) {
      u.shared.pending = null;
      var S = v, D = S.next;
      S.next = null, y === null ? c = D : y.next = D, y = S;
      var L = t.alternate;
      L !== null && (L = L.updateQueue, v = L.lastBaseUpdate, v !== y && (v === null ? L.firstBaseUpdate = D : v.next = D, L.lastBaseUpdate = S));
    }
    if (c !== null) {
      var P = u.baseState;
      y = 0, L = D = S = null, v = c;
      do {
        var N = v.lane & -536870913, _ = N !== v.lane;
        if (_ ? (xt & N) === N : (r & N) === N) {
          N !== 0 && N === na && (ru = !0), L !== null && (L = L.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          t: {
            var ot = t, st = v;
            N = e;
            var jt = a;
            switch (st.tag) {
              case 1:
                if (ot = st.payload, typeof ot == "function") {
                  P = ot.call(jt, P, N);
                  break t;
                }
                P = ot;
                break t;
              case 3:
                ot.flags = ot.flags & -65537 | 128;
              case 0:
                if (ot = st.payload, N = typeof ot == "function" ? ot.call(jt, P, N) : ot, N == null) break t;
                P = b({}, P, N);
                break t;
              case 2:
                Vn = !0;
            }
          }
          N = v.callback, N !== null && (t.flags |= 64, _ && (t.flags |= 8192), _ = u.callbacks, _ === null ? u.callbacks = [N] : _.push(N));
        } else
          _ = {
            lane: N,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, L === null ? (D = L = _, S = P) : L = L.next = _, y |= N;
        if (v = v.next, v === null) {
          if (v = u.shared.pending, v === null)
            break;
          _ = v, v = _.next, _.next = null, u.lastBaseUpdate = _, u.shared.pending = null;
        }
      } while (!0);
      L === null && (S = P), u.baseState = S, u.firstBaseUpdate = D, u.lastBaseUpdate = L, c === null && (u.shared.lanes = 0), Xn |= y, t.lanes = y, t.memoizedState = P;
    }
  }
  function zd(t, e) {
    if (typeof t != "function")
      throw Error(o(191, t));
    t.call(e);
  }
  function Vd(t, e) {
    var a = t.callbacks;
    if (a !== null)
      for (t.callbacks = null, t = 0; t < a.length; t++)
        zd(a[t], e);
  }
  var aa = K(null), Lr = K(0);
  function Ud(t, e) {
    t = Mn, F(Lr, t), F(aa, e), Mn = t | e.baseLanes;
  }
  function lu() {
    F(Lr, Mn), F(aa, aa.current);
  }
  function ou() {
    Mn = Lr.current, W(aa), W(Lr);
  }
  var Ln = 0, ht = null, Dt = null, Ft = null, kr = !1, sa = !1, Ti = !1, Hr = 0, cs = 0, ra = null, Q1 = 0;
  function Xt() {
    throw Error(o(321));
  }
  function uu(t, e) {
    if (e === null) return !1;
    for (var a = 0; a < e.length && a < t.length; a++)
      if (!Ce(t[a], e[a])) return !1;
    return !0;
  }
  function cu(t, e, a, r, u, c) {
    return Ln = c, ht = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, B.H = t === null || t.memoizedState === null ? bh : xh, Ti = !1, c = a(r, u), Ti = !1, sa && (c = Ld(
      e,
      a,
      r,
      u
    )), Bd(t), c;
  }
  function Bd(t) {
    B.H = Kr;
    var e = Dt !== null && Dt.next !== null;
    if (Ln = 0, Ft = Dt = ht = null, kr = !1, cs = 0, ra = null, e) throw Error(o(300));
    t === null || ne || (t = t.dependencies, t !== null && _r(t) && (ne = !0));
  }
  function Ld(t, e, a, r) {
    ht = t;
    var u = 0;
    do {
      if (sa && (ra = null), cs = 0, sa = !1, 25 <= u) throw Error(o(301));
      if (u += 1, Ft = Dt = null, t.updateQueue != null) {
        var c = t.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      B.H = tx, c = e(a, r);
    } while (sa);
    return c;
  }
  function Z1() {
    var t = B.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? fs(e) : e, t = t.useState()[0], (Dt !== null ? Dt.memoizedState : null) !== t && (ht.flags |= 1024), e;
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
    Ln = 0, Ft = Dt = ht = null, sa = !1, cs = Hr = 0, ra = null;
  }
  function Se() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ft === null ? ht.memoizedState = Ft = t : Ft = Ft.next = t, Ft;
  }
  function Wt() {
    if (Dt === null) {
      var t = ht.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Dt.next;
    var e = Ft === null ? ht.memoizedState : Ft.next;
    if (e !== null)
      Ft = e, Dt = t;
    else {
      if (t === null)
        throw ht.alternate === null ? Error(o(467)) : Error(o(310));
      Dt = t, t = {
        memoizedState: Dt.memoizedState,
        baseState: Dt.baseState,
        baseQueue: Dt.baseQueue,
        queue: Dt.queue,
        next: null
      }, Ft === null ? ht.memoizedState = Ft = t : Ft = Ft.next = t;
    }
    return Ft;
  }
  function hu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function fs(t) {
    var e = cs;
    return cs += 1, ra === null && (ra = []), t = Nd(ra, t, e), e = ht, (Ft === null ? e.memoizedState : Ft.next) === null && (e = e.alternate, B.H = e === null || e.memoizedState === null ? bh : xh), t;
  }
  function qr(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return fs(t);
      if (t.$$typeof === J) return me(t);
    }
    throw Error(o(438, String(t)));
  }
  function pu(t) {
    var e = null, a = ht.updateQueue;
    if (a !== null && (e = a.memoCache), e == null) {
      var r = ht.alternate;
      r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (e = {
        data: r.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), a === null && (a = hu(), ht.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0)
      for (a = e.data[e.index] = Array(t), r = 0; r < t; r++)
        a[r] = _t;
    return e.index++, a;
  }
  function xn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Pr(t) {
    var e = Wt();
    return yu(e, Dt, t);
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
      var v = y = null, S = null, D = e, L = !1;
      do {
        var P = D.lane & -536870913;
        if (P !== D.lane ? (xt & P) === P : (Ln & P) === P) {
          var N = D.revertLane;
          if (N === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }), P === na && (L = !0);
          else if ((Ln & N) === N) {
            D = D.next, N === na && (L = !0);
            continue;
          } else
            P = {
              lane: 0,
              revertLane: D.revertLane,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }, S === null ? (v = S = P, y = c) : S = S.next = P, ht.lanes |= N, Xn |= N;
          P = D.action, Ti && a(c, P), c = D.hasEagerState ? D.eagerState : a(c, P);
        } else
          N = {
            lane: P,
            revertLane: D.revertLane,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          }, S === null ? (v = S = N, y = c) : S = S.next = N, ht.lanes |= P, Xn |= P;
        D = D.next;
      } while (D !== null && D !== e);
      if (S === null ? y = c : S.next = v, !Ce(c, t.memoizedState) && (ne = !0, L && (a = ia, a !== null)))
        throw a;
      t.memoizedState = c, t.baseState = y, t.baseQueue = S, r.lastRenderedState = c;
    }
    return u === null && (r.lanes = 0), [t.memoizedState, r.dispatch];
  }
  function gu(t) {
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
      Ce(c, e.memoizedState) || (ne = !0), e.memoizedState = c, e.baseQueue === null && (e.baseState = c), a.lastRenderedState = c;
    }
    return [c, r];
  }
  function kd(t, e, a) {
    var r = ht, u = Wt(), c = Et;
    if (c) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = e();
    var y = !Ce(
      (Dt || u).memoizedState,
      a
    );
    y && (u.memoizedState = a, ne = !0), u = u.queue;
    var v = Pd.bind(null, r, u, t);
    if (ms(2048, 8, v, [t]), u.getSnapshot !== e || y || Ft !== null && Ft.memoizedState.tag & 1) {
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
      ), Vt === null) throw Error(o(349));
      c || (Ln & 124) !== 0 || Hd(r, e, a);
    }
    return a;
  }
  function Hd(t, e, a) {
    t.flags |= 16384, t = { getSnapshot: e, value: a }, e = ht.updateQueue, e === null ? (e = hu(), ht.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t));
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
      return !Ce(t, a);
    } catch {
      return !0;
    }
  }
  function Gd(t) {
    var e = $i(t, 2);
    e !== null && Ve(e, t, 2);
  }
  function vu(t) {
    var e = Se();
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
      Dt,
      typeof r == "function" ? r : xn
    );
  }
  function F1(t, e, a, r, u) {
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
      } catch (D) {
        bu(t, e, D);
      } finally {
        B.T = c;
      }
    } else
      try {
        c = a(u, r), Qd(t, e, c);
      } catch (D) {
        bu(t, e, D);
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
    if (Et) {
      var a = Vt.formState;
      if (a !== null) {
        t: {
          var r = ht;
          if (Et) {
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
    return a = Se(), a.memoizedState = a.baseState = e, r = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wd,
      lastRenderedState: e
    }, a.queue = r, a = yh.bind(
      null,
      ht,
      r
    ), r.dispatch = a, r = vu(!1), c = Au.bind(
      null,
      ht,
      !1,
      r.queue
    ), r = Se(), u = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, r.queue = u, a = F1.bind(
      null,
      ht,
      u,
      c,
      a
    ), u.dispatch = a, r.memoizedState = t, [e, a, !1];
  }
  function $d(t) {
    var e = Wt();
    return Id(e, Dt, t);
  }
  function Id(t, e, a) {
    if (e = yu(
      t,
      e,
      Wd
    )[0], t = Pr(xn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var r = fs(e);
      } catch (y) {
        throw y === ss ? Ur : y;
      }
    else r = e;
    e = Wt();
    var u = e.queue, c = u.dispatch;
    return a !== e.memoizedState && (ht.flags |= 2048, la(
      9,
      Yr(),
      W1.bind(null, u, a),
      null
    )), [r, c, t];
  }
  function W1(t, e) {
    t.action = e;
  }
  function th(t) {
    var e = Wt(), a = Dt;
    if (a !== null)
      return Id(e, a, t);
    Wt(), e = e.memoizedState, a = Wt();
    var r = a.queue.dispatch;
    return a.memoizedState = t, [e, r, !1];
  }
  function la(t, e, a, r) {
    return t = { tag: t, create: a, deps: r, inst: e, next: null }, e = ht.updateQueue, e === null && (e = hu(), ht.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (r = a.next, a.next = t, t.next = r, e.lastEffect = t), t;
  }
  function Yr() {
    return { destroy: void 0, resource: void 0 };
  }
  function eh() {
    return Wt().memoizedState;
  }
  function Gr(t, e, a, r) {
    var u = Se();
    r = r === void 0 ? null : r, ht.flags |= t, u.memoizedState = la(
      1 | e,
      Yr(),
      a,
      r
    );
  }
  function ms(t, e, a, r) {
    var u = Wt();
    r = r === void 0 ? null : r;
    var c = u.memoizedState.inst;
    Dt !== null && r !== null && uu(r, Dt.memoizedState.deps) ? u.memoizedState = la(e, c, a, r) : (ht.flags |= t, u.memoizedState = la(
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
    ms(2048, 8, t, e);
  }
  function ah(t, e) {
    return ms(4, 2, t, e);
  }
  function sh(t, e) {
    return ms(4, 4, t, e);
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
    a = a != null ? a.concat([t]) : null, ms(4, 4, rh.bind(null, e, t), a);
  }
  function xu() {
  }
  function oh(t, e) {
    var a = Wt();
    e = e === void 0 ? null : e;
    var r = a.memoizedState;
    return e !== null && uu(e, r[1]) ? r[0] : (a.memoizedState = [t, e], t);
  }
  function uh(t, e) {
    var a = Wt();
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
    return a === void 0 || (Ln & 1073741824) !== 0 ? t.memoizedState = e : (t.memoizedState = a, t = mp(), ht.lanes |= t, Xn |= t, a);
  }
  function ch(t, e, a, r) {
    return Ce(a, e) ? a : aa.current !== null ? (t = Su(t, a, r), Ce(t, e) || (ne = !0), t) : (Ln & 42) === 0 ? (ne = !0, t.memoizedState = a) : (t = mp(), ht.lanes |= t, Xn |= t, e);
  }
  function fh(t, e, a, r, u) {
    var c = z.p;
    z.p = c !== 0 && 8 > c ? c : 8;
    var y = B.T, v = {};
    B.T = v, Au(t, !1, e, a);
    try {
      var S = u(), D = B.S;
      if (D !== null && D(v, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var L = K1(
          S,
          r
        );
        ds(
          t,
          e,
          L,
          ze(t)
        );
      } else
        ds(
          t,
          e,
          r,
          ze(t)
        );
    } catch (P) {
      ds(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: P },
        ze()
      );
    } finally {
      z.p = c, B.T = y;
    }
  }
  function J1() {
  }
  function Tu(t, e, a, r) {
    if (t.tag !== 5) throw Error(o(476));
    var u = mh(t).queue;
    fh(
      t,
      u,
      e,
      ct,
      a === null ? J1 : function() {
        return dh(t), a(r);
      }
    );
  }
  function mh(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: ct,
      baseState: ct,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xn,
        lastRenderedState: ct
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
    ds(t, e, {}, ze());
  }
  function wu() {
    return me(Ns);
  }
  function hh() {
    return Wt().memoizedState;
  }
  function ph() {
    return Wt().memoizedState;
  }
  function $1(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var a = ze();
          t = Un(a);
          var r = Bn(e, t, a);
          r !== null && (Ve(r, e, a), ls(r, e, a)), e = { cache: Io() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function I1(t, e, a) {
    var r = ze();
    a = {
      lane: r,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Xr(t) ? gh(e, a) : (a = Yo(t, e, a, r), a !== null && (Ve(a, t, r), vh(a, e, r)));
  }
  function yh(t, e, a) {
    var r = ze();
    ds(t, e, a, r);
  }
  function ds(t, e, a, r) {
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
          if (u.hasEagerState = !0, u.eagerState = v, Ce(v, y))
            return Or(t, e, u, 0), Vt === null && Rr(), !1;
        } catch {
        } finally {
        }
      if (a = Yo(t, e, u, r), a !== null)
        return Ve(a, t, r), vh(a, e, r), !0;
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
      ), e !== null && Ve(e, t, 2);
  }
  function Xr(t) {
    var e = t.alternate;
    return t === ht || e !== null && e === ht;
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
    readContext: me,
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
    readContext: me,
    use: qr,
    useCallback: function(t, e) {
      return Se().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: me,
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
      var a = Se();
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
      var r = Se();
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
      }, r.queue = t, t = t.dispatch = I1.bind(
        null,
        ht,
        t
      ), [r.memoizedState, t];
    },
    useRef: function(t) {
      var e = Se();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = vu(t);
      var e = t.queue, a = yh.bind(null, ht, e);
      return e.dispatch = a, [t.memoizedState, a];
    },
    useDebugValue: xu,
    useDeferredValue: function(t, e) {
      var a = Se();
      return Su(a, t, e);
    },
    useTransition: function() {
      var t = vu(!1);
      return t = fh.bind(
        null,
        ht,
        t.queue,
        !0,
        !1
      ), Se().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, a) {
      var r = ht, u = Se();
      if (Et) {
        if (a === void 0)
          throw Error(o(407));
        a = a();
      } else {
        if (a = e(), Vt === null)
          throw Error(o(349));
        (xt & 124) !== 0 || Hd(r, e, a);
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
      var t = Se(), e = Vt.identifierPrefix;
      if (Et) {
        var a = gn, r = yn;
        a = (r & ~(1 << 32 - Oe(r) - 1)).toString(32) + a, e = "«" + e + "R" + a, a = Hr++, 0 < a && (e += "H" + a.toString(32)), e += "»";
      } else
        a = Q1++, e = "«" + e + "r" + a.toString(32) + "»";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: wu,
    useFormState: Jd,
    useActionState: Jd,
    useOptimistic: function(t) {
      var e = Se();
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
        ht,
        !0,
        a
      ), a.dispatch = e, [t, e];
    },
    useMemoCache: pu,
    useCacheRefresh: function() {
      return Se().memoizedState = $1.bind(
        null,
        ht
      );
    }
  }, xh = {
    readContext: me,
    use: qr,
    useCallback: oh,
    useContext: me,
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
      var a = Wt();
      return ch(
        a,
        Dt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Pr(xn)[0], e = Wt().memoizedState;
      return [
        typeof t == "boolean" ? t : fs(t),
        e
      ];
    },
    useSyncExternalStore: kd,
    useId: hh,
    useHostTransitionStatus: wu,
    useFormState: $d,
    useActionState: $d,
    useOptimistic: function(t, e) {
      var a = Wt();
      return Xd(a, Dt, t, e);
    },
    useMemoCache: pu,
    useCacheRefresh: ph
  }, tx = {
    readContext: me,
    use: qr,
    useCallback: oh,
    useContext: me,
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
      var a = Wt();
      return Dt === null ? Su(a, t, e) : ch(
        a,
        Dt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = gu(xn)[0], e = Wt().memoizedState;
      return [
        typeof t == "boolean" ? t : fs(t),
        e
      ];
    },
    useSyncExternalStore: kd,
    useId: hh,
    useHostTransitionStatus: wu,
    useFormState: th,
    useActionState: th,
    useOptimistic: function(t, e) {
      var a = Wt();
      return Dt !== null ? Xd(a, Dt, t, e) : (a.baseState = t, [t, a.queue.dispatch]);
    },
    useMemoCache: pu,
    useCacheRefresh: ph
  }, oa = null, hs = 0;
  function Qr(t) {
    var e = hs;
    return hs += 1, oa === null && (oa = []), Nd(oa, t, e);
  }
  function ps(t, e) {
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
    function v(M, T, O, H) {
      return T === null || T.tag !== 6 ? (T = Xo(O, M.mode, H), T.return = M, T) : (T = u(T, O), T.return = M, T);
    }
    function S(M, T, O, H) {
      var tt = O.type;
      return tt === R ? L(
        M,
        T,
        O.props.children,
        H,
        O.key
      ) : T !== null && (T.elementType === tt || typeof tt == "object" && tt !== null && tt.$$typeof === lt && Sh(tt) === T.type) ? (T = u(T, O.props), ps(T, O), T.return = M, T) : (T = Dr(
        O.type,
        O.key,
        O.props,
        null,
        M.mode,
        H
      ), ps(T, O), T.return = M, T);
    }
    function D(M, T, O, H) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== O.containerInfo || T.stateNode.implementation !== O.implementation ? (T = Ko(O, M.mode, H), T.return = M, T) : (T = u(T, O.children || []), T.return = M, T);
    }
    function L(M, T, O, H, tt) {
      return T === null || T.tag !== 7 ? (T = hi(
        O,
        M.mode,
        H,
        tt
      ), T.return = M, T) : (T = u(T, O), T.return = M, T);
    }
    function P(M, T, O) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return T = Xo(
          "" + T,
          M.mode,
          O
        ), T.return = M, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case C:
            return O = Dr(
              T.type,
              T.key,
              T.props,
              null,
              M.mode,
              O
            ), ps(O, T), O.return = M, O;
          case E:
            return T = Ko(
              T,
              M.mode,
              O
            ), T.return = M, T;
          case lt:
            var H = T._init;
            return T = H(T._payload), P(M, T, O);
        }
        if (Z(T) || At(T))
          return T = hi(
            T,
            M.mode,
            O,
            null
          ), T.return = M, T;
        if (typeof T.then == "function")
          return P(M, Qr(T), O);
        if (T.$$typeof === J)
          return P(
            M,
            zr(M, T),
            O
          );
        Zr(M, T);
      }
      return null;
    }
    function N(M, T, O, H) {
      var tt = T !== null ? T.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return tt !== null ? null : v(M, T, "" + O, H);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case C:
            return O.key === tt ? S(M, T, O, H) : null;
          case E:
            return O.key === tt ? D(M, T, O, H) : null;
          case lt:
            return tt = O._init, O = tt(O._payload), N(M, T, O, H);
        }
        if (Z(O) || At(O))
          return tt !== null ? null : L(M, T, O, H, null);
        if (typeof O.then == "function")
          return N(
            M,
            T,
            Qr(O),
            H
          );
        if (O.$$typeof === J)
          return N(
            M,
            T,
            zr(M, O),
            H
          );
        Zr(M, O);
      }
      return null;
    }
    function _(M, T, O, H, tt) {
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return M = M.get(O) || null, v(T, M, "" + H, tt);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case C:
            return M = M.get(
              H.key === null ? O : H.key
            ) || null, S(T, M, H, tt);
          case E:
            return M = M.get(
              H.key === null ? O : H.key
            ) || null, D(T, M, H, tt);
          case lt:
            var yt = H._init;
            return H = yt(H._payload), _(
              M,
              T,
              O,
              H,
              tt
            );
        }
        if (Z(H) || At(H))
          return M = M.get(O) || null, L(T, M, H, tt, null);
        if (typeof H.then == "function")
          return _(
            M,
            T,
            O,
            Qr(H),
            tt
          );
        if (H.$$typeof === J)
          return _(
            M,
            T,
            O,
            zr(T, H),
            tt
          );
        Zr(T, H);
      }
      return null;
    }
    function ot(M, T, O, H) {
      for (var tt = null, yt = null, it = T, rt = T = 0, ae = null; it !== null && rt < O.length; rt++) {
        it.index > rt ? (ae = it, it = null) : ae = it.sibling;
        var wt = N(
          M,
          it,
          O[rt],
          H
        );
        if (wt === null) {
          it === null && (it = ae);
          break;
        }
        t && it && wt.alternate === null && e(M, it), T = c(wt, T, rt), yt === null ? tt = wt : yt.sibling = wt, yt = wt, it = ae;
      }
      if (rt === O.length)
        return a(M, it), Et && yi(M, rt), tt;
      if (it === null) {
        for (; rt < O.length; rt++)
          it = P(M, O[rt], H), it !== null && (T = c(
            it,
            T,
            rt
          ), yt === null ? tt = it : yt.sibling = it, yt = it);
        return Et && yi(M, rt), tt;
      }
      for (it = r(it); rt < O.length; rt++)
        ae = _(
          it,
          M,
          rt,
          O[rt],
          H
        ), ae !== null && (t && ae.alternate !== null && it.delete(
          ae.key === null ? rt : ae.key
        ), T = c(
          ae,
          T,
          rt
        ), yt === null ? tt = ae : yt.sibling = ae, yt = ae);
      return t && it.forEach(function(ti) {
        return e(M, ti);
      }), Et && yi(M, rt), tt;
    }
    function st(M, T, O, H) {
      if (O == null) throw Error(o(151));
      for (var tt = null, yt = null, it = T, rt = T = 0, ae = null, wt = O.next(); it !== null && !wt.done; rt++, wt = O.next()) {
        it.index > rt ? (ae = it, it = null) : ae = it.sibling;
        var ti = N(M, it, wt.value, H);
        if (ti === null) {
          it === null && (it = ae);
          break;
        }
        t && it && ti.alternate === null && e(M, it), T = c(ti, T, rt), yt === null ? tt = ti : yt.sibling = ti, yt = ti, it = ae;
      }
      if (wt.done)
        return a(M, it), Et && yi(M, rt), tt;
      if (it === null) {
        for (; !wt.done; rt++, wt = O.next())
          wt = P(M, wt.value, H), wt !== null && (T = c(wt, T, rt), yt === null ? tt = wt : yt.sibling = wt, yt = wt);
        return Et && yi(M, rt), tt;
      }
      for (it = r(it); !wt.done; rt++, wt = O.next())
        wt = _(it, M, rt, wt.value, H), wt !== null && (t && wt.alternate !== null && it.delete(wt.key === null ? rt : wt.key), T = c(wt, T, rt), yt === null ? tt = wt : yt.sibling = wt, yt = wt);
      return t && it.forEach(function(eS) {
        return e(M, eS);
      }), Et && yi(M, rt), tt;
    }
    function jt(M, T, O, H) {
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
                      ), H = u(
                        T,
                        O.props.children
                      ), H.return = M, M = H;
                      break t;
                    }
                  } else if (T.elementType === tt || typeof tt == "object" && tt !== null && tt.$$typeof === lt && Sh(tt) === T.type) {
                    a(
                      M,
                      T.sibling
                    ), H = u(T, O.props), ps(H, O), H.return = M, M = H;
                    break t;
                  }
                  a(M, T);
                  break;
                } else e(M, T);
                T = T.sibling;
              }
              O.type === R ? (H = hi(
                O.props.children,
                M.mode,
                H,
                O.key
              ), H.return = M, M = H) : (H = Dr(
                O.type,
                O.key,
                O.props,
                null,
                M.mode,
                H
              ), ps(H, O), H.return = M, M = H);
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
                    ), H = u(T, O.children || []), H.return = M, M = H;
                    break t;
                  } else {
                    a(M, T);
                    break;
                  }
                else e(M, T);
                T = T.sibling;
              }
              H = Ko(O, M.mode, H), H.return = M, M = H;
            }
            return y(M);
          case lt:
            return tt = O._init, O = tt(O._payload), jt(
              M,
              T,
              O,
              H
            );
        }
        if (Z(O))
          return ot(
            M,
            T,
            O,
            H
          );
        if (At(O)) {
          if (tt = At(O), typeof tt != "function") throw Error(o(150));
          return O = tt.call(O), st(
            M,
            T,
            O,
            H
          );
        }
        if (typeof O.then == "function")
          return jt(
            M,
            T,
            Qr(O),
            H
          );
        if (O.$$typeof === J)
          return jt(
            M,
            T,
            zr(M, O),
            H
          );
        Zr(M, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O, T !== null && T.tag === 6 ? (a(M, T.sibling), H = u(T, O), H.return = M, M = H) : (a(M, T), H = Xo(O, M.mode, H), H.return = M, M = H), y(M)) : a(M, T);
    }
    return function(M, T, O, H) {
      try {
        hs = 0;
        var tt = jt(
          M,
          T,
          O,
          H
        );
        return oa = null, tt;
      } catch (it) {
        if (it === ss || it === Ur) throw it;
        var yt = De(29, it, null, M.mode);
        return yt.lanes = H, yt.return = M, yt;
      } finally {
      }
    };
  }
  var ua = Th(!0), wh = Th(!1), Pe = K(null), an = null;
  function kn(t) {
    var e = t.alternate;
    F(It, It.current & 1), F(Pe, t), an === null && (e === null || aa.current !== null || e.memoizedState !== null) && (an = t);
  }
  function Ah(t) {
    if (t.tag === 22) {
      if (F(It, It.current), F(Pe, t), an === null) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (an = t);
      }
    } else Hn();
  }
  function Hn() {
    F(It, It.current), F(Pe, Pe.current);
  }
  function Sn(t) {
    W(Pe), an === t && (an = null), W(It);
  }
  var It = K(0);
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
      var r = ze(), u = Un(r);
      u.payload = e, a != null && (u.callback = a), e = Bn(t, u, r), e !== null && (Ve(e, t, r), ls(e, t, r));
    },
    enqueueReplaceState: function(t, e, a) {
      t = t._reactInternals;
      var r = ze(), u = Un(r);
      u.tag = 1, u.payload = e, a != null && (u.callback = a), e = Bn(t, u, r), e !== null && (Ve(e, t, r), ls(e, t, r));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var a = ze(), r = Un(a);
      r.tag = 2, e != null && (r.callback = e), e = Bn(t, r, a), e !== null && (Ve(e, t, a), ls(e, t, a));
    }
  };
  function Eh(t, e, a, r, u, c, y) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, c, y) : e.prototype && e.prototype.isPureReactComponent ? !Ja(a, r) || !Ja(u, c) : !0;
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
  function Ch(t) {
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
  function Ru(t, e, a) {
    return a = Un(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Jr(t, e);
    }, a;
  }
  function Nh(t) {
    return t = Un(t), t.tag = 3, t;
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
      Dh(e, a, r), typeof u != "function" && (Kn === null ? Kn = /* @__PURE__ */ new Set([this]) : Kn.add(this));
      var v = r.stack;
      this.componentDidCatch(r.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function ex(t, e, a, r, u) {
    if (a.flags |= 32768, r !== null && typeof r == "object" && typeof r.then == "function") {
      if (e = a.alternate, e !== null && ns(
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
    if (Et)
      return e = Pe.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = u, r !== Fo && (t = Error(o(422), { cause: r }), es(Le(t, a)))) : (r !== Fo && (e = Error(o(423), {
        cause: r
      }), es(
        Le(e, a)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, r = Le(r, a), u = Ru(
        t.stateNode,
        r,
        u
      ), su(t, u), Yt !== 4 && (Yt = 2)), !1;
    var c = Error(o(520), { cause: r });
    if (c = Le(c, a), Ts === null ? Ts = [c] : Ts.push(c), Yt !== 4 && (Yt = 2), e === null) return !0;
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
  var _h = Error(o(461)), ne = !1;
  function le(t, e, a, r) {
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
    ), v = fu(), t !== null && !ne ? (mu(t, e, u), Tn(t, e, u)) : (Et && v && Qo(e), e.flags |= 1, le(t, e, r, u), e.child);
  }
  function Vh(t, e, a, r, u) {
    if (t === null) {
      var c = a.type;
      return typeof c == "function" && !Go(c) && c.defaultProps === void 0 && a.compare === null ? (e.tag = 15, e.type = c, Uh(
        t,
        e,
        c,
        r,
        u
      )) : (t = Dr(
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
      if (a = a.compare, a = a !== null ? a : Ja, a(y, r) && t.ref === e.ref)
        return Tn(t, e, u);
    }
    return e.flags |= 1, t = pn(c, r), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Uh(t, e, a, r, u) {
    if (t !== null) {
      var c = t.memoizedProps;
      if (Ja(c, r) && t.ref === e.ref)
        if (ne = !1, e.pendingProps = r = c, Vu(t, u))
          (t.flags & 131072) !== 0 && (ne = !0);
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
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Vr(
          e,
          c !== null ? c.cachePool : null
        ), c !== null ? Ud(e, c) : lu(), Ah(e);
      else
        return e.lanes = e.childLanes = 536870912, Lh(
          t,
          e,
          c !== null ? c.baseLanes | a : a,
          a
        );
    } else
      c !== null ? (Vr(e, c.cachePool), Ud(e, c), Hn(), e.memoizedState = null) : (t !== null && Vr(e, null), lu(), Hn());
    return le(t, e, u, a), e.child;
  }
  function Lh(t, e, a, r) {
    var u = eu();
    return u = u === null ? null : { parent: $t._currentValue, pool: u }, e.memoizedState = {
      baseLanes: a,
      cachePool: u
    }, t !== null && Vr(e, null), lu(), Ah(e), t !== null && ns(t, e, r, !0), null;
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
    ), r = fu(), t !== null && !ne ? (mu(t, e, u), Tn(t, e, u)) : (Et && r && Qo(e), e.flags |= 1, le(t, e, a, u), e.child);
  }
  function kh(t, e, a, r, u, c) {
    return xi(e), e.updateQueue = null, a = Ld(
      e,
      r,
      a,
      u
    ), Bd(t), r = fu(), t !== null && !ne ? (mu(t, e, c), Tn(t, e, c)) : (Et && r && Qo(e), e.flags |= 1, le(t, e, a, c), e.child);
  }
  function Hh(t, e, a, r, u) {
    if (xi(e), e.stateNode === null) {
      var c = Ii, y = a.contextType;
      typeof y == "object" && y !== null && (c = me(y)), c = new a(r, c), e.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Mu, e.stateNode = c, c._reactInternals = e, c = e.stateNode, c.props = r, c.state = e.memoizedState, c.refs = {}, iu(e), y = a.contextType, c.context = typeof y == "object" && y !== null ? me(y) : Ii, c.state = e.memoizedState, y = a.getDerivedStateFromProps, typeof y == "function" && (Eu(
        e,
        a,
        y,
        r
      ), c.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (y = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), y !== c.state && Mu.enqueueReplaceState(c, c.state, null), us(e, r, c, u), os(), c.state = e.memoizedState), typeof c.componentDidMount == "function" && (e.flags |= 4194308), r = !0;
    } else if (t === null) {
      c = e.stateNode;
      var v = e.memoizedProps, S = wi(a, v);
      c.props = S;
      var D = c.context, L = a.contextType;
      y = Ii, typeof L == "object" && L !== null && (y = me(L));
      var P = a.getDerivedStateFromProps;
      L = typeof P == "function" || typeof c.getSnapshotBeforeUpdate == "function", v = e.pendingProps !== v, L || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (v || D !== y) && Mh(
        e,
        c,
        r,
        y
      ), Vn = !1;
      var N = e.memoizedState;
      c.state = N, us(e, r, c, u), os(), D = e.memoizedState, v || N !== D || Vn ? (typeof P == "function" && (Eu(
        e,
        a,
        P,
        r
      ), D = e.memoizedState), (S = Vn || Eh(
        e,
        a,
        S,
        r,
        N,
        D,
        y
      )) ? (L || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = r, e.memoizedState = D), c.props = r, c.state = D, c.context = y, r = S) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308), r = !1);
    } else {
      c = e.stateNode, au(t, e), y = e.memoizedProps, L = wi(a, y), c.props = L, P = e.pendingProps, N = c.context, D = a.contextType, S = Ii, typeof D == "object" && D !== null && (S = me(D)), v = a.getDerivedStateFromProps, (D = typeof v == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (y !== P || N !== S) && Mh(
        e,
        c,
        r,
        S
      ), Vn = !1, N = e.memoizedState, c.state = N, us(e, r, c, u), os();
      var _ = e.memoizedState;
      y !== P || N !== _ || Vn || t !== null && t.dependencies !== null && _r(t.dependencies) ? (typeof v == "function" && (Eu(
        e,
        a,
        v,
        r
      ), _ = e.memoizedState), (L = Vn || Eh(
        e,
        a,
        L,
        r,
        N,
        _,
        S
      ) || t !== null && t.dependencies !== null && _r(t.dependencies)) ? (D || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(r, _, S), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        r,
        _,
        S
      )), typeof c.componentDidUpdate == "function" && (e.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || y === t.memoizedProps && N === t.memoizedState || (e.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || y === t.memoizedProps && N === t.memoizedState || (e.flags |= 1024), e.memoizedProps = r, e.memoizedState = _), c.props = r, c.state = _, c.context = S, r = L) : (typeof c.componentDidUpdate != "function" || y === t.memoizedProps && N === t.memoizedState || (e.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || y === t.memoizedProps && N === t.memoizedState || (e.flags |= 1024), r = !1);
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
    )) : le(t, e, a, u), e.memoizedState = c.state, t = e.child) : t = Tn(
      t,
      e,
      u
    ), t;
  }
  function qh(t, e, a, r) {
    return ts(), e.flags |= 256, le(t, e, a, r), e.child;
  }
  var Cu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Du(t) {
    return { baseLanes: t, cachePool: Od() };
  }
  function Nu(t, e, a) {
    return t = t !== null ? t.childLanes & ~a : 0, e && (t |= Ye), t;
  }
  function Ph(t, e, a) {
    var r = e.pendingProps, u = !1, c = (e.flags & 128) !== 0, y;
    if ((y = c) || (y = t !== null && t.memoizedState === null ? !1 : (It.current & 2) !== 0), y && (u = !0, e.flags &= -129), y = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Et) {
        if (u ? kn(e) : Hn(), Et) {
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
            }, S = De(
              18,
              null,
              null,
              0
            ), S.stateNode = v, S.return = e, e.child = S, ye = e, Pt = null, S = !0) : S = !1;
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
      ), v.return = e, r.return = e, v.sibling = r, e.child = v, u = e.child, u.memoizedState = Du(a), u.childLanes = Nu(
        t,
        y,
        a
      ), e.memoizedState = Cu, r) : (kn(e), ju(e, v));
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
        ), r = e.child, r.memoizedState = Du(a), r.childLanes = Nu(
          t,
          y,
          a
        ), e.memoizedState = Cu, e = u);
      else if (kn(e), hc(v)) {
        if (y = v.nextSibling && v.nextSibling.dataset, y) var D = y.dgst;
        y = D, r = Error(o(419)), r.stack = "", r.digest = y, es({ value: r, source: null, stack: null }), e = _u(
          t,
          e,
          a
        );
      } else if (ne || ns(t, e, a, !1), y = (a & t.childLanes) !== 0, ne || y) {
        if (y = Vt, y !== null && (r = a & -a, r = (r & 42) !== 0 ? 1 : po(r), r = (r & (y.suspendedLanes | a)) !== 0 ? 0 : r, r !== 0 && r !== S.retryLane))
          throw S.retryLane = r, $i(t, r), Ve(y, t, r), _h;
        v.data === "$?" || Ju(), e = _u(
          t,
          e,
          a
        );
      } else
        v.data === "$?" ? (e.flags |= 192, e.child = t.child, e = null) : (t = S.treeContext, Pt = We(
          v.nextSibling
        ), ye = e, Et = !0, gi = null, nn = !1, t !== null && (He[qe++] = yn, He[qe++] = gn, He[qe++] = pi, yn = t.id, gn = t.overflow, pi = e), e = ju(
          e,
          r.children
        ), e.flags |= 4096);
      return e;
    }
    return u ? (Hn(), u = r.fallback, v = e.mode, S = t.child, D = S.sibling, r = pn(S, {
      mode: "hidden",
      children: r.children
    }), r.subtreeFlags = S.subtreeFlags & 65011712, D !== null ? u = pn(D, u) : (u = hi(
      u,
      v,
      a,
      null
    ), u.flags |= 2), u.return = e, r.return = e, r.sibling = u, e.child = r, r = u, u = e.child, v = t.child.memoizedState, v === null ? v = Du(a) : (S = v.cachePool, S !== null ? (D = $t._currentValue, S = S.parent !== D ? { parent: D, pool: D } : S) : S = Od(), v = {
      baseLanes: v.baseLanes | a,
      cachePool: S
    }), u.memoizedState = v, u.childLanes = Nu(
      t,
      y,
      a
    ), e.memoizedState = Cu, r) : (kn(e), a = t.child, t = a.sibling, a = pn(a, {
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
    return t = De(22, t, null, e), t.lanes = 0, t.stateNode = {
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
    if (le(t, e, r.children, a), r = It.current, (r & 2) !== 0)
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
        if (ns(
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
  function Vu(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && _r(t)));
  }
  function nx(t, e, a) {
    switch (e.tag) {
      case 3:
        mt(e, e.stateNode.containerInfo), zn(e, $t, t.memoizedState.cache), ts();
        break;
      case 27:
      case 5:
        oi(e);
        break;
      case 4:
        mt(e, e.stateNode.containerInfo);
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
        if (r = (a & e.childLanes) !== 0, r || (ns(
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
        zn(e, $t, t.memoizedState.cache);
    }
    return Tn(t, e, a);
  }
  function Xh(t, e, a) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        ne = !0;
      else {
        if (!Vu(t, a) && (e.flags & 128) === 0)
          return ne = !1, nx(
            t,
            e,
            a
          );
        ne = (t.flags & 131072) !== 0;
      }
    else
      ne = !1, Et && (e.flags & 1048576) !== 0 && Sd(e, jr, e.index);
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
              if (u = r.$$typeof, u === Q) {
                e.tag = 11, e = zh(
                  null,
                  e,
                  r,
                  t,
                  a
                );
                break t;
              } else if (u === Y) {
                e.tag = 14, e = Vh(
                  null,
                  e,
                  r,
                  t,
                  a
                );
                break t;
              }
            }
            throw e = Mt(r) || r, Error(o(306, e, ""));
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
          if (mt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(o(387));
          r = e.pendingProps;
          var c = e.memoizedState;
          u = c.element, au(t, e), us(e, r, null, a);
          var y = e.memoizedState;
          if (r = y.cache, zn(e, $t, r), r !== c.cache && $o(
            e,
            [$t],
            a,
            !0
          ), os(), r = y.element, c.isDehydrated)
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
              ), es(u), e = qh(
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
              for (Pt = We(t.firstChild), ye = e, Et = !0, gi = null, nn = !0, a = wh(
                e,
                null,
                r,
                a
              ), e.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (ts(), r === u) {
              e = Tn(
                t,
                e,
                a
              );
              break t;
            }
            le(
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
        )) ? e.memoizedState = a : Et || (a = e.type, t = e.pendingProps, r = dl(
          I.current
        ).createElement(a), r[fe] = e, r[be] = t, ue(r, a, t), ee(r), e.stateNode = r) : e.memoizedState = Fp(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return oi(e), t === null && Et && (r = e.stateNode = Kp(
          e.type,
          e.pendingProps,
          I.current
        ), ye = e, nn = !0, u = Pt, Fn(e.type) ? (pc = u, Pt = We(
          r.firstChild
        )) : Pt = u), le(
          t,
          e,
          e.pendingProps.children,
          a
        ), $r(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Et && ((u = r = Pt) && (r = Dx(
          r,
          e.type,
          e.pendingProps,
          nn
        ), r !== null ? (e.stateNode = r, ye = e, Pt = We(
          r.firstChild
        ), nn = !1, u = !0) : u = !1), u || vi(e)), oi(e), u = e.type, c = e.pendingProps, y = t !== null ? t.memoizedProps : null, r = c.children, fc(u, c) ? r = null : y !== null && fc(u, y) && (e.flags |= 32), e.memoizedState !== null && (u = cu(
          t,
          e,
          Z1,
          null,
          null,
          a
        ), Ns._currentValue = u), $r(t, e), le(t, e, r, a), e.child;
      case 6:
        return t === null && Et && ((t = a = Pt) && (a = Nx(
          a,
          e.pendingProps,
          nn
        ), a !== null ? (e.stateNode = a, ye = e, Pt = null, t = !0) : t = !1), t || vi(e)), null;
      case 13:
        return Ph(t, e, a);
      case 4:
        return mt(
          e,
          e.stateNode.containerInfo
        ), r = e.pendingProps, t === null ? e.child = ua(
          e,
          null,
          r,
          a
        ) : le(
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
        return le(
          t,
          e,
          e.pendingProps,
          a
        ), e.child;
      case 8:
        return le(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 12:
        return le(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 10:
        return r = e.pendingProps, zn(e, e.type, r.value), le(
          t,
          e,
          r.children,
          a
        ), e.child;
      case 9:
        return u = e.type._context, r = e.pendingProps.children, xi(e), u = me(u), r = r(u), e.flags |= 1, le(t, e, r, a), e.child;
      case 14:
        return Vh(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 15:
        return Uh(
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
        return xi(e), r = me($t), t === null ? (u = eu(), u === null && (u = Vt, c = Io(), u.pooledCache = c, c.refCount++, c !== null && (u.pooledCacheLanes |= a), u = c), e.memoizedState = {
          parent: r,
          cache: u
        }, iu(e), zn(e, $t, u)) : ((t.lanes & a) !== 0 && (au(t, e), us(e, null, null, a), os()), u = t.memoizedState, c = e.memoizedState, u.parent !== r ? (u = { parent: r, cache: r }, e.memoizedState = u, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u), zn(e, $t, r)) : (r = c.cache, zn(e, $t, r), r !== u.cache && $o(
          e,
          [$t],
          a,
          !0
        ))), le(
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
      if (e = Pe.current, e !== null && ((xt & 4194048) === xt ? an !== null : (xt & 62914560) !== xt && (xt & 536870912) === 0 || e !== an))
        throw rs = nu, Cd;
      t.flags |= 8192;
    }
  }
  function tl(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Am() : 536870912, t.lanes |= e, da |= e);
  }
  function ys(t, e) {
    if (!Et)
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
  function ix(t, e, a) {
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
        return kt(e), null;
      case 1:
        return kt(e), null;
      case 3:
        return a = e.stateNode, r = null, t !== null && (r = t.memoizedState.cache), e.memoizedState.cache !== r && (e.flags |= 2048), bn($t), re(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (Ia(e) ? wn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Ad())), kt(e), null;
      case 26:
        return a = e.memoizedState, t === null ? (wn(e), a !== null ? (kt(e), Kh(e, a)) : (kt(e), e.flags &= -16777217)) : a ? a !== t.memoizedState ? (wn(e), kt(e), Kh(e, a)) : (kt(e), e.flags &= -16777217) : (t.memoizedProps !== r && wn(e), kt(e), e.flags &= -16777217), null;
      case 27:
        mn(e), a = I.current;
        var u = e.type;
        if (t !== null && e.stateNode != null)
          t.memoizedProps !== r && wn(e);
        else {
          if (!r) {
            if (e.stateNode === null)
              throw Error(o(166));
            return kt(e), null;
          }
          t = at.current, Ia(e) ? Td(e) : (t = Kp(u, r, a), e.stateNode = t, wn(e));
        }
        return kt(e), null;
      case 5:
        if (mn(e), a = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== r && wn(e);
        else {
          if (!r) {
            if (e.stateNode === null)
              throw Error(o(166));
            return kt(e), null;
          }
          if (t = at.current, Ia(e))
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
            t[fe] = e, t[be] = r;
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
            t: switch (ue(t, a, r), a) {
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
        return kt(e), e.flags &= -16777217, null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== r && wn(e);
        else {
          if (typeof r != "string" && e.stateNode === null)
            throw Error(o(166));
          if (t = I.current, Ia(e)) {
            if (t = e.stateNode, a = e.memoizedProps, r = null, u = ye, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  r = u.memoizedProps;
              }
            t[fe] = e, t = !!(t.nodeValue === a || r !== null && r.suppressHydrationWarning === !0 || kp(t.nodeValue, a)), t || vi(e);
          } else
            t = dl(t).createTextNode(
              r
            ), t[fe] = e, e.stateNode = t;
        }
        return kt(e), null;
      case 13:
        if (r = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = Ia(e), r !== null && r.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(o(318));
              if (u = e.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[fe] = e;
            } else
              ts(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            kt(e), u = !1;
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
        return a !== t && a && (e.child.flags |= 8192), tl(e, e.updateQueue), kt(e), null;
      case 4:
        return re(), t === null && rc(e.stateNode.containerInfo), kt(e), null;
      case 10:
        return bn(e.type), kt(e), null;
      case 19:
        if (W(It), u = e.memoizedState, u === null) return kt(e), null;
        if (r = (e.flags & 128) !== 0, c = u.rendering, c === null)
          if (r) ys(u, !1);
          else {
            if (Yt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (c = Fr(t), c !== null) {
                  for (e.flags |= 128, ys(u, !1), t = c.updateQueue, e.updateQueue = t, tl(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null; )
                    xd(a, t), a = a.sibling;
                  return F(
                    It,
                    It.current & 1 | 2
                  ), e.child;
                }
                t = t.sibling;
              }
            u.tail !== null && en() > il && (e.flags |= 128, r = !0, ys(u, !1), e.lanes = 4194304);
          }
        else {
          if (!r)
            if (t = Fr(c), t !== null) {
              if (e.flags |= 128, r = !0, t = t.updateQueue, e.updateQueue = t, tl(e, t), ys(u, !0), u.tail === null && u.tailMode === "hidden" && !c.alternate && !Et)
                return kt(e), null;
            } else
              2 * en() - u.renderingStartTime > il && a !== 536870912 && (e.flags |= 128, r = !0, ys(u, !1), e.lanes = 4194304);
          u.isBackwards ? (c.sibling = e.child, e.child = c) : (t = u.last, t !== null ? t.sibling = c : e.child = c, u.last = c);
        }
        return u.tail !== null ? (e = u.tail, u.rendering = e, u.tail = e.sibling, u.renderingStartTime = en(), e.sibling = null, t = It.current, F(It, r ? t & 1 | 2 : t & 1), e) : (kt(e), null);
      case 22:
      case 23:
        return Sn(e), ou(), r = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== r && (e.flags |= 8192) : r && (e.flags |= 8192), r ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (kt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : kt(e), a = e.updateQueue, a !== null && tl(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), r = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), r !== a && (e.flags |= 2048), t !== null && W(Si), null;
      case 24:
        return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), bn($t), kt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, e.tag));
  }
  function ax(t, e) {
    switch (Zo(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return bn($t), re(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return mn(e), null;
      case 13:
        if (Sn(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(o(340));
          ts();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return W(It), null;
      case 4:
        return re(), null;
      case 10:
        return bn(e.type), null;
      case 22:
      case 23:
        return Sn(e), ou(), t !== null && W(Si), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return bn($t), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Qh(t, e) {
    switch (Zo(e), e.tag) {
      case 3:
        bn($t), re();
        break;
      case 26:
      case 27:
      case 5:
        mn(e);
        break;
      case 4:
        re();
        break;
      case 13:
        Sn(e);
        break;
      case 19:
        W(It);
        break;
      case 10:
        bn(e.type);
        break;
      case 22:
      case 23:
        Sn(e), ou(), t !== null && W(Si);
        break;
      case 24:
        bn($t);
    }
  }
  function gs(t, e) {
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
              var S = a, D = v;
              try {
                D();
              } catch (L) {
                zt(
                  u,
                  S,
                  L
                );
              }
            }
          }
          r = r.next;
        } while (r !== c);
      }
    } catch (L) {
      zt(e, e.return, L);
    }
  }
  function Zh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var a = t.stateNode;
      try {
        Vd(e, a);
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
  function vs(t, e) {
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
  function Uu(t, e, a) {
    try {
      var r = t.stateNode;
      Ex(r, t.type, a, e), r[be] = e;
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
      ue(e, r, a), e[fe] = t, e[be] = a;
    } catch (c) {
      zt(t, t.return, c);
    }
  }
  var An = !1, Kt = !1, ku = !1, Ih = typeof WeakSet == "function" ? WeakSet : Set, ie = null;
  function sx(t, e) {
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
            var y = 0, v = -1, S = -1, D = 0, L = 0, P = t, N = null;
            e: for (; ; ) {
              for (var _; P !== a || u !== 0 && P.nodeType !== 3 || (v = y + u), P !== c || r !== 0 && P.nodeType !== 3 || (S = y + r), P.nodeType === 3 && (y += P.nodeValue.length), (_ = P.firstChild) !== null; )
                N = P, P = _;
              for (; ; ) {
                if (P === t) break e;
                if (N === a && ++D === u && (v = y), N === c && ++L === r && (S = y), (_ = P.nextSibling) !== null) break;
                P = N, N = P.parentNode;
              }
              P = _;
            }
            a = v === -1 || S === -1 ? null : { start: v, end: S };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (cc = { focusedElem: t, selectionRange: a }, bl = !1, ie = e; ie !== null; )
      if (e = ie, t = e.child, (e.subtreeFlags & 1024) !== 0 && t !== null)
        t.return = e, ie = t;
      else
        for (; ie !== null; ) {
          switch (e = ie, c = e.alternate, t = e.flags, e.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && c !== null) {
                t = void 0, a = e, u = c.memoizedProps, c = c.memoizedState, r = a.stateNode;
                try {
                  var ot = wi(
                    a.type,
                    u,
                    a.elementType === a.type
                  );
                  t = r.getSnapshotBeforeUpdate(
                    ot,
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
            t.return = e.return, ie = t;
            break;
          }
          ie = e.return;
        }
  }
  function tp(t, e, a) {
    var r = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Pn(t, a), r & 4 && gs(5, a);
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
        r & 64 && Zh(a), r & 512 && vs(a, a.return);
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
            Vd(t, e);
          } catch (y) {
            zt(a, a.return, y);
          }
        }
        break;
      case 27:
        e === null && r & 4 && $h(a);
      case 26:
      case 5:
        Pn(t, a), e === null && r & 4 && Wh(a), r & 512 && vs(a, a.return);
        break;
      case 12:
        Pn(t, a);
        break;
      case 13:
        Pn(t, a), r & 4 && ip(t, a), r & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (a = hx.bind(
          null,
          a
        ), jx(t, a))));
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
  var Bt = null, Te = !1;
  function En(t, e, a) {
    for (a = a.child; a !== null; )
      np(t, e, a), a = a.sibling;
  }
  function np(t, e, a) {
    if (Re && typeof Re.onCommitFiberUnmount == "function")
      try {
        Re.onCommitFiberUnmount(ka, a);
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
        var r = Bt, u = Te;
        Fn(a.type) && (Bt = a.stateNode, Te = !1), En(
          t,
          e,
          a
        ), Rs(a.stateNode), Bt = r, Te = u;
        break;
      case 5:
        Kt || sn(a, e);
      case 6:
        if (r = Bt, u = Te, Bt = null, En(
          t,
          e,
          a
        ), Bt = r, Te = u, Bt !== null)
          if (Te)
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
        Bt !== null && (Te ? (t = Bt, Gp(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          a.stateNode
        ), Vs(t)) : Gp(Bt, a.stateNode));
        break;
      case 4:
        r = Bt, u = Te, Bt = a.stateNode.containerInfo, Te = !0, En(
          t,
          e,
          a
        ), Bt = r, Te = u;
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
  function rx(t) {
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
    var a = rx(t);
    e.forEach(function(r) {
      var u = px.bind(null, t, r);
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
                Bt = v.stateNode, Te = !1;
                break t;
              }
              break;
            case 5:
              Bt = v.stateNode, Te = !1;
              break t;
            case 3:
            case 4:
              Bt = v.stateNode.containerInfo, Te = !0;
              break t;
          }
          v = v.return;
        }
        if (Bt === null) throw Error(o(160));
        np(c, y, u), Bt = null, Te = !1, c = u.alternate, c !== null && (c.return = null), u.return = null;
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
        Ne(e, t), je(t), r & 4 && (qn(3, t, t.return), gs(3, t), qn(5, t, t.return));
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
                      c = u.getElementsByTagName("title")[0], (!c || c[Pa] || c[fe] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = u.createElement(r), u.head.insertBefore(
                        c,
                        u.querySelector("head > title")
                      )), ue(c, r, a), c[fe] = t, ee(c), r = c;
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
                      c = u.createElement(r), ue(c, r, a), u.head.appendChild(c);
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
                      c = u.createElement(r), ue(c, r, a), u.head.appendChild(c);
                      break;
                    default:
                      throw Error(o(468, r));
                  }
                  c[fe] = t, ee(c), r = c;
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
            )) : r === null && t.stateNode !== null && Uu(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Ne(e, t), je(t), r & 512 && (Kt || a === null || sn(a, a.return)), a !== null && r & 4 && Uu(
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
        r & 4 && t.stateNode != null && (u = t.memoizedProps, Uu(
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
        var S = a !== null && a.memoizedState !== null, D = An, L = Kt;
        if (An = D || u, Kt = L || S, Ne(e, t), Kt = L, An = D, je(t), r & 8192)
          t: for (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, u && (a === null || S || An || Kt || Ai(t)), a = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (a === null) {
                S = a = e;
                try {
                  if (c = S.stateNode, u)
                    y = c.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                  else {
                    v = S.stateNode;
                    var P = S.memoizedProps.style, N = P != null && P.hasOwnProperty("display") ? P.display : null;
                    v.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim();
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
            var S = a.stateNode.containerInfo, D = Bu(t);
            Lu(
              t,
              D,
              S
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (L) {
        zt(t, t.return, L);
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
          Rs(e.stateNode);
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
          ), gs(4, c);
          break;
        case 1:
          if (Yn(
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
          a && y & 64 && Zh(c), vs(c, c.return);
          break;
        case 27:
          $h(c);
        case 26:
        case 5:
          Yn(
            u,
            c,
            a
          ), a && r === null && y & 4 && Wh(c), vs(c, c.return);
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
          ), vs(c, c.return);
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
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && is(a));
  }
  function Pu(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && is(t));
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
        ), u & 2048 && gs(9, e);
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
        ), u & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && is(t)));
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
        ) : bs(t, e) : c._visibility & 2 ? rn(
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
      var c = t, y = e, v = a, S = r, D = y.flags;
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
          ), gs(8, y);
          break;
        case 23:
          break;
        case 22:
          var L = y.stateNode;
          y.memoizedState !== null ? L._visibility & 2 ? ca(
            c,
            y,
            v,
            S,
            u
          ) : bs(
            c,
            y
          ) : (L._visibility |= 2, ca(
            c,
            y,
            v,
            S,
            u
          )), u && D & 2048 && qu(
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
          ), u && D & 2048 && Pu(y.alternate, y);
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
  function bs(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var a = t, r = e, u = r.flags;
        switch (r.tag) {
          case 22:
            bs(a, r), u & 2048 && qu(
              r.alternate,
              r
            );
            break;
          case 24:
            bs(a, r), u & 2048 && Pu(r.alternate, r);
            break;
          default:
            bs(a, r);
        }
        e = e.sibling;
      }
  }
  var xs = 8192;
  function fa(t) {
    if (t.subtreeFlags & xs)
      for (t = t.child; t !== null; )
        lp(t), t = t.sibling;
  }
  function lp(t) {
    switch (t.tag) {
      case 26:
        fa(t), t.flags & xs && t.memoizedState !== null && Xx(
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
        t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = xs, xs = 16777216, fa(t), xs = e) : fa(t));
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
  function Ss(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var r = e[a];
          ie = r, cp(
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
        Ss(t), t.flags & 2048 && qn(9, t, t.return);
        break;
      case 3:
        Ss(t);
        break;
      case 12:
        Ss(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, nl(t)) : Ss(t);
        break;
      default:
        Ss(t);
    }
  }
  function nl(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var r = e[a];
          ie = r, cp(
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
    for (; ie !== null; ) {
      var a = ie;
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
          is(a.memoizedState.cache);
      }
      if (r = a.child, r !== null) r.return = a, ie = r;
      else
        t: for (a = t; ie !== null; ) {
          r = ie;
          var u = r.sibling, c = r.return;
          if (ep(r), r === a) {
            ie = null;
            break t;
          }
          if (u !== null) {
            u.return = c, ie = u;
            break t;
          }
          ie = c;
        }
    }
  }
  var lx = {
    getCacheForType: function(t) {
      var e = me($t), a = e.data.get(t);
      return a === void 0 && (a = t(), e.data.set(t, a)), a;
    }
  }, ox = typeof WeakMap == "function" ? WeakMap : Map, Rt = 0, Vt = null, gt = null, xt = 0, Ot = 0, _e = null, Gn = !1, ma = !1, Yu = !1, Mn = 0, Yt = 0, Xn = 0, Ei = 0, Gu = 0, Ye = 0, da = 0, Ts = null, we = null, Xu = !1, Ku = 0, il = 1 / 0, al = null, Kn = null, oe = 0, Qn = null, ha = null, pa = 0, Qu = 0, Zu = null, fp = null, ws = 0, Fu = null;
  function ze() {
    if ((Rt & 2) !== 0 && xt !== 0)
      return xt & -xt;
    if (B.T !== null) {
      var t = na;
      return t !== 0 ? t : nc();
    }
    return Rm();
  }
  function mp() {
    Ye === 0 && (Ye = (xt & 536870912) === 0 || Et ? wm() : 536870912);
    var t = Pe.current;
    return t !== null && (t.flags |= 32), Ye;
  }
  function Ve(t, e, a) {
    (t === Vt && (Ot === 2 || Ot === 9) || t.cancelPendingCommit !== null) && (ya(t, 0), Zn(
      t,
      xt,
      Ye,
      !1
    )), qa(t, a), ((Rt & 2) === 0 || t !== Vt) && (t === Vt && ((Rt & 2) === 0 && (Ei |= a), Yt === 4 && Zn(
      t,
      xt,
      Ye,
      !1
    )), ln(t));
  }
  function dp(t, e, a) {
    if ((Rt & 6) !== 0) throw Error(o(327));
    var r = !a && (e & 124) === 0 && (e & t.expiredLanes) === 0 || Ha(t, e), u = r ? fx(t, e) : $u(t, e, !0), c = r;
    do {
      if (u === 0) {
        ma && !r && Zn(t, e, 0, !1);
        break;
      } else {
        if (a = t.current.alternate, c && !ux(a)) {
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
              u = Ts;
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
                c = we, we = u, c !== null && (we === null ? we = c : we.push.apply(
                  we,
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
              we = null;
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
                we,
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
            we,
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
  function hp(t, e, a, r, u, c, y, v, S, D, L, P, N, _) {
    if (t.timeoutHandle = -1, P = e.subtreeFlags, (P & 8192 || (P & 16785408) === 16785408) && (Ds = { stylesheets: null, count: 0, unsuspend: Gx }, lp(e), P = Kx(), P !== null)) {
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
          L,
          1,
          N,
          _
        )
      ), Zn(t, c, y, !D);
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
  function ux(t) {
    for (var e = t; ; ) {
      var a = e.tag;
      if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var r = 0; r < a.length; r++) {
          var u = a[r], c = u.getSnapshot;
          u = u.value;
          try {
            if (!Ce(c(), u)) return !1;
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
    return (Rt & 6) === 0 ? (As(0), !1) : !0;
  }
  function Wu() {
    if (gt !== null) {
      if (Ot === 0)
        var t = gt.return;
      else
        t = gt, vn = bi = null, du(t), oa = null, hs = 0, t = gt;
      for (; t !== null; )
        Qh(t.alternate, t), t = t.return;
      gt = null;
    }
  }
  function ya(t, e) {
    var a = t.timeoutHandle;
    a !== -1 && (t.timeoutHandle = -1, Rx(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), Wu(), Vt = t, gt = a = pn(t.current, null), xt = e, Ot = 0, _e = null, Gn = !1, ma = Ha(t, e), Yu = !1, da = Ye = Gu = Ei = Xn = Yt = 0, we = Ts = null, Xu = !1, (e & 8) !== 0 && (e |= e & 32);
    var r = t.entangledLanes;
    if (r !== 0)
      for (t = t.entanglements, r &= e; 0 < r; ) {
        var u = 31 - Oe(r), c = 1 << u;
        e |= t[u], r &= ~c;
      }
    return Mn = e, Rr(), a;
  }
  function pp(t, e) {
    ht = null, B.H = Kr, e === ss || e === Ur ? (e = jd(), Ot = 3) : e === Cd ? (e = jd(), Ot = 4) : Ot = e === _h ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, _e = e, gt === null && (Yt = 1, Jr(
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
    return B.A = lx, t;
  }
  function Ju() {
    Yt = 4, Gn || (xt & 4194048) !== xt && Pe.current !== null || (ma = !0), (Xn & 134217727) === 0 && (Ei & 134217727) === 0 || Vt === null || Zn(
      Vt,
      xt,
      Ye,
      !1
    );
  }
  function $u(t, e, a) {
    var r = Rt;
    Rt |= 2;
    var u = yp(), c = gp();
    (Vt !== t || xt !== e) && (al = null, ya(t, e)), e = !1;
    var y = Yt;
    t: do
      try {
        if (Ot !== 0 && gt !== null) {
          var v = gt, S = _e;
          switch (Ot) {
            case 8:
              Wu(), y = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Pe.current === null && (e = !0);
              var D = Ot;
              if (Ot = 0, _e = null, ga(t, v, S, D), a && ma) {
                y = 0;
                break t;
              }
              break;
            default:
              D = Ot, Ot = 0, _e = null, ga(t, v, S, D);
          }
        }
        cx(), y = Yt;
        break;
      } catch (L) {
        pp(t, L);
      }
    while (!0);
    return e && t.shellSuspendCounter++, vn = bi = null, Rt = r, B.H = u, B.A = c, gt === null && (Vt = null, xt = 0, Rr()), y;
  }
  function cx() {
    for (; gt !== null; ) vp(gt);
  }
  function fx(t, e) {
    var a = Rt;
    Rt |= 2;
    var r = yp(), u = gp();
    Vt !== t || xt !== e ? (al = null, il = en() + 500, ya(t, e)) : ma = Ha(
      t,
      e
    );
    t: do
      try {
        if (Ot !== 0 && gt !== null) {
          e = gt;
          var c = _e;
          e: switch (Ot) {
            case 1:
              Ot = 0, _e = null, ga(t, e, c, 1);
              break;
            case 2:
            case 9:
              if (Dd(c)) {
                Ot = 0, _e = null, bp(e);
                break;
              }
              e = function() {
                Ot !== 2 && Ot !== 9 || Vt !== t || (Ot = 7), ln(t);
              }, c.then(e, e);
              break t;
            case 3:
              Ot = 7;
              break t;
            case 4:
              Ot = 5;
              break t;
            case 7:
              Dd(c) ? (Ot = 0, _e = null, bp(e)) : (Ot = 0, _e = null, ga(t, e, c, 7));
              break;
            case 5:
              var y = null;
              switch (gt.tag) {
                case 26:
                  y = gt.memoizedState;
                case 5:
                case 27:
                  var v = gt;
                  if (!y || ty(y)) {
                    Ot = 0, _e = null;
                    var S = v.sibling;
                    if (S !== null) gt = S;
                    else {
                      var D = v.return;
                      D !== null ? (gt = D, rl(D)) : gt = null;
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
        mx();
        break;
      } catch (L) {
        pp(t, L);
      }
    while (!0);
    return vn = bi = null, B.H = r, B.A = u, Rt = a, gt !== null ? 0 : (Vt = null, xt = 0, Rr(), Yt);
  }
  function mx() {
    for (; gt !== null && !zb(); )
      vp(gt);
  }
  function vp(t) {
    var e = Xh(t.alternate, t, Mn);
    t.memoizedProps = t.pendingProps, e === null ? rl(t) : gt = e;
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
          xt
        );
        break;
      case 11:
        e = kh(
          a,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          xt
        );
        break;
      case 5:
        du(e);
      default:
        Qh(a, e), e = gt = xd(e, Mn), e = Xh(a, e, Mn);
    }
    t.memoizedProps = t.pendingProps, e === null ? rl(t) : gt = e;
  }
  function ga(t, e, a, r) {
    vn = bi = null, du(e), oa = null, hs = 0;
    var u = e.return;
    try {
      if (ex(
        t,
        u,
        e,
        a,
        xt
      )) {
        Yt = 1, Jr(
          t,
          Le(a, t.current)
        ), gt = null;
        return;
      }
    } catch (c) {
      if (u !== null) throw gt = u, c;
      Yt = 1, Jr(
        t,
        Le(a, t.current)
      ), gt = null;
      return;
    }
    e.flags & 32768 ? (Et || r === 1 ? t = !0 : ma || (xt & 536870912) !== 0 ? t = !1 : (Gn = t = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Pe.current, r !== null && r.tag === 13 && (r.flags |= 16384))), xp(e, t)) : rl(e);
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
      var a = ix(
        e.alternate,
        e,
        Mn
      );
      if (a !== null) {
        gt = a;
        return;
      }
      if (e = e.sibling, e !== null) {
        gt = e;
        return;
      }
      gt = e = t;
    } while (e !== null);
    Yt === 0 && (Yt = 5);
  }
  function xp(t, e) {
    do {
      var a = ax(t.alternate, t);
      if (a !== null) {
        a.flags &= 32767, gt = a;
        return;
      }
      if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !e && (t = t.sibling, t !== null)) {
        gt = t;
        return;
      }
      gt = t = a;
    } while (t !== null);
    Yt = 6, gt = null;
  }
  function Sp(t, e, a, r, u, c, y, v, S) {
    t.cancelPendingCommit = null;
    do
      ll();
    while (oe !== 0);
    if ((Rt & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      if (c = e.lanes | e.childLanes, c |= Po, Gb(
        t,
        a,
        c,
        y,
        v,
        S
      ), t === Vt && (gt = Vt = null, xt = 0), ha = e, Qn = t, pa = a, Qu = c, Zu = u, fp = r, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, yx(mr, function() {
        return Mp(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), r = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || r) {
        r = B.T, B.T = null, u = z.p, z.p = 2, y = Rt, Rt |= 4;
        try {
          sx(t, e, a);
        } finally {
          Rt = y, z.p = u, B.T = r;
        }
      }
      oe = 1, Tp(), wp(), Ap();
    }
  }
  function Tp() {
    if (oe === 1) {
      oe = 0;
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
              var D = S.start, L = S.end;
              if (L === void 0 && (L = D), "selectionStart" in v)
                v.selectionStart = D, v.selectionEnd = Math.min(
                  L,
                  v.value.length
                );
              else {
                var P = v.ownerDocument || document, N = P && P.defaultView || window;
                if (N.getSelection) {
                  var _ = N.getSelection(), ot = v.textContent.length, st = Math.min(S.start, ot), jt = S.end === void 0 ? st : Math.min(S.end, ot);
                  !_.extend && st > jt && (y = jt, jt = st, st = y);
                  var M = od(
                    v,
                    st
                  ), T = od(
                    v,
                    jt
                  );
                  if (M && T && (_.rangeCount !== 1 || _.anchorNode !== M.node || _.anchorOffset !== M.offset || _.focusNode !== T.node || _.focusOffset !== T.offset)) {
                    var O = P.createRange();
                    O.setStart(M.node, M.offset), _.removeAllRanges(), st > jt ? (_.addRange(O), _.extend(T.node, T.offset)) : (O.setEnd(T.node, T.offset), _.addRange(O));
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
              var H = P[v];
              H.element.scrollLeft = H.left, H.element.scrollTop = H.top;
            }
          }
          bl = !!uc, cc = uc = null;
        } finally {
          Rt = u, z.p = r, B.T = a;
        }
      }
      t.current = e, oe = 2;
    }
  }
  function wp() {
    if (oe === 2) {
      oe = 0;
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
      oe = 3;
    }
  }
  function Ap() {
    if (oe === 4 || oe === 3) {
      oe = 0, Vb();
      var t = Qn, e = ha, a = pa, r = fp;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? oe = 5 : (oe = 0, ha = Qn = null, Ep(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (u === 0 && (Kn = null), yo(a), e = e.stateNode, Re && typeof Re.onCommitFiberRoot == "function")
        try {
          Re.onCommitFiberRoot(
            ka,
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
      (pa & 3) !== 0 && ll(), ln(t), u = t.pendingLanes, (a & 4194090) !== 0 && (u & 42) !== 0 ? t === Fu ? ws++ : (ws = 0, Fu = t) : ws = 0, As(0);
    }
  }
  function Ep(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, is(e)));
  }
  function ll(t) {
    return Tp(), wp(), Ap(), Mp();
  }
  function Mp() {
    if (oe !== 5) return !1;
    var t = Qn, e = Qu;
    Qu = 0;
    var a = yo(pa), r = B.T, u = z.p;
    try {
      z.p = 32 > a ? 32 : a, B.T = null, a = Zu, Zu = null;
      var c = Qn, y = pa;
      if (oe = 0, ha = Qn = null, pa = 0, (Rt & 6) !== 0) throw Error(o(331));
      var v = Rt;
      if (Rt |= 4, up(c.current), rp(
        c,
        c.current,
        y,
        a
      ), Rt = v, As(0, !1), Re && typeof Re.onPostCommitFiberRoot == "function")
        try {
          Re.onPostCommitFiberRoot(ka, c);
        } catch {
        }
      return !0;
    } finally {
      z.p = u, B.T = r, Ep(t, e);
    }
  }
  function Rp(t, e, a) {
    e = Le(a, e), e = Ru(t.stateNode, e, 2), t = Bn(t, e, 2), t !== null && (qa(t, 2), ln(t));
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
            ), qa(r, 2), ln(r));
            break;
          }
        }
        e = e.return;
      }
  }
  function Iu(t, e, a) {
    var r = t.pingCache;
    if (r === null) {
      r = t.pingCache = new ox();
      var u = /* @__PURE__ */ new Set();
      r.set(e, u);
    } else
      u = r.get(e), u === void 0 && (u = /* @__PURE__ */ new Set(), r.set(e, u));
    u.has(a) || (Yu = !0, u.add(a), t = dx.bind(null, t, e, a), e.then(t, t));
  }
  function dx(t, e, a) {
    var r = t.pingCache;
    r !== null && r.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, Vt === t && (xt & a) === a && (Yt === 4 || Yt === 3 && (xt & 62914560) === xt && 300 > en() - Ku ? (Rt & 2) === 0 && ya(t, 0) : Gu |= a, da === xt && (da = 0)), ln(t);
  }
  function Op(t, e) {
    e === 0 && (e = Am()), t = $i(t, e), t !== null && (qa(t, e), ln(t));
  }
  function hx(t) {
    var e = t.memoizedState, a = 0;
    e !== null && (a = e.retryLane), Op(t, a);
  }
  function px(t, e) {
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
  function yx(t, e) {
    return fo(t, e);
  }
  var ol = null, va = null, tc = !1, ul = !1, ec = !1, Mi = 0;
  function ln(t) {
    t !== va && t.next === null && (va === null ? ol = va = t : va = va.next = t), ul = !0, tc || (tc = !0, vx());
  }
  function As(t, e) {
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
            c = xt, c = pr(
              r,
              r === Vt ? c : 0,
              r.cancelPendingCommit !== null || r.timeoutHandle !== -1
            ), (c & 3) === 0 || Ha(r, c) || (a = !0, jp(r, c));
          r = r.next;
        }
      while (a);
      ec = !1;
    }
  }
  function gx() {
    Cp();
  }
  function Cp() {
    ul = tc = !1;
    var t = 0;
    Mi !== 0 && (Mx() && (t = Mi), Mi = 0);
    for (var e = en(), a = null, r = ol; r !== null; ) {
      var u = r.next, c = Dp(r, e);
      c === 0 ? (r.next = null, a === null ? ol = u : a.next = u, u === null && (va = a)) : (a = r, (t !== 0 || (c & 3) !== 0) && (ul = !0)), r = u;
    }
    As(t);
  }
  function Dp(t, e) {
    for (var a = t.suspendedLanes, r = t.pingedLanes, u = t.expirationTimes, c = t.pendingLanes & -62914561; 0 < c; ) {
      var y = 31 - Oe(c), v = 1 << y, S = u[y];
      S === -1 ? ((v & a) === 0 || (v & r) !== 0) && (u[y] = Yb(v, e)) : S <= e && (t.expiredLanes |= v), c &= ~v;
    }
    if (e = Vt, a = xt, a = pr(
      t,
      t === e ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), r = t.callbackNode, a === 0 || t === e && (Ot === 2 || Ot === 9) || t.cancelPendingCommit !== null)
      return r !== null && r !== null && mo(r), t.callbackNode = null, t.callbackPriority = 0;
    if ((a & 3) === 0 || Ha(t, a)) {
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
    if (oe !== 0 && oe !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var a = t.callbackNode;
    if (ll() && t.callbackNode !== a)
      return null;
    var r = xt;
    return r = pr(
      t,
      t === Vt ? r : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), r === 0 ? null : (dp(t, r, e), Dp(t, en()), t.callbackNode != null && t.callbackNode === a ? Np.bind(null, t) : null);
  }
  function jp(t, e) {
    if (ll()) return null;
    dp(t, e, !0);
  }
  function vx() {
    Ox(function() {
      (Rt & 6) !== 0 ? fo(
        xm,
        gx
      ) : Cp();
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
  function bx(t, e, a, r, u) {
    if (e === "submit" && a && a.stateNode === u) {
      var c = _p(
        (u[be] || null).action
      ), y = r.submitter;
      y && (e = (e = y[be] || null) ? _p(e.formAction) : y.getAttribute("formAction"), e !== null && (c = e, y = null));
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
    var ac = qo[ic], xx = ac.toLowerCase(), Sx = ac[0].toUpperCase() + ac.slice(1);
    Ze(
      xx,
      "on" + Sx
    );
  }
  Ze(dd, "onAnimationEnd"), Ze(hd, "onAnimationIteration"), Ze(pd, "onAnimationStart"), Ze("dblclick", "onDoubleClick"), Ze("focusin", "onFocus"), Ze("focusout", "onBlur"), Ze(L1, "onTransitionRun"), Ze(k1, "onTransitionStart"), Ze(H1, "onTransitionCancel"), Ze(yd, "onTransitionEnd"), Pi("onMouseEnter", ["mouseout", "mouseover"]), Pi("onMouseLeave", ["mouseout", "mouseover"]), Pi("onPointerEnter", ["pointerout", "pointerover"]), Pi("onPointerLeave", ["pointerout", "pointerover"]), ci(
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
  var Es = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Tx = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Es)
  );
  function Vp(t, e) {
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
            } catch (L) {
              Wr(L);
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
            } catch (L) {
              Wr(L);
            }
            u.currentTarget = null, c = S;
          }
      }
    }
  }
  function vt(t, e) {
    var a = e[go];
    a === void 0 && (a = e[go] = /* @__PURE__ */ new Set());
    var r = t + "__bubble";
    a.has(r) || (Up(e, t, 2, !1), a.add(r));
  }
  function sc(t, e, a) {
    var r = 0;
    e && (r |= 4), Up(
      a,
      t,
      r,
      e
    );
  }
  var cl = "_reactListening" + Math.random().toString(36).slice(2);
  function rc(t) {
    if (!t[cl]) {
      t[cl] = !0, Cm.forEach(function(a) {
        a !== "selectionchange" && (Tx.has(a) || sc(a, !1, t), sc(a, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[cl] || (e[cl] = !0, sc("selectionchange", !1, e));
    }
  }
  function Up(t, e, a, r) {
    switch (ry(e)) {
      case 2:
        var u = Fx;
        break;
      case 8:
        u = Wx;
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
      var D = c, L = Mo(a), P = [];
      t: {
        var N = gd.get(t);
        if (N !== void 0) {
          var _ = Ar, ot = t;
          switch (t) {
            case "keypress":
              if (Tr(a) === 0) break t;
            case "keydown":
            case "keyup":
              _ = y1;
              break;
            case "focusin":
              ot = "focus", _ = jo;
              break;
            case "focusout":
              ot = "blur", _ = jo;
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
              _ = a1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _ = b1;
              break;
            case dd:
            case hd:
            case pd:
              _ = l1;
              break;
            case yd:
              _ = S1;
              break;
            case "scroll":
            case "scrollend":
              _ = n1;
              break;
            case "wheel":
              _ = w1;
              break;
            case "copy":
            case "cut":
            case "paste":
              _ = u1;
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
              _ = E1;
          }
          var st = (e & 4) !== 0, jt = !st && (t === "scroll" || t === "scrollend"), M = st ? N !== null ? N + "Capture" : null : N;
          st = [];
          for (var T = D, O; T !== null; ) {
            var H = T;
            if (O = H.stateNode, H = H.tag, H !== 5 && H !== 26 && H !== 27 || O === null || M === null || (H = Ga(T, M), H != null && st.push(
              Ms(T, H, O)
            )), jt) break;
            T = T.return;
          }
          0 < st.length && (N = new _(
            N,
            ot,
            null,
            a,
            L
          ), P.push({ event: N, listeners: st }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (N = t === "mouseover" || t === "pointerover", _ = t === "mouseout" || t === "pointerout", N && a !== Eo && (ot = a.relatedTarget || a.fromElement) && (ki(ot) || ot[Li]))
            break t;
          if ((_ || N) && (N = L.window === L ? L : (N = L.ownerDocument) ? N.defaultView || N.parentWindow : window, _ ? (ot = a.relatedTarget || a.toElement, _ = D, ot = ot ? ki(ot) : null, ot !== null && (jt = f(ot), st = ot.tag, ot !== jt || st !== 5 && st !== 27 && st !== 6) && (ot = null)) : (_ = null, ot = D), _ !== ot)) {
            if (st = Km, H = "onMouseLeave", M = "onMouseEnter", T = "mouse", (t === "pointerout" || t === "pointerover") && (st = Zm, H = "onPointerLeave", M = "onPointerEnter", T = "pointer"), jt = _ == null ? N : Ya(_), O = ot == null ? N : Ya(ot), N = new st(
              H,
              T + "leave",
              _,
              a,
              L
            ), N.target = jt, N.relatedTarget = O, H = null, ki(L) === D && (st = new st(
              M,
              T + "enter",
              ot,
              a,
              L
            ), st.target = O, st.relatedTarget = jt, H = st), jt = H, _ && ot)
              e: {
                for (st = _, M = ot, T = 0, O = st; O; O = ba(O))
                  T++;
                for (O = 0, H = M; H; H = ba(H))
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
              P,
              N,
              _,
              st,
              !1
            ), ot !== null && jt !== null && Bp(
              P,
              jt,
              ot,
              st,
              !0
            );
          }
        }
        t: {
          if (N = D ? Ya(D) : window, _ = N.nodeName && N.nodeName.toLowerCase(), _ === "select" || _ === "input" && N.type === "file")
            var tt = nd;
          else if (td(N))
            if (id)
              tt = V1;
            else {
              tt = _1;
              var yt = j1;
            }
          else
            _ = N.nodeName, !_ || _.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? D && Ao(D.elementType) && (tt = nd) : tt = z1;
          if (tt && (tt = tt(t, D))) {
            ed(
              P,
              tt,
              a,
              L
            );
            break t;
          }
          yt && yt(t, N, D), t === "focusout" && D && N.type === "number" && D.memoizedProps.value != null && wo(N, "number", N.value);
        }
        switch (yt = D ? Ya(D) : window, t) {
          case "focusin":
            (td(yt) || yt.contentEditable === "true") && (Fi = yt, Lo = D, $a = null);
            break;
          case "focusout":
            $a = Lo = Fi = null;
            break;
          case "mousedown":
            ko = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ko = !1, fd(P, a, L);
            break;
          case "selectionchange":
            if (B1) break;
          case "keydown":
          case "keyup":
            fd(P, a, L);
        }
        var it;
        if (zo)
          t: {
            switch (t) {
              case "compositionstart":
                var rt = "onCompositionStart";
                break t;
              case "compositionend":
                rt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                rt = "onCompositionUpdate";
                break t;
            }
            rt = void 0;
          }
        else
          Zi ? $m(t, a) && (rt = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (rt = "onCompositionStart");
        rt && (Fm && a.locale !== "ko" && (Zi || rt !== "onCompositionStart" ? rt === "onCompositionEnd" && Zi && (it = Gm()) : (_n = L, Co = "value" in _n ? _n.value : _n.textContent, Zi = !0)), yt = fl(D, rt), 0 < yt.length && (rt = new Qm(
          rt,
          t,
          null,
          a,
          L
        ), P.push({ event: rt, listeners: yt }), it ? rt.data = it : (it = Im(a), it !== null && (rt.data = it)))), (it = R1 ? O1(t, a) : C1(t, a)) && (rt = fl(D, "onBeforeInput"), 0 < rt.length && (yt = new Qm(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          L
        ), P.push({
          event: yt,
          listeners: rt
        }), yt.data = it)), bx(
          P,
          t,
          D,
          a,
          L
        );
      }
      Vp(P, e);
    });
  }
  function Ms(t, e, a) {
    return {
      instance: t,
      listener: e,
      currentTarget: a
    };
  }
  function fl(t, e) {
    for (var a = e + "Capture", r = []; t !== null; ) {
      var u = t, c = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || c === null || (u = Ga(t, a), u != null && r.unshift(
        Ms(t, u, c)
      ), u = Ga(t, e), u != null && r.push(
        Ms(t, u, c)
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
      var v = a, S = v.alternate, D = v.stateNode;
      if (v = v.tag, S !== null && S === r) break;
      v !== 5 && v !== 26 && v !== 27 || D === null || (S = D, u ? (D = Ga(a, c), D != null && y.unshift(
        Ms(a, D, S)
      )) : u || (D = Ga(a, c), D != null && y.push(
        Ms(a, D, S)
      ))), a = a.return;
    }
    y.length !== 0 && t.push({ event: e, listeners: y });
  }
  var wx = /\r\n?/g, Ax = /\u0000|\uFFFD/g;
  function Lp(t) {
    return (typeof t == "string" ? t : "" + t).replace(wx, `
`).replace(Ax, "");
  }
  function kp(t, e) {
    return e = Lp(e), Lp(t) === e;
  }
  function ml() {
  }
  function Nt(t, e, a, r, u, c) {
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
          typeof c == "function" && (a === "formAction" ? (e !== "input" && Nt(t, e, "name", u.name, u, null), Nt(
            t,
            e,
            "formEncType",
            u.formEncType,
            u,
            null
          ), Nt(
            t,
            e,
            "formMethod",
            u.formMethod,
            u,
            null
          ), Nt(
            t,
            e,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (Nt(t, e, "encType", u.encType, u, null), Nt(t, e, "method", u.method, u, null), Nt(t, e, "target", u.target, u, null)));
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
        r != null && vt("scroll", t);
        break;
      case "onScrollEnd":
        r != null && vt("scrollend", t);
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
        vt("beforetoggle", t), vt("toggle", t), yr(t, "popover", r);
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
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = t1.get(a) || a, yr(t, a, r));
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
        r != null && vt("scroll", t);
        break;
      case "onScrollEnd":
        r != null && vt("scrollend", t);
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
        if (!Dm.hasOwnProperty(a))
          t: {
            if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"), e = a.slice(2, u ? a.length - 7 : void 0), c = t[be] || null, c = c != null ? c[a] : null, typeof c == "function" && t.removeEventListener(e, c, u), typeof r == "function")) {
              typeof c != "function" && c !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(e, r, u);
              break t;
            }
            a in t ? t[a] = r : r === !0 ? t.setAttribute(a, "") : yr(t, a, r);
          }
    }
  }
  function ue(t, e, a) {
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
        vt("error", t), vt("load", t);
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
                  Nt(t, e, c, y, a, null);
              }
          }
        u && Nt(t, e, "srcSet", a.srcSet, a, null), r && Nt(t, e, "src", a.src, a, null);
        return;
      case "input":
        vt("invalid", t);
        var v = c = y = u = null, S = null, D = null;
        for (r in a)
          if (a.hasOwnProperty(r)) {
            var L = a[r];
            if (L != null)
              switch (r) {
                case "name":
                  u = L;
                  break;
                case "type":
                  y = L;
                  break;
                case "checked":
                  S = L;
                  break;
                case "defaultChecked":
                  D = L;
                  break;
                case "value":
                  c = L;
                  break;
                case "defaultValue":
                  v = L;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (L != null)
                    throw Error(o(137, e));
                  break;
                default:
                  Nt(t, e, r, L, a, null);
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
        ), vr(t);
        return;
      case "select":
        vt("invalid", t), r = y = c = null;
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
                Nt(t, e, u, v, a, null);
            }
        e = c, a = y, t.multiple = !!r, e != null ? Gi(t, !!r, e, !1) : a != null && Gi(t, !!r, a, !0);
        return;
      case "textarea":
        vt("invalid", t), c = u = r = null;
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
                Nt(t, e, y, v, a, null);
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
                Nt(t, e, S, r, a, null);
            }
        return;
      case "dialog":
        vt("beforetoggle", t), vt("toggle", t), vt("cancel", t), vt("close", t);
        break;
      case "iframe":
      case "object":
        vt("load", t);
        break;
      case "video":
      case "audio":
        for (r = 0; r < Es.length; r++)
          vt(Es[r], t);
        break;
      case "image":
        vt("error", t), vt("load", t);
        break;
      case "details":
        vt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        vt("error", t), vt("load", t);
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
                Nt(t, e, D, r, a, null);
            }
        return;
      default:
        if (Ao(e)) {
          for (L in a)
            a.hasOwnProperty(L) && (r = a[L], r !== void 0 && oc(
              t,
              e,
              L,
              r,
              a,
              void 0
            ));
          return;
        }
    }
    for (v in a)
      a.hasOwnProperty(v) && (r = a[v], r != null && Nt(t, e, v, r, a, null));
  }
  function Ex(t, e, a, r) {
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
        var u = null, c = null, y = null, v = null, S = null, D = null, L = null;
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
                r.hasOwnProperty(_) || Nt(t, e, _, null, r, P);
            }
        }
        for (var N in r) {
          var _ = r[N];
          if (P = a[N], r.hasOwnProperty(N) && (_ != null || P != null))
            switch (N) {
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
                L = _;
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
                _ !== P && Nt(
                  t,
                  e,
                  N,
                  _,
                  r,
                  P
                );
            }
        }
        To(
          t,
          y,
          v,
          S,
          D,
          L,
          c,
          u
        );
        return;
      case "select":
        _ = y = v = N = null;
        for (c in a)
          if (S = a[c], a.hasOwnProperty(c) && S != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                _ = S;
              default:
                r.hasOwnProperty(c) || Nt(
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
                N = c;
                break;
              case "defaultValue":
                v = c;
                break;
              case "multiple":
                y = c;
              default:
                c !== S && Nt(
                  t,
                  e,
                  u,
                  c,
                  r,
                  S
                );
            }
        e = v, a = y, r = _, N != null ? Gi(t, !!a, N, !1) : !!r != !!a && (e != null ? Gi(t, !!a, e, !0) : Gi(t, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        _ = N = null;
        for (v in a)
          if (u = a[v], a.hasOwnProperty(v) && u != null && !r.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                Nt(t, e, v, null, r, u);
            }
        for (y in r)
          if (u = r[y], c = a[y], r.hasOwnProperty(y) && (u != null || c != null))
            switch (y) {
              case "value":
                N = u;
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
                u !== c && Nt(t, e, y, u, r, c);
            }
        Lm(t, N, _);
        return;
      case "option":
        for (var ot in a)
          if (N = a[ot], a.hasOwnProperty(ot) && N != null && !r.hasOwnProperty(ot))
            switch (ot) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Nt(
                  t,
                  e,
                  ot,
                  null,
                  r,
                  N
                );
            }
        for (S in r)
          if (N = r[S], _ = a[S], r.hasOwnProperty(S) && N !== _ && (N != null || _ != null))
            switch (S) {
              case "selected":
                t.selected = N && typeof N != "function" && typeof N != "symbol";
                break;
              default:
                Nt(
                  t,
                  e,
                  S,
                  N,
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
          N = a[st], a.hasOwnProperty(st) && N != null && !r.hasOwnProperty(st) && Nt(t, e, st, null, r, N);
        for (D in r)
          if (N = r[D], _ = a[D], r.hasOwnProperty(D) && N !== _ && (N != null || _ != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(o(137, e));
                break;
              default:
                Nt(
                  t,
                  e,
                  D,
                  N,
                  r,
                  _
                );
            }
        return;
      default:
        if (Ao(e)) {
          for (var jt in a)
            N = a[jt], a.hasOwnProperty(jt) && N !== void 0 && !r.hasOwnProperty(jt) && oc(
              t,
              e,
              jt,
              void 0,
              r,
              N
            );
          for (L in r)
            N = r[L], _ = a[L], !r.hasOwnProperty(L) || N === _ || N === void 0 && _ === void 0 || oc(
              t,
              e,
              L,
              N,
              r,
              _
            );
          return;
        }
    }
    for (var M in a)
      N = a[M], a.hasOwnProperty(M) && N != null && !r.hasOwnProperty(M) && Nt(t, e, M, null, r, N);
    for (P in r)
      N = r[P], _ = a[P], !r.hasOwnProperty(P) || N === _ || N == null && _ == null || Nt(t, e, P, N, r, _);
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
  function Mx() {
    var t = window.event;
    return t && t.type === "popstate" ? t === mc ? !1 : (mc = t, !0) : (mc = null, !1);
  }
  var Pp = typeof setTimeout == "function" ? setTimeout : void 0, Rx = typeof clearTimeout == "function" ? clearTimeout : void 0, Yp = typeof Promise == "function" ? Promise : void 0, Ox = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yp < "u" ? function(t) {
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
            if (a & 1 && Rs(y.documentElement), a & 2 && Rs(y.body), a & 4)
              for (a = y.head, Rs(a), y = a.firstChild; y; ) {
                var v = y.nextSibling, S = y.nodeName;
                y[Pa] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && y.rel.toLowerCase() === "stylesheet" || a.removeChild(y), y = v;
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
  function Dx(t, e, a, r) {
    for (; t.nodeType === 1; ) {
      var u = a;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!r && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (r) {
        if (!t[Pa])
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
  function Nx(t, e, a) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = We(t.nextSibling), t === null)) return null;
    return t;
  }
  function hc(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete";
  }
  function jx(t, e) {
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
  function Rs(t) {
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
    f: _x,
    r: zx,
    D: Vx,
    C: Ux,
    L: Bx,
    m: Lx,
    X: Hx,
    S: kx,
    M: qx
  };
  function _x() {
    var t = Rn.f(), e = sl();
    return t || e;
  }
  function zx(t) {
    var e = Hi(t);
    e !== null && e.tag === 5 && e.type === "form" ? dh(e) : Rn.r(t);
  }
  var xa = typeof document > "u" ? null : document;
  function Zp(t, e, a) {
    var r = xa;
    if (r && typeof e == "string" && e) {
      var u = Be(e);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof a == "string" && (u += '[crossorigin="' + a + '"]'), Qp.has(u) || (Qp.add(u), t = { rel: t, crossOrigin: a, href: e }, r.querySelector(u) === null && (e = r.createElement("link"), ue(e, "link", t), ee(e), r.head.appendChild(e)));
    }
  }
  function Vx(t) {
    Rn.D(t), Zp("dns-prefetch", t, null);
  }
  function Ux(t, e) {
    Rn.C(t, e), Zp("preconnect", t, e);
  }
  function Bx(t, e, a) {
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
      ), Ge.set(c, t), r.querySelector(u) !== null || e === "style" && r.querySelector(Os(c)) || e === "script" && r.querySelector(Cs(c)) || (e = r.createElement("link"), ue(e, "link", t), ee(e), r.head.appendChild(e)));
    }
  }
  function Lx(t, e) {
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
        r = a.createElement("link"), ue(r, "link", t), ee(r), a.head.appendChild(r);
      }
    }
  }
  function kx(t, e, a) {
    Rn.S(t, e, a);
    var r = xa;
    if (r && t) {
      var u = qi(r).hoistableStyles, c = Sa(t);
      e = e || "default";
      var y = u.get(c);
      if (!y) {
        var v = { loading: 0, preload: null };
        if (y = r.querySelector(
          Os(c)
        ))
          v.loading = 5;
        else {
          t = b(
            { rel: "stylesheet", href: t, "data-precedence": e },
            a
          ), (a = Ge.get(c)) && yc(t, a);
          var S = y = r.createElement("link");
          ee(S), ue(S, "link", t), S._p = new Promise(function(D, L) {
            S.onload = D, S.onerror = L;
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
  function Hx(t, e) {
    Rn.X(t, e);
    var a = xa;
    if (a && t) {
      var r = qi(a).hoistableScripts, u = Ta(t), c = r.get(u);
      c || (c = a.querySelector(Cs(u)), c || (t = b({ src: t, async: !0 }, e), (e = Ge.get(u)) && gc(t, e), c = a.createElement("script"), ee(c), ue(c, "link", t), a.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, r.set(u, c));
    }
  }
  function qx(t, e) {
    Rn.M(t, e);
    var a = xa;
    if (a && t) {
      var r = qi(a).hoistableScripts, u = Ta(t), c = r.get(u);
      c || (c = a.querySelector(Cs(u)), c || (t = b({ src: t, async: !0, type: "module" }, e), (e = Ge.get(u)) && gc(t, e), c = a.createElement("script"), ee(c), ue(c, "link", t), a.head.appendChild(c)), c = {
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
            Os(t)
          )) && !c._p && (y.instance = c, y.state.loading = 5), Ge.has(t) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Ge.set(t, a), c || Px(
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
  function Os(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Wp(t) {
    return b({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Px(t, e, a, r) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? r.loading = 1 : (e = t.createElement("link"), r.preload = e, e.addEventListener("load", function() {
      return r.loading |= 1;
    }), e.addEventListener("error", function() {
      return r.loading |= 2;
    }), ue(e, "link", a), ee(e), t.head.appendChild(e));
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
            return e.instance = r, ee(r), r;
          var u = b({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return r = (t.ownerDocument || t).createElement(
            "style"
          ), ee(r), ue(r, "style", u), pl(r, a.precedence, t), e.instance = r;
        case "stylesheet":
          u = Sa(a.href);
          var c = t.querySelector(
            Os(u)
          );
          if (c)
            return e.state.loading |= 4, e.instance = c, ee(c), c;
          r = Wp(a), (u = Ge.get(u)) && yc(r, u), c = (t.ownerDocument || t).createElement("link"), ee(c);
          var y = c;
          return y._p = new Promise(function(v, S) {
            y.onload = v, y.onerror = S;
          }), ue(c, "link", r), e.state.loading |= 4, pl(c, a.precedence, t), e.instance = c;
        case "script":
          return c = Ta(a.src), (u = t.querySelector(
            Cs(c)
          )) ? (e.instance = u, ee(u), u) : (r = a, (u = Ge.get(c)) && (r = b({}, a), gc(r, u)), t = t.ownerDocument || t, u = t.createElement("script"), ee(u), ue(u, "link", r), t.head.appendChild(u), e.instance = u);
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
      if (!(c[Pa] || c[fe] || t === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
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
  function Yx(t, e, a) {
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
  var Ds = null;
  function Gx() {
  }
  function Xx(t, e, a) {
    if (Ds === null) throw Error(o(475));
    var r = Ds;
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var u = Sa(a.href), c = t.querySelector(
          Os(u)
        );
        if (c) {
          t = c._p, t !== null && typeof t == "object" && typeof t.then == "function" && (r.count++, r = gl.bind(r), t.then(r, r)), e.state.loading |= 4, e.instance = c, ee(c);
          return;
        }
        c = t.ownerDocument || t, a = Wp(a), (u = Ge.get(u)) && yc(a, u), c = c.createElement("link"), ee(c);
        var y = c;
        y._p = new Promise(function(v, S) {
          y.onload = v, y.onerror = S;
        }), ue(c, "link", a), e.instance = c;
      }
      r.stylesheets === null && (r.stylesheets = /* @__PURE__ */ new Map()), r.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (r.count++, e = gl.bind(r), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  function Kx() {
    if (Ds === null) throw Error(o(475));
    var t = Ds;
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
    t.stylesheets = null, t.unsuspend !== null && (t.count++, vl = /* @__PURE__ */ new Map(), e.forEach(Qx, t), vl = null, gl.call(t));
  }
  function Qx(t, e) {
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
  var Ns = {
    $$typeof: J,
    Provider: null,
    Consumer: null,
    _currentValue: ct,
    _currentValue2: ct,
    _threadCount: 0
  };
  function Zx(t, e, a, r, u, c, y, v) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ho(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ho(0), this.hiddenUpdates = ho(null), this.identifierPrefix = r, this.onUncaughtError = u, this.onCaughtError = c, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ey(t, e, a, r, u, c, y, v, S, D, L, P) {
    return t = new Zx(
      t,
      e,
      a,
      y,
      v,
      S,
      D,
      P
    ), e = 1, c === !0 && (e |= 24), c = De(3, null, null, e), t.current = c, c.stateNode = t, e = Io(), e.refCount++, t.pooledCache = e, e.refCount++, c.memoizedState = {
      element: r,
      isDehydrated: a,
      cache: e
    }, iu(c), t;
  }
  function ny(t) {
    return t ? (t = Ii, t) : Ii;
  }
  function iy(t, e, a, r, u, c) {
    u = ny(u), r.context === null ? r.context = u : r.pendingContext = u, r = Un(e), r.payload = { element: a }, c = c === void 0 ? null : c, c !== null && (r.callback = c), a = Bn(t, r, e), a !== null && (Ve(a, t, e), ls(a, t, e));
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
      e !== null && Ve(e, t, 67108864), bc(t, 67108864);
    }
  }
  var bl = !0;
  function Fx(t, e, a, r) {
    var u = B.T;
    B.T = null;
    var c = z.p;
    try {
      z.p = 2, xc(t, e, a, r);
    } finally {
      z.p = c, B.T = u;
    }
  }
  function Wx(t, e, a, r) {
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
      else if ($x(
        u,
        t,
        e,
        a,
        r
      ))
        r.stopPropagation();
      else if (ly(t, r), e & 4 && -1 < Jx.indexOf(t)) {
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
                    ln(c), (Rt & 6) === 0 && (il = en() + 500, As(0));
                  }
                }
                break;
              case 13:
                v = $i(c, 2), v !== null && Ve(v, c, 2), sl(), bc(c, 2);
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
        switch (Ub()) {
          case xm:
            return 2;
          case Sm:
            return 8;
          case mr:
          case Bb:
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
  var wc = !1, Wn = null, Jn = null, $n = null, js = /* @__PURE__ */ new Map(), _s = /* @__PURE__ */ new Map(), In = [], Jx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
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
        js.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _s.delete(e.pointerId);
    }
  }
  function zs(t, e, a, r, u, c) {
    return t === null || t.nativeEvent !== c ? (t = {
      blockedOn: e,
      domEventName: a,
      eventSystemFlags: r,
      nativeEvent: c,
      targetContainers: [u]
    }, e !== null && (e = Hi(e), e !== null && sy(e)), t) : (t.eventSystemFlags |= r, e = t.targetContainers, u !== null && e.indexOf(u) === -1 && e.push(u), t);
  }
  function $x(t, e, a, r, u) {
    switch (e) {
      case "focusin":
        return Wn = zs(
          Wn,
          t,
          e,
          a,
          r,
          u
        ), !0;
      case "dragenter":
        return Jn = zs(
          Jn,
          t,
          e,
          a,
          r,
          u
        ), !0;
      case "mouseover":
        return $n = zs(
          $n,
          t,
          e,
          a,
          r,
          u
        ), !0;
      case "pointerover":
        var c = u.pointerId;
        return js.set(
          c,
          zs(
            js.get(c) || null,
            t,
            e,
            a,
            r,
            u
          )
        ), !0;
      case "gotpointercapture":
        return c = u.pointerId, _s.set(
          c,
          zs(
            _s.get(c) || null,
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
            t.blockedOn = e, Xb(t.priority, function() {
              if (a.tag === 13) {
                var r = ze();
                r = po(r);
                var u = $i(a, r);
                u !== null && Ve(u, a, r), bc(a, r);
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
  function Ix() {
    wc = !1, Wn !== null && Sl(Wn) && (Wn = null), Jn !== null && Sl(Jn) && (Jn = null), $n !== null && Sl($n) && ($n = null), js.forEach(uy), _s.forEach(uy);
  }
  function Tl(t, e) {
    t.blockedOn === e && (t.blockedOn = null, wc || (wc = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      Ix
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
    Wn !== null && Tl(Wn, t), Jn !== null && Tl(Jn, t), $n !== null && Tl($n, t), js.forEach(e), _s.forEach(e);
    for (var a = 0; a < In.length; a++) {
      var r = In[a];
      r.blockedOn === t && (r.blockedOn = null);
    }
    for (; 0 < In.length && (a = In[0], a.blockedOn === null); )
      oy(a), a.blockedOn === null && In.shift();
    if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
      for (r = 0; r < a.length; r += 3) {
        var u = a[r], c = a[r + 1], y = u[be] || null;
        if (typeof c == "function")
          y || cy(a);
        else if (y) {
          var v = null;
          if (c && c.hasAttribute("formAction")) {
            if (u = c, y = c[be] || null)
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
  var tS = {
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
        ka = El.inject(
          tS
        ), Re = El;
      } catch {
      }
  }
  return Bs.createRoot = function(t, e) {
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
    ), t[Li] = e.current, rc(t), new Ac(e);
  }, Bs.hydrateRoot = function(t, e, a) {
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
    ), e.context = ny(null), a = e.current, r = ze(), r = po(r), u = Un(r), u.callback = null, Bn(a, u, r), a = r, e.current.lanes = a, qa(e, a), ln(e), t[Li] = e.current, rc(t), new Al(e);
  }, Bs.version = "19.1.0", Bs;
}
var Sy;
function cS() {
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
  return n(), Mc.exports = uS(), Mc.exports;
}
var fS = cS();
const mS = /* @__PURE__ */ c0(fS);
var X = jf();
const $e = /* @__PURE__ */ c0(X), Ty = (n) => {
  let i;
  const s = /* @__PURE__ */ new Set(), l = (h, g) => {
    const b = typeof h == "function" ? h(i) : h;
    if (!Object.is(b, i)) {
      const x = i;
      i = g ?? (typeof b != "object" || b === null) ? b : Object.assign({}, i, b), s.forEach((C) => C(i, x));
    }
  }, o = () => i, d = { setState: l, getState: o, getInitialState: () => p, subscribe: (h) => (s.add(h), () => s.delete(h)) }, p = i = n(l, o, d);
  return d;
}, dS = (n) => n ? Ty(n) : Ty, hS = (n) => n;
function pS(n, i = hS) {
  const s = $e.useSyncExternalStore(
    n.subscribe,
    () => i(n.getState()),
    () => i(n.getInitialState())
  );
  return $e.useDebugValue(s), s;
}
const yS = (n) => {
  const i = dS(n), s = (l) => pS(i, l);
  return Object.assign(s, i), s;
}, _f = (n) => yS;
function gS(n, i) {
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
}, vS = (n, i) => (s, l, o) => {
  let m = {
    storage: gS(() => localStorage),
    partialize: (R) => R,
    version: 0,
    merge: (R, j) => ({
      ...j,
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
  o.setState = (R, j) => {
    b(R, j), g();
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
    var R, j;
    if (!h) return;
    f = !1, d.forEach((k) => {
      var q;
      return k((q = l()) != null ? q : x);
    });
    const U = ((j = m.onRehydrateStorage) == null ? void 0 : j.call(m, (R = l()) != null ? R : x)) || void 0;
    return Ic(h.getItem.bind(h))(m.name).then((k) => {
      if (k)
        if (typeof k.version == "number" && k.version !== m.version) {
          if (m.migrate) {
            const q = m.migrate(
              k.state,
              k.version
            );
            return q instanceof Promise ? q.then((J) => [!0, J]) : [!0, q];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, k.state];
      return [!1, void 0];
    }).then((k) => {
      var q;
      const [J, Q] = k;
      if (C = m.merge(
        Q,
        (q = l()) != null ? q : x
      ), s(C, !0), J)
        return g();
    }).then(() => {
      U?.(C, void 0), C = l(), f = !0, p.forEach((k) => k(C));
    }).catch((k) => {
      U?.(void 0, k);
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
}, zf = vS, sr = _f()(
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
const bS = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), xS = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (i, s, l) => l ? l.toUpperCase() : s.toLowerCase()
), wy = (n) => {
  const i = xS(n);
  return i.charAt(0).toUpperCase() + i.slice(1);
}, m0 = (...n) => n.filter((i, s, l) => !!i && i.trim() !== "" && l.indexOf(i) === s).join(" ").trim(), SS = (n) => {
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
var TS = {
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
const wS = X.forwardRef(
  ({
    color: n = "currentColor",
    size: i = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: l,
    className: o = "",
    children: m,
    iconNode: f,
    ...d
  }, p) => X.createElement(
    "svg",
    {
      ref: p,
      ...TS,
      width: i,
      height: i,
      stroke: n,
      strokeWidth: l ? Number(s) * 24 / Number(i) : s,
      className: m0("lucide", o),
      ...!m && !SS(d) && { "aria-hidden": "true" },
      ...d
    },
    [
      ...f.map(([h, g]) => X.createElement(h, g)),
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
  const s = X.forwardRef(
    ({ className: l, ...o }, m) => X.createElement(wS, {
      ref: m,
      iconNode: i,
      className: m0(
        `lucide-${bS(wy(n))}`,
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
const AS = [
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
], tf = Jl("eye-off", AS);
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
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ef = Jl("eye", ES);
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
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], d0 = Jl("triangle-alert", MS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RS = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], OS = Jl("x", RS), CS = ({ onClickCreateAccount: n }) => {
  const [i, s] = X.useState({
    email: "",
    password: "",
    rememberMe: !1
  }), [l, o] = X.useState(null), [m, f] = X.useState(!1), d = (p) => {
    s({ ...i, [p.target.name]: p.target.value });
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "mimin-mt-10", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "mimin-space-y-2", children: [
      /* @__PURE__ */ A.jsx("h2", { className: "mimin-text-base mimin-font-bold", children: "Sign In" }),
      /* @__PURE__ */ A.jsx("p", { className: "mimin-text-sm mimin-text-gray-500", children: "Fill your information below to sign in to your account" })
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
}, DS = ({ onClickSignin: n }) => {
  const [i, s] = X.useState({
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: !1
  }), [l, o] = X.useState(!1), [m, f] = X.useState(!1), [d, p] = X.useState(null), h = (g) => {
    s({ ...i, [g.target.name]: g.target.value });
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "mimin-mt-10", children: [
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
        /* @__PURE__ */ A.jsx("label", { htmlFor: "password", className: "mimin-text-sm mimin-font-medium", children: "Password" }),
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
  ] });
}, NS = () => {
  const [n, i] = X.useState("landing-section");
  return /* @__PURE__ */ A.jsxs("div", { className: "p-4 h-full overflow-y-auto", children: [
    /* @__PURE__ */ A.jsx("div", { className: "flex justify-center items-center w-full h-auto", children: /* @__PURE__ */ A.jsx(
      "img",
      {
        src: "https://res.cloudinary.com/dctqloe37/image/upload/v1752455653/undraw_chat_qmyo_1_wwzcjj.svg",
        alt: " ",
        width: 1e3,
        height: 1e3,
        loading: "lazy",
        className: "w-full h-auto object-contain object-center"
      }
    ) }),
    n === "landing-section" && /* @__PURE__ */ A.jsxs("div", { className: "text-center mt-10", children: [
      /* @__PURE__ */ A.jsx("h1", { className: "text-[#0096A2] text-base font-bold", children: "Explore the MIMIN AI Agent" }),
      /* @__PURE__ */ A.jsx("p", { className: "text-gray-500 text-sm", children: "Sign in and start chatting with your smart AI assistant ready to help anytime, day or night!" }),
      /* @__PURE__ */ A.jsxs("div", { className: "flex flex-col gap-3 mt-6", children: [
        /* @__PURE__ */ A.jsx(
          "button",
          {
            className: "bg-[#0096A2] w-full border border-[#0096A2] text-white px-4 py-2 rounded-md cursor-pointer",
            onClick: () => i("sign-in"),
            children: "Sign In"
          }
        ),
        /* @__PURE__ */ A.jsx(
          "button",
          {
            className: "bg-white w-full border border-[#0096A2] text-[#0096A2] px-4 py-2 rounded-md cursor-pointer hover:bg-[#0096A2] hover:text-white transition-all duration-300",
            onClick: () => i("create-account"),
            children: "Create Account"
          }
        )
      ] })
    ] }),
    n === "sign-in" && /* @__PURE__ */ A.jsx(CS, { onClickCreateAccount: () => i("create-account") }),
    n === "create-account" && /* @__PURE__ */ A.jsx(DS, { onClickSignin: () => i("sign-in") })
  ] });
};
var h0 = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ay = $e.createContext && /* @__PURE__ */ $e.createContext(h0), jS = ["attr", "size", "title"];
function _S(n, i) {
  if (n == null) return {};
  var s = zS(n, i), l, o;
  if (Object.getOwnPropertySymbols) {
    var m = Object.getOwnPropertySymbols(n);
    for (o = 0; o < m.length; o++)
      l = m[o], !(i.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(n, l) && (s[l] = n[l]);
  }
  return s;
}
function zS(n, i) {
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
  return i = US(i), i in n ? Object.defineProperty(n, i, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : n[i] = s, n;
}
function US(n) {
  var i = BS(n, "string");
  return typeof i == "symbol" ? i : i + "";
}
function BS(n, i) {
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
function Vf(n) {
  return (i) => /* @__PURE__ */ $e.createElement(LS, ql({
    attr: Pl({}, n.attr)
  }, i), p0(n.child));
}
function LS(n) {
  var i = (s) => {
    var {
      attr: l,
      size: o,
      title: m
    } = n, f = _S(n, jS), d = o || s.size || "1em", p;
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
function kS(n) {
  return Vf({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M6.758 8.758 5.344 7.344a8.048 8.048 0 0 0-1.841 2.859l1.873.701a6.048 6.048 0 0 1 1.382-2.146zM19 12.999a7.935 7.935 0 0 0-2.344-5.655A7.917 7.917 0 0 0 12 5.069V2L7 6l5 4V7.089a5.944 5.944 0 0 1 3.242 1.669A5.956 5.956 0 0 1 17 13v.002c0 .33-.033.655-.086.977-.007.043-.011.088-.019.131a6.053 6.053 0 0 1-1.138 2.536c-.16.209-.331.412-.516.597a5.954 5.954 0 0 1-.728.613 5.906 5.906 0 0 1-2.277 1.015c-.142.03-.285.05-.43.069-.062.009-.122.021-.184.027a6.104 6.104 0 0 1-1.898-.103L9.3 20.819a8.087 8.087 0 0 0 2.534.136c.069-.007.138-.021.207-.03.205-.026.409-.056.61-.098l.053-.009-.001-.005a7.877 7.877 0 0 0 2.136-.795l.001.001.028-.019a7.906 7.906 0 0 0 1.01-.67c.27-.209.532-.43.777-.675.248-.247.47-.513.681-.785.021-.028.049-.053.07-.081l-.006-.004a7.899 7.899 0 0 0 1.093-1.997l.008.003c.029-.078.05-.158.076-.237.037-.11.075-.221.107-.333.04-.14.073-.281.105-.423.022-.099.048-.195.066-.295.032-.171.056-.344.076-.516.01-.076.023-.15.03-.227.023-.249.037-.5.037-.753.002-.002.002-.004.002-.008zM6.197 16.597l-1.6 1.201a8.045 8.045 0 0 0 2.569 2.225l.961-1.754a6.018 6.018 0 0 1-1.93-1.672zM5 13c0-.145.005-.287.015-.429l-1.994-.143a7.977 7.977 0 0 0 .483 3.372l1.873-.701A5.975 5.975 0 0 1 5 13z" }, child: [] }] })(n);
}
function y0(n) {
  return Vf({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" }, child: [] }] })(n);
}
const HS = ({
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
                kS,
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
                OS,
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
function qS() {
  for (var n, i, s = 0, l = "", o = arguments.length; s < o; s++) (n = arguments[s]) && (i = g0(n)) && (l && (l += " "), l += i);
  return l;
}
const Uf = "-", PS = (n) => {
  const i = GS(n), {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: l
  } = n;
  return {
    getClassGroupId: (f) => {
      const d = f.split(Uf);
      return d[0] === "" && d.length !== 1 && d.shift(), v0(d, i) || YS(f);
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
  const m = n.join(Uf);
  return i.validators.find(({
    validator: f
  }) => f(m))?.classGroupId;
}, My = /^\[(.+)\]$/, YS = (n) => {
  if (My.test(n)) {
    const i = My.exec(n)[1], s = i?.substring(0, i.indexOf(":"));
    if (s)
      return "arbitrary.." + s;
  }
}, GS = (n) => {
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
      if (XS(o)) {
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
  return i.split(Uf).forEach((l) => {
    s.nextPart.has(l) || s.nextPart.set(l, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), s = s.nextPart.get(l);
  }), s;
}, XS = (n) => n.isThemeGetter, KS = (n) => {
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
}, af = "!", sf = ":", QS = sf.length, ZS = (n) => {
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
          m.push(o.slice(p, E)), p = E + QS;
          continue;
        }
        if (R === "/") {
          h = E;
          continue;
        }
      }
      R === "[" ? f++ : R === "]" ? f-- : R === "(" ? d++ : R === ")" && d--;
    }
    const g = m.length === 0 ? o : o.substring(p), b = FS(g), x = b !== g, C = h && h > p ? h - p : void 0;
    return {
      modifiers: m,
      hasImportantModifier: x,
      baseClassName: b,
      maybePostfixModifierPosition: C
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
}, FS = (n) => n.endsWith(af) ? n.substring(0, n.length - 1) : n.startsWith(af) ? n.substring(1) : n, WS = (n) => {
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
}, JS = (n) => ({
  cache: KS(n.cacheSize),
  parseClassName: ZS(n),
  sortModifiers: WS(n),
  ...PS(n)
}), $S = /\s+/, IS = (n, i) => {
  const {
    parseClassName: s,
    getClassGroupId: l,
    getConflictingClassGroupIds: o,
    sortModifiers: m
  } = i, f = [], d = n.trim().split($S);
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
    let j = !!R, U = l(j ? E.substring(0, R) : E);
    if (!U) {
      if (!j) {
        p = g + (p.length > 0 ? " " + p : p);
        continue;
      }
      if (U = l(E), !U) {
        p = g + (p.length > 0 ? " " + p : p);
        continue;
      }
      j = !1;
    }
    const k = m(x).join(":"), q = C ? k + af : k, J = q + U;
    if (f.includes(J))
      continue;
    f.push(J);
    const Q = o(U, j);
    for (let G = 0; G < Q.length; ++G) {
      const $ = Q[G];
      f.push(q + $);
    }
    p = g + (p.length > 0 ? " " + p : p);
  }
  return p;
};
function tT() {
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
function eT(n, ...i) {
  let s, l, o, m = f;
  function f(p) {
    const h = i.reduce((g, b) => b(g), n());
    return s = JS(h), l = s.cache.get, o = s.cache.set, m = d, d(p);
  }
  function d(p) {
    const h = l(p);
    if (h)
      return h;
    const g = IS(p, s);
    return o(p, g), g;
  }
  return function() {
    return m(tT.apply(null, arguments));
  };
}
const te = (n) => {
  const i = (s) => s[n] || [];
  return i.isThemeGetter = !0, i;
}, x0 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, S0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i, nT = /^\d+\/\d+$/, iT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, aT = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, sT = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, rT = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, lT = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, wa = (n) => nT.test(n), pt = (n) => !!n && !Number.isNaN(Number(n)), ei = (n) => !!n && Number.isInteger(Number(n)), Nc = (n) => n.endsWith("%") && pt(n.slice(0, -1)), On = (n) => iT.test(n), oT = () => !0, uT = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  aT.test(n) && !sT.test(n)
), T0 = () => !1, cT = (n) => rT.test(n), fT = (n) => lT.test(n), mT = (n) => !et(n) && !nt(n), dT = (n) => ja(n, E0, T0), et = (n) => x0.test(n), Ri = (n) => ja(n, M0, uT), jc = (n) => ja(n, vT, pt), Oy = (n) => ja(n, w0, T0), hT = (n) => ja(n, A0, fT), Ml = (n) => ja(n, R0, cT), nt = (n) => S0.test(n), Ls = (n) => _a(n, M0), pT = (n) => _a(n, bT), Cy = (n) => _a(n, w0), yT = (n) => _a(n, E0), gT = (n) => _a(n, A0), Rl = (n) => _a(n, R0, !0), ja = (n, i, s) => {
  const l = x0.exec(n);
  return l ? l[1] ? i(l[1]) : s(l[2]) : !1;
}, _a = (n, i, s = !1) => {
  const l = S0.exec(n);
  return l ? l[1] ? i(l[1]) : s : !1;
}, w0 = (n) => n === "position" || n === "percentage", A0 = (n) => n === "image" || n === "url", E0 = (n) => n === "length" || n === "size" || n === "bg-size", M0 = (n) => n === "length", vT = (n) => n === "number", bT = (n) => n === "family-name", R0 = (n) => n === "shadow", xT = () => {
  const n = te("color"), i = te("font"), s = te("text"), l = te("font-weight"), o = te("tracking"), m = te("leading"), f = te("breakpoint"), d = te("container"), p = te("spacing"), h = te("radius"), g = te("shadow"), b = te("inset-shadow"), x = te("text-shadow"), C = te("drop-shadow"), E = te("blur"), R = te("perspective"), j = te("aspect"), U = te("ease"), k = te("animate"), q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], J = () => [
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
  ], Q = () => [...J(), nt, et], G = () => ["auto", "hidden", "clip", "visible", "scroll"], $ = () => ["auto", "contain", "none"], Y = () => [nt, et, p], lt = () => [wa, "full", "auto", ...Y()], St = () => [ei, "none", "subgrid", nt, et], _t = () => ["auto", {
    span: ["full", ei, nt, et]
  }, ei, nt, et], Ut = () => [ei, "auto", nt, et], At = () => ["auto", "min", "max", "fr", nt, et], qt = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Mt = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], Z = () => ["auto", ...Y()], B = () => [wa, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...Y()], z = () => [n, nt, et], ct = () => [...J(), Cy, Oy, {
    position: [nt, et]
  }], bt = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], w = () => ["auto", "cover", "contain", yT, dT, {
    size: [nt, et]
  }], K = () => [Nc, Ls, Ri], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    h,
    nt,
    et
  ], F = () => ["", pt, Ls, Ri], at = () => ["solid", "dashed", "dotted", "double"], Tt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], I = () => [pt, Nc, Cy, Oy], se = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    E,
    nt,
    et
  ], mt = () => ["none", pt, nt, et], re = () => ["none", pt, nt, et], oi = () => [pt, nt, et], mn = () => [wa, "full", ...Y()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [On],
      breakpoint: [On],
      color: [oT],
      container: [On],
      "drop-shadow": [On],
      ease: ["in", "out", "in-out"],
      font: [mT],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [On],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [On],
      shadow: [On],
      spacing: ["px", pt],
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
        aspect: ["auto", "square", wa, et, nt, j]
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
        columns: [pt, et, nt, d]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": q()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": q()
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
        object: Q()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: G()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": G()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": G()
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
        inset: lt()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": lt()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": lt()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: lt()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: lt()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: lt()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: lt()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: lt()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: lt()
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
        basis: [wa, "full", "auto", d, ...Y()]
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
        flex: [pt, wa, "auto", "initial", "none", et]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", pt, nt, et]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", pt, nt, et]
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
        "grid-cols": St()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: _t()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Ut()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Ut()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": St()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: _t()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Ut()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Ut()
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
        "auto-cols": At()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": At()
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
        justify: [...qt(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...Mt(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...Mt()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...qt()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...Mt(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...Mt(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": qt()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...Mt(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...Mt()]
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
        m: Z()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: Z()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: Z()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: Z()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: Z()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: Z()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: Z()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: Z()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: Z()
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
        text: ["base", s, Ls, Ri]
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
        font: [pT, et, i]
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
        "line-clamp": [pt, "none", nt, jc]
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
        decoration: [pt, "from-font", "auto", nt, Ri]
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
        "underline-offset": [pt, "auto", nt, et]
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
        bg: ct()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: bt()
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
        }, gT, hT]
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
        rounded: W()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": W()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": W()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": W()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": W()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": W()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": W()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": W()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": W()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": W()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": W()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": W()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": W()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": W()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": W()
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
        "outline-offset": [pt, nt, et]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", pt, Ls, Ri]
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
        "ring-offset": [pt, Ri]
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
        opacity: [pt, nt, et]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Tt(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Tt()
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
        "mask-linear": [pt]
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
        "mask-radial-at": J()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [pt]
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
        mask: ct()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: bt()
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
        blur: se()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [pt, nt, et]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [pt, nt, et]
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
        grayscale: ["", pt, nt, et]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [pt, nt, et]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", pt, nt, et]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [pt, nt, et]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", pt, nt, et]
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
        "backdrop-blur": se()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [pt, nt, et]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [pt, nt, et]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", pt, nt, et]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [pt, nt, et]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", pt, nt, et]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [pt, nt, et]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [pt, nt, et]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", pt, nt, et]
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
        duration: [pt, "initial", nt, et]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", U, nt, et]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [pt, nt, et]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", k, nt, et]
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
        "perspective-origin": Q()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: mt()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": mt()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": mt()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": mt()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: re()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": re()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": re()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": re()
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
        origin: Q()
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
        stroke: [pt, Ls, Ri, jc]
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
}, ST = /* @__PURE__ */ eT(xT);
function Ol(...n) {
  return ST(qS(n));
}
const TT = (n) => {
  if (!isFinite(n) || isNaN(n)) return "00:00:00";
  n < 0 && (n = 0);
  const i = Math.floor(n / 3600), s = Math.floor(n % 3600 / 60), l = n % 60;
  return [i, s, Math.floor(l)].map((o) => String(o).padStart(2, "0")).join(":");
}, O0 = 6048e5, wT = 864e5, Dy = Symbol.for("constructDateFrom");
function ai(n, i) {
  return typeof n == "function" ? n(i) : n && typeof n == "object" && Dy in n ? n[Dy](i) : n instanceof Date ? new n.constructor(i) : new Date(i);
}
function Ie(n, i) {
  return ai(i || n, n);
}
let AT = {};
function $l() {
  return AT;
}
function Fs(n, i) {
  const s = $l(), l = i?.weekStartsOn ?? i?.locale?.options?.weekStartsOn ?? s.weekStartsOn ?? s.locale?.options?.weekStartsOn ?? 0, o = Ie(n, i?.in), m = o.getDay(), f = (m < l ? 7 : 0) + m - l;
  return o.setDate(o.getDate() - f), o.setHours(0, 0, 0, 0), o;
}
function Yl(n, i) {
  return Fs(n, { ...i, weekStartsOn: 1 });
}
function C0(n, i) {
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
function ET(n, ...i) {
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
function MT(n, i, s) {
  const [l, o] = ET(
    s?.in,
    n,
    i
  ), m = jy(l), f = jy(o), d = +m - Ny(m), p = +f - Ny(f);
  return Math.round((d - p) / wT);
}
function RT(n, i) {
  const s = C0(n, i), l = ai(n, 0);
  return l.setFullYear(s, 0, 4), l.setHours(0, 0, 0, 0), Yl(l);
}
function OT(n) {
  return n instanceof Date || typeof n == "object" && Object.prototype.toString.call(n) === "[object Date]";
}
function CT(n) {
  return !(!OT(n) && typeof n != "number" || isNaN(+Ie(n)));
}
function DT(n, i) {
  const s = Ie(n, i?.in);
  return s.setFullYear(s.getFullYear(), 0, 1), s.setHours(0, 0, 0, 0), s;
}
const NT = {
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
}, jT = (n, i, s) => {
  let l;
  const o = NT[n];
  return typeof o == "string" ? l = o : i === 1 ? l = o.one : l = o.other.replace("{{count}}", i.toString()), s?.addSuffix ? s.comparison && s.comparison > 0 ? "in " + l : l + " ago" : l;
};
function _c(n) {
  return (i = {}) => {
    const s = i.width ? String(i.width) : n.defaultWidth;
    return n.formats[s] || n.formats[n.defaultWidth];
  };
}
const _T = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, zT = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, VT = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, UT = {
  date: _c({
    formats: _T,
    defaultWidth: "full"
  }),
  time: _c({
    formats: zT,
    defaultWidth: "full"
  }),
  dateTime: _c({
    formats: VT,
    defaultWidth: "full"
  })
}, BT = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, LT = (n, i, s, l) => BT[n];
function ks(n) {
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
const kT = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, HT = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, qT = {
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
}, PT = {
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
}, YT = {
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
}, GT = {
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
}, XT = (n, i) => {
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
}, KT = {
  ordinalNumber: XT,
  era: ks({
    values: kT,
    defaultWidth: "wide"
  }),
  quarter: ks({
    values: HT,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: ks({
    values: qT,
    defaultWidth: "wide"
  }),
  day: ks({
    values: PT,
    defaultWidth: "wide"
  }),
  dayPeriod: ks({
    values: YT,
    defaultWidth: "wide",
    formattingValues: GT,
    defaultFormattingWidth: "wide"
  })
};
function Hs(n) {
  return (i, s = {}) => {
    const l = s.width, o = l && n.matchPatterns[l] || n.matchPatterns[n.defaultMatchWidth], m = i.match(o);
    if (!m)
      return null;
    const f = m[0], d = l && n.parsePatterns[l] || n.parsePatterns[n.defaultParseWidth], p = Array.isArray(d) ? ZT(d, (b) => b.test(f)) : (
      // [TODO] -- I challenge you to fix the type
      QT(d, (b) => b.test(f))
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
function QT(n, i) {
  for (const s in n)
    if (Object.prototype.hasOwnProperty.call(n, s) && i(n[s]))
      return s;
}
function ZT(n, i) {
  for (let s = 0; s < n.length; s++)
    if (i(n[s]))
      return s;
}
function FT(n) {
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
const WT = /^(\d+)(th|st|nd|rd)?/i, JT = /\d+/i, $T = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, IT = {
  any: [/^b/i, /^(a|c)/i]
}, tw = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ew = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, nw = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, iw = {
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
}, aw = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, sw = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, rw = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, lw = {
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
}, ow = {
  ordinalNumber: FT({
    matchPattern: WT,
    parsePattern: JT,
    valueCallback: (n) => parseInt(n, 10)
  }),
  era: Hs({
    matchPatterns: $T,
    defaultMatchWidth: "wide",
    parsePatterns: IT,
    defaultParseWidth: "any"
  }),
  quarter: Hs({
    matchPatterns: tw,
    defaultMatchWidth: "wide",
    parsePatterns: ew,
    defaultParseWidth: "any",
    valueCallback: (n) => n + 1
  }),
  month: Hs({
    matchPatterns: nw,
    defaultMatchWidth: "wide",
    parsePatterns: iw,
    defaultParseWidth: "any"
  }),
  day: Hs({
    matchPatterns: aw,
    defaultMatchWidth: "wide",
    parsePatterns: sw,
    defaultParseWidth: "any"
  }),
  dayPeriod: Hs({
    matchPatterns: rw,
    defaultMatchWidth: "any",
    parsePatterns: lw,
    defaultParseWidth: "any"
  })
}, uw = {
  code: "en-US",
  formatDistance: jT,
  formatLong: UT,
  formatRelative: LT,
  localize: KT,
  match: ow,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function cw(n, i) {
  const s = Ie(n, i?.in);
  return MT(s, DT(s)) + 1;
}
function fw(n, i) {
  const s = Ie(n, i?.in), l = +Yl(s) - +RT(s);
  return Math.round(l / O0) + 1;
}
function D0(n, i) {
  const s = Ie(n, i?.in), l = s.getFullYear(), o = $l(), m = i?.firstWeekContainsDate ?? i?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, f = ai(i?.in || n, 0);
  f.setFullYear(l + 1, 0, m), f.setHours(0, 0, 0, 0);
  const d = Fs(f, i), p = ai(i?.in || n, 0);
  p.setFullYear(l, 0, m), p.setHours(0, 0, 0, 0);
  const h = Fs(p, i);
  return +s >= +d ? l + 1 : +s >= +h ? l : l - 1;
}
function mw(n, i) {
  const s = $l(), l = i?.firstWeekContainsDate ?? i?.locale?.options?.firstWeekContainsDate ?? s.firstWeekContainsDate ?? s.locale?.options?.firstWeekContainsDate ?? 1, o = D0(n, i), m = ai(i?.in || n, 0);
  return m.setFullYear(o, 0, l), m.setHours(0, 0, 0, 0), Fs(m, i);
}
function dw(n, i) {
  const s = Ie(n, i?.in), l = +Fs(s, i) - +mw(s, i);
  return Math.round(l / O0) + 1;
}
function Ct(n, i) {
  const s = n < 0 ? "-" : "", l = Math.abs(n).toString().padStart(i, "0");
  return s + l;
}
const ni = {
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
    const o = dw(n, l);
    return i === "wo" ? s.ordinalNumber(o, { unit: "week" }) : Ct(o, i.length);
  },
  // ISO week of year
  I: function(n, i, s) {
    const l = fw(n);
    return i === "Io" ? s.ordinalNumber(l, { unit: "week" }) : Ct(l, i.length);
  },
  // Day of the month
  d: function(n, i, s) {
    return i === "do" ? s.ordinalNumber(n.getDate(), { unit: "date" }) : ni.d(n, i);
  },
  // Day of year
  D: function(n, i, s) {
    const l = cw(n);
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
    return i === "Ko" ? s.ordinalNumber(l, { unit: "hour" }) : Ct(l, i.length);
  },
  // Hour [1-24]
  k: function(n, i, s) {
    let l = n.getHours();
    return l === 0 && (l = 24), i === "ko" ? s.ordinalNumber(l, { unit: "hour" }) : Ct(l, i.length);
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
        return Vy(l);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Ci(l);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Ci(l, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(n, i, s) {
    const l = n.getTimezoneOffset();
    switch (i) {
      // Hours and optional minutes
      case "x":
        return Vy(l);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Ci(l);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Ci(l, ":");
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
        return "GMT" + Ci(l, ":");
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
        return "GMT" + Ci(l, ":");
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
function Vy(n, i) {
  return n % 60 === 0 ? (n > 0 ? "-" : "+") + Ct(Math.abs(n) / 60, 2) : Ci(n, i);
}
function Ci(n, i = "") {
  const s = n > 0 ? "-" : "+", l = Math.abs(n), o = Ct(Math.trunc(l / 60), 2), m = Ct(l % 60, 2);
  return s + o + i + m;
}
const Uy = (n, i) => {
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
}, hw = (n, i) => {
  const s = n.match(/(P+)(p+)?/) || [], l = s[1], o = s[2];
  if (!o)
    return Uy(n, i);
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
  return m.replace("{{date}}", Uy(l, i)).replace("{{time}}", N0(o, i));
}, pw = {
  p: N0,
  P: hw
}, yw = /^D+$/, gw = /^Y+$/, vw = ["D", "DD", "YY", "YYYY"];
function bw(n) {
  return yw.test(n);
}
function xw(n) {
  return gw.test(n);
}
function Sw(n, i, s) {
  const l = Tw(n, i, s);
  if (console.warn(l), vw.includes(n)) throw new RangeError(l);
}
function Tw(n, i, s) {
  const l = n[0] === "Y" ? "years" : "days of the month";
  return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${i}\`) for formatting ${l} to the input \`${s}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const ww = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Aw = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Ew = /^'([^]*?)'?$/, Mw = /''/g, Rw = /[a-zA-Z]/;
function Ow(n, i, s) {
  const l = $l(), o = l.locale ?? uw, m = l.firstWeekContainsDate ?? l.locale?.options?.firstWeekContainsDate ?? 1, f = l.weekStartsOn ?? l.locale?.options?.weekStartsOn ?? 0, d = Ie(n, s?.in);
  if (!CT(d))
    throw new RangeError("Invalid time value");
  let p = i.match(Aw).map((g) => {
    const b = g[0];
    if (b === "p" || b === "P") {
      const x = pw[b];
      return x(g, o.formatLong);
    }
    return g;
  }).join("").match(ww).map((g) => {
    if (g === "''")
      return { isToken: !1, value: "'" };
    const b = g[0];
    if (b === "'")
      return { isToken: !1, value: Cw(g) };
    if (_y[b])
      return { isToken: !0, value: g };
    if (b.match(Rw))
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
    (xw(b) || bw(b)) && Sw(b, i, String(n));
    const x = _y[b[0]];
    return x(d, b, o.localize, h);
  }).join("");
}
function Cw(n) {
  const i = n.match(Ew);
  return i ? i[1].replace(Mw, "'") : n;
}
const Cl = ({ message: n, isUser: i = !1, thinking: s = !1, date: l }) => {
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
            children: /* @__PURE__ */ A.jsx("p", { className: "mimin-text-[10px] mimin-font-light mimin-text-gray-500 mimin-w-max", children: Ow(new Date(l), "dd MMMM yyyy, HH:mm") })
          }
        )
      ]
    }
  ) : (console.error("message is null!"), null);
}, Dw = ({ messages: n, currentResponseMsg: i, loading: s, fetching: l }) => {
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
              Cl,
              {
                message: m.human.content,
                isUser: !0,
                date: m.date
              }
            ),
            m.ai && m.ai.content && /* @__PURE__ */ A.jsx(
              Cl,
              {
                message: m.ai.content,
                isUser: !1,
                date: m.date
              }
            )
          ] }, f)) }),
          !l && i && n.length > 0 && !n[0]?.ai && /* @__PURE__ */ A.jsx(
            Cl,
            {
              message: i,
              isUser: !1,
              date: /* @__PURE__ */ new Date()
            }
          ),
          s && !i && /* @__PURE__ */ A.jsx(Cl, { thinking: !0, date: /* @__PURE__ */ new Date() })
        ] }),
        /* @__PURE__ */ A.jsx("div", { ref: o, id: "bottom-ref", className: "mimin-pb-9" })
      ]
    }
  );
};
function Nw(n) {
  return Vf({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M3 12.9999H9V10.9999H3V1.84558C3 1.56944 3.22386 1.34558 3.5 1.34558C3.58425 1.34558 3.66714 1.36687 3.74096 1.40747L22.2034 11.5618C22.4454 11.6949 22.5337 11.9989 22.4006 12.2409C22.3549 12.324 22.2865 12.3924 22.2034 12.4381L3.74096 22.5924C3.499 22.7255 3.19497 22.6372 3.06189 22.3953C3.02129 22.3214 3 22.2386 3 22.1543V12.9999Z" }, child: [] }] })(n);
}
const jw = ({
  onSendMessage: n,
  loading: i,
  fetching: s
}) => {
  const [l, o] = X.useState(""), { config: m } = sr(), f = X.useRef(null), d = () => {
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
                    Nw,
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
}, Bf = X.createContext({});
function Lf(n) {
  const i = X.useRef(null);
  return i.current === null && (i.current = n()), i.current;
}
const kf = typeof window < "u", j0 = kf ? X.useLayoutEffect : X.useEffect, Il = /* @__PURE__ */ X.createContext(null);
function Hf(n, i) {
  n.indexOf(i) === -1 && n.push(i);
}
function qf(n, i) {
  const s = n.indexOf(i);
  s > -1 && n.splice(s, 1);
}
const Cn = (n, i, s) => s > i ? i : s < n ? n : s;
let Pf = () => {
};
const Dn = {}, _0 = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
function z0(n) {
  return typeof n == "object" && n !== null;
}
const V0 = (n) => /^0[^.\s]+$/u.test(n);
// @__NO_SIDE_EFFECTS__
function Yf(n) {
  let i;
  return () => (i === void 0 && (i = n()), i);
}
const Qe = /* @__NO_SIDE_EFFECTS__ */ (n) => n, _w = (n, i) => (s) => i(n(s)), rr = (...n) => n.reduce(_w), Ws = /* @__NO_SIDE_EFFECTS__ */ (n, i, s) => {
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
function U0(n, i) {
  return i ? n * (1e3 / i) : 0;
}
const B0 = (n, i, s) => (((1 - 3 * s + 3 * i) * n + (3 * s - 6 * i)) * n + 3 * i) * n, zw = 1e-7, Vw = 12;
function Uw(n, i, s, l, o) {
  let m, f, d = 0;
  do
    f = i + (s - i) / 2, m = B0(f, l, o) - n, m > 0 ? s = f : i = f;
  while (Math.abs(m) > zw && ++d < Vw);
  return f;
}
function lr(n, i, s, l) {
  if (n === i && s === l)
    return Qe;
  const o = (m) => Uw(m, 0, 1, n, s);
  return (m) => m === 0 || m === 1 ? m : B0(o(m), i, l);
}
const L0 = (n) => (i) => i <= 0.5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2, k0 = (n) => (i) => 1 - n(1 - i), H0 = /* @__PURE__ */ lr(0.33, 1.53, 0.69, 0.99), Xf = /* @__PURE__ */ k0(H0), q0 = /* @__PURE__ */ L0(Xf), P0 = (n) => (n *= 2) < 1 ? 0.5 * Xf(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1))), Kf = (n) => 1 - Math.sin(Math.acos(n)), Y0 = k0(Kf), G0 = L0(Kf), Bw = /* @__PURE__ */ lr(0.42, 0, 1, 1), Lw = /* @__PURE__ */ lr(0, 0, 0.58, 1), X0 = /* @__PURE__ */ lr(0.42, 0, 0.58, 1), kw = (n) => Array.isArray(n) && typeof n[0] != "number", K0 = (n) => Array.isArray(n) && typeof n[0] == "number", Hw = {
  linear: Qe,
  easeIn: Bw,
  easeInOut: X0,
  easeOut: Lw,
  circIn: Kf,
  circInOut: G0,
  circOut: Y0,
  backIn: Xf,
  backInOut: q0,
  backOut: H0,
  anticipate: P0
}, qw = (n) => typeof n == "string", By = (n) => {
  if (K0(n)) {
    Pf(n.length === 4);
    const [i, s, l, o] = n;
    return lr(i, s, l, o);
  } else if (qw(n))
    return Hw[n];
  return n;
}, Dl = [
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
function Pw(n, i) {
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
const Yw = 40;
function Q0(n, i) {
  let s = !1, l = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, m = () => s = !0, f = Dl.reduce((q, J) => (q[J] = Pw(m), q), {}), { setup: d, read: p, resolveKeyframes: h, preUpdate: g, update: b, preRender: x, render: C, postRender: E } = f, R = () => {
    const q = Dn.useManualTiming ? o.timestamp : performance.now();
    s = !1, Dn.useManualTiming || (o.delta = l ? 1e3 / 60 : Math.max(Math.min(q - o.timestamp, Yw), 1)), o.timestamp = q, o.isProcessing = !0, d.process(o), p.process(o), h.process(o), g.process(o), b.process(o), x.process(o), C.process(o), E.process(o), o.isProcessing = !1, s && i && (l = !1, n(R));
  }, j = () => {
    s = !0, l = !0, o.isProcessing || n(R);
  };
  return { schedule: Dl.reduce((q, J) => {
    const Q = f[J];
    return q[J] = (G, $ = !1, Y = !1) => (s || j(), Q.schedule(G, $, Y)), q;
  }, {}), cancel: (q) => {
    for (let J = 0; J < Dl.length; J++)
      f[Dl[J]].cancel(q);
  }, state: o, steps: f };
}
const { schedule: Lt, cancel: si, state: ce, steps: zc } = /* @__PURE__ */ Q0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Qe, !0);
let zl;
function Gw() {
  zl = void 0;
}
const Ae = {
  now: () => (zl === void 0 && Ae.set(ce.isProcessing || Dn.useManualTiming ? ce.timestamp : performance.now()), zl),
  set: (n) => {
    zl = n, queueMicrotask(Gw);
  }
}, Z0 = (n) => (i) => typeof i == "string" && i.startsWith(n), Qf = /* @__PURE__ */ Z0("--"), Xw = /* @__PURE__ */ Z0("var(--"), Zf = (n) => Xw(n) ? Kw.test(n.split("/*")[0].trim()) : !1, Kw = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, za = {
  test: (n) => typeof n == "number",
  parse: parseFloat,
  transform: (n) => n
}, Js = {
  ...za,
  transform: (n) => Cn(0, 1, n)
}, Nl = {
  ...za,
  default: 1
}, Gs = (n) => Math.round(n * 1e5) / 1e5, Ff = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Qw(n) {
  return n == null;
}
const Zw = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Wf = (n, i) => (s) => !!(typeof s == "string" && Zw.test(s) && s.startsWith(n) || i && !Qw(s) && Object.prototype.hasOwnProperty.call(s, i)), F0 = (n, i, s) => (l) => {
  if (typeof l != "string")
    return l;
  const [o, m, f, d] = l.match(Ff);
  return {
    [n]: parseFloat(o),
    [i]: parseFloat(m),
    [s]: parseFloat(f),
    alpha: d !== void 0 ? parseFloat(d) : 1
  };
}, Fw = (n) => Cn(0, 255, n), Vc = {
  ...za,
  transform: (n) => Math.round(Fw(n))
}, Ni = {
  test: /* @__PURE__ */ Wf("rgb", "red"),
  parse: /* @__PURE__ */ F0("red", "green", "blue"),
  transform: ({ red: n, green: i, blue: s, alpha: l = 1 }) => "rgba(" + Vc.transform(n) + ", " + Vc.transform(i) + ", " + Vc.transform(s) + ", " + Gs(Js.transform(l)) + ")"
};
function Ww(n) {
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
  parse: Ww,
  transform: Ni.transform
}, or = /* @__NO_SIDE_EFFECTS__ */ (n) => ({
  test: (i) => typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
  parse: parseFloat,
  transform: (i) => `${i}${n}`
}), ii = /* @__PURE__ */ or("deg"), fn = /* @__PURE__ */ or("%"), ut = /* @__PURE__ */ or("px"), Jw = /* @__PURE__ */ or("vh"), $w = /* @__PURE__ */ or("vw"), Ly = {
  ...fn,
  parse: (n) => fn.parse(n) / 100,
  transform: (n) => fn.transform(n * 100)
}, Ea = {
  test: /* @__PURE__ */ Wf("hsl", "hue"),
  parse: /* @__PURE__ */ F0("hue", "saturation", "lightness"),
  transform: ({ hue: n, saturation: i, lightness: s, alpha: l = 1 }) => "hsla(" + Math.round(n) + ", " + fn.transform(Gs(i)) + ", " + fn.transform(Gs(s)) + ", " + Gs(Js.transform(l)) + ")"
}, Jt = {
  test: (n) => Ni.test(n) || rf.test(n) || Ea.test(n),
  parse: (n) => Ni.test(n) ? Ni.parse(n) : Ea.test(n) ? Ea.parse(n) : rf.parse(n),
  transform: (n) => typeof n == "string" ? n : n.hasOwnProperty("red") ? Ni.transform(n) : Ea.transform(n),
  getAnimatableNone: (n) => {
    const i = Jt.parse(n);
    return i.alpha = 0, Jt.transform(i);
  }
}, Iw = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function tA(n) {
  return isNaN(n) && typeof n == "string" && (n.match(Ff)?.length || 0) + (n.match(Iw)?.length || 0) > 0;
}
const W0 = "number", J0 = "color", eA = "var", nA = "var(", ky = "${}", iA = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function $s(n) {
  const i = n.toString(), s = [], l = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let m = 0;
  const d = i.replace(iA, (p) => (Jt.test(p) ? (l.color.push(m), o.push(J0), s.push(Jt.parse(p))) : p.startsWith(nA) ? (l.var.push(m), o.push(eA), s.push(p)) : (l.number.push(m), o.push(W0), s.push(parseFloat(p))), ++m, ky)).split(ky);
  return { values: s, split: d, indexes: l, types: o };
}
function $0(n) {
  return $s(n).values;
}
function I0(n) {
  const { split: i, types: s } = $s(n), l = i.length;
  return (o) => {
    let m = "";
    for (let f = 0; f < l; f++)
      if (m += i[f], o[f] !== void 0) {
        const d = s[f];
        d === W0 ? m += Gs(o[f]) : d === J0 ? m += Jt.transform(o[f]) : m += o[f];
      }
    return m;
  };
}
const aA = (n) => typeof n == "number" ? 0 : Jt.test(n) ? Jt.getAnimatableNone(n) : n;
function sA(n) {
  const i = $0(n);
  return I0(n)(i.map(aA));
}
const ri = {
  test: tA,
  parse: $0,
  createTransformer: I0,
  getAnimatableNone: sA
};
function Uc(n, i, s) {
  return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? n + (i - n) * 6 * s : s < 1 / 2 ? i : s < 2 / 3 ? n + (i - n) * (2 / 3 - s) * 6 : n;
}
function rA({ hue: n, saturation: i, lightness: s, alpha: l }) {
  n /= 360, i /= 100, s /= 100;
  let o = 0, m = 0, f = 0;
  if (!i)
    o = m = f = s;
  else {
    const d = s < 0.5 ? s * (1 + i) : s + i - s * i, p = 2 * s - d;
    o = Uc(p, d, n + 1 / 3), m = Uc(p, d, n), f = Uc(p, d, n - 1 / 3);
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
const Ht = (n, i, s) => n + (i - n) * s, Bc = (n, i, s) => {
  const l = n * n, o = s * (i * i - l) + l;
  return o < 0 ? 0 : Math.sqrt(o);
}, lA = [rf, Ni, Ea], oA = (n) => lA.find((i) => i.test(n));
function Hy(n) {
  const i = oA(n);
  if (!i)
    return !1;
  let s = i.parse(n);
  return i === Ea && (s = rA(s)), s;
}
const qy = (n, i) => {
  const s = Hy(n), l = Hy(i);
  if (!s || !l)
    return Gl(n, i);
  const o = { ...s };
  return (m) => (o.red = Bc(s.red, l.red, m), o.green = Bc(s.green, l.green, m), o.blue = Bc(s.blue, l.blue, m), o.alpha = Ht(s.alpha, l.alpha, m), Ni.transform(o));
}, lf = /* @__PURE__ */ new Set(["none", "hidden"]);
function uA(n, i) {
  return lf.has(n) ? (s) => s <= 0 ? n : i : (s) => s >= 1 ? i : n;
}
function cA(n, i) {
  return (s) => Ht(n, i, s);
}
function Jf(n) {
  return typeof n == "number" ? cA : typeof n == "string" ? Zf(n) ? Gl : Jt.test(n) ? qy : dA : Array.isArray(n) ? tv : typeof n == "object" ? Jt.test(n) ? qy : fA : Gl;
}
function tv(n, i) {
  const s = [...n], l = s.length, o = n.map((m, f) => Jf(m)(m, i[f]));
  return (m) => {
    for (let f = 0; f < l; f++)
      s[f] = o[f](m);
    return s;
  };
}
function fA(n, i) {
  const s = { ...n, ...i }, l = {};
  for (const o in s)
    n[o] !== void 0 && i[o] !== void 0 && (l[o] = Jf(n[o])(n[o], i[o]));
  return (o) => {
    for (const m in l)
      s[m] = l[m](o);
    return s;
  };
}
function mA(n, i) {
  const s = [], l = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < i.values.length; o++) {
    const m = i.types[o], f = n.indexes[m][l[m]], d = n.values[f] ?? 0;
    s[o] = d, l[m]++;
  }
  return s;
}
const dA = (n, i) => {
  const s = ri.createTransformer(i), l = $s(n), o = $s(i);
  return l.indexes.var.length === o.indexes.var.length && l.indexes.color.length === o.indexes.color.length && l.indexes.number.length >= o.indexes.number.length ? lf.has(n) && !o.values.length || lf.has(i) && !l.values.length ? uA(n, i) : rr(tv(mA(l, o), o.values), s) : Gl(n, i);
};
function ev(n, i, s) {
  return typeof n == "number" && typeof i == "number" && typeof s == "number" ? Ht(n, i, s) : Jf(n)(n, i);
}
const hA = (n) => {
  const i = ({ timestamp: s }) => n(s);
  return {
    start: (s = !0) => Lt.update(i, s),
    stop: () => si(i),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ce.isProcessing ? ce.timestamp : Ae.now()
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
function pA(n, i = 100, s) {
  const l = s({ ...n, keyframes: [0, i] }), o = Math.min($f(l), Xl);
  return {
    type: "keyframes",
    ease: (m) => l.next(o * m).value / i,
    duration: /* @__PURE__ */ cn(o)
  };
}
const yA = 5;
function iv(n, i, s) {
  const l = Math.max(i - yA, 0);
  return U0(s - n(l), i - l);
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
function gA({ duration: n = Gt.duration, bounce: i = Gt.bounce, velocity: s = Gt.velocity, mass: l = Gt.mass }) {
  let o, m, f = 1 - i;
  f = Cn(Gt.minDamping, Gt.maxDamping, f), n = Cn(Gt.minDuration, Gt.maxDuration, /* @__PURE__ */ cn(n)), f < 1 ? (o = (h) => {
    const g = h * f, b = g * n, x = g - s, C = of(h, f), E = Math.exp(-b);
    return Lc - x / C * E;
  }, m = (h) => {
    const b = h * f * n, x = b * s + s, C = Math.pow(f, 2) * Math.pow(h, 2) * n, E = Math.exp(-b), R = of(Math.pow(h, 2), f);
    return (-o(h) + Lc > 0 ? -1 : 1) * ((x - C) * E) / R;
  }) : (o = (h) => {
    const g = Math.exp(-h * n), b = (h - s) * n + 1;
    return -Lc + g * b;
  }, m = (h) => {
    const g = Math.exp(-h * n), b = (s - h) * (n * n);
    return g * b;
  });
  const d = 5 / n, p = bA(o, m, d);
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
const vA = 12;
function bA(n, i, s) {
  let l = s;
  for (let o = 1; o < vA; o++)
    l = l - n(l) / i(l);
  return l;
}
function of(n, i) {
  return n * Math.sqrt(1 - i * i);
}
const xA = ["duration", "bounce"], SA = ["stiffness", "damping", "mass"];
function Py(n, i) {
  return i.some((s) => n[s] !== void 0);
}
function TA(n) {
  let i = {
    velocity: Gt.velocity,
    stiffness: Gt.stiffness,
    damping: Gt.damping,
    mass: Gt.mass,
    isResolvedFromDuration: !1,
    ...n
  };
  if (!Py(n, SA) && Py(n, xA))
    if (n.visualDuration) {
      const s = n.visualDuration, l = 2 * Math.PI / (s * 1.2), o = l * l, m = 2 * Cn(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(o);
      i = {
        ...i,
        mass: Gt.mass,
        stiffness: o,
        damping: m
      };
    } else {
      const s = gA(n);
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
  const m = s.keyframes[0], f = s.keyframes[s.keyframes.length - 1], d = { done: !1, value: m }, { stiffness: p, damping: h, mass: g, duration: b, velocity: x, isResolvedFromDuration: C } = TA({
    ...s,
    velocity: -/* @__PURE__ */ cn(s.velocity || 0)
  }), E = x || 0, R = h / (2 * Math.sqrt(p * g)), j = f - m, U = /* @__PURE__ */ cn(Math.sqrt(p / g)), k = Math.abs(j) < 5;
  l || (l = k ? Gt.restSpeed.granular : Gt.restSpeed.default), o || (o = k ? Gt.restDelta.granular : Gt.restDelta.default);
  let q;
  if (R < 1) {
    const Q = of(U, R);
    q = (G) => {
      const $ = Math.exp(-R * U * G);
      return f - $ * ((E + R * U * j) / Q * Math.sin(Q * G) + j * Math.cos(Q * G));
    };
  } else if (R === 1)
    q = (Q) => f - Math.exp(-U * Q) * (j + (E + U * j) * Q);
  else {
    const Q = U * Math.sqrt(R * R - 1);
    q = (G) => {
      const $ = Math.exp(-R * U * G), Y = Math.min(Q * G, 300);
      return f - $ * ((E + R * U * j) * Math.sinh(Y) + Q * j * Math.cosh(Y)) / Q;
    };
  }
  const J = {
    calculatedDuration: C && b || null,
    next: (Q) => {
      const G = q(Q);
      if (C)
        d.done = Q >= b;
      else {
        let $ = Q === 0 ? E : 0;
        R < 1 && ($ = Q === 0 ? /* @__PURE__ */ un(E) : iv(q, Q, G));
        const Y = Math.abs($) <= l, lt = Math.abs(f - G) <= o;
        d.done = Y && lt;
      }
      return d.value = d.done ? f : G, d;
    },
    toString: () => {
      const Q = Math.min($f(J), Xl), G = nv(($) => J.next(Q * $).value, Q, 30);
      return Q + "ms " + G;
    },
    toTransition: () => {
    }
  };
  return J;
}
Kl.applyToOptions = (n) => {
  const i = pA(n, 100, Kl);
  return n.ease = i.ease, n.duration = /* @__PURE__ */ un(i.duration), n.type = "keyframes", n;
};
function uf({ keyframes: n, velocity: i = 0, power: s = 0.8, timeConstant: l = 325, bounceDamping: o = 10, bounceStiffness: m = 500, modifyTarget: f, min: d, max: p, restDelta: h = 0.5, restSpeed: g }) {
  const b = n[0], x = {
    done: !1,
    value: b
  }, C = (Y) => d !== void 0 && Y < d || p !== void 0 && Y > p, E = (Y) => d === void 0 ? p : p === void 0 || Math.abs(d - Y) < Math.abs(p - Y) ? d : p;
  let R = s * i;
  const j = b + R, U = f === void 0 ? j : f(j);
  U !== j && (R = U - b);
  const k = (Y) => -R * Math.exp(-Y / l), q = (Y) => U + k(Y), J = (Y) => {
    const lt = k(Y), St = q(Y);
    x.done = Math.abs(lt) <= h, x.value = x.done ? U : St;
  };
  let Q, G;
  const $ = (Y) => {
    C(x.value) && (Q = Y, G = Kl({
      keyframes: [x.value, E(x.value)],
      velocity: iv(q, Y, x.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: m,
      restDelta: h,
      restSpeed: g
    }));
  };
  return $(0), {
    calculatedDuration: null,
    next: (Y) => {
      let lt = !1;
      return !G && Q === void 0 && (lt = !0, J(Y), $(Y)), Q !== void 0 && Y >= Q ? G.next(Y - Q) : (!lt && J(Y), x);
    }
  };
}
function wA(n, i, s) {
  const l = [], o = s || Dn.mix || ev, m = n.length - 1;
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
function AA(n, i, { clamp: s = !0, ease: l, mixer: o } = {}) {
  const m = n.length;
  if (Pf(m === i.length), m === 1)
    return () => i[0];
  if (m === 2 && i[0] === i[1])
    return () => i[1];
  const f = n[0] === n[1];
  n[0] > n[m - 1] && (n = [...n].reverse(), i = [...i].reverse());
  const d = wA(i, l, o), p = d.length, h = (g) => {
    if (f && g < n[0])
      return i[0];
    let b = 0;
    if (p > 1)
      for (; b < n.length - 2 && !(g < n[b + 1]); b++)
        ;
    const x = /* @__PURE__ */ Ws(n[b], n[b + 1], g);
    return d[b](x);
  };
  return s ? (g) => h(Cn(n[0], n[m - 1], g)) : h;
}
function EA(n, i) {
  const s = n[n.length - 1];
  for (let l = 1; l <= i; l++) {
    const o = /* @__PURE__ */ Ws(0, i, l);
    n.push(Ht(s, 1, o));
  }
}
function MA(n) {
  const i = [0];
  return EA(i, n.length - 1), i;
}
function RA(n, i) {
  return n.map((s) => s * i);
}
function OA(n, i) {
  return n.map(() => i || X0).splice(0, n.length - 1);
}
function Xs({ duration: n = 300, keyframes: i, times: s, ease: l = "easeInOut" }) {
  const o = kw(l) ? l.map(By) : By(l), m = {
    done: !1,
    value: i[0]
  }, f = RA(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    s && s.length === i.length ? s : MA(i),
    n
  ), d = AA(f, i, {
    ease: Array.isArray(o) ? o : OA(i, o)
  });
  return {
    calculatedDuration: n,
    next: (p) => (m.value = d(p), m.done = p >= n, m)
  };
}
const CA = (n) => n !== null;
function If(n, { repeat: i, repeatType: s = "loop" }, l, o = 1) {
  const m = n.filter(CA), d = o < 0 || i && s !== "loop" && i % 2 === 1 ? 0 : m.length - 1;
  return !d || l === void 0 ? m[d] : l;
}
const DA = {
  decay: uf,
  inertia: uf,
  tween: Xs,
  keyframes: Xs,
  spring: Kl
};
function av(n) {
  typeof n.type == "string" && (n.type = DA[n.type]);
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
const NA = (n) => n / 100;
class em extends tm {
  constructor(i) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const { motionValue: s } = this.options;
      s && s.updatedAt !== Ae.now() && this.tick(Ae.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = i, this.initAnimation(), this.play(), i.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: i } = this;
    av(i);
    const { type: s = Xs, repeat: l = 0, repeatDelay: o = 0, repeatType: m, velocity: f = 0 } = i;
    let { keyframes: d } = i;
    const p = s || Xs;
    p !== Xs && typeof d[0] != "number" && (this.mixKeyframes = rr(NA, ev(d[0], d[1])), d = [0, 100]);
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
    const { delay: h = 0, keyframes: g, repeat: b, repeatType: x, repeatDelay: C, type: E, onUpdate: R, finalKeyframe: j } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, i) : this.speed < 0 && (this.startTime = Math.min(i - o / this.speed, this.startTime)), s ? this.currentTime = i : this.updateTime(i);
    const U = this.currentTime - h * (this.playbackSpeed >= 0 ? 1 : -1), k = this.playbackSpeed >= 0 ? U < 0 : U > o;
    this.currentTime = Math.max(U, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = o);
    let q = this.currentTime, J = l;
    if (b) {
      const Y = Math.min(this.currentTime, o) / d;
      let lt = Math.floor(Y), St = Y % 1;
      !St && Y >= 1 && (St = 1), St === 1 && lt--, lt = Math.min(lt, b + 1), !!(lt % 2) && (x === "reverse" ? (St = 1 - St, C && (St -= C / d)) : x === "mirror" && (J = f)), q = Cn(0, 1, St) * d;
    }
    const Q = k ? { done: !1, value: g[0] } : J.next(q);
    m && (Q.value = m(Q.value));
    let { done: G } = Q;
    !k && p !== null && (G = this.playbackSpeed >= 0 ? this.currentTime >= o : this.currentTime <= 0);
    const $ = this.holdTime === null && (this.state === "finished" || this.state === "running" && G);
    return $ && E !== uf && (Q.value = If(g, this.options, j, this.speed)), R && R(Q.value), $ && this.finish(), Q;
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
    this.updateTime(Ae.now());
    const s = this.playbackSpeed !== i;
    this.playbackSpeed = i, s && (this.time = /* @__PURE__ */ cn(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: i = hA, startTime: s } = this.options;
    this.driver || (this.driver = i((o) => this.tick(o))), this.options.onPlay?.();
    const l = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = l) : this.holdTime !== null ? this.startTime = l - this.holdTime : this.startTime || (this.startTime = s ?? l), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Ae.now()), this.holdTime = this.currentTime;
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
function jA(n) {
  for (let i = 1; i < n.length; i++)
    n[i] ?? (n[i] = n[i - 1]);
}
const ji = (n) => n * 180 / Math.PI, cf = (n) => {
  const i = ji(Math.atan2(n[1], n[0]));
  return ff(i);
}, _A = {
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
}, ff = (n) => (n = n % 360, n < 0 && (n += 360), n), Yy = cf, Gy = (n) => Math.sqrt(n[0] * n[0] + n[1] * n[1]), Xy = (n) => Math.sqrt(n[4] * n[4] + n[5] * n[5]), zA = {
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
    l = zA, o = s;
  else {
    const d = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    l = _A, o = d;
  }
  if (!o)
    return mf(i);
  const m = l[i], f = o[1].split(",").map(UA);
  return typeof m == "function" ? m(f) : f[m];
}
const VA = (n, i) => {
  const { transform: s = "none" } = getComputedStyle(n);
  return df(s, i);
};
function UA(n) {
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
], Ua = new Set(Va), Ky = (n) => n === za || n === ut, BA = /* @__PURE__ */ new Set(["x", "y", "z"]), LA = Va.filter((n) => !BA.has(n));
function kA(n) {
  const i = [];
  return LA.forEach((s) => {
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
const Vi = /* @__PURE__ */ new Set();
let hf = !1, pf = !1, yf = !1;
function sv() {
  if (pf) {
    const n = Array.from(Vi).filter((l) => l.needsMeasurement), i = new Set(n.map((l) => l.element)), s = /* @__PURE__ */ new Map();
    i.forEach((l) => {
      const o = kA(l);
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
  pf = !1, hf = !1, Vi.forEach((n) => n.complete(yf)), Vi.clear();
}
function rv() {
  Vi.forEach((n) => {
    n.readKeyframes(), n.needsMeasurement && (pf = !0);
  });
}
function HA() {
  yf = !0, rv(), sv(), yf = !1;
}
class nm {
  constructor(i, s, l, o, m, f = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...i], this.onComplete = s, this.name = l, this.motionValue = o, this.element = m, this.isAsync = f;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Vi.add(this), hf || (hf = !0, Lt.read(rv), Lt.resolveKeyframes(sv))) : (this.readKeyframes(), this.complete());
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
    jA(i);
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
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i), Vi.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Vi.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const qA = (n) => n.startsWith("--");
function PA(n, i, s) {
  qA(i) ? n.style.setProperty(i, s) : n.style[i] = s;
}
const YA = /* @__PURE__ */ Yf(() => window.ScrollTimeline !== void 0), GA = {};
function XA(n, i) {
  const s = /* @__PURE__ */ Yf(n);
  return () => GA[i] ?? s();
}
const lv = /* @__PURE__ */ XA(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Ys = ([n, i, s, l]) => `cubic-bezier(${n}, ${i}, ${s}, ${l})`, Qy = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Ys([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Ys([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Ys([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Ys([0.33, 1.53, 0.69, 0.99])
};
function ov(n, i) {
  if (n)
    return typeof n == "function" ? lv() ? nv(n, i) : "ease-out" : K0(n) ? Ys(n) : Array.isArray(n) ? n.map((s) => ov(s, i) || Qy.easeOut) : Qy[n];
}
function KA(n, i, s, { delay: l = 0, duration: o = 300, repeat: m = 0, repeatType: f = "loop", ease: d = "easeOut", times: p } = {}, h = void 0) {
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
function QA({ type: n, ...i }) {
  return uv(n) && lv() ? n.applyToOptions(i) : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i);
}
class ZA extends tm {
  constructor(i) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !i)
      return;
    const { element: s, name: l, keyframes: o, pseudoElement: m, allowFlatten: f = !1, finalKeyframe: d, onComplete: p } = i;
    this.isPseudoElement = !!m, this.allowFlatten = f, this.options = i, Pf(typeof i.type != "string");
    const h = QA(i);
    this.animation = KA(s, l, o, h, m), h.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !m) {
        const g = If(o, this.options, d, this.speed);
        this.updateMotionValue ? this.updateMotionValue(g) : PA(s, l, g), this.animation.cancel();
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
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, i && YA() ? (this.animation.timeline = i, Qe) : s(this);
  }
}
const cv = {
  anticipate: P0,
  backInOut: q0,
  circInOut: G0
};
function FA(n) {
  return n in cv;
}
function WA(n) {
  typeof n.ease == "string" && FA(n.ease) && (n.ease = cv[n.ease]);
}
const Zy = 10;
class JA extends ZA {
  constructor(i) {
    WA(i), av(i), super(i), i.startTime && (this.startTime = i.startTime), this.options = i;
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
function $A(n) {
  const i = n[0];
  if (n.length === 1)
    return !0;
  for (let s = 0; s < n.length; s++)
    if (n[s] !== i)
      return !0;
}
function IA(n, i, s, l) {
  const o = n[0];
  if (o === null)
    return !1;
  if (i === "display" || i === "visibility")
    return !0;
  const m = n[n.length - 1], f = Fy(o, i), d = Fy(m, i);
  return !f || !d ? !1 : $A(n) || (s === "spring" || uv(s)) && l;
}
const tE = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), eE = /* @__PURE__ */ Yf(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function nE(n) {
  const { motionValue: i, name: s, repeatDelay: l, repeatType: o, damping: m, type: f } = n;
  if (!(i?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: p, transformTemplate: h } = i.owner.getProps();
  return eE() && s && tE.has(s) && (s !== "transform" || !h) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !p && !l && o !== "mirror" && m !== 0 && f !== "inertia";
}
const iE = 40;
class aE extends tm {
  constructor({ autoplay: i = !0, delay: s = 0, type: l = "keyframes", repeat: o = 0, repeatDelay: m = 0, repeatType: f = "loop", keyframes: d, name: p, motionValue: h, element: g, ...b }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = Ae.now();
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
    this.keyframeResolver = new C(d, (E, R, j) => this.onKeyframesResolved(E, R, x, !j), p, h, g), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(i, s, l, o) {
    this.keyframeResolver = void 0;
    const { name: m, type: f, velocity: d, delay: p, isHandoff: h, onUpdate: g } = l;
    this.resolvedAt = Ae.now(), IA(i, m, f, d) || ((Dn.instantAnimations || !p) && g?.(If(i, l, s)), i[0] = i[i.length - 1], l.duration = 0, l.repeat = 0);
    const x = {
      startTime: o ? this.resolvedAt ? this.resolvedAt - this.createdAt > iE ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: s,
      ...l,
      keyframes: i
    }, C = !h && nE(x) ? new JA({
      ...x,
      element: x.motionValue.owner.current
    }) : new em(x);
    C.finished.then(() => this.notifyFinished()).catch(Qe), this.pendingTimeline && (this.stopTimeline = C.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = C;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(i, s) {
    return this.finished.finally(i).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), HA()), this._animation;
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
const sE = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function rE(n) {
  const i = sE.exec(n);
  if (!i)
    return [,];
  const [, s, l, o] = i;
  return [`--${s ?? l}`, o];
}
function fv(n, i, s = 1) {
  const [l, o] = rE(n);
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
]), lE = {
  test: (n) => n === "auto",
  parse: (n) => n
}, dv = (n) => (i) => i.test(n), hv = [za, ut, fn, ii, $w, Jw, lE], Wy = (n) => hv.find(dv(n));
function oE(n) {
  return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || V0(n) : !0;
}
const uE = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function cE(n) {
  const [i, s] = n.slice(0, -1).split("(");
  if (i === "drop-shadow")
    return n;
  const [l] = s.match(Ff) || [];
  if (!l)
    return n;
  const o = s.replace(l, "");
  let m = uE.has(i) ? 1 : 0;
  return l !== s && (m *= 100), i + "(" + m + o + ")";
}
const fE = /\b([a-z-]*)\(.*?\)/gu, gf = {
  ...ri,
  getAnimatableNone: (n) => {
    const i = n.match(fE);
    return i ? i.map(cE).join(" ") : n;
  }
}, Jy = {
  ...za,
  transform: Math.round
}, mE = {
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
  distance: ut,
  translateX: ut,
  translateY: ut,
  translateZ: ut,
  x: ut,
  y: ut,
  z: ut,
  perspective: ut,
  transformPerspective: ut,
  opacity: Js,
  originX: Ly,
  originY: Ly,
  originZ: ut
}, am = {
  // Border props
  borderWidth: ut,
  borderTopWidth: ut,
  borderRightWidth: ut,
  borderBottomWidth: ut,
  borderLeftWidth: ut,
  borderRadius: ut,
  radius: ut,
  borderTopLeftRadius: ut,
  borderTopRightRadius: ut,
  borderBottomRightRadius: ut,
  borderBottomLeftRadius: ut,
  // Positioning props
  width: ut,
  maxWidth: ut,
  height: ut,
  maxHeight: ut,
  top: ut,
  right: ut,
  bottom: ut,
  left: ut,
  // Spacing props
  padding: ut,
  paddingTop: ut,
  paddingRight: ut,
  paddingBottom: ut,
  paddingLeft: ut,
  margin: ut,
  marginTop: ut,
  marginRight: ut,
  marginBottom: ut,
  marginLeft: ut,
  // Misc
  backgroundPositionX: ut,
  backgroundPositionY: ut,
  ...mE,
  zIndex: Jy,
  // SVG
  fillOpacity: Js,
  strokeOpacity: Js,
  numOctaves: Jy
}, dE = {
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
  filter: gf,
  WebkitFilter: gf
}, pv = (n) => dE[n];
function yv(n, i) {
  let s = pv(n);
  return s !== gf && (s = ri), s.getAnimatableNone ? s.getAnimatableNone(i) : void 0;
}
const hE = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function pE(n, i, s) {
  let l = 0, o;
  for (; l < n.length && !o; ) {
    const m = n[l];
    typeof m == "string" && !hE.has(m) && $s(m).values.length && (o = n[l]), l++;
  }
  if (o && s)
    for (const m of i)
      n[m] = yv(s, o);
}
class yE extends nm {
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
      (i[o] === null || oE(i[o])) && l.push(o);
    l.length && pE(i, l, s);
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
function gE(n, i, s) {
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
const $y = 30, vE = (n) => !isNaN(parseFloat(n));
class bE {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(i, s = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (l, o = !0) => {
      const m = Ae.now();
      if (this.updatedAt !== m && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(l), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const f of this.dependents)
          f.dirty();
      o && this.events.renderRequest?.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(i), this.owner = s.owner;
  }
  setCurrent(i) {
    this.current = i, this.updatedAt = Ae.now(), this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = vE(this.current));
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
    const i = Ae.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > $y)
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, $y);
    return U0(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
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
function Da(n, i) {
  return new bE(n, i);
}
const { schedule: sm } = /* @__PURE__ */ Q0(queueMicrotask, !1), Je = {
  x: !1,
  y: !1
};
function bv() {
  return Je.x || Je.y;
}
function xE(n) {
  return n === "x" || n === "y" ? Je[n] ? null : (Je[n] = !0, () => {
    Je[n] = !1;
  }) : Je.x || Je.y ? null : (Je.x = Je.y = !0, () => {
    Je.x = Je.y = !1;
  });
}
function xv(n, i) {
  const s = gE(n), l = new AbortController(), o = {
    passive: !0,
    ...i,
    signal: l.signal
  };
  return [s, o, () => l.abort()];
}
function Iy(n) {
  return !(n.pointerType === "touch" || bv());
}
function SE(n, i, s = {}) {
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
const Sv = (n, i) => i ? n === i ? !0 : Sv(n, i.parentElement) : !1, rm = (n) => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1, TE = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function wE(n) {
  return TE.has(n.tagName) || n.tabIndex !== -1;
}
const Vl = /* @__PURE__ */ new WeakSet();
function tg(n) {
  return (i) => {
    i.key === "Enter" && n(i);
  };
}
function kc(n, i) {
  n.dispatchEvent(new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }));
}
const AE = (n, i) => {
  const s = n.currentTarget;
  if (!s)
    return;
  const l = tg(() => {
    if (Vl.has(s))
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
function EE(n, i, s = {}) {
  const [l, o, m] = xv(n, s), f = (d) => {
    const p = d.currentTarget;
    if (!eg(d))
      return;
    Vl.add(p);
    const h = i(p, d), g = (C, E) => {
      window.removeEventListener("pointerup", b), window.removeEventListener("pointercancel", x), Vl.has(p) && Vl.delete(p), eg(C) && typeof h == "function" && h(C, { success: E });
    }, b = (C) => {
      g(C, p === window || p === document || s.useGlobalTarget || Sv(p, C.target));
    }, x = (C) => {
      g(C, !1);
    };
    window.addEventListener("pointerup", b, o), window.addEventListener("pointercancel", x, o);
  };
  return l.forEach((d) => {
    (s.useGlobalTarget ? window : d).addEventListener("pointerdown", f, o), vv(d) && (d.addEventListener("focus", (h) => AE(h, o)), !wE(d) && !d.hasAttribute("tabindex") && (d.tabIndex = 0));
  }), m;
}
function Tv(n) {
  return z0(n) && "ownerSVGElement" in n;
}
function ME(n) {
  return Tv(n) && n.tagName === "svg";
}
const pe = (n) => !!(n && n.getVelocity), RE = [...hv, Jt, ri], OE = (n) => RE.find(dv(n)), lm = X.createContext({
  transformPagePoint: (n) => n,
  isStatic: !1,
  reducedMotion: "never"
});
class CE extends X.Component {
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
function DE({ children: n, isPresent: i, anchorX: s, root: l }) {
  const o = X.useId(), m = X.useRef(null), f = X.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: d } = X.useContext(lm);
  return X.useInsertionEffect(() => {
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
  }, [i]), A.jsx(CE, { isPresent: i, childRef: m, sizeRef: f, children: X.cloneElement(n, { ref: m }) });
}
const NE = ({ children: n, initial: i, isPresent: s, onExitComplete: l, custom: o, presenceAffectsLayout: m, mode: f, anchorX: d, root: p }) => {
  const h = Lf(jE), g = X.useId();
  let b = !0, x = X.useMemo(() => (b = !1, {
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
  return m && b && (x = { ...x }), X.useMemo(() => {
    h.forEach((C, E) => h.set(E, !1));
  }, [s]), X.useEffect(() => {
    !s && !h.size && l && l();
  }, [s]), f === "popLayout" && (n = A.jsx(DE, { isPresent: s, anchorX: d, root: p, children: n })), A.jsx(Il.Provider, { value: x, children: n });
};
function jE() {
  return /* @__PURE__ */ new Map();
}
function wv(n = !0) {
  const i = X.useContext(Il);
  if (i === null)
    return [!0, null];
  const { isPresent: s, onExitComplete: l, register: o } = i, m = X.useId();
  X.useEffect(() => {
    if (n)
      return o(m);
  }, [n]);
  const f = X.useCallback(() => n && l && l(m), [m, l, n]);
  return !s && l ? [!1, f] : [!0];
}
const jl = (n) => n.key || "";
function ng(n) {
  const i = [];
  return X.Children.forEach(n, (s) => {
    X.isValidElement(s) && i.push(s);
  }), i;
}
const _E = ({ children: n, custom: i, initial: s = !0, onExitComplete: l, presenceAffectsLayout: o = !0, mode: m = "sync", propagate: f = !1, anchorX: d = "left", root: p }) => {
  const [h, g] = wv(f), b = X.useMemo(() => ng(n), [n]), x = f && !h ? [] : b.map(jl), C = X.useRef(!0), E = X.useRef(b), R = Lf(() => /* @__PURE__ */ new Map()), [j, U] = X.useState(b), [k, q] = X.useState(b);
  j0(() => {
    C.current = !1, E.current = b;
    for (let G = 0; G < k.length; G++) {
      const $ = jl(k[G]);
      x.includes($) ? R.delete($) : R.get($) !== !0 && R.set($, !1);
    }
  }, [k, x.length, x.join("-")]);
  const J = [];
  if (b !== j) {
    let G = [...b];
    for (let $ = 0; $ < k.length; $++) {
      const Y = k[$], lt = jl(Y);
      x.includes(lt) || (G.splice($, 0, Y), J.push(Y));
    }
    return m === "wait" && J.length && (G = J), q(ng(G)), U(b), null;
  }
  const { forceRender: Q } = X.useContext(Bf);
  return A.jsx(A.Fragment, { children: k.map((G) => {
    const $ = jl(G), Y = f && !h ? !1 : b === k || x.includes($), lt = () => {
      if (R.has($))
        R.set($, !0);
      else
        return;
      let St = !0;
      R.forEach((_t) => {
        _t || (St = !1);
      }), St && (Q?.(), q(E.current), f && g?.(), l && l());
    };
    return A.jsx(NE, { isPresent: Y, initial: !C.current || s ? void 0 : !1, custom: i, presenceAffectsLayout: o, mode: m, root: p, onExitComplete: Y ? void 0 : lt, anchorX: d, children: G }, $);
  }) });
}, Av = X.createContext({ strict: !1 }), ig = {
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
}, Na = {};
for (const n in ig)
  Na[n] = {
    isEnabled: (i) => ig[n].some((s) => !!i[s])
  };
function zE(n) {
  for (const i in n)
    Na[i] = {
      ...Na[i],
      ...n[i]
    };
}
const VE = /* @__PURE__ */ new Set([
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
  return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || VE.has(n);
}
let Ev = (n) => !Ql(n);
function UE(n) {
  typeof n == "function" && (Ev = (i) => i.startsWith("on") ? !Ql(i) : n(i));
}
try {
  UE(require("@emotion/is-prop-valid").default);
} catch {
}
function BE(n, i, s) {
  const l = {};
  for (const o in n)
    o === "values" && typeof n.values == "object" || (Ev(o) || s === !0 && Ql(o) || !i && !Ql(o) || // If trying to use native HTML drag events, forward drag listeners
    n.draggable && o.startsWith("onDrag")) && (l[o] = n[o]);
  return l;
}
const to = /* @__PURE__ */ X.createContext({});
function eo(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
function Is(n) {
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
  return eo(n.animate) || um.some((i) => Is(n[i]));
}
function Mv(n) {
  return !!(no(n) || n.variants);
}
function LE(n, i) {
  if (no(n)) {
    const { initial: s, animate: l } = n;
    return {
      initial: s === !1 || Is(s) ? s : void 0,
      animate: Is(l) ? l : void 0
    };
  }
  return n.inherit !== !1 ? i : {};
}
function kE(n) {
  const { initial: i, animate: s } = LE(n, X.useContext(to));
  return X.useMemo(() => ({ initial: i, animate: s }), [ag(i), ag(s)]);
}
function ag(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const tr = {};
function HE(n) {
  for (const i in n)
    tr[i] = n[i], Qf(i) && (tr[i].isCSSVariable = !0);
}
function Rv(n, { layout: i, layoutId: s }) {
  return Ua.has(n) || n.startsWith("origin") || (i || s !== void 0) && (!!tr[n] || n === "opacity");
}
const qE = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, PE = Va.length;
function YE(n, i, s) {
  let l = "", o = !0;
  for (let m = 0; m < PE; m++) {
    const f = Va[m], d = n[f];
    if (d === void 0)
      continue;
    let p = !0;
    if (typeof d == "number" ? p = d === (f.startsWith("scale") ? 1 : 0) : p = parseFloat(d) === 0, !p || s) {
      const h = gv(d, am[f]);
      if (!p) {
        o = !1;
        const g = qE[f] || f;
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
    if (Ua.has(p)) {
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
  if (i.transform || (f || s ? l.transform = YE(i, n.transform, s) : l.transform && (l.transform = "none")), d) {
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
    !pe(i[l]) && !Rv(l, s) && (n[l] = i[l]);
}
function GE({ transformTemplate: n }, i) {
  return X.useMemo(() => {
    const s = fm();
    return cm(s, i, n), Object.assign({}, s.vars, s.style);
  }, [i]);
}
function XE(n, i) {
  const s = n.style || {}, l = {};
  return Ov(l, s, n), Object.assign(l, GE(n, i)), l;
}
function KE(n, i) {
  const s = {}, l = XE(n, i);
  return n.drag && n.dragListener !== !1 && (s.draggable = !1, l.userSelect = l.WebkitUserSelect = l.WebkitTouchCallout = "none", l.touchAction = n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`), n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (s.tabIndex = 0), s.style = l, s;
}
const QE = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, ZE = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function FE(n, i, s = 1, l = 0, o = !0) {
  n.pathLength = 1;
  const m = o ? QE : ZE;
  n[m.offset] = ut.transform(-l);
  const f = ut.transform(i), d = ut.transform(s);
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
  b.transform && (x.transform = b.transform, delete b.transform), (x.transform || b.transformOrigin) && (x.transformOrigin = b.transformOrigin ?? "50% 50%", delete b.transformOrigin), x.transform && (x.transformBox = g?.transformBox ?? "fill-box", delete b.transformBox), i !== void 0 && (b.x = i), s !== void 0 && (b.y = s), l !== void 0 && (b.scale = l), o !== void 0 && FE(b, o, m, f, !1);
}
const Dv = () => ({
  ...fm(),
  attrs: {}
}), Nv = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function WE(n, i, s, l) {
  const o = X.useMemo(() => {
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
const JE = [
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
      !!(JE.indexOf(n) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(n))
    )
  );
}
function $E(n, i, s, { latestValues: l }, o, m = !1) {
  const d = (mm(n) ? WE : KE)(i, l, o, n), p = BE(i, typeof n == "string", m), h = n !== X.Fragment ? { ...p, ...d, ref: s } : {}, { children: g } = i, b = X.useMemo(() => pe(g) ? g.get() : g, [g]);
  return X.createElement(n, {
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
function Ul(n) {
  return pe(n) ? n.get() : n;
}
function IE({ scrapeMotionValuesFromProps: n, createRenderState: i }, s, l, o) {
  return {
    latestValues: tM(s, l, o, n),
    renderState: i()
  };
}
function tM(n, i, s, l) {
  const o = {}, m = l(n, {});
  for (const x in m)
    o[x] = Ul(m[x]);
  let { initial: f, animate: d } = n;
  const p = no(n), h = Mv(n);
  i && h && !p && n.inherit !== !1 && (f === void 0 && (f = i.initial), d === void 0 && (d = i.animate));
  let g = s ? s.initial === !1 : !1;
  g = g || f === !1;
  const b = g ? d : f;
  if (b && typeof b != "boolean" && !eo(b)) {
    const x = Array.isArray(b) ? b : [b];
    for (let C = 0; C < x.length; C++) {
      const E = dm(n, x[C]);
      if (E) {
        const { transitionEnd: R, transition: j, ...U } = E;
        for (const k in U) {
          let q = U[k];
          if (Array.isArray(q)) {
            const J = g ? q.length - 1 : 0;
            q = q[J];
          }
          q !== null && (o[k] = q);
        }
        for (const k in R)
          o[k] = R[k];
      }
    }
  }
  return o;
}
const jv = (n) => (i, s) => {
  const l = X.useContext(to), o = X.useContext(Il), m = () => IE(n, i, l, o);
  return s ? m() : Lf(m);
};
function hm(n, i, s) {
  const { style: l } = n, o = {};
  for (const m in l)
    (pe(l[m]) || i.style && pe(i.style[m]) || Rv(m, n) || s?.getValue(m)?.liveStyle !== void 0) && (o[m] = l[m]);
  return o;
}
const eM = /* @__PURE__ */ jv({
  scrapeMotionValuesFromProps: hm,
  createRenderState: fm
});
function _v(n, i, s) {
  const l = hm(n, i, s);
  for (const o in n)
    if (pe(n[o]) || pe(i[o])) {
      const m = Va.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      l[m] = n[o];
    }
  return l;
}
const nM = /* @__PURE__ */ jv({
  scrapeMotionValuesFromProps: _v,
  createRenderState: Dv
}), iM = Symbol.for("motionComponentSymbol");
function Ma(n) {
  return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current");
}
function aM(n, i, s) {
  return X.useCallback(
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
const pm = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), sM = "framerAppearId", zv = "data-" + pm(sM), Vv = X.createContext({});
function rM(n, i, s, l, o) {
  const { visualElement: m } = X.useContext(to), f = X.useContext(Av), d = X.useContext(Il), p = X.useContext(lm).reducedMotion, h = X.useRef(null);
  l = l || f.renderer, !h.current && l && (h.current = l(n, {
    visualState: i,
    parent: m,
    props: s,
    presenceContext: d,
    blockInitialAnimation: d ? d.initial === !1 : !1,
    reducedMotionConfig: p
  }));
  const g = h.current, b = X.useContext(Vv);
  g && !g.projection && o && (g.type === "html" || g.type === "svg") && lM(h.current, s, o, b);
  const x = X.useRef(!1);
  X.useInsertionEffect(() => {
    g && x.current && g.update(s, d);
  });
  const C = s[zv], E = X.useRef(!!C && !window.MotionHandoffIsComplete?.(C) && window.MotionHasOptimisedAnimation?.(C));
  return j0(() => {
    g && (x.current = !0, window.MotionIsMounted = !0, g.updateFeatures(), g.scheduleRenderMicrotask(), E.current && g.animationState && g.animationState.animateChanges());
  }), X.useEffect(() => {
    g && (!E.current && g.animationState && g.animationState.animateChanges(), E.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(C);
    }), E.current = !1));
  }), g;
}
function lM(n, i, s, l) {
  const { layoutId: o, layout: m, drag: f, dragConstraints: d, layoutScroll: p, layoutRoot: h, layoutCrossfade: g } = i;
  n.projection = new s(n.latestValues, i["data-framer-portal-id"] ? void 0 : Uv(n.parent)), n.projection.setOptions({
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
function Uv(n) {
  if (n)
    return n.options.allowProjection !== !1 ? n.projection : Uv(n.parent);
}
function Hc(n, { forwardMotionProps: i = !1 } = {}, s, l) {
  s && zE(s);
  const o = mm(n) ? nM : eM;
  function m(d, p) {
    let h;
    const g = {
      ...X.useContext(lm),
      ...d,
      layoutId: oM(d)
    }, { isStatic: b } = g, x = kE(d), C = o(d, b);
    if (!b && kf) {
      uM();
      const E = cM(g);
      h = E.MeasureLayout, x.visualElement = rM(n, C, g, l, E.ProjectionNode);
    }
    return A.jsxs(to.Provider, { value: x, children: [h && x.visualElement ? A.jsx(h, { visualElement: x.visualElement, ...g }) : null, $E(n, d, aM(C, x.visualElement, p), C, b, i)] });
  }
  m.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
  const f = X.forwardRef(m);
  return f[iM] = n, f;
}
function oM({ layoutId: n }) {
  const i = X.useContext(Bf).id;
  return i && n !== void 0 ? i + "-" + n : n;
}
function uM(n, i) {
  X.useContext(Av).strict;
}
function cM(n) {
  const { drag: i, layout: s } = Na;
  if (!i && !s)
    return {};
  const l = { ...i, ...s };
  return {
    MeasureLayout: i?.isEnabled(n) || s?.isEnabled(n) ? l.MeasureLayout : void 0,
    ProjectionNode: l.ProjectionNode
  };
}
function fM(n, i) {
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
function mM({ x: n, y: i }) {
  return { top: i.min, right: n.max, bottom: i.max, left: n.min };
}
function dM(n, i) {
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
function Di(n) {
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
function hM(n, i, s, l = !1) {
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
    }), f && (i.x *= f.x.scale, i.y *= f.y.scale, kv(n, f)), l && Di(m.latestValues) && Oa(n, m.latestValues));
  }
  i.x < ug && i.x > og && (i.x = 1), i.y < ug && i.y > og && (i.y = 1);
}
function Ra(n, i) {
  n.min = n.min + i, n.max = n.max + i;
}
function cg(n, i, s, l, o = 0.5) {
  const m = Ht(n.min, n.max, o);
  bf(n, i, s, m, l);
}
function Oa(n, i) {
  cg(n.x, i.x, i.scaleX, i.scale, i.originX), cg(n.y, i.y, i.scaleY, i.scale, i.originY);
}
function Hv(n, i) {
  return Bv(dM(n.getBoundingClientRect(), i));
}
function pM(n, i, s) {
  const l = Hv(n, s), { scroll: o } = i;
  return o && (Ra(l.x, o.offset.x), Ra(l.y, o.offset.y)), l;
}
const fg = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Ca = () => ({
  x: fg(),
  y: fg()
}), mg = () => ({ min: 0, max: 0 }), Qt = () => ({
  x: mg(),
  y: mg()
}), xf = { current: null }, qv = { current: !1 };
function yM() {
  if (qv.current = !0, !!kf)
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"), i = () => xf.current = n.matches;
      n.addEventListener("change", i), i();
    } else
      xf.current = !1;
}
const gM = /* @__PURE__ */ new WeakMap();
function vM(n, i, s) {
  for (const l in i) {
    const o = i[l], m = s[l];
    if (pe(o))
      n.addValue(l, o);
    else if (pe(m))
      n.addValue(l, Da(o, { owner: n }));
    else if (m !== o)
      if (n.hasValue(l)) {
        const f = n.getValue(l);
        f.liveStyle === !0 ? f.jump(o) : f.hasAnimated || f.set(o);
      } else {
        const f = n.getStaticValue(l);
        n.addValue(l, Da(f !== void 0 ? f : o, { owner: n }));
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
class bM {
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
      const x = Ae.now();
      this.renderScheduledAt < x && (this.renderScheduledAt = x, Lt.render(this.render, !1, !0));
    };
    const { latestValues: p, renderState: h } = f;
    this.latestValues = p, this.baseTarget = { ...p }, this.initialValues = s.initial ? { ...p } : {}, this.renderState = h, this.parent = i, this.props = s, this.presenceContext = l, this.depth = i ? i.depth + 1 : 0, this.reducedMotionConfig = o, this.options = d, this.blockInitialAnimation = !!m, this.isControllingVariants = no(s), this.isVariantNode = Mv(s), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(i && i.current);
    const { willChange: g, ...b } = this.scrapeMotionValuesFromProps(s, {}, this);
    for (const x in b) {
      const C = b[x];
      p[x] !== void 0 && pe(C) && C.set(p[x], !1);
    }
  }
  mount(i) {
    this.current = i, gM.set(i, this), this.projection && !this.projection.instance && this.projection.mount(i), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((s, l) => this.bindToMotionValue(l, s)), qv.current || yM(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : xf.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
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
    const l = Ua.has(i);
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
    for (i in Na) {
      const s = Na[i];
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
    this.prevMotionValues = vM(this, this.scrapeMotionValuesFromProps(i, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    return l === void 0 && s !== void 0 && (l = Da(s === null ? void 0 : s, { owner: this }), this.addValue(i, l)), l;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(i, s) {
    let l = this.latestValues[i] !== void 0 || !this.current ? this.latestValues[i] : this.getBaseTargetFromProps(this.props, i) ?? this.readValueFromInstance(this.current, i, this.options);
    return l != null && (typeof l == "string" && (_0(l) || V0(l)) ? l = parseFloat(l) : !OE(l) && ri.test(s) && (l = yv(i, s)), this.setBaseTarget(i, pe(l) ? l.get() : l)), pe(l) ? l.get() : l;
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
    return o !== void 0 && !pe(o) ? o : this.initialValues[i] !== void 0 && l === void 0 ? void 0 : this.baseTarget[i];
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
class Pv extends bM {
  constructor() {
    super(...arguments), this.KeyframeResolver = yE;
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
    pe(i) && (this.childSubscription = i.on("change", (s) => {
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
function xM(n) {
  return window.getComputedStyle(n);
}
class SM extends Pv {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Yv;
  }
  readValueFromInstance(i, s) {
    if (Ua.has(s))
      return this.projection?.isProjecting ? mf(s) : VA(i, s);
    {
      const l = xM(i), o = (Qf(s) ? l.getPropertyValue(s) : l[s]) || 0;
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
function TM(n, i, s, l) {
  Yv(n, i, void 0, l);
  for (const o in i.attrs)
    n.setAttribute(Gv.has(o) ? o : pm(o), i.attrs[o]);
}
class wM extends Pv {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Qt;
  }
  getBaseTargetFromProps(i, s) {
    return i[s];
  }
  readValueFromInstance(i, s) {
    if (Ua.has(s)) {
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
    TM(i, s, l, o);
  }
  mount(i) {
    this.isSVGTag = Nv(i.tagName), super.mount(i);
  }
}
const AM = (n, i) => mm(n) ? new wM(i) : new SM(i, {
  allowProjection: n !== X.Fragment
});
function er(n, i, s) {
  const l = n.getProps();
  return dm(l, i, s !== void 0 ? s : l.custom, n);
}
const Sf = (n) => Array.isArray(n);
function EM(n, i, s) {
  n.hasValue(i) ? n.getValue(i).set(s) : n.addValue(i, Da(s));
}
function MM(n) {
  return Sf(n) ? n[n.length - 1] || 0 : n;
}
function RM(n, i) {
  const s = er(n, i);
  let { transitionEnd: l = {}, transition: o = {}, ...m } = s || {};
  m = { ...m, ...l };
  for (const f in m) {
    const d = MM(m[f]);
    EM(n, f, d);
  }
}
function OM(n) {
  return !!(pe(n) && n.add);
}
function Tf(n, i) {
  const s = n.getValue("willChange");
  if (OM(s))
    return s.add(i);
  if (!s && Dn.WillChange) {
    const l = new Dn.WillChange("auto");
    n.addValue("willChange", l), l.add(i);
  }
}
function Xv(n) {
  return n.props[zv];
}
const CM = (n) => n !== null;
function DM(n, { repeat: i, repeatType: s = "loop" }, l) {
  const o = n.filter(CM), m = i && s !== "loop" && i % 2 === 1 ? 0 : o.length - 1;
  return o[m];
}
const NM = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, jM = (n) => ({
  type: "spring",
  stiffness: 550,
  damping: n === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), _M = {
  type: "keyframes",
  duration: 0.8
}, zM = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, VM = (n, { keyframes: i }) => i.length > 2 ? _M : Ua.has(n) ? n.startsWith("scale") ? jM(i[1]) : NM : zM;
function UM({ when: n, delay: i, delayChildren: s, staggerChildren: l, staggerDirection: o, repeat: m, repeatType: f, repeatDelay: d, from: p, elapsed: h, ...g }) {
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
  UM(d) || Object.assign(g, VM(n, g)), g.duration && (g.duration = /* @__PURE__ */ un(g.duration)), g.repeatDelay && (g.repeatDelay = /* @__PURE__ */ un(g.repeatDelay)), g.from !== void 0 && (g.keyframes[0] = g.from);
  let b = !1;
  if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (g.duration = 0, g.delay === 0 && (b = !0)), (Dn.instantAnimations || Dn.skipAnimations) && (b = !0, g.duration = 0, g.delay = 0), g.allowFlatten = !d.type && !d.ease, b && !m && i.get() !== void 0) {
    const x = DM(g.keyframes, d);
    if (x !== void 0) {
      Lt.update(() => {
        g.onUpdate(x), g.onComplete();
      });
      return;
    }
  }
  return d.isSync ? new em(g) : new aE(g);
};
function BM({ protectedKeys: n, needsAnimating: i }, s) {
  const l = n.hasOwnProperty(s) && i[s] !== !0;
  return i[s] = !1, l;
}
function Kv(n, i, { delay: s = 0, transitionOverride: l, type: o } = {}) {
  let { transition: m = n.getDefaultTransition(), transitionEnd: f, ...d } = i;
  l && (m = l);
  const p = [], h = o && n.animationState && n.animationState.getState()[o];
  for (const g in d) {
    const b = n.getValue(g, n.latestValues[g] ?? null), x = d[g];
    if (x === void 0 || h && BM(h, g))
      continue;
    const C = {
      delay: s,
      ...im(m || {}, g)
    }, E = b.get();
    if (E !== void 0 && !b.isAnimating && !Array.isArray(x) && x === E && !C.velocity)
      continue;
    let R = !1;
    if (window.MotionHandoffAnimation) {
      const U = Xv(n);
      if (U) {
        const k = window.MotionHandoffAnimation(U, g, Lt);
        k !== null && (C.startTime = k, R = !0);
      }
    }
    Tf(n, g), b.start(ym(g, b, x, n.shouldReduceMotion && mv.has(g) ? { type: !1 } : C, n, R));
    const j = b.animation;
    j && p.push(j);
  }
  return f && Promise.all(p).then(() => {
    Lt.update(() => {
      f && RM(n, f);
    });
  }), p;
}
function wf(n, i, s = {}) {
  const l = er(n, i, s.type === "exit" ? n.presenceContext?.custom : void 0);
  let { transition: o = n.getDefaultTransition() || {} } = l || {};
  s.transitionOverride && (o = s.transitionOverride);
  const m = l ? () => Promise.all(Kv(n, l, s)) : () => Promise.resolve(), f = n.variantChildren && n.variantChildren.size ? (p = 0) => {
    const { delayChildren: h = 0, staggerChildren: g, staggerDirection: b } = o;
    return LM(n, i, p, h, g, b, s);
  } : () => Promise.resolve(), { when: d } = o;
  if (d) {
    const [p, h] = d === "beforeChildren" ? [m, f] : [f, m];
    return p().then(() => h());
  } else
    return Promise.all([m(), f(s.delay)]);
}
function LM(n, i, s = 0, l = 0, o = 0, m = 1, f) {
  const d = [], p = n.variantChildren.size, h = (p - 1) * o, g = typeof l == "function", b = g ? (x) => l(x, p) : (
    // Support deprecated staggerChildren
    m === 1 ? (x = 0) => x * o : (x = 0) => h - x * o
  );
  return Array.from(n.variantChildren).sort(kM).forEach((x, C) => {
    x.notify("AnimationStart", i), d.push(wf(x, i, {
      ...f,
      delay: s + (g ? 0 : l) + b(C)
    }).then(() => x.notify("AnimationComplete", i)));
  }), Promise.all(d);
}
function kM(n, i) {
  return n.sortNodePosition(i);
}
function HM(n, i, s = {}) {
  n.notify("AnimationStart", i);
  let l;
  if (Array.isArray(i)) {
    const o = i.map((m) => wf(n, m, s));
    l = Promise.all(o);
  } else if (typeof i == "string")
    l = wf(n, i, s);
  else {
    const o = typeof i == "function" ? er(n, i, s.custom) : i;
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
const qM = um.length;
function Zv(n) {
  if (!n)
    return;
  if (!n.isControllingVariants) {
    const s = n.parent ? Zv(n.parent) || {} : {};
    return n.props.initial !== void 0 && (s.initial = n.props.initial), s;
  }
  const i = {};
  for (let s = 0; s < qM; s++) {
    const l = um[s], o = n.props[l];
    (Is(o) || o === !1) && (i[l] = o);
  }
  return i;
}
const PM = [...om].reverse(), YM = om.length;
function GM(n) {
  return (i) => Promise.all(i.map(({ animation: s, options: l }) => HM(n, s, l)));
}
function XM(n) {
  let i = GM(n), s = hg(), l = !0;
  const o = (p) => (h, g) => {
    const b = er(n, g, p === "exit" ? n.presenceContext?.custom : void 0);
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
    for (let j = 0; j < YM; j++) {
      const U = PM[j], k = s[U], q = h[U] !== void 0 ? h[U] : g[U], J = Is(q), Q = U === p ? k.isActive : null;
      Q === !1 && (E = j);
      let G = q === g[U] && q !== h[U] && J;
      if (G && l && n.manuallyAnimateOnMount && (G = !1), k.protectedKeys = { ...C }, // If it isn't active and hasn't *just* been set as inactive
      !k.isActive && Q === null || // If we didn't and don't have any defined prop for this animation type
      !q && !k.prevProp || // Or if the prop doesn't define an animation
      eo(q) || typeof q == "boolean")
        continue;
      const $ = KM(k.prevProp, q);
      let Y = $ || // If we're making this variant active, we want to always make it active
      U === p && k.isActive && !G && J || // If we removed a higher-priority variant (i is in reverse order)
      j > E && J, lt = !1;
      const St = Array.isArray(q) ? q : [q];
      let _t = St.reduce(o(U), {});
      Q === !1 && (_t = {});
      const { prevResolvedValues: Ut = {} } = k, At = {
        ...Ut,
        ..._t
      }, qt = (B) => {
        Y = !0, x.has(B) && (lt = !0, x.delete(B)), k.needsAnimating[B] = !0;
        const z = n.getValue(B);
        z && (z.liveStyle = !1);
      };
      for (const B in At) {
        const z = _t[B], ct = Ut[B];
        if (C.hasOwnProperty(B))
          continue;
        let bt = !1;
        Sf(z) && Sf(ct) ? bt = !Qv(z, ct) : bt = z !== ct, bt ? z != null ? qt(B) : x.add(B) : z !== void 0 && x.has(B) ? qt(B) : k.protectedKeys[B] = !0;
      }
      k.prevProp = q, k.prevResolvedValues = _t, k.isActive && (C = { ...C, ..._t }), l && n.blockInitialAnimation && (Y = !1), Y && (!(G && $) || lt) && b.push(...St.map((B) => ({
        animation: B,
        options: { type: U }
      })));
    }
    if (x.size) {
      const j = {};
      if (typeof h.initial != "boolean") {
        const U = er(n, Array.isArray(h.initial) ? h.initial[0] : h.initial);
        U && U.transition && (j.transition = U.transition);
      }
      x.forEach((U) => {
        const k = n.getBaseTarget(U), q = n.getValue(U);
        q && (q.liveStyle = !0), j[U] = k ?? null;
      }), b.push({ animation: j });
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
function KM(n, i) {
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
class QM extends li {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(i) {
    super(i), i.animationState || (i.animationState = XM(i));
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
let ZM = 0;
class FM extends li {
  constructor() {
    super(...arguments), this.id = ZM++;
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
const WM = {
  animation: {
    Feature: QM
  },
  exit: {
    Feature: FM
  }
};
function nr(n, i, s, l = { passive: !0 }) {
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
const JM = (n) => (i) => rm(i) && n(i, ur(i));
function Ks(n, i, s, l) {
  return nr(n, i, JM(s), l);
}
const Fv = 1e-4, $M = 1 - Fv, IM = 1 + Fv, Wv = 0.01, tR = 0 - Wv, eR = 0 + Wv;
function ve(n) {
  return n.max - n.min;
}
function nR(n, i, s) {
  return Math.abs(n - i) <= s;
}
function pg(n, i, s, l = 0.5) {
  n.origin = l, n.originPoint = Ht(i.min, i.max, n.origin), n.scale = ve(s) / ve(i), n.translate = Ht(s.min, s.max, n.origin) - n.originPoint, (n.scale >= $M && n.scale <= IM || isNaN(n.scale)) && (n.scale = 1), (n.translate >= tR && n.translate <= eR || isNaN(n.translate)) && (n.translate = 0);
}
function Qs(n, i, s, l) {
  pg(n.x, i.x, s.x, l ? l.originX : void 0), pg(n.y, i.y, s.y, l ? l.originY : void 0);
}
function yg(n, i, s) {
  n.min = s.min + i.min, n.max = n.min + ve(i);
}
function iR(n, i, s) {
  yg(n.x, i.x, s.x), yg(n.y, i.y, s.y);
}
function gg(n, i, s) {
  n.min = i.min - s.min, n.max = n.min + ve(i);
}
function Zs(n, i, s) {
  gg(n.x, i.x, s.x), gg(n.y, i.y, s.y);
}
function Ke(n) {
  return [n("x"), n("y")];
}
const Jv = ({ current: n }) => n ? n.ownerDocument.defaultView : null, vg = (n, i) => Math.abs(n - i);
function aR(n, i) {
  const s = vg(n.x, i.x), l = vg(n.y, i.y);
  return Math.sqrt(s ** 2 + l ** 2);
}
class $v {
  constructor(i, s, { transformPagePoint: l, contextWindow: o = window, dragSnapToOrigin: m = !1, distanceThreshold: f = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const x = Yc(this.lastMoveEventInfo, this.history), C = this.startEvent !== null, E = aR(x.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!C && !E)
        return;
      const { point: R } = x, { timestamp: j } = ce;
      this.history.push({ ...R, timestamp: j });
      const { onStart: U, onMove: k } = this.handlers;
      C || (U && U(this.lastMoveEvent, x), this.startEvent = this.lastMoveEvent), k && k(this.lastMoveEvent, x);
    }, this.handlePointerMove = (x, C) => {
      this.lastMoveEvent = x, this.lastMoveEventInfo = Pc(C, this.transformPagePoint), Lt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (x, C) => {
      this.end();
      const { onEnd: E, onSessionEnd: R, resumeAnimation: j } = this.handlers;
      if (this.dragSnapToOrigin && j && j(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const U = Yc(x.type === "pointercancel" ? this.lastMoveEventInfo : Pc(C, this.transformPagePoint), this.history);
      this.startEvent && E && E(x, U), R && R(x, U);
    }, !rm(i))
      return;
    this.dragSnapToOrigin = m, this.handlers = s, this.transformPagePoint = l, this.distanceThreshold = f, this.contextWindow = o || window;
    const d = ur(i), p = Pc(d, this.transformPagePoint), { point: h } = p, { timestamp: g } = ce;
    this.history = [{ ...h, timestamp: g }];
    const { onSessionStart: b } = s;
    b && b(i, Yc(p, this.history)), this.removeListeners = rr(Ks(this.contextWindow, "pointermove", this.handlePointerMove), Ks(this.contextWindow, "pointerup", this.handlePointerUp), Ks(this.contextWindow, "pointercancel", this.handlePointerUp));
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
    offset: bg(n, sR(i)),
    velocity: rR(i, 0.1)
  };
}
function sR(n) {
  return n[0];
}
function Iv(n) {
  return n[n.length - 1];
}
function rR(n, i) {
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
function lR(n, { min: i, max: s }, l) {
  return i !== void 0 && n < i ? n = l ? Ht(i, n, l.min) : Math.max(n, i) : s !== void 0 && n > s && (n = l ? Ht(s, n, l.max) : Math.min(n, s)), n;
}
function xg(n, i, s) {
  return {
    min: i !== void 0 ? n.min + i : void 0,
    max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0
  };
}
function oR(n, { top: i, left: s, bottom: l, right: o }) {
  return {
    x: xg(n.x, s, o),
    y: xg(n.y, i, l)
  };
}
function Sg(n, i) {
  let s = i.min - n.min, l = i.max - n.max;
  return i.max - i.min < n.max - n.min && ([s, l] = [l, s]), { min: s, max: l };
}
function uR(n, i) {
  return {
    x: Sg(n.x, i.x),
    y: Sg(n.y, i.y)
  };
}
function cR(n, i) {
  let s = 0.5;
  const l = ve(n), o = ve(i);
  return o > l ? s = /* @__PURE__ */ Ws(i.min, i.max - l, n.min) : l > o && (s = /* @__PURE__ */ Ws(n.min, n.max - o, i.min)), Cn(0, 1, s);
}
function fR(n, i) {
  const s = {};
  return i.min !== void 0 && (s.min = i.min - n.min), i.max !== void 0 && (s.max = i.max - n.min), s;
}
const Af = 0.35;
function mR(n = Af) {
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
const dR = /* @__PURE__ */ new WeakMap();
class hR {
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
      const { drag: C, dragPropagation: E, onDragStart: R } = this.getProps();
      if (C && !E && (this.openDragLock && this.openDragLock(), this.openDragLock = xE(C), !this.openDragLock))
        return;
      this.latestPointerEvent = b, this.latestPanInfo = x, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Ke((U) => {
        let k = this.getAxisMotionValue(U).get() || 0;
        if (fn.test(k)) {
          const { projection: q } = this.visualElement;
          if (q && q.layout) {
            const J = q.layout.layoutBox[U];
            J && (k = ve(J) * (parseFloat(k) / 100));
          }
        }
        this.originPoint[U] = k;
      }), R && Lt.postRender(() => R(b, x)), Tf(this.visualElement, "transform");
      const { animationState: j } = this.visualElement;
      j && j.setActive("whileDrag", !0);
    }, d = (b, x) => {
      this.latestPointerEvent = b, this.latestPanInfo = x;
      const { dragPropagation: C, dragDirectionLock: E, onDirectionLock: R, onDrag: j } = this.getProps();
      if (!C && !this.openDragLock)
        return;
      const { offset: U } = x;
      if (E && this.currentDirection === null) {
        this.currentDirection = pR(U), this.currentDirection !== null && R && R(this.currentDirection);
        return;
      }
      this.updateAxis("x", x.point, U), this.updateAxis("y", x.point, U), this.visualElement.render(), j && j(b, x);
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
    this.constraints && this.constraints[i] && (f = lR(f, this.constraints[i], this.elastic[i])), m.set(f);
  }
  resolveConstraints() {
    const { dragConstraints: i, dragElastic: s } = this.getProps(), l = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, o = this.constraints;
    i && Ma(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && l ? this.constraints = oR(l.layoutBox, i) : this.constraints = !1, this.elastic = mR(s), o !== this.constraints && l && this.constraints && !this.hasMutatedConstraints && Ke((m) => {
      this.constraints !== !1 && this.getAxisMotionValue(m) && (this.constraints[m] = fR(l.layoutBox[m], this.constraints[m]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: s } = this.getProps();
    if (!i || !Ma(i))
      return !1;
    const l = i.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const m = pM(l, o.root, this.visualElement.getTransformPagePoint());
    let f = uR(o.layout.layoutBox, m);
    if (s) {
      const d = s(mM(f));
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
    if (!Ma(s) || !l || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Ke((f) => {
      const d = this.getAxisMotionValue(f);
      if (d && this.constraints !== !1) {
        const p = d.get();
        o[f] = cR({ min: p, max: p }, this.constraints[f]);
      }
    });
    const { transformTemplate: m } = this.visualElement.getProps();
    this.visualElement.current.style.transform = m ? m({}, "") : "none", l.root && l.root.updateScroll(), l.updateLayout(), this.resolveConstraints(), Ke((f) => {
      if (!_l(f, i, null))
        return;
      const d = this.getAxisMotionValue(f), { min: p, max: h } = this.constraints[f];
      d.set(Ht(p, h, o[f]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    dR.set(this.visualElement, this);
    const i = this.visualElement.current, s = Ks(i, "pointerdown", (p) => {
      const { drag: h, dragListener: g = !0 } = this.getProps();
      h && g && this.start(p);
    }), l = () => {
      const { dragConstraints: p } = this.getProps();
      Ma(p) && p.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, m = o.addEventListener("measure", l);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), Lt.read(l);
    const f = nr(window, "resize", () => this.scalePositionWithinConstraints()), d = o.addEventListener("didUpdate", ({ delta: p, hasLayoutChanged: h }) => {
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
function pR(n, i = 10) {
  let s = null;
  return Math.abs(n.y) > i ? s = "y" : Math.abs(n.x) > i && (s = "x"), s;
}
class yR extends li {
  constructor(i) {
    super(i), this.removeGroupControls = Qe, this.removeListeners = Qe, this.controls = new hR(i);
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
class gR extends li {
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
    this.removePointerDownListener = Ks(this.node.current, "pointerdown", (i) => this.onPointerDown(i));
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
const qs = {
  correct: (n, i) => {
    if (!i.target)
      return n;
    if (typeof n == "string")
      if (ut.test(n))
        n = parseFloat(n);
      else
        return n;
    const s = Eg(n, i.target.x), l = Eg(n, i.target.y);
    return `${s}% ${l}%`;
  }
}, vR = {
  correct: (n, { treeScale: i, projectionDelta: s }) => {
    const l = n, o = ri.parse(n);
    if (o.length > 5)
      return l;
    const m = ri.createTransformer(n), f = typeof o[0] != "number" ? 1 : 0, d = s.x.scale * i.x, p = s.y.scale * i.y;
    o[0 + f] /= d, o[1 + f] /= p;
    const h = Ht(d, p, 0.5);
    return typeof o[2 + f] == "number" && (o[2 + f] /= h), typeof o[3 + f] == "number" && (o[3 + f] /= h), m(o);
  }
};
let Mg = !1;
class bR extends X.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: i, layoutGroup: s, switchLayoutGroup: l, layoutId: o } = this.props, { projection: m } = i;
    HE(xR), m && (s.group && s.group.add(m), l && l.register && o && l.register(m), Mg && m.root.didUpdate(), m.addEventListener("animationComplete", () => {
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
  const [i, s] = wv(), l = X.useContext(Bf);
  return A.jsx(bR, { ...n, layoutGroup: l, switchLayoutGroup: X.useContext(Vv), isPresent: i, safeToRemove: s });
}
const xR = {
  borderRadius: {
    ...qs,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: qs,
  borderTopRightRadius: qs,
  borderBottomLeftRadius: qs,
  borderBottomRightRadius: qs,
  boxShadow: vR
};
function SR(n, i, s) {
  const l = pe(n) ? n : Da(n);
  return l.start(ym("", l, i, s)), l.animation;
}
const TR = (n, i) => n.depth - i.depth;
class wR {
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
    this.isDirty && this.children.sort(TR), this.isDirty = !1, this.children.forEach(i);
  }
}
function AR(n, i) {
  const s = Ae.now(), l = ({ timestamp: o }) => {
    const m = o - s;
    m >= i && (si(l), n(m - i));
  };
  return Lt.setup(l, !0), () => si(l);
}
const eb = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], ER = eb.length, Rg = (n) => typeof n == "string" ? parseFloat(n) : n, Og = (n) => typeof n == "number" || ut.test(n);
function MR(n, i, s, l, o, m) {
  o ? (n.opacity = Ht(0, s.opacity ?? 1, RR(l)), n.opacityExit = Ht(i.opacity ?? 1, 0, OR(l))) : m && (n.opacity = Ht(i.opacity ?? 1, s.opacity ?? 1, l));
  for (let f = 0; f < ER; f++) {
    const d = `border${eb[f]}Radius`;
    let p = Cg(i, d), h = Cg(s, d);
    if (p === void 0 && h === void 0)
      continue;
    p || (p = 0), h || (h = 0), p === 0 || h === 0 || Og(p) === Og(h) ? (n[d] = Math.max(Ht(Rg(p), Rg(h), l), 0), (fn.test(h) || fn.test(p)) && (n[d] += "%")) : n[d] = h;
  }
  (i.rotate || s.rotate) && (n.rotate = Ht(i.rotate || 0, s.rotate || 0, l));
}
function Cg(n, i) {
  return n[i] !== void 0 ? n[i] : n.borderRadius;
}
const RR = /* @__PURE__ */ nb(0, 0.5, Y0), OR = /* @__PURE__ */ nb(0.5, 0.95, Qe);
function nb(n, i, s) {
  return (l) => l < n ? 0 : l > i ? 1 : s(/* @__PURE__ */ Ws(n, i, l));
}
function Dg(n, i) {
  n.min = i.min, n.max = i.max;
}
function Xe(n, i) {
  Dg(n.x, i.x), Dg(n.y, i.y);
}
function Ng(n, i) {
  n.translate = i.translate, n.scale = i.scale, n.originPoint = i.originPoint, n.origin = i.origin;
}
function jg(n, i, s, l, o) {
  return n -= i, n = Zl(n, 1 / s, l), o !== void 0 && (n = Zl(n, 1 / o, l)), n;
}
function CR(n, i = 0, s = 1, l = 0.5, o, m = n, f = n) {
  if (fn.test(i) && (i = parseFloat(i), i = Ht(f.min, f.max, i / 100) - f.min), typeof i != "number")
    return;
  let d = Ht(m.min, m.max, l);
  n === m && (d -= i), n.min = jg(n.min, i, s, d, o), n.max = jg(n.max, i, s, d, o);
}
function _g(n, i, [s, l, o], m, f) {
  CR(n, i[s], i[l], i[o], i.scale, m, f);
}
const DR = ["x", "scaleX", "originX"], NR = ["y", "scaleY", "originY"];
function zg(n, i, s, l) {
  _g(n.x, i, DR, s ? s.x : void 0, l ? l.x : void 0), _g(n.y, i, NR, s ? s.y : void 0, l ? l.y : void 0);
}
function Vg(n) {
  return n.translate === 0 && n.scale === 1;
}
function ib(n) {
  return Vg(n.x) && Vg(n.y);
}
function Ug(n, i) {
  return n.min === i.min && n.max === i.max;
}
function jR(n, i) {
  return Ug(n.x, i.x) && Ug(n.y, i.y);
}
function Bg(n, i) {
  return Math.round(n.min) === Math.round(i.min) && Math.round(n.max) === Math.round(i.max);
}
function ab(n, i) {
  return Bg(n.x, i.x) && Bg(n.y, i.y);
}
function Lg(n) {
  return ve(n.x) / ve(n.y);
}
function kg(n, i) {
  return n.translate === i.translate && n.scale === i.scale && n.originPoint === i.originPoint;
}
class _R {
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
function zR(n, i, s) {
  let l = "";
  const o = n.x.translate / i.x, m = n.y.translate / i.y, f = s?.z || 0;
  if ((o || m || f) && (l = `translate3d(${o}px, ${m}px, ${f}px) `), (i.x !== 1 || i.y !== 1) && (l += `scale(${1 / i.x}, ${1 / i.y}) `), s) {
    const { transformPerspective: h, rotate: g, rotateX: b, rotateY: x, skewX: C, skewY: E } = s;
    h && (l = `perspective(${h}px) ${l}`), g && (l += `rotate(${g}deg) `), b && (l += `rotateX(${b}deg) `), x && (l += `rotateY(${x}deg) `), C && (l += `skewX(${C}deg) `), E && (l += `skewY(${E}deg) `);
  }
  const d = n.x.scale * i.x, p = n.y.scale * i.y;
  return (d !== 1 || p !== 1) && (l += `scale(${d}, ${p})`), l || "none";
}
const Gc = ["", "X", "Y", "Z"], VR = 1e3;
let UR = 0;
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
      this.id = UR++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(kR), this.nodes.forEach(YR), this.nodes.forEach(GR), this.nodes.forEach(HR);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = f, this.root = d ? d.root || d : this, this.path = d ? [...d.path, d] : [], this.parent = d, this.depth = d ? d.depth + 1 : 0;
      for (let p = 0; p < this.path.length; p++)
        this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new wR());
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
      this.isSVG = Tv(f) && !ME(f), this.instance = f;
      const { layoutId: d, layout: p, visualElement: h } = this.options;
      if (h && !h.current && h.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (p || d) && (this.isLayoutDirty = !0), n) {
        let g, b = 0;
        const x = () => this.root.updateBlockedByResize = !1;
        Lt.read(() => {
          b = window.innerWidth;
        }), n(f, () => {
          const C = window.innerWidth;
          C !== b && (b = C, this.root.updateBlockedByResize = !0, g && g(), g = AR(x, 250), Bl.hasAnimatedSinceResize && (Bl.hasAnimatedSinceResize = !1, this.nodes.forEach(Pg)));
        });
      }
      d && this.root.registerSharedNode(d, this), this.options.animate !== !1 && h && (d || p) && this.addEventListener("didUpdate", ({ delta: g, hasLayoutChanged: b, hasRelativeLayoutChanged: x, layout: C }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const E = this.options.transition || h.getDefaultTransition() || FR, { onLayoutAnimationStart: R, onLayoutAnimationComplete: j } = h.getProps(), U = !this.targetLayout || !ab(this.targetLayout, C), k = !b && x;
        if (this.options.layoutRoot || this.resumeFrom || k || b && (U || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const q = {
            ...im(E, "layout"),
            onPlay: R,
            onComplete: j
          };
          (h.shouldReduceMotion || this.options.layoutRoot) && (q.delay = 0, q.type = !1), this.startAnimation(q), this.setAnimationOrigin(g, k);
        } else
          b || Pg(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = C;
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(XR), this.animationId++);
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
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(PR), this.nodes.forEach(BR), this.nodes.forEach(LR)) : this.nodes.forEach(qg), this.clearAllSnapshots();
      const d = Ae.now();
      ce.delta = Cn(0, 1e3 / 60, d - ce.timestamp), ce.timestamp = d, ce.isProcessing = !0, zc.update.process(ce), zc.preRender.process(ce), zc.render.process(ce), ce.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, sm.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(qR), this.sharedNodes.forEach(KR);
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
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !ve(this.snapshot.measuredBox.x) && !ve(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
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
      f && this.instance && (d || Di(this.latestValues) || g) && (o(this.instance, h), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(f = !0) {
      const d = this.measurePageBox();
      let p = this.removeElementScroll(d);
      return f && (p = this.removeTransform(p)), WR(p), {
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
      if (!(this.scroll?.wasRoot || this.path.some(JR))) {
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
        }), Di(g.latestValues) && Oa(p, g.latestValues);
      }
      return Di(this.latestValues) && Oa(p, this.latestValues), p;
    }
    removeTransform(f) {
      const d = Qt();
      Xe(d, f);
      for (let p = 0; p < this.path.length; p++) {
        const h = this.path[p];
        if (!h.instance || !Di(h.latestValues))
          continue;
        vf(h.latestValues) && h.updateSnapshot();
        const g = Qt(), b = h.measurePageBox();
        Xe(g, b), zg(d, h.latestValues, h.snapshot ? h.snapshot.layoutBox : void 0, g);
      }
      return Di(this.latestValues) && zg(d, this.latestValues), d;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ce.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      const d = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = d.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = d.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = d.isSharedProjectionDirty);
      const p = !!this.resumingFrom || this !== d;
      if (!(f || p && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: g, layoutId: b } = this.options;
      if (!(!this.layout || !(g || b))) {
        if (this.resolvedRelativeTargetAt = ce.timestamp, !this.targetDelta && !this.relativeTarget) {
          const x = this.getClosestProjectingParent();
          x && x.layout && this.animationProgress !== 1 ? (this.relativeParent = x, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Qt(), this.relativeTargetOrigin = Qt(), Zs(this.relativeTargetOrigin, this.layout.layoutBox, x.layout.layoutBox), Xe(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Qt(), this.targetWithTransforms = Qt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), iR(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Xe(this.target, this.layout.layoutBox), kv(this.target, this.targetDelta)) : Xe(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const x = this.getClosestProjectingParent();
          x && !!x.resumingFrom == !!this.resumingFrom && !x.options.layoutScroll && x.target && this.animationProgress !== 1 ? (this.relativeParent = x, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Qt(), this.relativeTargetOrigin = Qt(), Zs(this.relativeTargetOrigin, this.target, x.target), Xe(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
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
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (p = !1), d && (this.isSharedProjectionDirty || this.isTransformDirty) && (p = !1), this.resolvedRelativeTargetAt === ce.timestamp && (p = !1), p)
        return;
      const { layout: h, layoutId: g } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(h || g))
        return;
      Xe(this.layoutCorrected, this.layout.layoutBox);
      const b = this.treeScale.x, x = this.treeScale.y;
      hM(this.layoutCorrected, this.treeScale, this.path, d), f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox, f.targetWithTransforms = Qt());
      const { target: C } = f;
      if (!C) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ng(this.prevProjectionDelta.x, this.projectionDelta.x), Ng(this.prevProjectionDelta.y, this.projectionDelta.y)), Qs(this.projectionDelta, this.layoutCorrected, C, this.latestValues), (this.treeScale.x !== b || this.treeScale.y !== x || !kg(this.projectionDelta.x, this.prevProjectionDelta.x) || !kg(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", C));
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
      this.prevProjectionDelta = Ca(), this.projectionDelta = Ca(), this.projectionDeltaWithTransform = Ca();
    }
    setAnimationOrigin(f, d = !1) {
      const p = this.snapshot, h = p ? p.latestValues : {}, g = { ...this.latestValues }, b = Ca();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !d;
      const x = Qt(), C = p ? p.source : void 0, E = this.layout ? this.layout.source : void 0, R = C !== E, j = this.getStack(), U = !j || j.members.length <= 1, k = !!(R && !U && this.options.crossfade === !0 && !this.path.some(ZR));
      this.animationProgress = 0;
      let q;
      this.mixTargetDelta = (J) => {
        const Q = J / 1e3;
        Yg(b.x, f.x, Q), Yg(b.y, f.y, Q), this.setTargetDelta(b), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Zs(x, this.layout.layoutBox, this.relativeParent.layout.layoutBox), QR(this.relativeTarget, this.relativeTargetOrigin, x, Q), q && jR(this.relativeTarget, q) && (this.isProjectionDirty = !1), q || (q = Qt()), Xe(q, this.relativeTarget)), R && (this.animationValues = g, MR(g, h, this.latestValues, Q, k, U)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = Q;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (si(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Lt.update(() => {
        Bl.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Da(0)), this.currentAnimation = SR(this.motionValue, [0, 1e3], {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(VR), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let { targetWithTransforms: d, target: p, layout: h, latestValues: g } = f;
      if (!(!d || !p || !h)) {
        if (this !== f && this.layout && h && lb(this.options.animationType, this.layout.layoutBox, h.layoutBox)) {
          p = this.target || Qt();
          const b = ve(this.layout.layoutBox.x);
          p.x.min = f.target.x.min, p.x.max = p.x.min + b;
          const x = ve(this.layout.layoutBox.y);
          p.y.min = f.target.y.min, p.y.max = p.y.min + x;
        }
        Xe(d, p), Oa(d, g), Qs(this.projectionDeltaWithTransform, this.layoutCorrected, d, g);
      }
    }
    registerSharedNode(f, d) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new _R()), this.sharedNodes.get(f).add(d);
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
        this.needsReset = !1, f.visibility = "", f.opacity = "", f.pointerEvents = Ul(d?.pointerEvents) || "", f.transform = p ? p(this.latestValues, "") : "none";
        return;
      }
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, f.pointerEvents = Ul(d?.pointerEvents) || ""), this.hasProjected && !Di(this.latestValues) && (f.transform = p ? p({}, "") : "none", this.hasProjected = !1);
        return;
      }
      f.visibility = "";
      const g = h.animationValues || h.latestValues;
      this.applyTransformsToTarget();
      let b = zR(this.projectionDeltaWithTransform, this.treeScale, g);
      p && (b = p(g, b)), f.transform = b;
      const { x, y: C } = this.projectionDelta;
      f.transformOrigin = `${x.origin * 100}% ${C.origin * 100}% 0`, h.animationValues ? f.opacity = h === this ? g.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : g.opacityExit : f.opacity = h === this ? g.opacity !== void 0 ? g.opacity : "" : g.opacityExit !== void 0 ? g.opacityExit : 0;
      for (const E in tr) {
        if (g[E] === void 0)
          continue;
        const { correct: R, applyTo: j, isCSSVariable: U } = tr[E], k = b === "none" ? g[E] : R(g[E], h);
        if (j) {
          const q = j.length;
          for (let J = 0; J < q; J++)
            f[j[J]] = k;
        } else
          U ? this.options.visualElement.renderState.vars[E] = k : f[E] = k;
      }
      this.options.layoutId && (f.pointerEvents = h === this ? Ul(d?.pointerEvents) || "" : "none");
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
function BR(n) {
  n.updateLayout();
}
function LR(n) {
  const i = n.resumeFrom?.snapshot || n.snapshot;
  if (n.isLead() && n.layout && i && n.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: l } = n.layout, { animationType: o } = n.options, m = i.source !== n.layout.source;
    o === "size" ? Ke((g) => {
      const b = m ? i.measuredBox[g] : i.layoutBox[g], x = ve(b);
      b.min = s[g].min, b.max = b.min + x;
    }) : lb(o, i.layoutBox, s) && Ke((g) => {
      const b = m ? i.measuredBox[g] : i.layoutBox[g], x = ve(s[g]);
      b.max = b.min + x, n.relativeTarget && !n.currentAnimation && (n.isProjectionDirty = !0, n.relativeTarget[g].max = n.relativeTarget[g].min + x);
    });
    const f = Ca();
    Qs(f, s, i.layoutBox);
    const d = Ca();
    m ? Qs(d, n.applyTransform(l, !0), i.measuredBox) : Qs(d, s, i.layoutBox);
    const p = !ib(f);
    let h = !1;
    if (!n.resumeFrom) {
      const g = n.getClosestProjectingParent();
      if (g && !g.resumeFrom) {
        const { snapshot: b, layout: x } = g;
        if (b && x) {
          const C = Qt();
          Zs(C, i.layoutBox, b.layoutBox);
          const E = Qt();
          Zs(E, s, x.layoutBox), ab(C, E) || (h = !0), g.options.layoutRoot && (n.relativeTarget = E, n.relativeTargetOrigin = C, n.relativeParent = g);
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
function kR(n) {
  n.parent && (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty), n.isSharedProjectionDirty || (n.isSharedProjectionDirty = !!(n.isProjectionDirty || n.parent.isProjectionDirty || n.parent.isSharedProjectionDirty)), n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty));
}
function HR(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function qR(n) {
  n.clearSnapshot();
}
function Hg(n) {
  n.clearMeasurements();
}
function qg(n) {
  n.isLayoutDirty = !1;
}
function PR(n) {
  const { visualElement: i } = n.options;
  i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"), n.resetTransform();
}
function Pg(n) {
  n.finishAnimation(), n.targetDelta = n.relativeTarget = n.target = void 0, n.isProjectionDirty = !0;
}
function YR(n) {
  n.resolveTargetDelta();
}
function GR(n) {
  n.calcProjection();
}
function XR(n) {
  n.resetSkewAndRotation();
}
function KR(n) {
  n.removeLeadSnapshot();
}
function Yg(n, i, s) {
  n.translate = Ht(i.translate, 0, s), n.scale = Ht(i.scale, 1, s), n.origin = i.origin, n.originPoint = i.originPoint;
}
function Gg(n, i, s, l) {
  n.min = Ht(i.min, s.min, l), n.max = Ht(i.max, s.max, l);
}
function QR(n, i, s, l) {
  Gg(n.x, i.x, s.x, l), Gg(n.y, i.y, s.y, l);
}
function ZR(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const FR = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Xg = (n) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n), Kg = Xg("applewebkit/") && !Xg("chrome/") ? Math.round : Qe;
function Qg(n) {
  n.min = Kg(n.min), n.max = Kg(n.max);
}
function WR(n) {
  Qg(n.x), Qg(n.y);
}
function lb(n, i, s) {
  return n === "position" || n === "preserve-aspect" && !nR(Lg(i), Lg(s), 0.2);
}
function JR(n) {
  return n !== n.root && n.scroll?.wasRoot;
}
const $R = rb({
  attachResizeListener: (n, i) => nr(n, "resize", i),
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
      const n = new $R({});
      n.mount(window), n.setOptions({ layoutScroll: !0 }), Kc.current = n;
    }
    return Kc.current;
  },
  resetTransform: (n, i) => {
    n.style.transform = i !== void 0 ? i : "none";
  },
  checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed"
}), IR = {
  pan: {
    Feature: gR
  },
  drag: {
    Feature: yR,
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
class tO extends li {
  mount() {
    const { current: i } = this.node;
    i && (this.unmount = SE(i, (s, l) => (Zg(this.node, l, "Start"), (o) => Zg(this.node, o, "End"))));
  }
  unmount() {
  }
}
class eO extends li {
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
    this.unmount = rr(nr(this.node.current, "focus", () => this.onFocus()), nr(this.node.current, "blur", () => this.onBlur()));
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
class nO extends li {
  mount() {
    const { current: i } = this.node;
    i && (this.unmount = EE(i, (s, l) => (Fg(this.node, l, "Start"), (o, { success: m }) => Fg(this.node, o, m ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Ef = /* @__PURE__ */ new WeakMap(), Qc = /* @__PURE__ */ new WeakMap(), iO = (n) => {
  const i = Ef.get(n.target);
  i && i(n);
}, aO = (n) => {
  n.forEach(iO);
};
function sO({ root: n, ...i }) {
  const s = n || document;
  Qc.has(s) || Qc.set(s, {});
  const l = Qc.get(s), o = JSON.stringify(i);
  return l[o] || (l[o] = new IntersectionObserver(aO, { root: n, ...i })), l[o];
}
function rO(n, i, s) {
  const l = sO(i);
  return Ef.set(n, s), l.observe(n), () => {
    Ef.delete(n), l.unobserve(n);
  };
}
const lO = {
  some: 0,
  all: 1
};
class oO extends li {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: i = {} } = this.node.getProps(), { root: s, margin: l, amount: o = "some", once: m } = i, f = {
      root: s ? s.current : void 0,
      rootMargin: l,
      threshold: typeof o == "number" ? o : lO[o]
    }, d = (p) => {
      const { isIntersecting: h } = p;
      if (this.isInView === h || (this.isInView = h, m && !h && this.hasEnteredView))
        return;
      h && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", h);
      const { onViewportEnter: g, onViewportLeave: b } = this.node.getProps(), x = h ? g : b;
      x && x(p);
    };
    return rO(this.node.current, f, d);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: i, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(uO(i, s)) && this.startObserver();
  }
  unmount() {
  }
}
function uO({ viewport: n = {} }, { viewport: i = {} } = {}) {
  return (s) => n[s] !== i[s];
}
const cO = {
  inView: {
    Feature: oO
  },
  tap: {
    Feature: nO
  },
  focus: {
    Feature: eO
  },
  hover: {
    Feature: tO
  }
}, fO = {
  layout: {
    ProjectionNode: ob,
    MeasureLayout: tb
  }
}, mO = {
  ...WM,
  ...cO,
  ...IR,
  ...fO
}, ge = /* @__PURE__ */ fM(mO, AM), dO = {
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
}, hO = {
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
}, pO = {
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
}, yO = {
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
}, gO = {
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
}, vO = ({
  audioStream: n,
  isActive: i = !0,
  size: s = 56,
  // 14 * 4 (w-14 h-14)
  color: l = "rgba(255, 255, 255, 0.8)",
  sensitivity: o = 1
}) => {
  const [m, f] = X.useState(new Array(8).fill(0)), [d, p] = X.useState(!1), h = X.useRef(null), g = X.useRef(null), b = X.useRef(null), x = X.useRef(null), C = X.useRef(null);
  X.useEffect(() => {
    if (!n || !i) {
      E();
      return;
    }
    return (async () => {
      try {
        b.current = new (window.AudioContext || window.webkitAudioContext)(), h.current = b.current.createAnalyser(), h.current.fftSize = 64, h.current.smoothingTimeConstant = 0.8, C.current = b.current.createMediaStreamSource(n), C.current.connect(h.current);
        const U = h.current.frequencyBinCount;
        g.current = new Uint8Array(U), p(!0), R();
      } catch (U) {
        console.error("Error setting up audio analysis:", U);
      }
    })(), () => {
      E();
    };
  }, [n, i]);
  const E = () => {
    x.current && cancelAnimationFrame(x.current), C.current && C.current.disconnect(), b.current && b.current.state !== "closed" && b.current.close(), p(!1), f(new Array(8).fill(0));
  }, R = () => {
    if (!h.current || !g.current) return;
    const j = () => {
      if (!h.current || !g.current) return;
      h.current.getByteFrequencyData(g.current);
      const U = [], k = Math.floor(g.current.length / 8);
      for (let q = 0; q < 8; q++) {
        let J = 0;
        const Q = q * k, G = Q + k;
        for (let Y = Q; Y < G; Y++)
          J += g.current[Y];
        const $ = J / k / 255 * o;
        U.push(Math.min($, 1));
      }
      f(U), i && (x.current = requestAnimationFrame(j));
    };
    j();
  };
  return /* @__PURE__ */ A.jsx(
    "div",
    {
      className: "mimin-flex mimin-items-center mimin-justify-center",
      style: { width: s, height: s },
      children: d ? (
        // Real-time audio visualizer
        /* @__PURE__ */ A.jsx("div", { className: "mimin-flex mimin-items-end mimin-justify-center mimin-space-x-1", children: m.map((j, U) => /* @__PURE__ */ A.jsx(
          ge.div,
          {
            className: "mimin-rounded-full mimin-bg-current",
            style: {
              width: Math.max(2, s / 16),
              minHeight: Math.max(2, s / 16),
              backgroundColor: l,
              opacity: 0.7 + j * 0.3
            },
            animate: {
              height: Math.max(s / 16, j * s * 0.8),
              scaleY: 1 + j * 0.5
            },
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 30
            }
          },
          U
        )) })
      ) : (
        // Fallback animation (seperti sebelumnya)
        /* @__PURE__ */ A.jsx("div", { className: "mimin-flex mimin-items-center mimin-justify-center mimin-animate-pulse", children: /* @__PURE__ */ A.jsx("span", { className: "mimin-text-white mimin-text-sm", children: "Connecting..." }) })
      )
    }
  );
}, bO = ({ audioStream: n, isActive: i = !0 }) => /* @__PURE__ */ A.jsx(
  vO,
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
const { toString: xO } = Object.prototype, { getPrototypeOf: gm } = Object, { iterator: io, toStringTag: cb } = Symbol, ao = /* @__PURE__ */ ((n) => (i) => {
  const s = xO.call(i);
  return n[s] || (n[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), tn = (n) => (n = n.toLowerCase(), (i) => ao(i) === n), so = (n) => (i) => typeof i === n, { isArray: Ba } = Array, ir = so("undefined");
function SO(n) {
  return n !== null && !ir(n) && n.constructor !== null && !ir(n.constructor) && Ee(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const fb = tn("ArrayBuffer");
function TO(n) {
  let i;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(n) : i = n && n.buffer && fb(n.buffer), i;
}
const wO = so("string"), Ee = so("function"), mb = so("number"), ro = (n) => n !== null && typeof n == "object", AO = (n) => n === !0 || n === !1, Ll = (n) => {
  if (ao(n) !== "object")
    return !1;
  const i = gm(n);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(cb in n) && !(io in n);
}, EO = tn("Date"), MO = tn("File"), RO = tn("Blob"), OO = tn("FileList"), CO = (n) => ro(n) && Ee(n.pipe), DO = (n) => {
  let i;
  return n && (typeof FormData == "function" && n instanceof FormData || Ee(n.append) && ((i = ao(n)) === "formdata" || // detect form-data instance
  i === "object" && Ee(n.toString) && n.toString() === "[object FormData]"));
}, NO = tn("URLSearchParams"), [jO, _O, zO, VO] = ["ReadableStream", "Request", "Response", "Headers"].map(tn), UO = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function cr(n, i, { allOwnKeys: s = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let l, o;
  if (typeof n != "object" && (n = [n]), Ba(n))
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
const _i = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, hb = (n) => !ir(n) && n !== _i;
function Mf() {
  const { caseless: n } = hb(this) && this || {}, i = {}, s = (l, o) => {
    const m = n && db(i, o) || o;
    Ll(i[m]) && Ll(l) ? i[m] = Mf(i[m], l) : Ll(l) ? i[m] = Mf({}, l) : Ba(l) ? i[m] = l.slice() : i[m] = l;
  };
  for (let l = 0, o = arguments.length; l < o; l++)
    arguments[l] && cr(arguments[l], s);
  return i;
}
const BO = (n, i, s, { allOwnKeys: l } = {}) => (cr(i, (o, m) => {
  s && Ee(o) ? n[m] = ub(o, s) : n[m] = o;
}, { allOwnKeys: l }), n), LO = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), kO = (n, i, s, l) => {
  n.prototype = Object.create(i.prototype, l), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: i.prototype
  }), s && Object.assign(n.prototype, s);
}, HO = (n, i, s, l) => {
  let o, m, f;
  const d = {};
  if (i = i || {}, n == null) return i;
  do {
    for (o = Object.getOwnPropertyNames(n), m = o.length; m-- > 0; )
      f = o[m], (!l || l(f, n, i)) && !d[f] && (i[f] = n[f], d[f] = !0);
    n = s !== !1 && gm(n);
  } while (n && (!s || s(n, i)) && n !== Object.prototype);
  return i;
}, qO = (n, i, s) => {
  n = String(n), (s === void 0 || s > n.length) && (s = n.length), s -= i.length;
  const l = n.indexOf(i, s);
  return l !== -1 && l === s;
}, PO = (n) => {
  if (!n) return null;
  if (Ba(n)) return n;
  let i = n.length;
  if (!mb(i)) return null;
  const s = new Array(i);
  for (; i-- > 0; )
    s[i] = n[i];
  return s;
}, YO = /* @__PURE__ */ ((n) => (i) => n && i instanceof n)(typeof Uint8Array < "u" && gm(Uint8Array)), GO = (n, i) => {
  const l = (n && n[io]).call(n);
  let o;
  for (; (o = l.next()) && !o.done; ) {
    const m = o.value;
    i.call(n, m[0], m[1]);
  }
}, XO = (n, i) => {
  let s;
  const l = [];
  for (; (s = n.exec(i)) !== null; )
    l.push(s);
  return l;
}, KO = tn("HTMLFormElement"), QO = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, l, o) {
    return l.toUpperCase() + o;
  }
), Jg = (({ hasOwnProperty: n }) => (i, s) => n.call(i, s))(Object.prototype), ZO = tn("RegExp"), pb = (n, i) => {
  const s = Object.getOwnPropertyDescriptors(n), l = {};
  cr(s, (o, m) => {
    let f;
    (f = i(o, m, n)) !== !1 && (l[m] = f || o);
  }), Object.defineProperties(n, l);
}, FO = (n) => {
  pb(n, (i, s) => {
    if (Ee(n) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
      return !1;
    const l = n[s];
    if (Ee(l)) {
      if (i.enumerable = !1, "writable" in i) {
        i.writable = !1;
        return;
      }
      i.set || (i.set = () => {
        throw Error("Can not rewrite read-only method '" + s + "'");
      });
    }
  });
}, WO = (n, i) => {
  const s = {}, l = (o) => {
    o.forEach((m) => {
      s[m] = !0;
    });
  };
  return Ba(n) ? l(n) : l(String(n).split(i)), s;
}, JO = () => {
}, $O = (n, i) => n != null && Number.isFinite(n = +n) ? n : i;
function IO(n) {
  return !!(n && Ee(n.append) && n[cb] === "FormData" && n[io]);
}
const tC = (n) => {
  const i = new Array(10), s = (l, o) => {
    if (ro(l)) {
      if (i.indexOf(l) >= 0)
        return;
      if (!("toJSON" in l)) {
        i[o] = l;
        const m = Ba(l) ? [] : {};
        return cr(l, (f, d) => {
          const p = s(f, o + 1);
          !ir(p) && (m[d] = p);
        }), i[o] = void 0, m;
      }
    }
    return l;
  };
  return s(n, 0);
}, eC = tn("AsyncFunction"), nC = (n) => n && (ro(n) || Ee(n)) && Ee(n.then) && Ee(n.catch), yb = ((n, i) => n ? setImmediate : i ? ((s, l) => (_i.addEventListener("message", ({ source: o, data: m }) => {
  o === _i && m === s && l.length && l.shift()();
}, !1), (o) => {
  l.push(o), _i.postMessage(s, "*");
}))(`axios@${Math.random()}`, []) : (s) => setTimeout(s))(
  typeof setImmediate == "function",
  Ee(_i.postMessage)
), iC = typeof queueMicrotask < "u" ? queueMicrotask.bind(_i) : typeof Wg < "u" && Wg.nextTick || yb, aC = (n) => n != null && Ee(n[io]), V = {
  isArray: Ba,
  isArrayBuffer: fb,
  isBuffer: SO,
  isFormData: DO,
  isArrayBufferView: TO,
  isString: wO,
  isNumber: mb,
  isBoolean: AO,
  isObject: ro,
  isPlainObject: Ll,
  isReadableStream: jO,
  isRequest: _O,
  isResponse: zO,
  isHeaders: VO,
  isUndefined: ir,
  isDate: EO,
  isFile: MO,
  isBlob: RO,
  isRegExp: ZO,
  isFunction: Ee,
  isStream: CO,
  isURLSearchParams: NO,
  isTypedArray: YO,
  isFileList: OO,
  forEach: cr,
  merge: Mf,
  extend: BO,
  trim: UO,
  stripBOM: LO,
  inherits: kO,
  toFlatObject: HO,
  kindOf: ao,
  kindOfTest: tn,
  endsWith: qO,
  toArray: PO,
  forEachEntry: GO,
  matchAll: XO,
  isHTMLForm: KO,
  hasOwnProperty: Jg,
  hasOwnProp: Jg,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: pb,
  freezeMethods: FO,
  toObjectSet: WO,
  toCamelCase: QO,
  noop: JO,
  toFiniteNumber: $O,
  findKey: db,
  global: _i,
  isContextDefined: hb,
  isSpecCompliantForm: IO,
  toJSONObject: tC,
  isAsyncFn: eC,
  isThenable: nC,
  setImmediate: yb,
  asap: iC,
  isIterable: aC
};
function ft(n, i, s, l, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", i && (this.code = i), s && (this.config = s), l && (this.request = l), o && (this.response = o, this.status = o.status ? o.status : null);
}
V.inherits(ft, Error, {
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
      config: V.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const gb = ft.prototype, vb = {};
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
Object.defineProperties(ft, vb);
Object.defineProperty(gb, "isAxiosError", { value: !0 });
ft.from = (n, i, s, l, o, m) => {
  const f = Object.create(gb);
  return V.toFlatObject(n, f, function(p) {
    return p !== Error.prototype;
  }, (d) => d !== "isAxiosError"), ft.call(f, n.message, i, s, l, o), f.cause = n, f.name = n.name, m && Object.assign(f, m), f;
};
const sC = null;
function Rf(n) {
  return V.isPlainObject(n) || V.isArray(n);
}
function bb(n) {
  return V.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function $g(n, i, s) {
  return n ? n.concat(i).map(function(o, m) {
    return o = bb(o), !s && m ? "[" + o + "]" : o;
  }).join(s ? "." : "") : i;
}
function rC(n) {
  return V.isArray(n) && !n.some(Rf);
}
const lC = V.toFlatObject(V, {}, null, function(i) {
  return /^is[A-Z]/.test(i);
});
function lo(n, i, s) {
  if (!V.isObject(n))
    throw new TypeError("target must be an object");
  i = i || new FormData(), s = V.toFlatObject(s, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(R, j) {
    return !V.isUndefined(j[R]);
  });
  const l = s.metaTokens, o = s.visitor || g, m = s.dots, f = s.indexes, p = (s.Blob || typeof Blob < "u" && Blob) && V.isSpecCompliantForm(i);
  if (!V.isFunction(o))
    throw new TypeError("visitor must be a function");
  function h(E) {
    if (E === null) return "";
    if (V.isDate(E))
      return E.toISOString();
    if (V.isBoolean(E))
      return E.toString();
    if (!p && V.isBlob(E))
      throw new ft("Blob is not supported. Use a Buffer instead.");
    return V.isArrayBuffer(E) || V.isTypedArray(E) ? p && typeof Blob == "function" ? new Blob([E]) : Buffer.from(E) : E;
  }
  function g(E, R, j) {
    let U = E;
    if (E && !j && typeof E == "object") {
      if (V.endsWith(R, "{}"))
        R = l ? R : R.slice(0, -2), E = JSON.stringify(E);
      else if (V.isArray(E) && rC(E) || (V.isFileList(E) || V.endsWith(R, "[]")) && (U = V.toArray(E)))
        return R = bb(R), U.forEach(function(q, J) {
          !(V.isUndefined(q) || q === null) && i.append(
            // eslint-disable-next-line no-nested-ternary
            f === !0 ? $g([R], J, m) : f === null ? R : R + "[]",
            h(q)
          );
        }), !1;
    }
    return Rf(E) ? !0 : (i.append($g(j, R, m), h(E)), !1);
  }
  const b = [], x = Object.assign(lC, {
    defaultVisitor: g,
    convertValue: h,
    isVisitable: Rf
  });
  function C(E, R) {
    if (!V.isUndefined(E)) {
      if (b.indexOf(E) !== -1)
        throw Error("Circular reference detected in " + R.join("."));
      b.push(E), V.forEach(E, function(U, k) {
        (!(V.isUndefined(U) || U === null) && o.call(
          i,
          U,
          V.isString(k) ? k.trim() : k,
          R,
          x
        )) === !0 && C(U, R ? R.concat(k) : [k]);
      }), b.pop();
    }
  }
  if (!V.isObject(n))
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
function oC(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Sb(n, i, s) {
  if (!i)
    return n;
  const l = s && s.encode || oC;
  V.isFunction(s) && (s = {
    serialize: s
  });
  const o = s && s.serialize;
  let m;
  if (o ? m = o(i, s) : m = V.isURLSearchParams(i) ? i.toString() : new vm(i, s).toString(l), m) {
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
    V.forEach(this.handlers, function(l) {
      l !== null && i(l);
    });
  }
}
const Tb = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, uC = typeof URLSearchParams < "u" ? URLSearchParams : vm, cC = typeof FormData < "u" ? FormData : null, fC = typeof Blob < "u" ? Blob : null, mC = {
  isBrowser: !0,
  classes: {
    URLSearchParams: uC,
    FormData: cC,
    Blob: fC
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, bm = typeof window < "u" && typeof document < "u", Of = typeof navigator == "object" && navigator || void 0, dC = bm && (!Of || ["ReactNative", "NativeScript", "NS"].indexOf(Of.product) < 0), hC = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", pC = bm && window.location.href || "http://localhost", yC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: bm,
  hasStandardBrowserEnv: dC,
  hasStandardBrowserWebWorkerEnv: hC,
  navigator: Of,
  origin: pC
}, Symbol.toStringTag, { value: "Module" })), he = {
  ...yC,
  ...mC
};
function gC(n, i) {
  return lo(n, new he.classes.URLSearchParams(), Object.assign({
    visitor: function(s, l, o, m) {
      return he.isNode && V.isBuffer(s) ? (this.append(l, s.toString("base64")), !1) : m.defaultVisitor.apply(this, arguments);
    }
  }, i));
}
function vC(n) {
  return V.matchAll(/\w+|\[(\w*)]/g, n).map((i) => i[0] === "[]" ? "" : i[1] || i[0]);
}
function bC(n) {
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
    return f = !f && V.isArray(o) ? o.length : f, p ? (V.hasOwnProp(o, f) ? o[f] = [o[f], l] : o[f] = l, !d) : ((!o[f] || !V.isObject(o[f])) && (o[f] = []), i(s, l, o[f], m) && V.isArray(o[f]) && (o[f] = bC(o[f])), !d);
  }
  if (V.isFormData(n) && V.isFunction(n.entries)) {
    const s = {};
    return V.forEachEntry(n, (l, o) => {
      i(vC(l), o, s, 0);
    }), s;
  }
  return null;
}
function xC(n, i, s) {
  if (V.isString(n))
    try {
      return (i || JSON.parse)(n), V.trim(n);
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
    const l = s.getContentType() || "", o = l.indexOf("application/json") > -1, m = V.isObject(i);
    if (m && V.isHTMLForm(i) && (i = new FormData(i)), V.isFormData(i))
      return o ? JSON.stringify(wb(i)) : i;
    if (V.isArrayBuffer(i) || V.isBuffer(i) || V.isStream(i) || V.isFile(i) || V.isBlob(i) || V.isReadableStream(i))
      return i;
    if (V.isArrayBufferView(i))
      return i.buffer;
    if (V.isURLSearchParams(i))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), i.toString();
    let d;
    if (m) {
      if (l.indexOf("application/x-www-form-urlencoded") > -1)
        return gC(i, this.formSerializer).toString();
      if ((d = V.isFileList(i)) || l.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return lo(
          d ? { "files[]": i } : i,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return m || o ? (s.setContentType("application/json", !1), xC(i)) : i;
  }],
  transformResponse: [function(i) {
    const s = this.transitional || fr.transitional, l = s && s.forcedJSONParsing, o = this.responseType === "json";
    if (V.isResponse(i) || V.isReadableStream(i))
      return i;
    if (i && V.isString(i) && (l && !this.responseType || o)) {
      const f = !(s && s.silentJSONParsing) && o;
      try {
        return JSON.parse(i);
      } catch (d) {
        if (f)
          throw d.name === "SyntaxError" ? ft.from(d, ft.ERR_BAD_RESPONSE, this, null, this.response) : d;
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
    FormData: he.classes.FormData,
    Blob: he.classes.Blob
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
V.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  fr.headers[n] = {};
});
const SC = V.toObjectSet([
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
]), TC = (n) => {
  const i = {};
  let s, l, o;
  return n && n.split(`
`).forEach(function(f) {
    o = f.indexOf(":"), s = f.substring(0, o).trim().toLowerCase(), l = f.substring(o + 1).trim(), !(!s || i[s] && SC[s]) && (s === "set-cookie" ? i[s] ? i[s].push(l) : i[s] = [l] : i[s] = i[s] ? i[s] + ", " + l : l);
  }), i;
}, e0 = Symbol("internals");
function Ps(n) {
  return n && String(n).trim().toLowerCase();
}
function kl(n) {
  return n === !1 || n == null ? n : V.isArray(n) ? n.map(kl) : String(n);
}
function wC(n) {
  const i = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let l;
  for (; l = s.exec(n); )
    i[l[1]] = l[2];
  return i;
}
const AC = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function Fc(n, i, s, l, o) {
  if (V.isFunction(l))
    return l.call(this, i, s);
  if (o && (i = s), !!V.isString(i)) {
    if (V.isString(l))
      return i.indexOf(l) !== -1;
    if (V.isRegExp(l))
      return l.test(i);
  }
}
function EC(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (i, s, l) => s.toUpperCase() + l);
}
function MC(n, i) {
  const s = V.toCamelCase(" " + i);
  ["get", "set", "has"].forEach((l) => {
    Object.defineProperty(n, l + s, {
      value: function(o, m, f) {
        return this[l].call(this, i, o, m, f);
      },
      configurable: !0
    });
  });
}
let Me = class {
  constructor(i) {
    i && this.set(i);
  }
  set(i, s, l) {
    const o = this;
    function m(d, p, h) {
      const g = Ps(p);
      if (!g)
        throw new Error("header name must be a non-empty string");
      const b = V.findKey(o, g);
      (!b || o[b] === void 0 || h === !0 || h === void 0 && o[b] !== !1) && (o[b || p] = kl(d));
    }
    const f = (d, p) => V.forEach(d, (h, g) => m(h, g, p));
    if (V.isPlainObject(i) || i instanceof this.constructor)
      f(i, s);
    else if (V.isString(i) && (i = i.trim()) && !AC(i))
      f(TC(i), s);
    else if (V.isObject(i) && V.isIterable(i)) {
      let d = {}, p, h;
      for (const g of i) {
        if (!V.isArray(g))
          throw TypeError("Object iterator must return a key-value pair");
        d[h = g[0]] = (p = d[h]) ? V.isArray(p) ? [...p, g[1]] : [p, g[1]] : g[1];
      }
      f(d, s);
    } else
      i != null && m(s, i, l);
    return this;
  }
  get(i, s) {
    if (i = Ps(i), i) {
      const l = V.findKey(this, i);
      if (l) {
        const o = this[l];
        if (!s)
          return o;
        if (s === !0)
          return wC(o);
        if (V.isFunction(s))
          return s.call(this, o, l);
        if (V.isRegExp(s))
          return s.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(i, s) {
    if (i = Ps(i), i) {
      const l = V.findKey(this, i);
      return !!(l && this[l] !== void 0 && (!s || Fc(this, this[l], l, s)));
    }
    return !1;
  }
  delete(i, s) {
    const l = this;
    let o = !1;
    function m(f) {
      if (f = Ps(f), f) {
        const d = V.findKey(l, f);
        d && (!s || Fc(l, l[d], d, s)) && (delete l[d], o = !0);
      }
    }
    return V.isArray(i) ? i.forEach(m) : m(i), o;
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
    return V.forEach(this, (o, m) => {
      const f = V.findKey(l, m);
      if (f) {
        s[f] = kl(o), delete s[m];
        return;
      }
      const d = i ? EC(m) : String(m).trim();
      d !== m && delete s[m], s[d] = kl(o), l[d] = !0;
    }), this;
  }
  concat(...i) {
    return this.constructor.concat(this, ...i);
  }
  toJSON(i) {
    const s = /* @__PURE__ */ Object.create(null);
    return V.forEach(this, (l, o) => {
      l != null && l !== !1 && (s[o] = i && V.isArray(l) ? l.join(", ") : l);
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
      const d = Ps(f);
      l[d] || (MC(o, f), l[d] = !0);
    }
    return V.isArray(i) ? i.forEach(m) : m(i), this;
  }
};
Me.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
V.reduceDescriptors(Me.prototype, ({ value: n }, i) => {
  let s = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => n,
    set(l) {
      this[s] = l;
    }
  };
});
V.freezeMethods(Me);
function Wc(n, i) {
  const s = this || fr, l = i || s, o = Me.from(l.headers);
  let m = l.data;
  return V.forEach(n, function(d) {
    m = d.call(s, m, o.normalize(), i ? i.status : void 0);
  }), o.normalize(), m;
}
function Ab(n) {
  return !!(n && n.__CANCEL__);
}
function La(n, i, s) {
  ft.call(this, n ?? "canceled", ft.ERR_CANCELED, i, s), this.name = "CanceledError";
}
V.inherits(La, ft, {
  __CANCEL__: !0
});
function Eb(n, i, s) {
  const l = s.config.validateStatus;
  !s.status || !l || l(s.status) ? n(s) : i(new ft(
    "Request failed with status code " + s.status,
    [ft.ERR_BAD_REQUEST, ft.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
function RC(n) {
  const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return i && i[1] || "";
}
function OC(n, i) {
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
function CC(n, i) {
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
  const o = OC(50, 250);
  return CC((m) => {
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
}, i0 = (n) => (...i) => V.asap(() => n(...i)), DC = he.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, i) => (s) => (s = new URL(s, he.origin), n.protocol === s.protocol && n.host === s.host && (i || n.port === s.port)))(
  new URL(he.origin),
  he.navigator && /(msie|trident)/i.test(he.navigator.userAgent)
) : () => !0, NC = he.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, i, s, l, o, m) {
      const f = [n + "=" + encodeURIComponent(i)];
      V.isNumber(s) && f.push("expires=" + new Date(s).toGMTString()), V.isString(l) && f.push("path=" + l), V.isString(o) && f.push("domain=" + o), m === !0 && f.push("secure"), document.cookie = f.join("; ");
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
function jC(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function _C(n, i) {
  return i ? n.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : n;
}
function Mb(n, i, s) {
  let l = !jC(i);
  return n && (l || s == !1) ? _C(n, i) : i;
}
const a0 = (n) => n instanceof Me ? { ...n } : n;
function Bi(n, i) {
  i = i || {};
  const s = {};
  function l(h, g, b, x) {
    return V.isPlainObject(h) && V.isPlainObject(g) ? V.merge.call({ caseless: x }, h, g) : V.isPlainObject(g) ? V.merge({}, g) : V.isArray(g) ? g.slice() : g;
  }
  function o(h, g, b, x) {
    if (V.isUndefined(g)) {
      if (!V.isUndefined(h))
        return l(void 0, h, b, x);
    } else return l(h, g, b, x);
  }
  function m(h, g) {
    if (!V.isUndefined(g))
      return l(void 0, g);
  }
  function f(h, g) {
    if (V.isUndefined(g)) {
      if (!V.isUndefined(h))
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
  return V.forEach(Object.keys(Object.assign({}, n, i)), function(g) {
    const b = p[g] || o, x = b(n[g], i[g], g);
    V.isUndefined(x) && b !== d || (s[g] = x);
  }), s;
}
const Rb = (n) => {
  const i = Bi({}, n);
  let { data: s, withXSRFToken: l, xsrfHeaderName: o, xsrfCookieName: m, headers: f, auth: d } = i;
  i.headers = f = Me.from(f), i.url = Sb(Mb(i.baseURL, i.url, i.allowAbsoluteUrls), n.params, n.paramsSerializer), d && f.set(
    "Authorization",
    "Basic " + btoa((d.username || "") + ":" + (d.password ? unescape(encodeURIComponent(d.password)) : ""))
  );
  let p;
  if (V.isFormData(s)) {
    if (he.hasStandardBrowserEnv || he.hasStandardBrowserWebWorkerEnv)
      f.setContentType(void 0);
    else if ((p = f.getContentType()) !== !1) {
      const [h, ...g] = p ? p.split(";").map((b) => b.trim()).filter(Boolean) : [];
      f.setContentType([h || "multipart/form-data", ...g].join("; "));
    }
  }
  if (he.hasStandardBrowserEnv && (l && V.isFunction(l) && (l = l(i)), l || l !== !1 && DC(i.url))) {
    const h = o && m && NC.read(m);
    h && f.set(o, h);
  }
  return i;
}, zC = typeof XMLHttpRequest < "u", VC = zC && function(n) {
  return new Promise(function(s, l) {
    const o = Rb(n);
    let m = o.data;
    const f = Me.from(o.headers).normalize();
    let { responseType: d, onUploadProgress: p, onDownloadProgress: h } = o, g, b, x, C, E;
    function R() {
      C && C(), E && E(), o.cancelToken && o.cancelToken.unsubscribe(g), o.signal && o.signal.removeEventListener("abort", g);
    }
    let j = new XMLHttpRequest();
    j.open(o.method.toUpperCase(), o.url, !0), j.timeout = o.timeout;
    function U() {
      if (!j)
        return;
      const q = Me.from(
        "getAllResponseHeaders" in j && j.getAllResponseHeaders()
      ), Q = {
        data: !d || d === "text" || d === "json" ? j.responseText : j.response,
        status: j.status,
        statusText: j.statusText,
        headers: q,
        config: n,
        request: j
      };
      Eb(function($) {
        s($), R();
      }, function($) {
        l($), R();
      }, Q), j = null;
    }
    "onloadend" in j ? j.onloadend = U : j.onreadystatechange = function() {
      !j || j.readyState !== 4 || j.status === 0 && !(j.responseURL && j.responseURL.indexOf("file:") === 0) || setTimeout(U);
    }, j.onabort = function() {
      j && (l(new ft("Request aborted", ft.ECONNABORTED, n, j)), j = null);
    }, j.onerror = function() {
      l(new ft("Network Error", ft.ERR_NETWORK, n, j)), j = null;
    }, j.ontimeout = function() {
      let J = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const Q = o.transitional || Tb;
      o.timeoutErrorMessage && (J = o.timeoutErrorMessage), l(new ft(
        J,
        Q.clarifyTimeoutError ? ft.ETIMEDOUT : ft.ECONNABORTED,
        n,
        j
      )), j = null;
    }, m === void 0 && f.setContentType(null), "setRequestHeader" in j && V.forEach(f.toJSON(), function(J, Q) {
      j.setRequestHeader(Q, J);
    }), V.isUndefined(o.withCredentials) || (j.withCredentials = !!o.withCredentials), d && d !== "json" && (j.responseType = o.responseType), h && ([x, E] = Fl(h, !0), j.addEventListener("progress", x)), p && j.upload && ([b, C] = Fl(p), j.upload.addEventListener("progress", b), j.upload.addEventListener("loadend", C)), (o.cancelToken || o.signal) && (g = (q) => {
      j && (l(!q || q.type ? new La(null, n, j) : q), j.abort(), j = null);
    }, o.cancelToken && o.cancelToken.subscribe(g), o.signal && (o.signal.aborted ? g() : o.signal.addEventListener("abort", g)));
    const k = RC(o.url);
    if (k && he.protocols.indexOf(k) === -1) {
      l(new ft("Unsupported protocol " + k + ":", ft.ERR_BAD_REQUEST, n));
      return;
    }
    j.send(m || null);
  });
}, UC = (n, i) => {
  const { length: s } = n = n ? n.filter(Boolean) : [];
  if (i || s) {
    let l = new AbortController(), o;
    const m = function(h) {
      if (!o) {
        o = !0, d();
        const g = h instanceof Error ? h : this.reason;
        l.abort(g instanceof ft ? g : new La(g instanceof Error ? g.message : g));
      }
    };
    let f = i && setTimeout(() => {
      f = null, m(new ft(`timeout ${i} of ms exceeded`, ft.ETIMEDOUT));
    }, i);
    const d = () => {
      n && (f && clearTimeout(f), f = null, n.forEach((h) => {
        h.unsubscribe ? h.unsubscribe(m) : h.removeEventListener("abort", m);
      }), n = null);
    };
    n.forEach((h) => h.addEventListener("abort", m));
    const { signal: p } = l;
    return p.unsubscribe = () => V.asap(d), p;
  }
}, BC = function* (n, i) {
  let s = n.byteLength;
  if (s < i) {
    yield n;
    return;
  }
  let l = 0, o;
  for (; l < s; )
    o = l + i, yield n.slice(l, o), l = o;
}, LC = async function* (n, i) {
  for await (const s of kC(n))
    yield* BC(s, i);
}, kC = async function* (n) {
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
  const o = LC(n, i);
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
}, oo = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ob = oo && typeof ReadableStream == "function", HC = oo && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((n) => (i) => n.encode(i))(new TextEncoder()) : async (n) => new Uint8Array(await new Response(n).arrayBuffer())), Cb = (n, ...i) => {
  try {
    return !!n(...i);
  } catch {
    return !1;
  }
}, qC = Ob && Cb(() => {
  let n = !1;
  const i = new Request(he.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return n = !0, "half";
    }
  }).headers.has("Content-Type");
  return n && !i;
}), r0 = 64 * 1024, Cf = Ob && Cb(() => V.isReadableStream(new Response("").body)), Wl = {
  stream: Cf && ((n) => n.body)
};
oo && ((n) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((i) => {
    !Wl[i] && (Wl[i] = V.isFunction(n[i]) ? (s) => s[i]() : (s, l) => {
      throw new ft(`Response type '${i}' is not supported`, ft.ERR_NOT_SUPPORT, l);
    });
  });
})(new Response());
const PC = async (n) => {
  if (n == null)
    return 0;
  if (V.isBlob(n))
    return n.size;
  if (V.isSpecCompliantForm(n))
    return (await new Request(he.origin, {
      method: "POST",
      body: n
    }).arrayBuffer()).byteLength;
  if (V.isArrayBufferView(n) || V.isArrayBuffer(n))
    return n.byteLength;
  if (V.isURLSearchParams(n) && (n = n + ""), V.isString(n))
    return (await HC(n)).byteLength;
}, YC = async (n, i) => {
  const s = V.toFiniteNumber(n.getContentLength());
  return s ?? PC(i);
}, GC = oo && (async (n) => {
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
  let C = UC([o, m && m.toAbortSignal()], f), E;
  const R = C && C.unsubscribe && (() => {
    C.unsubscribe();
  });
  let j;
  try {
    if (p && qC && s !== "get" && s !== "head" && (j = await YC(g, l)) !== 0) {
      let Q = new Request(i, {
        method: "POST",
        body: l,
        duplex: "half"
      }), G;
      if (V.isFormData(l) && (G = Q.headers.get("content-type")) && g.setContentType(G), Q.body) {
        const [$, Y] = n0(
          j,
          Fl(i0(p))
        );
        l = s0(Q.body, r0, $, Y);
      }
    }
    V.isString(b) || (b = b ? "include" : "omit");
    const U = "credentials" in Request.prototype;
    E = new Request(i, {
      ...x,
      signal: C,
      method: s.toUpperCase(),
      headers: g.normalize().toJSON(),
      body: l,
      duplex: "half",
      credentials: U ? b : void 0
    });
    let k = await fetch(E, x);
    const q = Cf && (h === "stream" || h === "response");
    if (Cf && (d || q && R)) {
      const Q = {};
      ["status", "statusText", "headers"].forEach((lt) => {
        Q[lt] = k[lt];
      });
      const G = V.toFiniteNumber(k.headers.get("content-length")), [$, Y] = d && n0(
        G,
        Fl(i0(d), !0)
      ) || [];
      k = new Response(
        s0(k.body, r0, $, () => {
          Y && Y(), R && R();
        }),
        Q
      );
    }
    h = h || "text";
    let J = await Wl[V.findKey(Wl, h) || "text"](k, n);
    return !q && R && R(), await new Promise((Q, G) => {
      Eb(Q, G, {
        data: J,
        headers: Me.from(k.headers),
        status: k.status,
        statusText: k.statusText,
        config: n,
        request: E
      });
    });
  } catch (U) {
    throw R && R(), U && U.name === "TypeError" && /Load failed|fetch/i.test(U.message) ? Object.assign(
      new ft("Network Error", ft.ERR_NETWORK, n, E),
      {
        cause: U.cause || U
      }
    ) : ft.from(U, U && U.code, n, E);
  }
}), Df = {
  http: sC,
  xhr: VC,
  fetch: GC
};
V.forEach(Df, (n, i) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: i });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: i });
  }
});
const l0 = (n) => `- ${n}`, XC = (n) => V.isFunction(n) || n === null || n === !1, Db = {
  getAdapter: (n) => {
    n = V.isArray(n) ? n : [n];
    const { length: i } = n;
    let s, l;
    const o = {};
    for (let m = 0; m < i; m++) {
      s = n[m];
      let f;
      if (l = s, !XC(s) && (l = Df[(f = String(s)).toLowerCase()], l === void 0))
        throw new ft(`Unknown adapter '${f}'`);
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
      throw new ft(
        "There is no suitable adapter to dispatch the request " + f,
        "ERR_NOT_SUPPORT"
      );
    }
    return l;
  },
  adapters: Df
};
function Jc(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new La(null, n);
}
function o0(n) {
  return Jc(n), n.headers = Me.from(n.headers), n.data = Wc.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), Db.getAdapter(n.adapter || fr.adapter)(n).then(function(l) {
    return Jc(n), l.data = Wc.call(
      n,
      n.transformResponse,
      l
    ), l.headers = Me.from(l.headers), l;
  }, function(l) {
    return Ab(l) || (Jc(n), l && l.response && (l.response.data = Wc.call(
      n,
      n.transformResponse,
      l.response
    ), l.response.headers = Me.from(l.response.headers))), Promise.reject(l);
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
      throw new ft(
        o(f, " has been removed" + (s ? " in " + s : "")),
        ft.ERR_DEPRECATED
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
function KC(n, i, s) {
  if (typeof n != "object")
    throw new ft("options must be an object", ft.ERR_BAD_OPTION_VALUE);
  const l = Object.keys(n);
  let o = l.length;
  for (; o-- > 0; ) {
    const m = l[o], f = i[m];
    if (f) {
      const d = n[m], p = d === void 0 || f(d, m, n);
      if (p !== !0)
        throw new ft("option " + m + " must be " + p, ft.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0)
      throw new ft("Unknown option " + m, ft.ERR_BAD_OPTION);
  }
}
const Hl = {
  assertOptions: KC,
  validators: uo
}, on = Hl.validators;
let Ui = class {
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
    }, !1), o != null && (V.isFunction(o) ? s.paramsSerializer = {
      serialize: o
    } : Hl.assertOptions(o, {
      encode: on.function,
      serialize: on.function
    }, !0)), s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0), Hl.assertOptions(s, {
      baseUrl: on.spelling("baseURL"),
      withXsrfToken: on.spelling("withXSRFToken")
    }, !0), s.method = (s.method || this.defaults.method || "get").toLowerCase();
    let f = m && V.merge(
      m.common,
      m[s.method]
    );
    m && V.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (E) => {
        delete m[E];
      }
    ), s.headers = Me.concat(f, m);
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
      } catch (j) {
        R.call(this, j);
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
    i = Bi(this.defaults, i);
    const s = Mb(i.baseURL, i.url, i.allowAbsoluteUrls);
    return Sb(s, i.params, i.paramsSerializer);
  }
};
V.forEach(["delete", "get", "head", "options"], function(i) {
  Ui.prototype[i] = function(s, l) {
    return this.request(Bi(l || {}, {
      method: i,
      url: s,
      data: (l || {}).data
    }));
  };
});
V.forEach(["post", "put", "patch"], function(i) {
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
  Ui.prototype[i] = s(), Ui.prototype[i + "Form"] = s(!0);
});
let QC = class jb {
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
      l.reason || (l.reason = new La(m, f, d), s(l.reason));
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
function ZC(n) {
  return function(s) {
    return n.apply(null, s);
  };
}
function FC(n) {
  return V.isObject(n) && n.isAxiosError === !0;
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
  const i = new Ui(n), s = ub(Ui.prototype.request, i);
  return V.extend(s, Ui.prototype, i, { allOwnKeys: !0 }), V.extend(s, i, null, { allOwnKeys: !0 }), s.create = function(o) {
    return _b(Bi(n, o));
  }, s;
}
const Zt = _b(fr);
Zt.Axios = Ui;
Zt.CanceledError = La;
Zt.CancelToken = QC;
Zt.isCancel = Ab;
Zt.VERSION = Nb;
Zt.toFormData = lo;
Zt.AxiosError = ft;
Zt.Cancel = Zt.CanceledError;
Zt.all = function(i) {
  return Promise.all(i);
};
Zt.spread = ZC;
Zt.isAxiosError = FC;
Zt.mergeConfig = Bi;
Zt.AxiosHeaders = Me;
Zt.formToJSON = (n) => wb(V.isHTMLForm(n) ? new FormData(n) : n);
Zt.getAdapter = Db.getAdapter;
Zt.HttpStatusCode = Nf;
Zt.default = Zt;
const {
  Axios: oD,
  AxiosError: uD,
  CanceledError: cD,
  isCancel: fD,
  CancelToken: mD,
  VERSION: dD,
  all: hD,
  Cancel: pD,
  isAxiosError: yD,
  spread: gD,
  toFormData: vD,
  AxiosHeaders: bD,
  HttpStatusCode: xD,
  formToJSON: SD,
  getAdapter: TD,
  mergeConfig: wD
} = Zt, $c = {
  NEXT_PUBLIC_CUSTOMER_API: "https://mimin-test.mimin.io/mimin-backend",
  NEXT_PUBLIC_CHATBOT_URL: "https://mimin-api.mimin.io/backend-gen-ai",
  NEXT_PUBLIC_OPENAI_URL: "https://api.openai.com"
};
function ar(n, i) {
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
const WC = async (n, i) => {
  const l = ["voice-greeting", "voice-behavior", "voice-information", "voice-end"].map(async (f) => {
    try {
      const d = `limit=1&page=1&order=_id&sort=1&category=chatbot&value=${f}`, p = await ar("fetch", "customer")(
        `/v1/chatbotprompt/get-chatbot-prompt-by-username/${n}?${d}`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": i
          }
        }
      ), h = await p.json();
      return p.ok && h?.data?.length > 0 && h.data[0].prompt ? h.data[0].prompt : null;
    } catch (d) {
      return console.error(`[getIntructions] error for type: ${f}`, d), null;
    }
  }), m = (await Promise.all(l)).filter((f) => !!f);
  if (m.length > 0)
    return m.join(`

`);
  throw new Error("Failed to fetch any instructions from endpoints");
}, JC = void 0, $C = ({
  isVisible: n,
  onToggleCallWindow: i
}) => {
  const [s, l] = X.useState(!1), [o, m] = X.useState("00:00:00"), [f, d] = X.useState(null), [p, h] = X.useState(!1), [g, b] = X.useState(null), [x, C] = X.useState(null), [E, R] = X.useState(
    "idle"
  ), { config: j, signature: U } = sr();
  X.useRef(null), X.useRef([]), X.useRef(null), X.useRef(null);
  const k = X.useRef(null), q = async () => {
  };
  X.useEffect(() => {
    let Q = null, G = null;
    if (n)
      return (async () => {
        G = new RTCPeerConnection();
        const $ = await WC(
          j?.credentials?.username || "",
          U
        ), Y = await ar("axios", "openai")("/realtime/sessions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${JC}`,
            "Content-Type": "application/json"
          },
          data: JSON.stringify({
            model: "gpt-4o-realtime-preview-2024-12-17",
            instructions: $,
            voice: "sage"
          })
        }), { client_secret: lt, model: St } = Y.data;
        G.ontrack = (At) => {
          k.current && (C(At.streams[0]), k.current.srcObject = At.streams[0], k.current.play());
        };
        const _t = G.createDataChannel("response"), Ut = () => {
          _t.send(
            JSON.stringify({
              type: "session.update",
              session: {
                modalities: ["text", "audio"],
                tools: []
              }
            })
          );
        };
        _t.addEventListener("message", (At) => {
          switch (JSON.parse(At.data).type) {
            case "output_audio_buffer.started":
              R("speaking"), Q && Q.getAudioTracks().forEach((Mt) => Mt.enabled = !1);
              break;
            case "output_audio_buffer.stopped":
              R("idle"), Q && Q.getAudioTracks().forEach((Mt) => Mt.enabled = !0);
              break;
            case "input_audio_buffer.speech_started":
              R("listening");
              break;
          }
        }), _t.addEventListener("open", async () => {
          Ut(), q();
          const At = {
            type: "response.create",
            response: {
              instructions: $
            }
          };
          _t.send(JSON.stringify(At));
        }), navigator.mediaDevices.getUserMedia({ audio: !0 }).then((At) => {
          Q = At, At.getTracks().forEach(
            (qt) => G.addTransceiver(qt, { direction: "sendrecv" })
          ), G.createOffer().then((qt) => {
            G.setLocalDescription(qt), ar("fetch", "openai")(`/realtime?model=${St}`, {
              method: "POST",
              body: qt.sdp,
              headers: {
                Authorization: `Bearer ${lt.value}`,
                "Content-Type": "application/sdp"
              },
              // @ts-expect-error: fetch support duplex property
              duplex: "half"
            }).then((Mt) => Mt.text()).then((Mt) => {
              G.setRemoteDescription({
                sdp: Mt,
                type: "answer"
              });
            }).catch((Mt) => console.log(Mt));
          });
        });
      })(), () => {
        Q && Q.getTracks().forEach(($) => $.stop()), G && (G.getSenders().forEach(($) => $.track?.stop()), G.close());
      };
  }, [n]), X.useEffect(() => () => {
    g && URL.revokeObjectURL(g);
  }, [g]);
  const J = () => {
    l(!0), setTimeout(() => {
      k.current && (m("00:00:00"), k.current.pause()), C(null), i(), l(!1);
    }, 300);
  };
  return n ? /* @__PURE__ */ A.jsx(
    ge.div,
    {
      className: "mimin-absolute mimin-inset-0 mimin-bg-white mimin-z-10",
      initial: "hidden",
      animate: "visible",
      exit: "exit",
      variants: dO,
      children: /* @__PURE__ */ A.jsx("div", { className: "mimin-h-full mimin-px-6 mimin-py-10 mimin-overflow-y-auto", children: /* @__PURE__ */ A.jsxs("div", { className: "mimin-flex mimin-flex-col mimin-items-center mimin-justify-center", children: [
        /* @__PURE__ */ A.jsx(
          ge.h4,
          {
            className: "mimin-text-[#0096a2] mimin-text-xl mimin-font-bold mimin-mb-6",
            variants: yO,
            initial: "initial",
            animate: "animate",
            children: "IN CALL"
          }
        ),
        /* @__PURE__ */ A.jsxs("div", { className: "mimin-relative", children: [
          /* @__PURE__ */ A.jsx(
            ge.div,
            {
              className: "mimin-flex mimin-items-center mimin-justify-center mimin-p-4 mimin-rounded-full mimin-w-[204px] mimin-h-[204px] mimin-bg-gradient-to-br mimin-from-[#0096a2]/30 mimin-to-[#f26075]/30",
              variants: hO,
              initial: "initial",
              animate: "animate",
              children: /* @__PURE__ */ A.jsx(
                ge.div,
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
                    ge.div,
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
            bO,
            {
              audioStream: x,
              isActive: n
            }
          ) }),
          !!x && /* @__PURE__ */ A.jsx("div", { className: "mimin-absolute mimin-text-white mimin-text-xs mimin-capitalize mimin-tracking-wide mimin-bottom-[25%] mimin-left-[50%] -mimin-translate-x-[50%] mimin-mt-4 mimin-animate-pulse", children: E })
        ] }),
        /* @__PURE__ */ A.jsx(
          ge.p,
          {
            className: "mimin-text-[#0096a2] mimin-text-base mimin-font-bold mimin-mt-5",
            variants: Zc,
            children: "MIMIN AI"
          }
        ),
        /* @__PURE__ */ A.jsx(
          ge.p,
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
          ge.div,
          {
            className: "mimin-h-[1.5px] mimin-w-full mimin-bg-gray-200 mimin-my-6",
            variants: gO,
            initial: "initial",
            animate: "animate"
          }
        ),
        /* @__PURE__ */ A.jsx(
          "audio",
          {
            ref: k,
            className: "mimin-hidden",
            controls: !0,
            autoPlay: !1,
            onTimeUpdate: (Q) => {
              m(TT(Q.target.currentTime));
            }
          }
        ),
        /* @__PURE__ */ A.jsx(
          ge.div,
          {
            className: "mimin-grid mimin-grid-cols-2 mimin-gap-4 mimin-w-full",
            variants: Zc,
            children: /* @__PURE__ */ A.jsx("div", { className: "mimin-col-span-2 mimin-flex mimin-items-center mimin-justify-center", children: /* @__PURE__ */ A.jsx(
              ge.button,
              {
                type: "button",
                className: "mimin-cursor-pointer mimin-bg-gradient-to-br mimin-from-[#0096a2]/30 mimin-to-[#f26075]/30 mimin-rounded-full mimin-w-[60px] mimin-h-[60px] mimin-p-4 mimin-aspect-square mimin-flex mimin-items-center mimin-justify-center",
                variants: pO,
                initial: "initial",
                whileHover: "hover",
                whileTap: "tap",
                onClick: J,
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
          ge.div,
          {
            className: "mimin-absolute mimin-inset-0 mimin-pointer-events-none",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.5 },
            children: [...Array(3)].map((Q, G) => /* @__PURE__ */ A.jsx(
              ge.div,
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
                  delay: G * 1,
                  ease: "easeOut"
                }
              },
              G
            ))
          }
        )
      ] }) })
    }
  ) : null;
}, IC = _f()(
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
), tD = ({ onClickStartChat: n }) => /* @__PURE__ */ A.jsxs("div", { className: "mimin-h-full mimin-overflow-y-auto mimin-bg-[#0096A2] mimin-flex mimin-flex-col mimin-justify-between", children: [
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
] }), eD = {
  limit: 10,
  page: 0,
  pages: 0,
  size: 10
}, nD = ({
  config: n,
  signature: i
}) => {
  const [s, l] = X.useState(!1), [o, m] = X.useState(!1), { isFirstTime: f, setIsFirstTime: d } = IC(), [p, h] = X.useState(""), [g, b] = X.useState(""), [x, C] = X.useState(eD), { setConfig: E, setSignature: R } = sr(), [j, U] = X.useState(!1), [k, q] = X.useState(!1), [J, Q] = X.useState(!1), [G, $] = X.useState(!1), {
    interactions: Y,
    addInteraction: lt,
    updateAiInteractionByIndex: St,
    chatType: _t,
    setChatType: Ut
  } = f0(), At = () => {
    j ? U(!1) : (Q(!0), U(!0));
  }, qt = () => {
    q(!k);
  }, Mt = async () => {
    try {
      const ct = (await (await fetch("https://api.ipify.org?format=json")).json()).ip, bt = navigator.userAgent;
      return { ip: ct, userAgent: bt, isError: !1 };
    } catch (B) {
      return { isError: !0, errorMessage: B.message };
    }
  }, Z = async (B) => {
    const { isError: z, errorMessage: ct, ip: bt, userAgent: w } = await Mt();
    if (z) {
      console.error(ct);
      return;
    }
    l(!0);
    const K = {
      name: w,
      phone: bt,
      message_id: crypto.randomUUID(),
      message: B,
      media_type: "text",
      media: "",
      type: _t || ""
    };
    try {
      const W = await ar("fetch", "chatbot")(
        `/chat/new-website/${n?.credentials?.username}`,
        {
          headers: {
            Signature: i,
            Accept: "text/event-stream",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(K),
          method: "POST"
        }
      );
      if (!W.ok) {
        console.error("Failed to send message");
        return;
      }
      const F = W.body.pipeThrough(new TextDecoderStream()).getReader();
      for (; ; ) {
        const { value: at, done: Tt } = await F.read();
        if (Tt) break;
        const I = '{"event": ';
        at.split(`data: ${I}`).filter(Boolean).map(
          (mt) => JSON.parse(`${I}${mt}`.replace(/\n\n$/gm, ""))
        ).filter((mt) => mt.event === "token" ? !!mt.data : !0).forEach(async (mt) => {
          if (mt.event === "payload") {
            const re = {
              additional_kwargs: {},
              content: mt.message,
              example: !1
            };
            St(0, re), _t || Ut(mt.type), h(mt.chat_history_id);
          } else mt.event === "token" && b((re) => re + mt.data);
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
  return X.useEffect(() => {
    const B = (z) => {
      const ct = z.target;
      !ct.closest("#mimin-widget-main") && !ct.closest("#mimin-widget-btn-trigger") && At();
    };
    return j && document.addEventListener("click", B), () => {
      document.removeEventListener("click", B);
    };
  }, [j]), X.useEffect(() => {
    E(n || null), R(i || "");
  }, []), /* @__PURE__ */ A.jsx(_E, { children: /* @__PURE__ */ A.jsxs("div", { className: "mimin-fixed mimin-bottom-6 mimin-right-6 mimin-z-[9999]", children: [
    /* @__PURE__ */ A.jsxs(
      "button",
      {
        id: "mimin-widget-btn-trigger",
        className: "mimin-relative mimin-flex mimin-items-center mimin-gap-2.5 mimin-px-4 mimin-py-2 mimin-rounded-full mimin-border mimin-border-[#0096a2] mimin-shadow-md mimin-transition-all mimin-duration-300 mimin-ease-in-out mimin-cursor-pointer",
        style: {
          backgroundColor: j ? "#0096a2" : n?.theme?.button?.backgroundColor || "#ffffff",
          color: j ? "#ffffff" : n?.theme?.button?.textColor || "#0096a2"
        },
        onClick: At,
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
          k && !j && /* @__PURE__ */ A.jsx(
            ge.div,
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
    J && /* @__PURE__ */ A.jsx(
      ge.div,
      {
        id: "mimin-widget-main",
        className: "mimin-absolute mimin-bottom-full mimin-mb-4 mimin-right-0",
        initial: { opacity: 0, y: 20 },
        animate: j ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 },
        transition: { duration: 0.3, ease: "easeOut" },
        onAnimationComplete: () => {
          j || Q(!1);
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
              (n?.theme?.chatWindow.needAuthentication || !1) && !G && !f && /* @__PURE__ */ A.jsx(NS, {}),
              (G || !n?.theme?.chatWindow.needAuthentication) && !f && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
                /* @__PURE__ */ A.jsx(
                  HS,
                  {
                    onToggleCallWindow: qt,
                    onToggleChatWindow: At
                  }
                ),
                /* @__PURE__ */ A.jsx(
                  Dw,
                  {
                    messages: Y,
                    currentResponseMsg: g,
                    loading: s,
                    fetching: o
                  }
                ),
                /* @__PURE__ */ A.jsx(
                  jw,
                  {
                    onSendMessage: (B) => {
                      b(""), B = B.trim().replaceAll(/\n\n+/g, `

`);
                      const z = {
                        human: {
                          content: B,
                          additional_kwargs: {},
                          example: !1
                        },
                        date: /* @__PURE__ */ new Date(),
                        id: crypto.randomUUID()
                      };
                      lt(z), Z(B);
                    },
                    loading: s,
                    fetching: o
                  }
                ),
                /* @__PURE__ */ A.jsx(
                  $C,
                  {
                    isVisible: k,
                    onToggleCallWindow: qt
                  }
                )
              ] }),
              f && /* @__PURE__ */ A.jsx(
                tD,
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
function iD() {
  if (!document.getElementById("mimin-chatbot-widget-css")) {
    const n = document.createElement("link");
    n.rel = "stylesheet", n.href = "https://unpkg.com/mimin-chatbot-widget-react@latest/dist/chat-widget.css", n.id = "mimin-chatbot-widget-css", document.head.appendChild(n);
  }
}
const aD = {
  init: async function(n = {}) {
    try {
      if (console.log("INIT V2 INDEX>TSX"), iD(), !n.credentials)
        throw new Error("credentials are required");
      if (!n.credentials.username)
        throw new Error("username is required");
      if (!n.credentials.apiKey)
        throw new Error("apiKey is required");
      const i = await ar("fetch", "customer")(
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
      o.id = "mimin-widget-container", document.body.appendChild(o), mS.createRoot(o).render(
        /* @__PURE__ */ A.jsx(A.Fragment, { children: /* @__PURE__ */ A.jsx(
          nD,
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
window.Chatbot = aD;
export {
  aD as Chatbot
};
//# sourceMappingURL=chat-widget.js.map
