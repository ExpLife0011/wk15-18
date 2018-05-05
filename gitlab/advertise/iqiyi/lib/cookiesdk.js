function getMainDomain() {
    var t, e = window.location.hostname, r = /^\w+$/, i = /[\w|-]+\.+[\w|-]+$/, n = /^\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}$/;
    if (r.test(e) || n.test(e))
        t = e;
    else {
        if (!i.test(e))
            return window.console && console.error("Error: your page not in a validate host"),
            "";
        t = e.match(i)[0]
    }
    return "." + t
}
function _ec_dump(t, e) {
    var r = "";
    e || (e = 0);
    for (var i = "", n = 0; n < e + 1; n++)
        i += "    ";
    if ("object" == typeof t)
        for (var o in t) {
            var s = t[o];
            "object" == typeof s ? (r += i + "'" + o + "' ...\n",
            r += _ec_dump(s, e + 1)) : r += i + "'" + o + "' => \"" + s + '"\n'
        }
    else
        r = "===>" + t + "<===(" + typeof t + ")";
    return r
}
function _ec_replace(t, e, r) {
    if (t.indexOf("&" + e + "=") > -1 || 0 == t.indexOf(e + "=")) {
        var i = t.indexOf("&" + e + "=");
        i == -1 && (i = t.indexOf(e + "="));
        var n, o = t.indexOf("&", i + 1);
        return n = o != -1 ? t.substr(0, i) + t.substr(o + (i ? 0 : 1)) + "&" + e + "=" + r : t.substr(0, i) + "&" + e + "=" + r
    }
    return t + "&" + e + "=" + r
}
function _evercookie_flash_var(t) {
    _global_lso = t;
    // var e = Q("#myswf");
    // e && e.parentNode && e.parentNode.removeChild(e)
}
function onSilverlightLoad(t, e) {
    var r = t.getHost();
    _global_isolated = r.Content.App.getIsolatedStorage()
}
function onSilverlightError(t, e) {
    _global_isolated = ""
}
(function() {
    function t(e, i) {
        function o(t) {
            if (o[t] !== v)
                return o[t];
            var e;
            if ("bug-string-char-index" == t)
                e = "a" != "a"[0];
            else if ("json" == t)
                e = o("json-stringify") && o("json-parse");
            else {
                var r, n = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                if ("json-stringify" == t) {
                    var h = i.stringify
                      , u = "function" == typeof h && b;
                    if (u) {
                        (r = function() {
                            return 1
                        }
                        ).toJSON = r;
                        try {
                            u = "0" === h(0) && "0" === h(new s) && '""' == h(new a) && h(y) === v && h(v) === v && h() === v && "1" === h(r) && "[1]" == h([r]) && "[null]" == h([v]) && "null" == h(null) && "[null,null,null]" == h([v, y, null]) && h({
                                a: [r, !0, !1, null, "\0\b\n\f\r\t"]
                            }) == n && "1" === h(null, r) && "[\n 1,\n 2\n]" == h([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == h(new c((-864e13))) && '"+275760-09-13T00:00:00.000Z"' == h(new c(864e13)) && '"-000001-01-01T00:00:00.000Z"' == h(new c((-621987552e5))) && '"1969-12-31T23:59:59.999Z"' == h(new c((-1)))
                        } catch (f) {
                            u = !1
                        }
                    }
                    e = u
                }
                if ("json-parse" == t) {
                    var l = i.parse;
                    if ("function" == typeof l)
                        try {
                            if (0 === l("0") && !l(!1)) {
                                r = l(n);
                                var p = 5 == r.a.length && 1 === r.a[0];
                                if (p) {
                                    try {
                                        p = !l('"\t"')
                                    } catch (f) {}
                                    if (p)
                                        try {
                                            p = 1 !== l("01")
                                        } catch (f) {}
                                    if (p)
                                        try {
                                            p = 1 !== l("1.")
                                        } catch (f) {}
                                }
                            }
                        } catch (f) {
                            p = !1
                        }
                    e = p
                }
            }
            return o[t] = !!e
        }
        e || (e = n.Object()),
        i || (i = n.Object());
        var s = e.Number || n.Number
          , a = e.String || n.String
          , h = e.Object || n.Object
          , c = e.Date || n.Date
          , u = e.SyntaxError || n.SyntaxError
          , f = e.TypeError || n.TypeError
          , l = e.Math || n.Math
          , p = e.JSON || n.JSON;
        "object" == typeof p && p && (i.stringify = p.stringify,
        i.parse = p.parse);
        var d, g, v, m = h.prototype, y = m.toString, b = new c((-0xc782b5b800cec));
        try {
            b = b.getUTCFullYear() == -109252 && 0 === b.getUTCMonth() && 1 === b.getUTCDate() && 10 == b.getUTCHours() && 37 == b.getUTCMinutes() && 6 == b.getUTCSeconds() && 708 == b.getUTCMilliseconds()
        } catch (S) {}
        if (!o("json")) {
            var w = "[object Function]"
              , E = "[object Date]"
              , x = "[object Number]"
              , T = "[object String]"
              , _ = "[object Array]"
              , A = "[object Boolean]"
              , R = o("bug-string-char-index");
            if (!b)
                var C = l.floor
                  , D = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
                  , O = function(t, e) {
                    return D[e] + 365 * (t - 1970) + C((t - 1969 + (e = +(e > 1))) / 4) - C((t - 1901 + e) / 100) + C((t - 1601 + e) / 400)
                };
            if ((d = m.hasOwnProperty) || (d = function(t) {
                var e, r = {};
                return (r.__proto__ = null,
                r.__proto__ = {
                    toString: 1
                },
                r).toString != y ? d = function(t) {
                    var e = this.__proto__
                      , r = t in (this.__proto__ = null,
                    this);
                    return this.__proto__ = e,
                    r
                }
                : (e = r.constructor,
                d = function(t) {
                    var r = (this.constructor || e).prototype;
                    return t in this && !(t in r && this[t] === r[t])
                }
                ),
                r = null,
                d.call(this, t)
            }
            ),
            g = function(t, e) {
                var i, n, o, s = 0;
                (i = function() {
                    this.valueOf = 0
                }
                ).prototype.valueOf = 0,
                n = new i;
                for (o in n)
                    d.call(n, o) && s++;
                return i = n = null,
                s ? g = 2 == s ? function(t, e) {
                    var r, i = {}, n = y.call(t) == w;
                    for (r in t)
                        n && "prototype" == r || d.call(i, r) || !(i[r] = 1) || !d.call(t, r) || e(r)
                }
                : function(t, e) {
                    var r, i, n = y.call(t) == w;
                    for (r in t)
                        n && "prototype" == r || !d.call(t, r) || (i = "constructor" === r) || e(r);
                    (i || d.call(t, r = "constructor")) && e(r)
                }
                : (n = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"],
                g = function(t, e) {
                    var i, o, s = y.call(t) == w, a = !s && "function" != typeof t.constructor && r[typeof t.hasOwnProperty] && t.hasOwnProperty || d;
                    for (i in t)
                        s && "prototype" == i || !a.call(t, i) || e(i);
                    for (o = n.length; i = n[--o]; a.call(t, i) && e(i))
                        ;
                }
                ),
                g(t, e)
            }
            ,
            !o("json-stringify")) {
                var M = {
                    92: "\\\\",
                    34: '\\"',
                    8: "\\b",
                    12: "\\f",
                    10: "\\n",
                    13: "\\r",
                    9: "\\t"
                }
                  , k = "000000"
                  , B = function(t, e) {
                    return (k + (e || 0)).slice(-t)
                }
                  , I = "\\u00"
                  , P = function(t) {
                    for (var e = '"', r = 0, i = t.length, n = !R || i > 10, o = n && (R ? t.split("") : t); r < i; r++) {
                        var s = t.charCodeAt(r);
                        switch (s) {
                        case 8:
                        case 9:
                        case 10:
                        case 12:
                        case 13:
                        case 34:
                        case 92:
                            e += M[s];
                            break;
                        default:
                            if (s < 32) {
                                e += I + B(2, s.toString(16));
                                break
                            }
                            e += n ? o[r] : t.charAt(r)
                        }
                    }
                    return e + '"'
                }
                  , N = function(t, e, r, i, n, o, s) {
                    var a, h, c, u, l, p, m, b, S, w, R, D, M, k, I, U;
                    try {
                        a = e[t]
                    } catch (F) {}
                    if ("object" == typeof a && a)
                        if (h = y.call(a),
                        h != E || d.call(a, "toJSON"))
                            "function" == typeof a.toJSON && (h != x && h != T && h != _ || d.call(a, "toJSON")) && (a = a.toJSON(t));
                        else if (a > -1 / 0 && a < 1 / 0) {
                            if (O) {
                                for (l = C(a / 864e5),
                                c = C(l / 365.2425) + 1970 - 1; O(c + 1, 0) <= l; c++)
                                    ;
                                for (u = C((l - O(c, 0)) / 30.42); O(c, u + 1) <= l; u++)
                                    ;
                                l = 1 + l - O(c, u),
                                p = (a % 864e5 + 864e5) % 864e5,
                                m = C(p / 36e5) % 24,
                                b = C(p / 6e4) % 60,
                                S = C(p / 1e3) % 60,
                                w = p % 1e3
                            } else
                                c = a.getUTCFullYear(),
                                u = a.getUTCMonth(),
                                l = a.getUTCDate(),
                                m = a.getUTCHours(),
                                b = a.getUTCMinutes(),
                                S = a.getUTCSeconds(),
                                w = a.getUTCMilliseconds();
                            a = (c <= 0 || c >= 1e4 ? (c < 0 ? "-" : "+") + B(6, c < 0 ? -c : c) : B(4, c)) + "-" + B(2, u + 1) + "-" + B(2, l) + "T" + B(2, m) + ":" + B(2, b) + ":" + B(2, S) + "." + B(3, w) + "Z"
                        } else
                            a = null;
                    if (r && (a = r.call(e, t, a)),
                    null === a)
                        return "null";
                    if (h = y.call(a),
                    h == A)
                        return "" + a;
                    if (h == x)
                        return a > -1 / 0 && a < 1 / 0 ? "" + a : "null";
                    if (h == T)
                        return P("" + a);
                    if ("object" == typeof a) {
                        for (k = s.length; k--; )
                            if (s[k] === a)
                                throw f();
                        if (s.push(a),
                        R = [],
                        I = o,
                        o += n,
                        h == _) {
                            for (M = 0,
                            k = a.length; M < k; M++)
                                D = N(M, a, r, i, n, o, s),
                                R.push(D === v ? "null" : D);
                            U = R.length ? n ? "[\n" + o + R.join(",\n" + o) + "\n" + I + "]" : "[" + R.join(",") + "]" : "[]"
                        } else
                            g(i || a, function(t) {
                                var e = N(t, a, r, i, n, o, s);
                                e !== v && R.push(P(t) + ":" + (n ? " " : "") + e)
                            }),
                            U = R.length ? n ? "{\n" + o + R.join(",\n" + o) + "\n" + I + "}" : "{" + R.join(",") + "}" : "{}";
                        return s.pop(),
                        U
                    }
                };
                i.stringify = function(t, e, i) {
                    var n, o, s, a;
                    if (r[typeof e] && e)
                        if ((a = y.call(e)) == w)
                            o = e;
                        else if (a == _) {
                            s = {};
                            for (var h, c = 0, u = e.length; c < u; h = e[c++],
                            a = y.call(h),
                            (a == T || a == x) && (s[h] = 1))
                                ;
                        }
                    if (i)
                        if ((a = y.call(i)) == x) {
                            if ((i -= i % 1) > 0)
                                for (n = "",
                                i > 10 && (i = 10); n.length < i; n += " ")
                                    ;
                        } else
                            a == T && (n = i.length <= 10 ? i : i.slice(0, 10));
                    return N("", (h = {},
                    h[""] = t,
                    h), o, s, n, "", [])
                }
            }
            if (!o("json-parse")) {
                var U, F, L = a.fromCharCode, H = {
                    92: "\\",
                    34: '"',
                    47: "/",
                    98: "\b",
                    116: "\t",
                    110: "\n",
                    102: "\f",
                    114: "\r"
                }, K = function() {
                    throw U = F = null,
                    u()
                }, V = function() {
                    for (var t, e, r, i, n, o = F, s = o.length; U < s; )
                        switch (n = o.charCodeAt(U)) {
                        case 9:
                        case 10:
                        case 13:
                        case 32:
                            U++;
                            break;
                        case 123:
                        case 125:
                        case 91:
                        case 93:
                        case 58:
                        case 44:
                            return t = R ? o.charAt(U) : o[U],
                            U++,
                            t;
                        case 34:
                            for (t = "@",
                            U++; U < s; )
                                if (n = o.charCodeAt(U),
                                n < 32)
                                    K();
                                else if (92 == n)
                                    switch (n = o.charCodeAt(++U)) {
                                    case 92:
                                    case 34:
                                    case 47:
                                    case 98:
                                    case 116:
                                    case 110:
                                    case 102:
                                    case 114:
                                        t += H[n],
                                        U++;
                                        break;
                                    case 117:
                                        for (e = ++U,
                                        r = U + 4; U < r; U++)
                                            n = o.charCodeAt(U),
                                            n >= 48 && n <= 57 || n >= 97 && n <= 102 || n >= 65 && n <= 70 || K();
                                        t += L("0x" + o.slice(e, U));
                                        break;
                                    default:
                                        K()
                                    }
                                else {
                                    if (34 == n)
                                        break;
                                    for (n = o.charCodeAt(U),
                                    e = U; n >= 32 && 92 != n && 34 != n; )
                                        n = o.charCodeAt(++U);
                                    t += o.slice(e, U)
                                }
                            if (34 == o.charCodeAt(U))
                                return U++,
                                t;
                            K();
                        default:
                            if (e = U,
                            45 == n && (i = !0,
                            n = o.charCodeAt(++U)),
                            n >= 48 && n <= 57) {
                                for (48 == n && (n = o.charCodeAt(U + 1),
                                n >= 48 && n <= 57) && K(),
                                i = !1; U < s && (n = o.charCodeAt(U),
                                n >= 48 && n <= 57); U++)
                                    ;
                                if (46 == o.charCodeAt(U)) {
                                    for (r = ++U; r < s && (n = o.charCodeAt(r),
                                    n >= 48 && n <= 57); r++)
                                        ;
                                    r == U && K(),
                                    U = r
                                }
                                if (n = o.charCodeAt(U),
                                101 == n || 69 == n) {
                                    for (n = o.charCodeAt(++U),
                                    43 != n && 45 != n || U++,
                                    r = U; r < s && (n = o.charCodeAt(r),
                                    n >= 48 && n <= 57); r++)
                                        ;
                                    r == U && K(),
                                    U = r
                                }
                                return +o.slice(e, U)
                            }
                            if (i && K(),
                            "true" == o.slice(U, U + 4))
                                return U += 4,
                                !0;
                            if ("false" == o.slice(U, U + 5))
                                return U += 5,
                                !1;
                            if ("null" == o.slice(U, U + 4))
                                return U += 4,
                                null;
                            K()
                        }
                    return "$"
                }, J = function(t) {
                    var e, r;
                    if ("$" == t && K(),
                    "string" == typeof t) {
                        if ("@" == (R ? t.charAt(0) : t[0]))
                            return t.slice(1);
                        if ("[" == t) {
                            for (e = []; t = V(),
                            "]" != t; r || (r = !0))
                                r && ("," == t ? (t = V(),
                                "]" == t && K()) : K()),
                                "," == t && K(),
                                e.push(J(t));
                            return e
                        }
                        if ("{" == t) {
                            for (e = {}; t = V(),
                            "}" != t; r || (r = !0))
                                r && ("," == t ? (t = V(),
                                "}" == t && K()) : K()),
                                "," != t && "string" == typeof t && "@" == (R ? t.charAt(0) : t[0]) && ":" == V() || K(),
                                e[t.slice(1)] = J(V());
                            return e
                        }
                        K()
                    }
                    return t
                }, j = function(t, e, r) {
                    var i = X(t, e, r);
                    i === v ? delete t[e] : t[e] = i
                }, X = function(t, e, r) {
                    var i, n = t[e];
                    if ("object" == typeof n && n)
                        if (y.call(n) == _)
                            for (i = n.length; i--; )
                                j(n, i, r);
                        else
                            g(n, function(t) {
                                j(n, t, r)
                            });
                    return r.call(t, e, n)
                };
                i.parse = function(t, e) {
                    var r, i;
                    return U = 0,
                    F = "" + t,
                    r = J(V()),
                    "$" != V() && K(),
                    U = F = null,
                    e && y.call(e) == w ? X((i = {},
                    i[""] = r,
                    i), "", e) : r
                }
            }
        }
        return i.runInContext = t,
        i
    }
    var e = "function" == typeof define && define.amd
      , r = {
        "function": !0,
        object: !0
    }
      , i = r[typeof exports] && exports && !exports.nodeType && exports
      , n = r[typeof window] && window || this
      , o = i && r[typeof module] && module && !module.nodeType && "object" == typeof global && global;
    if (!o || o.global !== o && o.window !== o && o.self !== o || (n = o),
    i && !e)
        t(n, i);
    else {
        var s = n.JSON
          , a = n.JSON3
          , h = !1
          , c = t(n, n.JSON3 = {
            noConflict: function() {
                return h || (h = !0,
                n.JSON = s,
                n.JSON3 = a,
                s = a = null),
                c
            }
        });
        n.JSON = {
            parse: c.parse,
            stringify: c.stringify
        }
    }
    e && define(function() {
        return c
    })
}
).call(this),
function(t, e, r) {
    "use strict";
    "undefined" != typeof module && module.exports ? module.exports = r() : "function" == typeof define && define.amd ? define(r) : e[t] = r()
}("Fingerprint2", this, function() {
    "use strict";
    Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
        var r;
        if (null == this)
            throw new TypeError("'this' is null or undefined");
        var i = Object(this)
          , n = i.length >>> 0;
        if (0 === n)
            return -1;
        var o = +e || 0;
        if (Math.abs(o) === 1 / 0 && (o = 0),
        o >= n)
            return -1;
        for (r = Math.max(o >= 0 ? o : n - Math.abs(o), 0); r < n; ) {
            if (r in i && i[r] === t)
                return r;
            r++
        }
        return -1
    }
    );
    var t = function(t) {
        var e = {
            swfContainerId: "fingerprintjs2",
            swfPath: "flash/compiled/FontList.swf",
            detectScreenOrientation: !0,
            sortPluginsFor: [/palemoon/i],
            userDefinedFonts: []
        };
        this.options = this.extend(t, e),
        this.nativeForEach = Array.prototype.forEach,
        this.nativeMap = Array.prototype.map
    };
    return t.prototype = {
        extend: function(t, e) {
            if (null == t)
                return e;
            for (var r in t)
                null != t[r] && e[r] !== t[r] && (e[r] = t[r]);
            return e
        },
        log: function(t) {
            window.console && console.log(t)
        },
        get: function(t) {
            var e = [];
            e = this.userAgentKey(e),
            e = this.languageKey(e),
            e = this.colorDepthKey(e),
            e = this.pixelRatioKey(e),
            e = this.screenResolutionKey(e),
            e = this.availableScreenResolutionKey(e),
            e = this.timezoneOffsetKey(e),
            e = this.sessionStorageKey(e),
            e = this.localStorageKey(e),
            e = this.indexedDbKey(e),
            e = this.addBehaviorKey(e),
            e = this.openDatabaseKey(e),
            e = this.cpuClassKey(e),
            e = this.platformKey(e),
            e = this.doNotTrackKey(e),
            e = this.pluginsKey(e),
            e = this.canvasKey(e),
            e = this.webglKey(e),
            e = this.adBlockKey(e),
            e = this.hasLiedLanguagesKey(e),
            e = this.hasLiedResolutionKey(e),
            e = this.hasLiedOsKey(e),
            e = this.hasLiedBrowserKey(e),
            e = this.touchSupportKey(e);
            var r = [];
            this.each(e, function(t) {
                var e = t.value;
                if ("undefined" == typeof e) {
                    return
                }
                "undefined" != typeof t.value.join && (e = t.value.join(";")),
                r.push(e)
            });
            var i = this.x64hash128(r.join("~~~"), 31);
            return t(i, e)
        },
        userAgentKey: function(t) {
            return this.options.excludeUserAgent || t.push({
                key: "jn",
                value: this.getUserAgent()
            }),
            t
        },
        getUserAgent: function() {
            return navigator.userAgent
        },
        languageKey: function(t) {
            return this.options.excludeLanguage || t.push({
                key: "cm",
                value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || ""
            }),
            t
        },
        colorDepthKey: function(t) {
            return this.options.excludeColorDepth || t.push({
                key: "gu",
                value: screen.colorDepth
            }),
            t
        },
        pixelRatioKey: function(t) {
            return this.options.excludePixelRatio || t.push({
                key: "uf",
                value: this.getPixelRatio()
            }),
            t
        },
        getPixelRatio: function() {
            return window.devicePixelRatio || ""
        },
        screenResolutionKey: function(t) {
            return this.options.excludeScreenResolution ? t : this.getScreenResolution(t)
        },
        getScreenResolution: function(t) {
            var e;
            return e = this.options.detectScreenOrientation && screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height],
            "undefined" != typeof e && t.push({
                key: "jr",
                value: e
            }),
            t
        },
        availableScreenResolutionKey: function(t) {
            return this.options.excludeAvailableScreenResolution ? t : this.getAvailableScreenResolution(t)
        },
        getAvailableScreenResolution: function(t) {
            var e;
            return screen.availWidth && screen.availHeight && (e = this.options.detectScreenOrientation ? screen.availHeight > screen.availWidth ? [screen.availHeight, screen.availWidth] : [screen.availWidth, screen.availHeight] : [screen.availHeight, screen.availWidth]),
            "undefined" != typeof e && t.push({
                key: "di",
                value: e
            }),
            t
        },
        timezoneOffsetKey: function(t) {
            return this.options.excludeTimezoneOffset || t.push({
                key: "zp",
                value: (new Date).getTimezoneOffset()
            }),
            t
        },
        sessionStorageKey: function(t) {
            return !this.options.excludeSessionStorage && this.hasSessionStorage() && t.push({
                key: "uh",
                value: 1
            }),
            t
        },
        localStorageKey: function(t) {
            return !this.options.excludeSessionStorage && this.hasLocalStorage() && t.push({
                key: "sh",
                value: 1
            }),
            t
        },
        indexedDbKey: function(t) {
            return !this.options.excludeIndexedDB && this.hasIndexedDB() && t.push({
                key: "he",
                value: 1
            }),
            t
        },
        addBehaviorKey: function(t) {
            return document.body && !this.options.excludeAddBehavior && document.body.addBehavior && t.push({
                key: "add_behavior",
                value: 1
            }),
            t
        },
        openDatabaseKey: function(t) {
            return !this.options.excludeOpenDatabase && window.openDatabase && t.push({
                key: "zo",
                value: 1
            }),
            t
        },
        cpuClassKey: function(t) {
            return this.options.excludeCpuClass || t.push({
                key: "rv",
                value: this.getNavigatorCpuClass()
            }),
            t
        },
        platformKey: function(t) {
            return this.options.excludePlatform || t.push({
                key: "nx",
                value: this.getNavigatorPlatform()
            }),
            t
        },
        doNotTrackKey: function(t) {
            return this.options.excludeDoNotTrack || t.push({
                key: "iw",
                value: this.getDoNotTrack()
            }),
            t
        },
        canvasKey: function(t) {
            return !this.options.excludeCanvas && this.isCanvasSupported() && t.push({
                key: "wr",
                value: this.getCanvasFp()
            }),
            t
        },
        webglKey: function(t) {
            return this.options.excludeWebGL ? ("undefined" == typeof NODEBUG && this.log("Skipping WebGL fingerprinting per excludeWebGL configuration option"),
            t) : this.isWebGlSupported() ? (t.push({
                key: "wg",
                value: this.getWebglFp()
            }),
            t) : ("undefined" == typeof NODEBUG && this.log("Skipping WebGL fingerprinting because it is not supported in this browser"),
            t)
        },
        adBlockKey: function(t) {
            return this.options.excludeAdBlock || t.push({
                key: "fk",
                value: this.getAdBlock()
            }),
            t
        },
        hasLiedLanguagesKey: function(t) {
            return this.options.excludeHasLiedLanguages || t.push({
                key: "rg",
                value: this.getHasLiedLanguages()
            }),
            t
        },
        hasLiedResolutionKey: function(t) {
            return this.options.excludeHasLiedResolution || t.push({
                key: "xy",
                value: this.getHasLiedResolution()
            }),
            t
        },
        hasLiedOsKey: function(t) {
            return this.options.excludeHasLiedOs || t.push({
                key: "jm",
                value: this.getHasLiedOs()
            }),
            t
        },
        hasLiedBrowserKey: function(t) {
            return this.options.excludeHasLiedBrowser || t.push({
                key: "ba",
                value: this.getHasLiedBrowser()
            }),
            t
        },
        pluginsKey: function(t) {
            return this.options.excludePlugins || (this.isIE() ? this.options.excludeIEPlugins || t.push({
                key: "ie_plugins",
                value: this.getIEPlugins()
            }) : t.push({
                key: "qm",
                value: this.getRegularPlugins()
            })),
            t
        },
        getRegularPlugins: function() {
            for (var t = [], e = 0, r = navigator.plugins.length; e < r; e++)
                t.push(navigator.plugins[e]);
            return this.pluginsShouldBeSorted() && (t = t.sort(function(t, e) {
                return t.name > e.name ? 1 : t.name < e.name ? -1 : 0
            })),
            this.map(t, function(t) {
                var e = this.map(t, function(t) {
                    return [t.type, t.suffixes].join("~")
                }).join(",");
                return [t.name, t.description, e].join("::")
            }, this)
        },
        getIEPlugins: function() {
            var t = [];
            if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject"in window) {
                var e = ["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"];
                t = this.map(e, function(t) {
                    try {
                        return new ActiveXObject(t),
                        t
                    } catch (e) {
                        return null
                    }
                })
            }
            return navigator.plugins && (t = t.concat(this.getRegularPlugins())),
            t
        },
        pluginsShouldBeSorted: function() {
            for (var t = !1, e = 0, r = this.options.sortPluginsFor.length; e < r; e++) {
                var i = this.options.sortPluginsFor[e];
                if (navigator.userAgent.match(i)) {
                    t = !0;
                    break
                }
            }
            return t
        },
        touchSupportKey: function(t) {
            return this.options.excludeTouchSupport || t.push({
                key: "tm",
                value: this.getTouchSupport()
            }),
            t
        },
        hasSessionStorage: function() {
            try {
                return !!window.sessionStorage
            } catch (t) {
                return !0
            }
        },
        hasLocalStorage: function() {
            try {
                return !!window.localStorage
            } catch (t) {
                return !0
            }
        },
        hasIndexedDB: function() {
            return !!window.indexedDB
        },
        getNavigatorCpuClass: function() {
            return navigator.cpuClass ? navigator.cpuClass : "unknown"
        },
        getNavigatorPlatform: function() {
            return navigator.platform ? navigator.platform : "unknown"
        },
        getDoNotTrack: function() {
            return navigator.doNotTrack ? navigator.doNotTrack : "unknown"
        },
        getTouchSupport: function() {
            var t = 0
              , e = !1;
            "undefined" != typeof navigator.maxTouchPoints ? t = navigator.maxTouchPoints : "undefined" != typeof navigator.msMaxTouchPoints && (t = navigator.msMaxTouchPoints);
            try {
                document.createEvent("TouchEvent"),
                e = !0
            } catch (r) {}
            var i = "ontouchstart"in window;
            return [t, e, i]
        },
        getCanvasFp: function() {
            var t = []
              , e = document.createElement("canvas");
            e.width = 2e3,
            e.height = 200,
            e.style.display = "inline";
            var r = e.getContext("2d");
            return r.rect(0, 0, 10, 10),
            r.rect(2, 2, 6, 6),
            t.push("canvas winding:" + (r.isPointInPath(5, 5, "evenodd") === !1 ? "yes" : "no")),
            r.textBaseline = "alphabetic",
            r.fillStyle = "#f60",
            r.fillRect(125, 1, 62, 20),
            r.fillStyle = "#069",
            this.options.dontUseFakeFontInCanvas ? r.font = "11pt Arial" : r.font = "11pt no-real-font-123",
            r.fillText("Cwm fjordbank glyphs vext quiz, 😃" + this.getNavigatorPlatform() + this.getUserAgent(), 2, 15),
            r.fillStyle = "rgba(102, 204, 0, 0.2)",
            r.font = "18pt Arial",
            r.fillText("Cwm fjordbank glyphs vext quiz, 😃" + this.getNavigatorPlatform() + this.getUserAgent(), 4, 45),
            r.globalCompositeOperation = "multiply",
            r.fillStyle = "rgb(255,0,255)",
            r.beginPath(),
            r.arc(50, 50, 50, 0, 2 * Math.PI, !0),
            r.closePath(),
            r.fill(),
            r.fillStyle = "rgb(0,255,255)",
            r.beginPath(),
            r.arc(100, 50, 50, 0, 2 * Math.PI, !0),
            r.closePath(),
            r.fill(),
            r.fillStyle = "rgb(255,255,0)",
            r.beginPath(),
            r.arc(75, 100, 50, 0, 2 * Math.PI, !0),
            r.closePath(),
            r.fill(),
            r.fillStyle = "rgb(255,0,255)",
            r.arc(75, 75, 75, 0, 2 * Math.PI, !0),
            r.arc(75, 75, 25, 0, 2 * Math.PI, !0),
            r.fill("evenodd"),
            t.push("canvas fp:" + e.toDataURL()),
            t.join("~")
        },
        getWebglFp: function() {
            var t, e = function(e) {
                return t.clearColor(0, 0, 0, 1),
                t.enable(t.DEPTH_TEST),
                t.depthFunc(t.LEQUAL),
                t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT),
                "[" + e[0] + ", " + e[1] + "]"
            }, r = function(t) {
                var e, r = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic");
                return r ? (e = t.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT),
                0 === e && (e = 2),
                e) : null
            };
            if (t = this.getWebglCanvas(),
            !t)
                return null;
            var i = []
              , n = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"
              , o = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"
              , s = t.createBuffer();
            t.bindBuffer(t.ARRAY_BUFFER, s);
            var a = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
            t.bufferData(t.ARRAY_BUFFER, a, t.STATIC_DRAW),
            s.itemSize = 3,
            s.numItems = 3;
            var h = t.createProgram()
              , c = t.createShader(t.VERTEX_SHADER);
            t.shaderSource(c, n),
            t.compileShader(c);
            var u = t.createShader(t.FRAGMENT_SHADER);
            return t.shaderSource(u, o),
            t.compileShader(u),
            t.attachShader(h, c),
            t.attachShader(h, u),
            t.linkProgram(h),
            t.useProgram(h),
            h.vertexPosAttrib = t.getAttribLocation(h, "attrVertex"),
            h.offsetUniform = t.getUniformLocation(h, "uniformOffset"),
            t.enableVertexAttribArray(h.vertexPosArray),
            t.vertexAttribPointer(h.vertexPosAttrib, s.itemSize, t.FLOAT, !1, 0, 0),
            t.uniform2f(h.offsetUniform, 1, 1),
            t.drawArrays(t.TRIANGLE_STRIP, 0, s.numItems),
            null != t.canvas && i.push(t.canvas.toDataURL()),
            i.push("extensions:" + t.getSupportedExtensions().join(";")),
            i.push("webgl aliased line width range:" + e(t.getParameter(t.ALIASED_LINE_WIDTH_RANGE))),
            i.push("webgl aliased point size range:" + e(t.getParameter(t.ALIASED_POINT_SIZE_RANGE))),
            i.push("webgl alpha bits:" + t.getParameter(t.ALPHA_BITS)),
            i.push("webgl antialiasing:" + (t.getContextAttributes().antialias ? "yes" : "no")),
            i.push("webgl blue bits:" + t.getParameter(t.BLUE_BITS)),
            i.push("webgl depth bits:" + t.getParameter(t.DEPTH_BITS)),
            i.push("webgl green bits:" + t.getParameter(t.GREEN_BITS)),
            i.push("webgl max anisotropy:" + r(t)),
            i.push("webgl max combined texture image units:" + t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),
            i.push("webgl max cube map texture size:" + t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE)),
            i.push("webgl max fragment uniform vectors:" + t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS)),
            i.push("webgl max render buffer size:" + t.getParameter(t.MAX_RENDERBUFFER_SIZE)),
            i.push("webgl max texture image units:" + t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)),
            i.push("webgl max texture size:" + t.getParameter(t.MAX_TEXTURE_SIZE)),
            i.push("webgl max varying vectors:" + t.getParameter(t.MAX_VARYING_VECTORS)),
            i.push("webgl max vertex attribs:" + t.getParameter(t.MAX_VERTEX_ATTRIBS)),
            i.push("webgl max vertex texture image units:" + t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),
            i.push("webgl max vertex uniform vectors:" + t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS)),
            i.push("webgl max viewport dims:" + e(t.getParameter(t.MAX_VIEWPORT_DIMS))),
            i.push("webgl red bits:" + t.getParameter(t.RED_BITS)),
            i.push("webgl renderer:" + t.getParameter(t.RENDERER)),
            i.push("webgl shading language version:" + t.getParameter(t.SHADING_LANGUAGE_VERSION)),
            i.push("webgl stencil bits:" + t.getParameter(t.STENCIL_BITS)),
            i.push("webgl vendor:" + t.getParameter(t.VENDOR)),
            i.push("webgl version:" + t.getParameter(t.VERSION)),
            t.getShaderPrecisionFormat ? (i.push("webgl vertex shader high float precision:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision),
            i.push("webgl vertex shader high float precision rangeMin:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).rangeMin),
            i.push("webgl vertex shader high float precision rangeMax:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).rangeMax),
            i.push("webgl vertex shader medium float precision:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision),
            i.push("webgl vertex shader medium float precision rangeMin:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).rangeMin),
            i.push("webgl vertex shader medium float precision rangeMax:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).rangeMax),
            i.push("webgl vertex shader low float precision:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_FLOAT).precision),
            i.push("webgl vertex shader low float precision rangeMin:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_FLOAT).rangeMin),
            i.push("webgl vertex shader low float precision rangeMax:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_FLOAT).rangeMax),
            i.push("webgl fragment shader high float precision:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision),
            i.push("webgl fragment shader high float precision rangeMin:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).rangeMin),
            i.push("webgl fragment shader high float precision rangeMax:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).rangeMax),
            i.push("webgl fragment shader medium float precision:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision),
            i.push("webgl fragment shader medium float precision rangeMin:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).rangeMin),
            i.push("webgl fragment shader medium float precision rangeMax:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).rangeMax),
            i.push("webgl fragment shader low float precision:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_FLOAT).precision),
            i.push("webgl fragment shader low float precision rangeMin:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_FLOAT).rangeMin),
            i.push("webgl fragment shader low float precision rangeMax:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_FLOAT).rangeMax),
            i.push("webgl vertex shader high int precision:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_INT).precision),
            i.push("webgl vertex shader high int precision rangeMin:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_INT).rangeMin),
            i.push("webgl vertex shader high int precision rangeMax:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_INT).rangeMax),
            i.push("webgl vertex shader medium int precision:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_INT).precision),
            i.push("webgl vertex shader medium int precision rangeMin:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_INT).rangeMin),
            i.push("webgl vertex shader medium int precision rangeMax:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_INT).rangeMax),
            i.push("webgl vertex shader low int precision:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_INT).precision),
            i.push("webgl vertex shader low int precision rangeMin:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_INT).rangeMin),
            i.push("webgl vertex shader low int precision rangeMax:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_INT).rangeMax),
            i.push("webgl fragment shader high int precision:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_INT).precision),
            i.push("webgl fragment shader high int precision rangeMin:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_INT).rangeMin),
            i.push("webgl fragment shader high int precision rangeMax:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_INT).rangeMax),
            i.push("webgl fragment shader medium int precision:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_INT).precision),
            i.push("webgl fragment shader medium int precision rangeMin:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_INT).rangeMin),
            i.push("webgl fragment shader medium int precision rangeMax:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_INT).rangeMax),
            i.push("webgl fragment shader low int precision:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_INT).precision),
            i.push("webgl fragment shader low int precision rangeMin:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_INT).rangeMin),
            i.push("webgl fragment shader low int precision rangeMax:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_INT).rangeMax),
            i.join("~")) : ("undefined" == typeof NODEBUG && this.log("WebGL fingerprinting is incomplete, because your browser does not support getShaderPrecisionFormat"),
            i.join("~"))
        },
        getAdBlock: function() {
            var t = document.createElement("div");
            t.innerHTML = "&nbsp;",
            t.className = "adsbox";
            var e = !1;
            try {
                document.body.appendChild(t),
                e = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight,
                document.body.removeChild(t)
            } catch (r) {
                e = !1
            }
            return e
        },
        getHasLiedLanguages: function() {
            if ("undefined" != typeof navigator.languages)
                try {
                    var t = navigator.languages[0].substr(0, 2);
                    if (t !== navigator.language.substr(0, 2))
                        return !0
                } catch (e) {
                    return !0
                }
            return !1
        },
        getHasLiedResolution: function() {
            return screen.width < screen.availWidth || screen.height < screen.availHeight
        },
        getHasLiedOs: function() {
            var t, e = navigator.userAgent.toLowerCase(), r = navigator.oscpu, i = navigator.platform.toLowerCase();
            t = e.indexOf("windows phone") >= 0 ? "Windows Phone" : e.indexOf("win") >= 0 ? "Windows" : e.indexOf("android") >= 0 ? "Android" : e.indexOf("linux") >= 0 ? "Linux" : e.indexOf("iphone") >= 0 || e.indexOf("ipad") >= 0 ? "iOS" : e.indexOf("mac") >= 0 ? "Mac" : "Other";
            var n;
            if (n = "ontouchstart"in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
            n && "Windows Phone" !== t && "Android" !== t && "iOS" !== t && "Other" !== t)
                return !0;
            if ("undefined" != typeof r) {
                if (r = r.toLowerCase(),
                r.indexOf("win") >= 0 && "Windows" !== t && "Windows Phone" !== t)
                    return !0;
                if (r.indexOf("linux") >= 0 && "Linux" !== t && "Android" !== t)
                    return !0;
                if (r.indexOf("mac") >= 0 && "Mac" !== t && "iOS" !== t)
                    return !0;
                if (0 === r.indexOf("win") && 0 === r.indexOf("linux") && r.indexOf("mac") >= 0 && "other" !== t)
                    return !0
            }
            return i.indexOf("win") >= 0 && "Windows" !== t && "Windows Phone" !== t || ((i.indexOf("linux") >= 0 || i.indexOf("android") >= 0 || i.indexOf("pike") >= 0) && "Linux" !== t && "Android" !== t || ((i.indexOf("mac") >= 0 || i.indexOf("ipad") >= 0 || i.indexOf("ipod") >= 0 || i.indexOf("iphone") >= 0) && "Mac" !== t && "iOS" !== t || (0 === i.indexOf("win") && 0 === i.indexOf("linux") && i.indexOf("mac") >= 0 && "other" !== t || "undefined" == typeof navigator.plugins && "Windows" !== t && "Windows Phone" !== t)))
        },
        getHasLiedBrowser: function() {
            var t, e = navigator.userAgent.toLowerCase(), r = navigator.productSub;
            if (t = e.indexOf("firefox") >= 0 ? "Firefox" : e.indexOf("opera") >= 0 || e.indexOf("opr") >= 0 ? "Opera" : e.indexOf("chrome") >= 0 ? "Chrome" : e.indexOf("safari") >= 0 ? "Safari" : e.indexOf("trident") >= 0 ? "Internet Explorer" : "Other",
            ("Chrome" === t || "Safari" === t || "Opera" === t) && "20030107" !== r)
                return !0;
            var i = eval.toString().length;
            if (37 === i && "Safari" !== t && "Firefox" !== t && "Other" !== t)
                return !0;
            if (39 === i && "Internet Explorer" !== t && "Other" !== t)
                return !0;
            if (33 === i && "Chrome" !== t && "Opera" !== t && "Other" !== t)
                return !0;
            var n;
            try {
                throw "a"
            } catch (o) {
                try {
                    o.toSource(),
                    n = !0
                } catch (s) {
                    n = !1
                }
            }
            return !(!n || "Firefox" === t || "Other" === t)
        },
        isCanvasSupported: function() {
            return !1;
            var t = document.createElement("canvas");
            return !(!t.getContext || !t.getContext("2d"))
        },
        isWebGlSupported: function() {
            if (!this.isCanvasSupported())
                return !1;
            var t, e = document.createElement("canvas");
            try {
                t = e.getContext && (e.getContext("webgl") || e.getContext("experimental-webgl"))
            } catch (r) {
                t = !1
            }
            return !!window.WebGLRenderingContext && !!t
        },
        isIE: function() {
            return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
        },
        hasSwfObjectLoaded: function() {
            return "undefined" != typeof window.swfobject
        },
        hasMinFlashInstalled: function() {
            return swfobject.hasFlashPlayerVersion("9.0.0")
        },
        addFlashDivNode: function() {
            var t = document.createElement("div");
            t.setAttribute("id", this.options.swfContainerId),
            document.body.appendChild(t)
        },
        loadSwfAndDetectFonts: function(t) {
            var e = "___fp_swf_loaded";
            window[e] = function(e) {
                t(e)
            }
            ;
            var r = this.options.swfContainerId;
            this.addFlashDivNode();
            var i = {
                onReady: e
            }
              , n = {
                allowScriptAccess: "always",
                menu: "false"
            };
            swfobject.embedSWF(this.options.swfPath, r, "1", "1", "9.0.0", !1, i, n, {})
        },
        getWebglCanvas: function() {
            var t = document.createElement("canvas")
              , e = null;
            try {
                e = t.getContext("webgl") || t.getContext("experimental-webgl")
            } catch (r) {}
            return e || (e = null),
            e
        },
        each: function(t, e, r) {
            if (null !== t)
                if (this.nativeForEach && t.forEach === this.nativeForEach)
                    t.forEach(e, r);
                else if (t.length === +t.length) {
                    for (var i = 0, n = t.length; i < n; i++)
                        if (e.call(r, t[i], i, t) === {})
                            return
                } else
                    for (var o in t)
                        if (t.hasOwnProperty(o) && e.call(r, t[o], o, t) === {})
                            return
        },
        map: function(t, e, r) {
            var i = [];
            return null == t ? i : this.nativeMap && t.map === this.nativeMap ? t.map(e, r) : (this.each(t, function(t, n, o) {
                i[i.length] = e.call(r, t, n, o)
            }),
            i)
        },
        x64Add: function(t, e) {
            t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]],
            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
            var r = [0, 0, 0, 0];
            return r[3] += t[3] + e[3],
            r[2] += r[3] >>> 16,
            r[3] &= 65535,
            r[2] += t[2] + e[2],
            r[1] += r[2] >>> 16,
            r[2] &= 65535,
            r[1] += t[1] + e[1],
            r[0] += r[1] >>> 16,
            r[1] &= 65535,
            r[0] += t[0] + e[0],
            r[0] &= 65535,
            [r[0] << 16 | r[1], r[2] << 16 | r[3]]
        },
        x64Multiply: function(t, e) {
            t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]],
            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
            var r = [0, 0, 0, 0];
            return r[3] += t[3] * e[3],
            r[2] += r[3] >>> 16,
            r[3] &= 65535,
            r[2] += t[2] * e[3],
            r[1] += r[2] >>> 16,
            r[2] &= 65535,
            r[2] += t[3] * e[2],
            r[1] += r[2] >>> 16,
            r[2] &= 65535,
            r[1] += t[1] * e[3],
            r[0] += r[1] >>> 16,
            r[1] &= 65535,
            r[1] += t[2] * e[2],
            r[0] += r[1] >>> 16,
            r[1] &= 65535,
            r[1] += t[3] * e[1],
            r[0] += r[1] >>> 16,
            r[1] &= 65535,
            r[0] += t[0] * e[3] + t[1] * e[2] + t[2] * e[1] + t[3] * e[0],
            r[0] &= 65535,
            [r[0] << 16 | r[1], r[2] << 16 | r[3]]
        },
        x64Rotl: function(t, e) {
            return e %= 64,
            32 === e ? [t[1], t[0]] : e < 32 ? [t[0] << e | t[1] >>> 32 - e, t[1] << e | t[0] >>> 32 - e] : (e -= 32,
            [t[1] << e | t[0] >>> 32 - e, t[0] << e | t[1] >>> 32 - e])
        },
        x64LeftShift: function(t, e) {
            return e %= 64,
            0 === e ? t : e < 32 ? [t[0] << e | t[1] >>> 32 - e, t[1] << e] : [t[1] << e - 32, 0]
        },
        x64Xor: function(t, e) {
            return [t[0] ^ e[0], t[1] ^ e[1]]
        },
        x64Fmix: function(t) {
            return t = this.x64Xor(t, [0, t[0] >>> 1]),
            t = this.x64Multiply(t, [4283543511, 3981806797]),
            t = this.x64Xor(t, [0, t[0] >>> 1]),
            t = this.x64Multiply(t, [3301882366, 444984403]),
            t = this.x64Xor(t, [0, t[0] >>> 1])
        },
        x64hash128: function(t, e) {
            t = t || "",
            e = e || 0;
            for (var r = t.length % 16, i = t.length - r, n = [0, e], o = [0, e], s = [0, 0], a = [0, 0], h = [2277735313, 289559509], c = [1291169091, 658871167], u = 0; u < i; u += 16)
                s = [255 & t.charCodeAt(u + 4) | (255 & t.charCodeAt(u + 5)) << 8 | (255 & t.charCodeAt(u + 6)) << 16 | (255 & t.charCodeAt(u + 7)) << 24, 255 & t.charCodeAt(u) | (255 & t.charCodeAt(u + 1)) << 8 | (255 & t.charCodeAt(u + 2)) << 16 | (255 & t.charCodeAt(u + 3)) << 24],
                a = [255 & t.charCodeAt(u + 12) | (255 & t.charCodeAt(u + 13)) << 8 | (255 & t.charCodeAt(u + 14)) << 16 | (255 & t.charCodeAt(u + 15)) << 24, 255 & t.charCodeAt(u + 8) | (255 & t.charCodeAt(u + 9)) << 8 | (255 & t.charCodeAt(u + 10)) << 16 | (255 & t.charCodeAt(u + 11)) << 24],
                s = this.x64Multiply(s, h),
                s = this.x64Rotl(s, 31),
                s = this.x64Multiply(s, c),
                n = this.x64Xor(n, s),
                n = this.x64Rotl(n, 27),
                n = this.x64Add(n, o),
                n = this.x64Add(this.x64Multiply(n, [0, 5]), [0, 1390208809]),
                a = this.x64Multiply(a, c),
                a = this.x64Rotl(a, 33),
                a = this.x64Multiply(a, h),
                o = this.x64Xor(o, a),
                o = this.x64Rotl(o, 31),
                o = this.x64Add(o, n),
                o = this.x64Add(this.x64Multiply(o, [0, 5]), [0, 944331445]);
            switch (s = [0, 0],
            a = [0, 0],
            r) {
            case 15:
                a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(u + 14)], 48));
            case 14:
                a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(u + 13)], 40));
            case 13:
                a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(u + 12)], 32));
            case 12:
                a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(u + 11)], 24));
            case 11:
                a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(u + 10)], 16));
            case 10:
                a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(u + 9)], 8));
            case 9:
                a = this.x64Xor(a, [0, t.charCodeAt(u + 8)]),
                a = this.x64Multiply(a, c),
                a = this.x64Rotl(a, 33),
                a = this.x64Multiply(a, h),
                o = this.x64Xor(o, a);
            case 8:
                s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(u + 7)], 56));
            case 7:
                s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(u + 6)], 48));
            case 6:
                s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(u + 5)], 40));
            case 5:
                s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(u + 4)], 32));
            case 4:
                s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(u + 3)], 24));
            case 3:
                s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(u + 2)], 16));
            case 2:
                s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(u + 1)], 8));
            case 1:
                s = this.x64Xor(s, [0, t.charCodeAt(u)]),
                s = this.x64Multiply(s, h),
                s = this.x64Rotl(s, 31),
                s = this.x64Multiply(s, c),
                n = this.x64Xor(n, s)
            }
            return n = this.x64Xor(n, [0, t.length]),
            o = this.x64Xor(o, [0, t.length]),
            n = this.x64Add(n, o),
            o = this.x64Add(o, n),
            n = this.x64Fmix(n),
            o = this.x64Fmix(o),
            n = this.x64Add(n, o),
            o = this.x64Add(o, n),
            ("00000000" + (n[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (n[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8)
        }
    },
    t.VERSION = "1.4.1",
    t
}),
function(t) {
    function e(t, e, r) {
        var i, n, o, l, p, d, y, b, S, w = 0, E = [], x = 0, T = !1, _ = [], A = [], R = !1;
        if (r = r || {},
        i = r.encoding || "UTF8",
        S = r.numRounds || 1,
        o = f(e, i),
        S !== parseInt(S, 10) || 1 > S)
            throw Error("numRounds must a integer >= 1");
        if ("SHA-1" !== t)
            throw Error("Chosen SHA variant is not supported");
        p = 512,
        d = v,
        y = m,
        l = 160,
        b = function(t) {
            return t.slice()
        }
        ,
        n = g(t),
        this.setHMACKey = function(e, r, o) {
            var s;
            if (!0 === T)
                throw Error("HMAC key already set");
            if (!0 === R)
                throw Error("Cannot set HMAC key after calling update");
            if (i = (o || {}).encoding || "UTF8",
            r = f(r, i)(e),
            e = r.binLen,
            r = r.value,
            s = p >>> 3,
            o = s / 4 - 1,
            s < e / 8) {
                for (r = y(r, e, 0, g(t), l); r.length <= o; )
                    r.push(0);
                r[o] &= 4294967040
            } else if (s > e / 8) {
                for (; r.length <= o; )
                    r.push(0);
                r[o] &= 4294967040
            }
            for (e = 0; e <= o; e += 1)
                _[e] = 909522486 ^ r[e],
                A[e] = 1549556828 ^ r[e];
            n = d(_, n),
            w = p,
            T = !0
        }
        ,
        this.update = function(t) {
            var e, r, i, s = 0, a = p >>> 5;
            for (e = o(t, E, x),
            t = e.binLen,
            r = e.value,
            e = t >>> 5,
            i = 0; i < e; i += a)
                s + p <= t && (n = d(r.slice(i, i + a), n),
                s += p);
            w += s,
            E = r.slice(s >>> 5),
            x = t % p,
            R = !0
        }
        ,
        this.getHash = function(e, r) {
            var i, o, f, p;
            if (!0 === T)
                throw Error("Cannot call getHash after setting HMAC key");
            switch (f = u(r),
            e) {
            case "HEX":
                i = function(t) {
                    return s(t, l, f)
                }
                ;
                break;
            case "B64":
                i = function(t) {
                    return a(t, l, f)
                }
                ;
                break;
            case "BYTES":
                i = function(t) {
                    return h(t, l)
                }
                ;
                break;
            case "ARRAYBUFFER":
                try {
                    o = new ArrayBuffer(0)
                } catch (d) {
                    throw Error("ARRAYBUFFER not supported by this environment")
                }
                i = function(t) {
                    return c(t, l)
                }
                ;
                break;
            default:
                throw Error("format must be HEX, B64, BYTES, or ARRAYBUFFER")
            }
            for (p = y(E.slice(), x, w, b(n), l),
            o = 1; o < S; o += 1)
                p = y(p, l, 0, g(t), l);
            return i(p)
        }
        ,
        this.getHMAC = function(e, r) {
            var i, o, f, v;
            if (!1 === T)
                throw Error("Cannot call getHMAC without first setting HMAC key");
            switch (f = u(r),
            e) {
            case "HEX":
                i = function(t) {
                    return s(t, l, f)
                }
                ;
                break;
            case "B64":
                i = function(t) {
                    return a(t, l, f)
                }
                ;
                break;
            case "BYTES":
                i = function(t) {
                    return h(t, l)
                }
                ;
                break;
            case "ARRAYBUFFER":
                try {
                    i = new ArrayBuffer(0)
                } catch (m) {
                    throw Error("ARRAYBUFFER not supported by this environment")
                }
                i = function(t) {
                    return c(t, l)
                }
                ;
                break;
            default:
                throw Error("outputFormat must be HEX, B64, BYTES, or ARRAYBUFFER")
            }
            return o = y(E.slice(), x, w, b(n), l),
            v = d(A, g(t)),
            v = y(o, l, p, v, l),
            i(v)
        }
    }
    function r(t, e, r) {
        var i, n, o, s, a, h = t.length;
        if (e = e || [0],
        r = r || 0,
        a = r >>> 3,
        0 !== h % 2)
            throw Error("String of HEX type must be in byte increments");
        for (i = 0; i < h; i += 2) {
            if (n = parseInt(t.substr(i, 2), 16),
            isNaN(n))
                throw Error("String of HEX type contains invalid characters");
            for (s = (i >>> 1) + a,
            o = s >>> 2; e.length <= o; )
                e.push(0);
            e[o] |= n << 8 * (3 - s % 4)
        }
        return {
            value: e,
            binLen: 4 * h + r
        }
    }
    function i(t, e, r) {
        var i, n, o, s, a = [], a = e || [0];
        for (r = r || 0,
        n = r >>> 3,
        i = 0; i < t.length; i += 1)
            e = t.charCodeAt(i),
            s = i + n,
            o = s >>> 2,
            a.length <= o && a.push(0),
            a[o] |= e << 8 * (3 - s % 4);
        return {
            value: a,
            binLen: 8 * t.length + r
        }
    }
    function n(t, e, r) {
        var i, n, o, s, a, h, c = [], u = 0, c = e || [0];
        if (r = r || 0,
        e = r >>> 3,
        -1 === t.search(/^[a-zA-Z0-9=+\/]+$/))
            throw Error("Invalid character in base-64 string");
        if (n = t.indexOf("="),
        t = t.replace(/\=/g, ""),
        -1 !== n && n < t.length)
            throw Error("Invalid '=' found in base-64 string");
        for (n = 0; n < t.length; n += 4) {
            for (a = t.substr(n, 4),
            o = s = 0; o < a.length; o += 1)
                i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(a[o]),
                s |= i << 18 - 6 * o;
            for (o = 0; o < a.length - 1; o += 1) {
                for (h = u + e,
                i = h >>> 2; c.length <= i; )
                    c.push(0);
                c[i] |= (s >>> 16 - 8 * o & 255) << 8 * (3 - h % 4),
                u += 1
            }
        }
        return {
            value: c,
            binLen: 8 * u + r
        }
    }
    function o(t, e, r) {
        var i, n, o, s = [], s = e || [0];
        for (r = r || 0,
        i = r >>> 3,
        e = 0; e < t.byteLength; e += 1)
            o = e + i,
            n = o >>> 2,
            s.length <= n && s.push(0),
            s[n] |= t[e] << 8 * (3 - o % 4);
        return {
            value: s,
            binLen: 8 * t.byteLength + r
        }
    }
    function s(t, e, r) {
        var i = "";
        e /= 8;
        var n, o;
        for (n = 0; n < e; n += 1)
            o = t[n >>> 2] >>> 8 * (3 - n % 4),
            i += "0123456789abcdef".charAt(o >>> 4 & 15) + "0123456789abcdef".charAt(15 & o);
        return r.outputUpper ? i.toUpperCase() : i
    }
    function a(t, e, r) {
        var i, n, o, s = "", a = e / 8;
        for (i = 0; i < a; i += 3)
            for (n = i + 1 < a ? t[i + 1 >>> 2] : 0,
            o = i + 2 < a ? t[i + 2 >>> 2] : 0,
            o = (t[i >>> 2] >>> 8 * (3 - i % 4) & 255) << 16 | (n >>> 8 * (3 - (i + 1) % 4) & 255) << 8 | o >>> 8 * (3 - (i + 2) % 4) & 255,
            n = 0; 4 > n; n += 1)
                s += 8 * i + 6 * n <= e ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(o >>> 6 * (3 - n) & 63) : r.b64Pad;
        return s
    }
    function h(t, e) {
        var r, i, n = "", o = e / 8;
        for (r = 0; r < o; r += 1)
            i = t[r >>> 2] >>> 8 * (3 - r % 4) & 255,
            n += String.fromCharCode(i);
        return n
    }
    function c(t, e) {
        var r, i = e / 8, n = new ArrayBuffer(i);
        for (r = 0; r < i; r += 1)
            n[r] = t[r >>> 2] >>> 8 * (3 - r % 4) & 255;
        return n
    }
    function u(t) {
        var e = {
            outputUpper: !1,
            b64Pad: "=",
            shakeLen: -1
        };
        if (t = t || {},
        e.outputUpper = t.outputUpper || !1,
        !0 === t.hasOwnProperty("b64Pad") && (e.b64Pad = t.b64Pad),
        "boolean" != typeof e.outputUpper)
            throw Error("Invalid outputUpper formatting option");
        if ("string" != typeof e.b64Pad)
            throw Error("Invalid b64Pad formatting option");
        return e
    }
    function f(t, e) {
        var s;
        switch (e) {
        case "UTF8":
        case "UTF16BE":
        case "UTF16LE":
            break;
        default:
            throw Error("encoding must be UTF8, UTF16BE, or UTF16LE")
        }
        switch (t) {
        case "HEX":
            s = r;
            break;
        case "TEXT":
            s = function(t, r, i) {
                var n, o, s, a, h, c = [], u = [], f = 0, c = r || [0];
                if (r = i || 0,
                s = r >>> 3,
                "UTF8" === e)
                    for (n = 0; n < t.length; n += 1)
                        for (i = t.charCodeAt(n),
                        u = [],
                        128 > i ? u.push(i) : 2048 > i ? (u.push(192 | i >>> 6),
                        u.push(128 | 63 & i)) : 55296 > i || 57344 <= i ? u.push(224 | i >>> 12, 128 | i >>> 6 & 63, 128 | 63 & i) : (n += 1,
                        i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(n)),
                        u.push(240 | i >>> 18, 128 | i >>> 12 & 63, 128 | i >>> 6 & 63, 128 | 63 & i)),
                        o = 0; o < u.length; o += 1) {
                            for (h = f + s,
                            a = h >>> 2; c.length <= a; )
                                c.push(0);
                            c[a] |= u[o] << 8 * (3 - h % 4),
                            f += 1
                        }
                else if ("UTF16BE" === e || "UTF16LE" === e)
                    for (n = 0; n < t.length; n += 1) {
                        for (i = t.charCodeAt(n),
                        "UTF16LE" === e && (o = 255 & i,
                        i = o << 8 | i >>> 8),
                        h = f + s,
                        a = h >>> 2; c.length <= a; )
                            c.push(0);
                        c[a] |= i << 8 * (2 - h % 4),
                        f += 2
                    }
                return {
                    value: c,
                    binLen: 8 * f + r
                }
            }
            ;
            break;
        case "B64":
            s = n;
            break;
        case "BYTES":
            s = i;
            break;
        case "ARRAYBUFFER":
            try {
                s = new ArrayBuffer(0)
            } catch (a) {
                throw Error("ARRAYBUFFER not supported by this environment")
            }
            s = o;
            break;
        default:
            throw Error("format must be HEX, TEXT, B64, BYTES, or ARRAYBUFFER")
        }
        return s
    }
    function l(t, e) {
        return t << e | t >>> 32 - e
    }
    function p(t, e) {
        var r = (65535 & t) + (65535 & e);
        return ((t >>> 16) + (e >>> 16) + (r >>> 16) & 65535) << 16 | 65535 & r
    }
    function d(t, e, r, i, n) {
        var o = (65535 & t) + (65535 & e) + (65535 & r) + (65535 & i) + (65535 & n);
        return ((t >>> 16) + (e >>> 16) + (r >>> 16) + (i >>> 16) + (n >>> 16) + (o >>> 16) & 65535) << 16 | 65535 & o
    }
    function g(t) {
        var e = [];
        if ("SHA-1" !== t)
            throw Error("No SHA variants supported");
        return e = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]
    }
    function v(t, e) {
        var r, i, n, o, s, a, h, c = [];
        for (r = e[0],
        i = e[1],
        n = e[2],
        o = e[3],
        s = e[4],
        h = 0; 80 > h; h += 1)
            c[h] = 16 > h ? t[h] : l(c[h - 3] ^ c[h - 8] ^ c[h - 14] ^ c[h - 16], 1),
            a = 20 > h ? d(l(r, 5), i & n ^ ~i & o, s, 1518500249, c[h]) : 40 > h ? d(l(r, 5), i ^ n ^ o, s, 1859775393, c[h]) : 60 > h ? d(l(r, 5), i & n ^ i & o ^ n & o, s, 2400959708, c[h]) : d(l(r, 5), i ^ n ^ o, s, 3395469782, c[h]),
            s = o,
            o = n,
            n = l(i, 30),
            i = r,
            r = a;
        return e[0] = p(r, e[0]),
        e[1] = p(i, e[1]),
        e[2] = p(n, e[2]),
        e[3] = p(o, e[3]),
        e[4] = p(s, e[4]),
        e
    }
    function m(t, e, r, i) {
        var n;
        for (n = (e + 65 >>> 9 << 4) + 15; t.length <= n; )
            t.push(0);
        for (t[e >>> 5] |= 128 << 24 - e % 32,
        e += r,
        t[n] = 4294967295 & e,
        t[n - 1] = e / 4294967296 | 0,
        e = t.length,
        n = 0; n < e; n += 16)
            i = v(t.slice(n, n + 16), i);
        return i
    }
    "function" == typeof define && define.amd ? define(function() {
        return e
    }) : "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (module.exports = e),
    exports = e) : t.jsSHA = e
}(this),
function(t) {
    "use strict";
    function e(t, e) {
        var r = (65535 & t) + (65535 & e)
          , i = (t >> 16) + (e >> 16) + (r >> 16);
        return i << 16 | 65535 & r
    }
    function r(t, e) {
        return t << e | t >>> 32 - e
    }
    function i(t, i, n, o, s, a) {
        return e(r(e(e(i, t), e(o, a)), s), n)
    }
    function n(t, e, r, n, o, s, a) {
        return i(e & r | ~e & n, t, e, o, s, a)
    }
    function o(t, e, r, n, o, s, a) {
        return i(e & n | r & ~n, t, e, o, s, a)
    }
    function s(t, e, r, n, o, s, a) {
        return i(e ^ r ^ n, t, e, o, s, a)
    }
    function a(t, e, r, n, o, s, a) {
        return i(r ^ (e | ~n), t, e, o, s, a)
    }
    function h(t, r) {
        t[r >> 5] |= 128 << r % 32,
        t[(r + 64 >>> 9 << 4) + 14] = r;
        var i, h, c, u, f, l = 1732584193, p = -271733879, d = -1732584194, g = 271733878;
        for (i = 0; i < t.length; i += 16)
            h = l,
            c = p,
            u = d,
            f = g,
            l = n(l, p, d, g, t[i], 7, -680876936),
            g = n(g, l, p, d, t[i + 1], 12, -389564586),
            d = n(d, g, l, p, t[i + 2], 17, 606105819),
            p = n(p, d, g, l, t[i + 3], 22, -1044525330),
            l = n(l, p, d, g, t[i + 4], 7, -176418897),
            g = n(g, l, p, d, t[i + 5], 12, 1200080426),
            d = n(d, g, l, p, t[i + 6], 17, -1473231341),
            p = n(p, d, g, l, t[i + 7], 22, -45705983),
            l = n(l, p, d, g, t[i + 8], 7, 1770035416),
            g = n(g, l, p, d, t[i + 9], 12, -1958414417),
            d = n(d, g, l, p, t[i + 10], 17, -42063),
            p = n(p, d, g, l, t[i + 11], 22, -1990404162),
            l = n(l, p, d, g, t[i + 12], 7, 1804603682),
            g = n(g, l, p, d, t[i + 13], 12, -40341101),
            d = n(d, g, l, p, t[i + 14], 17, -1502002290),
            p = n(p, d, g, l, t[i + 15], 22, 1236535329),
            l = o(l, p, d, g, t[i + 1], 5, -165796510),
            g = o(g, l, p, d, t[i + 6], 9, -1069501632),
            d = o(d, g, l, p, t[i + 11], 14, 643717713),
            p = o(p, d, g, l, t[i], 20, -373897302),
            l = o(l, p, d, g, t[i + 5], 5, -701558691),
            g = o(g, l, p, d, t[i + 10], 9, 38016083),
            d = o(d, g, l, p, t[i + 15], 14, -660478335),
            p = o(p, d, g, l, t[i + 4], 20, -405537848),
            l = o(l, p, d, g, t[i + 9], 5, 568446438),
            g = o(g, l, p, d, t[i + 14], 9, -1019803690),
            d = o(d, g, l, p, t[i + 3], 14, -187363961),
            p = o(p, d, g, l, t[i + 8], 20, 1163531501),
            l = o(l, p, d, g, t[i + 13], 5, -1444681467),
            g = o(g, l, p, d, t[i + 2], 9, -51403784),
            d = o(d, g, l, p, t[i + 7], 14, 1735328473),
            p = o(p, d, g, l, t[i + 12], 20, -1926607734),
            l = s(l, p, d, g, t[i + 5], 4, -378558),
            g = s(g, l, p, d, t[i + 8], 11, -2022574463),
            d = s(d, g, l, p, t[i + 11], 16, 1839030562),
            p = s(p, d, g, l, t[i + 14], 23, -35309556),
            l = s(l, p, d, g, t[i + 1], 4, -1530992060),
            g = s(g, l, p, d, t[i + 4], 11, 1272893353),
            d = s(d, g, l, p, t[i + 7], 16, -155497632),
            p = s(p, d, g, l, t[i + 10], 23, -1094730640),
            l = s(l, p, d, g, t[i + 13], 4, 681279174),
            g = s(g, l, p, d, t[i], 11, -358537222),
            d = s(d, g, l, p, t[i + 3], 16, -722521979),
            p = s(p, d, g, l, t[i + 6], 23, 76029189),
            l = s(l, p, d, g, t[i + 9], 4, -640364487),
            g = s(g, l, p, d, t[i + 12], 11, -421815835),
            d = s(d, g, l, p, t[i + 15], 16, 530742520),
            p = s(p, d, g, l, t[i + 2], 23, -995338651),
            l = a(l, p, d, g, t[i], 6, -198630844),
            g = a(g, l, p, d, t[i + 7], 10, 1126891415),
            d = a(d, g, l, p, t[i + 14], 15, -1416354905),
            p = a(p, d, g, l, t[i + 5], 21, -57434055),
            l = a(l, p, d, g, t[i + 12], 6, 1700485571),
            g = a(g, l, p, d, t[i + 3], 10, -1894986606),
            d = a(d, g, l, p, t[i + 10], 15, -1051523),
            p = a(p, d, g, l, t[i + 1], 21, -2054922799),
            l = a(l, p, d, g, t[i + 8], 6, 1873313359),
            g = a(g, l, p, d, t[i + 15], 10, -30611744),
            d = a(d, g, l, p, t[i + 6], 15, -1560198380),
            p = a(p, d, g, l, t[i + 13], 21, 1309151649),
            l = a(l, p, d, g, t[i + 4], 6, -145523070),
            g = a(g, l, p, d, t[i + 11], 10, -1120210379),
            d = a(d, g, l, p, t[i + 2], 15, 718787259),
            p = a(p, d, g, l, t[i + 9], 21, -343485551),
            l = e(l, h),
            p = e(p, c),
            d = e(d, u),
            g = e(g, f);
        return [l, p, d, g]
    }
    function c(t) {
        var e, r = "";
        for (e = 0; e < 32 * t.length; e += 8)
            r += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
        return r
    }
    function u(t) {
        var e, r = [];
        for (r[(t.length >> 2) - 1] = void 0,
        e = 0; e < r.length; e += 1)
            r[e] = 0;
        for (e = 0; e < 8 * t.length; e += 8)
            r[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
        return r
    }
    function f(t) {
        return c(h(u(t), 8 * t.length))
    }
    function l(t, e) {
        var r, i, n = u(t), o = [], s = [];
        for (o[15] = s[15] = void 0,
        n.length > 16 && (n = h(n, 8 * t.length)),
        r = 0; r < 16; r += 1)
            o[r] = 909522486 ^ n[r],
            s[r] = 1549556828 ^ n[r];
        return i = h(o.concat(u(e)), 512 + 8 * e.length),
        c(h(s.concat(i), 640))
    }
    function p(t) {
        var e, r, i = "0123456789abcdef", n = "";
        for (r = 0; r < t.length; r += 1)
            e = t.charCodeAt(r),
            n += i.charAt(e >>> 4 & 15) + i.charAt(15 & e);
        return n
    }
    function d(t) {
        return unescape(encodeURIComponent(t))
    }
    function g(t) {
        return f(d(t))
    }
    function v(t) {
        return p(g(t))
    }
    function m(t, e) {
        return l(d(t), d(e))
    }
    function y(t, e) {
        return p(m(t, e))
    }
    function b(t, e, r) {
        return e ? r ? m(e, t) : y(e, t) : r ? g(t) : v(t)
    }
    "function" == typeof define && define.amd ? define(function() {
        return b
    }) : "object" == typeof module && module.exports ? module.exports = b : t.md5 = b
}(this);
var CryptoJS = CryptoJS || function(t, e) {
    var r = {}
      , i = r.lib = {}
      , n = function() {}
      , o = i.Base = {
        extend: function(t) {
            n.prototype = this;
            var e = new n;
            return t && e.mixIn(t),
            e.hasOwnProperty("init") || (e.init = function() {
                e.$super.init.apply(this, arguments)
            }
            ),
            e.init.prototype = e,
            e.$super = this,
            e
        },
        create: function() {
            var t = this.extend();
            return t.init.apply(t, arguments),
            t
        },
        init: function() {},
        mixIn: function(t) {
            for (var e in t)
                t.hasOwnProperty(e) && (this[e] = t[e]);
            t.hasOwnProperty("toString") && (this.toString = t.toString)
        },
        clone: function() {
            return this.init.prototype.extend(this)
        }
    }
      , s = i.WordArray = o.extend({
        init: function(t, r) {
            t = this.words = t || [],
            this.sigBytes = r != e ? r : 4 * t.length
        },
        toString: function(t) {
            return (t || h).stringify(this)
        },
        concat: function(t) {
            var e = this.words
              , r = t.words
              , i = this.sigBytes;
            if (t = t.sigBytes,
            this.clamp(),
            i % 4)
                for (var n = 0; n < t; n++)
                    e[i + n >>> 2] |= (r[n >>> 2] >>> 24 - 8 * (n % 4) & 255) << 24 - 8 * ((i + n) % 4);
            else if (65535 < r.length)
                for (n = 0; n < t; n += 4)
                    e[i + n >>> 2] = r[n >>> 2];
            else
                e.push.apply(e, r);
            return this.sigBytes += t,
            this
        },
        clamp: function() {
            var e = this.words
              , r = this.sigBytes;
            e[r >>> 2] &= 4294967295 << 32 - 8 * (r % 4),
            e.length = t.ceil(r / 4)
        },
        clone: function() {
            var t = o.clone.call(this);
            return t.words = this.words.slice(0),
            t
        },
        random: function(e) {
            for (var r = [], i = 0; i < e; i += 4)
                r.push(4294967296 * t.random() | 0);
            return new s.init(r,e)
        }
    })
      , a = r.enc = {}
      , h = a.Hex = {
        stringify: function(t) {
            var e = t.words;
            t = t.sigBytes;
            for (var r = [], i = 0; i < t; i++) {
                var n = e[i >>> 2] >>> 24 - 8 * (i % 4) & 255;
                r.push((n >>> 4).toString(16)),
                r.push((15 & n).toString(16))
            }
            return r.join("")
        },
        parse: function(t) {
            for (var e = t.length, r = [], i = 0; i < e; i += 2)
                r[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - 4 * (i % 8);
            return new s.init(r,e / 2)
        }
    }
      , c = a.Latin1 = {
        stringify: function(t) {
            var e = t.words;
            t = t.sigBytes;
            for (var r = [], i = 0; i < t; i++)
                r.push(String.fromCharCode(e[i >>> 2] >>> 24 - 8 * (i % 4) & 255));
            return r.join("")
        },
        parse: function(t) {
            for (var e = t.length, r = [], i = 0; i < e; i++)
                r[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - 8 * (i % 4);
            return new s.init(r,e)
        }
    }
      , u = a.Utf8 = {
        stringify: function(t) {
            try {
                return decodeURIComponent(escape(c.stringify(t)))
            } catch (e) {
                throw Error("Malformed UTF-8 data")
            }
        },
        parse: function(t) {
            return c.parse(unescape(encodeURIComponent(t)))
        }
    }
      , f = i.BufferedBlockAlgorithm = o.extend({
        reset: function() {
            this._data = new s.init,
            this._nDataBytes = 0
        },
        _append: function(t) {
            "string" == typeof t && (t = u.parse(t)),
            this._data.concat(t),
            this._nDataBytes += t.sigBytes
        },
        _process: function(e) {
            var r = this._data
              , i = r.words
              , n = r.sigBytes
              , o = this.blockSize
              , a = n / (4 * o)
              , a = e ? t.ceil(a) : t.max((0 | a) - this._minBufferSize, 0);
            if (e = a * o,
            n = t.min(4 * e, n),
            e) {
                for (var h = 0; h < e; h += o)
                    this._doProcessBlock(i, h);
                h = i.splice(0, e),
                r.sigBytes -= n
            }
            return new s.init(h,n)
        },
        clone: function() {
            var t = o.clone.call(this);
            return t._data = this._data.clone(),
            t
        },
        _minBufferSize: 0
    });
    i.Hasher = f.extend({
        cfg: o.extend(),
        init: function(t) {
            this.cfg = this.cfg.extend(t),
            this.reset()
        },
        reset: function() {
            f.reset.call(this),
            this._doReset()
        },
        update: function(t) {
            return this._append(t),
            this._process(),
            this
        },
        finalize: function(t) {
            return t && this._append(t),
            this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function(t) {
            return function(e, r) {
                return new t.init(r).finalize(e)
            }
        },
        _createHmacHelper: function(t) {
            return function(e, r) {
                return new l.HMAC.init(t,r).finalize(e)
            }
        }
    });
    var l = r.algo = {};
    return r
}(Math);
!function() {
    var t = CryptoJS
      , e = t.lib.WordArray;
    t.enc.Base64 = {
        stringify: function(t) {
            var e = t.words
              , r = t.sigBytes
              , i = this._map;
            t.clamp(),
            t = [];
            for (var n = 0; n < r; n += 3)
                for (var o = (e[n >>> 2] >>> 24 - 8 * (n % 4) & 255) << 16 | (e[n + 1 >>> 2] >>> 24 - 8 * ((n + 1) % 4) & 255) << 8 | e[n + 2 >>> 2] >>> 24 - 8 * ((n + 2) % 4) & 255, s = 0; 4 > s && n + .75 * s < r; s++)
                    t.push(i.charAt(o >>> 6 * (3 - s) & 63));
            if (e = i.charAt(64))
                for (; t.length % 4; )
                    t.push(e);
            return t.join("")
        },
        parse: function(t) {
            var r = t.length
              , i = this._map
              , n = i.charAt(64);
            n && (n = t.indexOf(n),
            -1 != n && (r = n));
            for (var n = [], o = 0, s = 0; s < r; s++)
                if (s % 4) {
                    var a = i.indexOf(t.charAt(s - 1)) << 2 * (s % 4)
                      , h = i.indexOf(t.charAt(s)) >>> 6 - 2 * (s % 4);
                    n[o >>> 2] |= (a | h) << 24 - 8 * (o % 4),
                    o++
                }
            return e.create(n, o)
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
}(),
function(t) {
    function e(t, e, r, i, n, o, s) {
        return t = t + (e & r | ~e & i) + n + s,
        (t << o | t >>> 32 - o) + e
    }
    function r(t, e, r, i, n, o, s) {
        return t = t + (e & i | r & ~i) + n + s,
        (t << o | t >>> 32 - o) + e
    }
    function i(t, e, r, i, n, o, s) {
        return t = t + (e ^ r ^ i) + n + s,
        (t << o | t >>> 32 - o) + e
    }
    function n(t, e, r, i, n, o, s) {
        return t = t + (r ^ (e | ~i)) + n + s,
        (t << o | t >>> 32 - o) + e
    }
    for (var o = CryptoJS, s = o.lib, a = s.WordArray, h = s.Hasher, s = o.algo, c = [], u = 0; 64 > u; u++)
        c[u] = 4294967296 * t.abs(t.sin(u + 1)) | 0;
    s = s.MD5 = h.extend({
        _doReset: function() {
            this._hash = new a.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        _doProcessBlock: function(t, o) {
            for (var s = 0; 16 > s; s++) {
                var a = o + s
                  , h = t[a];
                t[a] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8)
            }
            var s = this._hash.words
              , a = t[o + 0]
              , h = t[o + 1]
              , u = t[o + 2]
              , f = t[o + 3]
              , l = t[o + 4]
              , p = t[o + 5]
              , d = t[o + 6]
              , g = t[o + 7]
              , v = t[o + 8]
              , m = t[o + 9]
              , y = t[o + 10]
              , b = t[o + 11]
              , S = t[o + 12]
              , w = t[o + 13]
              , E = t[o + 14]
              , x = t[o + 15]
              , T = s[0]
              , _ = s[1]
              , A = s[2]
              , R = s[3]
              , T = e(T, _, A, R, a, 7, c[0])
              , R = e(R, T, _, A, h, 12, c[1])
              , A = e(A, R, T, _, u, 17, c[2])
              , _ = e(_, A, R, T, f, 22, c[3])
              , T = e(T, _, A, R, l, 7, c[4])
              , R = e(R, T, _, A, p, 12, c[5])
              , A = e(A, R, T, _, d, 17, c[6])
              , _ = e(_, A, R, T, g, 22, c[7])
              , T = e(T, _, A, R, v, 7, c[8])
              , R = e(R, T, _, A, m, 12, c[9])
              , A = e(A, R, T, _, y, 17, c[10])
              , _ = e(_, A, R, T, b, 22, c[11])
              , T = e(T, _, A, R, S, 7, c[12])
              , R = e(R, T, _, A, w, 12, c[13])
              , A = e(A, R, T, _, E, 17, c[14])
              , _ = e(_, A, R, T, x, 22, c[15])
              , T = r(T, _, A, R, h, 5, c[16])
              , R = r(R, T, _, A, d, 9, c[17])
              , A = r(A, R, T, _, b, 14, c[18])
              , _ = r(_, A, R, T, a, 20, c[19])
              , T = r(T, _, A, R, p, 5, c[20])
              , R = r(R, T, _, A, y, 9, c[21])
              , A = r(A, R, T, _, x, 14, c[22])
              , _ = r(_, A, R, T, l, 20, c[23])
              , T = r(T, _, A, R, m, 5, c[24])
              , R = r(R, T, _, A, E, 9, c[25])
              , A = r(A, R, T, _, f, 14, c[26])
              , _ = r(_, A, R, T, v, 20, c[27])
              , T = r(T, _, A, R, w, 5, c[28])
              , R = r(R, T, _, A, u, 9, c[29])
              , A = r(A, R, T, _, g, 14, c[30])
              , _ = r(_, A, R, T, S, 20, c[31])
              , T = i(T, _, A, R, p, 4, c[32])
              , R = i(R, T, _, A, v, 11, c[33])
              , A = i(A, R, T, _, b, 16, c[34])
              , _ = i(_, A, R, T, E, 23, c[35])
              , T = i(T, _, A, R, h, 4, c[36])
              , R = i(R, T, _, A, l, 11, c[37])
              , A = i(A, R, T, _, g, 16, c[38])
              , _ = i(_, A, R, T, y, 23, c[39])
              , T = i(T, _, A, R, w, 4, c[40])
              , R = i(R, T, _, A, a, 11, c[41])
              , A = i(A, R, T, _, f, 16, c[42])
              , _ = i(_, A, R, T, d, 23, c[43])
              , T = i(T, _, A, R, m, 4, c[44])
              , R = i(R, T, _, A, S, 11, c[45])
              , A = i(A, R, T, _, x, 16, c[46])
              , _ = i(_, A, R, T, u, 23, c[47])
              , T = n(T, _, A, R, a, 6, c[48])
              , R = n(R, T, _, A, g, 10, c[49])
              , A = n(A, R, T, _, E, 15, c[50])
              , _ = n(_, A, R, T, p, 21, c[51])
              , T = n(T, _, A, R, S, 6, c[52])
              , R = n(R, T, _, A, f, 10, c[53])
              , A = n(A, R, T, _, y, 15, c[54])
              , _ = n(_, A, R, T, h, 21, c[55])
              , T = n(T, _, A, R, v, 6, c[56])
              , R = n(R, T, _, A, x, 10, c[57])
              , A = n(A, R, T, _, d, 15, c[58])
              , _ = n(_, A, R, T, w, 21, c[59])
              , T = n(T, _, A, R, l, 6, c[60])
              , R = n(R, T, _, A, b, 10, c[61])
              , A = n(A, R, T, _, u, 15, c[62])
              , _ = n(_, A, R, T, m, 21, c[63]);
            s[0] = s[0] + T | 0,
            s[1] = s[1] + _ | 0,
            s[2] = s[2] + A | 0,
            s[3] = s[3] + R | 0
        },
        _doFinalize: function() {
            var e = this._data
              , r = e.words
              , i = 8 * this._nDataBytes
              , n = 8 * e.sigBytes;
            r[n >>> 5] |= 128 << 24 - n % 32;
            var o = t.floor(i / 4294967296);
            for (r[(n + 64 >>> 9 << 4) + 15] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
            r[(n + 64 >>> 9 << 4) + 14] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8),
            e.sigBytes = 4 * (r.length + 1),
            this._process(),
            e = this._hash,
            r = e.words,
            i = 0; 4 > i; i++)
                n = r[i],
                r[i] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8);
            return e
        },
        clone: function() {
            var t = h.clone.call(this);
            return t._hash = this._hash.clone(),
            t
        }
    }),
    o.MD5 = h._createHelper(s),
    o.HmacMD5 = h._createHmacHelper(s)
}(Math),
function() {
    var t = CryptoJS
      , e = t.lib
      , r = e.Base
      , i = e.WordArray
      , e = t.algo
      , n = e.EvpKDF = r.extend({
        cfg: r.extend({
            keySize: 4,
            hasher: e.MD5,
            iterations: 1
        }),
        init: function(t) {
            this.cfg = this.cfg.extend(t)
        },
        compute: function(t, e) {
            for (var r = this.cfg, n = r.hasher.create(), o = i.create(), s = o.words, a = r.keySize, r = r.iterations; s.length < a; ) {
                h && n.update(h);
                var h = n.update(t).finalize(e);
                n.reset();
                for (var c = 1; c < r; c++)
                    h = n.finalize(h),
                    n.reset();
                o.concat(h)
            }
            return o.sigBytes = 4 * a,
            o
        }
    });
    t.EvpKDF = function(t, e, r) {
        return n.create(r).compute(t, e)
    }
}(),
CryptoJS.lib.Cipher || function(t) {
    var e = CryptoJS
      , r = e.lib
      , i = r.Base
      , n = r.WordArray
      , o = r.BufferedBlockAlgorithm
      , s = e.enc.Base64
      , a = e.algo.EvpKDF
      , h = r.Cipher = o.extend({
        cfg: i.extend(),
        createEncryptor: function(t, e) {
            return this.create(this._ENC_XFORM_MODE, t, e)
        },
        createDecryptor: function(t, e) {
            return this.create(this._DEC_XFORM_MODE, t, e)
        },
        init: function(t, e, r) {
            this.cfg = this.cfg.extend(r),
            this._xformMode = t,
            this._key = e,
            this.reset()
        },
        reset: function() {
            o.reset.call(this),
            this._doReset()
        },
        process: function(t) {
            return this._append(t),
            this._process()
        },
        finalize: function(t) {
            return t && this._append(t),
            this._doFinalize()
        },
        keySize: 4,
        ivSize: 4,
        _ENC_XFORM_MODE: 1,
        _DEC_XFORM_MODE: 2,
        _createHelper: function(t) {
            return {
                encrypt: function(e, r, i) {
                    return ("string" == typeof r ? d : p).encrypt(t, e, r, i)
                },
                decrypt: function(e, r, i) {
                    return ("string" == typeof r ? d : p).decrypt(t, e, r, i)
                }
            }
        }
    });
    r.StreamCipher = h.extend({
        _doFinalize: function() {
            return this._process(!0)
        },
        blockSize: 1
    });
    var c = e.mode = {}
      , u = function(e, r, i) {
        var n = this._iv;
        n ? this._iv = t : n = this._prevBlock;
        for (var o = 0; o < i; o++)
            e[r + o] ^= n[o]
    }
      , f = (r.BlockCipherMode = i.extend({
        createEncryptor: function(t, e) {
            return this.Encryptor.create(t, e)
        },
        createDecryptor: function(t, e) {
            return this.Decryptor.create(t, e)
        },
        init: function(t, e) {
            this._cipher = t,
            this._iv = e
        }
    })).extend();
    f.Encryptor = f.extend({
        processBlock: function(t, e) {
            var r = this._cipher
              , i = r.blockSize;
            u.call(this, t, e, i),
            r.encryptBlock(t, e),
            this._prevBlock = t.slice(e, e + i)
        }
    }),
    f.Decryptor = f.extend({
        processBlock: function(t, e) {
            var r = this._cipher
              , i = r.blockSize
              , n = t.slice(e, e + i);
            r.decryptBlock(t, e),
            u.call(this, t, e, i),
            this._prevBlock = n
        }
    }),
    c = c.CBC = f,
    f = (e.pad = {}).Pkcs7 = {
        pad: function(t, e) {
            for (var r = 4 * e, r = r - t.sigBytes % r, i = r << 24 | r << 16 | r << 8 | r, o = [], s = 0; s < r; s += 4)
                o.push(i);
            r = n.create(o, r),
            t.concat(r)
        },
        unpad: function(t) {
            t.sigBytes -= 255 & t.words[t.sigBytes - 1 >>> 2]
        }
    },
    r.BlockCipher = h.extend({
        cfg: h.cfg.extend({
            mode: c,
            padding: f
        }),
        reset: function() {
            h.reset.call(this);
            var t = this.cfg
              , e = t.iv
              , t = t.mode;
            if (this._xformMode == this._ENC_XFORM_MODE)
                var r = t.createEncryptor;
            else
                r = t.createDecryptor,
                this._minBufferSize = 1;
            this._mode = r.call(t, this, e && e.words)
        },
        _doProcessBlock: function(t, e) {
            this._mode.processBlock(t, e)
        },
        _doFinalize: function() {
            var t = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
                t.pad(this._data, this.blockSize);
                var e = this._process(!0)
            } else
                e = this._process(!0),
                t.unpad(e);
            return e
        },
        blockSize: 4
    });
    var l = r.CipherParams = i.extend({
        init: function(t) {
            this.mixIn(t)
        },
        toString: function(t) {
            return (t || this.formatter).stringify(this)
        }
    })
      , c = (e.format = {}).OpenSSL = {
        stringify: function(t) {
            var e = t.ciphertext;
            return t = t.salt,
            (t ? n.create([1398893684, 1701076831]).concat(t).concat(e) : e).toString(s)
        },
        parse: function(t) {
            t = s.parse(t);
            var e = t.words;
            if (1398893684 == e[0] && 1701076831 == e[1]) {
                var r = n.create(e.slice(2, 4));
                e.splice(0, 4),
                t.sigBytes -= 16
            }
            return l.create({
                ciphertext: t,
                salt: r
            })
        }
    }
      , p = r.SerializableCipher = i.extend({
        cfg: i.extend({
            format: c
        }),
        encrypt: function(t, e, r, i) {
            i = this.cfg.extend(i);
            var n = t.createEncryptor(r, i);
            return e = n.finalize(e),
            n = n.cfg,
            l.create({
                ciphertext: e,
                key: r,
                iv: n.iv,
                algorithm: t,
                mode: n.mode,
                padding: n.padding,
                blockSize: t.blockSize,
                formatter: i.format
            })
        },
        decrypt: function(t, e, r, i) {
            return i = this.cfg.extend(i),
            e = this._parse(e, i.format),
            t.createDecryptor(r, i).finalize(e.ciphertext)
        },
        _parse: function(t, e) {
            return "string" == typeof t ? e.parse(t, this) : t
        }
    })
      , e = (e.kdf = {}).OpenSSL = {
        execute: function(t, e, r, i) {
            return i || (i = n.random(8)),
            t = a.create({
                keySize: e + r
            }).compute(t, i),
            r = n.create(t.words.slice(e), 4 * r),
            t.sigBytes = 4 * e,
            l.create({
                key: t,
                iv: r,
                salt: i
            })
        }
    }
      , d = r.PasswordBasedCipher = p.extend({
        cfg: p.cfg.extend({
            kdf: e
        }),
        encrypt: function(t, e, r, i) {
            return i = this.cfg.extend(i),
            r = i.kdf.execute(r, t.keySize, t.ivSize),
            i.iv = r.iv,
            t = p.encrypt.call(this, t, e, r.key, i),
            t.mixIn(r),
            t
        },
        decrypt: function(t, e, r, i) {
            return i = this.cfg.extend(i),
            e = this._parse(e, i.format),
            r = i.kdf.execute(r, t.keySize, t.ivSize, e.salt),
            i.iv = r.iv,
            p.decrypt.call(this, t, e, r.key, i)
        }
    })
}(),
function() {
    for (var t = CryptoJS, e = t.lib.BlockCipher, r = t.algo, i = [], n = [], o = [], s = [], a = [], h = [], c = [], u = [], f = [], l = [], p = [], d = 0; 256 > d; d++)
        p[d] = 128 > d ? d << 1 : d << 1 ^ 283;
    for (var g = 0, v = 0, d = 0; 256 > d; d++) {
        var m = v ^ v << 1 ^ v << 2 ^ v << 3 ^ v << 4
          , m = m >>> 8 ^ 255 & m ^ 99;
        i[g] = m,
        n[m] = g;
        var y = p[g]
          , b = p[y]
          , S = p[b]
          , w = 257 * p[m] ^ 16843008 * m;
        o[g] = w << 24 | w >>> 8,
        s[g] = w << 16 | w >>> 16,
        a[g] = w << 8 | w >>> 24,
        h[g] = w,
        w = 16843009 * S ^ 65537 * b ^ 257 * y ^ 16843008 * g,
        c[m] = w << 24 | w >>> 8,
        u[m] = w << 16 | w >>> 16,
        f[m] = w << 8 | w >>> 24,
        l[m] = w,
        g ? (g = y ^ p[p[p[S ^ y]]],
        v ^= p[p[v]]) : g = v = 1
    }
    var E = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
      , r = r.AES = e.extend({
        _doReset: function() {
            for (var t = this._key, e = t.words, r = t.sigBytes / 4, t = 4 * ((this._nRounds = r + 6) + 1), n = this._keySchedule = [], o = 0; o < t; o++)
                if (o < r)
                    n[o] = e[o];
                else {
                    var s = n[o - 1];
                    o % r ? 6 < r && 4 == o % r && (s = i[s >>> 24] << 24 | i[s >>> 16 & 255] << 16 | i[s >>> 8 & 255] << 8 | i[255 & s]) : (s = s << 8 | s >>> 24,
                    s = i[s >>> 24] << 24 | i[s >>> 16 & 255] << 16 | i[s >>> 8 & 255] << 8 | i[255 & s],
                    s ^= E[o / r | 0] << 24),
                    n[o] = n[o - r] ^ s
                }
            for (e = this._invKeySchedule = [],
            r = 0; r < t; r++)
                o = t - r,
                s = r % 4 ? n[o] : n[o - 4],
                e[r] = 4 > r || 4 >= o ? s : c[i[s >>> 24]] ^ u[i[s >>> 16 & 255]] ^ f[i[s >>> 8 & 255]] ^ l[i[255 & s]]
        },
        encryptBlock: function(t, e) {
            this._doCryptBlock(t, e, this._keySchedule, o, s, a, h, i)
        },
        decryptBlock: function(t, e) {
            var r = t[e + 1];
            t[e + 1] = t[e + 3],
            t[e + 3] = r,
            this._doCryptBlock(t, e, this._invKeySchedule, c, u, f, l, n),
            r = t[e + 1],
            t[e + 1] = t[e + 3],
            t[e + 3] = r
        },
        _doCryptBlock: function(t, e, r, i, n, o, s, a) {
            for (var h = this._nRounds, c = t[e] ^ r[0], u = t[e + 1] ^ r[1], f = t[e + 2] ^ r[2], l = t[e + 3] ^ r[3], p = 4, d = 1; d < h; d++)
                var g = i[c >>> 24] ^ n[u >>> 16 & 255] ^ o[f >>> 8 & 255] ^ s[255 & l] ^ r[p++]
                  , v = i[u >>> 24] ^ n[f >>> 16 & 255] ^ o[l >>> 8 & 255] ^ s[255 & c] ^ r[p++]
                  , m = i[f >>> 24] ^ n[l >>> 16 & 255] ^ o[c >>> 8 & 255] ^ s[255 & u] ^ r[p++]
                  , l = i[l >>> 24] ^ n[c >>> 16 & 255] ^ o[u >>> 8 & 255] ^ s[255 & f] ^ r[p++]
                  , c = g
                  , u = v
                  , f = m;
            g = (a[c >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[f >>> 8 & 255] << 8 | a[255 & l]) ^ r[p++],
            v = (a[u >>> 24] << 24 | a[f >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & c]) ^ r[p++],
            m = (a[f >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[c >>> 8 & 255] << 8 | a[255 & u]) ^ r[p++],
            l = (a[l >>> 24] << 24 | a[c >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[255 & f]) ^ r[p++],
            t[e] = g,
            t[e + 1] = v,
            t[e + 2] = m,
            t[e + 3] = l
        },
        keySize: 8
    });
    t.AES = e._createHelper(r)
}(),
CryptoJS.pad.ZeroPadding = {
    pad: function(t, e) {
        var r = 4 * e;
        t.clamp(),
        t.sigBytes += r - (t.sigBytes % r || r)
    },
    unpad: function(t) {
        for (var e = t.words, r = t.sigBytes - 1; !(e[r >>> 2] >>> 24 - 8 * (r % 4) & 255); )
            r--;
        t.sigBytes = r + 1
    }
},
function(t, e) {
    "function" == typeof define && define.amd ? define(["exports"], e) : e("object" == typeof exports && "string" != typeof exports.nodeName ? module.exports : t)
}(this, function(t) {
    function e(t, e, r) {
        null != t && ("number" == typeof t ? this.fromNumber(t, e, r) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
    }
    function r() {
        return new e(null)
    }
    function i(t, e, r, i, n, o) {
        for (; --o >= 0; ) {
            var s = e * this[t++] + r[i] + n;
            n = Math.floor(s / 67108864),
            r[i++] = 67108863 & s
        }
        return n
    }
    function n(t, e, r, i, n, o) {
        for (var s = 32767 & e, a = e >> 15; --o >= 0; ) {
            var h = 32767 & this[t]
              , c = this[t++] >> 15
              , u = a * h + c * s;
            h = s * h + ((32767 & u) << 15) + r[i] + (1073741823 & n),
            n = (h >>> 30) + (u >>> 15) + a * c + (n >>> 30),
            r[i++] = 1073741823 & h
        }
        return n
    }
    function o(t, e, r, i, n, o) {
        for (var s = 16383 & e, a = e >> 14; --o >= 0; ) {
            var h = 16383 & this[t]
              , c = this[t++] >> 14
              , u = a * h + c * s;
            h = s * h + ((16383 & u) << 14) + r[i] + n,
            n = (h >> 28) + (u >> 14) + a * c,
            r[i++] = 268435455 & h
        }
        return n
    }
    function s(t) {
        return Re.charAt(t)
    }
    function a(t, e) {
        var r = Ce[t.charCodeAt(e)];
        return null == r ? -1 : r
    }
    function h(t) {
        for (var e = this.t - 1; e >= 0; --e)
            t[e] = this[e];
        t.t = this.t,
        t.s = this.s
    }
    function c(t) {
        this.t = 1,
        this.s = t < 0 ? -1 : 0,
        t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
    }
    function u(t) {
        var e = r();
        return e.fromInt(t),
        e
    }
    function f(t, r) {
        var i;
        if (16 == r)
            i = 4;
        else if (8 == r)
            i = 3;
        else if (256 == r)
            i = 8;
        else if (2 == r)
            i = 1;
        else if (32 == r)
            i = 5;
        else {
            if (4 != r)
                return void this.fromRadix(t, r);
            i = 2
        }
        this.t = 0,
        this.s = 0;
        for (var n = t.length, o = !1, s = 0; --n >= 0; ) {
            var h = 8 == i ? 255 & t[n] : a(t, n);
            h < 0 ? "-" == t.charAt(n) && (o = !0) : (o = !1,
            0 == s ? this[this.t++] = h : s + i > this.DB ? (this[this.t - 1] |= (h & (1 << this.DB - s) - 1) << s,
            this[this.t++] = h >> this.DB - s) : this[this.t - 1] |= h << s,
            s += i,
            s >= this.DB && (s -= this.DB))
        }
        8 == i && 0 != (128 & t[0]) && (this.s = -1,
        s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)),
        this.clamp(),
        o && e.ZERO.subTo(this, this)
    }
    function l() {
        for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; )
            --this.t
    }
    function p(t) {
        if (this.s < 0)
            return "-" + this.negate().toString(t);
        var e;
        if (16 == t)
            e = 4;
        else if (8 == t)
            e = 3;
        else if (2 == t)
            e = 1;
        else if (32 == t)
            e = 5;
        else {
            if (4 != t)
                return this.toRadix(t);
            e = 2
        }
        var r, i = (1 << e) - 1, n = !1, o = "", a = this.t, h = this.DB - a * this.DB % e;
        if (a-- > 0)
            for (h < this.DB && (r = this[a] >> h) > 0 && (n = !0,
            o = s(r)); a >= 0; )
                h < e ? (r = (this[a] & (1 << h) - 1) << e - h,
                r |= this[--a] >> (h += this.DB - e)) : (r = this[a] >> (h -= e) & i,
                h <= 0 && (h += this.DB,
                --a)),
                r > 0 && (n = !0),
                n && (o += s(r));
        return n ? o : "0"
    }
    function d() {
        var t = r();
        return e.ZERO.subTo(this, t),
        t
    }
    function g() {
        return this.s < 0 ? this.negate() : this
    }
    function m(t) {
        var e = this.s - t.s;
        if (0 != e)
            return e;
        var r = this.t;
        if (e = r - t.t,
        0 != e)
            return this.s < 0 ? -e : e;
        for (; --r >= 0; )
            if (0 != (e = this[r] - t[r]))
                return e;
        return 0
    }
    function y(t) {
        var e, r = 1;
        return 0 != (e = t >>> 16) && (t = e,
        r += 16),
        0 != (e = t >> 8) && (t = e,
        r += 8),
        0 != (e = t >> 4) && (t = e,
        r += 4),
        0 != (e = t >> 2) && (t = e,
        r += 2),
        0 != (e = t >> 1) && (t = e,
        r += 1),
        r
    }
    function b() {
        return this.t <= 0 ? 0 : this.DB * (this.t - 1) + y(this[this.t - 1] ^ this.s & this.DM)
    }
    function S(t, e) {
        var r;
        for (r = this.t - 1; r >= 0; --r)
            e[r + t] = this[r];
        for (r = t - 1; r >= 0; --r)
            e[r] = 0;
        e.t = this.t + t,
        e.s = this.s
    }
    function w(t, e) {
        for (var r = t; r < this.t; ++r)
            e[r - t] = this[r];
        e.t = Math.max(this.t - t, 0),
        e.s = this.s
    }
    function E(t, e) {
        var r, i = t % this.DB, n = this.DB - i, o = (1 << n) - 1, s = Math.floor(t / this.DB), a = this.s << i & this.DM;
        for (r = this.t - 1; r >= 0; --r)
            e[r + s + 1] = this[r] >> n | a,
            a = (this[r] & o) << i;
        for (r = s - 1; r >= 0; --r)
            e[r] = 0;
        e[s] = a,
        e.t = this.t + s + 1,
        e.s = this.s,
        e.clamp()
    }
    function x(t, e) {
        e.s = this.s;
        var r = Math.floor(t / this.DB);
        if (r >= this.t)
            return void (e.t = 0);
        var i = t % this.DB
          , n = this.DB - i
          , o = (1 << i) - 1;
        e[0] = this[r] >> i;
        for (var s = r + 1; s < this.t; ++s)
            e[s - r - 1] |= (this[s] & o) << n,
            e[s - r] = this[s] >> i;
        i > 0 && (e[this.t - r - 1] |= (this.s & o) << n),
        e.t = this.t - r,
        e.clamp()
    }
    function T(t, e) {
        for (var r = 0, i = 0, n = Math.min(t.t, this.t); r < n; )
            i += this[r] - t[r],
            e[r++] = i & this.DM,
            i >>= this.DB;
        if (t.t < this.t) {
            for (i -= t.s; r < this.t; )
                i += this[r],
                e[r++] = i & this.DM,
                i >>= this.DB;
            i += this.s
        } else {
            for (i += this.s; r < t.t; )
                i -= t[r],
                e[r++] = i & this.DM,
                i >>= this.DB;
            i -= t.s
        }
        e.s = i < 0 ? -1 : 0,
        i < -1 ? e[r++] = this.DV + i : i > 0 && (e[r++] = i),
        e.t = r,
        e.clamp()
    }
    function _(t, r) {
        var i = this.abs()
          , n = t.abs()
          , o = i.t;
        for (r.t = o + n.t; --o >= 0; )
            r[o] = 0;
        for (o = 0; o < n.t; ++o)
            r[o + i.t] = i.am(0, n[o], r, o, 0, i.t);
        r.s = 0,
        r.clamp(),
        this.s != t.s && e.ZERO.subTo(r, r)
    }
    function A(t) {
        for (var e = this.abs(), r = t.t = 2 * e.t; --r >= 0; )
            t[r] = 0;
        for (r = 0; r < e.t - 1; ++r) {
            var i = e.am(r, e[r], t, 2 * r, 0, 1);
            (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, i, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV,
            t[r + e.t + 1] = 1)
        }
        t.t > 0 && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)),
        t.s = 0,
        t.clamp()
    }
    function R(t, i, n) {
        var o = t.abs();
        if (!(o.t <= 0)) {
            var s = this.abs();
            if (s.t < o.t)
                return null != i && i.fromInt(0),
                void (null != n && this.copyTo(n));
            null == n && (n = r());
            var a = r()
              , h = this.s
              , c = t.s
              , u = this.DB - y(o[o.t - 1]);
            u > 0 ? (o.lShiftTo(u, a),
            s.lShiftTo(u, n)) : (o.copyTo(a),
            s.copyTo(n));
            var f = a.t
              , l = a[f - 1];
            if (0 != l) {
                var p = l * (1 << this.F1) + (f > 1 ? a[f - 2] >> this.F2 : 0)
                  , d = this.FV / p
                  , g = (1 << this.F1) / p
                  , v = 1 << this.F2
                  , m = n.t
                  , b = m - f
                  , S = null == i ? r() : i;
                for (a.dlShiftTo(b, S),
                n.compareTo(S) >= 0 && (n[n.t++] = 1,
                n.subTo(S, n)),
                e.ONE.dlShiftTo(f, S),
                S.subTo(a, a); a.t < f; )
                    a[a.t++] = 0;
                for (; --b >= 0; ) {
                    var w = n[--m] == l ? this.DM : Math.floor(n[m] * d + (n[m - 1] + v) * g);
                    if ((n[m] += a.am(0, w, n, b, 0, f)) < w)
                        for (a.dlShiftTo(b, S),
                        n.subTo(S, n); n[m] < --w; )
                            n.subTo(S, n)
                }
                null != i && (n.drShiftTo(f, i),
                h != c && e.ZERO.subTo(i, i)),
                n.t = f,
                n.clamp(),
                u > 0 && n.rShiftTo(u, n),
                h < 0 && e.ZERO.subTo(n, n)
            }
        }
    }
    function C(t) {
        var i = r();
        return this.abs().divRemTo(t, null, i),
        this.s < 0 && i.compareTo(e.ZERO) > 0 && t.subTo(i, i),
        i
    }
    function D(t) {
        this.m = t
    }
    function O(t) {
        return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
    }
    function M(t) {
        return t
    }
    function k(t) {
        t.divRemTo(this.m, null, t)
    }
    function B(t, e, r) {
        t.multiplyTo(e, r),
        this.reduce(r)
    }
    function I(t, e) {
        t.squareTo(e),
        this.reduce(e)
    }
    function P() {
        if (this.t < 1)
            return 0;
        var t = this[0];
        if (0 == (1 & t))
            return 0;
        var e = 3 & t;
        return e = e * (2 - (15 & t) * e) & 15,
        e = e * (2 - (255 & t) * e) & 255,
        e = e * (2 - ((65535 & t) * e & 65535)) & 65535,
        e = e * (2 - t * e % this.DV) % this.DV,
        e > 0 ? this.DV - e : -e
    }
    function N(t) {
        this.m = t,
        this.mp = t.invDigit(),
        this.mpl = 32767 & this.mp,
        this.mph = this.mp >> 15,
        this.um = (1 << t.DB - 15) - 1,
        this.mt2 = 2 * t.t
    }
    function U(t) {
        var i = r();
        return t.abs().dlShiftTo(this.m.t, i),
        i.divRemTo(this.m, null, i),
        t.s < 0 && i.compareTo(e.ZERO) > 0 && this.m.subTo(i, i),
        i
    }
    function F(t) {
        var e = r();
        return t.copyTo(e),
        this.reduce(e),
        e
    }
    function L(t) {
        for (; t.t <= this.mt2; )
            t[t.t++] = 0;
        for (var e = 0; e < this.m.t; ++e) {
            var r = 32767 & t[e]
              , i = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
            for (r = e + this.m.t,
            t[r] += this.m.am(0, i, t, e, 0, this.m.t); t[r] >= t.DV; )
                t[r] -= t.DV,
                t[++r]++
        }
        t.clamp(),
        t.drShiftTo(this.m.t, t),
        t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
    }
    function H(t, e) {
        t.squareTo(e),
        this.reduce(e)
    }
    function K(t, e, r) {
        t.multiplyTo(e, r),
        this.reduce(r)
    }
    function V() {
        return 0 == (this.t > 0 ? 1 & this[0] : this.s)
    }
    function J(t, i) {
        if (t > 4294967295 || t < 1)
            return e.ONE;
        var n = r()
          , o = r()
          , s = i.convert(this)
          , a = y(t) - 1;
        for (s.copyTo(n); --a >= 0; )
            if (i.sqrTo(n, o),
            (t & 1 << a) > 0)
                i.mulTo(o, s, n);
            else {
                var h = n;
                n = o,
                o = h
            }
        return i.revert(n)
    }
    function j(t, e) {
        var r;
        return r = t < 256 || e.isEven() ? new D(e) : new N(e),
        this.exp(t, r)
    }
    function X() {
        var t = r();
        return this.copyTo(t),
        t
    }
    function G() {
        if (this.s < 0) {
            if (1 == this.t)
                return this[0] - this.DV;
            if (0 == this.t)
                return -1
        } else {
            if (1 == this.t)
                return this[0];
            if (0 == this.t)
                return 0
        }
        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
    }
    function q() {
        return 0 == this.t ? this.s : this[0] << 24 >> 24
    }
    function z() {
        return 0 == this.t ? this.s : this[0] << 16 >> 16
    }
    function W(t) {
        return Math.floor(Math.LN2 * this.DB / Math.log(t))
    }
    function Z() {
        return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
    }
    function Y(t) {
        if (null == t && (t = 10),
        0 == this.signum() || t < 2 || t > 36)
            return "0";
        var e = this.chunkSize(t)
          , i = Math.pow(t, e)
          , n = u(i)
          , o = r()
          , s = r()
          , a = "";
        for (this.divRemTo(n, o, s); o.signum() > 0; )
            a = (i + s.intValue()).toString(t).substr(1) + a,
            o.divRemTo(n, o, s);
        return s.intValue().toString(t) + a
    }
    function Q(t, r) {
        this.fromInt(0),
        null == r && (r = 10);
        for (var i = this.chunkSize(r), n = Math.pow(r, i), o = !1, s = 0, h = 0, c = 0; c < t.length; ++c) {
            var u = a(t, c);
            u < 0 ? "-" == t.charAt(c) && 0 == this.signum() && (o = !0) : (h = r * h + u,
            ++s >= i && (this.dMultiply(n),
            this.dAddOffset(h, 0),
            s = 0,
            h = 0))
        }
        s > 0 && (this.dMultiply(Math.pow(r, s)),
        this.dAddOffset(h, 0)),
        o && e.ZERO.subTo(this, this)
    }
    function $(t, r, i) {
        if ("number" == typeof r)
            if (t < 2)
                this.fromInt(1);
            else
                for (this.fromNumber(t, i),
                this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), at, this),
                this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(r); )
                    this.dAddOffset(2, 0),
                    this.bitLength() > t && this.subTo(e.ONE.shiftLeft(t - 1), this);
        else {
            var n = new Array
              , o = 7 & t;
            n.length = (t >> 3) + 1,
            r.nextBytes(n),
            o > 0 ? n[0] &= (1 << o) - 1 : n[0] = 0,
            this.fromString(n, 256)
        }
    }
    function tt() {
        var t = this.t
          , e = new Array;
        e[0] = this.s;
        var r, i = this.DB - t * this.DB % 8, n = 0;
        if (t-- > 0)
            for (i < this.DB && (r = this[t] >> i) != (this.s & this.DM) >> i && (e[n++] = r | this.s << this.DB - i); t >= 0; )
                i < 8 ? (r = (this[t] & (1 << i) - 1) << 8 - i,
                r |= this[--t] >> (i += this.DB - 8)) : (r = this[t] >> (i -= 8) & 255,
                i <= 0 && (i += this.DB,
                --t)),
                0 != (128 & r) && (r |= -256),
                0 == n && (128 & this.s) != (128 & r) && ++n,
                (n > 0 || r != this.s) && (e[n++] = r);
        return e
    }
    function et(t) {
        return 0 == this.compareTo(t)
    }
    function rt(t) {
        return this.compareTo(t) < 0 ? this : t
    }
    function it(t) {
        return this.compareTo(t) > 0 ? this : t
    }
    function nt(t, e, r) {
        var i, n, o = Math.min(t.t, this.t);
        for (i = 0; i < o; ++i)
            r[i] = e(this[i], t[i]);
        if (t.t < this.t) {
            for (n = t.s & this.DM,
            i = o; i < this.t; ++i)
                r[i] = e(this[i], n);
            r.t = this.t
        } else {
            for (n = this.s & this.DM,
            i = o; i < t.t; ++i)
                r[i] = e(n, t[i]);
            r.t = t.t
        }
        r.s = e(this.s, t.s),
        r.clamp()
    }
    function ot(t, e) {
        return t & e
    }
    function st(t) {
        var e = r();
        return this.bitwiseTo(t, ot, e),
        e
    }
    function at(t, e) {
        return t | e
    }
    function ht(t) {
        var e = r();
        return this.bitwiseTo(t, at, e),
        e
    }
    function ct(t, e) {
        return t ^ e
    }
    function ut(t) {
        var e = r();
        return this.bitwiseTo(t, ct, e),
        e
    }
    function ft(t, e) {
        return t & ~e
    }
    function lt(t) {
        var e = r();
        return this.bitwiseTo(t, ft, e),
        e
    }
    function pt() {
        for (var t = r(), e = 0; e < this.t; ++e)
            t[e] = this.DM & ~this[e];
        return t.t = this.t,
        t.s = ~this.s,
        t
    }
    function dt(t) {
        var e = r();
        return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e),
        e
    }
    function gt(t) {
        var e = r();
        return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e),
        e
    }
    function vt(t) {
        if (0 == t)
            return -1;
        var e = 0;
        return 0 == (65535 & t) && (t >>= 16,
        e += 16),
        0 == (255 & t) && (t >>= 8,
        e += 8),
        0 == (15 & t) && (t >>= 4,
        e += 4),
        0 == (3 & t) && (t >>= 2,
        e += 2),
        0 == (1 & t) && ++e,
        e
    }
    function mt() {
        for (var t = 0; t < this.t; ++t)
            if (0 != this[t])
                return t * this.DB + vt(this[t]);
        return this.s < 0 ? this.t * this.DB : -1
    }
    function yt(t) {
        for (var e = 0; 0 != t; )
            t &= t - 1,
            ++e;
        return e
    }
    function bt() {
        for (var t = 0, e = this.s & this.DM, r = 0; r < this.t; ++r)
            t += yt(this[r] ^ e);
        return t
    }
    function St(t) {
        var e = Math.floor(t / this.DB);
        return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
    }
    function wt(t, r) {
        var i = e.ONE.shiftLeft(t);
        return this.bitwiseTo(i, r, i),
        i
    }
    function Et(t) {
        return this.changeBit(t, at)
    }
    function xt(t) {
        return this.changeBit(t, ft)
    }
    function Tt(t) {
        return this.changeBit(t, ct)
    }
    function _t(t, e) {
        for (var r = 0, i = 0, n = Math.min(t.t, this.t); r < n; )
            i += this[r] + t[r],
            e[r++] = i & this.DM,
            i >>= this.DB;
        if (t.t < this.t) {
            for (i += t.s; r < this.t; )
                i += this[r],
                e[r++] = i & this.DM,
                i >>= this.DB;
            i += this.s
        } else {
            for (i += this.s; r < t.t; )
                i += t[r],
                e[r++] = i & this.DM,
                i >>= this.DB;
            i += t.s
        }
        e.s = i < 0 ? -1 : 0,
        i > 0 ? e[r++] = i : i < -1 && (e[r++] = this.DV + i),
        e.t = r,
        e.clamp()
    }
    function At(t) {
        var e = r();
        return this.addTo(t, e),
        e
    }
    function Rt(t) {
        var e = r();
        return this.subTo(t, e),
        e
    }
    function Ct(t) {
        var e = r();
        return this.multiplyTo(t, e),
        e
    }
    function Dt() {
        var t = r();
        return this.squareTo(t),
        t
    }
    function Ot(t) {
        var e = r();
        return this.divRemTo(t, e, null),
        e
    }
    function Mt(t) {
        var e = r();
        return this.divRemTo(t, null, e),
        e
    }
    function kt(t) {
        var e = r()
          , i = r();
        return this.divRemTo(t, e, i),
        new Array(e,i)
    }
    function Bt(t) {
        this[this.t] = this.am(0, t - 1, this, 0, 0, this.t),
        ++this.t,
        this.clamp()
    }
    function It(t, e) {
        if (0 != t) {
            for (; this.t <= e; )
                this[this.t++] = 0;
            for (this[e] += t; this[e] >= this.DV; )
                this[e] -= this.DV,
                ++e >= this.t && (this[this.t++] = 0),
                ++this[e]
        }
    }
    function Pt() {}
    function Nt(t) {
        return t
    }
    function Ut(t, e, r) {
        t.multiplyTo(e, r)
    }
    function Ft(t, e) {
        t.squareTo(e)
    }
    function Lt(t) {
        return this.exp(t, new Pt)
    }
    function Ht(t, e, r) {
        var i = Math.min(this.t + t.t, e);
        for (r.s = 0,
        r.t = i; i > 0; )
            r[--i] = 0;
        var n;
        for (n = r.t - this.t; i < n; ++i)
            r[i + this.t] = this.am(0, t[i], r, i, 0, this.t);
        for (n = Math.min(t.t, e); i < n; ++i)
            this.am(0, t[i], r, i, 0, e - i);
        r.clamp()
    }
    function Kt(t, e, r) {
        --e;
        var i = r.t = this.t + t.t - e;
        for (r.s = 0; --i >= 0; )
            r[i] = 0;
        for (i = Math.max(e - this.t, 0); i < t.t; ++i)
            r[this.t + i - e] = this.am(e - i, t[i], r, 0, 0, this.t + i - e);
        r.clamp(),
        r.drShiftTo(1, r)
    }
    function Vt(t) {
        this.r2 = r(),
        this.q3 = r(),
        e.ONE.dlShiftTo(2 * t.t, this.r2),
        this.mu = this.r2.divide(t),
        this.m = t
    }
    function Jt(t) {
        if (t.s < 0 || t.t > 2 * this.m.t)
            return t.mod(this.m);
        if (t.compareTo(this.m) < 0)
            return t;
        var e = r();
        return t.copyTo(e),
        this.reduce(e),
        e
    }
    function jt(t) {
        return t
    }
    function Xt(t) {
        for (t.drShiftTo(this.m.t - 1, this.r2),
        t.t > this.m.t + 1 && (t.t = this.m.t + 1,
        t.clamp()),
        this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
        this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0; )
            t.dAddOffset(1, this.m.t + 1);
        for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; )
            t.subTo(this.m, t)
    }
    function Gt(t, e) {
        t.squareTo(e),
        this.reduce(e)
    }
    function qt(t, e, r) {
        t.multiplyTo(e, r),
        this.reduce(r)
    }
    function zt(t, e) {
        var i, n, o = t.bitLength(), s = u(1);
        if (o <= 0)
            return s;
        i = o < 18 ? 1 : o < 48 ? 3 : o < 144 ? 4 : o < 768 ? 5 : 6,
        n = o < 8 ? new D(e) : e.isEven() ? new Vt(e) : new N(e);
        var a = new Array
          , h = 3
          , c = i - 1
          , f = (1 << i) - 1;
        if (a[1] = n.convert(this),
        i > 1) {
            var l = r();
            for (n.sqrTo(a[1], l); h <= f; )
                a[h] = r(),
                n.mulTo(l, a[h - 2], a[h]),
                h += 2
        }
        var p, d, g = t.t - 1, v = !0, m = r();
        for (o = y(t[g]) - 1; g >= 0; ) {
            for (o >= c ? p = t[g] >> o - c & f : (p = (t[g] & (1 << o + 1) - 1) << c - o,
            g > 0 && (p |= t[g - 1] >> this.DB + o - c)),
            h = i; 0 == (1 & p); )
                p >>= 1,
                --h;
            if ((o -= h) < 0 && (o += this.DB,
            --g),
            v)
                a[p].copyTo(s),
                v = !1;
            else {
                for (; h > 1; )
                    n.sqrTo(s, m),
                    n.sqrTo(m, s),
                    h -= 2;
                h > 0 ? n.sqrTo(s, m) : (d = s,
                s = m,
                m = d),
                n.mulTo(m, a[p], s)
            }
            for (; g >= 0 && 0 == (t[g] & 1 << o); )
                n.sqrTo(s, m),
                d = s,
                s = m,
                m = d,
                --o < 0 && (o = this.DB - 1,
                --g)
        }
        return n.revert(s)
    }
    function Wt(t) {
        var e = this.s < 0 ? this.negate() : this.clone()
          , r = t.s < 0 ? t.negate() : t.clone();
        if (e.compareTo(r) < 0) {
            var i = e;
            e = r,
            r = i
        }
        var n = e.getLowestSetBit()
          , o = r.getLowestSetBit();
        if (o < 0)
            return e;
        for (n < o && (o = n),
        o > 0 && (e.rShiftTo(o, e),
        r.rShiftTo(o, r)); e.signum() > 0; )
            (n = e.getLowestSetBit()) > 0 && e.rShiftTo(n, e),
            (n = r.getLowestSetBit()) > 0 && r.rShiftTo(n, r),
            e.compareTo(r) >= 0 ? (e.subTo(r, e),
            e.rShiftTo(1, e)) : (r.subTo(e, r),
            r.rShiftTo(1, r));
        return o > 0 && r.lShiftTo(o, r),
        r
    }
    function Zt(t) {
        if (t <= 0)
            return 0;
        var e = this.DV % t
          , r = this.s < 0 ? t - 1 : 0;
        if (this.t > 0)
            if (0 == e)
                r = this[0] % t;
            else
                for (var i = this.t - 1; i >= 0; --i)
                    r = (e * r + this[i]) % t;
        return r
    }
    function Yt(t) {
        var r = t.isEven();
        if (this.isEven() && r || 0 == t.signum())
            return e.ZERO;
        for (var i = t.clone(), n = this.clone(), o = u(1), s = u(0), a = u(0), h = u(1); 0 != i.signum(); ) {
            for (; i.isEven(); )
                i.rShiftTo(1, i),
                r ? (o.isEven() && s.isEven() || (o.addTo(this, o),
                s.subTo(t, s)),
                o.rShiftTo(1, o)) : s.isEven() || s.subTo(t, s),
                s.rShiftTo(1, s);
            for (; n.isEven(); )
                n.rShiftTo(1, n),
                r ? (a.isEven() && h.isEven() || (a.addTo(this, a),
                h.subTo(t, h)),
                a.rShiftTo(1, a)) : h.isEven() || h.subTo(t, h),
                h.rShiftTo(1, h);
            i.compareTo(n) >= 0 ? (i.subTo(n, i),
            r && o.subTo(a, o),
            s.subTo(h, s)) : (n.subTo(i, n),
            r && a.subTo(o, a),
            h.subTo(s, h))
        }
        return 0 != n.compareTo(e.ONE) ? e.ZERO : h.compareTo(t) >= 0 ? h.subtract(t) : h.signum() < 0 ? (h.addTo(t, h),
        h.signum() < 0 ? h.add(t) : h) : h
    }
    function Qt(t) {
        var e, r = this.abs();
        if (1 == r.t && r[0] <= De[De.length - 1]) {
            for (e = 0; e < De.length; ++e)
                if (r[0] == De[e])
                    return !0;
            return !1
        }
        if (r.isEven())
            return !1;
        for (e = 1; e < De.length; ) {
            for (var i = De[e], n = e + 1; n < De.length && i < Oe; )
                i *= De[n++];
            for (i = r.modInt(i); e < n; )
                if (i % De[e++] == 0)
                    return !1
        }
        return r.millerRabin(t)
    }
    function $t(t) {
        var i = this.subtract(e.ONE)
          , n = i.getLowestSetBit();
        if (n <= 0)
            return !1;
        var o = i.shiftRight(n);
        t = t + 1 >> 1,
        t > De.length && (t = De.length);
        for (var s = r(), a = 0; a < t; ++a) {
            s.fromInt(De[Math.floor(Math.random() * De.length)]);
            var h = s.modPow(o, this);
            if (0 != h.compareTo(e.ONE) && 0 != h.compareTo(i)) {
                for (var c = 1; c++ < n && 0 != h.compareTo(i); )
                    if (h = h.modPowInt(2, this),
                    0 == h.compareTo(e.ONE))
                        return !1;
                if (0 != h.compareTo(i))
                    return !1
            }
        }
        return !0
    }
    function te() {
        this.i = 0,
        this.j = 0,
        this.S = new Array
    }
    function ee(t) {
        var e, r, i;
        for (e = 0; e < 256; ++e)
            this.S[e] = e;
        for (r = 0,
        e = 0; e < 256; ++e)
            r = r + this.S[e] + t[e % t.length] & 255,
            i = this.S[e],
            this.S[e] = this.S[r],
            this.S[r] = i;
        this.i = 0,
        this.j = 0
    }
    function re() {
        var t;
        return this.i = this.i + 1 & 255,
        this.j = this.j + this.S[this.i] & 255,
        t = this.S[this.i],
        this.S[this.i] = this.S[this.j],
        this.S[this.j] = t,
        this.S[t + this.S[this.i] & 255]
    }
    function ie() {
        return new te
    }
    function ne() {
        if (null == Me) {
            for (Me = ie(); Be < Ie; ) {
                var t = Math.floor(65536 * Math.random());
                ke[Be++] = 255 & t
            }
            for (Me.init(ke),
            Be = 0; Be < ke.length; ++Be)
                ke[Be] = 0;
            Be = 0
        }
        return Me.next()
    }
    function oe(t) {
        var e;
        for (e = 0; e < t.length; ++e)
            t[e] = ne()
    }
    function se() {}
    function ae(t, r) {
        return new e(t,r)
    }
    function he(t, r) {
        if (r < t.length + 11)
            return console.error("Message too long for RSA"),
            null;
        for (var i = new Array, n = t.length - 1; n >= 0 && r > 0; ) {
            var o = t.charCodeAt(n--);
            o < 128 ? i[--r] = o : o > 127 && o < 2048 ? (i[--r] = 63 & o | 128,
            i[--r] = o >> 6 | 192) : (i[--r] = 63 & o | 128,
            i[--r] = o >> 6 & 63 | 128,
            i[--r] = o >> 12 | 224)
        }
        i[--r] = 0;
        for (var s = new se, a = new Array; r > 2; ) {
            for (a[0] = 0; 0 == a[0]; )
                s.nextBytes(a);
            i[--r] = a[0]
        }
        return i[--r] = 2,
        i[--r] = 0,
        new e(i)
    }
    function ce() {
        this.n = null,
        this.e = 0,
        this.d = null,
        this.p = null,
        this.q = null,
        this.dmp1 = null,
        this.dmq1 = null,
        this.coeff = null
    }
    function ue(t, e) {
        null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = ae(t, 16),
        this.e = parseInt(e, 16)) : console.error("Invalid RSA public key")
    }
    function fe(t) {
        return t.modPowInt(this.e, this.n)
    }
    function le(t) {
        var e = he(t, this.n.bitLength() + 7 >> 3);
        if (null == e)
            return null;
        var r = this.doPublic(e);
        if (null == r)
            return null;
        var i = r.toString(16);
        return 0 == (1 & i.length) ? i : "0" + i
    }
    function pe(t, e) {
        for (var r = t.toByteArray(), i = 0; i < r.length && 0 == r[i]; )
            ++i;
        if (r.length - i != e - 1 || 2 != r[i])
            return null;
        for (++i; 0 != r[i]; )
            if (++i >= r.length)
                return null;
        for (var n = ""; ++i < r.length; ) {
            var o = 255 & r[i];
            o < 128 ? n += String.fromCharCode(o) : o > 191 && o < 224 ? (n += String.fromCharCode((31 & o) << 6 | 63 & r[i + 1]),
            ++i) : (n += String.fromCharCode((15 & o) << 12 | (63 & r[i + 1]) << 6 | 63 & r[i + 2]),
            i += 2)
        }
        return n
    }
    function de(t, e, r) {
        null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = ae(t, 16),
        this.e = parseInt(e, 16),
        this.d = ae(r, 16)) : console.error("Invalid RSA private key")
    }
    function ge(t, e, r, i, n, o, s, a) {
        null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = ae(t, 16),
        this.e = parseInt(e, 16),
        this.d = ae(r, 16),
        this.p = ae(i, 16),
        this.q = ae(n, 16),
        this.dmp1 = ae(o, 16),
        this.dmq1 = ae(s, 16),
        this.coeff = ae(a, 16)) : console.error("Invalid RSA private key")
    }
    function ve(t, r) {
        var i = new se
          , n = t >> 1;
        this.e = parseInt(r, 16);
        for (var o = new e(r,16); ; ) {
            for (; this.p = new e(t - n,1,i),
            0 != this.p.subtract(e.ONE).gcd(o).compareTo(e.ONE) || !this.p.isProbablePrime(10); )
                ;
            for (; this.q = new e(n,1,i),
            0 != this.q.subtract(e.ONE).gcd(o).compareTo(e.ONE) || !this.q.isProbablePrime(10); )
                ;
            if (this.p.compareTo(this.q) <= 0) {
                var s = this.p;
                this.p = this.q,
                this.q = s
            }
            var a = this.p.subtract(e.ONE)
              , h = this.q.subtract(e.ONE)
              , c = a.multiply(h);
            if (0 == c.gcd(o).compareTo(e.ONE)) {
                this.n = this.p.multiply(this.q),
                this.d = o.modInverse(c),
                this.dmp1 = this.d.mod(a),
                this.dmq1 = this.d.mod(h),
                this.coeff = this.q.modInverse(this.p);
                break
            }
        }
    }
    function me(t) {
        if (null == this.p || null == this.q)
            return t.modPow(this.d, this.n);
        for (var e = t.mod(this.p).modPow(this.dmp1, this.p), r = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(r) < 0; )
            e = e.add(this.p);
        return e.subtract(r).multiply(this.coeff).mod(this.p).multiply(this.q).add(r)
    }
    function ye(t) {
        var e = ae(t, 16)
          , r = this.doPrivate(e);
        return null == r ? null : pe(r, this.n.bitLength() + 7 >> 3)
    }
    function be(t) {
        var e, r, i = "";
        for (e = 0; e + 3 <= t.length; e += 3)
            r = parseInt(t.substring(e, e + 3), 16),
            i += Fe.charAt(r >> 6) + Fe.charAt(63 & r);
        for (e + 1 == t.length ? (r = parseInt(t.substring(e, e + 1), 16),
        i += Fe.charAt(r << 2)) : e + 2 == t.length && (r = parseInt(t.substring(e, e + 2), 16),
        i += Fe.charAt(r >> 2) + Fe.charAt((3 & r) << 4)); (3 & i.length) > 0; )
            i += Le;
        return i
    }
    function Se(t) {
        var e, r, i = "", n = 0;
        for (e = 0; e < t.length && t.charAt(e) != Le; ++e)
            v = Fe.indexOf(t.charAt(e)),
            v < 0 || (0 == n ? (i += s(v >> 2),
            r = 3 & v,
            n = 1) : 1 == n ? (i += s(r << 2 | v >> 4),
            r = 15 & v,
            n = 2) : 2 == n ? (i += s(r),
            i += s(v >> 2),
            r = 3 & v,
            n = 3) : (i += s(r << 2 | v >> 4),
            i += s(15 & v),
            n = 0));
        return 1 == n && (i += s(r << 2)),
        i
    }
    var we, Ee = 0xdeadbeefcafe, xe = 15715070 == (16777215 & Ee);
    xe && "Microsoft Internet Explorer" == navigator.appName ? (e.prototype.am = n,
    we = 30) : xe && "Netscape" != navigator.appName ? (e.prototype.am = i,
    we = 26) : (e.prototype.am = o,
    we = 28),
    e.prototype.DB = we,
    e.prototype.DM = (1 << we) - 1,
    e.prototype.DV = 1 << we;
    var Te = 52;
    e.prototype.FV = Math.pow(2, Te),
    e.prototype.F1 = Te - we,
    e.prototype.F2 = 2 * we - Te;
    var _e, Ae, Re = "0123456789abcdefghijklmnopqrstuvwxyz", Ce = new Array;
    for (_e = "0".charCodeAt(0),
    Ae = 0; Ae <= 9; ++Ae)
        Ce[_e++] = Ae;
    for (_e = "a".charCodeAt(0),
    Ae = 10; Ae < 36; ++Ae)
        Ce[_e++] = Ae;
    for (_e = "A".charCodeAt(0),
    Ae = 10; Ae < 36; ++Ae)
        Ce[_e++] = Ae;
    D.prototype.convert = O,
    D.prototype.revert = M,
    D.prototype.reduce = k,
    D.prototype.mulTo = B,
    D.prototype.sqrTo = I,
    N.prototype.convert = U,
    N.prototype.revert = F,
    N.prototype.reduce = L,
    N.prototype.mulTo = K,
    N.prototype.sqrTo = H,
    e.prototype.copyTo = h,
    e.prototype.fromInt = c,
    e.prototype.fromString = f,
    e.prototype.clamp = l,
    e.prototype.dlShiftTo = S,
    e.prototype.drShiftTo = w,
    e.prototype.lShiftTo = E,
    e.prototype.rShiftTo = x,
    e.prototype.subTo = T,
    e.prototype.multiplyTo = _,
    e.prototype.squareTo = A,
    e.prototype.divRemTo = R,
    e.prototype.invDigit = P,
    e.prototype.isEven = V,
    e.prototype.exp = J,
    e.prototype.toString = p,
    e.prototype.negate = d,
    e.prototype.abs = g,
    e.prototype.compareTo = m,
    e.prototype.bitLength = b,
    e.prototype.mod = C,
    e.prototype.modPowInt = j,
    e.ZERO = u(0),
    e.ONE = u(1),
    Pt.prototype.convert = Nt,
    Pt.prototype.revert = Nt,
    Pt.prototype.mulTo = Ut,
    Pt.prototype.sqrTo = Ft,
    Vt.prototype.convert = Jt,
    Vt.prototype.revert = jt,
    Vt.prototype.reduce = Xt,
    Vt.prototype.mulTo = qt,
    Vt.prototype.sqrTo = Gt;
    var De = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]
      , Oe = (1 << 26) / De[De.length - 1];
    e.prototype.chunkSize = W,
    e.prototype.toRadix = Y,
    e.prototype.fromRadix = Q,
    e.prototype.fromNumber = $,
    e.prototype.bitwiseTo = nt,
    e.prototype.changeBit = wt,
    e.prototype.addTo = _t,
    e.prototype.dMultiply = Bt,
    e.prototype.dAddOffset = It,
    e.prototype.multiplyLowerTo = Ht,
    e.prototype.multiplyUpperTo = Kt,
    e.prototype.modInt = Zt,
    e.prototype.millerRabin = $t,
    e.prototype.clone = X,
    e.prototype.intValue = G,
    e.prototype.byteValue = q,
    e.prototype.shortValue = z,
    e.prototype.signum = Z,
    e.prototype.toByteArray = tt,
    e.prototype.equals = et,
    e.prototype.min = rt,
    e.prototype.max = it,
    e.prototype.and = st,
    e.prototype.or = ht,
    e.prototype.xor = ut,
    e.prototype.andNot = lt,
    e.prototype.not = pt,
    e.prototype.shiftLeft = dt,
    e.prototype.shiftRight = gt,
    e.prototype.getLowestSetBit = mt,
    e.prototype.bitCount = bt,
    e.prototype.testBit = St,
    e.prototype.setBit = Et,
    e.prototype.clearBit = xt,
    e.prototype.flipBit = Tt,
    e.prototype.add = At,
    e.prototype.subtract = Rt,
    e.prototype.multiply = Ct,
    e.prototype.divide = Ot,
    e.prototype.remainder = Mt,
    e.prototype.divideAndRemainder = kt,
    e.prototype.modPow = zt,
    e.prototype.modInverse = Yt,
    e.prototype.pow = Lt,
    e.prototype.gcd = Wt,
    e.prototype.isProbablePrime = Qt,
    e.prototype.square = Dt,
    te.prototype.init = ee,
    te.prototype.next = re;
    var Me, ke, Be, Ie = 256;
    if (null == ke) {
        ke = new Array,
        Be = 0;
        var Pe;
        if (window.crypto && window.crypto.getRandomValues) {
            var Ne = new Uint32Array(256);
            for (window.crypto.getRandomValues(Ne),
            Pe = 0; Pe < Ne.length; ++Pe)
                ke[Be++] = 255 & Ne[Pe]
        }
        var Ue = function(t) {
            if (this.count = this.count || 0,
            this.count >= 256 || Be >= Ie)
                return void (window.removeEventListener ? window.removeEventListener("mousemove", Ue, !1) : window.detachEvent && window.detachEvent("onmousemove", Ue));
            try {
                var e = t.x + t.y;
                ke[Be++] = 255 & e,
                this.count += 1
            } catch (r) {}
        };
        window.addEventListener ? window.addEventListener("mousemove", Ue, !1) : window.attachEvent && window.attachEvent("onmousemove", Ue)
    }
    se.prototype.nextBytes = oe,
    ce.prototype.doPublic = fe,
    ce.prototype.setPublic = ue,
    ce.prototype.encrypt = le,
    ce.prototype.doPrivate = me,
    ce.prototype.setPrivate = de,
    ce.prototype.setPrivateEx = ge,
    ce.prototype.generate = ve,
    ce.prototype.decrypt = ye,
    function() {
        var t = function(t, i, n) {
            var o = new se
              , s = t >> 1;
            this.e = parseInt(i, 16);
            var a = new e(i,16)
              , h = this
              , c = function() {
                var i = function() {
                    if (h.p.compareTo(h.q) <= 0) {
                        var t = h.p;
                        h.p = h.q,
                        h.q = t
                    }
                    var r = h.p.subtract(e.ONE)
                      , i = h.q.subtract(e.ONE)
                      , o = r.multiply(i);
                    0 == o.gcd(a).compareTo(e.ONE) ? (h.n = h.p.multiply(h.q),
                    h.d = a.modInverse(o),
                    h.dmp1 = h.d.mod(r),
                    h.dmq1 = h.d.mod(i),
                    h.coeff = h.q.modInverse(h.p),
                    setTimeout(function() {
                        n()
                    }, 0)) : setTimeout(c, 0)
                }
                  , u = function() {
                    h.q = r(),
                    h.q.fromNumberAsync(s, 1, o, function() {
                        h.q.subtract(e.ONE).gcda(a, function(t) {
                            0 == t.compareTo(e.ONE) && h.q.isProbablePrime(10) ? setTimeout(i, 0) : setTimeout(u, 0)
                        })
                    })
                }
                  , f = function() {
                    h.p = r(),
                    h.p.fromNumberAsync(t - s, 1, o, function() {
                        h.p.subtract(e.ONE).gcda(a, function(t) {
                            0 == t.compareTo(e.ONE) && h.p.isProbablePrime(10) ? setTimeout(u, 0) : setTimeout(f, 0)
                        })
                    })
                };
                setTimeout(f, 0)
            };
            setTimeout(c, 0)
        };
        ce.prototype.generateAsync = t;
        var i = function(t, e) {
            var r = this.s < 0 ? this.negate() : this.clone()
              , i = t.s < 0 ? t.negate() : t.clone();
            if (r.compareTo(i) < 0) {
                var n = r;
                r = i,
                i = n
            }
            var o = r.getLowestSetBit()
              , s = i.getLowestSetBit();
            if (s < 0)
                return void e(r);
            o < s && (s = o),
            s > 0 && (r.rShiftTo(s, r),
            i.rShiftTo(s, i));
            var a = function() {
                (o = r.getLowestSetBit()) > 0 && r.rShiftTo(o, r),
                (o = i.getLowestSetBit()) > 0 && i.rShiftTo(o, i),
                r.compareTo(i) >= 0 ? (r.subTo(i, r),
                r.rShiftTo(1, r)) : (i.subTo(r, i),
                i.rShiftTo(1, i)),
                r.signum() > 0 ? setTimeout(a, 0) : (s > 0 && i.lShiftTo(s, i),
                setTimeout(function() {
                    e(i)
                }, 0))
            };
            setTimeout(a, 10)
        };
        e.prototype.gcda = i;
        var n = function(t, r, i, n) {
            if ("number" == typeof r)
                if (t < 2)
                    this.fromInt(1);
                else {
                    this.fromNumber(t, i),
                    this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), at, this),
                    this.isEven() && this.dAddOffset(1, 0);
                    var o = this
                      , s = function() {
                        o.dAddOffset(2, 0),
                        o.bitLength() > t && o.subTo(e.ONE.shiftLeft(t - 1), o),
                        o.isProbablePrime(r) ? setTimeout(function() {
                            n()
                        }, 0) : setTimeout(s, 0)
                    };
                    setTimeout(s, 0)
                }
            else {
                var a = new Array
                  , h = 7 & t;
                a.length = (t >> 3) + 1,
                r.nextBytes(a),
                h > 0 ? a[0] &= (1 << h) - 1 : a[0] = 0,
                this.fromString(a, 256)
            }
        };
        e.prototype.fromNumberAsync = n
    }();
    var Fe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
      , Le = "="
      , He = He || {};
    He.env = He.env || {};
    var Ke = He
      , Ve = Object.prototype
      , Je = "[object Function]"
      , je = ["toString", "valueOf"];
    He.env.parseUA = function(t) {
        var e, r = function(t) {
            var e = 0;
            return parseFloat(t.replace(/\./g, function() {
                return 1 == e++ ? "" : "."
            }))
        }, i = navigator, n = {
            ie: 0,
            opera: 0,
            gecko: 0,
            webkit: 0,
            chrome: 0,
            mobile: null,
            air: 0,
            ipad: 0,
            iphone: 0,
            ipod: 0,
            ios: null,
            android: 0,
            webos: 0,
            caja: i && i.cajaVersion,
            secure: !1,
            os: null
        }, o = t || navigator && navigator.userAgent, s = window && window.location, a = s && s.href;
        return n.secure = a && 0 === a.toLowerCase().indexOf("https"),
        o && (/windows|win32/i.test(o) ? n.os = "windows" : /macintosh/i.test(o) ? n.os = "macintosh" : /rhino/i.test(o) && (n.os = "rhino"),
        /KHTML/.test(o) && (n.webkit = 1),
        e = o.match(/AppleWebKit\/([^\s]*)/),
        e && e[1] && (n.webkit = r(e[1]),
        / Mobile\//.test(o) ? (n.mobile = "Apple",
        e = o.match(/OS ([^\s]*)/),
        e && e[1] && (e = r(e[1].replace("_", "."))),
        n.ios = e,
        n.ipad = n.ipod = n.iphone = 0,
        e = o.match(/iPad|iPod|iPhone/),
        e && e[0] && (n[e[0].toLowerCase()] = n.ios)) : (e = o.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/),
        e && (n.mobile = e[0]),
        /webOS/.test(o) && (n.mobile = "WebOS",
        e = o.match(/webOS\/([^\s]*);/),
        e && e[1] && (n.webos = r(e[1]))),
        / Android/.test(o) && (n.mobile = "Android",
        e = o.match(/Android ([^\s]*);/),
        e && e[1] && (n.android = r(e[1])))),
        e = o.match(/Chrome\/([^\s]*)/),
        e && e[1] ? n.chrome = r(e[1]) : (e = o.match(/AdobeAIR\/([^\s]*)/),
        e && (n.air = e[0]))),
        n.webkit || (e = o.match(/Opera[\s\/]([^\s]*)/),
        e && e[1] ? (n.opera = r(e[1]),
        e = o.match(/Version\/([^\s]*)/),
        e && e[1] && (n.opera = r(e[1])),
        e = o.match(/Opera Mini[^;]*/),
        e && (n.mobile = e[0])) : (e = o.match(/MSIE\s([^;]*)/),
        e && e[1] ? n.ie = r(e[1]) : (e = o.match(/Gecko\/([^\s]*)/),
        e && (n.gecko = 1,
        e = o.match(/rv:([^\s\)]*)/),
        e && e[1] && (n.gecko = r(e[1]))))))),
        n
    }
    ,
    He.env.ua = He.env.parseUA(),
    He.isFunction = function(t) {
        return "function" == typeof t || Ve.toString.apply(t) === Je
    }
    ,
    He._IEEnumFix = He.env.ua.ie ? function(t, e) {
        var r, i, n;
        for (r = 0; r < je.length; r += 1)
            i = je[r],
            n = e[i],
            Ke.isFunction(n) && n != Ve[i] && (t[i] = n)
    }
    : function() {}
    ,
    He.extend = function(t, e, r) {
        if (!e || !t)
            throw new Error("extend failed, please check that all dependencies are included.");
        var i, n = function() {};
        if (n.prototype = e.prototype,
        t.prototype = new n,
        t.prototype.constructor = t,
        t.superclass = e.prototype,
        e.prototype.constructor == Ve.constructor && (e.prototype.constructor = e),
        r) {
            for (i in r)
                Ke.hasOwnProperty(r, i) && (t.prototype[i] = r[i]);
            Ke._IEEnumFix(t.prototype, r)
        }
    }
    ,
    "undefined" != typeof KJUR && KJUR || (KJUR = {}),
    "undefined" != typeof KJUR.asn1 && KJUR.asn1 || (KJUR.asn1 = {}),
    KJUR.asn1.ASN1Util = new function() {
        this.integerToByteHex = function(t) {
            var e = t.toString(16);
            return e.length % 2 == 1 && (e = "0" + e),
            e
        }
        ,
        this.bigIntToMinTwosComplementsHex = function(t) {
            var r = t.toString(16);
            if ("-" != r.substr(0, 1))
                r.length % 2 == 1 ? r = "0" + r : r.match(/^[0-7]/) || (r = "00" + r);
            else {
                var i = r.substr(1)
                  , n = i.length;
                n % 2 == 1 ? n += 1 : r.match(/^[0-7]/) || (n += 2);
                for (var o = "", s = 0; s < n; s++)
                    o += "f";
                var a = new e(o,16)
                  , h = a.xor(t).add(e.ONE);
                r = h.toString(16).replace(/^-/, "")
            }
            return r
        }
        ,
        this.getPEMStringFromHex = function(t, e) {
            var r = CryptoJS.enc.Hex.parse(t)
              , i = CryptoJS.enc.Base64.stringify(r)
              , n = i.replace(/(.{64})/g, "$1\r\n");
            return n = n.replace(/\r\n$/, ""),
            "-----BEGIN " + e + "-----\r\n" + n + "\r\n-----END " + e + "-----\r\n"
        }
    }
    ,
    KJUR.asn1.ASN1Object = function() {
        var t = "";
        this.getLengthHexFromValue = function() {
            if ("undefined" == typeof this.hV || null == this.hV)
                throw "this.hV is null or undefined.";
            if (this.hV.length % 2 == 1)
                throw "value hex must be even length: n=" + t.length + ",v=" + this.hV;
            var e = this.hV.length / 2
              , r = e.toString(16);
            if (r.length % 2 == 1 && (r = "0" + r),
            e < 128)
                return r;
            var i = r.length / 2;
            if (i > 15)
                throw "ASN.1 length too long to represent by 8x: n = " + e.toString(16);
            var n = 128 + i;
            return n.toString(16) + r
        }
        ,
        this.getEncodedHex = function() {
            return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(),
            this.hL = this.getLengthHexFromValue(),
            this.hTLV = this.hT + this.hL + this.hV,
            this.isModified = !1),
            this.hTLV
        }
        ,
        this.getValueHex = function() {
            return this.getEncodedHex(),
            this.hV
        }
        ,
        this.getFreshValueHex = function() {
            return ""
        }
    }
    ,
    KJUR.asn1.DERAbstractString = function(t) {
        KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
        this.getString = function() {
            return this.s
        }
        ,
        this.setString = function(t) {
            this.hTLV = null,
            this.isModified = !0,
            this.s = t,
            this.hV = stohex(this.s)
        }
        ,
        this.setStringHex = function(t) {
            this.hTLV = null,
            this.isModified = !0,
            this.s = null,
            this.hV = t
        }
        ,
        this.getFreshValueHex = function() {
            return this.hV
        }
        ,
        "undefined" != typeof t && ("undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex && this.setStringHex(t.hex))
    }
    ,
    He.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object),
    KJUR.asn1.DERAbstractTime = function(t) {
        KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);
        this.localDateToUTC = function(t) {
            utc = t.getTime() + 6e4 * t.getTimezoneOffset();
            var e = new Date(utc);
            return e
        }
        ,
        this.formatDate = function(t, e) {
            var r = this.zeroPadding
              , i = this.localDateToUTC(t)
              , n = String(i.getFullYear());
            "utc" == e && (n = n.substr(2, 2));
            var o = r(String(i.getMonth() + 1), 2)
              , s = r(String(i.getDate()), 2)
              , a = r(String(i.getHours()), 2)
              , h = r(String(i.getMinutes()), 2)
              , c = r(String(i.getSeconds()), 2);
            return n + o + s + a + h + c + "Z"
        }
        ,
        this.zeroPadding = function(t, e) {
            return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
        }
        ,
        this.getString = function() {
            return this.s
        }
        ,
        this.setString = function(t) {
            this.hTLV = null,
            this.isModified = !0,
            this.s = t,
            this.hV = stohex(this.s)
        }
        ,
        this.setByDateValue = function(t, e, r, i, n, o) {
            var s = new Date(Date.UTC(t, e - 1, r, i, n, o, 0));
            this.setByDate(s)
        }
        ,
        this.getFreshValueHex = function() {
            return this.hV
        }
    }
    ,
    He.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object),
    KJUR.asn1.DERAbstractStructured = function(t) {
        KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
        this.setByASN1ObjectArray = function(t) {
            this.hTLV = null,
            this.isModified = !0,
            this.asn1Array = t
        }
        ,
        this.appendASN1Object = function(t) {
            this.hTLV = null,
            this.isModified = !0,
            this.asn1Array.push(t)
        }
        ,
        this.asn1Array = new Array,
        "undefined" != typeof t && "undefined" != typeof t.array && (this.asn1Array = t.array)
    }
    ,
    He.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object),
    KJUR.asn1.DERBoolean = function() {
        KJUR.asn1.DERBoolean.superclass.constructor.call(this),
        this.hT = "01",
        this.hTLV = "0101ff"
    }
    ,
    He.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object),
    KJUR.asn1.DERInteger = function(t) {
        KJUR.asn1.DERInteger.superclass.constructor.call(this),
        this.hT = "02",
        this.setByBigInteger = function(t) {
            this.hTLV = null,
            this.isModified = !0,
            this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
        }
        ,
        this.setByInteger = function(t) {
            var r = new e(String(t),10);
            this.setByBigInteger(r)
        }
        ,
        this.setValueHex = function(t) {
            this.hV = t
        }
        ,
        this.getFreshValueHex = function() {
            return this.hV
        }
        ,
        "undefined" != typeof t && ("undefined" != typeof t.bigint ? this.setByBigInteger(t.bigint) : "undefined" != typeof t["int"] ? this.setByInteger(t["int"]) : "undefined" != typeof t.hex && this.setValueHex(t.hex))
    }
    ,
    He.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object),
    KJUR.asn1.DERBitString = function(t) {
        KJUR.asn1.DERBitString.superclass.constructor.call(this),
        this.hT = "03",
        this.setHexValueIncludingUnusedBits = function(t) {
            this.hTLV = null,
            this.isModified = !0,
            this.hV = t
        }
        ,
        this.setUnusedBitsAndHexValue = function(t, e) {
            if (t < 0 || 7 < t)
                throw "unused bits shall be from 0 to 7: u = " + t;
            var r = "0" + t;
            this.hTLV = null,
            this.isModified = !0,
            this.hV = r + e
        }
        ,
        this.setByBinaryString = function(t) {
            t = t.replace(/0+$/, "");
            var e = 8 - t.length % 8;
            8 == e && (e = 0);
            for (var r = 0; r <= e; r++)
                t += "0";
            for (var i = "", r = 0; r < t.length - 1; r += 8) {
                var n = t.substr(r, 8)
                  , o = parseInt(n, 2).toString(16);
                1 == o.length && (o = "0" + o),
                i += o
            }
            this.hTLV = null,
            this.isModified = !0,
            this.hV = "0" + e + i
        }
        ,
        this.setByBooleanArray = function(t) {
            for (var e = "", r = 0; r < t.length; r++)
                e += 1 == t[r] ? "1" : "0";
            this.setByBinaryString(e)
        }
        ,
        this.newFalseArray = function(t) {
            for (var e = new Array(t), r = 0; r < t; r++)
                e[r] = !1;
            return e
        }
        ,
        this.getFreshValueHex = function() {
            return this.hV
        }
        ,
        "undefined" != typeof t && ("undefined" != typeof t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : "undefined" != typeof t.bin ? this.setByBinaryString(t.bin) : "undefined" != typeof t.array && this.setByBooleanArray(t.array))
    }
    ,
    He.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object),
    KJUR.asn1.DEROctetString = function(t) {
        KJUR.asn1.DEROctetString.superclass.constructor.call(this, t),
        this.hT = "04"
    }
    ,
    He.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString),
    KJUR.asn1.DERNull = function() {
        KJUR.asn1.DERNull.superclass.constructor.call(this),
        this.hT = "05",
        this.hTLV = "0500"
    }
    ,
    He.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object),
    KJUR.asn1.DERObjectIdentifier = function(t) {
        var r = function(t) {
            var e = t.toString(16);
            return 1 == e.length && (e = "0" + e),
            e
        }
          , i = function(t) {
            var i = ""
              , n = new e(t,10)
              , o = n.toString(2)
              , s = 7 - o.length % 7;
            7 == s && (s = 0);
            for (var a = "", h = 0; h < s; h++)
                a += "0";
            o = a + o;
            for (var h = 0; h < o.length - 1; h += 7) {
                var c = o.substr(h, 7);
                h != o.length - 7 && (c = "1" + c),
                i += r(parseInt(c, 2))
            }
            return i
        };
        KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this),
        this.hT = "06",
        this.setValueHex = function(t) {
            this.hTLV = null,
            this.isModified = !0,
            this.s = null,
            this.hV = t
        }
        ,
        this.setValueOidString = function(t) {
            if (!t.match(/^[0-9.]+$/))
                throw "malformed oid string: " + t;
            var e = ""
              , n = t.split(".")
              , o = 40 * parseInt(n[0]) + parseInt(n[1]);
            e += r(o),
            n.splice(0, 2);
            for (var s = 0; s < n.length; s++)
                e += i(n[s]);
            this.hTLV = null,
            this.isModified = !0,
            this.s = null,
            this.hV = e
        }
        ,
        this.setValueName = function(t) {
            if ("undefined" == typeof KJUR.asn1.x509.OID.name2oidList[t])
                throw "DERObjectIdentifier oidName undefined: " + t;
            var e = KJUR.asn1.x509.OID.name2oidList[t];
            this.setValueOidString(e)
        }
        ,
        this.getFreshValueHex = function() {
            return this.hV
        }
        ,
        "undefined" != typeof t && ("undefined" != typeof t.oid ? this.setValueOidString(t.oid) : "undefined" != typeof t.hex ? this.setValueHex(t.hex) : "undefined" != typeof t.name && this.setValueName(t.name))
    }
    ,
    He.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object),
    KJUR.asn1.DERUTF8String = function(t) {
        KJUR.asn1.DERUTF8String.superclass.constructor.call(this, t),
        this.hT = "0c"
    }
    ,
    He.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString),
    KJUR.asn1.DERNumericString = function(t) {
        KJUR.asn1.DERNumericString.superclass.constructor.call(this, t),
        this.hT = "12"
    }
    ,
    He.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString),
    KJUR.asn1.DERPrintableString = function(t) {
        KJUR.asn1.DERPrintableString.superclass.constructor.call(this, t),
        this.hT = "13"
    }
    ,
    He.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString),
    KJUR.asn1.DERTeletexString = function(t) {
        KJUR.asn1.DERTeletexString.superclass.constructor.call(this, t),
        this.hT = "14"
    }
    ,
    He.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString),
    KJUR.asn1.DERIA5String = function(t) {
        KJUR.asn1.DERIA5String.superclass.constructor.call(this, t),
        this.hT = "16"
    }
    ,
    He.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString),
    KJUR.asn1.DERUTCTime = function(t) {
        KJUR.asn1.DERUTCTime.superclass.constructor.call(this, t),
        this.hT = "17",
        this.setByDate = function(t) {
            this.hTLV = null,
            this.isModified = !0,
            this.date = t,
            this.s = this.formatDate(this.date, "utc"),
            this.hV = stohex(this.s)
        }
        ,
        "undefined" != typeof t && ("undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex ? this.setStringHex(t.hex) : "undefined" != typeof t.date && this.setByDate(t.date))
    }
    ,
    He.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime),
    KJUR.asn1.DERGeneralizedTime = function(t) {
        KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, t),
        this.hT = "18",
        this.setByDate = function(t) {
            this.hTLV = null,
            this.isModified = !0,
            this.date = t,
            this.s = this.formatDate(this.date, "gen"),
            this.hV = stohex(this.s)
        }
        ,
        "undefined" != typeof t && ("undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex ? this.setStringHex(t.hex) : "undefined" != typeof t.date && this.setByDate(t.date))
    }
    ,
    He.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime),
    KJUR.asn1.DERSequence = function(t) {
        KJUR.asn1.DERSequence.superclass.constructor.call(this, t),
        this.hT = "30",
        this.getFreshValueHex = function() {
            for (var t = "", e = 0; e < this.asn1Array.length; e++) {
                var r = this.asn1Array[e];
                t += r.getEncodedHex()
            }
            return this.hV = t,
            this.hV
        }
    }
    ,
    He.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured),
    KJUR.asn1.DERSet = function(t) {
        KJUR.asn1.DERSet.superclass.constructor.call(this, t),
        this.hT = "31",
        this.getFreshValueHex = function() {
            for (var t = new Array, e = 0; e < this.asn1Array.length; e++) {
                var r = this.asn1Array[e];
                t.push(r.getEncodedHex())
            }
            return t.sort(),
            this.hV = t.join(""),
            this.hV
        }
    }
    ,
    He.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured),
    KJUR.asn1.DERTaggedObject = function(t) {
        KJUR.asn1.DERTaggedObject.superclass.constructor.call(this),
        this.hT = "a0",
        this.hV = "",
        this.isExplicit = !0,
        this.asn1Object = null,
        this.setASN1Object = function(t, e, r) {
            this.hT = e,
            this.isExplicit = t,
            this.asn1Object = r,
            this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(),
            this.hTLV = null,
            this.isModified = !0) : (this.hV = null,
            this.hTLV = r.getEncodedHex(),
            this.hTLV = this.hTLV.replace(/^../, e),
            this.isModified = !1)
        }
        ,
        this.getFreshValueHex = function() {
            return this.hV
        }
        ,
        "undefined" != typeof t && ("undefined" != typeof t.tag && (this.hT = t.tag),
        "undefined" != typeof t.explicit && (this.isExplicit = t.explicit),
        "undefined" != typeof t.obj && (this.asn1Object = t.obj,
        this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
    }
    ,
    He.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object),
    function(t) {
        "use strict";
        var e, r = {};
        r.decode = function(r) {
            var i;
            if (e === t) {
                var n = "0123456789ABCDEF"
                  , o = " \f\n\r\t \u2028\u2029";
                for (e = [],
                i = 0; i < 16; ++i)
                    e[n.charAt(i)] = i;
                for (n = n.toLowerCase(),
                i = 10; i < 16; ++i)
                    e[n.charAt(i)] = i;
                for (i = 0; i < o.length; ++i)
                    e[o.charAt(i)] = -1
            }
            var s = []
              , a = 0
              , h = 0;
            for (i = 0; i < r.length; ++i) {
                var c = r.charAt(i);
                if ("=" == c)
                    break;
                if (c = e[c],
                c != -1) {
                    if (c === t)
                        throw "Illegal character at offset " + i;
                    a |= c,
                    ++h >= 2 ? (s[s.length] = a,
                    a = 0,
                    h = 0) : a <<= 4
                }
            }
            if (h)
                throw "Hex encoding incomplete: 4 bits missing";
            return s
        }
        ,
        window.Hex = r
    }(),
    function(t) {
        "use strict";
        var e, r = {};
        r.decode = function(r) {
            var i;
            if (e === t) {
                var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
                  , o = "= \f\n\r\t \u2028\u2029";
                for (e = [],
                i = 0; i < 64; ++i)
                    e[n.charAt(i)] = i;
                for (i = 0; i < o.length; ++i)
                    e[o.charAt(i)] = -1
            }
            var s = []
              , a = 0
              , h = 0;
            for (i = 0; i < r.length; ++i) {
                var c = r.charAt(i);
                if ("=" == c)
                    break;
                if (c = e[c],
                c != -1) {
                    if (c === t)
                        throw "Illegal character at offset " + i;
                    a |= c,
                    ++h >= 4 ? (s[s.length] = a >> 16,
                    s[s.length] = a >> 8 & 255,
                    s[s.length] = 255 & a,
                    a = 0,
                    h = 0) : a <<= 6
                }
            }
            switch (h) {
            case 1:
                throw "Base64 encoding incomplete: at least 2 bits missing";
            case 2:
                s[s.length] = a >> 10;
                break;
            case 3:
                s[s.length] = a >> 16,
                s[s.length] = a >> 8 & 255
            }
            return s
        }
        ,
        r.re = /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
        r.unarmor = function(t) {
            var e = r.re.exec(t);
            if (e)
                if (e[1])
                    t = e[1];
                else {
                    if (!e[2])
                        throw "RegExp out of sync";
                    t = e[2]
                }
            return r.decode(t)
        }
        ,
        window.Base64 = r
    }(),
    function(t) {
        "use strict";
        function e(t, r) {
            t instanceof e ? (this.enc = t.enc,
            this.pos = t.pos) : (this.enc = t,
            this.pos = r)
        }
        function r(t, e, r, i, n) {
            this.stream = t,
            this.header = e,
            this.length = r,
            this.tag = i,
            this.sub = n
        }
        var i = 100
          , n = "…"
          , o = {
            tag: function(t, e) {
                var r = document.createElement(t);
                return r.className = e,
                r
            },
            text: function(t) {
                return document.createTextNode(t)
            }
        };
        e.prototype.get = function(e) {
            if (e === t && (e = this.pos++),
            e >= this.enc.length)
                throw "Requesting byte offset " + e + " on a stream of length " + this.enc.length;
            return this.enc[e]
        }
        ,
        e.prototype.hexDigits = "0123456789ABCDEF",
        e.prototype.hexByte = function(t) {
            return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t)
        }
        ,
        e.prototype.hexDump = function(t, e, r) {
            for (var i = "", n = t; n < e; ++n)
                if (i += this.hexByte(this.get(n)),
                r !== !0)
                    switch (15 & n) {
                    case 7:
                        i += "  ";
                        break;
                    case 15:
                        i += "\n";
                        break;
                    default:
                        i += " "
                    }
            return i
        }
        ,
        e.prototype.parseStringISO = function(t, e) {
            for (var r = "", i = t; i < e; ++i)
                r += String.fromCharCode(this.get(i));
            return r
        }
        ,
        e.prototype.parseStringUTF = function(t, e) {
            for (var r = "", i = t; i < e; ) {
                var n = this.get(i++);
                r += n < 128 ? String.fromCharCode(n) : n > 191 && n < 224 ? String.fromCharCode((31 & n) << 6 | 63 & this.get(i++)) : String.fromCharCode((15 & n) << 12 | (63 & this.get(i++)) << 6 | 63 & this.get(i++))
            }
            return r
        }
        ,
        e.prototype.parseStringBMP = function(t, e) {
            for (var r = "", i = t; i < e; i += 2) {
                var n = this.get(i)
                  , o = this.get(i + 1);
                r += String.fromCharCode((n << 8) + o)
            }
            return r
        }
        ,
        e.prototype.reTime = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
        e.prototype.parseTime = function(t, e) {
            var r = this.parseStringISO(t, e)
              , i = this.reTime.exec(r);
            return i ? (r = i[1] + "-" + i[2] + "-" + i[3] + " " + i[4],
            i[5] && (r += ":" + i[5],
            i[6] && (r += ":" + i[6],
            i[7] && (r += "." + i[7]))),
            i[8] && (r += " UTC",
            "Z" != i[8] && (r += i[8],
            i[9] && (r += ":" + i[9]))),
            r) : "Unrecognized time: " + r
        }
        ,
        e.prototype.parseInteger = function(t, e) {
            var r = e - t;
            if (r > 4) {
                r <<= 3;
                var i = this.get(t);
                if (0 === i)
                    r -= 8;
                else
                    for (; i < 128; )
                        i <<= 1,
                        --r;
                return "(" + r + " bit)"
            }
            for (var n = 0, o = t; o < e; ++o)
                n = n << 8 | this.get(o);
            return n
        }
        ,
        e.prototype.parseBitString = function(t, e) {
            var r = this.get(t)
              , i = (e - t - 1 << 3) - r
              , n = "(" + i + " bit)";
            if (i <= 20) {
                var o = r;
                n += " ";
                for (var s = e - 1; s > t; --s) {
                    for (var a = this.get(s), h = o; h < 8; ++h)
                        n += a >> h & 1 ? "1" : "0";
                    o = 0
                }
            }
            return n
        }
        ,
        e.prototype.parseOctetString = function(t, e) {
            var r = e - t
              , o = "(" + r + " byte) ";
            r > i && (e = t + i);
            for (var s = t; s < e; ++s)
                o += this.hexByte(this.get(s));
            return r > i && (o += n),
            o
        }
        ,
        e.prototype.parseOID = function(t, e) {
            for (var r = "", i = 0, n = 0, o = t; o < e; ++o) {
                var s = this.get(o);
                if (i = i << 7 | 127 & s,
                n += 7,
                !(128 & s)) {
                    if ("" === r) {
                        var a = i < 80 ? i < 40 ? 0 : 1 : 2;
                        r = a + "." + (i - 40 * a)
                    } else
                        r += "." + (n >= 31 ? "bigint" : i);
                    i = n = 0
                }
            }
            return r
        }
        ,
        r.prototype.typeName = function() {
            if (this.tag === t)
                return "unknown";
            var e = this.tag >> 6
              , r = (this.tag >> 5 & 1,
            31 & this.tag);
            switch (e) {
            case 0:
                switch (r) {
                case 0:
                    return "EOC";
                case 1:
                    return "BOOLEAN";
                case 2:
                    return "INTEGER";
                case 3:
                    return "BIT_STRING";
                case 4:
                    return "OCTET_STRING";
                case 5:
                    return "NULL";
                case 6:
                    return "OBJECT_IDENTIFIER";
                case 7:
                    return "ObjectDescriptor";
                case 8:
                    return "EXTERNAL";
                case 9:
                    return "REAL";
                case 10:
                    return "ENUMERATED";
                case 11:
                    return "EMBEDDED_PDV";
                case 12:
                    return "UTF8String";
                case 16:
                    return "SEQUENCE";
                case 17:
                    return "SET";
                case 18:
                    return "NumericString";
                case 19:
                    return "PrintableString";
                case 20:
                    return "TeletexString";
                case 21:
                    return "VideotexString";
                case 22:
                    return "IA5String";
                case 23:
                    return "UTCTime";
                case 24:
                    return "GeneralizedTime";
                case 25:
                    return "GraphicString";
                case 26:
                    return "VisibleString";
                case 27:
                    return "GeneralString";
                case 28:
                    return "UniversalString";
                case 30:
                    return "BMPString";
                default:
                    return "Universal_" + r.toString(16)
                }
            case 1:
                return "Application_" + r.toString(16);
            case 2:
                return "[" + r + "]";
            case 3:
                return "Private_" + r.toString(16)
            }
        }
        ,
        r.prototype.reSeemsASCII = /^[ -~]+$/,
        r.prototype.content = function() {
            if (this.tag === t)
                return null;
            var e = this.tag >> 6
              , r = 31 & this.tag
              , o = this.posContent()
              , s = Math.abs(this.length);
            if (0 !== e) {
                if (null !== this.sub)
                    return "(" + this.sub.length + " elem)";
                var a = this.stream.parseStringISO(o, o + Math.min(s, i));
                return this.reSeemsASCII.test(a) ? a.substring(0, 2 * i) + (a.length > 2 * i ? n : "") : this.stream.parseOctetString(o, o + s)
            }
            switch (r) {
            case 1:
                return 0 === this.stream.get(o) ? "false" : "true";
            case 2:
                return this.stream.parseInteger(o, o + s);
            case 3:
                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(o, o + s);
            case 4:
                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(o, o + s);
            case 6:
                return this.stream.parseOID(o, o + s);
            case 16:
            case 17:
                return "(" + this.sub.length + " elem)";
            case 12:
                return this.stream.parseStringUTF(o, o + s);
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 26:
                return this.stream.parseStringISO(o, o + s);
            case 30:
                return this.stream.parseStringBMP(o, o + s);
            case 23:
            case 24:
                return this.stream.parseTime(o, o + s)
            }
            return null
        }
        ,
        r.prototype.toString = function() {
            return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
        }
        ,
        r.prototype.print = function(e) {
            if (e === t && (e = ""),
            document.writeln(e + this),
            null !== this.sub) {
                e += "  ";
                for (var r = 0, i = this.sub.length; r < i; ++r)
                    this.sub[r].print(e)
            }
        }
        ,
        r.prototype.toPrettyString = function(e) {
            e === t && (e = "");
            var r = e + this.typeName() + " @" + this.stream.pos;
            if (this.length >= 0 && (r += "+"),
            r += this.length,
            32 & this.tag ? r += " (constructed)" : 3 != this.tag && 4 != this.tag || null === this.sub || (r += " (encapsulates)"),
            r += "\n",
            null !== this.sub) {
                e += "  ";
                for (var i = 0, n = this.sub.length; i < n; ++i)
                    r += this.sub[i].toPrettyString(e)
            }
            return r
        }
        ,
        r.prototype.toDOM = function() {
            var t = o.tag("div", "node");
            t.asn1 = this;
            var e = o.tag("div", "head")
              , r = this.typeName().replace(/_/g, " ");
            e.innerHTML = r;
            var i = this.content();
            if (null !== i) {
                i = String(i).replace(/</g, "&lt;");
                var n = o.tag("span", "preview");
                n.appendChild(o.text(i)),
                e.appendChild(n)
            }
            t.appendChild(e),
            this.node = t,
            this.head = e;
            var s = o.tag("div", "value");
            if (r = "Offset: " + this.stream.pos + "<br/>",
            r += "Length: " + this.header + "+",
            r += this.length >= 0 ? this.length : -this.length + " (undefined)",
            32 & this.tag ? r += "<br/>(constructed)" : 3 != this.tag && 4 != this.tag || null === this.sub || (r += "<br/>(encapsulates)"),
            null !== i && (r += "<br/>Value:<br/><b>" + i + "</b>",
            "object" == typeof oids && 6 == this.tag)) {
                var a = oids[i];
                a && (a.d && (r += "<br/>" + a.d),
                a.c && (r += "<br/>" + a.c),
                a.w && (r += "<br/>(warning!)"))
            }
            s.innerHTML = r,
            t.appendChild(s);
            var h = o.tag("div", "sub");
            if (null !== this.sub)
                for (var c = 0, u = this.sub.length; c < u; ++c)
                    h.appendChild(this.sub[c].toDOM());
            return t.appendChild(h),
            e.onclick = function() {
                t.className = "node collapsed" == t.className ? "node" : "node collapsed"
            }
            ,
            t
        }
        ,
        r.prototype.posStart = function() {
            return this.stream.pos
        }
        ,
        r.prototype.posContent = function() {
            return this.stream.pos + this.header
        }
        ,
        r.prototype.posEnd = function() {
            return this.stream.pos + this.header + Math.abs(this.length)
        }
        ,
        r.prototype.fakeHover = function(t) {
            this.node.className += " hover",
            t && (this.head.className += " hover")
        }
        ,
        r.prototype.fakeOut = function(t) {
            var e = / ?hover/;
            this.node.className = this.node.className.replace(e, ""),
            t && (this.head.className = this.head.className.replace(e, ""))
        }
        ,
        r.prototype.toHexDOM_sub = function(t, e, r, i, n) {
            if (!(i >= n)) {
                var s = o.tag("span", e);
                s.appendChild(o.text(r.hexDump(i, n))),
                t.appendChild(s)
            }
        }
        ,
        r.prototype.toHexDOM = function(e) {
            var r = o.tag("span", "hex");
            if (e === t && (e = r),
            this.head.hexNode = r,
            this.head.onmouseover = function() {
                this.hexNode.className = "hexCurrent"
            }
            ,
            this.head.onmouseout = function() {
                this.hexNode.className = "hex"
            }
            ,
            r.asn1 = this,
            r.onmouseover = function() {
                var t = !e.selected;
                t && (e.selected = this.asn1,
                this.className = "hexCurrent"),
                this.asn1.fakeHover(t)
            }
            ,
            r.onmouseout = function() {
                var t = e.selected == this.asn1;
                this.asn1.fakeOut(t),
                t && (e.selected = null,
                this.className = "hex")
            }
            ,
            this.toHexDOM_sub(r, "tag", this.stream, this.posStart(), this.posStart() + 1),
            this.toHexDOM_sub(r, this.length >= 0 ? "dlen" : "ulen", this.stream, this.posStart() + 1, this.posContent()),
            null === this.sub)
                r.appendChild(o.text(this.stream.hexDump(this.posContent(), this.posEnd())));
            else if (this.sub.length > 0) {
                var i = this.sub[0]
                  , n = this.sub[this.sub.length - 1];
                this.toHexDOM_sub(r, "intro", this.stream, this.posContent(), i.posStart());
                for (var s = 0, a = this.sub.length; s < a; ++s)
                    r.appendChild(this.sub[s].toHexDOM(e));
                this.toHexDOM_sub(r, "outro", this.stream, n.posEnd(), this.posEnd())
            }
            return r
        }
        ,
        r.prototype.toHexString = function(t) {
            return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
        }
        ,
        r.decodeLength = function(t) {
            var e = t.get()
              , r = 127 & e;
            if (r == e)
                return r;
            if (r > 3)
                throw "Length over 24 bits not supported at position " + (t.pos - 1);
            if (0 === r)
                return -1;
            e = 0;
            for (var i = 0; i < r; ++i)
                e = e << 8 | t.get();
            return e
        }
        ,
        r.hasContent = function(t, i, n) {
            if (32 & t)
                return !0;
            if (t < 3 || t > 4)
                return !1;
            var o = new e(n);
            3 == t && o.get();
            var s = o.get();
            if (s >> 6 & 1)
                return !1;
            try {
                var a = r.decodeLength(o);
                return o.pos - n.pos + a == i
            } catch (h) {
                return !1
            }
        }
        ,
        r.decode = function(t) {
            t instanceof e || (t = new e(t,0));
            var i = new e(t)
              , n = t.get()
              , o = r.decodeLength(t)
              , s = t.pos - i.pos
              , a = null;
            if (r.hasContent(n, o, t)) {
                var h = t.pos;
                if (3 == n && t.get(),
                a = [],
                o >= 0) {
                    for (var c = h + o; t.pos < c; )
                        a[a.length] = r.decode(t);
                    if (t.pos != c)
                        throw "Content size is not correct for container starting at offset " + h
                } else
                    try {
                        for (; ; ) {
                            var u = r.decode(t);
                            if (0 === u.tag)
                                break;
                            a[a.length] = u
                        }
                        o = h - t.pos
                    } catch (f) {
                        throw "Exception while decoding undefined length content: " + f
                    }
            } else
                t.pos += o;
            return new r(i,s,o,n,a)
        }
        ,
        r.test = function() {
            for (var t = [{
                value: [39],
                expected: 39
            }, {
                value: [129, 201],
                expected: 201
            }, {
                value: [131, 254, 220, 186],
                expected: 16702650
            }], i = 0, n = t.length; i < n; ++i) {
                var o = new e(t[i].value,0)
                  , s = r.decodeLength(o);
                s != t[i].expected && document.write("In test[" + i + "] expected " + t[i].expected + " got " + s + "\n")
            }
        }
        ,
        window.ASN1 = r
    }(),
    window.ASN1.prototype.getHexStringValue = function() {
        var t = this.toHexString()
          , e = 2 * this.header
          , r = 2 * this.length;
        return t.substr(e, r)
    }
    ,
    ce.prototype.parseKey = function(t) {
        try {
            var e = 0
              , r = 0
              , i = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/
              , n = i.test(t) ? Hex.decode(t) : Base64.unarmor(t)
              , o = ASN1.decode(n);
            if (3 === o.sub.length && (o = o.sub[2].sub[0]),
            9 === o.sub.length) {
                e = o.sub[1].getHexStringValue(),
                this.n = ae(e, 16),
                r = o.sub[2].getHexStringValue(),
                this.e = parseInt(r, 16);
                var s = o.sub[3].getHexStringValue();
                this.d = ae(s, 16);
                var a = o.sub[4].getHexStringValue();
                this.p = ae(a, 16);
                var h = o.sub[5].getHexStringValue();
                this.q = ae(h, 16);
                var c = o.sub[6].getHexStringValue();
                this.dmp1 = ae(c, 16);
                var u = o.sub[7].getHexStringValue();
                this.dmq1 = ae(u, 16);
                var f = o.sub[8].getHexStringValue();
                this.coeff = ae(f, 16)
            } else {
                if (2 !== o.sub.length)
                    return !1;
                var l = o.sub[1]
                  , p = l.sub[0];
                e = p.sub[0].getHexStringValue(),
                this.n = ae(e, 16),
                r = p.sub[1].getHexStringValue(),
                this.e = parseInt(r, 16)
            }
            return !0
        } catch (d) {
            return !1
        }
    }
    ,
    ce.prototype.getPrivateBaseKey = function() {
        var t = {
            array: [new KJUR.asn1.DERInteger({
                "int": 0
            }), new KJUR.asn1.DERInteger({
                bigint: this.n
            }), new KJUR.asn1.DERInteger({
                "int": this.e
            }), new KJUR.asn1.DERInteger({
                bigint: this.d
            }), new KJUR.asn1.DERInteger({
                bigint: this.p
            }), new KJUR.asn1.DERInteger({
                bigint: this.q
            }), new KJUR.asn1.DERInteger({
                bigint: this.dmp1
            }), new KJUR.asn1.DERInteger({
                bigint: this.dmq1
            }), new KJUR.asn1.DERInteger({
                bigint: this.coeff
            })]
        }
          , e = new KJUR.asn1.DERSequence(t);
        return e.getEncodedHex()
    }
    ,
    ce.prototype.getPrivateBaseKeyB64 = function() {
        return be(this.getPrivateBaseKey())
    }
    ,
    ce.prototype.getPublicBaseKey = function() {
        var t = {
            array: [new KJUR.asn1.DERObjectIdentifier({
                oid: "1.2.840.113549.1.1.1"
            }), new KJUR.asn1.DERNull]
        }
          , e = new KJUR.asn1.DERSequence(t);
        t = {
            array: [new KJUR.asn1.DERInteger({
                bigint: this.n
            }), new KJUR.asn1.DERInteger({
                "int": this.e
            })]
        };
        var r = new KJUR.asn1.DERSequence(t);
        t = {
            hex: "00" + r.getEncodedHex()
        };
        var i = new KJUR.asn1.DERBitString(t);
        t = {
            array: [e, i]
        };
        var n = new KJUR.asn1.DERSequence(t);
        return n.getEncodedHex()
    }
    ,
    ce.prototype.getPublicBaseKeyB64 = function() {
        return be(this.getPublicBaseKey())
    }
    ,
    ce.prototype.wordwrap = function(t, e) {
        if (e = e || 64,
        !t)
            return t;
        var r = "(.{1," + e + "})( +|$\n?)|(.{1," + e + "})";
        return t.match(RegExp(r, "g")).join("\n")
    }
    ,
    ce.prototype.getPrivateKey = function() {
        var t = "-----BEGIN RSA PRIVATE KEY-----\n";
        return t += this.wordwrap(this.getPrivateBaseKeyB64()) + "\n",
        t += "-----END RSA PRIVATE KEY-----"
    }
    ,
    ce.prototype.getPublicKey = function() {
        var t = "-----BEGIN PUBLIC KEY-----\n";
        return t += this.wordwrap(this.getPublicBaseKeyB64()) + "\n",
        t += "-----END PUBLIC KEY-----"
    }
    ,
    ce.prototype.hasPublicKeyProperty = function(t) {
        return t = t || {},
        t.hasOwnProperty("n") && t.hasOwnProperty("e")
    }
    ,
    ce.prototype.hasPrivateKeyProperty = function(t) {
        return t = t || {},
        t.hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff")
    }
    ,
    ce.prototype.parsePropertiesFrom = function(t) {
        this.n = t.n,
        this.e = t.e,
        t.hasOwnProperty("d") && (this.d = t.d,
        this.p = t.p,
        this.q = t.q,
        this.dmp1 = t.dmp1,
        this.dmq1 = t.dmq1,
        this.coeff = t.coeff)
    }
    ;
    var Xe = function(t) {
        ce.call(this),
        t && ("string" == typeof t ? this.parseKey(t) : (this.hasPrivateKeyProperty(t) || this.hasPublicKeyProperty(t)) && this.parsePropertiesFrom(t))
    };
    Xe.prototype = new ce,
    Xe.prototype.constructor = Xe;
    var Ge = function(t) {
        t = t || {},
        this.default_key_size = parseInt(t.default_key_size) || 1024,
        this.default_public_exponent = t.default_public_exponent || "010001",
        this.log = t.log || !1,
        this.key = null
    };
    Ge.prototype.setKey = function(t) {
        this.log && this.key && console.warn("A key was already set, overriding existing."),
        this.key = new Xe(t)
    }
    ,
    Ge.prototype.setPrivateKey = function(t) {
        this.setKey(t)
    }
    ,
    Ge.prototype.setPublicKey = function(t) {
        this.setKey(t)
    }
    ,
    Ge.prototype.decrypt = function(t) {
        try {
            return this.getKey().decrypt(Se(t))
        } catch (e) {
            return !1
        }
    }
    ,
    Ge.prototype.encrypt = function(t) {
        try {
            return be(this.getKey().encrypt(t))
        } catch (e) {
            return !1
        }
    }
    ,
    Ge.prototype.getKey = function(t) {
        if (!this.key) {
            if (this.key = new Xe,
            t && "[object Function]" === {}.toString.call(t))
                return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
            this.key.generate(this.default_key_size, this.default_public_exponent)
        }
        return this.key
    }
    ,
    Ge.prototype.getPrivateKey = function() {
        return this.getKey().getPrivateKey()
    }
    ,
    Ge.prototype.getPrivateKeyB64 = function() {
        return this.getKey().getPrivateBaseKeyB64()
    }
    ,
    Ge.prototype.getPublicKey = function() {
        return this.getKey().getPublicKey()
    }
    ,
    Ge.prototype.getPublicKeyB64 = function() {
        return this.getKey().getPublicBaseKeyB64()
    }
    ,
    Ge.version = "2.3.1",
    t.JSEncrypt = Ge
});
var swfobject = function() {
    function t() {
        if (!J) {
            try {
                var t = N.getElementsByTagName("body")[0].appendChild(v("span"));
                t.parentNode.removeChild(t)
            } catch (e) {
                return
            }
            J = !0;
            for (var r = L.length, i = 0; i < r; i++)
                L[i]()
        }
    }
    function e(t) {
        J ? t() : L[L.length] = t
    }
    function r(t) {
        if (typeof P.addEventListener != C)
            P.addEventListener("load", t, !1);
        else if (typeof N.addEventListener != C)
            N.addEventListener("load", t, !1);
        else if (typeof P.attachEvent != C)
            m(P, "onload", t);
        else if ("function" == typeof P.onload) {
            var e = P.onload;
            P.onload = function() {
                e(),
                t()
            }
        } else
            P.onload = t
    }
    function i() {
        F ? n() : o()
    }
    function n() {
        var t = N.getElementsByTagName("body")[0]
          , e = v(D);
        e.setAttribute("type", k);
        var r = t.appendChild(e);
        if (r) {
            var i = 0;
            !function() {
                if (typeof r.GetVariable != C) {
                    var n = r.GetVariable("$version");
                    n && (n = n.split(" ")[1].split(","),
                    G.pv = [parseInt(n[0], 10), parseInt(n[1], 10), parseInt(n[2], 10)])
                } else if (i < 10)
                    return i++,
                    void setTimeout(arguments.callee, 10);
                t.removeChild(e),
                r = null,
                o()
            }()
        } else
            o()
    }
    function o() {
        var t = H.length;
        if (t > 0)
            for (var e = 0; e < t; e++) {
                var r = H[e].id
                  , i = H[e].callbackFn
                  , n = {
                    success: !1,
                    id: r
                };
                if (G.pv[0] > 0) {
                    var o = g(r);
                    if (o)
                        if (!y(H[e].swfVersion) || G.wk && G.wk < 312)
                            if (H[e].expressInstall && a()) {
                                var u = {};
                                u.data = H[e].expressInstall,
                                u.width = o.getAttribute("width") || "0",
                                u.height = o.getAttribute("height") || "0",
                                o.getAttribute("class") && (u.styleclass = o.getAttribute("class")),
                                o.getAttribute("align") && (u.align = o.getAttribute("align"));
                                for (var f = {}, l = o.getElementsByTagName("param"), p = l.length, d = 0; d < p; d++)
                                    "movie" != l[d].getAttribute("name").toLowerCase() && (f[l[d].getAttribute("name")] = l[d].getAttribute("value"));
                                h(u, f, r, i)
                            } else
                                c(o),
                                i && i(n);
                        else
                            S(r, !0),
                            i && (n.success = !0,
                            n.ref = s(r),
                            i(n))
                } else if (S(r, !0),
                i) {
                    var v = s(r);
                    v && typeof v.SetVariable != C && (n.success = !0,
                    n.ref = v),
                    i(n)
                }
            }
    }
    function s(t) {
        var e = null
          , r = g(t);
        if (r && "OBJECT" == r.nodeName)
            if (typeof r.SetVariable != C)
                e = r;
            else {
                var i = r.getElementsByTagName(D)[0];
                i && (e = i)
            }
        return e
    }
    function a() {
        return !j && y("6.0.65") && (G.win || G.mac) && !(G.wk && G.wk < 312)
    }
    function h(t, e, r, i) {
        j = !0,
        T = i || null,
        _ = {
            success: !1,
            id: r
        };
        var n = g(r);
        if (n) {
            "OBJECT" == n.nodeName ? (E = u(n),
            x = null) : (E = n,
            x = r),
            t.id = B,
            (typeof t.width == C || !/%$/.test(t.width) && parseInt(t.width, 10) < 310) && (t.width = "310"),
            (typeof t.height == C || !/%$/.test(t.height) && parseInt(t.height, 10) < 137) && (t.height = "137"),
            N.title = N.title.slice(0, 47) + " - Flash Player Installation";
            var o = G.ie && G.win ? "ActiveX" : "PlugIn"
              , s = "MMredirectURL=" + P.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + o + "&MMdoctitle=" + N.title;
            if (typeof e.flashvars != C ? e.flashvars += "&" + s : e.flashvars = s,
            G.ie && G.win && 4 != n.readyState) {
                var a = v("div");
                r += "SWFObjectNew",
                a.setAttribute("id", r),
                n.parentNode.insertBefore(a, n),
                n.style.display = "none",
                function() {
                    4 == n.readyState ? n.parentNode.removeChild(n) : setTimeout(arguments.callee, 10)
                }()
            }
            f(t, e, r)
        }
    }
    function c(t) {
        if (G.ie && G.win && 4 != t.readyState) {
            var e = v("div");
            t.parentNode.insertBefore(e, t),
            e.parentNode.replaceChild(u(t), e),
            t.style.display = "none",
            function() {
                4 == t.readyState ? t.parentNode.removeChild(t) : setTimeout(arguments.callee, 10)
            }()
        } else
            t.parentNode.replaceChild(u(t), t)
    }
    function u(t) {
        var e = v("div");
        if (G.win && G.ie)
            e.innerHTML = t.innerHTML;
        else {
            var r = t.getElementsByTagName(D)[0];
            if (r) {
                var i = r.childNodes;
                if (i)
                    for (var n = i.length, o = 0; o < n; o++)
                        1 == i[o].nodeType && "PARAM" == i[o].nodeName || 8 == i[o].nodeType || e.appendChild(i[o].cloneNode(!0))
            }
        }
        return e
    }
    function f(t, e, r) {
        var i, n = g(r);
        if (G.wk && G.wk < 312)
            return i;
        if (n)
            if (typeof t.id == C && (t.id = r),
            G.ie && G.win) {
                var o = "";
                for (var s in t)
                    t[s] != Object.prototype[s] && ("data" == s.toLowerCase() ? e.movie = t[s] : "styleclass" == s.toLowerCase() ? o += ' class="' + t[s] + '"' : "classid" != s.toLowerCase() && (o += " " + s + '="' + t[s] + '"'));
                var a = "";
                for (var h in e)
                    e[h] != Object.prototype[h] && (a += '<param name="' + h + '" value="' + e[h] + '" />');
                n.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + o + ">" + a + "</object>",
                K[K.length] = t.id,
                i = g(t.id)
            } else {
                var c = v(D);
                c.setAttribute("type", k);
                for (var u in t)
                    t[u] != Object.prototype[u] && ("styleclass" == u.toLowerCase() ? c.setAttribute("class", t[u]) : "classid" != u.toLowerCase() && c.setAttribute(u, t[u]));
                for (var f in e)
                    e[f] != Object.prototype[f] && "movie" != f.toLowerCase() && l(c, f, e[f]);
                n.parentNode.replaceChild(c, n),
                i = c
            }
        return i
    }
    function l(t, e, r) {
        var i = v("param");
        i.setAttribute("name", e),
        i.setAttribute("value", r),
        t.appendChild(i)
    }
    function p(t) {
        var e = g(t);
        e && "OBJECT" == e.nodeName && (G.ie && G.win ? (e.style.display = "none",
        function() {
            4 == e.readyState ? d(t) : setTimeout(arguments.callee, 10)
        }()) : e.parentNode.removeChild(e))
    }
    function d(t) {
        var e = g(t);
        if (e) {
            for (var r in e)
                "function" == typeof e[r] && (e[r] = null);
            e.parentNode.removeChild(e)
        }
    }
    function g(t) {
        var e = null;
        try {
            e = N.getElementById(t)
        } catch (r) {}
        return e
    }
    function v(t) {
        return N.createElement(t)
    }
    function m(t, e, r) {
        t.attachEvent(e, r),
        V[V.length] = [t, e, r]
    }
    function y(t) {
        var e = G.pv
          , r = t.split(".");
        return r[0] = parseInt(r[0], 10),
        r[1] = parseInt(r[1], 10) || 0,
        r[2] = parseInt(r[2], 10) || 0,
        e[0] > r[0] || e[0] == r[0] && e[1] > r[1] || e[0] == r[0] && e[1] == r[1] && e[2] >= r[2]
    }
    function b(t, e, r, i) {
        if (!G.ie || !G.mac) {
            var n = N.getElementsByTagName("head")[0];
            if (n) {
                var o = r && "string" == typeof r ? r : "screen";
                if (i && (A = null,
                R = null),
                !A || R != o) {
                    var s = v("style");
                    s.setAttribute("type", "text/css"),
                    s.setAttribute("media", o),
                    A = n.appendChild(s),
                    G.ie && G.win && typeof N.styleSheets != C && N.styleSheets.length > 0 && (A = N.styleSheets[N.styleSheets.length - 1]),
                    R = o
                }
                G.ie && G.win ? A && typeof A.addRule == D && A.addRule(t, e) : A && typeof N.createTextNode != C && A.appendChild(N.createTextNode(t + " {" + e + "}"))
            }
        }
    }
    function S(t, e) {
        if (X) {
            var r = e ? "visible" : "hidden";
            J && g(t) ? g(t).style.visibility = r : b("#" + t, "visibility:" + r)
        }
    }
    function w(t) {
        var e = /[\\\"<>\.;]/
          , r = null != e.exec(t);
        return r && typeof encodeURIComponent != C ? encodeURIComponent(t) : t
    }
    var E, x, T, _, A, R, C = "undefined", D = "object", O = "Shockwave Flash", M = "ShockwaveFlash.ShockwaveFlash", k = "application/x-shockwave-flash", B = "SWFObjectExprInst", I = "onreadystatechange", P = window, N = document, U = navigator, F = !1, L = [i], H = [], K = [], V = [], J = !1, j = !1, X = !0, G = function() {
        var t = typeof N.getElementById != C && typeof N.getElementsByTagName != C && typeof N.createElement != C
          , e = U.userAgent.toLowerCase()
          , r = U.platform.toLowerCase()
          , i = r ? /win/.test(r) : /win/.test(e)
          , n = r ? /mac/.test(r) : /mac/.test(e)
          , o = !!/webkit/.test(e) && parseFloat(e.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1"))
          , s = !1
          , a = [0, 0, 0]
          , h = null;
        if (typeof U.plugins != C && typeof U.plugins[O] == D)
            h = U.plugins[O].description,
            !h || typeof U.mimeTypes != C && U.mimeTypes[k] && !U.mimeTypes[k].enabledPlugin || (F = !0,
            s = !1,
            h = h.replace(/^.*\s+(\S+\s+\S+$)/, "$1"),
            a[0] = parseInt(h.replace(/^(.*)\..*$/, "$1"), 10),
            a[1] = parseInt(h.replace(/^.*\.(.*)\s.*$/, "$1"), 10),
            a[2] = /[a-zA-Z]/.test(h) ? parseInt(h.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
        else if (typeof P.ActiveXObject != C)
            try {
                var c = new ActiveXObject(M);
                c && (h = c.GetVariable("$version"),
                h && (s = !0,
                h = h.split(" ")[1].split(","),
                a = [parseInt(h[0], 10), parseInt(h[1], 10), parseInt(h[2], 10)]))
            } catch (u) {}
        return {
            w3: t,
            pv: a,
            wk: o,
            ie: s,
            win: i,
            mac: n
        }
    }();
    (function() {
        G.w3 && ((typeof N.readyState != C && "complete" == N.readyState || typeof N.readyState == C && (N.getElementsByTagName("body")[0] || N.body)) && t(),
        J || (typeof N.addEventListener != C && N.addEventListener("DOMContentLoaded", t, !1),
        G.ie && G.win && (N.attachEvent(I, function() {
            "complete" == N.readyState && (N.detachEvent(I, arguments.callee),
            t())
        }),
        P == top && !function() {
            if (!J) {
                try {
                    N.documentElement.doScroll("left")
                } catch (e) {
                    return void setTimeout(arguments.callee, 0)
                }
                t()
            }
        }()),
        G.wk && !function() {
            if (!J)
                return /loaded|complete/.test(N.readyState) ? void t() : void setTimeout(arguments.callee, 0)
        }(),
        r(t)))
    })(),
    function() {
        G.ie && G.win && window.attachEvent("onunload", function() {
            for (var t = V.length, e = 0; e < t; e++)
                V[e][0].detachEvent(V[e][1], V[e][2]);
            for (var r = K.length, i = 0; i < r; i++)
                p(K[i]);
            for (var n in G)
                G[n] = null;
            G = null;
            for (var o in swfobject)
                swfobject[o] = null;
            swfobject = null
        })
    }();
    return {
        registerObject: function(t, e, r, i) {
            if (G.w3 && t && e) {
                var n = {};
                n.id = t,
                n.swfVersion = e,
                n.expressInstall = r,
                n.callbackFn = i,
                H[H.length] = n,
                S(t, !1)
            } else
                i && i({
                    success: !1,
                    id: t
                })
        },
        getObjectById: function(t) {
            if (G.w3)
                return s(t)
        },
        embedSWF: function(t, r, i, n, o, s, c, u, l, p) {
            var d = {
                success: !1,
                id: r
            };
            G.w3 && !(G.wk && G.wk < 312) && t && r && i && n && o ? (S(r, !1),
            e(function() {
                i += "",
                n += "";
                var e = {};
                if (l && typeof l === D)
                    for (var g in l)
                        e[g] = l[g];
                e.data = t,
                e.width = i,
                e.height = n;
                var v = {};
                if (u && typeof u === D)
                    for (var m in u)
                        v[m] = u[m];
                if (c && typeof c === D)
                    for (var b in c)
                        typeof v.flashvars != C ? v.flashvars += "&" + b + "=" + c[b] : v.flashvars = b + "=" + c[b];
                if (y(o)) {
                    var w = f(e, v, r);
                    e.id == r && S(r, !0),
                    d.success = !0,
                    d.ref = w
                } else {
                    if (s && a())
                        return e.data = s,
                        void h(e, v, r, p);
                    S(r, !0)
                }
                p && p(d)
            })) : p && p(d)
        },
        switchOffAutoHideShow: function() {
            X = !1
        },
        ua: G,
        getFlashPlayerVersion: function() {
            return {
                major: G.pv[0],
                minor: G.pv[1],
                release: G.pv[2]
            }
        },
        hasFlashPlayerVersion: y,
        createSWF: function(t, e, r) {
            return G.w3 ? f(t, e, r) : void 0
        },
        showExpressInstall: function(t, e, r, i) {
            G.w3 && a() && h(t, e, r, i)
        },
        removeSWF: function(t) {
            G.w3 && p(t)
        },
        createCSS: function(t, e, r, i) {
            G.w3 && b(t, e, r, i)
        },
        addDomLoadEvent: e,
        addLoadEvent: r,
        getQueryParamValue: function(t) {
            var e = N.location.search || N.location.hash;
            if (e) {
                if (/\?/.test(e) && (e = e.split("?")[1]),
                null == t)
                    return w(e);
                for (var r = e.split("&"), i = 0; i < r.length; i++)
                    if (r[i].substring(0, r[i].indexOf("=")) == t)
                        return w(r[i].substring(r[i].indexOf("=") + 1))
            }
            return ""
        },
        expressInstallCallback: function() {
            if (j) {
                var t = g(B);
                t && E && (t.parentNode.replaceChild(E, t),
                x && (S(x, !0),
                G.ie && G.win && (E.style.display = "block")),
                T && T(_)),
                j = !1
            }
        }
    }
}(), _ec_history = 0, _ec_tests = 10, _ec_debug = 0, mainDomain = getMainDomain() || window.location.hostname, _global_lso, evercookie = function() {
    return this._class = function() {
        var self = this;
        _baseKeyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        this._ec = {};
        var no_color = -1;
        this.get = function(t, e, r) {
            Q(document).ready(function() {
                self._evercookie(t, e, void 0, void 0, r)
            })
        }
        ,
        this.set = function(t, e) {
            Q(document).ready(function() {
                self._evercookie(t, function() {}, e)
            })
        }
        ,
        this._evercookie = function(t, e, r, i, n) {
            if ("undefined" == typeof self._evercookie && (self = this),
            "undefined" == typeof i && (i = 0),
            0 == i && (self.evercookie_database_storage(t, r),
            self._ec.userData = self.evercookie_userdata(t, r),
            self._ec.cookieData = self.evercookie_cookie(t, r),
            self._ec.localData = self.evercookie_local_storage(t, r),
            self._ec.globalData = self.evercookie_global_storage(t, r),
            self._ec.sessionData = self.evercookie_session_storage(t, r),
            self._ec.windowData = self.evercookie_window(t, r),
            _ec_history && (self._ec.historyData = self.evercookie_history(t, r))),
            "undefined" != typeof r)
                ;
            else if (window.openDatabase && "undefined" == typeof self._ec.dbData && i++ < _ec_tests)
                setTimeout(function() {
                    self._evercookie(t, e, r, i, n)
                }, 30);
            else {
                self._ec.lsoData = self.getFromStr(t, _global_lso),
                _global_lso = void 0,
                self._ec.slData = self.getFromStr(t, _global_isolated),
                _global_isolated = void 0;
                var o = self._ec;
                self._ec = {};
                var s, a = new Array, h = 0;
                for (var c in o)
                    "undefined" != typeof o[c] && "null" != typeof o[c] && "" != o[c] && "null" != o[c] && "undefined" != o[c] && null != o[c] && (a[o[c]] = "undefined" == typeof a[o[c]] ? 1 : a[o[c]] + 1);
                for (var c in a)
                    a[c] > h && (h = a[c],
                    s = c);
                "undefined" != typeof n && 1 == n || s && self.set(t, s),
                "function" == typeof e && e(s, o)
            }
        }
        ,
        this.evercookie_window = function(t, e) {
            try {
                if ("undefined" == typeof e)
                    return this.getFromStr(t, window.name);
                window.name = _ec_replace(window.name, t, e)
            } catch (r) {}
        }
        ,
        this.evercookie_userdata = function(t, e) {
            try {
                var r = this.createElem("div", "userdata_el", 1);
                if (r.style.behavior = "url(#default#userData)",
                "undefined" == typeof e)
                    return r.load(t),
                    r.getAttribute(t);
                r.setAttribute(t, e),
                r.save(t)
            } catch (i) {}
        }
        ,
        this.evercookie_cache = function(t, e) {
            if ("undefined" != typeof e) {
                document.cookie = "evercookie_cache=" + e + "; domain=" + mainDomain;
                var r = new Image;
                r.style.visibility = "hidden",
                r.style.position = "absolute",
                r.src = "php/evercookie_cache.php?name=" + t
            } else {
                var i = this.getFromStr("evercookie_cache", document.cookie);
                self._ec.cacheData = void 0,
                document.cookie = "evercookie_cache=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/; domain=" + mainDomain,
                Q.ajax({
                    url: "php/evercookie_cache.php?name=" + t,
                    success: function(t) {
                        document.cookie = "evercookie_cache=" + i + "; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/; domain=" + mainDomain,
                        self._ec.cacheData = t
                    }
                })
            }
        }
        ,
        this.evercookie_etag = function(t, e) {
            if ("undefined" != typeof e) {
                document.cookie = "evercookie_etag=" + e + "; domain=" + mainDomain;
                var r = new Image;
                r.style.visibility = "hidden",
                r.style.position = "absolute",
                r.src = "php/evercookie_etag.php?name=" + t
            } else {
                var i = this.getFromStr("evercookie_etag", document.cookie);
                self._ec.etagData = void 0,
                document.cookie = "evercookie_etag=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/; domain=" + mainDomain,
                Q.ajax({
                    url: "php/evercookie_etag.php?name=" + t,
                    success: function(t) {
                        document.cookie = "evercookie_etag=" + i + "; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/; domain=" + mainDomain,
                        self._ec.etagData = t
                    }
                })
            }
        }
        ,
        this.evercookie_lso = function(t, e) {
            var r = document.getElementById("swfcontainer");
            r || (r = document.createElement("div"),
            r.setAttribute("id", "swfcontainer"),
            document.body.appendChild(r));
            var i = {};
            "undefined" != typeof e && (i.everdata = t + "=" + e);
            var n = {};
            n.swliveconnect = "true";
            var o = {};
            o.id = "myswf",
            o.name = "myswf";
            var s = /^https/.test(location.href) ? "https:" : "http:";
            swfobject.embedSWF(s + "//security.iqiyi.com/static/cook/v1/cook.swf", "swfcontainer", "1", "1", "9.0.0", !1, i, n, o)
        }
        ,
        this.evercookie_png = function(t, e) {
            if (document.createElement("canvas").getContext)
                if ("undefined" != typeof e) {
                    document.cookie = "evercookie_png=" + e + "; domain=" + mainDomain;
                    var r = new Image;
                    r.style.visibility = "hidden",
                    r.style.position = "absolute",
                    r.src = "php/evercookie_png.php?name=" + t
                } else {
                    self._ec.pngData = void 0;
                    var i = document.createElement("canvas");
                    i.style.visibility = "hidden",
                    i.style.position = "absolute",
                    i.width = 200,
                    i.height = 1;
                    var n = i.getContext("2d")
                      , o = this.getFromStr("evercookie_png", document.cookie);
                    document.cookie = "evercookie_png=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/; domain=" + mainDomain;
                    var r = new Image;
                    r.style.visibility = "hidden",
                    r.style.position = "absolute",
                    r.src = "php/evercookie_png.php?name=" + t,
                    r.onload = function() {
                        document.cookie = "evercookie_png=" + o + "; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/; domain=" + mainDomain,
                        self._ec.pngData = "",
                        n.drawImage(r, 0, 0);
                        for (var t = n.getImageData(0, 0, 200, 1), e = t.data, i = 0, s = e.length; i < s && 0 != e[i] && (self._ec.pngData += String.fromCharCode(e[i]),
                        0 != e[i + 1]) && (self._ec.pngData += String.fromCharCode(e[i + 1]),
                        0 != e[i + 2]); i += 4)
                            self._ec.pngData += String.fromCharCode(e[i + 2])
                    }
                }
        }
        ,
        this.evercookie_local_storage = function(t, e) {
            try {
                if (window.localStorage) {
                    if ("undefined" == typeof e)
                        return localStorage.getItem(t);
                    localStorage.setItem(t, e)
                }
            } catch (r) {}
        }
        ,
        this.evercookie_database_storage = function(t, e) {
            try {
                if (window.openDatabase) {
                    var r = window.openDatabase("sqlite_evercookie", "", "evercookie", 1048576);
                    "undefined" != typeof e ? r.transaction(function(r) {
                        r.executeSql("CREATE TABLE IF NOT EXISTS cache(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, value TEXT NOT NULL, UNIQUE (name))", [], function(t, e) {}, function(t, e) {}),
                        r.executeSql("INSERT OR REPLACE INTO cache(name, value) VALUES(?, ?)", [t, e], function(t, e) {}, function(t, e) {})
                    }) : r.transaction(function(e) {
                        e.executeSql("SELECT value FROM cache WHERE name=?", [t], function(t, e) {
                            e.rows.length >= 1 ? self._ec.dbData = e.rows.item(0).value : self._ec.dbData = ""
                        }, function(t, e) {})
                    })
                }
            } catch (i) {}
        }
        ,
        this.evercookie_session_storage = function(t, e) {
            try {
                if (window.sessionStorage) {
                    if ("undefined" == typeof e)
                        return sessionStorage.getItem(t);
                    sessionStorage.setItem(t, e)
                }
            } catch (r) {}
        }
        ,
        this.evercookie_global_storage = function(name, value) {
            if (window.globalStorage) {
                var host = this.getHost();
                try {
                    if ("undefined" == typeof value)
                        return eval("globalStorage[host]." + name);
                    eval("globalStorage[host]." + name + " = value")
                } catch (e) {}
            }
        }
        ,
        this.evercookie_silverlight = function(t, e) {
            var r = "evercookie.xap"
              , i = "4.0.50401.0"
              , n = "";
            "undefined" != typeof e && (n = '<param name="initParams" value="' + t + "=" + e + '" />');
            var o = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="mysilverlight" width="0" height="0">' + n + '<param name="source" value="' + r + '"/><param name="onLoad" value="onSilverlightLoad"/><param name="onError" value="onSilverlightError"/><param name="background" value="Transparent"/><param name="windowless" value="true"/><param name="minRuntimeVersion" value="' + i + '"/><param name="autoUpgrade" value="false"/></object>';
            document.body.innerHTML += o
        }
        ,
        this.encode = function(t) {
            var e, r, i, n, o, s, a, h = "", c = 0;
            for (t = this._utf8_encode(t); c < t.length; )
                e = t.charCodeAt(c++),
                r = t.charCodeAt(c++),
                i = t.charCodeAt(c++),
                n = e >> 2,
                o = (3 & e) << 4 | r >> 4,
                s = (15 & r) << 2 | i >> 6,
                a = 63 & i,
                isNaN(r) ? s = a = 64 : isNaN(i) && (a = 64),
                h = h + _baseKeyStr.charAt(n) + _baseKeyStr.charAt(o) + _baseKeyStr.charAt(s) + _baseKeyStr.charAt(a);
            return h
        }
        ,
        this.decode = function(t) {
            var e, r, i, n, o, s, a, h = "", c = 0;
            for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); c < t.length; )
                n = _baseKeyStr.indexOf(t.charAt(c++)),
                o = _baseKeyStr.indexOf(t.charAt(c++)),
                s = _baseKeyStr.indexOf(t.charAt(c++)),
                a = _baseKeyStr.indexOf(t.charAt(c++)),
                e = n << 2 | o >> 4,
                r = (15 & o) << 4 | s >> 2,
                i = (3 & s) << 6 | a,
                h += String.fromCharCode(e),
                64 != s && (h += String.fromCharCode(r)),
                64 != a && (h += String.fromCharCode(i));
            return h = this._utf8_decode(h)
        }
        ,
        this._utf8_encode = function(t) {
            t = t.replace(/\r\n/g, "\n");
            for (var e = "", r = 0; r < t.length; r++) {
                var i = t.charCodeAt(r);
                i < 128 ? e += String.fromCharCode(i) : i > 127 && i < 2048 ? (e += String.fromCharCode(i >> 6 | 192),
                e += String.fromCharCode(63 & i | 128)) : (e += String.fromCharCode(i >> 12 | 224),
                e += String.fromCharCode(i >> 6 & 63 | 128),
                e += String.fromCharCode(63 & i | 128))
            }
            return e
        }
        ,
        this._utf8_decode = function(t) {
            for (var e = "", r = 0, i = c1 = c2 = 0; r < t.length; )
                i = t.charCodeAt(r),
                i < 128 ? (e += String.fromCharCode(i),
                r++) : i > 191 && i < 224 ? (c2 = t.charCodeAt(r + 1),
                e += String.fromCharCode((31 & i) << 6 | 63 & c2),
                r += 2) : (c2 = t.charCodeAt(r + 1),
                c3 = t.charCodeAt(r + 2),
                e += String.fromCharCode((15 & i) << 12 | (63 & c2) << 6 | 63 & c3),
                r += 3);
            return e
        }
        ,
        this.evercookie_history = function(t, e) {
            var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=-"
              , i = r.split("")
              , n = "http://www.google.com/evercookie/cache/" + this.getHost() + "/" + t;
            if ("undefined" != typeof e) {
                if (this.hasVisited(n))
                    return;
                this.createIframe(n, "if"),
                n += "/";
                for (var o = this.encode(e).split(""), s = 0; s < o.length; s++)
                    n += o[s],
                    this.createIframe(n, "if" + s);
                n += "-",
                this.createIframe(n, "if_")
            } else if (this.hasVisited(n)) {
                n += "/";
                for (var a = "", h = "", c = 1; "-" != a && 1 == c; ) {
                    c = 0;
                    for (var s = 0; s < i.length; s++)
                        if (this.hasVisited(n + i[s])) {
                            a = i[s],
                            "-" != a && (h += a),
                            n += a,
                            c = 1;
                            break
                        }
                }
                return this.decode(h)
            }
        }
        ,
        this.createElem = function(t, e, r) {
            var i;
            return i = "undefined" != typeof e && document.getElementById(e) ? document.getElementById(e) : document.createElement(t),
            i.style.visibility = "hidden",
            i.style.position = "absolute",
            e && i.setAttribute("id", e),
            r && document.body.appendChild(i),
            i
        }
        ,
        this.createIframe = function(t, e) {
            var r = this.createElem("iframe", e, 1);
            return r.setAttribute("src", t),
            r
        }
        ,
        this.waitForSwf = function(t) {
            "undefined" == typeof t ? t = 0 : t++,
            t < _ec_tests && "undefined" == typeof swfobject && setTimeout(function() {
                waitForSwf(t)
            }, 300)
        }
        ,
        this.evercookie_cookie = function(t, e) {
            return "undefined" == typeof e ? this.getFromStr(t, document.cookie) : (document.cookie = t + "=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/; domain=" + mainDomain,
            void (document.cookie = t + "=" + e + "; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/; domain=" + mainDomain))
        }
        ,
        this.getFromStr = function(t, e) {
            if ("string" == typeof e)
                for (var r = t + "=", i = e.split(/[;&]/), n = 0; n < i.length; n++) {
                    for (var o = i[n]; " " == o.charAt(0); )
                        o = o.substring(1, o.length);
                    if (0 == o.indexOf(r))
                        return o.substring(r.length, o.length)
                }
        }
        ,
        this.getHost = function() {
            var t = document.location.host;
            return 0 == t.indexOf("www.") && (t = t.replace("www.", "")),
            t
        }
        ,
        this.toHex = function(t) {
            for (var e, r = "", i = t.length, n = 0; n < i; ) {
                for (e = t.charCodeAt(n++).toString(16); e.length < 2; )
                    e = "0" + e;
                r += e
            }
            return r
        }
        ,
        this.fromHex = function(t) {
            for (var e, r = "", i = t.length; i >= 0; )
                e = i - 2,
                r = String.fromCharCode("0x" + t.substring(e, i)) + r,
                i = e;
            return r
        }
        ,
        this.hasVisited = function(t) {
            if (this.no_color == -1) {
                var e = this._getRGB("http://samy-was-here-this-should-never-be-visited.com", -1);
                e == -1 && (this.no_color = this._getRGB("http://samy-was-here-" + Math.floor(9999999 * Math.random()) + "rand.com"))
            }
            return 0 == t.indexOf("https:") || 0 == t.indexOf("http:") ? this._testURL(t, this.no_color) : this._testURL("http://" + t, this.no_color) || this._testURL("https://" + t, this.no_color) || this._testURL("http://www." + t, this.no_color) || this._testURL("https://www." + t, this.no_color)
        }
        ;
        var _link = this.createElem("a", "_ec_rgb_link"), created_style, _cssText = "#_ec_rgb_link:visited{display:none;color:#FF0000}";
        try {
            created_style = 1;
            var style = document.createElement("style");
            if (style.styleSheet)
                style.styleSheet.innerHTML = _cssText;
            else if (style.innerHTML)
                style.innerHTML = _cssText;
            else {
                var cssT = document.createTextNode(_cssText);
                style.appendChild(cssT)
            }
        } catch (e) {
            created_style = 0
        }
        this._getRGB = function(t, e) {
            if (e && 0 == created_style)
                return -1;
            _link.href = t,
            _link.innerHTML = t,
            document.body.appendChild(style),
            document.body.appendChild(_link);
            var r;
            return r = document.defaultView ? document.defaultView.getComputedStyle(_link, null).getPropertyValue("color") : _link.currentStyle.color
        }
        ,
        this._testURL = function(t, e) {
            var r = this._getRGB(t);
            return "rgb(255, 0, 0)" == r || "#ff0000" == r ? 1 : e && r != e ? 1 : 0
        }
    }
    ,
    _class
}(), _global_isolated;
!function(t) {
    function e() {
        var t = !1;
        if (navigator.userAgent.indexOf("MSIE") > 0)
            navigator.userAgent.indexOf("MSIE 6.0") > 0 ? t = !0 : navigator.userAgent.indexOf("MSIE 7.0") > 0 ? t = !0 : navigator.userAgent.indexOf("MSIE 8.0") > 0 ? t = !0 : navigator.userAgent.indexOf("MSIE 9.0") > 0 && (t = !0);
        else if (navigator.userAgent.indexOf("Firefox") > 0) {
            var e = window.navigator.userAgent.split("Firefox/")[1];
            t = /^[0|1][0-9]?\./.test(e) || /^2[0-4]?\./.test(e)
        }
        return t
    }
    function r(e) {
        t.__postcooktimeout__ && clearTimeout(t.__postcooktimeout__),
        t.__postcooktimeout__ = setTimeout(function() {
            t.__postcookcallback__ && (e("error: tiemout or cross domain fail with iframePost, please check your domain and server's domain;"),
            t.__postcookcallback__ = null,
            t.__postcooktimeout__ = null)
        }, 6e4)
    }
    var i, n = window.location.hostname, o = /^\w+$/, s = /[\w|-]+\.+[\w|-]+$/, a = /^\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}$/;
    if (o.test(n) || a.test(n))
        i = n;
    else {
        if (!s.test(n))
            return void (window.console && console.error("Error: your page not in a validate host"));
        i = n.match(s)[0]
    }
    document.domain = i,
    t.__postcooktimeout__ = null,
    t.__postcookcallback__ = null;
    var h = function(e, r, i) {
        t.__postcookcallback__ = i || function() {}
        ;
        var n = document.getElementById("__postcookpostiframe__");
        n && document.body.removeChild(n);
        var o = document.getElementById("__postcookpostForm__");
        o && document.body.removeChild(o);
        var s = document.createElement("form");
        if (s.id = s.name = "__postcookpostForm__",
        r)
            for (var a in r) {
                var h = document.createElement("input");
                h.type = "hidden",
                h.name = a,
                h.value = r[a],
                s.appendChild(h)
            }
        var c = null;
        try {
            c = document.createElement('<iframe name="__postcookpostiframe__">')
        } catch (u) {
            c = document.createElement("iframe")
        }
        c.id = c.name = "__postcookpostiframe__",
        c.width = "1",
        c.height = "1",
        c.style.display = "none",
        document.body.appendChild(c),
        document.body.appendChild(s),
        s.action = e,
        s.target = c.name,
        s.method = "post",
        setTimeout(function() {
            s.submit()
        }, 0)
    };
    t.iframePost = {
        postJSONP: h,
        shouldIframePost: e,
        handTimeOut: r
    }
}(window),
function(window, ParamQ) {
    function r(t, e, r) { //SET t: name, e: value, r: valid seconds
        var i = 0;
        i = isNaN(r) ? 0 : Number(r);
        var n = (new Date).getTime()
          , o = n + 1e3 * i;
        t && e && EVERCOOKIE.set(t, e + "@" + o + "@" + n)
    }
    function i(t) { // VALIDATE cookie value by time
        if (t && t.length > 0) {
            var e = t.split("@")
              , r = e[2]
              , i = e[1];
            r = isNaN(r) ? 0 : Number(r),
            i = isNaN(i) ? 0 : Number(i);
            var n = (new Date).getTime();
            if (n < i && n > r)
                return !0
        }
        return !1
    }
    function n() { // get env and dfp
        var n, o, a = x, h = [].slice.call(arguments);
        switch (h.length) {
        case 0:
            break;
        case 1:
            "string" == typeof h[0] ? a = h[0] : "function" == typeof h[0] && (n = h[0]);
            break;
        case 2:
            "string" == typeof h[0] ? (a = h[0],
            "function" == typeof h[1] && (n = h[1])) : "function" == typeof h[0] && (n = h[0],
            "function" == typeof h[1] && (o = h[1]));
            break;
        default:
            "string" == typeof h[0] ? (a = h[0],
            "function" == typeof h[1] && (n = h[1],
            "function" == typeof h[2] && (o = h[2]))) : "function" == typeof h[0] && (n = h[0],
            "function" == typeof h[1] && (o = h[1]))
        }
        return a ? void EVERCOOKIE.get(DFP_COOKIE_NAME, function(h, c) {
            var u = null;
            if (h && h.length > 0) {
                var l = h.split("@");
                if (u = l[0],
                i(h))
                    return void s(function(t) {
                        n && n({
                            dfp: l[0],
                            env: t
                        })
                    })
            }
            s(function(i) {
                var s = ""
                  , h = {
                    dim: i,
                    plat: T,
                    ver: _,
                    sig: f(s).toUpperCase(),
                    nifc: !1
                };
                if (u && (h.dfp = u,
                s = u),
                iframePost.shouldIframePost()) {
                    h.nifc = !0;
                    var c, l = location.protocol;
                    if (/^https/.test(l))
                        c = a + "/security/dfp_pcw/sign",
                        s = s + i + h.plat + h.ver,
                        h.sig = f(s).toUpperCase();
                    else {
                        c = a.replace(/^https/, "http") + "/security/dfp_pcw_nosecure/sign";
                        var p = "1"
                          , d = (new Date).getTime()
                          , g = v(16)
                          , b = y(g)
                          , S = m(h.dim, g);
                        h.dim = S,
                        h.cv = p,
                        h.t = d,
                        h.key = b,
                        s = s + S + h.plat + h.ver + p + b + d,
                        h.sig = f(s).toUpperCase()
                    }
                    return iframePost.postJSONP(c, h, function(t) {
                        var e = t;
                        try {
                            e = JSON.parse(t)
                        } catch (o) {}
                        r(DFP_COOKIE_NAME, e.result.dfp, e.result.ttl),
                        n && n({
                            dfp: e.result.dfp,
                            env: i
                        })
                    }),
                    void (o && iframePost.handTimeOut(o))
                }
                s = s + i + h.plat + h.ver,
                h.sig = f(s).toUpperCase(),
                ParamQ.ajax({
                    type: "POST",
                    url: a + "/security/dfp_pcw/sign",
                    data: h
                }).done(function(t) {
                    r(DFP_COOKIE_NAME, t.result.dfp, t.result.ttl),
                    n && n({
                        dfp: t.result.dfp,
                        env: i
                    })
                }).fail(function(e) {
                    window.console && console.log("e", e),
                    o && o(e)
                })
            })
        }) : void (window.console && console.error("Error: server host not defined"))
    }
    function o(n) { // get finger print
        var o, a, h = x, c = [].slice.call(arguments);
        switch (c.length) {
        case 0:
            break;
        case 1:
            "string" == typeof c[0] ? h = c[0] : "function" == typeof c[0] && (o = c[0]);
            break;
        case 2:
            "string" == typeof c[0] ? (h = c[0],
            "function" == typeof c[1] && (o = c[1])) : "function" == typeof c[0] && (o = c[0],
            "function" == typeof c[1] && (a = c[1]));
            break;
        default:
            "string" == typeof c[0] ? (h = c[0],
            "function" == typeof c[1] && (o = c[1],
            "function" == typeof c[2] && (a = c[2]))) : "function" == typeof c[0] && (o = c[0],
            "function" == typeof c[1] && (a = c[1]))
        }
        return h ? void EVERCOOKIE.get(DFP_COOKIE_NAME, function(t, n) {
            var c = null;
            if (t && t.length > 0) {
                var u = t.split("@");
                if (c = u[0],
                i(t) && o)
                    return void o(u[0])
            }
            s(function(t) {
                var i = ""
                  , n = {
                    dim: t,
                    plat: T,
                    ver: _,
                    sig: f(i).toUpperCase(),
                    nifc: !1
                };
                if (c && (n.dfp = c,
                i = c),
                iframePost.shouldIframePost()) {
                    n.nifc = !0;
                    var s, u = location.protocol;
                    if (/^https/.test(u))
                        s = h + "/security/dfp_pcw/sign",
                        i = i + t + n.plat + n.ver,
                        n.sig = f(i).toUpperCase();
                    else {
                        s = h.replace(/^https/, "http") + "/security/dfp_pcw_nosecure/sign";
                        var l = "1"
                          , p = (new Date).getTime()
                          , d = v(16)
                          , g = y(d)
                          , b = m(n.dim, d);
                        n.dim = b,
                        n.cv = l,
                        n.t = p,
                        n.key = g,
                        i = i + b + n.plat + n.ver + l + g + p,
                        n.sig = f(i).toUpperCase()
                    }
                    return iframePost.postJSONP(s, n, function(t) {
                        var e = t;
                        try {
                            e = JSON.parse(t)
                        } catch (i) {}
                        r(DFP_COOKIE_NAME, e.result.dfp, e.result.ttl),
                        o && o(e.result.dfp)
                    }),
                    void (a && iframePost.handTimeOut(a))
                }
                i = i + t + n.plat + n.ver,
                n.sig = f(i).toUpperCase(),
                ParamQ.ajax({
                    type: "POST",
                    url: h + "/security/dfp_pcw/sign",
                    data: n
                }).done(function(t) {
                    r(DFP_COOKIE_NAME, t.result.dfp, t.result.ttl),
                    o && o(t.result.dfp)
                }).fail(function(t) {
                    a && a(t)
                })
            })
        }) : void (window.console && console.error("Error: server host not defined"))
    }
    function s(t) { // get env info
        (new Fingerprint2).get(function(e, r) {
            r.push({
                key: "au",
                value: navigator.cookieEnabled
            });
            var i = c(E);
            i || (i = u(),
            h(E, i, 3650)),
            r.push({
                key: "mi",
                value: i
            }),
            r.push({
                key: "cl",
                value: T
            }),
            r.push({
                key: "sv",
                value: _
            });
            for (var n = {}, o = 0; o < r.length; o++)
                "wr" === r[o].key || "wg" === r[o].key ? n[r[o].key] = md5(r[o].value) : n[r[o].key] = r[o].value;
            t && t(d(JSON.stringify(n)))
        })
    }
    function a(t) {
        return x = t
    }
    function h(t, e, r) { // write cookie
        var i = new Date;
        i.setTime(i.getTime() + 24 * r * 60 * 60 * 1e3);
        var n = "expires=" + i.toGMTString();
        document.cookie = t + "=" + e + "; " + n
    }
    function c(t) { // get cookie value
        for (var e = t + "=", r = document.cookie.split(";"), i = 0; i < r.length; i++) {
            for (var n = r[i]; " " == n.charAt(0); )
                n = n.substring(1);
            if (0 == n.indexOf(e))
                return n.substring(e.length, n.length)
        }
        return ""
    }
    function u() {
        function t() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
    }
    function f(t) {
        var e = new jsSHA("SHA-1","TEXT");
        return e.setHMACKey("eade56028e252b77f7a0b8792e58b9cc", "TEXT"),
        e.update(t),
        e.getHMAC("HEX")
    }
    function l(t) {
        var e, r, i, n, o, s;
        for (i = t.length,
        r = 0,
        e = ""; r < i; ) {
            if (n = 255 & t.charCodeAt(r++),
            r == i) {
                e += R.charAt(n >> 2),
                e += R.charAt((3 & n) << 4),
                e += "==";
                break
            }
            if (o = t.charCodeAt(r++),
            r == i) {
                e += R.charAt(n >> 2),
                e += R.charAt((3 & n) << 4 | (240 & o) >> 4),
                e += R.charAt((15 & o) << 2),
                e += "=";
                break
            }
            s = t.charCodeAt(r++),
            e += R.charAt(n >> 2),
            e += R.charAt((3 & n) << 4 | (240 & o) >> 4),
            e += R.charAt((15 & o) << 2 | (192 & s) >> 6),
            e += R.charAt(63 & s)
        }
        return e
    }
    function p(t) {
        var e, r, i, n;
        for (e = "",
        i = t.length,
        r = 0; r < i; r++)
            n = t.charCodeAt(r),
            n >= 1 && n <= 127 ? e += t.charAt(r) : n > 2047 ? (e += String.fromCharCode(224 | n >> 12 & 15),
            e += String.fromCharCode(128 | n >> 6 & 63),
            e += String.fromCharCode(128 | n >> 0 & 63)) : (e += String.fromCharCode(192 | n >> 6 & 31),
            e += String.fromCharCode(128 | n >> 0 & 63));
        return e
    }
    function d(t) {
        return l(p(t))
    }
    function g() {
        return A = (9301 * A + 49297) % 233280,
        A / 233280
    }
    function v(t) {
        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
        A = (new Date).getTime();
        for (var r = "", i = 0; i < t; i++) {
            var n = C(e.length) - 1;
            r += e[n]
        }
        return r
    }
    function m(t, e) {
        var r = CryptoJS.enc.Latin1.parse(e)
          , i = CryptoJS.enc.Latin1.parse("vVF31eisrKUHHFL1")
          , n = CryptoJS.AES.encrypt(t, r, {
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.ZeroPadding,
            iv: i
        });
        return n.toString()
    }
    function y(t) {
        var e = new JSEncrypt;
        return e.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCaTJ/CJ9QR8TuFpQs/KCSeAOvgQXFX52S1DBoycFXMrKS3B0W2gGo77eXeXOR2yk33IdhCbVPbTDbjkQdG1L4jaB2iJdgg3WT4IkLW6wHrsf9mumPpWMi6Z5Pe6h0UrtBYa6BQIU9ENo3XmPv2jVvfIyoYEld0xmtP3wSelYakJQIDAQAB"),
        e.encrypt(t)
    }
    function b() {
        r(DFP_COOKIE_NAME, "0", 0)
    }
    window.dfp && window.console && console.log("window.dfp should be initialized only once");
    var EVERCOOKIE = new evercookie
      , DFP_COOKIE_NAME = "__dfp"
      , E = "__uuid"
      , x = ""
      , T = "PCWEB"
      , _ = "1.0";
    /iqiyi.com/.test(window.location.host) ? x = "https://cook.iqiyi.com" : /pps.tv/.test(window.location.host) && (x = "https://cook.pps.tv");
    var A, R = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", C = (new Array((-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),62,(-1),(-1),(-1),63,52,53,54,55,56,57,58,59,60,61,(-1),(-1),(-1),(-1),(-1),(-1),(-1),0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,(-1),(-1),(-1),(-1),(-1),(-1),26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,(-1),(-1),(-1),(-1),(-1)),
    function(t) {
        return Math.ceil(g() * t)
    }
    );
    window.dfp = {
        getFingerPrint: o,
        getEnvInfo: s,
        getEnvAndDfp: n,
        setServerHost: a,
        __abolishDfp__: b
    }
}(window, Q);
