import Za, { forwardRef as gS, createElement as Jv, useState as Ol, useEffect as Z2 } from "react";
import vS from "react-dom";
function k2(y) {
  return y && y.__esModule && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y;
}
var dg = { exports: {} }, rp = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eS;
function J2() {
  if (eS) return rp;
  eS = 1;
  var y = Symbol.for("react.transitional.element"), A = Symbol.for("react.fragment");
  function O(v, k, Z) {
    var F = null;
    if (Z !== void 0 && (F = "" + Z), k.key !== void 0 && (F = "" + k.key), "key" in k) {
      Z = {};
      for (var ee in k)
        ee !== "key" && (Z[ee] = k[ee]);
    } else Z = k;
    return k = Z.ref, {
      $$typeof: y,
      type: v,
      key: F,
      ref: k !== void 0 ? k : null,
      props: Z
    };
  }
  return rp.Fragment = A, rp.jsx = O, rp.jsxs = O, rp;
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
var tS;
function K2() {
  return tS || (tS = 1, process.env.NODE_ENV !== "production" && function() {
    function y(j) {
      if (j == null) return null;
      if (typeof j == "function")
        return j.$$typeof === gt ? null : j.displayName || j.name || null;
      if (typeof j == "string") return j;
      switch (j) {
        case be:
          return "Fragment";
        case Ue:
          return "Profiler";
        case _e:
          return "StrictMode";
        case Et:
          return "Suspense";
        case ot:
          return "SuspenseList";
        case ne:
          return "Activity";
      }
      if (typeof j == "object")
        switch (typeof j.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), j.$$typeof) {
          case Oe:
            return "Portal";
          case Ze:
            return (j.displayName || "Context") + ".Provider";
          case Pe:
            return (j._context.displayName || "Context") + ".Consumer";
          case mt:
            var ue = j.render;
            return j = j.displayName, j || (j = ue.displayName || ue.name || "", j = j !== "" ? "ForwardRef(" + j + ")" : "ForwardRef"), j;
          case qe:
            return ue = j.displayName || null, ue !== null ? ue : y(j.type) || "Memo";
          case fe:
            ue = j._payload, j = j._init;
            try {
              return y(j(ue));
            } catch {
            }
        }
      return null;
    }
    function A(j) {
      return "" + j;
    }
    function O(j) {
      try {
        A(j);
        var ue = !1;
      } catch {
        ue = !0;
      }
      if (ue) {
        ue = console;
        var I = ue.error, le = typeof Symbol == "function" && Symbol.toStringTag && j[Symbol.toStringTag] || j.constructor.name || "Object";
        return I.call(
          ue,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          le
        ), A(j);
      }
    }
    function v(j) {
      if (j === be) return "<>";
      if (typeof j == "object" && j !== null && j.$$typeof === fe)
        return "<...>";
      try {
        var ue = y(j);
        return ue ? "<" + ue + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function k() {
      var j = Fe.A;
      return j === null ? null : j.getOwner();
    }
    function Z() {
      return Error("react-stack-top-frame");
    }
    function F(j) {
      if (Ae.call(j, "key")) {
        var ue = Object.getOwnPropertyDescriptor(j, "key").get;
        if (ue && ue.isReactWarning) return !1;
      }
      return j.key !== void 0;
    }
    function ee(j, ue) {
      function I() {
        dt || (dt = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          ue
        ));
      }
      I.isReactWarning = !0, Object.defineProperty(j, "key", {
        get: I,
        configurable: !0
      });
    }
    function Y() {
      var j = y(this.type);
      return E[j] || (E[j] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), j = this.props.ref, j !== void 0 ? j : null;
    }
    function re(j, ue, I, le, Se, Ce, He, Tt) {
      return I = Ce.ref, j = {
        $$typeof: Ve,
        type: j,
        key: ue,
        props: Ce,
        _owner: Se
      }, (I !== void 0 ? I : null) !== null ? Object.defineProperty(j, "ref", {
        enumerable: !1,
        get: Y
      }) : Object.defineProperty(j, "ref", { enumerable: !1, value: null }), j._store = {}, Object.defineProperty(j._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(j, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(j, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: He
      }), Object.defineProperty(j, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Tt
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    }
    function ae(j, ue, I, le, Se, Ce, He, Tt) {
      var zt = ue.children;
      if (zt !== void 0)
        if (le)
          if (st(zt)) {
            for (le = 0; le < zt.length; le++)
              Re(zt[le]);
            Object.freeze && Object.freeze(zt);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else Re(zt);
      if (Ae.call(ue, "key")) {
        zt = y(j);
        var _t = Object.keys(ue).filter(function(ka) {
          return ka !== "key";
        });
        le = 0 < _t.length ? "{key: someKey, " + _t.join(": ..., ") + ": ...}" : "{key: someKey}", me[zt + le] || (_t = 0 < _t.length ? "{" + _t.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          le,
          zt,
          _t,
          zt
        ), me[zt + le] = !0);
      }
      if (zt = null, I !== void 0 && (O(I), zt = "" + I), F(ue) && (O(ue.key), zt = "" + ue.key), "key" in ue) {
        I = {};
        for (var hl in ue)
          hl !== "key" && (I[hl] = ue[hl]);
      } else I = ue;
      return zt && ee(
        I,
        typeof j == "function" ? j.displayName || j.name || "Unknown" : j
      ), re(
        j,
        zt,
        Ce,
        Se,
        k(),
        I,
        He,
        Tt
      );
    }
    function Re(j) {
      typeof j == "object" && j !== null && j.$$typeof === Ve && j._store && (j._store.validated = 1);
    }
    var pe = Za, Ve = Symbol.for("react.transitional.element"), Oe = Symbol.for("react.portal"), be = Symbol.for("react.fragment"), _e = Symbol.for("react.strict_mode"), Ue = Symbol.for("react.profiler"), Pe = Symbol.for("react.consumer"), Ze = Symbol.for("react.context"), mt = Symbol.for("react.forward_ref"), Et = Symbol.for("react.suspense"), ot = Symbol.for("react.suspense_list"), qe = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), ne = Symbol.for("react.activity"), gt = Symbol.for("react.client.reference"), Fe = pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ae = Object.prototype.hasOwnProperty, st = Array.isArray, Dt = console.createTask ? console.createTask : function() {
      return null;
    };
    pe = {
      "react-stack-bottom-frame": function(j) {
        return j();
      }
    };
    var dt, E = {}, J = pe["react-stack-bottom-frame"].bind(
      pe,
      Z
    )(), _ = Dt(v(Z)), me = {};
    dp.Fragment = be, dp.jsx = function(j, ue, I, le, Se) {
      var Ce = 1e4 > Fe.recentlyCreatedOwnerStacks++;
      return ae(
        j,
        ue,
        I,
        !1,
        le,
        Se,
        Ce ? Error("react-stack-top-frame") : J,
        Ce ? Dt(v(j)) : _
      );
    }, dp.jsxs = function(j, ue, I, le, Se) {
      var Ce = 1e4 > Fe.recentlyCreatedOwnerStacks++;
      return ae(
        j,
        ue,
        I,
        !0,
        le,
        Se,
        Ce ? Error("react-stack-top-frame") : J,
        Ce ? Dt(v(j)) : _
      );
    };
  }()), dp;
}
var lS;
function $2() {
  return lS || (lS = 1, process.env.NODE_ENV === "production" ? dg.exports = J2() : dg.exports = K2()), dg.exports;
}
var B = $2(), hg = { exports: {} }, hp = {}, mg = { exports: {} }, Xv = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aS;
function W2() {
  return aS || (aS = 1, function(y) {
    function A(E, J) {
      var _ = E.length;
      E.push(J);
      e: for (; 0 < _; ) {
        var me = _ - 1 >>> 1, j = E[me];
        if (0 < k(j, J))
          E[me] = J, E[_] = j, _ = me;
        else break e;
      }
    }
    function O(E) {
      return E.length === 0 ? null : E[0];
    }
    function v(E) {
      if (E.length === 0) return null;
      var J = E[0], _ = E.pop();
      if (_ !== J) {
        E[0] = _;
        e: for (var me = 0, j = E.length, ue = j >>> 1; me < ue; ) {
          var I = 2 * (me + 1) - 1, le = E[I], Se = I + 1, Ce = E[Se];
          if (0 > k(le, _))
            Se < j && 0 > k(Ce, le) ? (E[me] = Ce, E[Se] = _, me = Se) : (E[me] = le, E[I] = _, me = I);
          else if (Se < j && 0 > k(Ce, _))
            E[me] = Ce, E[Se] = _, me = Se;
          else break e;
        }
      }
      return J;
    }
    function k(E, J) {
      var _ = E.sortIndex - J.sortIndex;
      return _ !== 0 ? _ : E.id - J.id;
    }
    if (y.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var Z = performance;
      y.unstable_now = function() {
        return Z.now();
      };
    } else {
      var F = Date, ee = F.now();
      y.unstable_now = function() {
        return F.now() - ee;
      };
    }
    var Y = [], re = [], ae = 1, Re = null, pe = 3, Ve = !1, Oe = !1, be = !1, _e = !1, Ue = typeof setTimeout == "function" ? setTimeout : null, Pe = typeof clearTimeout == "function" ? clearTimeout : null, Ze = typeof setImmediate < "u" ? setImmediate : null;
    function mt(E) {
      for (var J = O(re); J !== null; ) {
        if (J.callback === null) v(re);
        else if (J.startTime <= E)
          v(re), J.sortIndex = J.expirationTime, A(Y, J);
        else break;
        J = O(re);
      }
    }
    function Et(E) {
      if (be = !1, mt(E), !Oe)
        if (O(Y) !== null)
          Oe = !0, ot || (ot = !0, Ae());
        else {
          var J = O(re);
          J !== null && dt(Et, J.startTime - E);
        }
    }
    var ot = !1, qe = -1, fe = 5, ne = -1;
    function gt() {
      return _e ? !0 : !(y.unstable_now() - ne < fe);
    }
    function Fe() {
      if (_e = !1, ot) {
        var E = y.unstable_now();
        ne = E;
        var J = !0;
        try {
          e: {
            Oe = !1, be && (be = !1, Pe(qe), qe = -1), Ve = !0;
            var _ = pe;
            try {
              t: {
                for (mt(E), Re = O(Y); Re !== null && !(Re.expirationTime > E && gt()); ) {
                  var me = Re.callback;
                  if (typeof me == "function") {
                    Re.callback = null, pe = Re.priorityLevel;
                    var j = me(
                      Re.expirationTime <= E
                    );
                    if (E = y.unstable_now(), typeof j == "function") {
                      Re.callback = j, mt(E), J = !0;
                      break t;
                    }
                    Re === O(Y) && v(Y), mt(E);
                  } else v(Y);
                  Re = O(Y);
                }
                if (Re !== null) J = !0;
                else {
                  var ue = O(re);
                  ue !== null && dt(
                    Et,
                    ue.startTime - E
                  ), J = !1;
                }
              }
              break e;
            } finally {
              Re = null, pe = _, Ve = !1;
            }
            J = void 0;
          }
        } finally {
          J ? Ae() : ot = !1;
        }
      }
    }
    var Ae;
    if (typeof Ze == "function")
      Ae = function() {
        Ze(Fe);
      };
    else if (typeof MessageChannel < "u") {
      var st = new MessageChannel(), Dt = st.port2;
      st.port1.onmessage = Fe, Ae = function() {
        Dt.postMessage(null);
      };
    } else
      Ae = function() {
        Ue(Fe, 0);
      };
    function dt(E, J) {
      qe = Ue(function() {
        E(y.unstable_now());
      }, J);
    }
    y.unstable_IdlePriority = 5, y.unstable_ImmediatePriority = 1, y.unstable_LowPriority = 4, y.unstable_NormalPriority = 3, y.unstable_Profiling = null, y.unstable_UserBlockingPriority = 2, y.unstable_cancelCallback = function(E) {
      E.callback = null;
    }, y.unstable_forceFrameRate = function(E) {
      0 > E || 125 < E ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : fe = 0 < E ? Math.floor(1e3 / E) : 5;
    }, y.unstable_getCurrentPriorityLevel = function() {
      return pe;
    }, y.unstable_next = function(E) {
      switch (pe) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = pe;
      }
      var _ = pe;
      pe = J;
      try {
        return E();
      } finally {
        pe = _;
      }
    }, y.unstable_requestPaint = function() {
      _e = !0;
    }, y.unstable_runWithPriority = function(E, J) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var _ = pe;
      pe = E;
      try {
        return J();
      } finally {
        pe = _;
      }
    }, y.unstable_scheduleCallback = function(E, J, _) {
      var me = y.unstable_now();
      switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? me + _ : me) : _ = me, E) {
        case 1:
          var j = -1;
          break;
        case 2:
          j = 250;
          break;
        case 5:
          j = 1073741823;
          break;
        case 4:
          j = 1e4;
          break;
        default:
          j = 5e3;
      }
      return j = _ + j, E = {
        id: ae++,
        callback: J,
        priorityLevel: E,
        startTime: _,
        expirationTime: j,
        sortIndex: -1
      }, _ > me ? (E.sortIndex = _, A(re, E), O(Y) === null && E === O(re) && (be ? (Pe(qe), qe = -1) : be = !0, dt(Et, _ - me))) : (E.sortIndex = j, A(Y, E), Oe || Ve || (Oe = !0, ot || (ot = !0, Ae()))), E;
    }, y.unstable_shouldYield = gt, y.unstable_wrapCallback = function(E) {
      var J = pe;
      return function() {
        var _ = pe;
        pe = J;
        try {
          return E.apply(this, arguments);
        } finally {
          pe = _;
        }
      };
    };
  }(Xv)), Xv;
}
var Lv = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nS;
function F2() {
  return nS || (nS = 1, function(y) {
    process.env.NODE_ENV !== "production" && function() {
      function A() {
        if (Et = !1, ne) {
          var E = y.unstable_now();
          Ae = E;
          var J = !0;
          try {
            e: {
              Ze = !1, mt && (mt = !1, qe(gt), gt = -1), Pe = !0;
              var _ = Ue;
              try {
                t: {
                  for (F(E), _e = v(Ve); _e !== null && !(_e.expirationTime > E && Y()); ) {
                    var me = _e.callback;
                    if (typeof me == "function") {
                      _e.callback = null, Ue = _e.priorityLevel;
                      var j = me(
                        _e.expirationTime <= E
                      );
                      if (E = y.unstable_now(), typeof j == "function") {
                        _e.callback = j, F(E), J = !0;
                        break t;
                      }
                      _e === v(Ve) && k(Ve), F(E);
                    } else k(Ve);
                    _e = v(Ve);
                  }
                  if (_e !== null) J = !0;
                  else {
                    var ue = v(Oe);
                    ue !== null && re(
                      ee,
                      ue.startTime - E
                    ), J = !1;
                  }
                }
                break e;
              } finally {
                _e = null, Ue = _, Pe = !1;
              }
              J = void 0;
            }
          } finally {
            J ? st() : ne = !1;
          }
        }
      }
      function O(E, J) {
        var _ = E.length;
        E.push(J);
        e: for (; 0 < _; ) {
          var me = _ - 1 >>> 1, j = E[me];
          if (0 < Z(j, J))
            E[me] = J, E[_] = j, _ = me;
          else break e;
        }
      }
      function v(E) {
        return E.length === 0 ? null : E[0];
      }
      function k(E) {
        if (E.length === 0) return null;
        var J = E[0], _ = E.pop();
        if (_ !== J) {
          E[0] = _;
          e: for (var me = 0, j = E.length, ue = j >>> 1; me < ue; ) {
            var I = 2 * (me + 1) - 1, le = E[I], Se = I + 1, Ce = E[Se];
            if (0 > Z(le, _))
              Se < j && 0 > Z(Ce, le) ? (E[me] = Ce, E[Se] = _, me = Se) : (E[me] = le, E[I] = _, me = I);
            else if (Se < j && 0 > Z(Ce, _))
              E[me] = Ce, E[Se] = _, me = Se;
            else break e;
          }
        }
        return J;
      }
      function Z(E, J) {
        var _ = E.sortIndex - J.sortIndex;
        return _ !== 0 ? _ : E.id - J.id;
      }
      function F(E) {
        for (var J = v(Oe); J !== null; ) {
          if (J.callback === null) k(Oe);
          else if (J.startTime <= E)
            k(Oe), J.sortIndex = J.expirationTime, O(Ve, J);
          else break;
          J = v(Oe);
        }
      }
      function ee(E) {
        if (mt = !1, F(E), !Ze)
          if (v(Ve) !== null)
            Ze = !0, ne || (ne = !0, st());
          else {
            var J = v(Oe);
            J !== null && re(
              ee,
              J.startTime - E
            );
          }
      }
      function Y() {
        return Et ? !0 : !(y.unstable_now() - Ae < Fe);
      }
      function re(E, J) {
        gt = ot(function() {
          E(y.unstable_now());
        }, J);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), y.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var ae = performance;
        y.unstable_now = function() {
          return ae.now();
        };
      } else {
        var Re = Date, pe = Re.now();
        y.unstable_now = function() {
          return Re.now() - pe;
        };
      }
      var Ve = [], Oe = [], be = 1, _e = null, Ue = 3, Pe = !1, Ze = !1, mt = !1, Et = !1, ot = typeof setTimeout == "function" ? setTimeout : null, qe = typeof clearTimeout == "function" ? clearTimeout : null, fe = typeof setImmediate < "u" ? setImmediate : null, ne = !1, gt = -1, Fe = 5, Ae = -1;
      if (typeof fe == "function")
        var st = function() {
          fe(A);
        };
      else if (typeof MessageChannel < "u") {
        var Dt = new MessageChannel(), dt = Dt.port2;
        Dt.port1.onmessage = A, st = function() {
          dt.postMessage(null);
        };
      } else
        st = function() {
          ot(A, 0);
        };
      y.unstable_IdlePriority = 5, y.unstable_ImmediatePriority = 1, y.unstable_LowPriority = 4, y.unstable_NormalPriority = 3, y.unstable_Profiling = null, y.unstable_UserBlockingPriority = 2, y.unstable_cancelCallback = function(E) {
        E.callback = null;
      }, y.unstable_forceFrameRate = function(E) {
        0 > E || 125 < E ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Fe = 0 < E ? Math.floor(1e3 / E) : 5;
      }, y.unstable_getCurrentPriorityLevel = function() {
        return Ue;
      }, y.unstable_next = function(E) {
        switch (Ue) {
          case 1:
          case 2:
          case 3:
            var J = 3;
            break;
          default:
            J = Ue;
        }
        var _ = Ue;
        Ue = J;
        try {
          return E();
        } finally {
          Ue = _;
        }
      }, y.unstable_requestPaint = function() {
        Et = !0;
      }, y.unstable_runWithPriority = function(E, J) {
        switch (E) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            E = 3;
        }
        var _ = Ue;
        Ue = E;
        try {
          return J();
        } finally {
          Ue = _;
        }
      }, y.unstable_scheduleCallback = function(E, J, _) {
        var me = y.unstable_now();
        switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? me + _ : me) : _ = me, E) {
          case 1:
            var j = -1;
            break;
          case 2:
            j = 250;
            break;
          case 5:
            j = 1073741823;
            break;
          case 4:
            j = 1e4;
            break;
          default:
            j = 5e3;
        }
        return j = _ + j, E = {
          id: be++,
          callback: J,
          priorityLevel: E,
          startTime: _,
          expirationTime: j,
          sortIndex: -1
        }, _ > me ? (E.sortIndex = _, O(Oe, E), v(Ve) === null && E === v(Oe) && (mt ? (qe(gt), gt = -1) : mt = !0, re(ee, _ - me))) : (E.sortIndex = j, O(Ve, E), Ze || Pe || (Ze = !0, ne || (ne = !0, st()))), E;
      }, y.unstable_shouldYield = Y, y.unstable_wrapCallback = function(E) {
        var J = Ue;
        return function() {
          var _ = Ue;
          Ue = J;
          try {
            return E.apply(this, arguments);
          } finally {
            Ue = _;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Lv)), Lv;
}
var uS;
function bS() {
  return uS || (uS = 1, process.env.NODE_ENV === "production" ? mg.exports = W2() : mg.exports = F2()), mg.exports;
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
var iS;
function I2() {
  if (iS) return hp;
  iS = 1;
  var y = bS(), A = Za, O = vS;
  function v(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function k(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function Z(l) {
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
  function F(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function ee(l) {
    if (Z(l) !== l)
      throw Error(v(188));
  }
  function Y(l) {
    var n = l.alternate;
    if (!n) {
      if (n = Z(l), n === null) throw Error(v(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var f = u.return;
      if (f === null) break;
      var r = f.alternate;
      if (r === null) {
        if (c = f.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (f.child === r.child) {
        for (r = f.child; r; ) {
          if (r === u) return ee(f), l;
          if (r === c) return ee(f), n;
          r = r.sibling;
        }
        throw Error(v(188));
      }
      if (u.return !== c.return) u = f, c = r;
      else {
        for (var m = !1, p = f.child; p; ) {
          if (p === u) {
            m = !0, u = f, c = r;
            break;
          }
          if (p === c) {
            m = !0, c = f, u = r;
            break;
          }
          p = p.sibling;
        }
        if (!m) {
          for (p = r.child; p; ) {
            if (p === u) {
              m = !0, u = r, c = f;
              break;
            }
            if (p === c) {
              m = !0, c = r, u = f;
              break;
            }
            p = p.sibling;
          }
          if (!m) throw Error(v(189));
        }
      }
      if (u.alternate !== c) throw Error(v(190));
    }
    if (u.tag !== 3) throw Error(v(188));
    return u.stateNode.current === u ? l : n;
  }
  function re(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = re(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var ae = Object.assign, Re = Symbol.for("react.element"), pe = Symbol.for("react.transitional.element"), Ve = Symbol.for("react.portal"), Oe = Symbol.for("react.fragment"), be = Symbol.for("react.strict_mode"), _e = Symbol.for("react.profiler"), Ue = Symbol.for("react.provider"), Pe = Symbol.for("react.consumer"), Ze = Symbol.for("react.context"), mt = Symbol.for("react.forward_ref"), Et = Symbol.for("react.suspense"), ot = Symbol.for("react.suspense_list"), qe = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), ne = Symbol.for("react.activity"), gt = Symbol.for("react.memo_cache_sentinel"), Fe = Symbol.iterator;
  function Ae(l) {
    return l === null || typeof l != "object" ? null : (l = Fe && l[Fe] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var st = Symbol.for("react.client.reference");
  function Dt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === st ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Oe:
        return "Fragment";
      case _e:
        return "Profiler";
      case be:
        return "StrictMode";
      case Et:
        return "Suspense";
      case ot:
        return "SuspenseList";
      case ne:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Ve:
          return "Portal";
        case Ze:
          return (l.displayName || "Context") + ".Provider";
        case Pe:
          return (l._context.displayName || "Context") + ".Consumer";
        case mt:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case qe:
          return n = l.displayName || null, n !== null ? n : Dt(l.type) || "Memo";
        case fe:
          n = l._payload, l = l._init;
          try {
            return Dt(l(n));
          } catch {
          }
      }
    return null;
  }
  var dt = Array.isArray, E = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = O.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, me = [], j = -1;
  function ue(l) {
    return { current: l };
  }
  function I(l) {
    0 > j || (l.current = me[j], me[j] = null, j--);
  }
  function le(l, n) {
    j++, me[j] = l.current, l.current = n;
  }
  var Se = ue(null), Ce = ue(null), He = ue(null), Tt = ue(null);
  function zt(l, n) {
    switch (le(He, n), le(Ce, l), le(Se, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? Ou(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = Ou(n), l = No(n, l);
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
    I(Se), le(Se, l);
  }
  function _t() {
    I(Se), I(Ce), I(He);
  }
  function hl(l) {
    l.memoizedState !== null && le(Tt, l);
    var n = Se.current, u = No(n, l.type);
    n !== u && (le(Ce, l), le(Se, u));
  }
  function ka(l) {
    Ce.current === l && (I(Se), I(Ce)), Tt.current === l && (I(Tt), ca._currentValue = _);
  }
  var au = Object.prototype.hasOwnProperty, Ci = y.unstable_scheduleCallback, bh = y.unstable_cancelCallback, Tg = y.unstable_shouldYield, Ui = y.unstable_requestPaint, sa = y.unstable_now, us = y.unstable_getCurrentPriorityLevel, gp = y.unstable_ImmediatePriority, Sh = y.unstable_UserBlockingPriority, is = y.unstable_NormalPriority, Th = y.unstable_LowPriority, Gc = y.unstable_IdlePriority, xg = y.log, vp = y.unstable_setDisableYieldValue, Vc = null, Bl = null;
  function nu(l) {
    if (typeof xg == "function" && vp(l), Bl && typeof Bl.setStrictMode == "function")
      try {
        Bl.setStrictMode(Vc, l);
      } catch {
      }
  }
  var Jl = Math.clz32 ? Math.clz32 : Ag, xh = Math.log, bp = Math.LN2;
  function Ag(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (xh(l) / bp | 0) | 0;
  }
  var Xc = 256, uu = 4194304;
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
    var f = 0, r = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var p = c & 134217727;
    return p !== 0 ? (c = p & ~r, c !== 0 ? f = fa(c) : (m &= p, m !== 0 ? f = fa(m) : u || (u = p & ~l, u !== 0 && (f = fa(u))))) : (p = c & ~r, p !== 0 ? f = fa(p) : m !== 0 ? f = fa(m) : u || (u = c & ~l, u !== 0 && (f = fa(u)))), f === 0 ? 0 : n !== 0 && n !== f && (n & r) === 0 && (r = f & -f, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : f;
  }
  function hn(l, n) {
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
  function Yu() {
    var l = Xc;
    return Xc <<= 1, (Xc & 4194048) === 0 && (Xc = 256), l;
  }
  function Hi() {
    var l = uu;
    return uu <<= 1, (uu & 62914560) === 0 && (uu = 4194304), l;
  }
  function Gu(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function wi(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Sp(l, n, u, c, f, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var p = l.entanglements, S = l.expirationTimes, C = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var Q = 31 - Jl(u), $ = 1 << Q;
      p[Q] = 0, S[Q] = -1;
      var H = C[Q];
      if (H !== null)
        for (C[Q] = null, Q = 0; Q < H.length; Q++) {
          var N = H[Q];
          N !== null && (N.lane &= -536870913);
        }
      u &= ~$;
    }
    c !== 0 && cs(l, c, 0), r !== 0 && f === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~n));
  }
  function cs(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Jl(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 4194090;
  }
  function os(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Jl(u), f = 1 << c;
      f & n | l[c] & n && (l[c] |= n), u &= ~f;
    }
  }
  function Ja(l) {
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
  function Kf(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Tp() {
    var l = J.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Ry(l.type));
  }
  function Eg(l, n) {
    var u = J.p;
    try {
      return J.p = l, n();
    } finally {
      J.p = u;
    }
  }
  var Wt = Math.random().toString(36).slice(2), ul = "__reactFiber$" + Wt, _l = "__reactProps$" + Wt, Lc = "__reactContainer$" + Wt, $f = "__reactEvents$" + Wt, xp = "__reactListeners$" + Wt, Wf = "__reactHandles$" + Wt, Ap = "__reactResources$" + Wt, ce = "__reactMarker$" + Wt;
  function ss(l) {
    delete l[ul], delete l[_l], delete l[$f], delete l[xp], delete l[Wf];
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
  function fs(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(v(33));
  }
  function iu(l) {
    var n = l[Ap];
    return n || (n = l[Ap] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Ft(l) {
    l[ce] = !0;
  }
  var rs = /* @__PURE__ */ new Set(), ra = {};
  function Vu(l, n) {
    Xu(l, n), Xu(l + "Capture", n);
  }
  function Xu(l, n) {
    for (ra[l] = n, l = 0; l < n.length; l++)
      rs.add(n[l]);
  }
  var Ep = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ff = {}, Ah = {};
  function zp(l) {
    return au.call(Ah, l) ? !0 : au.call(Ff, l) ? !1 : Ep.test(l) ? Ah[l] = !0 : (Ff[l] = !0, !1);
  }
  function cu(l, n, u) {
    if (zp(n))
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
  function ds(l, n, u) {
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
  function mn(l, n, u, c) {
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
  var If, Eh;
  function ji(l) {
    if (If === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        If = n && n[1] || "", Eh = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + If + l + Eh;
  }
  var ql = !1;
  function Lu(l, n) {
    if (!l || ql) return "";
    ql = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var $ = function() {
                throw Error();
              };
              if (Object.defineProperty($.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct($, []);
                } catch (N) {
                  var H = N;
                }
                Reflect.construct(l, [], $);
              } else {
                try {
                  $.call();
                } catch (N) {
                  H = N;
                }
                l.call($.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                H = N;
              }
              ($ = l()) && typeof $.catch == "function" && $.catch(function() {
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
      var f = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      f && f.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = c.DetermineComponentFrameRoot(), m = r[0], p = r[1];
      if (m && p) {
        var S = m.split(`
`), C = p.split(`
`);
        for (f = c = 0; c < S.length && !S[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; f < C.length && !C[f].includes(
          "DetermineComponentFrameRoot"
        ); )
          f++;
        if (c === S.length || f === C.length)
          for (c = S.length - 1, f = C.length - 1; 1 <= c && 0 <= f && S[c] !== C[f]; )
            f--;
        for (; 1 <= c && 0 <= f; c--, f--)
          if (S[c] !== C[f]) {
            if (c !== 1 || f !== 1)
              do
                if (c--, f--, 0 > f || S[c] !== C[f]) {
                  var Q = `
` + S[c].replace(" at new ", " at ");
                  return l.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", l.displayName)), Q;
                }
              while (1 <= c && 0 <= f);
            break;
          }
      }
    } finally {
      ql = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? ji(u) : "";
  }
  function Bi(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return ji(l.type);
      case 16:
        return ji("Lazy");
      case 13:
        return ji("Suspense");
      case 19:
        return ji("SuspenseList");
      case 0:
      case 15:
        return Lu(l.type, !1);
      case 11:
        return Lu(l.type.render, !1);
      case 1:
        return Lu(l.type, !0);
      case 31:
        return ji("Activity");
      default:
        return "";
    }
  }
  function zh(l) {
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
  function hs(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Rh(l) {
    var n = hs(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    ), c = "" + l[n];
    if (!l.hasOwnProperty(n) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var f = u.get, r = u.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return f.call(this);
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
  function Qu(l) {
    l._valueTracker || (l._valueTracker = Rh(l));
  }
  function _i(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = hs(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function Qc(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var zg = /[\n"\\]/g;
  function Ra(l) {
    return l.replace(
      zg,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Pf(l, n, u, c, f, r, m, p) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Ml(n)) : l.value !== "" + Ml(n) && (l.value = "" + Ml(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? ms(l, m, Ml(n)) : u != null ? ms(l, m, Ml(u)) : c != null && l.removeAttribute("value"), f == null && r != null && (l.defaultChecked = !!r), f != null && (l.checked = f && typeof f != "function" && typeof f != "symbol"), p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? l.name = "" + Ml(p) : l.removeAttribute("name");
  }
  function er(l, n, u, c, f, r, m, p) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null))
        return;
      u = u != null ? "" + Ml(u) : "", n = n != null ? "" + Ml(n) : u, p || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? f, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = p ? l.checked : !!c, l.defaultChecked = !!c, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m);
  }
  function ms(l, n, u) {
    n === "number" && Qc(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function qi(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var f = 0; f < u.length; f++)
        n["$" + u[f]] = !0;
      for (u = 0; u < l.length; u++)
        f = n.hasOwnProperty("$" + l[u].value), l[u].selected !== f && (l[u].selected = f), f && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Ml(u), n = null, f = 0; f < l.length; f++) {
        if (l[f].value === u) {
          l[f].selected = !0, c && (l[f].defaultSelected = !0);
          return;
        }
        n !== null || l[f].disabled || (n = l[f]);
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
  function Mh(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(v(92));
        if (dt(c)) {
          if (1 < c.length) throw Error(v(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = Ml(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c);
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
  var Rp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function tr(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || Rp.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function ys(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(v(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var f in n)
        c = n[f], n.hasOwnProperty(f) && u[f] !== c && tr(l, f, c);
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
  var Rg = /* @__PURE__ */ new Map([
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
  ]), Op = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ps(l) {
    return Op.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var Gi = null;
  function lr(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var kc = null, Jc = null;
  function Mp(l) {
    var n = Ni(l);
    if (n && (l = n.stateNode)) {
      var u = l[_l] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (Pf(
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
              'input[name="' + Ra(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var f = c[_l] || null;
                if (!f) throw Error(v(90));
                Pf(
                  c,
                  f.value,
                  f.defaultValue,
                  f.defaultValue,
                  f.checked,
                  f.defaultChecked,
                  f.type,
                  f.name
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
  var Dh = !1;
  function Kc(l, n, u) {
    if (Dh) return l(n, u);
    Dh = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (Dh = !1, (kc !== null || Jc !== null) && (vc(), kc && (n = kc, l = Jc, Jc = kc = null, Mp(n), l)))
        for (n = 0; n < l.length; n++) Mp(l[n]);
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
        v(231, n, typeof u)
      );
    return u;
  }
  var yn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ar = !1;
  if (yn)
    try {
      var ou = {};
      Object.defineProperty(ou, "passive", {
        get: function() {
          ar = !0;
        }
      }), window.addEventListener("test", ou, ou), window.removeEventListener("test", ou, ou);
    } catch {
      ar = !1;
    }
  var su = null, $c = null, Xi = null;
  function Ch() {
    if (Xi) return Xi;
    var l, n = $c, u = n.length, c, f = "value" in su ? su.value : su.textContent, r = f.length;
    for (l = 0; l < u && n[l] === f[l]; l++) ;
    var m = u - l;
    for (c = 1; c <= m && n[u - c] === f[r - c]; c++) ;
    return Xi = f.slice(l, 1 < c ? 1 - c : void 0);
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
  function Yl(l) {
    function n(u, c, f, r, m) {
      this._reactName = u, this._targetInst = f, this.type = c, this.nativeEvent = r, this.target = m, this.currentTarget = null;
      for (var p in l)
        l.hasOwnProperty(p) && (u = l[p], this[p] = u ? u(r) : r[p]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? nr : ur, this.isPropagationStopped = ur, this;
    }
    return ae(n.prototype, {
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
  var Zu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ir = Yl(Zu), gs = ae({}, Zu, { view: 0, detail: 0 }), Dp = Yl(gs), Uh, cr, vs, Li = ae({}, gs, {
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
      return "movementX" in l ? l.movementX : (l !== vs && (vs && l.type === "mousemove" ? (Uh = l.screenX - vs.screenX, cr = l.screenY - vs.screenY) : cr = Uh = 0, vs = l), Uh);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : cr;
    }
  }), Hh = Yl(Li), Cp = ae({}, Li, { dataTransfer: 0 }), Up = Yl(Cp), Og = ae({}, gs, { relatedTarget: 0 }), wh = Yl(Og), Mg = ae({}, Zu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Dg = Yl(Mg), Cg = ae({}, Zu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), bs = Yl(Cg), Hp = ae({}, Zu, { data: 0 }), Nh = Yl(Hp), wp = {
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
  }, Np = {
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
  }, jh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function jp(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = jh[l]) ? !!n[l] : !1;
  }
  function fu() {
    return jp;
  }
  var Qi = ae({}, gs, {
    key: function(l) {
      if (l.key) {
        var n = wp[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = yl(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Np[l.keyCode] || "Unidentified" : "";
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
  }), Ka = Yl(Qi), da = ae({}, Li, {
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
  }), Ss = Yl(da), or = ae({}, gs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fu
  }), Bh = Yl(or), Kl = ae({}, Zu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Bp = Yl(Kl), sr = ae({}, Li, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zi = Yl(sr), _h = ae({}, Zu, {
    newState: 0,
    oldState: 0
  }), _p = Yl(_h), qp = [9, 13, 27, 32], Ts = yn && "CompositionEvent" in window, xs = null;
  yn && "documentMode" in document && (xs = document.documentMode);
  var qh = yn && "TextEvent" in window && !xs, pn = yn && (!Ts || xs && 8 < xs && 11 >= xs), Yh = " ", fr = !1;
  function As(l, n) {
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
  function ku(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Ju = !1;
  function Gh(l, n) {
    switch (l) {
      case "compositionend":
        return ku(n);
      case "keypress":
        return n.which !== 32 ? null : (fr = !0, Yh);
      case "textInput":
        return l = n.data, l === Yh && fr ? null : l;
      default:
        return null;
    }
  }
  function ki(l, n) {
    if (Ju)
      return l === "compositionend" || !Ts && As(l, n) ? (l = Ch(), Xi = $c = su = null, Ju = !1, l) : null;
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
        return pn && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Yp = {
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
    return n === "input" ? !!Yp[l.type] : n === "textarea";
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
  var $a = null, Wa = null;
  function Vh(l) {
    xc(l, 0);
  }
  function gn(l) {
    var n = fs(l);
    if (_i(n)) return l;
  }
  function Xh(l, n) {
    if (l === "change") return n;
  }
  var Lh = !1;
  if (yn) {
    var Ji;
    if (yn) {
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
    $a && ($a.detachEvent("onpropertychange", Zh), Wa = $a = null);
  }
  function Zh(l) {
    if (l.propertyName === "value" && gn(Wa)) {
      var n = [];
      dr(
        n,
        Wa,
        l,
        lr(l)
      ), Kc(Vh, n);
    }
  }
  function hr(l, n, u) {
    l === "focusin" ? (Wc(), $a = n, Wa = u, $a.attachEvent("onpropertychange", Zh)) : l === "focusout" && Wc();
  }
  function Ku(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return gn(Wa);
  }
  function ru(l, n) {
    if (l === "click") return gn(n);
  }
  function kh(l, n) {
    if (l === "input" || l === "change")
      return gn(n);
  }
  function Jh(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var pl = typeof Object.is == "function" ? Object.is : Jh;
  function $u(l, n) {
    if (pl(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var f = u[c];
      if (!au.call(n, f) || !pl(l[f], n[f]))
        return !1;
    }
    return !0;
  }
  function Wu(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Rt(l, n) {
    var u = Wu(l);
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
      u = Wu(u);
    }
  }
  function Es(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Es(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
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
  function zs(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var $i = yn && "documentMode" in document && 11 >= document.documentMode, vn = null, Fa = null, Fu = null, Wi = !1;
  function mr(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Wi || vn == null || vn !== Qc(c) || (c = vn, "selectionStart" in c && zs(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), Fu && $u(Fu, c) || (Fu = c, c = wo(Fa, "onSelect"), 0 < c.length && (n = new ir(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = vn)));
  }
  function du(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var Fi = {
    animationend: du("Animation", "AnimationEnd"),
    animationiteration: du("Animation", "AnimationIteration"),
    animationstart: du("Animation", "AnimationStart"),
    transitionrun: du("Transition", "TransitionRun"),
    transitionstart: du("Transition", "TransitionStart"),
    transitioncancel: du("Transition", "TransitionCancel"),
    transitionend: du("Transition", "TransitionEnd")
  }, Oa = {}, Ia = {};
  yn && (Ia = document.createElement("div").style, "AnimationEvent" in window || (delete Fi.animationend.animation, delete Fi.animationiteration.animation, delete Fi.animationstart.animation), "TransitionEvent" in window || delete Fi.transitionend.transition);
  function bn(l) {
    if (Oa[l]) return Oa[l];
    if (!Fi[l]) return l;
    var n = Fi[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in Ia)
        return Oa[l] = n[u];
    return l;
  }
  var Gp = bn("animationend"), $h = bn("animationiteration"), Vp = bn("animationstart"), Wh = bn("transitionrun"), yr = bn("transitionstart"), Xp = bn("transitioncancel"), Fh = bn("transitionend"), Ih = /* @__PURE__ */ new Map(), Fc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Fc.push("scrollEnd");
  function Ma(l, n) {
    Ih.set(l, n), Vu(n, [l]);
  }
  var Ph = /* @__PURE__ */ new WeakMap();
  function ha(l, n) {
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
  var $l = [], Iu = 0, Sn = 0;
  function Pa() {
    for (var l = Iu, n = Sn = Iu = 0; n < l; ) {
      var u = $l[n];
      $l[n++] = null;
      var c = $l[n];
      $l[n++] = null;
      var f = $l[n];
      $l[n++] = null;
      var r = $l[n];
      if ($l[n++] = null, c !== null && f !== null) {
        var m = c.pending;
        m === null ? f.next = f : (f.next = m.next, m.next = f), c.pending = f;
      }
      r !== 0 && Pc(u, f, r);
    }
  }
  function Pu(l, n, u, c) {
    $l[Iu++] = l, $l[Iu++] = n, $l[Iu++] = u, $l[Iu++] = c, Sn |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function Ic(l, n, u, c) {
    return Pu(l, n, u, c), Rs(l);
  }
  function Tn(l, n) {
    return Pu(l, null, null, n), Rs(l);
  }
  function Pc(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var f = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (f = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, f && n !== null && (f = 31 - Jl(u), l = r.hiddenUpdates, c = l[f], c === null ? l[f] = [n] : c.push(n), n.lane = u | 536870912), r) : null;
  }
  function Rs(l) {
    if (50 < Oo)
      throw Oo = 0, Pm = null, Error(v(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var eo = {};
  function Lp(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Wl(l, n, u, c) {
    return new Lp(l, n, u, c);
  }
  function Os(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function en(l, n) {
    var u = l.alternate;
    return u === null ? (u = Wl(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Xe(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function W(l, n, u, c, f, r) {
    var m = 0;
    if (c = l, typeof l == "function") Os(l) && (m = 1);
    else if (typeof l == "string")
      m = A0(
        l,
        u,
        Se.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case ne:
          return l = Wl(31, u, n, f), l.elementType = ne, l.lanes = r, l;
        case Oe:
          return Da(u.children, f, r, n);
        case be:
          m = 8, f |= 24;
          break;
        case _e:
          return l = Wl(12, u, n, f | 2), l.elementType = _e, l.lanes = r, l;
        case Et:
          return l = Wl(13, u, n, f), l.elementType = Et, l.lanes = r, l;
        case ot:
          return l = Wl(19, u, n, f), l.elementType = ot, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Ue:
              case Ze:
                m = 10;
                break e;
              case Pe:
                m = 9;
                break e;
              case mt:
                m = 11;
                break e;
              case qe:
                m = 14;
                break e;
              case fe:
                m = 16, c = null;
                break e;
            }
          m = 29, u = Error(
            v(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = Wl(m, u, n, f), n.elementType = l, n.type = c, n.lanes = r, n;
  }
  function Da(l, n, u, c) {
    return l = Wl(7, l, c, n), l.lanes = u, l;
  }
  function to(l, n, u) {
    return l = Wl(6, l, null, n), l.lanes = u, l;
  }
  function Nt(l, n, u) {
    return n = Wl(
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
  var ei = [], ti = 0, Ms = null, lo = 0, Ca = [], Fl = 0, hu = null, tn = 1, qt = "";
  function et(l, n) {
    ei[ti++] = lo, ei[ti++] = Ms, Ms = l, lo = n;
  }
  function pr(l, n, u) {
    Ca[Fl++] = tn, Ca[Fl++] = qt, Ca[Fl++] = hu, hu = l;
    var c = tn;
    l = qt;
    var f = 32 - Jl(c) - 1;
    c &= ~(1 << f), u += 1;
    var r = 32 - Jl(n) + f;
    if (30 < r) {
      var m = f - f % 5;
      r = (c & (1 << m) - 1).toString(32), c >>= m, f -= m, tn = 1 << 32 - Jl(n) + f | u << f | c, qt = r + l;
    } else
      tn = 1 << r | u << f | c, qt = l;
  }
  function Ii(l) {
    l.return !== null && (et(l, 1), pr(l, 1, 0));
  }
  function xn(l) {
    for (; l === Ms; )
      Ms = ei[--ti], ei[ti] = null, lo = ei[--ti], ei[ti] = null;
    for (; l === hu; )
      hu = Ca[--Fl], Ca[Fl] = null, qt = Ca[--Fl], Ca[Fl] = null, tn = Ca[--Fl], Ca[Fl] = null;
  }
  var kt = null, nt = null, at = !1, Ua = null, Ha = !1, Pi = Error(v(519));
  function mu(l) {
    var n = Error(v(418, ""));
    throw uo(ha(n, l)), Pi;
  }
  function Ds(l) {
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
        for (u = 0; u < yf.length; u++)
          Ne(yf[u], n);
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
        ), Qu(n);
        break;
      case "select":
        Ne("invalid", n);
        break;
      case "textarea":
        Ne("invalid", n), Mh(n, c.value, c.defaultValue, c.children), Qu(n);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || hy(n.textContent, u) ? (c.popover != null && (Ne("beforetoggle", n), Ne("toggle", n)), c.onScroll != null && Ne("scroll", n), c.onScrollEnd != null && Ne("scrollend", n), c.onClick != null && (n.onclick = Rd), n = !0) : n = !1, n || mu(l);
  }
  function em(l) {
    for (kt = l.return; kt; )
      switch (kt.tag) {
        case 5:
        case 13:
          Ha = !1;
          return;
        case 27:
        case 3:
          Ha = !0;
          return;
        default:
          kt = kt.return;
      }
  }
  function ao(l) {
    if (l !== kt) return !1;
    if (!at) return em(l), at = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Xn(l.type, l.memoizedProps)), u = !u), u && nt && mu(l), em(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(v(317));
      e: {
        for (l = l.nextSibling, n = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (n === 0) {
                nt = on(l.nextSibling);
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
      n === 27 ? (n = nt, bi(l.type) ? (l = Si, Si = null, nt = l) : nt = n) : nt = kt ? on(l.stateNode.nextSibling) : null;
    return !0;
  }
  function no() {
    nt = kt = null, at = !1;
  }
  function tm() {
    var l = Ua;
    return l !== null && (aa === null ? aa = l : aa.push.apply(
      aa,
      l
    ), Ua = null), l;
  }
  function uo(l) {
    Ua === null ? Ua = [l] : Ua.push(l);
  }
  var Cs = ue(null), yu = null, ln = null;
  function pu(l, n, u) {
    le(Cs, n._currentValue), n._currentValue = u;
  }
  function An(l) {
    l._currentValue = Cs.current, I(Cs);
  }
  function gr(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function lm(l, n, u, c) {
    var f = l.child;
    for (f !== null && (f.return = l); f !== null; ) {
      var r = f.dependencies;
      if (r !== null) {
        var m = f.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var p = r;
          r = f;
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
      } else if (f.tag === 18) {
        if (m = f.return, m === null) throw Error(v(341));
        m.lanes |= u, r = m.alternate, r !== null && (r.lanes |= u), gr(m, u, l), m = null;
      } else m = f.child;
      if (m !== null) m.return = f;
      else
        for (m = f; m !== null; ) {
          if (m === l) {
            m = null;
            break;
          }
          if (f = m.sibling, f !== null) {
            f.return = m.return, m = f;
            break;
          }
          m = m.return;
        }
      f = m;
    }
  }
  function io(l, n, u, c) {
    l = null;
    for (var f = n, r = !1; f !== null; ) {
      if (!r) {
        if ((f.flags & 524288) !== 0) r = !0;
        else if ((f.flags & 262144) !== 0) break;
      }
      if (f.tag === 10) {
        var m = f.alternate;
        if (m === null) throw Error(v(387));
        if (m = m.memoizedProps, m !== null) {
          var p = f.type;
          pl(f.pendingProps.value, m.value) || (l !== null ? l.push(p) : l = [p]);
        }
      } else if (f === Tt.current) {
        if (m = f.alternate, m === null) throw Error(v(387));
        m.memoizedState.memoizedState !== f.memoizedState.memoizedState && (l !== null ? l.push(ca) : l = [ca]);
      }
      f = f.return;
    }
    l !== null && lm(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function Us(l) {
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
  function li(l) {
    yu = l, ln = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function il(l) {
    return am(yu, l);
  }
  function Hs(l, n) {
    return yu === null && li(l), am(l, n);
  }
  function am(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, ln === null) {
      if (l === null) throw Error(v(308));
      ln = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else ln = ln.next = n;
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
  }, vr = y.unstable_scheduleCallback, Qp = y.unstable_NormalPriority, It = {
    $$typeof: Ze,
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
  function En(l) {
    l.refCount--, l.refCount === 0 && vr(Qp, function() {
      l.controller.abort();
    });
  }
  var ai = null, ws = 0, wa = 0, Pt = null;
  function br(l, n) {
    if (ai === null) {
      var u = ai = [];
      ws = 0, wa = Tc(), Pt = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return ws++, n.then(Sr, Sr), n;
  }
  function Sr() {
    if (--ws === 0 && ai !== null) {
      Pt !== null && (Pt.status = "fulfilled");
      var l = ai;
      ai = null, wa = 0, Pt = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function Zp(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(f) {
        u.push(f);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var f = 0; f < u.length; f++) (0, u[f])(n);
      },
      function(f) {
        for (c.status = "rejected", c.reason = f, f = 0; f < u.length; f++)
          (0, u[f])(void 0);
      }
    ), c;
  }
  var Tr = E.S;
  E.S = function(l, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && br(l, n), Tr !== null && Tr(l, n);
  };
  var zn = ue(null);
  function Ns() {
    var l = zn.current;
    return l !== null ? l : xt.pooledCache;
  }
  function ec(l, n) {
    n === null ? le(zn, zn.current) : le(zn, n.pool);
  }
  function xr() {
    var l = Ns();
    return l === null ? null : { parent: It._currentValue, pool: l };
  }
  var ni = Error(v(460)), Ar = Error(v(474)), js = Error(v(542)), Er = { then: function() {
  } };
  function zr(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Bs() {
  }
  function nm(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Bs, Bs), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, im(l), l;
      default:
        if (typeof n.status == "string") n.then(Bs, Bs);
        else {
          if (l = xt, l !== null && 100 < l.shellSuspendCounter)
            throw Error(v(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var f = n;
                f.status = "fulfilled", f.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var f = n;
                f.status = "rejected", f.reason = c;
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
        throw tc = n, ni;
    }
  }
  var tc = null;
  function um() {
    if (tc === null) throw Error(v(459));
    var l = tc;
    return tc = null, l;
  }
  function im(l) {
    if (l === ni || l === js)
      throw Error(v(483));
  }
  var Rn = !1;
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
  function Il(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function On(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (rt & 2) !== 0) {
      var f = c.pending;
      return f === null ? n.next = n : (n.next = f.next, f.next = n), c.pending = n, n = Rs(l), Pc(l, null, u), n;
    }
    return Pu(l, c, n, u), Rs(l);
  }
  function lc(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, os(l, u);
    }
  }
  function cm(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var f = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var m = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? f = r = m : r = r.next = m, u = u.next;
        } while (u !== null);
        r === null ? f = r = n : r = r.next = n;
      } else f = r = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: r,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var om = !1;
  function so() {
    if (om) {
      var l = Pt;
      if (l !== null) throw l;
    }
  }
  function gu(l, n, u, c) {
    om = !1;
    var f = l.updateQueue;
    Rn = !1;
    var r = f.firstBaseUpdate, m = f.lastBaseUpdate, p = f.shared.pending;
    if (p !== null) {
      f.shared.pending = null;
      var S = p, C = S.next;
      S.next = null, m === null ? r = C : m.next = C, m = S;
      var Q = l.alternate;
      Q !== null && (Q = Q.updateQueue, p = Q.lastBaseUpdate, p !== m && (p === null ? Q.firstBaseUpdate = C : p.next = C, Q.lastBaseUpdate = S));
    }
    if (r !== null) {
      var $ = f.baseState;
      m = 0, Q = C = S = null, p = r;
      do {
        var H = p.lane & -536870913, N = H !== p.lane;
        if (N ? (Ke & H) === H : (c & H) === H) {
          H !== 0 && H === wa && (om = !0), Q !== null && (Q = Q.next = {
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
                  $ = ge.call(it, $, H);
                  break e;
                }
                $ = ge;
                break e;
              case 3:
                ge.flags = ge.flags & -65537 | 128;
              case 0:
                if (ge = ve.payload, H = typeof ge == "function" ? ge.call(it, $, H) : ge, H == null) break e;
                $ = ae({}, $, H);
                break e;
              case 2:
                Rn = !0;
            }
          }
          H = p.callback, H !== null && (l.flags |= 64, N && (l.flags |= 8192), N = f.callbacks, N === null ? f.callbacks = [H] : N.push(H));
        } else
          N = {
            lane: H,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null
          }, Q === null ? (C = Q = N, S = $) : Q = Q.next = N, m |= H;
        if (p = p.next, p === null) {
          if (p = f.shared.pending, p === null)
            break;
          N = p, p = N.next, N.next = null, f.lastBaseUpdate = N, f.shared.pending = null;
        }
      } while (!0);
      Q === null && (S = $), f.baseState = S, f.firstBaseUpdate = C, f.lastBaseUpdate = Q, r === null && (f.shared.lanes = 0), Eu |= m, l.lanes = m, l.memoizedState = $;
    }
  }
  function Mr(l, n) {
    if (typeof l != "function")
      throw Error(v(191, l));
    l.call(n);
  }
  function _s(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Mr(u[l], n);
  }
  var ac = ue(null), qs = ue(0);
  function cl(l, n) {
    l = Au, le(qs, l), le(ac, n), Au = l | n.baseLanes;
  }
  function fo() {
    le(qs, Au), le(ac, ac.current);
  }
  function ro() {
    Au = qs.current, I(ac), I(qs);
  }
  var Na = 0, we = null, ft = null, jt = null, Ys = !1, ma = !1, ui = !1, an = 0, ya = 0, vu = null, sm = 0;
  function Bt() {
    throw Error(v(321));
  }
  function Dr(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!pl(l[u], n[u])) return !1;
    return !0;
  }
  function Cr(l, n, u, c, f, r) {
    return Na = r, we = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, E.H = l === null || l.memoizedState === null ? Em : zm, ui = !1, r = u(c, f), ui = !1, ma && (r = fm(
      n,
      u,
      c,
      f
    )), ii(l), r;
  }
  function ii(l) {
    E.H = Jr;
    var n = ft !== null && ft.next !== null;
    if (Na = 0, jt = ft = we = null, Ys = !1, ya = 0, vu = null, n) throw Error(v(300));
    l === null || el || (l = l.dependencies, l !== null && Us(l) && (el = !0));
  }
  function fm(l, n, u, c) {
    we = l;
    var f = 0;
    do {
      if (ma && (vu = null), ya = 0, ma = !1, 25 <= f) throw Error(v(301));
      if (f += 1, jt = ft = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      E.H = bu, r = n(u, c);
    } while (ma);
    return r;
  }
  function kp() {
    var l = E.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Vs(n) : n, l = l.useState()[0], (ft !== null ? ft.memoizedState : null) !== l && (we.flags |= 1024), n;
  }
  function Ur() {
    var l = an !== 0;
    return an = 0, l;
  }
  function ho(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Hr(l) {
    if (Ys) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Ys = !1;
    }
    Na = 0, jt = ft = we = null, ma = !1, ya = an = 0, vu = null;
  }
  function Dl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return jt === null ? we.memoizedState = jt = l : jt = jt.next = l, jt;
  }
  function Yt() {
    if (ft === null) {
      var l = we.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ft.next;
    var n = jt === null ? we.memoizedState : jt.next;
    if (n !== null)
      jt = n, ft = l;
    else {
      if (l === null)
        throw we.alternate === null ? Error(v(467)) : Error(v(310));
      ft = l, l = {
        memoizedState: ft.memoizedState,
        baseState: ft.baseState,
        baseQueue: ft.baseQueue,
        queue: ft.queue,
        next: null
      }, jt === null ? we.memoizedState = jt = l : jt = jt.next = l;
    }
    return jt;
  }
  function Gs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Vs(l) {
    var n = ya;
    return ya += 1, vu === null && (vu = []), l = nm(vu, l, n), n = we, (jt === null ? n.memoizedState : jt.next) === null && (n = n.alternate, E.H = n === null || n.memoizedState === null ? Em : zm), l;
  }
  function Jt(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Vs(l);
      if (l.$$typeof === Ze) return il(l);
    }
    throw Error(v(438, String(l)));
  }
  function wr(l) {
    var n = null, u = we.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = we.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(f) {
          return f.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Gs(), we.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = gt;
    return n.index++, u;
  }
  function Mn(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function Xs(l) {
    var n = Yt();
    return Nr(n, ft, l);
  }
  function Nr(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(v(311));
    c.lastRenderedReducer = u;
    var f = l.baseQueue, r = c.pending;
    if (r !== null) {
      if (f !== null) {
        var m = f.next;
        f.next = r.next, r.next = m;
      }
      n.baseQueue = f = r, c.pending = null;
    }
    if (r = l.baseState, f === null) l.memoizedState = r;
    else {
      n = f.next;
      var p = m = null, S = null, C = n, Q = !1;
      do {
        var $ = C.lane & -536870913;
        if ($ !== C.lane ? (Ke & $) === $ : (Na & $) === $) {
          var H = C.revertLane;
          if (H === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }), $ === wa && (Q = !0);
          else if ((Na & H) === H) {
            C = C.next, H === wa && (Q = !0);
            continue;
          } else
            $ = {
              lane: 0,
              revertLane: C.revertLane,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }, S === null ? (p = S = $, m = r) : S = S.next = $, we.lanes |= H, Eu |= H;
          $ = C.action, ui && u(r, $), r = C.hasEagerState ? C.eagerState : u(r, $);
        } else
          H = {
            lane: $,
            revertLane: C.revertLane,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, S === null ? (p = S = H, m = r) : S = S.next = H, we.lanes |= $, Eu |= $;
        C = C.next;
      } while (C !== null && C !== n);
      if (S === null ? m = r : S.next = p, !pl(r, l.memoizedState) && (el = !0, Q && (u = Pt, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = S, c.lastRenderedState = r;
    }
    return f === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function jr(l) {
    var n = Yt(), u = n.queue;
    if (u === null) throw Error(v(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, f = u.pending, r = n.memoizedState;
    if (f !== null) {
      u.pending = null;
      var m = f = f.next;
      do
        r = l(r, m.action), m = m.next;
      while (m !== f);
      pl(r, n.memoizedState) || (el = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function Ls(l, n, u) {
    var c = we, f = Yt(), r = at;
    if (r) {
      if (u === void 0) throw Error(v(407));
      u = u();
    } else u = n();
    var m = !pl(
      (ft || f).memoizedState,
      u
    );
    m && (f.memoizedState = u, el = !0), f = f.queue;
    var p = dm.bind(null, c, f, l);
    if (vt(2048, 8, p, [l]), f.getSnapshot !== n || m || jt !== null && jt.memoizedState.tag & 1) {
      if (c.flags |= 2048, Pl(
        9,
        ks(),
        rm.bind(
          null,
          c,
          f,
          u,
          n
        ),
        null
      ), xt === null) throw Error(v(349));
      r || (Na & 124) !== 0 || Br(c, n, u);
    }
    return u;
  }
  function Br(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = we.updateQueue, n === null ? (n = Gs(), we.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function rm(l, n, u, c) {
    n.value = u, n.getSnapshot = c, hm(n) && _r(l);
  }
  function dm(l, n, u) {
    return u(function() {
      hm(n) && _r(l);
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
  function _r(l) {
    var n = Tn(l, 2);
    n !== null && va(n, l, 2);
  }
  function Qs(l) {
    var n = Dl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), ui) {
        nu(!0);
        try {
          u();
        } finally {
          nu(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Mn,
      lastRenderedState: l
    }, n;
  }
  function qr(l, n, u, c) {
    return l.baseState = u, Nr(
      l,
      ft,
      typeof c == "function" ? c : Mn
    );
  }
  function Jp(l, n, u, c, f) {
    if (cc(l)) throw Error(v(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: f,
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
      E.T !== null ? u(!0) : r.isTransition = !1, c(r), u = n.pending, u === null ? (r.next = n.pending = r, Yr(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function Yr(l, n) {
    var u = n.action, c = n.payload, f = l.state;
    if (n.isTransition) {
      var r = E.T, m = {};
      E.T = m;
      try {
        var p = u(f, c), S = E.S;
        S !== null && S(m, p), Zs(l, n, p);
      } catch (C) {
        Vr(l, n, C);
      } finally {
        E.T = r;
      }
    } else
      try {
        r = u(f, c), Zs(l, n, r);
      } catch (C) {
        Vr(l, n, C);
      }
  }
  function Zs(l, n, u) {
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
      var u = xt.formState;
      if (u !== null) {
        e: {
          var c = we;
          if (at) {
            if (nt) {
              t: {
                for (var f = nt, r = Ha; f.nodeType !== 8; ) {
                  if (!r) {
                    f = null;
                    break t;
                  }
                  if (f = on(
                    f.nextSibling
                  ), f === null) {
                    f = null;
                    break t;
                  }
                }
                r = f.data, f = r === "F!" || r === "F" ? f : null;
              }
              if (f) {
                nt = on(
                  f.nextSibling
                ), c = f.data === "F!";
                break e;
              }
            }
            mu(c);
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
    }, u.queue = c, u = xm.bind(
      null,
      we,
      c
    ), c.dispatch = u, c = Qs(!1), r = $s.bind(
      null,
      we,
      !1,
      c.queue
    ), c = Dl(), f = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = f, u = Jp.bind(
      null,
      we,
      f,
      r,
      u
    ), f.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function Dn(l) {
    var n = Yt();
    return Lr(n, ft, l);
  }
  function Lr(l, n, u) {
    if (n = Nr(
      l,
      n,
      Xr
    )[0], l = Xs(Mn)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = Vs(n);
      } catch (m) {
        throw m === ni ? js : m;
      }
    else c = n;
    n = Yt();
    var f = n.queue, r = f.dispatch;
    return u !== n.memoizedState && (we.flags |= 2048, Pl(
      9,
      ks(),
      Ug.bind(null, f, u),
      null
    )), [c, r, l];
  }
  function Ug(l, n) {
    l.action = n;
  }
  function Qr(l) {
    var n = Yt(), u = ft;
    if (u !== null)
      return Lr(n, u, l);
    Yt(), n = n.memoizedState, u = Yt();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function Pl(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = we.updateQueue, n === null && (n = Gs(), we.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function ks() {
    return { destroy: void 0, resource: void 0 };
  }
  function Js() {
    return Yt().memoizedState;
  }
  function ci(l, n, u, c) {
    var f = Dl();
    c = c === void 0 ? null : c, we.flags |= l, f.memoizedState = Pl(
      1 | n,
      ks(),
      u,
      c
    );
  }
  function vt(l, n, u, c) {
    var f = Yt();
    c = c === void 0 ? null : c;
    var r = f.memoizedState.inst;
    ft !== null && c !== null && Dr(c, ft.memoizedState.deps) ? f.memoizedState = Pl(n, r, u, c) : (we.flags |= l, f.memoizedState = Pl(
      1 | n,
      r,
      u,
      c
    ));
  }
  function Kp(l, n) {
    ci(8390656, 8, l, n);
  }
  function $p(l, n) {
    vt(2048, 8, l, n);
  }
  function pm(l, n) {
    return vt(4, 2, l, n);
  }
  function nn(l, n) {
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
    return n !== null && Dr(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function vm(l, n) {
    var u = Yt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && Dr(n, c[1]))
      return c[0];
    if (c = l(), ui) {
      nu(!0);
      try {
        l();
      } finally {
        nu(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function Ks(l, n, u) {
    return u === void 0 || (Na & 1073741824) !== 0 ? l.memoizedState = n : (l.memoizedState = u, l = ey(), we.lanes |= l, Eu |= l, u);
  }
  function bm(l, n, u, c) {
    return pl(u, n) ? u : ac.current !== null ? (l = Ks(l, u, c), pl(l, n) || (el = !0), l) : (Na & 42) === 0 ? (el = !0, l.memoizedState = u) : (l = ey(), we.lanes |= l, Eu |= l, n);
  }
  function Wp(l, n, u, c, f) {
    var r = J.p;
    J.p = r !== 0 && 8 > r ? r : 8;
    var m = E.T, p = {};
    E.T = p, $s(l, !1, n, u);
    try {
      var S = f(), C = E.S;
      if (C !== null && C(p, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var Q = Zp(
          S,
          c
        );
        ic(
          l,
          n,
          Q,
          ga(l)
        );
      } else
        ic(
          l,
          n,
          c,
          ga(l)
        );
    } catch ($) {
      ic(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: $ },
        ga()
      );
    } finally {
      J.p = r, E.T = m;
    }
  }
  function Hg() {
  }
  function kr(l, n, u, c) {
    if (l.tag !== 5) throw Error(v(476));
    var f = Fp(l).queue;
    Wp(
      l,
      f,
      n,
      _,
      u === null ? Hg : function() {
        return mo(l), u(c);
      }
    );
  }
  function Fp(l) {
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
        lastRenderedReducer: Mn,
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
        lastRenderedReducer: Mn,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function mo(l) {
    var n = Fp(l).next.queue;
    ic(l, n, {}, ga());
  }
  function ja() {
    return il(ca);
  }
  function Sm() {
    return Yt().memoizedState;
  }
  function Ip() {
    return Yt().memoizedState;
  }
  function Pp(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = ga();
          l = Il(u);
          var c = On(n, l, u);
          c !== null && (va(c, n, u), lc(c, n, u)), n = { cache: oo() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Tm(l, n, u) {
    var c = ga();
    u = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, cc(l) ? e0(n, u) : (u = Ic(l, n, u, c), u !== null && (va(u, l, c), Am(u, n, c)));
  }
  function xm(l, n, u) {
    var c = ga();
    ic(l, n, u, c);
  }
  function ic(l, n, u, c) {
    var f = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (cc(l)) e0(n, f);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var m = n.lastRenderedState, p = r(m, u);
          if (f.hasEagerState = !0, f.eagerState = p, pl(p, m))
            return Pu(l, n, f, 0), xt === null && Pa(), !1;
        } catch {
        } finally {
        }
      if (u = Ic(l, n, f, c), u !== null)
        return va(u, l, c), Am(u, n, c), !0;
    }
    return !1;
  }
  function $s(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: Tc(),
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, cc(l)) {
      if (n) throw Error(v(479));
    } else
      n = Ic(
        l,
        u,
        c,
        2
      ), n !== null && va(n, l, 2);
  }
  function cc(l) {
    var n = l.alternate;
    return l === we || n !== null && n === we;
  }
  function e0(l, n) {
    ma = Ys = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function Am(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, os(l, u);
    }
  }
  var Jr = {
    readContext: il,
    use: Jt,
    useCallback: Bt,
    useContext: Bt,
    useEffect: Bt,
    useImperativeHandle: Bt,
    useLayoutEffect: Bt,
    useInsertionEffect: Bt,
    useMemo: Bt,
    useReducer: Bt,
    useRef: Bt,
    useState: Bt,
    useDebugValue: Bt,
    useDeferredValue: Bt,
    useTransition: Bt,
    useSyncExternalStore: Bt,
    useId: Bt,
    useHostTransitionStatus: Bt,
    useFormState: Bt,
    useActionState: Bt,
    useOptimistic: Bt,
    useMemoCache: Bt,
    useCacheRefresh: Bt
  }, Em = {
    readContext: il,
    use: Jt,
    useCallback: function(l, n) {
      return Dl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: il,
    useEffect: Kp,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, ci(
        4194308,
        4,
        gm.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return ci(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      ci(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = Dl();
      n = n === void 0 ? null : n;
      var c = l();
      if (ui) {
        nu(!0);
        try {
          l();
        } finally {
          nu(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = Dl();
      if (u !== void 0) {
        var f = u(n);
        if (ui) {
          nu(!0);
          try {
            u(n);
          } finally {
            nu(!1);
          }
        }
      } else f = n;
      return c.memoizedState = c.baseState = f, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: f
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
      l = Qs(l);
      var n = l.queue, u = xm.bind(null, we, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: nc,
    useDeferredValue: function(l, n) {
      var u = Dl();
      return Ks(u, l, n);
    },
    useTransition: function() {
      var l = Qs(!1);
      return l = Wp.bind(
        null,
        we,
        l.queue,
        !0,
        !1
      ), Dl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = we, f = Dl();
      if (at) {
        if (u === void 0)
          throw Error(v(407));
        u = u();
      } else {
        if (u = n(), xt === null)
          throw Error(v(349));
        (Ke & 124) !== 0 || Br(c, n, u);
      }
      f.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return f.queue = r, Kp(dm.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, Pl(
        9,
        ks(),
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
      var l = Dl(), n = xt.identifierPrefix;
      if (at) {
        var u = qt, c = tn;
        u = (c & ~(1 << 32 - Jl(c) - 1)).toString(32) + u, n = "«" + n + "R" + u, u = an++, 0 < u && (n += "H" + u.toString(32)), n += "»";
      } else
        u = sm++, n = "«" + n + "r" + u.toString(32) + "»";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: ja,
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
      return n.queue = u, n = $s.bind(
        null,
        we,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: wr,
    useCacheRefresh: function() {
      return Dl().memoizedState = Pp.bind(
        null,
        we
      );
    }
  }, zm = {
    readContext: il,
    use: Jt,
    useCallback: uc,
    useContext: il,
    useEffect: $p,
    useImperativeHandle: Zr,
    useInsertionEffect: pm,
    useLayoutEffect: nn,
    useMemo: vm,
    useReducer: Xs,
    useRef: Js,
    useState: function() {
      return Xs(Mn);
    },
    useDebugValue: nc,
    useDeferredValue: function(l, n) {
      var u = Yt();
      return bm(
        u,
        ft.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Xs(Mn)[0], n = Yt().memoizedState;
      return [
        typeof l == "boolean" ? l : Vs(l),
        n
      ];
    },
    useSyncExternalStore: Ls,
    useId: Sm,
    useHostTransitionStatus: ja,
    useFormState: Dn,
    useActionState: Dn,
    useOptimistic: function(l, n) {
      var u = Yt();
      return qr(u, ft, l, n);
    },
    useMemoCache: wr,
    useCacheRefresh: Ip
  }, bu = {
    readContext: il,
    use: Jt,
    useCallback: uc,
    useContext: il,
    useEffect: $p,
    useImperativeHandle: Zr,
    useInsertionEffect: pm,
    useLayoutEffect: nn,
    useMemo: vm,
    useReducer: jr,
    useRef: Js,
    useState: function() {
      return jr(Mn);
    },
    useDebugValue: nc,
    useDeferredValue: function(l, n) {
      var u = Yt();
      return ft === null ? Ks(u, l, n) : bm(
        u,
        ft.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = jr(Mn)[0], n = Yt().memoizedState;
      return [
        typeof l == "boolean" ? l : Vs(l),
        n
      ];
    },
    useSyncExternalStore: Ls,
    useId: Sm,
    useHostTransitionStatus: ja,
    useFormState: Qr,
    useActionState: Qr,
    useOptimistic: function(l, n) {
      var u = Yt();
      return ft !== null ? qr(u, ft, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: wr,
    useCacheRefresh: Ip
  }, oc = null, yo = 0;
  function Kr(l) {
    var n = yo;
    return yo += 1, oc === null && (oc = []), nm(oc, l, n);
  }
  function sc(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function Cl(l, n) {
    throw n.$$typeof === Re ? Error(v(525)) : (l = Object.prototype.toString.call(n), Error(
      v(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function Rm(l) {
    var n = l._init;
    return n(l._payload);
  }
  function ea(l) {
    function n(M, R) {
      if (l) {
        var D = M.deletions;
        D === null ? (M.deletions = [R], M.flags |= 16) : D.push(R);
      }
    }
    function u(M, R) {
      if (!l) return null;
      for (; R !== null; )
        n(M, R), R = R.sibling;
      return null;
    }
    function c(M) {
      for (var R = /* @__PURE__ */ new Map(); M !== null; )
        M.key !== null ? R.set(M.key, M) : R.set(M.index, M), M = M.sibling;
      return R;
    }
    function f(M, R) {
      return M = en(M, R), M.index = 0, M.sibling = null, M;
    }
    function r(M, R, D) {
      return M.index = D, l ? (D = M.alternate, D !== null ? (D = D.index, D < R ? (M.flags |= 67108866, R) : D) : (M.flags |= 67108866, R)) : (M.flags |= 1048576, R);
    }
    function m(M) {
      return l && M.alternate === null && (M.flags |= 67108866), M;
    }
    function p(M, R, D, K) {
      return R === null || R.tag !== 6 ? (R = to(D, M.mode, K), R.return = M, R) : (R = f(R, D), R.return = M, R);
    }
    function S(M, R, D, K) {
      var ie = D.type;
      return ie === Oe ? Q(
        M,
        R,
        D.props.children,
        K,
        D.key
      ) : R !== null && (R.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === fe && Rm(ie) === R.type) ? (R = f(R, D.props), sc(R, D), R.return = M, R) : (R = W(
        D.type,
        D.key,
        D.props,
        null,
        M.mode,
        K
      ), sc(R, D), R.return = M, R);
    }
    function C(M, R, D, K) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== D.containerInfo || R.stateNode.implementation !== D.implementation ? (R = Nt(D, M.mode, K), R.return = M, R) : (R = f(R, D.children || []), R.return = M, R);
    }
    function Q(M, R, D, K, ie) {
      return R === null || R.tag !== 7 ? (R = Da(
        D,
        M.mode,
        K,
        ie
      ), R.return = M, R) : (R = f(R, D), R.return = M, R);
    }
    function $(M, R, D) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return R = to(
          "" + R,
          M.mode,
          D
        ), R.return = M, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case pe:
            return D = W(
              R.type,
              R.key,
              R.props,
              null,
              M.mode,
              D
            ), sc(D, R), D.return = M, D;
          case Ve:
            return R = Nt(
              R,
              M.mode,
              D
            ), R.return = M, R;
          case fe:
            var K = R._init;
            return R = K(R._payload), $(M, R, D);
        }
        if (dt(R) || Ae(R))
          return R = Da(
            R,
            M.mode,
            D,
            null
          ), R.return = M, R;
        if (typeof R.then == "function")
          return $(M, Kr(R), D);
        if (R.$$typeof === Ze)
          return $(
            M,
            Hs(M, R),
            D
          );
        Cl(M, R);
      }
      return null;
    }
    function H(M, R, D, K) {
      var ie = R !== null ? R.key : null;
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return ie !== null ? null : p(M, R, "" + D, K);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case pe:
            return D.key === ie ? S(M, R, D, K) : null;
          case Ve:
            return D.key === ie ? C(M, R, D, K) : null;
          case fe:
            return ie = D._init, D = ie(D._payload), H(M, R, D, K);
        }
        if (dt(D) || Ae(D))
          return ie !== null ? null : Q(M, R, D, K, null);
        if (typeof D.then == "function")
          return H(
            M,
            R,
            Kr(D),
            K
          );
        if (D.$$typeof === Ze)
          return H(
            M,
            R,
            Hs(M, D),
            K
          );
        Cl(M, D);
      }
      return null;
    }
    function N(M, R, D, K, ie) {
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return M = M.get(D) || null, p(R, M, "" + K, ie);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case pe:
            return M = M.get(
              K.key === null ? D : K.key
            ) || null, S(R, M, K, ie);
          case Ve:
            return M = M.get(
              K.key === null ? D : K.key
            ) || null, C(R, M, K, ie);
          case fe:
            var Le = K._init;
            return K = Le(K._payload), N(
              M,
              R,
              D,
              K,
              ie
            );
        }
        if (dt(K) || Ae(K))
          return M = M.get(D) || null, Q(R, M, K, ie, null);
        if (typeof K.then == "function")
          return N(
            M,
            R,
            D,
            Kr(K),
            ie
          );
        if (K.$$typeof === Ze)
          return N(
            M,
            R,
            D,
            Hs(R, K),
            ie
          );
        Cl(R, K);
      }
      return null;
    }
    function ge(M, R, D, K) {
      for (var ie = null, Le = null, ye = R, xe = R = 0, fl = null; ye !== null && xe < D.length; xe++) {
        ye.index > xe ? (fl = ye, ye = null) : fl = ye.sibling;
        var lt = H(
          M,
          ye,
          D[xe],
          K
        );
        if (lt === null) {
          ye === null && (ye = fl);
          break;
        }
        l && ye && lt.alternate === null && n(M, ye), R = r(lt, R, xe), Le === null ? ie = lt : Le.sibling = lt, Le = lt, ye = fl;
      }
      if (xe === D.length)
        return u(M, ye), at && et(M, xe), ie;
      if (ye === null) {
        for (; xe < D.length; xe++)
          ye = $(M, D[xe], K), ye !== null && (R = r(
            ye,
            R,
            xe
          ), Le === null ? ie = ye : Le.sibling = ye, Le = ye);
        return at && et(M, xe), ie;
      }
      for (ye = c(ye); xe < D.length; xe++)
        fl = N(
          ye,
          M,
          xe,
          D[xe],
          K
        ), fl !== null && (l && fl.alternate !== null && ye.delete(
          fl.key === null ? xe : fl.key
        ), R = r(
          fl,
          R,
          xe
        ), Le === null ? ie = fl : Le.sibling = fl, Le = fl);
      return l && ye.forEach(function(zi) {
        return n(M, zi);
      }), at && et(M, xe), ie;
    }
    function ve(M, R, D, K) {
      if (D == null) throw Error(v(151));
      for (var ie = null, Le = null, ye = R, xe = R = 0, fl = null, lt = D.next(); ye !== null && !lt.done; xe++, lt = D.next()) {
        ye.index > xe ? (fl = ye, ye = null) : fl = ye.sibling;
        var zi = H(M, ye, lt.value, K);
        if (zi === null) {
          ye === null && (ye = fl);
          break;
        }
        l && ye && zi.alternate === null && n(M, ye), R = r(zi, R, xe), Le === null ? ie = zi : Le.sibling = zi, Le = zi, ye = fl;
      }
      if (lt.done)
        return u(M, ye), at && et(M, xe), ie;
      if (ye === null) {
        for (; !lt.done; xe++, lt = D.next())
          lt = $(M, lt.value, K), lt !== null && (R = r(lt, R, xe), Le === null ? ie = lt : Le.sibling = lt, Le = lt);
        return at && et(M, xe), ie;
      }
      for (ye = c(ye); !lt.done; xe++, lt = D.next())
        lt = N(ye, M, xe, lt.value, K), lt !== null && (l && lt.alternate !== null && ye.delete(lt.key === null ? xe : lt.key), R = r(lt, R, xe), Le === null ? ie = lt : Le.sibling = lt, Le = lt);
      return l && ye.forEach(function(Qg) {
        return n(M, Qg);
      }), at && et(M, xe), ie;
    }
    function it(M, R, D, K) {
      if (typeof D == "object" && D !== null && D.type === Oe && D.key === null && (D = D.props.children), typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case pe:
            e: {
              for (var ie = D.key; R !== null; ) {
                if (R.key === ie) {
                  if (ie = D.type, ie === Oe) {
                    if (R.tag === 7) {
                      u(
                        M,
                        R.sibling
                      ), K = f(
                        R,
                        D.props.children
                      ), K.return = M, M = K;
                      break e;
                    }
                  } else if (R.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === fe && Rm(ie) === R.type) {
                    u(
                      M,
                      R.sibling
                    ), K = f(R, D.props), sc(K, D), K.return = M, M = K;
                    break e;
                  }
                  u(M, R);
                  break;
                } else n(M, R);
                R = R.sibling;
              }
              D.type === Oe ? (K = Da(
                D.props.children,
                M.mode,
                K,
                D.key
              ), K.return = M, M = K) : (K = W(
                D.type,
                D.key,
                D.props,
                null,
                M.mode,
                K
              ), sc(K, D), K.return = M, M = K);
            }
            return m(M);
          case Ve:
            e: {
              for (ie = D.key; R !== null; ) {
                if (R.key === ie)
                  if (R.tag === 4 && R.stateNode.containerInfo === D.containerInfo && R.stateNode.implementation === D.implementation) {
                    u(
                      M,
                      R.sibling
                    ), K = f(R, D.children || []), K.return = M, M = K;
                    break e;
                  } else {
                    u(M, R);
                    break;
                  }
                else n(M, R);
                R = R.sibling;
              }
              K = Nt(D, M.mode, K), K.return = M, M = K;
            }
            return m(M);
          case fe:
            return ie = D._init, D = ie(D._payload), it(
              M,
              R,
              D,
              K
            );
        }
        if (dt(D))
          return ge(
            M,
            R,
            D,
            K
          );
        if (Ae(D)) {
          if (ie = Ae(D), typeof ie != "function") throw Error(v(150));
          return D = ie.call(D), ve(
            M,
            R,
            D,
            K
          );
        }
        if (typeof D.then == "function")
          return it(
            M,
            R,
            Kr(D),
            K
          );
        if (D.$$typeof === Ze)
          return it(
            M,
            R,
            Hs(M, D),
            K
          );
        Cl(M, D);
      }
      return typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint" ? (D = "" + D, R !== null && R.tag === 6 ? (u(M, R.sibling), K = f(R, D), K.return = M, M = K) : (u(M, R), K = to(D, M.mode, K), K.return = M, M = K), m(M)) : u(M, R);
    }
    return function(M, R, D, K) {
      try {
        yo = 0;
        var ie = it(
          M,
          R,
          D,
          K
        );
        return oc = null, ie;
      } catch (ye) {
        if (ye === ni || ye === js) throw ye;
        var Le = Wl(29, ye, null, M.mode);
        return Le.lanes = K, Le.return = M, Le;
      } finally {
      }
    };
  }
  var fc = ea(!0), Cn = ea(!1), pa = ue(null), Ul = null;
  function Su(l) {
    var n = l.alternate;
    le(bt, bt.current & 1), le(pa, l), Ul === null && (n === null || ac.current !== null || n.memoizedState !== null) && (Ul = l);
  }
  function Un(l) {
    if (l.tag === 22) {
      if (le(bt, bt.current), le(pa, l), Ul === null) {
        var n = l.alternate;
        n !== null && n.memoizedState !== null && (Ul = l);
      }
    } else Hn();
  }
  function Hn() {
    le(bt, bt.current), le(pa, pa.current);
  }
  function un(l) {
    I(pa), Ul === l && (Ul = null), I(bt);
  }
  var bt = ue(0);
  function Ws(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || Sf(u)))
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
  function oi(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : ae({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var $r = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = ga(), f = Il(c);
      f.payload = n, u != null && (f.callback = u), n = On(l, f, c), n !== null && (va(n, l, c), lc(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = ga(), f = Il(c);
      f.tag = 1, f.payload = n, u != null && (f.callback = u), n = On(l, f, c), n !== null && (va(n, l, c), lc(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = ga(), c = Il(u);
      c.tag = 2, n != null && (c.callback = n), n = On(l, c, u), n !== null && (va(n, l, u), lc(n, l, u));
    }
  };
  function po(l, n, u, c, f, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, m) : n.prototype && n.prototype.isPureReactComponent ? !$u(u, c) || !$u(f, r) : !0;
  }
  function rc(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && $r.enqueueReplaceState(n, n.state, null);
  }
  function si(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = ae({}, u));
      for (var f in l)
        u[f] === void 0 && (u[f] = l[f]);
    }
    return u;
  }
  var Fs = typeof reportError == "function" ? reportError : function(l) {
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
    Fs(l);
  }
  function Om(l) {
    console.error(l);
  }
  function Is(l) {
    Fs(l);
  }
  function Ps(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Mm(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (f) {
      setTimeout(function() {
        throw f;
      });
    }
  }
  function Dm(l, n, u) {
    return u = Il(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      Ps(l, n);
    }, u;
  }
  function Cm(l) {
    return l = Il(l), l.tag = 3, l;
  }
  function ta(l, n, u, c) {
    var f = u.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var r = c.value;
      l.payload = function() {
        return f(r);
      }, l.callback = function() {
        Mm(n, u, c);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      Mm(n, u, c), typeof f != "function" && (hi === null ? hi = /* @__PURE__ */ new Set([this]) : hi.add(this));
      var p = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: p !== null ? p : ""
      });
    });
  }
  function t0(l, n, u, c, f) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && io(
        n,
        u,
        f,
        !0
      ), u = pa.current, u !== null) {
        switch (u.tag) {
          case 13:
            return Ul === null ? Sc() : u.alternate === null && Lt === 0 && (Lt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = f, c === Er ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), Td(l, c, f)), !1;
          case 22:
            return u.flags |= 65536, c === Er ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), Td(l, c, f)), !1;
        }
        throw Error(v(435, u.tag));
      }
      return Td(l, c, f), Sc(), !1;
    }
    if (at)
      return n = pa.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = f, c !== Pi && (l = Error(v(422), { cause: c }), uo(ha(l, u)))) : (c !== Pi && (n = Error(v(423), {
        cause: c
      }), uo(
        ha(n, u)
      )), l = l.current.alternate, l.flags |= 65536, f &= -f, l.lanes |= f, c = ha(c, u), f = Dm(
        l.stateNode,
        c,
        f
      ), cm(l, f), Lt !== 4 && (Lt = 2)), !1;
    var r = Error(v(520), { cause: c });
    if (r = ha(r, u), Eo === null ? Eo = [r] : Eo.push(r), Lt !== 4 && (Lt = 2), n === null) return !0;
    c = ha(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = f & -f, u.lanes |= l, l = Dm(u.stateNode, c, l), cm(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (hi === null || !hi.has(r))))
            return u.flags |= 65536, f &= -f, u.lanes |= f, f = Cm(f), ta(
              f,
              l,
              u,
              c
            ), cm(u, f), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Gt = Error(v(461)), el = !1;
  function ol(l, n, u, c) {
    n.child = l === null ? Cn(n, null, u, c) : fc(
      n,
      l.child,
      u,
      c
    );
  }
  function l0(l, n, u, c, f) {
    u = u.render;
    var r = n.ref;
    if ("ref" in c) {
      var m = {};
      for (var p in c)
        p !== "ref" && (m[p] = c[p]);
    } else m = c;
    return li(n), c = Cr(
      l,
      n,
      u,
      m,
      r,
      f
    ), p = Ur(), l !== null && !el ? (ho(l, n, f), wn(l, n, f)) : (at && p && Ii(n), n.flags |= 1, ol(l, n, c, f), n.child);
  }
  function Tu(l, n, u, c, f) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !Os(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, dc(
        l,
        n,
        r,
        c,
        f
      )) : (l = W(
        u.type,
        null,
        c,
        n,
        n.mode,
        f
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !ud(l, f)) {
      var m = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : $u, u(m, c) && l.ref === n.ref)
        return wn(l, n, f);
    }
    return n.flags |= 1, l = en(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function dc(l, n, u, c, f) {
    if (l !== null) {
      var r = l.memoizedProps;
      if ($u(r, c) && l.ref === n.ref)
        if (el = !1, n.pendingProps = c = r, ud(l, f))
          (l.flags & 131072) !== 0 && (el = !0);
        else
          return n.lanes = l.lanes, wn(l, n, f);
    }
    return Fr(
      l,
      n,
      u,
      c,
      f
    );
  }
  function Wr(l, n, u) {
    var c = n.pendingProps, f = c.children, r = l !== null ? l.memoizedState : null;
    if (c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (c = r !== null ? r.baseLanes | u : u, l !== null) {
          for (f = n.child = l.child, r = 0; f !== null; )
            r = r | f.lanes | f.childLanes, f = f.sibling;
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
        ), r !== null ? cl(n, r) : fo(), Un(n);
      else
        return n.lanes = n.childLanes = 536870912, hc(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u
        );
    } else
      r !== null ? (ec(n, r.cachePool), cl(n, r), Hn(), n.memoizedState = null) : (l !== null && ec(n, null), fo(), Hn());
    return ol(l, n, f, u), n.child;
  }
  function hc(l, n, u, c) {
    var f = Ns();
    return f = f === null ? null : { parent: It._currentValue, pool: f }, n.memoizedState = {
      baseLanes: u,
      cachePool: f
    }, l !== null && ec(n, null), fo(), Un(n), l !== null && io(l, n, c, !0), null;
  }
  function ef(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(v(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function Fr(l, n, u, c, f) {
    return li(n), u = Cr(
      l,
      n,
      u,
      c,
      void 0,
      f
    ), c = Ur(), l !== null && !el ? (ho(l, n, f), wn(l, n, f)) : (at && c && Ii(n), n.flags |= 1, ol(l, n, u, f), n.child);
  }
  function Um(l, n, u, c, f, r) {
    return li(n), n.updateQueue = null, u = fm(
      n,
      c,
      u,
      f
    ), ii(l), c = Ur(), l !== null && !el ? (ho(l, n, r), wn(l, n, r)) : (at && c && Ii(n), n.flags |= 1, ol(l, n, u, r), n.child);
  }
  function Ir(l, n, u, c, f) {
    if (li(n), n.stateNode === null) {
      var r = eo, m = u.contextType;
      typeof m == "object" && m !== null && (r = il(m)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = $r, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, Rr(n), m = u.contextType, r.context = typeof m == "object" && m !== null ? il(m) : eo, r.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (oi(
        n,
        u,
        m,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && $r.enqueueReplaceState(r, r.state, null), gu(n, c, r, f), so(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var p = n.memoizedProps, S = si(u, p);
      r.props = S;
      var C = r.context, Q = u.contextType;
      m = eo, typeof Q == "object" && Q !== null && (m = il(Q));
      var $ = u.getDerivedStateFromProps;
      Q = typeof $ == "function" || typeof r.getSnapshotBeforeUpdate == "function", p = n.pendingProps !== p, Q || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (p || C !== m) && rc(
        n,
        r,
        c,
        m
      ), Rn = !1;
      var H = n.memoizedState;
      r.state = H, gu(n, c, r, f), so(), C = n.memoizedState, p || H !== C || Rn ? (typeof $ == "function" && (oi(
        n,
        u,
        $,
        c
      ), C = n.memoizedState), (S = Rn || po(
        n,
        u,
        S,
        c,
        H,
        C,
        m
      )) ? (Q || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = C), r.props = c, r.state = C, r.context = m, c = S) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, Or(l, n), m = n.memoizedProps, Q = si(u, m), r.props = Q, $ = n.pendingProps, H = r.context, C = u.contextType, S = eo, typeof C == "object" && C !== null && (S = il(C)), p = u.getDerivedStateFromProps, (C = typeof p == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== $ || H !== S) && rc(
        n,
        r,
        c,
        S
      ), Rn = !1, H = n.memoizedState, r.state = H, gu(n, c, r, f), so();
      var N = n.memoizedState;
      m !== $ || H !== N || Rn || l !== null && l.dependencies !== null && Us(l.dependencies) ? (typeof p == "function" && (oi(
        n,
        u,
        p,
        c
      ), N = n.memoizedState), (Q = Rn || po(
        n,
        u,
        Q,
        c,
        H,
        N,
        S
      ) || l !== null && l.dependencies !== null && Us(l.dependencies)) ? (C || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, N, S), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        N,
        S
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && H === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && H === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = N), r.props = c, r.state = N, r.context = S, c = Q) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && H === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && H === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, ef(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = fc(
      n,
      l.child,
      null,
      f
    ), n.child = fc(
      n,
      null,
      u,
      f
    )) : ol(l, n, u, f), n.memoizedState = r.state, l = n.child) : l = wn(
      l,
      n,
      f
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
    return { baseLanes: l, cachePool: xr() };
  }
  function wm(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= qa), l;
  }
  function Nm(l, n, u) {
    var c = n.pendingProps, f = !1, r = (n.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : (bt.current & 2) !== 0), m && (f = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (at) {
        if (f ? Su(n) : Hn(), at) {
          var p = nt, S;
          if (S = p) {
            e: {
              for (S = p, p = Ha; S.nodeType !== 8; ) {
                if (!p) {
                  p = null;
                  break e;
                }
                if (S = on(
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
              treeContext: hu !== null ? { id: tn, overflow: qt } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, S = Wl(
              18,
              null,
              null,
              0
            ), S.stateNode = p, S.return = n, n.child = S, kt = n, nt = null, S = !0) : S = !1;
          }
          S || mu(n);
        }
        if (p = n.memoizedState, p !== null && (p = p.dehydrated, p !== null))
          return Sf(p) ? n.lanes = 32 : n.lanes = 536870912, null;
        un(n);
      }
      return p = c.children, c = c.fallback, f ? (Hn(), f = n.mode, p = ld(
        { mode: "hidden", children: p },
        f
      ), c = Da(
        c,
        f,
        u,
        null
      ), p.return = n, c.return = n, p.sibling = c, n.child = p, f = n.child, f.memoizedState = Hm(u), f.childLanes = wm(
        l,
        m,
        u
      ), n.memoizedState = ed, c) : (Su(n), td(n, p));
    }
    if (S = l.memoizedState, S !== null && (p = S.dehydrated, p !== null)) {
      if (r)
        n.flags & 256 ? (Su(n), n.flags &= -257, n = fi(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Hn(), n.child = l.child, n.flags |= 128, n = null) : (Hn(), f = c.fallback, p = n.mode, c = ld(
          { mode: "visible", children: c.children },
          p
        ), f = Da(
          f,
          p,
          u,
          null
        ), f.flags |= 2, c.return = n, f.return = n, c.sibling = f, n.child = c, fc(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = Hm(u), c.childLanes = wm(
          l,
          m,
          u
        ), n.memoizedState = ed, n = f);
      else if (Su(n), Sf(p)) {
        if (m = p.nextSibling && p.nextSibling.dataset, m) var C = m.dgst;
        m = C, c = Error(v(419)), c.stack = "", c.digest = m, uo({ value: c, source: null, stack: null }), n = fi(
          l,
          n,
          u
        );
      } else if (el || io(l, n, u, !1), m = (u & l.childLanes) !== 0, el || m) {
        if (m = xt, m !== null && (c = u & -u, c = (c & 42) !== 0 ? 1 : Ja(c), c = (c & (m.suspendedLanes | u)) !== 0 ? 0 : c, c !== 0 && c !== S.retryLane))
          throw S.retryLane = c, Tn(l, c), va(m, l, c), Gt;
        p.data === "$?" || Sc(), n = fi(
          l,
          n,
          u
        );
      } else
        p.data === "$?" ? (n.flags |= 192, n.child = l.child, n = null) : (l = S.treeContext, nt = on(
          p.nextSibling
        ), kt = n, at = !0, Ua = null, Ha = !1, l !== null && (Ca[Fl++] = tn, Ca[Fl++] = qt, Ca[Fl++] = hu, tn = l.id, qt = l.overflow, hu = n), n = td(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return f ? (Hn(), f = c.fallback, p = n.mode, S = l.child, C = S.sibling, c = en(S, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = S.subtreeFlags & 65011712, C !== null ? f = en(C, f) : (f = Da(
      f,
      p,
      u,
      null
    ), f.flags |= 2), f.return = n, c.return = n, c.sibling = f, n.child = c, c = f, f = n.child, p = l.child.memoizedState, p === null ? p = Hm(u) : (S = p.cachePool, S !== null ? (C = It._currentValue, S = S.parent !== C ? { parent: C, pool: C } : S) : S = xr(), p = {
      baseLanes: p.baseLanes | u,
      cachePool: S
    }), f.memoizedState = p, f.childLanes = wm(
      l,
      m,
      u
    ), n.memoizedState = ed, c) : (Su(n), u = l.child, l = u.sibling, u = en(u, {
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
    return l = Wl(22, l, null, n), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function fi(l, n, u) {
    return fc(n, l.child, null, u), l = td(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function tf(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), gr(l.return, n, u);
  }
  function ad(l, n, u, c, f) {
    var r = l.memoizedState;
    r === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: f
    } : (r.isBackwards = n, r.rendering = null, r.renderingStartTime = 0, r.last = c, r.tail = u, r.tailMode = f);
  }
  function nd(l, n, u) {
    var c = n.pendingProps, f = c.revealOrder, r = c.tail;
    if (ol(l, n, c.children, u), c = bt.current, (c & 2) !== 0)
      c = c & 1 | 2, n.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        e: for (l = n.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && tf(l, u, n);
          else if (l.tag === 19)
            tf(l, u, n);
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
    switch (le(bt, c), f) {
      case "forwards":
        for (u = n.child, f = null; u !== null; )
          l = u.alternate, l !== null && Ws(l) === null && (f = u), u = u.sibling;
        u = f, u === null ? (f = n.child, n.child = null) : (f = u.sibling, u.sibling = null), ad(
          n,
          !1,
          f,
          u,
          r
        );
        break;
      case "backwards":
        for (u = null, f = n.child, n.child = null; f !== null; ) {
          if (l = f.alternate, l !== null && Ws(l) === null) {
            n.child = f;
            break;
          }
          l = f.sibling, f.sibling = u, u = f, f = l;
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
  function wn(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), Eu |= n.lanes, (u & n.childLanes) === 0)
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
      throw Error(v(153));
    if (n.child !== null) {
      for (l = n.child, u = en(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = en(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function ud(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Us(l)));
  }
  function a0(l, n, u) {
    switch (n.tag) {
      case 3:
        zt(n, n.stateNode.containerInfo), pu(n, It, l.memoizedState.cache), no();
        break;
      case 27:
      case 5:
        hl(n);
        break;
      case 4:
        zt(n, n.stateNode.containerInfo);
        break;
      case 10:
        pu(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (Su(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? Nm(l, n, u) : (Su(n), l = wn(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        Su(n);
        break;
      case 19:
        var f = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (io(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), f) {
          if (c)
            return nd(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (f = n.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), le(bt, bt.current), c) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Wr(l, n, u);
      case 24:
        pu(n, It, l.memoizedState.cache);
    }
    return wn(l, n, u);
  }
  function n0(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        el = !0;
      else {
        if (!ud(l, u) && (n.flags & 128) === 0)
          return el = !1, a0(
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
          var c = n.elementType, f = c._init;
          if (c = f(c._payload), n.type = c, typeof c == "function")
            Os(c) ? (l = si(c, l), n.tag = 1, n = Ir(
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
              if (f = c.$$typeof, f === mt) {
                n.tag = 11, n = l0(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              } else if (f === qe) {
                n.tag = 14, n = Tu(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              }
            }
            throw n = Dt(c) || c, Error(v(306, n, ""));
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
        return c = n.type, f = si(
          c,
          n.pendingProps
        ), Ir(
          l,
          n,
          c,
          f,
          u
        );
      case 3:
        e: {
          if (zt(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(v(387));
          c = n.pendingProps;
          var r = n.memoizedState;
          f = r.element, Or(l, n), gu(n, c, null, u);
          var m = n.memoizedState;
          if (c = m.cache, pu(n, It, c), c !== r.cache && lm(
            n,
            [It],
            u,
            !0
          ), so(), c = m.element, r.isDehydrated)
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
            } else if (c !== f) {
              f = ha(
                Error(v(424)),
                n
              ), uo(f), n = Pr(
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
              for (nt = on(l.firstChild), kt = n, at = !0, Ua = null, Ha = !0, u = Cn(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (no(), c === f) {
              n = wn(
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
        return ef(l, n), l === null ? (u = S0(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : at || (u = n.type, l = n.pendingProps, c = Ga(
          He.current
        ).createElement(u), c[ul] = n, c[_l] = l, Ee(c, u, l), Ft(c), n.stateNode = c) : n.memoizedState = S0(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return hl(n), l === null && at && (c = n.stateNode = te(
          n.type,
          n.pendingProps,
          He.current
        ), kt = n, Ha = !0, f = nt, bi(n.type) ? (Si = f, nt = on(
          c.firstChild
        )) : nt = f), ol(
          l,
          n,
          n.pendingProps.children,
          u
        ), ef(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && at && ((f = c = nt) && (c = Bo(
          c,
          n.type,
          n.pendingProps,
          Ha
        ), c !== null ? (n.stateNode = c, kt = n, nt = on(
          c.firstChild
        ), Ha = !1, f = !0) : f = !1), f || mu(n)), hl(n), f = n.type, r = n.pendingProps, m = l !== null ? l.memoizedProps : null, c = r.children, Xn(f, r) ? c = null : m !== null && Xn(f, m) && (n.flags |= 32), n.memoizedState !== null && (f = Cr(
          l,
          n,
          kp,
          null,
          null,
          u
        ), ca._currentValue = f), ef(l, n), ol(l, n, c, u), n.child;
      case 6:
        return l === null && at && ((l = u = nt) && (u = Vg(
          u,
          n.pendingProps,
          Ha
        ), u !== null ? (n.stateNode = u, kt = n, nt = null, l = !0) : l = !1), l || mu(n)), null;
      case 13:
        return Nm(l, n, u);
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
        return l0(
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
        return c = n.pendingProps, pu(n, n.type, c.value), ol(
          l,
          n,
          c.children,
          u
        ), n.child;
      case 9:
        return f = n.type._context, c = n.pendingProps.children, li(n), f = il(f), c = c(f), n.flags |= 1, ol(l, n, c, u), n.child;
      case 14:
        return Tu(
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
        ), u.ref = n.ref, n.child = u, u.return = n, n = u) : (u = en(l.child, c), u.ref = n.ref, n.child = u, u.return = n, n = u), n;
      case 22:
        return Wr(l, n, u);
      case 24:
        return li(n), c = il(It), l === null ? (f = Ns(), f === null && (f = xt, r = oo(), f.pooledCache = r, r.refCount++, r !== null && (f.pooledCacheLanes |= u), f = r), n.memoizedState = {
          parent: c,
          cache: f
        }, Rr(n), pu(n, It, f)) : ((l.lanes & u) !== 0 && (Or(l, n), gu(n, null, null, u), so()), f = l.memoizedState, r = n.memoizedState, f.parent !== c ? (f = { parent: c, cache: c }, n.memoizedState = f, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = f), pu(n, It, c)) : (c = r.cache, pu(n, It, c), c !== f.cache && lm(
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
    throw Error(v(156, n.tag));
  }
  function Nn(l) {
    l.flags |= 4;
  }
  function vo(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !gy(n)) {
      if (n = pa.current, n !== null && ((Ke & 4194048) === Ke ? Ul !== null : (Ke & 62914560) !== Ke && (Ke & 536870912) === 0 || n !== Ul))
        throw tc = Er, Ar;
      l.flags |= 8192;
    }
  }
  function lf(l, n) {
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
      for (var f = l.child; f !== null; )
        u |= f.lanes | f.childLanes, c |= f.subtreeFlags & 65011712, c |= f.flags & 65011712, f.return = l, f = f.sibling;
    else
      for (f = l.child; f !== null; )
        u |= f.lanes | f.childLanes, c |= f.subtreeFlags, c |= f.flags, f.return = l, f = f.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function jm(l, n, u) {
    var c = n.pendingProps;
    switch (xn(n), n.tag) {
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
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), An(It), _t(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (ao(n) ? Nn(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, tm())), Te(n), null;
      case 26:
        return u = n.memoizedState, l === null ? (Nn(n), u !== null ? (Te(n), vo(n, u)) : (Te(n), n.flags &= -16777217)) : u ? u !== l.memoizedState ? (Nn(n), Te(n), vo(n, u)) : (Te(n), n.flags &= -16777217) : (l.memoizedProps !== c && Nn(n), Te(n), n.flags &= -16777217), null;
      case 27:
        ka(n), u = He.current;
        var f = n.type;
        if (l !== null && n.stateNode != null)
          l.memoizedProps !== c && Nn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(v(166));
            return Te(n), null;
          }
          l = Se.current, ao(n) ? Ds(n) : (l = te(f, c, u), n.stateNode = l, Nn(n));
        }
        return Te(n), null;
      case 5:
        if (ka(n), u = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Nn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(v(166));
            return Te(n), null;
          }
          if (l = Se.current, ao(n))
            Ds(n);
          else {
            switch (f = Ga(
              He.current
            ), l) {
              case 1:
                l = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = f.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof c.is == "string" ? f.createElement("select", { is: c.is }) : f.createElement("select"), c.multiple ? l.multiple = !0 : c.size && (l.size = c.size);
                    break;
                  default:
                    l = typeof c.is == "string" ? f.createElement(u, { is: c.is }) : f.createElement(u);
                }
            }
            l[ul] = n, l[_l] = c;
            e: for (f = n.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                l.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === n) break e;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === n)
                  break e;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            n.stateNode = l;
            e: switch (Ee(l, u, c), u) {
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
            l && Nn(n);
          }
        }
        return Te(n), n.flags &= -16777217, null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && Nn(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(v(166));
          if (l = He.current, ao(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, f = kt, f !== null)
              switch (f.tag) {
                case 27:
                case 5:
                  c = f.memoizedProps;
              }
            l[ul] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || hy(l.nodeValue, u)), l || mu(n);
          } else
            l = Ga(l).createTextNode(
              c
            ), l[ul] = n, n.stateNode = l;
        }
        return Te(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (f = ao(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!f) throw Error(v(318));
              if (f = n.memoizedState, f = f !== null ? f.dehydrated : null, !f) throw Error(v(317));
              f[ul] = n;
            } else
              no(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Te(n), f = !1;
          } else
            f = tm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = f), f = !0;
          if (!f)
            return n.flags & 256 ? (un(n), n) : (un(n), null);
        }
        if (un(n), (n.flags & 128) !== 0)
          return n.lanes = u, n;
        if (u = c !== null, l = l !== null && l.memoizedState !== null, u) {
          c = n.child, f = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (f = c.alternate.memoizedState.cachePool.pool);
          var r = null;
          c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== f && (c.flags |= 2048);
        }
        return u !== l && u && (n.child.flags |= 8192), lf(n, n.updateQueue), Te(n), null;
      case 4:
        return _t(), l === null && ry(n.stateNode.containerInfo), Te(n), null;
      case 10:
        return An(n.type), Te(n), null;
      case 19:
        if (I(bt), f = n.memoizedState, f === null) return Te(n), null;
        if (c = (n.flags & 128) !== 0, r = f.rendering, r === null)
          if (c) bo(f, !1);
          else {
            if (Lt !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = Ws(l), r !== null) {
                  for (n.flags |= 128, bo(f, !1), l = r.updateQueue, n.updateQueue = l, lf(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    Xe(u, l), u = u.sibling;
                  return le(
                    bt,
                    bt.current & 1 | 2
                  ), n.child;
                }
                l = l.sibling;
              }
            f.tail !== null && sa() > md && (n.flags |= 128, c = !0, bo(f, !1), n.lanes = 4194304);
          }
        else {
          if (!c)
            if (l = Ws(r), l !== null) {
              if (n.flags |= 128, c = !0, l = l.updateQueue, n.updateQueue = l, lf(n, l), bo(f, !0), f.tail === null && f.tailMode === "hidden" && !r.alternate && !at)
                return Te(n), null;
            } else
              2 * sa() - f.renderingStartTime > md && u !== 536870912 && (n.flags |= 128, c = !0, bo(f, !1), n.lanes = 4194304);
          f.isBackwards ? (r.sibling = n.child, n.child = r) : (l = f.last, l !== null ? l.sibling = r : n.child = r, f.last = r);
        }
        return f.tail !== null ? (n = f.tail, f.rendering = n, f.tail = n.sibling, f.renderingStartTime = sa(), n.sibling = null, l = bt.current, le(bt, c ? l & 1 | 2 : l & 1), n) : (Te(n), null);
      case 22:
      case 23:
        return un(n), ro(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (Te(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Te(n), u = n.updateQueue, u !== null && lf(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && I(zn), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), An(It), Te(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(v(156, n.tag));
  }
  function wg(l, n) {
    switch (xn(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return An(It), _t(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return ka(n), null;
      case 13:
        if (un(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(v(340));
          no();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return I(bt), null;
      case 4:
        return _t(), null;
      case 10:
        return An(n.type), null;
      case 22:
      case 23:
        return un(n), ro(), l !== null && I(zn), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return An(It), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Bm(l, n) {
    switch (xn(n), n.tag) {
      case 3:
        An(It), _t();
        break;
      case 26:
      case 27:
      case 5:
        ka(n);
        break;
      case 4:
        _t();
        break;
      case 13:
        un(n);
        break;
      case 19:
        I(bt);
        break;
      case 10:
        An(n.type);
        break;
      case 22:
      case 23:
        un(n), ro(), l !== null && I(zn);
        break;
      case 24:
        An(It);
    }
  }
  function af(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var f = c.next;
        u = f;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var r = u.create, m = u.inst;
            c = r(), m.destroy = c;
          }
          u = u.next;
        } while (u !== f);
      }
    } catch (p) {
      yt(n, n.return, p);
    }
  }
  function ri(l, n, u) {
    try {
      var c = n.updateQueue, f = c !== null ? c.lastEffect : null;
      if (f !== null) {
        var r = f.next;
        c = r;
        do {
          if ((c.tag & l) === l) {
            var m = c.inst, p = m.destroy;
            if (p !== void 0) {
              m.destroy = void 0, f = n;
              var S = u, C = p;
              try {
                C();
              } catch (Q) {
                yt(
                  f,
                  S,
                  Q
                );
              }
            }
          }
          c = c.next;
        } while (c !== r);
      }
    } catch (Q) {
      yt(n, n.return, Q);
    }
  }
  function id(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        _s(n, u);
      } catch (c) {
        yt(l, l.return, c);
      }
    }
  }
  function _m(l, n, u) {
    u.props = si(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      yt(l, n, c);
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
    } catch (f) {
      yt(l, n, f);
    }
  }
  function cn(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (f) {
          yt(l, n, f);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (f) {
          yt(l, n, f);
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
    } catch (f) {
      yt(l, l.return, f);
    }
  }
  function qm(l, n, u) {
    try {
      var c = l.stateNode;
      qg(c, l.type, u, n), c[_l] = n;
    } catch (f) {
      yt(l, l.return, f);
    }
  }
  function u0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && bi(l.type) || l.tag === 4;
  }
  function Ba(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || u0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && bi(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function mc(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = Rd));
    else if (c !== 4 && (c === 27 && bi(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (mc(l, n, u), l = l.sibling; l !== null; )
        mc(l, n, u), l = l.sibling;
  }
  function cd(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && bi(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (cd(l, n, u), l = l.sibling; l !== null; )
        cd(l, n, u), l = l.sibling;
  }
  function od(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, f = n.attributes; f.length; )
        n.removeAttributeNode(f[0]);
      Ee(n, c, u), n[ul] = l, n[_l] = u;
    } catch (r) {
      yt(l, l.return, r);
    }
  }
  var jn = !1, Vt = !1, sd = !1, fd = typeof WeakSet == "function" ? WeakSet : Set, tl = null;
  function Ym(l, n) {
    if (l = l.containerInfo, gf = Af, l = Kh(l), zs(l)) {
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
            var f = c.anchorOffset, r = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break e;
            }
            var m = 0, p = -1, S = -1, C = 0, Q = 0, $ = l, H = null;
            t: for (; ; ) {
              for (var N; $ !== u || f !== 0 && $.nodeType !== 3 || (p = m + f), $ !== r || c !== 0 && $.nodeType !== 3 || (S = m + c), $.nodeType === 3 && (m += $.nodeValue.length), (N = $.firstChild) !== null; )
                H = $, $ = N;
              for (; ; ) {
                if ($ === l) break t;
                if (H === u && ++C === f && (p = m), H === r && ++Q === c && (S = m), (N = $.nextSibling) !== null) break;
                $ = H, H = $.parentNode;
              }
              $ = N;
            }
            u = p === -1 || S === -1 ? null : { start: p, end: S };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (vf = { focusedElem: l, selectionRange: u }, Af = !1, tl = n; tl !== null; )
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
                l = void 0, u = n, f = r.memoizedProps, r = r.memoizedState, c = u.stateNode;
                try {
                  var ge = si(
                    u.type,
                    f,
                    u.elementType === u.type
                  );
                  l = c.getSnapshotBeforeUpdate(
                    ge,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (ve) {
                  yt(
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
                  bf(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      bf(l);
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
              if ((l & 1024) !== 0) throw Error(v(163));
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
        _n(l, u), c & 4 && af(5, u);
        break;
      case 1:
        if (_n(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              yt(u, u.return, m);
            }
          else {
            var f = si(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                f,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              yt(
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
            _s(l, n);
          } catch (m) {
            yt(u, u.return, m);
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
        _n(l, u), c & 4 && rd(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = Ng.bind(
          null,
          u
        ), Xg(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || jn, !c) {
          n = n !== null && n.memoizedState !== null || Vt, f = jn;
          var r = Vt;
          jn = c, (Vt = n) && !r ? di(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : _n(l, u), jn = f, Vt = r;
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
    n !== null && (l.alternate = null, Vm(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && ss(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Ct = null, gl = !1;
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
        Vt || cn(u, n), Bn(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Vt || cn(u, n);
        var c = Ct, f = gl;
        bi(u.type) && (Ct = u.stateNode, gl = !1), Bn(
          l,
          n,
          u
        ), ua(u.stateNode), Ct = c, gl = f;
        break;
      case 5:
        Vt || cn(u, n);
      case 6:
        if (c = Ct, f = gl, Ct = null, Bn(
          l,
          n,
          u
        ), Ct = c, gl = f, Ct !== null)
          if (gl)
            try {
              (Ct.nodeType === 9 ? Ct.body : Ct.nodeName === "HTML" ? Ct.ownerDocument.body : Ct).removeChild(u.stateNode);
            } catch (r) {
              yt(
                u,
                n,
                r
              );
            }
          else
            try {
              Ct.removeChild(u.stateNode);
            } catch (r) {
              yt(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        Ct !== null && (gl ? (l = Ct, Md(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Zn(l)) : Md(Ct, u.stateNode));
        break;
      case 4:
        c = Ct, f = gl, Ct = u.stateNode.containerInfo, gl = !0, Bn(
          l,
          n,
          u
        ), Ct = c, gl = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Vt || ri(2, u, n), Vt || ri(4, u, n), Bn(
          l,
          n,
          u
        );
        break;
      case 1:
        Vt || (cn(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && _m(
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
        Zn(l);
      } catch (u) {
        yt(n, n.return, u);
      }
  }
  function Xm(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new fd()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new fd()), n;
      default:
        throw Error(v(435, l.tag));
    }
  }
  function dd(l, n) {
    var u = Xm(l);
    n.forEach(function(c) {
      var f = jg.bind(null, l, c);
      u.has(c) || (u.add(c), c.then(f, f));
    });
  }
  function Gl(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var f = u[c], r = l, m = n, p = m;
        e: for (; p !== null; ) {
          switch (p.tag) {
            case 27:
              if (bi(p.type)) {
                Ct = p.stateNode, gl = !1;
                break e;
              }
              break;
            case 5:
              Ct = p.stateNode, gl = !1;
              break e;
            case 3:
            case 4:
              Ct = p.stateNode.containerInfo, gl = !0;
              break e;
          }
          p = p.return;
        }
        if (Ct === null) throw Error(v(160));
        ke(r, m, f), Ct = null, gl = !1, r = f.alternate, r !== null && (r.return = null), f.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        nf(n, l), n = n.sibling;
  }
  var Vl = null;
  function nf(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Gl(n, l), sl(l), c & 4 && (ri(3, l, l.return), af(3, l), ri(5, l, l.return));
        break;
      case 1:
        Gl(n, l), sl(l), c & 512 && (Vt || u === null || cn(u, u.return)), c & 64 && jn && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var f = Vl;
        if (Gl(n, l), sl(l), c & 512 && (Vt || u === null || cn(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, f = f.ownerDocument || f;
                  t: switch (c) {
                    case "title":
                      r = f.getElementsByTagName("title")[0], (!r || r[ce] || r[ul] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = f.createElement(c), f.head.insertBefore(
                        r,
                        f.querySelector("head > title")
                      )), Ee(r, c, u), r[ul] = l, Ft(r), c = r;
                      break e;
                    case "link":
                      var m = yy(
                        "link",
                        "href",
                        f
                      ).get(c + (u.href || ""));
                      if (m) {
                        for (var p = 0; p < m.length; p++)
                          if (r = m[p], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            m.splice(p, 1);
                            break t;
                          }
                      }
                      r = f.createElement(c), Ee(r, c, u), f.head.appendChild(r);
                      break;
                    case "meta":
                      if (m = yy(
                        "meta",
                        "content",
                        f
                      ).get(c + (u.content || ""))) {
                        for (p = 0; p < m.length; p++)
                          if (r = m[p], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            m.splice(p, 1);
                            break t;
                          }
                      }
                      r = f.createElement(c), Ee(r, c, u), f.head.appendChild(r);
                      break;
                    default:
                      throw Error(v(468, c));
                  }
                  r[ul] = l, Ft(r), c = r;
                }
                l.stateNode = c;
              } else
                py(
                  f,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = x0(
                f,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? py(
              f,
              l.type,
              l.stateNode
            ) : x0(
              f,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && qm(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Gl(n, l), sl(l), c & 512 && (Vt || u === null || cn(u, u.return)), u !== null && c & 4 && qm(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Gl(n, l), sl(l), c & 512 && (Vt || u === null || cn(u, u.return)), l.flags & 32) {
          f = l.stateNode;
          try {
            Zc(f, "");
          } catch (N) {
            yt(l, l.return, N);
          }
        }
        c & 4 && l.stateNode != null && (f = l.memoizedProps, qm(
          l,
          f,
          u !== null ? u.memoizedProps : f
        )), c & 1024 && (sd = !0);
        break;
      case 6:
        if (Gl(n, l), sl(l), c & 4) {
          if (l.stateNode === null)
            throw Error(v(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (N) {
            yt(l, l.return, N);
          }
        }
        break;
      case 3:
        if (Ai = null, f = Vl, Vl = Dd(n.containerInfo), Gl(n, l), Vl = f, sl(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Zn(n.containerInfo);
          } catch (N) {
            yt(l, l.return, N);
          }
        sd && (sd = !1, Lm(l));
        break;
      case 4:
        c = Vl, Vl = Dd(
          l.stateNode.containerInfo
        ), Gl(n, l), sl(l), Vl = c;
        break;
      case 12:
        Gl(n, l), sl(l);
        break;
      case 13:
        Gl(n, l), sl(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Fm = sa()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, dd(l, c)));
        break;
      case 22:
        f = l.memoizedState !== null;
        var S = u !== null && u.memoizedState !== null, C = jn, Q = Vt;
        if (jn = C || f, Vt = Q || S, Gl(n, l), Vt = Q, jn = C, sl(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = f ? n._visibility & -2 : n._visibility | 1, f && (u === null || S || jn || Vt || Ut(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                S = u = n;
                try {
                  if (r = S.stateNode, f)
                    m = r.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    p = S.stateNode;
                    var $ = S.memoizedProps.style, H = $ != null && $.hasOwnProperty("display") ? $.display : null;
                    p.style.display = H == null || typeof H == "boolean" ? "" : ("" + H).trim();
                  }
                } catch (N) {
                  yt(S, S.return, N);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                S = n;
                try {
                  S.stateNode.nodeValue = f ? "" : S.memoizedProps;
                } catch (N) {
                  yt(S, S.return, N);
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
        Gl(n, l), sl(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, dd(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Gl(n, l), sl(l);
    }
  }
  function sl(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (u0(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(v(160));
        switch (u.tag) {
          case 27:
            var f = u.stateNode, r = Ba(l);
            cd(l, r, f);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (Zc(m, ""), u.flags &= -33);
            var p = Ba(l);
            cd(l, p, m);
            break;
          case 3:
          case 4:
            var S = u.stateNode.containerInfo, C = Ba(l);
            mc(
              l,
              C,
              S
            );
            break;
          default:
            throw Error(v(161));
        }
      } catch (Q) {
        yt(l, l.return, Q);
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
  function Ut(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ri(4, n, n.return), Ut(n);
          break;
        case 1:
          cn(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && _m(
            n,
            n.return,
            u
          ), Ut(n);
          break;
        case 27:
          ua(n.stateNode);
        case 26:
        case 5:
          cn(n, n.return), Ut(n);
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
  function di(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, f = l, r = n, m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          di(
            f,
            r,
            u
          ), af(4, r);
          break;
        case 1:
          if (di(
            f,
            r,
            u
          ), c = r, f = c.stateNode, typeof f.componentDidMount == "function")
            try {
              f.componentDidMount();
            } catch (C) {
              yt(c, c.return, C);
            }
          if (c = r, f = c.updateQueue, f !== null) {
            var p = c.stateNode;
            try {
              var S = f.shared.hiddenCallbacks;
              if (S !== null)
                for (f.shared.hiddenCallbacks = null, f = 0; f < S.length; f++)
                  Mr(S[f], p);
            } catch (C) {
              yt(c, c.return, C);
            }
          }
          u && m & 64 && id(r), So(r, r.return);
          break;
        case 27:
          od(r);
        case 26:
        case 5:
          di(
            f,
            r,
            u
          ), u && c === null && m & 4 && To(r), So(r, r.return);
          break;
        case 12:
          di(
            f,
            r,
            u
          );
          break;
        case 13:
          di(
            f,
            r,
            u
          ), u && m & 4 && rd(f, r);
          break;
        case 22:
          r.memoizedState === null && di(
            f,
            r,
            u
          ), So(r, r.return);
          break;
        case 30:
          break;
        default:
          di(
            f,
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
  function hd(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && En(l));
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
    var f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        vl(
          l,
          n,
          u,
          c
        ), f & 2048 && af(9, n);
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
        ), f & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && En(l)));
        break;
      case 12:
        if (f & 2048) {
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
            yt(n, n.return, S);
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
        ) : (r._visibility |= 2, xu(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0
        )), f & 2048 && _a(m, n);
        break;
      case 24:
        vl(
          l,
          n,
          u,
          c
        ), f & 2048 && hd(n.alternate, n);
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
  function xu(l, n, u, c, f) {
    for (f = f && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var r = l, m = n, p = u, S = c, C = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          xu(
            r,
            m,
            p,
            S,
            f
          ), af(8, m);
          break;
        case 23:
          break;
        case 22:
          var Q = m.stateNode;
          m.memoizedState !== null ? Q._visibility & 2 ? xu(
            r,
            m,
            p,
            S,
            f
          ) : ut(
            r,
            m
          ) : (Q._visibility |= 2, xu(
            r,
            m,
            p,
            S,
            f
          )), f && C & 2048 && _a(
            m.alternate,
            m
          );
          break;
        case 24:
          xu(
            r,
            m,
            p,
            S,
            f
          ), f && C & 2048 && hd(m.alternate, m);
          break;
        default:
          xu(
            r,
            m,
            p,
            S,
            f
          );
      }
      n = n.sibling;
    }
  }
  function ut(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, f = c.flags;
        switch (c.tag) {
          case 22:
            ut(u, c), f & 2048 && _a(
              c.alternate,
              c
            );
            break;
          case 24:
            ut(u, c), f & 2048 && hd(c.alternate, c);
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
        i0(l), l = l.sibling;
  }
  function i0(l) {
    switch (l.tag) {
      case 26:
        Xt(l), l.flags & yc && l.memoizedState !== null && z0(
          Vl,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Xt(l);
        break;
      case 3:
      case 4:
        var n = Vl;
        Vl = Dd(l.stateNode.containerInfo), Xt(l), Vl = n;
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
        pc(l), l.flags & 2048 && ri(9, l, l.return);
        break;
      case 3:
        pc(l);
        break;
      case 12:
        pc(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, Xl(l)) : pc(l);
        break;
      default:
        pc(l);
    }
  }
  function Xl(l) {
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
          ri(8, n, n.return), Xl(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, Xl(n));
          break;
        default:
          Xl(n);
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
          ri(8, u, n);
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
          var f = c.sibling, r = c.return;
          if (Vm(c), c === u) {
            tl = null;
            break e;
          }
          if (f !== null) {
            f.return = r, tl = f;
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
  }, c0 = typeof WeakMap == "function" ? WeakMap : Map, rt = 0, xt = null, Je = null, Ke = 0, ht = 0, la = null, qn = !1, xo = !1, $m = !1, Au = 0, Lt = 0, Eu = 0, gc = 0, Yn = 0, qa = 0, Ao = 0, Eo = null, aa = null, Wm = !1, Fm = 0, md = 1 / 0, zo = null, hi = null, bl = 0, Gn = null, Ro = null, Sl = 0, yd = 0, pd = null, Im = null, Oo = 0, Pm = null;
  function ga() {
    if ((rt & 2) !== 0 && Ke !== 0)
      return Ke & -Ke;
    if (E.T !== null) {
      var l = wa;
      return l !== 0 ? l : Tc();
    }
    return Tp();
  }
  function ey() {
    qa === 0 && (qa = (Ke & 536870912) === 0 || at ? Yu() : 536870912);
    var l = pa.current;
    return l !== null && (l.flags |= 32), qa;
  }
  function va(l, n, u) {
    (l === xt && (ht === 2 || ht === 9) || l.cancelPendingCommit !== null) && (Vn(l, 0), zu(
      l,
      Ke,
      qa,
      !1
    )), wi(l, u), ((rt & 2) === 0 || l !== xt) && (l === xt && ((rt & 2) === 0 && (gc |= u), Lt === 4 && zu(
      l,
      Ke,
      qa,
      !1
    )), na(l));
  }
  function Mo(l, n, u) {
    if ((rt & 6) !== 0) throw Error(v(327));
    var c = !u && (n & 124) === 0 && (n & l.expiredLanes) === 0 || hn(l, n), f = c ? ly(l, n) : gd(l, n, !0), r = c;
    do {
      if (f === 0) {
        xo && !c && zu(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !o0(u)) {
          f = gd(l, n, !1), r = !1;
          continue;
        }
        if (f === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var m = 0;
          else
            m = l.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            n = m;
            e: {
              var p = l;
              f = Eo;
              var S = p.current.memoizedState.isDehydrated;
              if (S && (Vn(p, m).flags |= 256), m = gd(
                p,
                m,
                !1
              ), m !== 2) {
                if ($m && !S) {
                  p.errorRecoveryDisabledLanes |= r, gc |= r, f = 4;
                  break e;
                }
                r = aa, aa = f, r !== null && (aa === null ? aa = r : aa.push.apply(
                  aa,
                  r
                ));
              }
              f = m;
            }
            if (r = !1, f !== 2) continue;
          }
        }
        if (f === 1) {
          Vn(l, 0), zu(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, r = f, r) {
            case 0:
            case 1:
              throw Error(v(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              zu(
                c,
                n,
                qa,
                !qn
              );
              break e;
            case 2:
              aa = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(v(329));
          }
          if ((n & 62914560) === n && (f = Fm + 300 - sa(), 10 < f)) {
            if (zu(
              c,
              n,
              qa,
              !qn
            ), qu(c, 0, !0) !== 0) break e;
            c.timeoutHandle = Od(
              uf.bind(
                null,
                c,
                u,
                aa,
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
              f
            );
            break e;
          }
          uf(
            c,
            u,
            aa,
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
    na(l);
  }
  function uf(l, n, u, c, f, r, m, p, S, C, Q, $, H, N) {
    if (l.timeoutHandle = -1, $ = n.subtreeFlags, ($ & 8192 || ($ & 16785408) === 16785408) && (Go = { stylesheets: null, count: 0, unsuspend: E0 }, i0(n), $ = vy(), $ !== null)) {
      l.cancelPendingCommit = $(
        r0.bind(
          null,
          l,
          n,
          r,
          u,
          c,
          f,
          m,
          p,
          S,
          Q,
          1,
          H,
          N
        )
      ), zu(l, r, m, !C);
      return;
    }
    r0(
      l,
      n,
      r,
      u,
      c,
      f,
      m,
      p,
      S
    );
  }
  function o0(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var f = u[c], r = f.getSnapshot;
          f = f.value;
          try {
            if (!pl(r(), f)) return !1;
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
  function zu(l, n, u, c) {
    n &= ~Yn, n &= ~gc, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var f = n; 0 < f; ) {
      var r = 31 - Jl(f), m = 1 << r;
      c[r] = -1, f &= ~m;
    }
    u !== 0 && cs(l, u, n);
  }
  function vc() {
    return (rt & 6) === 0 ? (ff(0), !1) : !0;
  }
  function mi() {
    if (Je !== null) {
      if (ht === 0)
        var l = Je.return;
      else
        l = Je, ln = yu = null, Hr(l), oc = null, yo = 0, l = Je;
      for (; l !== null; )
        Bm(l.alternate, l), l = l.return;
      Je = null;
    }
  }
  function Vn(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Yg(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), mi(), xt = l, Je = u = en(l.current, null), Ke = n, ht = 0, la = null, qn = !1, xo = hn(l, n), $m = !1, Ao = qa = Yn = gc = Eu = Lt = 0, aa = Eo = null, Wm = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var f = 31 - Jl(c), r = 1 << f;
        n |= l[f], c &= ~r;
      }
    return Au = n, Pa(), u;
  }
  function ty(l, n) {
    we = null, E.H = Jr, n === ni || n === js ? (n = um(), ht = 3) : n === Ar ? (n = um(), ht = 4) : ht = n === Gt ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, la = n, Je === null && (Lt = 1, Ps(
      l,
      ha(n, l.current)
    ));
  }
  function s0() {
    var l = E.H;
    return E.H = Jr, l === null ? Jr : l;
  }
  function bc() {
    var l = E.A;
    return E.A = Km, l;
  }
  function Sc() {
    Lt = 4, qn || (Ke & 4194048) !== Ke && pa.current !== null || (xo = !0), (Eu & 134217727) === 0 && (gc & 134217727) === 0 || xt === null || zu(
      xt,
      Ke,
      qa,
      !1
    );
  }
  function gd(l, n, u) {
    var c = rt;
    rt |= 2;
    var f = s0(), r = bc();
    (xt !== l || Ke !== n) && (zo = null, Vn(l, n)), n = !1;
    var m = Lt;
    e: do
      try {
        if (ht !== 0 && Je !== null) {
          var p = Je, S = la;
          switch (ht) {
            case 8:
              mi(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              pa.current === null && (n = !0);
              var C = ht;
              if (ht = 0, la = null, Do(l, p, S, C), u && xo) {
                m = 0;
                break e;
              }
              break;
            default:
              C = ht, ht = 0, la = null, Do(l, p, S, C);
          }
        }
        vd(), m = Lt;
        break;
      } catch (Q) {
        ty(l, Q);
      }
    while (!0);
    return n && l.shellSuspendCounter++, ln = yu = null, rt = c, E.H = f, E.A = r, Je === null && (xt = null, Ke = 0, Pa()), m;
  }
  function vd() {
    for (; Je !== null; ) ny(Je);
  }
  function ly(l, n) {
    var u = rt;
    rt |= 2;
    var c = s0(), f = bc();
    xt !== l || Ke !== n ? (zo = null, md = sa() + 500, Vn(l, n)) : xo = hn(
      l,
      n
    );
    e: do
      try {
        if (ht !== 0 && Je !== null) {
          n = Je;
          var r = la;
          t: switch (ht) {
            case 1:
              ht = 0, la = null, Do(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (zr(r)) {
                ht = 0, la = null, uy(n);
                break;
              }
              n = function() {
                ht !== 2 && ht !== 9 || xt !== l || (ht = 7), na(l);
              }, r.then(n, n);
              break e;
            case 3:
              ht = 7;
              break e;
            case 4:
              ht = 5;
              break e;
            case 7:
              zr(r) ? (ht = 0, la = null, uy(n)) : (ht = 0, la = null, Do(l, n, r, 7));
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
                    ht = 0, la = null;
                    var S = p.sibling;
                    if (S !== null) Je = S;
                    else {
                      var C = p.return;
                      C !== null ? (Je = C, cf(C)) : Je = null;
                    }
                    break t;
                  }
              }
              ht = 0, la = null, Do(l, n, r, 5);
              break;
            case 6:
              ht = 0, la = null, Do(l, n, r, 6);
              break;
            case 8:
              mi(), Lt = 6;
              break e;
            default:
              throw Error(v(462));
          }
        }
        ay();
        break;
      } catch (Q) {
        ty(l, Q);
      }
    while (!0);
    return ln = yu = null, E.H = c, E.A = f, rt = u, Je !== null ? 0 : (xt = null, Ke = 0, Pa(), Lt);
  }
  function ay() {
    for (; Je !== null && !Tg(); )
      ny(Je);
  }
  function ny(l) {
    var n = n0(l.alternate, l, Au);
    l.memoizedProps = l.pendingProps, n === null ? cf(l) : Je = n;
  }
  function uy(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Um(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Ke
        );
        break;
      case 11:
        n = Um(
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
        Bm(u, n), n = Je = Xe(n, Au), n = n0(u, n, Au);
    }
    l.memoizedProps = l.pendingProps, n === null ? cf(l) : Je = n;
  }
  function Do(l, n, u, c) {
    ln = yu = null, Hr(n), oc = null, yo = 0;
    var f = n.return;
    try {
      if (t0(
        l,
        f,
        n,
        u,
        Ke
      )) {
        Lt = 1, Ps(
          l,
          ha(u, l.current)
        ), Je = null;
        return;
      }
    } catch (r) {
      if (f !== null) throw Je = f, r;
      Lt = 1, Ps(
        l,
        ha(u, l.current)
      ), Je = null;
      return;
    }
    n.flags & 32768 ? (at || c === 1 ? l = !0 : xo || (Ke & 536870912) !== 0 ? l = !1 : (qn = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = pa.current, c !== null && c.tag === 13 && (c.flags |= 16384))), f0(n, l)) : cf(n);
  }
  function cf(l) {
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
      var u = jm(
        n.alternate,
        n,
        Au
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
      var u = wg(l.alternate, l);
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
  function r0(l, n, u, c, f, r, m, p, S) {
    l.cancelPendingCommit = null;
    do
      Sd();
    while (bl !== 0);
    if ((rt & 6) !== 0) throw Error(v(327));
    if (n !== null) {
      if (n === l.current) throw Error(v(177));
      if (r = n.lanes | n.childLanes, r |= Sn, Sp(
        l,
        u,
        r,
        m,
        p,
        S
      ), l === xt && (Je = xt = null, Ke = 0), Ro = n, Gn = l, Sl = u, yd = r, pd = f, Im = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Bg(is, function() {
        return iy(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = E.T, E.T = null, f = J.p, J.p = 2, m = rt, rt |= 4;
        try {
          Ym(l, n, u);
        } finally {
          rt = m, J.p = f, E.T = c;
        }
      }
      bl = 1, d0(), of(), bd();
    }
  }
  function d0() {
    if (bl === 1) {
      bl = 0;
      var l = Gn, n = Ro, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = E.T, E.T = null;
        var c = J.p;
        J.p = 2;
        var f = rt;
        rt |= 4;
        try {
          nf(n, l);
          var r = vf, m = Kh(l.containerInfo), p = r.focusedElem, S = r.selectionRange;
          if (m !== p && p && p.ownerDocument && Es(
            p.ownerDocument.documentElement,
            p
          )) {
            if (S !== null && zs(p)) {
              var C = S.start, Q = S.end;
              if (Q === void 0 && (Q = C), "selectionStart" in p)
                p.selectionStart = C, p.selectionEnd = Math.min(
                  Q,
                  p.value.length
                );
              else {
                var $ = p.ownerDocument || document, H = $ && $.defaultView || window;
                if (H.getSelection) {
                  var N = H.getSelection(), ge = p.textContent.length, ve = Math.min(S.start, ge), it = S.end === void 0 ? ve : Math.min(S.end, ge);
                  !N.extend && ve > it && (m = it, it = ve, ve = m);
                  var M = Rt(
                    p,
                    ve
                  ), R = Rt(
                    p,
                    it
                  );
                  if (M && R && (N.rangeCount !== 1 || N.anchorNode !== M.node || N.anchorOffset !== M.offset || N.focusNode !== R.node || N.focusOffset !== R.offset)) {
                    var D = $.createRange();
                    D.setStart(M.node, M.offset), N.removeAllRanges(), ve > it ? (N.addRange(D), N.extend(R.node, R.offset)) : (D.setEnd(R.node, R.offset), N.addRange(D));
                  }
                }
              }
            }
            for ($ = [], N = p; N = N.parentNode; )
              N.nodeType === 1 && $.push({
                element: N,
                left: N.scrollLeft,
                top: N.scrollTop
              });
            for (typeof p.focus == "function" && p.focus(), p = 0; p < $.length; p++) {
              var K = $[p];
              K.element.scrollLeft = K.left, K.element.scrollTop = K.top;
            }
          }
          Af = !!gf, vf = gf = null;
        } finally {
          rt = f, J.p = c, E.T = u;
        }
      }
      l.current = n, bl = 2;
    }
  }
  function of() {
    if (bl === 2) {
      bl = 0;
      var l = Gn, n = Ro, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = E.T, E.T = null;
        var c = J.p;
        J.p = 2;
        var f = rt;
        rt |= 4;
        try {
          Gm(l, n.alternate, n);
        } finally {
          rt = f, J.p = c, E.T = u;
        }
      }
      bl = 3;
    }
  }
  function bd() {
    if (bl === 4 || bl === 3) {
      bl = 0, Ui();
      var l = Gn, n = Ro, u = Sl, c = Im;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? bl = 5 : (bl = 0, Ro = Gn = null, h0(l, l.pendingLanes));
      var f = l.pendingLanes;
      if (f === 0 && (hi = null), Kf(u), n = n.stateNode, Bl && typeof Bl.onCommitFiberRoot == "function")
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
        n = E.T, f = J.p, J.p = 2, E.T = null;
        try {
          for (var r = l.onRecoverableError, m = 0; m < c.length; m++) {
            var p = c[m];
            r(p.value, {
              componentStack: p.stack
            });
          }
        } finally {
          E.T = n, J.p = f;
        }
      }
      (Sl & 3) !== 0 && Sd(), na(l), f = l.pendingLanes, (u & 4194090) !== 0 && (f & 42) !== 0 ? l === Pm ? Oo++ : (Oo = 0, Pm = l) : Oo = 0, ff(0);
    }
  }
  function h0(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, En(n)));
  }
  function Sd(l) {
    return d0(), of(), bd(), iy();
  }
  function iy() {
    if (bl !== 5) return !1;
    var l = Gn, n = yd;
    yd = 0;
    var u = Kf(Sl), c = E.T, f = J.p;
    try {
      J.p = 32 > u ? 32 : u, E.T = null, u = pd, pd = null;
      var r = Gn, m = Sl;
      if (bl = 0, Ro = Gn = null, Sl = 0, (rt & 6) !== 0) throw Error(v(331));
      var p = rt;
      if (rt |= 4, km(r.current), Qm(
        r,
        r.current,
        m,
        u
      ), rt = p, ff(0, !1), Bl && typeof Bl.onPostCommitFiberRoot == "function")
        try {
          Bl.onPostCommitFiberRoot(Vc, r);
        } catch {
        }
      return !0;
    } finally {
      J.p = f, E.T = c, h0(l, n);
    }
  }
  function cy(l, n, u) {
    n = ha(u, n), n = Dm(l.stateNode, n, 2), l = On(l, n, 2), l !== null && (wi(l, 2), na(l));
  }
  function yt(l, n, u) {
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
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (hi === null || !hi.has(c))) {
            l = ha(u, l), u = Cm(2), c = On(n, u, 2), c !== null && (ta(
              u,
              c,
              n,
              l
            ), wi(c, 2), na(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function Td(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new c0();
      var f = /* @__PURE__ */ new Set();
      c.set(n, f);
    } else
      f = c.get(n), f === void 0 && (f = /* @__PURE__ */ new Set(), c.set(n, f));
    f.has(u) || ($m = !0, f.add(u), l = oy.bind(null, l, n, u), n.then(l, l));
  }
  function oy(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, xt === l && (Ke & u) === u && (Lt === 4 || Lt === 3 && (Ke & 62914560) === Ke && 300 > sa() - Fm ? (rt & 2) === 0 && Vn(l, 0) : Yn |= u, Ao === Ke && (Ao = 0)), na(l);
  }
  function sy(l, n) {
    n === 0 && (n = Hi()), l = Tn(l, n), l !== null && (wi(l, n), na(l));
  }
  function Ng(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), sy(l, u);
  }
  function jg(l, n) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var c = l.stateNode, f = l.memoizedState;
        f !== null && (u = f.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(v(314));
    }
    c !== null && c.delete(n), sy(l, u);
  }
  function Bg(l, n) {
    return Ci(l, n);
  }
  var xd = null, yi = null, sf = !1, Co = !1, Ad = !1, pi = 0;
  function na(l) {
    l !== yi && l.next === null && (yi === null ? xd = yi = l : yi = yi.next = l), Co = !0, sf || (sf = !0, p0());
  }
  function ff(l, n) {
    if (!Ad && Co) {
      Ad = !0;
      do
        for (var u = !1, c = xd; c !== null; ) {
          if (l !== 0) {
            var f = c.pendingLanes;
            if (f === 0) var r = 0;
            else {
              var m = c.suspendedLanes, p = c.pingedLanes;
              r = (1 << 31 - Jl(42 | l) + 1) - 1, r &= f & ~(m & ~p), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, df(c, r));
          } else
            r = Ke, r = qu(
              c,
              c === xt ? r : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (r & 3) === 0 || hn(c, r) || (u = !0, df(c, r));
          c = c.next;
        }
      while (u);
      Ad = !1;
    }
  }
  function m0() {
    rf();
  }
  function rf() {
    Co = sf = !1;
    var l = 0;
    pi !== 0 && (Mu() && (l = pi), pi = 0);
    for (var n = sa(), u = null, c = xd; c !== null; ) {
      var f = c.next, r = fy(c, n);
      r === 0 ? (c.next = null, u === null ? xd = f : u.next = f, f === null && (yi = u)) : (u = c, (l !== 0 || (r & 3) !== 0) && (Co = !0)), c = f;
    }
    ff(l);
  }
  function fy(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, f = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var m = 31 - Jl(r), p = 1 << m, S = f[m];
      S === -1 ? ((p & u) === 0 || (p & c) !== 0) && (f[m] = nl(p, n)) : S <= n && (l.expiredLanes |= p), r &= ~p;
    }
    if (n = xt, u = Ke, u = qu(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (ht === 2 || ht === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && bh(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || hn(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && bh(c), Kf(u)) {
        case 2:
        case 8:
          u = Sh;
          break;
        case 32:
          u = is;
          break;
        case 268435456:
          u = Gc;
          break;
        default:
          u = is;
      }
      return c = y0.bind(null, l), u = Ci(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && bh(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function y0(l, n) {
    if (bl !== 0 && bl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Sd() && l.callbackNode !== u)
      return null;
    var c = Ke;
    return c = qu(
      l,
      l === xt ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (Mo(l, c, n), fy(l, sa()), l.callbackNode != null && l.callbackNode === u ? y0.bind(null, l) : null);
  }
  function df(l, n) {
    if (Sd()) return null;
    Mo(l, n, !0);
  }
  function p0() {
    Gg(function() {
      (rt & 6) !== 0 ? Ci(
        gp,
        m0
      ) : rf();
    });
  }
  function Tc() {
    return pi === 0 && (pi = Yu()), pi;
  }
  function Ed(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : ps("" + l);
  }
  function hf(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function g0(l, n, u, c, f) {
    if (n === "submit" && u && u.stateNode === f) {
      var r = Ed(
        (f[_l] || null).action
      ), m = c.submitter;
      m && (n = (n = m[_l] || null) ? Ed(n.formAction) : m.getAttribute("formAction"), n !== null && (r = n, m = null));
      var p = new ir(
        "action",
        "action",
        null,
        c,
        f
      );
      l.push({
        event: p,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (pi !== 0) {
                  var S = m ? hf(f, m) : new FormData(f);
                  kr(
                    u,
                    {
                      pending: !0,
                      data: S,
                      method: f.method,
                      action: r
                    },
                    null,
                    S
                  );
                }
              } else
                typeof r == "function" && (p.preventDefault(), S = m ? hf(f, m) : new FormData(f), kr(
                  u,
                  {
                    pending: !0,
                    data: S,
                    method: f.method,
                    action: r
                  },
                  r,
                  S
                ));
            },
            currentTarget: f
          }
        ]
      });
    }
  }
  for (var Qt = 0; Qt < Fc.length; Qt++) {
    var mf = Fc[Qt], _g = mf.toLowerCase(), Ge = mf[0].toUpperCase() + mf.slice(1);
    Ma(
      _g,
      "on" + Ge
    );
  }
  Ma(Gp, "onAnimationEnd"), Ma($h, "onAnimationIteration"), Ma(Vp, "onAnimationStart"), Ma("dblclick", "onDoubleClick"), Ma("focusin", "onFocus"), Ma("focusout", "onBlur"), Ma(Wh, "onTransitionRun"), Ma(yr, "onTransitionStart"), Ma(Xp, "onTransitionCancel"), Ma(Fh, "onTransitionEnd"), Xu("onMouseEnter", ["mouseout", "mouseover"]), Xu("onMouseLeave", ["mouseout", "mouseover"]), Xu("onPointerEnter", ["pointerout", "pointerover"]), Xu("onPointerLeave", ["pointerout", "pointerover"]), Vu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Vu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Vu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Vu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Vu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Vu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var yf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), gi = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yf)
  );
  function xc(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], f = c.event;
      c = c.listeners;
      e: {
        var r = void 0;
        if (n)
          for (var m = c.length - 1; 0 <= m; m--) {
            var p = c[m], S = p.instance, C = p.currentTarget;
            if (p = p.listener, S !== r && f.isPropagationStopped())
              break e;
            r = p, f.currentTarget = C;
            try {
              r(f);
            } catch (Q) {
              Fs(Q);
            }
            f.currentTarget = null, r = S;
          }
        else
          for (m = 0; m < c.length; m++) {
            if (p = c[m], S = p.instance, C = p.currentTarget, p = p.listener, S !== r && f.isPropagationStopped())
              break e;
            r = p, f.currentTarget = C;
            try {
              r(f);
            } catch (Q) {
              Fs(Q);
            }
            f.currentTarget = null, r = S;
          }
      }
    }
  }
  function Ne(l, n) {
    var u = n[$f];
    u === void 0 && (u = n[$f] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (zd(n, l, 2, !1), u.add(c));
  }
  function Uo(l, n, u) {
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
      l[Ho] = !0, rs.forEach(function(u) {
        u !== "selectionchange" && (gi.has(u) || Uo(u, !1, l), Uo(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Ho] || (n[Ho] = !0, Uo("selectionchange", !1, n));
    }
  }
  function zd(l, n, u, c) {
    switch (Ry(n)) {
      case 2:
        var f = R0;
        break;
      case 8:
        f = O0;
        break;
      default:
        f = Ey;
    }
    u = f.bind(
      null,
      n,
      u,
      l
    ), f = void 0, !ar || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (f = !0), c ? f !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: f
    }) : l.addEventListener(n, u, !0) : f !== void 0 ? l.addEventListener(n, u, {
      passive: f
    }) : l.addEventListener(n, u, !1);
  }
  function Ya(l, n, u, c, f) {
    var r = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var m = c.tag;
        if (m === 3 || m === 4) {
          var p = c.stateNode.containerInfo;
          if (p === f) break;
          if (m === 4)
            for (m = c.return; m !== null; ) {
              var S = m.tag;
              if ((S === 3 || S === 4) && m.stateNode.containerInfo === f)
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
      var C = r, Q = lr(u), $ = [];
      e: {
        var H = Ih.get(l);
        if (H !== void 0) {
          var N = ir, ge = l;
          switch (l) {
            case "keypress":
              if (yl(u) === 0) break e;
            case "keydown":
            case "keyup":
              N = Ka;
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
              N = Bh;
              break;
            case Gp:
            case $h:
            case Vp:
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
              N = bs;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = Ss;
              break;
            case "toggle":
            case "beforetoggle":
              N = _p;
          }
          var ve = (n & 4) !== 0, it = !ve && (l === "scroll" || l === "scrollend"), M = ve ? H !== null ? H + "Capture" : null : H;
          ve = [];
          for (var R = C, D; R !== null; ) {
            var K = R;
            if (D = K.stateNode, K = K.tag, K !== 5 && K !== 26 && K !== 27 || D === null || M === null || (K = Vi(R, M), K != null && ve.push(
              Ru(R, K, D)
            )), it) break;
            R = R.return;
          }
          0 < ve.length && (H = new N(
            H,
            ge,
            null,
            u,
            Q
          ), $.push({ event: H, listeners: ve }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (H = l === "mouseover" || l === "pointerover", N = l === "mouseout" || l === "pointerout", H && u !== Gi && (ge = u.relatedTarget || u.fromElement) && (ml(ge) || ge[Lc]))
            break e;
          if ((N || H) && (H = Q.window === Q ? Q : (H = Q.ownerDocument) ? H.defaultView || H.parentWindow : window, N ? (ge = u.relatedTarget || u.toElement, N = C, ge = ge ? ml(ge) : null, ge !== null && (it = Z(ge), ve = ge.tag, ge !== it || ve !== 5 && ve !== 27 && ve !== 6) && (ge = null)) : (N = null, ge = C), N !== ge)) {
            if (ve = Hh, K = "onMouseLeave", M = "onMouseEnter", R = "mouse", (l === "pointerout" || l === "pointerover") && (ve = Ss, K = "onPointerLeave", M = "onPointerEnter", R = "pointer"), it = N == null ? H : fs(N), D = ge == null ? H : fs(ge), H = new ve(
              K,
              R + "leave",
              N,
              u,
              Q
            ), H.target = it, H.relatedTarget = D, K = null, ml(Q) === C && (ve = new ve(
              M,
              R + "enter",
              ge,
              u,
              Q
            ), ve.target = D, ve.relatedTarget = it, K = ve), it = K, N && ge)
              t: {
                for (ve = N, M = ge, R = 0, D = ve; D; D = vi(D))
                  R++;
                for (D = 0, K = M; K; K = vi(K))
                  D++;
                for (; 0 < R - D; )
                  ve = vi(ve), R--;
                for (; 0 < D - R; )
                  M = vi(M), D--;
                for (; R--; ) {
                  if (ve === M || M !== null && ve === M.alternate)
                    break t;
                  ve = vi(ve), M = vi(M);
                }
                ve = null;
              }
            else ve = null;
            N !== null && pf(
              $,
              H,
              N,
              ve,
              !1
            ), ge !== null && it !== null && pf(
              $,
              it,
              ge,
              ve,
              !0
            );
          }
        }
        e: {
          if (H = C ? fs(C) : window, N = H.nodeName && H.nodeName.toLowerCase(), N === "select" || N === "input" && H.type === "file")
            var ie = Xh;
          else if (rr(H))
            if (Lh)
              ie = kh;
            else {
              ie = Ku;
              var Le = hr;
            }
          else
            N = H.nodeName, !N || N.toLowerCase() !== "input" || H.type !== "checkbox" && H.type !== "radio" ? C && Yi(C.elementType) && (ie = Xh) : ie = ru;
          if (ie && (ie = ie(l, C))) {
            dr(
              $,
              ie,
              u,
              Q
            );
            break e;
          }
          Le && Le(l, H, C), l === "focusout" && C && H.type === "number" && C.memoizedProps.value != null && ms(H, "number", H.value);
        }
        switch (Le = C ? fs(C) : window, l) {
          case "focusin":
            (rr(Le) || Le.contentEditable === "true") && (vn = Le, Fa = C, Fu = null);
            break;
          case "focusout":
            Fu = Fa = vn = null;
            break;
          case "mousedown":
            Wi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Wi = !1, mr($, u, Q);
            break;
          case "selectionchange":
            if ($i) break;
          case "keydown":
          case "keyup":
            mr($, u, Q);
        }
        var ye;
        if (Ts)
          e: {
            switch (l) {
              case "compositionstart":
                var xe = "onCompositionStart";
                break e;
              case "compositionend":
                xe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                xe = "onCompositionUpdate";
                break e;
            }
            xe = void 0;
          }
        else
          Ju ? As(l, u) && (xe = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (xe = "onCompositionStart");
        xe && (pn && u.locale !== "ko" && (Ju || xe !== "onCompositionStart" ? xe === "onCompositionEnd" && Ju && (ye = Ch()) : (su = Q, $c = "value" in su ? su.value : su.textContent, Ju = !0)), Le = wo(C, xe), 0 < Le.length && (xe = new Nh(
          xe,
          l,
          null,
          u,
          Q
        ), $.push({ event: xe, listeners: Le }), ye ? xe.data = ye : (ye = ku(u), ye !== null && (xe.data = ye)))), (ye = qh ? Gh(l, u) : ki(l, u)) && (xe = wo(C, "onBeforeInput"), 0 < xe.length && (Le = new Nh(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          Q
        ), $.push({
          event: Le,
          listeners: xe
        }), Le.data = ye)), g0(
          $,
          l,
          C,
          u,
          Q
        );
      }
      xc($, n);
    });
  }
  function Ru(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function wo(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var f = l, r = f.stateNode;
      if (f = f.tag, f !== 5 && f !== 26 && f !== 27 || r === null || (f = Vi(l, u), f != null && c.unshift(
        Ru(l, f, r)
      ), f = Vi(l, n), f != null && c.push(
        Ru(l, f, r)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function vi(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function pf(l, n, u, c, f) {
    for (var r = n._reactName, m = []; u !== null && u !== c; ) {
      var p = u, S = p.alternate, C = p.stateNode;
      if (p = p.tag, S !== null && S === c) break;
      p !== 5 && p !== 26 && p !== 27 || C === null || (S = C, f ? (C = Vi(u, r), C != null && m.unshift(
        Ru(u, C, S)
      )) : f || (C = Vi(u, r), C != null && m.push(
        Ru(u, C, S)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var ba = /\r\n?/g, dy = /\u0000|\uFFFD/g;
  function v0(l) {
    return (typeof l == "string" ? l : "" + l).replace(ba, `
`).replace(dy, "");
  }
  function hy(l, n) {
    return n = v0(n), v0(l) === n;
  }
  function Rd() {
  }
  function Me(l, n, u, c, f, r) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || Zc(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && Zc(l, "" + c);
        break;
      case "className":
        ds(l, "class", c);
        break;
      case "tabIndex":
        ds(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ds(l, u, c);
        break;
      case "style":
        ys(l, c, r);
        break;
      case "data":
        if (n !== "object") {
          ds(l, "data", c);
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
        c = ps("" + c), l.setAttribute(u, c);
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
          typeof r == "function" && (u === "formAction" ? (n !== "input" && Me(l, n, "name", f.name, f, null), Me(
            l,
            n,
            "formEncType",
            f.formEncType,
            f,
            null
          ), Me(
            l,
            n,
            "formMethod",
            f.formMethod,
            f,
            null
          ), Me(
            l,
            n,
            "formTarget",
            f.formTarget,
            f,
            null
          )) : (Me(l, n, "encType", f.encType, f, null), Me(l, n, "method", f.method, f, null), Me(l, n, "target", f.target, f, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = ps("" + c), l.setAttribute(u, c);
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
            throw Error(v(61));
          if (u = c.__html, u != null) {
            if (f.children != null) throw Error(v(60));
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
        u = ps("" + c), l.setAttributeNS(
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
        Ne("beforetoggle", l), Ne("toggle", l), cu(l, "popover", c);
        break;
      case "xlinkActuate":
        mn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        mn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        mn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        mn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        mn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        mn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        mn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        mn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        mn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        cu(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Rg.get(u) || u, cu(l, u, c));
    }
  }
  function q(l, n, u, c, f, r) {
    switch (u) {
      case "style":
        ys(l, c, r);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(v(61));
          if (u = c.__html, u != null) {
            if (f.children != null) throw Error(v(60));
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
        if (!ra.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (f = u.endsWith("Capture"), n = u.slice(2, f ? u.length - 7 : void 0), r = l[_l] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, f), typeof c == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, f);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : cu(l, u, c);
          }
    }
  }
  function Ee(l, n, u) {
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
        var c = !1, f = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var m = u[r];
            if (m != null)
              switch (r) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  f = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(v(137, n));
                default:
                  Me(l, n, r, m, u, null);
              }
          }
        f && Me(l, n, "srcSet", u.srcSet, u, null), c && Me(l, n, "src", u.src, u, null);
        return;
      case "input":
        Ne("invalid", l);
        var p = r = m = f = null, S = null, C = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var Q = u[c];
            if (Q != null)
              switch (c) {
                case "name":
                  f = Q;
                  break;
                case "type":
                  m = Q;
                  break;
                case "checked":
                  S = Q;
                  break;
                case "defaultChecked":
                  C = Q;
                  break;
                case "value":
                  r = Q;
                  break;
                case "defaultValue":
                  p = Q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Q != null)
                    throw Error(v(137, n));
                  break;
                default:
                  Me(l, n, c, Q, u, null);
              }
          }
        er(
          l,
          r,
          p,
          S,
          C,
          m,
          f,
          !1
        ), Qu(l);
        return;
      case "select":
        Ne("invalid", l), c = m = r = null;
        for (f in u)
          if (u.hasOwnProperty(f) && (p = u[f], p != null))
            switch (f) {
              case "value":
                r = p;
                break;
              case "defaultValue":
                m = p;
                break;
              case "multiple":
                c = p;
              default:
                Me(l, n, f, p, u, null);
            }
        n = r, u = m, l.multiple = !!c, n != null ? qi(l, !!c, n, !1) : u != null && qi(l, !!c, u, !0);
        return;
      case "textarea":
        Ne("invalid", l), r = f = c = null;
        for (m in u)
          if (u.hasOwnProperty(m) && (p = u[m], p != null))
            switch (m) {
              case "value":
                c = p;
                break;
              case "defaultValue":
                f = p;
                break;
              case "children":
                r = p;
                break;
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(v(91));
                break;
              default:
                Me(l, n, m, p, u, null);
            }
        Mh(l, c, f, r), Qu(l);
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
        Ne("beforetoggle", l), Ne("toggle", l), Ne("cancel", l), Ne("close", l);
        break;
      case "iframe":
      case "object":
        Ne("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < yf.length; c++)
          Ne(yf[c], l);
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
        for (C in u)
          if (u.hasOwnProperty(C) && (c = u[C], c != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(v(137, n));
              default:
                Me(l, n, C, c, u, null);
            }
        return;
      default:
        if (Yi(n)) {
          for (Q in u)
            u.hasOwnProperty(Q) && (c = u[Q], c !== void 0 && q(
              l,
              n,
              Q,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (p in u)
      u.hasOwnProperty(p) && (c = u[p], c != null && Me(l, n, p, c, u, null));
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
        var f = null, r = null, m = null, p = null, S = null, C = null, Q = null;
        for (N in u) {
          var $ = u[N];
          if (u.hasOwnProperty(N) && $ != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = $;
              default:
                c.hasOwnProperty(N) || Me(l, n, N, null, c, $);
            }
        }
        for (var H in c) {
          var N = c[H];
          if ($ = u[H], c.hasOwnProperty(H) && (N != null || $ != null))
            switch (H) {
              case "type":
                r = N;
                break;
              case "name":
                f = N;
                break;
              case "checked":
                C = N;
                break;
              case "defaultChecked":
                Q = N;
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
                  throw Error(v(137, n));
                break;
              default:
                N !== $ && Me(
                  l,
                  n,
                  H,
                  N,
                  c,
                  $
                );
            }
        }
        Pf(
          l,
          m,
          p,
          S,
          C,
          Q,
          r,
          f
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
                c.hasOwnProperty(r) || Me(
                  l,
                  n,
                  r,
                  null,
                  c,
                  S
                );
            }
        for (f in c)
          if (r = c[f], S = u[f], c.hasOwnProperty(f) && (r != null || S != null))
            switch (f) {
              case "value":
                H = r;
                break;
              case "defaultValue":
                p = r;
                break;
              case "multiple":
                m = r;
              default:
                r !== S && Me(
                  l,
                  n,
                  f,
                  r,
                  c,
                  S
                );
            }
        n = p, u = m, c = N, H != null ? qi(l, !!u, H, !1) : !!c != !!u && (n != null ? qi(l, !!u, n, !0) : qi(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        N = H = null;
        for (p in u)
          if (f = u[p], u.hasOwnProperty(p) && f != null && !c.hasOwnProperty(p))
            switch (p) {
              case "value":
                break;
              case "children":
                break;
              default:
                Me(l, n, p, null, c, f);
            }
        for (m in c)
          if (f = c[m], r = u[m], c.hasOwnProperty(m) && (f != null || r != null))
            switch (m) {
              case "value":
                H = f;
                break;
              case "defaultValue":
                N = f;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(v(91));
                break;
              default:
                f !== r && Me(l, n, m, f, c, r);
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
                Me(
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
                Me(
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
          H = u[ve], u.hasOwnProperty(ve) && H != null && !c.hasOwnProperty(ve) && Me(l, n, ve, null, c, H);
        for (C in c)
          if (H = c[C], N = u[C], c.hasOwnProperty(C) && H !== N && (H != null || N != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null)
                  throw Error(v(137, n));
                break;
              default:
                Me(
                  l,
                  n,
                  C,
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
          for (Q in c)
            H = c[Q], N = u[Q], !c.hasOwnProperty(Q) || H === N || H === void 0 && N === void 0 || q(
              l,
              n,
              Q,
              H,
              c,
              N
            );
          return;
        }
    }
    for (var M in u)
      H = u[M], u.hasOwnProperty(M) && H != null && !c.hasOwnProperty(M) && Me(l, n, M, null, c, H);
    for ($ in c)
      H = c[$], N = u[$], !c.hasOwnProperty($) || H === N || H == null && N == null || Me(l, n, $, H, c, N);
  }
  var gf = null, vf = null;
  function Ga(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Ou(l) {
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
  function Xn(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var jo = null;
  function Mu() {
    var l = window.event;
    return l && l.type === "popstate" ? l === jo ? !1 : (jo = l, !0) : (jo = null, !1);
  }
  var Od = typeof setTimeout == "function" ? setTimeout : void 0, Yg = typeof clearTimeout == "function" ? clearTimeout : void 0, b0 = typeof Promise == "function" ? Promise : void 0, Gg = typeof queueMicrotask == "function" ? queueMicrotask : typeof b0 < "u" ? function(l) {
    return b0.resolve(null).then(l).catch(Ln);
  } : Od;
  function Ln(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function bi(l) {
    return l === "head";
  }
  function Md(l, n) {
    var u = n, c = 0, f = 0;
    do {
      var r = u.nextSibling;
      if (l.removeChild(u), r && r.nodeType === 8)
        if (u = r.data, u === "/$") {
          if (0 < c && 8 > c) {
            u = c;
            var m = l.ownerDocument;
            if (u & 1 && ua(m.documentElement), u & 2 && ua(m.body), u & 4)
              for (u = m.head, ua(u), m = u.firstChild; m; ) {
                var p = m.nextSibling, S = m.nodeName;
                m[ce] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && m.rel.toLowerCase() === "stylesheet" || u.removeChild(m), m = p;
              }
          }
          if (f === 0) {
            l.removeChild(r), Zn(n);
            return;
          }
          f--;
        } else
          u === "$" || u === "$?" || u === "$!" ? f++ : c = u.charCodeAt(0) - 48;
      else c = 0;
      u = r;
    } while (u);
    Zn(n);
  }
  function bf(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          bf(u), ss(u);
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
      var f = u;
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
              if (r !== f.rel || l.getAttribute("href") !== (f.href == null || f.href === "" ? null : f.href) || l.getAttribute("crossorigin") !== (f.crossOrigin == null ? null : f.crossOrigin) || l.getAttribute("title") !== (f.title == null ? null : f.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (f.src == null ? null : f.src) || l.getAttribute("type") !== (f.type == null ? null : f.type) || l.getAttribute("crossorigin") !== (f.crossOrigin == null ? null : f.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = f.name == null ? null : "" + f.name;
        if (f.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = on(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Vg(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = on(l.nextSibling), l === null)) return null;
    return l;
  }
  function Sf(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function Xg(l, n) {
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
  function on(l) {
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
  var Si = null;
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
  function te(l, n, u) {
    switch (n = Ga(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(v(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(v(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(v(454));
        return l;
      default:
        throw Error(v(451));
    }
  }
  function ua(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    ss(l);
  }
  var Zt = /* @__PURE__ */ new Map(), Hl = /* @__PURE__ */ new Set();
  function Dd(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Du = J.d;
  J.d = {
    f: Cd,
    r: Ud,
    D: Cu,
    C: Hd,
    L: Ti,
    m: wl,
    X: xi,
    S: ia,
    M: my
  };
  function Cd() {
    var l = Du.f(), n = vc();
    return l || n;
  }
  function Ud(l) {
    var n = Ni(l);
    n !== null && n.tag === 5 && n.type === "form" ? mo(n) : Du.r(l);
  }
  var xl = typeof document > "u" ? null : document;
  function sn(l, n, u) {
    var c = xl;
    if (c && typeof n == "string" && n) {
      var f = Ra(n);
      f = 'link[rel="' + l + '"][href="' + f + '"]', typeof u == "string" && (f += '[crossorigin="' + u + '"]'), Hl.has(f) || (Hl.add(f), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(f) === null && (n = c.createElement("link"), Ee(n, "link", l), Ft(n), c.head.appendChild(n)));
    }
  }
  function Cu(l) {
    Du.D(l), sn("dns-prefetch", l, null);
  }
  function Hd(l, n) {
    Du.C(l, n), sn("preconnect", l, n);
  }
  function Ti(l, n, u) {
    Du.L(l, n, u);
    var c = xl;
    if (c && l && n) {
      var f = 'link[rel="preload"][as="' + Ra(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (f += '[imagesrcset="' + Ra(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (f += '[imagesizes="' + Ra(
        u.imageSizes
      ) + '"]')) : f += '[href="' + Ra(l) + '"]';
      var r = f;
      switch (n) {
        case "style":
          r = _o(l);
          break;
        case "script":
          r = Va(l);
      }
      Zt.has(r) || (l = ae(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Zt.set(r, l), c.querySelector(f) !== null || n === "style" && c.querySelector(qo(r)) || n === "script" && c.querySelector(Ac(r)) || (n = c.createElement("link"), Ee(n, "link", l), Ft(n), c.head.appendChild(n)));
    }
  }
  function wl(l, n) {
    Du.m(l, n);
    var u = xl;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", f = 'link[rel="modulepreload"][as="' + Ra(c) + '"][href="' + Ra(l) + '"]', r = f;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = Va(l);
      }
      if (!Zt.has(r) && (l = ae({ rel: "modulepreload", href: l }, n), Zt.set(r, l), u.querySelector(f) === null)) {
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
        c = u.createElement("link"), Ee(c, "link", l), Ft(c), u.head.appendChild(c);
      }
    }
  }
  function ia(l, n, u) {
    Du.S(l, n, u);
    var c = xl;
    if (c && l) {
      var f = iu(c).hoistableStyles, r = _o(l);
      n = n || "default";
      var m = f.get(r);
      if (!m) {
        var p = { loading: 0, preload: null };
        if (m = c.querySelector(
          qo(r)
        ))
          p.loading = 5;
        else {
          l = ae(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Zt.get(r)) && Nd(l, u);
          var S = m = c.createElement("link");
          Ft(S), Ee(S, "link", l), S._p = new Promise(function(C, Q) {
            S.onload = C, S.onerror = Q;
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
        }, f.set(r, m);
      }
    }
  }
  function xi(l, n) {
    Du.X(l, n);
    var u = xl;
    if (u && l) {
      var c = iu(u).hoistableScripts, f = Va(l), r = c.get(f);
      r || (r = u.querySelector(Ac(f)), r || (l = ae({ src: l, async: !0 }, n), (n = Zt.get(f)) && jd(l, n), r = u.createElement("script"), Ft(r), Ee(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(f, r));
    }
  }
  function my(l, n) {
    Du.M(l, n);
    var u = xl;
    if (u && l) {
      var c = iu(u).hoistableScripts, f = Va(l), r = c.get(f);
      r || (r = u.querySelector(Ac(f)), r || (l = ae({ src: l, async: !0, type: "module" }, n), (n = Zt.get(f)) && jd(l, n), r = u.createElement("script"), Ft(r), Ee(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(f, r));
    }
  }
  function S0(l, n, u, c) {
    var f = (f = He.current) ? Dd(f) : null;
    if (!f) throw Error(v(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = _o(u.href), u = iu(
          f
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = _o(u.href);
          var r = iu(
            f
          ).hoistableStyles, m = r.get(l);
          if (m || (f = f.ownerDocument || f, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, m), (r = f.querySelector(
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
          }, Zt.set(l, u), r || T0(
            f,
            l,
            u,
            m.state
          ))), n && c === null)
            throw Error(v(528, ""));
          return m;
        }
        if (n && c !== null)
          throw Error(v(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Va(u), u = iu(
          f
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(v(444, l));
    }
  }
  function _o(l) {
    return 'href="' + Ra(l) + '"';
  }
  function qo(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Yo(l) {
    return ae({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function T0(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), Ee(n, "link", u), Ft(n), l.head.appendChild(n));
  }
  function Va(l) {
    return '[src="' + Ra(l) + '"]';
  }
  function Ac(l) {
    return "script[async]" + l;
  }
  function x0(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + Ra(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Ft(c), c;
          var f = ae({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Ft(c), Ee(c, "style", f), wd(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          f = _o(u.href);
          var r = l.querySelector(
            qo(f)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Ft(r), r;
          c = Yo(u), (f = Zt.get(f)) && Nd(c, f), r = (l.ownerDocument || l).createElement("link"), Ft(r);
          var m = r;
          return m._p = new Promise(function(p, S) {
            m.onload = p, m.onerror = S;
          }), Ee(r, "link", c), n.state.loading |= 4, wd(r, u.precedence, l), n.instance = r;
        case "script":
          return r = Va(u.src), (f = l.querySelector(
            Ac(r)
          )) ? (n.instance = f, Ft(f), f) : (c = u, (f = Zt.get(r)) && (c = ae({}, u), jd(c, f)), l = l.ownerDocument || l, f = l.createElement("script"), Ft(f), Ee(f, "link", c), l.head.appendChild(f), n.instance = f);
        case "void":
          return null;
        default:
          throw Error(v(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, wd(c, u.precedence, l));
    return n.instance;
  }
  function wd(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), f = c.length ? c[c.length - 1] : null, r = f, m = 0; m < c.length; m++) {
      var p = c[m];
      if (p.dataset.precedence === n) r = p;
      else if (r !== f) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function Nd(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function jd(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var Ai = null;
  function yy(l, n, u) {
    if (Ai === null) {
      var c = /* @__PURE__ */ new Map(), f = Ai = /* @__PURE__ */ new Map();
      f.set(u, c);
    } else
      f = Ai, c = f.get(u), c || (c = /* @__PURE__ */ new Map(), f.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), f = 0; f < u.length; f++) {
      var r = u[f];
      if (!(r[ce] || r[ul] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
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
  function A0(l, n, u) {
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
  function E0() {
  }
  function z0(l, n, u) {
    if (Go === null) throw Error(v(475));
    var c = Go;
    if (n.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var f = _o(u.href), r = l.querySelector(
          qo(f)
        );
        if (r) {
          l = r._p, l !== null && typeof l == "object" && typeof l.then == "function" && (c.count++, c = Tf.bind(c), l.then(c, c)), n.state.loading |= 4, n.instance = r, Ft(r);
          return;
        }
        r = l.ownerDocument || l, u = Yo(u), (f = Zt.get(f)) && Nd(u, f), r = r.createElement("link"), Ft(r);
        var m = r;
        m._p = new Promise(function(p, S) {
          m.onload = p, m.onerror = S;
        }), Ee(r, "link", u), n.instance = r;
      }
      c.stylesheets === null && (c.stylesheets = /* @__PURE__ */ new Map()), c.stylesheets.set(n, l), (l = n.state.preload) && (n.state.loading & 3) === 0 && (c.count++, n = Tf.bind(c), l.addEventListener("load", n), l.addEventListener("error", n));
    }
  }
  function vy() {
    if (Go === null) throw Error(v(475));
    var l = Go;
    return l.stylesheets && l.count === 0 && xf(l, l.stylesheets), 0 < l.count ? function(n) {
      var u = setTimeout(function() {
        if (l.stylesheets && xf(l, l.stylesheets), l.unsuspend) {
          var c = l.unsuspend;
          l.unsuspend = null, c();
        }
      }, 6e4);
      return l.unsuspend = n, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function Tf() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) xf(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Vo = null;
  function xf(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Vo = /* @__PURE__ */ new Map(), n.forEach(Sa, l), Vo = null, Tf.call(l));
  }
  function Sa(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Vo.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Vo.set(l, u);
        for (var f = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < f.length; r++) {
          var m = f[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), c = m);
        }
        c && u.set(null, c);
      }
      f = n.instance, m = f.getAttribute("data-precedence"), r = u.get(m) || c, r === c && u.set(null, f), u.set(m, f), this.count++, c = Tf.bind(this), f.addEventListener("load", c), f.addEventListener("error", c), r ? r.parentNode.insertBefore(f, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(f, l.firstChild)), n.state.loading |= 4;
    }
  }
  var ca = {
    $$typeof: Ze,
    Provider: null,
    Consumer: null,
    _currentValue: _,
    _currentValue2: _,
    _threadCount: 0
  };
  function Lg(l, n, u, c, f, r, m, p) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Gu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gu(0), this.hiddenUpdates = Gu(null), this.identifierPrefix = c, this.onUncaughtError = f, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = p, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function by(l, n, u, c, f, r, m, p, S, C, Q, $) {
    return l = new Lg(
      l,
      n,
      u,
      m,
      p,
      S,
      C,
      $
    ), n = 1, r === !0 && (n |= 24), r = Wl(3, null, null, n), l.current = r, r.stateNode = l, n = oo(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, Rr(r), l;
  }
  function Sy(l) {
    return l ? (l = eo, l) : eo;
  }
  function Ty(l, n, u, c, f, r) {
    f = Sy(f), c.context === null ? c.context = f : c.pendingContext = f, c = Il(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = On(l, c, n), u !== null && (va(u, l, n), lc(u, l, n));
  }
  function xy(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function Bd(l, n) {
    xy(l, n), (l = l.alternate) && xy(l, n);
  }
  function Ay(l) {
    if (l.tag === 13) {
      var n = Tn(l, 67108864);
      n !== null && va(n, l, 67108864), Bd(l, 67108864);
    }
  }
  var Af = !0;
  function R0(l, n, u, c) {
    var f = E.T;
    E.T = null;
    var r = J.p;
    try {
      J.p = 2, Ey(l, n, u, c);
    } finally {
      J.p = r, E.T = f;
    }
  }
  function O0(l, n, u, c) {
    var f = E.T;
    E.T = null;
    var r = J.p;
    try {
      J.p = 8, Ey(l, n, u, c);
    } finally {
      J.p = r, E.T = f;
    }
  }
  function Ey(l, n, u, c) {
    if (Af) {
      var f = _d(c);
      if (f === null)
        Ya(
          l,
          n,
          c,
          qd,
          u
        ), Ec(l, c);
      else if (D0(
        f,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (Ec(l, c), n & 4 && -1 < M0.indexOf(l)) {
        for (; f !== null; ) {
          var r = Ni(f);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var m = fa(r.pendingLanes);
                  if (m !== 0) {
                    var p = r;
                    for (p.pendingLanes |= 2, p.entangledLanes |= 2; m; ) {
                      var S = 1 << 31 - Jl(m);
                      p.entanglements[1] |= S, m &= ~S;
                    }
                    na(r), (rt & 6) === 0 && (md = sa() + 500, ff(0));
                  }
                }
                break;
              case 13:
                p = Tn(r, 2), p !== null && va(p, r, 2), vc(), Bd(r, 2);
            }
          if (r = _d(c), r === null && Ya(
            l,
            n,
            c,
            qd,
            u
          ), r === f) break;
          f = r;
        }
        f !== null && c.stopPropagation();
      } else
        Ya(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function _d(l) {
    return l = lr(l), zy(l);
  }
  var qd = null;
  function zy(l) {
    if (qd = null, l = ml(l), l !== null) {
      var n = Z(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = F(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return qd = l, null;
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
        switch (us()) {
          case gp:
            return 2;
          case Sh:
            return 8;
          case is:
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
  var Xo = !1, Qn = null, Uu = null, Hu = null, Ef = /* @__PURE__ */ new Map(), zf = /* @__PURE__ */ new Map(), Ei = [], M0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Ec(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        Qn = null;
        break;
      case "dragenter":
      case "dragleave":
        Uu = null;
        break;
      case "mouseover":
      case "mouseout":
        Hu = null;
        break;
      case "pointerover":
      case "pointerout":
        Ef.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        zf.delete(n.pointerId);
    }
  }
  function zc(l, n, u, c, f, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [f]
    }, n !== null && (n = Ni(n), n !== null && Ay(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, f !== null && n.indexOf(f) === -1 && n.push(f), l);
  }
  function D0(l, n, u, c, f) {
    switch (n) {
      case "focusin":
        return Qn = zc(
          Qn,
          l,
          n,
          u,
          c,
          f
        ), !0;
      case "dragenter":
        return Uu = zc(
          Uu,
          l,
          n,
          u,
          c,
          f
        ), !0;
      case "mouseover":
        return Hu = zc(
          Hu,
          l,
          n,
          u,
          c,
          f
        ), !0;
      case "pointerover":
        var r = f.pointerId;
        return Ef.set(
          r,
          zc(
            Ef.get(r) || null,
            l,
            n,
            u,
            c,
            f
          )
        ), !0;
      case "gotpointercapture":
        return r = f.pointerId, zf.set(
          r,
          zc(
            zf.get(r) || null,
            l,
            n,
            u,
            c,
            f
          )
        ), !0;
    }
    return !1;
  }
  function Oy(l) {
    var n = ml(l.target);
    if (n !== null) {
      var u = Z(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = F(u), n !== null) {
            l.blockedOn = n, Eg(l.priority, function() {
              if (u.tag === 13) {
                var c = ga();
                c = Ja(c);
                var f = Tn(u, c);
                f !== null && va(f, u, c), Bd(u, c);
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
  function Rf(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = _d(l.nativeEvent);
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
  function Of(l, n, u) {
    Rf(l) && u.delete(n);
  }
  function Lo() {
    Xo = !1, Qn !== null && Rf(Qn) && (Qn = null), Uu !== null && Rf(Uu) && (Uu = null), Hu !== null && Rf(Hu) && (Hu = null), Ef.forEach(Of), zf.forEach(Of);
  }
  function Yd(l, n) {
    l.blockedOn === n && (l.blockedOn = null, Xo || (Xo = !0, y.unstable_scheduleCallback(
      y.unstable_NormalPriority,
      Lo
    )));
  }
  var Rc = null;
  function My(l) {
    Rc !== l && (Rc = l, y.unstable_scheduleCallback(
      y.unstable_NormalPriority,
      function() {
        Rc === l && (Rc = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], f = l[n + 2];
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
              data: f,
              method: u.method,
              action: c
            },
            c,
            f
          ));
        }
      }
    ));
  }
  function Zn(l) {
    function n(S) {
      return Yd(S, l);
    }
    Qn !== null && Yd(Qn, l), Uu !== null && Yd(Uu, l), Hu !== null && Yd(Hu, l), Ef.forEach(n), zf.forEach(n);
    for (var u = 0; u < Ei.length; u++) {
      var c = Ei[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < Ei.length && (u = Ei[0], u.blockedOn === null); )
      Oy(u), u.blockedOn === null && Ei.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var f = u[c], r = u[c + 1], m = f[_l] || null;
        if (typeof r == "function")
          m || My(u);
        else if (m) {
          var p = null;
          if (r && r.hasAttribute("formAction")) {
            if (f = r, m = r[_l] || null)
              p = m.formAction;
            else if (zy(f) !== null) continue;
          } else p = m.action;
          typeof p == "function" ? u[c + 1] = p : (u.splice(c, 3), c -= 3), My(u);
        }
      }
  }
  function Dy(l) {
    this._internalRoot = l;
  }
  Gd.prototype.render = Dy.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(v(409));
    var u = n.current, c = ga();
    Ty(u, c, l, n, null, null);
  }, Gd.prototype.unmount = Dy.prototype.unmount = function() {
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
      var n = Tp();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < Ei.length && n !== 0 && n < Ei[u].priority; u++) ;
      Ei.splice(u, 0, l), u === 0 && Oy(l);
    }
  };
  var Cy = A.version;
  if (Cy !== "19.1.0")
    throw Error(
      v(
        527,
        Cy,
        "19.1.0"
      )
    );
  J.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(v(188)) : (l = Object.keys(l).join(","), Error(v(268, l)));
    return l = Y(n), l = l !== null ? re(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Ll = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: E,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Mf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Mf.isDisabled && Mf.supportsFiber)
      try {
        Vc = Mf.inject(
          Ll
        ), Bl = Mf;
      } catch {
      }
  }
  return hp.createRoot = function(l, n) {
    if (!k(l)) throw Error(v(299));
    var u = !1, c = "", f = go, r = Om, m = Is, p = null;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (f = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (p = n.unstable_transitionCallbacks)), n = by(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      f,
      r,
      m,
      p,
      null
    ), l[Lc] = n.current, ry(l), new Dy(n);
  }, hp.hydrateRoot = function(l, n, u) {
    if (!k(l)) throw Error(v(299));
    var c = !1, f = "", r = go, m = Om, p = Is, S = null, C = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (f = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (p = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (S = u.unstable_transitionCallbacks), u.formState !== void 0 && (C = u.formState)), n = by(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      f,
      r,
      m,
      p,
      S,
      C
    ), n.context = Sy(null), u = n.current, c = ga(), c = Ja(c), f = Il(c), f.callback = null, On(u, f, c), u = c, n.current.lanes = u, wi(n, u), na(n), l[Lc] = n.current, ry(l), new Gd(n);
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
var cS;
function P2() {
  return cS || (cS = 1, process.env.NODE_ENV !== "production" && function() {
    function y(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function A(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], s = Me(e) ? e.slice() : Ge({}, e);
      return s[o] = A(e[o], t, a + 1, i), s;
    }
    function O(e, t, a) {
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
        return v(e, t, a, 0);
      }
    }
    function v(e, t, a, i) {
      var o = t[i], s = Me(e) ? e.slice() : Ge({}, e);
      return i + 1 === t.length ? (s[a[i]] = s[o], Me(s) ? s.splice(o, 1) : delete s[o]) : s[o] = v(
        e[o],
        t,
        a,
        i + 1
      ), s;
    }
    function k(e, t, a) {
      var i = t[a], o = Me(e) ? e.slice() : Ge({}, e);
      return a + 1 === t.length ? (Me(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = k(e[i], t, a + 1), o);
    }
    function Z() {
      return !1;
    }
    function F() {
      return null;
    }
    function ee() {
    }
    function Y() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function re() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function ae() {
    }
    function Re(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function pe(e, t, a, i) {
      return new xs(e, t, a, i);
    }
    function Ve(e, t) {
      e.context === Qo && (yt(e.current, 2, t, e, null, null), dc());
    }
    function Oe(e, t) {
      if (Jn !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, vo(), Ts(
          e.current,
          t,
          a
        ), dc();
      }
    }
    function be(e) {
      Jn = e;
    }
    function _e(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Ue(e) {
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
    function Pe(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Ze(e) {
      if (Ue(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function mt(e) {
      var t = e.alternate;
      if (!t) {
        if (t = Ue(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var s = o.alternate;
        if (s === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === s.child) {
          for (s = o.child; s; ) {
            if (s === a) return Ze(o), e;
            if (s === i) return Ze(o), t;
            s = s.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = s;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = s;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = s;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = s.child; h; ) {
              if (h === a) {
                d = !0, a = s, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = s, a = o;
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
    function Et(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = Et(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function ot(e) {
      return e === null || typeof e != "object" ? null : (e = hy && e[hy] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function qe(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Rd ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Ne:
          return "Fragment";
        case Ho:
          return "Profiler";
        case Uo:
          return "StrictMode";
        case wo:
          return "Suspense";
        case vi:
          return "SuspenseList";
        case dy:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case xc:
            return "Portal";
          case Ya:
            return (e.displayName || "Context") + ".Provider";
          case zd:
            return (e._context.displayName || "Context") + ".Consumer";
          case Ru:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case pf:
            return t = e.displayName || null, t !== null ? t : qe(e.type) || "Memo";
          case ba:
            t = e._payload, e = e._init;
            try {
              return qe(e(t));
            } catch {
            }
        }
      return null;
    }
    function fe(e) {
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
          return qe(t);
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
    function gt(e) {
      return { current: e };
    }
    function Fe(e, t) {
      0 > Ga ? console.error("Unexpected pop.") : (t !== vf[Ga] && console.error("Unexpected Fiber popped."), e.current = gf[Ga], gf[Ga] = null, vf[Ga] = null, Ga--);
    }
    function Ae(e, t, a) {
      Ga++, gf[Ga] = e.current, vf[Ga] = a, e.current = t;
    }
    function st(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function Dt(e, t) {
      Ae(Xn, t, e), Ae(No, e, e), Ae(Ou, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? ht(t) : Bc;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = ht(t), t = la(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = mh;
                break;
              case "math":
                t = ug;
                break;
              default:
                t = Bc;
            }
      }
      a = a.toLowerCase(), a = Oh(null, a), a = {
        context: t,
        ancestorInfo: a
      }, Fe(Ou, e), Ae(Ou, a, e);
    }
    function dt(e) {
      Fe(Ou, e), Fe(No, e), Fe(Xn, e);
    }
    function E() {
      return st(Ou.current);
    }
    function J(e) {
      e.memoizedState !== null && Ae(jo, e, e);
      var t = st(Ou.current), a = e.type, i = la(t.context, a);
      a = Oh(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (Ae(No, e, e), Ae(Ou, i, e));
    }
    function _(e) {
      No.current === e && (Fe(Ou, e), Fe(No, e)), jo.current === e && (Fe(jo, e), op._currentValue = kf);
    }
    function me(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function j(e) {
      try {
        return ue(e), !1;
      } catch {
        return !0;
      }
    }
    function ue(e) {
      return "" + e;
    }
    function I(e, t) {
      if (j(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          me(e)
        ), ue(e);
    }
    function le(e, t) {
      if (j(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          me(e)
        ), ue(e);
    }
    function Se(e) {
      if (j(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          me(e)
        ), ue(e);
    }
    function Ce(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        Si = t.inject(e), Tl = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function He(e) {
      if (typeof Xg == "function" && on(e), Tl && typeof Tl.setStrictMode == "function")
        try {
          Tl.setStrictMode(Si, e);
        } catch (t) {
          ua || (ua = !0, console.error(
            "React instrumentation encountered an error: %s",
            t
          ));
        }
    }
    function Tt(e) {
      te = e;
    }
    function zt() {
      te !== null && typeof te.markCommitStopped == "function" && te.markCommitStopped();
    }
    function _t(e) {
      te !== null && typeof te.markComponentRenderStarted == "function" && te.markComponentRenderStarted(e);
    }
    function hl() {
      te !== null && typeof te.markComponentRenderStopped == "function" && te.markComponentRenderStopped();
    }
    function ka(e) {
      te !== null && typeof te.markRenderStarted == "function" && te.markRenderStarted(e);
    }
    function au() {
      te !== null && typeof te.markRenderStopped == "function" && te.markRenderStopped();
    }
    function Ci(e, t) {
      te !== null && typeof te.markStateUpdateScheduled == "function" && te.markStateUpdateScheduled(e, t);
    }
    function bh(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Dd(e) / Du | 0) | 0;
    }
    function Tg(e) {
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
    function sa(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, s = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~s, i !== 0 ? o = Ui(i) : (d &= h, d !== 0 ? o = Ui(d) : a || (a = h & ~e, a !== 0 && (o = Ui(a))))) : (h = i & ~s, h !== 0 ? o = Ui(h) : d !== 0 ? o = Ui(d) : a || (a = i & ~e, a !== 0 && (o = Ui(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & s) === 0 && (s = o & -o, a = t & -t, s >= a || s === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function us(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function gp(e, t) {
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
      var e = Cd;
      return Cd <<= 1, (Cd & 4194048) === 0 && (Cd = 256), e;
    }
    function is() {
      var e = Ud;
      return Ud <<= 1, (Ud & 62914560) === 0 && (Ud = 4194304), e;
    }
    function Th(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Gc(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function xg(e, t, a, i, o, s) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, g = e.expirationTimes, b = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var w = 31 - Hl(a), V = 1 << w;
        h[w] = 0, g[w] = -1;
        var U = b[w];
        if (U !== null)
          for (b[w] = null, w = 0; w < U.length; w++) {
            var X = U[w];
            X !== null && (X.lane &= -536870913);
          }
        a &= ~V;
      }
      i !== 0 && vp(e, i, 0), s !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(d & ~t));
    }
    function vp(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - Hl(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 4194090;
    }
    function Vc(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - Hl(a), o = 1 << i;
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
    function nu(e, t, a) {
      if (Zt)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - Hl(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function Jl(e, t) {
      if (Zt)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - Hl(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(s) {
            var d = s.alternate;
            d !== null && i.has(d) || i.add(s);
          }), o.clear()), t &= ~e;
        }
    }
    function xh(e) {
      return e &= -e, xl < e ? sn < e ? (e & 134217727) !== 0 ? Cu : Hd : sn : xl;
    }
    function bp() {
      var e = Ee.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? Cu : Ad(e.type));
    }
    function Ag(e, t) {
      var a = Ee.p;
      try {
        return Ee.p = e, t();
      } finally {
        Ee.p = a;
      }
    }
    function Xc(e) {
      delete e[wl], delete e[ia], delete e[my], delete e[S0], delete e[_o];
    }
    function uu(e) {
      var t = e[wl];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[xi] || a[wl]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = Oo(e); e !== null; ) {
              if (a = e[wl])
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
      if (e = e[wl] || e[xi]) {
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
    function hn(e) {
      var t = e[qo];
      return t || (t = e[qo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function nl(e) {
      e[Yo] = !0;
    }
    function Yu(e, t) {
      Hi(e, t), Hi(e + "Capture", t);
    }
    function Hi(e, t) {
      Va[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Va[e] = t;
      var a = e.toLowerCase();
      for (Ac[a] = e, e === "onDoubleClick" && (Ac.ondblclick = e), e = 0; e < t.length; e++)
        T0.add(t[e]);
    }
    function Gu(e, t) {
      x0[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function wi(e) {
      return Mu.call(jd, e) ? !0 : Mu.call(Nd, e) ? !1 : wd.test(e) ? jd[e] = !0 : (Nd[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function Sp(e, t, a) {
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
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (I(a, t), e === "" + a ? a : e);
      }
    }
    function cs(e, t, a) {
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
          I(a, t), e.setAttribute(t, "" + a);
        }
    }
    function os(e, t, a) {
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
        I(a, t), e.setAttribute(t, "" + a);
      }
    }
    function Ja(e, t, a, i) {
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
        I(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function Kf() {
    }
    function Tp() {
      if (Ai === 0) {
        yy = console.log, py = console.info, A0 = console.warn, gy = console.error, Go = console.group, E0 = console.groupCollapsed, z0 = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Kf,
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
      Ai++;
    }
    function Eg() {
      if (Ai--, Ai === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Ge({}, e, { value: yy }),
          info: Ge({}, e, { value: py }),
          warn: Ge({}, e, { value: A0 }),
          error: Ge({}, e, { value: gy }),
          group: Ge({}, e, { value: Go }),
          groupCollapsed: Ge({}, e, { value: E0 }),
          groupEnd: Ge({}, e, { value: z0 })
        });
      }
      0 > Ai && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function Wt(e) {
      if (vy === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          vy = t && t[1] || "", Tf = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + vy + e + Tf;
    }
    function ul(e, t) {
      if (!e || Vo) return "";
      var a = xf.get(e);
      if (a !== void 0) return a;
      Vo = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = q.H, q.H = null, Tp();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var U = function() {
                  throw Error();
                };
                if (Object.defineProperty(U.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(U, []);
                  } catch (oe) {
                    var X = oe;
                  }
                  Reflect.construct(e, [], U);
                } else {
                  try {
                    U.call();
                  } catch (oe) {
                    X = oe;
                  }
                  e.call(U.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (oe) {
                  X = oe;
                }
                (U = e()) && typeof U.catch == "function" && U.catch(function() {
                });
              }
            } catch (oe) {
              if (oe && X && typeof oe.stack == "string")
                return [oe.stack, X.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var s = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        s && s.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], g = d[1];
        if (h && g) {
          var b = h.split(`
`), w = g.split(`
`);
          for (d = s = 0; s < b.length && !b[s].includes(
            "DetermineComponentFrameRoot"
          ); )
            s++;
          for (; d < w.length && !w[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (s === b.length || d === w.length)
            for (s = b.length - 1, d = w.length - 1; 1 <= s && 0 <= d && b[s] !== w[d]; )
              d--;
          for (; 1 <= s && 0 <= d; s--, d--)
            if (b[s] !== w[d]) {
              if (s !== 1 || d !== 1)
                do
                  if (s--, d--, 0 > d || b[s] !== w[d]) {
                    var V = `
` + b[s].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)), typeof e == "function" && xf.set(e, V), V;
                  }
                while (1 <= s && 0 <= d);
              break;
            }
        }
      } finally {
        Vo = !1, q.H = i, Eg(), Error.prepareStackTrace = a;
      }
      return b = (b = e ? e.displayName || e.name : "") ? Wt(b) : "", typeof e == "function" && xf.set(e, b), b;
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
    function $f(e) {
      try {
        var t = "";
        do {
          t += Lc(e);
          var a = e._debugInfo;
          if (a)
            for (var i = a.length - 1; 0 <= i; i--) {
              var o = a[i];
              if (typeof o.name == "string") {
                var s = t, d = o.env, h = Wt(
                  o.name + (d ? " [" + d + "]" : "")
                );
                t = s + h;
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
    function xp(e) {
      return (e = e ? e.displayName || e.name : "") ? Wt(e) : "";
    }
    function Wf() {
      if (Sa === null) return null;
      var e = Sa._debugOwner;
      return e != null ? fe(e) : null;
    }
    function Ap() {
      if (Sa === null) return "";
      var e = Sa;
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
            e._debugOwner || t !== "" || (t += xp(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += xp(
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
        var s = t;
      } catch (d) {
        s = `
Error generating stack: ` + d.message + `
` + d.stack;
      }
      return s;
    }
    function ce(e, t, a, i, o, s, d) {
      var h = Sa;
      ss(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, s, d)
        ) : t(a, i, o, s, d);
      } finally {
        ss(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function ss(e) {
      q.getCurrentStack = e === null ? null : Ap, ca = !1, Sa = e;
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
    function fs(e) {
      var t = Ni(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      Se(e[t]);
      var i = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var o = a.get, s = a.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            Se(d), i = "" + d, s.call(this, d);
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
    function iu(e) {
      e._valueTracker || (e._valueTracker = fs(e));
    }
    function Ft(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = Ni(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function rs(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function ra(e) {
      return e.replace(
        Lg,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function Vu(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || Sy || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Wf() || "A component",
        t.type
      ), Sy = !0), t.value === void 0 || t.defaultValue === void 0 || by || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Wf() || "A component",
        t.type
      ), by = !0);
    }
    function Xu(e, t, a, i, o, s, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (I(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + ml(t)) : e.value !== "" + ml(t) && (e.value = "" + ml(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Ff(e, d, ml(t)) : a != null ? Ff(e, d, ml(a)) : i != null && e.removeAttribute("value"), o == null && s != null && (e.defaultChecked = !!s), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (I(h, "name"), e.name = "" + ml(h)) : e.removeAttribute("name");
    }
    function Ep(e, t, a, i, o, s, d, h) {
      if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (I(s, "type"), e.type = s), t != null || a != null) {
        if (!(s !== "submit" && s !== "reset" || t != null))
          return;
        a = a != null ? "" + ml(a) : "", t = t != null ? "" + ml(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (I(d, "name"), e.name = d);
    }
    function Ff(e, t, a) {
      t === "number" && rs(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function Ah(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? mf.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || xy || (xy = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || Bd || (Bd = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || Ty || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Ty = !0);
    }
    function zp() {
      var e = Wf();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function cu(e, t, a, i) {
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
    function ds(e, t) {
      for (e = 0; e < Af.length; e++) {
        var a = Af[e];
        if (t[a] != null) {
          var i = Me(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            zp()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            zp()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || Ay || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), Ay = !0);
    }
    function mn(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || R0 || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        Wf() || "A component"
      ), R0 = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function If(e, t, a) {
      if (t != null && (t = "" + ml(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + ml(a) : "";
    }
    function Eh(e, t, a, i) {
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
    function ji(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? ji(e.children[0], t) : e;
    }
    function ql(e) {
      return "  " + "  ".repeat(e);
    }
    function Lu(e) {
      return "+ " + "  ".repeat(e);
    }
    function Bi(e) {
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
    function Ml(e, t) {
      return O0.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function hs(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return Lu(a) + Ml(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Lu(a) + Ml(e, i) + `
` + Bi(a) + Ml(t, i) + `
`;
      }
      return ql(a) + Ml(e, i) + `
`;
    }
    function Rh(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function Qu(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (Me(e)) return "[...]";
          if (e.$$typeof === gi)
            return (t = qe(e.type)) ? "<" + t + ">" : "<...>";
          var a = Rh(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = Qu(
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
      return typeof e != "string" || O0.test(e) ? "{" + Qu(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function Qc(e, t, a) {
      var i = 120 - a.length - e.length, o = [], s;
      for (s in t)
        if (t.hasOwnProperty(s) && s !== "children") {
          var d = _i(
            t[s],
            120 - a.length - s.length - 1
          );
          i -= s.length + d.length + 2, o.push(s + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function zg(e, t, a) {
      var i = "", o = Ge({}, t), s;
      for (s in e)
        if (e.hasOwnProperty(s)) {
          delete o[s];
          var d = 120 - 2 * a - s.length - 2, h = Qu(e[s], d);
          t.hasOwnProperty(s) ? (d = Qu(t[s], d), i += Lu(a) + s + ": " + h + `
`, i += Bi(a) + s + ": " + d + `
`) : i += Lu(a) + s + ": " + h + `
`;
        }
      for (var g in o)
        o.hasOwnProperty(g) && (e = Qu(
          o[g],
          120 - 2 * a - g.length - 2
        ), i += Bi(a) + g + ": " + e + `
`);
      return i;
    }
    function Ra(e, t, a, i) {
      var o = "", s = /* @__PURE__ */ new Map();
      for (b in a)
        a.hasOwnProperty(b) && s.set(
          b.toLowerCase(),
          b
        );
      if (s.size === 1 && s.has("children"))
        o += Qc(
          e,
          t,
          ql(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, g = s.get(d.toLowerCase());
            if (g !== void 0) {
              s.delete(d.toLowerCase());
              var b = t[d];
              g = a[g];
              var w = _i(
                b,
                h
              );
              h = _i(
                g,
                h
              ), typeof b == "object" && b !== null && typeof g == "object" && g !== null && Rh(b) === "Object" && Rh(g) === "Object" && (2 < Object.keys(b).length || 2 < Object.keys(g).length || -1 < w.indexOf("...") || -1 < h.indexOf("...")) ? o += ql(i + 1) + d + `={{
` + zg(
                b,
                g,
                i + 2
              ) + ql(i + 1) + `}}
` : (o += Lu(i + 1) + d + "=" + w + `
`, o += Bi(i + 1) + d + "=" + h + `
`);
            } else
              o += ql(i + 1) + d + "=" + _i(t[d], h) + `
`;
          }
        s.forEach(function(V) {
          if (V !== "children") {
            var U = 120 - 2 * (i + 1) - V.length - 1;
            o += Bi(i + 1) + V + "=" + _i(a[V], U) + `
`;
          }
        }), o = o === "" ? ql(i) + "<" + e + `>
` : ql(i) + "<" + e + `
` + o + ql(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (s = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (s = "" + t), o += hs(s, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + hs("" + t, null, i + 1) : o + hs("" + t, void 0, i + 1)), o;
    }
    function Pf(e, t) {
      var a = zh(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += Pf(e, t), e = e.sibling;
        return a;
      }
      return ql(t) + "<" + a + `>
`;
    }
    function er(e, t) {
      var a = ji(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return ql(t) + `...
` + er(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var s = i[o].name;
          typeof s == "string" && (a += ql(t) + "<" + s + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = hs(o, e.serverProps, t), t++;
      else if (s = zh(e.fiber), s !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - s.length - 2, h = "";
          for (b in o)
            if (o.hasOwnProperty(b) && b !== "children") {
              var g = _i(o[b], 15);
              if (d -= b.length + g.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + b + "=" + g;
            }
          i = ql(i) + "<" + s + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = Qc(
            s,
            o,
            Lu(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = Ra(
            s,
            o,
            e.serverProps,
            t
          ), t++);
      var b = "";
      for (o = e.fiber.child, s = 0; o && s < e.children.length; )
        d = e.children[s], d.fiber === o ? (b += er(d, t), s++) : b += Pf(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (b += ql(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        s = o[e], b = typeof s == "string" ? b + (Bi(t) + Ml(s, 120 - 2 * t) + `
`) : b + Qc(
          s.type,
          s.props,
          Bi(t)
        );
      return a + i + b;
    }
    function ms(e) {
      try {
        return `

` + er(e, 0);
      } catch {
        return "";
      }
    }
    function qi(e, t, a) {
      for (var i = t, o = null, s = 0; i; )
        i === e && (s = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: s
        }, s++, i = i.return;
      return o !== null ? ms(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function Oh(e, t) {
      var a = Ge({}, e || Ry), i = { tag: t };
      return _d.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), qd.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Ey.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function Mh(e, t, a) {
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
    function Rp(e, t) {
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
      if (t = (a = Mh(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : Zc(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, Xo[t]) return !1;
      Xo[t] = !0;
      var o = (t = Sa) ? Rp(t.return, i) : null, s = t !== null && o !== null ? qi(o, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", i === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        s
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        s
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || ce(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function ys(e, t, a) {
      if (a || Mh("#text", t, !1))
        return !0;
      if (a = "#text|" + t, Xo[a]) return !1;
      Xo[a] = !0;
      var i = (a = Sa) ? Rp(a, t) : null;
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
    function Rg(e) {
      return e.replace(Ei, function(t, a) {
        return a.toUpperCase();
      });
    }
    function Op(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? Ec.hasOwnProperty(t) && Ec[t] || (Ec[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        Rg(t.replace(zf, "ms-"))
      )) : Ef.test(t) ? Ec.hasOwnProperty(t) && Ec[t] || (Ec[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !M0.test(a) || zc.hasOwnProperty(a) && zc[a] || (zc[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(M0, "")
      )), typeof a == "number" && (isNaN(a) ? D0 || (D0 = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || Oy || (Oy = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Rf.has(t) ? t === "float" ? e.cssFloat = a : (le(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function ps(e, t, a) {
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
                for (var s = Qn[o] || [o], d = 0; d < s.length; d++)
                  i[s[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = Qn[h] || [h], s = 0; s < o.length; s++)
                i[o[s]] = h;
          h = {};
          for (var g in t)
            for (o = Qn[g] || [g], s = 0; s < o.length; s++)
              h[o[s]] = g;
          g = {};
          for (var b in i)
            if (o = i[b], (s = h[b]) && o !== s && (d = o + "," + s, !g[d])) {
              g[d] = !0, d = console;
              var w = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                w == null || typeof w == "boolean" || w === "" ? "Removing" : "Updating",
                o,
                s
              );
            }
        }
        for (var V in a)
          !a.hasOwnProperty(V) || t != null && t.hasOwnProperty(V) || (V.indexOf("--") === 0 ? e.setProperty(V, "") : V === "float" ? e.cssFloat = "" : e[V] = "");
        for (var U in t)
          b = t[U], t.hasOwnProperty(U) && a[U] !== b && Op(e, U, b);
      } else
        for (i in t)
          t.hasOwnProperty(i) && Op(e, i, t[i]);
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
      if (Mu.call(Zn, t) && Zn[t])
        return !0;
      if (Gd.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = My.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), Zn[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), Zn[t] = !0;
      }
      if (Dy.test(t)) {
        if (e = t.toLowerCase(), e = My.hasOwnProperty(e) ? e : null, e == null) return Zn[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), Zn[t] = !0);
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
    function Mp(e, t, a, i) {
      if (Mu.call(Ll, t) && Ll[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), Ll[t] = !0;
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
          ), Ll[t] = !0;
        if (Mf.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), Ll[t] = !0;
      } else if (Mf.test(t))
        return l.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), Ll[t] = !0;
      if (n.test(t) || u.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), Ll[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), Ll[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), Ll[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), Ll[t] = !0;
      if (Rc.hasOwnProperty(o)) {
        if (o = Rc[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), Ll[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), Ll[t] = !0;
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
              ), Ll[t] = !0);
          }
        case "function":
        case "symbol":
          return Ll[t] = !0, !1;
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
            ), Ll[t] = !0;
          }
      }
      return !0;
    }
    function Dh(e, t, a) {
      var i = [], o;
      for (o in t)
        Mp(e, o, t[o], a) || i.push(o);
      t = i.map(function(s) {
        return "`" + s + "`";
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
    function yn(e) {
      var t = fa(e);
      if (t && (e = t.stateNode)) {
        var a = e[ia] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Xu(
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
              for (I(t, "name"), a = a.querySelectorAll(
                'input[name="' + ra(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[ia] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Xu(
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
            If(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && cu(e, !!a.multiple, t, !1);
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
        if (p = !1, (r !== null || m !== null) && (dc(), r && (t = r, e = m, m = r = null, yn(t), e)))
          for (t = 0; t < e.length; t++) yn(e[t]);
      }
    }
    function ou(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[ia] || null;
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
    function su() {
      if (N) return N;
      var e, t = H, a = t.length, i, o = "value" in $ ? $.value : $.textContent, s = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[s - i]; i++) ;
      return N = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function $c(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Xi() {
      return !0;
    }
    function Ch() {
      return !1;
    }
    function yl(e) {
      function t(a, i, o, s, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(s) : s[h]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Xi : Ch, this.isPropagationStopped = Ch, this;
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
      return t.getModifierState ? t.getModifierState(e) : (e = kS[e]) ? !!t[e] : !1;
    }
    function ur() {
      return nr;
    }
    function Yl(e, t) {
      switch (e) {
        case "keyup":
          return n2.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== nb;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Zu(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function ir(e, t) {
      switch (e) {
        case "compositionend":
          return Zu(t);
        case "keypress":
          return t.which !== ib ? null : (ob = !0, cb);
        case "textInput":
          return e = t.data, e === cb && ob ? null : e;
        default:
          return null;
      }
    }
    function gs(e, t) {
      if (Vd)
        return e === "compositionend" || !Zg && Yl(e, t) ? (e = su(), N = H = $ = null, Vd = !1, e) : null;
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
          return ub && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function Dp(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!i2[e.type] : t === "textarea";
    }
    function Uh(e) {
      if (!S) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function cr(e, t, a, i) {
      r ? m ? m.push(i) : m = [i] : r = i, t = nf(t, "onChange"), 0 < t.length && (a = new ve(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function vs(e) {
      Bn(e, 0);
    }
    function Li(e) {
      var t = qu(e);
      if (Ft(t)) return e;
    }
    function Hh(e, t) {
      if (e === "change") return t;
    }
    function Cp() {
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
        ), ar(vs, t);
      }
    }
    function Og(e, t, a) {
      e === "focusin" ? (Cp(), Hy = t, wy = a, Hy.attachEvent("onpropertychange", Up)) : e === "focusout" && Cp();
    }
    function wh(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Li(wy);
    }
    function Mg(e, t) {
      if (e === "click") return Li(t);
    }
    function Dg(e, t) {
      if (e === "input" || e === "change")
        return Li(t);
    }
    function Cg(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function bs(e, t) {
      if (Ta(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!Mu.call(t, o) || !Ta(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function Hp(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Nh(e, t) {
      var a = Hp(e);
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
        a = Hp(a);
      }
    }
    function wp(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? wp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function Np(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = rs(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = rs(e.document);
      }
      return t;
    }
    function jh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function jp(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      Jg || Xd == null || Xd !== rs(i) || (i = Xd, "selectionStart" in i && jh(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), Ny && bs(Ny, i) || (Ny = i, i = nf(kg, "onSelect"), 0 < i.length && (t = new ve(
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
      if (Kg[e]) return Kg[e];
      if (!Ld[e]) return e;
      var t = Ld[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in fb)
          return Kg[e] = t[a];
      return e;
    }
    function Ka(e, t) {
      yb.set(e, t), Yu(t, [e]);
    }
    function da(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = Wg.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: $f(t)
        }, Wg.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: $f(t)
      };
    }
    function Ss() {
      for (var e = Qd, t = Fg = Qd = 0; t < e; ) {
        var a = kn[t];
        kn[t++] = null;
        var i = kn[t];
        kn[t++] = null;
        var o = kn[t];
        kn[t++] = null;
        var s = kn[t];
        if (kn[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        s !== 0 && Bp(a, o, s);
      }
    }
    function or(e, t, a, i) {
      kn[Qd++] = e, kn[Qd++] = t, kn[Qd++] = a, kn[Qd++] = i, Fg |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function Bh(e, t, a, i) {
      return or(e, t, a, i), sr(e);
    }
    function Kl(e, t) {
      return or(e, null, null, t), sr(e);
    }
    function Bp(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, s = e.return; s !== null; )
        s.childLanes |= a, i = s.alternate, i !== null && (i.childLanes |= a), s.tag === 22 && (e = s.stateNode, e === null || e._visibility & C0 || (o = !0)), e = s, s = s.return;
      return e.tag === 3 ? (s = e.stateNode, o && t !== null && (o = 31 - Hl(a), e = s.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), s) : null;
    }
    function sr(e) {
      if (lp > D2)
        throw Vf = lp = 0, ap = Ov = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Vf > C2 && (Vf = 0, ap = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && cn(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && cn(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Zi(e) {
      if (Jn === null) return e;
      var t = Jn(e);
      return t === void 0 ? e : t.current;
    }
    function _h(e) {
      if (Jn === null) return e;
      var t = Jn(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Zi(e.render), e.render !== t) ? (t = { $$typeof: Ru, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function _p(e, t) {
      if (Jn === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === ba) && (i = !0);
          break;
        case 11:
          (o === Ru || o === ba) && (i = !0);
          break;
        case 14:
        case 15:
          (o === pf || o === ba) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = Jn(a), e !== void 0 && e === Jn(t)));
    }
    function qp(e) {
      Jn !== null && typeof WeakSet == "function" && (Zd === null && (Zd = /* @__PURE__ */ new WeakSet()), Zd.add(e));
    }
    function Ts(e, t, a) {
      var i = e.alternate, o = e.child, s = e.sibling, d = e.tag, h = e.type, g = null;
      switch (d) {
        case 0:
        case 15:
        case 1:
          g = h;
          break;
        case 11:
          g = h.render;
      }
      if (Jn === null)
        throw Error("Expected resolveFamily to be set during hot reload.");
      var b = !1;
      h = !1, g !== null && (g = Jn(g), g !== void 0 && (a.has(g) ? h = !0 : t.has(g) && (d === 1 ? h = !0 : b = !0))), Zd !== null && (Zd.has(e) || i !== null && Zd.has(i)) && (h = !0), h && (e._debugNeedsRemount = !0), (h || b) && (i = Kl(e, 2), i !== null && Gt(i, e, 2)), o === null || h || Ts(
        o,
        t,
        a
      ), s !== null && Ts(
        s,
        t,
        a
      );
    }
    function xs(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, gb || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function qh(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function pn(e, t) {
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
          a.type = _h(e.type);
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
    function fr(e, t, a, i, o, s) {
      var d = 0, h = e;
      if (typeof e == "function")
        qh(e) && (d = 1), h = Zi(h);
      else if (typeof e == "string")
        d = E(), d = Do(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case dy:
            return t = pe(31, a, t, o), t.elementType = dy, t.lanes = s, t;
          case Ne:
            return ku(
              a.children,
              o,
              s,
              t
            );
          case Uo:
            d = 8, o |= oa, o |= wu;
            break;
          case Ho:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = pe(12, e, t, i | Ql), t.elementType = Ho, t.lanes = s, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case wo:
            return t = pe(13, a, t, o), t.elementType = wo, t.lanes = s, t;
          case vi:
            return t = pe(19, a, t, o), t.elementType = vi, t.lanes = s, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case ry:
                case Ya:
                  d = 10;
                  break e;
                case zd:
                  d = 9;
                  break e;
                case Ru:
                  d = 11, h = _h(h);
                  break e;
                case pf:
                  d = 14;
                  break e;
                case ba:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : Me(e) ? a = "array" : e !== void 0 && e.$$typeof === gi ? (a = "<" + (qe(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? fe(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = pe(d, a, t, o), t.elementType = e, t.type = h, t.lanes = s, t._debugOwner = i, t;
    }
    function As(e, t, a) {
      return t = fr(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function ku(e, t, a, i) {
      return e = pe(7, e, i, t), e.lanes = a, e;
    }
    function Ju(e, t, a) {
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
      $a(), kd[Jd++] = H0, kd[Jd++] = U0, U0 = e, H0 = t;
    }
    function Yp(e, t, a) {
      $a(), Kn[$n++] = Mc, Kn[$n++] = Dc, Kn[$n++] = Df, Df = e;
      var i = Mc;
      e = Dc;
      var o = 32 - Hl(i) - 1;
      i &= ~(1 << o), a += 1;
      var s = 32 - Hl(t) + o;
      if (30 < s) {
        var d = o - o % 5;
        s = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, Mc = 1 << 32 - Hl(t) + o | a << o | i, Dc = s + e;
      } else
        Mc = 1 << s | a << o | i, Dc = e;
    }
    function rr(e) {
      $a(), e.return !== null && (ki(e, 1), Yp(e, 1, 0));
    }
    function dr(e) {
      for (; e === U0; )
        U0 = kd[--Jd], kd[Jd] = null, H0 = kd[--Jd], kd[Jd] = null;
      for (; e === Df; )
        Df = Kn[--$n], Kn[$n] = null, Dc = Kn[--$n], Kn[$n] = null, Mc = Kn[--$n], Kn[$n] = null;
    }
    function $a() {
      ct || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function Wa(e, t) {
      if (e.return === null) {
        if (Wn === null)
          Wn = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (Wn.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          Wn.distanceFromLeaf > t && (Wn.distanceFromLeaf = t);
        }
        return Wn;
      }
      var a = Wa(
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
      Cc || (e = Wa(e, 0), e.serverProps = null, t !== null && (t = yd(t), e.serverTail.push(t)));
    }
    function gn(e) {
      var t = "", a = Wn;
      throw a !== null && (Wn = null, t = ms(a)), Wc(
        da(
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
      ), Ig;
    }
    function Xh(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[wl] = e, t[ia] = i, _n(a, i), a) {
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
          Gu("input", i), ke("invalid", t), Vu(t, i), Ep(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ), iu(t);
          break;
        case "option":
          Ah(t, i);
          break;
        case "select":
          Gu("select", i), ke("invalid", t), ds(t, i);
          break;
        case "textarea":
          Gu("textarea", i), ke("invalid", t), mn(t, i), Eh(
            t,
            i.value,
            i.defaultValue,
            i.children
          ), iu(t);
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || Qm(t.textContent, a) ? (i.popover != null && (ke("beforetoggle", t), ke("toggle", t)), i.onScroll != null && ke("scroll", t), i.onScrollEnd != null && ke("scrollend", t), i.onClick != null && (t.onclick = xu), t = !0) : t = !1, t || gn(e);
    }
    function Lh(e) {
      for (xa = e.return; xa; )
        switch (xa.tag) {
          case 5:
          case 13:
            Ri = !1;
            return;
          case 27:
          case 3:
            Ri = !0;
            return;
          default:
            xa = xa.return;
        }
    }
    function Ji(e) {
      if (e !== xa) return !1;
      if (!ct)
        return Lh(e), ct = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || qn(e.type, e.memoizedProps)), a = !a), a && Kt) {
        for (a = Kt; a; ) {
          var i = Wa(e, 0), o = yd(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? Im(a) : Sl(a.nextSibling);
        }
        gn(e);
      }
      if (Lh(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Kt = Im(e);
      } else
        t === 27 ? (t = Kt, Yn(e.type) ? (e = Yv, Yv = null, Kt = e) : Kt = t) : Kt = xa ? Sl(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Ki() {
      Kt = xa = null, Cc = ct = !1;
    }
    function Qh() {
      var e = Cf;
      return e !== null && (za === null ? za = e : za.push.apply(
        za,
        e
      ), Cf = null), e;
    }
    function Wc(e) {
      Cf === null ? Cf = [e] : Cf.push(e);
    }
    function Zh() {
      var e = Wn;
      if (e !== null) {
        Wn = null;
        for (var t = ms(e); 0 < e.children.length; )
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
    function hr() {
      Kd = w0 = null, $d = !1;
    }
    function Ku(e, t, a) {
      Ae(Pg, t._currentValue, e), t._currentValue = a, Ae(ev, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Tb && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = Tb;
    }
    function ru(e, t) {
      e._currentValue = Pg.current;
      var a = ev.current;
      Fe(ev, t), e._currentRenderer = a, Fe(Pg, t);
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
        var s = o.dependencies;
        if (s !== null) {
          var d = o.child;
          s = s.firstContext;
          e: for (; s !== null; ) {
            var h = s;
            s = o;
            for (var g = 0; g < t.length; g++)
              if (h.context === t[g]) {
                s.lanes |= a, h = s.alternate, h !== null && (h.lanes |= a), kh(
                  s.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            s = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, s = d.alternate, s !== null && (s.lanes |= a), kh(
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
      for (var o = t, s = !1; o !== null; ) {
        if (!s) {
          if ((o.flags & 524288) !== 0) s = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            Ta(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === jo.current) {
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
    function $u(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Ta(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function Wu(e) {
      w0 = e, Kd = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function Rt(e) {
      return $d && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), Kh(w0, e);
    }
    function Es(e, t) {
      return w0 === null && Wu(e), Kh(e, t);
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
    function zs() {
      return {
        controller: new m2(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function $i(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function vn(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && y2(p2, function() {
        e.controller.abort();
      });
    }
    function Fa() {
      var e = Uf;
      return Uf = 0, e;
    }
    function Fu(e) {
      var t = Uf;
      return Uf = e, t;
    }
    function Wi(e) {
      var t = Uf;
      return Uf += e, t;
    }
    function mr(e) {
      Xa = Wd(), 0 > e.actualStartTime && (e.actualStartTime = Xa);
    }
    function du(e) {
      if (0 <= Xa) {
        var t = Wd() - Xa;
        e.actualDuration += t, e.selfBaseDuration = t, Xa = -1;
      }
    }
    function Fi(e) {
      if (0 <= Xa) {
        var t = Wd() - Xa;
        e.actualDuration += t, Xa = -1;
      }
    }
    function Oa() {
      if (0 <= Xa) {
        var e = Wd() - Xa;
        Xa = -1, Uf += e;
      }
    }
    function Ia() {
      Xa = Wd();
    }
    function bn(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Gp(e, t) {
      if (jy === null) {
        var a = jy = [];
        tv = 0, Hf = Ym(), Fd = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return tv++, t.then($h, $h), t;
    }
    function $h() {
      if (--tv === 0 && jy !== null) {
        Fd !== null && (Fd.status = "fulfilled");
        var e = jy;
        jy = null, Hf = 0, Fd = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Vp(e, t) {
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
      var e = wf.current;
      return e !== null ? e : Ot.pooledCache;
    }
    function yr(e, t) {
      t === null ? Ae(wf, wf.current, e) : Ae(wf, t.pool, e);
    }
    function Xp() {
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
    function Ma(e, t, a) {
      q.actQueue !== null && (q.didUsePromise = !0);
      var i = e.thenables;
      switch (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(Fc, Fc), t = a), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, ha(e), e;
        default:
          if (typeof t.status == "string")
            t.then(Fc, Fc);
          else {
            if (e = Ot, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(o) {
                if (t.status === "pending") {
                  var s = t;
                  s.status = "fulfilled", s.value = o;
                }
              },
              function(o) {
                if (t.status === "pending") {
                  var s = t;
                  s.status = "rejected", s.reason = o;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, ha(e), e;
          }
          throw Ly = t, Y0 = !0, Xy;
      }
    }
    function Ph() {
      if (Ly === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Ly;
      return Ly = null, Y0 = !1, e;
    }
    function ha(e) {
      if (e === Xy || e === q0)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function $l(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function Iu(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Sn(e) {
      return {
        lane: e,
        tag: Rb,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Pa(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, nv === i && !Db) {
        var o = ne(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), Db = !0;
      }
      return (pt & Ea) !== fn ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = sr(e), Bp(e, null, a), t) : (or(e, i, t, a), sr(e));
    }
    function Pu(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, Vc(e, a);
      }
    }
    function Ic(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, s = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            s === null ? o = s = d : s = s.next = d, a = a.next;
          } while (a !== null);
          s === null ? o = s = t : s = s.next = t;
        } else o = s = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: s,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function Tn() {
      if (uv) {
        var e = Fd;
        if (e !== null) throw e;
      }
    }
    function Pc(e, t, a, i) {
      uv = !1;
      var o = e.updateQueue;
      Zo = !1, nv = o.shared;
      var s = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var g = h, b = g.next;
        g.next = null, d === null ? s = b : d.next = b, d = g;
        var w = e.alternate;
        w !== null && (w = w.updateQueue, h = w.lastBaseUpdate, h !== d && (h === null ? w.firstBaseUpdate = b : h.next = b, w.lastBaseUpdate = g));
      }
      if (s !== null) {
        var V = o.baseState;
        d = 0, w = b = g = null, h = s;
        do {
          var U = h.lane & -536870913, X = U !== h.lane;
          if (X ? (Ie & U) === U : (i & U) === U) {
            U !== 0 && U === Hf && (uv = !0), w !== null && (w = w.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              U = e;
              var oe = h, ze = t, Mt = a;
              switch (oe.tag) {
                case Ob:
                  if (oe = oe.payload, typeof oe == "function") {
                    $d = !0;
                    var tt = oe.call(
                      Mt,
                      V,
                      ze
                    );
                    if (U.mode & oa) {
                      He(!0);
                      try {
                        oe.call(Mt, V, ze);
                      } finally {
                        He(!1);
                      }
                    }
                    $d = !1, V = tt;
                    break e;
                  }
                  V = oe;
                  break e;
                case av:
                  U.flags = U.flags & -65537 | 128;
                case Rb:
                  if (tt = oe.payload, typeof tt == "function") {
                    if ($d = !0, oe = tt.call(
                      Mt,
                      V,
                      ze
                    ), U.mode & oa) {
                      He(!0);
                      try {
                        tt.call(Mt, V, ze);
                      } finally {
                        He(!1);
                      }
                    }
                    $d = !1;
                  } else oe = tt;
                  if (oe == null) break e;
                  V = Ge({}, V, oe);
                  break e;
                case Mb:
                  Zo = !0;
              }
            }
            U = h.callback, U !== null && (e.flags |= 64, X && (e.flags |= 8192), X = o.callbacks, X === null ? o.callbacks = [U] : X.push(U));
          } else
            X = {
              lane: U,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, w === null ? (b = w = X, g = V) : w = w.next = X, d |= U;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            X = h, h = X.next, X.next = null, o.lastBaseUpdate = X, o.shared.pending = null;
          }
        } while (!0);
        w === null && (g = V), o.baseState = g, o.firstBaseUpdate = b, o.lastBaseUpdate = w, s === null && (o.shared.lanes = 0), $o |= d, e.lanes = d, e.memoizedState = V;
      }
      nv = null;
    }
    function Rs(e, t) {
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
          Rs(a[e], t);
    }
    function Lp(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Rs(a[e], t);
    }
    function Wl(e, t) {
      var a = Di;
      Ae(G0, a, e), Ae(Id, t, e), Di = a | t.baseLanes;
    }
    function Os(e) {
      Ae(G0, Di, e), Ae(
        Id,
        Id.current,
        e
      );
    }
    function en(e) {
      Di = G0.current, Fe(Id, e), Fe(G0, e);
    }
    function Xe() {
      var e = G;
      Pn === null ? Pn = [e] : Pn.push(e);
    }
    function W() {
      var e = G;
      if (Pn !== null && (Hc++, Pn[Hc] !== e)) {
        var t = ne(De);
        if (!Cb.has(t) && (Cb.add(t), Pn !== null)) {
          for (var a = "", i = 0; i <= Hc; i++) {
            var o = Pn[i], s = i === Hc ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += s + `
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
        G,
        typeof e
      );
    }
    function to() {
      var e = ne(De);
      Hb.has(e) || (Hb.add(e), console.error(
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
    function ei(e, t) {
      if (Zy) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          G
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        G,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ta(e[a], t[a])) return !1;
      return !0;
    }
    function ti(e, t, a, i, o, s) {
      ko = s, De = t, Pn = e !== null ? e._debugHookTypes : null, Hc = -1, Zy = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (s = ne(De), iv.has(s) || (iv.add(s), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        s === null ? "An unknown Component" : "<" + s + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, q.H = e !== null && e.memoizedState !== null ? ov : Pn !== null ? wb : cv, jf = s = (t.mode & oa) !== Ht;
      var d = sv(a, i, o);
      if (jf = !1, eh && (d = lo(
        t,
        a,
        i,
        o
      )), s) {
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
      return Ms(e, t), d;
    }
    function Ms(e, t) {
      t._debugHookTypes = Pn, t.dependencies === null ? Uc !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: Uc
      }) : t.dependencies._debugThenableState = Uc, q.H = L0;
      var a = At !== null && At.next !== null;
      if (ko = 0, Pn = G = rl = At = De = null, Hc = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), V0 = !1, Qy = 0, Uc = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Nl || (e = e.dependencies, e !== null && $u(e) && (Nl = !0)), Y0 ? (Y0 = !1, e = !0) : e = !1, e && (t = ne(t) || "Unknown", Ub.has(t) || iv.has(t) || (Ub.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function lo(e, t, a, i) {
      De = e;
      var o = 0;
      do {
        if (eh && (Uc = null), Qy = 0, eh = !1, o >= v2)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, Zy = !1, rl = At = null, e.updateQueue != null) {
          var s = e.updateQueue;
          s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
        }
        Hc = -1, q.H = Nb, s = sv(t, a, i);
      } while (eh);
      return s;
    }
    function Ca() {
      var e = q.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? Ii(t) : t, e = e.useState()[0], (At !== null ? At.memoizedState : null) !== e && (De.flags |= 1024), t;
    }
    function Fl() {
      var e = X0 !== 0;
      return X0 = 0, e;
    }
    function hu(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & wu) !== Ht ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function tn(e) {
      if (V0) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        V0 = !1;
      }
      ko = 0, Pn = rl = At = De = null, Hc = -1, G = null, eh = !1, Qy = X0 = 0, Uc = null;
    }
    function qt() {
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
    function pr() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Ii(e) {
      var t = Qy;
      return Qy += 1, Uc === null && (Uc = Fh()), e = Ma(Uc, e, t), t = De, (rl === null ? t.memoizedState : rl.next) === null && (t = t.alternate, q.H = t !== null && t.memoizedState !== null ? ov : cv), e;
    }
    function xn(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Ii(e);
        if (e.$$typeof === Ya) return Rt(e);
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
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = pr(), De.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || Zy)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = v0;
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
      var i = qt();
      if (a !== void 0) {
        var o = a(t);
        if (jf) {
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
        De,
        e
      ), [i.memoizedState, e];
    }
    function Ua(e) {
      var t = et();
      return Ha(t, At, e);
    }
    function Ha(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = e.baseQueue, s = i.pending;
      if (s !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = s.next, s.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = s, i.pending = null;
      }
      if (s = e.baseState, o === null) e.memoizedState = s;
      else {
        t = o.next;
        var h = d = null, g = null, b = t, w = !1;
        do {
          var V = b.lane & -536870913;
          if (V !== b.lane ? (Ie & V) === V : (ko & V) === V) {
            var U = b.revertLane;
            if (U === 0)
              g !== null && (g = g.next = {
                lane: 0,
                revertLane: 0,
                action: b.action,
                hasEagerState: b.hasEagerState,
                eagerState: b.eagerState,
                next: null
              }), V === Hf && (w = !0);
            else if ((ko & U) === U) {
              b = b.next, U === Hf && (w = !0);
              continue;
            } else
              V = {
                lane: 0,
                revertLane: b.revertLane,
                action: b.action,
                hasEagerState: b.hasEagerState,
                eagerState: b.eagerState,
                next: null
              }, g === null ? (h = g = V, d = s) : g = g.next = V, De.lanes |= U, $o |= U;
            V = b.action, jf && a(s, V), s = b.hasEagerState ? b.eagerState : a(s, V);
          } else
            U = {
              lane: V,
              revertLane: b.revertLane,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }, g === null ? (h = g = U, d = s) : g = g.next = U, De.lanes |= V, $o |= V;
          b = b.next;
        } while (b !== null && b !== t);
        if (g === null ? d = s : g.next = h, !Ta(s, e.memoizedState) && (Nl = !0, w && (a = Fd, a !== null)))
          throw a;
        e.memoizedState = s, e.baseState = d, e.baseQueue = g, i.lastRenderedState = s;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function Pi(e) {
      var t = et(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, o = a.pending, s = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          s = e(s, d.action), d = d.next;
        while (d !== o);
        Ta(s, t.memoizedState) || (Nl = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), a.lastRenderedState = s;
      }
      return [s, i];
    }
    function mu(e, t, a) {
      var i = De, o = qt();
      if (ct) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var s = a();
        Pd || s === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), Pd = !0);
      } else {
        if (s = t(), Pd || (a = t(), Ta(s, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Pd = !0)), Ot === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (Ie & 124) !== 0 || em(i, t, s);
      }
      return o.memoizedState = s, a = { value: s, getSnapshot: t }, o.queue = a, br(
        no.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, En(
        In | El,
        ai(),
        ao.bind(
          null,
          i,
          a,
          s,
          t
        ),
        null
      ), s;
    }
    function Ds(e, t, a) {
      var i = De, o = et(), s = ct;
      if (s) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !Pd) {
        var d = t();
        Ta(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Pd = !0);
      }
      (d = !Ta(
        (At || o).memoizedState,
        a
      )) && (o.memoizedState = a, Nl = !0), o = o.queue;
      var h = no.bind(null, i, o, e);
      if (Pt(2048, El, h, [e]), o.getSnapshot !== t || d || rl !== null && rl.memoizedState.tag & In) {
        if (i.flags |= 2048, En(
          In | El,
          ai(),
          ao.bind(
            null,
            i,
            o,
            a,
            t
          ),
          null
        ), Ot === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        s || (ko & 124) !== 0 || em(i, t, a);
      }
      return a;
    }
    function em(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = De.updateQueue, t === null ? (t = pr(), De.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
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
        return !Ta(e, a);
      } catch {
        return !0;
      }
    }
    function uo(e) {
      var t = Kl(e, 2);
      t !== null && Gt(t, e, 2);
    }
    function Cs(e) {
      var t = qt();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), jf) {
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
    function yu(e) {
      e = Cs(e);
      var t = e.queue, a = so.bind(null, De, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function ln(e) {
      var t = qt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Mr.bind(
        null,
        De,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function pu(e, t) {
      var a = et();
      return An(a, At, e, t);
    }
    function An(e, t, a, i) {
      return e.baseState = a, Ha(
        e,
        At,
        typeof i == "function" ? i : nt
      );
    }
    function gr(e, t) {
      var a = et();
      return At !== null ? An(a, At, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function lm(e, t, a, i, o) {
      if (_s(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var s = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            s.listeners.push(d);
          }
        };
        q.T !== null ? a(!0) : s.isTransition = !1, i(s), a = t.pending, a === null ? (s.next = t.pending = s, io(t, s)) : (s.next = a.next, t.pending = a.next = s);
      }
    }
    function io(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var s = q.T, d = {};
        q.T = d, q.T._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var h = a(o, i), g = q.S;
          g !== null && g(d, h), Us(e, t, h);
        } catch (b) {
          il(e, t, b);
        } finally {
          q.T = s, s === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), Us(e, t, d);
        } catch (b) {
          il(e, t, b);
        }
    }
    function Us(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (a.then(
        function(i) {
          li(e, t, i);
        },
        function(i) {
          return il(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : li(e, t, a);
    }
    function li(e, t, a) {
      t.status = "fulfilled", t.value = a, Hs(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, io(e, a)));
    }
    function il(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, Hs(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function Hs(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function am(e, t) {
      return t;
    }
    function co(e, t) {
      if (ct) {
        var a = Ot.formState;
        if (a !== null) {
          e: {
            var i = De;
            if (ct) {
              if (Kt) {
                t: {
                  for (var o = Kt, s = Ri; o.nodeType !== 8; ) {
                    if (!s) {
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
                  s = o.data, o = s === jv || s === H1 ? o : null;
                }
                if (o) {
                  Kt = Sl(
                    o.nextSibling
                  ), i = o.data === jv;
                  break e;
                }
              }
              gn(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = qt(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: am,
        lastRenderedState: t
      }, a.queue = i, a = so.bind(
        null,
        De,
        i
      ), i.dispatch = a, i = Cs(!1), s = Mr.bind(
        null,
        De,
        !1,
        i.queue
      ), i = qt(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = lm.bind(
        null,
        De,
        o,
        s,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function vr(e) {
      var t = et();
      return Qp(t, At, e);
    }
    function Qp(e, t, a) {
      if (t = Ha(
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
      t = et();
      var o = t.queue, s = o.dispatch;
      return a !== t.memoizedState && (De.flags |= 2048, En(
        In | El,
        ai(),
        It.bind(null, o, a),
        null
      )), [i, s, e];
    }
    function It(e, t) {
      e.action = t;
    }
    function oo(e) {
      var t = et(), a = At;
      if (a !== null)
        return Qp(t, a, e);
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
      }, t = De.updateQueue, t === null && (t = pr(), De.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function ai() {
      return { destroy: void 0, resource: void 0 };
    }
    function ws(e) {
      var t = qt();
      return e = { current: e }, t.memoizedState = e;
    }
    function wa(e, t, a, i) {
      var o = qt();
      i = i === void 0 ? null : i, De.flags |= e, o.memoizedState = En(
        In | t,
        ai(),
        a,
        i
      );
    }
    function Pt(e, t, a, i) {
      var o = et();
      i = i === void 0 ? null : i;
      var s = o.memoizedState.inst;
      At !== null && i !== null && ei(i, At.memoizedState.deps) ? o.memoizedState = En(t, s, a, i) : (De.flags |= e, o.memoizedState = En(
        In | t,
        s,
        a,
        i
      ));
    }
    function br(e, t) {
      (De.mode & wu) !== Ht && (De.mode & pb) === Ht ? wa(276826112, El, e, t) : wa(8390656, El, e, t);
    }
    function Sr(e, t) {
      var a = 4194308;
      return (De.mode & wu) !== Ht && (a |= 134217728), wa(a, Zl, e, t);
    }
    function Zp(e, t) {
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
      (De.mode & wu) !== Ht && (i |= 134217728), wa(
        i,
        Zl,
        Zp.bind(null, t, e),
        a
      );
    }
    function zn(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, Pt(
        4,
        Zl,
        Zp.bind(null, t, e),
        a
      );
    }
    function Ns(e, t) {
      return qt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function ec(e, t) {
      var a = et();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && ei(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function xr(e, t) {
      var a = qt();
      t = t === void 0 ? null : t;
      var i = e();
      if (jf) {
        He(!0);
        try {
          e();
        } finally {
          He(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function ni(e, t) {
      var a = et();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && ei(t, i[1]))
        return i[0];
      if (i = e(), jf) {
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
      var a = qt();
      return zr(a, e, t);
    }
    function js(e, t) {
      var a = et();
      return Bs(
        a,
        At.memoizedState,
        e,
        t
      );
    }
    function Er(e, t) {
      var a = et();
      return At === null ? zr(a, e, t) : Bs(
        a,
        At.memoizedState,
        e,
        t
      );
    }
    function zr(e, t, a) {
      return a === void 0 || (ko & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = t0(), De.lanes |= e, $o |= e, a);
    }
    function Bs(e, t, a, i) {
      return Ta(a, t) ? a : Id.current !== null ? (e = zr(e, a, i), Ta(e, t) || (Nl = !0), e) : (ko & 42) === 0 ? (Nl = !0, e.memoizedState = a) : (e = t0(), De.lanes |= e, $o |= e, t);
    }
    function nm(e, t, a, i, o) {
      var s = Ee.p;
      Ee.p = s !== 0 && s < sn ? s : sn;
      var d = q.T, h = {};
      q.T = h, Mr(e, !1, t, a), h._updatedFibers = /* @__PURE__ */ new Set();
      try {
        var g = o(), b = q.S;
        if (b !== null && b(h, g), g !== null && typeof g == "object" && typeof g.then == "function") {
          var w = Vp(
            g,
            i
          );
          gu(
            e,
            t,
            w,
            ta(e)
          );
        } else
          gu(
            e,
            t,
            i,
            ta(e)
          );
      } catch (V) {
        gu(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: V },
          ta(e)
        );
      } finally {
        Ee.p = s, q.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
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
        kf,
        a === null ? ae : function() {
          return im(e), a(i);
        }
      );
    }
    function um(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: kf,
        baseState: kf,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: nt,
          lastRenderedState: kf
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
      gu(
        e,
        t,
        {},
        ta(e)
      );
    }
    function Rn() {
      var e = Cs(!1);
      return e = nm.bind(
        null,
        De,
        e.queue,
        !0,
        !1
      ), qt().memoizedState = e, [!1, e];
    }
    function Rr() {
      var e = Ua(nt)[0], t = et().memoizedState;
      return [
        typeof e == "boolean" ? e : Ii(e),
        t
      ];
    }
    function Or() {
      var e = Pi(nt)[0], t = et().memoizedState;
      return [
        typeof e == "boolean" ? e : Ii(e),
        t
      ];
    }
    function Il() {
      return Rt(op);
    }
    function On() {
      var e = qt(), t = Ot.identifierPrefix;
      if (ct) {
        var a = Dc, i = Mc;
        a = (i & ~(1 << 32 - Hl(i) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = X0++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = g2++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    }
    function lc() {
      return qt().memoizedState = cm.bind(
        null,
        De
      );
    }
    function cm(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = ta(a);
            e = Sn(i);
            var o = Pa(a, e, i);
            o !== null && (Gt(o, a, i), Pu(o, a, i)), a = zs(), t != null && o !== null && console.error(
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
      ), i = ta(e);
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      _s(e) ? ac(t, o) : (o = Bh(e, t, o, i), o !== null && (Gt(o, e, i), qs(o, t, i))), Ci(e, i);
    }
    function so(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = ta(e), gu(e, t, a, i), Ci(e, i);
    }
    function gu(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (_s(e)) ac(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) {
          var d = q.H;
          q.H = ju;
          try {
            var h = t.lastRenderedState, g = s(h, a);
            if (o.hasEagerState = !0, o.eagerState = g, Ta(g, h))
              return or(e, t, o, 0), Ot === null && Ss(), !1;
          } catch {
          } finally {
            q.H = d;
          }
        }
        if (a = Bh(e, t, o, i), a !== null)
          return Gt(a, e, i), qs(a, t, i), !0;
      }
      return !1;
    }
    function Mr(e, t, a, i) {
      if (q.T === null && Hf === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: Ym(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, _s(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = Bh(
          e,
          a,
          i,
          2
        ), t !== null && Gt(t, e, 2);
      Ci(e, 2);
    }
    function _s(e) {
      var t = e.alternate;
      return e === De || t !== null && t === De;
    }
    function ac(e, t) {
      eh = V0 = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function qs(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, Vc(e, a);
      }
    }
    function cl(e) {
      var t = Qe;
      return e != null && (Qe = t === null ? e : t.concat(e)), t;
    }
    function fo(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var s = i[o];
        if (s !== "children" && s !== "key") {
          t === null && (t = As(e, a.mode, 0), t._debugInfo = Qe, t.return = a), ce(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            s
          );
          break;
        }
      }
    }
    function ro(e) {
      var t = ky;
      return ky += 1, th === null && (th = Fh()), Ma(th, e, t);
    }
    function Na(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function we(e, t) {
      throw t.$$typeof === yf ? Error(
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
      $b[a] || ($b[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
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
    function jt(e, t) {
      var a = ne(e) || "Component";
      Wb[a] || (Wb[a] = !0, t = String(t), e.tag === 3 ? console.error(
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
    function Ys(e) {
      function t(T, x) {
        if (e) {
          var z = T.deletions;
          z === null ? (T.deletions = [x], T.flags |= 16) : z.push(x);
        }
      }
      function a(T, x) {
        if (!e) return null;
        for (; x !== null; )
          t(T, x), x = x.sibling;
        return null;
      }
      function i(T) {
        for (var x = /* @__PURE__ */ new Map(); T !== null; )
          T.key !== null ? x.set(T.key, T) : x.set(T.index, T), T = T.sibling;
        return x;
      }
      function o(T, x) {
        return T = pn(T, x), T.index = 0, T.sibling = null, T;
      }
      function s(T, x, z) {
        return T.index = z, e ? (z = T.alternate, z !== null ? (z = z.index, z < x ? (T.flags |= 67108866, x) : z) : (T.flags |= 67108866, x)) : (T.flags |= 1048576, x);
      }
      function d(T) {
        return e && T.alternate === null && (T.flags |= 67108866), T;
      }
      function h(T, x, z, L) {
        return x === null || x.tag !== 6 ? (x = Ju(
          z,
          T.mode,
          L
        ), x.return = T, x._debugOwner = T, x._debugTask = T._debugTask, x._debugInfo = Qe, x) : (x = o(x, z), x.return = T, x._debugInfo = Qe, x);
      }
      function g(T, x, z, L) {
        var P = z.type;
        return P === Ne ? (x = w(
          T,
          x,
          z.props.children,
          L,
          z.key
        ), fo(z, x, T), x) : x !== null && (x.elementType === P || _p(x, z) || typeof P == "object" && P !== null && P.$$typeof === ba && Jo(P) === x.type) ? (x = o(x, z.props), Na(x, z), x.return = T, x._debugOwner = z._owner, x._debugInfo = Qe, x) : (x = As(z, T.mode, L), Na(x, z), x.return = T, x._debugInfo = Qe, x);
      }
      function b(T, x, z, L) {
        return x === null || x.tag !== 4 || x.stateNode.containerInfo !== z.containerInfo || x.stateNode.implementation !== z.implementation ? (x = Gh(z, T.mode, L), x.return = T, x._debugInfo = Qe, x) : (x = o(x, z.children || []), x.return = T, x._debugInfo = Qe, x);
      }
      function w(T, x, z, L, P) {
        return x === null || x.tag !== 7 ? (x = ku(
          z,
          T.mode,
          L,
          P
        ), x.return = T, x._debugOwner = T, x._debugTask = T._debugTask, x._debugInfo = Qe, x) : (x = o(x, z), x.return = T, x._debugInfo = Qe, x);
      }
      function V(T, x, z) {
        if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
          return x = Ju(
            "" + x,
            T.mode,
            z
          ), x.return = T, x._debugOwner = T, x._debugTask = T._debugTask, x._debugInfo = Qe, x;
        if (typeof x == "object" && x !== null) {
          switch (x.$$typeof) {
            case gi:
              return z = As(
                x,
                T.mode,
                z
              ), Na(z, x), z.return = T, T = cl(x._debugInfo), z._debugInfo = Qe, Qe = T, z;
            case xc:
              return x = Gh(
                x,
                T.mode,
                z
              ), x.return = T, x._debugInfo = Qe, x;
            case ba:
              var L = cl(x._debugInfo);
              return x = Jo(x), T = V(T, x, z), Qe = L, T;
          }
          if (Me(x) || ot(x))
            return z = ku(
              x,
              T.mode,
              z,
              null
            ), z.return = T, z._debugOwner = T, z._debugTask = T._debugTask, T = cl(x._debugInfo), z._debugInfo = Qe, Qe = T, z;
          if (typeof x.then == "function")
            return L = cl(x._debugInfo), T = V(
              T,
              ro(x),
              z
            ), Qe = L, T;
          if (x.$$typeof === Ya)
            return V(
              T,
              Es(T, x),
              z
            );
          we(T, x);
        }
        return typeof x == "function" && ft(T, x), typeof x == "symbol" && jt(T, x), null;
      }
      function U(T, x, z, L) {
        var P = x !== null ? x.key : null;
        if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
          return P !== null ? null : h(T, x, "" + z, L);
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case gi:
              return z.key === P ? (P = cl(z._debugInfo), T = g(
                T,
                x,
                z,
                L
              ), Qe = P, T) : null;
            case xc:
              return z.key === P ? b(T, x, z, L) : null;
            case ba:
              return P = cl(z._debugInfo), z = Jo(z), T = U(
                T,
                x,
                z,
                L
              ), Qe = P, T;
          }
          if (Me(z) || ot(z))
            return P !== null ? null : (P = cl(z._debugInfo), T = w(
              T,
              x,
              z,
              L,
              null
            ), Qe = P, T);
          if (typeof z.then == "function")
            return P = cl(z._debugInfo), T = U(
              T,
              x,
              ro(z),
              L
            ), Qe = P, T;
          if (z.$$typeof === Ya)
            return U(
              T,
              x,
              Es(T, z),
              L
            );
          we(T, z);
        }
        return typeof z == "function" && ft(T, z), typeof z == "symbol" && jt(T, z), null;
      }
      function X(T, x, z, L, P) {
        if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
          return T = T.get(z) || null, h(x, T, "" + L, P);
        if (typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case gi:
              return z = T.get(
                L.key === null ? z : L.key
              ) || null, T = cl(L._debugInfo), x = g(
                x,
                z,
                L,
                P
              ), Qe = T, x;
            case xc:
              return T = T.get(
                L.key === null ? z : L.key
              ) || null, b(x, T, L, P);
            case ba:
              var je = cl(L._debugInfo);
              return L = Jo(L), x = X(
                T,
                x,
                z,
                L,
                P
              ), Qe = je, x;
          }
          if (Me(L) || ot(L))
            return z = T.get(z) || null, T = cl(L._debugInfo), x = w(
              x,
              z,
              L,
              P,
              null
            ), Qe = T, x;
          if (typeof L.then == "function")
            return je = cl(L._debugInfo), x = X(
              T,
              x,
              z,
              ro(L),
              P
            ), Qe = je, x;
          if (L.$$typeof === Ya)
            return X(
              T,
              x,
              z,
              Es(x, L),
              P
            );
          we(x, L);
        }
        return typeof L == "function" && ft(x, L), typeof L == "symbol" && jt(x, L), null;
      }
      function oe(T, x, z, L) {
        if (typeof z != "object" || z === null) return L;
        switch (z.$$typeof) {
          case gi:
          case xc:
            ee(T, x, z);
            var P = z.key;
            if (typeof P != "string") break;
            if (L === null) {
              L = /* @__PURE__ */ new Set(), L.add(P);
              break;
            }
            if (!L.has(P)) {
              L.add(P);
              break;
            }
            ce(x, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                P
              );
            });
            break;
          case ba:
            z = Jo(z), oe(T, x, z, L);
        }
        return L;
      }
      function ze(T, x, z, L) {
        for (var P = null, je = null, se = null, Be = x, Ye = x = 0, wt = null; Be !== null && Ye < z.length; Ye++) {
          Be.index > Ye ? (wt = Be, Be = null) : wt = Be.sibling;
          var al = U(
            T,
            Be,
            z[Ye],
            L
          );
          if (al === null) {
            Be === null && (Be = wt);
            break;
          }
          P = oe(
            T,
            al,
            z[Ye],
            P
          ), e && Be && al.alternate === null && t(T, Be), x = s(al, x, Ye), se === null ? je = al : se.sibling = al, se = al, Be = wt;
        }
        if (Ye === z.length)
          return a(T, Be), ct && ki(T, Ye), je;
        if (Be === null) {
          for (; Ye < z.length; Ye++)
            Be = V(T, z[Ye], L), Be !== null && (P = oe(
              T,
              Be,
              z[Ye],
              P
            ), x = s(
              Be,
              x,
              Ye
            ), se === null ? je = Be : se.sibling = Be, se = Be);
          return ct && ki(T, Ye), je;
        }
        for (Be = i(Be); Ye < z.length; Ye++)
          wt = X(
            Be,
            T,
            Ye,
            z[Ye],
            L
          ), wt !== null && (P = oe(
            T,
            wt,
            z[Ye],
            P
          ), e && wt.alternate !== null && Be.delete(
            wt.key === null ? Ye : wt.key
          ), x = s(
            wt,
            x,
            Ye
          ), se === null ? je = wt : se.sibling = wt, se = wt);
        return e && Be.forEach(function(qc) {
          return t(T, qc);
        }), ct && ki(T, Ye), je;
      }
      function Mt(T, x, z, L) {
        if (z == null)
          throw Error("An iterable object provided no iterator.");
        for (var P = null, je = null, se = x, Be = x = 0, Ye = null, wt = null, al = z.next(); se !== null && !al.done; Be++, al = z.next()) {
          se.index > Be ? (Ye = se, se = null) : Ye = se.sibling;
          var qc = U(T, se, al.value, L);
          if (qc === null) {
            se === null && (se = Ye);
            break;
          }
          wt = oe(
            T,
            qc,
            al.value,
            wt
          ), e && se && qc.alternate === null && t(T, se), x = s(qc, x, Be), je === null ? P = qc : je.sibling = qc, je = qc, se = Ye;
        }
        if (al.done)
          return a(T, se), ct && ki(T, Be), P;
        if (se === null) {
          for (; !al.done; Be++, al = z.next())
            se = V(T, al.value, L), se !== null && (wt = oe(
              T,
              se,
              al.value,
              wt
            ), x = s(
              se,
              x,
              Be
            ), je === null ? P = se : je.sibling = se, je = se);
          return ct && ki(T, Be), P;
        }
        for (se = i(se); !al.done; Be++, al = z.next())
          Ye = X(
            se,
            T,
            Be,
            al.value,
            L
          ), Ye !== null && (wt = oe(
            T,
            Ye,
            al.value,
            wt
          ), e && Ye.alternate !== null && se.delete(
            Ye.key === null ? Be : Ye.key
          ), x = s(
            Ye,
            x,
            Be
          ), je === null ? P = Ye : je.sibling = Ye, je = Ye);
        return e && se.forEach(function(Q2) {
          return t(T, Q2);
        }), ct && ki(T, Be), P;
      }
      function tt(T, x, z, L) {
        if (typeof z == "object" && z !== null && z.type === Ne && z.key === null && (fo(z, null, T), z = z.props.children), typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case gi:
              var P = cl(z._debugInfo);
              e: {
                for (var je = z.key; x !== null; ) {
                  if (x.key === je) {
                    if (je = z.type, je === Ne) {
                      if (x.tag === 7) {
                        a(
                          T,
                          x.sibling
                        ), L = o(
                          x,
                          z.props.children
                        ), L.return = T, L._debugOwner = z._owner, L._debugInfo = Qe, fo(z, L, T), T = L;
                        break e;
                      }
                    } else if (x.elementType === je || _p(
                      x,
                      z
                    ) || typeof je == "object" && je !== null && je.$$typeof === ba && Jo(je) === x.type) {
                      a(
                        T,
                        x.sibling
                      ), L = o(x, z.props), Na(L, z), L.return = T, L._debugOwner = z._owner, L._debugInfo = Qe, T = L;
                      break e;
                    }
                    a(T, x);
                    break;
                  } else t(T, x);
                  x = x.sibling;
                }
                z.type === Ne ? (L = ku(
                  z.props.children,
                  T.mode,
                  L,
                  z.key
                ), L.return = T, L._debugOwner = T, L._debugTask = T._debugTask, L._debugInfo = Qe, fo(z, L, T), T = L) : (L = As(
                  z,
                  T.mode,
                  L
                ), Na(L, z), L.return = T, L._debugInfo = Qe, T = L);
              }
              return T = d(T), Qe = P, T;
            case xc:
              e: {
                for (P = z, z = P.key; x !== null; ) {
                  if (x.key === z)
                    if (x.tag === 4 && x.stateNode.containerInfo === P.containerInfo && x.stateNode.implementation === P.implementation) {
                      a(
                        T,
                        x.sibling
                      ), L = o(
                        x,
                        P.children || []
                      ), L.return = T, T = L;
                      break e;
                    } else {
                      a(T, x);
                      break;
                    }
                  else t(T, x);
                  x = x.sibling;
                }
                L = Gh(
                  P,
                  T.mode,
                  L
                ), L.return = T, T = L;
              }
              return d(T);
            case ba:
              return P = cl(z._debugInfo), z = Jo(z), T = tt(
                T,
                x,
                z,
                L
              ), Qe = P, T;
          }
          if (Me(z))
            return P = cl(z._debugInfo), T = ze(
              T,
              x,
              z,
              L
            ), Qe = P, T;
          if (ot(z)) {
            if (P = cl(z._debugInfo), je = ot(z), typeof je != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var se = je.call(z);
            return se === z ? (T.tag !== 0 || Object.prototype.toString.call(T.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(se) !== "[object Generator]") && (Jb || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), Jb = !0) : z.entries !== je || rv || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), rv = !0), T = Mt(
              T,
              x,
              se,
              L
            ), Qe = P, T;
          }
          if (typeof z.then == "function")
            return P = cl(z._debugInfo), T = tt(
              T,
              x,
              ro(z),
              L
            ), Qe = P, T;
          if (z.$$typeof === Ya)
            return tt(
              T,
              x,
              Es(T, z),
              L
            );
          we(T, z);
        }
        return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (P = "" + z, x !== null && x.tag === 6 ? (a(
          T,
          x.sibling
        ), L = o(x, P), L.return = T, T = L) : (a(T, x), L = Ju(
          P,
          T.mode,
          L
        ), L.return = T, L._debugOwner = T, L._debugTask = T._debugTask, L._debugInfo = Qe, T = L), d(T)) : (typeof z == "function" && ft(T, z), typeof z == "symbol" && jt(T, z), a(T, x));
      }
      return function(T, x, z, L) {
        var P = Qe;
        Qe = null;
        try {
          ky = 0;
          var je = tt(
            T,
            x,
            z,
            L
          );
          return th = null, je;
        } catch (wt) {
          if (wt === Xy || wt === q0) throw wt;
          var se = pe(29, wt, null, T.mode);
          se.lanes = L, se.return = T;
          var Be = se._debugInfo = Qe;
          if (se._debugOwner = T._debugOwner, se._debugTask = T._debugTask, Be != null) {
            for (var Ye = Be.length - 1; 0 <= Ye; Ye--)
              if (typeof Be[Ye].stack == "string") {
                se._debugOwner = Be[Ye], se._debugTask = Be[Ye].debugTask;
                break;
              }
          }
          return se;
        } finally {
          Qe = P;
        }
      };
    }
    function ma(e) {
      var t = e.alternate;
      Ae(
        zl,
        zl.current & ah,
        e
      ), Ae(eu, e, e), Mi === null && (t === null || Id.current !== null || t.memoizedState !== null) && (Mi = e);
    }
    function ui(e) {
      if (e.tag === 22) {
        if (Ae(zl, zl.current, e), Ae(eu, e, e), Mi === null) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (Mi = e);
        }
      } else an(e);
    }
    function an(e) {
      Ae(zl, zl.current, e), Ae(
        eu,
        eu.current,
        e
      );
    }
    function ya(e) {
      Fe(eu, e), Mi === e && (Mi = null), Fe(zl, e);
    }
    function vu(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || a.data === jc || Gn(a)))
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
    function sm(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        o1.has(t) || (o1.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function Bt(e, t, a, i) {
      var o = e.memoizedState, s = a(i, o);
      if (e.mode & oa) {
        He(!0);
        try {
          s = a(i, o);
        } finally {
          He(!1);
        }
      }
      s === void 0 && (t = qe(t) || "Component", n1.has(t) || (n1.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = s == null ? o : Ge({}, o, s), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Dr(e, t, a, i, o, s, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          s,
          d
        ), e.mode & oa) {
          He(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              s,
              d
            );
          } finally {
            He(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          qe(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !bs(a, i) || !bs(o, s) : !0;
    }
    function Cr(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = ne(e) || "Component", Pb.has(e) || (Pb.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), dv.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function ii(e, t) {
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
    function fm(e) {
      hv(e), console.warn(
        `%s

%s
`,
        nh ? "An error occurred in the <" + nh + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function kp(e) {
      var t = nh ? "The above error occurred in the <" + nh + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((mv || "Anonymous") + ".");
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
          G1 + e[0],
          V1,
          og + i + og,
          X1
        ) : e.splice(
          0,
          0,
          G1,
          V1,
          og + i + og,
          X1
        ), e.unshift(console), i = X2.apply(console.error, e), i();
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
    function Ur(e) {
      hv(e);
    }
    function ho(e, t) {
      try {
        nh = t.source ? ne(t.source) : null, mv = null;
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
        nh = a.source ? ne(a.source) : null, mv = ne(t);
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
      return a = Sn(a), a.tag = av, a.payload = { element: null }, a.callback = function() {
        ce(t.source, ho, e, t);
      }, a;
    }
    function Yt(e) {
      return e = Sn(e), e.tag = av, e;
    }
    function Gs(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var s = i.value;
        e.payload = function() {
          return o(s);
        }, e.callback = function() {
          qp(a), ce(
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
        qp(a), ce(
          i.source,
          Hr,
          t,
          a,
          i
        ), typeof o != "function" && (Fo === null ? Fo = /* @__PURE__ */ new Set([this]) : Fo.add(this)), b2(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          ne(a) || "Unknown"
        );
      });
    }
    function Vs(e, t, a, i, o) {
      if (a.flags |= 32768, Zt && To(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && pl(
          t,
          a,
          o,
          !0
        ), ct && (Cc = !0), a = eu.current, a !== null) {
          switch (a.tag) {
            case 13:
              return Mi === null ? Ir() : a.alternate === null && $t === Nc && ($t = vv), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === lv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), jm(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === lv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), jm(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return jm(e, i, o), Ir(), !1;
      }
      if (ct)
        return Cc = !0, t = eu.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== Ig && Wc(
          da(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== Ig && Wc(
          da(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = da(i, a), o = Dl(
          e.stateNode,
          i,
          o
        ), Ic(e, o), $t !== Bf && ($t = oh)), !1;
      var s = da(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (ep === null ? ep = [s] : ep.push(s), $t !== Bf && ($t = oh), t === null) return !0;
      i = da(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = Dl(
              a.stateNode,
              i,
              e
            ), Ic(a, e), !1;
          case 1:
            if (t = a.type, s = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (Fo === null || !Fo.has(s))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Yt(o), Gs(
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
      t.child = e === null ? Fb(t, null, a, i) : lh(
        t,
        e.child,
        a,
        i
      );
    }
    function wr(e, t, a, i, o) {
      a = a.render;
      var s = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return Wu(t), _t(t), i = ti(
        e,
        t,
        a,
        d,
        s,
        o
      ), h = Fl(), hl(), e !== null && !Nl ? (hu(e, t, o), Dn(e, t, o)) : (ct && h && rr(t), t.flags |= 1, Jt(e, t, i, o), t.child);
    }
    function Mn(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        return typeof s == "function" && !qh(s) && s.defaultProps === void 0 && a.compare === null ? (a = Zi(s), t.tag = 15, t.type = a, _r(t, s), Xs(
          e,
          t,
          a,
          i,
          o
        )) : (e = fr(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (s = e.child, !Lr(e, o)) {
        var d = s.memoizedProps;
        if (a = a.compare, a = a !== null ? a : bs, a(d, i) && e.ref === t.ref)
          return Dn(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = pn(s, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Xs(e, t, a, i, o) {
      if (e !== null) {
        var s = e.memoizedProps;
        if (bs(s, i) && e.ref === t.ref && t.type === e.type)
          if (Nl = !1, t.pendingProps = i = s, Lr(e, o))
            (e.flags & 131072) !== 0 && (Nl = !0);
          else
            return t.lanes = e.lanes, Dn(e, t, o);
      }
      return Br(
        e,
        t,
        a,
        i,
        o
      );
    }
    function Nr(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (i = s !== null ? s.baseLanes | a : a, e !== null) {
            for (o = t.child = e.child, s = 0; o !== null; )
              s = s | o.lanes | o.childLanes, o = o.sibling;
            t.childLanes = s & ~i;
          } else t.childLanes = 0, t.child = null;
          return jr(
            e,
            t,
            i,
            a
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && yr(
            t,
            s !== null ? s.cachePool : null
          ), s !== null ? Wl(t, s) : Os(t), ui(t);
        else
          return t.lanes = t.childLanes = 536870912, jr(
            e,
            t,
            s !== null ? s.baseLanes | a : a,
            a
          );
      } else
        s !== null ? (yr(t, s.cachePool), Wl(t, s), an(t), t.memoizedState = null) : (e !== null && yr(t, null), Os(t), an(t));
      return Jt(e, t, o, a), t.child;
    }
    function jr(e, t, a, i) {
      var o = Wh();
      return o = o === null ? null : {
        parent: Al._currentValue,
        pool: o
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: o
      }, e !== null && yr(t, null), Os(t), ui(t), e !== null && pl(e, t, i, !0), null;
    }
    function Ls(e, t) {
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
    function Br(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var s = qe(a) || "Unknown";
        f1[s] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          s,
          s
        ), f1[s] = !0);
      }
      return t.mode & oa && Nu.recordLegacyContextWarning(
        t,
        null
      ), e === null && (_r(t, t.type), a.contextTypes && (s = qe(a) || "Unknown", d1[s] || (d1[s] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        s
      )))), Wu(t), _t(t), a = ti(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = Fl(), hl(), e !== null && !Nl ? (hu(e, t, o), Dn(e, t, o)) : (ct && i && rr(t), t.flags |= 1, Jt(e, t, a, o), t.child);
    }
    function rm(e, t, a, i, o, s) {
      return Wu(t), _t(t), Hc = -1, Zy = e !== null && e.type !== t.type, t.updateQueue = null, a = lo(
        t,
        i,
        a,
        o
      ), Ms(e, t), i = Fl(), hl(), e !== null && !Nl ? (hu(e, t, s), Dn(e, t, s)) : (ct && i && rr(t), t.flags |= 1, Jt(e, t, a, s), t.child);
    }
    function dm(e, t, a, i, o) {
      switch (F(t)) {
        case !1:
          var s = t.stateNode, d = new t.type(
            t.memoizedProps,
            s.context
          ).state;
          s.updater.enqueueSetState(s, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, s = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = Ot, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Yt(h), Gs(
            h,
            d,
            t,
            da(s, t)
          ), Ic(t, h);
      }
      if (Wu(t), t.stateNode === null) {
        if (d = Qo, s = a.contextType, "contextType" in a && s !== null && (s === void 0 || s.$$typeof !== Ya) && !c1.has(a) && (c1.add(a), h = s === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof s != "object" ? " However, it is set to a " + typeof s + "." : s.$$typeof === zd ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(s).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          qe(a) || "Component",
          h
        )), typeof s == "object" && s !== null && (d = Rt(s)), s = new a(i, d), t.mode & oa) {
          He(!0);
          try {
            s = new a(i, d);
          } finally {
            He(!1);
          }
        }
        if (d = t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = dv, t.stateNode = s, s._reactInternals = t, s._reactInternalInstance = Ib, typeof a.getDerivedStateFromProps == "function" && d === null && (d = qe(a) || "Component", e1.has(d) || (e1.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          s.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function") {
          var g = h = d = null;
          if (typeof s.componentWillMount == "function" && s.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof s.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof s.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof s.componentWillUpdate == "function" && s.componentWillUpdate.__suppressDeprecationWarning !== !0 ? g = "componentWillUpdate" : typeof s.UNSAFE_componentWillUpdate == "function" && (g = "UNSAFE_componentWillUpdate"), d !== null || h !== null || g !== null) {
            s = qe(a) || "Component";
            var b = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            l1.has(s) || (l1.add(s), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              s,
              b,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              g !== null ? `
  ` + g : ""
            ));
          }
        }
        s = t.stateNode, d = qe(a) || "Component", s.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !s.getInitialState || s.getInitialState.isReactClassApproved || s.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), s.getDefaultProps && !s.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), s.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !i1.has(a) && (i1.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !u1.has(a) && (u1.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof s.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof s.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          qe(a) || "A pure component"
        ), typeof s.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof s.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof s.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof s.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = s.props !== i, s.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), s.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof s.getSnapshotBeforeUpdate != "function" || typeof s.componentDidUpdate == "function" || t1.has(a) || (t1.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          qe(a)
        )), typeof s.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof s.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = s.state) && (typeof h != "object" || Me(h)) && console.error("%s.state: must be set to an object or null", d), typeof s.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), s = t.stateNode, s.props = i, s.state = t.memoizedState, s.refs = {}, $l(t), d = a.contextType, s.context = typeof d == "object" && d !== null ? Rt(d) : Qo, s.state === i && (d = qe(a) || "Component", a1.has(d) || (a1.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & oa && Nu.recordLegacyContextWarning(
          t,
          s
        ), Nu.recordUnsafeLifecycleWarnings(
          t,
          s
        ), s.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (Bt(
          t,
          a,
          d,
          i
        ), s.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (d = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), d !== s.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          ne(t) || "Component"
        ), dv.enqueueReplaceState(
          s,
          s.state,
          null
        )), Pc(t, i, s, o), Tn(), s.state = t.memoizedState), typeof s.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & wu) !== Ht && (t.flags |= 134217728), s = !0;
      } else if (e === null) {
        s = t.stateNode;
        var w = t.memoizedProps;
        h = ii(a, w), s.props = h;
        var V = s.context;
        g = a.contextType, d = Qo, typeof g == "object" && g !== null && (d = Rt(g)), b = a.getDerivedStateFromProps, g = typeof b == "function" || typeof s.getSnapshotBeforeUpdate == "function", w = t.pendingProps !== w, g || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (w || V !== d) && Cr(
          t,
          s,
          i,
          d
        ), Zo = !1;
        var U = t.memoizedState;
        s.state = U, Pc(t, i, s, o), Tn(), V = t.memoizedState, w || U !== V || Zo ? (typeof b == "function" && (Bt(
          t,
          a,
          b,
          i
        ), V = t.memoizedState), (h = Zo || Dr(
          t,
          a,
          h,
          i,
          U,
          V,
          d
        )) ? (g || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & wu) !== Ht && (t.flags |= 134217728)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & wu) !== Ht && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = V), s.props = i, s.state = V, s.context = d, s = h) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & wu) !== Ht && (t.flags |= 134217728), s = !1);
      } else {
        s = t.stateNode, Iu(e, t), d = t.memoizedProps, g = ii(a, d), s.props = g, b = t.pendingProps, U = s.context, V = a.contextType, h = Qo, typeof V == "object" && V !== null && (h = Rt(V)), w = a.getDerivedStateFromProps, (V = typeof w == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (d !== b || U !== h) && Cr(
          t,
          s,
          i,
          h
        ), Zo = !1, U = t.memoizedState, s.state = U, Pc(t, i, s, o), Tn();
        var X = t.memoizedState;
        d !== b || U !== X || Zo || e !== null && e.dependencies !== null && $u(e.dependencies) ? (typeof w == "function" && (Bt(
          t,
          a,
          w,
          i
        ), X = t.memoizedState), (g = Zo || Dr(
          t,
          a,
          g,
          i,
          U,
          X,
          h
        ) || e !== null && e.dependencies !== null && $u(e.dependencies)) ? (V || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, X, h), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
          i,
          X,
          h
        )), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || d === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = X), s.props = i, s.state = X, s.context = h, s = g) : (typeof s.componentDidUpdate != "function" || d === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), s = !1);
      }
      if (h = s, Ls(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, ss(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, Xa = -1;
        else {
          if (_t(t), a = _b(h), t.mode & oa) {
            He(!0);
            try {
              _b(h);
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
      return o = t.stateNode, s && o.props !== i && (uh || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        ne(t) || "a component"
      ), uh = !0), e;
    }
    function hm(e, t, a, i) {
      return Ki(), t.flags |= 256, Jt(e, t, a, i), t.child;
    }
    function _r(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = qe(t) || "Unknown", h1[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), h1[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = qe(t) || "Unknown", r1[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), r1[t] = !0));
    }
    function Qs(e) {
      return { baseLanes: e, cachePool: Xp() };
    }
    function qr(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= dn), e;
    }
    function Jp(e, t, a) {
      var i, o = t.pendingProps;
      Z(t) && (t.flags |= 128);
      var s = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (zl.current & Jy) !== 0), i && (s = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (ct) {
          if (s ? ma(t) : an(t), ct) {
            var h = Kt, g;
            if (!(g = !h)) {
              e: {
                var b = h;
                for (g = Ri; b.nodeType !== 8; ) {
                  if (!g) {
                    g = null;
                    break e;
                  }
                  if (b = Sl(b.nextSibling), b === null) {
                    g = null;
                    break e;
                  }
                }
                g = b;
              }
              g !== null ? ($a(), t.memoizedState = {
                dehydrated: g,
                treeContext: Df !== null ? { id: Mc, overflow: Dc } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, b = pe(18, null, null, Ht), b.stateNode = g, b.return = t, t.child = b, xa = t, Kt = null, g = !0) : g = !1, g = !g;
            }
            g && (Vh(
              t,
              h
            ), gn(t));
          }
          if (h = t.memoizedState, h !== null && (h = h.dehydrated, h !== null))
            return Gn(h) ? t.lanes = 32 : t.lanes = 536870912, null;
          ya(t);
        }
        return h = o.children, o = o.fallback, s ? (an(t), s = t.mode, h = Zs(
          {
            mode: "hidden",
            children: h
          },
          s
        ), o = ku(
          o,
          s,
          a,
          null
        ), h.return = t, o.return = t, h.sibling = o, t.child = h, s = t.child, s.memoizedState = Qs(a), s.childLanes = qr(
          e,
          i,
          a
        ), t.memoizedState = pv, o) : (ma(t), Yr(
          t,
          h
        ));
      }
      var w = e.memoizedState;
      if (w !== null && (h = w.dehydrated, h !== null)) {
        if (d)
          t.flags & 256 ? (ma(t), t.flags &= -257, t = Gr(
            e,
            t,
            a
          )) : t.memoizedState !== null ? (an(t), t.child = e.child, t.flags |= 128, t = null) : (an(t), s = o.fallback, h = t.mode, o = Zs(
            {
              mode: "visible",
              children: o.children
            },
            h
          ), s = ku(
            s,
            h,
            a,
            null
          ), s.flags |= 2, o.return = t, s.return = t, o.sibling = s, t.child = o, lh(
            t,
            e.child,
            null,
            a
          ), o = t.child, o.memoizedState = Qs(a), o.childLanes = qr(
            e,
            i,
            a
          ), t.memoizedState = pv, t = s);
        else if (ma(t), ct && console.error(
          "We should not be hydrating here. This is a bug in React. Please file a bug."
        ), Gn(h)) {
          if (i = h.nextSibling && h.nextSibling.dataset, i) {
            g = i.dgst;
            var V = i.msg;
            b = i.stck;
            var U = i.cstck;
          }
          h = V, i = g, o = b, g = s = U, s = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), s.stack = o || "", s.digest = i, i = g === void 0 ? null : g, o = {
            value: s,
            source: null,
            stack: i
          }, typeof i == "string" && Wg.set(
            s,
            o
          ), Wc(o), t = Gr(
            e,
            t,
            a
          );
        } else if (Nl || pl(
          e,
          t,
          a,
          !1
        ), i = (a & e.childLanes) !== 0, Nl || i) {
          if (i = Ot, i !== null && (o = a & -a, o = (o & 42) !== 0 ? 1 : Bl(
            o
          ), o = (o & (i.suspendedLanes | a)) !== 0 ? 0 : o, o !== 0 && o !== w.retryLane))
            throw w.retryLane = o, Kl(
              e,
              o
            ), Gt(
              i,
              e,
              o
            ), s1;
          h.data === jc || Ir(), t = Gr(
            e,
            t,
            a
          );
        } else
          h.data === jc ? (t.flags |= 192, t.child = e.child, t = null) : (e = w.treeContext, Kt = Sl(
            h.nextSibling
          ), xa = t, ct = !0, Cf = null, Cc = !1, Wn = null, Ri = !1, e !== null && ($a(), Kn[$n++] = Mc, Kn[$n++] = Dc, Kn[$n++] = Df, Mc = e.id, Dc = e.overflow, Df = t), t = Yr(
            t,
            o.children
          ), t.flags |= 4096);
        return t;
      }
      return s ? (an(t), s = o.fallback, h = t.mode, g = e.child, b = g.sibling, o = pn(
        g,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = g.subtreeFlags & 65011712, b !== null ? s = pn(
        b,
        s
      ) : (s = ku(
        s,
        h,
        a,
        null
      ), s.flags |= 2), s.return = t, o.return = t, o.sibling = s, t.child = o, o = s, s = t.child, h = e.child.memoizedState, h === null ? h = Qs(a) : (g = h.cachePool, g !== null ? (b = Al._currentValue, g = g.parent !== b ? { parent: b, pool: b } : g) : g = Xp(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: g
      }), s.memoizedState = h, s.childLanes = qr(
        e,
        i,
        a
      ), t.memoizedState = pv, o) : (ma(t), a = e.child, e = a.sibling, a = pn(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function Yr(e, t) {
      return t = Zs(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function Zs(e, t) {
      return e = pe(22, e, null, t), e.lanes = 0, e.stateNode = {
        _visibility: C0,
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
      var a = Me(e);
      return e = !a && typeof ot(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function Xr(e, t, a, i, o) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = o);
    }
    function ym(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, s = i.tail;
      if (i = i.children, o !== void 0 && o !== "forwards" && o !== "backwards" && o !== "together" && !m1[o])
        if (m1[o] = !0, typeof o == "string")
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
      s === void 0 || yv[s] || (s !== "collapsed" && s !== "hidden" ? (yv[s] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
        s
      )) : o !== "forwards" && o !== "backwards" && (yv[s] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        s
      )));
      e: if ((o === "forwards" || o === "backwards") && i !== void 0 && i !== null && i !== !1)
        if (Me(i)) {
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
            e = a.alternate, e !== null && vu(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), Xr(
            t,
            !1,
            o,
            a,
            s
          );
          break;
        case "backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && vu(e) === null) {
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
            s
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
      if (e !== null && (t.dependencies = e.dependencies), Xa = -1, $o |= t.lanes, (a & t.childLanes) === 0)
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
        for (e = t.child, a = pn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = pn(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function Lr(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && $u(e)));
    }
    function Ug(e, t, a) {
      switch (t.tag) {
        case 3:
          Dt(
            t,
            t.stateNode.containerInfo
          ), Ku(
            t,
            Al,
            e.memoizedState.cache
          ), Ki();
          break;
        case 27:
        case 5:
          J(t);
          break;
        case 4:
          Dt(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          Ku(
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
            return i.dehydrated !== null ? (ma(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Jp(
              e,
              t,
              a
            ) : (ma(t), e = Dn(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          ma(t);
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
          Ku(
            t,
            Al,
            e.memoizedState.cache
          );
      }
      return Dn(e, t, a);
    }
    function Qr(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = fr(
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
          Nl = !0;
        else {
          if (!Lr(e, a) && (t.flags & 128) === 0)
            return Nl = !1, Ug(
              e,
              t,
              a
            );
          Nl = (e.flags & 131072) !== 0;
        }
      else
        Nl = !1, (i = ct) && ($a(), i = (t.flags & 1048576) !== 0), i && (i = t.index, $a(), Yp(t, H0, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = Jo(t.elementType), t.type = e, typeof e == "function")
            qh(e) ? (i = ii(
              e,
              i
            ), t.tag = 1, t.type = e = Zi(e), t = dm(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, _r(t, e), t.type = e = Zi(e), t = Br(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === Ru) {
                t.tag = 11, t.type = e = _h(e), t = wr(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === pf) {
                t.tag = 14, t = Mn(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === ba && (t = " Did you wrap a component in React.lazy() more than once?"), e = qe(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return Br(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = ii(
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
            if (Dt(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var s = t.memoizedState;
            o = s.element, Iu(e, t), Pc(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, Ku(t, Al, i), i !== s.cache && Jh(
              t,
              [Al],
              a,
              !0
            ), Tn(), i = d.element, s.isDehydrated)
              if (s = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
                t = hm(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = da(
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
                for (Kt = Sl(e.firstChild), xa = t, ct = !0, Cf = null, Cc = !1, Wn = null, Ri = !0, e = Fb(
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
          return Ls(e, t), e === null ? (e = zu(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = e : ct || (e = t.type, a = t.pendingProps, i = st(
            Xn.current
          ), i = Ke(
            i
          ).createElement(e), i[wl] = t, i[ia] = a, Xt(i, e, a), nl(i), t.stateNode = i) : t.memoizedState = zu(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return J(t), e === null && ct && (i = st(Xn.current), o = E(), i = t.stateNode = ey(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), Cc || (o = xt(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (Wa(t, 0).serverProps = o)), xa = t, Ri = !0, o = Kt, Yn(t.type) ? (Yv = o, Kt = Sl(
            i.firstChild
          )) : Kt = o), Jt(
            e,
            t,
            t.pendingProps.children,
            a
          ), Ls(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && ct && (s = E(), i = tr(
            t.type,
            s.ancestorInfo
          ), o = Kt, (d = !o) || (d = hi(
            o,
            t.type,
            t.pendingProps,
            Ri
          ), d !== null ? (t.stateNode = d, Cc || (s = xt(
            d,
            t.type,
            t.pendingProps,
            s
          ), s !== null && (Wa(t, 0).serverProps = s)), xa = t, Kt = Sl(
            d.firstChild
          ), Ri = !1, s = !0) : s = !1, d = !s), d && (i && Vh(t, o), gn(t))), J(t), o = t.type, s = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = s.children, qn(o, s) ? i = null : d !== null && qn(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = ti(
            e,
            t,
            Ca,
            null,
            null,
            a
          ), op._currentValue = o), Ls(e, t), Jt(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && ct && (e = t.pendingProps, a = E(), i = a.ancestorInfo.current, e = i != null ? ys(
            e,
            i.tag,
            a.ancestorInfo.implicitRootScope
          ) : !0, a = Kt, (i = !a) || (i = bl(
            a,
            t.pendingProps,
            Ri
          ), i !== null ? (t.stateNode = i, xa = t, Kt = null, i = !0) : i = !1, i = !i), i && (e && Vh(t, a), gn(t))), null;
        case 13:
          return Jp(e, t, a);
        case 4:
          return Dt(
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
          return i = t.type, o = t.pendingProps, s = o.value, "value" in o || y1 || (y1 = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), Ku(t, i, s), Jt(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), Wu(t), o = Rt(o), _t(t), i = sv(
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
          return Mn(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return Xs(
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
          }, e === null ? (e = Zs(
            i,
            a
          ), e.ref = t.ref, t.child = e, e.return = t, t = e) : (e = pn(e.child, i), e.ref = t.ref, t.child = e, e.return = t, t = e), t;
        case 22:
          return Nr(e, t, a);
        case 24:
          return Wu(t), i = Rt(Al), e === null ? (o = Wh(), o === null && (o = Ot, s = zs(), o.pooledCache = s, $i(s), s !== null && (o.pooledCacheLanes |= a), o = s), t.memoizedState = {
            parent: i,
            cache: o
          }, $l(t), Ku(t, Al, o)) : ((e.lanes & a) !== 0 && (Iu(e, t), Pc(t, null, null, a), Tn()), o = e.memoizedState, s = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Ku(t, Al, i)) : (i = s.cache, Ku(t, Al, i), i !== o.cache && Jh(
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
    function Pl(e) {
      e.flags |= 4;
    }
    function ks(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & tu) !== Zf)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !cf(t)) {
        if (t = eu.current, t !== null && ((Ie & 4194048) === Ie ? Mi !== null : (Ie & 62914560) !== Ie && (Ie & 536870912) === 0 || t !== Mi))
          throw Ly = lv, zb;
        e.flags |= 8192;
      }
    }
    function Js(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? is() : 536870912, e.lanes |= t, Yf |= t);
    }
    function ci(e, t) {
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
        if ((e.mode & Ql) !== Ht) {
          for (var o = e.selfBaseDuration, s = e.child; s !== null; )
            a |= s.lanes | s.childLanes, i |= s.subtreeFlags & 65011712, i |= s.flags & 65011712, o += s.treeBaseDuration, s = s.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & Ql) !== Ht) {
        o = e.actualDuration, s = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, s += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = s;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function Kp(e, t, a) {
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
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), ru(Al, t), dt(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ji(t) ? (Zh(), Pl(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Qh())), vt(t), null;
        case 26:
          return a = t.memoizedState, e === null ? (Pl(t), a !== null ? (vt(t), ks(
            t,
            a
          )) : (vt(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (Pl(t), vt(t), ks(
            t,
            a
          )) : (vt(t), t.flags &= -16777217) : (e.memoizedProps !== i && Pl(t), vt(t), t.flags &= -16777217), null;
        case 27:
          _(t), a = st(Xn.current);
          var o = t.type;
          if (e !== null && t.stateNode != null)
            e.memoizedProps !== i && Pl(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return vt(t), null;
            }
            e = E(), Ji(t) ? Xh(t) : (e = ey(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, Pl(t));
          }
          return vt(t), null;
        case 5:
          if (_(t), a = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Pl(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return vt(t), null;
            }
            if (o = E(), Ji(t))
              Xh(t);
            else {
              switch (e = st(Xn.current), tr(a, o.ancestorInfo), o = o.context, e = Ke(e), o) {
                case mh:
                  e = e.createElementNS(Lo, a);
                  break;
                case ug:
                  e = e.createElementNS(
                    Of,
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
                        Of,
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
                        N1,
                        a
                      ) || (N1[a] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        a
                      )));
                  }
              }
              e[wl] = t, e[ia] = i;
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
              e && Pl(t);
            }
          }
          return vt(t), t.flags &= -16777217, null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && Pl(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = st(Xn.current), a = E(), Ji(t)) {
              e = t.stateNode, a = t.memoizedProps, o = !Cc, i = null;
              var s = xa;
              if (s !== null)
                switch (s.tag) {
                  case 3:
                    o && (o = pd(
                      e,
                      a,
                      i
                    ), o !== null && (Wa(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = s.memoizedProps, o && (o = pd(
                      e,
                      a,
                      i
                    ), o !== null && (Wa(
                      t,
                      0
                    ).serverProps = o));
                }
              e[wl] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || Qm(e.nodeValue, a)), e || gn(t);
            } else
              o = a.ancestorInfo.current, o != null && ys(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = Ke(e).createTextNode(
                i
              ), e[wl] = t, t.stateNode = e;
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
                o[wl] = t, vt(t), (t.mode & Ql) !== Ht && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Zh(), Ki(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4, vt(t), (t.mode & Ql) !== Ht && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = Qh(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (ya(t), t) : (ya(t), null);
          }
          return ya(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & Ql) !== Ht && bn(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), s = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (s = i.memoizedState.cachePool.pool), s !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Js(t, t.updateQueue), vt(t), (t.mode & Ql) !== Ht && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return dt(t), e === null && Xm(
            t.stateNode.containerInfo
          ), vt(t), null;
        case 10:
          return ru(t.type, t), vt(t), null;
        case 19:
          if (Fe(zl, t), o = t.memoizedState, o === null) return vt(t), null;
          if (i = (t.flags & 128) !== 0, s = o.rendering, s === null)
            if (i) ci(o, !1);
            else {
              if ($t !== Nc || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (s = vu(e), s !== null) {
                    for (t.flags |= 128, ci(o, !1), e = s.updateQueue, t.updateQueue = e, Js(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Yh(a, e), a = a.sibling;
                    return Ae(
                      zl,
                      zl.current & ah | Jy,
                      t
                    ), t.child;
                  }
                  e = e.sibling;
                }
              o.tail !== null && Ln() > J0 && (t.flags |= 128, i = !0, ci(o, !1), t.lanes = 4194304);
            }
          else {
            if (!i)
              if (e = vu(s), e !== null) {
                if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Js(t, e), ci(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !ct)
                  return vt(t), null;
              } else
                2 * Ln() - o.renderingStartTime > J0 && a !== 536870912 && (t.flags |= 128, i = !0, ci(o, !1), t.lanes = 4194304);
            o.isBackwards ? (s.sibling = t.child, t.child = s) : (e = o.last, e !== null ? e.sibling = s : t.child = s, o.last = s);
          }
          return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = Ln(), e.sibling = null, a = zl.current, a = i ? a & ah | Jy : a & ah, Ae(zl, a, t), e) : (vt(t), null);
        case 22:
        case 23:
          return ya(t), en(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (vt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : vt(t), a = t.updateQueue, a !== null && Js(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && Fe(wf, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), ru(Al, t), vt(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function $p(e, t) {
      switch (dr(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Ql) !== Ht && bn(t), t) : null;
        case 3:
          return ru(Al, t), dt(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return _(t), null;
        case 13:
          if (ya(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Ki();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Ql) !== Ht && bn(t), t) : null;
        case 19:
          return Fe(zl, t), null;
        case 4:
          return dt(t), null;
        case 10:
          return ru(t.type, t), null;
        case 22:
        case 23:
          return ya(t), en(t), e !== null && Fe(wf, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Ql) !== Ht && bn(t), t) : null;
        case 24:
          return ru(Al, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function pm(e, t) {
      switch (dr(t), t.tag) {
        case 3:
          ru(Al, t), dt(t);
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
          ya(t);
          break;
        case 19:
          Fe(zl, t);
          break;
        case 10:
          ru(t.type, t);
          break;
        case 22:
        case 23:
          ya(t), en(t), e !== null && Fe(wf, t);
          break;
        case 24:
          ru(Al, t);
      }
    }
    function nn(e) {
      return (e.mode & Ql) !== Ht;
    }
    function gm(e, t) {
      nn(e) ? (Ia(), nc(t, e), Oa()) : nc(t, e);
    }
    function Zr(e, t, a) {
      nn(e) ? (Ia(), uc(
        a,
        e,
        t
      ), Oa()) : uc(
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
            if ((a.tag & e) === e && ((e & El) !== Fn ? te !== null && typeof te.markComponentPassiveEffectMountStarted == "function" && te.markComponentPassiveEffectMountStarted(
              t
            ) : (e & Zl) !== Fn && te !== null && typeof te.markComponentLayoutEffectMountStarted == "function" && te.markComponentLayoutEffectMountStarted(
              t
            ), i = void 0, (e & Aa) !== Fn && (dh = !0), i = ce(
              t,
              S2,
              a
            ), (e & Aa) !== Fn && (dh = !1), (e & El) !== Fn ? te !== null && typeof te.markComponentPassiveEffectMountStopped == "function" && te.markComponentPassiveEffectMountStopped() : (e & Zl) !== Fn && te !== null && typeof te.markComponentLayoutEffectMountStopped == "function" && te.markComponentLayoutEffectMountStopped(), i !== void 0 && typeof i != "function")) {
              var s = void 0;
              s = (a.tag & Zl) !== 0 ? "useLayoutEffect" : (a.tag & Aa) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + s + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + s + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, ce(
                t,
                function(h, g) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    g
                  );
                },
                s,
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
          var s = o.next;
          i = s;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & El) !== Fn ? te !== null && typeof te.markComponentPassiveEffectUnmountStarted == "function" && te.markComponentPassiveEffectUnmountStarted(
                t
              ) : (e & Zl) !== Fn && te !== null && typeof te.markComponentLayoutEffectUnmountStarted == "function" && te.markComponentLayoutEffectUnmountStarted(
                t
              ), (e & Aa) !== Fn && (dh = !0), o = t, ce(
                o,
                T2,
                o,
                a,
                h
              ), (e & Aa) !== Fn && (dh = !1), (e & El) !== Fn ? te !== null && typeof te.markComponentPassiveEffectUnmountStopped == "function" && te.markComponentPassiveEffectUnmountStopped() : (e & Zl) !== Fn && te !== null && typeof te.markComponentLayoutEffectUnmountStopped == "function" && te.markComponentLayoutEffectUnmountStopped());
            }
            i = i.next;
          } while (i !== s);
        }
      } catch (g) {
        Te(t, t.return, g);
      }
    }
    function vm(e, t) {
      nn(e) ? (Ia(), nc(t, e), Oa()) : nc(t, e);
    }
    function Ks(e, t, a) {
      nn(e) ? (Ia(), uc(
        a,
        e,
        t
      ), Oa()) : uc(
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
          ne(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          ne(e) || "instance"
        ));
        try {
          ce(
            e,
            Lp,
            t,
            a
          );
        } catch (i) {
          Te(e, e.return, i);
        }
      }
    }
    function Wp(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function Hg(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || uh || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        ne(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        ne(e) || "instance"
      ));
      try {
        var o = ii(
          e.type,
          a,
          e.elementType === e.type
        ), s = ce(
          e,
          Wp,
          t,
          o,
          i
        );
        a = p1, s !== void 0 || a.has(e.type) || (a.add(e.type), ce(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            ne(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = s;
      } catch (d) {
        Te(e, e.return, d);
      }
    }
    function kr(e, t, a) {
      a.props = ii(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, nn(e) ? (Ia(), ce(
        e,
        Lb,
        e,
        t,
        a
      ), Oa()) : ce(
        e,
        Lb,
        e,
        t,
        a
      );
    }
    function Fp(e) {
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
          if (nn(e))
            try {
              Ia(), e.refCleanup = t(a);
            } finally {
              Oa();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            ne(e)
          ), t.current = a;
      }
    }
    function mo(e, t) {
      try {
        ce(e, Fp, e);
      } catch (a) {
        Te(e, t, a);
      }
    }
    function ja(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (nn(e))
              try {
                Ia(), ce(e, i);
              } finally {
                Oa(e);
              }
            else ce(e, i);
          } catch (o) {
            Te(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (nn(e))
              try {
                Ia(), ce(e, a, null);
              } finally {
                Oa(e);
              }
            else ce(e, a, null);
          } catch (o) {
            Te(e, t, o);
          }
        else a.current = null;
    }
    function Sm(e, t, a, i) {
      var o = e.memoizedProps, s = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", j0 && (t = "nested-update"), typeof o == "function" && o(
        s,
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
    function Ip(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", j0 && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function Pp(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        ce(
          e,
          Au,
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
        Te(e, e.return, i);
      }
    }
    function xm(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Yn(e.type) || e.tag === 4;
    }
    function ic(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || xm(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && Yn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function $s(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = xu));
      else if (i !== 4 && (i === 27 && Yn(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for ($s(e, t, a), e = e.sibling; e !== null; )
          $s(e, t, a), e = e.sibling;
    }
    function cc(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && Yn(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (cc(e, t, a), e = e.sibling; e !== null; )
          cc(e, t, a), e = e.sibling;
    }
    function e0(e) {
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
          t = t.stateNode, a = ic(e), cc(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (Eu(a), t.flags &= -33), t = ic(e), cc(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = ic(e), $s(
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
        ce(
          e,
          va,
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
      if (e = e.containerInfo, Bv = sg, e = Np(e), jh(e)) {
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
              var o = i.anchorOffset, s = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, s.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, g = -1, b = 0, w = 0, V = e, U = null;
              t: for (; ; ) {
                for (var X; V !== a || o !== 0 && V.nodeType !== 3 || (h = d + o), V !== s || i !== 0 && V.nodeType !== 3 || (g = d + i), V.nodeType === 3 && (d += V.nodeValue.length), (X = V.firstChild) !== null; )
                  U = V, V = X;
                for (; ; ) {
                  if (V === e) break t;
                  if (U === a && ++b === o && (h = d), U === s && ++w === i && (g = d), (X = V.nextSibling) !== null) break;
                  V = U, U = V.parentNode;
                }
                V = X;
              }
              a = h === -1 || g === -1 ? null : { start: h, end: g };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (_v = {
        focusedElem: e,
        selectionRange: a
      }, sg = !1, jl = t; jl !== null; )
        if (t = jl, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
          e.return = t, jl = e;
        else
          for (; jl !== null; ) {
            switch (e = t = jl, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && Hg(e, a);
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
              e.return = t.return, jl = e;
              break;
            }
            jl = t.return;
          }
    }
    function Em(e, t, a) {
      var i = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Cn(e, a), i & 4 && gm(a, Zl | In);
          break;
        case 1:
          if (Cn(e, a), i & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || uh || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                ne(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                ne(a) || "instance"
              )), nn(a) ? (Ia(), ce(
                a,
                fv,
                a,
                e
              ), Oa()) : ce(
                a,
                fv,
                a,
                e
              );
            else {
              var o = ii(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || uh || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                ne(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                ne(a) || "instance"
              )), nn(a) ? (Ia(), ce(
                a,
                Gb,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), Oa()) : ce(
                a,
                Gb,
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
          if (t = Fa(), Cn(e, a), i & 64 && (i = a.updateQueue, i !== null)) {
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
                Lp,
                i,
                o
              );
            } catch (d) {
              Te(a, a.return, d);
            }
          }
          e.effectDuration += Fu(t);
          break;
        case 27:
          t === null && i & 4 && Am(a);
        case 26:
        case 5:
          Cn(e, a), t === null && i & 4 && Pp(a), i & 512 && mo(a, a.return);
          break;
        case 12:
          if (i & 4) {
            i = Fa(), Cn(e, a), e = a.stateNode, e.effectDuration += Wi(i);
            try {
              ce(
                a,
                Sm,
                a,
                t,
                N0,
                e.effectDuration
              );
            } catch (d) {
              Te(a, a.return, d);
            }
          } else Cn(e, a);
          break;
        case 13:
          Cn(e, a), i & 4 && yo(e, a), i & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = af.bind(
            null,
            a
          ), Ro(e, a))));
          break;
        case 22:
          if (i = a.memoizedState !== null || wc, !i) {
            t = t !== null && t.memoizedState !== null || ll, o = wc;
            var s = ll;
            wc = i, (ll = t) && !s ? Un(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ) : Cn(e, a), wc = o, ll = s;
          }
          break;
        case 30:
          break;
        default:
          Cn(e, a);
      }
    }
    function zm(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, zm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Xc(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function bu(e, t, a) {
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
          Tl.onCommitFiberUnmount(Si, a);
        } catch (s) {
          ua || (ua = !0, console.error(
            "React instrumentation encountered an error: %s",
            s
          ));
        }
      switch (a.tag) {
        case 26:
          ll || ja(a, t), bu(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
          break;
        case 27:
          ll || ja(a, t);
          var i = dl, o = La;
          Yn(a.type) && (dl = a.stateNode, La = !1), bu(
            e,
            t,
            a
          ), ce(
            a,
            Mo,
            a.stateNode
          ), dl = i, La = o;
          break;
        case 5:
          ll || ja(a, t);
        case 6:
          if (i = dl, o = La, dl = null, bu(
            e,
            t,
            a
          ), dl = i, La = o, dl !== null)
            if (La)
              try {
                ce(
                  a,
                  Ao,
                  dl,
                  a.stateNode
                );
              } catch (s) {
                Te(
                  a,
                  t,
                  s
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
              } catch (s) {
                Te(
                  a,
                  t,
                  s
                );
              }
          break;
        case 18:
          dl !== null && (La ? (e = dl, Eo(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), Tc(e)) : Eo(dl, a.stateNode));
          break;
        case 4:
          i = dl, o = La, dl = a.stateNode.containerInfo, La = !0, bu(
            e,
            t,
            a
          ), dl = i, La = o;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          ll || uc(
            Aa,
            a,
            t
          ), ll || Zr(
            a,
            t,
            Zl
          ), bu(
            e,
            t,
            a
          );
          break;
        case 1:
          ll || (ja(a, t), i = a.stateNode, typeof i.componentWillUnmount == "function" && kr(
            a,
            t,
            i
          )), bu(
            e,
            t,
            a
          );
          break;
        case 21:
          bu(
            e,
            t,
            a
          );
          break;
        case 22:
          ll = (i = ll) || a.memoizedState !== null, bu(
            e,
            t,
            a
          ), ll = i;
          break;
        default:
          bu(
            e,
            t,
            a
          );
      }
    }
    function yo(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          ce(
            t,
            ga,
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
          return t === null && (t = e.stateNode = new g1()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new g1()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function sc(e, t) {
      var a = Kr(e);
      t.forEach(function(i) {
        var o = ri.bind(null, e, i);
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
    function Cl(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, s = t, d = a[i], h = s;
          e: for (; h !== null; ) {
            switch (h.tag) {
              case 27:
                if (Yn(h.type)) {
                  dl = h.stateNode, La = !1;
                  break e;
                }
                break;
              case 5:
                dl = h.stateNode, La = !1;
                break e;
              case 3:
              case 4:
                dl = h.stateNode.containerInfo, La = !0;
                break e;
            }
            h = h.return;
          }
          if (dl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          oc(o, s, d), dl = null, La = !1, o = d, s = o.alternate, s !== null && (s.return = null), o.return = null;
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
          Cl(t, e), ea(e), i & 4 && (uc(
            Aa | In,
            e,
            e.return
          ), nc(Aa | In, e), Zr(
            e,
            e.return,
            Zl | In
          ));
          break;
        case 1:
          Cl(t, e), ea(e), i & 512 && (ll || a === null || ja(a, a.return)), i & 64 && wc && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
          break;
        case 26:
          var o = Bu;
          if (Cl(t, e), ea(e), i & 512 && (ll || a === null || ja(a, a.return)), i & 4)
            if (t = a !== null ? a.memoizedState : null, i = e.memoizedState, a === null)
              if (i === null)
                if (e.stateNode === null) {
                  e: {
                    i = e.type, a = e.memoizedProps, t = o.ownerDocument || o;
                    t: switch (i) {
                      case "title":
                        o = t.getElementsByTagName("title")[0], (!o || o[Yo] || o[wl] || o.namespaceURI === Lo || o.hasAttribute("itemprop")) && (o = t.createElement(i), t.head.insertBefore(
                          o,
                          t.querySelector("head > title")
                        )), Xt(o, i, a), o[wl] = e, nl(o), i = o;
                        break e;
                      case "link":
                        var s = ny(
                          "link",
                          "href",
                          t
                        ).get(i + (a.href || ""));
                        if (s) {
                          for (var d = 0; d < s.length; d++)
                            if (o = s[d], o.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && o.getAttribute("rel") === (a.rel == null ? null : a.rel) && o.getAttribute("title") === (a.title == null ? null : a.title) && o.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                              s.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Xt(o, i, a), t.head.appendChild(o);
                        break;
                      case "meta":
                        if (s = ny(
                          "meta",
                          "content",
                          t
                        ).get(i + (a.content || ""))) {
                          for (d = 0; d < s.length; d++)
                            if (o = s[d], I(
                              a.content,
                              "content"
                            ), o.getAttribute("content") === (a.content == null ? null : "" + a.content) && o.getAttribute("name") === (a.name == null ? null : a.name) && o.getAttribute("property") === (a.property == null ? null : a.property) && o.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && o.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              s.splice(d, 1);
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
                    o[wl] = e, nl(o), i = o;
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
          Cl(t, e), ea(e), i & 512 && (ll || a === null || ja(a, a.return)), a !== null && i & 4 && Tm(
            e,
            e.memoizedProps,
            a.memoizedProps
          );
          break;
        case 5:
          if (Cl(t, e), ea(e), i & 512 && (ll || a === null || ja(a, a.return)), e.flags & 32) {
            t = e.stateNode;
            try {
              ce(e, Eu, t);
            } catch (w) {
              Te(e, e.return, w);
            }
          }
          i & 4 && e.stateNode != null && (t = e.memoizedProps, Tm(
            e,
            t,
            a !== null ? a.memoizedProps : t
          )), i & 1024 && (gv = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (Cl(t, e), ea(e), i & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            i = e.memoizedProps, a = a !== null ? a.memoizedProps : i, t = e.stateNode;
            try {
              ce(
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
          if (o = Fa(), ig = null, s = Bu, Bu = uf(t.containerInfo), Cl(t, e), Bu = s, ea(e), i & 4 && a !== null && a.memoizedState.isDehydrated)
            try {
              ce(
                e,
                Pm,
                t.containerInfo
              );
            } catch (w) {
              Te(e, e.return, w);
            }
          gv && (gv = !1, fc(e)), t.effectDuration += Fu(o);
          break;
        case 4:
          i = Bu, Bu = uf(
            e.stateNode.containerInfo
          ), Cl(t, e), ea(e), Bu = i;
          break;
        case 12:
          i = Fa(), Cl(t, e), ea(e), e.stateNode.effectDuration += Wi(i);
          break;
        case 13:
          Cl(t, e), ea(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Av = Ln()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, sc(e, i)));
          break;
        case 22:
          o = e.memoizedState !== null;
          var h = a !== null && a.memoizedState !== null, g = wc, b = ll;
          if (wc = g || o, ll = b || h, Cl(t, e), ll = b, wc = g, ea(e), i & 8192)
            e: for (t = e.stateNode, t._visibility = o ? t._visibility & ~C0 : t._visibility | C0, o && (a === null || h || wc || ll || Ul(e)), a = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (a === null) {
                  h = a = t;
                  try {
                    s = h.stateNode, o ? ce(h, aa, s) : ce(
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
                    d = h.stateNode, o ? ce(h, Wm, d) : ce(
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
          i & 4 && (i = e.updateQueue, i !== null && (a = i.retryQueue, a !== null && (i.retryQueue = null, sc(e, a))));
          break;
        case 19:
          Cl(t, e), ea(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, sc(e, i)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Cl(t, e), ea(e);
      }
    }
    function ea(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          ce(e, e0, e);
        } catch (a) {
          Te(e, e.return, a);
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
    function Cn(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          Em(e, t.alternate, t), t = t.sibling;
    }
    function pa(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Zr(
            e,
            e.return,
            Zl
          ), Ul(e);
          break;
        case 1:
          ja(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && kr(
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
          ja(e, e.return), Ul(e);
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
        pa(e), e = e.sibling;
    }
    function Su(e, t, a, i) {
      var o = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Un(
            e,
            a,
            i
          ), gm(a, Zl);
          break;
        case 1:
          if (Un(
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
                eo,
                t,
                e
              );
            } catch (s) {
              Te(a, a.return, s);
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
          ), i && t === null && o & 4 && Pp(a), mo(a, a.return);
          break;
        case 12:
          if (i && o & 4) {
            o = Fa(), Un(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += Wi(o);
            try {
              ce(
                a,
                Sm,
                a,
                t,
                N0,
                i.effectDuration
              );
            } catch (s) {
              Te(a, a.return, s);
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
        Su(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function Hn(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && $i(e), a != null && vn(a));
    }
    function un(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && ($i(t), e != null && vn(e));
    }
    function bt(e, t, a, i) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          Ws(
            e,
            t,
            a,
            i
          ), t = t.sibling;
    }
    function Ws(e, t, a, i) {
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
          ), o & 2048 && vm(t, El | In);
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
          var s = Fa();
          bt(
            e,
            t,
            a,
            i
          ), o & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && ($i(t), a != null && vn(a))), e.passiveEffectDuration += Fu(s);
          break;
        case 12:
          if (o & 2048) {
            o = Fa(), bt(
              e,
              t,
              a,
              i
            ), e = t.stateNode, e.passiveEffectDuration += Wi(o);
            try {
              ce(
                t,
                Ip,
                t,
                t.alternate,
                N0,
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
          s = t.stateNode;
          var d = t.alternate;
          t.memoizedState !== null ? s._visibility & Oc ? bt(
            e,
            t,
            a,
            i
          ) : po(
            e,
            t
          ) : s._visibility & Oc ? bt(
            e,
            t,
            a,
            i
          ) : (s._visibility |= Oc, oi(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0
          )), o & 2048 && Hn(d, t);
          break;
        case 24:
          bt(
            e,
            t,
            a,
            i
          ), o & 2048 && un(t.alternate, t);
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
    function oi(e, t, a, i, o) {
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
      var s = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          oi(
            e,
            t,
            a,
            i,
            o
          ), vm(t, El);
          break;
        case 23:
          break;
        case 22:
          var d = t.stateNode;
          t.memoizedState !== null ? d._visibility & Oc ? oi(
            e,
            t,
            a,
            i,
            o
          ) : po(
            e,
            t
          ) : (d._visibility |= Oc, oi(
            e,
            t,
            a,
            i,
            o
          )), o && s & 2048 && Hn(
            t.alternate,
            t
          );
          break;
        case 24:
          oi(
            e,
            t,
            a,
            i,
            o
          ), o && s & 2048 && un(t.alternate, t);
          break;
        default:
          oi(
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
              ), o & 2048 && Hn(
                i.alternate,
                i
              );
              break;
            case 24:
              po(
                a,
                i
              ), o & 2048 && un(
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
          si(e), e = e.sibling;
    }
    function si(e) {
      switch (e.tag) {
        case 26:
          rc(e), e.flags & Ky && e.memoizedState !== null && r0(
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
          Bu = uf(
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
    function Fs(e) {
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
            jl = i, Mm(
              i,
              e
            );
          }
        Fs(e);
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
          go(e), e.flags & 2048 && Ks(
            e,
            e.return,
            El | In
          );
          break;
        case 3:
          var t = Fa();
          go(e), e.stateNode.passiveEffectDuration += Fu(t);
          break;
        case 12:
          t = Fa(), go(e), e.stateNode.passiveEffectDuration += Wi(t);
          break;
        case 22:
          t = e.stateNode, e.memoizedState !== null && t._visibility & Oc && (e.return === null || e.return.tag !== 13) ? (t._visibility &= ~Oc, Is(e)) : go(e);
          break;
        default:
          go(e);
      }
    }
    function Is(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            jl = i, Mm(
              i,
              e
            );
          }
        Fs(e);
      }
      for (e = e.child; e !== null; )
        Ps(e), e = e.sibling;
    }
    function Ps(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Ks(
            e,
            e.return,
            El
          ), Is(e);
          break;
        case 22:
          var t = e.stateNode;
          t._visibility & Oc && (t._visibility &= ~Oc, Is(e));
          break;
        default:
          Is(e);
      }
    }
    function Mm(e, t) {
      for (; jl !== null; ) {
        var a = jl, i = a;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Ks(
              i,
              t,
              El
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (i = i.memoizedState.cachePool.pool, i != null && $i(i));
            break;
          case 24:
            vn(i.memoizedState.cache);
        }
        if (i = a.child, i !== null) i.return = a, jl = i;
        else
          e: for (a = e; jl !== null; ) {
            i = jl;
            var o = i.sibling, s = i.return;
            if (zm(i), i === a) {
              jl = null;
              break e;
            }
            if (o !== null) {
              o.return = s, jl = o;
              break e;
            }
            jl = s;
          }
      }
    }
    function Dm() {
      A2.forEach(function(e) {
        return e();
      });
    }
    function Cm() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || q.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function ta(e) {
      if ((pt & Ea) !== fn && Ie !== 0)
        return Ie & -Ie;
      var t = q.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = Hf, e !== 0 ? e : Ym()) : bp();
    }
    function t0() {
      dn === 0 && (dn = (Ie & 536870912) === 0 || ct ? Sh() : 536870912);
      var e = eu.current;
      return e !== null && (e.flags |= 32), dn;
    }
    function Gt(e, t, a) {
      if (dh && console.error("useInsertionEffect must not schedule updates."), Mv && (K0 = !0), (e === Ot && (St === _f || St === qf) || e.cancelPendingCommit !== null) && (hc(e, 0), Tu(
        e,
        Ie,
        dn,
        !1
      )), Gc(e, a), (pt & Ea) !== 0 && e === Ot) {
        if (ca)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = $e && ne($e) || "Unknown", O1.has(e) || (O1.add(e), t = ne(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              R1 || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), R1 = !0);
          }
      } else
        Zt && nu(e, t, a), u0(t), e === Ot && ((pt & Ea) === fn && (Wo |= a), $t === Bf && Tu(
          e,
          Ie,
          dn,
          !1
        )), Ba(e);
    }
    function el(e, t, a) {
      if ((pt & (Ea | _u)) !== fn)
        throw Error("Should not already be working.");
      var i = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || us(e, t), o = i ? Hm(e, t) : Pr(e, t, !0), s = i;
      do {
        if (o === Nc) {
          fh && !i && Tu(e, t, 0, !1);
          break;
        } else {
          if (a = e.current.alternate, s && !l0(a)) {
            o = Pr(e, t, !1), s = !1;
            continue;
          }
          if (o === oh) {
            if (s = t, e.errorRecoveryDisabledLanes & s)
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
                  if (Tv && !g) {
                    o.errorRecoveryDisabledLanes |= s, Wo |= s, o = Bf;
                    break e;
                  }
                  o = za, za = d, o !== null && (za === null ? za = o : za.push.apply(
                    za,
                    o
                  ));
                }
                o = h;
              }
              if (s = !1, o !== oh) continue;
            }
          }
          if (o === Wy) {
            hc(e, 0), Tu(e, t, 0, !0);
            break;
          }
          e: {
            switch (i = e, o) {
              case Nc:
              case Wy:
                throw Error("Root did not complete. This is a bug in React.");
              case Bf:
                if ((t & 4194048) !== t) break;
              case Z0:
                Tu(
                  i,
                  t,
                  dn,
                  !Ko
                );
                break e;
              case oh:
                za = null;
                break;
              case vv:
              case v1:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (q.actQueue !== null)
              nd(
                i,
                a,
                t,
                za,
                tp,
                k0,
                dn,
                Wo,
                Yf
              );
            else {
              if ((t & 62914560) === t && (s = Av + S1 - Ln(), 10 < s)) {
                if (Tu(
                  i,
                  t,
                  dn,
                  !Ko
                ), sa(i, 0, !0) !== 0) break e;
                i.timeoutHandle = j1(
                  ol.bind(
                    null,
                    i,
                    a,
                    za,
                    tp,
                    k0,
                    t,
                    dn,
                    Wo,
                    Yf,
                    Ko,
                    o,
                    O2,
                    xb,
                    0
                  ),
                  s
                );
                break e;
              }
              ol(
                i,
                a,
                za,
                tp,
                k0,
                t,
                dn,
                Wo,
                Yf,
                Ko,
                o,
                z2,
                xb,
                0
              );
            }
          }
        }
        break;
      } while (!0);
      Ba(e);
    }
    function ol(e, t, a, i, o, s, d, h, g, b, w, V, U, X) {
      if (e.timeoutHandle = Qf, V = t.subtreeFlags, (V & 8192 || (V & 16785408) === 16785408) && (cp = { stylesheets: null, count: 0, unsuspend: f0 }, si(t), V = d0(), V !== null)) {
        e.cancelPendingCommit = V(
          nd.bind(
            null,
            e,
            t,
            s,
            a,
            i,
            o,
            d,
            h,
            g,
            w,
            R2,
            U,
            X
          )
        ), Tu(
          e,
          s,
          d,
          !b
        );
        return;
      }
      nd(
        e,
        t,
        s,
        a,
        i,
        o,
        d,
        h,
        g
      );
    }
    function l0(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], s = o.getSnapshot;
            o = o.value;
            try {
              if (!Ta(s(), o)) return !1;
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
    function Tu(e, t, a, i) {
      t &= ~xv, t &= ~Wo, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var s = 31 - Hl(o), d = 1 << s;
        i[s] = -1, o &= ~d;
      }
      a !== 0 && vp(e, a, t);
    }
    function dc() {
      return (pt & (Ea | _u)) === fn ? (mc(0), !1) : !0;
    }
    function Wr() {
      if ($e !== null) {
        if (St === Qa)
          var e = $e.return;
        else
          e = $e, hr(), tn(e), th = null, ky = 0, e = $e;
        for (; e !== null; )
          pm(e.alternate, e), e = e.return;
        $e = null;
      }
    }
    function hc(e, t) {
      var a = e.timeoutHandle;
      a !== Qf && (e.timeoutHandle = Qf, G2(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Wr(), Ot = e, $e = a = pn(e.current, null), Ie = t, St = Qa, rn = null, Ko = !1, fh = us(e, t), Tv = !1, $t = Nc, Yf = dn = xv = Wo = $o = 0, za = ep = null, k0 = !1, (t & 8) !== 0 && (t |= t & 32);
      var i = e.entangledLanes;
      if (i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; ) {
          var o = 31 - Hl(i), s = 1 << o;
          t |= e[o], i &= ~s;
        }
      return Di = t, Ss(), t = Sb(), 1e3 < t - bb && (q.recentlyCreatedOwnerStacks = 0, bb = t), Nu.discardPendingWarnings(), a;
    }
    function ef(e, t) {
      De = null, q.H = L0, q.getCurrentStack = null, ca = !1, Sa = null, t === Xy || t === q0 ? (t = Ph(), St = Iy) : t === zb ? (t = Ph(), St = b1) : St = t === s1 ? Sv : t !== null && typeof t == "object" && typeof t.then == "function" ? sh : Fy, rn = t;
      var a = $e;
      if (a === null)
        $t = Wy, ho(
          e,
          da(t, e.current)
        );
      else
        switch (a.mode & Ql && du(a), hl(), St) {
          case Fy:
            te !== null && typeof te.markComponentErrored == "function" && te.markComponentErrored(
              a,
              t,
              Ie
            );
            break;
          case _f:
          case qf:
          case Iy:
          case sh:
          case Py:
            te !== null && typeof te.markComponentSuspended == "function" && te.markComponentSuspended(
              a,
              t,
              Ie
            );
        }
    }
    function Fr() {
      var e = q.H;
      return q.H = L0, e === null ? L0 : e;
    }
    function Um() {
      var e = q.A;
      return q.A = x2, e;
    }
    function Ir() {
      $t = Bf, Ko || (Ie & 4194048) !== Ie && eu.current !== null || (fh = !0), ($o & 134217727) === 0 && (Wo & 134217727) === 0 || Ot === null || Tu(
        Ot,
        Ie,
        dn,
        !1
      );
    }
    function Pr(e, t, a) {
      var i = pt;
      pt |= Ea;
      var o = Fr(), s = Um();
      if (Ot !== e || Ie !== t) {
        if (Zt) {
          var d = e.memoizedUpdaters;
          0 < d.size && (To(e, Ie), d.clear()), Jl(e, t);
        }
        tp = null, hc(e, t);
      }
      ka(t), t = !1, d = $t;
      e: do
        try {
          if (St !== Qa && $e !== null) {
            var h = $e, g = rn;
            switch (St) {
              case Sv:
                Wr(), d = Z0;
                break e;
              case Iy:
              case _f:
              case qf:
              case sh:
                eu.current === null && (t = !0);
                var b = St;
                if (St = Qa, rn = null, fi(e, h, g, b), a && fh) {
                  d = Nc;
                  break e;
                }
                break;
              default:
                b = St, St = Qa, rn = null, fi(e, h, g, b);
            }
          }
          ed(), d = $t;
          break;
        } catch (w) {
          ef(e, w);
        }
      while (!0);
      return t && e.shellSuspendCounter++, hr(), pt = i, q.H = o, q.A = s, au(), $e === null && (Ot = null, Ie = 0, Ss()), d;
    }
    function ed() {
      for (; $e !== null; ) Nm($e);
    }
    function Hm(e, t) {
      var a = pt;
      pt |= Ea;
      var i = Fr(), o = Um();
      if (Ot !== e || Ie !== t) {
        if (Zt) {
          var s = e.memoizedUpdaters;
          0 < s.size && (To(e, Ie), s.clear()), Jl(e, t);
        }
        tp = null, J0 = Ln() + T1, hc(e, t);
      } else
        fh = us(
          e,
          t
        );
      ka(t);
      e: do
        try {
          if (St !== Qa && $e !== null)
            t: switch (t = $e, s = rn, St) {
              case Fy:
                St = Qa, rn = null, fi(
                  e,
                  t,
                  s,
                  Fy
                );
                break;
              case _f:
              case qf:
                if (Ih(s)) {
                  St = Qa, rn = null, td(t);
                  break;
                }
                t = function() {
                  St !== _f && St !== qf || Ot !== e || (St = Py), Ba(e);
                }, s.then(t, t);
                break e;
              case Iy:
                St = Py;
                break e;
              case b1:
                St = bv;
                break e;
              case Py:
                Ih(s) ? (St = Qa, rn = null, td(t)) : (St = Qa, rn = null, fi(
                  e,
                  t,
                  s,
                  Py
                ));
                break;
              case bv:
                var d = null;
                switch ($e.tag) {
                  case 26:
                    d = $e.memoizedState;
                  case 5:
                  case 27:
                    var h = $e;
                    if (!d || cf(d)) {
                      St = Qa, rn = null;
                      var g = h.sibling;
                      if (g !== null) $e = g;
                      else {
                        var b = h.return;
                        b !== null ? ($e = b, tf(b)) : $e = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                St = Qa, rn = null, fi(
                  e,
                  t,
                  s,
                  bv
                );
                break;
              case sh:
                St = Qa, rn = null, fi(
                  e,
                  t,
                  s,
                  sh
                );
                break;
              case Sv:
                Wr(), $t = Z0;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          q.actQueue !== null ? ed() : wm();
          break;
        } catch (w) {
          ef(e, w);
        }
      while (!0);
      return hr(), q.H = i, q.A = o, pt = a, $e !== null ? (te !== null && typeof te.markRenderYielded == "function" && te.markRenderYielded(), Nc) : (au(), Ot = null, Ie = 0, Ss(), $t);
    }
    function wm() {
      for (; $e !== null && !b0(); )
        Nm($e);
    }
    function Nm(e) {
      var t = e.alternate;
      (e.mode & Ql) !== Ht ? (mr(e), t = ce(
        e,
        Qr,
        t,
        e,
        Di
      ), du(e)) : t = ce(
        e,
        Qr,
        t,
        e,
        Di
      ), e.memoizedProps = e.pendingProps, t === null ? tf(e) : $e = t;
    }
    function td(e) {
      var t = ce(e, ld, e);
      e.memoizedProps = e.pendingProps, t === null ? tf(e) : $e = t;
    }
    function ld(e) {
      var t = e.alternate, a = (e.mode & Ql) !== Ht;
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
          tn(e);
        default:
          pm(t, e), e = $e = Yh(e, Di), t = Qr(t, e, Di);
      }
      return a && du(e), t;
    }
    function fi(e, t, a, i) {
      hr(), tn(t), th = null, ky = 0;
      var o = t.return;
      try {
        if (Vs(
          e,
          o,
          t,
          a,
          Ie
        )) {
          $t = Wy, ho(
            e,
            da(a, e.current)
          ), $e = null;
          return;
        }
      } catch (s) {
        if (o !== null) throw $e = o, s;
        $t = Wy, ho(
          e,
          da(a, e.current)
        ), $e = null;
        return;
      }
      t.flags & 32768 ? (ct || i === Fy ? e = !0 : fh || (Ie & 536870912) !== 0 ? e = !1 : (Ko = e = !0, (i === _f || i === qf || i === Iy || i === sh) && (i = eu.current, i !== null && i.tag === 13 && (i.flags |= 16384))), ad(t, e)) : tf(t);
    }
    function tf(e) {
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
        if (e = t.return, mr(t), a = ce(
          t,
          Kp,
          a,
          t,
          Di
        ), (t.mode & Ql) !== Ht && Fi(t), a !== null) {
          $e = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          $e = t;
          return;
        }
        $e = t = e;
      } while (t !== null);
      $t === Nc && ($t = v1);
    }
    function ad(e, t) {
      do {
        var a = $p(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, $e = a;
          return;
        }
        if ((e.mode & Ql) !== Ht) {
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
      $t = Z0, $e = null;
    }
    function nd(e, t, a, i, o, s, d, h, g) {
      e.cancelPendingCommit = null;
      do
        vo();
      while (kl !== Gf);
      if (Nu.flushLegacyContextWarning(), Nu.flushPendingUnsafeLifecycleWarnings(), (pt & (Ea | _u)) !== fn)
        throw Error("Should not already be working.");
      if (te !== null && typeof te.markCommitStarted == "function" && te.markCommitStarted(a), t === null) zt();
      else {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (s = t.lanes | t.childLanes, s |= Fg, xg(
          e,
          a,
          s,
          d,
          h,
          g
        ), e === Ot && ($e = Ot = null, Ie = 0), rh = t, Io = e, Po = a, zv = s, Rv = o, z1 = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, qm(Bo, function() {
          return lf(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), N0 = Wd(), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = q.T, q.T = null, o = Ee.p, Ee.p = xl, d = pt, pt |= _u;
          try {
            Jr(e, t, a);
          } finally {
            pt = d, Ee.p = o, q.T = i;
          }
        }
        kl = x1, wn(), ud(), a0();
      }
    }
    function wn() {
      if (kl === x1) {
        kl = Gf;
        var e = Io, t = rh, a = Po, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = q.T, q.T = null;
          var o = Ee.p;
          Ee.p = xl;
          var s = pt;
          pt |= _u;
          try {
            ih = a, ch = e, Rm(t, e), ch = ih = null, a = _v;
            var d = Np(e.containerInfo), h = a.focusedElem, g = a.selectionRange;
            if (d !== h && h && h.ownerDocument && wp(
              h.ownerDocument.documentElement,
              h
            )) {
              if (g !== null && jh(h)) {
                var b = g.start, w = g.end;
                if (w === void 0 && (w = b), "selectionStart" in h)
                  h.selectionStart = b, h.selectionEnd = Math.min(
                    w,
                    h.value.length
                  );
                else {
                  var V = h.ownerDocument || document, U = V && V.defaultView || window;
                  if (U.getSelection) {
                    var X = U.getSelection(), oe = h.textContent.length, ze = Math.min(
                      g.start,
                      oe
                    ), Mt = g.end === void 0 ? ze : Math.min(g.end, oe);
                    !X.extend && ze > Mt && (d = Mt, Mt = ze, ze = d);
                    var tt = Nh(
                      h,
                      ze
                    ), T = Nh(
                      h,
                      Mt
                    );
                    if (tt && T && (X.rangeCount !== 1 || X.anchorNode !== tt.node || X.anchorOffset !== tt.offset || X.focusNode !== T.node || X.focusOffset !== T.offset)) {
                      var x = V.createRange();
                      x.setStart(tt.node, tt.offset), X.removeAllRanges(), ze > Mt ? (X.addRange(x), X.extend(T.node, T.offset)) : (x.setEnd(T.node, T.offset), X.addRange(x));
                    }
                  }
                }
              }
              for (V = [], X = h; X = X.parentNode; )
                X.nodeType === 1 && V.push({
                  element: X,
                  left: X.scrollLeft,
                  top: X.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < V.length; h++) {
                var z = V[h];
                z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
              }
            }
            sg = !!Bv, _v = Bv = null;
          } finally {
            pt = s, Ee.p = o, q.T = i;
          }
        }
        e.current = t, kl = A1;
      }
    }
    function ud() {
      if (kl === A1) {
        kl = Gf;
        var e = Io, t = rh, a = Po, i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = q.T, q.T = null;
          var o = Ee.p;
          Ee.p = xl;
          var s = pt;
          pt |= _u;
          try {
            te !== null && typeof te.markLayoutEffectsStarted == "function" && te.markLayoutEffectsStarted(a), ih = a, ch = e, Em(
              e,
              t.alternate,
              t
            ), ch = ih = null, te !== null && typeof te.markLayoutEffectsStopped == "function" && te.markLayoutEffectsStopped();
          } finally {
            pt = s, Ee.p = o, q.T = i;
          }
        }
        kl = E1;
      }
    }
    function a0() {
      if (kl === M2 || kl === E1) {
        kl = Gf, Gg();
        var e = Io, t = rh, a = Po, i = z1, o = (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0;
        o ? kl = Ev : (kl = Gf, rh = Io = null, Nn(e, e.pendingLanes), Vf = 0, ap = null);
        var s = e.pendingLanes;
        if (s === 0 && (Fo = null), o || So(e), o = xh(a), t = t.stateNode, Tl && typeof Tl.onCommitFiberRoot == "function")
          try {
            var d = (t.current.flags & 128) === 128;
            switch (o) {
              case xl:
                var h = Md;
                break;
              case sn:
                h = bf;
                break;
              case Cu:
                h = Bo;
                break;
              case Hd:
                h = Sf;
                break;
              default:
                h = Bo;
            }
            Tl.onCommitFiberRoot(
              Si,
              t,
              h,
              d
            );
          } catch (V) {
            ua || (ua = !0, console.error(
              "React instrumentation encountered an error: %s",
              V
            ));
          }
        if (Zt && e.memoizedUpdaters.clear(), Dm(), i !== null) {
          d = q.T, h = Ee.p, Ee.p = xl, q.T = null;
          try {
            var g = e.onRecoverableError;
            for (t = 0; t < i.length; t++) {
              var b = i[t], w = n0(b.stack);
              ce(
                b.source,
                g,
                b.value,
                w
              );
            }
          } finally {
            q.T = d, Ee.p = h;
          }
        }
        (Po & 3) !== 0 && vo(), Ba(e), s = e.pendingLanes, (a & 4194090) !== 0 && (s & 42) !== 0 ? (B0 = !0, e === Ov ? lp++ : (lp = 0, Ov = e)) : lp = 0, mc(0), zt();
      }
    }
    function n0(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function Nn(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, vn(t)));
    }
    function vo(e) {
      return wn(), ud(), a0(), lf();
    }
    function lf() {
      if (kl !== Ev) return !1;
      var e = Io, t = zv;
      zv = 0;
      var a = xh(Po), i = Cu > a ? Cu : a;
      a = q.T;
      var o = Ee.p;
      try {
        Ee.p = i, q.T = null, i = Rv, Rv = null;
        var s = Io, d = Po;
        if (kl = Gf, rh = Io = null, Po = 0, (pt & (Ea | _u)) !== fn)
          throw Error("Cannot flush passive effects while already rendering.");
        Mv = !0, K0 = !1, te !== null && typeof te.markPassiveEffectsStarted == "function" && te.markPassiveEffectsStarted(d);
        var h = pt;
        if (pt |= _u, Om(s.current), Ws(
          s,
          s.current,
          d,
          i
        ), te !== null && typeof te.markPassiveEffectsStopped == "function" && te.markPassiveEffectsStopped(), So(s), pt = h, mc(0, !1), K0 ? s === ap ? Vf++ : (Vf = 0, ap = s) : Vf = 0, K0 = Mv = !1, Tl && typeof Tl.onPostCommitFiberRoot == "function")
          try {
            Tl.onPostCommitFiberRoot(Si, s);
          } catch (b) {
            ua || (ua = !0, console.error(
              "React instrumentation encountered an error: %s",
              b
            ));
          }
        var g = s.current.stateNode;
        return g.effectDuration = 0, g.passiveEffectDuration = 0, !0;
      } finally {
        Ee.p = o, q.T = a, Nn(e, t);
      }
    }
    function bo(e, t, a) {
      t = da(a, t), t = Dl(e.stateNode, t, 2), e = Pa(e, t, 2), e !== null && (Gc(e, 2), Ba(e));
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
              e = da(a, e), a = Yt(2), i = Pa(t, a, 2), i !== null && (Gs(
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
    function jm(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new E2();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (Tv = !0, o.add(a), i = wg.bind(null, e, t, a), Zt && To(e, a), t.then(i, i));
    }
    function wg(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Cm() && q.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Ot === e && (Ie & a) === a && ($t === Bf || $t === vv && (Ie & 62914560) === Ie && Ln() - Av < S1 ? (pt & Ea) === fn && hc(e, 0) : xv |= a, Yf === Ie && (Yf = 0)), Ba(e);
    }
    function Bm(e, t) {
      t === 0 && (t = is()), e = Kl(e, t), e !== null && (Gc(e, t), Ba(e));
    }
    function af(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), Bm(e, a);
    }
    function ri(e, t) {
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
      i !== null && i.delete(t), Bm(e, a);
    }
    function id(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, s = o.type === Uo;
          s = a || s, o.tag !== 22 ? o.flags & 67108864 ? s && ce(
            o,
            _m,
            i,
            o,
            (o.mode & pb) === Ht
          ) : id(
            i,
            o,
            s
          ) : o.memoizedState === null && (s && o.flags & 8192 ? ce(
            o,
            _m,
            i,
            o
          ) : o.subtreeFlags & 67108864 && ce(
            o,
            id,
            i,
            o,
            s
          )), t = t.sibling;
        }
    }
    function _m(e, t) {
      var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
      He(!0);
      try {
        pa(t), a && Ps(t), Su(e, t.alternate, t, !1), a && $r(e, t, 0, null, !1, 0);
      } finally {
        He(!1);
      }
    }
    function So(e) {
      var t = !0;
      e.current.mode & (oa | wu) || (t = !1), id(
        e,
        e.current,
        t
      );
    }
    function cn(e) {
      if ((pt & Ea) === fn) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = ne(e) || "ReactComponent", $0 !== null) {
            if ($0.has(t)) return;
            $0.add(t);
          } else $0 = /* @__PURE__ */ new Set([t]);
          ce(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function To(e, t) {
      Zt && e.memoizedUpdaters.forEach(function(a) {
        nu(e, a, t);
      });
    }
    function qm(e, t) {
      var a = q.actQueue;
      return a !== null ? (a.push(t), U2) : Od(e, t);
    }
    function u0(e) {
      Cm() && q.actQueue === null && ce(e, function() {
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
      e !== hh && e.next === null && (hh === null ? W0 = hh = e : hh = hh.next = e), F0 = !0, q.actQueue !== null ? Cv || (Cv = !0, tl()) : Dv || (Dv = !0, tl());
    }
    function mc(e, t) {
      if (!Uv && F0) {
        Uv = !0;
        do
          for (var a = !1, i = W0; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var s = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                s = (1 << 31 - Hl(42 | e) + 1) - 1, s &= o & ~(d & ~h), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
              }
              s !== 0 && (a = !0, sd(i, s));
            } else
              s = Ie, s = sa(
                i,
                i === Ot ? s : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== Qf
              ), (s & 3) === 0 || us(i, s) || (a = !0, sd(i, s));
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
      F0 = Cv = Dv = !1;
      var e = 0;
      Xf !== 0 && (xo() && (e = Xf), Xf = 0);
      for (var t = Ln(), a = null, i = W0; i !== null; ) {
        var o = i.next, s = jn(i, t);
        s === 0 ? (i.next = null, a === null ? W0 = o : a.next = o, o === null && (hh = a)) : (a = i, (e !== 0 || (s & 3) !== 0) && (F0 = !0)), i = o;
      }
      mc(e);
    }
    function jn(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes & -62914561; 0 < s; ) {
        var d = 31 - Hl(s), h = 1 << d, g = o[d];
        g === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = gp(h, t)) : g <= t && (e.expiredLanes |= h), s &= ~h;
      }
      if (t = Ot, a = Ie, a = sa(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Qf
      ), i = e.callbackNode, a === 0 || e === t && (St === _f || St === qf) || e.cancelPendingCommit !== null)
        return i !== null && fd(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || us(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || q.actQueue !== null && i !== Hv)
          fd(i);
        else return t;
        switch (xh(a)) {
          case xl:
          case sn:
            a = bf;
            break;
          case Cu:
            a = Bo;
            break;
          case Hd:
            a = Sf;
            break;
          default:
            a = Bo;
        }
        return i = Vt.bind(null, e), q.actQueue !== null ? (q.actQueue.push(i), a = Hv) : a = Od(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && fd(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Vt(e, t) {
      if (B0 = j0 = !1, kl !== Gf && kl !== Ev)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (vo() && e.callbackNode !== a)
        return null;
      var i = Ie;
      return i = sa(
        e,
        e === Ot ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Qf
      ), i === 0 ? null : (el(
        e,
        i,
        t
      ), jn(e, Ln()), e.callbackNode != null && e.callbackNode === a ? Vt.bind(null, e) : null);
    }
    function sd(e, t) {
      if (vo()) return null;
      j0 = B0, B0 = !1, el(e, t, !0);
    }
    function fd(e) {
      e !== Hv && e !== null && Yg(e);
    }
    function tl() {
      q.actQueue !== null && q.actQueue.push(function() {
        return od(), null;
      }), V2(function() {
        (pt & (Ea | _u)) !== fn ? Od(
          Md,
          cd
        ) : od();
      });
    }
    function Ym() {
      return Xf === 0 && (Xf = Sh()), Xf;
    }
    function Gm(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (I(e, "action"), Kc("" + e));
    }
    function Vm(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function Ct(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var s = Gm(
          (o[ia] || null).action
        ), d = i.submitter;
        d && (t = (t = d[ia] || null) ? Gm(t.formAction) : d.getAttribute("formAction"), t !== null && (s = t, d = null));
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
                  if (Xf !== 0) {
                    var g = d ? Vm(
                      o,
                      d
                    ) : new FormData(o), b = {
                      pending: !0,
                      data: g,
                      method: o.method,
                      action: s
                    };
                    Object.freeze(b), tc(
                      a,
                      b,
                      null,
                      g
                    );
                  }
                } else
                  typeof s == "function" && (h.preventDefault(), g = d ? Vm(
                    o,
                    d
                  ) : new FormData(o), b = {
                    pending: !0,
                    data: g,
                    method: o.method,
                    action: s
                  }, Object.freeze(b), tc(
                    a,
                    b,
                    s,
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
        hv(i);
      }
      e.currentTarget = null;
    }
    function Bn(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var o = void 0, s = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], g = h.instance, b = h.currentTarget;
              if (h = h.listener, g !== o && s.isPropagationStopped())
                break e;
              g !== null ? ce(
                g,
                gl,
                s,
                h,
                b
              ) : gl(s, h, b), o = g;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], g = h.instance, b = h.currentTarget, h = h.listener, g !== o && s.isPropagationStopped())
                break e;
              g !== null ? ce(
                g,
                gl,
                s,
                h,
                b
              ) : gl(s, h, b), o = g;
            }
        }
      }
    }
    function ke(e, t) {
      wv.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[my];
      a === void 0 && (a = t[my] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (dd(t, e, 2, !1), a.add(i));
    }
    function rd(e, t, a) {
      wv.has(e) && !t && console.error(
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
      if (!e[I0]) {
        e[I0] = !0, T0.forEach(function(a) {
          a !== "selectionchange" && (wv.has(a) || rd(a, !1, e), rd(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[I0] || (t[I0] = !0, rd("selectionchange", !1, t));
      }
    }
    function dd(e, t, a, i) {
      switch (Ad(t)) {
        case xl:
          var o = Bg;
          break;
        case sn:
          o = xd;
          break;
        default:
          o = yi;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !C || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
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
    function Gl(e, t, a, i, o) {
      var s = i;
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
              if (d = uu(h), d === null) return;
              if (g = d.tag, g === 5 || g === 6 || g === 26 || g === 27) {
                i = s = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      ar(function() {
        var b = s, w = Vi(a), V = [];
        e: {
          var U = yb.get(e);
          if (U !== void 0) {
            var X = ve, oe = e;
            switch (e) {
              case "keypress":
                if ($c(a) === 0) break e;
              case "keydown":
              case "keyup":
                X = KS;
                break;
              case "focusin":
                oe = "focus", X = lt;
                break;
              case "focusout":
                oe = "blur", X = lt;
                break;
              case "beforeblur":
              case "afterblur":
                X = lt;
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
                X = Le;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                X = xe;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                X = FS;
                break;
              case rb:
              case db:
              case hb:
                X = Qg;
                break;
              case mb:
                X = PS;
                break;
              case "scroll":
              case "scrollend":
                X = M;
                break;
              case "wheel":
                X = t2;
                break;
              case "copy":
              case "cut":
              case "paste":
                X = VS;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                X = ab;
                break;
              case "toggle":
              case "beforetoggle":
                X = a2;
            }
            var ze = (t & 4) !== 0, Mt = !ze && (e === "scroll" || e === "scrollend"), tt = ze ? U !== null ? U + "Capture" : null : U;
            ze = [];
            for (var T = b, x; T !== null; ) {
              var z = T;
              if (x = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || x === null || tt === null || (z = ou(T, tt), z != null && ze.push(
                Vl(
                  T,
                  z,
                  x
                )
              )), Mt) break;
              T = T.return;
            }
            0 < ze.length && (U = new X(
              U,
              oe,
              null,
              a,
              w
            ), V.push({
              event: U,
              listeners: ze
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (U = e === "mouseover" || e === "pointerover", X = e === "mouseout" || e === "pointerout", U && a !== f && (oe = a.relatedTarget || a.fromElement) && (uu(oe) || oe[xi]))
              break e;
            if ((X || U) && (U = w.window === w ? w : (U = w.ownerDocument) ? U.defaultView || U.parentWindow : window, X ? (oe = a.relatedTarget || a.toElement, X = b, oe = oe ? uu(oe) : null, oe !== null && (Mt = Ue(oe), ze = oe.tag, oe !== Mt || ze !== 5 && ze !== 27 && ze !== 6) && (oe = null)) : (X = null, oe = b), X !== oe)) {
              if (ze = Le, z = "onMouseLeave", tt = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (ze = ab, z = "onPointerLeave", tt = "onPointerEnter", T = "pointer"), Mt = X == null ? U : qu(X), x = oe == null ? U : qu(oe), U = new ze(
                z,
                T + "leave",
                X,
                a,
                w
              ), U.target = Mt, U.relatedTarget = x, z = null, uu(w) === b && (ze = new ze(
                tt,
                T + "enter",
                oe,
                a,
                w
              ), ze.target = x, ze.relatedTarget = Mt, z = ze), Mt = z, X && oe)
                t: {
                  for (ze = X, tt = oe, T = 0, x = ze; x; x = sl(x))
                    T++;
                  for (x = 0, z = tt; z; z = sl(z))
                    x++;
                  for (; 0 < T - x; )
                    ze = sl(ze), T--;
                  for (; 0 < x - T; )
                    tt = sl(tt), x--;
                  for (; T--; ) {
                    if (ze === tt || tt !== null && ze === tt.alternate)
                      break t;
                    ze = sl(ze), tt = sl(tt);
                  }
                  ze = null;
                }
              else ze = null;
              X !== null && Lm(
                V,
                U,
                X,
                ze,
                !1
              ), oe !== null && Mt !== null && Lm(
                V,
                Mt,
                oe,
                ze,
                !0
              );
            }
          }
          e: {
            if (U = b ? qu(b) : window, X = U.nodeName && U.nodeName.toLowerCase(), X === "select" || X === "input" && U.type === "file")
              var L = Hh;
            else if (Dp(U))
              if (sb)
                L = Dg;
              else {
                L = wh;
                var P = Og;
              }
            else
              X = U.nodeName, !X || X.toLowerCase() !== "input" || U.type !== "checkbox" && U.type !== "radio" ? b && Gi(b.elementType) && (L = Hh) : L = Mg;
            if (L && (L = L(e, b))) {
              cr(
                V,
                L,
                a,
                w
              );
              break e;
            }
            P && P(e, U, b), e === "focusout" && b && U.type === "number" && b.memoizedProps.value != null && Ff(U, "number", U.value);
          }
          switch (P = b ? qu(b) : window, e) {
            case "focusin":
              (Dp(P) || P.contentEditable === "true") && (Xd = P, kg = b, Ny = null);
              break;
            case "focusout":
              Ny = kg = Xd = null;
              break;
            case "mousedown":
              Jg = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Jg = !1, jp(
                V,
                a,
                w
              );
              break;
            case "selectionchange":
              if (c2) break;
            case "keydown":
            case "keyup":
              jp(
                V,
                a,
                w
              );
          }
          var je;
          if (Zg)
            e: {
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
          else
            Vd ? Yl(e, a) && (se = "onCompositionEnd") : e === "keydown" && a.keyCode === nb && (se = "onCompositionStart");
          se && (ub && a.locale !== "ko" && (Vd || se !== "onCompositionStart" ? se === "onCompositionEnd" && Vd && (je = su()) : ($ = w, H = "value" in $ ? $.value : $.textContent, Vd = !0)), P = nf(
            b,
            se
          ), 0 < P.length && (se = new lb(
            se,
            e,
            null,
            a,
            w
          ), V.push({
            event: se,
            listeners: P
          }), je ? se.data = je : (je = Zu(a), je !== null && (se.data = je)))), (je = u2 ? ir(e, a) : gs(e, a)) && (se = nf(
            b,
            "onBeforeInput"
          ), 0 < se.length && (P = new LS(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            w
          ), V.push({
            event: P,
            listeners: se
          }), P.data = je)), Ct(
            V,
            e,
            b,
            a,
            w
          );
        }
        Bn(V, t);
      });
    }
    function Vl(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function nf(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, s = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || s === null || (o = ou(e, a), o != null && i.unshift(
          Vl(e, o, s)
        ), o = ou(e, t), o != null && i.push(
          Vl(e, o, s)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function sl(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Lm(e, t, a, i, o) {
      for (var s = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, g = h.alternate, b = h.stateNode;
        if (h = h.tag, g !== null && g === i) break;
        h !== 5 && h !== 26 && h !== 27 || b === null || (g = b, o ? (b = ou(a, s), b != null && d.unshift(
          Vl(a, b, g)
        )) : o || (b = ou(a, s), b != null && d.push(
          Vl(a, b, g)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function _n(e, t) {
      Jc(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || Cy || (Cy = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Va,
        possibleRegistrationNames: Ac
      };
      Gi(e) || typeof t.is == "string" || Dh(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function Ut(e, t, a, i) {
      t !== a && (a = vl(a), vl(t) !== a && (i[e] = t));
    }
    function di(e, t, a) {
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
      return e = e.namespaceURI === Of || e.namespaceURI === Lo ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function vl(e) {
      return j(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        me(e)
      ), ue(e)), (typeof e == "string" ? e : "" + e).replace(H2, `
`).replace(w2, "");
    }
    function Qm(e, t) {
      return t = vl(t), vl(e) === t;
    }
    function xu() {
    }
    function ut(e, t, a, i, o, s) {
      switch (a) {
        case "children":
          typeof i == "string" ? (ys(i, t, !1), t === "body" || t === "textarea" && i === "" || Yi(e, i)) : (typeof i == "number" || typeof i == "bigint") && (ys("" + i, t, !1), t !== "body" && Yi(e, "" + i));
          break;
        case "className":
          os(e, "class", i);
          break;
        case "tabIndex":
          os(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          os(e, a, i);
          break;
        case "style":
          ps(e, i, s);
          break;
        case "data":
          if (t !== "object") {
            os(e, "data", i);
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
          I(i, a), i = Kc("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || tg || (tg = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || eg || (eg = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || P0 ? t !== "button" || o.type == null || o.type === "submit" || P0 ? typeof i == "function" && (o.name == null || C1 || (C1 = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || tg || (tg = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || eg || (eg = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (P0 = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (P0 = !0, console.error(
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
            typeof s == "function" && (a === "formAction" ? (t !== "input" && ut(e, t, "name", o.name, o, null), ut(
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
          I(i, a), i = Kc("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && _a(a, i), e.onclick = xu);
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
          I(i, a), a = Kc("" + i), e.setAttributeNS(Lf, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (I(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || lg[a] || (lg[a] = !0, console.error(
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
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (I(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (I(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (I(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          ke("beforetoggle", e), ke("toggle", e), cs(e, "popover", i);
          break;
        case "xlinkActuate":
          Ja(
            e,
            Lf,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          Ja(
            e,
            Lf,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          Ja(
            e,
            Lf,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          Ja(
            e,
            Lf,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          Ja(
            e,
            Lf,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          Ja(
            e,
            Lf,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          Ja(
            e,
            Nv,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          Ja(
            e,
            Nv,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          Ja(
            e,
            Nv,
            "xml:space",
            i
          );
          break;
        case "is":
          s != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), cs(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          U1 || i == null || typeof i != "object" || (U1 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = lr(a), cs(e, a, i)) : Va.hasOwnProperty(a) && i != null && typeof i != "function" && _a(a, i);
      }
    }
    function yc(e, t, a, i, o, s) {
      switch (a) {
        case "style":
          ps(e, i, s);
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
          i != null && (typeof i != "function" && _a(a, i), e.onclick = xu);
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
          if (Va.hasOwnProperty(a))
            i != null && typeof i != "function" && _a(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), s = e[ia] || null, s = s != null ? s[a] : null, typeof s == "function" && e.removeEventListener(t, s, o), typeof i == "function")) {
                typeof s != "function" && s !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : cs(e, a, i);
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
          var i = !1, o = !1, s;
          for (s in a)
            if (a.hasOwnProperty(s)) {
              var d = a[s];
              if (d != null)
                switch (s) {
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
                    ut(e, t, s, d, a, null);
                }
            }
          o && ut(e, t, "srcSet", a.srcSet, a, null), i && ut(e, t, "src", a.src, a, null);
          return;
        case "input":
          Gu("input", a), ke("invalid", e);
          var h = s = d = o = null, g = null, b = null;
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
                    b = w;
                    break;
                  case "value":
                    s = w;
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
          Vu(e, a), Ep(
            e,
            s,
            h,
            g,
            b,
            d,
            o,
            !1
          ), iu(e);
          return;
        case "select":
          Gu("select", a), ke("invalid", e), i = d = s = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  s = h;
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
          ds(e, a), t = s, a = d, e.multiple = !!i, t != null ? cu(e, !!i, t, !1) : a != null && cu(e, !!i, a, !0);
          return;
        case "textarea":
          Gu("textarea", a), ke("invalid", e), s = o = i = null;
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
                  s = h;
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
          mn(e, a), Eh(e, i, o, s), iu(e);
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
          for (b in a)
            if (a.hasOwnProperty(b) && (i = a[b], i != null))
              switch (b) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  ut(e, t, b, i, a, null);
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
    function i0(e, t, a, i) {
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
          var o = null, s = null, d = null, h = null, g = null, b = null, w = null;
          for (X in a) {
            var V = a[X];
            if (a.hasOwnProperty(X) && V != null)
              switch (X) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  g = V;
                default:
                  i.hasOwnProperty(X) || ut(
                    e,
                    t,
                    X,
                    null,
                    i,
                    V
                  );
              }
          }
          for (var U in i) {
            var X = i[U];
            if (V = a[U], i.hasOwnProperty(U) && (X != null || V != null))
              switch (U) {
                case "type":
                  s = X;
                  break;
                case "name":
                  o = X;
                  break;
                case "checked":
                  b = X;
                  break;
                case "defaultChecked":
                  w = X;
                  break;
                case "value":
                  d = X;
                  break;
                case "defaultValue":
                  h = X;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (X != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  X !== V && ut(
                    e,
                    t,
                    U,
                    X,
                    i,
                    V
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || D1 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), D1 = !0), !t || i || M1 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), M1 = !0), Xu(
            e,
            d,
            h,
            g,
            b,
            w,
            s,
            o
          );
          return;
        case "select":
          X = d = h = U = null;
          for (s in a)
            if (g = a[s], a.hasOwnProperty(s) && g != null)
              switch (s) {
                case "value":
                  break;
                case "multiple":
                  X = g;
                default:
                  i.hasOwnProperty(s) || ut(
                    e,
                    t,
                    s,
                    null,
                    i,
                    g
                  );
              }
          for (o in i)
            if (s = i[o], g = a[o], i.hasOwnProperty(o) && (s != null || g != null))
              switch (o) {
                case "value":
                  U = s;
                  break;
                case "defaultValue":
                  h = s;
                  break;
                case "multiple":
                  d = s;
                default:
                  s !== g && ut(
                    e,
                    t,
                    o,
                    s,
                    i,
                    g
                  );
              }
          i = h, t = d, a = X, U != null ? cu(e, !!t, U, !1) : !!a != !!t && (i != null ? cu(e, !!t, i, !0) : cu(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          X = U = null;
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
            if (o = i[d], s = a[d], i.hasOwnProperty(d) && (o != null || s != null))
              switch (d) {
                case "value":
                  U = o;
                  break;
                case "defaultValue":
                  X = o;
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
                  o !== s && ut(e, t, d, o, i, s);
              }
          If(e, U, X);
          return;
        case "option":
          for (var oe in a)
            if (U = a[oe], a.hasOwnProperty(oe) && U != null && !i.hasOwnProperty(oe))
              switch (oe) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  ut(
                    e,
                    t,
                    oe,
                    null,
                    i,
                    U
                  );
              }
          for (g in i)
            if (U = i[g], X = a[g], i.hasOwnProperty(g) && U !== X && (U != null || X != null))
              switch (g) {
                case "selected":
                  e.selected = U && typeof U != "function" && typeof U != "symbol";
                  break;
                default:
                  ut(
                    e,
                    t,
                    g,
                    U,
                    i,
                    X
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
            U = a[ze], a.hasOwnProperty(ze) && U != null && !i.hasOwnProperty(ze) && ut(
              e,
              t,
              ze,
              null,
              i,
              U
            );
          for (b in i)
            if (U = i[b], X = a[b], i.hasOwnProperty(b) && U !== X && (U != null || X != null))
              switch (b) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (U != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  ut(
                    e,
                    t,
                    b,
                    U,
                    i,
                    X
                  );
              }
          return;
        default:
          if (Gi(t)) {
            for (var Mt in a)
              U = a[Mt], a.hasOwnProperty(Mt) && U !== void 0 && !i.hasOwnProperty(Mt) && yc(
                e,
                t,
                Mt,
                void 0,
                i,
                U
              );
            for (w in i)
              U = i[w], X = a[w], !i.hasOwnProperty(w) || U === X || U === void 0 && X === void 0 || yc(
                e,
                t,
                w,
                U,
                i,
                X
              );
            return;
          }
      }
      for (var tt in a)
        U = a[tt], a.hasOwnProperty(tt) && U != null && !i.hasOwnProperty(tt) && ut(e, t, tt, null, i, U);
      for (V in i)
        U = i[V], X = a[V], !i.hasOwnProperty(V) || U === X || U == null && X == null || ut(e, t, V, U, i, X);
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
        var i, o = i = "", s;
        for (s in t)
          if (t.hasOwnProperty(s)) {
            var d = t[s];
            d != null && typeof d != "boolean" && d !== "" && (s.indexOf("--") === 0 ? (le(d, s), i += o + s + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || Rf.has(s) ? (le(d, s), i += o + s.replace(Uu, "-$1").toLowerCase().replace(Hu, "-ms-") + ":" + ("" + d).trim()) : i += o + s.replace(Uu, "-$1").toLowerCase().replace(Hu, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = vl(i), vl(t) !== i && (a.style = pc(e)));
      }
    }
    function Xl(e, t, a, i, o, s) {
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
            if (I(i, t), e === "" + i)
              return;
        }
      Ut(t, e, i, s);
    }
    function Jm(e, t, a, i, o, s) {
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
      Ut(t, e, i, s);
    }
    function Km(e, t, a, i, o, s) {
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
            if (I(i, a), e === "" + i)
              return;
        }
      Ut(t, e, i, s);
    }
    function c0(e, t, a, i, o, s) {
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
            if (!isNaN(i) && (I(i, t), e === "" + i))
              return;
        }
      Ut(t, e, i, s);
    }
    function rt(e, t, a, i, o, s) {
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
            if (I(i, t), a = Kc("" + i), e === a)
              return;
        }
      Ut(t, e, i, s);
    }
    function xt(e, t, a, i) {
      for (var o = {}, s = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            s.add(d[h].name);
        }
      if (Gi(t)) {
        for (var g in a)
          if (a.hasOwnProperty(g)) {
            var b = a[g];
            if (b != null) {
              if (Va.hasOwnProperty(g))
                typeof b != "function" && _a(g, b);
              else if (a.suppressHydrationWarning !== !0)
                switch (g) {
                  case "children":
                    typeof b != "string" && typeof b != "number" || Ut(
                      "children",
                      e.textContent,
                      b,
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
                    d = e.innerHTML, b = b ? b.__html : void 0, b != null && (b = hd(e, b), Ut(
                      g,
                      d,
                      b,
                      o
                    ));
                    continue;
                  case "style":
                    s.delete(g), km(e, b, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    s.delete(g.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      g
                    );
                    continue;
                  case "className":
                    s.delete("class"), d = Sp(
                      e,
                      "class",
                      b
                    ), Ut(
                      "className",
                      d,
                      b,
                      o
                    );
                    continue;
                  default:
                    i.context === Bc && t !== "svg" && t !== "math" ? s.delete(g.toLowerCase()) : s.delete(g), d = Sp(
                      e,
                      g,
                      b
                    ), Ut(
                      g,
                      d,
                      b,
                      o
                    );
                }
            }
          }
      } else
        for (b in a)
          if (a.hasOwnProperty(b) && (g = a[b], g != null)) {
            if (Va.hasOwnProperty(b))
              typeof g != "function" && _a(b, g);
            else if (a.suppressHydrationWarning !== !0)
              switch (b) {
                case "children":
                  typeof g != "string" && typeof g != "number" || Ut(
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
                  d = e.innerHTML, g = g ? g.__html : void 0, g != null && (g = hd(e, g), d !== g && (o[b] = { __html: d }));
                  continue;
                case "className":
                  Xl(
                    e,
                    b,
                    "class",
                    g,
                    s,
                    o
                  );
                  continue;
                case "tabIndex":
                  Xl(
                    e,
                    b,
                    "tabindex",
                    g,
                    s,
                    o
                  );
                  continue;
                case "style":
                  s.delete(b), km(e, g, o);
                  continue;
                case "multiple":
                  s.delete(b), Ut(
                    b,
                    e.multiple,
                    g,
                    o
                  );
                  continue;
                case "muted":
                  s.delete(b), Ut(
                    b,
                    e.muted,
                    g,
                    o
                  );
                  continue;
                case "autoFocus":
                  s.delete("autofocus"), Ut(
                    b,
                    e.autofocus,
                    g,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    s.delete(b), d = e.getAttribute("data"), Ut(
                      b,
                      d,
                      g,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(g !== "" || t === "a" && b === "href" || t === "object" && b === "data")) {
                    console.error(
                      b === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      b,
                      b
                    );
                    continue;
                  }
                  rt(
                    e,
                    b,
                    b,
                    g,
                    s,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(b), typeof g == "function") {
                    s.delete(b.toLowerCase()), b === "formAction" ? (s.delete("name"), s.delete("formenctype"), s.delete("formmethod"), s.delete("formtarget")) : (s.delete("enctype"), s.delete("method"), s.delete("target"));
                    continue;
                  } else if (d === N2) {
                    s.delete(b.toLowerCase()), Ut(
                      b,
                      "function",
                      g,
                      o
                    );
                    continue;
                  }
                  rt(
                    e,
                    b,
                    b.toLowerCase(),
                    g,
                    s,
                    o
                  );
                  continue;
                case "xlinkHref":
                  rt(
                    e,
                    b,
                    "xlink:href",
                    g,
                    s,
                    o
                  );
                  continue;
                case "contentEditable":
                  Km(
                    e,
                    b,
                    "contenteditable",
                    g,
                    s,
                    o
                  );
                  continue;
                case "spellCheck":
                  Km(
                    e,
                    b,
                    "spellcheck",
                    g,
                    s,
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
                    b,
                    b,
                    g,
                    s,
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
                    b,
                    b.toLowerCase(),
                    g,
                    s,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var w = d = b, V = o;
                    if (s.delete(w), h = h.getAttribute(w), h === null)
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
                          if (I(g, d), h === "" + g)
                            break e;
                      }
                    Ut(
                      d,
                      h,
                      g,
                      V
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, w = d = b, V = o, s.delete(w), h = h.getAttribute(w), h === null)
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
                          if (!(isNaN(g) || 1 > g) && (I(g, d), h === "" + g))
                            break e;
                      }
                    Ut(
                      d,
                      h,
                      g,
                      V
                    );
                  }
                  continue;
                case "rowSpan":
                  c0(
                    e,
                    b,
                    "rowspan",
                    g,
                    s,
                    o
                  );
                  continue;
                case "start":
                  c0(
                    e,
                    b,
                    b,
                    g,
                    s,
                    o
                  );
                  continue;
                case "xHeight":
                  Xl(
                    e,
                    b,
                    "x-height",
                    g,
                    s,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Xl(
                    e,
                    b,
                    "xlink:actuate",
                    g,
                    s,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Xl(
                    e,
                    b,
                    "xlink:arcrole",
                    g,
                    s,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Xl(
                    e,
                    b,
                    "xlink:role",
                    g,
                    s,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Xl(
                    e,
                    b,
                    "xlink:show",
                    g,
                    s,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Xl(
                    e,
                    b,
                    "xlink:title",
                    g,
                    s,
                    o
                  );
                  continue;
                case "xlinkType":
                  Xl(
                    e,
                    b,
                    "xlink:type",
                    g,
                    s,
                    o
                  );
                  continue;
                case "xmlBase":
                  Xl(
                    e,
                    b,
                    "xml:base",
                    g,
                    s,
                    o
                  );
                  continue;
                case "xmlLang":
                  Xl(
                    e,
                    b,
                    "xml:lang",
                    g,
                    s,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Xl(
                    e,
                    b,
                    "xml:space",
                    g,
                    s,
                    o
                  );
                  continue;
                case "inert":
                  g !== "" || lg[b] || (lg[b] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    b
                  )), Jm(
                    e,
                    b,
                    b,
                    g,
                    s,
                    o
                  );
                  continue;
                default:
                  if (!(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N") {
                    h = lr(b), d = !1, i.context === Bc && t !== "svg" && t !== "math" ? s.delete(h.toLowerCase()) : (w = b.toLowerCase(), w = Rc.hasOwnProperty(
                      w
                    ) && Rc[w] || null, w !== null && w !== b && (d = !0, s.delete(w)), s.delete(h));
                    e: if (w = e, V = h, h = g, wi(V))
                      if (w.hasAttribute(V))
                        w = w.getAttribute(
                          V
                        ), I(
                          h,
                          V
                        ), h = w === "" + h ? h : w;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (w = V.toLowerCase().slice(0, 5), w !== "data-" && w !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || Ut(
                      b,
                      h,
                      g,
                      o
                    );
                  }
              }
          }
      return 0 < s.size && a.suppressHydrationWarning !== !0 && di(e, s, o), Object.keys(o).length === 0 ? null : o;
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
        case Of:
          return ug;
        default:
          return Bc;
      }
    }
    function la(e, t) {
      if (e === Bc)
        switch (t) {
          case "svg":
            return mh;
          case "math":
            return ug;
          default:
            return Bc;
        }
      return e === mh && t === "foreignObject" ? Bc : e;
    }
    function qn(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function xo() {
      var e = window.event;
      return e && e.type === "popstate" ? e === qv ? !1 : (qv = e, !0) : (qv = null, !1);
    }
    function $m(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Au(e, t, a) {
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
      i0(e, t, a, i), e[ia] = i;
    }
    function Eu(e) {
      Yi(e, "");
    }
    function gc(e, t, a) {
      e.nodeValue = a;
    }
    function Yn(e) {
      return e === "head";
    }
    function qa(e, t) {
      e.removeChild(t);
    }
    function Ao(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function Eo(e, t) {
      var a = t, i = 0, o = 0;
      do {
        var s = a.nextSibling;
        if (e.removeChild(a), s && s.nodeType === 8)
          if (a = s.data, a === ng) {
            if (0 < i && 8 > i) {
              a = i;
              var d = e.ownerDocument;
              if (a & B2 && Mo(d.documentElement), a & _2 && Mo(d.body), a & q2)
                for (a = d.head, Mo(a), d = a.firstChild; d; ) {
                  var h = d.nextSibling, g = d.nodeName;
                  d[Yo] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && d.rel.toLowerCase() === "stylesheet" || a.removeChild(d), d = h;
                }
            }
            if (o === 0) {
              e.removeChild(s), Tc(t);
              return;
            }
            o--;
          } else
            a === ag || a === jc || a === up ? o++ : i = a.charCodeAt(0) - 48;
        else i = 0;
        a = s;
      } while (a);
      Tc(t);
    }
    function aa(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Wm(e) {
      e.nodeValue = "";
    }
    function Fm(e, t) {
      t = t[Y2], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
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
    function hi(e, t, a, i) {
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
                if (s = e.getAttribute("rel"), s === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (s !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (s = e.getAttribute("src"), (s !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && s && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          I(o.name, "name");
          var s = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === s)
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
    function Gn(e) {
      return e.data === up || e.data === jc && e.ownerDocument.readyState === w1;
    }
    function Ro(e, t) {
      var a = e.ownerDocument;
      if (e.data !== jc || a.readyState === w1)
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
          if (t = e.data, t === ag || t === up || t === jc || t === jv || t === H1)
            break;
          if (t === ng) return null;
        }
      }
      return e;
    }
    function yd(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var s = i[o];
          a[Zm(s.name)] = s.name.toLowerCase() === "style" ? pc(e) : s.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? { type: "Suspense", props: {} } : e.nodeValue;
    }
    function pd(e, t, a) {
      return a === null || a[j2] !== !0 ? (e.nodeValue === t ? e = null : (t = vl(t), e = vl(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function Im(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === ng) {
            if (t === 0)
              return Sl(e.nextSibling);
            t--;
          } else
            a !== ag && a !== up && a !== jc || t++;
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
          if (a === ag || a === up || a === jc) {
            if (t === 0) return e;
            t--;
          } else a === ng && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function Pm(e) {
      Tc(e);
    }
    function ga(e) {
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
    function va(e, t, a, i) {
      if (!a[xi] && fa(a)) {
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
      Xt(a, e, t), a[wl] = i, a[ia] = t;
    }
    function Mo(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      Xc(e);
    }
    function uf(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function o0(e, t, a) {
      var i = yh;
      if (i && typeof t == "string" && t) {
        var o = ra(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), Y1.has(o) || (Y1.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), Xt(t, "link", e), nl(t), i.head.appendChild(t)));
      }
    }
    function zu(e, t, a, i) {
      var o = (o = Xn.current) ? uf(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = mi(a.href), t = hn(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = mi(a.href);
            var s = hn(o).hoistableStyles, d = s.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Zf, preload: null }
            }, s.set(e, d), (s = o.querySelector(
              Vn(e)
            )) && !s._p && (d.instance = s, d.state.loading = ip | tu), !lu.has(e))) {
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
              lu.set(e, h), s || s0(
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
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = bc(a), t = hn(o).hoistableScripts, i = t.get(a), i || (i = {
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
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : Mu.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : Mu.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : Mu.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function mi(e) {
      return 'href="' + ra(e) + '"';
    }
    function Vn(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function ty(e) {
      return Ge({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function s0(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = ip : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= ip;
      }), t.addEventListener("error", function() {
        return i.loading |= _1;
      }), Xt(t, "link", a), nl(t), e.head.appendChild(t));
    }
    function bc(e) {
      return '[src="' + ra(e) + '"]';
    }
    function Sc(e) {
      return "script[async]" + e;
    }
    function gd(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + ra(a.href) + '"]'
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
            o = mi(a.href);
            var s = e.querySelector(
              Vn(o)
            );
            if (s)
              return t.state.loading |= tu, t.instance = s, nl(s), s;
            i = ty(a), (o = lu.get(o)) && ly(i, o), s = (e.ownerDocument || e).createElement("link"), nl(s);
            var d = s;
            return d._p = new Promise(function(h, g) {
              d.onload = h, d.onerror = g;
            }), Xt(s, "link", i), t.state.loading |= tu, vd(s, a.precedence, e), t.instance = s;
          case "script":
            return s = bc(a.src), (o = e.querySelector(
              Sc(s)
            )) ? (t.instance = o, nl(o), o) : (i = a, (o = lu.get(s)) && (i = Ge({}, a), ay(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), nl(o), Xt(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & tu) === Zf && (i = t.instance, t.state.loading |= tu, vd(i, a.precedence, e));
      return t.instance;
    }
    function vd(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, s = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) s = h;
        else if (s !== o) break;
      }
      s ? s.parentNode.insertBefore(e, s.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function ly(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function ay(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function ny(e, t, a) {
      if (ig === null) {
        var i = /* @__PURE__ */ new Map(), o = ig = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = ig, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var s = a[o];
        if (!(s[Yo] || s[wl] || e === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== Lo) {
          var d = s.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(s) : i.set(d, [s]);
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
    function Do(e, t, a) {
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
              var o = t.onError, s = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), s != null && a.push("`disabled`"), o = Je(a, "and"), o += a.length === 1 ? " prop" : " props", s = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                s,
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
    function cf(e) {
      return !(e.type === "stylesheet" && (e.state.loading & q1) === Zf);
    }
    function f0() {
    }
    function r0(e, t, a) {
      if (cp === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var i = cp;
      if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & tu) === Zf) {
        if (t.instance === null) {
          var o = mi(a.href), s = e.querySelector(
            Vn(o)
          );
          if (s) {
            e = s._p, e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++, i = of.bind(i), e.then(i, i)), t.state.loading |= tu, t.instance = s, nl(s);
            return;
          }
          s = e.ownerDocument || e, a = ty(a), (o = lu.get(o)) && ly(a, o), s = s.createElement("link"), nl(s);
          var d = s;
          d._p = new Promise(function(h, g) {
            d.onload = h, d.onerror = g;
          }), Xt(s, "link", a), t.instance = s;
        }
        i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & q1) === Zf && (i.count++, t = of.bind(i), e.addEventListener("load", t), e.addEventListener("error", t));
      }
    }
    function d0() {
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
    function of() {
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
      e.stylesheets = null, e.unsuspend !== null && (e.count++, cg = /* @__PURE__ */ new Map(), t.forEach(h0, e), cg = null, of.call(e));
    }
    function h0(e, t) {
      if (!(t.state.loading & tu)) {
        var a = cg.get(e);
        if (a) var i = a.get(Gv);
        else {
          a = /* @__PURE__ */ new Map(), cg.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), s = 0; s < o.length; s++) {
            var d = o[s];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(Gv, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), s = a.get(d) || i, s === i && a.set(Gv, o), a.set(d, o), this.count++, i = of.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), s ? s.parentNode.insertBefore(o, s.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= tu;
      }
    }
    function Sd(e, t, a, i, o, s, d, h) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Qf, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Th(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Th(0), this.hiddenUpdates = Th(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = s, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function iy(e, t, a, i, o, s, d, h, g, b, w, V) {
      return e = new Sd(
        e,
        t,
        a,
        d,
        h,
        g,
        b,
        V
      ), t = r2, s === !0 && (t |= oa | wu), Zt && (t |= Ql), s = pe(3, null, null, t), e.current = s, s.stateNode = e, t = zs(), $i(t), e.pooledCache = t, $i(t), s.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, $l(s), e;
    }
    function cy(e) {
      return e ? (e = Qo, e) : Qo;
    }
    function yt(e, t, a, i, o, s) {
      if (Tl && typeof Tl.onScheduleFiberRoot == "function")
        try {
          Tl.onScheduleFiberRoot(Si, i, a);
        } catch (d) {
          ua || (ua = !0, console.error(
            "React instrumentation encountered an error: %s",
            d
          ));
        }
      te !== null && typeof te.markRenderScheduled == "function" && te.markRenderScheduled(t), o = cy(o), i.context === null ? i.context = o : i.pendingContext = o, ca && Sa !== null && !L1 && (L1 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        ne(Sa) || "Unknown"
      )), i = Sn(t), i.payload = { element: a }, s = s === void 0 ? null : s, s !== null && (typeof s != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        s
      ), i.callback = s), a = Pa(e, i, t), a !== null && (Gt(a, e, t), Pu(a, e, t));
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
    function sy(e) {
      if (e.tag === 13) {
        var t = Kl(e, 67108864);
        t !== null && Gt(t, e, 67108864), oy(e, 67108864);
      }
    }
    function Ng() {
      return Sa;
    }
    function jg() {
      for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; 31 > a; a++) {
        var i = Tg(t);
        e.set(t, i), t *= 2;
      }
      return e;
    }
    function Bg(e, t, a, i) {
      var o = q.T;
      q.T = null;
      var s = Ee.p;
      try {
        Ee.p = xl, yi(e, t, a, i);
      } finally {
        Ee.p = s, q.T = o;
      }
    }
    function xd(e, t, a, i) {
      var o = q.T;
      q.T = null;
      var s = Ee.p;
      try {
        Ee.p = sn, yi(e, t, a, i);
      } finally {
        Ee.p = s, q.T = o;
      }
    }
    function yi(e, t, a, i) {
      if (sg) {
        var o = sf(i);
        if (o === null)
          Gl(
            e,
            t,
            i,
            fg,
            a
          ), pi(e, i);
        else if (ff(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (pi(e, i), t & 4 && -1 < L2.indexOf(e)) {
          for (; o !== null; ) {
            var s = fa(o);
            if (s !== null)
              switch (s.tag) {
                case 3:
                  if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                    var d = Ui(s.pendingLanes);
                    if (d !== 0) {
                      var h = s;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var g = 1 << 31 - Hl(d);
                        h.entanglements[1] |= g, d &= ~g;
                      }
                      Ba(s), (pt & (Ea | _u)) === fn && (J0 = Ln() + T1, mc(0));
                    }
                  }
                  break;
                case 13:
                  h = Kl(s, 2), h !== null && Gt(h, s, 2), dc(), oy(s, 2);
              }
            if (s = sf(i), s === null && Gl(
              e,
              t,
              i,
              fg,
              a
            ), s === o) break;
            o = s;
          }
          o !== null && i.stopPropagation();
        } else
          Gl(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function sf(e) {
      return e = Vi(e), Co(e);
    }
    function Co(e) {
      if (fg = null, e = uu(e), e !== null) {
        var t = Ue(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = Pe(t), e !== null) return e;
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
          return xl;
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
          return sn;
        case "message":
          switch (bi()) {
            case Md:
              return xl;
            case bf:
              return sn;
            case Bo:
            case Vg:
              return Cu;
            case Sf:
              return Hd;
            default:
              return Cu;
          }
        default:
          return Cu;
      }
    }
    function pi(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          es = null;
          break;
        case "dragenter":
        case "dragleave":
          ts = null;
          break;
        case "mouseover":
        case "mouseout":
          ls = null;
          break;
        case "pointerover":
        case "pointerout":
          sp.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          fp.delete(t.pointerId);
      }
    }
    function na(e, t, a, i, o, s) {
      return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: s,
        targetContainers: [o]
      }, t !== null && (t = fa(t), t !== null && sy(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function ff(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return es = na(
            es,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return ts = na(
            ts,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return ls = na(
            ls,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var s = o.pointerId;
          return sp.set(
            s,
            na(
              sp.get(s) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return s = o.pointerId, fp.set(
            s,
            na(
              fp.get(s) || null,
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
    function m0(e) {
      var t = uu(e.target);
      if (t !== null) {
        var a = Ue(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = Pe(a), t !== null) {
              e.blockedOn = t, Ag(e.priority, function() {
                if (a.tag === 13) {
                  var i = ta(a);
                  i = Bl(i);
                  var o = Kl(
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
    function rf(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = sf(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          f !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), f = o, a.target.dispatchEvent(i), f === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), f = null;
        } else
          return t = fa(a), t !== null && sy(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function fy(e, t, a) {
      rf(e) && a.delete(t);
    }
    function y0() {
      Vv = !1, es !== null && rf(es) && (es = null), ts !== null && rf(ts) && (ts = null), ls !== null && rf(ls) && (ls = null), sp.forEach(fy), fp.forEach(fy);
    }
    function df(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Vv || (Vv = !0, Qt.unstable_scheduleCallback(
        Qt.unstable_NormalPriority,
        y0
      )));
    }
    function p0(e) {
      rg !== e && (rg = e, Qt.unstable_scheduleCallback(
        Qt.unstable_NormalPriority,
        function() {
          rg === e && (rg = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (Co(i || a) === null)
                continue;
              break;
            }
            var s = fa(a);
            s !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), tc(
              s,
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
        return df(g, e);
      }
      es !== null && df(es, e), ts !== null && df(ts, e), ls !== null && df(ls, e), sp.forEach(t), fp.forEach(t);
      for (var a = 0; a < as.length; a++) {
        var i = as[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < as.length && (a = as[0], a.blockedOn === null); )
        m0(a), a.blockedOn === null && as.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], s = a[i + 1], d = o[ia] || null;
          if (typeof s == "function")
            d || p0(a);
          else if (d) {
            var h = null;
            if (s && s.hasAttribute("formAction")) {
              if (o = s, d = s[ia] || null)
                h = d.formAction;
              else if (Co(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), p0(a);
          }
        }
    }
    function Ed(e) {
      this._internalRoot = e;
    }
    function hf(e) {
      this._internalRoot = e;
    }
    function g0(e) {
      e[xi] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Qt = bS(), mf = Za, _g = vS, Ge = Object.assign, yf = Symbol.for("react.element"), gi = Symbol.for("react.transitional.element"), xc = Symbol.for("react.portal"), Ne = Symbol.for("react.fragment"), Uo = Symbol.for("react.strict_mode"), Ho = Symbol.for("react.profiler"), ry = Symbol.for("react.provider"), zd = Symbol.for("react.consumer"), Ya = Symbol.for("react.context"), Ru = Symbol.for("react.forward_ref"), wo = Symbol.for("react.suspense"), vi = Symbol.for("react.suspense_list"), pf = Symbol.for("react.memo"), ba = Symbol.for("react.lazy"), dy = Symbol.for("react.activity"), v0 = Symbol.for("react.memo_cache_sentinel"), hy = Symbol.iterator, Rd = Symbol.for("react.client.reference"), Me = Array.isArray, q = mf.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ee = _g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, qg = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), gf = [], vf = [], Ga = -1, Ou = gt(null), No = gt(null), Xn = gt(null), jo = gt(null), Mu = Object.prototype.hasOwnProperty, Od = Qt.unstable_scheduleCallback, Yg = Qt.unstable_cancelCallback, b0 = Qt.unstable_shouldYield, Gg = Qt.unstable_requestPaint, Ln = Qt.unstable_now, bi = Qt.unstable_getCurrentPriorityLevel, Md = Qt.unstable_ImmediatePriority, bf = Qt.unstable_UserBlockingPriority, Bo = Qt.unstable_NormalPriority, Vg = Qt.unstable_LowPriority, Sf = Qt.unstable_IdlePriority, Xg = Qt.log, on = Qt.unstable_setDisableYieldValue, Si = null, Tl = null, te = null, ua = !1, Zt = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Hl = Math.clz32 ? Math.clz32 : bh, Dd = Math.log, Du = Math.LN2, Cd = 256, Ud = 4194304, xl = 2, sn = 8, Cu = 32, Hd = 268435456, Ti = Math.random().toString(36).slice(2), wl = "__reactFiber$" + Ti, ia = "__reactProps$" + Ti, xi = "__reactContainer$" + Ti, my = "__reactEvents$" + Ti, S0 = "__reactListeners$" + Ti, _o = "__reactHandles$" + Ti, qo = "__reactResources$" + Ti, Yo = "__reactMarker$" + Ti, T0 = /* @__PURE__ */ new Set(), Va = {}, Ac = {}, x0 = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, wd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Nd = {}, jd = {}, Ai = 0, yy, py, A0, gy, Go, E0, z0;
    Kf.__reactDisabledLog = !0;
    var vy, Tf, Vo = !1, xf = new (typeof WeakMap == "function" ? WeakMap : Map)(), Sa = null, ca = !1, Lg = /[\n"\\]/g, by = !1, Sy = !1, Ty = !1, xy = !1, Bd = !1, Ay = !1, Af = ["value", "defaultValue"], R0 = !1, O0 = /["'&<>\n\t]|^\s|\s$/, Ey = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), _d = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), qd = _d.concat(["button"]), zy = "dd dt li option optgroup p rp rt".split(" "), Ry = {
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
    }, Xo = {}, Qn = {
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
    }, Uu = /([A-Z])/g, Hu = /^ms-/, Ef = /^(?:webkit|moz|o)[A-Z]/, zf = /^-ms-/, Ei = /-(.)/g, M0 = /;\s*$/, Ec = {}, zc = {}, D0 = !1, Oy = !1, Rf = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Of = "http://www.w3.org/1998/Math/MathML", Lo = "http://www.w3.org/2000/svg", Yd = /* @__PURE__ */ new Map([
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
    }, My = {
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
    }, Zn = {}, Dy = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Gd = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Cy = !1, Ll = {}, Mf = /^on./, l = /^on[^A-Z]/, n = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), u = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), c = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, f = null, r = null, m = null, p = !1, S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), C = !1;
    if (S)
      try {
        var Q = {};
        Object.defineProperty(Q, "passive", {
          get: function() {
            C = !0;
          }
        }), window.addEventListener("test", Q, Q), window.removeEventListener("test", Q, Q);
      } catch {
        C = !1;
      }
    var $ = null, H = null, N = null, ge = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, ve = yl(ge), it = Ge({}, ge, { view: 0, detail: 0 }), M = yl(it), R, D, K, ie = Ge({}, it, {
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
        return "movementX" in e ? e.movementX : (e !== K && (K && e.type === "mousemove" ? (R = e.screenX - K.screenX, D = e.screenY - K.screenY) : D = R = 0, K = e), R);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : D;
      }
    }), Le = yl(ie), ye = Ge({}, ie, { dataTransfer: 0 }), xe = yl(ye), fl = Ge({}, it, { relatedTarget: 0 }), lt = yl(fl), zi = Ge({}, ge, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Qg = yl(zi), GS = Ge({}, ge, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), VS = yl(GS), XS = Ge({}, ge, { data: 0 }), lb = yl(
      XS
    ), LS = lb, QS = {
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
    }, ZS = {
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
    }, kS = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, JS = Ge({}, it, {
      key: function(e) {
        if (e.key) {
          var t = QS[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = $c(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ZS[e.keyCode] || "Unidentified" : "";
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
    }), KS = yl(JS), $S = Ge({}, ie, {
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
    }), ab = yl($S), WS = Ge({}, it, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ur
    }), FS = yl(WS), IS = Ge({}, ge, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), PS = yl(IS), e2 = Ge({}, ie, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), t2 = yl(e2), l2 = Ge({}, ge, {
      newState: 0,
      oldState: 0
    }), a2 = yl(l2), n2 = [9, 13, 27, 32], nb = 229, Zg = S && "CompositionEvent" in window, Uy = null;
    S && "documentMode" in document && (Uy = document.documentMode);
    var u2 = S && "TextEvent" in window && !Uy, ub = S && (!Zg || Uy && 8 < Uy && 11 >= Uy), ib = 32, cb = String.fromCharCode(ib), ob = !1, Vd = !1, i2 = {
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
    }, Hy = null, wy = null, sb = !1;
    S && (sb = Uh("input") && (!document.documentMode || 9 < document.documentMode));
    var Ta = typeof Object.is == "function" ? Object.is : Cg, c2 = S && "documentMode" in document && 11 >= document.documentMode, Xd = null, kg = null, Ny = null, Jg = !1, Ld = {
      animationend: fu("Animation", "AnimationEnd"),
      animationiteration: fu("Animation", "AnimationIteration"),
      animationstart: fu("Animation", "AnimationStart"),
      transitionrun: fu("Transition", "TransitionRun"),
      transitionstart: fu("Transition", "TransitionStart"),
      transitioncancel: fu("Transition", "TransitionCancel"),
      transitionend: fu("Transition", "TransitionEnd")
    }, Kg = {}, fb = {};
    S && (fb = document.createElement("div").style, "AnimationEvent" in window || (delete Ld.animationend.animation, delete Ld.animationiteration.animation, delete Ld.animationstart.animation), "TransitionEvent" in window || delete Ld.transitionend.transition);
    var rb = Qi("animationend"), db = Qi("animationiteration"), hb = Qi("animationstart"), o2 = Qi("transitionrun"), s2 = Qi("transitionstart"), f2 = Qi("transitioncancel"), mb = Qi("transitionend"), yb = /* @__PURE__ */ new Map(), $g = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    $g.push("scrollEnd");
    var Wg = /* @__PURE__ */ new WeakMap(), C0 = 1, Oc = 2, kn = [], Qd = 0, Fg = 0, Qo = {};
    Object.freeze(Qo);
    var Jn = null, Zd = null, Ht = 0, r2 = 1, Ql = 2, oa = 8, wu = 16, pb = 64, gb = !1;
    try {
      var vb = Object.preventExtensions({});
    } catch {
      gb = !0;
    }
    var kd = [], Jd = 0, U0 = null, H0 = 0, Kn = [], $n = 0, Df = null, Mc = 1, Dc = "", xa = null, Kt = null, ct = !1, Cc = !1, Wn = null, Cf = null, Ri = !1, Ig = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), bb = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var d2 = performance, Sb = function() {
        return d2.now();
      };
    else {
      var h2 = Date;
      Sb = function() {
        return h2.now();
      };
    }
    var Pg = gt(null), ev = gt(null), Tb = {}, w0 = null, Kd = null, $d = !1, m2 = typeof AbortController < "u" ? AbortController : function() {
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
    }, y2 = Qt.unstable_scheduleCallback, p2 = Qt.unstable_NormalPriority, Al = {
      $$typeof: Ya,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Wd = Qt.unstable_now, xb = -0, N0 = -0, Xa = -1.1, Uf = -0, j0 = !1, B0 = !1, jy = null, tv = 0, Hf = 0, Fd = null, Ab = q.S;
    q.S = function(e, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && Gp(e, t), Ab !== null && Ab(e, t);
    };
    var wf = gt(null), Nu = {
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
    }, By = [], _y = [], qy = [], Yy = [], Gy = [], Vy = [], Nf = /* @__PURE__ */ new Set();
    Nu.recordUnsafeLifecycleWarnings = function(e, t) {
      Nf.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && By.push(e), e.mode & oa && typeof t.UNSAFE_componentWillMount == "function" && _y.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && qy.push(e), e.mode & oa && typeof t.UNSAFE_componentWillReceiveProps == "function" && Yy.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Gy.push(e), e.mode & oa && typeof t.UNSAFE_componentWillUpdate == "function" && Vy.push(e));
    }, Nu.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < By.length && (By.forEach(function(h) {
        e.add(
          ne(h) || "Component"
        ), Nf.add(h.type);
      }), By = []);
      var t = /* @__PURE__ */ new Set();
      0 < _y.length && (_y.forEach(function(h) {
        t.add(
          ne(h) || "Component"
        ), Nf.add(h.type);
      }), _y = []);
      var a = /* @__PURE__ */ new Set();
      0 < qy.length && (qy.forEach(function(h) {
        a.add(
          ne(h) || "Component"
        ), Nf.add(h.type);
      }), qy = []);
      var i = /* @__PURE__ */ new Set();
      0 < Yy.length && (Yy.forEach(
        function(h) {
          i.add(
            ne(h) || "Component"
          ), Nf.add(h.type);
        }
      ), Yy = []);
      var o = /* @__PURE__ */ new Set();
      0 < Gy.length && (Gy.forEach(function(h) {
        o.add(
          ne(h) || "Component"
        ), Nf.add(h.type);
      }), Gy = []);
      var s = /* @__PURE__ */ new Set();
      if (0 < Vy.length && (Vy.forEach(function(h) {
        s.add(
          ne(h) || "Component"
        ), Nf.add(h.type);
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
      )), 0 < s.size && (d = Re(
        s
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
    var _0 = /* @__PURE__ */ new Map(), Eb = /* @__PURE__ */ new Set();
    Nu.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & oa && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !Eb.has(e.type) && (i = _0.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], _0.set(a, i)), i.push(e));
    }, Nu.flushLegacyContextWarning = function() {
      _0.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(ne(o) || "Component"), Eb.add(o.type);
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
    }, Nu.discardPendingWarnings = function() {
      By = [], _y = [], qy = [], Yy = [], Gy = [], Vy = [], _0 = /* @__PURE__ */ new Map();
    };
    var Xy = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), zb = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), q0 = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), lv = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Ly = null, Y0 = !1, Fn = 0, In = 1, Aa = 2, Zl = 4, El = 8, Rb = 0, Ob = 1, Mb = 2, av = 3, Zo = !1, Db = !1, nv = null, uv = !1, Id = gt(null), G0 = gt(0), Pd, Cb = /* @__PURE__ */ new Set(), Ub = /* @__PURE__ */ new Set(), iv = /* @__PURE__ */ new Set(), Hb = /* @__PURE__ */ new Set(), ko = 0, De = null, At = null, rl = null, V0 = !1, eh = !1, jf = !1, X0 = 0, Qy = 0, Uc = null, g2 = 0, v2 = 25, G = null, Pn = null, Hc = -1, Zy = !1, L0 = {
      readContext: Rt,
      use: xn,
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
    }, cv = null, wb = null, ov = null, Nb = null, Oi = null, ju = null, Q0 = null;
    cv = {
      readContext: function(e) {
        return Rt(e);
      },
      use: xn,
      useCallback: function(e, t) {
        return G = "useCallback", Xe(), Da(t), Ns(e, t);
      },
      useContext: function(e) {
        return G = "useContext", Xe(), Rt(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", Xe(), Da(t), br(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", Xe(), Da(a), Tr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        G = "useInsertionEffect", Xe(), Da(t), wa(4, Aa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", Xe(), Da(t), Sr(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", Xe(), Da(t);
        var a = q.H;
        q.H = Oi;
        try {
          return xr(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", Xe();
        var i = q.H;
        q.H = Oi;
        try {
          return at(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function(e) {
        return G = "useRef", Xe(), ws(e);
      },
      useState: function(e) {
        G = "useState", Xe();
        var t = q.H;
        q.H = Oi;
        try {
          return yu(e);
        } finally {
          q.H = t;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", Xe();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", Xe(), Ar(e, t);
      },
      useTransition: function() {
        return G = "useTransition", Xe(), Rn();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", Xe(), mu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", Xe(), On();
      },
      useFormState: function(e, t) {
        return G = "useFormState", Xe(), to(), co(e, t);
      },
      useActionState: function(e, t) {
        return G = "useActionState", Xe(), co(e, t);
      },
      useOptimistic: function(e) {
        return G = "useOptimistic", Xe(), ln(e);
      },
      useHostTransitionStatus: Il,
      useMemoCache: kt,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", Xe(), lc();
      }
    }, wb = {
      readContext: function(e) {
        return Rt(e);
      },
      use: xn,
      useCallback: function(e, t) {
        return G = "useCallback", W(), Ns(e, t);
      },
      useContext: function(e) {
        return G = "useContext", W(), Rt(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", W(), br(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", W(), Tr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        G = "useInsertionEffect", W(), wa(4, Aa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", W(), Sr(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", W();
        var a = q.H;
        q.H = Oi;
        try {
          return xr(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", W();
        var i = q.H;
        q.H = Oi;
        try {
          return at(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function(e) {
        return G = "useRef", W(), ws(e);
      },
      useState: function(e) {
        G = "useState", W();
        var t = q.H;
        q.H = Oi;
        try {
          return yu(e);
        } finally {
          q.H = t;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", W();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", W(), Ar(e, t);
      },
      useTransition: function() {
        return G = "useTransition", W(), Rn();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", W(), mu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", W(), On();
      },
      useActionState: function(e, t) {
        return G = "useActionState", W(), co(e, t);
      },
      useFormState: function(e, t) {
        return G = "useFormState", W(), to(), co(e, t);
      },
      useOptimistic: function(e) {
        return G = "useOptimistic", W(), ln(e);
      },
      useHostTransitionStatus: Il,
      useMemoCache: kt,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", W(), lc();
      }
    }, ov = {
      readContext: function(e) {
        return Rt(e);
      },
      use: xn,
      useCallback: function(e, t) {
        return G = "useCallback", W(), ec(e, t);
      },
      useContext: function(e) {
        return G = "useContext", W(), Rt(e);
      },
      useEffect: function(e, t) {
        G = "useEffect", W(), Pt(2048, El, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", W(), zn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", W(), Pt(4, Aa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", W(), Pt(4, Zl, e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", W();
        var a = q.H;
        q.H = ju;
        try {
          return ni(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", W();
        var i = q.H;
        q.H = ju;
        try {
          return Ua(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function() {
        return G = "useRef", W(), et().memoizedState;
      },
      useState: function() {
        G = "useState", W();
        var e = q.H;
        q.H = ju;
        try {
          return Ua(nt);
        } finally {
          q.H = e;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", W();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", W(), js(e, t);
      },
      useTransition: function() {
        return G = "useTransition", W(), Rr();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", W(), Ds(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", W(), et().memoizedState;
      },
      useFormState: function(e) {
        return G = "useFormState", W(), to(), vr(e);
      },
      useActionState: function(e) {
        return G = "useActionState", W(), vr(e);
      },
      useOptimistic: function(e, t) {
        return G = "useOptimistic", W(), pu(e, t);
      },
      useHostTransitionStatus: Il,
      useMemoCache: kt,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", W(), et().memoizedState;
      }
    }, Nb = {
      readContext: function(e) {
        return Rt(e);
      },
      use: xn,
      useCallback: function(e, t) {
        return G = "useCallback", W(), ec(e, t);
      },
      useContext: function(e) {
        return G = "useContext", W(), Rt(e);
      },
      useEffect: function(e, t) {
        G = "useEffect", W(), Pt(2048, El, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", W(), zn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", W(), Pt(4, Aa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", W(), Pt(4, Zl, e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", W();
        var a = q.H;
        q.H = Q0;
        try {
          return ni(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", W();
        var i = q.H;
        q.H = Q0;
        try {
          return Pi(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function() {
        return G = "useRef", W(), et().memoizedState;
      },
      useState: function() {
        G = "useState", W();
        var e = q.H;
        q.H = Q0;
        try {
          return Pi(nt);
        } finally {
          q.H = e;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", W();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", W(), Er(e, t);
      },
      useTransition: function() {
        return G = "useTransition", W(), Or();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", W(), Ds(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", W(), et().memoizedState;
      },
      useFormState: function(e) {
        return G = "useFormState", W(), to(), oo(e);
      },
      useActionState: function(e) {
        return G = "useActionState", W(), oo(e);
      },
      useOptimistic: function(e, t) {
        return G = "useOptimistic", W(), gr(e, t);
      },
      useHostTransitionStatus: Il,
      useMemoCache: kt,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", W(), et().memoizedState;
      }
    }, Oi = {
      readContext: function(e) {
        return re(), Rt(e);
      },
      use: function(e) {
        return Y(), xn(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", Y(), Xe(), Ns(e, t);
      },
      useContext: function(e) {
        return G = "useContext", Y(), Xe(), Rt(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", Y(), Xe(), br(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", Y(), Xe(), Tr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        G = "useInsertionEffect", Y(), Xe(), wa(4, Aa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", Y(), Xe(), Sr(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", Y(), Xe();
        var a = q.H;
        q.H = Oi;
        try {
          return xr(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", Y(), Xe();
        var i = q.H;
        q.H = Oi;
        try {
          return at(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function(e) {
        return G = "useRef", Y(), Xe(), ws(e);
      },
      useState: function(e) {
        G = "useState", Y(), Xe();
        var t = q.H;
        q.H = Oi;
        try {
          return yu(e);
        } finally {
          q.H = t;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", Y(), Xe();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", Y(), Xe(), Ar(e, t);
      },
      useTransition: function() {
        return G = "useTransition", Y(), Xe(), Rn();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", Y(), Xe(), mu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", Y(), Xe(), On();
      },
      useFormState: function(e, t) {
        return G = "useFormState", Y(), Xe(), co(e, t);
      },
      useActionState: function(e, t) {
        return G = "useActionState", Y(), Xe(), co(e, t);
      },
      useOptimistic: function(e) {
        return G = "useOptimistic", Y(), Xe(), ln(e);
      },
      useMemoCache: function(e) {
        return Y(), kt(e);
      },
      useHostTransitionStatus: Il,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", Xe(), lc();
      }
    }, ju = {
      readContext: function(e) {
        return re(), Rt(e);
      },
      use: function(e) {
        return Y(), xn(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", Y(), W(), ec(e, t);
      },
      useContext: function(e) {
        return G = "useContext", Y(), W(), Rt(e);
      },
      useEffect: function(e, t) {
        G = "useEffect", Y(), W(), Pt(2048, El, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", Y(), W(), zn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", Y(), W(), Pt(4, Aa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", Y(), W(), Pt(4, Zl, e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", Y(), W();
        var a = q.H;
        q.H = ju;
        try {
          return ni(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", Y(), W();
        var i = q.H;
        q.H = ju;
        try {
          return Ua(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function() {
        return G = "useRef", Y(), W(), et().memoizedState;
      },
      useState: function() {
        G = "useState", Y(), W();
        var e = q.H;
        q.H = ju;
        try {
          return Ua(nt);
        } finally {
          q.H = e;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", Y(), W();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", Y(), W(), js(e, t);
      },
      useTransition: function() {
        return G = "useTransition", Y(), W(), Rr();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", Y(), W(), Ds(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", Y(), W(), et().memoizedState;
      },
      useFormState: function(e) {
        return G = "useFormState", Y(), W(), vr(e);
      },
      useActionState: function(e) {
        return G = "useActionState", Y(), W(), vr(e);
      },
      useOptimistic: function(e, t) {
        return G = "useOptimistic", Y(), W(), pu(e, t);
      },
      useMemoCache: function(e) {
        return Y(), kt(e);
      },
      useHostTransitionStatus: Il,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", W(), et().memoizedState;
      }
    }, Q0 = {
      readContext: function(e) {
        return re(), Rt(e);
      },
      use: function(e) {
        return Y(), xn(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", Y(), W(), ec(e, t);
      },
      useContext: function(e) {
        return G = "useContext", Y(), W(), Rt(e);
      },
      useEffect: function(e, t) {
        G = "useEffect", Y(), W(), Pt(2048, El, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", Y(), W(), zn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", Y(), W(), Pt(4, Aa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", Y(), W(), Pt(4, Zl, e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", Y(), W();
        var a = q.H;
        q.H = ju;
        try {
          return ni(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", Y(), W();
        var i = q.H;
        q.H = ju;
        try {
          return Pi(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function() {
        return G = "useRef", Y(), W(), et().memoizedState;
      },
      useState: function() {
        G = "useState", Y(), W();
        var e = q.H;
        q.H = ju;
        try {
          return Pi(nt);
        } finally {
          q.H = e;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", Y(), W();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", Y(), W(), Er(e, t);
      },
      useTransition: function() {
        return G = "useTransition", Y(), W(), Or();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", Y(), W(), Ds(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", Y(), W(), et().memoizedState;
      },
      useFormState: function(e) {
        return G = "useFormState", Y(), W(), oo(e);
      },
      useActionState: function(e) {
        return G = "useActionState", Y(), W(), oo(e);
      },
      useOptimistic: function(e, t) {
        return G = "useOptimistic", Y(), W(), gr(e, t);
      },
      useMemoCache: function(e) {
        return Y(), kt(e);
      },
      useHostTransitionStatus: Il,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", W(), et().memoizedState;
      }
    };
    var jb = {
      "react-stack-bottom-frame": function(e, t, a) {
        var i = ca;
        ca = !0;
        try {
          return e(t, a);
        } finally {
          ca = i;
        }
      }
    }, sv = jb["react-stack-bottom-frame"].bind(jb), Bb = {
      "react-stack-bottom-frame": function(e) {
        var t = ca;
        ca = !0;
        try {
          return e.render();
        } finally {
          ca = t;
        }
      }
    }, _b = Bb["react-stack-bottom-frame"].bind(Bb), qb = {
      "react-stack-bottom-frame": function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          Te(e, e.return, a);
        }
      }
    }, fv = qb["react-stack-bottom-frame"].bind(qb), Yb = {
      "react-stack-bottom-frame": function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (s) {
          Te(e, e.return, s);
        }
      }
    }, Gb = Yb["react-stack-bottom-frame"].bind(Yb), Vb = {
      "react-stack-bottom-frame": function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, b2 = Vb["react-stack-bottom-frame"].bind(Vb), Xb = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          Te(e, t, i);
        }
      }
    }, Lb = Xb["react-stack-bottom-frame"].bind(Xb), Qb = {
      "react-stack-bottom-frame": function(e) {
        e.resourceKind != null && console.error(
          "Expected only SimpleEffects when enableUseEffectCRUDOverload is disabled, got %s",
          e.resourceKind
        );
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, S2 = Qb["react-stack-bottom-frame"].bind(Qb), Zb = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a();
        } catch (i) {
          Te(e, t, i);
        }
      }
    }, T2 = Zb["react-stack-bottom-frame"].bind(Zb), kb = {
      "react-stack-bottom-frame": function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, Jo = kb["react-stack-bottom-frame"].bind(kb), th = null, ky = 0, Qe = null, rv, Jb = rv = !1, Kb = {}, $b = {}, Wb = {};
    ee = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = ne(e), o = i || "null";
        if (!Kb[o]) {
          Kb[o] = !0, a = a._owner, e = e._debugOwner;
          var s = "";
          e && typeof e.tag == "number" && (o = ne(e)) && (s = `

Check the render method of \`` + o + "`."), s || i && (s = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = ne(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), ce(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              s,
              d
            );
          });
        }
      }
    };
    var lh = Ys(!0), Fb = Ys(!1), eu = gt(null), Mi = null, ah = 1, Jy = 2, zl = gt(0), Ib = {}, Pb = /* @__PURE__ */ new Set(), e1 = /* @__PURE__ */ new Set(), t1 = /* @__PURE__ */ new Set(), l1 = /* @__PURE__ */ new Set(), a1 = /* @__PURE__ */ new Set(), n1 = /* @__PURE__ */ new Set(), u1 = /* @__PURE__ */ new Set(), i1 = /* @__PURE__ */ new Set(), c1 = /* @__PURE__ */ new Set(), o1 = /* @__PURE__ */ new Set();
    Object.freeze(Ib);
    var dv = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = ta(e), o = Sn(i);
        o.payload = t, a != null && (sm(a), o.callback = a), t = Pa(e, o, i), t !== null && (Gt(t, e, i), Pu(t, e, i)), Ci(e, i);
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = ta(e), o = Sn(i);
        o.tag = Ob, o.payload = t, a != null && (sm(a), o.callback = a), t = Pa(e, o, i), t !== null && (Gt(t, e, i), Pu(t, e, i)), Ci(e, i);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = ta(e), i = Sn(a);
        i.tag = Mb, t != null && (sm(t), i.callback = t), t = Pa(e, i, a), t !== null && (Gt(t, e, a), Pu(t, e, a)), te !== null && typeof te.markForceUpdateScheduled == "function" && te.markForceUpdateScheduled(e, a);
      }
    }, hv = typeof reportError == "function" ? reportError : function(e) {
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
    }, nh = null, mv = null, s1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Nl = !1, f1 = {}, r1 = {}, d1 = {}, h1 = {}, uh = !1, m1 = {}, yv = {}, pv = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, y1 = !1, p1 = null;
    p1 = /* @__PURE__ */ new Set();
    var wc = !1, ll = !1, gv = !1, g1 = typeof WeakSet == "function" ? WeakSet : Set, jl = null, ih = null, ch = null, dl = null, La = !1, Bu = null, Ky = 8192, x2 = {
      getCacheForType: function(e) {
        var t = Rt(Al), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      getOwner: function() {
        return Sa;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var $y = Symbol.for;
      $y("selector.component"), $y("selector.has_pseudo_class"), $y("selector.role"), $y("selector.test_id"), $y("selector.text");
    }
    var A2 = [], E2 = typeof WeakMap == "function" ? WeakMap : Map, fn = 0, Ea = 2, _u = 4, Nc = 0, Wy = 1, oh = 2, vv = 3, Bf = 4, Z0 = 6, v1 = 5, pt = fn, Ot = null, $e = null, Ie = 0, Qa = 0, Fy = 1, _f = 2, Iy = 3, b1 = 4, bv = 5, sh = 6, Py = 7, Sv = 8, qf = 9, St = Qa, rn = null, Ko = !1, fh = !1, Tv = !1, Di = 0, $t = Nc, $o = 0, Wo = 0, xv = 0, dn = 0, Yf = 0, ep = null, za = null, k0 = !1, Av = 0, S1 = 300, J0 = 1 / 0, T1 = 500, tp = null, Fo = null, z2 = 0, R2 = 1, O2 = 2, Gf = 0, x1 = 1, A1 = 2, E1 = 3, M2 = 4, Ev = 5, kl = 0, Io = null, rh = null, Po = 0, zv = 0, Rv = null, z1 = null, D2 = 50, lp = 0, Ov = null, Mv = !1, K0 = !1, C2 = 50, Vf = 0, ap = null, dh = !1, $0 = null, R1 = !1, O1 = /* @__PURE__ */ new Set(), U2 = {}, W0 = null, hh = null, Dv = !1, Cv = !1, F0 = !1, Uv = !1, Xf = 0, Hv = {};
    (function() {
      for (var e = 0; e < $g.length; e++) {
        var t = $g[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), Ka(a, "on" + t);
      }
      Ka(rb, "onAnimationEnd"), Ka(db, "onAnimationIteration"), Ka(hb, "onAnimationStart"), Ka("dblclick", "onDoubleClick"), Ka("focusin", "onFocus"), Ka("focusout", "onBlur"), Ka(o2, "onTransitionRun"), Ka(s2, "onTransitionStart"), Ka(f2, "onTransitionCancel"), Ka(mb, "onTransitionEnd");
    })(), Hi("onMouseEnter", ["mouseout", "mouseover"]), Hi("onMouseLeave", ["mouseout", "mouseover"]), Hi("onPointerEnter", ["pointerout", "pointerover"]), Hi("onPointerLeave", ["pointerout", "pointerover"]), Yu(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), Yu(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), Yu("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Yu(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), Yu(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), Yu(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var np = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), wv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(np)
    ), I0 = "_reactListening" + Math.random().toString(36).slice(2), M1 = !1, D1 = !1, P0 = !1, C1 = !1, eg = !1, tg = !1, U1 = !1, lg = {}, H2 = /\r\n?/g, w2 = /\u0000|\uFFFD/g, Lf = "http://www.w3.org/1999/xlink", Nv = "http://www.w3.org/XML/1998/namespace", N2 = "javascript:throw new Error('React form unexpectedly submitted.')", j2 = "suppressHydrationWarning", ag = "$", ng = "/$", jc = "$?", up = "$!", B2 = 1, _2 = 2, q2 = 4, jv = "F!", H1 = "F", w1 = "complete", Y2 = "style", Bc = 0, mh = 1, ug = 2, Bv = null, _v = null, N1 = { dialog: !0, webview: !0 }, qv = null, j1 = typeof setTimeout == "function" ? setTimeout : void 0, G2 = typeof clearTimeout == "function" ? clearTimeout : void 0, Qf = -1, B1 = typeof Promise == "function" ? Promise : void 0, V2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof B1 < "u" ? function(e) {
      return B1.resolve(null).then(e).catch($m);
    } : j1, Yv = null, Zf = 0, ip = 1, _1 = 2, q1 = 3, tu = 4, lu = /* @__PURE__ */ new Map(), Y1 = /* @__PURE__ */ new Set(), _c = Ee.d;
    Ee.d = {
      f: function() {
        var e = _c.f(), t = dc();
        return e || t;
      },
      r: function(e) {
        var t = fa(e);
        t !== null && t.tag === 5 && t.type === "form" ? im(t) : _c.r(e);
      },
      D: function(e) {
        _c.D(e), o0("dns-prefetch", e, null);
      },
      C: function(e, t) {
        _c.C(e, t), o0("preconnect", e, t);
      },
      L: function(e, t, a) {
        _c.L(e, t, a);
        var i = yh;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + ra(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + ra(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + ra(
            a.imageSizes
          ) + '"]')) : o += '[href="' + ra(e) + '"]';
          var s = o;
          switch (t) {
            case "style":
              s = mi(e);
              break;
            case "script":
              s = bc(e);
          }
          lu.has(s) || (e = Ge(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), lu.set(s, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            Vn(s)
          ) || t === "script" && i.querySelector(Sc(s)) || (t = i.createElement("link"), Xt(t, "link", e), nl(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        _c.m(e, t);
        var a = yh;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + ra(i) + '"][href="' + ra(e) + '"]', s = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              s = bc(e);
          }
          if (!lu.has(s) && (e = Ge({ rel: "modulepreload", href: e }, t), lu.set(s, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(Sc(s)))
                  return;
            }
            i = a.createElement("link"), Xt(i, "link", e), nl(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        _c.X(e, t);
        var a = yh;
        if (a && e) {
          var i = hn(a).hoistableScripts, o = bc(e), s = i.get(o);
          s || (s = a.querySelector(
            Sc(o)
          ), s || (e = Ge({ src: e, async: !0 }, t), (t = lu.get(o)) && ay(e, t), s = a.createElement("script"), nl(s), Xt(s, "link", e), a.head.appendChild(s)), s = {
            type: "script",
            instance: s,
            count: 1,
            state: null
          }, i.set(o, s));
        }
      },
      S: function(e, t, a) {
        _c.S(e, t, a);
        var i = yh;
        if (i && e) {
          var o = hn(i).hoistableStyles, s = mi(e);
          t = t || "default";
          var d = o.get(s);
          if (!d) {
            var h = { loading: Zf, preload: null };
            if (d = i.querySelector(
              Vn(s)
            ))
              h.loading = ip | tu;
            else {
              e = Ge(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = lu.get(s)) && ly(e, a);
              var g = d = i.createElement("link");
              nl(g), Xt(g, "link", e), g._p = new Promise(function(b, w) {
                g.onload = b, g.onerror = w;
              }), g.addEventListener("load", function() {
                h.loading |= ip;
              }), g.addEventListener("error", function() {
                h.loading |= _1;
              }), h.loading |= tu, vd(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(s, d);
          }
        }
      },
      M: function(e, t) {
        _c.M(e, t);
        var a = yh;
        if (a && e) {
          var i = hn(a).hoistableScripts, o = bc(e), s = i.get(o);
          s || (s = a.querySelector(
            Sc(o)
          ), s || (e = Ge({ src: e, async: !0, type: "module" }, t), (t = lu.get(o)) && ay(e, t), s = a.createElement("script"), nl(s), Xt(s, "link", e), a.head.appendChild(s)), s = {
            type: "script",
            instance: s,
            count: 1,
            state: null
          }, i.set(o, s));
        }
      }
    };
    var yh = typeof document > "u" ? null : document, ig = null, cp = null, Gv = null, cg = null, kf = qg, op = {
      $$typeof: Ya,
      Provider: null,
      Consumer: null,
      _currentValue: kf,
      _currentValue2: kf,
      _threadCount: 0
    }, G1 = "%c%s%c ", V1 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", X1 = "", og = " ", X2 = Function.prototype.bind, L1 = !1, Q1 = null, Z1 = null, k1 = null, J1 = null, K1 = null, $1 = null, W1 = null, F1 = null, I1 = null;
    Q1 = function(e, t, a, i) {
      t = y(e, t), t !== null && (a = A(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ge({}, e.memoizedProps), a = Kl(e, 2), a !== null && Gt(a, e, 2));
    }, Z1 = function(e, t, a) {
      t = y(e, t), t !== null && (a = k(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ge({}, e.memoizedProps), a = Kl(e, 2), a !== null && Gt(a, e, 2));
    }, k1 = function(e, t, a, i) {
      t = y(e, t), t !== null && (a = O(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ge({}, e.memoizedProps), a = Kl(e, 2), a !== null && Gt(a, e, 2));
    }, J1 = function(e, t, a) {
      e.pendingProps = A(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Kl(e, 2), t !== null && Gt(t, e, 2);
    }, K1 = function(e, t) {
      e.pendingProps = k(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Kl(e, 2), t !== null && Gt(t, e, 2);
    }, $1 = function(e, t, a) {
      e.pendingProps = O(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Kl(e, 2), t !== null && Gt(t, e, 2);
    }, W1 = function(e) {
      var t = Kl(e, 2);
      t !== null && Gt(t, e, 2);
    }, F1 = function(e) {
      F = e;
    }, I1 = function(e) {
      Z = e;
    };
    var sg = !0, fg = null, Vv = !1, es = null, ts = null, ls = null, sp = /* @__PURE__ */ new Map(), fp = /* @__PURE__ */ new Map(), as = [], L2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), rg = null;
    if (hf.prototype.render = Ed.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : _e(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = ta(i);
      yt(i, o, a, t, null, null);
    }, hf.prototype.unmount = Ed.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (pt & (Ea | _u)) !== fn && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), yt(e.current, 2, null, e, null, null), dc(), t[xi] = null;
      }
    }, hf.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = bp();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < as.length && t !== 0 && t < as[a].priority; a++) ;
        as.splice(a, 0, e), a === 0 && m0(e);
      }
    }, function() {
      var e = mf.version;
      if (e !== "19.1.0")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.1.0
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    }(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), Ee.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = mt(t), e = e !== null ? Et(e) : null, e = e === null ? null : e.stateNode, e;
    }, !function() {
      var e = {
        bundleType: 1,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: q,
        reconcilerVersion: "19.1.0"
      };
      return e.overrideHookState = Q1, e.overrideHookStateDeletePath = Z1, e.overrideHookStateRenamePath = k1, e.overrideProps = J1, e.overridePropsDeletePath = K1, e.overridePropsRenamePath = $1, e.scheduleUpdate = W1, e.setErrorHandler = F1, e.setSuspenseHandler = I1, e.scheduleRefresh = Oe, e.scheduleRoot = Ve, e.setRefreshHandler = be, e.getCurrentFiber = Ng, e.getLaneLabelMap = jg, e.injectProfilingHooks = Tt, Ce(e);
    }() && S && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var P1 = window.location.protocol;
      /^(https?|file):$/.test(P1) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (P1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    mp.createRoot = function(e, t) {
      if (!_e(e))
        throw Error("Target container is not a DOM element.");
      g0(e);
      var a = !1, i = "", o = fm, s = kp, d = Ur, h = null;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === gi && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (h = t.unstable_transitionCallbacks)), t = iy(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        o,
        s,
        d,
        h,
        null
      ), e[xi] = t.current, Xm(e), new Ed(t);
    }, mp.hydrateRoot = function(e, t, a) {
      if (!_e(e))
        throw Error("Target container is not a DOM element.");
      g0(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", s = fm, d = kp, h = Ur, g = null, b = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (s = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (g = a.unstable_transitionCallbacks), a.formState !== void 0 && (b = a.formState)), t = iy(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        o,
        s,
        d,
        h,
        g,
        b
      ), t.context = cy(null), a = t.current, i = ta(a), i = Bl(i), o = Sn(i), o.callback = null, Pa(a, o, i), a = i, t.current.lanes = a, Gc(t, a), Ba(t), e[xi] = t.current, Xm(e), new hf(t);
    }, mp.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), mp;
}
var oS;
function eT() {
  if (oS) return hg.exports;
  oS = 1;
  function y() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y);
      } catch (A) {
        console.error(A);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (y(), hg.exports = I2()) : hg.exports = P2(), hg.exports;
}
var tT = eT();
const lT = /* @__PURE__ */ k2(tT);
function aT() {
  if (!document.getElementById("tailwind-cdn")) {
    const y = document.createElement("script");
    y.src = "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4", y.id = "tailwind-cdn", document.head.appendChild(y);
  }
}
const SS = {
  NEXT_PUBLIC_LOGIN_CUSTOMER_API: "https://mimin-test.mimin.io/mimin-backend",
  NEXT_PUBLIC_CHATBOT_URL: "https://mimin-api.mimin.io/backend-gen-ai"
}, sS = (y) => {
  let A;
  const O = /* @__PURE__ */ new Set(), v = (re, ae) => {
    const Re = typeof re == "function" ? re(A) : re;
    if (!Object.is(Re, A)) {
      const pe = A;
      A = ae ?? (typeof Re != "object" || Re === null) ? Re : Object.assign({}, A, Re), O.forEach((Ve) => Ve(A, pe));
    }
  }, k = () => A, ee = { setState: v, getState: k, getInitialState: () => Y, subscribe: (re) => (O.add(re), () => O.delete(re)) }, Y = A = y(v, k, ee);
  return ee;
}, nT = (y) => y ? sS(y) : sS, uT = (y) => y;
function iT(y, A = uT) {
  const O = Za.useSyncExternalStore(
    y.subscribe,
    () => A(y.getState()),
    () => A(y.getInitialState())
  );
  return Za.useDebugValue(O), O;
}
const cT = (y) => {
  const A = nT(y), O = (v) => iT(A, v);
  return Object.assign(O, A), O;
}, TS = (y) => cT;
function oT(y, A) {
  let O;
  try {
    O = y();
  } catch {
    return;
  }
  return {
    getItem: (k) => {
      var Z;
      const F = (Y) => Y === null ? null : JSON.parse(Y, void 0), ee = (Z = O.getItem(k)) != null ? Z : null;
      return ee instanceof Promise ? ee.then(F) : F(ee);
    },
    setItem: (k, Z) => O.setItem(k, JSON.stringify(Z, void 0)),
    removeItem: (k) => O.removeItem(k)
  };
}
const Kv = (y) => (A) => {
  try {
    const O = y(A);
    return O instanceof Promise ? O : {
      then(v) {
        return Kv(v)(O);
      },
      catch(v) {
        return this;
      }
    };
  } catch (O) {
    return {
      then(v) {
        return this;
      },
      catch(v) {
        return Kv(v)(O);
      }
    };
  }
}, sT = (y, A) => (O, v, k) => {
  let Z = {
    storage: oT(() => localStorage),
    partialize: (be) => be,
    version: 0,
    merge: (be, _e) => ({
      ..._e,
      ...be
    }),
    ...A
  }, F = !1;
  const ee = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set();
  let re = Z.storage;
  if (!re)
    return y(
      (...be) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${Z.name}', the given storage is currently unavailable.`
        ), O(...be);
      },
      v,
      k
    );
  const ae = () => {
    const be = Z.partialize({ ...v() });
    return re.setItem(Z.name, {
      state: be,
      version: Z.version
    });
  }, Re = k.setState;
  k.setState = (be, _e) => {
    Re(be, _e), ae();
  };
  const pe = y(
    (...be) => {
      O(...be), ae();
    },
    v,
    k
  );
  k.getInitialState = () => pe;
  let Ve;
  const Oe = () => {
    var be, _e;
    if (!re) return;
    F = !1, ee.forEach((Pe) => {
      var Ze;
      return Pe((Ze = v()) != null ? Ze : pe);
    });
    const Ue = ((_e = Z.onRehydrateStorage) == null ? void 0 : _e.call(Z, (be = v()) != null ? be : pe)) || void 0;
    return Kv(re.getItem.bind(re))(Z.name).then((Pe) => {
      if (Pe)
        if (typeof Pe.version == "number" && Pe.version !== Z.version) {
          if (Z.migrate) {
            const Ze = Z.migrate(
              Pe.state,
              Pe.version
            );
            return Ze instanceof Promise ? Ze.then((mt) => [!0, mt]) : [!0, Ze];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, Pe.state];
      return [!1, void 0];
    }).then((Pe) => {
      var Ze;
      const [mt, Et] = Pe;
      if (Ve = Z.merge(
        Et,
        (Ze = v()) != null ? Ze : pe
      ), O(Ve, !0), mt)
        return ae();
    }).then(() => {
      Ue?.(Ve, void 0), Ve = v(), F = !0, Y.forEach((Pe) => Pe(Ve));
    }).catch((Pe) => {
      Ue?.(void 0, Pe);
    });
  };
  return k.persist = {
    setOptions: (be) => {
      Z = {
        ...Z,
        ...be
      }, be.storage && (re = be.storage);
    },
    clearStorage: () => {
      re?.removeItem(Z.name);
    },
    getOptions: () => Z,
    rehydrate: () => Oe(),
    hasHydrated: () => F,
    onHydrate: (be) => (ee.add(be), () => {
      ee.delete(be);
    }),
    onFinishHydration: (be) => (Y.add(be), () => {
      Y.delete(be);
    })
  }, Z.skipHydration || Oe(), Ve || pe;
}, xS = sT, Sg = TS()(
  xS(
    (y) => ({
      config: null,
      signature: "",
      setConfig: (A) => y({ config: A }),
      setSignature: (A) => y({ signature: A })
    }),
    {
      name: "config-store"
    }
  )
), AS = TS()(
  xS(
    (y, A) => ({
      interactions: [],
      chatType: null,
      setInteractions: (O) => y({ interactions: O }),
      addInteraction: (O) => y((v) => ({
        interactions: [O, ...v.interactions]
      })),
      updateAiInteractionByIndex: (O, v) => {
        y((k) => ({
          interactions: k.interactions.map(
            (Z, F) => F === O ? { ...Z, ai: { ...Z.ai, ...v } } : Z
          )
        }));
      },
      setChatType: (O) => y({ chatType: O }),
      clearInteractions: () => y({ interactions: [] })
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
const fT = (y) => y.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), rT = (y) => y.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (A, O, v) => v ? v.toUpperCase() : O.toLowerCase()
), fS = (y) => {
  const A = rT(y);
  return A.charAt(0).toUpperCase() + A.slice(1);
}, ES = (...y) => y.filter((A, O, v) => !!A && A.trim() !== "" && v.indexOf(A) === O).join(" ").trim(), dT = (y) => {
  for (const A in y)
    if (A.startsWith("aria-") || A === "role" || A === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var hT = {
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
const mT = gS(
  ({
    color: y = "currentColor",
    size: A = 24,
    strokeWidth: O = 2,
    absoluteStrokeWidth: v,
    className: k = "",
    children: Z,
    iconNode: F,
    ...ee
  }, Y) => Jv(
    "svg",
    {
      ref: Y,
      ...hT,
      width: A,
      height: A,
      stroke: y,
      strokeWidth: v ? Number(O) * 24 / Number(A) : O,
      className: ES("lucide", k),
      ...!Z && !dT(ee) && { "aria-hidden": "true" },
      ...ee
    },
    [
      ...F.map(([re, ae]) => Jv(re, ae)),
      ...Array.isArray(Z) ? Z : [Z]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pp = (y, A) => {
  const O = gS(
    ({ className: v, ...k }, Z) => Jv(mT, {
      ref: Z,
      iconNode: A,
      className: ES(
        `lucide-${fT(fS(y))}`,
        `lucide-${y}`,
        v
      ),
      ...k
    })
  );
  return O.displayName = fS(y), O;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yT = [
  ["path", { d: "M2 10v3", key: "1fnikh" }],
  ["path", { d: "M6 6v11", key: "11sgs0" }],
  ["path", { d: "M10 3v18", key: "yhl04a" }],
  ["path", { d: "M14 8v7", key: "3a1oy3" }],
  ["path", { d: "M18 5v13", key: "123xd1" }],
  ["path", { d: "M22 10v3", key: "154ddg" }]
], pT = pp("audio-lines", yT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gT = [
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
], $v = pp("eye-off", gT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vT = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Wv = pp("eye", vT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bT = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], zS = pp("triangle-alert", bT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ST = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], TT = pp("x", ST), xT = ({ onClickCreateAccount: y }) => {
  const [A, O] = Ol({
    email: "",
    password: "",
    rememberMe: !1
  }), [v, k] = Ol(null), [Z, F] = Ol(!1), ee = (Y) => {
    O({ ...A, [Y.target.name]: Y.target.value });
  };
  return /* @__PURE__ */ B.jsxs("div", { className: "mt-10", children: [
    /* @__PURE__ */ B.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ B.jsx("h2", { className: "text-base font-bold", children: "Sign In" }),
      /* @__PURE__ */ B.jsx("p", { className: "text-sm text-gray-500", children: "Fill your information below to sign in to your account" })
    ] }),
    /* @__PURE__ */ B.jsxs("div", { className: "space-y-2 mt-6", children: [
      /* @__PURE__ */ B.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ B.jsx("label", { htmlFor: "email", className: "text-sm font-medium", children: "Email" }),
        /* @__PURE__ */ B.jsx(
          "input",
          {
            type: "text",
            name: "email",
            value: A.email,
            onChange: ee,
            autoComplete: "off",
            className: "border border-[#0096A2] rounded-md p-2 focus:outline focus:outline-2 focus:outline-[#0096A2]"
          }
        )
      ] }),
      /* @__PURE__ */ B.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ B.jsx("label", { htmlFor: "password", className: "text-sm font-medium", children: "Password" }),
        /* @__PURE__ */ B.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ B.jsx(
            "input",
            {
              type: Z ? "text" : "password",
              name: "password",
              value: A.password,
              onChange: ee,
              autoComplete: "off",
              className: "border border-[#0096A2] rounded-md p-2 focus:outline focus:outline-2 focus:outline-[#0096A2] w-full"
            }
          ),
          /* @__PURE__ */ B.jsx(
            "button",
            {
              className: "absolute right-2.5 top-1/2 -translate-y-1/2",
              onClick: () => F((Y) => !Y),
              children: Z ? /* @__PURE__ */ B.jsx(Wv, { className: "w-4 h-4" }) : /* @__PURE__ */ B.jsx($v, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ B.jsxs("div", { className: "flex items-start justify-between gap-3 py-2", children: [
        /* @__PURE__ */ B.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ B.jsx(
            "input",
            {
              type: "checkbox",
              name: "acceptTerms",
              id: "acceptTerms",
              checked: A.rememberMe,
              onChange: (Y) => O({ ...A, rememberMe: Y.target.checked }),
              className: "size-3.5 accent-[#0096A2]"
            }
          ),
          /* @__PURE__ */ B.jsx(
            "label",
            {
              className: "block text-xs text-gray-500",
              htmlFor: "acceptTerms",
              children: "Remember me"
            }
          )
        ] }),
        /* @__PURE__ */ B.jsx("button", { className: "block text-xs text-gray-500 cursor-pointer underline", children: "Forgot password?" })
      ] }),
      v && /* @__PURE__ */ B.jsxs("div", { className: "flex items-start gap-3 bg-[#F26075]/10 p-2 rounded-md mt-5 border border-[#F26075]/20", children: [
        /* @__PURE__ */ B.jsx("div", { className: "flex items-start justify-center pt-1", children: /* @__PURE__ */ B.jsx(zS, { className: "w-4 h-4 text-[#F26075]" }) }),
        /* @__PURE__ */ B.jsx("p", { className: "text-[#F26075] text-sm", children: v })
      ] }),
      /* @__PURE__ */ B.jsxs("div", { className: "flex flex-col gap-1.5 pt-4 pb-6", children: [
        /* @__PURE__ */ B.jsx("button", { className: "bg-[#0096A2] text-white px-4 py-2 rounded-md w-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed", children: "Sign In" }),
        /* @__PURE__ */ B.jsxs("div", { className: "text-xs text-center text-gray-500", children: [
          "Don't have an account?",
          " ",
          /* @__PURE__ */ B.jsx(
            "button",
            {
              onClick: y,
              className: "inline text-[#0096A2] underline cursor-pointer",
              children: "Create an account"
            }
          )
        ] })
      ] })
    ] })
  ] });
}, AT = ({ onClickSignin: y }) => {
  const [A, O] = Ol({
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: !1
  }), [v, k] = Ol(!1), [Z, F] = Ol(!1), [ee, Y] = Ol(null), re = (ae) => {
    O({ ...A, [ae.target.name]: ae.target.value });
  };
  return console.log(A), /* @__PURE__ */ B.jsxs("div", { className: "mt-10", children: [
    /* @__PURE__ */ B.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ B.jsx("h2", { className: "text-base font-bold", children: "Create Account" }),
      /* @__PURE__ */ B.jsx("p", { className: "text-sm text-gray-500", children: "Fill your information below to create your account" })
    ] }),
    /* @__PURE__ */ B.jsxs("div", { className: "space-y-2 mt-6", children: [
      /* @__PURE__ */ B.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ B.jsx("label", { htmlFor: "companyName", className: "text-sm font-medium", children: "Company Name" }),
        /* @__PURE__ */ B.jsx(
          "input",
          {
            type: "text",
            name: "companyName",
            value: A.companyName,
            onChange: re,
            autoComplete: "off",
            className: "border border-[#0096A2] rounded-md p-2 focus:outline focus:outline-2 focus:outline-[#0096A2]"
          }
        )
      ] }),
      /* @__PURE__ */ B.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ B.jsx("label", { htmlFor: "email", className: "text-sm font-medium", children: "Email" }),
        /* @__PURE__ */ B.jsx(
          "input",
          {
            type: "text",
            name: "email",
            autoComplete: "off",
            value: A.email,
            onChange: re,
            className: "border border-[#0096A2] rounded-md p-2 focus:outline focus:outline-2 focus:outline-[#0096A2]"
          }
        )
      ] }),
      /* @__PURE__ */ B.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ B.jsx("label", { htmlFor: "password", className: "text-sm font-medium", children: "Password" }),
        /* @__PURE__ */ B.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ B.jsx(
            "input",
            {
              type: v ? "text" : "password",
              name: "password",
              value: A.password,
              onChange: re,
              autoComplete: "off",
              className: "border border-[#0096A2] rounded-md p-2 focus:outline focus:outline-2 focus:outline-[#0096A2] w-full"
            }
          ),
          /* @__PURE__ */ B.jsx(
            "button",
            {
              className: "absolute right-2.5 top-1/2 -translate-y-1/2",
              onClick: () => k((ae) => !ae),
              children: v ? /* @__PURE__ */ B.jsx(Wv, { className: "w-4 h-4" }) : /* @__PURE__ */ B.jsx($v, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ B.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ B.jsx("label", { htmlFor: "confirmPassword", className: "text-sm font-medium", children: "Confirm Password" }),
        /* @__PURE__ */ B.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ B.jsx(
            "input",
            {
              type: Z ? "text" : "password",
              name: "confirmPassword",
              value: A.confirmPassword,
              onChange: re,
              autoComplete: "off",
              className: "border border-[#0096A2] rounded-md p-2 focus:outline focus:outline-2 focus:outline-[#0096A2] w-full"
            }
          ),
          /* @__PURE__ */ B.jsx(
            "button",
            {
              className: "absolute right-2.5 top-1/2 -translate-y-1/2",
              onClick: () => F((ae) => !ae),
              children: Z ? /* @__PURE__ */ B.jsx(Wv, { className: "w-4 h-4" }) : /* @__PURE__ */ B.jsx($v, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ B.jsxs("div", { className: "flex items-start gap-3 py-2", children: [
        /* @__PURE__ */ B.jsx(
          "input",
          {
            type: "checkbox",
            name: "acceptTerms",
            id: "acceptTerms",
            checked: A.acceptTerms,
            onChange: (ae) => O({ ...A, acceptTerms: ae.target.checked }),
            className: "mt-1 size-3.5 accent-[#0096A2]"
          }
        ),
        /* @__PURE__ */ B.jsxs("label", { className: "block text-xs text-gray-500", htmlFor: "acceptTerms", children: [
          "By creating an account, you agree to our",
          " ",
          /* @__PURE__ */ B.jsx("a", { href: "#", className: "text-[#0096A2]", children: "Terms of Service" })
        ] })
      ] }),
      ee && /* @__PURE__ */ B.jsxs("div", { className: "flex items-start gap-3 bg-[#F26075]/10 p-2 rounded-md mt-5 border border-[#F26075]/20", children: [
        /* @__PURE__ */ B.jsx("div", { className: "flex items-start justify-center pt-1", children: /* @__PURE__ */ B.jsx(zS, { className: "w-4 h-4 text-[#F26075]" }) }),
        /* @__PURE__ */ B.jsx("p", { className: "text-[#F26075] text-sm", children: ee })
      ] }),
      /* @__PURE__ */ B.jsxs("div", { className: "flex flex-col gap-1 pb-6", children: [
        /* @__PURE__ */ B.jsx(
          "button",
          {
            className: "bg-[#0096A2] text-white px-4 py-2 rounded-md w-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
            disabled: !A.companyName || !A.email || !A.password || !A.confirmPassword || !A.acceptTerms,
            children: "Create Account"
          }
        ),
        /* @__PURE__ */ B.jsxs("div", { className: "text-xs text-center text-gray-500", children: [
          "Already have an account?",
          " ",
          /* @__PURE__ */ B.jsx(
            "button",
            {
              onClick: y,
              className: "inline text-[#0096A2] underline cursor-pointer",
              children: "Sign in"
            }
          )
        ] })
      ] })
    ] })
  ] });
}, ET = () => {
  const [y, A] = Ol("landing-section");
  return /* @__PURE__ */ B.jsxs("div", { className: "p-4 h-full overflow-y-auto", children: [
    /* @__PURE__ */ B.jsx(
      "img",
      {
        src: "https://res.cloudinary.com/dctqloe37/image/upload/v1752455653/undraw_chat_qmyo_1_wwzcjj.svg",
        alt: " ",
        width: 1e3,
        height: 1e3,
        loading: "lazy",
        className: "w-full h-auto object-contain object-center"
      }
    ),
    y === "landing-section" && /* @__PURE__ */ B.jsxs("div", { className: "text-center mt-10", children: [
      /* @__PURE__ */ B.jsx("h1", { className: "text-[#0096A2] text-base font-bold", children: "Explore the MIMIN AI Agent" }),
      /* @__PURE__ */ B.jsx("p", { className: "text-gray-500 text-sm", children: "Sign in and start chatting with your smart AI assistant ready to help anytime, day or night!" }),
      /* @__PURE__ */ B.jsxs("div", { className: "flex flex-col gap-3 mt-6", children: [
        /* @__PURE__ */ B.jsx(
          "button",
          {
            className: "bg-[#0096A2] w-full border border-[#0096A2] text-white px-4 py-2 rounded-md cursor-pointer",
            onClick: () => A("sign-in"),
            children: "Sign In"
          }
        ),
        /* @__PURE__ */ B.jsx(
          "button",
          {
            className: "bg-white w-full border border-[#0096A2] text-[#0096A2] px-4 py-2 rounded-md cursor-pointer hover:bg-[#0096A2] hover:text-white transition-all duration-300",
            onClick: () => A("create-account"),
            children: "Create Account"
          }
        )
      ] })
    ] }),
    y === "sign-in" && /* @__PURE__ */ B.jsx(
      xT,
      {
        onClickCreateAccount: () => A("create-account")
      }
    ),
    y === "create-account" && /* @__PURE__ */ B.jsx(AT, { onClickSignin: () => A("sign-in") })
  ] });
};
var RS = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, rS = Za.createContext && /* @__PURE__ */ Za.createContext(RS), zT = ["attr", "size", "title"];
function RT(y, A) {
  if (y == null) return {};
  var O = OT(y, A), v, k;
  if (Object.getOwnPropertySymbols) {
    var Z = Object.getOwnPropertySymbols(y);
    for (k = 0; k < Z.length; k++)
      v = Z[k], !(A.indexOf(v) >= 0) && Object.prototype.propertyIsEnumerable.call(y, v) && (O[v] = y[v]);
  }
  return O;
}
function OT(y, A) {
  if (y == null) return {};
  var O = {};
  for (var v in y)
    if (Object.prototype.hasOwnProperty.call(y, v)) {
      if (A.indexOf(v) >= 0) continue;
      O[v] = y[v];
    }
  return O;
}
function vg() {
  return vg = Object.assign ? Object.assign.bind() : function(y) {
    for (var A = 1; A < arguments.length; A++) {
      var O = arguments[A];
      for (var v in O)
        Object.prototype.hasOwnProperty.call(O, v) && (y[v] = O[v]);
    }
    return y;
  }, vg.apply(this, arguments);
}
function dS(y, A) {
  var O = Object.keys(y);
  if (Object.getOwnPropertySymbols) {
    var v = Object.getOwnPropertySymbols(y);
    A && (v = v.filter(function(k) {
      return Object.getOwnPropertyDescriptor(y, k).enumerable;
    })), O.push.apply(O, v);
  }
  return O;
}
function bg(y) {
  for (var A = 1; A < arguments.length; A++) {
    var O = arguments[A] != null ? arguments[A] : {};
    A % 2 ? dS(Object(O), !0).forEach(function(v) {
      MT(y, v, O[v]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(O)) : dS(Object(O)).forEach(function(v) {
      Object.defineProperty(y, v, Object.getOwnPropertyDescriptor(O, v));
    });
  }
  return y;
}
function MT(y, A, O) {
  return A = DT(A), A in y ? Object.defineProperty(y, A, { value: O, enumerable: !0, configurable: !0, writable: !0 }) : y[A] = O, y;
}
function DT(y) {
  var A = CT(y, "string");
  return typeof A == "symbol" ? A : A + "";
}
function CT(y, A) {
  if (typeof y != "object" || !y) return y;
  var O = y[Symbol.toPrimitive];
  if (O !== void 0) {
    var v = O.call(y, A);
    if (typeof v != "object") return v;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (A === "string" ? String : Number)(y);
}
function OS(y) {
  return y && y.map((A, O) => /* @__PURE__ */ Za.createElement(A.tag, bg({
    key: O
  }, A.attr), OS(A.child)));
}
function eb(y) {
  return (A) => /* @__PURE__ */ Za.createElement(UT, vg({
    attr: bg({}, y.attr)
  }, A), OS(y.child));
}
function UT(y) {
  var A = (O) => {
    var {
      attr: v,
      size: k,
      title: Z
    } = y, F = RT(y, zT), ee = k || O.size || "1em", Y;
    return O.className && (Y = O.className), y.className && (Y = (Y ? Y + " " : "") + y.className), /* @__PURE__ */ Za.createElement("svg", vg({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, O.attr, v, F, {
      className: Y,
      style: bg(bg({
        color: y.color || O.color
      }, O.style), y.style),
      height: ee,
      width: ee,
      xmlns: "http://www.w3.org/2000/svg"
    }), Z && /* @__PURE__ */ Za.createElement("title", null, Z), y.children);
  };
  return rS !== void 0 ? /* @__PURE__ */ Za.createElement(rS.Consumer, null, (O) => A(O)) : A(RS);
}
function HT(y) {
  return eb({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M6.758 8.758 5.344 7.344a8.048 8.048 0 0 0-1.841 2.859l1.873.701a6.048 6.048 0 0 1 1.382-2.146zM19 12.999a7.935 7.935 0 0 0-2.344-5.655A7.917 7.917 0 0 0 12 5.069V2L7 6l5 4V7.089a5.944 5.944 0 0 1 3.242 1.669A5.956 5.956 0 0 1 17 13v.002c0 .33-.033.655-.086.977-.007.043-.011.088-.019.131a6.053 6.053 0 0 1-1.138 2.536c-.16.209-.331.412-.516.597a5.954 5.954 0 0 1-.728.613 5.906 5.906 0 0 1-2.277 1.015c-.142.03-.285.05-.43.069-.062.009-.122.021-.184.027a6.104 6.104 0 0 1-1.898-.103L9.3 20.819a8.087 8.087 0 0 0 2.534.136c.069-.007.138-.021.207-.03.205-.026.409-.056.61-.098l.053-.009-.001-.005a7.877 7.877 0 0 0 2.136-.795l.001.001.028-.019a7.906 7.906 0 0 0 1.01-.67c.27-.209.532-.43.777-.675.248-.247.47-.513.681-.785.021-.028.049-.053.07-.081l-.006-.004a7.899 7.899 0 0 0 1.093-1.997l.008.003c.029-.078.05-.158.076-.237.037-.11.075-.221.107-.333.04-.14.073-.281.105-.423.022-.099.048-.195.066-.295.032-.171.056-.344.076-.516.01-.076.023-.15.03-.227.023-.249.037-.5.037-.753.002-.002.002-.004.002-.008zM6.197 16.597l-1.6 1.201a8.045 8.045 0 0 0 2.569 2.225l.961-1.754a6.018 6.018 0 0 1-1.93-1.672zM5 13c0-.145.005-.287.015-.429l-1.994-.143a7.977 7.977 0 0 0 .483 3.372l1.873-.701A5.975 5.975 0 0 1 5 13z" }, child: [] }] })(y);
}
function MS(y) {
  return eb({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" }, child: [] }] })(y);
}
const wT = ({
  onToggleCallWindow: y,
  onToggleChatWindow: A
}) => {
  const { config: O } = Sg(), { setChatType: v, clearInteractions: k } = AS();
  return /* @__PURE__ */ B.jsxs(
    "div",
    {
      className: "flex items-center justify-between gap-2 px-4 py-2",
      style: {
        backgroundColor: O?.theme?.chatWindow?.backgroundColor || "#0096a2"
      },
      children: [
        /* @__PURE__ */ B.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ B.jsx("div", { className: "flex items-center justify-center w-9 h-9 rounded-full bg-white", children: /* @__PURE__ */ B.jsx(
            "img",
            {
              src: O?.theme?.chatWindow?.titleAvatarSrc || "https://res.cloudinary.com/dctqloe37/image/upload/v1752147771/agent_ohofti.jpg",
              alt: "ICON",
              className: "w-6 h-6 rounded-full"
            }
          ) }),
          /* @__PURE__ */ B.jsx(
            "h3",
            {
              className: "text-base font-bold",
              style: { color: O?.theme?.chatWindow?.titleColor || "#ffffff" },
              children: O?.theme?.chatWindow?.title || "Mimin AI"
            }
          )
        ] }),
        /* @__PURE__ */ B.jsxs("div", { className: "flex items-center gap-4", children: [
          O?.theme?.chatWindow?.isActiveCall && /* @__PURE__ */ B.jsxs(
            "button",
            {
              style: {
                color: O?.theme?.chatWindow?.titleColor || "#ffffff"
              },
              onClick: y,
              className: "relative cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
              children: [
                /* @__PURE__ */ B.jsx(
                  MS,
                  {
                    className: "w-5 h-5",
                    color: O?.theme?.chatWindow?.titleColor || "#ffffff"
                  }
                ),
                /* @__PURE__ */ B.jsx("div", { className: "absolute -top-0 -right-0", children: /* @__PURE__ */ B.jsx("p", { className: "text-[8px] font-medium", children: "AI" }) })
              ]
            }
          ),
          /* @__PURE__ */ B.jsx(
            "button",
            {
              className: "cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
              style: { color: O?.theme?.chatWindow?.titleColor || "#ffffff" },
              onClick: () => {
                k(), v(null);
              },
              children: /* @__PURE__ */ B.jsx(
                HT,
                {
                  className: "w-5 h-5",
                  color: O?.theme?.chatWindow?.titleColor || "#ffffff"
                }
              )
            }
          ),
          /* @__PURE__ */ B.jsx(
            "button",
            {
              className: "cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
              style: { color: O?.theme?.chatWindow?.titleColor || "#ffffff" },
              onClick: A,
              children: /* @__PURE__ */ B.jsx(
                TT,
                {
                  className: "w-5 h-5",
                  color: O?.theme?.chatWindow?.titleColor || "#ffffff"
                }
              )
            }
          )
        ] })
      ]
    }
  );
};
function DS(y) {
  var A, O, v = "";
  if (typeof y == "string" || typeof y == "number") v += y;
  else if (typeof y == "object") if (Array.isArray(y)) {
    var k = y.length;
    for (A = 0; A < k; A++) y[A] && (O = DS(y[A])) && (v && (v += " "), v += O);
  } else for (O in y) y[O] && (v && (v += " "), v += O);
  return v;
}
function NT() {
  for (var y, A, O = 0, v = "", k = arguments.length; O < k; O++) (y = arguments[O]) && (A = DS(y)) && (v && (v += " "), v += A);
  return v;
}
const tb = "-", jT = (y) => {
  const A = _T(y), {
    conflictingClassGroups: O,
    conflictingClassGroupModifiers: v
  } = y;
  return {
    getClassGroupId: (F) => {
      const ee = F.split(tb);
      return ee[0] === "" && ee.length !== 1 && ee.shift(), CS(ee, A) || BT(F);
    },
    getConflictingClassGroupIds: (F, ee) => {
      const Y = O[F] || [];
      return ee && v[F] ? [...Y, ...v[F]] : Y;
    }
  };
}, CS = (y, A) => {
  if (y.length === 0)
    return A.classGroupId;
  const O = y[0], v = A.nextPart.get(O), k = v ? CS(y.slice(1), v) : void 0;
  if (k)
    return k;
  if (A.validators.length === 0)
    return;
  const Z = y.join(tb);
  return A.validators.find(({
    validator: F
  }) => F(Z))?.classGroupId;
}, hS = /^\[(.+)\]$/, BT = (y) => {
  if (hS.test(y)) {
    const A = hS.exec(y)[1], O = A?.substring(0, A.indexOf(":"));
    if (O)
      return "arbitrary.." + O;
  }
}, _T = (y) => {
  const {
    theme: A,
    classGroups: O
  } = y, v = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const k in O)
    Fv(O[k], v, k, A);
  return v;
}, Fv = (y, A, O, v) => {
  y.forEach((k) => {
    if (typeof k == "string") {
      const Z = k === "" ? A : mS(A, k);
      Z.classGroupId = O;
      return;
    }
    if (typeof k == "function") {
      if (qT(k)) {
        Fv(k(v), A, O, v);
        return;
      }
      A.validators.push({
        validator: k,
        classGroupId: O
      });
      return;
    }
    Object.entries(k).forEach(([Z, F]) => {
      Fv(F, mS(A, Z), O, v);
    });
  });
}, mS = (y, A) => {
  let O = y;
  return A.split(tb).forEach((v) => {
    O.nextPart.has(v) || O.nextPart.set(v, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), O = O.nextPart.get(v);
  }), O;
}, qT = (y) => y.isThemeGetter, YT = (y) => {
  if (y < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let A = 0, O = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
  const k = (Z, F) => {
    O.set(Z, F), A++, A > y && (A = 0, v = O, O = /* @__PURE__ */ new Map());
  };
  return {
    get(Z) {
      let F = O.get(Z);
      if (F !== void 0)
        return F;
      if ((F = v.get(Z)) !== void 0)
        return k(Z, F), F;
    },
    set(Z, F) {
      O.has(Z) ? O.set(Z, F) : k(Z, F);
    }
  };
}, Iv = "!", Pv = ":", GT = Pv.length, VT = (y) => {
  const {
    prefix: A,
    experimentalParseClassName: O
  } = y;
  let v = (k) => {
    const Z = [];
    let F = 0, ee = 0, Y = 0, re;
    for (let Oe = 0; Oe < k.length; Oe++) {
      let be = k[Oe];
      if (F === 0 && ee === 0) {
        if (be === Pv) {
          Z.push(k.slice(Y, Oe)), Y = Oe + GT;
          continue;
        }
        if (be === "/") {
          re = Oe;
          continue;
        }
      }
      be === "[" ? F++ : be === "]" ? F-- : be === "(" ? ee++ : be === ")" && ee--;
    }
    const ae = Z.length === 0 ? k : k.substring(Y), Re = XT(ae), pe = Re !== ae, Ve = re && re > Y ? re - Y : void 0;
    return {
      modifiers: Z,
      hasImportantModifier: pe,
      baseClassName: Re,
      maybePostfixModifierPosition: Ve
    };
  };
  if (A) {
    const k = A + Pv, Z = v;
    v = (F) => F.startsWith(k) ? Z(F.substring(k.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: F,
      maybePostfixModifierPosition: void 0
    };
  }
  if (O) {
    const k = v;
    v = (Z) => O({
      className: Z,
      parseClassName: k
    });
  }
  return v;
}, XT = (y) => y.endsWith(Iv) ? y.substring(0, y.length - 1) : y.startsWith(Iv) ? y.substring(1) : y, LT = (y) => {
  const A = Object.fromEntries(y.orderSensitiveModifiers.map((v) => [v, !0]));
  return (v) => {
    if (v.length <= 1)
      return v;
    const k = [];
    let Z = [];
    return v.forEach((F) => {
      F[0] === "[" || A[F] ? (k.push(...Z.sort(), F), Z = []) : Z.push(F);
    }), k.push(...Z.sort()), k;
  };
}, QT = (y) => ({
  cache: YT(y.cacheSize),
  parseClassName: VT(y),
  sortModifiers: LT(y),
  ...jT(y)
}), ZT = /\s+/, kT = (y, A) => {
  const {
    parseClassName: O,
    getClassGroupId: v,
    getConflictingClassGroupIds: k,
    sortModifiers: Z
  } = A, F = [], ee = y.trim().split(ZT);
  let Y = "";
  for (let re = ee.length - 1; re >= 0; re -= 1) {
    const ae = ee[re], {
      isExternal: Re,
      modifiers: pe,
      hasImportantModifier: Ve,
      baseClassName: Oe,
      maybePostfixModifierPosition: be
    } = O(ae);
    if (Re) {
      Y = ae + (Y.length > 0 ? " " + Y : Y);
      continue;
    }
    let _e = !!be, Ue = v(_e ? Oe.substring(0, be) : Oe);
    if (!Ue) {
      if (!_e) {
        Y = ae + (Y.length > 0 ? " " + Y : Y);
        continue;
      }
      if (Ue = v(Oe), !Ue) {
        Y = ae + (Y.length > 0 ? " " + Y : Y);
        continue;
      }
      _e = !1;
    }
    const Pe = Z(pe).join(":"), Ze = Ve ? Pe + Iv : Pe, mt = Ze + Ue;
    if (F.includes(mt))
      continue;
    F.push(mt);
    const Et = k(Ue, _e);
    for (let ot = 0; ot < Et.length; ++ot) {
      const qe = Et[ot];
      F.push(Ze + qe);
    }
    Y = ae + (Y.length > 0 ? " " + Y : Y);
  }
  return Y;
};
function JT() {
  let y = 0, A, O, v = "";
  for (; y < arguments.length; )
    (A = arguments[y++]) && (O = US(A)) && (v && (v += " "), v += O);
  return v;
}
const US = (y) => {
  if (typeof y == "string")
    return y;
  let A, O = "";
  for (let v = 0; v < y.length; v++)
    y[v] && (A = US(y[v])) && (O && (O += " "), O += A);
  return O;
};
function KT(y, ...A) {
  let O, v, k, Z = F;
  function F(Y) {
    const re = A.reduce((ae, Re) => Re(ae), y());
    return O = QT(re), v = O.cache.get, k = O.cache.set, Z = ee, ee(Y);
  }
  function ee(Y) {
    const re = v(Y);
    if (re)
      return re;
    const ae = kT(Y, O);
    return k(Y, ae), ae;
  }
  return function() {
    return Z(JT.apply(null, arguments));
  };
}
const Rl = (y) => {
  const A = (O) => O[y] || [];
  return A.isThemeGetter = !0, A;
}, HS = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, wS = /^\((?:(\w[\w-]*):)?(.+)\)$/i, $T = /^\d+\/\d+$/, WT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, FT = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, IT = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, PT = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ph = (y) => $T.test(y), We = (y) => !!y && !Number.isNaN(Number(y)), ns = (y) => !!y && Number.isInteger(Number(y)), Qv = (y) => y.endsWith("%") && We(y.slice(0, -1)), Yc = (y) => WT.test(y), tx = () => !0, lx = (y) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  FT.test(y) && !IT.test(y)
), NS = () => !1, ax = (y) => PT.test(y), nx = (y) => ex.test(y), ux = (y) => !de(y) && !he(y), ix = (y) => gh(y, _S, NS), de = (y) => HS.test(y), Jf = (y) => gh(y, qS, lx), Zv = (y) => gh(y, rx, We), yS = (y) => gh(y, jS, NS), cx = (y) => gh(y, BS, nx), yg = (y) => gh(y, YS, ax), he = (y) => wS.test(y), yp = (y) => vh(y, qS), ox = (y) => vh(y, dx), pS = (y) => vh(y, jS), sx = (y) => vh(y, _S), fx = (y) => vh(y, BS), pg = (y) => vh(y, YS, !0), gh = (y, A, O) => {
  const v = HS.exec(y);
  return v ? v[1] ? A(v[1]) : O(v[2]) : !1;
}, vh = (y, A, O = !1) => {
  const v = wS.exec(y);
  return v ? v[1] ? A(v[1]) : O : !1;
}, jS = (y) => y === "position" || y === "percentage", BS = (y) => y === "image" || y === "url", _S = (y) => y === "length" || y === "size" || y === "bg-size", qS = (y) => y === "length", rx = (y) => y === "number", dx = (y) => y === "family-name", YS = (y) => y === "shadow", hx = () => {
  const y = Rl("color"), A = Rl("font"), O = Rl("text"), v = Rl("font-weight"), k = Rl("tracking"), Z = Rl("leading"), F = Rl("breakpoint"), ee = Rl("container"), Y = Rl("spacing"), re = Rl("radius"), ae = Rl("shadow"), Re = Rl("inset-shadow"), pe = Rl("text-shadow"), Ve = Rl("drop-shadow"), Oe = Rl("blur"), be = Rl("perspective"), _e = Rl("aspect"), Ue = Rl("ease"), Pe = Rl("animate"), Ze = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], mt = () => [
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
  ], Et = () => [...mt(), he, de], ot = () => ["auto", "hidden", "clip", "visible", "scroll"], qe = () => ["auto", "contain", "none"], fe = () => [he, de, Y], ne = () => [ph, "full", "auto", ...fe()], gt = () => [ns, "none", "subgrid", he, de], Fe = () => ["auto", {
    span: ["full", ns, he, de]
  }, ns, he, de], Ae = () => [ns, "auto", he, de], st = () => ["auto", "min", "max", "fr", he, de], Dt = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], dt = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], E = () => ["auto", ...fe()], J = () => [ph, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...fe()], _ = () => [y, he, de], me = () => [...mt(), pS, yS, {
    position: [he, de]
  }], j = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], ue = () => ["auto", "cover", "contain", sx, ix, {
    size: [he, de]
  }], I = () => [Qv, yp, Jf], le = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    re,
    he,
    de
  ], Se = () => ["", We, yp, Jf], Ce = () => ["solid", "dashed", "dotted", "double"], He = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Tt = () => [We, Qv, pS, yS], zt = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    Oe,
    he,
    de
  ], _t = () => ["none", We, he, de], hl = () => ["none", We, he, de], ka = () => [We, he, de], au = () => [ph, "full", ...fe()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Yc],
      breakpoint: [Yc],
      color: [tx],
      container: [Yc],
      "drop-shadow": [Yc],
      ease: ["in", "out", "in-out"],
      font: [ux],
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
        aspect: ["auto", "square", ph, de, he, _e]
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
        columns: [We, de, he, ee]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Ze()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Ze()
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
        object: Et()
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
        overscroll: qe()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": qe()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": qe()
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
        z: [ns, "auto", he, de]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ph, "full", "auto", ee, ...fe()]
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
        flex: [We, ph, "auto", "initial", "none", de]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", We, he, de]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", We, he, de]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ns, "first", "last", "none", he, de]
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
        "auto-cols": st()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": st()
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
        justify: [...Dt(), "normal"]
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
        content: ["normal", ...Dt()]
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
        "place-content": Dt()
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
        m: E()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: E()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: E()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: E()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: E()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: E()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: E()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: E()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: E()
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
        size: J()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [ee, "screen", ...J()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          ee,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...J()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          ee,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [F]
          },
          ...J()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...J()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...J()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...J()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", O, yp, Jf]
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
        font: [v, he, Zv]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Qv, de]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ox, de, A]
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
        tracking: [k, he, de]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [We, "none", he, Zv]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          Z,
          ...fe()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", he, de]
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
        list: ["disc", "decimal", "none", he, de]
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
        decoration: [...Ce(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [We, "from-font", "auto", he, Jf]
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
        "underline-offset": [We, "auto", he, de]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", he, de]
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
        content: ["none", he, de]
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
        bg: me()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: j()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ue()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, ns, he, de],
          radial: ["", he, de],
          conic: [ns, he, de]
        }, fx, cx]
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
        from: I()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: I()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: I()
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
        border: [...Ce(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Ce(), "hidden", "none"]
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
        outline: [...Ce(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [We, he, de]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", We, yp, Jf]
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
          ae,
          pg,
          yg
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
        "inset-shadow": ["none", Re, pg, yg]
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
        "ring-offset": [We, Jf]
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
        "text-shadow": ["none", pe, pg, yg]
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
        opacity: [We, he, de]
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
        "mask-radial": [he, de]
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
        "mask-radial-at": mt()
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
        mask: me()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: j()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: ue()
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
        mask: ["none", he, de]
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
          he,
          de
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
        brightness: [We, he, de]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [We, he, de]
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
          pg,
          yg
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
        grayscale: ["", We, he, de]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [We, he, de]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", We, he, de]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [We, he, de]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", We, he, de]
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
          he,
          de
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
        "backdrop-brightness": [We, he, de]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [We, he, de]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", We, he, de]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [We, he, de]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", We, he, de]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [We, he, de]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [We, he, de]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", We, he, de]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", he, de]
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
        duration: [We, "initial", he, de]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", Ue, he, de]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [We, he, de]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", Pe, he, de]
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
        perspective: [be, he, de]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": Et()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: _t()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": _t()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": _t()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": _t()
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
        skew: ka()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ka()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ka()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [he, de, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: Et()
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
        translate: au()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": au()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": au()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": au()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", he, de]
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
        "will-change": ["auto", "scroll", "contents", "transform", he, de]
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
        stroke: [We, yp, Jf, Zv]
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
}, mx = /* @__PURE__ */ KT(hx);
function kv(...y) {
  return mx(NT(y));
}
const gg = ({ message: y, isUser: A = !1, thinking: O = !1 }) => {
  const { config: v } = Sg(), k = (Z, F) => Z.replace(
    /<a href="([^"]+)"[^>]*>(.*?)<\/a>/g,
    `<a href="$1" target="_blank" style="color: ${F ? "#ffffff" : "#1565c0"}; text-decoration-line: underline; word-break: break-word; white-space: normal;" rel="noopener noreferrer">$2</a>`
  ).replace(
    /\*(.*?)\*/g,
    "<strong>$1</strong>"
  ).replace(
    /\[(.*?)\]\((https?:\/\/[^\s]+)\)/g,
    `<a href="$2" target="_blank" style="color: ${F ? "#ffffff" : "#1565c0"}; text-decoration-line: underline; word-break: break-word; white-space: normal;" rel="noopener noreferrer">$1</a>`
  ).replace(
    new RegExp('(?<!href=")https?:\\/\\/[^\\s"]+', "g"),
    `<a href="$&" target="_blank" style="color: ${F ? "#ffffff" : "#1565c0"}; text-decoration-line: underline; word-break: break-word; white-space: normal;" rel="noopener noreferrer">$&</a>`
  ).replace(/\n/g, "<br>");
  return O ? /* @__PURE__ */ B.jsx(
    "div",
    {
      className: kv(
        "relative flex w-fit max-w-[90%] border rounded-t-2xl py-3 px-3.5 rounded-br-2xl bg-white text-[#0096a2] border-[#0096a2] mr-auto justify-start"
      ),
      style: {
        backgroundColor: v?.theme?.chatWindow?.botMessage?.backgroundColor || "#ffffff",
        borderColor: v?.theme?.chatWindow?.botMessage?.borderColor || "#0096a2"
      },
      children: /* @__PURE__ */ B.jsx(
        "div",
        {
          className: "text-sm",
          style: {
            color: v?.theme?.chatWindow?.botMessage?.textColor || "#0096a2"
          },
          children: /* @__PURE__ */ B.jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ B.jsx("div", { className: "text-base flex gap-2 items-end", children: Array.from({ length: 3 }).map((Z, F) => /* @__PURE__ */ B.jsx(
            "span",
            {
              className: "block w-2 h-2 rounded-full bg-[#0096a2] animate-bounce",
              style: { animationDelay: `${250 * F}ms` }
            },
            `loading-circle-${F}`
          )) }) })
        }
      )
    }
  ) : y ? /* @__PURE__ */ B.jsxs(
    "div",
    {
      className: kv(
        "relative flex w-fit max-w-[90%] border rounded-t-2xl py-3 px-3.5",
        A ? "rounded-bl-2xl bg-white text-[#0096a2] border-[#0096a2] ml-auto justify-end" : "rounded-br-2xl bg-white text-[#0096a2] border-[#0096a2] mr-auto justify-start"
      ),
      style: {
        backgroundColor: A ? v?.theme?.chatWindow?.userMessage?.backgroundColor || "#0096a2" : v?.theme?.chatWindow?.botMessage?.backgroundColor || "#ffffff",
        borderColor: A ? v?.theme?.chatWindow?.userMessage?.borderColor || "#0096a2" : v?.theme?.chatWindow?.botMessage?.borderColor || "#0096a2"
      },
      children: [
        /* @__PURE__ */ B.jsx(
          "div",
          {
            className: "text-sm",
            style: {
              color: A ? v?.theme?.chatWindow?.userMessage?.textColor || "#ffffff" : v?.theme?.chatWindow?.botMessage?.textColor || "#0096a2"
            },
            dangerouslySetInnerHTML: {
              __html: k(y, A)
            }
          }
        ),
        /* @__PURE__ */ B.jsx(
          "div",
          {
            className: kv(
              "absolute top-full mt-0.5 w-fit",
              A ? "right-0" : "left-0"
            ),
            children: /* @__PURE__ */ B.jsx("p", { className: "text-[10px] font-light text-gray-500", children: "02.30 PM" })
          }
        )
      ]
    }
  ) : (console.error("message is null!"), null);
}, yx = ({ messages: y, currentResponseMsg: A, loading: O, fetching: v }) => {
  const k = Za.useRef(null);
  return Za.useEffect(() => {
    setTimeout(() => {
      console.log("scroll to bottom ------>>>>>>"), k.current?.scrollIntoView({
        behavior: "smooth",
        block: "end"
      });
    }, 200);
  }, [A, y.length]), /* @__PURE__ */ B.jsxs(
    "div",
    {
      className: "relative flex-1 h-full px-4 py-6 max-h-full overflow-y-scroll",
      style: { overflowAnchor: "none" },
      children: [
        /* @__PURE__ */ B.jsxs("div", { className: "flex flex-col gap-9", children: [
          /* @__PURE__ */ B.jsx("div", { className: "flex flex-col-reverse gap-9", children: y.map((Z, F) => /* @__PURE__ */ B.jsxs("div", { className: "flex flex-col gap-6", children: [
            Z.human && Z.human.content && /* @__PURE__ */ B.jsx(gg, { message: Z.human.content, isUser: !0 }),
            Z.ai && Z.ai.content && /* @__PURE__ */ B.jsx(gg, { message: Z.ai.content, isUser: !1 })
          ] }, F)) }),
          !v && A && y.length > 0 && !y[0]?.ai && /* @__PURE__ */ B.jsx(gg, { message: A, isUser: !1 }),
          O && !A && /* @__PURE__ */ B.jsx(gg, { thinking: !0 })
        ] }),
        /* @__PURE__ */ B.jsx("div", { ref: k, id: "bottom-ref", className: "pb-9" })
      ]
    }
  );
};
function px(y) {
  return eb({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M3 12.9999H9V10.9999H3V1.84558C3 1.56944 3.22386 1.34558 3.5 1.34558C3.58425 1.34558 3.66714 1.36687 3.74096 1.40747L22.2034 11.5618C22.4454 11.6949 22.5337 11.9989 22.4006 12.2409C22.3549 12.324 22.2865 12.3924 22.2034 12.4381L3.74096 22.5924C3.499 22.7255 3.19497 22.6372 3.06189 22.3953C3.02129 22.3214 3 22.2386 3 22.1543V12.9999Z" }, child: [] }] })(y);
}
const gx = ({
  onSendMessage: y,
  loading: A,
  fetching: O
}) => {
  const [v, k] = Ol(""), { config: Z } = Sg(), F = () => {
    !O && !A && v.length > 0 && (y(v), k(""));
  };
  return /* @__PURE__ */ B.jsxs(
    "div",
    {
      className: "px-2 pt-2 pb-1 overflow-hidden max-h-full",
      style: {
        backgroundColor: Z?.theme?.chatWindow?.textInput?.backgroundColor || "#0096a2",
        overflowAnchor: "none"
      },
      children: [
        /* @__PURE__ */ B.jsxs("div", { className: "relative flex items-center gap-2", children: [
          /* @__PURE__ */ B.jsx(
            "input",
            {
              type: "text",
              className: "flex-1 border rounded-md p-2 bg-white pr-10 focus:outline focus:outline-[#ffa100]",
              style: {
                borderColor: Z?.theme?.chatWindow?.textInput?.borderColor || "#ffffff"
              },
              placeholder: Z?.theme?.chatWindow?.textInput?.placeholder || "Ketik pertanyaan Anda...",
              value: v,
              onChange: (ee) => k(ee.target.value),
              onKeyDown: (ee) => {
                ee.key === "Enter" && (ee.preventDefault(), ee.stopPropagation(), F());
              }
            }
          ),
          /* @__PURE__ */ B.jsx(
            "button",
            {
              className: "absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
              disabled: A || v.trim().length === 0,
              onClick: (ee) => {
                ee.preventDefault(), ee.stopPropagation(), F();
              },
              children: /* @__PURE__ */ B.jsx(
                px,
                {
                  className: "w-4 h-4 text-[#0096a2]",
                  color: Z?.theme?.chatWindow?.textInput?.sendButtonColor || "#0096a2"
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ B.jsxs("p", { className: "text-white text-[10px] font-medium text-center mt-1", children: [
          "Powered by",
          " ",
          /* @__PURE__ */ B.jsx("a", { href: "https://mimin.io", className: "underline", children: "Mimin" })
        ] })
      ]
    }
  );
}, vx = ({
  isVisible: y,
  onToggleCallWindow: A
  // onToggleMuteCall,
  // onToggleSpeakerCall,
}) => {
  const [O, v] = Ol(!1), [k, Z] = Ol(!0);
  return y ? /* @__PURE__ */ B.jsx("div", { className: "absolute inset-0 bg-white z-10", children: /* @__PURE__ */ B.jsx("div", { className: "h-full px-6 py-10 overflow-y-auto", children: /* @__PURE__ */ B.jsxs("div", { className: "flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ B.jsx("h4", { className: "text-[#0096a2] text-xl font-bold mb-6", children: "IN CALL" }),
    /* @__PURE__ */ B.jsx("div", { className: "flex items-center justify-center p-4 rounded-full w-[204px] h-[204px] bg-gradient-to-br from-[#0096a2]/30 to-[#f26075]/30", children: /* @__PURE__ */ B.jsx("div", { className: "flex items-center justify-center p-4 rounded-full w-full h-full bg-gradient-to-br from-[#0096a2]/40 to-[#f26075]/40", children: /* @__PURE__ */ B.jsx("div", { className: "flex items-center justify-center p-4 rounded-full w-full h-full bg-gradient-to-br from-[#0096a2]/50 to-[#f26075]/50", children: /* @__PURE__ */ B.jsx(pT, { className: "w-14 h-14 text-white/80" }) }) }) }),
    /* @__PURE__ */ B.jsx("p", { className: "text-[#0096a2] text-base font-bold mt-5", children: "MIMIN AI" }),
    /* @__PURE__ */ B.jsx("p", { className: "text-[#0096a2] text-sm font-medium mt-0", children: "09:00" }),
    /* @__PURE__ */ B.jsx("div", { className: "h-[1.5px] w-full bg-gray-200 my-6" }),
    /* @__PURE__ */ B.jsx("div", { className: "grid grid-cols-2 gap-4 w-full", children: /* @__PURE__ */ B.jsx("div", { className: "col-span-2 flex items-center justify-center", children: /* @__PURE__ */ B.jsx(
      "button",
      {
        type: "button",
        className: "cursor-pointer bg-gradient-to-br from-[#0096a2]/30 to-[#f26075]/30 rounded-full w-[60px] h-[60px] p-4 aspect-square flex items-center justify-center",
        onClick: A,
        children: /* @__PURE__ */ B.jsx(MS, { className: "w-full h-full text-[#f26075]/90 rotate-90" })
      }
    ) }) })
  ] }) }) }) : null;
}, bx = {
  limit: 10,
  page: 0,
  pages: 0,
  size: 10
}, Sx = ({
  config: y,
  signature: A
}) => {
  const [O, v] = Ol(!1), [k, Z] = Ol(!1), [F, ee] = Ol(""), [Y, re] = Ol(""), [ae, Re] = Ol(bx), { setConfig: pe, setSignature: Ve } = Sg(), [Oe, be] = Ol(!1), [_e, Ue] = Ol(!1), [Pe, Ze] = Ol(!1), {
    interactions: mt,
    addInteraction: Et,
    updateAiInteractionByIndex: ot,
    chatType: qe,
    setChatType: fe
  } = AS(), ne = () => {
    be(!Oe);
  }, gt = () => {
    Ue(!_e);
  }, Fe = async () => {
    try {
      const dt = (await (await fetch("https://api.ipify.org?format=json")).json()).ip, E = navigator.userAgent;
      return { ip: dt, userAgent: E, isError: !1 };
    } catch (st) {
      return { isError: !0, errorMessage: st.message };
    }
  }, Ae = async (st) => {
    const { isError: Dt, errorMessage: dt, ip: E, userAgent: J } = await Fe();
    if (Dt) {
      console.error(dt);
      return;
    }
    v(!0);
    const _ = {
      name: J,
      phone: E,
      message_id: crypto.randomUUID(),
      message: st,
      media_type: "text",
      media: "",
      type: qe || ""
    };
    try {
      const me = await fetch(
        `${SS.NEXT_PUBLIC_CHATBOT_URL}/api/chat/new-website/${y?.credentials?.username}`,
        {
          headers: {
            Signature: A,
            Accept: "text/event-stream",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(_),
          method: "POST"
        }
      );
      if (!me.ok) {
        console.error("Failed to send message");
        return;
      }
      const j = me.body.pipeThrough(new TextDecoderStream()).getReader();
      for (; ; ) {
        const { value: ue, done: I } = await j.read();
        if (I) break;
        const le = '{"event": ';
        ue.split(`data: ${le}`).filter(Boolean).map(
          (Ce) => JSON.parse(`${le}${Ce}`.replace(/\n\n$/gm, ""))
        ).filter((Ce) => Ce.event === "token" ? !!Ce.data : !0).forEach(async (Ce) => {
          if (Ce.event === "payload") {
            const He = {
              additional_kwargs: {},
              content: Ce.message,
              example: !1
            };
            ot(0, He), qe || fe(Ce.type), ee(Ce.chat_history_id);
          } else Ce.event === "token" && re((He) => He + Ce.data);
        });
      }
    } catch {
      console.error(
        "We apologize, a system error has occurred. Please try again!"
      );
    } finally {
      v(!1);
    }
  };
  return Z2(() => {
    pe(y || null), Ve(A || "");
  }, []), /* @__PURE__ */ B.jsxs("div", { className: "fixed bottom-6 right-6 z-[9999]", children: [
    /* @__PURE__ */ B.jsxs(
      "button",
      {
        className: "flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#0096a2] shadow-md transition-all duration-300 ease-in-out cursor-pointer",
        style: {
          backgroundColor: Oe ? "#0096a299" : y?.theme?.button?.backgroundColor || "#ffffff",
          color: Oe ? "#ffffff" : y?.theme?.button?.textColor || "#0096a2"
        },
        onClick: ne,
        children: [
          /* @__PURE__ */ B.jsx(
            "img",
            {
              src: y?.theme?.button?.iconSrc || "https://appstaging.mimin.io/favicon.ico",
              alt: "ICON",
              className: "w-4 h-auto"
            }
          ),
          /* @__PURE__ */ B.jsx("span", { className: "text-sm font-bold", children: y?.theme?.button?.tooltip || "Ask Mimin" })
        ]
      }
    ),
    Oe && /* @__PURE__ */ B.jsx("div", { className: "absolute bottom-full mb-4 right-0", children: /* @__PURE__ */ B.jsxs(
      "div",
      {
        className: "relative flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden",
        style: {
          width: y?.theme?.chatWindow?.width || "330px",
          height: y?.theme?.chatWindow?.height || "600px"
        },
        children: [
          (y?.theme?.chatWindow.needAuthentication || !1) && !Pe && /* @__PURE__ */ B.jsx(ET, {}),
          (Pe || !y?.theme?.chatWindow.needAuthentication) && /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
            /* @__PURE__ */ B.jsx(
              wT,
              {
                onToggleCallWindow: gt,
                onToggleChatWindow: ne
              }
            ),
            /* @__PURE__ */ B.jsx(
              yx,
              {
                messages: mt,
                currentResponseMsg: Y,
                loading: O,
                fetching: k
              }
            ),
            /* @__PURE__ */ B.jsx(
              gx,
              {
                onSendMessage: (st) => {
                  re(""), st = st.trim().replaceAll(/\n\n+/g, `

`);
                  const Dt = {
                    human: {
                      content: st,
                      additional_kwargs: {},
                      example: !1
                    },
                    date: /* @__PURE__ */ new Date(),
                    id: crypto.randomUUID()
                  };
                  Et(Dt), Ae(st);
                },
                loading: O,
                fetching: k
              }
            ),
            /* @__PURE__ */ B.jsx(
              vx,
              {
                isVisible: _e,
                onToggleCallWindow: gt
              }
            )
          ] })
        ]
      }
    ) })
  ] });
}, Tx = {
  init: async function(y = {}) {
    try {
      if (aT(), !y.credentials)
        throw new Error("credentials are required");
      if (!y.credentials.username)
        throw new Error("username is required");
      if (!y.credentials.apiKey)
        throw new Error("apiKey is required");
      const A = await fetch(
        `${SS.NEXT_PUBLIC_LOGIN_CUSTOMER_API}/api/v1/chatbotdata/create-signature/${y.credentials.username}`,
        {
          method: "POST",
          headers: {
            "x-api-key": y.credentials.apiKey
          }
        }
      ), { signature: O } = await A.json();
      if (console.log("signature", O), !O)
        throw new Error("Failed to get signature");
      const v = document.getElementById("mimin-widget-container");
      v && v.remove();
      const k = document.createElement("div");
      k.id = "mimin-widget-container", document.body.appendChild(k), lT.createRoot(k).render(
        /* @__PURE__ */ B.jsx(B.Fragment, { children: /* @__PURE__ */ B.jsx(
          Sx,
          {
            config: {
              ...y,
              credentials: {
                ...y.credentials
              }
            },
            signature: O
          }
        ) })
      ), console.log("Mimin Chatbot React initialized successfully");
    } catch (A) {
      console.error("Failed to initialize Mimin Chatbot React:", A);
    }
  }
};
window.Chatbot = Tx;
export {
  Tx as Chatbot
};
//# sourceMappingURL=chat-widget.es.js.map
