import Qa, { forwardRef as mS, createElement as kv, useState as Mi, useEffect as X2 } from "react";
import yS from "react-dom";
function L2(y) {
  return y && y.__esModule && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y;
}
var rg = { exports: {} }, rp = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F1;
function Q2() {
  if (F1) return rp;
  F1 = 1;
  var y = Symbol.for("react.transitional.element"), O = Symbol.for("react.fragment");
  function R(b, Z, J) {
    var W = null;
    if (J !== void 0 && (W = "" + J), Z.key !== void 0 && (W = "" + Z.key), "key" in Z) {
      J = {};
      for (var te in Z)
        te !== "key" && (J[te] = Z[te]);
    } else J = Z;
    return Z = J.ref, {
      $$typeof: y,
      type: b,
      key: W,
      ref: Z !== void 0 ? Z : null,
      props: J
    };
  }
  return rp.Fragment = O, rp.jsx = R, rp.jsxs = R, rp;
}
var dp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I1;
function Z2() {
  return I1 || (I1 = 1, process.env.NODE_ENV !== "production" && function() {
    function y(B) {
      if (B == null) return null;
      if (typeof B == "function")
        return B.$$typeof === gt ? null : B.displayName || B.name || null;
      if (typeof B == "string") return B;
      switch (B) {
        case be:
          return "Fragment";
        case Ce:
          return "Profiler";
        case qe:
          return "StrictMode";
        case Dt:
          return "Suspense";
        case ot:
          return "SuspenseList";
        case le:
          return "Activity";
      }
      if (typeof B == "object")
        switch (typeof B.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), B.$$typeof) {
          case Oe:
            return "Portal";
          case Xe:
            return (B.displayName || "Context") + ".Provider";
          case tt:
            return (B._context.displayName || "Context") + ".Consumer";
          case pt:
            var ae = B.render;
            return B = B.displayName, B || (B = ae.displayName || ae.name || "", B = B !== "" ? "ForwardRef(" + B + ")" : "ForwardRef"), B;
          case je:
            return ae = B.displayName || null, ae !== null ? ae : y(B.type) || "Memo";
          case fe:
            ae = B._payload, B = B._init;
            try {
              return y(B(ae));
            } catch {
            }
        }
      return null;
    }
    function O(B) {
      return "" + B;
    }
    function R(B) {
      try {
        O(B);
        var ae = !1;
      } catch {
        ae = !0;
      }
      if (ae) {
        ae = console;
        var F = ae.error, ee = typeof Symbol == "function" && Symbol.toStringTag && B[Symbol.toStringTag] || B.constructor.name || "Object";
        return F.call(
          ae,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ee
        ), O(B);
      }
    }
    function b(B) {
      if (B === be) return "<>";
      if (typeof B == "object" && B !== null && B.$$typeof === fe)
        return "<...>";
      try {
        var ae = y(B);
        return ae ? "<" + ae + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function Z() {
      var B = Fe.A;
      return B === null ? null : B.getOwner();
    }
    function J() {
      return Error("react-stack-top-frame");
    }
    function W(B) {
      if (Ae.call(B, "key")) {
        var ae = Object.getOwnPropertyDescriptor(B, "key").get;
        if (ae && ae.isReactWarning) return !1;
      }
      return B.key !== void 0;
    }
    function te(B, ae) {
      function F() {
        dt || (dt = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          ae
        ));
      }
      F.isReactWarning = !0, Object.defineProperty(B, "key", {
        get: F,
        configurable: !0
      });
    }
    function G() {
      var B = y(this.type);
      return A[B] || (A[B] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), B = this.props.ref, B !== void 0 ? B : null;
    }
    function me(B, ae, F, ee, Se, Ue, He, Tt) {
      return F = Ue.ref, B = {
        $$typeof: Ve,
        type: B,
        key: ae,
        props: Ue,
        _owner: Se
      }, (F !== void 0 ? F : null) !== null ? Object.defineProperty(B, "ref", {
        enumerable: !1,
        get: G
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
        value: He
      }), Object.defineProperty(B, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Tt
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    }
    function de(B, ae, F, ee, Se, Ue, He, Tt) {
      var xt = ae.children;
      if (xt !== void 0)
        if (ee)
          if (ft(xt)) {
            for (ee = 0; ee < xt.length; ee++)
              Re(xt[ee]);
            Object.freeze && Object.freeze(xt);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else Re(xt);
      if (Ae.call(ae, "key")) {
        xt = y(B);
        var qt = Object.keys(ae).filter(function(Za) {
          return Za !== "key";
        });
        ee = 0 < qt.length ? "{key: someKey, " + qt.join(": ..., ") + ": ...}" : "{key: someKey}", he[xt + ee] || (qt = 0 < qt.length ? "{" + qt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ee,
          xt,
          qt,
          xt
        ), he[xt + ee] = !0);
      }
      if (xt = null, F !== void 0 && (R(F), xt = "" + F), W(ae) && (R(ae.key), xt = "" + ae.key), "key" in ae) {
        F = {};
        for (var hl in ae)
          hl !== "key" && (F[hl] = ae[hl]);
      } else F = ae;
      return xt && te(
        F,
        typeof B == "function" ? B.displayName || B.name || "Unknown" : B
      ), me(
        B,
        xt,
        Ue,
        Se,
        Z(),
        F,
        He,
        Tt
      );
    }
    function Re(B) {
      typeof B == "object" && B !== null && B.$$typeof === Ve && B._store && (B._store.validated = 1);
    }
    var pe = Qa, Ve = Symbol.for("react.transitional.element"), Oe = Symbol.for("react.portal"), be = Symbol.for("react.fragment"), qe = Symbol.for("react.strict_mode"), Ce = Symbol.for("react.profiler"), tt = Symbol.for("react.consumer"), Xe = Symbol.for("react.context"), pt = Symbol.for("react.forward_ref"), Dt = Symbol.for("react.suspense"), ot = Symbol.for("react.suspense_list"), je = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), le = Symbol.for("react.activity"), gt = Symbol.for("react.client.reference"), Fe = pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ae = Object.prototype.hasOwnProperty, ft = Array.isArray, Mt = console.createTask ? console.createTask : function() {
      return null;
    };
    pe = {
      "react-stack-bottom-frame": function(B) {
        return B();
      }
    };
    var dt, A = {}, Q = pe["react-stack-bottom-frame"].bind(
      pe,
      J
    )(), _ = Mt(b(J)), he = {};
    dp.Fragment = be, dp.jsx = function(B, ae, F, ee, Se) {
      var Ue = 1e4 > Fe.recentlyCreatedOwnerStacks++;
      return de(
        B,
        ae,
        F,
        !1,
        ee,
        Se,
        Ue ? Error("react-stack-top-frame") : Q,
        Ue ? Mt(b(B)) : _
      );
    }, dp.jsxs = function(B, ae, F, ee, Se) {
      var Ue = 1e4 > Fe.recentlyCreatedOwnerStacks++;
      return de(
        B,
        ae,
        F,
        !0,
        ee,
        Se,
        Ue ? Error("react-stack-top-frame") : Q,
        Ue ? Mt(b(B)) : _
      );
    };
  }()), dp;
}
var P1;
function k2() {
  return P1 || (P1 = 1, process.env.NODE_ENV === "production" ? rg.exports = Q2() : rg.exports = Z2()), rg.exports;
}
var ue = k2(), dg = { exports: {} }, hp = {}, hg = { exports: {} }, Vv = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eS;
function J2() {
  return eS || (eS = 1, function(y) {
    function O(A, Q) {
      var _ = A.length;
      A.push(Q);
      e: for (; 0 < _; ) {
        var he = _ - 1 >>> 1, B = A[he];
        if (0 < Z(B, Q))
          A[he] = Q, A[_] = B, _ = he;
        else break e;
      }
    }
    function R(A) {
      return A.length === 0 ? null : A[0];
    }
    function b(A) {
      if (A.length === 0) return null;
      var Q = A[0], _ = A.pop();
      if (_ !== Q) {
        A[0] = _;
        e: for (var he = 0, B = A.length, ae = B >>> 1; he < ae; ) {
          var F = 2 * (he + 1) - 1, ee = A[F], Se = F + 1, Ue = A[Se];
          if (0 > Z(ee, _))
            Se < B && 0 > Z(Ue, ee) ? (A[he] = Ue, A[Se] = _, he = Se) : (A[he] = ee, A[F] = _, he = F);
          else if (Se < B && 0 > Z(Ue, _))
            A[he] = Ue, A[Se] = _, he = Se;
          else break e;
        }
      }
      return Q;
    }
    function Z(A, Q) {
      var _ = A.sortIndex - Q.sortIndex;
      return _ !== 0 ? _ : A.id - Q.id;
    }
    if (y.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var J = performance;
      y.unstable_now = function() {
        return J.now();
      };
    } else {
      var W = Date, te = W.now();
      y.unstable_now = function() {
        return W.now() - te;
      };
    }
    var G = [], me = [], de = 1, Re = null, pe = 3, Ve = !1, Oe = !1, be = !1, qe = !1, Ce = typeof setTimeout == "function" ? setTimeout : null, tt = typeof clearTimeout == "function" ? clearTimeout : null, Xe = typeof setImmediate < "u" ? setImmediate : null;
    function pt(A) {
      for (var Q = R(me); Q !== null; ) {
        if (Q.callback === null) b(me);
        else if (Q.startTime <= A)
          b(me), Q.sortIndex = Q.expirationTime, O(G, Q);
        else break;
        Q = R(me);
      }
    }
    function Dt(A) {
      if (be = !1, pt(A), !Oe)
        if (R(G) !== null)
          Oe = !0, ot || (ot = !0, Ae());
        else {
          var Q = R(me);
          Q !== null && dt(Dt, Q.startTime - A);
        }
    }
    var ot = !1, je = -1, fe = 5, le = -1;
    function gt() {
      return qe ? !0 : !(y.unstable_now() - le < fe);
    }
    function Fe() {
      if (qe = !1, ot) {
        var A = y.unstable_now();
        le = A;
        var Q = !0;
        try {
          e: {
            Oe = !1, be && (be = !1, tt(je), je = -1), Ve = !0;
            var _ = pe;
            try {
              t: {
                for (pt(A), Re = R(G); Re !== null && !(Re.expirationTime > A && gt()); ) {
                  var he = Re.callback;
                  if (typeof he == "function") {
                    Re.callback = null, pe = Re.priorityLevel;
                    var B = he(
                      Re.expirationTime <= A
                    );
                    if (A = y.unstable_now(), typeof B == "function") {
                      Re.callback = B, pt(A), Q = !0;
                      break t;
                    }
                    Re === R(G) && b(G), pt(A);
                  } else b(G);
                  Re = R(G);
                }
                if (Re !== null) Q = !0;
                else {
                  var ae = R(me);
                  ae !== null && dt(
                    Dt,
                    ae.startTime - A
                  ), Q = !1;
                }
              }
              break e;
            } finally {
              Re = null, pe = _, Ve = !1;
            }
            Q = void 0;
          }
        } finally {
          Q ? Ae() : ot = !1;
        }
      }
    }
    var Ae;
    if (typeof Xe == "function")
      Ae = function() {
        Xe(Fe);
      };
    else if (typeof MessageChannel < "u") {
      var ft = new MessageChannel(), Mt = ft.port2;
      ft.port1.onmessage = Fe, Ae = function() {
        Mt.postMessage(null);
      };
    } else
      Ae = function() {
        Ce(Fe, 0);
      };
    function dt(A, Q) {
      je = Ce(function() {
        A(y.unstable_now());
      }, Q);
    }
    y.unstable_IdlePriority = 5, y.unstable_ImmediatePriority = 1, y.unstable_LowPriority = 4, y.unstable_NormalPriority = 3, y.unstable_Profiling = null, y.unstable_UserBlockingPriority = 2, y.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, y.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : fe = 0 < A ? Math.floor(1e3 / A) : 5;
    }, y.unstable_getCurrentPriorityLevel = function() {
      return pe;
    }, y.unstable_next = function(A) {
      switch (pe) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = pe;
      }
      var _ = pe;
      pe = Q;
      try {
        return A();
      } finally {
        pe = _;
      }
    }, y.unstable_requestPaint = function() {
      qe = !0;
    }, y.unstable_runWithPriority = function(A, Q) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var _ = pe;
      pe = A;
      try {
        return Q();
      } finally {
        pe = _;
      }
    }, y.unstable_scheduleCallback = function(A, Q, _) {
      var he = y.unstable_now();
      switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? he + _ : he) : _ = he, A) {
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
      return B = _ + B, A = {
        id: de++,
        callback: Q,
        priorityLevel: A,
        startTime: _,
        expirationTime: B,
        sortIndex: -1
      }, _ > he ? (A.sortIndex = _, O(me, A), R(G) === null && A === R(me) && (be ? (tt(je), je = -1) : be = !0, dt(Dt, _ - he))) : (A.sortIndex = B, O(G, A), Oe || Ve || (Oe = !0, ot || (ot = !0, Ae()))), A;
    }, y.unstable_shouldYield = gt, y.unstable_wrapCallback = function(A) {
      var Q = pe;
      return function() {
        var _ = pe;
        pe = Q;
        try {
          return A.apply(this, arguments);
        } finally {
          pe = _;
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
var tS;
function K2() {
  return tS || (tS = 1, function(y) {
    process.env.NODE_ENV !== "production" && function() {
      function O() {
        if (Dt = !1, le) {
          var A = y.unstable_now();
          Ae = A;
          var Q = !0;
          try {
            e: {
              Xe = !1, pt && (pt = !1, je(gt), gt = -1), tt = !0;
              var _ = Ce;
              try {
                t: {
                  for (W(A), qe = b(Ve); qe !== null && !(qe.expirationTime > A && G()); ) {
                    var he = qe.callback;
                    if (typeof he == "function") {
                      qe.callback = null, Ce = qe.priorityLevel;
                      var B = he(
                        qe.expirationTime <= A
                      );
                      if (A = y.unstable_now(), typeof B == "function") {
                        qe.callback = B, W(A), Q = !0;
                        break t;
                      }
                      qe === b(Ve) && Z(Ve), W(A);
                    } else Z(Ve);
                    qe = b(Ve);
                  }
                  if (qe !== null) Q = !0;
                  else {
                    var ae = b(Oe);
                    ae !== null && me(
                      te,
                      ae.startTime - A
                    ), Q = !1;
                  }
                }
                break e;
              } finally {
                qe = null, Ce = _, tt = !1;
              }
              Q = void 0;
            }
          } finally {
            Q ? ft() : le = !1;
          }
        }
      }
      function R(A, Q) {
        var _ = A.length;
        A.push(Q);
        e: for (; 0 < _; ) {
          var he = _ - 1 >>> 1, B = A[he];
          if (0 < J(B, Q))
            A[he] = Q, A[_] = B, _ = he;
          else break e;
        }
      }
      function b(A) {
        return A.length === 0 ? null : A[0];
      }
      function Z(A) {
        if (A.length === 0) return null;
        var Q = A[0], _ = A.pop();
        if (_ !== Q) {
          A[0] = _;
          e: for (var he = 0, B = A.length, ae = B >>> 1; he < ae; ) {
            var F = 2 * (he + 1) - 1, ee = A[F], Se = F + 1, Ue = A[Se];
            if (0 > J(ee, _))
              Se < B && 0 > J(Ue, ee) ? (A[he] = Ue, A[Se] = _, he = Se) : (A[he] = ee, A[F] = _, he = F);
            else if (Se < B && 0 > J(Ue, _))
              A[he] = Ue, A[Se] = _, he = Se;
            else break e;
          }
        }
        return Q;
      }
      function J(A, Q) {
        var _ = A.sortIndex - Q.sortIndex;
        return _ !== 0 ? _ : A.id - Q.id;
      }
      function W(A) {
        for (var Q = b(Oe); Q !== null; ) {
          if (Q.callback === null) Z(Oe);
          else if (Q.startTime <= A)
            Z(Oe), Q.sortIndex = Q.expirationTime, R(Ve, Q);
          else break;
          Q = b(Oe);
        }
      }
      function te(A) {
        if (pt = !1, W(A), !Xe)
          if (b(Ve) !== null)
            Xe = !0, le || (le = !0, ft());
          else {
            var Q = b(Oe);
            Q !== null && me(
              te,
              Q.startTime - A
            );
          }
      }
      function G() {
        return Dt ? !0 : !(y.unstable_now() - Ae < Fe);
      }
      function me(A, Q) {
        gt = ot(function() {
          A(y.unstable_now());
        }, Q);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), y.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var de = performance;
        y.unstable_now = function() {
          return de.now();
        };
      } else {
        var Re = Date, pe = Re.now();
        y.unstable_now = function() {
          return Re.now() - pe;
        };
      }
      var Ve = [], Oe = [], be = 1, qe = null, Ce = 3, tt = !1, Xe = !1, pt = !1, Dt = !1, ot = typeof setTimeout == "function" ? setTimeout : null, je = typeof clearTimeout == "function" ? clearTimeout : null, fe = typeof setImmediate < "u" ? setImmediate : null, le = !1, gt = -1, Fe = 5, Ae = -1;
      if (typeof fe == "function")
        var ft = function() {
          fe(O);
        };
      else if (typeof MessageChannel < "u") {
        var Mt = new MessageChannel(), dt = Mt.port2;
        Mt.port1.onmessage = O, ft = function() {
          dt.postMessage(null);
        };
      } else
        ft = function() {
          ot(O, 0);
        };
      y.unstable_IdlePriority = 5, y.unstable_ImmediatePriority = 1, y.unstable_LowPriority = 4, y.unstable_NormalPriority = 3, y.unstable_Profiling = null, y.unstable_UserBlockingPriority = 2, y.unstable_cancelCallback = function(A) {
        A.callback = null;
      }, y.unstable_forceFrameRate = function(A) {
        0 > A || 125 < A ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Fe = 0 < A ? Math.floor(1e3 / A) : 5;
      }, y.unstable_getCurrentPriorityLevel = function() {
        return Ce;
      }, y.unstable_next = function(A) {
        switch (Ce) {
          case 1:
          case 2:
          case 3:
            var Q = 3;
            break;
          default:
            Q = Ce;
        }
        var _ = Ce;
        Ce = Q;
        try {
          return A();
        } finally {
          Ce = _;
        }
      }, y.unstable_requestPaint = function() {
        Dt = !0;
      }, y.unstable_runWithPriority = function(A, Q) {
        switch (A) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            A = 3;
        }
        var _ = Ce;
        Ce = A;
        try {
          return Q();
        } finally {
          Ce = _;
        }
      }, y.unstable_scheduleCallback = function(A, Q, _) {
        var he = y.unstable_now();
        switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? he + _ : he) : _ = he, A) {
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
        return B = _ + B, A = {
          id: be++,
          callback: Q,
          priorityLevel: A,
          startTime: _,
          expirationTime: B,
          sortIndex: -1
        }, _ > he ? (A.sortIndex = _, R(Oe, A), b(Ve) === null && A === b(Oe) && (pt ? (je(gt), gt = -1) : pt = !0, me(te, _ - he))) : (A.sortIndex = B, R(Ve, A), Xe || tt || (Xe = !0, le || (le = !0, ft()))), A;
      }, y.unstable_shouldYield = G, y.unstable_wrapCallback = function(A) {
        var Q = Ce;
        return function() {
          var _ = Ce;
          Ce = Q;
          try {
            return A.apply(this, arguments);
          } finally {
            Ce = _;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Xv)), Xv;
}
var lS;
function pS() {
  return lS || (lS = 1, process.env.NODE_ENV === "production" ? hg.exports = J2() : hg.exports = K2()), hg.exports;
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
var aS;
function $2() {
  if (aS) return hp;
  aS = 1;
  var y = pS(), O = Qa, R = yS;
  function b(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Z(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function J(l) {
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
  function te(l) {
    if (J(l) !== l)
      throw Error(b(188));
  }
  function G(l) {
    var n = l.alternate;
    if (!n) {
      if (n = J(l), n === null) throw Error(b(188));
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
          if (r === u) return te(s), l;
          if (r === c) return te(s), n;
          r = r.sibling;
        }
        throw Error(b(188));
      }
      if (u.return !== c.return) u = s, c = r;
      else {
        for (var m = !1, p = s.child; p; ) {
          if (p === u) {
            m = !0, u = s, c = r;
            break;
          }
          if (p === c) {
            m = !0, c = s, u = r;
            break;
          }
          p = p.sibling;
        }
        if (!m) {
          for (p = r.child; p; ) {
            if (p === u) {
              m = !0, u = r, c = s;
              break;
            }
            if (p === c) {
              m = !0, c = r, u = s;
              break;
            }
            p = p.sibling;
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
  var de = Object.assign, Re = Symbol.for("react.element"), pe = Symbol.for("react.transitional.element"), Ve = Symbol.for("react.portal"), Oe = Symbol.for("react.fragment"), be = Symbol.for("react.strict_mode"), qe = Symbol.for("react.profiler"), Ce = Symbol.for("react.provider"), tt = Symbol.for("react.consumer"), Xe = Symbol.for("react.context"), pt = Symbol.for("react.forward_ref"), Dt = Symbol.for("react.suspense"), ot = Symbol.for("react.suspense_list"), je = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), le = Symbol.for("react.activity"), gt = Symbol.for("react.memo_cache_sentinel"), Fe = Symbol.iterator;
  function Ae(l) {
    return l === null || typeof l != "object" ? null : (l = Fe && l[Fe] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var ft = Symbol.for("react.client.reference");
  function Mt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === ft ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Oe:
        return "Fragment";
      case qe:
        return "Profiler";
      case be:
        return "StrictMode";
      case Dt:
        return "Suspense";
      case ot:
        return "SuspenseList";
      case le:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Ve:
          return "Portal";
        case Xe:
          return (l.displayName || "Context") + ".Provider";
        case tt:
          return (l._context.displayName || "Context") + ".Consumer";
        case pt:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case je:
          return n = l.displayName || null, n !== null ? n : Mt(l.type) || "Memo";
        case fe:
          n = l._payload, l = l._init;
          try {
            return Mt(l(n));
          } catch {
          }
      }
    return null;
  }
  var dt = Array.isArray, A = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = R.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, he = [], B = -1;
  function ae(l) {
    return { current: l };
  }
  function F(l) {
    0 > B || (l.current = he[B], he[B] = null, B--);
  }
  function ee(l, n) {
    B++, he[B] = l.current, l.current = n;
  }
  var Se = ae(null), Ue = ae(null), He = ae(null), Tt = ae(null);
  function xt(l, n) {
    switch (ee(He, n), ee(Ue, l), ee(Se, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? Ru(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = Ru(n), l = No(n, l);
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
    F(Se), ee(Se, l);
  }
  function qt() {
    F(Se), F(Ue), F(He);
  }
  function hl(l) {
    l.memoizedState !== null && ee(Tt, l);
    var n = Se.current, u = No(n, l.type);
    n !== u && (ee(Ue, l), ee(Se, u));
  }
  function Za(l) {
    Ue.current === l && (F(Se), F(Ue)), Tt.current === l && (F(Tt), ia._currentValue = _);
  }
  var lu = Object.prototype.hasOwnProperty, Ui = y.unstable_scheduleCallback, bh = y.unstable_cancelCallback, Sg = y.unstable_shouldYield, Ci = y.unstable_requestPaint, oa = y.unstable_now, uf = y.unstable_getCurrentPriorityLevel, pp = y.unstable_ImmediatePriority, Sh = y.unstable_UserBlockingPriority, cf = y.unstable_NormalPriority, Th = y.unstable_LowPriority, Gc = y.unstable_IdlePriority, Tg = y.log, gp = y.unstable_setDisableYieldValue, Vc = null, Bl = null;
  function au(l) {
    if (typeof Tg == "function" && gp(l), Bl && typeof Bl.setStrictMode == "function")
      try {
        Bl.setStrictMode(Vc, l);
      } catch {
      }
  }
  var kl = Math.clz32 ? Math.clz32 : Eg, Eh = Math.log, vp = Math.LN2;
  function Eg(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Eh(l) / vp | 0) | 0;
  }
  var Xc = 256, nu = 4194304;
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
    var p = c & 134217727;
    return p !== 0 ? (c = p & ~r, c !== 0 ? s = fa(c) : (m &= p, m !== 0 ? s = fa(m) : u || (u = p & ~l, u !== 0 && (s = fa(u))))) : (p = c & ~r, p !== 0 ? s = fa(p) : m !== 0 ? s = fa(m) : u || (u = c & ~l, u !== 0 && (s = fa(u)))), s === 0 ? 0 : n !== 0 && n !== s && (n & r) === 0 && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function dn(l, n) {
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
    var l = Xc;
    return Xc <<= 1, (Xc & 4194048) === 0 && (Xc = 256), l;
  }
  function Hi() {
    var l = nu;
    return nu <<= 1, (nu & 62914560) === 0 && (nu = 4194304), l;
  }
  function Yu(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function wi(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function bp(l, n, u, c, s, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var p = l.entanglements, S = l.expirationTimes, U = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var L = 31 - kl(u), K = 1 << L;
      p[L] = 0, S[L] = -1;
      var H = U[L];
      if (H !== null)
        for (U[L] = null, L = 0; L < H.length; L++) {
          var N = H[L];
          N !== null && (N.lane &= -536870913);
        }
      u &= ~K;
    }
    c !== 0 && of(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~n));
  }
  function of(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - kl(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 4194090;
  }
  function ff(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - kl(u), s = 1 << c;
      s & n | l[c] & n && (l[c] |= n), u &= ~s;
    }
  }
  function ka(l) {
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
  function Ks(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Sp() {
    var l = Q.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Ry(l.type));
  }
  function Ag(l, n) {
    var u = Q.p;
    try {
      return Q.p = l, n();
    } finally {
      Q.p = u;
    }
  }
  var Wt = Math.random().toString(36).slice(2), ul = "__reactFiber$" + Wt, _l = "__reactProps$" + Wt, Lc = "__reactContainer$" + Wt, $s = "__reactEvents$" + Wt, Tp = "__reactListeners$" + Wt, Ws = "__reactHandles$" + Wt, Ep = "__reactResources$" + Wt, ie = "__reactMarker$" + Wt;
  function sf(l) {
    delete l[ul], delete l[_l], delete l[$s], delete l[Tp], delete l[Ws];
  }
  function ml(l) {
    var n = l[ul];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[Lc] || u[ul]) {
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
  function Ni(l) {
    if (l = l[ul] || l[Lc]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function rf(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(b(33));
  }
  function uu(l) {
    var n = l[Ep];
    return n || (n = l[Ep] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Ft(l) {
    l[ie] = !0;
  }
  var df = /* @__PURE__ */ new Set(), sa = {};
  function Gu(l, n) {
    Vu(l, n), Vu(l + "Capture", n);
  }
  function Vu(l, n) {
    for (sa[l] = n, l = 0; l < n.length; l++)
      df.add(n[l]);
  }
  var Ap = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Fs = {}, Ah = {};
  function xp(l) {
    return lu.call(Ah, l) ? !0 : lu.call(Fs, l) ? !1 : Ap.test(l) ? Ah[l] = !0 : (Fs[l] = !0, !1);
  }
  function iu(l, n, u) {
    if (xp(n))
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
  function hf(l, n, u) {
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
  function hn(l, n, u, c) {
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
  var Is, xh;
  function Bi(l) {
    if (Is === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        Is = n && n[1] || "", xh = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Is + l + xh;
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
              var K = function() {
                throw Error();
              };
              if (Object.defineProperty(K.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(K, []);
                } catch (N) {
                  var H = N;
                }
                Reflect.construct(l, [], K);
              } else {
                try {
                  K.call();
                } catch (N) {
                  H = N;
                }
                l.call(K.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                H = N;
              }
              (K = l()) && typeof K.catch == "function" && K.catch(function() {
              });
            }
          } catch (N) {
            if (N && H && typeof N.stack == "string")
              return [N.stack, H.stack];
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
      var r = c.DetermineComponentFrameRoot(), m = r[0], p = r[1];
      if (m && p) {
        var S = m.split(`
`), U = p.split(`
`);
        for (s = c = 0; c < S.length && !S[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; s < U.length && !U[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (c === S.length || s === U.length)
          for (c = S.length - 1, s = U.length - 1; 1 <= c && 0 <= s && S[c] !== U[s]; )
            s--;
        for (; 1 <= c && 0 <= s; c--, s--)
          if (S[c] !== U[s]) {
            if (c !== 1 || s !== 1)
              do
                if (c--, s--, 0 > s || S[c] !== U[s]) {
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
    return (u = l ? l.displayName || l.name : "") ? Bi(u) : "";
  }
  function _i(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Bi(l.type);
      case 16:
        return Bi("Lazy");
      case 13:
        return Bi("Suspense");
      case 19:
        return Bi("SuspenseList");
      case 0:
      case 15:
        return Xu(l.type, !1);
      case 11:
        return Xu(l.type.render, !1);
      case 1:
        return Xu(l.type, !0);
      case 31:
        return Bi("Activity");
      default:
        return "";
    }
  }
  function zh(l) {
    try {
      var n = "";
      do
        n += _i(l), l = l.return;
      while (l);
      return n;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function Ol(l) {
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
  function mf(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Rh(l) {
    var n = mf(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
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
    l._valueTracker || (l._valueTracker = Rh(l));
  }
  function qi(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = mf(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function Qc(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var xg = /[\n"\\]/g;
  function za(l) {
    return l.replace(
      xg,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ps(l, n, u, c, s, r, m, p) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Ol(n)) : l.value !== "" + Ol(n) && (l.value = "" + Ol(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? yf(l, m, Ol(n)) : u != null ? yf(l, m, Ol(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? l.name = "" + Ol(p) : l.removeAttribute("name");
  }
  function er(l, n, u, c, s, r, m, p) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null))
        return;
      u = u != null ? "" + Ol(u) : "", n = n != null ? "" + Ol(n) : u, p || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = p ? l.checked : !!c, l.defaultChecked = !!c, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m);
  }
  function yf(l, n, u) {
    n === "number" && Qc(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function ji(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Ol(u), n = null, s = 0; s < l.length; s++) {
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
    if (n != null && (n = "" + Ol(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Ol(u) : "";
  }
  function Dh(l, n, u, c) {
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
    u = Ol(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c);
  }
  function Zc(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var zp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function tr(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || zp.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function pf(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(b(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var s in n)
        c = n[s], n.hasOwnProperty(s) && u[s] !== c && tr(l, s, c);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && tr(l, r, n[r]);
  }
  function Yi(l) {
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
  var zg = /* @__PURE__ */ new Map([
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
  ]), Rp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function gf(l) {
    return Rp.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var Gi = null;
  function lr(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var kc = null, Jc = null;
  function Op(l) {
    var n = Ni(l);
    if (n && (l = n.stateNode)) {
      var u = l[_l] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (Ps(
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
                Ps(
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
              c = u[n], c.form === l.form && qi(c);
          }
          break e;
        case "textarea":
          Oh(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && ji(l, !!u.multiple, n, !1);
      }
    }
  }
  var Mh = !1;
  function Kc(l, n, u) {
    if (Mh) return l(n, u);
    Mh = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (Mh = !1, (kc !== null || Jc !== null) && (vc(), kc && (n = kc, l = Jc, Jc = kc = null, Op(n), l)))
        for (n = 0; n < l.length; n++) Op(l[n]);
    }
  }
  function Vi(l, n) {
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
  var mn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ar = !1;
  if (mn)
    try {
      var cu = {};
      Object.defineProperty(cu, "passive", {
        get: function() {
          ar = !0;
        }
      }), window.addEventListener("test", cu, cu), window.removeEventListener("test", cu, cu);
    } catch {
      ar = !1;
    }
  var ou = null, $c = null, Xi = null;
  function Uh() {
    if (Xi) return Xi;
    var l, n = $c, u = n.length, c, s = "value" in ou ? ou.value : ou.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var m = u - l;
    for (c = 1; c <= m && n[u - c] === s[r - c]; c++) ;
    return Xi = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function yl(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function nr() {
    return !0;
  }
  function ur() {
    return !1;
  }
  function jl(l) {
    function n(u, c, s, r, m) {
      this._reactName = u, this._targetInst = s, this.type = c, this.nativeEvent = r, this.target = m, this.currentTarget = null;
      for (var p in l)
        l.hasOwnProperty(p) && (u = l[p], this[p] = u ? u(r) : r[p]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? nr : ur, this.isPropagationStopped = ur, this;
    }
    return de(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = nr);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = nr);
      },
      persist: function() {
      },
      isPersistent: nr
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
  }, ir = jl(Qu), vf = de({}, Qu, { view: 0, detail: 0 }), Dp = jl(vf), Ch, cr, bf, Li = de({}, vf, {
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
      return "movementX" in l ? l.movementX : (l !== bf && (bf && l.type === "mousemove" ? (Ch = l.screenX - bf.screenX, cr = l.screenY - bf.screenY) : cr = Ch = 0, bf = l), Ch);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : cr;
    }
  }), Hh = jl(Li), Mp = de({}, Li, { dataTransfer: 0 }), Up = jl(Mp), Rg = de({}, vf, { relatedTarget: 0 }), wh = jl(Rg), Og = de({}, Qu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Dg = jl(Og), Mg = de({}, Qu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Sf = jl(Mg), Cp = de({}, Qu, { data: 0 }), Nh = jl(Cp), Hp = {
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
  }, wp = {
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
  }, Bh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Np(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = Bh[l]) ? !!n[l] : !1;
  }
  function fu() {
    return Np;
  }
  var Qi = de({}, vf, {
    key: function(l) {
      if (l.key) {
        var n = Hp[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = yl(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? wp[l.keyCode] || "Unidentified" : "";
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
  }), Ja = jl(Qi), ra = de({}, Li, {
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
  }), Tf = jl(ra), or = de({}, vf, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fu
  }), _h = jl(or), Jl = de({}, Qu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Bp = jl(Jl), fr = de({}, Li, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zi = jl(fr), qh = de({}, Qu, {
    newState: 0,
    oldState: 0
  }), _p = jl(qh), qp = [9, 13, 27, 32], Ef = mn && "CompositionEvent" in window, Af = null;
  mn && "documentMode" in document && (Af = document.documentMode);
  var jh = mn && "TextEvent" in window && !Af, yn = mn && (!Ef || Af && 8 < Af && 11 >= Af), Yh = " ", sr = !1;
  function xf(l, n) {
    switch (l) {
      case "keyup":
        return qp.indexOf(n.keyCode) !== -1;
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
  function Gh(l, n) {
    switch (l) {
      case "compositionend":
        return Zu(n);
      case "keypress":
        return n.which !== 32 ? null : (sr = !0, Yh);
      case "textInput":
        return l = n.data, l === Yh && sr ? null : l;
      default:
        return null;
    }
  }
  function ki(l, n) {
    if (ku)
      return l === "compositionend" || !Ef && xf(l, n) ? (l = Uh(), Xi = $c = ou = null, ku = !1, l) : null;
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
        return yn && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var jp = {
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
  function rr(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!jp[l.type] : n === "textarea";
  }
  function dr(l, n, u, c) {
    kc ? Jc ? Jc.push(c) : Jc = [c] : kc = c, n = wo(n, "onChange"), 0 < n.length && (u = new ir(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var Ka = null, $a = null;
  function Vh(l) {
    Ec(l, 0);
  }
  function pn(l) {
    var n = rf(l);
    if (qi(n)) return l;
  }
  function Xh(l, n) {
    if (l === "change") return n;
  }
  var Lh = !1;
  if (mn) {
    var Ji;
    if (mn) {
      var Ki = "oninput" in document;
      if (!Ki) {
        var Qh = document.createElement("div");
        Qh.setAttribute("oninput", "return;"), Ki = typeof Qh.oninput == "function";
      }
      Ji = Ki;
    } else Ji = !1;
    Lh = Ji && (!document.documentMode || 9 < document.documentMode);
  }
  function Wc() {
    Ka && (Ka.detachEvent("onpropertychange", Zh), $a = Ka = null);
  }
  function Zh(l) {
    if (l.propertyName === "value" && pn($a)) {
      var n = [];
      dr(
        n,
        $a,
        l,
        lr(l)
      ), Kc(Vh, n);
    }
  }
  function hr(l, n, u) {
    l === "focusin" ? (Wc(), Ka = n, $a = u, Ka.attachEvent("onpropertychange", Zh)) : l === "focusout" && Wc();
  }
  function Ju(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return pn($a);
  }
  function su(l, n) {
    if (l === "click") return pn(n);
  }
  function kh(l, n) {
    if (l === "input" || l === "change")
      return pn(n);
  }
  function Jh(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var pl = typeof Object.is == "function" ? Object.is : Jh;
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
  function zt(l, n) {
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
  function zf(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? zf(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Kh(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = Qc(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = Qc(l.document);
    }
    return n;
  }
  function Rf(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var $i = mn && "documentMode" in document && 11 >= document.documentMode, gn = null, Wa = null, Wu = null, Wi = !1;
  function mr(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Wi || gn == null || gn !== Qc(c) || (c = gn, "selectionStart" in c && Rf(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), Wu && Ku(Wu, c) || (Wu = c, c = wo(Wa, "onSelect"), 0 < c.length && (n = new ir(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = gn)));
  }
  function ru(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var Fi = {
    animationend: ru("Animation", "AnimationEnd"),
    animationiteration: ru("Animation", "AnimationIteration"),
    animationstart: ru("Animation", "AnimationStart"),
    transitionrun: ru("Transition", "TransitionRun"),
    transitionstart: ru("Transition", "TransitionStart"),
    transitioncancel: ru("Transition", "TransitionCancel"),
    transitionend: ru("Transition", "TransitionEnd")
  }, Ra = {}, Fa = {};
  mn && (Fa = document.createElement("div").style, "AnimationEvent" in window || (delete Fi.animationend.animation, delete Fi.animationiteration.animation, delete Fi.animationstart.animation), "TransitionEvent" in window || delete Fi.transitionend.transition);
  function vn(l) {
    if (Ra[l]) return Ra[l];
    if (!Fi[l]) return l;
    var n = Fi[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in Fa)
        return Ra[l] = n[u];
    return l;
  }
  var Yp = vn("animationend"), $h = vn("animationiteration"), Gp = vn("animationstart"), Wh = vn("transitionrun"), yr = vn("transitionstart"), Vp = vn("transitioncancel"), Fh = vn("transitionend"), Ih = /* @__PURE__ */ new Map(), Fc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Fc.push("scrollEnd");
  function Oa(l, n) {
    Ih.set(l, n), Gu(n, [l]);
  }
  var Ph = /* @__PURE__ */ new WeakMap();
  function da(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = Ph.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: zh(n)
      }, Ph.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: zh(n)
    };
  }
  var Kl = [], Fu = 0, bn = 0;
  function Ia() {
    for (var l = Fu, n = bn = Fu = 0; n < l; ) {
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
      r !== 0 && Pc(u, s, r);
    }
  }
  function Iu(l, n, u, c) {
    Kl[Fu++] = l, Kl[Fu++] = n, Kl[Fu++] = u, Kl[Fu++] = c, bn |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function Ic(l, n, u, c) {
    return Iu(l, n, u, c), Of(l);
  }
  function Sn(l, n) {
    return Iu(l, null, null, n), Of(l);
  }
  function Pc(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - kl(u), l = r.hiddenUpdates, c = l[s], c === null ? l[s] = [n] : c.push(n), n.lane = u | 536870912), r) : null;
  }
  function Of(l) {
    if (50 < Oo)
      throw Oo = 0, Pm = null, Error(b(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var eo = {};
  function Xp(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function $l(l, n, u, c) {
    return new Xp(l, n, u, c);
  }
  function Df(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Pa(l, n) {
    var u = l.alternate;
    return u === null ? (u = $l(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Le(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function $(l, n, u, c, s, r) {
    var m = 0;
    if (c = l, typeof l == "function") Df(l) && (m = 1);
    else if (typeof l == "string")
      m = E0(
        l,
        u,
        Se.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case le:
          return l = $l(31, u, n, s), l.elementType = le, l.lanes = r, l;
        case Oe:
          return Da(u.children, s, r, n);
        case be:
          m = 8, s |= 24;
          break;
        case qe:
          return l = $l(12, u, n, s | 2), l.elementType = qe, l.lanes = r, l;
        case Dt:
          return l = $l(13, u, n, s), l.elementType = Dt, l.lanes = r, l;
        case ot:
          return l = $l(19, u, n, s), l.elementType = ot, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Ce:
              case Xe:
                m = 10;
                break e;
              case tt:
                m = 9;
                break e;
              case pt:
                m = 11;
                break e;
              case je:
                m = 14;
                break e;
              case fe:
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
  function to(l, n, u) {
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
  var Pu = [], ei = 0, Mf = null, lo = 0, Ma = [], Wl = 0, du = null, en = 1, jt = "";
  function Pe(l, n) {
    Pu[ei++] = lo, Pu[ei++] = Mf, Mf = l, lo = n;
  }
  function pr(l, n, u) {
    Ma[Wl++] = en, Ma[Wl++] = jt, Ma[Wl++] = du, du = l;
    var c = en;
    l = jt;
    var s = 32 - kl(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - kl(n) + s;
    if (30 < r) {
      var m = s - s % 5;
      r = (c & (1 << m) - 1).toString(32), c >>= m, s -= m, en = 1 << 32 - kl(n) + s | u << s | c, jt = r + l;
    } else
      en = 1 << r | u << s | c, jt = l;
  }
  function Ii(l) {
    l.return !== null && (Pe(l, 1), pr(l, 1, 0));
  }
  function Tn(l) {
    for (; l === Mf; )
      Mf = Pu[--ei], Pu[ei] = null, lo = Pu[--ei], Pu[ei] = null;
    for (; l === du; )
      du = Ma[--Wl], Ma[Wl] = null, jt = Ma[--Wl], Ma[Wl] = null, en = Ma[--Wl], Ma[Wl] = null;
  }
  var kt = null, nt = null, at = !1, Ua = null, Ca = !1, Pi = Error(b(519));
  function hu(l) {
    var n = Error(b(418, ""));
    throw uo(da(n, l)), Pi;
  }
  function Uf(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[ul] = l, n[_l] = c, u) {
      case "dialog":
        Ne("cancel", n), Ne("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ne("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ys.length; u++)
          Ne(ys[u], n);
        break;
      case "source":
        Ne("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ne("error", n), Ne("load", n);
        break;
      case "details":
        Ne("toggle", n);
        break;
      case "input":
        Ne("invalid", n), er(
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
        Ne("invalid", n);
        break;
      case "textarea":
        Ne("invalid", n), Dh(n, c.value, c.defaultValue, c.children), Lu(n);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || hy(n.textContent, u) ? (c.popover != null && (Ne("beforetoggle", n), Ne("toggle", n)), c.onScroll != null && Ne("scroll", n), c.onScrollEnd != null && Ne("scrollend", n), c.onClick != null && (n.onclick = Rd), n = !0) : n = !1, n || hu(l);
  }
  function em(l) {
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
  function ao(l) {
    if (l !== kt) return !1;
    if (!at) return em(l), at = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Vn(l.type, l.memoizedProps)), u = !u), u && nt && hu(l), em(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(b(317));
      e: {
        for (l = l.nextSibling, n = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (n === 0) {
                nt = cn(l.nextSibling);
                break e;
              }
              n--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || n++;
          l = l.nextSibling;
        }
        nt = null;
      }
    } else
      n === 27 ? (n = nt, vi(l.type) ? (l = bi, bi = null, nt = l) : nt = n) : nt = kt ? cn(l.stateNode.nextSibling) : null;
    return !0;
  }
  function no() {
    nt = kt = null, at = !1;
  }
  function tm() {
    var l = Ua;
    return l !== null && (la === null ? la = l : la.push.apply(
      la,
      l
    ), Ua = null), l;
  }
  function uo(l) {
    Ua === null ? Ua = [l] : Ua.push(l);
  }
  var Cf = ae(null), mu = null, tn = null;
  function yu(l, n, u) {
    ee(Cf, n._currentValue), n._currentValue = u;
  }
  function En(l) {
    l._currentValue = Cf.current, F(Cf);
  }
  function gr(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function lm(l, n, u, c) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var m = s.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var p = r;
          r = s;
          for (var S = 0; S < n.length; S++)
            if (p.context === n[S]) {
              r.lanes |= u, p = r.alternate, p !== null && (p.lanes |= u), gr(
                r.return,
                u,
                l
              ), c || (m = null);
              break e;
            }
          r = p.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(b(341));
        m.lanes |= u, r = m.alternate, r !== null && (r.lanes |= u), gr(m, u, l), m = null;
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
  function io(l, n, u, c) {
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
          var p = s.type;
          pl(s.pendingProps.value, m.value) || (l !== null ? l.push(p) : l = [p]);
        }
      } else if (s === Tt.current) {
        if (m = s.alternate, m === null) throw Error(b(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(ia) : l = [ia]);
      }
      s = s.return;
    }
    l !== null && lm(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function Hf(l) {
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
    mu = l, tn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function il(l) {
    return am(mu, l);
  }
  function wf(l, n) {
    return mu === null && ti(l), am(l, n);
  }
  function am(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, tn === null) {
      if (l === null) throw Error(b(308));
      tn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else tn = tn.next = n;
    return u;
  }
  var co = typeof AbortController < "u" ? AbortController : function() {
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
  }, vr = y.unstable_scheduleCallback, Lp = y.unstable_NormalPriority, It = {
    $$typeof: Xe,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function oo() {
    return {
      controller: new co(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function An(l) {
    l.refCount--, l.refCount === 0 && vr(Lp, function() {
      l.controller.abort();
    });
  }
  var li = null, Nf = 0, Ha = 0, Pt = null;
  function br(l, n) {
    if (li === null) {
      var u = li = [];
      Nf = 0, Ha = Tc(), Pt = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return Nf++, n.then(Sr, Sr), n;
  }
  function Sr() {
    if (--Nf === 0 && li !== null) {
      Pt !== null && (Pt.status = "fulfilled");
      var l = li;
      li = null, Ha = 0, Pt = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function Qp(l, n) {
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
  var Tr = A.S;
  A.S = function(l, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && br(l, n), Tr !== null && Tr(l, n);
  };
  var xn = ae(null);
  function Bf() {
    var l = xn.current;
    return l !== null ? l : Et.pooledCache;
  }
  function ec(l, n) {
    n === null ? ee(xn, xn.current) : ee(xn, n.pool);
  }
  function Er() {
    var l = Bf();
    return l === null ? null : { parent: It._currentValue, pool: l };
  }
  var ai = Error(b(460)), Ar = Error(b(474)), _f = Error(b(542)), xr = { then: function() {
  } };
  function zr(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function qf() {
  }
  function nm(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(qf, qf), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, im(l), l;
      default:
        if (typeof n.status == "string") n.then(qf, qf);
        else {
          if (l = Et, l !== null && 100 < l.shellSuspendCounter)
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
            throw l = n.reason, im(l), l;
        }
        throw tc = n, ai;
    }
  }
  var tc = null;
  function um() {
    if (tc === null) throw Error(b(459));
    var l = tc;
    return tc = null, l;
  }
  function im(l) {
    if (l === ai || l === _f)
      throw Error(b(483));
  }
  var zn = !1;
  function Rr(l) {
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
  function Rn(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (rt & 2) !== 0) {
      var s = c.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), c.pending = n, n = Of(l), Pc(l, null, u), n;
    }
    return Iu(l, c, n, u), Of(l);
  }
  function lc(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, ff(l, u);
    }
  }
  function cm(l, n) {
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
  var om = !1;
  function fo() {
    if (om) {
      var l = Pt;
      if (l !== null) throw l;
    }
  }
  function pu(l, n, u, c) {
    om = !1;
    var s = l.updateQueue;
    zn = !1;
    var r = s.firstBaseUpdate, m = s.lastBaseUpdate, p = s.shared.pending;
    if (p !== null) {
      s.shared.pending = null;
      var S = p, U = S.next;
      S.next = null, m === null ? r = U : m.next = U, m = S;
      var L = l.alternate;
      L !== null && (L = L.updateQueue, p = L.lastBaseUpdate, p !== m && (p === null ? L.firstBaseUpdate = U : p.next = U, L.lastBaseUpdate = S));
    }
    if (r !== null) {
      var K = s.baseState;
      m = 0, L = U = S = null, p = r;
      do {
        var H = p.lane & -536870913, N = H !== p.lane;
        if (N ? (Ke & H) === H : (c & H) === H) {
          H !== 0 && H === Ha && (om = !0), L !== null && (L = L.next = {
            lane: 0,
            tag: p.tag,
            payload: p.payload,
            callback: null,
            next: null
          });
          e: {
            var ge = l, ve = p;
            H = n;
            var it = u;
            switch (ve.tag) {
              case 1:
                if (ge = ve.payload, typeof ge == "function") {
                  K = ge.call(it, K, H);
                  break e;
                }
                K = ge;
                break e;
              case 3:
                ge.flags = ge.flags & -65537 | 128;
              case 0:
                if (ge = ve.payload, H = typeof ge == "function" ? ge.call(it, K, H) : ge, H == null) break e;
                K = de({}, K, H);
                break e;
              case 2:
                zn = !0;
            }
          }
          H = p.callback, H !== null && (l.flags |= 64, N && (l.flags |= 8192), N = s.callbacks, N === null ? s.callbacks = [H] : N.push(H));
        } else
          N = {
            lane: H,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null
          }, L === null ? (U = L = N, S = K) : L = L.next = N, m |= H;
        if (p = p.next, p === null) {
          if (p = s.shared.pending, p === null)
            break;
          N = p, p = N.next, N.next = null, s.lastBaseUpdate = N, s.shared.pending = null;
        }
      } while (!0);
      L === null && (S = K), s.baseState = S, s.firstBaseUpdate = U, s.lastBaseUpdate = L, r === null && (s.shared.lanes = 0), Au |= m, l.lanes = m, l.memoizedState = K;
    }
  }
  function Dr(l, n) {
    if (typeof l != "function")
      throw Error(b(191, l));
    l.call(n);
  }
  function jf(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Dr(u[l], n);
  }
  var ac = ae(null), Yf = ae(0);
  function cl(l, n) {
    l = Eu, ee(Yf, l), ee(ac, n), Eu = l | n.baseLanes;
  }
  function so() {
    ee(Yf, Eu), ee(ac, ac.current);
  }
  function ro() {
    Eu = Yf.current, F(ac), F(Yf);
  }
  var wa = 0, we = null, st = null, Bt = null, Gf = !1, ha = !1, ni = !1, ln = 0, ma = 0, gu = null, fm = 0;
  function _t() {
    throw Error(b(321));
  }
  function Mr(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!pl(l[u], n[u])) return !1;
    return !0;
  }
  function Ur(l, n, u, c, s, r) {
    return wa = r, we = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, A.H = l === null || l.memoizedState === null ? xm : zm, ni = !1, r = u(c, s), ni = !1, ha && (r = sm(
      n,
      u,
      c,
      s
    )), ui(l), r;
  }
  function ui(l) {
    A.H = Jr;
    var n = st !== null && st.next !== null;
    if (wa = 0, Bt = st = we = null, Gf = !1, ma = 0, gu = null, n) throw Error(b(300));
    l === null || el || (l = l.dependencies, l !== null && Hf(l) && (el = !0));
  }
  function sm(l, n, u, c) {
    we = l;
    var s = 0;
    do {
      if (ha && (gu = null), ma = 0, ha = !1, 25 <= s) throw Error(b(301));
      if (s += 1, Bt = st = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      A.H = vu, r = n(u, c);
    } while (ha);
    return r;
  }
  function Zp() {
    var l = A.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Xf(n) : n, l = l.useState()[0], (st !== null ? st.memoizedState : null) !== l && (we.flags |= 1024), n;
  }
  function Cr() {
    var l = ln !== 0;
    return ln = 0, l;
  }
  function ho(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Hr(l) {
    if (Gf) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Gf = !1;
    }
    wa = 0, Bt = st = we = null, ha = !1, ma = ln = 0, gu = null;
  }
  function Dl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Bt === null ? we.memoizedState = Bt = l : Bt = Bt.next = l, Bt;
  }
  function Yt() {
    if (st === null) {
      var l = we.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = st.next;
    var n = Bt === null ? we.memoizedState : Bt.next;
    if (n !== null)
      Bt = n, st = l;
    else {
      if (l === null)
        throw we.alternate === null ? Error(b(467)) : Error(b(310));
      st = l, l = {
        memoizedState: st.memoizedState,
        baseState: st.baseState,
        baseQueue: st.baseQueue,
        queue: st.queue,
        next: null
      }, Bt === null ? we.memoizedState = Bt = l : Bt = Bt.next = l;
    }
    return Bt;
  }
  function Vf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Xf(l) {
    var n = ma;
    return ma += 1, gu === null && (gu = []), l = nm(gu, l, n), n = we, (Bt === null ? n.memoizedState : Bt.next) === null && (n = n.alternate, A.H = n === null || n.memoizedState === null ? xm : zm), l;
  }
  function Jt(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Xf(l);
      if (l.$$typeof === Xe) return il(l);
    }
    throw Error(b(438, String(l)));
  }
  function wr(l) {
    var n = null, u = we.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = we.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Vf(), we.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = gt;
    return n.index++, u;
  }
  function On(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function Lf(l) {
    var n = Yt();
    return Nr(n, st, l);
  }
  function Nr(l, n, u) {
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
      var p = m = null, S = null, U = n, L = !1;
      do {
        var K = U.lane & -536870913;
        if (K !== U.lane ? (Ke & K) === K : (wa & K) === K) {
          var H = U.revertLane;
          if (H === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            }), K === Ha && (L = !0);
          else if ((wa & H) === H) {
            U = U.next, H === Ha && (L = !0);
            continue;
          } else
            K = {
              lane: 0,
              revertLane: U.revertLane,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            }, S === null ? (p = S = K, m = r) : S = S.next = K, we.lanes |= H, Au |= H;
          K = U.action, ni && u(r, K), r = U.hasEagerState ? U.eagerState : u(r, K);
        } else
          H = {
            lane: K,
            revertLane: U.revertLane,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          }, S === null ? (p = S = H, m = r) : S = S.next = H, we.lanes |= K, Au |= K;
        U = U.next;
      } while (U !== null && U !== n);
      if (S === null ? m = r : S.next = p, !pl(r, l.memoizedState) && (el = !0, L && (u = Pt, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = S, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Br(l) {
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
  function Qf(l, n, u) {
    var c = we, s = Yt(), r = at;
    if (r) {
      if (u === void 0) throw Error(b(407));
      u = u();
    } else u = n();
    var m = !pl(
      (st || s).memoizedState,
      u
    );
    m && (s.memoizedState = u, el = !0), s = s.queue;
    var p = dm.bind(null, c, s, l);
    if (vt(2048, 8, p, [l]), s.getSnapshot !== n || m || Bt !== null && Bt.memoizedState.tag & 1) {
      if (c.flags |= 2048, Il(
        9,
        Jf(),
        rm.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), Et === null) throw Error(b(349));
      r || (wa & 124) !== 0 || _r(c, n, u);
    }
    return u;
  }
  function _r(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = we.updateQueue, n === null ? (n = Vf(), we.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function rm(l, n, u, c) {
    n.value = u, n.getSnapshot = c, hm(n) && qr(l);
  }
  function dm(l, n, u) {
    return u(function() {
      hm(n) && qr(l);
    });
  }
  function hm(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !pl(l, u);
    } catch {
      return !0;
    }
  }
  function qr(l) {
    var n = Sn(l, 2);
    n !== null && ga(n, l, 2);
  }
  function Zf(l) {
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
      lastRenderedReducer: On,
      lastRenderedState: l
    }, n;
  }
  function jr(l, n, u, c) {
    return l.baseState = u, Nr(
      l,
      st,
      typeof c == "function" ? c : On
    );
  }
  function kp(l, n, u, c, s) {
    if (cc(l)) throw Error(b(485));
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
      A.T !== null ? u(!0) : r.isTransition = !1, c(r), u = n.pending, u === null ? (r.next = n.pending = r, Yr(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function Yr(l, n) {
    var u = n.action, c = n.payload, s = l.state;
    if (n.isTransition) {
      var r = A.T, m = {};
      A.T = m;
      try {
        var p = u(s, c), S = A.S;
        S !== null && S(m, p), kf(l, n, p);
      } catch (U) {
        Vr(l, n, U);
      } finally {
        A.T = r;
      }
    } else
      try {
        r = u(s, c), kf(l, n, r);
      } catch (U) {
        Vr(l, n, U);
      }
  }
  function kf(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        Gr(l, n, c);
      },
      function(c) {
        return Vr(l, n, c);
      }
    ) : Gr(l, n, u);
  }
  function Gr(l, n, u) {
    n.status = "fulfilled", n.value = u, mm(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, Yr(l, u)));
  }
  function Vr(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, mm(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function mm(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Xr(l, n) {
    return n;
  }
  function ym(l, n) {
    if (at) {
      var u = Et.formState;
      if (u !== null) {
        e: {
          var c = we;
          if (at) {
            if (nt) {
              t: {
                for (var s = nt, r = Ca; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = cn(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                nt = cn(
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
      lastRenderedReducer: Xr,
      lastRenderedState: n
    }, u.queue = c, u = Em.bind(
      null,
      we,
      c
    ), c.dispatch = u, c = Zf(!1), r = Wf.bind(
      null,
      we,
      !1,
      c.queue
    ), c = Dl(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = s, u = kp.bind(
      null,
      we,
      s,
      r,
      u
    ), s.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function Dn(l) {
    var n = Yt();
    return Lr(n, st, l);
  }
  function Lr(l, n, u) {
    if (n = Nr(
      l,
      n,
      Xr
    )[0], l = Lf(On)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = Xf(n);
      } catch (m) {
        throw m === ai ? _f : m;
      }
    else c = n;
    n = Yt();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (we.flags |= 2048, Il(
      9,
      Jf(),
      Ug.bind(null, s, u),
      null
    )), [c, r, l];
  }
  function Ug(l, n) {
    l.action = n;
  }
  function Qr(l) {
    var n = Yt(), u = st;
    if (u !== null)
      return Lr(n, u, l);
    Yt(), n = n.memoizedState, u = Yt();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function Il(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = we.updateQueue, n === null && (n = Vf(), we.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function Jf() {
    return { destroy: void 0, resource: void 0 };
  }
  function Kf() {
    return Yt().memoizedState;
  }
  function ii(l, n, u, c) {
    var s = Dl();
    c = c === void 0 ? null : c, we.flags |= l, s.memoizedState = Il(
      1 | n,
      Jf(),
      u,
      c
    );
  }
  function vt(l, n, u, c) {
    var s = Yt();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    st !== null && c !== null && Mr(c, st.memoizedState.deps) ? s.memoizedState = Il(n, r, u, c) : (we.flags |= l, s.memoizedState = Il(
      1 | n,
      r,
      u,
      c
    ));
  }
  function Jp(l, n) {
    ii(8390656, 8, l, n);
  }
  function Kp(l, n) {
    vt(2048, 8, l, n);
  }
  function pm(l, n) {
    return vt(4, 2, l, n);
  }
  function an(l, n) {
    return vt(4, 4, l, n);
  }
  function gm(l, n) {
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
  function Zr(l, n, u) {
    u = u != null ? u.concat([l]) : null, vt(4, 4, gm.bind(null, n, l), u);
  }
  function nc() {
  }
  function uc(l, n) {
    var u = Yt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && Mr(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function vm(l, n) {
    var u = Yt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && Mr(n, c[1]))
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
  function $f(l, n, u) {
    return u === void 0 || (wa & 1073741824) !== 0 ? l.memoizedState = n : (l.memoizedState = u, l = ey(), we.lanes |= l, Au |= l, u);
  }
  function bm(l, n, u, c) {
    return pl(u, n) ? u : ac.current !== null ? (l = $f(l, u, c), pl(l, n) || (el = !0), l) : (wa & 42) === 0 ? (el = !0, l.memoizedState = u) : (l = ey(), we.lanes |= l, Au |= l, n);
  }
  function $p(l, n, u, c, s) {
    var r = Q.p;
    Q.p = r !== 0 && 8 > r ? r : 8;
    var m = A.T, p = {};
    A.T = p, Wf(l, !1, n, u);
    try {
      var S = s(), U = A.S;
      if (U !== null && U(p, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var L = Qp(
          S,
          c
        );
        ic(
          l,
          n,
          L,
          pa(l)
        );
      } else
        ic(
          l,
          n,
          c,
          pa(l)
        );
    } catch (K) {
      ic(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: K },
        pa()
      );
    } finally {
      Q.p = r, A.T = m;
    }
  }
  function Cg() {
  }
  function kr(l, n, u, c) {
    if (l.tag !== 5) throw Error(b(476));
    var s = Wp(l).queue;
    $p(
      l,
      s,
      n,
      _,
      u === null ? Cg : function() {
        return mo(l), u(c);
      }
    );
  }
  function Wp(l) {
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
        lastRenderedReducer: On,
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
        lastRenderedReducer: On,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function mo(l) {
    var n = Wp(l).next.queue;
    ic(l, n, {}, pa());
  }
  function Na() {
    return il(ia);
  }
  function Sm() {
    return Yt().memoizedState;
  }
  function Fp() {
    return Yt().memoizedState;
  }
  function Ip(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = pa();
          l = Fl(u);
          var c = Rn(n, l, u);
          c !== null && (ga(c, n, u), lc(c, n, u)), n = { cache: oo() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Tm(l, n, u) {
    var c = pa();
    u = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, cc(l) ? Pp(n, u) : (u = Ic(l, n, u, c), u !== null && (ga(u, l, c), Am(u, n, c)));
  }
  function Em(l, n, u) {
    var c = pa();
    ic(l, n, u, c);
  }
  function ic(l, n, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (cc(l)) Pp(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var m = n.lastRenderedState, p = r(m, u);
          if (s.hasEagerState = !0, s.eagerState = p, pl(p, m))
            return Iu(l, n, s, 0), Et === null && Ia(), !1;
        } catch {
        } finally {
        }
      if (u = Ic(l, n, s, c), u !== null)
        return ga(u, l, c), Am(u, n, c), !0;
    }
    return !1;
  }
  function Wf(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: Tc(),
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, cc(l)) {
      if (n) throw Error(b(479));
    } else
      n = Ic(
        l,
        u,
        c,
        2
      ), n !== null && ga(n, l, 2);
  }
  function cc(l) {
    var n = l.alternate;
    return l === we || n !== null && n === we;
  }
  function Pp(l, n) {
    ha = Gf = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function Am(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, ff(l, u);
    }
  }
  var Jr = {
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
  }, xm = {
    readContext: il,
    use: Jt,
    useCallback: function(l, n) {
      return Dl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: il,
    useEffect: Jp,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, ii(
        4194308,
        4,
        gm.bind(null, n, l),
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
      }, c.queue = l, l = l.dispatch = Tm.bind(
        null,
        we,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = Dl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = Zf(l);
      var n = l.queue, u = Em.bind(null, we, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: nc,
    useDeferredValue: function(l, n) {
      var u = Dl();
      return $f(u, l, n);
    },
    useTransition: function() {
      var l = Zf(!1);
      return l = $p.bind(
        null,
        we,
        l.queue,
        !0,
        !1
      ), Dl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = we, s = Dl();
      if (at) {
        if (u === void 0)
          throw Error(b(407));
        u = u();
      } else {
        if (u = n(), Et === null)
          throw Error(b(349));
        (Ke & 124) !== 0 || _r(c, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, Jp(dm.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, Il(
        9,
        Jf(),
        rm.bind(
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
      var l = Dl(), n = Et.identifierPrefix;
      if (at) {
        var u = jt, c = en;
        u = (c & ~(1 << 32 - kl(c) - 1)).toString(32) + u, n = "«" + n + "R" + u, u = ln++, 0 < u && (n += "H" + u.toString(32)), n += "»";
      } else
        u = fm++, n = "«" + n + "r" + u.toString(32) + "»";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: Na,
    useFormState: ym,
    useActionState: ym,
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
      return n.queue = u, n = Wf.bind(
        null,
        we,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: wr,
    useCacheRefresh: function() {
      return Dl().memoizedState = Ip.bind(
        null,
        we
      );
    }
  }, zm = {
    readContext: il,
    use: Jt,
    useCallback: uc,
    useContext: il,
    useEffect: Kp,
    useImperativeHandle: Zr,
    useInsertionEffect: pm,
    useLayoutEffect: an,
    useMemo: vm,
    useReducer: Lf,
    useRef: Kf,
    useState: function() {
      return Lf(On);
    },
    useDebugValue: nc,
    useDeferredValue: function(l, n) {
      var u = Yt();
      return bm(
        u,
        st.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Lf(On)[0], n = Yt().memoizedState;
      return [
        typeof l == "boolean" ? l : Xf(l),
        n
      ];
    },
    useSyncExternalStore: Qf,
    useId: Sm,
    useHostTransitionStatus: Na,
    useFormState: Dn,
    useActionState: Dn,
    useOptimistic: function(l, n) {
      var u = Yt();
      return jr(u, st, l, n);
    },
    useMemoCache: wr,
    useCacheRefresh: Fp
  }, vu = {
    readContext: il,
    use: Jt,
    useCallback: uc,
    useContext: il,
    useEffect: Kp,
    useImperativeHandle: Zr,
    useInsertionEffect: pm,
    useLayoutEffect: an,
    useMemo: vm,
    useReducer: Br,
    useRef: Kf,
    useState: function() {
      return Br(On);
    },
    useDebugValue: nc,
    useDeferredValue: function(l, n) {
      var u = Yt();
      return st === null ? $f(u, l, n) : bm(
        u,
        st.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Br(On)[0], n = Yt().memoizedState;
      return [
        typeof l == "boolean" ? l : Xf(l),
        n
      ];
    },
    useSyncExternalStore: Qf,
    useId: Sm,
    useHostTransitionStatus: Na,
    useFormState: Qr,
    useActionState: Qr,
    useOptimistic: function(l, n) {
      var u = Yt();
      return st !== null ? jr(u, st, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: wr,
    useCacheRefresh: Fp
  }, oc = null, yo = 0;
  function Kr(l) {
    var n = yo;
    return yo += 1, oc === null && (oc = []), nm(oc, l, n);
  }
  function fc(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function Ml(l, n) {
    throw n.$$typeof === Re ? Error(b(525)) : (l = Object.prototype.toString.call(n), Error(
      b(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function Rm(l) {
    var n = l._init;
    return n(l._payload);
  }
  function Pl(l) {
    function n(D, z) {
      if (l) {
        var M = D.deletions;
        M === null ? (D.deletions = [z], D.flags |= 16) : M.push(z);
      }
    }
    function u(D, z) {
      if (!l) return null;
      for (; z !== null; )
        n(D, z), z = z.sibling;
      return null;
    }
    function c(D) {
      for (var z = /* @__PURE__ */ new Map(); D !== null; )
        D.key !== null ? z.set(D.key, D) : z.set(D.index, D), D = D.sibling;
      return z;
    }
    function s(D, z) {
      return D = Pa(D, z), D.index = 0, D.sibling = null, D;
    }
    function r(D, z, M) {
      return D.index = M, l ? (M = D.alternate, M !== null ? (M = M.index, M < z ? (D.flags |= 67108866, z) : M) : (D.flags |= 67108866, z)) : (D.flags |= 1048576, z);
    }
    function m(D) {
      return l && D.alternate === null && (D.flags |= 67108866), D;
    }
    function p(D, z, M, k) {
      return z === null || z.tag !== 6 ? (z = to(M, D.mode, k), z.return = D, z) : (z = s(z, M), z.return = D, z);
    }
    function S(D, z, M, k) {
      var ne = M.type;
      return ne === Oe ? L(
        D,
        z,
        M.props.children,
        k,
        M.key
      ) : z !== null && (z.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === fe && Rm(ne) === z.type) ? (z = s(z, M.props), fc(z, M), z.return = D, z) : (z = $(
        M.type,
        M.key,
        M.props,
        null,
        D.mode,
        k
      ), fc(z, M), z.return = D, z);
    }
    function U(D, z, M, k) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== M.containerInfo || z.stateNode.implementation !== M.implementation ? (z = Nt(M, D.mode, k), z.return = D, z) : (z = s(z, M.children || []), z.return = D, z);
    }
    function L(D, z, M, k, ne) {
      return z === null || z.tag !== 7 ? (z = Da(
        M,
        D.mode,
        k,
        ne
      ), z.return = D, z) : (z = s(z, M), z.return = D, z);
    }
    function K(D, z, M) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = to(
          "" + z,
          D.mode,
          M
        ), z.return = D, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case pe:
            return M = $(
              z.type,
              z.key,
              z.props,
              null,
              D.mode,
              M
            ), fc(M, z), M.return = D, M;
          case Ve:
            return z = Nt(
              z,
              D.mode,
              M
            ), z.return = D, z;
          case fe:
            var k = z._init;
            return z = k(z._payload), K(D, z, M);
        }
        if (dt(z) || Ae(z))
          return z = Da(
            z,
            D.mode,
            M,
            null
          ), z.return = D, z;
        if (typeof z.then == "function")
          return K(D, Kr(z), M);
        if (z.$$typeof === Xe)
          return K(
            D,
            wf(D, z),
            M
          );
        Ml(D, z);
      }
      return null;
    }
    function H(D, z, M, k) {
      var ne = z !== null ? z.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return ne !== null ? null : p(D, z, "" + M, k);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case pe:
            return M.key === ne ? S(D, z, M, k) : null;
          case Ve:
            return M.key === ne ? U(D, z, M, k) : null;
          case fe:
            return ne = M._init, M = ne(M._payload), H(D, z, M, k);
        }
        if (dt(M) || Ae(M))
          return ne !== null ? null : L(D, z, M, k, null);
        if (typeof M.then == "function")
          return H(
            D,
            z,
            Kr(M),
            k
          );
        if (M.$$typeof === Xe)
          return H(
            D,
            z,
            wf(D, M),
            k
          );
        Ml(D, M);
      }
      return null;
    }
    function N(D, z, M, k, ne) {
      if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint")
        return D = D.get(M) || null, p(z, D, "" + k, ne);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case pe:
            return D = D.get(
              k.key === null ? M : k.key
            ) || null, S(z, D, k, ne);
          case Ve:
            return D = D.get(
              k.key === null ? M : k.key
            ) || null, U(z, D, k, ne);
          case fe:
            var Qe = k._init;
            return k = Qe(k._payload), N(
              D,
              z,
              M,
              k,
              ne
            );
        }
        if (dt(k) || Ae(k))
          return D = D.get(M) || null, L(z, D, k, ne, null);
        if (typeof k.then == "function")
          return N(
            D,
            z,
            M,
            Kr(k),
            ne
          );
        if (k.$$typeof === Xe)
          return N(
            D,
            z,
            M,
            wf(z, k),
            ne
          );
        Ml(z, k);
      }
      return null;
    }
    function ge(D, z, M, k) {
      for (var ne = null, Qe = null, ye = z, Ee = z = 0, sl = null; ye !== null && Ee < M.length; Ee++) {
        ye.index > Ee ? (sl = ye, ye = null) : sl = ye.sibling;
        var lt = H(
          D,
          ye,
          M[Ee],
          k
        );
        if (lt === null) {
          ye === null && (ye = sl);
          break;
        }
        l && ye && lt.alternate === null && n(D, ye), z = r(lt, z, Ee), Qe === null ? ne = lt : Qe.sibling = lt, Qe = lt, ye = sl;
      }
      if (Ee === M.length)
        return u(D, ye), at && Pe(D, Ee), ne;
      if (ye === null) {
        for (; Ee < M.length; Ee++)
          ye = K(D, M[Ee], k), ye !== null && (z = r(
            ye,
            z,
            Ee
          ), Qe === null ? ne = ye : Qe.sibling = ye, Qe = ye);
        return at && Pe(D, Ee), ne;
      }
      for (ye = c(ye); Ee < M.length; Ee++)
        sl = N(
          ye,
          D,
          Ee,
          M[Ee],
          k
        ), sl !== null && (l && sl.alternate !== null && ye.delete(
          sl.key === null ? Ee : sl.key
        ), z = r(
          sl,
          z,
          Ee
        ), Qe === null ? ne = sl : Qe.sibling = sl, Qe = sl);
      return l && ye.forEach(function(xi) {
        return n(D, xi);
      }), at && Pe(D, Ee), ne;
    }
    function ve(D, z, M, k) {
      if (M == null) throw Error(b(151));
      for (var ne = null, Qe = null, ye = z, Ee = z = 0, sl = null, lt = M.next(); ye !== null && !lt.done; Ee++, lt = M.next()) {
        ye.index > Ee ? (sl = ye, ye = null) : sl = ye.sibling;
        var xi = H(D, ye, lt.value, k);
        if (xi === null) {
          ye === null && (ye = sl);
          break;
        }
        l && ye && xi.alternate === null && n(D, ye), z = r(xi, z, Ee), Qe === null ? ne = xi : Qe.sibling = xi, Qe = xi, ye = sl;
      }
      if (lt.done)
        return u(D, ye), at && Pe(D, Ee), ne;
      if (ye === null) {
        for (; !lt.done; Ee++, lt = M.next())
          lt = K(D, lt.value, k), lt !== null && (z = r(lt, z, Ee), Qe === null ? ne = lt : Qe.sibling = lt, Qe = lt);
        return at && Pe(D, Ee), ne;
      }
      for (ye = c(ye); !lt.done; Ee++, lt = M.next())
        lt = N(ye, D, Ee, lt.value, k), lt !== null && (l && lt.alternate !== null && ye.delete(lt.key === null ? Ee : lt.key), z = r(lt, z, Ee), Qe === null ? ne = lt : Qe.sibling = lt, Qe = lt);
      return l && ye.forEach(function(Lg) {
        return n(D, Lg);
      }), at && Pe(D, Ee), ne;
    }
    function it(D, z, M, k) {
      if (typeof M == "object" && M !== null && M.type === Oe && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case pe:
            e: {
              for (var ne = M.key; z !== null; ) {
                if (z.key === ne) {
                  if (ne = M.type, ne === Oe) {
                    if (z.tag === 7) {
                      u(
                        D,
                        z.sibling
                      ), k = s(
                        z,
                        M.props.children
                      ), k.return = D, D = k;
                      break e;
                    }
                  } else if (z.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === fe && Rm(ne) === z.type) {
                    u(
                      D,
                      z.sibling
                    ), k = s(z, M.props), fc(k, M), k.return = D, D = k;
                    break e;
                  }
                  u(D, z);
                  break;
                } else n(D, z);
                z = z.sibling;
              }
              M.type === Oe ? (k = Da(
                M.props.children,
                D.mode,
                k,
                M.key
              ), k.return = D, D = k) : (k = $(
                M.type,
                M.key,
                M.props,
                null,
                D.mode,
                k
              ), fc(k, M), k.return = D, D = k);
            }
            return m(D);
          case Ve:
            e: {
              for (ne = M.key; z !== null; ) {
                if (z.key === ne)
                  if (z.tag === 4 && z.stateNode.containerInfo === M.containerInfo && z.stateNode.implementation === M.implementation) {
                    u(
                      D,
                      z.sibling
                    ), k = s(z, M.children || []), k.return = D, D = k;
                    break e;
                  } else {
                    u(D, z);
                    break;
                  }
                else n(D, z);
                z = z.sibling;
              }
              k = Nt(M, D.mode, k), k.return = D, D = k;
            }
            return m(D);
          case fe:
            return ne = M._init, M = ne(M._payload), it(
              D,
              z,
              M,
              k
            );
        }
        if (dt(M))
          return ge(
            D,
            z,
            M,
            k
          );
        if (Ae(M)) {
          if (ne = Ae(M), typeof ne != "function") throw Error(b(150));
          return M = ne.call(M), ve(
            D,
            z,
            M,
            k
          );
        }
        if (typeof M.then == "function")
          return it(
            D,
            z,
            Kr(M),
            k
          );
        if (M.$$typeof === Xe)
          return it(
            D,
            z,
            wf(D, M),
            k
          );
        Ml(D, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint" ? (M = "" + M, z !== null && z.tag === 6 ? (u(D, z.sibling), k = s(z, M), k.return = D, D = k) : (u(D, z), k = to(M, D.mode, k), k.return = D, D = k), m(D)) : u(D, z);
    }
    return function(D, z, M, k) {
      try {
        yo = 0;
        var ne = it(
          D,
          z,
          M,
          k
        );
        return oc = null, ne;
      } catch (ye) {
        if (ye === ai || ye === _f) throw ye;
        var Qe = $l(29, ye, null, D.mode);
        return Qe.lanes = k, Qe.return = D, Qe;
      } finally {
      }
    };
  }
  var sc = Pl(!0), Mn = Pl(!1), ya = ae(null), Ul = null;
  function bu(l) {
    var n = l.alternate;
    ee(bt, bt.current & 1), ee(ya, l), Ul === null && (n === null || ac.current !== null || n.memoizedState !== null) && (Ul = l);
  }
  function Un(l) {
    if (l.tag === 22) {
      if (ee(bt, bt.current), ee(ya, l), Ul === null) {
        var n = l.alternate;
        n !== null && n.memoizedState !== null && (Ul = l);
      }
    } else Cn();
  }
  function Cn() {
    ee(bt, bt.current), ee(ya, ya.current);
  }
  function nn(l) {
    F(ya), Ul === l && (Ul = null), F(bt);
  }
  var bt = ae(0);
  function Ff(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || Ss(u)))
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
    n = l.memoizedState, u = u(c, n), u = u == null ? n : de({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var $r = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = pa(), s = Fl(c);
      s.payload = n, u != null && (s.callback = u), n = Rn(l, s, c), n !== null && (ga(n, l, c), lc(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = pa(), s = Fl(c);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = Rn(l, s, c), n !== null && (ga(n, l, c), lc(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = pa(), c = Fl(u);
      c.tag = 2, n != null && (c.callback = n), n = Rn(l, c, u), n !== null && (ga(n, l, u), lc(n, l, u));
    }
  };
  function po(l, n, u, c, s, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, m) : n.prototype && n.prototype.isPureReactComponent ? !Ku(u, c) || !Ku(s, r) : !0;
  }
  function rc(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && $r.enqueueReplaceState(n, n.state, null);
  }
  function oi(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = de({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  var If = typeof reportError == "function" ? reportError : function(l) {
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
  function go(l) {
    If(l);
  }
  function Om(l) {
    console.error(l);
  }
  function Pf(l) {
    If(l);
  }
  function es(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Dm(l, n, u) {
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
  function Mm(l, n, u) {
    return u = Fl(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      es(l, n);
    }, u;
  }
  function Um(l) {
    return l = Fl(l), l.tag = 3, l;
  }
  function ea(l, n, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        Dm(n, u, c);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      Dm(n, u, c), typeof s != "function" && (di === null ? di = /* @__PURE__ */ new Set([this]) : di.add(this));
      var p = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: p !== null ? p : ""
      });
    });
  }
  function e0(l, n, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && io(
        n,
        u,
        s,
        !0
      ), u = ya.current, u !== null) {
        switch (u.tag) {
          case 13:
            return Ul === null ? Sc() : u.alternate === null && Lt === 0 && (Lt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === xr ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), Td(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === xr ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), Td(l, c, s)), !1;
        }
        throw Error(b(435, u.tag));
      }
      return Td(l, c, s), Sc(), !1;
    }
    if (at)
      return n = ya.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, c !== Pi && (l = Error(b(422), { cause: c }), uo(da(l, u)))) : (c !== Pi && (n = Error(b(423), {
        cause: c
      }), uo(
        da(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = da(c, u), s = Mm(
        l.stateNode,
        c,
        s
      ), cm(l, s), Lt !== 4 && (Lt = 2)), !1;
    var r = Error(b(520), { cause: c });
    if (r = da(r, u), xo === null ? xo = [r] : xo.push(r), Lt !== 4 && (Lt = 2), n === null) return !0;
    c = da(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = Mm(u.stateNode, c, l), cm(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (di === null || !di.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = Um(s), ea(
              s,
              l,
              u,
              c
            ), cm(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Gt = Error(b(461)), el = !1;
  function ol(l, n, u, c) {
    n.child = l === null ? Mn(n, null, u, c) : sc(
      n,
      l.child,
      u,
      c
    );
  }
  function t0(l, n, u, c, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in c) {
      var m = {};
      for (var p in c)
        p !== "ref" && (m[p] = c[p]);
    } else m = c;
    return ti(n), c = Ur(
      l,
      n,
      u,
      m,
      r,
      s
    ), p = Cr(), l !== null && !el ? (ho(l, n, s), Hn(l, n, s)) : (at && p && Ii(n), n.flags |= 1, ol(l, n, c, s), n.child);
  }
  function Su(l, n, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !Df(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, dc(
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
    if (r = l.child, !ud(l, s)) {
      var m = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Ku, u(m, c) && l.ref === n.ref)
        return Hn(l, n, s);
    }
    return n.flags |= 1, l = Pa(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function dc(l, n, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (Ku(r, c) && l.ref === n.ref)
        if (el = !1, n.pendingProps = c = r, ud(l, s))
          (l.flags & 131072) !== 0 && (el = !0);
        else
          return n.lanes = l.lanes, Hn(l, n, s);
    }
    return Fr(
      l,
      n,
      u,
      c,
      s
    );
  }
  function Wr(l, n, u) {
    var c = n.pendingProps, s = c.children, r = l !== null ? l.memoizedState : null;
    if (c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (c = r !== null ? r.baseLanes | u : u, l !== null) {
          for (s = n.child = l.child, r = 0; s !== null; )
            r = r | s.lanes | s.childLanes, s = s.sibling;
          n.childLanes = r & ~c;
        } else n.childLanes = 0, n.child = null;
        return hc(
          l,
          n,
          c,
          u
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && ec(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? cl(n, r) : so(), Un(n);
      else
        return n.lanes = n.childLanes = 536870912, hc(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u
        );
    } else
      r !== null ? (ec(n, r.cachePool), cl(n, r), Cn(), n.memoizedState = null) : (l !== null && ec(n, null), so(), Cn());
    return ol(l, n, s, u), n.child;
  }
  function hc(l, n, u, c) {
    var s = Bf();
    return s = s === null ? null : { parent: It._currentValue, pool: s }, n.memoizedState = {
      baseLanes: u,
      cachePool: s
    }, l !== null && ec(n, null), so(), Un(n), l !== null && io(l, n, c, !0), null;
  }
  function ts(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(b(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function Fr(l, n, u, c, s) {
    return ti(n), u = Ur(
      l,
      n,
      u,
      c,
      void 0,
      s
    ), c = Cr(), l !== null && !el ? (ho(l, n, s), Hn(l, n, s)) : (at && c && Ii(n), n.flags |= 1, ol(l, n, u, s), n.child);
  }
  function Cm(l, n, u, c, s, r) {
    return ti(n), n.updateQueue = null, u = sm(
      n,
      c,
      u,
      s
    ), ui(l), c = Cr(), l !== null && !el ? (ho(l, n, r), Hn(l, n, r)) : (at && c && Ii(n), n.flags |= 1, ol(l, n, u, r), n.child);
  }
  function Ir(l, n, u, c, s) {
    if (ti(n), n.stateNode === null) {
      var r = eo, m = u.contextType;
      typeof m == "object" && m !== null && (r = il(m)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = $r, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, Rr(n), m = u.contextType, r.context = typeof m == "object" && m !== null ? il(m) : eo, r.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (ci(
        n,
        u,
        m,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && $r.enqueueReplaceState(r, r.state, null), pu(n, c, r, s), fo(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var p = n.memoizedProps, S = oi(u, p);
      r.props = S;
      var U = r.context, L = u.contextType;
      m = eo, typeof L == "object" && L !== null && (m = il(L));
      var K = u.getDerivedStateFromProps;
      L = typeof K == "function" || typeof r.getSnapshotBeforeUpdate == "function", p = n.pendingProps !== p, L || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (p || U !== m) && rc(
        n,
        r,
        c,
        m
      ), zn = !1;
      var H = n.memoizedState;
      r.state = H, pu(n, c, r, s), fo(), U = n.memoizedState, p || H !== U || zn ? (typeof K == "function" && (ci(
        n,
        u,
        K,
        c
      ), U = n.memoizedState), (S = zn || po(
        n,
        u,
        S,
        c,
        H,
        U,
        m
      )) ? (L || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = U), r.props = c, r.state = U, r.context = m, c = S) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, Or(l, n), m = n.memoizedProps, L = oi(u, m), r.props = L, K = n.pendingProps, H = r.context, U = u.contextType, S = eo, typeof U == "object" && U !== null && (S = il(U)), p = u.getDerivedStateFromProps, (U = typeof p == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== K || H !== S) && rc(
        n,
        r,
        c,
        S
      ), zn = !1, H = n.memoizedState, r.state = H, pu(n, c, r, s), fo();
      var N = n.memoizedState;
      m !== K || H !== N || zn || l !== null && l.dependencies !== null && Hf(l.dependencies) ? (typeof p == "function" && (ci(
        n,
        u,
        p,
        c
      ), N = n.memoizedState), (L = zn || po(
        n,
        u,
        L,
        c,
        H,
        N,
        S
      ) || l !== null && l.dependencies !== null && Hf(l.dependencies)) ? (U || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, N, S), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        N,
        S
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && H === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && H === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = N), r.props = c, r.state = N, r.context = S, c = L) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && H === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && H === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, ts(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = sc(
      n,
      l.child,
      null,
      s
    ), n.child = sc(
      n,
      null,
      u,
      s
    )) : ol(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = Hn(
      l,
      n,
      s
    ), l;
  }
  function Pr(l, n, u, c) {
    return no(), n.flags |= 256, ol(l, n, u, c), n.child;
  }
  var ed = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Hm(l) {
    return { baseLanes: l, cachePool: Er() };
  }
  function wm(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= qa), l;
  }
  function Nm(l, n, u) {
    var c = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : (bt.current & 2) !== 0), m && (s = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (at) {
        if (s ? bu(n) : Cn(), at) {
          var p = nt, S;
          if (S = p) {
            e: {
              for (S = p, p = Ca; S.nodeType !== 8; ) {
                if (!p) {
                  p = null;
                  break e;
                }
                if (S = cn(
                  S.nextSibling
                ), S === null) {
                  p = null;
                  break e;
                }
              }
              p = S;
            }
            p !== null ? (n.memoizedState = {
              dehydrated: p,
              treeContext: du !== null ? { id: en, overflow: jt } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, S = $l(
              18,
              null,
              null,
              0
            ), S.stateNode = p, S.return = n, n.child = S, kt = n, nt = null, S = !0) : S = !1;
          }
          S || hu(n);
        }
        if (p = n.memoizedState, p !== null && (p = p.dehydrated, p !== null))
          return Ss(p) ? n.lanes = 32 : n.lanes = 536870912, null;
        nn(n);
      }
      return p = c.children, c = c.fallback, s ? (Cn(), s = n.mode, p = ld(
        { mode: "hidden", children: p },
        s
      ), c = Da(
        c,
        s,
        u,
        null
      ), p.return = n, c.return = n, p.sibling = c, n.child = p, s = n.child, s.memoizedState = Hm(u), s.childLanes = wm(
        l,
        m,
        u
      ), n.memoizedState = ed, c) : (bu(n), td(n, p));
    }
    if (S = l.memoizedState, S !== null && (p = S.dehydrated, p !== null)) {
      if (r)
        n.flags & 256 ? (bu(n), n.flags &= -257, n = fi(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Cn(), n.child = l.child, n.flags |= 128, n = null) : (Cn(), s = c.fallback, p = n.mode, c = ld(
          { mode: "visible", children: c.children },
          p
        ), s = Da(
          s,
          p,
          u,
          null
        ), s.flags |= 2, c.return = n, s.return = n, c.sibling = s, n.child = c, sc(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = Hm(u), c.childLanes = wm(
          l,
          m,
          u
        ), n.memoizedState = ed, n = s);
      else if (bu(n), Ss(p)) {
        if (m = p.nextSibling && p.nextSibling.dataset, m) var U = m.dgst;
        m = U, c = Error(b(419)), c.stack = "", c.digest = m, uo({ value: c, source: null, stack: null }), n = fi(
          l,
          n,
          u
        );
      } else if (el || io(l, n, u, !1), m = (u & l.childLanes) !== 0, el || m) {
        if (m = Et, m !== null && (c = u & -u, c = (c & 42) !== 0 ? 1 : ka(c), c = (c & (m.suspendedLanes | u)) !== 0 ? 0 : c, c !== 0 && c !== S.retryLane))
          throw S.retryLane = c, Sn(l, c), ga(m, l, c), Gt;
        p.data === "$?" || Sc(), n = fi(
          l,
          n,
          u
        );
      } else
        p.data === "$?" ? (n.flags |= 192, n.child = l.child, n = null) : (l = S.treeContext, nt = cn(
          p.nextSibling
        ), kt = n, at = !0, Ua = null, Ca = !1, l !== null && (Ma[Wl++] = en, Ma[Wl++] = jt, Ma[Wl++] = du, en = l.id, jt = l.overflow, du = n), n = td(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (Cn(), s = c.fallback, p = n.mode, S = l.child, U = S.sibling, c = Pa(S, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = S.subtreeFlags & 65011712, U !== null ? s = Pa(U, s) : (s = Da(
      s,
      p,
      u,
      null
    ), s.flags |= 2), s.return = n, c.return = n, c.sibling = s, n.child = c, c = s, s = n.child, p = l.child.memoizedState, p === null ? p = Hm(u) : (S = p.cachePool, S !== null ? (U = It._currentValue, S = S.parent !== U ? { parent: U, pool: U } : S) : S = Er(), p = {
      baseLanes: p.baseLanes | u,
      cachePool: S
    }), s.memoizedState = p, s.childLanes = wm(
      l,
      m,
      u
    ), n.memoizedState = ed, c) : (bu(n), u = l.child, l = u.sibling, u = Pa(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function td(l, n) {
    return n = ld(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function ld(l, n) {
    return l = $l(22, l, null, n), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function fi(l, n, u) {
    return sc(n, l.child, null, u), l = td(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function ls(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), gr(l.return, n, u);
  }
  function ad(l, n, u, c, s) {
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
  function nd(l, n, u) {
    var c = n.pendingProps, s = c.revealOrder, r = c.tail;
    if (ol(l, n, c.children, u), c = bt.current, (c & 2) !== 0)
      c = c & 1 | 2, n.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        e: for (l = n.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && ls(l, u, n);
          else if (l.tag === 19)
            ls(l, u, n);
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
    switch (ee(bt, c), s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && Ff(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), ad(
          n,
          !1,
          s,
          u,
          r
        );
        break;
      case "backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && Ff(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        ad(
          n,
          !0,
          u,
          null,
          r
        );
        break;
      case "together":
        ad(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Hn(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), Au |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (io(
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
      for (l = n.child, u = Pa(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Pa(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function ud(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Hf(l)));
  }
  function l0(l, n, u) {
    switch (n.tag) {
      case 3:
        xt(n, n.stateNode.containerInfo), yu(n, It, l.memoizedState.cache), no();
        break;
      case 27:
      case 5:
        hl(n);
        break;
      case 4:
        xt(n, n.stateNode.containerInfo);
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
          return c.dehydrated !== null ? (bu(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? Nm(l, n, u) : (bu(n), l = Hn(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        bu(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (io(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), s) {
          if (c)
            return nd(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), ee(bt, bt.current), c) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Wr(l, n, u);
      case 24:
        yu(n, It, l.memoizedState.cache);
    }
    return Hn(l, n, u);
  }
  function a0(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        el = !0;
      else {
        if (!ud(l, u) && (n.flags & 128) === 0)
          return el = !1, l0(
            l,
            n,
            u
          );
        el = (l.flags & 131072) !== 0;
      }
    else
      el = !1, at && (n.flags & 1048576) !== 0 && pr(n, lo, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          l = n.pendingProps;
          var c = n.elementType, s = c._init;
          if (c = s(c._payload), n.type = c, typeof c == "function")
            Df(c) ? (l = oi(c, l), n.tag = 1, n = Ir(
              null,
              n,
              c,
              l,
              u
            )) : (n.tag = 0, n = Fr(
              null,
              n,
              c,
              l,
              u
            ));
          else {
            if (c != null) {
              if (s = c.$$typeof, s === pt) {
                n.tag = 11, n = t0(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              } else if (s === je) {
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
            throw n = Mt(c) || c, Error(b(306, n, ""));
          }
        }
        return n;
      case 0:
        return Fr(
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
        ), Ir(
          l,
          n,
          c,
          s,
          u
        );
      case 3:
        e: {
          if (xt(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(b(387));
          c = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, Or(l, n), pu(n, c, null, u);
          var m = n.memoizedState;
          if (c = m.cache, yu(n, It, c), c !== r.cache && lm(
            n,
            [It],
            u,
            !0
          ), fo(), c = m.element, r.isDehydrated)
            if (r = {
              element: c,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = Pr(
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
              ), uo(s), n = Pr(
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
              for (nt = cn(l.firstChild), kt = n, at = !0, Ua = null, Ca = !0, u = Mn(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (no(), c === s) {
              n = Hn(
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
        return ts(l, n), l === null ? (u = b0(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : at || (u = n.type, l = n.pendingProps, c = Ya(
          He.current
        ).createElement(u), c[ul] = n, c[_l] = l, xe(c, u, l), Ft(c), n.stateNode = c) : n.memoizedState = b0(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return hl(n), l === null && at && (c = n.stateNode = P(
          n.type,
          n.pendingProps,
          He.current
        ), kt = n, Ca = !0, s = nt, vi(n.type) ? (bi = s, nt = cn(
          c.firstChild
        )) : nt = s), ol(
          l,
          n,
          n.pendingProps.children,
          u
        ), ts(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && at && ((s = c = nt) && (c = _o(
          c,
          n.type,
          n.pendingProps,
          Ca
        ), c !== null ? (n.stateNode = c, kt = n, nt = cn(
          c.firstChild
        ), Ca = !1, s = !0) : s = !1), s || hu(n)), hl(n), s = n.type, r = n.pendingProps, m = l !== null ? l.memoizedProps : null, c = r.children, Vn(s, r) ? c = null : m !== null && Vn(s, m) && (n.flags |= 32), n.memoizedState !== null && (s = Ur(
          l,
          n,
          Zp,
          null,
          null,
          u
        ), ia._currentValue = s), ts(l, n), ol(l, n, c, u), n.child;
      case 6:
        return l === null && at && ((l = u = nt) && (u = Gg(
          u,
          n.pendingProps,
          Ca
        ), u !== null ? (n.stateNode = u, kt = n, nt = null, l = !0) : l = !1), l || hu(n)), null;
      case 13:
        return Nm(l, n, u);
      case 4:
        return xt(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = sc(
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
        return t0(
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
        return dc(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return nd(l, n, u);
      case 31:
        return c = n.pendingProps, u = n.mode, c = {
          mode: c.mode,
          children: c.children
        }, l === null ? (u = ld(
          c,
          u
        ), u.ref = n.ref, n.child = u, u.return = n, n = u) : (u = Pa(l.child, c), u.ref = n.ref, n.child = u, u.return = n, n = u), n;
      case 22:
        return Wr(l, n, u);
      case 24:
        return ti(n), c = il(It), l === null ? (s = Bf(), s === null && (s = Et, r = oo(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = {
          parent: c,
          cache: s
        }, Rr(n), yu(n, It, s)) : ((l.lanes & u) !== 0 && (Or(l, n), pu(n, null, null, u), fo()), s = l.memoizedState, r = n.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), yu(n, It, c)) : (c = r.cache, yu(n, It, c), c !== s.cache && lm(
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
  function wn(l) {
    l.flags |= 4;
  }
  function vo(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !gy(n)) {
      if (n = ya.current, n !== null && ((Ke & 4194048) === Ke ? Ul !== null : (Ke & 62914560) !== Ke && (Ke & 536870912) === 0 || n !== Ul))
        throw tc = xr, Ar;
      l.flags |= 8192;
    }
  }
  function as(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? Hi() : 536870912, l.lanes |= n, Ao |= n);
  }
  function bo(l, n) {
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
  function Te(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags & 65011712, c |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags, c |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function Bm(l, n, u) {
    var c = n.pendingProps;
    switch (Tn(n), n.tag) {
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
        return Te(n), null;
      case 1:
        return Te(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), En(It), qt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (ao(n) ? wn(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, tm())), Te(n), null;
      case 26:
        return u = n.memoizedState, l === null ? (wn(n), u !== null ? (Te(n), vo(n, u)) : (Te(n), n.flags &= -16777217)) : u ? u !== l.memoizedState ? (wn(n), Te(n), vo(n, u)) : (Te(n), n.flags &= -16777217) : (l.memoizedProps !== c && wn(n), Te(n), n.flags &= -16777217), null;
      case 27:
        Za(n), u = He.current;
        var s = n.type;
        if (l !== null && n.stateNode != null)
          l.memoizedProps !== c && wn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(b(166));
            return Te(n), null;
          }
          l = Se.current, ao(n) ? Uf(n) : (l = P(s, c, u), n.stateNode = l, wn(n));
        }
        return Te(n), null;
      case 5:
        if (Za(n), u = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && wn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(b(166));
            return Te(n), null;
          }
          if (l = Se.current, ao(n))
            Uf(n);
          else {
            switch (s = Ya(
              He.current
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
            l && wn(n);
          }
        }
        return Te(n), n.flags &= -16777217, null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && wn(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(b(166));
          if (l = He.current, ao(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, s = kt, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[ul] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || hy(l.nodeValue, u)), l || hu(n);
          } else
            l = Ya(l).createTextNode(
              c
            ), l[ul] = n, n.stateNode = l;
        }
        return Te(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = ao(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(b(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(b(317));
              s[ul] = n;
            } else
              no(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Te(n), s = !1;
          } else
            s = tm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (nn(n), n) : (nn(n), null);
        }
        if (nn(n), (n.flags & 128) !== 0)
          return n.lanes = u, n;
        if (u = c !== null, l = l !== null && l.memoizedState !== null, u) {
          c = n.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool);
          var r = null;
          c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048);
        }
        return u !== l && u && (n.child.flags |= 8192), as(n, n.updateQueue), Te(n), null;
      case 4:
        return qt(), l === null && ry(n.stateNode.containerInfo), Te(n), null;
      case 10:
        return En(n.type), Te(n), null;
      case 19:
        if (F(bt), s = n.memoizedState, s === null) return Te(n), null;
        if (c = (n.flags & 128) !== 0, r = s.rendering, r === null)
          if (c) bo(s, !1);
          else {
            if (Lt !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = Ff(l), r !== null) {
                  for (n.flags |= 128, bo(s, !1), l = r.updateQueue, n.updateQueue = l, as(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    Le(u, l), u = u.sibling;
                  return ee(
                    bt,
                    bt.current & 1 | 2
                  ), n.child;
                }
                l = l.sibling;
              }
            s.tail !== null && oa() > md && (n.flags |= 128, c = !0, bo(s, !1), n.lanes = 4194304);
          }
        else {
          if (!c)
            if (l = Ff(r), l !== null) {
              if (n.flags |= 128, c = !0, l = l.updateQueue, n.updateQueue = l, as(n, l), bo(s, !0), s.tail === null && s.tailMode === "hidden" && !r.alternate && !at)
                return Te(n), null;
            } else
              2 * oa() - s.renderingStartTime > md && u !== 536870912 && (n.flags |= 128, c = !0, bo(s, !1), n.lanes = 4194304);
          s.isBackwards ? (r.sibling = n.child, n.child = r) : (l = s.last, l !== null ? l.sibling = r : n.child = r, s.last = r);
        }
        return s.tail !== null ? (n = s.tail, s.rendering = n, s.tail = n.sibling, s.renderingStartTime = oa(), n.sibling = null, l = bt.current, ee(bt, c ? l & 1 | 2 : l & 1), n) : (Te(n), null);
      case 22:
      case 23:
        return nn(n), ro(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (Te(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Te(n), u = n.updateQueue, u !== null && as(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && F(xn), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), En(It), Te(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(b(156, n.tag));
  }
  function Hg(l, n) {
    switch (Tn(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return En(It), qt(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return Za(n), null;
      case 13:
        if (nn(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(b(340));
          no();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return F(bt), null;
      case 4:
        return qt(), null;
      case 10:
        return En(n.type), null;
      case 22:
      case 23:
        return nn(n), ro(), l !== null && F(xn), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return En(It), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function _m(l, n) {
    switch (Tn(n), n.tag) {
      case 3:
        En(It), qt();
        break;
      case 26:
      case 27:
      case 5:
        Za(n);
        break;
      case 4:
        qt();
        break;
      case 13:
        nn(n);
        break;
      case 19:
        F(bt);
        break;
      case 10:
        En(n.type);
        break;
      case 22:
      case 23:
        nn(n), ro(), l !== null && F(xn);
        break;
      case 24:
        En(It);
    }
  }
  function ns(l, n) {
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
    } catch (p) {
      mt(n, n.return, p);
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
            var m = c.inst, p = m.destroy;
            if (p !== void 0) {
              m.destroy = void 0, s = n;
              var S = u, U = p;
              try {
                U();
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
  function id(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        jf(n, u);
      } catch (c) {
        mt(l, l.return, c);
      }
    }
  }
  function qm(l, n, u) {
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
  function So(l, n) {
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
  function un(l, n) {
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
  function To(l) {
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
  function jm(l, n, u) {
    try {
      var c = l.stateNode;
      qg(c, l.type, u, n), c[_l] = n;
    } catch (s) {
      mt(l, l.return, s);
    }
  }
  function n0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && vi(l.type) || l.tag === 4;
  }
  function Ba(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || n0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && vi(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function mc(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = Rd));
    else if (c !== 4 && (c === 27 && vi(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (mc(l, n, u), l = l.sibling; l !== null; )
        mc(l, n, u), l = l.sibling;
  }
  function cd(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && vi(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (cd(l, n, u), l = l.sibling; l !== null; )
        cd(l, n, u), l = l.sibling;
  }
  function od(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      xe(n, c, u), n[ul] = l, n[_l] = u;
    } catch (r) {
      mt(l, l.return, r);
    }
  }
  var Nn = !1, Vt = !1, fd = !1, sd = typeof WeakSet == "function" ? WeakSet : Set, tl = null;
  function Ym(l, n) {
    if (l = l.containerInfo, gs = As, l = Kh(l), Rf(l)) {
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
            var m = 0, p = -1, S = -1, U = 0, L = 0, K = l, H = null;
            t: for (; ; ) {
              for (var N; K !== u || s !== 0 && K.nodeType !== 3 || (p = m + s), K !== r || c !== 0 && K.nodeType !== 3 || (S = m + c), K.nodeType === 3 && (m += K.nodeValue.length), (N = K.firstChild) !== null; )
                H = K, K = N;
              for (; ; ) {
                if (K === l) break t;
                if (H === u && ++U === s && (p = m), H === r && ++L === c && (S = m), (N = K.nextSibling) !== null) break;
                K = H, H = K.parentNode;
              }
              K = N;
            }
            u = p === -1 || S === -1 ? null : { start: p, end: S };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (vs = { focusedElem: l, selectionRange: u }, As = !1, tl = n; tl !== null; )
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
                  var ge = oi(
                    u.type,
                    s,
                    u.elementType === u.type
                  );
                  l = c.getSnapshotBeforeUpdate(
                    ge,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (ve) {
                  mt(
                    u,
                    u.return,
                    ve
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  bs(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      bs(l);
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
  function Gm(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        _n(l, u), c & 4 && ns(5, u);
        break;
      case 1:
        if (_n(l, u), c & 4)
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
        c & 64 && id(u), c & 512 && So(u, u.return);
        break;
      case 3:
        if (_n(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
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
            jf(l, n);
          } catch (m) {
            mt(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && c & 4 && od(u);
      case 26:
      case 5:
        _n(l, u), n === null && c & 4 && To(u), c & 512 && So(u, u.return);
        break;
      case 12:
        _n(l, u);
        break;
      case 13:
        _n(l, u), c & 4 && rd(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = wg.bind(
          null,
          u
        ), Vg(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || Nn, !c) {
          n = n !== null && n.memoizedState !== null || Vt, s = Nn;
          var r = Vt;
          Nn = c, (Vt = n) && !r ? ri(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : _n(l, u), Nn = s, Vt = r;
        }
        break;
      case 30:
        break;
      default:
        _n(l, u);
    }
  }
  function Vm(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Vm(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && sf(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Ut = null, gl = !1;
  function Bn(l, n, u) {
    for (u = u.child; u !== null; )
      ke(l, n, u), u = u.sibling;
  }
  function ke(l, n, u) {
    if (Bl && typeof Bl.onCommitFiberUnmount == "function")
      try {
        Bl.onCommitFiberUnmount(Vc, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Vt || un(u, n), Bn(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Vt || un(u, n);
        var c = Ut, s = gl;
        vi(u.type) && (Ut = u.stateNode, gl = !1), Bn(
          l,
          n,
          u
        ), na(u.stateNode), Ut = c, gl = s;
        break;
      case 5:
        Vt || un(u, n);
      case 6:
        if (c = Ut, s = gl, Ut = null, Bn(
          l,
          n,
          u
        ), Ut = c, gl = s, Ut !== null)
          if (gl)
            try {
              (Ut.nodeType === 9 ? Ut.body : Ut.nodeName === "HTML" ? Ut.ownerDocument.body : Ut).removeChild(u.stateNode);
            } catch (r) {
              mt(
                u,
                n,
                r
              );
            }
          else
            try {
              Ut.removeChild(u.stateNode);
            } catch (r) {
              mt(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        Ut !== null && (gl ? (l = Ut, Dd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Qn(l)) : Dd(Ut, u.stateNode));
        break;
      case 4:
        c = Ut, s = gl, Ut = u.stateNode.containerInfo, gl = !0, Bn(
          l,
          n,
          u
        ), Ut = c, gl = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Vt || si(2, u, n), Vt || si(4, u, n), Bn(
          l,
          n,
          u
        );
        break;
      case 1:
        Vt || (un(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && qm(
          u,
          n,
          c
        )), Bn(
          l,
          n,
          u
        );
        break;
      case 21:
        Bn(
          l,
          n,
          u
        );
        break;
      case 22:
        Vt = (c = Vt) || u.memoizedState !== null, Bn(
          l,
          n,
          u
        ), Vt = c;
        break;
      default:
        Bn(
          l,
          n,
          u
        );
    }
  }
  function rd(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Qn(l);
      } catch (u) {
        mt(n, n.return, u);
      }
  }
  function Xm(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new sd()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new sd()), n;
      default:
        throw Error(b(435, l.tag));
    }
  }
  function dd(l, n) {
    var u = Xm(l);
    n.forEach(function(c) {
      var s = Ng.bind(null, l, c);
      u.has(c) || (u.add(c), c.then(s, s));
    });
  }
  function Yl(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var s = u[c], r = l, m = n, p = m;
        e: for (; p !== null; ) {
          switch (p.tag) {
            case 27:
              if (vi(p.type)) {
                Ut = p.stateNode, gl = !1;
                break e;
              }
              break;
            case 5:
              Ut = p.stateNode, gl = !1;
              break e;
            case 3:
            case 4:
              Ut = p.stateNode.containerInfo, gl = !0;
              break e;
          }
          p = p.return;
        }
        if (Ut === null) throw Error(b(160));
        ke(r, m, s), Ut = null, gl = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        us(n, l), n = n.sibling;
  }
  var Gl = null;
  function us(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Yl(n, l), fl(l), c & 4 && (si(3, l, l.return), ns(3, l), si(5, l, l.return));
        break;
      case 1:
        Yl(n, l), fl(l), c & 512 && (Vt || u === null || un(u, u.return)), c & 64 && Nn && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = Gl;
        if (Yl(n, l), fl(l), c & 512 && (Vt || u === null || un(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[ie] || r[ul] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), xe(r, c, u), r[ul] = l, Ft(r), c = r;
                      break e;
                    case "link":
                      var m = yy(
                        "link",
                        "href",
                        s
                      ).get(c + (u.href || ""));
                      if (m) {
                        for (var p = 0; p < m.length; p++)
                          if (r = m[p], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            m.splice(p, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), xe(r, c, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (m = yy(
                        "meta",
                        "content",
                        s
                      ).get(c + (u.content || ""))) {
                        for (p = 0; p < m.length; p++)
                          if (r = m[p], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            m.splice(p, 1);
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
                py(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = T0(
                s,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? py(
              s,
              l.type,
              l.stateNode
            ) : T0(
              s,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && jm(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Yl(n, l), fl(l), c & 512 && (Vt || u === null || un(u, u.return)), u !== null && c & 4 && jm(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Yl(n, l), fl(l), c & 512 && (Vt || u === null || un(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            Zc(s, "");
          } catch (N) {
            mt(l, l.return, N);
          }
        }
        c & 4 && l.stateNode != null && (s = l.memoizedProps, jm(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), c & 1024 && (fd = !0);
        break;
      case 6:
        if (Yl(n, l), fl(l), c & 4) {
          if (l.stateNode === null)
            throw Error(b(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (N) {
            mt(l, l.return, N);
          }
        }
        break;
      case 3:
        if (Ei = null, s = Gl, Gl = Md(n.containerInfo), Yl(n, l), Gl = s, fl(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Qn(n.containerInfo);
          } catch (N) {
            mt(l, l.return, N);
          }
        fd && (fd = !1, Lm(l));
        break;
      case 4:
        c = Gl, Gl = Md(
          l.stateNode.containerInfo
        ), Yl(n, l), fl(l), Gl = c;
        break;
      case 12:
        Yl(n, l), fl(l);
        break;
      case 13:
        Yl(n, l), fl(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Fm = oa()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, dd(l, c)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var S = u !== null && u.memoizedState !== null, U = Nn, L = Vt;
        if (Nn = U || s, Vt = L || S, Yl(n, l), Vt = L, Nn = U, fl(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || S || Nn || Vt || Ct(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                S = u = n;
                try {
                  if (r = S.stateNode, s)
                    m = r.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    p = S.stateNode;
                    var K = S.memoizedProps.style, H = K != null && K.hasOwnProperty("display") ? K.display : null;
                    p.style.display = H == null || typeof H == "boolean" ? "" : ("" + H).trim();
                  }
                } catch (N) {
                  mt(S, S.return, N);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                S = n;
                try {
                  S.stateNode.nodeValue = s ? "" : S.memoizedProps;
                } catch (N) {
                  mt(S, S.return, N);
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
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, dd(l, u))));
        break;
      case 19:
        Yl(n, l), fl(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, dd(l, c)));
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
          if (n0(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(b(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = Ba(l);
            cd(l, r, s);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (Zc(m, ""), u.flags &= -33);
            var p = Ba(l);
            cd(l, p, m);
            break;
          case 3:
          case 4:
            var S = u.stateNode.containerInfo, U = Ba(l);
            mc(
              l,
              U,
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
  function Lm(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        Lm(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function _n(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Gm(l, n.alternate, n), n = n.sibling;
  }
  function Ct(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          si(4, n, n.return), Ct(n);
          break;
        case 1:
          un(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && qm(
            n,
            n.return,
            u
          ), Ct(n);
          break;
        case 27:
          na(n.stateNode);
        case 26:
        case 5:
          un(n, n.return), Ct(n);
          break;
        case 22:
          n.memoizedState === null && Ct(n);
          break;
        case 30:
          Ct(n);
          break;
        default:
          Ct(n);
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
          ), ns(4, r);
          break;
        case 1:
          if (ri(
            s,
            r,
            u
          ), c = r, s = c.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (U) {
              mt(c, c.return, U);
            }
          if (c = r, s = c.updateQueue, s !== null) {
            var p = c.stateNode;
            try {
              var S = s.shared.hiddenCallbacks;
              if (S !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < S.length; s++)
                  Dr(S[s], p);
            } catch (U) {
              mt(c, c.return, U);
            }
          }
          u && m & 64 && id(r), So(r, r.return);
          break;
        case 27:
          od(r);
        case 26:
        case 5:
          ri(
            s,
            r,
            u
          ), u && c === null && m & 4 && To(r), So(r, r.return);
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
          ), u && m & 4 && rd(s, r);
          break;
        case 22:
          r.memoizedState === null && ri(
            s,
            r,
            u
          ), So(r, r.return);
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
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && An(u));
  }
  function hd(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && An(l));
  }
  function vl(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Qm(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function Qm(l, n, u, c) {
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
        ), s & 2048 && ns(9, n);
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
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && An(l)));
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
            var r = n.memoizedProps, m = r.id, p = r.onPostCommit;
            typeof p == "function" && p(
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
        ) : ut(l, n) : r._visibility & 2 ? vl(
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
        ), s & 2048 && hd(n.alternate, n);
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
      var r = l, m = n, p = u, S = c, U = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Tu(
            r,
            m,
            p,
            S,
            s
          ), ns(8, m);
          break;
        case 23:
          break;
        case 22:
          var L = m.stateNode;
          m.memoizedState !== null ? L._visibility & 2 ? Tu(
            r,
            m,
            p,
            S,
            s
          ) : ut(
            r,
            m
          ) : (L._visibility |= 2, Tu(
            r,
            m,
            p,
            S,
            s
          )), s && U & 2048 && _a(
            m.alternate,
            m
          );
          break;
        case 24:
          Tu(
            r,
            m,
            p,
            S,
            s
          ), s && U & 2048 && hd(m.alternate, m);
          break;
        default:
          Tu(
            r,
            m,
            p,
            S,
            s
          );
      }
      n = n.sibling;
    }
  }
  function ut(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, s = c.flags;
        switch (c.tag) {
          case 22:
            ut(u, c), s & 2048 && _a(
              c.alternate,
              c
            );
            break;
          case 24:
            ut(u, c), s & 2048 && hd(c.alternate, c);
            break;
          default:
            ut(u, c);
        }
        n = n.sibling;
      }
  }
  var yc = 8192;
  function Xt(l) {
    if (l.subtreeFlags & yc)
      for (l = l.child; l !== null; )
        u0(l), l = l.sibling;
  }
  function u0(l) {
    switch (l.tag) {
      case 26:
        Xt(l), l.flags & yc && l.memoizedState !== null && x0(
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
        Gl = Md(l.stateNode.containerInfo), Xt(l), Gl = n;
        break;
      case 22:
        l.memoizedState === null && (n = l.alternate, n !== null && n.memoizedState !== null ? (n = yc, yc = 16777216, Xt(l), yc = n) : Xt(l));
        break;
      default:
        Xt(l);
    }
  }
  function Zm(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function pc(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          tl = c, Jm(
            c,
            l
          );
        }
      Zm(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        km(l), l = l.sibling;
  }
  function km(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        pc(l), l.flags & 2048 && si(9, l, l.return);
        break;
      case 3:
        pc(l);
        break;
      case 12:
        pc(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, Vl(l)) : pc(l);
        break;
      default:
        pc(l);
    }
  }
  function Vl(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          tl = c, Jm(
            c,
            l
          );
        }
      Zm(l);
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
  function Jm(l, n) {
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
          An(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, tl = c;
      else
        e: for (u = l; tl !== null; ) {
          c = tl;
          var s = c.sibling, r = c.return;
          if (Vm(c), c === u) {
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
  var Km = {
    getCacheForType: function(l) {
      var n = il(It), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    }
  }, i0 = typeof WeakMap == "function" ? WeakMap : Map, rt = 0, Et = null, Je = null, Ke = 0, ht = 0, ta = null, qn = !1, Eo = !1, $m = !1, Eu = 0, Lt = 0, Au = 0, gc = 0, jn = 0, qa = 0, Ao = 0, xo = null, la = null, Wm = !1, Fm = 0, md = 1 / 0, zo = null, di = null, bl = 0, Yn = null, Ro = null, Sl = 0, yd = 0, pd = null, Im = null, Oo = 0, Pm = null;
  function pa() {
    if ((rt & 2) !== 0 && Ke !== 0)
      return Ke & -Ke;
    if (A.T !== null) {
      var l = Ha;
      return l !== 0 ? l : Tc();
    }
    return Sp();
  }
  function ey() {
    qa === 0 && (qa = (Ke & 536870912) === 0 || at ? ju() : 536870912);
    var l = ya.current;
    return l !== null && (l.flags |= 32), qa;
  }
  function ga(l, n, u) {
    (l === Et && (ht === 2 || ht === 9) || l.cancelPendingCommit !== null) && (Gn(l, 0), xu(
      l,
      Ke,
      qa,
      !1
    )), wi(l, u), ((rt & 2) === 0 || l !== Et) && (l === Et && ((rt & 2) === 0 && (gc |= u), Lt === 4 && xu(
      l,
      Ke,
      qa,
      !1
    )), aa(l));
  }
  function Do(l, n, u) {
    if ((rt & 6) !== 0) throw Error(b(327));
    var c = !u && (n & 124) === 0 && (n & l.expiredLanes) === 0 || dn(l, n), s = c ? ly(l, n) : gd(l, n, !0), r = c;
    do {
      if (s === 0) {
        Eo && !c && xu(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !c0(u)) {
          s = gd(l, n, !1), r = !1;
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
              var p = l;
              s = xo;
              var S = p.current.memoizedState.isDehydrated;
              if (S && (Gn(p, m).flags |= 256), m = gd(
                p,
                m,
                !1
              ), m !== 2) {
                if ($m && !S) {
                  p.errorRecoveryDisabledLanes |= r, gc |= r, s = 4;
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
          Gn(l, 0), xu(l, n, 0, !0);
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
                !qn
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
          if ((n & 62914560) === n && (s = Fm + 300 - oa(), 10 < s)) {
            if (xu(
              c,
              n,
              qa,
              !qn
            ), qu(c, 0, !0) !== 0) break e;
            c.timeoutHandle = Od(
              is.bind(
                null,
                c,
                u,
                la,
                zo,
                Wm,
                n,
                qa,
                gc,
                Ao,
                qn,
                r,
                2,
                -0,
                0
              ),
              s
            );
            break e;
          }
          is(
            c,
            u,
            la,
            zo,
            Wm,
            n,
            qa,
            gc,
            Ao,
            qn,
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
  function is(l, n, u, c, s, r, m, p, S, U, L, K, H, N) {
    if (l.timeoutHandle = -1, K = n.subtreeFlags, (K & 8192 || (K & 16785408) === 16785408) && (Go = { stylesheets: null, count: 0, unsuspend: A0 }, u0(n), K = vy(), K !== null)) {
      l.cancelPendingCommit = K(
        s0.bind(
          null,
          l,
          n,
          r,
          u,
          c,
          s,
          m,
          p,
          S,
          L,
          1,
          H,
          N
        )
      ), xu(l, r, m, !U);
      return;
    }
    s0(
      l,
      n,
      r,
      u,
      c,
      s,
      m,
      p,
      S
    );
  }
  function c0(l) {
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
    n &= ~jn, n &= ~gc, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - kl(s), m = 1 << r;
      c[r] = -1, s &= ~m;
    }
    u !== 0 && of(l, u, n);
  }
  function vc() {
    return (rt & 6) === 0 ? (ss(0), !1) : !0;
  }
  function hi() {
    if (Je !== null) {
      if (ht === 0)
        var l = Je.return;
      else
        l = Je, tn = mu = null, Hr(l), oc = null, yo = 0, l = Je;
      for (; l !== null; )
        _m(l.alternate, l), l = l.return;
      Je = null;
    }
  }
  function Gn(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, jg(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), hi(), Et = l, Je = u = Pa(l.current, null), Ke = n, ht = 0, ta = null, qn = !1, Eo = dn(l, n), $m = !1, Ao = qa = jn = gc = Au = Lt = 0, la = xo = null, Wm = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var s = 31 - kl(c), r = 1 << s;
        n |= l[s], c &= ~r;
      }
    return Eu = n, Ia(), u;
  }
  function ty(l, n) {
    we = null, A.H = Jr, n === ai || n === _f ? (n = um(), ht = 3) : n === Ar ? (n = um(), ht = 4) : ht = n === Gt ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, ta = n, Je === null && (Lt = 1, es(
      l,
      da(n, l.current)
    ));
  }
  function o0() {
    var l = A.H;
    return A.H = Jr, l === null ? Jr : l;
  }
  function bc() {
    var l = A.A;
    return A.A = Km, l;
  }
  function Sc() {
    Lt = 4, qn || (Ke & 4194048) !== Ke && ya.current !== null || (Eo = !0), (Au & 134217727) === 0 && (gc & 134217727) === 0 || Et === null || xu(
      Et,
      Ke,
      qa,
      !1
    );
  }
  function gd(l, n, u) {
    var c = rt;
    rt |= 2;
    var s = o0(), r = bc();
    (Et !== l || Ke !== n) && (zo = null, Gn(l, n)), n = !1;
    var m = Lt;
    e: do
      try {
        if (ht !== 0 && Je !== null) {
          var p = Je, S = ta;
          switch (ht) {
            case 8:
              hi(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ya.current === null && (n = !0);
              var U = ht;
              if (ht = 0, ta = null, Mo(l, p, S, U), u && Eo) {
                m = 0;
                break e;
              }
              break;
            default:
              U = ht, ht = 0, ta = null, Mo(l, p, S, U);
          }
        }
        vd(), m = Lt;
        break;
      } catch (L) {
        ty(l, L);
      }
    while (!0);
    return n && l.shellSuspendCounter++, tn = mu = null, rt = c, A.H = s, A.A = r, Je === null && (Et = null, Ke = 0, Ia()), m;
  }
  function vd() {
    for (; Je !== null; ) ny(Je);
  }
  function ly(l, n) {
    var u = rt;
    rt |= 2;
    var c = o0(), s = bc();
    Et !== l || Ke !== n ? (zo = null, md = oa() + 500, Gn(l, n)) : Eo = dn(
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
              ht = 0, ta = null, Mo(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (zr(r)) {
                ht = 0, ta = null, uy(n);
                break;
              }
              n = function() {
                ht !== 2 && ht !== 9 || Et !== l || (ht = 7), aa(l);
              }, r.then(n, n);
              break e;
            case 3:
              ht = 7;
              break e;
            case 4:
              ht = 5;
              break e;
            case 7:
              zr(r) ? (ht = 0, ta = null, uy(n)) : (ht = 0, ta = null, Mo(l, n, r, 7));
              break;
            case 5:
              var m = null;
              switch (Je.tag) {
                case 26:
                  m = Je.memoizedState;
                case 5:
                case 27:
                  var p = Je;
                  if (!m || gy(m)) {
                    ht = 0, ta = null;
                    var S = p.sibling;
                    if (S !== null) Je = S;
                    else {
                      var U = p.return;
                      U !== null ? (Je = U, cs(U)) : Je = null;
                    }
                    break t;
                  }
              }
              ht = 0, ta = null, Mo(l, n, r, 5);
              break;
            case 6:
              ht = 0, ta = null, Mo(l, n, r, 6);
              break;
            case 8:
              hi(), Lt = 6;
              break e;
            default:
              throw Error(b(462));
          }
        }
        ay();
        break;
      } catch (L) {
        ty(l, L);
      }
    while (!0);
    return tn = mu = null, A.H = c, A.A = s, rt = u, Je !== null ? 0 : (Et = null, Ke = 0, Ia(), Lt);
  }
  function ay() {
    for (; Je !== null && !Sg(); )
      ny(Je);
  }
  function ny(l) {
    var n = a0(l.alternate, l, Eu);
    l.memoizedProps = l.pendingProps, n === null ? cs(l) : Je = n;
  }
  function uy(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Cm(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Ke
        );
        break;
      case 11:
        n = Cm(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Ke
        );
        break;
      case 5:
        Hr(n);
      default:
        _m(u, n), n = Je = Le(n, Eu), n = a0(u, n, Eu);
    }
    l.memoizedProps = l.pendingProps, n === null ? cs(l) : Je = n;
  }
  function Mo(l, n, u, c) {
    tn = mu = null, Hr(n), oc = null, yo = 0;
    var s = n.return;
    try {
      if (e0(
        l,
        s,
        n,
        u,
        Ke
      )) {
        Lt = 1, es(
          l,
          da(u, l.current)
        ), Je = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw Je = s, r;
      Lt = 1, es(
        l,
        da(u, l.current)
      ), Je = null;
      return;
    }
    n.flags & 32768 ? (at || c === 1 ? l = !0 : Eo || (Ke & 536870912) !== 0 ? l = !1 : (qn = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = ya.current, c !== null && c.tag === 13 && (c.flags |= 16384))), f0(n, l)) : cs(n);
  }
  function cs(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        f0(
          n,
          qn
        );
        return;
      }
      l = n.return;
      var u = Bm(
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
  function f0(l, n) {
    do {
      var u = Hg(l.alternate, l);
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
  function s0(l, n, u, c, s, r, m, p, S) {
    l.cancelPendingCommit = null;
    do
      Sd();
    while (bl !== 0);
    if ((rt & 6) !== 0) throw Error(b(327));
    if (n !== null) {
      if (n === l.current) throw Error(b(177));
      if (r = n.lanes | n.childLanes, r |= bn, bp(
        l,
        u,
        r,
        m,
        p,
        S
      ), l === Et && (Je = Et = null, Ke = 0), Ro = n, Yn = l, Sl = u, yd = r, pd = s, Im = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Bg(cf, function() {
        return iy(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = A.T, A.T = null, s = Q.p, Q.p = 2, m = rt, rt |= 4;
        try {
          Ym(l, n, u);
        } finally {
          rt = m, Q.p = s, A.T = c;
        }
      }
      bl = 1, r0(), os(), bd();
    }
  }
  function r0() {
    if (bl === 1) {
      bl = 0;
      var l = Yn, n = Ro, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = A.T, A.T = null;
        var c = Q.p;
        Q.p = 2;
        var s = rt;
        rt |= 4;
        try {
          us(n, l);
          var r = vs, m = Kh(l.containerInfo), p = r.focusedElem, S = r.selectionRange;
          if (m !== p && p && p.ownerDocument && zf(
            p.ownerDocument.documentElement,
            p
          )) {
            if (S !== null && Rf(p)) {
              var U = S.start, L = S.end;
              if (L === void 0 && (L = U), "selectionStart" in p)
                p.selectionStart = U, p.selectionEnd = Math.min(
                  L,
                  p.value.length
                );
              else {
                var K = p.ownerDocument || document, H = K && K.defaultView || window;
                if (H.getSelection) {
                  var N = H.getSelection(), ge = p.textContent.length, ve = Math.min(S.start, ge), it = S.end === void 0 ? ve : Math.min(S.end, ge);
                  !N.extend && ve > it && (m = it, it = ve, ve = m);
                  var D = zt(
                    p,
                    ve
                  ), z = zt(
                    p,
                    it
                  );
                  if (D && z && (N.rangeCount !== 1 || N.anchorNode !== D.node || N.anchorOffset !== D.offset || N.focusNode !== z.node || N.focusOffset !== z.offset)) {
                    var M = K.createRange();
                    M.setStart(D.node, D.offset), N.removeAllRanges(), ve > it ? (N.addRange(M), N.extend(z.node, z.offset)) : (M.setEnd(z.node, z.offset), N.addRange(M));
                  }
                }
              }
            }
            for (K = [], N = p; N = N.parentNode; )
              N.nodeType === 1 && K.push({
                element: N,
                left: N.scrollLeft,
                top: N.scrollTop
              });
            for (typeof p.focus == "function" && p.focus(), p = 0; p < K.length; p++) {
              var k = K[p];
              k.element.scrollLeft = k.left, k.element.scrollTop = k.top;
            }
          }
          As = !!gs, vs = gs = null;
        } finally {
          rt = s, Q.p = c, A.T = u;
        }
      }
      l.current = n, bl = 2;
    }
  }
  function os() {
    if (bl === 2) {
      bl = 0;
      var l = Yn, n = Ro, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = A.T, A.T = null;
        var c = Q.p;
        Q.p = 2;
        var s = rt;
        rt |= 4;
        try {
          Gm(l, n.alternate, n);
        } finally {
          rt = s, Q.p = c, A.T = u;
        }
      }
      bl = 3;
    }
  }
  function bd() {
    if (bl === 4 || bl === 3) {
      bl = 0, Ci();
      var l = Yn, n = Ro, u = Sl, c = Im;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? bl = 5 : (bl = 0, Ro = Yn = null, d0(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (di = null), Ks(u), n = n.stateNode, Bl && typeof Bl.onCommitFiberRoot == "function")
        try {
          Bl.onCommitFiberRoot(
            Vc,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = A.T, s = Q.p, Q.p = 2, A.T = null;
        try {
          for (var r = l.onRecoverableError, m = 0; m < c.length; m++) {
            var p = c[m];
            r(p.value, {
              componentStack: p.stack
            });
          }
        } finally {
          A.T = n, Q.p = s;
        }
      }
      (Sl & 3) !== 0 && Sd(), aa(l), s = l.pendingLanes, (u & 4194090) !== 0 && (s & 42) !== 0 ? l === Pm ? Oo++ : (Oo = 0, Pm = l) : Oo = 0, ss(0);
    }
  }
  function d0(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, An(n)));
  }
  function Sd(l) {
    return r0(), os(), bd(), iy();
  }
  function iy() {
    if (bl !== 5) return !1;
    var l = Yn, n = yd;
    yd = 0;
    var u = Ks(Sl), c = A.T, s = Q.p;
    try {
      Q.p = 32 > u ? 32 : u, A.T = null, u = pd, pd = null;
      var r = Yn, m = Sl;
      if (bl = 0, Ro = Yn = null, Sl = 0, (rt & 6) !== 0) throw Error(b(331));
      var p = rt;
      if (rt |= 4, km(r.current), Qm(
        r,
        r.current,
        m,
        u
      ), rt = p, ss(0, !1), Bl && typeof Bl.onPostCommitFiberRoot == "function")
        try {
          Bl.onPostCommitFiberRoot(Vc, r);
        } catch {
        }
      return !0;
    } finally {
      Q.p = s, A.T = c, d0(l, n);
    }
  }
  function cy(l, n, u) {
    n = da(u, n), n = Mm(l.stateNode, n, 2), l = Rn(l, n, 2), l !== null && (wi(l, 2), aa(l));
  }
  function mt(l, n, u) {
    if (l.tag === 3)
      cy(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          cy(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (di === null || !di.has(c))) {
            l = da(u, l), u = Um(2), c = Rn(n, u, 2), c !== null && (ea(
              u,
              c,
              n,
              l
            ), wi(c, 2), aa(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function Td(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new i0();
      var s = /* @__PURE__ */ new Set();
      c.set(n, s);
    } else
      s = c.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), c.set(n, s));
    s.has(u) || ($m = !0, s.add(u), l = oy.bind(null, l, n, u), n.then(l, l));
  }
  function oy(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Et === l && (Ke & u) === u && (Lt === 4 || Lt === 3 && (Ke & 62914560) === Ke && 300 > oa() - Fm ? (rt & 2) === 0 && Gn(l, 0) : jn |= u, Ao === Ke && (Ao = 0)), aa(l);
  }
  function fy(l, n) {
    n === 0 && (n = Hi()), l = Sn(l, n), l !== null && (wi(l, n), aa(l));
  }
  function wg(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), fy(l, u);
  }
  function Ng(l, n) {
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
    c !== null && c.delete(n), fy(l, u);
  }
  function Bg(l, n) {
    return Ui(l, n);
  }
  var Ed = null, mi = null, fs = !1, Uo = !1, Ad = !1, yi = 0;
  function aa(l) {
    l !== mi && l.next === null && (mi === null ? Ed = mi = l : mi = mi.next = l), Uo = !0, fs || (fs = !0, y0());
  }
  function ss(l, n) {
    if (!Ad && Uo) {
      Ad = !0;
      do
        for (var u = !1, c = Ed; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var m = c.suspendedLanes, p = c.pingedLanes;
              r = (1 << 31 - kl(42 | l) + 1) - 1, r &= s & ~(m & ~p), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, ds(c, r));
          } else
            r = Ke, r = qu(
              c,
              c === Et ? r : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (r & 3) === 0 || dn(c, r) || (u = !0, ds(c, r));
          c = c.next;
        }
      while (u);
      Ad = !1;
    }
  }
  function h0() {
    rs();
  }
  function rs() {
    Uo = fs = !1;
    var l = 0;
    yi !== 0 && (Ou() && (l = yi), yi = 0);
    for (var n = oa(), u = null, c = Ed; c !== null; ) {
      var s = c.next, r = sy(c, n);
      r === 0 ? (c.next = null, u === null ? Ed = s : u.next = s, s === null && (mi = u)) : (u = c, (l !== 0 || (r & 3) !== 0) && (Uo = !0)), c = s;
    }
    ss(l);
  }
  function sy(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var m = 31 - kl(r), p = 1 << m, S = s[m];
      S === -1 ? ((p & u) === 0 || (p & c) !== 0) && (s[m] = nl(p, n)) : S <= n && (l.expiredLanes |= p), r &= ~p;
    }
    if (n = Et, u = Ke, u = qu(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (ht === 2 || ht === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && bh(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || dn(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && bh(c), Ks(u)) {
        case 2:
        case 8:
          u = Sh;
          break;
        case 32:
          u = cf;
          break;
        case 268435456:
          u = Gc;
          break;
        default:
          u = cf;
      }
      return c = m0.bind(null, l), u = Ui(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && bh(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function m0(l, n) {
    if (bl !== 0 && bl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Sd() && l.callbackNode !== u)
      return null;
    var c = Ke;
    return c = qu(
      l,
      l === Et ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (Do(l, c, n), sy(l, oa()), l.callbackNode != null && l.callbackNode === u ? m0.bind(null, l) : null);
  }
  function ds(l, n) {
    if (Sd()) return null;
    Do(l, n, !0);
  }
  function y0() {
    Yg(function() {
      (rt & 6) !== 0 ? Ui(
        pp,
        h0
      ) : rs();
    });
  }
  function Tc() {
    return yi === 0 && (yi = ju()), yi;
  }
  function xd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : gf("" + l);
  }
  function hs(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function p0(l, n, u, c, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = xd(
        (s[_l] || null).action
      ), m = c.submitter;
      m && (n = (n = m[_l] || null) ? xd(n.formAction) : m.getAttribute("formAction"), n !== null && (r = n, m = null));
      var p = new ir(
        "action",
        "action",
        null,
        c,
        s
      );
      l.push({
        event: p,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (yi !== 0) {
                  var S = m ? hs(s, m) : new FormData(s);
                  kr(
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
                typeof r == "function" && (p.preventDefault(), S = m ? hs(s, m) : new FormData(s), kr(
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
  for (var Qt = 0; Qt < Fc.length; Qt++) {
    var ms = Fc[Qt], _g = ms.toLowerCase(), Ge = ms[0].toUpperCase() + ms.slice(1);
    Oa(
      _g,
      "on" + Ge
    );
  }
  Oa(Yp, "onAnimationEnd"), Oa($h, "onAnimationIteration"), Oa(Gp, "onAnimationStart"), Oa("dblclick", "onDoubleClick"), Oa("focusin", "onFocus"), Oa("focusout", "onBlur"), Oa(Wh, "onTransitionRun"), Oa(yr, "onTransitionStart"), Oa(Vp, "onTransitionCancel"), Oa(Fh, "onTransitionEnd"), Vu("onMouseEnter", ["mouseout", "mouseover"]), Vu("onMouseLeave", ["mouseout", "mouseover"]), Vu("onPointerEnter", ["pointerout", "pointerover"]), Vu("onPointerLeave", ["pointerout", "pointerover"]), Gu(
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
  var ys = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), pi = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ys)
  );
  function Ec(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], s = c.event;
      c = c.listeners;
      e: {
        var r = void 0;
        if (n)
          for (var m = c.length - 1; 0 <= m; m--) {
            var p = c[m], S = p.instance, U = p.currentTarget;
            if (p = p.listener, S !== r && s.isPropagationStopped())
              break e;
            r = p, s.currentTarget = U;
            try {
              r(s);
            } catch (L) {
              If(L);
            }
            s.currentTarget = null, r = S;
          }
        else
          for (m = 0; m < c.length; m++) {
            if (p = c[m], S = p.instance, U = p.currentTarget, p = p.listener, S !== r && s.isPropagationStopped())
              break e;
            r = p, s.currentTarget = U;
            try {
              r(s);
            } catch (L) {
              If(L);
            }
            s.currentTarget = null, r = S;
          }
      }
    }
  }
  function Ne(l, n) {
    var u = n[$s];
    u === void 0 && (u = n[$s] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (zd(n, l, 2, !1), u.add(c));
  }
  function Co(l, n, u) {
    var c = 0;
    n && (c |= 4), zd(
      u,
      l,
      c,
      n
    );
  }
  var Ho = "_reactListening" + Math.random().toString(36).slice(2);
  function ry(l) {
    if (!l[Ho]) {
      l[Ho] = !0, df.forEach(function(u) {
        u !== "selectionchange" && (pi.has(u) || Co(u, !1, l), Co(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Ho] || (n[Ho] = !0, Co("selectionchange", !1, n));
    }
  }
  function zd(l, n, u, c) {
    switch (Ry(n)) {
      case 2:
        var s = z0;
        break;
      case 8:
        s = R0;
        break;
      default:
        s = xy;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !ar || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(n, u, {
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
          var p = c.stateNode.containerInfo;
          if (p === s) break;
          if (m === 4)
            for (m = c.return; m !== null; ) {
              var S = m.tag;
              if ((S === 3 || S === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; p !== null; ) {
            if (m = ml(p), m === null) return;
            if (S = m.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              c = r = m;
              continue e;
            }
            p = p.parentNode;
          }
        }
        c = c.return;
      }
    Kc(function() {
      var U = r, L = lr(u), K = [];
      e: {
        var H = Ih.get(l);
        if (H !== void 0) {
          var N = ir, ge = l;
          switch (l) {
            case "keypress":
              if (yl(u) === 0) break e;
            case "keydown":
            case "keyup":
              N = Ja;
              break;
            case "focusin":
              ge = "focus", N = wh;
              break;
            case "focusout":
              ge = "blur", N = wh;
              break;
            case "beforeblur":
            case "afterblur":
              N = wh;
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
              N = Hh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = Up;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = _h;
              break;
            case Yp:
            case $h:
            case Gp:
              N = Dg;
              break;
            case Fh:
              N = Bp;
              break;
            case "scroll":
            case "scrollend":
              N = Dp;
              break;
            case "wheel":
              N = Zi;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = Sf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = Tf;
              break;
            case "toggle":
            case "beforetoggle":
              N = _p;
          }
          var ve = (n & 4) !== 0, it = !ve && (l === "scroll" || l === "scrollend"), D = ve ? H !== null ? H + "Capture" : null : H;
          ve = [];
          for (var z = U, M; z !== null; ) {
            var k = z;
            if (M = k.stateNode, k = k.tag, k !== 5 && k !== 26 && k !== 27 || M === null || D === null || (k = Vi(z, D), k != null && ve.push(
              zu(z, k, M)
            )), it) break;
            z = z.return;
          }
          0 < ve.length && (H = new N(
            H,
            ge,
            null,
            u,
            L
          ), K.push({ event: H, listeners: ve }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (H = l === "mouseover" || l === "pointerover", N = l === "mouseout" || l === "pointerout", H && u !== Gi && (ge = u.relatedTarget || u.fromElement) && (ml(ge) || ge[Lc]))
            break e;
          if ((N || H) && (H = L.window === L ? L : (H = L.ownerDocument) ? H.defaultView || H.parentWindow : window, N ? (ge = u.relatedTarget || u.toElement, N = U, ge = ge ? ml(ge) : null, ge !== null && (it = J(ge), ve = ge.tag, ge !== it || ve !== 5 && ve !== 27 && ve !== 6) && (ge = null)) : (N = null, ge = U), N !== ge)) {
            if (ve = Hh, k = "onMouseLeave", D = "onMouseEnter", z = "mouse", (l === "pointerout" || l === "pointerover") && (ve = Tf, k = "onPointerLeave", D = "onPointerEnter", z = "pointer"), it = N == null ? H : rf(N), M = ge == null ? H : rf(ge), H = new ve(
              k,
              z + "leave",
              N,
              u,
              L
            ), H.target = it, H.relatedTarget = M, k = null, ml(L) === U && (ve = new ve(
              D,
              z + "enter",
              ge,
              u,
              L
            ), ve.target = M, ve.relatedTarget = it, k = ve), it = k, N && ge)
              t: {
                for (ve = N, D = ge, z = 0, M = ve; M; M = gi(M))
                  z++;
                for (M = 0, k = D; k; k = gi(k))
                  M++;
                for (; 0 < z - M; )
                  ve = gi(ve), z--;
                for (; 0 < M - z; )
                  D = gi(D), M--;
                for (; z--; ) {
                  if (ve === D || D !== null && ve === D.alternate)
                    break t;
                  ve = gi(ve), D = gi(D);
                }
                ve = null;
              }
            else ve = null;
            N !== null && ps(
              K,
              H,
              N,
              ve,
              !1
            ), ge !== null && it !== null && ps(
              K,
              it,
              ge,
              ve,
              !0
            );
          }
        }
        e: {
          if (H = U ? rf(U) : window, N = H.nodeName && H.nodeName.toLowerCase(), N === "select" || N === "input" && H.type === "file")
            var ne = Xh;
          else if (rr(H))
            if (Lh)
              ne = kh;
            else {
              ne = Ju;
              var Qe = hr;
            }
          else
            N = H.nodeName, !N || N.toLowerCase() !== "input" || H.type !== "checkbox" && H.type !== "radio" ? U && Yi(U.elementType) && (ne = Xh) : ne = su;
          if (ne && (ne = ne(l, U))) {
            dr(
              K,
              ne,
              u,
              L
            );
            break e;
          }
          Qe && Qe(l, H, U), l === "focusout" && U && H.type === "number" && U.memoizedProps.value != null && yf(H, "number", H.value);
        }
        switch (Qe = U ? rf(U) : window, l) {
          case "focusin":
            (rr(Qe) || Qe.contentEditable === "true") && (gn = Qe, Wa = U, Wu = null);
            break;
          case "focusout":
            Wu = Wa = gn = null;
            break;
          case "mousedown":
            Wi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Wi = !1, mr(K, u, L);
            break;
          case "selectionchange":
            if ($i) break;
          case "keydown":
          case "keyup":
            mr(K, u, L);
        }
        var ye;
        if (Ef)
          e: {
            switch (l) {
              case "compositionstart":
                var Ee = "onCompositionStart";
                break e;
              case "compositionend":
                Ee = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ee = "onCompositionUpdate";
                break e;
            }
            Ee = void 0;
          }
        else
          ku ? xf(l, u) && (Ee = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Ee = "onCompositionStart");
        Ee && (yn && u.locale !== "ko" && (ku || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && ku && (ye = Uh()) : (ou = L, $c = "value" in ou ? ou.value : ou.textContent, ku = !0)), Qe = wo(U, Ee), 0 < Qe.length && (Ee = new Nh(
          Ee,
          l,
          null,
          u,
          L
        ), K.push({ event: Ee, listeners: Qe }), ye ? Ee.data = ye : (ye = Zu(u), ye !== null && (Ee.data = ye)))), (ye = jh ? Gh(l, u) : ki(l, u)) && (Ee = wo(U, "onBeforeInput"), 0 < Ee.length && (Qe = new Nh(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          L
        ), K.push({
          event: Qe,
          listeners: Ee
        }), Qe.data = ye)), p0(
          K,
          l,
          U,
          u,
          L
        );
      }
      Ec(K, n);
    });
  }
  function zu(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function wo(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = Vi(l, u), s != null && c.unshift(
        zu(l, s, r)
      ), s = Vi(l, n), s != null && c.push(
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
  function ps(l, n, u, c, s) {
    for (var r = n._reactName, m = []; u !== null && u !== c; ) {
      var p = u, S = p.alternate, U = p.stateNode;
      if (p = p.tag, S !== null && S === c) break;
      p !== 5 && p !== 26 && p !== 27 || U === null || (S = U, s ? (U = Vi(u, r), U != null && m.unshift(
        zu(u, U, S)
      )) : s || (U = Vi(u, r), U != null && m.push(
        zu(u, U, S)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var va = /\r\n?/g, dy = /\u0000|\uFFFD/g;
  function g0(l) {
    return (typeof l == "string" ? l : "" + l).replace(va, `
`).replace(dy, "");
  }
  function hy(l, n) {
    return n = g0(n), g0(l) === n;
  }
  function Rd() {
  }
  function De(l, n, u, c, s, r) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || Zc(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && Zc(l, "" + c);
        break;
      case "className":
        hf(l, "class", c);
        break;
      case "tabIndex":
        hf(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        hf(l, u, c);
        break;
      case "style":
        pf(l, c, r);
        break;
      case "data":
        if (n !== "object") {
          hf(l, "data", c);
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
        c = gf("" + c), l.setAttribute(u, c);
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
          typeof r == "function" && (u === "formAction" ? (n !== "input" && De(l, n, "name", s.name, s, null), De(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), De(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), De(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (De(l, n, "encType", s.encType, s, null), De(l, n, "method", s.method, s, null), De(l, n, "target", s.target, s, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = gf("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = Rd);
        break;
      case "onScroll":
        c != null && Ne("scroll", l);
        break;
      case "onScrollEnd":
        c != null && Ne("scrollend", l);
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
        u = gf("" + c), l.setAttributeNS(
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
        Ne("beforetoggle", l), Ne("toggle", l), iu(l, "popover", c);
        break;
      case "xlinkActuate":
        hn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        hn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        hn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        hn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        hn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        hn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        hn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        hn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        hn(
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
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = zg.get(u) || u, iu(l, u, c));
    }
  }
  function q(l, n, u, c, s, r) {
    switch (u) {
      case "style":
        pf(l, c, r);
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
        typeof c == "string" ? Zc(l, c) : (typeof c == "number" || typeof c == "bigint") && Zc(l, "" + c);
        break;
      case "onScroll":
        c != null && Ne("scroll", l);
        break;
      case "onScrollEnd":
        c != null && Ne("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = Rd);
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
        Ne("error", l), Ne("load", l);
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
                  De(l, n, r, m, u, null);
              }
          }
        s && De(l, n, "srcSet", u.srcSet, u, null), c && De(l, n, "src", u.src, u, null);
        return;
      case "input":
        Ne("invalid", l);
        var p = r = m = s = null, S = null, U = null;
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
                  U = L;
                  break;
                case "value":
                  r = L;
                  break;
                case "defaultValue":
                  p = L;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (L != null)
                    throw Error(b(137, n));
                  break;
                default:
                  De(l, n, c, L, u, null);
              }
          }
        er(
          l,
          r,
          p,
          S,
          U,
          m,
          s,
          !1
        ), Lu(l);
        return;
      case "select":
        Ne("invalid", l), c = m = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (p = u[s], p != null))
            switch (s) {
              case "value":
                r = p;
                break;
              case "defaultValue":
                m = p;
                break;
              case "multiple":
                c = p;
              default:
                De(l, n, s, p, u, null);
            }
        n = r, u = m, l.multiple = !!c, n != null ? ji(l, !!c, n, !1) : u != null && ji(l, !!c, u, !0);
        return;
      case "textarea":
        Ne("invalid", l), r = s = c = null;
        for (m in u)
          if (u.hasOwnProperty(m) && (p = u[m], p != null))
            switch (m) {
              case "value":
                c = p;
                break;
              case "defaultValue":
                s = p;
                break;
              case "children":
                r = p;
                break;
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(b(91));
                break;
              default:
                De(l, n, m, p, u, null);
            }
        Dh(l, c, s, r), Lu(l);
        return;
      case "option":
        for (S in u)
          if (u.hasOwnProperty(S) && (c = u[S], c != null))
            switch (S) {
              case "selected":
                l.selected = c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                De(l, n, S, c, u, null);
            }
        return;
      case "dialog":
        Ne("beforetoggle", l), Ne("toggle", l), Ne("cancel", l), Ne("close", l);
        break;
      case "iframe":
      case "object":
        Ne("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < ys.length; c++)
          Ne(ys[c], l);
        break;
      case "image":
        Ne("error", l), Ne("load", l);
        break;
      case "details":
        Ne("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        Ne("error", l), Ne("load", l);
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
        for (U in u)
          if (u.hasOwnProperty(U) && (c = u[U], c != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(b(137, n));
              default:
                De(l, n, U, c, u, null);
            }
        return;
      default:
        if (Yi(n)) {
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
    for (p in u)
      u.hasOwnProperty(p) && (c = u[p], c != null && De(l, n, p, c, u, null));
  }
  function qg(l, n, u, c) {
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
        var s = null, r = null, m = null, p = null, S = null, U = null, L = null;
        for (N in u) {
          var K = u[N];
          if (u.hasOwnProperty(N) && K != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = K;
              default:
                c.hasOwnProperty(N) || De(l, n, N, null, c, K);
            }
        }
        for (var H in c) {
          var N = c[H];
          if (K = u[H], c.hasOwnProperty(H) && (N != null || K != null))
            switch (H) {
              case "type":
                r = N;
                break;
              case "name":
                s = N;
                break;
              case "checked":
                U = N;
                break;
              case "defaultChecked":
                L = N;
                break;
              case "value":
                m = N;
                break;
              case "defaultValue":
                p = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(b(137, n));
                break;
              default:
                N !== K && De(
                  l,
                  n,
                  H,
                  N,
                  c,
                  K
                );
            }
        }
        Ps(
          l,
          m,
          p,
          S,
          U,
          L,
          r,
          s
        );
        return;
      case "select":
        N = m = p = H = null;
        for (r in u)
          if (S = u[r], u.hasOwnProperty(r) && S != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                N = S;
              default:
                c.hasOwnProperty(r) || De(
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
                H = r;
                break;
              case "defaultValue":
                p = r;
                break;
              case "multiple":
                m = r;
              default:
                r !== S && De(
                  l,
                  n,
                  s,
                  r,
                  c,
                  S
                );
            }
        n = p, u = m, c = N, H != null ? ji(l, !!u, H, !1) : !!c != !!u && (n != null ? ji(l, !!u, n, !0) : ji(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        N = H = null;
        for (p in u)
          if (s = u[p], u.hasOwnProperty(p) && s != null && !c.hasOwnProperty(p))
            switch (p) {
              case "value":
                break;
              case "children":
                break;
              default:
                De(l, n, p, null, c, s);
            }
        for (m in c)
          if (s = c[m], r = u[m], c.hasOwnProperty(m) && (s != null || r != null))
            switch (m) {
              case "value":
                H = s;
                break;
              case "defaultValue":
                N = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(b(91));
                break;
              default:
                s !== r && De(l, n, m, s, c, r);
            }
        Oh(l, H, N);
        return;
      case "option":
        for (var ge in u)
          if (H = u[ge], u.hasOwnProperty(ge) && H != null && !c.hasOwnProperty(ge))
            switch (ge) {
              case "selected":
                l.selected = !1;
                break;
              default:
                De(
                  l,
                  n,
                  ge,
                  null,
                  c,
                  H
                );
            }
        for (S in c)
          if (H = c[S], N = u[S], c.hasOwnProperty(S) && H !== N && (H != null || N != null))
            switch (S) {
              case "selected":
                l.selected = H && typeof H != "function" && typeof H != "symbol";
                break;
              default:
                De(
                  l,
                  n,
                  S,
                  H,
                  c,
                  N
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
        for (var ve in u)
          H = u[ve], u.hasOwnProperty(ve) && H != null && !c.hasOwnProperty(ve) && De(l, n, ve, null, c, H);
        for (U in c)
          if (H = c[U], N = u[U], c.hasOwnProperty(U) && H !== N && (H != null || N != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null)
                  throw Error(b(137, n));
                break;
              default:
                De(
                  l,
                  n,
                  U,
                  H,
                  c,
                  N
                );
            }
        return;
      default:
        if (Yi(n)) {
          for (var it in u)
            H = u[it], u.hasOwnProperty(it) && H !== void 0 && !c.hasOwnProperty(it) && q(
              l,
              n,
              it,
              void 0,
              c,
              H
            );
          for (L in c)
            H = c[L], N = u[L], !c.hasOwnProperty(L) || H === N || H === void 0 && N === void 0 || q(
              l,
              n,
              L,
              H,
              c,
              N
            );
          return;
        }
    }
    for (var D in u)
      H = u[D], u.hasOwnProperty(D) && H != null && !c.hasOwnProperty(D) && De(l, n, D, null, c, H);
    for (K in c)
      H = c[K], N = u[K], !c.hasOwnProperty(K) || H === N || H == null && N == null || De(l, n, K, H, c, N);
  }
  var gs = null, vs = null;
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
  function No(l, n) {
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
  function Vn(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Bo = null;
  function Ou() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Bo ? !1 : (Bo = l, !0) : (Bo = null, !1);
  }
  var Od = typeof setTimeout == "function" ? setTimeout : void 0, jg = typeof clearTimeout == "function" ? clearTimeout : void 0, v0 = typeof Promise == "function" ? Promise : void 0, Yg = typeof queueMicrotask == "function" ? queueMicrotask : typeof v0 < "u" ? function(l) {
    return v0.resolve(null).then(l).catch(Xn);
  } : Od;
  function Xn(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function vi(l) {
    return l === "head";
  }
  function Dd(l, n) {
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
                var p = m.nextSibling, S = m.nodeName;
                m[ie] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && m.rel.toLowerCase() === "stylesheet" || u.removeChild(m), m = p;
              }
          }
          if (s === 0) {
            l.removeChild(r), Qn(n);
            return;
          }
          s--;
        } else
          u === "$" || u === "$?" || u === "$!" ? s++ : c = u.charCodeAt(0) - 48;
      else c = 0;
      u = r;
    } while (u);
    Qn(n);
  }
  function bs(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          bs(u), sf(u);
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
  function _o(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[ie])
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
      if (l = cn(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Gg(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = cn(l.nextSibling), l === null)) return null;
    return l;
  }
  function Ss(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function Vg(l, n) {
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
  function cn(l) {
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
    sf(l);
  }
  var Zt = /* @__PURE__ */ new Map(), Cl = /* @__PURE__ */ new Set();
  function Md(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Du = Q.d;
  Q.d = {
    f: Ud,
    r: Cd,
    D: Mu,
    C: Hd,
    L: Si,
    m: Hl,
    X: Ti,
    S: ua,
    M: my
  };
  function Ud() {
    var l = Du.f(), n = vc();
    return l || n;
  }
  function Cd(l) {
    var n = Ni(l);
    n !== null && n.tag === 5 && n.type === "form" ? mo(n) : Du.r(l);
  }
  var El = typeof document > "u" ? null : document;
  function on(l, n, u) {
    var c = El;
    if (c && typeof n == "string" && n) {
      var s = za(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), Cl.has(s) || (Cl.add(s), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(s) === null && (n = c.createElement("link"), xe(n, "link", l), Ft(n), c.head.appendChild(n)));
    }
  }
  function Mu(l) {
    Du.D(l), on("dns-prefetch", l, null);
  }
  function Hd(l, n) {
    Du.C(l, n), on("preconnect", l, n);
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
          r = qo(l);
          break;
        case "script":
          r = Ga(l);
      }
      Zt.has(r) || (l = de(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Zt.set(r, l), c.querySelector(s) !== null || n === "style" && c.querySelector(jo(r)) || n === "script" && c.querySelector(Ac(r)) || (n = c.createElement("link"), xe(n, "link", l), Ft(n), c.head.appendChild(n)));
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
      if (!Zt.has(r) && (l = de({ rel: "modulepreload", href: l }, n), Zt.set(r, l), u.querySelector(s) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Ac(r)))
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
      var s = uu(c).hoistableStyles, r = qo(l);
      n = n || "default";
      var m = s.get(r);
      if (!m) {
        var p = { loading: 0, preload: null };
        if (m = c.querySelector(
          jo(r)
        ))
          p.loading = 5;
        else {
          l = de(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Zt.get(r)) && Nd(l, u);
          var S = m = c.createElement("link");
          Ft(S), xe(S, "link", l), S._p = new Promise(function(U, L) {
            S.onload = U, S.onerror = L;
          }), S.addEventListener("load", function() {
            p.loading |= 1;
          }), S.addEventListener("error", function() {
            p.loading |= 2;
          }), p.loading |= 4, wd(m, n, c);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: p
        }, s.set(r, m);
      }
    }
  }
  function Ti(l, n) {
    Du.X(l, n);
    var u = El;
    if (u && l) {
      var c = uu(u).hoistableScripts, s = Ga(l), r = c.get(s);
      r || (r = u.querySelector(Ac(s)), r || (l = de({ src: l, async: !0 }, n), (n = Zt.get(s)) && Bd(l, n), r = u.createElement("script"), Ft(r), xe(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function my(l, n) {
    Du.M(l, n);
    var u = El;
    if (u && l) {
      var c = uu(u).hoistableScripts, s = Ga(l), r = c.get(s);
      r || (r = u.querySelector(Ac(s)), r || (l = de({ src: l, async: !0, type: "module" }, n), (n = Zt.get(s)) && Bd(l, n), r = u.createElement("script"), Ft(r), xe(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function b0(l, n, u, c) {
    var s = (s = He.current) ? Md(s) : null;
    if (!s) throw Error(b(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = qo(u.href), u = uu(
          s
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = qo(u.href);
          var r = uu(
            s
          ).hoistableStyles, m = r.get(l);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, m), (r = s.querySelector(
            jo(l)
          )) && !r._p && (m.instance = r, m.state.loading = 5), Zt.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Zt.set(l, u), r || S0(
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
  function qo(l) {
    return 'href="' + za(l) + '"';
  }
  function jo(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Yo(l) {
    return de({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function S0(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), xe(n, "link", u), Ft(n), l.head.appendChild(n));
  }
  function Ga(l) {
    return '[src="' + za(l) + '"]';
  }
  function Ac(l) {
    return "script[async]" + l;
  }
  function T0(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + za(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Ft(c), c;
          var s = de({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Ft(c), xe(c, "style", s), wd(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          s = qo(u.href);
          var r = l.querySelector(
            jo(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Ft(r), r;
          c = Yo(u), (s = Zt.get(s)) && Nd(c, s), r = (l.ownerDocument || l).createElement("link"), Ft(r);
          var m = r;
          return m._p = new Promise(function(p, S) {
            m.onload = p, m.onerror = S;
          }), xe(r, "link", c), n.state.loading |= 4, wd(r, u.precedence, l), n.instance = r;
        case "script":
          return r = Ga(u.src), (s = l.querySelector(
            Ac(r)
          )) ? (n.instance = s, Ft(s), s) : (c = u, (s = Zt.get(r)) && (c = de({}, u), Bd(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), Ft(s), xe(s, "link", c), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(b(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, wd(c, u.precedence, l));
    return n.instance;
  }
  function wd(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = c.length ? c[c.length - 1] : null, r = s, m = 0; m < c.length; m++) {
      var p = c[m];
      if (p.dataset.precedence === n) r = p;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function Nd(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function Bd(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var Ei = null;
  function yy(l, n, u) {
    if (Ei === null) {
      var c = /* @__PURE__ */ new Map(), s = Ei = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = Ei, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[ie] || r[ul] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = r.getAttribute(n) || "";
        m = l + m;
        var p = c.get(m);
        p ? p.push(r) : c.set(m, [r]);
      }
    }
    return c;
  }
  function py(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function E0(l, n, u) {
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
  function gy(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var Go = null;
  function A0() {
  }
  function x0(l, n, u) {
    if (Go === null) throw Error(b(475));
    var c = Go;
    if (n.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = qo(u.href), r = l.querySelector(
          jo(s)
        );
        if (r) {
          l = r._p, l !== null && typeof l == "object" && typeof l.then == "function" && (c.count++, c = Ts.bind(c), l.then(c, c)), n.state.loading |= 4, n.instance = r, Ft(r);
          return;
        }
        r = l.ownerDocument || l, u = Yo(u), (s = Zt.get(s)) && Nd(u, s), r = r.createElement("link"), Ft(r);
        var m = r;
        m._p = new Promise(function(p, S) {
          m.onload = p, m.onerror = S;
        }), xe(r, "link", u), n.instance = r;
      }
      c.stylesheets === null && (c.stylesheets = /* @__PURE__ */ new Map()), c.stylesheets.set(n, l), (l = n.state.preload) && (n.state.loading & 3) === 0 && (c.count++, n = Ts.bind(c), l.addEventListener("load", n), l.addEventListener("error", n));
    }
  }
  function vy() {
    if (Go === null) throw Error(b(475));
    var l = Go;
    return l.stylesheets && l.count === 0 && Es(l, l.stylesheets), 0 < l.count ? function(n) {
      var u = setTimeout(function() {
        if (l.stylesheets && Es(l, l.stylesheets), l.unsuspend) {
          var c = l.unsuspend;
          l.unsuspend = null, c();
        }
      }, 6e4);
      return l.unsuspend = n, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function Ts() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Es(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Vo = null;
  function Es(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Vo = /* @__PURE__ */ new Map(), n.forEach(ba, l), Vo = null, Ts.call(l));
  }
  function ba(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Vo.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Vo.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var m = s[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), c = m);
        }
        c && u.set(null, c);
      }
      s = n.instance, m = s.getAttribute("data-precedence"), r = u.get(m) || c, r === c && u.set(null, s), u.set(m, s), this.count++, c = Ts.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var ia = {
    $$typeof: Xe,
    Provider: null,
    Consumer: null,
    _currentValue: _,
    _currentValue2: _,
    _threadCount: 0
  };
  function Xg(l, n, u, c, s, r, m, p) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Yu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yu(0), this.hiddenUpdates = Yu(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = p, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function by(l, n, u, c, s, r, m, p, S, U, L, K) {
    return l = new Xg(
      l,
      n,
      u,
      m,
      p,
      S,
      U,
      K
    ), n = 1, r === !0 && (n |= 24), r = $l(3, null, null, n), l.current = r, r.stateNode = l, n = oo(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, Rr(r), l;
  }
  function Sy(l) {
    return l ? (l = eo, l) : eo;
  }
  function Ty(l, n, u, c, s, r) {
    s = Sy(s), c.context === null ? c.context = s : c.pendingContext = s, c = Fl(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = Rn(l, c, n), u !== null && (ga(u, l, n), lc(u, l, n));
  }
  function Ey(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function _d(l, n) {
    Ey(l, n), (l = l.alternate) && Ey(l, n);
  }
  function Ay(l) {
    if (l.tag === 13) {
      var n = Sn(l, 67108864);
      n !== null && ga(n, l, 67108864), _d(l, 67108864);
    }
  }
  var As = !0;
  function z0(l, n, u, c) {
    var s = A.T;
    A.T = null;
    var r = Q.p;
    try {
      Q.p = 2, xy(l, n, u, c);
    } finally {
      Q.p = r, A.T = s;
    }
  }
  function R0(l, n, u, c) {
    var s = A.T;
    A.T = null;
    var r = Q.p;
    try {
      Q.p = 8, xy(l, n, u, c);
    } finally {
      Q.p = r, A.T = s;
    }
  }
  function xy(l, n, u, c) {
    if (As) {
      var s = qd(c);
      if (s === null)
        ja(
          l,
          n,
          c,
          jd,
          u
        ), xc(l, c);
      else if (D0(
        s,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (xc(l, c), n & 4 && -1 < O0.indexOf(l)) {
        for (; s !== null; ) {
          var r = Ni(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var m = fa(r.pendingLanes);
                  if (m !== 0) {
                    var p = r;
                    for (p.pendingLanes |= 2, p.entangledLanes |= 2; m; ) {
                      var S = 1 << 31 - kl(m);
                      p.entanglements[1] |= S, m &= ~S;
                    }
                    aa(r), (rt & 6) === 0 && (md = oa() + 500, ss(0));
                  }
                }
                break;
              case 13:
                p = Sn(r, 2), p !== null && ga(p, r, 2), vc(), _d(r, 2);
            }
          if (r = qd(c), r === null && ja(
            l,
            n,
            c,
            jd,
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
  function qd(l) {
    return l = lr(l), zy(l);
  }
  var jd = null;
  function zy(l) {
    if (jd = null, l = ml(l), l !== null) {
      var n = J(l);
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
    return jd = l, null;
  }
  function Ry(l) {
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
        switch (uf()) {
          case pp:
            return 2;
          case Sh:
            return 8;
          case cf:
          case Th:
            return 32;
          case Gc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Xo = !1, Ln = null, Uu = null, Cu = null, xs = /* @__PURE__ */ new Map(), zs = /* @__PURE__ */ new Map(), Ai = [], O0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function xc(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        Ln = null;
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
        xs.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        zs.delete(n.pointerId);
    }
  }
  function zc(l, n, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = Ni(n), n !== null && Ay(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function D0(l, n, u, c, s) {
    switch (n) {
      case "focusin":
        return Ln = zc(
          Ln,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return Uu = zc(
          Uu,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return Cu = zc(
          Cu,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return xs.set(
          r,
          zc(
            xs.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, zs.set(
          r,
          zc(
            zs.get(r) || null,
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
      var u = J(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = W(u), n !== null) {
            l.blockedOn = n, Ag(l.priority, function() {
              if (u.tag === 13) {
                var c = pa();
                c = ka(c);
                var s = Sn(u, c);
                s !== null && ga(s, u, c), _d(u, c);
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
  function Rs(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = qd(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        Gi = c, u.target.dispatchEvent(c), Gi = null;
      } else
        return n = Ni(u), n !== null && Ay(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Os(l, n, u) {
    Rs(l) && u.delete(n);
  }
  function Lo() {
    Xo = !1, Ln !== null && Rs(Ln) && (Ln = null), Uu !== null && Rs(Uu) && (Uu = null), Cu !== null && Rs(Cu) && (Cu = null), xs.forEach(Os), zs.forEach(Os);
  }
  function Yd(l, n) {
    l.blockedOn === n && (l.blockedOn = null, Xo || (Xo = !0, y.unstable_scheduleCallback(
      y.unstable_NormalPriority,
      Lo
    )));
  }
  var Rc = null;
  function Dy(l) {
    Rc !== l && (Rc = l, y.unstable_scheduleCallback(
      y.unstable_NormalPriority,
      function() {
        Rc === l && (Rc = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], s = l[n + 2];
          if (typeof c != "function") {
            if (zy(c || u) === null)
              continue;
            break;
          }
          var r = Ni(u);
          r !== null && (l.splice(n, 3), n -= 3, kr(
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
  function Qn(l) {
    function n(S) {
      return Yd(S, l);
    }
    Ln !== null && Yd(Ln, l), Uu !== null && Yd(Uu, l), Cu !== null && Yd(Cu, l), xs.forEach(n), zs.forEach(n);
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
          m || Dy(u);
        else if (m) {
          var p = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, m = r[_l] || null)
              p = m.formAction;
            else if (zy(s) !== null) continue;
          } else p = m.action;
          typeof p == "function" ? u[c + 1] = p : (u.splice(c, 3), c -= 3), Dy(u);
        }
      }
  }
  function My(l) {
    this._internalRoot = l;
  }
  Gd.prototype.render = My.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(b(409));
    var u = n.current, c = pa();
    Ty(u, c, l, n, null, null);
  }, Gd.prototype.unmount = My.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      Ty(l.current, 2, null, l, null, null), vc(), n[Lc] = null;
    }
  };
  function Gd(l) {
    this._internalRoot = l;
  }
  Gd.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = Sp();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < Ai.length && n !== 0 && n < Ai[u].priority; u++) ;
      Ai.splice(u, 0, l), u === 0 && Oy(l);
    }
  };
  var Uy = O.version;
  if (Uy !== "19.1.0")
    throw Error(
      b(
        527,
        Uy,
        "19.1.0"
      )
    );
  Q.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(b(188)) : (l = Object.keys(l).join(","), Error(b(268, l)));
    return l = G(n), l = l !== null ? me(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Xl = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: A,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ds = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ds.isDisabled && Ds.supportsFiber)
      try {
        Vc = Ds.inject(
          Xl
        ), Bl = Ds;
      } catch {
      }
  }
  return hp.createRoot = function(l, n) {
    if (!Z(l)) throw Error(b(299));
    var u = !1, c = "", s = go, r = Om, m = Pf, p = null;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (p = n.unstable_transitionCallbacks)), n = by(
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
      p,
      null
    ), l[Lc] = n.current, ry(l), new My(n);
  }, hp.hydrateRoot = function(l, n, u) {
    if (!Z(l)) throw Error(b(299));
    var c = !1, s = "", r = go, m = Om, p = Pf, S = null, U = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (p = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (S = u.unstable_transitionCallbacks), u.formState !== void 0 && (U = u.formState)), n = by(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      s,
      r,
      m,
      p,
      S,
      U
    ), n.context = Sy(null), u = n.current, c = pa(), c = ka(c), s = Fl(c), s.callback = null, Rn(u, s, c), u = c, n.current.lanes = u, wi(n, u), aa(n), l[Lc] = n.current, ry(l), new Gd(n);
  }, hp.version = "19.1.0", hp;
}
var mp = {};
/**
 * @license React
 * react-dom-client.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nS;
function W2() {
  return nS || (nS = 1, process.env.NODE_ENV !== "production" && function() {
    function y(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function O(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = De(e) ? e.slice() : Ge({}, e);
      return f[o] = O(e[o], t, a + 1, i), f;
    }
    function R(e, t, a) {
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
      var o = t[i], f = De(e) ? e.slice() : Ge({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], De(f) ? f.splice(o, 1) : delete f[o]) : f[o] = b(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function Z(e, t, a) {
      var i = t[a], o = De(e) ? e.slice() : Ge({}, e);
      return a + 1 === t.length ? (De(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = Z(e[i], t, a + 1), o);
    }
    function J() {
      return !1;
    }
    function W() {
      return null;
    }
    function te() {
    }
    function G() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function me() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function de() {
    }
    function Re(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function pe(e, t, a, i) {
      return new Af(e, t, a, i);
    }
    function Ve(e, t) {
      e.context === Qo && (mt(e.current, 2, t, e, null, null), dc());
    }
    function Oe(e, t) {
      if (kn !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, vo(), Ef(
          e.current,
          t,
          a
        ), dc();
      }
    }
    function be(e) {
      kn = e;
    }
    function qe(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Ce(e) {
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
    function tt(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Xe(e) {
      if (Ce(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function pt(e) {
      var t = e.alternate;
      if (!t) {
        if (t = Ce(e), t === null)
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
            if (f === a) return Xe(o), e;
            if (f === i) return Xe(o), t;
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
    function Dt(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = Dt(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function ot(e) {
      return e === null || typeof e != "object" ? null : (e = hy && e[hy] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function je(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Rd ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Ne:
          return "Fragment";
        case Ho:
          return "Profiler";
        case Co:
          return "StrictMode";
        case wo:
          return "Suspense";
        case gi:
          return "SuspenseList";
        case dy:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Ec:
            return "Portal";
          case ja:
            return (e.displayName || "Context") + ".Provider";
          case zd:
            return (e._context.displayName || "Context") + ".Consumer";
          case zu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ps:
            return t = e.displayName || null, t !== null ? t : je(e.type) || "Memo";
          case va:
            t = e._payload, e = e._init;
            try {
              return je(e(t));
            } catch {
            }
        }
      return null;
    }
    function fe(e) {
      return typeof e.tag == "number" ? le(e) : typeof e.name == "string" ? e.name : null;
    }
    function le(e) {
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
          return je(t);
        case 8:
          return t === Co ? "StrictMode" : "Mode";
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
            return le(e.return);
      }
      return null;
    }
    function gt(e) {
      return { current: e };
    }
    function Fe(e, t) {
      0 > Ya ? console.error("Unexpected pop.") : (t !== vs[Ya] && console.error("Unexpected Fiber popped."), e.current = gs[Ya], gs[Ya] = null, vs[Ya] = null, Ya--);
    }
    function Ae(e, t, a) {
      Ya++, gs[Ya] = e.current, vs[Ya] = a, e.current = t;
    }
    function ft(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function Mt(e, t) {
      Ae(Vn, t, e), Ae(No, e, e), Ae(Ru, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? ht(t) : _c;
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
                t = mh;
                break;
              case "math":
                t = ng;
                break;
              default:
                t = _c;
            }
      }
      a = a.toLowerCase(), a = Oh(null, a), a = {
        context: t,
        ancestorInfo: a
      }, Fe(Ru, e), Ae(Ru, a, e);
    }
    function dt(e) {
      Fe(Ru, e), Fe(No, e), Fe(Vn, e);
    }
    function A() {
      return ft(Ru.current);
    }
    function Q(e) {
      e.memoizedState !== null && Ae(Bo, e, e);
      var t = ft(Ru.current), a = e.type, i = ta(t.context, a);
      a = Oh(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (Ae(No, e, e), Ae(Ru, i, e));
    }
    function _(e) {
      No.current === e && (Fe(Ru, e), Fe(No, e)), Bo.current === e && (Fe(Bo, e), op._currentValue = ks);
    }
    function he(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function B(e) {
      try {
        return ae(e), !1;
      } catch {
        return !0;
      }
    }
    function ae(e) {
      return "" + e;
    }
    function F(e, t) {
      if (B(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          he(e)
        ), ae(e);
    }
    function ee(e, t) {
      if (B(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          he(e)
        ), ae(e);
    }
    function Se(e) {
      if (B(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          he(e)
        ), ae(e);
    }
    function Ue(e) {
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
    function He(e) {
      if (typeof Vg == "function" && cn(e), Tl && typeof Tl.setStrictMode == "function")
        try {
          Tl.setStrictMode(bi, e);
        } catch (t) {
          na || (na = !0, console.error(
            "React instrumentation encountered an error: %s",
            t
          ));
        }
    }
    function Tt(e) {
      P = e;
    }
    function xt() {
      P !== null && typeof P.markCommitStopped == "function" && P.markCommitStopped();
    }
    function qt(e) {
      P !== null && typeof P.markComponentRenderStarted == "function" && P.markComponentRenderStarted(e);
    }
    function hl() {
      P !== null && typeof P.markComponentRenderStopped == "function" && P.markComponentRenderStopped();
    }
    function Za(e) {
      P !== null && typeof P.markRenderStarted == "function" && P.markRenderStarted(e);
    }
    function lu() {
      P !== null && typeof P.markRenderStopped == "function" && P.markRenderStopped();
    }
    function Ui(e, t) {
      P !== null && typeof P.markStateUpdateScheduled == "function" && P.markStateUpdateScheduled(e, t);
    }
    function bh(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Md(e) / Du | 0) | 0;
    }
    function Sg(e) {
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
    function Ci(e) {
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
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = Ci(i) : (d &= h, d !== 0 ? o = Ci(d) : a || (a = h & ~e, a !== 0 && (o = Ci(a))))) : (h = i & ~f, h !== 0 ? o = Ci(h) : d !== 0 ? o = Ci(d) : a || (a = i & ~e, a !== 0 && (o = Ci(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function uf(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function pp(e, t) {
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
    function Sh() {
      var e = Ud;
      return Ud <<= 1, (Ud & 4194048) === 0 && (Ud = 256), e;
    }
    function cf() {
      var e = Cd;
      return Cd <<= 1, (Cd & 62914560) === 0 && (Cd = 4194304), e;
    }
    function Th(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Gc(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function Tg(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, g = e.expirationTimes, v = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var w = 31 - Cl(a), Y = 1 << w;
        h[w] = 0, g[w] = -1;
        var C = v[w];
        if (C !== null)
          for (v[w] = null, w = 0; w < C.length; w++) {
            var V = C[w];
            V !== null && (V.lane &= -536870913);
          }
        a &= ~Y;
      }
      i !== 0 && gp(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function gp(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - Cl(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 4194090;
    }
    function Vc(e, t) {
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
    function Eh(e) {
      return e &= -e, El < e ? on < e ? (e & 134217727) !== 0 ? Mu : Hd : on : El;
    }
    function vp() {
      var e = xe.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? Mu : Ad(e.type));
    }
    function Eg(e, t) {
      var a = xe.p;
      try {
        return xe.p = e, t();
      } finally {
        xe.p = a;
      }
    }
    function Xc(e) {
      delete e[Hl], delete e[ua], delete e[my], delete e[b0], delete e[qo];
    }
    function nu(e) {
      var t = e[Hl];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Ti] || a[Hl]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = Oo(e); e !== null; ) {
              if (a = e[Hl])
                return a;
              e = Oo(e);
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
    function dn(e) {
      var t = e[jo];
      return t || (t = e[jo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function nl(e) {
      e[Yo] = !0;
    }
    function ju(e, t) {
      Hi(e, t), Hi(e + "Capture", t);
    }
    function Hi(e, t) {
      Ga[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Ga[e] = t;
      var a = e.toLowerCase();
      for (Ac[a] = e, e === "onDoubleClick" && (Ac.ondblclick = e), e = 0; e < t.length; e++)
        S0.add(t[e]);
    }
    function Yu(e, t) {
      T0[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function wi(e) {
      return Ou.call(Bd, e) ? !0 : Ou.call(Nd, e) ? !1 : wd.test(e) ? Bd[e] = !0 : (Nd[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function bp(e, t, a) {
      if (wi(t)) {
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
    function of(e, t, a) {
      if (wi(t))
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
    function ff(e, t, a) {
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
    function ka(e, t, a, i) {
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
    function Ks() {
    }
    function Sp() {
      if (Ei === 0) {
        yy = console.log, py = console.info, E0 = console.warn, gy = console.error, Go = console.group, A0 = console.groupCollapsed, x0 = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Ks,
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
    function Ag() {
      if (Ei--, Ei === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Ge({}, e, { value: yy }),
          info: Ge({}, e, { value: py }),
          warn: Ge({}, e, { value: E0 }),
          error: Ge({}, e, { value: gy }),
          group: Ge({}, e, { value: Go }),
          groupCollapsed: Ge({}, e, { value: A0 }),
          groupEnd: Ge({}, e, { value: x0 })
        });
      }
      0 > Ei && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function Wt(e) {
      if (vy === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          vy = t && t[1] || "", Ts = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + vy + e + Ts;
    }
    function ul(e, t) {
      if (!e || Vo) return "";
      var a = Es.get(e);
      if (a !== void 0) return a;
      Vo = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = q.H, q.H = null, Sp();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var C = function() {
                  throw Error();
                };
                if (Object.defineProperty(C.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(C, []);
                  } catch (ce) {
                    var V = ce;
                  }
                  Reflect.construct(e, [], C);
                } else {
                  try {
                    C.call();
                  } catch (ce) {
                    V = ce;
                  }
                  e.call(C.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ce) {
                  V = ce;
                }
                (C = e()) && typeof C.catch == "function" && C.catch(function() {
                });
              }
            } catch (ce) {
              if (ce && V && typeof ce.stack == "string")
                return [ce.stack, V.stack];
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
        var d = o.DetermineComponentFrameRoot(), h = d[0], g = d[1];
        if (h && g) {
          var v = h.split(`
`), w = g.split(`
`);
          for (d = f = 0; f < v.length && !v[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < w.length && !w[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === v.length || d === w.length)
            for (f = v.length - 1, d = w.length - 1; 1 <= f && 0 <= d && v[f] !== w[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (v[f] !== w[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || v[f] !== w[d]) {
                    var Y = `
` + v[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", e.displayName)), typeof e == "function" && Es.set(e, Y), Y;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Vo = !1, q.H = i, Ag(), Error.prepareStackTrace = a;
      }
      return v = (v = e ? e.displayName || e.name : "") ? Wt(v) : "", typeof e == "function" && Es.set(e, v), v;
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
    function Lc(e) {
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
    function $s(e) {
      try {
        var t = "";
        do {
          t += Lc(e);
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
      } catch (g) {
        return `
Error generating stack: ` + g.message + `
` + g.stack;
      }
    }
    function Tp(e) {
      return (e = e ? e.displayName || e.name : "") ? Wt(e) : "";
    }
    function Ws() {
      if (ba === null) return null;
      var e = ba._debugOwner;
      return e != null ? fe(e) : null;
    }
    function Ep() {
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
            e._debugOwner || t !== "" || (t += Tp(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += Tp(
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
    function ie(e, t, a, i, o, f, d) {
      var h = ba;
      sf(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        sf(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function sf(e) {
      q.getCurrentStack = e === null ? null : Ep, ia = !1, ba = e;
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
          return Se(e), e;
        default:
          return "";
      }
    }
    function Ni(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function rf(e) {
      var t = Ni(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      Se(e[t]);
      var i = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var o = a.get, f = a.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            Se(d), i = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return i;
          },
          setValue: function(d) {
            Se(d), i = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function uu(e) {
      e._valueTracker || (e._valueTracker = rf(e));
    }
    function Ft(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = Ni(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function df(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function sa(e) {
      return e.replace(
        Xg,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function Gu(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || Sy || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Ws() || "A component",
        t.type
      ), Sy = !0), t.value === void 0 || t.defaultValue === void 0 || by || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Ws() || "A component",
        t.type
      ), by = !0);
    }
    function Vu(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (F(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + ml(t)) : e.value !== "" + ml(t) && (e.value = "" + ml(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Fs(e, d, ml(t)) : a != null ? Fs(e, d, ml(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (F(h, "name"), e.name = "" + ml(h)) : e.removeAttribute("name");
    }
    function Ap(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (F(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null))
          return;
        a = a != null ? "" + ml(a) : "", t = t != null ? "" + ml(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (F(d, "name"), e.name = d);
    }
    function Fs(e, t, a) {
      t === "number" && df(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function Ah(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? ms.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || Ey || (Ey = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || _d || (_d = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || Ty || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Ty = !0);
    }
    function xp() {
      var e = Ws();
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
    function hf(e, t) {
      for (e = 0; e < As.length; e++) {
        var a = As[e];
        if (t[a] != null) {
          var i = De(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            xp()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            xp()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || Ay || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), Ay = !0);
    }
    function hn(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || z0 || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        Ws() || "A component"
      ), z0 = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function Is(e, t, a) {
      if (t != null && (t = "" + ml(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + ml(a) : "";
    }
    function xh(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (De(i)) {
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
    function Bi(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Bi(e.children[0], t) : e;
    }
    function ql(e) {
      return "  " + "  ".repeat(e);
    }
    function Xu(e) {
      return "+ " + "  ".repeat(e);
    }
    function _i(e) {
      return "- " + "  ".repeat(e);
    }
    function zh(e) {
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
    function Ol(e, t) {
      return R0.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function mf(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return Xu(a) + Ol(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Xu(a) + Ol(e, i) + `
` + _i(a) + Ol(t, i) + `
`;
      }
      return ql(a) + Ol(e, i) + `
`;
    }
    function Rh(e) {
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
          if (De(e)) return "[...]";
          if (e.$$typeof === pi)
            return (t = je(e.type)) ? "<" + t + ">" : "<...>";
          var a = Rh(e);
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
    function qi(e, t) {
      return typeof e != "string" || R0.test(e) ? "{" + Lu(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function Qc(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = qi(
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
    function xg(e, t, a) {
      var i = "", o = Ge({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = Lu(e[f], d);
          t.hasOwnProperty(f) ? (d = Lu(t[f], d), i += Xu(a) + f + ": " + h + `
`, i += _i(a) + f + ": " + d + `
`) : i += Xu(a) + f + ": " + h + `
`;
        }
      for (var g in o)
        o.hasOwnProperty(g) && (e = Lu(
          o[g],
          120 - 2 * a - g.length - 2
        ), i += _i(a) + g + ": " + e + `
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
        o += Qc(
          e,
          t,
          ql(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, g = f.get(d.toLowerCase());
            if (g !== void 0) {
              f.delete(d.toLowerCase());
              var v = t[d];
              g = a[g];
              var w = qi(
                v,
                h
              );
              h = qi(
                g,
                h
              ), typeof v == "object" && v !== null && typeof g == "object" && g !== null && Rh(v) === "Object" && Rh(g) === "Object" && (2 < Object.keys(v).length || 2 < Object.keys(g).length || -1 < w.indexOf("...") || -1 < h.indexOf("...")) ? o += ql(i + 1) + d + `={{
` + xg(
                v,
                g,
                i + 2
              ) + ql(i + 1) + `}}
` : (o += Xu(i + 1) + d + "=" + w + `
`, o += _i(i + 1) + d + "=" + h + `
`);
            } else
              o += ql(i + 1) + d + "=" + qi(t[d], h) + `
`;
          }
        f.forEach(function(Y) {
          if (Y !== "children") {
            var C = 120 - 2 * (i + 1) - Y.length - 1;
            o += _i(i + 1) + Y + "=" + qi(a[Y], C) + `
`;
          }
        }), o = o === "" ? ql(i) + "<" + e + `>
` : ql(i) + "<" + e + `
` + o + ql(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += mf(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + mf("" + t, null, i + 1) : o + mf("" + t, void 0, i + 1)), o;
    }
    function Ps(e, t) {
      var a = zh(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += Ps(e, t), e = e.sibling;
        return a;
      }
      return ql(t) + "<" + a + `>
`;
    }
    function er(e, t) {
      var a = Bi(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return ql(t) + `...
` + er(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += ql(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = mf(o, e.serverProps, t), t++;
      else if (f = zh(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (v in o)
            if (o.hasOwnProperty(v) && v !== "children") {
              var g = qi(o[v], 15);
              if (d -= v.length + g.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + v + "=" + g;
            }
          i = ql(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = Qc(
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
        d = e.children[f], d.fiber === o ? (v += er(d, t), f++) : v += Ps(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (v += ql(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], v = typeof f == "string" ? v + (_i(t) + Ol(f, 120 - 2 * t) + `
`) : v + Qc(
          f.type,
          f.props,
          _i(t)
        );
      return a + i + v;
    }
    function yf(e) {
      try {
        return `

` + er(e, 0);
      } catch {
        return "";
      }
    }
    function ji(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? yf(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function Oh(e, t) {
      var a = Ge({}, e || Ry), i = { tag: t };
      return qd.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), jd.indexOf(t) !== -1 && (a.pTagInButtonScope = null), xy.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function Dh(e, t, a) {
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
          return zy.indexOf(t) === -1;
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
    function Zc(e, t) {
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
    function zp(e, t) {
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
    function tr(e, t) {
      t = t || Ry;
      var a = t.current;
      if (t = (a = Dh(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : Zc(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, Xo[t]) return !1;
      Xo[t] = !0;
      var o = (t = ba) ? zp(t.return, i) : null, f = t !== null && o !== null ? ji(o, t, null) : "", d = "<" + e + ">";
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
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || ie(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function pf(e, t, a) {
      if (a || Dh("#text", t, !1))
        return !0;
      if (a = "#text|" + t, Xo[a]) return !1;
      Xo[a] = !0;
      var i = (a = ba) ? zp(a, t) : null;
      return a = a !== null && i !== null ? ji(
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
    function Yi(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function zg(e) {
      return e.replace(Ai, function(t, a) {
        return a.toUpperCase();
      });
    }
    function Rp(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? xc.hasOwnProperty(t) && xc[t] || (xc[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        zg(t.replace(zs, "ms-"))
      )) : xs.test(t) ? xc.hasOwnProperty(t) && xc[t] || (xc[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !O0.test(a) || zc.hasOwnProperty(a) && zc[a] || (zc[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(O0, "")
      )), typeof a == "number" && (isNaN(a) ? D0 || (D0 = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || Oy || (Oy = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Rs.has(t) ? t === "float" ? e.cssFloat = a : (ee(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function gf(e, t, a) {
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
                for (var f = Ln[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = Ln[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var g in t)
            for (o = Ln[g] || [g], f = 0; f < o.length; f++)
              h[o[f]] = g;
          g = {};
          for (var v in i)
            if (o = i[v], (f = h[v]) && o !== f && (d = o + "," + f, !g[d])) {
              g[d] = !0, d = console;
              var w = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                w == null || typeof w == "boolean" || w === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var Y in a)
          !a.hasOwnProperty(Y) || t != null && t.hasOwnProperty(Y) || (Y.indexOf("--") === 0 ? e.setProperty(Y, "") : Y === "float" ? e.cssFloat = "" : e[Y] = "");
        for (var C in t)
          v = t[C], t.hasOwnProperty(C) && a[C] !== v && Rp(e, C, v);
      } else
        for (i in t)
          t.hasOwnProperty(i) && Rp(e, i, t[i]);
    }
    function Gi(e) {
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
    function lr(e) {
      return Yd.get(e) || e;
    }
    function kc(e, t) {
      if (Ou.call(Qn, t) && Qn[t])
        return !0;
      if (Gd.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = Dy.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), Qn[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), Qn[t] = !0;
      }
      if (My.test(t)) {
        if (e = t.toLowerCase(), e = Dy.hasOwnProperty(e) ? e : null, e == null) return Qn[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), Qn[t] = !0);
      }
      return !0;
    }
    function Jc(e, t) {
      var a = [], i;
      for (i in t)
        kc(e, i) || a.push(i);
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
      if (Ou.call(Xl, t) && Xl[t])
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
        if (Ds.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), Xl[t] = !0;
      } else if (Ds.test(t))
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
      if (Rc.hasOwnProperty(o)) {
        if (o = Rc[o], o !== t)
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
    function Mh(e, t, a) {
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
    function Kc(e) {
      return c.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Vi(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function mn(e) {
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
            Is(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && iu(e, !!a.multiple, t, !1);
        }
      }
    }
    function ar(e, t, a) {
      if (p) return e(t, a);
      p = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (p = !1, (r !== null || m !== null) && (dc(), r && (t = r, e = m, m = r = null, mn(t), e)))
          for (t = 0; t < e.length; t++) mn(e[t]);
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
      if (N) return N;
      var e, t = H, a = t.length, i, o = "value" in K ? K.value : K.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return N = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function $c(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Xi() {
      return !0;
    }
    function Uh() {
      return !1;
    }
    function yl(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Xi : Uh, this.isPropagationStopped = Uh, this;
      }
      return Ge(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Xi);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Xi);
        },
        persist: function() {
        },
        isPersistent: Xi
      }), t;
    }
    function nr(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = LS[e]) ? !!t[e] : !1;
    }
    function ur() {
      return nr;
    }
    function jl(e, t) {
      switch (e) {
        case "keyup":
          return t2.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== tb;
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
    function ir(e, t) {
      switch (e) {
        case "compositionend":
          return Qu(t);
        case "keypress":
          return t.which !== ab ? null : (ub = !0, nb);
        case "textInput":
          return e = t.data, e === nb && ub ? null : e;
        default:
          return null;
      }
    }
    function vf(e, t) {
      if (Vd)
        return e === "compositionend" || !Qg && jl(e, t) ? (e = ou(), N = H = K = null, Vd = !1, e) : null;
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
          return lb && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function Dp(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!a2[e.type] : t === "textarea";
    }
    function Ch(e) {
      if (!S) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function cr(e, t, a, i) {
      r ? m ? m.push(i) : m = [i] : r = i, t = us(t, "onChange"), 0 < t.length && (a = new ve(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function bf(e) {
      Bn(e, 0);
    }
    function Li(e) {
      var t = qu(e);
      if (Ft(t)) return e;
    }
    function Hh(e, t) {
      if (e === "change") return t;
    }
    function Mp() {
      Hy && (Hy.detachEvent("onpropertychange", Up), wy = Hy = null);
    }
    function Up(e) {
      if (e.propertyName === "value" && Li(wy)) {
        var t = [];
        cr(
          t,
          wy,
          e,
          Vi(e)
        ), ar(bf, t);
      }
    }
    function Rg(e, t, a) {
      e === "focusin" ? (Mp(), Hy = t, wy = a, Hy.attachEvent("onpropertychange", Up)) : e === "focusout" && Mp();
    }
    function wh(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Li(wy);
    }
    function Og(e, t) {
      if (e === "click") return Li(t);
    }
    function Dg(e, t) {
      if (e === "input" || e === "change")
        return Li(t);
    }
    function Mg(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function Sf(e, t) {
      if (Sa(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!Ou.call(t, o) || !Sa(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function Cp(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Nh(e, t) {
      var a = Cp(e);
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
        a = Cp(a);
      }
    }
    function Hp(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Hp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function wp(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = df(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = df(e.document);
      }
      return t;
    }
    function Bh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Np(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      kg || Xd == null || Xd !== df(i) || (i = Xd, "selectionStart" in i && Bh(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), Ny && Sf(Ny, i) || (Ny = i, i = us(Zg, "onSelect"), 0 < i.length && (t = new ve(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = Xd)));
    }
    function fu(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function Qi(e) {
      if (Jg[e]) return Jg[e];
      if (!Ld[e]) return e;
      var t = Ld[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in cb)
          return Jg[e] = t[a];
      return e;
    }
    function Ja(e, t) {
      db.set(e, t), ju(t, [e]);
    }
    function ra(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = $g.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: $s(t)
        }, $g.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: $s(t)
      };
    }
    function Tf() {
      for (var e = Qd, t = Wg = Qd = 0; t < e; ) {
        var a = Zn[t];
        Zn[t++] = null;
        var i = Zn[t];
        Zn[t++] = null;
        var o = Zn[t];
        Zn[t++] = null;
        var f = Zn[t];
        if (Zn[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && Bp(a, o, f);
      }
    }
    function or(e, t, a, i) {
      Zn[Qd++] = e, Zn[Qd++] = t, Zn[Qd++] = a, Zn[Qd++] = i, Wg |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function _h(e, t, a, i) {
      return or(e, t, a, i), fr(e);
    }
    function Jl(e, t) {
      return or(e, null, null, t), fr(e);
    }
    function Bp(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & M0 || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - Cl(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function fr(e) {
      if (lp > R2)
        throw Vs = lp = 0, ap = Rv = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Vs > O2 && (Vs = 0, ap = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && un(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && un(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Zi(e) {
      if (kn === null) return e;
      var t = kn(e);
      return t === void 0 ? e : t.current;
    }
    function qh(e) {
      if (kn === null) return e;
      var t = kn(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Zi(e.render), e.render !== t) ? (t = { $$typeof: zu, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function _p(e, t) {
      if (kn === null) return !1;
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
          (o === ps || o === va) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = kn(a), e !== void 0 && e === kn(t)));
    }
    function qp(e) {
      kn !== null && typeof WeakSet == "function" && (Zd === null && (Zd = /* @__PURE__ */ new WeakSet()), Zd.add(e));
    }
    function Ef(e, t, a) {
      var i = e.alternate, o = e.child, f = e.sibling, d = e.tag, h = e.type, g = null;
      switch (d) {
        case 0:
        case 15:
        case 1:
          g = h;
          break;
        case 11:
          g = h.render;
      }
      if (kn === null)
        throw Error("Expected resolveFamily to be set during hot reload.");
      var v = !1;
      h = !1, g !== null && (g = kn(g), g !== void 0 && (a.has(g) ? h = !0 : t.has(g) && (d === 1 ? h = !0 : v = !0))), Zd !== null && (Zd.has(e) || i !== null && Zd.has(i)) && (h = !0), h && (e._debugNeedsRemount = !0), (h || v) && (i = Jl(e, 2), i !== null && Gt(i, e, 2)), o === null || h || Ef(
        o,
        t,
        a
      ), f !== null && Ef(
        f,
        t,
        a
      );
    }
    function Af(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, mb || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function jh(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function yn(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = pe(
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
          a.type = Zi(e.type);
          break;
        case 1:
          a.type = Zi(e.type);
          break;
        case 11:
          a.type = qh(e.type);
      }
      return a;
    }
    function Yh(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function sr(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        jh(e) && (d = 1), h = Zi(h);
      else if (typeof e == "string")
        d = A(), d = Mo(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case dy:
            return t = pe(31, a, t, o), t.elementType = dy, t.lanes = f, t;
          case Ne:
            return Zu(
              a.children,
              o,
              f,
              t
            );
          case Co:
            d = 8, o |= ca, o |= Hu;
            break;
          case Ho:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = pe(12, e, t, i | Ll), t.elementType = Ho, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case wo:
            return t = pe(13, a, t, o), t.elementType = wo, t.lanes = f, t;
          case gi:
            return t = pe(19, a, t, o), t.elementType = gi, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case ry:
                case ja:
                  d = 10;
                  break e;
                case zd:
                  d = 9;
                  break e;
                case zu:
                  d = 11, h = qh(h);
                  break e;
                case ps:
                  d = 14;
                  break e;
                case va:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : De(e) ? a = "array" : e !== void 0 && e.$$typeof === pi ? (a = "<" + (je(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? fe(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = pe(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function xf(e, t, a) {
      return t = sr(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function Zu(e, t, a, i) {
      return e = pe(7, e, i, t), e.lanes = a, e;
    }
    function ku(e, t, a) {
      return e = pe(6, e, null, t), e.lanes = a, e;
    }
    function Gh(e, t, a) {
      return t = pe(
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
    function ki(e, t) {
      Ka(), kd[Jd++] = C0, kd[Jd++] = U0, U0 = e, C0 = t;
    }
    function jp(e, t, a) {
      Ka(), Jn[Kn++] = Dc, Jn[Kn++] = Mc, Jn[Kn++] = Ms, Ms = e;
      var i = Dc;
      e = Mc;
      var o = 32 - Cl(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - Cl(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, Dc = 1 << 32 - Cl(t) + o | a << o | i, Mc = f + e;
      } else
        Dc = 1 << f | a << o | i, Mc = e;
    }
    function rr(e) {
      Ka(), e.return !== null && (ki(e, 1), jp(e, 1, 0));
    }
    function dr(e) {
      for (; e === U0; )
        U0 = kd[--Jd], kd[Jd] = null, C0 = kd[--Jd], kd[Jd] = null;
      for (; e === Ms; )
        Ms = Jn[--Kn], Jn[Kn] = null, Mc = Jn[--Kn], Jn[Kn] = null, Dc = Jn[--Kn], Jn[Kn] = null;
    }
    function Ka() {
      ct || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function $a(e, t) {
      if (e.return === null) {
        if ($n === null)
          $n = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if ($n.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          $n.distanceFromLeaf > t && ($n.distanceFromLeaf = t);
        }
        return $n;
      }
      var a = $a(
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
    function Vh(e, t) {
      Uc || (e = $a(e, 0), e.serverProps = null, t !== null && (t = yd(t), e.serverTail.push(t)));
    }
    function pn(e) {
      var t = "", a = $n;
      throw a !== null && ($n = null, t = yf(a)), Wc(
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
      ), Fg;
    }
    function Xh(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Hl] = e, t[ua] = i, _n(a, i), a) {
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
          for (a = 0; a < np.length; a++)
            ke(np[a], t);
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
          Yu("input", i), ke("invalid", t), Gu(t, i), Ap(
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
          Ah(t, i);
          break;
        case "select":
          Yu("select", i), ke("invalid", t), hf(t, i);
          break;
        case "textarea":
          Yu("textarea", i), ke("invalid", t), hn(t, i), xh(
            t,
            i.value,
            i.defaultValue,
            i.children
          ), uu(t);
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || Qm(t.textContent, a) ? (i.popover != null && (ke("beforetoggle", t), ke("toggle", t)), i.onScroll != null && ke("scroll", t), i.onScrollEnd != null && ke("scrollend", t), i.onClick != null && (t.onclick = Tu), t = !0) : t = !1, t || pn(e);
    }
    function Lh(e) {
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
    function Ji(e) {
      if (e !== Ta) return !1;
      if (!ct)
        return Lh(e), ct = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || qn(e.type, e.memoizedProps)), a = !a), a && Kt) {
        for (a = Kt; a; ) {
          var i = $a(e, 0), o = yd(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? Im(a) : Sl(a.nextSibling);
        }
        pn(e);
      }
      if (Lh(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Kt = Im(e);
      } else
        t === 27 ? (t = Kt, jn(e.type) ? (e = jv, jv = null, Kt = e) : Kt = t) : Kt = Ta ? Sl(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Ki() {
      Kt = Ta = null, Uc = ct = !1;
    }
    function Qh() {
      var e = Us;
      return e !== null && (xa === null ? xa = e : xa.push.apply(
        xa,
        e
      ), Us = null), e;
    }
    function Wc(e) {
      Us === null ? Us = [e] : Us.push(e);
    }
    function Zh() {
      var e = $n;
      if (e !== null) {
        $n = null;
        for (var t = yf(e); 0 < e.children.length; )
          e = e.children[0];
        ie(e.fiber, function() {
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
    function hr() {
      Kd = H0 = null, $d = !1;
    }
    function Ju(e, t, a) {
      Ae(Ig, t._currentValue, e), t._currentValue = a, Ae(Pg, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== vb && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = vb;
    }
    function su(e, t) {
      e._currentValue = Ig.current;
      var a = Pg.current;
      Fe(Pg, t), e._currentRenderer = a, Fe(Ig, t);
    }
    function kh(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Jh(e, t, a, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var g = 0; g < t.length; g++)
              if (h.context === t[g]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), kh(
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
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), kh(
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
        } else if (o === Bo.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(op) : e = [op]);
        }
        o = o.return;
      }
      e !== null && Jh(
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
      H0 = e, Kd = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function zt(e) {
      return $d && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), Kh(H0, e);
    }
    function zf(e, t) {
      return H0 === null && $u(e), Kh(e, t);
    }
    function Kh(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, Kd === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        Kd = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else Kd = Kd.next = t;
      return a;
    }
    function Rf() {
      return {
        controller: new r2(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function $i(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function gn(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && d2(h2, function() {
        e.controller.abort();
      });
    }
    function Wa() {
      var e = Cs;
      return Cs = 0, e;
    }
    function Wu(e) {
      var t = Cs;
      return Cs = e, t;
    }
    function Wi(e) {
      var t = Cs;
      return Cs += e, t;
    }
    function mr(e) {
      Va = Wd(), 0 > e.actualStartTime && (e.actualStartTime = Va);
    }
    function ru(e) {
      if (0 <= Va) {
        var t = Wd() - Va;
        e.actualDuration += t, e.selfBaseDuration = t, Va = -1;
      }
    }
    function Fi(e) {
      if (0 <= Va) {
        var t = Wd() - Va;
        e.actualDuration += t, Va = -1;
      }
    }
    function Ra() {
      if (0 <= Va) {
        var e = Wd() - Va;
        Va = -1, Cs += e;
      }
    }
    function Fa() {
      Va = Wd();
    }
    function vn(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Yp(e, t) {
      if (By === null) {
        var a = By = [];
        ev = 0, Hs = Ym(), Fd = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return ev++, t.then($h, $h), t;
    }
    function $h() {
      if (--ev === 0 && By !== null) {
        Fd !== null && (Fd.status = "fulfilled");
        var e = By;
        By = null, Hs = 0, Fd = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Gp(e, t) {
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
    function Wh() {
      var e = ws.current;
      return e !== null ? e : Rt.pooledCache;
    }
    function yr(e, t) {
      t === null ? Ae(ws, ws.current, e) : Ae(ws, t.pool, e);
    }
    function Vp() {
      var e = Wh();
      return e === null ? null : { parent: Al._currentValue, pool: e };
    }
    function Fh() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Ih(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Fc() {
    }
    function Oa(e, t, a) {
      q.actQueue !== null && (q.didUsePromise = !0);
      var i = e.thenables;
      switch (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(Fc, Fc), t = a), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, da(e), e;
        default:
          if (typeof t.status == "string")
            t.then(Fc, Fc);
          else {
            if (e = Rt, e !== null && 100 < e.shellSuspendCounter)
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
          throw Ly = t, j0 = !0, Xy;
      }
    }
    function Ph() {
      if (Ly === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Ly;
      return Ly = null, j0 = !1, e;
    }
    function da(e) {
      if (e === Xy || e === q0)
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
    function bn(e) {
      return {
        lane: e,
        tag: Ab,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Ia(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, av === i && !Rb) {
        var o = le(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), Rb = !0;
      }
      return (yt & Aa) !== fn ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = fr(e), Bp(e, null, a), t) : (or(e, i, t, a), fr(e));
    }
    function Iu(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, Vc(e, a);
      }
    }
    function Ic(e, t) {
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
    function Sn() {
      if (nv) {
        var e = Fd;
        if (e !== null) throw e;
      }
    }
    function Pc(e, t, a, i) {
      nv = !1;
      var o = e.updateQueue;
      Zo = !1, av = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var g = h, v = g.next;
        g.next = null, d === null ? f = v : d.next = v, d = g;
        var w = e.alternate;
        w !== null && (w = w.updateQueue, h = w.lastBaseUpdate, h !== d && (h === null ? w.firstBaseUpdate = v : h.next = v, w.lastBaseUpdate = g));
      }
      if (f !== null) {
        var Y = o.baseState;
        d = 0, w = v = g = null, h = f;
        do {
          var C = h.lane & -536870913, V = C !== h.lane;
          if (V ? (Ie & C) === C : (i & C) === C) {
            C !== 0 && C === Hs && (nv = !0), w !== null && (w = w.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              C = e;
              var ce = h, ze = t, Ot = a;
              switch (ce.tag) {
                case xb:
                  if (ce = ce.payload, typeof ce == "function") {
                    $d = !0;
                    var et = ce.call(
                      Ot,
                      Y,
                      ze
                    );
                    if (C.mode & ca) {
                      He(!0);
                      try {
                        ce.call(Ot, Y, ze);
                      } finally {
                        He(!1);
                      }
                    }
                    $d = !1, Y = et;
                    break e;
                  }
                  Y = ce;
                  break e;
                case lv:
                  C.flags = C.flags & -65537 | 128;
                case Ab:
                  if (et = ce.payload, typeof et == "function") {
                    if ($d = !0, ce = et.call(
                      Ot,
                      Y,
                      ze
                    ), C.mode & ca) {
                      He(!0);
                      try {
                        et.call(Ot, Y, ze);
                      } finally {
                        He(!1);
                      }
                    }
                    $d = !1;
                  } else ce = et;
                  if (ce == null) break e;
                  Y = Ge({}, Y, ce);
                  break e;
                case zb:
                  Zo = !0;
              }
            }
            C = h.callback, C !== null && (e.flags |= 64, V && (e.flags |= 8192), V = o.callbacks, V === null ? o.callbacks = [C] : V.push(C));
          } else
            V = {
              lane: C,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, w === null ? (v = w = V, g = Y) : w = w.next = V, d |= C;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            V = h, h = V.next, V.next = null, o.lastBaseUpdate = V, o.shared.pending = null;
          }
        } while (!0);
        w === null && (g = Y), o.baseState = g, o.firstBaseUpdate = v, o.lastBaseUpdate = w, f === null && (o.shared.lanes = 0), $o |= d, e.lanes = d, e.memoizedState = Y;
      }
      av = null;
    }
    function Of(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function eo(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          Of(a[e], t);
    }
    function Xp(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Of(a[e], t);
    }
    function $l(e, t) {
      var a = Di;
      Ae(Y0, a, e), Ae(Id, t, e), Di = a | t.baseLanes;
    }
    function Df(e) {
      Ae(Y0, Di, e), Ae(
        Id,
        Id.current,
        e
      );
    }
    function Pa(e) {
      Di = Y0.current, Fe(Id, e), Fe(Y0, e);
    }
    function Le() {
      var e = j;
      In === null ? In = [e] : In.push(e);
    }
    function $() {
      var e = j;
      if (In !== null && (Hc++, In[Hc] !== e)) {
        var t = le(Me);
        if (!Ob.has(t) && (Ob.add(t), In !== null)) {
          for (var a = "", i = 0; i <= Hc; i++) {
            var o = In[i], f = i === Hc ? e : o;
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
      e == null || De(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        j,
        typeof e
      );
    }
    function to() {
      var e = le(Me);
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
      if (Zy) return !1;
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
      ko = f, Me = t, In = e !== null ? e._debugHookTypes : null, Hc = -1, Zy = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = le(Me), uv.has(f) || (uv.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, q.H = e !== null && e.memoizedState !== null ? cv : In !== null ? Ub : iv, Bs = f = (t.mode & ca) !== Ht;
      var d = ov(a, i, o);
      if (Bs = !1, eh && (d = lo(
        t,
        a,
        i,
        o
      )), f) {
        He(!0);
        try {
          d = lo(
            t,
            a,
            i,
            o
          );
        } finally {
          He(!1);
        }
      }
      return Mf(e, t), d;
    }
    function Mf(e, t) {
      t._debugHookTypes = In, t.dependencies === null ? Cc !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: Cc
      }) : t.dependencies._debugThenableState = Cc, q.H = X0;
      var a = At !== null && At.next !== null;
      if (ko = 0, In = j = rl = At = Me = null, Hc = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), G0 = !1, Qy = 0, Cc = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || wl || (e = e.dependencies, e !== null && Ku(e) && (wl = !0)), j0 ? (j0 = !1, e = !0) : e = !1, e && (t = le(t) || "Unknown", Db.has(t) || uv.has(t) || (Db.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function lo(e, t, a, i) {
      Me = e;
      var o = 0;
      do {
        if (eh && (Cc = null), Qy = 0, eh = !1, o >= y2)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, Zy = !1, rl = At = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        Hc = -1, q.H = Cb, f = ov(t, a, i);
      } while (eh);
      return f;
    }
    function Ma() {
      var e = q.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? Ii(t) : t, e = e.useState()[0], (At !== null ? At.memoizedState : null) !== e && (Me.flags |= 1024), t;
    }
    function Wl() {
      var e = V0 !== 0;
      return V0 = 0, e;
    }
    function du(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Hu) !== Ht ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function en(e) {
      if (G0) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        G0 = !1;
      }
      ko = 0, In = rl = At = Me = null, Hc = -1, j = null, eh = !1, Qy = V0 = 0, Cc = null;
    }
    function jt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return rl === null ? Me.memoizedState = rl = e : rl = rl.next = e, rl;
    }
    function Pe() {
      if (At === null) {
        var e = Me.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = At.next;
      var t = rl === null ? Me.memoizedState : rl.next;
      if (t !== null)
        rl = t, At = e;
      else {
        if (e === null)
          throw Me.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        At = e, e = {
          memoizedState: At.memoizedState,
          baseState: At.baseState,
          baseQueue: At.baseQueue,
          queue: At.queue,
          next: null
        }, rl === null ? Me.memoizedState = rl = e : rl = rl.next = e;
      }
      return rl;
    }
    function pr() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Ii(e) {
      var t = Qy;
      return Qy += 1, Cc === null && (Cc = Fh()), e = Oa(Cc, e, t), t = Me, (rl === null ? t.memoizedState : rl.next) === null && (t = t.alternate, q.H = t !== null && t.memoizedState !== null ? cv : iv), e;
    }
    function Tn(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Ii(e);
        if (e.$$typeof === ja) return zt(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function kt(e) {
      var t = null, a = Me.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = Me.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = pr(), Me.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || Zy)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = g0;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function nt(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function at(e, t, a) {
      var i = jt();
      if (a !== void 0) {
        var o = a(t);
        if (Bs) {
          He(!0);
          try {
            a(t);
          } finally {
            He(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = om.bind(
        null,
        Me,
        e
      ), [i.memoizedState, e];
    }
    function Ua(e) {
      var t = Pe();
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
        var h = d = null, g = null, v = t, w = !1;
        do {
          var Y = v.lane & -536870913;
          if (Y !== v.lane ? (Ie & Y) === Y : (ko & Y) === Y) {
            var C = v.revertLane;
            if (C === 0)
              g !== null && (g = g.next = {
                lane: 0,
                revertLane: 0,
                action: v.action,
                hasEagerState: v.hasEagerState,
                eagerState: v.eagerState,
                next: null
              }), Y === Hs && (w = !0);
            else if ((ko & C) === C) {
              v = v.next, C === Hs && (w = !0);
              continue;
            } else
              Y = {
                lane: 0,
                revertLane: v.revertLane,
                action: v.action,
                hasEagerState: v.hasEagerState,
                eagerState: v.eagerState,
                next: null
              }, g === null ? (h = g = Y, d = f) : g = g.next = Y, Me.lanes |= C, $o |= C;
            Y = v.action, Bs && a(f, Y), f = v.hasEagerState ? v.eagerState : a(f, Y);
          } else
            C = {
              lane: Y,
              revertLane: v.revertLane,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }, g === null ? (h = g = C, d = f) : g = g.next = C, Me.lanes |= Y, $o |= Y;
          v = v.next;
        } while (v !== null && v !== t);
        if (g === null ? d = f : g.next = h, !Sa(f, e.memoizedState) && (wl = !0, w && (a = Fd, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = g, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function Pi(e) {
      var t = Pe(), a = t.queue;
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
      var i = Me, o = jt();
      if (ct) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        Pd || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), Pd = !0);
      } else {
        if (f = t(), Pd || (a = t(), Sa(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Pd = !0)), Rt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (Ie & 124) !== 0 || em(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, br(
        no.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, An(
        Fn | xl,
        li(),
        ao.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function Uf(e, t, a) {
      var i = Me, o = Pe(), f = ct;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !Pd) {
        var d = t();
        Sa(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Pd = !0);
      }
      (d = !Sa(
        (At || o).memoizedState,
        a
      )) && (o.memoizedState = a, wl = !0), o = o.queue;
      var h = no.bind(null, i, o, e);
      if (Pt(2048, xl, h, [e]), o.getSnapshot !== t || d || rl !== null && rl.memoizedState.tag & Fn) {
        if (i.flags |= 2048, An(
          Fn | xl,
          li(),
          ao.bind(
            null,
            i,
            o,
            a,
            t
          ),
          null
        ), Rt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (ko & 124) !== 0 || em(i, t, a);
      }
      return a;
    }
    function em(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Me.updateQueue, t === null ? (t = pr(), Me.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function ao(e, t, a, i) {
      t.value = a, t.getSnapshot = i, tm(t) && uo(e);
    }
    function no(e, t, a) {
      return a(function() {
        tm(t) && uo(e);
      });
    }
    function tm(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !Sa(e, a);
      } catch {
        return !0;
      }
    }
    function uo(e) {
      var t = Jl(e, 2);
      t !== null && Gt(t, e, 2);
    }
    function Cf(e) {
      var t = jt();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), Bs) {
          He(!0);
          try {
            a();
          } finally {
            He(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: nt,
        lastRenderedState: e
      }, t;
    }
    function mu(e) {
      e = Cf(e);
      var t = e.queue, a = fo.bind(null, Me, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function tn(e) {
      var t = jt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Dr.bind(
        null,
        Me,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function yu(e, t) {
      var a = Pe();
      return En(a, At, e, t);
    }
    function En(e, t, a, i) {
      return e.baseState = a, Ca(
        e,
        At,
        typeof i == "function" ? i : nt
      );
    }
    function gr(e, t) {
      var a = Pe();
      return At !== null ? En(a, At, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function lm(e, t, a, i, o) {
      if (jf(e))
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
        q.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, io(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function io(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = q.T, d = {};
        q.T = d, q.T._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var h = a(o, i), g = q.S;
          g !== null && g(d, h), Hf(e, t, h);
        } catch (v) {
          il(e, t, v);
        } finally {
          q.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), Hf(e, t, d);
        } catch (v) {
          il(e, t, v);
        }
    }
    function Hf(e, t, a) {
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
      t.status = "fulfilled", t.value = a, wf(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, io(e, a)));
    }
    function il(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, wf(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function wf(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function am(e, t) {
      return t;
    }
    function co(e, t) {
      if (ct) {
        var a = Rt.formState;
        if (a !== null) {
          e: {
            var i = Me;
            if (ct) {
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
              pn(i);
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
        lastRenderedReducer: am,
        lastRenderedState: t
      }, a.queue = i, a = fo.bind(
        null,
        Me,
        i
      ), i.dispatch = a, i = Cf(!1), f = Dr.bind(
        null,
        Me,
        !1,
        i.queue
      ), i = jt(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = lm.bind(
        null,
        Me,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function vr(e) {
      var t = Pe();
      return Lp(t, At, e);
    }
    function Lp(e, t, a) {
      if (t = Ca(
        e,
        t,
        am
      )[0], e = Ua(nt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = Ii(t);
        } catch (d) {
          throw d === Xy ? q0 : d;
        }
      else i = t;
      t = Pe();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (Me.flags |= 2048, An(
        Fn | xl,
        li(),
        It.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function It(e, t) {
      e.action = t;
    }
    function oo(e) {
      var t = Pe(), a = At;
      if (a !== null)
        return Lp(t, a, e);
      Pe(), t = t.memoizedState, a = Pe();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function An(e, t, a, i) {
      return e = {
        tag: e,
        create: a,
        deps: i,
        inst: t,
        next: null
      }, t = Me.updateQueue, t === null && (t = pr(), Me.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function li() {
      return { destroy: void 0, resource: void 0 };
    }
    function Nf(e) {
      var t = jt();
      return e = { current: e }, t.memoizedState = e;
    }
    function Ha(e, t, a, i) {
      var o = jt();
      i = i === void 0 ? null : i, Me.flags |= e, o.memoizedState = An(
        Fn | t,
        li(),
        a,
        i
      );
    }
    function Pt(e, t, a, i) {
      var o = Pe();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      At !== null && i !== null && Pu(i, At.memoizedState.deps) ? o.memoizedState = An(t, f, a, i) : (Me.flags |= e, o.memoizedState = An(
        Fn | t,
        f,
        a,
        i
      ));
    }
    function br(e, t) {
      (Me.mode & Hu) !== Ht && (Me.mode & hb) === Ht ? Ha(276826112, xl, e, t) : Ha(8390656, xl, e, t);
    }
    function Sr(e, t) {
      var a = 4194308;
      return (Me.mode & Hu) !== Ht && (a |= 134217728), Ha(a, Ql, e, t);
    }
    function Qp(e, t) {
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
    function Tr(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (Me.mode & Hu) !== Ht && (i |= 134217728), Ha(
        i,
        Ql,
        Qp.bind(null, t, e),
        a
      );
    }
    function xn(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, Pt(
        4,
        Ql,
        Qp.bind(null, t, e),
        a
      );
    }
    function Bf(e, t) {
      return jt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function ec(e, t) {
      var a = Pe();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && Pu(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function Er(e, t) {
      var a = jt();
      t = t === void 0 ? null : t;
      var i = e();
      if (Bs) {
        He(!0);
        try {
          e();
        } finally {
          He(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function ai(e, t) {
      var a = Pe();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && Pu(t, i[1]))
        return i[0];
      if (i = e(), Bs) {
        He(!0);
        try {
          e();
        } finally {
          He(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function Ar(e, t) {
      var a = jt();
      return zr(a, e, t);
    }
    function _f(e, t) {
      var a = Pe();
      return qf(
        a,
        At.memoizedState,
        e,
        t
      );
    }
    function xr(e, t) {
      var a = Pe();
      return At === null ? zr(a, e, t) : qf(
        a,
        At.memoizedState,
        e,
        t
      );
    }
    function zr(e, t, a) {
      return a === void 0 || (ko & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = e0(), Me.lanes |= e, $o |= e, a);
    }
    function qf(e, t, a, i) {
      return Sa(a, t) ? a : Id.current !== null ? (e = zr(e, a, i), Sa(e, t) || (wl = !0), e) : (ko & 42) === 0 ? (wl = !0, e.memoizedState = a) : (e = e0(), Me.lanes |= e, $o |= e, t);
    }
    function nm(e, t, a, i, o) {
      var f = xe.p;
      xe.p = f !== 0 && f < on ? f : on;
      var d = q.T, h = {};
      q.T = h, Dr(e, !1, t, a), h._updatedFibers = /* @__PURE__ */ new Set();
      try {
        var g = o(), v = q.S;
        if (v !== null && v(h, g), g !== null && typeof g == "object" && typeof g.then == "function") {
          var w = Gp(
            g,
            i
          );
          pu(
            e,
            t,
            w,
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
    function tc(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = um(e).queue;
      nm(
        e,
        o,
        t,
        ks,
        a === null ? de : function() {
          return im(e), a(i);
        }
      );
    }
    function um(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: ks,
        baseState: ks,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: nt,
          lastRenderedState: ks
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
          lastRenderedReducer: nt,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function im(e) {
      q.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = um(e).next.queue;
      pu(
        e,
        t,
        {},
        ea(e)
      );
    }
    function zn() {
      var e = Cf(!1);
      return e = nm.bind(
        null,
        Me,
        e.queue,
        !0,
        !1
      ), jt().memoizedState = e, [!1, e];
    }
    function Rr() {
      var e = Ua(nt)[0], t = Pe().memoizedState;
      return [
        typeof e == "boolean" ? e : Ii(e),
        t
      ];
    }
    function Or() {
      var e = Pi(nt)[0], t = Pe().memoizedState;
      return [
        typeof e == "boolean" ? e : Ii(e),
        t
      ];
    }
    function Fl() {
      return zt(op);
    }
    function Rn() {
      var e = jt(), t = Rt.identifierPrefix;
      if (ct) {
        var a = Mc, i = Dc;
        a = (i & ~(1 << 32 - Cl(i) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = V0++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = m2++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    }
    function lc() {
      return jt().memoizedState = cm.bind(
        null,
        Me
      );
    }
    function cm(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = ea(a);
            e = bn(i);
            var o = Ia(a, e, i);
            o !== null && (Gt(o, a, i), Iu(o, a, i)), a = Rf(), t != null && o !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), e.payload = { cache: a };
            return;
        }
        a = a.return;
      }
    }
    function om(e, t, a) {
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
      jf(e) ? ac(t, o) : (o = _h(e, t, o, i), o !== null && (Gt(o, e, i), Yf(o, t, i))), Ui(e, i);
    }
    function fo(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = ea(e), pu(e, t, a, i), Ui(e, i);
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
      if (jf(e)) ac(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = q.H;
          q.H = Nu;
          try {
            var h = t.lastRenderedState, g = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = g, Sa(g, h))
              return or(e, t, o, 0), Rt === null && Tf(), !1;
          } catch {
          } finally {
            q.H = d;
          }
        }
        if (a = _h(e, t, o, i), a !== null)
          return Gt(a, e, i), Yf(a, t, i), !0;
      }
      return !1;
    }
    function Dr(e, t, a, i) {
      if (q.T === null && Hs === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: Ym(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, jf(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = _h(
          e,
          a,
          i,
          2
        ), t !== null && Gt(t, e, 2);
      Ui(e, 2);
    }
    function jf(e) {
      var t = e.alternate;
      return e === Me || t !== null && t === Me;
    }
    function ac(e, t) {
      eh = G0 = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Yf(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, Vc(e, a);
      }
    }
    function cl(e) {
      var t = Ze;
      return e != null && (Ze = t === null ? e : t.concat(e)), t;
    }
    function so(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = xf(e, a.mode, 0), t._debugInfo = Ze, t.return = a), ie(
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
    function ro(e) {
      var t = ky;
      return ky += 1, th === null && (th = Fh()), Oa(th, e, t);
    }
    function wa(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function we(e, t) {
      throw t.$$typeof === ys ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function st(e, t) {
      var a = le(e) || "Component";
      kb[a] || (kb[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
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
      var a = le(e) || "Component";
      Jb[a] || (Jb[a] = !0, t = String(t), e.tag === 3 ? console.error(
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
    function Gf(e) {
      function t(T, E) {
        if (e) {
          var x = T.deletions;
          x === null ? (T.deletions = [E], T.flags |= 16) : x.push(E);
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
        return T = yn(T, E), T.index = 0, T.sibling = null, T;
      }
      function f(T, E, x) {
        return T.index = x, e ? (x = T.alternate, x !== null ? (x = x.index, x < E ? (T.flags |= 67108866, E) : x) : (T.flags |= 67108866, E)) : (T.flags |= 1048576, E);
      }
      function d(T) {
        return e && T.alternate === null && (T.flags |= 67108866), T;
      }
      function h(T, E, x, X) {
        return E === null || E.tag !== 6 ? (E = ku(
          x,
          T.mode,
          X
        ), E.return = T, E._debugOwner = T, E._debugTask = T._debugTask, E._debugInfo = Ze, E) : (E = o(E, x), E.return = T, E._debugInfo = Ze, E);
      }
      function g(T, E, x, X) {
        var I = x.type;
        return I === Ne ? (E = w(
          T,
          E,
          x.props.children,
          X,
          x.key
        ), so(x, E, T), E) : E !== null && (E.elementType === I || _p(E, x) || typeof I == "object" && I !== null && I.$$typeof === va && Jo(I) === E.type) ? (E = o(E, x.props), wa(E, x), E.return = T, E._debugOwner = x._owner, E._debugInfo = Ze, E) : (E = xf(x, T.mode, X), wa(E, x), E.return = T, E._debugInfo = Ze, E);
      }
      function v(T, E, x, X) {
        return E === null || E.tag !== 4 || E.stateNode.containerInfo !== x.containerInfo || E.stateNode.implementation !== x.implementation ? (E = Gh(x, T.mode, X), E.return = T, E._debugInfo = Ze, E) : (E = o(E, x.children || []), E.return = T, E._debugInfo = Ze, E);
      }
      function w(T, E, x, X, I) {
        return E === null || E.tag !== 7 ? (E = Zu(
          x,
          T.mode,
          X,
          I
        ), E.return = T, E._debugOwner = T, E._debugTask = T._debugTask, E._debugInfo = Ze, E) : (E = o(E, x), E.return = T, E._debugInfo = Ze, E);
      }
      function Y(T, E, x) {
        if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
          return E = ku(
            "" + E,
            T.mode,
            x
          ), E.return = T, E._debugOwner = T, E._debugTask = T._debugTask, E._debugInfo = Ze, E;
        if (typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case pi:
              return x = xf(
                E,
                T.mode,
                x
              ), wa(x, E), x.return = T, T = cl(E._debugInfo), x._debugInfo = Ze, Ze = T, x;
            case Ec:
              return E = Gh(
                E,
                T.mode,
                x
              ), E.return = T, E._debugInfo = Ze, E;
            case va:
              var X = cl(E._debugInfo);
              return E = Jo(E), T = Y(T, E, x), Ze = X, T;
          }
          if (De(E) || ot(E))
            return x = Zu(
              E,
              T.mode,
              x,
              null
            ), x.return = T, x._debugOwner = T, x._debugTask = T._debugTask, T = cl(E._debugInfo), x._debugInfo = Ze, Ze = T, x;
          if (typeof E.then == "function")
            return X = cl(E._debugInfo), T = Y(
              T,
              ro(E),
              x
            ), Ze = X, T;
          if (E.$$typeof === ja)
            return Y(
              T,
              zf(T, E),
              x
            );
          we(T, E);
        }
        return typeof E == "function" && st(T, E), typeof E == "symbol" && Bt(T, E), null;
      }
      function C(T, E, x, X) {
        var I = E !== null ? E.key : null;
        if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
          return I !== null ? null : h(T, E, "" + x, X);
        if (typeof x == "object" && x !== null) {
          switch (x.$$typeof) {
            case pi:
              return x.key === I ? (I = cl(x._debugInfo), T = g(
                T,
                E,
                x,
                X
              ), Ze = I, T) : null;
            case Ec:
              return x.key === I ? v(T, E, x, X) : null;
            case va:
              return I = cl(x._debugInfo), x = Jo(x), T = C(
                T,
                E,
                x,
                X
              ), Ze = I, T;
          }
          if (De(x) || ot(x))
            return I !== null ? null : (I = cl(x._debugInfo), T = w(
              T,
              E,
              x,
              X,
              null
            ), Ze = I, T);
          if (typeof x.then == "function")
            return I = cl(x._debugInfo), T = C(
              T,
              E,
              ro(x),
              X
            ), Ze = I, T;
          if (x.$$typeof === ja)
            return C(
              T,
              E,
              zf(T, x),
              X
            );
          we(T, x);
        }
        return typeof x == "function" && st(T, x), typeof x == "symbol" && Bt(T, x), null;
      }
      function V(T, E, x, X, I) {
        if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint")
          return T = T.get(x) || null, h(E, T, "" + X, I);
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case pi:
              return x = T.get(
                X.key === null ? x : X.key
              ) || null, T = cl(X._debugInfo), E = g(
                E,
                x,
                X,
                I
              ), Ze = T, E;
            case Ec:
              return T = T.get(
                X.key === null ? x : X.key
              ) || null, v(E, T, X, I);
            case va:
              var Be = cl(X._debugInfo);
              return X = Jo(X), E = V(
                T,
                E,
                x,
                X,
                I
              ), Ze = Be, E;
          }
          if (De(X) || ot(X))
            return x = T.get(x) || null, T = cl(X._debugInfo), E = w(
              E,
              x,
              X,
              I,
              null
            ), Ze = T, E;
          if (typeof X.then == "function")
            return Be = cl(X._debugInfo), E = V(
              T,
              E,
              x,
              ro(X),
              I
            ), Ze = Be, E;
          if (X.$$typeof === ja)
            return V(
              T,
              E,
              x,
              zf(E, X),
              I
            );
          we(E, X);
        }
        return typeof X == "function" && st(E, X), typeof X == "symbol" && Bt(E, X), null;
      }
      function ce(T, E, x, X) {
        if (typeof x != "object" || x === null) return X;
        switch (x.$$typeof) {
          case pi:
          case Ec:
            te(T, E, x);
            var I = x.key;
            if (typeof I != "string") break;
            if (X === null) {
              X = /* @__PURE__ */ new Set(), X.add(I);
              break;
            }
            if (!X.has(I)) {
              X.add(I);
              break;
            }
            ie(E, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                I
              );
            });
            break;
          case va:
            x = Jo(x), ce(T, E, x, X);
        }
        return X;
      }
      function ze(T, E, x, X) {
        for (var I = null, Be = null, oe = null, _e = E, Ye = E = 0, wt = null; _e !== null && Ye < x.length; Ye++) {
          _e.index > Ye ? (wt = _e, _e = null) : wt = _e.sibling;
          var al = C(
            T,
            _e,
            x[Ye],
            X
          );
          if (al === null) {
            _e === null && (_e = wt);
            break;
          }
          I = ce(
            T,
            al,
            x[Ye],
            I
          ), e && _e && al.alternate === null && t(T, _e), E = f(al, E, Ye), oe === null ? Be = al : oe.sibling = al, oe = al, _e = wt;
        }
        if (Ye === x.length)
          return a(T, _e), ct && ki(T, Ye), Be;
        if (_e === null) {
          for (; Ye < x.length; Ye++)
            _e = Y(T, x[Ye], X), _e !== null && (I = ce(
              T,
              _e,
              x[Ye],
              I
            ), E = f(
              _e,
              E,
              Ye
            ), oe === null ? Be = _e : oe.sibling = _e, oe = _e);
          return ct && ki(T, Ye), Be;
        }
        for (_e = i(_e); Ye < x.length; Ye++)
          wt = V(
            _e,
            T,
            Ye,
            x[Ye],
            X
          ), wt !== null && (I = ce(
            T,
            wt,
            x[Ye],
            I
          ), e && wt.alternate !== null && _e.delete(
            wt.key === null ? Ye : wt.key
          ), E = f(
            wt,
            E,
            Ye
          ), oe === null ? Be = wt : oe.sibling = wt, oe = wt);
        return e && _e.forEach(function(jc) {
          return t(T, jc);
        }), ct && ki(T, Ye), Be;
      }
      function Ot(T, E, x, X) {
        if (x == null)
          throw Error("An iterable object provided no iterator.");
        for (var I = null, Be = null, oe = E, _e = E = 0, Ye = null, wt = null, al = x.next(); oe !== null && !al.done; _e++, al = x.next()) {
          oe.index > _e ? (Ye = oe, oe = null) : Ye = oe.sibling;
          var jc = C(T, oe, al.value, X);
          if (jc === null) {
            oe === null && (oe = Ye);
            break;
          }
          wt = ce(
            T,
            jc,
            al.value,
            wt
          ), e && oe && jc.alternate === null && t(T, oe), E = f(jc, E, _e), Be === null ? I = jc : Be.sibling = jc, Be = jc, oe = Ye;
        }
        if (al.done)
          return a(T, oe), ct && ki(T, _e), I;
        if (oe === null) {
          for (; !al.done; _e++, al = x.next())
            oe = Y(T, al.value, X), oe !== null && (wt = ce(
              T,
              oe,
              al.value,
              wt
            ), E = f(
              oe,
              E,
              _e
            ), Be === null ? I = oe : Be.sibling = oe, Be = oe);
          return ct && ki(T, _e), I;
        }
        for (oe = i(oe); !al.done; _e++, al = x.next())
          Ye = V(
            oe,
            T,
            _e,
            al.value,
            X
          ), Ye !== null && (wt = ce(
            T,
            Ye,
            al.value,
            wt
          ), e && Ye.alternate !== null && oe.delete(
            Ye.key === null ? _e : Ye.key
          ), E = f(
            Ye,
            E,
            _e
          ), Be === null ? I = Ye : Be.sibling = Ye, Be = Ye);
        return e && oe.forEach(function(V2) {
          return t(T, V2);
        }), ct && ki(T, _e), I;
      }
      function et(T, E, x, X) {
        if (typeof x == "object" && x !== null && x.type === Ne && x.key === null && (so(x, null, T), x = x.props.children), typeof x == "object" && x !== null) {
          switch (x.$$typeof) {
            case pi:
              var I = cl(x._debugInfo);
              e: {
                for (var Be = x.key; E !== null; ) {
                  if (E.key === Be) {
                    if (Be = x.type, Be === Ne) {
                      if (E.tag === 7) {
                        a(
                          T,
                          E.sibling
                        ), X = o(
                          E,
                          x.props.children
                        ), X.return = T, X._debugOwner = x._owner, X._debugInfo = Ze, so(x, X, T), T = X;
                        break e;
                      }
                    } else if (E.elementType === Be || _p(
                      E,
                      x
                    ) || typeof Be == "object" && Be !== null && Be.$$typeof === va && Jo(Be) === E.type) {
                      a(
                        T,
                        E.sibling
                      ), X = o(E, x.props), wa(X, x), X.return = T, X._debugOwner = x._owner, X._debugInfo = Ze, T = X;
                      break e;
                    }
                    a(T, E);
                    break;
                  } else t(T, E);
                  E = E.sibling;
                }
                x.type === Ne ? (X = Zu(
                  x.props.children,
                  T.mode,
                  X,
                  x.key
                ), X.return = T, X._debugOwner = T, X._debugTask = T._debugTask, X._debugInfo = Ze, so(x, X, T), T = X) : (X = xf(
                  x,
                  T.mode,
                  X
                ), wa(X, x), X.return = T, X._debugInfo = Ze, T = X);
              }
              return T = d(T), Ze = I, T;
            case Ec:
              e: {
                for (I = x, x = I.key; E !== null; ) {
                  if (E.key === x)
                    if (E.tag === 4 && E.stateNode.containerInfo === I.containerInfo && E.stateNode.implementation === I.implementation) {
                      a(
                        T,
                        E.sibling
                      ), X = o(
                        E,
                        I.children || []
                      ), X.return = T, T = X;
                      break e;
                    } else {
                      a(T, E);
                      break;
                    }
                  else t(T, E);
                  E = E.sibling;
                }
                X = Gh(
                  I,
                  T.mode,
                  X
                ), X.return = T, T = X;
              }
              return d(T);
            case va:
              return I = cl(x._debugInfo), x = Jo(x), T = et(
                T,
                E,
                x,
                X
              ), Ze = I, T;
          }
          if (De(x))
            return I = cl(x._debugInfo), T = ze(
              T,
              E,
              x,
              X
            ), Ze = I, T;
          if (ot(x)) {
            if (I = cl(x._debugInfo), Be = ot(x), typeof Be != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var oe = Be.call(x);
            return oe === x ? (T.tag !== 0 || Object.prototype.toString.call(T.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(oe) !== "[object Generator]") && (Qb || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), Qb = !0) : x.entries !== Be || sv || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), sv = !0), T = Ot(
              T,
              E,
              oe,
              X
            ), Ze = I, T;
          }
          if (typeof x.then == "function")
            return I = cl(x._debugInfo), T = et(
              T,
              E,
              ro(x),
              X
            ), Ze = I, T;
          if (x.$$typeof === ja)
            return et(
              T,
              E,
              zf(T, x),
              X
            );
          we(T, x);
        }
        return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (I = "" + x, E !== null && E.tag === 6 ? (a(
          T,
          E.sibling
        ), X = o(E, I), X.return = T, T = X) : (a(T, E), X = ku(
          I,
          T.mode,
          X
        ), X.return = T, X._debugOwner = T, X._debugTask = T._debugTask, X._debugInfo = Ze, T = X), d(T)) : (typeof x == "function" && st(T, x), typeof x == "symbol" && Bt(T, x), a(T, E));
      }
      return function(T, E, x, X) {
        var I = Ze;
        Ze = null;
        try {
          ky = 0;
          var Be = et(
            T,
            E,
            x,
            X
          );
          return th = null, Be;
        } catch (wt) {
          if (wt === Xy || wt === q0) throw wt;
          var oe = pe(29, wt, null, T.mode);
          oe.lanes = X, oe.return = T;
          var _e = oe._debugInfo = Ze;
          if (oe._debugOwner = T._debugOwner, oe._debugTask = T._debugTask, _e != null) {
            for (var Ye = _e.length - 1; 0 <= Ye; Ye--)
              if (typeof _e[Ye].stack == "string") {
                oe._debugOwner = _e[Ye], oe._debugTask = _e[Ye].debugTask;
                break;
              }
          }
          return oe;
        } finally {
          Ze = I;
        }
      };
    }
    function ha(e) {
      var t = e.alternate;
      Ae(
        zl,
        zl.current & ah,
        e
      ), Ae(Pn, e, e), Oi === null && (t === null || Id.current !== null || t.memoizedState !== null) && (Oi = e);
    }
    function ni(e) {
      if (e.tag === 22) {
        if (Ae(zl, zl.current, e), Ae(Pn, e, e), Oi === null) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (Oi = e);
        }
      } else ln(e);
    }
    function ln(e) {
      Ae(zl, zl.current, e), Ae(
        Pn,
        Pn.current,
        e
      );
    }
    function ma(e) {
      Fe(Pn, e), Oi === e && (Oi = null), Fe(zl, e);
    }
    function gu(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || a.data === Bc || Yn(a)))
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
    function fm(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        u1.has(t) || (u1.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function _t(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & ca) {
        He(!0);
        try {
          f = a(i, o);
        } finally {
          He(!1);
        }
      }
      f === void 0 && (t = je(t) || "Component", t1.has(t) || (t1.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : Ge({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Mr(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & ca) {
          He(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            He(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          je(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Sf(a, i) || !Sf(o, f) : !0;
    }
    function Ur(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = le(e) || "Component", Wb.has(e) || (Wb.add(e), console.error(
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
        a === t && (a = Ge({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function sm(e) {
      dv(e), console.warn(
        `%s

%s
`,
        nh ? "An error occurred in the <" + nh + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function Zp(e) {
      var t = nh ? "The above error occurred in the <" + nh + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((hv || "Anonymous") + ".");
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
          q1 + e[0],
          j1,
          cg + i + cg,
          Y1
        ) : e.splice(
          0,
          0,
          q1,
          j1,
          cg + i + cg,
          Y1
        ), e.unshift(console), i = Y2.apply(console.error, e), i();
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
    function Cr(e) {
      dv(e);
    }
    function ho(e, t) {
      try {
        nh = t.source ? le(t.source) : null, hv = null;
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
    function Hr(e, t, a) {
      try {
        nh = a.source ? le(a.source) : null, hv = le(t);
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
      return a = bn(a), a.tag = lv, a.payload = { element: null }, a.callback = function() {
        ie(t.source, ho, e, t);
      }, a;
    }
    function Yt(e) {
      return e = bn(e), e.tag = lv, e;
    }
    function Vf(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          qp(a), ie(
            i.source,
            Hr,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        qp(a), ie(
          i.source,
          Hr,
          t,
          a,
          i
        ), typeof o != "function" && (Fo === null ? Fo = /* @__PURE__ */ new Set([this]) : Fo.add(this)), p2(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          le(a) || "Unknown"
        );
      });
    }
    function Xf(e, t, a, i, o) {
      if (a.flags |= 32768, Zt && To(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && pl(
          t,
          a,
          o,
          !0
        ), ct && (Uc = !0), a = Pn.current, a !== null) {
          switch (a.tag) {
            case 13:
              return Oi === null ? Ir() : a.alternate === null && $t === Nc && ($t = gv), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === tv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), Bm(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === tv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), Bm(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return Bm(e, i, o), Ir(), !1;
      }
      if (ct)
        return Uc = !0, t = Pn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== Fg && Wc(
          ra(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== Fg && Wc(
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
        ), Ic(e, o), $t !== _s && ($t = oh)), !1;
      var f = ra(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (ep === null ? ep = [f] : ep.push(f), $t !== _s && ($t = oh), t === null) return !0;
      i = ra(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = Dl(
              a.stateNode,
              i,
              e
            ), Ic(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Fo === null || !Fo.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Yt(o), Vf(
                o,
                e,
                a,
                i
              ), Ic(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function Jt(e, t, a, i) {
      t.child = e === null ? Kb(t, null, a, i) : lh(
        t,
        e.child,
        a,
        i
      );
    }
    function wr(e, t, a, i, o) {
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
      ), h = Wl(), hl(), e !== null && !wl ? (du(e, t, o), Dn(e, t, o)) : (ct && h && rr(t), t.flags |= 1, Jt(e, t, i, o), t.child);
    }
    function On(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !jh(f) && f.defaultProps === void 0 && a.compare === null ? (a = Zi(f), t.tag = 15, t.type = a, qr(t, f), Lf(
          e,
          t,
          a,
          i,
          o
        )) : (e = sr(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !Lr(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Sf, a(d, i) && e.ref === t.ref)
          return Dn(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = yn(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Lf(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Sf(f, i) && e.ref === t.ref && t.type === e.type)
          if (wl = !1, t.pendingProps = i = f, Lr(e, o))
            (e.flags & 131072) !== 0 && (wl = !0);
          else
            return t.lanes = e.lanes, Dn(e, t, o);
      }
      return _r(
        e,
        t,
        a,
        i,
        o
      );
    }
    function Nr(e, t, a) {
      var i = t.pendingProps, o = i.children, f = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (i = f !== null ? f.baseLanes | a : a, e !== null) {
            for (o = t.child = e.child, f = 0; o !== null; )
              f = f | o.lanes | o.childLanes, o = o.sibling;
            t.childLanes = f & ~i;
          } else t.childLanes = 0, t.child = null;
          return Br(
            e,
            t,
            i,
            a
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && yr(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? $l(t, f) : Df(t), ni(t);
        else
          return t.lanes = t.childLanes = 536870912, Br(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a
          );
      } else
        f !== null ? (yr(t, f.cachePool), $l(t, f), ln(t), t.memoizedState = null) : (e !== null && yr(t, null), Df(t), ln(t));
      return Jt(e, t, o, a), t.child;
    }
    function Br(e, t, a, i) {
      var o = Wh();
      return o = o === null ? null : {
        parent: Al._currentValue,
        pool: o
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: o
      }, e !== null && yr(t, null), Df(t), ni(t), e !== null && pl(e, t, i, !0), null;
    }
    function Qf(e, t) {
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
    function _r(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = je(a) || "Unknown";
        c1[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), c1[f] = !0);
      }
      return t.mode & ca && wu.recordLegacyContextWarning(
        t,
        null
      ), e === null && (qr(t, t.type), a.contextTypes && (f = je(a) || "Unknown", f1[f] || (f1[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), $u(t), qt(t), a = ei(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = Wl(), hl(), e !== null && !wl ? (du(e, t, o), Dn(e, t, o)) : (ct && i && rr(t), t.flags |= 1, Jt(e, t, a, o), t.child);
    }
    function rm(e, t, a, i, o, f) {
      return $u(t), qt(t), Hc = -1, Zy = e !== null && e.type !== t.type, t.updateQueue = null, a = lo(
        t,
        i,
        a,
        o
      ), Mf(e, t), i = Wl(), hl(), e !== null && !wl ? (du(e, t, f), Dn(e, t, f)) : (ct && i && rr(t), t.flags |= 1, Jt(e, t, a, f), t.child);
    }
    function dm(e, t, a, i, o) {
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
          if (t.lanes |= h, d = Rt, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Yt(h), Vf(
            h,
            d,
            t,
            ra(f, t)
          ), Ic(t, h);
      }
      if ($u(t), t.stateNode === null) {
        if (d = Qo, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== ja) && !n1.has(a) && (n1.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === zd ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          je(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = zt(f)), f = new a(i, d), t.mode & ca) {
          He(!0);
          try {
            f = new a(i, d);
          } finally {
            He(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = rv, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = $b, typeof a.getDerivedStateFromProps == "function" && d === null && (d = je(a) || "Component", Fb.has(d) || (Fb.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var g = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? g = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (g = "UNSAFE_componentWillUpdate"), d !== null || h !== null || g !== null) {
            f = je(a) || "Component";
            var v = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Pb.has(f) || (Pb.add(f), console.error(
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
              g !== null ? `
  ` + g : ""
            ));
          }
        }
        f = t.stateNode, d = je(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
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
        ), a.childContextTypes && !a1.has(a) && (a1.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !l1.has(a) && (l1.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          je(a) || "A pure component"
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
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || Ib.has(a) || (Ib.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          je(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || De(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, Kl(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? zt(d) : Qo, f.state === i && (d = je(a) || "Component", e1.has(d) || (e1.add(d), console.error(
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
          le(t) || "Component"
        ), rv.enqueueReplaceState(
          f,
          f.state,
          null
        )), Pc(t, i, f, o), Sn(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Hu) !== Ht && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var w = t.memoizedProps;
        h = ui(a, w), f.props = h;
        var Y = f.context;
        g = a.contextType, d = Qo, typeof g == "object" && g !== null && (d = zt(g)), v = a.getDerivedStateFromProps, g = typeof v == "function" || typeof f.getSnapshotBeforeUpdate == "function", w = t.pendingProps !== w, g || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (w || Y !== d) && Ur(
          t,
          f,
          i,
          d
        ), Zo = !1;
        var C = t.memoizedState;
        f.state = C, Pc(t, i, f, o), Sn(), Y = t.memoizedState, w || C !== Y || Zo ? (typeof v == "function" && (_t(
          t,
          a,
          v,
          i
        ), Y = t.memoizedState), (h = Zo || Mr(
          t,
          a,
          h,
          i,
          C,
          Y,
          d
        )) ? (g || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Hu) !== Ht && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Hu) !== Ht && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = Y), f.props = i, f.state = Y, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Hu) !== Ht && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, Fu(e, t), d = t.memoizedProps, g = ui(a, d), f.props = g, v = t.pendingProps, C = f.context, Y = a.contextType, h = Qo, typeof Y == "object" && Y !== null && (h = zt(Y)), w = a.getDerivedStateFromProps, (Y = typeof w == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== v || C !== h) && Ur(
          t,
          f,
          i,
          h
        ), Zo = !1, C = t.memoizedState, f.state = C, Pc(t, i, f, o), Sn();
        var V = t.memoizedState;
        d !== v || C !== V || Zo || e !== null && e.dependencies !== null && Ku(e.dependencies) ? (typeof w == "function" && (_t(
          t,
          a,
          w,
          i
        ), V = t.memoizedState), (g = Zo || Mr(
          t,
          a,
          g,
          i,
          C,
          V,
          h
        ) || e !== null && e.dependencies !== null && Ku(e.dependencies)) ? (Y || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, V, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          V,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = V), f.props = i, f.state = V, f.context = h, f = g) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, Qf(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, sf(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, Va = -1;
        else {
          if (qt(t), a = Nb(h), t.mode & ca) {
            He(!0);
            try {
              Nb(h);
            } finally {
              He(!1);
            }
          }
          hl();
        }
        t.flags |= 1, e !== null && d ? (t.child = lh(
          t,
          e.child,
          null,
          o
        ), t.child = lh(
          t,
          null,
          a,
          o
        )) : Jt(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Dn(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (uh || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        le(t) || "a component"
      ), uh = !0), e;
    }
    function hm(e, t, a, i) {
      return Ki(), t.flags |= 256, Jt(e, t, a, i), t.child;
    }
    function qr(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = je(t) || "Unknown", s1[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), s1[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = je(t) || "Unknown", o1[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), o1[t] = !0));
    }
    function Zf(e) {
      return { baseLanes: e, cachePool: Vp() };
    }
    function jr(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= rn), e;
    }
    function kp(e, t, a) {
      var i, o = t.pendingProps;
      J(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (zl.current & Jy) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (ct) {
          if (f ? ha(t) : ln(t), ct) {
            var h = Kt, g;
            if (!(g = !h)) {
              e: {
                var v = h;
                for (g = zi; v.nodeType !== 8; ) {
                  if (!g) {
                    g = null;
                    break e;
                  }
                  if (v = Sl(v.nextSibling), v === null) {
                    g = null;
                    break e;
                  }
                }
                g = v;
              }
              g !== null ? (Ka(), t.memoizedState = {
                dehydrated: g,
                treeContext: Ms !== null ? { id: Dc, overflow: Mc } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, v = pe(18, null, null, Ht), v.stateNode = g, v.return = t, t.child = v, Ta = t, Kt = null, g = !0) : g = !1, g = !g;
            }
            g && (Vh(
              t,
              h
            ), pn(t));
          }
          if (h = t.memoizedState, h !== null && (h = h.dehydrated, h !== null))
            return Yn(h) ? t.lanes = 32 : t.lanes = 536870912, null;
          ma(t);
        }
        return h = o.children, o = o.fallback, f ? (ln(t), f = t.mode, h = kf(
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
        ), h.return = t, o.return = t, h.sibling = o, t.child = h, f = t.child, f.memoizedState = Zf(a), f.childLanes = jr(
          e,
          i,
          a
        ), t.memoizedState = yv, o) : (ha(t), Yr(
          t,
          h
        ));
      }
      var w = e.memoizedState;
      if (w !== null && (h = w.dehydrated, h !== null)) {
        if (d)
          t.flags & 256 ? (ha(t), t.flags &= -257, t = Gr(
            e,
            t,
            a
          )) : t.memoizedState !== null ? (ln(t), t.child = e.child, t.flags |= 128, t = null) : (ln(t), f = o.fallback, h = t.mode, o = kf(
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
          ), f.flags |= 2, o.return = t, f.return = t, o.sibling = f, t.child = o, lh(
            t,
            e.child,
            null,
            a
          ), o = t.child, o.memoizedState = Zf(a), o.childLanes = jr(
            e,
            i,
            a
          ), t.memoizedState = yv, t = f);
        else if (ha(t), ct && console.error(
          "We should not be hydrating here. This is a bug in React. Please file a bug."
        ), Yn(h)) {
          if (i = h.nextSibling && h.nextSibling.dataset, i) {
            g = i.dgst;
            var Y = i.msg;
            v = i.stck;
            var C = i.cstck;
          }
          h = Y, i = g, o = v, g = f = C, f = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), f.stack = o || "", f.digest = i, i = g === void 0 ? null : g, o = {
            value: f,
            source: null,
            stack: i
          }, typeof i == "string" && $g.set(
            f,
            o
          ), Wc(o), t = Gr(
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
          if (i = Rt, i !== null && (o = a & -a, o = (o & 42) !== 0 ? 1 : Bl(
            o
          ), o = (o & (i.suspendedLanes | a)) !== 0 ? 0 : o, o !== 0 && o !== w.retryLane))
            throw w.retryLane = o, Jl(
              e,
              o
            ), Gt(
              i,
              e,
              o
            ), i1;
          h.data === Bc || Ir(), t = Gr(
            e,
            t,
            a
          );
        } else
          h.data === Bc ? (t.flags |= 192, t.child = e.child, t = null) : (e = w.treeContext, Kt = Sl(
            h.nextSibling
          ), Ta = t, ct = !0, Us = null, Uc = !1, $n = null, zi = !1, e !== null && (Ka(), Jn[Kn++] = Dc, Jn[Kn++] = Mc, Jn[Kn++] = Ms, Dc = e.id, Mc = e.overflow, Ms = t), t = Yr(
            t,
            o.children
          ), t.flags |= 4096);
        return t;
      }
      return f ? (ln(t), f = o.fallback, h = t.mode, g = e.child, v = g.sibling, o = yn(
        g,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = g.subtreeFlags & 65011712, v !== null ? f = yn(
        v,
        f
      ) : (f = Zu(
        f,
        h,
        a,
        null
      ), f.flags |= 2), f.return = t, o.return = t, o.sibling = f, t.child = o, o = f, f = t.child, h = e.child.memoizedState, h === null ? h = Zf(a) : (g = h.cachePool, g !== null ? (v = Al._currentValue, g = g.parent !== v ? { parent: v, pool: v } : g) : g = Vp(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: g
      }), f.memoizedState = h, f.childLanes = jr(
        e,
        i,
        a
      ), t.memoizedState = yv, o) : (ha(t), a = e.child, e = a.sibling, a = yn(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function Yr(e, t) {
      return t = kf(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function kf(e, t) {
      return e = pe(22, e, null, t), e.lanes = 0, e.stateNode = {
        _visibility: M0,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }, e;
    }
    function Gr(e, t, a) {
      return lh(t, e.child, null, a), e = Yr(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function Vr(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), kh(
        e.return,
        t,
        a
      );
    }
    function mm(e, t) {
      var a = De(e);
      return e = !a && typeof ot(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function Xr(e, t, a, i, o) {
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
    function ym(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail;
      if (i = i.children, o !== void 0 && o !== "forwards" && o !== "backwards" && o !== "together" && !r1[o])
        if (r1[o] = !0, typeof o == "string")
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
        if (De(i)) {
          for (var d = 0; d < i.length; d++)
            if (!mm(i[d], d)) break e;
        } else if (d = ot(i), typeof d == "function") {
          if (d = d.call(i))
            for (var h = d.next(), g = 0; !h.done; h = d.next()) {
              if (!mm(h.value, g)) break e;
              g++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (Jt(e, t, i, a), i = zl.current, (i & Jy) !== 0)
        i = i & ah | Jy, t.flags |= 128;
      else {
        if (e !== null && (e.flags & 128) !== 0)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Vr(
                e,
                a,
                t
              );
            else if (e.tag === 19)
              Vr(e, a, t);
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
        i &= ah;
      }
      switch (Ae(zl, i, t), o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && gu(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), Xr(
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
          Xr(
            t,
            !0,
            a,
            null,
            f
          );
          break;
        case "together":
          Xr(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Dn(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), Va = -1, $o |= t.lanes, (a & t.childLanes) === 0)
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
        for (e = t.child, a = yn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = yn(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function Lr(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ku(e)));
    }
    function Ug(e, t, a) {
      switch (t.tag) {
        case 3:
          Mt(
            t,
            t.stateNode.containerInfo
          ), Ju(
            t,
            Al,
            e.memoizedState.cache
          ), Ki();
          break;
        case 27:
        case 5:
          Q(t);
          break;
        case 4:
          Mt(
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
            return i.dehydrated !== null ? (ha(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? kp(
              e,
              t,
              a
            ) : (ha(t), e = Dn(
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
              return ym(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ae(
            zl,
            zl.current,
            t
          ), i) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, Nr(e, t, a);
        case 24:
          Ju(
            t,
            Al,
            e.memoizedState.cache
          );
      }
      return Dn(e, t, a);
    }
    function Qr(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = sr(
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
          if (!Lr(e, a) && (t.flags & 128) === 0)
            return wl = !1, Ug(
              e,
              t,
              a
            );
          wl = (e.flags & 131072) !== 0;
        }
      else
        wl = !1, (i = ct) && (Ka(), i = (t.flags & 1048576) !== 0), i && (i = t.index, Ka(), jp(t, C0, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = Jo(t.elementType), t.type = e, typeof e == "function")
            jh(e) ? (i = ui(
              e,
              i
            ), t.tag = 1, t.type = e = Zi(e), t = dm(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, qr(t, e), t.type = e = Zi(e), t = _r(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === zu) {
                t.tag = 11, t.type = e = qh(e), t = wr(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === ps) {
                t.tag = 14, t = On(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === va && (t = " Did you wrap a component in React.lazy() more than once?"), e = je(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return _r(
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
          ), dm(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (Mt(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, Fu(e, t), Pc(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, Ju(t, Al, i), i !== f.cache && Jh(
              t,
              [Al],
              a,
              !0
            ), Sn(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = hm(
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
                ), Wc(o), t = hm(
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
                for (Kt = Sl(e.firstChild), Ta = t, ct = !0, Us = null, Uc = !1, $n = null, zi = !0, e = Kb(
                  t,
                  null,
                  i,
                  a
                ), t.child = e; e; )
                  e.flags = e.flags & -3 | 4096, e = e.sibling;
              }
            else {
              if (Ki(), i === o) {
                t = Dn(
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
          return Qf(e, t), e === null ? (e = xu(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = e : ct || (e = t.type, a = t.pendingProps, i = ft(
            Vn.current
          ), i = Ke(
            i
          ).createElement(e), i[Hl] = t, i[ua] = a, Xt(i, e, a), nl(i), t.stateNode = i) : t.memoizedState = xu(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return Q(t), e === null && ct && (i = ft(Vn.current), o = A(), i = t.stateNode = ey(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), Uc || (o = Et(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && ($a(t, 0).serverProps = o)), Ta = t, zi = !0, o = Kt, jn(t.type) ? (jv = o, Kt = Sl(
            i.firstChild
          )) : Kt = o), Jt(
            e,
            t,
            t.pendingProps.children,
            a
          ), Qf(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && ct && (f = A(), i = tr(
            t.type,
            f.ancestorInfo
          ), o = Kt, (d = !o) || (d = di(
            o,
            t.type,
            t.pendingProps,
            zi
          ), d !== null ? (t.stateNode = d, Uc || (f = Et(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && ($a(t, 0).serverProps = f)), Ta = t, Kt = Sl(
            d.firstChild
          ), zi = !1, f = !0) : f = !1, d = !f), d && (i && Vh(t, o), pn(t))), Q(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, qn(o, f) ? i = null : d !== null && qn(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = ei(
            e,
            t,
            Ma,
            null,
            null,
            a
          ), op._currentValue = o), Qf(e, t), Jt(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && ct && (e = t.pendingProps, a = A(), i = a.ancestorInfo.current, e = i != null ? pf(
            e,
            i.tag,
            a.ancestorInfo.implicitRootScope
          ) : !0, a = Kt, (i = !a) || (i = bl(
            a,
            t.pendingProps,
            zi
          ), i !== null ? (t.stateNode = i, Ta = t, Kt = null, i = !0) : i = !1, i = !i), i && (e && Vh(t, a), pn(t))), null;
        case 13:
          return kp(e, t, a);
        case 4:
          return Mt(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = lh(
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
          return wr(
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
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || d1 || (d1 = !0, console.error(
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
          ), $u(t), o = zt(o), qt(t), i = ov(
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
          return On(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return Lf(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return ym(
            e,
            t,
            a
          );
        case 31:
          return i = t.pendingProps, a = t.mode, i = {
            mode: i.mode,
            children: i.children
          }, e === null ? (e = kf(
            i,
            a
          ), e.ref = t.ref, t.child = e, e.return = t, t = e) : (e = yn(e.child, i), e.ref = t.ref, t.child = e, e.return = t, t = e), t;
        case 22:
          return Nr(e, t, a);
        case 24:
          return $u(t), i = zt(Al), e === null ? (o = Wh(), o === null && (o = Rt, f = Rf(), o.pooledCache = f, $i(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, Kl(t), Ju(t, Al, o)) : ((e.lanes & a) !== 0 && (Fu(e, t), Pc(t, null, null, a), Sn()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Ju(t, Al, i)) : (i = f.cache, Ju(t, Al, i), i !== o.cache && Jh(
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
    function Jf(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & eu) !== Zs)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !cs(t)) {
        if (t = Pn.current, t !== null && ((Ie & 4194048) === Ie ? Oi !== null : (Ie & 62914560) !== Ie && (Ie & 536870912) === 0 || t !== Oi))
          throw Ly = tv, Eb;
        e.flags |= 8192;
      }
    }
    function Kf(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? cf() : 536870912, e.lanes |= t, Ys |= t);
    }
    function ii(e, t) {
      if (!ct)
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
    function vt(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & Ll) !== Ht) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & Ll) !== Ht) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function Jp(e, t, a) {
      var i = t.pendingProps;
      switch (dr(t), t.tag) {
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
          return vt(t), null;
        case 1:
          return vt(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), su(Al, t), dt(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ji(t) ? (Zh(), Il(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Qh())), vt(t), null;
        case 26:
          return a = t.memoizedState, e === null ? (Il(t), a !== null ? (vt(t), Jf(
            t,
            a
          )) : (vt(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (Il(t), vt(t), Jf(
            t,
            a
          )) : (vt(t), t.flags &= -16777217) : (e.memoizedProps !== i && Il(t), vt(t), t.flags &= -16777217), null;
        case 27:
          _(t), a = ft(Vn.current);
          var o = t.type;
          if (e !== null && t.stateNode != null)
            e.memoizedProps !== i && Il(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return vt(t), null;
            }
            e = A(), Ji(t) ? Xh(t) : (e = ey(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, Il(t));
          }
          return vt(t), null;
        case 5:
          if (_(t), a = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Il(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return vt(t), null;
            }
            if (o = A(), Ji(t))
              Xh(t);
            else {
              switch (e = ft(Vn.current), tr(a, o.ancestorInfo), o = o.context, e = Ke(e), o) {
                case mh:
                  e = e.createElementNS(Lo, a);
                  break;
                case ng:
                  e = e.createElementNS(
                    Os,
                    a
                  );
                  break;
                default:
                  switch (a) {
                    case "svg":
                      e = e.createElementNS(
                        Lo,
                        a
                      );
                      break;
                    case "math":
                      e = e.createElementNS(
                        Os,
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
                      ), Object.prototype.toString.call(e) !== "[object HTMLUnknownElement]" || Ou.call(
                        C1,
                        a
                      ) || (C1[a] = !0, console.error(
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
          return vt(t), t.flags &= -16777217, null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && Il(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = ft(Vn.current), a = A(), Ji(t)) {
              e = t.stateNode, a = t.memoizedProps, o = !Uc, i = null;
              var f = Ta;
              if (f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = pd(
                      e,
                      a,
                      i
                    ), o !== null && ($a(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = pd(
                      e,
                      a,
                      i
                    ), o !== null && ($a(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Hl] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || Qm(e.nodeValue, a)), e || pn(t);
            } else
              o = a.ancestorInfo.current, o != null && pf(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = Ke(e).createTextNode(
                i
              ), e[Hl] = t, t.stateNode = e;
          }
          return vt(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = Ji(t), i !== null && i.dehydrated !== null) {
              if (e === null) {
                if (!o)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                o[Hl] = t, vt(t), (t.mode & Ll) !== Ht && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Zh(), Ki(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4, vt(t), (t.mode & Ll) !== Ht && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = Qh(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (ma(t), t) : (ma(t), null);
          }
          return ma(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & Ll) !== Ht && vn(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Kf(t, t.updateQueue), vt(t), (t.mode & Ll) !== Ht && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return dt(t), e === null && Xm(
            t.stateNode.containerInfo
          ), vt(t), null;
        case 10:
          return su(t.type, t), vt(t), null;
        case 19:
          if (Fe(zl, t), o = t.memoizedState, o === null) return vt(t), null;
          if (i = (t.flags & 128) !== 0, f = o.rendering, f === null)
            if (i) ii(o, !1);
            else {
              if ($t !== Nc || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = gu(e), f !== null) {
                    for (t.flags |= 128, ii(o, !1), e = f.updateQueue, t.updateQueue = e, Kf(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Yh(a, e), a = a.sibling;
                    return Ae(
                      zl,
                      zl.current & ah | Jy,
                      t
                    ), t.child;
                  }
                  e = e.sibling;
                }
              o.tail !== null && Xn() > k0 && (t.flags |= 128, i = !0, ii(o, !1), t.lanes = 4194304);
            }
          else {
            if (!i)
              if (e = gu(f), e !== null) {
                if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Kf(t, e), ii(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !ct)
                  return vt(t), null;
              } else
                2 * Xn() - o.renderingStartTime > k0 && a !== 536870912 && (t.flags |= 128, i = !0, ii(o, !1), t.lanes = 4194304);
            o.isBackwards ? (f.sibling = t.child, t.child = f) : (e = o.last, e !== null ? e.sibling = f : t.child = f, o.last = f);
          }
          return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = Xn(), e.sibling = null, a = zl.current, a = i ? a & ah | Jy : a & ah, Ae(zl, a, t), e) : (vt(t), null);
        case 22:
        case 23:
          return ma(t), Pa(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (vt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : vt(t), a = t.updateQueue, a !== null && Kf(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && Fe(ws, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), su(Al, t), vt(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Kp(e, t) {
      switch (dr(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Ll) !== Ht && vn(t), t) : null;
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
            Ki();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Ll) !== Ht && vn(t), t) : null;
        case 19:
          return Fe(zl, t), null;
        case 4:
          return dt(t), null;
        case 10:
          return su(t.type, t), null;
        case 22:
        case 23:
          return ma(t), Pa(t), e !== null && Fe(ws, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Ll) !== Ht && vn(t), t) : null;
        case 24:
          return su(Al, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function pm(e, t) {
      switch (dr(t), t.tag) {
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
          ma(t), Pa(t), e !== null && Fe(ws, t);
          break;
        case 24:
          su(Al, t);
      }
    }
    function an(e) {
      return (e.mode & Ll) !== Ht;
    }
    function gm(e, t) {
      an(e) ? (Fa(), nc(t, e), Ra()) : nc(t, e);
    }
    function Zr(e, t, a) {
      an(e) ? (Fa(), uc(
        a,
        e,
        t
      ), Ra()) : uc(
        a,
        e,
        t
      );
    }
    function nc(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && ((e & xl) !== Wn ? P !== null && typeof P.markComponentPassiveEffectMountStarted == "function" && P.markComponentPassiveEffectMountStarted(
              t
            ) : (e & Ql) !== Wn && P !== null && typeof P.markComponentLayoutEffectMountStarted == "function" && P.markComponentLayoutEffectMountStarted(
              t
            ), i = void 0, (e & Ea) !== Wn && (dh = !0), i = ie(
              t,
              g2,
              a
            ), (e & Ea) !== Wn && (dh = !1), (e & xl) !== Wn ? P !== null && typeof P.markComponentPassiveEffectMountStopped == "function" && P.markComponentPassiveEffectMountStopped() : (e & Ql) !== Wn && P !== null && typeof P.markComponentLayoutEffectMountStopped == "function" && P.markComponentLayoutEffectMountStopped(), i !== void 0 && typeof i != "function")) {
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

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, ie(
                t,
                function(h, g) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    g
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
        Te(t, t.return, h);
      }
    }
    function uc(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & xl) !== Wn ? P !== null && typeof P.markComponentPassiveEffectUnmountStarted == "function" && P.markComponentPassiveEffectUnmountStarted(
                t
              ) : (e & Ql) !== Wn && P !== null && typeof P.markComponentLayoutEffectUnmountStarted == "function" && P.markComponentLayoutEffectUnmountStarted(
                t
              ), (e & Ea) !== Wn && (dh = !0), o = t, ie(
                o,
                v2,
                o,
                a,
                h
              ), (e & Ea) !== Wn && (dh = !1), (e & xl) !== Wn ? P !== null && typeof P.markComponentPassiveEffectUnmountStopped == "function" && P.markComponentPassiveEffectUnmountStopped() : (e & Ql) !== Wn && P !== null && typeof P.markComponentLayoutEffectUnmountStopped == "function" && P.markComponentLayoutEffectUnmountStopped());
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (g) {
        Te(t, t.return, g);
      }
    }
    function vm(e, t) {
      an(e) ? (Fa(), nc(t, e), Ra()) : nc(t, e);
    }
    function $f(e, t, a) {
      an(e) ? (Fa(), uc(
        a,
        e,
        t
      ), Ra()) : uc(
        a,
        e,
        t
      );
    }
    function bm(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || uh || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          le(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          le(e) || "instance"
        ));
        try {
          ie(
            e,
            Xp,
            t,
            a
          );
        } catch (i) {
          Te(e, e.return, i);
        }
      }
    }
    function $p(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function Cg(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || uh || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        le(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        le(e) || "instance"
      ));
      try {
        var o = ui(
          e.type,
          a,
          e.elementType === e.type
        ), f = ie(
          e,
          $p,
          t,
          o,
          i
        );
        a = h1, f !== void 0 || a.has(e.type) || (a.add(e.type), ie(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            le(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        Te(e, e.return, d);
      }
    }
    function kr(e, t, a) {
      a.props = ui(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, an(e) ? (Fa(), ie(
        e,
        Gb,
        e,
        t,
        a
      ), Ra()) : ie(
        e,
        Gb,
        e,
        t,
        a
      );
    }
    function Wp(e) {
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
          if (an(e))
            try {
              Fa(), e.refCleanup = t(a);
            } finally {
              Ra();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            le(e)
          ), t.current = a;
      }
    }
    function mo(e, t) {
      try {
        ie(e, Wp, e);
      } catch (a) {
        Te(e, t, a);
      }
    }
    function Na(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (an(e))
              try {
                Fa(), ie(e, i);
              } finally {
                Ra(e);
              }
            else ie(e, i);
          } catch (o) {
            Te(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (an(e))
              try {
                Fa(), ie(e, a, null);
              } finally {
                Ra(e);
              }
            else ie(e, a, null);
          } catch (o) {
            Te(e, t, o);
          }
        else a.current = null;
    }
    function Sm(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", N0 && (t = "nested-update"), typeof o == "function" && o(
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
    function Fp(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", N0 && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function Ip(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        ie(
          e,
          Eu,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        Te(e, e.return, o);
      }
    }
    function Tm(e, t, a) {
      try {
        ie(
          e,
          Lt,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Te(e, e.return, i);
      }
    }
    function Em(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && jn(e.type) || e.tag === 4;
    }
    function ic(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Em(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && jn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Wf(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Tu));
      else if (i !== 4 && (i === 27 && jn(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (Wf(e, t, a), e = e.sibling; e !== null; )
          Wf(e, t, a), e = e.sibling;
    }
    function cc(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && jn(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (cc(e, t, a), e = e.sibling; e !== null; )
          cc(e, t, a), e = e.sibling;
    }
    function Pp(e) {
      for (var t, a = e.return; a !== null; ) {
        if (Em(a)) {
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
          t = t.stateNode, a = ic(e), cc(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (Au(a), t.flags &= -33), t = ic(e), cc(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = ic(e), Wf(
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
    function Am(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        ie(
          e,
          ga,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Te(e, e.return, i);
      }
    }
    function Jr(e, t) {
      if (e = e.containerInfo, Bv = og, e = wp(e), Bh(e)) {
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
              var d = 0, h = -1, g = -1, v = 0, w = 0, Y = e, C = null;
              t: for (; ; ) {
                for (var V; Y !== a || o !== 0 && Y.nodeType !== 3 || (h = d + o), Y !== f || i !== 0 && Y.nodeType !== 3 || (g = d + i), Y.nodeType === 3 && (d += Y.nodeValue.length), (V = Y.firstChild) !== null; )
                  C = Y, Y = V;
                for (; ; ) {
                  if (Y === e) break t;
                  if (C === a && ++v === o && (h = d), C === f && ++w === i && (g = d), (V = Y.nextSibling) !== null) break;
                  Y = C, C = Y.parentNode;
                }
                Y = V;
              }
              a = h === -1 || g === -1 ? null : { start: h, end: g };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (_v = {
        focusedElem: e,
        selectionRange: a
      }, og = !1, Nl = t; Nl !== null; )
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
                (o & 1024) !== 0 && a !== null && Cg(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    zo(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        zo(e);
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
    function xm(e, t, a) {
      var i = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Mn(e, a), i & 4 && gm(a, Ql | Fn);
          break;
        case 1:
          if (Mn(e, a), i & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || uh || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                le(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                le(a) || "instance"
              )), an(a) ? (Fa(), ie(
                a,
                fv,
                a,
                e
              ), Ra()) : ie(
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
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || uh || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                le(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                le(a) || "instance"
              )), an(a) ? (Fa(), ie(
                a,
                qb,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), Ra()) : ie(
                a,
                qb,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          i & 64 && bm(a), i & 512 && mo(a, a.return);
          break;
        case 3:
          if (t = Wa(), Mn(e, a), i & 64 && (i = a.updateQueue, i !== null)) {
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
              ie(
                a,
                Xp,
                i,
                o
              );
            } catch (d) {
              Te(a, a.return, d);
            }
          }
          e.effectDuration += Wu(t);
          break;
        case 27:
          t === null && i & 4 && Am(a);
        case 26:
        case 5:
          Mn(e, a), t === null && i & 4 && Ip(a), i & 512 && mo(a, a.return);
          break;
        case 12:
          if (i & 4) {
            i = Wa(), Mn(e, a), e = a.stateNode, e.effectDuration += Wi(i);
            try {
              ie(
                a,
                Sm,
                a,
                t,
                w0,
                e.effectDuration
              );
            } catch (d) {
              Te(a, a.return, d);
            }
          } else Mn(e, a);
          break;
        case 13:
          Mn(e, a), i & 4 && yo(e, a), i & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = ns.bind(
            null,
            a
          ), Ro(e, a))));
          break;
        case 22:
          if (i = a.memoizedState !== null || wc, !i) {
            t = t !== null && t.memoizedState !== null || ll, o = wc;
            var f = ll;
            wc = i, (ll = t) && !f ? Un(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ) : Mn(e, a), wc = o, ll = f;
          }
          break;
        case 30:
          break;
        default:
          Mn(e, a);
      }
    }
    function zm(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, zm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Xc(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function vu(e, t, a) {
      for (a = a.child; a !== null; )
        oc(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function oc(e, t, a) {
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
          jn(a.type) && (dl = a.stateNode, Xa = !1), vu(
            e,
            t,
            a
          ), ie(
            a,
            Do,
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
                ie(
                  a,
                  Ao,
                  dl,
                  a.stateNode
                );
              } catch (f) {
                Te(
                  a,
                  t,
                  f
                );
              }
            else
              try {
                ie(
                  a,
                  qa,
                  dl,
                  a.stateNode
                );
              } catch (f) {
                Te(
                  a,
                  t,
                  f
                );
              }
          break;
        case 18:
          dl !== null && (Xa ? (e = dl, xo(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), Tc(e)) : xo(dl, a.stateNode));
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
          ll || uc(
            Ea,
            a,
            t
          ), ll || Zr(
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
          ll || (Na(a, t), i = a.stateNode, typeof i.componentWillUnmount == "function" && kr(
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
    function yo(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          ie(
            t,
            pa,
            e
          );
        } catch (a) {
          Te(t, t.return, a);
        }
    }
    function Kr(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new m1()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new m1()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function fc(e, t) {
      var a = Kr(e);
      t.forEach(function(i) {
        var o = si.bind(null, e, i);
        if (!a.has(i)) {
          if (a.add(i), Zt)
            if (ih !== null && ch !== null)
              To(ch, ih);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          i.then(o, o);
        }
      });
    }
    function Ml(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = f;
          e: for (; h !== null; ) {
            switch (h.tag) {
              case 27:
                if (jn(h.type)) {
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
          oc(o, f, d), dl = null, Xa = !1, o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; )
          Rm(t, e), t = t.sibling;
    }
    function Rm(e, t) {
      var a = e.alternate, i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ml(t, e), Pl(e), i & 4 && (uc(
            Ea | Fn,
            e,
            e.return
          ), nc(Ea | Fn, e), Zr(
            e,
            e.return,
            Ql | Fn
          ));
          break;
        case 1:
          Ml(t, e), Pl(e), i & 512 && (ll || a === null || Na(a, a.return)), i & 64 && wc && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
          break;
        case 26:
          var o = Bu;
          if (Ml(t, e), Pl(e), i & 512 && (ll || a === null || Na(a, a.return)), i & 4)
            if (t = a !== null ? a.memoizedState : null, i = e.memoizedState, a === null)
              if (i === null)
                if (e.stateNode === null) {
                  e: {
                    i = e.type, a = e.memoizedProps, t = o.ownerDocument || o;
                    t: switch (i) {
                      case "title":
                        o = t.getElementsByTagName("title")[0], (!o || o[Yo] || o[Hl] || o.namespaceURI === Lo || o.hasAttribute("itemprop")) && (o = t.createElement(i), t.head.insertBefore(
                          o,
                          t.querySelector("head > title")
                        )), Xt(o, i, a), o[Hl] = e, nl(o), i = o;
                        break e;
                      case "link":
                        var f = ny(
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
                        if (f = ny(
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
                  uy(
                    o,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = gd(
                  o,
                  i,
                  e.memoizedProps
                );
            else
              t !== i ? (t === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : t.count--, i === null ? uy(
                o,
                e.type,
                e.stateNode
              ) : gd(
                o,
                i,
                e.memoizedProps
              )) : i === null && e.stateNode !== null && Tm(
                e,
                e.memoizedProps,
                a.memoizedProps
              );
          break;
        case 27:
          Ml(t, e), Pl(e), i & 512 && (ll || a === null || Na(a, a.return)), a !== null && i & 4 && Tm(
            e,
            e.memoizedProps,
            a.memoizedProps
          );
          break;
        case 5:
          if (Ml(t, e), Pl(e), i & 512 && (ll || a === null || Na(a, a.return)), e.flags & 32) {
            t = e.stateNode;
            try {
              ie(e, Au, t);
            } catch (w) {
              Te(e, e.return, w);
            }
          }
          i & 4 && e.stateNode != null && (t = e.memoizedProps, Tm(
            e,
            t,
            a !== null ? a.memoizedProps : t
          )), i & 1024 && (pv = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (Ml(t, e), Pl(e), i & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            i = e.memoizedProps, a = a !== null ? a.memoizedProps : i, t = e.stateNode;
            try {
              ie(
                e,
                gc,
                t,
                a,
                i
              );
            } catch (w) {
              Te(e, e.return, w);
            }
          }
          break;
        case 3:
          if (o = Wa(), ug = null, f = Bu, Bu = is(t.containerInfo), Ml(t, e), Bu = f, Pl(e), i & 4 && a !== null && a.memoizedState.isDehydrated)
            try {
              ie(
                e,
                Pm,
                t.containerInfo
              );
            } catch (w) {
              Te(e, e.return, w);
            }
          pv && (pv = !1, sc(e)), t.effectDuration += Wu(o);
          break;
        case 4:
          i = Bu, Bu = is(
            e.stateNode.containerInfo
          ), Ml(t, e), Pl(e), Bu = i;
          break;
        case 12:
          i = Wa(), Ml(t, e), Pl(e), e.stateNode.effectDuration += Wi(i);
          break;
        case 13:
          Ml(t, e), Pl(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Ev = Xn()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, fc(e, i)));
          break;
        case 22:
          o = e.memoizedState !== null;
          var h = a !== null && a.memoizedState !== null, g = wc, v = ll;
          if (wc = g || o, ll = v || h, Ml(t, e), ll = v, wc = g, Pl(e), i & 8192)
            e: for (t = e.stateNode, t._visibility = o ? t._visibility & ~M0 : t._visibility | M0, o && (a === null || h || wc || ll || Ul(e)), a = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (a === null) {
                  h = a = t;
                  try {
                    f = h.stateNode, o ? ie(h, la, f) : ie(
                      h,
                      Fm,
                      h.stateNode,
                      h.memoizedProps
                    );
                  } catch (w) {
                    Te(h, h.return, w);
                  }
                }
              } else if (t.tag === 6) {
                if (a === null) {
                  h = t;
                  try {
                    d = h.stateNode, o ? ie(h, Wm, d) : ie(
                      h,
                      md,
                      d,
                      h.memoizedProps
                    );
                  } catch (w) {
                    Te(h, h.return, w);
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
          i & 4 && (i = e.updateQueue, i !== null && (a = i.retryQueue, a !== null && (i.retryQueue = null, fc(e, a))));
          break;
        case 19:
          Ml(t, e), Pl(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, fc(e, i)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Ml(t, e), Pl(e);
      }
    }
    function Pl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          ie(e, Pp, e);
        } catch (a) {
          Te(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function sc(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          sc(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function Mn(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          xm(e, t.alternate, t), t = t.sibling;
    }
    function ya(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Zr(
            e,
            e.return,
            Ql
          ), Ul(e);
          break;
        case 1:
          Na(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && kr(
            e,
            e.return,
            t
          ), Ul(e);
          break;
        case 27:
          ie(
            e,
            Do,
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
          Un(
            e,
            a,
            i
          ), gm(a, Ql);
          break;
        case 1:
          if (Un(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && ie(
            a,
            fv,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              ie(
                a,
                eo,
                t,
                e
              );
            } catch (f) {
              Te(a, a.return, f);
            }
          }
          i && o & 64 && bm(a), mo(a, a.return);
          break;
        case 27:
          Am(a);
        case 26:
        case 5:
          Un(
            e,
            a,
            i
          ), i && t === null && o & 4 && Ip(a), mo(a, a.return);
          break;
        case 12:
          if (i && o & 4) {
            o = Wa(), Un(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += Wi(o);
            try {
              ie(
                a,
                Sm,
                a,
                t,
                w0,
                i.effectDuration
              );
            } catch (f) {
              Te(a, a.return, f);
            }
          } else
            Un(
              e,
              a,
              i
            );
          break;
        case 13:
          Un(
            e,
            a,
            i
          ), i && o & 4 && yo(e, a);
          break;
        case 22:
          a.memoizedState === null && Un(
            e,
            a,
            i
          ), mo(a, a.return);
          break;
        case 30:
          break;
        default:
          Un(
            e,
            a,
            i
          );
      }
    }
    function Un(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        bu(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function Cn(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && $i(e), a != null && gn(a));
    }
    function nn(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && ($i(t), e != null && gn(e));
    }
    function bt(e, t, a, i) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          Ff(
            e,
            t,
            a,
            i
          ), t = t.sibling;
    }
    function Ff(e, t, a, i) {
      var o = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          bt(
            e,
            t,
            a,
            i
          ), o & 2048 && vm(t, xl | Fn);
          break;
        case 1:
          bt(
            e,
            t,
            a,
            i
          );
          break;
        case 3:
          var f = Wa();
          bt(
            e,
            t,
            a,
            i
          ), o & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && ($i(t), a != null && gn(a))), e.passiveEffectDuration += Wu(f);
          break;
        case 12:
          if (o & 2048) {
            o = Wa(), bt(
              e,
              t,
              a,
              i
            ), e = t.stateNode, e.passiveEffectDuration += Wi(o);
            try {
              ie(
                t,
                Fp,
                t,
                t.alternate,
                w0,
                e.passiveEffectDuration
              );
            } catch (h) {
              Te(t, t.return, h);
            }
          } else
            bt(
              e,
              t,
              a,
              i
            );
          break;
        case 13:
          bt(
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
          t.memoizedState !== null ? f._visibility & Oc ? bt(
            e,
            t,
            a,
            i
          ) : po(
            e,
            t
          ) : f._visibility & Oc ? bt(
            e,
            t,
            a,
            i
          ) : (f._visibility |= Oc, ci(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0
          )), o & 2048 && Cn(d, t);
          break;
        case 24:
          bt(
            e,
            t,
            a,
            i
          ), o & 2048 && nn(t.alternate, t);
          break;
        default:
          bt(
            e,
            t,
            a,
            i
          );
      }
    }
    function ci(e, t, a, i, o) {
      for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
        $r(
          e,
          t,
          a,
          i,
          o
        ), t = t.sibling;
    }
    function $r(e, t, a, i, o) {
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
          ), vm(t, xl);
          break;
        case 23:
          break;
        case 22:
          var d = t.stateNode;
          t.memoizedState !== null ? d._visibility & Oc ? ci(
            e,
            t,
            a,
            i,
            o
          ) : po(
            e,
            t
          ) : (d._visibility |= Oc, ci(
            e,
            t,
            a,
            i,
            o
          )), o && f & 2048 && Cn(
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
          ), o && f & 2048 && nn(t.alternate, t);
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
    function po(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var a = e, i = t, o = i.flags;
          switch (i.tag) {
            case 22:
              po(
                a,
                i
              ), o & 2048 && Cn(
                i.alternate,
                i
              );
              break;
            case 24:
              po(
                a,
                i
              ), o & 2048 && nn(
                i.alternate,
                i
              );
              break;
            default:
              po(
                a,
                i
              );
          }
          t = t.sibling;
        }
    }
    function rc(e) {
      if (e.subtreeFlags & Ky)
        for (e = e.child; e !== null; )
          oi(e), e = e.sibling;
    }
    function oi(e) {
      switch (e.tag) {
        case 26:
          rc(e), e.flags & Ky && e.memoizedState !== null && s0(
            Bu,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          rc(e);
          break;
        case 3:
        case 4:
          var t = Bu;
          Bu = is(
            e.stateNode.containerInfo
          ), rc(e), Bu = t;
          break;
        case 22:
          e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Ky, Ky = 16777216, rc(e), Ky = t) : rc(e));
          break;
        default:
          rc(e);
      }
    }
    function If(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function go(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Nl = i, Dm(
              i,
              e
            );
          }
        If(e);
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
          go(e), e.flags & 2048 && $f(
            e,
            e.return,
            xl | Fn
          );
          break;
        case 3:
          var t = Wa();
          go(e), e.stateNode.passiveEffectDuration += Wu(t);
          break;
        case 12:
          t = Wa(), go(e), e.stateNode.passiveEffectDuration += Wi(t);
          break;
        case 22:
          t = e.stateNode, e.memoizedState !== null && t._visibility & Oc && (e.return === null || e.return.tag !== 13) ? (t._visibility &= ~Oc, Pf(e)) : go(e);
          break;
        default:
          go(e);
      }
    }
    function Pf(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Nl = i, Dm(
              i,
              e
            );
          }
        If(e);
      }
      for (e = e.child; e !== null; )
        es(e), e = e.sibling;
    }
    function es(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          $f(
            e,
            e.return,
            xl
          ), Pf(e);
          break;
        case 22:
          var t = e.stateNode;
          t._visibility & Oc && (t._visibility &= ~Oc, Pf(e));
          break;
        default:
          Pf(e);
      }
    }
    function Dm(e, t) {
      for (; Nl !== null; ) {
        var a = Nl, i = a;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            $f(
              i,
              t,
              xl
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (i = i.memoizedState.cachePool.pool, i != null && $i(i));
            break;
          case 24:
            gn(i.memoizedState.cache);
        }
        if (i = a.child, i !== null) i.return = a, Nl = i;
        else
          e: for (a = e; Nl !== null; ) {
            i = Nl;
            var o = i.sibling, f = i.return;
            if (zm(i), i === a) {
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
    function Mm() {
      S2.forEach(function(e) {
        return e();
      });
    }
    function Um() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || q.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function ea(e) {
      if ((yt & Aa) !== fn && Ie !== 0)
        return Ie & -Ie;
      var t = q.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = Hs, e !== 0 ? e : Ym()) : vp();
    }
    function e0() {
      rn === 0 && (rn = (Ie & 536870912) === 0 || ct ? Sh() : 536870912);
      var e = Pn.current;
      return e !== null && (e.flags |= 32), rn;
    }
    function Gt(e, t, a) {
      if (dh && console.error("useInsertionEffect must not schedule updates."), Ov && (J0 = !0), (e === Rt && (St === qs || St === js) || e.cancelPendingCommit !== null) && (hc(e, 0), Su(
        e,
        Ie,
        rn,
        !1
      )), Gc(e, a), (yt & Aa) !== 0 && e === Rt) {
        if (ia)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = $e && le($e) || "Unknown", x1.has(e) || (x1.add(e), t = le(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              A1 || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), A1 = !0);
          }
      } else
        Zt && au(e, t, a), n0(t), e === Rt && ((yt & Aa) === fn && (Wo |= a), $t === _s && Su(
          e,
          Ie,
          rn,
          !1
        )), Ba(e);
    }
    function el(e, t, a) {
      if ((yt & (Aa | _u)) !== fn)
        throw Error("Should not already be working.");
      var i = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || uf(e, t), o = i ? Hm(e, t) : Pr(e, t, !0), f = i;
      do {
        if (o === Nc) {
          sh && !i && Su(e, t, 0, !1);
          break;
        } else {
          if (a = e.current.alternate, f && !t0(a)) {
            o = Pr(e, t, !1), f = !1;
            continue;
          }
          if (o === oh) {
            if (f = t, e.errorRecoveryDisabledLanes & f)
              var d = 0;
            else
              d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
            if (d !== 0) {
              t = d;
              e: {
                o = e;
                var h = d;
                d = ep;
                var g = o.current.memoizedState.isDehydrated;
                if (g && (hc(
                  o,
                  h
                ).flags |= 256), h = Pr(
                  o,
                  h,
                  !1
                ), h !== oh) {
                  if (Sv && !g) {
                    o.errorRecoveryDisabledLanes |= f, Wo |= f, o = _s;
                    break e;
                  }
                  o = xa, xa = d, o !== null && (xa === null ? xa = o : xa.push.apply(
                    xa,
                    o
                  ));
                }
                o = h;
              }
              if (f = !1, o !== oh) continue;
            }
          }
          if (o === Wy) {
            hc(e, 0), Su(e, t, 0, !0);
            break;
          }
          e: {
            switch (i = e, o) {
              case Nc:
              case Wy:
                throw Error("Root did not complete. This is a bug in React.");
              case _s:
                if ((t & 4194048) !== t) break;
              case Q0:
                Su(
                  i,
                  t,
                  rn,
                  !Ko
                );
                break e;
              case oh:
                xa = null;
                break;
              case gv:
              case y1:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (q.actQueue !== null)
              nd(
                i,
                a,
                t,
                xa,
                tp,
                Z0,
                rn,
                Wo,
                Ys
              );
            else {
              if ((t & 62914560) === t && (f = Ev + g1 - Xn(), 10 < f)) {
                if (Su(
                  i,
                  t,
                  rn,
                  !Ko
                ), oa(i, 0, !0) !== 0) break e;
                i.timeoutHandle = H1(
                  ol.bind(
                    null,
                    i,
                    a,
                    xa,
                    tp,
                    Z0,
                    t,
                    rn,
                    Wo,
                    Ys,
                    Ko,
                    o,
                    x2,
                    bb,
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
                tp,
                Z0,
                t,
                rn,
                Wo,
                Ys,
                Ko,
                o,
                E2,
                bb,
                0
              );
            }
          }
        }
        break;
      } while (!0);
      Ba(e);
    }
    function ol(e, t, a, i, o, f, d, h, g, v, w, Y, C, V) {
      if (e.timeoutHandle = Qs, Y = t.subtreeFlags, (Y & 8192 || (Y & 16785408) === 16785408) && (cp = { stylesheets: null, count: 0, unsuspend: f0 }, oi(t), Y = r0(), Y !== null)) {
        e.cancelPendingCommit = Y(
          nd.bind(
            null,
            e,
            t,
            f,
            a,
            i,
            o,
            d,
            h,
            g,
            w,
            A2,
            C,
            V
          )
        ), Su(
          e,
          f,
          d,
          !v
        );
        return;
      }
      nd(
        e,
        t,
        f,
        a,
        i,
        o,
        d,
        h,
        g
      );
    }
    function t0(e) {
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
      t &= ~Tv, t &= ~Wo, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - Cl(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && gp(e, a, t);
    }
    function dc() {
      return (yt & (Aa | _u)) === fn ? (mc(0), !1) : !0;
    }
    function Wr() {
      if ($e !== null) {
        if (St === La)
          var e = $e.return;
        else
          e = $e, hr(), en(e), th = null, ky = 0, e = $e;
        for (; e !== null; )
          pm(e.alternate, e), e = e.return;
        $e = null;
      }
    }
    function hc(e, t) {
      var a = e.timeoutHandle;
      a !== Qs && (e.timeoutHandle = Qs, q2(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Wr(), Rt = e, $e = a = yn(e.current, null), Ie = t, St = La, sn = null, Ko = !1, sh = uf(e, t), Sv = !1, $t = Nc, Ys = rn = Tv = Wo = $o = 0, xa = ep = null, Z0 = !1, (t & 8) !== 0 && (t |= t & 32);
      var i = e.entangledLanes;
      if (i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; ) {
          var o = 31 - Cl(i), f = 1 << o;
          t |= e[o], i &= ~f;
        }
      return Di = t, Tf(), t = gb(), 1e3 < t - pb && (q.recentlyCreatedOwnerStacks = 0, pb = t), wu.discardPendingWarnings(), a;
    }
    function ts(e, t) {
      Me = null, q.H = X0, q.getCurrentStack = null, ia = !1, ba = null, t === Xy || t === q0 ? (t = Ph(), St = Iy) : t === Eb ? (t = Ph(), St = p1) : St = t === i1 ? bv : t !== null && typeof t == "object" && typeof t.then == "function" ? fh : Fy, sn = t;
      var a = $e;
      if (a === null)
        $t = Wy, ho(
          e,
          ra(t, e.current)
        );
      else
        switch (a.mode & Ll && ru(a), hl(), St) {
          case Fy:
            P !== null && typeof P.markComponentErrored == "function" && P.markComponentErrored(
              a,
              t,
              Ie
            );
            break;
          case qs:
          case js:
          case Iy:
          case fh:
          case Py:
            P !== null && typeof P.markComponentSuspended == "function" && P.markComponentSuspended(
              a,
              t,
              Ie
            );
        }
    }
    function Fr() {
      var e = q.H;
      return q.H = X0, e === null ? X0 : e;
    }
    function Cm() {
      var e = q.A;
      return q.A = b2, e;
    }
    function Ir() {
      $t = _s, Ko || (Ie & 4194048) !== Ie && Pn.current !== null || (sh = !0), ($o & 134217727) === 0 && (Wo & 134217727) === 0 || Rt === null || Su(
        Rt,
        Ie,
        rn,
        !1
      );
    }
    function Pr(e, t, a) {
      var i = yt;
      yt |= Aa;
      var o = Fr(), f = Cm();
      if (Rt !== e || Ie !== t) {
        if (Zt) {
          var d = e.memoizedUpdaters;
          0 < d.size && (To(e, Ie), d.clear()), kl(e, t);
        }
        tp = null, hc(e, t);
      }
      Za(t), t = !1, d = $t;
      e: do
        try {
          if (St !== La && $e !== null) {
            var h = $e, g = sn;
            switch (St) {
              case bv:
                Wr(), d = Q0;
                break e;
              case Iy:
              case qs:
              case js:
              case fh:
                Pn.current === null && (t = !0);
                var v = St;
                if (St = La, sn = null, fi(e, h, g, v), a && sh) {
                  d = Nc;
                  break e;
                }
                break;
              default:
                v = St, St = La, sn = null, fi(e, h, g, v);
            }
          }
          ed(), d = $t;
          break;
        } catch (w) {
          ts(e, w);
        }
      while (!0);
      return t && e.shellSuspendCounter++, hr(), yt = i, q.H = o, q.A = f, lu(), $e === null && (Rt = null, Ie = 0, Tf()), d;
    }
    function ed() {
      for (; $e !== null; ) Nm($e);
    }
    function Hm(e, t) {
      var a = yt;
      yt |= Aa;
      var i = Fr(), o = Cm();
      if (Rt !== e || Ie !== t) {
        if (Zt) {
          var f = e.memoizedUpdaters;
          0 < f.size && (To(e, Ie), f.clear()), kl(e, t);
        }
        tp = null, k0 = Xn() + v1, hc(e, t);
      } else
        sh = uf(
          e,
          t
        );
      Za(t);
      e: do
        try {
          if (St !== La && $e !== null)
            t: switch (t = $e, f = sn, St) {
              case Fy:
                St = La, sn = null, fi(
                  e,
                  t,
                  f,
                  Fy
                );
                break;
              case qs:
              case js:
                if (Ih(f)) {
                  St = La, sn = null, td(t);
                  break;
                }
                t = function() {
                  St !== qs && St !== js || Rt !== e || (St = Py), Ba(e);
                }, f.then(t, t);
                break e;
              case Iy:
                St = Py;
                break e;
              case p1:
                St = vv;
                break e;
              case Py:
                Ih(f) ? (St = La, sn = null, td(t)) : (St = La, sn = null, fi(
                  e,
                  t,
                  f,
                  Py
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
                    if (!d || cs(d)) {
                      St = La, sn = null;
                      var g = h.sibling;
                      if (g !== null) $e = g;
                      else {
                        var v = h.return;
                        v !== null ? ($e = v, ls(v)) : $e = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                St = La, sn = null, fi(
                  e,
                  t,
                  f,
                  vv
                );
                break;
              case fh:
                St = La, sn = null, fi(
                  e,
                  t,
                  f,
                  fh
                );
                break;
              case bv:
                Wr(), $t = Q0;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          q.actQueue !== null ? ed() : wm();
          break;
        } catch (w) {
          ts(e, w);
        }
      while (!0);
      return hr(), q.H = i, q.A = o, yt = a, $e !== null ? (P !== null && typeof P.markRenderYielded == "function" && P.markRenderYielded(), Nc) : (lu(), Rt = null, Ie = 0, Tf(), $t);
    }
    function wm() {
      for (; $e !== null && !v0(); )
        Nm($e);
    }
    function Nm(e) {
      var t = e.alternate;
      (e.mode & Ll) !== Ht ? (mr(e), t = ie(
        e,
        Qr,
        t,
        e,
        Di
      ), ru(e)) : t = ie(
        e,
        Qr,
        t,
        e,
        Di
      ), e.memoizedProps = e.pendingProps, t === null ? ls(e) : $e = t;
    }
    function td(e) {
      var t = ie(e, ld, e);
      e.memoizedProps = e.pendingProps, t === null ? ls(e) : $e = t;
    }
    function ld(e) {
      var t = e.alternate, a = (e.mode & Ll) !== Ht;
      switch (a && mr(e), e.tag) {
        case 15:
        case 0:
          t = rm(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            Ie
          );
          break;
        case 11:
          t = rm(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            Ie
          );
          break;
        case 5:
          en(e);
        default:
          pm(t, e), e = $e = Yh(e, Di), t = Qr(t, e, Di);
      }
      return a && ru(e), t;
    }
    function fi(e, t, a, i) {
      hr(), en(t), th = null, ky = 0;
      var o = t.return;
      try {
        if (Xf(
          e,
          o,
          t,
          a,
          Ie
        )) {
          $t = Wy, ho(
            e,
            ra(a, e.current)
          ), $e = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw $e = o, f;
        $t = Wy, ho(
          e,
          ra(a, e.current)
        ), $e = null;
        return;
      }
      t.flags & 32768 ? (ct || i === Fy ? e = !0 : sh || (Ie & 536870912) !== 0 ? e = !1 : (Ko = e = !0, (i === qs || i === js || i === Iy || i === fh) && (i = Pn.current, i !== null && i.tag === 13 && (i.flags |= 16384))), ad(t, e)) : ls(t);
    }
    function ls(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          ad(
            t,
            Ko
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, mr(t), a = ie(
          t,
          Jp,
          a,
          t,
          Di
        ), (t.mode & Ll) !== Ht && Fi(t), a !== null) {
          $e = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          $e = t;
          return;
        }
        $e = t = e;
      } while (t !== null);
      $t === Nc && ($t = y1);
    }
    function ad(e, t) {
      do {
        var a = Kp(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, $e = a;
          return;
        }
        if ((e.mode & Ll) !== Ht) {
          Fi(e), a = e.actualDuration;
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
      $t = Q0, $e = null;
    }
    function nd(e, t, a, i, o, f, d, h, g) {
      e.cancelPendingCommit = null;
      do
        vo();
      while (Zl !== Gs);
      if (wu.flushLegacyContextWarning(), wu.flushPendingUnsafeLifecycleWarnings(), (yt & (Aa | _u)) !== fn)
        throw Error("Should not already be working.");
      if (P !== null && typeof P.markCommitStarted == "function" && P.markCommitStarted(a), t === null) xt();
      else {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= Wg, Tg(
          e,
          a,
          f,
          d,
          h,
          g
        ), e === Rt && ($e = Rt = null, Ie = 0), rh = t, Io = e, Po = a, xv = f, zv = o, E1 = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, jm(_o, function() {
          return as(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), w0 = Wd(), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = q.T, q.T = null, o = xe.p, xe.p = El, d = yt, yt |= _u;
          try {
            Jr(e, t, a);
          } finally {
            yt = d, xe.p = o, q.T = i;
          }
        }
        Zl = b1, Hn(), ud(), l0();
      }
    }
    function Hn() {
      if (Zl === b1) {
        Zl = Gs;
        var e = Io, t = rh, a = Po, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = q.T, q.T = null;
          var o = xe.p;
          xe.p = El;
          var f = yt;
          yt |= _u;
          try {
            ih = a, ch = e, Rm(t, e), ch = ih = null, a = _v;
            var d = wp(e.containerInfo), h = a.focusedElem, g = a.selectionRange;
            if (d !== h && h && h.ownerDocument && Hp(
              h.ownerDocument.documentElement,
              h
            )) {
              if (g !== null && Bh(h)) {
                var v = g.start, w = g.end;
                if (w === void 0 && (w = v), "selectionStart" in h)
                  h.selectionStart = v, h.selectionEnd = Math.min(
                    w,
                    h.value.length
                  );
                else {
                  var Y = h.ownerDocument || document, C = Y && Y.defaultView || window;
                  if (C.getSelection) {
                    var V = C.getSelection(), ce = h.textContent.length, ze = Math.min(
                      g.start,
                      ce
                    ), Ot = g.end === void 0 ? ze : Math.min(g.end, ce);
                    !V.extend && ze > Ot && (d = Ot, Ot = ze, ze = d);
                    var et = Nh(
                      h,
                      ze
                    ), T = Nh(
                      h,
                      Ot
                    );
                    if (et && T && (V.rangeCount !== 1 || V.anchorNode !== et.node || V.anchorOffset !== et.offset || V.focusNode !== T.node || V.focusOffset !== T.offset)) {
                      var E = Y.createRange();
                      E.setStart(et.node, et.offset), V.removeAllRanges(), ze > Ot ? (V.addRange(E), V.extend(T.node, T.offset)) : (E.setEnd(T.node, T.offset), V.addRange(E));
                    }
                  }
                }
              }
              for (Y = [], V = h; V = V.parentNode; )
                V.nodeType === 1 && Y.push({
                  element: V,
                  left: V.scrollLeft,
                  top: V.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < Y.length; h++) {
                var x = Y[h];
                x.element.scrollLeft = x.left, x.element.scrollTop = x.top;
              }
            }
            og = !!Bv, _v = Bv = null;
          } finally {
            yt = f, xe.p = o, q.T = i;
          }
        }
        e.current = t, Zl = S1;
      }
    }
    function ud() {
      if (Zl === S1) {
        Zl = Gs;
        var e = Io, t = rh, a = Po, i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = q.T, q.T = null;
          var o = xe.p;
          xe.p = El;
          var f = yt;
          yt |= _u;
          try {
            P !== null && typeof P.markLayoutEffectsStarted == "function" && P.markLayoutEffectsStarted(a), ih = a, ch = e, xm(
              e,
              t.alternate,
              t
            ), ch = ih = null, P !== null && typeof P.markLayoutEffectsStopped == "function" && P.markLayoutEffectsStopped();
          } finally {
            yt = f, xe.p = o, q.T = i;
          }
        }
        Zl = T1;
      }
    }
    function l0() {
      if (Zl === z2 || Zl === T1) {
        Zl = Gs, Yg();
        var e = Io, t = rh, a = Po, i = E1, o = (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0;
        o ? Zl = Av : (Zl = Gs, rh = Io = null, wn(e, e.pendingLanes), Vs = 0, ap = null);
        var f = e.pendingLanes;
        if (f === 0 && (Fo = null), o || So(e), o = Eh(a), t = t.stateNode, Tl && typeof Tl.onCommitFiberRoot == "function")
          try {
            var d = (t.current.flags & 128) === 128;
            switch (o) {
              case El:
                var h = Dd;
                break;
              case on:
                h = bs;
                break;
              case Mu:
                h = _o;
                break;
              case Hd:
                h = Ss;
                break;
              default:
                h = _o;
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
        if (Zt && e.memoizedUpdaters.clear(), Mm(), i !== null) {
          d = q.T, h = xe.p, xe.p = El, q.T = null;
          try {
            var g = e.onRecoverableError;
            for (t = 0; t < i.length; t++) {
              var v = i[t], w = a0(v.stack);
              ie(
                v.source,
                g,
                v.value,
                w
              );
            }
          } finally {
            q.T = d, xe.p = h;
          }
        }
        (Po & 3) !== 0 && vo(), Ba(e), f = e.pendingLanes, (a & 4194090) !== 0 && (f & 42) !== 0 ? (B0 = !0, e === Rv ? lp++ : (lp = 0, Rv = e)) : lp = 0, mc(0), xt();
      }
    }
    function a0(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function wn(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, gn(t)));
    }
    function vo(e) {
      return Hn(), ud(), l0(), as();
    }
    function as() {
      if (Zl !== Av) return !1;
      var e = Io, t = xv;
      xv = 0;
      var a = Eh(Po), i = Mu > a ? Mu : a;
      a = q.T;
      var o = xe.p;
      try {
        xe.p = i, q.T = null, i = zv, zv = null;
        var f = Io, d = Po;
        if (Zl = Gs, rh = Io = null, Po = 0, (yt & (Aa | _u)) !== fn)
          throw Error("Cannot flush passive effects while already rendering.");
        Ov = !0, J0 = !1, P !== null && typeof P.markPassiveEffectsStarted == "function" && P.markPassiveEffectsStarted(d);
        var h = yt;
        if (yt |= _u, Om(f.current), Ff(
          f,
          f.current,
          d,
          i
        ), P !== null && typeof P.markPassiveEffectsStopped == "function" && P.markPassiveEffectsStopped(), So(f), yt = h, mc(0, !1), J0 ? f === ap ? Vs++ : (Vs = 0, ap = f) : Vs = 0, J0 = Ov = !1, Tl && typeof Tl.onPostCommitFiberRoot == "function")
          try {
            Tl.onPostCommitFiberRoot(bi, f);
          } catch (v) {
            na || (na = !0, console.error(
              "React instrumentation encountered an error: %s",
              v
            ));
          }
        var g = f.current.stateNode;
        return g.effectDuration = 0, g.passiveEffectDuration = 0, !0;
      } finally {
        xe.p = o, q.T = a, wn(e, t);
      }
    }
    function bo(e, t, a) {
      t = ra(a, t), t = Dl(e.stateNode, t, 2), e = Ia(e, t, 2), e !== null && (Gc(e, 2), Ba(e));
    }
    function Te(e, t, a) {
      if (dh = !1, e.tag === 3)
        bo(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            bo(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Fo === null || !Fo.has(i))) {
              e = ra(a, e), a = Yt(2), i = Ia(t, a, 2), i !== null && (Vf(
                a,
                i,
                t,
                e
              ), Gc(i, 2), Ba(i));
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
    function Bm(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new T2();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (Sv = !0, o.add(a), i = Hg.bind(null, e, t, a), Zt && To(e, a), t.then(i, i));
    }
    function Hg(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Um() && q.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Rt === e && (Ie & a) === a && ($t === _s || $t === gv && (Ie & 62914560) === Ie && Xn() - Ev < g1 ? (yt & Aa) === fn && hc(e, 0) : Tv |= a, Ys === Ie && (Ys = 0)), Ba(e);
    }
    function _m(e, t) {
      t === 0 && (t = cf()), e = Jl(e, t), e !== null && (Gc(e, t), Ba(e));
    }
    function ns(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), _m(e, a);
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
      i !== null && i.delete(t), _m(e, a);
    }
    function id(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === Co;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && ie(
            o,
            qm,
            i,
            o,
            (o.mode & hb) === Ht
          ) : id(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? ie(
            o,
            qm,
            i,
            o
          ) : o.subtreeFlags & 67108864 && ie(
            o,
            id,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function qm(e, t) {
      var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
      He(!0);
      try {
        ya(t), a && es(t), bu(e, t.alternate, t, !1), a && $r(e, t, 0, null, !1, 0);
      } finally {
        He(!1);
      }
    }
    function So(e) {
      var t = !0;
      e.current.mode & (ca | Hu) || (t = !1), id(
        e,
        e.current,
        t
      );
    }
    function un(e) {
      if ((yt & Aa) === fn) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = le(e) || "ReactComponent", K0 !== null) {
            if (K0.has(t)) return;
            K0.add(t);
          } else K0 = /* @__PURE__ */ new Set([t]);
          ie(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function To(e, t) {
      Zt && e.memoizedUpdaters.forEach(function(a) {
        au(e, a, t);
      });
    }
    function jm(e, t) {
      var a = q.actQueue;
      return a !== null ? (a.push(t), D2) : Od(e, t);
    }
    function n0(e) {
      Um() && q.actQueue === null && ie(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          le(e)
        );
      });
    }
    function Ba(e) {
      e !== hh && e.next === null && (hh === null ? $0 = hh = e : hh = hh.next = e), W0 = !0, q.actQueue !== null ? Mv || (Mv = !0, tl()) : Dv || (Dv = !0, tl());
    }
    function mc(e, t) {
      if (!Uv && W0) {
        Uv = !0;
        do
          for (var a = !1, i = $0; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - Cl(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, fd(i, f));
            } else
              f = Ie, f = oa(
                i,
                i === Rt ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== Qs
              ), (f & 3) === 0 || uf(i, f) || (a = !0, fd(i, f));
            i = i.next;
          }
        while (a);
        Uv = !1;
      }
    }
    function cd() {
      od();
    }
    function od() {
      W0 = Mv = Dv = !1;
      var e = 0;
      Xs !== 0 && (Eo() && (e = Xs), Xs = 0);
      for (var t = Xn(), a = null, i = $0; i !== null; ) {
        var o = i.next, f = Nn(i, t);
        f === 0 ? (i.next = null, a === null ? $0 = o : a.next = o, o === null && (hh = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (W0 = !0)), i = o;
      }
      mc(e);
    }
    function Nn(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Cl(f), h = 1 << d, g = o[d];
        g === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = pp(h, t)) : g <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = Rt, a = Ie, a = oa(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Qs
      ), i = e.callbackNode, a === 0 || e === t && (St === qs || St === js) || e.cancelPendingCommit !== null)
        return i !== null && sd(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || uf(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || q.actQueue !== null && i !== Cv)
          sd(i);
        else return t;
        switch (Eh(a)) {
          case El:
          case on:
            a = bs;
            break;
          case Mu:
            a = _o;
            break;
          case Hd:
            a = Ss;
            break;
          default:
            a = _o;
        }
        return i = Vt.bind(null, e), q.actQueue !== null ? (q.actQueue.push(i), a = Cv) : a = Od(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && sd(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Vt(e, t) {
      if (B0 = N0 = !1, Zl !== Gs && Zl !== Av)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (vo() && e.callbackNode !== a)
        return null;
      var i = Ie;
      return i = oa(
        e,
        e === Rt ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Qs
      ), i === 0 ? null : (el(
        e,
        i,
        t
      ), Nn(e, Xn()), e.callbackNode != null && e.callbackNode === a ? Vt.bind(null, e) : null);
    }
    function fd(e, t) {
      if (vo()) return null;
      N0 = B0, B0 = !1, el(e, t, !0);
    }
    function sd(e) {
      e !== Cv && e !== null && jg(e);
    }
    function tl() {
      q.actQueue !== null && q.actQueue.push(function() {
        return od(), null;
      }), j2(function() {
        (yt & (Aa | _u)) !== fn ? Od(
          Dd,
          cd
        ) : od();
      });
    }
    function Ym() {
      return Xs === 0 && (Xs = Sh()), Xs;
    }
    function Gm(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (F(e, "action"), Kc("" + e));
    }
    function Vm(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function Ut(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = Gm(
          (o[ua] || null).action
        ), d = i.submitter;
        d && (t = (t = d[ua] || null) ? Gm(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new ve(
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
                  if (Xs !== 0) {
                    var g = d ? Vm(
                      o,
                      d
                    ) : new FormData(o), v = {
                      pending: !0,
                      data: g,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(v), tc(
                      a,
                      v,
                      null,
                      g
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), g = d ? Vm(
                    o,
                    d
                  ) : new FormData(o), v = {
                    pending: !0,
                    data: g,
                    method: o.method,
                    action: f
                  }, Object.freeze(v), tc(
                    a,
                    v,
                    f,
                    g
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
    function Bn(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], g = h.instance, v = h.currentTarget;
              if (h = h.listener, g !== o && f.isPropagationStopped())
                break e;
              g !== null ? ie(
                g,
                gl,
                f,
                h,
                v
              ) : gl(f, h, v), o = g;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], g = h.instance, v = h.currentTarget, h = h.listener, g !== o && f.isPropagationStopped())
                break e;
              g !== null ? ie(
                g,
                gl,
                f,
                h,
                v
              ) : gl(f, h, v), o = g;
            }
        }
      }
    }
    function ke(e, t) {
      Hv.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[my];
      a === void 0 && (a = t[my] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (dd(t, e, 2, !1), a.add(i));
    }
    function rd(e, t, a) {
      Hv.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), dd(
        a,
        e,
        i,
        t
      );
    }
    function Xm(e) {
      if (!e[F0]) {
        e[F0] = !0, S0.forEach(function(a) {
          a !== "selectionchange" && (Hv.has(a) || rd(a, !1, e), rd(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[F0] || (t[F0] = !0, rd("selectionchange", !1, t));
      }
    }
    function dd(e, t, a, i) {
      switch (Ad(t)) {
        case El:
          var o = Bg;
          break;
        case on:
          o = Ed;
          break;
        default:
          o = mi;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !U || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
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
                var g = d.tag;
                if ((g === 3 || g === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = nu(h), d === null) return;
              if (g = d.tag, g === 5 || g === 6 || g === 26 || g === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      ar(function() {
        var v = f, w = Vi(a), Y = [];
        e: {
          var C = db.get(e);
          if (C !== void 0) {
            var V = ve, ce = e;
            switch (e) {
              case "keypress":
                if ($c(a) === 0) break e;
              case "keydown":
              case "keyup":
                V = ZS;
                break;
              case "focusin":
                ce = "focus", V = lt;
                break;
              case "focusout":
                ce = "blur", V = lt;
                break;
              case "beforeblur":
              case "afterblur":
                V = lt;
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
                V = Qe;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                V = Ee;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                V = KS;
                break;
              case ob:
              case fb:
              case sb:
                V = Lg;
                break;
              case rb:
                V = WS;
                break;
              case "scroll":
              case "scrollend":
                V = D;
                break;
              case "wheel":
                V = IS;
                break;
              case "copy":
              case "cut":
              case "paste":
                V = jS;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                V = eb;
                break;
              case "toggle":
              case "beforetoggle":
                V = e2;
            }
            var ze = (t & 4) !== 0, Ot = !ze && (e === "scroll" || e === "scrollend"), et = ze ? C !== null ? C + "Capture" : null : C;
            ze = [];
            for (var T = v, E; T !== null; ) {
              var x = T;
              if (E = x.stateNode, x = x.tag, x !== 5 && x !== 26 && x !== 27 || E === null || et === null || (x = cu(T, et), x != null && ze.push(
                Gl(
                  T,
                  x,
                  E
                )
              )), Ot) break;
              T = T.return;
            }
            0 < ze.length && (C = new V(
              C,
              ce,
              null,
              a,
              w
            ), Y.push({
              event: C,
              listeners: ze
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (C = e === "mouseover" || e === "pointerover", V = e === "mouseout" || e === "pointerout", C && a !== s && (ce = a.relatedTarget || a.fromElement) && (nu(ce) || ce[Ti]))
              break e;
            if ((V || C) && (C = w.window === w ? w : (C = w.ownerDocument) ? C.defaultView || C.parentWindow : window, V ? (ce = a.relatedTarget || a.toElement, V = v, ce = ce ? nu(ce) : null, ce !== null && (Ot = Ce(ce), ze = ce.tag, ce !== Ot || ze !== 5 && ze !== 27 && ze !== 6) && (ce = null)) : (V = null, ce = v), V !== ce)) {
              if (ze = Qe, x = "onMouseLeave", et = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (ze = eb, x = "onPointerLeave", et = "onPointerEnter", T = "pointer"), Ot = V == null ? C : qu(V), E = ce == null ? C : qu(ce), C = new ze(
                x,
                T + "leave",
                V,
                a,
                w
              ), C.target = Ot, C.relatedTarget = E, x = null, nu(w) === v && (ze = new ze(
                et,
                T + "enter",
                ce,
                a,
                w
              ), ze.target = E, ze.relatedTarget = Ot, x = ze), Ot = x, V && ce)
                t: {
                  for (ze = V, et = ce, T = 0, E = ze; E; E = fl(E))
                    T++;
                  for (E = 0, x = et; x; x = fl(x))
                    E++;
                  for (; 0 < T - E; )
                    ze = fl(ze), T--;
                  for (; 0 < E - T; )
                    et = fl(et), E--;
                  for (; T--; ) {
                    if (ze === et || et !== null && ze === et.alternate)
                      break t;
                    ze = fl(ze), et = fl(et);
                  }
                  ze = null;
                }
              else ze = null;
              V !== null && Lm(
                Y,
                C,
                V,
                ze,
                !1
              ), ce !== null && Ot !== null && Lm(
                Y,
                Ot,
                ce,
                ze,
                !0
              );
            }
          }
          e: {
            if (C = v ? qu(v) : window, V = C.nodeName && C.nodeName.toLowerCase(), V === "select" || V === "input" && C.type === "file")
              var X = Hh;
            else if (Dp(C))
              if (ib)
                X = Dg;
              else {
                X = wh;
                var I = Rg;
              }
            else
              V = C.nodeName, !V || V.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? v && Gi(v.elementType) && (X = Hh) : X = Og;
            if (X && (X = X(e, v))) {
              cr(
                Y,
                X,
                a,
                w
              );
              break e;
            }
            I && I(e, C, v), e === "focusout" && v && C.type === "number" && v.memoizedProps.value != null && Fs(C, "number", C.value);
          }
          switch (I = v ? qu(v) : window, e) {
            case "focusin":
              (Dp(I) || I.contentEditable === "true") && (Xd = I, Zg = v, Ny = null);
              break;
            case "focusout":
              Ny = Zg = Xd = null;
              break;
            case "mousedown":
              kg = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              kg = !1, Np(
                Y,
                a,
                w
              );
              break;
            case "selectionchange":
              if (n2) break;
            case "keydown":
            case "keyup":
              Np(
                Y,
                a,
                w
              );
          }
          var Be;
          if (Qg)
            e: {
              switch (e) {
                case "compositionstart":
                  var oe = "onCompositionStart";
                  break e;
                case "compositionend":
                  oe = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  oe = "onCompositionUpdate";
                  break e;
              }
              oe = void 0;
            }
          else
            Vd ? jl(e, a) && (oe = "onCompositionEnd") : e === "keydown" && a.keyCode === tb && (oe = "onCompositionStart");
          oe && (lb && a.locale !== "ko" && (Vd || oe !== "onCompositionStart" ? oe === "onCompositionEnd" && Vd && (Be = ou()) : (K = w, H = "value" in K ? K.value : K.textContent, Vd = !0)), I = us(
            v,
            oe
          ), 0 < I.length && (oe = new Pv(
            oe,
            e,
            null,
            a,
            w
          ), Y.push({
            event: oe,
            listeners: I
          }), Be ? oe.data = Be : (Be = Qu(a), Be !== null && (oe.data = Be)))), (Be = l2 ? ir(e, a) : vf(e, a)) && (oe = us(
            v,
            "onBeforeInput"
          ), 0 < oe.length && (I = new GS(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            w
          ), Y.push({
            event: I,
            listeners: oe
          }), I.data = Be)), Ut(
            Y,
            e,
            v,
            a,
            w
          );
        }
        Bn(Y, t);
      });
    }
    function Gl(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function us(e, t) {
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
    function Lm(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, g = h.alternate, v = h.stateNode;
        if (h = h.tag, g !== null && g === i) break;
        h !== 5 && h !== 26 && h !== 27 || v === null || (g = v, o ? (v = cu(a, f), v != null && d.unshift(
          Gl(a, v, g)
        )) : o || (v = cu(a, f), v != null && d.push(
          Gl(a, v, g)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function _n(e, t) {
      Jc(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || Uy || (Uy = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Ga,
        possibleRegistrationNames: Ac
      };
      Gi(e) || typeof t.is == "string" || Mh(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function Ct(e, t, a, i) {
      t !== a && (a = vl(a), vl(t) !== a && (i[e] = t));
    }
    function ri(e, t, a) {
      t.forEach(function(i) {
        a[Zm(i)] = i === "style" ? pc(e) : e.getAttribute(i);
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
    function hd(e, t) {
      return e = e.namespaceURI === Os || e.namespaceURI === Lo ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function vl(e) {
      return B(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        he(e)
      ), ae(e)), (typeof e == "string" ? e : "" + e).replace(M2, `
`).replace(U2, "");
    }
    function Qm(e, t) {
      return t = vl(t), vl(e) === t;
    }
    function Tu() {
    }
    function ut(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (pf(i, t, !1), t === "body" || t === "textarea" && i === "" || Yi(e, i)) : (typeof i == "number" || typeof i == "bigint") && (pf("" + i, t, !1), t !== "body" && Yi(e, "" + i));
          break;
        case "className":
          ff(e, "class", i);
          break;
        case "tabIndex":
          ff(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          ff(e, a, i);
          break;
        case "style":
          gf(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            ff(e, "data", i);
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
          F(i, a), i = Kc("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || eg || (eg = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || P0 || (P0 = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || I0 ? t !== "button" || o.type == null || o.type === "submit" || I0 ? typeof i == "function" && (o.name == null || O1 || (O1 = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || eg || (eg = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || P0 || (P0 = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (I0 = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (I0 = !0, console.error(
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
            typeof f == "function" && (a === "formAction" ? (t !== "input" && ut(e, t, "name", o.name, o, null), ut(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), ut(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), ut(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (ut(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), ut(e, t, "method", o.method, o, null), ut(
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
          F(i, a), i = Kc("" + i), e.setAttribute(a, i);
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
          F(i, a), a = Kc("" + i), e.setAttributeNS(Ls, "xlink:href", a);
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
          i !== "" || tg[a] || (tg[a] = !0, console.error(
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
          ke("beforetoggle", e), ke("toggle", e), of(e, "popover", i);
          break;
        case "xlinkActuate":
          ka(
            e,
            Ls,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          ka(
            e,
            Ls,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          ka(
            e,
            Ls,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          ka(
            e,
            Ls,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          ka(
            e,
            Ls,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          ka(
            e,
            Ls,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          ka(
            e,
            wv,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          ka(
            e,
            wv,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          ka(
            e,
            wv,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), of(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          D1 || i == null || typeof i != "object" || (D1 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = lr(a), of(e, a, i)) : Ga.hasOwnProperty(a) && i != null && typeof i != "function" && _a(a, i);
      }
    }
    function yc(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          gf(e, i, f);
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
          typeof i == "string" ? Yi(e, i) : (typeof i == "number" || typeof i == "bigint") && Yi(e, "" + i);
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
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : of(e, a, i);
            }
      }
    }
    function Xt(e, t, a) {
      switch (_n(t, a), t) {
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
                    ut(e, t, f, d, a, null);
                }
            }
          o && ut(e, t, "srcSet", a.srcSet, a, null), i && ut(e, t, "src", a.src, a, null);
          return;
        case "input":
          Yu("input", a), ke("invalid", e);
          var h = f = d = o = null, g = null, v = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var w = a[i];
              if (w != null)
                switch (i) {
                  case "name":
                    o = w;
                    break;
                  case "type":
                    d = w;
                    break;
                  case "checked":
                    g = w;
                    break;
                  case "defaultChecked":
                    v = w;
                    break;
                  case "value":
                    f = w;
                    break;
                  case "defaultValue":
                    h = w;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (w != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    ut(e, t, i, w, a, null);
                }
            }
          Gu(e, a), Ap(
            e,
            f,
            h,
            g,
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
                  ut(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          hf(e, a), t = f, a = d, e.multiple = !!i, t != null ? iu(e, !!i, t, !1) : a != null && iu(e, !!i, a, !0);
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
                  ut(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          hn(e, a), xh(e, i, o, f), uu(e);
          return;
        case "option":
          Ah(e, a);
          for (g in a)
            if (a.hasOwnProperty(g) && (i = a[g], i != null))
              switch (g) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  ut(e, t, g, i, a, null);
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
          for (i = 0; i < np.length; i++)
            ke(np[i], e);
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
                  ut(e, t, v, i, a, null);
              }
          return;
        default:
          if (Gi(t)) {
            for (w in a)
              a.hasOwnProperty(w) && (i = a[w], i !== void 0 && yc(
                e,
                t,
                w,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && ut(e, t, h, i, a, null));
    }
    function u0(e, t, a, i) {
      switch (_n(t, i), t) {
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
          var o = null, f = null, d = null, h = null, g = null, v = null, w = null;
          for (V in a) {
            var Y = a[V];
            if (a.hasOwnProperty(V) && Y != null)
              switch (V) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  g = Y;
                default:
                  i.hasOwnProperty(V) || ut(
                    e,
                    t,
                    V,
                    null,
                    i,
                    Y
                  );
              }
          }
          for (var C in i) {
            var V = i[C];
            if (Y = a[C], i.hasOwnProperty(C) && (V != null || Y != null))
              switch (C) {
                case "type":
                  f = V;
                  break;
                case "name":
                  o = V;
                  break;
                case "checked":
                  v = V;
                  break;
                case "defaultChecked":
                  w = V;
                  break;
                case "value":
                  d = V;
                  break;
                case "defaultValue":
                  h = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  V !== Y && ut(
                    e,
                    t,
                    C,
                    V,
                    i,
                    Y
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || R1 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), R1 = !0), !t || i || z1 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), z1 = !0), Vu(
            e,
            d,
            h,
            g,
            v,
            w,
            f,
            o
          );
          return;
        case "select":
          V = d = h = C = null;
          for (f in a)
            if (g = a[f], a.hasOwnProperty(f) && g != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  V = g;
                default:
                  i.hasOwnProperty(f) || ut(
                    e,
                    t,
                    f,
                    null,
                    i,
                    g
                  );
              }
          for (o in i)
            if (f = i[o], g = a[o], i.hasOwnProperty(o) && (f != null || g != null))
              switch (o) {
                case "value":
                  C = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== g && ut(
                    e,
                    t,
                    o,
                    f,
                    i,
                    g
                  );
              }
          i = h, t = d, a = V, C != null ? iu(e, !!t, C, !1) : !!a != !!t && (i != null ? iu(e, !!t, i, !0) : iu(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          V = C = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  ut(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  C = o;
                  break;
                case "defaultValue":
                  V = o;
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
                  o !== f && ut(e, t, d, o, i, f);
              }
          Is(e, C, V);
          return;
        case "option":
          for (var ce in a)
            if (C = a[ce], a.hasOwnProperty(ce) && C != null && !i.hasOwnProperty(ce))
              switch (ce) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  ut(
                    e,
                    t,
                    ce,
                    null,
                    i,
                    C
                  );
              }
          for (g in i)
            if (C = i[g], V = a[g], i.hasOwnProperty(g) && C !== V && (C != null || V != null))
              switch (g) {
                case "selected":
                  e.selected = C && typeof C != "function" && typeof C != "symbol";
                  break;
                default:
                  ut(
                    e,
                    t,
                    g,
                    C,
                    i,
                    V
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
            C = a[ze], a.hasOwnProperty(ze) && C != null && !i.hasOwnProperty(ze) && ut(
              e,
              t,
              ze,
              null,
              i,
              C
            );
          for (v in i)
            if (C = i[v], V = a[v], i.hasOwnProperty(v) && C !== V && (C != null || V != null))
              switch (v) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (C != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  ut(
                    e,
                    t,
                    v,
                    C,
                    i,
                    V
                  );
              }
          return;
        default:
          if (Gi(t)) {
            for (var Ot in a)
              C = a[Ot], a.hasOwnProperty(Ot) && C !== void 0 && !i.hasOwnProperty(Ot) && yc(
                e,
                t,
                Ot,
                void 0,
                i,
                C
              );
            for (w in i)
              C = i[w], V = a[w], !i.hasOwnProperty(w) || C === V || C === void 0 && V === void 0 || yc(
                e,
                t,
                w,
                C,
                i,
                V
              );
            return;
          }
      }
      for (var et in a)
        C = a[et], a.hasOwnProperty(et) && C != null && !i.hasOwnProperty(et) && ut(e, t, et, null, i, C);
      for (Y in i)
        C = i[Y], V = a[Y], !i.hasOwnProperty(Y) || C === V || C == null && V == null || ut(e, t, Y, C, i, V);
    }
    function Zm(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function pc(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function km(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (ee(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || Rs.has(f) ? (ee(d, f), i += o + f.replace(Uu, "-$1").toLowerCase().replace(Cu, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(Uu, "-$1").toLowerCase().replace(Cu, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = vl(i), vl(t) !== i && (a.style = pc(e)));
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
      Ct(t, e, i, f);
    }
    function Jm(e, t, a, i, o, f) {
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
      Ct(t, e, i, f);
    }
    function Km(e, t, a, i, o, f) {
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
      Ct(t, e, i, f);
    }
    function i0(e, t, a, i, o, f) {
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
      Ct(t, e, i, f);
    }
    function rt(e, t, a, i, o, f) {
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
            if (F(i, t), a = Kc("" + i), e === a)
              return;
        }
      Ct(t, e, i, f);
    }
    function Et(e, t, a, i) {
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
      if (Gi(t)) {
        for (var g in a)
          if (a.hasOwnProperty(g)) {
            var v = a[g];
            if (v != null) {
              if (Ga.hasOwnProperty(g))
                typeof v != "function" && _a(g, v);
              else if (a.suppressHydrationWarning !== !0)
                switch (g) {
                  case "children":
                    typeof v != "string" && typeof v != "number" || Ct(
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
                    d = e.innerHTML, v = v ? v.__html : void 0, v != null && (v = hd(e, v), Ct(
                      g,
                      d,
                      v,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(g), km(e, v, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(g.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      g
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = bp(
                      e,
                      "class",
                      v
                    ), Ct(
                      "className",
                      d,
                      v,
                      o
                    );
                    continue;
                  default:
                    i.context === _c && t !== "svg" && t !== "math" ? f.delete(g.toLowerCase()) : f.delete(g), d = bp(
                      e,
                      g,
                      v
                    ), Ct(
                      g,
                      d,
                      v,
                      o
                    );
                }
            }
          }
      } else
        for (v in a)
          if (a.hasOwnProperty(v) && (g = a[v], g != null)) {
            if (Ga.hasOwnProperty(v))
              typeof g != "function" && _a(v, g);
            else if (a.suppressHydrationWarning !== !0)
              switch (v) {
                case "children":
                  typeof g != "string" && typeof g != "number" || Ct(
                    "children",
                    e.textContent,
                    g,
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
                  d = e.innerHTML, g = g ? g.__html : void 0, g != null && (g = hd(e, g), d !== g && (o[v] = { __html: d }));
                  continue;
                case "className":
                  Vl(
                    e,
                    v,
                    "class",
                    g,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Vl(
                    e,
                    v,
                    "tabindex",
                    g,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(v), km(e, g, o);
                  continue;
                case "multiple":
                  f.delete(v), Ct(
                    v,
                    e.multiple,
                    g,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(v), Ct(
                    v,
                    e.muted,
                    g,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), Ct(
                    v,
                    e.autofocus,
                    g,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(v), d = e.getAttribute("data"), Ct(
                      v,
                      d,
                      g,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(g !== "" || t === "a" && v === "href" || t === "object" && v === "data")) {
                    console.error(
                      v === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      v,
                      v
                    );
                    continue;
                  }
                  rt(
                    e,
                    v,
                    v,
                    g,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(v), typeof g == "function") {
                    f.delete(v.toLowerCase()), v === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === C2) {
                    f.delete(v.toLowerCase()), Ct(
                      v,
                      "function",
                      g,
                      o
                    );
                    continue;
                  }
                  rt(
                    e,
                    v,
                    v.toLowerCase(),
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  rt(
                    e,
                    v,
                    "xlink:href",
                    g,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  Km(
                    e,
                    v,
                    "contenteditable",
                    g,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  Km(
                    e,
                    v,
                    "spellcheck",
                    g,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  Km(
                    e,
                    v,
                    v,
                    g,
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
                  Jm(
                    e,
                    v,
                    v.toLowerCase(),
                    g,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var w = d = v, Y = o;
                    if (f.delete(w), h = h.getAttribute(w), h === null)
                      switch (typeof g) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (g === !1) break e;
                      }
                    else if (g != null)
                      switch (typeof g) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (g === !0 && h === "") break e;
                          break;
                        default:
                          if (F(g, d), h === "" + g)
                            break e;
                      }
                    Ct(
                      d,
                      h,
                      g,
                      Y
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, w = d = v, Y = o, f.delete(w), h = h.getAttribute(w), h === null)
                      switch (typeof g) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(g) || 1 > g) break e;
                      }
                    else if (g != null)
                      switch (typeof g) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(g) || 1 > g) && (F(g, d), h === "" + g))
                            break e;
                      }
                    Ct(
                      d,
                      h,
                      g,
                      Y
                    );
                  }
                  continue;
                case "rowSpan":
                  i0(
                    e,
                    v,
                    "rowspan",
                    g,
                    f,
                    o
                  );
                  continue;
                case "start":
                  i0(
                    e,
                    v,
                    v,
                    g,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Vl(
                    e,
                    v,
                    "x-height",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Vl(
                    e,
                    v,
                    "xlink:actuate",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Vl(
                    e,
                    v,
                    "xlink:arcrole",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Vl(
                    e,
                    v,
                    "xlink:role",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Vl(
                    e,
                    v,
                    "xlink:show",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Vl(
                    e,
                    v,
                    "xlink:title",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Vl(
                    e,
                    v,
                    "xlink:type",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Vl(
                    e,
                    v,
                    "xml:base",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Vl(
                    e,
                    v,
                    "xml:lang",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Vl(
                    e,
                    v,
                    "xml:space",
                    g,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  g !== "" || tg[v] || (tg[v] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    v
                  )), Jm(
                    e,
                    v,
                    v,
                    g,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < v.length) || v[0] !== "o" && v[0] !== "O" || v[1] !== "n" && v[1] !== "N") {
                    h = lr(v), d = !1, i.context === _c && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (w = v.toLowerCase(), w = Rc.hasOwnProperty(
                      w
                    ) && Rc[w] || null, w !== null && w !== v && (d = !0, f.delete(w)), f.delete(h));
                    e: if (w = e, Y = h, h = g, wi(Y))
                      if (w.hasAttribute(Y))
                        w = w.getAttribute(
                          Y
                        ), F(
                          h,
                          Y
                        ), h = w === "" + h ? h : w;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (w = Y.toLowerCase().slice(0, 5), w !== "data-" && w !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || Ct(
                      v,
                      h,
                      g,
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
        case Lo:
          return mh;
        case Os:
          return ng;
        default:
          return _c;
      }
    }
    function ta(e, t) {
      if (e === _c)
        switch (t) {
          case "svg":
            return mh;
          case "math":
            return ng;
          default:
            return _c;
        }
      return e === mh && t === "foreignObject" ? _c : e;
    }
    function qn(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Eo() {
      var e = window.event;
      return e && e.type === "popstate" ? e === qv ? !1 : (qv = e, !0) : (qv = null, !1);
    }
    function $m(e) {
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
      u0(e, t, a, i), e[ua] = i;
    }
    function Au(e) {
      Yi(e, "");
    }
    function gc(e, t, a) {
      e.nodeValue = a;
    }
    function jn(e) {
      return e === "head";
    }
    function qa(e, t) {
      e.removeChild(t);
    }
    function Ao(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function xo(e, t) {
      var a = t, i = 0, o = 0;
      do {
        var f = a.nextSibling;
        if (e.removeChild(a), f && f.nodeType === 8)
          if (a = f.data, a === ag) {
            if (0 < i && 8 > i) {
              a = i;
              var d = e.ownerDocument;
              if (a & w2 && Do(d.documentElement), a & N2 && Do(d.body), a & B2)
                for (a = d.head, Do(a), d = a.firstChild; d; ) {
                  var h = d.nextSibling, g = d.nodeName;
                  d[Yo] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && d.rel.toLowerCase() === "stylesheet" || a.removeChild(d), d = h;
                }
            }
            if (o === 0) {
              e.removeChild(f), Tc(t);
              return;
            }
            o--;
          } else
            a === lg || a === Bc || a === up ? o++ : i = a.charCodeAt(0) - 48;
        else i = 0;
        a = f;
      } while (a);
      Tc(t);
    }
    function la(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Wm(e) {
      e.nodeValue = "";
    }
    function Fm(e, t) {
      t = t[_2], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function md(e, t) {
      e.nodeValue = t;
    }
    function zo(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            zo(a), Xc(a);
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
          if (!e[Yo])
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
    function Yn(e) {
      return e.data === up || e.data === Bc && e.ownerDocument.readyState === U1;
    }
    function Ro(e, t) {
      var a = e.ownerDocument;
      if (e.data !== Bc || a.readyState === U1)
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
          if (t = e.data, t === lg || t === up || t === Bc || t === Nv || t === M1)
            break;
          if (t === ag) return null;
        }
      }
      return e;
    }
    function yd(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[Zm(f.name)] = f.name.toLowerCase() === "style" ? pc(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? { type: "Suspense", props: {} } : e.nodeValue;
    }
    function pd(e, t, a) {
      return a === null || a[H2] !== !0 ? (e.nodeValue === t ? e = null : (t = vl(t), e = vl(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function Im(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === ag) {
            if (t === 0)
              return Sl(e.nextSibling);
            t--;
          } else
            a !== lg && a !== up && a !== Bc || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function Oo(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === lg || a === up || a === Bc) {
            if (t === 0) return e;
            t--;
          } else a === ag && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function Pm(e) {
      Tc(e);
    }
    function pa(e) {
      Tc(e);
    }
    function ey(e, t, a, i, o) {
      switch (o && tr(e, i.ancestorInfo), t = Ke(a), e) {
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
    function Do(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      Xc(e);
    }
    function is(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function c0(e, t, a) {
      var i = yh;
      if (i && typeof t == "string" && t) {
        var o = sa(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), _1.has(o) || (_1.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), Xt(t, "link", e), nl(t), i.head.appendChild(t)));
      }
    }
    function xu(e, t, a, i) {
      var o = (o = Vn.current) ? is(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = hi(a.href), t = dn(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = hi(a.href);
            var f = dn(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Zs, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              Gn(e)
            )) && !f._p && (d.instance = f, d.state.loading = ip | eu), !tu.has(e))) {
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
              tu.set(e, h), f || o0(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + vc(t) + `
  + ` + vc(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + vc(t) + `
  + ` + vc(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = bc(a), t = dn(o).hoistableScripts, i = t.get(a), i || (i = {
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
    function vc(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : Ou.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : Ou.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : Ou.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function hi(e) {
      return 'href="' + sa(e) + '"';
    }
    function Gn(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function ty(e) {
      return Ge({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function o0(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = ip : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= ip;
      }), t.addEventListener("error", function() {
        return i.loading |= N1;
      }), Xt(t, "link", a), nl(t), e.head.appendChild(t));
    }
    function bc(e) {
      return '[src="' + sa(e) + '"]';
    }
    function Sc(e) {
      return "script[async]" + e;
    }
    function gd(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + sa(a.href) + '"]'
            );
            if (i)
              return t.instance = i, nl(i), i;
            var o = Ge({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), nl(i), Xt(i, "style", o), vd(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = hi(a.href);
            var f = e.querySelector(
              Gn(o)
            );
            if (f)
              return t.state.loading |= eu, t.instance = f, nl(f), f;
            i = ty(a), (o = tu.get(o)) && ly(i, o), f = (e.ownerDocument || e).createElement("link"), nl(f);
            var d = f;
            return d._p = new Promise(function(h, g) {
              d.onload = h, d.onerror = g;
            }), Xt(f, "link", i), t.state.loading |= eu, vd(f, a.precedence, e), t.instance = f;
          case "script":
            return f = bc(a.src), (o = e.querySelector(
              Sc(f)
            )) ? (t.instance = o, nl(o), o) : (i = a, (o = tu.get(f)) && (i = Ge({}, a), ay(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), nl(o), Xt(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & eu) === Zs && (i = t.instance, t.state.loading |= eu, vd(i, a.precedence, e));
      return t.instance;
    }
    function vd(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function ly(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function ay(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function ny(e, t, a) {
      if (ug === null) {
        var i = /* @__PURE__ */ new Map(), o = ug = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = ug, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Yo] || f[Hl] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== Lo) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function uy(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function Mo(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === mh || t.itemProp != null)
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
    function cs(e) {
      return !(e.type === "stylesheet" && (e.state.loading & B1) === Zs);
    }
    function f0() {
    }
    function s0(e, t, a) {
      if (cp === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var i = cp;
      if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & eu) === Zs) {
        if (t.instance === null) {
          var o = hi(a.href), f = e.querySelector(
            Gn(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++, i = os.bind(i), e.then(i, i)), t.state.loading |= eu, t.instance = f, nl(f);
            return;
          }
          f = e.ownerDocument || e, a = ty(a), (o = tu.get(o)) && ly(a, o), f = f.createElement("link"), nl(f);
          var d = f;
          d._p = new Promise(function(h, g) {
            d.onload = h, d.onerror = g;
          }), Xt(f, "link", a), t.instance = f;
        }
        i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & B1) === Zs && (i.count++, t = os.bind(i), e.addEventListener("load", t), e.addEventListener("error", t));
      }
    }
    function r0() {
      if (cp === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var e = cp;
      return e.stylesheets && e.count === 0 && bd(e, e.stylesheets), 0 < e.count ? function(t) {
        var a = setTimeout(function() {
          if (e.stylesheets && bd(e, e.stylesheets), e.unsuspend) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, 6e4);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(a);
        };
      } : null;
    }
    function os() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets)
          bd(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function bd(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, ig = /* @__PURE__ */ new Map(), t.forEach(d0, e), ig = null, os.call(e));
    }
    function d0(e, t) {
      if (!(t.state.loading & eu)) {
        var a = ig.get(e);
        if (a) var i = a.get(Yv);
        else {
          a = /* @__PURE__ */ new Map(), ig.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(Yv, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(Yv, o), a.set(d, o), this.count++, i = os.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= eu;
      }
    }
    function Sd(e, t, a, i, o, f, d, h) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Qs, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Th(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Th(0), this.hiddenUpdates = Th(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function iy(e, t, a, i, o, f, d, h, g, v, w, Y) {
      return e = new Sd(
        e,
        t,
        a,
        d,
        h,
        g,
        v,
        Y
      ), t = o2, f === !0 && (t |= ca | Hu), Zt && (t |= Ll), f = pe(3, null, null, t), e.current = f, f.stateNode = e, t = Rf(), $i(t), e.pooledCache = t, $i(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, Kl(f), e;
    }
    function cy(e) {
      return e ? (e = Qo, e) : Qo;
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
      P !== null && typeof P.markRenderScheduled == "function" && P.markRenderScheduled(t), o = cy(o), i.context === null ? i.context = o : i.pendingContext = o, ia && ba !== null && !G1 && (G1 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        le(ba) || "Unknown"
      )), i = bn(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = Ia(e, i, t), a !== null && (Gt(a, e, t), Iu(a, e, t));
    }
    function Td(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function oy(e, t) {
      Td(e, t), (e = e.alternate) && Td(e, t);
    }
    function fy(e) {
      if (e.tag === 13) {
        var t = Jl(e, 67108864);
        t !== null && Gt(t, e, 67108864), oy(e, 67108864);
      }
    }
    function wg() {
      return ba;
    }
    function Ng() {
      for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; 31 > a; a++) {
        var i = Sg(t);
        e.set(t, i), t *= 2;
      }
      return e;
    }
    function Bg(e, t, a, i) {
      var o = q.T;
      q.T = null;
      var f = xe.p;
      try {
        xe.p = El, mi(e, t, a, i);
      } finally {
        xe.p = f, q.T = o;
      }
    }
    function Ed(e, t, a, i) {
      var o = q.T;
      q.T = null;
      var f = xe.p;
      try {
        xe.p = on, mi(e, t, a, i);
      } finally {
        xe.p = f, q.T = o;
      }
    }
    function mi(e, t, a, i) {
      if (og) {
        var o = fs(i);
        if (o === null)
          Yl(
            e,
            t,
            i,
            fg,
            a
          ), yi(e, i);
        else if (ss(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (yi(e, i), t & 4 && -1 < G2.indexOf(e)) {
          for (; o !== null; ) {
            var f = fa(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = Ci(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var g = 1 << 31 - Cl(d);
                        h.entanglements[1] |= g, d &= ~g;
                      }
                      Ba(f), (yt & (Aa | _u)) === fn && (k0 = Xn() + v1, mc(0));
                    }
                  }
                  break;
                case 13:
                  h = Jl(f, 2), h !== null && Gt(h, f, 2), dc(), oy(f, 2);
              }
            if (f = fs(i), f === null && Yl(
              e,
              t,
              i,
              fg,
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
    function fs(e) {
      return e = Vi(e), Uo(e);
    }
    function Uo(e) {
      if (fg = null, e = nu(e), e !== null) {
        var t = Ce(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = tt(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return fg = e, null;
    }
    function Ad(e) {
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
          return on;
        case "message":
          switch (vi()) {
            case Dd:
              return El;
            case bs:
              return on;
            case _o:
            case Gg:
              return Mu;
            case Ss:
              return Hd;
            default:
              return Mu;
          }
        default:
          return Mu;
      }
    }
    function yi(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ef = null;
          break;
        case "dragenter":
        case "dragleave":
          tf = null;
          break;
        case "mouseover":
        case "mouseout":
          lf = null;
          break;
        case "pointerover":
        case "pointerout":
          fp.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          sp.delete(t.pointerId);
      }
    }
    function aa(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = fa(t), t !== null && fy(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function ss(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return ef = aa(
            ef,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return tf = aa(
            tf,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return lf = aa(
            lf,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return fp.set(
            f,
            aa(
              fp.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, sp.set(
            f,
            aa(
              sp.get(f) || null,
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
    function h0(e) {
      var t = nu(e.target);
      if (t !== null) {
        var a = Ce(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = tt(a), t !== null) {
              e.blockedOn = t, Eg(e.priority, function() {
                if (a.tag === 13) {
                  var i = ea(a);
                  i = Bl(i);
                  var o = Jl(
                    a,
                    i
                  );
                  o !== null && Gt(o, a, i), oy(a, i);
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
    function rs(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = fs(e.nativeEvent);
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
          return t = fa(a), t !== null && fy(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function sy(e, t, a) {
      rs(e) && a.delete(t);
    }
    function m0() {
      Gv = !1, ef !== null && rs(ef) && (ef = null), tf !== null && rs(tf) && (tf = null), lf !== null && rs(lf) && (lf = null), fp.forEach(sy), sp.forEach(sy);
    }
    function ds(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Gv || (Gv = !0, Qt.unstable_scheduleCallback(
        Qt.unstable_NormalPriority,
        m0
      )));
    }
    function y0(e) {
      sg !== e && (sg = e, Qt.unstable_scheduleCallback(
        Qt.unstable_NormalPriority,
        function() {
          sg === e && (sg = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (Uo(i || a) === null)
                continue;
              break;
            }
            var f = fa(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), tc(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function Tc(e) {
      function t(g) {
        return ds(g, e);
      }
      ef !== null && ds(ef, e), tf !== null && ds(tf, e), lf !== null && ds(lf, e), fp.forEach(t), sp.forEach(t);
      for (var a = 0; a < af.length; a++) {
        var i = af[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < af.length && (a = af[0], a.blockedOn === null); )
        h0(a), a.blockedOn === null && af.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[ua] || null;
          if (typeof f == "function")
            d || y0(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[ua] || null)
                h = d.formAction;
              else if (Uo(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), y0(a);
          }
        }
    }
    function xd(e) {
      this._internalRoot = e;
    }
    function hs(e) {
      this._internalRoot = e;
    }
    function p0(e) {
      e[Ti] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Qt = pS(), ms = Qa, _g = yS, Ge = Object.assign, ys = Symbol.for("react.element"), pi = Symbol.for("react.transitional.element"), Ec = Symbol.for("react.portal"), Ne = Symbol.for("react.fragment"), Co = Symbol.for("react.strict_mode"), Ho = Symbol.for("react.profiler"), ry = Symbol.for("react.provider"), zd = Symbol.for("react.consumer"), ja = Symbol.for("react.context"), zu = Symbol.for("react.forward_ref"), wo = Symbol.for("react.suspense"), gi = Symbol.for("react.suspense_list"), ps = Symbol.for("react.memo"), va = Symbol.for("react.lazy"), dy = Symbol.for("react.activity"), g0 = Symbol.for("react.memo_cache_sentinel"), hy = Symbol.iterator, Rd = Symbol.for("react.client.reference"), De = Array.isArray, q = ms.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, xe = _g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, qg = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), gs = [], vs = [], Ya = -1, Ru = gt(null), No = gt(null), Vn = gt(null), Bo = gt(null), Ou = Object.prototype.hasOwnProperty, Od = Qt.unstable_scheduleCallback, jg = Qt.unstable_cancelCallback, v0 = Qt.unstable_shouldYield, Yg = Qt.unstable_requestPaint, Xn = Qt.unstable_now, vi = Qt.unstable_getCurrentPriorityLevel, Dd = Qt.unstable_ImmediatePriority, bs = Qt.unstable_UserBlockingPriority, _o = Qt.unstable_NormalPriority, Gg = Qt.unstable_LowPriority, Ss = Qt.unstable_IdlePriority, Vg = Qt.log, cn = Qt.unstable_setDisableYieldValue, bi = null, Tl = null, P = null, na = !1, Zt = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Cl = Math.clz32 ? Math.clz32 : bh, Md = Math.log, Du = Math.LN2, Ud = 256, Cd = 4194304, El = 2, on = 8, Mu = 32, Hd = 268435456, Si = Math.random().toString(36).slice(2), Hl = "__reactFiber$" + Si, ua = "__reactProps$" + Si, Ti = "__reactContainer$" + Si, my = "__reactEvents$" + Si, b0 = "__reactListeners$" + Si, qo = "__reactHandles$" + Si, jo = "__reactResources$" + Si, Yo = "__reactMarker$" + Si, S0 = /* @__PURE__ */ new Set(), Ga = {}, Ac = {}, T0 = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, wd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Nd = {}, Bd = {}, Ei = 0, yy, py, E0, gy, Go, A0, x0;
    Ks.__reactDisabledLog = !0;
    var vy, Ts, Vo = !1, Es = new (typeof WeakMap == "function" ? WeakMap : Map)(), ba = null, ia = !1, Xg = /[\n"\\]/g, by = !1, Sy = !1, Ty = !1, Ey = !1, _d = !1, Ay = !1, As = ["value", "defaultValue"], z0 = !1, R0 = /["'&<>\n\t]|^\s|\s$/, xy = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), qd = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), jd = qd.concat(["button"]), zy = "dd dt li option optgroup p rp rt".split(" "), Ry = {
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
    }, Xo = {}, Ln = {
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
    }, Uu = /([A-Z])/g, Cu = /^ms-/, xs = /^(?:webkit|moz|o)[A-Z]/, zs = /^-ms-/, Ai = /-(.)/g, O0 = /;\s*$/, xc = {}, zc = {}, D0 = !1, Oy = !1, Rs = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Os = "http://www.w3.org/1998/Math/MathML", Lo = "http://www.w3.org/2000/svg", Yd = /* @__PURE__ */ new Map([
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
    ]), Rc = {
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
    }, Dy = {
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
    }, Qn = {}, My = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Gd = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Uy = !1, Xl = {}, Ds = /^on./, l = /^on[^A-Z]/, n = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), u = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), c = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, s = null, r = null, m = null, p = !1, S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), U = !1;
    if (S)
      try {
        var L = {};
        Object.defineProperty(L, "passive", {
          get: function() {
            U = !0;
          }
        }), window.addEventListener("test", L, L), window.removeEventListener("test", L, L);
      } catch {
        U = !1;
      }
    var K = null, H = null, N = null, ge = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, ve = yl(ge), it = Ge({}, ge, { view: 0, detail: 0 }), D = yl(it), z, M, k, ne = Ge({}, it, {
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
      getModifierState: ur,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== k && (k && e.type === "mousemove" ? (z = e.screenX - k.screenX, M = e.screenY - k.screenY) : M = z = 0, k = e), z);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : M;
      }
    }), Qe = yl(ne), ye = Ge({}, ne, { dataTransfer: 0 }), Ee = yl(ye), sl = Ge({}, it, { relatedTarget: 0 }), lt = yl(sl), xi = Ge({}, ge, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Lg = yl(xi), qS = Ge({}, ge, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), jS = yl(qS), YS = Ge({}, ge, { data: 0 }), Pv = yl(
      YS
    ), GS = Pv, VS = {
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
    }, XS = {
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
    }, LS = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, QS = Ge({}, it, {
      key: function(e) {
        if (e.key) {
          var t = VS[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = $c(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? XS[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ur,
      charCode: function(e) {
        return e.type === "keypress" ? $c(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? $c(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), ZS = yl(QS), kS = Ge({}, ne, {
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
    }), eb = yl(kS), JS = Ge({}, it, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ur
    }), KS = yl(JS), $S = Ge({}, ge, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), WS = yl($S), FS = Ge({}, ne, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), IS = yl(FS), PS = Ge({}, ge, {
      newState: 0,
      oldState: 0
    }), e2 = yl(PS), t2 = [9, 13, 27, 32], tb = 229, Qg = S && "CompositionEvent" in window, Cy = null;
    S && "documentMode" in document && (Cy = document.documentMode);
    var l2 = S && "TextEvent" in window && !Cy, lb = S && (!Qg || Cy && 8 < Cy && 11 >= Cy), ab = 32, nb = String.fromCharCode(ab), ub = !1, Vd = !1, a2 = {
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
    }, Hy = null, wy = null, ib = !1;
    S && (ib = Ch("input") && (!document.documentMode || 9 < document.documentMode));
    var Sa = typeof Object.is == "function" ? Object.is : Mg, n2 = S && "documentMode" in document && 11 >= document.documentMode, Xd = null, Zg = null, Ny = null, kg = !1, Ld = {
      animationend: fu("Animation", "AnimationEnd"),
      animationiteration: fu("Animation", "AnimationIteration"),
      animationstart: fu("Animation", "AnimationStart"),
      transitionrun: fu("Transition", "TransitionRun"),
      transitionstart: fu("Transition", "TransitionStart"),
      transitioncancel: fu("Transition", "TransitionCancel"),
      transitionend: fu("Transition", "TransitionEnd")
    }, Jg = {}, cb = {};
    S && (cb = document.createElement("div").style, "AnimationEvent" in window || (delete Ld.animationend.animation, delete Ld.animationiteration.animation, delete Ld.animationstart.animation), "TransitionEvent" in window || delete Ld.transitionend.transition);
    var ob = Qi("animationend"), fb = Qi("animationiteration"), sb = Qi("animationstart"), u2 = Qi("transitionrun"), i2 = Qi("transitionstart"), c2 = Qi("transitioncancel"), rb = Qi("transitionend"), db = /* @__PURE__ */ new Map(), Kg = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    Kg.push("scrollEnd");
    var $g = /* @__PURE__ */ new WeakMap(), M0 = 1, Oc = 2, Zn = [], Qd = 0, Wg = 0, Qo = {};
    Object.freeze(Qo);
    var kn = null, Zd = null, Ht = 0, o2 = 1, Ll = 2, ca = 8, Hu = 16, hb = 64, mb = !1;
    try {
      var yb = Object.preventExtensions({});
    } catch {
      mb = !0;
    }
    var kd = [], Jd = 0, U0 = null, C0 = 0, Jn = [], Kn = 0, Ms = null, Dc = 1, Mc = "", Ta = null, Kt = null, ct = !1, Uc = !1, $n = null, Us = null, zi = !1, Fg = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), pb = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var f2 = performance, gb = function() {
        return f2.now();
      };
    else {
      var s2 = Date;
      gb = function() {
        return s2.now();
      };
    }
    var Ig = gt(null), Pg = gt(null), vb = {}, H0 = null, Kd = null, $d = !1, r2 = typeof AbortController < "u" ? AbortController : function() {
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
    }, d2 = Qt.unstable_scheduleCallback, h2 = Qt.unstable_NormalPriority, Al = {
      $$typeof: ja,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Wd = Qt.unstable_now, bb = -0, w0 = -0, Va = -1.1, Cs = -0, N0 = !1, B0 = !1, By = null, ev = 0, Hs = 0, Fd = null, Sb = q.S;
    q.S = function(e, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && Yp(e, t), Sb !== null && Sb(e, t);
    };
    var ws = gt(null), wu = {
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
    }, _y = [], qy = [], jy = [], Yy = [], Gy = [], Vy = [], Ns = /* @__PURE__ */ new Set();
    wu.recordUnsafeLifecycleWarnings = function(e, t) {
      Ns.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && _y.push(e), e.mode & ca && typeof t.UNSAFE_componentWillMount == "function" && qy.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && jy.push(e), e.mode & ca && typeof t.UNSAFE_componentWillReceiveProps == "function" && Yy.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Gy.push(e), e.mode & ca && typeof t.UNSAFE_componentWillUpdate == "function" && Vy.push(e));
    }, wu.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < _y.length && (_y.forEach(function(h) {
        e.add(
          le(h) || "Component"
        ), Ns.add(h.type);
      }), _y = []);
      var t = /* @__PURE__ */ new Set();
      0 < qy.length && (qy.forEach(function(h) {
        t.add(
          le(h) || "Component"
        ), Ns.add(h.type);
      }), qy = []);
      var a = /* @__PURE__ */ new Set();
      0 < jy.length && (jy.forEach(function(h) {
        a.add(
          le(h) || "Component"
        ), Ns.add(h.type);
      }), jy = []);
      var i = /* @__PURE__ */ new Set();
      0 < Yy.length && (Yy.forEach(
        function(h) {
          i.add(
            le(h) || "Component"
          ), Ns.add(h.type);
        }
      ), Yy = []);
      var o = /* @__PURE__ */ new Set();
      0 < Gy.length && (Gy.forEach(function(h) {
        o.add(
          le(h) || "Component"
        ), Ns.add(h.type);
      }), Gy = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < Vy.length && (Vy.forEach(function(h) {
        f.add(
          le(h) || "Component"
        ), Ns.add(h.type);
      }), Vy = []), 0 < t.size) {
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
    var _0 = /* @__PURE__ */ new Map(), Tb = /* @__PURE__ */ new Set();
    wu.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & ca && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !Tb.has(e.type) && (i = _0.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], _0.set(a, i)), i.push(e));
    }, wu.flushLegacyContextWarning = function() {
      _0.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(le(o) || "Component"), Tb.add(o.type);
          });
          var i = Re(a);
          ie(t, function() {
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
      _y = [], qy = [], jy = [], Yy = [], Gy = [], Vy = [], _0 = /* @__PURE__ */ new Map();
    };
    var Xy = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), Eb = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), q0 = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), tv = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Ly = null, j0 = !1, Wn = 0, Fn = 1, Ea = 2, Ql = 4, xl = 8, Ab = 0, xb = 1, zb = 2, lv = 3, Zo = !1, Rb = !1, av = null, nv = !1, Id = gt(null), Y0 = gt(0), Pd, Ob = /* @__PURE__ */ new Set(), Db = /* @__PURE__ */ new Set(), uv = /* @__PURE__ */ new Set(), Mb = /* @__PURE__ */ new Set(), ko = 0, Me = null, At = null, rl = null, G0 = !1, eh = !1, Bs = !1, V0 = 0, Qy = 0, Cc = null, m2 = 0, y2 = 25, j = null, In = null, Hc = -1, Zy = !1, X0 = {
      readContext: zt,
      use: Tn,
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
    }, iv = null, Ub = null, cv = null, Cb = null, Ri = null, Nu = null, L0 = null;
    iv = {
      readContext: function(e) {
        return zt(e);
      },
      use: Tn,
      useCallback: function(e, t) {
        return j = "useCallback", Le(), Da(t), Bf(e, t);
      },
      useContext: function(e) {
        return j = "useContext", Le(), zt(e);
      },
      useEffect: function(e, t) {
        return j = "useEffect", Le(), Da(t), br(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", Le(), Da(a), Tr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        j = "useInsertionEffect", Le(), Da(t), Ha(4, Ea, e, t);
      },
      useLayoutEffect: function(e, t) {
        return j = "useLayoutEffect", Le(), Da(t), Sr(e, t);
      },
      useMemo: function(e, t) {
        j = "useMemo", Le(), Da(t);
        var a = q.H;
        q.H = Ri;
        try {
          return Er(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        j = "useReducer", Le();
        var i = q.H;
        q.H = Ri;
        try {
          return at(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function(e) {
        return j = "useRef", Le(), Nf(e);
      },
      useState: function(e) {
        j = "useState", Le();
        var t = q.H;
        q.H = Ri;
        try {
          return mu(e);
        } finally {
          q.H = t;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", Le();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", Le(), Ar(e, t);
      },
      useTransition: function() {
        return j = "useTransition", Le(), zn();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", Le(), hu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", Le(), Rn();
      },
      useFormState: function(e, t) {
        return j = "useFormState", Le(), to(), co(e, t);
      },
      useActionState: function(e, t) {
        return j = "useActionState", Le(), co(e, t);
      },
      useOptimistic: function(e) {
        return j = "useOptimistic", Le(), tn(e);
      },
      useHostTransitionStatus: Fl,
      useMemoCache: kt,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", Le(), lc();
      }
    }, Ub = {
      readContext: function(e) {
        return zt(e);
      },
      use: Tn,
      useCallback: function(e, t) {
        return j = "useCallback", $(), Bf(e, t);
      },
      useContext: function(e) {
        return j = "useContext", $(), zt(e);
      },
      useEffect: function(e, t) {
        return j = "useEffect", $(), br(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", $(), Tr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        j = "useInsertionEffect", $(), Ha(4, Ea, e, t);
      },
      useLayoutEffect: function(e, t) {
        return j = "useLayoutEffect", $(), Sr(e, t);
      },
      useMemo: function(e, t) {
        j = "useMemo", $();
        var a = q.H;
        q.H = Ri;
        try {
          return Er(e, t);
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
        return j = "useRef", $(), Nf(e);
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
        return j = "useDeferredValue", $(), Ar(e, t);
      },
      useTransition: function() {
        return j = "useTransition", $(), zn();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", $(), hu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", $(), Rn();
      },
      useActionState: function(e, t) {
        return j = "useActionState", $(), co(e, t);
      },
      useFormState: function(e, t) {
        return j = "useFormState", $(), to(), co(e, t);
      },
      useOptimistic: function(e) {
        return j = "useOptimistic", $(), tn(e);
      },
      useHostTransitionStatus: Fl,
      useMemoCache: kt,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", $(), lc();
      }
    }, cv = {
      readContext: function(e) {
        return zt(e);
      },
      use: Tn,
      useCallback: function(e, t) {
        return j = "useCallback", $(), ec(e, t);
      },
      useContext: function(e) {
        return j = "useContext", $(), zt(e);
      },
      useEffect: function(e, t) {
        j = "useEffect", $(), Pt(2048, xl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", $(), xn(e, t, a);
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
        return j = "useRef", $(), Pe().memoizedState;
      },
      useState: function() {
        j = "useState", $();
        var e = q.H;
        q.H = Nu;
        try {
          return Ua(nt);
        } finally {
          q.H = e;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", $();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", $(), _f(e, t);
      },
      useTransition: function() {
        return j = "useTransition", $(), Rr();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", $(), Uf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", $(), Pe().memoizedState;
      },
      useFormState: function(e) {
        return j = "useFormState", $(), to(), vr(e);
      },
      useActionState: function(e) {
        return j = "useActionState", $(), vr(e);
      },
      useOptimistic: function(e, t) {
        return j = "useOptimistic", $(), yu(e, t);
      },
      useHostTransitionStatus: Fl,
      useMemoCache: kt,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", $(), Pe().memoizedState;
      }
    }, Cb = {
      readContext: function(e) {
        return zt(e);
      },
      use: Tn,
      useCallback: function(e, t) {
        return j = "useCallback", $(), ec(e, t);
      },
      useContext: function(e) {
        return j = "useContext", $(), zt(e);
      },
      useEffect: function(e, t) {
        j = "useEffect", $(), Pt(2048, xl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", $(), xn(e, t, a);
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
        q.H = L0;
        try {
          return ai(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        j = "useReducer", $();
        var i = q.H;
        q.H = L0;
        try {
          return Pi(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function() {
        return j = "useRef", $(), Pe().memoizedState;
      },
      useState: function() {
        j = "useState", $();
        var e = q.H;
        q.H = L0;
        try {
          return Pi(nt);
        } finally {
          q.H = e;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", $();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", $(), xr(e, t);
      },
      useTransition: function() {
        return j = "useTransition", $(), Or();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", $(), Uf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", $(), Pe().memoizedState;
      },
      useFormState: function(e) {
        return j = "useFormState", $(), to(), oo(e);
      },
      useActionState: function(e) {
        return j = "useActionState", $(), oo(e);
      },
      useOptimistic: function(e, t) {
        return j = "useOptimistic", $(), gr(e, t);
      },
      useHostTransitionStatus: Fl,
      useMemoCache: kt,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", $(), Pe().memoizedState;
      }
    }, Ri = {
      readContext: function(e) {
        return me(), zt(e);
      },
      use: function(e) {
        return G(), Tn(e);
      },
      useCallback: function(e, t) {
        return j = "useCallback", G(), Le(), Bf(e, t);
      },
      useContext: function(e) {
        return j = "useContext", G(), Le(), zt(e);
      },
      useEffect: function(e, t) {
        return j = "useEffect", G(), Le(), br(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", G(), Le(), Tr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        j = "useInsertionEffect", G(), Le(), Ha(4, Ea, e, t);
      },
      useLayoutEffect: function(e, t) {
        return j = "useLayoutEffect", G(), Le(), Sr(e, t);
      },
      useMemo: function(e, t) {
        j = "useMemo", G(), Le();
        var a = q.H;
        q.H = Ri;
        try {
          return Er(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        j = "useReducer", G(), Le();
        var i = q.H;
        q.H = Ri;
        try {
          return at(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function(e) {
        return j = "useRef", G(), Le(), Nf(e);
      },
      useState: function(e) {
        j = "useState", G(), Le();
        var t = q.H;
        q.H = Ri;
        try {
          return mu(e);
        } finally {
          q.H = t;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", G(), Le();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", G(), Le(), Ar(e, t);
      },
      useTransition: function() {
        return j = "useTransition", G(), Le(), zn();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", G(), Le(), hu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", G(), Le(), Rn();
      },
      useFormState: function(e, t) {
        return j = "useFormState", G(), Le(), co(e, t);
      },
      useActionState: function(e, t) {
        return j = "useActionState", G(), Le(), co(e, t);
      },
      useOptimistic: function(e) {
        return j = "useOptimistic", G(), Le(), tn(e);
      },
      useMemoCache: function(e) {
        return G(), kt(e);
      },
      useHostTransitionStatus: Fl,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", Le(), lc();
      }
    }, Nu = {
      readContext: function(e) {
        return me(), zt(e);
      },
      use: function(e) {
        return G(), Tn(e);
      },
      useCallback: function(e, t) {
        return j = "useCallback", G(), $(), ec(e, t);
      },
      useContext: function(e) {
        return j = "useContext", G(), $(), zt(e);
      },
      useEffect: function(e, t) {
        j = "useEffect", G(), $(), Pt(2048, xl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", G(), $(), xn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return j = "useInsertionEffect", G(), $(), Pt(4, Ea, e, t);
      },
      useLayoutEffect: function(e, t) {
        return j = "useLayoutEffect", G(), $(), Pt(4, Ql, e, t);
      },
      useMemo: function(e, t) {
        j = "useMemo", G(), $();
        var a = q.H;
        q.H = Nu;
        try {
          return ai(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        j = "useReducer", G(), $();
        var i = q.H;
        q.H = Nu;
        try {
          return Ua(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function() {
        return j = "useRef", G(), $(), Pe().memoizedState;
      },
      useState: function() {
        j = "useState", G(), $();
        var e = q.H;
        q.H = Nu;
        try {
          return Ua(nt);
        } finally {
          q.H = e;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", G(), $();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", G(), $(), _f(e, t);
      },
      useTransition: function() {
        return j = "useTransition", G(), $(), Rr();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", G(), $(), Uf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", G(), $(), Pe().memoizedState;
      },
      useFormState: function(e) {
        return j = "useFormState", G(), $(), vr(e);
      },
      useActionState: function(e) {
        return j = "useActionState", G(), $(), vr(e);
      },
      useOptimistic: function(e, t) {
        return j = "useOptimistic", G(), $(), yu(e, t);
      },
      useMemoCache: function(e) {
        return G(), kt(e);
      },
      useHostTransitionStatus: Fl,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", $(), Pe().memoizedState;
      }
    }, L0 = {
      readContext: function(e) {
        return me(), zt(e);
      },
      use: function(e) {
        return G(), Tn(e);
      },
      useCallback: function(e, t) {
        return j = "useCallback", G(), $(), ec(e, t);
      },
      useContext: function(e) {
        return j = "useContext", G(), $(), zt(e);
      },
      useEffect: function(e, t) {
        j = "useEffect", G(), $(), Pt(2048, xl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", G(), $(), xn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return j = "useInsertionEffect", G(), $(), Pt(4, Ea, e, t);
      },
      useLayoutEffect: function(e, t) {
        return j = "useLayoutEffect", G(), $(), Pt(4, Ql, e, t);
      },
      useMemo: function(e, t) {
        j = "useMemo", G(), $();
        var a = q.H;
        q.H = Nu;
        try {
          return ai(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        j = "useReducer", G(), $();
        var i = q.H;
        q.H = Nu;
        try {
          return Pi(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function() {
        return j = "useRef", G(), $(), Pe().memoizedState;
      },
      useState: function() {
        j = "useState", G(), $();
        var e = q.H;
        q.H = Nu;
        try {
          return Pi(nt);
        } finally {
          q.H = e;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", G(), $();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", G(), $(), xr(e, t);
      },
      useTransition: function() {
        return j = "useTransition", G(), $(), Or();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", G(), $(), Uf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", G(), $(), Pe().memoizedState;
      },
      useFormState: function(e) {
        return j = "useFormState", G(), $(), oo(e);
      },
      useActionState: function(e) {
        return j = "useActionState", G(), $(), oo(e);
      },
      useOptimistic: function(e, t) {
        return j = "useOptimistic", G(), $(), gr(e, t);
      },
      useMemoCache: function(e) {
        return G(), kt(e);
      },
      useHostTransitionStatus: Fl,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", $(), Pe().memoizedState;
      }
    };
    var Hb = {
      "react-stack-bottom-frame": function(e, t, a) {
        var i = ia;
        ia = !0;
        try {
          return e(t, a);
        } finally {
          ia = i;
        }
      }
    }, ov = Hb["react-stack-bottom-frame"].bind(Hb), wb = {
      "react-stack-bottom-frame": function(e) {
        var t = ia;
        ia = !0;
        try {
          return e.render();
        } finally {
          ia = t;
        }
      }
    }, Nb = wb["react-stack-bottom-frame"].bind(wb), Bb = {
      "react-stack-bottom-frame": function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          Te(e, e.return, a);
        }
      }
    }, fv = Bb["react-stack-bottom-frame"].bind(Bb), _b = {
      "react-stack-bottom-frame": function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          Te(e, e.return, f);
        }
      }
    }, qb = _b["react-stack-bottom-frame"].bind(_b), jb = {
      "react-stack-bottom-frame": function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, p2 = jb["react-stack-bottom-frame"].bind(jb), Yb = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          Te(e, t, i);
        }
      }
    }, Gb = Yb["react-stack-bottom-frame"].bind(Yb), Vb = {
      "react-stack-bottom-frame": function(e) {
        e.resourceKind != null && console.error(
          "Expected only SimpleEffects when enableUseEffectCRUDOverload is disabled, got %s",
          e.resourceKind
        );
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, g2 = Vb["react-stack-bottom-frame"].bind(Vb), Xb = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a();
        } catch (i) {
          Te(e, t, i);
        }
      }
    }, v2 = Xb["react-stack-bottom-frame"].bind(Xb), Lb = {
      "react-stack-bottom-frame": function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, Jo = Lb["react-stack-bottom-frame"].bind(Lb), th = null, ky = 0, Ze = null, sv, Qb = sv = !1, Zb = {}, kb = {}, Jb = {};
    te = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = le(e), o = i || "null";
        if (!Zb[o]) {
          Zb[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = le(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = le(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), ie(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var lh = Gf(!0), Kb = Gf(!1), Pn = gt(null), Oi = null, ah = 1, Jy = 2, zl = gt(0), $b = {}, Wb = /* @__PURE__ */ new Set(), Fb = /* @__PURE__ */ new Set(), Ib = /* @__PURE__ */ new Set(), Pb = /* @__PURE__ */ new Set(), e1 = /* @__PURE__ */ new Set(), t1 = /* @__PURE__ */ new Set(), l1 = /* @__PURE__ */ new Set(), a1 = /* @__PURE__ */ new Set(), n1 = /* @__PURE__ */ new Set(), u1 = /* @__PURE__ */ new Set();
    Object.freeze($b);
    var rv = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = ea(e), o = bn(i);
        o.payload = t, a != null && (fm(a), o.callback = a), t = Ia(e, o, i), t !== null && (Gt(t, e, i), Iu(t, e, i)), Ui(e, i);
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = ea(e), o = bn(i);
        o.tag = xb, o.payload = t, a != null && (fm(a), o.callback = a), t = Ia(e, o, i), t !== null && (Gt(t, e, i), Iu(t, e, i)), Ui(e, i);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = ea(e), i = bn(a);
        i.tag = zb, t != null && (fm(t), i.callback = t), t = Ia(e, i, a), t !== null && (Gt(t, e, a), Iu(t, e, a)), P !== null && typeof P.markForceUpdateScheduled == "function" && P.markForceUpdateScheduled(e, a);
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
    }, nh = null, hv = null, i1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), wl = !1, c1 = {}, o1 = {}, f1 = {}, s1 = {}, uh = !1, r1 = {}, mv = {}, yv = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, d1 = !1, h1 = null;
    h1 = /* @__PURE__ */ new Set();
    var wc = !1, ll = !1, pv = !1, m1 = typeof WeakSet == "function" ? WeakSet : Set, Nl = null, ih = null, ch = null, dl = null, Xa = !1, Bu = null, Ky = 8192, b2 = {
      getCacheForType: function(e) {
        var t = zt(Al), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      getOwner: function() {
        return ba;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var $y = Symbol.for;
      $y("selector.component"), $y("selector.has_pseudo_class"), $y("selector.role"), $y("selector.test_id"), $y("selector.text");
    }
    var S2 = [], T2 = typeof WeakMap == "function" ? WeakMap : Map, fn = 0, Aa = 2, _u = 4, Nc = 0, Wy = 1, oh = 2, gv = 3, _s = 4, Q0 = 6, y1 = 5, yt = fn, Rt = null, $e = null, Ie = 0, La = 0, Fy = 1, qs = 2, Iy = 3, p1 = 4, vv = 5, fh = 6, Py = 7, bv = 8, js = 9, St = La, sn = null, Ko = !1, sh = !1, Sv = !1, Di = 0, $t = Nc, $o = 0, Wo = 0, Tv = 0, rn = 0, Ys = 0, ep = null, xa = null, Z0 = !1, Ev = 0, g1 = 300, k0 = 1 / 0, v1 = 500, tp = null, Fo = null, E2 = 0, A2 = 1, x2 = 2, Gs = 0, b1 = 1, S1 = 2, T1 = 3, z2 = 4, Av = 5, Zl = 0, Io = null, rh = null, Po = 0, xv = 0, zv = null, E1 = null, R2 = 50, lp = 0, Rv = null, Ov = !1, J0 = !1, O2 = 50, Vs = 0, ap = null, dh = !1, K0 = null, A1 = !1, x1 = /* @__PURE__ */ new Set(), D2 = {}, $0 = null, hh = null, Dv = !1, Mv = !1, W0 = !1, Uv = !1, Xs = 0, Cv = {};
    (function() {
      for (var e = 0; e < Kg.length; e++) {
        var t = Kg[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), Ja(a, "on" + t);
      }
      Ja(ob, "onAnimationEnd"), Ja(fb, "onAnimationIteration"), Ja(sb, "onAnimationStart"), Ja("dblclick", "onDoubleClick"), Ja("focusin", "onFocus"), Ja("focusout", "onBlur"), Ja(u2, "onTransitionRun"), Ja(i2, "onTransitionStart"), Ja(c2, "onTransitionCancel"), Ja(rb, "onTransitionEnd");
    })(), Hi("onMouseEnter", ["mouseout", "mouseover"]), Hi("onMouseLeave", ["mouseout", "mouseover"]), Hi("onPointerEnter", ["pointerout", "pointerover"]), Hi("onPointerLeave", ["pointerout", "pointerover"]), ju(
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
    var np = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), Hv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(np)
    ), F0 = "_reactListening" + Math.random().toString(36).slice(2), z1 = !1, R1 = !1, I0 = !1, O1 = !1, P0 = !1, eg = !1, D1 = !1, tg = {}, M2 = /\r\n?/g, U2 = /\u0000|\uFFFD/g, Ls = "http://www.w3.org/1999/xlink", wv = "http://www.w3.org/XML/1998/namespace", C2 = "javascript:throw new Error('React form unexpectedly submitted.')", H2 = "suppressHydrationWarning", lg = "$", ag = "/$", Bc = "$?", up = "$!", w2 = 1, N2 = 2, B2 = 4, Nv = "F!", M1 = "F", U1 = "complete", _2 = "style", _c = 0, mh = 1, ng = 2, Bv = null, _v = null, C1 = { dialog: !0, webview: !0 }, qv = null, H1 = typeof setTimeout == "function" ? setTimeout : void 0, q2 = typeof clearTimeout == "function" ? clearTimeout : void 0, Qs = -1, w1 = typeof Promise == "function" ? Promise : void 0, j2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof w1 < "u" ? function(e) {
      return w1.resolve(null).then(e).catch($m);
    } : H1, jv = null, Zs = 0, ip = 1, N1 = 2, B1 = 3, eu = 4, tu = /* @__PURE__ */ new Map(), _1 = /* @__PURE__ */ new Set(), qc = xe.d;
    xe.d = {
      f: function() {
        var e = qc.f(), t = dc();
        return e || t;
      },
      r: function(e) {
        var t = fa(e);
        t !== null && t.tag === 5 && t.type === "form" ? im(t) : qc.r(e);
      },
      D: function(e) {
        qc.D(e), c0("dns-prefetch", e, null);
      },
      C: function(e, t) {
        qc.C(e, t), c0("preconnect", e, t);
      },
      L: function(e, t, a) {
        qc.L(e, t, a);
        var i = yh;
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
              f = bc(e);
          }
          tu.has(f) || (e = Ge(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), tu.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            Gn(f)
          ) || t === "script" && i.querySelector(Sc(f)) || (t = i.createElement("link"), Xt(t, "link", e), nl(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        qc.m(e, t);
        var a = yh;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + sa(i) + '"][href="' + sa(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = bc(e);
          }
          if (!tu.has(f) && (e = Ge({ rel: "modulepreload", href: e }, t), tu.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(Sc(f)))
                  return;
            }
            i = a.createElement("link"), Xt(i, "link", e), nl(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        qc.X(e, t);
        var a = yh;
        if (a && e) {
          var i = dn(a).hoistableScripts, o = bc(e), f = i.get(o);
          f || (f = a.querySelector(
            Sc(o)
          ), f || (e = Ge({ src: e, async: !0 }, t), (t = tu.get(o)) && ay(e, t), f = a.createElement("script"), nl(f), Xt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        qc.S(e, t, a);
        var i = yh;
        if (i && e) {
          var o = dn(i).hoistableStyles, f = hi(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: Zs, preload: null };
            if (d = i.querySelector(
              Gn(f)
            ))
              h.loading = ip | eu;
            else {
              e = Ge(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = tu.get(f)) && ly(e, a);
              var g = d = i.createElement("link");
              nl(g), Xt(g, "link", e), g._p = new Promise(function(v, w) {
                g.onload = v, g.onerror = w;
              }), g.addEventListener("load", function() {
                h.loading |= ip;
              }), g.addEventListener("error", function() {
                h.loading |= N1;
              }), h.loading |= eu, vd(d, t, i);
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
        qc.M(e, t);
        var a = yh;
        if (a && e) {
          var i = dn(a).hoistableScripts, o = bc(e), f = i.get(o);
          f || (f = a.querySelector(
            Sc(o)
          ), f || (e = Ge({ src: e, async: !0, type: "module" }, t), (t = tu.get(o)) && ay(e, t), f = a.createElement("script"), nl(f), Xt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var yh = typeof document > "u" ? null : document, ug = null, cp = null, Yv = null, ig = null, ks = qg, op = {
      $$typeof: ja,
      Provider: null,
      Consumer: null,
      _currentValue: ks,
      _currentValue2: ks,
      _threadCount: 0
    }, q1 = "%c%s%c ", j1 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", Y1 = "", cg = " ", Y2 = Function.prototype.bind, G1 = !1, V1 = null, X1 = null, L1 = null, Q1 = null, Z1 = null, k1 = null, J1 = null, K1 = null, $1 = null;
    V1 = function(e, t, a, i) {
      t = y(e, t), t !== null && (a = O(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ge({}, e.memoizedProps), a = Jl(e, 2), a !== null && Gt(a, e, 2));
    }, X1 = function(e, t, a) {
      t = y(e, t), t !== null && (a = Z(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ge({}, e.memoizedProps), a = Jl(e, 2), a !== null && Gt(a, e, 2));
    }, L1 = function(e, t, a, i) {
      t = y(e, t), t !== null && (a = R(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ge({}, e.memoizedProps), a = Jl(e, 2), a !== null && Gt(a, e, 2));
    }, Q1 = function(e, t, a) {
      e.pendingProps = O(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Jl(e, 2), t !== null && Gt(t, e, 2);
    }, Z1 = function(e, t) {
      e.pendingProps = Z(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Jl(e, 2), t !== null && Gt(t, e, 2);
    }, k1 = function(e, t, a) {
      e.pendingProps = R(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Jl(e, 2), t !== null && Gt(t, e, 2);
    }, J1 = function(e) {
      var t = Jl(e, 2);
      t !== null && Gt(t, e, 2);
    }, K1 = function(e) {
      W = e;
    }, $1 = function(e) {
      J = e;
    };
    var og = !0, fg = null, Gv = !1, ef = null, tf = null, lf = null, fp = /* @__PURE__ */ new Map(), sp = /* @__PURE__ */ new Map(), af = [], G2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), sg = null;
    if (hs.prototype.render = xd.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : qe(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = ea(i);
      mt(i, o, a, t, null, null);
    }, hs.prototype.unmount = xd.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (yt & (Aa | _u)) !== fn && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), mt(e.current, 2, null, e, null, null), dc(), t[Ti] = null;
      }
    }, hs.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = vp();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < af.length && t !== 0 && t < af[a].priority; a++) ;
        af.splice(a, 0, e), a === 0 && h0(e);
      }
    }, function() {
      var e = ms.version;
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
      return e = pt(t), e = e !== null ? Dt(e) : null, e = e === null ? null : e.stateNode, e;
    }, !function() {
      var e = {
        bundleType: 1,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: q,
        reconcilerVersion: "19.1.0"
      };
      return e.overrideHookState = V1, e.overrideHookStateDeletePath = X1, e.overrideHookStateRenamePath = L1, e.overrideProps = Q1, e.overridePropsDeletePath = Z1, e.overridePropsRenamePath = k1, e.scheduleUpdate = J1, e.setErrorHandler = K1, e.setSuspenseHandler = $1, e.scheduleRefresh = Oe, e.scheduleRoot = Ve, e.setRefreshHandler = be, e.getCurrentFiber = wg, e.getLaneLabelMap = Ng, e.injectProfilingHooks = Tt, Ue(e);
    }() && S && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var W1 = window.location.protocol;
      /^(https?|file):$/.test(W1) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (W1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    mp.createRoot = function(e, t) {
      if (!qe(e))
        throw Error("Target container is not a DOM element.");
      p0(e);
      var a = !1, i = "", o = sm, f = Zp, d = Cr, h = null;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === pi && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (h = t.unstable_transitionCallbacks)), t = iy(
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
      ), e[Ti] = t.current, Xm(e), new xd(t);
    }, mp.hydrateRoot = function(e, t, a) {
      if (!qe(e))
        throw Error("Target container is not a DOM element.");
      p0(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = sm, d = Zp, h = Cr, g = null, v = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (g = a.unstable_transitionCallbacks), a.formState !== void 0 && (v = a.formState)), t = iy(
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
        g,
        v
      ), t.context = cy(null), a = t.current, i = ea(a), i = Bl(i), o = bn(i), o.callback = null, Ia(a, o, i), a = i, t.current.lanes = a, Gc(t, a), Ba(t), e[Ti] = t.current, Xm(e), new hs(t);
    }, mp.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), mp;
}
var uS;
function F2() {
  if (uS) return dg.exports;
  uS = 1;
  function y() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y);
      } catch (O) {
        console.error(O);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (y(), dg.exports = $2()) : dg.exports = W2(), dg.exports;
}
var I2 = F2();
const P2 = /* @__PURE__ */ L2(I2);
function eT() {
  if (!document.getElementById("tailwind-cdn")) {
    const y = document.createElement("script");
    y.src = "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4", y.id = "tailwind-cdn", document.head.appendChild(y);
  }
  if (!document.getElementById("fa-cdn")) {
    const y = document.createElement("link");
    y.rel = "stylesheet", y.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css", y.id = "fa-cdn", document.head.appendChild(y);
  }
}
const gS = {
  NEXT_PUBLIC_LOGIN_CUSTOMER_API: "https://mimin-test.mimin.io/mimin-backend",
  NEXT_PUBLIC_CHATBOT_URL: "https://mimin-api.mimin.io/backend-gen-ai"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tT = (y) => y.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), lT = (y) => y.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (O, R, b) => b ? b.toUpperCase() : R.toLowerCase()
), iS = (y) => {
  const O = lT(y);
  return O.charAt(0).toUpperCase() + O.slice(1);
}, vS = (...y) => y.filter((O, R, b) => !!O && O.trim() !== "" && b.indexOf(O) === R).join(" ").trim(), aT = (y) => {
  for (const O in y)
    if (O.startsWith("aria-") || O === "role" || O === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var nT = {
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
const uT = mS(
  ({
    color: y = "currentColor",
    size: O = 24,
    strokeWidth: R = 2,
    absoluteStrokeWidth: b,
    className: Z = "",
    children: J,
    iconNode: W,
    ...te
  }, G) => kv(
    "svg",
    {
      ref: G,
      ...nT,
      width: O,
      height: O,
      stroke: y,
      strokeWidth: b ? Number(R) * 24 / Number(O) : R,
      className: vS("lucide", Z),
      ...!J && !aT(te) && { "aria-hidden": "true" },
      ...te
    },
    [
      ...W.map(([me, de]) => kv(me, de)),
      ...Array.isArray(J) ? J : [J]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bS = (y, O) => {
  const R = mS(
    ({ className: b, ...Z }, J) => kv(uT, {
      ref: J,
      iconNode: O,
      className: vS(
        `lucide-${tT(iS(y))}`,
        `lucide-${y}`,
        b
      ),
      ...Z
    })
  );
  return R.displayName = iS(y), R;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iT = [
  ["path", { d: "M2 10v3", key: "1fnikh" }],
  ["path", { d: "M6 6v11", key: "11sgs0" }],
  ["path", { d: "M10 3v18", key: "yhl04a" }],
  ["path", { d: "M14 8v7", key: "3a1oy3" }],
  ["path", { d: "M18 5v13", key: "123xd1" }],
  ["path", { d: "M22 10v3", key: "154ddg" }]
], cT = bS("audio-lines", iT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oT = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], fT = bS("x", oT), cS = (y) => {
  let O;
  const R = /* @__PURE__ */ new Set(), b = (me, de) => {
    const Re = typeof me == "function" ? me(O) : me;
    if (!Object.is(Re, O)) {
      const pe = O;
      O = de ?? (typeof Re != "object" || Re === null) ? Re : Object.assign({}, O, Re), R.forEach((Ve) => Ve(O, pe));
    }
  }, Z = () => O, te = { setState: b, getState: Z, getInitialState: () => G, subscribe: (me) => (R.add(me), () => R.delete(me)) }, G = O = y(b, Z, te);
  return te;
}, sT = (y) => y ? cS(y) : cS, rT = (y) => y;
function dT(y, O = rT) {
  const R = Qa.useSyncExternalStore(
    y.subscribe,
    () => O(y.getState()),
    () => O(y.getInitialState())
  );
  return Qa.useDebugValue(R), R;
}
const hT = (y) => {
  const O = sT(y), R = (b) => dT(O, b);
  return Object.assign(R, O), R;
}, SS = (y) => hT;
function mT(y, O) {
  let R;
  try {
    R = y();
  } catch {
    return;
  }
  return {
    getItem: (Z) => {
      var J;
      const W = (G) => G === null ? null : JSON.parse(G, void 0), te = (J = R.getItem(Z)) != null ? J : null;
      return te instanceof Promise ? te.then(W) : W(te);
    },
    setItem: (Z, J) => R.setItem(Z, JSON.stringify(J, void 0)),
    removeItem: (Z) => R.removeItem(Z)
  };
}
const Jv = (y) => (O) => {
  try {
    const R = y(O);
    return R instanceof Promise ? R : {
      then(b) {
        return Jv(b)(R);
      },
      catch(b) {
        return this;
      }
    };
  } catch (R) {
    return {
      then(b) {
        return this;
      },
      catch(b) {
        return Jv(b)(R);
      }
    };
  }
}, yT = (y, O) => (R, b, Z) => {
  let J = {
    storage: mT(() => localStorage),
    partialize: (be) => be,
    version: 0,
    merge: (be, qe) => ({
      ...qe,
      ...be
    }),
    ...O
  }, W = !1;
  const te = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set();
  let me = J.storage;
  if (!me)
    return y(
      (...be) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${J.name}', the given storage is currently unavailable.`
        ), R(...be);
      },
      b,
      Z
    );
  const de = () => {
    const be = J.partialize({ ...b() });
    return me.setItem(J.name, {
      state: be,
      version: J.version
    });
  }, Re = Z.setState;
  Z.setState = (be, qe) => {
    Re(be, qe), de();
  };
  const pe = y(
    (...be) => {
      R(...be), de();
    },
    b,
    Z
  );
  Z.getInitialState = () => pe;
  let Ve;
  const Oe = () => {
    var be, qe;
    if (!me) return;
    W = !1, te.forEach((tt) => {
      var Xe;
      return tt((Xe = b()) != null ? Xe : pe);
    });
    const Ce = ((qe = J.onRehydrateStorage) == null ? void 0 : qe.call(J, (be = b()) != null ? be : pe)) || void 0;
    return Jv(me.getItem.bind(me))(J.name).then((tt) => {
      if (tt)
        if (typeof tt.version == "number" && tt.version !== J.version) {
          if (J.migrate) {
            const Xe = J.migrate(
              tt.state,
              tt.version
            );
            return Xe instanceof Promise ? Xe.then((pt) => [!0, pt]) : [!0, Xe];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, tt.state];
      return [!1, void 0];
    }).then((tt) => {
      var Xe;
      const [pt, Dt] = tt;
      if (Ve = J.merge(
        Dt,
        (Xe = b()) != null ? Xe : pe
      ), R(Ve, !0), pt)
        return de();
    }).then(() => {
      Ce?.(Ve, void 0), Ve = b(), W = !0, G.forEach((tt) => tt(Ve));
    }).catch((tt) => {
      Ce?.(void 0, tt);
    });
  };
  return Z.persist = {
    setOptions: (be) => {
      J = {
        ...J,
        ...be
      }, be.storage && (me = be.storage);
    },
    clearStorage: () => {
      me?.removeItem(J.name);
    },
    getOptions: () => J,
    rehydrate: () => Oe(),
    hasHydrated: () => W,
    onHydrate: (be) => (te.add(be), () => {
      te.delete(be);
    }),
    onFinishHydration: (be) => (G.add(be), () => {
      G.delete(be);
    })
  }, J.skipHydration || Oe(), Ve || pe;
}, TS = yT, bg = SS()(
  TS(
    (y) => ({
      config: null,
      signature: "",
      setConfig: (O) => y({ config: O }),
      setSignature: (O) => y({ signature: O })
    }),
    {
      name: "config-store"
    }
  )
), ES = SS()(
  TS(
    (y, O) => ({
      interactions: [],
      chatType: null,
      setInteractions: (R) => y({ interactions: R }),
      addInteraction: (R) => y((b) => ({
        interactions: [R, ...b.interactions]
      })),
      updateAiInteractionByIndex: (R, b) => {
        y((Z) => ({
          interactions: Z.interactions.map(
            (J, W) => W === R ? { ...J, ai: { ...J.ai, ...b } } : J
          )
        }));
      },
      setChatType: (R) => y({ chatType: R }),
      clearInteractions: () => y({ interactions: [] })
    }),
    {
      name: "interactions-store"
    }
  )
);
var AS = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, oS = Qa.createContext && /* @__PURE__ */ Qa.createContext(AS), pT = ["attr", "size", "title"];
function gT(y, O) {
  if (y == null) return {};
  var R = vT(y, O), b, Z;
  if (Object.getOwnPropertySymbols) {
    var J = Object.getOwnPropertySymbols(y);
    for (Z = 0; Z < J.length; Z++)
      b = J[Z], !(O.indexOf(b) >= 0) && Object.prototype.propertyIsEnumerable.call(y, b) && (R[b] = y[b]);
  }
  return R;
}
function vT(y, O) {
  if (y == null) return {};
  var R = {};
  for (var b in y)
    if (Object.prototype.hasOwnProperty.call(y, b)) {
      if (O.indexOf(b) >= 0) continue;
      R[b] = y[b];
    }
  return R;
}
function gg() {
  return gg = Object.assign ? Object.assign.bind() : function(y) {
    for (var O = 1; O < arguments.length; O++) {
      var R = arguments[O];
      for (var b in R)
        Object.prototype.hasOwnProperty.call(R, b) && (y[b] = R[b]);
    }
    return y;
  }, gg.apply(this, arguments);
}
function fS(y, O) {
  var R = Object.keys(y);
  if (Object.getOwnPropertySymbols) {
    var b = Object.getOwnPropertySymbols(y);
    O && (b = b.filter(function(Z) {
      return Object.getOwnPropertyDescriptor(y, Z).enumerable;
    })), R.push.apply(R, b);
  }
  return R;
}
function vg(y) {
  for (var O = 1; O < arguments.length; O++) {
    var R = arguments[O] != null ? arguments[O] : {};
    O % 2 ? fS(Object(R), !0).forEach(function(b) {
      bT(y, b, R[b]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(R)) : fS(Object(R)).forEach(function(b) {
      Object.defineProperty(y, b, Object.getOwnPropertyDescriptor(R, b));
    });
  }
  return y;
}
function bT(y, O, R) {
  return O = ST(O), O in y ? Object.defineProperty(y, O, { value: R, enumerable: !0, configurable: !0, writable: !0 }) : y[O] = R, y;
}
function ST(y) {
  var O = TT(y, "string");
  return typeof O == "symbol" ? O : O + "";
}
function TT(y, O) {
  if (typeof y != "object" || !y) return y;
  var R = y[Symbol.toPrimitive];
  if (R !== void 0) {
    var b = R.call(y, O);
    if (typeof b != "object") return b;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (O === "string" ? String : Number)(y);
}
function xS(y) {
  return y && y.map((O, R) => /* @__PURE__ */ Qa.createElement(O.tag, vg({
    key: R
  }, O.attr), xS(O.child)));
}
function Fv(y) {
  return (O) => /* @__PURE__ */ Qa.createElement(ET, gg({
    attr: vg({}, y.attr)
  }, O), xS(y.child));
}
function ET(y) {
  var O = (R) => {
    var {
      attr: b,
      size: Z,
      title: J
    } = y, W = gT(y, pT), te = Z || R.size || "1em", G;
    return R.className && (G = R.className), y.className && (G = (G ? G + " " : "") + y.className), /* @__PURE__ */ Qa.createElement("svg", gg({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, R.attr, b, W, {
      className: G,
      style: vg(vg({
        color: y.color || R.color
      }, R.style), y.style),
      height: te,
      width: te,
      xmlns: "http://www.w3.org/2000/svg"
    }), J && /* @__PURE__ */ Qa.createElement("title", null, J), y.children);
  };
  return oS !== void 0 ? /* @__PURE__ */ Qa.createElement(oS.Consumer, null, (R) => O(R)) : O(AS);
}
function AT(y) {
  return Fv({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M6.758 8.758 5.344 7.344a8.048 8.048 0 0 0-1.841 2.859l1.873.701a6.048 6.048 0 0 1 1.382-2.146zM19 12.999a7.935 7.935 0 0 0-2.344-5.655A7.917 7.917 0 0 0 12 5.069V2L7 6l5 4V7.089a5.944 5.944 0 0 1 3.242 1.669A5.956 5.956 0 0 1 17 13v.002c0 .33-.033.655-.086.977-.007.043-.011.088-.019.131a6.053 6.053 0 0 1-1.138 2.536c-.16.209-.331.412-.516.597a5.954 5.954 0 0 1-.728.613 5.906 5.906 0 0 1-2.277 1.015c-.142.03-.285.05-.43.069-.062.009-.122.021-.184.027a6.104 6.104 0 0 1-1.898-.103L9.3 20.819a8.087 8.087 0 0 0 2.534.136c.069-.007.138-.021.207-.03.205-.026.409-.056.61-.098l.053-.009-.001-.005a7.877 7.877 0 0 0 2.136-.795l.001.001.028-.019a7.906 7.906 0 0 0 1.01-.67c.27-.209.532-.43.777-.675.248-.247.47-.513.681-.785.021-.028.049-.053.07-.081l-.006-.004a7.899 7.899 0 0 0 1.093-1.997l.008.003c.029-.078.05-.158.076-.237.037-.11.075-.221.107-.333.04-.14.073-.281.105-.423.022-.099.048-.195.066-.295.032-.171.056-.344.076-.516.01-.076.023-.15.03-.227.023-.249.037-.5.037-.753.002-.002.002-.004.002-.008zM6.197 16.597l-1.6 1.201a8.045 8.045 0 0 0 2.569 2.225l.961-1.754a6.018 6.018 0 0 1-1.93-1.672zM5 13c0-.145.005-.287.015-.429l-1.994-.143a7.977 7.977 0 0 0 .483 3.372l1.873-.701A5.975 5.975 0 0 1 5 13z" }, child: [] }] })(y);
}
function zS(y) {
  return Fv({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" }, child: [] }] })(y);
}
const xT = ({
  onToggleCallWindow: y,
  onToggleChatWindow: O
}) => {
  const { config: R } = bg(), { setChatType: b, clearInteractions: Z } = ES();
  return /* @__PURE__ */ ue.jsxs(
    "div",
    {
      className: "flex items-center justify-between gap-2 px-4 py-2",
      style: {
        backgroundColor: R?.theme?.chatWindow?.backgroundColor || "#0096a2"
      },
      children: [
        /* @__PURE__ */ ue.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ ue.jsx("div", { className: "flex items-center justify-center w-9 h-9 rounded-full bg-white", children: /* @__PURE__ */ ue.jsx(
            "img",
            {
              src: R?.theme?.chatWindow?.titleAvatarSrc || "https://res.cloudinary.com/dctqloe37/image/upload/v1752147771/agent_ohofti.jpg",
              alt: "ICON",
              className: "w-6 h-6 rounded-full"
            }
          ) }),
          /* @__PURE__ */ ue.jsx(
            "h3",
            {
              className: "text-base font-bold",
              style: { color: R?.theme?.chatWindow?.titleColor || "#ffffff" },
              children: R?.theme?.chatWindow?.title || "Mimin AI"
            }
          )
        ] }),
        /* @__PURE__ */ ue.jsxs("div", { className: "flex items-center gap-4", children: [
          R?.theme?.chatWindow?.isActiveCall && /* @__PURE__ */ ue.jsxs(
            "button",
            {
              style: {
                color: R?.theme?.chatWindow?.titleColor || "#ffffff"
              },
              onClick: y,
              className: "relative cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
              children: [
                /* @__PURE__ */ ue.jsx(
                  zS,
                  {
                    className: "w-5 h-5",
                    color: R?.theme?.chatWindow?.titleColor || "#ffffff"
                  }
                ),
                /* @__PURE__ */ ue.jsx("div", { className: "absolute -top-0 -right-0", children: /* @__PURE__ */ ue.jsx("p", { className: "text-[8px] font-medium", children: "AI" }) })
              ]
            }
          ),
          /* @__PURE__ */ ue.jsx(
            "button",
            {
              className: "cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
              style: { color: R?.theme?.chatWindow?.titleColor || "#ffffff" },
              onClick: () => {
                Z(), b(null);
              },
              children: /* @__PURE__ */ ue.jsx(
                AT,
                {
                  className: "w-5 h-5",
                  color: R?.theme?.chatWindow?.titleColor || "#ffffff"
                }
              )
            }
          ),
          /* @__PURE__ */ ue.jsx(
            "button",
            {
              className: "cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
              style: { color: R?.theme?.chatWindow?.titleColor || "#ffffff" },
              onClick: O,
              children: /* @__PURE__ */ ue.jsx(
                fT,
                {
                  className: "w-5 h-5",
                  color: R?.theme?.chatWindow?.titleColor || "#ffffff"
                }
              )
            }
          )
        ] })
      ]
    }
  );
};
function zT(y) {
  return Fv({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M3 12.9999H9V10.9999H3V1.84558C3 1.56944 3.22386 1.34558 3.5 1.34558C3.58425 1.34558 3.66714 1.36687 3.74096 1.40747L22.2034 11.5618C22.4454 11.6949 22.5337 11.9989 22.4006 12.2409C22.3549 12.324 22.2865 12.3924 22.2034 12.4381L3.74096 22.5924C3.499 22.7255 3.19497 22.6372 3.06189 22.3953C3.02129 22.3214 3 22.2386 3 22.1543V12.9999Z" }, child: [] }] })(y);
}
const RT = ({
  onSendMessage: y,
  loading: O,
  fetching: R
}) => {
  const [b, Z] = Mi(""), { config: J } = bg(), W = () => {
    !R && !O && b.length > 0 && (y(b), Z(""));
  };
  return /* @__PURE__ */ ue.jsxs(
    "div",
    {
      className: "px-2 pt-2 pb-1 overflow-hidden max-h-full",
      style: {
        backgroundColor: J?.theme?.chatWindow?.textInput?.backgroundColor || "#0096a2",
        overflowAnchor: "none"
      },
      children: [
        /* @__PURE__ */ ue.jsxs("div", { className: "relative flex items-center gap-2", children: [
          /* @__PURE__ */ ue.jsx(
            "input",
            {
              type: "text",
              className: "flex-1 border rounded-md p-2 bg-white pr-10 focus:outline focus:outline-[#ffa100]",
              style: {
                borderColor: J?.theme?.chatWindow?.textInput?.borderColor || "#ffffff"
              },
              placeholder: J?.theme?.chatWindow?.textInput?.placeholder || "Ketik pertanyaan Anda...",
              value: b,
              onChange: (te) => Z(te.target.value),
              onKeyDown: (te) => {
                te.key === "Enter" && (te.preventDefault(), te.stopPropagation(), W());
              }
            }
          ),
          /* @__PURE__ */ ue.jsx(
            "button",
            {
              className: "absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
              disabled: O || b.trim().length === 0,
              onClick: (te) => {
                te.preventDefault(), te.stopPropagation(), W();
              },
              children: /* @__PURE__ */ ue.jsx(
                zT,
                {
                  className: "w-4 h-4 text-[#0096a2]",
                  color: J?.theme?.chatWindow?.textInput?.sendButtonColor || "#0096a2"
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ ue.jsxs("p", { className: "text-white text-[10px] font-medium text-center mt-1", children: [
          "Powered by",
          " ",
          /* @__PURE__ */ ue.jsx("a", { href: "https://mimin.io", className: "underline", children: "Mimin" })
        ] })
      ]
    }
  );
};
function RS(y) {
  var O, R, b = "";
  if (typeof y == "string" || typeof y == "number") b += y;
  else if (typeof y == "object") if (Array.isArray(y)) {
    var Z = y.length;
    for (O = 0; O < Z; O++) y[O] && (R = RS(y[O])) && (b && (b += " "), b += R);
  } else for (R in y) y[R] && (b && (b += " "), b += R);
  return b;
}
function OT() {
  for (var y, O, R = 0, b = "", Z = arguments.length; R < Z; R++) (y = arguments[R]) && (O = RS(y)) && (b && (b += " "), b += O);
  return b;
}
const Iv = "-", DT = (y) => {
  const O = UT(y), {
    conflictingClassGroups: R,
    conflictingClassGroupModifiers: b
  } = y;
  return {
    getClassGroupId: (W) => {
      const te = W.split(Iv);
      return te[0] === "" && te.length !== 1 && te.shift(), OS(te, O) || MT(W);
    },
    getConflictingClassGroupIds: (W, te) => {
      const G = R[W] || [];
      return te && b[W] ? [...G, ...b[W]] : G;
    }
  };
}, OS = (y, O) => {
  if (y.length === 0)
    return O.classGroupId;
  const R = y[0], b = O.nextPart.get(R), Z = b ? OS(y.slice(1), b) : void 0;
  if (Z)
    return Z;
  if (O.validators.length === 0)
    return;
  const J = y.join(Iv);
  return O.validators.find(({
    validator: W
  }) => W(J))?.classGroupId;
}, sS = /^\[(.+)\]$/, MT = (y) => {
  if (sS.test(y)) {
    const O = sS.exec(y)[1], R = O?.substring(0, O.indexOf(":"));
    if (R)
      return "arbitrary.." + R;
  }
}, UT = (y) => {
  const {
    theme: O,
    classGroups: R
  } = y, b = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const Z in R)
    Kv(R[Z], b, Z, O);
  return b;
}, Kv = (y, O, R, b) => {
  y.forEach((Z) => {
    if (typeof Z == "string") {
      const J = Z === "" ? O : rS(O, Z);
      J.classGroupId = R;
      return;
    }
    if (typeof Z == "function") {
      if (CT(Z)) {
        Kv(Z(b), O, R, b);
        return;
      }
      O.validators.push({
        validator: Z,
        classGroupId: R
      });
      return;
    }
    Object.entries(Z).forEach(([J, W]) => {
      Kv(W, rS(O, J), R, b);
    });
  });
}, rS = (y, O) => {
  let R = y;
  return O.split(Iv).forEach((b) => {
    R.nextPart.has(b) || R.nextPart.set(b, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), R = R.nextPart.get(b);
  }), R;
}, CT = (y) => y.isThemeGetter, HT = (y) => {
  if (y < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let O = 0, R = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map();
  const Z = (J, W) => {
    R.set(J, W), O++, O > y && (O = 0, b = R, R = /* @__PURE__ */ new Map());
  };
  return {
    get(J) {
      let W = R.get(J);
      if (W !== void 0)
        return W;
      if ((W = b.get(J)) !== void 0)
        return Z(J, W), W;
    },
    set(J, W) {
      R.has(J) ? R.set(J, W) : Z(J, W);
    }
  };
}, $v = "!", Wv = ":", wT = Wv.length, NT = (y) => {
  const {
    prefix: O,
    experimentalParseClassName: R
  } = y;
  let b = (Z) => {
    const J = [];
    let W = 0, te = 0, G = 0, me;
    for (let Oe = 0; Oe < Z.length; Oe++) {
      let be = Z[Oe];
      if (W === 0 && te === 0) {
        if (be === Wv) {
          J.push(Z.slice(G, Oe)), G = Oe + wT;
          continue;
        }
        if (be === "/") {
          me = Oe;
          continue;
        }
      }
      be === "[" ? W++ : be === "]" ? W-- : be === "(" ? te++ : be === ")" && te--;
    }
    const de = J.length === 0 ? Z : Z.substring(G), Re = BT(de), pe = Re !== de, Ve = me && me > G ? me - G : void 0;
    return {
      modifiers: J,
      hasImportantModifier: pe,
      baseClassName: Re,
      maybePostfixModifierPosition: Ve
    };
  };
  if (O) {
    const Z = O + Wv, J = b;
    b = (W) => W.startsWith(Z) ? J(W.substring(Z.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: W,
      maybePostfixModifierPosition: void 0
    };
  }
  if (R) {
    const Z = b;
    b = (J) => R({
      className: J,
      parseClassName: Z
    });
  }
  return b;
}, BT = (y) => y.endsWith($v) ? y.substring(0, y.length - 1) : y.startsWith($v) ? y.substring(1) : y, _T = (y) => {
  const O = Object.fromEntries(y.orderSensitiveModifiers.map((b) => [b, !0]));
  return (b) => {
    if (b.length <= 1)
      return b;
    const Z = [];
    let J = [];
    return b.forEach((W) => {
      W[0] === "[" || O[W] ? (Z.push(...J.sort(), W), J = []) : J.push(W);
    }), Z.push(...J.sort()), Z;
  };
}, qT = (y) => ({
  cache: HT(y.cacheSize),
  parseClassName: NT(y),
  sortModifiers: _T(y),
  ...DT(y)
}), jT = /\s+/, YT = (y, O) => {
  const {
    parseClassName: R,
    getClassGroupId: b,
    getConflictingClassGroupIds: Z,
    sortModifiers: J
  } = O, W = [], te = y.trim().split(jT);
  let G = "";
  for (let me = te.length - 1; me >= 0; me -= 1) {
    const de = te[me], {
      isExternal: Re,
      modifiers: pe,
      hasImportantModifier: Ve,
      baseClassName: Oe,
      maybePostfixModifierPosition: be
    } = R(de);
    if (Re) {
      G = de + (G.length > 0 ? " " + G : G);
      continue;
    }
    let qe = !!be, Ce = b(qe ? Oe.substring(0, be) : Oe);
    if (!Ce) {
      if (!qe) {
        G = de + (G.length > 0 ? " " + G : G);
        continue;
      }
      if (Ce = b(Oe), !Ce) {
        G = de + (G.length > 0 ? " " + G : G);
        continue;
      }
      qe = !1;
    }
    const tt = J(pe).join(":"), Xe = Ve ? tt + $v : tt, pt = Xe + Ce;
    if (W.includes(pt))
      continue;
    W.push(pt);
    const Dt = Z(Ce, qe);
    for (let ot = 0; ot < Dt.length; ++ot) {
      const je = Dt[ot];
      W.push(Xe + je);
    }
    G = de + (G.length > 0 ? " " + G : G);
  }
  return G;
};
function GT() {
  let y = 0, O, R, b = "";
  for (; y < arguments.length; )
    (O = arguments[y++]) && (R = DS(O)) && (b && (b += " "), b += R);
  return b;
}
const DS = (y) => {
  if (typeof y == "string")
    return y;
  let O, R = "";
  for (let b = 0; b < y.length; b++)
    y[b] && (O = DS(y[b])) && (R && (R += " "), R += O);
  return R;
};
function VT(y, ...O) {
  let R, b, Z, J = W;
  function W(G) {
    const me = O.reduce((de, Re) => Re(de), y());
    return R = qT(me), b = R.cache.get, Z = R.cache.set, J = te, te(G);
  }
  function te(G) {
    const me = b(G);
    if (me)
      return me;
    const de = YT(G, R);
    return Z(G, de), de;
  }
  return function() {
    return J(GT.apply(null, arguments));
  };
}
const Rl = (y) => {
  const O = (R) => R[y] || [];
  return O.isThemeGetter = !0, O;
}, MS = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, US = /^\((?:(\w[\w-]*):)?(.+)\)$/i, XT = /^\d+\/\d+$/, LT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, QT = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ZT = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, kT = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, JT = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ph = (y) => XT.test(y), We = (y) => !!y && !Number.isNaN(Number(y)), nf = (y) => !!y && Number.isInteger(Number(y)), Lv = (y) => y.endsWith("%") && We(y.slice(0, -1)), Yc = (y) => LT.test(y), KT = () => !0, $T = (y) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  QT.test(y) && !ZT.test(y)
), CS = () => !1, WT = (y) => kT.test(y), FT = (y) => JT.test(y), IT = (y) => !se(y) && !re(y), PT = (y) => gh(y, NS, CS), se = (y) => MS.test(y), Js = (y) => gh(y, BS, $T), Qv = (y) => gh(y, n3, We), dS = (y) => gh(y, HS, CS), e3 = (y) => gh(y, wS, FT), mg = (y) => gh(y, _S, WT), re = (y) => US.test(y), yp = (y) => vh(y, BS), t3 = (y) => vh(y, u3), hS = (y) => vh(y, HS), l3 = (y) => vh(y, NS), a3 = (y) => vh(y, wS), yg = (y) => vh(y, _S, !0), gh = (y, O, R) => {
  const b = MS.exec(y);
  return b ? b[1] ? O(b[1]) : R(b[2]) : !1;
}, vh = (y, O, R = !1) => {
  const b = US.exec(y);
  return b ? b[1] ? O(b[1]) : R : !1;
}, HS = (y) => y === "position" || y === "percentage", wS = (y) => y === "image" || y === "url", NS = (y) => y === "length" || y === "size" || y === "bg-size", BS = (y) => y === "length", n3 = (y) => y === "number", u3 = (y) => y === "family-name", _S = (y) => y === "shadow", i3 = () => {
  const y = Rl("color"), O = Rl("font"), R = Rl("text"), b = Rl("font-weight"), Z = Rl("tracking"), J = Rl("leading"), W = Rl("breakpoint"), te = Rl("container"), G = Rl("spacing"), me = Rl("radius"), de = Rl("shadow"), Re = Rl("inset-shadow"), pe = Rl("text-shadow"), Ve = Rl("drop-shadow"), Oe = Rl("blur"), be = Rl("perspective"), qe = Rl("aspect"), Ce = Rl("ease"), tt = Rl("animate"), Xe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], pt = () => [
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
  ], Dt = () => [...pt(), re, se], ot = () => ["auto", "hidden", "clip", "visible", "scroll"], je = () => ["auto", "contain", "none"], fe = () => [re, se, G], le = () => [ph, "full", "auto", ...fe()], gt = () => [nf, "none", "subgrid", re, se], Fe = () => ["auto", {
    span: ["full", nf, re, se]
  }, nf, re, se], Ae = () => [nf, "auto", re, se], ft = () => ["auto", "min", "max", "fr", re, se], Mt = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], dt = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], A = () => ["auto", ...fe()], Q = () => [ph, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...fe()], _ = () => [y, re, se], he = () => [...pt(), hS, dS, {
    position: [re, se]
  }], B = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], ae = () => ["auto", "cover", "contain", l3, PT, {
    size: [re, se]
  }], F = () => [Lv, yp, Js], ee = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    me,
    re,
    se
  ], Se = () => ["", We, yp, Js], Ue = () => ["solid", "dashed", "dotted", "double"], He = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Tt = () => [We, Lv, hS, dS], xt = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    Oe,
    re,
    se
  ], qt = () => ["none", We, re, se], hl = () => ["none", We, re, se], Za = () => [We, re, se], lu = () => [ph, "full", ...fe()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Yc],
      breakpoint: [Yc],
      color: [KT],
      container: [Yc],
      "drop-shadow": [Yc],
      ease: ["in", "out", "in-out"],
      font: [IT],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Yc],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Yc],
      shadow: [Yc],
      spacing: ["px", We],
      text: [Yc],
      "text-shadow": [Yc],
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
        aspect: ["auto", "square", ph, se, re, qe]
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
        columns: [We, se, re, te]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Xe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Xe()
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
        overflow: ot()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ot()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ot()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: je()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": je()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": je()
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
        inset: le()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": le()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": le()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: le()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: le()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: le()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: le()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: le()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: le()
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
        z: [nf, "auto", re, se]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ph, "full", "auto", te, ...fe()]
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
        flex: [We, ph, "auto", "initial", "none", se]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", We, re, se]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", We, re, se]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [nf, "first", "last", "none", re, se]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": gt()
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
        "col-start": Ae()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Ae()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": gt()
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
        "row-start": Ae()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Ae()
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
        "auto-cols": ft()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ft()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: fe()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": fe()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": fe()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...Mt(), "normal"]
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
        content: ["normal", ...Mt()]
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
        "place-content": Mt()
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
        p: fe()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: fe()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: fe()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: fe()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: fe()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: fe()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: fe()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: fe()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: fe()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: A()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: A()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: A()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: A()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: A()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: A()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: A()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: A()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: A()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": fe()
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
        "space-y": fe()
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
        w: [te, "screen", ...Q()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          te,
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
          te,
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
        text: ["base", R, yp, Js]
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
        font: [b, re, Qv]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Lv, se]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [t3, se, O]
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
        tracking: [Z, re, se]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [We, "none", re, Qv]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          J,
          ...fe()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", re, se]
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
        list: ["disc", "decimal", "none", re, se]
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
        decoration: [...Ue(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [We, "from-font", "auto", re, Js]
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
        "underline-offset": [We, "auto", re, se]
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
        indent: fe()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", re, se]
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
        content: ["none", re, se]
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
        bg: he()
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
        bg: ae()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, nf, re, se],
          radial: ["", re, se],
          conic: [nf, re, se]
        }, a3, e3]
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
        rounded: ee()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": ee()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": ee()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": ee()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": ee()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": ee()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": ee()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": ee()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": ee()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": ee()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": ee()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": ee()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": ee()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": ee()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": ee()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: Se()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": Se()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": Se()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": Se()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": Se()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": Se()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": Se()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": Se()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": Se()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": Se()
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
        "divide-y": Se()
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
        border: [...Ue(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Ue(), "hidden", "none"]
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
        outline: [...Ue(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [We, re, se]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", We, yp, Js]
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
          de,
          yg,
          mg
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
        "inset-shadow": ["none", Re, yg, mg]
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
        ring: Se()
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
        "ring-offset": [We, Js]
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
        "inset-ring": Se()
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
        "text-shadow": ["none", pe, yg, mg]
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
        opacity: [We, re, se]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...He(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": He()
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
        "mask-linear-from": Tt()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": Tt()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": _()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": _()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": Tt()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": Tt()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": _()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": _()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": Tt()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": Tt()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": _()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": _()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": Tt()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": Tt()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": _()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": _()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": Tt()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": Tt()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": _()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": _()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": Tt()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": Tt()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": _()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": _()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": Tt()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": Tt()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": _()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": _()
      }],
      "mask-image-radial": [{
        "mask-radial": [re, se]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": Tt()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": Tt()
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
        "mask-radial-at": pt()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [We]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": Tt()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": Tt()
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
        mask: he()
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
        mask: ae()
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
        mask: ["none", re, se]
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
          re,
          se
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: xt()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [We, re, se]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [We, re, se]
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
          Ve,
          yg,
          mg
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
        grayscale: ["", We, re, se]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [We, re, se]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", We, re, se]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [We, re, se]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", We, re, se]
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
          re,
          se
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": xt()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [We, re, se]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [We, re, se]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", We, re, se]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [We, re, se]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", We, re, se]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [We, re, se]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [We, re, se]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", We, re, se]
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
        "border-spacing": fe()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": fe()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": fe()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", re, se]
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
        duration: [We, "initial", re, se]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", Ce, re, se]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [We, re, se]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", tt, re, se]
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
        perspective: [be, re, se]
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
        skew: Za()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Za()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Za()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [re, se, "", "none", "gpu", "cpu"]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", re, se]
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
        "scroll-m": fe()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": fe()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": fe()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": fe()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": fe()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": fe()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": fe()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": fe()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": fe()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": fe()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": fe()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": fe()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": fe()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": fe()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": fe()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": fe()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": fe()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": fe()
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
        "will-change": ["auto", "scroll", "contents", "transform", re, se]
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
        stroke: [We, yp, Js, Qv]
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
}, c3 = /* @__PURE__ */ VT(i3);
function Zv(...y) {
  return c3(OT(y));
}
const pg = ({ message: y, isUser: O = !1, thinking: R = !1 }) => {
  const { config: b } = bg(), Z = (J, W) => J.replace(
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
  return R ? /* @__PURE__ */ ue.jsx(
    "div",
    {
      className: Zv(
        "relative flex w-fit max-w-[90%] border rounded-t-2xl py-3 px-3.5 rounded-br-2xl bg-white text-[#0096a2] border-[#0096a2] mr-auto justify-start"
      ),
      style: {
        backgroundColor: b?.theme?.chatWindow?.botMessage?.backgroundColor || "#ffffff",
        borderColor: b?.theme?.chatWindow?.botMessage?.borderColor || "#0096a2"
      },
      children: /* @__PURE__ */ ue.jsx(
        "div",
        {
          className: "text-sm",
          style: {
            color: b?.theme?.chatWindow?.botMessage?.textColor || "#0096a2"
          },
          children: /* @__PURE__ */ ue.jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ ue.jsx("div", { className: "text-base flex gap-2 items-end", children: Array.from({ length: 3 }).map((J, W) => /* @__PURE__ */ ue.jsx(
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
  ) : y ? /* @__PURE__ */ ue.jsxs(
    "div",
    {
      className: Zv(
        "relative flex w-fit max-w-[90%] border rounded-t-2xl py-3 px-3.5",
        O ? "rounded-bl-2xl bg-white text-[#0096a2] border-[#0096a2] ml-auto justify-end" : "rounded-br-2xl bg-white text-[#0096a2] border-[#0096a2] mr-auto justify-start"
      ),
      style: {
        backgroundColor: O ? b?.theme?.chatWindow?.userMessage?.backgroundColor || "#0096a2" : b?.theme?.chatWindow?.botMessage?.backgroundColor || "#ffffff",
        borderColor: O ? b?.theme?.chatWindow?.userMessage?.borderColor || "#0096a2" : b?.theme?.chatWindow?.botMessage?.borderColor || "#0096a2"
      },
      children: [
        /* @__PURE__ */ ue.jsx(
          "div",
          {
            className: "text-sm",
            style: {
              color: O ? b?.theme?.chatWindow?.userMessage?.textColor || "#ffffff" : b?.theme?.chatWindow?.botMessage?.textColor || "#0096a2"
            },
            dangerouslySetInnerHTML: {
              __html: Z(y, O)
            }
          }
        ),
        /* @__PURE__ */ ue.jsx(
          "div",
          {
            className: Zv(
              "absolute top-full mt-0.5 w-fit",
              O ? "right-0" : "left-0"
            ),
            children: /* @__PURE__ */ ue.jsx("p", { className: "text-[10px] font-light text-gray-500", children: "02.30 PM" })
          }
        )
      ]
    }
  ) : (console.error("message is null!"), null);
}, o3 = ({ messages: y, currentResponseMsg: O, loading: R, fetching: b }) => {
  const Z = Qa.useRef(null);
  return Qa.useEffect(() => {
    setTimeout(() => {
      console.log("scroll to bottom ------>>>>>>"), Z.current?.scrollIntoView({
        behavior: "smooth",
        block: "end"
      });
    }, 200);
  }, [O, y.length]), /* @__PURE__ */ ue.jsxs(
    "div",
    {
      className: "relative flex-1 h-full px-4 py-6 max-h-full overflow-y-scroll",
      style: { overflowAnchor: "none" },
      children: [
        /* @__PURE__ */ ue.jsxs("div", { className: "flex flex-col gap-9", children: [
          /* @__PURE__ */ ue.jsx("div", { className: "flex flex-col-reverse gap-9", children: y.map((J, W) => /* @__PURE__ */ ue.jsxs("div", { className: "flex flex-col gap-6", children: [
            J.human && J.human.content && /* @__PURE__ */ ue.jsx(pg, { message: J.human.content, isUser: !0 }),
            J.ai && J.ai.content && /* @__PURE__ */ ue.jsx(pg, { message: J.ai.content, isUser: !1 })
          ] }, W)) }),
          !b && O && y.length > 0 && !y[0]?.ai && /* @__PURE__ */ ue.jsx(pg, { message: O, isUser: !1 }),
          R && !O && /* @__PURE__ */ ue.jsx(pg, { thinking: !0 })
        ] }),
        /* @__PURE__ */ ue.jsx("div", { ref: Z, id: "bottom-ref", className: "pb-9" })
      ]
    }
  );
}, f3 = ({
  isVisible: y,
  onToggleCallWindow: O
  // onToggleMuteCall,
  // onToggleSpeakerCall,
}) => {
  const [R, b] = Mi(!1), [Z, J] = Mi(!0);
  return y ? /* @__PURE__ */ ue.jsx("div", { className: "absolute inset-0 bg-white z-10", children: /* @__PURE__ */ ue.jsx("div", { className: "h-full px-6 py-10 overflow-y-auto", children: /* @__PURE__ */ ue.jsxs("div", { className: "flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ ue.jsx("h4", { className: "text-[#0096a2] text-xl font-bold mb-6", children: "IN CALL" }),
    /* @__PURE__ */ ue.jsx("div", { className: "flex items-center justify-center p-4 rounded-full w-[204px] h-[204px] bg-gradient-to-br from-[#0096a2]/30 to-[#f26075]/30", children: /* @__PURE__ */ ue.jsx("div", { className: "flex items-center justify-center p-4 rounded-full w-full h-full bg-gradient-to-br from-[#0096a2]/40 to-[#f26075]/40", children: /* @__PURE__ */ ue.jsx("div", { className: "flex items-center justify-center p-4 rounded-full w-full h-full bg-gradient-to-br from-[#0096a2]/50 to-[#f26075]/50", children: /* @__PURE__ */ ue.jsx(cT, { className: "w-14 h-14 text-white/80" }) }) }) }),
    /* @__PURE__ */ ue.jsx("p", { className: "text-[#0096a2] text-base font-bold mt-5", children: "MIMIN AI" }),
    /* @__PURE__ */ ue.jsx("p", { className: "text-[#0096a2] text-sm font-medium mt-0", children: "09:00" }),
    /* @__PURE__ */ ue.jsx("div", { className: "h-[1.5px] w-full bg-gray-200 my-6" }),
    /* @__PURE__ */ ue.jsx("div", { className: "grid grid-cols-2 gap-4 w-full", children: /* @__PURE__ */ ue.jsx("div", { className: "col-span-2 flex items-center justify-center", children: /* @__PURE__ */ ue.jsx(
      "button",
      {
        type: "button",
        className: "cursor-pointer bg-gradient-to-br from-[#0096a2]/30 to-[#f26075]/30 rounded-full w-[60px] h-[60px] p-4 aspect-square flex items-center justify-center",
        onClick: O,
        children: /* @__PURE__ */ ue.jsx(zS, { className: "w-full h-full text-[#f26075]/90 rotate-90" })
      }
    ) }) })
  ] }) }) }) : null;
}, s3 = {
  limit: 10,
  page: 0,
  pages: 0,
  size: 10
}, r3 = ({
  config: y,
  signature: O
}) => {
  const [R, b] = Mi(!1), [Z, J] = Mi(!1), [W, te] = Mi(""), [G, me] = Mi(""), [de, Re] = Mi(s3), { setConfig: pe, setSignature: Ve } = bg(), [Oe, be] = Mi(!1), [qe, Ce] = Mi(!1), {
    interactions: tt,
    addInteraction: Xe,
    clearInteractions: pt,
    setInteractions: Dt,
    updateAiInteractionByIndex: ot,
    chatType: je,
    setChatType: fe
  } = ES(), le = () => {
    be(!Oe);
  }, gt = () => {
    Ce(!qe);
  }, Fe = async () => {
    try {
      const dt = (await (await fetch("https://api.ipify.org?format=json")).json()).ip, A = navigator.userAgent;
      return { ip: dt, userAgent: A, isError: !1 };
    } catch (ft) {
      return { isError: !0, errorMessage: ft.message };
    }
  }, Ae = async (ft) => {
    const { isError: Mt, errorMessage: dt, ip: A, userAgent: Q } = await Fe();
    if (Mt) {
      console.error(dt);
      return;
    }
    b(!0);
    const _ = {
      name: Q,
      phone: A,
      message_id: crypto.randomUUID(),
      message: ft,
      media_type: "text",
      media: "",
      type: je || ""
    };
    try {
      const he = await fetch(
        `${gS.NEXT_PUBLIC_CHATBOT_URL}/api/chat/new-website/${y?.credentials?.username}`,
        {
          headers: {
            Signature: O,
            Accept: "text/event-stream",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(_),
          method: "POST"
        }
      );
      if (!he.ok) {
        console.error("Failed to send message");
        return;
      }
      const B = he.body.pipeThrough(new TextDecoderStream()).getReader();
      for (; ; ) {
        const { value: ae, done: F } = await B.read();
        if (F) break;
        const ee = '{"event": ';
        ae.split(`data: ${ee}`).filter(Boolean).map(
          (Ue) => JSON.parse(`${ee}${Ue}`.replace(/\n\n$/gm, ""))
        ).filter((Ue) => Ue.event === "token" ? !!Ue.data : !0).forEach(async (Ue) => {
          if (Ue.event === "payload") {
            const He = {
              additional_kwargs: {},
              content: Ue.message,
              example: !1
            };
            ot(0, He), je || fe(Ue.type), te(Ue.chat_history_id);
          } else Ue.event === "token" && me((He) => He + Ue.data);
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
  return X2(() => {
    pe(y || null), Ve(O || "");
  }, []), /* @__PURE__ */ ue.jsxs("div", { className: "fixed bottom-6 right-6 z-[9999]", children: [
    /* @__PURE__ */ ue.jsxs(
      "button",
      {
        className: "flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#0096a2] shadow-md transition-all duration-300 ease-in-out cursor-pointer",
        style: {
          backgroundColor: Oe ? "#0096a299" : y?.theme?.button?.backgroundColor || "#ffffff",
          color: Oe ? "#ffffff" : y?.theme?.button?.textColor || "#0096a2"
        },
        onClick: le,
        children: [
          /* @__PURE__ */ ue.jsx(
            "img",
            {
              src: y?.theme?.button?.iconSrc || "https://appstaging.mimin.io/favicon.ico",
              alt: "ICON",
              className: "w-4 h-auto"
            }
          ),
          /* @__PURE__ */ ue.jsx("span", { className: "text-sm font-bold", children: y?.theme?.button?.tooltip || "Ask Mimin" })
        ]
      }
    ),
    Oe && /* @__PURE__ */ ue.jsx("div", { className: "absolute bottom-full mb-4 right-0", children: /* @__PURE__ */ ue.jsxs(
      "div",
      {
        className: "relative flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden",
        style: {
          width: y?.theme?.chatWindow?.width || "330px",
          height: y?.theme?.chatWindow?.height || "600px"
        },
        children: [
          /* @__PURE__ */ ue.jsx(
            xT,
            {
              onToggleCallWindow: gt,
              onToggleChatWindow: le
            }
          ),
          /* @__PURE__ */ ue.jsx(
            o3,
            {
              messages: tt,
              currentResponseMsg: G,
              loading: R,
              fetching: Z
            }
          ),
          /* @__PURE__ */ ue.jsx(
            RT,
            {
              onSendMessage: (ft) => {
                me(""), ft = ft.trim().replaceAll(/\n\n+/g, `

`);
                const Mt = {
                  human: {
                    content: ft,
                    additional_kwargs: {},
                    example: !1
                  },
                  date: /* @__PURE__ */ new Date(),
                  id: crypto.randomUUID()
                };
                Xe(Mt), Ae(ft);
              },
              loading: R,
              fetching: Z
            }
          ),
          /* @__PURE__ */ ue.jsx(
            f3,
            {
              isVisible: qe,
              onToggleCallWindow: gt
            }
          )
        ]
      }
    ) })
  ] });
}, d3 = {
  init: async function(y = {}) {
    try {
      if (eT(), !y.credentials)
        throw new Error("credentials are required");
      if (!y.credentials.username)
        throw new Error("username is required");
      if (!y.credentials.apiKey)
        throw new Error("apiKey is required");
      const O = await fetch(
        `${gS.NEXT_PUBLIC_LOGIN_CUSTOMER_API}/api/v1/chatbotdata/create-signature/${y.credentials.username}`,
        {
          method: "POST",
          headers: {
            "x-api-key": y.credentials.apiKey
          }
        }
      ), { signature: R } = await O.json();
      if (console.log("signature", R), !R)
        throw new Error("Failed to get signature");
      const b = document.getElementById("mimin-widget-container");
      b && b.remove();
      const Z = document.createElement("div");
      Z.id = "mimin-widget-container", document.body.appendChild(Z), P2.createRoot(Z).render(
        /* @__PURE__ */ ue.jsx(ue.Fragment, { children: /* @__PURE__ */ ue.jsx(
          r3,
          {
            config: {
              ...y,
              credentials: {
                ...y.credentials
              }
            },
            signature: R
          }
        ) })
      ), console.log("Mimin Chatbot React initialized successfully");
    } catch (O) {
      console.error("Failed to initialize Mimin Chatbot React:", O);
    }
  }
};
window.Chatbot = d3;
export {
  d3 as Chatbot
};
