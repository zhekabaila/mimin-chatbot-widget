import Ks, { forwardRef as sS, createElement as Zv, useState as tu, useEffect as H2 } from "react";
import rS from "react-dom";
function w2(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
var h0 = { exports: {} }, hp = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $1;
function N2() {
  if ($1) return hp;
  $1 = 1;
  var g = Symbol.for("react.transitional.element"), N = Symbol.for("react.fragment");
  function w(b, J, K) {
    var W = null;
    if (K !== void 0 && (W = "" + K), J.key !== void 0 && (W = "" + J.key), "key" in J) {
      K = {};
      for (var ae in J)
        ae !== "key" && (K[ae] = J[ae]);
    } else K = J;
    return J = K.ref, {
      $$typeof: g,
      type: b,
      key: W,
      ref: J !== void 0 ? J : null,
      props: K
    };
  }
  return hp.Fragment = N, hp.jsx = w, hp.jsxs = w, hp;
}
var mp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W1;
function B2() {
  return W1 || (W1 = 1, process.env.NODE_ENV !== "production" && function() {
    function g(B) {
      if (B == null) return null;
      if (typeof B == "function")
        return B.$$typeof === bt ? null : B.displayName || B.name || null;
      if (typeof B == "string") return B;
      switch (B) {
        case Te:
          return "Fragment";
        case Oe:
          return "Profiler";
        case je:
          return "StrictMode";
        case xt:
          return "Suspense";
        case nt:
          return "SuspenseList";
        case ne:
          return "Activity";
      }
      if (typeof B == "object")
        switch (typeof B.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), B.$$typeof) {
          case qe:
            return "Portal";
          case Ge:
            return (B.displayName || "Context") + ".Provider";
          case Qe:
            return (B._context.displayName || "Context") + ".Consumer";
          case rt:
            var te = B.render;
            return B = B.displayName, B || (B = te.displayName || te.name || "", B = B !== "" ? "ForwardRef(" + B + ")" : "ForwardRef"), B;
          case Ne:
            return te = B.displayName || null, te !== null ? te : g(B.type) || "Memo";
          case se:
            te = B._payload, B = B._init;
            try {
              return g(B(te));
            } catch {
            }
        }
      return null;
    }
    function N(B) {
      return "" + B;
    }
    function w(B) {
      try {
        N(B);
        var te = !1;
      } catch {
        te = !0;
      }
      if (te) {
        te = console;
        var F = te.error, le = typeof Symbol == "function" && Symbol.toStringTag && B[Symbol.toStringTag] || B.constructor.name || "Object";
        return F.call(
          te,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          le
        ), N(B);
      }
    }
    function b(B) {
      if (B === Te) return "<>";
      if (typeof B == "object" && B !== null && B.$$typeof === se)
        return "<...>";
      try {
        var te = g(B);
        return te ? "<" + te + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function J() {
      var B = Fe.A;
      return B === null ? null : B.getOwner();
    }
    function K() {
      return Error("react-stack-top-frame");
    }
    function W(B) {
      if (pe.call(B, "key")) {
        var te = Object.getOwnPropertyDescriptor(B, "key").get;
        if (te && te.isReactWarning) return !1;
      }
      return B.key !== void 0;
    }
    function ae(B, te) {
      function F() {
        dt || (dt = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          te
        ));
      }
      F.isReactWarning = !0, Object.defineProperty(B, "key", {
        get: F,
        configurable: !0
      });
    }
    function X() {
      var B = g(this.type);
      return x[B] || (x[B] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), B = this.props.ref, B !== void 0 ? B : null;
    }
    function me(B, te, F, le, ie, Ie, Ze, St) {
      return F = Ie.ref, B = {
        $$typeof: _e,
        type: B,
        key: te,
        props: Ie,
        _owner: ie
      }, (F !== void 0 ? F : null) !== null ? Object.defineProperty(B, "ref", {
        enumerable: !1,
        get: X
      }) : Object.defineProperty(B, "ref", { enumerable: !1, value: null }), B._store = {}, Object.defineProperty(B._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(B, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(B, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ze
      }), Object.defineProperty(B, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: St
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    }
    function he(B, te, F, le, ie, Ie, Ze, St) {
      var zt = te.children;
      if (zt !== void 0)
        if (le)
          if (Et(zt)) {
            for (le = 0; le < zt.length; le++)
              Re(zt[le]);
            Object.freeze && Object.freeze(zt);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else Re(zt);
      if (pe.call(te, "key")) {
        zt = g(B);
        var qt = Object.keys(te).filter(function(Qa) {
          return Qa !== "key";
        });
        le = 0 < qt.length ? "{key: someKey, " + qt.join(": ..., ") + ": ...}" : "{key: someKey}", ye[zt + le] || (qt = 0 < qt.length ? "{" + qt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          le,
          zt,
          qt,
          zt
        ), ye[zt + le] = !0);
      }
      if (zt = null, F !== void 0 && (w(F), zt = "" + F), W(te) && (w(te.key), zt = "" + te.key), "key" in te) {
        F = {};
        for (var hl in te)
          hl !== "key" && (F[hl] = te[hl]);
      } else F = te;
      return zt && ae(
        F,
        typeof B == "function" ? B.displayName || B.name || "Unknown" : B
      ), me(
        B,
        zt,
        Ie,
        ie,
        J(),
        F,
        Ze,
        St
      );
    }
    function Re(B) {
      typeof B == "object" && B !== null && B.$$typeof === _e && B._store && (B._store.validated = 1);
    }
    var ve = Ks, _e = Symbol.for("react.transitional.element"), qe = Symbol.for("react.portal"), Te = Symbol.for("react.fragment"), je = Symbol.for("react.strict_mode"), Oe = Symbol.for("react.profiler"), Qe = Symbol.for("react.consumer"), Ge = Symbol.for("react.context"), rt = Symbol.for("react.forward_ref"), xt = Symbol.for("react.suspense"), nt = Symbol.for("react.suspense_list"), Ne = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), ne = Symbol.for("react.activity"), bt = Symbol.for("react.client.reference"), Fe = ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, pe = Object.prototype.hasOwnProperty, Et = Array.isArray, wt = console.createTask ? console.createTask : function() {
      return null;
    };
    ve = {
      "react-stack-bottom-frame": function(B) {
        return B();
      }
    };
    var dt, x = {}, Q = ve["react-stack-bottom-frame"].bind(
      ve,
      K
    )(), _ = wt(b(K)), ye = {};
    mp.Fragment = Te, mp.jsx = function(B, te, F, le, ie) {
      var Ie = 1e4 > Fe.recentlyCreatedOwnerStacks++;
      return he(
        B,
        te,
        F,
        !1,
        le,
        ie,
        Ie ? Error("react-stack-top-frame") : Q,
        Ie ? wt(b(B)) : _
      );
    }, mp.jsxs = function(B, te, F, le, ie) {
      var Ie = 1e4 > Fe.recentlyCreatedOwnerStacks++;
      return he(
        B,
        te,
        F,
        !0,
        le,
        ie,
        Ie ? Error("react-stack-top-frame") : Q,
        Ie ? wt(b(B)) : _
      );
    };
  }()), mp;
}
var F1;
function _2() {
  return F1 || (F1 = 1, process.env.NODE_ENV === "production" ? h0.exports = N2() : h0.exports = B2()), h0.exports;
}
var ee = _2(), m0 = { exports: {} }, yp = {}, y0 = { exports: {} }, Vv = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I1;
function q2() {
  return I1 || (I1 = 1, function(g) {
    function N(x, Q) {
      var _ = x.length;
      x.push(Q);
      e: for (; 0 < _; ) {
        var ye = _ - 1 >>> 1, B = x[ye];
        if (0 < J(B, Q))
          x[ye] = Q, x[_] = B, _ = ye;
        else break e;
      }
    }
    function w(x) {
      return x.length === 0 ? null : x[0];
    }
    function b(x) {
      if (x.length === 0) return null;
      var Q = x[0], _ = x.pop();
      if (_ !== Q) {
        x[0] = _;
        e: for (var ye = 0, B = x.length, te = B >>> 1; ye < te; ) {
          var F = 2 * (ye + 1) - 1, le = x[F], ie = F + 1, Ie = x[ie];
          if (0 > J(le, _))
            ie < B && 0 > J(Ie, le) ? (x[ye] = Ie, x[ie] = _, ye = ie) : (x[ye] = le, x[F] = _, ye = F);
          else if (ie < B && 0 > J(Ie, _))
            x[ye] = Ie, x[ie] = _, ye = ie;
          else break e;
        }
      }
      return Q;
    }
    function J(x, Q) {
      var _ = x.sortIndex - Q.sortIndex;
      return _ !== 0 ? _ : x.id - Q.id;
    }
    if (g.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var K = performance;
      g.unstable_now = function() {
        return K.now();
      };
    } else {
      var W = Date, ae = W.now();
      g.unstable_now = function() {
        return W.now() - ae;
      };
    }
    var X = [], me = [], he = 1, Re = null, ve = 3, _e = !1, qe = !1, Te = !1, je = !1, Oe = typeof setTimeout == "function" ? setTimeout : null, Qe = typeof clearTimeout == "function" ? clearTimeout : null, Ge = typeof setImmediate < "u" ? setImmediate : null;
    function rt(x) {
      for (var Q = w(me); Q !== null; ) {
        if (Q.callback === null) b(me);
        else if (Q.startTime <= x)
          b(me), Q.sortIndex = Q.expirationTime, N(X, Q);
        else break;
        Q = w(me);
      }
    }
    function xt(x) {
      if (Te = !1, rt(x), !qe)
        if (w(X) !== null)
          qe = !0, nt || (nt = !0, pe());
        else {
          var Q = w(me);
          Q !== null && dt(xt, Q.startTime - x);
        }
    }
    var nt = !1, Ne = -1, se = 5, ne = -1;
    function bt() {
      return je ? !0 : !(g.unstable_now() - ne < se);
    }
    function Fe() {
      if (je = !1, nt) {
        var x = g.unstable_now();
        ne = x;
        var Q = !0;
        try {
          e: {
            qe = !1, Te && (Te = !1, Qe(Ne), Ne = -1), _e = !0;
            var _ = ve;
            try {
              t: {
                for (rt(x), Re = w(X); Re !== null && !(Re.expirationTime > x && bt()); ) {
                  var ye = Re.callback;
                  if (typeof ye == "function") {
                    Re.callback = null, ve = Re.priorityLevel;
                    var B = ye(
                      Re.expirationTime <= x
                    );
                    if (x = g.unstable_now(), typeof B == "function") {
                      Re.callback = B, rt(x), Q = !0;
                      break t;
                    }
                    Re === w(X) && b(X), rt(x);
                  } else b(X);
                  Re = w(X);
                }
                if (Re !== null) Q = !0;
                else {
                  var te = w(me);
                  te !== null && dt(
                    xt,
                    te.startTime - x
                  ), Q = !1;
                }
              }
              break e;
            } finally {
              Re = null, ve = _, _e = !1;
            }
            Q = void 0;
          }
        } finally {
          Q ? pe() : nt = !1;
        }
      }
    }
    var pe;
    if (typeof Ge == "function")
      pe = function() {
        Ge(Fe);
      };
    else if (typeof MessageChannel < "u") {
      var Et = new MessageChannel(), wt = Et.port2;
      Et.port1.onmessage = Fe, pe = function() {
        wt.postMessage(null);
      };
    } else
      pe = function() {
        Oe(Fe, 0);
      };
    function dt(x, Q) {
      Ne = Oe(function() {
        x(g.unstable_now());
      }, Q);
    }
    g.unstable_IdlePriority = 5, g.unstable_ImmediatePriority = 1, g.unstable_LowPriority = 4, g.unstable_NormalPriority = 3, g.unstable_Profiling = null, g.unstable_UserBlockingPriority = 2, g.unstable_cancelCallback = function(x) {
      x.callback = null;
    }, g.unstable_forceFrameRate = function(x) {
      0 > x || 125 < x ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : se = 0 < x ? Math.floor(1e3 / x) : 5;
    }, g.unstable_getCurrentPriorityLevel = function() {
      return ve;
    }, g.unstable_next = function(x) {
      switch (ve) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = ve;
      }
      var _ = ve;
      ve = Q;
      try {
        return x();
      } finally {
        ve = _;
      }
    }, g.unstable_requestPaint = function() {
      je = !0;
    }, g.unstable_runWithPriority = function(x, Q) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var _ = ve;
      ve = x;
      try {
        return Q();
      } finally {
        ve = _;
      }
    }, g.unstable_scheduleCallback = function(x, Q, _) {
      var ye = g.unstable_now();
      switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? ye + _ : ye) : _ = ye, x) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return B = _ + B, x = {
        id: he++,
        callback: Q,
        priorityLevel: x,
        startTime: _,
        expirationTime: B,
        sortIndex: -1
      }, _ > ye ? (x.sortIndex = _, N(me, x), w(X) === null && x === w(me) && (Te ? (Qe(Ne), Ne = -1) : Te = !0, dt(xt, _ - ye))) : (x.sortIndex = B, N(X, x), qe || _e || (qe = !0, nt || (nt = !0, pe()))), x;
    }, g.unstable_shouldYield = bt, g.unstable_wrapCallback = function(x) {
      var Q = ve;
      return function() {
        var _ = ve;
        ve = Q;
        try {
          return x.apply(this, arguments);
        } finally {
          ve = _;
        }
      };
    };
  }(Vv)), Vv;
}
var Xv = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var P1;
function j2() {
  return P1 || (P1 = 1, function(g) {
    process.env.NODE_ENV !== "production" && function() {
      function N() {
        if (xt = !1, ne) {
          var x = g.unstable_now();
          pe = x;
          var Q = !0;
          try {
            e: {
              Ge = !1, rt && (rt = !1, Ne(bt), bt = -1), Qe = !0;
              var _ = Oe;
              try {
                t: {
                  for (W(x), je = b(_e); je !== null && !(je.expirationTime > x && X()); ) {
                    var ye = je.callback;
                    if (typeof ye == "function") {
                      je.callback = null, Oe = je.priorityLevel;
                      var B = ye(
                        je.expirationTime <= x
                      );
                      if (x = g.unstable_now(), typeof B == "function") {
                        je.callback = B, W(x), Q = !0;
                        break t;
                      }
                      je === b(_e) && J(_e), W(x);
                    } else J(_e);
                    je = b(_e);
                  }
                  if (je !== null) Q = !0;
                  else {
                    var te = b(qe);
                    te !== null && me(
                      ae,
                      te.startTime - x
                    ), Q = !1;
                  }
                }
                break e;
              } finally {
                je = null, Oe = _, Qe = !1;
              }
              Q = void 0;
            }
          } finally {
            Q ? Et() : ne = !1;
          }
        }
      }
      function w(x, Q) {
        var _ = x.length;
        x.push(Q);
        e: for (; 0 < _; ) {
          var ye = _ - 1 >>> 1, B = x[ye];
          if (0 < K(B, Q))
            x[ye] = Q, x[_] = B, _ = ye;
          else break e;
        }
      }
      function b(x) {
        return x.length === 0 ? null : x[0];
      }
      function J(x) {
        if (x.length === 0) return null;
        var Q = x[0], _ = x.pop();
        if (_ !== Q) {
          x[0] = _;
          e: for (var ye = 0, B = x.length, te = B >>> 1; ye < te; ) {
            var F = 2 * (ye + 1) - 1, le = x[F], ie = F + 1, Ie = x[ie];
            if (0 > K(le, _))
              ie < B && 0 > K(Ie, le) ? (x[ye] = Ie, x[ie] = _, ye = ie) : (x[ye] = le, x[F] = _, ye = F);
            else if (ie < B && 0 > K(Ie, _))
              x[ye] = Ie, x[ie] = _, ye = ie;
            else break e;
          }
        }
        return Q;
      }
      function K(x, Q) {
        var _ = x.sortIndex - Q.sortIndex;
        return _ !== 0 ? _ : x.id - Q.id;
      }
      function W(x) {
        for (var Q = b(qe); Q !== null; ) {
          if (Q.callback === null) J(qe);
          else if (Q.startTime <= x)
            J(qe), Q.sortIndex = Q.expirationTime, w(_e, Q);
          else break;
          Q = b(qe);
        }
      }
      function ae(x) {
        if (rt = !1, W(x), !Ge)
          if (b(_e) !== null)
            Ge = !0, ne || (ne = !0, Et());
          else {
            var Q = b(qe);
            Q !== null && me(
              ae,
              Q.startTime - x
            );
          }
      }
      function X() {
        return xt ? !0 : !(g.unstable_now() - pe < Fe);
      }
      function me(x, Q) {
        bt = nt(function() {
          x(g.unstable_now());
        }, Q);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), g.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var he = performance;
        g.unstable_now = function() {
          return he.now();
        };
      } else {
        var Re = Date, ve = Re.now();
        g.unstable_now = function() {
          return Re.now() - ve;
        };
      }
      var _e = [], qe = [], Te = 1, je = null, Oe = 3, Qe = !1, Ge = !1, rt = !1, xt = !1, nt = typeof setTimeout == "function" ? setTimeout : null, Ne = typeof clearTimeout == "function" ? clearTimeout : null, se = typeof setImmediate < "u" ? setImmediate : null, ne = !1, bt = -1, Fe = 5, pe = -1;
      if (typeof se == "function")
        var Et = function() {
          se(N);
        };
      else if (typeof MessageChannel < "u") {
        var wt = new MessageChannel(), dt = wt.port2;
        wt.port1.onmessage = N, Et = function() {
          dt.postMessage(null);
        };
      } else
        Et = function() {
          nt(N, 0);
        };
      g.unstable_IdlePriority = 5, g.unstable_ImmediatePriority = 1, g.unstable_LowPriority = 4, g.unstable_NormalPriority = 3, g.unstable_Profiling = null, g.unstable_UserBlockingPriority = 2, g.unstable_cancelCallback = function(x) {
        x.callback = null;
      }, g.unstable_forceFrameRate = function(x) {
        0 > x || 125 < x ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Fe = 0 < x ? Math.floor(1e3 / x) : 5;
      }, g.unstable_getCurrentPriorityLevel = function() {
        return Oe;
      }, g.unstable_next = function(x) {
        switch (Oe) {
          case 1:
          case 2:
          case 3:
            var Q = 3;
            break;
          default:
            Q = Oe;
        }
        var _ = Oe;
        Oe = Q;
        try {
          return x();
        } finally {
          Oe = _;
        }
      }, g.unstable_requestPaint = function() {
        xt = !0;
      }, g.unstable_runWithPriority = function(x, Q) {
        switch (x) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            x = 3;
        }
        var _ = Oe;
        Oe = x;
        try {
          return Q();
        } finally {
          Oe = _;
        }
      }, g.unstable_scheduleCallback = function(x, Q, _) {
        var ye = g.unstable_now();
        switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? ye + _ : ye) : _ = ye, x) {
          case 1:
            var B = -1;
            break;
          case 2:
            B = 250;
            break;
          case 5:
            B = 1073741823;
            break;
          case 4:
            B = 1e4;
            break;
          default:
            B = 5e3;
        }
        return B = _ + B, x = {
          id: Te++,
          callback: Q,
          priorityLevel: x,
          startTime: _,
          expirationTime: B,
          sortIndex: -1
        }, _ > ye ? (x.sortIndex = _, w(qe, x), b(_e) === null && x === b(qe) && (rt ? (Ne(bt), bt = -1) : rt = !0, me(ae, _ - ye))) : (x.sortIndex = B, w(_e, x), Ge || Qe || (Ge = !0, ne || (ne = !0, Et()))), x;
      }, g.unstable_shouldYield = X, g.unstable_wrapCallback = function(x) {
        var Q = Oe;
        return function() {
          var _ = Oe;
          Oe = Q;
          try {
            return x.apply(this, arguments);
          } finally {
            Oe = _;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Xv)), Xv;
}
var eS;
function dS() {
  return eS || (eS = 1, process.env.NODE_ENV === "production" ? y0.exports = q2() : y0.exports = j2()), y0.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tS;
function Y2() {
  if (tS) return yp;
  tS = 1;
  var g = dS(), N = Ks, w = rS;
  function b(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function J(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function K(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function W(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function ae(l) {
    if (K(l) !== l)
      throw Error(b(188));
  }
  function X(l) {
    var n = l.alternate;
    if (!n) {
      if (n = K(l), n === null) throw Error(b(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (c = s.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return ae(s), l;
          if (r === c) return ae(s), n;
          r = r.sibling;
        }
        throw Error(b(188));
      }
      if (u.return !== c.return) u = s, c = r;
      else {
        for (var m = !1, y = s.child; y; ) {
          if (y === u) {
            m = !0, u = s, c = r;
            break;
          }
          if (y === c) {
            m = !0, c = s, u = r;
            break;
          }
          y = y.sibling;
        }
        if (!m) {
          for (y = r.child; y; ) {
            if (y === u) {
              m = !0, u = r, c = s;
              break;
            }
            if (y === c) {
              m = !0, c = r, u = s;
              break;
            }
            y = y.sibling;
          }
          if (!m) throw Error(b(189));
        }
      }
      if (u.alternate !== c) throw Error(b(190));
    }
    if (u.tag !== 3) throw Error(b(188));
    return u.stateNode.current === u ? l : n;
  }
  function me(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = me(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var he = Object.assign, Re = Symbol.for("react.element"), ve = Symbol.for("react.transitional.element"), _e = Symbol.for("react.portal"), qe = Symbol.for("react.fragment"), Te = Symbol.for("react.strict_mode"), je = Symbol.for("react.profiler"), Oe = Symbol.for("react.provider"), Qe = Symbol.for("react.consumer"), Ge = Symbol.for("react.context"), rt = Symbol.for("react.forward_ref"), xt = Symbol.for("react.suspense"), nt = Symbol.for("react.suspense_list"), Ne = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), ne = Symbol.for("react.activity"), bt = Symbol.for("react.memo_cache_sentinel"), Fe = Symbol.iterator;
  function pe(l) {
    return l === null || typeof l != "object" ? null : (l = Fe && l[Fe] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Et = Symbol.for("react.client.reference");
  function wt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Et ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case qe:
        return "Fragment";
      case je:
        return "Profiler";
      case Te:
        return "StrictMode";
      case xt:
        return "Suspense";
      case nt:
        return "SuspenseList";
      case ne:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case _e:
          return "Portal";
        case Ge:
          return (l.displayName || "Context") + ".Provider";
        case Qe:
          return (l._context.displayName || "Context") + ".Consumer";
        case rt:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Ne:
          return n = l.displayName || null, n !== null ? n : wt(l.type) || "Memo";
        case se:
          n = l._payload, l = l._init;
          try {
            return wt(l(n));
          } catch {
          }
      }
    return null;
  }
  var dt = Array.isArray, x = N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = w.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ye = [], B = -1;
  function te(l) {
    return { current: l };
  }
  function F(l) {
    0 > B || (l.current = ye[B], ye[B] = null, B--);
  }
  function le(l, n) {
    B++, ye[B] = l.current, l.current = n;
  }
  var ie = te(null), Ie = te(null), Ze = te(null), St = te(null);
  function zt(l, n) {
    switch (le(Ze, n), le(Ie, l), le(ie, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? Ru(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = Ru(n), l = wo(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    F(ie), le(ie, l);
  }
  function qt() {
    F(ie), F(Ie), F(Ze);
  }
  function hl(l) {
    l.memoizedState !== null && le(St, l);
    var n = ie.current, u = wo(n, l.type);
    n !== u && (le(Ie, l), le(ie, u));
  }
  function Qa(l) {
    Ie.current === l && (F(ie), F(Ie)), St.current === l && (F(St), ia._currentValue = _);
  }
  var lu = Object.prototype.hasOwnProperty, Oi = g.unstable_scheduleCallback, Th = g.unstable_cancelCallback, S0 = g.unstable_shouldYield, Ui = g.unstable_requestPaint, oa = g.unstable_now, nf = g.unstable_getCurrentPriorityLevel, vp = g.unstable_ImmediatePriority, Eh = g.unstable_UserBlockingPriority, uf = g.unstable_NormalPriority, Ah = g.unstable_LowPriority, Yc = g.unstable_IdlePriority, T0 = g.log, bp = g.unstable_setDisableYieldValue, Gc = null, Bl = null;
  function au(l) {
    if (typeof T0 == "function" && bp(l), Bl && typeof Bl.setStrictMode == "function")
      try {
        Bl.setStrictMode(Gc, l);
      } catch {
      }
  }
  var kl = Math.clz32 ? Math.clz32 : E0, xh = Math.log, Sp = Math.LN2;
  function E0(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (xh(l) / Sp | 0) | 0;
  }
  var Vc = 256, nu = 4194304;
  function fa(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
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
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
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
        return l;
    }
  }
  function qu(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var s = 0, r = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var y = c & 134217727;
    return y !== 0 ? (c = y & ~r, c !== 0 ? s = fa(c) : (m &= y, m !== 0 ? s = fa(m) : u || (u = y & ~l, u !== 0 && (s = fa(u))))) : (y = c & ~r, y !== 0 ? s = fa(y) : m !== 0 ? s = fa(m) : u || (u = c & ~l, u !== 0 && (s = fa(u)))), s === 0 ? 0 : n !== 0 && n !== s && (n & r) === 0 && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function rn(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function nl(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
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
        return n + 5e3;
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
  function ju() {
    var l = Vc;
    return Vc <<= 1, (Vc & 4194048) === 0 && (Vc = 256), l;
  }
  function Ci() {
    var l = nu;
    return nu <<= 1, (nu & 62914560) === 0 && (nu = 4194304), l;
  }
  function Yu(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function Hi(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Tp(l, n, u, c, s, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var y = l.entanglements, S = l.expirationTimes, D = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var L = 31 - kl(u), k = 1 << L;
      y[L] = 0, S[L] = -1;
      var U = D[L];
      if (U !== null)
        for (D[L] = null, L = 0; L < U.length; L++) {
          var H = U[L];
          H !== null && (H.lane &= -536870913);
        }
      u &= ~k;
    }
    c !== 0 && cf(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~n));
  }
  function cf(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - kl(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 4194090;
  }
  function of(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - kl(u), s = 1 << c;
      s & n | l[c] & n && (l[c] |= n), u &= ~s;
    }
  }
  function Za(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Ws(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ep() {
    var l = Q.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Dy(l.type));
  }
  function A0(l, n) {
    var u = Q.p;
    try {
      return Q.p = l, n();
    } finally {
      Q.p = u;
    }
  }
  var Wt = Math.random().toString(36).slice(2), ul = "__reactFiber$" + Wt, _l = "__reactProps$" + Wt, Xc = "__reactContainer$" + Wt, Fs = "__reactEvents$" + Wt, Ap = "__reactListeners$" + Wt, Is = "__reactHandles$" + Wt, xp = "__reactResources$" + Wt, ce = "__reactMarker$" + Wt;
  function ff(l) {
    delete l[ul], delete l[_l], delete l[Fs], delete l[Ap], delete l[Is];
  }
  function ml(l) {
    var n = l[ul];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[Xc] || u[ul]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = Tl(l); l !== null; ) {
            if (u = l[ul]) return u;
            l = Tl(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function wi(l) {
    if (l = l[ul] || l[Xc]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function sf(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(b(33));
  }
  function uu(l) {
    var n = l[xp];
    return n || (n = l[xp] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Ft(l) {
    l[ce] = !0;
  }
  var rf = /* @__PURE__ */ new Set(), sa = {};
  function Gu(l, n) {
    Vu(l, n), Vu(l + "Capture", n);
  }
  function Vu(l, n) {
    for (sa[l] = n, l = 0; l < n.length; l++)
      rf.add(n[l]);
  }
  var zp = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ps = {}, zh = {};
  function Rp(l) {
    return lu.call(zh, l) ? !0 : lu.call(Ps, l) ? !1 : zp.test(l) ? zh[l] = !0 : (Ps[l] = !0, !1);
  }
  function iu(l, n, u) {
    if (Rp(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function df(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function dn(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  var er, Rh;
  function Ni(l) {
    if (er === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        er = n && n[1] || "", Rh = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + er + l + Rh;
  }
  var ql = !1;
  function Xu(l, n) {
    if (!l || ql) return "";
    ql = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var k = function() {
                throw Error();
              };
              if (Object.defineProperty(k.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(k, []);
                } catch (H) {
                  var U = H;
                }
                Reflect.construct(l, [], k);
              } else {
                try {
                  k.call();
                } catch (H) {
                  U = H;
                }
                l.call(k.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (H) {
                U = H;
              }
              (k = l()) && typeof k.catch == "function" && k.catch(function() {
              });
            }
          } catch (H) {
            if (H && U && typeof H.stack == "string")
              return [H.stack, U.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = c.DetermineComponentFrameRoot(), m = r[0], y = r[1];
      if (m && y) {
        var S = m.split(`
`), D = y.split(`
`);
        for (s = c = 0; c < S.length && !S[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; s < D.length && !D[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (c === S.length || s === D.length)
          for (c = S.length - 1, s = D.length - 1; 1 <= c && 0 <= s && S[c] !== D[s]; )
            s--;
        for (; 1 <= c && 0 <= s; c--, s--)
          if (S[c] !== D[s]) {
            if (c !== 1 || s !== 1)
              do
                if (c--, s--, 0 > s || S[c] !== D[s]) {
                  var L = `
` + S[c].replace(" at new ", " at ");
                  return l.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", l.displayName)), L;
                }
              while (1 <= c && 0 <= s);
            break;
          }
      }
    } finally {
      ql = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Ni(u) : "";
  }
  function Bi(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ni(l.type);
      case 16:
        return Ni("Lazy");
      case 13:
        return Ni("Suspense");
      case 19:
        return Ni("SuspenseList");
      case 0:
      case 15:
        return Xu(l.type, !1);
      case 11:
        return Xu(l.type.render, !1);
      case 1:
        return Xu(l.type, !0);
      case 31:
        return Ni("Activity");
      default:
        return "";
    }
  }
  function Mh(l) {
    try {
      var n = "";
      do
        n += Bi(l), l = l.return;
      while (l);
      return n;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function Ml(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function hf(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Dh(l) {
    var n = hf(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    ), c = "" + l[n];
    if (!l.hasOwnProperty(n) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var s = u.get, r = u.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(m) {
          c = "" + m, r.call(this, m);
        }
      }), Object.defineProperty(l, n, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return c;
        },
        setValue: function(m) {
          c = "" + m;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function Lu(l) {
    l._valueTracker || (l._valueTracker = Dh(l));
  }
  function _i(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = hf(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function Lc(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var x0 = /[\n"\\]/g;
  function za(l) {
    return l.replace(
      x0,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function tr(l, n, u, c, s, r, m, y) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Ml(n)) : l.value !== "" + Ml(n) && (l.value = "" + Ml(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? mf(l, m, Ml(n)) : u != null ? mf(l, m, Ml(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? l.name = "" + Ml(y) : l.removeAttribute("name");
  }
  function lr(l, n, u, c, s, r, m, y) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null))
        return;
      u = u != null ? "" + Ml(u) : "", n = n != null ? "" + Ml(n) : u, y || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = y ? l.checked : !!c, l.defaultChecked = !!c, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m);
  }
  function mf(l, n, u) {
    n === "number" && Lc(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function qi(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Ml(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, c && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Oh(l, n, u) {
    if (n != null && (n = "" + Ml(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Ml(u) : "";
  }
  function Uh(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(b(92));
        if (dt(c)) {
          if (1 < c.length) throw Error(b(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = Ml(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c);
  }
  function Qc(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var Mp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ar(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || Mp.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function yf(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(b(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var s in n)
        c = n[s], n.hasOwnProperty(s) && u[s] !== c && ar(l, s, c);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && ar(l, r, n[r]);
  }
  function ji(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var z0 = /* @__PURE__ */ new Map([
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
  ]), Dp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function pf(l) {
    return Dp.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var Yi = null;
  function nr(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Zc = null, kc = null;
  function Op(l) {
    var n = wi(l);
    if (n && (l = n.stateNode)) {
      var u = l[_l] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (tr(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + za(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var s = c[_l] || null;
                if (!s) throw Error(b(90));
                tr(
                  c,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && _i(c);
          }
          break e;
        case "textarea":
          Oh(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && qi(l, !!u.multiple, n, !1);
      }
    }
  }
  var Ch = !1;
  function Jc(l, n, u) {
    if (Ch) return l(n, u);
    Ch = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (Ch = !1, (Zc !== null || kc !== null) && (gc(), Zc && (n = Zc, l = kc, kc = Zc = null, Op(n), l)))
        for (n = 0; n < l.length; n++) Op(l[n]);
    }
  }
  function Gi(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[_l] || null;
    if (c === null) return null;
    u = c[n];
    e: switch (n) {
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
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        b(231, n, typeof u)
      );
    return u;
  }
  var hn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ur = !1;
  if (hn)
    try {
      var cu = {};
      Object.defineProperty(cu, "passive", {
        get: function() {
          ur = !0;
        }
      }), window.addEventListener("test", cu, cu), window.removeEventListener("test", cu, cu);
    } catch {
      ur = !1;
    }
  var ou = null, Kc = null, Vi = null;
  function Hh() {
    if (Vi) return Vi;
    var l, n = Kc, u = n.length, c, s = "value" in ou ? ou.value : ou.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var m = u - l;
    for (c = 1; c <= m && n[u - c] === s[r - c]; c++) ;
    return Vi = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function yl(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function ir() {
    return !0;
  }
  function cr() {
    return !1;
  }
  function jl(l) {
    function n(u, c, s, r, m) {
      this._reactName = u, this._targetInst = s, this.type = c, this.nativeEvent = r, this.target = m, this.currentTarget = null;
      for (var y in l)
        l.hasOwnProperty(y) && (u = l[y], this[y] = u ? u(r) : r[y]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? ir : cr, this.isPropagationStopped = cr, this;
    }
    return he(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = ir);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = ir);
      },
      persist: function() {
      },
      isPersistent: ir
    }), n;
  }
  var Qu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, or = jl(Qu), gf = he({}, Qu, { view: 0, detail: 0 }), Up = jl(gf), wh, fr, vf, Xi = he({}, gf, {
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
    getModifierState: fu,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== vf && (vf && l.type === "mousemove" ? (wh = l.screenX - vf.screenX, fr = l.screenY - vf.screenY) : fr = wh = 0, vf = l), wh);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : fr;
    }
  }), Nh = jl(Xi), Cp = he({}, Xi, { dataTransfer: 0 }), Hp = jl(Cp), R0 = he({}, gf, { relatedTarget: 0 }), Bh = jl(R0), M0 = he({}, Qu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), D0 = jl(M0), O0 = he({}, Qu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), bf = jl(O0), wp = he({}, Qu, { data: 0 }), _h = jl(wp), Np = {
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
  }, Bp = {
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
  }, qh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function _p(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = qh[l]) ? !!n[l] : !1;
  }
  function fu() {
    return _p;
  }
  var Li = he({}, gf, {
    key: function(l) {
      if (l.key) {
        var n = Np[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = yl(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Bp[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: fu,
    charCode: function(l) {
      return l.type === "keypress" ? yl(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? yl(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), ka = jl(Li), ra = he({}, Xi, {
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
  }), Sf = jl(ra), sr = he({}, gf, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fu
  }), jh = jl(sr), Jl = he({}, Qu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), qp = jl(Jl), rr = he({}, Xi, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Qi = jl(rr), Yh = he({}, Qu, {
    newState: 0,
    oldState: 0
  }), jp = jl(Yh), Yp = [9, 13, 27, 32], Tf = hn && "CompositionEvent" in window, Ef = null;
  hn && "documentMode" in document && (Ef = document.documentMode);
  var Gh = hn && "TextEvent" in window && !Ef, mn = hn && (!Tf || Ef && 8 < Ef && 11 >= Ef), Vh = " ", dr = !1;
  function Af(l, n) {
    switch (l) {
      case "keyup":
        return Yp.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Zu(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ku = !1;
  function Xh(l, n) {
    switch (l) {
      case "compositionend":
        return Zu(n);
      case "keypress":
        return n.which !== 32 ? null : (dr = !0, Vh);
      case "textInput":
        return l = n.data, l === Vh && dr ? null : l;
      default:
        return null;
    }
  }
  function Zi(l, n) {
    if (ku)
      return l === "compositionend" || !Tf && Af(l, n) ? (l = Hh(), Vi = Kc = ou = null, ku = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return mn && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Gp = {
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
  function hr(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Gp[l.type] : n === "textarea";
  }
  function mr(l, n, u, c) {
    Zc ? kc ? kc.push(c) : kc = [c] : Zc = c, n = Ho(n, "onChange"), 0 < n.length && (u = new or(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var Ja = null, Ka = null;
  function Lh(l) {
    Tc(l, 0);
  }
  function yn(l) {
    var n = sf(l);
    if (_i(n)) return l;
  }
  function Qh(l, n) {
    if (l === "change") return n;
  }
  var Zh = !1;
  if (hn) {
    var ki;
    if (hn) {
      var Ji = "oninput" in document;
      if (!Ji) {
        var kh = document.createElement("div");
        kh.setAttribute("oninput", "return;"), Ji = typeof kh.oninput == "function";
      }
      ki = Ji;
    } else ki = !1;
    Zh = ki && (!document.documentMode || 9 < document.documentMode);
  }
  function $c() {
    Ja && (Ja.detachEvent("onpropertychange", Jh), Ka = Ja = null);
  }
  function Jh(l) {
    if (l.propertyName === "value" && yn(Ka)) {
      var n = [];
      mr(
        n,
        Ka,
        l,
        nr(l)
      ), Jc(Lh, n);
    }
  }
  function yr(l, n, u) {
    l === "focusin" ? ($c(), Ja = n, Ka = u, Ja.attachEvent("onpropertychange", Jh)) : l === "focusout" && $c();
  }
  function Ju(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return yn(Ka);
  }
  function su(l, n) {
    if (l === "click") return yn(n);
  }
  function Kh(l, n) {
    if (l === "input" || l === "change")
      return yn(n);
  }
  function $h(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var pl = typeof Object.is == "function" ? Object.is : $h;
  function Ku(l, n) {
    if (pl(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var s = u[c];
      if (!lu.call(n, s) || !pl(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function $u(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Rt(l, n) {
    var u = $u(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = $u(u);
    }
  }
  function xf(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? xf(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Wh(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = Lc(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = Lc(l.document);
    }
    return n;
  }
  function zf(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var Ki = hn && "documentMode" in document && 11 >= document.documentMode, pn = null, $a = null, Wu = null, $i = !1;
  function pr(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    $i || pn == null || pn !== Lc(c) || (c = pn, "selectionStart" in c && zf(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), Wu && Ku(Wu, c) || (Wu = c, c = Ho($a, "onSelect"), 0 < c.length && (n = new or(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = pn)));
  }
  function ru(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var Wi = {
    animationend: ru("Animation", "AnimationEnd"),
    animationiteration: ru("Animation", "AnimationIteration"),
    animationstart: ru("Animation", "AnimationStart"),
    transitionrun: ru("Transition", "TransitionRun"),
    transitionstart: ru("Transition", "TransitionStart"),
    transitioncancel: ru("Transition", "TransitionCancel"),
    transitionend: ru("Transition", "TransitionEnd")
  }, Ra = {}, Wa = {};
  hn && (Wa = document.createElement("div").style, "AnimationEvent" in window || (delete Wi.animationend.animation, delete Wi.animationiteration.animation, delete Wi.animationstart.animation), "TransitionEvent" in window || delete Wi.transitionend.transition);
  function gn(l) {
    if (Ra[l]) return Ra[l];
    if (!Wi[l]) return l;
    var n = Wi[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in Wa)
        return Ra[l] = n[u];
    return l;
  }
  var Vp = gn("animationend"), Fh = gn("animationiteration"), Xp = gn("animationstart"), Ih = gn("transitionrun"), gr = gn("transitionstart"), Lp = gn("transitioncancel"), Ph = gn("transitionend"), em = /* @__PURE__ */ new Map(), Wc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Wc.push("scrollEnd");
  function Ma(l, n) {
    em.set(l, n), Gu(n, [l]);
  }
  var tm = /* @__PURE__ */ new WeakMap();
  function da(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = tm.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: Mh(n)
      }, tm.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: Mh(n)
    };
  }
  var Kl = [], Fu = 0, vn = 0;
  function Fa() {
    for (var l = Fu, n = vn = Fu = 0; n < l; ) {
      var u = Kl[n];
      Kl[n++] = null;
      var c = Kl[n];
      Kl[n++] = null;
      var s = Kl[n];
      Kl[n++] = null;
      var r = Kl[n];
      if (Kl[n++] = null, c !== null && s !== null) {
        var m = c.pending;
        m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
      }
      r !== 0 && Ic(u, s, r);
    }
  }
  function Iu(l, n, u, c) {
    Kl[Fu++] = l, Kl[Fu++] = n, Kl[Fu++] = u, Kl[Fu++] = c, vn |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function Fc(l, n, u, c) {
    return Iu(l, n, u, c), Rf(l);
  }
  function bn(l, n) {
    return Iu(l, null, null, n), Rf(l);
  }
  function Ic(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - kl(u), l = r.hiddenUpdates, c = l[s], c === null ? l[s] = [n] : c.push(n), n.lane = u | 536870912), r) : null;
  }
  function Rf(l) {
    if (50 < Ro)
      throw Ro = 0, ty = null, Error(b(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Pc = {};
  function Qp(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function $l(l, n, u, c) {
    return new Qp(l, n, u, c);
  }
  function Mf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Ia(l, n) {
    var u = l.alternate;
    return u === null ? (u = $l(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Ve(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function $(l, n, u, c, s, r) {
    var m = 0;
    if (c = l, typeof l == "function") Mf(l) && (m = 1);
    else if (typeof l == "string")
      m = xg(
        l,
        u,
        ie.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case ne:
          return l = $l(31, u, n, s), l.elementType = ne, l.lanes = r, l;
        case qe:
          return Da(u.children, s, r, n);
        case Te:
          m = 8, s |= 24;
          break;
        case je:
          return l = $l(12, u, n, s | 2), l.elementType = je, l.lanes = r, l;
        case xt:
          return l = $l(13, u, n, s), l.elementType = xt, l.lanes = r, l;
        case nt:
          return l = $l(19, u, n, s), l.elementType = nt, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Oe:
              case Ge:
                m = 10;
                break e;
              case Qe:
                m = 9;
                break e;
              case rt:
                m = 11;
                break e;
              case Ne:
                m = 14;
                break e;
              case se:
                m = 16, c = null;
                break e;
            }
          m = 29, u = Error(
            b(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = $l(m, u, n, s), n.elementType = l, n.type = c, n.lanes = r, n;
  }
  function Da(l, n, u, c) {
    return l = $l(7, l, c, n), l.lanes = u, l;
  }
  function eo(l, n, u) {
    return l = $l(6, l, null, n), l.lanes = u, l;
  }
  function Nt(l, n, u) {
    return n = $l(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var Pu = [], ei = 0, Df = null, to = 0, Oa = [], Wl = 0, du = null, Pa = 1, jt = "";
  function et(l, n) {
    Pu[ei++] = to, Pu[ei++] = Df, Df = l, to = n;
  }
  function vr(l, n, u) {
    Oa[Wl++] = Pa, Oa[Wl++] = jt, Oa[Wl++] = du, du = l;
    var c = Pa;
    l = jt;
    var s = 32 - kl(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - kl(n) + s;
    if (30 < r) {
      var m = s - s % 5;
      r = (c & (1 << m) - 1).toString(32), c >>= m, s -= m, Pa = 1 << 32 - kl(n) + s | u << s | c, jt = r + l;
    } else
      Pa = 1 << r | u << s | c, jt = l;
  }
  function Fi(l) {
    l.return !== null && (et(l, 1), vr(l, 1, 0));
  }
  function Sn(l) {
    for (; l === Df; )
      Df = Pu[--ei], Pu[ei] = null, to = Pu[--ei], Pu[ei] = null;
    for (; l === du; )
      du = Oa[--Wl], Oa[Wl] = null, jt = Oa[--Wl], Oa[Wl] = null, Pa = Oa[--Wl], Oa[Wl] = null;
  }
  var kt = null, ut = null, at = !1, Ua = null, Ca = !1, Ii = Error(b(519));
  function hu(l) {
    var n = Error(b(418, ""));
    throw no(da(n, l)), Ii;
  }
  function Of(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[ul] = l, n[_l] = c, u) {
      case "dialog":
        Ce("cancel", n), Ce("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ce("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ms.length; u++)
          Ce(ms[u], n);
        break;
      case "source":
        Ce("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ce("error", n), Ce("load", n);
        break;
      case "details":
        Ce("toggle", n);
        break;
      case "input":
        Ce("invalid", n), lr(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        ), Lu(n);
        break;
      case "select":
        Ce("invalid", n);
        break;
      case "textarea":
        Ce("invalid", n), Uh(n, c.value, c.defaultValue, c.children), Lu(n);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || yy(n.textContent, u) ? (c.popover != null && (Ce("beforetoggle", n), Ce("toggle", n)), c.onScroll != null && Ce("scroll", n), c.onScrollEnd != null && Ce("scrollend", n), c.onClick != null && (n.onclick = Dd), n = !0) : n = !1, n || hu(l);
  }
  function lm(l) {
    for (kt = l.return; kt; )
      switch (kt.tag) {
        case 5:
        case 13:
          Ca = !1;
          return;
        case 27:
        case 3:
          Ca = !0;
          return;
        default:
          kt = kt.return;
      }
  }
  function lo(l) {
    if (l !== kt) return !1;
    if (!at) return lm(l), at = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Gn(l.type, l.memoizedProps)), u = !u), u && ut && hu(l), lm(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(b(317));
      e: {
        for (l = l.nextSibling, n = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (n === 0) {
                ut = un(l.nextSibling);
                break e;
              }
              n--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || n++;
          l = l.nextSibling;
        }
        ut = null;
      }
    } else
      n === 27 ? (n = ut, vi(l.type) ? (l = bi, bi = null, ut = l) : ut = n) : ut = kt ? un(l.stateNode.nextSibling) : null;
    return !0;
  }
  function ao() {
    ut = kt = null, at = !1;
  }
  function am() {
    var l = Ua;
    return l !== null && (la === null ? la = l : la.push.apply(
      la,
      l
    ), Ua = null), l;
  }
  function no(l) {
    Ua === null ? Ua = [l] : Ua.push(l);
  }
  var Uf = te(null), mu = null, en = null;
  function yu(l, n, u) {
    le(Uf, n._currentValue), n._currentValue = u;
  }
  function Tn(l) {
    l._currentValue = Uf.current, F(Uf);
  }
  function br(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function nm(l, n, u, c) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var m = s.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var y = r;
          r = s;
          for (var S = 0; S < n.length; S++)
            if (y.context === n[S]) {
              r.lanes |= u, y = r.alternate, y !== null && (y.lanes |= u), br(
                r.return,
                u,
                l
              ), c || (m = null);
              break e;
            }
          r = y.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(b(341));
        m.lanes |= u, r = m.alternate, r !== null && (r.lanes |= u), br(m, u, l), m = null;
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null; ) {
          if (m === l) {
            m = null;
            break;
          }
          if (s = m.sibling, s !== null) {
            s.return = m.return, m = s;
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }
  function uo(l, n, u, c) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(b(387));
        if (m = m.memoizedProps, m !== null) {
          var y = s.type;
          pl(s.pendingProps.value, m.value) || (l !== null ? l.push(y) : l = [y]);
        }
      } else if (s === St.current) {
        if (m = s.alternate, m === null) throw Error(b(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(ia) : l = [ia]);
      }
      s = s.return;
    }
    l !== null && nm(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function Cf(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!pl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function ti(l) {
    mu = l, en = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function il(l) {
    return um(mu, l);
  }
  function Hf(l, n) {
    return mu === null && ti(l), um(l, n);
  }
  function um(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, en === null) {
      if (l === null) throw Error(b(308));
      en = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else en = en.next = n;
    return u;
  }
  var io = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, Sr = g.unstable_scheduleCallback, Zp = g.unstable_NormalPriority, It = {
    $$typeof: Ge,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function co() {
    return {
      controller: new io(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function En(l) {
    l.refCount--, l.refCount === 0 && Sr(Zp, function() {
      l.controller.abort();
    });
  }
  var li = null, wf = 0, Ha = 0, Pt = null;
  function Tr(l, n) {
    if (li === null) {
      var u = li = [];
      wf = 0, Ha = Sc(), Pt = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return wf++, n.then(Er, Er), n;
  }
  function Er() {
    if (--wf === 0 && li !== null) {
      Pt !== null && (Pt.status = "fulfilled");
      var l = li;
      li = null, Ha = 0, Pt = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function kp(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (c.status = "rejected", c.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), c;
  }
  var Ar = x.S;
  x.S = function(l, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && Tr(l, n), Ar !== null && Ar(l, n);
  };
  var An = te(null);
  function Nf() {
    var l = An.current;
    return l !== null ? l : Tt.pooledCache;
  }
  function Pi(l, n) {
    n === null ? le(An, An.current) : le(An, n.pool);
  }
  function xr() {
    var l = Nf();
    return l === null ? null : { parent: It._currentValue, pool: l };
  }
  var ai = Error(b(460)), zr = Error(b(474)), Bf = Error(b(542)), Rr = { then: function() {
  } };
  function Mr(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function _f() {
  }
  function im(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(_f, _f), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, om(l), l;
      default:
        if (typeof n.status == "string") n.then(_f, _f);
        else {
          if (l = Tt, l !== null && 100 < l.shellSuspendCounter)
            throw Error(b(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, om(l), l;
        }
        throw ec = n, ai;
    }
  }
  var ec = null;
  function cm() {
    if (ec === null) throw Error(b(459));
    var l = ec;
    return ec = null, l;
  }
  function om(l) {
    if (l === ai || l === Bf)
      throw Error(b(483));
  }
  var xn = !1;
  function Dr(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Or(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Fl(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function zn(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (st & 2) !== 0) {
      var s = c.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), c.pending = n, n = Rf(l), Ic(l, null, u), n;
    }
    return Iu(l, c, n, u), Rf(l);
  }
  function tc(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, of(l, u);
    }
  }
  function fm(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var m = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = m : r = r.next = m, u = u.next;
        } while (u !== null);
        r === null ? s = r = n : r = r.next = n;
      } else s = r = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var sm = !1;
  function oo() {
    if (sm) {
      var l = Pt;
      if (l !== null) throw l;
    }
  }
  function pu(l, n, u, c) {
    sm = !1;
    var s = l.updateQueue;
    xn = !1;
    var r = s.firstBaseUpdate, m = s.lastBaseUpdate, y = s.shared.pending;
    if (y !== null) {
      s.shared.pending = null;
      var S = y, D = S.next;
      S.next = null, m === null ? r = D : m.next = D, m = S;
      var L = l.alternate;
      L !== null && (L = L.updateQueue, y = L.lastBaseUpdate, y !== m && (y === null ? L.firstBaseUpdate = D : y.next = D, L.lastBaseUpdate = S));
    }
    if (r !== null) {
      var k = s.baseState;
      m = 0, L = D = S = null, y = r;
      do {
        var U = y.lane & -536870913, H = U !== y.lane;
        if (H ? (Ke & U) === U : (c & U) === U) {
          U !== 0 && U === Ha && (sm = !0), L !== null && (L = L.next = {
            lane: 0,
            tag: y.tag,
            payload: y.payload,
            callback: null,
            next: null
          });
          e: {
            var be = l, Se = y;
            U = n;
            var ct = u;
            switch (Se.tag) {
              case 1:
                if (be = Se.payload, typeof be == "function") {
                  k = be.call(ct, k, U);
                  break e;
                }
                k = be;
                break e;
              case 3:
                be.flags = be.flags & -65537 | 128;
              case 0:
                if (be = Se.payload, U = typeof be == "function" ? be.call(ct, k, U) : be, U == null) break e;
                k = he({}, k, U);
                break e;
              case 2:
                xn = !0;
            }
          }
          U = y.callback, U !== null && (l.flags |= 64, H && (l.flags |= 8192), H = s.callbacks, H === null ? s.callbacks = [U] : H.push(U));
        } else
          H = {
            lane: U,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          }, L === null ? (D = L = H, S = k) : L = L.next = H, m |= U;
        if (y = y.next, y === null) {
          if (y = s.shared.pending, y === null)
            break;
          H = y, y = H.next, H.next = null, s.lastBaseUpdate = H, s.shared.pending = null;
        }
      } while (!0);
      L === null && (S = k), s.baseState = S, s.firstBaseUpdate = D, s.lastBaseUpdate = L, r === null && (s.shared.lanes = 0), Au |= m, l.lanes = m, l.memoizedState = k;
    }
  }
  function Ur(l, n) {
    if (typeof l != "function")
      throw Error(b(191, l));
    l.call(n);
  }
  function qf(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Ur(u[l], n);
  }
  var lc = te(null), jf = te(0);
  function cl(l, n) {
    l = Eu, le(jf, l), le(lc, n), Eu = l | n.baseLanes;
  }
  function fo() {
    le(jf, Eu), le(lc, lc.current);
  }
  function so() {
    Eu = jf.current, F(lc), F(jf);
  }
  var wa = 0, Ue = null, ft = null, Bt = null, Yf = !1, ha = !1, ni = !1, tn = 0, ma = 0, gu = null, rm = 0;
  function _t() {
    throw Error(b(321));
  }
  function Cr(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!pl(l[u], n[u])) return !1;
    return !0;
  }
  function Hr(l, n, u, c, s, r) {
    return wa = r, Ue = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, x.H = l === null || l.memoizedState === null ? Rm : Mm, ni = !1, r = u(c, s), ni = !1, ha && (r = dm(
      n,
      u,
      c,
      s
    )), ui(l), r;
  }
  function ui(l) {
    x.H = $r;
    var n = ft !== null && ft.next !== null;
    if (wa = 0, Bt = ft = Ue = null, Yf = !1, ma = 0, gu = null, n) throw Error(b(300));
    l === null || el || (l = l.dependencies, l !== null && Cf(l) && (el = !0));
  }
  function dm(l, n, u, c) {
    Ue = l;
    var s = 0;
    do {
      if (ha && (gu = null), ma = 0, ha = !1, 25 <= s) throw Error(b(301));
      if (s += 1, Bt = ft = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      x.H = vu, r = n(u, c);
    } while (ha);
    return r;
  }
  function Jp() {
    var l = x.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Vf(n) : n, l = l.useState()[0], (ft !== null ? ft.memoizedState : null) !== l && (Ue.flags |= 1024), n;
  }
  function wr() {
    var l = tn !== 0;
    return tn = 0, l;
  }
  function ro(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Nr(l) {
    if (Yf) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Yf = !1;
    }
    wa = 0, Bt = ft = Ue = null, ha = !1, ma = tn = 0, gu = null;
  }
  function Dl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Bt === null ? Ue.memoizedState = Bt = l : Bt = Bt.next = l, Bt;
  }
  function Yt() {
    if (ft === null) {
      var l = Ue.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ft.next;
    var n = Bt === null ? Ue.memoizedState : Bt.next;
    if (n !== null)
      Bt = n, ft = l;
    else {
      if (l === null)
        throw Ue.alternate === null ? Error(b(467)) : Error(b(310));
      ft = l, l = {
        memoizedState: ft.memoizedState,
        baseState: ft.baseState,
        baseQueue: ft.baseQueue,
        queue: ft.queue,
        next: null
      }, Bt === null ? Ue.memoizedState = Bt = l : Bt = Bt.next = l;
    }
    return Bt;
  }
  function Gf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Vf(l) {
    var n = ma;
    return ma += 1, gu === null && (gu = []), l = im(gu, l, n), n = Ue, (Bt === null ? n.memoizedState : Bt.next) === null && (n = n.alternate, x.H = n === null || n.memoizedState === null ? Rm : Mm), l;
  }
  function Jt(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Vf(l);
      if (l.$$typeof === Ge) return il(l);
    }
    throw Error(b(438, String(l)));
  }
  function Br(l) {
    var n = null, u = Ue.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = Ue.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Gf(), Ue.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = bt;
    return n.index++, u;
  }
  function Rn(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function Xf(l) {
    var n = Yt();
    return _r(n, ft, l);
  }
  function _r(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(b(311));
    c.lastRenderedReducer = u;
    var s = l.baseQueue, r = c.pending;
    if (r !== null) {
      if (s !== null) {
        var m = s.next;
        s.next = r.next, r.next = m;
      }
      n.baseQueue = s = r, c.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var y = m = null, S = null, D = n, L = !1;
      do {
        var k = D.lane & -536870913;
        if (k !== D.lane ? (Ke & k) === k : (wa & k) === k) {
          var U = D.revertLane;
          if (U === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }), k === Ha && (L = !0);
          else if ((wa & U) === U) {
            D = D.next, U === Ha && (L = !0);
            continue;
          } else
            k = {
              lane: 0,
              revertLane: D.revertLane,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }, S === null ? (y = S = k, m = r) : S = S.next = k, Ue.lanes |= U, Au |= U;
          k = D.action, ni && u(r, k), r = D.hasEagerState ? D.eagerState : u(r, k);
        } else
          U = {
            lane: k,
            revertLane: D.revertLane,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          }, S === null ? (y = S = U, m = r) : S = S.next = U, Ue.lanes |= k, Au |= k;
        D = D.next;
      } while (D !== null && D !== n);
      if (S === null ? m = r : S.next = y, !pl(r, l.memoizedState) && (el = !0, L && (u = Pt, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = S, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function qr(l) {
    var n = Yt(), u = n.queue;
    if (u === null) throw Error(b(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var m = s = s.next;
      do
        r = l(r, m.action), m = m.next;
      while (m !== s);
      pl(r, n.memoizedState) || (el = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function Lf(l, n, u) {
    var c = Ue, s = Yt(), r = at;
    if (r) {
      if (u === void 0) throw Error(b(407));
      u = u();
    } else u = n();
    var m = !pl(
      (ft || s).memoizedState,
      u
    );
    m && (s.memoizedState = u, el = !0), s = s.queue;
    var y = mm.bind(null, c, s, l);
    if (pt(2048, 8, y, [l]), s.getSnapshot !== n || m || Bt !== null && Bt.memoizedState.tag & 1) {
      if (c.flags |= 2048, Il(
        9,
        kf(),
        hm.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), Tt === null) throw Error(b(349));
      r || (wa & 124) !== 0 || jr(c, n, u);
    }
    return u;
  }
  function jr(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = Ue.updateQueue, n === null ? (n = Gf(), Ue.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function hm(l, n, u, c) {
    n.value = u, n.getSnapshot = c, ym(n) && Yr(l);
  }
  function mm(l, n, u) {
    return u(function() {
      ym(n) && Yr(l);
    });
  }
  function ym(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !pl(l, u);
    } catch {
      return !0;
    }
  }
  function Yr(l) {
    var n = bn(l, 2);
    n !== null && ga(n, l, 2);
  }
  function Qf(l) {
    var n = Dl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), ni) {
        au(!0);
        try {
          u();
        } finally {
          au(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Rn,
      lastRenderedState: l
    }, n;
  }
  function Gr(l, n, u, c) {
    return l.baseState = u, _r(
      l,
      ft,
      typeof c == "function" ? c : Rn
    );
  }
  function Kp(l, n, u, c, s) {
    if (ic(l)) throw Error(b(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          r.listeners.push(m);
        }
      };
      x.T !== null ? u(!0) : r.isTransition = !1, c(r), u = n.pending, u === null ? (r.next = n.pending = r, Vr(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function Vr(l, n) {
    var u = n.action, c = n.payload, s = l.state;
    if (n.isTransition) {
      var r = x.T, m = {};
      x.T = m;
      try {
        var y = u(s, c), S = x.S;
        S !== null && S(m, y), Zf(l, n, y);
      } catch (D) {
        Lr(l, n, D);
      } finally {
        x.T = r;
      }
    } else
      try {
        r = u(s, c), Zf(l, n, r);
      } catch (D) {
        Lr(l, n, D);
      }
  }
  function Zf(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        Xr(l, n, c);
      },
      function(c) {
        return Lr(l, n, c);
      }
    ) : Xr(l, n, u);
  }
  function Xr(l, n, u) {
    n.status = "fulfilled", n.value = u, pm(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, Vr(l, u)));
  }
  function Lr(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, pm(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function pm(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Qr(l, n) {
    return n;
  }
  function gm(l, n) {
    if (at) {
      var u = Tt.formState;
      if (u !== null) {
        e: {
          var c = Ue;
          if (at) {
            if (ut) {
              t: {
                for (var s = ut, r = Ca; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = un(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                ut = un(
                  s.nextSibling
                ), c = s.data === "F!";
                break e;
              }
            }
            hu(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = Dl(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qr,
      lastRenderedState: n
    }, u.queue = c, u = xm.bind(
      null,
      Ue,
      c
    ), c.dispatch = u, c = Qf(!1), r = $f.bind(
      null,
      Ue,
      !1,
      c.queue
    ), c = Dl(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = s, u = Kp.bind(
      null,
      Ue,
      s,
      r,
      u
    ), s.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function Mn(l) {
    var n = Yt();
    return Zr(n, ft, l);
  }
  function Zr(l, n, u) {
    if (n = _r(
      l,
      n,
      Qr
    )[0], l = Xf(Rn)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = Vf(n);
      } catch (m) {
        throw m === ai ? Bf : m;
      }
    else c = n;
    n = Yt();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (Ue.flags |= 2048, Il(
      9,
      kf(),
      U0.bind(null, s, u),
      null
    )), [c, r, l];
  }
  function U0(l, n) {
    l.action = n;
  }
  function kr(l) {
    var n = Yt(), u = ft;
    if (u !== null)
      return Zr(n, u, l);
    Yt(), n = n.memoizedState, u = Yt();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function Il(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = Ue.updateQueue, n === null && (n = Gf(), Ue.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function kf() {
    return { destroy: void 0, resource: void 0 };
  }
  function Jf() {
    return Yt().memoizedState;
  }
  function ii(l, n, u, c) {
    var s = Dl();
    c = c === void 0 ? null : c, Ue.flags |= l, s.memoizedState = Il(
      1 | n,
      kf(),
      u,
      c
    );
  }
  function pt(l, n, u, c) {
    var s = Yt();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    ft !== null && c !== null && Cr(c, ft.memoizedState.deps) ? s.memoizedState = Il(n, r, u, c) : (Ue.flags |= l, s.memoizedState = Il(
      1 | n,
      r,
      u,
      c
    ));
  }
  function $p(l, n) {
    ii(8390656, 8, l, n);
  }
  function Wp(l, n) {
    pt(2048, 8, l, n);
  }
  function vm(l, n) {
    return pt(4, 2, l, n);
  }
  function ln(l, n) {
    return pt(4, 4, l, n);
  }
  function bm(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function Jr(l, n, u) {
    u = u != null ? u.concat([l]) : null, pt(4, 4, bm.bind(null, n, l), u);
  }
  function ac() {
  }
  function nc(l, n) {
    var u = Yt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && Cr(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function Sm(l, n) {
    var u = Yt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && Cr(n, c[1]))
      return c[0];
    if (c = l(), ni) {
      au(!0);
      try {
        l();
      } finally {
        au(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function Kf(l, n, u) {
    return u === void 0 || (wa & 1073741824) !== 0 ? l.memoizedState = n : (l.memoizedState = u, l = ly(), Ue.lanes |= l, Au |= l, u);
  }
  function Tm(l, n, u, c) {
    return pl(u, n) ? u : lc.current !== null ? (l = Kf(l, u, c), pl(l, n) || (el = !0), l) : (wa & 42) === 0 ? (el = !0, l.memoizedState = u) : (l = ly(), Ue.lanes |= l, Au |= l, n);
  }
  function Fp(l, n, u, c, s) {
    var r = Q.p;
    Q.p = r !== 0 && 8 > r ? r : 8;
    var m = x.T, y = {};
    x.T = y, $f(l, !1, n, u);
    try {
      var S = s(), D = x.S;
      if (D !== null && D(y, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var L = kp(
          S,
          c
        );
        uc(
          l,
          n,
          L,
          pa(l)
        );
      } else
        uc(
          l,
          n,
          c,
          pa(l)
        );
    } catch (k) {
      uc(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: k },
        pa()
      );
    } finally {
      Q.p = r, x.T = m;
    }
  }
  function C0() {
  }
  function Kr(l, n, u, c) {
    if (l.tag !== 5) throw Error(b(476));
    var s = Ip(l).queue;
    Fp(
      l,
      s,
      n,
      _,
      u === null ? C0 : function() {
        return ho(l), u(c);
      }
    );
  }
  function Ip(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: _,
      baseState: _,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Rn,
        lastRenderedState: _
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Rn,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function ho(l) {
    var n = Ip(l).next.queue;
    uc(l, n, {}, pa());
  }
  function Na() {
    return il(ia);
  }
  function Em() {
    return Yt().memoizedState;
  }
  function Pp() {
    return Yt().memoizedState;
  }
  function eg(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = pa();
          l = Fl(u);
          var c = zn(n, l, u);
          c !== null && (ga(c, n, u), tc(c, n, u)), n = { cache: co() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Am(l, n, u) {
    var c = pa();
    u = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ic(l) ? tg(n, u) : (u = Fc(l, n, u, c), u !== null && (ga(u, l, c), zm(u, n, c)));
  }
  function xm(l, n, u) {
    var c = pa();
    uc(l, n, u, c);
  }
  function uc(l, n, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ic(l)) tg(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var m = n.lastRenderedState, y = r(m, u);
          if (s.hasEagerState = !0, s.eagerState = y, pl(y, m))
            return Iu(l, n, s, 0), Tt === null && Fa(), !1;
        } catch {
        } finally {
        }
      if (u = Fc(l, n, s, c), u !== null)
        return ga(u, l, c), zm(u, n, c), !0;
    }
    return !1;
  }
  function $f(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: Sc(),
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ic(l)) {
      if (n) throw Error(b(479));
    } else
      n = Fc(
        l,
        u,
        c,
        2
      ), n !== null && ga(n, l, 2);
  }
  function ic(l) {
    var n = l.alternate;
    return l === Ue || n !== null && n === Ue;
  }
  function tg(l, n) {
    ha = Yf = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function zm(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, of(l, u);
    }
  }
  var $r = {
    readContext: il,
    use: Jt,
    useCallback: _t,
    useContext: _t,
    useEffect: _t,
    useImperativeHandle: _t,
    useLayoutEffect: _t,
    useInsertionEffect: _t,
    useMemo: _t,
    useReducer: _t,
    useRef: _t,
    useState: _t,
    useDebugValue: _t,
    useDeferredValue: _t,
    useTransition: _t,
    useSyncExternalStore: _t,
    useId: _t,
    useHostTransitionStatus: _t,
    useFormState: _t,
    useActionState: _t,
    useOptimistic: _t,
    useMemoCache: _t,
    useCacheRefresh: _t
  }, Rm = {
    readContext: il,
    use: Jt,
    useCallback: function(l, n) {
      return Dl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: il,
    useEffect: $p,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, ii(
        4194308,
        4,
        bm.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return ii(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      ii(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = Dl();
      n = n === void 0 ? null : n;
      var c = l();
      if (ni) {
        au(!0);
        try {
          l();
        } finally {
          au(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = Dl();
      if (u !== void 0) {
        var s = u(n);
        if (ni) {
          au(!0);
          try {
            u(n);
          } finally {
            au(!1);
          }
        }
      } else s = n;
      return c.memoizedState = c.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, c.queue = l, l = l.dispatch = Am.bind(
        null,
        Ue,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = Dl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = Qf(l);
      var n = l.queue, u = xm.bind(null, Ue, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: ac,
    useDeferredValue: function(l, n) {
      var u = Dl();
      return Kf(u, l, n);
    },
    useTransition: function() {
      var l = Qf(!1);
      return l = Fp.bind(
        null,
        Ue,
        l.queue,
        !0,
        !1
      ), Dl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = Ue, s = Dl();
      if (at) {
        if (u === void 0)
          throw Error(b(407));
        u = u();
      } else {
        if (u = n(), Tt === null)
          throw Error(b(349));
        (Ke & 124) !== 0 || jr(c, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, $p(mm.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, Il(
        9,
        kf(),
        hm.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = Dl(), n = Tt.identifierPrefix;
      if (at) {
        var u = jt, c = Pa;
        u = (c & ~(1 << 32 - kl(c) - 1)).toString(32) + u, n = "«" + n + "R" + u, u = tn++, 0 < u && (n += "H" + u.toString(32)), n += "»";
      } else
        u = rm++, n = "«" + n + "r" + u.toString(32) + "»";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: Na,
    useFormState: gm,
    useActionState: gm,
    useOptimistic: function(l) {
      var n = Dl();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = $f.bind(
        null,
        Ue,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Br,
    useCacheRefresh: function() {
      return Dl().memoizedState = eg.bind(
        null,
        Ue
      );
    }
  }, Mm = {
    readContext: il,
    use: Jt,
    useCallback: nc,
    useContext: il,
    useEffect: Wp,
    useImperativeHandle: Jr,
    useInsertionEffect: vm,
    useLayoutEffect: ln,
    useMemo: Sm,
    useReducer: Xf,
    useRef: Jf,
    useState: function() {
      return Xf(Rn);
    },
    useDebugValue: ac,
    useDeferredValue: function(l, n) {
      var u = Yt();
      return Tm(
        u,
        ft.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Xf(Rn)[0], n = Yt().memoizedState;
      return [
        typeof l == "boolean" ? l : Vf(l),
        n
      ];
    },
    useSyncExternalStore: Lf,
    useId: Em,
    useHostTransitionStatus: Na,
    useFormState: Mn,
    useActionState: Mn,
    useOptimistic: function(l, n) {
      var u = Yt();
      return Gr(u, ft, l, n);
    },
    useMemoCache: Br,
    useCacheRefresh: Pp
  }, vu = {
    readContext: il,
    use: Jt,
    useCallback: nc,
    useContext: il,
    useEffect: Wp,
    useImperativeHandle: Jr,
    useInsertionEffect: vm,
    useLayoutEffect: ln,
    useMemo: Sm,
    useReducer: qr,
    useRef: Jf,
    useState: function() {
      return qr(Rn);
    },
    useDebugValue: ac,
    useDeferredValue: function(l, n) {
      var u = Yt();
      return ft === null ? Kf(u, l, n) : Tm(
        u,
        ft.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = qr(Rn)[0], n = Yt().memoizedState;
      return [
        typeof l == "boolean" ? l : Vf(l),
        n
      ];
    },
    useSyncExternalStore: Lf,
    useId: Em,
    useHostTransitionStatus: Na,
    useFormState: kr,
    useActionState: kr,
    useOptimistic: function(l, n) {
      var u = Yt();
      return ft !== null ? Gr(u, ft, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Br,
    useCacheRefresh: Pp
  }, cc = null, mo = 0;
  function Wr(l) {
    var n = mo;
    return mo += 1, cc === null && (cc = []), im(cc, l, n);
  }
  function oc(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function Ol(l, n) {
    throw n.$$typeof === Re ? Error(b(525)) : (l = Object.prototype.toString.call(n), Error(
      b(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function Dm(l) {
    var n = l._init;
    return n(l._payload);
  }
  function Pl(l) {
    function n(R, z) {
      if (l) {
        var M = R.deletions;
        M === null ? (R.deletions = [z], R.flags |= 16) : M.push(z);
      }
    }
    function u(R, z) {
      if (!l) return null;
      for (; z !== null; )
        n(R, z), z = z.sibling;
      return null;
    }
    function c(R) {
      for (var z = /* @__PURE__ */ new Map(); R !== null; )
        R.key !== null ? z.set(R.key, R) : z.set(R.index, R), R = R.sibling;
      return z;
    }
    function s(R, z) {
      return R = Ia(R, z), R.index = 0, R.sibling = null, R;
    }
    function r(R, z, M) {
      return R.index = M, l ? (M = R.alternate, M !== null ? (M = M.index, M < z ? (R.flags |= 67108866, z) : M) : (R.flags |= 67108866, z)) : (R.flags |= 1048576, z);
    }
    function m(R) {
      return l && R.alternate === null && (R.flags |= 67108866), R;
    }
    function y(R, z, M, Z) {
      return z === null || z.tag !== 6 ? (z = eo(M, R.mode, Z), z.return = R, z) : (z = s(z, M), z.return = R, z);
    }
    function S(R, z, M, Z) {
      var ue = M.type;
      return ue === qe ? L(
        R,
        z,
        M.props.children,
        Z,
        M.key
      ) : z !== null && (z.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === se && Dm(ue) === z.type) ? (z = s(z, M.props), oc(z, M), z.return = R, z) : (z = $(
        M.type,
        M.key,
        M.props,
        null,
        R.mode,
        Z
      ), oc(z, M), z.return = R, z);
    }
    function D(R, z, M, Z) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== M.containerInfo || z.stateNode.implementation !== M.implementation ? (z = Nt(M, R.mode, Z), z.return = R, z) : (z = s(z, M.children || []), z.return = R, z);
    }
    function L(R, z, M, Z, ue) {
      return z === null || z.tag !== 7 ? (z = Da(
        M,
        R.mode,
        Z,
        ue
      ), z.return = R, z) : (z = s(z, M), z.return = R, z);
    }
    function k(R, z, M) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = eo(
          "" + z,
          R.mode,
          M
        ), z.return = R, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case ve:
            return M = $(
              z.type,
              z.key,
              z.props,
              null,
              R.mode,
              M
            ), oc(M, z), M.return = R, M;
          case _e:
            return z = Nt(
              z,
              R.mode,
              M
            ), z.return = R, z;
          case se:
            var Z = z._init;
            return z = Z(z._payload), k(R, z, M);
        }
        if (dt(z) || pe(z))
          return z = Da(
            z,
            R.mode,
            M,
            null
          ), z.return = R, z;
        if (typeof z.then == "function")
          return k(R, Wr(z), M);
        if (z.$$typeof === Ge)
          return k(
            R,
            Hf(R, z),
            M
          );
        Ol(R, z);
      }
      return null;
    }
    function U(R, z, M, Z) {
      var ue = z !== null ? z.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return ue !== null ? null : y(R, z, "" + M, Z);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case ve:
            return M.key === ue ? S(R, z, M, Z) : null;
          case _e:
            return M.key === ue ? D(R, z, M, Z) : null;
          case se:
            return ue = M._init, M = ue(M._payload), U(R, z, M, Z);
        }
        if (dt(M) || pe(M))
          return ue !== null ? null : L(R, z, M, Z, null);
        if (typeof M.then == "function")
          return U(
            R,
            z,
            Wr(M),
            Z
          );
        if (M.$$typeof === Ge)
          return U(
            R,
            z,
            Hf(R, M),
            Z
          );
        Ol(R, M);
      }
      return null;
    }
    function H(R, z, M, Z, ue) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
        return R = R.get(M) || null, y(z, R, "" + Z, ue);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case ve:
            return R = R.get(
              Z.key === null ? M : Z.key
            ) || null, S(z, R, Z, ue);
          case _e:
            return R = R.get(
              Z.key === null ? M : Z.key
            ) || null, D(z, R, Z, ue);
          case se:
            var Xe = Z._init;
            return Z = Xe(Z._payload), H(
              R,
              z,
              M,
              Z,
              ue
            );
        }
        if (dt(Z) || pe(Z))
          return R = R.get(M) || null, L(z, R, Z, ue, null);
        if (typeof Z.then == "function")
          return H(
            R,
            z,
            M,
            Wr(Z),
            ue
          );
        if (Z.$$typeof === Ge)
          return H(
            R,
            z,
            M,
            Hf(z, Z),
            ue
          );
        Ol(z, Z);
      }
      return null;
    }
    function be(R, z, M, Z) {
      for (var ue = null, Xe = null, ge = z, Ae = z = 0, sl = null; ge !== null && Ae < M.length; Ae++) {
        ge.index > Ae ? (sl = ge, ge = null) : sl = ge.sibling;
        var lt = U(
          R,
          ge,
          M[Ae],
          Z
        );
        if (lt === null) {
          ge === null && (ge = sl);
          break;
        }
        l && ge && lt.alternate === null && n(R, ge), z = r(lt, z, Ae), Xe === null ? ue = lt : Xe.sibling = lt, Xe = lt, ge = sl;
      }
      if (Ae === M.length)
        return u(R, ge), at && et(R, Ae), ue;
      if (ge === null) {
        for (; Ae < M.length; Ae++)
          ge = k(R, M[Ae], Z), ge !== null && (z = r(
            ge,
            z,
            Ae
          ), Xe === null ? ue = ge : Xe.sibling = ge, Xe = ge);
        return at && et(R, Ae), ue;
      }
      for (ge = c(ge); Ae < M.length; Ae++)
        sl = H(
          ge,
          R,
          Ae,
          M[Ae],
          Z
        ), sl !== null && (l && sl.alternate !== null && ge.delete(
          sl.key === null ? Ae : sl.key
        ), z = r(
          sl,
          z,
          Ae
        ), Xe === null ? ue = sl : Xe.sibling = sl, Xe = sl);
      return l && ge.forEach(function(xi) {
        return n(R, xi);
      }), at && et(R, Ae), ue;
    }
    function Se(R, z, M, Z) {
      if (M == null) throw Error(b(151));
      for (var ue = null, Xe = null, ge = z, Ae = z = 0, sl = null, lt = M.next(); ge !== null && !lt.done; Ae++, lt = M.next()) {
        ge.index > Ae ? (sl = ge, ge = null) : sl = ge.sibling;
        var xi = U(R, ge, lt.value, Z);
        if (xi === null) {
          ge === null && (ge = sl);
          break;
        }
        l && ge && xi.alternate === null && n(R, ge), z = r(xi, z, Ae), Xe === null ? ue = xi : Xe.sibling = xi, Xe = xi, ge = sl;
      }
      if (lt.done)
        return u(R, ge), at && et(R, Ae), ue;
      if (ge === null) {
        for (; !lt.done; Ae++, lt = M.next())
          lt = k(R, lt.value, Z), lt !== null && (z = r(lt, z, Ae), Xe === null ? ue = lt : Xe.sibling = lt, Xe = lt);
        return at && et(R, Ae), ue;
      }
      for (ge = c(ge); !lt.done; Ae++, lt = M.next())
        lt = H(ge, R, Ae, lt.value, Z), lt !== null && (l && lt.alternate !== null && ge.delete(lt.key === null ? Ae : lt.key), z = r(lt, z, Ae), Xe === null ? ue = lt : Xe.sibling = lt, Xe = lt);
      return l && ge.forEach(function(L0) {
        return n(R, L0);
      }), at && et(R, Ae), ue;
    }
    function ct(R, z, M, Z) {
      if (typeof M == "object" && M !== null && M.type === qe && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case ve:
            e: {
              for (var ue = M.key; z !== null; ) {
                if (z.key === ue) {
                  if (ue = M.type, ue === qe) {
                    if (z.tag === 7) {
                      u(
                        R,
                        z.sibling
                      ), Z = s(
                        z,
                        M.props.children
                      ), Z.return = R, R = Z;
                      break e;
                    }
                  } else if (z.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === se && Dm(ue) === z.type) {
                    u(
                      R,
                      z.sibling
                    ), Z = s(z, M.props), oc(Z, M), Z.return = R, R = Z;
                    break e;
                  }
                  u(R, z);
                  break;
                } else n(R, z);
                z = z.sibling;
              }
              M.type === qe ? (Z = Da(
                M.props.children,
                R.mode,
                Z,
                M.key
              ), Z.return = R, R = Z) : (Z = $(
                M.type,
                M.key,
                M.props,
                null,
                R.mode,
                Z
              ), oc(Z, M), Z.return = R, R = Z);
            }
            return m(R);
          case _e:
            e: {
              for (ue = M.key; z !== null; ) {
                if (z.key === ue)
                  if (z.tag === 4 && z.stateNode.containerInfo === M.containerInfo && z.stateNode.implementation === M.implementation) {
                    u(
                      R,
                      z.sibling
                    ), Z = s(z, M.children || []), Z.return = R, R = Z;
                    break e;
                  } else {
                    u(R, z);
                    break;
                  }
                else n(R, z);
                z = z.sibling;
              }
              Z = Nt(M, R.mode, Z), Z.return = R, R = Z;
            }
            return m(R);
          case se:
            return ue = M._init, M = ue(M._payload), ct(
              R,
              z,
              M,
              Z
            );
        }
        if (dt(M))
          return be(
            R,
            z,
            M,
            Z
          );
        if (pe(M)) {
          if (ue = pe(M), typeof ue != "function") throw Error(b(150));
          return M = ue.call(M), Se(
            R,
            z,
            M,
            Z
          );
        }
        if (typeof M.then == "function")
          return ct(
            R,
            z,
            Wr(M),
            Z
          );
        if (M.$$typeof === Ge)
          return ct(
            R,
            z,
            Hf(R, M),
            Z
          );
        Ol(R, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint" ? (M = "" + M, z !== null && z.tag === 6 ? (u(R, z.sibling), Z = s(z, M), Z.return = R, R = Z) : (u(R, z), Z = eo(M, R.mode, Z), Z.return = R, R = Z), m(R)) : u(R, z);
    }
    return function(R, z, M, Z) {
      try {
        mo = 0;
        var ue = ct(
          R,
          z,
          M,
          Z
        );
        return cc = null, ue;
      } catch (ge) {
        if (ge === ai || ge === Bf) throw ge;
        var Xe = $l(29, ge, null, R.mode);
        return Xe.lanes = Z, Xe.return = R, Xe;
      } finally {
      }
    };
  }
  var fc = Pl(!0), Dn = Pl(!1), ya = te(null), Ul = null;
  function bu(l) {
    var n = l.alternate;
    le(gt, gt.current & 1), le(ya, l), Ul === null && (n === null || lc.current !== null || n.memoizedState !== null) && (Ul = l);
  }
  function On(l) {
    if (l.tag === 22) {
      if (le(gt, gt.current), le(ya, l), Ul === null) {
        var n = l.alternate;
        n !== null && n.memoizedState !== null && (Ul = l);
      }
    } else Un();
  }
  function Un() {
    le(gt, gt.current), le(ya, ya.current);
  }
  function an(l) {
    F(ya), Ul === l && (Ul = null), F(gt);
  }
  var gt = te(0);
  function Wf(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || bs(u)))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  function ci(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : he({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Fr = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = pa(), s = Fl(c);
      s.payload = n, u != null && (s.callback = u), n = zn(l, s, c), n !== null && (ga(n, l, c), tc(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = pa(), s = Fl(c);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = zn(l, s, c), n !== null && (ga(n, l, c), tc(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = pa(), c = Fl(u);
      c.tag = 2, n != null && (c.callback = n), n = zn(l, c, u), n !== null && (ga(n, l, u), tc(n, l, u));
    }
  };
  function yo(l, n, u, c, s, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, m) : n.prototype && n.prototype.isPureReactComponent ? !Ku(u, c) || !Ku(s, r) : !0;
  }
  function sc(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && Fr.enqueueReplaceState(n, n.state, null);
  }
  function oi(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = he({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  var Ff = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function po(l) {
    Ff(l);
  }
  function Om(l) {
    console.error(l);
  }
  function If(l) {
    Ff(l);
  }
  function Pf(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Um(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function Cm(l, n, u) {
    return u = Fl(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      Pf(l, n);
    }, u;
  }
  function Hm(l) {
    return l = Fl(l), l.tag = 3, l;
  }
  function ea(l, n, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        Um(n, u, c);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      Um(n, u, c), typeof s != "function" && (di === null ? di = /* @__PURE__ */ new Set([this]) : di.add(this));
      var y = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: y !== null ? y : ""
      });
    });
  }
  function lg(l, n, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && uo(
        n,
        u,
        s,
        !0
      ), u = ya.current, u !== null) {
        switch (u.tag) {
          case 13:
            return Ul === null ? bc() : u.alternate === null && Lt === 0 && (Lt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === Rr ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), Ad(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === Rr ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), Ad(l, c, s)), !1;
        }
        throw Error(b(435, u.tag));
      }
      return Ad(l, c, s), bc(), !1;
    }
    if (at)
      return n = ya.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, c !== Ii && (l = Error(b(422), { cause: c }), no(da(l, u)))) : (c !== Ii && (n = Error(b(423), {
        cause: c
      }), no(
        da(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = da(c, u), s = Cm(
        l.stateNode,
        c,
        s
      ), fm(l, s), Lt !== 4 && (Lt = 2)), !1;
    var r = Error(b(520), { cause: c });
    if (r = da(r, u), Ao === null ? Ao = [r] : Ao.push(r), Lt !== 4 && (Lt = 2), n === null) return !0;
    c = da(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = Cm(u.stateNode, c, l), fm(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (di === null || !di.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = Hm(s), ea(
              s,
              l,
              u,
              c
            ), fm(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Gt = Error(b(461)), el = !1;
  function ol(l, n, u, c) {
    n.child = l === null ? Dn(n, null, u, c) : fc(
      n,
      l.child,
      u,
      c
    );
  }
  function ag(l, n, u, c, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in c) {
      var m = {};
      for (var y in c)
        y !== "ref" && (m[y] = c[y]);
    } else m = c;
    return ti(n), c = Hr(
      l,
      n,
      u,
      m,
      r,
      s
    ), y = wr(), l !== null && !el ? (ro(l, n, s), Cn(l, n, s)) : (at && y && Fi(n), n.flags |= 1, ol(l, n, c, s), n.child);
  }
  function Su(l, n, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !Mf(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, rc(
        l,
        n,
        r,
        c,
        s
      )) : (l = $(
        u.type,
        null,
        c,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !cd(l, s)) {
      var m = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Ku, u(m, c) && l.ref === n.ref)
        return Cn(l, n, s);
    }
    return n.flags |= 1, l = Ia(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function rc(l, n, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (Ku(r, c) && l.ref === n.ref)
        if (el = !1, n.pendingProps = c = r, cd(l, s))
          (l.flags & 131072) !== 0 && (el = !0);
        else
          return n.lanes = l.lanes, Cn(l, n, s);
    }
    return Pr(
      l,
      n,
      u,
      c,
      s
    );
  }
  function Ir(l, n, u) {
    var c = n.pendingProps, s = c.children, r = l !== null ? l.memoizedState : null;
    if (c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (c = r !== null ? r.baseLanes | u : u, l !== null) {
          for (s = n.child = l.child, r = 0; s !== null; )
            r = r | s.lanes | s.childLanes, s = s.sibling;
          n.childLanes = r & ~c;
        } else n.childLanes = 0, n.child = null;
        return dc(
          l,
          n,
          c,
          u
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Pi(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? cl(n, r) : fo(), On(n);
      else
        return n.lanes = n.childLanes = 536870912, dc(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u
        );
    } else
      r !== null ? (Pi(n, r.cachePool), cl(n, r), Un(), n.memoizedState = null) : (l !== null && Pi(n, null), fo(), Un());
    return ol(l, n, s, u), n.child;
  }
  function dc(l, n, u, c) {
    var s = Nf();
    return s = s === null ? null : { parent: It._currentValue, pool: s }, n.memoizedState = {
      baseLanes: u,
      cachePool: s
    }, l !== null && Pi(n, null), fo(), On(n), l !== null && uo(l, n, c, !0), null;
  }
  function es(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(b(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function Pr(l, n, u, c, s) {
    return ti(n), u = Hr(
      l,
      n,
      u,
      c,
      void 0,
      s
    ), c = wr(), l !== null && !el ? (ro(l, n, s), Cn(l, n, s)) : (at && c && Fi(n), n.flags |= 1, ol(l, n, u, s), n.child);
  }
  function wm(l, n, u, c, s, r) {
    return ti(n), n.updateQueue = null, u = dm(
      n,
      c,
      u,
      s
    ), ui(l), c = wr(), l !== null && !el ? (ro(l, n, r), Cn(l, n, r)) : (at && c && Fi(n), n.flags |= 1, ol(l, n, u, r), n.child);
  }
  function ed(l, n, u, c, s) {
    if (ti(n), n.stateNode === null) {
      var r = Pc, m = u.contextType;
      typeof m == "object" && m !== null && (r = il(m)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Fr, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, Dr(n), m = u.contextType, r.context = typeof m == "object" && m !== null ? il(m) : Pc, r.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (ci(
        n,
        u,
        m,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && Fr.enqueueReplaceState(r, r.state, null), pu(n, c, r, s), oo(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var y = n.memoizedProps, S = oi(u, y);
      r.props = S;
      var D = r.context, L = u.contextType;
      m = Pc, typeof L == "object" && L !== null && (m = il(L));
      var k = u.getDerivedStateFromProps;
      L = typeof k == "function" || typeof r.getSnapshotBeforeUpdate == "function", y = n.pendingProps !== y, L || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (y || D !== m) && sc(
        n,
        r,
        c,
        m
      ), xn = !1;
      var U = n.memoizedState;
      r.state = U, pu(n, c, r, s), oo(), D = n.memoizedState, y || U !== D || xn ? (typeof k == "function" && (ci(
        n,
        u,
        k,
        c
      ), D = n.memoizedState), (S = xn || yo(
        n,
        u,
        S,
        c,
        U,
        D,
        m
      )) ? (L || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = D), r.props = c, r.state = D, r.context = m, c = S) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, Or(l, n), m = n.memoizedProps, L = oi(u, m), r.props = L, k = n.pendingProps, U = r.context, D = u.contextType, S = Pc, typeof D == "object" && D !== null && (S = il(D)), y = u.getDerivedStateFromProps, (D = typeof y == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== k || U !== S) && sc(
        n,
        r,
        c,
        S
      ), xn = !1, U = n.memoizedState, r.state = U, pu(n, c, r, s), oo();
      var H = n.memoizedState;
      m !== k || U !== H || xn || l !== null && l.dependencies !== null && Cf(l.dependencies) ? (typeof y == "function" && (ci(
        n,
        u,
        y,
        c
      ), H = n.memoizedState), (L = xn || yo(
        n,
        u,
        L,
        c,
        U,
        H,
        S
      ) || l !== null && l.dependencies !== null && Cf(l.dependencies)) ? (D || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, H, S), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        H,
        S
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && U === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && U === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = H), r.props = c, r.state = H, r.context = S, c = L) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && U === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && U === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, es(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = fc(
      n,
      l.child,
      null,
      s
    ), n.child = fc(
      n,
      null,
      u,
      s
    )) : ol(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = Cn(
      l,
      n,
      s
    ), l;
  }
  function td(l, n, u, c) {
    return ao(), n.flags |= 256, ol(l, n, u, c), n.child;
  }
  var ld = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Nm(l) {
    return { baseLanes: l, cachePool: xr() };
  }
  function Bm(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= qa), l;
  }
  function _m(l, n, u) {
    var c = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : (gt.current & 2) !== 0), m && (s = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (at) {
        if (s ? bu(n) : Un(), at) {
          var y = ut, S;
          if (S = y) {
            e: {
              for (S = y, y = Ca; S.nodeType !== 8; ) {
                if (!y) {
                  y = null;
                  break e;
                }
                if (S = un(
                  S.nextSibling
                ), S === null) {
                  y = null;
                  break e;
                }
              }
              y = S;
            }
            y !== null ? (n.memoizedState = {
              dehydrated: y,
              treeContext: du !== null ? { id: Pa, overflow: jt } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, S = $l(
              18,
              null,
              null,
              0
            ), S.stateNode = y, S.return = n, n.child = S, kt = n, ut = null, S = !0) : S = !1;
          }
          S || hu(n);
        }
        if (y = n.memoizedState, y !== null && (y = y.dehydrated, y !== null))
          return bs(y) ? n.lanes = 32 : n.lanes = 536870912, null;
        an(n);
      }
      return y = c.children, c = c.fallback, s ? (Un(), s = n.mode, y = nd(
        { mode: "hidden", children: y },
        s
      ), c = Da(
        c,
        s,
        u,
        null
      ), y.return = n, c.return = n, y.sibling = c, n.child = y, s = n.child, s.memoizedState = Nm(u), s.childLanes = Bm(
        l,
        m,
        u
      ), n.memoizedState = ld, c) : (bu(n), ad(n, y));
    }
    if (S = l.memoizedState, S !== null && (y = S.dehydrated, y !== null)) {
      if (r)
        n.flags & 256 ? (bu(n), n.flags &= -257, n = fi(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Un(), n.child = l.child, n.flags |= 128, n = null) : (Un(), s = c.fallback, y = n.mode, c = nd(
          { mode: "visible", children: c.children },
          y
        ), s = Da(
          s,
          y,
          u,
          null
        ), s.flags |= 2, c.return = n, s.return = n, c.sibling = s, n.child = c, fc(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = Nm(u), c.childLanes = Bm(
          l,
          m,
          u
        ), n.memoizedState = ld, n = s);
      else if (bu(n), bs(y)) {
        if (m = y.nextSibling && y.nextSibling.dataset, m) var D = m.dgst;
        m = D, c = Error(b(419)), c.stack = "", c.digest = m, no({ value: c, source: null, stack: null }), n = fi(
          l,
          n,
          u
        );
      } else if (el || uo(l, n, u, !1), m = (u & l.childLanes) !== 0, el || m) {
        if (m = Tt, m !== null && (c = u & -u, c = (c & 42) !== 0 ? 1 : Za(c), c = (c & (m.suspendedLanes | u)) !== 0 ? 0 : c, c !== 0 && c !== S.retryLane))
          throw S.retryLane = c, bn(l, c), ga(m, l, c), Gt;
        y.data === "$?" || bc(), n = fi(
          l,
          n,
          u
        );
      } else
        y.data === "$?" ? (n.flags |= 192, n.child = l.child, n = null) : (l = S.treeContext, ut = un(
          y.nextSibling
        ), kt = n, at = !0, Ua = null, Ca = !1, l !== null && (Oa[Wl++] = Pa, Oa[Wl++] = jt, Oa[Wl++] = du, Pa = l.id, jt = l.overflow, du = n), n = ad(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (Un(), s = c.fallback, y = n.mode, S = l.child, D = S.sibling, c = Ia(S, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = S.subtreeFlags & 65011712, D !== null ? s = Ia(D, s) : (s = Da(
      s,
      y,
      u,
      null
    ), s.flags |= 2), s.return = n, c.return = n, c.sibling = s, n.child = c, c = s, s = n.child, y = l.child.memoizedState, y === null ? y = Nm(u) : (S = y.cachePool, S !== null ? (D = It._currentValue, S = S.parent !== D ? { parent: D, pool: D } : S) : S = xr(), y = {
      baseLanes: y.baseLanes | u,
      cachePool: S
    }), s.memoizedState = y, s.childLanes = Bm(
      l,
      m,
      u
    ), n.memoizedState = ld, c) : (bu(n), u = l.child, l = u.sibling, u = Ia(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function ad(l, n) {
    return n = nd(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function nd(l, n) {
    return l = $l(22, l, null, n), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function fi(l, n, u) {
    return fc(n, l.child, null, u), l = ad(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function ts(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), br(l.return, n, u);
  }
  function ud(l, n, u, c, s) {
    var r = l.memoizedState;
    r === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: s
    } : (r.isBackwards = n, r.rendering = null, r.renderingStartTime = 0, r.last = c, r.tail = u, r.tailMode = s);
  }
  function id(l, n, u) {
    var c = n.pendingProps, s = c.revealOrder, r = c.tail;
    if (ol(l, n, c.children, u), c = gt.current, (c & 2) !== 0)
      c = c & 1 | 2, n.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        e: for (l = n.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && ts(l, u, n);
          else if (l.tag === 19)
            ts(l, u, n);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === n) break e;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === n)
              break e;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      c &= 1;
    }
    switch (le(gt, c), s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && Wf(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), ud(
          n,
          !1,
          s,
          u,
          r
        );
        break;
      case "backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && Wf(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        ud(
          n,
          !0,
          u,
          null,
          r
        );
        break;
      case "together":
        ud(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Cn(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), Au |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (uo(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(b(153));
    if (n.child !== null) {
      for (l = n.child, u = Ia(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Ia(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function cd(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Cf(l)));
  }
  function ng(l, n, u) {
    switch (n.tag) {
      case 3:
        zt(n, n.stateNode.containerInfo), yu(n, It, l.memoizedState.cache), ao();
        break;
      case 27:
      case 5:
        hl(n);
        break;
      case 4:
        zt(n, n.stateNode.containerInfo);
        break;
      case 10:
        yu(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (bu(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? _m(l, n, u) : (bu(n), l = Cn(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        bu(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (uo(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), s) {
          if (c)
            return id(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), le(gt, gt.current), c) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Ir(l, n, u);
      case 24:
        yu(n, It, l.memoizedState.cache);
    }
    return Cn(l, n, u);
  }
  function ug(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        el = !0;
      else {
        if (!cd(l, u) && (n.flags & 128) === 0)
          return el = !1, ng(
            l,
            n,
            u
          );
        el = (l.flags & 131072) !== 0;
      }
    else
      el = !1, at && (n.flags & 1048576) !== 0 && vr(n, to, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          l = n.pendingProps;
          var c = n.elementType, s = c._init;
          if (c = s(c._payload), n.type = c, typeof c == "function")
            Mf(c) ? (l = oi(c, l), n.tag = 1, n = ed(
              null,
              n,
              c,
              l,
              u
            )) : (n.tag = 0, n = Pr(
              null,
              n,
              c,
              l,
              u
            ));
          else {
            if (c != null) {
              if (s = c.$$typeof, s === rt) {
                n.tag = 11, n = ag(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              } else if (s === Ne) {
                n.tag = 14, n = Su(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              }
            }
            throw n = wt(c) || c, Error(b(306, n, ""));
          }
        }
        return n;
      case 0:
        return Pr(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, s = oi(
          c,
          n.pendingProps
        ), ed(
          l,
          n,
          c,
          s,
          u
        );
      case 3:
        e: {
          if (zt(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(b(387));
          c = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, Or(l, n), pu(n, c, null, u);
          var m = n.memoizedState;
          if (c = m.cache, yu(n, It, c), c !== r.cache && nm(
            n,
            [It],
            u,
            !0
          ), oo(), c = m.element, r.isDehydrated)
            if (r = {
              element: c,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = td(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== s) {
              s = da(
                Error(b(424)),
                n
              ), no(s), n = td(
                l,
                n,
                c,
                u
              );
              break e;
            } else {
              switch (l = n.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (ut = un(l.firstChild), kt = n, at = !0, Ua = null, Ca = !0, u = Dn(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (ao(), c === s) {
              n = Cn(
                l,
                n,
                u
              );
              break e;
            }
            ol(
              l,
              n,
              c,
              u
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return es(l, n), l === null ? (u = Tg(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : at || (u = n.type, l = n.pendingProps, c = Ya(
          Ze.current
        ).createElement(u), c[ul] = n, c[_l] = l, xe(c, u, l), Ft(c), n.stateNode = c) : n.memoizedState = Tg(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return hl(n), l === null && at && (c = n.stateNode = P(
          n.type,
          n.pendingProps,
          Ze.current
        ), kt = n, Ca = !0, s = ut, vi(n.type) ? (bi = s, ut = un(
          c.firstChild
        )) : ut = s), ol(
          l,
          n,
          n.pendingProps.children,
          u
        ), es(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && at && ((s = c = ut) && (c = Bo(
          c,
          n.type,
          n.pendingProps,
          Ca
        ), c !== null ? (n.stateNode = c, kt = n, ut = un(
          c.firstChild
        ), Ca = !1, s = !0) : s = !1), s || hu(n)), hl(n), s = n.type, r = n.pendingProps, m = l !== null ? l.memoizedProps : null, c = r.children, Gn(s, r) ? c = null : m !== null && Gn(s, m) && (n.flags |= 32), n.memoizedState !== null && (s = Hr(
          l,
          n,
          Jp,
          null,
          null,
          u
        ), ia._currentValue = s), es(l, n), ol(l, n, c, u), n.child;
      case 6:
        return l === null && at && ((l = u = ut) && (u = G0(
          u,
          n.pendingProps,
          Ca
        ), u !== null ? (n.stateNode = u, kt = n, ut = null, l = !0) : l = !1), l || hu(n)), null;
      case 13:
        return _m(l, n, u);
      case 4:
        return zt(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = fc(
          n,
          null,
          c,
          u
        ) : ol(
          l,
          n,
          c,
          u
        ), n.child;
      case 11:
        return ag(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return ol(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return ol(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return ol(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, yu(n, n.type, c.value), ol(
          l,
          n,
          c.children,
          u
        ), n.child;
      case 9:
        return s = n.type._context, c = n.pendingProps.children, ti(n), s = il(s), c = c(s), n.flags |= 1, ol(l, n, c, u), n.child;
      case 14:
        return Su(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return rc(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return id(l, n, u);
      case 31:
        return c = n.pendingProps, u = n.mode, c = {
          mode: c.mode,
          children: c.children
        }, l === null ? (u = nd(
          c,
          u
        ), u.ref = n.ref, n.child = u, u.return = n, n = u) : (u = Ia(l.child, c), u.ref = n.ref, n.child = u, u.return = n, n = u), n;
      case 22:
        return Ir(l, n, u);
      case 24:
        return ti(n), c = il(It), l === null ? (s = Nf(), s === null && (s = Tt, r = co(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = {
          parent: c,
          cache: s
        }, Dr(n), yu(n, It, s)) : ((l.lanes & u) !== 0 && (Or(l, n), pu(n, null, null, u), oo()), s = l.memoizedState, r = n.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), yu(n, It, c)) : (c = r.cache, yu(n, It, c), c !== s.cache && nm(
          n,
          [It],
          u,
          !0
        ))), ol(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(b(156, n.tag));
  }
  function Hn(l) {
    l.flags |= 4;
  }
  function go(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !by(n)) {
      if (n = ya.current, n !== null && ((Ke & 4194048) === Ke ? Ul !== null : (Ke & 62914560) !== Ke && (Ke & 536870912) === 0 || n !== Ul))
        throw ec = Rr, zr;
      l.flags |= 8192;
    }
  }
  function ls(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? Ci() : 536870912, l.lanes |= n, Eo |= n);
  }
  function vo(l, n) {
    if (!at)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function Ee(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags & 65011712, c |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags, c |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function qm(l, n, u) {
    var c = n.pendingProps;
    switch (Sn(n), n.tag) {
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
        return Ee(n), null;
      case 1:
        return Ee(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), Tn(It), qt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (lo(n) ? Hn(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, am())), Ee(n), null;
      case 26:
        return u = n.memoizedState, l === null ? (Hn(n), u !== null ? (Ee(n), go(n, u)) : (Ee(n), n.flags &= -16777217)) : u ? u !== l.memoizedState ? (Hn(n), Ee(n), go(n, u)) : (Ee(n), n.flags &= -16777217) : (l.memoizedProps !== c && Hn(n), Ee(n), n.flags &= -16777217), null;
      case 27:
        Qa(n), u = Ze.current;
        var s = n.type;
        if (l !== null && n.stateNode != null)
          l.memoizedProps !== c && Hn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(b(166));
            return Ee(n), null;
          }
          l = ie.current, lo(n) ? Of(n) : (l = P(s, c, u), n.stateNode = l, Hn(n));
        }
        return Ee(n), null;
      case 5:
        if (Qa(n), u = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Hn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(b(166));
            return Ee(n), null;
          }
          if (l = ie.current, lo(n))
            Of(n);
          else {
            switch (s = Ya(
              Ze.current
            ), l) {
              case 1:
                l = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = s.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof c.is == "string" ? s.createElement("select", { is: c.is }) : s.createElement("select"), c.multiple ? l.multiple = !0 : c.size && (l.size = c.size);
                    break;
                  default:
                    l = typeof c.is == "string" ? s.createElement(u, { is: c.is }) : s.createElement(u);
                }
            }
            l[ul] = n, l[_l] = c;
            e: for (s = n.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                l.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === n) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === n)
                  break e;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            n.stateNode = l;
            e: switch (xe(l, u, c), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!c.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Hn(n);
          }
        }
        return Ee(n), n.flags &= -16777217, null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && Hn(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(b(166));
          if (l = Ze.current, lo(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, s = kt, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[ul] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || yy(l.nodeValue, u)), l || hu(n);
          } else
            l = Ya(l).createTextNode(
              c
            ), l[ul] = n, n.stateNode = l;
        }
        return Ee(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = lo(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(b(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(b(317));
              s[ul] = n;
            } else
              ao(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ee(n), s = !1;
          } else
            s = am(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (an(n), n) : (an(n), null);
        }
        if (an(n), (n.flags & 128) !== 0)
          return n.lanes = u, n;
        if (u = c !== null, l = l !== null && l.memoizedState !== null, u) {
          c = n.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool);
          var r = null;
          c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048);
        }
        return u !== l && u && (n.child.flags |= 8192), ls(n, n.updateQueue), Ee(n), null;
      case 4:
        return qt(), l === null && hy(n.stateNode.containerInfo), Ee(n), null;
      case 10:
        return Tn(n.type), Ee(n), null;
      case 19:
        if (F(gt), s = n.memoizedState, s === null) return Ee(n), null;
        if (c = (n.flags & 128) !== 0, r = s.rendering, r === null)
          if (c) vo(s, !1);
          else {
            if (Lt !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = Wf(l), r !== null) {
                  for (n.flags |= 128, vo(s, !1), l = r.updateQueue, n.updateQueue = l, ls(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    Ve(u, l), u = u.sibling;
                  return le(
                    gt,
                    gt.current & 1 | 2
                  ), n.child;
                }
                l = l.sibling;
              }
            s.tail !== null && oa() > pd && (n.flags |= 128, c = !0, vo(s, !1), n.lanes = 4194304);
          }
        else {
          if (!c)
            if (l = Wf(r), l !== null) {
              if (n.flags |= 128, c = !0, l = l.updateQueue, n.updateQueue = l, ls(n, l), vo(s, !0), s.tail === null && s.tailMode === "hidden" && !r.alternate && !at)
                return Ee(n), null;
            } else
              2 * oa() - s.renderingStartTime > pd && u !== 536870912 && (n.flags |= 128, c = !0, vo(s, !1), n.lanes = 4194304);
          s.isBackwards ? (r.sibling = n.child, n.child = r) : (l = s.last, l !== null ? l.sibling = r : n.child = r, s.last = r);
        }
        return s.tail !== null ? (n = s.tail, s.rendering = n, s.tail = n.sibling, s.renderingStartTime = oa(), n.sibling = null, l = gt.current, le(gt, c ? l & 1 | 2 : l & 1), n) : (Ee(n), null);
      case 22:
      case 23:
        return an(n), so(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (Ee(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Ee(n), u = n.updateQueue, u !== null && ls(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && F(An), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), Tn(It), Ee(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(b(156, n.tag));
  }
  function H0(l, n) {
    switch (Sn(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return Tn(It), qt(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return Qa(n), null;
      case 13:
        if (an(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(b(340));
          ao();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return F(gt), null;
      case 4:
        return qt(), null;
      case 10:
        return Tn(n.type), null;
      case 22:
      case 23:
        return an(n), so(), l !== null && F(An), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return Tn(It), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function jm(l, n) {
    switch (Sn(n), n.tag) {
      case 3:
        Tn(It), qt();
        break;
      case 26:
      case 27:
      case 5:
        Qa(n);
        break;
      case 4:
        qt();
        break;
      case 13:
        an(n);
        break;
      case 19:
        F(gt);
        break;
      case 10:
        Tn(n.type);
        break;
      case 22:
      case 23:
        an(n), so(), l !== null && F(An);
        break;
      case 24:
        Tn(It);
    }
  }
  function as(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var s = c.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var r = u.create, m = u.inst;
            c = r(), m.destroy = c;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (y) {
      mt(n, n.return, y);
    }
  }
  function si(l, n, u) {
    try {
      var c = n.updateQueue, s = c !== null ? c.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        c = r;
        do {
          if ((c.tag & l) === l) {
            var m = c.inst, y = m.destroy;
            if (y !== void 0) {
              m.destroy = void 0, s = n;
              var S = u, D = y;
              try {
                D();
              } catch (L) {
                mt(
                  s,
                  S,
                  L
                );
              }
            }
          }
          c = c.next;
        } while (c !== r);
      }
    } catch (L) {
      mt(n, n.return, L);
    }
  }
  function od(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        qf(n, u);
      } catch (c) {
        mt(l, l.return, c);
      }
    }
  }
  function Ym(l, n, u) {
    u.props = oi(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      mt(l, n, c);
    }
  }
  function bo(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (s) {
      mt(l, n, s);
    }
  }
  function nn(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (s) {
          mt(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          mt(l, n, s);
        }
      else u.current = null;
  }
  function So(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (s) {
      mt(l, l.return, s);
    }
  }
  function Gm(l, n, u) {
    try {
      var c = l.stateNode;
      q0(c, l.type, u, n), c[_l] = n;
    } catch (s) {
      mt(l, l.return, s);
    }
  }
  function ig(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && vi(l.type) || l.tag === 4;
  }
  function Ba(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || ig(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && vi(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function hc(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = Dd));
    else if (c !== 4 && (c === 27 && vi(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (hc(l, n, u), l = l.sibling; l !== null; )
        hc(l, n, u), l = l.sibling;
  }
  function fd(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && vi(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (fd(l, n, u), l = l.sibling; l !== null; )
        fd(l, n, u), l = l.sibling;
  }
  function sd(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      xe(n, c, u), n[ul] = l, n[_l] = u;
    } catch (r) {
      mt(l, l.return, r);
    }
  }
  var wn = !1, Vt = !1, rd = !1, dd = typeof WeakSet == "function" ? WeakSet : Set, tl = null;
  function Vm(l, n) {
    if (l = l.containerInfo, ps = Es, l = Wh(l), zf(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var s = c.anchorOffset, r = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break e;
            }
            var m = 0, y = -1, S = -1, D = 0, L = 0, k = l, U = null;
            t: for (; ; ) {
              for (var H; k !== u || s !== 0 && k.nodeType !== 3 || (y = m + s), k !== r || c !== 0 && k.nodeType !== 3 || (S = m + c), k.nodeType === 3 && (m += k.nodeValue.length), (H = k.firstChild) !== null; )
                U = k, k = H;
              for (; ; ) {
                if (k === l) break t;
                if (U === u && ++D === s && (y = m), U === r && ++L === c && (S = m), (H = k.nextSibling) !== null) break;
                k = U, U = k.parentNode;
              }
              k = H;
            }
            u = y === -1 || S === -1 ? null : { start: y, end: S };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (gs = { focusedElem: l, selectionRange: u }, Es = !1, tl = n; tl !== null; )
      if (n = tl, l = n.child, (n.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = n, tl = l;
      else
        for (; tl !== null; ) {
          switch (n = tl, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, c = u.stateNode;
                try {
                  var be = oi(
                    u.type,
                    s,
                    u.elementType === u.type
                  );
                  l = c.getSnapshotBeforeUpdate(
                    be,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (Se) {
                  mt(
                    u,
                    u.return,
                    Se
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  vs(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      vs(l);
                      break;
                    default:
                      l.textContent = "";
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
              if ((l & 1024) !== 0) throw Error(b(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, tl = l;
            break;
          }
          tl = n.return;
        }
  }
  function Xm(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Bn(l, u), c & 4 && as(5, u);
        break;
      case 1:
        if (Bn(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              mt(u, u.return, m);
            }
          else {
            var s = oi(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              mt(
                u,
                u.return,
                m
              );
            }
          }
        c & 64 && od(u), c & 512 && bo(u, u.return);
        break;
      case 3:
        if (Bn(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            qf(l, n);
          } catch (m) {
            mt(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && c & 4 && sd(u);
      case 26:
      case 5:
        Bn(l, u), n === null && c & 4 && So(u), c & 512 && bo(u, u.return);
        break;
      case 12:
        Bn(l, u);
        break;
      case 13:
        Bn(l, u), c & 4 && hd(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = w0.bind(
          null,
          u
        ), V0(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || wn, !c) {
          n = n !== null && n.memoizedState !== null || Vt, s = wn;
          var r = Vt;
          wn = c, (Vt = n) && !r ? ri(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Bn(l, u), wn = s, Vt = r;
        }
        break;
      case 30:
        break;
      default:
        Bn(l, u);
    }
  }
  function Lm(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Lm(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && ff(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Ot = null, gl = !1;
  function Nn(l, n, u) {
    for (u = u.child; u !== null; )
      ke(l, n, u), u = u.sibling;
  }
  function ke(l, n, u) {
    if (Bl && typeof Bl.onCommitFiberUnmount == "function")
      try {
        Bl.onCommitFiberUnmount(Gc, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Vt || nn(u, n), Nn(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Vt || nn(u, n);
        var c = Ot, s = gl;
        vi(u.type) && (Ot = u.stateNode, gl = !1), Nn(
          l,
          n,
          u
        ), na(u.stateNode), Ot = c, gl = s;
        break;
      case 5:
        Vt || nn(u, n);
      case 6:
        if (c = Ot, s = gl, Ot = null, Nn(
          l,
          n,
          u
        ), Ot = c, gl = s, Ot !== null)
          if (gl)
            try {
              (Ot.nodeType === 9 ? Ot.body : Ot.nodeName === "HTML" ? Ot.ownerDocument.body : Ot).removeChild(u.stateNode);
            } catch (r) {
              mt(
                u,
                n,
                r
              );
            }
          else
            try {
              Ot.removeChild(u.stateNode);
            } catch (r) {
              mt(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        Ot !== null && (gl ? (l = Ot, Ud(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Ln(l)) : Ud(Ot, u.stateNode));
        break;
      case 4:
        c = Ot, s = gl, Ot = u.stateNode.containerInfo, gl = !0, Nn(
          l,
          n,
          u
        ), Ot = c, gl = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Vt || si(2, u, n), Vt || si(4, u, n), Nn(
          l,
          n,
          u
        );
        break;
      case 1:
        Vt || (nn(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && Ym(
          u,
          n,
          c
        )), Nn(
          l,
          n,
          u
        );
        break;
      case 21:
        Nn(
          l,
          n,
          u
        );
        break;
      case 22:
        Vt = (c = Vt) || u.memoizedState !== null, Nn(
          l,
          n,
          u
        ), Vt = c;
        break;
      default:
        Nn(
          l,
          n,
          u
        );
    }
  }
  function hd(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Ln(l);
      } catch (u) {
        mt(n, n.return, u);
      }
  }
  function Qm(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new dd()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new dd()), n;
      default:
        throw Error(b(435, l.tag));
    }
  }
  function md(l, n) {
    var u = Qm(l);
    n.forEach(function(c) {
      var s = N0.bind(null, l, c);
      u.has(c) || (u.add(c), c.then(s, s));
    });
  }
  function Yl(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var s = u[c], r = l, m = n, y = m;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (vi(y.type)) {
                Ot = y.stateNode, gl = !1;
                break e;
              }
              break;
            case 5:
              Ot = y.stateNode, gl = !1;
              break e;
            case 3:
            case 4:
              Ot = y.stateNode.containerInfo, gl = !0;
              break e;
          }
          y = y.return;
        }
        if (Ot === null) throw Error(b(160));
        ke(r, m, s), Ot = null, gl = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        ns(n, l), n = n.sibling;
  }
  var Gl = null;
  function ns(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Yl(n, l), fl(l), c & 4 && (si(3, l, l.return), as(3, l), si(5, l, l.return));
        break;
      case 1:
        Yl(n, l), fl(l), c & 512 && (Vt || u === null || nn(u, u.return)), c & 64 && wn && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = Gl;
        if (Yl(n, l), fl(l), c & 512 && (Vt || u === null || nn(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[ce] || r[ul] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), xe(r, c, u), r[ul] = l, Ft(r), c = r;
                      break e;
                    case "link":
                      var m = gy(
                        "link",
                        "href",
                        s
                      ).get(c + (u.href || ""));
                      if (m) {
                        for (var y = 0; y < m.length; y++)
                          if (r = m[y], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            m.splice(y, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), xe(r, c, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (m = gy(
                        "meta",
                        "content",
                        s
                      ).get(c + (u.content || ""))) {
                        for (y = 0; y < m.length; y++)
                          if (r = m[y], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            m.splice(y, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), xe(r, c, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(b(468, c));
                  }
                  r[ul] = l, Ft(r), c = r;
                }
                l.stateNode = c;
              } else
                vy(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Ag(
                s,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? vy(
              s,
              l.type,
              l.stateNode
            ) : Ag(
              s,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && Gm(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Yl(n, l), fl(l), c & 512 && (Vt || u === null || nn(u, u.return)), u !== null && c & 4 && Gm(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Yl(n, l), fl(l), c & 512 && (Vt || u === null || nn(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            Qc(s, "");
          } catch (H) {
            mt(l, l.return, H);
          }
        }
        c & 4 && l.stateNode != null && (s = l.memoizedProps, Gm(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), c & 1024 && (rd = !0);
        break;
      case 6:
        if (Yl(n, l), fl(l), c & 4) {
          if (l.stateNode === null)
            throw Error(b(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (H) {
            mt(l, l.return, H);
          }
        }
        break;
      case 3:
        if (Ei = null, s = Gl, Gl = Cd(n.containerInfo), Yl(n, l), Gl = s, fl(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Ln(n.containerInfo);
          } catch (H) {
            mt(l, l.return, H);
          }
        rd && (rd = !1, Zm(l));
        break;
      case 4:
        c = Gl, Gl = Cd(
          l.stateNode.containerInfo
        ), Yl(n, l), fl(l), Gl = c;
        break;
      case 12:
        Yl(n, l), fl(l);
        break;
      case 13:
        Yl(n, l), fl(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Pm = oa()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, md(l, c)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var S = u !== null && u.memoizedState !== null, D = wn, L = Vt;
        if (wn = D || s, Vt = L || S, Yl(n, l), Vt = L, wn = D, fl(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || S || wn || Vt || Ut(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                S = u = n;
                try {
                  if (r = S.stateNode, s)
                    m = r.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    y = S.stateNode;
                    var k = S.memoizedProps.style, U = k != null && k.hasOwnProperty("display") ? k.display : null;
                    y.style.display = U == null || typeof U == "boolean" ? "" : ("" + U).trim();
                  }
                } catch (H) {
                  mt(S, S.return, H);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                S = n;
                try {
                  S.stateNode.nodeValue = s ? "" : S.memoizedProps;
                } catch (H) {
                  mt(S, S.return, H);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, md(l, u))));
        break;
      case 19:
        Yl(n, l), fl(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, md(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Yl(n, l), fl(l);
    }
  }
  function fl(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (ig(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(b(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = Ba(l);
            fd(l, r, s);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (Qc(m, ""), u.flags &= -33);
            var y = Ba(l);
            fd(l, y, m);
            break;
          case 3:
          case 4:
            var S = u.stateNode.containerInfo, D = Ba(l);
            hc(
              l,
              D,
              S
            );
            break;
          default:
            throw Error(b(161));
        }
      } catch (L) {
        mt(l, l.return, L);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function Zm(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        Zm(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function Bn(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Xm(l, n.alternate, n), n = n.sibling;
  }
  function Ut(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          si(4, n, n.return), Ut(n);
          break;
        case 1:
          nn(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && Ym(
            n,
            n.return,
            u
          ), Ut(n);
          break;
        case 27:
          na(n.stateNode);
        case 26:
        case 5:
          nn(n, n.return), Ut(n);
          break;
        case 22:
          n.memoizedState === null && Ut(n);
          break;
        case 30:
          Ut(n);
          break;
        default:
          Ut(n);
      }
      l = l.sibling;
    }
  }
  function ri(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, s = l, r = n, m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          ri(
            s,
            r,
            u
          ), as(4, r);
          break;
        case 1:
          if (ri(
            s,
            r,
            u
          ), c = r, s = c.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (D) {
              mt(c, c.return, D);
            }
          if (c = r, s = c.updateQueue, s !== null) {
            var y = c.stateNode;
            try {
              var S = s.shared.hiddenCallbacks;
              if (S !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < S.length; s++)
                  Ur(S[s], y);
            } catch (D) {
              mt(c, c.return, D);
            }
          }
          u && m & 64 && od(r), bo(r, r.return);
          break;
        case 27:
          sd(r);
        case 26:
        case 5:
          ri(
            s,
            r,
            u
          ), u && c === null && m & 4 && So(r), bo(r, r.return);
          break;
        case 12:
          ri(
            s,
            r,
            u
          );
          break;
        case 13:
          ri(
            s,
            r,
            u
          ), u && m & 4 && hd(s, r);
          break;
        case 22:
          r.memoizedState === null && ri(
            s,
            r,
            u
          ), bo(r, r.return);
          break;
        case 30:
          break;
        default:
          ri(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function _a(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && En(u));
  }
  function yd(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && En(l));
  }
  function vl(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        km(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function km(l, n, u, c) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        vl(
          l,
          n,
          u,
          c
        ), s & 2048 && as(9, n);
        break;
      case 1:
        vl(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        vl(
          l,
          n,
          u,
          c
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && En(l)));
        break;
      case 12:
        if (s & 2048) {
          vl(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, m = r.id, y = r.onPostCommit;
            typeof y == "function" && y(
              m,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (S) {
            mt(n, n.return, S);
          }
        } else
          vl(
            l,
            n,
            u,
            c
          );
        break;
      case 13:
        vl(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, m = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? vl(
          l,
          n,
          u,
          c
        ) : it(l, n) : r._visibility & 2 ? vl(
          l,
          n,
          u,
          c
        ) : (r._visibility |= 2, Tu(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0
        )), s & 2048 && _a(m, n);
        break;
      case 24:
        vl(
          l,
          n,
          u,
          c
        ), s & 2048 && yd(n.alternate, n);
        break;
      default:
        vl(
          l,
          n,
          u,
          c
        );
    }
  }
  function Tu(l, n, u, c, s) {
    for (s = s && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var r = l, m = n, y = u, S = c, D = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Tu(
            r,
            m,
            y,
            S,
            s
          ), as(8, m);
          break;
        case 23:
          break;
        case 22:
          var L = m.stateNode;
          m.memoizedState !== null ? L._visibility & 2 ? Tu(
            r,
            m,
            y,
            S,
            s
          ) : it(
            r,
            m
          ) : (L._visibility |= 2, Tu(
            r,
            m,
            y,
            S,
            s
          )), s && D & 2048 && _a(
            m.alternate,
            m
          );
          break;
        case 24:
          Tu(
            r,
            m,
            y,
            S,
            s
          ), s && D & 2048 && yd(m.alternate, m);
          break;
        default:
          Tu(
            r,
            m,
            y,
            S,
            s
          );
      }
      n = n.sibling;
    }
  }
  function it(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, s = c.flags;
        switch (c.tag) {
          case 22:
            it(u, c), s & 2048 && _a(
              c.alternate,
              c
            );
            break;
          case 24:
            it(u, c), s & 2048 && yd(c.alternate, c);
            break;
          default:
            it(u, c);
        }
        n = n.sibling;
      }
  }
  var mc = 8192;
  function Xt(l) {
    if (l.subtreeFlags & mc)
      for (l = l.child; l !== null; )
        cg(l), l = l.sibling;
  }
  function cg(l) {
    switch (l.tag) {
      case 26:
        Xt(l), l.flags & mc && l.memoizedState !== null && Rg(
          Gl,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Xt(l);
        break;
      case 3:
      case 4:
        var n = Gl;
        Gl = Cd(l.stateNode.containerInfo), Xt(l), Gl = n;
        break;
      case 22:
        l.memoizedState === null && (n = l.alternate, n !== null && n.memoizedState !== null ? (n = mc, mc = 16777216, Xt(l), mc = n) : Xt(l));
        break;
      default:
        Xt(l);
    }
  }
  function Jm(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function yc(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          tl = c, $m(
            c,
            l
          );
        }
      Jm(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Km(l), l = l.sibling;
  }
  function Km(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        yc(l), l.flags & 2048 && si(9, l, l.return);
        break;
      case 3:
        yc(l);
        break;
      case 12:
        yc(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, Vl(l)) : yc(l);
        break;
      default:
        yc(l);
    }
  }
  function Vl(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          tl = c, $m(
            c,
            l
          );
        }
      Jm(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          si(8, n, n.return), Vl(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, Vl(n));
          break;
        default:
          Vl(n);
      }
      l = l.sibling;
    }
  }
  function $m(l, n) {
    for (; tl !== null; ) {
      var u = tl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          si(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          En(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, tl = c;
      else
        e: for (u = l; tl !== null; ) {
          c = tl;
          var s = c.sibling, r = c.return;
          if (Lm(c), c === u) {
            tl = null;
            break e;
          }
          if (s !== null) {
            s.return = r, tl = s;
            break e;
          }
          tl = r;
        }
    }
  }
  var Wm = {
    getCacheForType: function(l) {
      var n = il(It), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    }
  }, og = typeof WeakMap == "function" ? WeakMap : Map, st = 0, Tt = null, Je = null, Ke = 0, ht = 0, ta = null, _n = !1, To = !1, Fm = !1, Eu = 0, Lt = 0, Au = 0, pc = 0, qn = 0, qa = 0, Eo = 0, Ao = null, la = null, Im = !1, Pm = 0, pd = 1 / 0, xo = null, di = null, bl = 0, jn = null, zo = null, Sl = 0, gd = 0, vd = null, ey = null, Ro = 0, ty = null;
  function pa() {
    if ((st & 2) !== 0 && Ke !== 0)
      return Ke & -Ke;
    if (x.T !== null) {
      var l = Ha;
      return l !== 0 ? l : Sc();
    }
    return Ep();
  }
  function ly() {
    qa === 0 && (qa = (Ke & 536870912) === 0 || at ? ju() : 536870912);
    var l = ya.current;
    return l !== null && (l.flags |= 32), qa;
  }
  function ga(l, n, u) {
    (l === Tt && (ht === 2 || ht === 9) || l.cancelPendingCommit !== null) && (Yn(l, 0), xu(
      l,
      Ke,
      qa,
      !1
    )), Hi(l, u), ((st & 2) === 0 || l !== Tt) && (l === Tt && ((st & 2) === 0 && (pc |= u), Lt === 4 && xu(
      l,
      Ke,
      qa,
      !1
    )), aa(l));
  }
  function Mo(l, n, u) {
    if ((st & 6) !== 0) throw Error(b(327));
    var c = !u && (n & 124) === 0 && (n & l.expiredLanes) === 0 || rn(l, n), s = c ? ny(l, n) : bd(l, n, !0), r = c;
    do {
      if (s === 0) {
        To && !c && xu(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !fg(u)) {
          s = bd(l, n, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var m = 0;
          else
            m = l.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            n = m;
            e: {
              var y = l;
              s = Ao;
              var S = y.current.memoizedState.isDehydrated;
              if (S && (Yn(y, m).flags |= 256), m = bd(
                y,
                m,
                !1
              ), m !== 2) {
                if (Fm && !S) {
                  y.errorRecoveryDisabledLanes |= r, pc |= r, s = 4;
                  break e;
                }
                r = la, la = s, r !== null && (la === null ? la = r : la.push.apply(
                  la,
                  r
                ));
              }
              s = m;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Yn(l, 0), xu(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, r = s, r) {
            case 0:
            case 1:
              throw Error(b(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              xu(
                c,
                n,
                qa,
                !_n
              );
              break e;
            case 2:
              la = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(b(329));
          }
          if ((n & 62914560) === n && (s = Pm + 300 - oa(), 10 < s)) {
            if (xu(
              c,
              n,
              qa,
              !_n
            ), qu(c, 0, !0) !== 0) break e;
            c.timeoutHandle = Od(
              us.bind(
                null,
                c,
                u,
                la,
                xo,
                Im,
                n,
                qa,
                pc,
                Eo,
                _n,
                r,
                2,
                -0,
                0
              ),
              s
            );
            break e;
          }
          us(
            c,
            u,
            la,
            xo,
            Im,
            n,
            qa,
            pc,
            Eo,
            _n,
            r,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    aa(l);
  }
  function us(l, n, u, c, s, r, m, y, S, D, L, k, U, H) {
    if (l.timeoutHandle = -1, k = n.subtreeFlags, (k & 8192 || (k & 16785408) === 16785408) && (Yo = { stylesheets: null, count: 0, unsuspend: zg }, cg(n), k = Sy(), k !== null)) {
      l.cancelPendingCommit = k(
        dg.bind(
          null,
          l,
          n,
          r,
          u,
          c,
          s,
          m,
          y,
          S,
          L,
          1,
          U,
          H
        )
      ), xu(l, r, m, !D);
      return;
    }
    dg(
      l,
      n,
      r,
      u,
      c,
      s,
      m,
      y,
      S
    );
  }
  function fg(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var s = u[c], r = s.getSnapshot;
          s = s.value;
          try {
            if (!pl(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function xu(l, n, u, c) {
    n &= ~qn, n &= ~pc, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - kl(s), m = 1 << r;
      c[r] = -1, s &= ~m;
    }
    u !== 0 && cf(l, u, n);
  }
  function gc() {
    return (st & 6) === 0 ? (fs(0), !1) : !0;
  }
  function hi() {
    if (Je !== null) {
      if (ht === 0)
        var l = Je.return;
      else
        l = Je, en = mu = null, Nr(l), cc = null, mo = 0, l = Je;
      for (; l !== null; )
        jm(l.alternate, l), l = l.return;
      Je = null;
    }
  }
  function Yn(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, j0(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), hi(), Tt = l, Je = u = Ia(l.current, null), Ke = n, ht = 0, ta = null, _n = !1, To = rn(l, n), Fm = !1, Eo = qa = qn = pc = Au = Lt = 0, la = Ao = null, Im = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var s = 31 - kl(c), r = 1 << s;
        n |= l[s], c &= ~r;
      }
    return Eu = n, Fa(), u;
  }
  function ay(l, n) {
    Ue = null, x.H = $r, n === ai || n === Bf ? (n = cm(), ht = 3) : n === zr ? (n = cm(), ht = 4) : ht = n === Gt ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, ta = n, Je === null && (Lt = 1, Pf(
      l,
      da(n, l.current)
    ));
  }
  function sg() {
    var l = x.H;
    return x.H = $r, l === null ? $r : l;
  }
  function vc() {
    var l = x.A;
    return x.A = Wm, l;
  }
  function bc() {
    Lt = 4, _n || (Ke & 4194048) !== Ke && ya.current !== null || (To = !0), (Au & 134217727) === 0 && (pc & 134217727) === 0 || Tt === null || xu(
      Tt,
      Ke,
      qa,
      !1
    );
  }
  function bd(l, n, u) {
    var c = st;
    st |= 2;
    var s = sg(), r = vc();
    (Tt !== l || Ke !== n) && (xo = null, Yn(l, n)), n = !1;
    var m = Lt;
    e: do
      try {
        if (ht !== 0 && Je !== null) {
          var y = Je, S = ta;
          switch (ht) {
            case 8:
              hi(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ya.current === null && (n = !0);
              var D = ht;
              if (ht = 0, ta = null, Do(l, y, S, D), u && To) {
                m = 0;
                break e;
              }
              break;
            default:
              D = ht, ht = 0, ta = null, Do(l, y, S, D);
          }
        }
        Sd(), m = Lt;
        break;
      } catch (L) {
        ay(l, L);
      }
    while (!0);
    return n && l.shellSuspendCounter++, en = mu = null, st = c, x.H = s, x.A = r, Je === null && (Tt = null, Ke = 0, Fa()), m;
  }
  function Sd() {
    for (; Je !== null; ) iy(Je);
  }
  function ny(l, n) {
    var u = st;
    st |= 2;
    var c = sg(), s = vc();
    Tt !== l || Ke !== n ? (xo = null, pd = oa() + 500, Yn(l, n)) : To = rn(
      l,
      n
    );
    e: do
      try {
        if (ht !== 0 && Je !== null) {
          n = Je;
          var r = ta;
          t: switch (ht) {
            case 1:
              ht = 0, ta = null, Do(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (Mr(r)) {
                ht = 0, ta = null, cy(n);
                break;
              }
              n = function() {
                ht !== 2 && ht !== 9 || Tt !== l || (ht = 7), aa(l);
              }, r.then(n, n);
              break e;
            case 3:
              ht = 7;
              break e;
            case 4:
              ht = 5;
              break e;
            case 7:
              Mr(r) ? (ht = 0, ta = null, cy(n)) : (ht = 0, ta = null, Do(l, n, r, 7));
              break;
            case 5:
              var m = null;
              switch (Je.tag) {
                case 26:
                  m = Je.memoizedState;
                case 5:
                case 27:
                  var y = Je;
                  if (!m || by(m)) {
                    ht = 0, ta = null;
                    var S = y.sibling;
                    if (S !== null) Je = S;
                    else {
                      var D = y.return;
                      D !== null ? (Je = D, is(D)) : Je = null;
                    }
                    break t;
                  }
              }
              ht = 0, ta = null, Do(l, n, r, 5);
              break;
            case 6:
              ht = 0, ta = null, Do(l, n, r, 6);
              break;
            case 8:
              hi(), Lt = 6;
              break e;
            default:
              throw Error(b(462));
          }
        }
        uy();
        break;
      } catch (L) {
        ay(l, L);
      }
    while (!0);
    return en = mu = null, x.H = c, x.A = s, st = u, Je !== null ? 0 : (Tt = null, Ke = 0, Fa(), Lt);
  }
  function uy() {
    for (; Je !== null && !S0(); )
      iy(Je);
  }
  function iy(l) {
    var n = ug(l.alternate, l, Eu);
    l.memoizedProps = l.pendingProps, n === null ? is(l) : Je = n;
  }
  function cy(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = wm(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Ke
        );
        break;
      case 11:
        n = wm(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Ke
        );
        break;
      case 5:
        Nr(n);
      default:
        jm(u, n), n = Je = Ve(n, Eu), n = ug(u, n, Eu);
    }
    l.memoizedProps = l.pendingProps, n === null ? is(l) : Je = n;
  }
  function Do(l, n, u, c) {
    en = mu = null, Nr(n), cc = null, mo = 0;
    var s = n.return;
    try {
      if (lg(
        l,
        s,
        n,
        u,
        Ke
      )) {
        Lt = 1, Pf(
          l,
          da(u, l.current)
        ), Je = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw Je = s, r;
      Lt = 1, Pf(
        l,
        da(u, l.current)
      ), Je = null;
      return;
    }
    n.flags & 32768 ? (at || c === 1 ? l = !0 : To || (Ke & 536870912) !== 0 ? l = !1 : (_n = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = ya.current, c !== null && c.tag === 13 && (c.flags |= 16384))), rg(n, l)) : is(n);
  }
  function is(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        rg(
          n,
          _n
        );
        return;
      }
      l = n.return;
      var u = qm(
        n.alternate,
        n,
        Eu
      );
      if (u !== null) {
        Je = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        Je = n;
        return;
      }
      Je = n = l;
    } while (n !== null);
    Lt === 0 && (Lt = 5);
  }
  function rg(l, n) {
    do {
      var u = H0(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, Je = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        Je = l;
        return;
      }
      Je = l = u;
    } while (l !== null);
    Lt = 6, Je = null;
  }
  function dg(l, n, u, c, s, r, m, y, S) {
    l.cancelPendingCommit = null;
    do
      Ed();
    while (bl !== 0);
    if ((st & 6) !== 0) throw Error(b(327));
    if (n !== null) {
      if (n === l.current) throw Error(b(177));
      if (r = n.lanes | n.childLanes, r |= vn, Tp(
        l,
        u,
        r,
        m,
        y,
        S
      ), l === Tt && (Je = Tt = null, Ke = 0), zo = n, jn = l, Sl = u, gd = r, vd = s, ey = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, B0(uf, function() {
        return oy(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = x.T, x.T = null, s = Q.p, Q.p = 2, m = st, st |= 4;
        try {
          Vm(l, n, u);
        } finally {
          st = m, Q.p = s, x.T = c;
        }
      }
      bl = 1, hg(), cs(), Td();
    }
  }
  function hg() {
    if (bl === 1) {
      bl = 0;
      var l = jn, n = zo, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = x.T, x.T = null;
        var c = Q.p;
        Q.p = 2;
        var s = st;
        st |= 4;
        try {
          ns(n, l);
          var r = gs, m = Wh(l.containerInfo), y = r.focusedElem, S = r.selectionRange;
          if (m !== y && y && y.ownerDocument && xf(
            y.ownerDocument.documentElement,
            y
          )) {
            if (S !== null && zf(y)) {
              var D = S.start, L = S.end;
              if (L === void 0 && (L = D), "selectionStart" in y)
                y.selectionStart = D, y.selectionEnd = Math.min(
                  L,
                  y.value.length
                );
              else {
                var k = y.ownerDocument || document, U = k && k.defaultView || window;
                if (U.getSelection) {
                  var H = U.getSelection(), be = y.textContent.length, Se = Math.min(S.start, be), ct = S.end === void 0 ? Se : Math.min(S.end, be);
                  !H.extend && Se > ct && (m = ct, ct = Se, Se = m);
                  var R = Rt(
                    y,
                    Se
                  ), z = Rt(
                    y,
                    ct
                  );
                  if (R && z && (H.rangeCount !== 1 || H.anchorNode !== R.node || H.anchorOffset !== R.offset || H.focusNode !== z.node || H.focusOffset !== z.offset)) {
                    var M = k.createRange();
                    M.setStart(R.node, R.offset), H.removeAllRanges(), Se > ct ? (H.addRange(M), H.extend(z.node, z.offset)) : (M.setEnd(z.node, z.offset), H.addRange(M));
                  }
                }
              }
            }
            for (k = [], H = y; H = H.parentNode; )
              H.nodeType === 1 && k.push({
                element: H,
                left: H.scrollLeft,
                top: H.scrollTop
              });
            for (typeof y.focus == "function" && y.focus(), y = 0; y < k.length; y++) {
              var Z = k[y];
              Z.element.scrollLeft = Z.left, Z.element.scrollTop = Z.top;
            }
          }
          Es = !!ps, gs = ps = null;
        } finally {
          st = s, Q.p = c, x.T = u;
        }
      }
      l.current = n, bl = 2;
    }
  }
  function cs() {
    if (bl === 2) {
      bl = 0;
      var l = jn, n = zo, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = x.T, x.T = null;
        var c = Q.p;
        Q.p = 2;
        var s = st;
        st |= 4;
        try {
          Xm(l, n.alternate, n);
        } finally {
          st = s, Q.p = c, x.T = u;
        }
      }
      bl = 3;
    }
  }
  function Td() {
    if (bl === 4 || bl === 3) {
      bl = 0, Ui();
      var l = jn, n = zo, u = Sl, c = ey;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? bl = 5 : (bl = 0, zo = jn = null, mg(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (di = null), Ws(u), n = n.stateNode, Bl && typeof Bl.onCommitFiberRoot == "function")
        try {
          Bl.onCommitFiberRoot(
            Gc,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = x.T, s = Q.p, Q.p = 2, x.T = null;
        try {
          for (var r = l.onRecoverableError, m = 0; m < c.length; m++) {
            var y = c[m];
            r(y.value, {
              componentStack: y.stack
            });
          }
        } finally {
          x.T = n, Q.p = s;
        }
      }
      (Sl & 3) !== 0 && Ed(), aa(l), s = l.pendingLanes, (u & 4194090) !== 0 && (s & 42) !== 0 ? l === ty ? Ro++ : (Ro = 0, ty = l) : Ro = 0, fs(0);
    }
  }
  function mg(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, En(n)));
  }
  function Ed(l) {
    return hg(), cs(), Td(), oy();
  }
  function oy() {
    if (bl !== 5) return !1;
    var l = jn, n = gd;
    gd = 0;
    var u = Ws(Sl), c = x.T, s = Q.p;
    try {
      Q.p = 32 > u ? 32 : u, x.T = null, u = vd, vd = null;
      var r = jn, m = Sl;
      if (bl = 0, zo = jn = null, Sl = 0, (st & 6) !== 0) throw Error(b(331));
      var y = st;
      if (st |= 4, Km(r.current), km(
        r,
        r.current,
        m,
        u
      ), st = y, fs(0, !1), Bl && typeof Bl.onPostCommitFiberRoot == "function")
        try {
          Bl.onPostCommitFiberRoot(Gc, r);
        } catch {
        }
      return !0;
    } finally {
      Q.p = s, x.T = c, mg(l, n);
    }
  }
  function fy(l, n, u) {
    n = da(u, n), n = Cm(l.stateNode, n, 2), l = zn(l, n, 2), l !== null && (Hi(l, 2), aa(l));
  }
  function mt(l, n, u) {
    if (l.tag === 3)
      fy(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          fy(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (di === null || !di.has(c))) {
            l = da(u, l), u = Hm(2), c = zn(n, u, 2), c !== null && (ea(
              u,
              c,
              n,
              l
            ), Hi(c, 2), aa(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function Ad(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new og();
      var s = /* @__PURE__ */ new Set();
      c.set(n, s);
    } else
      s = c.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), c.set(n, s));
    s.has(u) || (Fm = !0, s.add(u), l = sy.bind(null, l, n, u), n.then(l, l));
  }
  function sy(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Tt === l && (Ke & u) === u && (Lt === 4 || Lt === 3 && (Ke & 62914560) === Ke && 300 > oa() - Pm ? (st & 2) === 0 && Yn(l, 0) : qn |= u, Eo === Ke && (Eo = 0)), aa(l);
  }
  function ry(l, n) {
    n === 0 && (n = Ci()), l = bn(l, n), l !== null && (Hi(l, n), aa(l));
  }
  function w0(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), ry(l, u);
  }
  function N0(l, n) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var c = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(b(314));
    }
    c !== null && c.delete(n), ry(l, u);
  }
  function B0(l, n) {
    return Oi(l, n);
  }
  var xd = null, mi = null, os = !1, Oo = !1, zd = !1, yi = 0;
  function aa(l) {
    l !== mi && l.next === null && (mi === null ? xd = mi = l : mi = mi.next = l), Oo = !0, os || (os = !0, gg());
  }
  function fs(l, n) {
    if (!zd && Oo) {
      zd = !0;
      do
        for (var u = !1, c = xd; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var m = c.suspendedLanes, y = c.pingedLanes;
              r = (1 << 31 - kl(42 | l) + 1) - 1, r &= s & ~(m & ~y), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, rs(c, r));
          } else
            r = Ke, r = qu(
              c,
              c === Tt ? r : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (r & 3) === 0 || rn(c, r) || (u = !0, rs(c, r));
          c = c.next;
        }
      while (u);
      zd = !1;
    }
  }
  function yg() {
    ss();
  }
  function ss() {
    Oo = os = !1;
    var l = 0;
    yi !== 0 && (Mu() && (l = yi), yi = 0);
    for (var n = oa(), u = null, c = xd; c !== null; ) {
      var s = c.next, r = dy(c, n);
      r === 0 ? (c.next = null, u === null ? xd = s : u.next = s, s === null && (mi = u)) : (u = c, (l !== 0 || (r & 3) !== 0) && (Oo = !0)), c = s;
    }
    fs(l);
  }
  function dy(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var m = 31 - kl(r), y = 1 << m, S = s[m];
      S === -1 ? ((y & u) === 0 || (y & c) !== 0) && (s[m] = nl(y, n)) : S <= n && (l.expiredLanes |= y), r &= ~y;
    }
    if (n = Tt, u = Ke, u = qu(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (ht === 2 || ht === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && Th(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || rn(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && Th(c), Ws(u)) {
        case 2:
        case 8:
          u = Eh;
          break;
        case 32:
          u = uf;
          break;
        case 268435456:
          u = Yc;
          break;
        default:
          u = uf;
      }
      return c = pg.bind(null, l), u = Oi(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && Th(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function pg(l, n) {
    if (bl !== 0 && bl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Ed() && l.callbackNode !== u)
      return null;
    var c = Ke;
    return c = qu(
      l,
      l === Tt ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (Mo(l, c, n), dy(l, oa()), l.callbackNode != null && l.callbackNode === u ? pg.bind(null, l) : null);
  }
  function rs(l, n) {
    if (Ed()) return null;
    Mo(l, n, !0);
  }
  function gg() {
    Y0(function() {
      (st & 6) !== 0 ? Oi(
        vp,
        yg
      ) : ss();
    });
  }
  function Sc() {
    return yi === 0 && (yi = ju()), yi;
  }
  function Rd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : pf("" + l);
  }
  function ds(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function vg(l, n, u, c, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = Rd(
        (s[_l] || null).action
      ), m = c.submitter;
      m && (n = (n = m[_l] || null) ? Rd(n.formAction) : m.getAttribute("formAction"), n !== null && (r = n, m = null));
      var y = new or(
        "action",
        "action",
        null,
        c,
        s
      );
      l.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (yi !== 0) {
                  var S = m ? ds(s, m) : new FormData(s);
                  Kr(
                    u,
                    {
                      pending: !0,
                      data: S,
                      method: s.method,
                      action: r
                    },
                    null,
                    S
                  );
                }
              } else
                typeof r == "function" && (y.preventDefault(), S = m ? ds(s, m) : new FormData(s), Kr(
                  u,
                  {
                    pending: !0,
                    data: S,
                    method: s.method,
                    action: r
                  },
                  r,
                  S
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var Qt = 0; Qt < Wc.length; Qt++) {
    var hs = Wc[Qt], _0 = hs.toLowerCase(), Ye = hs[0].toUpperCase() + hs.slice(1);
    Ma(
      _0,
      "on" + Ye
    );
  }
  Ma(Vp, "onAnimationEnd"), Ma(Fh, "onAnimationIteration"), Ma(Xp, "onAnimationStart"), Ma("dblclick", "onDoubleClick"), Ma("focusin", "onFocus"), Ma("focusout", "onBlur"), Ma(Ih, "onTransitionRun"), Ma(gr, "onTransitionStart"), Ma(Lp, "onTransitionCancel"), Ma(Ph, "onTransitionEnd"), Vu("onMouseEnter", ["mouseout", "mouseover"]), Vu("onMouseLeave", ["mouseout", "mouseover"]), Vu("onPointerEnter", ["pointerout", "pointerover"]), Vu("onPointerLeave", ["pointerout", "pointerover"]), Gu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Gu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Gu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Gu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Gu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Gu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ms = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), pi = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ms)
  );
  function Tc(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], s = c.event;
      c = c.listeners;
      e: {
        var r = void 0;
        if (n)
          for (var m = c.length - 1; 0 <= m; m--) {
            var y = c[m], S = y.instance, D = y.currentTarget;
            if (y = y.listener, S !== r && s.isPropagationStopped())
              break e;
            r = y, s.currentTarget = D;
            try {
              r(s);
            } catch (L) {
              Ff(L);
            }
            s.currentTarget = null, r = S;
          }
        else
          for (m = 0; m < c.length; m++) {
            if (y = c[m], S = y.instance, D = y.currentTarget, y = y.listener, S !== r && s.isPropagationStopped())
              break e;
            r = y, s.currentTarget = D;
            try {
              r(s);
            } catch (L) {
              Ff(L);
            }
            s.currentTarget = null, r = S;
          }
      }
    }
  }
  function Ce(l, n) {
    var u = n[Fs];
    u === void 0 && (u = n[Fs] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (Md(n, l, 2, !1), u.add(c));
  }
  function Uo(l, n, u) {
    var c = 0;
    n && (c |= 4), Md(
      u,
      l,
      c,
      n
    );
  }
  var Co = "_reactListening" + Math.random().toString(36).slice(2);
  function hy(l) {
    if (!l[Co]) {
      l[Co] = !0, rf.forEach(function(u) {
        u !== "selectionchange" && (pi.has(u) || Uo(u, !1, l), Uo(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Co] || (n[Co] = !0, Uo("selectionchange", !1, n));
    }
  }
  function Md(l, n, u, c) {
    switch (Dy(n)) {
      case 2:
        var s = Mg;
        break;
      case 8:
        s = Dg;
        break;
      default:
        s = Ry;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !ur || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function ja(l, n, u, c, s) {
    var r = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var m = c.tag;
        if (m === 3 || m === 4) {
          var y = c.stateNode.containerInfo;
          if (y === s) break;
          if (m === 4)
            for (m = c.return; m !== null; ) {
              var S = m.tag;
              if ((S === 3 || S === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; y !== null; ) {
            if (m = ml(y), m === null) return;
            if (S = m.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              c = r = m;
              continue e;
            }
            y = y.parentNode;
          }
        }
        c = c.return;
      }
    Jc(function() {
      var D = r, L = nr(u), k = [];
      e: {
        var U = em.get(l);
        if (U !== void 0) {
          var H = or, be = l;
          switch (l) {
            case "keypress":
              if (yl(u) === 0) break e;
            case "keydown":
            case "keyup":
              H = ka;
              break;
            case "focusin":
              be = "focus", H = Bh;
              break;
            case "focusout":
              be = "blur", H = Bh;
              break;
            case "beforeblur":
            case "afterblur":
              H = Bh;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = Nh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = Hp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = jh;
              break;
            case Vp:
            case Fh:
            case Xp:
              H = D0;
              break;
            case Ph:
              H = qp;
              break;
            case "scroll":
            case "scrollend":
              H = Up;
              break;
            case "wheel":
              H = Qi;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = bf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = Sf;
              break;
            case "toggle":
            case "beforetoggle":
              H = jp;
          }
          var Se = (n & 4) !== 0, ct = !Se && (l === "scroll" || l === "scrollend"), R = Se ? U !== null ? U + "Capture" : null : U;
          Se = [];
          for (var z = D, M; z !== null; ) {
            var Z = z;
            if (M = Z.stateNode, Z = Z.tag, Z !== 5 && Z !== 26 && Z !== 27 || M === null || R === null || (Z = Gi(z, R), Z != null && Se.push(
              zu(z, Z, M)
            )), ct) break;
            z = z.return;
          }
          0 < Se.length && (U = new H(
            U,
            be,
            null,
            u,
            L
          ), k.push({ event: U, listeners: Se }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (U = l === "mouseover" || l === "pointerover", H = l === "mouseout" || l === "pointerout", U && u !== Yi && (be = u.relatedTarget || u.fromElement) && (ml(be) || be[Xc]))
            break e;
          if ((H || U) && (U = L.window === L ? L : (U = L.ownerDocument) ? U.defaultView || U.parentWindow : window, H ? (be = u.relatedTarget || u.toElement, H = D, be = be ? ml(be) : null, be !== null && (ct = K(be), Se = be.tag, be !== ct || Se !== 5 && Se !== 27 && Se !== 6) && (be = null)) : (H = null, be = D), H !== be)) {
            if (Se = Nh, Z = "onMouseLeave", R = "onMouseEnter", z = "mouse", (l === "pointerout" || l === "pointerover") && (Se = Sf, Z = "onPointerLeave", R = "onPointerEnter", z = "pointer"), ct = H == null ? U : sf(H), M = be == null ? U : sf(be), U = new Se(
              Z,
              z + "leave",
              H,
              u,
              L
            ), U.target = ct, U.relatedTarget = M, Z = null, ml(L) === D && (Se = new Se(
              R,
              z + "enter",
              be,
              u,
              L
            ), Se.target = M, Se.relatedTarget = ct, Z = Se), ct = Z, H && be)
              t: {
                for (Se = H, R = be, z = 0, M = Se; M; M = gi(M))
                  z++;
                for (M = 0, Z = R; Z; Z = gi(Z))
                  M++;
                for (; 0 < z - M; )
                  Se = gi(Se), z--;
                for (; 0 < M - z; )
                  R = gi(R), M--;
                for (; z--; ) {
                  if (Se === R || R !== null && Se === R.alternate)
                    break t;
                  Se = gi(Se), R = gi(R);
                }
                Se = null;
              }
            else Se = null;
            H !== null && ys(
              k,
              U,
              H,
              Se,
              !1
            ), be !== null && ct !== null && ys(
              k,
              ct,
              be,
              Se,
              !0
            );
          }
        }
        e: {
          if (U = D ? sf(D) : window, H = U.nodeName && U.nodeName.toLowerCase(), H === "select" || H === "input" && U.type === "file")
            var ue = Qh;
          else if (hr(U))
            if (Zh)
              ue = Kh;
            else {
              ue = Ju;
              var Xe = yr;
            }
          else
            H = U.nodeName, !H || H.toLowerCase() !== "input" || U.type !== "checkbox" && U.type !== "radio" ? D && ji(D.elementType) && (ue = Qh) : ue = su;
          if (ue && (ue = ue(l, D))) {
            mr(
              k,
              ue,
              u,
              L
            );
            break e;
          }
          Xe && Xe(l, U, D), l === "focusout" && D && U.type === "number" && D.memoizedProps.value != null && mf(U, "number", U.value);
        }
        switch (Xe = D ? sf(D) : window, l) {
          case "focusin":
            (hr(Xe) || Xe.contentEditable === "true") && (pn = Xe, $a = D, Wu = null);
            break;
          case "focusout":
            Wu = $a = pn = null;
            break;
          case "mousedown":
            $i = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            $i = !1, pr(k, u, L);
            break;
          case "selectionchange":
            if (Ki) break;
          case "keydown":
          case "keyup":
            pr(k, u, L);
        }
        var ge;
        if (Tf)
          e: {
            switch (l) {
              case "compositionstart":
                var Ae = "onCompositionStart";
                break e;
              case "compositionend":
                Ae = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ae = "onCompositionUpdate";
                break e;
            }
            Ae = void 0;
          }
        else
          ku ? Af(l, u) && (Ae = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Ae = "onCompositionStart");
        Ae && (mn && u.locale !== "ko" && (ku || Ae !== "onCompositionStart" ? Ae === "onCompositionEnd" && ku && (ge = Hh()) : (ou = L, Kc = "value" in ou ? ou.value : ou.textContent, ku = !0)), Xe = Ho(D, Ae), 0 < Xe.length && (Ae = new _h(
          Ae,
          l,
          null,
          u,
          L
        ), k.push({ event: Ae, listeners: Xe }), ge ? Ae.data = ge : (ge = Zu(u), ge !== null && (Ae.data = ge)))), (ge = Gh ? Xh(l, u) : Zi(l, u)) && (Ae = Ho(D, "onBeforeInput"), 0 < Ae.length && (Xe = new _h(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          L
        ), k.push({
          event: Xe,
          listeners: Ae
        }), Xe.data = ge)), vg(
          k,
          l,
          D,
          u,
          L
        );
      }
      Tc(k, n);
    });
  }
  function zu(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function Ho(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = Gi(l, u), s != null && c.unshift(
        zu(l, s, r)
      ), s = Gi(l, n), s != null && c.push(
        zu(l, s, r)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function gi(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function ys(l, n, u, c, s) {
    for (var r = n._reactName, m = []; u !== null && u !== c; ) {
      var y = u, S = y.alternate, D = y.stateNode;
      if (y = y.tag, S !== null && S === c) break;
      y !== 5 && y !== 26 && y !== 27 || D === null || (S = D, s ? (D = Gi(u, r), D != null && m.unshift(
        zu(u, D, S)
      )) : s || (D = Gi(u, r), D != null && m.push(
        zu(u, D, S)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var va = /\r\n?/g, my = /\u0000|\uFFFD/g;
  function bg(l) {
    return (typeof l == "string" ? l : "" + l).replace(va, `
`).replace(my, "");
  }
  function yy(l, n) {
    return n = bg(n), bg(l) === n;
  }
  function Dd() {
  }
  function Me(l, n, u, c, s, r) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || Qc(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && Qc(l, "" + c);
        break;
      case "className":
        df(l, "class", c);
        break;
      case "tabIndex":
        df(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        df(l, u, c);
        break;
      case "style":
        yf(l, c, r);
        break;
      case "data":
        if (n !== "object") {
          df(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = pf("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (n !== "input" && Me(l, n, "name", s.name, s, null), Me(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Me(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Me(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Me(l, n, "encType", s.encType, s, null), Me(l, n, "method", s.method, s, null), Me(l, n, "target", s.target, s, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = pf("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = Dd);
        break;
      case "onScroll":
        c != null && Ce("scroll", l);
        break;
      case "onScrollEnd":
        c != null && Ce("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(b(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(b(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
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
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = pf("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
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
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
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
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        Ce("beforetoggle", l), Ce("toggle", l), iu(l, "popover", c);
        break;
      case "xlinkActuate":
        dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        dn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        dn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        dn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        iu(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = z0.get(u) || u, iu(l, u, c));
    }
  }
  function q(l, n, u, c, s, r) {
    switch (u) {
      case "style":
        yf(l, c, r);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(b(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(b(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? Qc(l, c) : (typeof c == "number" || typeof c == "bigint") && Qc(l, "" + c);
        break;
      case "onScroll":
        c != null && Ce("scroll", l);
        break;
      case "onScrollEnd":
        c != null && Ce("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = Dd);
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
        if (!sa.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[_l] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof c == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, s);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : iu(l, u, c);
          }
    }
  }
  function xe(l, n, u) {
    switch (n) {
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
        Ce("error", l), Ce("load", l);
        var c = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var m = u[r];
            if (m != null)
              switch (r) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(b(137, n));
                default:
                  Me(l, n, r, m, u, null);
              }
          }
        s && Me(l, n, "srcSet", u.srcSet, u, null), c && Me(l, n, "src", u.src, u, null);
        return;
      case "input":
        Ce("invalid", l);
        var y = r = m = s = null, S = null, D = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var L = u[c];
            if (L != null)
              switch (c) {
                case "name":
                  s = L;
                  break;
                case "type":
                  m = L;
                  break;
                case "checked":
                  S = L;
                  break;
                case "defaultChecked":
                  D = L;
                  break;
                case "value":
                  r = L;
                  break;
                case "defaultValue":
                  y = L;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (L != null)
                    throw Error(b(137, n));
                  break;
                default:
                  Me(l, n, c, L, u, null);
              }
          }
        lr(
          l,
          r,
          y,
          S,
          D,
          m,
          s,
          !1
        ), Lu(l);
        return;
      case "select":
        Ce("invalid", l), c = m = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (y = u[s], y != null))
            switch (s) {
              case "value":
                r = y;
                break;
              case "defaultValue":
                m = y;
                break;
              case "multiple":
                c = y;
              default:
                Me(l, n, s, y, u, null);
            }
        n = r, u = m, l.multiple = !!c, n != null ? qi(l, !!c, n, !1) : u != null && qi(l, !!c, u, !0);
        return;
      case "textarea":
        Ce("invalid", l), r = s = c = null;
        for (m in u)
          if (u.hasOwnProperty(m) && (y = u[m], y != null))
            switch (m) {
              case "value":
                c = y;
                break;
              case "defaultValue":
                s = y;
                break;
              case "children":
                r = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(b(91));
                break;
              default:
                Me(l, n, m, y, u, null);
            }
        Uh(l, c, s, r), Lu(l);
        return;
      case "option":
        for (S in u)
          if (u.hasOwnProperty(S) && (c = u[S], c != null))
            switch (S) {
              case "selected":
                l.selected = c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                Me(l, n, S, c, u, null);
            }
        return;
      case "dialog":
        Ce("beforetoggle", l), Ce("toggle", l), Ce("cancel", l), Ce("close", l);
        break;
      case "iframe":
      case "object":
        Ce("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < ms.length; c++)
          Ce(ms[c], l);
        break;
      case "image":
        Ce("error", l), Ce("load", l);
        break;
      case "details":
        Ce("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        Ce("error", l), Ce("load", l);
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
        for (D in u)
          if (u.hasOwnProperty(D) && (c = u[D], c != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(b(137, n));
              default:
                Me(l, n, D, c, u, null);
            }
        return;
      default:
        if (ji(n)) {
          for (L in u)
            u.hasOwnProperty(L) && (c = u[L], c !== void 0 && q(
              l,
              n,
              L,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (y in u)
      u.hasOwnProperty(y) && (c = u[y], c != null && Me(l, n, y, c, u, null));
  }
  function q0(l, n, u, c) {
    switch (n) {
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
        var s = null, r = null, m = null, y = null, S = null, D = null, L = null;
        for (H in u) {
          var k = u[H];
          if (u.hasOwnProperty(H) && k != null)
            switch (H) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = k;
              default:
                c.hasOwnProperty(H) || Me(l, n, H, null, c, k);
            }
        }
        for (var U in c) {
          var H = c[U];
          if (k = u[U], c.hasOwnProperty(U) && (H != null || k != null))
            switch (U) {
              case "type":
                r = H;
                break;
              case "name":
                s = H;
                break;
              case "checked":
                D = H;
                break;
              case "defaultChecked":
                L = H;
                break;
              case "value":
                m = H;
                break;
              case "defaultValue":
                y = H;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null)
                  throw Error(b(137, n));
                break;
              default:
                H !== k && Me(
                  l,
                  n,
                  U,
                  H,
                  c,
                  k
                );
            }
        }
        tr(
          l,
          m,
          y,
          S,
          D,
          L,
          r,
          s
        );
        return;
      case "select":
        H = m = y = U = null;
        for (r in u)
          if (S = u[r], u.hasOwnProperty(r) && S != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                H = S;
              default:
                c.hasOwnProperty(r) || Me(
                  l,
                  n,
                  r,
                  null,
                  c,
                  S
                );
            }
        for (s in c)
          if (r = c[s], S = u[s], c.hasOwnProperty(s) && (r != null || S != null))
            switch (s) {
              case "value":
                U = r;
                break;
              case "defaultValue":
                y = r;
                break;
              case "multiple":
                m = r;
              default:
                r !== S && Me(
                  l,
                  n,
                  s,
                  r,
                  c,
                  S
                );
            }
        n = y, u = m, c = H, U != null ? qi(l, !!u, U, !1) : !!c != !!u && (n != null ? qi(l, !!u, n, !0) : qi(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        H = U = null;
        for (y in u)
          if (s = u[y], u.hasOwnProperty(y) && s != null && !c.hasOwnProperty(y))
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                Me(l, n, y, null, c, s);
            }
        for (m in c)
          if (s = c[m], r = u[m], c.hasOwnProperty(m) && (s != null || r != null))
            switch (m) {
              case "value":
                U = s;
                break;
              case "defaultValue":
                H = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(b(91));
                break;
              default:
                s !== r && Me(l, n, m, s, c, r);
            }
        Oh(l, U, H);
        return;
      case "option":
        for (var be in u)
          if (U = u[be], u.hasOwnProperty(be) && U != null && !c.hasOwnProperty(be))
            switch (be) {
              case "selected":
                l.selected = !1;
                break;
              default:
                Me(
                  l,
                  n,
                  be,
                  null,
                  c,
                  U
                );
            }
        for (S in c)
          if (U = c[S], H = u[S], c.hasOwnProperty(S) && U !== H && (U != null || H != null))
            switch (S) {
              case "selected":
                l.selected = U && typeof U != "function" && typeof U != "symbol";
                break;
              default:
                Me(
                  l,
                  n,
                  S,
                  U,
                  c,
                  H
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
        for (var Se in u)
          U = u[Se], u.hasOwnProperty(Se) && U != null && !c.hasOwnProperty(Se) && Me(l, n, Se, null, c, U);
        for (D in c)
          if (U = c[D], H = u[D], c.hasOwnProperty(D) && U !== H && (U != null || H != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null)
                  throw Error(b(137, n));
                break;
              default:
                Me(
                  l,
                  n,
                  D,
                  U,
                  c,
                  H
                );
            }
        return;
      default:
        if (ji(n)) {
          for (var ct in u)
            U = u[ct], u.hasOwnProperty(ct) && U !== void 0 && !c.hasOwnProperty(ct) && q(
              l,
              n,
              ct,
              void 0,
              c,
              U
            );
          for (L in c)
            U = c[L], H = u[L], !c.hasOwnProperty(L) || U === H || U === void 0 && H === void 0 || q(
              l,
              n,
              L,
              U,
              c,
              H
            );
          return;
        }
    }
    for (var R in u)
      U = u[R], u.hasOwnProperty(R) && U != null && !c.hasOwnProperty(R) && Me(l, n, R, null, c, U);
    for (k in c)
      U = c[k], H = u[k], !c.hasOwnProperty(k) || U === H || U == null && H == null || Me(l, n, k, U, c, H);
  }
  var ps = null, gs = null;
  function Ya(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Ru(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function wo(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function Gn(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var No = null;
  function Mu() {
    var l = window.event;
    return l && l.type === "popstate" ? l === No ? !1 : (No = l, !0) : (No = null, !1);
  }
  var Od = typeof setTimeout == "function" ? setTimeout : void 0, j0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Sg = typeof Promise == "function" ? Promise : void 0, Y0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sg < "u" ? function(l) {
    return Sg.resolve(null).then(l).catch(Vn);
  } : Od;
  function Vn(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function vi(l) {
    return l === "head";
  }
  function Ud(l, n) {
    var u = n, c = 0, s = 0;
    do {
      var r = u.nextSibling;
      if (l.removeChild(u), r && r.nodeType === 8)
        if (u = r.data, u === "/$") {
          if (0 < c && 8 > c) {
            u = c;
            var m = l.ownerDocument;
            if (u & 1 && na(m.documentElement), u & 2 && na(m.body), u & 4)
              for (u = m.head, na(u), m = u.firstChild; m; ) {
                var y = m.nextSibling, S = m.nodeName;
                m[ce] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && m.rel.toLowerCase() === "stylesheet" || u.removeChild(m), m = y;
              }
          }
          if (s === 0) {
            l.removeChild(r), Ln(n);
            return;
          }
          s--;
        } else
          u === "$" || u === "$?" || u === "$!" ? s++ : c = u.charCodeAt(0) - 48;
      else c = 0;
      u = r;
    } while (u);
    Ln(n);
  }
  function vs(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          vs(u), ff(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Bo(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[ce])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = un(l.nextSibling), l === null) break;
    }
    return null;
  }
  function G0(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = un(l.nextSibling), l === null)) return null;
    return l;
  }
  function bs(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function V0(l, n) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function un(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
          break;
        if (n === "/$") return null;
      }
    }
    return l;
  }
  var bi = null;
  function Tl(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (n === 0) return l;
          n--;
        } else u === "/$" && n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function P(l, n, u) {
    switch (n = Ya(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(b(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(b(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(b(454));
        return l;
      default:
        throw Error(b(451));
    }
  }
  function na(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    ff(l);
  }
  var Zt = /* @__PURE__ */ new Map(), Cl = /* @__PURE__ */ new Set();
  function Cd(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Du = Q.d;
  Q.d = {
    f: Hd,
    r: wd,
    D: Ou,
    C: Nd,
    L: Si,
    m: Hl,
    X: Ti,
    S: ua,
    M: py
  };
  function Hd() {
    var l = Du.f(), n = gc();
    return l || n;
  }
  function wd(l) {
    var n = wi(l);
    n !== null && n.tag === 5 && n.type === "form" ? ho(n) : Du.r(l);
  }
  var El = typeof document > "u" ? null : document;
  function cn(l, n, u) {
    var c = El;
    if (c && typeof n == "string" && n) {
      var s = za(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), Cl.has(s) || (Cl.add(s), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(s) === null && (n = c.createElement("link"), xe(n, "link", l), Ft(n), c.head.appendChild(n)));
    }
  }
  function Ou(l) {
    Du.D(l), cn("dns-prefetch", l, null);
  }
  function Nd(l, n) {
    Du.C(l, n), cn("preconnect", l, n);
  }
  function Si(l, n, u) {
    Du.L(l, n, u);
    var c = El;
    if (c && l && n) {
      var s = 'link[rel="preload"][as="' + za(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + za(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + za(
        u.imageSizes
      ) + '"]')) : s += '[href="' + za(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = _o(l);
          break;
        case "script":
          r = Ga(l);
      }
      Zt.has(r) || (l = he(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Zt.set(r, l), c.querySelector(s) !== null || n === "style" && c.querySelector(qo(r)) || n === "script" && c.querySelector(Ec(r)) || (n = c.createElement("link"), xe(n, "link", l), Ft(n), c.head.appendChild(n)));
    }
  }
  function Hl(l, n) {
    Du.m(l, n);
    var u = El;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + za(c) + '"][href="' + za(l) + '"]', r = s;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = Ga(l);
      }
      if (!Zt.has(r) && (l = he({ rel: "modulepreload", href: l }, n), Zt.set(r, l), u.querySelector(s) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Ec(r)))
              return;
        }
        c = u.createElement("link"), xe(c, "link", l), Ft(c), u.head.appendChild(c);
      }
    }
  }
  function ua(l, n, u) {
    Du.S(l, n, u);
    var c = El;
    if (c && l) {
      var s = uu(c).hoistableStyles, r = _o(l);
      n = n || "default";
      var m = s.get(r);
      if (!m) {
        var y = { loading: 0, preload: null };
        if (m = c.querySelector(
          qo(r)
        ))
          y.loading = 5;
        else {
          l = he(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Zt.get(r)) && _d(l, u);
          var S = m = c.createElement("link");
          Ft(S), xe(S, "link", l), S._p = new Promise(function(D, L) {
            S.onload = D, S.onerror = L;
          }), S.addEventListener("load", function() {
            y.loading |= 1;
          }), S.addEventListener("error", function() {
            y.loading |= 2;
          }), y.loading |= 4, Bd(m, n, c);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: y
        }, s.set(r, m);
      }
    }
  }
  function Ti(l, n) {
    Du.X(l, n);
    var u = El;
    if (u && l) {
      var c = uu(u).hoistableScripts, s = Ga(l), r = c.get(s);
      r || (r = u.querySelector(Ec(s)), r || (l = he({ src: l, async: !0 }, n), (n = Zt.get(s)) && qd(l, n), r = u.createElement("script"), Ft(r), xe(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function py(l, n) {
    Du.M(l, n);
    var u = El;
    if (u && l) {
      var c = uu(u).hoistableScripts, s = Ga(l), r = c.get(s);
      r || (r = u.querySelector(Ec(s)), r || (l = he({ src: l, async: !0, type: "module" }, n), (n = Zt.get(s)) && qd(l, n), r = u.createElement("script"), Ft(r), xe(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function Tg(l, n, u, c) {
    var s = (s = Ze.current) ? Cd(s) : null;
    if (!s) throw Error(b(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = _o(u.href), u = uu(
          s
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = _o(u.href);
          var r = uu(
            s
          ).hoistableStyles, m = r.get(l);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, m), (r = s.querySelector(
            qo(l)
          )) && !r._p && (m.instance = r, m.state.loading = 5), Zt.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Zt.set(l, u), r || Eg(
            s,
            l,
            u,
            m.state
          ))), n && c === null)
            throw Error(b(528, ""));
          return m;
        }
        if (n && c !== null)
          throw Error(b(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Ga(u), u = uu(
          s
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(b(444, l));
    }
  }
  function _o(l) {
    return 'href="' + za(l) + '"';
  }
  function qo(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function jo(l) {
    return he({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Eg(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), xe(n, "link", u), Ft(n), l.head.appendChild(n));
  }
  function Ga(l) {
    return '[src="' + za(l) + '"]';
  }
  function Ec(l) {
    return "script[async]" + l;
  }
  function Ag(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + za(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Ft(c), c;
          var s = he({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Ft(c), xe(c, "style", s), Bd(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          s = _o(u.href);
          var r = l.querySelector(
            qo(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Ft(r), r;
          c = jo(u), (s = Zt.get(s)) && _d(c, s), r = (l.ownerDocument || l).createElement("link"), Ft(r);
          var m = r;
          return m._p = new Promise(function(y, S) {
            m.onload = y, m.onerror = S;
          }), xe(r, "link", c), n.state.loading |= 4, Bd(r, u.precedence, l), n.instance = r;
        case "script":
          return r = Ga(u.src), (s = l.querySelector(
            Ec(r)
          )) ? (n.instance = s, Ft(s), s) : (c = u, (s = Zt.get(r)) && (c = he({}, u), qd(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), Ft(s), xe(s, "link", c), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(b(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, Bd(c, u.precedence, l));
    return n.instance;
  }
  function Bd(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = c.length ? c[c.length - 1] : null, r = s, m = 0; m < c.length; m++) {
      var y = c[m];
      if (y.dataset.precedence === n) r = y;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function _d(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function qd(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var Ei = null;
  function gy(l, n, u) {
    if (Ei === null) {
      var c = /* @__PURE__ */ new Map(), s = Ei = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = Ei, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[ce] || r[ul] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = r.getAttribute(n) || "";
        m = l + m;
        var y = c.get(m);
        y ? y.push(r) : c.set(m, [r]);
      }
    }
    return c;
  }
  function vy(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function xg(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return l = n.disabled, typeof n.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function by(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var Yo = null;
  function zg() {
  }
  function Rg(l, n, u) {
    if (Yo === null) throw Error(b(475));
    var c = Yo;
    if (n.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = _o(u.href), r = l.querySelector(
          qo(s)
        );
        if (r) {
          l = r._p, l !== null && typeof l == "object" && typeof l.then == "function" && (c.count++, c = Ss.bind(c), l.then(c, c)), n.state.loading |= 4, n.instance = r, Ft(r);
          return;
        }
        r = l.ownerDocument || l, u = jo(u), (s = Zt.get(s)) && _d(u, s), r = r.createElement("link"), Ft(r);
        var m = r;
        m._p = new Promise(function(y, S) {
          m.onload = y, m.onerror = S;
        }), xe(r, "link", u), n.instance = r;
      }
      c.stylesheets === null && (c.stylesheets = /* @__PURE__ */ new Map()), c.stylesheets.set(n, l), (l = n.state.preload) && (n.state.loading & 3) === 0 && (c.count++, n = Ss.bind(c), l.addEventListener("load", n), l.addEventListener("error", n));
    }
  }
  function Sy() {
    if (Yo === null) throw Error(b(475));
    var l = Yo;
    return l.stylesheets && l.count === 0 && Ts(l, l.stylesheets), 0 < l.count ? function(n) {
      var u = setTimeout(function() {
        if (l.stylesheets && Ts(l, l.stylesheets), l.unsuspend) {
          var c = l.unsuspend;
          l.unsuspend = null, c();
        }
      }, 6e4);
      return l.unsuspend = n, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function Ss() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Ts(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Go = null;
  function Ts(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Go = /* @__PURE__ */ new Map(), n.forEach(ba, l), Go = null, Ss.call(l));
  }
  function ba(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Go.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Go.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var m = s[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), c = m);
        }
        c && u.set(null, c);
      }
      s = n.instance, m = s.getAttribute("data-precedence"), r = u.get(m) || c, r === c && u.set(null, s), u.set(m, s), this.count++, c = Ss.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var ia = {
    $$typeof: Ge,
    Provider: null,
    Consumer: null,
    _currentValue: _,
    _currentValue2: _,
    _threadCount: 0
  };
  function X0(l, n, u, c, s, r, m, y) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Yu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yu(0), this.hiddenUpdates = Yu(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ty(l, n, u, c, s, r, m, y, S, D, L, k) {
    return l = new X0(
      l,
      n,
      u,
      m,
      y,
      S,
      D,
      k
    ), n = 1, r === !0 && (n |= 24), r = $l(3, null, null, n), l.current = r, r.stateNode = l, n = co(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, Dr(r), l;
  }
  function Ey(l) {
    return l ? (l = Pc, l) : Pc;
  }
  function Ay(l, n, u, c, s, r) {
    s = Ey(s), c.context === null ? c.context = s : c.pendingContext = s, c = Fl(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = zn(l, c, n), u !== null && (ga(u, l, n), tc(u, l, n));
  }
  function xy(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function jd(l, n) {
    xy(l, n), (l = l.alternate) && xy(l, n);
  }
  function zy(l) {
    if (l.tag === 13) {
      var n = bn(l, 67108864);
      n !== null && ga(n, l, 67108864), jd(l, 67108864);
    }
  }
  var Es = !0;
  function Mg(l, n, u, c) {
    var s = x.T;
    x.T = null;
    var r = Q.p;
    try {
      Q.p = 2, Ry(l, n, u, c);
    } finally {
      Q.p = r, x.T = s;
    }
  }
  function Dg(l, n, u, c) {
    var s = x.T;
    x.T = null;
    var r = Q.p;
    try {
      Q.p = 8, Ry(l, n, u, c);
    } finally {
      Q.p = r, x.T = s;
    }
  }
  function Ry(l, n, u, c) {
    if (Es) {
      var s = Yd(c);
      if (s === null)
        ja(
          l,
          n,
          c,
          Gd,
          u
        ), Ac(l, c);
      else if (Ug(
        s,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (Ac(l, c), n & 4 && -1 < Og.indexOf(l)) {
        for (; s !== null; ) {
          var r = wi(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var m = fa(r.pendingLanes);
                  if (m !== 0) {
                    var y = r;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; m; ) {
                      var S = 1 << 31 - kl(m);
                      y.entanglements[1] |= S, m &= ~S;
                    }
                    aa(r), (st & 6) === 0 && (pd = oa() + 500, fs(0));
                  }
                }
                break;
              case 13:
                y = bn(r, 2), y !== null && ga(y, r, 2), gc(), jd(r, 2);
            }
          if (r = Yd(c), r === null && ja(
            l,
            n,
            c,
            Gd,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && c.stopPropagation();
      } else
        ja(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function Yd(l) {
    return l = nr(l), My(l);
  }
  var Gd = null;
  function My(l) {
    if (Gd = null, l = ml(l), l !== null) {
      var n = K(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = W(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Gd = l, null;
  }
  function Dy(l) {
    switch (l) {
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
        switch (nf()) {
          case vp:
            return 2;
          case Eh:
            return 8;
          case uf:
          case Ah:
            return 32;
          case Yc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Vo = !1, Xn = null, Uu = null, Cu = null, As = /* @__PURE__ */ new Map(), xs = /* @__PURE__ */ new Map(), Ai = [], Og = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Ac(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        Xn = null;
        break;
      case "dragenter":
      case "dragleave":
        Uu = null;
        break;
      case "mouseover":
      case "mouseout":
        Cu = null;
        break;
      case "pointerover":
      case "pointerout":
        As.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        xs.delete(n.pointerId);
    }
  }
  function xc(l, n, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = wi(n), n !== null && zy(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function Ug(l, n, u, c, s) {
    switch (n) {
      case "focusin":
        return Xn = xc(
          Xn,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return Uu = xc(
          Uu,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return Cu = xc(
          Cu,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return As.set(
          r,
          xc(
            As.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, xs.set(
          r,
          xc(
            xs.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
    }
    return !1;
  }
  function Oy(l) {
    var n = ml(l.target);
    if (n !== null) {
      var u = K(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = W(u), n !== null) {
            l.blockedOn = n, A0(l.priority, function() {
              if (u.tag === 13) {
                var c = pa();
                c = Za(c);
                var s = bn(u, c);
                s !== null && ga(s, u, c), jd(u, c);
              }
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function zs(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = Yd(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        Yi = c, u.target.dispatchEvent(c), Yi = null;
      } else
        return n = wi(u), n !== null && zy(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Rs(l, n, u) {
    zs(l) && u.delete(n);
  }
  function Xo() {
    Vo = !1, Xn !== null && zs(Xn) && (Xn = null), Uu !== null && zs(Uu) && (Uu = null), Cu !== null && zs(Cu) && (Cu = null), As.forEach(Rs), xs.forEach(Rs);
  }
  function Vd(l, n) {
    l.blockedOn === n && (l.blockedOn = null, Vo || (Vo = !0, g.unstable_scheduleCallback(
      g.unstable_NormalPriority,
      Xo
    )));
  }
  var zc = null;
  function Uy(l) {
    zc !== l && (zc = l, g.unstable_scheduleCallback(
      g.unstable_NormalPriority,
      function() {
        zc === l && (zc = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], s = l[n + 2];
          if (typeof c != "function") {
            if (My(c || u) === null)
              continue;
            break;
          }
          var r = wi(u);
          r !== null && (l.splice(n, 3), n -= 3, Kr(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: c
            },
            c,
            s
          ));
        }
      }
    ));
  }
  function Ln(l) {
    function n(S) {
      return Vd(S, l);
    }
    Xn !== null && Vd(Xn, l), Uu !== null && Vd(Uu, l), Cu !== null && Vd(Cu, l), As.forEach(n), xs.forEach(n);
    for (var u = 0; u < Ai.length; u++) {
      var c = Ai[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < Ai.length && (u = Ai[0], u.blockedOn === null); )
      Oy(u), u.blockedOn === null && Ai.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var s = u[c], r = u[c + 1], m = s[_l] || null;
        if (typeof r == "function")
          m || Uy(u);
        else if (m) {
          var y = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, m = r[_l] || null)
              y = m.formAction;
            else if (My(s) !== null) continue;
          } else y = m.action;
          typeof y == "function" ? u[c + 1] = y : (u.splice(c, 3), c -= 3), Uy(u);
        }
      }
  }
  function Cy(l) {
    this._internalRoot = l;
  }
  Xd.prototype.render = Cy.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(b(409));
    var u = n.current, c = pa();
    Ay(u, c, l, n, null, null);
  }, Xd.prototype.unmount = Cy.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      Ay(l.current, 2, null, l, null, null), gc(), n[Xc] = null;
    }
  };
  function Xd(l) {
    this._internalRoot = l;
  }
  Xd.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = Ep();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < Ai.length && n !== 0 && n < Ai[u].priority; u++) ;
      Ai.splice(u, 0, l), u === 0 && Oy(l);
    }
  };
  var Hy = N.version;
  if (Hy !== "19.1.0")
    throw Error(
      b(
        527,
        Hy,
        "19.1.0"
      )
    );
  Q.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(b(188)) : (l = Object.keys(l).join(","), Error(b(268, l)));
    return l = X(n), l = l !== null ? me(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Xl = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: x,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ms = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ms.isDisabled && Ms.supportsFiber)
      try {
        Gc = Ms.inject(
          Xl
        ), Bl = Ms;
      } catch {
      }
  }
  return yp.createRoot = function(l, n) {
    if (!J(l)) throw Error(b(299));
    var u = !1, c = "", s = po, r = Om, m = If, y = null;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (y = n.unstable_transitionCallbacks)), n = Ty(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      s,
      r,
      m,
      y,
      null
    ), l[Xc] = n.current, hy(l), new Cy(n);
  }, yp.hydrateRoot = function(l, n, u) {
    if (!J(l)) throw Error(b(299));
    var c = !1, s = "", r = po, m = Om, y = If, S = null, D = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (y = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (S = u.unstable_transitionCallbacks), u.formState !== void 0 && (D = u.formState)), n = Ty(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      s,
      r,
      m,
      y,
      S,
      D
    ), n.context = Ey(null), u = n.current, c = pa(), c = Za(c), s = Fl(c), s.callback = null, zn(u, s, c), u = c, n.current.lanes = u, Hi(n, u), aa(n), l[Xc] = n.current, hy(l), new Xd(n);
  }, yp.version = "19.1.0", yp;
}
var pp = {};
/**
 * @license React
 * react-dom-client.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lS;
function G2() {
  return lS || (lS = 1, process.env.NODE_ENV !== "production" && function() {
    function g(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function N(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = Me(e) ? e.slice() : Ye({}, e);
      return f[o] = N(e[o], t, a + 1, i), f;
    }
    function w(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return b(e, t, a, 0);
      }
    }
    function b(e, t, a, i) {
      var o = t[i], f = Me(e) ? e.slice() : Ye({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], Me(f) ? f.splice(o, 1) : delete f[o]) : f[o] = b(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function J(e, t, a) {
      var i = t[a], o = Me(e) ? e.slice() : Ye({}, e);
      return a + 1 === t.length ? (Me(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = J(e[i], t, a + 1), o);
    }
    function K() {
      return !1;
    }
    function W() {
      return null;
    }
    function ae() {
    }
    function X() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function me() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function he() {
    }
    function Re(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function ve(e, t, a, i) {
      return new Ef(e, t, a, i);
    }
    function _e(e, t) {
      e.context === Lo && (mt(e.current, 2, t, e, null, null), rc());
    }
    function qe(e, t) {
      if (Zn !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, go(), Tf(
          e.current,
          t,
          a
        ), rc();
      }
    }
    function Te(e) {
      Zn = e;
    }
    function je(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Oe(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function Qe(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Ge(e) {
      if (Oe(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function rt(e) {
      var t = e.alternate;
      if (!t) {
        if (t = Oe(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return Ge(o), e;
            if (f === i) return Ge(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function xt(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = xt(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function nt(e) {
      return e === null || typeof e != "object" ? null : (e = yy && e[yy] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function Ne(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Dd ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Ce:
          return "Fragment";
        case Co:
          return "Profiler";
        case Uo:
          return "StrictMode";
        case Ho:
          return "Suspense";
        case gi:
          return "SuspenseList";
        case my:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Tc:
            return "Portal";
          case ja:
            return (e.displayName || "Context") + ".Provider";
          case Md:
            return (e._context.displayName || "Context") + ".Consumer";
          case zu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ys:
            return t = e.displayName || null, t !== null ? t : Ne(e.type) || "Memo";
          case va:
            t = e._payload, e = e._init;
            try {
              return Ne(e(t));
            } catch {
            }
        }
      return null;
    }
    function se(e) {
      return typeof e.tag == "number" ? ne(e) : typeof e.name == "string" ? e.name : null;
    }
    function ne(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return (t.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Ne(t);
        case 8:
          return t === Uo ? "StrictMode" : "Mode";
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
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return ne(e.return);
      }
      return null;
    }
    function bt(e) {
      return { current: e };
    }
    function Fe(e, t) {
      0 > Ya ? console.error("Unexpected pop.") : (t !== gs[Ya] && console.error("Unexpected Fiber popped."), e.current = ps[Ya], ps[Ya] = null, gs[Ya] = null, Ya--);
    }
    function pe(e, t, a) {
      Ya++, ps[Ya] = e.current, gs[Ya] = a, e.current = t;
    }
    function Et(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function wt(e, t) {
      pe(Gn, t, e), pe(wo, e, e), pe(Ru, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? ht(t) : Bc;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = ht(t), t = ta(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = ph;
                break;
              case "math":
                t = i0;
                break;
              default:
                t = Bc;
            }
      }
      a = a.toLowerCase(), a = Oh(null, a), a = {
        context: t,
        ancestorInfo: a
      }, Fe(Ru, e), pe(Ru, a, e);
    }
    function dt(e) {
      Fe(Ru, e), Fe(wo, e), Fe(Gn, e);
    }
    function x() {
      return Et(Ru.current);
    }
    function Q(e) {
      e.memoizedState !== null && pe(No, e, e);
      var t = Et(Ru.current), a = e.type, i = ta(t.context, a);
      a = Oh(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (pe(wo, e, e), pe(Ru, i, e));
    }
    function _(e) {
      wo.current === e && (Fe(Ru, e), Fe(wo, e)), No.current === e && (Fe(No, e), sp._currentValue = Zs);
    }
    function ye(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function B(e) {
      try {
        return te(e), !1;
      } catch {
        return !0;
      }
    }
    function te(e) {
      return "" + e;
    }
    function F(e, t) {
      if (B(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          ye(e)
        ), te(e);
    }
    function le(e, t) {
      if (B(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          ye(e)
        ), te(e);
    }
    function ie(e) {
      if (B(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          ye(e)
        ), te(e);
    }
    function Ie(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        bi = t.inject(e), Tl = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Ze(e) {
      if (typeof V0 == "function" && un(e), Tl && typeof Tl.setStrictMode == "function")
        try {
          Tl.setStrictMode(bi, e);
        } catch (t) {
          na || (na = !0, console.error(
            "React instrumentation encountered an error: %s",
            t
          ));
        }
    }
    function St(e) {
      P = e;
    }
    function zt() {
      P !== null && typeof P.markCommitStopped == "function" && P.markCommitStopped();
    }
    function qt(e) {
      P !== null && typeof P.markComponentRenderStarted == "function" && P.markComponentRenderStarted(e);
    }
    function hl() {
      P !== null && typeof P.markComponentRenderStopped == "function" && P.markComponentRenderStopped();
    }
    function Qa(e) {
      P !== null && typeof P.markRenderStarted == "function" && P.markRenderStarted(e);
    }
    function lu() {
      P !== null && typeof P.markRenderStopped == "function" && P.markRenderStopped();
    }
    function Oi(e, t) {
      P !== null && typeof P.markStateUpdateScheduled == "function" && P.markStateUpdateScheduled(e, t);
    }
    function Th(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Cd(e) / Du | 0) | 0;
    }
    function S0(e) {
      if (e & 1) return "SyncHydrationLane";
      if (e & 2) return "Sync";
      if (e & 4) return "InputContinuousHydration";
      if (e & 8) return "InputContinuous";
      if (e & 16) return "DefaultHydration";
      if (e & 32) return "Default";
      if (e & 128) return "TransitionHydration";
      if (e & 4194048) return "Transition";
      if (e & 62914560) return "Retry";
      if (e & 67108864) return "SelectiveHydration";
      if (e & 134217728) return "IdleHydration";
      if (e & 268435456) return "Idle";
      if (e & 536870912) return "Offscreen";
      if (e & 1073741824) return "Deferred";
    }
    function Ui(e) {
      var t = e & 42;
      if (t !== 0) return t;
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
          return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
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
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function oa(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = Ui(i) : (d &= h, d !== 0 ? o = Ui(d) : a || (a = h & ~e, a !== 0 && (o = Ui(a))))) : (h = i & ~f, h !== 0 ? o = Ui(h) : d !== 0 ? o = Ui(d) : a || (a = i & ~e, a !== 0 && (o = Ui(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function nf(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function vp(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
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
          return t + 5e3;
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
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function Eh() {
      var e = Hd;
      return Hd <<= 1, (Hd & 4194048) === 0 && (Hd = 256), e;
    }
    function uf() {
      var e = wd;
      return wd <<= 1, (wd & 62914560) === 0 && (wd = 4194304), e;
    }
    function Ah(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Yc(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function T0(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, p = e.expirationTimes, v = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var C = 31 - Cl(a), Y = 1 << C;
        h[C] = 0, p[C] = -1;
        var O = v[C];
        if (O !== null)
          for (v[C] = null, C = 0; C < O.length; C++) {
            var G = O[C];
            G !== null && (G.lane &= -536870913);
          }
        a &= ~Y;
      }
      i !== 0 && bp(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function bp(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - Cl(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 4194090;
    }
    function Gc(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - Cl(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function Bl(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
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
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function au(e, t, a) {
      if (Zt)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - Cl(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function kl(e, t) {
      if (Zt)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - Cl(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function xh(e) {
      return e &= -e, El < e ? cn < e ? (e & 134217727) !== 0 ? Ou : Nd : cn : El;
    }
    function Sp() {
      var e = xe.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? Ou : zd(e.type));
    }
    function E0(e, t) {
      var a = xe.p;
      try {
        return xe.p = e, t();
      } finally {
        xe.p = a;
      }
    }
    function Vc(e) {
      delete e[Hl], delete e[ua], delete e[py], delete e[Tg], delete e[_o];
    }
    function nu(e) {
      var t = e[Hl];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Ti] || a[Hl]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = Ro(e); e !== null; ) {
              if (a = e[Hl])
                return a;
              e = Ro(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function fa(e) {
      if (e = e[Hl] || e[Ti]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function qu(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function rn(e) {
      var t = e[qo];
      return t || (t = e[qo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function nl(e) {
      e[jo] = !0;
    }
    function ju(e, t) {
      Ci(e, t), Ci(e + "Capture", t);
    }
    function Ci(e, t) {
      Ga[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Ga[e] = t;
      var a = e.toLowerCase();
      for (Ec[a] = e, e === "onDoubleClick" && (Ec.ondblclick = e), e = 0; e < t.length; e++)
        Eg.add(t[e]);
    }
    function Yu(e, t) {
      Ag[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function Hi(e) {
      return Mu.call(qd, e) ? !0 : Mu.call(_d, e) ? !1 : Bd.test(e) ? qd[e] = !0 : (_d[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function Tp(e, t, a) {
      if (Hi(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (F(a, t), e === "" + a ? a : e);
      }
    }
    function cf(e, t, a) {
      if (Hi(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          F(a, t), e.setAttribute(t, "" + a);
        }
    }
    function of(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        F(a, t), e.setAttribute(t, "" + a);
      }
    }
    function Za(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        F(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function Ws() {
    }
    function Ep() {
      if (Ei === 0) {
        gy = console.log, vy = console.info, xg = console.warn, by = console.error, Yo = console.group, zg = console.groupCollapsed, Rg = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Ws,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      Ei++;
    }
    function A0() {
      if (Ei--, Ei === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Ye({}, e, { value: gy }),
          info: Ye({}, e, { value: vy }),
          warn: Ye({}, e, { value: xg }),
          error: Ye({}, e, { value: by }),
          group: Ye({}, e, { value: Yo }),
          groupCollapsed: Ye({}, e, { value: zg }),
          groupEnd: Ye({}, e, { value: Rg })
        });
      }
      0 > Ei && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function Wt(e) {
      if (Sy === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          Sy = t && t[1] || "", Ss = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Sy + e + Ss;
    }
    function ul(e, t) {
      if (!e || Go) return "";
      var a = Ts.get(e);
      if (a !== void 0) return a;
      Go = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = q.H, q.H = null, Ep();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var O = function() {
                  throw Error();
                };
                if (Object.defineProperty(O.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(O, []);
                  } catch (oe) {
                    var G = oe;
                  }
                  Reflect.construct(e, [], O);
                } else {
                  try {
                    O.call();
                  } catch (oe) {
                    G = oe;
                  }
                  e.call(O.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (oe) {
                  G = oe;
                }
                (O = e()) && typeof O.catch == "function" && O.catch(function() {
                });
              }
            } catch (oe) {
              if (oe && G && typeof oe.stack == "string")
                return [oe.stack, G.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], p = d[1];
        if (h && p) {
          var v = h.split(`
`), C = p.split(`
`);
          for (d = f = 0; f < v.length && !v[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < C.length && !C[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === v.length || d === C.length)
            for (f = v.length - 1, d = C.length - 1; 1 <= f && 0 <= d && v[f] !== C[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (v[f] !== C[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || v[f] !== C[d]) {
                    var Y = `
` + v[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", e.displayName)), typeof e == "function" && Ts.set(e, Y), Y;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Go = !1, q.H = i, A0(), Error.prepareStackTrace = a;
      }
      return v = (v = e ? e.displayName || e.name : "") ? Wt(v) : "", typeof e == "function" && Ts.set(e, v), v;
    }
    function _l(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react-stack-bottom-frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function Xc(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return Wt(e.type);
        case 16:
          return Wt("Lazy");
        case 13:
          return Wt("Suspense");
        case 19:
          return Wt("SuspenseList");
        case 0:
        case 15:
          return ul(e.type, !1);
        case 11:
          return ul(e.type.render, !1);
        case 1:
          return ul(e.type, !0);
        case 31:
          return Wt("Activity");
        default:
          return "";
      }
    }
    function Fs(e) {
      try {
        var t = "";
        do {
          t += Xc(e);
          var a = e._debugInfo;
          if (a)
            for (var i = a.length - 1; 0 <= i; i--) {
              var o = a[i];
              if (typeof o.name == "string") {
                var f = t, d = o.env, h = Wt(
                  o.name + (d ? " [" + d + "]" : "")
                );
                t = f + h;
              }
            }
          e = e.return;
        } while (e);
        return t;
      } catch (p) {
        return `
Error generating stack: ` + p.message + `
` + p.stack;
      }
    }
    function Ap(e) {
      return (e = e ? e.displayName || e.name : "") ? Wt(e) : "";
    }
    function Is() {
      if (ba === null) return null;
      var e = ba._debugOwner;
      return e != null ? se(e) : null;
    }
    function xp() {
      if (ba === null) return "";
      var e = ba;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += Wt(e.type);
            break;
          case 13:
            t += Wt("Suspense");
            break;
          case 19:
            t += Wt("SuspenseList");
            break;
          case 31:
            t += Wt("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += Ap(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += Ap(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            e && i && (typeof i != "string" && (a._debugStack = i = _l(i)), i !== "" && (t += `
` + i));
          } else if (e.debugStack != null) {
            var o = e.debugStack;
            (e = e.owner) && o && (t += `
` + _l(o));
          } else break;
        var f = t;
      } catch (d) {
        f = `
Error generating stack: ` + d.message + `
` + d.stack;
      }
      return f;
    }
    function ce(e, t, a, i, o, f, d) {
      var h = ba;
      ff(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        ff(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function ff(e) {
      q.getCurrentStack = e === null ? null : xp, ia = !1, ba = e;
    }
    function ml(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return ie(e), e;
        default:
          return "";
      }
    }
    function wi(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function sf(e) {
      var t = wi(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      ie(e[t]);
      var i = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var o = a.get, f = a.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            ie(d), i = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return i;
          },
          setValue: function(d) {
            ie(d), i = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function uu(e) {
      e._valueTracker || (e._valueTracker = sf(e));
    }
    function Ft(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = wi(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function rf(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function sa(e) {
      return e.replace(
        X0,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function Gu(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || Ey || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Is() || "A component",
        t.type
      ), Ey = !0), t.value === void 0 || t.defaultValue === void 0 || Ty || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Is() || "A component",
        t.type
      ), Ty = !0);
    }
    function Vu(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (F(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + ml(t)) : e.value !== "" + ml(t) && (e.value = "" + ml(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Ps(e, d, ml(t)) : a != null ? Ps(e, d, ml(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (F(h, "name"), e.name = "" + ml(h)) : e.removeAttribute("name");
    }
    function zp(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (F(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null))
          return;
        a = a != null ? "" + ml(a) : "", t = t != null ? "" + ml(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (F(d, "name"), e.name = d);
    }
    function Ps(e, t, a) {
      t === "number" && rf(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function zh(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? hs.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || xy || (xy = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || jd || (jd = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || Ay || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Ay = !0);
    }
    function Rp() {
      var e = Is();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function iu(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + ml(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function df(e, t) {
      for (e = 0; e < Es.length; e++) {
        var a = Es[e];
        if (t[a] != null) {
          var i = Me(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            Rp()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            Rp()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || zy || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), zy = !0);
    }
    function dn(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || Mg || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        Is() || "A component"
      ), Mg = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function er(e, t, a) {
      if (t != null && (t = "" + ml(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + ml(a) : "";
    }
    function Rh(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (Me(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = ml(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i);
    }
    function Ni(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Ni(e.children[0], t) : e;
    }
    function ql(e) {
      return "  " + "  ".repeat(e);
    }
    function Xu(e) {
      return "+ " + "  ".repeat(e);
    }
    function Bi(e) {
      return "- " + "  ".repeat(e);
    }
    function Mh(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function Ml(e, t) {
      return Dg.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function hf(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return Xu(a) + Ml(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Xu(a) + Ml(e, i) + `
` + Bi(a) + Ml(t, i) + `
`;
      }
      return ql(a) + Ml(e, i) + `
`;
    }
    function Dh(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function Lu(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (Me(e)) return "[...]";
          if (e.$$typeof === pi)
            return (t = Ne(e.type)) ? "<" + t + ">" : "<...>";
          var a = Dh(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = Lu(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function _i(e, t) {
      return typeof e != "string" || Dg.test(e) ? "{" + Lu(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function Lc(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = _i(
            t[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function x0(e, t, a) {
      var i = "", o = Ye({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = Lu(e[f], d);
          t.hasOwnProperty(f) ? (d = Lu(t[f], d), i += Xu(a) + f + ": " + h + `
`, i += Bi(a) + f + ": " + d + `
`) : i += Xu(a) + f + ": " + h + `
`;
        }
      for (var p in o)
        o.hasOwnProperty(p) && (e = Lu(
          o[p],
          120 - 2 * a - p.length - 2
        ), i += Bi(a) + p + ": " + e + `
`);
      return i;
    }
    function za(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (v in a)
        a.hasOwnProperty(v) && f.set(
          v.toLowerCase(),
          v
        );
      if (f.size === 1 && f.has("children"))
        o += Lc(
          e,
          t,
          ql(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, p = f.get(d.toLowerCase());
            if (p !== void 0) {
              f.delete(d.toLowerCase());
              var v = t[d];
              p = a[p];
              var C = _i(
                v,
                h
              );
              h = _i(
                p,
                h
              ), typeof v == "object" && v !== null && typeof p == "object" && p !== null && Dh(v) === "Object" && Dh(p) === "Object" && (2 < Object.keys(v).length || 2 < Object.keys(p).length || -1 < C.indexOf("...") || -1 < h.indexOf("...")) ? o += ql(i + 1) + d + `={{
` + x0(
                v,
                p,
                i + 2
              ) + ql(i + 1) + `}}
` : (o += Xu(i + 1) + d + "=" + C + `
`, o += Bi(i + 1) + d + "=" + h + `
`);
            } else
              o += ql(i + 1) + d + "=" + _i(t[d], h) + `
`;
          }
        f.forEach(function(Y) {
          if (Y !== "children") {
            var O = 120 - 2 * (i + 1) - Y.length - 1;
            o += Bi(i + 1) + Y + "=" + _i(a[Y], O) + `
`;
          }
        }), o = o === "" ? ql(i) + "<" + e + `>
` : ql(i) + "<" + e + `
` + o + ql(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += hf(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + hf("" + t, null, i + 1) : o + hf("" + t, void 0, i + 1)), o;
    }
    function tr(e, t) {
      var a = Mh(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += tr(e, t), e = e.sibling;
        return a;
      }
      return ql(t) + "<" + a + `>
`;
    }
    function lr(e, t) {
      var a = Ni(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return ql(t) + `...
` + lr(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += ql(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = hf(o, e.serverProps, t), t++;
      else if (f = Mh(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (v in o)
            if (o.hasOwnProperty(v) && v !== "children") {
              var p = _i(o[v], 15);
              if (d -= v.length + p.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + v + "=" + p;
            }
          i = ql(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = Lc(
            f,
            o,
            Xu(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = za(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var v = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (v += lr(d, t), f++) : v += tr(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (v += ql(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], v = typeof f == "string" ? v + (Bi(t) + Ml(f, 120 - 2 * t) + `
`) : v + Lc(
          f.type,
          f.props,
          Bi(t)
        );
      return a + i + v;
    }
    function mf(e) {
      try {
        return `

` + lr(e, 0);
      } catch {
        return "";
      }
    }
    function qi(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? mf(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function Oh(e, t) {
      var a = Ye({}, e || Dy), i = { tag: t };
      return Yd.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Gd.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Ry.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function Uh(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return My.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function Qc(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function Mp(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function ar(e, t) {
      t = t || Dy;
      var a = t.current;
      if (t = (a = Uh(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : Qc(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, Vo[t]) return !1;
      Vo[t] = !0;
      var o = (t = ba) ? Mp(t.return, i) : null, f = t !== null && o !== null ? qi(o, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", i === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || ce(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function yf(e, t, a) {
      if (a || Uh("#text", t, !1))
        return !0;
      if (a = "#text|" + t, Vo[a]) return !1;
      Vo[a] = !0;
      var i = (a = ba) ? Mp(a, t) : null;
      return a = a !== null && i !== null ? qi(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function ji(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function z0(e) {
      return e.replace(Ai, function(t, a) {
        return a.toUpperCase();
      });
    }
    function Dp(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? Ac.hasOwnProperty(t) && Ac[t] || (Ac[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        z0(t.replace(xs, "ms-"))
      )) : As.test(t) ? Ac.hasOwnProperty(t) && Ac[t] || (Ac[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !Og.test(a) || xc.hasOwnProperty(a) && xc[a] || (xc[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(Og, "")
      )), typeof a == "number" && (isNaN(a) ? Ug || (Ug = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || Oy || (Oy = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || zs.has(t) ? t === "float" ? e.cssFloat = a : (le(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function pf(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = Xn[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = Xn[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var p in t)
            for (o = Xn[p] || [p], f = 0; f < o.length; f++)
              h[o[f]] = p;
          p = {};
          for (var v in i)
            if (o = i[v], (f = h[v]) && o !== f && (d = o + "," + f, !p[d])) {
              p[d] = !0, d = console;
              var C = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                C == null || typeof C == "boolean" || C === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var Y in a)
          !a.hasOwnProperty(Y) || t != null && t.hasOwnProperty(Y) || (Y.indexOf("--") === 0 ? e.setProperty(Y, "") : Y === "float" ? e.cssFloat = "" : e[Y] = "");
        for (var O in t)
          v = t[O], t.hasOwnProperty(O) && a[O] !== v && Dp(e, O, v);
      } else
        for (i in t)
          t.hasOwnProperty(i) && Dp(e, i, t[i]);
    }
    function Yi(e) {
      if (e.indexOf("-") === -1) return !1;
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
    function nr(e) {
      return Vd.get(e) || e;
    }
    function Zc(e, t) {
      if (Mu.call(Ln, t) && Ln[t])
        return !0;
      if (Xd.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = Uy.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), Ln[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), Ln[t] = !0;
      }
      if (Cy.test(t)) {
        if (e = t.toLowerCase(), e = Uy.hasOwnProperty(e) ? e : null, e == null) return Ln[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), Ln[t] = !0);
      }
      return !0;
    }
    function kc(e, t) {
      var a = [], i;
      for (i in t)
        Zc(e, i) || a.push(i);
      t = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function Op(e, t, a, i) {
      if (Mu.call(Xl, t) && Xl[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), Xl[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), Xl[t] = !0;
        if (Ms.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), Xl[t] = !0;
      } else if (Ms.test(t))
        return l.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), Xl[t] = !0;
      if (n.test(t) || u.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), Xl[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), Xl[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), Xl[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), Xl[t] = !0;
      if (zc.hasOwnProperty(o)) {
        if (o = zc[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), Xl[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), Xl[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
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
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), Xl[t] = !0);
          }
        case "function":
        case "symbol":
          return Xl[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
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
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), Xl[t] = !0;
          }
      }
      return !0;
    }
    function Ch(e, t, a) {
      var i = [], o;
      for (o in t)
        Op(e, o, t[o], a) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function Jc(e) {
      return c.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Gi(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function hn(e) {
      var t = fa(e);
      if (t && (e = t.stateNode)) {
        var a = e[ua] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Vu(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (F(t, "name"), a = a.querySelectorAll(
                'input[name="' + sa(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[ua] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Vu(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && Ft(i);
            }
            break e;
          case "textarea":
            er(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && iu(e, !!a.multiple, t, !1);
        }
      }
    }
    function ur(e, t, a) {
      if (y) return e(t, a);
      y = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (y = !1, (r !== null || m !== null) && (rc(), r && (t = r, e = m, m = r = null, hn(t), e)))
          for (t = 0; t < e.length; t++) hn(e[t]);
      }
    }
    function cu(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[ua] || null;
      if (i === null) return null;
      a = i[t];
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
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function ou() {
      if (H) return H;
      var e, t = U, a = t.length, i, o = "value" in k ? k.value : k.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return H = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function Kc(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Vi() {
      return !0;
    }
    function Hh() {
      return !1;
    }
    function yl(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Vi : Hh, this.isPropagationStopped = Hh, this;
      }
      return Ye(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Vi);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Vi);
        },
        persist: function() {
        },
        isPersistent: Vi
      }), t;
    }
    function ir(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = wS[e]) ? !!t[e] : !1;
    }
    function cr() {
      return ir;
    }
    function jl(e, t) {
      switch (e) {
        case "keyup":
          return ZS.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Pv;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Qu(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function or(e, t) {
      switch (e) {
        case "compositionend":
          return Qu(t);
        case "keypress":
          return t.which !== tb ? null : (ab = !0, lb);
        case "textInput":
          return e = t.data, e === lb && ab ? null : e;
        default:
          return null;
      }
    }
    function gf(e, t) {
      if (Ld)
        return e === "compositionend" || !Q0 && jl(e, t) ? (e = ou(), H = U = k = null, Ld = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return eb && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function Up(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!JS[e.type] : t === "textarea";
    }
    function wh(e) {
      if (!S) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function fr(e, t, a, i) {
      r ? m ? m.push(i) : m = [i] : r = i, t = ns(t, "onChange"), 0 < t.length && (a = new Se(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function vf(e) {
      Nn(e, 0);
    }
    function Xi(e) {
      var t = qu(e);
      if (Ft(t)) return e;
    }
    function Nh(e, t) {
      if (e === "change") return t;
    }
    function Cp() {
      Ny && (Ny.detachEvent("onpropertychange", Hp), By = Ny = null);
    }
    function Hp(e) {
      if (e.propertyName === "value" && Xi(By)) {
        var t = [];
        fr(
          t,
          By,
          e,
          Gi(e)
        ), ur(vf, t);
      }
    }
    function R0(e, t, a) {
      e === "focusin" ? (Cp(), Ny = t, By = a, Ny.attachEvent("onpropertychange", Hp)) : e === "focusout" && Cp();
    }
    function Bh(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Xi(By);
    }
    function M0(e, t) {
      if (e === "click") return Xi(t);
    }
    function D0(e, t) {
      if (e === "input" || e === "change")
        return Xi(t);
    }
    function O0(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function bf(e, t) {
      if (Sa(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!Mu.call(t, o) || !Sa(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function wp(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function _h(e, t) {
      var a = wp(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = wp(a);
      }
    }
    function Np(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Np(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function Bp(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = rf(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = rf(e.document);
      }
      return t;
    }
    function qh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function _p(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      k0 || Qd == null || Qd !== rf(i) || (i = Qd, "selectionStart" in i && qh(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), _y && bf(_y, i) || (_y = i, i = ns(Z0, "onSelect"), 0 < i.length && (t = new Se(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = Qd)));
    }
    function fu(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function Li(e) {
      if (J0[e]) return J0[e];
      if (!Zd[e]) return e;
      var t = Zd[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in ub)
          return J0[e] = t[a];
      return e;
    }
    function ka(e, t) {
      sb.set(e, t), ju(t, [e]);
    }
    function ra(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = $0.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: Fs(t)
        }, $0.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: Fs(t)
      };
    }
    function Sf() {
      for (var e = kd, t = W0 = kd = 0; t < e; ) {
        var a = Qn[t];
        Qn[t++] = null;
        var i = Qn[t];
        Qn[t++] = null;
        var o = Qn[t];
        Qn[t++] = null;
        var f = Qn[t];
        if (Qn[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && qp(a, o, f);
      }
    }
    function sr(e, t, a, i) {
      Qn[kd++] = e, Qn[kd++] = t, Qn[kd++] = a, Qn[kd++] = i, W0 |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function jh(e, t, a, i) {
      return sr(e, t, a, i), rr(e);
    }
    function Jl(e, t) {
      return sr(e, null, null, t), rr(e);
    }
    function qp(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & Cg || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - Cl(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function rr(e) {
      if (np > p2)
        throw Gs = np = 0, up = Rv = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Gs > g2 && (Gs = 0, up = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && nn(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && nn(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Qi(e) {
      if (Zn === null) return e;
      var t = Zn(e);
      return t === void 0 ? e : t.current;
    }
    function Yh(e) {
      if (Zn === null) return e;
      var t = Zn(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Qi(e.render), e.render !== t) ? (t = { $$typeof: zu, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function jp(e, t) {
      if (Zn === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === va) && (i = !0);
          break;
        case 11:
          (o === zu || o === va) && (i = !0);
          break;
        case 14:
        case 15:
          (o === ys || o === va) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = Zn(a), e !== void 0 && e === Zn(t)));
    }
    function Yp(e) {
      Zn !== null && typeof WeakSet == "function" && (Jd === null && (Jd = /* @__PURE__ */ new WeakSet()), Jd.add(e));
    }
    function Tf(e, t, a) {
      var i = e.alternate, o = e.child, f = e.sibling, d = e.tag, h = e.type, p = null;
      switch (d) {
        case 0:
        case 15:
        case 1:
          p = h;
          break;
        case 11:
          p = h.render;
      }
      if (Zn === null)
        throw Error("Expected resolveFamily to be set during hot reload.");
      var v = !1;
      h = !1, p !== null && (p = Zn(p), p !== void 0 && (a.has(p) ? h = !0 : t.has(p) && (d === 1 ? h = !0 : v = !0))), Jd !== null && (Jd.has(e) || i !== null && Jd.has(i)) && (h = !0), h && (e._debugNeedsRemount = !0), (h || v) && (i = Jl(e, 2), i !== null && Gt(i, e, 2)), o === null || h || Tf(
        o,
        t,
        a
      ), f !== null && Tf(
        f,
        t,
        a
      );
    }
    function Ef(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, db || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Gh(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function mn(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = ve(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = Qi(e.type);
          break;
        case 1:
          a.type = Qi(e.type);
          break;
        case 11:
          a.type = Yh(e.type);
      }
      return a;
    }
    function Vh(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function dr(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        Gh(e) && (d = 1), h = Qi(h);
      else if (typeof e == "string")
        d = x(), d = Do(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case my:
            return t = ve(31, a, t, o), t.elementType = my, t.lanes = f, t;
          case Ce:
            return Zu(
              a.children,
              o,
              f,
              t
            );
          case Uo:
            d = 8, o |= ca, o |= Hu;
            break;
          case Co:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = ve(12, e, t, i | Ll), t.elementType = Co, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case Ho:
            return t = ve(13, a, t, o), t.elementType = Ho, t.lanes = f, t;
          case gi:
            return t = ve(19, a, t, o), t.elementType = gi, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case hy:
                case ja:
                  d = 10;
                  break e;
                case Md:
                  d = 9;
                  break e;
                case zu:
                  d = 11, h = Yh(h);
                  break e;
                case ys:
                  d = 14;
                  break e;
                case va:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : Me(e) ? a = "array" : e !== void 0 && e.$$typeof === pi ? (a = "<" + (Ne(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? se(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = ve(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function Af(e, t, a) {
      return t = dr(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function Zu(e, t, a, i) {
      return e = ve(7, e, i, t), e.lanes = a, e;
    }
    function ku(e, t, a) {
      return e = ve(6, e, null, t), e.lanes = a, e;
    }
    function Xh(e, t, a) {
      return t = ve(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function Zi(e, t) {
      Ja(), Kd[$d++] = wg, Kd[$d++] = Hg, Hg = e, wg = t;
    }
    function Gp(e, t, a) {
      Ja(), kn[Jn++] = Mc, kn[Jn++] = Dc, kn[Jn++] = Ds, Ds = e;
      var i = Mc;
      e = Dc;
      var o = 32 - Cl(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - Cl(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, Mc = 1 << 32 - Cl(t) + o | a << o | i, Dc = f + e;
      } else
        Mc = 1 << f | a << o | i, Dc = e;
    }
    function hr(e) {
      Ja(), e.return !== null && (Zi(e, 1), Gp(e, 1, 0));
    }
    function mr(e) {
      for (; e === Hg; )
        Hg = Kd[--$d], Kd[$d] = null, wg = Kd[--$d], Kd[$d] = null;
      for (; e === Ds; )
        Ds = kn[--Jn], kn[Jn] = null, Dc = kn[--Jn], kn[Jn] = null, Mc = kn[--Jn], kn[Jn] = null;
    }
    function Ja() {
      ot || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function Ka(e, t) {
      if (e.return === null) {
        if (Kn === null)
          Kn = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (Kn.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          Kn.distanceFromLeaf > t && (Kn.distanceFromLeaf = t);
        }
        return Kn;
      }
      var a = Ka(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function Lh(e, t) {
      Oc || (e = Ka(e, 0), e.serverProps = null, t !== null && (t = gd(t), e.serverTail.push(t)));
    }
    function yn(e) {
      var t = "", a = Kn;
      throw a !== null && (Kn = null, t = mf(a)), $c(
        ra(
          Error(
            `Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + t
          ),
          e
        )
      ), F0;
    }
    function Qh(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Hl] = e, t[ua] = i, Bn(a, i), a) {
        case "dialog":
          ke("cancel", t), ke("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          ke("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < ip.length; a++)
            ke(ip[a], t);
          break;
        case "source":
          ke("error", t);
          break;
        case "img":
        case "image":
        case "link":
          ke("error", t), ke("load", t);
          break;
        case "details":
          ke("toggle", t);
          break;
        case "input":
          Yu("input", i), ke("invalid", t), Gu(t, i), zp(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ), uu(t);
          break;
        case "option":
          zh(t, i);
          break;
        case "select":
          Yu("select", i), ke("invalid", t), df(t, i);
          break;
        case "textarea":
          Yu("textarea", i), ke("invalid", t), dn(t, i), Rh(
            t,
            i.value,
            i.defaultValue,
            i.children
          ), uu(t);
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || km(t.textContent, a) ? (i.popover != null && (ke("beforetoggle", t), ke("toggle", t)), i.onScroll != null && ke("scroll", t), i.onScrollEnd != null && ke("scrollend", t), i.onClick != null && (t.onclick = Tu), t = !0) : t = !1, t || yn(e);
    }
    function Zh(e) {
      for (Ta = e.return; Ta; )
        switch (Ta.tag) {
          case 5:
          case 13:
            zi = !1;
            return;
          case 27:
          case 3:
            zi = !0;
            return;
          default:
            Ta = Ta.return;
        }
    }
    function ki(e) {
      if (e !== Ta) return !1;
      if (!ot)
        return Zh(e), ot = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || _n(e.type, e.memoizedProps)), a = !a), a && Kt) {
        for (a = Kt; a; ) {
          var i = Ka(e, 0), o = gd(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? ey(a) : Sl(a.nextSibling);
        }
        yn(e);
      }
      if (Zh(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Kt = ey(e);
      } else
        t === 27 ? (t = Kt, qn(e.type) ? (e = jv, jv = null, Kt = e) : Kt = t) : Kt = Ta ? Sl(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Ji() {
      Kt = Ta = null, Oc = ot = !1;
    }
    function kh() {
      var e = Os;
      return e !== null && (xa === null ? xa = e : xa.push.apply(
        xa,
        e
      ), Os = null), e;
    }
    function $c(e) {
      Os === null ? Os = [e] : Os.push(e);
    }
    function Jh() {
      var e = Kn;
      if (e !== null) {
        Kn = null;
        for (var t = mf(e); 0 < e.children.length; )
          e = e.children[0];
        ce(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function yr() {
      Wd = Ng = null, Fd = !1;
    }
    function Ju(e, t, a) {
      pe(I0, t._currentValue, e), t._currentValue = a, pe(P0, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== pb && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = pb;
    }
    function su(e, t) {
      e._currentValue = I0.current;
      var a = P0.current;
      Fe(P0, t), e._currentRenderer = a, Fe(I0, t);
    }
    function Kh(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function $h(e, t, a, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var p = 0; p < t.length; p++)
              if (h.context === t[p]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), Kh(
                  f.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), Kh(
            d,
            a,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function pl(e, t, a, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            Sa(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === No.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(sp) : e = [sp]);
        }
        o = o.return;
      }
      e !== null && $h(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function Ku(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Sa(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function $u(e) {
      Ng = e, Wd = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function Rt(e) {
      return Fd && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), Wh(Ng, e);
    }
    function xf(e, t) {
      return Ng === null && $u(e), Wh(e, t);
    }
    function Wh(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, Wd === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        Wd = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else Wd = Wd.next = t;
      return a;
    }
    function zf() {
      return {
        controller: new t2(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Ki(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function pn(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && l2(a2, function() {
        e.controller.abort();
      });
    }
    function $a() {
      var e = Us;
      return Us = 0, e;
    }
    function Wu(e) {
      var t = Us;
      return Us = e, t;
    }
    function $i(e) {
      var t = Us;
      return Us += e, t;
    }
    function pr(e) {
      Va = Id(), 0 > e.actualStartTime && (e.actualStartTime = Va);
    }
    function ru(e) {
      if (0 <= Va) {
        var t = Id() - Va;
        e.actualDuration += t, e.selfBaseDuration = t, Va = -1;
      }
    }
    function Wi(e) {
      if (0 <= Va) {
        var t = Id() - Va;
        e.actualDuration += t, Va = -1;
      }
    }
    function Ra() {
      if (0 <= Va) {
        var e = Id() - Va;
        Va = -1, Us += e;
      }
    }
    function Wa() {
      Va = Id();
    }
    function gn(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Vp(e, t) {
      if (qy === null) {
        var a = qy = [];
        ev = 0, Cs = Vm(), Pd = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return ev++, t.then(Fh, Fh), t;
    }
    function Fh() {
      if (--ev === 0 && qy !== null) {
        Pd !== null && (Pd.status = "fulfilled");
        var e = qy;
        qy = null, Cs = 0, Pd = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Xp(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function Ih() {
      var e = Hs.current;
      return e !== null ? e : Mt.pooledCache;
    }
    function gr(e, t) {
      t === null ? pe(Hs, Hs.current, e) : pe(Hs, t.pool, e);
    }
    function Lp() {
      var e = Ih();
      return e === null ? null : { parent: Al._currentValue, pool: e };
    }
    function Ph() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function em(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Wc() {
    }
    function Ma(e, t, a) {
      q.actQueue !== null && (q.didUsePromise = !0);
      var i = e.thenables;
      switch (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(Wc, Wc), t = a), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, da(e), e;
        default:
          if (typeof t.status == "string")
            t.then(Wc, Wc);
          else {
            if (e = Mt, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "fulfilled", f.value = o;
                }
              },
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "rejected", f.reason = o;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, da(e), e;
          }
          throw Zy = t, Gg = !0, Qy;
      }
    }
    function tm() {
      if (Zy === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Zy;
      return Zy = null, Gg = !1, e;
    }
    function da(e) {
      if (e === Qy || e === Yg)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function Kl(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function Fu(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function vn(e) {
      return {
        lane: e,
        tag: Tb,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Fa(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, av === i && !xb) {
        var o = ne(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), xb = !0;
      }
      return (yt & Aa) !== on ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = rr(e), qp(e, null, a), t) : (sr(e, i, t, a), rr(e));
    }
    function Iu(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, Gc(e, a);
      }
    }
    function Fc(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function bn() {
      if (nv) {
        var e = Pd;
        if (e !== null) throw e;
      }
    }
    function Ic(e, t, a, i) {
      nv = !1;
      var o = e.updateQueue;
      Qo = !1, av = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var p = h, v = p.next;
        p.next = null, d === null ? f = v : d.next = v, d = p;
        var C = e.alternate;
        C !== null && (C = C.updateQueue, h = C.lastBaseUpdate, h !== d && (h === null ? C.firstBaseUpdate = v : h.next = v, C.lastBaseUpdate = p));
      }
      if (f !== null) {
        var Y = o.baseState;
        d = 0, C = v = p = null, h = f;
        do {
          var O = h.lane & -536870913, G = O !== h.lane;
          if (G ? (Pe & O) === O : (i & O) === O) {
            O !== 0 && O === Cs && (nv = !0), C !== null && (C = C.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              O = e;
              var oe = h, ze = t, Dt = a;
              switch (oe.tag) {
                case Eb:
                  if (oe = oe.payload, typeof oe == "function") {
                    Fd = !0;
                    var tt = oe.call(
                      Dt,
                      Y,
                      ze
                    );
                    if (O.mode & ca) {
                      Ze(!0);
                      try {
                        oe.call(Dt, Y, ze);
                      } finally {
                        Ze(!1);
                      }
                    }
                    Fd = !1, Y = tt;
                    break e;
                  }
                  Y = oe;
                  break e;
                case lv:
                  O.flags = O.flags & -65537 | 128;
                case Tb:
                  if (tt = oe.payload, typeof tt == "function") {
                    if (Fd = !0, oe = tt.call(
                      Dt,
                      Y,
                      ze
                    ), O.mode & ca) {
                      Ze(!0);
                      try {
                        tt.call(Dt, Y, ze);
                      } finally {
                        Ze(!1);
                      }
                    }
                    Fd = !1;
                  } else oe = tt;
                  if (oe == null) break e;
                  Y = Ye({}, Y, oe);
                  break e;
                case Ab:
                  Qo = !0;
              }
            }
            O = h.callback, O !== null && (e.flags |= 64, G && (e.flags |= 8192), G = o.callbacks, G === null ? o.callbacks = [O] : G.push(O));
          } else
            G = {
              lane: O,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, C === null ? (v = C = G, p = Y) : C = C.next = G, d |= O;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            G = h, h = G.next, G.next = null, o.lastBaseUpdate = G, o.shared.pending = null;
          }
        } while (!0);
        C === null && (p = Y), o.baseState = p, o.firstBaseUpdate = v, o.lastBaseUpdate = C, f === null && (o.shared.lanes = 0), Ko |= d, e.lanes = d, e.memoizedState = Y;
      }
      av = null;
    }
    function Rf(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function Pc(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          Rf(a[e], t);
    }
    function Qp(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Rf(a[e], t);
    }
    function $l(e, t) {
      var a = Di;
      pe(Vg, a, e), pe(eh, t, e), Di = a | t.baseLanes;
    }
    function Mf(e) {
      pe(Vg, Di, e), pe(
        eh,
        eh.current,
        e
      );
    }
    function Ia(e) {
      Di = Vg.current, Fe(eh, e), Fe(Vg, e);
    }
    function Ve() {
      var e = j;
      Fn === null ? Fn = [e] : Fn.push(e);
    }
    function $() {
      var e = j;
      if (Fn !== null && (Cc++, Fn[Cc] !== e)) {
        var t = ne(De);
        if (!zb.has(t) && (zb.add(t), Fn !== null)) {
          for (var a = "", i = 0; i <= Cc; i++) {
            var o = Fn[i], f = i === Cc ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function Da(e) {
      e == null || Me(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        j,
        typeof e
      );
    }
    function eo() {
      var e = ne(De);
      Mb.has(e) || (Mb.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function Nt() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function Pu(e, t) {
      if (Jy) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          j
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        j,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Sa(e[a], t[a])) return !1;
      return !0;
    }
    function ei(e, t, a, i, o, f) {
      Zo = f, De = t, Fn = e !== null ? e._debugHookTypes : null, Cc = -1, Jy = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = ne(De), uv.has(f) || (uv.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, q.H = e !== null && e.memoizedState !== null ? cv : Fn !== null ? Db : iv, Ns = f = (t.mode & ca) !== Ct;
      var d = ov(a, i, o);
      if (Ns = !1, lh && (d = to(
        t,
        a,
        i,
        o
      )), f) {
        Ze(!0);
        try {
          d = to(
            t,
            a,
            i,
            o
          );
        } finally {
          Ze(!1);
        }
      }
      return Df(e, t), d;
    }
    function Df(e, t) {
      t._debugHookTypes = Fn, t.dependencies === null ? Uc !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: Uc
      }) : t.dependencies._debugThenableState = Uc, q.H = Qg;
      var a = At !== null && At.next !== null;
      if (Zo = 0, Fn = j = rl = At = De = null, Cc = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), Xg = !1, ky = 0, Uc = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || wl || (e = e.dependencies, e !== null && Ku(e) && (wl = !0)), Gg ? (Gg = !1, e = !0) : e = !1, e && (t = ne(t) || "Unknown", Rb.has(t) || uv.has(t) || (Rb.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function to(e, t, a, i) {
      De = e;
      var o = 0;
      do {
        if (lh && (Uc = null), ky = 0, lh = !1, o >= u2)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, Jy = !1, rl = At = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        Cc = -1, q.H = Ob, f = ov(t, a, i);
      } while (lh);
      return f;
    }
    function Oa() {
      var e = q.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? Fi(t) : t, e = e.useState()[0], (At !== null ? At.memoizedState : null) !== e && (De.flags |= 1024), t;
    }
    function Wl() {
      var e = Lg !== 0;
      return Lg = 0, e;
    }
    function du(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Hu) !== Ct ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function Pa(e) {
      if (Xg) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Xg = !1;
      }
      Zo = 0, Fn = rl = At = De = null, Cc = -1, j = null, lh = !1, ky = Lg = 0, Uc = null;
    }
    function jt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return rl === null ? De.memoizedState = rl = e : rl = rl.next = e, rl;
    }
    function et() {
      if (At === null) {
        var e = De.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = At.next;
      var t = rl === null ? De.memoizedState : rl.next;
      if (t !== null)
        rl = t, At = e;
      else {
        if (e === null)
          throw De.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        At = e, e = {
          memoizedState: At.memoizedState,
          baseState: At.baseState,
          baseQueue: At.baseQueue,
          queue: At.queue,
          next: null
        }, rl === null ? De.memoizedState = rl = e : rl = rl.next = e;
      }
      return rl;
    }
    function vr() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Fi(e) {
      var t = ky;
      return ky += 1, Uc === null && (Uc = Ph()), e = Ma(Uc, e, t), t = De, (rl === null ? t.memoizedState : rl.next) === null && (t = t.alternate, q.H = t !== null && t.memoizedState !== null ? cv : iv), e;
    }
    function Sn(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Fi(e);
        if (e.$$typeof === ja) return Rt(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function kt(e) {
      var t = null, a = De.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = De.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = vr(), De.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || Jy)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = bg;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function ut(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function at(e, t, a) {
      var i = jt();
      if (a !== void 0) {
        var o = a(t);
        if (Ns) {
          Ze(!0);
          try {
            a(t);
          } finally {
            Ze(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = sm.bind(
        null,
        De,
        e
      ), [i.memoizedState, e];
    }
    function Ua(e) {
      var t = et();
      return Ca(t, At, e);
    }
    function Ca(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var h = d = null, p = null, v = t, C = !1;
        do {
          var Y = v.lane & -536870913;
          if (Y !== v.lane ? (Pe & Y) === Y : (Zo & Y) === Y) {
            var O = v.revertLane;
            if (O === 0)
              p !== null && (p = p.next = {
                lane: 0,
                revertLane: 0,
                action: v.action,
                hasEagerState: v.hasEagerState,
                eagerState: v.eagerState,
                next: null
              }), Y === Cs && (C = !0);
            else if ((Zo & O) === O) {
              v = v.next, O === Cs && (C = !0);
              continue;
            } else
              Y = {
                lane: 0,
                revertLane: v.revertLane,
                action: v.action,
                hasEagerState: v.hasEagerState,
                eagerState: v.eagerState,
                next: null
              }, p === null ? (h = p = Y, d = f) : p = p.next = Y, De.lanes |= O, Ko |= O;
            Y = v.action, Ns && a(f, Y), f = v.hasEagerState ? v.eagerState : a(f, Y);
          } else
            O = {
              lane: Y,
              revertLane: v.revertLane,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }, p === null ? (h = p = O, d = f) : p = p.next = O, De.lanes |= Y, Ko |= Y;
          v = v.next;
        } while (v !== null && v !== t);
        if (p === null ? d = f : p.next = h, !Sa(f, e.memoizedState) && (wl = !0, C && (a = Pd, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = p, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function Ii(e) {
      var t = et(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, o = a.pending, f = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        Sa(f, t.memoizedState) || (wl = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function hu(e, t, a) {
      var i = De, o = jt();
      if (ot) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        th || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), th = !0);
      } else {
        if (f = t(), th || (a = t(), Sa(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), th = !0)), Mt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (Pe & 124) !== 0 || lm(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, Tr(
        ao.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, En(
        Wn | xl,
        li(),
        lo.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function Of(e, t, a) {
      var i = De, o = et(), f = ot;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !th) {
        var d = t();
        Sa(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), th = !0);
      }
      (d = !Sa(
        (At || o).memoizedState,
        a
      )) && (o.memoizedState = a, wl = !0), o = o.queue;
      var h = ao.bind(null, i, o, e);
      if (Pt(2048, xl, h, [e]), o.getSnapshot !== t || d || rl !== null && rl.memoizedState.tag & Wn) {
        if (i.flags |= 2048, En(
          Wn | xl,
          li(),
          lo.bind(
            null,
            i,
            o,
            a,
            t
          ),
          null
        ), Mt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (Zo & 124) !== 0 || lm(i, t, a);
      }
      return a;
    }
    function lm(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = De.updateQueue, t === null ? (t = vr(), De.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function lo(e, t, a, i) {
      t.value = a, t.getSnapshot = i, am(t) && no(e);
    }
    function ao(e, t, a) {
      return a(function() {
        am(t) && no(e);
      });
    }
    function am(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !Sa(e, a);
      } catch {
        return !0;
      }
    }
    function no(e) {
      var t = Jl(e, 2);
      t !== null && Gt(t, e, 2);
    }
    function Uf(e) {
      var t = jt();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), Ns) {
          Ze(!0);
          try {
            a();
          } finally {
            Ze(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ut,
        lastRenderedState: e
      }, t;
    }
    function mu(e) {
      e = Uf(e);
      var t = e.queue, a = oo.bind(null, De, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function en(e) {
      var t = jt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Ur.bind(
        null,
        De,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function yu(e, t) {
      var a = et();
      return Tn(a, At, e, t);
    }
    function Tn(e, t, a, i) {
      return e.baseState = a, Ca(
        e,
        At,
        typeof i == "function" ? i : ut
      );
    }
    function br(e, t) {
      var a = et();
      return At !== null ? Tn(a, At, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function nm(e, t, a, i, o) {
      if (qf(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        q.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, uo(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function uo(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = q.T, d = {};
        q.T = d, q.T._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var h = a(o, i), p = q.S;
          p !== null && p(d, h), Cf(e, t, h);
        } catch (v) {
          il(e, t, v);
        } finally {
          q.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), Cf(e, t, d);
        } catch (v) {
          il(e, t, v);
        }
    }
    function Cf(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (a.then(
        function(i) {
          ti(e, t, i);
        },
        function(i) {
          return il(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : ti(e, t, a);
    }
    function ti(e, t, a) {
      t.status = "fulfilled", t.value = a, Hf(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, uo(e, a)));
    }
    function il(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, Hf(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function Hf(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function um(e, t) {
      return t;
    }
    function io(e, t) {
      if (ot) {
        var a = Mt.formState;
        if (a !== null) {
          e: {
            var i = De;
            if (ot) {
              if (Kt) {
                t: {
                  for (var o = Kt, f = zi; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = Sl(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === Nv || f === M1 ? o : null;
                }
                if (o) {
                  Kt = Sl(
                    o.nextSibling
                  ), i = o.data === Nv;
                  break e;
                }
              }
              yn(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = jt(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: um,
        lastRenderedState: t
      }, a.queue = i, a = oo.bind(
        null,
        De,
        i
      ), i.dispatch = a, i = Uf(!1), f = Ur.bind(
        null,
        De,
        !1,
        i.queue
      ), i = jt(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = nm.bind(
        null,
        De,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function Sr(e) {
      var t = et();
      return Zp(t, At, e);
    }
    function Zp(e, t, a) {
      if (t = Ca(
        e,
        t,
        um
      )[0], e = Ua(ut)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = Fi(t);
        } catch (d) {
          throw d === Qy ? Yg : d;
        }
      else i = t;
      t = et();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (De.flags |= 2048, En(
        Wn | xl,
        li(),
        It.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function It(e, t) {
      e.action = t;
    }
    function co(e) {
      var t = et(), a = At;
      if (a !== null)
        return Zp(t, a, e);
      et(), t = t.memoizedState, a = et();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function En(e, t, a, i) {
      return e = {
        tag: e,
        create: a,
        deps: i,
        inst: t,
        next: null
      }, t = De.updateQueue, t === null && (t = vr(), De.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function li() {
      return { destroy: void 0, resource: void 0 };
    }
    function wf(e) {
      var t = jt();
      return e = { current: e }, t.memoizedState = e;
    }
    function Ha(e, t, a, i) {
      var o = jt();
      i = i === void 0 ? null : i, De.flags |= e, o.memoizedState = En(
        Wn | t,
        li(),
        a,
        i
      );
    }
    function Pt(e, t, a, i) {
      var o = et();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      At !== null && i !== null && Pu(i, At.memoizedState.deps) ? o.memoizedState = En(t, f, a, i) : (De.flags |= e, o.memoizedState = En(
        Wn | t,
        f,
        a,
        i
      ));
    }
    function Tr(e, t) {
      (De.mode & Hu) !== Ct && (De.mode & rb) === Ct ? Ha(276826112, xl, e, t) : Ha(8390656, xl, e, t);
    }
    function Er(e, t) {
      var a = 4194308;
      return (De.mode & Hu) !== Ct && (a |= 134217728), Ha(a, Ql, e, t);
    }
    function kp(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function Ar(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (De.mode & Hu) !== Ct && (i |= 134217728), Ha(
        i,
        Ql,
        kp.bind(null, t, e),
        a
      );
    }
    function An(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, Pt(
        4,
        Ql,
        kp.bind(null, t, e),
        a
      );
    }
    function Nf(e, t) {
      return jt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function Pi(e, t) {
      var a = et();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && Pu(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function xr(e, t) {
      var a = jt();
      t = t === void 0 ? null : t;
      var i = e();
      if (Ns) {
        Ze(!0);
        try {
          e();
        } finally {
          Ze(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function ai(e, t) {
      var a = et();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && Pu(t, i[1]))
        return i[0];
      if (i = e(), Ns) {
        Ze(!0);
        try {
          e();
        } finally {
          Ze(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function zr(e, t) {
      var a = jt();
      return Mr(a, e, t);
    }
    function Bf(e, t) {
      var a = et();
      return _f(
        a,
        At.memoizedState,
        e,
        t
      );
    }
    function Rr(e, t) {
      var a = et();
      return At === null ? Mr(a, e, t) : _f(
        a,
        At.memoizedState,
        e,
        t
      );
    }
    function Mr(e, t, a) {
      return a === void 0 || (Zo & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = lg(), De.lanes |= e, Ko |= e, a);
    }
    function _f(e, t, a, i) {
      return Sa(a, t) ? a : eh.current !== null ? (e = Mr(e, a, i), Sa(e, t) || (wl = !0), e) : (Zo & 42) === 0 ? (wl = !0, e.memoizedState = a) : (e = lg(), De.lanes |= e, Ko |= e, t);
    }
    function im(e, t, a, i, o) {
      var f = xe.p;
      xe.p = f !== 0 && f < cn ? f : cn;
      var d = q.T, h = {};
      q.T = h, Ur(e, !1, t, a), h._updatedFibers = /* @__PURE__ */ new Set();
      try {
        var p = o(), v = q.S;
        if (v !== null && v(h, p), p !== null && typeof p == "object" && typeof p.then == "function") {
          var C = Xp(
            p,
            i
          );
          pu(
            e,
            t,
            C,
            ea(e)
          );
        } else
          pu(
            e,
            t,
            i,
            ea(e)
          );
      } catch (Y) {
        pu(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: Y },
          ea(e)
        );
      } finally {
        xe.p = f, q.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function ec(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = cm(e).queue;
      im(
        e,
        o,
        t,
        Zs,
        a === null ? he : function() {
          return om(e), a(i);
        }
      );
    }
    function cm(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: Zs,
        baseState: Zs,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ut,
          lastRenderedState: Zs
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ut,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function om(e) {
      q.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = cm(e).next.queue;
      pu(
        e,
        t,
        {},
        ea(e)
      );
    }
    function xn() {
      var e = Uf(!1);
      return e = im.bind(
        null,
        De,
        e.queue,
        !0,
        !1
      ), jt().memoizedState = e, [!1, e];
    }
    function Dr() {
      var e = Ua(ut)[0], t = et().memoizedState;
      return [
        typeof e == "boolean" ? e : Fi(e),
        t
      ];
    }
    function Or() {
      var e = Ii(ut)[0], t = et().memoizedState;
      return [
        typeof e == "boolean" ? e : Fi(e),
        t
      ];
    }
    function Fl() {
      return Rt(sp);
    }
    function zn() {
      var e = jt(), t = Mt.identifierPrefix;
      if (ot) {
        var a = Dc, i = Mc;
        a = (i & ~(1 << 32 - Cl(i) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = Lg++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = n2++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    }
    function tc() {
      return jt().memoizedState = fm.bind(
        null,
        De
      );
    }
    function fm(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = ea(a);
            e = vn(i);
            var o = Fa(a, e, i);
            o !== null && (Gt(o, a, i), Iu(o, a, i)), a = zf(), t != null && o !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), e.payload = { cache: a };
            return;
        }
        a = a.return;
      }
    }
    function sm(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = ea(e);
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      qf(e) ? lc(t, o) : (o = jh(e, t, o, i), o !== null && (Gt(o, e, i), jf(o, t, i))), Oi(e, i);
    }
    function oo(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = ea(e), pu(e, t, a, i), Oi(e, i);
    }
    function pu(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (qf(e)) lc(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = q.H;
          q.H = Nu;
          try {
            var h = t.lastRenderedState, p = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = p, Sa(p, h))
              return sr(e, t, o, 0), Mt === null && Sf(), !1;
          } catch {
          } finally {
            q.H = d;
          }
        }
        if (a = jh(e, t, o, i), a !== null)
          return Gt(a, e, i), jf(a, t, i), !0;
      }
      return !1;
    }
    function Ur(e, t, a, i) {
      if (q.T === null && Cs === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: Vm(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, qf(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = jh(
          e,
          a,
          i,
          2
        ), t !== null && Gt(t, e, 2);
      Oi(e, 2);
    }
    function qf(e) {
      var t = e.alternate;
      return e === De || t !== null && t === De;
    }
    function lc(e, t) {
      lh = Xg = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function jf(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, Gc(e, a);
      }
    }
    function cl(e) {
      var t = Le;
      return e != null && (Le = t === null ? e : t.concat(e)), t;
    }
    function fo(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = Af(e, a.mode, 0), t._debugInfo = Le, t.return = a), ce(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function so(e) {
      var t = Ky;
      return Ky += 1, ah === null && (ah = Ph()), Ma(ah, e, t);
    }
    function wa(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function Ue(e, t) {
      throw t.$$typeof === ms ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function ft(e, t) {
      var a = ne(e) || "Component";
      Qb[a] || (Qb[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function Bt(e, t) {
      var a = ne(e) || "Component";
      Zb[a] || (Zb[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function Yf(e) {
      function t(T, E) {
        if (e) {
          var A = T.deletions;
          A === null ? (T.deletions = [E], T.flags |= 16) : A.push(E);
        }
      }
      function a(T, E) {
        if (!e) return null;
        for (; E !== null; )
          t(T, E), E = E.sibling;
        return null;
      }
      function i(T) {
        for (var E = /* @__PURE__ */ new Map(); T !== null; )
          T.key !== null ? E.set(T.key, T) : E.set(T.index, T), T = T.sibling;
        return E;
      }
      function o(T, E) {
        return T = mn(T, E), T.index = 0, T.sibling = null, T;
      }
      function f(T, E, A) {
        return T.index = A, e ? (A = T.alternate, A !== null ? (A = A.index, A < E ? (T.flags |= 67108866, E) : A) : (T.flags |= 67108866, E)) : (T.flags |= 1048576, E);
      }
      function d(T) {
        return e && T.alternate === null && (T.flags |= 67108866), T;
      }
      function h(T, E, A, V) {
        return E === null || E.tag !== 6 ? (E = ku(
          A,
          T.mode,
          V
        ), E.return = T, E._debugOwner = T, E._debugTask = T._debugTask, E._debugInfo = Le, E) : (E = o(E, A), E.return = T, E._debugInfo = Le, E);
      }
      function p(T, E, A, V) {
        var I = A.type;
        return I === Ce ? (E = C(
          T,
          E,
          A.props.children,
          V,
          A.key
        ), fo(A, E, T), E) : E !== null && (E.elementType === I || jp(E, A) || typeof I == "object" && I !== null && I.$$typeof === va && ko(I) === E.type) ? (E = o(E, A.props), wa(E, A), E.return = T, E._debugOwner = A._owner, E._debugInfo = Le, E) : (E = Af(A, T.mode, V), wa(E, A), E.return = T, E._debugInfo = Le, E);
      }
      function v(T, E, A, V) {
        return E === null || E.tag !== 4 || E.stateNode.containerInfo !== A.containerInfo || E.stateNode.implementation !== A.implementation ? (E = Xh(A, T.mode, V), E.return = T, E._debugInfo = Le, E) : (E = o(E, A.children || []), E.return = T, E._debugInfo = Le, E);
      }
      function C(T, E, A, V, I) {
        return E === null || E.tag !== 7 ? (E = Zu(
          A,
          T.mode,
          V,
          I
        ), E.return = T, E._debugOwner = T, E._debugTask = T._debugTask, E._debugInfo = Le, E) : (E = o(E, A), E.return = T, E._debugInfo = Le, E);
      }
      function Y(T, E, A) {
        if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
          return E = ku(
            "" + E,
            T.mode,
            A
          ), E.return = T, E._debugOwner = T, E._debugTask = T._debugTask, E._debugInfo = Le, E;
        if (typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case pi:
              return A = Af(
                E,
                T.mode,
                A
              ), wa(A, E), A.return = T, T = cl(E._debugInfo), A._debugInfo = Le, Le = T, A;
            case Tc:
              return E = Xh(
                E,
                T.mode,
                A
              ), E.return = T, E._debugInfo = Le, E;
            case va:
              var V = cl(E._debugInfo);
              return E = ko(E), T = Y(T, E, A), Le = V, T;
          }
          if (Me(E) || nt(E))
            return A = Zu(
              E,
              T.mode,
              A,
              null
            ), A.return = T, A._debugOwner = T, A._debugTask = T._debugTask, T = cl(E._debugInfo), A._debugInfo = Le, Le = T, A;
          if (typeof E.then == "function")
            return V = cl(E._debugInfo), T = Y(
              T,
              so(E),
              A
            ), Le = V, T;
          if (E.$$typeof === ja)
            return Y(
              T,
              xf(T, E),
              A
            );
          Ue(T, E);
        }
        return typeof E == "function" && ft(T, E), typeof E == "symbol" && Bt(T, E), null;
      }
      function O(T, E, A, V) {
        var I = E !== null ? E.key : null;
        if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
          return I !== null ? null : h(T, E, "" + A, V);
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case pi:
              return A.key === I ? (I = cl(A._debugInfo), T = p(
                T,
                E,
                A,
                V
              ), Le = I, T) : null;
            case Tc:
              return A.key === I ? v(T, E, A, V) : null;
            case va:
              return I = cl(A._debugInfo), A = ko(A), T = O(
                T,
                E,
                A,
                V
              ), Le = I, T;
          }
          if (Me(A) || nt(A))
            return I !== null ? null : (I = cl(A._debugInfo), T = C(
              T,
              E,
              A,
              V,
              null
            ), Le = I, T);
          if (typeof A.then == "function")
            return I = cl(A._debugInfo), T = O(
              T,
              E,
              so(A),
              V
            ), Le = I, T;
          if (A.$$typeof === ja)
            return O(
              T,
              E,
              xf(T, A),
              V
            );
          Ue(T, A);
        }
        return typeof A == "function" && ft(T, A), typeof A == "symbol" && Bt(T, A), null;
      }
      function G(T, E, A, V, I) {
        if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
          return T = T.get(A) || null, h(E, T, "" + V, I);
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case pi:
              return A = T.get(
                V.key === null ? A : V.key
              ) || null, T = cl(V._debugInfo), E = p(
                E,
                A,
                V,
                I
              ), Le = T, E;
            case Tc:
              return T = T.get(
                V.key === null ? A : V.key
              ) || null, v(E, T, V, I);
            case va:
              var He = cl(V._debugInfo);
              return V = ko(V), E = G(
                T,
                E,
                A,
                V,
                I
              ), Le = He, E;
          }
          if (Me(V) || nt(V))
            return A = T.get(A) || null, T = cl(V._debugInfo), E = C(
              E,
              A,
              V,
              I,
              null
            ), Le = T, E;
          if (typeof V.then == "function")
            return He = cl(V._debugInfo), E = G(
              T,
              E,
              A,
              so(V),
              I
            ), Le = He, E;
          if (V.$$typeof === ja)
            return G(
              T,
              E,
              A,
              xf(E, V),
              I
            );
          Ue(E, V);
        }
        return typeof V == "function" && ft(E, V), typeof V == "symbol" && Bt(E, V), null;
      }
      function oe(T, E, A, V) {
        if (typeof A != "object" || A === null) return V;
        switch (A.$$typeof) {
          case pi:
          case Tc:
            ae(T, E, A);
            var I = A.key;
            if (typeof I != "string") break;
            if (V === null) {
              V = /* @__PURE__ */ new Set(), V.add(I);
              break;
            }
            if (!V.has(I)) {
              V.add(I);
              break;
            }
            ce(E, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                I
              );
            });
            break;
          case va:
            A = ko(A), oe(T, E, A, V);
        }
        return V;
      }
      function ze(T, E, A, V) {
        for (var I = null, He = null, fe = null, we = E, Be = E = 0, Ht = null; we !== null && Be < A.length; Be++) {
          we.index > Be ? (Ht = we, we = null) : Ht = we.sibling;
          var al = O(
            T,
            we,
            A[Be],
            V
          );
          if (al === null) {
            we === null && (we = Ht);
            break;
          }
          I = oe(
            T,
            al,
            A[Be],
            I
          ), e && we && al.alternate === null && t(T, we), E = f(al, E, Be), fe === null ? He = al : fe.sibling = al, fe = al, we = Ht;
        }
        if (Be === A.length)
          return a(T, we), ot && Zi(T, Be), He;
        if (we === null) {
          for (; Be < A.length; Be++)
            we = Y(T, A[Be], V), we !== null && (I = oe(
              T,
              we,
              A[Be],
              I
            ), E = f(
              we,
              E,
              Be
            ), fe === null ? He = we : fe.sibling = we, fe = we);
          return ot && Zi(T, Be), He;
        }
        for (we = i(we); Be < A.length; Be++)
          Ht = G(
            we,
            T,
            Be,
            A[Be],
            V
          ), Ht !== null && (I = oe(
            T,
            Ht,
            A[Be],
            I
          ), e && Ht.alternate !== null && we.delete(
            Ht.key === null ? Be : Ht.key
          ), E = f(
            Ht,
            E,
            Be
          ), fe === null ? He = Ht : fe.sibling = Ht, fe = Ht);
        return e && we.forEach(function(qc) {
          return t(T, qc);
        }), ot && Zi(T, Be), He;
      }
      function Dt(T, E, A, V) {
        if (A == null)
          throw Error("An iterable object provided no iterator.");
        for (var I = null, He = null, fe = E, we = E = 0, Be = null, Ht = null, al = A.next(); fe !== null && !al.done; we++, al = A.next()) {
          fe.index > we ? (Be = fe, fe = null) : Be = fe.sibling;
          var qc = O(T, fe, al.value, V);
          if (qc === null) {
            fe === null && (fe = Be);
            break;
          }
          Ht = oe(
            T,
            qc,
            al.value,
            Ht
          ), e && fe && qc.alternate === null && t(T, fe), E = f(qc, E, we), He === null ? I = qc : He.sibling = qc, He = qc, fe = Be;
        }
        if (al.done)
          return a(T, fe), ot && Zi(T, we), I;
        if (fe === null) {
          for (; !al.done; we++, al = A.next())
            fe = Y(T, al.value, V), fe !== null && (Ht = oe(
              T,
              fe,
              al.value,
              Ht
            ), E = f(
              fe,
              E,
              we
            ), He === null ? I = fe : He.sibling = fe, He = fe);
          return ot && Zi(T, we), I;
        }
        for (fe = i(fe); !al.done; we++, al = A.next())
          Be = G(
            fe,
            T,
            we,
            al.value,
            V
          ), Be !== null && (Ht = oe(
            T,
            Be,
            al.value,
            Ht
          ), e && Be.alternate !== null && fe.delete(
            Be.key === null ? we : Be.key
          ), E = f(
            Be,
            E,
            we
          ), He === null ? I = Be : He.sibling = Be, He = Be);
        return e && fe.forEach(function(C2) {
          return t(T, C2);
        }), ot && Zi(T, we), I;
      }
      function tt(T, E, A, V) {
        if (typeof A == "object" && A !== null && A.type === Ce && A.key === null && (fo(A, null, T), A = A.props.children), typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case pi:
              var I = cl(A._debugInfo);
              e: {
                for (var He = A.key; E !== null; ) {
                  if (E.key === He) {
                    if (He = A.type, He === Ce) {
                      if (E.tag === 7) {
                        a(
                          T,
                          E.sibling
                        ), V = o(
                          E,
                          A.props.children
                        ), V.return = T, V._debugOwner = A._owner, V._debugInfo = Le, fo(A, V, T), T = V;
                        break e;
                      }
                    } else if (E.elementType === He || jp(
                      E,
                      A
                    ) || typeof He == "object" && He !== null && He.$$typeof === va && ko(He) === E.type) {
                      a(
                        T,
                        E.sibling
                      ), V = o(E, A.props), wa(V, A), V.return = T, V._debugOwner = A._owner, V._debugInfo = Le, T = V;
                      break e;
                    }
                    a(T, E);
                    break;
                  } else t(T, E);
                  E = E.sibling;
                }
                A.type === Ce ? (V = Zu(
                  A.props.children,
                  T.mode,
                  V,
                  A.key
                ), V.return = T, V._debugOwner = T, V._debugTask = T._debugTask, V._debugInfo = Le, fo(A, V, T), T = V) : (V = Af(
                  A,
                  T.mode,
                  V
                ), wa(V, A), V.return = T, V._debugInfo = Le, T = V);
              }
              return T = d(T), Le = I, T;
            case Tc:
              e: {
                for (I = A, A = I.key; E !== null; ) {
                  if (E.key === A)
                    if (E.tag === 4 && E.stateNode.containerInfo === I.containerInfo && E.stateNode.implementation === I.implementation) {
                      a(
                        T,
                        E.sibling
                      ), V = o(
                        E,
                        I.children || []
                      ), V.return = T, T = V;
                      break e;
                    } else {
                      a(T, E);
                      break;
                    }
                  else t(T, E);
                  E = E.sibling;
                }
                V = Xh(
                  I,
                  T.mode,
                  V
                ), V.return = T, T = V;
              }
              return d(T);
            case va:
              return I = cl(A._debugInfo), A = ko(A), T = tt(
                T,
                E,
                A,
                V
              ), Le = I, T;
          }
          if (Me(A))
            return I = cl(A._debugInfo), T = ze(
              T,
              E,
              A,
              V
            ), Le = I, T;
          if (nt(A)) {
            if (I = cl(A._debugInfo), He = nt(A), typeof He != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var fe = He.call(A);
            return fe === A ? (T.tag !== 0 || Object.prototype.toString.call(T.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(fe) !== "[object Generator]") && (Xb || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), Xb = !0) : A.entries !== He || sv || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), sv = !0), T = Dt(
              T,
              E,
              fe,
              V
            ), Le = I, T;
          }
          if (typeof A.then == "function")
            return I = cl(A._debugInfo), T = tt(
              T,
              E,
              so(A),
              V
            ), Le = I, T;
          if (A.$$typeof === ja)
            return tt(
              T,
              E,
              xf(T, A),
              V
            );
          Ue(T, A);
        }
        return typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint" ? (I = "" + A, E !== null && E.tag === 6 ? (a(
          T,
          E.sibling
        ), V = o(E, I), V.return = T, T = V) : (a(T, E), V = ku(
          I,
          T.mode,
          V
        ), V.return = T, V._debugOwner = T, V._debugTask = T._debugTask, V._debugInfo = Le, T = V), d(T)) : (typeof A == "function" && ft(T, A), typeof A == "symbol" && Bt(T, A), a(T, E));
      }
      return function(T, E, A, V) {
        var I = Le;
        Le = null;
        try {
          Ky = 0;
          var He = tt(
            T,
            E,
            A,
            V
          );
          return ah = null, He;
        } catch (Ht) {
          if (Ht === Qy || Ht === Yg) throw Ht;
          var fe = ve(29, Ht, null, T.mode);
          fe.lanes = V, fe.return = T;
          var we = fe._debugInfo = Le;
          if (fe._debugOwner = T._debugOwner, fe._debugTask = T._debugTask, we != null) {
            for (var Be = we.length - 1; 0 <= Be; Be--)
              if (typeof we[Be].stack == "string") {
                fe._debugOwner = we[Be], fe._debugTask = we[Be].debugTask;
                break;
              }
          }
          return fe;
        } finally {
          Le = I;
        }
      };
    }
    function ha(e) {
      var t = e.alternate;
      pe(
        zl,
        zl.current & uh,
        e
      ), pe(In, e, e), Mi === null && (t === null || eh.current !== null || t.memoizedState !== null) && (Mi = e);
    }
    function ni(e) {
      if (e.tag === 22) {
        if (pe(zl, zl.current, e), pe(In, e, e), Mi === null) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (Mi = e);
        }
      } else tn(e);
    }
    function tn(e) {
      pe(zl, zl.current, e), pe(
        In,
        In.current,
        e
      );
    }
    function ma(e) {
      Fe(In, e), Mi === e && (Mi = null), Fe(zl, e);
    }
    function gu(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || a.data === Nc || jn(a)))
            return t;
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
    function rm(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        a1.has(t) || (a1.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function _t(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & ca) {
        Ze(!0);
        try {
          f = a(i, o);
        } finally {
          Ze(!1);
        }
      }
      f === void 0 && (t = Ne(t) || "Component", Pb.has(t) || (Pb.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : Ye({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Cr(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & ca) {
          Ze(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            Ze(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Ne(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !bf(a, i) || !bf(o, f) : !0;
    }
    function Hr(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = ne(e) || "Component", Kb.has(e) || (Kb.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), rv.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function ui(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = Ye({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function dm(e) {
      dv(e), console.warn(
        `%s

%s
`,
        ih ? "An error occurred in the <" + ih + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function Jp(e) {
      var t = ih ? "The above error occurred in the <" + ih + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((hv || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          B1 + e[0],
          _1,
          f0 + i + f0,
          q1
        ) : e.splice(
          0,
          0,
          B1,
          _1,
          f0 + i + f0,
          q1
        ), e.unshift(console), i = O2.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function wr(e) {
      dv(e);
    }
    function ro(e, t) {
      try {
        ih = t.source ? ne(t.source) : null, hv = null;
        var a = t.value;
        if (q.actQueue !== null)
          q.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Nr(e, t, a) {
      try {
        ih = a.source ? ne(a.source) : null, hv = ne(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Dl(e, t, a) {
      return a = vn(a), a.tag = lv, a.payload = { element: null }, a.callback = function() {
        ce(t.source, ro, e, t);
      }, a;
    }
    function Yt(e) {
      return e = vn(e), e.tag = lv, e;
    }
    function Gf(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          Yp(a), ce(
            i.source,
            Nr,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        Yp(a), ce(
          i.source,
          Nr,
          t,
          a,
          i
        ), typeof o != "function" && (Wo === null ? Wo = /* @__PURE__ */ new Set([this]) : Wo.add(this)), i2(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          ne(a) || "Unknown"
        );
      });
    }
    function Vf(e, t, a, i, o) {
      if (a.flags |= 32768, Zt && So(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && pl(
          t,
          a,
          o,
          !0
        ), ot && (Oc = !0), a = In.current, a !== null) {
          switch (a.tag) {
            case 13:
              return Mi === null ? ed() : a.alternate === null && $t === wc && ($t = gv), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === tv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), qm(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === tv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), qm(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return qm(e, i, o), ed(), !1;
      }
      if (ot)
        return Oc = !0, t = In.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== F0 && $c(
          ra(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== F0 && $c(
          ra(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = ra(i, a), o = Dl(
          e.stateNode,
          i,
          o
        ), Fc(e, o), $t !== Bs && ($t = sh)), !1;
      var f = ra(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (lp === null ? lp = [f] : lp.push(f), $t !== Bs && ($t = sh), t === null) return !0;
      i = ra(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = Dl(
              a.stateNode,
              i,
              e
            ), Fc(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Wo === null || !Wo.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Yt(o), Gf(
                o,
                e,
                a,
                i
              ), Fc(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function Jt(e, t, a, i) {
      t.child = e === null ? kb(t, null, a, i) : nh(
        t,
        e.child,
        a,
        i
      );
    }
    function Br(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return $u(t), qt(t), i = ei(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = Wl(), hl(), e !== null && !wl ? (du(e, t, o), Mn(e, t, o)) : (ot && h && hr(t), t.flags |= 1, Jt(e, t, i, o), t.child);
    }
    function Rn(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !Gh(f) && f.defaultProps === void 0 && a.compare === null ? (a = Qi(f), t.tag = 15, t.type = a, Yr(t, f), Xf(
          e,
          t,
          a,
          i,
          o
        )) : (e = dr(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !Zr(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : bf, a(d, i) && e.ref === t.ref)
          return Mn(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = mn(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Xf(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (bf(f, i) && e.ref === t.ref && t.type === e.type)
          if (wl = !1, t.pendingProps = i = f, Zr(e, o))
            (e.flags & 131072) !== 0 && (wl = !0);
          else
            return t.lanes = e.lanes, Mn(e, t, o);
      }
      return jr(
        e,
        t,
        a,
        i,
        o
      );
    }
    function _r(e, t, a) {
      var i = t.pendingProps, o = i.children, f = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (i = f !== null ? f.baseLanes | a : a, e !== null) {
            for (o = t.child = e.child, f = 0; o !== null; )
              f = f | o.lanes | o.childLanes, o = o.sibling;
            t.childLanes = f & ~i;
          } else t.childLanes = 0, t.child = null;
          return qr(
            e,
            t,
            i,
            a
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && gr(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? $l(t, f) : Mf(t), ni(t);
        else
          return t.lanes = t.childLanes = 536870912, qr(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a
          );
      } else
        f !== null ? (gr(t, f.cachePool), $l(t, f), tn(t), t.memoizedState = null) : (e !== null && gr(t, null), Mf(t), tn(t));
      return Jt(e, t, o, a), t.child;
    }
    function qr(e, t, a, i) {
      var o = Ih();
      return o = o === null ? null : {
        parent: Al._currentValue,
        pool: o
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: o
      }, e !== null && gr(t, null), Mf(t), ni(t), e !== null && pl(e, t, i, !0), null;
    }
    function Lf(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function jr(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = Ne(a) || "Unknown";
        u1[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), u1[f] = !0);
      }
      return t.mode & ca && wu.recordLegacyContextWarning(
        t,
        null
      ), e === null && (Yr(t, t.type), a.contextTypes && (f = Ne(a) || "Unknown", c1[f] || (c1[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), $u(t), qt(t), a = ei(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = Wl(), hl(), e !== null && !wl ? (du(e, t, o), Mn(e, t, o)) : (ot && i && hr(t), t.flags |= 1, Jt(e, t, a, o), t.child);
    }
    function hm(e, t, a, i, o, f) {
      return $u(t), qt(t), Cc = -1, Jy = e !== null && e.type !== t.type, t.updateQueue = null, a = to(
        t,
        i,
        a,
        o
      ), Df(e, t), i = Wl(), hl(), e !== null && !wl ? (du(e, t, f), Mn(e, t, f)) : (ot && i && hr(t), t.flags |= 1, Jt(e, t, a, f), t.child);
    }
    function mm(e, t, a, i, o) {
      switch (W(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = Mt, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Yt(h), Gf(
            h,
            d,
            t,
            ra(f, t)
          ), Fc(t, h);
      }
      if ($u(t), t.stateNode === null) {
        if (d = Lo, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== ja) && !l1.has(a) && (l1.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === Md ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Ne(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = Rt(f)), f = new a(i, d), t.mode & ca) {
          Ze(!0);
          try {
            f = new a(i, d);
          } finally {
            Ze(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = rv, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = Jb, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Ne(a) || "Component", $b.has(d) || ($b.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var p = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? p = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (p = "UNSAFE_componentWillUpdate"), d !== null || h !== null || p !== null) {
            f = Ne(a) || "Component";
            var v = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Fb.has(f) || (Fb.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              v,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              p !== null ? `
  ` + p : ""
            ));
          }
        }
        f = t.stateNode, d = Ne(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !t1.has(a) && (t1.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !e1.has(a) && (e1.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Ne(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || Wb.has(a) || (Wb.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Ne(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || Me(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, Kl(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? Rt(d) : Lo, f.state === i && (d = Ne(a) || "Component", Ib.has(d) || (Ib.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & ca && wu.recordLegacyContextWarning(
          t,
          f
        ), wu.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (_t(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          ne(t) || "Component"
        ), rv.enqueueReplaceState(
          f,
          f.state,
          null
        )), Ic(t, i, f, o), bn(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Hu) !== Ct && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var C = t.memoizedProps;
        h = ui(a, C), f.props = h;
        var Y = f.context;
        p = a.contextType, d = Lo, typeof p == "object" && p !== null && (d = Rt(p)), v = a.getDerivedStateFromProps, p = typeof v == "function" || typeof f.getSnapshotBeforeUpdate == "function", C = t.pendingProps !== C, p || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (C || Y !== d) && Hr(
          t,
          f,
          i,
          d
        ), Qo = !1;
        var O = t.memoizedState;
        f.state = O, Ic(t, i, f, o), bn(), Y = t.memoizedState, C || O !== Y || Qo ? (typeof v == "function" && (_t(
          t,
          a,
          v,
          i
        ), Y = t.memoizedState), (h = Qo || Cr(
          t,
          a,
          h,
          i,
          O,
          Y,
          d
        )) ? (p || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Hu) !== Ct && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Hu) !== Ct && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = Y), f.props = i, f.state = Y, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Hu) !== Ct && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, Fu(e, t), d = t.memoizedProps, p = ui(a, d), f.props = p, v = t.pendingProps, O = f.context, Y = a.contextType, h = Lo, typeof Y == "object" && Y !== null && (h = Rt(Y)), C = a.getDerivedStateFromProps, (Y = typeof C == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== v || O !== h) && Hr(
          t,
          f,
          i,
          h
        ), Qo = !1, O = t.memoizedState, f.state = O, Ic(t, i, f, o), bn();
        var G = t.memoizedState;
        d !== v || O !== G || Qo || e !== null && e.dependencies !== null && Ku(e.dependencies) ? (typeof C == "function" && (_t(
          t,
          a,
          C,
          i
        ), G = t.memoizedState), (p = Qo || Cr(
          t,
          a,
          p,
          i,
          O,
          G,
          h
        ) || e !== null && e.dependencies !== null && Ku(e.dependencies)) ? (Y || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, G, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          G,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = G), f.props = i, f.state = G, f.context = h, f = p) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, Lf(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, ff(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, Va = -1;
        else {
          if (qt(t), a = Hb(h), t.mode & ca) {
            Ze(!0);
            try {
              Hb(h);
            } finally {
              Ze(!1);
            }
          }
          hl();
        }
        t.flags |= 1, e !== null && d ? (t.child = nh(
          t,
          e.child,
          null,
          o
        ), t.child = nh(
          t,
          null,
          a,
          o
        )) : Jt(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Mn(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (ch || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        ne(t) || "a component"
      ), ch = !0), e;
    }
    function ym(e, t, a, i) {
      return Ji(), t.flags |= 256, Jt(e, t, a, i), t.child;
    }
    function Yr(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = Ne(t) || "Unknown", o1[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), o1[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = Ne(t) || "Unknown", i1[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), i1[t] = !0));
    }
    function Qf(e) {
      return { baseLanes: e, cachePool: Lp() };
    }
    function Gr(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= sn), e;
    }
    function Kp(e, t, a) {
      var i, o = t.pendingProps;
      K(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (zl.current & $y) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (ot) {
          if (f ? ha(t) : tn(t), ot) {
            var h = Kt, p;
            if (!(p = !h)) {
              e: {
                var v = h;
                for (p = zi; v.nodeType !== 8; ) {
                  if (!p) {
                    p = null;
                    break e;
                  }
                  if (v = Sl(v.nextSibling), v === null) {
                    p = null;
                    break e;
                  }
                }
                p = v;
              }
              p !== null ? (Ja(), t.memoizedState = {
                dehydrated: p,
                treeContext: Ds !== null ? { id: Mc, overflow: Dc } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, v = ve(18, null, null, Ct), v.stateNode = p, v.return = t, t.child = v, Ta = t, Kt = null, p = !0) : p = !1, p = !p;
            }
            p && (Lh(
              t,
              h
            ), yn(t));
          }
          if (h = t.memoizedState, h !== null && (h = h.dehydrated, h !== null))
            return jn(h) ? t.lanes = 32 : t.lanes = 536870912, null;
          ma(t);
        }
        return h = o.children, o = o.fallback, f ? (tn(t), f = t.mode, h = Zf(
          {
            mode: "hidden",
            children: h
          },
          f
        ), o = Zu(
          o,
          f,
          a,
          null
        ), h.return = t, o.return = t, h.sibling = o, t.child = h, f = t.child, f.memoizedState = Qf(a), f.childLanes = Gr(
          e,
          i,
          a
        ), t.memoizedState = yv, o) : (ha(t), Vr(
          t,
          h
        ));
      }
      var C = e.memoizedState;
      if (C !== null && (h = C.dehydrated, h !== null)) {
        if (d)
          t.flags & 256 ? (ha(t), t.flags &= -257, t = Xr(
            e,
            t,
            a
          )) : t.memoizedState !== null ? (tn(t), t.child = e.child, t.flags |= 128, t = null) : (tn(t), f = o.fallback, h = t.mode, o = Zf(
            {
              mode: "visible",
              children: o.children
            },
            h
          ), f = Zu(
            f,
            h,
            a,
            null
          ), f.flags |= 2, o.return = t, f.return = t, o.sibling = f, t.child = o, nh(
            t,
            e.child,
            null,
            a
          ), o = t.child, o.memoizedState = Qf(a), o.childLanes = Gr(
            e,
            i,
            a
          ), t.memoizedState = yv, t = f);
        else if (ha(t), ot && console.error(
          "We should not be hydrating here. This is a bug in React. Please file a bug."
        ), jn(h)) {
          if (i = h.nextSibling && h.nextSibling.dataset, i) {
            p = i.dgst;
            var Y = i.msg;
            v = i.stck;
            var O = i.cstck;
          }
          h = Y, i = p, o = v, p = f = O, f = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), f.stack = o || "", f.digest = i, i = p === void 0 ? null : p, o = {
            value: f,
            source: null,
            stack: i
          }, typeof i == "string" && $0.set(
            f,
            o
          ), $c(o), t = Xr(
            e,
            t,
            a
          );
        } else if (wl || pl(
          e,
          t,
          a,
          !1
        ), i = (a & e.childLanes) !== 0, wl || i) {
          if (i = Mt, i !== null && (o = a & -a, o = (o & 42) !== 0 ? 1 : Bl(
            o
          ), o = (o & (i.suspendedLanes | a)) !== 0 ? 0 : o, o !== 0 && o !== C.retryLane))
            throw C.retryLane = o, Jl(
              e,
              o
            ), Gt(
              i,
              e,
              o
            ), n1;
          h.data === Nc || ed(), t = Xr(
            e,
            t,
            a
          );
        } else
          h.data === Nc ? (t.flags |= 192, t.child = e.child, t = null) : (e = C.treeContext, Kt = Sl(
            h.nextSibling
          ), Ta = t, ot = !0, Os = null, Oc = !1, Kn = null, zi = !1, e !== null && (Ja(), kn[Jn++] = Mc, kn[Jn++] = Dc, kn[Jn++] = Ds, Mc = e.id, Dc = e.overflow, Ds = t), t = Vr(
            t,
            o.children
          ), t.flags |= 4096);
        return t;
      }
      return f ? (tn(t), f = o.fallback, h = t.mode, p = e.child, v = p.sibling, o = mn(
        p,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = p.subtreeFlags & 65011712, v !== null ? f = mn(
        v,
        f
      ) : (f = Zu(
        f,
        h,
        a,
        null
      ), f.flags |= 2), f.return = t, o.return = t, o.sibling = f, t.child = o, o = f, f = t.child, h = e.child.memoizedState, h === null ? h = Qf(a) : (p = h.cachePool, p !== null ? (v = Al._currentValue, p = p.parent !== v ? { parent: v, pool: v } : p) : p = Lp(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: p
      }), f.memoizedState = h, f.childLanes = Gr(
        e,
        i,
        a
      ), t.memoizedState = yv, o) : (ha(t), a = e.child, e = a.sibling, a = mn(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function Vr(e, t) {
      return t = Zf(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function Zf(e, t) {
      return e = ve(22, e, null, t), e.lanes = 0, e.stateNode = {
        _visibility: Cg,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }, e;
    }
    function Xr(e, t, a) {
      return nh(t, e.child, null, a), e = Vr(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function Lr(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), Kh(
        e.return,
        t,
        a
      );
    }
    function pm(e, t) {
      var a = Me(e);
      return e = !a && typeof nt(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function Qr(e, t, a, i, o) {
      var f = e.memoizedState;
      f === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = a, f.tailMode = o);
    }
    function gm(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail;
      if (i = i.children, o !== void 0 && o !== "forwards" && o !== "backwards" && o !== "together" && !f1[o])
        if (f1[o] = !0, typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
            o
          );
      f === void 0 || mv[f] || (f !== "collapsed" && f !== "hidden" ? (mv[f] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && (mv[f] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards") && i !== void 0 && i !== null && i !== !1)
        if (Me(i)) {
          for (var d = 0; d < i.length; d++)
            if (!pm(i[d], d)) break e;
        } else if (d = nt(i), typeof d == "function") {
          if (d = d.call(i))
            for (var h = d.next(), p = 0; !h.done; h = d.next()) {
              if (!pm(h.value, p)) break e;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (Jt(e, t, i, a), i = zl.current, (i & $y) !== 0)
        i = i & uh | $y, t.flags |= 128;
      else {
        if (e !== null && (e.flags & 128) !== 0)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Lr(
                e,
                a,
                t
              );
            else if (e.tag === 19)
              Lr(e, a, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
        i &= uh;
      }
      switch (pe(zl, i, t), o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && gu(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), Qr(
            t,
            !1,
            o,
            a,
            f
          );
          break;
        case "backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && gu(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          Qr(
            t,
            !0,
            a,
            null,
            f
          );
          break;
        case "together":
          Qr(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Mn(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), Va = -1, Ko |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (pl(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = mn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = mn(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function Zr(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ku(e)));
    }
    function U0(e, t, a) {
      switch (t.tag) {
        case 3:
          wt(
            t,
            t.stateNode.containerInfo
          ), Ju(
            t,
            Al,
            e.memoizedState.cache
          ), Ji();
          break;
        case 27:
        case 5:
          Q(t);
          break;
        case 4:
          wt(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          Ju(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (a & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (ha(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Kp(
              e,
              t,
              a
            ) : (ha(t), e = Mn(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          ha(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (pl(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return gm(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), pe(
            zl,
            zl.current,
            t
          ), i) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, _r(e, t, a);
        case 24:
          Ju(
            t,
            Al,
            e.memoizedState.cache
          );
      }
      return Mn(e, t, a);
    }
    function kr(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = dr(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          wl = !0;
        else {
          if (!Zr(e, a) && (t.flags & 128) === 0)
            return wl = !1, U0(
              e,
              t,
              a
            );
          wl = (e.flags & 131072) !== 0;
        }
      else
        wl = !1, (i = ot) && (Ja(), i = (t.flags & 1048576) !== 0), i && (i = t.index, Ja(), Gp(t, wg, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = ko(t.elementType), t.type = e, typeof e == "function")
            Gh(e) ? (i = ui(
              e,
              i
            ), t.tag = 1, t.type = e = Qi(e), t = mm(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, Yr(t, e), t.type = e = Qi(e), t = jr(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === zu) {
                t.tag = 11, t.type = e = Yh(e), t = Br(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === ys) {
                t.tag = 14, t = Rn(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === va && (t = " Did you wrap a component in React.lazy() more than once?"), e = Ne(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return jr(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = ui(
            i,
            t.pendingProps
          ), mm(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (wt(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, Fu(e, t), Ic(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, Ju(t, Al, i), i !== f.cache && $h(
              t,
              [Al],
              a,
              !0
            ), bn(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = ym(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = ra(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), $c(o), t = ym(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else {
                switch (e = t.stateNode.containerInfo, e.nodeType) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                }
                for (Kt = Sl(e.firstChild), Ta = t, ot = !0, Os = null, Oc = !1, Kn = null, zi = !0, e = kb(
                  t,
                  null,
                  i,
                  a
                ), t.child = e; e; )
                  e.flags = e.flags & -3 | 4096, e = e.sibling;
              }
            else {
              if (Ji(), i === o) {
                t = Mn(
                  e,
                  t,
                  a
                );
                break e;
              }
              Jt(
                e,
                t,
                i,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return Lf(e, t), e === null ? (e = xu(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = e : ot || (e = t.type, a = t.pendingProps, i = Et(
            Gn.current
          ), i = Ke(
            i
          ).createElement(e), i[Hl] = t, i[ua] = a, Xt(i, e, a), nl(i), t.stateNode = i) : t.memoizedState = xu(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return Q(t), e === null && ot && (i = Et(Gn.current), o = x(), i = t.stateNode = ly(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), Oc || (o = Tt(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (Ka(t, 0).serverProps = o)), Ta = t, zi = !0, o = Kt, qn(t.type) ? (jv = o, Kt = Sl(
            i.firstChild
          )) : Kt = o), Jt(
            e,
            t,
            t.pendingProps.children,
            a
          ), Lf(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && ot && (f = x(), i = ar(
            t.type,
            f.ancestorInfo
          ), o = Kt, (d = !o) || (d = di(
            o,
            t.type,
            t.pendingProps,
            zi
          ), d !== null ? (t.stateNode = d, Oc || (f = Tt(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (Ka(t, 0).serverProps = f)), Ta = t, Kt = Sl(
            d.firstChild
          ), zi = !1, f = !0) : f = !1, d = !f), d && (i && Lh(t, o), yn(t))), Q(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, _n(o, f) ? i = null : d !== null && _n(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = ei(
            e,
            t,
            Oa,
            null,
            null,
            a
          ), sp._currentValue = o), Lf(e, t), Jt(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && ot && (e = t.pendingProps, a = x(), i = a.ancestorInfo.current, e = i != null ? yf(
            e,
            i.tag,
            a.ancestorInfo.implicitRootScope
          ) : !0, a = Kt, (i = !a) || (i = bl(
            a,
            t.pendingProps,
            zi
          ), i !== null ? (t.stateNode = i, Ta = t, Kt = null, i = !0) : i = !1, i = !i), i && (e && Lh(t, a), yn(t))), null;
        case 13:
          return Kp(e, t, a);
        case 4:
          return wt(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = nh(
            t,
            null,
            i,
            a
          ) : Jt(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return Br(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return Jt(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return Jt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, Jt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || s1 || (s1 = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), Ju(t, i, f), Jt(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), $u(t), o = Rt(o), qt(t), i = ov(
            i,
            o,
            void 0
          ), hl(), t.flags |= 1, Jt(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return Rn(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return Xf(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return gm(
            e,
            t,
            a
          );
        case 31:
          return i = t.pendingProps, a = t.mode, i = {
            mode: i.mode,
            children: i.children
          }, e === null ? (e = Zf(
            i,
            a
          ), e.ref = t.ref, t.child = e, e.return = t, t = e) : (e = mn(e.child, i), e.ref = t.ref, t.child = e, e.return = t, t = e), t;
        case 22:
          return _r(e, t, a);
        case 24:
          return $u(t), i = Rt(Al), e === null ? (o = Ih(), o === null && (o = Mt, f = zf(), o.pooledCache = f, Ki(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, Kl(t), Ju(t, Al, o)) : ((e.lanes & a) !== 0 && (Fu(e, t), Ic(t, null, null, a), bn()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Ju(t, Al, i)) : (i = f.cache, Ju(t, Al, i), i !== o.cache && $h(
            t,
            [Al],
            a,
            !0
          ))), Jt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Il(e) {
      e.flags |= 4;
    }
    function kf(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & Pn) !== Qs)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !is(t)) {
        if (t = In.current, t !== null && ((Pe & 4194048) === Pe ? Mi !== null : (Pe & 62914560) !== Pe && (Pe & 536870912) === 0 || t !== Mi))
          throw Zy = tv, Sb;
        e.flags |= 8192;
      }
    }
    function Jf(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? uf() : 536870912, e.lanes |= t, js |= t);
    }
    function ii(e, t) {
      if (!ot)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function pt(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & Ll) !== Ct) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & Ll) !== Ct) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function $p(e, t, a) {
      var i = t.pendingProps;
      switch (mr(t), t.tag) {
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
          return pt(t), null;
        case 1:
          return pt(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), su(Al, t), dt(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (ki(t) ? (Jh(), Il(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, kh())), pt(t), null;
        case 26:
          return a = t.memoizedState, e === null ? (Il(t), a !== null ? (pt(t), kf(
            t,
            a
          )) : (pt(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (Il(t), pt(t), kf(
            t,
            a
          )) : (pt(t), t.flags &= -16777217) : (e.memoizedProps !== i && Il(t), pt(t), t.flags &= -16777217), null;
        case 27:
          _(t), a = Et(Gn.current);
          var o = t.type;
          if (e !== null && t.stateNode != null)
            e.memoizedProps !== i && Il(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return pt(t), null;
            }
            e = x(), ki(t) ? Qh(t) : (e = ly(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, Il(t));
          }
          return pt(t), null;
        case 5:
          if (_(t), a = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Il(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return pt(t), null;
            }
            if (o = x(), ki(t))
              Qh(t);
            else {
              switch (e = Et(Gn.current), ar(a, o.ancestorInfo), o = o.context, e = Ke(e), o) {
                case ph:
                  e = e.createElementNS(Xo, a);
                  break;
                case i0:
                  e = e.createElementNS(
                    Rs,
                    a
                  );
                  break;
                default:
                  switch (a) {
                    case "svg":
                      e = e.createElementNS(
                        Xo,
                        a
                      );
                      break;
                    case "math":
                      e = e.createElementNS(
                        Rs,
                        a
                      );
                      break;
                    case "script":
                      e = e.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                      break;
                    case "select":
                      e = typeof i.is == "string" ? e.createElement("select", { is: i.is }) : e.createElement("select"), i.multiple ? e.multiple = !0 : i.size && (e.size = i.size);
                      break;
                    default:
                      e = typeof i.is == "string" ? e.createElement(a, {
                        is: i.is
                      }) : e.createElement(a), a.indexOf("-") === -1 && (a !== a.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        a
                      ), Object.prototype.toString.call(e) !== "[object HTMLUnknownElement]" || Mu.call(
                        O1,
                        a
                      ) || (O1[a] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        a
                      )));
                  }
              }
              e[Hl] = t, e[ua] = i;
              e: for (o = t.child; o !== null; ) {
                if (o.tag === 5 || o.tag === 6)
                  e.appendChild(o.stateNode);
                else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                  o.child.return = o, o = o.child;
                  continue;
                }
                if (o === t) break e;
                for (; o.sibling === null; ) {
                  if (o.return === null || o.return === t)
                    break e;
                  o = o.return;
                }
                o.sibling.return = o.return, o = o.sibling;
              }
              t.stateNode = e;
              e: switch (Xt(e, a, i), a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!i.autoFocus;
                  break e;
                case "img":
                  e = !0;
                  break e;
                default:
                  e = !1;
              }
              e && Il(t);
            }
          }
          return pt(t), t.flags &= -16777217, null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && Il(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = Et(Gn.current), a = x(), ki(t)) {
              e = t.stateNode, a = t.memoizedProps, o = !Oc, i = null;
              var f = Ta;
              if (f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = vd(
                      e,
                      a,
                      i
                    ), o !== null && (Ka(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = vd(
                      e,
                      a,
                      i
                    ), o !== null && (Ka(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Hl] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || km(e.nodeValue, a)), e || yn(t);
            } else
              o = a.ancestorInfo.current, o != null && yf(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = Ke(e).createTextNode(
                i
              ), e[Hl] = t, t.stateNode = e;
          }
          return pt(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = ki(t), i !== null && i.dehydrated !== null) {
              if (e === null) {
                if (!o)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                o[Hl] = t, pt(t), (t.mode & Ll) !== Ct && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Jh(), Ji(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4, pt(t), (t.mode & Ll) !== Ct && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = kh(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (ma(t), t) : (ma(t), null);
          }
          return ma(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & Ll) !== Ct && gn(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Jf(t, t.updateQueue), pt(t), (t.mode & Ll) !== Ct && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return dt(t), e === null && Qm(
            t.stateNode.containerInfo
          ), pt(t), null;
        case 10:
          return su(t.type, t), pt(t), null;
        case 19:
          if (Fe(zl, t), o = t.memoizedState, o === null) return pt(t), null;
          if (i = (t.flags & 128) !== 0, f = o.rendering, f === null)
            if (i) ii(o, !1);
            else {
              if ($t !== wc || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = gu(e), f !== null) {
                    for (t.flags |= 128, ii(o, !1), e = f.updateQueue, t.updateQueue = e, Jf(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Vh(a, e), a = a.sibling;
                    return pe(
                      zl,
                      zl.current & uh | $y,
                      t
                    ), t.child;
                  }
                  e = e.sibling;
                }
              o.tail !== null && Vn() > Kg && (t.flags |= 128, i = !0, ii(o, !1), t.lanes = 4194304);
            }
          else {
            if (!i)
              if (e = gu(f), e !== null) {
                if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Jf(t, e), ii(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !ot)
                  return pt(t), null;
              } else
                2 * Vn() - o.renderingStartTime > Kg && a !== 536870912 && (t.flags |= 128, i = !0, ii(o, !1), t.lanes = 4194304);
            o.isBackwards ? (f.sibling = t.child, t.child = f) : (e = o.last, e !== null ? e.sibling = f : t.child = f, o.last = f);
          }
          return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = Vn(), e.sibling = null, a = zl.current, a = i ? a & uh | $y : a & uh, pe(zl, a, t), e) : (pt(t), null);
        case 22:
        case 23:
          return ma(t), Ia(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (pt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : pt(t), a = t.updateQueue, a !== null && Jf(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && Fe(Hs, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), su(Al, t), pt(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Wp(e, t) {
      switch (mr(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Ll) !== Ct && gn(t), t) : null;
        case 3:
          return su(Al, t), dt(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return _(t), null;
        case 13:
          if (ma(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Ji();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Ll) !== Ct && gn(t), t) : null;
        case 19:
          return Fe(zl, t), null;
        case 4:
          return dt(t), null;
        case 10:
          return su(t.type, t), null;
        case 22:
        case 23:
          return ma(t), Ia(t), e !== null && Fe(Hs, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Ll) !== Ct && gn(t), t) : null;
        case 24:
          return su(Al, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function vm(e, t) {
      switch (mr(t), t.tag) {
        case 3:
          su(Al, t), dt(t);
          break;
        case 26:
        case 27:
        case 5:
          _(t);
          break;
        case 4:
          dt(t);
          break;
        case 13:
          ma(t);
          break;
        case 19:
          Fe(zl, t);
          break;
        case 10:
          su(t.type, t);
          break;
        case 22:
        case 23:
          ma(t), Ia(t), e !== null && Fe(Hs, t);
          break;
        case 24:
          su(Al, t);
      }
    }
    function ln(e) {
      return (e.mode & Ll) !== Ct;
    }
    function bm(e, t) {
      ln(e) ? (Wa(), ac(t, e), Ra()) : ac(t, e);
    }
    function Jr(e, t, a) {
      ln(e) ? (Wa(), nc(
        a,
        e,
        t
      ), Ra()) : nc(
        a,
        e,
        t
      );
    }
    function ac(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && ((e & xl) !== $n ? P !== null && typeof P.markComponentPassiveEffectMountStarted == "function" && P.markComponentPassiveEffectMountStarted(
              t
            ) : (e & Ql) !== $n && P !== null && typeof P.markComponentLayoutEffectMountStarted == "function" && P.markComponentLayoutEffectMountStarted(
              t
            ), i = void 0, (e & Ea) !== $n && (mh = !0), i = ce(
              t,
              c2,
              a
            ), (e & Ea) !== $n && (mh = !1), (e & xl) !== $n ? P !== null && typeof P.markComponentPassiveEffectMountStopped == "function" && P.markComponentPassiveEffectMountStopped() : (e & Ql) !== $n && P !== null && typeof P.markComponentLayoutEffectMountStopped == "function" && P.markComponentLayoutEffectMountStopped(), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & Ql) !== 0 ? "useLayoutEffect" : (a.tag & Ea) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, ce(
                t,
                function(h, p) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    p
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        Ee(t, t.return, h);
      }
    }
    function nc(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & xl) !== $n ? P !== null && typeof P.markComponentPassiveEffectUnmountStarted == "function" && P.markComponentPassiveEffectUnmountStarted(
                t
              ) : (e & Ql) !== $n && P !== null && typeof P.markComponentLayoutEffectUnmountStarted == "function" && P.markComponentLayoutEffectUnmountStarted(
                t
              ), (e & Ea) !== $n && (mh = !0), o = t, ce(
                o,
                o2,
                o,
                a,
                h
              ), (e & Ea) !== $n && (mh = !1), (e & xl) !== $n ? P !== null && typeof P.markComponentPassiveEffectUnmountStopped == "function" && P.markComponentPassiveEffectUnmountStopped() : (e & Ql) !== $n && P !== null && typeof P.markComponentLayoutEffectUnmountStopped == "function" && P.markComponentLayoutEffectUnmountStopped());
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (p) {
        Ee(t, t.return, p);
      }
    }
    function Sm(e, t) {
      ln(e) ? (Wa(), ac(t, e), Ra()) : ac(t, e);
    }
    function Kf(e, t, a) {
      ln(e) ? (Wa(), nc(
        a,
        e,
        t
      ), Ra()) : nc(
        a,
        e,
        t
      );
    }
    function Tm(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || ch || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          ne(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          ne(e) || "instance"
        ));
        try {
          ce(
            e,
            Qp,
            t,
            a
          );
        } catch (i) {
          Ee(e, e.return, i);
        }
      }
    }
    function Fp(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function C0(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || ch || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        ne(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        ne(e) || "instance"
      ));
      try {
        var o = ui(
          e.type,
          a,
          e.elementType === e.type
        ), f = ce(
          e,
          Fp,
          t,
          o,
          i
        );
        a = r1, f !== void 0 || a.has(e.type) || (a.add(e.type), ce(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            ne(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        Ee(e, e.return, d);
      }
    }
    function Kr(e, t, a) {
      a.props = ui(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, ln(e) ? (Wa(), ce(
        e,
        jb,
        e,
        t,
        a
      ), Ra()) : ce(
        e,
        jb,
        e,
        t,
        a
      );
    }
    function Ip(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if (ln(e))
            try {
              Wa(), e.refCleanup = t(a);
            } finally {
              Ra();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            ne(e)
          ), t.current = a;
      }
    }
    function ho(e, t) {
      try {
        ce(e, Ip, e);
      } catch (a) {
        Ee(e, t, a);
      }
    }
    function Na(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (ln(e))
              try {
                Wa(), ce(e, i);
              } finally {
                Ra(e);
              }
            else ce(e, i);
          } catch (o) {
            Ee(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (ln(e))
              try {
                Wa(), ce(e, a, null);
              } finally {
                Ra(e);
              }
            else ce(e, a, null);
          } catch (o) {
            Ee(e, t, o);
          }
        else a.current = null;
    }
    function Em(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", _g && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(
        e.memoizedProps.id,
        t,
        i,
        a
      );
    }
    function Pp(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", _g && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function eg(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        ce(
          e,
          Eu,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        Ee(e, e.return, o);
      }
    }
    function Am(e, t, a) {
      try {
        ce(
          e,
          Lt,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Ee(e, e.return, i);
      }
    }
    function xm(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && qn(e.type) || e.tag === 4;
    }
    function uc(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || xm(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && qn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function $f(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Tu));
      else if (i !== 4 && (i === 27 && qn(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for ($f(e, t, a), e = e.sibling; e !== null; )
          $f(e, t, a), e = e.sibling;
    }
    function ic(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && qn(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (ic(e, t, a), e = e.sibling; e !== null; )
          ic(e, t, a), e = e.sibling;
    }
    function tg(e) {
      for (var t, a = e.return; a !== null; ) {
        if (xm(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = uc(e), ic(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (Au(a), t.flags &= -33), t = uc(e), ic(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = uc(e), $f(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function zm(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        ce(
          e,
          ga,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Ee(e, e.return, i);
      }
    }
    function $r(e, t) {
      if (e = e.containerInfo, Bv = s0, e = Bp(e), qh(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, p = -1, v = 0, C = 0, Y = e, O = null;
              t: for (; ; ) {
                for (var G; Y !== a || o !== 0 && Y.nodeType !== 3 || (h = d + o), Y !== f || i !== 0 && Y.nodeType !== 3 || (p = d + i), Y.nodeType === 3 && (d += Y.nodeValue.length), (G = Y.firstChild) !== null; )
                  O = Y, Y = G;
                for (; ; ) {
                  if (Y === e) break t;
                  if (O === a && ++v === o && (h = d), O === f && ++C === i && (p = d), (G = Y.nextSibling) !== null) break;
                  Y = O, O = Y.parentNode;
                }
                Y = G;
              }
              a = h === -1 || p === -1 ? null : { start: h, end: p };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (_v = {
        focusedElem: e,
        selectionRange: a
      }, s0 = !1, Nl = t; Nl !== null; )
        if (t = Nl, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
          e.return = t, Nl = e;
        else
          for (; Nl !== null; ) {
            switch (e = t = Nl, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && C0(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    xo(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        xo(e);
                        break;
                      default:
                        e.textContent = "";
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
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, Nl = e;
              break;
            }
            Nl = t.return;
          }
    }
    function Rm(e, t, a) {
      var i = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Dn(e, a), i & 4 && bm(a, Ql | Wn);
          break;
        case 1:
          if (Dn(e, a), i & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || ch || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                ne(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                ne(a) || "instance"
              )), ln(a) ? (Wa(), ce(
                a,
                fv,
                a,
                e
              ), Ra()) : ce(
                a,
                fv,
                a,
                e
              );
            else {
              var o = ui(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || ch || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                ne(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                ne(a) || "instance"
              )), ln(a) ? (Wa(), ce(
                a,
                Bb,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), Ra()) : ce(
                a,
                Bb,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          i & 64 && Tm(a), i & 512 && ho(a, a.return);
          break;
        case 3:
          if (t = $a(), Dn(e, a), i & 64 && (i = a.updateQueue, i !== null)) {
            if (o = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  o = a.child.stateNode;
                  break;
                case 1:
                  o = a.child.stateNode;
              }
            try {
              ce(
                a,
                Qp,
                i,
                o
              );
            } catch (d) {
              Ee(a, a.return, d);
            }
          }
          e.effectDuration += Wu(t);
          break;
        case 27:
          t === null && i & 4 && zm(a);
        case 26:
        case 5:
          Dn(e, a), t === null && i & 4 && eg(a), i & 512 && ho(a, a.return);
          break;
        case 12:
          if (i & 4) {
            i = $a(), Dn(e, a), e = a.stateNode, e.effectDuration += $i(i);
            try {
              ce(
                a,
                Em,
                a,
                t,
                Bg,
                e.effectDuration
              );
            } catch (d) {
              Ee(a, a.return, d);
            }
          } else Dn(e, a);
          break;
        case 13:
          Dn(e, a), i & 4 && mo(e, a), i & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = as.bind(
            null,
            a
          ), zo(e, a))));
          break;
        case 22:
          if (i = a.memoizedState !== null || Hc, !i) {
            t = t !== null && t.memoizedState !== null || ll, o = Hc;
            var f = ll;
            Hc = i, (ll = t) && !f ? On(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ) : Dn(e, a), Hc = o, ll = f;
          }
          break;
        case 30:
          break;
        default:
          Dn(e, a);
      }
    }
    function Mm(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Mm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Vc(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function vu(e, t, a) {
      for (a = a.child; a !== null; )
        cc(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function cc(e, t, a) {
      if (Tl && typeof Tl.onCommitFiberUnmount == "function")
        try {
          Tl.onCommitFiberUnmount(bi, a);
        } catch (f) {
          na || (na = !0, console.error(
            "React instrumentation encountered an error: %s",
            f
          ));
        }
      switch (a.tag) {
        case 26:
          ll || Na(a, t), vu(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
          break;
        case 27:
          ll || Na(a, t);
          var i = dl, o = Xa;
          qn(a.type) && (dl = a.stateNode, Xa = !1), vu(
            e,
            t,
            a
          ), ce(
            a,
            Mo,
            a.stateNode
          ), dl = i, Xa = o;
          break;
        case 5:
          ll || Na(a, t);
        case 6:
          if (i = dl, o = Xa, dl = null, vu(
            e,
            t,
            a
          ), dl = i, Xa = o, dl !== null)
            if (Xa)
              try {
                ce(
                  a,
                  Eo,
                  dl,
                  a.stateNode
                );
              } catch (f) {
                Ee(
                  a,
                  t,
                  f
                );
              }
            else
              try {
                ce(
                  a,
                  qa,
                  dl,
                  a.stateNode
                );
              } catch (f) {
                Ee(
                  a,
                  t,
                  f
                );
              }
          break;
        case 18:
          dl !== null && (Xa ? (e = dl, Ao(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), Sc(e)) : Ao(dl, a.stateNode));
          break;
        case 4:
          i = dl, o = Xa, dl = a.stateNode.containerInfo, Xa = !0, vu(
            e,
            t,
            a
          ), dl = i, Xa = o;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          ll || nc(
            Ea,
            a,
            t
          ), ll || Jr(
            a,
            t,
            Ql
          ), vu(
            e,
            t,
            a
          );
          break;
        case 1:
          ll || (Na(a, t), i = a.stateNode, typeof i.componentWillUnmount == "function" && Kr(
            a,
            t,
            i
          )), vu(
            e,
            t,
            a
          );
          break;
        case 21:
          vu(
            e,
            t,
            a
          );
          break;
        case 22:
          ll = (i = ll) || a.memoizedState !== null, vu(
            e,
            t,
            a
          ), ll = i;
          break;
        default:
          vu(
            e,
            t,
            a
          );
      }
    }
    function mo(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          ce(
            t,
            pa,
            e
          );
        } catch (a) {
          Ee(t, t.return, a);
        }
    }
    function Wr(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new d1()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new d1()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function oc(e, t) {
      var a = Wr(e);
      t.forEach(function(i) {
        var o = si.bind(null, e, i);
        if (!a.has(i)) {
          if (a.add(i), Zt)
            if (oh !== null && fh !== null)
              So(fh, oh);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          i.then(o, o);
        }
      });
    }
    function Ol(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = f;
          e: for (; h !== null; ) {
            switch (h.tag) {
              case 27:
                if (qn(h.type)) {
                  dl = h.stateNode, Xa = !1;
                  break e;
                }
                break;
              case 5:
                dl = h.stateNode, Xa = !1;
                break e;
              case 3:
              case 4:
                dl = h.stateNode.containerInfo, Xa = !0;
                break e;
            }
            h = h.return;
          }
          if (dl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          cc(o, f, d), dl = null, Xa = !1, o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; )
          Dm(t, e), t = t.sibling;
    }
    function Dm(e, t) {
      var a = e.alternate, i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ol(t, e), Pl(e), i & 4 && (nc(
            Ea | Wn,
            e,
            e.return
          ), ac(Ea | Wn, e), Jr(
            e,
            e.return,
            Ql | Wn
          ));
          break;
        case 1:
          Ol(t, e), Pl(e), i & 512 && (ll || a === null || Na(a, a.return)), i & 64 && Hc && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
          break;
        case 26:
          var o = Bu;
          if (Ol(t, e), Pl(e), i & 512 && (ll || a === null || Na(a, a.return)), i & 4)
            if (t = a !== null ? a.memoizedState : null, i = e.memoizedState, a === null)
              if (i === null)
                if (e.stateNode === null) {
                  e: {
                    i = e.type, a = e.memoizedProps, t = o.ownerDocument || o;
                    t: switch (i) {
                      case "title":
                        o = t.getElementsByTagName("title")[0], (!o || o[jo] || o[Hl] || o.namespaceURI === Xo || o.hasAttribute("itemprop")) && (o = t.createElement(i), t.head.insertBefore(
                          o,
                          t.querySelector("head > title")
                        )), Xt(o, i, a), o[Hl] = e, nl(o), i = o;
                        break e;
                      case "link":
                        var f = iy(
                          "link",
                          "href",
                          t
                        ).get(i + (a.href || ""));
                        if (f) {
                          for (var d = 0; d < f.length; d++)
                            if (o = f[d], o.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && o.getAttribute("rel") === (a.rel == null ? null : a.rel) && o.getAttribute("title") === (a.title == null ? null : a.title) && o.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Xt(o, i, a), t.head.appendChild(o);
                        break;
                      case "meta":
                        if (f = iy(
                          "meta",
                          "content",
                          t
                        ).get(i + (a.content || ""))) {
                          for (d = 0; d < f.length; d++)
                            if (o = f[d], F(
                              a.content,
                              "content"
                            ), o.getAttribute("content") === (a.content == null ? null : "" + a.content) && o.getAttribute("name") === (a.name == null ? null : a.name) && o.getAttribute("property") === (a.property == null ? null : a.property) && o.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && o.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Xt(o, i, a), t.head.appendChild(o);
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + i + '". This is a bug in React.'
                        );
                    }
                    o[Hl] = e, nl(o), i = o;
                  }
                  e.stateNode = i;
                } else
                  cy(
                    o,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = bd(
                  o,
                  i,
                  e.memoizedProps
                );
            else
              t !== i ? (t === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : t.count--, i === null ? cy(
                o,
                e.type,
                e.stateNode
              ) : bd(
                o,
                i,
                e.memoizedProps
              )) : i === null && e.stateNode !== null && Am(
                e,
                e.memoizedProps,
                a.memoizedProps
              );
          break;
        case 27:
          Ol(t, e), Pl(e), i & 512 && (ll || a === null || Na(a, a.return)), a !== null && i & 4 && Am(
            e,
            e.memoizedProps,
            a.memoizedProps
          );
          break;
        case 5:
          if (Ol(t, e), Pl(e), i & 512 && (ll || a === null || Na(a, a.return)), e.flags & 32) {
            t = e.stateNode;
            try {
              ce(e, Au, t);
            } catch (C) {
              Ee(e, e.return, C);
            }
          }
          i & 4 && e.stateNode != null && (t = e.memoizedProps, Am(
            e,
            t,
            a !== null ? a.memoizedProps : t
          )), i & 1024 && (pv = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (Ol(t, e), Pl(e), i & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            i = e.memoizedProps, a = a !== null ? a.memoizedProps : i, t = e.stateNode;
            try {
              ce(
                e,
                pc,
                t,
                a,
                i
              );
            } catch (C) {
              Ee(e, e.return, C);
            }
          }
          break;
        case 3:
          if (o = $a(), c0 = null, f = Bu, Bu = us(t.containerInfo), Ol(t, e), Bu = f, Pl(e), i & 4 && a !== null && a.memoizedState.isDehydrated)
            try {
              ce(
                e,
                ty,
                t.containerInfo
              );
            } catch (C) {
              Ee(e, e.return, C);
            }
          pv && (pv = !1, fc(e)), t.effectDuration += Wu(o);
          break;
        case 4:
          i = Bu, Bu = us(
            e.stateNode.containerInfo
          ), Ol(t, e), Pl(e), Bu = i;
          break;
        case 12:
          i = $a(), Ol(t, e), Pl(e), e.stateNode.effectDuration += $i(i);
          break;
        case 13:
          Ol(t, e), Pl(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Ev = Vn()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, oc(e, i)));
          break;
        case 22:
          o = e.memoizedState !== null;
          var h = a !== null && a.memoizedState !== null, p = Hc, v = ll;
          if (Hc = p || o, ll = v || h, Ol(t, e), ll = v, Hc = p, Pl(e), i & 8192)
            e: for (t = e.stateNode, t._visibility = o ? t._visibility & ~Cg : t._visibility | Cg, o && (a === null || h || Hc || ll || Ul(e)), a = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (a === null) {
                  h = a = t;
                  try {
                    f = h.stateNode, o ? ce(h, la, f) : ce(
                      h,
                      Pm,
                      h.stateNode,
                      h.memoizedProps
                    );
                  } catch (C) {
                    Ee(h, h.return, C);
                  }
                }
              } else if (t.tag === 6) {
                if (a === null) {
                  h = t;
                  try {
                    d = h.stateNode, o ? ce(h, Im, d) : ce(
                      h,
                      pd,
                      d,
                      h.memoizedProps
                    );
                  } catch (C) {
                    Ee(h, h.return, C);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                a === t && (a = null), t = t.return;
              }
              a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
            }
          i & 4 && (i = e.updateQueue, i !== null && (a = i.retryQueue, a !== null && (i.retryQueue = null, oc(e, a))));
          break;
        case 19:
          Ol(t, e), Pl(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, oc(e, i)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Ol(t, e), Pl(e);
      }
    }
    function Pl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          ce(e, tg, e);
        } catch (a) {
          Ee(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function fc(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          fc(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function Dn(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          Rm(e, t.alternate, t), t = t.sibling;
    }
    function ya(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Jr(
            e,
            e.return,
            Ql
          ), Ul(e);
          break;
        case 1:
          Na(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && Kr(
            e,
            e.return,
            t
          ), Ul(e);
          break;
        case 27:
          ce(
            e,
            Mo,
            e.stateNode
          );
        case 26:
        case 5:
          Na(e, e.return), Ul(e);
          break;
        case 22:
          e.memoizedState === null && Ul(e);
          break;
        case 30:
          Ul(e);
          break;
        default:
          Ul(e);
      }
    }
    function Ul(e) {
      for (e = e.child; e !== null; )
        ya(e), e = e.sibling;
    }
    function bu(e, t, a, i) {
      var o = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          On(
            e,
            a,
            i
          ), bm(a, Ql);
          break;
        case 1:
          if (On(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && ce(
            a,
            fv,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              ce(
                a,
                Pc,
                t,
                e
              );
            } catch (f) {
              Ee(a, a.return, f);
            }
          }
          i && o & 64 && Tm(a), ho(a, a.return);
          break;
        case 27:
          zm(a);
        case 26:
        case 5:
          On(
            e,
            a,
            i
          ), i && t === null && o & 4 && eg(a), ho(a, a.return);
          break;
        case 12:
          if (i && o & 4) {
            o = $a(), On(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += $i(o);
            try {
              ce(
                a,
                Em,
                a,
                t,
                Bg,
                i.effectDuration
              );
            } catch (f) {
              Ee(a, a.return, f);
            }
          } else
            On(
              e,
              a,
              i
            );
          break;
        case 13:
          On(
            e,
            a,
            i
          ), i && o & 4 && mo(e, a);
          break;
        case 22:
          a.memoizedState === null && On(
            e,
            a,
            i
          ), ho(a, a.return);
          break;
        case 30:
          break;
        default:
          On(
            e,
            a,
            i
          );
      }
    }
    function On(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        bu(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function Un(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && Ki(e), a != null && pn(a));
    }
    function an(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (Ki(t), e != null && pn(e));
    }
    function gt(e, t, a, i) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          Wf(
            e,
            t,
            a,
            i
          ), t = t.sibling;
    }
    function Wf(e, t, a, i) {
      var o = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          gt(
            e,
            t,
            a,
            i
          ), o & 2048 && Sm(t, xl | Wn);
          break;
        case 1:
          gt(
            e,
            t,
            a,
            i
          );
          break;
        case 3:
          var f = $a();
          gt(
            e,
            t,
            a,
            i
          ), o & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (Ki(t), a != null && pn(a))), e.passiveEffectDuration += Wu(f);
          break;
        case 12:
          if (o & 2048) {
            o = $a(), gt(
              e,
              t,
              a,
              i
            ), e = t.stateNode, e.passiveEffectDuration += $i(o);
            try {
              ce(
                t,
                Pp,
                t,
                t.alternate,
                Bg,
                e.passiveEffectDuration
              );
            } catch (h) {
              Ee(t, t.return, h);
            }
          } else
            gt(
              e,
              t,
              a,
              i
            );
          break;
        case 13:
          gt(
            e,
            t,
            a,
            i
          );
          break;
        case 23:
          break;
        case 22:
          f = t.stateNode;
          var d = t.alternate;
          t.memoizedState !== null ? f._visibility & Rc ? gt(
            e,
            t,
            a,
            i
          ) : yo(
            e,
            t
          ) : f._visibility & Rc ? gt(
            e,
            t,
            a,
            i
          ) : (f._visibility |= Rc, ci(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0
          )), o & 2048 && Un(d, t);
          break;
        case 24:
          gt(
            e,
            t,
            a,
            i
          ), o & 2048 && an(t.alternate, t);
          break;
        default:
          gt(
            e,
            t,
            a,
            i
          );
      }
    }
    function ci(e, t, a, i, o) {
      for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
        Fr(
          e,
          t,
          a,
          i,
          o
        ), t = t.sibling;
    }
    function Fr(e, t, a, i, o) {
      var f = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          ci(
            e,
            t,
            a,
            i,
            o
          ), Sm(t, xl);
          break;
        case 23:
          break;
        case 22:
          var d = t.stateNode;
          t.memoizedState !== null ? d._visibility & Rc ? ci(
            e,
            t,
            a,
            i,
            o
          ) : yo(
            e,
            t
          ) : (d._visibility |= Rc, ci(
            e,
            t,
            a,
            i,
            o
          )), o && f & 2048 && Un(
            t.alternate,
            t
          );
          break;
        case 24:
          ci(
            e,
            t,
            a,
            i,
            o
          ), o && f & 2048 && an(t.alternate, t);
          break;
        default:
          ci(
            e,
            t,
            a,
            i,
            o
          );
      }
    }
    function yo(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var a = e, i = t, o = i.flags;
          switch (i.tag) {
            case 22:
              yo(
                a,
                i
              ), o & 2048 && Un(
                i.alternate,
                i
              );
              break;
            case 24:
              yo(
                a,
                i
              ), o & 2048 && an(
                i.alternate,
                i
              );
              break;
            default:
              yo(
                a,
                i
              );
          }
          t = t.sibling;
        }
    }
    function sc(e) {
      if (e.subtreeFlags & Wy)
        for (e = e.child; e !== null; )
          oi(e), e = e.sibling;
    }
    function oi(e) {
      switch (e.tag) {
        case 26:
          sc(e), e.flags & Wy && e.memoizedState !== null && dg(
            Bu,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          sc(e);
          break;
        case 3:
        case 4:
          var t = Bu;
          Bu = us(
            e.stateNode.containerInfo
          ), sc(e), Bu = t;
          break;
        case 22:
          e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Wy, Wy = 16777216, sc(e), Wy = t) : sc(e));
          break;
        default:
          sc(e);
      }
    }
    function Ff(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function po(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Nl = i, Um(
              i,
              e
            );
          }
        Ff(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          Om(e), e = e.sibling;
    }
    function Om(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          po(e), e.flags & 2048 && Kf(
            e,
            e.return,
            xl | Wn
          );
          break;
        case 3:
          var t = $a();
          po(e), e.stateNode.passiveEffectDuration += Wu(t);
          break;
        case 12:
          t = $a(), po(e), e.stateNode.passiveEffectDuration += $i(t);
          break;
        case 22:
          t = e.stateNode, e.memoizedState !== null && t._visibility & Rc && (e.return === null || e.return.tag !== 13) ? (t._visibility &= ~Rc, If(e)) : po(e);
          break;
        default:
          po(e);
      }
    }
    function If(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Nl = i, Um(
              i,
              e
            );
          }
        Ff(e);
      }
      for (e = e.child; e !== null; )
        Pf(e), e = e.sibling;
    }
    function Pf(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Kf(
            e,
            e.return,
            xl
          ), If(e);
          break;
        case 22:
          var t = e.stateNode;
          t._visibility & Rc && (t._visibility &= ~Rc, If(e));
          break;
        default:
          If(e);
      }
    }
    function Um(e, t) {
      for (; Nl !== null; ) {
        var a = Nl, i = a;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Kf(
              i,
              t,
              xl
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (i = i.memoizedState.cachePool.pool, i != null && Ki(i));
            break;
          case 24:
            pn(i.memoizedState.cache);
        }
        if (i = a.child, i !== null) i.return = a, Nl = i;
        else
          e: for (a = e; Nl !== null; ) {
            i = Nl;
            var o = i.sibling, f = i.return;
            if (Mm(i), i === a) {
              Nl = null;
              break e;
            }
            if (o !== null) {
              o.return = f, Nl = o;
              break e;
            }
            Nl = f;
          }
      }
    }
    function Cm() {
      s2.forEach(function(e) {
        return e();
      });
    }
    function Hm() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || q.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function ea(e) {
      if ((yt & Aa) !== on && Pe !== 0)
        return Pe & -Pe;
      var t = q.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = Cs, e !== 0 ? e : Vm()) : Sp();
    }
    function lg() {
      sn === 0 && (sn = (Pe & 536870912) === 0 || ot ? Eh() : 536870912);
      var e = In.current;
      return e !== null && (e.flags |= 32), sn;
    }
    function Gt(e, t, a) {
      if (mh && console.error("useInsertionEffect must not schedule updates."), Mv && ($g = !0), (e === Mt && (vt === _s || vt === qs) || e.cancelPendingCommit !== null) && (dc(e, 0), Su(
        e,
        Pe,
        sn,
        !1
      )), Yc(e, a), (yt & Aa) !== 0 && e === Mt) {
        if (ia)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = $e && ne($e) || "Unknown", E1.has(e) || (E1.add(e), t = ne(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              T1 || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), T1 = !0);
          }
      } else
        Zt && au(e, t, a), ig(t), e === Mt && ((yt & Aa) === on && ($o |= a), $t === Bs && Su(
          e,
          Pe,
          sn,
          !1
        )), Ba(e);
    }
    function el(e, t, a) {
      if ((yt & (Aa | _u)) !== on)
        throw Error("Should not already be working.");
      var i = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || nf(e, t), o = i ? Nm(e, t) : td(e, t, !0), f = i;
      do {
        if (o === wc) {
          dh && !i && Su(e, t, 0, !1);
          break;
        } else {
          if (a = e.current.alternate, f && !ag(a)) {
            o = td(e, t, !1), f = !1;
            continue;
          }
          if (o === sh) {
            if (f = t, e.errorRecoveryDisabledLanes & f)
              var d = 0;
            else
              d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
            if (d !== 0) {
              t = d;
              e: {
                o = e;
                var h = d;
                d = lp;
                var p = o.current.memoizedState.isDehydrated;
                if (p && (dc(
                  o,
                  h
                ).flags |= 256), h = td(
                  o,
                  h,
                  !1
                ), h !== sh) {
                  if (Sv && !p) {
                    o.errorRecoveryDisabledLanes |= f, $o |= f, o = Bs;
                    break e;
                  }
                  o = xa, xa = d, o !== null && (xa === null ? xa = o : xa.push.apply(
                    xa,
                    o
                  ));
                }
                o = h;
              }
              if (f = !1, o !== sh) continue;
            }
          }
          if (o === Iy) {
            dc(e, 0), Su(e, t, 0, !0);
            break;
          }
          e: {
            switch (i = e, o) {
              case wc:
              case Iy:
                throw Error("Root did not complete. This is a bug in React.");
              case Bs:
                if ((t & 4194048) !== t) break;
              case kg:
                Su(
                  i,
                  t,
                  sn,
                  !Jo
                );
                break e;
              case sh:
                xa = null;
                break;
              case gv:
              case h1:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (q.actQueue !== null)
              id(
                i,
                a,
                t,
                xa,
                ap,
                Jg,
                sn,
                $o,
                js
              );
            else {
              if ((t & 62914560) === t && (f = Ev + y1 - Vn(), 10 < f)) {
                if (Su(
                  i,
                  t,
                  sn,
                  !Jo
                ), oa(i, 0, !0) !== 0) break e;
                i.timeoutHandle = U1(
                  ol.bind(
                    null,
                    i,
                    a,
                    xa,
                    ap,
                    Jg,
                    t,
                    sn,
                    $o,
                    js,
                    Jo,
                    o,
                    m2,
                    gb,
                    0
                  ),
                  f
                );
                break e;
              }
              ol(
                i,
                a,
                xa,
                ap,
                Jg,
                t,
                sn,
                $o,
                js,
                Jo,
                o,
                d2,
                gb,
                0
              );
            }
          }
        }
        break;
      } while (!0);
      Ba(e);
    }
    function ol(e, t, a, i, o, f, d, h, p, v, C, Y, O, G) {
      if (e.timeoutHandle = Ls, Y = t.subtreeFlags, (Y & 8192 || (Y & 16785408) === 16785408) && (fp = { stylesheets: null, count: 0, unsuspend: rg }, oi(t), Y = hg(), Y !== null)) {
        e.cancelPendingCommit = Y(
          id.bind(
            null,
            e,
            t,
            f,
            a,
            i,
            o,
            d,
            h,
            p,
            C,
            h2,
            O,
            G
          )
        ), Su(
          e,
          f,
          d,
          !v
        );
        return;
      }
      id(
        e,
        t,
        f,
        a,
        i,
        o,
        d,
        h,
        p
      );
    }
    function ag(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!Sa(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
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
    function Su(e, t, a, i) {
      t &= ~Tv, t &= ~$o, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - Cl(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && bp(e, a, t);
    }
    function rc() {
      return (yt & (Aa | _u)) === on ? (hc(0), !1) : !0;
    }
    function Ir() {
      if ($e !== null) {
        if (vt === La)
          var e = $e.return;
        else
          e = $e, yr(), Pa(e), ah = null, Ky = 0, e = $e;
        for (; e !== null; )
          vm(e.alternate, e), e = e.return;
        $e = null;
      }
    }
    function dc(e, t) {
      var a = e.timeoutHandle;
      a !== Ls && (e.timeoutHandle = Ls, M2(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Ir(), Mt = e, $e = a = mn(e.current, null), Pe = t, vt = La, fn = null, Jo = !1, dh = nf(e, t), Sv = !1, $t = wc, js = sn = Tv = $o = Ko = 0, xa = lp = null, Jg = !1, (t & 8) !== 0 && (t |= t & 32);
      var i = e.entangledLanes;
      if (i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; ) {
          var o = 31 - Cl(i), f = 1 << o;
          t |= e[o], i &= ~f;
        }
      return Di = t, Sf(), t = yb(), 1e3 < t - mb && (q.recentlyCreatedOwnerStacks = 0, mb = t), wu.discardPendingWarnings(), a;
    }
    function es(e, t) {
      De = null, q.H = Qg, q.getCurrentStack = null, ia = !1, ba = null, t === Qy || t === Yg ? (t = tm(), vt = ep) : t === Sb ? (t = tm(), vt = m1) : vt = t === n1 ? bv : t !== null && typeof t == "object" && typeof t.then == "function" ? rh : Py, fn = t;
      var a = $e;
      if (a === null)
        $t = Iy, ro(
          e,
          ra(t, e.current)
        );
      else
        switch (a.mode & Ll && ru(a), hl(), vt) {
          case Py:
            P !== null && typeof P.markComponentErrored == "function" && P.markComponentErrored(
              a,
              t,
              Pe
            );
            break;
          case _s:
          case qs:
          case ep:
          case rh:
          case tp:
            P !== null && typeof P.markComponentSuspended == "function" && P.markComponentSuspended(
              a,
              t,
              Pe
            );
        }
    }
    function Pr() {
      var e = q.H;
      return q.H = Qg, e === null ? Qg : e;
    }
    function wm() {
      var e = q.A;
      return q.A = f2, e;
    }
    function ed() {
      $t = Bs, Jo || (Pe & 4194048) !== Pe && In.current !== null || (dh = !0), (Ko & 134217727) === 0 && ($o & 134217727) === 0 || Mt === null || Su(
        Mt,
        Pe,
        sn,
        !1
      );
    }
    function td(e, t, a) {
      var i = yt;
      yt |= Aa;
      var o = Pr(), f = wm();
      if (Mt !== e || Pe !== t) {
        if (Zt) {
          var d = e.memoizedUpdaters;
          0 < d.size && (So(e, Pe), d.clear()), kl(e, t);
        }
        ap = null, dc(e, t);
      }
      Qa(t), t = !1, d = $t;
      e: do
        try {
          if (vt !== La && $e !== null) {
            var h = $e, p = fn;
            switch (vt) {
              case bv:
                Ir(), d = kg;
                break e;
              case ep:
              case _s:
              case qs:
              case rh:
                In.current === null && (t = !0);
                var v = vt;
                if (vt = La, fn = null, fi(e, h, p, v), a && dh) {
                  d = wc;
                  break e;
                }
                break;
              default:
                v = vt, vt = La, fn = null, fi(e, h, p, v);
            }
          }
          ld(), d = $t;
          break;
        } catch (C) {
          es(e, C);
        }
      while (!0);
      return t && e.shellSuspendCounter++, yr(), yt = i, q.H = o, q.A = f, lu(), $e === null && (Mt = null, Pe = 0, Sf()), d;
    }
    function ld() {
      for (; $e !== null; ) _m($e);
    }
    function Nm(e, t) {
      var a = yt;
      yt |= Aa;
      var i = Pr(), o = wm();
      if (Mt !== e || Pe !== t) {
        if (Zt) {
          var f = e.memoizedUpdaters;
          0 < f.size && (So(e, Pe), f.clear()), kl(e, t);
        }
        ap = null, Kg = Vn() + p1, dc(e, t);
      } else
        dh = nf(
          e,
          t
        );
      Qa(t);
      e: do
        try {
          if (vt !== La && $e !== null)
            t: switch (t = $e, f = fn, vt) {
              case Py:
                vt = La, fn = null, fi(
                  e,
                  t,
                  f,
                  Py
                );
                break;
              case _s:
              case qs:
                if (em(f)) {
                  vt = La, fn = null, ad(t);
                  break;
                }
                t = function() {
                  vt !== _s && vt !== qs || Mt !== e || (vt = tp), Ba(e);
                }, f.then(t, t);
                break e;
              case ep:
                vt = tp;
                break e;
              case m1:
                vt = vv;
                break e;
              case tp:
                em(f) ? (vt = La, fn = null, ad(t)) : (vt = La, fn = null, fi(
                  e,
                  t,
                  f,
                  tp
                ));
                break;
              case vv:
                var d = null;
                switch ($e.tag) {
                  case 26:
                    d = $e.memoizedState;
                  case 5:
                  case 27:
                    var h = $e;
                    if (!d || is(d)) {
                      vt = La, fn = null;
                      var p = h.sibling;
                      if (p !== null) $e = p;
                      else {
                        var v = h.return;
                        v !== null ? ($e = v, ts(v)) : $e = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                vt = La, fn = null, fi(
                  e,
                  t,
                  f,
                  vv
                );
                break;
              case rh:
                vt = La, fn = null, fi(
                  e,
                  t,
                  f,
                  rh
                );
                break;
              case bv:
                Ir(), $t = kg;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          q.actQueue !== null ? ld() : Bm();
          break;
        } catch (C) {
          es(e, C);
        }
      while (!0);
      return yr(), q.H = i, q.A = o, yt = a, $e !== null ? (P !== null && typeof P.markRenderYielded == "function" && P.markRenderYielded(), wc) : (lu(), Mt = null, Pe = 0, Sf(), $t);
    }
    function Bm() {
      for (; $e !== null && !Sg(); )
        _m($e);
    }
    function _m(e) {
      var t = e.alternate;
      (e.mode & Ll) !== Ct ? (pr(e), t = ce(
        e,
        kr,
        t,
        e,
        Di
      ), ru(e)) : t = ce(
        e,
        kr,
        t,
        e,
        Di
      ), e.memoizedProps = e.pendingProps, t === null ? ts(e) : $e = t;
    }
    function ad(e) {
      var t = ce(e, nd, e);
      e.memoizedProps = e.pendingProps, t === null ? ts(e) : $e = t;
    }
    function nd(e) {
      var t = e.alternate, a = (e.mode & Ll) !== Ct;
      switch (a && pr(e), e.tag) {
        case 15:
        case 0:
          t = hm(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            Pe
          );
          break;
        case 11:
          t = hm(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            Pe
          );
          break;
        case 5:
          Pa(e);
        default:
          vm(t, e), e = $e = Vh(e, Di), t = kr(t, e, Di);
      }
      return a && ru(e), t;
    }
    function fi(e, t, a, i) {
      yr(), Pa(t), ah = null, Ky = 0;
      var o = t.return;
      try {
        if (Vf(
          e,
          o,
          t,
          a,
          Pe
        )) {
          $t = Iy, ro(
            e,
            ra(a, e.current)
          ), $e = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw $e = o, f;
        $t = Iy, ro(
          e,
          ra(a, e.current)
        ), $e = null;
        return;
      }
      t.flags & 32768 ? (ot || i === Py ? e = !0 : dh || (Pe & 536870912) !== 0 ? e = !1 : (Jo = e = !0, (i === _s || i === qs || i === ep || i === rh) && (i = In.current, i !== null && i.tag === 13 && (i.flags |= 16384))), ud(t, e)) : ts(t);
    }
    function ts(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          ud(
            t,
            Jo
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, pr(t), a = ce(
          t,
          $p,
          a,
          t,
          Di
        ), (t.mode & Ll) !== Ct && Wi(t), a !== null) {
          $e = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          $e = t;
          return;
        }
        $e = t = e;
      } while (t !== null);
      $t === wc && ($t = h1);
    }
    function ud(e, t) {
      do {
        var a = Wp(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, $e = a;
          return;
        }
        if ((e.mode & Ll) !== Ct) {
          Wi(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          $e = e;
          return;
        }
        $e = e = a;
      } while (e !== null);
      $t = kg, $e = null;
    }
    function id(e, t, a, i, o, f, d, h, p) {
      e.cancelPendingCommit = null;
      do
        go();
      while (Zl !== Ys);
      if (wu.flushLegacyContextWarning(), wu.flushPendingUnsafeLifecycleWarnings(), (yt & (Aa | _u)) !== on)
        throw Error("Should not already be working.");
      if (P !== null && typeof P.markCommitStarted == "function" && P.markCommitStarted(a), t === null) zt();
      else {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= W0, T0(
          e,
          a,
          f,
          d,
          h,
          p
        ), e === Mt && ($e = Mt = null, Pe = 0), hh = t, Fo = e, Io = a, xv = f, zv = o, S1 = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Gm(Bo, function() {
          return ls(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), Bg = Id(), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = q.T, q.T = null, o = xe.p, xe.p = El, d = yt, yt |= _u;
          try {
            $r(e, t, a);
          } finally {
            yt = d, xe.p = o, q.T = i;
          }
        }
        Zl = g1, Cn(), cd(), ng();
      }
    }
    function Cn() {
      if (Zl === g1) {
        Zl = Ys;
        var e = Fo, t = hh, a = Io, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = q.T, q.T = null;
          var o = xe.p;
          xe.p = El;
          var f = yt;
          yt |= _u;
          try {
            oh = a, fh = e, Dm(t, e), fh = oh = null, a = _v;
            var d = Bp(e.containerInfo), h = a.focusedElem, p = a.selectionRange;
            if (d !== h && h && h.ownerDocument && Np(
              h.ownerDocument.documentElement,
              h
            )) {
              if (p !== null && qh(h)) {
                var v = p.start, C = p.end;
                if (C === void 0 && (C = v), "selectionStart" in h)
                  h.selectionStart = v, h.selectionEnd = Math.min(
                    C,
                    h.value.length
                  );
                else {
                  var Y = h.ownerDocument || document, O = Y && Y.defaultView || window;
                  if (O.getSelection) {
                    var G = O.getSelection(), oe = h.textContent.length, ze = Math.min(
                      p.start,
                      oe
                    ), Dt = p.end === void 0 ? ze : Math.min(p.end, oe);
                    !G.extend && ze > Dt && (d = Dt, Dt = ze, ze = d);
                    var tt = _h(
                      h,
                      ze
                    ), T = _h(
                      h,
                      Dt
                    );
                    if (tt && T && (G.rangeCount !== 1 || G.anchorNode !== tt.node || G.anchorOffset !== tt.offset || G.focusNode !== T.node || G.focusOffset !== T.offset)) {
                      var E = Y.createRange();
                      E.setStart(tt.node, tt.offset), G.removeAllRanges(), ze > Dt ? (G.addRange(E), G.extend(T.node, T.offset)) : (E.setEnd(T.node, T.offset), G.addRange(E));
                    }
                  }
                }
              }
              for (Y = [], G = h; G = G.parentNode; )
                G.nodeType === 1 && Y.push({
                  element: G,
                  left: G.scrollLeft,
                  top: G.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < Y.length; h++) {
                var A = Y[h];
                A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
              }
            }
            s0 = !!Bv, _v = Bv = null;
          } finally {
            yt = f, xe.p = o, q.T = i;
          }
        }
        e.current = t, Zl = v1;
      }
    }
    function cd() {
      if (Zl === v1) {
        Zl = Ys;
        var e = Fo, t = hh, a = Io, i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = q.T, q.T = null;
          var o = xe.p;
          xe.p = El;
          var f = yt;
          yt |= _u;
          try {
            P !== null && typeof P.markLayoutEffectsStarted == "function" && P.markLayoutEffectsStarted(a), oh = a, fh = e, Rm(
              e,
              t.alternate,
              t
            ), fh = oh = null, P !== null && typeof P.markLayoutEffectsStopped == "function" && P.markLayoutEffectsStopped();
          } finally {
            yt = f, xe.p = o, q.T = i;
          }
        }
        Zl = b1;
      }
    }
    function ng() {
      if (Zl === y2 || Zl === b1) {
        Zl = Ys, Y0();
        var e = Fo, t = hh, a = Io, i = S1, o = (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0;
        o ? Zl = Av : (Zl = Ys, hh = Fo = null, Hn(e, e.pendingLanes), Gs = 0, up = null);
        var f = e.pendingLanes;
        if (f === 0 && (Wo = null), o || bo(e), o = xh(a), t = t.stateNode, Tl && typeof Tl.onCommitFiberRoot == "function")
          try {
            var d = (t.current.flags & 128) === 128;
            switch (o) {
              case El:
                var h = Ud;
                break;
              case cn:
                h = vs;
                break;
              case Ou:
                h = Bo;
                break;
              case Nd:
                h = bs;
                break;
              default:
                h = Bo;
            }
            Tl.onCommitFiberRoot(
              bi,
              t,
              h,
              d
            );
          } catch (Y) {
            na || (na = !0, console.error(
              "React instrumentation encountered an error: %s",
              Y
            ));
          }
        if (Zt && e.memoizedUpdaters.clear(), Cm(), i !== null) {
          d = q.T, h = xe.p, xe.p = El, q.T = null;
          try {
            var p = e.onRecoverableError;
            for (t = 0; t < i.length; t++) {
              var v = i[t], C = ug(v.stack);
              ce(
                v.source,
                p,
                v.value,
                C
              );
            }
          } finally {
            q.T = d, xe.p = h;
          }
        }
        (Io & 3) !== 0 && go(), Ba(e), f = e.pendingLanes, (a & 4194090) !== 0 && (f & 42) !== 0 ? (qg = !0, e === Rv ? np++ : (np = 0, Rv = e)) : np = 0, hc(0), zt();
      }
    }
    function ug(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function Hn(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, pn(t)));
    }
    function go(e) {
      return Cn(), cd(), ng(), ls();
    }
    function ls() {
      if (Zl !== Av) return !1;
      var e = Fo, t = xv;
      xv = 0;
      var a = xh(Io), i = Ou > a ? Ou : a;
      a = q.T;
      var o = xe.p;
      try {
        xe.p = i, q.T = null, i = zv, zv = null;
        var f = Fo, d = Io;
        if (Zl = Ys, hh = Fo = null, Io = 0, (yt & (Aa | _u)) !== on)
          throw Error("Cannot flush passive effects while already rendering.");
        Mv = !0, $g = !1, P !== null && typeof P.markPassiveEffectsStarted == "function" && P.markPassiveEffectsStarted(d);
        var h = yt;
        if (yt |= _u, Om(f.current), Wf(
          f,
          f.current,
          d,
          i
        ), P !== null && typeof P.markPassiveEffectsStopped == "function" && P.markPassiveEffectsStopped(), bo(f), yt = h, hc(0, !1), $g ? f === up ? Gs++ : (Gs = 0, up = f) : Gs = 0, $g = Mv = !1, Tl && typeof Tl.onPostCommitFiberRoot == "function")
          try {
            Tl.onPostCommitFiberRoot(bi, f);
          } catch (v) {
            na || (na = !0, console.error(
              "React instrumentation encountered an error: %s",
              v
            ));
          }
        var p = f.current.stateNode;
        return p.effectDuration = 0, p.passiveEffectDuration = 0, !0;
      } finally {
        xe.p = o, q.T = a, Hn(e, t);
      }
    }
    function vo(e, t, a) {
      t = ra(a, t), t = Dl(e.stateNode, t, 2), e = Fa(e, t, 2), e !== null && (Yc(e, 2), Ba(e));
    }
    function Ee(e, t, a) {
      if (mh = !1, e.tag === 3)
        vo(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            vo(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Wo === null || !Wo.has(i))) {
              e = ra(a, e), a = Yt(2), i = Fa(t, a, 2), i !== null && (Gf(
                a,
                i,
                t,
                e
              ), Yc(i, 2), Ba(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function qm(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new r2();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (Sv = !0, o.add(a), i = H0.bind(null, e, t, a), Zt && So(e, a), t.then(i, i));
    }
    function H0(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Hm() && q.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Mt === e && (Pe & a) === a && ($t === Bs || $t === gv && (Pe & 62914560) === Pe && Vn() - Ev < y1 ? (yt & Aa) === on && dc(e, 0) : Tv |= a, js === Pe && (js = 0)), Ba(e);
    }
    function jm(e, t) {
      t === 0 && (t = uf()), e = Jl(e, t), e !== null && (Yc(e, t), Ba(e));
    }
    function as(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), jm(e, a);
    }
    function si(e, t) {
      var a = 0;
      switch (e.tag) {
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), jm(e, a);
    }
    function od(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === Uo;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && ce(
            o,
            Ym,
            i,
            o,
            (o.mode & rb) === Ct
          ) : od(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? ce(
            o,
            Ym,
            i,
            o
          ) : o.subtreeFlags & 67108864 && ce(
            o,
            od,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function Ym(e, t) {
      var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
      Ze(!0);
      try {
        ya(t), a && Pf(t), bu(e, t.alternate, t, !1), a && Fr(e, t, 0, null, !1, 0);
      } finally {
        Ze(!1);
      }
    }
    function bo(e) {
      var t = !0;
      e.current.mode & (ca | Hu) || (t = !1), od(
        e,
        e.current,
        t
      );
    }
    function nn(e) {
      if ((yt & Aa) === on) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = ne(e) || "ReactComponent", Wg !== null) {
            if (Wg.has(t)) return;
            Wg.add(t);
          } else Wg = /* @__PURE__ */ new Set([t]);
          ce(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function So(e, t) {
      Zt && e.memoizedUpdaters.forEach(function(a) {
        au(e, a, t);
      });
    }
    function Gm(e, t) {
      var a = q.actQueue;
      return a !== null ? (a.push(t), v2) : Od(e, t);
    }
    function ig(e) {
      Hm() && q.actQueue === null && ce(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          ne(e)
        );
      });
    }
    function Ba(e) {
      e !== yh && e.next === null && (yh === null ? Fg = yh = e : yh = yh.next = e), Ig = !0, q.actQueue !== null ? Ov || (Ov = !0, tl()) : Dv || (Dv = !0, tl());
    }
    function hc(e, t) {
      if (!Uv && Ig) {
        Uv = !0;
        do
          for (var a = !1, i = Fg; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - Cl(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, rd(i, f));
            } else
              f = Pe, f = oa(
                i,
                i === Mt ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== Ls
              ), (f & 3) === 0 || nf(i, f) || (a = !0, rd(i, f));
            i = i.next;
          }
        while (a);
        Uv = !1;
      }
    }
    function fd() {
      sd();
    }
    function sd() {
      Ig = Ov = Dv = !1;
      var e = 0;
      Vs !== 0 && (To() && (e = Vs), Vs = 0);
      for (var t = Vn(), a = null, i = Fg; i !== null; ) {
        var o = i.next, f = wn(i, t);
        f === 0 ? (i.next = null, a === null ? Fg = o : a.next = o, o === null && (yh = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (Ig = !0)), i = o;
      }
      hc(e);
    }
    function wn(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Cl(f), h = 1 << d, p = o[d];
        p === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = vp(h, t)) : p <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = Mt, a = Pe, a = oa(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Ls
      ), i = e.callbackNode, a === 0 || e === t && (vt === _s || vt === qs) || e.cancelPendingCommit !== null)
        return i !== null && dd(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || nf(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || q.actQueue !== null && i !== Cv)
          dd(i);
        else return t;
        switch (xh(a)) {
          case El:
          case cn:
            a = vs;
            break;
          case Ou:
            a = Bo;
            break;
          case Nd:
            a = bs;
            break;
          default:
            a = Bo;
        }
        return i = Vt.bind(null, e), q.actQueue !== null ? (q.actQueue.push(i), a = Cv) : a = Od(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && dd(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Vt(e, t) {
      if (qg = _g = !1, Zl !== Ys && Zl !== Av)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (go() && e.callbackNode !== a)
        return null;
      var i = Pe;
      return i = oa(
        e,
        e === Mt ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Ls
      ), i === 0 ? null : (el(
        e,
        i,
        t
      ), wn(e, Vn()), e.callbackNode != null && e.callbackNode === a ? Vt.bind(null, e) : null);
    }
    function rd(e, t) {
      if (go()) return null;
      _g = qg, qg = !1, el(e, t, !0);
    }
    function dd(e) {
      e !== Cv && e !== null && j0(e);
    }
    function tl() {
      q.actQueue !== null && q.actQueue.push(function() {
        return sd(), null;
      }), D2(function() {
        (yt & (Aa | _u)) !== on ? Od(
          Ud,
          fd
        ) : sd();
      });
    }
    function Vm() {
      return Vs === 0 && (Vs = Eh()), Vs;
    }
    function Xm(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (F(e, "action"), Jc("" + e));
    }
    function Lm(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function Ot(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = Xm(
          (o[ua] || null).action
        ), d = i.submitter;
        d && (t = (t = d[ua] || null) ? Xm(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new Se(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (Vs !== 0) {
                    var p = d ? Lm(
                      o,
                      d
                    ) : new FormData(o), v = {
                      pending: !0,
                      data: p,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(v), ec(
                      a,
                      v,
                      null,
                      p
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), p = d ? Lm(
                    o,
                    d
                  ) : new FormData(o), v = {
                    pending: !0,
                    data: p,
                    method: o.method,
                    action: f
                  }, Object.freeze(v), ec(
                    a,
                    v,
                    f,
                    p
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function gl(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        dv(i);
      }
      e.currentTarget = null;
    }
    function Nn(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], p = h.instance, v = h.currentTarget;
              if (h = h.listener, p !== o && f.isPropagationStopped())
                break e;
              p !== null ? ce(
                p,
                gl,
                f,
                h,
                v
              ) : gl(f, h, v), o = p;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], p = h.instance, v = h.currentTarget, h = h.listener, p !== o && f.isPropagationStopped())
                break e;
              p !== null ? ce(
                p,
                gl,
                f,
                h,
                v
              ) : gl(f, h, v), o = p;
            }
        }
      }
    }
    function ke(e, t) {
      Hv.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[py];
      a === void 0 && (a = t[py] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (md(t, e, 2, !1), a.add(i));
    }
    function hd(e, t, a) {
      Hv.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), md(
        a,
        e,
        i,
        t
      );
    }
    function Qm(e) {
      if (!e[Pg]) {
        e[Pg] = !0, Eg.forEach(function(a) {
          a !== "selectionchange" && (Hv.has(a) || hd(a, !1, e), hd(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Pg] || (t[Pg] = !0, hd("selectionchange", !1, t));
      }
    }
    function md(e, t, a, i) {
      switch (zd(t)) {
        case El:
          var o = B0;
          break;
        case cn:
          o = xd;
          break;
        default:
          o = mi;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !D || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
        passive: o
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function Yl(e, t, a, i, o) {
      var f = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var p = d.tag;
                if ((p === 3 || p === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = nu(h), d === null) return;
              if (p = d.tag, p === 5 || p === 6 || p === 26 || p === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      ur(function() {
        var v = f, C = Gi(a), Y = [];
        e: {
          var O = sb.get(e);
          if (O !== void 0) {
            var G = Se, oe = e;
            switch (e) {
              case "keypress":
                if (Kc(a) === 0) break e;
              case "keydown":
              case "keyup":
                G = BS;
                break;
              case "focusin":
                oe = "focus", G = lt;
                break;
              case "focusout":
                oe = "blur", G = lt;
                break;
              case "beforeblur":
              case "afterblur":
                G = lt;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                G = Xe;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                G = Ae;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                G = jS;
                break;
              case ib:
              case cb:
              case ob:
                G = L0;
                break;
              case fb:
                G = GS;
                break;
              case "scroll":
              case "scrollend":
                G = R;
                break;
              case "wheel":
                G = XS;
                break;
              case "copy":
              case "cut":
              case "paste":
                G = DS;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                G = Iv;
                break;
              case "toggle":
              case "beforetoggle":
                G = QS;
            }
            var ze = (t & 4) !== 0, Dt = !ze && (e === "scroll" || e === "scrollend"), tt = ze ? O !== null ? O + "Capture" : null : O;
            ze = [];
            for (var T = v, E; T !== null; ) {
              var A = T;
              if (E = A.stateNode, A = A.tag, A !== 5 && A !== 26 && A !== 27 || E === null || tt === null || (A = cu(T, tt), A != null && ze.push(
                Gl(
                  T,
                  A,
                  E
                )
              )), Dt) break;
              T = T.return;
            }
            0 < ze.length && (O = new G(
              O,
              oe,
              null,
              a,
              C
            ), Y.push({
              event: O,
              listeners: ze
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (O = e === "mouseover" || e === "pointerover", G = e === "mouseout" || e === "pointerout", O && a !== s && (oe = a.relatedTarget || a.fromElement) && (nu(oe) || oe[Ti]))
              break e;
            if ((G || O) && (O = C.window === C ? C : (O = C.ownerDocument) ? O.defaultView || O.parentWindow : window, G ? (oe = a.relatedTarget || a.toElement, G = v, oe = oe ? nu(oe) : null, oe !== null && (Dt = Oe(oe), ze = oe.tag, oe !== Dt || ze !== 5 && ze !== 27 && ze !== 6) && (oe = null)) : (G = null, oe = v), G !== oe)) {
              if (ze = Xe, A = "onMouseLeave", tt = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (ze = Iv, A = "onPointerLeave", tt = "onPointerEnter", T = "pointer"), Dt = G == null ? O : qu(G), E = oe == null ? O : qu(oe), O = new ze(
                A,
                T + "leave",
                G,
                a,
                C
              ), O.target = Dt, O.relatedTarget = E, A = null, nu(C) === v && (ze = new ze(
                tt,
                T + "enter",
                oe,
                a,
                C
              ), ze.target = E, ze.relatedTarget = Dt, A = ze), Dt = A, G && oe)
                t: {
                  for (ze = G, tt = oe, T = 0, E = ze; E; E = fl(E))
                    T++;
                  for (E = 0, A = tt; A; A = fl(A))
                    E++;
                  for (; 0 < T - E; )
                    ze = fl(ze), T--;
                  for (; 0 < E - T; )
                    tt = fl(tt), E--;
                  for (; T--; ) {
                    if (ze === tt || tt !== null && ze === tt.alternate)
                      break t;
                    ze = fl(ze), tt = fl(tt);
                  }
                  ze = null;
                }
              else ze = null;
              G !== null && Zm(
                Y,
                O,
                G,
                ze,
                !1
              ), oe !== null && Dt !== null && Zm(
                Y,
                Dt,
                oe,
                ze,
                !0
              );
            }
          }
          e: {
            if (O = v ? qu(v) : window, G = O.nodeName && O.nodeName.toLowerCase(), G === "select" || G === "input" && O.type === "file")
              var V = Nh;
            else if (Up(O))
              if (nb)
                V = D0;
              else {
                V = Bh;
                var I = R0;
              }
            else
              G = O.nodeName, !G || G.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? v && Yi(v.elementType) && (V = Nh) : V = M0;
            if (V && (V = V(e, v))) {
              fr(
                Y,
                V,
                a,
                C
              );
              break e;
            }
            I && I(e, O, v), e === "focusout" && v && O.type === "number" && v.memoizedProps.value != null && Ps(O, "number", O.value);
          }
          switch (I = v ? qu(v) : window, e) {
            case "focusin":
              (Up(I) || I.contentEditable === "true") && (Qd = I, Z0 = v, _y = null);
              break;
            case "focusout":
              _y = Z0 = Qd = null;
              break;
            case "mousedown":
              k0 = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              k0 = !1, _p(
                Y,
                a,
                C
              );
              break;
            case "selectionchange":
              if (KS) break;
            case "keydown":
            case "keyup":
              _p(
                Y,
                a,
                C
              );
          }
          var He;
          if (Q0)
            e: {
              switch (e) {
                case "compositionstart":
                  var fe = "onCompositionStart";
                  break e;
                case "compositionend":
                  fe = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  fe = "onCompositionUpdate";
                  break e;
              }
              fe = void 0;
            }
          else
            Ld ? jl(e, a) && (fe = "onCompositionEnd") : e === "keydown" && a.keyCode === Pv && (fe = "onCompositionStart");
          fe && (eb && a.locale !== "ko" && (Ld || fe !== "onCompositionStart" ? fe === "onCompositionEnd" && Ld && (He = ou()) : (k = C, U = "value" in k ? k.value : k.textContent, Ld = !0)), I = ns(
            v,
            fe
          ), 0 < I.length && (fe = new Fv(
            fe,
            e,
            null,
            a,
            C
          ), Y.push({
            event: fe,
            listeners: I
          }), He ? fe.data = He : (He = Qu(a), He !== null && (fe.data = He)))), (He = kS ? or(e, a) : gf(e, a)) && (fe = ns(
            v,
            "onBeforeInput"
          ), 0 < fe.length && (I = new US(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            C
          ), Y.push({
            event: I,
            listeners: fe
          }), I.data = He)), Ot(
            Y,
            e,
            v,
            a,
            C
          );
        }
        Nn(Y, t);
      });
    }
    function Gl(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function ns(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = cu(e, a), o != null && i.unshift(
          Gl(e, o, f)
        ), o = cu(e, t), o != null && i.push(
          Gl(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function fl(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Zm(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, p = h.alternate, v = h.stateNode;
        if (h = h.tag, p !== null && p === i) break;
        h !== 5 && h !== 26 && h !== 27 || v === null || (p = v, o ? (v = cu(a, f), v != null && d.unshift(
          Gl(a, v, p)
        )) : o || (v = cu(a, f), v != null && d.push(
          Gl(a, v, p)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function Bn(e, t) {
      kc(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || Hy || (Hy = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Ga,
        possibleRegistrationNames: Ec
      };
      Yi(e) || typeof t.is == "string" || Ch(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function Ut(e, t, a, i) {
      t !== a && (a = vl(a), vl(t) !== a && (i[e] = t));
    }
    function ri(e, t, a) {
      t.forEach(function(i) {
        a[Jm(i)] = i === "style" ? yc(e) : e.getAttribute(i);
      });
    }
    function _a(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function yd(e, t) {
      return e = e.namespaceURI === Rs || e.namespaceURI === Xo ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function vl(e) {
      return B(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        ye(e)
      ), te(e)), (typeof e == "string" ? e : "" + e).replace(b2, `
`).replace(S2, "");
    }
    function km(e, t) {
      return t = vl(t), vl(e) === t;
    }
    function Tu() {
    }
    function it(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (yf(i, t, !1), t === "body" || t === "textarea" && i === "" || ji(e, i)) : (typeof i == "number" || typeof i == "bigint") && (yf("" + i, t, !1), t !== "body" && ji(e, "" + i));
          break;
        case "className":
          of(e, "class", i);
          break;
        case "tabIndex":
          of(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          of(e, a, i);
          break;
        case "style":
          pf(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            of(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          F(i, a), i = Jc("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || l0 || (l0 = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || t0 || (t0 = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || e0 ? t !== "button" || o.type == null || o.type === "submit" || e0 ? typeof i == "function" && (o.name == null || z1 || (z1 = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || l0 || (l0 = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || t0 || (t0 = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (e0 = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (e0 = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && it(e, t, "name", o.name, o, null), it(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), it(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), it(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (it(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), it(e, t, "method", o.method, o, null), it(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          F(i, a), i = Jc("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && _a(a, i), e.onclick = Tu);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && _a(a, i), ke("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && _a(a, i), ke("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
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
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          F(i, a), a = Jc("" + i), e.setAttributeNS(Xs, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (F(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || a0[a] || (a0[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
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
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (F(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (F(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (F(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          ke("beforetoggle", e), ke("toggle", e), cf(e, "popover", i);
          break;
        case "xlinkActuate":
          Za(
            e,
            Xs,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          Za(
            e,
            Xs,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          Za(
            e,
            Xs,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          Za(
            e,
            Xs,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          Za(
            e,
            Xs,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          Za(
            e,
            Xs,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          Za(
            e,
            wv,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          Za(
            e,
            wv,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          Za(
            e,
            wv,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), cf(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          R1 || i == null || typeof i != "object" || (R1 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = nr(a), cf(e, a, i)) : Ga.hasOwnProperty(a) && i != null && typeof i != "function" && _a(a, i);
      }
    }
    function mc(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          pf(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? ji(e, i) : (typeof i == "number" || typeof i == "bigint") && ji(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && _a(a, i), ke("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && _a(a, i), ke("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && _a(a, i), e.onclick = Tu);
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
          if (Ga.hasOwnProperty(a))
            i != null && typeof i != "function" && _a(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[ua] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : cf(e, a, i);
            }
      }
    }
    function Xt(e, t, a) {
      switch (Bn(t, a), t) {
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
          ke("error", e), ke("load", e);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    it(e, t, f, d, a, null);
                }
            }
          o && it(e, t, "srcSet", a.srcSet, a, null), i && it(e, t, "src", a.src, a, null);
          return;
        case "input":
          Yu("input", a), ke("invalid", e);
          var h = f = d = o = null, p = null, v = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var C = a[i];
              if (C != null)
                switch (i) {
                  case "name":
                    o = C;
                    break;
                  case "type":
                    d = C;
                    break;
                  case "checked":
                    p = C;
                    break;
                  case "defaultChecked":
                    v = C;
                    break;
                  case "value":
                    f = C;
                    break;
                  case "defaultValue":
                    h = C;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (C != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    it(e, t, i, C, a, null);
                }
            }
          Gu(e, a), zp(
            e,
            f,
            h,
            p,
            v,
            d,
            o,
            !1
          ), uu(e);
          return;
        case "select":
          Yu("select", a), ke("invalid", e), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  it(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          df(e, a), t = f, a = d, e.multiple = !!i, t != null ? iu(e, !!i, t, !1) : a != null && iu(e, !!i, a, !0);
          return;
        case "textarea":
          Yu("textarea", a), ke("invalid", e), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  it(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          dn(e, a), Rh(e, i, o, f), uu(e);
          return;
        case "option":
          zh(e, a);
          for (p in a)
            if (a.hasOwnProperty(p) && (i = a[p], i != null))
              switch (p) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  it(e, t, p, i, a, null);
              }
          return;
        case "dialog":
          ke("beforetoggle", e), ke("toggle", e), ke("cancel", e), ke("close", e);
          break;
        case "iframe":
        case "object":
          ke("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < ip.length; i++)
            ke(ip[i], e);
          break;
        case "image":
          ke("error", e), ke("load", e);
          break;
        case "details":
          ke("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          ke("error", e), ke("load", e);
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
          for (v in a)
            if (a.hasOwnProperty(v) && (i = a[v], i != null))
              switch (v) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  it(e, t, v, i, a, null);
              }
          return;
        default:
          if (Yi(t)) {
            for (C in a)
              a.hasOwnProperty(C) && (i = a[C], i !== void 0 && mc(
                e,
                t,
                C,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && it(e, t, h, i, a, null));
    }
    function cg(e, t, a, i) {
      switch (Bn(t, i), t) {
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
          var o = null, f = null, d = null, h = null, p = null, v = null, C = null;
          for (G in a) {
            var Y = a[G];
            if (a.hasOwnProperty(G) && Y != null)
              switch (G) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  p = Y;
                default:
                  i.hasOwnProperty(G) || it(
                    e,
                    t,
                    G,
                    null,
                    i,
                    Y
                  );
              }
          }
          for (var O in i) {
            var G = i[O];
            if (Y = a[O], i.hasOwnProperty(O) && (G != null || Y != null))
              switch (O) {
                case "type":
                  f = G;
                  break;
                case "name":
                  o = G;
                  break;
                case "checked":
                  v = G;
                  break;
                case "defaultChecked":
                  C = G;
                  break;
                case "value":
                  d = G;
                  break;
                case "defaultValue":
                  h = G;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (G != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  G !== Y && it(
                    e,
                    t,
                    O,
                    G,
                    i,
                    Y
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || x1 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), x1 = !0), !t || i || A1 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), A1 = !0), Vu(
            e,
            d,
            h,
            p,
            v,
            C,
            f,
            o
          );
          return;
        case "select":
          G = d = h = O = null;
          for (f in a)
            if (p = a[f], a.hasOwnProperty(f) && p != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  G = p;
                default:
                  i.hasOwnProperty(f) || it(
                    e,
                    t,
                    f,
                    null,
                    i,
                    p
                  );
              }
          for (o in i)
            if (f = i[o], p = a[o], i.hasOwnProperty(o) && (f != null || p != null))
              switch (o) {
                case "value":
                  O = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== p && it(
                    e,
                    t,
                    o,
                    f,
                    i,
                    p
                  );
              }
          i = h, t = d, a = G, O != null ? iu(e, !!t, O, !1) : !!a != !!t && (i != null ? iu(e, !!t, i, !0) : iu(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          G = O = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  it(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  O = o;
                  break;
                case "defaultValue":
                  G = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && it(e, t, d, o, i, f);
              }
          er(e, O, G);
          return;
        case "option":
          for (var oe in a)
            if (O = a[oe], a.hasOwnProperty(oe) && O != null && !i.hasOwnProperty(oe))
              switch (oe) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  it(
                    e,
                    t,
                    oe,
                    null,
                    i,
                    O
                  );
              }
          for (p in i)
            if (O = i[p], G = a[p], i.hasOwnProperty(p) && O !== G && (O != null || G != null))
              switch (p) {
                case "selected":
                  e.selected = O && typeof O != "function" && typeof O != "symbol";
                  break;
                default:
                  it(
                    e,
                    t,
                    p,
                    O,
                    i,
                    G
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
          for (var ze in a)
            O = a[ze], a.hasOwnProperty(ze) && O != null && !i.hasOwnProperty(ze) && it(
              e,
              t,
              ze,
              null,
              i,
              O
            );
          for (v in i)
            if (O = i[v], G = a[v], i.hasOwnProperty(v) && O !== G && (O != null || G != null))
              switch (v) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (O != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  it(
                    e,
                    t,
                    v,
                    O,
                    i,
                    G
                  );
              }
          return;
        default:
          if (Yi(t)) {
            for (var Dt in a)
              O = a[Dt], a.hasOwnProperty(Dt) && O !== void 0 && !i.hasOwnProperty(Dt) && mc(
                e,
                t,
                Dt,
                void 0,
                i,
                O
              );
            for (C in i)
              O = i[C], G = a[C], !i.hasOwnProperty(C) || O === G || O === void 0 && G === void 0 || mc(
                e,
                t,
                C,
                O,
                i,
                G
              );
            return;
          }
      }
      for (var tt in a)
        O = a[tt], a.hasOwnProperty(tt) && O != null && !i.hasOwnProperty(tt) && it(e, t, tt, null, i, O);
      for (Y in i)
        O = i[Y], G = a[Y], !i.hasOwnProperty(Y) || O === G || O == null && G == null || it(e, t, Y, O, i, G);
    }
    function Jm(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function yc(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function Km(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (le(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || zs.has(f) ? (le(d, f), i += o + f.replace(Uu, "-$1").toLowerCase().replace(Cu, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(Uu, "-$1").toLowerCase().replace(Cu, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = vl(i), vl(t) !== i && (a.style = yc(e)));
      }
    }
    function Vl(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (F(i, t), e === "" + i)
              return;
        }
      Ut(t, e, i, f);
    }
    function $m(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      Ut(t, e, i, f);
    }
    function Wm(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (F(i, a), e === "" + i)
              return;
        }
      Ut(t, e, i, f);
    }
    function og(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (F(i, t), e === "" + i))
              return;
        }
      Ut(t, e, i, f);
    }
    function st(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (F(i, t), a = Jc("" + i), e === a)
              return;
        }
      Ut(t, e, i, f);
    }
    function Tt(e, t, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (Yi(t)) {
        for (var p in a)
          if (a.hasOwnProperty(p)) {
            var v = a[p];
            if (v != null) {
              if (Ga.hasOwnProperty(p))
                typeof v != "function" && _a(p, v);
              else if (a.suppressHydrationWarning !== !0)
                switch (p) {
                  case "children":
                    typeof v != "string" && typeof v != "number" || Ut(
                      "children",
                      e.textContent,
                      v,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, v = v ? v.__html : void 0, v != null && (v = yd(e, v), Ut(
                      p,
                      d,
                      v,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(p), Km(e, v, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(p.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      p
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = Tp(
                      e,
                      "class",
                      v
                    ), Ut(
                      "className",
                      d,
                      v,
                      o
                    );
                    continue;
                  default:
                    i.context === Bc && t !== "svg" && t !== "math" ? f.delete(p.toLowerCase()) : f.delete(p), d = Tp(
                      e,
                      p,
                      v
                    ), Ut(
                      p,
                      d,
                      v,
                      o
                    );
                }
            }
          }
      } else
        for (v in a)
          if (a.hasOwnProperty(v) && (p = a[v], p != null)) {
            if (Ga.hasOwnProperty(v))
              typeof p != "function" && _a(v, p);
            else if (a.suppressHydrationWarning !== !0)
              switch (v) {
                case "children":
                  typeof p != "string" && typeof p != "number" || Ut(
                    "children",
                    e.textContent,
                    p,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, p = p ? p.__html : void 0, p != null && (p = yd(e, p), d !== p && (o[v] = { __html: d }));
                  continue;
                case "className":
                  Vl(
                    e,
                    v,
                    "class",
                    p,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Vl(
                    e,
                    v,
                    "tabindex",
                    p,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(v), Km(e, p, o);
                  continue;
                case "multiple":
                  f.delete(v), Ut(
                    v,
                    e.multiple,
                    p,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(v), Ut(
                    v,
                    e.muted,
                    p,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), Ut(
                    v,
                    e.autofocus,
                    p,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(v), d = e.getAttribute("data"), Ut(
                      v,
                      d,
                      p,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(p !== "" || t === "a" && v === "href" || t === "object" && v === "data")) {
                    console.error(
                      v === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      v,
                      v
                    );
                    continue;
                  }
                  st(
                    e,
                    v,
                    v,
                    p,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(v), typeof p == "function") {
                    f.delete(v.toLowerCase()), v === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === T2) {
                    f.delete(v.toLowerCase()), Ut(
                      v,
                      "function",
                      p,
                      o
                    );
                    continue;
                  }
                  st(
                    e,
                    v,
                    v.toLowerCase(),
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  st(
                    e,
                    v,
                    "xlink:href",
                    p,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  Wm(
                    e,
                    v,
                    "contenteditable",
                    p,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  Wm(
                    e,
                    v,
                    "spellcheck",
                    p,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  Wm(
                    e,
                    v,
                    v,
                    p,
                    f,
                    o
                  );
                  continue;
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
                  $m(
                    e,
                    v,
                    v.toLowerCase(),
                    p,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var C = d = v, Y = o;
                    if (f.delete(C), h = h.getAttribute(C), h === null)
                      switch (typeof p) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (p === !1) break e;
                      }
                    else if (p != null)
                      switch (typeof p) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (p === !0 && h === "") break e;
                          break;
                        default:
                          if (F(p, d), h === "" + p)
                            break e;
                      }
                    Ut(
                      d,
                      h,
                      p,
                      Y
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, C = d = v, Y = o, f.delete(C), h = h.getAttribute(C), h === null)
                      switch (typeof p) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(p) || 1 > p) break e;
                      }
                    else if (p != null)
                      switch (typeof p) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(p) || 1 > p) && (F(p, d), h === "" + p))
                            break e;
                      }
                    Ut(
                      d,
                      h,
                      p,
                      Y
                    );
                  }
                  continue;
                case "rowSpan":
                  og(
                    e,
                    v,
                    "rowspan",
                    p,
                    f,
                    o
                  );
                  continue;
                case "start":
                  og(
                    e,
                    v,
                    v,
                    p,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Vl(
                    e,
                    v,
                    "x-height",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Vl(
                    e,
                    v,
                    "xlink:actuate",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Vl(
                    e,
                    v,
                    "xlink:arcrole",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Vl(
                    e,
                    v,
                    "xlink:role",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Vl(
                    e,
                    v,
                    "xlink:show",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Vl(
                    e,
                    v,
                    "xlink:title",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Vl(
                    e,
                    v,
                    "xlink:type",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Vl(
                    e,
                    v,
                    "xml:base",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Vl(
                    e,
                    v,
                    "xml:lang",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Vl(
                    e,
                    v,
                    "xml:space",
                    p,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  p !== "" || a0[v] || (a0[v] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    v
                  )), $m(
                    e,
                    v,
                    v,
                    p,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < v.length) || v[0] !== "o" && v[0] !== "O" || v[1] !== "n" && v[1] !== "N") {
                    h = nr(v), d = !1, i.context === Bc && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (C = v.toLowerCase(), C = zc.hasOwnProperty(
                      C
                    ) && zc[C] || null, C !== null && C !== v && (d = !0, f.delete(C)), f.delete(h));
                    e: if (C = e, Y = h, h = p, Hi(Y))
                      if (C.hasAttribute(Y))
                        C = C.getAttribute(
                          Y
                        ), F(
                          h,
                          Y
                        ), h = C === "" + h ? h : C;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (C = Y.toLowerCase().slice(0, 5), C !== "data-" && C !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || Ut(
                      v,
                      h,
                      p,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && ri(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function Je(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function Ke(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function ht(e) {
      switch (e) {
        case Xo:
          return ph;
        case Rs:
          return i0;
        default:
          return Bc;
      }
    }
    function ta(e, t) {
      if (e === Bc)
        switch (t) {
          case "svg":
            return ph;
          case "math":
            return i0;
          default:
            return Bc;
        }
      return e === ph && t === "foreignObject" ? Bc : e;
    }
    function _n(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function To() {
      var e = window.event;
      return e && e.type === "popstate" ? e === qv ? !1 : (qv = e, !0) : (qv = null, !1);
    }
    function Fm(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Eu(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function Lt(e, t, a, i) {
      cg(e, t, a, i), e[ua] = i;
    }
    function Au(e) {
      ji(e, "");
    }
    function pc(e, t, a) {
      e.nodeValue = a;
    }
    function qn(e) {
      return e === "head";
    }
    function qa(e, t) {
      e.removeChild(t);
    }
    function Eo(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function Ao(e, t) {
      var a = t, i = 0, o = 0;
      do {
        var f = a.nextSibling;
        if (e.removeChild(a), f && f.nodeType === 8)
          if (a = f.data, a === u0) {
            if (0 < i && 8 > i) {
              a = i;
              var d = e.ownerDocument;
              if (a & A2 && Mo(d.documentElement), a & x2 && Mo(d.body), a & z2)
                for (a = d.head, Mo(a), d = a.firstChild; d; ) {
                  var h = d.nextSibling, p = d.nodeName;
                  d[jo] || p === "SCRIPT" || p === "STYLE" || p === "LINK" && d.rel.toLowerCase() === "stylesheet" || a.removeChild(d), d = h;
                }
            }
            if (o === 0) {
              e.removeChild(f), Sc(t);
              return;
            }
            o--;
          } else
            a === n0 || a === Nc || a === cp ? o++ : i = a.charCodeAt(0) - 48;
        else i = 0;
        a = f;
      } while (a);
      Sc(t);
    }
    function la(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Im(e) {
      e.nodeValue = "";
    }
    function Pm(e, t) {
      t = t[R2], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function pd(e, t) {
      e.nodeValue = t;
    }
    function xo(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            xo(a), Vc(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function di(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[jo])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          F(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = Sl(e.nextSibling), e === null) break;
      }
      return null;
    }
    function bl(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Sl(e.nextSibling), e === null)) return null;
      return e;
    }
    function jn(e) {
      return e.data === cp || e.data === Nc && e.ownerDocument.readyState === D1;
    }
    function zo(e, t) {
      var a = e.ownerDocument;
      if (e.data !== Nc || a.readyState === D1)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function Sl(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === n0 || t === cp || t === Nc || t === Nv || t === M1)
            break;
          if (t === u0) return null;
        }
      }
      return e;
    }
    function gd(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[Jm(f.name)] = f.name.toLowerCase() === "style" ? yc(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? { type: "Suspense", props: {} } : e.nodeValue;
    }
    function vd(e, t, a) {
      return a === null || a[E2] !== !0 ? (e.nodeValue === t ? e = null : (t = vl(t), e = vl(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function ey(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === u0) {
            if (t === 0)
              return Sl(e.nextSibling);
            t--;
          } else
            a !== n0 && a !== cp && a !== Nc || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function Ro(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === n0 || a === cp || a === Nc) {
            if (t === 0) return e;
            t--;
          } else a === u0 && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function ty(e) {
      Sc(e);
    }
    function pa(e) {
      Sc(e);
    }
    function ly(e, t, a, i, o) {
      switch (o && ar(e, i.ancestorInfo), t = Ke(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function ga(e, t, a, i) {
      if (!a[Ti] && fa(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      Xt(a, e, t), a[Hl] = i, a[ua] = t;
    }
    function Mo(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      Vc(e);
    }
    function us(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function fg(e, t, a) {
      var i = gh;
      if (i && typeof t == "string" && t) {
        var o = sa(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), N1.has(o) || (N1.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), Xt(t, "link", e), nl(t), i.head.appendChild(t)));
      }
    }
    function xu(e, t, a, i) {
      var o = (o = Gn.current) ? us(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = hi(a.href), t = rn(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = hi(a.href);
            var f = rn(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Qs, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              Yn(e)
            )) && !f._p && (d.instance = f, d.state.loading = op | Pn), !eu.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              eu.set(e, h), f || sg(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + gc(t) + `
  + ` + gc(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + gc(t) + `
  + ` + gc(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = vc(a), t = rn(o).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function gc(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : Mu.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : Mu.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : Mu.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function hi(e) {
      return 'href="' + sa(e) + '"';
    }
    function Yn(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function ay(e) {
      return Ye({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function sg(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = op : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= op;
      }), t.addEventListener("error", function() {
        return i.loading |= H1;
      }), Xt(t, "link", a), nl(t), e.head.appendChild(t));
    }
    function vc(e) {
      return '[src="' + sa(e) + '"]';
    }
    function bc(e) {
      return "script[async]" + e;
    }
    function bd(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + sa(a.href) + '"]'
            );
            if (i)
              return t.instance = i, nl(i), i;
            var o = Ye({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), nl(i), Xt(i, "style", o), Sd(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = hi(a.href);
            var f = e.querySelector(
              Yn(o)
            );
            if (f)
              return t.state.loading |= Pn, t.instance = f, nl(f), f;
            i = ay(a), (o = eu.get(o)) && ny(i, o), f = (e.ownerDocument || e).createElement("link"), nl(f);
            var d = f;
            return d._p = new Promise(function(h, p) {
              d.onload = h, d.onerror = p;
            }), Xt(f, "link", i), t.state.loading |= Pn, Sd(f, a.precedence, e), t.instance = f;
          case "script":
            return f = vc(a.src), (o = e.querySelector(
              bc(f)
            )) ? (t.instance = o, nl(o), o) : (i = a, (o = eu.get(f)) && (i = Ye({}, a), uy(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), nl(o), Xt(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & Pn) === Qs && (i = t.instance, t.state.loading |= Pn, Sd(i, a.precedence, e));
      return t.instance;
    }
    function Sd(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function ny(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function uy(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function iy(e, t, a) {
      if (c0 === null) {
        var i = /* @__PURE__ */ new Map(), o = c0 = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = c0, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[jo] || f[Hl] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== Xo) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function cy(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function Do(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === ph || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = Je(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function is(e) {
      return !(e.type === "stylesheet" && (e.state.loading & w1) === Qs);
    }
    function rg() {
    }
    function dg(e, t, a) {
      if (fp === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var i = fp;
      if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & Pn) === Qs) {
        if (t.instance === null) {
          var o = hi(a.href), f = e.querySelector(
            Yn(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++, i = cs.bind(i), e.then(i, i)), t.state.loading |= Pn, t.instance = f, nl(f);
            return;
          }
          f = e.ownerDocument || e, a = ay(a), (o = eu.get(o)) && ny(a, o), f = f.createElement("link"), nl(f);
          var d = f;
          d._p = new Promise(function(h, p) {
            d.onload = h, d.onerror = p;
          }), Xt(f, "link", a), t.instance = f;
        }
        i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & w1) === Qs && (i.count++, t = cs.bind(i), e.addEventListener("load", t), e.addEventListener("error", t));
      }
    }
    function hg() {
      if (fp === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var e = fp;
      return e.stylesheets && e.count === 0 && Td(e, e.stylesheets), 0 < e.count ? function(t) {
        var a = setTimeout(function() {
          if (e.stylesheets && Td(e, e.stylesheets), e.unsuspend) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, 6e4);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(a);
        };
      } : null;
    }
    function cs() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets)
          Td(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function Td(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, o0 = /* @__PURE__ */ new Map(), t.forEach(mg, e), o0 = null, cs.call(e));
    }
    function mg(e, t) {
      if (!(t.state.loading & Pn)) {
        var a = o0.get(e);
        if (a) var i = a.get(Yv);
        else {
          a = /* @__PURE__ */ new Map(), o0.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(Yv, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(Yv, o), a.set(d, o), this.count++, i = cs.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= Pn;
      }
    }
    function Ed(e, t, a, i, o, f, d, h) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Ls, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ah(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ah(0), this.hiddenUpdates = Ah(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function oy(e, t, a, i, o, f, d, h, p, v, C, Y) {
      return e = new Ed(
        e,
        t,
        a,
        d,
        h,
        p,
        v,
        Y
      ), t = IS, f === !0 && (t |= ca | Hu), Zt && (t |= Ll), f = ve(3, null, null, t), e.current = f, f.stateNode = e, t = zf(), Ki(t), e.pooledCache = t, Ki(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, Kl(f), e;
    }
    function fy(e) {
      return e ? (e = Lo, e) : Lo;
    }
    function mt(e, t, a, i, o, f) {
      if (Tl && typeof Tl.onScheduleFiberRoot == "function")
        try {
          Tl.onScheduleFiberRoot(bi, i, a);
        } catch (d) {
          na || (na = !0, console.error(
            "React instrumentation encountered an error: %s",
            d
          ));
        }
      P !== null && typeof P.markRenderScheduled == "function" && P.markRenderScheduled(t), o = fy(o), i.context === null ? i.context = o : i.pendingContext = o, ia && ba !== null && !j1 && (j1 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        ne(ba) || "Unknown"
      )), i = vn(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = Fa(e, i, t), a !== null && (Gt(a, e, t), Iu(a, e, t));
    }
    function Ad(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function sy(e, t) {
      Ad(e, t), (e = e.alternate) && Ad(e, t);
    }
    function ry(e) {
      if (e.tag === 13) {
        var t = Jl(e, 67108864);
        t !== null && Gt(t, e, 67108864), sy(e, 67108864);
      }
    }
    function w0() {
      return ba;
    }
    function N0() {
      for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; 31 > a; a++) {
        var i = S0(t);
        e.set(t, i), t *= 2;
      }
      return e;
    }
    function B0(e, t, a, i) {
      var o = q.T;
      q.T = null;
      var f = xe.p;
      try {
        xe.p = El, mi(e, t, a, i);
      } finally {
        xe.p = f, q.T = o;
      }
    }
    function xd(e, t, a, i) {
      var o = q.T;
      q.T = null;
      var f = xe.p;
      try {
        xe.p = cn, mi(e, t, a, i);
      } finally {
        xe.p = f, q.T = o;
      }
    }
    function mi(e, t, a, i) {
      if (s0) {
        var o = os(i);
        if (o === null)
          Yl(
            e,
            t,
            i,
            r0,
            a
          ), yi(e, i);
        else if (fs(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (yi(e, i), t & 4 && -1 < U2.indexOf(e)) {
          for (; o !== null; ) {
            var f = fa(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = Ui(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var p = 1 << 31 - Cl(d);
                        h.entanglements[1] |= p, d &= ~p;
                      }
                      Ba(f), (yt & (Aa | _u)) === on && (Kg = Vn() + p1, hc(0));
                    }
                  }
                  break;
                case 13:
                  h = Jl(f, 2), h !== null && Gt(h, f, 2), rc(), sy(f, 2);
              }
            if (f = os(i), f === null && Yl(
              e,
              t,
              i,
              r0,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          Yl(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function os(e) {
      return e = Gi(e), Oo(e);
    }
    function Oo(e) {
      if (r0 = null, e = nu(e), e !== null) {
        var t = Oe(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = Qe(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return r0 = e, null;
    }
    function zd(e) {
      switch (e) {
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
          return El;
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
          return cn;
        case "message":
          switch (vi()) {
            case Ud:
              return El;
            case vs:
              return cn;
            case Bo:
            case G0:
              return Ou;
            case bs:
              return Nd;
            default:
              return Ou;
          }
        default:
          return Ou;
      }
    }
    function yi(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Po = null;
          break;
        case "dragenter":
        case "dragleave":
          ef = null;
          break;
        case "mouseover":
        case "mouseout":
          tf = null;
          break;
        case "pointerover":
        case "pointerout":
          rp.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          dp.delete(t.pointerId);
      }
    }
    function aa(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = fa(t), t !== null && ry(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function fs(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return Po = aa(
            Po,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return ef = aa(
            ef,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return tf = aa(
            tf,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return rp.set(
            f,
            aa(
              rp.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, dp.set(
            f,
            aa(
              dp.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function yg(e) {
      var t = nu(e.target);
      if (t !== null) {
        var a = Oe(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = Qe(a), t !== null) {
              e.blockedOn = t, E0(e.priority, function() {
                if (a.tag === 13) {
                  var i = ea(a);
                  i = Bl(i);
                  var o = Jl(
                    a,
                    i
                  );
                  o !== null && Gt(o, a, i), sy(a, i);
                }
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function ss(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = os(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          s !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), s = o, a.target.dispatchEvent(i), s === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), s = null;
        } else
          return t = fa(a), t !== null && ry(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function dy(e, t, a) {
      ss(e) && a.delete(t);
    }
    function pg() {
      Gv = !1, Po !== null && ss(Po) && (Po = null), ef !== null && ss(ef) && (ef = null), tf !== null && ss(tf) && (tf = null), rp.forEach(dy), dp.forEach(dy);
    }
    function rs(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Gv || (Gv = !0, Qt.unstable_scheduleCallback(
        Qt.unstable_NormalPriority,
        pg
      )));
    }
    function gg(e) {
      d0 !== e && (d0 = e, Qt.unstable_scheduleCallback(
        Qt.unstable_NormalPriority,
        function() {
          d0 === e && (d0 = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (Oo(i || a) === null)
                continue;
              break;
            }
            var f = fa(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), ec(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function Sc(e) {
      function t(p) {
        return rs(p, e);
      }
      Po !== null && rs(Po, e), ef !== null && rs(ef, e), tf !== null && rs(tf, e), rp.forEach(t), dp.forEach(t);
      for (var a = 0; a < lf.length; a++) {
        var i = lf[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < lf.length && (a = lf[0], a.blockedOn === null); )
        yg(a), a.blockedOn === null && lf.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[ua] || null;
          if (typeof f == "function")
            d || gg(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[ua] || null)
                h = d.formAction;
              else if (Oo(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), gg(a);
          }
        }
    }
    function Rd(e) {
      this._internalRoot = e;
    }
    function ds(e) {
      this._internalRoot = e;
    }
    function vg(e) {
      e[Ti] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Qt = dS(), hs = Ks, _0 = rS, Ye = Object.assign, ms = Symbol.for("react.element"), pi = Symbol.for("react.transitional.element"), Tc = Symbol.for("react.portal"), Ce = Symbol.for("react.fragment"), Uo = Symbol.for("react.strict_mode"), Co = Symbol.for("react.profiler"), hy = Symbol.for("react.provider"), Md = Symbol.for("react.consumer"), ja = Symbol.for("react.context"), zu = Symbol.for("react.forward_ref"), Ho = Symbol.for("react.suspense"), gi = Symbol.for("react.suspense_list"), ys = Symbol.for("react.memo"), va = Symbol.for("react.lazy"), my = Symbol.for("react.activity"), bg = Symbol.for("react.memo_cache_sentinel"), yy = Symbol.iterator, Dd = Symbol.for("react.client.reference"), Me = Array.isArray, q = hs.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, xe = _0.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q0 = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), ps = [], gs = [], Ya = -1, Ru = bt(null), wo = bt(null), Gn = bt(null), No = bt(null), Mu = Object.prototype.hasOwnProperty, Od = Qt.unstable_scheduleCallback, j0 = Qt.unstable_cancelCallback, Sg = Qt.unstable_shouldYield, Y0 = Qt.unstable_requestPaint, Vn = Qt.unstable_now, vi = Qt.unstable_getCurrentPriorityLevel, Ud = Qt.unstable_ImmediatePriority, vs = Qt.unstable_UserBlockingPriority, Bo = Qt.unstable_NormalPriority, G0 = Qt.unstable_LowPriority, bs = Qt.unstable_IdlePriority, V0 = Qt.log, un = Qt.unstable_setDisableYieldValue, bi = null, Tl = null, P = null, na = !1, Zt = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Cl = Math.clz32 ? Math.clz32 : Th, Cd = Math.log, Du = Math.LN2, Hd = 256, wd = 4194304, El = 2, cn = 8, Ou = 32, Nd = 268435456, Si = Math.random().toString(36).slice(2), Hl = "__reactFiber$" + Si, ua = "__reactProps$" + Si, Ti = "__reactContainer$" + Si, py = "__reactEvents$" + Si, Tg = "__reactListeners$" + Si, _o = "__reactHandles$" + Si, qo = "__reactResources$" + Si, jo = "__reactMarker$" + Si, Eg = /* @__PURE__ */ new Set(), Ga = {}, Ec = {}, Ag = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Bd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), _d = {}, qd = {}, Ei = 0, gy, vy, xg, by, Yo, zg, Rg;
    Ws.__reactDisabledLog = !0;
    var Sy, Ss, Go = !1, Ts = new (typeof WeakMap == "function" ? WeakMap : Map)(), ba = null, ia = !1, X0 = /[\n"\\]/g, Ty = !1, Ey = !1, Ay = !1, xy = !1, jd = !1, zy = !1, Es = ["value", "defaultValue"], Mg = !1, Dg = /["'&<>\n\t]|^\s|\s$/, Ry = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), Yd = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), Gd = Yd.concat(["button"]), My = "dd dt li option optgroup p rp rt".split(" "), Dy = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, Vo = {}, Xn = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, Uu = /([A-Z])/g, Cu = /^ms-/, As = /^(?:webkit|moz|o)[A-Z]/, xs = /^-ms-/, Ai = /-(.)/g, Og = /;\s*$/, Ac = {}, xc = {}, Ug = !1, Oy = !1, zs = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Rs = "http://www.w3.org/1998/Math/MathML", Xo = "http://www.w3.org/2000/svg", Vd = /* @__PURE__ */ new Map([
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
    ]), zc = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Uy = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Ln = {}, Cy = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Xd = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Hy = !1, Xl = {}, Ms = /^on./, l = /^on[^A-Z]/, n = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), u = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), c = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, s = null, r = null, m = null, y = !1, S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), D = !1;
    if (S)
      try {
        var L = {};
        Object.defineProperty(L, "passive", {
          get: function() {
            D = !0;
          }
        }), window.addEventListener("test", L, L), window.removeEventListener("test", L, L);
      } catch {
        D = !1;
      }
    var k = null, U = null, H = null, be = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Se = yl(be), ct = Ye({}, be, { view: 0, detail: 0 }), R = yl(ct), z, M, Z, ue = Ye({}, ct, {
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
      getModifierState: cr,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== Z && (Z && e.type === "mousemove" ? (z = e.screenX - Z.screenX, M = e.screenY - Z.screenY) : M = z = 0, Z = e), z);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : M;
      }
    }), Xe = yl(ue), ge = Ye({}, ue, { dataTransfer: 0 }), Ae = yl(ge), sl = Ye({}, ct, { relatedTarget: 0 }), lt = yl(sl), xi = Ye({}, be, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), L0 = yl(xi), MS = Ye({}, be, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), DS = yl(MS), OS = Ye({}, be, { data: 0 }), Fv = yl(
      OS
    ), US = Fv, CS = {
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
    }, HS = {
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
    }, wS = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, NS = Ye({}, ct, {
      key: function(e) {
        if (e.key) {
          var t = CS[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = Kc(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? HS[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: cr,
      charCode: function(e) {
        return e.type === "keypress" ? Kc(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Kc(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), BS = yl(NS), _S = Ye({}, ue, {
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
    }), Iv = yl(_S), qS = Ye({}, ct, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: cr
    }), jS = yl(qS), YS = Ye({}, be, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), GS = yl(YS), VS = Ye({}, ue, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), XS = yl(VS), LS = Ye({}, be, {
      newState: 0,
      oldState: 0
    }), QS = yl(LS), ZS = [9, 13, 27, 32], Pv = 229, Q0 = S && "CompositionEvent" in window, wy = null;
    S && "documentMode" in document && (wy = document.documentMode);
    var kS = S && "TextEvent" in window && !wy, eb = S && (!Q0 || wy && 8 < wy && 11 >= wy), tb = 32, lb = String.fromCharCode(tb), ab = !1, Ld = !1, JS = {
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
    }, Ny = null, By = null, nb = !1;
    S && (nb = wh("input") && (!document.documentMode || 9 < document.documentMode));
    var Sa = typeof Object.is == "function" ? Object.is : O0, KS = S && "documentMode" in document && 11 >= document.documentMode, Qd = null, Z0 = null, _y = null, k0 = !1, Zd = {
      animationend: fu("Animation", "AnimationEnd"),
      animationiteration: fu("Animation", "AnimationIteration"),
      animationstart: fu("Animation", "AnimationStart"),
      transitionrun: fu("Transition", "TransitionRun"),
      transitionstart: fu("Transition", "TransitionStart"),
      transitioncancel: fu("Transition", "TransitionCancel"),
      transitionend: fu("Transition", "TransitionEnd")
    }, J0 = {}, ub = {};
    S && (ub = document.createElement("div").style, "AnimationEvent" in window || (delete Zd.animationend.animation, delete Zd.animationiteration.animation, delete Zd.animationstart.animation), "TransitionEvent" in window || delete Zd.transitionend.transition);
    var ib = Li("animationend"), cb = Li("animationiteration"), ob = Li("animationstart"), $S = Li("transitionrun"), WS = Li("transitionstart"), FS = Li("transitioncancel"), fb = Li("transitionend"), sb = /* @__PURE__ */ new Map(), K0 = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    K0.push("scrollEnd");
    var $0 = /* @__PURE__ */ new WeakMap(), Cg = 1, Rc = 2, Qn = [], kd = 0, W0 = 0, Lo = {};
    Object.freeze(Lo);
    var Zn = null, Jd = null, Ct = 0, IS = 1, Ll = 2, ca = 8, Hu = 16, rb = 64, db = !1;
    try {
      var hb = Object.preventExtensions({});
    } catch {
      db = !0;
    }
    var Kd = [], $d = 0, Hg = null, wg = 0, kn = [], Jn = 0, Ds = null, Mc = 1, Dc = "", Ta = null, Kt = null, ot = !1, Oc = !1, Kn = null, Os = null, zi = !1, F0 = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), mb = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var PS = performance, yb = function() {
        return PS.now();
      };
    else {
      var e2 = Date;
      yb = function() {
        return e2.now();
      };
    }
    var I0 = bt(null), P0 = bt(null), pb = {}, Ng = null, Wd = null, Fd = !1, t2 = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, l2 = Qt.unstable_scheduleCallback, a2 = Qt.unstable_NormalPriority, Al = {
      $$typeof: ja,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Id = Qt.unstable_now, gb = -0, Bg = -0, Va = -1.1, Us = -0, _g = !1, qg = !1, qy = null, ev = 0, Cs = 0, Pd = null, vb = q.S;
    q.S = function(e, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && Vp(e, t), vb !== null && vb(e, t);
    };
    var Hs = bt(null), wu = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, jy = [], Yy = [], Gy = [], Vy = [], Xy = [], Ly = [], ws = /* @__PURE__ */ new Set();
    wu.recordUnsafeLifecycleWarnings = function(e, t) {
      ws.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && jy.push(e), e.mode & ca && typeof t.UNSAFE_componentWillMount == "function" && Yy.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Gy.push(e), e.mode & ca && typeof t.UNSAFE_componentWillReceiveProps == "function" && Vy.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Xy.push(e), e.mode & ca && typeof t.UNSAFE_componentWillUpdate == "function" && Ly.push(e));
    }, wu.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < jy.length && (jy.forEach(function(h) {
        e.add(
          ne(h) || "Component"
        ), ws.add(h.type);
      }), jy = []);
      var t = /* @__PURE__ */ new Set();
      0 < Yy.length && (Yy.forEach(function(h) {
        t.add(
          ne(h) || "Component"
        ), ws.add(h.type);
      }), Yy = []);
      var a = /* @__PURE__ */ new Set();
      0 < Gy.length && (Gy.forEach(function(h) {
        a.add(
          ne(h) || "Component"
        ), ws.add(h.type);
      }), Gy = []);
      var i = /* @__PURE__ */ new Set();
      0 < Vy.length && (Vy.forEach(
        function(h) {
          i.add(
            ne(h) || "Component"
          ), ws.add(h.type);
        }
      ), Vy = []);
      var o = /* @__PURE__ */ new Set();
      0 < Xy.length && (Xy.forEach(function(h) {
        o.add(
          ne(h) || "Component"
        ), ws.add(h.type);
      }), Xy = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < Ly.length && (Ly.forEach(function(h) {
        f.add(
          ne(h) || "Component"
        ), ws.add(h.type);
      }), Ly = []), 0 < t.size) {
        var d = Re(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = Re(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = Re(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = Re(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = Re(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = Re(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var jg = /* @__PURE__ */ new Map(), bb = /* @__PURE__ */ new Set();
    wu.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & ca && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !bb.has(e.type) && (i = jg.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], jg.set(a, i)), i.push(e));
    }, wu.flushLegacyContextWarning = function() {
      jg.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(ne(o) || "Component"), bb.add(o.type);
          });
          var i = Re(a);
          ce(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, wu.discardPendingWarnings = function() {
      jy = [], Yy = [], Gy = [], Vy = [], Xy = [], Ly = [], jg = /* @__PURE__ */ new Map();
    };
    var Qy = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), Sb = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), Yg = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), tv = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Zy = null, Gg = !1, $n = 0, Wn = 1, Ea = 2, Ql = 4, xl = 8, Tb = 0, Eb = 1, Ab = 2, lv = 3, Qo = !1, xb = !1, av = null, nv = !1, eh = bt(null), Vg = bt(0), th, zb = /* @__PURE__ */ new Set(), Rb = /* @__PURE__ */ new Set(), uv = /* @__PURE__ */ new Set(), Mb = /* @__PURE__ */ new Set(), Zo = 0, De = null, At = null, rl = null, Xg = !1, lh = !1, Ns = !1, Lg = 0, ky = 0, Uc = null, n2 = 0, u2 = 25, j = null, Fn = null, Cc = -1, Jy = !1, Qg = {
      readContext: Rt,
      use: Sn,
      useCallback: Nt,
      useContext: Nt,
      useEffect: Nt,
      useImperativeHandle: Nt,
      useLayoutEffect: Nt,
      useInsertionEffect: Nt,
      useMemo: Nt,
      useReducer: Nt,
      useRef: Nt,
      useState: Nt,
      useDebugValue: Nt,
      useDeferredValue: Nt,
      useTransition: Nt,
      useSyncExternalStore: Nt,
      useId: Nt,
      useHostTransitionStatus: Nt,
      useFormState: Nt,
      useActionState: Nt,
      useOptimistic: Nt,
      useMemoCache: Nt,
      useCacheRefresh: Nt
    }, iv = null, Db = null, cv = null, Ob = null, Ri = null, Nu = null, Zg = null;
    iv = {
      readContext: function(e) {
        return Rt(e);
      },
      use: Sn,
      useCallback: function(e, t) {
        return j = "useCallback", Ve(), Da(t), Nf(e, t);
      },
      useContext: function(e) {
        return j = "useContext", Ve(), Rt(e);
      },
      useEffect: function(e, t) {
        return j = "useEffect", Ve(), Da(t), Tr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", Ve(), Da(a), Ar(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        j = "useInsertionEffect", Ve(), Da(t), Ha(4, Ea, e, t);
      },
      useLayoutEffect: function(e, t) {
        return j = "useLayoutEffect", Ve(), Da(t), Er(e, t);
      },
      useMemo: function(e, t) {
        j = "useMemo", Ve(), Da(t);
        var a = q.H;
        q.H = Ri;
        try {
          return xr(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        j = "useReducer", Ve();
        var i = q.H;
        q.H = Ri;
        try {
          return at(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function(e) {
        return j = "useRef", Ve(), wf(e);
      },
      useState: function(e) {
        j = "useState", Ve();
        var t = q.H;
        q.H = Ri;
        try {
          return mu(e);
        } finally {
          q.H = t;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", Ve();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", Ve(), zr(e, t);
      },
      useTransition: function() {
        return j = "useTransition", Ve(), xn();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", Ve(), hu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", Ve(), zn();
      },
      useFormState: function(e, t) {
        return j = "useFormState", Ve(), eo(), io(e, t);
      },
      useActionState: function(e, t) {
        return j = "useActionState", Ve(), io(e, t);
      },
      useOptimistic: function(e) {
        return j = "useOptimistic", Ve(), en(e);
      },
      useHostTransitionStatus: Fl,
      useMemoCache: kt,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", Ve(), tc();
      }
    }, Db = {
      readContext: function(e) {
        return Rt(e);
      },
      use: Sn,
      useCallback: function(e, t) {
        return j = "useCallback", $(), Nf(e, t);
      },
      useContext: function(e) {
        return j = "useContext", $(), Rt(e);
      },
      useEffect: function(e, t) {
        return j = "useEffect", $(), Tr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", $(), Ar(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        j = "useInsertionEffect", $(), Ha(4, Ea, e, t);
      },
      useLayoutEffect: function(e, t) {
        return j = "useLayoutEffect", $(), Er(e, t);
      },
      useMemo: function(e, t) {
        j = "useMemo", $();
        var a = q.H;
        q.H = Ri;
        try {
          return xr(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        j = "useReducer", $();
        var i = q.H;
        q.H = Ri;
        try {
          return at(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function(e) {
        return j = "useRef", $(), wf(e);
      },
      useState: function(e) {
        j = "useState", $();
        var t = q.H;
        q.H = Ri;
        try {
          return mu(e);
        } finally {
          q.H = t;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", $();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", $(), zr(e, t);
      },
      useTransition: function() {
        return j = "useTransition", $(), xn();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", $(), hu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", $(), zn();
      },
      useActionState: function(e, t) {
        return j = "useActionState", $(), io(e, t);
      },
      useFormState: function(e, t) {
        return j = "useFormState", $(), eo(), io(e, t);
      },
      useOptimistic: function(e) {
        return j = "useOptimistic", $(), en(e);
      },
      useHostTransitionStatus: Fl,
      useMemoCache: kt,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", $(), tc();
      }
    }, cv = {
      readContext: function(e) {
        return Rt(e);
      },
      use: Sn,
      useCallback: function(e, t) {
        return j = "useCallback", $(), Pi(e, t);
      },
      useContext: function(e) {
        return j = "useContext", $(), Rt(e);
      },
      useEffect: function(e, t) {
        j = "useEffect", $(), Pt(2048, xl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", $(), An(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return j = "useInsertionEffect", $(), Pt(4, Ea, e, t);
      },
      useLayoutEffect: function(e, t) {
        return j = "useLayoutEffect", $(), Pt(4, Ql, e, t);
      },
      useMemo: function(e, t) {
        j = "useMemo", $();
        var a = q.H;
        q.H = Nu;
        try {
          return ai(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        j = "useReducer", $();
        var i = q.H;
        q.H = Nu;
        try {
          return Ua(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function() {
        return j = "useRef", $(), et().memoizedState;
      },
      useState: function() {
        j = "useState", $();
        var e = q.H;
        q.H = Nu;
        try {
          return Ua(ut);
        } finally {
          q.H = e;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", $();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", $(), Bf(e, t);
      },
      useTransition: function() {
        return j = "useTransition", $(), Dr();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", $(), Of(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", $(), et().memoizedState;
      },
      useFormState: function(e) {
        return j = "useFormState", $(), eo(), Sr(e);
      },
      useActionState: function(e) {
        return j = "useActionState", $(), Sr(e);
      },
      useOptimistic: function(e, t) {
        return j = "useOptimistic", $(), yu(e, t);
      },
      useHostTransitionStatus: Fl,
      useMemoCache: kt,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", $(), et().memoizedState;
      }
    }, Ob = {
      readContext: function(e) {
        return Rt(e);
      },
      use: Sn,
      useCallback: function(e, t) {
        return j = "useCallback", $(), Pi(e, t);
      },
      useContext: function(e) {
        return j = "useContext", $(), Rt(e);
      },
      useEffect: function(e, t) {
        j = "useEffect", $(), Pt(2048, xl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", $(), An(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return j = "useInsertionEffect", $(), Pt(4, Ea, e, t);
      },
      useLayoutEffect: function(e, t) {
        return j = "useLayoutEffect", $(), Pt(4, Ql, e, t);
      },
      useMemo: function(e, t) {
        j = "useMemo", $();
        var a = q.H;
        q.H = Zg;
        try {
          return ai(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        j = "useReducer", $();
        var i = q.H;
        q.H = Zg;
        try {
          return Ii(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function() {
        return j = "useRef", $(), et().memoizedState;
      },
      useState: function() {
        j = "useState", $();
        var e = q.H;
        q.H = Zg;
        try {
          return Ii(ut);
        } finally {
          q.H = e;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", $();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", $(), Rr(e, t);
      },
      useTransition: function() {
        return j = "useTransition", $(), Or();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", $(), Of(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", $(), et().memoizedState;
      },
      useFormState: function(e) {
        return j = "useFormState", $(), eo(), co(e);
      },
      useActionState: function(e) {
        return j = "useActionState", $(), co(e);
      },
      useOptimistic: function(e, t) {
        return j = "useOptimistic", $(), br(e, t);
      },
      useHostTransitionStatus: Fl,
      useMemoCache: kt,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", $(), et().memoizedState;
      }
    }, Ri = {
      readContext: function(e) {
        return me(), Rt(e);
      },
      use: function(e) {
        return X(), Sn(e);
      },
      useCallback: function(e, t) {
        return j = "useCallback", X(), Ve(), Nf(e, t);
      },
      useContext: function(e) {
        return j = "useContext", X(), Ve(), Rt(e);
      },
      useEffect: function(e, t) {
        return j = "useEffect", X(), Ve(), Tr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", X(), Ve(), Ar(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        j = "useInsertionEffect", X(), Ve(), Ha(4, Ea, e, t);
      },
      useLayoutEffect: function(e, t) {
        return j = "useLayoutEffect", X(), Ve(), Er(e, t);
      },
      useMemo: function(e, t) {
        j = "useMemo", X(), Ve();
        var a = q.H;
        q.H = Ri;
        try {
          return xr(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        j = "useReducer", X(), Ve();
        var i = q.H;
        q.H = Ri;
        try {
          return at(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function(e) {
        return j = "useRef", X(), Ve(), wf(e);
      },
      useState: function(e) {
        j = "useState", X(), Ve();
        var t = q.H;
        q.H = Ri;
        try {
          return mu(e);
        } finally {
          q.H = t;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", X(), Ve();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", X(), Ve(), zr(e, t);
      },
      useTransition: function() {
        return j = "useTransition", X(), Ve(), xn();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", X(), Ve(), hu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", X(), Ve(), zn();
      },
      useFormState: function(e, t) {
        return j = "useFormState", X(), Ve(), io(e, t);
      },
      useActionState: function(e, t) {
        return j = "useActionState", X(), Ve(), io(e, t);
      },
      useOptimistic: function(e) {
        return j = "useOptimistic", X(), Ve(), en(e);
      },
      useMemoCache: function(e) {
        return X(), kt(e);
      },
      useHostTransitionStatus: Fl,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", Ve(), tc();
      }
    }, Nu = {
      readContext: function(e) {
        return me(), Rt(e);
      },
      use: function(e) {
        return X(), Sn(e);
      },
      useCallback: function(e, t) {
        return j = "useCallback", X(), $(), Pi(e, t);
      },
      useContext: function(e) {
        return j = "useContext", X(), $(), Rt(e);
      },
      useEffect: function(e, t) {
        j = "useEffect", X(), $(), Pt(2048, xl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", X(), $(), An(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return j = "useInsertionEffect", X(), $(), Pt(4, Ea, e, t);
      },
      useLayoutEffect: function(e, t) {
        return j = "useLayoutEffect", X(), $(), Pt(4, Ql, e, t);
      },
      useMemo: function(e, t) {
        j = "useMemo", X(), $();
        var a = q.H;
        q.H = Nu;
        try {
          return ai(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        j = "useReducer", X(), $();
        var i = q.H;
        q.H = Nu;
        try {
          return Ua(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function() {
        return j = "useRef", X(), $(), et().memoizedState;
      },
      useState: function() {
        j = "useState", X(), $();
        var e = q.H;
        q.H = Nu;
        try {
          return Ua(ut);
        } finally {
          q.H = e;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", X(), $();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", X(), $(), Bf(e, t);
      },
      useTransition: function() {
        return j = "useTransition", X(), $(), Dr();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", X(), $(), Of(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", X(), $(), et().memoizedState;
      },
      useFormState: function(e) {
        return j = "useFormState", X(), $(), Sr(e);
      },
      useActionState: function(e) {
        return j = "useActionState", X(), $(), Sr(e);
      },
      useOptimistic: function(e, t) {
        return j = "useOptimistic", X(), $(), yu(e, t);
      },
      useMemoCache: function(e) {
        return X(), kt(e);
      },
      useHostTransitionStatus: Fl,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", $(), et().memoizedState;
      }
    }, Zg = {
      readContext: function(e) {
        return me(), Rt(e);
      },
      use: function(e) {
        return X(), Sn(e);
      },
      useCallback: function(e, t) {
        return j = "useCallback", X(), $(), Pi(e, t);
      },
      useContext: function(e) {
        return j = "useContext", X(), $(), Rt(e);
      },
      useEffect: function(e, t) {
        j = "useEffect", X(), $(), Pt(2048, xl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", X(), $(), An(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return j = "useInsertionEffect", X(), $(), Pt(4, Ea, e, t);
      },
      useLayoutEffect: function(e, t) {
        return j = "useLayoutEffect", X(), $(), Pt(4, Ql, e, t);
      },
      useMemo: function(e, t) {
        j = "useMemo", X(), $();
        var a = q.H;
        q.H = Nu;
        try {
          return ai(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        j = "useReducer", X(), $();
        var i = q.H;
        q.H = Nu;
        try {
          return Ii(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function() {
        return j = "useRef", X(), $(), et().memoizedState;
      },
      useState: function() {
        j = "useState", X(), $();
        var e = q.H;
        q.H = Nu;
        try {
          return Ii(ut);
        } finally {
          q.H = e;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", X(), $();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", X(), $(), Rr(e, t);
      },
      useTransition: function() {
        return j = "useTransition", X(), $(), Or();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", X(), $(), Of(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", X(), $(), et().memoizedState;
      },
      useFormState: function(e) {
        return j = "useFormState", X(), $(), co(e);
      },
      useActionState: function(e) {
        return j = "useActionState", X(), $(), co(e);
      },
      useOptimistic: function(e, t) {
        return j = "useOptimistic", X(), $(), br(e, t);
      },
      useMemoCache: function(e) {
        return X(), kt(e);
      },
      useHostTransitionStatus: Fl,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", $(), et().memoizedState;
      }
    };
    var Ub = {
      "react-stack-bottom-frame": function(e, t, a) {
        var i = ia;
        ia = !0;
        try {
          return e(t, a);
        } finally {
          ia = i;
        }
      }
    }, ov = Ub["react-stack-bottom-frame"].bind(Ub), Cb = {
      "react-stack-bottom-frame": function(e) {
        var t = ia;
        ia = !0;
        try {
          return e.render();
        } finally {
          ia = t;
        }
      }
    }, Hb = Cb["react-stack-bottom-frame"].bind(Cb), wb = {
      "react-stack-bottom-frame": function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          Ee(e, e.return, a);
        }
      }
    }, fv = wb["react-stack-bottom-frame"].bind(wb), Nb = {
      "react-stack-bottom-frame": function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          Ee(e, e.return, f);
        }
      }
    }, Bb = Nb["react-stack-bottom-frame"].bind(Nb), _b = {
      "react-stack-bottom-frame": function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, i2 = _b["react-stack-bottom-frame"].bind(_b), qb = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          Ee(e, t, i);
        }
      }
    }, jb = qb["react-stack-bottom-frame"].bind(qb), Yb = {
      "react-stack-bottom-frame": function(e) {
        e.resourceKind != null && console.error(
          "Expected only SimpleEffects when enableUseEffectCRUDOverload is disabled, got %s",
          e.resourceKind
        );
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, c2 = Yb["react-stack-bottom-frame"].bind(Yb), Gb = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a();
        } catch (i) {
          Ee(e, t, i);
        }
      }
    }, o2 = Gb["react-stack-bottom-frame"].bind(Gb), Vb = {
      "react-stack-bottom-frame": function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, ko = Vb["react-stack-bottom-frame"].bind(Vb), ah = null, Ky = 0, Le = null, sv, Xb = sv = !1, Lb = {}, Qb = {}, Zb = {};
    ae = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = ne(e), o = i || "null";
        if (!Lb[o]) {
          Lb[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = ne(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = ne(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), ce(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var nh = Yf(!0), kb = Yf(!1), In = bt(null), Mi = null, uh = 1, $y = 2, zl = bt(0), Jb = {}, Kb = /* @__PURE__ */ new Set(), $b = /* @__PURE__ */ new Set(), Wb = /* @__PURE__ */ new Set(), Fb = /* @__PURE__ */ new Set(), Ib = /* @__PURE__ */ new Set(), Pb = /* @__PURE__ */ new Set(), e1 = /* @__PURE__ */ new Set(), t1 = /* @__PURE__ */ new Set(), l1 = /* @__PURE__ */ new Set(), a1 = /* @__PURE__ */ new Set();
    Object.freeze(Jb);
    var rv = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = ea(e), o = vn(i);
        o.payload = t, a != null && (rm(a), o.callback = a), t = Fa(e, o, i), t !== null && (Gt(t, e, i), Iu(t, e, i)), Oi(e, i);
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = ea(e), o = vn(i);
        o.tag = Eb, o.payload = t, a != null && (rm(a), o.callback = a), t = Fa(e, o, i), t !== null && (Gt(t, e, i), Iu(t, e, i)), Oi(e, i);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = ea(e), i = vn(a);
        i.tag = Ab, t != null && (rm(t), i.callback = t), t = Fa(e, i, a), t !== null && (Gt(t, e, a), Iu(t, e, a)), P !== null && typeof P.markForceUpdateScheduled == "function" && P.markForceUpdateScheduled(e, a);
      }
    }, dv = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, ih = null, hv = null, n1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), wl = !1, u1 = {}, i1 = {}, c1 = {}, o1 = {}, ch = !1, f1 = {}, mv = {}, yv = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, s1 = !1, r1 = null;
    r1 = /* @__PURE__ */ new Set();
    var Hc = !1, ll = !1, pv = !1, d1 = typeof WeakSet == "function" ? WeakSet : Set, Nl = null, oh = null, fh = null, dl = null, Xa = !1, Bu = null, Wy = 8192, f2 = {
      getCacheForType: function(e) {
        var t = Rt(Al), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      getOwner: function() {
        return ba;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var Fy = Symbol.for;
      Fy("selector.component"), Fy("selector.has_pseudo_class"), Fy("selector.role"), Fy("selector.test_id"), Fy("selector.text");
    }
    var s2 = [], r2 = typeof WeakMap == "function" ? WeakMap : Map, on = 0, Aa = 2, _u = 4, wc = 0, Iy = 1, sh = 2, gv = 3, Bs = 4, kg = 6, h1 = 5, yt = on, Mt = null, $e = null, Pe = 0, La = 0, Py = 1, _s = 2, ep = 3, m1 = 4, vv = 5, rh = 6, tp = 7, bv = 8, qs = 9, vt = La, fn = null, Jo = !1, dh = !1, Sv = !1, Di = 0, $t = wc, Ko = 0, $o = 0, Tv = 0, sn = 0, js = 0, lp = null, xa = null, Jg = !1, Ev = 0, y1 = 300, Kg = 1 / 0, p1 = 500, ap = null, Wo = null, d2 = 0, h2 = 1, m2 = 2, Ys = 0, g1 = 1, v1 = 2, b1 = 3, y2 = 4, Av = 5, Zl = 0, Fo = null, hh = null, Io = 0, xv = 0, zv = null, S1 = null, p2 = 50, np = 0, Rv = null, Mv = !1, $g = !1, g2 = 50, Gs = 0, up = null, mh = !1, Wg = null, T1 = !1, E1 = /* @__PURE__ */ new Set(), v2 = {}, Fg = null, yh = null, Dv = !1, Ov = !1, Ig = !1, Uv = !1, Vs = 0, Cv = {};
    (function() {
      for (var e = 0; e < K0.length; e++) {
        var t = K0[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), ka(a, "on" + t);
      }
      ka(ib, "onAnimationEnd"), ka(cb, "onAnimationIteration"), ka(ob, "onAnimationStart"), ka("dblclick", "onDoubleClick"), ka("focusin", "onFocus"), ka("focusout", "onBlur"), ka($S, "onTransitionRun"), ka(WS, "onTransitionStart"), ka(FS, "onTransitionCancel"), ka(fb, "onTransitionEnd");
    })(), Ci("onMouseEnter", ["mouseout", "mouseover"]), Ci("onMouseLeave", ["mouseout", "mouseover"]), Ci("onPointerEnter", ["pointerout", "pointerover"]), Ci("onPointerLeave", ["pointerout", "pointerover"]), ju(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), ju(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), ju("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), ju(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), ju(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), ju(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var ip = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), Hv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ip)
    ), Pg = "_reactListening" + Math.random().toString(36).slice(2), A1 = !1, x1 = !1, e0 = !1, z1 = !1, t0 = !1, l0 = !1, R1 = !1, a0 = {}, b2 = /\r\n?/g, S2 = /\u0000|\uFFFD/g, Xs = "http://www.w3.org/1999/xlink", wv = "http://www.w3.org/XML/1998/namespace", T2 = "javascript:throw new Error('React form unexpectedly submitted.')", E2 = "suppressHydrationWarning", n0 = "$", u0 = "/$", Nc = "$?", cp = "$!", A2 = 1, x2 = 2, z2 = 4, Nv = "F!", M1 = "F", D1 = "complete", R2 = "style", Bc = 0, ph = 1, i0 = 2, Bv = null, _v = null, O1 = { dialog: !0, webview: !0 }, qv = null, U1 = typeof setTimeout == "function" ? setTimeout : void 0, M2 = typeof clearTimeout == "function" ? clearTimeout : void 0, Ls = -1, C1 = typeof Promise == "function" ? Promise : void 0, D2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof C1 < "u" ? function(e) {
      return C1.resolve(null).then(e).catch(Fm);
    } : U1, jv = null, Qs = 0, op = 1, H1 = 2, w1 = 3, Pn = 4, eu = /* @__PURE__ */ new Map(), N1 = /* @__PURE__ */ new Set(), _c = xe.d;
    xe.d = {
      f: function() {
        var e = _c.f(), t = rc();
        return e || t;
      },
      r: function(e) {
        var t = fa(e);
        t !== null && t.tag === 5 && t.type === "form" ? om(t) : _c.r(e);
      },
      D: function(e) {
        _c.D(e), fg("dns-prefetch", e, null);
      },
      C: function(e, t) {
        _c.C(e, t), fg("preconnect", e, t);
      },
      L: function(e, t, a) {
        _c.L(e, t, a);
        var i = gh;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + sa(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + sa(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + sa(
            a.imageSizes
          ) + '"]')) : o += '[href="' + sa(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = hi(e);
              break;
            case "script":
              f = vc(e);
          }
          eu.has(f) || (e = Ye(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), eu.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            Yn(f)
          ) || t === "script" && i.querySelector(bc(f)) || (t = i.createElement("link"), Xt(t, "link", e), nl(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        _c.m(e, t);
        var a = gh;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + sa(i) + '"][href="' + sa(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = vc(e);
          }
          if (!eu.has(f) && (e = Ye({ rel: "modulepreload", href: e }, t), eu.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(bc(f)))
                  return;
            }
            i = a.createElement("link"), Xt(i, "link", e), nl(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        _c.X(e, t);
        var a = gh;
        if (a && e) {
          var i = rn(a).hoistableScripts, o = vc(e), f = i.get(o);
          f || (f = a.querySelector(
            bc(o)
          ), f || (e = Ye({ src: e, async: !0 }, t), (t = eu.get(o)) && uy(e, t), f = a.createElement("script"), nl(f), Xt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        _c.S(e, t, a);
        var i = gh;
        if (i && e) {
          var o = rn(i).hoistableStyles, f = hi(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: Qs, preload: null };
            if (d = i.querySelector(
              Yn(f)
            ))
              h.loading = op | Pn;
            else {
              e = Ye(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = eu.get(f)) && ny(e, a);
              var p = d = i.createElement("link");
              nl(p), Xt(p, "link", e), p._p = new Promise(function(v, C) {
                p.onload = v, p.onerror = C;
              }), p.addEventListener("load", function() {
                h.loading |= op;
              }), p.addEventListener("error", function() {
                h.loading |= H1;
              }), h.loading |= Pn, Sd(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        _c.M(e, t);
        var a = gh;
        if (a && e) {
          var i = rn(a).hoistableScripts, o = vc(e), f = i.get(o);
          f || (f = a.querySelector(
            bc(o)
          ), f || (e = Ye({ src: e, async: !0, type: "module" }, t), (t = eu.get(o)) && uy(e, t), f = a.createElement("script"), nl(f), Xt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var gh = typeof document > "u" ? null : document, c0 = null, fp = null, Yv = null, o0 = null, Zs = q0, sp = {
      $$typeof: ja,
      Provider: null,
      Consumer: null,
      _currentValue: Zs,
      _currentValue2: Zs,
      _threadCount: 0
    }, B1 = "%c%s%c ", _1 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", q1 = "", f0 = " ", O2 = Function.prototype.bind, j1 = !1, Y1 = null, G1 = null, V1 = null, X1 = null, L1 = null, Q1 = null, Z1 = null, k1 = null, J1 = null;
    Y1 = function(e, t, a, i) {
      t = g(e, t), t !== null && (a = N(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ye({}, e.memoizedProps), a = Jl(e, 2), a !== null && Gt(a, e, 2));
    }, G1 = function(e, t, a) {
      t = g(e, t), t !== null && (a = J(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ye({}, e.memoizedProps), a = Jl(e, 2), a !== null && Gt(a, e, 2));
    }, V1 = function(e, t, a, i) {
      t = g(e, t), t !== null && (a = w(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ye({}, e.memoizedProps), a = Jl(e, 2), a !== null && Gt(a, e, 2));
    }, X1 = function(e, t, a) {
      e.pendingProps = N(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Jl(e, 2), t !== null && Gt(t, e, 2);
    }, L1 = function(e, t) {
      e.pendingProps = J(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Jl(e, 2), t !== null && Gt(t, e, 2);
    }, Q1 = function(e, t, a) {
      e.pendingProps = w(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Jl(e, 2), t !== null && Gt(t, e, 2);
    }, Z1 = function(e) {
      var t = Jl(e, 2);
      t !== null && Gt(t, e, 2);
    }, k1 = function(e) {
      W = e;
    }, J1 = function(e) {
      K = e;
    };
    var s0 = !0, r0 = null, Gv = !1, Po = null, ef = null, tf = null, rp = /* @__PURE__ */ new Map(), dp = /* @__PURE__ */ new Map(), lf = [], U2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), d0 = null;
    if (ds.prototype.render = Rd.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : je(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = ea(i);
      mt(i, o, a, t, null, null);
    }, ds.prototype.unmount = Rd.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (yt & (Aa | _u)) !== on && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), mt(e.current, 2, null, e, null, null), rc(), t[Ti] = null;
      }
    }, ds.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Sp();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < lf.length && t !== 0 && t < lf[a].priority; a++) ;
        lf.splice(a, 0, e), a === 0 && yg(e);
      }
    }, function() {
      var e = hs.version;
      if (e !== "19.1.0")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.1.0
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    }(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), xe.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = rt(t), e = e !== null ? xt(e) : null, e = e === null ? null : e.stateNode, e;
    }, !function() {
      var e = {
        bundleType: 1,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: q,
        reconcilerVersion: "19.1.0"
      };
      return e.overrideHookState = Y1, e.overrideHookStateDeletePath = G1, e.overrideHookStateRenamePath = V1, e.overrideProps = X1, e.overridePropsDeletePath = L1, e.overridePropsRenamePath = Q1, e.scheduleUpdate = Z1, e.setErrorHandler = k1, e.setSuspenseHandler = J1, e.scheduleRefresh = qe, e.scheduleRoot = _e, e.setRefreshHandler = Te, e.getCurrentFiber = w0, e.getLaneLabelMap = N0, e.injectProfilingHooks = St, Ie(e);
    }() && S && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var K1 = window.location.protocol;
      /^(https?|file):$/.test(K1) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (K1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    pp.createRoot = function(e, t) {
      if (!je(e))
        throw Error("Target container is not a DOM element.");
      vg(e);
      var a = !1, i = "", o = dm, f = Jp, d = wr, h = null;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === pi && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (h = t.unstable_transitionCallbacks)), t = oy(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        o,
        f,
        d,
        h,
        null
      ), e[Ti] = t.current, Qm(e), new Rd(t);
    }, pp.hydrateRoot = function(e, t, a) {
      if (!je(e))
        throw Error("Target container is not a DOM element.");
      vg(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = dm, d = Jp, h = wr, p = null, v = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (p = a.unstable_transitionCallbacks), a.formState !== void 0 && (v = a.formState)), t = oy(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        o,
        f,
        d,
        h,
        p,
        v
      ), t.context = fy(null), a = t.current, i = ea(a), i = Bl(i), o = vn(i), o.callback = null, Fa(a, o, i), a = i, t.current.lanes = a, Yc(t, a), Ba(t), e[Ti] = t.current, Qm(e), new ds(t);
    }, pp.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), pp;
}
var aS;
function V2() {
  if (aS) return m0.exports;
  aS = 1;
  function g() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (N) {
        console.error(N);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (g(), m0.exports = Y2()) : m0.exports = G2(), m0.exports;
}
var X2 = V2();
const L2 = /* @__PURE__ */ w2(X2);
function Q2() {
  if (!document.getElementById("tailwind-cdn")) {
    const g = document.createElement("script");
    g.src = "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4", g.id = "tailwind-cdn", document.head.appendChild(g);
  }
  if (!document.getElementById("fa-cdn")) {
    const g = document.createElement("link");
    g.rel = "stylesheet", g.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css", g.id = "fa-cdn", document.head.appendChild(g);
  }
}
const hS = {
  NEXT_PUBLIC_LOGIN_CUSTOMER_API: "https://mimin-test.mimin.io/mimin-backend",
  NEXT_PUBLIC_CHATBOT_URL: "https://mimin-api.mimin.io/backend-gen-ai"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z2 = (g) => g.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), k2 = (g) => g.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (N, w, b) => b ? b.toUpperCase() : w.toLowerCase()
), nS = (g) => {
  const N = k2(g);
  return N.charAt(0).toUpperCase() + N.slice(1);
}, mS = (...g) => g.filter((N, w, b) => !!N && N.trim() !== "" && b.indexOf(N) === w).join(" ").trim(), J2 = (g) => {
  for (const N in g)
    if (N.startsWith("aria-") || N === "role" || N === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var K2 = {
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
const $2 = sS(
  ({
    color: g = "currentColor",
    size: N = 24,
    strokeWidth: w = 2,
    absoluteStrokeWidth: b,
    className: J = "",
    children: K,
    iconNode: W,
    ...ae
  }, X) => Zv(
    "svg",
    {
      ref: X,
      ...K2,
      width: N,
      height: N,
      stroke: g,
      strokeWidth: b ? Number(w) * 24 / Number(N) : w,
      className: mS("lucide", J),
      ...!K && !J2(ae) && { "aria-hidden": "true" },
      ...ae
    },
    [
      ...W.map(([me, he]) => Zv(me, he)),
      ...Array.isArray(K) ? K : [K]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = (g, N) => {
  const w = sS(
    ({ className: b, ...J }, K) => Zv($2, {
      ref: K,
      iconNode: N,
      className: mS(
        `lucide-${Z2(nS(g))}`,
        `lucide-${g}`,
        b
      ),
      ...J
    })
  );
  return w.displayName = nS(g), w;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W2 = [
  ["path", { d: "M2 10v3", key: "1fnikh" }],
  ["path", { d: "M6 6v11", key: "11sgs0" }],
  ["path", { d: "M10 3v18", key: "yhl04a" }],
  ["path", { d: "M14 8v7", key: "3a1oy3" }],
  ["path", { d: "M18 5v13", key: "123xd1" }],
  ["path", { d: "M22 10v3", key: "154ddg" }]
], F2 = $s("audio-lines", W2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I2 = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], P2 = $s("mic", I2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eT = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], yS = $s("phone", eT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tT = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], lT = $s("rotate-ccw", tT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aT = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], nT = $s("send", aT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uT = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], iT = $s("volume-2", uT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cT = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], oT = $s("x", cT), uS = (g) => {
  let N;
  const w = /* @__PURE__ */ new Set(), b = (me, he) => {
    const Re = typeof me == "function" ? me(N) : me;
    if (!Object.is(Re, N)) {
      const ve = N;
      N = he ?? (typeof Re != "object" || Re === null) ? Re : Object.assign({}, N, Re), w.forEach((_e) => _e(N, ve));
    }
  }, J = () => N, ae = { setState: b, getState: J, getInitialState: () => X, subscribe: (me) => (w.add(me), () => w.delete(me)) }, X = N = g(b, J, ae);
  return ae;
}, fT = (g) => g ? uS(g) : uS, sT = (g) => g;
function rT(g, N = sT) {
  const w = Ks.useSyncExternalStore(
    g.subscribe,
    () => N(g.getState()),
    () => N(g.getInitialState())
  );
  return Ks.useDebugValue(w), w;
}
const dT = (g) => {
  const N = fT(g), w = (b) => rT(N, b);
  return Object.assign(w, N), w;
}, hT = (g) => dT;
function mT(g, N) {
  let w;
  try {
    w = g();
  } catch {
    return;
  }
  return {
    getItem: (J) => {
      var K;
      const W = (X) => X === null ? null : JSON.parse(X, void 0), ae = (K = w.getItem(J)) != null ? K : null;
      return ae instanceof Promise ? ae.then(W) : W(ae);
    },
    setItem: (J, K) => w.setItem(J, JSON.stringify(K, void 0)),
    removeItem: (J) => w.removeItem(J)
  };
}
const kv = (g) => (N) => {
  try {
    const w = g(N);
    return w instanceof Promise ? w : {
      then(b) {
        return kv(b)(w);
      },
      catch(b) {
        return this;
      }
    };
  } catch (w) {
    return {
      then(b) {
        return this;
      },
      catch(b) {
        return kv(b)(w);
      }
    };
  }
}, yT = (g, N) => (w, b, J) => {
  let K = {
    storage: mT(() => localStorage),
    partialize: (Te) => Te,
    version: 0,
    merge: (Te, je) => ({
      ...je,
      ...Te
    }),
    ...N
  }, W = !1;
  const ae = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Set();
  let me = K.storage;
  if (!me)
    return g(
      (...Te) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${K.name}', the given storage is currently unavailable.`
        ), w(...Te);
      },
      b,
      J
    );
  const he = () => {
    const Te = K.partialize({ ...b() });
    return me.setItem(K.name, {
      state: Te,
      version: K.version
    });
  }, Re = J.setState;
  J.setState = (Te, je) => {
    Re(Te, je), he();
  };
  const ve = g(
    (...Te) => {
      w(...Te), he();
    },
    b,
    J
  );
  J.getInitialState = () => ve;
  let _e;
  const qe = () => {
    var Te, je;
    if (!me) return;
    W = !1, ae.forEach((Qe) => {
      var Ge;
      return Qe((Ge = b()) != null ? Ge : ve);
    });
    const Oe = ((je = K.onRehydrateStorage) == null ? void 0 : je.call(K, (Te = b()) != null ? Te : ve)) || void 0;
    return kv(me.getItem.bind(me))(K.name).then((Qe) => {
      if (Qe)
        if (typeof Qe.version == "number" && Qe.version !== K.version) {
          if (K.migrate) {
            const Ge = K.migrate(
              Qe.state,
              Qe.version
            );
            return Ge instanceof Promise ? Ge.then((rt) => [!0, rt]) : [!0, Ge];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, Qe.state];
      return [!1, void 0];
    }).then((Qe) => {
      var Ge;
      const [rt, xt] = Qe;
      if (_e = K.merge(
        xt,
        (Ge = b()) != null ? Ge : ve
      ), w(_e, !0), rt)
        return he();
    }).then(() => {
      Oe?.(_e, void 0), _e = b(), W = !0, X.forEach((Qe) => Qe(_e));
    }).catch((Qe) => {
      Oe?.(void 0, Qe);
    });
  };
  return J.persist = {
    setOptions: (Te) => {
      K = {
        ...K,
        ...Te
      }, Te.storage && (me = Te.storage);
    },
    clearStorage: () => {
      me?.removeItem(K.name);
    },
    getOptions: () => K,
    rehydrate: () => qe(),
    hasHydrated: () => W,
    onHydrate: (Te) => (ae.add(Te), () => {
      ae.delete(Te);
    }),
    onFinishHydration: (Te) => (X.add(Te), () => {
      X.delete(Te);
    })
  }, K.skipHydration || qe(), _e || ve;
}, pT = yT, b0 = hT()(
  pT(
    (g) => ({
      config: null,
      signature: "",
      setConfig: (N) => g({ config: N }),
      setSignature: (N) => g({ signature: N })
    }),
    {
      name: "config-store"
    }
  )
), gT = ({
  onToggleCallWindow: g,
  onToggleChatWindow: N
}) => {
  const { config: w } = b0();
  return /* @__PURE__ */ ee.jsxs(
    "div",
    {
      className: "flex items-center justify-between gap-2 px-4 py-2",
      style: {
        backgroundColor: w?.theme?.chatWindow?.backgroundColor || "#0096a2"
      },
      children: [
        /* @__PURE__ */ ee.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ ee.jsx("div", { className: "flex items-center justify-center w-9 h-9 rounded-full bg-white", children: /* @__PURE__ */ ee.jsx(
            "img",
            {
              src: w?.theme?.chatWindow?.titleAvatarSrc || "https://res.cloudinary.com/dctqloe37/image/upload/v1752147771/agent_ohofti.jpg",
              alt: "ICON",
              className: "w-6 h-6 rounded-full"
            }
          ) }),
          /* @__PURE__ */ ee.jsx(
            "h3",
            {
              className: "text-base font-bold",
              style: { color: w?.theme?.chatWindow?.titleColor || "#ffffff" },
              children: w?.theme?.chatWindow?.title || "Mimin AI"
            }
          )
        ] }),
        /* @__PURE__ */ ee.jsxs("div", { className: "flex items-center gap-4", children: [
          w?.theme?.chatWindow?.isActiveCall && /* @__PURE__ */ ee.jsx(
            "button",
            {
              className: "cursor-pointer",
              style: {
                color: w?.theme?.chatWindow?.titleColor || "#ffffff"
              },
              onClick: g,
              children: /* @__PURE__ */ ee.jsx(
                yS,
                {
                  className: "w-4 h-4",
                  color: w?.theme?.chatWindow?.titleColor || "#ffffff"
                }
              )
            }
          ),
          /* @__PURE__ */ ee.jsx(
            "button",
            {
              className: "cursor-pointer",
              style: { color: w?.theme?.chatWindow?.titleColor || "#ffffff" },
              children: /* @__PURE__ */ ee.jsx(
                lT,
                {
                  className: "w-4 h-4",
                  color: w?.theme?.chatWindow?.titleColor || "#ffffff"
                }
              )
            }
          ),
          /* @__PURE__ */ ee.jsx(
            "button",
            {
              className: "cursor-pointer",
              style: { color: w?.theme?.chatWindow?.titleColor || "#ffffff" },
              onClick: N,
              children: /* @__PURE__ */ ee.jsx(
                oT,
                {
                  className: "w-4 h-4",
                  color: w?.theme?.chatWindow?.titleColor || "#ffffff"
                }
              )
            }
          )
        ] })
      ]
    }
  );
}, vT = ({
  onSendMessage: g,
  loading: N,
  fetching: w
}) => {
  const [b, J] = tu(""), { config: K } = b0(), W = () => {
    !w && !N && b.length > 0 && (g(b), J(""));
  };
  return /* @__PURE__ */ ee.jsxs(
    "div",
    {
      className: "px-2 pt-2 pb-1 overflow-hidden max-h-full",
      style: {
        backgroundColor: K?.theme?.chatWindow?.textInput?.backgroundColor || "#0096a2",
        overflowAnchor: "none"
      },
      children: [
        /* @__PURE__ */ ee.jsxs("div", { className: "relative flex items-center gap-2", children: [
          /* @__PURE__ */ ee.jsx(
            "input",
            {
              type: "text",
              className: "flex-1 border rounded-md p-2 bg-white pr-10 focus:outline focus:outline-[#ffa100]",
              style: {
                borderColor: K?.theme?.chatWindow?.textInput?.borderColor || "#ffffff"
              },
              placeholder: K?.theme?.chatWindow?.textInput?.placeholder || "Ketik pertanyaan Anda...",
              value: b,
              onChange: (ae) => J(ae.target.value),
              onKeyDown: (ae) => {
                ae.key === "Enter" && (ae.preventDefault(), ae.stopPropagation(), W());
              }
            }
          ),
          /* @__PURE__ */ ee.jsx(
            "button",
            {
              className: "absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
              disabled: N,
              onClick: (ae) => {
                ae.preventDefault(), ae.stopPropagation(), W();
              },
              children: /* @__PURE__ */ ee.jsx(
                nT,
                {
                  className: "w-4 h-4",
                  color: K?.theme?.chatWindow?.textInput?.sendButtonColor || "#0096a2"
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ ee.jsxs("p", { className: "text-white text-[10px] font-medium text-center mt-1", children: [
          "Powered by",
          " ",
          /* @__PURE__ */ ee.jsx("a", { href: "https://mimin.io", className: "underline", children: "Mimin" })
        ] })
      ]
    }
  );
};
function pS(g) {
  var N, w, b = "";
  if (typeof g == "string" || typeof g == "number") b += g;
  else if (typeof g == "object") if (Array.isArray(g)) {
    var J = g.length;
    for (N = 0; N < J; N++) g[N] && (w = pS(g[N])) && (b && (b += " "), b += w);
  } else for (w in g) g[w] && (b && (b += " "), b += w);
  return b;
}
function bT() {
  for (var g, N, w = 0, b = "", J = arguments.length; w < J; w++) (g = arguments[w]) && (N = pS(g)) && (b && (b += " "), b += N);
  return b;
}
const Wv = "-", ST = (g) => {
  const N = ET(g), {
    conflictingClassGroups: w,
    conflictingClassGroupModifiers: b
  } = g;
  return {
    getClassGroupId: (W) => {
      const ae = W.split(Wv);
      return ae[0] === "" && ae.length !== 1 && ae.shift(), gS(ae, N) || TT(W);
    },
    getConflictingClassGroupIds: (W, ae) => {
      const X = w[W] || [];
      return ae && b[W] ? [...X, ...b[W]] : X;
    }
  };
}, gS = (g, N) => {
  if (g.length === 0)
    return N.classGroupId;
  const w = g[0], b = N.nextPart.get(w), J = b ? gS(g.slice(1), b) : void 0;
  if (J)
    return J;
  if (N.validators.length === 0)
    return;
  const K = g.join(Wv);
  return N.validators.find(({
    validator: W
  }) => W(K))?.classGroupId;
}, iS = /^\[(.+)\]$/, TT = (g) => {
  if (iS.test(g)) {
    const N = iS.exec(g)[1], w = N?.substring(0, N.indexOf(":"));
    if (w)
      return "arbitrary.." + w;
  }
}, ET = (g) => {
  const {
    theme: N,
    classGroups: w
  } = g, b = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const J in w)
    Jv(w[J], b, J, N);
  return b;
}, Jv = (g, N, w, b) => {
  g.forEach((J) => {
    if (typeof J == "string") {
      const K = J === "" ? N : cS(N, J);
      K.classGroupId = w;
      return;
    }
    if (typeof J == "function") {
      if (AT(J)) {
        Jv(J(b), N, w, b);
        return;
      }
      N.validators.push({
        validator: J,
        classGroupId: w
      });
      return;
    }
    Object.entries(J).forEach(([K, W]) => {
      Jv(W, cS(N, K), w, b);
    });
  });
}, cS = (g, N) => {
  let w = g;
  return N.split(Wv).forEach((b) => {
    w.nextPart.has(b) || w.nextPart.set(b, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), w = w.nextPart.get(b);
  }), w;
}, AT = (g) => g.isThemeGetter, xT = (g) => {
  if (g < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let N = 0, w = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map();
  const J = (K, W) => {
    w.set(K, W), N++, N > g && (N = 0, b = w, w = /* @__PURE__ */ new Map());
  };
  return {
    get(K) {
      let W = w.get(K);
      if (W !== void 0)
        return W;
      if ((W = b.get(K)) !== void 0)
        return J(K, W), W;
    },
    set(K, W) {
      w.has(K) ? w.set(K, W) : J(K, W);
    }
  };
}, Kv = "!", $v = ":", zT = $v.length, RT = (g) => {
  const {
    prefix: N,
    experimentalParseClassName: w
  } = g;
  let b = (J) => {
    const K = [];
    let W = 0, ae = 0, X = 0, me;
    for (let qe = 0; qe < J.length; qe++) {
      let Te = J[qe];
      if (W === 0 && ae === 0) {
        if (Te === $v) {
          K.push(J.slice(X, qe)), X = qe + zT;
          continue;
        }
        if (Te === "/") {
          me = qe;
          continue;
        }
      }
      Te === "[" ? W++ : Te === "]" ? W-- : Te === "(" ? ae++ : Te === ")" && ae--;
    }
    const he = K.length === 0 ? J : J.substring(X), Re = MT(he), ve = Re !== he, _e = me && me > X ? me - X : void 0;
    return {
      modifiers: K,
      hasImportantModifier: ve,
      baseClassName: Re,
      maybePostfixModifierPosition: _e
    };
  };
  if (N) {
    const J = N + $v, K = b;
    b = (W) => W.startsWith(J) ? K(W.substring(J.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: W,
      maybePostfixModifierPosition: void 0
    };
  }
  if (w) {
    const J = b;
    b = (K) => w({
      className: K,
      parseClassName: J
    });
  }
  return b;
}, MT = (g) => g.endsWith(Kv) ? g.substring(0, g.length - 1) : g.startsWith(Kv) ? g.substring(1) : g, DT = (g) => {
  const N = Object.fromEntries(g.orderSensitiveModifiers.map((b) => [b, !0]));
  return (b) => {
    if (b.length <= 1)
      return b;
    const J = [];
    let K = [];
    return b.forEach((W) => {
      W[0] === "[" || N[W] ? (J.push(...K.sort(), W), K = []) : K.push(W);
    }), J.push(...K.sort()), J;
  };
}, OT = (g) => ({
  cache: xT(g.cacheSize),
  parseClassName: RT(g),
  sortModifiers: DT(g),
  ...ST(g)
}), UT = /\s+/, CT = (g, N) => {
  const {
    parseClassName: w,
    getClassGroupId: b,
    getConflictingClassGroupIds: J,
    sortModifiers: K
  } = N, W = [], ae = g.trim().split(UT);
  let X = "";
  for (let me = ae.length - 1; me >= 0; me -= 1) {
    const he = ae[me], {
      isExternal: Re,
      modifiers: ve,
      hasImportantModifier: _e,
      baseClassName: qe,
      maybePostfixModifierPosition: Te
    } = w(he);
    if (Re) {
      X = he + (X.length > 0 ? " " + X : X);
      continue;
    }
    let je = !!Te, Oe = b(je ? qe.substring(0, Te) : qe);
    if (!Oe) {
      if (!je) {
        X = he + (X.length > 0 ? " " + X : X);
        continue;
      }
      if (Oe = b(qe), !Oe) {
        X = he + (X.length > 0 ? " " + X : X);
        continue;
      }
      je = !1;
    }
    const Qe = K(ve).join(":"), Ge = _e ? Qe + Kv : Qe, rt = Ge + Oe;
    if (W.includes(rt))
      continue;
    W.push(rt);
    const xt = J(Oe, je);
    for (let nt = 0; nt < xt.length; ++nt) {
      const Ne = xt[nt];
      W.push(Ge + Ne);
    }
    X = he + (X.length > 0 ? " " + X : X);
  }
  return X;
};
function HT() {
  let g = 0, N, w, b = "";
  for (; g < arguments.length; )
    (N = arguments[g++]) && (w = vS(N)) && (b && (b += " "), b += w);
  return b;
}
const vS = (g) => {
  if (typeof g == "string")
    return g;
  let N, w = "";
  for (let b = 0; b < g.length; b++)
    g[b] && (N = vS(g[b])) && (w && (w += " "), w += N);
  return w;
};
function wT(g, ...N) {
  let w, b, J, K = W;
  function W(X) {
    const me = N.reduce((he, Re) => Re(he), g());
    return w = OT(me), b = w.cache.get, J = w.cache.set, K = ae, ae(X);
  }
  function ae(X) {
    const me = b(X);
    if (me)
      return me;
    const he = CT(X, w);
    return J(X, he), he;
  }
  return function() {
    return K(HT.apply(null, arguments));
  };
}
const Rl = (g) => {
  const N = (w) => w[g] || [];
  return N.isThemeGetter = !0, N;
}, bS = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, SS = /^\((?:(\w[\w-]*):)?(.+)\)$/i, NT = /^\d+\/\d+$/, BT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, _T = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, qT = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, jT = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, YT = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, vh = (g) => NT.test(g), We = (g) => !!g && !Number.isNaN(Number(g)), af = (g) => !!g && Number.isInteger(Number(g)), Lv = (g) => g.endsWith("%") && We(g.slice(0, -1)), jc = (g) => BT.test(g), GT = () => !0, VT = (g) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  _T.test(g) && !qT.test(g)
), TS = () => !1, XT = (g) => jT.test(g), LT = (g) => YT.test(g), QT = (g) => !re(g) && !de(g), ZT = (g) => bh(g, xS, TS), re = (g) => bS.test(g), ks = (g) => bh(g, zS, VT), Qv = (g) => bh(g, WT, We), oS = (g) => bh(g, ES, TS), kT = (g) => bh(g, AS, LT), p0 = (g) => bh(g, RS, XT), de = (g) => SS.test(g), gp = (g) => Sh(g, zS), JT = (g) => Sh(g, FT), fS = (g) => Sh(g, ES), KT = (g) => Sh(g, xS), $T = (g) => Sh(g, AS), g0 = (g) => Sh(g, RS, !0), bh = (g, N, w) => {
  const b = bS.exec(g);
  return b ? b[1] ? N(b[1]) : w(b[2]) : !1;
}, Sh = (g, N, w = !1) => {
  const b = SS.exec(g);
  return b ? b[1] ? N(b[1]) : w : !1;
}, ES = (g) => g === "position" || g === "percentage", AS = (g) => g === "image" || g === "url", xS = (g) => g === "length" || g === "size" || g === "bg-size", zS = (g) => g === "length", WT = (g) => g === "number", FT = (g) => g === "family-name", RS = (g) => g === "shadow", IT = () => {
  const g = Rl("color"), N = Rl("font"), w = Rl("text"), b = Rl("font-weight"), J = Rl("tracking"), K = Rl("leading"), W = Rl("breakpoint"), ae = Rl("container"), X = Rl("spacing"), me = Rl("radius"), he = Rl("shadow"), Re = Rl("inset-shadow"), ve = Rl("text-shadow"), _e = Rl("drop-shadow"), qe = Rl("blur"), Te = Rl("perspective"), je = Rl("aspect"), Oe = Rl("ease"), Qe = Rl("animate"), Ge = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], rt = () => [
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
  ], xt = () => [...rt(), de, re], nt = () => ["auto", "hidden", "clip", "visible", "scroll"], Ne = () => ["auto", "contain", "none"], se = () => [de, re, X], ne = () => [vh, "full", "auto", ...se()], bt = () => [af, "none", "subgrid", de, re], Fe = () => ["auto", {
    span: ["full", af, de, re]
  }, af, de, re], pe = () => [af, "auto", de, re], Et = () => ["auto", "min", "max", "fr", de, re], wt = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], dt = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], x = () => ["auto", ...se()], Q = () => [vh, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...se()], _ = () => [g, de, re], ye = () => [...rt(), fS, oS, {
    position: [de, re]
  }], B = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], te = () => ["auto", "cover", "contain", KT, ZT, {
    size: [de, re]
  }], F = () => [Lv, gp, ks], le = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    me,
    de,
    re
  ], ie = () => ["", We, gp, ks], Ie = () => ["solid", "dashed", "dotted", "double"], Ze = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], St = () => [We, Lv, fS, oS], zt = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    qe,
    de,
    re
  ], qt = () => ["none", We, de, re], hl = () => ["none", We, de, re], Qa = () => [We, de, re], lu = () => [vh, "full", ...se()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [jc],
      breakpoint: [jc],
      color: [GT],
      container: [jc],
      "drop-shadow": [jc],
      ease: ["in", "out", "in-out"],
      font: [QT],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [jc],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [jc],
      shadow: [jc],
      spacing: ["px", We],
      text: [jc],
      "text-shadow": [jc],
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
        aspect: ["auto", "square", vh, re, de, je]
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
        columns: [We, re, de, ae]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Ge()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Ge()
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
        object: xt()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: nt()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": nt()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": nt()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Ne()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Ne()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Ne()
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
        inset: ne()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": ne()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": ne()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: ne()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: ne()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: ne()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: ne()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: ne()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: ne()
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
        z: [af, "auto", de, re]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [vh, "full", "auto", ae, ...se()]
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
        flex: [We, vh, "auto", "initial", "none", re]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", We, de, re]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", We, de, re]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [af, "first", "last", "none", de, re]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": bt()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: Fe()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": pe()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": pe()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": bt()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: Fe()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": pe()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": pe()
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
        "auto-cols": Et()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Et()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: se()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": se()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": se()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...wt(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...dt(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...dt()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...wt()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...dt(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...dt(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": wt()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...dt(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...dt()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: se()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: se()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: se()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: se()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: se()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: se()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: se()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: se()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: se()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: x()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: x()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: x()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: x()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: x()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: x()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: x()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: x()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: x()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": se()
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
        "space-y": se()
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
        size: Q()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [ae, "screen", ...Q()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          ae,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...Q()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          ae,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [W]
          },
          ...Q()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Q()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Q()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Q()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", w, gp, ks]
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
        font: [b, de, Qv]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Lv, re]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [JT, re, N]
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
        tracking: [J, de, re]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [We, "none", de, Qv]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          K,
          ...se()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", de, re]
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
        list: ["disc", "decimal", "none", de, re]
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
        placeholder: _()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: _()
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
        decoration: [...Ie(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [We, "from-font", "auto", de, ks]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: _()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [We, "auto", de, re]
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
        indent: se()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", de, re]
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
        content: ["none", de, re]
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
        bg: ye()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: B()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: te()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, af, de, re],
          radial: ["", de, re],
          conic: [af, de, re]
        }, $T, kT]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: _()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: F()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: F()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: F()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: _()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: _()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: _()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: le()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": le()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": le()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": le()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": le()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": le()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": le()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": le()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": le()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": le()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": le()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": le()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": le()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": le()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": le()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: ie()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": ie()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": ie()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": ie()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": ie()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": ie()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": ie()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": ie()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": ie()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": ie()
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
        "divide-y": ie()
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
        border: [...Ie(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Ie(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: _()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": _()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": _()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": _()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": _()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": _()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": _()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": _()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": _()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: _()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Ie(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [We, de, re]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", We, gp, ks]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: _()
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
          he,
          g0,
          p0
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: _()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", Re, g0, p0]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": _()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: ie()
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
        ring: _()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [We, ks]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": _()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": ie()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": _()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", ve, g0, p0]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": _()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [We, de, re]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Ze(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Ze()
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
        "mask-linear": [We]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": St()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": St()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": _()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": _()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": St()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": St()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": _()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": _()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": St()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": St()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": _()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": _()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": St()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": St()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": _()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": _()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": St()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": St()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": _()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": _()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": St()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": St()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": _()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": _()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": St()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": St()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": _()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": _()
      }],
      "mask-image-radial": [{
        "mask-radial": [de, re]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": St()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": St()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": _()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": _()
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
        "mask-radial-at": rt()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [We]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": St()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": St()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": _()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": _()
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
        mask: ye()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: B()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: te()
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
        mask: ["none", de, re]
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
          de,
          re
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: zt()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [We, de, re]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [We, de, re]
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
          _e,
          g0,
          p0
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": _()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", We, de, re]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [We, de, re]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", We, de, re]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [We, de, re]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", We, de, re]
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
          de,
          re
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": zt()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [We, de, re]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [We, de, re]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", We, de, re]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [We, de, re]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", We, de, re]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [We, de, re]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [We, de, re]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", We, de, re]
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
        "border-spacing": se()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": se()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": se()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", de, re]
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
        duration: [We, "initial", de, re]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", Oe, de, re]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [We, de, re]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", Qe, de, re]
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
        perspective: [Te, de, re]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": xt()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: qt()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": qt()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": qt()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": qt()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: hl()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": hl()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": hl()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": hl()
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
        skew: Qa()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Qa()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Qa()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [de, re, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: xt()
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
        translate: lu()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": lu()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": lu()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": lu()
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
        accent: _()
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
        caret: _()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", de, re]
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
        "scroll-m": se()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": se()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": se()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": se()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": se()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": se()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": se()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": se()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": se()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": se()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": se()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": se()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": se()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": se()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": se()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": se()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": se()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": se()
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
        "will-change": ["auto", "scroll", "contents", "transform", de, re]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ..._()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [We, gp, ks, Qv]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ..._()]
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
}, PT = /* @__PURE__ */ wT(IT);
function Js(...g) {
  return PT(bT(g));
}
const v0 = ({ message: g, isUser: N = !1, thinking: w = !1 }) => {
  const { config: b } = b0(), J = (K, W) => K.replace(
    /<a href="([^"]+)"[^>]*>(.*?)<\/a>/g,
    `<a href="$1" target="_blank" style="color: ${W ? "#ffffff" : "#1565c0"}; text-decoration-line: underline; word-break: break-word; white-space: normal;" rel="noopener noreferrer">$2</a>`
  ).replace(
    /\*(.*?)\*/g,
    "<strong>$1</strong>"
  ).replace(
    /\[(.*?)\]\((https?:\/\/[^\s]+)\)/g,
    `<a href="$2" target="_blank" style="color: ${W ? "#ffffff" : "#1565c0"}; text-decoration-line: underline; word-break: break-word; white-space: normal;" rel="noopener noreferrer">$1</a>`
  ).replace(
    new RegExp('(?<!href=")https?:\\/\\/[^\\s"]+', "g"),
    `<a href="$&" target="_blank" style="color: ${W ? "#ffffff" : "#1565c0"}; text-decoration-line: underline; word-break: break-word; white-space: normal;" rel="noopener noreferrer">$&</a>`
  ).replace(/\n/g, "<br>");
  return w ? /* @__PURE__ */ ee.jsx(
    "div",
    {
      className: Js(
        "relative flex w-fit max-w-[90%] border rounded-t-2xl py-3 px-3.5 rounded-br-2xl bg-white text-[#0096a2] border-[#0096a2] mr-auto justify-start"
      ),
      style: {
        backgroundColor: b?.theme?.chatWindow?.botMessage?.backgroundColor || "#ffffff",
        borderColor: b?.theme?.chatWindow?.botMessage?.borderColor || "#0096a2"
      },
      children: /* @__PURE__ */ ee.jsx(
        "div",
        {
          className: "text-sm",
          style: {
            color: b?.theme?.chatWindow?.botMessage?.textColor || "#0096a2"
          },
          children: /* @__PURE__ */ ee.jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ ee.jsx("div", { className: "text-base flex gap-2 items-end", children: Array.from({ length: 3 }).map((K, W) => /* @__PURE__ */ ee.jsx(
            "span",
            {
              className: "block w-2 h-2 rounded-full bg-[#0096a2] animate-bounce",
              style: { animationDelay: `${250 * W}ms` }
            },
            `loading-circle-${W}`
          )) }) })
        }
      )
    }
  ) : g ? /* @__PURE__ */ ee.jsxs(
    "div",
    {
      className: Js(
        "relative flex w-fit max-w-[90%] border rounded-t-2xl py-3 px-3.5",
        N ? "rounded-bl-2xl bg-white text-[#0096a2] border-[#0096a2] ml-auto justify-end" : "rounded-br-2xl bg-white text-[#0096a2] border-[#0096a2] mr-auto justify-start"
      ),
      style: {
        backgroundColor: N ? b?.theme?.chatWindow?.userMessage?.backgroundColor || "#0096a2" : b?.theme?.chatWindow?.botMessage?.backgroundColor || "#ffffff",
        borderColor: N ? b?.theme?.chatWindow?.userMessage?.borderColor || "#0096a2" : b?.theme?.chatWindow?.botMessage?.borderColor || "#0096a2"
      },
      children: [
        /* @__PURE__ */ ee.jsx(
          "div",
          {
            className: "text-sm",
            style: {
              color: N ? b?.theme?.chatWindow?.userMessage?.textColor || "#ffffff" : b?.theme?.chatWindow?.botMessage?.textColor || "#0096a2"
            },
            dangerouslySetInnerHTML: {
              __html: J(g, N)
            }
          }
        ),
        /* @__PURE__ */ ee.jsx(
          "div",
          {
            className: Js(
              "absolute top-full mt-0.5 w-fit",
              N ? "right-0" : "left-0"
            ),
            children: /* @__PURE__ */ ee.jsx("p", { className: "text-[10px] font-light text-gray-500", children: "02.30 PM" })
          }
        )
      ]
    }
  ) : (console.error("message is null!"), null);
}, eE = ({ messages: g, currentResponseMsg: N, loading: w, fetching: b }) => {
  const J = Ks.useRef(null);
  return Ks.useEffect(() => {
    setTimeout(() => {
      console.log("scroll to bottom ------>>>>>>"), J.current?.scrollIntoView({
        behavior: "smooth",
        block: "end"
      });
    }, 200);
  }, [N, g.length]), /* @__PURE__ */ ee.jsxs(
    "div",
    {
      className: "relative flex-1 h-full px-4 py-6 max-h-full overflow-y-scroll",
      style: { overflowAnchor: "none" },
      children: [
        /* @__PURE__ */ ee.jsxs("div", { className: "flex flex-col gap-9", children: [
          /* @__PURE__ */ ee.jsx("div", { className: "flex flex-col-reverse gap-9", children: g.map((K, W) => /* @__PURE__ */ ee.jsxs("div", { className: "flex flex-col gap-6", children: [
            K.human && K.human.content && /* @__PURE__ */ ee.jsx(v0, { message: K.human.content, isUser: !0 }),
            K.ai && K.ai.content && /* @__PURE__ */ ee.jsx(v0, { message: K.ai.content, isUser: !1 })
          ] }, W)) }),
          !b && N && g.length > 0 && !g[0]?.ai && /* @__PURE__ */ ee.jsx(v0, { message: N, isUser: !1 }),
          w && !N && /* @__PURE__ */ ee.jsx(v0, { thinking: !0 })
        ] }),
        /* @__PURE__ */ ee.jsx("div", { ref: J, id: "bottom-ref", className: "pb-9" })
      ]
    }
  );
}, tE = ({
  isVisible: g,
  onToggleCallWindow: N,
  onToggleMuteCall: w,
  onToggleSpeakerCall: b
}) => {
  const [J, K] = tu(!1), [W, ae] = tu(!0), X = () => {
    K(!J), w();
  }, me = () => {
    ae(!W), b();
  };
  return g ? /* @__PURE__ */ ee.jsx("div", { className: "absolute inset-0 bg-white z-10", children: /* @__PURE__ */ ee.jsx("div", { className: "h-full px-6 py-10 overflow-y-auto", children: /* @__PURE__ */ ee.jsxs("div", { className: "flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ ee.jsx("h4", { className: "text-[#0096a2] text-xl font-bold mb-6", children: "IN CALL" }),
    /* @__PURE__ */ ee.jsx("div", { className: "flex items-center justify-center p-4 rounded-full w-[204px] h-[204px] bg-gradient-to-br from-[#0096a2]/30 to-[#f26075]/30", children: /* @__PURE__ */ ee.jsx("div", { className: "flex items-center justify-center p-4 rounded-full w-full h-full bg-gradient-to-br from-[#0096a2]/40 to-[#f26075]/40", children: /* @__PURE__ */ ee.jsx("div", { className: "flex items-center justify-center p-4 rounded-full w-full h-full bg-gradient-to-br from-[#0096a2]/50 to-[#f26075]/50", children: /* @__PURE__ */ ee.jsx(F2, { className: "w-14 h-14 text-white/80" }) }) }) }),
    /* @__PURE__ */ ee.jsx("p", { className: "text-[#0096a2] text-base font-bold mt-5", children: "MIMIN AI" }),
    /* @__PURE__ */ ee.jsx("p", { className: "text-[#0096a2] text-sm font-medium mt-0", children: "09:00" }),
    /* @__PURE__ */ ee.jsx("div", { className: "h-[1.5px] w-full bg-gray-200 my-6" }),
    /* @__PURE__ */ ee.jsxs("div", { className: "grid grid-cols-2 gap-4 w-full", children: [
      /* @__PURE__ */ ee.jsx("div", { className: "col-span-2 flex items-center justify-center", children: /* @__PURE__ */ ee.jsx(
        "button",
        {
          type: "button",
          className: "cursor-pointer bg-gradient-to-br from-[#0096a2]/30 to-[#f26075]/30 rounded-full w-[60px] h-[60px] p-4 aspect-square flex items-center justify-center",
          onClick: N,
          children: /* @__PURE__ */ ee.jsx(yS, { className: "w-full h-full text-[#f26075]/90 fill-[#f26075]/90" })
        }
      ) }),
      /* @__PURE__ */ ee.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ ee.jsx(
        "button",
        {
          type: "button",
          className: Js(
            "cursor-pointer w-[60px] h-[60px] p-4 aspect-square rounded-full flex items-center justify-center",
            J ? "bg-gradient-to-br from-white/60 to-[#ffa100]/60" : "bg-gradient-to-br from-white/20 to-[#ffa100]/20"
          ),
          onClick: X,
          children: /* @__PURE__ */ ee.jsx(P2, { className: Js("w-full h-full text-[#0096a2]/90") })
        }
      ) }),
      /* @__PURE__ */ ee.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ ee.jsx(
        "button",
        {
          type: "button",
          className: Js(
            "cursor-pointer w-[60px] h-[60px] p-4 aspect-square rounded-full flex items-center justify-center",
            W ? "bg-gradient-to-br from-white/20 to-[#ffa100]/20" : "bg-gradient-to-br from-white/60 to-[#ffa100]/60"
          ),
          onClick: me,
          children: /* @__PURE__ */ ee.jsx(iT, { className: Js("w-full h-full text-[#0096a2]/90") })
        }
      ) })
    ] })
  ] }) }) }) : null;
}, lE = {
  limit: 10,
  page: 0,
  pages: 0,
  size: 10
}, aE = ({
  config: g,
  signature: N
}) => {
  const [w, b] = tu(!1), [J, K] = tu(!1), [W, ae] = tu(""), [X, me] = tu(""), [he, Re] = tu(""), [ve, _e] = tu([]), [qe, Te] = tu(lE), { setConfig: je, setSignature: Oe } = b0(), [Qe, Ge] = tu(!1), [rt, xt] = tu(!1), nt = () => {
    Ge(!Qe);
  }, Ne = () => {
    xt(!rt);
  }, se = () => {
    console.log("Toggle mute call");
  }, ne = () => {
    console.log("Toggle speaker call");
  }, bt = async () => {
    try {
      const wt = (await (await fetch("https://api.ipify.org?format=json")).json()).ip, dt = navigator.userAgent;
      return { ip: wt, userAgent: dt, isError: !1 };
    } catch (pe) {
      return { isError: !0, errorMessage: pe.message };
    }
  }, Fe = async (pe) => {
    const { isError: Et, errorMessage: wt, ip: dt, userAgent: x } = await bt();
    if (Et) {
      console.error(wt);
      return;
    }
    b(!0);
    const Q = {
      name: x,
      phone: dt,
      message_id: crypto.randomUUID(),
      message: pe,
      media_type: "text",
      media: "",
      type: W || ""
    };
    try {
      const _ = await fetch(
        `${hS.NEXT_PUBLIC_CHATBOT_URL}/api/chat/new-website/${g?.credentials?.username}`,
        {
          headers: {
            Signature: N,
            Accept: "text/event-stream",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(Q),
          method: "POST"
        }
      );
      if (!_.ok) {
        console.error("Failed to send message");
        return;
      }
      const ye = _.body.pipeThrough(new TextDecoderStream()).getReader();
      for (; ; ) {
        const { value: B, done: te } = await ye.read();
        if (te) break;
        const F = '{"event": ';
        B.split(`data: ${F}`).filter(Boolean).map(
          (ie) => JSON.parse(`${F}${ie}`.replace(/\n\n$/gm, ""))
        ).filter((ie) => ie.event === "token" ? !!ie.data : !0).forEach(async (ie) => {
          ie.event === "payload" ? (_e((Ie) => (Ie[0].ai = {
            additional_kwargs: {},
            content: ie.message,
            example: !1
          }, Ie)), W || ae(ie.type), me(ie.chat_history_id)) : ie.event === "token" && Re((Ie) => Ie + ie.data);
        });
      }
    } catch {
      console.error(
        "We apologize, a system error has occurred. Please try again!"
      );
    } finally {
      b(!1);
    }
  };
  return H2(() => {
    je(g || null), Oe(N || "");
  }, []), /* @__PURE__ */ ee.jsxs("div", { className: "fixed bottom-6 right-6 z-[9999]", children: [
    /* @__PURE__ */ ee.jsxs(
      "button",
      {
        className: `flex items-center gap-2.5 px-4 py-2 rounded-full border shadow-md transition-all duration-300 ease-in-out cursor-pointer ${Qe ? "bg-[#0096a2]/80 text-[#ffffff] border-[#0096a2]" : "bg-[#ffffff] text-[#0096a2] border-[#0096a2]/20"}`,
        style: {
          backgroundColor: Qe ? "#0096a2" : g?.theme?.button?.backgroundColor || "#ffffff",
          color: Qe ? "#ffffff" : g?.theme?.button?.textColor || "#0096a2"
        },
        onClick: nt,
        children: [
          /* @__PURE__ */ ee.jsx(
            "img",
            {
              src: g?.theme?.button?.iconSrc || "https://appstaging.mimin.io/favicon.ico",
              alt: "ICON",
              className: "w-4 h-auto"
            }
          ),
          /* @__PURE__ */ ee.jsx("span", { className: "text-sm font-bold", children: g?.theme?.button?.tooltip || "Ask Mimin" })
        ]
      }
    ),
    Qe && /* @__PURE__ */ ee.jsx("div", { className: "absolute bottom-full mb-4 right-0", children: /* @__PURE__ */ ee.jsxs(
      "div",
      {
        className: "relative flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden",
        style: {
          width: g?.theme?.chatWindow?.width || "330px",
          height: g?.theme?.chatWindow?.height || "600px"
        },
        children: [
          /* @__PURE__ */ ee.jsx(
            gT,
            {
              onToggleCallWindow: Ne,
              onToggleChatWindow: nt
            }
          ),
          /* @__PURE__ */ ee.jsx(
            eE,
            {
              messages: ve,
              currentResponseMsg: he,
              loading: w,
              fetching: J
            }
          ),
          /* @__PURE__ */ ee.jsx(
            vT,
            {
              onSendMessage: (pe) => {
                Re(""), pe = pe.trim().replaceAll(/\n\n+/g, `

`), _e((Et) => [
                  {
                    human: {
                      content: pe,
                      additional_kwargs: {},
                      example: !1
                    },
                    date: /* @__PURE__ */ new Date()
                  },
                  ...Et
                ]), Fe(pe);
              },
              loading: w,
              fetching: J
            }
          ),
          /* @__PURE__ */ ee.jsx(
            tE,
            {
              isVisible: rt,
              onToggleCallWindow: Ne,
              onToggleMuteCall: se,
              onToggleSpeakerCall: ne
            }
          )
        ]
      }
    ) })
  ] });
}, nE = {
  init: async function(g = {}) {
    try {
      if (Q2(), !g.credentials)
        throw new Error("credentials are required");
      if (!g.credentials.username)
        throw new Error("username is required");
      if (!g.credentials.apiKey)
        throw new Error("apiKey is required");
      const N = await fetch(
        `${hS.NEXT_PUBLIC_LOGIN_CUSTOMER_API}/api/v1/chatbotdata/create-signature/${g.credentials.username}`,
        {
          method: "POST",
          headers: {
            "x-api-key": g.credentials.apiKey
          }
        }
      ), { signature: w } = await N.json();
      if (console.log("signature", w), !w)
        throw new Error("Failed to get signature");
      const b = document.getElementById("mimin-widget-container");
      b && b.remove();
      const J = document.createElement("div");
      J.id = "mimin-widget-container", document.body.appendChild(J), L2.createRoot(J).render(
        /* @__PURE__ */ ee.jsx(ee.Fragment, { children: /* @__PURE__ */ ee.jsx(
          aE,
          {
            config: {
              ...g,
              credentials: {
                ...g.credentials
              }
            },
            signature: w
          }
        ) })
      ), console.log("Mimin Chatbot React initialized successfully");
    } catch (N) {
      console.error("Failed to initialize Mimin Chatbot React:", N);
    }
  }
};
window.Chatbot = nE;
export {
  nE as Chatbot
};
