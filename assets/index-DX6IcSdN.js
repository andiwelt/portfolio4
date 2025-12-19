(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) l(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const f of d.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && l(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function l(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = o(c);
    fetch(c.href, d);
  }
})();
var Ka = { exports: {} },
  si = {},
  Xa = { exports: {} },
  se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ud;
function lg() {
  if (ud) return se;
  ud = 1;
  var n = Symbol.for("react.element"),
    i = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    l = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.provider"),
    f = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    x = Symbol.iterator;
  function T(k) {
    return k === null || typeof k != "object"
      ? null
      : ((k = (x && k[x]) || k["@@iterator"]),
        typeof k == "function" ? k : null);
  }
  var M = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    N = Object.assign,
    L = {};
  function j(k, D, ie) {
    (this.props = k),
      (this.context = D),
      (this.refs = L),
      (this.updater = ie || M);
  }
  (j.prototype.isReactComponent = {}),
    (j.prototype.setState = function (k, D) {
      if (typeof k != "object" && typeof k != "function" && k != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, k, D, "setState");
    }),
    (j.prototype.forceUpdate = function (k) {
      this.updater.enqueueForceUpdate(this, k, "forceUpdate");
    });
  function I() {}
  I.prototype = j.prototype;
  function U(k, D, ie) {
    (this.props = k),
      (this.context = D),
      (this.refs = L),
      (this.updater = ie || M);
  }
  var z = (U.prototype = new I());
  (z.constructor = U), N(z, j.prototype), (z.isPureReactComponent = !0);
  var Z = Array.isArray,
    X = Object.prototype.hasOwnProperty,
    q = { current: null },
    ee = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Q(k, D, ie) {
    var oe,
      ue = {},
      ce = null,
      me = null;
    if (D != null)
      for (oe in (D.ref !== void 0 && (me = D.ref),
      D.key !== void 0 && (ce = "" + D.key),
      D))
        X.call(D, oe) && !ee.hasOwnProperty(oe) && (ue[oe] = D[oe]);
    var de = arguments.length - 2;
    if (de === 1) ue.children = ie;
    else if (1 < de) {
      for (var xe = Array(de), lt = 0; lt < de; lt++)
        xe[lt] = arguments[lt + 2];
      ue.children = xe;
    }
    if (k && k.defaultProps)
      for (oe in ((de = k.defaultProps), de))
        ue[oe] === void 0 && (ue[oe] = de[oe]);
    return {
      $$typeof: n,
      type: k,
      key: ce,
      ref: me,
      props: ue,
      _owner: q.current,
    };
  }
  function pe(k, D) {
    return {
      $$typeof: n,
      type: k.type,
      key: D,
      ref: k.ref,
      props: k.props,
      _owner: k._owner,
    };
  }
  function ge(k) {
    return typeof k == "object" && k !== null && k.$$typeof === n;
  }
  function Ue(k) {
    var D = { "=": "=0", ":": "=2" };
    return (
      "$" +
      k.replace(/[=:]/g, function (ie) {
        return D[ie];
      })
    );
  }
  var ot = /\/+/g;
  function Ye(k, D) {
    return typeof k == "object" && k !== null && k.key != null
      ? Ue("" + k.key)
      : D.toString(36);
  }
  function Je(k, D, ie, oe, ue) {
    var ce = typeof k;
    (ce === "undefined" || ce === "boolean") && (k = null);
    var me = !1;
    if (k === null) me = !0;
    else
      switch (ce) {
        case "string":
        case "number":
          me = !0;
          break;
        case "object":
          switch (k.$$typeof) {
            case n:
            case i:
              me = !0;
          }
      }
    if (me)
      return (
        (me = k),
        (ue = ue(me)),
        (k = oe === "" ? "." + Ye(me, 0) : oe),
        Z(ue)
          ? ((ie = ""),
            k != null && (ie = k.replace(ot, "$&/") + "/"),
            Je(ue, D, ie, "", function (lt) {
              return lt;
            }))
          : ue != null &&
            (ge(ue) &&
              (ue = pe(
                ue,
                ie +
                  (!ue.key || (me && me.key === ue.key)
                    ? ""
                    : ("" + ue.key).replace(ot, "$&/") + "/") +
                  k
              )),
            D.push(ue)),
        1
      );
    if (((me = 0), (oe = oe === "" ? "." : oe + ":"), Z(k)))
      for (var de = 0; de < k.length; de++) {
        ce = k[de];
        var xe = oe + Ye(ce, de);
        me += Je(ce, D, ie, xe, ue);
      }
    else if (((xe = T(k)), typeof xe == "function"))
      for (k = xe.call(k), de = 0; !(ce = k.next()).done; )
        (ce = ce.value),
          (xe = oe + Ye(ce, de++)),
          (me += Je(ce, D, ie, xe, ue));
    else if (ce === "object")
      throw (
        ((D = String(k)),
        Error(
          "Objects are not valid as a React child (found: " +
            (D === "[object Object]"
              ? "object with keys {" + Object.keys(k).join(", ") + "}"
              : D) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return me;
  }
  function at(k, D, ie) {
    if (k == null) return k;
    var oe = [],
      ue = 0;
    return (
      Je(k, oe, "", "", function (ce) {
        return D.call(ie, ce, ue++);
      }),
      oe
    );
  }
  function Ge(k) {
    if (k._status === -1) {
      var D = k._result;
      (D = D()),
        D.then(
          function (ie) {
            (k._status === 0 || k._status === -1) &&
              ((k._status = 1), (k._result = ie));
          },
          function (ie) {
            (k._status === 0 || k._status === -1) &&
              ((k._status = 2), (k._result = ie));
          }
        ),
        k._status === -1 && ((k._status = 0), (k._result = D));
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var re = { current: null },
    F = { transition: null },
    G = {
      ReactCurrentDispatcher: re,
      ReactCurrentBatchConfig: F,
      ReactCurrentOwner: q,
    };
  function O() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (se.Children = {
      map: at,
      forEach: function (k, D, ie) {
        at(
          k,
          function () {
            D.apply(this, arguments);
          },
          ie
        );
      },
      count: function (k) {
        var D = 0;
        return (
          at(k, function () {
            D++;
          }),
          D
        );
      },
      toArray: function (k) {
        return (
          at(k, function (D) {
            return D;
          }) || []
        );
      },
      only: function (k) {
        if (!ge(k))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return k;
      },
    }),
    (se.Component = j),
    (se.Fragment = o),
    (se.Profiler = c),
    (se.PureComponent = U),
    (se.StrictMode = l),
    (se.Suspense = m),
    (se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G),
    (se.act = O),
    (se.cloneElement = function (k, D, ie) {
      if (k == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            k +
            "."
        );
      var oe = N({}, k.props),
        ue = k.key,
        ce = k.ref,
        me = k._owner;
      if (D != null) {
        if (
          (D.ref !== void 0 && ((ce = D.ref), (me = q.current)),
          D.key !== void 0 && (ue = "" + D.key),
          k.type && k.type.defaultProps)
        )
          var de = k.type.defaultProps;
        for (xe in D)
          X.call(D, xe) &&
            !ee.hasOwnProperty(xe) &&
            (oe[xe] = D[xe] === void 0 && de !== void 0 ? de[xe] : D[xe]);
      }
      var xe = arguments.length - 2;
      if (xe === 1) oe.children = ie;
      else if (1 < xe) {
        de = Array(xe);
        for (var lt = 0; lt < xe; lt++) de[lt] = arguments[lt + 2];
        oe.children = de;
      }
      return {
        $$typeof: n,
        type: k.type,
        key: ue,
        ref: ce,
        props: oe,
        _owner: me,
      };
    }),
    (se.createContext = function (k) {
      return (
        (k = {
          $$typeof: f,
          _currentValue: k,
          _currentValue2: k,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (k.Provider = { $$typeof: d, _context: k }),
        (k.Consumer = k)
      );
    }),
    (se.createElement = Q),
    (se.createFactory = function (k) {
      var D = Q.bind(null, k);
      return (D.type = k), D;
    }),
    (se.createRef = function () {
      return { current: null };
    }),
    (se.forwardRef = function (k) {
      return { $$typeof: p, render: k };
    }),
    (se.isValidElement = ge),
    (se.lazy = function (k) {
      return { $$typeof: y, _payload: { _status: -1, _result: k }, _init: Ge };
    }),
    (se.memo = function (k, D) {
      return { $$typeof: g, type: k, compare: D === void 0 ? null : D };
    }),
    (se.startTransition = function (k) {
      var D = F.transition;
      F.transition = {};
      try {
        k();
      } finally {
        F.transition = D;
      }
    }),
    (se.unstable_act = O),
    (se.useCallback = function (k, D) {
      return re.current.useCallback(k, D);
    }),
    (se.useContext = function (k) {
      return re.current.useContext(k);
    }),
    (se.useDebugValue = function () {}),
    (se.useDeferredValue = function (k) {
      return re.current.useDeferredValue(k);
    }),
    (se.useEffect = function (k, D) {
      return re.current.useEffect(k, D);
    }),
    (se.useId = function () {
      return re.current.useId();
    }),
    (se.useImperativeHandle = function (k, D, ie) {
      return re.current.useImperativeHandle(k, D, ie);
    }),
    (se.useInsertionEffect = function (k, D) {
      return re.current.useInsertionEffect(k, D);
    }),
    (se.useLayoutEffect = function (k, D) {
      return re.current.useLayoutEffect(k, D);
    }),
    (se.useMemo = function (k, D) {
      return re.current.useMemo(k, D);
    }),
    (se.useReducer = function (k, D, ie) {
      return re.current.useReducer(k, D, ie);
    }),
    (se.useRef = function (k) {
      return re.current.useRef(k);
    }),
    (se.useState = function (k) {
      return re.current.useState(k);
    }),
    (se.useSyncExternalStore = function (k, D, ie) {
      return re.current.useSyncExternalStore(k, D, ie);
    }),
    (se.useTransition = function () {
      return re.current.useTransition();
    }),
    (se.version = "18.3.1"),
    se
  );
}
var cd;
function Ll() {
  return cd || ((cd = 1), (Xa.exports = lg())), Xa.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fd;
function ug() {
  if (fd) return si;
  fd = 1;
  var n = Ll(),
    i = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    l = Object.prototype.hasOwnProperty,
    c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(p, m, g) {
    var y,
      x = {},
      T = null,
      M = null;
    g !== void 0 && (T = "" + g),
      m.key !== void 0 && (T = "" + m.key),
      m.ref !== void 0 && (M = m.ref);
    for (y in m) l.call(m, y) && !d.hasOwnProperty(y) && (x[y] = m[y]);
    if (p && p.defaultProps)
      for (y in ((m = p.defaultProps), m)) x[y] === void 0 && (x[y] = m[y]);
    return {
      $$typeof: i,
      type: p,
      key: T,
      ref: M,
      props: x,
      _owner: c.current,
    };
  }
  return (si.Fragment = o), (si.jsx = f), (si.jsxs = f), si;
}
var dd;
function cg() {
  return dd || ((dd = 1), (Ka.exports = ug())), Ka.exports;
}
var ae = cg(),
  Vs = {},
  Ya = { exports: {} },
  it = {},
  Ga = { exports: {} },
  Qa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hd;
function fg() {
  return (
    hd ||
      ((hd = 1),
      (function (n) {
        function i(F, G) {
          var O = F.length;
          F.push(G);
          e: for (; 0 < O; ) {
            var k = (O - 1) >>> 1,
              D = F[k];
            if (0 < c(D, G)) (F[k] = G), (F[O] = D), (O = k);
            else break e;
          }
        }
        function o(F) {
          return F.length === 0 ? null : F[0];
        }
        function l(F) {
          if (F.length === 0) return null;
          var G = F[0],
            O = F.pop();
          if (O !== G) {
            F[0] = O;
            e: for (var k = 0, D = F.length, ie = D >>> 1; k < ie; ) {
              var oe = 2 * (k + 1) - 1,
                ue = F[oe],
                ce = oe + 1,
                me = F[ce];
              if (0 > c(ue, O))
                ce < D && 0 > c(me, ue)
                  ? ((F[k] = me), (F[ce] = O), (k = ce))
                  : ((F[k] = ue), (F[oe] = O), (k = oe));
              else if (ce < D && 0 > c(me, O))
                (F[k] = me), (F[ce] = O), (k = ce);
              else break e;
            }
          }
          return G;
        }
        function c(F, G) {
          var O = F.sortIndex - G.sortIndex;
          return O !== 0 ? O : F.id - G.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var d = performance;
          n.unstable_now = function () {
            return d.now();
          };
        } else {
          var f = Date,
            p = f.now();
          n.unstable_now = function () {
            return f.now() - p;
          };
        }
        var m = [],
          g = [],
          y = 1,
          x = null,
          T = 3,
          M = !1,
          N = !1,
          L = !1,
          j = typeof setTimeout == "function" ? setTimeout : null,
          I = typeof clearTimeout == "function" ? clearTimeout : null,
          U = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function z(F) {
          for (var G = o(g); G !== null; ) {
            if (G.callback === null) l(g);
            else if (G.startTime <= F)
              l(g), (G.sortIndex = G.expirationTime), i(m, G);
            else break;
            G = o(g);
          }
        }
        function Z(F) {
          if (((L = !1), z(F), !N))
            if (o(m) !== null) (N = !0), Ge(X);
            else {
              var G = o(g);
              G !== null && re(Z, G.startTime - F);
            }
        }
        function X(F, G) {
          (N = !1), L && ((L = !1), I(Q), (Q = -1)), (M = !0);
          var O = T;
          try {
            for (
              z(G), x = o(m);
              x !== null && (!(x.expirationTime > G) || (F && !Ue()));

            ) {
              var k = x.callback;
              if (typeof k == "function") {
                (x.callback = null), (T = x.priorityLevel);
                var D = k(x.expirationTime <= G);
                (G = n.unstable_now()),
                  typeof D == "function"
                    ? (x.callback = D)
                    : x === o(m) && l(m),
                  z(G);
              } else l(m);
              x = o(m);
            }
            if (x !== null) var ie = !0;
            else {
              var oe = o(g);
              oe !== null && re(Z, oe.startTime - G), (ie = !1);
            }
            return ie;
          } finally {
            (x = null), (T = O), (M = !1);
          }
        }
        var q = !1,
          ee = null,
          Q = -1,
          pe = 5,
          ge = -1;
        function Ue() {
          return !(n.unstable_now() - ge < pe);
        }
        function ot() {
          if (ee !== null) {
            var F = n.unstable_now();
            ge = F;
            var G = !0;
            try {
              G = ee(!0, F);
            } finally {
              G ? Ye() : ((q = !1), (ee = null));
            }
          } else q = !1;
        }
        var Ye;
        if (typeof U == "function")
          Ye = function () {
            U(ot);
          };
        else if (typeof MessageChannel < "u") {
          var Je = new MessageChannel(),
            at = Je.port2;
          (Je.port1.onmessage = ot),
            (Ye = function () {
              at.postMessage(null);
            });
        } else
          Ye = function () {
            j(ot, 0);
          };
        function Ge(F) {
          (ee = F), q || ((q = !0), Ye());
        }
        function re(F, G) {
          Q = j(function () {
            F(n.unstable_now());
          }, G);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (F) {
            F.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            N || M || ((N = !0), Ge(X));
          }),
          (n.unstable_forceFrameRate = function (F) {
            0 > F || 125 < F
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (pe = 0 < F ? Math.floor(1e3 / F) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return o(m);
          }),
          (n.unstable_next = function (F) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = T;
            }
            var O = T;
            T = G;
            try {
              return F();
            } finally {
              T = O;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (F, G) {
            switch (F) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                F = 3;
            }
            var O = T;
            T = F;
            try {
              return G();
            } finally {
              T = O;
            }
          }),
          (n.unstable_scheduleCallback = function (F, G, O) {
            var k = n.unstable_now();
            switch (
              (typeof O == "object" && O !== null
                ? ((O = O.delay),
                  (O = typeof O == "number" && 0 < O ? k + O : k))
                : (O = k),
              F)
            ) {
              case 1:
                var D = -1;
                break;
              case 2:
                D = 250;
                break;
              case 5:
                D = 1073741823;
                break;
              case 4:
                D = 1e4;
                break;
              default:
                D = 5e3;
            }
            return (
              (D = O + D),
              (F = {
                id: y++,
                callback: G,
                priorityLevel: F,
                startTime: O,
                expirationTime: D,
                sortIndex: -1,
              }),
              O > k
                ? ((F.sortIndex = O),
                  i(g, F),
                  o(m) === null &&
                    F === o(g) &&
                    (L ? (I(Q), (Q = -1)) : (L = !0), re(Z, O - k)))
                : ((F.sortIndex = D), i(m, F), N || M || ((N = !0), Ge(X))),
              F
            );
          }),
          (n.unstable_shouldYield = Ue),
          (n.unstable_wrapCallback = function (F) {
            var G = T;
            return function () {
              var O = T;
              T = G;
              try {
                return F.apply(this, arguments);
              } finally {
                T = O;
              }
            };
          });
      })(Qa)),
    Qa
  );
}
var pd;
function dg() {
  return pd || ((pd = 1), (Ga.exports = fg())), Ga.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var md;
function hg() {
  if (md) return it;
  md = 1;
  var n = Ll(),
    i = dg();
  function o(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        r = 1;
      r < arguments.length;
      r++
    )
      t += "&args[]=" + encodeURIComponent(arguments[r]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var l = new Set(),
    c = {};
  function d(e, t) {
    f(e, t), f(e + "Capture", t);
  }
  function f(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
  }
  var p = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    m = Object.prototype.hasOwnProperty,
    g =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    y = {},
    x = {};
  function T(e) {
    return m.call(x, e)
      ? !0
      : m.call(y, e)
      ? !1
      : g.test(e)
      ? (x[e] = !0)
      : ((y[e] = !0), !1);
  }
  function M(e, t, r, s) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s
          ? !1
          : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function N(e, t, r, s) {
    if (t === null || typeof t > "u" || M(e, t, r, s)) return !0;
    if (s) return !1;
    if (r !== null)
      switch (r.type) {
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
  function L(e, t, r, s, a, u, h) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = s),
      (this.attributeNamespace = a),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = u),
      (this.removeEmptyString = h);
  }
  var j = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      j[e] = new L(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      j[t] = new L(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      j[e] = new L(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      j[e] = new L(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        j[e] = new L(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      j[e] = new L(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      j[e] = new L(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      j[e] = new L(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      j[e] = new L(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var I = /[\-:]([a-z])/g;
  function U(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(I, U);
      j[t] = new L(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(I, U);
        j[t] = new L(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(I, U);
      j[t] = new L(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      j[e] = new L(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (j.xlinkHref = new L(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      j[e] = new L(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function z(e, t, r, s) {
    var a = j.hasOwnProperty(t) ? j[t] : null;
    (a !== null
      ? a.type !== 0
      : s ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (N(t, r, a, s) && (r = null),
      s || a === null
        ? T(t) &&
          (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
        : a.mustUseProperty
        ? (e[a.propertyName] = r === null ? (a.type === 3 ? !1 : "") : r)
        : ((t = a.attributeName),
          (s = a.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((a = a.type),
              (r = a === 3 || (a === 4 && r === !0) ? "" : "" + r),
              s ? e.setAttributeNS(s, t, r) : e.setAttribute(t, r))));
  }
  var Z = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    X = Symbol.for("react.element"),
    q = Symbol.for("react.portal"),
    ee = Symbol.for("react.fragment"),
    Q = Symbol.for("react.strict_mode"),
    pe = Symbol.for("react.profiler"),
    ge = Symbol.for("react.provider"),
    Ue = Symbol.for("react.context"),
    ot = Symbol.for("react.forward_ref"),
    Ye = Symbol.for("react.suspense"),
    Je = Symbol.for("react.suspense_list"),
    at = Symbol.for("react.memo"),
    Ge = Symbol.for("react.lazy"),
    re = Symbol.for("react.offscreen"),
    F = Symbol.iterator;
  function G(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (F && e[F]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var O = Object.assign,
    k;
  function D(e) {
    if (k === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        k = (t && t[1]) || "";
      }
    return (
      `
` +
      k +
      e
    );
  }
  var ie = !1;
  function oe(e, t) {
    if (!e || ie) return "";
    ie = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (E) {
            var s = E;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (E) {
            s = E;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (E) {
          s = E;
        }
        e();
      }
    } catch (E) {
      if (E && s && typeof E.stack == "string") {
        for (
          var a = E.stack.split(`
`),
            u = s.stack.split(`
`),
            h = a.length - 1,
            v = u.length - 1;
          1 <= h && 0 <= v && a[h] !== u[v];

        )
          v--;
        for (; 1 <= h && 0 <= v; h--, v--)
          if (a[h] !== u[v]) {
            if (h !== 1 || v !== 1)
              do
                if ((h--, v--, 0 > v || a[h] !== u[v])) {
                  var w =
                    `
` + a[h].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      w.includes("<anonymous>") &&
                      (w = w.replace("<anonymous>", e.displayName)),
                    w
                  );
                }
              while (1 <= h && 0 <= v);
            break;
          }
      }
    } finally {
      (ie = !1), (Error.prepareStackTrace = r);
    }
    return (e = e ? e.displayName || e.name : "") ? D(e) : "";
  }
  function ue(e) {
    switch (e.tag) {
      case 5:
        return D(e.type);
      case 16:
        return D("Lazy");
      case 13:
        return D("Suspense");
      case 19:
        return D("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = oe(e.type, !1)), e;
      case 11:
        return (e = oe(e.type.render, !1)), e;
      case 1:
        return (e = oe(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ce(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ee:
        return "Fragment";
      case q:
        return "Portal";
      case pe:
        return "Profiler";
      case Q:
        return "StrictMode";
      case Ye:
        return "Suspense";
      case Je:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ue:
          return (e.displayName || "Context") + ".Consumer";
        case ge:
          return (e._context.displayName || "Context") + ".Provider";
        case ot:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case at:
          return (
            (t = e.displayName || null), t !== null ? t : ce(e.type) || "Memo"
          );
        case Ge:
          (t = e._payload), (e = e._init);
          try {
            return ce(e(t));
          } catch {}
      }
    return null;
  }
  function me(e) {
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
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
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
        return ce(t);
      case 8:
        return t === Q ? "StrictMode" : "Mode";
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
  function de(e) {
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
  function xe(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function lt(e) {
    var t = xe(e) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      s = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var a = r.get,
        u = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (h) {
            (s = "" + h), u.call(this, h);
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return s;
          },
          setValue: function (h) {
            s = "" + h;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Si(e) {
    e._valueTracker || (e._valueTracker = lt(e));
  }
  function pu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      s = "";
    return (
      e && (s = xe(e) ? (e.checked ? "true" : "false") : e.value),
      (e = s),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function Ti(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function qs(e, t) {
    var r = t.checked;
    return O({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function mu(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue,
      s = t.checked != null ? t.checked : t.defaultChecked;
    (r = de(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: s,
        initialValue: r,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function yu(e, t) {
    (t = t.checked), t != null && z(e, "checked", t, !1);
  }
  function Js(e, t) {
    yu(e, t);
    var r = de(t.value),
      s = t.type;
    if (r != null)
      s === "number"
        ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
        : e.value !== "" + r && (e.value = "" + r);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? bs(e, t.type, r)
      : t.hasOwnProperty("defaultValue") && bs(e, t.type, de(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function gu(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (
        !(
          (s !== "submit" && s !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (r = e.name),
      r !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== "" && (e.name = r);
  }
  function bs(e, t, r) {
    (t !== "number" || Ti(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var xr = Array.isArray;
  function In(e, t, r, s) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < r.length; a++) t["$" + r[a]] = !0;
      for (r = 0; r < e.length; r++)
        (a = t.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== a && (e[r].selected = a),
          a && s && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + de(r), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === r) {
          (e[a].selected = !0), s && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function eo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return O({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function vu(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(o(92));
        if (xr(r)) {
          if (1 < r.length) throw Error(o(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), (r = t);
    }
    e._wrapperState = { initialValue: de(r) };
  }
  function wu(e, t) {
    var r = de(t.value),
      s = de(t.defaultValue);
    r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      s != null && (e.defaultValue = "" + s);
  }
  function xu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Su(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function to(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Su(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var ki,
    Tu = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, r, s, a) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, s, a);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          ki = ki || document.createElement("div"),
            ki.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = ki.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Sr(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Tr = {
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
      strokeWidth: !0,
    },
    dm = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Tr).forEach(function (e) {
    dm.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Tr[t] = Tr[e]);
    });
  });
  function ku(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (Tr.hasOwnProperty(e) && Tr[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Pu(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var s = r.indexOf("--") === 0,
          a = ku(r, t[r], s);
        r === "float" && (r = "cssFloat"), s ? e.setProperty(r, a) : (e[r] = a);
      }
  }
  var hm = O(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function no(e, t) {
    if (t) {
      if (hm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function ro(e, t) {
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
  var io = null;
  function so(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var oo = null,
    zn = null,
    On = null;
  function Cu(e) {
    if ((e = $r(e))) {
      if (typeof oo != "function") throw Error(o(280));
      var t = e.stateNode;
      t && ((t = Xi(t)), oo(e.stateNode, e.type, t));
    }
  }
  function Eu(e) {
    zn ? (On ? On.push(e) : (On = [e])) : (zn = e);
  }
  function Mu() {
    if (zn) {
      var e = zn,
        t = On;
      if (((On = zn = null), Cu(e), t)) for (e = 0; e < t.length; e++) Cu(t[e]);
    }
  }
  function Ru(e, t) {
    return e(t);
  }
  function Du() {}
  var ao = !1;
  function Au(e, t, r) {
    if (ao) return e(t, r);
    ao = !0;
    try {
      return Ru(e, t, r);
    } finally {
      (ao = !1), (zn !== null || On !== null) && (Du(), Mu());
    }
  }
  function kr(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var s = Xi(r);
    if (s === null) return null;
    r = s[t];
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
        (s = !s.disabled) ||
          ((e = e.type),
          (s = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !s);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(o(231, t, typeof r));
    return r;
  }
  var lo = !1;
  if (p)
    try {
      var Pr = {};
      Object.defineProperty(Pr, "passive", {
        get: function () {
          lo = !0;
        },
      }),
        window.addEventListener("test", Pr, Pr),
        window.removeEventListener("test", Pr, Pr);
    } catch {
      lo = !1;
    }
  function pm(e, t, r, s, a, u, h, v, w) {
    var E = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, E);
    } catch (A) {
      this.onError(A);
    }
  }
  var Cr = !1,
    Pi = null,
    Ci = !1,
    uo = null,
    mm = {
      onError: function (e) {
        (Cr = !0), (Pi = e);
      },
    };
  function ym(e, t, r, s, a, u, h, v, w) {
    (Cr = !1), (Pi = null), pm.apply(mm, arguments);
  }
  function gm(e, t, r, s, a, u, h, v, w) {
    if ((ym.apply(this, arguments), Cr)) {
      if (Cr) {
        var E = Pi;
        (Cr = !1), (Pi = null);
      } else throw Error(o(198));
      Ci || ((Ci = !0), (uo = E));
    }
  }
  function vn(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function Vu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Nu(e) {
    if (vn(e) !== e) throw Error(o(188));
  }
  function vm(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = vn(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var r = e, s = t; ; ) {
      var a = r.return;
      if (a === null) break;
      var u = a.alternate;
      if (u === null) {
        if (((s = a.return), s !== null)) {
          r = s;
          continue;
        }
        break;
      }
      if (a.child === u.child) {
        for (u = a.child; u; ) {
          if (u === r) return Nu(a), e;
          if (u === s) return Nu(a), t;
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (r.return !== s.return) (r = a), (s = u);
      else {
        for (var h = !1, v = a.child; v; ) {
          if (v === r) {
            (h = !0), (r = a), (s = u);
            break;
          }
          if (v === s) {
            (h = !0), (s = a), (r = u);
            break;
          }
          v = v.sibling;
        }
        if (!h) {
          for (v = u.child; v; ) {
            if (v === r) {
              (h = !0), (r = u), (s = a);
              break;
            }
            if (v === s) {
              (h = !0), (s = u), (r = a);
              break;
            }
            v = v.sibling;
          }
          if (!h) throw Error(o(189));
        }
      }
      if (r.alternate !== s) throw Error(o(190));
    }
    if (r.tag !== 3) throw Error(o(188));
    return r.stateNode.current === r ? e : t;
  }
  function Lu(e) {
    return (e = vm(e)), e !== null ? _u(e) : null;
  }
  function _u(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = _u(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ju = i.unstable_scheduleCallback,
    Fu = i.unstable_cancelCallback,
    wm = i.unstable_shouldYield,
    xm = i.unstable_requestPaint,
    Re = i.unstable_now,
    Sm = i.unstable_getCurrentPriorityLevel,
    co = i.unstable_ImmediatePriority,
    Iu = i.unstable_UserBlockingPriority,
    Ei = i.unstable_NormalPriority,
    Tm = i.unstable_LowPriority,
    zu = i.unstable_IdlePriority,
    Mi = null,
    Vt = null;
  function km(e) {
    if (Vt && typeof Vt.onCommitFiberRoot == "function")
      try {
        Vt.onCommitFiberRoot(Mi, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Tt = Math.clz32 ? Math.clz32 : Em,
    Pm = Math.log,
    Cm = Math.LN2;
  function Em(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Pm(e) / Cm) | 0)) | 0;
  }
  var Ri = 64,
    Di = 4194304;
  function Er(e) {
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
  function Ai(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var s = 0,
      a = e.suspendedLanes,
      u = e.pingedLanes,
      h = r & 268435455;
    if (h !== 0) {
      var v = h & ~a;
      v !== 0 ? (s = Er(v)) : ((u &= h), u !== 0 && (s = Er(u)));
    } else (h = r & ~a), h !== 0 ? (s = Er(h)) : u !== 0 && (s = Er(u));
    if (s === 0) return 0;
    if (
      t !== 0 &&
      t !== s &&
      (t & a) === 0 &&
      ((a = s & -s), (u = t & -t), a >= u || (a === 16 && (u & 4194240) !== 0))
    )
      return t;
    if (((s & 4) !== 0 && (s |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= s; 0 < t; )
        (r = 31 - Tt(t)), (a = 1 << r), (s |= e[r]), (t &= ~a);
    return s;
  }
  function Mm(e, t) {
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
  function Rm(e, t) {
    for (
      var r = e.suspendedLanes,
        s = e.pingedLanes,
        a = e.expirationTimes,
        u = e.pendingLanes;
      0 < u;

    ) {
      var h = 31 - Tt(u),
        v = 1 << h,
        w = a[h];
      w === -1
        ? ((v & r) === 0 || (v & s) !== 0) && (a[h] = Mm(v, t))
        : w <= t && (e.expiredLanes |= v),
        (u &= ~v);
    }
  }
  function fo(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Ou() {
    var e = Ri;
    return (Ri <<= 1), (Ri & 4194240) === 0 && (Ri = 64), e;
  }
  function ho(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function Mr(e, t, r) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Tt(t)),
      (e[t] = r);
  }
  function Dm(e, t) {
    var r = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var a = 31 - Tt(r),
        u = 1 << a;
      (t[a] = 0), (s[a] = -1), (e[a] = -1), (r &= ~u);
    }
  }
  function po(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var s = 31 - Tt(r),
        a = 1 << s;
      (a & t) | (e[s] & t) && (e[s] |= t), (r &= ~a);
    }
  }
  var he = 0;
  function Bu(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var Uu,
    mo,
    Hu,
    Wu,
    $u,
    yo = !1,
    Vi = [],
    Gt = null,
    Qt = null,
    Zt = null,
    Rr = new Map(),
    Dr = new Map(),
    qt = [],
    Am =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Ku(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Gt = null;
        break;
      case "dragenter":
      case "dragleave":
        Qt = null;
        break;
      case "mouseover":
      case "mouseout":
        Zt = null;
        break;
      case "pointerover":
      case "pointerout":
        Rr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Dr.delete(t.pointerId);
    }
  }
  function Ar(e, t, r, s, a, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: s,
          nativeEvent: u,
          targetContainers: [a],
        }),
        t !== null && ((t = $r(t)), t !== null && mo(t)),
        e)
      : ((e.eventSystemFlags |= s),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function Vm(e, t, r, s, a) {
    switch (t) {
      case "focusin":
        return (Gt = Ar(Gt, e, t, r, s, a)), !0;
      case "dragenter":
        return (Qt = Ar(Qt, e, t, r, s, a)), !0;
      case "mouseover":
        return (Zt = Ar(Zt, e, t, r, s, a)), !0;
      case "pointerover":
        var u = a.pointerId;
        return Rr.set(u, Ar(Rr.get(u) || null, e, t, r, s, a)), !0;
      case "gotpointercapture":
        return (
          (u = a.pointerId), Dr.set(u, Ar(Dr.get(u) || null, e, t, r, s, a)), !0
        );
    }
    return !1;
  }
  function Xu(e) {
    var t = wn(e.target);
    if (t !== null) {
      var r = vn(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Vu(r)), t !== null)) {
            (e.blockedOn = t),
              $u(e.priority, function () {
                Hu(r);
              });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ni(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = vo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var s = new r.constructor(r.type, r);
        (io = s), r.target.dispatchEvent(s), (io = null);
      } else return (t = $r(r)), t !== null && mo(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function Yu(e, t, r) {
    Ni(e) && r.delete(t);
  }
  function Nm() {
    (yo = !1),
      Gt !== null && Ni(Gt) && (Gt = null),
      Qt !== null && Ni(Qt) && (Qt = null),
      Zt !== null && Ni(Zt) && (Zt = null),
      Rr.forEach(Yu),
      Dr.forEach(Yu);
  }
  function Vr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      yo ||
        ((yo = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, Nm)));
  }
  function Nr(e) {
    function t(a) {
      return Vr(a, e);
    }
    if (0 < Vi.length) {
      Vr(Vi[0], e);
      for (var r = 1; r < Vi.length; r++) {
        var s = Vi[r];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (
      Gt !== null && Vr(Gt, e),
        Qt !== null && Vr(Qt, e),
        Zt !== null && Vr(Zt, e),
        Rr.forEach(t),
        Dr.forEach(t),
        r = 0;
      r < qt.length;
      r++
    )
      (s = qt[r]), s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < qt.length && ((r = qt[0]), r.blockedOn === null); )
      Xu(r), r.blockedOn === null && qt.shift();
  }
  var Bn = Z.ReactCurrentBatchConfig,
    Li = !0;
  function Lm(e, t, r, s) {
    var a = he,
      u = Bn.transition;
    Bn.transition = null;
    try {
      (he = 1), go(e, t, r, s);
    } finally {
      (he = a), (Bn.transition = u);
    }
  }
  function _m(e, t, r, s) {
    var a = he,
      u = Bn.transition;
    Bn.transition = null;
    try {
      (he = 4), go(e, t, r, s);
    } finally {
      (he = a), (Bn.transition = u);
    }
  }
  function go(e, t, r, s) {
    if (Li) {
      var a = vo(e, t, r, s);
      if (a === null) jo(e, t, s, _i, r), Ku(e, s);
      else if (Vm(a, e, t, r, s)) s.stopPropagation();
      else if ((Ku(e, s), t & 4 && -1 < Am.indexOf(e))) {
        for (; a !== null; ) {
          var u = $r(a);
          if (
            (u !== null && Uu(u),
            (u = vo(e, t, r, s)),
            u === null && jo(e, t, s, _i, r),
            u === a)
          )
            break;
          a = u;
        }
        a !== null && s.stopPropagation();
      } else jo(e, t, s, null, r);
    }
  }
  var _i = null;
  function vo(e, t, r, s) {
    if (((_i = null), (e = so(s)), (e = wn(e)), e !== null))
      if (((t = vn(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Vu(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (_i = e), null;
  }
  function Gu(e) {
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
        switch (Sm()) {
          case co:
            return 1;
          case Iu:
            return 4;
          case Ei:
          case Tm:
            return 16;
          case zu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Jt = null,
    wo = null,
    ji = null;
  function Qu() {
    if (ji) return ji;
    var e,
      t = wo,
      r = t.length,
      s,
      a = "value" in Jt ? Jt.value : Jt.textContent,
      u = a.length;
    for (e = 0; e < r && t[e] === a[e]; e++);
    var h = r - e;
    for (s = 1; s <= h && t[r - s] === a[u - s]; s++);
    return (ji = a.slice(e, 1 < s ? 1 - s : void 0));
  }
  function Fi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ii() {
    return !0;
  }
  function Zu() {
    return !1;
  }
  function ut(e) {
    function t(r, s, a, u, h) {
      (this._reactName = r),
        (this._targetInst = a),
        (this.type = s),
        (this.nativeEvent = u),
        (this.target = h),
        (this.currentTarget = null);
      for (var v in e)
        e.hasOwnProperty(v) && ((r = e[v]), (this[v] = r ? r(u) : u[v]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Ii
          : Zu),
        (this.isPropagationStopped = Zu),
        this
      );
    }
    return (
      O(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = Ii));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = Ii));
        },
        persist: function () {},
        isPersistent: Ii,
      }),
      t
    );
  }
  var Un = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    xo = ut(Un),
    Lr = O({}, Un, { view: 0, detail: 0 }),
    jm = ut(Lr),
    So,
    To,
    _r,
    zi = O({}, Lr, {
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
      getModifierState: Po,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== _r &&
              (_r && e.type === "mousemove"
                ? ((So = e.screenX - _r.screenX), (To = e.screenY - _r.screenY))
                : (To = So = 0),
              (_r = e)),
            So);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : To;
      },
    }),
    qu = ut(zi),
    Fm = O({}, zi, { dataTransfer: 0 }),
    Im = ut(Fm),
    zm = O({}, Lr, { relatedTarget: 0 }),
    ko = ut(zm),
    Om = O({}, Un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Bm = ut(Om),
    Um = O({}, Un, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Hm = ut(Um),
    Wm = O({}, Un, { data: 0 }),
    Ju = ut(Wm),
    $m = {
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
      MozPrintableKey: "Unidentified",
    },
    Km = {
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
      224: "Meta",
    },
    Xm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Ym(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Xm[e])
      ? !!t[e]
      : !1;
  }
  function Po() {
    return Ym;
  }
  var Gm = O({}, Lr, {
      key: function (e) {
        if (e.key) {
          var t = $m[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Fi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Km[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Po,
      charCode: function (e) {
        return e.type === "keypress" ? Fi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Fi(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Qm = ut(Gm),
    Zm = O({}, zi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    bu = ut(Zm),
    qm = O({}, Lr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Po,
    }),
    Jm = ut(qm),
    bm = O({}, Un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ey = ut(bm),
    ty = O({}, zi, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    ny = ut(ty),
    ry = [9, 13, 27, 32],
    Co = p && "CompositionEvent" in window,
    jr = null;
  p && "documentMode" in document && (jr = document.documentMode);
  var iy = p && "TextEvent" in window && !jr,
    ec = p && (!Co || (jr && 8 < jr && 11 >= jr)),
    tc = " ",
    nc = !1;
  function rc(e, t) {
    switch (e) {
      case "keyup":
        return ry.indexOf(t.keyCode) !== -1;
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
  function ic(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Hn = !1;
  function sy(e, t) {
    switch (e) {
      case "compositionend":
        return ic(t);
      case "keypress":
        return t.which !== 32 ? null : ((nc = !0), tc);
      case "textInput":
        return (e = t.data), e === tc && nc ? null : e;
      default:
        return null;
    }
  }
  function oy(e, t) {
    if (Hn)
      return e === "compositionend" || (!Co && rc(e, t))
        ? ((e = Qu()), (ji = wo = Jt = null), (Hn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ec && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ay = {
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
    week: !0,
  };
  function sc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ay[e.type] : t === "textarea";
  }
  function oc(e, t, r, s) {
    Eu(s),
      (t = Wi(t, "onChange")),
      0 < t.length &&
        ((r = new xo("onChange", "change", null, r, s)),
        e.push({ event: r, listeners: t }));
  }
  var Fr = null,
    Ir = null;
  function ly(e) {
    Pc(e, 0);
  }
  function Oi(e) {
    var t = Yn(e);
    if (pu(t)) return e;
  }
  function uy(e, t) {
    if (e === "change") return t;
  }
  var ac = !1;
  if (p) {
    var Eo;
    if (p) {
      var Mo = "oninput" in document;
      if (!Mo) {
        var lc = document.createElement("div");
        lc.setAttribute("oninput", "return;"),
          (Mo = typeof lc.oninput == "function");
      }
      Eo = Mo;
    } else Eo = !1;
    ac = Eo && (!document.documentMode || 9 < document.documentMode);
  }
  function uc() {
    Fr && (Fr.detachEvent("onpropertychange", cc), (Ir = Fr = null));
  }
  function cc(e) {
    if (e.propertyName === "value" && Oi(Ir)) {
      var t = [];
      oc(t, Ir, e, so(e)), Au(ly, t);
    }
  }
  function cy(e, t, r) {
    e === "focusin"
      ? (uc(), (Fr = t), (Ir = r), Fr.attachEvent("onpropertychange", cc))
      : e === "focusout" && uc();
  }
  function fy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Oi(Ir);
  }
  function dy(e, t) {
    if (e === "click") return Oi(t);
  }
  function hy(e, t) {
    if (e === "input" || e === "change") return Oi(t);
  }
  function py(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var kt = typeof Object.is == "function" ? Object.is : py;
  function zr(e, t) {
    if (kt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var r = Object.keys(e),
      s = Object.keys(t);
    if (r.length !== s.length) return !1;
    for (s = 0; s < r.length; s++) {
      var a = r[s];
      if (!m.call(t, a) || !kt(e[a], t[a])) return !1;
    }
    return !0;
  }
  function fc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function dc(e, t) {
    var r = fc(e);
    e = 0;
    for (var s; r; ) {
      if (r.nodeType === 3) {
        if (((s = e + r.textContent.length), e <= t && s >= t))
          return { node: r, offset: t - e };
        e = s;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = fc(r);
    }
  }
  function hc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? hc(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function pc() {
    for (var e = window, t = Ti(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Ti(e.document);
    }
    return t;
  }
  function Ro(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function my(e) {
    var t = pc(),
      r = e.focusedElem,
      s = e.selectionRange;
    if (
      t !== r &&
      r &&
      r.ownerDocument &&
      hc(r.ownerDocument.documentElement, r)
    ) {
      if (s !== null && Ro(r)) {
        if (
          ((t = s.start),
          (e = s.end),
          e === void 0 && (e = t),
          "selectionStart" in r)
        )
          (r.selectionStart = t),
            (r.selectionEnd = Math.min(e, r.value.length));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var a = r.textContent.length,
            u = Math.min(s.start, a);
          (s = s.end === void 0 ? u : Math.min(s.end, a)),
            !e.extend && u > s && ((a = s), (s = u), (u = a)),
            (a = dc(r, u));
          var h = dc(r, s);
          a &&
            h &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== a.node ||
              e.anchorOffset !== a.offset ||
              e.focusNode !== h.node ||
              e.focusOffset !== h.offset) &&
            ((t = t.createRange()),
            t.setStart(a.node, a.offset),
            e.removeAllRanges(),
            u > s
              ? (e.addRange(t), e.extend(h.node, h.offset))
              : (t.setEnd(h.node, h.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
        (e = t[r]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var yy = p && "documentMode" in document && 11 >= document.documentMode,
    Wn = null,
    Do = null,
    Or = null,
    Ao = !1;
  function mc(e, t, r) {
    var s =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Ao ||
      Wn == null ||
      Wn !== Ti(s) ||
      ((s = Wn),
      "selectionStart" in s && Ro(s)
        ? (s = { start: s.selectionStart, end: s.selectionEnd })
        : ((s = (
            (s.ownerDocument && s.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (s = {
            anchorNode: s.anchorNode,
            anchorOffset: s.anchorOffset,
            focusNode: s.focusNode,
            focusOffset: s.focusOffset,
          })),
      (Or && zr(Or, s)) ||
        ((Or = s),
        (s = Wi(Do, "onSelect")),
        0 < s.length &&
          ((t = new xo("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: s }),
          (t.target = Wn))));
  }
  function Bi(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var $n = {
      animationend: Bi("Animation", "AnimationEnd"),
      animationiteration: Bi("Animation", "AnimationIteration"),
      animationstart: Bi("Animation", "AnimationStart"),
      transitionend: Bi("Transition", "TransitionEnd"),
    },
    Vo = {},
    yc = {};
  p &&
    ((yc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete $n.animationend.animation,
      delete $n.animationiteration.animation,
      delete $n.animationstart.animation),
    "TransitionEvent" in window || delete $n.transitionend.transition);
  function Ui(e) {
    if (Vo[e]) return Vo[e];
    if (!$n[e]) return e;
    var t = $n[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in yc) return (Vo[e] = t[r]);
    return e;
  }
  var gc = Ui("animationend"),
    vc = Ui("animationiteration"),
    wc = Ui("animationstart"),
    xc = Ui("transitionend"),
    Sc = new Map(),
    Tc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function bt(e, t) {
    Sc.set(e, t), d(t, [e]);
  }
  for (var No = 0; No < Tc.length; No++) {
    var Lo = Tc[No],
      gy = Lo.toLowerCase(),
      vy = Lo[0].toUpperCase() + Lo.slice(1);
    bt(gy, "on" + vy);
  }
  bt(gc, "onAnimationEnd"),
    bt(vc, "onAnimationIteration"),
    bt(wc, "onAnimationStart"),
    bt("dblclick", "onDoubleClick"),
    bt("focusin", "onFocus"),
    bt("focusout", "onBlur"),
    bt(xc, "onTransitionEnd"),
    f("onMouseEnter", ["mouseout", "mouseover"]),
    f("onMouseLeave", ["mouseout", "mouseover"]),
    f("onPointerEnter", ["pointerout", "pointerover"]),
    f("onPointerLeave", ["pointerout", "pointerover"]),
    d(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    d(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    d(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    d(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    d(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Br =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    wy = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Br)
    );
  function kc(e, t, r) {
    var s = e.type || "unknown-event";
    (e.currentTarget = r), gm(s, t, void 0, e), (e.currentTarget = null);
  }
  function Pc(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var s = e[r],
        a = s.event;
      s = s.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var h = s.length - 1; 0 <= h; h--) {
            var v = s[h],
              w = v.instance,
              E = v.currentTarget;
            if (((v = v.listener), w !== u && a.isPropagationStopped()))
              break e;
            kc(a, v, E), (u = w);
          }
        else
          for (h = 0; h < s.length; h++) {
            if (
              ((v = s[h]),
              (w = v.instance),
              (E = v.currentTarget),
              (v = v.listener),
              w !== u && a.isPropagationStopped())
            )
              break e;
            kc(a, v, E), (u = w);
          }
      }
    }
    if (Ci) throw ((e = uo), (Ci = !1), (uo = null), e);
  }
  function ve(e, t) {
    var r = t[Uo];
    r === void 0 && (r = t[Uo] = new Set());
    var s = e + "__bubble";
    r.has(s) || (Cc(t, e, 2, !1), r.add(s));
  }
  function _o(e, t, r) {
    var s = 0;
    t && (s |= 4), Cc(r, e, s, t);
  }
  var Hi = "_reactListening" + Math.random().toString(36).slice(2);
  function Ur(e) {
    if (!e[Hi]) {
      (e[Hi] = !0),
        l.forEach(function (r) {
          r !== "selectionchange" && (wy.has(r) || _o(r, !1, e), _o(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Hi] || ((t[Hi] = !0), _o("selectionchange", !1, t));
    }
  }
  function Cc(e, t, r, s) {
    switch (Gu(t)) {
      case 1:
        var a = Lm;
        break;
      case 4:
        a = _m;
        break;
      default:
        a = go;
    }
    (r = a.bind(null, t, r, e)),
      (a = void 0),
      !lo ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (a = !0),
      s
        ? a !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: a })
          : e.addEventListener(t, r, !0)
        : a !== void 0
        ? e.addEventListener(t, r, { passive: a })
        : e.addEventListener(t, r, !1);
  }
  function jo(e, t, r, s, a) {
    var u = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null)
      e: for (;;) {
        if (s === null) return;
        var h = s.tag;
        if (h === 3 || h === 4) {
          var v = s.stateNode.containerInfo;
          if (v === a || (v.nodeType === 8 && v.parentNode === a)) break;
          if (h === 4)
            for (h = s.return; h !== null; ) {
              var w = h.tag;
              if (
                (w === 3 || w === 4) &&
                ((w = h.stateNode.containerInfo),
                w === a || (w.nodeType === 8 && w.parentNode === a))
              )
                return;
              h = h.return;
            }
          for (; v !== null; ) {
            if (((h = wn(v)), h === null)) return;
            if (((w = h.tag), w === 5 || w === 6)) {
              s = u = h;
              continue e;
            }
            v = v.parentNode;
          }
        }
        s = s.return;
      }
    Au(function () {
      var E = u,
        A = so(r),
        V = [];
      e: {
        var R = Sc.get(e);
        if (R !== void 0) {
          var B = xo,
            $ = e;
          switch (e) {
            case "keypress":
              if (Fi(r) === 0) break e;
            case "keydown":
            case "keyup":
              B = Qm;
              break;
            case "focusin":
              ($ = "focus"), (B = ko);
              break;
            case "focusout":
              ($ = "blur"), (B = ko);
              break;
            case "beforeblur":
            case "afterblur":
              B = ko;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              B = qu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              B = Im;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              B = Jm;
              break;
            case gc:
            case vc:
            case wc:
              B = Bm;
              break;
            case xc:
              B = ey;
              break;
            case "scroll":
              B = jm;
              break;
            case "wheel":
              B = ny;
              break;
            case "copy":
            case "cut":
            case "paste":
              B = Hm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              B = bu;
          }
          var K = (t & 4) !== 0,
            De = !K && e === "scroll",
            P = K ? (R !== null ? R + "Capture" : null) : R;
          K = [];
          for (var S = E, C; S !== null; ) {
            C = S;
            var _ = C.stateNode;
            if (
              (C.tag === 5 &&
                _ !== null &&
                ((C = _),
                P !== null &&
                  ((_ = kr(S, P)), _ != null && K.push(Hr(S, _, C)))),
              De)
            )
              break;
            S = S.return;
          }
          0 < K.length &&
            ((R = new B(R, $, null, r, A)), V.push({ event: R, listeners: K }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((R = e === "mouseover" || e === "pointerover"),
            (B = e === "mouseout" || e === "pointerout"),
            R &&
              r !== io &&
              ($ = r.relatedTarget || r.fromElement) &&
              (wn($) || $[zt]))
          )
            break e;
          if (
            (B || R) &&
            ((R =
              A.window === A
                ? A
                : (R = A.ownerDocument)
                ? R.defaultView || R.parentWindow
                : window),
            B
              ? (($ = r.relatedTarget || r.toElement),
                (B = E),
                ($ = $ ? wn($) : null),
                $ !== null &&
                  ((De = vn($)), $ !== De || ($.tag !== 5 && $.tag !== 6)) &&
                  ($ = null))
              : ((B = null), ($ = E)),
            B !== $)
          ) {
            if (
              ((K = qu),
              (_ = "onMouseLeave"),
              (P = "onMouseEnter"),
              (S = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((K = bu),
                (_ = "onPointerLeave"),
                (P = "onPointerEnter"),
                (S = "pointer")),
              (De = B == null ? R : Yn(B)),
              (C = $ == null ? R : Yn($)),
              (R = new K(_, S + "leave", B, r, A)),
              (R.target = De),
              (R.relatedTarget = C),
              (_ = null),
              wn(A) === E &&
                ((K = new K(P, S + "enter", $, r, A)),
                (K.target = C),
                (K.relatedTarget = De),
                (_ = K)),
              (De = _),
              B && $)
            )
              t: {
                for (K = B, P = $, S = 0, C = K; C; C = Kn(C)) S++;
                for (C = 0, _ = P; _; _ = Kn(_)) C++;
                for (; 0 < S - C; ) (K = Kn(K)), S--;
                for (; 0 < C - S; ) (P = Kn(P)), C--;
                for (; S--; ) {
                  if (K === P || (P !== null && K === P.alternate)) break t;
                  (K = Kn(K)), (P = Kn(P));
                }
                K = null;
              }
            else K = null;
            B !== null && Ec(V, R, B, K, !1),
              $ !== null && De !== null && Ec(V, De, $, K, !0);
          }
        }
        e: {
          if (
            ((R = E ? Yn(E) : window),
            (B = R.nodeName && R.nodeName.toLowerCase()),
            B === "select" || (B === "input" && R.type === "file"))
          )
            var Y = uy;
          else if (sc(R))
            if (ac) Y = hy;
            else {
              Y = fy;
              var J = cy;
            }
          else
            (B = R.nodeName) &&
              B.toLowerCase() === "input" &&
              (R.type === "checkbox" || R.type === "radio") &&
              (Y = dy);
          if (Y && (Y = Y(e, E))) {
            oc(V, Y, r, A);
            break e;
          }
          J && J(e, R, E),
            e === "focusout" &&
              (J = R._wrapperState) &&
              J.controlled &&
              R.type === "number" &&
              bs(R, "number", R.value);
        }
        switch (((J = E ? Yn(E) : window), e)) {
          case "focusin":
            (sc(J) || J.contentEditable === "true") &&
              ((Wn = J), (Do = E), (Or = null));
            break;
          case "focusout":
            Or = Do = Wn = null;
            break;
          case "mousedown":
            Ao = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Ao = !1), mc(V, r, A);
            break;
          case "selectionchange":
            if (yy) break;
          case "keydown":
          case "keyup":
            mc(V, r, A);
        }
        var b;
        if (Co)
          e: {
            switch (e) {
              case "compositionstart":
                var ne = "onCompositionStart";
                break e;
              case "compositionend":
                ne = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ne = "onCompositionUpdate";
                break e;
            }
            ne = void 0;
          }
        else
          Hn
            ? rc(e, r) && (ne = "onCompositionEnd")
            : e === "keydown" &&
              r.keyCode === 229 &&
              (ne = "onCompositionStart");
        ne &&
          (ec &&
            r.locale !== "ko" &&
            (Hn || ne !== "onCompositionStart"
              ? ne === "onCompositionEnd" && Hn && (b = Qu())
              : ((Jt = A),
                (wo = "value" in Jt ? Jt.value : Jt.textContent),
                (Hn = !0))),
          (J = Wi(E, ne)),
          0 < J.length &&
            ((ne = new Ju(ne, e, null, r, A)),
            V.push({ event: ne, listeners: J }),
            b ? (ne.data = b) : ((b = ic(r)), b !== null && (ne.data = b)))),
          (b = iy ? sy(e, r) : oy(e, r)) &&
            ((E = Wi(E, "onBeforeInput")),
            0 < E.length &&
              ((A = new Ju("onBeforeInput", "beforeinput", null, r, A)),
              V.push({ event: A, listeners: E }),
              (A.data = b)));
      }
      Pc(V, t);
    });
  }
  function Hr(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Wi(e, t) {
    for (var r = t + "Capture", s = []; e !== null; ) {
      var a = e,
        u = a.stateNode;
      a.tag === 5 &&
        u !== null &&
        ((a = u),
        (u = kr(e, r)),
        u != null && s.unshift(Hr(e, u, a)),
        (u = kr(e, t)),
        u != null && s.push(Hr(e, u, a))),
        (e = e.return);
    }
    return s;
  }
  function Kn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ec(e, t, r, s, a) {
    for (var u = t._reactName, h = []; r !== null && r !== s; ) {
      var v = r,
        w = v.alternate,
        E = v.stateNode;
      if (w !== null && w === s) break;
      v.tag === 5 &&
        E !== null &&
        ((v = E),
        a
          ? ((w = kr(r, u)), w != null && h.unshift(Hr(r, w, v)))
          : a || ((w = kr(r, u)), w != null && h.push(Hr(r, w, v)))),
        (r = r.return);
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var xy = /\r\n?/g,
    Sy = /\u0000|\uFFFD/g;
  function Mc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        xy,
        `
`
      )
      .replace(Sy, "");
  }
  function $i(e, t, r) {
    if (((t = Mc(t)), Mc(e) !== t && r)) throw Error(o(425));
  }
  function Ki() {}
  var Fo = null,
    Io = null;
  function zo(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Oo = typeof setTimeout == "function" ? setTimeout : void 0,
    Ty = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Rc = typeof Promise == "function" ? Promise : void 0,
    ky =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Rc < "u"
        ? function (e) {
            return Rc.resolve(null).then(e).catch(Py);
          }
        : Oo;
  function Py(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Bo(e, t) {
    var r = t,
      s = 0;
    do {
      var a = r.nextSibling;
      if ((e.removeChild(r), a && a.nodeType === 8))
        if (((r = a.data), r === "/$")) {
          if (s === 0) {
            e.removeChild(a), Nr(t);
            return;
          }
          s--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || s++;
      r = a;
    } while (r);
    Nr(t);
  }
  function en(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Dc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0) return e;
          t--;
        } else r === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Xn = Math.random().toString(36).slice(2),
    Nt = "__reactFiber$" + Xn,
    Wr = "__reactProps$" + Xn,
    zt = "__reactContainer$" + Xn,
    Uo = "__reactEvents$" + Xn,
    Cy = "__reactListeners$" + Xn,
    Ey = "__reactHandles$" + Xn;
  function wn(e) {
    var t = e[Nt];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[zt] || r[Nt])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = Dc(e); e !== null; ) {
            if ((r = e[Nt])) return r;
            e = Dc(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function $r(e) {
    return (
      (e = e[Nt] || e[zt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Yn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Xi(e) {
    return e[Wr] || null;
  }
  var Ho = [],
    Gn = -1;
  function tn(e) {
    return { current: e };
  }
  function we(e) {
    0 > Gn || ((e.current = Ho[Gn]), (Ho[Gn] = null), Gn--);
  }
  function ye(e, t) {
    Gn++, (Ho[Gn] = e.current), (e.current = t);
  }
  var nn = {},
    He = tn(nn),
    be = tn(!1),
    xn = nn;
  function Qn(e, t) {
    var r = e.type.contextTypes;
    if (!r) return nn;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t)
      return s.__reactInternalMemoizedMaskedChildContext;
    var a = {},
      u;
    for (u in r) a[u] = t[u];
    return (
      s &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      a
    );
  }
  function et(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Yi() {
    we(be), we(He);
  }
  function Ac(e, t, r) {
    if (He.current !== nn) throw Error(o(168));
    ye(He, t), ye(be, r);
  }
  function Vc(e, t, r) {
    var s = e.stateNode;
    if (((t = t.childContextTypes), typeof s.getChildContext != "function"))
      return r;
    s = s.getChildContext();
    for (var a in s) if (!(a in t)) throw Error(o(108, me(e) || "Unknown", a));
    return O({}, r, s);
  }
  function Gi(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        nn),
      (xn = He.current),
      ye(He, e),
      ye(be, be.current),
      !0
    );
  }
  function Nc(e, t, r) {
    var s = e.stateNode;
    if (!s) throw Error(o(169));
    r
      ? ((e = Vc(e, t, xn)),
        (s.__reactInternalMemoizedMergedChildContext = e),
        we(be),
        we(He),
        ye(He, e))
      : we(be),
      ye(be, r);
  }
  var Ot = null,
    Qi = !1,
    Wo = !1;
  function Lc(e) {
    Ot === null ? (Ot = [e]) : Ot.push(e);
  }
  function My(e) {
    (Qi = !0), Lc(e);
  }
  function rn() {
    if (!Wo && Ot !== null) {
      Wo = !0;
      var e = 0,
        t = he;
      try {
        var r = Ot;
        for (he = 1; e < r.length; e++) {
          var s = r[e];
          do s = s(!0);
          while (s !== null);
        }
        (Ot = null), (Qi = !1);
      } catch (a) {
        throw (Ot !== null && (Ot = Ot.slice(e + 1)), ju(co, rn), a);
      } finally {
        (he = t), (Wo = !1);
      }
    }
    return null;
  }
  var Zn = [],
    qn = 0,
    Zi = null,
    qi = 0,
    ht = [],
    pt = 0,
    Sn = null,
    Bt = 1,
    Ut = "";
  function Tn(e, t) {
    (Zn[qn++] = qi), (Zn[qn++] = Zi), (Zi = e), (qi = t);
  }
  function _c(e, t, r) {
    (ht[pt++] = Bt), (ht[pt++] = Ut), (ht[pt++] = Sn), (Sn = e);
    var s = Bt;
    e = Ut;
    var a = 32 - Tt(s) - 1;
    (s &= ~(1 << a)), (r += 1);
    var u = 32 - Tt(t) + a;
    if (30 < u) {
      var h = a - (a % 5);
      (u = (s & ((1 << h) - 1)).toString(32)),
        (s >>= h),
        (a -= h),
        (Bt = (1 << (32 - Tt(t) + a)) | (r << a) | s),
        (Ut = u + e);
    } else (Bt = (1 << u) | (r << a) | s), (Ut = e);
  }
  function $o(e) {
    e.return !== null && (Tn(e, 1), _c(e, 1, 0));
  }
  function Ko(e) {
    for (; e === Zi; )
      (Zi = Zn[--qn]), (Zn[qn] = null), (qi = Zn[--qn]), (Zn[qn] = null);
    for (; e === Sn; )
      (Sn = ht[--pt]),
        (ht[pt] = null),
        (Ut = ht[--pt]),
        (ht[pt] = null),
        (Bt = ht[--pt]),
        (ht[pt] = null);
  }
  var ct = null,
    ft = null,
    Se = !1,
    Pt = null;
  function jc(e, t) {
    var r = vt(5, null, null, 0);
    (r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
  }
  function Fc(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t =
            t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (ct = e), (ft = en(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (ct = e), (ft = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = Sn !== null ? { id: Bt, overflow: Ut } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824,
              }),
              (r = vt(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (ct = e),
              (ft = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Xo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Yo(e) {
    if (Se) {
      var t = ft;
      if (t) {
        var r = t;
        if (!Fc(e, t)) {
          if (Xo(e)) throw Error(o(418));
          t = en(r.nextSibling);
          var s = ct;
          t && Fc(e, t)
            ? jc(s, r)
            : ((e.flags = (e.flags & -4097) | 2), (Se = !1), (ct = e));
        }
      } else {
        if (Xo(e)) throw Error(o(418));
        (e.flags = (e.flags & -4097) | 2), (Se = !1), (ct = e);
      }
    }
  }
  function Ic(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    ct = e;
  }
  function Ji(e) {
    if (e !== ct) return !1;
    if (!Se) return Ic(e), (Se = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !zo(e.type, e.memoizedProps))),
      t && (t = ft))
    ) {
      if (Xo(e)) throw (zc(), Error(o(418)));
      for (; t; ) jc(e, t), (t = en(t.nextSibling));
    }
    if ((Ic(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                ft = en(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        ft = null;
      }
    } else ft = ct ? en(e.stateNode.nextSibling) : null;
    return !0;
  }
  function zc() {
    for (var e = ft; e; ) e = en(e.nextSibling);
  }
  function Jn() {
    (ft = ct = null), (Se = !1);
  }
  function Go(e) {
    Pt === null ? (Pt = [e]) : Pt.push(e);
  }
  var Ry = Z.ReactCurrentBatchConfig;
  function Kr(e, t, r) {
    if (
      ((e = r.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(o(309));
          var s = r.stateNode;
        }
        if (!s) throw Error(o(147, e));
        var a = s,
          u = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === u
          ? t.ref
          : ((t = function (h) {
              var v = a.refs;
              h === null ? delete v[u] : (v[u] = h);
            }),
            (t._stringRef = u),
            t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!r._owner) throw Error(o(290, e));
    }
    return e;
  }
  function bi(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        o(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Oc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Bc(e) {
    function t(P, S) {
      if (e) {
        var C = P.deletions;
        C === null ? ((P.deletions = [S]), (P.flags |= 16)) : C.push(S);
      }
    }
    function r(P, S) {
      if (!e) return null;
      for (; S !== null; ) t(P, S), (S = S.sibling);
      return null;
    }
    function s(P, S) {
      for (P = new Map(); S !== null; )
        S.key !== null ? P.set(S.key, S) : P.set(S.index, S), (S = S.sibling);
      return P;
    }
    function a(P, S) {
      return (P = dn(P, S)), (P.index = 0), (P.sibling = null), P;
    }
    function u(P, S, C) {
      return (
        (P.index = C),
        e
          ? ((C = P.alternate),
            C !== null
              ? ((C = C.index), C < S ? ((P.flags |= 2), S) : C)
              : ((P.flags |= 2), S))
          : ((P.flags |= 1048576), S)
      );
    }
    function h(P) {
      return e && P.alternate === null && (P.flags |= 2), P;
    }
    function v(P, S, C, _) {
      return S === null || S.tag !== 6
        ? ((S = Oa(C, P.mode, _)), (S.return = P), S)
        : ((S = a(S, C)), (S.return = P), S);
    }
    function w(P, S, C, _) {
      var Y = C.type;
      return Y === ee
        ? A(P, S, C.props.children, _, C.key)
        : S !== null &&
          (S.elementType === Y ||
            (typeof Y == "object" &&
              Y !== null &&
              Y.$$typeof === Ge &&
              Oc(Y) === S.type))
        ? ((_ = a(S, C.props)), (_.ref = Kr(P, S, C)), (_.return = P), _)
        : ((_ = ks(C.type, C.key, C.props, null, P.mode, _)),
          (_.ref = Kr(P, S, C)),
          (_.return = P),
          _);
    }
    function E(P, S, C, _) {
      return S === null ||
        S.tag !== 4 ||
        S.stateNode.containerInfo !== C.containerInfo ||
        S.stateNode.implementation !== C.implementation
        ? ((S = Ba(C, P.mode, _)), (S.return = P), S)
        : ((S = a(S, C.children || [])), (S.return = P), S);
    }
    function A(P, S, C, _, Y) {
      return S === null || S.tag !== 7
        ? ((S = An(C, P.mode, _, Y)), (S.return = P), S)
        : ((S = a(S, C)), (S.return = P), S);
    }
    function V(P, S, C) {
      if ((typeof S == "string" && S !== "") || typeof S == "number")
        return (S = Oa("" + S, P.mode, C)), (S.return = P), S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case X:
            return (
              (C = ks(S.type, S.key, S.props, null, P.mode, C)),
              (C.ref = Kr(P, null, S)),
              (C.return = P),
              C
            );
          case q:
            return (S = Ba(S, P.mode, C)), (S.return = P), S;
          case Ge:
            var _ = S._init;
            return V(P, _(S._payload), C);
        }
        if (xr(S) || G(S))
          return (S = An(S, P.mode, C, null)), (S.return = P), S;
        bi(P, S);
      }
      return null;
    }
    function R(P, S, C, _) {
      var Y = S !== null ? S.key : null;
      if ((typeof C == "string" && C !== "") || typeof C == "number")
        return Y !== null ? null : v(P, S, "" + C, _);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case X:
            return C.key === Y ? w(P, S, C, _) : null;
          case q:
            return C.key === Y ? E(P, S, C, _) : null;
          case Ge:
            return (Y = C._init), R(P, S, Y(C._payload), _);
        }
        if (xr(C) || G(C)) return Y !== null ? null : A(P, S, C, _, null);
        bi(P, C);
      }
      return null;
    }
    function B(P, S, C, _, Y) {
      if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
        return (P = P.get(C) || null), v(S, P, "" + _, Y);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case X:
            return (
              (P = P.get(_.key === null ? C : _.key) || null), w(S, P, _, Y)
            );
          case q:
            return (
              (P = P.get(_.key === null ? C : _.key) || null), E(S, P, _, Y)
            );
          case Ge:
            var J = _._init;
            return B(P, S, C, J(_._payload), Y);
        }
        if (xr(_) || G(_)) return (P = P.get(C) || null), A(S, P, _, Y, null);
        bi(S, _);
      }
      return null;
    }
    function $(P, S, C, _) {
      for (
        var Y = null, J = null, b = S, ne = (S = 0), Ie = null;
        b !== null && ne < C.length;
        ne++
      ) {
        b.index > ne ? ((Ie = b), (b = null)) : (Ie = b.sibling);
        var fe = R(P, b, C[ne], _);
        if (fe === null) {
          b === null && (b = Ie);
          break;
        }
        e && b && fe.alternate === null && t(P, b),
          (S = u(fe, S, ne)),
          J === null ? (Y = fe) : (J.sibling = fe),
          (J = fe),
          (b = Ie);
      }
      if (ne === C.length) return r(P, b), Se && Tn(P, ne), Y;
      if (b === null) {
        for (; ne < C.length; ne++)
          (b = V(P, C[ne], _)),
            b !== null &&
              ((S = u(b, S, ne)),
              J === null ? (Y = b) : (J.sibling = b),
              (J = b));
        return Se && Tn(P, ne), Y;
      }
      for (b = s(P, b); ne < C.length; ne++)
        (Ie = B(b, P, ne, C[ne], _)),
          Ie !== null &&
            (e &&
              Ie.alternate !== null &&
              b.delete(Ie.key === null ? ne : Ie.key),
            (S = u(Ie, S, ne)),
            J === null ? (Y = Ie) : (J.sibling = Ie),
            (J = Ie));
      return (
        e &&
          b.forEach(function (hn) {
            return t(P, hn);
          }),
        Se && Tn(P, ne),
        Y
      );
    }
    function K(P, S, C, _) {
      var Y = G(C);
      if (typeof Y != "function") throw Error(o(150));
      if (((C = Y.call(C)), C == null)) throw Error(o(151));
      for (
        var J = (Y = null), b = S, ne = (S = 0), Ie = null, fe = C.next();
        b !== null && !fe.done;
        ne++, fe = C.next()
      ) {
        b.index > ne ? ((Ie = b), (b = null)) : (Ie = b.sibling);
        var hn = R(P, b, fe.value, _);
        if (hn === null) {
          b === null && (b = Ie);
          break;
        }
        e && b && hn.alternate === null && t(P, b),
          (S = u(hn, S, ne)),
          J === null ? (Y = hn) : (J.sibling = hn),
          (J = hn),
          (b = Ie);
      }
      if (fe.done) return r(P, b), Se && Tn(P, ne), Y;
      if (b === null) {
        for (; !fe.done; ne++, fe = C.next())
          (fe = V(P, fe.value, _)),
            fe !== null &&
              ((S = u(fe, S, ne)),
              J === null ? (Y = fe) : (J.sibling = fe),
              (J = fe));
        return Se && Tn(P, ne), Y;
      }
      for (b = s(P, b); !fe.done; ne++, fe = C.next())
        (fe = B(b, P, ne, fe.value, _)),
          fe !== null &&
            (e &&
              fe.alternate !== null &&
              b.delete(fe.key === null ? ne : fe.key),
            (S = u(fe, S, ne)),
            J === null ? (Y = fe) : (J.sibling = fe),
            (J = fe));
      return (
        e &&
          b.forEach(function (ag) {
            return t(P, ag);
          }),
        Se && Tn(P, ne),
        Y
      );
    }
    function De(P, S, C, _) {
      if (
        (typeof C == "object" &&
          C !== null &&
          C.type === ee &&
          C.key === null &&
          (C = C.props.children),
        typeof C == "object" && C !== null)
      ) {
        switch (C.$$typeof) {
          case X:
            e: {
              for (var Y = C.key, J = S; J !== null; ) {
                if (J.key === Y) {
                  if (((Y = C.type), Y === ee)) {
                    if (J.tag === 7) {
                      r(P, J.sibling),
                        (S = a(J, C.props.children)),
                        (S.return = P),
                        (P = S);
                      break e;
                    }
                  } else if (
                    J.elementType === Y ||
                    (typeof Y == "object" &&
                      Y !== null &&
                      Y.$$typeof === Ge &&
                      Oc(Y) === J.type)
                  ) {
                    r(P, J.sibling),
                      (S = a(J, C.props)),
                      (S.ref = Kr(P, J, C)),
                      (S.return = P),
                      (P = S);
                    break e;
                  }
                  r(P, J);
                  break;
                } else t(P, J);
                J = J.sibling;
              }
              C.type === ee
                ? ((S = An(C.props.children, P.mode, _, C.key)),
                  (S.return = P),
                  (P = S))
                : ((_ = ks(C.type, C.key, C.props, null, P.mode, _)),
                  (_.ref = Kr(P, S, C)),
                  (_.return = P),
                  (P = _));
            }
            return h(P);
          case q:
            e: {
              for (J = C.key; S !== null; ) {
                if (S.key === J)
                  if (
                    S.tag === 4 &&
                    S.stateNode.containerInfo === C.containerInfo &&
                    S.stateNode.implementation === C.implementation
                  ) {
                    r(P, S.sibling),
                      (S = a(S, C.children || [])),
                      (S.return = P),
                      (P = S);
                    break e;
                  } else {
                    r(P, S);
                    break;
                  }
                else t(P, S);
                S = S.sibling;
              }
              (S = Ba(C, P.mode, _)), (S.return = P), (P = S);
            }
            return h(P);
          case Ge:
            return (J = C._init), De(P, S, J(C._payload), _);
        }
        if (xr(C)) return $(P, S, C, _);
        if (G(C)) return K(P, S, C, _);
        bi(P, C);
      }
      return (typeof C == "string" && C !== "") || typeof C == "number"
        ? ((C = "" + C),
          S !== null && S.tag === 6
            ? (r(P, S.sibling), (S = a(S, C)), (S.return = P), (P = S))
            : (r(P, S), (S = Oa(C, P.mode, _)), (S.return = P), (P = S)),
          h(P))
        : r(P, S);
    }
    return De;
  }
  var bn = Bc(!0),
    Uc = Bc(!1),
    es = tn(null),
    ts = null,
    er = null,
    Qo = null;
  function Zo() {
    Qo = er = ts = null;
  }
  function qo(e) {
    var t = es.current;
    we(es), (e._currentValue = t);
  }
  function Jo(e, t, r) {
    for (; e !== null; ) {
      var s = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), s !== null && (s.childLanes |= t))
          : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function tr(e, t) {
    (ts = e),
      (Qo = er = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (tt = !0), (e.firstContext = null));
  }
  function mt(e) {
    var t = e._currentValue;
    if (Qo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), er === null)) {
        if (ts === null) throw Error(o(308));
        (er = e), (ts.dependencies = { lanes: 0, firstContext: e });
      } else er = er.next = e;
    return t;
  }
  var kn = null;
  function bo(e) {
    kn === null ? (kn = [e]) : kn.push(e);
  }
  function Hc(e, t, r, s) {
    var a = t.interleaved;
    return (
      a === null ? ((r.next = r), bo(t)) : ((r.next = a.next), (a.next = r)),
      (t.interleaved = r),
      Ht(e, s)
    );
  }
  function Ht(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return);
    return r.tag === 3 ? r.stateNode : null;
  }
  var sn = !1;
  function ea(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Wc(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Wt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function on(e, t, r) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (((s = s.shared), (le & 2) !== 0)) {
      var a = s.pending;
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (s.pending = t),
        Ht(e, r)
      );
    }
    return (
      (a = s.interleaved),
      a === null ? ((t.next = t), bo(s)) : ((t.next = a.next), (a.next = t)),
      (s.interleaved = t),
      Ht(e, r)
    );
  }
  function ns(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
    ) {
      var s = t.lanes;
      (s &= e.pendingLanes), (r |= s), (t.lanes = r), po(e, r);
    }
  }
  function $c(e, t) {
    var r = e.updateQueue,
      s = e.alternate;
    if (s !== null && ((s = s.updateQueue), r === s)) {
      var a = null,
        u = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var h = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          u === null ? (a = u = h) : (u = u.next = h), (r = r.next);
        } while (r !== null);
        u === null ? (a = u = t) : (u = u.next = t);
      } else a = u = t;
      (r = {
        baseState: s.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: u,
        shared: s.shared,
        effects: s.effects,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t);
  }
  function rs(e, t, r, s) {
    var a = e.updateQueue;
    sn = !1;
    var u = a.firstBaseUpdate,
      h = a.lastBaseUpdate,
      v = a.shared.pending;
    if (v !== null) {
      a.shared.pending = null;
      var w = v,
        E = w.next;
      (w.next = null), h === null ? (u = E) : (h.next = E), (h = w);
      var A = e.alternate;
      A !== null &&
        ((A = A.updateQueue),
        (v = A.lastBaseUpdate),
        v !== h &&
          (v === null ? (A.firstBaseUpdate = E) : (v.next = E),
          (A.lastBaseUpdate = w)));
    }
    if (u !== null) {
      var V = a.baseState;
      (h = 0), (A = E = w = null), (v = u);
      do {
        var R = v.lane,
          B = v.eventTime;
        if ((s & R) === R) {
          A !== null &&
            (A = A.next =
              {
                eventTime: B,
                lane: 0,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null,
              });
          e: {
            var $ = e,
              K = v;
            switch (((R = t), (B = r), K.tag)) {
              case 1:
                if ((($ = K.payload), typeof $ == "function")) {
                  V = $.call(B, V, R);
                  break e;
                }
                V = $;
                break e;
              case 3:
                $.flags = ($.flags & -65537) | 128;
              case 0:
                if (
                  (($ = K.payload),
                  (R = typeof $ == "function" ? $.call(B, V, R) : $),
                  R == null)
                )
                  break e;
                V = O({}, V, R);
                break e;
              case 2:
                sn = !0;
            }
          }
          v.callback !== null &&
            v.lane !== 0 &&
            ((e.flags |= 64),
            (R = a.effects),
            R === null ? (a.effects = [v]) : R.push(v));
        } else
          (B = {
            eventTime: B,
            lane: R,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            A === null ? ((E = A = B), (w = V)) : (A = A.next = B),
            (h |= R);
        if (((v = v.next), v === null)) {
          if (((v = a.shared.pending), v === null)) break;
          (R = v),
            (v = R.next),
            (R.next = null),
            (a.lastBaseUpdate = R),
            (a.shared.pending = null);
        }
      } while (!0);
      if (
        (A === null && (w = V),
        (a.baseState = w),
        (a.firstBaseUpdate = E),
        (a.lastBaseUpdate = A),
        (t = a.shared.interleaved),
        t !== null)
      ) {
        a = t;
        do (h |= a.lane), (a = a.next);
        while (a !== t);
      } else u === null && (a.shared.lanes = 0);
      (En |= h), (e.lanes = h), (e.memoizedState = V);
    }
  }
  function Kc(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var s = e[t],
          a = s.callback;
        if (a !== null) {
          if (((s.callback = null), (s = r), typeof a != "function"))
            throw Error(o(191, a));
          a.call(s);
        }
      }
  }
  var Xr = {},
    Lt = tn(Xr),
    Yr = tn(Xr),
    Gr = tn(Xr);
  function Pn(e) {
    if (e === Xr) throw Error(o(174));
    return e;
  }
  function ta(e, t) {
    switch ((ye(Gr, t), ye(Yr, e), ye(Lt, Xr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : to(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = to(t, e));
    }
    we(Lt), ye(Lt, t);
  }
  function nr() {
    we(Lt), we(Yr), we(Gr);
  }
  function Xc(e) {
    Pn(Gr.current);
    var t = Pn(Lt.current),
      r = to(t, e.type);
    t !== r && (ye(Yr, e), ye(Lt, r));
  }
  function na(e) {
    Yr.current === e && (we(Lt), we(Yr));
  }
  var ke = tn(0);
  function is(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var ra = [];
  function ia() {
    for (var e = 0; e < ra.length; e++)
      ra[e]._workInProgressVersionPrimary = null;
    ra.length = 0;
  }
  var ss = Z.ReactCurrentDispatcher,
    sa = Z.ReactCurrentBatchConfig,
    Cn = 0,
    Pe = null,
    Ne = null,
    je = null,
    os = !1,
    Qr = !1,
    Zr = 0,
    Dy = 0;
  function We() {
    throw Error(o(321));
  }
  function oa(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!kt(e[r], t[r])) return !1;
    return !0;
  }
  function aa(e, t, r, s, a, u) {
    if (
      ((Cn = u),
      (Pe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ss.current = e === null || e.memoizedState === null ? Ly : _y),
      (e = r(s, a)),
      Qr)
    ) {
      u = 0;
      do {
        if (((Qr = !1), (Zr = 0), 25 <= u)) throw Error(o(301));
        (u += 1),
          (je = Ne = null),
          (t.updateQueue = null),
          (ss.current = jy),
          (e = r(s, a));
      } while (Qr);
    }
    if (
      ((ss.current = us),
      (t = Ne !== null && Ne.next !== null),
      (Cn = 0),
      (je = Ne = Pe = null),
      (os = !1),
      t)
    )
      throw Error(o(300));
    return e;
  }
  function la() {
    var e = Zr !== 0;
    return (Zr = 0), e;
  }
  function _t() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return je === null ? (Pe.memoizedState = je = e) : (je = je.next = e), je;
  }
  function yt() {
    if (Ne === null) {
      var e = Pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ne.next;
    var t = je === null ? Pe.memoizedState : je.next;
    if (t !== null) (je = t), (Ne = e);
    else {
      if (e === null) throw Error(o(310));
      (Ne = e),
        (e = {
          memoizedState: Ne.memoizedState,
          baseState: Ne.baseState,
          baseQueue: Ne.baseQueue,
          queue: Ne.queue,
          next: null,
        }),
        je === null ? (Pe.memoizedState = je = e) : (je = je.next = e);
    }
    return je;
  }
  function qr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ua(e) {
    var t = yt(),
      r = t.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = e;
    var s = Ne,
      a = s.baseQueue,
      u = r.pending;
    if (u !== null) {
      if (a !== null) {
        var h = a.next;
        (a.next = u.next), (u.next = h);
      }
      (s.baseQueue = a = u), (r.pending = null);
    }
    if (a !== null) {
      (u = a.next), (s = s.baseState);
      var v = (h = null),
        w = null,
        E = u;
      do {
        var A = E.lane;
        if ((Cn & A) === A)
          w !== null &&
            (w = w.next =
              {
                lane: 0,
                action: E.action,
                hasEagerState: E.hasEagerState,
                eagerState: E.eagerState,
                next: null,
              }),
            (s = E.hasEagerState ? E.eagerState : e(s, E.action));
        else {
          var V = {
            lane: A,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null,
          };
          w === null ? ((v = w = V), (h = s)) : (w = w.next = V),
            (Pe.lanes |= A),
            (En |= A);
        }
        E = E.next;
      } while (E !== null && E !== u);
      w === null ? (h = s) : (w.next = v),
        kt(s, t.memoizedState) || (tt = !0),
        (t.memoizedState = s),
        (t.baseState = h),
        (t.baseQueue = w),
        (r.lastRenderedState = s);
    }
    if (((e = r.interleaved), e !== null)) {
      a = e;
      do (u = a.lane), (Pe.lanes |= u), (En |= u), (a = a.next);
      while (a !== e);
    } else a === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function ca(e) {
    var t = yt(),
      r = t.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = e;
    var s = r.dispatch,
      a = r.pending,
      u = t.memoizedState;
    if (a !== null) {
      r.pending = null;
      var h = (a = a.next);
      do (u = e(u, h.action)), (h = h.next);
      while (h !== a);
      kt(u, t.memoizedState) || (tt = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (r.lastRenderedState = u);
    }
    return [u, s];
  }
  function Yc() {}
  function Gc(e, t) {
    var r = Pe,
      s = yt(),
      a = t(),
      u = !kt(s.memoizedState, a);
    if (
      (u && ((s.memoizedState = a), (tt = !0)),
      (s = s.queue),
      fa(qc.bind(null, r, s, e), [e]),
      s.getSnapshot !== t || u || (je !== null && je.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        Jr(9, Zc.bind(null, r, s, a, t), void 0, null),
        Fe === null)
      )
        throw Error(o(349));
      (Cn & 30) !== 0 || Qc(r, t, a);
    }
    return a;
  }
  function Qc(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Pe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Pe.updateQueue = t),
          (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function Zc(e, t, r, s) {
    (t.value = r), (t.getSnapshot = s), Jc(t) && bc(e);
  }
  function qc(e, t, r) {
    return r(function () {
      Jc(t) && bc(e);
    });
  }
  function Jc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !kt(e, r);
    } catch {
      return !0;
    }
  }
  function bc(e) {
    var t = Ht(e, 1);
    t !== null && Rt(t, e, 1, -1);
  }
  function ef(e) {
    var t = _t();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Ny.bind(null, Pe, e)),
      [t.memoizedState, e]
    );
  }
  function Jr(e, t, r, s) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: s, next: null }),
      (t = Pe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Pe.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((s = r.next), (r.next = e), (e.next = s), (t.lastEffect = e))),
      e
    );
  }
  function tf() {
    return yt().memoizedState;
  }
  function as(e, t, r, s) {
    var a = _t();
    (Pe.flags |= e),
      (a.memoizedState = Jr(1 | t, r, void 0, s === void 0 ? null : s));
  }
  function ls(e, t, r, s) {
    var a = yt();
    s = s === void 0 ? null : s;
    var u = void 0;
    if (Ne !== null) {
      var h = Ne.memoizedState;
      if (((u = h.destroy), s !== null && oa(s, h.deps))) {
        a.memoizedState = Jr(t, r, u, s);
        return;
      }
    }
    (Pe.flags |= e), (a.memoizedState = Jr(1 | t, r, u, s));
  }
  function nf(e, t) {
    return as(8390656, 8, e, t);
  }
  function fa(e, t) {
    return ls(2048, 8, e, t);
  }
  function rf(e, t) {
    return ls(4, 2, e, t);
  }
  function sf(e, t) {
    return ls(4, 4, e, t);
  }
  function of(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function af(e, t, r) {
    return (
      (r = r != null ? r.concat([e]) : null), ls(4, 4, of.bind(null, t, e), r)
    );
  }
  function da() {}
  function lf(e, t) {
    var r = yt();
    t = t === void 0 ? null : t;
    var s = r.memoizedState;
    return s !== null && t !== null && oa(t, s[1])
      ? s[0]
      : ((r.memoizedState = [e, t]), e);
  }
  function uf(e, t) {
    var r = yt();
    t = t === void 0 ? null : t;
    var s = r.memoizedState;
    return s !== null && t !== null && oa(t, s[1])
      ? s[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function cf(e, t, r) {
    return (Cn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (tt = !0)), (e.memoizedState = r))
      : (kt(r, t) ||
          ((r = Ou()), (Pe.lanes |= r), (En |= r), (e.baseState = !0)),
        t);
  }
  function Ay(e, t) {
    var r = he;
    (he = r !== 0 && 4 > r ? r : 4), e(!0);
    var s = sa.transition;
    sa.transition = {};
    try {
      e(!1), t();
    } finally {
      (he = r), (sa.transition = s);
    }
  }
  function ff() {
    return yt().memoizedState;
  }
  function Vy(e, t, r) {
    var s = cn(e);
    if (
      ((r = {
        lane: s,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      df(e))
    )
      hf(t, r);
    else if (((r = Hc(e, t, r, s)), r !== null)) {
      var a = Ze();
      Rt(r, e, s, a), pf(r, t, s);
    }
  }
  function Ny(e, t, r) {
    var s = cn(e),
      a = {
        lane: s,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (df(e)) hf(t, a);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var h = t.lastRenderedState,
            v = u(h, r);
          if (((a.hasEagerState = !0), (a.eagerState = v), kt(v, h))) {
            var w = t.interleaved;
            w === null
              ? ((a.next = a), bo(t))
              : ((a.next = w.next), (w.next = a)),
              (t.interleaved = a);
            return;
          }
        } catch {
        } finally {
        }
      (r = Hc(e, t, a, s)),
        r !== null && ((a = Ze()), Rt(r, e, s, a), pf(r, t, s));
    }
  }
  function df(e) {
    var t = e.alternate;
    return e === Pe || (t !== null && t === Pe);
  }
  function hf(e, t) {
    Qr = os = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
  function pf(e, t, r) {
    if ((r & 4194240) !== 0) {
      var s = t.lanes;
      (s &= e.pendingLanes), (r |= s), (t.lanes = r), po(e, r);
    }
  }
  var us = {
      readContext: mt,
      useCallback: We,
      useContext: We,
      useEffect: We,
      useImperativeHandle: We,
      useInsertionEffect: We,
      useLayoutEffect: We,
      useMemo: We,
      useReducer: We,
      useRef: We,
      useState: We,
      useDebugValue: We,
      useDeferredValue: We,
      useTransition: We,
      useMutableSource: We,
      useSyncExternalStore: We,
      useId: We,
      unstable_isNewReconciler: !1,
    },
    Ly = {
      readContext: mt,
      useCallback: function (e, t) {
        return (_t().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: mt,
      useEffect: nf,
      useImperativeHandle: function (e, t, r) {
        return (
          (r = r != null ? r.concat([e]) : null),
          as(4194308, 4, of.bind(null, t, e), r)
        );
      },
      useLayoutEffect: function (e, t) {
        return as(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return as(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = _t();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (r.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, r) {
        var s = _t();
        return (
          (t = r !== void 0 ? r(t) : t),
          (s.memoizedState = s.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (s.queue = e),
          (e = e.dispatch = Vy.bind(null, Pe, e)),
          [s.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = _t();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: ef,
      useDebugValue: da,
      useDeferredValue: function (e) {
        return (_t().memoizedState = e);
      },
      useTransition: function () {
        var e = ef(!1),
          t = e[0];
        return (e = Ay.bind(null, e[1])), (_t().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var s = Pe,
          a = _t();
        if (Se) {
          if (r === void 0) throw Error(o(407));
          r = r();
        } else {
          if (((r = t()), Fe === null)) throw Error(o(349));
          (Cn & 30) !== 0 || Qc(s, t, r);
        }
        a.memoizedState = r;
        var u = { value: r, getSnapshot: t };
        return (
          (a.queue = u),
          nf(qc.bind(null, s, u, e), [e]),
          (s.flags |= 2048),
          Jr(9, Zc.bind(null, s, u, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = _t(),
          t = Fe.identifierPrefix;
        if (Se) {
          var r = Ut,
            s = Bt;
          (r = (s & ~(1 << (32 - Tt(s) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = Zr++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":");
        } else (r = Dy++), (t = ":" + t + "r" + r.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    _y = {
      readContext: mt,
      useCallback: lf,
      useContext: mt,
      useEffect: fa,
      useImperativeHandle: af,
      useInsertionEffect: rf,
      useLayoutEffect: sf,
      useMemo: uf,
      useReducer: ua,
      useRef: tf,
      useState: function () {
        return ua(qr);
      },
      useDebugValue: da,
      useDeferredValue: function (e) {
        var t = yt();
        return cf(t, Ne.memoizedState, e);
      },
      useTransition: function () {
        var e = ua(qr)[0],
          t = yt().memoizedState;
        return [e, t];
      },
      useMutableSource: Yc,
      useSyncExternalStore: Gc,
      useId: ff,
      unstable_isNewReconciler: !1,
    },
    jy = {
      readContext: mt,
      useCallback: lf,
      useContext: mt,
      useEffect: fa,
      useImperativeHandle: af,
      useInsertionEffect: rf,
      useLayoutEffect: sf,
      useMemo: uf,
      useReducer: ca,
      useRef: tf,
      useState: function () {
        return ca(qr);
      },
      useDebugValue: da,
      useDeferredValue: function (e) {
        var t = yt();
        return Ne === null ? (t.memoizedState = e) : cf(t, Ne.memoizedState, e);
      },
      useTransition: function () {
        var e = ca(qr)[0],
          t = yt().memoizedState;
        return [e, t];
      },
      useMutableSource: Yc,
      useSyncExternalStore: Gc,
      useId: ff,
      unstable_isNewReconciler: !1,
    };
  function Ct(e, t) {
    if (e && e.defaultProps) {
      (t = O({}, t)), (e = e.defaultProps);
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function ha(e, t, r, s) {
    (t = e.memoizedState),
      (r = r(s, t)),
      (r = r == null ? t : O({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var cs = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? vn(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var s = Ze(),
        a = cn(e),
        u = Wt(s, a);
      (u.payload = t),
        r != null && (u.callback = r),
        (t = on(e, u, a)),
        t !== null && (Rt(t, e, a, s), ns(t, e, a));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var s = Ze(),
        a = cn(e),
        u = Wt(s, a);
      (u.tag = 1),
        (u.payload = t),
        r != null && (u.callback = r),
        (t = on(e, u, a)),
        t !== null && (Rt(t, e, a, s), ns(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = Ze(),
        s = cn(e),
        a = Wt(r, s);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = on(e, a, s)),
        t !== null && (Rt(t, e, s, r), ns(t, e, s));
    },
  };
  function mf(e, t, r, s, a, u, h) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(s, u, h)
        : t.prototype && t.prototype.isPureReactComponent
        ? !zr(r, s) || !zr(a, u)
        : !0
    );
  }
  function yf(e, t, r) {
    var s = !1,
      a = nn,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = mt(u))
        : ((a = et(t) ? xn : He.current),
          (s = t.contextTypes),
          (u = (s = s != null) ? Qn(e, a) : nn)),
      (t = new t(r, u)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = cs),
      (e.stateNode = t),
      (t._reactInternals = e),
      s &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = a),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      t
    );
  }
  function gf(e, t, r, s) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(r, s),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, s),
      t.state !== e && cs.enqueueReplaceState(t, t.state, null);
  }
  function pa(e, t, r, s) {
    var a = e.stateNode;
    (a.props = r), (a.state = e.memoizedState), (a.refs = {}), ea(e);
    var u = t.contextType;
    typeof u == "object" && u !== null
      ? (a.context = mt(u))
      : ((u = et(t) ? xn : He.current), (a.context = Qn(e, u))),
      (a.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (ha(e, t, u, r), (a.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function" ||
        (typeof a.UNSAFE_componentWillMount != "function" &&
          typeof a.componentWillMount != "function") ||
        ((t = a.state),
        typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" &&
          a.UNSAFE_componentWillMount(),
        t !== a.state && cs.enqueueReplaceState(a, a.state, null),
        rs(e, r, a, s),
        (a.state = e.memoizedState)),
      typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function rr(e, t) {
    try {
      var r = "",
        s = t;
      do (r += ue(s)), (s = s.return);
      while (s);
      var a = r;
    } catch (u) {
      a =
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function ma(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function ya(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var Fy = typeof WeakMap == "function" ? WeakMap : Map;
  function vf(e, t, r) {
    (r = Wt(-1, r)), (r.tag = 3), (r.payload = { element: null });
    var s = t.value;
    return (
      (r.callback = function () {
        gs || ((gs = !0), (Va = s)), ya(e, t);
      }),
      r
    );
  }
  function wf(e, t, r) {
    (r = Wt(-1, r)), (r.tag = 3);
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var a = t.value;
      (r.payload = function () {
        return s(a);
      }),
        (r.callback = function () {
          ya(e, t);
        });
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (r.callback = function () {
          ya(e, t),
            typeof s != "function" &&
              (ln === null ? (ln = new Set([this])) : ln.add(this));
          var h = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: h !== null ? h : "",
          });
        }),
      r
    );
  }
  function xf(e, t, r) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new Fy();
      var a = new Set();
      s.set(t, a);
    } else (a = s.get(t)), a === void 0 && ((a = new Set()), s.set(t, a));
    a.has(r) || (a.add(r), (e = Zy.bind(null, e, t, r)), t.then(e, e));
  }
  function Sf(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Tf(e, t, r, s, a) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null
                ? (r.tag = 17)
                : ((t = Wt(-1, 1)), (t.tag = 2), on(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = a), e);
  }
  var Iy = Z.ReactCurrentOwner,
    tt = !1;
  function Qe(e, t, r, s) {
    t.child = e === null ? Uc(t, null, r, s) : bn(t, e.child, r, s);
  }
  function kf(e, t, r, s, a) {
    r = r.render;
    var u = t.ref;
    return (
      tr(t, a),
      (s = aa(e, t, r, s, u, a)),
      (r = la()),
      e !== null && !tt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          $t(e, t, a))
        : (Se && r && $o(t), (t.flags |= 1), Qe(e, t, s, a), t.child)
    );
  }
  function Pf(e, t, r, s, a) {
    if (e === null) {
      var u = r.type;
      return typeof u == "function" &&
        !za(u) &&
        u.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), Cf(e, t, u, s, a))
        : ((e = ks(r.type, null, s, t, t.mode, a)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), (e.lanes & a) === 0)) {
      var h = u.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : zr), r(h, s) && e.ref === t.ref)
      )
        return $t(e, t, a);
    }
    return (
      (t.flags |= 1),
      (e = dn(u, s)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Cf(e, t, r, s, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (zr(u, s) && e.ref === t.ref)
        if (((tt = !1), (t.pendingProps = s = u), (e.lanes & a) !== 0))
          (e.flags & 131072) !== 0 && (tt = !0);
        else return (t.lanes = e.lanes), $t(e, t, a);
    }
    return ga(e, t, r, s, a);
  }
  function Ef(e, t, r) {
    var s = t.pendingProps,
      a = s.children,
      u = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ye(sr, dt),
          (dt |= r);
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = u !== null ? u.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ye(sr, dt),
            (dt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (s = u !== null ? u.baseLanes : r),
          ye(sr, dt),
          (dt |= s);
      }
    else
      u !== null ? ((s = u.baseLanes | r), (t.memoizedState = null)) : (s = r),
        ye(sr, dt),
        (dt |= s);
    return Qe(e, t, a, r), t.child;
  }
  function Mf(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function ga(e, t, r, s, a) {
    var u = et(r) ? xn : He.current;
    return (
      (u = Qn(t, u)),
      tr(t, a),
      (r = aa(e, t, r, s, u, a)),
      (s = la()),
      e !== null && !tt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          $t(e, t, a))
        : (Se && s && $o(t), (t.flags |= 1), Qe(e, t, r, a), t.child)
    );
  }
  function Rf(e, t, r, s, a) {
    if (et(r)) {
      var u = !0;
      Gi(t);
    } else u = !1;
    if ((tr(t, a), t.stateNode === null))
      ds(e, t), yf(t, r, s), pa(t, r, s, a), (s = !0);
    else if (e === null) {
      var h = t.stateNode,
        v = t.memoizedProps;
      h.props = v;
      var w = h.context,
        E = r.contextType;
      typeof E == "object" && E !== null
        ? (E = mt(E))
        : ((E = et(r) ? xn : He.current), (E = Qn(t, E)));
      var A = r.getDerivedStateFromProps,
        V =
          typeof A == "function" ||
          typeof h.getSnapshotBeforeUpdate == "function";
      V ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== s || w !== E) && gf(t, h, s, E)),
        (sn = !1);
      var R = t.memoizedState;
      (h.state = R),
        rs(t, s, h, a),
        (w = t.memoizedState),
        v !== s || R !== w || be.current || sn
          ? (typeof A == "function" && (ha(t, r, A, s), (w = t.memoizedState)),
            (v = sn || mf(t, r, v, s, R, w, E))
              ? (V ||
                  (typeof h.UNSAFE_componentWillMount != "function" &&
                    typeof h.componentWillMount != "function") ||
                  (typeof h.componentWillMount == "function" &&
                    h.componentWillMount(),
                  typeof h.UNSAFE_componentWillMount == "function" &&
                    h.UNSAFE_componentWillMount()),
                typeof h.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof h.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = s),
                (t.memoizedState = w)),
            (h.props = s),
            (h.state = w),
            (h.context = E),
            (s = v))
          : (typeof h.componentDidMount == "function" && (t.flags |= 4194308),
            (s = !1));
    } else {
      (h = t.stateNode),
        Wc(e, t),
        (v = t.memoizedProps),
        (E = t.type === t.elementType ? v : Ct(t.type, v)),
        (h.props = E),
        (V = t.pendingProps),
        (R = h.context),
        (w = r.contextType),
        typeof w == "object" && w !== null
          ? (w = mt(w))
          : ((w = et(r) ? xn : He.current), (w = Qn(t, w)));
      var B = r.getDerivedStateFromProps;
      (A =
        typeof B == "function" ||
        typeof h.getSnapshotBeforeUpdate == "function") ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== V || R !== w) && gf(t, h, s, w)),
        (sn = !1),
        (R = t.memoizedState),
        (h.state = R),
        rs(t, s, h, a);
      var $ = t.memoizedState;
      v !== V || R !== $ || be.current || sn
        ? (typeof B == "function" && (ha(t, r, B, s), ($ = t.memoizedState)),
          (E = sn || mf(t, r, E, s, R, $, w) || !1)
            ? (A ||
                (typeof h.UNSAFE_componentWillUpdate != "function" &&
                  typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" &&
                  h.componentWillUpdate(s, $, w),
                typeof h.UNSAFE_componentWillUpdate == "function" &&
                  h.UNSAFE_componentWillUpdate(s, $, w)),
              typeof h.componentDidUpdate == "function" && (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof h.componentDidUpdate != "function" ||
                (v === e.memoizedProps && R === e.memoizedState) ||
                (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != "function" ||
                (v === e.memoizedProps && R === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = s),
              (t.memoizedState = $)),
          (h.props = s),
          (h.state = $),
          (h.context = w),
          (s = E))
        : (typeof h.componentDidUpdate != "function" ||
            (v === e.memoizedProps && R === e.memoizedState) ||
            (t.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != "function" ||
            (v === e.memoizedProps && R === e.memoizedState) ||
            (t.flags |= 1024),
          (s = !1));
    }
    return va(e, t, r, s, u, a);
  }
  function va(e, t, r, s, a, u) {
    Mf(e, t);
    var h = (t.flags & 128) !== 0;
    if (!s && !h) return a && Nc(t, r, !1), $t(e, t, u);
    (s = t.stateNode), (Iy.current = t);
    var v =
      h && typeof r.getDerivedStateFromError != "function" ? null : s.render();
    return (
      (t.flags |= 1),
      e !== null && h
        ? ((t.child = bn(t, e.child, null, u)), (t.child = bn(t, null, v, u)))
        : Qe(e, t, v, u),
      (t.memoizedState = s.state),
      a && Nc(t, r, !0),
      t.child
    );
  }
  function Df(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Ac(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ac(e, t.context, !1),
      ta(e, t.containerInfo);
  }
  function Af(e, t, r, s, a) {
    return Jn(), Go(a), (t.flags |= 256), Qe(e, t, r, s), t.child;
  }
  var wa = { dehydrated: null, treeContext: null, retryLane: 0 };
  function xa(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Vf(e, t, r) {
    var s = t.pendingProps,
      a = ke.current,
      u = !1,
      h = (t.flags & 128) !== 0,
      v;
    if (
      ((v = h) ||
        (v = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
      v
        ? ((u = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (a |= 1),
      ye(ke, a & 1),
      e === null)
    )
      return (
        Yo(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((h = s.children),
            (e = s.fallback),
            u
              ? ((s = t.mode),
                (u = t.child),
                (h = { mode: "hidden", children: h }),
                (s & 1) === 0 && u !== null
                  ? ((u.childLanes = 0), (u.pendingProps = h))
                  : (u = Ps(h, s, 0, null)),
                (e = An(e, s, r, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = xa(r)),
                (t.memoizedState = wa),
                e)
              : Sa(t, h))
      );
    if (((a = e.memoizedState), a !== null && ((v = a.dehydrated), v !== null)))
      return zy(e, t, h, s, v, a, r);
    if (u) {
      (u = s.fallback), (h = t.mode), (a = e.child), (v = a.sibling);
      var w = { mode: "hidden", children: s.children };
      return (
        (h & 1) === 0 && t.child !== a
          ? ((s = t.child),
            (s.childLanes = 0),
            (s.pendingProps = w),
            (t.deletions = null))
          : ((s = dn(a, w)), (s.subtreeFlags = a.subtreeFlags & 14680064)),
        v !== null ? (u = dn(v, u)) : ((u = An(u, h, r, null)), (u.flags |= 2)),
        (u.return = t),
        (s.return = t),
        (s.sibling = u),
        (t.child = s),
        (s = u),
        (u = t.child),
        (h = e.child.memoizedState),
        (h =
          h === null
            ? xa(r)
            : {
                baseLanes: h.baseLanes | r,
                cachePool: null,
                transitions: h.transitions,
              }),
        (u.memoizedState = h),
        (u.childLanes = e.childLanes & ~r),
        (t.memoizedState = wa),
        s
      );
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (s = dn(u, { mode: "visible", children: s.children })),
      (t.mode & 1) === 0 && (s.lanes = r),
      (s.return = t),
      (s.sibling = null),
      e !== null &&
        ((r = t.deletions),
        r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = s),
      (t.memoizedState = null),
      s
    );
  }
  function Sa(e, t) {
    return (
      (t = Ps({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function fs(e, t, r, s) {
    return (
      s !== null && Go(s),
      bn(t, e.child, null, r),
      (e = Sa(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function zy(e, t, r, s, a, u, h) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (s = ma(Error(o(422)))), fs(e, t, h, s))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((u = s.fallback),
          (a = t.mode),
          (s = Ps({ mode: "visible", children: s.children }, a, 0, null)),
          (u = An(u, a, h, null)),
          (u.flags |= 2),
          (s.return = t),
          (u.return = t),
          (s.sibling = u),
          (t.child = s),
          (t.mode & 1) !== 0 && bn(t, e.child, null, h),
          (t.child.memoizedState = xa(h)),
          (t.memoizedState = wa),
          u);
    if ((t.mode & 1) === 0) return fs(e, t, h, null);
    if (a.data === "$!") {
      if (((s = a.nextSibling && a.nextSibling.dataset), s)) var v = s.dgst;
      return (
        (s = v), (u = Error(o(419))), (s = ma(u, s, void 0)), fs(e, t, h, s)
      );
    }
    if (((v = (h & e.childLanes) !== 0), tt || v)) {
      if (((s = Fe), s !== null)) {
        switch (h & -h) {
          case 4:
            a = 2;
            break;
          case 16:
            a = 8;
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
            a = 32;
            break;
          case 536870912:
            a = 268435456;
            break;
          default:
            a = 0;
        }
        (a = (a & (s.suspendedLanes | h)) !== 0 ? 0 : a),
          a !== 0 &&
            a !== u.retryLane &&
            ((u.retryLane = a), Ht(e, a), Rt(s, e, a, -1));
      }
      return Ia(), (s = ma(Error(o(421)))), fs(e, t, h, s);
    }
    return a.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = qy.bind(null, e)),
        (a._reactRetry = t),
        null)
      : ((e = u.treeContext),
        (ft = en(a.nextSibling)),
        (ct = t),
        (Se = !0),
        (Pt = null),
        e !== null &&
          ((ht[pt++] = Bt),
          (ht[pt++] = Ut),
          (ht[pt++] = Sn),
          (Bt = e.id),
          (Ut = e.overflow),
          (Sn = t)),
        (t = Sa(t, s.children)),
        (t.flags |= 4096),
        t);
  }
  function Nf(e, t, r) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), Jo(e.return, t, r);
  }
  function Ta(e, t, r, s, a) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: s,
          tail: r,
          tailMode: a,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = s),
        (u.tail = r),
        (u.tailMode = a));
  }
  function Lf(e, t, r) {
    var s = t.pendingProps,
      a = s.revealOrder,
      u = s.tail;
    if ((Qe(e, t, s.children, r), (s = ke.current), (s & 2) !== 0))
      (s = (s & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Nf(e, r, t);
          else if (e.tag === 19) Nf(e, r, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      s &= 1;
    }
    if ((ye(ke, s), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (a) {
        case "forwards":
          for (r = t.child, a = null; r !== null; )
            (e = r.alternate),
              e !== null && is(e) === null && (a = r),
              (r = r.sibling);
          (r = a),
            r === null
              ? ((a = t.child), (t.child = null))
              : ((a = r.sibling), (r.sibling = null)),
            Ta(t, !1, a, r, u);
          break;
        case "backwards":
          for (r = null, a = t.child, t.child = null; a !== null; ) {
            if (((e = a.alternate), e !== null && is(e) === null)) {
              t.child = a;
              break;
            }
            (e = a.sibling), (a.sibling = r), (r = a), (a = e);
          }
          Ta(t, !0, r, null, u);
          break;
        case "together":
          Ta(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function ds(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function $t(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (En |= t.lanes),
      (r & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, r = dn(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = dn(e, e.pendingProps)),
          (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function Oy(e, t, r) {
    switch (t.tag) {
      case 3:
        Df(t), Jn();
        break;
      case 5:
        Xc(t);
        break;
      case 1:
        et(t.type) && Gi(t);
        break;
      case 4:
        ta(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context,
          a = t.memoizedProps.value;
        ye(es, s._currentValue), (s._currentValue = a);
        break;
      case 13:
        if (((s = t.memoizedState), s !== null))
          return s.dehydrated !== null
            ? (ye(ke, ke.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
            ? Vf(e, t, r)
            : (ye(ke, ke.current & 1),
              (e = $t(e, t, r)),
              e !== null ? e.sibling : null);
        ye(ke, ke.current & 1);
        break;
      case 19:
        if (((s = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (s) return Lf(e, t, r);
          t.flags |= 128;
        }
        if (
          ((a = t.memoizedState),
          a !== null &&
            ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          ye(ke, ke.current),
          s)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Ef(e, t, r);
    }
    return $t(e, t, r);
  }
  var _f, ka, jf, Ff;
  (_f = function (e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
  }),
    (ka = function () {}),
    (jf = function (e, t, r, s) {
      var a = e.memoizedProps;
      if (a !== s) {
        (e = t.stateNode), Pn(Lt.current);
        var u = null;
        switch (r) {
          case "input":
            (a = qs(e, a)), (s = qs(e, s)), (u = []);
            break;
          case "select":
            (a = O({}, a, { value: void 0 })),
              (s = O({}, s, { value: void 0 })),
              (u = []);
            break;
          case "textarea":
            (a = eo(e, a)), (s = eo(e, s)), (u = []);
            break;
          default:
            typeof a.onClick != "function" &&
              typeof s.onClick == "function" &&
              (e.onclick = Ki);
        }
        no(r, s);
        var h;
        r = null;
        for (E in a)
          if (!s.hasOwnProperty(E) && a.hasOwnProperty(E) && a[E] != null)
            if (E === "style") {
              var v = a[E];
              for (h in v) v.hasOwnProperty(h) && (r || (r = {}), (r[h] = ""));
            } else
              E !== "dangerouslySetInnerHTML" &&
                E !== "children" &&
                E !== "suppressContentEditableWarning" &&
                E !== "suppressHydrationWarning" &&
                E !== "autoFocus" &&
                (c.hasOwnProperty(E)
                  ? u || (u = [])
                  : (u = u || []).push(E, null));
        for (E in s) {
          var w = s[E];
          if (
            ((v = a?.[E]),
            s.hasOwnProperty(E) && w !== v && (w != null || v != null))
          )
            if (E === "style")
              if (v) {
                for (h in v)
                  !v.hasOwnProperty(h) ||
                    (w && w.hasOwnProperty(h)) ||
                    (r || (r = {}), (r[h] = ""));
                for (h in w)
                  w.hasOwnProperty(h) &&
                    v[h] !== w[h] &&
                    (r || (r = {}), (r[h] = w[h]));
              } else r || (u || (u = []), u.push(E, r)), (r = w);
            else
              E === "dangerouslySetInnerHTML"
                ? ((w = w ? w.__html : void 0),
                  (v = v ? v.__html : void 0),
                  w != null && v !== w && (u = u || []).push(E, w))
                : E === "children"
                ? (typeof w != "string" && typeof w != "number") ||
                  (u = u || []).push(E, "" + w)
                : E !== "suppressContentEditableWarning" &&
                  E !== "suppressHydrationWarning" &&
                  (c.hasOwnProperty(E)
                    ? (w != null && E === "onScroll" && ve("scroll", e),
                      u || v === w || (u = []))
                    : (u = u || []).push(E, w));
        }
        r && (u = u || []).push("style", r);
        var E = u;
        (t.updateQueue = E) && (t.flags |= 4);
      }
    }),
    (Ff = function (e, t, r, s) {
      r !== s && (t.flags |= 4);
    });
  function br(e, t) {
    if (!Se)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = e.tail;
          for (var s = null; r !== null; )
            r.alternate !== null && (s = r), (r = r.sibling);
          s === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (s.sibling = null);
      }
  }
  function $e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      s = 0;
    if (t)
      for (var a = e.child; a !== null; )
        (r |= a.lanes | a.childLanes),
          (s |= a.subtreeFlags & 14680064),
          (s |= a.flags & 14680064),
          (a.return = e),
          (a = a.sibling);
    else
      for (a = e.child; a !== null; )
        (r |= a.lanes | a.childLanes),
          (s |= a.subtreeFlags),
          (s |= a.flags),
          (a.return = e),
          (a = a.sibling);
    return (e.subtreeFlags |= s), (e.childLanes = r), t;
  }
  function By(e, t, r) {
    var s = t.pendingProps;
    switch ((Ko(t), t.tag)) {
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
        return $e(t), null;
      case 1:
        return et(t.type) && Yi(), $e(t), null;
      case 3:
        return (
          (s = t.stateNode),
          nr(),
          we(be),
          we(He),
          ia(),
          s.pendingContext &&
            ((s.context = s.pendingContext), (s.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ji(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Pt !== null && (_a(Pt), (Pt = null)))),
          ka(e, t),
          $e(t),
          null
        );
      case 5:
        na(t);
        var a = Pn(Gr.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          jf(e, t, r, s, a),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(o(166));
            return $e(t), null;
          }
          if (((e = Pn(Lt.current)), Ji(t))) {
            (s = t.stateNode), (r = t.type);
            var u = t.memoizedProps;
            switch (((s[Nt] = t), (s[Wr] = u), (e = (t.mode & 1) !== 0), r)) {
              case "dialog":
                ve("cancel", s), ve("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                ve("load", s);
                break;
              case "video":
              case "audio":
                for (a = 0; a < Br.length; a++) ve(Br[a], s);
                break;
              case "source":
                ve("error", s);
                break;
              case "img":
              case "image":
              case "link":
                ve("error", s), ve("load", s);
                break;
              case "details":
                ve("toggle", s);
                break;
              case "input":
                mu(s, u), ve("invalid", s);
                break;
              case "select":
                (s._wrapperState = { wasMultiple: !!u.multiple }),
                  ve("invalid", s);
                break;
              case "textarea":
                vu(s, u), ve("invalid", s);
            }
            no(r, u), (a = null);
            for (var h in u)
              if (u.hasOwnProperty(h)) {
                var v = u[h];
                h === "children"
                  ? typeof v == "string"
                    ? s.textContent !== v &&
                      (u.suppressHydrationWarning !== !0 &&
                        $i(s.textContent, v, e),
                      (a = ["children", v]))
                    : typeof v == "number" &&
                      s.textContent !== "" + v &&
                      (u.suppressHydrationWarning !== !0 &&
                        $i(s.textContent, v, e),
                      (a = ["children", "" + v]))
                  : c.hasOwnProperty(h) &&
                    v != null &&
                    h === "onScroll" &&
                    ve("scroll", s);
              }
            switch (r) {
              case "input":
                Si(s), gu(s, u, !0);
                break;
              case "textarea":
                Si(s), xu(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (s.onclick = Ki);
            }
            (s = a), (t.updateQueue = s), s !== null && (t.flags |= 4);
          } else {
            (h = a.nodeType === 9 ? a : a.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Su(r)),
              e === "http://www.w3.org/1999/xhtml"
                ? r === "script"
                  ? ((e = h.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof s.is == "string"
                  ? (e = h.createElement(r, { is: s.is }))
                  : ((e = h.createElement(r)),
                    r === "select" &&
                      ((h = e),
                      s.multiple
                        ? (h.multiple = !0)
                        : s.size && (h.size = s.size)))
                : (e = h.createElementNS(e, r)),
              (e[Nt] = t),
              (e[Wr] = s),
              _f(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((h = ro(r, s)), r)) {
                case "dialog":
                  ve("cancel", e), ve("close", e), (a = s);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ve("load", e), (a = s);
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < Br.length; a++) ve(Br[a], e);
                  a = s;
                  break;
                case "source":
                  ve("error", e), (a = s);
                  break;
                case "img":
                case "image":
                case "link":
                  ve("error", e), ve("load", e), (a = s);
                  break;
                case "details":
                  ve("toggle", e), (a = s);
                  break;
                case "input":
                  mu(e, s), (a = qs(e, s)), ve("invalid", e);
                  break;
                case "option":
                  a = s;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!s.multiple }),
                    (a = O({}, s, { value: void 0 })),
                    ve("invalid", e);
                  break;
                case "textarea":
                  vu(e, s), (a = eo(e, s)), ve("invalid", e);
                  break;
                default:
                  a = s;
              }
              no(r, a), (v = a);
              for (u in v)
                if (v.hasOwnProperty(u)) {
                  var w = v[u];
                  u === "style"
                    ? Pu(e, w)
                    : u === "dangerouslySetInnerHTML"
                    ? ((w = w ? w.__html : void 0), w != null && Tu(e, w))
                    : u === "children"
                    ? typeof w == "string"
                      ? (r !== "textarea" || w !== "") && Sr(e, w)
                      : typeof w == "number" && Sr(e, "" + w)
                    : u !== "suppressContentEditableWarning" &&
                      u !== "suppressHydrationWarning" &&
                      u !== "autoFocus" &&
                      (c.hasOwnProperty(u)
                        ? w != null && u === "onScroll" && ve("scroll", e)
                        : w != null && z(e, u, w, h));
                }
              switch (r) {
                case "input":
                  Si(e), gu(e, s, !1);
                  break;
                case "textarea":
                  Si(e), xu(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + de(s.value));
                  break;
                case "select":
                  (e.multiple = !!s.multiple),
                    (u = s.value),
                    u != null
                      ? In(e, !!s.multiple, u, !1)
                      : s.defaultValue != null &&
                        In(e, !!s.multiple, s.defaultValue, !0);
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = Ki);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return $e(t), null;
      case 6:
        if (e && t.stateNode != null) Ff(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(o(166));
          if (((r = Pn(Gr.current)), Pn(Lt.current), Ji(t))) {
            if (
              ((s = t.stateNode),
              (r = t.memoizedProps),
              (s[Nt] = t),
              (u = s.nodeValue !== r) && ((e = ct), e !== null))
            )
              switch (e.tag) {
                case 3:
                  $i(s.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    $i(s.nodeValue, r, (e.mode & 1) !== 0);
              }
            u && (t.flags |= 4);
          } else
            (s = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(s)),
              (s[Nt] = t),
              (t.stateNode = s);
        }
        return $e(t), null;
      case 13:
        if (
          (we(ke),
          (s = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Se && ft !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            zc(), Jn(), (t.flags |= 98560), (u = !1);
          else if (((u = Ji(t)), s !== null && s.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(o(317));
              u[Nt] = t;
            } else
              Jn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            $e(t), (u = !1);
          } else Pt !== null && (_a(Pt), (Pt = null)), (u = !0);
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((s = s !== null),
            s !== (e !== null && e.memoizedState !== null) &&
              s &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ke.current & 1) !== 0
                  ? Le === 0 && (Le = 3)
                  : Ia())),
            t.updateQueue !== null && (t.flags |= 4),
            $e(t),
            null);
      case 4:
        return (
          nr(),
          ka(e, t),
          e === null && Ur(t.stateNode.containerInfo),
          $e(t),
          null
        );
      case 10:
        return qo(t.type._context), $e(t), null;
      case 17:
        return et(t.type) && Yi(), $e(t), null;
      case 19:
        if ((we(ke), (u = t.memoizedState), u === null)) return $e(t), null;
        if (((s = (t.flags & 128) !== 0), (h = u.rendering), h === null))
          if (s) br(u, !1);
          else {
            if (Le !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((h = is(e)), h !== null)) {
                  for (
                    t.flags |= 128,
                      br(u, !1),
                      s = h.updateQueue,
                      s !== null && ((t.updateQueue = s), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      s = r,
                      r = t.child;
                    r !== null;

                  )
                    (u = r),
                      (e = s),
                      (u.flags &= 14680066),
                      (h = u.alternate),
                      h === null
                        ? ((u.childLanes = 0),
                          (u.lanes = e),
                          (u.child = null),
                          (u.subtreeFlags = 0),
                          (u.memoizedProps = null),
                          (u.memoizedState = null),
                          (u.updateQueue = null),
                          (u.dependencies = null),
                          (u.stateNode = null))
                        : ((u.childLanes = h.childLanes),
                          (u.lanes = h.lanes),
                          (u.child = h.child),
                          (u.subtreeFlags = 0),
                          (u.deletions = null),
                          (u.memoizedProps = h.memoizedProps),
                          (u.memoizedState = h.memoizedState),
                          (u.updateQueue = h.updateQueue),
                          (u.type = h.type),
                          (e = h.dependencies),
                          (u.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (r = r.sibling);
                  return ye(ke, (ke.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            u.tail !== null &&
              Re() > or &&
              ((t.flags |= 128), (s = !0), br(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!s)
            if (((e = is(h)), e !== null)) {
              if (
                ((t.flags |= 128),
                (s = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                br(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !h.alternate &&
                  !Se)
              )
                return $e(t), null;
            } else
              2 * Re() - u.renderingStartTime > or &&
                r !== 1073741824 &&
                ((t.flags |= 128), (s = !0), br(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((h.sibling = t.child), (t.child = h))
            : ((r = u.last),
              r !== null ? (r.sibling = h) : (t.child = h),
              (u.last = h));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = Re()),
            (t.sibling = null),
            (r = ke.current),
            ye(ke, s ? (r & 1) | 2 : r & 1),
            t)
          : ($e(t), null);
      case 22:
      case 23:
        return (
          Fa(),
          (s = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
          s && (t.mode & 1) !== 0
            ? (dt & 1073741824) !== 0 &&
              ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : $e(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Uy(e, t) {
    switch ((Ko(t), t.tag)) {
      case 1:
        return (
          et(t.type) && Yi(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          nr(),
          we(be),
          we(He),
          ia(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return na(t), null;
      case 13:
        if (
          (we(ke), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          Jn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return we(ke), null;
      case 4:
        return nr(), null;
      case 10:
        return qo(t.type._context), null;
      case 22:
      case 23:
        return Fa(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var hs = !1,
    Ke = !1,
    Hy = typeof WeakSet == "function" ? WeakSet : Set,
    W = null;
  function ir(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (s) {
          Ee(e, t, s);
        }
      else r.current = null;
  }
  function Pa(e, t, r) {
    try {
      r();
    } catch (s) {
      Ee(e, t, s);
    }
  }
  var If = !1;
  function Wy(e, t) {
    if (((Fo = Li), (e = pc()), Ro(e))) {
      if ("selectionStart" in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var s = r.getSelection && r.getSelection();
          if (s && s.rangeCount !== 0) {
            r = s.anchorNode;
            var a = s.anchorOffset,
              u = s.focusNode;
            s = s.focusOffset;
            try {
              r.nodeType, u.nodeType;
            } catch {
              r = null;
              break e;
            }
            var h = 0,
              v = -1,
              w = -1,
              E = 0,
              A = 0,
              V = e,
              R = null;
            t: for (;;) {
              for (
                var B;
                V !== r || (a !== 0 && V.nodeType !== 3) || (v = h + a),
                  V !== u || (s !== 0 && V.nodeType !== 3) || (w = h + s),
                  V.nodeType === 3 && (h += V.nodeValue.length),
                  (B = V.firstChild) !== null;

              )
                (R = V), (V = B);
              for (;;) {
                if (V === e) break t;
                if (
                  (R === r && ++E === a && (v = h),
                  R === u && ++A === s && (w = h),
                  (B = V.nextSibling) !== null)
                )
                  break;
                (V = R), (R = V.parentNode);
              }
              V = B;
            }
            r = v === -1 || w === -1 ? null : { start: v, end: w };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      Io = { focusedElem: e, selectionRange: r }, Li = !1, W = t;
      W !== null;

    )
      if (((t = W), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (W = e);
      else
        for (; W !== null; ) {
          t = W;
          try {
            var $ = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if ($ !== null) {
                    var K = $.memoizedProps,
                      De = $.memoizedState,
                      P = t.stateNode,
                      S = P.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? K : Ct(t.type, K),
                        De
                      );
                    P.__reactInternalSnapshotBeforeUpdate = S;
                  }
                  break;
                case 3:
                  var C = t.stateNode.containerInfo;
                  C.nodeType === 1
                    ? (C.textContent = "")
                    : C.nodeType === 9 &&
                      C.documentElement &&
                      C.removeChild(C.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(o(163));
              }
          } catch (_) {
            Ee(t, t.return, _);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (W = e);
            break;
          }
          W = t.return;
        }
    return ($ = If), (If = !1), $;
  }
  function ei(e, t, r) {
    var s = t.updateQueue;
    if (((s = s !== null ? s.lastEffect : null), s !== null)) {
      var a = (s = s.next);
      do {
        if ((a.tag & e) === e) {
          var u = a.destroy;
          (a.destroy = void 0), u !== void 0 && Pa(t, r, u);
        }
        a = a.next;
      } while (a !== s);
    }
  }
  function ps(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var s = r.create;
          r.destroy = s();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function Ca(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function zf(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), zf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Nt],
          delete t[Wr],
          delete t[Uo],
          delete t[Cy],
          delete t[Ey])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Of(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Bf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Of(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ea(e, t, r) {
    var s = e.tag;
    if (s === 5 || s === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = Ki));
    else if (s !== 4 && ((e = e.child), e !== null))
      for (Ea(e, t, r), e = e.sibling; e !== null; )
        Ea(e, t, r), (e = e.sibling);
  }
  function Ma(e, t, r) {
    var s = e.tag;
    if (s === 5 || s === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (s !== 4 && ((e = e.child), e !== null))
      for (Ma(e, t, r), e = e.sibling; e !== null; )
        Ma(e, t, r), (e = e.sibling);
  }
  var ze = null,
    Et = !1;
  function an(e, t, r) {
    for (r = r.child; r !== null; ) Uf(e, t, r), (r = r.sibling);
  }
  function Uf(e, t, r) {
    if (Vt && typeof Vt.onCommitFiberUnmount == "function")
      try {
        Vt.onCommitFiberUnmount(Mi, r);
      } catch {}
    switch (r.tag) {
      case 5:
        Ke || ir(r, t);
      case 6:
        var s = ze,
          a = Et;
        (ze = null),
          an(e, t, r),
          (ze = s),
          (Et = a),
          ze !== null &&
            (Et
              ? ((e = ze),
                (r = r.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(r)
                  : e.removeChild(r))
              : ze.removeChild(r.stateNode));
        break;
      case 18:
        ze !== null &&
          (Et
            ? ((e = ze),
              (r = r.stateNode),
              e.nodeType === 8
                ? Bo(e.parentNode, r)
                : e.nodeType === 1 && Bo(e, r),
              Nr(e))
            : Bo(ze, r.stateNode));
        break;
      case 4:
        (s = ze),
          (a = Et),
          (ze = r.stateNode.containerInfo),
          (Et = !0),
          an(e, t, r),
          (ze = s),
          (Et = a);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ke &&
          ((s = r.updateQueue), s !== null && ((s = s.lastEffect), s !== null))
        ) {
          a = s = s.next;
          do {
            var u = a,
              h = u.destroy;
            (u = u.tag),
              h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Pa(r, t, h),
              (a = a.next);
          } while (a !== s);
        }
        an(e, t, r);
        break;
      case 1:
        if (
          !Ke &&
          (ir(r, t),
          (s = r.stateNode),
          typeof s.componentWillUnmount == "function")
        )
          try {
            (s.props = r.memoizedProps),
              (s.state = r.memoizedState),
              s.componentWillUnmount();
          } catch (v) {
            Ee(r, t, v);
          }
        an(e, t, r);
        break;
      case 21:
        an(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((Ke = (s = Ke) || r.memoizedState !== null), an(e, t, r), (Ke = s))
          : an(e, t, r);
        break;
      default:
        an(e, t, r);
    }
  }
  function Hf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new Hy()),
        t.forEach(function (s) {
          var a = Jy.bind(null, e, s);
          r.has(s) || (r.add(s), s.then(a, a));
        });
    }
  }
  function Mt(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var s = 0; s < r.length; s++) {
        var a = r[s];
        try {
          var u = e,
            h = t,
            v = h;
          e: for (; v !== null; ) {
            switch (v.tag) {
              case 5:
                (ze = v.stateNode), (Et = !1);
                break e;
              case 3:
                (ze = v.stateNode.containerInfo), (Et = !0);
                break e;
              case 4:
                (ze = v.stateNode.containerInfo), (Et = !0);
                break e;
            }
            v = v.return;
          }
          if (ze === null) throw Error(o(160));
          Uf(u, h, a), (ze = null), (Et = !1);
          var w = a.alternate;
          w !== null && (w.return = null), (a.return = null);
        } catch (E) {
          Ee(a, t, E);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Wf(t, e), (t = t.sibling);
  }
  function Wf(e, t) {
    var r = e.alternate,
      s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Mt(t, e), jt(e), s & 4)) {
          try {
            ei(3, e, e.return), ps(3, e);
          } catch (K) {
            Ee(e, e.return, K);
          }
          try {
            ei(5, e, e.return);
          } catch (K) {
            Ee(e, e.return, K);
          }
        }
        break;
      case 1:
        Mt(t, e), jt(e), s & 512 && r !== null && ir(r, r.return);
        break;
      case 5:
        if (
          (Mt(t, e),
          jt(e),
          s & 512 && r !== null && ir(r, r.return),
          e.flags & 32)
        ) {
          var a = e.stateNode;
          try {
            Sr(a, "");
          } catch (K) {
            Ee(e, e.return, K);
          }
        }
        if (s & 4 && ((a = e.stateNode), a != null)) {
          var u = e.memoizedProps,
            h = r !== null ? r.memoizedProps : u,
            v = e.type,
            w = e.updateQueue;
          if (((e.updateQueue = null), w !== null))
            try {
              v === "input" && u.type === "radio" && u.name != null && yu(a, u),
                ro(v, h);
              var E = ro(v, u);
              for (h = 0; h < w.length; h += 2) {
                var A = w[h],
                  V = w[h + 1];
                A === "style"
                  ? Pu(a, V)
                  : A === "dangerouslySetInnerHTML"
                  ? Tu(a, V)
                  : A === "children"
                  ? Sr(a, V)
                  : z(a, A, V, E);
              }
              switch (v) {
                case "input":
                  Js(a, u);
                  break;
                case "textarea":
                  wu(a, u);
                  break;
                case "select":
                  var R = a._wrapperState.wasMultiple;
                  a._wrapperState.wasMultiple = !!u.multiple;
                  var B = u.value;
                  B != null
                    ? In(a, !!u.multiple, B, !1)
                    : R !== !!u.multiple &&
                      (u.defaultValue != null
                        ? In(a, !!u.multiple, u.defaultValue, !0)
                        : In(a, !!u.multiple, u.multiple ? [] : "", !1));
              }
              a[Wr] = u;
            } catch (K) {
              Ee(e, e.return, K);
            }
        }
        break;
      case 6:
        if ((Mt(t, e), jt(e), s & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (a = e.stateNode), (u = e.memoizedProps);
          try {
            a.nodeValue = u;
          } catch (K) {
            Ee(e, e.return, K);
          }
        }
        break;
      case 3:
        if (
          (Mt(t, e), jt(e), s & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            Nr(t.containerInfo);
          } catch (K) {
            Ee(e, e.return, K);
          }
        break;
      case 4:
        Mt(t, e), jt(e);
        break;
      case 13:
        Mt(t, e),
          jt(e),
          (a = e.child),
          a.flags & 8192 &&
            ((u = a.memoizedState !== null),
            (a.stateNode.isHidden = u),
            !u ||
              (a.alternate !== null && a.alternate.memoizedState !== null) ||
              (Aa = Re())),
          s & 4 && Hf(e);
        break;
      case 22:
        if (
          ((A = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((Ke = (E = Ke) || A), Mt(t, e), (Ke = E)) : Mt(t, e),
          jt(e),
          s & 8192)
        ) {
          if (
            ((E = e.memoizedState !== null),
            (e.stateNode.isHidden = E) && !A && (e.mode & 1) !== 0)
          )
            for (W = e, A = e.child; A !== null; ) {
              for (V = W = A; W !== null; ) {
                switch (((R = W), (B = R.child), R.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ei(4, R, R.return);
                    break;
                  case 1:
                    ir(R, R.return);
                    var $ = R.stateNode;
                    if (typeof $.componentWillUnmount == "function") {
                      (s = R), (r = R.return);
                      try {
                        (t = s),
                          ($.props = t.memoizedProps),
                          ($.state = t.memoizedState),
                          $.componentWillUnmount();
                      } catch (K) {
                        Ee(s, r, K);
                      }
                    }
                    break;
                  case 5:
                    ir(R, R.return);
                    break;
                  case 22:
                    if (R.memoizedState !== null) {
                      Xf(V);
                      continue;
                    }
                }
                B !== null ? ((B.return = R), (W = B)) : Xf(V);
              }
              A = A.sibling;
            }
          e: for (A = null, V = e; ; ) {
            if (V.tag === 5) {
              if (A === null) {
                A = V;
                try {
                  (a = V.stateNode),
                    E
                      ? ((u = a.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((v = V.stateNode),
                        (w = V.memoizedProps.style),
                        (h =
                          w != null && w.hasOwnProperty("display")
                            ? w.display
                            : null),
                        (v.style.display = ku("display", h)));
                } catch (K) {
                  Ee(e, e.return, K);
                }
              }
            } else if (V.tag === 6) {
              if (A === null)
                try {
                  V.stateNode.nodeValue = E ? "" : V.memoizedProps;
                } catch (K) {
                  Ee(e, e.return, K);
                }
            } else if (
              ((V.tag !== 22 && V.tag !== 23) ||
                V.memoizedState === null ||
                V === e) &&
              V.child !== null
            ) {
              (V.child.return = V), (V = V.child);
              continue;
            }
            if (V === e) break e;
            for (; V.sibling === null; ) {
              if (V.return === null || V.return === e) break e;
              A === V && (A = null), (V = V.return);
            }
            A === V && (A = null),
              (V.sibling.return = V.return),
              (V = V.sibling);
          }
        }
        break;
      case 19:
        Mt(t, e), jt(e), s & 4 && Hf(e);
        break;
      case 21:
        break;
      default:
        Mt(t, e), jt(e);
    }
  }
  function jt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (Of(r)) {
              var s = r;
              break e;
            }
            r = r.return;
          }
          throw Error(o(160));
        }
        switch (s.tag) {
          case 5:
            var a = s.stateNode;
            s.flags & 32 && (Sr(a, ""), (s.flags &= -33));
            var u = Bf(e);
            Ma(e, u, a);
            break;
          case 3:
          case 4:
            var h = s.stateNode.containerInfo,
              v = Bf(e);
            Ea(e, v, h);
            break;
          default:
            throw Error(o(161));
        }
      } catch (w) {
        Ee(e, e.return, w);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function $y(e, t, r) {
    (W = e), $f(e);
  }
  function $f(e, t, r) {
    for (var s = (e.mode & 1) !== 0; W !== null; ) {
      var a = W,
        u = a.child;
      if (a.tag === 22 && s) {
        var h = a.memoizedState !== null || hs;
        if (!h) {
          var v = a.alternate,
            w = (v !== null && v.memoizedState !== null) || Ke;
          v = hs;
          var E = Ke;
          if (((hs = h), (Ke = w) && !E))
            for (W = a; W !== null; )
              (h = W),
                (w = h.child),
                h.tag === 22 && h.memoizedState !== null
                  ? Yf(a)
                  : w !== null
                  ? ((w.return = h), (W = w))
                  : Yf(a);
          for (; u !== null; ) (W = u), $f(u), (u = u.sibling);
          (W = a), (hs = v), (Ke = E);
        }
        Kf(e);
      } else
        (a.subtreeFlags & 8772) !== 0 && u !== null
          ? ((u.return = a), (W = u))
          : Kf(e);
    }
  }
  function Kf(e) {
    for (; W !== null; ) {
      var t = W;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ke || ps(5, t);
                break;
              case 1:
                var s = t.stateNode;
                if (t.flags & 4 && !Ke)
                  if (r === null) s.componentDidMount();
                  else {
                    var a =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : Ct(t.type, r.memoizedProps);
                    s.componentDidUpdate(
                      a,
                      r.memoizedState,
                      s.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var u = t.updateQueue;
                u !== null && Kc(t, u, s);
                break;
              case 3:
                var h = t.updateQueue;
                if (h !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  Kc(t, h, r);
                }
                break;
              case 5:
                var v = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = v;
                  var w = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      w.autoFocus && r.focus();
                      break;
                    case "img":
                      w.src && (r.src = w.src);
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
                  var E = t.alternate;
                  if (E !== null) {
                    var A = E.memoizedState;
                    if (A !== null) {
                      var V = A.dehydrated;
                      V !== null && Nr(V);
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
                throw Error(o(163));
            }
          Ke || (t.flags & 512 && Ca(t));
        } catch (R) {
          Ee(t, t.return, R);
        }
      }
      if (t === e) {
        W = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        (r.return = t.return), (W = r);
        break;
      }
      W = t.return;
    }
  }
  function Xf(e) {
    for (; W !== null; ) {
      var t = W;
      if (t === e) {
        W = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        (r.return = t.return), (W = r);
        break;
      }
      W = t.return;
    }
  }
  function Yf(e) {
    for (; W !== null; ) {
      var t = W;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              ps(4, t);
            } catch (w) {
              Ee(t, r, w);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var a = t.return;
              try {
                s.componentDidMount();
              } catch (w) {
                Ee(t, a, w);
              }
            }
            var u = t.return;
            try {
              Ca(t);
            } catch (w) {
              Ee(t, u, w);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Ca(t);
            } catch (w) {
              Ee(t, h, w);
            }
        }
      } catch (w) {
        Ee(t, t.return, w);
      }
      if (t === e) {
        W = null;
        break;
      }
      var v = t.sibling;
      if (v !== null) {
        (v.return = t.return), (W = v);
        break;
      }
      W = t.return;
    }
  }
  var Ky = Math.ceil,
    ms = Z.ReactCurrentDispatcher,
    Ra = Z.ReactCurrentOwner,
    gt = Z.ReactCurrentBatchConfig,
    le = 0,
    Fe = null,
    Ae = null,
    Oe = 0,
    dt = 0,
    sr = tn(0),
    Le = 0,
    ti = null,
    En = 0,
    ys = 0,
    Da = 0,
    ni = null,
    nt = null,
    Aa = 0,
    or = 1 / 0,
    Kt = null,
    gs = !1,
    Va = null,
    ln = null,
    vs = !1,
    un = null,
    ws = 0,
    ri = 0,
    Na = null,
    xs = -1,
    Ss = 0;
  function Ze() {
    return (le & 6) !== 0 ? Re() : xs !== -1 ? xs : (xs = Re());
  }
  function cn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (le & 2) !== 0 && Oe !== 0
      ? Oe & -Oe
      : Ry.transition !== null
      ? (Ss === 0 && (Ss = Ou()), Ss)
      : ((e = he),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Gu(e.type))),
        e);
  }
  function Rt(e, t, r, s) {
    if (50 < ri) throw ((ri = 0), (Na = null), Error(o(185)));
    Mr(e, r, s),
      ((le & 2) === 0 || e !== Fe) &&
        (e === Fe && ((le & 2) === 0 && (ys |= r), Le === 4 && fn(e, Oe)),
        rt(e, s),
        r === 1 &&
          le === 0 &&
          (t.mode & 1) === 0 &&
          ((or = Re() + 500), Qi && rn()));
  }
  function rt(e, t) {
    var r = e.callbackNode;
    Rm(e, t);
    var s = Ai(e, e === Fe ? Oe : 0);
    if (s === 0)
      r !== null && Fu(r), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = s & -s), e.callbackPriority !== t)) {
      if ((r != null && Fu(r), t === 1))
        e.tag === 0 ? My(Qf.bind(null, e)) : Lc(Qf.bind(null, e)),
          ky(function () {
            (le & 6) === 0 && rn();
          }),
          (r = null);
      else {
        switch (Bu(s)) {
          case 1:
            r = co;
            break;
          case 4:
            r = Iu;
            break;
          case 16:
            r = Ei;
            break;
          case 536870912:
            r = zu;
            break;
          default:
            r = Ei;
        }
        r = rd(r, Gf.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = r);
    }
  }
  function Gf(e, t) {
    if (((xs = -1), (Ss = 0), (le & 6) !== 0)) throw Error(o(327));
    var r = e.callbackNode;
    if (ar() && e.callbackNode !== r) return null;
    var s = Ai(e, e === Fe ? Oe : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = Ts(e, s);
    else {
      t = s;
      var a = le;
      le |= 2;
      var u = qf();
      (Fe !== e || Oe !== t) && ((Kt = null), (or = Re() + 500), Rn(e, t));
      do
        try {
          Gy();
          break;
        } catch (v) {
          Zf(e, v);
        }
      while (!0);
      Zo(),
        (ms.current = u),
        (le = a),
        Ae !== null ? (t = 0) : ((Fe = null), (Oe = 0), (t = Le));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((a = fo(e)), a !== 0 && ((s = a), (t = La(e, a)))),
        t === 1)
      )
        throw ((r = ti), Rn(e, 0), fn(e, s), rt(e, Re()), r);
      if (t === 6) fn(e, s);
      else {
        if (
          ((a = e.current.alternate),
          (s & 30) === 0 &&
            !Xy(a) &&
            ((t = Ts(e, s)),
            t === 2 && ((u = fo(e)), u !== 0 && ((s = u), (t = La(e, u)))),
            t === 1))
        )
          throw ((r = ti), Rn(e, 0), fn(e, s), rt(e, Re()), r);
        switch (((e.finishedWork = a), (e.finishedLanes = s), t)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Dn(e, nt, Kt);
            break;
          case 3:
            if (
              (fn(e, s),
              (s & 130023424) === s && ((t = Aa + 500 - Re()), 10 < t))
            ) {
              if (Ai(e, 0) !== 0) break;
              if (((a = e.suspendedLanes), (a & s) !== s)) {
                Ze(), (e.pingedLanes |= e.suspendedLanes & a);
                break;
              }
              e.timeoutHandle = Oo(Dn.bind(null, e, nt, Kt), t);
              break;
            }
            Dn(e, nt, Kt);
            break;
          case 4:
            if ((fn(e, s), (s & 4194240) === s)) break;
            for (t = e.eventTimes, a = -1; 0 < s; ) {
              var h = 31 - Tt(s);
              (u = 1 << h), (h = t[h]), h > a && (a = h), (s &= ~u);
            }
            if (
              ((s = a),
              (s = Re() - s),
              (s =
                (120 > s
                  ? 120
                  : 480 > s
                  ? 480
                  : 1080 > s
                  ? 1080
                  : 1920 > s
                  ? 1920
                  : 3e3 > s
                  ? 3e3
                  : 4320 > s
                  ? 4320
                  : 1960 * Ky(s / 1960)) - s),
              10 < s)
            ) {
              e.timeoutHandle = Oo(Dn.bind(null, e, nt, Kt), s);
              break;
            }
            Dn(e, nt, Kt);
            break;
          case 5:
            Dn(e, nt, Kt);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return rt(e, Re()), e.callbackNode === r ? Gf.bind(null, e) : null;
  }
  function La(e, t) {
    var r = ni;
    return (
      e.current.memoizedState.isDehydrated && (Rn(e, t).flags |= 256),
      (e = Ts(e, t)),
      e !== 2 && ((t = nt), (nt = r), t !== null && _a(t)),
      e
    );
  }
  function _a(e) {
    nt === null ? (nt = e) : nt.push.apply(nt, e);
  }
  function Xy(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var s = 0; s < r.length; s++) {
            var a = r[s],
              u = a.getSnapshot;
            a = a.value;
            try {
              if (!kt(u(), a)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
        (r.return = t), (t = r);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function fn(e, t) {
    for (
      t &= ~Da,
        t &= ~ys,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var r = 31 - Tt(t),
        s = 1 << r;
      (e[r] = -1), (t &= ~s);
    }
  }
  function Qf(e) {
    if ((le & 6) !== 0) throw Error(o(327));
    ar();
    var t = Ai(e, 0);
    if ((t & 1) === 0) return rt(e, Re()), null;
    var r = Ts(e, t);
    if (e.tag !== 0 && r === 2) {
      var s = fo(e);
      s !== 0 && ((t = s), (r = La(e, s)));
    }
    if (r === 1) throw ((r = ti), Rn(e, 0), fn(e, t), rt(e, Re()), r);
    if (r === 6) throw Error(o(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Dn(e, nt, Kt),
      rt(e, Re()),
      null
    );
  }
  function ja(e, t) {
    var r = le;
    le |= 1;
    try {
      return e(t);
    } finally {
      (le = r), le === 0 && ((or = Re() + 500), Qi && rn());
    }
  }
  function Mn(e) {
    un !== null && un.tag === 0 && (le & 6) === 0 && ar();
    var t = le;
    le |= 1;
    var r = gt.transition,
      s = he;
    try {
      if (((gt.transition = null), (he = 1), e)) return e();
    } finally {
      (he = s), (gt.transition = r), (le = t), (le & 6) === 0 && rn();
    }
  }
  function Fa() {
    (dt = sr.current), we(sr);
  }
  function Rn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), Ty(r)), Ae !== null))
      for (r = Ae.return; r !== null; ) {
        var s = r;
        switch ((Ko(s), s.tag)) {
          case 1:
            (s = s.type.childContextTypes), s != null && Yi();
            break;
          case 3:
            nr(), we(be), we(He), ia();
            break;
          case 5:
            na(s);
            break;
          case 4:
            nr();
            break;
          case 13:
            we(ke);
            break;
          case 19:
            we(ke);
            break;
          case 10:
            qo(s.type._context);
            break;
          case 22:
          case 23:
            Fa();
        }
        r = r.return;
      }
    if (
      ((Fe = e),
      (Ae = e = dn(e.current, null)),
      (Oe = dt = t),
      (Le = 0),
      (ti = null),
      (Da = ys = En = 0),
      (nt = ni = null),
      kn !== null)
    ) {
      for (t = 0; t < kn.length; t++)
        if (((r = kn[t]), (s = r.interleaved), s !== null)) {
          r.interleaved = null;
          var a = s.next,
            u = r.pending;
          if (u !== null) {
            var h = u.next;
            (u.next = a), (s.next = h);
          }
          r.pending = s;
        }
      kn = null;
    }
    return e;
  }
  function Zf(e, t) {
    do {
      var r = Ae;
      try {
        if ((Zo(), (ss.current = us), os)) {
          for (var s = Pe.memoizedState; s !== null; ) {
            var a = s.queue;
            a !== null && (a.pending = null), (s = s.next);
          }
          os = !1;
        }
        if (
          ((Cn = 0),
          (je = Ne = Pe = null),
          (Qr = !1),
          (Zr = 0),
          (Ra.current = null),
          r === null || r.return === null)
        ) {
          (Le = 1), (ti = t), (Ae = null);
          break;
        }
        e: {
          var u = e,
            h = r.return,
            v = r,
            w = t;
          if (
            ((t = Oe),
            (v.flags |= 32768),
            w !== null && typeof w == "object" && typeof w.then == "function")
          ) {
            var E = w,
              A = v,
              V = A.tag;
            if ((A.mode & 1) === 0 && (V === 0 || V === 11 || V === 15)) {
              var R = A.alternate;
              R
                ? ((A.updateQueue = R.updateQueue),
                  (A.memoizedState = R.memoizedState),
                  (A.lanes = R.lanes))
                : ((A.updateQueue = null), (A.memoizedState = null));
            }
            var B = Sf(h);
            if (B !== null) {
              (B.flags &= -257),
                Tf(B, h, v, u, t),
                B.mode & 1 && xf(u, E, t),
                (t = B),
                (w = E);
              var $ = t.updateQueue;
              if ($ === null) {
                var K = new Set();
                K.add(w), (t.updateQueue = K);
              } else $.add(w);
              break e;
            } else {
              if ((t & 1) === 0) {
                xf(u, E, t), Ia();
                break e;
              }
              w = Error(o(426));
            }
          } else if (Se && v.mode & 1) {
            var De = Sf(h);
            if (De !== null) {
              (De.flags & 65536) === 0 && (De.flags |= 256),
                Tf(De, h, v, u, t),
                Go(rr(w, v));
              break e;
            }
          }
          (u = w = rr(w, v)),
            Le !== 4 && (Le = 2),
            ni === null ? (ni = [u]) : ni.push(u),
            (u = h);
          do {
            switch (u.tag) {
              case 3:
                (u.flags |= 65536), (t &= -t), (u.lanes |= t);
                var P = vf(u, w, t);
                $c(u, P);
                break e;
              case 1:
                v = w;
                var S = u.type,
                  C = u.stateNode;
                if (
                  (u.flags & 128) === 0 &&
                  (typeof S.getDerivedStateFromError == "function" ||
                    (C !== null &&
                      typeof C.componentDidCatch == "function" &&
                      (ln === null || !ln.has(C))))
                ) {
                  (u.flags |= 65536), (t &= -t), (u.lanes |= t);
                  var _ = wf(u, v, t);
                  $c(u, _);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        bf(r);
      } catch (Y) {
        (t = Y), Ae === r && r !== null && (Ae = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function qf() {
    var e = ms.current;
    return (ms.current = us), e === null ? us : e;
  }
  function Ia() {
    (Le === 0 || Le === 3 || Le === 2) && (Le = 4),
      Fe === null ||
        ((En & 268435455) === 0 && (ys & 268435455) === 0) ||
        fn(Fe, Oe);
  }
  function Ts(e, t) {
    var r = le;
    le |= 2;
    var s = qf();
    (Fe !== e || Oe !== t) && ((Kt = null), Rn(e, t));
    do
      try {
        Yy();
        break;
      } catch (a) {
        Zf(e, a);
      }
    while (!0);
    if ((Zo(), (le = r), (ms.current = s), Ae !== null)) throw Error(o(261));
    return (Fe = null), (Oe = 0), Le;
  }
  function Yy() {
    for (; Ae !== null; ) Jf(Ae);
  }
  function Gy() {
    for (; Ae !== null && !wm(); ) Jf(Ae);
  }
  function Jf(e) {
    var t = nd(e.alternate, e, dt);
    (e.memoizedProps = e.pendingProps),
      t === null ? bf(e) : (Ae = t),
      (Ra.current = null);
  }
  function bf(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = By(r, t, dt)), r !== null)) {
          Ae = r;
          return;
        }
      } else {
        if (((r = Uy(r, t)), r !== null)) {
          (r.flags &= 32767), (Ae = r);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Le = 6), (Ae = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ae = t;
        return;
      }
      Ae = t = e;
    } while (t !== null);
    Le === 0 && (Le = 5);
  }
  function Dn(e, t, r) {
    var s = he,
      a = gt.transition;
    try {
      (gt.transition = null), (he = 1), Qy(e, t, r, s);
    } finally {
      (gt.transition = a), (he = s);
    }
    return null;
  }
  function Qy(e, t, r, s) {
    do ar();
    while (un !== null);
    if ((le & 6) !== 0) throw Error(o(327));
    r = e.finishedWork;
    var a = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
      throw Error(o(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var u = r.lanes | r.childLanes;
    if (
      (Dm(e, u),
      e === Fe && ((Ae = Fe = null), (Oe = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        vs ||
        ((vs = !0),
        rd(Ei, function () {
          return ar(), null;
        })),
      (u = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || u)
    ) {
      (u = gt.transition), (gt.transition = null);
      var h = he;
      he = 1;
      var v = le;
      (le |= 4),
        (Ra.current = null),
        Wy(e, r),
        Wf(r, e),
        my(Io),
        (Li = !!Fo),
        (Io = Fo = null),
        (e.current = r),
        $y(r),
        xm(),
        (le = v),
        (he = h),
        (gt.transition = u);
    } else e.current = r;
    if (
      (vs && ((vs = !1), (un = e), (ws = a)),
      (u = e.pendingLanes),
      u === 0 && (ln = null),
      km(r.stateNode),
      rt(e, Re()),
      t !== null)
    )
      for (s = e.onRecoverableError, r = 0; r < t.length; r++)
        (a = t[r]), s(a.value, { componentStack: a.stack, digest: a.digest });
    if (gs) throw ((gs = !1), (e = Va), (Va = null), e);
    return (
      (ws & 1) !== 0 && e.tag !== 0 && ar(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === Na ? ri++ : ((ri = 0), (Na = e))) : (ri = 0),
      rn(),
      null
    );
  }
  function ar() {
    if (un !== null) {
      var e = Bu(ws),
        t = gt.transition,
        r = he;
      try {
        if (((gt.transition = null), (he = 16 > e ? 16 : e), un === null))
          var s = !1;
        else {
          if (((e = un), (un = null), (ws = 0), (le & 6) !== 0))
            throw Error(o(331));
          var a = le;
          for (le |= 4, W = e.current; W !== null; ) {
            var u = W,
              h = u.child;
            if ((W.flags & 16) !== 0) {
              var v = u.deletions;
              if (v !== null) {
                for (var w = 0; w < v.length; w++) {
                  var E = v[w];
                  for (W = E; W !== null; ) {
                    var A = W;
                    switch (A.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ei(8, A, u);
                    }
                    var V = A.child;
                    if (V !== null) (V.return = A), (W = V);
                    else
                      for (; W !== null; ) {
                        A = W;
                        var R = A.sibling,
                          B = A.return;
                        if ((zf(A), A === E)) {
                          W = null;
                          break;
                        }
                        if (R !== null) {
                          (R.return = B), (W = R);
                          break;
                        }
                        W = B;
                      }
                  }
                }
                var $ = u.alternate;
                if ($ !== null) {
                  var K = $.child;
                  if (K !== null) {
                    $.child = null;
                    do {
                      var De = K.sibling;
                      (K.sibling = null), (K = De);
                    } while (K !== null);
                  }
                }
                W = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && h !== null)
              (h.return = u), (W = h);
            else
              e: for (; W !== null; ) {
                if (((u = W), (u.flags & 2048) !== 0))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ei(9, u, u.return);
                  }
                var P = u.sibling;
                if (P !== null) {
                  (P.return = u.return), (W = P);
                  break e;
                }
                W = u.return;
              }
          }
          var S = e.current;
          for (W = S; W !== null; ) {
            h = W;
            var C = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && C !== null)
              (C.return = h), (W = C);
            else
              e: for (h = S; W !== null; ) {
                if (((v = W), (v.flags & 2048) !== 0))
                  try {
                    switch (v.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ps(9, v);
                    }
                  } catch (Y) {
                    Ee(v, v.return, Y);
                  }
                if (v === h) {
                  W = null;
                  break e;
                }
                var _ = v.sibling;
                if (_ !== null) {
                  (_.return = v.return), (W = _);
                  break e;
                }
                W = v.return;
              }
          }
          if (
            ((le = a),
            rn(),
            Vt && typeof Vt.onPostCommitFiberRoot == "function")
          )
            try {
              Vt.onPostCommitFiberRoot(Mi, e);
            } catch {}
          s = !0;
        }
        return s;
      } finally {
        (he = r), (gt.transition = t);
      }
    }
    return !1;
  }
  function ed(e, t, r) {
    (t = rr(r, t)),
      (t = vf(e, t, 1)),
      (e = on(e, t, 1)),
      (t = Ze()),
      e !== null && (Mr(e, 1, t), rt(e, t));
  }
  function Ee(e, t, r) {
    if (e.tag === 3) ed(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ed(t, e, r);
          break;
        } else if (t.tag === 1) {
          var s = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof s.componentDidCatch == "function" &&
              (ln === null || !ln.has(s)))
          ) {
            (e = rr(r, e)),
              (e = wf(t, e, 1)),
              (t = on(t, e, 1)),
              (e = Ze()),
              t !== null && (Mr(t, 1, e), rt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Zy(e, t, r) {
    var s = e.pingCache;
    s !== null && s.delete(t),
      (t = Ze()),
      (e.pingedLanes |= e.suspendedLanes & r),
      Fe === e &&
        (Oe & r) === r &&
        (Le === 4 || (Le === 3 && (Oe & 130023424) === Oe && 500 > Re() - Aa)
          ? Rn(e, 0)
          : (Da |= r)),
      rt(e, t);
  }
  function td(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Di), (Di <<= 1), (Di & 130023424) === 0 && (Di = 4194304)));
    var r = Ze();
    (e = Ht(e, t)), e !== null && (Mr(e, t, r), rt(e, r));
  }
  function qy(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), td(e, r);
  }
  function Jy(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var s = e.stateNode,
          a = e.memoizedState;
        a !== null && (r = a.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    s !== null && s.delete(t), td(e, r);
  }
  var nd;
  nd = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || be.current) tt = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0)
          return (tt = !1), Oy(e, t, r);
        tt = (e.flags & 131072) !== 0;
      }
    else (tt = !1), Se && (t.flags & 1048576) !== 0 && _c(t, qi, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var s = t.type;
        ds(e, t), (e = t.pendingProps);
        var a = Qn(t, He.current);
        tr(t, r), (a = aa(null, t, s, e, a, r));
        var u = la();
        return (
          (t.flags |= 1),
          typeof a == "object" &&
          a !== null &&
          typeof a.render == "function" &&
          a.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              et(s) ? ((u = !0), Gi(t)) : (u = !1),
              (t.memoizedState =
                a.state !== null && a.state !== void 0 ? a.state : null),
              ea(t),
              (a.updater = cs),
              (t.stateNode = a),
              (a._reactInternals = t),
              pa(t, s, e, r),
              (t = va(null, t, s, !0, u, r)))
            : ((t.tag = 0), Se && u && $o(t), Qe(null, t, a, r), (t = t.child)),
          t
        );
      case 16:
        s = t.elementType;
        e: {
          switch (
            (ds(e, t),
            (e = t.pendingProps),
            (a = s._init),
            (s = a(s._payload)),
            (t.type = s),
            (a = t.tag = eg(s)),
            (e = Ct(s, e)),
            a)
          ) {
            case 0:
              t = ga(null, t, s, e, r);
              break e;
            case 1:
              t = Rf(null, t, s, e, r);
              break e;
            case 11:
              t = kf(null, t, s, e, r);
              break e;
            case 14:
              t = Pf(null, t, s, Ct(s.type, e), r);
              break e;
          }
          throw Error(o(306, s, ""));
        }
        return t;
      case 0:
        return (
          (s = t.type),
          (a = t.pendingProps),
          (a = t.elementType === s ? a : Ct(s, a)),
          ga(e, t, s, a, r)
        );
      case 1:
        return (
          (s = t.type),
          (a = t.pendingProps),
          (a = t.elementType === s ? a : Ct(s, a)),
          Rf(e, t, s, a, r)
        );
      case 3:
        e: {
          if ((Df(t), e === null)) throw Error(o(387));
          (s = t.pendingProps),
            (u = t.memoizedState),
            (a = u.element),
            Wc(e, t),
            rs(t, s, null, r);
          var h = t.memoizedState;
          if (((s = h.element), u.isDehydrated))
            if (
              ((u = {
                element: s,
                isDehydrated: !1,
                cache: h.cache,
                pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
                transitions: h.transitions,
              }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              (a = rr(Error(o(423)), t)), (t = Af(e, t, s, r, a));
              break e;
            } else if (s !== a) {
              (a = rr(Error(o(424)), t)), (t = Af(e, t, s, r, a));
              break e;
            } else
              for (
                ft = en(t.stateNode.containerInfo.firstChild),
                  ct = t,
                  Se = !0,
                  Pt = null,
                  r = Uc(t, null, s, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((Jn(), s === a)) {
              t = $t(e, t, r);
              break e;
            }
            Qe(e, t, s, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Xc(t),
          e === null && Yo(t),
          (s = t.type),
          (a = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (h = a.children),
          zo(s, a) ? (h = null) : u !== null && zo(s, u) && (t.flags |= 32),
          Mf(e, t),
          Qe(e, t, h, r),
          t.child
        );
      case 6:
        return e === null && Yo(t), null;
      case 13:
        return Vf(e, t, r);
      case 4:
        return (
          ta(t, t.stateNode.containerInfo),
          (s = t.pendingProps),
          e === null ? (t.child = bn(t, null, s, r)) : Qe(e, t, s, r),
          t.child
        );
      case 11:
        return (
          (s = t.type),
          (a = t.pendingProps),
          (a = t.elementType === s ? a : Ct(s, a)),
          kf(e, t, s, a, r)
        );
      case 7:
        return Qe(e, t, t.pendingProps, r), t.child;
      case 8:
        return Qe(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return Qe(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (
            ((s = t.type._context),
            (a = t.pendingProps),
            (u = t.memoizedProps),
            (h = a.value),
            ye(es, s._currentValue),
            (s._currentValue = h),
            u !== null)
          )
            if (kt(u.value, h)) {
              if (u.children === a.children && !be.current) {
                t = $t(e, t, r);
                break e;
              }
            } else
              for (u = t.child, u !== null && (u.return = t); u !== null; ) {
                var v = u.dependencies;
                if (v !== null) {
                  h = u.child;
                  for (var w = v.firstContext; w !== null; ) {
                    if (w.context === s) {
                      if (u.tag === 1) {
                        (w = Wt(-1, r & -r)), (w.tag = 2);
                        var E = u.updateQueue;
                        if (E !== null) {
                          E = E.shared;
                          var A = E.pending;
                          A === null
                            ? (w.next = w)
                            : ((w.next = A.next), (A.next = w)),
                            (E.pending = w);
                        }
                      }
                      (u.lanes |= r),
                        (w = u.alternate),
                        w !== null && (w.lanes |= r),
                        Jo(u.return, r, t),
                        (v.lanes |= r);
                      break;
                    }
                    w = w.next;
                  }
                } else if (u.tag === 10) h = u.type === t.type ? null : u.child;
                else if (u.tag === 18) {
                  if (((h = u.return), h === null)) throw Error(o(341));
                  (h.lanes |= r),
                    (v = h.alternate),
                    v !== null && (v.lanes |= r),
                    Jo(h, r, t),
                    (h = u.sibling);
                } else h = u.child;
                if (h !== null) h.return = u;
                else
                  for (h = u; h !== null; ) {
                    if (h === t) {
                      h = null;
                      break;
                    }
                    if (((u = h.sibling), u !== null)) {
                      (u.return = h.return), (h = u);
                      break;
                    }
                    h = h.return;
                  }
                u = h;
              }
          Qe(e, t, a.children, r), (t = t.child);
        }
        return t;
      case 9:
        return (
          (a = t.type),
          (s = t.pendingProps.children),
          tr(t, r),
          (a = mt(a)),
          (s = s(a)),
          (t.flags |= 1),
          Qe(e, t, s, r),
          t.child
        );
      case 14:
        return (
          (s = t.type),
          (a = Ct(s, t.pendingProps)),
          (a = Ct(s.type, a)),
          Pf(e, t, s, a, r)
        );
      case 15:
        return Cf(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (s = t.type),
          (a = t.pendingProps),
          (a = t.elementType === s ? a : Ct(s, a)),
          ds(e, t),
          (t.tag = 1),
          et(s) ? ((e = !0), Gi(t)) : (e = !1),
          tr(t, r),
          yf(t, s, a),
          pa(t, s, a, r),
          va(null, t, s, !0, e, r)
        );
      case 19:
        return Lf(e, t, r);
      case 22:
        return Ef(e, t, r);
    }
    throw Error(o(156, t.tag));
  };
  function rd(e, t) {
    return ju(e, t);
  }
  function by(e, t, r, s) {
    (this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = s),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function vt(e, t, r, s) {
    return new by(e, t, r, s);
  }
  function za(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function eg(e) {
    if (typeof e == "function") return za(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ot)) return 11;
      if (e === at) return 14;
    }
    return 2;
  }
  function dn(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = vt(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    );
  }
  function ks(e, t, r, s, a, u) {
    var h = 2;
    if (((s = e), typeof e == "function")) za(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else
      e: switch (e) {
        case ee:
          return An(r.children, a, u, t);
        case Q:
          (h = 8), (a |= 8);
          break;
        case pe:
          return (
            (e = vt(12, r, t, a | 2)), (e.elementType = pe), (e.lanes = u), e
          );
        case Ye:
          return (e = vt(13, r, t, a)), (e.elementType = Ye), (e.lanes = u), e;
        case Je:
          return (e = vt(19, r, t, a)), (e.elementType = Je), (e.lanes = u), e;
        case re:
          return Ps(r, a, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ge:
                h = 10;
                break e;
              case Ue:
                h = 9;
                break e;
              case ot:
                h = 11;
                break e;
              case at:
                h = 14;
                break e;
              case Ge:
                (h = 16), (s = null);
                break e;
            }
          throw Error(o(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = vt(h, r, t, a)), (t.elementType = e), (t.type = s), (t.lanes = u), t
    );
  }
  function An(e, t, r, s) {
    return (e = vt(7, e, s, t)), (e.lanes = r), e;
  }
  function Ps(e, t, r, s) {
    return (
      (e = vt(22, e, s, t)),
      (e.elementType = re),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Oa(e, t, r) {
    return (e = vt(6, e, null, t)), (e.lanes = r), e;
  }
  function Ba(e, t, r) {
    return (
      (t = vt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function tg(e, t, r, s, a) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = ho(0)),
      (this.expirationTimes = ho(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ho(0)),
      (this.identifierPrefix = s),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Ua(e, t, r, s, a, u, h, v, w) {
    return (
      (e = new tg(e, t, r, v, w)),
      t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
      (u = vt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: s,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      ea(u),
      e
    );
  }
  function ng(e, t, r) {
    var s =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: q,
      key: s == null ? null : "" + s,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function id(e) {
    if (!e) return nn;
    e = e._reactInternals;
    e: {
      if (vn(e) !== e || e.tag !== 1) throw Error(o(170));
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
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (et(r)) return Vc(e, r, t);
    }
    return t;
  }
  function sd(e, t, r, s, a, u, h, v, w) {
    return (
      (e = Ua(r, s, !0, e, a, u, h, v, w)),
      (e.context = id(null)),
      (r = e.current),
      (s = Ze()),
      (a = cn(r)),
      (u = Wt(s, a)),
      (u.callback = t ?? null),
      on(r, u, a),
      (e.current.lanes = a),
      Mr(e, a, s),
      rt(e, s),
      e
    );
  }
  function Cs(e, t, r, s) {
    var a = t.current,
      u = Ze(),
      h = cn(a);
    return (
      (r = id(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = Wt(u, h)),
      (t.payload = { element: e }),
      (s = s === void 0 ? null : s),
      s !== null && (t.callback = s),
      (e = on(a, t, h)),
      e !== null && (Rt(e, a, h, u), ns(e, a, h)),
      h
    );
  }
  function Es(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function od(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Ha(e, t) {
    od(e, t), (e = e.alternate) && od(e, t);
  }
  function rg() {
    return null;
  }
  var ad =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Wa(e) {
    this._internalRoot = e;
  }
  (Ms.prototype.render = Wa.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      Cs(e, t, null, null);
    }),
    (Ms.prototype.unmount = Wa.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Mn(function () {
            Cs(null, e, null, null);
          }),
            (t[zt] = null);
        }
      });
  function Ms(e) {
    this._internalRoot = e;
  }
  Ms.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Wu();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < qt.length && t !== 0 && t < qt[r].priority; r++);
      qt.splice(r, 0, e), r === 0 && Xu(e);
    }
  };
  function $a(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Rs(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function ld() {}
  function ig(e, t, r, s, a) {
    if (a) {
      if (typeof s == "function") {
        var u = s;
        s = function () {
          var E = Es(h);
          u.call(E);
        };
      }
      var h = sd(t, s, e, 0, null, !1, !1, "", ld);
      return (
        (e._reactRootContainer = h),
        (e[zt] = h.current),
        Ur(e.nodeType === 8 ? e.parentNode : e),
        Mn(),
        h
      );
    }
    for (; (a = e.lastChild); ) e.removeChild(a);
    if (typeof s == "function") {
      var v = s;
      s = function () {
        var E = Es(w);
        v.call(E);
      };
    }
    var w = Ua(e, 0, !1, null, null, !1, !1, "", ld);
    return (
      (e._reactRootContainer = w),
      (e[zt] = w.current),
      Ur(e.nodeType === 8 ? e.parentNode : e),
      Mn(function () {
        Cs(t, w, r, s);
      }),
      w
    );
  }
  function Ds(e, t, r, s, a) {
    var u = r._reactRootContainer;
    if (u) {
      var h = u;
      if (typeof a == "function") {
        var v = a;
        a = function () {
          var w = Es(h);
          v.call(w);
        };
      }
      Cs(t, h, e, a);
    } else h = ig(r, t, e, a, s);
    return Es(h);
  }
  (Uu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Er(t.pendingLanes);
          r !== 0 &&
            (po(t, r | 1),
            rt(t, Re()),
            (le & 6) === 0 && ((or = Re() + 500), rn()));
        }
        break;
      case 13:
        Mn(function () {
          var s = Ht(e, 1);
          if (s !== null) {
            var a = Ze();
            Rt(s, e, 1, a);
          }
        }),
          Ha(e, 1);
    }
  }),
    (mo = function (e) {
      if (e.tag === 13) {
        var t = Ht(e, 134217728);
        if (t !== null) {
          var r = Ze();
          Rt(t, e, 134217728, r);
        }
        Ha(e, 134217728);
      }
    }),
    (Hu = function (e) {
      if (e.tag === 13) {
        var t = cn(e),
          r = Ht(e, t);
        if (r !== null) {
          var s = Ze();
          Rt(r, e, t, s);
        }
        Ha(e, t);
      }
    }),
    (Wu = function () {
      return he;
    }),
    ($u = function (e, t) {
      var r = he;
      try {
        return (he = e), t();
      } finally {
        he = r;
      }
    }),
    (oo = function (e, t, r) {
      switch (t) {
        case "input":
          if ((Js(e, r), (t = r.name), r.type === "radio" && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var s = r[t];
              if (s !== e && s.form === e.form) {
                var a = Xi(s);
                if (!a) throw Error(o(90));
                pu(s), Js(s, a);
              }
            }
          }
          break;
        case "textarea":
          wu(e, r);
          break;
        case "select":
          (t = r.value), t != null && In(e, !!r.multiple, t, !1);
      }
    }),
    (Ru = ja),
    (Du = Mn);
  var sg = { usingClientEntryPoint: !1, Events: [$r, Yn, Xi, Eu, Mu, ja] },
    ii = {
      findFiberByHostInstance: wn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    og = {
      bundleType: ii.bundleType,
      version: ii.version,
      rendererPackageName: ii.rendererPackageName,
      rendererConfig: ii.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Z.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Lu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: ii.findFiberByHostInstance || rg,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var As = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!As.isDisabled && As.supportsFiber)
      try {
        (Mi = As.inject(og)), (Vt = As);
      } catch {}
  }
  return (
    (it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sg),
    (it.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!$a(t)) throw Error(o(200));
      return ng(e, t, null, r);
    }),
    (it.createRoot = function (e, t) {
      if (!$a(e)) throw Error(o(299));
      var r = !1,
        s = "",
        a = ad;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        (t = Ua(e, 1, !1, null, null, r, !1, s, a)),
        (e[zt] = t.current),
        Ur(e.nodeType === 8 ? e.parentNode : e),
        new Wa(t)
      );
    }),
    (it.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(o(188))
          : ((e = Object.keys(e).join(",")), Error(o(268, e)));
      return (e = Lu(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (it.flushSync = function (e) {
      return Mn(e);
    }),
    (it.hydrate = function (e, t, r) {
      if (!Rs(t)) throw Error(o(200));
      return Ds(null, e, t, !0, r);
    }),
    (it.hydrateRoot = function (e, t, r) {
      if (!$a(e)) throw Error(o(405));
      var s = (r != null && r.hydratedSources) || null,
        a = !1,
        u = "",
        h = ad;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (a = !0),
          r.identifierPrefix !== void 0 && (u = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (h = r.onRecoverableError)),
        (t = sd(t, null, e, 1, r ?? null, a, !1, u, h)),
        (e[zt] = t.current),
        Ur(e),
        s)
      )
        for (e = 0; e < s.length; e++)
          (r = s[e]),
            (a = r._getVersion),
            (a = a(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, a])
              : t.mutableSourceEagerHydrationData.push(r, a);
      return new Ms(t);
    }),
    (it.render = function (e, t, r) {
      if (!Rs(t)) throw Error(o(200));
      return Ds(null, e, t, !1, r);
    }),
    (it.unmountComponentAtNode = function (e) {
      if (!Rs(e)) throw Error(o(40));
      return e._reactRootContainer
        ? (Mn(function () {
            Ds(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[zt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (it.unstable_batchedUpdates = ja),
    (it.unstable_renderSubtreeIntoContainer = function (e, t, r, s) {
      if (!Rs(r)) throw Error(o(200));
      if (e == null || e._reactInternals === void 0) throw Error(o(38));
      return Ds(e, t, r, !1, s);
    }),
    (it.version = "18.3.1-next-f1338f8080-20240426"),
    it
  );
}
var yd;
function pg() {
  if (yd) return Ya.exports;
  yd = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), (Ya.exports = hg()), Ya.exports;
}
var gd;
function mg() {
  if (gd) return Vs;
  gd = 1;
  var n = pg();
  return (Vs.createRoot = n.createRoot), (Vs.hydrateRoot = n.hydrateRoot), Vs;
}
var yg = mg(),
  H = Ll();
const _l = H.createContext({});
function jl(n) {
  const i = H.useRef(null);
  return i.current === null && (i.current = n()), i.current;
}
const Fl = typeof window < "u",
  Nh = Fl ? H.useLayoutEffect : H.useEffect,
  Ys = H.createContext(null);
function Il(n, i) {
  n.indexOf(i) === -1 && n.push(i);
}
function zl(n, i) {
  const o = n.indexOf(i);
  o > -1 && n.splice(o, 1);
}
const Xt = (n, i, o) => (o > i ? i : o < n ? n : o);
let Ol = () => {};
const Yt = {},
  Lh = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
function _h(n) {
  return typeof n == "object" && n !== null;
}
const jh = (n) => /^0[^.\s]+$/u.test(n);
function Bl(n) {
  let i;
  return () => (i === void 0 && (i = n()), i);
}
const St = (n) => n,
  gg = (n, i) => (o) => i(n(o)),
  gi = (...n) => n.reduce(gg),
  di = (n, i, o) => {
    const l = i - n;
    return l === 0 ? 1 : (o - n) / l;
  };
class Ul {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return Il(this.subscriptions, i), () => zl(this.subscriptions, i);
  }
  notify(i, o, l) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](i, o, l);
      else
        for (let d = 0; d < c; d++) {
          const f = this.subscriptions[d];
          f && f(i, o, l);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Ft = (n) => n * 1e3,
  xt = (n) => n / 1e3;
function Fh(n, i) {
  return i ? n * (1e3 / i) : 0;
}
const Ih = (n, i, o) =>
    (((1 - 3 * o + 3 * i) * n + (3 * o - 6 * i)) * n + 3 * i) * n,
  vg = 1e-7,
  wg = 12;
function xg(n, i, o, l, c) {
  let d,
    f,
    p = 0;
  do (f = i + (o - i) / 2), (d = Ih(f, l, c) - n), d > 0 ? (o = f) : (i = f);
  while (Math.abs(d) > vg && ++p < wg);
  return f;
}
function vi(n, i, o, l) {
  if (n === i && o === l) return St;
  const c = (d) => xg(d, 0, 1, n, o);
  return (d) => (d === 0 || d === 1 ? d : Ih(c(d), i, l));
}
const zh = (n) => (i) => i <= 0.5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2,
  Oh = (n) => (i) => 1 - n(1 - i),
  Bh = vi(0.33, 1.53, 0.69, 0.99),
  Hl = Oh(Bh),
  Uh = zh(Hl),
  Hh = (n) =>
    (n *= 2) < 1 ? 0.5 * Hl(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1))),
  Wl = (n) => 1 - Math.sin(Math.acos(n)),
  Wh = Oh(Wl),
  $h = zh(Wl),
  Sg = vi(0.42, 0, 1, 1),
  Tg = vi(0, 0, 0.58, 1),
  Kh = vi(0.42, 0, 0.58, 1),
  kg = (n) => Array.isArray(n) && typeof n[0] != "number",
  Xh = (n) => Array.isArray(n) && typeof n[0] == "number",
  Pg = {
    linear: St,
    easeIn: Sg,
    easeInOut: Kh,
    easeOut: Tg,
    circIn: Wl,
    circInOut: $h,
    circOut: Wh,
    backIn: Hl,
    backInOut: Uh,
    backOut: Bh,
    anticipate: Hh,
  },
  Cg = (n) => typeof n == "string",
  vd = (n) => {
    if (Xh(n)) {
      Ol(n.length === 4);
      const [i, o, l, c] = n;
      return vi(i, o, l, c);
    } else if (Cg(n)) return Pg[n];
    return n;
  },
  Ns = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function Eg(n, i) {
  let o = new Set(),
    l = new Set(),
    c = !1,
    d = !1;
  const f = new WeakSet();
  let p = { delta: 0, timestamp: 0, isProcessing: !1 };
  function m(y) {
    f.has(y) && (g.schedule(y), n()), y(p);
  }
  const g = {
    schedule: (y, x = !1, T = !1) => {
      const N = T && c ? o : l;
      return x && f.add(y), N.has(y) || N.add(y), y;
    },
    cancel: (y) => {
      l.delete(y), f.delete(y);
    },
    process: (y) => {
      if (((p = y), c)) {
        d = !0;
        return;
      }
      (c = !0),
        ([o, l] = [l, o]),
        o.forEach(m),
        o.clear(),
        (c = !1),
        d && ((d = !1), g.process(y));
    },
  };
  return g;
}
const Mg = 40;
function Yh(n, i) {
  let o = !1,
    l = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (o = !0),
    f = Ns.reduce((z, Z) => ((z[Z] = Eg(d)), z), {}),
    {
      setup: p,
      read: m,
      resolveKeyframes: g,
      preUpdate: y,
      update: x,
      preRender: T,
      render: M,
      postRender: N,
    } = f,
    L = () => {
      const z = Yt.useManualTiming ? c.timestamp : performance.now();
      (o = !1),
        Yt.useManualTiming ||
          (c.delta = l ? 1e3 / 60 : Math.max(Math.min(z - c.timestamp, Mg), 1)),
        (c.timestamp = z),
        (c.isProcessing = !0),
        p.process(c),
        m.process(c),
        g.process(c),
        y.process(c),
        x.process(c),
        T.process(c),
        M.process(c),
        N.process(c),
        (c.isProcessing = !1),
        o && i && ((l = !1), n(L));
    },
    j = () => {
      (o = !0), (l = !0), c.isProcessing || n(L);
    };
  return {
    schedule: Ns.reduce((z, Z) => {
      const X = f[Z];
      return (
        (z[Z] = (q, ee = !1, Q = !1) => (o || j(), X.schedule(q, ee, Q))), z
      );
    }, {}),
    cancel: (z) => {
      for (let Z = 0; Z < Ns.length; Z++) f[Ns[Z]].cancel(z);
    },
    state: c,
    steps: f,
  };
}
const {
  schedule: Te,
  cancel: mn,
  state: Be,
  steps: Za,
} = Yh(typeof requestAnimationFrame < "u" ? requestAnimationFrame : St, !0);
let Is;
function Rg() {
  Is = void 0;
}
const st = {
    now: () => (
      Is === void 0 &&
        st.set(
          Be.isProcessing || Yt.useManualTiming
            ? Be.timestamp
            : performance.now()
        ),
      Is
    ),
    set: (n) => {
      (Is = n), queueMicrotask(Rg);
    },
  },
  Gh = (n) => (i) => typeof i == "string" && i.startsWith(n),
  Qh = Gh("--"),
  Dg = Gh("var(--"),
  $l = (n) => (Dg(n) ? Ag.test(n.split("/*")[0].trim()) : !1),
  Ag =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  gr = {
    test: (n) => typeof n == "number",
    parse: parseFloat,
    transform: (n) => n,
  },
  hi = { ...gr, transform: (n) => Xt(0, 1, n) },
  Ls = { ...gr, default: 1 },
  li = (n) => Math.round(n * 1e5) / 1e5,
  Kl = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Vg(n) {
  return n == null;
}
const Ng =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Xl = (n, i) => (o) =>
    !!(
      (typeof o == "string" && Ng.test(o) && o.startsWith(n)) ||
      (i && !Vg(o) && Object.prototype.hasOwnProperty.call(o, i))
    ),
  Zh = (n, i, o) => (l) => {
    if (typeof l != "string") return l;
    const [c, d, f, p] = l.match(Kl);
    return {
      [n]: parseFloat(c),
      [i]: parseFloat(d),
      [o]: parseFloat(f),
      alpha: p !== void 0 ? parseFloat(p) : 1,
    };
  },
  Lg = (n) => Xt(0, 255, n),
  qa = { ...gr, transform: (n) => Math.round(Lg(n)) },
  Ln = {
    test: Xl("rgb", "red"),
    parse: Zh("red", "green", "blue"),
    transform: ({ red: n, green: i, blue: o, alpha: l = 1 }) =>
      "rgba(" +
      qa.transform(n) +
      ", " +
      qa.transform(i) +
      ", " +
      qa.transform(o) +
      ", " +
      li(hi.transform(l)) +
      ")",
  };
function _g(n) {
  let i = "",
    o = "",
    l = "",
    c = "";
  return (
    n.length > 5
      ? ((i = n.substring(1, 3)),
        (o = n.substring(3, 5)),
        (l = n.substring(5, 7)),
        (c = n.substring(7, 9)))
      : ((i = n.substring(1, 2)),
        (o = n.substring(2, 3)),
        (l = n.substring(3, 4)),
        (c = n.substring(4, 5)),
        (i += i),
        (o += o),
        (l += l),
        (c += c)),
    {
      red: parseInt(i, 16),
      green: parseInt(o, 16),
      blue: parseInt(l, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const fl = { test: Xl("#"), parse: _g, transform: Ln.transform },
  wi = (n) => ({
    test: (i) =>
      typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: (i) => `${i}${n}`,
  }),
  pn = wi("deg"),
  It = wi("%"),
  te = wi("px"),
  jg = wi("vh"),
  Fg = wi("vw"),
  wd = {
    ...It,
    parse: (n) => It.parse(n) / 100,
    transform: (n) => It.transform(n * 100),
  },
  ur = {
    test: Xl("hsl", "hue"),
    parse: Zh("hue", "saturation", "lightness"),
    transform: ({ hue: n, saturation: i, lightness: o, alpha: l = 1 }) =>
      "hsla(" +
      Math.round(n) +
      ", " +
      It.transform(li(i)) +
      ", " +
      It.transform(li(o)) +
      ", " +
      li(hi.transform(l)) +
      ")",
  },
  Ve = {
    test: (n) => Ln.test(n) || fl.test(n) || ur.test(n),
    parse: (n) =>
      Ln.test(n) ? Ln.parse(n) : ur.test(n) ? ur.parse(n) : fl.parse(n),
    transform: (n) =>
      typeof n == "string"
        ? n
        : n.hasOwnProperty("red")
        ? Ln.transform(n)
        : ur.transform(n),
    getAnimatableNone: (n) => {
      const i = Ve.parse(n);
      return (i.alpha = 0), Ve.transform(i);
    },
  },
  Ig =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function zg(n) {
  return (
    isNaN(n) &&
    typeof n == "string" &&
    (n.match(Kl)?.length || 0) + (n.match(Ig)?.length || 0) > 0
  );
}
const qh = "number",
  Jh = "color",
  Og = "var",
  Bg = "var(",
  xd = "${}",
  Ug =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function pi(n) {
  const i = n.toString(),
    o = [],
    l = { color: [], number: [], var: [] },
    c = [];
  let d = 0;
  const p = i
    .replace(
      Ug,
      (m) => (
        Ve.test(m)
          ? (l.color.push(d), c.push(Jh), o.push(Ve.parse(m)))
          : m.startsWith(Bg)
          ? (l.var.push(d), c.push(Og), o.push(m))
          : (l.number.push(d), c.push(qh), o.push(parseFloat(m))),
        ++d,
        xd
      )
    )
    .split(xd);
  return { values: o, split: p, indexes: l, types: c };
}
function bh(n) {
  return pi(n).values;
}
function ep(n) {
  const { split: i, types: o } = pi(n),
    l = i.length;
  return (c) => {
    let d = "";
    for (let f = 0; f < l; f++)
      if (((d += i[f]), c[f] !== void 0)) {
        const p = o[f];
        p === qh
          ? (d += li(c[f]))
          : p === Jh
          ? (d += Ve.transform(c[f]))
          : (d += c[f]);
      }
    return d;
  };
}
const Hg = (n) =>
  typeof n == "number" ? 0 : Ve.test(n) ? Ve.getAnimatableNone(n) : n;
function Wg(n) {
  const i = bh(n);
  return ep(n)(i.map(Hg));
}
const yn = {
  test: zg,
  parse: bh,
  createTransformer: ep,
  getAnimatableNone: Wg,
};
function Ja(n, i, o) {
  return (
    o < 0 && (o += 1),
    o > 1 && (o -= 1),
    o < 1 / 6
      ? n + (i - n) * 6 * o
      : o < 1 / 2
      ? i
      : o < 2 / 3
      ? n + (i - n) * (2 / 3 - o) * 6
      : n
  );
}
function $g({ hue: n, saturation: i, lightness: o, alpha: l }) {
  (n /= 360), (i /= 100), (o /= 100);
  let c = 0,
    d = 0,
    f = 0;
  if (!i) c = d = f = o;
  else {
    const p = o < 0.5 ? o * (1 + i) : o + i - o * i,
      m = 2 * o - p;
    (c = Ja(m, p, n + 1 / 3)), (d = Ja(m, p, n)), (f = Ja(m, p, n - 1 / 3));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(f * 255),
    alpha: l,
  };
}
function Us(n, i) {
  return (o) => (o > 0 ? i : n);
}
const Ce = (n, i, o) => n + (i - n) * o,
  ba = (n, i, o) => {
    const l = n * n,
      c = o * (i * i - l) + l;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  Kg = [fl, Ln, ur],
  Xg = (n) => Kg.find((i) => i.test(n));
function Sd(n) {
  const i = Xg(n);
  if (!i) return !1;
  let o = i.parse(n);
  return i === ur && (o = $g(o)), o;
}
const Td = (n, i) => {
    const o = Sd(n),
      l = Sd(i);
    if (!o || !l) return Us(n, i);
    const c = { ...o };
    return (d) => (
      (c.red = ba(o.red, l.red, d)),
      (c.green = ba(o.green, l.green, d)),
      (c.blue = ba(o.blue, l.blue, d)),
      (c.alpha = Ce(o.alpha, l.alpha, d)),
      Ln.transform(c)
    );
  },
  dl = new Set(["none", "hidden"]);
function Yg(n, i) {
  return dl.has(n) ? (o) => (o <= 0 ? n : i) : (o) => (o >= 1 ? i : n);
}
function Gg(n, i) {
  return (o) => Ce(n, i, o);
}
function Yl(n) {
  return typeof n == "number"
    ? Gg
    : typeof n == "string"
    ? $l(n)
      ? Us
      : Ve.test(n)
      ? Td
      : qg
    : Array.isArray(n)
    ? tp
    : typeof n == "object"
    ? Ve.test(n)
      ? Td
      : Qg
    : Us;
}
function tp(n, i) {
  const o = [...n],
    l = o.length,
    c = n.map((d, f) => Yl(d)(d, i[f]));
  return (d) => {
    for (let f = 0; f < l; f++) o[f] = c[f](d);
    return o;
  };
}
function Qg(n, i) {
  const o = { ...n, ...i },
    l = {};
  for (const c in o)
    n[c] !== void 0 && i[c] !== void 0 && (l[c] = Yl(n[c])(n[c], i[c]));
  return (c) => {
    for (const d in l) o[d] = l[d](c);
    return o;
  };
}
function Zg(n, i) {
  const o = [],
    l = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < i.values.length; c++) {
    const d = i.types[c],
      f = n.indexes[d][l[d]],
      p = n.values[f] ?? 0;
    (o[c] = p), l[d]++;
  }
  return o;
}
const qg = (n, i) => {
  const o = yn.createTransformer(i),
    l = pi(n),
    c = pi(i);
  return l.indexes.var.length === c.indexes.var.length &&
    l.indexes.color.length === c.indexes.color.length &&
    l.indexes.number.length >= c.indexes.number.length
    ? (dl.has(n) && !c.values.length) || (dl.has(i) && !l.values.length)
      ? Yg(n, i)
      : gi(tp(Zg(l, c), c.values), o)
    : Us(n, i);
};
function np(n, i, o) {
  return typeof n == "number" && typeof i == "number" && typeof o == "number"
    ? Ce(n, i, o)
    : Yl(n)(n, i);
}
const Jg = (n) => {
    const i = ({ timestamp: o }) => n(o);
    return {
      start: (o = !0) => Te.update(i, o),
      stop: () => mn(i),
      now: () => (Be.isProcessing ? Be.timestamp : st.now()),
    };
  },
  rp = (n, i, o = 10) => {
    let l = "";
    const c = Math.max(Math.round(i / o), 2);
    for (let d = 0; d < c; d++)
      l += Math.round(n(d / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${l.substring(0, l.length - 2)})`;
  },
  Hs = 2e4;
function Gl(n) {
  let i = 0;
  const o = 50;
  let l = n.next(i);
  for (; !l.done && i < Hs; ) (i += o), (l = n.next(i));
  return i >= Hs ? 1 / 0 : i;
}
function bg(n, i = 100, o) {
  const l = o({ ...n, keyframes: [0, i] }),
    c = Math.min(Gl(l), Hs);
  return {
    type: "keyframes",
    ease: (d) => l.next(c * d).value / i,
    duration: xt(c),
  };
}
const ev = 5;
function ip(n, i, o) {
  const l = Math.max(i - ev, 0);
  return Fh(o - n(l), i - l);
}
const Me = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  el = 0.001;
function tv({
  duration: n = Me.duration,
  bounce: i = Me.bounce,
  velocity: o = Me.velocity,
  mass: l = Me.mass,
}) {
  let c,
    d,
    f = 1 - i;
  (f = Xt(Me.minDamping, Me.maxDamping, f)),
    (n = Xt(Me.minDuration, Me.maxDuration, xt(n))),
    f < 1
      ? ((c = (g) => {
          const y = g * f,
            x = y * n,
            T = y - o,
            M = hl(g, f),
            N = Math.exp(-x);
          return el - (T / M) * N;
        }),
        (d = (g) => {
          const x = g * f * n,
            T = x * o + o,
            M = Math.pow(f, 2) * Math.pow(g, 2) * n,
            N = Math.exp(-x),
            L = hl(Math.pow(g, 2), f);
          return ((-c(g) + el > 0 ? -1 : 1) * ((T - M) * N)) / L;
        }))
      : ((c = (g) => {
          const y = Math.exp(-g * n),
            x = (g - o) * n + 1;
          return -el + y * x;
        }),
        (d = (g) => {
          const y = Math.exp(-g * n),
            x = (o - g) * (n * n);
          return y * x;
        }));
  const p = 5 / n,
    m = rv(c, d, p);
  if (((n = Ft(n)), isNaN(m)))
    return { stiffness: Me.stiffness, damping: Me.damping, duration: n };
  {
    const g = Math.pow(m, 2) * l;
    return { stiffness: g, damping: f * 2 * Math.sqrt(l * g), duration: n };
  }
}
const nv = 12;
function rv(n, i, o) {
  let l = o;
  for (let c = 1; c < nv; c++) l = l - n(l) / i(l);
  return l;
}
function hl(n, i) {
  return n * Math.sqrt(1 - i * i);
}
const iv = ["duration", "bounce"],
  sv = ["stiffness", "damping", "mass"];
function kd(n, i) {
  return i.some((o) => n[o] !== void 0);
}
function ov(n) {
  let i = {
    velocity: Me.velocity,
    stiffness: Me.stiffness,
    damping: Me.damping,
    mass: Me.mass,
    isResolvedFromDuration: !1,
    ...n,
  };
  if (!kd(n, sv) && kd(n, iv))
    if (n.visualDuration) {
      const o = n.visualDuration,
        l = (2 * Math.PI) / (o * 1.2),
        c = l * l,
        d = 2 * Xt(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(c);
      i = { ...i, mass: Me.mass, stiffness: c, damping: d };
    } else {
      const o = tv(n);
      (i = { ...i, ...o, mass: Me.mass }), (i.isResolvedFromDuration = !0);
    }
  return i;
}
function Ws(n = Me.visualDuration, i = Me.bounce) {
  const o =
    typeof n != "object"
      ? { visualDuration: n, keyframes: [0, 1], bounce: i }
      : n;
  let { restSpeed: l, restDelta: c } = o;
  const d = o.keyframes[0],
    f = o.keyframes[o.keyframes.length - 1],
    p = { done: !1, value: d },
    {
      stiffness: m,
      damping: g,
      mass: y,
      duration: x,
      velocity: T,
      isResolvedFromDuration: M,
    } = ov({ ...o, velocity: -xt(o.velocity || 0) }),
    N = T || 0,
    L = g / (2 * Math.sqrt(m * y)),
    j = f - d,
    I = xt(Math.sqrt(m / y)),
    U = Math.abs(j) < 5;
  l || (l = U ? Me.restSpeed.granular : Me.restSpeed.default),
    c || (c = U ? Me.restDelta.granular : Me.restDelta.default);
  let z;
  if (L < 1) {
    const X = hl(I, L);
    z = (q) => {
      const ee = Math.exp(-L * I * q);
      return (
        f - ee * (((N + L * I * j) / X) * Math.sin(X * q) + j * Math.cos(X * q))
      );
    };
  } else if (L === 1) z = (X) => f - Math.exp(-I * X) * (j + (N + I * j) * X);
  else {
    const X = I * Math.sqrt(L * L - 1);
    z = (q) => {
      const ee = Math.exp(-L * I * q),
        Q = Math.min(X * q, 300);
      return (
        f - (ee * ((N + L * I * j) * Math.sinh(Q) + X * j * Math.cosh(Q))) / X
      );
    };
  }
  const Z = {
    calculatedDuration: (M && x) || null,
    next: (X) => {
      const q = z(X);
      if (M) p.done = X >= x;
      else {
        let ee = X === 0 ? N : 0;
        L < 1 && (ee = X === 0 ? Ft(N) : ip(z, X, q));
        const Q = Math.abs(ee) <= l,
          pe = Math.abs(f - q) <= c;
        p.done = Q && pe;
      }
      return (p.value = p.done ? f : q), p;
    },
    toString: () => {
      const X = Math.min(Gl(Z), Hs),
        q = rp((ee) => Z.next(X * ee).value, X, 30);
      return X + "ms " + q;
    },
    toTransition: () => {},
  };
  return Z;
}
Ws.applyToOptions = (n) => {
  const i = bg(n, 100, Ws);
  return (
    (n.ease = i.ease), (n.duration = Ft(i.duration)), (n.type = "keyframes"), n
  );
};
function pl({
  keyframes: n,
  velocity: i = 0,
  power: o = 0.8,
  timeConstant: l = 325,
  bounceDamping: c = 10,
  bounceStiffness: d = 500,
  modifyTarget: f,
  min: p,
  max: m,
  restDelta: g = 0.5,
  restSpeed: y,
}) {
  const x = n[0],
    T = { done: !1, value: x },
    M = (Q) => (p !== void 0 && Q < p) || (m !== void 0 && Q > m),
    N = (Q) =>
      p === void 0
        ? m
        : m === void 0 || Math.abs(p - Q) < Math.abs(m - Q)
        ? p
        : m;
  let L = o * i;
  const j = x + L,
    I = f === void 0 ? j : f(j);
  I !== j && (L = I - x);
  const U = (Q) => -L * Math.exp(-Q / l),
    z = (Q) => I + U(Q),
    Z = (Q) => {
      const pe = U(Q),
        ge = z(Q);
      (T.done = Math.abs(pe) <= g), (T.value = T.done ? I : ge);
    };
  let X, q;
  const ee = (Q) => {
    M(T.value) &&
      ((X = Q),
      (q = Ws({
        keyframes: [T.value, N(T.value)],
        velocity: ip(z, Q, T.value),
        damping: c,
        stiffness: d,
        restDelta: g,
        restSpeed: y,
      })));
  };
  return (
    ee(0),
    {
      calculatedDuration: null,
      next: (Q) => {
        let pe = !1;
        return (
          !q && X === void 0 && ((pe = !0), Z(Q), ee(Q)),
          X !== void 0 && Q >= X ? q.next(Q - X) : (!pe && Z(Q), T)
        );
      },
    }
  );
}
function av(n, i, o) {
  const l = [],
    c = o || Yt.mix || np,
    d = n.length - 1;
  for (let f = 0; f < d; f++) {
    let p = c(n[f], n[f + 1]);
    if (i) {
      const m = Array.isArray(i) ? i[f] || St : i;
      p = gi(m, p);
    }
    l.push(p);
  }
  return l;
}
function lv(n, i, { clamp: o = !0, ease: l, mixer: c } = {}) {
  const d = n.length;
  if ((Ol(d === i.length), d === 1)) return () => i[0];
  if (d === 2 && i[0] === i[1]) return () => i[1];
  const f = n[0] === n[1];
  n[0] > n[d - 1] && ((n = [...n].reverse()), (i = [...i].reverse()));
  const p = av(i, l, c),
    m = p.length,
    g = (y) => {
      if (f && y < n[0]) return i[0];
      let x = 0;
      if (m > 1) for (; x < n.length - 2 && !(y < n[x + 1]); x++);
      const T = di(n[x], n[x + 1], y);
      return p[x](T);
    };
  return o ? (y) => g(Xt(n[0], n[d - 1], y)) : g;
}
function uv(n, i) {
  const o = n[n.length - 1];
  for (let l = 1; l <= i; l++) {
    const c = di(0, i, l);
    n.push(Ce(o, 1, c));
  }
}
function cv(n) {
  const i = [0];
  return uv(i, n.length - 1), i;
}
function fv(n, i) {
  return n.map((o) => o * i);
}
function dv(n, i) {
  return n.map(() => i || Kh).splice(0, n.length - 1);
}
function ui({
  duration: n = 300,
  keyframes: i,
  times: o,
  ease: l = "easeInOut",
}) {
  const c = kg(l) ? l.map(vd) : vd(l),
    d = { done: !1, value: i[0] },
    f = fv(o && o.length === i.length ? o : cv(i), n),
    p = lv(f, i, { ease: Array.isArray(c) ? c : dv(i, c) });
  return {
    calculatedDuration: n,
    next: (m) => ((d.value = p(m)), (d.done = m >= n), d),
  };
}
const hv = (n) => n !== null;
function Ql(n, { repeat: i, repeatType: o = "loop" }, l, c = 1) {
  const d = n.filter(hv),
    p = c < 0 || (i && o !== "loop" && i % 2 === 1) ? 0 : d.length - 1;
  return !p || l === void 0 ? d[p] : l;
}
const pv = { decay: pl, inertia: pl, tween: ui, keyframes: ui, spring: Ws };
function sp(n) {
  typeof n.type == "string" && (n.type = pv[n.type]);
}
class Zl {
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
  then(i, o) {
    return this.finished.then(i, o);
  }
}
const mv = (n) => n / 100;
class ql extends Zl {
  constructor(i) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        const { motionValue: o } = this.options;
        o && o.updatedAt !== st.now() && this.tick(st.now()),
          (this.isStopped = !0),
          this.state !== "idle" && (this.teardown(), this.options.onStop?.());
      }),
      (this.options = i),
      this.initAnimation(),
      this.play(),
      i.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: i } = this;
    sp(i);
    const {
      type: o = ui,
      repeat: l = 0,
      repeatDelay: c = 0,
      repeatType: d,
      velocity: f = 0,
    } = i;
    let { keyframes: p } = i;
    const m = o || ui;
    m !== ui &&
      typeof p[0] != "number" &&
      ((this.mixKeyframes = gi(mv, np(p[0], p[1]))), (p = [0, 100]));
    const g = m({ ...i, keyframes: p });
    d === "mirror" &&
      (this.mirroredGenerator = m({
        ...i,
        keyframes: [...p].reverse(),
        velocity: -f,
      })),
      g.calculatedDuration === null && (g.calculatedDuration = Gl(g));
    const { calculatedDuration: y } = g;
    (this.calculatedDuration = y),
      (this.resolvedDuration = y + c),
      (this.totalDuration = this.resolvedDuration * (l + 1) - c),
      (this.generator = g);
  }
  updateTime(i) {
    const o = Math.round(i - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = o);
  }
  tick(i, o = !1) {
    const {
      generator: l,
      totalDuration: c,
      mixKeyframes: d,
      mirroredGenerator: f,
      resolvedDuration: p,
      calculatedDuration: m,
    } = this;
    if (this.startTime === null) return l.next(0);
    const {
      delay: g = 0,
      keyframes: y,
      repeat: x,
      repeatType: T,
      repeatDelay: M,
      type: N,
      onUpdate: L,
      finalKeyframe: j,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, i))
      : this.speed < 0 &&
        (this.startTime = Math.min(i - c / this.speed, this.startTime)),
      o ? (this.currentTime = i) : this.updateTime(i);
    const I = this.currentTime - g * (this.playbackSpeed >= 0 ? 1 : -1),
      U = this.playbackSpeed >= 0 ? I < 0 : I > c;
    (this.currentTime = Math.max(I, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let z = this.currentTime,
      Z = l;
    if (x) {
      const Q = Math.min(this.currentTime, c) / p;
      let pe = Math.floor(Q),
        ge = Q % 1;
      !ge && Q >= 1 && (ge = 1),
        ge === 1 && pe--,
        (pe = Math.min(pe, x + 1)),
        !!(pe % 2) &&
          (T === "reverse"
            ? ((ge = 1 - ge), M && (ge -= M / p))
            : T === "mirror" && (Z = f)),
        (z = Xt(0, 1, ge) * p);
    }
    const X = U ? { done: !1, value: y[0] } : Z.next(z);
    d && (X.value = d(X.value));
    let { done: q } = X;
    !U &&
      m !== null &&
      (q =
        this.playbackSpeed >= 0
          ? this.currentTime >= c
          : this.currentTime <= 0);
    const ee =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && q));
    return (
      ee && N !== pl && (X.value = Ql(y, this.options, j, this.speed)),
      L && L(X.value),
      ee && this.finish(),
      X
    );
  }
  then(i, o) {
    return this.finished.then(i, o);
  }
  get duration() {
    return xt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + xt(i);
  }
  get time() {
    return xt(this.currentTime);
  }
  set time(i) {
    (i = Ft(i)),
      (this.currentTime = i),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = i)
        : this.driver &&
          (this.startTime = this.driver.now() - i / this.playbackSpeed),
      this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(i) {
    this.updateTime(st.now());
    const o = this.playbackSpeed !== i;
    (this.playbackSpeed = i), o && (this.time = xt(this.currentTime));
  }
  play() {
    if (this.isStopped) return;
    const { driver: i = Jg, startTime: o } = this.options;
    this.driver || (this.driver = i((c) => this.tick(c))),
      this.options.onPlay?.();
    const l = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = l))
      : this.holdTime !== null
      ? (this.startTime = l - this.holdTime)
      : this.startTime || (this.startTime = o ?? l),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(st.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      this.options.onComplete?.();
  }
  cancel() {
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      this.options.onCancel?.();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(i) {
    return (this.startTime = 0), this.tick(i, !0);
  }
  attachTimeline(i) {
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      this.driver?.stop(),
      i.observe(this)
    );
  }
}
function yv(n) {
  for (let i = 1; i < n.length; i++) n[i] ?? (n[i] = n[i - 1]);
}
const _n = (n) => (n * 180) / Math.PI,
  ml = (n) => {
    const i = _n(Math.atan2(n[1], n[0]));
    return yl(i);
  },
  gv = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (n) => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
    rotate: ml,
    rotateZ: ml,
    skewX: (n) => _n(Math.atan(n[1])),
    skewY: (n) => _n(Math.atan(n[2])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[2])) / 2,
  },
  yl = (n) => ((n = n % 360), n < 0 && (n += 360), n),
  Pd = ml,
  Cd = (n) => Math.sqrt(n[0] * n[0] + n[1] * n[1]),
  Ed = (n) => Math.sqrt(n[4] * n[4] + n[5] * n[5]),
  vv = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Cd,
    scaleY: Ed,
    scale: (n) => (Cd(n) + Ed(n)) / 2,
    rotateX: (n) => yl(_n(Math.atan2(n[6], n[5]))),
    rotateY: (n) => yl(_n(Math.atan2(-n[2], n[0]))),
    rotateZ: Pd,
    rotate: Pd,
    skewX: (n) => _n(Math.atan(n[4])),
    skewY: (n) => _n(Math.atan(n[1])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[4])) / 2,
  };
function gl(n) {
  return n.includes("scale") ? 1 : 0;
}
function vl(n, i) {
  if (!n || n === "none") return gl(i);
  const o = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let l, c;
  if (o) (l = vv), (c = o);
  else {
    const p = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (l = gv), (c = p);
  }
  if (!c) return gl(i);
  const d = l[i],
    f = c[1].split(",").map(xv);
  return typeof d == "function" ? d(f) : f[d];
}
const wv = (n, i) => {
  const { transform: o = "none" } = getComputedStyle(n);
  return vl(o, i);
};
function xv(n) {
  return parseFloat(n.trim());
}
const vr = [
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
    "skewY",
  ],
  wr = new Set(vr),
  Md = (n) => n === gr || n === te,
  Sv = new Set(["x", "y", "z"]),
  Tv = vr.filter((n) => !Sv.has(n));
function kv(n) {
  const i = [];
  return (
    Tv.forEach((o) => {
      const l = n.getValue(o);
      l !== void 0 &&
        (i.push([o, l.get()]), l.set(o.startsWith("scale") ? 1 : 0));
    }),
    i
  );
}
const jn = {
  width: ({ x: n }, { paddingLeft: i = "0", paddingRight: o = "0" }) =>
    n.max - n.min - parseFloat(i) - parseFloat(o),
  height: ({ y: n }, { paddingTop: i = "0", paddingBottom: o = "0" }) =>
    n.max - n.min - parseFloat(i) - parseFloat(o),
  top: (n, { top: i }) => parseFloat(i),
  left: (n, { left: i }) => parseFloat(i),
  bottom: ({ y: n }, { top: i }) => parseFloat(i) + (n.max - n.min),
  right: ({ x: n }, { left: i }) => parseFloat(i) + (n.max - n.min),
  x: (n, { transform: i }) => vl(i, "x"),
  y: (n, { transform: i }) => vl(i, "y"),
};
jn.translateX = jn.x;
jn.translateY = jn.y;
const Fn = new Set();
let wl = !1,
  xl = !1,
  Sl = !1;
function op() {
  if (xl) {
    const n = Array.from(Fn).filter((l) => l.needsMeasurement),
      i = new Set(n.map((l) => l.element)),
      o = new Map();
    i.forEach((l) => {
      const c = kv(l);
      c.length && (o.set(l, c), l.render());
    }),
      n.forEach((l) => l.measureInitialState()),
      i.forEach((l) => {
        l.render();
        const c = o.get(l);
        c &&
          c.forEach(([d, f]) => {
            l.getValue(d)?.set(f);
          });
      }),
      n.forEach((l) => l.measureEndState()),
      n.forEach((l) => {
        l.suspendedScrollY !== void 0 && window.scrollTo(0, l.suspendedScrollY);
      });
  }
  (xl = !1), (wl = !1), Fn.forEach((n) => n.complete(Sl)), Fn.clear();
}
function ap() {
  Fn.forEach((n) => {
    n.readKeyframes(), n.needsMeasurement && (xl = !0);
  });
}
function Pv() {
  (Sl = !0), ap(), op(), (Sl = !1);
}
class Jl {
  constructor(i, o, l, c, d, f = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...i]),
      (this.onComplete = o),
      (this.name = l),
      (this.motionValue = c),
      (this.element = d),
      (this.isAsync = f);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (Fn.add(this),
          wl || ((wl = !0), Te.read(ap), Te.resolveKeyframes(op)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: i,
      name: o,
      element: l,
      motionValue: c,
    } = this;
    if (i[0] === null) {
      const d = c?.get(),
        f = i[i.length - 1];
      if (d !== void 0) i[0] = d;
      else if (l && o) {
        const p = l.readValue(o, f);
        p != null && (i[0] = p);
      }
      i[0] === void 0 && (i[0] = f), c && d === void 0 && c.set(i[0]);
    }
    yv(i);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(i = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i),
      Fn.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Fn.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Cv = (n) => n.startsWith("--");
function Ev(n, i, o) {
  Cv(i) ? n.style.setProperty(i, o) : (n.style[i] = o);
}
const Mv = Bl(() => window.ScrollTimeline !== void 0),
  Rv = {};
function Dv(n, i) {
  const o = Bl(n);
  return () => Rv[i] ?? o();
}
const lp = Dv(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  ai = ([n, i, o, l]) => `cubic-bezier(${n}, ${i}, ${o}, ${l})`,
  Rd = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ai([0, 0.65, 0.55, 1]),
    circOut: ai([0.55, 0, 1, 0.45]),
    backIn: ai([0.31, 0.01, 0.66, -0.59]),
    backOut: ai([0.33, 1.53, 0.69, 0.99]),
  };
function up(n, i) {
  if (n)
    return typeof n == "function"
      ? lp()
        ? rp(n, i)
        : "ease-out"
      : Xh(n)
      ? ai(n)
      : Array.isArray(n)
      ? n.map((o) => up(o, i) || Rd.easeOut)
      : Rd[n];
}
function Av(
  n,
  i,
  o,
  {
    delay: l = 0,
    duration: c = 300,
    repeat: d = 0,
    repeatType: f = "loop",
    ease: p = "easeOut",
    times: m,
  } = {},
  g = void 0
) {
  const y = { [i]: o };
  m && (y.offset = m);
  const x = up(p, c);
  Array.isArray(x) && (y.easing = x);
  const T = {
    delay: l,
    duration: c,
    easing: Array.isArray(x) ? "linear" : x,
    fill: "both",
    iterations: d + 1,
    direction: f === "reverse" ? "alternate" : "normal",
  };
  return g && (T.pseudoElement = g), n.animate(y, T);
}
function cp(n) {
  return typeof n == "function" && "applyToOptions" in n;
}
function Vv({ type: n, ...i }) {
  return cp(n) && lp()
    ? n.applyToOptions(i)
    : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i);
}
class Nv extends Zl {
  constructor(i) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !i))
      return;
    const {
      element: o,
      name: l,
      keyframes: c,
      pseudoElement: d,
      allowFlatten: f = !1,
      finalKeyframe: p,
      onComplete: m,
    } = i;
    (this.isPseudoElement = !!d),
      (this.allowFlatten = f),
      (this.options = i),
      Ol(typeof i.type != "string");
    const g = Vv(i);
    (this.animation = Av(o, l, c, g, d)),
      g.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !d)) {
          const y = Ql(c, this.options, p, this.speed);
          this.updateMotionValue ? this.updateMotionValue(y) : Ev(o, l, y),
            this.animation.cancel();
        }
        m?.(), this.notifyFinished();
      });
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === "finished" && this.updateFinished());
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
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: i } = this;
    i === "idle" ||
      i === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const i = this.animation.effect?.getComputedTiming?.().duration || 0;
    return xt(Number(i));
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + xt(i);
  }
  get time() {
    return xt(Number(this.animation.currentTime) || 0);
  }
  set time(i) {
    (this.finishedTime = null), (this.animation.currentTime = Ft(i));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(i) {
    i < 0 && (this.finishedTime = null), (this.animation.playbackRate = i);
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
  attachTimeline({ timeline: i, observe: o }) {
    return (
      this.allowFlatten &&
        this.animation.effect?.updateTiming({ easing: "linear" }),
      (this.animation.onfinish = null),
      i && Mv() ? ((this.animation.timeline = i), St) : o(this)
    );
  }
}
const fp = { anticipate: Hh, backInOut: Uh, circInOut: $h };
function Lv(n) {
  return n in fp;
}
function _v(n) {
  typeof n.ease == "string" && Lv(n.ease) && (n.ease = fp[n.ease]);
}
const Dd = 10;
class jv extends Nv {
  constructor(i) {
    _v(i),
      sp(i),
      super(i),
      i.startTime && (this.startTime = i.startTime),
      (this.options = i);
  }
  updateMotionValue(i) {
    const {
      motionValue: o,
      onUpdate: l,
      onComplete: c,
      element: d,
      ...f
    } = this.options;
    if (!o) return;
    if (i !== void 0) {
      o.set(i);
      return;
    }
    const p = new ql({ ...f, autoplay: !1 }),
      m = Ft(this.finishedTime ?? this.time);
    o.setWithVelocity(p.sample(m - Dd).value, p.sample(m).value, Dd), p.stop();
  }
}
const Ad = (n, i) =>
  i === "zIndex"
    ? !1
    : !!(
        typeof n == "number" ||
        Array.isArray(n) ||
        (typeof n == "string" &&
          (yn.test(n) || n === "0") &&
          !n.startsWith("url("))
      );
function Fv(n) {
  const i = n[0];
  if (n.length === 1) return !0;
  for (let o = 0; o < n.length; o++) if (n[o] !== i) return !0;
}
function Iv(n, i, o, l) {
  const c = n[0];
  if (c === null) return !1;
  if (i === "display" || i === "visibility") return !0;
  const d = n[n.length - 1],
    f = Ad(c, i),
    p = Ad(d, i);
  return !f || !p ? !1 : Fv(n) || ((o === "spring" || cp(o)) && l);
}
function Tl(n) {
  (n.duration = 0), (n.type = "keyframes");
}
const zv = new Set(["opacity", "clipPath", "filter", "transform"]),
  Ov = Bl(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Bv(n) {
  const {
    motionValue: i,
    name: o,
    repeatDelay: l,
    repeatType: c,
    damping: d,
    type: f,
  } = n;
  if (!(i?.owner?.current instanceof HTMLElement)) return !1;
  const { onUpdate: m, transformTemplate: g } = i.owner.getProps();
  return (
    Ov() &&
    o &&
    zv.has(o) &&
    (o !== "transform" || !g) &&
    !m &&
    !l &&
    c !== "mirror" &&
    d !== 0 &&
    f !== "inertia"
  );
}
const Uv = 40;
class Hv extends Zl {
  constructor({
    autoplay: i = !0,
    delay: o = 0,
    type: l = "keyframes",
    repeat: c = 0,
    repeatDelay: d = 0,
    repeatType: f = "loop",
    keyframes: p,
    name: m,
    motionValue: g,
    element: y,
    ...x
  }) {
    super(),
      (this.stop = () => {
        this._animation && (this._animation.stop(), this.stopTimeline?.()),
          this.keyframeResolver?.cancel();
      }),
      (this.createdAt = st.now());
    const T = {
        autoplay: i,
        delay: o,
        type: l,
        repeat: c,
        repeatDelay: d,
        repeatType: f,
        name: m,
        motionValue: g,
        element: y,
        ...x,
      },
      M = y?.KeyframeResolver || Jl;
    (this.keyframeResolver = new M(
      p,
      (N, L, j) => this.onKeyframesResolved(N, L, T, !j),
      m,
      g,
      y
    )),
      this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(i, o, l, c) {
    this.keyframeResolver = void 0;
    const {
      name: d,
      type: f,
      velocity: p,
      delay: m,
      isHandoff: g,
      onUpdate: y,
    } = l;
    (this.resolvedAt = st.now()),
      Iv(i, d, f, p) ||
        ((Yt.instantAnimations || !m) && y?.(Ql(i, l, o)),
        (i[0] = i[i.length - 1]),
        Tl(l),
        (l.repeat = 0));
    const T = {
        startTime: c
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > Uv
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: o,
        ...l,
        keyframes: i,
      },
      M =
        !g && Bv(T)
          ? new jv({ ...T, element: T.motionValue.owner.current })
          : new ql(T);
    M.finished.then(() => this.notifyFinished()).catch(St),
      this.pendingTimeline &&
        ((this.stopTimeline = M.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = M);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(i, o) {
    return this.finished.finally(i).then(() => {});
  }
  get animation() {
    return (
      this._animation || (this.keyframeResolver?.resume(), Pv()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
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
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(i))
        : (this.pendingTimeline = i),
      () => this.stop()
    );
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
const Wv = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function $v(n) {
  const i = Wv.exec(n);
  if (!i) return [,];
  const [, o, l, c] = i;
  return [`--${o ?? l}`, c];
}
function dp(n, i, o = 1) {
  const [l, c] = $v(n);
  if (!l) return;
  const d = window.getComputedStyle(i).getPropertyValue(l);
  if (d) {
    const f = d.trim();
    return Lh(f) ? parseFloat(f) : f;
  }
  return $l(c) ? dp(c, i, o + 1) : c;
}
function bl(n, i) {
  return n?.[i] ?? n?.default ?? n;
}
const hp = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...vr,
  ]),
  Kv = { test: (n) => n === "auto", parse: (n) => n },
  pp = (n) => (i) => i.test(n),
  mp = [gr, te, It, pn, Fg, jg, Kv],
  Vd = (n) => mp.find(pp(n));
function Xv(n) {
  return typeof n == "number"
    ? n === 0
    : n !== null
    ? n === "none" || n === "0" || jh(n)
    : !0;
}
const Yv = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Gv(n) {
  const [i, o] = n.slice(0, -1).split("(");
  if (i === "drop-shadow") return n;
  const [l] = o.match(Kl) || [];
  if (!l) return n;
  const c = o.replace(l, "");
  let d = Yv.has(i) ? 1 : 0;
  return l !== o && (d *= 100), i + "(" + d + c + ")";
}
const Qv = /\b([a-z-]*)\(.*?\)/gu,
  kl = {
    ...yn,
    getAnimatableNone: (n) => {
      const i = n.match(Qv);
      return i ? i.map(Gv).join(" ") : n;
    },
  },
  Nd = { ...gr, transform: Math.round },
  Zv = {
    rotate: pn,
    rotateX: pn,
    rotateY: pn,
    rotateZ: pn,
    scale: Ls,
    scaleX: Ls,
    scaleY: Ls,
    scaleZ: Ls,
    skew: pn,
    skewX: pn,
    skewY: pn,
    distance: te,
    translateX: te,
    translateY: te,
    translateZ: te,
    x: te,
    y: te,
    z: te,
    perspective: te,
    transformPerspective: te,
    opacity: hi,
    originX: wd,
    originY: wd,
    originZ: te,
  },
  eu = {
    borderWidth: te,
    borderTopWidth: te,
    borderRightWidth: te,
    borderBottomWidth: te,
    borderLeftWidth: te,
    borderRadius: te,
    radius: te,
    borderTopLeftRadius: te,
    borderTopRightRadius: te,
    borderBottomRightRadius: te,
    borderBottomLeftRadius: te,
    width: te,
    maxWidth: te,
    height: te,
    maxHeight: te,
    top: te,
    right: te,
    bottom: te,
    left: te,
    padding: te,
    paddingTop: te,
    paddingRight: te,
    paddingBottom: te,
    paddingLeft: te,
    margin: te,
    marginTop: te,
    marginRight: te,
    marginBottom: te,
    marginLeft: te,
    backgroundPositionX: te,
    backgroundPositionY: te,
    ...Zv,
    zIndex: Nd,
    fillOpacity: hi,
    strokeOpacity: hi,
    numOctaves: Nd,
  },
  qv = {
    ...eu,
    color: Ve,
    backgroundColor: Ve,
    outlineColor: Ve,
    fill: Ve,
    stroke: Ve,
    borderColor: Ve,
    borderTopColor: Ve,
    borderRightColor: Ve,
    borderBottomColor: Ve,
    borderLeftColor: Ve,
    filter: kl,
    WebkitFilter: kl,
  },
  yp = (n) => qv[n];
function gp(n, i) {
  let o = yp(n);
  return (
    o !== kl && (o = yn), o.getAnimatableNone ? o.getAnimatableNone(i) : void 0
  );
}
const Jv = new Set(["auto", "none", "0"]);
function bv(n, i, o) {
  let l = 0,
    c;
  for (; l < n.length && !c; ) {
    const d = n[l];
    typeof d == "string" && !Jv.has(d) && pi(d).values.length && (c = n[l]),
      l++;
  }
  if (c && o) for (const d of i) n[d] = gp(o, c);
}
class e0 extends Jl {
  constructor(i, o, l, c, d) {
    super(i, o, l, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: o, name: l } = this;
    if (!o || !o.current) return;
    super.readKeyframes();
    for (let m = 0; m < i.length; m++) {
      let g = i[m];
      if (typeof g == "string" && ((g = g.trim()), $l(g))) {
        const y = dp(g, o.current);
        y !== void 0 && (i[m] = y),
          m === i.length - 1 && (this.finalKeyframe = g);
      }
    }
    if ((this.resolveNoneKeyframes(), !hp.has(l) || i.length !== 2)) return;
    const [c, d] = i,
      f = Vd(c),
      p = Vd(d);
    if (f !== p)
      if (Md(f) && Md(p))
        for (let m = 0; m < i.length; m++) {
          const g = i[m];
          typeof g == "string" && (i[m] = parseFloat(g));
        }
      else jn[l] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: o } = this,
      l = [];
    for (let c = 0; c < i.length; c++) (i[c] === null || Xv(i[c])) && l.push(c);
    l.length && bv(i, l, o);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: o, name: l } = this;
    if (!i || !i.current) return;
    l === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = jn[l](
        i.measureViewportBox(),
        window.getComputedStyle(i.current)
      )),
      (o[0] = this.measuredOrigin);
    const c = o[o.length - 1];
    c !== void 0 && i.getValue(l, c).jump(c, !1);
  }
  measureEndState() {
    const { element: i, name: o, unresolvedKeyframes: l } = this;
    if (!i || !i.current) return;
    const c = i.getValue(o);
    c && c.jump(this.measuredOrigin, !1);
    const d = l.length - 1,
      f = l[d];
    (l[d] = jn[o](i.measureViewportBox(), window.getComputedStyle(i.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([p, m]) => {
          i.getValue(p).set(m);
        }),
      this.resolveNoneKeyframes();
  }
}
function t0(n, i, o) {
  if (n instanceof EventTarget) return [n];
  if (typeof n == "string") {
    let l = document;
    const c = o?.[n] ?? l.querySelectorAll(n);
    return c ? Array.from(c) : [];
  }
  return Array.from(n);
}
const vp = (n, i) => (i && typeof n == "number" ? i.transform(n) : n);
function wp(n) {
  return _h(n) && "offsetHeight" in n;
}
const Ld = 30,
  n0 = (n) => !isNaN(parseFloat(n));
class r0 {
  constructor(i, o = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (l) => {
        const c = st.now();
        if (
          (this.updatedAt !== c && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(l),
          this.current !== this.prev &&
            (this.events.change?.notify(this.current), this.dependents))
        )
          for (const d of this.dependents) d.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(i),
      (this.owner = o.owner);
  }
  setCurrent(i) {
    (this.current = i),
      (this.updatedAt = st.now()),
      this.canTrackVelocity === null &&
        i !== void 0 &&
        (this.canTrackVelocity = n0(this.current));
  }
  setPrevFrameValue(i = this.current) {
    (this.prevFrameValue = i), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(i) {
    return this.on("change", i);
  }
  on(i, o) {
    this.events[i] || (this.events[i] = new Ul());
    const l = this.events[i].add(o);
    return i === "change"
      ? () => {
          l(),
            Te.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : l;
  }
  clearListeners() {
    for (const i in this.events) this.events[i].clear();
  }
  attach(i, o) {
    (this.passiveEffect = i), (this.stopPassiveEffect = o);
  }
  set(i) {
    this.passiveEffect
      ? this.passiveEffect(i, this.updateAndNotify)
      : this.updateAndNotify(i);
  }
  setWithVelocity(i, o, l) {
    this.set(o),
      (this.prev = void 0),
      (this.prevFrameValue = i),
      (this.prevUpdatedAt = this.updatedAt - l);
  }
  jump(i, o = !0) {
    this.updateAndNotify(i),
      (this.prev = i),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      o && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(i) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(i);
  }
  removeDependent(i) {
    this.dependents && this.dependents.delete(i);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const i = st.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      i - this.updatedAt > Ld
    )
      return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, Ld);
    return Fh(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
  }
  start(i) {
    return (
      this.stop(),
      new Promise((o) => {
        (this.hasAnimated = !0),
          (this.animation = i(o)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.dependents?.clear(),
      this.events.destroy?.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function mr(n, i) {
  return new r0(n, i);
}
const { schedule: tu } = Yh(queueMicrotask, !1),
  At = { x: !1, y: !1 };
function xp() {
  return At.x || At.y;
}
function i0(n) {
  return n === "x" || n === "y"
    ? At[n]
      ? null
      : ((At[n] = !0),
        () => {
          At[n] = !1;
        })
    : At.x || At.y
    ? null
    : ((At.x = At.y = !0),
      () => {
        At.x = At.y = !1;
      });
}
function Sp(n, i) {
  const o = t0(n),
    l = new AbortController(),
    c = { passive: !0, ...i, signal: l.signal };
  return [o, c, () => l.abort()];
}
function _d(n) {
  return !(n.pointerType === "touch" || xp());
}
function s0(n, i, o = {}) {
  const [l, c, d] = Sp(n, o),
    f = (p) => {
      if (!_d(p)) return;
      const { target: m } = p,
        g = i(m, p);
      if (typeof g != "function" || !m) return;
      const y = (x) => {
        _d(x) && (g(x), m.removeEventListener("pointerleave", y));
      };
      m.addEventListener("pointerleave", y, c);
    };
  return (
    l.forEach((p) => {
      p.addEventListener("pointerenter", f, c);
    }),
    d
  );
}
const Tp = (n, i) => (i ? (n === i ? !0 : Tp(n, i.parentElement)) : !1),
  nu = (n) =>
    n.pointerType === "mouse"
      ? typeof n.button != "number" || n.button <= 0
      : n.isPrimary !== !1,
  o0 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function a0(n) {
  return o0.has(n.tagName) || n.tabIndex !== -1;
}
const zs = new WeakSet();
function jd(n) {
  return (i) => {
    i.key === "Enter" && n(i);
  };
}
function tl(n, i) {
  n.dispatchEvent(
    new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 })
  );
}
const l0 = (n, i) => {
  const o = n.currentTarget;
  if (!o) return;
  const l = jd(() => {
    if (zs.has(o)) return;
    tl(o, "down");
    const c = jd(() => {
        tl(o, "up");
      }),
      d = () => tl(o, "cancel");
    o.addEventListener("keyup", c, i), o.addEventListener("blur", d, i);
  });
  o.addEventListener("keydown", l, i),
    o.addEventListener("blur", () => o.removeEventListener("keydown", l), i);
};
function Fd(n) {
  return nu(n) && !xp();
}
function u0(n, i, o = {}) {
  const [l, c, d] = Sp(n, o),
    f = (p) => {
      const m = p.currentTarget;
      if (!Fd(p)) return;
      zs.add(m);
      const g = i(m, p),
        y = (M, N) => {
          window.removeEventListener("pointerup", x),
            window.removeEventListener("pointercancel", T),
            zs.has(m) && zs.delete(m),
            Fd(M) && typeof g == "function" && g(M, { success: N });
        },
        x = (M) => {
          y(
            M,
            m === window ||
              m === document ||
              o.useGlobalTarget ||
              Tp(m, M.target)
          );
        },
        T = (M) => {
          y(M, !1);
        };
      window.addEventListener("pointerup", x, c),
        window.addEventListener("pointercancel", T, c);
    };
  return (
    l.forEach((p) => {
      (o.useGlobalTarget ? window : p).addEventListener("pointerdown", f, c),
        wp(p) &&
          (p.addEventListener("focus", (g) => l0(g, c)),
          !a0(p) && !p.hasAttribute("tabindex") && (p.tabIndex = 0));
    }),
    d
  );
}
function kp(n) {
  return _h(n) && "ownerSVGElement" in n;
}
function c0(n) {
  return kp(n) && n.tagName === "svg";
}
const Xe = (n) => !!(n && n.getVelocity),
  f0 = [...mp, Ve, yn],
  d0 = (n) => f0.find(pp(n)),
  ru = H.createContext({
    transformPagePoint: (n) => n,
    isStatic: !1,
    reducedMotion: "never",
  });
function Id(n, i) {
  if (typeof n == "function") return n(i);
  n != null && (n.current = i);
}
function h0(...n) {
  return (i) => {
    let o = !1;
    const l = n.map((c) => {
      const d = Id(c, i);
      return !o && typeof d == "function" && (o = !0), d;
    });
    if (o)
      return () => {
        for (let c = 0; c < l.length; c++) {
          const d = l[c];
          typeof d == "function" ? d() : Id(n[c], null);
        }
      };
  };
}
function p0(...n) {
  return H.useCallback(h0(...n), n);
}
class m0 extends H.Component {
  getSnapshotBeforeUpdate(i) {
    const o = this.props.childRef.current;
    if (o && i.isPresent && !this.props.isPresent) {
      const l = o.offsetParent,
        c = (wp(l) && l.offsetWidth) || 0,
        d = this.props.sizeRef.current;
      (d.height = o.offsetHeight || 0),
        (d.width = o.offsetWidth || 0),
        (d.top = o.offsetTop),
        (d.left = o.offsetLeft),
        (d.right = c - d.width - d.left);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function y0({ children: n, isPresent: i, anchorX: o, root: l }) {
  const c = H.useId(),
    d = H.useRef(null),
    f = H.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: p } = H.useContext(ru),
    m = p0(d, n?.ref);
  return (
    H.useInsertionEffect(() => {
      const { width: g, height: y, top: x, left: T, right: M } = f.current;
      if (i || !d.current || !g || !y) return;
      const N = o === "left" ? `left: ${T}` : `right: ${M}`;
      d.current.dataset.motionPopId = c;
      const L = document.createElement("style");
      p && (L.nonce = p);
      const j = l ?? document.head;
      return (
        j.appendChild(L),
        L.sheet &&
          L.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${g}px !important;
            height: ${y}px !important;
            ${N}px !important;
            top: ${x}px !important;
          }
        `),
        () => {
          j.contains(L) && j.removeChild(L);
        }
      );
    }, [i]),
    ae.jsx(m0, {
      isPresent: i,
      childRef: d,
      sizeRef: f,
      children: H.cloneElement(n, { ref: m }),
    })
  );
}
const g0 = ({
  children: n,
  initial: i,
  isPresent: o,
  onExitComplete: l,
  custom: c,
  presenceAffectsLayout: d,
  mode: f,
  anchorX: p,
  root: m,
}) => {
  const g = jl(v0),
    y = H.useId();
  let x = !0,
    T = H.useMemo(
      () => (
        (x = !1),
        {
          id: y,
          initial: i,
          isPresent: o,
          custom: c,
          onExitComplete: (M) => {
            g.set(M, !0);
            for (const N of g.values()) if (!N) return;
            l && l();
          },
          register: (M) => (g.set(M, !1), () => g.delete(M)),
        }
      ),
      [o, g, l]
    );
  return (
    d && x && (T = { ...T }),
    H.useMemo(() => {
      g.forEach((M, N) => g.set(N, !1));
    }, [o]),
    H.useEffect(() => {
      !o && !g.size && l && l();
    }, [o]),
    f === "popLayout" &&
      (n = ae.jsx(y0, { isPresent: o, anchorX: p, root: m, children: n })),
    ae.jsx(Ys.Provider, { value: T, children: n })
  );
};
function v0() {
  return new Map();
}
function Pp(n = !0) {
  const i = H.useContext(Ys);
  if (i === null) return [!0, null];
  const { isPresent: o, onExitComplete: l, register: c } = i,
    d = H.useId();
  H.useEffect(() => {
    if (n) return c(d);
  }, [n]);
  const f = H.useCallback(() => n && l && l(d), [d, l, n]);
  return !o && l ? [!1, f] : [!0];
}
const _s = (n) => n.key || "";
function zd(n) {
  const i = [];
  return (
    H.Children.forEach(n, (o) => {
      H.isValidElement(o) && i.push(o);
    }),
    i
  );
}
const w0 = ({
    children: n,
    custom: i,
    initial: o = !0,
    onExitComplete: l,
    presenceAffectsLayout: c = !0,
    mode: d = "sync",
    propagate: f = !1,
    anchorX: p = "left",
    root: m,
  }) => {
    const [g, y] = Pp(f),
      x = H.useMemo(() => zd(n), [n]),
      T = f && !g ? [] : x.map(_s),
      M = H.useRef(!0),
      N = H.useRef(x),
      L = jl(() => new Map()),
      [j, I] = H.useState(x),
      [U, z] = H.useState(x);
    Nh(() => {
      (M.current = !1), (N.current = x);
      for (let q = 0; q < U.length; q++) {
        const ee = _s(U[q]);
        T.includes(ee) ? L.delete(ee) : L.get(ee) !== !0 && L.set(ee, !1);
      }
    }, [U, T.length, T.join("-")]);
    const Z = [];
    if (x !== j) {
      let q = [...x];
      for (let ee = 0; ee < U.length; ee++) {
        const Q = U[ee],
          pe = _s(Q);
        T.includes(pe) || (q.splice(ee, 0, Q), Z.push(Q));
      }
      return d === "wait" && Z.length && (q = Z), z(zd(q)), I(x), null;
    }
    const { forceRender: X } = H.useContext(_l);
    return ae.jsx(ae.Fragment, {
      children: U.map((q) => {
        const ee = _s(q),
          Q = f && !g ? !1 : x === U || T.includes(ee),
          pe = () => {
            if (L.has(ee)) L.set(ee, !0);
            else return;
            let ge = !0;
            L.forEach((Ue) => {
              Ue || (ge = !1);
            }),
              ge && (X?.(), z(N.current), f && y?.(), l && l());
          };
        return ae.jsx(
          g0,
          {
            isPresent: Q,
            initial: !M.current || o ? void 0 : !1,
            custom: i,
            presenceAffectsLayout: c,
            mode: d,
            root: m,
            onExitComplete: Q ? void 0 : pe,
            anchorX: p,
            children: q,
          },
          ee
        );
      }),
    });
  },
  Cp = H.createContext({ strict: !1 }),
  Od = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  yr = {};
for (const n in Od) yr[n] = { isEnabled: (i) => Od[n].some((o) => !!i[o]) };
function x0(n) {
  for (const i in n) yr[i] = { ...yr[i], ...n[i] };
}
const S0 = new Set([
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
  "viewport",
]);
function $s(n) {
  return (
    n.startsWith("while") ||
    (n.startsWith("drag") && n !== "draggable") ||
    n.startsWith("layout") ||
    n.startsWith("onTap") ||
    n.startsWith("onPan") ||
    n.startsWith("onLayout") ||
    S0.has(n)
  );
}
let Ep = (n) => !$s(n);
function T0(n) {
  typeof n == "function" && (Ep = (i) => (i.startsWith("on") ? !$s(i) : n(i)));
}
try {
  T0(require("@emotion/is-prop-valid").default);
} catch {}
function k0(n, i, o) {
  const l = {};
  for (const c in n)
    (c === "values" && typeof n.values == "object") ||
      ((Ep(c) ||
        (o === !0 && $s(c)) ||
        (!i && !$s(c)) ||
        (n.draggable && c.startsWith("onDrag"))) &&
        (l[c] = n[c]));
  return l;
}
const Gs = H.createContext({});
function Qs(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
function mi(n) {
  return typeof n == "string" || Array.isArray(n);
}
const iu = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  su = ["initial", ...iu];
function Zs(n) {
  return Qs(n.animate) || su.some((i) => mi(n[i]));
}
function Mp(n) {
  return !!(Zs(n) || n.variants);
}
function P0(n, i) {
  if (Zs(n)) {
    const { initial: o, animate: l } = n;
    return {
      initial: o === !1 || mi(o) ? o : void 0,
      animate: mi(l) ? l : void 0,
    };
  }
  return n.inherit !== !1 ? i : {};
}
function C0(n) {
  const { initial: i, animate: o } = P0(n, H.useContext(Gs));
  return H.useMemo(() => ({ initial: i, animate: o }), [Bd(i), Bd(o)]);
}
function Bd(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
function Ud(n, i) {
  return i.max === i.min ? 0 : (n / (i.max - i.min)) * 100;
}
const oi = {
    correct: (n, i) => {
      if (!i.target) return n;
      if (typeof n == "string")
        if (te.test(n)) n = parseFloat(n);
        else return n;
      const o = Ud(n, i.target.x),
        l = Ud(n, i.target.y);
      return `${o}% ${l}%`;
    },
  },
  E0 = {
    correct: (n, { treeScale: i, projectionDelta: o }) => {
      const l = n,
        c = yn.parse(n);
      if (c.length > 5) return l;
      const d = yn.createTransformer(n),
        f = typeof c[0] != "number" ? 1 : 0,
        p = o.x.scale * i.x,
        m = o.y.scale * i.y;
      (c[0 + f] /= p), (c[1 + f] /= m);
      const g = Ce(p, m, 0.5);
      return (
        typeof c[2 + f] == "number" && (c[2 + f] /= g),
        typeof c[3 + f] == "number" && (c[3 + f] /= g),
        d(c)
      );
    },
  },
  Pl = {
    borderRadius: {
      ...oi,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: oi,
    borderTopRightRadius: oi,
    borderBottomLeftRadius: oi,
    borderBottomRightRadius: oi,
    boxShadow: E0,
  };
function Rp(n, { layout: i, layoutId: o }) {
  return (
    wr.has(n) ||
    n.startsWith("origin") ||
    ((i || o !== void 0) && (!!Pl[n] || n === "opacity"))
  );
}
const M0 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  R0 = vr.length;
function D0(n, i, o) {
  let l = "",
    c = !0;
  for (let d = 0; d < R0; d++) {
    const f = vr[d],
      p = n[f];
    if (p === void 0) continue;
    let m = !0;
    if (
      (typeof p == "number"
        ? (m = p === (f.startsWith("scale") ? 1 : 0))
        : (m = parseFloat(p) === 0),
      !m || o)
    ) {
      const g = vp(p, eu[f]);
      if (!m) {
        c = !1;
        const y = M0[f] || f;
        l += `${y}(${g}) `;
      }
      o && (i[f] = g);
    }
  }
  return (l = l.trim()), o ? (l = o(i, c ? "" : l)) : c && (l = "none"), l;
}
function ou(n, i, o) {
  const { style: l, vars: c, transformOrigin: d } = n;
  let f = !1,
    p = !1;
  for (const m in i) {
    const g = i[m];
    if (wr.has(m)) {
      f = !0;
      continue;
    } else if (Qh(m)) {
      c[m] = g;
      continue;
    } else {
      const y = vp(g, eu[m]);
      m.startsWith("origin") ? ((p = !0), (d[m] = y)) : (l[m] = y);
    }
  }
  if (
    (i.transform ||
      (f || o
        ? (l.transform = D0(i, n.transform, o))
        : l.transform && (l.transform = "none")),
    p)
  ) {
    const { originX: m = "50%", originY: g = "50%", originZ: y = 0 } = d;
    l.transformOrigin = `${m} ${g} ${y}`;
  }
}
const au = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Dp(n, i, o) {
  for (const l in i) !Xe(i[l]) && !Rp(l, o) && (n[l] = i[l]);
}
function A0({ transformTemplate: n }, i) {
  return H.useMemo(() => {
    const o = au();
    return ou(o, i, n), Object.assign({}, o.vars, o.style);
  }, [i]);
}
function V0(n, i) {
  const o = n.style || {},
    l = {};
  return Dp(l, o, n), Object.assign(l, A0(n, i)), l;
}
function N0(n, i) {
  const o = {},
    l = V0(n, i);
  return (
    n.drag &&
      n.dragListener !== !1 &&
      ((o.draggable = !1),
      (l.userSelect = l.WebkitUserSelect = l.WebkitTouchCallout = "none"),
      (l.touchAction =
        n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`)),
    n.tabIndex === void 0 &&
      (n.onTap || n.onTapStart || n.whileTap) &&
      (o.tabIndex = 0),
    (o.style = l),
    o
  );
}
const L0 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  _0 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function j0(n, i, o = 1, l = 0, c = !0) {
  n.pathLength = 1;
  const d = c ? L0 : _0;
  n[d.offset] = te.transform(-l);
  const f = te.transform(i),
    p = te.transform(o);
  n[d.array] = `${f} ${p}`;
}
function Ap(
  n,
  {
    attrX: i,
    attrY: o,
    attrScale: l,
    pathLength: c,
    pathSpacing: d = 1,
    pathOffset: f = 0,
    ...p
  },
  m,
  g,
  y
) {
  if ((ou(n, p, g), m)) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  (n.attrs = n.style), (n.style = {});
  const { attrs: x, style: T } = n;
  x.transform && ((T.transform = x.transform), delete x.transform),
    (T.transform || x.transformOrigin) &&
      ((T.transformOrigin = x.transformOrigin ?? "50% 50%"),
      delete x.transformOrigin),
    T.transform &&
      ((T.transformBox = y?.transformBox ?? "fill-box"), delete x.transformBox),
    i !== void 0 && (x.x = i),
    o !== void 0 && (x.y = o),
    l !== void 0 && (x.scale = l),
    c !== void 0 && j0(x, c, d, f, !1);
}
const Vp = () => ({ ...au(), attrs: {} }),
  Np = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function F0(n, i, o, l) {
  const c = H.useMemo(() => {
    const d = Vp();
    return (
      Ap(d, i, Np(l), n.transformTemplate, n.style),
      { ...d.attrs, style: { ...d.style } }
    );
  }, [i]);
  if (n.style) {
    const d = {};
    Dp(d, n.style, n), (c.style = { ...d, ...c.style });
  }
  return c;
}
const I0 = [
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
  "view",
];
function lu(n) {
  return typeof n != "string" || n.includes("-")
    ? !1
    : !!(I0.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
function z0(n, i, o, { latestValues: l }, c, d = !1) {
  const p = (lu(n) ? F0 : N0)(i, l, c, n),
    m = k0(i, typeof n == "string", d),
    g = n !== H.Fragment ? { ...m, ...p, ref: o } : {},
    { children: y } = i,
    x = H.useMemo(() => (Xe(y) ? y.get() : y), [y]);
  return H.createElement(n, { ...g, children: x });
}
function Hd(n) {
  const i = [{}, {}];
  return (
    n?.values.forEach((o, l) => {
      (i[0][l] = o.get()), (i[1][l] = o.getVelocity());
    }),
    i
  );
}
function uu(n, i, o, l) {
  if (typeof i == "function") {
    const [c, d] = Hd(l);
    i = i(o !== void 0 ? o : n.custom, c, d);
  }
  if (
    (typeof i == "string" && (i = n.variants && n.variants[i]),
    typeof i == "function")
  ) {
    const [c, d] = Hd(l);
    i = i(o !== void 0 ? o : n.custom, c, d);
  }
  return i;
}
function Os(n) {
  return Xe(n) ? n.get() : n;
}
function O0({ scrapeMotionValuesFromProps: n, createRenderState: i }, o, l, c) {
  return { latestValues: B0(o, l, c, n), renderState: i() };
}
function B0(n, i, o, l) {
  const c = {},
    d = l(n, {});
  for (const T in d) c[T] = Os(d[T]);
  let { initial: f, animate: p } = n;
  const m = Zs(n),
    g = Mp(n);
  i &&
    g &&
    !m &&
    n.inherit !== !1 &&
    (f === void 0 && (f = i.initial), p === void 0 && (p = i.animate));
  let y = o ? o.initial === !1 : !1;
  y = y || f === !1;
  const x = y ? p : f;
  if (x && typeof x != "boolean" && !Qs(x)) {
    const T = Array.isArray(x) ? x : [x];
    for (let M = 0; M < T.length; M++) {
      const N = uu(n, T[M]);
      if (N) {
        const { transitionEnd: L, transition: j, ...I } = N;
        for (const U in I) {
          let z = I[U];
          if (Array.isArray(z)) {
            const Z = y ? z.length - 1 : 0;
            z = z[Z];
          }
          z !== null && (c[U] = z);
        }
        for (const U in L) c[U] = L[U];
      }
    }
  }
  return c;
}
const Lp = (n) => (i, o) => {
  const l = H.useContext(Gs),
    c = H.useContext(Ys),
    d = () => O0(n, i, l, c);
  return o ? d() : jl(d);
};
function cu(n, i, o) {
  const { style: l } = n,
    c = {};
  for (const d in l)
    (Xe(l[d]) ||
      (i.style && Xe(i.style[d])) ||
      Rp(d, n) ||
      o?.getValue(d)?.liveStyle !== void 0) &&
      (c[d] = l[d]);
  return c;
}
const U0 = Lp({ scrapeMotionValuesFromProps: cu, createRenderState: au });
function _p(n, i, o) {
  const l = cu(n, i, o);
  for (const c in n)
    if (Xe(n[c]) || Xe(i[c])) {
      const d =
        vr.indexOf(c) !== -1
          ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
          : c;
      l[d] = n[c];
    }
  return l;
}
const H0 = Lp({ scrapeMotionValuesFromProps: _p, createRenderState: Vp }),
  W0 = Symbol.for("motionComponentSymbol");
function cr(n) {
  return (
    n &&
    typeof n == "object" &&
    Object.prototype.hasOwnProperty.call(n, "current")
  );
}
function $0(n, i, o) {
  return H.useCallback(
    (l) => {
      l && n.onMount && n.onMount(l),
        i && (l ? i.mount(l) : i.unmount()),
        o && (typeof o == "function" ? o(l) : cr(o) && (o.current = l));
    },
    [i]
  );
}
const fu = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  K0 = "framerAppearId",
  jp = "data-" + fu(K0),
  Fp = H.createContext({});
function X0(n, i, o, l, c) {
  const { visualElement: d } = H.useContext(Gs),
    f = H.useContext(Cp),
    p = H.useContext(Ys),
    m = H.useContext(ru).reducedMotion,
    g = H.useRef(null);
  (l = l || f.renderer),
    !g.current &&
      l &&
      (g.current = l(n, {
        visualState: i,
        parent: d,
        props: o,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: m,
      }));
  const y = g.current,
    x = H.useContext(Fp);
  y &&
    !y.projection &&
    c &&
    (y.type === "html" || y.type === "svg") &&
    Y0(g.current, o, c, x);
  const T = H.useRef(!1);
  H.useInsertionEffect(() => {
    y && T.current && y.update(o, p);
  });
  const M = o[jp],
    N = H.useRef(
      !!M &&
        !window.MotionHandoffIsComplete?.(M) &&
        window.MotionHasOptimisedAnimation?.(M)
    );
  return (
    Nh(() => {
      y &&
        ((T.current = !0),
        (window.MotionIsMounted = !0),
        y.updateFeatures(),
        y.scheduleRenderMicrotask(),
        N.current && y.animationState && y.animationState.animateChanges());
    }),
    H.useEffect(() => {
      y &&
        (!N.current && y.animationState && y.animationState.animateChanges(),
        N.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(M);
          }),
          (N.current = !1)),
        (y.enteringChildren = void 0));
    }),
    y
  );
}
function Y0(n, i, o, l) {
  const {
    layoutId: c,
    layout: d,
    drag: f,
    dragConstraints: p,
    layoutScroll: m,
    layoutRoot: g,
    layoutCrossfade: y,
  } = i;
  (n.projection = new o(
    n.latestValues,
    i["data-framer-portal-id"] ? void 0 : Ip(n.parent)
  )),
    n.projection.setOptions({
      layoutId: c,
      layout: d,
      alwaysMeasureLayout: !!f || (p && cr(p)),
      visualElement: n,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: l,
      crossfade: y,
      layoutScroll: m,
      layoutRoot: g,
    });
}
function Ip(n) {
  if (n) return n.options.allowProjection !== !1 ? n.projection : Ip(n.parent);
}
function nl(n, { forwardMotionProps: i = !1 } = {}, o, l) {
  o && x0(o);
  const c = lu(n) ? H0 : U0;
  function d(p, m) {
    let g;
    const y = { ...H.useContext(ru), ...p, layoutId: G0(p) },
      { isStatic: x } = y,
      T = C0(p),
      M = c(p, x);
    if (!x && Fl) {
      Q0();
      const N = Z0(y);
      (g = N.MeasureLayout),
        (T.visualElement = X0(n, M, y, l, N.ProjectionNode));
    }
    return ae.jsxs(Gs.Provider, {
      value: T,
      children: [
        g && T.visualElement
          ? ae.jsx(g, { visualElement: T.visualElement, ...y })
          : null,
        z0(n, p, $0(M, T.visualElement, m), M, x, i),
      ],
    });
  }
  d.displayName = `motion.${
    typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`
  }`;
  const f = H.forwardRef(d);
  return (f[W0] = n), f;
}
function G0({ layoutId: n }) {
  const i = H.useContext(_l).id;
  return i && n !== void 0 ? i + "-" + n : n;
}
function Q0(n, i) {
  H.useContext(Cp).strict;
}
function Z0(n) {
  const { drag: i, layout: o } = yr;
  if (!i && !o) return {};
  const l = { ...i, ...o };
  return {
    MeasureLayout:
      i?.isEnabled(n) || o?.isEnabled(n) ? l.MeasureLayout : void 0,
    ProjectionNode: l.ProjectionNode,
  };
}
function q0(n, i) {
  if (typeof Proxy > "u") return nl;
  const o = new Map(),
    l = (d, f) => nl(d, f, n, i),
    c = (d, f) => l(d, f);
  return new Proxy(c, {
    get: (d, f) =>
      f === "create"
        ? l
        : (o.has(f) || o.set(f, nl(f, void 0, n, i)), o.get(f)),
  });
}
function zp({ top: n, left: i, right: o, bottom: l }) {
  return { x: { min: i, max: o }, y: { min: n, max: l } };
}
function J0({ x: n, y: i }) {
  return { top: i.min, right: n.max, bottom: i.max, left: n.min };
}
function b0(n, i) {
  if (!i) return n;
  const o = i({ x: n.left, y: n.top }),
    l = i({ x: n.right, y: n.bottom });
  return { top: o.y, left: o.x, bottom: l.y, right: l.x };
}
function rl(n) {
  return n === void 0 || n === 1;
}
function Cl({ scale: n, scaleX: i, scaleY: o }) {
  return !rl(n) || !rl(i) || !rl(o);
}
function Nn(n) {
  return (
    Cl(n) ||
    Op(n) ||
    n.z ||
    n.rotate ||
    n.rotateX ||
    n.rotateY ||
    n.skewX ||
    n.skewY
  );
}
function Op(n) {
  return Wd(n.x) || Wd(n.y);
}
function Wd(n) {
  return n && n !== "0%";
}
function Ks(n, i, o) {
  const l = n - o,
    c = i * l;
  return o + c;
}
function $d(n, i, o, l, c) {
  return c !== void 0 && (n = Ks(n, c, l)), Ks(n, o, l) + i;
}
function El(n, i = 0, o = 1, l, c) {
  (n.min = $d(n.min, i, o, l, c)), (n.max = $d(n.max, i, o, l, c));
}
function Bp(n, { x: i, y: o }) {
  El(n.x, i.translate, i.scale, i.originPoint),
    El(n.y, o.translate, o.scale, o.originPoint);
}
const Kd = 0.999999999999,
  Xd = 1.0000000000001;
function e1(n, i, o, l = !1) {
  const c = o.length;
  if (!c) return;
  i.x = i.y = 1;
  let d, f;
  for (let p = 0; p < c; p++) {
    (d = o[p]), (f = d.projectionDelta);
    const { visualElement: m } = d.options;
    (m && m.props.style && m.props.style.display === "contents") ||
      (l &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        dr(n, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
      f && ((i.x *= f.x.scale), (i.y *= f.y.scale), Bp(n, f)),
      l && Nn(d.latestValues) && dr(n, d.latestValues));
  }
  i.x < Xd && i.x > Kd && (i.x = 1), i.y < Xd && i.y > Kd && (i.y = 1);
}
function fr(n, i) {
  (n.min = n.min + i), (n.max = n.max + i);
}
function Yd(n, i, o, l, c = 0.5) {
  const d = Ce(n.min, n.max, c);
  El(n, i, o, d, l);
}
function dr(n, i) {
  Yd(n.x, i.x, i.scaleX, i.scale, i.originX),
    Yd(n.y, i.y, i.scaleY, i.scale, i.originY);
}
function Up(n, i) {
  return zp(b0(n.getBoundingClientRect(), i));
}
function t1(n, i, o) {
  const l = Up(n, o),
    { scroll: c } = i;
  return c && (fr(l.x, c.offset.x), fr(l.y, c.offset.y)), l;
}
const Gd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  hr = () => ({ x: Gd(), y: Gd() }),
  Qd = () => ({ min: 0, max: 0 }),
  _e = () => ({ x: Qd(), y: Qd() }),
  Ml = { current: null },
  Hp = { current: !1 };
function n1() {
  if (((Hp.current = !0), !!Fl))
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"),
        i = () => (Ml.current = n.matches);
      n.addEventListener("change", i), i();
    } else Ml.current = !1;
}
const r1 = new WeakMap();
function i1(n, i, o) {
  for (const l in i) {
    const c = i[l],
      d = o[l];
    if (Xe(c)) n.addValue(l, c);
    else if (Xe(d)) n.addValue(l, mr(c, { owner: n }));
    else if (d !== c)
      if (n.hasValue(l)) {
        const f = n.getValue(l);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = n.getStaticValue(l);
        n.addValue(l, mr(f !== void 0 ? f : c, { owner: n }));
      }
  }
  for (const l in o) i[l] === void 0 && n.removeValue(l);
  return i;
}
const Zd = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class s1 {
  scrapeMotionValuesFromProps(i, o, l) {
    return {};
  }
  constructor(
    {
      parent: i,
      props: o,
      presenceContext: l,
      reducedMotionConfig: c,
      blockInitialAnimation: d,
      visualState: f,
    },
    p = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Jl),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const T = st.now();
        this.renderScheduledAt < T &&
          ((this.renderScheduledAt = T), Te.render(this.render, !1, !0));
      });
    const { latestValues: m, renderState: g } = f;
    (this.latestValues = m),
      (this.baseTarget = { ...m }),
      (this.initialValues = o.initial ? { ...m } : {}),
      (this.renderState = g),
      (this.parent = i),
      (this.props = o),
      (this.presenceContext = l),
      (this.depth = i ? i.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.options = p),
      (this.blockInitialAnimation = !!d),
      (this.isControllingVariants = Zs(o)),
      (this.isVariantNode = Mp(o)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(i && i.current));
    const { willChange: y, ...x } = this.scrapeMotionValuesFromProps(
      o,
      {},
      this
    );
    for (const T in x) {
      const M = x[T];
      m[T] !== void 0 && Xe(M) && M.set(m[T]);
    }
  }
  mount(i) {
    (this.current = i),
      r1.set(i, this),
      this.projection && !this.projection.instance && this.projection.mount(i),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((o, l) => this.bindToMotionValue(l, o)),
      Hp.current || n1(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Ml.current),
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(),
      mn(this.notifyUpdate),
      mn(this.render),
      this.valueSubscriptions.forEach((i) => i()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this);
    for (const i in this.events) this.events[i].clear();
    for (const i in this.features) {
      const o = this.features[i];
      o && (o.unmount(), (o.isMounted = !1));
    }
    this.current = null;
  }
  addChild(i) {
    this.children.add(i),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(i);
  }
  removeChild(i) {
    this.children.delete(i),
      this.enteringChildren && this.enteringChildren.delete(i);
  }
  bindToMotionValue(i, o) {
    this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)();
    const l = wr.has(i);
    l && this.onBindTransform && this.onBindTransform();
    const c = o.on("change", (f) => {
      (this.latestValues[i] = f),
        this.props.onUpdate && Te.preRender(this.notifyUpdate),
        l && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender();
    });
    let d;
    window.MotionCheckAppearSync &&
      (d = window.MotionCheckAppearSync(this, i, o)),
      this.valueSubscriptions.set(i, () => {
        c(), d && d(), o.owner && o.stop();
      });
  }
  sortNodePosition(i) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== i.type
      ? 0
      : this.sortInstanceNodePosition(this.current, i.current);
  }
  updateFeatures() {
    let i = "animation";
    for (i in yr) {
      const o = yr[i];
      if (!o) continue;
      const { isEnabled: l, Feature: c } = o;
      if (
        (!this.features[i] &&
          c &&
          l(this.props) &&
          (this.features[i] = new c(this)),
        this.features[i])
      ) {
        const d = this.features[i];
        d.isMounted ? d.update() : (d.mount(), (d.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : _e();
  }
  getStaticValue(i) {
    return this.latestValues[i];
  }
  setStaticValue(i, o) {
    this.latestValues[i] = o;
  }
  update(i, o) {
    (i.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = i),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = o);
    for (let l = 0; l < Zd.length; l++) {
      const c = Zd[l];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](),
        delete this.propEventSubscriptions[c]);
      const d = "on" + c,
        f = i[d];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    (this.prevMotionValues = i1(
      this,
      this.scrapeMotionValuesFromProps(i, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(i) {
    return this.props.variants ? this.props.variants[i] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(i) {
    const o = this.getClosestVariantNode();
    if (o)
      return (
        o.variantChildren && o.variantChildren.add(i),
        () => o.variantChildren.delete(i)
      );
  }
  addValue(i, o) {
    const l = this.values.get(i);
    o !== l &&
      (l && this.removeValue(i),
      this.bindToMotionValue(i, o),
      this.values.set(i, o),
      (this.latestValues[i] = o.get()));
  }
  removeValue(i) {
    this.values.delete(i);
    const o = this.valueSubscriptions.get(i);
    o && (o(), this.valueSubscriptions.delete(i)),
      delete this.latestValues[i],
      this.removeValueFromRenderState(i, this.renderState);
  }
  hasValue(i) {
    return this.values.has(i);
  }
  getValue(i, o) {
    if (this.props.values && this.props.values[i]) return this.props.values[i];
    let l = this.values.get(i);
    return (
      l === void 0 &&
        o !== void 0 &&
        ((l = mr(o === null ? void 0 : o, { owner: this })),
        this.addValue(i, l)),
      l
    );
  }
  readValue(i, o) {
    let l =
      this.latestValues[i] !== void 0 || !this.current
        ? this.latestValues[i]
        : this.getBaseTargetFromProps(this.props, i) ??
          this.readValueFromInstance(this.current, i, this.options);
    return (
      l != null &&
        (typeof l == "string" && (Lh(l) || jh(l))
          ? (l = parseFloat(l))
          : !d0(l) && yn.test(o) && (l = gp(i, o)),
        this.setBaseTarget(i, Xe(l) ? l.get() : l)),
      Xe(l) ? l.get() : l
    );
  }
  setBaseTarget(i, o) {
    this.baseTarget[i] = o;
  }
  getBaseTarget(i) {
    const { initial: o } = this.props;
    let l;
    if (typeof o == "string" || typeof o == "object") {
      const d = uu(this.props, o, this.presenceContext?.custom);
      d && (l = d[i]);
    }
    if (o && l !== void 0) return l;
    const c = this.getBaseTargetFromProps(this.props, i);
    return c !== void 0 && !Xe(c)
      ? c
      : this.initialValues[i] !== void 0 && l === void 0
      ? void 0
      : this.baseTarget[i];
  }
  on(i, o) {
    return this.events[i] || (this.events[i] = new Ul()), this.events[i].add(o);
  }
  notify(i, ...o) {
    this.events[i] && this.events[i].notify(...o);
  }
  scheduleRenderMicrotask() {
    tu.render(this.render);
  }
}
class Wp extends s1 {
  constructor() {
    super(...arguments), (this.KeyframeResolver = e0);
  }
  sortInstanceNodePosition(i, o) {
    return i.compareDocumentPosition(o) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(i, o) {
    return i.style ? i.style[o] : void 0;
  }
  removeValueFromRenderState(i, { vars: o, style: l }) {
    delete o[i], delete l[i];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: i } = this.props;
    Xe(i) &&
      (this.childSubscription = i.on("change", (o) => {
        this.current && (this.current.textContent = `${o}`);
      }));
  }
}
function $p(n, { style: i, vars: o }, l, c) {
  const d = n.style;
  let f;
  for (f in i) d[f] = i[f];
  c?.applyProjectionStyles(d, l);
  for (f in o) d.setProperty(f, o[f]);
}
function o1(n) {
  return window.getComputedStyle(n);
}
class a1 extends Wp {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = $p);
  }
  readValueFromInstance(i, o) {
    if (wr.has(o)) return this.projection?.isProjecting ? gl(o) : wv(i, o);
    {
      const l = o1(i),
        c = (Qh(o) ? l.getPropertyValue(o) : l[o]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: o }) {
    return Up(i, o);
  }
  build(i, o, l) {
    ou(i, o, l.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, o, l) {
    return cu(i, o, l);
  }
}
const Kp = new Set([
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
  "lengthAdjust",
]);
function l1(n, i, o, l) {
  $p(n, i, void 0, l);
  for (const c in i.attrs) n.setAttribute(Kp.has(c) ? c : fu(c), i.attrs[c]);
}
class u1 extends Wp {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = _e);
  }
  getBaseTargetFromProps(i, o) {
    return i[o];
  }
  readValueFromInstance(i, o) {
    if (wr.has(o)) {
      const l = yp(o);
      return (l && l.default) || 0;
    }
    return (o = Kp.has(o) ? o : fu(o)), i.getAttribute(o);
  }
  scrapeMotionValuesFromProps(i, o, l) {
    return _p(i, o, l);
  }
  build(i, o, l) {
    Ap(i, o, this.isSVGTag, l.transformTemplate, l.style);
  }
  renderInstance(i, o, l, c) {
    l1(i, o, l, c);
  }
  mount(i) {
    (this.isSVGTag = Np(i.tagName)), super.mount(i);
  }
}
const c1 = (n, i) =>
  lu(n) ? new u1(i) : new a1(i, { allowProjection: n !== H.Fragment });
function pr(n, i, o) {
  const l = n.getProps();
  return uu(l, i, o !== void 0 ? o : l.custom, n);
}
const Rl = (n) => Array.isArray(n);
function f1(n, i, o) {
  n.hasValue(i) ? n.getValue(i).set(o) : n.addValue(i, mr(o));
}
function d1(n) {
  return Rl(n) ? n[n.length - 1] || 0 : n;
}
function h1(n, i) {
  const o = pr(n, i);
  let { transitionEnd: l = {}, transition: c = {}, ...d } = o || {};
  d = { ...d, ...l };
  for (const f in d) {
    const p = d1(d[f]);
    f1(n, f, p);
  }
}
function p1(n) {
  return !!(Xe(n) && n.add);
}
function Dl(n, i) {
  const o = n.getValue("willChange");
  if (p1(o)) return o.add(i);
  if (!o && Yt.WillChange) {
    const l = new Yt.WillChange("auto");
    n.addValue("willChange", l), l.add(i);
  }
}
function Xp(n) {
  return n.props[jp];
}
const m1 = (n) => n !== null;
function y1(n, { repeat: i, repeatType: o = "loop" }, l) {
  const c = n.filter(m1),
    d = i && o !== "loop" && i % 2 === 1 ? 0 : c.length - 1;
  return c[d];
}
const g1 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  v1 = (n) => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  w1 = { type: "keyframes", duration: 0.8 },
  x1 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  S1 = (n, { keyframes: i }) =>
    i.length > 2
      ? w1
      : wr.has(n)
      ? n.startsWith("scale")
        ? v1(i[1])
        : g1
      : x1;
function T1({
  when: n,
  delay: i,
  delayChildren: o,
  staggerChildren: l,
  staggerDirection: c,
  repeat: d,
  repeatType: f,
  repeatDelay: p,
  from: m,
  elapsed: g,
  ...y
}) {
  return !!Object.keys(y).length;
}
const du =
  (n, i, o, l = {}, c, d) =>
  (f) => {
    const p = bl(l, n) || {},
      m = p.delay || l.delay || 0;
    let { elapsed: g = 0 } = l;
    g = g - Ft(m);
    const y = {
      keyframes: Array.isArray(o) ? o : [null, o],
      ease: "easeOut",
      velocity: i.getVelocity(),
      ...p,
      delay: -g,
      onUpdate: (T) => {
        i.set(T), p.onUpdate && p.onUpdate(T);
      },
      onComplete: () => {
        f(), p.onComplete && p.onComplete();
      },
      name: n,
      motionValue: i,
      element: d ? void 0 : c,
    };
    T1(p) || Object.assign(y, S1(n, y)),
      y.duration && (y.duration = Ft(y.duration)),
      y.repeatDelay && (y.repeatDelay = Ft(y.repeatDelay)),
      y.from !== void 0 && (y.keyframes[0] = y.from);
    let x = !1;
    if (
      ((y.type === !1 || (y.duration === 0 && !y.repeatDelay)) &&
        (Tl(y), y.delay === 0 && (x = !0)),
      (Yt.instantAnimations || Yt.skipAnimations) &&
        ((x = !0), Tl(y), (y.delay = 0)),
      (y.allowFlatten = !p.type && !p.ease),
      x && !d && i.get() !== void 0)
    ) {
      const T = y1(y.keyframes, p);
      if (T !== void 0) {
        Te.update(() => {
          y.onUpdate(T), y.onComplete();
        });
        return;
      }
    }
    return p.isSync ? new ql(y) : new Hv(y);
  };
function k1({ protectedKeys: n, needsAnimating: i }, o) {
  const l = n.hasOwnProperty(o) && i[o] !== !0;
  return (i[o] = !1), l;
}
function Yp(n, i, { delay: o = 0, transitionOverride: l, type: c } = {}) {
  let { transition: d = n.getDefaultTransition(), transitionEnd: f, ...p } = i;
  l && (d = l);
  const m = [],
    g = c && n.animationState && n.animationState.getState()[c];
  for (const y in p) {
    const x = n.getValue(y, n.latestValues[y] ?? null),
      T = p[y];
    if (T === void 0 || (g && k1(g, y))) continue;
    const M = { delay: o, ...bl(d || {}, y) },
      N = x.get();
    if (
      N !== void 0 &&
      !x.isAnimating &&
      !Array.isArray(T) &&
      T === N &&
      !M.velocity
    )
      continue;
    let L = !1;
    if (window.MotionHandoffAnimation) {
      const I = Xp(n);
      if (I) {
        const U = window.MotionHandoffAnimation(I, y, Te);
        U !== null && ((M.startTime = U), (L = !0));
      }
    }
    Dl(n, y),
      x.start(
        du(y, x, T, n.shouldReduceMotion && hp.has(y) ? { type: !1 } : M, n, L)
      );
    const j = x.animation;
    j && m.push(j);
  }
  return (
    f &&
      Promise.all(m).then(() => {
        Te.update(() => {
          f && h1(n, f);
        });
      }),
    m
  );
}
function Gp(n, i, o, l = 0, c = 1) {
  const d = Array.from(n)
      .sort((g, y) => g.sortNodePosition(y))
      .indexOf(i),
    f = n.size,
    p = (f - 1) * l;
  return typeof o == "function" ? o(d, f) : c === 1 ? d * l : p - d * l;
}
function Al(n, i, o = {}) {
  const l = pr(n, i, o.type === "exit" ? n.presenceContext?.custom : void 0);
  let { transition: c = n.getDefaultTransition() || {} } = l || {};
  o.transitionOverride && (c = o.transitionOverride);
  const d = l ? () => Promise.all(Yp(n, l, o)) : () => Promise.resolve(),
    f =
      n.variantChildren && n.variantChildren.size
        ? (m = 0) => {
            const {
              delayChildren: g = 0,
              staggerChildren: y,
              staggerDirection: x,
            } = c;
            return P1(n, i, m, g, y, x, o);
          }
        : () => Promise.resolve(),
    { when: p } = c;
  if (p) {
    const [m, g] = p === "beforeChildren" ? [d, f] : [f, d];
    return m().then(() => g());
  } else return Promise.all([d(), f(o.delay)]);
}
function P1(n, i, o = 0, l = 0, c = 0, d = 1, f) {
  const p = [];
  for (const m of n.variantChildren)
    m.notify("AnimationStart", i),
      p.push(
        Al(m, i, {
          ...f,
          delay:
            o +
            (typeof l == "function" ? 0 : l) +
            Gp(n.variantChildren, m, l, c, d),
        }).then(() => m.notify("AnimationComplete", i))
      );
  return Promise.all(p);
}
function C1(n, i, o = {}) {
  n.notify("AnimationStart", i);
  let l;
  if (Array.isArray(i)) {
    const c = i.map((d) => Al(n, d, o));
    l = Promise.all(c);
  } else if (typeof i == "string") l = Al(n, i, o);
  else {
    const c = typeof i == "function" ? pr(n, i, o.custom) : i;
    l = Promise.all(Yp(n, c, o));
  }
  return l.then(() => {
    n.notify("AnimationComplete", i);
  });
}
function Qp(n, i) {
  if (!Array.isArray(i)) return !1;
  const o = i.length;
  if (o !== n.length) return !1;
  for (let l = 0; l < o; l++) if (i[l] !== n[l]) return !1;
  return !0;
}
const E1 = su.length;
function Zp(n) {
  if (!n) return;
  if (!n.isControllingVariants) {
    const o = n.parent ? Zp(n.parent) || {} : {};
    return n.props.initial !== void 0 && (o.initial = n.props.initial), o;
  }
  const i = {};
  for (let o = 0; o < E1; o++) {
    const l = su[o],
      c = n.props[l];
    (mi(c) || c === !1) && (i[l] = c);
  }
  return i;
}
const M1 = [...iu].reverse(),
  R1 = iu.length;
function D1(n) {
  return (i) =>
    Promise.all(i.map(({ animation: o, options: l }) => C1(n, o, l)));
}
function A1(n) {
  let i = D1(n),
    o = qd(),
    l = !0;
  const c = (m) => (g, y) => {
    const x = pr(n, y, m === "exit" ? n.presenceContext?.custom : void 0);
    if (x) {
      const { transition: T, transitionEnd: M, ...N } = x;
      g = { ...g, ...N, ...M };
    }
    return g;
  };
  function d(m) {
    i = m(n);
  }
  function f(m) {
    const { props: g } = n,
      y = Zp(n.parent) || {},
      x = [],
      T = new Set();
    let M = {},
      N = 1 / 0;
    for (let j = 0; j < R1; j++) {
      const I = M1[j],
        U = o[I],
        z = g[I] !== void 0 ? g[I] : y[I],
        Z = mi(z),
        X = I === m ? U.isActive : null;
      X === !1 && (N = j);
      let q = z === y[I] && z !== g[I] && Z;
      if (
        (q && l && n.manuallyAnimateOnMount && (q = !1),
        (U.protectedKeys = { ...M }),
        (!U.isActive && X === null) ||
          (!z && !U.prevProp) ||
          Qs(z) ||
          typeof z == "boolean")
      )
        continue;
      const ee = V1(U.prevProp, z);
      let Q = ee || (I === m && U.isActive && !q && Z) || (j > N && Z),
        pe = !1;
      const ge = Array.isArray(z) ? z : [z];
      let Ue = ge.reduce(c(I), {});
      X === !1 && (Ue = {});
      const { prevResolvedValues: ot = {} } = U,
        Ye = { ...ot, ...Ue },
        Je = (re) => {
          (Q = !0),
            T.has(re) && ((pe = !0), T.delete(re)),
            (U.needsAnimating[re] = !0);
          const F = n.getValue(re);
          F && (F.liveStyle = !1);
        };
      for (const re in Ye) {
        const F = Ue[re],
          G = ot[re];
        if (M.hasOwnProperty(re)) continue;
        let O = !1;
        Rl(F) && Rl(G) ? (O = !Qp(F, G)) : (O = F !== G),
          O
            ? F != null
              ? Je(re)
              : T.add(re)
            : F !== void 0 && T.has(re)
            ? Je(re)
            : (U.protectedKeys[re] = !0);
      }
      (U.prevProp = z),
        (U.prevResolvedValues = Ue),
        U.isActive && (M = { ...M, ...Ue }),
        l && n.blockInitialAnimation && (Q = !1);
      const at = q && ee;
      Q &&
        (!at || pe) &&
        x.push(
          ...ge.map((re) => {
            const F = { type: I };
            if (
              typeof re == "string" &&
              l &&
              !at &&
              n.manuallyAnimateOnMount &&
              n.parent
            ) {
              const { parent: G } = n,
                O = pr(G, re);
              if (G.enteringChildren && O) {
                const { delayChildren: k } = O.transition || {};
                F.delay = Gp(G.enteringChildren, n, k);
              }
            }
            return { animation: re, options: F };
          })
        );
    }
    if (T.size) {
      const j = {};
      if (typeof g.initial != "boolean") {
        const I = pr(n, Array.isArray(g.initial) ? g.initial[0] : g.initial);
        I && I.transition && (j.transition = I.transition);
      }
      T.forEach((I) => {
        const U = n.getBaseTarget(I),
          z = n.getValue(I);
        z && (z.liveStyle = !0), (j[I] = U ?? null);
      }),
        x.push({ animation: j });
    }
    let L = !!x.length;
    return (
      l &&
        (g.initial === !1 || g.initial === g.animate) &&
        !n.manuallyAnimateOnMount &&
        (L = !1),
      (l = !1),
      L ? i(x) : Promise.resolve()
    );
  }
  function p(m, g) {
    if (o[m].isActive === g) return Promise.resolve();
    n.variantChildren?.forEach((x) => x.animationState?.setActive(m, g)),
      (o[m].isActive = g);
    const y = f(m);
    for (const x in o) o[x].protectedKeys = {};
    return y;
  }
  return {
    animateChanges: f,
    setActive: p,
    setAnimateFunction: d,
    getState: () => o,
    reset: () => {
      o = qd();
    },
  };
}
function V1(n, i) {
  return typeof i == "string" ? i !== n : Array.isArray(i) ? !Qp(i, n) : !1;
}
function Vn(n = !1) {
  return {
    isActive: n,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function qd() {
  return {
    animate: Vn(!0),
    whileInView: Vn(),
    whileHover: Vn(),
    whileTap: Vn(),
    whileDrag: Vn(),
    whileFocus: Vn(),
    exit: Vn(),
  };
}
class gn {
  constructor(i) {
    (this.isMounted = !1), (this.node = i);
  }
  update() {}
}
class N1 extends gn {
  constructor(i) {
    super(i), i.animationState || (i.animationState = A1(i));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    Qs(i) && (this.unmountControls = i.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: i } = this.node.getProps(),
      { animate: o } = this.node.prevProps || {};
    i !== o && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let L1 = 0;
class _1 extends gn {
  constructor() {
    super(...arguments), (this.id = L1++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: i, onExitComplete: o } = this.node.presenceContext,
      { isPresent: l } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || i === l) return;
    const c = this.node.animationState.setActive("exit", !i);
    o &&
      !i &&
      c.then(() => {
        o(this.id);
      });
  }
  mount() {
    const { register: i, onExitComplete: o } = this.node.presenceContext || {};
    o && o(this.id), i && (this.unmount = i(this.id));
  }
  unmount() {}
}
const j1 = { animation: { Feature: N1 }, exit: { Feature: _1 } };
function yi(n, i, o, l = { passive: !0 }) {
  return n.addEventListener(i, o, l), () => n.removeEventListener(i, o);
}
function xi(n) {
  return { point: { x: n.pageX, y: n.pageY } };
}
const F1 = (n) => (i) => nu(i) && n(i, xi(i));
function ci(n, i, o, l) {
  return yi(n, i, F1(o), l);
}
const qp = 1e-4,
  I1 = 1 - qp,
  z1 = 1 + qp,
  Jp = 0.01,
  O1 = 0 - Jp,
  B1 = 0 + Jp;
function qe(n) {
  return n.max - n.min;
}
function U1(n, i, o) {
  return Math.abs(n - i) <= o;
}
function Jd(n, i, o, l = 0.5) {
  (n.origin = l),
    (n.originPoint = Ce(i.min, i.max, n.origin)),
    (n.scale = qe(o) / qe(i)),
    (n.translate = Ce(o.min, o.max, n.origin) - n.originPoint),
    ((n.scale >= I1 && n.scale <= z1) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= O1 && n.translate <= B1) || isNaN(n.translate)) &&
      (n.translate = 0);
}
function fi(n, i, o, l) {
  Jd(n.x, i.x, o.x, l ? l.originX : void 0),
    Jd(n.y, i.y, o.y, l ? l.originY : void 0);
}
function bd(n, i, o) {
  (n.min = o.min + i.min), (n.max = n.min + qe(i));
}
function H1(n, i, o) {
  bd(n.x, i.x, o.x), bd(n.y, i.y, o.y);
}
function eh(n, i, o) {
  (n.min = i.min - o.min), (n.max = n.min + qe(i));
}
function Xs(n, i, o) {
  eh(n.x, i.x, o.x), eh(n.y, i.y, o.y);
}
function wt(n) {
  return [n("x"), n("y")];
}
const bp = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  th = (n, i) => Math.abs(n - i);
function W1(n, i) {
  const o = th(n.x, i.x),
    l = th(n.y, i.y);
  return Math.sqrt(o ** 2 + l ** 2);
}
class em {
  constructor(
    i,
    o,
    {
      transformPagePoint: l,
      contextWindow: c = window,
      dragSnapToOrigin: d = !1,
      distanceThreshold: f = 3,
    } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const T = sl(this.lastMoveEventInfo, this.history),
          M = this.startEvent !== null,
          N = W1(T.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!M && !N) return;
        const { point: L } = T,
          { timestamp: j } = Be;
        this.history.push({ ...L, timestamp: j });
        const { onStart: I, onMove: U } = this.handlers;
        M ||
          (I && I(this.lastMoveEvent, T),
          (this.startEvent = this.lastMoveEvent)),
          U && U(this.lastMoveEvent, T);
      }),
      (this.handlePointerMove = (T, M) => {
        (this.lastMoveEvent = T),
          (this.lastMoveEventInfo = il(M, this.transformPagePoint)),
          Te.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (T, M) => {
        this.end();
        const { onEnd: N, onSessionEnd: L, resumeAnimation: j } = this.handlers;
        if (
          (this.dragSnapToOrigin && j && j(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const I = sl(
          T.type === "pointercancel"
            ? this.lastMoveEventInfo
            : il(M, this.transformPagePoint),
          this.history
        );
        this.startEvent && N && N(T, I), L && L(T, I);
      }),
      !nu(i))
    )
      return;
    (this.dragSnapToOrigin = d),
      (this.handlers = o),
      (this.transformPagePoint = l),
      (this.distanceThreshold = f),
      (this.contextWindow = c || window);
    const p = xi(i),
      m = il(p, this.transformPagePoint),
      { point: g } = m,
      { timestamp: y } = Be;
    this.history = [{ ...g, timestamp: y }];
    const { onSessionStart: x } = o;
    x && x(i, sl(m, this.history)),
      (this.removeListeners = gi(
        ci(this.contextWindow, "pointermove", this.handlePointerMove),
        ci(this.contextWindow, "pointerup", this.handlePointerUp),
        ci(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    this.removeListeners && this.removeListeners(), mn(this.updatePoint);
  }
}
function il(n, i) {
  return i ? { point: i(n.point) } : n;
}
function nh(n, i) {
  return { x: n.x - i.x, y: n.y - i.y };
}
function sl({ point: n }, i) {
  return {
    point: n,
    delta: nh(n, tm(i)),
    offset: nh(n, $1(i)),
    velocity: K1(i, 0.1),
  };
}
function $1(n) {
  return n[0];
}
function tm(n) {
  return n[n.length - 1];
}
function K1(n, i) {
  if (n.length < 2) return { x: 0, y: 0 };
  let o = n.length - 1,
    l = null;
  const c = tm(n);
  for (; o >= 0 && ((l = n[o]), !(c.timestamp - l.timestamp > Ft(i))); ) o--;
  if (!l) return { x: 0, y: 0 };
  const d = xt(c.timestamp - l.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const f = { x: (c.x - l.x) / d, y: (c.y - l.y) / d };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function X1(n, { min: i, max: o }, l) {
  return (
    i !== void 0 && n < i
      ? (n = l ? Ce(i, n, l.min) : Math.max(n, i))
      : o !== void 0 && n > o && (n = l ? Ce(o, n, l.max) : Math.min(n, o)),
    n
  );
}
function rh(n, i, o) {
  return {
    min: i !== void 0 ? n.min + i : void 0,
    max: o !== void 0 ? n.max + o - (n.max - n.min) : void 0,
  };
}
function Y1(n, { top: i, left: o, bottom: l, right: c }) {
  return { x: rh(n.x, o, c), y: rh(n.y, i, l) };
}
function ih(n, i) {
  let o = i.min - n.min,
    l = i.max - n.max;
  return i.max - i.min < n.max - n.min && ([o, l] = [l, o]), { min: o, max: l };
}
function G1(n, i) {
  return { x: ih(n.x, i.x), y: ih(n.y, i.y) };
}
function Q1(n, i) {
  let o = 0.5;
  const l = qe(n),
    c = qe(i);
  return (
    c > l
      ? (o = di(i.min, i.max - l, n.min))
      : l > c && (o = di(n.min, n.max - c, i.min)),
    Xt(0, 1, o)
  );
}
function Z1(n, i) {
  const o = {};
  return (
    i.min !== void 0 && (o.min = i.min - n.min),
    i.max !== void 0 && (o.max = i.max - n.min),
    o
  );
}
const Vl = 0.35;
function q1(n = Vl) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = Vl),
    { x: sh(n, "left", "right"), y: sh(n, "top", "bottom") }
  );
}
function sh(n, i, o) {
  return { min: oh(n, i), max: oh(n, o) };
}
function oh(n, i) {
  return typeof n == "number" ? n : n[i] || 0;
}
const J1 = new WeakMap();
class b1 {
  constructor(i) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = _e()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = i);
  }
  start(i, { snapToCursor: o = !1, distanceThreshold: l } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1) return;
    const d = (x) => {
        const { dragSnapToOrigin: T } = this.getProps();
        T ? this.pauseAnimation() : this.stopAnimation(),
          o && this.snapToCursor(xi(x).point);
      },
      f = (x, T) => {
        const { drag: M, dragPropagation: N, onDragStart: L } = this.getProps();
        if (
          M &&
          !N &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = i0(M)),
          !this.openDragLock)
        )
          return;
        (this.latestPointerEvent = x),
          (this.latestPanInfo = T),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          wt((I) => {
            let U = this.getAxisMotionValue(I).get() || 0;
            if (It.test(U)) {
              const { projection: z } = this.visualElement;
              if (z && z.layout) {
                const Z = z.layout.layoutBox[I];
                Z && (U = qe(Z) * (parseFloat(U) / 100));
              }
            }
            this.originPoint[I] = U;
          }),
          L && Te.postRender(() => L(x, T)),
          Dl(this.visualElement, "transform");
        const { animationState: j } = this.visualElement;
        j && j.setActive("whileDrag", !0);
      },
      p = (x, T) => {
        (this.latestPointerEvent = x), (this.latestPanInfo = T);
        const {
          dragPropagation: M,
          dragDirectionLock: N,
          onDirectionLock: L,
          onDrag: j,
        } = this.getProps();
        if (!M && !this.openDragLock) return;
        const { offset: I } = T;
        if (N && this.currentDirection === null) {
          (this.currentDirection = ew(I)),
            this.currentDirection !== null && L && L(this.currentDirection);
          return;
        }
        this.updateAxis("x", T.point, I),
          this.updateAxis("y", T.point, I),
          this.visualElement.render(),
          j && j(x, T);
      },
      m = (x, T) => {
        (this.latestPointerEvent = x),
          (this.latestPanInfo = T),
          this.stop(x, T),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null);
      },
      g = () =>
        wt(
          (x) =>
            this.getAnimationState(x) === "paused" &&
            this.getAxisMotionValue(x).animation?.play()
        ),
      { dragSnapToOrigin: y } = this.getProps();
    this.panSession = new em(
      i,
      {
        onSessionStart: d,
        onStart: f,
        onMove: p,
        onSessionEnd: m,
        resumeAnimation: g,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: y,
        distanceThreshold: l,
        contextWindow: bp(this.visualElement),
      }
    );
  }
  stop(i, o) {
    const l = i || this.latestPointerEvent,
      c = o || this.latestPanInfo,
      d = this.isDragging;
    if ((this.cancel(), !d || !c || !l)) return;
    const { velocity: f } = c;
    this.startAnimation(f);
    const { onDragEnd: p } = this.getProps();
    p && Te.postRender(() => p(l, c));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: i, animationState: o } = this.visualElement;
    i && (i.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: l } = this.getProps();
    !l &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      o && o.setActive("whileDrag", !1);
  }
  updateAxis(i, o, l) {
    const { drag: c } = this.getProps();
    if (!l || !js(i, c, this.currentDirection)) return;
    const d = this.getAxisMotionValue(i);
    let f = this.originPoint[i] + l[i];
    this.constraints &&
      this.constraints[i] &&
      (f = X1(f, this.constraints[i], this.elastic[i])),
      d.set(f);
  }
  resolveConstraints() {
    const { dragConstraints: i, dragElastic: o } = this.getProps(),
      l =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : this.visualElement.projection?.layout,
      c = this.constraints;
    i && cr(i)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : i && l
      ? (this.constraints = Y1(l.layoutBox, i))
      : (this.constraints = !1),
      (this.elastic = q1(o)),
      c !== this.constraints &&
        l &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        wt((d) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(d) &&
            (this.constraints[d] = Z1(l.layoutBox[d], this.constraints[d]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: o } = this.getProps();
    if (!i || !cr(i)) return !1;
    const l = i.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const d = t1(l, c.root, this.visualElement.getTransformPagePoint());
    let f = G1(c.layout.layoutBox, d);
    if (o) {
      const p = o(J0(f));
      (this.hasMutatedConstraints = !!p), p && (f = zp(p));
    }
    return f;
  }
  startAnimation(i) {
    const {
        drag: o,
        dragMomentum: l,
        dragElastic: c,
        dragTransition: d,
        dragSnapToOrigin: f,
        onDragTransitionEnd: p,
      } = this.getProps(),
      m = this.constraints || {},
      g = wt((y) => {
        if (!js(y, o, this.currentDirection)) return;
        let x = (m && m[y]) || {};
        f && (x = { min: 0, max: 0 });
        const T = c ? 200 : 1e6,
          M = c ? 40 : 1e7,
          N = {
            type: "inertia",
            velocity: l ? i[y] : 0,
            bounceStiffness: T,
            bounceDamping: M,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...x,
          };
        return this.startAxisValueAnimation(y, N);
      });
    return Promise.all(g).then(p);
  }
  startAxisValueAnimation(i, o) {
    const l = this.getAxisMotionValue(i);
    return (
      Dl(this.visualElement, i), l.start(du(i, l, 0, o, this.visualElement, !1))
    );
  }
  stopAnimation() {
    wt((i) => this.getAxisMotionValue(i).stop());
  }
  pauseAnimation() {
    wt((i) => this.getAxisMotionValue(i).animation?.pause());
  }
  getAnimationState(i) {
    return this.getAxisMotionValue(i).animation?.state;
  }
  getAxisMotionValue(i) {
    const o = `_drag${i.toUpperCase()}`,
      l = this.visualElement.getProps(),
      c = l[o];
    return (
      c ||
      this.visualElement.getValue(i, (l.initial ? l.initial[i] : void 0) || 0)
    );
  }
  snapToCursor(i) {
    wt((o) => {
      const { drag: l } = this.getProps();
      if (!js(o, l, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        d = this.getAxisMotionValue(o);
      if (c && c.layout) {
        const { min: f, max: p } = c.layout.layoutBox[o];
        d.set(i[o] - Ce(f, p, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: i, dragConstraints: o } = this.getProps(),
      { projection: l } = this.visualElement;
    if (!cr(o) || !l || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    wt((f) => {
      const p = this.getAxisMotionValue(f);
      if (p && this.constraints !== !1) {
        const m = p.get();
        c[f] = Q1({ min: m, max: m }, this.constraints[f]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      l.root && l.root.updateScroll(),
      l.updateLayout(),
      this.resolveConstraints(),
      wt((f) => {
        if (!js(f, i, null)) return;
        const p = this.getAxisMotionValue(f),
          { min: m, max: g } = this.constraints[f];
        p.set(Ce(m, g, c[f]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    J1.set(this.visualElement, this);
    const i = this.visualElement.current,
      o = ci(i, "pointerdown", (m) => {
        const { drag: g, dragListener: y = !0 } = this.getProps();
        g && y && this.start(m);
      }),
      l = () => {
        const { dragConstraints: m } = this.getProps();
        cr(m) && m.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: c } = this.visualElement,
      d = c.addEventListener("measure", l);
    c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()),
      Te.read(l);
    const f = yi(window, "resize", () => this.scalePositionWithinConstraints()),
      p = c.addEventListener(
        "didUpdate",
        ({ delta: m, hasLayoutChanged: g }) => {
          this.isDragging &&
            g &&
            (wt((y) => {
              const x = this.getAxisMotionValue(y);
              x &&
                ((this.originPoint[y] += m[y].translate),
                x.set(x.get() + m[y].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      f(), o(), d(), p && p();
    };
  }
  getProps() {
    const i = this.visualElement.getProps(),
      {
        drag: o = !1,
        dragDirectionLock: l = !1,
        dragPropagation: c = !1,
        dragConstraints: d = !1,
        dragElastic: f = Vl,
        dragMomentum: p = !0,
      } = i;
    return {
      ...i,
      drag: o,
      dragDirectionLock: l,
      dragPropagation: c,
      dragConstraints: d,
      dragElastic: f,
      dragMomentum: p,
    };
  }
}
function js(n, i, o) {
  return (i === !0 || i === n) && (o === null || o === n);
}
function ew(n, i = 10) {
  let o = null;
  return Math.abs(n.y) > i ? (o = "y") : Math.abs(n.x) > i && (o = "x"), o;
}
class tw extends gn {
  constructor(i) {
    super(i),
      (this.removeGroupControls = St),
      (this.removeListeners = St),
      (this.controls = new b1(i));
  }
  mount() {
    const { dragControls: i } = this.node.getProps();
    i && (this.removeGroupControls = i.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || St);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const ah = (n) => (i, o) => {
  n && Te.postRender(() => n(i, o));
};
class nw extends gn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = St);
  }
  onPointerDown(i) {
    this.session = new em(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: bp(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: i,
      onPanStart: o,
      onPan: l,
      onPanEnd: c,
    } = this.node.getProps();
    return {
      onSessionStart: ah(i),
      onStart: ah(o),
      onMove: l,
      onEnd: (d, f) => {
        delete this.session, c && Te.postRender(() => c(d, f));
      },
    };
  }
  mount() {
    this.removePointerDownListener = ci(this.node.current, "pointerdown", (i) =>
      this.onPointerDown(i)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Bs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
let ol = !1;
class rw extends H.Component {
  componentDidMount() {
    const {
        visualElement: i,
        layoutGroup: o,
        switchLayoutGroup: l,
        layoutId: c,
      } = this.props,
      { projection: d } = i;
    d &&
      (o.group && o.group.add(d),
      l && l.register && c && l.register(d),
      ol && d.root.didUpdate(),
      d.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      d.setOptions({
        ...d.options,
        onExitComplete: () => this.safeToRemove(),
      })),
      (Bs.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(i) {
    const {
        layoutDependency: o,
        visualElement: l,
        drag: c,
        isPresent: d,
      } = this.props,
      { projection: f } = l;
    return (
      f &&
        ((f.isPresent = d),
        (ol = !0),
        c || i.layoutDependency !== o || o === void 0 || i.isPresent !== d
          ? f.willUpdate()
          : this.safeToRemove(),
        i.isPresent !== d &&
          (d
            ? f.promote()
            : f.relegate() ||
              Te.postRender(() => {
                const p = f.getStack();
                (!p || !p.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: i } = this.props.visualElement;
    i &&
      (i.root.didUpdate(),
      tu.postRender(() => {
        !i.currentAnimation && i.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: i,
        layoutGroup: o,
        switchLayoutGroup: l,
      } = this.props,
      { projection: c } = i;
    (ol = !0),
      c &&
        (c.scheduleCheckAfterUnmount(),
        o && o.group && o.group.remove(c),
        l && l.deregister && l.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props;
    i && i();
  }
  render() {
    return null;
  }
}
function nm(n) {
  const [i, o] = Pp(),
    l = H.useContext(_l);
  return ae.jsx(rw, {
    ...n,
    layoutGroup: l,
    switchLayoutGroup: H.useContext(Fp),
    isPresent: i,
    safeToRemove: o,
  });
}
function iw(n, i, o) {
  const l = Xe(n) ? n : mr(n);
  return l.start(du("", l, i, o)), l.animation;
}
const sw = (n, i) => n.depth - i.depth;
class ow {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(i) {
    Il(this.children, i), (this.isDirty = !0);
  }
  remove(i) {
    zl(this.children, i), (this.isDirty = !0);
  }
  forEach(i) {
    this.isDirty && this.children.sort(sw),
      (this.isDirty = !1),
      this.children.forEach(i);
  }
}
function aw(n, i) {
  const o = st.now(),
    l = ({ timestamp: c }) => {
      const d = c - o;
      d >= i && (mn(l), n(d - i));
    };
  return Te.setup(l, !0), () => mn(l);
}
const rm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  lw = rm.length,
  lh = (n) => (typeof n == "string" ? parseFloat(n) : n),
  uh = (n) => typeof n == "number" || te.test(n);
function uw(n, i, o, l, c, d) {
  c
    ? ((n.opacity = Ce(0, o.opacity ?? 1, cw(l))),
      (n.opacityExit = Ce(i.opacity ?? 1, 0, fw(l))))
    : d && (n.opacity = Ce(i.opacity ?? 1, o.opacity ?? 1, l));
  for (let f = 0; f < lw; f++) {
    const p = `border${rm[f]}Radius`;
    let m = ch(i, p),
      g = ch(o, p);
    if (m === void 0 && g === void 0) continue;
    m || (m = 0),
      g || (g = 0),
      m === 0 || g === 0 || uh(m) === uh(g)
        ? ((n[p] = Math.max(Ce(lh(m), lh(g), l), 0)),
          (It.test(g) || It.test(m)) && (n[p] += "%"))
        : (n[p] = g);
  }
  (i.rotate || o.rotate) && (n.rotate = Ce(i.rotate || 0, o.rotate || 0, l));
}
function ch(n, i) {
  return n[i] !== void 0 ? n[i] : n.borderRadius;
}
const cw = im(0, 0.5, Wh),
  fw = im(0.5, 0.95, St);
function im(n, i, o) {
  return (l) => (l < n ? 0 : l > i ? 1 : o(di(n, i, l)));
}
function fh(n, i) {
  (n.min = i.min), (n.max = i.max);
}
function Dt(n, i) {
  fh(n.x, i.x), fh(n.y, i.y);
}
function dh(n, i) {
  (n.translate = i.translate),
    (n.scale = i.scale),
    (n.originPoint = i.originPoint),
    (n.origin = i.origin);
}
function hh(n, i, o, l, c) {
  return (
    (n -= i), (n = Ks(n, 1 / o, l)), c !== void 0 && (n = Ks(n, 1 / c, l)), n
  );
}
function dw(n, i = 0, o = 1, l = 0.5, c, d = n, f = n) {
  if (
    (It.test(i) &&
      ((i = parseFloat(i)), (i = Ce(f.min, f.max, i / 100) - f.min)),
    typeof i != "number")
  )
    return;
  let p = Ce(d.min, d.max, l);
  n === d && (p -= i),
    (n.min = hh(n.min, i, o, p, c)),
    (n.max = hh(n.max, i, o, p, c));
}
function ph(n, i, [o, l, c], d, f) {
  dw(n, i[o], i[l], i[c], i.scale, d, f);
}
const hw = ["x", "scaleX", "originX"],
  pw = ["y", "scaleY", "originY"];
function mh(n, i, o, l) {
  ph(n.x, i, hw, o ? o.x : void 0, l ? l.x : void 0),
    ph(n.y, i, pw, o ? o.y : void 0, l ? l.y : void 0);
}
function yh(n) {
  return n.translate === 0 && n.scale === 1;
}
function sm(n) {
  return yh(n.x) && yh(n.y);
}
function gh(n, i) {
  return n.min === i.min && n.max === i.max;
}
function mw(n, i) {
  return gh(n.x, i.x) && gh(n.y, i.y);
}
function vh(n, i) {
  return (
    Math.round(n.min) === Math.round(i.min) &&
    Math.round(n.max) === Math.round(i.max)
  );
}
function om(n, i) {
  return vh(n.x, i.x) && vh(n.y, i.y);
}
function wh(n) {
  return qe(n.x) / qe(n.y);
}
function xh(n, i) {
  return (
    n.translate === i.translate &&
    n.scale === i.scale &&
    n.originPoint === i.originPoint
  );
}
class yw {
  constructor() {
    this.members = [];
  }
  add(i) {
    Il(this.members, i), i.scheduleRender();
  }
  remove(i) {
    if (
      (zl(this.members, i),
      i === this.prevLead && (this.prevLead = void 0),
      i === this.lead)
    ) {
      const o = this.members[this.members.length - 1];
      o && this.promote(o);
    }
  }
  relegate(i) {
    const o = this.members.findIndex((c) => i === c);
    if (o === 0) return !1;
    let l;
    for (let c = o; c >= 0; c--) {
      const d = this.members[c];
      if (d.isPresent !== !1) {
        l = d;
        break;
      }
    }
    return l ? (this.promote(l), !0) : !1;
  }
  promote(i, o) {
    const l = this.lead;
    if (i !== l && ((this.prevLead = l), (this.lead = i), i.show(), l)) {
      l.instance && l.scheduleRender(),
        i.scheduleRender(),
        (i.resumeFrom = l),
        o && (i.resumeFrom.preserveOpacity = !0),
        l.snapshot &&
          ((i.snapshot = l.snapshot),
          (i.snapshot.latestValues = l.animationValues || l.latestValues)),
        i.root && i.root.isUpdating && (i.isLayoutDirty = !0);
      const { crossfade: c } = i.options;
      c === !1 && l.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((i) => {
      const { options: o, resumingFrom: l } = i;
      o.onExitComplete && o.onExitComplete(),
        l && l.options.onExitComplete && l.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((i) => {
      i.instance && i.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function gw(n, i, o) {
  let l = "";
  const c = n.x.translate / i.x,
    d = n.y.translate / i.y,
    f = o?.z || 0;
  if (
    ((c || d || f) && (l = `translate3d(${c}px, ${d}px, ${f}px) `),
    (i.x !== 1 || i.y !== 1) && (l += `scale(${1 / i.x}, ${1 / i.y}) `),
    o)
  ) {
    const {
      transformPerspective: g,
      rotate: y,
      rotateX: x,
      rotateY: T,
      skewX: M,
      skewY: N,
    } = o;
    g && (l = `perspective(${g}px) ${l}`),
      y && (l += `rotate(${y}deg) `),
      x && (l += `rotateX(${x}deg) `),
      T && (l += `rotateY(${T}deg) `),
      M && (l += `skewX(${M}deg) `),
      N && (l += `skewY(${N}deg) `);
  }
  const p = n.x.scale * i.x,
    m = n.y.scale * i.y;
  return (p !== 1 || m !== 1) && (l += `scale(${p}, ${m})`), l || "none";
}
const al = ["", "X", "Y", "Z"],
  vw = 1e3;
let ww = 0;
function ll(n, i, o, l) {
  const { latestValues: c } = i;
  c[n] && ((o[n] = c[n]), i.setStaticValue(n, 0), l && (l[n] = 0));
}
function am(n) {
  if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
  const { visualElement: i } = n.options;
  if (!i) return;
  const o = Xp(i);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: c, layoutId: d } = n.options;
    window.MotionCancelOptimisedAnimation(o, "transform", Te, !(c || d));
  }
  const { parent: l } = n;
  l && !l.hasCheckedOptimisedAppear && am(l);
}
function lm({
  attachResizeListener: n,
  defaultParent: i,
  measureScroll: o,
  checkIsScrollRoot: l,
  resetTransform: c,
}) {
  return class {
    constructor(f = {}, p = i?.()) {
      (this.id = ww++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(Tw),
            this.nodes.forEach(Ew),
            this.nodes.forEach(Mw),
            this.nodes.forEach(kw);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = p ? p.root || p : this),
        (this.path = p ? [...p.path, p] : []),
        (this.parent = p),
        (this.depth = p ? p.depth + 1 : 0);
      for (let m = 0; m < this.path.length; m++)
        this.path[m].shouldResetTransform = !0;
      this.root === this && (this.nodes = new ow());
    }
    addEventListener(f, p) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new Ul()),
        this.eventHandlers.get(f).add(p)
      );
    }
    notifyListeners(f, ...p) {
      const m = this.eventHandlers.get(f);
      m && m.notify(...p);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f) {
      if (this.instance) return;
      (this.isSVG = kp(f) && !c0(f)), (this.instance = f);
      const { layoutId: p, layout: m, visualElement: g } = this.options;
      if (
        (g && !g.current && g.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (m || p) && (this.isLayoutDirty = !0),
        n)
      ) {
        let y,
          x = 0;
        const T = () => (this.root.updateBlockedByResize = !1);
        Te.read(() => {
          x = window.innerWidth;
        }),
          n(f, () => {
            const M = window.innerWidth;
            M !== x &&
              ((x = M),
              (this.root.updateBlockedByResize = !0),
              y && y(),
              (y = aw(T, 250)),
              Bs.hasAnimatedSinceResize &&
                ((Bs.hasAnimatedSinceResize = !1), this.nodes.forEach(kh)));
          });
      }
      p && this.root.registerSharedNode(p, this),
        this.options.animate !== !1 &&
          g &&
          (p || m) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: y,
              hasLayoutChanged: x,
              hasRelativeLayoutChanged: T,
              layout: M,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const N =
                  this.options.transition || g.getDefaultTransition() || Nw,
                { onLayoutAnimationStart: L, onLayoutAnimationComplete: j } =
                  g.getProps(),
                I = !this.targetLayout || !om(this.targetLayout, M),
                U = !x && T;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                U ||
                (x && (I || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const z = { ...bl(N, "layout"), onPlay: L, onComplete: j };
                (g.shouldReduceMotion || this.options.layoutRoot) &&
                  ((z.delay = 0), (z.type = !1)),
                  this.startAnimation(z),
                  this.setAnimationOrigin(y, U);
              } else
                x || kh(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = M;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const f = this.getStack();
      f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        mn(this.updateProjection);
    }
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
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Rw),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          am(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let y = 0; y < this.path.length; y++) {
        const x = this.path[y];
        (x.shouldResetTransform = !0),
          x.updateScroll("snapshot"),
          x.options.layoutRoot && x.willUpdate(!1);
      }
      const { layoutId: p, layout: m } = this.options;
      if (p === void 0 && !m) return;
      const g = this.getTransformTemplate();
      (this.prevTransformTemplateValue = g ? g(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Sh);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Th);
        return;
      }
      (this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(Cw),
            this.nodes.forEach(xw),
            this.nodes.forEach(Sw))
          : this.nodes.forEach(Th),
        this.clearAllSnapshots();
      const p = st.now();
      (Be.delta = Xt(0, 1e3 / 60, p - Be.timestamp)),
        (Be.timestamp = p),
        (Be.isProcessing = !0),
        Za.update.process(Be),
        Za.preRender.process(Be),
        Za.render.process(Be),
        (Be.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), tu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Pw), this.sharedNodes.forEach(Dw);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Te.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Te.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !qe(this.snapshot.measuredBox.x) &&
          !qe(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let m = 0; m < this.path.length; m++) this.path[m].updateScroll();
      const f = this.layout;
      (this.layout = this.measure(!1)),
        this.layoutVersion++,
        (this.layoutCorrected = _e()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: p } = this.options;
      p &&
        p.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          f ? f.layoutBox : void 0
        );
    }
    updateScroll(f = "measure") {
      let p = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (p = !1),
        p && this.instance)
      ) {
        const m = l(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: m,
          offset: o(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : m,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const f =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        p = this.projectionDelta && !sm(this.projectionDelta),
        m = this.getTransformTemplate(),
        g = m ? m(this.latestValues, "") : void 0,
        y = g !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (p || Nn(this.latestValues) || y) &&
        (c(this.instance, g),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(f = !0) {
      const p = this.measurePageBox();
      let m = this.removeElementScroll(p);
      return (
        f && (m = this.removeTransform(m)),
        Lw(m),
        {
          animationId: this.root.animationId,
          measuredBox: p,
          layoutBox: m,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: f } = this.options;
      if (!f) return _e();
      const p = f.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(_w))) {
        const { scroll: g } = this.root;
        g && (fr(p.x, g.offset.x), fr(p.y, g.offset.y));
      }
      return p;
    }
    removeElementScroll(f) {
      const p = _e();
      if ((Dt(p, f), this.scroll?.wasRoot)) return p;
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m],
          { scroll: y, options: x } = g;
        g !== this.root &&
          y &&
          x.layoutScroll &&
          (y.wasRoot && Dt(p, f), fr(p.x, y.offset.x), fr(p.y, y.offset.y));
      }
      return p;
    }
    applyTransform(f, p = !1) {
      const m = _e();
      Dt(m, f);
      for (let g = 0; g < this.path.length; g++) {
        const y = this.path[g];
        !p &&
          y.options.layoutScroll &&
          y.scroll &&
          y !== y.root &&
          dr(m, { x: -y.scroll.offset.x, y: -y.scroll.offset.y }),
          Nn(y.latestValues) && dr(m, y.latestValues);
      }
      return Nn(this.latestValues) && dr(m, this.latestValues), m;
    }
    removeTransform(f) {
      const p = _e();
      Dt(p, f);
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m];
        if (!g.instance || !Nn(g.latestValues)) continue;
        Cl(g.latestValues) && g.updateSnapshot();
        const y = _e(),
          x = g.measurePageBox();
        Dt(y, x),
          mh(p, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, y);
      }
      return Nn(this.latestValues) && mh(p, this.latestValues), p;
    }
    setTargetDelta(f) {
      (this.targetDelta = f),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Be.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      const p = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
      const m = !!this.resumingFrom || this !== p;
      if (
        !(
          f ||
          (m && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: y, layoutId: x } = this.options;
      if (!this.layout || !(y || x)) return;
      this.resolvedRelativeTargetAt = Be.timestamp;
      const T = this.getClosestProjectingParent();
      T &&
        this.linkedParentVersion !== T.layoutVersion &&
        !T.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (T && T.layout
            ? this.createRelativeTarget(
                T,
                this.layout.layoutBox,
                T.layout.layoutBox
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = _e()), (this.targetWithTransforms = _e())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              H1(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
            ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : Dt(this.target, this.layout.layoutBox),
              Bp(this.target, this.targetDelta))
            : Dt(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            T &&
            !!T.resumingFrom == !!this.resumingFrom &&
            !T.options.layoutScroll &&
            T.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(T, this.target, T.target)
              : (this.relativeParent = this.relativeTarget = void 0)));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Cl(this.parent.latestValues) ||
          Op(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(f, p, m) {
      (this.relativeParent = f),
        (this.linkedParentVersion = f.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = _e()),
        (this.relativeTargetOrigin = _e()),
        Xs(this.relativeTargetOrigin, p, m),
        Dt(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const f = this.getLead(),
        p = !!this.resumingFrom || this !== f;
      let m = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (m = !1),
        p &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (m = !1),
        this.resolvedRelativeTargetAt === Be.timestamp && (m = !1),
        m)
      )
        return;
      const { layout: g, layoutId: y } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(g || y))
      )
        return;
      Dt(this.layoutCorrected, this.layout.layoutBox);
      const x = this.treeScale.x,
        T = this.treeScale.y;
      e1(this.layoutCorrected, this.treeScale, this.path, p),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = _e()));
      const { target: M } = f;
      if (!M) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (dh(this.prevProjectionDelta.x, this.projectionDelta.x),
          dh(this.prevProjectionDelta.y, this.projectionDelta.y)),
        fi(this.projectionDelta, this.layoutCorrected, M, this.latestValues),
        (this.treeScale.x !== x ||
          this.treeScale.y !== T ||
          !xh(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !xh(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", M));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      if ((this.options.visualElement?.scheduleRender(), f)) {
        const p = this.getStack();
        p && p.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = hr()),
        (this.projectionDelta = hr()),
        (this.projectionDeltaWithTransform = hr());
    }
    setAnimationOrigin(f, p = !1) {
      const m = this.snapshot,
        g = m ? m.latestValues : {},
        y = { ...this.latestValues },
        x = hr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !p);
      const T = _e(),
        M = m ? m.source : void 0,
        N = this.layout ? this.layout.source : void 0,
        L = M !== N,
        j = this.getStack(),
        I = !j || j.members.length <= 1,
        U = !!(L && !I && this.options.crossfade === !0 && !this.path.some(Vw));
      this.animationProgress = 0;
      let z;
      (this.mixTargetDelta = (Z) => {
        const X = Z / 1e3;
        Ph(x.x, f.x, X),
          Ph(x.y, f.y, X),
          this.setTargetDelta(x),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Xs(T, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Aw(this.relativeTarget, this.relativeTargetOrigin, T, X),
            z && mw(this.relativeTarget, z) && (this.isProjectionDirty = !1),
            z || (z = _e()),
            Dt(z, this.relativeTarget)),
          L &&
            ((this.animationValues = y), uw(y, g, this.latestValues, X, U, I)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = X);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      this.notifyListeners("animationStart"),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation &&
          (mn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Te.update(() => {
          (Bs.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = mr(0)),
            (this.currentAnimation = iw(this.motionValue, [0, 1e3], {
              ...f,
              velocity: 0,
              isSync: !0,
              onUpdate: (p) => {
                this.mixTargetDelta(p), f.onUpdate && f.onUpdate(p);
              },
              onStop: () => {},
              onComplete: () => {
                f.onComplete && f.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const f = this.getStack();
      f && f.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(vw),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let {
        targetWithTransforms: p,
        target: m,
        layout: g,
        latestValues: y,
      } = f;
      if (!(!p || !m || !g)) {
        if (
          this !== f &&
          this.layout &&
          g &&
          um(this.options.animationType, this.layout.layoutBox, g.layoutBox)
        ) {
          m = this.target || _e();
          const x = qe(this.layout.layoutBox.x);
          (m.x.min = f.target.x.min), (m.x.max = m.x.min + x);
          const T = qe(this.layout.layoutBox.y);
          (m.y.min = f.target.y.min), (m.y.max = m.y.min + T);
        }
        Dt(p, m),
          dr(p, y),
          fi(this.projectionDeltaWithTransform, this.layoutCorrected, p, y);
      }
    }
    registerSharedNode(f, p) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new yw()),
        this.sharedNodes.get(f).add(p);
      const g = p.options.initialPromotionConfig;
      p.promote({
        transition: g ? g.transition : void 0,
        preserveFollowOpacity:
          g && g.shouldPreserveFollowOpacity
            ? g.shouldPreserveFollowOpacity(p)
            : void 0,
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
      if (f) return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: p, preserveFollowOpacity: m } = {}) {
      const g = this.getStack();
      g && g.promote(this, m),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        p && this.setOptions({ transition: p });
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f) return;
      let p = !1;
      const { latestValues: m } = f;
      if (
        ((m.z ||
          m.rotate ||
          m.rotateX ||
          m.rotateY ||
          m.rotateZ ||
          m.skewX ||
          m.skewY) &&
          (p = !0),
        !p)
      )
        return;
      const g = {};
      m.z && ll("z", f, g, this.animationValues);
      for (let y = 0; y < al.length; y++)
        ll(`rotate${al[y]}`, f, g, this.animationValues),
          ll(`skew${al[y]}`, f, g, this.animationValues);
      f.render();
      for (const y in g)
        f.setStaticValue(y, g[y]),
          this.animationValues && (this.animationValues[y] = g[y]);
      f.scheduleRender();
    }
    applyProjectionStyles(f, p) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const m = this.getTransformTemplate();
      if (this.needsReset) {
        (this.needsReset = !1),
          (f.visibility = ""),
          (f.opacity = ""),
          (f.pointerEvents = Os(p?.pointerEvents) || ""),
          (f.transform = m ? m(this.latestValues, "") : "none");
        return;
      }
      const g = this.getLead();
      if (!this.projectionDelta || !this.layout || !g.target) {
        this.options.layoutId &&
          ((f.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (f.pointerEvents = Os(p?.pointerEvents) || "")),
          this.hasProjected &&
            !Nn(this.latestValues) &&
            ((f.transform = m ? m({}, "") : "none"), (this.hasProjected = !1));
        return;
      }
      f.visibility = "";
      const y = g.animationValues || g.latestValues;
      this.applyTransformsToTarget();
      let x = gw(this.projectionDeltaWithTransform, this.treeScale, y);
      m && (x = m(y, x)), (f.transform = x);
      const { x: T, y: M } = this.projectionDelta;
      (f.transformOrigin = `${T.origin * 100}% ${M.origin * 100}% 0`),
        g.animationValues
          ? (f.opacity =
              g === this
                ? y.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : y.opacityExit)
          : (f.opacity =
              g === this
                ? y.opacity !== void 0
                  ? y.opacity
                  : ""
                : y.opacityExit !== void 0
                ? y.opacityExit
                : 0);
      for (const N in Pl) {
        if (y[N] === void 0) continue;
        const { correct: L, applyTo: j, isCSSVariable: I } = Pl[N],
          U = x === "none" ? y[N] : L(y[N], g);
        if (j) {
          const z = j.length;
          for (let Z = 0; Z < z; Z++) f[j[Z]] = U;
        } else
          I ? (this.options.visualElement.renderState.vars[N] = U) : (f[N] = U);
      }
      this.options.layoutId &&
        (f.pointerEvents = g === this ? Os(p?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((f) => f.currentAnimation?.stop()),
        this.root.nodes.forEach(Sh),
        this.root.sharedNodes.clear();
    }
  };
}
function xw(n) {
  n.updateLayout();
}
function Sw(n) {
  const i = n.resumeFrom?.snapshot || n.snapshot;
  if (n.isLead() && n.layout && i && n.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: l } = n.layout,
      { animationType: c } = n.options,
      d = i.source !== n.layout.source;
    c === "size"
      ? wt((y) => {
          const x = d ? i.measuredBox[y] : i.layoutBox[y],
            T = qe(x);
          (x.min = o[y].min), (x.max = x.min + T);
        })
      : um(c, i.layoutBox, o) &&
        wt((y) => {
          const x = d ? i.measuredBox[y] : i.layoutBox[y],
            T = qe(o[y]);
          (x.max = x.min + T),
            n.relativeTarget &&
              !n.currentAnimation &&
              ((n.isProjectionDirty = !0),
              (n.relativeTarget[y].max = n.relativeTarget[y].min + T));
        });
    const f = hr();
    fi(f, o, i.layoutBox);
    const p = hr();
    d ? fi(p, n.applyTransform(l, !0), i.measuredBox) : fi(p, o, i.layoutBox);
    const m = !sm(f);
    let g = !1;
    if (!n.resumeFrom) {
      const y = n.getClosestProjectingParent();
      if (y && !y.resumeFrom) {
        const { snapshot: x, layout: T } = y;
        if (x && T) {
          const M = _e();
          Xs(M, i.layoutBox, x.layoutBox);
          const N = _e();
          Xs(N, o, T.layoutBox),
            om(M, N) || (g = !0),
            y.options.layoutRoot &&
              ((n.relativeTarget = N),
              (n.relativeTargetOrigin = M),
              (n.relativeParent = y));
        }
      }
    }
    n.notifyListeners("didUpdate", {
      layout: o,
      snapshot: i,
      delta: p,
      layoutDelta: f,
      hasLayoutChanged: m,
      hasRelativeLayoutChanged: g,
    });
  } else if (n.isLead()) {
    const { onExitComplete: o } = n.options;
    o && o();
  }
  n.options.transition = void 0;
}
function Tw(n) {
  n.parent &&
    (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
    n.isSharedProjectionDirty ||
      (n.isSharedProjectionDirty = !!(
        n.isProjectionDirty ||
        n.parent.isProjectionDirty ||
        n.parent.isSharedProjectionDirty
      )),
    n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty));
}
function kw(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function Pw(n) {
  n.clearSnapshot();
}
function Sh(n) {
  n.clearMeasurements();
}
function Th(n) {
  n.isLayoutDirty = !1;
}
function Cw(n) {
  const { visualElement: i } = n.options;
  i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"),
    n.resetTransform();
}
function kh(n) {
  n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0);
}
function Ew(n) {
  n.resolveTargetDelta();
}
function Mw(n) {
  n.calcProjection();
}
function Rw(n) {
  n.resetSkewAndRotation();
}
function Dw(n) {
  n.removeLeadSnapshot();
}
function Ph(n, i, o) {
  (n.translate = Ce(i.translate, 0, o)),
    (n.scale = Ce(i.scale, 1, o)),
    (n.origin = i.origin),
    (n.originPoint = i.originPoint);
}
function Ch(n, i, o, l) {
  (n.min = Ce(i.min, o.min, l)), (n.max = Ce(i.max, o.max, l));
}
function Aw(n, i, o, l) {
  Ch(n.x, i.x, o.x, l), Ch(n.y, i.y, o.y, l);
}
function Vw(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const Nw = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Eh = (n) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(n),
  Mh = Eh("applewebkit/") && !Eh("chrome/") ? Math.round : St;
function Rh(n) {
  (n.min = Mh(n.min)), (n.max = Mh(n.max));
}
function Lw(n) {
  Rh(n.x), Rh(n.y);
}
function um(n, i, o) {
  return (
    n === "position" || (n === "preserve-aspect" && !U1(wh(i), wh(o), 0.2))
  );
}
function _w(n) {
  return n !== n.root && n.scroll?.wasRoot;
}
const jw = lm({
    attachResizeListener: (n, i) => yi(n, "resize", i),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  ul = { current: void 0 },
  cm = lm({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!ul.current) {
        const n = new jw({});
        n.mount(window), n.setOptions({ layoutScroll: !0 }), (ul.current = n);
      }
      return ul.current;
    },
    resetTransform: (n, i) => {
      n.style.transform = i !== void 0 ? i : "none";
    },
    checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed",
  }),
  Fw = {
    pan: { Feature: nw },
    drag: { Feature: tw, ProjectionNode: cm, MeasureLayout: nm },
  };
function Dh(n, i, o) {
  const { props: l } = n;
  n.animationState &&
    l.whileHover &&
    n.animationState.setActive("whileHover", o === "Start");
  const c = "onHover" + o,
    d = l[c];
  d && Te.postRender(() => d(i, xi(i)));
}
class Iw extends gn {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = s0(
        i,
        (o, l) => (Dh(this.node, l, "Start"), (c) => Dh(this.node, c, "End"))
      ));
  }
  unmount() {}
}
class zw extends gn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let i = !1;
    try {
      i = this.node.current.matches(":focus-visible");
    } catch {
      i = !0;
    }
    !i ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = gi(
      yi(this.node.current, "focus", () => this.onFocus()),
      yi(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function Ah(n, i, o) {
  const { props: l } = n;
  if (n.current instanceof HTMLButtonElement && n.current.disabled) return;
  n.animationState &&
    l.whileTap &&
    n.animationState.setActive("whileTap", o === "Start");
  const c = "onTap" + (o === "End" ? "" : o),
    d = l[c];
  d && Te.postRender(() => d(i, xi(i)));
}
class Ow extends gn {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = u0(
        i,
        (o, l) => (
          Ah(this.node, l, "Start"),
          (c, { success: d }) => Ah(this.node, c, d ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const Nl = new WeakMap(),
  cl = new WeakMap(),
  Bw = (n) => {
    const i = Nl.get(n.target);
    i && i(n);
  },
  Uw = (n) => {
    n.forEach(Bw);
  };
function Hw({ root: n, ...i }) {
  const o = n || document;
  cl.has(o) || cl.set(o, {});
  const l = cl.get(o),
    c = JSON.stringify(i);
  return l[c] || (l[c] = new IntersectionObserver(Uw, { root: n, ...i })), l[c];
}
function Ww(n, i, o) {
  const l = Hw(i);
  return (
    Nl.set(n, o),
    l.observe(n),
    () => {
      Nl.delete(n), l.unobserve(n);
    }
  );
}
const $w = { some: 0, all: 1 };
class Kw extends gn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: i = {} } = this.node.getProps(),
      { root: o, margin: l, amount: c = "some", once: d } = i,
      f = {
        root: o ? o.current : void 0,
        rootMargin: l,
        threshold: typeof c == "number" ? c : $w[c],
      },
      p = (m) => {
        const { isIntersecting: g } = m;
        if (
          this.isInView === g ||
          ((this.isInView = g), d && !g && this.hasEnteredView)
        )
          return;
        g && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", g);
        const { onViewportEnter: y, onViewportLeave: x } = this.node.getProps(),
          T = g ? y : x;
        T && T(m);
      };
    return Ww(this.node.current, f, p);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: i, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(Xw(i, o)) && this.startObserver();
  }
  unmount() {}
}
function Xw({ viewport: n = {} }, { viewport: i = {} } = {}) {
  return (o) => n[o] !== i[o];
}
const Yw = {
    inView: { Feature: Kw },
    tap: { Feature: Ow },
    focus: { Feature: zw },
    hover: { Feature: Iw },
  },
  Gw = { layout: { ProjectionNode: cm, MeasureLayout: nm } },
  Qw = { ...j1, ...Yw, ...Fw, ...Gw },
  Fs = q0(Qw, c1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zw = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  qw = (n) =>
    n.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, o, l) =>
      l ? l.toUpperCase() : o.toLowerCase()
    ),
  Vh = (n) => {
    const i = qw(n);
    return i.charAt(0).toUpperCase() + i.slice(1);
  },
  fm = (...n) =>
    n
      .filter((i, o, l) => !!i && i.trim() !== "" && l.indexOf(i) === o)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Jw = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bw = H.forwardRef(
  (
    {
      color: n = "currentColor",
      size: i = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: l,
      className: c = "",
      children: d,
      iconNode: f,
      ...p
    },
    m
  ) =>
    H.createElement(
      "svg",
      {
        ref: m,
        ...Jw,
        width: i,
        height: i,
        stroke: n,
        strokeWidth: l ? (Number(o) * 24) / Number(i) : o,
        className: fm("lucide", c),
        ...p,
      },
      [
        ...f.map(([g, y]) => H.createElement(g, y)),
        ...(Array.isArray(d) ? d : [d]),
      ]
    )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hu = (n, i) => {
  const o = H.forwardRef(({ className: l, ...c }, d) =>
    H.createElement(bw, {
      ref: d,
      iconNode: i,
      className: fm(`lucide-${Zw(Vh(n))}`, `lucide-${n}`, l),
      ...c,
    })
  );
  return (o.displayName = Vh(n)), o;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ex = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
  tx = hu("chevron-left", ex);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nx = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  rx = hu("chevron-right", nx);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ix = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  sx = hu("x", ix),
  const lr=[
    {id:1,src:"./assets/DJI_0962_2.jpg",category:"Portrait",title:"Natural Light Portrait",type:"image",span:"col-span-8 row-span-2",aspectRatio:"aspect-[16/9]"},
    {id:2,src:"./assets/06_IMG_9847-web-print.jpg",category:"Landscape",title:"Mountain Vista",type:"image",span:"col-span-4 row-span-2",aspectRatio:"aspect-[2/3]"},
    {id:3,src:"./assets/09_IMG_2202-2.jpg",category:"Architecture",title:"Urban Geometry",type:"image",span:"col-span-4 row-span-1",aspectRatio:"aspect-[3/2]"},
    {id:5,src:"./assets/P2599710.jpg",category:"Street",title:"City Life",type:"image",span:"col-span-4 row-span-1",aspectRatio:"aspect-[3/2]"},
    {id:6,src:"./assets/P2877071_print_4-5.jpg",category:"Fashion",title:"Editorial Style",type:"image",span:"col-span-4 row-span-1",aspectRatio:"aspect-[3/2]"},
    {id:7,src:"./assets/_IMG_6819_01_big.jpg",category:"Landscape",title:"Misty Sunrise",type:"image",span:"col-span-6 row-span-2",aspectRatio:"aspect-[16/9]"},
    {id:8,src:"./assets/IMG_7239_filtered.jpg",category:"Travel",title:"Island Paradise",type:"image",span:"col-span-6 row-span-2",aspectRatio:"aspect-[16/9]"},
    {id:9,src:"./assets/P1360559_web.jpg",category:"Food",title:"Culinary Art",type:"image",span:"col-span-3 row-span-1",aspectRatio:"aspect-[4/3]"},
    {id:10,src:"./assets/IMG_6763_pano.jpg",category:"Wildlife",title:"Wild Beauty",type:"image",span:"col-span-3 row-span-1",aspectRatio:"aspect-[4/3]"},
    {id:12,src:"./assets/P1150929_filtered-web.jpg",category:"Landscape",title:"Ocean Waves",type:"image",span:"col-span-3 row-span-1",aspectRatio:"aspect-[4/3]"},
    {id:13,src:"./assets/P3099606.jpg",category:"Abstract",title:"Abstract Forms",type:"image",span:"col-span-3 row-span-1",aspectRatio:"aspect-[4/3]"},
    {id:14,src:"./assets/P2999774.jpg",category:"Landscape",title:"Mountain Sunrise",type:"image",span:"col-span-5 row-span-2",aspectRatio:"aspect-[3/2]"},
    {id:15,src:"./assets/P3499358-HDR-big.jpg",category:"Urban",title:"City Lights",type:"image",span:"col-span-4 row-span-2",aspectRatio:"aspect-[2/3]"},
    {id:16,src:"./assets/P3644233-web.jpg",category:"Minimal",title:"Minimalist Design",type:"image",span:"col-span-3 row-span-2",aspectRatio:"aspect-[2/3]"}
  ];
function ox() {
  const [n, i] = H.useState(null),
    [o, l] = H.useState(0);
  H.useEffect(() => {
    const f = (p) => {
      n &&
        (p.key === "Escape"
          ? i(null)
          : p.key === "ArrowLeft"
          ? (p.preventDefault(), d("prev"))
          : p.key === "ArrowRight" && (p.preventDefault(), d("next")));
    };
    return (
      window.addEventListener("keydown", f),
      () => window.removeEventListener("keydown", f)
    );
  }, [n, o]);
  const c = (f, p) => {
      i(f), l(p);
    },
    d = (f) => {
      const p =
        f === "prev" ? (o - 1 + lr.length) % lr.length : (o + 1) % lr.length;
      l(p), i(lr[p]);
    };
  return ae.jsxs("div", {
    className: "relative w-full min-h-screen bg-[#0F0F0F]",
    children: [
      ae.jsx("header", {
        className: "relative bg-[#0F0F0F] text-white pt-12 pb-12",
        children: ae.jsx("div", {
          className: "max-w-[1320px] mx-auto px-8",
          children: ae.jsxs(Fs.div, {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, ease: "easeOut" },
            className: "text-center",
            children: [
              ae.jsx("h1", {
                className: "mb-4",
                style: {
                  fontSize: "52px",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                },
                children: "Andrey Prokhorov",
              }),
              ae.jsx("p", {
                className: "mx-auto",
                style: {
                  fontSize: "17px",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  maxWidth: "58%",
                  opacity: 0.75,
                },
                children:
                  "Quiet moments shaped by light, composition, and time.",
              }),
            ],
          }),
        }),
      }),
      ae.jsx("div", {
        className: "max-w-[1320px] mx-auto p-8 pt-8",
        children: ae.jsx("div", {
          className: "grid grid-cols-12 gap-6 auto-rows-[200px]",
          children: lr.map((f, p) =>
            ae.jsxs(
              Fs.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.4, delay: p * 0.03, ease: "easeOut" },
                className: `${f.span} relative overflow-hidden cursor-pointer group`,
                onClick: () => c(f, p),
                children: [
                  ae.jsx("div", {
                    className: `w-full h-full ${f.aspectRatio}`,
                    children:
                      f.type === "image"
                        ? ae.jsx("img", {
                            src: f.src,
                            alt: f.title,
                            className:
                              "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105",
                          })
                        : ae.jsx("video", {
                            src: f.src,
                            className: "w-full h-full object-cover",
                            muted: !0,
                            playsInline: !0,
                            loop: !0,
                          }),
                  }),
                  ae.jsx("div", {
                    className:
                      "absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 ease-out bg-[rgba(0,0,0,0)]",
                  }),
                ],
              },
              f.id
            )
          ),
        }),
      }),
      ae.jsx(w0, {
        children:
          n &&
          ae.jsxs(Fs.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.2, ease: "easeOut" },
            className:
              "fixed inset-0 z-[100] flex items-center justify-center bg-[#0F0F0F]",
            onClick: () => i(null),
            children: [
              ae.jsx("button", {
                onClick: () => i(null),
                className:
                  "absolute top-6 right-6 z-[110] text-white/60 hover:text-white transition-colors duration-200",
                "aria-label": "Close",
                children: ae.jsx(sx, { size: 28, strokeWidth: 1.5 }),
              }),
              ae.jsxs("div", {
                className:
                  "absolute top-6 left-6 z-[110] text-white/60 text-sm",
                children: [o + 1, " / ", lr.length],
              }),
              ae.jsx("button", {
                onClick: (f) => {
                  f.stopPropagation(), d("prev");
                },
                className:
                  "absolute left-6 z-[110] text-white/60 hover:text-white transition-colors duration-200",
                "aria-label": "Previous image",
                children: ae.jsx(tx, { size: 40, strokeWidth: 1.5 }),
              }),
              ae.jsx("button", {
                onClick: (f) => {
                  f.stopPropagation(), d("next");
                },
                className:
                  "absolute right-6 z-[110] text-white/60 hover:text-white transition-colors duration-200",
                "aria-label": "Next image",
                children: ae.jsx(rx, { size: 40, strokeWidth: 1.5 }),
              }),
              ae.jsx(Fs.div, {
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.95 },
                transition: { duration: 0.2, ease: "easeOut" },
                className:
                  "relative max-w-[92vw] max-h-[92vh] flex items-center justify-center",
                onClick: (f) => f.stopPropagation(),
                children:
                  n.type === "image"
                    ? ae.jsx("img", {
                        src: n.src,
                        alt: n.title,
                        className:
                          "max-w-full max-h-[92vh] w-auto h-auto object-contain border border-[#E5E5E5]/20",
                      })
                    : ae.jsx("video", {
                        src: n.src,
                        controls: !0,
                        autoPlay: !0,
                        className:
                          "max-w-full max-h-[92vh] w-auto h-auto object-contain border border-[#E5E5E5]/20",
                      }),
              }),
            ],
          }),
      }),
    ],
  });
}
yg.createRoot(document.getElementById("root")).render(ae.jsx(ox, {}));
