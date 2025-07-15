function dm(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Or = { exports: {} }, qn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xd;
function ag() {
  if (Xd) return qn;
  Xd = 1;
  var i = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function o(s, d, v) {
    var M = null;
    if (v !== void 0 && (M = "" + v), d.key !== void 0 && (M = "" + d.key), "key" in d) {
      v = {};
      for (var R in d)
        R !== "key" && (v[R] = d[R]);
    } else v = d;
    return d = v.ref, {
      $$typeof: i,
      type: s,
      key: M,
      ref: d !== void 0 ? d : null,
      props: v
    };
  }
  return qn.Fragment = r, qn.jsx = o, qn.jsxs = o, qn;
}
var Qd;
function ng() {
  return Qd || (Qd = 1, Or.exports = ag()), Or.exports;
}
var S = ng(), Nr = { exports: {} }, Yn = {}, zr = { exports: {} }, _r = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kd;
function ug() {
  return kd || (kd = 1, function(i) {
    function r(j, D) {
      var E = j.length;
      j.push(D);
      t: for (; 0 < E; ) {
        var et = E - 1 >>> 1, dt = j[et];
        if (0 < d(dt, D))
          j[et] = D, j[E] = dt, E = et;
        else break t;
      }
    }
    function o(j) {
      return j.length === 0 ? null : j[0];
    }
    function s(j) {
      if (j.length === 0) return null;
      var D = j[0], E = j.pop();
      if (E !== D) {
        j[0] = E;
        t: for (var et = 0, dt = j.length, g = dt >>> 1; et < g; ) {
          var _ = 2 * (et + 1) - 1, H = j[_], C = _ + 1, k = j[C];
          if (0 > d(H, E))
            C < dt && 0 > d(k, H) ? (j[et] = k, j[C] = E, et = C) : (j[et] = H, j[_] = E, et = _);
          else if (C < dt && 0 > d(k, E))
            j[et] = k, j[C] = E, et = C;
          else break t;
        }
      }
      return D;
    }
    function d(j, D) {
      var E = j.sortIndex - D.sortIndex;
      return E !== 0 ? E : j.id - D.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var v = performance;
      i.unstable_now = function() {
        return v.now();
      };
    } else {
      var M = Date, R = M.now();
      i.unstable_now = function() {
        return M.now() - R;
      };
    }
    var w = [], p = [], q = 1, U = null, $ = 3, ft = !1, ut = !1, V = !1, vt = !1, bt = typeof setTimeout == "function" ? setTimeout : null, st = typeof clearTimeout == "function" ? clearTimeout : null, Tt = typeof setImmediate < "u" ? setImmediate : null;
    function it(j) {
      for (var D = o(p); D !== null; ) {
        if (D.callback === null) s(p);
        else if (D.startTime <= j)
          s(p), D.sortIndex = D.expirationTime, r(w, D);
        else break;
        D = o(p);
      }
    }
    function Ct(j) {
      if (V = !1, it(j), !ut)
        if (o(w) !== null)
          ut = !0, W || (W = !0, Ht());
        else {
          var D = o(p);
          D !== null && Et(Ct, D.startTime - j);
        }
    }
    var W = !1, Ut = -1, Z = 5, Mt = -1;
    function te() {
      return vt ? !0 : !(i.unstable_now() - Mt < Z);
    }
    function ce() {
      if (vt = !1, W) {
        var j = i.unstable_now();
        Mt = j;
        var D = !0;
        try {
          t: {
            ut = !1, V && (V = !1, st(Ut), Ut = -1), ft = !0;
            var E = $;
            try {
              e: {
                for (it(j), U = o(w); U !== null && !(U.expirationTime > j && te()); ) {
                  var et = U.callback;
                  if (typeof et == "function") {
                    U.callback = null, $ = U.priorityLevel;
                    var dt = et(
                      U.expirationTime <= j
                    );
                    if (j = i.unstable_now(), typeof dt == "function") {
                      U.callback = dt, it(j), D = !0;
                      break e;
                    }
                    U === o(w) && s(w), it(j);
                  } else s(w);
                  U = o(w);
                }
                if (U !== null) D = !0;
                else {
                  var g = o(p);
                  g !== null && Et(
                    Ct,
                    g.startTime - j
                  ), D = !1;
                }
              }
              break t;
            } finally {
              U = null, $ = E, ft = !1;
            }
            D = void 0;
          }
        } finally {
          D ? Ht() : W = !1;
        }
      }
    }
    var Ht;
    if (typeof Tt == "function")
      Ht = function() {
        Tt(ce);
      };
    else if (typeof MessageChannel < "u") {
      var Kt = new MessageChannel(), be = Kt.port2;
      Kt.port1.onmessage = ce, Ht = function() {
        be.postMessage(null);
      };
    } else
      Ht = function() {
        bt(ce, 0);
      };
    function Et(j, D) {
      Ut = bt(function() {
        j(i.unstable_now());
      }, D);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(j) {
      j.callback = null;
    }, i.unstable_forceFrameRate = function(j) {
      0 > j || 125 < j ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Z = 0 < j ? Math.floor(1e3 / j) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return $;
    }, i.unstable_next = function(j) {
      switch ($) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = $;
      }
      var E = $;
      $ = D;
      try {
        return j();
      } finally {
        $ = E;
      }
    }, i.unstable_requestPaint = function() {
      vt = !0;
    }, i.unstable_runWithPriority = function(j, D) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var E = $;
      $ = j;
      try {
        return D();
      } finally {
        $ = E;
      }
    }, i.unstable_scheduleCallback = function(j, D, E) {
      var et = i.unstable_now();
      switch (typeof E == "object" && E !== null ? (E = E.delay, E = typeof E == "number" && 0 < E ? et + E : et) : E = et, j) {
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
      return dt = E + dt, j = {
        id: q++,
        callback: D,
        priorityLevel: j,
        startTime: E,
        expirationTime: dt,
        sortIndex: -1
      }, E > et ? (j.sortIndex = E, r(p, j), o(w) === null && j === o(p) && (V ? (st(Ut), Ut = -1) : V = !0, Et(Ct, E - et))) : (j.sortIndex = dt, r(w, j), ut || ft || (ut = !0, W || (W = !0, Ht()))), j;
    }, i.unstable_shouldYield = te, i.unstable_wrapCallback = function(j) {
      var D = $;
      return function() {
        var E = $;
        $ = D;
        try {
          return j.apply(this, arguments);
        } finally {
          $ = E;
        }
      };
    };
  }(_r)), _r;
}
var Zd;
function ig() {
  return Zd || (Zd = 1, zr.exports = ug()), zr.exports;
}
var Dr = { exports: {} }, F = {}, Vd;
function cg() {
  if (Vd) return F;
  Vd = 1;
  var i = {};
  /**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var r = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), M = Symbol.for("react.consumer"), R = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), q = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), $ = Symbol.iterator;
  function ft(g) {
    return g === null || typeof g != "object" ? null : (g = $ && g[$] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var ut = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, V = Object.assign, vt = {};
  function bt(g, _, H) {
    this.props = g, this.context = _, this.refs = vt, this.updater = H || ut;
  }
  bt.prototype.isReactComponent = {}, bt.prototype.setState = function(g, _) {
    if (typeof g != "object" && typeof g != "function" && g != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, g, _, "setState");
  }, bt.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function st() {
  }
  st.prototype = bt.prototype;
  function Tt(g, _, H) {
    this.props = g, this.context = _, this.refs = vt, this.updater = H || ut;
  }
  var it = Tt.prototype = new st();
  it.constructor = Tt, V(it, bt.prototype), it.isPureReactComponent = !0;
  var Ct = Array.isArray, W = { H: null, A: null, T: null, S: null, V: null }, Ut = Object.prototype.hasOwnProperty;
  function Z(g, _, H, C, k, rt) {
    return H = rt.ref, {
      $$typeof: r,
      type: g,
      key: _,
      ref: H !== void 0 ? H : null,
      props: rt
    };
  }
  function Mt(g, _) {
    return Z(
      g.type,
      _,
      void 0,
      void 0,
      void 0,
      g.props
    );
  }
  function te(g) {
    return typeof g == "object" && g !== null && g.$$typeof === r;
  }
  function ce(g) {
    var _ = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(H) {
      return _[H];
    });
  }
  var Ht = /\/+/g;
  function Kt(g, _) {
    return typeof g == "object" && g !== null && g.key != null ? ce("" + g.key) : _.toString(36);
  }
  function be() {
  }
  function Et(g) {
    switch (g.status) {
      case "fulfilled":
        return g.value;
      case "rejected":
        throw g.reason;
      default:
        switch (typeof g.status == "string" ? g.then(be, be) : (g.status = "pending", g.then(
          function(_) {
            g.status === "pending" && (g.status = "fulfilled", g.value = _);
          },
          function(_) {
            g.status === "pending" && (g.status = "rejected", g.reason = _);
          }
        )), g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
        }
    }
    throw g;
  }
  function j(g, _, H, C, k) {
    var rt = typeof g;
    (rt === "undefined" || rt === "boolean") && (g = null);
    var Y = !1;
    if (g === null) Y = !0;
    else
      switch (rt) {
        case "bigint":
        case "string":
        case "number":
          Y = !0;
          break;
        case "object":
          switch (g.$$typeof) {
            case r:
            case o:
              Y = !0;
              break;
            case U:
              return Y = g._init, j(
                Y(g._payload),
                _,
                H,
                C,
                k
              );
          }
      }
    if (Y)
      return k = k(g), Y = C === "" ? "." + Kt(g, 0) : C, Ct(k) ? (H = "", Y != null && (H = Y.replace(Ht, "$&/") + "/"), j(k, _, H, "", function(re) {
        return re;
      })) : k != null && (te(k) && (k = Mt(
        k,
        H + (k.key == null || g && g.key === k.key ? "" : ("" + k.key).replace(
          Ht,
          "$&/"
        ) + "/") + Y
      )), _.push(k)), 1;
    Y = 0;
    var qt = C === "" ? "." : C + ":";
    if (Ct(g))
      for (var mt = 0; mt < g.length; mt++)
        C = g[mt], rt = qt + Kt(C, mt), Y += j(
          C,
          _,
          H,
          rt,
          k
        );
    else if (mt = ft(g), typeof mt == "function")
      for (g = mt.call(g), mt = 0; !(C = g.next()).done; )
        C = C.value, rt = qt + Kt(C, mt++), Y += j(
          C,
          _,
          H,
          rt,
          k
        );
    else if (rt === "object") {
      if (typeof g.then == "function")
        return j(
          Et(g),
          _,
          H,
          C,
          k
        );
      throw _ = String(g), Error(
        "Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Y;
  }
  function D(g, _, H) {
    if (g == null) return g;
    var C = [], k = 0;
    return j(g, C, "", "", function(rt) {
      return _.call(H, rt, k++);
    }), C;
  }
  function E(g) {
    if (g._status === -1) {
      var _ = g._result;
      _ = _(), _.then(
        function(H) {
          (g._status === 0 || g._status === -1) && (g._status = 1, g._result = H);
        },
        function(H) {
          (g._status === 0 || g._status === -1) && (g._status = 2, g._result = H);
        }
      ), g._status === -1 && (g._status = 0, g._result = _);
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var et = typeof reportError == "function" ? reportError : function(g) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var _ = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
        error: g
      });
      if (!window.dispatchEvent(_)) return;
    } else if (typeof i == "object" && typeof i.emit == "function") {
      i.emit("uncaughtException", g);
      return;
    }
    console.error(g);
  };
  function dt() {
  }
  return F.Children = {
    map: D,
    forEach: function(g, _, H) {
      D(
        g,
        function() {
          _.apply(this, arguments);
        },
        H
      );
    },
    count: function(g) {
      var _ = 0;
      return D(g, function() {
        _++;
      }), _;
    },
    toArray: function(g) {
      return D(g, function(_) {
        return _;
      }) || [];
    },
    only: function(g) {
      if (!te(g))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return g;
    }
  }, F.Component = bt, F.Fragment = s, F.Profiler = v, F.PureComponent = Tt, F.StrictMode = d, F.Suspense = p, F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, F.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(g) {
      return W.H.useMemoCache(g);
    }
  }, F.cache = function(g) {
    return function() {
      return g.apply(null, arguments);
    };
  }, F.cloneElement = function(g, _, H) {
    if (g == null)
      throw Error(
        "The argument must be a React element, but you passed " + g + "."
      );
    var C = V({}, g.props), k = g.key, rt = void 0;
    if (_ != null)
      for (Y in _.ref !== void 0 && (rt = void 0), _.key !== void 0 && (k = "" + _.key), _)
        !Ut.call(_, Y) || Y === "key" || Y === "__self" || Y === "__source" || Y === "ref" && _.ref === void 0 || (C[Y] = _[Y]);
    var Y = arguments.length - 2;
    if (Y === 1) C.children = H;
    else if (1 < Y) {
      for (var qt = Array(Y), mt = 0; mt < Y; mt++)
        qt[mt] = arguments[mt + 2];
      C.children = qt;
    }
    return Z(g.type, k, void 0, void 0, rt, C);
  }, F.createContext = function(g) {
    return g = {
      $$typeof: R,
      _currentValue: g,
      _currentValue2: g,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, g.Provider = g, g.Consumer = {
      $$typeof: M,
      _context: g
    }, g;
  }, F.createElement = function(g, _, H) {
    var C, k = {}, rt = null;
    if (_ != null)
      for (C in _.key !== void 0 && (rt = "" + _.key), _)
        Ut.call(_, C) && C !== "key" && C !== "__self" && C !== "__source" && (k[C] = _[C]);
    var Y = arguments.length - 2;
    if (Y === 1) k.children = H;
    else if (1 < Y) {
      for (var qt = Array(Y), mt = 0; mt < Y; mt++)
        qt[mt] = arguments[mt + 2];
      k.children = qt;
    }
    if (g && g.defaultProps)
      for (C in Y = g.defaultProps, Y)
        k[C] === void 0 && (k[C] = Y[C]);
    return Z(g, rt, void 0, void 0, null, k);
  }, F.createRef = function() {
    return { current: null };
  }, F.forwardRef = function(g) {
    return { $$typeof: w, render: g };
  }, F.isValidElement = te, F.lazy = function(g) {
    return {
      $$typeof: U,
      _payload: { _status: -1, _result: g },
      _init: E
    };
  }, F.memo = function(g, _) {
    return {
      $$typeof: q,
      type: g,
      compare: _ === void 0 ? null : _
    };
  }, F.startTransition = function(g) {
    var _ = W.T, H = {};
    W.T = H;
    try {
      var C = g(), k = W.S;
      k !== null && k(H, C), typeof C == "object" && C !== null && typeof C.then == "function" && C.then(dt, et);
    } catch (rt) {
      et(rt);
    } finally {
      W.T = _;
    }
  }, F.unstable_useCacheRefresh = function() {
    return W.H.useCacheRefresh();
  }, F.use = function(g) {
    return W.H.use(g);
  }, F.useActionState = function(g, _, H) {
    return W.H.useActionState(g, _, H);
  }, F.useCallback = function(g, _) {
    return W.H.useCallback(g, _);
  }, F.useContext = function(g) {
    return W.H.useContext(g);
  }, F.useDebugValue = function() {
  }, F.useDeferredValue = function(g, _) {
    return W.H.useDeferredValue(g, _);
  }, F.useEffect = function(g, _, H) {
    var C = W.H;
    if (typeof H == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return C.useEffect(g, _);
  }, F.useId = function() {
    return W.H.useId();
  }, F.useImperativeHandle = function(g, _, H) {
    return W.H.useImperativeHandle(g, _, H);
  }, F.useInsertionEffect = function(g, _) {
    return W.H.useInsertionEffect(g, _);
  }, F.useLayoutEffect = function(g, _) {
    return W.H.useLayoutEffect(g, _);
  }, F.useMemo = function(g, _) {
    return W.H.useMemo(g, _);
  }, F.useOptimistic = function(g, _) {
    return W.H.useOptimistic(g, _);
  }, F.useReducer = function(g, _, H) {
    return W.H.useReducer(g, _, H);
  }, F.useRef = function(g) {
    return W.H.useRef(g);
  }, F.useState = function(g) {
    return W.H.useState(g);
  }, F.useSyncExternalStore = function(g, _, H) {
    return W.H.useSyncExternalStore(
      g,
      _,
      H
    );
  }, F.useTransition = function() {
    return W.H.useTransition();
  }, F.version = "19.1.0", F;
}
var Ld;
function Qr() {
  return Ld || (Ld = 1, Dr.exports = cg()), Dr.exports;
}
var jr = { exports: {} }, It = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kd;
function rg() {
  if (Kd) return It;
  Kd = 1;
  var i = Qr();
  function r(w) {
    var p = "https://react.dev/errors/" + w;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var q = 2; q < arguments.length; q++)
        p += "&args[]=" + encodeURIComponent(arguments[q]);
    }
    return "Minified React error #" + w + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var s = {
    d: {
      f: o,
      r: function() {
        throw Error(r(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, d = Symbol.for("react.portal");
  function v(w, p, q) {
    var U = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: U == null ? null : "" + U,
      children: w,
      containerInfo: p,
      implementation: q
    };
  }
  var M = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function R(w, p) {
    if (w === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return It.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, It.createPortal = function(w, p) {
    var q = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(r(299));
    return v(w, p, null, q);
  }, It.flushSync = function(w) {
    var p = M.T, q = s.p;
    try {
      if (M.T = null, s.p = 2, w) return w();
    } finally {
      M.T = p, s.p = q, s.d.f();
    }
  }, It.preconnect = function(w, p) {
    typeof w == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, s.d.C(w, p));
  }, It.prefetchDNS = function(w) {
    typeof w == "string" && s.d.D(w);
  }, It.preinit = function(w, p) {
    if (typeof w == "string" && p && typeof p.as == "string") {
      var q = p.as, U = R(q, p.crossOrigin), $ = typeof p.integrity == "string" ? p.integrity : void 0, ft = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      q === "style" ? s.d.S(
        w,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: U,
          integrity: $,
          fetchPriority: ft
        }
      ) : q === "script" && s.d.X(w, {
        crossOrigin: U,
        integrity: $,
        fetchPriority: ft,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, It.preinitModule = function(w, p) {
    if (typeof w == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var q = R(
            p.as,
            p.crossOrigin
          );
          s.d.M(w, {
            crossOrigin: q,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && s.d.M(w);
  }, It.preload = function(w, p) {
    if (typeof w == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var q = p.as, U = R(q, p.crossOrigin);
      s.d.L(w, q, {
        crossOrigin: U,
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
  }, It.preloadModule = function(w, p) {
    if (typeof w == "string")
      if (p) {
        var q = R(p.as, p.crossOrigin);
        s.d.m(w, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: q,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else s.d.m(w);
  }, It.requestFormReset = function(w) {
    s.d.r(w);
  }, It.unstable_batchedUpdates = function(w, p) {
    return w(p);
  }, It.useFormState = function(w, p, q) {
    return M.H.useFormState(w, p, q);
  }, It.useFormStatus = function() {
    return M.H.useHostTransitionStatus();
  }, It.version = "19.1.0", It;
}
var Jd;
function og() {
  if (Jd) return jr.exports;
  Jd = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), jr.exports = rg(), jr.exports;
}
var Wd;
function sg() {
  if (Wd) return Yn;
  Wd = 1;
  var i = {};
  /**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var r = ig(), o = Qr(), s = og();
  function d(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function v(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function M(t) {
    var e = t, l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function R(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function w(t) {
    if (M(t) !== t)
      throw Error(d(188));
  }
  function p(t) {
    var e = t.alternate;
    if (!e) {
      if (e = M(t), e === null) throw Error(d(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (a = n.return, a !== null) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return w(n), t;
          if (u === a) return w(n), e;
          u = u.sibling;
        }
        throw Error(d(188));
      }
      if (l.return !== a.return) l = n, a = u;
      else {
        for (var c = !1, f = n.child; f; ) {
          if (f === l) {
            c = !0, l = n, a = u;
            break;
          }
          if (f === a) {
            c = !0, a = n, l = u;
            break;
          }
          f = f.sibling;
        }
        if (!c) {
          for (f = u.child; f; ) {
            if (f === l) {
              c = !0, l = u, a = n;
              break;
            }
            if (f === a) {
              c = !0, a = u, l = n;
              break;
            }
            f = f.sibling;
          }
          if (!c) throw Error(d(189));
        }
      }
      if (l.alternate !== a) throw Error(d(190));
    }
    if (l.tag !== 3) throw Error(d(188));
    return l.stateNode.current === l ? t : e;
  }
  function q(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = q(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var U = Object.assign, $ = Symbol.for("react.element"), ft = Symbol.for("react.transitional.element"), ut = Symbol.for("react.portal"), V = Symbol.for("react.fragment"), vt = Symbol.for("react.strict_mode"), bt = Symbol.for("react.profiler"), st = Symbol.for("react.provider"), Tt = Symbol.for("react.consumer"), it = Symbol.for("react.context"), Ct = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), Ut = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), Mt = Symbol.for("react.lazy"), te = Symbol.for("react.activity"), ce = Symbol.for("react.memo_cache_sentinel"), Ht = Symbol.iterator;
  function Kt(t) {
    return t === null || typeof t != "object" ? null : (t = Ht && t[Ht] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var be = Symbol.for("react.client.reference");
  function Et(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === be ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case V:
        return "Fragment";
      case bt:
        return "Profiler";
      case vt:
        return "StrictMode";
      case W:
        return "Suspense";
      case Ut:
        return "SuspenseList";
      case te:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case ut:
          return "Portal";
        case it:
          return (t.displayName || "Context") + ".Provider";
        case Tt:
          return (t._context.displayName || "Context") + ".Consumer";
        case Ct:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case Z:
          return e = t.displayName || null, e !== null ? e : Et(t.type) || "Memo";
        case Mt:
          e = t._payload, t = t._init;
          try {
            return Et(t(e));
          } catch {
          }
      }
    return null;
  }
  var j = Array.isArray, D = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, E = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, et = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, dt = [], g = -1;
  function _(t) {
    return { current: t };
  }
  function H(t) {
    0 > g || (t.current = dt[g], dt[g] = null, g--);
  }
  function C(t, e) {
    g++, dt[g] = t.current, t.current = e;
  }
  var k = _(null), rt = _(null), Y = _(null), qt = _(null);
  function mt(t, e) {
    switch (C(Y, e), C(rt, t), C(k, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? gd(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = gd(e), t = yd(e, t);
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
    H(k), C(k, t);
  }
  function re() {
    H(k), H(rt), H(Y);
  }
  function zl(t) {
    t.memoizedState !== null && C(qt, t);
    var e = k.current, l = yd(e, t.type);
    e !== l && (C(rt, t), C(k, l));
  }
  function Be(t) {
    rt.current === t && (H(k), H(rt)), qt.current === t && (H(qt), jn._currentValue = et);
  }
  var mi = Object.prototype.hasOwnProperty, hi = r.unstable_scheduleCallback, gi = r.unstable_cancelCallback, Um = r.unstable_shouldYield, Hm = r.unstable_requestPaint, Re = r.unstable_now, qm = r.unstable_getCurrentPriorityLevel, Kr = r.unstable_ImmediatePriority, Jr = r.unstable_UserBlockingPriority, Zn = r.unstable_NormalPriority, Ym = r.unstable_LowPriority, Wr = r.unstable_IdlePriority, Bm = r.log, Gm = r.unstable_setDisableYieldValue, Ba = null, oe = null;
  function ll(t) {
    if (typeof Bm == "function" && Gm(t), oe && typeof oe.setStrictMode == "function")
      try {
        oe.setStrictMode(Ba, t);
      } catch {
      }
  }
  var se = Math.clz32 ? Math.clz32 : km, Xm = Math.log, Qm = Math.LN2;
  function km(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Xm(t) / Qm | 0) | 0;
  }
  var Vn = 256, Ln = 4194304;
  function _l(t) {
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
  function Kn(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = t.suspendedLanes, c = t.pingedLanes;
    t = t.warmLanes;
    var f = a & 134217727;
    return f !== 0 ? (a = f & ~u, a !== 0 ? n = _l(a) : (c &= f, c !== 0 ? n = _l(c) : l || (l = f & ~t, l !== 0 && (n = _l(l))))) : (f = a & ~u, f !== 0 ? n = _l(f) : c !== 0 ? n = _l(c) : l || (l = a & ~t, l !== 0 && (n = _l(l)))), n === 0 ? 0 : e !== 0 && e !== n && (e & u) === 0 && (u = n & -n, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : n;
  }
  function Ga(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Zm(t, e) {
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
  function $r() {
    var t = Vn;
    return Vn <<= 1, (Vn & 4194048) === 0 && (Vn = 256), t;
  }
  function Fr() {
    var t = Ln;
    return Ln <<= 1, (Ln & 62914560) === 0 && (Ln = 4194304), t;
  }
  function yi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Xa(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Vm(t, e, l, a, n, u) {
    var c = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var f = t.entanglements, m = t.expirationTimes, x = t.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var O = 31 - se(l), z = 1 << O;
      f[O] = 0, m[O] = -1;
      var T = x[O];
      if (T !== null)
        for (x[O] = null, O = 0; O < T.length; O++) {
          var A = T[O];
          A !== null && (A.lane &= -536870913);
        }
      l &= ~z;
    }
    a !== 0 && Pr(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(c & ~e));
  }
  function Pr(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - se(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 4194090;
  }
  function Ir(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var a = 31 - se(l), n = 1 << a;
      n & e | t[a] & e && (t[a] |= e), l &= ~n;
    }
  }
  function vi(t) {
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
  function bi(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function to() {
    var t = E.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Ud(t.type));
  }
  function Lm(t, e) {
    var l = E.p;
    try {
      return E.p = t, e();
    } finally {
      E.p = l;
    }
  }
  var al = Math.random().toString(36).slice(2), Ft = "__reactFiber$" + al, le = "__reactProps$" + al, $l = "__reactContainer$" + al, pi = "__reactEvents$" + al, Km = "__reactListeners$" + al, Jm = "__reactHandles$" + al, eo = "__reactResources$" + al, Qa = "__reactMarker$" + al;
  function Si(t) {
    delete t[Ft], delete t[le], delete t[pi], delete t[Km], delete t[Jm];
  }
  function Fl(t) {
    var e = t[Ft];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[$l] || l[Ft]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = Sd(t); t !== null; ) {
            if (l = t[Ft]) return l;
            t = Sd(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function Pl(t) {
    if (t = t[Ft] || t[$l]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function ka(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(d(33));
  }
  function Il(t) {
    var e = t[eo];
    return e || (e = t[eo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function kt(t) {
    t[Qa] = !0;
  }
  var lo = /* @__PURE__ */ new Set(), ao = {};
  function Dl(t, e) {
    ta(t, e), ta(t + "Capture", e);
  }
  function ta(t, e) {
    for (ao[t] = e, t = 0; t < e.length; t++)
      lo.add(e[t]);
  }
  var Wm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), no = {}, uo = {};
  function $m(t) {
    return mi.call(uo, t) ? !0 : mi.call(no, t) ? !1 : Wm.test(t) ? uo[t] = !0 : (no[t] = !0, !1);
  }
  function Jn(t, e, l) {
    if ($m(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function Wn(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function Ge(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  var xi, io;
  function ea(t) {
    if (xi === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        xi = e && e[1] || "", io = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + xi + t + io;
  }
  var Ti = !1;
  function Ai(t, e) {
    if (!t || Ti) return "";
    Ti = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var z = function() {
                throw Error();
              };
              if (Object.defineProperty(z.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(z, []);
                } catch (A) {
                  var T = A;
                }
                Reflect.construct(t, [], z);
              } else {
                try {
                  z.call();
                } catch (A) {
                  T = A;
                }
                t.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (A) {
                T = A;
              }
              (z = t()) && typeof z.catch == "function" && z.catch(function() {
              });
            }
          } catch (A) {
            if (A && T && typeof A.stack == "string")
              return [A.stack, T.stack];
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
      var u = a.DetermineComponentFrameRoot(), c = u[0], f = u[1];
      if (c && f) {
        var m = c.split(`
`), x = f.split(`
`);
        for (n = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < x.length && !x[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === m.length || n === x.length)
          for (a = m.length - 1, n = x.length - 1; 1 <= a && 0 <= n && m[a] !== x[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (m[a] !== x[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || m[a] !== x[n]) {
                  var O = `
` + m[a].replace(" at new ", " at ");
                  return t.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", t.displayName)), O;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      Ti = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? ea(l) : "";
  }
  function Fm(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ea(t.type);
      case 16:
        return ea("Lazy");
      case 13:
        return ea("Suspense");
      case 19:
        return ea("SuspenseList");
      case 0:
      case 15:
        return Ai(t.type, !1);
      case 11:
        return Ai(t.type.render, !1);
      case 1:
        return Ai(t.type, !0);
      case 31:
        return ea("Activity");
      default:
        return "";
    }
  }
  function co(t) {
    try {
      var e = "";
      do
        e += Fm(t), t = t.return;
      while (t);
      return e;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  function pe(t) {
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
  function ro(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Pm(t) {
    var e = ro(t) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    ), a = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var n = l.get, u = l.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(c) {
          a = "" + c, u.call(this, c);
        }
      }), Object.defineProperty(t, e, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(c) {
          a = "" + c;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function $n(t) {
    t._valueTracker || (t._valueTracker = Pm(t));
  }
  function oo(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), a = "";
    return t && (a = ro(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), !0) : !1;
  }
  function Fn(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Im = /[\n"\\]/g;
  function Se(t) {
    return t.replace(
      Im,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function wi(t, e, l, a, n, u, c, f) {
    t.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.type = c : t.removeAttribute("type"), e != null ? c === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + pe(e)) : t.value !== "" + pe(e) && (t.value = "" + pe(e)) : c !== "submit" && c !== "reset" || t.removeAttribute("value"), e != null ? Mi(t, c, pe(e)) : l != null ? Mi(t, c, pe(l)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.name = "" + pe(f) : t.removeAttribute("name");
  }
  function so(t, e, l, a, n, u, c, f) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || e != null))
        return;
      l = l != null ? "" + pe(l) : "", e = e != null ? "" + pe(e) : l, f || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = f ? t.checked : !!a, t.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.name = c);
  }
  function Mi(t, e, l) {
    e === "number" && Fn(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function la(t, e, l, a) {
    if (t = t.options, e) {
      e = {};
      for (var n = 0; n < l.length; n++)
        e["$" + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        n = e.hasOwnProperty("$" + t[l].value), t[l].selected !== n && (t[l].selected = n), n && a && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + pe(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          t[n].selected = !0, a && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function fo(t, e, l) {
    if (e != null && (e = "" + pe(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + pe(l) : "";
  }
  function mo(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(d(92));
        if (j(a)) {
          if (1 < a.length) throw Error(d(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), e = l;
    }
    l = pe(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a);
  }
  function aa(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var th = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ho(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || th.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function go(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(d(62));
    if (t = t.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var n in e)
        a = e[n], e.hasOwnProperty(n) && l[n] !== a && ho(t, n, a);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && ho(t, u, e[u]);
  }
  function Ei(t) {
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
  var eh = /* @__PURE__ */ new Map([
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
  ]), lh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Pn(t) {
    return lh.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var Oi = null;
  function Ni(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var na = null, ua = null;
  function yo(t) {
    var e = Pl(t);
    if (e && (t = e.stateNode)) {
      var l = t[le] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (wi(
            t,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), e = l.name, l.type === "radio" && e != null) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + Se(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[le] || null;
                if (!n) throw Error(d(90));
                wi(
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
            for (e = 0; e < l.length; e++)
              a = l[e], a.form === t.form && oo(a);
          }
          break t;
        case "textarea":
          fo(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && la(t, !!l.multiple, e, !1);
      }
    }
  }
  var zi = !1;
  function vo(t, e, l) {
    if (zi) return t(e, l);
    zi = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (zi = !1, (na !== null || ua !== null) && (qu(), na && (e = na, t = ua, ua = na = null, yo(e), t)))
        for (e = 0; e < t.length; e++) yo(t[e]);
    }
  }
  function Za(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[le] || null;
    if (a === null) return null;
    l = a[e];
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
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function")
      throw Error(
        d(231, e, typeof l)
      );
    return l;
  }
  var Xe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _i = !1;
  if (Xe)
    try {
      var Va = {};
      Object.defineProperty(Va, "passive", {
        get: function() {
          _i = !0;
        }
      }), window.addEventListener("test", Va, Va), window.removeEventListener("test", Va, Va);
    } catch {
      _i = !1;
    }
  var nl = null, Di = null, In = null;
  function bo() {
    if (In) return In;
    var t, e = Di, l = e.length, a, n = "value" in nl ? nl.value : nl.textContent, u = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++) ;
    var c = l - t;
    for (a = 1; a <= c && e[l - a] === n[u - a]; a++) ;
    return In = n.slice(t, 1 < a ? 1 - a : void 0);
  }
  function tu(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function eu() {
    return !0;
  }
  function po() {
    return !1;
  }
  function ae(t) {
    function e(l, a, n, u, c) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = c, this.currentTarget = null;
      for (var f in t)
        t.hasOwnProperty(f) && (l = t[f], this[f] = l ? l(u) : u[f]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? eu : po, this.isPropagationStopped = po, this;
    }
    return U(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = eu);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = eu);
      },
      persist: function() {
      },
      isPersistent: eu
    }), e;
  }
  var jl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, lu = ae(jl), La = U({}, jl, { view: 0, detail: 0 }), ah = ae(La), ji, Ri, Ka, au = U({}, La, {
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
    getModifierState: Ui,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Ka && (Ka && t.type === "mousemove" ? (ji = t.screenX - Ka.screenX, Ri = t.screenY - Ka.screenY) : Ri = ji = 0, Ka = t), ji);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Ri;
    }
  }), So = ae(au), nh = U({}, au, { dataTransfer: 0 }), uh = ae(nh), ih = U({}, La, { relatedTarget: 0 }), Ci = ae(ih), ch = U({}, jl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), rh = ae(ch), oh = U({}, jl, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), sh = ae(oh), fh = U({}, jl, { data: 0 }), xo = ae(fh), dh = {
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
  }, mh = {
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
  }, hh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function gh(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = hh[t]) ? !!e[t] : !1;
  }
  function Ui() {
    return gh;
  }
  var yh = U({}, La, {
    key: function(t) {
      if (t.key) {
        var e = dh[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = tu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? mh[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ui,
    charCode: function(t) {
      return t.type === "keypress" ? tu(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? tu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), vh = ae(yh), bh = U({}, au, {
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
  }), To = ae(bh), ph = U({}, La, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ui
  }), Sh = ae(ph), xh = U({}, jl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Th = ae(xh), Ah = U({}, au, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), wh = ae(Ah), Mh = U({}, jl, {
    newState: 0,
    oldState: 0
  }), Eh = ae(Mh), Oh = [9, 13, 27, 32], Hi = Xe && "CompositionEvent" in window, Ja = null;
  Xe && "documentMode" in document && (Ja = document.documentMode);
  var Nh = Xe && "TextEvent" in window && !Ja, Ao = Xe && (!Hi || Ja && 8 < Ja && 11 >= Ja), wo = " ", Mo = !1;
  function Eo(t, e) {
    switch (t) {
      case "keyup":
        return Oh.indexOf(e.keyCode) !== -1;
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
  function Oo(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var ia = !1;
  function zh(t, e) {
    switch (t) {
      case "compositionend":
        return Oo(e);
      case "keypress":
        return e.which !== 32 ? null : (Mo = !0, wo);
      case "textInput":
        return t = e.data, t === wo && Mo ? null : t;
      default:
        return null;
    }
  }
  function _h(t, e) {
    if (ia)
      return t === "compositionend" || !Hi && Eo(t, e) ? (t = bo(), In = Di = nl = null, ia = !1, t) : null;
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
        return Ao && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Dh = {
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
  function No(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Dh[t.type] : e === "textarea";
  }
  function zo(t, e, l, a) {
    na ? ua ? ua.push(a) : ua = [a] : na = a, e = ku(e, "onChange"), 0 < e.length && (l = new lu(
      "onChange",
      "change",
      null,
      l,
      a
    ), t.push({ event: l, listeners: e }));
  }
  var Wa = null, $a = null;
  function jh(t) {
    sd(t, 0);
  }
  function nu(t) {
    var e = ka(t);
    if (oo(e)) return t;
  }
  function _o(t, e) {
    if (t === "change") return e;
  }
  var Do = !1;
  if (Xe) {
    var qi;
    if (Xe) {
      var Yi = "oninput" in document;
      if (!Yi) {
        var jo = document.createElement("div");
        jo.setAttribute("oninput", "return;"), Yi = typeof jo.oninput == "function";
      }
      qi = Yi;
    } else qi = !1;
    Do = qi && (!document.documentMode || 9 < document.documentMode);
  }
  function Ro() {
    Wa && (Wa.detachEvent("onpropertychange", Co), $a = Wa = null);
  }
  function Co(t) {
    if (t.propertyName === "value" && nu($a)) {
      var e = [];
      zo(
        e,
        $a,
        t,
        Ni(t)
      ), vo(jh, e);
    }
  }
  function Rh(t, e, l) {
    t === "focusin" ? (Ro(), Wa = e, $a = l, Wa.attachEvent("onpropertychange", Co)) : t === "focusout" && Ro();
  }
  function Ch(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return nu($a);
  }
  function Uh(t, e) {
    if (t === "click") return nu(e);
  }
  function Hh(t, e) {
    if (t === "input" || t === "change")
      return nu(e);
  }
  function qh(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var fe = typeof Object.is == "function" ? Object.is : qh;
  function Fa(t, e) {
    if (fe(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!mi.call(e, n) || !fe(t[n], e[n]))
        return !1;
    }
    return !0;
  }
  function Uo(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Ho(t, e) {
    var l = Uo(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (a = t + l.textContent.length, t <= e && a >= e)
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Uo(l);
    }
  }
  function qo(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? qo(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Yo(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Fn(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Fn(t.document);
    }
    return e;
  }
  function Bi(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var Yh = Xe && "documentMode" in document && 11 >= document.documentMode, ca = null, Gi = null, Pa = null, Xi = !1;
  function Bo(t, e, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Xi || ca == null || ca !== Fn(a) || (a = ca, "selectionStart" in a && Bi(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Pa && Fa(Pa, a) || (Pa = a, a = ku(Gi, "onSelect"), 0 < a.length && (e = new lu(
      "onSelect",
      "select",
      null,
      e,
      l
    ), t.push({ event: e, listeners: a }), e.target = ca)));
  }
  function Rl(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var ra = {
    animationend: Rl("Animation", "AnimationEnd"),
    animationiteration: Rl("Animation", "AnimationIteration"),
    animationstart: Rl("Animation", "AnimationStart"),
    transitionrun: Rl("Transition", "TransitionRun"),
    transitionstart: Rl("Transition", "TransitionStart"),
    transitioncancel: Rl("Transition", "TransitionCancel"),
    transitionend: Rl("Transition", "TransitionEnd")
  }, Qi = {}, Go = {};
  Xe && (Go = document.createElement("div").style, "AnimationEvent" in window || (delete ra.animationend.animation, delete ra.animationiteration.animation, delete ra.animationstart.animation), "TransitionEvent" in window || delete ra.transitionend.transition);
  function Cl(t) {
    if (Qi[t]) return Qi[t];
    if (!ra[t]) return t;
    var e = ra[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in Go)
        return Qi[t] = e[l];
    return t;
  }
  var Xo = Cl("animationend"), Qo = Cl("animationiteration"), ko = Cl("animationstart"), Bh = Cl("transitionrun"), Gh = Cl("transitionstart"), Xh = Cl("transitioncancel"), Zo = Cl("transitionend"), Vo = /* @__PURE__ */ new Map(), ki = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ki.push("scrollEnd");
  function Ne(t, e) {
    Vo.set(t, e), Dl(e, [t]);
  }
  var Lo = /* @__PURE__ */ new WeakMap();
  function xe(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Lo.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: co(e)
      }, Lo.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: co(e)
    };
  }
  var Te = [], oa = 0, Zi = 0;
  function uu() {
    for (var t = oa, e = Zi = oa = 0; e < t; ) {
      var l = Te[e];
      Te[e++] = null;
      var a = Te[e];
      Te[e++] = null;
      var n = Te[e];
      Te[e++] = null;
      var u = Te[e];
      if (Te[e++] = null, a !== null && n !== null) {
        var c = a.pending;
        c === null ? n.next = n : (n.next = c.next, c.next = n), a.pending = n;
      }
      u !== 0 && Ko(l, n, u);
    }
  }
  function iu(t, e, l, a) {
    Te[oa++] = t, Te[oa++] = e, Te[oa++] = l, Te[oa++] = a, Zi |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Vi(t, e, l, a) {
    return iu(t, e, l, a), cu(t);
  }
  function sa(t, e) {
    return iu(t, null, null, e), cu(t);
  }
  function Ko(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = t.return; u !== null; )
      u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, n && e !== null && (n = 31 - se(l), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [e] : a.push(e), e.lane = l | 536870912), u) : null;
  }
  function cu(t) {
    if (50 < wn)
      throw wn = 0, Fc = null, Error(d(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var fa = {};
  function Qh(t, e, l, a) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function de(t, e, l, a) {
    return new Qh(t, e, l, a);
  }
  function Li(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Qe(t, e) {
    var l = t.alternate;
    return l === null ? (l = de(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function Jo(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function ru(t, e, l, a, n, u) {
    var c = 0;
    if (a = t, typeof t == "function") Li(t) && (c = 1);
    else if (typeof t == "string")
      c = Z0(
        t,
        l,
        k.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case te:
          return t = de(31, l, e, n), t.elementType = te, t.lanes = u, t;
        case V:
          return Ul(l.children, n, u, e);
        case vt:
          c = 8, n |= 24;
          break;
        case bt:
          return t = de(12, l, e, n | 2), t.elementType = bt, t.lanes = u, t;
        case W:
          return t = de(13, l, e, n), t.elementType = W, t.lanes = u, t;
        case Ut:
          return t = de(19, l, e, n), t.elementType = Ut, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case st:
              case it:
                c = 10;
                break t;
              case Tt:
                c = 9;
                break t;
              case Ct:
                c = 11;
                break t;
              case Z:
                c = 14;
                break t;
              case Mt:
                c = 16, a = null;
                break t;
            }
          c = 29, l = Error(
            d(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = de(c, l, e, n), e.elementType = t, e.type = a, e.lanes = u, e;
  }
  function Ul(t, e, l, a) {
    return t = de(7, t, a, e), t.lanes = l, t;
  }
  function Ki(t, e, l) {
    return t = de(6, t, null, e), t.lanes = l, t;
  }
  function Ji(t, e, l) {
    return e = de(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = l, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var da = [], ma = 0, ou = null, su = 0, Ae = [], we = 0, Hl = null, ke = 1, Ze = "";
  function ql(t, e) {
    da[ma++] = su, da[ma++] = ou, ou = t, su = e;
  }
  function Wo(t, e, l) {
    Ae[we++] = ke, Ae[we++] = Ze, Ae[we++] = Hl, Hl = t;
    var a = ke;
    t = Ze;
    var n = 32 - se(a) - 1;
    a &= ~(1 << n), l += 1;
    var u = 32 - se(e) + n;
    if (30 < u) {
      var c = n - n % 5;
      u = (a & (1 << c) - 1).toString(32), a >>= c, n -= c, ke = 1 << 32 - se(e) + n | l << n | a, Ze = u + t;
    } else
      ke = 1 << u | l << n | a, Ze = t;
  }
  function Wi(t) {
    t.return !== null && (ql(t, 1), Wo(t, 1, 0));
  }
  function $i(t) {
    for (; t === ou; )
      ou = da[--ma], da[ma] = null, su = da[--ma], da[ma] = null;
    for (; t === Hl; )
      Hl = Ae[--we], Ae[we] = null, Ze = Ae[--we], Ae[we] = null, ke = Ae[--we], Ae[we] = null;
  }
  var ee = null, _t = null, ot = !1, Yl = null, Ce = !1, Fi = Error(d(519));
  function Bl(t) {
    var e = Error(d(418, ""));
    throw en(xe(e, t)), Fi;
  }
  function $o(t) {
    var e = t.stateNode, l = t.type, a = t.memoizedProps;
    switch (e[Ft] = t, e[le] = a, l) {
      case "dialog":
        at("cancel", e), at("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        at("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < En.length; l++)
          at(En[l], e);
        break;
      case "source":
        at("error", e);
        break;
      case "img":
      case "image":
      case "link":
        at("error", e), at("load", e);
        break;
      case "details":
        at("toggle", e);
        break;
      case "input":
        at("invalid", e), so(
          e,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        ), $n(e);
        break;
      case "select":
        at("invalid", e);
        break;
      case "textarea":
        at("invalid", e), mo(e, a.value, a.defaultValue, a.children), $n(e);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || hd(e.textContent, l) ? (a.popover != null && (at("beforetoggle", e), at("toggle", e)), a.onScroll != null && at("scroll", e), a.onScrollEnd != null && at("scrollend", e), a.onClick != null && (e.onclick = Zu), e = !0) : e = !1, e || Bl(t);
  }
  function Fo(t) {
    for (ee = t.return; ee; )
      switch (ee.tag) {
        case 5:
        case 13:
          Ce = !1;
          return;
        case 27:
        case 3:
          Ce = !0;
          return;
        default:
          ee = ee.return;
      }
  }
  function Ia(t) {
    if (t !== ee) return !1;
    if (!ot) return Fo(t), ot = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || mr(t.type, t.memoizedProps)), l = !l), l && _t && Bl(t), Fo(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(d(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (l = t.data, l === "/$") {
              if (e === 0) {
                _t = _e(t.nextSibling);
                break t;
              }
              e--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || e++;
          t = t.nextSibling;
        }
        _t = null;
      }
    } else
      e === 27 ? (e = _t, Sl(t.type) ? (t = vr, vr = null, _t = t) : _t = e) : _t = ee ? _e(t.stateNode.nextSibling) : null;
    return !0;
  }
  function tn() {
    _t = ee = null, ot = !1;
  }
  function Po() {
    var t = Yl;
    return t !== null && (ie === null ? ie = t : ie.push.apply(
      ie,
      t
    ), Yl = null), t;
  }
  function en(t) {
    Yl === null ? Yl = [t] : Yl.push(t);
  }
  var Pi = _(null), Gl = null, Ve = null;
  function ul(t, e, l) {
    C(Pi, e._currentValue), e._currentValue = l;
  }
  function Le(t) {
    t._currentValue = Pi.current, H(Pi);
  }
  function Ii(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function tc(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var c = n.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var f = u;
          u = n;
          for (var m = 0; m < e.length; m++)
            if (f.context === e[m]) {
              u.lanes |= l, f = u.alternate, f !== null && (f.lanes |= l), Ii(
                u.return,
                l,
                t
              ), a || (c = null);
              break t;
            }
          u = f.next;
        }
      } else if (n.tag === 18) {
        if (c = n.return, c === null) throw Error(d(341));
        c.lanes |= l, u = c.alternate, u !== null && (u.lanes |= l), Ii(c, l, t), c = null;
      } else c = n.child;
      if (c !== null) c.return = n;
      else
        for (c = n; c !== null; ) {
          if (c === t) {
            c = null;
            break;
          }
          if (n = c.sibling, n !== null) {
            n.return = c.return, c = n;
            break;
          }
          c = c.return;
        }
      n = c;
    }
  }
  function ln(t, e, l, a) {
    t = null;
    for (var n = e, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var c = n.alternate;
        if (c === null) throw Error(d(387));
        if (c = c.memoizedProps, c !== null) {
          var f = n.type;
          fe(n.pendingProps.value, c.value) || (t !== null ? t.push(f) : t = [f]);
        }
      } else if (n === qt.current) {
        if (c = n.alternate, c === null) throw Error(d(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(jn) : t = [jn]);
      }
      n = n.return;
    }
    t !== null && tc(
      e,
      t,
      l,
      a
    ), e.flags |= 262144;
  }
  function fu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!fe(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Xl(t) {
    Gl = t, Ve = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Pt(t) {
    return Io(Gl, t);
  }
  function du(t, e) {
    return Gl === null && Xl(t), Io(t, e);
  }
  function Io(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, Ve === null) {
      if (t === null) throw Error(d(308));
      Ve = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Ve = Ve.next = e;
    return l;
  }
  var kh = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(l, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(l) {
        return l();
      });
    };
  }, Zh = r.unstable_scheduleCallback, Vh = r.unstable_NormalPriority, Gt = {
    $$typeof: it,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ec() {
    return {
      controller: new kh(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function an(t) {
    t.refCount--, t.refCount === 0 && Zh(Vh, function() {
      t.controller.abort();
    });
  }
  var nn = null, lc = 0, ha = 0, ga = null;
  function Lh(t, e) {
    if (nn === null) {
      var l = nn = [];
      lc = 0, ha = nr(), ga = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return lc++, e.then(ts, ts), e;
  }
  function ts() {
    if (--lc === 0 && nn !== null) {
      ga !== null && (ga.status = "fulfilled");
      var t = nn;
      nn = null, ha = 0, ga = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Kh(t, e) {
    var l = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        l.push(n);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = e;
        for (var n = 0; n < l.length; n++) (0, l[n])(e);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
          (0, l[n])(void 0);
      }
    ), a;
  }
  var es = D.S;
  D.S = function(t, e) {
    typeof e == "object" && e !== null && typeof e.then == "function" && Lh(t, e), es !== null && es(t, e);
  };
  var Ql = _(null);
  function ac() {
    var t = Ql.current;
    return t !== null ? t : Ot.pooledCache;
  }
  function mu(t, e) {
    e === null ? C(Ql, Ql.current) : C(Ql, e.pool);
  }
  function ls() {
    var t = ac();
    return t === null ? null : { parent: Gt._currentValue, pool: t };
  }
  var un = Error(d(460)), as = Error(d(474)), hu = Error(d(542)), nc = { then: function() {
  } };
  function ns(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function gu() {
  }
  function us(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(gu, gu), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, cs(t), t;
      default:
        if (typeof e.status == "string") e.then(gu, gu);
        else {
          if (t = Ot, t !== null && 100 < t.shellSuspendCounter)
            throw Error(d(482));
          t = e, t.status = "pending", t.then(
            function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, cs(t), t;
        }
        throw cn = e, un;
    }
  }
  var cn = null;
  function is() {
    if (cn === null) throw Error(d(459));
    var t = cn;
    return cn = null, t;
  }
  function cs(t) {
    if (t === un || t === hu)
      throw Error(d(483));
  }
  var il = !1;
  function uc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ic(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function cl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function rl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (ht & 2) !== 0) {
      var n = a.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = cu(t), Ko(t, null, l), e;
    }
    return iu(t, a, e, l), cu(t);
  }
  function rn(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, Ir(t, l);
    }
  }
  function cc(t, e) {
    var l = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var n = null, u = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var c = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = c : u = u.next = c, l = l.next;
        } while (l !== null);
        u === null ? n = u = e : u = u.next = e;
      } else n = u = e;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = l;
      return;
    }
    t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
  }
  var rc = !1;
  function on() {
    if (rc) {
      var t = ga;
      if (t !== null) throw t;
    }
  }
  function sn(t, e, l, a) {
    rc = !1;
    var n = t.updateQueue;
    il = !1;
    var u = n.firstBaseUpdate, c = n.lastBaseUpdate, f = n.shared.pending;
    if (f !== null) {
      n.shared.pending = null;
      var m = f, x = m.next;
      m.next = null, c === null ? u = x : c.next = x, c = m;
      var O = t.alternate;
      O !== null && (O = O.updateQueue, f = O.lastBaseUpdate, f !== c && (f === null ? O.firstBaseUpdate = x : f.next = x, O.lastBaseUpdate = m));
    }
    if (u !== null) {
      var z = n.baseState;
      c = 0, O = x = m = null, f = u;
      do {
        var T = f.lane & -536870913, A = T !== f.lane;
        if (A ? (nt & T) === T : (a & T) === T) {
          T !== 0 && T === ha && (rc = !0), O !== null && (O = O.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          t: {
            var J = t, L = f;
            T = e;
            var xt = l;
            switch (L.tag) {
              case 1:
                if (J = L.payload, typeof J == "function") {
                  z = J.call(xt, z, T);
                  break t;
                }
                z = J;
                break t;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = L.payload, T = typeof J == "function" ? J.call(xt, z, T) : J, T == null) break t;
                z = U({}, z, T);
                break t;
              case 2:
                il = !0;
            }
          }
          T = f.callback, T !== null && (t.flags |= 64, A && (t.flags |= 8192), A = n.callbacks, A === null ? n.callbacks = [T] : A.push(T));
        } else
          A = {
            lane: T,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, O === null ? (x = O = A, m = z) : O = O.next = A, c |= T;
        if (f = f.next, f === null) {
          if (f = n.shared.pending, f === null)
            break;
          A = f, f = A.next, A.next = null, n.lastBaseUpdate = A, n.shared.pending = null;
        }
      } while (!0);
      O === null && (m = z), n.baseState = m, n.firstBaseUpdate = x, n.lastBaseUpdate = O, u === null && (n.shared.lanes = 0), yl |= c, t.lanes = c, t.memoizedState = z;
    }
  }
  function rs(t, e) {
    if (typeof t != "function")
      throw Error(d(191, t));
    t.call(e);
  }
  function os(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        rs(l[t], e);
  }
  var ya = _(null), yu = _(0);
  function ss(t, e) {
    t = Ie, C(yu, t), C(ya, e), Ie = t | e.baseLanes;
  }
  function oc() {
    C(yu, Ie), C(ya, ya.current);
  }
  function sc() {
    Ie = yu.current, H(ya), H(yu);
  }
  var ol = 0, P = null, pt = null, Yt = null, vu = !1, va = !1, kl = !1, bu = 0, fn = 0, ba = null, Jh = 0;
  function jt() {
    throw Error(d(321));
  }
  function fc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!fe(t[l], e[l])) return !1;
    return !0;
  }
  function dc(t, e, l, a, n, u) {
    return ol = u, P = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, D.H = t === null || t.memoizedState === null ? Ks : Js, kl = !1, u = l(a, n), kl = !1, va && (u = ds(
      e,
      l,
      a,
      n
    )), fs(t), u;
  }
  function fs(t) {
    D.H = wu;
    var e = pt !== null && pt.next !== null;
    if (ol = 0, Yt = pt = P = null, vu = !1, fn = 0, ba = null, e) throw Error(d(300));
    t === null || Zt || (t = t.dependencies, t !== null && fu(t) && (Zt = !0));
  }
  function ds(t, e, l, a) {
    P = t;
    var n = 0;
    do {
      if (va && (ba = null), fn = 0, va = !1, 25 <= n) throw Error(d(301));
      if (n += 1, Yt = pt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      D.H = e0, u = e(l, a);
    } while (va);
    return u;
  }
  function Wh() {
    var t = D.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? dn(e) : e, t = t.useState()[0], (pt !== null ? pt.memoizedState : null) !== t && (P.flags |= 1024), e;
  }
  function mc() {
    var t = bu !== 0;
    return bu = 0, t;
  }
  function hc(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function gc(t) {
    if (vu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      vu = !1;
    }
    ol = 0, Yt = pt = P = null, va = !1, fn = bu = 0, ba = null;
  }
  function ne() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Yt === null ? P.memoizedState = Yt = t : Yt = Yt.next = t, Yt;
  }
  function Bt() {
    if (pt === null) {
      var t = P.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = pt.next;
    var e = Yt === null ? P.memoizedState : Yt.next;
    if (e !== null)
      Yt = e, pt = t;
    else {
      if (t === null)
        throw P.alternate === null ? Error(d(467)) : Error(d(310));
      pt = t, t = {
        memoizedState: pt.memoizedState,
        baseState: pt.baseState,
        baseQueue: pt.baseQueue,
        queue: pt.queue,
        next: null
      }, Yt === null ? P.memoizedState = Yt = t : Yt = Yt.next = t;
    }
    return Yt;
  }
  function yc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function dn(t) {
    var e = fn;
    return fn += 1, ba === null && (ba = []), t = us(ba, t, e), e = P, (Yt === null ? e.memoizedState : Yt.next) === null && (e = e.alternate, D.H = e === null || e.memoizedState === null ? Ks : Js), t;
  }
  function pu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return dn(t);
      if (t.$$typeof === it) return Pt(t);
    }
    throw Error(d(438, String(t)));
  }
  function vc(t) {
    var e = null, l = P.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var a = P.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = yc(), P.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++)
        l[a] = ce;
    return e.index++, l;
  }
  function Ke(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Su(t) {
    var e = Bt();
    return bc(e, pt, t);
  }
  function bc(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(d(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue, u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var c = n.next;
        n.next = u.next, u.next = c;
      }
      e.baseQueue = n = u, a.pending = null;
    }
    if (u = t.baseState, n === null) t.memoizedState = u;
    else {
      e = n.next;
      var f = c = null, m = null, x = e, O = !1;
      do {
        var z = x.lane & -536870913;
        if (z !== x.lane ? (nt & z) === z : (ol & z) === z) {
          var T = x.revertLane;
          if (T === 0)
            m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }), z === ha && (O = !0);
          else if ((ol & T) === T) {
            x = x.next, T === ha && (O = !0);
            continue;
          } else
            z = {
              lane: 0,
              revertLane: x.revertLane,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }, m === null ? (f = m = z, c = u) : m = m.next = z, P.lanes |= T, yl |= T;
          z = x.action, kl && l(u, z), u = x.hasEagerState ? x.eagerState : l(u, z);
        } else
          T = {
            lane: z,
            revertLane: x.revertLane,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null
          }, m === null ? (f = m = T, c = u) : m = m.next = T, P.lanes |= z, yl |= z;
        x = x.next;
      } while (x !== null && x !== e);
      if (m === null ? c = u : m.next = f, !fe(u, t.memoizedState) && (Zt = !0, O && (l = ga, l !== null)))
        throw l;
      t.memoizedState = u, t.baseState = c, t.baseQueue = m, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function pc(t) {
    var e = Bt(), l = e.queue;
    if (l === null) throw Error(d(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch, n = l.pending, u = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var c = n = n.next;
      do
        u = t(u, c.action), c = c.next;
      while (c !== n);
      fe(u, e.memoizedState) || (Zt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), l.lastRenderedState = u;
    }
    return [u, a];
  }
  function ms(t, e, l) {
    var a = P, n = Bt(), u = ot;
    if (u) {
      if (l === void 0) throw Error(d(407));
      l = l();
    } else l = e();
    var c = !fe(
      (pt || n).memoizedState,
      l
    );
    c && (n.memoizedState = l, Zt = !0), n = n.queue;
    var f = ys.bind(null, a, n, t);
    if (mn(2048, 8, f, [t]), n.getSnapshot !== e || c || Yt !== null && Yt.memoizedState.tag & 1) {
      if (a.flags |= 2048, pa(
        9,
        xu(),
        gs.bind(
          null,
          a,
          n,
          l,
          e
        ),
        null
      ), Ot === null) throw Error(d(349));
      u || (ol & 124) !== 0 || hs(a, e, l);
    }
    return l;
  }
  function hs(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = P.updateQueue, e === null ? (e = yc(), P.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function gs(t, e, l, a) {
    e.value = l, e.getSnapshot = a, vs(e) && bs(t);
  }
  function ys(t, e, l) {
    return l(function() {
      vs(e) && bs(t);
    });
  }
  function vs(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !fe(t, l);
    } catch {
      return !0;
    }
  }
  function bs(t) {
    var e = sa(t, 2);
    e !== null && ve(e, t, 2);
  }
  function Sc(t) {
    var e = ne();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), kl) {
        ll(!0);
        try {
          l();
        } finally {
          ll(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ke,
      lastRenderedState: t
    }, e;
  }
  function ps(t, e, l, a) {
    return t.baseState = l, bc(
      t,
      pt,
      typeof a == "function" ? a : Ke
    );
  }
  function $h(t, e, l, a, n) {
    if (Au(t)) throw Error(d(485));
    if (t = e.action, t !== null) {
      var u = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(c) {
          u.listeners.push(c);
        }
      };
      D.T !== null ? l(!0) : u.isTransition = !1, a(u), l = e.pending, l === null ? (u.next = e.pending = u, Ss(e, u)) : (u.next = l.next, e.pending = l.next = u);
    }
  }
  function Ss(t, e) {
    var l = e.action, a = e.payload, n = t.state;
    if (e.isTransition) {
      var u = D.T, c = {};
      D.T = c;
      try {
        var f = l(n, a), m = D.S;
        m !== null && m(c, f), xs(t, e, f);
      } catch (x) {
        xc(t, e, x);
      } finally {
        D.T = u;
      }
    } else
      try {
        u = l(n, a), xs(t, e, u);
      } catch (x) {
        xc(t, e, x);
      }
  }
  function xs(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        Ts(t, e, a);
      },
      function(a) {
        return xc(t, e, a);
      }
    ) : Ts(t, e, l);
  }
  function Ts(t, e, l) {
    e.status = "fulfilled", e.value = l, As(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, Ss(t, l)));
  }
  function xc(t, e, l) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = l, As(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function As(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function ws(t, e) {
    return e;
  }
  function Ms(t, e) {
    if (ot) {
      var l = Ot.formState;
      if (l !== null) {
        t: {
          var a = P;
          if (ot) {
            if (_t) {
              e: {
                for (var n = _t, u = Ce; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break e;
                  }
                  if (n = _e(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break e;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                _t = _e(
                  n.nextSibling
                ), a = n.data === "F!";
                break t;
              }
            }
            Bl(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return l = ne(), l.memoizedState = l.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ws,
      lastRenderedState: e
    }, l.queue = a, l = Zs.bind(
      null,
      P,
      a
    ), a.dispatch = l, a = Sc(!1), u = Ec.bind(
      null,
      P,
      !1,
      a.queue
    ), a = ne(), n = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = n, l = $h.bind(
      null,
      P,
      n,
      u,
      l
    ), n.dispatch = l, a.memoizedState = t, [e, l, !1];
  }
  function Es(t) {
    var e = Bt();
    return Os(e, pt, t);
  }
  function Os(t, e, l) {
    if (e = bc(
      t,
      e,
      ws
    )[0], t = Su(Ke)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = dn(e);
      } catch (c) {
        throw c === un ? hu : c;
      }
    else a = e;
    e = Bt();
    var n = e.queue, u = n.dispatch;
    return l !== e.memoizedState && (P.flags |= 2048, pa(
      9,
      xu(),
      Fh.bind(null, n, l),
      null
    )), [a, u, t];
  }
  function Fh(t, e) {
    t.action = e;
  }
  function Ns(t) {
    var e = Bt(), l = pt;
    if (l !== null)
      return Os(e, l, t);
    Bt(), e = e.memoizedState, l = Bt();
    var a = l.queue.dispatch;
    return l.memoizedState = t, [e, a, !1];
  }
  function pa(t, e, l, a) {
    return t = { tag: t, create: l, deps: a, inst: e, next: null }, e = P.updateQueue, e === null && (e = yc(), P.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
  }
  function xu() {
    return { destroy: void 0, resource: void 0 };
  }
  function zs() {
    return Bt().memoizedState;
  }
  function Tu(t, e, l, a) {
    var n = ne();
    a = a === void 0 ? null : a, P.flags |= t, n.memoizedState = pa(
      1 | e,
      xu(),
      l,
      a
    );
  }
  function mn(t, e, l, a) {
    var n = Bt();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    pt !== null && a !== null && fc(a, pt.memoizedState.deps) ? n.memoizedState = pa(e, u, l, a) : (P.flags |= t, n.memoizedState = pa(
      1 | e,
      u,
      l,
      a
    ));
  }
  function _s(t, e) {
    Tu(8390656, 8, t, e);
  }
  function Ds(t, e) {
    mn(2048, 8, t, e);
  }
  function js(t, e) {
    return mn(4, 2, t, e);
  }
  function Rs(t, e) {
    return mn(4, 4, t, e);
  }
  function Cs(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function() {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function Us(t, e, l) {
    l = l != null ? l.concat([t]) : null, mn(4, 4, Cs.bind(null, e, t), l);
  }
  function Tc() {
  }
  function Hs(t, e) {
    var l = Bt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && fc(e, a[1]) ? a[0] : (l.memoizedState = [t, e], t);
  }
  function qs(t, e) {
    var l = Bt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && fc(e, a[1]))
      return a[0];
    if (a = t(), kl) {
      ll(!0);
      try {
        t();
      } finally {
        ll(!1);
      }
    }
    return l.memoizedState = [a, e], a;
  }
  function Ac(t, e, l) {
    return l === void 0 || (ol & 1073741824) !== 0 ? t.memoizedState = e : (t.memoizedState = l, t = Xf(), P.lanes |= t, yl |= t, l);
  }
  function Ys(t, e, l, a) {
    return fe(l, e) ? l : ya.current !== null ? (t = Ac(t, l, a), fe(t, e) || (Zt = !0), t) : (ol & 42) === 0 ? (Zt = !0, t.memoizedState = l) : (t = Xf(), P.lanes |= t, yl |= t, e);
  }
  function Bs(t, e, l, a, n) {
    var u = E.p;
    E.p = u !== 0 && 8 > u ? u : 8;
    var c = D.T, f = {};
    D.T = f, Ec(t, !1, e, l);
    try {
      var m = n(), x = D.S;
      if (x !== null && x(f, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var O = Kh(
          m,
          a
        );
        hn(
          t,
          e,
          O,
          ye(t)
        );
      } else
        hn(
          t,
          e,
          a,
          ye(t)
        );
    } catch (z) {
      hn(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: z },
        ye()
      );
    } finally {
      E.p = u, D.T = c;
    }
  }
  function Ph() {
  }
  function wc(t, e, l, a) {
    if (t.tag !== 5) throw Error(d(476));
    var n = Gs(t).queue;
    Bs(
      t,
      n,
      e,
      et,
      l === null ? Ph : function() {
        return Xs(t), l(a);
      }
    );
  }
  function Gs(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: et,
      baseState: et,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ke,
        lastRenderedState: et
      },
      next: null
    };
    var l = {};
    return e.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ke,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Xs(t) {
    var e = Gs(t).next.queue;
    hn(t, e, {}, ye());
  }
  function Mc() {
    return Pt(jn);
  }
  function Qs() {
    return Bt().memoizedState;
  }
  function ks() {
    return Bt().memoizedState;
  }
  function Ih(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = ye();
          t = cl(l);
          var a = rl(e, t, l);
          a !== null && (ve(a, e, l), rn(a, e, l)), e = { cache: ec() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function t0(t, e, l) {
    var a = ye();
    l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Au(t) ? Vs(e, l) : (l = Vi(t, e, l, a), l !== null && (ve(l, t, a), Ls(l, e, a)));
  }
  function Zs(t, e, l) {
    var a = ye();
    hn(t, e, l, a);
  }
  function hn(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Au(t)) Vs(e, n);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var c = e.lastRenderedState, f = u(c, l);
          if (n.hasEagerState = !0, n.eagerState = f, fe(f, c))
            return iu(t, e, n, 0), Ot === null && uu(), !1;
        } catch {
        } finally {
        }
      if (l = Vi(t, e, n, a), l !== null)
        return ve(l, t, a), Ls(l, e, a), !0;
    }
    return !1;
  }
  function Ec(t, e, l, a) {
    if (a = {
      lane: 2,
      revertLane: nr(),
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Au(t)) {
      if (e) throw Error(d(479));
    } else
      e = Vi(
        t,
        l,
        a,
        2
      ), e !== null && ve(e, t, 2);
  }
  function Au(t) {
    var e = t.alternate;
    return t === P || e !== null && e === P;
  }
  function Vs(t, e) {
    va = vu = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function Ls(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, Ir(t, l);
    }
  }
  var wu = {
    readContext: Pt,
    use: pu,
    useCallback: jt,
    useContext: jt,
    useEffect: jt,
    useImperativeHandle: jt,
    useLayoutEffect: jt,
    useInsertionEffect: jt,
    useMemo: jt,
    useReducer: jt,
    useRef: jt,
    useState: jt,
    useDebugValue: jt,
    useDeferredValue: jt,
    useTransition: jt,
    useSyncExternalStore: jt,
    useId: jt,
    useHostTransitionStatus: jt,
    useFormState: jt,
    useActionState: jt,
    useOptimistic: jt,
    useMemoCache: jt,
    useCacheRefresh: jt
  }, Ks = {
    readContext: Pt,
    use: pu,
    useCallback: function(t, e) {
      return ne().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Pt,
    useEffect: _s,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, Tu(
        4194308,
        4,
        Cs.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return Tu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Tu(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = ne();
      e = e === void 0 ? null : e;
      var a = t();
      if (kl) {
        ll(!0);
        try {
          t();
        } finally {
          ll(!1);
        }
      }
      return l.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, l) {
      var a = ne();
      if (l !== void 0) {
        var n = l(e);
        if (kl) {
          ll(!0);
          try {
            l(e);
          } finally {
            ll(!1);
          }
        }
      } else n = e;
      return a.memoizedState = a.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, a.queue = t, t = t.dispatch = t0.bind(
        null,
        P,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = ne();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Sc(t);
      var e = t.queue, l = Zs.bind(null, P, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: Tc,
    useDeferredValue: function(t, e) {
      var l = ne();
      return Ac(l, t, e);
    },
    useTransition: function() {
      var t = Sc(!1);
      return t = Bs.bind(
        null,
        P,
        t.queue,
        !0,
        !1
      ), ne().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var a = P, n = ne();
      if (ot) {
        if (l === void 0)
          throw Error(d(407));
        l = l();
      } else {
        if (l = e(), Ot === null)
          throw Error(d(349));
        (nt & 124) !== 0 || hs(a, e, l);
      }
      n.memoizedState = l;
      var u = { value: l, getSnapshot: e };
      return n.queue = u, _s(ys.bind(null, a, u, t), [
        t
      ]), a.flags |= 2048, pa(
        9,
        xu(),
        gs.bind(
          null,
          a,
          u,
          l,
          e
        ),
        null
      ), l;
    },
    useId: function() {
      var t = ne(), e = Ot.identifierPrefix;
      if (ot) {
        var l = Ze, a = ke;
        l = (a & ~(1 << 32 - se(a) - 1)).toString(32) + l, e = "«" + e + "R" + l, l = bu++, 0 < l && (e += "H" + l.toString(32)), e += "»";
      } else
        l = Jh++, e = "«" + e + "r" + l.toString(32) + "»";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Mc,
    useFormState: Ms,
    useActionState: Ms,
    useOptimistic: function(t) {
      var e = ne();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = Ec.bind(
        null,
        P,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: vc,
    useCacheRefresh: function() {
      return ne().memoizedState = Ih.bind(
        null,
        P
      );
    }
  }, Js = {
    readContext: Pt,
    use: pu,
    useCallback: Hs,
    useContext: Pt,
    useEffect: Ds,
    useImperativeHandle: Us,
    useInsertionEffect: js,
    useLayoutEffect: Rs,
    useMemo: qs,
    useReducer: Su,
    useRef: zs,
    useState: function() {
      return Su(Ke);
    },
    useDebugValue: Tc,
    useDeferredValue: function(t, e) {
      var l = Bt();
      return Ys(
        l,
        pt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Su(Ke)[0], e = Bt().memoizedState;
      return [
        typeof t == "boolean" ? t : dn(t),
        e
      ];
    },
    useSyncExternalStore: ms,
    useId: Qs,
    useHostTransitionStatus: Mc,
    useFormState: Es,
    useActionState: Es,
    useOptimistic: function(t, e) {
      var l = Bt();
      return ps(l, pt, t, e);
    },
    useMemoCache: vc,
    useCacheRefresh: ks
  }, e0 = {
    readContext: Pt,
    use: pu,
    useCallback: Hs,
    useContext: Pt,
    useEffect: Ds,
    useImperativeHandle: Us,
    useInsertionEffect: js,
    useLayoutEffect: Rs,
    useMemo: qs,
    useReducer: pc,
    useRef: zs,
    useState: function() {
      return pc(Ke);
    },
    useDebugValue: Tc,
    useDeferredValue: function(t, e) {
      var l = Bt();
      return pt === null ? Ac(l, t, e) : Ys(
        l,
        pt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = pc(Ke)[0], e = Bt().memoizedState;
      return [
        typeof t == "boolean" ? t : dn(t),
        e
      ];
    },
    useSyncExternalStore: ms,
    useId: Qs,
    useHostTransitionStatus: Mc,
    useFormState: Ns,
    useActionState: Ns,
    useOptimistic: function(t, e) {
      var l = Bt();
      return pt !== null ? ps(l, pt, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: vc,
    useCacheRefresh: ks
  }, Sa = null, gn = 0;
  function Mu(t) {
    var e = gn;
    return gn += 1, Sa === null && (Sa = []), us(Sa, t, e);
  }
  function yn(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Eu(t, e) {
    throw e.$$typeof === $ ? Error(d(525)) : (t = Object.prototype.toString.call(e), Error(
      d(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Ws(t) {
    var e = t._init;
    return e(t._payload);
  }
  function $s(t) {
    function e(y, h) {
      if (t) {
        var b = y.deletions;
        b === null ? (y.deletions = [h], y.flags |= 16) : b.push(h);
      }
    }
    function l(y, h) {
      if (!t) return null;
      for (; h !== null; )
        e(y, h), h = h.sibling;
      return null;
    }
    function a(y) {
      for (var h = /* @__PURE__ */ new Map(); y !== null; )
        y.key !== null ? h.set(y.key, y) : h.set(y.index, y), y = y.sibling;
      return h;
    }
    function n(y, h) {
      return y = Qe(y, h), y.index = 0, y.sibling = null, y;
    }
    function u(y, h, b) {
      return y.index = b, t ? (b = y.alternate, b !== null ? (b = b.index, b < h ? (y.flags |= 67108866, h) : b) : (y.flags |= 67108866, h)) : (y.flags |= 1048576, h);
    }
    function c(y) {
      return t && y.alternate === null && (y.flags |= 67108866), y;
    }
    function f(y, h, b, N) {
      return h === null || h.tag !== 6 ? (h = Ki(b, y.mode, N), h.return = y, h) : (h = n(h, b), h.return = y, h);
    }
    function m(y, h, b, N) {
      var B = b.type;
      return B === V ? O(
        y,
        h,
        b.props.children,
        N,
        b.key
      ) : h !== null && (h.elementType === B || typeof B == "object" && B !== null && B.$$typeof === Mt && Ws(B) === h.type) ? (h = n(h, b.props), yn(h, b), h.return = y, h) : (h = ru(
        b.type,
        b.key,
        b.props,
        null,
        y.mode,
        N
      ), yn(h, b), h.return = y, h);
    }
    function x(y, h, b, N) {
      return h === null || h.tag !== 4 || h.stateNode.containerInfo !== b.containerInfo || h.stateNode.implementation !== b.implementation ? (h = Ji(b, y.mode, N), h.return = y, h) : (h = n(h, b.children || []), h.return = y, h);
    }
    function O(y, h, b, N, B) {
      return h === null || h.tag !== 7 ? (h = Ul(
        b,
        y.mode,
        N,
        B
      ), h.return = y, h) : (h = n(h, b), h.return = y, h);
    }
    function z(y, h, b) {
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
        return h = Ki(
          "" + h,
          y.mode,
          b
        ), h.return = y, h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case ft:
            return b = ru(
              h.type,
              h.key,
              h.props,
              null,
              y.mode,
              b
            ), yn(b, h), b.return = y, b;
          case ut:
            return h = Ji(
              h,
              y.mode,
              b
            ), h.return = y, h;
          case Mt:
            var N = h._init;
            return h = N(h._payload), z(y, h, b);
        }
        if (j(h) || Kt(h))
          return h = Ul(
            h,
            y.mode,
            b,
            null
          ), h.return = y, h;
        if (typeof h.then == "function")
          return z(y, Mu(h), b);
        if (h.$$typeof === it)
          return z(
            y,
            du(y, h),
            b
          );
        Eu(y, h);
      }
      return null;
    }
    function T(y, h, b, N) {
      var B = h !== null ? h.key : null;
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return B !== null ? null : f(y, h, "" + b, N);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case ft:
            return b.key === B ? m(y, h, b, N) : null;
          case ut:
            return b.key === B ? x(y, h, b, N) : null;
          case Mt:
            return B = b._init, b = B(b._payload), T(y, h, b, N);
        }
        if (j(b) || Kt(b))
          return B !== null ? null : O(y, h, b, N, null);
        if (typeof b.then == "function")
          return T(
            y,
            h,
            Mu(b),
            N
          );
        if (b.$$typeof === it)
          return T(
            y,
            h,
            du(y, b),
            N
          );
        Eu(y, b);
      }
      return null;
    }
    function A(y, h, b, N, B) {
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return y = y.get(b) || null, f(h, y, "" + N, B);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case ft:
            return y = y.get(
              N.key === null ? b : N.key
            ) || null, m(h, y, N, B);
          case ut:
            return y = y.get(
              N.key === null ? b : N.key
            ) || null, x(h, y, N, B);
          case Mt:
            var tt = N._init;
            return N = tt(N._payload), A(
              y,
              h,
              b,
              N,
              B
            );
        }
        if (j(N) || Kt(N))
          return y = y.get(b) || null, O(h, y, N, B, null);
        if (typeof N.then == "function")
          return A(
            y,
            h,
            b,
            Mu(N),
            B
          );
        if (N.$$typeof === it)
          return A(
            y,
            h,
            b,
            du(h, N),
            B
          );
        Eu(h, N);
      }
      return null;
    }
    function J(y, h, b, N) {
      for (var B = null, tt = null, Q = h, K = h = 0, Lt = null; Q !== null && K < b.length; K++) {
        Q.index > K ? (Lt = Q, Q = null) : Lt = Q.sibling;
        var ct = T(
          y,
          Q,
          b[K],
          N
        );
        if (ct === null) {
          Q === null && (Q = Lt);
          break;
        }
        t && Q && ct.alternate === null && e(y, Q), h = u(ct, h, K), tt === null ? B = ct : tt.sibling = ct, tt = ct, Q = Lt;
      }
      if (K === b.length)
        return l(y, Q), ot && ql(y, K), B;
      if (Q === null) {
        for (; K < b.length; K++)
          Q = z(y, b[K], N), Q !== null && (h = u(
            Q,
            h,
            K
          ), tt === null ? B = Q : tt.sibling = Q, tt = Q);
        return ot && ql(y, K), B;
      }
      for (Q = a(Q); K < b.length; K++)
        Lt = A(
          Q,
          y,
          K,
          b[K],
          N
        ), Lt !== null && (t && Lt.alternate !== null && Q.delete(
          Lt.key === null ? K : Lt.key
        ), h = u(
          Lt,
          h,
          K
        ), tt === null ? B = Lt : tt.sibling = Lt, tt = Lt);
      return t && Q.forEach(function(Ml) {
        return e(y, Ml);
      }), ot && ql(y, K), B;
    }
    function L(y, h, b, N) {
      if (b == null) throw Error(d(151));
      for (var B = null, tt = null, Q = h, K = h = 0, Lt = null, ct = b.next(); Q !== null && !ct.done; K++, ct = b.next()) {
        Q.index > K ? (Lt = Q, Q = null) : Lt = Q.sibling;
        var Ml = T(y, Q, ct.value, N);
        if (Ml === null) {
          Q === null && (Q = Lt);
          break;
        }
        t && Q && Ml.alternate === null && e(y, Q), h = u(Ml, h, K), tt === null ? B = Ml : tt.sibling = Ml, tt = Ml, Q = Lt;
      }
      if (ct.done)
        return l(y, Q), ot && ql(y, K), B;
      if (Q === null) {
        for (; !ct.done; K++, ct = b.next())
          ct = z(y, ct.value, N), ct !== null && (h = u(ct, h, K), tt === null ? B = ct : tt.sibling = ct, tt = ct);
        return ot && ql(y, K), B;
      }
      for (Q = a(Q); !ct.done; K++, ct = b.next())
        ct = A(Q, y, K, ct.value, N), ct !== null && (t && ct.alternate !== null && Q.delete(ct.key === null ? K : ct.key), h = u(ct, h, K), tt === null ? B = ct : tt.sibling = ct, tt = ct);
      return t && Q.forEach(function(lg) {
        return e(y, lg);
      }), ot && ql(y, K), B;
    }
    function xt(y, h, b, N) {
      if (typeof b == "object" && b !== null && b.type === V && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case ft:
            t: {
              for (var B = b.key; h !== null; ) {
                if (h.key === B) {
                  if (B = b.type, B === V) {
                    if (h.tag === 7) {
                      l(
                        y,
                        h.sibling
                      ), N = n(
                        h,
                        b.props.children
                      ), N.return = y, y = N;
                      break t;
                    }
                  } else if (h.elementType === B || typeof B == "object" && B !== null && B.$$typeof === Mt && Ws(B) === h.type) {
                    l(
                      y,
                      h.sibling
                    ), N = n(h, b.props), yn(N, b), N.return = y, y = N;
                    break t;
                  }
                  l(y, h);
                  break;
                } else e(y, h);
                h = h.sibling;
              }
              b.type === V ? (N = Ul(
                b.props.children,
                y.mode,
                N,
                b.key
              ), N.return = y, y = N) : (N = ru(
                b.type,
                b.key,
                b.props,
                null,
                y.mode,
                N
              ), yn(N, b), N.return = y, y = N);
            }
            return c(y);
          case ut:
            t: {
              for (B = b.key; h !== null; ) {
                if (h.key === B)
                  if (h.tag === 4 && h.stateNode.containerInfo === b.containerInfo && h.stateNode.implementation === b.implementation) {
                    l(
                      y,
                      h.sibling
                    ), N = n(h, b.children || []), N.return = y, y = N;
                    break t;
                  } else {
                    l(y, h);
                    break;
                  }
                else e(y, h);
                h = h.sibling;
              }
              N = Ji(b, y.mode, N), N.return = y, y = N;
            }
            return c(y);
          case Mt:
            return B = b._init, b = B(b._payload), xt(
              y,
              h,
              b,
              N
            );
        }
        if (j(b))
          return J(
            y,
            h,
            b,
            N
          );
        if (Kt(b)) {
          if (B = Kt(b), typeof B != "function") throw Error(d(150));
          return b = B.call(b), L(
            y,
            h,
            b,
            N
          );
        }
        if (typeof b.then == "function")
          return xt(
            y,
            h,
            Mu(b),
            N
          );
        if (b.$$typeof === it)
          return xt(
            y,
            h,
            du(y, b),
            N
          );
        Eu(y, b);
      }
      return typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint" ? (b = "" + b, h !== null && h.tag === 6 ? (l(y, h.sibling), N = n(h, b), N.return = y, y = N) : (l(y, h), N = Ki(b, y.mode, N), N.return = y, y = N), c(y)) : l(y, h);
    }
    return function(y, h, b, N) {
      try {
        gn = 0;
        var B = xt(
          y,
          h,
          b,
          N
        );
        return Sa = null, B;
      } catch (Q) {
        if (Q === un || Q === hu) throw Q;
        var tt = de(29, Q, null, y.mode);
        return tt.lanes = N, tt.return = y, tt;
      } finally {
      }
    };
  }
  var xa = $s(!0), Fs = $s(!1), Me = _(null), Ue = null;
  function sl(t) {
    var e = t.alternate;
    C(Xt, Xt.current & 1), C(Me, t), Ue === null && (e === null || ya.current !== null || e.memoizedState !== null) && (Ue = t);
  }
  function Ps(t) {
    if (t.tag === 22) {
      if (C(Xt, Xt.current), C(Me, t), Ue === null) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Ue = t);
      }
    } else fl();
  }
  function fl() {
    C(Xt, Xt.current), C(Me, Me.current);
  }
  function Je(t) {
    H(Me), Ue === t && (Ue = null), H(Xt);
  }
  var Xt = _(0);
  function Ou(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || yr(l)))
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
  function Oc(t, e, l, a) {
    e = t.memoizedState, l = l(a, e), l = l == null ? e : U({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var Nc = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var a = ye(), n = cl(a);
      n.payload = e, l != null && (n.callback = l), e = rl(t, n, a), e !== null && (ve(e, t, a), rn(e, t, a));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var a = ye(), n = cl(a);
      n.tag = 1, n.payload = e, l != null && (n.callback = l), e = rl(t, n, a), e !== null && (ve(e, t, a), rn(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = ye(), a = cl(l);
      a.tag = 2, e != null && (a.callback = e), e = rl(t, a, l), e !== null && (ve(e, t, l), rn(e, t, l));
    }
  };
  function Is(t, e, l, a, n, u, c) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, c) : e.prototype && e.prototype.isPureReactComponent ? !Fa(l, a) || !Fa(n, u) : !0;
  }
  function tf(t, e, l, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && Nc.enqueueReplaceState(e, e.state, null);
  }
  function Zl(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e)
        a !== "ref" && (l[a] = e[a]);
    }
    if (t = t.defaultProps) {
      l === e && (l = U({}, l));
      for (var n in t)
        l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  var Nu = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof i == "object" && typeof i.emit == "function") {
      i.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function ef(t) {
    Nu(t);
  }
  function lf(t) {
    console.error(t);
  }
  function af(t) {
    Nu(t);
  }
  function zu(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function nf(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function zc(t, e, l) {
    return l = cl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      zu(t, e);
    }, l;
  }
  function uf(t) {
    return t = cl(t), t.tag = 3, t;
  }
  function cf(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      t.payload = function() {
        return n(u);
      }, t.callback = function() {
        nf(e, l, a);
      };
    }
    var c = l.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (t.callback = function() {
      nf(e, l, a), typeof n != "function" && (vl === null ? vl = /* @__PURE__ */ new Set([this]) : vl.add(this));
      var f = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function l0(t, e, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = l.alternate, e !== null && ln(
        e,
        l,
        n,
        !0
      ), l = Me.current, l !== null) {
        switch (l.tag) {
          case 13:
            return Ue === null ? Ic() : l.alternate === null && Dt === 0 && (Dt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === nc ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), er(t, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === nc ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), er(t, a, n)), !1;
        }
        throw Error(d(435, l.tag));
      }
      return er(t, a, n), Ic(), !1;
    }
    if (ot)
      return e = Me.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== Fi && (t = Error(d(422), { cause: a }), en(xe(t, l)))) : (a !== Fi && (e = Error(d(423), {
        cause: a
      }), en(
        xe(e, l)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = xe(a, l), n = zc(
        t.stateNode,
        a,
        n
      ), cc(t, n), Dt !== 4 && (Dt = 2)), !1;
    var u = Error(d(520), { cause: a });
    if (u = xe(u, l), An === null ? An = [u] : An.push(u), Dt !== 4 && (Dt = 2), e === null) return !0;
    a = xe(a, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = n & -n, l.lanes |= t, t = zc(l.stateNode, a, t), cc(l, t), !1;
        case 1:
          if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (vl === null || !vl.has(u))))
            return l.flags |= 65536, n &= -n, l.lanes |= n, n = uf(n), cf(
              n,
              t,
              l,
              a
            ), cc(l, n), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var rf = Error(d(461)), Zt = !1;
  function Jt(t, e, l, a) {
    e.child = t === null ? Fs(e, null, l, a) : xa(
      e,
      t.child,
      l,
      a
    );
  }
  function of(t, e, l, a, n) {
    l = l.render;
    var u = e.ref;
    if ("ref" in a) {
      var c = {};
      for (var f in a)
        f !== "ref" && (c[f] = a[f]);
    } else c = a;
    return Xl(e), a = dc(
      t,
      e,
      l,
      c,
      u,
      n
    ), f = mc(), t !== null && !Zt ? (hc(t, e, n), We(t, e, n)) : (ot && f && Wi(e), e.flags |= 1, Jt(t, e, a, n), e.child);
  }
  function sf(t, e, l, a, n) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" && !Li(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, ff(
        t,
        e,
        u,
        a,
        n
      )) : (t = ru(
        l.type,
        null,
        a,
        e,
        e.mode,
        n
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !qc(t, n)) {
      var c = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Fa, l(c, a) && t.ref === e.ref)
        return We(t, e, n);
    }
    return e.flags |= 1, t = Qe(u, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function ff(t, e, l, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Fa(u, a) && t.ref === e.ref)
        if (Zt = !1, e.pendingProps = a = u, qc(t, n))
          (t.flags & 131072) !== 0 && (Zt = !0);
        else
          return e.lanes = t.lanes, We(t, e, n);
    }
    return _c(
      t,
      e,
      l,
      a,
      n
    );
  }
  function df(t, e, l) {
    var a = e.pendingProps, n = a.children, u = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (a = u !== null ? u.baseLanes | l : l, t !== null) {
          for (n = e.child = t.child, u = 0; n !== null; )
            u = u | n.lanes | n.childLanes, n = n.sibling;
          e.childLanes = u & ~a;
        } else e.childLanes = 0, e.child = null;
        return mf(
          t,
          e,
          a,
          l
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && mu(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? ss(e, u) : oc(), Ps(e);
      else
        return e.lanes = e.childLanes = 536870912, mf(
          t,
          e,
          u !== null ? u.baseLanes | l : l,
          l
        );
    } else
      u !== null ? (mu(e, u.cachePool), ss(e, u), fl(), e.memoizedState = null) : (t !== null && mu(e, null), oc(), fl());
    return Jt(t, e, n, l), e.child;
  }
  function mf(t, e, l, a) {
    var n = ac();
    return n = n === null ? null : { parent: Gt._currentValue, pool: n }, e.memoizedState = {
      baseLanes: l,
      cachePool: n
    }, t !== null && mu(e, null), oc(), Ps(e), t !== null && ln(t, e, a, !0), null;
  }
  function _u(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(d(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function _c(t, e, l, a, n) {
    return Xl(e), l = dc(
      t,
      e,
      l,
      a,
      void 0,
      n
    ), a = mc(), t !== null && !Zt ? (hc(t, e, n), We(t, e, n)) : (ot && a && Wi(e), e.flags |= 1, Jt(t, e, l, n), e.child);
  }
  function hf(t, e, l, a, n, u) {
    return Xl(e), e.updateQueue = null, l = ds(
      e,
      a,
      l,
      n
    ), fs(t), a = mc(), t !== null && !Zt ? (hc(t, e, u), We(t, e, u)) : (ot && a && Wi(e), e.flags |= 1, Jt(t, e, l, u), e.child);
  }
  function gf(t, e, l, a, n) {
    if (Xl(e), e.stateNode === null) {
      var u = fa, c = l.contextType;
      typeof c == "object" && c !== null && (u = Pt(c)), u = new l(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Nc, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, uc(e), c = l.contextType, u.context = typeof c == "object" && c !== null ? Pt(c) : fa, u.state = e.memoizedState, c = l.getDerivedStateFromProps, typeof c == "function" && (Oc(
        e,
        l,
        c,
        a
      ), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && Nc.enqueueReplaceState(u, u.state, null), sn(e, a, u, n), on(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      u = e.stateNode;
      var f = e.memoizedProps, m = Zl(l, f);
      u.props = m;
      var x = u.context, O = l.contextType;
      c = fa, typeof O == "object" && O !== null && (c = Pt(O));
      var z = l.getDerivedStateFromProps;
      O = typeof z == "function" || typeof u.getSnapshotBeforeUpdate == "function", f = e.pendingProps !== f, O || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f || x !== c) && tf(
        e,
        u,
        a,
        c
      ), il = !1;
      var T = e.memoizedState;
      u.state = T, sn(e, a, u, n), on(), x = e.memoizedState, f || T !== x || il ? (typeof z == "function" && (Oc(
        e,
        l,
        z,
        a
      ), x = e.memoizedState), (m = il || Is(
        e,
        l,
        m,
        a,
        T,
        x,
        c
      )) ? (O || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = x), u.props = a, u.state = x, u.context = c, a = m) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      u = e.stateNode, ic(t, e), c = e.memoizedProps, O = Zl(l, c), u.props = O, z = e.pendingProps, T = u.context, x = l.contextType, m = fa, typeof x == "object" && x !== null && (m = Pt(x)), f = l.getDerivedStateFromProps, (x = typeof f == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== z || T !== m) && tf(
        e,
        u,
        a,
        m
      ), il = !1, T = e.memoizedState, u.state = T, sn(e, a, u, n), on();
      var A = e.memoizedState;
      c !== z || T !== A || il || t !== null && t.dependencies !== null && fu(t.dependencies) ? (typeof f == "function" && (Oc(
        e,
        l,
        f,
        a
      ), A = e.memoizedState), (O = il || Is(
        e,
        l,
        O,
        a,
        T,
        A,
        m
      ) || t !== null && t.dependencies !== null && fu(t.dependencies)) ? (x || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, A, m), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        A,
        m
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === t.memoizedProps && T === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && T === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = A), u.props = a, u.state = A, u.context = m, a = O) : (typeof u.componentDidUpdate != "function" || c === t.memoizedProps && T === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && T === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return u = a, _u(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = xa(
      e,
      t.child,
      null,
      n
    ), e.child = xa(
      e,
      null,
      l,
      n
    )) : Jt(t, e, l, n), e.memoizedState = u.state, t = e.child) : t = We(
      t,
      e,
      n
    ), t;
  }
  function yf(t, e, l, a) {
    return tn(), e.flags |= 256, Jt(t, e, l, a), e.child;
  }
  var Dc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function jc(t) {
    return { baseLanes: t, cachePool: ls() };
  }
  function Rc(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= Ee), t;
  }
  function vf(t, e, l) {
    var a = e.pendingProps, n = !1, u = (e.flags & 128) !== 0, c;
    if ((c = u) || (c = t !== null && t.memoizedState === null ? !1 : (Xt.current & 2) !== 0), c && (n = !0, e.flags &= -129), c = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (ot) {
        if (n ? sl(e) : fl(), ot) {
          var f = _t, m;
          if (m = f) {
            t: {
              for (m = f, f = Ce; m.nodeType !== 8; ) {
                if (!f) {
                  f = null;
                  break t;
                }
                if (m = _e(
                  m.nextSibling
                ), m === null) {
                  f = null;
                  break t;
                }
              }
              f = m;
            }
            f !== null ? (e.memoizedState = {
              dehydrated: f,
              treeContext: Hl !== null ? { id: ke, overflow: Ze } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, m = de(
              18,
              null,
              null,
              0
            ), m.stateNode = f, m.return = e, e.child = m, ee = e, _t = null, m = !0) : m = !1;
          }
          m || Bl(e);
        }
        if (f = e.memoizedState, f !== null && (f = f.dehydrated, f !== null))
          return yr(f) ? e.lanes = 32 : e.lanes = 536870912, null;
        Je(e);
      }
      return f = a.children, a = a.fallback, n ? (fl(), n = e.mode, f = Du(
        { mode: "hidden", children: f },
        n
      ), a = Ul(
        a,
        n,
        l,
        null
      ), f.return = e, a.return = e, f.sibling = a, e.child = f, n = e.child, n.memoizedState = jc(l), n.childLanes = Rc(
        t,
        c,
        l
      ), e.memoizedState = Dc, a) : (sl(e), Cc(e, f));
    }
    if (m = t.memoizedState, m !== null && (f = m.dehydrated, f !== null)) {
      if (u)
        e.flags & 256 ? (sl(e), e.flags &= -257, e = Uc(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (fl(), e.child = t.child, e.flags |= 128, e = null) : (fl(), n = a.fallback, f = e.mode, a = Du(
          { mode: "visible", children: a.children },
          f
        ), n = Ul(
          n,
          f,
          l,
          null
        ), n.flags |= 2, a.return = e, n.return = e, a.sibling = n, e.child = a, xa(
          e,
          t.child,
          null,
          l
        ), a = e.child, a.memoizedState = jc(l), a.childLanes = Rc(
          t,
          c,
          l
        ), e.memoizedState = Dc, e = n);
      else if (sl(e), yr(f)) {
        if (c = f.nextSibling && f.nextSibling.dataset, c) var x = c.dgst;
        c = x, a = Error(d(419)), a.stack = "", a.digest = c, en({ value: a, source: null, stack: null }), e = Uc(
          t,
          e,
          l
        );
      } else if (Zt || ln(t, e, l, !1), c = (l & t.childLanes) !== 0, Zt || c) {
        if (c = Ot, c !== null && (a = l & -l, a = (a & 42) !== 0 ? 1 : vi(a), a = (a & (c.suspendedLanes | l)) !== 0 ? 0 : a, a !== 0 && a !== m.retryLane))
          throw m.retryLane = a, sa(t, a), ve(c, t, a), rf;
        f.data === "$?" || Ic(), e = Uc(
          t,
          e,
          l
        );
      } else
        f.data === "$?" ? (e.flags |= 192, e.child = t.child, e = null) : (t = m.treeContext, _t = _e(
          f.nextSibling
        ), ee = e, ot = !0, Yl = null, Ce = !1, t !== null && (Ae[we++] = ke, Ae[we++] = Ze, Ae[we++] = Hl, ke = t.id, Ze = t.overflow, Hl = e), e = Cc(
          e,
          a.children
        ), e.flags |= 4096);
      return e;
    }
    return n ? (fl(), n = a.fallback, f = e.mode, m = t.child, x = m.sibling, a = Qe(m, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = m.subtreeFlags & 65011712, x !== null ? n = Qe(x, n) : (n = Ul(
      n,
      f,
      l,
      null
    ), n.flags |= 2), n.return = e, a.return = e, a.sibling = n, e.child = a, a = n, n = e.child, f = t.child.memoizedState, f === null ? f = jc(l) : (m = f.cachePool, m !== null ? (x = Gt._currentValue, m = m.parent !== x ? { parent: x, pool: x } : m) : m = ls(), f = {
      baseLanes: f.baseLanes | l,
      cachePool: m
    }), n.memoizedState = f, n.childLanes = Rc(
      t,
      c,
      l
    ), e.memoizedState = Dc, a) : (sl(e), l = t.child, t = l.sibling, l = Qe(l, {
      mode: "visible",
      children: a.children
    }), l.return = e, l.sibling = null, t !== null && (c = e.deletions, c === null ? (e.deletions = [t], e.flags |= 16) : c.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function Cc(t, e) {
    return e = Du(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Du(t, e) {
    return t = de(22, t, null, e), t.lanes = 0, t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, t;
  }
  function Uc(t, e, l) {
    return xa(e, t.child, null, l), t = Cc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function bf(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Ii(t.return, e, l);
  }
  function Hc(t, e, l, a, n) {
    var u = t.memoizedState;
    u === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n
    } : (u.isBackwards = e, u.rendering = null, u.renderingStartTime = 0, u.last = a, u.tail = l, u.tailMode = n);
  }
  function pf(t, e, l) {
    var a = e.pendingProps, n = a.revealOrder, u = a.tail;
    if (Jt(t, e, a.children, l), a = Xt.current, (a & 2) !== 0)
      a = a & 1 | 2, e.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && bf(t, l, e);
          else if (t.tag === 19)
            bf(t, l, e);
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
      a &= 1;
    }
    switch (C(Xt, a), n) {
      case "forwards":
        for (l = e.child, n = null; l !== null; )
          t = l.alternate, t !== null && Ou(t) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = e.child, e.child = null) : (n = l.sibling, l.sibling = null), Hc(
          e,
          !1,
          n,
          l,
          u
        );
        break;
      case "backwards":
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (t = n.alternate, t !== null && Ou(t) === null) {
            e.child = n;
            break;
          }
          t = n.sibling, n.sibling = l, l = n, n = t;
        }
        Hc(
          e,
          !0,
          l,
          null,
          u
        );
        break;
      case "together":
        Hc(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function We(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), yl |= e.lanes, (l & e.childLanes) === 0)
      if (t !== null) {
        if (ln(
          t,
          e,
          l,
          !1
        ), (l & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(d(153));
    if (e.child !== null) {
      for (t = e.child, l = Qe(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = Qe(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function qc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && fu(t)));
  }
  function a0(t, e, l) {
    switch (e.tag) {
      case 3:
        mt(e, e.stateNode.containerInfo), ul(e, Gt, t.memoizedState.cache), tn();
        break;
      case 27:
      case 5:
        zl(e);
        break;
      case 4:
        mt(e, e.stateNode.containerInfo);
        break;
      case 10:
        ul(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (sl(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? vf(t, e, l) : (sl(e), t = We(
            t,
            e,
            l
          ), t !== null ? t.sibling : null);
        sl(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (a = (l & e.childLanes) !== 0, a || (ln(
          t,
          e,
          l,
          !1
        ), a = (l & e.childLanes) !== 0), n) {
          if (a)
            return pf(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), C(Xt, Xt.current), a) break;
        return null;
      case 22:
      case 23:
        return e.lanes = 0, df(t, e, l);
      case 24:
        ul(e, Gt, t.memoizedState.cache);
    }
    return We(t, e, l);
  }
  function Sf(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Zt = !0;
      else {
        if (!qc(t, l) && (e.flags & 128) === 0)
          return Zt = !1, a0(
            t,
            e,
            l
          );
        Zt = (t.flags & 131072) !== 0;
      }
    else
      Zt = !1, ot && (e.flags & 1048576) !== 0 && Wo(e, su, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          t = e.pendingProps;
          var a = e.elementType, n = a._init;
          if (a = n(a._payload), e.type = a, typeof a == "function")
            Li(a) ? (t = Zl(a, t), e.tag = 1, e = gf(
              null,
              e,
              a,
              t,
              l
            )) : (e.tag = 0, e = _c(
              null,
              e,
              a,
              t,
              l
            ));
          else {
            if (a != null) {
              if (n = a.$$typeof, n === Ct) {
                e.tag = 11, e = of(
                  null,
                  e,
                  a,
                  t,
                  l
                );
                break t;
              } else if (n === Z) {
                e.tag = 14, e = sf(
                  null,
                  e,
                  a,
                  t,
                  l
                );
                break t;
              }
            }
            throw e = Et(a) || a, Error(d(306, e, ""));
          }
        }
        return e;
      case 0:
        return _c(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 1:
        return a = e.type, n = Zl(
          a,
          e.pendingProps
        ), gf(
          t,
          e,
          a,
          n,
          l
        );
      case 3:
        t: {
          if (mt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(d(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          n = u.element, ic(t, e), sn(e, a, null, l);
          var c = e.memoizedState;
          if (a = c.cache, ul(e, Gt, a), a !== u.cache && tc(
            e,
            [Gt],
            l,
            !0
          ), on(), a = c.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: c.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = yf(
                t,
                e,
                a,
                l
              );
              break t;
            } else if (a !== n) {
              n = xe(
                Error(d(424)),
                e
              ), en(n), e = yf(
                t,
                e,
                a,
                l
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
              for (_t = _e(t.firstChild), ee = e, ot = !0, Yl = null, Ce = !0, l = Fs(
                e,
                null,
                a,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
          else {
            if (tn(), a === n) {
              e = We(
                t,
                e,
                l
              );
              break t;
            }
            Jt(
              t,
              e,
              a,
              l
            );
          }
          e = e.child;
        }
        return e;
      case 26:
        return _u(t, e), t === null ? (l = wd(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : ot || (l = e.type, t = e.pendingProps, a = Vu(
          Y.current
        ).createElement(l), a[Ft] = e, a[le] = t, $t(a, l, t), kt(a), e.stateNode = a) : e.memoizedState = wd(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return zl(e), t === null && ot && (a = e.stateNode = xd(
          e.type,
          e.pendingProps,
          Y.current
        ), ee = e, Ce = !0, n = _t, Sl(e.type) ? (vr = n, _t = _e(
          a.firstChild
        )) : _t = n), Jt(
          t,
          e,
          e.pendingProps.children,
          l
        ), _u(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && ot && ((n = a = _t) && (a = D0(
          a,
          e.type,
          e.pendingProps,
          Ce
        ), a !== null ? (e.stateNode = a, ee = e, _t = _e(
          a.firstChild
        ), Ce = !1, n = !0) : n = !1), n || Bl(e)), zl(e), n = e.type, u = e.pendingProps, c = t !== null ? t.memoizedProps : null, a = u.children, mr(n, u) ? a = null : c !== null && mr(n, c) && (e.flags |= 32), e.memoizedState !== null && (n = dc(
          t,
          e,
          Wh,
          null,
          null,
          l
        ), jn._currentValue = n), _u(t, e), Jt(t, e, a, l), e.child;
      case 6:
        return t === null && ot && ((t = l = _t) && (l = j0(
          l,
          e.pendingProps,
          Ce
        ), l !== null ? (e.stateNode = l, ee = e, _t = null, t = !0) : t = !1), t || Bl(e)), null;
      case 13:
        return vf(t, e, l);
      case 4:
        return mt(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = xa(
          e,
          null,
          a,
          l
        ) : Jt(
          t,
          e,
          a,
          l
        ), e.child;
      case 11:
        return of(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 7:
        return Jt(
          t,
          e,
          e.pendingProps,
          l
        ), e.child;
      case 8:
        return Jt(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 12:
        return Jt(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 10:
        return a = e.pendingProps, ul(e, e.type, a.value), Jt(
          t,
          e,
          a.children,
          l
        ), e.child;
      case 9:
        return n = e.type._context, a = e.pendingProps.children, Xl(e), n = Pt(n), a = a(n), e.flags |= 1, Jt(t, e, a, l), e.child;
      case 14:
        return sf(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return ff(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return pf(t, e, l);
      case 31:
        return a = e.pendingProps, l = e.mode, a = {
          mode: a.mode,
          children: a.children
        }, t === null ? (l = Du(
          a,
          l
        ), l.ref = e.ref, e.child = l, l.return = e, e = l) : (l = Qe(t.child, a), l.ref = e.ref, e.child = l, l.return = e, e = l), e;
      case 22:
        return df(t, e, l);
      case 24:
        return Xl(e), a = Pt(Gt), t === null ? (n = ac(), n === null && (n = Ot, u = ec(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), e.memoizedState = {
          parent: a,
          cache: n
        }, uc(e), ul(e, Gt, n)) : ((t.lanes & l) !== 0 && (ic(t, e), sn(e, null, null, l), on()), n = t.memoizedState, u = e.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), ul(e, Gt, a)) : (a = u.cache, ul(e, Gt, a), a !== n.cache && tc(
          e,
          [Gt],
          l,
          !0
        ))), Jt(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(d(156, e.tag));
  }
  function $e(t) {
    t.flags |= 4;
  }
  function xf(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !zd(e)) {
      if (e = Me.current, e !== null && ((nt & 4194048) === nt ? Ue !== null : (nt & 62914560) !== nt && (nt & 536870912) === 0 || e !== Ue))
        throw cn = nc, as;
      t.flags |= 8192;
    }
  }
  function ju(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Fr() : 536870912, t.lanes |= e, Ma |= e);
  }
  function vn(t, e) {
    if (!ot)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), e = e.sibling;
          l === null ? t.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), l = l.sibling;
          a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
  }
  function zt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, l = 0, a = 0;
    if (e)
      for (var n = t.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = t, n = n.sibling;
    else
      for (n = t.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= a, t.childLanes = l, e;
  }
  function n0(t, e, l) {
    var a = e.pendingProps;
    switch ($i(e), e.tag) {
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
        return zt(e), null;
      case 1:
        return zt(e), null;
      case 3:
        return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Le(Gt), re(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (Ia(e) ? $e(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Po())), zt(e), null;
      case 26:
        return l = e.memoizedState, t === null ? ($e(e), l !== null ? (zt(e), xf(e, l)) : (zt(e), e.flags &= -16777217)) : l ? l !== t.memoizedState ? ($e(e), zt(e), xf(e, l)) : (zt(e), e.flags &= -16777217) : (t.memoizedProps !== a && $e(e), zt(e), e.flags &= -16777217), null;
      case 27:
        Be(e), l = Y.current;
        var n = e.type;
        if (t !== null && e.stateNode != null)
          t.memoizedProps !== a && $e(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(d(166));
            return zt(e), null;
          }
          t = k.current, Ia(e) ? $o(e) : (t = xd(n, a, l), e.stateNode = t, $e(e));
        }
        return zt(e), null;
      case 5:
        if (Be(e), l = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && $e(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(d(166));
            return zt(e), null;
          }
          if (t = k.current, Ia(e))
            $o(e);
          else {
            switch (n = Vu(
              Y.current
            ), t) {
              case 1:
                t = n.createElementNS(
                  "http://www.w3.org/2000/svg",
                  l
                );
                break;
              case 2:
                t = n.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  l
                );
                break;
              default:
                switch (l) {
                  case "svg":
                    t = n.createElementNS(
                      "http://www.w3.org/2000/svg",
                      l
                    );
                    break;
                  case "math":
                    t = n.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    t = n.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                    break;
                  case "select":
                    t = typeof a.is == "string" ? n.createElement("select", { is: a.is }) : n.createElement("select"), a.multiple ? t.multiple = !0 : a.size && (t.size = a.size);
                    break;
                  default:
                    t = typeof a.is == "string" ? n.createElement(l, { is: a.is }) : n.createElement(l);
                }
            }
            t[Ft] = e, t[le] = a;
            t: for (n = e.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6)
                t.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                n.child.return = n, n = n.child;
                continue;
              }
              if (n === e) break t;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === e)
                  break t;
                n = n.return;
              }
              n.sibling.return = n.return, n = n.sibling;
            }
            e.stateNode = t;
            t: switch ($t(t, l, a), l) {
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
            t && $e(e);
          }
        }
        return zt(e), e.flags &= -16777217, null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== a && $e(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(d(166));
          if (t = Y.current, Ia(e)) {
            if (t = e.stateNode, l = e.memoizedProps, a = null, n = ee, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            t[Ft] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || hd(t.nodeValue, l)), t || Bl(e);
          } else
            t = Vu(t).createTextNode(
              a
            ), t[Ft] = e, e.stateNode = t;
        }
        return zt(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = Ia(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(d(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(d(317));
              n[Ft] = e;
            } else
              tn(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            zt(e), n = !1;
          } else
            n = Po(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return e.flags & 256 ? (Je(e), e) : (Je(e), null);
        }
        if (Je(e), (e.flags & 128) !== 0)
          return e.lanes = l, e;
        if (l = a !== null, t = t !== null && t.memoizedState !== null, l) {
          a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool);
          var u = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048);
        }
        return l !== t && l && (e.child.flags |= 8192), ju(e, e.updateQueue), zt(e), null;
      case 4:
        return re(), t === null && rr(e.stateNode.containerInfo), zt(e), null;
      case 10:
        return Le(e.type), zt(e), null;
      case 19:
        if (H(Xt), n = e.memoizedState, n === null) return zt(e), null;
        if (a = (e.flags & 128) !== 0, u = n.rendering, u === null)
          if (a) vn(n, !1);
          else {
            if (Dt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = Ou(t), u !== null) {
                  for (e.flags |= 128, vn(n, !1), t = u.updateQueue, e.updateQueue = t, ju(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    Jo(l, t), l = l.sibling;
                  return C(
                    Xt,
                    Xt.current & 1 | 2
                  ), e.child;
                }
                t = t.sibling;
              }
            n.tail !== null && Re() > Uu && (e.flags |= 128, a = !0, vn(n, !1), e.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = Ou(u), t !== null) {
              if (e.flags |= 128, a = !0, t = t.updateQueue, e.updateQueue = t, ju(e, t), vn(n, !0), n.tail === null && n.tailMode === "hidden" && !u.alternate && !ot)
                return zt(e), null;
            } else
              2 * Re() - n.renderingStartTime > Uu && l !== 536870912 && (e.flags |= 128, a = !0, vn(n, !1), e.lanes = 4194304);
          n.isBackwards ? (u.sibling = e.child, e.child = u) : (t = n.last, t !== null ? t.sibling = u : e.child = u, n.last = u);
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = Re(), e.sibling = null, t = Xt.current, C(Xt, a ? t & 1 | 2 : t & 1), e) : (zt(e), null);
      case 22:
      case 23:
        return Je(e), sc(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (zt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : zt(e), l = e.updateQueue, l !== null && ju(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && H(Ql), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Le(Gt), zt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(d(156, e.tag));
  }
  function u0(t, e) {
    switch ($i(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Le(Gt), re(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Be(e), null;
      case 13:
        if (Je(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(d(340));
          tn();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return H(Xt), null;
      case 4:
        return re(), null;
      case 10:
        return Le(e.type), null;
      case 22:
      case 23:
        return Je(e), sc(), t !== null && H(Ql), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Le(Gt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Tf(t, e) {
    switch ($i(e), e.tag) {
      case 3:
        Le(Gt), re();
        break;
      case 26:
      case 27:
      case 5:
        Be(e);
        break;
      case 4:
        re();
        break;
      case 13:
        Je(e);
        break;
      case 19:
        H(Xt);
        break;
      case 10:
        Le(e.type);
        break;
      case 22:
      case 23:
        Je(e), sc(), t !== null && H(Ql);
        break;
      case 24:
        Le(Gt);
    }
  }
  function bn(t, e) {
    try {
      var l = e.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var u = l.create, c = l.inst;
            a = u(), c.destroy = a;
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (f) {
      At(e, e.return, f);
    }
  }
  function dl(t, e, l) {
    try {
      var a = e.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var c = a.inst, f = c.destroy;
            if (f !== void 0) {
              c.destroy = void 0, n = e;
              var m = l, x = f;
              try {
                x();
              } catch (O) {
                At(
                  n,
                  m,
                  O
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (O) {
      At(e, e.return, O);
    }
  }
  function Af(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        os(e, l);
      } catch (a) {
        At(t, t.return, a);
      }
    }
  }
  function wf(t, e, l) {
    l.props = Zl(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      At(t, e, a);
    }
  }
  function pn(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
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
        typeof l == "function" ? t.refCleanup = l(a) : l.current = a;
      }
    } catch (n) {
      At(t, e, n);
    }
  }
  function He(t, e) {
    var l = t.ref, a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          At(t, e, n);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          At(t, e, n);
        }
      else l.current = null;
  }
  function Mf(t) {
    var e = t.type, l = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      At(t, t.return, n);
    }
  }
  function Yc(t, e, l) {
    try {
      var a = t.stateNode;
      E0(a, t.type, l, e), a[le] = e;
    } catch (n) {
      At(t, t.return, n);
    }
  }
  function Ef(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Sl(t.type) || t.tag === 4;
  }
  function Bc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Ef(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Sl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Gc(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Zu));
    else if (a !== 4 && (a === 27 && Sl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (Gc(t, e, l), t = t.sibling; t !== null; )
        Gc(t, e, l), t = t.sibling;
  }
  function Ru(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (a !== 4 && (a === 27 && Sl(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (Ru(t, e, l), t = t.sibling; t !== null; )
        Ru(t, e, l), t = t.sibling;
  }
  function Of(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      $t(e, a, l), e[Ft] = t, e[le] = l;
    } catch (u) {
      At(t, t.return, u);
    }
  }
  var Fe = !1, Rt = !1, Xc = !1, Nf = typeof WeakSet == "function" ? WeakSet : Set, Vt = null;
  function i0(t, e) {
    if (t = t.containerInfo, fr = Fu, t = Yo(t), Bi(t)) {
      if ("selectionStart" in t)
        var l = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          l = (l = t.ownerDocument) && l.defaultView || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch {
              l = null;
              break t;
            }
            var c = 0, f = -1, m = -1, x = 0, O = 0, z = t, T = null;
            e: for (; ; ) {
              for (var A; z !== l || n !== 0 && z.nodeType !== 3 || (f = c + n), z !== u || a !== 0 && z.nodeType !== 3 || (m = c + a), z.nodeType === 3 && (c += z.nodeValue.length), (A = z.firstChild) !== null; )
                T = z, z = A;
              for (; ; ) {
                if (z === t) break e;
                if (T === l && ++x === n && (f = c), T === u && ++O === a && (m = c), (A = z.nextSibling) !== null) break;
                z = T, T = z.parentNode;
              }
              z = A;
            }
            l = f === -1 || m === -1 ? null : { start: f, end: m };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (dr = { focusedElem: t, selectionRange: l }, Fu = !1, Vt = e; Vt !== null; )
      if (e = Vt, t = e.child, (e.subtreeFlags & 1024) !== 0 && t !== null)
        t.return = e, Vt = t;
      else
        for (; Vt !== null; ) {
          switch (e = Vt, u = e.alternate, t = e.flags, e.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                t = void 0, l = e, n = u.memoizedProps, u = u.memoizedState, a = l.stateNode;
                try {
                  var J = Zl(
                    l.type,
                    n,
                    l.elementType === l.type
                  );
                  t = a.getSnapshotBeforeUpdate(
                    J,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch (L) {
                  At(
                    l,
                    l.return,
                    L
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9)
                  gr(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      gr(t);
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
              if ((t & 1024) !== 0) throw Error(d(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, Vt = t;
            break;
          }
          Vt = e.return;
        }
  }
  function zf(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ml(t, l), a & 4 && bn(5, l);
        break;
      case 1:
        if (ml(t, l), a & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (c) {
              At(l, l.return, c);
            }
          else {
            var n = Zl(
              l.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                n,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (c) {
              At(
                l,
                l.return,
                c
              );
            }
          }
        a & 64 && Af(l), a & 512 && pn(l, l.return);
        break;
      case 3:
        if (ml(t, l), a & 64 && (t = l.updateQueue, t !== null)) {
          if (e = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            os(t, e);
          } catch (c) {
            At(l, l.return, c);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Of(l);
      case 26:
      case 5:
        ml(t, l), e === null && a & 4 && Mf(l), a & 512 && pn(l, l.return);
        break;
      case 12:
        ml(t, l);
        break;
      case 13:
        ml(t, l), a & 4 && jf(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = g0.bind(
          null,
          l
        ), R0(t, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || Fe, !a) {
          e = e !== null && e.memoizedState !== null || Rt, n = Fe;
          var u = Rt;
          Fe = a, (Rt = e) && !u ? hl(
            t,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : ml(t, l), Fe = n, Rt = u;
        }
        break;
      case 30:
        break;
      default:
        ml(t, l);
    }
  }
  function _f(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, _f(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Si(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Nt = null, ue = !1;
  function Pe(t, e, l) {
    for (l = l.child; l !== null; )
      Df(t, e, l), l = l.sibling;
  }
  function Df(t, e, l) {
    if (oe && typeof oe.onCommitFiberUnmount == "function")
      try {
        oe.onCommitFiberUnmount(Ba, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Rt || He(l, e), Pe(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Rt || He(l, e);
        var a = Nt, n = ue;
        Sl(l.type) && (Nt = l.stateNode, ue = !1), Pe(
          t,
          e,
          l
        ), Nn(l.stateNode), Nt = a, ue = n;
        break;
      case 5:
        Rt || He(l, e);
      case 6:
        if (a = Nt, n = ue, Nt = null, Pe(
          t,
          e,
          l
        ), Nt = a, ue = n, Nt !== null)
          if (ue)
            try {
              (Nt.nodeType === 9 ? Nt.body : Nt.nodeName === "HTML" ? Nt.ownerDocument.body : Nt).removeChild(l.stateNode);
            } catch (u) {
              At(
                l,
                e,
                u
              );
            }
          else
            try {
              Nt.removeChild(l.stateNode);
            } catch (u) {
              At(
                l,
                e,
                u
              );
            }
        break;
      case 18:
        Nt !== null && (ue ? (t = Nt, pd(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), Hn(t)) : pd(Nt, l.stateNode));
        break;
      case 4:
        a = Nt, n = ue, Nt = l.stateNode.containerInfo, ue = !0, Pe(
          t,
          e,
          l
        ), Nt = a, ue = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Rt || dl(2, l, e), Rt || dl(4, l, e), Pe(
          t,
          e,
          l
        );
        break;
      case 1:
        Rt || (He(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && wf(
          l,
          e,
          a
        )), Pe(
          t,
          e,
          l
        );
        break;
      case 21:
        Pe(
          t,
          e,
          l
        );
        break;
      case 22:
        Rt = (a = Rt) || l.memoizedState !== null, Pe(
          t,
          e,
          l
        ), Rt = a;
        break;
      default:
        Pe(
          t,
          e,
          l
        );
    }
  }
  function jf(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Hn(t);
      } catch (l) {
        At(e, e.return, l);
      }
  }
  function c0(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Nf()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Nf()), e;
      default:
        throw Error(d(435, t.tag));
    }
  }
  function Qc(t, e) {
    var l = c0(t);
    e.forEach(function(a) {
      var n = y0.bind(null, t, a);
      l.has(a) || (l.add(a), a.then(n, n));
    });
  }
  function me(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a], u = t, c = e, f = c;
        t: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (Sl(f.type)) {
                Nt = f.stateNode, ue = !1;
                break t;
              }
              break;
            case 5:
              Nt = f.stateNode, ue = !1;
              break t;
            case 3:
            case 4:
              Nt = f.stateNode.containerInfo, ue = !0;
              break t;
          }
          f = f.return;
        }
        if (Nt === null) throw Error(d(160));
        Df(u, c, n), Nt = null, ue = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; )
        Rf(e, t), e = e.sibling;
  }
  var ze = null;
  function Rf(t, e) {
    var l = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        me(e, t), he(t), a & 4 && (dl(3, t, t.return), bn(3, t), dl(5, t, t.return));
        break;
      case 1:
        me(e, t), he(t), a & 512 && (Rt || l === null || He(l, l.return)), a & 64 && Fe && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = ze;
        if (me(e, t), he(t), a & 512 && (Rt || l === null || He(l, l.return)), a & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (a = t.memoizedState, l === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, l = t.memoizedProps, n = n.ownerDocument || n;
                  e: switch (a) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[Qa] || u[Ft] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), $t(u, a, l), u[Ft] = t, kt(u), a = u;
                      break t;
                    case "link":
                      var c = Od(
                        "link",
                        "href",
                        n
                      ).get(a + (l.href || ""));
                      if (c) {
                        for (var f = 0; f < c.length; f++)
                          if (u = c[f], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            c.splice(f, 1);
                            break e;
                          }
                      }
                      u = n.createElement(a), $t(u, a, l), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (c = Od(
                        "meta",
                        "content",
                        n
                      ).get(a + (l.content || ""))) {
                        for (f = 0; f < c.length; f++)
                          if (u = c[f], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            c.splice(f, 1);
                            break e;
                          }
                      }
                      u = n.createElement(a), $t(u, a, l), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(d(468, a));
                  }
                  u[Ft] = t, kt(u), a = u;
                }
                t.stateNode = a;
              } else
                Nd(
                  n,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Ed(
                n,
                a,
                t.memoizedProps
              );
          else
            u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? Nd(
              n,
              t.type,
              t.stateNode
            ) : Ed(
              n,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && Yc(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        me(e, t), he(t), a & 512 && (Rt || l === null || He(l, l.return)), l !== null && a & 4 && Yc(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (me(e, t), he(t), a & 512 && (Rt || l === null || He(l, l.return)), t.flags & 32) {
          n = t.stateNode;
          try {
            aa(n, "");
          } catch (A) {
            At(t, t.return, A);
          }
        }
        a & 4 && t.stateNode != null && (n = t.memoizedProps, Yc(
          t,
          n,
          l !== null ? l.memoizedProps : n
        )), a & 1024 && (Xc = !0);
        break;
      case 6:
        if (me(e, t), he(t), a & 4) {
          if (t.stateNode === null)
            throw Error(d(162));
          a = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = a;
          } catch (A) {
            At(t, t.return, A);
          }
        }
        break;
      case 3:
        if (Ju = null, n = ze, ze = Lu(e.containerInfo), me(e, t), ze = n, he(t), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Hn(e.containerInfo);
          } catch (A) {
            At(t, t.return, A);
          }
        Xc && (Xc = !1, Cf(t));
        break;
      case 4:
        a = ze, ze = Lu(
          t.stateNode.containerInfo
        ), me(e, t), he(t), ze = a;
        break;
      case 12:
        me(e, t), he(t);
        break;
      case 13:
        me(e, t), he(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Jc = Re()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Qc(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var m = l !== null && l.memoizedState !== null, x = Fe, O = Rt;
        if (Fe = x || n, Rt = O || m, me(e, t), Rt = O, Fe = x, he(t), a & 8192)
          t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || m || Fe || Rt || Vl(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                m = l = e;
                try {
                  if (u = m.stateNode, n)
                    c = u.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    f = m.stateNode;
                    var z = m.memoizedProps.style, T = z != null && z.hasOwnProperty("display") ? z.display : null;
                    f.style.display = T == null || typeof T == "boolean" ? "" : ("" + T).trim();
                  }
                } catch (A) {
                  At(m, m.return, A);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                m = e;
                try {
                  m.stateNode.nodeValue = n ? "" : m.memoizedProps;
                } catch (A) {
                  At(m, m.return, A);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), e = e.return;
            }
            l === e && (l = null), e.sibling.return = e.return, e = e.sibling;
          }
        a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Qc(t, l))));
        break;
      case 19:
        me(e, t), he(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Qc(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        me(e, t), he(t);
    }
  }
  function he(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (Ef(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(d(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode, u = Bc(t);
            Ru(t, u, n);
            break;
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (aa(c, ""), l.flags &= -33);
            var f = Bc(t);
            Ru(t, f, c);
            break;
          case 3:
          case 4:
            var m = l.stateNode.containerInfo, x = Bc(t);
            Gc(
              t,
              x,
              m
            );
            break;
          default:
            throw Error(d(161));
        }
      } catch (O) {
        At(t, t.return, O);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Cf(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Cf(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function ml(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        zf(t, e.alternate, e), e = e.sibling;
  }
  function Vl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          dl(4, e, e.return), Vl(e);
          break;
        case 1:
          He(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && wf(
            e,
            e.return,
            l
          ), Vl(e);
          break;
        case 27:
          Nn(e.stateNode);
        case 26:
        case 5:
          He(e, e.return), Vl(e);
          break;
        case 22:
          e.memoizedState === null && Vl(e);
          break;
        case 30:
          Vl(e);
          break;
        default:
          Vl(e);
      }
      t = t.sibling;
    }
  }
  function hl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate, n = t, u = e, c = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          hl(
            n,
            u,
            l
          ), bn(4, u);
          break;
        case 1:
          if (hl(
            n,
            u,
            l
          ), a = u, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (x) {
              At(a, a.return, x);
            }
          if (a = u, n = a.updateQueue, n !== null) {
            var f = a.stateNode;
            try {
              var m = n.shared.hiddenCallbacks;
              if (m !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++)
                  rs(m[n], f);
            } catch (x) {
              At(a, a.return, x);
            }
          }
          l && c & 64 && Af(u), pn(u, u.return);
          break;
        case 27:
          Of(u);
        case 26:
        case 5:
          hl(
            n,
            u,
            l
          ), l && a === null && c & 4 && Mf(u), pn(u, u.return);
          break;
        case 12:
          hl(
            n,
            u,
            l
          );
          break;
        case 13:
          hl(
            n,
            u,
            l
          ), l && c & 4 && jf(n, u);
          break;
        case 22:
          u.memoizedState === null && hl(
            n,
            u,
            l
          ), pn(u, u.return);
          break;
        case 30:
          break;
        default:
          hl(
            n,
            u,
            l
          );
      }
      e = e.sibling;
    }
  }
  function kc(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && an(l));
  }
  function Zc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && an(t));
  }
  function qe(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Uf(
          t,
          e,
          l,
          a
        ), e = e.sibling;
  }
  function Uf(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        qe(
          t,
          e,
          l,
          a
        ), n & 2048 && bn(9, e);
        break;
      case 1:
        qe(
          t,
          e,
          l,
          a
        );
        break;
      case 3:
        qe(
          t,
          e,
          l,
          a
        ), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && an(t)));
        break;
      case 12:
        if (n & 2048) {
          qe(
            t,
            e,
            l,
            a
          ), t = e.stateNode;
          try {
            var u = e.memoizedProps, c = u.id, f = u.onPostCommit;
            typeof f == "function" && f(
              c,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (m) {
            At(e, e.return, m);
          }
        } else
          qe(
            t,
            e,
            l,
            a
          );
        break;
      case 13:
        qe(
          t,
          e,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, c = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? qe(
          t,
          e,
          l,
          a
        ) : Sn(t, e) : u._visibility & 2 ? qe(
          t,
          e,
          l,
          a
        ) : (u._visibility |= 2, Ta(
          t,
          e,
          l,
          a,
          (e.subtreeFlags & 10256) !== 0
        )), n & 2048 && kc(c, e);
        break;
      case 24:
        qe(
          t,
          e,
          l,
          a
        ), n & 2048 && Zc(e.alternate, e);
        break;
      default:
        qe(
          t,
          e,
          l,
          a
        );
    }
  }
  function Ta(t, e, l, a, n) {
    for (n = n && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var u = t, c = e, f = l, m = a, x = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Ta(
            u,
            c,
            f,
            m,
            n
          ), bn(8, c);
          break;
        case 23:
          break;
        case 22:
          var O = c.stateNode;
          c.memoizedState !== null ? O._visibility & 2 ? Ta(
            u,
            c,
            f,
            m,
            n
          ) : Sn(
            u,
            c
          ) : (O._visibility |= 2, Ta(
            u,
            c,
            f,
            m,
            n
          )), n && x & 2048 && kc(
            c.alternate,
            c
          );
          break;
        case 24:
          Ta(
            u,
            c,
            f,
            m,
            n
          ), n && x & 2048 && Zc(c.alternate, c);
          break;
        default:
          Ta(
            u,
            c,
            f,
            m,
            n
          );
      }
      e = e.sibling;
    }
  }
  function Sn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, a = e, n = a.flags;
        switch (a.tag) {
          case 22:
            Sn(l, a), n & 2048 && kc(
              a.alternate,
              a
            );
            break;
          case 24:
            Sn(l, a), n & 2048 && Zc(a.alternate, a);
            break;
          default:
            Sn(l, a);
        }
        e = e.sibling;
      }
  }
  var xn = 8192;
  function Aa(t) {
    if (t.subtreeFlags & xn)
      for (t = t.child; t !== null; )
        Hf(t), t = t.sibling;
  }
  function Hf(t) {
    switch (t.tag) {
      case 26:
        Aa(t), t.flags & xn && t.memoizedState !== null && L0(
          ze,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Aa(t);
        break;
      case 3:
      case 4:
        var e = ze;
        ze = Lu(t.stateNode.containerInfo), Aa(t), ze = e;
        break;
      case 22:
        t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = xn, xn = 16777216, Aa(t), xn = e) : Aa(t));
        break;
      default:
        Aa(t);
    }
  }
  function qf(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Tn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          Vt = a, Bf(
            a,
            t
          );
        }
      qf(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Yf(t), t = t.sibling;
  }
  function Yf(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Tn(t), t.flags & 2048 && dl(9, t, t.return);
        break;
      case 3:
        Tn(t);
        break;
      case 12:
        Tn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Cu(t)) : Tn(t);
        break;
      default:
        Tn(t);
    }
  }
  function Cu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          Vt = a, Bf(
            a,
            t
          );
        }
      qf(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          dl(8, e, e.return), Cu(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, Cu(e));
          break;
        default:
          Cu(e);
      }
      t = t.sibling;
    }
  }
  function Bf(t, e) {
    for (; Vt !== null; ) {
      var l = Vt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          dl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          an(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, Vt = a;
      else
        t: for (l = t; Vt !== null; ) {
          a = Vt;
          var n = a.sibling, u = a.return;
          if (_f(a), a === l) {
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
  var r0 = {
    getCacheForType: function(t) {
      var e = Pt(Gt), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    }
  }, o0 = typeof WeakMap == "function" ? WeakMap : Map, ht = 0, Ot = null, lt = null, nt = 0, gt = 0, ge = null, gl = !1, wa = !1, Vc = !1, Ie = 0, Dt = 0, yl = 0, Ll = 0, Lc = 0, Ee = 0, Ma = 0, An = null, ie = null, Kc = !1, Jc = 0, Uu = 1 / 0, Hu = null, vl = null, Wt = 0, bl = null, Ea = null, Oa = 0, Wc = 0, $c = null, Gf = null, wn = 0, Fc = null;
  function ye() {
    if ((ht & 2) !== 0 && nt !== 0)
      return nt & -nt;
    if (D.T !== null) {
      var t = ha;
      return t !== 0 ? t : nr();
    }
    return to();
  }
  function Xf() {
    Ee === 0 && (Ee = (nt & 536870912) === 0 || ot ? $r() : 536870912);
    var t = Me.current;
    return t !== null && (t.flags |= 32), Ee;
  }
  function ve(t, e, l) {
    (t === Ot && (gt === 2 || gt === 9) || t.cancelPendingCommit !== null) && (Na(t, 0), pl(
      t,
      nt,
      Ee,
      !1
    )), Xa(t, l), ((ht & 2) === 0 || t !== Ot) && (t === Ot && ((ht & 2) === 0 && (Ll |= l), Dt === 4 && pl(
      t,
      nt,
      Ee,
      !1
    )), Ye(t));
  }
  function Qf(t, e, l) {
    if ((ht & 6) !== 0) throw Error(d(327));
    var a = !l && (e & 124) === 0 && (e & t.expiredLanes) === 0 || Ga(t, e), n = a ? d0(t, e) : tr(t, e, !0), u = a;
    do {
      if (n === 0) {
        wa && !a && pl(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, u && !s0(l)) {
          n = tr(t, e, !1), u = !1;
          continue;
        }
        if (n === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u)
            var c = 0;
          else
            c = t.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            e = c;
            t: {
              var f = t;
              n = An;
              var m = f.current.memoizedState.isDehydrated;
              if (m && (Na(f, c).flags |= 256), c = tr(
                f,
                c,
                !1
              ), c !== 2) {
                if (Vc && !m) {
                  f.errorRecoveryDisabledLanes |= u, Ll |= u, n = 4;
                  break t;
                }
                u = ie, ie = n, u !== null && (ie === null ? ie = u : ie.push.apply(
                  ie,
                  u
                ));
              }
              n = c;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Na(t, 0), pl(t, e, 0, !0);
          break;
        }
        t: {
          switch (a = t, u = n, u) {
            case 0:
            case 1:
              throw Error(d(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              pl(
                a,
                e,
                Ee,
                !gl
              );
              break t;
            case 2:
              ie = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(d(329));
          }
          if ((e & 62914560) === e && (n = Jc + 300 - Re(), 10 < n)) {
            if (pl(
              a,
              e,
              Ee,
              !gl
            ), Kn(a, 0, !0) !== 0) break t;
            a.timeoutHandle = vd(
              kf.bind(
                null,
                a,
                l,
                ie,
                Hu,
                Kc,
                e,
                Ee,
                Ll,
                Ma,
                gl,
                u,
                2,
                -0,
                0
              ),
              n
            );
            break t;
          }
          kf(
            a,
            l,
            ie,
            Hu,
            Kc,
            e,
            Ee,
            Ll,
            Ma,
            gl,
            u,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Ye(t);
  }
  function kf(t, e, l, a, n, u, c, f, m, x, O, z, T, A) {
    if (t.timeoutHandle = -1, z = e.subtreeFlags, (z & 8192 || (z & 16785408) === 16785408) && (Dn = { stylesheets: null, count: 0, unsuspend: V0 }, Hf(e), z = K0(), z !== null)) {
      t.cancelPendingCommit = z(
        $f.bind(
          null,
          t,
          e,
          u,
          l,
          a,
          n,
          c,
          f,
          m,
          O,
          1,
          T,
          A
        )
      ), pl(t, u, c, !x);
      return;
    }
    $f(
      t,
      e,
      u,
      l,
      a,
      n,
      c,
      f,
      m
    );
  }
  function s0(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var n = l[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!fe(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = e.child, e.subtreeFlags & 16384 && l !== null)
        l.return = e, e = l;
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
  function pl(t, e, l, a) {
    e &= ~Lc, e &= ~Ll, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var n = e; 0 < n; ) {
      var u = 31 - se(n), c = 1 << u;
      a[u] = -1, n &= ~c;
    }
    l !== 0 && Pr(t, l, e);
  }
  function qu() {
    return (ht & 6) === 0 ? (Mn(0), !1) : !0;
  }
  function Pc() {
    if (lt !== null) {
      if (gt === 0)
        var t = lt.return;
      else
        t = lt, Ve = Gl = null, gc(t), Sa = null, gn = 0, t = lt;
      for (; t !== null; )
        Tf(t.alternate, t), t = t.return;
      lt = null;
    }
  }
  function Na(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, N0(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), Pc(), Ot = t, lt = l = Qe(t.current, null), nt = e, gt = 0, ge = null, gl = !1, wa = Ga(t, e), Vc = !1, Ma = Ee = Lc = Ll = yl = Dt = 0, ie = An = null, Kc = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - se(a), u = 1 << n;
        e |= t[n], a &= ~u;
      }
    return Ie = e, uu(), l;
  }
  function Zf(t, e) {
    P = null, D.H = wu, e === un || e === hu ? (e = is(), gt = 3) : e === as ? (e = is(), gt = 4) : gt = e === rf ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, ge = e, lt === null && (Dt = 1, zu(
      t,
      xe(e, t.current)
    ));
  }
  function Vf() {
    var t = D.H;
    return D.H = wu, t === null ? wu : t;
  }
  function Lf() {
    var t = D.A;
    return D.A = r0, t;
  }
  function Ic() {
    Dt = 4, gl || (nt & 4194048) !== nt && Me.current !== null || (wa = !0), (yl & 134217727) === 0 && (Ll & 134217727) === 0 || Ot === null || pl(
      Ot,
      nt,
      Ee,
      !1
    );
  }
  function tr(t, e, l) {
    var a = ht;
    ht |= 2;
    var n = Vf(), u = Lf();
    (Ot !== t || nt !== e) && (Hu = null, Na(t, e)), e = !1;
    var c = Dt;
    t: do
      try {
        if (gt !== 0 && lt !== null) {
          var f = lt, m = ge;
          switch (gt) {
            case 8:
              Pc(), c = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Me.current === null && (e = !0);
              var x = gt;
              if (gt = 0, ge = null, za(t, f, m, x), l && wa) {
                c = 0;
                break t;
              }
              break;
            default:
              x = gt, gt = 0, ge = null, za(t, f, m, x);
          }
        }
        f0(), c = Dt;
        break;
      } catch (O) {
        Zf(t, O);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Ve = Gl = null, ht = a, D.H = n, D.A = u, lt === null && (Ot = null, nt = 0, uu()), c;
  }
  function f0() {
    for (; lt !== null; ) Kf(lt);
  }
  function d0(t, e) {
    var l = ht;
    ht |= 2;
    var a = Vf(), n = Lf();
    Ot !== t || nt !== e ? (Hu = null, Uu = Re() + 500, Na(t, e)) : wa = Ga(
      t,
      e
    );
    t: do
      try {
        if (gt !== 0 && lt !== null) {
          e = lt;
          var u = ge;
          e: switch (gt) {
            case 1:
              gt = 0, ge = null, za(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (ns(u)) {
                gt = 0, ge = null, Jf(e);
                break;
              }
              e = function() {
                gt !== 2 && gt !== 9 || Ot !== t || (gt = 7), Ye(t);
              }, u.then(e, e);
              break t;
            case 3:
              gt = 7;
              break t;
            case 4:
              gt = 5;
              break t;
            case 7:
              ns(u) ? (gt = 0, ge = null, Jf(e)) : (gt = 0, ge = null, za(t, e, u, 7));
              break;
            case 5:
              var c = null;
              switch (lt.tag) {
                case 26:
                  c = lt.memoizedState;
                case 5:
                case 27:
                  var f = lt;
                  if (!c || zd(c)) {
                    gt = 0, ge = null;
                    var m = f.sibling;
                    if (m !== null) lt = m;
                    else {
                      var x = f.return;
                      x !== null ? (lt = x, Yu(x)) : lt = null;
                    }
                    break e;
                  }
              }
              gt = 0, ge = null, za(t, e, u, 5);
              break;
            case 6:
              gt = 0, ge = null, za(t, e, u, 6);
              break;
            case 8:
              Pc(), Dt = 6;
              break t;
            default:
              throw Error(d(462));
          }
        }
        m0();
        break;
      } catch (O) {
        Zf(t, O);
      }
    while (!0);
    return Ve = Gl = null, D.H = a, D.A = n, ht = l, lt !== null ? 0 : (Ot = null, nt = 0, uu(), Dt);
  }
  function m0() {
    for (; lt !== null && !Um(); )
      Kf(lt);
  }
  function Kf(t) {
    var e = Sf(t.alternate, t, Ie);
    t.memoizedProps = t.pendingProps, e === null ? Yu(t) : lt = e;
  }
  function Jf(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = hf(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          nt
        );
        break;
      case 11:
        e = hf(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          nt
        );
        break;
      case 5:
        gc(e);
      default:
        Tf(l, e), e = lt = Jo(e, Ie), e = Sf(l, e, Ie);
    }
    t.memoizedProps = t.pendingProps, e === null ? Yu(t) : lt = e;
  }
  function za(t, e, l, a) {
    Ve = Gl = null, gc(e), Sa = null, gn = 0;
    var n = e.return;
    try {
      if (l0(
        t,
        n,
        e,
        l,
        nt
      )) {
        Dt = 1, zu(
          t,
          xe(l, t.current)
        ), lt = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw lt = n, u;
      Dt = 1, zu(
        t,
        xe(l, t.current)
      ), lt = null;
      return;
    }
    e.flags & 32768 ? (ot || a === 1 ? t = !0 : wa || (nt & 536870912) !== 0 ? t = !1 : (gl = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Me.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Wf(e, t)) : Yu(e);
  }
  function Yu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Wf(
          e,
          gl
        );
        return;
      }
      t = e.return;
      var l = n0(
        e.alternate,
        e,
        Ie
      );
      if (l !== null) {
        lt = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        lt = e;
        return;
      }
      lt = e = t;
    } while (e !== null);
    Dt === 0 && (Dt = 5);
  }
  function Wf(t, e) {
    do {
      var l = u0(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, lt = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        lt = t;
        return;
      }
      lt = t = l;
    } while (t !== null);
    Dt = 6, lt = null;
  }
  function $f(t, e, l, a, n, u, c, f, m) {
    t.cancelPendingCommit = null;
    do
      Bu();
    while (Wt !== 0);
    if ((ht & 6) !== 0) throw Error(d(327));
    if (e !== null) {
      if (e === t.current) throw Error(d(177));
      if (u = e.lanes | e.childLanes, u |= Zi, Vm(
        t,
        l,
        u,
        c,
        f,
        m
      ), t === Ot && (lt = Ot = null, nt = 0), Ea = e, bl = t, Oa = l, Wc = u, $c = n, Gf = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, v0(Zn, function() {
        return ed(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = D.T, D.T = null, n = E.p, E.p = 2, c = ht, ht |= 4;
        try {
          i0(t, e, l);
        } finally {
          ht = c, E.p = n, D.T = a;
        }
      }
      Wt = 1, Ff(), Pf(), If();
    }
  }
  function Ff() {
    if (Wt === 1) {
      Wt = 0;
      var t = bl, e = Ea, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = D.T, D.T = null;
        var a = E.p;
        E.p = 2;
        var n = ht;
        ht |= 4;
        try {
          Rf(e, t);
          var u = dr, c = Yo(t.containerInfo), f = u.focusedElem, m = u.selectionRange;
          if (c !== f && f && f.ownerDocument && qo(
            f.ownerDocument.documentElement,
            f
          )) {
            if (m !== null && Bi(f)) {
              var x = m.start, O = m.end;
              if (O === void 0 && (O = x), "selectionStart" in f)
                f.selectionStart = x, f.selectionEnd = Math.min(
                  O,
                  f.value.length
                );
              else {
                var z = f.ownerDocument || document, T = z && z.defaultView || window;
                if (T.getSelection) {
                  var A = T.getSelection(), J = f.textContent.length, L = Math.min(m.start, J), xt = m.end === void 0 ? L : Math.min(m.end, J);
                  !A.extend && L > xt && (c = xt, xt = L, L = c);
                  var y = Ho(
                    f,
                    L
                  ), h = Ho(
                    f,
                    xt
                  );
                  if (y && h && (A.rangeCount !== 1 || A.anchorNode !== y.node || A.anchorOffset !== y.offset || A.focusNode !== h.node || A.focusOffset !== h.offset)) {
                    var b = z.createRange();
                    b.setStart(y.node, y.offset), A.removeAllRanges(), L > xt ? (A.addRange(b), A.extend(h.node, h.offset)) : (b.setEnd(h.node, h.offset), A.addRange(b));
                  }
                }
              }
            }
            for (z = [], A = f; A = A.parentNode; )
              A.nodeType === 1 && z.push({
                element: A,
                left: A.scrollLeft,
                top: A.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < z.length; f++) {
              var N = z[f];
              N.element.scrollLeft = N.left, N.element.scrollTop = N.top;
            }
          }
          Fu = !!fr, dr = fr = null;
        } finally {
          ht = n, E.p = a, D.T = l;
        }
      }
      t.current = e, Wt = 2;
    }
  }
  function Pf() {
    if (Wt === 2) {
      Wt = 0;
      var t = bl, e = Ea, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = D.T, D.T = null;
        var a = E.p;
        E.p = 2;
        var n = ht;
        ht |= 4;
        try {
          zf(t, e.alternate, e);
        } finally {
          ht = n, E.p = a, D.T = l;
        }
      }
      Wt = 3;
    }
  }
  function If() {
    if (Wt === 4 || Wt === 3) {
      Wt = 0, Hm();
      var t = bl, e = Ea, l = Oa, a = Gf;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Wt = 5 : (Wt = 0, Ea = bl = null, td(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (vl = null), bi(l), e = e.stateNode, oe && typeof oe.onCommitFiberRoot == "function")
        try {
          oe.onCommitFiberRoot(
            Ba,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        e = D.T, n = E.p, E.p = 2, D.T = null;
        try {
          for (var u = t.onRecoverableError, c = 0; c < a.length; c++) {
            var f = a[c];
            u(f.value, {
              componentStack: f.stack
            });
          }
        } finally {
          D.T = e, E.p = n;
        }
      }
      (Oa & 3) !== 0 && Bu(), Ye(t), n = t.pendingLanes, (l & 4194090) !== 0 && (n & 42) !== 0 ? t === Fc ? wn++ : (wn = 0, Fc = t) : wn = 0, Mn(0);
    }
  }
  function td(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, an(e)));
  }
  function Bu(t) {
    return Ff(), Pf(), If(), ed();
  }
  function ed() {
    if (Wt !== 5) return !1;
    var t = bl, e = Wc;
    Wc = 0;
    var l = bi(Oa), a = D.T, n = E.p;
    try {
      E.p = 32 > l ? 32 : l, D.T = null, l = $c, $c = null;
      var u = bl, c = Oa;
      if (Wt = 0, Ea = bl = null, Oa = 0, (ht & 6) !== 0) throw Error(d(331));
      var f = ht;
      if (ht |= 4, Yf(u.current), Uf(
        u,
        u.current,
        c,
        l
      ), ht = f, Mn(0, !1), oe && typeof oe.onPostCommitFiberRoot == "function")
        try {
          oe.onPostCommitFiberRoot(Ba, u);
        } catch {
        }
      return !0;
    } finally {
      E.p = n, D.T = a, td(t, e);
    }
  }
  function ld(t, e, l) {
    e = xe(l, e), e = zc(t.stateNode, e, 2), t = rl(t, e, 2), t !== null && (Xa(t, 2), Ye(t));
  }
  function At(t, e, l) {
    if (t.tag === 3)
      ld(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          ld(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (vl === null || !vl.has(a))) {
            t = xe(l, t), l = uf(2), a = rl(e, l, 2), a !== null && (cf(
              l,
              a,
              e,
              t
            ), Xa(a, 2), Ye(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function er(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new o0();
      var n = /* @__PURE__ */ new Set();
      a.set(e, n);
    } else
      n = a.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(e, n));
    n.has(l) || (Vc = !0, n.add(l), t = h0.bind(null, t, e, l), e.then(t, t));
  }
  function h0(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Ot === t && (nt & l) === l && (Dt === 4 || Dt === 3 && (nt & 62914560) === nt && 300 > Re() - Jc ? (ht & 2) === 0 && Na(t, 0) : Lc |= l, Ma === nt && (Ma = 0)), Ye(t);
  }
  function ad(t, e) {
    e === 0 && (e = Fr()), t = sa(t, e), t !== null && (Xa(t, e), Ye(t));
  }
  function g0(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), ad(t, l);
  }
  function y0(t, e) {
    var l = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode, n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(d(314));
    }
    a !== null && a.delete(e), ad(t, l);
  }
  function v0(t, e) {
    return hi(t, e);
  }
  var Gu = null, _a = null, lr = !1, Xu = !1, ar = !1, Kl = 0;
  function Ye(t) {
    t !== _a && t.next === null && (_a === null ? Gu = _a = t : _a = _a.next = t), Xu = !0, lr || (lr = !0, p0());
  }
  function Mn(t, e) {
    if (!ar && Xu) {
      ar = !0;
      do
        for (var l = !1, a = Gu; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var c = a.suspendedLanes, f = a.pingedLanes;
              u = (1 << 31 - se(42 | t) + 1) - 1, u &= n & ~(c & ~f), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, cd(a, u));
          } else
            u = nt, u = Kn(
              a,
              a === Ot ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Ga(a, u) || (l = !0, cd(a, u));
          a = a.next;
        }
      while (l);
      ar = !1;
    }
  }
  function b0() {
    nd();
  }
  function nd() {
    Xu = lr = !1;
    var t = 0;
    Kl !== 0 && (O0() && (t = Kl), Kl = 0);
    for (var e = Re(), l = null, a = Gu; a !== null; ) {
      var n = a.next, u = ud(a, e);
      u === 0 ? (a.next = null, l === null ? Gu = n : l.next = n, n === null && (_a = l)) : (l = a, (t !== 0 || (u & 3) !== 0) && (Xu = !0)), a = n;
    }
    Mn(t);
  }
  function ud(t, e) {
    for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var c = 31 - se(u), f = 1 << c, m = n[c];
      m === -1 ? ((f & l) === 0 || (f & a) !== 0) && (n[c] = Zm(f, e)) : m <= e && (t.expiredLanes |= f), u &= ~f;
    }
    if (e = Ot, l = nt, l = Kn(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, l === 0 || t === e && (gt === 2 || gt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && gi(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || Ga(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (a !== null && gi(a), bi(l)) {
        case 2:
        case 8:
          l = Jr;
          break;
        case 32:
          l = Zn;
          break;
        case 268435456:
          l = Wr;
          break;
        default:
          l = Zn;
      }
      return a = id.bind(null, t), l = hi(l, a), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return a !== null && a !== null && gi(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function id(t, e) {
    if (Wt !== 0 && Wt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (Bu() && t.callbackNode !== l)
      return null;
    var a = nt;
    return a = Kn(
      t,
      t === Ot ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (Qf(t, a, e), ud(t, Re()), t.callbackNode != null && t.callbackNode === l ? id.bind(null, t) : null);
  }
  function cd(t, e) {
    if (Bu()) return null;
    Qf(t, e, !0);
  }
  function p0() {
    z0(function() {
      (ht & 6) !== 0 ? hi(
        Kr,
        b0
      ) : nd();
    });
  }
  function nr() {
    return Kl === 0 && (Kl = $r()), Kl;
  }
  function rd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Pn("" + t);
  }
  function od(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function S0(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var u = rd(
        (n[le] || null).action
      ), c = a.submitter;
      c && (e = (e = c[le] || null) ? rd(e.formAction) : c.getAttribute("formAction"), e !== null && (u = e, c = null));
      var f = new lu(
        "action",
        "action",
        null,
        a,
        n
      );
      t.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Kl !== 0) {
                  var m = c ? od(n, c) : new FormData(n);
                  wc(
                    l,
                    {
                      pending: !0,
                      data: m,
                      method: n.method,
                      action: u
                    },
                    null,
                    m
                  );
                }
              } else
                typeof u == "function" && (f.preventDefault(), m = c ? od(n, c) : new FormData(n), wc(
                  l,
                  {
                    pending: !0,
                    data: m,
                    method: n.method,
                    action: u
                  },
                  u,
                  m
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var ur = 0; ur < ki.length; ur++) {
    var ir = ki[ur], x0 = ir.toLowerCase(), T0 = ir[0].toUpperCase() + ir.slice(1);
    Ne(
      x0,
      "on" + T0
    );
  }
  Ne(Xo, "onAnimationEnd"), Ne(Qo, "onAnimationIteration"), Ne(ko, "onAnimationStart"), Ne("dblclick", "onDoubleClick"), Ne("focusin", "onFocus"), Ne("focusout", "onBlur"), Ne(Bh, "onTransitionRun"), Ne(Gh, "onTransitionStart"), Ne(Xh, "onTransitionCancel"), Ne(Zo, "onTransitionEnd"), ta("onMouseEnter", ["mouseout", "mouseover"]), ta("onMouseLeave", ["mouseout", "mouseover"]), ta("onPointerEnter", ["pointerout", "pointerover"]), ta("onPointerLeave", ["pointerout", "pointerover"]), Dl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Dl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Dl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Dl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Dl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Dl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var En = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), A0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(En)
  );
  function sd(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l], n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var c = a.length - 1; 0 <= c; c--) {
            var f = a[c], m = f.instance, x = f.currentTarget;
            if (f = f.listener, m !== u && n.isPropagationStopped())
              break t;
            u = f, n.currentTarget = x;
            try {
              u(n);
            } catch (O) {
              Nu(O);
            }
            n.currentTarget = null, u = m;
          }
        else
          for (c = 0; c < a.length; c++) {
            if (f = a[c], m = f.instance, x = f.currentTarget, f = f.listener, m !== u && n.isPropagationStopped())
              break t;
            u = f, n.currentTarget = x;
            try {
              u(n);
            } catch (O) {
              Nu(O);
            }
            n.currentTarget = null, u = m;
          }
      }
    }
  }
  function at(t, e) {
    var l = e[pi];
    l === void 0 && (l = e[pi] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    l.has(a) || (fd(e, t, 2, !1), l.add(a));
  }
  function cr(t, e, l) {
    var a = 0;
    e && (a |= 4), fd(
      l,
      t,
      a,
      e
    );
  }
  var Qu = "_reactListening" + Math.random().toString(36).slice(2);
  function rr(t) {
    if (!t[Qu]) {
      t[Qu] = !0, lo.forEach(function(l) {
        l !== "selectionchange" && (A0.has(l) || cr(l, !1, t), cr(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Qu] || (e[Qu] = !0, cr("selectionchange", !1, e));
    }
  }
  function fd(t, e, l, a) {
    switch (Ud(e)) {
      case 2:
        var n = $0;
        break;
      case 8:
        n = F0;
        break;
      default:
        n = Tr;
    }
    l = n.bind(
      null,
      e,
      l,
      t
    ), n = void 0, !_i || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: n
    }) : t.addEventListener(e, l, !0) : n !== void 0 ? t.addEventListener(e, l, {
      passive: n
    }) : t.addEventListener(e, l, !1);
  }
  function or(t, e, l, a, n) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var f = a.stateNode.containerInfo;
          if (f === n) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var m = c.tag;
              if ((m === 3 || m === 4) && c.stateNode.containerInfo === n)
                return;
              c = c.return;
            }
          for (; f !== null; ) {
            if (c = Fl(f), c === null) return;
            if (m = c.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              a = u = c;
              continue t;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    vo(function() {
      var x = u, O = Ni(l), z = [];
      t: {
        var T = Vo.get(t);
        if (T !== void 0) {
          var A = lu, J = t;
          switch (t) {
            case "keypress":
              if (tu(l) === 0) break t;
            case "keydown":
            case "keyup":
              A = vh;
              break;
            case "focusin":
              J = "focus", A = Ci;
              break;
            case "focusout":
              J = "blur", A = Ci;
              break;
            case "beforeblur":
            case "afterblur":
              A = Ci;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              A = So;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              A = uh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              A = Sh;
              break;
            case Xo:
            case Qo:
            case ko:
              A = rh;
              break;
            case Zo:
              A = Th;
              break;
            case "scroll":
            case "scrollend":
              A = ah;
              break;
            case "wheel":
              A = wh;
              break;
            case "copy":
            case "cut":
            case "paste":
              A = sh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              A = To;
              break;
            case "toggle":
            case "beforetoggle":
              A = Eh;
          }
          var L = (e & 4) !== 0, xt = !L && (t === "scroll" || t === "scrollend"), y = L ? T !== null ? T + "Capture" : null : T;
          L = [];
          for (var h = x, b; h !== null; ) {
            var N = h;
            if (b = N.stateNode, N = N.tag, N !== 5 && N !== 26 && N !== 27 || b === null || y === null || (N = Za(h, y), N != null && L.push(
              On(h, N, b)
            )), xt) break;
            h = h.return;
          }
          0 < L.length && (T = new A(
            T,
            J,
            null,
            l,
            O
          ), z.push({ event: T, listeners: L }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (T = t === "mouseover" || t === "pointerover", A = t === "mouseout" || t === "pointerout", T && l !== Oi && (J = l.relatedTarget || l.fromElement) && (Fl(J) || J[$l]))
            break t;
          if ((A || T) && (T = O.window === O ? O : (T = O.ownerDocument) ? T.defaultView || T.parentWindow : window, A ? (J = l.relatedTarget || l.toElement, A = x, J = J ? Fl(J) : null, J !== null && (xt = M(J), L = J.tag, J !== xt || L !== 5 && L !== 27 && L !== 6) && (J = null)) : (A = null, J = x), A !== J)) {
            if (L = So, N = "onMouseLeave", y = "onMouseEnter", h = "mouse", (t === "pointerout" || t === "pointerover") && (L = To, N = "onPointerLeave", y = "onPointerEnter", h = "pointer"), xt = A == null ? T : ka(A), b = J == null ? T : ka(J), T = new L(
              N,
              h + "leave",
              A,
              l,
              O
            ), T.target = xt, T.relatedTarget = b, N = null, Fl(O) === x && (L = new L(
              y,
              h + "enter",
              J,
              l,
              O
            ), L.target = b, L.relatedTarget = xt, N = L), xt = N, A && J)
              e: {
                for (L = A, y = J, h = 0, b = L; b; b = Da(b))
                  h++;
                for (b = 0, N = y; N; N = Da(N))
                  b++;
                for (; 0 < h - b; )
                  L = Da(L), h--;
                for (; 0 < b - h; )
                  y = Da(y), b--;
                for (; h--; ) {
                  if (L === y || y !== null && L === y.alternate)
                    break e;
                  L = Da(L), y = Da(y);
                }
                L = null;
              }
            else L = null;
            A !== null && dd(
              z,
              T,
              A,
              L,
              !1
            ), J !== null && xt !== null && dd(
              z,
              xt,
              J,
              L,
              !0
            );
          }
        }
        t: {
          if (T = x ? ka(x) : window, A = T.nodeName && T.nodeName.toLowerCase(), A === "select" || A === "input" && T.type === "file")
            var B = _o;
          else if (No(T))
            if (Do)
              B = Hh;
            else {
              B = Ch;
              var tt = Rh;
            }
          else
            A = T.nodeName, !A || A.toLowerCase() !== "input" || T.type !== "checkbox" && T.type !== "radio" ? x && Ei(x.elementType) && (B = _o) : B = Uh;
          if (B && (B = B(t, x))) {
            zo(
              z,
              B,
              l,
              O
            );
            break t;
          }
          tt && tt(t, T, x), t === "focusout" && x && T.type === "number" && x.memoizedProps.value != null && Mi(T, "number", T.value);
        }
        switch (tt = x ? ka(x) : window, t) {
          case "focusin":
            (No(tt) || tt.contentEditable === "true") && (ca = tt, Gi = x, Pa = null);
            break;
          case "focusout":
            Pa = Gi = ca = null;
            break;
          case "mousedown":
            Xi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Xi = !1, Bo(z, l, O);
            break;
          case "selectionchange":
            if (Yh) break;
          case "keydown":
          case "keyup":
            Bo(z, l, O);
        }
        var Q;
        if (Hi)
          t: {
            switch (t) {
              case "compositionstart":
                var K = "onCompositionStart";
                break t;
              case "compositionend":
                K = "onCompositionEnd";
                break t;
              case "compositionupdate":
                K = "onCompositionUpdate";
                break t;
            }
            K = void 0;
          }
        else
          ia ? Eo(t, l) && (K = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (K = "onCompositionStart");
        K && (Ao && l.locale !== "ko" && (ia || K !== "onCompositionStart" ? K === "onCompositionEnd" && ia && (Q = bo()) : (nl = O, Di = "value" in nl ? nl.value : nl.textContent, ia = !0)), tt = ku(x, K), 0 < tt.length && (K = new xo(
          K,
          t,
          null,
          l,
          O
        ), z.push({ event: K, listeners: tt }), Q ? K.data = Q : (Q = Oo(l), Q !== null && (K.data = Q)))), (Q = Nh ? zh(t, l) : _h(t, l)) && (K = ku(x, "onBeforeInput"), 0 < K.length && (tt = new xo(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          O
        ), z.push({
          event: tt,
          listeners: K
        }), tt.data = Q)), S0(
          z,
          t,
          x,
          l,
          O
        );
      }
      sd(z, e);
    });
  }
  function On(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function ku(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Za(t, l), n != null && a.unshift(
        On(t, n, u)
      ), n = Za(t, e), n != null && a.push(
        On(t, n, u)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function Da(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function dd(t, e, l, a, n) {
    for (var u = e._reactName, c = []; l !== null && l !== a; ) {
      var f = l, m = f.alternate, x = f.stateNode;
      if (f = f.tag, m !== null && m === a) break;
      f !== 5 && f !== 26 && f !== 27 || x === null || (m = x, n ? (x = Za(l, u), x != null && c.unshift(
        On(l, x, m)
      )) : n || (x = Za(l, u), x != null && c.push(
        On(l, x, m)
      ))), l = l.return;
    }
    c.length !== 0 && t.push({ event: e, listeners: c });
  }
  var w0 = /\r\n?/g, M0 = /\u0000|\uFFFD/g;
  function md(t) {
    return (typeof t == "string" ? t : "" + t).replace(w0, `
`).replace(M0, "");
  }
  function hd(t, e) {
    return e = md(e), md(t) === e;
  }
  function Zu() {
  }
  function St(t, e, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || aa(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && aa(t, "" + a);
        break;
      case "className":
        Wn(t, "class", a);
        break;
      case "tabIndex":
        Wn(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Wn(t, l, a);
        break;
      case "style":
        go(t, a, u);
        break;
      case "data":
        if (e !== "object") {
          Wn(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = Pn("" + a), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (l === "formAction" ? (e !== "input" && St(t, e, "name", n.name, n, null), St(
            t,
            e,
            "formEncType",
            n.formEncType,
            n,
            null
          ), St(
            t,
            e,
            "formMethod",
            n.formMethod,
            n,
            null
          ), St(
            t,
            e,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (St(t, e, "encType", n.encType, n, null), St(t, e, "method", n.method, n, null), St(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = Pn("" + a), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = Zu);
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
            throw Error(d(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(d(60));
            t.innerHTML = l;
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
        l = Pn("" + a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
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
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "" + a) : t.removeAttribute(l);
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
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a);
        break;
      case "popover":
        at("beforetoggle", t), at("toggle", t), Jn(t, "popover", a);
        break;
      case "xlinkActuate":
        Ge(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Ge(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Ge(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Ge(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Ge(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Ge(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Ge(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Ge(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Ge(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Jn(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = eh.get(l) || l, Jn(t, l, a));
    }
  }
  function sr(t, e, l, a, n, u) {
    switch (l) {
      case "style":
        go(t, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(d(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(d(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string" ? aa(t, a) : (typeof a == "number" || typeof a == "bigint") && aa(t, "" + a);
        break;
      case "onScroll":
        a != null && at("scroll", t);
        break;
      case "onScrollEnd":
        a != null && at("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Zu);
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
        if (!ao.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), e = l.slice(2, n ? l.length - 7 : void 0), u = t[le] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, n);
              break t;
            }
            l in t ? t[l] = a : a === !0 ? t.setAttribute(l, "") : Jn(t, l, a);
          }
    }
  }
  function $t(t, e, l) {
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
        at("error", t), at("load", t);
        var a = !1, n = !1, u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var c = l[u];
            if (c != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(d(137, e));
                default:
                  St(t, e, u, c, l, null);
              }
          }
        n && St(t, e, "srcSet", l.srcSet, l, null), a && St(t, e, "src", l.src, l, null);
        return;
      case "input":
        at("invalid", t);
        var f = u = c = n = null, m = null, x = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var O = l[a];
            if (O != null)
              switch (a) {
                case "name":
                  n = O;
                  break;
                case "type":
                  c = O;
                  break;
                case "checked":
                  m = O;
                  break;
                case "defaultChecked":
                  x = O;
                  break;
                case "value":
                  u = O;
                  break;
                case "defaultValue":
                  f = O;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (O != null)
                    throw Error(d(137, e));
                  break;
                default:
                  St(t, e, a, O, l, null);
              }
          }
        so(
          t,
          u,
          f,
          m,
          x,
          c,
          n,
          !1
        ), $n(t);
        return;
      case "select":
        at("invalid", t), a = c = u = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (f = l[n], f != null))
            switch (n) {
              case "value":
                u = f;
                break;
              case "defaultValue":
                c = f;
                break;
              case "multiple":
                a = f;
              default:
                St(t, e, n, f, l, null);
            }
        e = u, l = c, t.multiple = !!a, e != null ? la(t, !!a, e, !1) : l != null && la(t, !!a, l, !0);
        return;
      case "textarea":
        at("invalid", t), u = n = a = null;
        for (c in l)
          if (l.hasOwnProperty(c) && (f = l[c], f != null))
            switch (c) {
              case "value":
                a = f;
                break;
              case "defaultValue":
                n = f;
                break;
              case "children":
                u = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(d(91));
                break;
              default:
                St(t, e, c, f, l, null);
            }
        mo(t, a, n, u), $n(t);
        return;
      case "option":
        for (m in l)
          if (l.hasOwnProperty(m) && (a = l[m], a != null))
            switch (m) {
              case "selected":
                t.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                St(t, e, m, a, l, null);
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
        for (a = 0; a < En.length; a++)
          at(En[a], t);
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
        for (x in l)
          if (l.hasOwnProperty(x) && (a = l[x], a != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(137, e));
              default:
                St(t, e, x, a, l, null);
            }
        return;
      default:
        if (Ei(e)) {
          for (O in l)
            l.hasOwnProperty(O) && (a = l[O], a !== void 0 && sr(
              t,
              e,
              O,
              a,
              l,
              void 0
            ));
          return;
        }
    }
    for (f in l)
      l.hasOwnProperty(f) && (a = l[f], a != null && St(t, e, f, a, l, null));
  }
  function E0(t, e, l, a) {
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
        var n = null, u = null, c = null, f = null, m = null, x = null, O = null;
        for (A in l) {
          var z = l[A];
          if (l.hasOwnProperty(A) && z != null)
            switch (A) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = z;
              default:
                a.hasOwnProperty(A) || St(t, e, A, null, a, z);
            }
        }
        for (var T in a) {
          var A = a[T];
          if (z = l[T], a.hasOwnProperty(T) && (A != null || z != null))
            switch (T) {
              case "type":
                u = A;
                break;
              case "name":
                n = A;
                break;
              case "checked":
                x = A;
                break;
              case "defaultChecked":
                O = A;
                break;
              case "value":
                c = A;
                break;
              case "defaultValue":
                f = A;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(d(137, e));
                break;
              default:
                A !== z && St(
                  t,
                  e,
                  T,
                  A,
                  a,
                  z
                );
            }
        }
        wi(
          t,
          c,
          f,
          m,
          x,
          O,
          u,
          n
        );
        return;
      case "select":
        A = c = f = T = null;
        for (u in l)
          if (m = l[u], l.hasOwnProperty(u) && m != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                A = m;
              default:
                a.hasOwnProperty(u) || St(
                  t,
                  e,
                  u,
                  null,
                  a,
                  m
                );
            }
        for (n in a)
          if (u = a[n], m = l[n], a.hasOwnProperty(n) && (u != null || m != null))
            switch (n) {
              case "value":
                T = u;
                break;
              case "defaultValue":
                f = u;
                break;
              case "multiple":
                c = u;
              default:
                u !== m && St(
                  t,
                  e,
                  n,
                  u,
                  a,
                  m
                );
            }
        e = f, l = c, a = A, T != null ? la(t, !!l, T, !1) : !!a != !!l && (e != null ? la(t, !!l, e, !0) : la(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        A = T = null;
        for (f in l)
          if (n = l[f], l.hasOwnProperty(f) && n != null && !a.hasOwnProperty(f))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                St(t, e, f, null, a, n);
            }
        for (c in a)
          if (n = a[c], u = l[c], a.hasOwnProperty(c) && (n != null || u != null))
            switch (c) {
              case "value":
                T = n;
                break;
              case "defaultValue":
                A = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(d(91));
                break;
              default:
                n !== u && St(t, e, c, n, a, u);
            }
        fo(t, T, A);
        return;
      case "option":
        for (var J in l)
          if (T = l[J], l.hasOwnProperty(J) && T != null && !a.hasOwnProperty(J))
            switch (J) {
              case "selected":
                t.selected = !1;
                break;
              default:
                St(
                  t,
                  e,
                  J,
                  null,
                  a,
                  T
                );
            }
        for (m in a)
          if (T = a[m], A = l[m], a.hasOwnProperty(m) && T !== A && (T != null || A != null))
            switch (m) {
              case "selected":
                t.selected = T && typeof T != "function" && typeof T != "symbol";
                break;
              default:
                St(
                  t,
                  e,
                  m,
                  T,
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
        for (var L in l)
          T = l[L], l.hasOwnProperty(L) && T != null && !a.hasOwnProperty(L) && St(t, e, L, null, a, T);
        for (x in a)
          if (T = a[x], A = l[x], a.hasOwnProperty(x) && T !== A && (T != null || A != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null)
                  throw Error(d(137, e));
                break;
              default:
                St(
                  t,
                  e,
                  x,
                  T,
                  a,
                  A
                );
            }
        return;
      default:
        if (Ei(e)) {
          for (var xt in l)
            T = l[xt], l.hasOwnProperty(xt) && T !== void 0 && !a.hasOwnProperty(xt) && sr(
              t,
              e,
              xt,
              void 0,
              a,
              T
            );
          for (O in a)
            T = a[O], A = l[O], !a.hasOwnProperty(O) || T === A || T === void 0 && A === void 0 || sr(
              t,
              e,
              O,
              T,
              a,
              A
            );
          return;
        }
    }
    for (var y in l)
      T = l[y], l.hasOwnProperty(y) && T != null && !a.hasOwnProperty(y) && St(t, e, y, null, a, T);
    for (z in a)
      T = a[z], A = l[z], !a.hasOwnProperty(z) || T === A || T == null && A == null || St(t, e, z, T, a, A);
  }
  var fr = null, dr = null;
  function Vu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function gd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function yd(t, e) {
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
  function mr(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var hr = null;
  function O0() {
    var t = window.event;
    return t && t.type === "popstate" ? t === hr ? !1 : (hr = t, !0) : (hr = null, !1);
  }
  var vd = typeof setTimeout == "function" ? setTimeout : void 0, N0 = typeof clearTimeout == "function" ? clearTimeout : void 0, bd = typeof Promise == "function" ? Promise : void 0, z0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof bd < "u" ? function(t) {
    return bd.resolve(null).then(t).catch(_0);
  } : vd;
  function _0(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Sl(t) {
    return t === "head";
  }
  function pd(t, e) {
    var l = e, a = 0, n = 0;
    do {
      var u = l.nextSibling;
      if (t.removeChild(l), u && u.nodeType === 8)
        if (l = u.data, l === "/$") {
          if (0 < a && 8 > a) {
            l = a;
            var c = t.ownerDocument;
            if (l & 1 && Nn(c.documentElement), l & 2 && Nn(c.body), l & 4)
              for (l = c.head, Nn(l), c = l.firstChild; c; ) {
                var f = c.nextSibling, m = c.nodeName;
                c[Qa] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && c.rel.toLowerCase() === "stylesheet" || l.removeChild(c), c = f;
              }
          }
          if (n === 0) {
            t.removeChild(u), Hn(e);
            return;
          }
          n--;
        } else
          l === "$" || l === "$?" || l === "$!" ? n++ : a = l.charCodeAt(0) - 48;
      else a = 0;
      l = u;
    } while (l);
    Hn(e);
  }
  function gr(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          gr(l), Si(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function D0(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[Qa])
          switch (e) {
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
      } else if (e === "input" && t.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === u)
          return t;
      } else return t;
      if (t = _e(t.nextSibling), t === null) break;
    }
    return null;
  }
  function j0(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = _e(t.nextSibling), t === null)) return null;
    return t;
  }
  function yr(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete";
  }
  function R0(t, e) {
    var l = t.ownerDocument;
    if (t.data !== "$?" || l.readyState === "complete")
      e();
    else {
      var a = function() {
        e(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function _e(t) {
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
  var vr = null;
  function Sd(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (e === 0) return t;
          e--;
        } else l === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function xd(t, e, l) {
    switch (e = Vu(l), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(d(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(d(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(d(454));
        return t;
      default:
        throw Error(d(451));
    }
  }
  function Nn(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Si(t);
  }
  var Oe = /* @__PURE__ */ new Map(), Td = /* @__PURE__ */ new Set();
  function Lu(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var tl = E.d;
  E.d = {
    f: C0,
    r: U0,
    D: H0,
    C: q0,
    L: Y0,
    m: B0,
    X: X0,
    S: G0,
    M: Q0
  };
  function C0() {
    var t = tl.f(), e = qu();
    return t || e;
  }
  function U0(t) {
    var e = Pl(t);
    e !== null && e.tag === 5 && e.type === "form" ? Xs(e) : tl.r(t);
  }
  var ja = typeof document > "u" ? null : document;
  function Ad(t, e, l) {
    var a = ja;
    if (a && typeof e == "string" && e) {
      var n = Se(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), Td.has(n) || (Td.add(n), t = { rel: t, crossOrigin: l, href: e }, a.querySelector(n) === null && (e = a.createElement("link"), $t(e, "link", t), kt(e), a.head.appendChild(e)));
    }
  }
  function H0(t) {
    tl.D(t), Ad("dns-prefetch", t, null);
  }
  function q0(t, e) {
    tl.C(t, e), Ad("preconnect", t, e);
  }
  function Y0(t, e, l) {
    tl.L(t, e, l);
    var a = ja;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + Se(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + Se(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + Se(
        l.imageSizes
      ) + '"]')) : n += '[href="' + Se(t) + '"]';
      var u = n;
      switch (e) {
        case "style":
          u = Ra(t);
          break;
        case "script":
          u = Ca(t);
      }
      Oe.has(u) || (t = U(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), Oe.set(u, t), a.querySelector(n) !== null || e === "style" && a.querySelector(zn(u)) || e === "script" && a.querySelector(_n(u)) || (e = a.createElement("link"), $t(e, "link", t), kt(e), a.head.appendChild(e)));
    }
  }
  function B0(t, e) {
    tl.m(t, e);
    var l = ja;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + Se(a) + '"][href="' + Se(t) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Ca(t);
      }
      if (!Oe.has(u) && (t = U({ rel: "modulepreload", href: t }, e), Oe.set(u, t), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(_n(u)))
              return;
        }
        a = l.createElement("link"), $t(a, "link", t), kt(a), l.head.appendChild(a);
      }
    }
  }
  function G0(t, e, l) {
    tl.S(t, e, l);
    var a = ja;
    if (a && t) {
      var n = Il(a).hoistableStyles, u = Ra(t);
      e = e || "default";
      var c = n.get(u);
      if (!c) {
        var f = { loading: 0, preload: null };
        if (c = a.querySelector(
          zn(u)
        ))
          f.loading = 5;
        else {
          t = U(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = Oe.get(u)) && br(t, l);
          var m = c = a.createElement("link");
          kt(m), $t(m, "link", t), m._p = new Promise(function(x, O) {
            m.onload = x, m.onerror = O;
          }), m.addEventListener("load", function() {
            f.loading |= 1;
          }), m.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, Ku(c, e, a);
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: f
        }, n.set(u, c);
      }
    }
  }
  function X0(t, e) {
    tl.X(t, e);
    var l = ja;
    if (l && t) {
      var a = Il(l).hoistableScripts, n = Ca(t), u = a.get(n);
      u || (u = l.querySelector(_n(n)), u || (t = U({ src: t, async: !0 }, e), (e = Oe.get(n)) && pr(t, e), u = l.createElement("script"), kt(u), $t(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function Q0(t, e) {
    tl.M(t, e);
    var l = ja;
    if (l && t) {
      var a = Il(l).hoistableScripts, n = Ca(t), u = a.get(n);
      u || (u = l.querySelector(_n(n)), u || (t = U({ src: t, async: !0, type: "module" }, e), (e = Oe.get(n)) && pr(t, e), u = l.createElement("script"), kt(u), $t(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function wd(t, e, l, a) {
    var n = (n = Y.current) ? Lu(n) : null;
    if (!n) throw Error(d(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Ra(l.href), l = Il(
          n
        ).hoistableStyles, a = l.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = Ra(l.href);
          var u = Il(
            n
          ).hoistableStyles, c = u.get(t);
          if (c || (n = n.ownerDocument || n, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, c), (u = n.querySelector(
            zn(t)
          )) && !u._p && (c.instance = u, c.state.loading = 5), Oe.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Oe.set(t, l), u || k0(
            n,
            t,
            l,
            c.state
          ))), e && a === null)
            throw Error(d(528, ""));
          return c;
        }
        if (e && a !== null)
          throw Error(d(529, ""));
        return null;
      case "script":
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Ca(l), l = Il(
          n
        ).hoistableScripts, a = l.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(d(444, t));
    }
  }
  function Ra(t) {
    return 'href="' + Se(t) + '"';
  }
  function zn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Md(t) {
    return U({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function k0(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), $t(e, "link", l), kt(e), t.head.appendChild(e));
  }
  function Ca(t) {
    return '[src="' + Se(t) + '"]';
  }
  function _n(t) {
    return "script[async]" + t;
  }
  function Ed(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + Se(l.href) + '"]'
          );
          if (a)
            return e.instance = a, kt(a), a;
          var n = U({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), kt(a), $t(a, "style", n), Ku(a, l.precedence, t), e.instance = a;
        case "stylesheet":
          n = Ra(l.href);
          var u = t.querySelector(
            zn(n)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, kt(u), u;
          a = Md(l), (n = Oe.get(n)) && br(a, n), u = (t.ownerDocument || t).createElement("link"), kt(u);
          var c = u;
          return c._p = new Promise(function(f, m) {
            c.onload = f, c.onerror = m;
          }), $t(u, "link", a), e.state.loading |= 4, Ku(u, l.precedence, t), e.instance = u;
        case "script":
          return u = Ca(l.src), (n = t.querySelector(
            _n(u)
          )) ? (e.instance = n, kt(n), n) : (a = l, (n = Oe.get(u)) && (a = U({}, l), pr(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), kt(n), $t(n, "link", a), t.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(d(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Ku(a, l.precedence, t));
    return e.instance;
  }
  function Ku(t, e, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, u = n, c = 0; c < a.length; c++) {
      var f = a[c];
      if (f.dataset.precedence === e) u = f;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function br(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function pr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Ju = null;
  function Od(t, e, l) {
    if (Ju === null) {
      var a = /* @__PURE__ */ new Map(), n = Ju = /* @__PURE__ */ new Map();
      n.set(l, a);
    } else
      n = Ju, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
    if (a.has(t)) return a;
    for (a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++) {
      var u = l[n];
      if (!(u[Qa] || u[Ft] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = u.getAttribute(e) || "";
        c = t + c;
        var f = a.get(c);
        f ? f.push(u) : a.set(c, [u]);
      }
    }
    return a;
  }
  function Nd(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function Z0(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
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
  function zd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Dn = null;
  function V0() {
  }
  function L0(t, e, l) {
    if (Dn === null) throw Error(d(475));
    var a = Dn;
    if (e.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var n = Ra(l.href), u = t.querySelector(
          zn(n)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (a.count++, a = Wu.bind(a), t.then(a, a)), e.state.loading |= 4, e.instance = u, kt(u);
          return;
        }
        u = t.ownerDocument || t, l = Md(l), (n = Oe.get(n)) && br(l, n), u = u.createElement("link"), kt(u);
        var c = u;
        c._p = new Promise(function(f, m) {
          c.onload = f, c.onerror = m;
        }), $t(u, "link", l), e.instance = u;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (a.count++, e = Wu.bind(a), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  function K0() {
    if (Dn === null) throw Error(d(475));
    var t = Dn;
    return t.stylesheets && t.count === 0 && Sr(t, t.stylesheets), 0 < t.count ? function(e) {
      var l = setTimeout(function() {
        if (t.stylesheets && Sr(t, t.stylesheets), t.unsuspend) {
          var a = t.unsuspend;
          t.unsuspend = null, a();
        }
      }, 6e4);
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(l);
      };
    } : null;
  }
  function Wu() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Sr(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var $u = null;
  function Sr(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, $u = /* @__PURE__ */ new Map(), e.forEach(J0, t), $u = null, Wu.call(t));
  }
  function J0(t, e) {
    if (!(e.state.loading & 4)) {
      var l = $u.get(t);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), $u.set(t, l);
        for (var n = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var c = n[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (l.set(c.dataset.precedence, c), a = c);
        }
        a && l.set(null, a);
      }
      n = e.instance, c = n.getAttribute("data-precedence"), u = l.get(c) || a, u === a && l.set(null, n), l.set(c, n), this.count++, a = Wu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
    }
  }
  var jn = {
    $$typeof: it,
    Provider: null,
    Consumer: null,
    _currentValue: et,
    _currentValue2: et,
    _threadCount: 0
  };
  function W0(t, e, l, a, n, u, c, f) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = yi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = yi(0), this.hiddenUpdates = yi(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function _d(t, e, l, a, n, u, c, f, m, x, O, z) {
    return t = new W0(
      t,
      e,
      l,
      c,
      f,
      m,
      x,
      z
    ), e = 1, u === !0 && (e |= 24), u = de(3, null, null, e), t.current = u, u.stateNode = t, e = ec(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: e
    }, uc(u), t;
  }
  function Dd(t) {
    return t ? (t = fa, t) : fa;
  }
  function jd(t, e, l, a, n, u) {
    n = Dd(n), a.context === null ? a.context = n : a.pendingContext = n, a = cl(e), a.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = rl(t, a, e), l !== null && (ve(l, t, e), rn(l, t, e));
  }
  function Rd(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function xr(t, e) {
    Rd(t, e), (t = t.alternate) && Rd(t, e);
  }
  function Cd(t) {
    if (t.tag === 13) {
      var e = sa(t, 67108864);
      e !== null && ve(e, t, 67108864), xr(t, 67108864);
    }
  }
  var Fu = !0;
  function $0(t, e, l, a) {
    var n = D.T;
    D.T = null;
    var u = E.p;
    try {
      E.p = 2, Tr(t, e, l, a);
    } finally {
      E.p = u, D.T = n;
    }
  }
  function F0(t, e, l, a) {
    var n = D.T;
    D.T = null;
    var u = E.p;
    try {
      E.p = 8, Tr(t, e, l, a);
    } finally {
      E.p = u, D.T = n;
    }
  }
  function Tr(t, e, l, a) {
    if (Fu) {
      var n = Ar(a);
      if (n === null)
        or(
          t,
          e,
          a,
          Pu,
          l
        ), Hd(t, a);
      else if (I0(
        n,
        t,
        e,
        l,
        a
      ))
        a.stopPropagation();
      else if (Hd(t, a), e & 4 && -1 < P0.indexOf(t)) {
        for (; n !== null; ) {
          var u = Pl(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var c = _l(u.pendingLanes);
                  if (c !== 0) {
                    var f = u;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; c; ) {
                      var m = 1 << 31 - se(c);
                      f.entanglements[1] |= m, c &= ~m;
                    }
                    Ye(u), (ht & 6) === 0 && (Uu = Re() + 500, Mn(0));
                  }
                }
                break;
              case 13:
                f = sa(u, 2), f !== null && ve(f, u, 2), qu(), xr(u, 2);
            }
          if (u = Ar(a), u === null && or(
            t,
            e,
            a,
            Pu,
            l
          ), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else
        or(
          t,
          e,
          a,
          null,
          l
        );
    }
  }
  function Ar(t) {
    return t = Ni(t), wr(t);
  }
  var Pu = null;
  function wr(t) {
    if (Pu = null, t = Fl(t), t !== null) {
      var e = M(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = R(e), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Pu = t, null;
  }
  function Ud(t) {
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
        switch (qm()) {
          case Kr:
            return 2;
          case Jr:
            return 8;
          case Zn:
          case Ym:
            return 32;
          case Wr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Mr = !1, xl = null, Tl = null, Al = null, Rn = /* @__PURE__ */ new Map(), Cn = /* @__PURE__ */ new Map(), wl = [], P0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Hd(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        xl = null;
        break;
      case "dragenter":
      case "dragleave":
        Tl = null;
        break;
      case "mouseover":
      case "mouseout":
        Al = null;
        break;
      case "pointerover":
      case "pointerout":
        Rn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cn.delete(e.pointerId);
    }
  }
  function Un(t, e, l, a, n, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, e !== null && (e = Pl(e), e !== null && Cd(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
  }
  function I0(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return xl = Un(
          xl,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "dragenter":
        return Tl = Un(
          Tl,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "mouseover":
        return Al = Un(
          Al,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return Rn.set(
          u,
          Un(
            Rn.get(u) || null,
            t,
            e,
            l,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, Cn.set(
          u,
          Un(
            Cn.get(u) || null,
            t,
            e,
            l,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function qd(t) {
    var e = Fl(t.target);
    if (e !== null) {
      var l = M(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = R(l), e !== null) {
            t.blockedOn = e, Lm(t.priority, function() {
              if (l.tag === 13) {
                var a = ye();
                a = vi(a);
                var n = sa(l, a);
                n !== null && ve(n, l, a), xr(l, a);
              }
            });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Iu(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = Ar(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        Oi = a, l.target.dispatchEvent(a), Oi = null;
      } else
        return e = Pl(l), e !== null && Cd(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function Yd(t, e, l) {
    Iu(t) && l.delete(e);
  }
  function tg() {
    Mr = !1, xl !== null && Iu(xl) && (xl = null), Tl !== null && Iu(Tl) && (Tl = null), Al !== null && Iu(Al) && (Al = null), Rn.forEach(Yd), Cn.forEach(Yd);
  }
  function ti(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Mr || (Mr = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      tg
    )));
  }
  var ei = null;
  function Bd(t) {
    ei !== t && (ei = t, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        ei === t && (ei = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], a = t[e + 1], n = t[e + 2];
          if (typeof a != "function") {
            if (wr(a || l) === null)
              continue;
            break;
          }
          var u = Pl(l);
          u !== null && (t.splice(e, 3), e -= 3, wc(
            u,
            {
              pending: !0,
              data: n,
              method: l.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function Hn(t) {
    function e(m) {
      return ti(m, t);
    }
    xl !== null && ti(xl, t), Tl !== null && ti(Tl, t), Al !== null && ti(Al, t), Rn.forEach(e), Cn.forEach(e);
    for (var l = 0; l < wl.length; l++) {
      var a = wl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < wl.length && (l = wl[0], l.blockedOn === null); )
      qd(l), l.blockedOn === null && wl.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], c = n[le] || null;
        if (typeof u == "function")
          c || Bd(l);
        else if (c) {
          var f = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, c = u[le] || null)
              f = c.formAction;
            else if (wr(n) !== null) continue;
          } else f = c.action;
          typeof f == "function" ? l[a + 1] = f : (l.splice(a, 3), a -= 3), Bd(l);
        }
      }
  }
  function Er(t) {
    this._internalRoot = t;
  }
  li.prototype.render = Er.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(d(409));
    var l = e.current, a = ye();
    jd(l, a, t, e, null, null);
  }, li.prototype.unmount = Er.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      jd(t.current, 2, null, t, null, null), qu(), e[$l] = null;
    }
  };
  function li(t) {
    this._internalRoot = t;
  }
  li.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = to();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < wl.length && e !== 0 && e < wl[l].priority; l++) ;
      wl.splice(l, 0, t), l === 0 && qd(t);
    }
  };
  var Gd = o.version;
  if (Gd !== "19.1.0")
    throw Error(
      d(
        527,
        Gd,
        "19.1.0"
      )
    );
  E.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(d(188)) : (t = Object.keys(t).join(","), Error(d(268, t)));
    return t = p(e), t = t !== null ? q(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var eg = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: D,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ai.isDisabled && ai.supportsFiber)
      try {
        Ba = ai.inject(
          eg
        ), oe = ai;
      } catch {
      }
  }
  return Yn.createRoot = function(t, e) {
    if (!v(t)) throw Error(d(299));
    var l = !1, a = "", n = ef, u = lf, c = af, f = null;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (f = e.unstable_transitionCallbacks)), e = _d(
      t,
      1,
      !1,
      null,
      null,
      l,
      a,
      n,
      u,
      c,
      f,
      null
    ), t[$l] = e.current, rr(t), new Er(e);
  }, Yn.hydrateRoot = function(t, e, l) {
    if (!v(t)) throw Error(d(299));
    var a = !1, n = "", u = ef, c = lf, f = af, m = null, x = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (c = l.onCaughtError), l.onRecoverableError !== void 0 && (f = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (m = l.unstable_transitionCallbacks), l.formState !== void 0 && (x = l.formState)), e = _d(
      t,
      1,
      !0,
      e,
      l ?? null,
      a,
      n,
      u,
      c,
      f,
      m,
      x
    ), e.context = Dd(null), l = e.current, a = ye(), a = vi(a), n = cl(a), n.callback = null, rl(l, n, a), l = a, e.current.lanes = l, Xa(e, l), Ye(e), t[$l] = e.current, rr(t), new li(e);
  }, Yn.version = "19.1.0", Yn;
}
var $d;
function fg() {
  if ($d) return Nr.exports;
  $d = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), Nr.exports = sg(), Nr.exports;
}
var dg = fg();
const mg = /* @__PURE__ */ dm(dg);
function hg() {
  if (!document.getElementById("tailwind-cdn")) {
    const i = document.createElement("script");
    i.src = "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4", i.id = "tailwind-cdn", document.head.appendChild(i);
  }
}
const mm = {
  NEXT_PUBLIC_LOGIN_CUSTOMER_API: "https://mimin-test.mimin.io/mimin-backend",
  NEXT_PUBLIC_CHATBOT_URL: "https://mimin-api.mimin.io/backend-gen-ai"
};
var wt = Qr();
const De = /* @__PURE__ */ dm(wt), Fd = (i) => {
  let r;
  const o = /* @__PURE__ */ new Set(), s = (p, q) => {
    const U = typeof p == "function" ? p(r) : p;
    if (!Object.is(U, r)) {
      const $ = r;
      r = q ?? (typeof U != "object" || U === null) ? U : Object.assign({}, r, U), o.forEach((ft) => ft(r, $));
    }
  }, d = () => r, R = { setState: s, getState: d, getInitialState: () => w, subscribe: (p) => (o.add(p), () => o.delete(p)) }, w = r = i(s, d, R);
  return R;
}, gg = (i) => i ? Fd(i) : Fd, yg = (i) => i;
function vg(i, r = yg) {
  const o = De.useSyncExternalStore(
    i.subscribe,
    () => r(i.getState()),
    () => r(i.getInitialState())
  );
  return De.useDebugValue(o), o;
}
const bg = (i) => {
  const r = gg(i), o = (s) => vg(r, s);
  return Object.assign(o, r), o;
}, kr = (i) => bg;
function pg(i, r) {
  let o;
  try {
    o = i();
  } catch {
    return;
  }
  return {
    getItem: (d) => {
      var v;
      const M = (w) => w === null ? null : JSON.parse(w, void 0), R = (v = o.getItem(d)) != null ? v : null;
      return R instanceof Promise ? R.then(M) : M(R);
    },
    setItem: (d, v) => o.setItem(d, JSON.stringify(v, void 0)),
    removeItem: (d) => o.removeItem(d)
  };
}
const Hr = (i) => (r) => {
  try {
    const o = i(r);
    return o instanceof Promise ? o : {
      then(s) {
        return Hr(s)(o);
      },
      catch(s) {
        return this;
      }
    };
  } catch (o) {
    return {
      then(s) {
        return this;
      },
      catch(s) {
        return Hr(s)(o);
      }
    };
  }
}, Sg = (i, r) => (o, s, d) => {
  let v = {
    storage: pg(() => localStorage),
    partialize: (V) => V,
    version: 0,
    merge: (V, vt) => ({
      ...vt,
      ...V
    }),
    ...r
  }, M = !1;
  const R = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ new Set();
  let p = v.storage;
  if (!p)
    return i(
      (...V) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${v.name}', the given storage is currently unavailable.`
        ), o(...V);
      },
      s,
      d
    );
  const q = () => {
    const V = v.partialize({ ...s() });
    return p.setItem(v.name, {
      state: V,
      version: v.version
    });
  }, U = d.setState;
  d.setState = (V, vt) => {
    U(V, vt), q();
  };
  const $ = i(
    (...V) => {
      o(...V), q();
    },
    s,
    d
  );
  d.getInitialState = () => $;
  let ft;
  const ut = () => {
    var V, vt;
    if (!p) return;
    M = !1, R.forEach((st) => {
      var Tt;
      return st((Tt = s()) != null ? Tt : $);
    });
    const bt = ((vt = v.onRehydrateStorage) == null ? void 0 : vt.call(v, (V = s()) != null ? V : $)) || void 0;
    return Hr(p.getItem.bind(p))(v.name).then((st) => {
      if (st)
        if (typeof st.version == "number" && st.version !== v.version) {
          if (v.migrate) {
            const Tt = v.migrate(
              st.state,
              st.version
            );
            return Tt instanceof Promise ? Tt.then((it) => [!0, it]) : [!0, Tt];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, st.state];
      return [!1, void 0];
    }).then((st) => {
      var Tt;
      const [it, Ct] = st;
      if (ft = v.merge(
        Ct,
        (Tt = s()) != null ? Tt : $
      ), o(ft, !0), it)
        return q();
    }).then(() => {
      bt?.(ft, void 0), ft = s(), M = !0, w.forEach((st) => st(ft));
    }).catch((st) => {
      bt?.(void 0, st);
    });
  };
  return d.persist = {
    setOptions: (V) => {
      v = {
        ...v,
        ...V
      }, V.storage && (p = V.storage);
    },
    clearStorage: () => {
      p?.removeItem(v.name);
    },
    getOptions: () => v,
    rehydrate: () => ut(),
    hasHydrated: () => M,
    onHydrate: (V) => (R.add(V), () => {
      R.delete(V);
    }),
    onFinishHydration: (V) => (w.add(V), () => {
      w.delete(V);
    })
  }, v.skipHydration || ut(), ft || $;
}, Zr = Sg, fi = kr()(
  Zr(
    (i) => ({
      config: null,
      signature: "",
      setConfig: (r) => i({ config: r }),
      setSignature: (r) => i({ signature: r })
    }),
    {
      name: "config-store"
    }
  )
), hm = kr()(
  Zr(
    (i, r) => ({
      interactions: [],
      chatType: null,
      setInteractions: (o) => i({ interactions: o }),
      addInteraction: (o) => i((s) => ({
        interactions: [o, ...s.interactions]
      })),
      updateAiInteractionByIndex: (o, s) => {
        i((d) => ({
          interactions: d.interactions.map(
            (v, M) => M === o ? { ...v, ai: { ...v.ai, ...s } } : v
          )
        }));
      },
      setChatType: (o) => i({ chatType: o }),
      clearInteractions: () => i({ interactions: [] })
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
const xg = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Tg = (i) => i.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, o, s) => s ? s.toUpperCase() : o.toLowerCase()
), Pd = (i) => {
  const r = Tg(i);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, gm = (...i) => i.filter((r, o, s) => !!r && r.trim() !== "" && s.indexOf(r) === o).join(" ").trim(), Ag = (i) => {
  for (const r in i)
    if (r.startsWith("aria-") || r === "role" || r === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var wg = {
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
const Mg = wt.forwardRef(
  ({
    color: i = "currentColor",
    size: r = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: s,
    className: d = "",
    children: v,
    iconNode: M,
    ...R
  }, w) => wt.createElement(
    "svg",
    {
      ref: w,
      ...wg,
      width: r,
      height: r,
      stroke: i,
      strokeWidth: s ? Number(o) * 24 / Number(r) : o,
      className: gm("lucide", d),
      ...!v && !Ag(R) && { "aria-hidden": "true" },
      ...R
    },
    [
      ...M.map(([p, q]) => wt.createElement(p, q)),
      ...Array.isArray(v) ? v : [v]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kn = (i, r) => {
  const o = wt.forwardRef(
    ({ className: s, ...d }, v) => wt.createElement(Mg, {
      ref: v,
      iconNode: r,
      className: gm(
        `lucide-${xg(Pd(i))}`,
        `lucide-${i}`,
        s
      ),
      ...d
    })
  );
  return o.displayName = Pd(i), o;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eg = [
  ["path", { d: "M2 10v3", key: "1fnikh" }],
  ["path", { d: "M6 6v11", key: "11sgs0" }],
  ["path", { d: "M10 3v18", key: "yhl04a" }],
  ["path", { d: "M14 8v7", key: "3a1oy3" }],
  ["path", { d: "M18 5v13", key: "123xd1" }],
  ["path", { d: "M22 10v3", key: "154ddg" }]
], Og = kn("audio-lines", Eg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ng = [
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
], qr = kn("eye-off", Ng);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zg = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Yr = kn("eye", zg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _g = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], ym = kn("triangle-alert", _g);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dg = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], jg = kn("x", Dg), Rg = ({ onClickCreateAccount: i }) => {
  const [r, o] = wt.useState({
    email: "",
    password: "",
    rememberMe: !1
  }), [s, d] = wt.useState(null), [v, M] = wt.useState(!1), R = (w) => {
    o({ ...r, [w.target.name]: w.target.value });
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "mt-10", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ S.jsx("h2", { className: "text-base font-bold", children: "Sign In" }),
      /* @__PURE__ */ S.jsx("p", { className: "text-sm text-gray-500", children: "Fill your information below to sign in to your account" })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "space-y-2 mt-6", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ S.jsx("label", { htmlFor: "email", className: "text-sm font-medium", children: "Email" }),
        /* @__PURE__ */ S.jsx(
          "input",
          {
            type: "text",
            name: "email",
            value: r.email,
            onChange: R,
            autoComplete: "off",
            className: "border border-[#0096A2] rounded-md p-2 focus:outline focus:outline-2 focus:outline-[#0096A2]"
          }
        )
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ S.jsx("label", { htmlFor: "password", className: "text-sm font-medium", children: "Password" }),
        /* @__PURE__ */ S.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ S.jsx(
            "input",
            {
              type: v ? "text" : "password",
              name: "password",
              value: r.password,
              onChange: R,
              autoComplete: "off",
              className: "border border-[#0096A2] rounded-md p-2 focus:outline focus:outline-2 focus:outline-[#0096A2] w-full"
            }
          ),
          /* @__PURE__ */ S.jsx(
            "button",
            {
              className: "absolute right-2.5 top-1/2 -translate-y-1/2",
              onClick: () => M((w) => !w),
              children: v ? /* @__PURE__ */ S.jsx(Yr, { className: "w-4 h-4" }) : /* @__PURE__ */ S.jsx(qr, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "flex items-start justify-between gap-3 py-2", children: [
        /* @__PURE__ */ S.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ S.jsx(
            "input",
            {
              type: "checkbox",
              name: "acceptTerms",
              id: "acceptTerms",
              checked: r.rememberMe,
              onChange: (w) => o({ ...r, rememberMe: w.target.checked }),
              className: "size-3.5 accent-[#0096A2]"
            }
          ),
          /* @__PURE__ */ S.jsx(
            "label",
            {
              className: "block text-xs text-gray-500",
              htmlFor: "acceptTerms",
              children: "Remember me"
            }
          )
        ] }),
        /* @__PURE__ */ S.jsx("button", { className: "block text-xs text-gray-500 cursor-pointer underline", children: "Forgot password?" })
      ] }),
      s && /* @__PURE__ */ S.jsxs("div", { className: "flex items-start gap-3 bg-[#F26075]/10 p-2 rounded-md mt-5 border border-[#F26075]/20", children: [
        /* @__PURE__ */ S.jsx("div", { className: "flex items-start justify-center pt-1", children: /* @__PURE__ */ S.jsx(ym, { className: "w-4 h-4 text-[#F26075]" }) }),
        /* @__PURE__ */ S.jsx("p", { className: "text-[#F26075] text-sm", children: s })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "flex flex-col gap-1.5 pt-4 pb-6", children: [
        /* @__PURE__ */ S.jsx("button", { className: "bg-[#0096A2] text-white px-4 py-2 rounded-md w-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed", children: "Sign In" }),
        /* @__PURE__ */ S.jsxs("div", { className: "text-xs text-center text-gray-500", children: [
          "Don't have an account?",
          " ",
          /* @__PURE__ */ S.jsx(
            "button",
            {
              onClick: i,
              className: "inline text-[#0096A2] underline cursor-pointer",
              children: "Create an account"
            }
          )
        ] })
      ] })
    ] })
  ] });
}, Cg = ({ onClickSignin: i }) => {
  const [r, o] = wt.useState({
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: !1
  }), [s, d] = wt.useState(!1), [v, M] = wt.useState(!1), [R, w] = wt.useState(null), p = (q) => {
    o({ ...r, [q.target.name]: q.target.value });
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "mt-10", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ S.jsx("h2", { className: "text-base font-bold", children: "Create Account" }),
      /* @__PURE__ */ S.jsx("p", { className: "text-sm text-gray-500", children: "Fill your information below to create your account" })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "space-y-2 mt-6", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ S.jsx("label", { htmlFor: "companyName", className: "text-sm font-medium", children: "Company Name" }),
        /* @__PURE__ */ S.jsx(
          "input",
          {
            type: "text",
            name: "companyName",
            value: r.companyName,
            onChange: p,
            autoComplete: "off",
            className: "border border-[#0096A2] rounded-md p-2 focus:outline focus:outline-2 focus:outline-[#0096A2]"
          }
        )
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ S.jsx("label", { htmlFor: "email", className: "text-sm font-medium", children: "Email" }),
        /* @__PURE__ */ S.jsx(
          "input",
          {
            type: "text",
            name: "email",
            autoComplete: "off",
            value: r.email,
            onChange: p,
            className: "border border-[#0096A2] rounded-md p-2 focus:outline focus:outline-2 focus:outline-[#0096A2]"
          }
        )
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ S.jsx("label", { htmlFor: "password", className: "text-sm font-medium", children: "Password" }),
        /* @__PURE__ */ S.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ S.jsx(
            "input",
            {
              type: s ? "text" : "password",
              name: "password",
              value: r.password,
              onChange: p,
              autoComplete: "off",
              className: "border border-[#0096A2] rounded-md p-2 focus:outline focus:outline-2 focus:outline-[#0096A2] w-full"
            }
          ),
          /* @__PURE__ */ S.jsx(
            "button",
            {
              className: "absolute right-2.5 top-1/2 -translate-y-1/2",
              onClick: () => d((q) => !q),
              children: s ? /* @__PURE__ */ S.jsx(Yr, { className: "w-4 h-4" }) : /* @__PURE__ */ S.jsx(qr, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ S.jsx("label", { htmlFor: "confirmPassword", className: "text-sm font-medium", children: "Confirm Password" }),
        /* @__PURE__ */ S.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ S.jsx(
            "input",
            {
              type: v ? "text" : "password",
              name: "confirmPassword",
              value: r.confirmPassword,
              onChange: p,
              autoComplete: "off",
              className: "border border-[#0096A2] rounded-md p-2 focus:outline focus:outline-2 focus:outline-[#0096A2] w-full"
            }
          ),
          /* @__PURE__ */ S.jsx(
            "button",
            {
              className: "absolute right-2.5 top-1/2 -translate-y-1/2",
              onClick: () => M((q) => !q),
              children: v ? /* @__PURE__ */ S.jsx(Yr, { className: "w-4 h-4" }) : /* @__PURE__ */ S.jsx(qr, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "flex items-start gap-3 py-2", children: [
        /* @__PURE__ */ S.jsx(
          "input",
          {
            type: "checkbox",
            name: "acceptTerms",
            id: "acceptTerms",
            checked: r.acceptTerms,
            onChange: (q) => o({ ...r, acceptTerms: q.target.checked }),
            className: "mt-1 size-3.5 accent-[#0096A2]"
          }
        ),
        /* @__PURE__ */ S.jsxs("label", { className: "block text-xs text-gray-500", htmlFor: "acceptTerms", children: [
          "By creating an account, you agree to our",
          " ",
          /* @__PURE__ */ S.jsx("a", { href: "#", className: "text-[#0096A2]", children: "Terms of Service" })
        ] })
      ] }),
      R && /* @__PURE__ */ S.jsxs("div", { className: "flex items-start gap-3 bg-[#F26075]/10 p-2 rounded-md mt-5 border border-[#F26075]/20", children: [
        /* @__PURE__ */ S.jsx("div", { className: "flex items-start justify-center pt-1", children: /* @__PURE__ */ S.jsx(ym, { className: "w-4 h-4 text-[#F26075]" }) }),
        /* @__PURE__ */ S.jsx("p", { className: "text-[#F26075] text-sm", children: R })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "flex flex-col gap-1 pb-6", children: [
        /* @__PURE__ */ S.jsx(
          "button",
          {
            className: "bg-[#0096A2] text-white px-4 py-2 rounded-md w-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
            disabled: !r.companyName || !r.email || !r.password || !r.confirmPassword || !r.acceptTerms,
            children: "Create Account"
          }
        ),
        /* @__PURE__ */ S.jsxs("div", { className: "text-xs text-center text-gray-500", children: [
          "Already have an account?",
          " ",
          /* @__PURE__ */ S.jsx(
            "button",
            {
              onClick: i,
              className: "inline text-[#0096A2] underline cursor-pointer",
              children: "Sign in"
            }
          )
        ] })
      ] })
    ] })
  ] });
}, Ug = () => {
  const [i, r] = wt.useState("landing-section");
  return /* @__PURE__ */ S.jsxs("div", { className: "p-4 h-full overflow-y-auto", children: [
    /* @__PURE__ */ S.jsx("div", { className: "flex justify-center items-center w-full h-auto", children: /* @__PURE__ */ S.jsx(
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
    i === "landing-section" && /* @__PURE__ */ S.jsxs("div", { className: "text-center mt-10", children: [
      /* @__PURE__ */ S.jsx("h1", { className: "text-[#0096A2] text-base font-bold", children: "Explore the MIMIN AI Agent" }),
      /* @__PURE__ */ S.jsx("p", { className: "text-gray-500 text-sm", children: "Sign in and start chatting with your smart AI assistant ready to help anytime, day or night!" }),
      /* @__PURE__ */ S.jsxs("div", { className: "flex flex-col gap-3 mt-6", children: [
        /* @__PURE__ */ S.jsx(
          "button",
          {
            className: "bg-[#0096A2] w-full border border-[#0096A2] text-white px-4 py-2 rounded-md cursor-pointer",
            onClick: () => r("sign-in"),
            children: "Sign In"
          }
        ),
        /* @__PURE__ */ S.jsx(
          "button",
          {
            className: "bg-white w-full border border-[#0096A2] text-[#0096A2] px-4 py-2 rounded-md cursor-pointer hover:bg-[#0096A2] hover:text-white transition-all duration-300",
            onClick: () => r("create-account"),
            children: "Create Account"
          }
        )
      ] })
    ] }),
    i === "sign-in" && /* @__PURE__ */ S.jsx(Rg, { onClickCreateAccount: () => r("create-account") }),
    i === "create-account" && /* @__PURE__ */ S.jsx(Cg, { onClickSignin: () => r("sign-in") })
  ] });
};
var vm = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Id = De.createContext && /* @__PURE__ */ De.createContext(vm), Hg = ["attr", "size", "title"];
function qg(i, r) {
  if (i == null) return {};
  var o = Yg(i, r), s, d;
  if (Object.getOwnPropertySymbols) {
    var v = Object.getOwnPropertySymbols(i);
    for (d = 0; d < v.length; d++)
      s = v[d], !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(i, s) && (o[s] = i[s]);
  }
  return o;
}
function Yg(i, r) {
  if (i == null) return {};
  var o = {};
  for (var s in i)
    if (Object.prototype.hasOwnProperty.call(i, s)) {
      if (r.indexOf(s) >= 0) continue;
      o[s] = i[s];
    }
  return o;
}
function ri() {
  return ri = Object.assign ? Object.assign.bind() : function(i) {
    for (var r = 1; r < arguments.length; r++) {
      var o = arguments[r];
      for (var s in o)
        Object.prototype.hasOwnProperty.call(o, s) && (i[s] = o[s]);
    }
    return i;
  }, ri.apply(this, arguments);
}
function tm(i, r) {
  var o = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(i);
    r && (s = s.filter(function(d) {
      return Object.getOwnPropertyDescriptor(i, d).enumerable;
    })), o.push.apply(o, s);
  }
  return o;
}
function oi(i) {
  for (var r = 1; r < arguments.length; r++) {
    var o = arguments[r] != null ? arguments[r] : {};
    r % 2 ? tm(Object(o), !0).forEach(function(s) {
      Bg(i, s, o[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : tm(Object(o)).forEach(function(s) {
      Object.defineProperty(i, s, Object.getOwnPropertyDescriptor(o, s));
    });
  }
  return i;
}
function Bg(i, r, o) {
  return r = Gg(r), r in i ? Object.defineProperty(i, r, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : i[r] = o, i;
}
function Gg(i) {
  var r = Xg(i, "string");
  return typeof r == "symbol" ? r : r + "";
}
function Xg(i, r) {
  if (typeof i != "object" || !i) return i;
  var o = i[Symbol.toPrimitive];
  if (o !== void 0) {
    var s = o.call(i, r);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(i);
}
function bm(i) {
  return i && i.map((r, o) => /* @__PURE__ */ De.createElement(r.tag, oi({
    key: o
  }, r.attr), bm(r.child)));
}
function Vr(i) {
  return (r) => /* @__PURE__ */ De.createElement(Qg, ri({
    attr: oi({}, i.attr)
  }, r), bm(i.child));
}
function Qg(i) {
  var r = (o) => {
    var {
      attr: s,
      size: d,
      title: v
    } = i, M = qg(i, Hg), R = d || o.size || "1em", w;
    return o.className && (w = o.className), i.className && (w = (w ? w + " " : "") + i.className), /* @__PURE__ */ De.createElement("svg", ri({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, o.attr, s, M, {
      className: w,
      style: oi(oi({
        color: i.color || o.color
      }, o.style), i.style),
      height: R,
      width: R,
      xmlns: "http://www.w3.org/2000/svg"
    }), v && /* @__PURE__ */ De.createElement("title", null, v), i.children);
  };
  return Id !== void 0 ? /* @__PURE__ */ De.createElement(Id.Consumer, null, (o) => r(o)) : r(vm);
}
function kg(i) {
  return Vr({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M6.758 8.758 5.344 7.344a8.048 8.048 0 0 0-1.841 2.859l1.873.701a6.048 6.048 0 0 1 1.382-2.146zM19 12.999a7.935 7.935 0 0 0-2.344-5.655A7.917 7.917 0 0 0 12 5.069V2L7 6l5 4V7.089a5.944 5.944 0 0 1 3.242 1.669A5.956 5.956 0 0 1 17 13v.002c0 .33-.033.655-.086.977-.007.043-.011.088-.019.131a6.053 6.053 0 0 1-1.138 2.536c-.16.209-.331.412-.516.597a5.954 5.954 0 0 1-.728.613 5.906 5.906 0 0 1-2.277 1.015c-.142.03-.285.05-.43.069-.062.009-.122.021-.184.027a6.104 6.104 0 0 1-1.898-.103L9.3 20.819a8.087 8.087 0 0 0 2.534.136c.069-.007.138-.021.207-.03.205-.026.409-.056.61-.098l.053-.009-.001-.005a7.877 7.877 0 0 0 2.136-.795l.001.001.028-.019a7.906 7.906 0 0 0 1.01-.67c.27-.209.532-.43.777-.675.248-.247.47-.513.681-.785.021-.028.049-.053.07-.081l-.006-.004a7.899 7.899 0 0 0 1.093-1.997l.008.003c.029-.078.05-.158.076-.237.037-.11.075-.221.107-.333.04-.14.073-.281.105-.423.022-.099.048-.195.066-.295.032-.171.056-.344.076-.516.01-.076.023-.15.03-.227.023-.249.037-.5.037-.753.002-.002.002-.004.002-.008zM6.197 16.597l-1.6 1.201a8.045 8.045 0 0 0 2.569 2.225l.961-1.754a6.018 6.018 0 0 1-1.93-1.672zM5 13c0-.145.005-.287.015-.429l-1.994-.143a7.977 7.977 0 0 0 .483 3.372l1.873-.701A5.975 5.975 0 0 1 5 13z" }, child: [] }] })(i);
}
function pm(i) {
  return Vr({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" }, child: [] }] })(i);
}
const Zg = ({
  onToggleCallWindow: i,
  onToggleChatWindow: r
}) => {
  const { config: o } = fi(), { setChatType: s, clearInteractions: d } = hm();
  return /* @__PURE__ */ S.jsxs(
    "div",
    {
      className: "flex items-center justify-between gap-2 px-4 py-2",
      style: {
        backgroundColor: o?.theme?.chatWindow?.header?.backgroundColor || "#0096a2"
      },
      children: [
        /* @__PURE__ */ S.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ S.jsx("div", { className: "flex items-center justify-center w-9 h-9 rounded-full bg-white", children: /* @__PURE__ */ S.jsx(
            "img",
            {
              src: o?.theme?.chatWindow?.header?.avatarSrc || "https://res.cloudinary.com/dctqloe37/image/upload/v1752147771/agent_ohofti.jpg",
              alt: "ICON",
              className: "w-6 h-6 rounded-full"
            }
          ) }),
          /* @__PURE__ */ S.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ S.jsx(
              "h3",
              {
                className: "text-base font-bold",
                style: {
                  color: o?.theme?.chatWindow?.header?.color || "#ffffff"
                },
                children: o?.theme?.chatWindow?.header?.title || "MINA"
              }
            ),
            /* @__PURE__ */ S.jsx(
              "p",
              {
                className: "text-white font-light text-[9px]",
                style: {
                  color: o?.theme?.chatWindow?.header?.color || "#ffffff"
                },
                children: o?.theme?.chatWindow?.header?.description || "Ngobrol langsung dengan AI, cepat & mudah."
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "flex items-center gap-4", children: [
          o?.theme?.chatWindow?.isActiveCall && /* @__PURE__ */ S.jsxs(
            "button",
            {
              style: {
                color: o?.theme?.chatWindow?.header?.color || "#ffffff"
              },
              onClick: i,
              className: "relative cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
              children: [
                /* @__PURE__ */ S.jsx(
                  pm,
                  {
                    className: "w-5 h-5",
                    color: o?.theme?.chatWindow?.header?.color || "#ffffff"
                  }
                ),
                /* @__PURE__ */ S.jsx("div", { className: "absolute -top-0 -right-0", children: /* @__PURE__ */ S.jsx("p", { className: "text-[8px] font-medium", children: "AI" }) })
              ]
            }
          ),
          /* @__PURE__ */ S.jsx(
            "button",
            {
              className: "cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
              style: {
                color: o?.theme?.chatWindow?.header?.color || "#ffffff"
              },
              onClick: () => {
                d(), s(null);
              },
              children: /* @__PURE__ */ S.jsx(
                kg,
                {
                  className: "w-5 h-5",
                  color: o?.theme?.chatWindow?.header?.color || "#ffffff"
                }
              )
            }
          ),
          /* @__PURE__ */ S.jsx(
            "button",
            {
              className: "cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
              style: {
                color: o?.theme?.chatWindow?.header?.color || "#ffffff"
              },
              onClick: r,
              children: /* @__PURE__ */ S.jsx(
                jg,
                {
                  className: "w-5 h-5",
                  color: o?.theme?.chatWindow?.header?.color || "#ffffff"
                }
              )
            }
          )
        ] })
      ]
    }
  );
};
function Sm(i) {
  var r, o, s = "";
  if (typeof i == "string" || typeof i == "number") s += i;
  else if (typeof i == "object") if (Array.isArray(i)) {
    var d = i.length;
    for (r = 0; r < d; r++) i[r] && (o = Sm(i[r])) && (s && (s += " "), s += o);
  } else for (o in i) i[o] && (s && (s += " "), s += o);
  return s;
}
function Vg() {
  for (var i, r, o = 0, s = "", d = arguments.length; o < d; o++) (i = arguments[o]) && (r = Sm(i)) && (s && (s += " "), s += r);
  return s;
}
const Lr = "-", Lg = (i) => {
  const r = Jg(i), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: s
  } = i;
  return {
    getClassGroupId: (M) => {
      const R = M.split(Lr);
      return R[0] === "" && R.length !== 1 && R.shift(), xm(R, r) || Kg(M);
    },
    getConflictingClassGroupIds: (M, R) => {
      const w = o[M] || [];
      return R && s[M] ? [...w, ...s[M]] : w;
    }
  };
}, xm = (i, r) => {
  if (i.length === 0)
    return r.classGroupId;
  const o = i[0], s = r.nextPart.get(o), d = s ? xm(i.slice(1), s) : void 0;
  if (d)
    return d;
  if (r.validators.length === 0)
    return;
  const v = i.join(Lr);
  return r.validators.find(({
    validator: M
  }) => M(v))?.classGroupId;
}, em = /^\[(.+)\]$/, Kg = (i) => {
  if (em.test(i)) {
    const r = em.exec(i)[1], o = r?.substring(0, r.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, Jg = (i) => {
  const {
    theme: r,
    classGroups: o
  } = i, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const d in o)
    Br(o[d], s, d, r);
  return s;
}, Br = (i, r, o, s) => {
  i.forEach((d) => {
    if (typeof d == "string") {
      const v = d === "" ? r : lm(r, d);
      v.classGroupId = o;
      return;
    }
    if (typeof d == "function") {
      if (Wg(d)) {
        Br(d(s), r, o, s);
        return;
      }
      r.validators.push({
        validator: d,
        classGroupId: o
      });
      return;
    }
    Object.entries(d).forEach(([v, M]) => {
      Br(M, lm(r, v), o, s);
    });
  });
}, lm = (i, r) => {
  let o = i;
  return r.split(Lr).forEach((s) => {
    o.nextPart.has(s) || o.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(s);
  }), o;
}, Wg = (i) => i.isThemeGetter, $g = (i) => {
  if (i < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  const d = (v, M) => {
    o.set(v, M), r++, r > i && (r = 0, s = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(v) {
      let M = o.get(v);
      if (M !== void 0)
        return M;
      if ((M = s.get(v)) !== void 0)
        return d(v, M), M;
    },
    set(v, M) {
      o.has(v) ? o.set(v, M) : d(v, M);
    }
  };
}, Gr = "!", Xr = ":", Fg = Xr.length, Pg = (i) => {
  const {
    prefix: r,
    experimentalParseClassName: o
  } = i;
  let s = (d) => {
    const v = [];
    let M = 0, R = 0, w = 0, p;
    for (let ut = 0; ut < d.length; ut++) {
      let V = d[ut];
      if (M === 0 && R === 0) {
        if (V === Xr) {
          v.push(d.slice(w, ut)), w = ut + Fg;
          continue;
        }
        if (V === "/") {
          p = ut;
          continue;
        }
      }
      V === "[" ? M++ : V === "]" ? M-- : V === "(" ? R++ : V === ")" && R--;
    }
    const q = v.length === 0 ? d : d.substring(w), U = Ig(q), $ = U !== q, ft = p && p > w ? p - w : void 0;
    return {
      modifiers: v,
      hasImportantModifier: $,
      baseClassName: U,
      maybePostfixModifierPosition: ft
    };
  };
  if (r) {
    const d = r + Xr, v = s;
    s = (M) => M.startsWith(d) ? v(M.substring(d.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: M,
      maybePostfixModifierPosition: void 0
    };
  }
  if (o) {
    const d = s;
    s = (v) => o({
      className: v,
      parseClassName: d
    });
  }
  return s;
}, Ig = (i) => i.endsWith(Gr) ? i.substring(0, i.length - 1) : i.startsWith(Gr) ? i.substring(1) : i, ty = (i) => {
  const r = Object.fromEntries(i.orderSensitiveModifiers.map((s) => [s, !0]));
  return (s) => {
    if (s.length <= 1)
      return s;
    const d = [];
    let v = [];
    return s.forEach((M) => {
      M[0] === "[" || r[M] ? (d.push(...v.sort(), M), v = []) : v.push(M);
    }), d.push(...v.sort()), d;
  };
}, ey = (i) => ({
  cache: $g(i.cacheSize),
  parseClassName: Pg(i),
  sortModifiers: ty(i),
  ...Lg(i)
}), ly = /\s+/, ay = (i, r) => {
  const {
    parseClassName: o,
    getClassGroupId: s,
    getConflictingClassGroupIds: d,
    sortModifiers: v
  } = r, M = [], R = i.trim().split(ly);
  let w = "";
  for (let p = R.length - 1; p >= 0; p -= 1) {
    const q = R[p], {
      isExternal: U,
      modifiers: $,
      hasImportantModifier: ft,
      baseClassName: ut,
      maybePostfixModifierPosition: V
    } = o(q);
    if (U) {
      w = q + (w.length > 0 ? " " + w : w);
      continue;
    }
    let vt = !!V, bt = s(vt ? ut.substring(0, V) : ut);
    if (!bt) {
      if (!vt) {
        w = q + (w.length > 0 ? " " + w : w);
        continue;
      }
      if (bt = s(ut), !bt) {
        w = q + (w.length > 0 ? " " + w : w);
        continue;
      }
      vt = !1;
    }
    const st = v($).join(":"), Tt = ft ? st + Gr : st, it = Tt + bt;
    if (M.includes(it))
      continue;
    M.push(it);
    const Ct = d(bt, vt);
    for (let W = 0; W < Ct.length; ++W) {
      const Ut = Ct[W];
      M.push(Tt + Ut);
    }
    w = q + (w.length > 0 ? " " + w : w);
  }
  return w;
};
function ny() {
  let i = 0, r, o, s = "";
  for (; i < arguments.length; )
    (r = arguments[i++]) && (o = Tm(r)) && (s && (s += " "), s += o);
  return s;
}
const Tm = (i) => {
  if (typeof i == "string")
    return i;
  let r, o = "";
  for (let s = 0; s < i.length; s++)
    i[s] && (r = Tm(i[s])) && (o && (o += " "), o += r);
  return o;
};
function uy(i, ...r) {
  let o, s, d, v = M;
  function M(w) {
    const p = r.reduce((q, U) => U(q), i());
    return o = ey(p), s = o.cache.get, d = o.cache.set, v = R, R(w);
  }
  function R(w) {
    const p = s(w);
    if (p)
      return p;
    const q = ay(w, o);
    return d(w, q), q;
  }
  return function() {
    return v(ny.apply(null, arguments));
  };
}
const Qt = (i) => {
  const r = (o) => o[i] || [];
  return r.isThemeGetter = !0, r;
}, Am = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, wm = /^\((?:(\w[\w-]*):)?(.+)\)$/i, iy = /^\d+\/\d+$/, cy = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ry = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, oy = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, sy = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, fy = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ua = (i) => iy.test(i), I = (i) => !!i && !Number.isNaN(Number(i)), El = (i) => !!i && Number.isInteger(Number(i)), Rr = (i) => i.endsWith("%") && I(i.slice(0, -1)), el = (i) => cy.test(i), dy = () => !0, my = (i) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ry.test(i) && !oy.test(i)
), Mm = () => !1, hy = (i) => sy.test(i), gy = (i) => fy.test(i), yy = (i) => !G(i) && !X(i), vy = (i) => qa(i, Nm, Mm), G = (i) => Am.test(i), Jl = (i) => qa(i, zm, my), Cr = (i) => qa(i, Ty, I), am = (i) => qa(i, Em, Mm), by = (i) => qa(i, Om, gy), ni = (i) => qa(i, _m, hy), X = (i) => wm.test(i), Bn = (i) => Ya(i, zm), py = (i) => Ya(i, Ay), nm = (i) => Ya(i, Em), Sy = (i) => Ya(i, Nm), xy = (i) => Ya(i, Om), ui = (i) => Ya(i, _m, !0), qa = (i, r, o) => {
  const s = Am.exec(i);
  return s ? s[1] ? r(s[1]) : o(s[2]) : !1;
}, Ya = (i, r, o = !1) => {
  const s = wm.exec(i);
  return s ? s[1] ? r(s[1]) : o : !1;
}, Em = (i) => i === "position" || i === "percentage", Om = (i) => i === "image" || i === "url", Nm = (i) => i === "length" || i === "size" || i === "bg-size", zm = (i) => i === "length", Ty = (i) => i === "number", Ay = (i) => i === "family-name", _m = (i) => i === "shadow", wy = () => {
  const i = Qt("color"), r = Qt("font"), o = Qt("text"), s = Qt("font-weight"), d = Qt("tracking"), v = Qt("leading"), M = Qt("breakpoint"), R = Qt("container"), w = Qt("spacing"), p = Qt("radius"), q = Qt("shadow"), U = Qt("inset-shadow"), $ = Qt("text-shadow"), ft = Qt("drop-shadow"), ut = Qt("blur"), V = Qt("perspective"), vt = Qt("aspect"), bt = Qt("ease"), st = Qt("animate"), Tt = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], it = () => [
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
  ], Ct = () => [...it(), X, G], W = () => ["auto", "hidden", "clip", "visible", "scroll"], Ut = () => ["auto", "contain", "none"], Z = () => [X, G, w], Mt = () => [Ua, "full", "auto", ...Z()], te = () => [El, "none", "subgrid", X, G], ce = () => ["auto", {
    span: ["full", El, X, G]
  }, El, X, G], Ht = () => [El, "auto", X, G], Kt = () => ["auto", "min", "max", "fr", X, G], be = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Et = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], j = () => ["auto", ...Z()], D = () => [Ua, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...Z()], E = () => [i, X, G], et = () => [...it(), nm, am, {
    position: [X, G]
  }], dt = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], g = () => ["auto", "cover", "contain", Sy, vy, {
    size: [X, G]
  }], _ = () => [Rr, Bn, Jl], H = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    X,
    G
  ], C = () => ["", I, Bn, Jl], k = () => ["solid", "dashed", "dotted", "double"], rt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Y = () => [I, Rr, nm, am], qt = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    ut,
    X,
    G
  ], mt = () => ["none", I, X, G], re = () => ["none", I, X, G], zl = () => [I, X, G], Be = () => [Ua, "full", ...Z()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [el],
      breakpoint: [el],
      color: [dy],
      container: [el],
      "drop-shadow": [el],
      ease: ["in", "out", "in-out"],
      font: [yy],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [el],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [el],
      shadow: [el],
      spacing: ["px", I],
      text: [el],
      "text-shadow": [el],
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
        aspect: ["auto", "square", Ua, G, X, vt]
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
        columns: [I, G, X, R]
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
        object: Ct()
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
        overscroll: Ut()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Ut()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Ut()
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
        inset: Mt()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": Mt()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": Mt()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: Mt()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: Mt()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: Mt()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: Mt()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: Mt()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: Mt()
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
        z: [El, "auto", X, G]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ua, "full", "auto", R, ...Z()]
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
        flex: [I, Ua, "auto", "initial", "none", G]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", I, X, G]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", I, X, G]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [El, "first", "last", "none", X, G]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": te()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ce()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Ht()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Ht()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": te()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ce()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Ht()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Ht()
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
        "auto-cols": Kt()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Kt()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: Z()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": Z()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": Z()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...be(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...Et(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...Et()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...be()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...Et(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...Et(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": be()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...Et(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...Et()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: Z()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: Z()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: Z()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: Z()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: Z()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: Z()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: Z()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: Z()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: Z()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: j()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: j()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: j()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: j()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: j()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: j()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: j()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: j()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: j()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": Z()
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
        "space-y": Z()
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
        size: D()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [R, "screen", ...D()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          R,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...D()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          R,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [M]
          },
          ...D()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...D()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...D()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...D()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", o, Bn, Jl]
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
        font: [s, X, Cr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Rr, G]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [py, G, r]
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
        tracking: [d, X, G]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [I, "none", X, Cr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          v,
          ...Z()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", X, G]
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
        list: ["disc", "decimal", "none", X, G]
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
        placeholder: E()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: E()
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
        decoration: [...k(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [I, "from-font", "auto", X, Jl]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: E()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [I, "auto", X, G]
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
        indent: Z()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", X, G]
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
        content: ["none", X, G]
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
        bg: et()
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
        bg: g()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, El, X, G],
          radial: ["", X, G],
          conic: [El, X, G]
        }, xy, by]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: E()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: _()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: _()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: _()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: E()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: E()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: E()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: H()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": H()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": H()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": H()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": H()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": H()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": H()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": H()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": H()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": H()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": H()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": H()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": H()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": H()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": H()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: C()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": C()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": C()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": C()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": C()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": C()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": C()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": C()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": C()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": C()
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
        "divide-y": C()
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
        border: [...k(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...k(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: E()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": E()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": E()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": E()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": E()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": E()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": E()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": E()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": E()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: E()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...k(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [I, X, G]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", I, Bn, Jl]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: E()
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
          ui,
          ni
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: E()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", U, ui, ni]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": E()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: C()
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
        ring: E()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [I, Jl]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": E()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": C()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": E()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", $, ui, ni]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": E()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [I, X, G]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...rt(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": rt()
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
        "mask-linear": [I]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": Y()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": Y()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": E()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": E()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": Y()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": Y()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": E()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": E()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": Y()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": Y()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": E()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": E()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": Y()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": Y()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": E()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": E()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": Y()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": Y()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": E()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": E()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": Y()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": Y()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": E()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": E()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": Y()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": Y()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": E()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": E()
      }],
      "mask-image-radial": [{
        "mask-radial": [X, G]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": Y()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": Y()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": E()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": E()
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
        "mask-radial-at": it()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [I]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": Y()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": Y()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": E()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": E()
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
        mask: et()
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
        mask: g()
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
        mask: ["none", X, G]
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
          G
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: qt()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [I, X, G]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [I, X, G]
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
          ft,
          ui,
          ni
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": E()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", I, X, G]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [I, X, G]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", I, X, G]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [I, X, G]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", I, X, G]
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
          G
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": qt()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [I, X, G]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [I, X, G]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", I, X, G]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [I, X, G]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", I, X, G]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [I, X, G]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [I, X, G]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", I, X, G]
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
        "border-spacing": Z()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": Z()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": Z()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", X, G]
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
        duration: [I, "initial", X, G]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", bt, X, G]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [I, X, G]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", st, X, G]
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
        perspective: [V, X, G]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": Ct()
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
        skew: zl()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": zl()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": zl()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [X, G, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: Ct()
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
        translate: Be()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Be()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Be()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Be()
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
        accent: E()
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
        caret: E()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", X, G]
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
        "scroll-m": Z()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": Z()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": Z()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": Z()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": Z()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": Z()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": Z()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": Z()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": Z()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": Z()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": Z()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": Z()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": Z()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": Z()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": Z()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": Z()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": Z()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": Z()
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
        "will-change": ["auto", "scroll", "contents", "transform", X, G]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...E()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [I, Bn, Jl, Cr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...E()]
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
}, My = /* @__PURE__ */ uy(wy);
function ii(...i) {
  return My(Vg(i));
}
const Dm = 6048e5, Ey = 864e5, um = Symbol.for("constructDateFrom");
function Nl(i, r) {
  return typeof i == "function" ? i(r) : i && typeof i == "object" && um in i ? i[um](r) : i instanceof Date ? new i.constructor(r) : new Date(r);
}
function je(i, r) {
  return Nl(r || i, i);
}
let Oy = {};
function di() {
  return Oy;
}
function Qn(i, r) {
  const o = di(), s = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? o.weekStartsOn ?? o.locale?.options?.weekStartsOn ?? 0, d = je(i, r?.in), v = d.getDay(), M = (v < s ? 7 : 0) + v - s;
  return d.setDate(d.getDate() - M), d.setHours(0, 0, 0, 0), d;
}
function si(i, r) {
  return Qn(i, { ...r, weekStartsOn: 1 });
}
function jm(i, r) {
  const o = je(i, r?.in), s = o.getFullYear(), d = Nl(o, 0);
  d.setFullYear(s + 1, 0, 4), d.setHours(0, 0, 0, 0);
  const v = si(d), M = Nl(o, 0);
  M.setFullYear(s, 0, 4), M.setHours(0, 0, 0, 0);
  const R = si(M);
  return o.getTime() >= v.getTime() ? s + 1 : o.getTime() >= R.getTime() ? s : s - 1;
}
function im(i) {
  const r = je(i), o = new Date(
    Date.UTC(
      r.getFullYear(),
      r.getMonth(),
      r.getDate(),
      r.getHours(),
      r.getMinutes(),
      r.getSeconds(),
      r.getMilliseconds()
    )
  );
  return o.setUTCFullYear(r.getFullYear()), +i - +o;
}
function Ny(i, ...r) {
  const o = Nl.bind(
    null,
    r.find((s) => typeof s == "object")
  );
  return r.map(o);
}
function cm(i, r) {
  const o = je(i, r?.in);
  return o.setHours(0, 0, 0, 0), o;
}
function zy(i, r, o) {
  const [s, d] = Ny(
    o?.in,
    i,
    r
  ), v = cm(s), M = cm(d), R = +v - im(v), w = +M - im(M);
  return Math.round((R - w) / Ey);
}
function _y(i, r) {
  const o = jm(i, r), s = Nl(i, 0);
  return s.setFullYear(o, 0, 4), s.setHours(0, 0, 0, 0), si(s);
}
function Dy(i) {
  return i instanceof Date || typeof i == "object" && Object.prototype.toString.call(i) === "[object Date]";
}
function jy(i) {
  return !(!Dy(i) && typeof i != "number" || isNaN(+je(i)));
}
function Ry(i, r) {
  const o = je(i, r?.in);
  return o.setFullYear(o.getFullYear(), 0, 1), o.setHours(0, 0, 0, 0), o;
}
const Cy = {
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
}, Uy = (i, r, o) => {
  let s;
  const d = Cy[i];
  return typeof d == "string" ? s = d : r === 1 ? s = d.one : s = d.other.replace("{{count}}", r.toString()), o?.addSuffix ? o.comparison && o.comparison > 0 ? "in " + s : s + " ago" : s;
};
function Ur(i) {
  return (r = {}) => {
    const o = r.width ? String(r.width) : i.defaultWidth;
    return i.formats[o] || i.formats[i.defaultWidth];
  };
}
const Hy = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, qy = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Yy = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, By = {
  date: Ur({
    formats: Hy,
    defaultWidth: "full"
  }),
  time: Ur({
    formats: qy,
    defaultWidth: "full"
  }),
  dateTime: Ur({
    formats: Yy,
    defaultWidth: "full"
  })
}, Gy = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Xy = (i, r, o, s) => Gy[i];
function Gn(i) {
  return (r, o) => {
    const s = o?.context ? String(o.context) : "standalone";
    let d;
    if (s === "formatting" && i.formattingValues) {
      const M = i.defaultFormattingWidth || i.defaultWidth, R = o?.width ? String(o.width) : M;
      d = i.formattingValues[R] || i.formattingValues[M];
    } else {
      const M = i.defaultWidth, R = o?.width ? String(o.width) : i.defaultWidth;
      d = i.values[R] || i.values[M];
    }
    const v = i.argumentCallback ? i.argumentCallback(r) : r;
    return d[v];
  };
}
const Qy = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ky = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Zy = {
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
}, Vy = {
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
}, Ly = {
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
}, Ky = {
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
}, Jy = (i, r) => {
  const o = Number(i), s = o % 100;
  if (s > 20 || s < 10)
    switch (s % 10) {
      case 1:
        return o + "st";
      case 2:
        return o + "nd";
      case 3:
        return o + "rd";
    }
  return o + "th";
}, Wy = {
  ordinalNumber: Jy,
  era: Gn({
    values: Qy,
    defaultWidth: "wide"
  }),
  quarter: Gn({
    values: ky,
    defaultWidth: "wide",
    argumentCallback: (i) => i - 1
  }),
  month: Gn({
    values: Zy,
    defaultWidth: "wide"
  }),
  day: Gn({
    values: Vy,
    defaultWidth: "wide"
  }),
  dayPeriod: Gn({
    values: Ly,
    defaultWidth: "wide",
    formattingValues: Ky,
    defaultFormattingWidth: "wide"
  })
};
function Xn(i) {
  return (r, o = {}) => {
    const s = o.width, d = s && i.matchPatterns[s] || i.matchPatterns[i.defaultMatchWidth], v = r.match(d);
    if (!v)
      return null;
    const M = v[0], R = s && i.parsePatterns[s] || i.parsePatterns[i.defaultParseWidth], w = Array.isArray(R) ? Fy(R, (U) => U.test(M)) : (
      // [TODO] -- I challenge you to fix the type
      $y(R, (U) => U.test(M))
    );
    let p;
    p = i.valueCallback ? i.valueCallback(w) : w, p = o.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      o.valueCallback(p)
    ) : p;
    const q = r.slice(M.length);
    return { value: p, rest: q };
  };
}
function $y(i, r) {
  for (const o in i)
    if (Object.prototype.hasOwnProperty.call(i, o) && r(i[o]))
      return o;
}
function Fy(i, r) {
  for (let o = 0; o < i.length; o++)
    if (r(i[o]))
      return o;
}
function Py(i) {
  return (r, o = {}) => {
    const s = r.match(i.matchPattern);
    if (!s) return null;
    const d = s[0], v = r.match(i.parsePattern);
    if (!v) return null;
    let M = i.valueCallback ? i.valueCallback(v[0]) : v[0];
    M = o.valueCallback ? o.valueCallback(M) : M;
    const R = r.slice(d.length);
    return { value: M, rest: R };
  };
}
const Iy = /^(\d+)(th|st|nd|rd)?/i, tv = /\d+/i, ev = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, lv = {
  any: [/^b/i, /^(a|c)/i]
}, av = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, nv = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, uv = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, iv = {
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
}, cv = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, rv = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ov = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, sv = {
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
}, fv = {
  ordinalNumber: Py({
    matchPattern: Iy,
    parsePattern: tv,
    valueCallback: (i) => parseInt(i, 10)
  }),
  era: Xn({
    matchPatterns: ev,
    defaultMatchWidth: "wide",
    parsePatterns: lv,
    defaultParseWidth: "any"
  }),
  quarter: Xn({
    matchPatterns: av,
    defaultMatchWidth: "wide",
    parsePatterns: nv,
    defaultParseWidth: "any",
    valueCallback: (i) => i + 1
  }),
  month: Xn({
    matchPatterns: uv,
    defaultMatchWidth: "wide",
    parsePatterns: iv,
    defaultParseWidth: "any"
  }),
  day: Xn({
    matchPatterns: cv,
    defaultMatchWidth: "wide",
    parsePatterns: rv,
    defaultParseWidth: "any"
  }),
  dayPeriod: Xn({
    matchPatterns: ov,
    defaultMatchWidth: "any",
    parsePatterns: sv,
    defaultParseWidth: "any"
  })
}, dv = {
  code: "en-US",
  formatDistance: Uy,
  formatLong: By,
  formatRelative: Xy,
  localize: Wy,
  match: fv,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function mv(i, r) {
  const o = je(i, r?.in);
  return zy(o, Ry(o)) + 1;
}
function hv(i, r) {
  const o = je(i, r?.in), s = +si(o) - +_y(o);
  return Math.round(s / Dm) + 1;
}
function Rm(i, r) {
  const o = je(i, r?.in), s = o.getFullYear(), d = di(), v = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? d.firstWeekContainsDate ?? d.locale?.options?.firstWeekContainsDate ?? 1, M = Nl(r?.in || i, 0);
  M.setFullYear(s + 1, 0, v), M.setHours(0, 0, 0, 0);
  const R = Qn(M, r), w = Nl(r?.in || i, 0);
  w.setFullYear(s, 0, v), w.setHours(0, 0, 0, 0);
  const p = Qn(w, r);
  return +o >= +R ? s + 1 : +o >= +p ? s : s - 1;
}
function gv(i, r) {
  const o = di(), s = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, d = Rm(i, r), v = Nl(r?.in || i, 0);
  return v.setFullYear(d, 0, s), v.setHours(0, 0, 0, 0), Qn(v, r);
}
function yv(i, r) {
  const o = je(i, r?.in), s = +Qn(o, r) - +gv(o, r);
  return Math.round(s / Dm) + 1;
}
function yt(i, r) {
  const o = i < 0 ? "-" : "", s = Math.abs(i).toString().padStart(r, "0");
  return o + s;
}
const Ol = {
  // Year
  y(i, r) {
    const o = i.getFullYear(), s = o > 0 ? o : 1 - o;
    return yt(r === "yy" ? s % 100 : s, r.length);
  },
  // Month
  M(i, r) {
    const o = i.getMonth();
    return r === "M" ? String(o + 1) : yt(o + 1, 2);
  },
  // Day of the month
  d(i, r) {
    return yt(i.getDate(), r.length);
  },
  // AM or PM
  a(i, r) {
    const o = i.getHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return o.toUpperCase();
      case "aaa":
        return o;
      case "aaaaa":
        return o[0];
      case "aaaa":
      default:
        return o === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(i, r) {
    return yt(i.getHours() % 12 || 12, r.length);
  },
  // Hour [0-23]
  H(i, r) {
    return yt(i.getHours(), r.length);
  },
  // Minute
  m(i, r) {
    return yt(i.getMinutes(), r.length);
  },
  // Second
  s(i, r) {
    return yt(i.getSeconds(), r.length);
  },
  // Fraction of second
  S(i, r) {
    const o = r.length, s = i.getMilliseconds(), d = Math.trunc(
      s * Math.pow(10, o - 3)
    );
    return yt(d, r.length);
  }
}, Ha = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, rm = {
  // Era
  G: function(i, r, o) {
    const s = i.getFullYear() > 0 ? 1 : 0;
    switch (r) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return o.era(s, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return o.era(s, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return o.era(s, { width: "wide" });
    }
  },
  // Year
  y: function(i, r, o) {
    if (r === "yo") {
      const s = i.getFullYear(), d = s > 0 ? s : 1 - s;
      return o.ordinalNumber(d, { unit: "year" });
    }
    return Ol.y(i, r);
  },
  // Local week-numbering year
  Y: function(i, r, o, s) {
    const d = Rm(i, s), v = d > 0 ? d : 1 - d;
    if (r === "YY") {
      const M = v % 100;
      return yt(M, 2);
    }
    return r === "Yo" ? o.ordinalNumber(v, { unit: "year" }) : yt(v, r.length);
  },
  // ISO week-numbering year
  R: function(i, r) {
    const o = jm(i);
    return yt(o, r.length);
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
  u: function(i, r) {
    const o = i.getFullYear();
    return yt(o, r.length);
  },
  // Quarter
  Q: function(i, r, o) {
    const s = Math.ceil((i.getMonth() + 1) / 3);
    switch (r) {
      // 1, 2, 3, 4
      case "Q":
        return String(s);
      // 01, 02, 03, 04
      case "QQ":
        return yt(s, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return o.ordinalNumber(s, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return o.quarter(s, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return o.quarter(s, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return o.quarter(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(i, r, o) {
    const s = Math.ceil((i.getMonth() + 1) / 3);
    switch (r) {
      // 1, 2, 3, 4
      case "q":
        return String(s);
      // 01, 02, 03, 04
      case "qq":
        return yt(s, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return o.ordinalNumber(s, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return o.quarter(s, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return o.quarter(s, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return o.quarter(s, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(i, r, o) {
    const s = i.getMonth();
    switch (r) {
      case "M":
      case "MM":
        return Ol.M(i, r);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return o.ordinalNumber(s + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return o.month(s, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return o.month(s, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return o.month(s, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(i, r, o) {
    const s = i.getMonth();
    switch (r) {
      // 1, 2, ..., 12
      case "L":
        return String(s + 1);
      // 01, 02, ..., 12
      case "LL":
        return yt(s + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return o.ordinalNumber(s + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return o.month(s, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return o.month(s, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return o.month(s, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(i, r, o, s) {
    const d = yv(i, s);
    return r === "wo" ? o.ordinalNumber(d, { unit: "week" }) : yt(d, r.length);
  },
  // ISO week of year
  I: function(i, r, o) {
    const s = hv(i);
    return r === "Io" ? o.ordinalNumber(s, { unit: "week" }) : yt(s, r.length);
  },
  // Day of the month
  d: function(i, r, o) {
    return r === "do" ? o.ordinalNumber(i.getDate(), { unit: "date" }) : Ol.d(i, r);
  },
  // Day of year
  D: function(i, r, o) {
    const s = mv(i);
    return r === "Do" ? o.ordinalNumber(s, { unit: "dayOfYear" }) : yt(s, r.length);
  },
  // Day of week
  E: function(i, r, o) {
    const s = i.getDay();
    switch (r) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return o.day(s, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return o.day(s, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return o.day(s, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return o.day(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(i, r, o, s) {
    const d = i.getDay(), v = (d - s.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(v);
      // Padded numerical value
      case "ee":
        return yt(v, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return o.ordinalNumber(v, { unit: "day" });
      case "eee":
        return o.day(d, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return o.day(d, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return o.day(d, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return o.day(d, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(i, r, o, s) {
    const d = i.getDay(), v = (d - s.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      // Numerical value (same as in `e`)
      case "c":
        return String(v);
      // Padded numerical value
      case "cc":
        return yt(v, r.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return o.ordinalNumber(v, { unit: "day" });
      case "ccc":
        return o.day(d, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return o.day(d, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return o.day(d, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return o.day(d, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(i, r, o) {
    const s = i.getDay(), d = s === 0 ? 7 : s;
    switch (r) {
      // 2
      case "i":
        return String(d);
      // 02
      case "ii":
        return yt(d, r.length);
      // 2nd
      case "io":
        return o.ordinalNumber(d, { unit: "day" });
      // Tue
      case "iii":
        return o.day(s, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return o.day(s, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return o.day(s, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return o.day(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(i, r, o) {
    const d = i.getHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return o.dayPeriod(d, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return o.dayPeriod(d, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return o.dayPeriod(d, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return o.dayPeriod(d, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(i, r, o) {
    const s = i.getHours();
    let d;
    switch (s === 12 ? d = Ha.noon : s === 0 ? d = Ha.midnight : d = s / 12 >= 1 ? "pm" : "am", r) {
      case "b":
      case "bb":
        return o.dayPeriod(d, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return o.dayPeriod(d, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return o.dayPeriod(d, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return o.dayPeriod(d, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(i, r, o) {
    const s = i.getHours();
    let d;
    switch (s >= 17 ? d = Ha.evening : s >= 12 ? d = Ha.afternoon : s >= 4 ? d = Ha.morning : d = Ha.night, r) {
      case "B":
      case "BB":
      case "BBB":
        return o.dayPeriod(d, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return o.dayPeriod(d, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return o.dayPeriod(d, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(i, r, o) {
    if (r === "ho") {
      let s = i.getHours() % 12;
      return s === 0 && (s = 12), o.ordinalNumber(s, { unit: "hour" });
    }
    return Ol.h(i, r);
  },
  // Hour [0-23]
  H: function(i, r, o) {
    return r === "Ho" ? o.ordinalNumber(i.getHours(), { unit: "hour" }) : Ol.H(i, r);
  },
  // Hour [0-11]
  K: function(i, r, o) {
    const s = i.getHours() % 12;
    return r === "Ko" ? o.ordinalNumber(s, { unit: "hour" }) : yt(s, r.length);
  },
  // Hour [1-24]
  k: function(i, r, o) {
    let s = i.getHours();
    return s === 0 && (s = 24), r === "ko" ? o.ordinalNumber(s, { unit: "hour" }) : yt(s, r.length);
  },
  // Minute
  m: function(i, r, o) {
    return r === "mo" ? o.ordinalNumber(i.getMinutes(), { unit: "minute" }) : Ol.m(i, r);
  },
  // Second
  s: function(i, r, o) {
    return r === "so" ? o.ordinalNumber(i.getSeconds(), { unit: "second" }) : Ol.s(i, r);
  },
  // Fraction of second
  S: function(i, r) {
    return Ol.S(i, r);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(i, r, o) {
    const s = i.getTimezoneOffset();
    if (s === 0)
      return "Z";
    switch (r) {
      // Hours and optional minutes
      case "X":
        return sm(s);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Wl(s);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Wl(s, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(i, r, o) {
    const s = i.getTimezoneOffset();
    switch (r) {
      // Hours and optional minutes
      case "x":
        return sm(s);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Wl(s);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Wl(s, ":");
    }
  },
  // Timezone (GMT)
  O: function(i, r, o) {
    const s = i.getTimezoneOffset();
    switch (r) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + om(s, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Wl(s, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(i, r, o) {
    const s = i.getTimezoneOffset();
    switch (r) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + om(s, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Wl(s, ":");
    }
  },
  // Seconds timestamp
  t: function(i, r, o) {
    const s = Math.trunc(+i / 1e3);
    return yt(s, r.length);
  },
  // Milliseconds timestamp
  T: function(i, r, o) {
    return yt(+i, r.length);
  }
};
function om(i, r = "") {
  const o = i > 0 ? "-" : "+", s = Math.abs(i), d = Math.trunc(s / 60), v = s % 60;
  return v === 0 ? o + String(d) : o + String(d) + r + yt(v, 2);
}
function sm(i, r) {
  return i % 60 === 0 ? (i > 0 ? "-" : "+") + yt(Math.abs(i) / 60, 2) : Wl(i, r);
}
function Wl(i, r = "") {
  const o = i > 0 ? "-" : "+", s = Math.abs(i), d = yt(Math.trunc(s / 60), 2), v = yt(s % 60, 2);
  return o + d + r + v;
}
const fm = (i, r) => {
  switch (i) {
    case "P":
      return r.date({ width: "short" });
    case "PP":
      return r.date({ width: "medium" });
    case "PPP":
      return r.date({ width: "long" });
    case "PPPP":
    default:
      return r.date({ width: "full" });
  }
}, Cm = (i, r) => {
  switch (i) {
    case "p":
      return r.time({ width: "short" });
    case "pp":
      return r.time({ width: "medium" });
    case "ppp":
      return r.time({ width: "long" });
    case "pppp":
    default:
      return r.time({ width: "full" });
  }
}, vv = (i, r) => {
  const o = i.match(/(P+)(p+)?/) || [], s = o[1], d = o[2];
  if (!d)
    return fm(i, r);
  let v;
  switch (s) {
    case "P":
      v = r.dateTime({ width: "short" });
      break;
    case "PP":
      v = r.dateTime({ width: "medium" });
      break;
    case "PPP":
      v = r.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      v = r.dateTime({ width: "full" });
      break;
  }
  return v.replace("{{date}}", fm(s, r)).replace("{{time}}", Cm(d, r));
}, bv = {
  p: Cm,
  P: vv
}, pv = /^D+$/, Sv = /^Y+$/, xv = ["D", "DD", "YY", "YYYY"];
function Tv(i) {
  return pv.test(i);
}
function Av(i) {
  return Sv.test(i);
}
function wv(i, r, o) {
  const s = Mv(i, r, o);
  if (console.warn(s), xv.includes(i)) throw new RangeError(s);
}
function Mv(i, r, o) {
  const s = i[0] === "Y" ? "years" : "days of the month";
  return `Use \`${i.toLowerCase()}\` instead of \`${i}\` (in \`${r}\`) for formatting ${s} to the input \`${o}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Ev = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Ov = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Nv = /^'([^]*?)'?$/, zv = /''/g, _v = /[a-zA-Z]/;
function Dv(i, r, o) {
  const s = di(), d = s.locale ?? dv, v = s.firstWeekContainsDate ?? s.locale?.options?.firstWeekContainsDate ?? 1, M = s.weekStartsOn ?? s.locale?.options?.weekStartsOn ?? 0, R = je(i, o?.in);
  if (!jy(R))
    throw new RangeError("Invalid time value");
  let w = r.match(Ov).map((q) => {
    const U = q[0];
    if (U === "p" || U === "P") {
      const $ = bv[U];
      return $(q, d.formatLong);
    }
    return q;
  }).join("").match(Ev).map((q) => {
    if (q === "''")
      return { isToken: !1, value: "'" };
    const U = q[0];
    if (U === "'")
      return { isToken: !1, value: jv(q) };
    if (rm[U])
      return { isToken: !0, value: q };
    if (U.match(_v))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + U + "`"
      );
    return { isToken: !1, value: q };
  });
  d.localize.preprocessor && (w = d.localize.preprocessor(R, w));
  const p = {
    firstWeekContainsDate: v,
    weekStartsOn: M,
    locale: d
  };
  return w.map((q) => {
    if (!q.isToken) return q.value;
    const U = q.value;
    (Av(U) || Tv(U)) && wv(U, r, String(i));
    const $ = rm[U[0]];
    return $(R, U, d.localize, p);
  }).join("");
}
function jv(i) {
  const r = i.match(Nv);
  return r ? r[1].replace(zv, "'") : i;
}
const ci = ({ message: i, isUser: r = !1, thinking: o = !1, date: s }) => {
  const { config: d } = fi(), v = (M, R) => M.replace(
    /<a href="([^"]+)"[^>]*>(.*?)<\/a>/g,
    `<a href="$1" target="_blank" style="color: ${R ? "#ffffff" : "#1565c0"}; text-decoration-line: underline; word-break: break-word; white-space: normal;" rel="noopener noreferrer">$2</a>`
  ).replace(
    /\*(.*?)\*/g,
    "<strong>$1</strong>"
  ).replace(
    /\[(.*?)\]\((https?:\/\/[^\s]+)\)/g,
    `<a href="$2" target="_blank" style="color: ${R ? "#ffffff" : "#1565c0"}; text-decoration-line: underline; word-break: break-word; white-space: normal;" rel="noopener noreferrer">$1</a>`
  ).replace(
    new RegExp('(?<!href=")https?:\\/\\/[^\\s"]+', "g"),
    `<a href="$&" target="_blank" style="color: ${R ? "#ffffff" : "#1565c0"}; text-decoration-line: underline; word-break: break-word; white-space: normal;" rel="noopener noreferrer">$&</a>`
  ).replace(/\n/g, "<br>");
  return o ? /* @__PURE__ */ S.jsx(
    "div",
    {
      className: ii(
        "relative flex w-fit max-w-[90%] border rounded-t-2xl py-3 px-3.5 rounded-br-2xl bg-white text-[#0096a2] border-[#0096a2] mr-auto justify-start"
      ),
      style: {
        backgroundColor: d?.theme?.chatWindow?.botMessage?.backgroundColor || "#ffffff",
        borderColor: d?.theme?.chatWindow?.botMessage?.borderColor || "#0096a2"
      },
      children: /* @__PURE__ */ S.jsx(
        "div",
        {
          className: "text-sm",
          style: {
            color: d?.theme?.chatWindow?.botMessage?.textColor || "#0096a2"
          },
          children: /* @__PURE__ */ S.jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ S.jsx("div", { className: "text-base flex gap-2 items-end", children: Array.from({ length: 3 }).map((M, R) => /* @__PURE__ */ S.jsx(
            "span",
            {
              className: "block w-2 h-2 rounded-full bg-[#0096a2] animate-bounce",
              style: { animationDelay: `${250 * R}ms` }
            },
            `loading-circle-${R}`
          )) }) })
        }
      )
    }
  ) : i ? /* @__PURE__ */ S.jsxs(
    "div",
    {
      className: ii(
        "relative flex w-fit max-w-[90%] border rounded-t-3xl py-3 px-3.5",
        r ? "rounded-bl-3xl bg-white text-[#0096a2] border-[#0096a2] ml-auto justify-end" : "rounded-br-3xl bg-white text-[#0096a2] border-[#0096a2] mr-auto justify-start"
      ),
      style: {
        backgroundColor: r ? d?.theme?.chatWindow?.userMessage?.backgroundColor || "#0096a2" : d?.theme?.chatWindow?.botMessage?.backgroundColor || "#ffffff",
        borderColor: r ? d?.theme?.chatWindow?.userMessage?.borderColor || "#0096a2" : d?.theme?.chatWindow?.botMessage?.borderColor || "#0096a2"
      },
      children: [
        /* @__PURE__ */ S.jsxs(
          "div",
          {
            className: ii(
              "flex items-end gap-3",
              r ? "flex-row-reverse" : "flex-row"
            ),
            children: [
              /* @__PURE__ */ S.jsx("div", { className: "flex items-end justify-center w-3 h-3", children: r ? /* @__PURE__ */ S.jsx(
                "img",
                {
                  src: d?.theme?.chatWindow?.userMessage?.iconUrl || "https://res.cloudinary.com/dctqloe37/image/upload/v1752570930/circle-user-round_1_ja2oac.svg",
                  alt: " ",
                  width: 100,
                  height: 100,
                  className: "w-3 h-3 aspect-square"
                }
              ) : /* @__PURE__ */ S.jsx(
                "img",
                {
                  src: d?.theme?.chatWindow?.botMessage?.iconUrl || "https://appstaging.mimin.io/favicon.ico",
                  alt: " ",
                  width: 100,
                  height: 100,
                  className: "w-3 h-3 aspect-square"
                }
              ) }),
              /* @__PURE__ */ S.jsx(
                "div",
                {
                  className: "text-sm flex-1 pb-2",
                  style: {
                    color: r ? d?.theme?.chatWindow?.userMessage?.textColor || "#ffffff" : d?.theme?.chatWindow?.botMessage?.textColor || "#0096a2"
                  },
                  dangerouslySetInnerHTML: {
                    __html: v(i, r)
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ S.jsx(
          "div",
          {
            className: ii(
              "absolute top-full mt-0.5 w-fit",
              r ? "right-0" : "left-0"
            ),
            children: /* @__PURE__ */ S.jsx("p", { className: "text-[10px] font-light text-gray-500 w-max", children: Dv(new Date(s), "dd MMMM yyyy, HH:mm") })
          }
        )
      ]
    }
  ) : (console.error("message is null!"), null);
}, Rv = ({ messages: i, currentResponseMsg: r, loading: o, fetching: s }) => {
  const d = De.useRef(null);
  return De.useEffect(() => {
    setTimeout(() => {
      d.current?.scrollIntoView({
        behavior: "smooth",
        block: "end"
      });
    }, 200);
  }, [r, i.length]), /* @__PURE__ */ S.jsxs(
    "div",
    {
      className: "relative flex-1 h-full px-4 py-6 max-h-full overflow-y-scroll",
      style: { overflowAnchor: "none" },
      children: [
        /* @__PURE__ */ S.jsxs("div", { className: "flex flex-col gap-9", children: [
          /* @__PURE__ */ S.jsx("div", { className: "flex flex-col-reverse gap-9", children: i.map((v, M) => /* @__PURE__ */ S.jsxs("div", { className: "flex flex-col gap-6", children: [
            v.human && v.human.content && /* @__PURE__ */ S.jsx(
              ci,
              {
                message: v.human.content,
                isUser: !0,
                date: v.date
              }
            ),
            v.ai && v.ai.content && /* @__PURE__ */ S.jsx(
              ci,
              {
                message: v.ai.content,
                isUser: !1,
                date: v.date
              }
            )
          ] }, M)) }),
          !s && r && i.length > 0 && !i[0]?.ai && /* @__PURE__ */ S.jsx(
            ci,
            {
              message: r,
              isUser: !1,
              date: /* @__PURE__ */ new Date()
            }
          ),
          o && !r && /* @__PURE__ */ S.jsx(ci, { thinking: !0, date: /* @__PURE__ */ new Date() })
        ] }),
        /* @__PURE__ */ S.jsx("div", { ref: d, id: "bottom-ref", className: "pb-9" })
      ]
    }
  );
};
function Cv(i) {
  return Vr({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M3 12.9999H9V10.9999H3V1.84558C3 1.56944 3.22386 1.34558 3.5 1.34558C3.58425 1.34558 3.66714 1.36687 3.74096 1.40747L22.2034 11.5618C22.4454 11.6949 22.5337 11.9989 22.4006 12.2409C22.3549 12.324 22.2865 12.3924 22.2034 12.4381L3.74096 22.5924C3.499 22.7255 3.19497 22.6372 3.06189 22.3953C3.02129 22.3214 3 22.2386 3 22.1543V12.9999Z" }, child: [] }] })(i);
}
const Uv = ({
  onSendMessage: i,
  loading: r,
  fetching: o
}) => {
  const [s, d] = wt.useState(""), { config: v } = fi(), M = wt.useRef(null), R = () => {
    const p = M.current;
    p && (p.style.height = "auto", p.style.height = p.scrollHeight + "px");
  }, w = () => {
    !o && !r && s.length > 0 && (i(s), d(""));
  };
  return /* @__PURE__ */ S.jsxs(
    "div",
    {
      className: "px-2 pt-2 pb-1 overflow-hidden max-h-full",
      style: {
        backgroundColor: v?.theme?.chatWindow?.textInput?.backgroundColor || "#0096a2",
        overflowAnchor: "none"
      },
      children: [
        /* @__PURE__ */ S.jsxs(
          "form",
          {
            onSubmit: (p) => {
              p.preventDefault(), p.stopPropagation(), w();
            },
            className: "relative flex items-center gap-2",
            children: [
              /* @__PURE__ */ S.jsx(
                "textarea",
                {
                  className: "flex-1 border rounded-md p-2 max-h-[80px] bg-white pr-10 focus:outline focus:outline-[#ffa100] resize-none",
                  style: {
                    borderColor: v?.theme?.chatWindow?.textInput?.borderColor || "#ffffff"
                  },
                  placeholder: v?.theme?.chatWindow?.textInput?.placeholder || "Ketik pertanyaan Anda...",
                  rows: 1,
                  value: s,
                  onChange: (p) => d(p.target.value),
                  onInput: R,
                  ref: M
                }
              ),
              /* @__PURE__ */ S.jsx(
                "button",
                {
                  className: "absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                  disabled: r || s.trim().length === 0,
                  children: /* @__PURE__ */ S.jsx(
                    Cv,
                    {
                      className: "w-4 h-4 text-[#0096a2]",
                      color: v?.theme?.chatWindow?.textInput?.sendButtonColor || "#0096a2"
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ S.jsxs("p", { className: "text-white text-[10px] font-medium text-center mt-1", children: [
          "Powered by",
          " ",
          /* @__PURE__ */ S.jsx("a", { href: "https://mimin.io", className: "underline", children: "Mimin" })
        ] })
      ]
    }
  );
}, Hv = ({
  isVisible: i,
  onToggleCallWindow: r
  // onToggleMuteCall,
  // onToggleSpeakerCall,
}) => {
  const [o, s] = wt.useState(!1), [d, v] = wt.useState(!0);
  return i ? /* @__PURE__ */ S.jsx("div", { className: "absolute inset-0 bg-white z-10", children: /* @__PURE__ */ S.jsx("div", { className: "h-full px-6 py-10 overflow-y-auto", children: /* @__PURE__ */ S.jsxs("div", { className: "flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ S.jsx("h4", { className: "text-[#0096a2] text-xl font-bold mb-6", children: "IN CALL" }),
    /* @__PURE__ */ S.jsx("div", { className: "flex items-center justify-center p-4 rounded-full w-[204px] h-[204px] bg-gradient-to-br from-[#0096a2]/30 to-[#f26075]/30", children: /* @__PURE__ */ S.jsx("div", { className: "flex items-center justify-center p-4 rounded-full w-full h-full bg-gradient-to-br from-[#0096a2]/40 to-[#f26075]/40", children: /* @__PURE__ */ S.jsx("div", { className: "flex items-center justify-center p-4 rounded-full w-full h-full bg-gradient-to-br from-[#0096a2]/50 to-[#f26075]/50", children: /* @__PURE__ */ S.jsx(Og, { className: "w-14 h-14 text-white/80" }) }) }) }),
    /* @__PURE__ */ S.jsx("p", { className: "text-[#0096a2] text-base font-bold mt-5", children: "MIMIN AI" }),
    /* @__PURE__ */ S.jsx("p", { className: "text-[#0096a2] text-sm font-medium mt-0", children: "09:00" }),
    /* @__PURE__ */ S.jsx("div", { className: "h-[1.5px] w-full bg-gray-200 my-6" }),
    /* @__PURE__ */ S.jsx("div", { className: "grid grid-cols-2 gap-4 w-full", children: /* @__PURE__ */ S.jsx("div", { className: "col-span-2 flex items-center justify-center", children: /* @__PURE__ */ S.jsx(
      "button",
      {
        type: "button",
        className: "cursor-pointer bg-gradient-to-br from-[#0096a2]/30 to-[#f26075]/30 rounded-full w-[60px] h-[60px] p-4 aspect-square flex items-center justify-center",
        onClick: r,
        children: /* @__PURE__ */ S.jsx(pm, { className: "w-full h-full text-[#f26075]/90 rotate-90" })
      }
    ) }) })
  ] }) }) }) : null;
}, qv = kr()(
  Zr(
    (i) => ({
      user: null,
      isFirstTime: !0,
      setUser: (r) => i({ user: r }),
      setIsFirstTime: (r) => i({ isFirstTime: r })
    }),
    {
      name: "auth-store"
    }
  )
), Yv = ({ onClickStartChat: i }) => /* @__PURE__ */ S.jsxs("div", { className: "h-full overflow-y-auto bg-[#0096A2] flex flex-col justify-between", children: [
  /* @__PURE__ */ S.jsxs("div", { className: "flex flex-col items-center justify-center py-11 px-11", children: [
    /* @__PURE__ */ S.jsx("h2", { className: "text-sm font-bold text-white", children: "MINA AGENT" }),
    /* @__PURE__ */ S.jsx(
      "img",
      {
        src: "https://res.cloudinary.com/dctqloe37/image/upload/v1752571979/Icon_AI_Agent_lrdrhr.png",
        alt: " ",
        width: 1e3,
        height: 1e3,
        className: "w-40 h-w-40 rounded-full mt-10"
      }
    )
  ] }),
  /* @__PURE__ */ S.jsxs("div", { className: "flex flex-col items-center justify-center px-6 py-10 rounded-t-4xl mt-6 bg-white h-max", children: [
    /* @__PURE__ */ S.jsx("h3", { className: "text-lg font-bold text-[#0096A2] text-center px-8", children: "Hai, Aku Mina – AI Agent Kamu! 🤖" }),
    /* @__PURE__ */ S.jsx("p", { className: "text-sm text-gray-500 text-center mt-7 mb-7", children: "Butuh bantuan atau info lainnya? Chat dengan Mina sekarang juga, ya!" }),
    /* @__PURE__ */ S.jsx(
      "button",
      {
        onClick: i,
        className: "bg-[#0096A2] text-white px-4 py-2 rounded-md w-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        children: "Start Chat"
      }
    )
  ] })
] }), Bv = {
  limit: 10,
  page: 0,
  pages: 0,
  size: 10
}, Gv = ({
  config: i,
  signature: r
}) => {
  const [o, s] = wt.useState(!1), [d, v] = wt.useState(!1), { isFirstTime: M, setIsFirstTime: R } = qv(), [w, p] = wt.useState(""), [q, U] = wt.useState(""), [$, ft] = wt.useState(Bv), { setConfig: ut, setSignature: V } = fi(), [vt, bt] = wt.useState(!1), [st, Tt] = wt.useState(!1), [it, Ct] = wt.useState(!1), {
    interactions: W,
    addInteraction: Ut,
    updateAiInteractionByIndex: Z,
    chatType: Mt,
    setChatType: te
  } = hm(), ce = () => {
    bt(!vt);
  }, Ht = () => {
    Tt(!st);
  }, Kt = async () => {
    try {
      const D = (await (await fetch("https://api.ipify.org?format=json")).json()).ip, E = navigator.userAgent;
      return { ip: D, userAgent: E, isError: !1 };
    } catch (Et) {
      return { isError: !0, errorMessage: Et.message };
    }
  }, be = async (Et) => {
    const { isError: j, errorMessage: D, ip: E, userAgent: et } = await Kt();
    if (j) {
      console.error(D);
      return;
    }
    s(!0);
    const dt = {
      name: et,
      phone: E,
      message_id: crypto.randomUUID(),
      message: Et,
      media_type: "text",
      media: "",
      type: Mt || ""
    };
    try {
      const g = await fetch(
        `${mm.NEXT_PUBLIC_CHATBOT_URL}/api/chat/new-website/${i?.credentials?.username}`,
        {
          headers: {
            Signature: r,
            Accept: "text/event-stream",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(dt),
          method: "POST"
        }
      );
      if (!g.ok) {
        console.error("Failed to send message");
        return;
      }
      const _ = g.body.pipeThrough(new TextDecoderStream()).getReader();
      for (; ; ) {
        const { value: H, done: C } = await _.read();
        if (C) break;
        const k = '{"event": ';
        H.split(`data: ${k}`).filter(Boolean).map(
          (Y) => JSON.parse(`${k}${Y}`.replace(/\n\n$/gm, ""))
        ).filter((Y) => Y.event === "token" ? !!Y.data : !0).forEach(async (Y) => {
          if (Y.event === "payload") {
            const qt = {
              additional_kwargs: {},
              content: Y.message,
              example: !1
            };
            Z(0, qt), Mt || te(Y.type), p(Y.chat_history_id);
          } else Y.event === "token" && U((qt) => qt + Y.data);
        });
      }
    } catch {
      console.error(
        "We apologize, a system error has occurred. Please try again!"
      );
    } finally {
      s(!1);
    }
  };
  return wt.useEffect(() => {
    ut(i || null), V(r || "");
  }, []), /* @__PURE__ */ S.jsxs("div", { className: "fixed bottom-6 right-6 z-[9999]", children: [
    /* @__PURE__ */ S.jsxs(
      "button",
      {
        className: "flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#0096a2] shadow-md transition-all duration-300 ease-in-out cursor-pointer",
        style: {
          backgroundColor: vt ? "#0096a2" : i?.theme?.button?.backgroundColor || "#ffffff",
          color: vt ? "#ffffff" : i?.theme?.button?.textColor || "#0096a2"
        },
        onClick: ce,
        children: [
          /* @__PURE__ */ S.jsx(
            "img",
            {
              src: i?.theme?.button?.iconSrc || "https://appstaging.mimin.io/favicon.ico",
              alt: "ICON",
              className: "w-4 h-auto"
            }
          ),
          /* @__PURE__ */ S.jsx("span", { className: "text-sm font-bold", children: i?.theme?.button?.tooltip || "Ask Mimin" })
        ]
      }
    ),
    vt && /* @__PURE__ */ S.jsx("div", { className: "absolute bottom-full mb-4 right-0", children: /* @__PURE__ */ S.jsxs(
      "div",
      {
        className: "relative flex flex-col border border-gray-200 rounded-lg shadow-lg overflow-hidden",
        style: {
          width: i?.theme?.chatWindow?.width || "330px",
          height: i?.theme?.chatWindow?.height || "600px",
          backgroundColor: i?.theme?.chatWindow?.body?.backgroundColor || "#ffffff"
        },
        children: [
          (i?.theme?.chatWindow.needAuthentication || !1) && !it && !M && /* @__PURE__ */ S.jsx(Ug, {}),
          (it || !i?.theme?.chatWindow.needAuthentication) && !M && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
            /* @__PURE__ */ S.jsx(
              Zg,
              {
                onToggleCallWindow: Ht,
                onToggleChatWindow: ce
              }
            ),
            /* @__PURE__ */ S.jsx(
              Rv,
              {
                messages: W,
                currentResponseMsg: q,
                loading: o,
                fetching: d
              }
            ),
            /* @__PURE__ */ S.jsx(
              Uv,
              {
                onSendMessage: (Et) => {
                  U(""), Et = Et.trim().replaceAll(/\n\n+/g, `

`);
                  const j = {
                    human: {
                      content: Et,
                      additional_kwargs: {},
                      example: !1
                    },
                    date: /* @__PURE__ */ new Date(),
                    id: crypto.randomUUID()
                  };
                  Ut(j), be(Et);
                },
                loading: o,
                fetching: d
              }
            ),
            /* @__PURE__ */ S.jsx(
              Hv,
              {
                isVisible: st,
                onToggleCallWindow: Ht
              }
            )
          ] }),
          M && /* @__PURE__ */ S.jsx(
            Yv,
            {
              onClickStartChat: () => {
                R(!1);
              }
            }
          )
        ]
      }
    ) })
  ] });
}, Xv = {
  init: async function(i = {}) {
    try {
      if (console.log("INIT V2"), hg(), !i.credentials)
        throw new Error("credentials are required");
      if (!i.credentials.username)
        throw new Error("username is required");
      if (!i.credentials.apiKey)
        throw new Error("apiKey is required");
      const r = await fetch(
        `${mm.NEXT_PUBLIC_LOGIN_CUSTOMER_API}/api/v1/chatbotdata/create-signature/${i.credentials.username}`,
        {
          method: "POST",
          headers: {
            "x-api-key": i.credentials.apiKey
          }
        }
      ), { signature: o } = await r.json();
      if (!o)
        throw new Error("Failed to get signature");
      const s = document.getElementById("mimin-widget-container");
      s && s.remove();
      const d = document.createElement("div");
      d.id = "mimin-widget-container", document.body.appendChild(d), mg.createRoot(d).render(
        /* @__PURE__ */ S.jsx(S.Fragment, { children: /* @__PURE__ */ S.jsx(
          Gv,
          {
            config: {
              ...i,
              credentials: {
                ...i.credentials
              }
            },
            signature: o
          }
        ) })
      );
    } catch (r) {
      console.error("Failed to initialize Mimin Chatbot React:", r);
    }
  }
};
window.Chatbot = Xv;
export {
  Xv as Chatbot
};
//# sourceMappingURL=chat-widget.js.map
