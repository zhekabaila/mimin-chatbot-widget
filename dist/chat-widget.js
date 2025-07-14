function Ld(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var gf = { exports: {} }, Rn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nd;
function Uh() {
  if (Nd) return Rn;
  Nd = 1;
  var f = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function d(h, r, M) {
    var D = null;
    if (M !== void 0 && (D = "" + M), r.key !== void 0 && (D = "" + r.key), "key" in r) {
      M = {};
      for (var C in r)
        C !== "key" && (M[C] = r[C]);
    } else M = r;
    return r = M.ref, {
      $$typeof: f,
      type: h,
      key: D,
      ref: r !== void 0 ? r : null,
      props: M
    };
  }
  return Rn.Fragment = o, Rn.jsx = d, Rn.jsxs = d, Rn;
}
var _d;
function Ch() {
  return _d || (_d = 1, gf.exports = Uh()), gf.exports;
}
var x = Ch(), bf = { exports: {} }, wn = {}, pf = { exports: {} }, Sf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Od;
function Hh() {
  return Od || (Od = 1, function(f) {
    function o(R, j) {
      var T = R.length;
      R.push(j);
      t: for (; 0 < T; ) {
        var tt = T - 1 >>> 1, dt = R[tt];
        if (0 < r(dt, j))
          R[tt] = j, R[T] = dt, T = tt;
        else break t;
      }
    }
    function d(R) {
      return R.length === 0 ? null : R[0];
    }
    function h(R) {
      if (R.length === 0) return null;
      var j = R[0], T = R.pop();
      if (T !== j) {
        R[0] = T;
        t: for (var tt = 0, dt = R.length, y = dt >>> 1; tt < y; ) {
          var O = 2 * (tt + 1) - 1, U = R[O], w = O + 1, B = R[w];
          if (0 > r(U, T))
            w < dt && 0 > r(B, U) ? (R[tt] = B, R[w] = T, tt = w) : (R[tt] = U, R[O] = T, tt = O);
          else if (w < dt && 0 > r(B, T))
            R[tt] = B, R[w] = T, tt = w;
          else break t;
        }
      }
      return j;
    }
    function r(R, j) {
      var T = R.sortIndex - j.sortIndex;
      return T !== 0 ? T : R.id - j.id;
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var M = performance;
      f.unstable_now = function() {
        return M.now();
      };
    } else {
      var D = Date, C = D.now();
      f.unstable_now = function() {
        return D.now() - C;
      };
    }
    var z = [], p = [], q = 1, H = null, F = 3, ot = !1, nt = !1, L = !1, At = !1, vt = typeof setTimeout == "function" ? setTimeout : null, rt = typeof clearTimeout == "function" ? clearTimeout : null, Tt = typeof setImmediate < "u" ? setImmediate : null;
    function ft(R) {
      for (var j = d(p); j !== null; ) {
        if (j.callback === null) h(p);
        else if (j.startTime <= R)
          h(p), j.sortIndex = j.expirationTime, o(z, j);
        else break;
        j = d(p);
      }
    }
    function Dt(R) {
      if (L = !1, ft(R), !nt)
        if (d(z) !== null)
          nt = !0, W || (W = !0, Bt());
        else {
          var j = d(p);
          j !== null && Ct(Dt, j.startTime - R);
        }
    }
    var W = !1, Rt = -1, V = 5, Et = -1;
    function Wt() {
      return At ? !0 : !(f.unstable_now() - Et < V);
    }
    function gl() {
      if (At = !1, W) {
        var R = f.unstable_now();
        Et = R;
        var j = !0;
        try {
          t: {
            nt = !1, L && (L = !1, rt(Rt), Rt = -1), ot = !0;
            var T = F;
            try {
              l: {
                for (ft(R), H = d(z); H !== null && !(H.expirationTime > R && Wt()); ) {
                  var tt = H.callback;
                  if (typeof tt == "function") {
                    H.callback = null, F = H.priorityLevel;
                    var dt = tt(
                      H.expirationTime <= R
                    );
                    if (R = f.unstable_now(), typeof dt == "function") {
                      H.callback = dt, ft(R), j = !0;
                      break l;
                    }
                    H === d(z) && h(z), ft(R);
                  } else h(z);
                  H = d(z);
                }
                if (H !== null) j = !0;
                else {
                  var y = d(p);
                  y !== null && Ct(
                    Dt,
                    y.startTime - R
                  ), j = !1;
                }
              }
              break t;
            } finally {
              H = null, F = T, ot = !1;
            }
            j = void 0;
          }
        } finally {
          j ? Bt() : W = !1;
        }
      }
    }
    var Bt;
    if (typeof Tt == "function")
      Bt = function() {
        Tt(gl);
      };
    else if (typeof MessageChannel < "u") {
      var Mt = new MessageChannel(), tl = Mt.port2;
      Mt.port1.onmessage = gl, Bt = function() {
        tl.postMessage(null);
      };
    } else
      Bt = function() {
        vt(gl, 0);
      };
    function Ct(R, j) {
      Rt = vt(function() {
        R(f.unstable_now());
      }, j);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, f.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : V = 0 < R ? Math.floor(1e3 / R) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return F;
    }, f.unstable_next = function(R) {
      switch (F) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = F;
      }
      var T = F;
      F = j;
      try {
        return R();
      } finally {
        F = T;
      }
    }, f.unstable_requestPaint = function() {
      At = !0;
    }, f.unstable_runWithPriority = function(R, j) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var T = F;
      F = R;
      try {
        return j();
      } finally {
        F = T;
      }
    }, f.unstable_scheduleCallback = function(R, j, T) {
      var tt = f.unstable_now();
      switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? tt + T : tt) : T = tt, R) {
        case 1:
          var dt = -1;
          break;
        case 2:
          dt = 250;
          break;
        case 5:
          dt = 1073741823;
          break;
        case 4:
          dt = 1e4;
          break;
        default:
          dt = 5e3;
      }
      return dt = T + dt, R = {
        id: q++,
        callback: j,
        priorityLevel: R,
        startTime: T,
        expirationTime: dt,
        sortIndex: -1
      }, T > tt ? (R.sortIndex = T, o(p, R), d(z) === null && R === d(p) && (L ? (rt(Rt), Rt = -1) : L = !0, Ct(Dt, T - tt))) : (R.sortIndex = dt, o(z, R), nt || ot || (nt = !0, W || (W = !0, Bt()))), R;
    }, f.unstable_shouldYield = Wt, f.unstable_wrapCallback = function(R) {
      var j = F;
      return function() {
        var T = F;
        F = j;
        try {
          return R.apply(this, arguments);
        } finally {
          F = T;
        }
      };
    };
  }(Sf)), Sf;
}
var jd;
function qh() {
  return jd || (jd = 1, pf.exports = Hh()), pf.exports;
}
var xf = { exports: {} }, $ = {}, Dd;
function Bh() {
  if (Dd) return $;
  Dd = 1;
  var f = {};
  /**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var o = Symbol.for("react.transitional.element"), d = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), D = Symbol.for("react.consumer"), C = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), q = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), F = Symbol.iterator;
  function ot(y) {
    return y === null || typeof y != "object" ? null : (y = F && y[F] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var nt = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, L = Object.assign, At = {};
  function vt(y, O, U) {
    this.props = y, this.context = O, this.refs = At, this.updater = U || nt;
  }
  vt.prototype.isReactComponent = {}, vt.prototype.setState = function(y, O) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, O, "setState");
  }, vt.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function rt() {
  }
  rt.prototype = vt.prototype;
  function Tt(y, O, U) {
    this.props = y, this.context = O, this.refs = At, this.updater = U || nt;
  }
  var ft = Tt.prototype = new rt();
  ft.constructor = Tt, L(ft, vt.prototype), ft.isPureReactComponent = !0;
  var Dt = Array.isArray, W = { H: null, A: null, T: null, S: null, V: null }, Rt = Object.prototype.hasOwnProperty;
  function V(y, O, U, w, B, ut) {
    return U = ut.ref, {
      $$typeof: o,
      type: y,
      key: O,
      ref: U !== void 0 ? U : null,
      props: ut
    };
  }
  function Et(y, O) {
    return V(
      y.type,
      O,
      void 0,
      void 0,
      void 0,
      y.props
    );
  }
  function Wt(y) {
    return typeof y == "object" && y !== null && y.$$typeof === o;
  }
  function gl(y) {
    var O = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(U) {
      return O[U];
    });
  }
  var Bt = /\/+/g;
  function Mt(y, O) {
    return typeof y == "object" && y !== null && y.key != null ? gl("" + y.key) : O.toString(36);
  }
  function tl() {
  }
  function Ct(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(tl, tl) : (y.status = "pending", y.then(
          function(O) {
            y.status === "pending" && (y.status = "fulfilled", y.value = O);
          },
          function(O) {
            y.status === "pending" && (y.status = "rejected", y.reason = O);
          }
        )), y.status) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function R(y, O, U, w, B) {
    var ut = typeof y;
    (ut === "undefined" || ut === "boolean") && (y = null);
    var Q = !1;
    if (y === null) Q = !0;
    else
      switch (ut) {
        case "bigint":
        case "string":
        case "number":
          Q = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case o:
            case d:
              Q = !0;
              break;
            case H:
              return Q = y._init, R(
                Q(y._payload),
                O,
                U,
                w,
                B
              );
          }
      }
    if (Q)
      return B = B(y), Q = w === "" ? "." + Mt(y, 0) : w, Dt(B) ? (U = "", Q != null && (U = Q.replace(Bt, "$&/") + "/"), R(B, O, U, "", function(cl) {
        return cl;
      })) : B != null && (Wt(B) && (B = Et(
        B,
        U + (B.key == null || y && y.key === B.key ? "" : ("" + B.key).replace(
          Bt,
          "$&/"
        ) + "/") + Q
      )), O.push(B)), 1;
    Q = 0;
    var $t = w === "" ? "." : w + ":";
    if (Dt(y))
      for (var mt = 0; mt < y.length; mt++)
        w = y[mt], ut = $t + Mt(w, mt), Q += R(
          w,
          O,
          U,
          ut,
          B
        );
    else if (mt = ot(y), typeof mt == "function")
      for (y = mt.call(y), mt = 0; !(w = y.next()).done; )
        w = w.value, ut = $t + Mt(w, mt++), Q += R(
          w,
          O,
          U,
          ut,
          B
        );
    else if (ut === "object") {
      if (typeof y.then == "function")
        return R(
          Ct(y),
          O,
          U,
          w,
          B
        );
      throw O = String(y), Error(
        "Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Q;
  }
  function j(y, O, U) {
    if (y == null) return y;
    var w = [], B = 0;
    return R(y, w, "", "", function(ut) {
      return O.call(U, ut, B++);
    }), w;
  }
  function T(y) {
    if (y._status === -1) {
      var O = y._result;
      O = O(), O.then(
        function(U) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = U);
        },
        function(U) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = U);
        }
      ), y._status === -1 && (y._status = 0, y._result = O);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var tt = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var O = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(O)) return;
    } else if (typeof f == "object" && typeof f.emit == "function") {
      f.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  };
  function dt() {
  }
  return $.Children = {
    map: j,
    forEach: function(y, O, U) {
      j(
        y,
        function() {
          O.apply(this, arguments);
        },
        U
      );
    },
    count: function(y) {
      var O = 0;
      return j(y, function() {
        O++;
      }), O;
    },
    toArray: function(y) {
      return j(y, function(O) {
        return O;
      }) || [];
    },
    only: function(y) {
      if (!Wt(y))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return y;
    }
  }, $.Component = vt, $.Fragment = h, $.Profiler = M, $.PureComponent = Tt, $.StrictMode = r, $.Suspense = p, $.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, $.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return W.H.useMemoCache(y);
    }
  }, $.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, $.cloneElement = function(y, O, U) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var w = L({}, y.props), B = y.key, ut = void 0;
    if (O != null)
      for (Q in O.ref !== void 0 && (ut = void 0), O.key !== void 0 && (B = "" + O.key), O)
        !Rt.call(O, Q) || Q === "key" || Q === "__self" || Q === "__source" || Q === "ref" && O.ref === void 0 || (w[Q] = O[Q]);
    var Q = arguments.length - 2;
    if (Q === 1) w.children = U;
    else if (1 < Q) {
      for (var $t = Array(Q), mt = 0; mt < Q; mt++)
        $t[mt] = arguments[mt + 2];
      w.children = $t;
    }
    return V(y.type, B, void 0, void 0, ut, w);
  }, $.createContext = function(y) {
    return y = {
      $$typeof: C,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: D,
      _context: y
    }, y;
  }, $.createElement = function(y, O, U) {
    var w, B = {}, ut = null;
    if (O != null)
      for (w in O.key !== void 0 && (ut = "" + O.key), O)
        Rt.call(O, w) && w !== "key" && w !== "__self" && w !== "__source" && (B[w] = O[w]);
    var Q = arguments.length - 2;
    if (Q === 1) B.children = U;
    else if (1 < Q) {
      for (var $t = Array(Q), mt = 0; mt < Q; mt++)
        $t[mt] = arguments[mt + 2];
      B.children = $t;
    }
    if (y && y.defaultProps)
      for (w in Q = y.defaultProps, Q)
        B[w] === void 0 && (B[w] = Q[w]);
    return V(y, ut, void 0, void 0, null, B);
  }, $.createRef = function() {
    return { current: null };
  }, $.forwardRef = function(y) {
    return { $$typeof: z, render: y };
  }, $.isValidElement = Wt, $.lazy = function(y) {
    return {
      $$typeof: H,
      _payload: { _status: -1, _result: y },
      _init: T
    };
  }, $.memo = function(y, O) {
    return {
      $$typeof: q,
      type: y,
      compare: O === void 0 ? null : O
    };
  }, $.startTransition = function(y) {
    var O = W.T, U = {};
    W.T = U;
    try {
      var w = y(), B = W.S;
      B !== null && B(U, w), typeof w == "object" && w !== null && typeof w.then == "function" && w.then(dt, tt);
    } catch (ut) {
      tt(ut);
    } finally {
      W.T = O;
    }
  }, $.unstable_useCacheRefresh = function() {
    return W.H.useCacheRefresh();
  }, $.use = function(y) {
    return W.H.use(y);
  }, $.useActionState = function(y, O, U) {
    return W.H.useActionState(y, O, U);
  }, $.useCallback = function(y, O) {
    return W.H.useCallback(y, O);
  }, $.useContext = function(y) {
    return W.H.useContext(y);
  }, $.useDebugValue = function() {
  }, $.useDeferredValue = function(y, O) {
    return W.H.useDeferredValue(y, O);
  }, $.useEffect = function(y, O, U) {
    var w = W.H;
    if (typeof U == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return w.useEffect(y, O);
  }, $.useId = function() {
    return W.H.useId();
  }, $.useImperativeHandle = function(y, O, U) {
    return W.H.useImperativeHandle(y, O, U);
  }, $.useInsertionEffect = function(y, O) {
    return W.H.useInsertionEffect(y, O);
  }, $.useLayoutEffect = function(y, O) {
    return W.H.useLayoutEffect(y, O);
  }, $.useMemo = function(y, O) {
    return W.H.useMemo(y, O);
  }, $.useOptimistic = function(y, O) {
    return W.H.useOptimistic(y, O);
  }, $.useReducer = function(y, O, U) {
    return W.H.useReducer(y, O, U);
  }, $.useRef = function(y) {
    return W.H.useRef(y);
  }, $.useState = function(y) {
    return W.H.useState(y);
  }, $.useSyncExternalStore = function(y, O, U) {
    return W.H.useSyncExternalStore(
      y,
      O,
      U
    );
  }, $.useTransition = function() {
    return W.H.useTransition();
  }, $.version = "19.1.0", $;
}
var Rd;
function Df() {
  return Rd || (Rd = 1, xf.exports = Bh()), xf.exports;
}
var Af = { exports: {} }, Pt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wd;
function Gh() {
  if (wd) return Pt;
  wd = 1;
  var f = Df();
  function o(z) {
    var p = "https://react.dev/errors/" + z;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var q = 2; q < arguments.length; q++)
        p += "&args[]=" + encodeURIComponent(arguments[q]);
    }
    return "Minified React error #" + z + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d() {
  }
  var h = {
    d: {
      f: d,
      r: function() {
        throw Error(o(522));
      },
      D: d,
      C: d,
      L: d,
      m: d,
      X: d,
      S: d,
      M: d
    },
    p: 0,
    findDOMNode: null
  }, r = Symbol.for("react.portal");
  function M(z, p, q) {
    var H = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: r,
      key: H == null ? null : "" + H,
      children: z,
      containerInfo: p,
      implementation: q
    };
  }
  var D = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function C(z, p) {
    if (z === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return Pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h, Pt.createPortal = function(z, p) {
    var q = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(o(299));
    return M(z, p, null, q);
  }, Pt.flushSync = function(z) {
    var p = D.T, q = h.p;
    try {
      if (D.T = null, h.p = 2, z) return z();
    } finally {
      D.T = p, h.p = q, h.d.f();
    }
  }, Pt.preconnect = function(z, p) {
    typeof z == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, h.d.C(z, p));
  }, Pt.prefetchDNS = function(z) {
    typeof z == "string" && h.d.D(z);
  }, Pt.preinit = function(z, p) {
    if (typeof z == "string" && p && typeof p.as == "string") {
      var q = p.as, H = C(q, p.crossOrigin), F = typeof p.integrity == "string" ? p.integrity : void 0, ot = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      q === "style" ? h.d.S(
        z,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: H,
          integrity: F,
          fetchPriority: ot
        }
      ) : q === "script" && h.d.X(z, {
        crossOrigin: H,
        integrity: F,
        fetchPriority: ot,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, Pt.preinitModule = function(z, p) {
    if (typeof z == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var q = C(
            p.as,
            p.crossOrigin
          );
          h.d.M(z, {
            crossOrigin: q,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && h.d.M(z);
  }, Pt.preload = function(z, p) {
    if (typeof z == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var q = p.as, H = C(q, p.crossOrigin);
      h.d.L(z, q, {
        crossOrigin: H,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0,
        type: typeof p.type == "string" ? p.type : void 0,
        fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
        referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
        imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
        imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
        media: typeof p.media == "string" ? p.media : void 0
      });
    }
  }, Pt.preloadModule = function(z, p) {
    if (typeof z == "string")
      if (p) {
        var q = C(p.as, p.crossOrigin);
        h.d.m(z, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: q,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else h.d.m(z);
  }, Pt.requestFormReset = function(z) {
    h.d.r(z);
  }, Pt.unstable_batchedUpdates = function(z, p) {
    return z(p);
  }, Pt.useFormState = function(z, p, q) {
    return D.H.useFormState(z, p, q);
  }, Pt.useFormStatus = function() {
    return D.H.useHostTransitionStatus();
  }, Pt.version = "19.1.0", Pt;
}
var Ud;
function Yh() {
  if (Ud) return Af.exports;
  Ud = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (o) {
        console.error(o);
      }
  }
  return f(), Af.exports = Gh(), Af.exports;
}
var Cd;
function Xh() {
  if (Cd) return wn;
  Cd = 1;
  var f = {};
  /**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var o = qh(), d = Df(), h = Yh();
  function r(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function M(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function D(t) {
    var l = t, e = t;
    if (t.alternate) for (; l.return; ) l = l.return;
    else {
      t = l;
      do
        l = t, (l.flags & 4098) !== 0 && (e = l.return), t = l.return;
      while (t);
    }
    return l.tag === 3 ? e : null;
  }
  function C(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function z(t) {
    if (D(t) !== t)
      throw Error(r(188));
  }
  function p(t) {
    var l = t.alternate;
    if (!l) {
      if (l = D(t), l === null) throw Error(r(188));
      return l !== t ? null : t;
    }
    for (var e = t, a = l; ; ) {
      var n = e.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (a = n.return, a !== null) {
          e = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === e) return z(n), t;
          if (u === a) return z(n), l;
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (e.return !== a.return) e = n, a = u;
      else {
        for (var i = !1, c = n.child; c; ) {
          if (c === e) {
            i = !0, e = n, a = u;
            break;
          }
          if (c === a) {
            i = !0, a = n, e = u;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = u.child; c; ) {
            if (c === e) {
              i = !0, e = u, a = n;
              break;
            }
            if (c === a) {
              i = !0, a = u, e = n;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(r(189));
        }
      }
      if (e.alternate !== a) throw Error(r(190));
    }
    if (e.tag !== 3) throw Error(r(188));
    return e.stateNode.current === e ? t : l;
  }
  function q(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (l = q(t), l !== null) return l;
      t = t.sibling;
    }
    return null;
  }
  var H = Object.assign, F = Symbol.for("react.element"), ot = Symbol.for("react.transitional.element"), nt = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), At = Symbol.for("react.strict_mode"), vt = Symbol.for("react.profiler"), rt = Symbol.for("react.provider"), Tt = Symbol.for("react.consumer"), ft = Symbol.for("react.context"), Dt = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), Rt = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), Et = Symbol.for("react.lazy"), Wt = Symbol.for("react.activity"), gl = Symbol.for("react.memo_cache_sentinel"), Bt = Symbol.iterator;
  function Mt(t) {
    return t === null || typeof t != "object" ? null : (t = Bt && t[Bt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var tl = Symbol.for("react.client.reference");
  function Ct(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === tl ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case L:
        return "Fragment";
      case vt:
        return "Profiler";
      case At:
        return "StrictMode";
      case W:
        return "Suspense";
      case Rt:
        return "SuspenseList";
      case Wt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case nt:
          return "Portal";
        case ft:
          return (t.displayName || "Context") + ".Provider";
        case Tt:
          return (t._context.displayName || "Context") + ".Consumer";
        case Dt:
          var l = t.render;
          return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case V:
          return l = t.displayName || null, l !== null ? l : Ct(t.type) || "Memo";
        case Et:
          l = t._payload, t = t._init;
          try {
            return Ct(t(l));
          } catch {
          }
      }
    return null;
  }
  var R = Array.isArray, j = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, T = h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, tt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, dt = [], y = -1;
  function O(t) {
    return { current: t };
  }
  function U(t) {
    0 > y || (t.current = dt[y], dt[y] = null, y--);
  }
  function w(t, l) {
    y++, dt[y] = t.current, t.current = l;
  }
  var B = O(null), ut = O(null), Q = O(null), $t = O(null);
  function mt(t, l) {
    switch (w(Q, l), w(ut, t), w(B, null), l.nodeType) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? ld(t) : 0;
        break;
      default:
        if (t = l.tagName, l = l.namespaceURI)
          l = ld(l), t = ed(l, t);
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
    U(B), w(B, t);
  }
  function cl() {
    U(B), U(ut), U(Q);
  }
  function ze(t) {
    t.memoizedState !== null && w($t, t);
    var l = B.current, e = ed(l, t.type);
    l !== e && (w(ut, t), w(B, e));
  }
  function ql(t) {
    ut.current === t && (U(B), U(ut)), $t.current === t && (U($t), Nn._currentValue = tt);
  }
  var ei = Object.prototype.hasOwnProperty, ai = o.unstable_scheduleCallback, ni = o.unstable_cancelCallback, dm = o.unstable_shouldYield, mm = o.unstable_requestPaint, Dl = o.unstable_now, hm = o.unstable_getCurrentPriorityLevel, Uf = o.unstable_ImmediatePriority, Cf = o.unstable_UserBlockingPriority, Cn = o.unstable_NormalPriority, ym = o.unstable_LowPriority, Hf = o.unstable_IdlePriority, vm = o.log, gm = o.unstable_setDisableYieldValue, Ua = null, fl = null;
  function te(t) {
    if (typeof vm == "function" && gm(t), fl && typeof fl.setStrictMode == "function")
      try {
        fl.setStrictMode(Ua, t);
      } catch {
      }
  }
  var sl = Math.clz32 ? Math.clz32 : Sm, bm = Math.log, pm = Math.LN2;
  function Sm(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (bm(t) / pm | 0) | 0;
  }
  var Hn = 256, qn = 4194304;
  function Me(t) {
    var l = t & 42;
    if (l !== 0) return l;
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
  function Bn(t, l, e) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = t.suspendedLanes, i = t.pingedLanes;
    t = t.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~u, a !== 0 ? n = Me(a) : (i &= c, i !== 0 ? n = Me(i) : e || (e = c & ~t, e !== 0 && (n = Me(e))))) : (c = a & ~u, c !== 0 ? n = Me(c) : i !== 0 ? n = Me(i) : e || (e = a & ~t, e !== 0 && (n = Me(e)))), n === 0 ? 0 : l !== 0 && l !== n && (l & u) === 0 && (u = n & -n, e = l & -l, u >= e || u === 32 && (e & 4194048) !== 0) ? l : n;
  }
  function Ca(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function xm(t, l) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
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
        return l + 5e3;
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
  function qf() {
    var t = Hn;
    return Hn <<= 1, (Hn & 4194048) === 0 && (Hn = 256), t;
  }
  function Bf() {
    var t = qn;
    return qn <<= 1, (qn & 62914560) === 0 && (qn = 4194304), t;
  }
  function ui(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function Ha(t, l) {
    t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Am(t, l, e, a, n, u) {
    var i = t.pendingLanes;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
    var c = t.entanglements, s = t.expirationTimes, b = t.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var E = 31 - sl(e), _ = 1 << E;
      c[E] = 0, s[E] = -1;
      var S = b[E];
      if (S !== null)
        for (b[E] = null, E = 0; E < S.length; E++) {
          var A = S[E];
          A !== null && (A.lane &= -536870913);
        }
      e &= ~_;
    }
    a !== 0 && Gf(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~l));
  }
  function Gf(t, l, e) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var a = 31 - sl(l);
    t.entangledLanes |= l, t.entanglements[a] = t.entanglements[a] | 1073741824 | e & 4194090;
  }
  function Yf(t, l) {
    var e = t.entangledLanes |= l;
    for (t = t.entanglements; e; ) {
      var a = 31 - sl(e), n = 1 << a;
      n & l | t[a] & l && (t[a] |= l), e &= ~n;
    }
  }
  function ii(t) {
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
  function ci(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Xf() {
    var t = T.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : xd(t.type));
  }
  function Tm(t, l) {
    var e = T.p;
    try {
      return T.p = t, l();
    } finally {
      T.p = e;
    }
  }
  var le = Math.random().toString(36).slice(2), Ft = "__reactFiber$" + le, el = "__reactProps$" + le, Le = "__reactContainer$" + le, fi = "__reactEvents$" + le, Em = "__reactListeners$" + le, zm = "__reactHandles$" + le, Qf = "__reactResources$" + le, qa = "__reactMarker$" + le;
  function si(t) {
    delete t[Ft], delete t[el], delete t[fi], delete t[Em], delete t[zm];
  }
  function Ke(t) {
    var l = t[Ft];
    if (l) return l;
    for (var e = t.parentNode; e; ) {
      if (l = e[Le] || e[Ft]) {
        if (e = l.alternate, l.child !== null || e !== null && e.child !== null)
          for (t = id(t); t !== null; ) {
            if (e = t[Ft]) return e;
            t = id(t);
          }
        return l;
      }
      t = e, e = t.parentNode;
    }
    return null;
  }
  function ke(t) {
    if (t = t[Ft] || t[Le]) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function Ba(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(r(33));
  }
  function Je(t) {
    var l = t[Qf];
    return l || (l = t[Qf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function Qt(t) {
    t[qa] = !0;
  }
  var Zf = /* @__PURE__ */ new Set(), Vf = {};
  function Ne(t, l) {
    We(t, l), We(t + "Capture", l);
  }
  function We(t, l) {
    for (Vf[t] = l, t = 0; t < l.length; t++)
      Zf.add(l[t]);
  }
  var Mm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Lf = {}, Kf = {};
  function Nm(t) {
    return ei.call(Kf, t) ? !0 : ei.call(Lf, t) ? !1 : Mm.test(t) ? Kf[t] = !0 : (Lf[t] = !0, !1);
  }
  function Gn(t, l, e) {
    if (Nm(l))
      if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var a = l.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, "" + e);
      }
  }
  function Yn(t, l, e) {
    if (e === null) t.removeAttribute(l);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, "" + e);
    }
  }
  function Bl(t, l, e, a) {
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
      t.setAttributeNS(l, e, "" + a);
    }
  }
  var oi, kf;
  function $e(t) {
    if (oi === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        oi = l && l[1] || "", kf = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + oi + t + kf;
  }
  var ri = !1;
  function di(t, l) {
    if (!t || ri) return "";
    ri = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (l) {
              var _ = function() {
                throw Error();
              };
              if (Object.defineProperty(_.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(_, []);
                } catch (A) {
                  var S = A;
                }
                Reflect.construct(t, [], _);
              } else {
                try {
                  _.call();
                } catch (A) {
                  S = A;
                }
                t.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (A) {
                S = A;
              }
              (_ = t()) && typeof _.catch == "function" && _.catch(function() {
              });
            }
          } catch (A) {
            if (A && S && typeof A.stack == "string")
              return [A.stack, S.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = a.DetermineComponentFrameRoot(), i = u[0], c = u[1];
      if (i && c) {
        var s = i.split(`
`), b = c.split(`
`);
        for (n = a = 0; a < s.length && !s[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < b.length && !b[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === s.length || n === b.length)
          for (a = s.length - 1, n = b.length - 1; 1 <= a && 0 <= n && s[a] !== b[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (s[a] !== b[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || s[a] !== b[n]) {
                  var E = `
` + s[a].replace(" at new ", " at ");
                  return t.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", t.displayName)), E;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ri = !1, Error.prepareStackTrace = e;
    }
    return (e = t ? t.displayName || t.name : "") ? $e(e) : "";
  }
  function _m(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return $e(t.type);
      case 16:
        return $e("Lazy");
      case 13:
        return $e("Suspense");
      case 19:
        return $e("SuspenseList");
      case 0:
      case 15:
        return di(t.type, !1);
      case 11:
        return di(t.type.render, !1);
      case 1:
        return di(t.type, !0);
      case 31:
        return $e("Activity");
      default:
        return "";
    }
  }
  function Jf(t) {
    try {
      var l = "";
      do
        l += _m(t), t = t.return;
      while (t);
      return l;
    } catch (e) {
      return `
Error generating stack: ` + e.message + `
` + e.stack;
    }
  }
  function bl(t) {
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
  function Wf(t) {
    var l = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function Om(t) {
    var l = Wf(t) ? "checked" : "value", e = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      l
    ), a = "" + t[l];
    if (!t.hasOwnProperty(l) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
      var n = e.get, u = e.set;
      return Object.defineProperty(t, l, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(i) {
          a = "" + i, u.call(this, i);
        }
      }), Object.defineProperty(t, l, {
        enumerable: e.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(i) {
          a = "" + i;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[l];
        }
      };
    }
  }
  function Xn(t) {
    t._valueTracker || (t._valueTracker = Om(t));
  }
  function $f(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(), a = "";
    return t && (a = Wf(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== e ? (l.setValue(t), !0) : !1;
  }
  function Qn(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var jm = /[\n"\\]/g;
  function pl(t) {
    return t.replace(
      jm,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function mi(t, l, e, a, n, u, i, c) {
    t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), l != null ? i === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + bl(l)) : t.value !== "" + bl(l) && (t.value = "" + bl(l)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), l != null ? hi(t, i, bl(l)) : e != null ? hi(t, i, bl(e)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + bl(c) : t.removeAttribute("name");
  }
  function Ff(t, l, e, a, n, u, i, c) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), l != null || e != null) {
      if (!(u !== "submit" && u !== "reset" || l != null))
        return;
      e = e != null ? "" + bl(e) : "", l = l != null ? "" + bl(l) : e, c || l === t.value || (t.value = l), t.defaultValue = l;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = c ? t.checked : !!a, t.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i);
  }
  function hi(t, l, e) {
    l === "number" && Qn(t.ownerDocument) === t || t.defaultValue === "" + e || (t.defaultValue = "" + e);
  }
  function Fe(t, l, e, a) {
    if (t = t.options, l) {
      l = {};
      for (var n = 0; n < e.length; n++)
        l["$" + e[n]] = !0;
      for (e = 0; e < t.length; e++)
        n = l.hasOwnProperty("$" + t[e].value), t[e].selected !== n && (t[e].selected = n), n && a && (t[e].defaultSelected = !0);
    } else {
      for (e = "" + bl(e), l = null, n = 0; n < t.length; n++) {
        if (t[n].value === e) {
          t[n].selected = !0, a && (t[n].defaultSelected = !0);
          return;
        }
        l !== null || t[n].disabled || (l = t[n]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function If(t, l, e) {
    if (l != null && (l = "" + bl(l), l !== t.value && (t.value = l), e == null)) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + bl(e) : "";
  }
  function Pf(t, l, e, a) {
    if (l == null) {
      if (a != null) {
        if (e != null) throw Error(r(92));
        if (R(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), l = e;
    }
    e = bl(l), t.defaultValue = e, a = t.textContent, a === e && a !== "" && a !== null && (t.value = a);
  }
  function Ie(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var Dm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ts(t, l, e) {
    var a = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : a ? t.setProperty(l, e) : typeof e != "number" || e === 0 || Dm.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
  }
  function ls(t, l, e) {
    if (l != null && typeof l != "object")
      throw Error(r(62));
    if (t = t.style, e != null) {
      for (var a in e)
        !e.hasOwnProperty(a) || l != null && l.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var n in l)
        a = l[n], l.hasOwnProperty(n) && e[n] !== a && ts(t, n, a);
    } else
      for (var u in l)
        l.hasOwnProperty(u) && ts(t, u, l[u]);
  }
  function yi(t) {
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
  var Rm = /* @__PURE__ */ new Map([
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
  ]), wm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Zn(t) {
    return wm.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var vi = null;
  function gi(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Pe = null, ta = null;
  function es(t) {
    var l = ke(t);
    if (l && (t = l.stateNode)) {
      var e = t[el] || null;
      t: switch (t = l.stateNode, l.type) {
        case "input":
          if (mi(
            t,
            e.value,
            e.defaultValue,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name
          ), l = e.name, e.type === "radio" && l != null) {
            for (e = t; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll(
              'input[name="' + pl(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < e.length; l++) {
              var a = e[l];
              if (a !== t && a.form === t.form) {
                var n = a[el] || null;
                if (!n) throw Error(r(90));
                mi(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (l = 0; l < e.length; l++)
              a = e[l], a.form === t.form && $f(a);
          }
          break t;
        case "textarea":
          If(t, e.value, e.defaultValue);
          break t;
        case "select":
          l = e.value, l != null && Fe(t, !!e.multiple, l, !1);
      }
    }
  }
  var bi = !1;
  function as(t, l, e) {
    if (bi) return t(l, e);
    bi = !0;
    try {
      var a = t(l);
      return a;
    } finally {
      if (bi = !1, (Pe !== null || ta !== null) && (_u(), Pe && (l = Pe, t = ta, ta = Pe = null, es(l), t)))
        for (l = 0; l < t.length; l++) es(t[l]);
    }
  }
  function Ga(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var a = e[el] || null;
    if (a === null) return null;
    e = a[l];
    t: switch (l) {
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
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (e && typeof e != "function")
      throw Error(
        r(231, l, typeof e)
      );
    return e;
  }
  var Gl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), pi = !1;
  if (Gl)
    try {
      var Ya = {};
      Object.defineProperty(Ya, "passive", {
        get: function() {
          pi = !0;
        }
      }), window.addEventListener("test", Ya, Ya), window.removeEventListener("test", Ya, Ya);
    } catch {
      pi = !1;
    }
  var ee = null, Si = null, Vn = null;
  function ns() {
    if (Vn) return Vn;
    var t, l = Si, e = l.length, a, n = "value" in ee ? ee.value : ee.textContent, u = n.length;
    for (t = 0; t < e && l[t] === n[t]; t++) ;
    var i = e - t;
    for (a = 1; a <= i && l[e - a] === n[u - a]; a++) ;
    return Vn = n.slice(t, 1 < a ? 1 - a : void 0);
  }
  function Ln(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Kn() {
    return !0;
  }
  function us() {
    return !1;
  }
  function al(t) {
    function l(e, a, n, u, i) {
      this._reactName = e, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var c in t)
        t.hasOwnProperty(c) && (e = t[c], this[c] = e ? e(u) : u[c]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Kn : us, this.isPropagationStopped = us, this;
    }
    return H(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Kn);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Kn);
      },
      persist: function() {
      },
      isPersistent: Kn
    }), l;
  }
  var _e = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, kn = al(_e), Xa = H({}, _e, { view: 0, detail: 0 }), Um = al(Xa), xi, Ai, Qa, Jn = H({}, Xa, {
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
    getModifierState: Ei,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Qa && (Qa && t.type === "mousemove" ? (xi = t.screenX - Qa.screenX, Ai = t.screenY - Qa.screenY) : Ai = xi = 0, Qa = t), xi);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Ai;
    }
  }), is = al(Jn), Cm = H({}, Jn, { dataTransfer: 0 }), Hm = al(Cm), qm = H({}, Xa, { relatedTarget: 0 }), Ti = al(qm), Bm = H({}, _e, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Gm = al(Bm), Ym = H({}, _e, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), Xm = al(Ym), Qm = H({}, _e, { data: 0 }), cs = al(Qm), Zm = {
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
  }, Vm = {
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
  }, Lm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Km(t) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(t) : (t = Lm[t]) ? !!l[t] : !1;
  }
  function Ei() {
    return Km;
  }
  var km = H({}, Xa, {
    key: function(t) {
      if (t.key) {
        var l = Zm[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress" ? (t = Ln(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Vm[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ei,
    charCode: function(t) {
      return t.type === "keypress" ? Ln(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Ln(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), Jm = al(km), Wm = H({}, Jn, {
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
  }), fs = al(Wm), $m = H({}, Xa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ei
  }), Fm = al($m), Im = H({}, _e, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Pm = al(Im), t0 = H({}, Jn, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), l0 = al(t0), e0 = H({}, _e, {
    newState: 0,
    oldState: 0
  }), a0 = al(e0), n0 = [9, 13, 27, 32], zi = Gl && "CompositionEvent" in window, Za = null;
  Gl && "documentMode" in document && (Za = document.documentMode);
  var u0 = Gl && "TextEvent" in window && !Za, ss = Gl && (!zi || Za && 8 < Za && 11 >= Za), os = " ", rs = !1;
  function ds(t, l) {
    switch (t) {
      case "keyup":
        return n0.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ms(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var la = !1;
  function i0(t, l) {
    switch (t) {
      case "compositionend":
        return ms(l);
      case "keypress":
        return l.which !== 32 ? null : (rs = !0, os);
      case "textInput":
        return t = l.data, t === os && rs ? null : t;
      default:
        return null;
    }
  }
  function c0(t, l) {
    if (la)
      return t === "compositionend" || !zi && ds(t, l) ? (t = ns(), Vn = Si = ee = null, la = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
          if (l.char && 1 < l.char.length)
            return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return ss && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var f0 = {
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
  function hs(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!f0[t.type] : l === "textarea";
  }
  function ys(t, l, e, a) {
    Pe ? ta ? ta.push(a) : ta = [a] : Pe = a, l = Uu(l, "onChange"), 0 < l.length && (e = new kn(
      "onChange",
      "change",
      null,
      e,
      a
    ), t.push({ event: e, listeners: l }));
  }
  var Va = null, La = null;
  function s0(t) {
    $r(t, 0);
  }
  function Wn(t) {
    var l = Ba(t);
    if ($f(l)) return t;
  }
  function vs(t, l) {
    if (t === "change") return l;
  }
  var gs = !1;
  if (Gl) {
    var Mi;
    if (Gl) {
      var Ni = "oninput" in document;
      if (!Ni) {
        var bs = document.createElement("div");
        bs.setAttribute("oninput", "return;"), Ni = typeof bs.oninput == "function";
      }
      Mi = Ni;
    } else Mi = !1;
    gs = Mi && (!document.documentMode || 9 < document.documentMode);
  }
  function ps() {
    Va && (Va.detachEvent("onpropertychange", Ss), La = Va = null);
  }
  function Ss(t) {
    if (t.propertyName === "value" && Wn(La)) {
      var l = [];
      ys(
        l,
        La,
        t,
        gi(t)
      ), as(s0, l);
    }
  }
  function o0(t, l, e) {
    t === "focusin" ? (ps(), Va = l, La = e, Va.attachEvent("onpropertychange", Ss)) : t === "focusout" && ps();
  }
  function r0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Wn(La);
  }
  function d0(t, l) {
    if (t === "click") return Wn(l);
  }
  function m0(t, l) {
    if (t === "input" || t === "change")
      return Wn(l);
  }
  function h0(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var ol = typeof Object.is == "function" ? Object.is : h0;
  function Ka(t, l) {
    if (ol(t, l)) return !0;
    if (typeof t != "object" || t === null || typeof l != "object" || l === null)
      return !1;
    var e = Object.keys(t), a = Object.keys(l);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var n = e[a];
      if (!ei.call(l, n) || !ol(t[n], l[n]))
        return !1;
    }
    return !0;
  }
  function xs(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function As(t, l) {
    var e = xs(t);
    t = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (a = t + e.textContent.length, t <= l && a >= l)
          return { node: e, offset: l - t };
        t = a;
      }
      t: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break t;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = xs(e);
    }
  }
  function Ts(t, l) {
    return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? Ts(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function Es(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var l = Qn(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = Qn(t.document);
    }
    return l;
  }
  function _i(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var y0 = Gl && "documentMode" in document && 11 >= document.documentMode, ea = null, Oi = null, ka = null, ji = !1;
  function zs(t, l, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    ji || ea == null || ea !== Qn(a) || (a = ea, "selectionStart" in a && _i(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), ka && Ka(ka, a) || (ka = a, a = Uu(Oi, "onSelect"), 0 < a.length && (l = new kn(
      "onSelect",
      "select",
      null,
      l,
      e
    ), t.push({ event: l, listeners: a }), l.target = ea)));
  }
  function Oe(t, l) {
    var e = {};
    return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e;
  }
  var aa = {
    animationend: Oe("Animation", "AnimationEnd"),
    animationiteration: Oe("Animation", "AnimationIteration"),
    animationstart: Oe("Animation", "AnimationStart"),
    transitionrun: Oe("Transition", "TransitionRun"),
    transitionstart: Oe("Transition", "TransitionStart"),
    transitioncancel: Oe("Transition", "TransitionCancel"),
    transitionend: Oe("Transition", "TransitionEnd")
  }, Di = {}, Ms = {};
  Gl && (Ms = document.createElement("div").style, "AnimationEvent" in window || (delete aa.animationend.animation, delete aa.animationiteration.animation, delete aa.animationstart.animation), "TransitionEvent" in window || delete aa.transitionend.transition);
  function je(t) {
    if (Di[t]) return Di[t];
    if (!aa[t]) return t;
    var l = aa[t], e;
    for (e in l)
      if (l.hasOwnProperty(e) && e in Ms)
        return Di[t] = l[e];
    return t;
  }
  var Ns = je("animationend"), _s = je("animationiteration"), Os = je("animationstart"), v0 = je("transitionrun"), g0 = je("transitionstart"), b0 = je("transitioncancel"), js = je("transitionend"), Ds = /* @__PURE__ */ new Map(), Ri = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Ri.push("scrollEnd");
  function Nl(t, l) {
    Ds.set(t, l), Ne(l, [t]);
  }
  var Rs = /* @__PURE__ */ new WeakMap();
  function Sl(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = Rs.get(t);
      return e !== void 0 ? e : (l = {
        value: t,
        source: l,
        stack: Jf(l)
      }, Rs.set(t, l), l);
    }
    return {
      value: t,
      source: l,
      stack: Jf(l)
    };
  }
  var xl = [], na = 0, wi = 0;
  function $n() {
    for (var t = na, l = wi = na = 0; l < t; ) {
      var e = xl[l];
      xl[l++] = null;
      var a = xl[l];
      xl[l++] = null;
      var n = xl[l];
      xl[l++] = null;
      var u = xl[l];
      if (xl[l++] = null, a !== null && n !== null) {
        var i = a.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
      }
      u !== 0 && ws(e, n, u);
    }
  }
  function Fn(t, l, e, a) {
    xl[na++] = t, xl[na++] = l, xl[na++] = e, xl[na++] = a, wi |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Ui(t, l, e, a) {
    return Fn(t, l, e, a), In(t);
  }
  function ua(t, l) {
    return Fn(t, null, null, l), In(t);
  }
  function ws(t, l, e) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e);
    for (var n = !1, u = t.return; u !== null; )
      u.childLanes |= e, a = u.alternate, a !== null && (a.childLanes |= e), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, n && l !== null && (n = 31 - sl(e), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [l] : a.push(l), l.lane = e | 536870912), u) : null;
  }
  function In(t) {
    if (50 < pn)
      throw pn = 0, Yc = null, Error(r(185));
    for (var l = t.return; l !== null; )
      t = l, l = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var ia = {};
  function p0(t, l, e, a) {
    this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function rl(t, l, e, a) {
    return new p0(t, l, e, a);
  }
  function Ci(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Yl(t, l) {
    var e = t.alternate;
    return e === null ? (e = rl(
      t.tag,
      l,
      t.key,
      t.mode
    ), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 65011712, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
  }
  function Us(t, l) {
    t.flags &= 65011714;
    var e = t.alternate;
    return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), t;
  }
  function Pn(t, l, e, a, n, u) {
    var i = 0;
    if (a = t, typeof t == "function") Ci(t) && (i = 1);
    else if (typeof t == "string")
      i = xh(
        t,
        e,
        B.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case Wt:
          return t = rl(31, e, l, n), t.elementType = Wt, t.lanes = u, t;
        case L:
          return De(e.children, n, u, l);
        case At:
          i = 8, n |= 24;
          break;
        case vt:
          return t = rl(12, e, l, n | 2), t.elementType = vt, t.lanes = u, t;
        case W:
          return t = rl(13, e, l, n), t.elementType = W, t.lanes = u, t;
        case Rt:
          return t = rl(19, e, l, n), t.elementType = Rt, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case rt:
              case ft:
                i = 10;
                break t;
              case Tt:
                i = 9;
                break t;
              case Dt:
                i = 11;
                break t;
              case V:
                i = 14;
                break t;
              case Et:
                i = 16, a = null;
                break t;
            }
          i = 29, e = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return l = rl(i, e, l, n), l.elementType = t, l.type = a, l.lanes = u, l;
  }
  function De(t, l, e, a) {
    return t = rl(7, t, a, l), t.lanes = e, t;
  }
  function Hi(t, l, e) {
    return t = rl(6, t, null, l), t.lanes = e, t;
  }
  function qi(t, l, e) {
    return l = rl(
      4,
      t.children !== null ? t.children : [],
      t.key,
      l
    ), l.lanes = e, l.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, l;
  }
  var ca = [], fa = 0, tu = null, lu = 0, Al = [], Tl = 0, Re = null, Xl = 1, Ql = "";
  function we(t, l) {
    ca[fa++] = lu, ca[fa++] = tu, tu = t, lu = l;
  }
  function Cs(t, l, e) {
    Al[Tl++] = Xl, Al[Tl++] = Ql, Al[Tl++] = Re, Re = t;
    var a = Xl;
    t = Ql;
    var n = 32 - sl(a) - 1;
    a &= ~(1 << n), e += 1;
    var u = 32 - sl(l) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, Xl = 1 << 32 - sl(l) + n | e << n | a, Ql = u + t;
    } else
      Xl = 1 << u | e << n | a, Ql = t;
  }
  function Bi(t) {
    t.return !== null && (we(t, 1), Cs(t, 1, 0));
  }
  function Gi(t) {
    for (; t === tu; )
      tu = ca[--fa], ca[fa] = null, lu = ca[--fa], ca[fa] = null;
    for (; t === Re; )
      Re = Al[--Tl], Al[Tl] = null, Ql = Al[--Tl], Al[Tl] = null, Xl = Al[--Tl], Al[Tl] = null;
  }
  var ll = null, Ot = null, st = !1, Ue = null, Rl = !1, Yi = Error(r(519));
  function Ce(t) {
    var l = Error(r(418, ""));
    throw $a(Sl(l, t)), Yi;
  }
  function Hs(t) {
    var l = t.stateNode, e = t.type, a = t.memoizedProps;
    switch (l[Ft] = t, l[el] = a, e) {
      case "dialog":
        at("cancel", l), at("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        at("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < xn.length; e++)
          at(xn[e], l);
        break;
      case "source":
        at("error", l);
        break;
      case "img":
      case "image":
      case "link":
        at("error", l), at("load", l);
        break;
      case "details":
        at("toggle", l);
        break;
      case "input":
        at("invalid", l), Ff(
          l,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        ), Xn(l);
        break;
      case "select":
        at("invalid", l);
        break;
      case "textarea":
        at("invalid", l), Pf(l, a.value, a.defaultValue, a.children), Xn(l);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || a.suppressHydrationWarning === !0 || td(l.textContent, e) ? (a.popover != null && (at("beforetoggle", l), at("toggle", l)), a.onScroll != null && at("scroll", l), a.onScrollEnd != null && at("scrollend", l), a.onClick != null && (l.onclick = Cu), l = !0) : l = !1, l || Ce(t);
  }
  function qs(t) {
    for (ll = t.return; ll; )
      switch (ll.tag) {
        case 5:
        case 13:
          Rl = !1;
          return;
        case 27:
        case 3:
          Rl = !0;
          return;
        default:
          ll = ll.return;
      }
  }
  function Ja(t) {
    if (t !== ll) return !1;
    if (!st) return qs(t), st = !0, !1;
    var l = t.tag, e;
    if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || ef(t.type, t.memoizedProps)), e = !e), e && Ot && Ce(t), qs(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      t: {
        for (t = t.nextSibling, l = 0; t; ) {
          if (t.nodeType === 8)
            if (e = t.data, e === "/$") {
              if (l === 0) {
                Ot = Ol(t.nextSibling);
                break t;
              }
              l--;
            } else
              e !== "$" && e !== "$!" && e !== "$?" || l++;
          t = t.nextSibling;
        }
        Ot = null;
      }
    } else
      l === 27 ? (l = Ot, be(t.type) ? (t = cf, cf = null, Ot = t) : Ot = l) : Ot = ll ? Ol(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Wa() {
    Ot = ll = null, st = !1;
  }
  function Bs() {
    var t = Ue;
    return t !== null && (il === null ? il = t : il.push.apply(
      il,
      t
    ), Ue = null), t;
  }
  function $a(t) {
    Ue === null ? Ue = [t] : Ue.push(t);
  }
  var Xi = O(null), He = null, Zl = null;
  function ae(t, l, e) {
    w(Xi, l._currentValue), l._currentValue = e;
  }
  function Vl(t) {
    t._currentValue = Xi.current, U(Xi);
  }
  function Qi(t, l, e) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & l) !== l ? (t.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), t === e) break;
      t = t.return;
    }
  }
  function Zi(t, l, e, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var c = u;
          u = n;
          for (var s = 0; s < l.length; s++)
            if (c.context === l[s]) {
              u.lanes |= e, c = u.alternate, c !== null && (c.lanes |= e), Qi(
                u.return,
                e,
                t
              ), a || (i = null);
              break t;
            }
          u = c.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(r(341));
        i.lanes |= e, u = i.alternate, u !== null && (u.lanes |= e), Qi(i, e, t), i = null;
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (n = i.sibling, n !== null) {
            n.return = i.return, i = n;
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function Fa(t, l, e, a) {
    t = null;
    for (var n = l, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(r(387));
        if (i = i.memoizedProps, i !== null) {
          var c = n.type;
          ol(n.pendingProps.value, i.value) || (t !== null ? t.push(c) : t = [c]);
        }
      } else if (n === $t.current) {
        if (i = n.alternate, i === null) throw Error(r(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Nn) : t = [Nn]);
      }
      n = n.return;
    }
    t !== null && Zi(
      l,
      t,
      e,
      a
    ), l.flags |= 262144;
  }
  function eu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ol(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function qe(t) {
    He = t, Zl = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function It(t) {
    return Gs(He, t);
  }
  function au(t, l) {
    return He === null && qe(t), Gs(t, l);
  }
  function Gs(t, l) {
    var e = l._currentValue;
    if (l = { context: l, memoizedValue: e, next: null }, Zl === null) {
      if (t === null) throw Error(r(308));
      Zl = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
    } else Zl = Zl.next = l;
    return e;
  }
  var S0 = typeof AbortController < "u" ? AbortController : function() {
    var t = [], l = this.signal = {
      aborted: !1,
      addEventListener: function(e, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      l.aborted = !0, t.forEach(function(e) {
        return e();
      });
    };
  }, x0 = o.unstable_scheduleCallback, A0 = o.unstable_NormalPriority, Gt = {
    $$typeof: ft,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Vi() {
    return {
      controller: new S0(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ia(t) {
    t.refCount--, t.refCount === 0 && x0(A0, function() {
      t.controller.abort();
    });
  }
  var Pa = null, Li = 0, sa = 0, oa = null;
  function T0(t, l) {
    if (Pa === null) {
      var e = Pa = [];
      Li = 0, sa = kc(), oa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          e.push(a);
        }
      };
    }
    return Li++, l.then(Ys, Ys), l;
  }
  function Ys() {
    if (--Li === 0 && Pa !== null) {
      oa !== null && (oa.status = "fulfilled");
      var t = Pa;
      Pa = null, sa = 0, oa = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function E0(t, l) {
    var e = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        e.push(n);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = l;
        for (var n = 0; n < e.length; n++) (0, e[n])(l);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < e.length; n++)
          (0, e[n])(void 0);
      }
    ), a;
  }
  var Xs = j.S;
  j.S = function(t, l) {
    typeof l == "object" && l !== null && typeof l.then == "function" && T0(t, l), Xs !== null && Xs(t, l);
  };
  var Be = O(null);
  function Ki() {
    var t = Be.current;
    return t !== null ? t : zt.pooledCache;
  }
  function nu(t, l) {
    l === null ? w(Be, Be.current) : w(Be, l.pool);
  }
  function Qs() {
    var t = Ki();
    return t === null ? null : { parent: Gt._currentValue, pool: t };
  }
  var tn = Error(r(460)), Zs = Error(r(474)), uu = Error(r(542)), ki = { then: function() {
  } };
  function Vs(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function iu() {
  }
  function Ls(t, l, e) {
    switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(iu, iu), l = e), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, ks(t), t;
      default:
        if (typeof l.status == "string") l.then(iu, iu);
        else {
          if (t = zt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
          t = l, t.status = "pending", t.then(
            function(a) {
              if (l.status === "pending") {
                var n = l;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (l.status === "pending") {
                var n = l;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw t = l.reason, ks(t), t;
        }
        throw ln = l, tn;
    }
  }
  var ln = null;
  function Ks() {
    if (ln === null) throw Error(r(459));
    var t = ln;
    return ln = null, t;
  }
  function ks(t) {
    if (t === tn || t === uu)
      throw Error(r(483));
  }
  var ne = !1;
  function Ji(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Wi(t, l) {
    t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function ue(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ie(t, l, e) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (ht & 2) !== 0) {
      var n = a.pending;
      return n === null ? l.next = l : (l.next = n.next, n.next = l), a.pending = l, l = In(t), ws(t, null, e), l;
    }
    return Fn(t, a, l, e), In(t);
  }
  function en(t, l, e) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, Yf(t, e);
    }
  }
  function $i(t, l) {
    var e = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, e === a)) {
      var n = null, u = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = i : u = u.next = i, e = e.next;
        } while (e !== null);
        u === null ? n = u = l : u = u.next = l;
      } else n = u = l;
      e = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = e;
      return;
    }
    t = e.lastBaseUpdate, t === null ? e.firstBaseUpdate = l : t.next = l, e.lastBaseUpdate = l;
  }
  var Fi = !1;
  function an() {
    if (Fi) {
      var t = oa;
      if (t !== null) throw t;
    }
  }
  function nn(t, l, e, a) {
    Fi = !1;
    var n = t.updateQueue;
    ne = !1;
    var u = n.firstBaseUpdate, i = n.lastBaseUpdate, c = n.shared.pending;
    if (c !== null) {
      n.shared.pending = null;
      var s = c, b = s.next;
      s.next = null, i === null ? u = b : i.next = b, i = s;
      var E = t.alternate;
      E !== null && (E = E.updateQueue, c = E.lastBaseUpdate, c !== i && (c === null ? E.firstBaseUpdate = b : c.next = b, E.lastBaseUpdate = s));
    }
    if (u !== null) {
      var _ = n.baseState;
      i = 0, E = b = s = null, c = u;
      do {
        var S = c.lane & -536870913, A = S !== c.lane;
        if (A ? (it & S) === S : (a & S) === S) {
          S !== 0 && S === sa && (Fi = !0), E !== null && (E = E.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          t: {
            var J = t, K = c;
            S = l;
            var pt = e;
            switch (K.tag) {
              case 1:
                if (J = K.payload, typeof J == "function") {
                  _ = J.call(pt, _, S);
                  break t;
                }
                _ = J;
                break t;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = K.payload, S = typeof J == "function" ? J.call(pt, _, S) : J, S == null) break t;
                _ = H({}, _, S);
                break t;
              case 2:
                ne = !0;
            }
          }
          S = c.callback, S !== null && (t.flags |= 64, A && (t.flags |= 8192), A = n.callbacks, A === null ? n.callbacks = [S] : A.push(S));
        } else
          A = {
            lane: S,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, E === null ? (b = E = A, s = _) : E = E.next = A, i |= S;
        if (c = c.next, c === null) {
          if (c = n.shared.pending, c === null)
            break;
          A = c, c = A.next, A.next = null, n.lastBaseUpdate = A, n.shared.pending = null;
        }
      } while (!0);
      E === null && (s = _), n.baseState = s, n.firstBaseUpdate = b, n.lastBaseUpdate = E, u === null && (n.shared.lanes = 0), he |= i, t.lanes = i, t.memoizedState = _;
    }
  }
  function Js(t, l) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(l);
  }
  function Ws(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++)
        Js(e[t], l);
  }
  var ra = O(null), cu = O(0);
  function $s(t, l) {
    t = Fl, w(cu, t), w(ra, l), Fl = t | l.baseLanes;
  }
  function Ii() {
    w(cu, Fl), w(ra, ra.current);
  }
  function Pi() {
    Fl = cu.current, U(ra), U(cu);
  }
  var ce = 0, I = null, gt = null, Ht = null, fu = !1, da = !1, Ge = !1, su = 0, un = 0, ma = null, z0 = 0;
  function wt() {
    throw Error(r(321));
  }
  function tc(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!ol(t[e], l[e])) return !1;
    return !0;
  }
  function lc(t, l, e, a, n, u) {
    return ce = u, I = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, j.H = t === null || t.memoizedState === null ? Uo : Co, Ge = !1, u = e(a, n), Ge = !1, da && (u = Is(
      l,
      e,
      a,
      n
    )), Fs(t), u;
  }
  function Fs(t) {
    j.H = yu;
    var l = gt !== null && gt.next !== null;
    if (ce = 0, Ht = gt = I = null, fu = !1, un = 0, ma = null, l) throw Error(r(300));
    t === null || Zt || (t = t.dependencies, t !== null && eu(t) && (Zt = !0));
  }
  function Is(t, l, e, a) {
    I = t;
    var n = 0;
    do {
      if (da && (ma = null), un = 0, da = !1, 25 <= n) throw Error(r(301));
      if (n += 1, Ht = gt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      j.H = R0, u = l(e, a);
    } while (da);
    return u;
  }
  function M0() {
    var t = j.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? cn(l) : l, t = t.useState()[0], (gt !== null ? gt.memoizedState : null) !== t && (I.flags |= 1024), l;
  }
  function ec() {
    var t = su !== 0;
    return su = 0, t;
  }
  function ac(t, l, e) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
  }
  function nc(t) {
    if (fu) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      fu = !1;
    }
    ce = 0, Ht = gt = I = null, da = !1, un = su = 0, ma = null;
  }
  function nl() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ht === null ? I.memoizedState = Ht = t : Ht = Ht.next = t, Ht;
  }
  function qt() {
    if (gt === null) {
      var t = I.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = gt.next;
    var l = Ht === null ? I.memoizedState : Ht.next;
    if (l !== null)
      Ht = l, gt = t;
    else {
      if (t === null)
        throw I.alternate === null ? Error(r(467)) : Error(r(310));
      gt = t, t = {
        memoizedState: gt.memoizedState,
        baseState: gt.baseState,
        baseQueue: gt.baseQueue,
        queue: gt.queue,
        next: null
      }, Ht === null ? I.memoizedState = Ht = t : Ht = Ht.next = t;
    }
    return Ht;
  }
  function uc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function cn(t) {
    var l = un;
    return un += 1, ma === null && (ma = []), t = Ls(ma, t, l), l = I, (Ht === null ? l.memoizedState : Ht.next) === null && (l = l.alternate, j.H = l === null || l.memoizedState === null ? Uo : Co), t;
  }
  function ou(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return cn(t);
      if (t.$$typeof === ft) return It(t);
    }
    throw Error(r(438, String(t)));
  }
  function ic(t) {
    var l = null, e = I.updateQueue;
    if (e !== null && (l = e.memoCache), l == null) {
      var a = I.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (l = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), e === null && (e = uc(), I.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
      for (e = l.data[l.index] = Array(t), a = 0; a < t; a++)
        e[a] = gl;
    return l.index++, e;
  }
  function Ll(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function ru(t) {
    var l = qt();
    return cc(l, gt, t);
  }
  function cc(t, l, e) {
    var a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = e;
    var n = t.baseQueue, u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        n.next = u.next, u.next = i;
      }
      l.baseQueue = n = u, a.pending = null;
    }
    if (u = t.baseState, n === null) t.memoizedState = u;
    else {
      l = n.next;
      var c = i = null, s = null, b = l, E = !1;
      do {
        var _ = b.lane & -536870913;
        if (_ !== b.lane ? (it & _) === _ : (ce & _) === _) {
          var S = b.revertLane;
          if (S === 0)
            s !== null && (s = s.next = {
              lane: 0,
              revertLane: 0,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }), _ === sa && (E = !0);
          else if ((ce & S) === S) {
            b = b.next, S === sa && (E = !0);
            continue;
          } else
            _ = {
              lane: 0,
              revertLane: b.revertLane,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }, s === null ? (c = s = _, i = u) : s = s.next = _, I.lanes |= S, he |= S;
          _ = b.action, Ge && e(u, _), u = b.hasEagerState ? b.eagerState : e(u, _);
        } else
          S = {
            lane: _,
            revertLane: b.revertLane,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null
          }, s === null ? (c = s = S, i = u) : s = s.next = S, I.lanes |= _, he |= _;
        b = b.next;
      } while (b !== null && b !== l);
      if (s === null ? i = u : s.next = c, !ol(u, t.memoizedState) && (Zt = !0, E && (e = oa, e !== null)))
        throw e;
      t.memoizedState = u, t.baseState = i, t.baseQueue = s, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function fc(t) {
    var l = qt(), e = l.queue;
    if (e === null) throw Error(r(311));
    e.lastRenderedReducer = t;
    var a = e.dispatch, n = e.pending, u = l.memoizedState;
    if (n !== null) {
      e.pending = null;
      var i = n = n.next;
      do
        u = t(u, i.action), i = i.next;
      while (i !== n);
      ol(u, l.memoizedState) || (Zt = !0), l.memoizedState = u, l.baseQueue === null && (l.baseState = u), e.lastRenderedState = u;
    }
    return [u, a];
  }
  function Ps(t, l, e) {
    var a = I, n = qt(), u = st;
    if (u) {
      if (e === void 0) throw Error(r(407));
      e = e();
    } else e = l();
    var i = !ol(
      (gt || n).memoizedState,
      e
    );
    i && (n.memoizedState = e, Zt = !0), n = n.queue;
    var c = eo.bind(null, a, n, t);
    if (fn(2048, 8, c, [t]), n.getSnapshot !== l || i || Ht !== null && Ht.memoizedState.tag & 1) {
      if (a.flags |= 2048, ha(
        9,
        du(),
        lo.bind(
          null,
          a,
          n,
          e,
          l
        ),
        null
      ), zt === null) throw Error(r(349));
      u || (ce & 124) !== 0 || to(a, l, e);
    }
    return e;
  }
  function to(t, l, e) {
    t.flags |= 16384, t = { getSnapshot: l, value: e }, l = I.updateQueue, l === null ? (l = uc(), I.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
  }
  function lo(t, l, e, a) {
    l.value = e, l.getSnapshot = a, ao(l) && no(t);
  }
  function eo(t, l, e) {
    return e(function() {
      ao(l) && no(t);
    });
  }
  function ao(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !ol(t, e);
    } catch {
      return !0;
    }
  }
  function no(t) {
    var l = ua(t, 2);
    l !== null && vl(l, t, 2);
  }
  function sc(t) {
    var l = nl();
    if (typeof t == "function") {
      var e = t;
      if (t = e(), Ge) {
        te(!0);
        try {
          e();
        } finally {
          te(!1);
        }
      }
    }
    return l.memoizedState = l.baseState = t, l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ll,
      lastRenderedState: t
    }, l;
  }
  function uo(t, l, e, a) {
    return t.baseState = e, cc(
      t,
      gt,
      typeof a == "function" ? a : Ll
    );
  }
  function N0(t, l, e, a, n) {
    if (hu(t)) throw Error(r(485));
    if (t = l.action, t !== null) {
      var u = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          u.listeners.push(i);
        }
      };
      j.T !== null ? e(!0) : u.isTransition = !1, a(u), e = l.pending, e === null ? (u.next = l.pending = u, io(l, u)) : (u.next = e.next, l.pending = e.next = u);
    }
  }
  function io(t, l) {
    var e = l.action, a = l.payload, n = t.state;
    if (l.isTransition) {
      var u = j.T, i = {};
      j.T = i;
      try {
        var c = e(n, a), s = j.S;
        s !== null && s(i, c), co(t, l, c);
      } catch (b) {
        oc(t, l, b);
      } finally {
        j.T = u;
      }
    } else
      try {
        u = e(n, a), co(t, l, u);
      } catch (b) {
        oc(t, l, b);
      }
  }
  function co(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(a) {
        fo(t, l, a);
      },
      function(a) {
        return oc(t, l, a);
      }
    ) : fo(t, l, e);
  }
  function fo(t, l, e) {
    l.status = "fulfilled", l.value = e, so(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, io(t, e)));
  }
  function oc(t, l, e) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        l.status = "rejected", l.reason = e, so(l), l = l.next;
      while (l !== a);
    }
    t.action = null;
  }
  function so(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function oo(t, l) {
    return l;
  }
  function ro(t, l) {
    if (st) {
      var e = zt.formState;
      if (e !== null) {
        t: {
          var a = I;
          if (st) {
            if (Ot) {
              l: {
                for (var n = Ot, u = Rl; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break l;
                  }
                  if (n = Ol(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break l;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                Ot = Ol(
                  n.nextSibling
                ), a = n.data === "F!";
                break t;
              }
            }
            Ce(a);
          }
          a = !1;
        }
        a && (l = e[0]);
      }
    }
    return e = nl(), e.memoizedState = e.baseState = l, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: oo,
      lastRenderedState: l
    }, e.queue = a, e = Do.bind(
      null,
      I,
      a
    ), a.dispatch = e, a = sc(!1), u = yc.bind(
      null,
      I,
      !1,
      a.queue
    ), a = nl(), n = {
      state: l,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = n, e = N0.bind(
      null,
      I,
      n,
      u,
      e
    ), n.dispatch = e, a.memoizedState = t, [l, e, !1];
  }
  function mo(t) {
    var l = qt();
    return ho(l, gt, t);
  }
  function ho(t, l, e) {
    if (l = cc(
      t,
      l,
      oo
    )[0], t = ru(Ll)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var a = cn(l);
      } catch (i) {
        throw i === tn ? uu : i;
      }
    else a = l;
    l = qt();
    var n = l.queue, u = n.dispatch;
    return e !== l.memoizedState && (I.flags |= 2048, ha(
      9,
      du(),
      _0.bind(null, n, e),
      null
    )), [a, u, t];
  }
  function _0(t, l) {
    t.action = l;
  }
  function yo(t) {
    var l = qt(), e = gt;
    if (e !== null)
      return ho(l, e, t);
    qt(), l = l.memoizedState, e = qt();
    var a = e.queue.dispatch;
    return e.memoizedState = t, [l, a, !1];
  }
  function ha(t, l, e, a) {
    return t = { tag: t, create: e, deps: a, inst: l, next: null }, l = I.updateQueue, l === null && (l = uc(), I.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (a = e.next, e.next = t, t.next = a, l.lastEffect = t), t;
  }
  function du() {
    return { destroy: void 0, resource: void 0 };
  }
  function vo() {
    return qt().memoizedState;
  }
  function mu(t, l, e, a) {
    var n = nl();
    a = a === void 0 ? null : a, I.flags |= t, n.memoizedState = ha(
      1 | l,
      du(),
      e,
      a
    );
  }
  function fn(t, l, e, a) {
    var n = qt();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    gt !== null && a !== null && tc(a, gt.memoizedState.deps) ? n.memoizedState = ha(l, u, e, a) : (I.flags |= t, n.memoizedState = ha(
      1 | l,
      u,
      e,
      a
    ));
  }
  function go(t, l) {
    mu(8390656, 8, t, l);
  }
  function bo(t, l) {
    fn(2048, 8, t, l);
  }
  function po(t, l) {
    return fn(4, 2, t, l);
  }
  function So(t, l) {
    return fn(4, 4, t, l);
  }
  function xo(t, l) {
    if (typeof l == "function") {
      t = t();
      var e = l(t);
      return function() {
        typeof e == "function" ? e() : l(null);
      };
    }
    if (l != null)
      return t = t(), l.current = t, function() {
        l.current = null;
      };
  }
  function Ao(t, l, e) {
    e = e != null ? e.concat([t]) : null, fn(4, 4, xo.bind(null, l, t), e);
  }
  function rc() {
  }
  function To(t, l) {
    var e = qt();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    return l !== null && tc(l, a[1]) ? a[0] : (e.memoizedState = [t, l], t);
  }
  function Eo(t, l) {
    var e = qt();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    if (l !== null && tc(l, a[1]))
      return a[0];
    if (a = t(), Ge) {
      te(!0);
      try {
        t();
      } finally {
        te(!1);
      }
    }
    return e.memoizedState = [a, l], a;
  }
  function dc(t, l, e) {
    return e === void 0 || (ce & 1073741824) !== 0 ? t.memoizedState = l : (t.memoizedState = e, t = Nr(), I.lanes |= t, he |= t, e);
  }
  function zo(t, l, e, a) {
    return ol(e, l) ? e : ra.current !== null ? (t = dc(t, e, a), ol(t, l) || (Zt = !0), t) : (ce & 42) === 0 ? (Zt = !0, t.memoizedState = e) : (t = Nr(), I.lanes |= t, he |= t, l);
  }
  function Mo(t, l, e, a, n) {
    var u = T.p;
    T.p = u !== 0 && 8 > u ? u : 8;
    var i = j.T, c = {};
    j.T = c, yc(t, !1, l, e);
    try {
      var s = n(), b = j.S;
      if (b !== null && b(c, s), s !== null && typeof s == "object" && typeof s.then == "function") {
        var E = E0(
          s,
          a
        );
        sn(
          t,
          l,
          E,
          yl(t)
        );
      } else
        sn(
          t,
          l,
          a,
          yl(t)
        );
    } catch (_) {
      sn(
        t,
        l,
        { then: function() {
        }, status: "rejected", reason: _ },
        yl()
      );
    } finally {
      T.p = u, j.T = i;
    }
  }
  function O0() {
  }
  function mc(t, l, e, a) {
    if (t.tag !== 5) throw Error(r(476));
    var n = No(t).queue;
    Mo(
      t,
      n,
      l,
      tt,
      e === null ? O0 : function() {
        return _o(t), e(a);
      }
    );
  }
  function No(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: tt,
      baseState: tt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ll,
        lastRenderedState: tt
      },
      next: null
    };
    var e = {};
    return l.next = {
      memoizedState: e,
      baseState: e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ll,
        lastRenderedState: e
      },
      next: null
    }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
  }
  function _o(t) {
    var l = No(t).next.queue;
    sn(t, l, {}, yl());
  }
  function hc() {
    return It(Nn);
  }
  function Oo() {
    return qt().memoizedState;
  }
  function jo() {
    return qt().memoizedState;
  }
  function j0(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = yl();
          t = ue(e);
          var a = ie(l, t, e);
          a !== null && (vl(a, l, e), en(a, l, e)), l = { cache: Vi() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function D0(t, l, e) {
    var a = yl();
    e = {
      lane: a,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, hu(t) ? Ro(l, e) : (e = Ui(t, l, e, a), e !== null && (vl(e, t, a), wo(e, l, a)));
  }
  function Do(t, l, e) {
    var a = yl();
    sn(t, l, e, a);
  }
  function sn(t, l, e, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (hu(t)) Ro(l, n);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = l.lastRenderedReducer, u !== null))
        try {
          var i = l.lastRenderedState, c = u(i, e);
          if (n.hasEagerState = !0, n.eagerState = c, ol(c, i))
            return Fn(t, l, n, 0), zt === null && $n(), !1;
        } catch {
        } finally {
        }
      if (e = Ui(t, l, n, a), e !== null)
        return vl(e, t, a), wo(e, l, a), !0;
    }
    return !1;
  }
  function yc(t, l, e, a) {
    if (a = {
      lane: 2,
      revertLane: kc(),
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, hu(t)) {
      if (l) throw Error(r(479));
    } else
      l = Ui(
        t,
        e,
        a,
        2
      ), l !== null && vl(l, t, 2);
  }
  function hu(t) {
    var l = t.alternate;
    return t === I || l !== null && l === I;
  }
  function Ro(t, l) {
    da = fu = !0;
    var e = t.pending;
    e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
  }
  function wo(t, l, e) {
    if ((e & 4194048) !== 0) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, Yf(t, e);
    }
  }
  var yu = {
    readContext: It,
    use: ou,
    useCallback: wt,
    useContext: wt,
    useEffect: wt,
    useImperativeHandle: wt,
    useLayoutEffect: wt,
    useInsertionEffect: wt,
    useMemo: wt,
    useReducer: wt,
    useRef: wt,
    useState: wt,
    useDebugValue: wt,
    useDeferredValue: wt,
    useTransition: wt,
    useSyncExternalStore: wt,
    useId: wt,
    useHostTransitionStatus: wt,
    useFormState: wt,
    useActionState: wt,
    useOptimistic: wt,
    useMemoCache: wt,
    useCacheRefresh: wt
  }, Uo = {
    readContext: It,
    use: ou,
    useCallback: function(t, l) {
      return nl().memoizedState = [
        t,
        l === void 0 ? null : l
      ], t;
    },
    useContext: It,
    useEffect: go,
    useImperativeHandle: function(t, l, e) {
      e = e != null ? e.concat([t]) : null, mu(
        4194308,
        4,
        xo.bind(null, l, t),
        e
      );
    },
    useLayoutEffect: function(t, l) {
      return mu(4194308, 4, t, l);
    },
    useInsertionEffect: function(t, l) {
      mu(4, 2, t, l);
    },
    useMemo: function(t, l) {
      var e = nl();
      l = l === void 0 ? null : l;
      var a = t();
      if (Ge) {
        te(!0);
        try {
          t();
        } finally {
          te(!1);
        }
      }
      return e.memoizedState = [a, l], a;
    },
    useReducer: function(t, l, e) {
      var a = nl();
      if (e !== void 0) {
        var n = e(l);
        if (Ge) {
          te(!0);
          try {
            e(l);
          } finally {
            te(!1);
          }
        }
      } else n = l;
      return a.memoizedState = a.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, a.queue = t, t = t.dispatch = D0.bind(
        null,
        I,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var l = nl();
      return t = { current: t }, l.memoizedState = t;
    },
    useState: function(t) {
      t = sc(t);
      var l = t.queue, e = Do.bind(null, I, l);
      return l.dispatch = e, [t.memoizedState, e];
    },
    useDebugValue: rc,
    useDeferredValue: function(t, l) {
      var e = nl();
      return dc(e, t, l);
    },
    useTransition: function() {
      var t = sc(!1);
      return t = Mo.bind(
        null,
        I,
        t.queue,
        !0,
        !1
      ), nl().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, l, e) {
      var a = I, n = nl();
      if (st) {
        if (e === void 0)
          throw Error(r(407));
        e = e();
      } else {
        if (e = l(), zt === null)
          throw Error(r(349));
        (it & 124) !== 0 || to(a, l, e);
      }
      n.memoizedState = e;
      var u = { value: e, getSnapshot: l };
      return n.queue = u, go(eo.bind(null, a, u, t), [
        t
      ]), a.flags |= 2048, ha(
        9,
        du(),
        lo.bind(
          null,
          a,
          u,
          e,
          l
        ),
        null
      ), e;
    },
    useId: function() {
      var t = nl(), l = zt.identifierPrefix;
      if (st) {
        var e = Ql, a = Xl;
        e = (a & ~(1 << 32 - sl(a) - 1)).toString(32) + e, l = "«" + l + "R" + e, e = su++, 0 < e && (l += "H" + e.toString(32)), l += "»";
      } else
        e = z0++, l = "«" + l + "r" + e.toString(32) + "»";
      return t.memoizedState = l;
    },
    useHostTransitionStatus: hc,
    useFormState: ro,
    useActionState: ro,
    useOptimistic: function(t) {
      var l = nl();
      l.memoizedState = l.baseState = t;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return l.queue = e, l = yc.bind(
        null,
        I,
        !0,
        e
      ), e.dispatch = l, [t, l];
    },
    useMemoCache: ic,
    useCacheRefresh: function() {
      return nl().memoizedState = j0.bind(
        null,
        I
      );
    }
  }, Co = {
    readContext: It,
    use: ou,
    useCallback: To,
    useContext: It,
    useEffect: bo,
    useImperativeHandle: Ao,
    useInsertionEffect: po,
    useLayoutEffect: So,
    useMemo: Eo,
    useReducer: ru,
    useRef: vo,
    useState: function() {
      return ru(Ll);
    },
    useDebugValue: rc,
    useDeferredValue: function(t, l) {
      var e = qt();
      return zo(
        e,
        gt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = ru(Ll)[0], l = qt().memoizedState;
      return [
        typeof t == "boolean" ? t : cn(t),
        l
      ];
    },
    useSyncExternalStore: Ps,
    useId: Oo,
    useHostTransitionStatus: hc,
    useFormState: mo,
    useActionState: mo,
    useOptimistic: function(t, l) {
      var e = qt();
      return uo(e, gt, t, l);
    },
    useMemoCache: ic,
    useCacheRefresh: jo
  }, R0 = {
    readContext: It,
    use: ou,
    useCallback: To,
    useContext: It,
    useEffect: bo,
    useImperativeHandle: Ao,
    useInsertionEffect: po,
    useLayoutEffect: So,
    useMemo: Eo,
    useReducer: fc,
    useRef: vo,
    useState: function() {
      return fc(Ll);
    },
    useDebugValue: rc,
    useDeferredValue: function(t, l) {
      var e = qt();
      return gt === null ? dc(e, t, l) : zo(
        e,
        gt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = fc(Ll)[0], l = qt().memoizedState;
      return [
        typeof t == "boolean" ? t : cn(t),
        l
      ];
    },
    useSyncExternalStore: Ps,
    useId: Oo,
    useHostTransitionStatus: hc,
    useFormState: yo,
    useActionState: yo,
    useOptimistic: function(t, l) {
      var e = qt();
      return gt !== null ? uo(e, gt, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
    },
    useMemoCache: ic,
    useCacheRefresh: jo
  }, ya = null, on = 0;
  function vu(t) {
    var l = on;
    return on += 1, ya === null && (ya = []), Ls(ya, t, l);
  }
  function rn(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function gu(t, l) {
    throw l.$$typeof === F ? Error(r(525)) : (t = Object.prototype.toString.call(l), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
      )
    ));
  }
  function Ho(t) {
    var l = t._init;
    return l(t._payload);
  }
  function qo(t) {
    function l(v, m) {
      if (t) {
        var g = v.deletions;
        g === null ? (v.deletions = [m], v.flags |= 16) : g.push(m);
      }
    }
    function e(v, m) {
      if (!t) return null;
      for (; m !== null; )
        l(v, m), m = m.sibling;
      return null;
    }
    function a(v) {
      for (var m = /* @__PURE__ */ new Map(); v !== null; )
        v.key !== null ? m.set(v.key, v) : m.set(v.index, v), v = v.sibling;
      return m;
    }
    function n(v, m) {
      return v = Yl(v, m), v.index = 0, v.sibling = null, v;
    }
    function u(v, m, g) {
      return v.index = g, t ? (g = v.alternate, g !== null ? (g = g.index, g < m ? (v.flags |= 67108866, m) : g) : (v.flags |= 67108866, m)) : (v.flags |= 1048576, m);
    }
    function i(v) {
      return t && v.alternate === null && (v.flags |= 67108866), v;
    }
    function c(v, m, g, N) {
      return m === null || m.tag !== 6 ? (m = Hi(g, v.mode, N), m.return = v, m) : (m = n(m, g), m.return = v, m);
    }
    function s(v, m, g, N) {
      var G = g.type;
      return G === L ? E(
        v,
        m,
        g.props.children,
        N,
        g.key
      ) : m !== null && (m.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Et && Ho(G) === m.type) ? (m = n(m, g.props), rn(m, g), m.return = v, m) : (m = Pn(
        g.type,
        g.key,
        g.props,
        null,
        v.mode,
        N
      ), rn(m, g), m.return = v, m);
    }
    function b(v, m, g, N) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== g.containerInfo || m.stateNode.implementation !== g.implementation ? (m = qi(g, v.mode, N), m.return = v, m) : (m = n(m, g.children || []), m.return = v, m);
    }
    function E(v, m, g, N, G) {
      return m === null || m.tag !== 7 ? (m = De(
        g,
        v.mode,
        N,
        G
      ), m.return = v, m) : (m = n(m, g), m.return = v, m);
    }
    function _(v, m, g) {
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return m = Hi(
          "" + m,
          v.mode,
          g
        ), m.return = v, m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case ot:
            return g = Pn(
              m.type,
              m.key,
              m.props,
              null,
              v.mode,
              g
            ), rn(g, m), g.return = v, g;
          case nt:
            return m = qi(
              m,
              v.mode,
              g
            ), m.return = v, m;
          case Et:
            var N = m._init;
            return m = N(m._payload), _(v, m, g);
        }
        if (R(m) || Mt(m))
          return m = De(
            m,
            v.mode,
            g,
            null
          ), m.return = v, m;
        if (typeof m.then == "function")
          return _(v, vu(m), g);
        if (m.$$typeof === ft)
          return _(
            v,
            au(v, m),
            g
          );
        gu(v, m);
      }
      return null;
    }
    function S(v, m, g, N) {
      var G = m !== null ? m.key : null;
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return G !== null ? null : c(v, m, "" + g, N);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case ot:
            return g.key === G ? s(v, m, g, N) : null;
          case nt:
            return g.key === G ? b(v, m, g, N) : null;
          case Et:
            return G = g._init, g = G(g._payload), S(v, m, g, N);
        }
        if (R(g) || Mt(g))
          return G !== null ? null : E(v, m, g, N, null);
        if (typeof g.then == "function")
          return S(
            v,
            m,
            vu(g),
            N
          );
        if (g.$$typeof === ft)
          return S(
            v,
            m,
            au(v, g),
            N
          );
        gu(v, g);
      }
      return null;
    }
    function A(v, m, g, N, G) {
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return v = v.get(g) || null, c(m, v, "" + N, G);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case ot:
            return v = v.get(
              N.key === null ? g : N.key
            ) || null, s(m, v, N, G);
          case nt:
            return v = v.get(
              N.key === null ? g : N.key
            ) || null, b(m, v, N, G);
          case Et:
            var lt = N._init;
            return N = lt(N._payload), A(
              v,
              m,
              g,
              N,
              G
            );
        }
        if (R(N) || Mt(N))
          return v = v.get(g) || null, E(m, v, N, G, null);
        if (typeof N.then == "function")
          return A(
            v,
            m,
            g,
            vu(N),
            G
          );
        if (N.$$typeof === ft)
          return A(
            v,
            m,
            g,
            au(m, N),
            G
          );
        gu(m, N);
      }
      return null;
    }
    function J(v, m, g, N) {
      for (var G = null, lt = null, Z = m, k = m = 0, Lt = null; Z !== null && k < g.length; k++) {
        Z.index > k ? (Lt = Z, Z = null) : Lt = Z.sibling;
        var ct = S(
          v,
          Z,
          g[k],
          N
        );
        if (ct === null) {
          Z === null && (Z = Lt);
          break;
        }
        t && Z && ct.alternate === null && l(v, Z), m = u(ct, m, k), lt === null ? G = ct : lt.sibling = ct, lt = ct, Z = Lt;
      }
      if (k === g.length)
        return e(v, Z), st && we(v, k), G;
      if (Z === null) {
        for (; k < g.length; k++)
          Z = _(v, g[k], N), Z !== null && (m = u(
            Z,
            m,
            k
          ), lt === null ? G = Z : lt.sibling = Z, lt = Z);
        return st && we(v, k), G;
      }
      for (Z = a(Z); k < g.length; k++)
        Lt = A(
          Z,
          v,
          k,
          g[k],
          N
        ), Lt !== null && (t && Lt.alternate !== null && Z.delete(
          Lt.key === null ? k : Lt.key
        ), m = u(
          Lt,
          m,
          k
        ), lt === null ? G = Lt : lt.sibling = Lt, lt = Lt);
      return t && Z.forEach(function(Te) {
        return l(v, Te);
      }), st && we(v, k), G;
    }
    function K(v, m, g, N) {
      if (g == null) throw Error(r(151));
      for (var G = null, lt = null, Z = m, k = m = 0, Lt = null, ct = g.next(); Z !== null && !ct.done; k++, ct = g.next()) {
        Z.index > k ? (Lt = Z, Z = null) : Lt = Z.sibling;
        var Te = S(v, Z, ct.value, N);
        if (Te === null) {
          Z === null && (Z = Lt);
          break;
        }
        t && Z && Te.alternate === null && l(v, Z), m = u(Te, m, k), lt === null ? G = Te : lt.sibling = Te, lt = Te, Z = Lt;
      }
      if (ct.done)
        return e(v, Z), st && we(v, k), G;
      if (Z === null) {
        for (; !ct.done; k++, ct = g.next())
          ct = _(v, ct.value, N), ct !== null && (m = u(ct, m, k), lt === null ? G = ct : lt.sibling = ct, lt = ct);
        return st && we(v, k), G;
      }
      for (Z = a(Z); !ct.done; k++, ct = g.next())
        ct = A(Z, v, k, ct.value, N), ct !== null && (t && ct.alternate !== null && Z.delete(ct.key === null ? k : ct.key), m = u(ct, m, k), lt === null ? G = ct : lt.sibling = ct, lt = ct);
      return t && Z.forEach(function(wh) {
        return l(v, wh);
      }), st && we(v, k), G;
    }
    function pt(v, m, g, N) {
      if (typeof g == "object" && g !== null && g.type === L && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case ot:
            t: {
              for (var G = g.key; m !== null; ) {
                if (m.key === G) {
                  if (G = g.type, G === L) {
                    if (m.tag === 7) {
                      e(
                        v,
                        m.sibling
                      ), N = n(
                        m,
                        g.props.children
                      ), N.return = v, v = N;
                      break t;
                    }
                  } else if (m.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Et && Ho(G) === m.type) {
                    e(
                      v,
                      m.sibling
                    ), N = n(m, g.props), rn(N, g), N.return = v, v = N;
                    break t;
                  }
                  e(v, m);
                  break;
                } else l(v, m);
                m = m.sibling;
              }
              g.type === L ? (N = De(
                g.props.children,
                v.mode,
                N,
                g.key
              ), N.return = v, v = N) : (N = Pn(
                g.type,
                g.key,
                g.props,
                null,
                v.mode,
                N
              ), rn(N, g), N.return = v, v = N);
            }
            return i(v);
          case nt:
            t: {
              for (G = g.key; m !== null; ) {
                if (m.key === G)
                  if (m.tag === 4 && m.stateNode.containerInfo === g.containerInfo && m.stateNode.implementation === g.implementation) {
                    e(
                      v,
                      m.sibling
                    ), N = n(m, g.children || []), N.return = v, v = N;
                    break t;
                  } else {
                    e(v, m);
                    break;
                  }
                else l(v, m);
                m = m.sibling;
              }
              N = qi(g, v.mode, N), N.return = v, v = N;
            }
            return i(v);
          case Et:
            return G = g._init, g = G(g._payload), pt(
              v,
              m,
              g,
              N
            );
        }
        if (R(g))
          return J(
            v,
            m,
            g,
            N
          );
        if (Mt(g)) {
          if (G = Mt(g), typeof G != "function") throw Error(r(150));
          return g = G.call(g), K(
            v,
            m,
            g,
            N
          );
        }
        if (typeof g.then == "function")
          return pt(
            v,
            m,
            vu(g),
            N
          );
        if (g.$$typeof === ft)
          return pt(
            v,
            m,
            au(v, g),
            N
          );
        gu(v, g);
      }
      return typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint" ? (g = "" + g, m !== null && m.tag === 6 ? (e(v, m.sibling), N = n(m, g), N.return = v, v = N) : (e(v, m), N = Hi(g, v.mode, N), N.return = v, v = N), i(v)) : e(v, m);
    }
    return function(v, m, g, N) {
      try {
        on = 0;
        var G = pt(
          v,
          m,
          g,
          N
        );
        return ya = null, G;
      } catch (Z) {
        if (Z === tn || Z === uu) throw Z;
        var lt = rl(29, Z, null, v.mode);
        return lt.lanes = N, lt.return = v, lt;
      } finally {
      }
    };
  }
  var va = qo(!0), Bo = qo(!1), El = O(null), wl = null;
  function fe(t) {
    var l = t.alternate;
    w(Yt, Yt.current & 1), w(El, t), wl === null && (l === null || ra.current !== null || l.memoizedState !== null) && (wl = t);
  }
  function Go(t) {
    if (t.tag === 22) {
      if (w(Yt, Yt.current), w(El, t), wl === null) {
        var l = t.alternate;
        l !== null && l.memoizedState !== null && (wl = t);
      }
    } else se();
  }
  function se() {
    w(Yt, Yt.current), w(El, El.current);
  }
  function Kl(t) {
    U(El), wl === t && (wl = null), U(Yt);
  }
  var Yt = O(0);
  function bu(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || e.data === "$?" || uf(e)))
          return l;
      } else if (l.tag === 19 && l.memoizedProps.revealOrder !== void 0) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return null;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    return null;
  }
  function vc(t, l, e, a) {
    l = t.memoizedState, e = e(a, l), e = e == null ? l : H({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var gc = {
    enqueueSetState: function(t, l, e) {
      t = t._reactInternals;
      var a = yl(), n = ue(a);
      n.payload = l, e != null && (n.callback = e), l = ie(t, n, a), l !== null && (vl(l, t, a), en(l, t, a));
    },
    enqueueReplaceState: function(t, l, e) {
      t = t._reactInternals;
      var a = yl(), n = ue(a);
      n.tag = 1, n.payload = l, e != null && (n.callback = e), l = ie(t, n, a), l !== null && (vl(l, t, a), en(l, t, a));
    },
    enqueueForceUpdate: function(t, l) {
      t = t._reactInternals;
      var e = yl(), a = ue(e);
      a.tag = 2, l != null && (a.callback = l), l = ie(t, a, e), l !== null && (vl(l, t, e), en(l, t, e));
    }
  };
  function Yo(t, l, e, a, n, u, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, i) : l.prototype && l.prototype.isPureReactComponent ? !Ka(e, a) || !Ka(n, u) : !0;
  }
  function Xo(t, l, e, a) {
    t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, a), l.state !== t && gc.enqueueReplaceState(l, l.state, null);
  }
  function Ye(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var a in l)
        a !== "ref" && (e[a] = l[a]);
    }
    if (t = t.defaultProps) {
      e === l && (e = H({}, e));
      for (var n in t)
        e[n] === void 0 && (e[n] = t[n]);
    }
    return e;
  }
  var pu = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var l = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(l)) return;
    } else if (typeof f == "object" && typeof f.emit == "function") {
      f.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function Qo(t) {
    pu(t);
  }
  function Zo(t) {
    console.error(t);
  }
  function Vo(t) {
    pu(t);
  }
  function Su(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Lo(t, l, e) {
    try {
      var a = t.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function bc(t, l, e) {
    return e = ue(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      Su(t, l);
    }, e;
  }
  function Ko(t) {
    return t = ue(t), t.tag = 3, t;
  }
  function ko(t, l, e, a) {
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      t.payload = function() {
        return n(u);
      }, t.callback = function() {
        Lo(l, e, a);
      };
    }
    var i = e.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      Lo(l, e, a), typeof n != "function" && (ye === null ? ye = /* @__PURE__ */ new Set([this]) : ye.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function w0(t, l, e, a, n) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (l = e.alternate, l !== null && Fa(
        l,
        e,
        n,
        !0
      ), e = El.current, e !== null) {
        switch (e.tag) {
          case 13:
            return wl === null ? Qc() : e.alternate === null && jt === 0 && (jt = 3), e.flags &= -257, e.flags |= 65536, e.lanes = n, a === ki ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : l.add(a), Vc(t, a, n)), !1;
          case 22:
            return e.flags |= 65536, a === ki ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), Vc(t, a, n)), !1;
        }
        throw Error(r(435, e.tag));
      }
      return Vc(t, a, n), Qc(), !1;
    }
    if (st)
      return l = El.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = n, a !== Yi && (t = Error(r(422), { cause: a }), $a(Sl(t, e)))) : (a !== Yi && (l = Error(r(423), {
        cause: a
      }), $a(
        Sl(l, e)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = Sl(a, e), n = bc(
        t.stateNode,
        a,
        n
      ), $i(t, n), jt !== 4 && (jt = 2)), !1;
    var u = Error(r(520), { cause: a });
    if (u = Sl(u, e), bn === null ? bn = [u] : bn.push(u), jt !== 4 && (jt = 2), l === null) return !0;
    a = Sl(a, e), e = l;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, t = n & -n, e.lanes |= t, t = bc(e.stateNode, a, t), $i(e, t), !1;
        case 1:
          if (l = e.type, u = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (ye === null || !ye.has(u))))
            return e.flags |= 65536, n &= -n, e.lanes |= n, n = Ko(n), ko(
              n,
              t,
              e,
              a
            ), $i(e, n), !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var Jo = Error(r(461)), Zt = !1;
  function Kt(t, l, e, a) {
    l.child = t === null ? Bo(l, null, e, a) : va(
      l,
      t.child,
      e,
      a
    );
  }
  function Wo(t, l, e, a, n) {
    e = e.render;
    var u = l.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a)
        c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return qe(l), a = lc(
      t,
      l,
      e,
      i,
      u,
      n
    ), c = ec(), t !== null && !Zt ? (ac(t, l, n), kl(t, l, n)) : (st && c && Bi(l), l.flags |= 1, Kt(t, l, a, n), l.child);
  }
  function $o(t, l, e, a, n) {
    if (t === null) {
      var u = e.type;
      return typeof u == "function" && !Ci(u) && u.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = u, Fo(
        t,
        l,
        u,
        a,
        n
      )) : (t = Pn(
        e.type,
        null,
        a,
        l,
        l.mode,
        n
      ), t.ref = l.ref, t.return = l, l.child = t);
    }
    if (u = t.child, !Mc(t, n)) {
      var i = u.memoizedProps;
      if (e = e.compare, e = e !== null ? e : Ka, e(i, a) && t.ref === l.ref)
        return kl(t, l, n);
    }
    return l.flags |= 1, t = Yl(u, a), t.ref = l.ref, t.return = l, l.child = t;
  }
  function Fo(t, l, e, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Ka(u, a) && t.ref === l.ref)
        if (Zt = !1, l.pendingProps = a = u, Mc(t, n))
          (t.flags & 131072) !== 0 && (Zt = !0);
        else
          return l.lanes = t.lanes, kl(t, l, n);
    }
    return pc(
      t,
      l,
      e,
      a,
      n
    );
  }
  function Io(t, l, e) {
    var a = l.pendingProps, n = a.children, u = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (a = u !== null ? u.baseLanes | e : e, t !== null) {
          for (n = l.child = t.child, u = 0; n !== null; )
            u = u | n.lanes | n.childLanes, n = n.sibling;
          l.childLanes = u & ~a;
        } else l.childLanes = 0, l.child = null;
        return Po(
          t,
          l,
          a,
          e
        );
      }
      if ((e & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && nu(
          l,
          u !== null ? u.cachePool : null
        ), u !== null ? $s(l, u) : Ii(), Go(l);
      else
        return l.lanes = l.childLanes = 536870912, Po(
          t,
          l,
          u !== null ? u.baseLanes | e : e,
          e
        );
    } else
      u !== null ? (nu(l, u.cachePool), $s(l, u), se(), l.memoizedState = null) : (t !== null && nu(l, null), Ii(), se());
    return Kt(t, l, n, e), l.child;
  }
  function Po(t, l, e, a) {
    var n = Ki();
    return n = n === null ? null : { parent: Gt._currentValue, pool: n }, l.memoizedState = {
      baseLanes: e,
      cachePool: n
    }, t !== null && nu(l, null), Ii(), Go(l), t !== null && Fa(t, l, a, !0), null;
  }
  function xu(t, l) {
    var e = l.ref;
    if (e === null)
      t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object")
        throw Error(r(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function pc(t, l, e, a, n) {
    return qe(l), e = lc(
      t,
      l,
      e,
      a,
      void 0,
      n
    ), a = ec(), t !== null && !Zt ? (ac(t, l, n), kl(t, l, n)) : (st && a && Bi(l), l.flags |= 1, Kt(t, l, e, n), l.child);
  }
  function tr(t, l, e, a, n, u) {
    return qe(l), l.updateQueue = null, e = Is(
      l,
      a,
      e,
      n
    ), Fs(t), a = ec(), t !== null && !Zt ? (ac(t, l, u), kl(t, l, u)) : (st && a && Bi(l), l.flags |= 1, Kt(t, l, e, u), l.child);
  }
  function lr(t, l, e, a, n) {
    if (qe(l), l.stateNode === null) {
      var u = ia, i = e.contextType;
      typeof i == "object" && i !== null && (u = It(i)), u = new e(a, u), l.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = gc, l.stateNode = u, u._reactInternals = l, u = l.stateNode, u.props = a, u.state = l.memoizedState, u.refs = {}, Ji(l), i = e.contextType, u.context = typeof i == "object" && i !== null ? It(i) : ia, u.state = l.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (vc(
        l,
        e,
        i,
        a
      ), u.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && gc.enqueueReplaceState(u, u.state, null), nn(l, a, u, n), an(), u.state = l.memoizedState), typeof u.componentDidMount == "function" && (l.flags |= 4194308), a = !0;
    } else if (t === null) {
      u = l.stateNode;
      var c = l.memoizedProps, s = Ye(e, c);
      u.props = s;
      var b = u.context, E = e.contextType;
      i = ia, typeof E == "object" && E !== null && (i = It(E));
      var _ = e.getDerivedStateFromProps;
      E = typeof _ == "function" || typeof u.getSnapshotBeforeUpdate == "function", c = l.pendingProps !== c, E || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c || b !== i) && Xo(
        l,
        u,
        a,
        i
      ), ne = !1;
      var S = l.memoizedState;
      u.state = S, nn(l, a, u, n), an(), b = l.memoizedState, c || S !== b || ne ? (typeof _ == "function" && (vc(
        l,
        e,
        _,
        a
      ), b = l.memoizedState), (s = ne || Yo(
        l,
        e,
        s,
        a,
        S,
        b,
        i
      )) ? (E || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = b), u.props = a, u.state = b, u.context = i, a = s) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308), a = !1);
    } else {
      u = l.stateNode, Wi(t, l), i = l.memoizedProps, E = Ye(e, i), u.props = E, _ = l.pendingProps, S = u.context, b = e.contextType, s = ia, typeof b == "object" && b !== null && (s = It(b)), c = e.getDerivedStateFromProps, (b = typeof c == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== _ || S !== s) && Xo(
        l,
        u,
        a,
        s
      ), ne = !1, S = l.memoizedState, u.state = S, nn(l, a, u, n), an();
      var A = l.memoizedState;
      i !== _ || S !== A || ne || t !== null && t.dependencies !== null && eu(t.dependencies) ? (typeof c == "function" && (vc(
        l,
        e,
        c,
        a
      ), A = l.memoizedState), (E = ne || Yo(
        l,
        e,
        E,
        a,
        S,
        A,
        s
      ) || t !== null && t.dependencies !== null && eu(t.dependencies)) ? (b || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, A, s), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        A,
        s
      )), typeof u.componentDidUpdate == "function" && (l.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && S === t.memoizedState || (l.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && S === t.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = A), u.props = a, u.state = A, u.context = s, a = E) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && S === t.memoizedState || (l.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && S === t.memoizedState || (l.flags |= 1024), a = !1);
    }
    return u = a, xu(t, l), a = (l.flags & 128) !== 0, u || a ? (u = l.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : u.render(), l.flags |= 1, t !== null && a ? (l.child = va(
      l,
      t.child,
      null,
      n
    ), l.child = va(
      l,
      null,
      e,
      n
    )) : Kt(t, l, e, n), l.memoizedState = u.state, t = l.child) : t = kl(
      t,
      l,
      n
    ), t;
  }
  function er(t, l, e, a) {
    return Wa(), l.flags |= 256, Kt(t, l, e, a), l.child;
  }
  var Sc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function xc(t) {
    return { baseLanes: t, cachePool: Qs() };
  }
  function Ac(t, l, e) {
    return t = t !== null ? t.childLanes & ~e : 0, l && (t |= zl), t;
  }
  function ar(t, l, e) {
    var a = l.pendingProps, n = !1, u = (l.flags & 128) !== 0, i;
    if ((i = u) || (i = t !== null && t.memoizedState === null ? !1 : (Yt.current & 2) !== 0), i && (n = !0, l.flags &= -129), i = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if (st) {
        if (n ? fe(l) : se(), st) {
          var c = Ot, s;
          if (s = c) {
            t: {
              for (s = c, c = Rl; s.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break t;
                }
                if (s = Ol(
                  s.nextSibling
                ), s === null) {
                  c = null;
                  break t;
                }
              }
              c = s;
            }
            c !== null ? (l.memoizedState = {
              dehydrated: c,
              treeContext: Re !== null ? { id: Xl, overflow: Ql } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, s = rl(
              18,
              null,
              null,
              0
            ), s.stateNode = c, s.return = l, l.child = s, ll = l, Ot = null, s = !0) : s = !1;
          }
          s || Ce(l);
        }
        if (c = l.memoizedState, c !== null && (c = c.dehydrated, c !== null))
          return uf(c) ? l.lanes = 32 : l.lanes = 536870912, null;
        Kl(l);
      }
      return c = a.children, a = a.fallback, n ? (se(), n = l.mode, c = Au(
        { mode: "hidden", children: c },
        n
      ), a = De(
        a,
        n,
        e,
        null
      ), c.return = l, a.return = l, c.sibling = a, l.child = c, n = l.child, n.memoizedState = xc(e), n.childLanes = Ac(
        t,
        i,
        e
      ), l.memoizedState = Sc, a) : (fe(l), Tc(l, c));
    }
    if (s = t.memoizedState, s !== null && (c = s.dehydrated, c !== null)) {
      if (u)
        l.flags & 256 ? (fe(l), l.flags &= -257, l = Ec(
          t,
          l,
          e
        )) : l.memoizedState !== null ? (se(), l.child = t.child, l.flags |= 128, l = null) : (se(), n = a.fallback, c = l.mode, a = Au(
          { mode: "visible", children: a.children },
          c
        ), n = De(
          n,
          c,
          e,
          null
        ), n.flags |= 2, a.return = l, n.return = l, a.sibling = n, l.child = a, va(
          l,
          t.child,
          null,
          e
        ), a = l.child, a.memoizedState = xc(e), a.childLanes = Ac(
          t,
          i,
          e
        ), l.memoizedState = Sc, l = n);
      else if (fe(l), uf(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var b = i.dgst;
        i = b, a = Error(r(419)), a.stack = "", a.digest = i, $a({ value: a, source: null, stack: null }), l = Ec(
          t,
          l,
          e
        );
      } else if (Zt || Fa(t, l, e, !1), i = (e & t.childLanes) !== 0, Zt || i) {
        if (i = zt, i !== null && (a = e & -e, a = (a & 42) !== 0 ? 1 : ii(a), a = (a & (i.suspendedLanes | e)) !== 0 ? 0 : a, a !== 0 && a !== s.retryLane))
          throw s.retryLane = a, ua(t, a), vl(i, t, a), Jo;
        c.data === "$?" || Qc(), l = Ec(
          t,
          l,
          e
        );
      } else
        c.data === "$?" ? (l.flags |= 192, l.child = t.child, l = null) : (t = s.treeContext, Ot = Ol(
          c.nextSibling
        ), ll = l, st = !0, Ue = null, Rl = !1, t !== null && (Al[Tl++] = Xl, Al[Tl++] = Ql, Al[Tl++] = Re, Xl = t.id, Ql = t.overflow, Re = l), l = Tc(
          l,
          a.children
        ), l.flags |= 4096);
      return l;
    }
    return n ? (se(), n = a.fallback, c = l.mode, s = t.child, b = s.sibling, a = Yl(s, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = s.subtreeFlags & 65011712, b !== null ? n = Yl(b, n) : (n = De(
      n,
      c,
      e,
      null
    ), n.flags |= 2), n.return = l, a.return = l, a.sibling = n, l.child = a, a = n, n = l.child, c = t.child.memoizedState, c === null ? c = xc(e) : (s = c.cachePool, s !== null ? (b = Gt._currentValue, s = s.parent !== b ? { parent: b, pool: b } : s) : s = Qs(), c = {
      baseLanes: c.baseLanes | e,
      cachePool: s
    }), n.memoizedState = c, n.childLanes = Ac(
      t,
      i,
      e
    ), l.memoizedState = Sc, a) : (fe(l), e = t.child, t = e.sibling, e = Yl(e, {
      mode: "visible",
      children: a.children
    }), e.return = l, e.sibling = null, t !== null && (i = l.deletions, i === null ? (l.deletions = [t], l.flags |= 16) : i.push(t)), l.child = e, l.memoizedState = null, e);
  }
  function Tc(t, l) {
    return l = Au(
      { mode: "visible", children: l },
      t.mode
    ), l.return = t, t.child = l;
  }
  function Au(t, l) {
    return t = rl(22, t, null, l), t.lanes = 0, t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, t;
  }
  function Ec(t, l, e) {
    return va(l, t.child, null, e), t = Tc(
      l,
      l.pendingProps.children
    ), t.flags |= 2, l.memoizedState = null, t;
  }
  function nr(t, l, e) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l), Qi(t.return, l, e);
  }
  function zc(t, l, e, a, n) {
    var u = t.memoizedState;
    u === null ? t.memoizedState = {
      isBackwards: l,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: e,
      tailMode: n
    } : (u.isBackwards = l, u.rendering = null, u.renderingStartTime = 0, u.last = a, u.tail = e, u.tailMode = n);
  }
  function ur(t, l, e) {
    var a = l.pendingProps, n = a.revealOrder, u = a.tail;
    if (Kt(t, l, a.children, e), a = Yt.current, (a & 2) !== 0)
      a = a & 1 | 2, l.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = l.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && nr(t, e, l);
          else if (t.tag === 19)
            nr(t, e, l);
          else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === l) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l)
              break t;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      a &= 1;
    }
    switch (w(Yt, a), n) {
      case "forwards":
        for (e = l.child, n = null; e !== null; )
          t = e.alternate, t !== null && bu(t) === null && (n = e), e = e.sibling;
        e = n, e === null ? (n = l.child, l.child = null) : (n = e.sibling, e.sibling = null), zc(
          l,
          !1,
          n,
          e,
          u
        );
        break;
      case "backwards":
        for (e = null, n = l.child, l.child = null; n !== null; ) {
          if (t = n.alternate, t !== null && bu(t) === null) {
            l.child = n;
            break;
          }
          t = n.sibling, n.sibling = e, e = n, n = t;
        }
        zc(
          l,
          !0,
          e,
          null,
          u
        );
        break;
      case "together":
        zc(l, !1, null, null, void 0);
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function kl(t, l, e) {
    if (t !== null && (l.dependencies = t.dependencies), he |= l.lanes, (e & l.childLanes) === 0)
      if (t !== null) {
        if (Fa(
          t,
          l,
          e,
          !1
        ), (e & l.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && l.child !== t.child)
      throw Error(r(153));
    if (l.child !== null) {
      for (t = l.child, e = Yl(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; )
        t = t.sibling, e = e.sibling = Yl(t, t.pendingProps), e.return = l;
      e.sibling = null;
    }
    return l.child;
  }
  function Mc(t, l) {
    return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && eu(t)));
  }
  function U0(t, l, e) {
    switch (l.tag) {
      case 3:
        mt(l, l.stateNode.containerInfo), ae(l, Gt, t.memoizedState.cache), Wa();
        break;
      case 27:
      case 5:
        ze(l);
        break;
      case 4:
        mt(l, l.stateNode.containerInfo);
        break;
      case 10:
        ae(
          l,
          l.type,
          l.memoizedProps.value
        );
        break;
      case 13:
        var a = l.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (fe(l), l.flags |= 128, null) : (e & l.child.childLanes) !== 0 ? ar(t, l, e) : (fe(l), t = kl(
            t,
            l,
            e
          ), t !== null ? t.sibling : null);
        fe(l);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (a = (e & l.childLanes) !== 0, a || (Fa(
          t,
          l,
          e,
          !1
        ), a = (e & l.childLanes) !== 0), n) {
          if (a)
            return ur(
              t,
              l,
              e
            );
          l.flags |= 128;
        }
        if (n = l.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), w(Yt, Yt.current), a) break;
        return null;
      case 22:
      case 23:
        return l.lanes = 0, Io(t, l, e);
      case 24:
        ae(l, Gt, t.memoizedState.cache);
    }
    return kl(t, l, e);
  }
  function ir(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps)
        Zt = !0;
      else {
        if (!Mc(t, e) && (l.flags & 128) === 0)
          return Zt = !1, U0(
            t,
            l,
            e
          );
        Zt = (t.flags & 131072) !== 0;
      }
    else
      Zt = !1, st && (l.flags & 1048576) !== 0 && Cs(l, lu, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          t = l.pendingProps;
          var a = l.elementType, n = a._init;
          if (a = n(a._payload), l.type = a, typeof a == "function")
            Ci(a) ? (t = Ye(a, t), l.tag = 1, l = lr(
              null,
              l,
              a,
              t,
              e
            )) : (l.tag = 0, l = pc(
              null,
              l,
              a,
              t,
              e
            ));
          else {
            if (a != null) {
              if (n = a.$$typeof, n === Dt) {
                l.tag = 11, l = Wo(
                  null,
                  l,
                  a,
                  t,
                  e
                );
                break t;
              } else if (n === V) {
                l.tag = 14, l = $o(
                  null,
                  l,
                  a,
                  t,
                  e
                );
                break t;
              }
            }
            throw l = Ct(a) || a, Error(r(306, l, ""));
          }
        }
        return l;
      case 0:
        return pc(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 1:
        return a = l.type, n = Ye(
          a,
          l.pendingProps
        ), lr(
          t,
          l,
          a,
          n,
          e
        );
      case 3:
        t: {
          if (mt(
            l,
            l.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          a = l.pendingProps;
          var u = l.memoizedState;
          n = u.element, Wi(t, l), nn(l, a, null, e);
          var i = l.memoizedState;
          if (a = i.cache, ae(l, Gt, a), a !== u.cache && Zi(
            l,
            [Gt],
            e,
            !0
          ), an(), a = i.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: i.cache
            }, l.updateQueue.baseState = u, l.memoizedState = u, l.flags & 256) {
              l = er(
                t,
                l,
                a,
                e
              );
              break t;
            } else if (a !== n) {
              n = Sl(
                Error(r(424)),
                l
              ), $a(n), l = er(
                t,
                l,
                a,
                e
              );
              break t;
            } else {
              switch (t = l.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (Ot = Ol(t.firstChild), ll = l, st = !0, Ue = null, Rl = !0, e = Bo(
                l,
                null,
                a,
                e
              ), l.child = e; e; )
                e.flags = e.flags & -3 | 4096, e = e.sibling;
            }
          else {
            if (Wa(), a === n) {
              l = kl(
                t,
                l,
                e
              );
              break t;
            }
            Kt(
              t,
              l,
              a,
              e
            );
          }
          l = l.child;
        }
        return l;
      case 26:
        return xu(t, l), t === null ? (e = od(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = e : st || (e = l.type, t = l.pendingProps, a = Hu(
          Q.current
        ).createElement(e), a[Ft] = l, a[el] = t, Jt(a, e, t), Qt(a), l.stateNode = a) : l.memoizedState = od(
          l.type,
          t.memoizedProps,
          l.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return ze(l), t === null && st && (a = l.stateNode = cd(
          l.type,
          l.pendingProps,
          Q.current
        ), ll = l, Rl = !0, n = Ot, be(l.type) ? (cf = n, Ot = Ol(
          a.firstChild
        )) : Ot = n), Kt(
          t,
          l,
          l.pendingProps.children,
          e
        ), xu(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && st && ((n = a = Ot) && (a = fh(
          a,
          l.type,
          l.pendingProps,
          Rl
        ), a !== null ? (l.stateNode = a, ll = l, Ot = Ol(
          a.firstChild
        ), Rl = !1, n = !0) : n = !1), n || Ce(l)), ze(l), n = l.type, u = l.pendingProps, i = t !== null ? t.memoizedProps : null, a = u.children, ef(n, u) ? a = null : i !== null && ef(n, i) && (l.flags |= 32), l.memoizedState !== null && (n = lc(
          t,
          l,
          M0,
          null,
          null,
          e
        ), Nn._currentValue = n), xu(t, l), Kt(t, l, a, e), l.child;
      case 6:
        return t === null && st && ((t = e = Ot) && (e = sh(
          e,
          l.pendingProps,
          Rl
        ), e !== null ? (l.stateNode = e, ll = l, Ot = null, t = !0) : t = !1), t || Ce(l)), null;
      case 13:
        return ar(t, l, e);
      case 4:
        return mt(
          l,
          l.stateNode.containerInfo
        ), a = l.pendingProps, t === null ? l.child = va(
          l,
          null,
          a,
          e
        ) : Kt(
          t,
          l,
          a,
          e
        ), l.child;
      case 11:
        return Wo(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 7:
        return Kt(
          t,
          l,
          l.pendingProps,
          e
        ), l.child;
      case 8:
        return Kt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 12:
        return Kt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 10:
        return a = l.pendingProps, ae(l, l.type, a.value), Kt(
          t,
          l,
          a.children,
          e
        ), l.child;
      case 9:
        return n = l.type._context, a = l.pendingProps.children, qe(l), n = It(n), a = a(n), l.flags |= 1, Kt(t, l, a, e), l.child;
      case 14:
        return $o(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 15:
        return Fo(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 19:
        return ur(t, l, e);
      case 31:
        return a = l.pendingProps, e = l.mode, a = {
          mode: a.mode,
          children: a.children
        }, t === null ? (e = Au(
          a,
          e
        ), e.ref = l.ref, l.child = e, e.return = l, l = e) : (e = Yl(t.child, a), e.ref = l.ref, l.child = e, e.return = l, l = e), l;
      case 22:
        return Io(t, l, e);
      case 24:
        return qe(l), a = It(Gt), t === null ? (n = Ki(), n === null && (n = zt, u = Vi(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= e), n = u), l.memoizedState = {
          parent: a,
          cache: n
        }, Ji(l), ae(l, Gt, n)) : ((t.lanes & e) !== 0 && (Wi(t, l), nn(l, null, null, e), an()), n = t.memoizedState, u = l.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, l.memoizedState = n, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = n), ae(l, Gt, a)) : (a = u.cache, ae(l, Gt, a), a !== n.cache && Zi(
          l,
          [Gt],
          e,
          !0
        ))), Kt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(r(156, l.tag));
  }
  function Jl(t) {
    t.flags |= 4;
  }
  function cr(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !yd(l)) {
      if (l = El.current, l !== null && ((it & 4194048) === it ? wl !== null : (it & 62914560) !== it && (it & 536870912) === 0 || l !== wl))
        throw ln = ki, Zs;
      t.flags |= 8192;
    }
  }
  function Tu(t, l) {
    l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? Bf() : 536870912, t.lanes |= l, Sa |= l);
  }
  function dn(t, l) {
    if (!st)
      switch (t.tailMode) {
        case "hidden":
          l = t.tail;
          for (var e = null; l !== null; )
            l.alternate !== null && (e = l), l = l.sibling;
          e === null ? t.tail = null : e.sibling = null;
          break;
        case "collapsed":
          e = t.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), e = e.sibling;
          a === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
  }
  function _t(t) {
    var l = t.alternate !== null && t.alternate.child === t.child, e = 0, a = 0;
    if (l)
      for (var n = t.child; n !== null; )
        e |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = t, n = n.sibling;
    else
      for (n = t.child; n !== null; )
        e |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= a, t.childLanes = e, l;
  }
  function C0(t, l, e) {
    var a = l.pendingProps;
    switch (Gi(l), l.tag) {
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
        return _t(l), null;
      case 1:
        return _t(l), null;
      case 3:
        return e = l.stateNode, a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Vl(Gt), cl(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (Ja(l) ? Jl(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Bs())), _t(l), null;
      case 26:
        return e = l.memoizedState, t === null ? (Jl(l), e !== null ? (_t(l), cr(l, e)) : (_t(l), l.flags &= -16777217)) : e ? e !== t.memoizedState ? (Jl(l), _t(l), cr(l, e)) : (_t(l), l.flags &= -16777217) : (t.memoizedProps !== a && Jl(l), _t(l), l.flags &= -16777217), null;
      case 27:
        ql(l), e = Q.current;
        var n = l.type;
        if (t !== null && l.stateNode != null)
          t.memoizedProps !== a && Jl(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(r(166));
            return _t(l), null;
          }
          t = B.current, Ja(l) ? Hs(l) : (t = cd(n, a, e), l.stateNode = t, Jl(l));
        }
        return _t(l), null;
      case 5:
        if (ql(l), e = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== a && Jl(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(r(166));
            return _t(l), null;
          }
          if (t = B.current, Ja(l))
            Hs(l);
          else {
            switch (n = Hu(
              Q.current
            ), t) {
              case 1:
                t = n.createElementNS(
                  "http://www.w3.org/2000/svg",
                  e
                );
                break;
              case 2:
                t = n.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  e
                );
                break;
              default:
                switch (e) {
                  case "svg":
                    t = n.createElementNS(
                      "http://www.w3.org/2000/svg",
                      e
                    );
                    break;
                  case "math":
                    t = n.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    t = n.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                    break;
                  case "select":
                    t = typeof a.is == "string" ? n.createElement("select", { is: a.is }) : n.createElement("select"), a.multiple ? t.multiple = !0 : a.size && (t.size = a.size);
                    break;
                  default:
                    t = typeof a.is == "string" ? n.createElement(e, { is: a.is }) : n.createElement(e);
                }
            }
            t[Ft] = l, t[el] = a;
            t: for (n = l.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6)
                t.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                n.child.return = n, n = n.child;
                continue;
              }
              if (n === l) break t;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === l)
                  break t;
                n = n.return;
              }
              n.sibling.return = n.return, n = n.sibling;
            }
            l.stateNode = t;
            t: switch (Jt(t, e, a), e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Jl(l);
          }
        }
        return _t(l), l.flags &= -16777217, null;
      case 6:
        if (t && l.stateNode != null)
          t.memoizedProps !== a && Jl(l);
        else {
          if (typeof a != "string" && l.stateNode === null)
            throw Error(r(166));
          if (t = Q.current, Ja(l)) {
            if (t = l.stateNode, e = l.memoizedProps, a = null, n = ll, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            t[Ft] = l, t = !!(t.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || td(t.nodeValue, e)), t || Ce(l);
          } else
            t = Hu(t).createTextNode(
              a
            ), t[Ft] = l, l.stateNode = t;
        }
        return _t(l), null;
      case 13:
        if (a = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = Ja(l), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(r(318));
              if (n = l.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
              n[Ft] = l;
            } else
              Wa(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            _t(l), n = !1;
          } else
            n = Bs(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return l.flags & 256 ? (Kl(l), l) : (Kl(l), null);
        }
        if (Kl(l), (l.flags & 128) !== 0)
          return l.lanes = e, l;
        if (e = a !== null, t = t !== null && t.memoizedState !== null, e) {
          a = l.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool);
          var u = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048);
        }
        return e !== t && e && (l.child.flags |= 8192), Tu(l, l.updateQueue), _t(l), null;
      case 4:
        return cl(), t === null && Fc(l.stateNode.containerInfo), _t(l), null;
      case 10:
        return Vl(l.type), _t(l), null;
      case 19:
        if (U(Yt), n = l.memoizedState, n === null) return _t(l), null;
        if (a = (l.flags & 128) !== 0, u = n.rendering, u === null)
          if (a) dn(n, !1);
          else {
            if (jt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = l.child; t !== null; ) {
                if (u = bu(t), u !== null) {
                  for (l.flags |= 128, dn(n, !1), t = u.updateQueue, l.updateQueue = t, Tu(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                    Us(e, t), e = e.sibling;
                  return w(
                    Yt,
                    Yt.current & 1 | 2
                  ), l.child;
                }
                t = t.sibling;
              }
            n.tail !== null && Dl() > Mu && (l.flags |= 128, a = !0, dn(n, !1), l.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = bu(u), t !== null) {
              if (l.flags |= 128, a = !0, t = t.updateQueue, l.updateQueue = t, Tu(l, t), dn(n, !0), n.tail === null && n.tailMode === "hidden" && !u.alternate && !st)
                return _t(l), null;
            } else
              2 * Dl() - n.renderingStartTime > Mu && e !== 536870912 && (l.flags |= 128, a = !0, dn(n, !1), l.lanes = 4194304);
          n.isBackwards ? (u.sibling = l.child, l.child = u) : (t = n.last, t !== null ? t.sibling = u : l.child = u, n.last = u);
        }
        return n.tail !== null ? (l = n.tail, n.rendering = l, n.tail = l.sibling, n.renderingStartTime = Dl(), l.sibling = null, t = Yt.current, w(Yt, a ? t & 1 | 2 : t & 1), l) : (_t(l), null);
      case 22:
      case 23:
        return Kl(l), Pi(), a = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (_t(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : _t(l), e = l.updateQueue, e !== null && Tu(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== e && (l.flags |= 2048), t !== null && U(Be), null;
      case 24:
        return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Vl(Gt), _t(l), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, l.tag));
  }
  function H0(t, l) {
    switch (Gi(l), l.tag) {
      case 1:
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 3:
        return Vl(Gt), cl(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return ql(l), null;
      case 13:
        if (Kl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(r(340));
          Wa();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 19:
        return U(Yt), null;
      case 4:
        return cl(), null;
      case 10:
        return Vl(l.type), null;
      case 22:
      case 23:
        return Kl(l), Pi(), t !== null && U(Be), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return Vl(Gt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function fr(t, l) {
    switch (Gi(l), l.tag) {
      case 3:
        Vl(Gt), cl();
        break;
      case 26:
      case 27:
      case 5:
        ql(l);
        break;
      case 4:
        cl();
        break;
      case 13:
        Kl(l);
        break;
      case 19:
        U(Yt);
        break;
      case 10:
        Vl(l.type);
        break;
      case 22:
      case 23:
        Kl(l), Pi(), t !== null && U(Be);
        break;
      case 24:
        Vl(Gt);
    }
  }
  function mn(t, l) {
    try {
      var e = l.updateQueue, a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        e = n;
        do {
          if ((e.tag & t) === t) {
            a = void 0;
            var u = e.create, i = e.inst;
            a = u(), i.destroy = a;
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (c) {
      St(l, l.return, c);
    }
  }
  function oe(t, l, e) {
    try {
      var a = l.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, n = l;
              var s = e, b = c;
              try {
                b();
              } catch (E) {
                St(
                  n,
                  s,
                  E
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (E) {
      St(l, l.return, E);
    }
  }
  function sr(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        Ws(l, e);
      } catch (a) {
        St(t, t.return, a);
      }
    }
  }
  function or(t, l, e) {
    e.props = Ye(
      t.type,
      t.memoizedProps
    ), e.state = t.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      St(t, l, a);
    }
  }
  function hn(t, l) {
    try {
      var e = t.ref;
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof e == "function" ? t.refCleanup = e(a) : e.current = a;
      }
    } catch (n) {
      St(t, l, n);
    }
  }
  function Ul(t, l) {
    var e = t.ref, a = t.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          St(t, l, n);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (n) {
          St(t, l, n);
        }
      else e.current = null;
  }
  function rr(t) {
    var l = t.type, e = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break t;
        case "img":
          e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (n) {
      St(t, t.return, n);
    }
  }
  function Nc(t, l, e) {
    try {
      var a = t.stateNode;
      ah(a, t.type, e, l), a[el] = l;
    } catch (n) {
      St(t, t.return, n);
    }
  }
  function dr(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && be(t.type) || t.tag === 4;
  }
  function _c(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || dr(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && be(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Oc(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(t, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(t), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = Cu));
    else if (a !== 4 && (a === 27 && be(t.type) && (e = t.stateNode, l = null), t = t.child, t !== null))
      for (Oc(t, l, e), t = t.sibling; t !== null; )
        Oc(t, l, e), t = t.sibling;
  }
  function Eu(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, l ? e.insertBefore(t, l) : e.appendChild(t);
    else if (a !== 4 && (a === 27 && be(t.type) && (e = t.stateNode), t = t.child, t !== null))
      for (Eu(t, l, e), t = t.sibling; t !== null; )
        Eu(t, l, e), t = t.sibling;
  }
  function mr(t) {
    var l = t.stateNode, e = t.memoizedProps;
    try {
      for (var a = t.type, n = l.attributes; n.length; )
        l.removeAttributeNode(n[0]);
      Jt(l, a, e), l[Ft] = t, l[el] = e;
    } catch (u) {
      St(t, t.return, u);
    }
  }
  var Wl = !1, Ut = !1, jc = !1, hr = typeof WeakSet == "function" ? WeakSet : Set, Vt = null;
  function q0(t, l) {
    if (t = t.containerInfo, tf = Qu, t = Es(t), _i(t)) {
      if ("selectionStart" in t)
        var e = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          e = (e = t.ownerDocument) && e.defaultView || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var n = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, u.nodeType;
            } catch {
              e = null;
              break t;
            }
            var i = 0, c = -1, s = -1, b = 0, E = 0, _ = t, S = null;
            l: for (; ; ) {
              for (var A; _ !== e || n !== 0 && _.nodeType !== 3 || (c = i + n), _ !== u || a !== 0 && _.nodeType !== 3 || (s = i + a), _.nodeType === 3 && (i += _.nodeValue.length), (A = _.firstChild) !== null; )
                S = _, _ = A;
              for (; ; ) {
                if (_ === t) break l;
                if (S === e && ++b === n && (c = i), S === u && ++E === a && (s = i), (A = _.nextSibling) !== null) break;
                _ = S, S = _.parentNode;
              }
              _ = A;
            }
            e = c === -1 || s === -1 ? null : { start: c, end: s };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (lf = { focusedElem: t, selectionRange: e }, Qu = !1, Vt = l; Vt !== null; )
      if (l = Vt, t = l.child, (l.subtreeFlags & 1024) !== 0 && t !== null)
        t.return = l, Vt = t;
      else
        for (; Vt !== null; ) {
          switch (l = Vt, u = l.alternate, t = l.flags, l.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                t = void 0, e = l, n = u.memoizedProps, u = u.memoizedState, a = e.stateNode;
                try {
                  var J = Ye(
                    e.type,
                    n,
                    e.elementType === e.type
                  );
                  t = a.getSnapshotBeforeUpdate(
                    J,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch (K) {
                  St(
                    e,
                    e.return,
                    K
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = l.stateNode.containerInfo, e = t.nodeType, e === 9)
                  nf(t);
                else if (e === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      nf(t);
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
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (t = l.sibling, t !== null) {
            t.return = l.return, Vt = t;
            break;
          }
          Vt = l.return;
        }
  }
  function yr(t, l, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        re(t, e), a & 4 && mn(5, e);
        break;
      case 1:
        if (re(t, e), a & 4)
          if (t = e.stateNode, l === null)
            try {
              t.componentDidMount();
            } catch (i) {
              St(e, e.return, i);
            }
          else {
            var n = Ye(
              e.type,
              l.memoizedProps
            );
            l = l.memoizedState;
            try {
              t.componentDidUpdate(
                n,
                l,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              St(
                e,
                e.return,
                i
              );
            }
          }
        a & 64 && sr(e), a & 512 && hn(e, e.return);
        break;
      case 3:
        if (re(t, e), a & 64 && (t = e.updateQueue, t !== null)) {
          if (l = null, e.child !== null)
            switch (e.child.tag) {
              case 27:
              case 5:
                l = e.child.stateNode;
                break;
              case 1:
                l = e.child.stateNode;
            }
          try {
            Ws(t, l);
          } catch (i) {
            St(e, e.return, i);
          }
        }
        break;
      case 27:
        l === null && a & 4 && mr(e);
      case 26:
      case 5:
        re(t, e), l === null && a & 4 && rr(e), a & 512 && hn(e, e.return);
        break;
      case 12:
        re(t, e);
        break;
      case 13:
        re(t, e), a & 4 && br(t, e), a & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = K0.bind(
          null,
          e
        ), oh(t, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || Wl, !a) {
          l = l !== null && l.memoizedState !== null || Ut, n = Wl;
          var u = Ut;
          Wl = a, (Ut = l) && !u ? de(
            t,
            e,
            (e.subtreeFlags & 8772) !== 0
          ) : re(t, e), Wl = n, Ut = u;
        }
        break;
      case 30:
        break;
      default:
        re(t, e);
    }
  }
  function vr(t) {
    var l = t.alternate;
    l !== null && (t.alternate = null, vr(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && si(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Nt = null, ul = !1;
  function $l(t, l, e) {
    for (e = e.child; e !== null; )
      gr(t, l, e), e = e.sibling;
  }
  function gr(t, l, e) {
    if (fl && typeof fl.onCommitFiberUnmount == "function")
      try {
        fl.onCommitFiberUnmount(Ua, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        Ut || Ul(e, l), $l(
          t,
          l,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        Ut || Ul(e, l);
        var a = Nt, n = ul;
        be(e.type) && (Nt = e.stateNode, ul = !1), $l(
          t,
          l,
          e
        ), Tn(e.stateNode), Nt = a, ul = n;
        break;
      case 5:
        Ut || Ul(e, l);
      case 6:
        if (a = Nt, n = ul, Nt = null, $l(
          t,
          l,
          e
        ), Nt = a, ul = n, Nt !== null)
          if (ul)
            try {
              (Nt.nodeType === 9 ? Nt.body : Nt.nodeName === "HTML" ? Nt.ownerDocument.body : Nt).removeChild(e.stateNode);
            } catch (u) {
              St(
                e,
                l,
                u
              );
            }
          else
            try {
              Nt.removeChild(e.stateNode);
            } catch (u) {
              St(
                e,
                l,
                u
              );
            }
        break;
      case 18:
        Nt !== null && (ul ? (t = Nt, ud(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          e.stateNode
        ), Dn(t)) : ud(Nt, e.stateNode));
        break;
      case 4:
        a = Nt, n = ul, Nt = e.stateNode.containerInfo, ul = !0, $l(
          t,
          l,
          e
        ), Nt = a, ul = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ut || oe(2, e, l), Ut || oe(4, e, l), $l(
          t,
          l,
          e
        );
        break;
      case 1:
        Ut || (Ul(e, l), a = e.stateNode, typeof a.componentWillUnmount == "function" && or(
          e,
          l,
          a
        )), $l(
          t,
          l,
          e
        );
        break;
      case 21:
        $l(
          t,
          l,
          e
        );
        break;
      case 22:
        Ut = (a = Ut) || e.memoizedState !== null, $l(
          t,
          l,
          e
        ), Ut = a;
        break;
      default:
        $l(
          t,
          l,
          e
        );
    }
  }
  function br(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Dn(t);
      } catch (e) {
        St(l, l.return, e);
      }
  }
  function B0(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new hr()), l;
      case 22:
        return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new hr()), l;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Dc(t, l) {
    var e = B0(t);
    l.forEach(function(a) {
      var n = k0.bind(null, t, a);
      e.has(a) || (e.add(a), a.then(n, n));
    });
  }
  function dl(t, l) {
    var e = l.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var n = e[a], u = t, i = l, c = i;
        t: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (be(c.type)) {
                Nt = c.stateNode, ul = !1;
                break t;
              }
              break;
            case 5:
              Nt = c.stateNode, ul = !1;
              break t;
            case 3:
            case 4:
              Nt = c.stateNode.containerInfo, ul = !0;
              break t;
          }
          c = c.return;
        }
        if (Nt === null) throw Error(r(160));
        gr(u, i, n), Nt = null, ul = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (l.subtreeFlags & 13878)
      for (l = l.child; l !== null; )
        pr(l, t), l = l.sibling;
  }
  var _l = null;
  function pr(t, l) {
    var e = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        dl(l, t), ml(t), a & 4 && (oe(3, t, t.return), mn(3, t), oe(5, t, t.return));
        break;
      case 1:
        dl(l, t), ml(t), a & 512 && (Ut || e === null || Ul(e, e.return)), a & 64 && Wl && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var n = _l;
        if (dl(l, t), ml(t), a & 512 && (Ut || e === null || Ul(e, e.return)), a & 4) {
          var u = e !== null ? e.memoizedState : null;
          if (a = t.memoizedState, e === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, e = t.memoizedProps, n = n.ownerDocument || n;
                  l: switch (a) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[qa] || u[Ft] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), Jt(u, a, e), u[Ft] = t, Qt(u), a = u;
                      break t;
                    case "link":
                      var i = md(
                        "link",
                        "href",
                        n
                      ).get(a + (e.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (u = i[c], u.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && u.getAttribute("rel") === (e.rel == null ? null : e.rel) && u.getAttribute("title") === (e.title == null ? null : e.title) && u.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                            i.splice(c, 1);
                            break l;
                          }
                      }
                      u = n.createElement(a), Jt(u, a, e), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (i = md(
                        "meta",
                        "content",
                        n
                      ).get(a + (e.content || ""))) {
                        for (c = 0; c < i.length; c++)
                          if (u = i[c], u.getAttribute("content") === (e.content == null ? null : "" + e.content) && u.getAttribute("name") === (e.name == null ? null : e.name) && u.getAttribute("property") === (e.property == null ? null : e.property) && u.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && u.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                            i.splice(c, 1);
                            break l;
                          }
                      }
                      u = n.createElement(a), Jt(u, a, e), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  u[Ft] = t, Qt(u), a = u;
                }
                t.stateNode = a;
              } else
                hd(
                  n,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = dd(
                n,
                a,
                t.memoizedProps
              );
          else
            u !== a ? (u === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : u.count--, a === null ? hd(
              n,
              t.type,
              t.stateNode
            ) : dd(
              n,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && Nc(
              t,
              t.memoizedProps,
              e.memoizedProps
            );
        }
        break;
      case 27:
        dl(l, t), ml(t), a & 512 && (Ut || e === null || Ul(e, e.return)), e !== null && a & 4 && Nc(
          t,
          t.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (dl(l, t), ml(t), a & 512 && (Ut || e === null || Ul(e, e.return)), t.flags & 32) {
          n = t.stateNode;
          try {
            Ie(n, "");
          } catch (A) {
            St(t, t.return, A);
          }
        }
        a & 4 && t.stateNode != null && (n = t.memoizedProps, Nc(
          t,
          n,
          e !== null ? e.memoizedProps : n
        )), a & 1024 && (jc = !0);
        break;
      case 6:
        if (dl(l, t), ml(t), a & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          a = t.memoizedProps, e = t.stateNode;
          try {
            e.nodeValue = a;
          } catch (A) {
            St(t, t.return, A);
          }
        }
        break;
      case 3:
        if (Gu = null, n = _l, _l = qu(l.containerInfo), dl(l, t), _l = n, ml(t), a & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            Dn(l.containerInfo);
          } catch (A) {
            St(t, t.return, A);
          }
        jc && (jc = !1, Sr(t));
        break;
      case 4:
        a = _l, _l = qu(
          t.stateNode.containerInfo
        ), dl(l, t), ml(t), _l = a;
        break;
      case 12:
        dl(l, t), ml(t);
        break;
      case 13:
        dl(l, t), ml(t), t.child.flags & 8192 && t.memoizedState !== null != (e !== null && e.memoizedState !== null) && (qc = Dl()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Dc(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var s = e !== null && e.memoizedState !== null, b = Wl, E = Ut;
        if (Wl = b || n, Ut = E || s, dl(l, t), Ut = E, Wl = b, ml(t), a & 8192)
          t: for (l = t.stateNode, l._visibility = n ? l._visibility & -2 : l._visibility | 1, n && (e === null || s || Wl || Ut || Xe(t)), e = null, l = t; ; ) {
            if (l.tag === 5 || l.tag === 26) {
              if (e === null) {
                s = e = l;
                try {
                  if (u = s.stateNode, n)
                    i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    c = s.stateNode;
                    var _ = s.memoizedProps.style, S = _ != null && _.hasOwnProperty("display") ? _.display : null;
                    c.style.display = S == null || typeof S == "boolean" ? "" : ("" + S).trim();
                  }
                } catch (A) {
                  St(s, s.return, A);
                }
              }
            } else if (l.tag === 6) {
              if (e === null) {
                s = l;
                try {
                  s.stateNode.nodeValue = n ? "" : s.memoizedProps;
                } catch (A) {
                  St(s, s.return, A);
                }
              }
            } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === t) && l.child !== null) {
              l.child.return = l, l = l.child;
              continue;
            }
            if (l === t) break t;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) break t;
              e === l && (e = null), l = l.return;
            }
            e === l && (e = null), l.sibling.return = l.return, l = l.sibling;
          }
        a & 4 && (a = t.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, Dc(t, e))));
        break;
      case 19:
        dl(l, t), ml(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Dc(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        dl(l, t), ml(t);
    }
  }
  function ml(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, a = t.return; a !== null; ) {
          if (dr(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(r(160));
        switch (e.tag) {
          case 27:
            var n = e.stateNode, u = _c(t);
            Eu(t, u, n);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (Ie(i, ""), e.flags &= -33);
            var c = _c(t);
            Eu(t, c, i);
            break;
          case 3:
          case 4:
            var s = e.stateNode.containerInfo, b = _c(t);
            Oc(
              t,
              b,
              s
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (E) {
        St(t, t.return, E);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function Sr(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        Sr(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), t = t.sibling;
      }
  }
  function re(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        yr(t, l.alternate, l), l = l.sibling;
  }
  function Xe(t) {
    for (t = t.child; t !== null; ) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          oe(4, l, l.return), Xe(l);
          break;
        case 1:
          Ul(l, l.return);
          var e = l.stateNode;
          typeof e.componentWillUnmount == "function" && or(
            l,
            l.return,
            e
          ), Xe(l);
          break;
        case 27:
          Tn(l.stateNode);
        case 26:
        case 5:
          Ul(l, l.return), Xe(l);
          break;
        case 22:
          l.memoizedState === null && Xe(l);
          break;
        case 30:
          Xe(l);
          break;
        default:
          Xe(l);
      }
      t = t.sibling;
    }
  }
  function de(t, l, e) {
    for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var a = l.alternate, n = t, u = l, i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          de(
            n,
            u,
            e
          ), mn(4, u);
          break;
        case 1:
          if (de(
            n,
            u,
            e
          ), a = u, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (b) {
              St(a, a.return, b);
            }
          if (a = u, n = a.updateQueue, n !== null) {
            var c = a.stateNode;
            try {
              var s = n.shared.hiddenCallbacks;
              if (s !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < s.length; n++)
                  Js(s[n], c);
            } catch (b) {
              St(a, a.return, b);
            }
          }
          e && i & 64 && sr(u), hn(u, u.return);
          break;
        case 27:
          mr(u);
        case 26:
        case 5:
          de(
            n,
            u,
            e
          ), e && a === null && i & 4 && rr(u), hn(u, u.return);
          break;
        case 12:
          de(
            n,
            u,
            e
          );
          break;
        case 13:
          de(
            n,
            u,
            e
          ), e && i & 4 && br(n, u);
          break;
        case 22:
          u.memoizedState === null && de(
            n,
            u,
            e
          ), hn(u, u.return);
          break;
        case 30:
          break;
        default:
          de(
            n,
            u,
            e
          );
      }
      l = l.sibling;
    }
  }
  function Rc(t, l) {
    var e = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && Ia(e));
  }
  function wc(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Ia(t));
  }
  function Cl(t, l, e, a) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        xr(
          t,
          l,
          e,
          a
        ), l = l.sibling;
  }
  function xr(t, l, e, a) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Cl(
          t,
          l,
          e,
          a
        ), n & 2048 && mn(9, l);
        break;
      case 1:
        Cl(
          t,
          l,
          e,
          a
        );
        break;
      case 3:
        Cl(
          t,
          l,
          e,
          a
        ), n & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Ia(t)));
        break;
      case 12:
        if (n & 2048) {
          Cl(
            t,
            l,
            e,
            a
          ), t = l.stateNode;
          try {
            var u = l.memoizedProps, i = u.id, c = u.onPostCommit;
            typeof c == "function" && c(
              i,
              l.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (s) {
            St(l, l.return, s);
          }
        } else
          Cl(
            t,
            l,
            e,
            a
          );
        break;
      case 13:
        Cl(
          t,
          l,
          e,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = l.stateNode, i = l.alternate, l.memoizedState !== null ? u._visibility & 2 ? Cl(
          t,
          l,
          e,
          a
        ) : yn(t, l) : u._visibility & 2 ? Cl(
          t,
          l,
          e,
          a
        ) : (u._visibility |= 2, ga(
          t,
          l,
          e,
          a,
          (l.subtreeFlags & 10256) !== 0
        )), n & 2048 && Rc(i, l);
        break;
      case 24:
        Cl(
          t,
          l,
          e,
          a
        ), n & 2048 && wc(l.alternate, l);
        break;
      default:
        Cl(
          t,
          l,
          e,
          a
        );
    }
  }
  function ga(t, l, e, a, n) {
    for (n = n && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null; ) {
      var u = t, i = l, c = e, s = a, b = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ga(
            u,
            i,
            c,
            s,
            n
          ), mn(8, i);
          break;
        case 23:
          break;
        case 22:
          var E = i.stateNode;
          i.memoizedState !== null ? E._visibility & 2 ? ga(
            u,
            i,
            c,
            s,
            n
          ) : yn(
            u,
            i
          ) : (E._visibility |= 2, ga(
            u,
            i,
            c,
            s,
            n
          )), n && b & 2048 && Rc(
            i.alternate,
            i
          );
          break;
        case 24:
          ga(
            u,
            i,
            c,
            s,
            n
          ), n && b & 2048 && wc(i.alternate, i);
          break;
        default:
          ga(
            u,
            i,
            c,
            s,
            n
          );
      }
      l = l.sibling;
    }
  }
  function yn(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t, a = l, n = a.flags;
        switch (a.tag) {
          case 22:
            yn(e, a), n & 2048 && Rc(
              a.alternate,
              a
            );
            break;
          case 24:
            yn(e, a), n & 2048 && wc(a.alternate, a);
            break;
          default:
            yn(e, a);
        }
        l = l.sibling;
      }
  }
  var vn = 8192;
  function ba(t) {
    if (t.subtreeFlags & vn)
      for (t = t.child; t !== null; )
        Ar(t), t = t.sibling;
  }
  function Ar(t) {
    switch (t.tag) {
      case 26:
        ba(t), t.flags & vn && t.memoizedState !== null && Th(
          _l,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        ba(t);
        break;
      case 3:
      case 4:
        var l = _l;
        _l = qu(t.stateNode.containerInfo), ba(t), _l = l;
        break;
      case 22:
        t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = vn, vn = 16777216, ba(t), vn = l) : ba(t));
        break;
      default:
        ba(t);
    }
  }
  function Tr(t) {
    var l = t.alternate;
    if (l !== null && (t = l.child, t !== null)) {
      l.child = null;
      do
        l = t.sibling, t.sibling = null, t = l;
      while (t !== null);
    }
  }
  function gn(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          Vt = a, zr(
            a,
            t
          );
        }
      Tr(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Er(t), t = t.sibling;
  }
  function Er(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        gn(t), t.flags & 2048 && oe(9, t, t.return);
        break;
      case 3:
        gn(t);
        break;
      case 12:
        gn(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, zu(t)) : gn(t);
        break;
      default:
        gn(t);
    }
  }
  function zu(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          Vt = a, zr(
            a,
            t
          );
        }
      Tr(t);
    }
    for (t = t.child; t !== null; ) {
      switch (l = t, l.tag) {
        case 0:
        case 11:
        case 15:
          oe(8, l, l.return), zu(l);
          break;
        case 22:
          e = l.stateNode, e._visibility & 2 && (e._visibility &= -3, zu(l));
          break;
        default:
          zu(l);
      }
      t = t.sibling;
    }
  }
  function zr(t, l) {
    for (; Vt !== null; ) {
      var e = Vt;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          oe(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ia(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, Vt = a;
      else
        t: for (e = t; Vt !== null; ) {
          a = Vt;
          var n = a.sibling, u = a.return;
          if (vr(a), a === e) {
            Vt = null;
            break t;
          }
          if (n !== null) {
            n.return = u, Vt = n;
            break t;
          }
          Vt = u;
        }
    }
  }
  var G0 = {
    getCacheForType: function(t) {
      var l = It(Gt), e = l.data.get(t);
      return e === void 0 && (e = t(), l.data.set(t, e)), e;
    }
  }, Y0 = typeof WeakMap == "function" ? WeakMap : Map, ht = 0, zt = null, et = null, it = 0, yt = 0, hl = null, me = !1, pa = !1, Uc = !1, Fl = 0, jt = 0, he = 0, Qe = 0, Cc = 0, zl = 0, Sa = 0, bn = null, il = null, Hc = !1, qc = 0, Mu = 1 / 0, Nu = null, ye = null, kt = 0, ve = null, xa = null, Aa = 0, Bc = 0, Gc = null, Mr = null, pn = 0, Yc = null;
  function yl() {
    if ((ht & 2) !== 0 && it !== 0)
      return it & -it;
    if (j.T !== null) {
      var t = sa;
      return t !== 0 ? t : kc();
    }
    return Xf();
  }
  function Nr() {
    zl === 0 && (zl = (it & 536870912) === 0 || st ? qf() : 536870912);
    var t = El.current;
    return t !== null && (t.flags |= 32), zl;
  }
  function vl(t, l, e) {
    (t === zt && (yt === 2 || yt === 9) || t.cancelPendingCommit !== null) && (Ta(t, 0), ge(
      t,
      it,
      zl,
      !1
    )), Ha(t, e), ((ht & 2) === 0 || t !== zt) && (t === zt && ((ht & 2) === 0 && (Qe |= e), jt === 4 && ge(
      t,
      it,
      zl,
      !1
    )), Hl(t));
  }
  function _r(t, l, e) {
    if ((ht & 6) !== 0) throw Error(r(327));
    var a = !e && (l & 124) === 0 && (l & t.expiredLanes) === 0 || Ca(t, l), n = a ? Z0(t, l) : Zc(t, l, !0), u = a;
    do {
      if (n === 0) {
        pa && !a && ge(t, l, 0, !1);
        break;
      } else {
        if (e = t.current.alternate, u && !X0(e)) {
          n = Zc(t, l, !1), u = !1;
          continue;
        }
        if (n === 2) {
          if (u = l, t.errorRecoveryDisabledLanes & u)
            var i = 0;
          else
            i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            l = i;
            t: {
              var c = t;
              n = bn;
              var s = c.current.memoizedState.isDehydrated;
              if (s && (Ta(c, i).flags |= 256), i = Zc(
                c,
                i,
                !1
              ), i !== 2) {
                if (Uc && !s) {
                  c.errorRecoveryDisabledLanes |= u, Qe |= u, n = 4;
                  break t;
                }
                u = il, il = n, u !== null && (il === null ? il = u : il.push.apply(
                  il,
                  u
                ));
              }
              n = i;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Ta(t, 0), ge(t, l, 0, !0);
          break;
        }
        t: {
          switch (a = t, u = n, u) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              ge(
                a,
                l,
                zl,
                !me
              );
              break t;
            case 2:
              il = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((l & 62914560) === l && (n = qc + 300 - Dl(), 10 < n)) {
            if (ge(
              a,
              l,
              zl,
              !me
            ), Bn(a, 0, !0) !== 0) break t;
            a.timeoutHandle = ad(
              Or.bind(
                null,
                a,
                e,
                il,
                Nu,
                Hc,
                l,
                zl,
                Qe,
                Sa,
                me,
                u,
                2,
                -0,
                0
              ),
              n
            );
            break t;
          }
          Or(
            a,
            e,
            il,
            Nu,
            Hc,
            l,
            zl,
            Qe,
            Sa,
            me,
            u,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Hl(t);
  }
  function Or(t, l, e, a, n, u, i, c, s, b, E, _, S, A) {
    if (t.timeoutHandle = -1, _ = l.subtreeFlags, (_ & 8192 || (_ & 16785408) === 16785408) && (Mn = { stylesheets: null, count: 0, unsuspend: Ah }, Ar(l), _ = Eh(), _ !== null)) {
      t.cancelPendingCommit = _(
        Hr.bind(
          null,
          t,
          l,
          u,
          e,
          a,
          n,
          i,
          c,
          s,
          E,
          1,
          S,
          A
        )
      ), ge(t, u, i, !b);
      return;
    }
    Hr(
      t,
      l,
      u,
      e,
      a,
      n,
      i,
      c,
      s
    );
  }
  function X0(t) {
    for (var l = t; ; ) {
      var e = l.tag;
      if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var a = 0; a < e.length; a++) {
          var n = e[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!ol(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (e = l.child, l.subtreeFlags & 16384 && e !== null)
        e.return = l, l = e;
      else {
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return !0;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    return !0;
  }
  function ge(t, l, e, a) {
    l &= ~Cc, l &= ~Qe, t.suspendedLanes |= l, t.pingedLanes &= ~l, a && (t.warmLanes |= l), a = t.expirationTimes;
    for (var n = l; 0 < n; ) {
      var u = 31 - sl(n), i = 1 << u;
      a[u] = -1, n &= ~i;
    }
    e !== 0 && Gf(t, e, l);
  }
  function _u() {
    return (ht & 6) === 0 ? (Sn(0), !1) : !0;
  }
  function Xc() {
    if (et !== null) {
      if (yt === 0)
        var t = et.return;
      else
        t = et, Zl = He = null, nc(t), ya = null, on = 0, t = et;
      for (; t !== null; )
        fr(t.alternate, t), t = t.return;
      et = null;
    }
  }
  function Ta(t, l) {
    var e = t.timeoutHandle;
    e !== -1 && (t.timeoutHandle = -1, uh(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), Xc(), zt = t, et = e = Yl(t.current, null), it = l, yt = 0, hl = null, me = !1, pa = Ca(t, l), Uc = !1, Sa = zl = Cc = Qe = he = jt = 0, il = bn = null, Hc = !1, (l & 8) !== 0 && (l |= l & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= l; 0 < a; ) {
        var n = 31 - sl(a), u = 1 << n;
        l |= t[n], a &= ~u;
      }
    return Fl = l, $n(), e;
  }
  function jr(t, l) {
    I = null, j.H = yu, l === tn || l === uu ? (l = Ks(), yt = 3) : l === Zs ? (l = Ks(), yt = 4) : yt = l === Jo ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, hl = l, et === null && (jt = 1, Su(
      t,
      Sl(l, t.current)
    ));
  }
  function Dr() {
    var t = j.H;
    return j.H = yu, t === null ? yu : t;
  }
  function Rr() {
    var t = j.A;
    return j.A = G0, t;
  }
  function Qc() {
    jt = 4, me || (it & 4194048) !== it && El.current !== null || (pa = !0), (he & 134217727) === 0 && (Qe & 134217727) === 0 || zt === null || ge(
      zt,
      it,
      zl,
      !1
    );
  }
  function Zc(t, l, e) {
    var a = ht;
    ht |= 2;
    var n = Dr(), u = Rr();
    (zt !== t || it !== l) && (Nu = null, Ta(t, l)), l = !1;
    var i = jt;
    t: do
      try {
        if (yt !== 0 && et !== null) {
          var c = et, s = hl;
          switch (yt) {
            case 8:
              Xc(), i = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              El.current === null && (l = !0);
              var b = yt;
              if (yt = 0, hl = null, Ea(t, c, s, b), e && pa) {
                i = 0;
                break t;
              }
              break;
            default:
              b = yt, yt = 0, hl = null, Ea(t, c, s, b);
          }
        }
        Q0(), i = jt;
        break;
      } catch (E) {
        jr(t, E);
      }
    while (!0);
    return l && t.shellSuspendCounter++, Zl = He = null, ht = a, j.H = n, j.A = u, et === null && (zt = null, it = 0, $n()), i;
  }
  function Q0() {
    for (; et !== null; ) wr(et);
  }
  function Z0(t, l) {
    var e = ht;
    ht |= 2;
    var a = Dr(), n = Rr();
    zt !== t || it !== l ? (Nu = null, Mu = Dl() + 500, Ta(t, l)) : pa = Ca(
      t,
      l
    );
    t: do
      try {
        if (yt !== 0 && et !== null) {
          l = et;
          var u = hl;
          l: switch (yt) {
            case 1:
              yt = 0, hl = null, Ea(t, l, u, 1);
              break;
            case 2:
            case 9:
              if (Vs(u)) {
                yt = 0, hl = null, Ur(l);
                break;
              }
              l = function() {
                yt !== 2 && yt !== 9 || zt !== t || (yt = 7), Hl(t);
              }, u.then(l, l);
              break t;
            case 3:
              yt = 7;
              break t;
            case 4:
              yt = 5;
              break t;
            case 7:
              Vs(u) ? (yt = 0, hl = null, Ur(l)) : (yt = 0, hl = null, Ea(t, l, u, 7));
              break;
            case 5:
              var i = null;
              switch (et.tag) {
                case 26:
                  i = et.memoizedState;
                case 5:
                case 27:
                  var c = et;
                  if (!i || yd(i)) {
                    yt = 0, hl = null;
                    var s = c.sibling;
                    if (s !== null) et = s;
                    else {
                      var b = c.return;
                      b !== null ? (et = b, Ou(b)) : et = null;
                    }
                    break l;
                  }
              }
              yt = 0, hl = null, Ea(t, l, u, 5);
              break;
            case 6:
              yt = 0, hl = null, Ea(t, l, u, 6);
              break;
            case 8:
              Xc(), jt = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        V0();
        break;
      } catch (E) {
        jr(t, E);
      }
    while (!0);
    return Zl = He = null, j.H = a, j.A = n, ht = e, et !== null ? 0 : (zt = null, it = 0, $n(), jt);
  }
  function V0() {
    for (; et !== null && !dm(); )
      wr(et);
  }
  function wr(t) {
    var l = ir(t.alternate, t, Fl);
    t.memoizedProps = t.pendingProps, l === null ? Ou(t) : et = l;
  }
  function Ur(t) {
    var l = t, e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = tr(
          e,
          l,
          l.pendingProps,
          l.type,
          void 0,
          it
        );
        break;
      case 11:
        l = tr(
          e,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          it
        );
        break;
      case 5:
        nc(l);
      default:
        fr(e, l), l = et = Us(l, Fl), l = ir(e, l, Fl);
    }
    t.memoizedProps = t.pendingProps, l === null ? Ou(t) : et = l;
  }
  function Ea(t, l, e, a) {
    Zl = He = null, nc(l), ya = null, on = 0;
    var n = l.return;
    try {
      if (w0(
        t,
        n,
        l,
        e,
        it
      )) {
        jt = 1, Su(
          t,
          Sl(e, t.current)
        ), et = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw et = n, u;
      jt = 1, Su(
        t,
        Sl(e, t.current)
      ), et = null;
      return;
    }
    l.flags & 32768 ? (st || a === 1 ? t = !0 : pa || (it & 536870912) !== 0 ? t = !1 : (me = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = El.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Cr(l, t)) : Ou(l);
  }
  function Ou(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        Cr(
          l,
          me
        );
        return;
      }
      t = l.return;
      var e = C0(
        l.alternate,
        l,
        Fl
      );
      if (e !== null) {
        et = e;
        return;
      }
      if (l = l.sibling, l !== null) {
        et = l;
        return;
      }
      et = l = t;
    } while (l !== null);
    jt === 0 && (jt = 5);
  }
  function Cr(t, l) {
    do {
      var e = H0(t.alternate, t);
      if (e !== null) {
        e.flags &= 32767, et = e;
        return;
      }
      if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
        et = t;
        return;
      }
      et = t = e;
    } while (t !== null);
    jt = 6, et = null;
  }
  function Hr(t, l, e, a, n, u, i, c, s) {
    t.cancelPendingCommit = null;
    do
      ju();
    while (kt !== 0);
    if ((ht & 6) !== 0) throw Error(r(327));
    if (l !== null) {
      if (l === t.current) throw Error(r(177));
      if (u = l.lanes | l.childLanes, u |= wi, Am(
        t,
        e,
        u,
        i,
        c,
        s
      ), t === zt && (et = zt = null, it = 0), xa = l, ve = t, Aa = e, Bc = u, Gc = n, Mr = a, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, J0(Cn, function() {
        return Xr(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || a) {
        a = j.T, j.T = null, n = T.p, T.p = 2, i = ht, ht |= 4;
        try {
          q0(t, l, e);
        } finally {
          ht = i, T.p = n, j.T = a;
        }
      }
      kt = 1, qr(), Br(), Gr();
    }
  }
  function qr() {
    if (kt === 1) {
      kt = 0;
      var t = ve, l = xa, e = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || e) {
        e = j.T, j.T = null;
        var a = T.p;
        T.p = 2;
        var n = ht;
        ht |= 4;
        try {
          pr(l, t);
          var u = lf, i = Es(t.containerInfo), c = u.focusedElem, s = u.selectionRange;
          if (i !== c && c && c.ownerDocument && Ts(
            c.ownerDocument.documentElement,
            c
          )) {
            if (s !== null && _i(c)) {
              var b = s.start, E = s.end;
              if (E === void 0 && (E = b), "selectionStart" in c)
                c.selectionStart = b, c.selectionEnd = Math.min(
                  E,
                  c.value.length
                );
              else {
                var _ = c.ownerDocument || document, S = _ && _.defaultView || window;
                if (S.getSelection) {
                  var A = S.getSelection(), J = c.textContent.length, K = Math.min(s.start, J), pt = s.end === void 0 ? K : Math.min(s.end, J);
                  !A.extend && K > pt && (i = pt, pt = K, K = i);
                  var v = As(
                    c,
                    K
                  ), m = As(
                    c,
                    pt
                  );
                  if (v && m && (A.rangeCount !== 1 || A.anchorNode !== v.node || A.anchorOffset !== v.offset || A.focusNode !== m.node || A.focusOffset !== m.offset)) {
                    var g = _.createRange();
                    g.setStart(v.node, v.offset), A.removeAllRanges(), K > pt ? (A.addRange(g), A.extend(m.node, m.offset)) : (g.setEnd(m.node, m.offset), A.addRange(g));
                  }
                }
              }
            }
            for (_ = [], A = c; A = A.parentNode; )
              A.nodeType === 1 && _.push({
                element: A,
                left: A.scrollLeft,
                top: A.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < _.length; c++) {
              var N = _[c];
              N.element.scrollLeft = N.left, N.element.scrollTop = N.top;
            }
          }
          Qu = !!tf, lf = tf = null;
        } finally {
          ht = n, T.p = a, j.T = e;
        }
      }
      t.current = l, kt = 2;
    }
  }
  function Br() {
    if (kt === 2) {
      kt = 0;
      var t = ve, l = xa, e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        e = j.T, j.T = null;
        var a = T.p;
        T.p = 2;
        var n = ht;
        ht |= 4;
        try {
          yr(t, l.alternate, l);
        } finally {
          ht = n, T.p = a, j.T = e;
        }
      }
      kt = 3;
    }
  }
  function Gr() {
    if (kt === 4 || kt === 3) {
      kt = 0, mm();
      var t = ve, l = xa, e = Aa, a = Mr;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? kt = 5 : (kt = 0, xa = ve = null, Yr(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (ye = null), ci(e), l = l.stateNode, fl && typeof fl.onCommitFiberRoot == "function")
        try {
          fl.onCommitFiberRoot(
            Ua,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        l = j.T, n = T.p, T.p = 2, j.T = null;
        try {
          for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            u(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          j.T = l, T.p = n;
        }
      }
      (Aa & 3) !== 0 && ju(), Hl(t), n = t.pendingLanes, (e & 4194090) !== 0 && (n & 42) !== 0 ? t === Yc ? pn++ : (pn = 0, Yc = t) : pn = 0, Sn(0);
    }
  }
  function Yr(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, Ia(l)));
  }
  function ju(t) {
    return qr(), Br(), Gr(), Xr();
  }
  function Xr() {
    if (kt !== 5) return !1;
    var t = ve, l = Bc;
    Bc = 0;
    var e = ci(Aa), a = j.T, n = T.p;
    try {
      T.p = 32 > e ? 32 : e, j.T = null, e = Gc, Gc = null;
      var u = ve, i = Aa;
      if (kt = 0, xa = ve = null, Aa = 0, (ht & 6) !== 0) throw Error(r(331));
      var c = ht;
      if (ht |= 4, Er(u.current), xr(
        u,
        u.current,
        i,
        e
      ), ht = c, Sn(0, !1), fl && typeof fl.onPostCommitFiberRoot == "function")
        try {
          fl.onPostCommitFiberRoot(Ua, u);
        } catch {
        }
      return !0;
    } finally {
      T.p = n, j.T = a, Yr(t, l);
    }
  }
  function Qr(t, l, e) {
    l = Sl(e, l), l = bc(t.stateNode, l, 2), t = ie(t, l, 2), t !== null && (Ha(t, 2), Hl(t));
  }
  function St(t, l, e) {
    if (t.tag === 3)
      Qr(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          Qr(
            l,
            t,
            e
          );
          break;
        } else if (l.tag === 1) {
          var a = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ye === null || !ye.has(a))) {
            t = Sl(e, t), e = Ko(2), a = ie(l, e, 2), a !== null && (ko(
              e,
              a,
              l,
              t
            ), Ha(a, 2), Hl(a));
            break;
          }
        }
        l = l.return;
      }
  }
  function Vc(t, l, e) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new Y0();
      var n = /* @__PURE__ */ new Set();
      a.set(l, n);
    } else
      n = a.get(l), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(l, n));
    n.has(e) || (Uc = !0, n.add(e), t = L0.bind(null, t, l, e), l.then(t, t));
  }
  function L0(t, l, e) {
    var a = t.pingCache;
    a !== null && a.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, zt === t && (it & e) === e && (jt === 4 || jt === 3 && (it & 62914560) === it && 300 > Dl() - qc ? (ht & 2) === 0 && Ta(t, 0) : Cc |= e, Sa === it && (Sa = 0)), Hl(t);
  }
  function Zr(t, l) {
    l === 0 && (l = Bf()), t = ua(t, l), t !== null && (Ha(t, l), Hl(t));
  }
  function K0(t) {
    var l = t.memoizedState, e = 0;
    l !== null && (e = l.retryLane), Zr(t, e);
  }
  function k0(t, l) {
    var e = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode, n = t.memoizedState;
        n !== null && (e = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(l), Zr(t, e);
  }
  function J0(t, l) {
    return ai(t, l);
  }
  var Du = null, za = null, Lc = !1, Ru = !1, Kc = !1, Ze = 0;
  function Hl(t) {
    t !== za && t.next === null && (za === null ? Du = za = t : za = za.next = t), Ru = !0, Lc || (Lc = !0, $0());
  }
  function Sn(t, l) {
    if (!Kc && Ru) {
      Kc = !0;
      do
        for (var e = !1, a = Du; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes, c = a.pingedLanes;
              u = (1 << 31 - sl(42 | t) + 1) - 1, u &= n & ~(i & ~c), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (e = !0, kr(a, u));
          } else
            u = it, u = Bn(
              a,
              a === zt ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Ca(a, u) || (e = !0, kr(a, u));
          a = a.next;
        }
      while (e);
      Kc = !1;
    }
  }
  function W0() {
    Vr();
  }
  function Vr() {
    Ru = Lc = !1;
    var t = 0;
    Ze !== 0 && (nh() && (t = Ze), Ze = 0);
    for (var l = Dl(), e = null, a = Du; a !== null; ) {
      var n = a.next, u = Lr(a, l);
      u === 0 ? (a.next = null, e === null ? Du = n : e.next = n, n === null && (za = e)) : (e = a, (t !== 0 || (u & 3) !== 0) && (Ru = !0)), a = n;
    }
    Sn(t);
  }
  function Lr(t, l) {
    for (var e = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - sl(u), c = 1 << i, s = n[i];
      s === -1 ? ((c & e) === 0 || (c & a) !== 0) && (n[i] = xm(c, l)) : s <= l && (t.expiredLanes |= c), u &= ~c;
    }
    if (l = zt, e = it, e = Bn(
      t,
      t === l ? e : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, e === 0 || t === l && (yt === 2 || yt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && ni(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((e & 3) === 0 || Ca(t, e)) {
      if (l = e & -e, l === t.callbackPriority) return l;
      switch (a !== null && ni(a), ci(e)) {
        case 2:
        case 8:
          e = Cf;
          break;
        case 32:
          e = Cn;
          break;
        case 268435456:
          e = Hf;
          break;
        default:
          e = Cn;
      }
      return a = Kr.bind(null, t), e = ai(e, a), t.callbackPriority = l, t.callbackNode = e, l;
    }
    return a !== null && a !== null && ni(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Kr(t, l) {
    if (kt !== 0 && kt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var e = t.callbackNode;
    if (ju() && t.callbackNode !== e)
      return null;
    var a = it;
    return a = Bn(
      t,
      t === zt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (_r(t, a, l), Lr(t, Dl()), t.callbackNode != null && t.callbackNode === e ? Kr.bind(null, t) : null);
  }
  function kr(t, l) {
    if (ju()) return null;
    _r(t, l, !0);
  }
  function $0() {
    ih(function() {
      (ht & 6) !== 0 ? ai(
        Uf,
        W0
      ) : Vr();
    });
  }
  function kc() {
    return Ze === 0 && (Ze = qf()), Ze;
  }
  function Jr(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Zn("" + t);
  }
  function Wr(t, l) {
    var e = l.ownerDocument.createElement("input");
    return e.name = l.name, e.value = l.value, t.id && e.setAttribute("form", t.id), l.parentNode.insertBefore(e, l), t = new FormData(t), e.parentNode.removeChild(e), t;
  }
  function F0(t, l, e, a, n) {
    if (l === "submit" && e && e.stateNode === n) {
      var u = Jr(
        (n[el] || null).action
      ), i = a.submitter;
      i && (l = (l = i[el] || null) ? Jr(l.formAction) : i.getAttribute("formAction"), l !== null && (u = l, i = null));
      var c = new kn(
        "action",
        "action",
        null,
        a,
        n
      );
      t.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Ze !== 0) {
                  var s = i ? Wr(n, i) : new FormData(n);
                  mc(
                    e,
                    {
                      pending: !0,
                      data: s,
                      method: n.method,
                      action: u
                    },
                    null,
                    s
                  );
                }
              } else
                typeof u == "function" && (c.preventDefault(), s = i ? Wr(n, i) : new FormData(n), mc(
                  e,
                  {
                    pending: !0,
                    data: s,
                    method: n.method,
                    action: u
                  },
                  u,
                  s
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var Jc = 0; Jc < Ri.length; Jc++) {
    var Wc = Ri[Jc], I0 = Wc.toLowerCase(), P0 = Wc[0].toUpperCase() + Wc.slice(1);
    Nl(
      I0,
      "on" + P0
    );
  }
  Nl(Ns, "onAnimationEnd"), Nl(_s, "onAnimationIteration"), Nl(Os, "onAnimationStart"), Nl("dblclick", "onDoubleClick"), Nl("focusin", "onFocus"), Nl("focusout", "onBlur"), Nl(v0, "onTransitionRun"), Nl(g0, "onTransitionStart"), Nl(b0, "onTransitionCancel"), Nl(js, "onTransitionEnd"), We("onMouseEnter", ["mouseout", "mouseover"]), We("onMouseLeave", ["mouseout", "mouseover"]), We("onPointerEnter", ["pointerout", "pointerover"]), We("onPointerLeave", ["pointerout", "pointerover"]), Ne(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ne(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ne("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ne(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ne(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ne(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var xn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), th = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xn)
  );
  function $r(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var a = t[e], n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (l)
          for (var i = a.length - 1; 0 <= i; i--) {
            var c = a[i], s = c.instance, b = c.currentTarget;
            if (c = c.listener, s !== u && n.isPropagationStopped())
              break t;
            u = c, n.currentTarget = b;
            try {
              u(n);
            } catch (E) {
              pu(E);
            }
            n.currentTarget = null, u = s;
          }
        else
          for (i = 0; i < a.length; i++) {
            if (c = a[i], s = c.instance, b = c.currentTarget, c = c.listener, s !== u && n.isPropagationStopped())
              break t;
            u = c, n.currentTarget = b;
            try {
              u(n);
            } catch (E) {
              pu(E);
            }
            n.currentTarget = null, u = s;
          }
      }
    }
  }
  function at(t, l) {
    var e = l[fi];
    e === void 0 && (e = l[fi] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    e.has(a) || (Fr(l, t, 2, !1), e.add(a));
  }
  function $c(t, l, e) {
    var a = 0;
    l && (a |= 4), Fr(
      e,
      t,
      a,
      l
    );
  }
  var wu = "_reactListening" + Math.random().toString(36).slice(2);
  function Fc(t) {
    if (!t[wu]) {
      t[wu] = !0, Zf.forEach(function(e) {
        e !== "selectionchange" && (th.has(e) || $c(e, !1, t), $c(e, !0, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[wu] || (l[wu] = !0, $c("selectionchange", !1, l));
    }
  }
  function Fr(t, l, e, a) {
    switch (xd(l)) {
      case 2:
        var n = Nh;
        break;
      case 8:
        n = _h;
        break;
      default:
        n = df;
    }
    e = n.bind(
      null,
      l,
      e,
      t
    ), n = void 0, !pi || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(l, e, {
      capture: !0,
      passive: n
    }) : t.addEventListener(l, e, !0) : n !== void 0 ? t.addEventListener(l, e, {
      passive: n
    }) : t.addEventListener(l, e, !1);
  }
  function Ic(t, l, e, a, n) {
    var u = a;
    if ((l & 1) === 0 && (l & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var c = a.stateNode.containerInfo;
          if (c === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (i = Ke(c), i === null) return;
            if (s = i.tag, s === 5 || s === 6 || s === 26 || s === 27) {
              a = u = i;
              continue t;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    as(function() {
      var b = u, E = gi(e), _ = [];
      t: {
        var S = Ds.get(t);
        if (S !== void 0) {
          var A = kn, J = t;
          switch (t) {
            case "keypress":
              if (Ln(e) === 0) break t;
            case "keydown":
            case "keyup":
              A = Jm;
              break;
            case "focusin":
              J = "focus", A = Ti;
              break;
            case "focusout":
              J = "blur", A = Ti;
              break;
            case "beforeblur":
            case "afterblur":
              A = Ti;
              break;
            case "click":
              if (e.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              A = is;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              A = Hm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              A = Fm;
              break;
            case Ns:
            case _s:
            case Os:
              A = Gm;
              break;
            case js:
              A = Pm;
              break;
            case "scroll":
            case "scrollend":
              A = Um;
              break;
            case "wheel":
              A = l0;
              break;
            case "copy":
            case "cut":
            case "paste":
              A = Xm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              A = fs;
              break;
            case "toggle":
            case "beforetoggle":
              A = a0;
          }
          var K = (l & 4) !== 0, pt = !K && (t === "scroll" || t === "scrollend"), v = K ? S !== null ? S + "Capture" : null : S;
          K = [];
          for (var m = b, g; m !== null; ) {
            var N = m;
            if (g = N.stateNode, N = N.tag, N !== 5 && N !== 26 && N !== 27 || g === null || v === null || (N = Ga(m, v), N != null && K.push(
              An(m, N, g)
            )), pt) break;
            m = m.return;
          }
          0 < K.length && (S = new A(
            S,
            J,
            null,
            e,
            E
          ), _.push({ event: S, listeners: K }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (S = t === "mouseover" || t === "pointerover", A = t === "mouseout" || t === "pointerout", S && e !== vi && (J = e.relatedTarget || e.fromElement) && (Ke(J) || J[Le]))
            break t;
          if ((A || S) && (S = E.window === E ? E : (S = E.ownerDocument) ? S.defaultView || S.parentWindow : window, A ? (J = e.relatedTarget || e.toElement, A = b, J = J ? Ke(J) : null, J !== null && (pt = D(J), K = J.tag, J !== pt || K !== 5 && K !== 27 && K !== 6) && (J = null)) : (A = null, J = b), A !== J)) {
            if (K = is, N = "onMouseLeave", v = "onMouseEnter", m = "mouse", (t === "pointerout" || t === "pointerover") && (K = fs, N = "onPointerLeave", v = "onPointerEnter", m = "pointer"), pt = A == null ? S : Ba(A), g = J == null ? S : Ba(J), S = new K(
              N,
              m + "leave",
              A,
              e,
              E
            ), S.target = pt, S.relatedTarget = g, N = null, Ke(E) === b && (K = new K(
              v,
              m + "enter",
              J,
              e,
              E
            ), K.target = g, K.relatedTarget = pt, N = K), pt = N, A && J)
              l: {
                for (K = A, v = J, m = 0, g = K; g; g = Ma(g))
                  m++;
                for (g = 0, N = v; N; N = Ma(N))
                  g++;
                for (; 0 < m - g; )
                  K = Ma(K), m--;
                for (; 0 < g - m; )
                  v = Ma(v), g--;
                for (; m--; ) {
                  if (K === v || v !== null && K === v.alternate)
                    break l;
                  K = Ma(K), v = Ma(v);
                }
                K = null;
              }
            else K = null;
            A !== null && Ir(
              _,
              S,
              A,
              K,
              !1
            ), J !== null && pt !== null && Ir(
              _,
              pt,
              J,
              K,
              !0
            );
          }
        }
        t: {
          if (S = b ? Ba(b) : window, A = S.nodeName && S.nodeName.toLowerCase(), A === "select" || A === "input" && S.type === "file")
            var G = vs;
          else if (hs(S))
            if (gs)
              G = m0;
            else {
              G = r0;
              var lt = o0;
            }
          else
            A = S.nodeName, !A || A.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? b && yi(b.elementType) && (G = vs) : G = d0;
          if (G && (G = G(t, b))) {
            ys(
              _,
              G,
              e,
              E
            );
            break t;
          }
          lt && lt(t, S, b), t === "focusout" && b && S.type === "number" && b.memoizedProps.value != null && hi(S, "number", S.value);
        }
        switch (lt = b ? Ba(b) : window, t) {
          case "focusin":
            (hs(lt) || lt.contentEditable === "true") && (ea = lt, Oi = b, ka = null);
            break;
          case "focusout":
            ka = Oi = ea = null;
            break;
          case "mousedown":
            ji = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ji = !1, zs(_, e, E);
            break;
          case "selectionchange":
            if (y0) break;
          case "keydown":
          case "keyup":
            zs(_, e, E);
        }
        var Z;
        if (zi)
          t: {
            switch (t) {
              case "compositionstart":
                var k = "onCompositionStart";
                break t;
              case "compositionend":
                k = "onCompositionEnd";
                break t;
              case "compositionupdate":
                k = "onCompositionUpdate";
                break t;
            }
            k = void 0;
          }
        else
          la ? ds(t, e) && (k = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (k = "onCompositionStart");
        k && (ss && e.locale !== "ko" && (la || k !== "onCompositionStart" ? k === "onCompositionEnd" && la && (Z = ns()) : (ee = E, Si = "value" in ee ? ee.value : ee.textContent, la = !0)), lt = Uu(b, k), 0 < lt.length && (k = new cs(
          k,
          t,
          null,
          e,
          E
        ), _.push({ event: k, listeners: lt }), Z ? k.data = Z : (Z = ms(e), Z !== null && (k.data = Z)))), (Z = u0 ? i0(t, e) : c0(t, e)) && (k = Uu(b, "onBeforeInput"), 0 < k.length && (lt = new cs(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          E
        ), _.push({
          event: lt,
          listeners: k
        }), lt.data = Z)), F0(
          _,
          t,
          b,
          e,
          E
        );
      }
      $r(_, l);
    });
  }
  function An(t, l, e) {
    return {
      instance: t,
      listener: l,
      currentTarget: e
    };
  }
  function Uu(t, l) {
    for (var e = l + "Capture", a = []; t !== null; ) {
      var n = t, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Ga(t, e), n != null && a.unshift(
        An(t, n, u)
      ), n = Ga(t, l), n != null && a.push(
        An(t, n, u)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function Ma(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Ir(t, l, e, a, n) {
    for (var u = l._reactName, i = []; e !== null && e !== a; ) {
      var c = e, s = c.alternate, b = c.stateNode;
      if (c = c.tag, s !== null && s === a) break;
      c !== 5 && c !== 26 && c !== 27 || b === null || (s = b, n ? (b = Ga(e, u), b != null && i.unshift(
        An(e, b, s)
      )) : n || (b = Ga(e, u), b != null && i.push(
        An(e, b, s)
      ))), e = e.return;
    }
    i.length !== 0 && t.push({ event: l, listeners: i });
  }
  var lh = /\r\n?/g, eh = /\u0000|\uFFFD/g;
  function Pr(t) {
    return (typeof t == "string" ? t : "" + t).replace(lh, `
`).replace(eh, "");
  }
  function td(t, l) {
    return l = Pr(l), Pr(t) === l;
  }
  function Cu() {
  }
  function bt(t, l, e, a, n, u) {
    switch (e) {
      case "children":
        typeof a == "string" ? l === "body" || l === "textarea" && a === "" || Ie(t, a) : (typeof a == "number" || typeof a == "bigint") && l !== "body" && Ie(t, "" + a);
        break;
      case "className":
        Yn(t, "class", a);
        break;
      case "tabIndex":
        Yn(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Yn(t, e, a);
        break;
      case "style":
        ls(t, a, u);
        break;
      case "data":
        if (l !== "object") {
          Yn(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (l !== "a" || e !== "href")) {
          t.removeAttribute(e);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        a = Zn("" + a), t.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (e === "formAction" ? (l !== "input" && bt(t, l, "name", n.name, n, null), bt(
            t,
            l,
            "formEncType",
            n.formEncType,
            n,
            null
          ), bt(
            t,
            l,
            "formMethod",
            n.formMethod,
            n,
            null
          ), bt(
            t,
            l,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (bt(t, l, "encType", n.encType, n, null), bt(t, l, "method", n.method, n, null), bt(t, l, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        a = Zn("" + a), t.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (t.onclick = Cu);
        break;
      case "onScroll":
        a != null && at("scroll", t);
        break;
      case "onScrollEnd":
        a != null && at("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (e = a.__html, e != null) {
            if (n.children != null) throw Error(r(60));
            t.innerHTML = e;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
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
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        e = Zn("" + a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          e
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
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "" + a) : t.removeAttribute(e);
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
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "") : t.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, a) : t.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(e, a) : t.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(e) : t.setAttribute(e, a);
        break;
      case "popover":
        at("beforetoggle", t), at("toggle", t), Gn(t, "popover", a);
        break;
      case "xlinkActuate":
        Bl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Bl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Bl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Bl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Bl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Bl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Bl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Bl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Bl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Gn(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = Rm.get(e) || e, Gn(t, e, a));
    }
  }
  function Pc(t, l, e, a, n, u) {
    switch (e) {
      case "style":
        ls(t, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (e = a.__html, e != null) {
            if (n.children != null) throw Error(r(60));
            t.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Ie(t, a) : (typeof a == "number" || typeof a == "bigint") && Ie(t, "" + a);
        break;
      case "onScroll":
        a != null && at("scroll", t);
        break;
      case "onScrollEnd":
        a != null && at("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Cu);
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
        if (!Vf.hasOwnProperty(e))
          t: {
            if (e[0] === "o" && e[1] === "n" && (n = e.endsWith("Capture"), l = e.slice(2, n ? e.length - 7 : void 0), u = t[el] || null, u = u != null ? u[e] : null, typeof u == "function" && t.removeEventListener(l, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(l, a, n);
              break t;
            }
            e in t ? t[e] = a : a === !0 ? t.setAttribute(e, "") : Gn(t, e, a);
          }
    }
  }
  function Jt(t, l, e) {
    switch (l) {
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
        at("error", t), at("load", t);
        var a = !1, n = !1, u;
        for (u in e)
          if (e.hasOwnProperty(u)) {
            var i = e[u];
            if (i != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, l));
                default:
                  bt(t, l, u, i, e, null);
              }
          }
        n && bt(t, l, "srcSet", e.srcSet, e, null), a && bt(t, l, "src", e.src, e, null);
        return;
      case "input":
        at("invalid", t);
        var c = u = i = n = null, s = null, b = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var E = e[a];
            if (E != null)
              switch (a) {
                case "name":
                  n = E;
                  break;
                case "type":
                  i = E;
                  break;
                case "checked":
                  s = E;
                  break;
                case "defaultChecked":
                  b = E;
                  break;
                case "value":
                  u = E;
                  break;
                case "defaultValue":
                  c = E;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (E != null)
                    throw Error(r(137, l));
                  break;
                default:
                  bt(t, l, a, E, e, null);
              }
          }
        Ff(
          t,
          u,
          c,
          s,
          b,
          i,
          n,
          !1
        ), Xn(t);
        return;
      case "select":
        at("invalid", t), a = i = u = null;
        for (n in e)
          if (e.hasOwnProperty(n) && (c = e[n], c != null))
            switch (n) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                a = c;
              default:
                bt(t, l, n, c, e, null);
            }
        l = u, e = i, t.multiple = !!a, l != null ? Fe(t, !!a, l, !1) : e != null && Fe(t, !!a, e, !0);
        return;
      case "textarea":
        at("invalid", t), u = n = a = null;
        for (i in e)
          if (e.hasOwnProperty(i) && (c = e[i], c != null))
            switch (i) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                n = c;
                break;
              case "children":
                u = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(r(91));
                break;
              default:
                bt(t, l, i, c, e, null);
            }
        Pf(t, a, n, u), Xn(t);
        return;
      case "option":
        for (s in e)
          if (e.hasOwnProperty(s) && (a = e[s], a != null))
            switch (s) {
              case "selected":
                t.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                bt(t, l, s, a, e, null);
            }
        return;
      case "dialog":
        at("beforetoggle", t), at("toggle", t), at("cancel", t), at("close", t);
        break;
      case "iframe":
      case "object":
        at("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < xn.length; a++)
          at(xn[a], t);
        break;
      case "image":
        at("error", t), at("load", t);
        break;
      case "details":
        at("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        at("error", t), at("load", t);
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
        for (b in e)
          if (e.hasOwnProperty(b) && (a = e[b], a != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, l));
              default:
                bt(t, l, b, a, e, null);
            }
        return;
      default:
        if (yi(l)) {
          for (E in e)
            e.hasOwnProperty(E) && (a = e[E], a !== void 0 && Pc(
              t,
              l,
              E,
              a,
              e,
              void 0
            ));
          return;
        }
    }
    for (c in e)
      e.hasOwnProperty(c) && (a = e[c], a != null && bt(t, l, c, a, e, null));
  }
  function ah(t, l, e, a) {
    switch (l) {
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
        var n = null, u = null, i = null, c = null, s = null, b = null, E = null;
        for (A in e) {
          var _ = e[A];
          if (e.hasOwnProperty(A) && _ != null)
            switch (A) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = _;
              default:
                a.hasOwnProperty(A) || bt(t, l, A, null, a, _);
            }
        }
        for (var S in a) {
          var A = a[S];
          if (_ = e[S], a.hasOwnProperty(S) && (A != null || _ != null))
            switch (S) {
              case "type":
                u = A;
                break;
              case "name":
                n = A;
                break;
              case "checked":
                b = A;
                break;
              case "defaultChecked":
                E = A;
                break;
              case "value":
                i = A;
                break;
              case "defaultValue":
                c = A;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(r(137, l));
                break;
              default:
                A !== _ && bt(
                  t,
                  l,
                  S,
                  A,
                  a,
                  _
                );
            }
        }
        mi(
          t,
          i,
          c,
          s,
          b,
          E,
          u,
          n
        );
        return;
      case "select":
        A = i = c = S = null;
        for (u in e)
          if (s = e[u], e.hasOwnProperty(u) && s != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                A = s;
              default:
                a.hasOwnProperty(u) || bt(
                  t,
                  l,
                  u,
                  null,
                  a,
                  s
                );
            }
        for (n in a)
          if (u = a[n], s = e[n], a.hasOwnProperty(n) && (u != null || s != null))
            switch (n) {
              case "value":
                S = u;
                break;
              case "defaultValue":
                c = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== s && bt(
                  t,
                  l,
                  n,
                  u,
                  a,
                  s
                );
            }
        l = c, e = i, a = A, S != null ? Fe(t, !!e, S, !1) : !!a != !!e && (l != null ? Fe(t, !!e, l, !0) : Fe(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        A = S = null;
        for (c in e)
          if (n = e[c], e.hasOwnProperty(c) && n != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                bt(t, l, c, null, a, n);
            }
        for (i in a)
          if (n = a[i], u = e[i], a.hasOwnProperty(i) && (n != null || u != null))
            switch (i) {
              case "value":
                S = n;
                break;
              case "defaultValue":
                A = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(r(91));
                break;
              default:
                n !== u && bt(t, l, i, n, a, u);
            }
        If(t, S, A);
        return;
      case "option":
        for (var J in e)
          if (S = e[J], e.hasOwnProperty(J) && S != null && !a.hasOwnProperty(J))
            switch (J) {
              case "selected":
                t.selected = !1;
                break;
              default:
                bt(
                  t,
                  l,
                  J,
                  null,
                  a,
                  S
                );
            }
        for (s in a)
          if (S = a[s], A = e[s], a.hasOwnProperty(s) && S !== A && (S != null || A != null))
            switch (s) {
              case "selected":
                t.selected = S && typeof S != "function" && typeof S != "symbol";
                break;
              default:
                bt(
                  t,
                  l,
                  s,
                  S,
                  a,
                  A
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
        for (var K in e)
          S = e[K], e.hasOwnProperty(K) && S != null && !a.hasOwnProperty(K) && bt(t, l, K, null, a, S);
        for (b in a)
          if (S = a[b], A = e[b], a.hasOwnProperty(b) && S !== A && (S != null || A != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(r(137, l));
                break;
              default:
                bt(
                  t,
                  l,
                  b,
                  S,
                  a,
                  A
                );
            }
        return;
      default:
        if (yi(l)) {
          for (var pt in e)
            S = e[pt], e.hasOwnProperty(pt) && S !== void 0 && !a.hasOwnProperty(pt) && Pc(
              t,
              l,
              pt,
              void 0,
              a,
              S
            );
          for (E in a)
            S = a[E], A = e[E], !a.hasOwnProperty(E) || S === A || S === void 0 && A === void 0 || Pc(
              t,
              l,
              E,
              S,
              a,
              A
            );
          return;
        }
    }
    for (var v in e)
      S = e[v], e.hasOwnProperty(v) && S != null && !a.hasOwnProperty(v) && bt(t, l, v, null, a, S);
    for (_ in a)
      S = a[_], A = e[_], !a.hasOwnProperty(_) || S === A || S == null && A == null || bt(t, l, _, S, a, A);
  }
  var tf = null, lf = null;
  function Hu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function ld(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ed(t, l) {
    if (t === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && l === "foreignObject" ? 0 : t;
  }
  function ef(t, l) {
    return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var af = null;
  function nh() {
    var t = window.event;
    return t && t.type === "popstate" ? t === af ? !1 : (af = t, !0) : (af = null, !1);
  }
  var ad = typeof setTimeout == "function" ? setTimeout : void 0, uh = typeof clearTimeout == "function" ? clearTimeout : void 0, nd = typeof Promise == "function" ? Promise : void 0, ih = typeof queueMicrotask == "function" ? queueMicrotask : typeof nd < "u" ? function(t) {
    return nd.resolve(null).then(t).catch(ch);
  } : ad;
  function ch(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function be(t) {
    return t === "head";
  }
  function ud(t, l) {
    var e = l, a = 0, n = 0;
    do {
      var u = e.nextSibling;
      if (t.removeChild(e), u && u.nodeType === 8)
        if (e = u.data, e === "/$") {
          if (0 < a && 8 > a) {
            e = a;
            var i = t.ownerDocument;
            if (e & 1 && Tn(i.documentElement), e & 2 && Tn(i.body), e & 4)
              for (e = i.head, Tn(e), i = e.firstChild; i; ) {
                var c = i.nextSibling, s = i.nodeName;
                i[qa] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && i.rel.toLowerCase() === "stylesheet" || e.removeChild(i), i = c;
              }
          }
          if (n === 0) {
            t.removeChild(u), Dn(l);
            return;
          }
          n--;
        } else
          e === "$" || e === "$?" || e === "$!" ? n++ : a = e.charCodeAt(0) - 48;
      else a = 0;
      e = u;
    } while (e);
    Dn(l);
  }
  function nf(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (l = l.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          nf(e), si(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(e);
    }
  }
  function fh(t, l, e, a) {
    for (; t.nodeType === 1; ) {
      var n = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[qa])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (u !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (u = t.getAttribute("src"), (u !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === u)
          return t;
      } else return t;
      if (t = Ol(t.nextSibling), t === null) break;
    }
    return null;
  }
  function sh(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ol(t.nextSibling), t === null)) return null;
    return t;
  }
  function uf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete";
  }
  function oh(t, l) {
    var e = t.ownerDocument;
    if (t.data !== "$?" || e.readyState === "complete")
      l();
    else {
      var a = function() {
        l(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function Ol(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (l = t.data, l === "$" || l === "$!" || l === "$?" || l === "F!" || l === "F")
          break;
        if (l === "/$") return null;
      }
    }
    return t;
  }
  var cf = null;
  function id(t) {
    t = t.previousSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "$" || e === "$!" || e === "$?") {
          if (l === 0) return t;
          l--;
        } else e === "/$" && l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function cd(t, l, e) {
    switch (l = Hu(e), t) {
      case "html":
        if (t = l.documentElement, !t) throw Error(r(452));
        return t;
      case "head":
        if (t = l.head, !t) throw Error(r(453));
        return t;
      case "body":
        if (t = l.body, !t) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function Tn(t) {
    for (var l = t.attributes; l.length; )
      t.removeAttributeNode(l[0]);
    si(t);
  }
  var Ml = /* @__PURE__ */ new Map(), fd = /* @__PURE__ */ new Set();
  function qu(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Il = T.d;
  T.d = {
    f: rh,
    r: dh,
    D: mh,
    C: hh,
    L: yh,
    m: vh,
    X: bh,
    S: gh,
    M: ph
  };
  function rh() {
    var t = Il.f(), l = _u();
    return t || l;
  }
  function dh(t) {
    var l = ke(t);
    l !== null && l.tag === 5 && l.type === "form" ? _o(l) : Il.r(t);
  }
  var Na = typeof document > "u" ? null : document;
  function sd(t, l, e) {
    var a = Na;
    if (a && typeof l == "string" && l) {
      var n = pl(l);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof e == "string" && (n += '[crossorigin="' + e + '"]'), fd.has(n) || (fd.add(n), t = { rel: t, crossOrigin: e, href: l }, a.querySelector(n) === null && (l = a.createElement("link"), Jt(l, "link", t), Qt(l), a.head.appendChild(l)));
    }
  }
  function mh(t) {
    Il.D(t), sd("dns-prefetch", t, null);
  }
  function hh(t, l) {
    Il.C(t, l), sd("preconnect", t, l);
  }
  function yh(t, l, e) {
    Il.L(t, l, e);
    var a = Na;
    if (a && t && l) {
      var n = 'link[rel="preload"][as="' + pl(l) + '"]';
      l === "image" && e && e.imageSrcSet ? (n += '[imagesrcset="' + pl(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (n += '[imagesizes="' + pl(
        e.imageSizes
      ) + '"]')) : n += '[href="' + pl(t) + '"]';
      var u = n;
      switch (l) {
        case "style":
          u = _a(t);
          break;
        case "script":
          u = Oa(t);
      }
      Ml.has(u) || (t = H(
        {
          rel: "preload",
          href: l === "image" && e && e.imageSrcSet ? void 0 : t,
          as: l
        },
        e
      ), Ml.set(u, t), a.querySelector(n) !== null || l === "style" && a.querySelector(En(u)) || l === "script" && a.querySelector(zn(u)) || (l = a.createElement("link"), Jt(l, "link", t), Qt(l), a.head.appendChild(l)));
    }
  }
  function vh(t, l) {
    Il.m(t, l);
    var e = Na;
    if (e && t) {
      var a = l && typeof l.as == "string" ? l.as : "script", n = 'link[rel="modulepreload"][as="' + pl(a) + '"][href="' + pl(t) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Oa(t);
      }
      if (!Ml.has(u) && (t = H({ rel: "modulepreload", href: t }, l), Ml.set(u, t), e.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(zn(u)))
              return;
        }
        a = e.createElement("link"), Jt(a, "link", t), Qt(a), e.head.appendChild(a);
      }
    }
  }
  function gh(t, l, e) {
    Il.S(t, l, e);
    var a = Na;
    if (a && t) {
      var n = Je(a).hoistableStyles, u = _a(t);
      l = l || "default";
      var i = n.get(u);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = a.querySelector(
          En(u)
        ))
          c.loading = 5;
        else {
          t = H(
            { rel: "stylesheet", href: t, "data-precedence": l },
            e
          ), (e = Ml.get(u)) && ff(t, e);
          var s = i = a.createElement("link");
          Qt(s), Jt(s, "link", t), s._p = new Promise(function(b, E) {
            s.onload = b, s.onerror = E;
          }), s.addEventListener("load", function() {
            c.loading |= 1;
          }), s.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Bu(i, l, a);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: c
        }, n.set(u, i);
      }
    }
  }
  function bh(t, l) {
    Il.X(t, l);
    var e = Na;
    if (e && t) {
      var a = Je(e).hoistableScripts, n = Oa(t), u = a.get(n);
      u || (u = e.querySelector(zn(n)), u || (t = H({ src: t, async: !0 }, l), (l = Ml.get(n)) && sf(t, l), u = e.createElement("script"), Qt(u), Jt(u, "link", t), e.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function ph(t, l) {
    Il.M(t, l);
    var e = Na;
    if (e && t) {
      var a = Je(e).hoistableScripts, n = Oa(t), u = a.get(n);
      u || (u = e.querySelector(zn(n)), u || (t = H({ src: t, async: !0, type: "module" }, l), (l = Ml.get(n)) && sf(t, l), u = e.createElement("script"), Qt(u), Jt(u, "link", t), e.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function od(t, l, e, a) {
    var n = (n = Q.current) ? qu(n) : null;
    if (!n) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (l = _a(e.href), e = Je(
          n
        ).hoistableStyles, a = e.get(l), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          t = _a(e.href);
          var u = Je(
            n
          ).hoistableStyles, i = u.get(t);
          if (i || (n = n.ownerDocument || n, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, i), (u = n.querySelector(
            En(t)
          )) && !u._p && (i.instance = u, i.state.loading = 5), Ml.has(t) || (e = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, Ml.set(t, e), u || Sh(
            n,
            t,
            e,
            i.state
          ))), l && a === null)
            throw Error(r(528, ""));
          return i;
        }
        if (l && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Oa(e), e = Je(
          n
        ).hoistableScripts, a = e.get(l), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, t));
    }
  }
  function _a(t) {
    return 'href="' + pl(t) + '"';
  }
  function En(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function rd(t) {
    return H({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Sh(t, l, e, a) {
    t.querySelector('link[rel="preload"][as="style"][' + l + "]") ? a.loading = 1 : (l = t.createElement("link"), a.preload = l, l.addEventListener("load", function() {
      return a.loading |= 1;
    }), l.addEventListener("error", function() {
      return a.loading |= 2;
    }), Jt(l, "link", e), Qt(l), t.head.appendChild(l));
  }
  function Oa(t) {
    return '[src="' + pl(t) + '"]';
  }
  function zn(t) {
    return "script[async]" + t;
  }
  function dd(t, l, e) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + pl(e.href) + '"]'
          );
          if (a)
            return l.instance = a, Qt(a), a;
          var n = H({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), Qt(a), Jt(a, "style", n), Bu(a, e.precedence, t), l.instance = a;
        case "stylesheet":
          n = _a(e.href);
          var u = t.querySelector(
            En(n)
          );
          if (u)
            return l.state.loading |= 4, l.instance = u, Qt(u), u;
          a = rd(e), (n = Ml.get(n)) && ff(a, n), u = (t.ownerDocument || t).createElement("link"), Qt(u);
          var i = u;
          return i._p = new Promise(function(c, s) {
            i.onload = c, i.onerror = s;
          }), Jt(u, "link", a), l.state.loading |= 4, Bu(u, e.precedence, t), l.instance = u;
        case "script":
          return u = Oa(e.src), (n = t.querySelector(
            zn(u)
          )) ? (l.instance = n, Qt(n), n) : (a = e, (n = Ml.get(u)) && (a = H({}, e), sf(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), Qt(n), Jt(n, "link", a), t.head.appendChild(n), l.instance = n);
        case "void":
          return null;
        default:
          throw Error(r(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (a = l.instance, l.state.loading |= 4, Bu(a, e.precedence, t));
    return l.instance;
  }
  function Bu(t, l, e) {
    for (var a = e.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
      var c = a[i];
      if (c.dataset.precedence === l) u = c;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (l = e.nodeType === 9 ? e.head : e, l.insertBefore(t, l.firstChild));
  }
  function ff(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
  }
  function sf(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
  }
  var Gu = null;
  function md(t, l, e) {
    if (Gu === null) {
      var a = /* @__PURE__ */ new Map(), n = Gu = /* @__PURE__ */ new Map();
      n.set(e, a);
    } else
      n = Gu, a = n.get(e), a || (a = /* @__PURE__ */ new Map(), n.set(e, a));
    if (a.has(t)) return a;
    for (a.set(t, null), e = e.getElementsByTagName(t), n = 0; n < e.length; n++) {
      var u = e[n];
      if (!(u[qa] || u[Ft] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(l) || "";
        i = t + i;
        var c = a.get(i);
        c ? c.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function hd(t, l, e) {
    t = t.ownerDocument || t, t.head.insertBefore(
      e,
      l === "title" ? t.querySelector("head > title") : null
    );
  }
  function xh(t, l, e) {
    if (e === 1 || l.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "")
          break;
        return !0;
      case "link":
        if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError)
          break;
        switch (l.rel) {
          case "stylesheet":
            return t = l.disabled, typeof l.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string")
          return !0;
    }
    return !1;
  }
  function yd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Mn = null;
  function Ah() {
  }
  function Th(t, l, e) {
    if (Mn === null) throw Error(r(475));
    var a = Mn;
    if (l.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = _a(e.href), u = t.querySelector(
          En(n)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (a.count++, a = Yu.bind(a), t.then(a, a)), l.state.loading |= 4, l.instance = u, Qt(u);
          return;
        }
        u = t.ownerDocument || t, e = rd(e), (n = Ml.get(n)) && ff(e, n), u = u.createElement("link"), Qt(u);
        var i = u;
        i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), Jt(u, "link", e), l.instance = u;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (a.count++, l = Yu.bind(a), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  function Eh() {
    if (Mn === null) throw Error(r(475));
    var t = Mn;
    return t.stylesheets && t.count === 0 && of(t, t.stylesheets), 0 < t.count ? function(l) {
      var e = setTimeout(function() {
        if (t.stylesheets && of(t, t.stylesheets), t.unsuspend) {
          var a = t.unsuspend;
          t.unsuspend = null, a();
        }
      }, 6e4);
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(e);
      };
    } : null;
  }
  function Yu() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) of(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Xu = null;
  function of(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Xu = /* @__PURE__ */ new Map(), l.forEach(zh, t), Xu = null, Yu.call(t));
  }
  function zh(t, l) {
    if (!(l.state.loading & 4)) {
      var e = Xu.get(t);
      if (e) var a = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), Xu.set(t, e);
        for (var n = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i);
        }
        a && e.set(null, a);
      }
      n = l.instance, i = n.getAttribute("data-precedence"), u = e.get(i) || a, u === a && e.set(null, n), e.set(i, n), this.count++, a = Yu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), l.state.loading |= 4;
    }
  }
  var Nn = {
    $$typeof: ft,
    Provider: null,
    Consumer: null,
    _currentValue: tt,
    _currentValue2: tt,
    _threadCount: 0
  };
  function Mh(t, l, e, a, n, u, i, c) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ui(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ui(0), this.hiddenUpdates = ui(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function vd(t, l, e, a, n, u, i, c, s, b, E, _) {
    return t = new Mh(
      t,
      l,
      e,
      i,
      c,
      s,
      b,
      _
    ), l = 1, u === !0 && (l |= 24), u = rl(3, null, null, l), t.current = u, u.stateNode = t, l = Vi(), l.refCount++, t.pooledCache = l, l.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: l
    }, Ji(u), t;
  }
  function gd(t) {
    return t ? (t = ia, t) : ia;
  }
  function bd(t, l, e, a, n, u) {
    n = gd(n), a.context === null ? a.context = n : a.pendingContext = n, a = ue(l), a.payload = { element: e }, u = u === void 0 ? null : u, u !== null && (a.callback = u), e = ie(t, a, l), e !== null && (vl(e, t, l), en(e, t, l));
  }
  function pd(t, l) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function rf(t, l) {
    pd(t, l), (t = t.alternate) && pd(t, l);
  }
  function Sd(t) {
    if (t.tag === 13) {
      var l = ua(t, 67108864);
      l !== null && vl(l, t, 67108864), rf(t, 67108864);
    }
  }
  var Qu = !0;
  function Nh(t, l, e, a) {
    var n = j.T;
    j.T = null;
    var u = T.p;
    try {
      T.p = 2, df(t, l, e, a);
    } finally {
      T.p = u, j.T = n;
    }
  }
  function _h(t, l, e, a) {
    var n = j.T;
    j.T = null;
    var u = T.p;
    try {
      T.p = 8, df(t, l, e, a);
    } finally {
      T.p = u, j.T = n;
    }
  }
  function df(t, l, e, a) {
    if (Qu) {
      var n = mf(a);
      if (n === null)
        Ic(
          t,
          l,
          a,
          Zu,
          e
        ), Ad(t, a);
      else if (jh(
        n,
        t,
        l,
        e,
        a
      ))
        a.stopPropagation();
      else if (Ad(t, a), l & 4 && -1 < Oh.indexOf(t)) {
        for (; n !== null; ) {
          var u = ke(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = Me(u.pendingLanes);
                  if (i !== 0) {
                    var c = u;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var s = 1 << 31 - sl(i);
                      c.entanglements[1] |= s, i &= ~s;
                    }
                    Hl(u), (ht & 6) === 0 && (Mu = Dl() + 500, Sn(0));
                  }
                }
                break;
              case 13:
                c = ua(u, 2), c !== null && vl(c, u, 2), _u(), rf(u, 2);
            }
          if (u = mf(a), u === null && Ic(
            t,
            l,
            a,
            Zu,
            e
          ), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else
        Ic(
          t,
          l,
          a,
          null,
          e
        );
    }
  }
  function mf(t) {
    return t = gi(t), hf(t);
  }
  var Zu = null;
  function hf(t) {
    if (Zu = null, t = Ke(t), t !== null) {
      var l = D(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (t = C(l), t !== null) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return Zu = t, null;
  }
  function xd(t) {
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
        switch (hm()) {
          case Uf:
            return 2;
          case Cf:
            return 8;
          case Cn:
          case ym:
            return 32;
          case Hf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var yf = !1, pe = null, Se = null, xe = null, _n = /* @__PURE__ */ new Map(), On = /* @__PURE__ */ new Map(), Ae = [], Oh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Ad(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        pe = null;
        break;
      case "dragenter":
      case "dragleave":
        Se = null;
        break;
      case "mouseover":
      case "mouseout":
        xe = null;
        break;
      case "pointerover":
      case "pointerout":
        _n.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        On.delete(l.pointerId);
    }
  }
  function jn(t, l, e, a, n, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: l,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, l !== null && (l = ke(l), l !== null && Sd(l)), t) : (t.eventSystemFlags |= a, l = t.targetContainers, n !== null && l.indexOf(n) === -1 && l.push(n), t);
  }
  function jh(t, l, e, a, n) {
    switch (l) {
      case "focusin":
        return pe = jn(
          pe,
          t,
          l,
          e,
          a,
          n
        ), !0;
      case "dragenter":
        return Se = jn(
          Se,
          t,
          l,
          e,
          a,
          n
        ), !0;
      case "mouseover":
        return xe = jn(
          xe,
          t,
          l,
          e,
          a,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return _n.set(
          u,
          jn(
            _n.get(u) || null,
            t,
            l,
            e,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, On.set(
          u,
          jn(
            On.get(u) || null,
            t,
            l,
            e,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function Td(t) {
    var l = Ke(t.target);
    if (l !== null) {
      var e = D(l);
      if (e !== null) {
        if (l = e.tag, l === 13) {
          if (l = C(e), l !== null) {
            t.blockedOn = l, Tm(t.priority, function() {
              if (e.tag === 13) {
                var a = yl();
                a = ii(a);
                var n = ua(e, a);
                n !== null && vl(n, e, a), rf(e, a);
              }
            });
            return;
          }
        } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Vu(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = mf(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var a = new e.constructor(
          e.type,
          e
        );
        vi = a, e.target.dispatchEvent(a), vi = null;
      } else
        return l = ke(e), l !== null && Sd(l), t.blockedOn = e, !1;
      l.shift();
    }
    return !0;
  }
  function Ed(t, l, e) {
    Vu(t) && e.delete(l);
  }
  function Dh() {
    yf = !1, pe !== null && Vu(pe) && (pe = null), Se !== null && Vu(Se) && (Se = null), xe !== null && Vu(xe) && (xe = null), _n.forEach(Ed), On.forEach(Ed);
  }
  function Lu(t, l) {
    t.blockedOn === l && (t.blockedOn = null, yf || (yf = !0, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      Dh
    )));
  }
  var Ku = null;
  function zd(t) {
    Ku !== t && (Ku = t, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      function() {
        Ku === t && (Ku = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l], a = t[l + 1], n = t[l + 2];
          if (typeof a != "function") {
            if (hf(a || e) === null)
              continue;
            break;
          }
          var u = ke(e);
          u !== null && (t.splice(l, 3), l -= 3, mc(
            u,
            {
              pending: !0,
              data: n,
              method: e.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function Dn(t) {
    function l(s) {
      return Lu(s, t);
    }
    pe !== null && Lu(pe, t), Se !== null && Lu(Se, t), xe !== null && Lu(xe, t), _n.forEach(l), On.forEach(l);
    for (var e = 0; e < Ae.length; e++) {
      var a = Ae[e];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Ae.length && (e = Ae[0], e.blockedOn === null); )
      Td(e), e.blockedOn === null && Ae.shift();
    if (e = (t.ownerDocument || t).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var n = e[a], u = e[a + 1], i = n[el] || null;
        if (typeof u == "function")
          i || zd(e);
        else if (i) {
          var c = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[el] || null)
              c = i.formAction;
            else if (hf(n) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3), a -= 3), zd(e);
        }
      }
  }
  function vf(t) {
    this._internalRoot = t;
  }
  ku.prototype.render = vf.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(r(409));
    var e = l.current, a = yl();
    bd(e, a, t, l, null, null);
  }, ku.prototype.unmount = vf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      bd(t.current, 2, null, t, null, null), _u(), l[Le] = null;
    }
  };
  function ku(t) {
    this._internalRoot = t;
  }
  ku.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = Xf();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < Ae.length && l !== 0 && l < Ae[e].priority; e++) ;
      Ae.splice(e, 0, t), e === 0 && Td(t);
    }
  };
  var Md = d.version;
  if (Md !== "19.1.0")
    throw Error(
      r(
        527,
        Md,
        "19.1.0"
      )
    );
  T.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = p(l), t = t !== null ? q(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Rh = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: j,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ju = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ju.isDisabled && Ju.supportsFiber)
      try {
        Ua = Ju.inject(
          Rh
        ), fl = Ju;
      } catch {
      }
  }
  return wn.createRoot = function(t, l) {
    if (!M(t)) throw Error(r(299));
    var e = !1, a = "", n = Qo, u = Zo, i = Vo, c = null;
    return l != null && (l.unstable_strictMode === !0 && (e = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (n = l.onUncaughtError), l.onCaughtError !== void 0 && (u = l.onCaughtError), l.onRecoverableError !== void 0 && (i = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (c = l.unstable_transitionCallbacks)), l = vd(
      t,
      1,
      !1,
      null,
      null,
      e,
      a,
      n,
      u,
      i,
      c,
      null
    ), t[Le] = l.current, Fc(t), new vf(l);
  }, wn.hydrateRoot = function(t, l, e) {
    if (!M(t)) throw Error(r(299));
    var a = !1, n = "", u = Qo, i = Zo, c = Vo, s = null, b = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (s = e.unstable_transitionCallbacks), e.formState !== void 0 && (b = e.formState)), l = vd(
      t,
      1,
      !0,
      l,
      e ?? null,
      a,
      n,
      u,
      i,
      c,
      s,
      b
    ), l.context = gd(null), e = l.current, a = yl(), a = ii(a), n = ue(a), n.callback = null, ie(e, n, a), e = a, l.current.lanes = e, Ha(l, e), Hl(l), t[Le] = l.current, Fc(t), new ku(l);
  }, wn.version = "19.1.0", wn;
}
var Hd;
function Qh() {
  if (Hd) return bf.exports;
  Hd = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (o) {
        console.error(o);
      }
  }
  return f(), bf.exports = Xh(), bf.exports;
}
var Zh = Qh();
const Vh = /* @__PURE__ */ Ld(Zh);
function Lh() {
  if (!document.getElementById("tailwind-cdn")) {
    const f = document.createElement("script");
    f.src = "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4", f.id = "tailwind-cdn", document.head.appendChild(f);
  }
}
const Kd = {
  NEXT_PUBLIC_LOGIN_CUSTOMER_API: "https://mimin-test.mimin.io/mimin-backend",
  NEXT_PUBLIC_CHATBOT_URL: "https://mimin-api.mimin.io/backend-gen-ai"
};
var xt = Df();
const jl = /* @__PURE__ */ Ld(xt), qd = (f) => {
  let o;
  const d = /* @__PURE__ */ new Set(), h = (p, q) => {
    const H = typeof p == "function" ? p(o) : p;
    if (!Object.is(H, o)) {
      const F = o;
      o = q ?? (typeof H != "object" || H === null) ? H : Object.assign({}, o, H), d.forEach((ot) => ot(o, F));
    }
  }, r = () => o, C = { setState: h, getState: r, getInitialState: () => z, subscribe: (p) => (d.add(p), () => d.delete(p)) }, z = o = f(h, r, C);
  return C;
}, Kh = (f) => f ? qd(f) : qd, kh = (f) => f;
function Jh(f, o = kh) {
  const d = jl.useSyncExternalStore(
    f.subscribe,
    () => o(f.getState()),
    () => o(f.getInitialState())
  );
  return jl.useDebugValue(d), d;
}
const Wh = (f) => {
  const o = Kh(f), d = (h) => Jh(o, h);
  return Object.assign(d, o), d;
}, kd = (f) => Wh;
function $h(f, o) {
  let d;
  try {
    d = f();
  } catch {
    return;
  }
  return {
    getItem: (r) => {
      var M;
      const D = (z) => z === null ? null : JSON.parse(z, void 0), C = (M = d.getItem(r)) != null ? M : null;
      return C instanceof Promise ? C.then(D) : D(C);
    },
    setItem: (r, M) => d.setItem(r, JSON.stringify(M, void 0)),
    removeItem: (r) => d.removeItem(r)
  };
}
const zf = (f) => (o) => {
  try {
    const d = f(o);
    return d instanceof Promise ? d : {
      then(h) {
        return zf(h)(d);
      },
      catch(h) {
        return this;
      }
    };
  } catch (d) {
    return {
      then(h) {
        return this;
      },
      catch(h) {
        return zf(h)(d);
      }
    };
  }
}, Fh = (f, o) => (d, h, r) => {
  let M = {
    storage: $h(() => localStorage),
    partialize: (L) => L,
    version: 0,
    merge: (L, At) => ({
      ...At,
      ...L
    }),
    ...o
  }, D = !1;
  const C = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set();
  let p = M.storage;
  if (!p)
    return f(
      (...L) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${M.name}', the given storage is currently unavailable.`
        ), d(...L);
      },
      h,
      r
    );
  const q = () => {
    const L = M.partialize({ ...h() });
    return p.setItem(M.name, {
      state: L,
      version: M.version
    });
  }, H = r.setState;
  r.setState = (L, At) => {
    H(L, At), q();
  };
  const F = f(
    (...L) => {
      d(...L), q();
    },
    h,
    r
  );
  r.getInitialState = () => F;
  let ot;
  const nt = () => {
    var L, At;
    if (!p) return;
    D = !1, C.forEach((rt) => {
      var Tt;
      return rt((Tt = h()) != null ? Tt : F);
    });
    const vt = ((At = M.onRehydrateStorage) == null ? void 0 : At.call(M, (L = h()) != null ? L : F)) || void 0;
    return zf(p.getItem.bind(p))(M.name).then((rt) => {
      if (rt)
        if (typeof rt.version == "number" && rt.version !== M.version) {
          if (M.migrate) {
            const Tt = M.migrate(
              rt.state,
              rt.version
            );
            return Tt instanceof Promise ? Tt.then((ft) => [!0, ft]) : [!0, Tt];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, rt.state];
      return [!1, void 0];
    }).then((rt) => {
      var Tt;
      const [ft, Dt] = rt;
      if (ot = M.merge(
        Dt,
        (Tt = h()) != null ? Tt : F
      ), d(ot, !0), ft)
        return q();
    }).then(() => {
      vt?.(ot, void 0), ot = h(), D = !0, z.forEach((rt) => rt(ot));
    }).catch((rt) => {
      vt?.(void 0, rt);
    });
  };
  return r.persist = {
    setOptions: (L) => {
      M = {
        ...M,
        ...L
      }, L.storage && (p = L.storage);
    },
    clearStorage: () => {
      p?.removeItem(M.name);
    },
    getOptions: () => M,
    rehydrate: () => nt(),
    hasHydrated: () => D,
    onHydrate: (L) => (C.add(L), () => {
      C.delete(L);
    }),
    onFinishHydration: (L) => (z.add(L), () => {
      z.delete(L);
    })
  }, M.skipHydration || nt(), ot || F;
}, Jd = Fh, li = kd()(
  Jd(
    (f) => ({
      config: null,
      signature: "",
      setConfig: (o) => f({ config: o }),
      setSignature: (o) => f({ signature: o })
    }),
    {
      name: "config-store"
    }
  )
), Wd = kd()(
  Jd(
    (f, o) => ({
      interactions: [],
      chatType: null,
      setInteractions: (d) => f({ interactions: d }),
      addInteraction: (d) => f((h) => ({
        interactions: [d, ...h.interactions]
      })),
      updateAiInteractionByIndex: (d, h) => {
        f((r) => ({
          interactions: r.interactions.map(
            (M, D) => D === d ? { ...M, ai: { ...M.ai, ...h } } : M
          )
        }));
      },
      setChatType: (d) => f({ chatType: d }),
      clearInteractions: () => f({ interactions: [] })
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
const Ih = (f) => f.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ph = (f) => f.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (o, d, h) => h ? h.toUpperCase() : d.toLowerCase()
), Bd = (f) => {
  const o = Ph(f);
  return o.charAt(0).toUpperCase() + o.slice(1);
}, $d = (...f) => f.filter((o, d, h) => !!o && o.trim() !== "" && h.indexOf(o) === d).join(" ").trim(), ty = (f) => {
  for (const o in f)
    if (o.startsWith("aria-") || o === "role" || o === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ly = {
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
const ey = xt.forwardRef(
  ({
    color: f = "currentColor",
    size: o = 24,
    strokeWidth: d = 2,
    absoluteStrokeWidth: h,
    className: r = "",
    children: M,
    iconNode: D,
    ...C
  }, z) => xt.createElement(
    "svg",
    {
      ref: z,
      ...ly,
      width: o,
      height: o,
      stroke: f,
      strokeWidth: h ? Number(d) * 24 / Number(o) : d,
      className: $d("lucide", r),
      ...!M && !ty(C) && { "aria-hidden": "true" },
      ...C
    },
    [
      ...D.map(([p, q]) => xt.createElement(p, q)),
      ...Array.isArray(M) ? M : [M]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Da = (f, o) => {
  const d = xt.forwardRef(
    ({ className: h, ...r }, M) => xt.createElement(ey, {
      ref: M,
      iconNode: o,
      className: $d(
        `lucide-${Ih(Bd(f))}`,
        `lucide-${f}`,
        h
      ),
      ...r
    })
  );
  return d.displayName = Bd(f), d;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ay = [
  ["path", { d: "M2 10v3", key: "1fnikh" }],
  ["path", { d: "M6 6v11", key: "11sgs0" }],
  ["path", { d: "M10 3v18", key: "yhl04a" }],
  ["path", { d: "M14 8v7", key: "3a1oy3" }],
  ["path", { d: "M18 5v13", key: "123xd1" }],
  ["path", { d: "M22 10v3", key: "154ddg" }]
], ny = Da("audio-lines", ay);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uy = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662", key: "154egf" }]
], iy = Da("circle-user", uy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cy = [
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
], Mf = Da("eye-off", cy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fy = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Nf = Da("eye", fy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sy = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Fd = Da("triangle-alert", sy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oy = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ry = Da("x", oy), dy = ({ onClickCreateAccount: f }) => {
  const [o, d] = xt.useState({
    email: "",
    password: "",
    rememberMe: !1
  }), [h, r] = xt.useState(null), [M, D] = xt.useState(!1), C = (z) => {
    d({ ...o, [z.target.name]: z.target.value });
  };
  return /* @__PURE__ */ x.jsxs("div", { className: "mt-10", children: [
    /* @__PURE__ */ x.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ x.jsx("h2", { className: "text-base font-bold", children: "Sign In" }),
      /* @__PURE__ */ x.jsx("p", { className: "text-sm text-gray-500", children: "Fill your information below to sign in to your account" })
    ] }),
    /* @__PURE__ */ x.jsxs("div", { className: "space-y-2 mt-6", children: [
      /* @__PURE__ */ x.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ x.jsx("label", { htmlFor: "email", className: "text-sm font-medium", children: "Email" }),
        /* @__PURE__ */ x.jsx(
          "input",
          {
            type: "text",
            name: "email",
            value: o.email,
            onChange: C,
            autoComplete: "off",
            className: "border border-[#0096A2] rounded-md p-2 focus:outline focus:outline-2 focus:outline-[#0096A2]"
          }
        )
      ] }),
      /* @__PURE__ */ x.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ x.jsx("label", { htmlFor: "password", className: "text-sm font-medium", children: "Password" }),
        /* @__PURE__ */ x.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ x.jsx(
            "input",
            {
              type: M ? "text" : "password",
              name: "password",
              value: o.password,
              onChange: C,
              autoComplete: "off",
              className: "border border-[#0096A2] rounded-md p-2 focus:outline focus:outline-2 focus:outline-[#0096A2] w-full"
            }
          ),
          /* @__PURE__ */ x.jsx(
            "button",
            {
              className: "absolute right-2.5 top-1/2 -translate-y-1/2",
              onClick: () => D((z) => !z),
              children: M ? /* @__PURE__ */ x.jsx(Nf, { className: "w-4 h-4" }) : /* @__PURE__ */ x.jsx(Mf, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ x.jsxs("div", { className: "flex items-start justify-between gap-3 py-2", children: [
        /* @__PURE__ */ x.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ x.jsx(
            "input",
            {
              type: "checkbox",
              name: "acceptTerms",
              id: "acceptTerms",
              checked: o.rememberMe,
              onChange: (z) => d({ ...o, rememberMe: z.target.checked }),
              className: "size-3.5 accent-[#0096A2]"
            }
          ),
          /* @__PURE__ */ x.jsx(
            "label",
            {
              className: "block text-xs text-gray-500",
              htmlFor: "acceptTerms",
              children: "Remember me"
            }
          )
        ] }),
        /* @__PURE__ */ x.jsx("button", { className: "block text-xs text-gray-500 cursor-pointer underline", children: "Forgot password?" })
      ] }),
      h && /* @__PURE__ */ x.jsxs("div", { className: "flex items-start gap-3 bg-[#F26075]/10 p-2 rounded-md mt-5 border border-[#F26075]/20", children: [
        /* @__PURE__ */ x.jsx("div", { className: "flex items-start justify-center pt-1", children: /* @__PURE__ */ x.jsx(Fd, { className: "w-4 h-4 text-[#F26075]" }) }),
        /* @__PURE__ */ x.jsx("p", { className: "text-[#F26075] text-sm", children: h })
      ] }),
      /* @__PURE__ */ x.jsxs("div", { className: "flex flex-col gap-1.5 pt-4 pb-6", children: [
        /* @__PURE__ */ x.jsx("button", { className: "bg-[#0096A2] text-white px-4 py-2 rounded-md w-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed", children: "Sign In" }),
        /* @__PURE__ */ x.jsxs("div", { className: "text-xs text-center text-gray-500", children: [
          "Don't have an account?",
          " ",
          /* @__PURE__ */ x.jsx(
            "button",
            {
              onClick: f,
              className: "inline text-[#0096A2] underline cursor-pointer",
              children: "Create an account"
            }
          )
        ] })
      ] })
    ] })
  ] });
}, my = ({ onClickSignin: f }) => {
  const [o, d] = xt.useState({
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: !1
  }), [h, r] = xt.useState(!1), [M, D] = xt.useState(!1), [C, z] = xt.useState(null), p = (q) => {
    d({ ...o, [q.target.name]: q.target.value });
  };
  return /* @__PURE__ */ x.jsxs("div", { className: "mt-10", children: [
    /* @__PURE__ */ x.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ x.jsx("h2", { className: "text-base font-bold", children: "Create Account" }),
      /* @__PURE__ */ x.jsx("p", { className: "text-sm text-gray-500", children: "Fill your information below to create your account" })
    ] }),
    /* @__PURE__ */ x.jsxs("div", { className: "space-y-2 mt-6", children: [
      /* @__PURE__ */ x.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ x.jsx("label", { htmlFor: "companyName", className: "text-sm font-medium", children: "Company Name" }),
        /* @__PURE__ */ x.jsx(
          "input",
          {
            type: "text",
            name: "companyName",
            value: o.companyName,
            onChange: p,
            autoComplete: "off",
            className: "border border-[#0096A2] rounded-md p-2 focus:outline focus:outline-2 focus:outline-[#0096A2]"
          }
        )
      ] }),
      /* @__PURE__ */ x.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ x.jsx("label", { htmlFor: "email", className: "text-sm font-medium", children: "Email" }),
        /* @__PURE__ */ x.jsx(
          "input",
          {
            type: "text",
            name: "email",
            autoComplete: "off",
            value: o.email,
            onChange: p,
            className: "border border-[#0096A2] rounded-md p-2 focus:outline focus:outline-2 focus:outline-[#0096A2]"
          }
        )
      ] }),
      /* @__PURE__ */ x.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ x.jsx("label", { htmlFor: "password", className: "text-sm font-medium", children: "Password" }),
        /* @__PURE__ */ x.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ x.jsx(
            "input",
            {
              type: h ? "text" : "password",
              name: "password",
              value: o.password,
              onChange: p,
              autoComplete: "off",
              className: "border border-[#0096A2] rounded-md p-2 focus:outline focus:outline-2 focus:outline-[#0096A2] w-full"
            }
          ),
          /* @__PURE__ */ x.jsx(
            "button",
            {
              className: "absolute right-2.5 top-1/2 -translate-y-1/2",
              onClick: () => r((q) => !q),
              children: h ? /* @__PURE__ */ x.jsx(Nf, { className: "w-4 h-4" }) : /* @__PURE__ */ x.jsx(Mf, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ x.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ x.jsx("label", { htmlFor: "confirmPassword", className: "text-sm font-medium", children: "Confirm Password" }),
        /* @__PURE__ */ x.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ x.jsx(
            "input",
            {
              type: M ? "text" : "password",
              name: "confirmPassword",
              value: o.confirmPassword,
              onChange: p,
              autoComplete: "off",
              className: "border border-[#0096A2] rounded-md p-2 focus:outline focus:outline-2 focus:outline-[#0096A2] w-full"
            }
          ),
          /* @__PURE__ */ x.jsx(
            "button",
            {
              className: "absolute right-2.5 top-1/2 -translate-y-1/2",
              onClick: () => D((q) => !q),
              children: M ? /* @__PURE__ */ x.jsx(Nf, { className: "w-4 h-4" }) : /* @__PURE__ */ x.jsx(Mf, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ x.jsxs("div", { className: "flex items-start gap-3 py-2", children: [
        /* @__PURE__ */ x.jsx(
          "input",
          {
            type: "checkbox",
            name: "acceptTerms",
            id: "acceptTerms",
            checked: o.acceptTerms,
            onChange: (q) => d({ ...o, acceptTerms: q.target.checked }),
            className: "mt-1 size-3.5 accent-[#0096A2]"
          }
        ),
        /* @__PURE__ */ x.jsxs("label", { className: "block text-xs text-gray-500", htmlFor: "acceptTerms", children: [
          "By creating an account, you agree to our",
          " ",
          /* @__PURE__ */ x.jsx("a", { href: "#", className: "text-[#0096A2]", children: "Terms of Service" })
        ] })
      ] }),
      C && /* @__PURE__ */ x.jsxs("div", { className: "flex items-start gap-3 bg-[#F26075]/10 p-2 rounded-md mt-5 border border-[#F26075]/20", children: [
        /* @__PURE__ */ x.jsx("div", { className: "flex items-start justify-center pt-1", children: /* @__PURE__ */ x.jsx(Fd, { className: "w-4 h-4 text-[#F26075]" }) }),
        /* @__PURE__ */ x.jsx("p", { className: "text-[#F26075] text-sm", children: C })
      ] }),
      /* @__PURE__ */ x.jsxs("div", { className: "flex flex-col gap-1 pb-6", children: [
        /* @__PURE__ */ x.jsx(
          "button",
          {
            className: "bg-[#0096A2] text-white px-4 py-2 rounded-md w-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
            disabled: !o.companyName || !o.email || !o.password || !o.confirmPassword || !o.acceptTerms,
            children: "Create Account"
          }
        ),
        /* @__PURE__ */ x.jsxs("div", { className: "text-xs text-center text-gray-500", children: [
          "Already have an account?",
          " ",
          /* @__PURE__ */ x.jsx(
            "button",
            {
              onClick: f,
              className: "inline text-[#0096A2] underline cursor-pointer",
              children: "Sign in"
            }
          )
        ] })
      ] })
    ] })
  ] });
}, hy = () => {
  const [f, o] = xt.useState("landing-section");
  return /* @__PURE__ */ x.jsxs("div", { className: "p-4 h-full overflow-y-auto", children: [
    /* @__PURE__ */ x.jsx("div", { className: "flex justify-center items-center w-full h-auto", children: /* @__PURE__ */ x.jsx(
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
    f === "landing-section" && /* @__PURE__ */ x.jsxs("div", { className: "text-center mt-10", children: [
      /* @__PURE__ */ x.jsx("h1", { className: "text-[#0096A2] text-base font-bold", children: "Explore the MIMIN AI Agent" }),
      /* @__PURE__ */ x.jsx("p", { className: "text-gray-500 text-sm", children: "Sign in and start chatting with your smart AI assistant ready to help anytime, day or night!" }),
      /* @__PURE__ */ x.jsxs("div", { className: "flex flex-col gap-3 mt-6", children: [
        /* @__PURE__ */ x.jsx(
          "button",
          {
            className: "bg-[#0096A2] w-full border border-[#0096A2] text-white px-4 py-2 rounded-md cursor-pointer",
            onClick: () => o("sign-in"),
            children: "Sign In"
          }
        ),
        /* @__PURE__ */ x.jsx(
          "button",
          {
            className: "bg-white w-full border border-[#0096A2] text-[#0096A2] px-4 py-2 rounded-md cursor-pointer hover:bg-[#0096A2] hover:text-white transition-all duration-300",
            onClick: () => o("create-account"),
            children: "Create Account"
          }
        )
      ] })
    ] }),
    f === "sign-in" && /* @__PURE__ */ x.jsx(
      dy,
      {
        onClickCreateAccount: () => o("create-account")
      }
    ),
    f === "create-account" && /* @__PURE__ */ x.jsx(my, { onClickSignin: () => o("sign-in") })
  ] });
};
var Id = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Gd = jl.createContext && /* @__PURE__ */ jl.createContext(Id), yy = ["attr", "size", "title"];
function vy(f, o) {
  if (f == null) return {};
  var d = gy(f, o), h, r;
  if (Object.getOwnPropertySymbols) {
    var M = Object.getOwnPropertySymbols(f);
    for (r = 0; r < M.length; r++)
      h = M[r], !(o.indexOf(h) >= 0) && Object.prototype.propertyIsEnumerable.call(f, h) && (d[h] = f[h]);
  }
  return d;
}
function gy(f, o) {
  if (f == null) return {};
  var d = {};
  for (var h in f)
    if (Object.prototype.hasOwnProperty.call(f, h)) {
      if (o.indexOf(h) >= 0) continue;
      d[h] = f[h];
    }
  return d;
}
function Pu() {
  return Pu = Object.assign ? Object.assign.bind() : function(f) {
    for (var o = 1; o < arguments.length; o++) {
      var d = arguments[o];
      for (var h in d)
        Object.prototype.hasOwnProperty.call(d, h) && (f[h] = d[h]);
    }
    return f;
  }, Pu.apply(this, arguments);
}
function Yd(f, o) {
  var d = Object.keys(f);
  if (Object.getOwnPropertySymbols) {
    var h = Object.getOwnPropertySymbols(f);
    o && (h = h.filter(function(r) {
      return Object.getOwnPropertyDescriptor(f, r).enumerable;
    })), d.push.apply(d, h);
  }
  return d;
}
function ti(f) {
  for (var o = 1; o < arguments.length; o++) {
    var d = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Yd(Object(d), !0).forEach(function(h) {
      by(f, h, d[h]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(d)) : Yd(Object(d)).forEach(function(h) {
      Object.defineProperty(f, h, Object.getOwnPropertyDescriptor(d, h));
    });
  }
  return f;
}
function by(f, o, d) {
  return o = py(o), o in f ? Object.defineProperty(f, o, { value: d, enumerable: !0, configurable: !0, writable: !0 }) : f[o] = d, f;
}
function py(f) {
  var o = Sy(f, "string");
  return typeof o == "symbol" ? o : o + "";
}
function Sy(f, o) {
  if (typeof f != "object" || !f) return f;
  var d = f[Symbol.toPrimitive];
  if (d !== void 0) {
    var h = d.call(f, o);
    if (typeof h != "object") return h;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(f);
}
function Pd(f) {
  return f && f.map((o, d) => /* @__PURE__ */ jl.createElement(o.tag, ti({
    key: d
  }, o.attr), Pd(o.child)));
}
function Rf(f) {
  return (o) => /* @__PURE__ */ jl.createElement(xy, Pu({
    attr: ti({}, f.attr)
  }, o), Pd(f.child));
}
function xy(f) {
  var o = (d) => {
    var {
      attr: h,
      size: r,
      title: M
    } = f, D = vy(f, yy), C = r || d.size || "1em", z;
    return d.className && (z = d.className), f.className && (z = (z ? z + " " : "") + f.className), /* @__PURE__ */ jl.createElement("svg", Pu({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, d.attr, h, D, {
      className: z,
      style: ti(ti({
        color: f.color || d.color
      }, d.style), f.style),
      height: C,
      width: C,
      xmlns: "http://www.w3.org/2000/svg"
    }), M && /* @__PURE__ */ jl.createElement("title", null, M), f.children);
  };
  return Gd !== void 0 ? /* @__PURE__ */ jl.createElement(Gd.Consumer, null, (d) => o(d)) : o(Id);
}
function Ay(f) {
  return Rf({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M6.758 8.758 5.344 7.344a8.048 8.048 0 0 0-1.841 2.859l1.873.701a6.048 6.048 0 0 1 1.382-2.146zM19 12.999a7.935 7.935 0 0 0-2.344-5.655A7.917 7.917 0 0 0 12 5.069V2L7 6l5 4V7.089a5.944 5.944 0 0 1 3.242 1.669A5.956 5.956 0 0 1 17 13v.002c0 .33-.033.655-.086.977-.007.043-.011.088-.019.131a6.053 6.053 0 0 1-1.138 2.536c-.16.209-.331.412-.516.597a5.954 5.954 0 0 1-.728.613 5.906 5.906 0 0 1-2.277 1.015c-.142.03-.285.05-.43.069-.062.009-.122.021-.184.027a6.104 6.104 0 0 1-1.898-.103L9.3 20.819a8.087 8.087 0 0 0 2.534.136c.069-.007.138-.021.207-.03.205-.026.409-.056.61-.098l.053-.009-.001-.005a7.877 7.877 0 0 0 2.136-.795l.001.001.028-.019a7.906 7.906 0 0 0 1.01-.67c.27-.209.532-.43.777-.675.248-.247.47-.513.681-.785.021-.028.049-.053.07-.081l-.006-.004a7.899 7.899 0 0 0 1.093-1.997l.008.003c.029-.078.05-.158.076-.237.037-.11.075-.221.107-.333.04-.14.073-.281.105-.423.022-.099.048-.195.066-.295.032-.171.056-.344.076-.516.01-.076.023-.15.03-.227.023-.249.037-.5.037-.753.002-.002.002-.004.002-.008zM6.197 16.597l-1.6 1.201a8.045 8.045 0 0 0 2.569 2.225l.961-1.754a6.018 6.018 0 0 1-1.93-1.672zM5 13c0-.145.005-.287.015-.429l-1.994-.143a7.977 7.977 0 0 0 .483 3.372l1.873-.701A5.975 5.975 0 0 1 5 13z" }, child: [] }] })(f);
}
function tm(f) {
  return Rf({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" }, child: [] }] })(f);
}
const Ty = ({
  onToggleCallWindow: f,
  onToggleChatWindow: o
}) => {
  const { config: d } = li(), { setChatType: h, clearInteractions: r } = Wd();
  return /* @__PURE__ */ x.jsxs(
    "div",
    {
      className: "flex items-center justify-between gap-2 px-4 py-2",
      style: {
        backgroundColor: d?.theme?.chatWindow?.backgroundColor || "#0096a2"
      },
      children: [
        /* @__PURE__ */ x.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ x.jsx("div", { className: "flex items-center justify-center w-9 h-9 rounded-full bg-white", children: /* @__PURE__ */ x.jsx(
            "img",
            {
              src: d?.theme?.chatWindow?.titleAvatarSrc || "https://res.cloudinary.com/dctqloe37/image/upload/v1752147771/agent_ohofti.jpg",
              alt: "ICON",
              className: "w-6 h-6 rounded-full"
            }
          ) }),
          /* @__PURE__ */ x.jsx(
            "h3",
            {
              className: "text-base font-bold",
              style: { color: d?.theme?.chatWindow?.titleColor || "#ffffff" },
              children: d?.theme?.chatWindow?.title || "Mimin AI"
            }
          )
        ] }),
        /* @__PURE__ */ x.jsxs("div", { className: "flex items-center gap-4", children: [
          d?.theme?.chatWindow?.isActiveCall && /* @__PURE__ */ x.jsxs(
            "button",
            {
              style: {
                color: d?.theme?.chatWindow?.titleColor || "#ffffff"
              },
              onClick: f,
              className: "relative cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
              children: [
                /* @__PURE__ */ x.jsx(
                  tm,
                  {
                    className: "w-5 h-5",
                    color: d?.theme?.chatWindow?.titleColor || "#ffffff"
                  }
                ),
                /* @__PURE__ */ x.jsx("div", { className: "absolute -top-0 -right-0", children: /* @__PURE__ */ x.jsx("p", { className: "text-[8px] font-medium", children: "AI" }) })
              ]
            }
          ),
          /* @__PURE__ */ x.jsx(
            "button",
            {
              className: "cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
              style: { color: d?.theme?.chatWindow?.titleColor || "#ffffff" },
              onClick: () => {
                r(), h(null);
              },
              children: /* @__PURE__ */ x.jsx(
                Ay,
                {
                  className: "w-5 h-5",
                  color: d?.theme?.chatWindow?.titleColor || "#ffffff"
                }
              )
            }
          ),
          /* @__PURE__ */ x.jsx(
            "button",
            {
              className: "cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
              style: { color: d?.theme?.chatWindow?.titleColor || "#ffffff" },
              onClick: o,
              children: /* @__PURE__ */ x.jsx(
                ry,
                {
                  className: "w-5 h-5",
                  color: d?.theme?.chatWindow?.titleColor || "#ffffff"
                }
              )
            }
          )
        ] })
      ]
    }
  );
};
function lm(f) {
  var o, d, h = "";
  if (typeof f == "string" || typeof f == "number") h += f;
  else if (typeof f == "object") if (Array.isArray(f)) {
    var r = f.length;
    for (o = 0; o < r; o++) f[o] && (d = lm(f[o])) && (h && (h += " "), h += d);
  } else for (d in f) f[d] && (h && (h += " "), h += d);
  return h;
}
function Ey() {
  for (var f, o, d = 0, h = "", r = arguments.length; d < r; d++) (f = arguments[d]) && (o = lm(f)) && (h && (h += " "), h += o);
  return h;
}
const wf = "-", zy = (f) => {
  const o = Ny(f), {
    conflictingClassGroups: d,
    conflictingClassGroupModifiers: h
  } = f;
  return {
    getClassGroupId: (D) => {
      const C = D.split(wf);
      return C[0] === "" && C.length !== 1 && C.shift(), em(C, o) || My(D);
    },
    getConflictingClassGroupIds: (D, C) => {
      const z = d[D] || [];
      return C && h[D] ? [...z, ...h[D]] : z;
    }
  };
}, em = (f, o) => {
  if (f.length === 0)
    return o.classGroupId;
  const d = f[0], h = o.nextPart.get(d), r = h ? em(f.slice(1), h) : void 0;
  if (r)
    return r;
  if (o.validators.length === 0)
    return;
  const M = f.join(wf);
  return o.validators.find(({
    validator: D
  }) => D(M))?.classGroupId;
}, Xd = /^\[(.+)\]$/, My = (f) => {
  if (Xd.test(f)) {
    const o = Xd.exec(f)[1], d = o?.substring(0, o.indexOf(":"));
    if (d)
      return "arbitrary.." + d;
  }
}, Ny = (f) => {
  const {
    theme: o,
    classGroups: d
  } = f, h = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const r in d)
    _f(d[r], h, r, o);
  return h;
}, _f = (f, o, d, h) => {
  f.forEach((r) => {
    if (typeof r == "string") {
      const M = r === "" ? o : Qd(o, r);
      M.classGroupId = d;
      return;
    }
    if (typeof r == "function") {
      if (_y(r)) {
        _f(r(h), o, d, h);
        return;
      }
      o.validators.push({
        validator: r,
        classGroupId: d
      });
      return;
    }
    Object.entries(r).forEach(([M, D]) => {
      _f(D, Qd(o, M), d, h);
    });
  });
}, Qd = (f, o) => {
  let d = f;
  return o.split(wf).forEach((h) => {
    d.nextPart.has(h) || d.nextPart.set(h, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), d = d.nextPart.get(h);
  }), d;
}, _y = (f) => f.isThemeGetter, Oy = (f) => {
  if (f < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let o = 0, d = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map();
  const r = (M, D) => {
    d.set(M, D), o++, o > f && (o = 0, h = d, d = /* @__PURE__ */ new Map());
  };
  return {
    get(M) {
      let D = d.get(M);
      if (D !== void 0)
        return D;
      if ((D = h.get(M)) !== void 0)
        return r(M, D), D;
    },
    set(M, D) {
      d.has(M) ? d.set(M, D) : r(M, D);
    }
  };
}, Of = "!", jf = ":", jy = jf.length, Dy = (f) => {
  const {
    prefix: o,
    experimentalParseClassName: d
  } = f;
  let h = (r) => {
    const M = [];
    let D = 0, C = 0, z = 0, p;
    for (let nt = 0; nt < r.length; nt++) {
      let L = r[nt];
      if (D === 0 && C === 0) {
        if (L === jf) {
          M.push(r.slice(z, nt)), z = nt + jy;
          continue;
        }
        if (L === "/") {
          p = nt;
          continue;
        }
      }
      L === "[" ? D++ : L === "]" ? D-- : L === "(" ? C++ : L === ")" && C--;
    }
    const q = M.length === 0 ? r : r.substring(z), H = Ry(q), F = H !== q, ot = p && p > z ? p - z : void 0;
    return {
      modifiers: M,
      hasImportantModifier: F,
      baseClassName: H,
      maybePostfixModifierPosition: ot
    };
  };
  if (o) {
    const r = o + jf, M = h;
    h = (D) => D.startsWith(r) ? M(D.substring(r.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: D,
      maybePostfixModifierPosition: void 0
    };
  }
  if (d) {
    const r = h;
    h = (M) => d({
      className: M,
      parseClassName: r
    });
  }
  return h;
}, Ry = (f) => f.endsWith(Of) ? f.substring(0, f.length - 1) : f.startsWith(Of) ? f.substring(1) : f, wy = (f) => {
  const o = Object.fromEntries(f.orderSensitiveModifiers.map((h) => [h, !0]));
  return (h) => {
    if (h.length <= 1)
      return h;
    const r = [];
    let M = [];
    return h.forEach((D) => {
      D[0] === "[" || o[D] ? (r.push(...M.sort(), D), M = []) : M.push(D);
    }), r.push(...M.sort()), r;
  };
}, Uy = (f) => ({
  cache: Oy(f.cacheSize),
  parseClassName: Dy(f),
  sortModifiers: wy(f),
  ...zy(f)
}), Cy = /\s+/, Hy = (f, o) => {
  const {
    parseClassName: d,
    getClassGroupId: h,
    getConflictingClassGroupIds: r,
    sortModifiers: M
  } = o, D = [], C = f.trim().split(Cy);
  let z = "";
  for (let p = C.length - 1; p >= 0; p -= 1) {
    const q = C[p], {
      isExternal: H,
      modifiers: F,
      hasImportantModifier: ot,
      baseClassName: nt,
      maybePostfixModifierPosition: L
    } = d(q);
    if (H) {
      z = q + (z.length > 0 ? " " + z : z);
      continue;
    }
    let At = !!L, vt = h(At ? nt.substring(0, L) : nt);
    if (!vt) {
      if (!At) {
        z = q + (z.length > 0 ? " " + z : z);
        continue;
      }
      if (vt = h(nt), !vt) {
        z = q + (z.length > 0 ? " " + z : z);
        continue;
      }
      At = !1;
    }
    const rt = M(F).join(":"), Tt = ot ? rt + Of : rt, ft = Tt + vt;
    if (D.includes(ft))
      continue;
    D.push(ft);
    const Dt = r(vt, At);
    for (let W = 0; W < Dt.length; ++W) {
      const Rt = Dt[W];
      D.push(Tt + Rt);
    }
    z = q + (z.length > 0 ? " " + z : z);
  }
  return z;
};
function qy() {
  let f = 0, o, d, h = "";
  for (; f < arguments.length; )
    (o = arguments[f++]) && (d = am(o)) && (h && (h += " "), h += d);
  return h;
}
const am = (f) => {
  if (typeof f == "string")
    return f;
  let o, d = "";
  for (let h = 0; h < f.length; h++)
    f[h] && (o = am(f[h])) && (d && (d += " "), d += o);
  return d;
};
function By(f, ...o) {
  let d, h, r, M = D;
  function D(z) {
    const p = o.reduce((q, H) => H(q), f());
    return d = Uy(p), h = d.cache.get, r = d.cache.set, M = C, C(z);
  }
  function C(z) {
    const p = h(z);
    if (p)
      return p;
    const q = Hy(z, d);
    return r(z, q), q;
  }
  return function() {
    return M(qy.apply(null, arguments));
  };
}
const Xt = (f) => {
  const o = (d) => d[f] || [];
  return o.isThemeGetter = !0, o;
}, nm = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, um = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Gy = /^\d+\/\d+$/, Yy = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Xy = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Qy = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Zy = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Vy = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ja = (f) => Gy.test(f), P = (f) => !!f && !Number.isNaN(Number(f)), Ee = (f) => !!f && Number.isInteger(Number(f)), Tf = (f) => f.endsWith("%") && P(f.slice(0, -1)), Pl = (f) => Yy.test(f), Ly = () => !0, Ky = (f) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Xy.test(f) && !Qy.test(f)
), im = () => !1, ky = (f) => Zy.test(f), Jy = (f) => Vy.test(f), Wy = (f) => !Y(f) && !X(f), $y = (f) => Ra(f, sm, im), Y = (f) => nm.test(f), Ve = (f) => Ra(f, om, Ky), Ef = (f) => Ra(f, lv, P), Zd = (f) => Ra(f, cm, im), Fy = (f) => Ra(f, fm, Jy), Wu = (f) => Ra(f, rm, ky), X = (f) => um.test(f), Un = (f) => wa(f, om), Iy = (f) => wa(f, ev), Vd = (f) => wa(f, cm), Py = (f) => wa(f, sm), tv = (f) => wa(f, fm), $u = (f) => wa(f, rm, !0), Ra = (f, o, d) => {
  const h = nm.exec(f);
  return h ? h[1] ? o(h[1]) : d(h[2]) : !1;
}, wa = (f, o, d = !1) => {
  const h = um.exec(f);
  return h ? h[1] ? o(h[1]) : d : !1;
}, cm = (f) => f === "position" || f === "percentage", fm = (f) => f === "image" || f === "url", sm = (f) => f === "length" || f === "size" || f === "bg-size", om = (f) => f === "length", lv = (f) => f === "number", ev = (f) => f === "family-name", rm = (f) => f === "shadow", av = () => {
  const f = Xt("color"), o = Xt("font"), d = Xt("text"), h = Xt("font-weight"), r = Xt("tracking"), M = Xt("leading"), D = Xt("breakpoint"), C = Xt("container"), z = Xt("spacing"), p = Xt("radius"), q = Xt("shadow"), H = Xt("inset-shadow"), F = Xt("text-shadow"), ot = Xt("drop-shadow"), nt = Xt("blur"), L = Xt("perspective"), At = Xt("aspect"), vt = Xt("ease"), rt = Xt("animate"), Tt = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ft = () => [
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
  ], Dt = () => [...ft(), X, Y], W = () => ["auto", "hidden", "clip", "visible", "scroll"], Rt = () => ["auto", "contain", "none"], V = () => [X, Y, z], Et = () => [ja, "full", "auto", ...V()], Wt = () => [Ee, "none", "subgrid", X, Y], gl = () => ["auto", {
    span: ["full", Ee, X, Y]
  }, Ee, X, Y], Bt = () => [Ee, "auto", X, Y], Mt = () => ["auto", "min", "max", "fr", X, Y], tl = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Ct = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], R = () => ["auto", ...V()], j = () => [ja, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...V()], T = () => [f, X, Y], tt = () => [...ft(), Vd, Zd, {
    position: [X, Y]
  }], dt = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], y = () => ["auto", "cover", "contain", Py, $y, {
    size: [X, Y]
  }], O = () => [Tf, Un, Ve], U = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    X,
    Y
  ], w = () => ["", P, Un, Ve], B = () => ["solid", "dashed", "dotted", "double"], ut = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Q = () => [P, Tf, Vd, Zd], $t = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    nt,
    X,
    Y
  ], mt = () => ["none", P, X, Y], cl = () => ["none", P, X, Y], ze = () => [P, X, Y], ql = () => [ja, "full", ...V()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Pl],
      breakpoint: [Pl],
      color: [Ly],
      container: [Pl],
      "drop-shadow": [Pl],
      ease: ["in", "out", "in-out"],
      font: [Wy],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Pl],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Pl],
      shadow: [Pl],
      spacing: ["px", P],
      text: [Pl],
      "text-shadow": [Pl],
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
        aspect: ["auto", "square", ja, Y, X, At]
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
        columns: [P, Y, X, C]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Tt()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Tt()
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
        object: Dt()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: W()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": W()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": W()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Rt()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Rt()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Rt()
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
        inset: Et()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": Et()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": Et()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: Et()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: Et()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: Et()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: Et()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: Et()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: Et()
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
        z: [Ee, "auto", X, Y]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ja, "full", "auto", C, ...V()]
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
        flex: [P, ja, "auto", "initial", "none", Y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", P, X, Y]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", P, X, Y]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ee, "first", "last", "none", X, Y]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": Wt()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: gl()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Bt()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Bt()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": Wt()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: gl()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Bt()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Bt()
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
        "auto-cols": Mt()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Mt()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: V()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": V()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": V()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...tl(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...Ct(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...Ct()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...tl()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...Ct(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...Ct(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": tl()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...Ct(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...Ct()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: V()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: V()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: V()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: V()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: V()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: V()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: V()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: V()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: V()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: R()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: R()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: R()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: R()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: R()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: R()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: R()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: R()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: R()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": V()
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
        "space-y": V()
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
        size: j()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [C, "screen", ...j()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          C,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...j()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          C,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [D]
          },
          ...j()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...j()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...j()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...j()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", d, Un, Ve]
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
        font: [h, X, Ef]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Tf, Y]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Iy, Y, o]
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
        tracking: [r, X, Y]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [P, "none", X, Ef]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          M,
          ...V()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", X, Y]
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
        list: ["disc", "decimal", "none", X, Y]
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
        placeholder: T()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: T()
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
        decoration: [...B(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [P, "from-font", "auto", X, Ve]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: T()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [P, "auto", X, Y]
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
        indent: V()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", X, Y]
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
        content: ["none", X, Y]
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
        bg: tt()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: dt()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: y()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Ee, X, Y],
          radial: ["", X, Y],
          conic: [Ee, X, Y]
        }, tv, Fy]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: T()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: O()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: O()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: O()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: T()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: T()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: T()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: U()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": U()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": U()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": U()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": U()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": U()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": U()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": U()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": U()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": U()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": U()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": U()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": U()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": U()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": U()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: w()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": w()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": w()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": w()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": w()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": w()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": w()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": w()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": w()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": w()
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
        "divide-y": w()
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
        border: [...B(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...B(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: T()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": T()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": T()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": T()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": T()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": T()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": T()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": T()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": T()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: T()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...B(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [P, X, Y]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", P, Un, Ve]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: T()
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
          q,
          $u,
          Wu
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: T()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", H, $u, Wu]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": T()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: w()
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
        ring: T()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [P, Ve]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": T()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": w()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": T()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", F, $u, Wu]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": T()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [P, X, Y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ut(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ut()
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
        "mask-linear": [P]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": Q()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": Q()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": T()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": T()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": Q()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": Q()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": T()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": T()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": Q()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": Q()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": T()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": T()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": Q()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": Q()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": T()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": T()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": Q()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": Q()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": T()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": T()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": Q()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": Q()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": T()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": T()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": Q()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": Q()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": T()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": T()
      }],
      "mask-image-radial": [{
        "mask-radial": [X, Y]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": Q()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": Q()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": T()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": T()
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
        "mask-radial-at": ft()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [P]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": Q()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": Q()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": T()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": T()
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
        mask: tt()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: dt()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: y()
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
        mask: ["none", X, Y]
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
          X,
          Y
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: $t()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [P, X, Y]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [P, X, Y]
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
          ot,
          $u,
          Wu
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": T()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", P, X, Y]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [P, X, Y]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", P, X, Y]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [P, X, Y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", P, X, Y]
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
          X,
          Y
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": $t()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [P, X, Y]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [P, X, Y]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", P, X, Y]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [P, X, Y]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", P, X, Y]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [P, X, Y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [P, X, Y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", P, X, Y]
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
        "border-spacing": V()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": V()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": V()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", X, Y]
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
        duration: [P, "initial", X, Y]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", vt, X, Y]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [P, X, Y]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", rt, X, Y]
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
        perspective: [L, X, Y]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": Dt()
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
        scale: cl()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": cl()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": cl()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": cl()
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
        skew: ze()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ze()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ze()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [X, Y, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: Dt()
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
        translate: ql()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ql()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ql()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ql()
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
        accent: T()
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
        caret: T()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", X, Y]
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
        "scroll-m": V()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": V()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": V()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": V()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": V()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": V()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": V()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": V()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": V()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": V()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": V()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": V()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": V()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": V()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": V()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": V()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": V()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": V()
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
        "will-change": ["auto", "scroll", "contents", "transform", X, Y]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...T()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [P, Un, Ve, Ef]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...T()]
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
}, nv = /* @__PURE__ */ By(av);
function Fu(...f) {
  return nv(Ey(f));
}
const Iu = ({ message: f, isUser: o = !1, thinking: d = !1 }) => {
  const { config: h } = li(), r = (M, D) => M.replace(
    /<a href="([^"]+)"[^>]*>(.*?)<\/a>/g,
    `<a href="$1" target="_blank" style="color: ${D ? "#ffffff" : "#1565c0"}; text-decoration-line: underline; word-break: break-word; white-space: normal;" rel="noopener noreferrer">$2</a>`
  ).replace(
    /\*(.*?)\*/g,
    "<strong>$1</strong>"
  ).replace(
    /\[(.*?)\]\((https?:\/\/[^\s]+)\)/g,
    `<a href="$2" target="_blank" style="color: ${D ? "#ffffff" : "#1565c0"}; text-decoration-line: underline; word-break: break-word; white-space: normal;" rel="noopener noreferrer">$1</a>`
  ).replace(
    new RegExp('(?<!href=")https?:\\/\\/[^\\s"]+', "g"),
    `<a href="$&" target="_blank" style="color: ${D ? "#ffffff" : "#1565c0"}; text-decoration-line: underline; word-break: break-word; white-space: normal;" rel="noopener noreferrer">$&</a>`
  ).replace(/\n/g, "<br>");
  return d ? /* @__PURE__ */ x.jsx(
    "div",
    {
      className: Fu(
        "relative flex w-fit max-w-[90%] border rounded-t-2xl py-3 px-3.5 rounded-br-2xl bg-white text-[#0096a2] border-[#0096a2] mr-auto justify-start"
      ),
      style: {
        backgroundColor: h?.theme?.chatWindow?.botMessage?.backgroundColor || "#ffffff",
        borderColor: h?.theme?.chatWindow?.botMessage?.borderColor || "#0096a2"
      },
      children: /* @__PURE__ */ x.jsx(
        "div",
        {
          className: "text-sm",
          style: {
            color: h?.theme?.chatWindow?.botMessage?.textColor || "#0096a2"
          },
          children: /* @__PURE__ */ x.jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ x.jsx("div", { className: "text-base flex gap-2 items-end", children: Array.from({ length: 3 }).map((M, D) => /* @__PURE__ */ x.jsx(
            "span",
            {
              className: "block w-2 h-2 rounded-full bg-[#0096a2] animate-bounce",
              style: { animationDelay: `${250 * D}ms` }
            },
            `loading-circle-${D}`
          )) }) })
        }
      )
    }
  ) : f ? /* @__PURE__ */ x.jsxs(
    "div",
    {
      className: Fu(
        "relative flex w-fit max-w-[90%] border rounded-t-3xl py-3 px-3.5",
        o ? "rounded-bl-3xl bg-white text-[#0096a2] border-[#0096a2] ml-auto justify-end" : "rounded-br-3xl bg-white text-[#0096a2] border-[#0096a2] mr-auto justify-start"
      ),
      style: {
        backgroundColor: o ? h?.theme?.chatWindow?.userMessage?.backgroundColor || "#0096a2" : h?.theme?.chatWindow?.botMessage?.backgroundColor || "#ffffff",
        borderColor: o ? h?.theme?.chatWindow?.userMessage?.borderColor || "#0096a2" : h?.theme?.chatWindow?.botMessage?.borderColor || "#0096a2"
      },
      children: [
        /* @__PURE__ */ x.jsxs(
          "div",
          {
            className: Fu(
              "flex items-end gap-3",
              o ? "flex-row-reverse" : "flex-row"
            ),
            children: [
              /* @__PURE__ */ x.jsx("div", { className: "flex items-end justify-center w-3 h-3", children: o ? /* @__PURE__ */ x.jsx(
                iy,
                {
                  width: 100,
                  height: 100,
                  className: "w-3 h-3 aspect-square text-white"
                }
              ) : /* @__PURE__ */ x.jsx(
                "img",
                {
                  src: h?.theme?.button?.iconSrc || "https://appstaging.mimin.io/favicon.ico",
                  alt: " ",
                  width: 100,
                  height: 100,
                  className: "w-3 h-3 aspect-square"
                }
              ) }),
              /* @__PURE__ */ x.jsx(
                "div",
                {
                  className: "text-sm flex-1 pb-2",
                  style: {
                    color: o ? h?.theme?.chatWindow?.userMessage?.textColor || "#ffffff" : h?.theme?.chatWindow?.botMessage?.textColor || "#0096a2"
                  },
                  dangerouslySetInnerHTML: {
                    __html: r(f, o)
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ x.jsx(
          "div",
          {
            className: Fu(
              "absolute top-full mt-0.5 w-fit",
              o ? "right-0" : "left-0"
            ),
            children: /* @__PURE__ */ x.jsx("p", { className: "text-[10px] font-light text-gray-500", children: "02.30 PM" })
          }
        )
      ]
    }
  ) : (console.error("message is null!"), null);
}, uv = ({ messages: f, currentResponseMsg: o, loading: d, fetching: h }) => {
  const r = jl.useRef(null);
  return jl.useEffect(() => {
    setTimeout(() => {
      console.log("scroll to bottom ------>>>>>>"), r.current?.scrollIntoView({
        behavior: "smooth",
        block: "end"
      });
    }, 200);
  }, [o, f.length]), /* @__PURE__ */ x.jsxs(
    "div",
    {
      className: "relative flex-1 h-full px-4 py-6 max-h-full overflow-y-scroll",
      style: { overflowAnchor: "none" },
      children: [
        /* @__PURE__ */ x.jsxs("div", { className: "flex flex-col gap-9", children: [
          /* @__PURE__ */ x.jsx("div", { className: "flex flex-col-reverse gap-9", children: f.map((M, D) => /* @__PURE__ */ x.jsxs("div", { className: "flex flex-col gap-6", children: [
            M.human && M.human.content && /* @__PURE__ */ x.jsx(Iu, { message: M.human.content, isUser: !0 }),
            M.ai && M.ai.content && /* @__PURE__ */ x.jsx(Iu, { message: M.ai.content, isUser: !1 })
          ] }, D)) }),
          !h && o && f.length > 0 && !f[0]?.ai && /* @__PURE__ */ x.jsx(Iu, { message: o, isUser: !1 }),
          d && !o && /* @__PURE__ */ x.jsx(Iu, { thinking: !0 })
        ] }),
        /* @__PURE__ */ x.jsx("div", { ref: r, id: "bottom-ref", className: "pb-9" })
      ]
    }
  );
};
function iv(f) {
  return Rf({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M3 12.9999H9V10.9999H3V1.84558C3 1.56944 3.22386 1.34558 3.5 1.34558C3.58425 1.34558 3.66714 1.36687 3.74096 1.40747L22.2034 11.5618C22.4454 11.6949 22.5337 11.9989 22.4006 12.2409C22.3549 12.324 22.2865 12.3924 22.2034 12.4381L3.74096 22.5924C3.499 22.7255 3.19497 22.6372 3.06189 22.3953C3.02129 22.3214 3 22.2386 3 22.1543V12.9999Z" }, child: [] }] })(f);
}
const cv = ({
  onSendMessage: f,
  loading: o,
  fetching: d
}) => {
  const [h, r] = xt.useState(""), { config: M } = li(), D = xt.useRef(null), C = () => {
    const p = D.current;
    p && (p.style.height = "auto", p.style.height = p.scrollHeight + "px");
  }, z = () => {
    !d && !o && h.length > 0 && (f(h), r(""));
  };
  return /* @__PURE__ */ x.jsxs(
    "div",
    {
      className: "px-2 pt-2 pb-1 overflow-hidden max-h-full",
      style: {
        backgroundColor: M?.theme?.chatWindow?.textInput?.backgroundColor || "#0096a2",
        overflowAnchor: "none"
      },
      children: [
        /* @__PURE__ */ x.jsxs(
          "form",
          {
            onSubmit: (p) => {
              p.preventDefault(), p.stopPropagation(), z();
            },
            className: "relative flex items-center gap-2",
            children: [
              /* @__PURE__ */ x.jsx(
                "textarea",
                {
                  className: "flex-1 border rounded-md p-2 max-h-[80px] bg-white pr-10 focus:outline focus:outline-[#ffa100] resize-none",
                  style: {
                    borderColor: M?.theme?.chatWindow?.textInput?.borderColor || "#ffffff"
                  },
                  placeholder: M?.theme?.chatWindow?.textInput?.placeholder || "Ketik pertanyaan Anda...",
                  rows: 1,
                  value: h,
                  onChange: (p) => r(p.target.value),
                  onInput: C,
                  ref: D
                }
              ),
              /* @__PURE__ */ x.jsx(
                "button",
                {
                  className: "absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                  disabled: o || h.trim().length === 0,
                  children: /* @__PURE__ */ x.jsx(
                    iv,
                    {
                      className: "w-4 h-4 text-[#0096a2]",
                      color: M?.theme?.chatWindow?.textInput?.sendButtonColor || "#0096a2"
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ x.jsxs("p", { className: "text-white text-[10px] font-medium text-center mt-1", children: [
          "Powered by",
          " ",
          /* @__PURE__ */ x.jsx("a", { href: "https://mimin.io", className: "underline", children: "Mimin" })
        ] })
      ]
    }
  );
}, fv = ({
  isVisible: f,
  onToggleCallWindow: o
  // onToggleMuteCall,
  // onToggleSpeakerCall,
}) => {
  const [d, h] = xt.useState(!1), [r, M] = xt.useState(!0);
  return f ? /* @__PURE__ */ x.jsx("div", { className: "absolute inset-0 bg-white z-10", children: /* @__PURE__ */ x.jsx("div", { className: "h-full px-6 py-10 overflow-y-auto", children: /* @__PURE__ */ x.jsxs("div", { className: "flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ x.jsx("h4", { className: "text-[#0096a2] text-xl font-bold mb-6", children: "IN CALL" }),
    /* @__PURE__ */ x.jsx("div", { className: "flex items-center justify-center p-4 rounded-full w-[204px] h-[204px] bg-gradient-to-br from-[#0096a2]/30 to-[#f26075]/30", children: /* @__PURE__ */ x.jsx("div", { className: "flex items-center justify-center p-4 rounded-full w-full h-full bg-gradient-to-br from-[#0096a2]/40 to-[#f26075]/40", children: /* @__PURE__ */ x.jsx("div", { className: "flex items-center justify-center p-4 rounded-full w-full h-full bg-gradient-to-br from-[#0096a2]/50 to-[#f26075]/50", children: /* @__PURE__ */ x.jsx(ny, { className: "w-14 h-14 text-white/80" }) }) }) }),
    /* @__PURE__ */ x.jsx("p", { className: "text-[#0096a2] text-base font-bold mt-5", children: "MIMIN AI" }),
    /* @__PURE__ */ x.jsx("p", { className: "text-[#0096a2] text-sm font-medium mt-0", children: "09:00" }),
    /* @__PURE__ */ x.jsx("div", { className: "h-[1.5px] w-full bg-gray-200 my-6" }),
    /* @__PURE__ */ x.jsx("div", { className: "grid grid-cols-2 gap-4 w-full", children: /* @__PURE__ */ x.jsx("div", { className: "col-span-2 flex items-center justify-center", children: /* @__PURE__ */ x.jsx(
      "button",
      {
        type: "button",
        className: "cursor-pointer bg-gradient-to-br from-[#0096a2]/30 to-[#f26075]/30 rounded-full w-[60px] h-[60px] p-4 aspect-square flex items-center justify-center",
        onClick: o,
        children: /* @__PURE__ */ x.jsx(tm, { className: "w-full h-full text-[#f26075]/90 rotate-90" })
      }
    ) }) })
  ] }) }) }) : null;
}, sv = {
  limit: 10,
  page: 0,
  pages: 0,
  size: 10
}, ov = ({
  config: f,
  signature: o
}) => {
  const [d, h] = xt.useState(!1), [r, M] = xt.useState(!1), [D, C] = xt.useState(""), [z, p] = xt.useState(""), [q, H] = xt.useState(sv), { setConfig: F, setSignature: ot } = li(), [nt, L] = xt.useState(!1), [At, vt] = xt.useState(!1), [rt, Tt] = xt.useState(!1), {
    interactions: ft,
    addInteraction: Dt,
    updateAiInteractionByIndex: W,
    chatType: Rt,
    setChatType: V
  } = Wd(), Et = () => {
    L(!nt);
  }, Wt = () => {
    vt(!At);
  }, gl = async () => {
    try {
      const Ct = (await (await fetch("https://api.ipify.org?format=json")).json()).ip, R = navigator.userAgent;
      return { ip: Ct, userAgent: R, isError: !1 };
    } catch (Mt) {
      return { isError: !0, errorMessage: Mt.message };
    }
  }, Bt = async (Mt) => {
    const { isError: tl, errorMessage: Ct, ip: R, userAgent: j } = await gl();
    if (tl) {
      console.error(Ct);
      return;
    }
    h(!0);
    const T = {
      name: j,
      phone: R,
      message_id: crypto.randomUUID(),
      message: Mt,
      media_type: "text",
      media: "",
      type: Rt || ""
    };
    try {
      const tt = await fetch(
        `${Kd.NEXT_PUBLIC_CHATBOT_URL}/api/chat/new-website/${f?.credentials?.username}`,
        {
          headers: {
            Signature: o,
            Accept: "text/event-stream",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(T),
          method: "POST"
        }
      );
      if (!tt.ok) {
        console.error("Failed to send message");
        return;
      }
      const dt = tt.body.pipeThrough(new TextDecoderStream()).getReader();
      for (; ; ) {
        const { value: y, done: O } = await dt.read();
        if (O) break;
        const U = '{"event": ';
        y.split(`data: ${U}`).filter(Boolean).map(
          (B) => JSON.parse(`${U}${B}`.replace(/\n\n$/gm, ""))
        ).filter((B) => B.event === "token" ? !!B.data : !0).forEach(async (B) => {
          if (B.event === "payload") {
            const ut = {
              additional_kwargs: {},
              content: B.message,
              example: !1
            };
            W(0, ut), Rt || V(B.type), C(B.chat_history_id);
          } else B.event === "token" && p((ut) => ut + B.data);
        });
      }
    } catch {
      console.error(
        "We apologize, a system error has occurred. Please try again!"
      );
    } finally {
      h(!1);
    }
  };
  return xt.useEffect(() => {
    F(f || null), ot(o || "");
  }, []), /* @__PURE__ */ x.jsxs("div", { className: "fixed bottom-6 right-6 z-[9999]", children: [
    /* @__PURE__ */ x.jsxs(
      "button",
      {
        className: "flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#0096a2] shadow-md transition-all duration-300 ease-in-out cursor-pointer",
        style: {
          backgroundColor: nt ? "#0096a2" : f?.theme?.button?.backgroundColor || "#ffffff",
          color: nt ? "#ffffff" : f?.theme?.button?.textColor || "#0096a2"
        },
        onClick: Et,
        children: [
          /* @__PURE__ */ x.jsx(
            "img",
            {
              src: f?.theme?.button?.iconSrc || "https://appstaging.mimin.io/favicon.ico",
              alt: "ICON",
              className: "w-4 h-auto"
            }
          ),
          /* @__PURE__ */ x.jsx("span", { className: "text-sm font-bold", children: f?.theme?.button?.tooltip || "Ask Mimin" })
        ]
      }
    ),
    nt && /* @__PURE__ */ x.jsx("div", { className: "absolute bottom-full mb-4 right-0", children: /* @__PURE__ */ x.jsxs(
      "div",
      {
        className: "relative flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden",
        style: {
          width: f?.theme?.chatWindow?.width || "330px",
          height: f?.theme?.chatWindow?.height || "600px"
        },
        children: [
          (f?.theme?.chatWindow.needAuthentication || !1) && !rt && /* @__PURE__ */ x.jsx(hy, {}),
          (rt || !f?.theme?.chatWindow.needAuthentication) && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
            /* @__PURE__ */ x.jsx(
              Ty,
              {
                onToggleCallWindow: Wt,
                onToggleChatWindow: Et
              }
            ),
            /* @__PURE__ */ x.jsx(
              uv,
              {
                messages: ft,
                currentResponseMsg: z,
                loading: d,
                fetching: r
              }
            ),
            /* @__PURE__ */ x.jsx(
              cv,
              {
                onSendMessage: (Mt) => {
                  p(""), Mt = Mt.trim().replaceAll(/\n\n+/g, `

`);
                  const tl = {
                    human: {
                      content: Mt,
                      additional_kwargs: {},
                      example: !1
                    },
                    date: /* @__PURE__ */ new Date(),
                    id: crypto.randomUUID()
                  };
                  Dt(tl), Bt(Mt);
                },
                loading: d,
                fetching: r
              }
            ),
            /* @__PURE__ */ x.jsx(
              fv,
              {
                isVisible: At,
                onToggleCallWindow: Wt
              }
            )
          ] })
        ]
      }
    ) })
  ] });
}, rv = {
  init: async function(f = {}) {
    try {
      if (Lh(), !f.credentials)
        throw new Error("credentials are required");
      if (!f.credentials.username)
        throw new Error("username is required");
      if (!f.credentials.apiKey)
        throw new Error("apiKey is required");
      const o = await fetch(
        `${Kd.NEXT_PUBLIC_LOGIN_CUSTOMER_API}/api/v1/chatbotdata/create-signature/${f.credentials.username}`,
        {
          method: "POST",
          headers: {
            "x-api-key": f.credentials.apiKey
          }
        }
      ), { signature: d } = await o.json();
      if (!d)
        throw new Error("Failed to get signature");
      const h = document.getElementById("mimin-widget-container");
      h && h.remove();
      const r = document.createElement("div");
      r.id = "mimin-widget-container", document.body.appendChild(r), Vh.createRoot(r).render(
        /* @__PURE__ */ x.jsx(x.Fragment, { children: /* @__PURE__ */ x.jsx(
          ov,
          {
            config: {
              ...f,
              credentials: {
                ...f.credentials
              }
            },
            signature: d
          }
        ) })
      );
    } catch (o) {
      console.error("Failed to initialize Mimin Chatbot React:", o);
    }
  }
};
window.Chatbot = rv;
export {
  rv as Chatbot
};
//# sourceMappingURL=chat-widget.js.map
