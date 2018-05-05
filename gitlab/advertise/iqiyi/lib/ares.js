/*! @cupid/ares@3.21.0 by iQiyi, Wed Jun 14 2017 16:50:18 GMT+0800 (CST) */
!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ares = t() : e.ares = t()
}(this, function() {
    return function(e) {
        function t(i) {
            if (n[i])
                return n[i].exports;
            var r = n[i] = {
                exports: {},
                id: i,
                loaded: !1
            };
            return e[i].call(r.exports, r, r.exports, t),
            r.loaded = !0,
            r.exports
        }
        var n = {};
        window.ares_require = t;
        return t.m = e,
        t.c = n,
        t.p = "",
        t(0)
    }([function(e, t, n) {
        e.exports = n(4)
    }
    , , , , function(e, t, n) {
        (function(t, i) {
            function r() {
                f.ctx = h,
                f.open(),
                f.overwriteQueue(p),
                a(),
                window.CupidAdSdk = o,
                v.init()
            }
            function o(e, n) {
                n = t.extend({}, n, {
                    adPlayerId: e,
                    locale: t.get(window, "Q.PageInfo.i18n")
                }),
                h.init(n)
            }
            function a() {
                "function" == typeof i.define && (s() || i.define("ares", function() {
                    return o
                }))
            }
            function s() {
                return null != document.getElementById("flashbox")
            }
            var c = n(16)("index")
              , u = n(21)
              , l = n(104)
              , d = n(58)
              , p = "aresqueue"
              , f = n(106)(t.get(i, [p, "q"]))
              , h = new u({},d)
              , v = new l(h);
            i.ares3 = e.exports = h,
            i.aresprint = function() {
                c(d)
            }
            ,
            r()
        }
        ).call(t, n(5), function() {
            return this
        }())
    }
    , function(e, t, n) {
        e.exports = n(6)
    }
    , function(e, t, n) {
        (function(t) {
            function t(e) {
                return this instanceof t ? (this.__value = e,
                void (this.__chain = !1)) : new t(e)
            }
            var i = n(7);
            e.exports = i.extend(t, i),
            n(9),
            n(10),
            n(11),
            n(13),
            n(14),
            n(15),
            t.mixin(t, t)
        }
        ).call(t, n(5))
    }
    , function(e, t, n) {
        function i(e) {
            if (null != e)
                return e.length
        }
        function r(e, t) {
            var n = i(e);
            if (n && f.fn(t))
                for (var r = 0; r < n && !1 !== t(e[r], r, e); r++)
                    ;
            return e
        }
        function o(e, t) {
            var n = -1;
            return r(e, function(e, i, r) {
                if (t(e, i, r))
                    return n = i,
                    !1
            }),
            n
        }
        function a(e) {
            var t = [];
            return r(e, function(e) {
                t.push(e)
            }),
            t
        }
        function s(e) {
            if (e) {
                var t = h.call(arguments, 1);
                r(t, function(t) {
                    d(t, function(t, n) {
                        f.undef(t) || (e[n] = t)
                    })
                })
            }
            return e
        }
        function c(e) {
            return function() {
                return !e.apply(this, arguments)
            }
        }
        function u(e, t) {
            return f.string(e) ? e.indexOf(t) : o(e, function(e) {
                return t === e
            })
        }
        function l(e, t, n) {
            return r(e, function(i, r) {
                n = t(n, i, r, e)
            }),
            n
        }
        function d(e, t) {
            if (e)
                for (var n in e)
                    if (f.owns(e, n) && !1 === t(e[n], n, e))
                        break;
            return e
        }
        function p(e) {
            var t = [];
            return d(e, function(e, n) {
                t.push(n)
            }),
            t
        }
        var f = n(8)
          , h = [].slice
          , v = t;
        v.is = f,
        v.extend = v.assign = s,
        v.each = r,
        v.map = function(e, t) {
            var n = [];
            return r(e, function(e, i, r) {
                n[i] = t(e, i, r)
            }),
            n
        }
        ,
        v.filter = function(e, t) {
            var n = [];
            return r(e, function(e, i, r) {
                var o = t(e, i, r);
                o && n.push(e)
            }),
            n
        }
        ,
        v.some = function(e, t) {
            return -1 != o(e, t)
        }
        ,
        v.every = function(e, t) {
            return -1 == o(e, c(t))
        }
        ,
        v.reduce = l,
        v.findIndex = o,
        v.find = function(e, t) {
            var n = v.findIndex(e, t);
            if (-1 != n)
                return e[n]
        }
        ,
        v.indexOf = u,
        v.includes = function(e, t) {
            return -1 != u(e, t)
        }
        ,
        v.toArray = a,
        v.slice = function(e, t, n) {
            var r = []
              , o = i(e);
            return o >= 0 && (t = t || 0,
            n = n || o,
            f.fn(e.slice) || (e = a(e)),
            r = e.slice(t, n)),
            r
        }
        ,
        v.negate = c,
        v.forIn = d,
        v.keys = p;
        var m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        v.trim = function(e) {
            return null == e ? "" : ("" + e).replace(m, "")
        }
        ,
        v.noop = function() {}
        ,
        v.len = i
    }
    , function(e, t) {
        (function(e) {
            function n(e) {
                var t = a.toString.call(e);
                return t.substring(8, t.length - 1).toLowerCase()
            }
            function i(e) {
                return typeof e
            }
            function r(e, t) {
                return a.hasOwnProperty.call(e, t)
            }
            var o = t
              , a = Object.prototype
              , s = e.navigator;
            o.browser = function() {
                return !(o.wechatApp() || !s || e.window != e)
            }
            ,
            o.h5 = function() {
                return !(!o.browser() || !s.geolocation)
            }
            ,
            o.mobile = function() {
                return !(!o.browser() || !/mobile/i.test(s.userAgent))
            }
            ,
            o.wechatApp = function() {
                return !("object" != typeof wx || !wx || !o.fn(wx.createVideoContext))
            }
            ,
            o._class = n,
            o._type = i,
            o.owns = r,
            o.nan = function(e) {
                return e !== e
            }
            ,
            o.bool = function(e) {
                return "boolean" == n(e)
            }
            ,
            o.infinite = function(e) {
                return e == 1 / 0 || e == -(1 / 0)
            }
            ,
            o.number = function(e) {
                return !isNaN(e) && "number" == n(e)
            }
            ,
            o.iod = function(e) {
                return !(!o.number(e) || o.infinite(e))
            }
            ,
            o.decimal = function(e) {
                return !!o.iod(e) && 0 != e % 1
            }
            ,
            o.integer = function(e) {
                return !!o.iod(e) && 0 == e % 1
            }
            ,
            o.oof = function(e) {
                if (e) {
                    var t = i(e);
                    return "object" == t || "function" == t
                }
                return !1
            }
            ,
            o.object = function(e) {
                return o.oof(e) && "function" != n(e)
            }
            ,
            o.hash = o.plainObject = function(e) {
                return !(!e || "object" != n(e)) && (!e.nodeType && !e.setInterval)
            }
            ,
            o.undef = function(e) {
                return "undefined" == i(e)
            }
            ,
            o.fn = function(e) {
                return "function" == n(e)
            }
            ,
            o.string = function(e) {
                return "string" == n(e)
            }
            ,
            o.nos = function(e) {
                return o.iod(e) || o.string(e)
            }
            ,
            o.array = function(e) {
                return "array" == n(e)
            }
            ,
            o.arraylike = function(e) {
                if (!o.window(e) && o.object(e)) {
                    var t = e.length;
                    if (o.integer(t) && t >= 0)
                        return !0
                }
                return !1
            }
            ,
            o.window = function(e) {
                return !(!e || e.window != e)
            }
            ,
            o.empty = function(e) {
                if (o.string(e) || o.arraylike(e))
                    return 0 === e.length;
                if (o.hash(e))
                    for (var t in e)
                        if (r(e, t))
                            return !1;
                return !0
            }
            ,
            o.element = function(e) {
                return !(!e || 1 !== e.nodeType)
            }
            ,
            o.regexp = function(e) {
                return "regexp" == n(e)
            }
        }
        ).call(t, function() {
            return this
        }())
    }
    , function(e, t, n) {
        function i(e, t) {
            var n = []
              , i = r.len(t);
            if (i)
                for (t = t.sort(function(e, t) {
                    return e - t
                }); i--; ) {
                    var o = t[i];
                    n.push(c.splice.call(e, o, 1)[0])
                }
            return n.reverse(),
            n
        }
        var r = e.exports = n(6)
          , o = r.each
          , a = r.includes
          , s = r.is
          , c = Array.prototype;
        r.reject = function(e, t) {
            return r.filter(e, function(e, n, i) {
                return !t(e, n, i)
            })
        }
        ,
        r.without = function(e) {
            var t = r.slice(arguments, 1);
            return r.difference(e, t)
        }
        ,
        r.difference = function(e, t) {
            var n = [];
            return r.each(e, function(e) {
                a(t, e) || n.push(e)
            }),
            n
        }
        ,
        r.pluck = function(e, t) {
            return r.map(e, function(e) {
                if (e)
                    return e[t]
            })
        }
        ,
        r.size = function(e) {
            var t = r.len(e);
            return null == t && (t = r.keys(e).length),
            t
        }
        ,
        r.first = function(e) {
            if (e)
                return e[0]
        }
        ,
        r.last = function(e) {
            var t = r.len(e);
            if (t)
                return e[t - 1]
        }
        ,
        r.asyncMap = function(e, t, n) {
            var i, r, a = [], s = 0;
            o(e, function(o, c) {
                r = !0,
                t(o, function(t, r) {
                    if (!i) {
                        if (s++,
                        t)
                            return i = !0,
                            n(t);
                        a[c] = r,
                        s == e.length && (i = !0,
                        n(null, a))
                    }
                })
            }),
            r || n(null)
        }
        ,
        r.uniq = function(e) {
            return r.uniqBy(e)
        }
        ,
        r.uniqBy = function(e, t) {
            var n = []
              , i = [];
            return s.fn(t) || (t = null),
            o(e, function(e) {
                var r = e;
                t && (r = t(e)),
                a(i, r) || (i.push(r),
                n.push(e))
            }),
            n
        }
        ,
        r.flatten = function(e) {
            var t = [];
            return o(e, function(e) {
                s.arraylike(e) ? o(e, function(e) {
                    t.push(e)
                }) : t.push(e)
            }),
            t
        }
        ,
        r.union = function() {
            return r.uniq(r.flatten(arguments))
        }
        ,
        r.sample = function(e, t) {
            for (var n = r.toArray(e), i = n.length, o = Math.min(t || 1, i), a = 0; a < i; a++) {
                var s = r.random(a, i - 1)
                  , c = n[s];
                n[s] = n[a],
                n[a] = c
            }
            return n.length = o,
            null == t ? n[0] : n
        }
        ,
        r.shuffle = function(e) {
            return r.sample(e, 1 / 0)
        }
        ,
        r.compact = function(e) {
            return r.filter(e, r.identity)
        }
        ,
        r.rest = function(e) {
            return r.slice(e, 1)
        }
        ,
        r.invoke = function() {
            var e = arguments
              , t = e[0]
              , n = e[1]
              , i = s.fn(n);
            return e = r.slice(e, 2),
            r.map(t, function(t) {
                if (i)
                    return n.apply(t, e);
                if (null != t) {
                    var r = t[n];
                    if (s.fn(r))
                        return r.apply(t, e)
                }
            })
        }
        ,
        r.partition = function(e, t) {
            var n = r.groupBy(e, function(e, n, i) {
                var r = t(e, n, i);
                return r ? 1 : 2
            });
            return [n[1] || [], n[2] || []]
        }
        ,
        r.groupBy = function(e, t) {
            var n = {};
            return r.each(e, function(e, i, r) {
                var o = t(e, i, r);
                n[o] = n[o] || [],
                n[o].push(e)
            }),
            n
        }
        ,
        r.range = function() {
            var e = arguments;
            if (e.length < 2)
                return r.range(e[1], e[0]);
            var t = e[0] || 0
              , n = e[1] || 0
              , i = e[2];
            s.number(i) || (i = 1);
            var o = n - t;
            0 != i && (o /= i);
            for (var a = [], c = t, u = 0; u < o; u++)
                a.push(c),
                c += i;
            return a
        }
        ,
        r.pullAt = function(e) {
            var t = r.slice(arguments, 1);
            return i(e, t)
        }
        ,
        r.remove = function(e, t) {
            for (var n = r.len(e) || 0, o = []; n--; )
                t(e[n], n, e) && o.push(n);
            return i(e, o)
        }
        ,
        r.fill = function(e, t, n) {}
    }
    , function(e, t, n) {
        function i(e) {
            if (o.array(e))
                return e;
            var t = [];
            return r.tostr(e).replace(s, function(e, n, i, r) {
                var o = n || e;
                i && (o = r.replace(c, "$1")),
                t.push(o)
            }),
            t
        }
        var r = e.exports = n(6)
          , o = r.is
          , a = (r.each,
        r.forIn);
        r.only = function(e, t) {
            return e = e || {},
            o.string(t) && (t = t.split(/ +/)),
            r.reduce(t, function(t, n) {
                return null != e[n] && (t[n] = e[n]),
                t
            }, {})
        }
        ,
        r.values = function(e) {
            return r.map(r.keys(e), function(t) {
                return e[t]
            })
        }
        ,
        r.pick = function(e, t) {
            if (!o.fn(t))
                return r.pick(e, function(e, n) {
                    return n == t
                });
            var n = {};
            return a(e, function(e, i, r) {
                t(e, i, r) && (n[i] = e)
            }),
            n
        }
        ,
        r.functions = function(e) {
            return r.keys(r.pick(e, function(e) {
                return o.fn(e)
            }))
        }
        ,
        r.mapKeys = function(e, t) {
            var n = {};
            return a(e, function(e, i, r) {
                var o = t(e, i, r);
                n[o] = e
            }),
            n
        }
        ,
        r.mapObject = r.mapValues = function(e, t) {
            var n = {};
            return a(e, function(e, i, r) {
                n[i] = t(e, i, r)
            }),
            n
        }
        ,
        r.get = function(e, t) {
            if (t = i(t),
            t.length) {
                var n = r.every(t, function(t) {
                    if (null != e)
                        return e = e[t],
                        !0
                });
                if (n)
                    return e
            }
        }
        ,
        r.has = function(e, t) {
            if (t = i(t),
            t.length) {
                var n = r.every(t, function(t) {
                    if (null != e && o.owns(e, t))
                        return e = e[t],
                        !0
                });
                if (n)
                    return !0
            }
            return !1
        }
        ,
        r.set = function(e, t, n) {
            t = i(t);
            var a = e;
            return r.every(t, function(e, i) {
                if (o.oof(a)) {
                    if (i + 1 != t.length) {
                        var r = a[e];
                        if (null == r) {
                            var r = {};
                            ~~e == e && (r = [])
                        }
                        return a = a[e] = r,
                        !0
                    }
                    a[e] = n
                }
            }),
            e
        }
        ,
        r.create = function() {
            function e() {}
            return function(t, n) {
                return "object" != typeof t && (t = null),
                e.prototype = t,
                r.extend(new e, n)
            }
        }(),
        r.defaults = function() {
            var e = arguments
              , t = e[0]
              , n = r.slice(e, 1);
            return t && r.each(n, function(e) {
                r.mapObject(e, function(e, n) {
                    o.undef(t[n]) && (t[n] = e)
                })
            }),
            t
        }
        ,
        r.isMatch = function(e, t) {
            var n = !0;
            return e = e || {},
            a(t, function(t, i) {
                if (t !== e[i])
                    return n = !1,
                    !1
            }),
            n
        }
        ,
        r.toPlainObject = function(e) {
            var t = {};
            return a(e, function(e, n) {
                t[n] = e
            }),
            t
        }
        ,
        r.invert = function(e) {
            var t = {};
            return a(e, function(e, n) {
                t[e] = n
            }),
            t
        }
        ;
        var s = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g
          , c = /\\(\\)?/g
    }
    , function(e, t, n) {
        function i(e) {
            function t() {
                var t = arguments
                  , i = t[0];
                if (!n.has(i)) {
                    var r = e.apply(this, t);
                    n.set(i, r)
                }
                return n.get(i)
            }
            var n = new i.Cache;
            return t.cache = n,
            t
        }
        var r = e.exports = n(6)
          , o = r.is
          , a = r.slice;
        r.bind = function(e, t) {
            if (o.string(t)) {
                var n = e;
                e = n[t],
                t = n
            }
            if (!o.fn(e))
                return e;
            var i = a(arguments, 2);
            return t = t || this,
            function() {
                return e.apply(t, r.flatten([i, arguments]))
            }
        }
        ,
        r.inherits = function(e, t) {
            e.super_ = t,
            e.prototype = r.create(t.prototype, {
                constructor: e
            })
        }
        ,
        r.delay = function(e, t) {
            var n = r.slice(arguments, 2);
            return setTimeout(function() {
                e.apply(this, n)
            }, t)
        }
        ,
        r.before = function(e, t) {
            return function() {
                if (e > 1)
                    return e--,
                    t.apply(this, arguments)
            }
        }
        ,
        r.once = function(e) {
            return r.before(2, e)
        }
        ,
        r.after = function(e, t) {
            return function() {
                return e > 1 ? void e-- : t.apply(this, arguments)
            }
        }
        ,
        r.throttle = function(e, t, n) {
            return t = t || 0,
            n = r.extend({
                leading: !0,
                trailing: !0,
                maxWait: t
            }, n),
            r.debounce(e, t, n)
        }
        ,
        r.debounce = function(e, t, n) {
            function i() {
                return !(p - l > t) && !(u && p - d > u)
            }
            function o(e, t, n) {
                return l = r.now(),
                e.apply(t, n)
            }
            function a() {
                c && (clearTimeout(c),
                c = null)
            }
            function s() {
                p = r.now();
                var s = i();
                d = p;
                var u = this
                  , l = arguments;
                a(),
                s ? n.trailing && (c = r.delay(function() {
                    o(e, u, l)
                }, t)) : o(e, u, l)
            }
            t = t || 0,
            n = r.extend({
                leading: !1,
                trailing: !0
            }, n);
            var c, u = n.maxWait, l = 0, d = 0, p = r.now();
            return n.leading || (l = p),
            s.cancel = a,
            s
        }
        ,
        i.Cache = n(12),
        r.memoize = i,
        r.wrap = function(e, t) {
            return function() {
                var n = [e];
                return n.push.apply(n, arguments),
                t.apply(this, n)
            }
        }
        ,
        r.curry = function(e) {
            function t(i) {
                return function() {
                    var o = i.concat(r.slice(arguments));
                    return o.length >= n ? (o.length = n,
                    e.apply(this, o)) : t(o)
                }
            }
            var n = e.length;
            return t([])
        }
    }
    , function(e, t, n) {
        function i() {
            this.data = {}
        }
        var r = n(6)
          , o = r.is;
        e.exports = i;
        var a = i.prototype;
        a.has = function(e) {
            return o.owns(this.data, e)
        }
        ,
        a.get = function(e) {
            return this.data[e]
        }
        ,
        a.set = function(e, t) {
            this.data[e] = t
        }
        ,
        a["delete"] = function(e) {
            delete this.data[e]
        }
    }
    , function(e, t, n) {
        var i = e.exports = n(6)
          , r = i.is;
        i.now = function() {
            return +new Date
        }
        ,
        i.constant = function(e) {
            return function() {
                return e
            }
        }
        ,
        i.identity = function(e) {
            return e
        }
        ,
        i.random = function(e, t) {
            return e + Math.floor(Math.random() * (t - e + 1))
        }
        ,
        i.mixin = function(e, t, n) {
            var o = i.functions(t);
            if (e)
                if (r.fn(e)) {
                    n = n || {};
                    var a = (!!n.chain,
                    e.prototype);
                    i.each(o, function(e) {
                        var n = t[e];
                        a[e] = function() {
                            var e = this
                              , t = [e.__value];
                            t.push.apply(t, arguments);
                            var i = n.apply(e, t);
                            return e.__chain ? (e.__value = i,
                            e) : i
                        }
                    })
                } else
                    i.each(o, function(n) {
                        e[n] = t[n]
                    });
            return e
        }
        ,
        i.chain = function(e) {
            var t = i(e);
            return t.__chain = !0,
            t
        }
        ,
        i.value = function() {
            return this.__chain = !1,
            this.__value
        }
    }
    , function(e, t, n) {
        function i(e, t) {
            e = o.tostr(e) || " ";
            var n = Math.floor(t / e.length) + 1;
            return o.repeat(e, n).slice(0, t)
        }
        function r(e) {
            return e || 0 == e ? e + "" : ""
        }
        var o = e.exports = n(6);
        o.tostr = r;
        var a = o.indexOf;
        o.split = function(e, t, n) {
            return e = r(e),
            e.split(t, n)
        }
        ,
        o.capitalize = function(e) {
            return e = r(e),
            e.charAt(0).toUpperCase() + e.substr(1)
        }
        ,
        o.decapitalize = function(e) {
            return e = r(e),
            e.charAt(0).toLowerCase() + e.substr(1)
        }
        ,
        o.camelCase = function(e) {
            e = r(e);
            var t = e.split(/[^\w]|_+/);
            return t = o.map(t, function(e) {
                return o.capitalize(e)
            }),
            o.decapitalize(t.join(""))
        }
        ,
        o.startsWith = function(e, t) {
            return 0 == a(e, t)
        }
        ,
        o.endsWith = function(e, t) {
            return t += "",
            t == o.slice(e, o.len(e) - o.len(t))
        }
        ,
        o.lower = function(e) {
            return r(e).toLowerCase()
        }
        ,
        o.upper = function(e) {
            return r(e).toUpperCase()
        }
        ,
        o.repeat = function(e, t) {
            return o.map(o.range(t), function() {
                return e
            }).join("")
        }
        ,
        o.padStart = function(e, t, n) {
            e = o.tostr(e),
            t = t || 0;
            var r = t - e.length;
            return i(n, r) + e
        }
        ,
        o.padEnd = function(e, t, n) {
            e = o.tostr(e),
            t = t || 0;
            var r = t - e.length;
            return e + i(n, r)
        }
    }
    , function(e, t, n) {
        var i = e.exports = n(6);
        i.sum = function(e) {
            return i.reduce(e, function(e, t) {
                return e + t
            }, 0)
        }
        ,
        i.max = function(e, t) {
            var n = -1
              , r = -(1 / 0);
            return t = t || i.identity,
            i.each(e, function(e, i) {
                e = t(e),
                e > r && (r = e,
                n = i)
            }),
            n > -1 ? e[n] : r
        }
        ,
        i.min = function(e, t) {
            var n = -1
              , r = 1 / 0;
            return t = t || i.identity,
            i.each(e, function(e, i) {
                e = t(e),
                e < r && (r = e,
                n = i)
            }),
            n > -1 ? e[n] : r
        }
    }
    , function(e, t, n) {
        function i(e) {
            return r.getLogger(e).getLevelFunction()
        }
        var r = n(17)
          , o = r.Log
          , a = n(8);
        e.exports = i,
        o.outputers = [o.custom.outputers.color],
        o.prefix = "ad:ares3:",
        a.wechatApp() ? o.setName("*") : o.init("aresde")
    }
    , function(e, t, n) {
        var i = n(18)
          , r = i.getLogger();
        e.exports = t = r
    }
    , function(e, t, n) {
        (function(i) {
            function r(e) {
                var t = this;
                d.string(e) && (e = {
                    name: e
                }),
                e = e || {},
                t.name = e.name || r.defaultName,
                t.enabled = t.isNameMatch(t.name),
                t.Log = r
            }
            function o(e) {
                var t = m.toname(e.level);
                p.console(t, e.data)
            }
            function a(e) {
                e.time = l.now(),
                s(e)
            }
            function s(e) {
                v.push(e),
                v.length > r.MAX_LOG_LEN && v.shift()
            }
            function c(e) {
                e = e || r.defaultName;
                var t = h[e];
                return t || (t = h[e] = new r(e)),
                t
            }
            function u(e) {
                var t = []
                  , n = [];
                return e && d.string(e) && l.each(e.split(/[\s,]+/), function(e) {
                    e = e.replace(/\*/g, ".*?");
                    var i = e.charAt(0);
                    "-" == i ? t.push(new RegExp("^" + l.slice(e, 1) + "$")) : n.push(new RegExp("^" + e + "$"))
                }),
                {
                    skips: t,
                    names: n
                }
            }
            var l = n(5)
              , d = l.is
              , p = n(19);
            e.exports = t = r;
            var f = {
                level: 0,
                MAX_LOG_LEN: 3e3,
                debugKey: "debug",
                defaultLevelName: "log",
                defaultName: "default",
                _name: "",
                prefix: "",
                outputers: [],
                logFilters: [a],
                custom: {
                    outputers: {
                        color: n(20)
                    }
                }
            };
            l.extend(r, f);
            var h = {}
              , v = r.logs = [];
            p.hasConsole() && r.outputers.push(o);
            var m = {
                name2code: {
                    verbose: 0,
                    log: 1,
                    debug: 2,
                    info: 3,
                    warn: 4,
                    error: 5
                },
                toname: function(e) {
                    return d.number(e) && (e = m.code2name[e]),
                    d.string(e) || (e = r.defaultLevelName),
                    e
                },
                tocode: function(e) {
                    return d.string(e) && (e = m.name2code[l.lower(e)]),
                    d.number(e) || (e = m.name2code[r.defaultLevelName]),
                    e
                }
            };
            m.code2name = l.invert(m.name2code),
            r.LEVEL = m,
            r.setLevel = function(e) {
                r.level = m.tocode(e)
            }
            ,
            r.setName = function(e) {
                r._name = e,
                r.pattern = u(e),
                l.forIn(h, function(t) {
                    t.enabled = t.isNameMatch(e)
                })
            }
            ,
            r.getPlainLog = function() {
                return l.map(r.logs, function(e) {
                    return l.map(e.data, function(e) {
                        var t = e;
                        if (i.JSON)
                            try {
                                t = JSON.stringify(e)
                            } catch (n) {
                                t = "[Nested]"
                            }
                        return t
                    }).join(" ")
                }).join("\r\n")
            }
            ,
            r.getLogger = c,
            r.setName(r._name),
            r.setLevel(r.level),
            r.init = function(e) {
                e = e || r.debugKey;
                var t;
                if (i.location) {
                    var n = new RegExp(e + "=(\\S+)")
                      , o = n.exec(i.location.href);
                    o && (t = o[1])
                }
                if (null == t)
                    try {
                        t = localStorage[e]
                    } catch (a) {}
                null == t && i.process && (t = l.get(i, ["process", "env", e])),
                r.setName(t)
            }
            ,
            r.init();
            var g = r.prototype;
            g.getLogger = c,
            g.getLevelFunction = function(e) {
                var t = m.tocode(e)
                  , n = this;
                return function() {
                    n.print(t, arguments)
                }
            }
            ,
            l.each(l.keys(m.name2code), function(e) {
                var t = m.tocode(e);
                r[l.upper(e)] = t,
                g[e] = function() {
                    var e = this;
                    e.print(t, arguments)
                }
            }),
            g.print = function(e, t) {
                var n = this;
                if (n.enabled && e >= r.level) {
                    var i = {
                        level: e,
                        name: n.name,
                        data: t
                    };
                    l.each(r.logFilters, function(e) {
                        e(i, r.lastLog)
                    }),
                    r.lastLog = i,
                    l.each(r.outputers, function(e) {
                        e(i, r)
                    })
                }
            }
            ,
            g.isNameMatch = function(e) {
                function t(t) {
                    return t.test(e)
                }
                var n = r.pattern;
                return !!e && (!l.some(n.skips, t) && !!l.some(n.names, t))
            }
        }
        ).call(t, function() {
            return this
        }())
    }
    , function(e, t) {
        (function(e) {
            t.hasConsole = function() {
                return !!e.console
            }
            ,
            t.console = function(e, t) {
                var n = Function.prototype.apply || console[e].apply;
                n.call(console[e], console, t)
            }
        }
        ).call(t, function() {
            return this
        }())
    }
    , function(e, t, n) {
        function i() {
            return !!u.wechatApp() || !r() && !!u.browser()
        }
        function r() {
            return !(!u.browser() || !/Trident/i.test(navigator.userAgent))
        }
        function o(e, t) {
            var n = c.now()
              , i = n - (s || n)
              , r = "color:" + a(e.name);
            s = n;
            var o = t.prefix + e.name
              , u = "%c" + o + "%c"
              , d = [null, r, f];
            c.each(e.data, function(e) {
                d.push(e),
                u += " %o"
            }),
            d.push(r),
            u += "%c +" + i + "ms",
            d[0] = u,
            l.console("log", d)
        }
        function a(e) {
            return h[e] || (h[e] = d[p++ % d.length]),
            h[e]
        }
        var s, c = n(5), u = c.is, l = n(19), d = "lightseagreen forestgreen goldenrod dodgerblue darkorchid crimson".split(" "), p = 0, f = "color:inherit", h = {};
        e.exports = c.noop,
        l.hasConsole() && (i() ? e.exports = o : e.exports = function(e, t) {
            l.console("log", e.data)
        }
        )
    }
    , function(e, t, n) {
        (function(t, i, r) {
            function o(e, n) {
                var i = this;
                i.setParent(n),
                p.call(i, u),
                t.extend(i, C),
                i.bindNormalEvent(),
                i.bindToolFunc(),
                i.version = i.getVal("sdkVersion"),
                i.adMap = {},
                i.external = I
            }
            function a(e, t) {
                function n() {
                    var n = e.width()
                      , i = n == s;
                    i || (l("video resize", s, "==>", n),
                    t(),
                    s = n)
                }
                i(window).off("resize");
                var r = 5e3
                  , o = 100
                  , a = new b(o,r / o)
                  , s = e.width();
                a.on("timer", n),
                i(window).on("resize", function() {
                    n(),
                    a.reset(),
                    a.start()
                })
            }
            function s(e) {
                var n = e || {};
                return n.episodeId = n.episodeId || n.tvId,
                n.adPlayerId = n.adPlayerId || n.playerId,
                n.isVIP = n.isVIP || n.isVip,
                n = t.extend({
                    isVIP: !1
                }, n)
            }
            function c(e) {
                return h.isAdPlayerId(e) || (l("invalid cid, use default cid"),
                e = E),
                e
            }
            var u = "sdk"
              , l = n(16)(u)
              , d = n(17)
              , p = n(28)
              , f = n(33)
              , h = n(36)
              , v = n(93)
              , m = n(40)
              , g = n(52)
              , y = n(49)
              , b = n(42)
              , x = n(35)
              , w = n(38)
              , T = n(53)
              , k = n(55)
              , I = n(103)
              , C = n(90)
              , P = "uaaUserId adPlayerId passportId videoMidware passportCookie isVIP clientVersion isMacH5 showVoiceIcon locale".split(" ");
            e.exports = o;
            var A = "qc_105136_100610"
              , E = "qc_100001_100226";
            t.inherits(o, p);
            var S = o.prototype;
            S.getSummary = function() {
                var e = this;
                return "sdk: " + e.version
            }
            ,
            S.showSummary = function() {
                var e = this;
                e.$panel = e.$panel || i("<div>").css({
                    position: "fixed",
                    top: 100,
                    right: 100,
                    "min-width": "100px",
                    "min-height": "100px",
                    background: "#fff"
                }).addClass("cupid-summary-panel");
                var t = h.getSummaryTreeInDom(e);
                return e.$panel.empty().append(t),
                e.$panel.show().appendTo("body"),
                e.$panel[0]
            }
            ,
            S.init = function(e) {
                var n = this;
                l("entrance init", e, e.episodeId),
                e = t.extend({}, e),
                e = s(e);
                var i = t.only(e, P);
                if (t.extend(n, i),
                n.locale) {
                    var r = n.locale;
                    r = t.includes(["tw_t", "cn_t"], r) ? "tw" : "cn";
                    var o = m.setLocale(r);
                    l("set locale", n.locale, "get", o)
                }
                t.includes(n.locale, "tw") && (n.adPlayerId = A,
                l("force use tw cid", A)),
                n.adPlayerId = c(n.adPlayerId),
                n.uaaUserId = n.uaaUserId || h.getUaaUserId();
                var a = n.videoMidware;
                a && !n.video && (n.video = new v(a,n),
                n.bindVideoEvent());
                var u = new f(e,n);
                return n.currentView && n.video && !u.isPreload && n.onManualSwitchView(),
                n
            }
            ,
            S.stop = function(e) {
                var n = t.get(e, "videoEventId");
                l("stop view", n);
                var i = this;
                t.remove(i.children, function(e) {
                    return e.videoEventId == n && (e.isCurrentView() && (i.currentView = null),
                    e.abort(),
                    i.video && i.video.enableVideo(),
                    !0)
                })
            }
            ,
            S.onManualSwitchView = function() {
                var e = this
                  , t = e.currentView;
                t && (l("手动切集"),
                e.currentView = null,
                t.abort())
            }
            ,
            S.switchToVideoViewById = function(e) {
                var n = this
                  , i = t.find(n.children, function(t) {
                    return !t.isExpired && t.videoEventId == e
                });
                i && n.switchToVideoView(i)
            }
            ,
            S.switchToVideoView = function(e) {
                if (e && e.isVideoView()) {
                    var n = this;
                    if (n.currentView != e) {
                        n.currentView && (n.lastView = n.currentView,
                        n.lastView.isExpired = !0),
                        n.currentView = e,
                        l("switch to video view", e.episodeId);
                        var i = t.filter(n.children, function(e) {
                            return !(!e.isVideoView() || e == n.currentView)
                        });
                        t.each(i, function(e) {
                            e.abort()
                        }),
                        n.children = t.difference(n.children, i),
                        e.tryPlayPreload()
                    }
                }
            }
            ,
            S.smartGetAd = function(e) {
                var t = this;
                return h.smartGetAd(t, e)
            }
            ,
            S.bindNormalEvent = function() {
                var e = this;
                e.on("bridge", function(t, n, i) {
                    l("bridge", t, n, i);
                    var r = h.getAdById(t, e);
                    r && r.emit("bridge", n, i)
                }),
                e.on("click", function(t) {
                    if (l("click", t),
                    t) {
                        var n = h.getAdById(t.id, e);
                        n && n.emit("clickAndOpen")
                    }
                }),
                e.on("impression", function(t) {
                    if (l("impression", t),
                    t) {
                        var n = h.getAdById(t.id, e);
                        n && n.emit("impression")
                    }
                }),
                e.on("impressionAdZone", function(n) {
                    l("impressionAdZone", n);
                    var i = t.get(n, "adZoneId")
                      , r = e.currentView;
                    r && i && t.each(r.children, function(e) {
                        t.each(e.children, function(e) {
                            e.adZoneId == i && e.sendEmptyTrackingBeforeTimeSlice(1 / 0)
                        })
                    })
                }),
                e.on(e.DEFINITION_SWITCHING_SHOW, function() {
                    e.emit("impressionAdZone", {
                        adZoneId: e.DEFINITION_SWITCHING_SHOW
                    })
                })
            }
            ,
            S.bindVideoEvent = function() {
                l("bind video event");
                var e = this;
                if (e.getVal("isVideoSupportOverlay")) {
                    var n = e.video;
                    n && (n.on("pause", function(t) {
                        var i = h.getActionType(t);
                        if ("controls" == i) {
                            var r = n.currentTime();
                            if (r) {
                                var o = e.currentView;
                                o && null == n.getCurrentAd() && (l("user pause", r),
                                o.pauseTimes++,
                                o.loadPause(),
                                o.pause())
                            }
                        }
                    }),
                    n.on("play", function() {
                        l("play");
                        var i = e.currentView;
                        i && (i.tryStopPauseAd(),
                        t.delay(function() {
                            null == n.getCurrentAd() && i.showAndResume()
                        }))
                    }),
                    e.bindMouseMove())
                }
                return a(e.video.$video, function() {
                    e.resize()
                }),
                e
            }
            ,
            S.resize = function() {
                var e = this;
                e.currentView && e.currentView.resize()
            }
            ,
            S.bindMouseMove = function() {
                var e = this
                  , t = new b(1e3,5)
                  , n = 0;
                t.on("timer", function() {
                    var e = t.repeatCount - t.currentCount;
                    l("mousemove countdown", e + "/" + t.repeatCount)
                }),
                t.on("timerComplete", function() {
                    var t = e.currentView;
                    t && t.tryStopToolbar()
                }),
                e.video.$video.on("mousemove", function() {
                    if (n++,
                    1 == n && setTimeout(function() {
                        n = 0
                    }, 1e3),
                    n >= 10) {
                        var i = e.currentView;
                        i && i.isVideoPlaying && (i.tryPlayToolbar(),
                        n = 0,
                        t.start())
                    }
                    t.currentCount = 0
                })
            }
            ,
            S.unbindMouseMove = function() {
                var e = this;
                e.video.$video.off("mousemove")
            }
            ,
            S.bridgeEmit = function(e, t, n) {
                return this.emit("bridge", e, t, n)
            }
            ,
            S.getUser = function() {
                var e = this
                  , n = t.only(e, "isVIP passportId passportCookie uaaUserId cupidUserId");
                if (e.video) {
                    var i = e.video.getUserInfo();
                    t.extend(n, i)
                }
                return n || {}
            }
            ,
            S.updateUser = function() {
                var e = this
                  , n = e.getUser();
                return l("update user info", n),
                t.extend(e, n),
                n
            }
            ,
            S.bindToolFunc = function() {
                t.extend(this, {
                    md5: y,
                    base64: g,
                    i18n: m,
                    $: i,
                    _: t,
                    qs: x,
                    url: w,
                    byteCode: T,
                    Promise: r,
                    tool: h,
                    log: d
                }, k)
            }
        }
        ).call(t, n(5), n(22), n(23))
    }
    , function(e, t, n) {
        var i, r;
        /*!
	 * jQuery JavaScript Library v1.12.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:17Z
	 */
        !function(t, n) {
            "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                return n(e)
            }
            : n(t)
        }("undefined" != typeof window ? window : this, function(n, o) {
            function a(e) {
                var t = !!e && "length"in e && e.length
                  , n = ge.type(e);
                return "function" !== n && !ge.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            function s(e, t, n) {
                if (ge.isFunction(t))
                    return ge.grep(e, function(e, i) {
                        return !!t.call(e, i, e) !== n
                    });
                if (t.nodeType)
                    return ge.grep(e, function(e) {
                        return e === t !== n
                    });
                if ("string" == typeof t) {
                    if (Ae.test(t))
                        return ge.filter(t, e, n);
                    t = ge.filter(t, e)
                }
                return ge.grep(e, function(e) {
                    return ge.inArray(e, t) > -1 !== n
                })
            }
            function c(e, t) {
                do
                    e = e[t];
                while (e && 1 !== e.nodeType);return e
            }
            function u(e) {
                var t = {};
                return ge.each(e.match(Ve) || [], function(e, n) {
                    t[n] = !0
                }),
                t
            }
            function l() {
                se.addEventListener ? (se.removeEventListener("DOMContentLoaded", d),
                n.removeEventListener("load", d)) : (se.detachEvent("onreadystatechange", d),
                n.detachEvent("onload", d))
            }
            function d() {
                (se.addEventListener || "load" === n.event.type || "complete" === se.readyState) && (l(),
                ge.ready())
            }
            function p(e, t, n) {
                if (void 0 === n && 1 === e.nodeType) {
                    var i = "data-" + t.replace(De, "-$1").toLowerCase();
                    if (n = e.getAttribute(i),
                    "string" == typeof n) {
                        try {
                            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Oe.test(n) ? ge.parseJSON(n) : n)
                        } catch (r) {}
                        ge.data(e, t, n)
                    } else
                        n = void 0
                }
                return n
            }
            function f(e) {
                var t;
                for (t in e)
                    if (("data" !== t || !ge.isEmptyObject(e[t])) && "toJSON" !== t)
                        return !1;
                return !0
            }
            function h(e, t, n, i) {
                if (Me(e)) {
                    var r, o, a = ge.expando, s = e.nodeType, c = s ? ge.cache : e, u = s ? e[a] : e[a] && a;
                    if (u && c[u] && (i || c[u].data) || void 0 !== n || "string" != typeof t)
                        return u || (u = s ? e[a] = ae.pop() || ge.guid++ : a),
                        c[u] || (c[u] = s ? {} : {
                            toJSON: ge.noop
                        }),
                        "object" != typeof t && "function" != typeof t || (i ? c[u] = ge.extend(c[u], t) : c[u].data = ge.extend(c[u].data, t)),
                        o = c[u],
                        i || (o.data || (o.data = {}),
                        o = o.data),
                        void 0 !== n && (o[ge.camelCase(t)] = n),
                        "string" == typeof t ? (r = o[t],
                        null == r && (r = o[ge.camelCase(t)])) : r = o,
                        r
                }
            }
            function v(e, t, n) {
                if (Me(e)) {
                    var i, r, o = e.nodeType, a = o ? ge.cache : e, s = o ? e[ge.expando] : ge.expando;
                    if (a[s]) {
                        if (t && (i = n ? a[s] : a[s].data)) {
                            ge.isArray(t) ? t = t.concat(ge.map(t, ge.camelCase)) : t in i ? t = [t] : (t = ge.camelCase(t),
                            t = t in i ? [t] : t.split(" ")),
                            r = t.length;
                            for (; r--; )
                                delete i[t[r]];
                            if (n ? !f(i) : !ge.isEmptyObject(i))
                                return
                        }
                        (n || (delete a[s].data,
                        f(a[s]))) && (o ? ge.cleanData([e], !0) : ve.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
                    }
                }
            }
            function m(e, t, n, i) {
                var r, o = 1, a = 20, s = i ? function() {
                    return i.cur()
                }
                : function() {
                    return ge.css(e, t, "")
                }
                , c = s(), u = n && n[3] || (ge.cssNumber[t] ? "" : "px"), l = (ge.cssNumber[t] || "px" !== u && +c) && ze.exec(ge.css(e, t));
                if (l && l[3] !== u) {
                    u = u || l[3],
                    n = n || [],
                    l = +c || 1;
                    do
                        o = o || ".5",
                        l /= o,
                        ge.style(e, t, l + u);
                    while (o !== (o = s() / c) && 1 !== o && --a)
                }
                return n && (l = +l || +c || 0,
                r = n[1] ? l + (n[1] + 1) * n[2] : +n[2],
                i && (i.unit = u,
                i.start = l,
                i.end = r)),
                r
            }
            function g(e) {
                var t = Xe.split("|")
                  , n = e.createDocumentFragment();
                if (n.createElement)
                    for (; t.length; )
                        n.createElement(t.pop());
                return n
            }
            function y(e, t) {
                var n, i, r = 0, o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
                if (!o)
                    for (o = [],
                    n = e.childNodes || e; null != (i = n[r]); r++)
                        !t || ge.nodeName(i, t) ? o.push(i) : ge.merge(o, y(i, t));
                return void 0 === t || t && ge.nodeName(e, t) ? ge.merge([e], o) : o
            }
            function b(e, t) {
                for (var n, i = 0; null != (n = e[i]); i++)
                    ge._data(n, "globalEval", !t || ge._data(t[i], "globalEval"))
            }
            function x(e) {
                Fe.test(e.type) && (e.defaultChecked = e.checked)
            }
            function w(e, t, n, i, r) {
                for (var o, a, s, c, u, l, d, p = e.length, f = g(t), h = [], v = 0; v < p; v++)
                    if (a = e[v],
                    a || 0 === a)
                        if ("object" === ge.type(a))
                            ge.merge(h, a.nodeType ? [a] : a);
                        else if (Je.test(a)) {
                            for (c = c || f.appendChild(t.createElement("div")),
                            u = (Ue.exec(a) || ["", ""])[1].toLowerCase(),
                            d = Qe[u] || Qe._default,
                            c.innerHTML = d[1] + ge.htmlPrefilter(a) + d[2],
                            o = d[0]; o--; )
                                c = c.lastChild;
                            if (!ve.leadingWhitespace && Ze.test(a) && h.push(t.createTextNode(Ze.exec(a)[0])),
                            !ve.tbody)
                                for (a = "table" !== u || Ke.test(a) ? "<table>" !== d[1] || Ke.test(a) ? 0 : c : c.firstChild,
                                o = a && a.childNodes.length; o--; )
                                    ge.nodeName(l = a.childNodes[o], "tbody") && !l.childNodes.length && a.removeChild(l);
                            for (ge.merge(h, c.childNodes),
                            c.textContent = ""; c.firstChild; )
                                c.removeChild(c.firstChild);
                            c = f.lastChild
                        } else
                            h.push(t.createTextNode(a));
                for (c && f.removeChild(c),
                ve.appendChecked || ge.grep(y(h, "input"), x),
                v = 0; a = h[v++]; )
                    if (i && ge.inArray(a, i) > -1)
                        r && r.push(a);
                    else if (s = ge.contains(a.ownerDocument, a),
                    c = y(f.appendChild(a), "script"),
                    s && b(c),
                    n)
                        for (o = 0; a = c[o++]; )
                            We.test(a.type || "") && n.push(a);
                return c = null,
                f
            }
            function T() {
                return !0
            }
            function k() {
                return !1
            }
            function I() {
                try {
                    return se.activeElement
                } catch (e) {}
            }
            function C(e, t, n, i, r, o) {
                var a, s;
                if ("object" == typeof t) {
                    "string" != typeof n && (i = i || n,
                    n = void 0);
                    for (s in t)
                        C(e, s, n, i, t[s], o);
                    return e
                }
                if (null == i && null == r ? (r = n,
                i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
                i = void 0) : (r = i,
                i = n,
                n = void 0)),
                r === !1)
                    r = k;
                else if (!r)
                    return e;
                return 1 === o && (a = r,
                r = function(e) {
                    return ge().off(e),
                    a.apply(this, arguments)
                }
                ,
                r.guid = a.guid || (a.guid = ge.guid++)),
                e.each(function() {
                    ge.event.add(this, t, r, i, n)
                })
            }
            function P(e, t) {
                return ge.nodeName(e, "table") && ge.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }
            function A(e) {
                return e.type = (null !== ge.find.attr(e, "type")) + "/" + e.type,
                e
            }
            function E(e) {
                var t = ct.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"),
                e
            }
            function S(e, t) {
                if (1 === t.nodeType && ge.hasData(e)) {
                    var n, i, r, o = ge._data(e), a = ge._data(t, o), s = o.events;
                    if (s) {
                        delete a.handle,
                        a.events = {};
                        for (n in s)
                            for (i = 0,
                            r = s[n].length; i < r; i++)
                                ge.event.add(t, n, s[n][i])
                    }
                    a.data && (a.data = ge.extend({}, a.data))
                }
            }
            function _(e, t) {
                var n, i, r;
                if (1 === t.nodeType) {
                    if (n = t.nodeName.toLowerCase(),
                    !ve.noCloneEvent && t[ge.expando]) {
                        r = ge._data(t);
                        for (i in r.events)
                            ge.removeEvent(t, i, r.handle);
                        t.removeAttribute(ge.expando)
                    }
                    "script" === n && t.text !== e.text ? (A(t).text = e.text,
                    E(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
                    ve.html5Clone && e.innerHTML && !ge.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Fe.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
                    t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                }
            }
            function N(e, t, n, i) {
                t = ue.apply([], t);
                var r, o, a, s, c, u, l = 0, d = e.length, p = d - 1, f = t[0], h = ge.isFunction(f);
                if (h || d > 1 && "string" == typeof f && !ve.checkClone && st.test(f))
                    return e.each(function(r) {
                        var o = e.eq(r);
                        h && (t[0] = f.call(this, r, o.html())),
                        N(o, t, n, i)
                    });
                if (d && (u = w(t, e[0].ownerDocument, !1, e, i),
                r = u.firstChild,
                1 === u.childNodes.length && (u = r),
                r || i)) {
                    for (s = ge.map(y(u, "script"), A),
                    a = s.length; l < d; l++)
                        o = u,
                        l !== p && (o = ge.clone(o, !0, !0),
                        a && ge.merge(s, y(o, "script"))),
                        n.call(e[l], o, l);
                    if (a)
                        for (c = s[s.length - 1].ownerDocument,
                        ge.map(s, E),
                        l = 0; l < a; l++)
                            o = s[l],
                            We.test(o.type || "") && !ge._data(o, "globalEval") && ge.contains(c, o) && (o.src ? ge._evalUrl && ge._evalUrl(o.src) : ge.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ut, "")));
                    u = r = null
                }
                return e
            }
            function q(e, t, n) {
                for (var i, r = t ? ge.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
                    n || 1 !== i.nodeType || ge.cleanData(y(i)),
                    i.parentNode && (n && ge.contains(i.ownerDocument, i) && b(y(i, "script")),
                    i.parentNode.removeChild(i));
                return e
            }
            function V(e, t) {
                var n = ge(t.createElement(e)).appendTo(t.body)
                  , i = ge.css(n[0], "display");
                return n.detach(),
                i
            }
            function j(e) {
                var t = se
                  , n = ft[e];
                return n || (n = V(e, t),
                "none" !== n && n || (pt = (pt || ge("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
                t = (pt[0].contentWindow || pt[0].contentDocument).document,
                t.write(),
                t.close(),
                n = V(e, t),
                pt.detach()),
                ft[e] = n),
                n
            }
            function L(e, t) {
                return {
                    get: function() {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }
            function M(e) {
                if (e in Et)
                    return e;
                for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = At.length; n--; )
                    if (e = At[n] + t,
                    e in Et)
                        return e
            }
            function O(e, t) {
                for (var n, i, r, o = [], a = 0, s = e.length; a < s; a++)
                    i = e[a],
                    i.style && (o[a] = ge._data(i, "olddisplay"),
                    n = i.style.display,
                    t ? (o[a] || "none" !== n || (i.style.display = ""),
                    "" === i.style.display && Be(i) && (o[a] = ge._data(i, "olddisplay", j(i.nodeName)))) : (r = Be(i),
                    (n && "none" !== n || !r) && ge._data(i, "olddisplay", r ? n : ge.css(i, "display"))));
                for (a = 0; a < s; a++)
                    i = e[a],
                    i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
                return e
            }
            function D(e, t, n) {
                var i = It.exec(t);
                return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
            }
            function R(e, t, n, i, r) {
                for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)
                    "margin" === n && (a += ge.css(e, n + $e[o], !0, r)),
                    i ? ("content" === n && (a -= ge.css(e, "padding" + $e[o], !0, r)),
                    "margin" !== n && (a -= ge.css(e, "border" + $e[o] + "Width", !0, r))) : (a += ge.css(e, "padding" + $e[o], !0, r),
                    "padding" !== n && (a += ge.css(e, "border" + $e[o] + "Width", !0, r)));
                return a
            }
            function z(e, t, n) {
                var i = !0
                  , r = "width" === t ? e.offsetWidth : e.offsetHeight
                  , o = yt(e)
                  , a = ve.boxSizing && "border-box" === ge.css(e, "boxSizing", !1, o);
                if (r <= 0 || null == r) {
                    if (r = bt(e, t, o),
                    (r < 0 || null == r) && (r = e.style[t]),
                    vt.test(r))
                        return r;
                    i = a && (ve.boxSizingReliable() || r === e.style[t]),
                    r = parseFloat(r) || 0
                }
                return r + R(e, t, n || (a ? "border" : "content"), i, o) + "px"
            }
            function $(e, t, n, i, r) {
                return new $.prototype.init(e,t,n,i,r)
            }
            function B() {
                return n.setTimeout(function() {
                    St = void 0
                }),
                St = ge.now()
            }
            function H(e, t) {
                var n, i = {
                    height: e
                }, r = 0;
                for (t = t ? 1 : 0; r < 4; r += 2 - t)
                    n = $e[r],
                    i["margin" + n] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e),
                i
            }
            function F(e, t, n) {
                for (var i, r = (Z.tweeners[t] || []).concat(Z.tweeners["*"]), o = 0, a = r.length; o < a; o++)
                    if (i = r[o].call(n, t, e))
                        return i
            }
            function U(e, t, n) {
                var i, r, o, a, s, c, u, l, d = this, p = {}, f = e.style, h = e.nodeType && Be(e), v = ge._data(e, "fxshow");
                n.queue || (s = ge._queueHooks(e, "fx"),
                null == s.unqueued && (s.unqueued = 0,
                c = s.empty.fire,
                s.empty.fire = function() {
                    s.unqueued || c()
                }
                ),
                s.unqueued++,
                d.always(function() {
                    d.always(function() {
                        s.unqueued--,
                        ge.queue(e, "fx").length || s.empty.fire()
                    })
                })),
                1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY],
                u = ge.css(e, "display"),
                l = "none" === u ? ge._data(e, "olddisplay") || j(e.nodeName) : u,
                "inline" === l && "none" === ge.css(e, "float") && (ve.inlineBlockNeedsLayout && "inline" !== j(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")),
                n.overflow && (f.overflow = "hidden",
                ve.shrinkWrapBlocks() || d.always(function() {
                    f.overflow = n.overflow[0],
                    f.overflowX = n.overflow[1],
                    f.overflowY = n.overflow[2]
                }));
                for (i in t)
                    if (r = t[i],
                    Nt.exec(r)) {
                        if (delete t[i],
                        o = o || "toggle" === r,
                        r === (h ? "hide" : "show")) {
                            if ("show" !== r || !v || void 0 === v[i])
                                continue;
                            h = !0
                        }
                        p[i] = v && v[i] || ge.style(e, i)
                    } else
                        u = void 0;
                if (ge.isEmptyObject(p))
                    "inline" === ("none" === u ? j(e.nodeName) : u) && (f.display = u);
                else {
                    v ? "hidden"in v && (h = v.hidden) : v = ge._data(e, "fxshow", {}),
                    o && (v.hidden = !h),
                    h ? ge(e).show() : d.done(function() {
                        ge(e).hide()
                    }),
                    d.done(function() {
                        var t;
                        ge._removeData(e, "fxshow");
                        for (t in p)
                            ge.style(e, t, p[t])
                    });
                    for (i in p)
                        a = F(h ? v[i] : 0, i, d),
                        i in v || (v[i] = a.start,
                        h && (a.end = a.start,
                        a.start = "width" === i || "height" === i ? 1 : 0))
                }
            }
            function W(e, t) {
                var n, i, r, o, a;
                for (n in e)
                    if (i = ge.camelCase(n),
                    r = t[i],
                    o = e[n],
                    ge.isArray(o) && (r = o[1],
                    o = e[n] = o[0]),
                    n !== i && (e[i] = o,
                    delete e[n]),
                    a = ge.cssHooks[i],
                    a && "expand"in a) {
                        o = a.expand(o),
                        delete e[i];
                        for (n in o)
                            n in e || (e[n] = o[n],
                            t[n] = r)
                    } else
                        t[i] = r
            }
            function Z(e, t, n) {
                var i, r, o = 0, a = Z.prefilters.length, s = ge.Deferred().always(function() {
                    delete c.elem
                }), c = function() {
                    if (r)
                        return !1;
                    for (var t = St || B(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, a = 0, c = u.tweens.length; a < c; a++)
                        u.tweens[a].run(o);
                    return s.notifyWith(e, [u, o, n]),
                    o < 1 && c ? n : (s.resolveWith(e, [u]),
                    !1)
                }, u = s.promise({
                    elem: e,
                    props: ge.extend({}, t),
                    opts: ge.extend(!0, {
                        specialEasing: {},
                        easing: ge.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: St || B(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = ge.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(i),
                        i
                    },
                    stop: function(t) {
                        var n = 0
                          , i = t ? u.tweens.length : 0;
                        if (r)
                            return this;
                        for (r = !0; n < i; n++)
                            u.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [u, 1, 0]),
                        s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]),
                        this
                    }
                }), l = u.props;
                for (W(l, u.opts.specialEasing); o < a; o++)
                    if (i = Z.prefilters[o].call(u, e, l, u.opts))
                        return ge.isFunction(i.stop) && (ge._queueHooks(u.elem, u.opts.queue).stop = ge.proxy(i.stop, i)),
                        i;
                return ge.map(l, F, u),
                ge.isFunction(u.opts.start) && u.opts.start.call(e, u),
                ge.fx.timer(ge.extend(c, {
                    elem: e,
                    anim: u,
                    queue: u.opts.queue
                })),
                u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
            }
            function X(e) {
                return ge.attr(e, "class") || ""
            }
            function Q(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t,
                    t = "*");
                    var i, r = 0, o = t.toLowerCase().match(Ve) || [];
                    if (ge.isFunction(n))
                        for (; i = o[r++]; )
                            "+" === i.charAt(0) ? (i = i.slice(1) || "*",
                            (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                }
            }
            function J(e, t, n, i) {
                function r(s) {
                    var c;
                    return o[s] = !0,
                    ge.each(e[s] || [], function(e, s) {
                        var u = s(t, n, i);
                        return "string" != typeof u || a || o[u] ? a ? !(c = u) : void 0 : (t.dataTypes.unshift(u),
                        r(u),
                        !1)
                    }),
                    c
                }
                var o = {}
                  , a = e === nn;
                return r(t.dataTypes[0]) || !o["*"] && r("*")
            }
            function K(e, t) {
                var n, i, r = ge.ajaxSettings.flatOptions || {};
                for (i in t)
                    void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
                return n && ge.extend(!0, e, n),
                e
            }
            function Y(e, t, n) {
                for (var i, r, o, a, s = e.contents, c = e.dataTypes; "*" === c[0]; )
                    c.shift(),
                    void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                    for (a in s)
                        if (s[a] && s[a].test(r)) {
                            c.unshift(a);
                            break
                        }
                if (c[0]in n)
                    o = c[0];
                else {
                    for (a in n) {
                        if (!c[0] || e.converters[a + " " + c[0]]) {
                            o = a;
                            break
                        }
                        i || (i = a)
                    }
                    o = o || i
                }
                if (o)
                    return o !== c[0] && c.unshift(o),
                    n[o]
            }
            function G(e, t, n, i) {
                var r, o, a, s, c, u = {}, l = e.dataTypes.slice();
                if (l[1])
                    for (a in e.converters)
                        u[a.toLowerCase()] = e.converters[a];
                for (o = l.shift(); o; )
                    if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                    !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                    c = o,
                    o = l.shift())
                        if ("*" === o)
                            o = c;
                        else if ("*" !== c && c !== o) {
                            if (a = u[c + " " + o] || u["* " + o],
                            !a)
                                for (r in u)
                                    if (s = r.split(" "),
                                    s[1] === o && (a = u[c + " " + s[0]] || u["* " + s[0]])) {
                                        a === !0 ? a = u[r] : u[r] !== !0 && (o = s[0],
                                        l.unshift(s[1]));
                                        break
                                    }
                            if (a !== !0)
                                if (a && e["throws"])
                                    t = a(t);
                                else
                                    try {
                                        t = a(t)
                                    } catch (d) {
                                        return {
                                            state: "parsererror",
                                            error: a ? d : "No conversion from " + c + " to " + o
                                        }
                                    }
                        }
                return {
                    state: "success",
                    data: t
                }
            }
            function ee(e) {
                return e.style && e.style.display || ge.css(e, "display")
            }
            function te(e) {
                if (!ge.contains(e.ownerDocument || se, e))
                    return !0;
                for (; e && 1 === e.nodeType; ) {
                    if ("none" === ee(e) || "hidden" === e.type)
                        return !0;
                    e = e.parentNode
                }
                return !1
            }
            function ne(e, t, n, i) {
                var r;
                if (ge.isArray(t))
                    ge.each(t, function(t, r) {
                        n || cn.test(e) ? i(e, r) : ne(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
                    });
                else if (n || "object" !== ge.type(t))
                    i(e, t);
                else
                    for (r in t)
                        ne(e + "[" + r + "]", t[r], n, i)
            }
            function ie() {
                try {
                    return new n.XMLHttpRequest
                } catch (e) {}
            }
            function re() {
                try {
                    return new n.ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {}
            }
            function oe(e) {
                return ge.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
            }
            var ae = []
              , se = n.document
              , ce = ae.slice
              , ue = ae.concat
              , le = ae.push
              , de = ae.indexOf
              , pe = {}
              , fe = pe.toString
              , he = pe.hasOwnProperty
              , ve = {}
              , me = "1.12.4"
              , ge = function(e, t) {
                return new ge.fn.init(e,t)
            }
              , ye = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
              , be = /^-ms-/
              , xe = /-([\da-z])/gi
              , we = function(e, t) {
                return t.toUpperCase()
            };
            ge.fn = ge.prototype = {
                jquery: me,
                constructor: ge,
                selector: "",
                length: 0,
                toArray: function() {
                    return ce.call(this)
                },
                get: function(e) {
                    return null != e ? e < 0 ? this[e + this.length] : this[e] : ce.call(this)
                },
                pushStack: function(e) {
                    var t = ge.merge(this.constructor(), e);
                    return t.prevObject = this,
                    t.context = this.context,
                    t
                },
                each: function(e) {
                    return ge.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(ge.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(ce.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length
                      , n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: le,
                sort: ae.sort,
                splice: ae.splice
            },
            ge.extend = ge.fn.extend = function() {
                var e, t, n, i, r, o, a = arguments[0] || {}, s = 1, c = arguments.length, u = !1;
                for ("boolean" == typeof a && (u = a,
                a = arguments[s] || {},
                s++),
                "object" == typeof a || ge.isFunction(a) || (a = {}),
                s === c && (a = this,
                s--); s < c; s++)
                    if (null != (r = arguments[s]))
                        for (i in r)
                            e = a[i],
                            n = r[i],
                            a !== n && (u && n && (ge.isPlainObject(n) || (t = ge.isArray(n))) ? (t ? (t = !1,
                            o = e && ge.isArray(e) ? e : []) : o = e && ge.isPlainObject(e) ? e : {},
                            a[i] = ge.extend(u, o, n)) : void 0 !== n && (a[i] = n));
                return a
            }
            ,
            ge.extend({
                expando: "jQuery" + (me + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isFunction: function(e) {
                    return "function" === ge.type(e)
                },
                isArray: Array.isArray || function(e) {
                    return "array" === ge.type(e)
                }
                ,
                isWindow: function(e) {
                    return null != e && e == e.window
                },
                isNumeric: function(e) {
                    var t = e && e.toString();
                    return !ge.isArray(e) && t - parseFloat(t) + 1 >= 0
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e)
                        return !1;
                    return !0
                },
                isPlainObject: function(e) {
                    var t;
                    if (!e || "object" !== ge.type(e) || e.nodeType || ge.isWindow(e))
                        return !1;
                    try {
                        if (e.constructor && !he.call(e, "constructor") && !he.call(e.constructor.prototype, "isPrototypeOf"))
                            return !1
                    } catch (n) {
                        return !1
                    }
                    if (!ve.ownFirst)
                        for (t in e)
                            return he.call(e, t);
                    for (t in e)
                        ;
                    return void 0 === t || he.call(e, t)
                },
                type: function(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? pe[fe.call(e)] || "object" : typeof e
                },
                globalEval: function(e) {
                    e && ge.trim(e) && (n.execScript || function(e) {
                        n.eval.call(n, e)
                    }
                    )(e)
                },
                camelCase: function(e) {
                    return e.replace(be, "ms-").replace(xe, we)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t) {
                    var n, i = 0;
                    if (a(e))
                        for (n = e.length; i < n && t.call(e[i], i, e[i]) !== !1; i++)
                            ;
                    else
                        for (i in e)
                            if (t.call(e[i], i, e[i]) === !1)
                                break;
                    return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(ye, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (a(Object(e)) ? ge.merge(n, "string" == typeof e ? [e] : e) : le.call(n, e)),
                    n
                },
                inArray: function(e, t, n) {
                    var i;
                    if (t) {
                        if (de)
                            return de.call(t, e, n);
                        for (i = t.length,
                        n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                            if (n in t && t[n] === e)
                                return n
                    }
                    return -1
                },
                merge: function(e, t) {
                    for (var n = +t.length, i = 0, r = e.length; i < n; )
                        e[r++] = t[i++];
                    if (n !== n)
                        for (; void 0 !== t[i]; )
                            e[r++] = t[i++];
                    return e.length = r,
                    e
                },
                grep: function(e, t, n) {
                    for (var i, r = [], o = 0, a = e.length, s = !n; o < a; o++)
                        i = !t(e[o], o),
                        i !== s && r.push(e[o]);
                    return r
                },
                map: function(e, t, n) {
                    var i, r, o = 0, s = [];
                    if (a(e))
                        for (i = e.length; o < i; o++)
                            r = t(e[o], o, n),
                            null != r && s.push(r);
                    else
                        for (o in e)
                            r = t(e[o], o, n),
                            null != r && s.push(r);
                    return ue.apply([], s)
                },
                guid: 1,
                proxy: function(e, t) {
                    var n, i, r;
                    if ("string" == typeof t && (r = e[t],
                    t = e,
                    e = r),
                    ge.isFunction(e))
                        return n = ce.call(arguments, 2),
                        i = function() {
                            return e.apply(t || this, n.concat(ce.call(arguments)))
                        }
                        ,
                        i.guid = e.guid = e.guid || ge.guid++,
                        i
                },
                now: function() {
                    return +new Date
                },
                support: ve
            }),
            "function" == typeof Symbol && (ge.fn[Symbol.iterator] = ae[Symbol.iterator]),
            ge.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                pe["[object " + t + "]"] = t.toLowerCase()
            });
            var Te = /*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
            function(e) {
                function t(e, t, n, i) {
                    var r, o, a, s, c, u, d, f, h = t && t.ownerDocument, v = t ? t.nodeType : 9;
                    if (n = n || [],
                    "string" != typeof e || !e || 1 !== v && 9 !== v && 11 !== v)
                        return n;
                    if (!i && ((t ? t.ownerDocument || t : z) !== q && N(t),
                    t = t || q,
                    j)) {
                        if (11 !== v && (u = ge.exec(e)))
                            if (r = u[1]) {
                                if (9 === v) {
                                    if (!(a = t.getElementById(r)))
                                        return n;
                                    if (a.id === r)
                                        return n.push(a),
                                        n
                                } else if (h && (a = h.getElementById(r)) && D(t, a) && a.id === r)
                                    return n.push(a),
                                    n
                            } else {
                                if (u[2])
                                    return Y.apply(n, t.getElementsByTagName(e)),
                                    n;
                                if ((r = u[3]) && w.getElementsByClassName && t.getElementsByClassName)
                                    return Y.apply(n, t.getElementsByClassName(r)),
                                    n
                            }
                        if (w.qsa && !U[e + " "] && (!L || !L.test(e))) {
                            if (1 !== v)
                                h = t,
                                f = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = R),
                                d = C(e),
                                o = d.length,
                                c = pe.test(s) ? "#" + s : "[id='" + s + "']"; o--; )
                                    d[o] = c + " " + p(d[o]);
                                f = d.join(","),
                                h = ye.test(e) && l(t.parentNode) || t
                            }
                            if (f)
                                try {
                                    return Y.apply(n, h.querySelectorAll(f)),
                                    n
                                } catch (m) {} finally {
                                    s === R && t.removeAttribute("id")
                                }
                        }
                    }
                    return A(e.replace(se, "$1"), t, n, i)
                }
                function n() {
                    function e(n, i) {
                        return t.push(n + " ") > T.cacheLength && delete e[t.shift()],
                        e[n + " "] = i
                    }
                    var t = [];
                    return e
                }
                function i(e) {
                    return e[R] = !0,
                    e
                }
                function r(e) {
                    var t = q.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null
                    }
                }
                function o(e, t) {
                    for (var n = e.split("|"), i = n.length; i--; )
                        T.attrHandle[n[i]] = t
                }
                function a(e, t) {
                    var n = t && e
                      , i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Z) - (~e.sourceIndex || Z);
                    if (i)
                        return i;
                    if (n)
                        for (; n = n.nextSibling; )
                            if (n === t)
                                return -1;
                    return e ? 1 : -1
                }
                function s(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }
                function c(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }
                function u(e) {
                    return i(function(t) {
                        return t = +t,
                        i(function(n, i) {
                            for (var r, o = e([], n.length, t), a = o.length; a--; )
                                n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }
                function l(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e
                }
                function d() {}
                function p(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++)
                        i += e[t].value;
                    return i
                }
                function f(e, t, n) {
                    var i = t.dir
                      , r = n && "parentNode" === i
                      , o = B++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[i]; )
                            if (1 === t.nodeType || r)
                                return e(t, n, o)
                    }
                    : function(t, n, a) {
                        var s, c, u, l = [$, o];
                        if (a) {
                            for (; t = t[i]; )
                                if ((1 === t.nodeType || r) && e(t, n, a))
                                    return !0
                        } else
                            for (; t = t[i]; )
                                if (1 === t.nodeType || r) {
                                    if (u = t[R] || (t[R] = {}),
                                    c = u[t.uniqueID] || (u[t.uniqueID] = {}),
                                    (s = c[i]) && s[0] === $ && s[1] === o)
                                        return l[2] = s[2];
                                    if (c[i] = l,
                                    l[2] = e(t, n, a))
                                        return !0
                                }
                    }
                }
                function h(e) {
                    return e.length > 1 ? function(t, n, i) {
                        for (var r = e.length; r--; )
                            if (!e[r](t, n, i))
                                return !1;
                        return !0
                    }
                    : e[0]
                }
                function v(e, n, i) {
                    for (var r = 0, o = n.length; r < o; r++)
                        t(e, n[r], i);
                    return i
                }
                function m(e, t, n, i, r) {
                    for (var o, a = [], s = 0, c = e.length, u = null != t; s < c; s++)
                        (o = e[s]) && (n && !n(o, i, r) || (a.push(o),
                        u && t.push(s)));
                    return a
                }
                function g(e, t, n, r, o, a) {
                    return r && !r[R] && (r = g(r)),
                    o && !o[R] && (o = g(o, a)),
                    i(function(i, a, s, c) {
                        var u, l, d, p = [], f = [], h = a.length, g = i || v(t || "*", s.nodeType ? [s] : s, []), y = !e || !i && t ? g : m(g, p, e, s, c), b = n ? o || (i ? e : h || r) ? [] : a : y;
                        if (n && n(y, b, s, c),
                        r)
                            for (u = m(b, f),
                            r(u, [], s, c),
                            l = u.length; l--; )
                                (d = u[l]) && (b[f[l]] = !(y[f[l]] = d));
                        if (i) {
                            if (o || e) {
                                if (o) {
                                    for (u = [],
                                    l = b.length; l--; )
                                        (d = b[l]) && u.push(y[l] = d);
                                    o(null, b = [], u, c)
                                }
                                for (l = b.length; l--; )
                                    (d = b[l]) && (u = o ? ee(i, d) : p[l]) > -1 && (i[u] = !(a[u] = d))
                            }
                        } else
                            b = m(b === a ? b.splice(h, b.length) : b),
                            o ? o(null, a, b, c) : Y.apply(a, b)
                    })
                }
                function y(e) {
                    for (var t, n, i, r = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, c = f(function(e) {
                        return e === t
                    }, a, !0), u = f(function(e) {
                        return ee(t, e) > -1
                    }, a, !0), l = [function(e, n, i) {
                        var r = !o && (i || n !== E) || ((t = n).nodeType ? c(e, n, i) : u(e, n, i));
                        return t = null,
                        r
                    }
                    ]; s < r; s++)
                        if (n = T.relative[e[s].type])
                            l = [f(h(l), n)];
                        else {
                            if (n = T.filter[e[s].type].apply(null, e[s].matches),
                            n[R]) {
                                for (i = ++s; i < r && !T.relative[e[i].type]; i++)
                                    ;
                                return g(s > 1 && h(l), s > 1 && p(e.slice(0, s - 1).concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                })).replace(se, "$1"), n, s < i && y(e.slice(s, i)), i < r && y(e = e.slice(i)), i < r && p(e))
                            }
                            l.push(n)
                        }
                    return h(l)
                }
                function b(e, n) {
                    var r = n.length > 0
                      , o = e.length > 0
                      , a = function(i, a, s, c, u) {
                        var l, d, p, f = 0, h = "0", v = i && [], g = [], y = E, b = i || o && T.find.TAG("*", u), x = $ += null == y ? 1 : Math.random() || .1, w = b.length;
                        for (u && (E = a === q || a || u); h !== w && null != (l = b[h]); h++) {
                            if (o && l) {
                                for (d = 0,
                                a || l.ownerDocument === q || (N(l),
                                s = !j); p = e[d++]; )
                                    if (p(l, a || q, s)) {
                                        c.push(l);
                                        break
                                    }
                                u && ($ = x)
                            }
                            r && ((l = !p && l) && f--,
                            i && v.push(l))
                        }
                        if (f += h,
                        r && h !== f) {
                            for (d = 0; p = n[d++]; )
                                p(v, g, a, s);
                            if (i) {
                                if (f > 0)
                                    for (; h--; )
                                        v[h] || g[h] || (g[h] = J.call(c));
                                g = m(g)
                            }
                            Y.apply(c, g),
                            u && !i && g.length > 0 && f + n.length > 1 && t.uniqueSort(c)
                        }
                        return u && ($ = x,
                        E = y),
                        v
                    };
                    return r ? i(a) : a
                }
                var x, w, T, k, I, C, P, A, E, S, _, N, q, V, j, L, M, O, D, R = "sizzle" + 1 * new Date, z = e.document, $ = 0, B = 0, H = n(), F = n(), U = n(), W = function(e, t) {
                    return e === t && (_ = !0),
                    0
                }, Z = 1 << 31, X = {}.hasOwnProperty, Q = [], J = Q.pop, K = Q.push, Y = Q.push, G = Q.slice, ee = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t)
                            return n;
                    return -1
                }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]", oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)", ae = new RegExp(ne + "+","g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$","g"), ce = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), le = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]","g"), de = new RegExp(oe), pe = new RegExp("^" + ie + "$"), fe = {
                    ID: new RegExp("^#(" + ie + ")"),
                    CLASS: new RegExp("^\\.(" + ie + ")"),
                    TAG: new RegExp("^(" + ie + "|[*])"),
                    ATTR: new RegExp("^" + re),
                    PSEUDO: new RegExp("^" + oe),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)","i"),
                    bool: new RegExp("^(?:" + te + ")$","i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)","i")
                }, he = /^(?:input|select|textarea|button)$/i, ve = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/, ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)","ig"), we = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                }, Te = function() {
                    N()
                };
                try {
                    Y.apply(Q = G.call(z.childNodes), z.childNodes),
                    Q[z.childNodes.length].nodeType
                } catch (ke) {
                    Y = {
                        apply: Q.length ? function(e, t) {
                            K.apply(e, G.call(t))
                        }
                        : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++]; )
                                ;
                            e.length = n - 1
                        }
                    }
                }
                w = t.support = {},
                I = t.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }
                ,
                N = t.setDocument = function(e) {
                    var t, n, i = e ? e.ownerDocument || e : z;
                    return i !== q && 9 === i.nodeType && i.documentElement ? (q = i,
                    V = q.documentElement,
                    j = !I(q),
                    (n = q.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)),
                    w.attributes = r(function(e) {
                        return e.className = "i",
                        !e.getAttribute("className")
                    }),
                    w.getElementsByTagName = r(function(e) {
                        return e.appendChild(q.createComment("")),
                        !e.getElementsByTagName("*").length
                    }),
                    w.getElementsByClassName = me.test(q.getElementsByClassName),
                    w.getById = r(function(e) {
                        return V.appendChild(e).id = R,
                        !q.getElementsByName || !q.getElementsByName(R).length
                    }),
                    w.getById ? (T.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && j) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }
                    ,
                    T.filter.ID = function(e) {
                        var t = e.replace(xe, we);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }
                    ) : (delete T.find.ID,
                    T.filter.ID = function(e) {
                        var t = e.replace(xe, we);
                        return function(e) {
                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }
                    ),
                    T.find.TAG = w.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                    }
                    : function(e, t) {
                        var n, i = [], r = 0, o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[r++]; )
                                1 === n.nodeType && i.push(n);
                            return i
                        }
                        return o
                    }
                    ,
                    T.find.CLASS = w.getElementsByClassName && function(e, t) {
                        if ("undefined" != typeof t.getElementsByClassName && j)
                            return t.getElementsByClassName(e)
                    }
                    ,
                    M = [],
                    L = [],
                    (w.qsa = me.test(q.querySelectorAll)) && (r(function(e) {
                        V.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                        e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ne + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length || L.push("\\[" + ne + "*(?:value|" + te + ")"),
                        e.querySelectorAll("[id~=" + R + "-]").length || L.push("~="),
                        e.querySelectorAll(":checked").length || L.push(":checked"),
                        e.querySelectorAll("a#" + R + "+*").length || L.push(".#.+[+~]")
                    }),
                    r(function(e) {
                        var t = q.createElement("input");
                        t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length && L.push("name" + ne + "*[*^$|!~]?="),
                        e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        L.push(",.*:")
                    })),
                    (w.matchesSelector = me.test(O = V.matches || V.webkitMatchesSelector || V.mozMatchesSelector || V.oMatchesSelector || V.msMatchesSelector)) && r(function(e) {
                        w.disconnectedMatch = O.call(e, "div"),
                        O.call(e, "[s!='']:x"),
                        M.push("!=", oe)
                    }),
                    L = L.length && new RegExp(L.join("|")),
                    M = M.length && new RegExp(M.join("|")),
                    t = me.test(V.compareDocumentPosition),
                    D = t || me.test(V.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e
                          , i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    }
                    : function(e, t) {
                        if (t)
                            for (; t = t.parentNode; )
                                if (t === e)
                                    return !0;
                        return !1
                    }
                    ,
                    W = t ? function(e, t) {
                        if (e === t)
                            return _ = !0,
                            0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                        1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === q || e.ownerDocument === z && D(z, e) ? -1 : t === q || t.ownerDocument === z && D(z, t) ? 1 : S ? ee(S, e) - ee(S, t) : 0 : 4 & n ? -1 : 1)
                    }
                    : function(e, t) {
                        if (e === t)
                            return _ = !0,
                            0;
                        var n, i = 0, r = e.parentNode, o = t.parentNode, s = [e], c = [t];
                        if (!r || !o)
                            return e === q ? -1 : t === q ? 1 : r ? -1 : o ? 1 : S ? ee(S, e) - ee(S, t) : 0;
                        if (r === o)
                            return a(e, t);
                        for (n = e; n = n.parentNode; )
                            s.unshift(n);
                        for (n = t; n = n.parentNode; )
                            c.unshift(n);
                        for (; s[i] === c[i]; )
                            i++;
                        return i ? a(s[i], c[i]) : s[i] === z ? -1 : c[i] === z ? 1 : 0
                    }
                    ,
                    q) : q
                }
                ,
                t.matches = function(e, n) {
                    return t(e, null, null, n)
                }
                ,
                t.matchesSelector = function(e, n) {
                    if ((e.ownerDocument || e) !== q && N(e),
                    n = n.replace(le, "='$1']"),
                    w.matchesSelector && j && !U[n + " "] && (!M || !M.test(n)) && (!L || !L.test(n)))
                        try {
                            var i = O.call(e, n);
                            if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                return i
                        } catch (r) {}
                    return t(n, q, null, [e]).length > 0
                }
                ,
                t.contains = function(e, t) {
                    return (e.ownerDocument || e) !== q && N(e),
                    D(e, t)
                }
                ,
                t.attr = function(e, t) {
                    (e.ownerDocument || e) !== q && N(e);
                    var n = T.attrHandle[t.toLowerCase()]
                      , i = n && X.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !j) : void 0;
                    return void 0 !== i ? i : w.attributes || !j ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }
                ,
                t.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }
                ,
                t.uniqueSort = function(e) {
                    var t, n = [], i = 0, r = 0;
                    if (_ = !w.detectDuplicates,
                    S = !w.sortStable && e.slice(0),
                    e.sort(W),
                    _) {
                        for (; t = e[r++]; )
                            t === e[r] && (i = n.push(r));
                        for (; i--; )
                            e.splice(n[i], 1)
                    }
                    return S = null,
                    e
                }
                ,
                k = t.getText = function(e) {
                    var t, n = "", i = 0, r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent)
                                return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)
                                n += k(e)
                        } else if (3 === r || 4 === r)
                            return e.nodeValue
                    } else
                        for (; t = e[i++]; )
                            n += k(t);
                    return n
                }
                ,
                T = t.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: fe,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(xe, we),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                            e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                            e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                            e[2] = n.slice(0, t)),
                            e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(xe, we).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            }
                            : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = H[e + " "];
                            return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && H(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, n, i) {
                            return function(r) {
                                var o = t.attr(r, e);
                                return null == o ? "!=" === n : !n || (o += "",
                                "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function(e, t, n, i, r) {
                            var o = "nth" !== e.slice(0, 3)
                              , a = "last" !== e.slice(-4)
                              , s = "of-type" === t;
                            return 1 === i && 0 === r ? function(e) {
                                return !!e.parentNode
                            }
                            : function(t, n, c) {
                                var u, l, d, p, f, h, v = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, g = s && t.nodeName.toLowerCase(), y = !c && !s, b = !1;
                                if (m) {
                                    if (o) {
                                        for (; v; ) {
                                            for (p = t; p = p[v]; )
                                                if (s ? p.nodeName.toLowerCase() === g : 1 === p.nodeType)
                                                    return !1;
                                            h = v = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? m.firstChild : m.lastChild],
                                    a && y) {
                                        for (p = m,
                                        d = p[R] || (p[R] = {}),
                                        l = d[p.uniqueID] || (d[p.uniqueID] = {}),
                                        u = l[e] || [],
                                        f = u[0] === $ && u[1],
                                        b = f && u[2],
                                        p = f && m.childNodes[f]; p = ++f && p && p[v] || (b = f = 0) || h.pop(); )
                                            if (1 === p.nodeType && ++b && p === t) {
                                                l[e] = [$, f, b];
                                                break
                                            }
                                    } else if (y && (p = t,
                                    d = p[R] || (p[R] = {}),
                                    l = d[p.uniqueID] || (d[p.uniqueID] = {}),
                                    u = l[e] || [],
                                    f = u[0] === $ && u[1],
                                    b = f),
                                    b === !1)
                                        for (; (p = ++f && p && p[v] || (b = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++b || (y && (d = p[R] || (p[R] = {}),
                                        l = d[p.uniqueID] || (d[p.uniqueID] = {}),
                                        l[e] = [$, b]),
                                        p !== t)); )
                                            ;
                                    return b -= r,
                                    b === i || b % i === 0 && b / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, n) {
                            var r, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return o[R] ? o(n) : o.length > 1 ? (r = [e, e, "", n],
                            T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                                for (var i, r = o(e, n), a = r.length; a--; )
                                    i = ee(e, r[a]),
                                    e[i] = !(t[i] = r[a])
                            }) : function(e) {
                                return o(e, 0, r)
                            }
                            ) : o
                        }
                    },
                    pseudos: {
                        not: i(function(e) {
                            var t = []
                              , n = []
                              , r = P(e.replace(se, "$1"));
                            return r[R] ? i(function(e, t, n, i) {
                                for (var o, a = r(e, null, i, []), s = e.length; s--; )
                                    (o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function(e, i, o) {
                                return t[0] = e,
                                r(t, null, o, n),
                                t[0] = null,
                                !n.pop()
                            }
                        }),
                        has: i(function(e) {
                            return function(n) {
                                return t(e, n).length > 0
                            }
                        }),
                        contains: i(function(e) {
                            return e = e.replace(xe, we),
                            function(t) {
                                return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                            }
                        }),
                        lang: i(function(e) {
                            return pe.test(e || "") || t.error("unsupported lang: " + e),
                            e = e.replace(xe, we).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = j ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                        return n = n.toLowerCase(),
                                        n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);return !1
                            }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === V
                        },
                        focus: function(e) {
                            return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return e.disabled === !1
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex,
                            e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6)
                                    return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !T.pseudos.empty(e)
                        },
                        header: function(e) {
                            return ve.test(e.nodeName)
                        },
                        input: function(e) {
                            return he.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: u(function() {
                            return [0]
                        }),
                        last: u(function(e, t) {
                            return [t - 1]
                        }),
                        eq: u(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: u(function(e, t) {
                            for (var n = 0; n < t; n += 2)
                                e.push(n);
                            return e
                        }),
                        odd: u(function(e, t) {
                            for (var n = 1; n < t; n += 2)
                                e.push(n);
                            return e
                        }),
                        lt: u(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; --i >= 0; )
                                e.push(i);
                            return e
                        }),
                        gt: u(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t; )
                                e.push(i);
                            return e
                        })
                    }
                },
                T.pseudos.nth = T.pseudos.eq;
                for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                })
                    T.pseudos[x] = s(x);
                for (x in {
                    submit: !0,
                    reset: !0
                })
                    T.pseudos[x] = c(x);
                return d.prototype = T.filters = T.pseudos,
                T.setFilters = new d,
                C = t.tokenize = function(e, n) {
                    var i, r, o, a, s, c, u, l = F[e + " "];
                    if (l)
                        return n ? 0 : l.slice(0);
                    for (s = e,
                    c = [],
                    u = T.preFilter; s; ) {
                        i && !(r = ce.exec(s)) || (r && (s = s.slice(r[0].length) || s),
                        c.push(o = [])),
                        i = !1,
                        (r = ue.exec(s)) && (i = r.shift(),
                        o.push({
                            value: i,
                            type: r[0].replace(se, " ")
                        }),
                        s = s.slice(i.length));
                        for (a in T.filter)
                            !(r = fe[a].exec(s)) || u[a] && !(r = u[a](r)) || (i = r.shift(),
                            o.push({
                                value: i,
                                type: a,
                                matches: r
                            }),
                            s = s.slice(i.length));
                        if (!i)
                            break
                    }
                    return n ? s.length : s ? t.error(e) : F(e, c).slice(0)
                }
                ,
                P = t.compile = function(e, t) {
                    var n, i = [], r = [], o = U[e + " "];
                    if (!o) {
                        for (t || (t = C(e)),
                        n = t.length; n--; )
                            o = y(t[n]),
                            o[R] ? i.push(o) : r.push(o);
                        o = U(e, b(r, i)),
                        o.selector = e
                    }
                    return o
                }
                ,
                A = t.select = function(e, t, n, i) {
                    var r, o, a, s, c, u = "function" == typeof e && e, d = !i && C(e = u.selector || e);
                    if (n = n || [],
                    1 === d.length) {
                        if (o = d[0] = d[0].slice(0),
                        o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && j && T.relative[o[1].type]) {
                            if (t = (T.find.ID(a.matches[0].replace(xe, we), t) || [])[0],
                            !t)
                                return n;
                            u && (t = t.parentNode),
                            e = e.slice(o.shift().value.length)
                        }
                        for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r],
                        !T.relative[s = a.type]); )
                            if ((c = T.find[s]) && (i = c(a.matches[0].replace(xe, we), ye.test(o[0].type) && l(t.parentNode) || t))) {
                                if (o.splice(r, 1),
                                e = i.length && p(o),
                                !e)
                                    return Y.apply(n, i),
                                    n;
                                break
                            }
                    }
                    return (u || P(e, d))(i, t, !j, n, !t || ye.test(e) && l(t.parentNode) || t),
                    n
                }
                ,
                w.sortStable = R.split("").sort(W).join("") === R,
                w.detectDuplicates = !!_,
                N(),
                w.sortDetached = r(function(e) {
                    return 1 & e.compareDocumentPosition(q.createElement("div"))
                }),
                r(function(e) {
                    return e.innerHTML = "<a href='#'></a>",
                    "#" === e.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function(e, t, n) {
                    if (!n)
                        return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }),
                w.attributes && r(function(e) {
                    return e.innerHTML = "<input/>",
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                }) || o("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())
                        return e.defaultValue
                }),
                r(function(e) {
                    return null == e.getAttribute("disabled")
                }) || o(te, function(e, t, n) {
                    var i;
                    if (!n)
                        return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }),
                t
            }(n);
            ge.find = Te,
            ge.expr = Te.selectors,
            ge.expr[":"] = ge.expr.pseudos,
            ge.uniqueSort = ge.unique = Te.uniqueSort,
            ge.text = Te.getText,
            ge.isXMLDoc = Te.isXML,
            ge.contains = Te.contains;
            var ke = function(e, t, n) {
                for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                    if (1 === e.nodeType) {
                        if (r && ge(e).is(n))
                            break;
                        i.push(e)
                    }
                return i
            }
              , Ie = function(e, t) {
                for (var n = []; e; e = e.nextSibling)
                    1 === e.nodeType && e !== t && n.push(e);
                return n
            }
              , Ce = ge.expr.match.needsContext
              , Pe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
              , Ae = /^.[^:#\[\.,]*$/;
            ge.filter = function(e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === i.nodeType ? ge.find.matchesSelector(i, e) ? [i] : [] : ge.find.matches(e, ge.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }
            ,
            ge.fn.extend({
                find: function(e) {
                    var t, n = [], i = this, r = i.length;
                    if ("string" != typeof e)
                        return this.pushStack(ge(e).filter(function() {
                            for (t = 0; t < r; t++)
                                if (ge.contains(i[t], this))
                                    return !0
                        }));
                    for (t = 0; t < r; t++)
                        ge.find(e, i[t], n);
                    return n = this.pushStack(r > 1 ? ge.unique(n) : n),
                    n.selector = this.selector ? this.selector + " " + e : e,
                    n
                },
                filter: function(e) {
                    return this.pushStack(s(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(s(this, e || [], !0))
                },
                is: function(e) {
                    return !!s(this, "string" == typeof e && Ce.test(e) ? ge(e) : e || [], !1).length
                }
            });
            var Ee, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, _e = ge.fn.init = function(e, t, n) {
                var i, r;
                if (!e)
                    return this;
                if (n = n || Ee,
                "string" == typeof e) {
                    if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Se.exec(e),
                    !i || !i[1] && t)
                        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof ge ? t[0] : t,
                        ge.merge(this, ge.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : se, !0)),
                        Pe.test(i[1]) && ge.isPlainObject(t))
                            for (i in t)
                                ge.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this
                    }
                    if (r = se.getElementById(i[2]),
                    r && r.parentNode) {
                        if (r.id !== i[2])
                            return Ee.find(e);
                        this.length = 1,
                        this[0] = r
                    }
                    return this.context = se,
                    this.selector = e,
                    this
                }
                return e.nodeType ? (this.context = this[0] = e,
                this.length = 1,
                this) : ge.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(ge) : (void 0 !== e.selector && (this.selector = e.selector,
                this.context = e.context),
                ge.makeArray(e, this))
            }
            ;
            _e.prototype = ge.fn,
            Ee = ge(se);
            var Ne = /^(?:parents|prev(?:Until|All))/
              , qe = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            ge.fn.extend({
                has: function(e) {
                    var t, n = ge(e, this), i = n.length;
                    return this.filter(function() {
                        for (t = 0; t < i; t++)
                            if (ge.contains(this, n[t]))
                                return !0
                    })
                },
                closest: function(e, t) {
                    for (var n, i = 0, r = this.length, o = [], a = Ce.test(e) || "string" != typeof e ? ge(e, t || this.context) : 0; i < r; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ge.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            }
                    return this.pushStack(o.length > 1 ? ge.uniqueSort(o) : o)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? ge.inArray(this[0], ge(e)) : ge.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(ge.uniqueSort(ge.merge(this.get(), ge(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }),
            ge.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return ke(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return ke(e, "parentNode", n)
                },
                next: function(e) {
                    return c(e, "nextSibling")
                },
                prev: function(e) {
                    return c(e, "previousSibling")
                },
                nextAll: function(e) {
                    return ke(e, "nextSibling")
                },
                prevAll: function(e) {
                    return ke(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return ke(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return ke(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return Ie((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return Ie(e.firstChild)
                },
                contents: function(e) {
                    return ge.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ge.merge([], e.childNodes)
                }
            }, function(e, t) {
                ge.fn[e] = function(n, i) {
                    var r = ge.map(this, t, n);
                    return "Until" !== e.slice(-5) && (i = n),
                    i && "string" == typeof i && (r = ge.filter(i, r)),
                    this.length > 1 && (qe[e] || (r = ge.uniqueSort(r)),
                    Ne.test(e) && (r = r.reverse())),
                    this.pushStack(r)
                }
            });
            var Ve = /\S+/g;
            ge.Callbacks = function(e) {
                e = "string" == typeof e ? u(e) : ge.extend({}, e);
                var t, n, i, r, o = [], a = [], s = -1, c = function() {
                    for (r = e.once,
                    i = t = !0; a.length; s = -1)
                        for (n = a.shift(); ++s < o.length; )
                            o[s].apply(n[0], n[1]) === !1 && e.stopOnFalse && (s = o.length,
                            n = !1);
                    e.memory || (n = !1),
                    t = !1,
                    r && (o = n ? [] : "")
                }, l = {
                    add: function() {
                        return o && (n && !t && (s = o.length - 1,
                        a.push(n)),
                        function i(t) {
                            ge.each(t, function(t, n) {
                                ge.isFunction(n) ? e.unique && l.has(n) || o.push(n) : n && n.length && "string" !== ge.type(n) && i(n)
                            })
                        }(arguments),
                        n && !t && c()),
                        this
                    },
                    remove: function() {
                        return ge.each(arguments, function(e, t) {
                            for (var n; (n = ge.inArray(t, o, n)) > -1; )
                                o.splice(n, 1),
                                n <= s && s--
                        }),
                        this
                    },
                    has: function(e) {
                        return e ? ge.inArray(e, o) > -1 : o.length > 0
                    },
                    empty: function() {
                        return o && (o = []),
                        this
                    },
                    disable: function() {
                        return r = a = [],
                        o = n = "",
                        this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return r = !0,
                        n || l.disable(),
                        this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(e, n) {
                        return r || (n = n || [],
                        n = [e, n.slice ? n.slice() : n],
                        a.push(n),
                        t || c()),
                        this
                    },
                    fire: function() {
                        return l.fireWith(this, arguments),
                        this
                    },
                    fired: function() {
                        return !!i
                    }
                };
                return l
            }
            ,
            ge.extend({
                Deferred: function(e) {
                    var t = [["resolve", "done", ge.Callbacks("once memory"), "resolved"], ["reject", "fail", ge.Callbacks("once memory"), "rejected"], ["notify", "progress", ge.Callbacks("memory")]]
                      , n = "pending"
                      , i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments),
                            this
                        },
                        then: function() {
                            var e = arguments;
                            return ge.Deferred(function(n) {
                                ge.each(t, function(t, o) {
                                    var a = ge.isFunction(e[t]) && e[t];
                                    r[o[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && ge.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }),
                                e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? ge.extend(e, i) : i
                        }
                    }
                      , r = {};
                    return i.pipe = i.then,
                    ge.each(t, function(e, o) {
                        var a = o[2]
                          , s = o[3];
                        i[o[1]] = a.add,
                        s && a.add(function() {
                            n = s
                        }, t[1 ^ e][2].disable, t[2][2].lock),
                        r[o[0]] = function() {
                            return r[o[0] + "With"](this === r ? i : this, arguments),
                            this
                        }
                        ,
                        r[o[0] + "With"] = a.fireWith
                    }),
                    i.promise(r),
                    e && e.call(r, r),
                    r
                },
                when: function(e) {
                    var t, n, i, r = 0, o = ce.call(arguments), a = o.length, s = 1 !== a || e && ge.isFunction(e.promise) ? a : 0, c = 1 === s ? e : ge.Deferred(), u = function(e, n, i) {
                        return function(r) {
                            n[e] = this,
                            i[e] = arguments.length > 1 ? ce.call(arguments) : r,
                            i === t ? c.notifyWith(n, i) : --s || c.resolveWith(n, i)
                        }
                    };
                    if (a > 1)
                        for (t = new Array(a),
                        n = new Array(a),
                        i = new Array(a); r < a; r++)
                            o[r] && ge.isFunction(o[r].promise) ? o[r].promise().progress(u(r, n, t)).done(u(r, i, o)).fail(c.reject) : --s;
                    return s || c.resolveWith(i, o),
                    c.promise()
                }
            });
            var je;
            ge.fn.ready = function(e) {
                return ge.ready.promise().done(e),
                this
            }
            ,
            ge.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? ge.readyWait++ : ge.ready(!0)
                },
                ready: function(e) {
                    (e === !0 ? --ge.readyWait : ge.isReady) || (ge.isReady = !0,
                    e !== !0 && --ge.readyWait > 0 || (je.resolveWith(se, [ge]),
                    ge.fn.triggerHandler && (ge(se).triggerHandler("ready"),
                    ge(se).off("ready"))))
                }
            }),
            ge.ready.promise = function(e) {
                if (!je)
                    if (je = ge.Deferred(),
                    "complete" === se.readyState || "loading" !== se.readyState && !se.documentElement.doScroll)
                        n.setTimeout(ge.ready);
                    else if (se.addEventListener)
                        se.addEventListener("DOMContentLoaded", d),
                        n.addEventListener("load", d);
                    else {
                        se.attachEvent("onreadystatechange", d),
                        n.attachEvent("onload", d);
                        var t = !1;
                        try {
                            t = null == n.frameElement && se.documentElement
                        } catch (i) {}
                        t && t.doScroll && !function r() {
                            if (!ge.isReady) {
                                try {
                                    t.doScroll("left")
                                } catch (e) {
                                    return n.setTimeout(r, 50)
                                }
                                l(),
                                ge.ready()
                            }
                        }()
                    }
                return je.promise(e)
            }
            ,
            ge.ready.promise();
            var Le;
            for (Le in ge(ve))
                break;
            ve.ownFirst = "0" === Le,
            ve.inlineBlockNeedsLayout = !1,
            ge(function() {
                var e, t, n, i;
                n = se.getElementsByTagName("body")[0],
                n && n.style && (t = se.createElement("div"),
                i = se.createElement("div"),
                i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                n.appendChild(i).appendChild(t),
                "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
                ve.inlineBlockNeedsLayout = e = 3 === t.offsetWidth,
                e && (n.style.zoom = 1)),
                n.removeChild(i))
            }),
            function() {
                var e = se.createElement("div");
                ve.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    ve.deleteExpando = !1
                }
                e = null
            }();
            var Me = function(e) {
                var t = ge.noData[(e.nodeName + " ").toLowerCase()]
                  , n = +e.nodeType || 1;
                return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
            }
              , Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
              , De = /([A-Z])/g;
            ge.extend({
                cache: {},
                noData: {
                    "applet ": !0,
                    "embed ": !0,
                    "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function(e) {
                    return e = e.nodeType ? ge.cache[e[ge.expando]] : e[ge.expando],
                    !!e && !f(e)
                },
                data: function(e, t, n) {
                    return h(e, t, n)
                },
                removeData: function(e, t) {
                    return v(e, t)
                },
                _data: function(e, t, n) {
                    return h(e, t, n, !0)
                },
                _removeData: function(e, t) {
                    return v(e, t, !0)
                }
            }),
            ge.fn.extend({
                data: function(e, t) {
                    var n, i, r, o = this[0], a = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (r = ge.data(o),
                        1 === o.nodeType && !ge._data(o, "parsedAttrs"))) {
                            for (n = a.length; n--; )
                                a[n] && (i = a[n].name,
                                0 === i.indexOf("data-") && (i = ge.camelCase(i.slice(5)),
                                p(o, i, r[i])));
                            ge._data(o, "parsedAttrs", !0)
                        }
                        return r
                    }
                    return "object" == typeof e ? this.each(function() {
                        ge.data(this, e)
                    }) : arguments.length > 1 ? this.each(function() {
                        ge.data(this, e, t)
                    }) : o ? p(o, e, ge.data(o, e)) : void 0
                },
                removeData: function(e) {
                    return this.each(function() {
                        ge.removeData(this, e)
                    })
                }
            }),
            ge.extend({
                queue: function(e, t, n) {
                    var i;
                    if (e)
                        return t = (t || "fx") + "queue",
                        i = ge._data(e, t),
                        n && (!i || ge.isArray(n) ? i = ge._data(e, t, ge.makeArray(n)) : i.push(n)),
                        i || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = ge.queue(e, t)
                      , i = n.length
                      , r = n.shift()
                      , o = ge._queueHooks(e, t)
                      , a = function() {
                        ge.dequeue(e, t)
                    };
                    "inprogress" === r && (r = n.shift(),
                    i--),
                    r && ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    r.call(e, a, o)),
                    !i && o && o.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return ge._data(e, n) || ge._data(e, n, {
                        empty: ge.Callbacks("once memory").add(function() {
                            ge._removeData(e, t + "queue"),
                            ge._removeData(e, n)
                        })
                    })
                }
            }),
            ge.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e,
                    e = "fx",
                    n--),
                    arguments.length < n ? ge.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = ge.queue(this, e, t);
                        ge._queueHooks(this, e),
                        "fx" === e && "inprogress" !== n[0] && ge.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        ge.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, i = 1, r = ge.Deferred(), o = this, a = this.length, s = function() {
                        --i || r.resolveWith(o, [o])
                    };
                    for ("string" != typeof e && (t = e,
                    e = void 0),
                    e = e || "fx"; a--; )
                        n = ge._data(o[a], e + "queueHooks"),
                        n && n.empty && (i++,
                        n.empty.add(s));
                    return s(),
                    r.promise(t)
                }
            }),
            function() {
                var e;
                ve.shrinkWrapBlocks = function() {
                    if (null != e)
                        return e;
                    e = !1;
                    var t, n, i;
                    return n = se.getElementsByTagName("body")[0],
                    n && n.style ? (t = se.createElement("div"),
                    i = se.createElement("div"),
                    i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                    n.appendChild(i).appendChild(t),
                    "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                    t.appendChild(se.createElement("div")).style.width = "5px",
                    e = 3 !== t.offsetWidth),
                    n.removeChild(i),
                    e) : void 0
                }
            }();
            var Re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
              , ze = new RegExp("^(?:([+-])=|)(" + Re + ")([a-z%]*)$","i")
              , $e = ["Top", "Right", "Bottom", "Left"]
              , Be = function(e, t) {
                return e = t || e,
                "none" === ge.css(e, "display") || !ge.contains(e.ownerDocument, e)
            }
              , He = function(e, t, n, i, r, o, a) {
                var s = 0
                  , c = e.length
                  , u = null == n;
                if ("object" === ge.type(n)) {
                    r = !0;
                    for (s in n)
                        He(e, t, s, n[s], !0, o, a)
                } else if (void 0 !== i && (r = !0,
                ge.isFunction(i) || (a = !0),
                u && (a ? (t.call(e, i),
                t = null) : (u = t,
                t = function(e, t, n) {
                    return u.call(ge(e), n)
                }
                )),
                t))
                    for (; s < c; s++)
                        t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                return r ? e : u ? t.call(e) : c ? t(e[0], n) : o
            }
              , Fe = /^(?:checkbox|radio)$/i
              , Ue = /<([\w:-]+)/
              , We = /^$|\/(?:java|ecma)script/i
              , Ze = /^\s+/
              , Xe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
            !function() {
                var e = se.createElement("div")
                  , t = se.createDocumentFragment()
                  , n = se.createElement("input");
                e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                ve.leadingWhitespace = 3 === e.firstChild.nodeType,
                ve.tbody = !e.getElementsByTagName("tbody").length,
                ve.htmlSerialize = !!e.getElementsByTagName("link").length,
                ve.html5Clone = "<:nav></:nav>" !== se.createElement("nav").cloneNode(!0).outerHTML,
                n.type = "checkbox",
                n.checked = !0,
                t.appendChild(n),
                ve.appendChecked = n.checked,
                e.innerHTML = "<textarea>x</textarea>",
                ve.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue,
                t.appendChild(e),
                n = se.createElement("input"),
                n.setAttribute("type", "radio"),
                n.setAttribute("checked", "checked"),
                n.setAttribute("name", "t"),
                e.appendChild(n),
                ve.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
                ve.noCloneEvent = !!e.addEventListener,
                e[ge.expando] = 1,
                ve.attributes = !e.getAttribute(ge.expando)
            }();
            var Qe = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ve.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            };
            Qe.optgroup = Qe.option,
            Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead,
            Qe.th = Qe.td;
            var Je = /<|&#?\w+;/
              , Ke = /<tbody/i;
            !function() {
                var e, t, i = se.createElement("div");
                for (e in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                })
                    t = "on" + e,
                    (ve[e] = t in n) || (i.setAttribute(t, "t"),
                    ve[e] = i.attributes[t].expando === !1);
                i = null
            }();
            var Ye = /^(?:input|select|textarea)$/i
              , Ge = /^key/
              , et = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
              , tt = /^(?:focusinfocus|focusoutblur)$/
              , nt = /^([^.]*)(?:\.(.+)|)/;
            ge.event = {
                global: {},
                add: function(e, t, n, i, r) {
                    var o, a, s, c, u, l, d, p, f, h, v, m = ge._data(e);
                    if (m) {
                        for (n.handler && (c = n,
                        n = c.handler,
                        r = c.selector),
                        n.guid || (n.guid = ge.guid++),
                        (a = m.events) || (a = m.events = {}),
                        (l = m.handle) || (l = m.handle = function(e) {
                            return "undefined" == typeof ge || e && ge.event.triggered === e.type ? void 0 : ge.event.dispatch.apply(l.elem, arguments)
                        }
                        ,
                        l.elem = e),
                        t = (t || "").match(Ve) || [""],
                        s = t.length; s--; )
                            o = nt.exec(t[s]) || [],
                            f = v = o[1],
                            h = (o[2] || "").split(".").sort(),
                            f && (u = ge.event.special[f] || {},
                            f = (r ? u.delegateType : u.bindType) || f,
                            u = ge.event.special[f] || {},
                            d = ge.extend({
                                type: f,
                                origType: v,
                                data: i,
                                handler: n,
                                guid: n.guid,
                                selector: r,
                                needsContext: r && ge.expr.match.needsContext.test(r),
                                namespace: h.join(".")
                            }, c),
                            (p = a[f]) || (p = a[f] = [],
                            p.delegateCount = 0,
                            u.setup && u.setup.call(e, i, h, l) !== !1 || (e.addEventListener ? e.addEventListener(f, l, !1) : e.attachEvent && e.attachEvent("on" + f, l))),
                            u.add && (u.add.call(e, d),
                            d.handler.guid || (d.handler.guid = n.guid)),
                            r ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                            ge.event.global[f] = !0);
                        e = null
                    }
                },
                remove: function(e, t, n, i, r) {
                    var o, a, s, c, u, l, d, p, f, h, v, m = ge.hasData(e) && ge._data(e);
                    if (m && (l = m.events)) {
                        for (t = (t || "").match(Ve) || [""],
                        u = t.length; u--; )
                            if (s = nt.exec(t[u]) || [],
                            f = v = s[1],
                            h = (s[2] || "").split(".").sort(),
                            f) {
                                for (d = ge.event.special[f] || {},
                                f = (i ? d.delegateType : d.bindType) || f,
                                p = l[f] || [],
                                s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                c = o = p.length; o--; )
                                    a = p[o],
                                    !r && v !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (p.splice(o, 1),
                                    a.selector && p.delegateCount--,
                                    d.remove && d.remove.call(e, a));
                                c && !p.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || ge.removeEvent(e, f, m.handle),
                                delete l[f])
                            } else
                                for (f in l)
                                    ge.event.remove(e, f + t[u], n, i, !0);
                        ge.isEmptyObject(l) && (delete m.handle,
                        ge._removeData(e, "events"))
                    }
                },
                trigger: function(e, t, i, r) {
                    var o, a, s, c, u, l, d, p = [i || se], f = he.call(e, "type") ? e.type : e, h = he.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (s = l = i = i || se,
                    3 !== i.nodeType && 8 !== i.nodeType && !tt.test(f + ge.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."),
                    f = h.shift(),
                    h.sort()),
                    a = f.indexOf(":") < 0 && "on" + f,
                    e = e[ge.expando] ? e : new ge.Event(f,"object" == typeof e && e),
                    e.isTrigger = r ? 2 : 3,
                    e.namespace = h.join("."),
                    e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    e.result = void 0,
                    e.target || (e.target = i),
                    t = null == t ? [e] : ge.makeArray(t, [e]),
                    u = ge.event.special[f] || {},
                    r || !u.trigger || u.trigger.apply(i, t) !== !1)) {
                        if (!r && !u.noBubble && !ge.isWindow(i)) {
                            for (c = u.delegateType || f,
                            tt.test(c + f) || (s = s.parentNode); s; s = s.parentNode)
                                p.push(s),
                                l = s;
                            l === (i.ownerDocument || se) && p.push(l.defaultView || l.parentWindow || n)
                        }
                        for (d = 0; (s = p[d++]) && !e.isPropagationStopped(); )
                            e.type = d > 1 ? c : u.bindType || f,
                            o = (ge._data(s, "events") || {})[e.type] && ge._data(s, "handle"),
                            o && o.apply(s, t),
                            o = a && s[a],
                            o && o.apply && Me(s) && (e.result = o.apply(s, t),
                            e.result === !1 && e.preventDefault());
                        if (e.type = f,
                        !r && !e.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), t) === !1) && Me(i) && a && i[f] && !ge.isWindow(i)) {
                            l = i[a],
                            l && (i[a] = null),
                            ge.event.triggered = f;
                            try {
                                i[f]()
                            } catch (v) {}
                            ge.event.triggered = void 0,
                            l && (i[a] = l)
                        }
                        return e.result
                    }
                },
                dispatch: function(e) {
                    e = ge.event.fix(e);
                    var t, n, i, r, o, a = [], s = ce.call(arguments), c = (ge._data(this, "events") || {})[e.type] || [], u = ge.event.special[e.type] || {};
                    if (s[0] = e,
                    e.delegateTarget = this,
                    !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                        for (a = ge.event.handlers.call(this, e, c),
                        t = 0; (r = a[t++]) && !e.isPropagationStopped(); )
                            for (e.currentTarget = r.elem,
                            n = 0; (o = r.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                                e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o,
                                e.data = o.data,
                                i = ((ge.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s),
                                void 0 !== i && (e.result = i) === !1 && (e.preventDefault(),
                                e.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, e),
                        e.result
                    }
                },
                handlers: function(e, t) {
                    var n, i, r, o, a = [], s = t.delegateCount, c = e.target;
                    if (s && c.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                        for (; c != this; c = c.parentNode || this)
                            if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                                for (i = [],
                                n = 0; n < s; n++)
                                    o = t[n],
                                    r = o.selector + " ",
                                    void 0 === i[r] && (i[r] = o.needsContext ? ge(r, this).index(c) > -1 : ge.find(r, this, null, [c]).length),
                                    i[r] && i.push(o);
                                i.length && a.push({
                                    elem: c,
                                    handlers: i
                                })
                            }
                    return s < t.length && a.push({
                        elem: this,
                        handlers: t.slice(s)
                    }),
                    a
                },
                fix: function(e) {
                    if (e[ge.expando])
                        return e;
                    var t, n, i, r = e.type, o = e, a = this.fixHooks[r];
                    for (a || (this.fixHooks[r] = a = et.test(r) ? this.mouseHooks : Ge.test(r) ? this.keyHooks : {}),
                    i = a.props ? this.props.concat(a.props) : this.props,
                    e = new ge.Event(o),
                    t = i.length; t--; )
                        n = i[t],
                        e[n] = o[n];
                    return e.target || (e.target = o.srcElement || se),
                    3 === e.target.nodeType && (e.target = e.target.parentNode),
                    e.metaKey = !!e.metaKey,
                    a.filter ? a.filter(e, o) : e
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                        e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(e, t) {
                        var n, i, r, o = t.button, a = t.fromElement;
                        return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || se,
                        r = i.documentElement,
                        n = i.body,
                        e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0),
                        e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)),
                        !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a),
                        e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                        e
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== I() && this.focus)
                                try {
                                    return this.focus(),
                                    !1
                                } catch (e) {}
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === I() && this.blur)
                                return this.blur(),
                                !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if (ge.nodeName(this, "input") && "checkbox" === this.type && this.click)
                                return this.click(),
                                !1
                        },
                        _default: function(e) {
                            return ge.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function(e, t, n) {
                    var i = ge.extend(new ge.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    ge.event.trigger(i, null, t),
                    i.isDefaultPrevented() && n.preventDefault()
                }
            },
            ge.removeEvent = se.removeEventListener ? function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }
            : function(e, t, n) {
                var i = "on" + t;
                e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null),
                e.detachEvent(i, n))
            }
            ,
            ge.Event = function(e, t) {
                return this instanceof ge.Event ? (e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? T : k) : this.type = e,
                t && ge.extend(this, t),
                this.timeStamp = e && e.timeStamp || ge.now(),
                void (this[ge.expando] = !0)) : new ge.Event(e,t)
            }
            ,
            ge.Event.prototype = {
                constructor: ge.Event,
                isDefaultPrevented: k,
                isPropagationStopped: k,
                isImmediatePropagationStopped: k,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = T,
                    e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = T,
                    e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(),
                    e.cancelBubble = !0)
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = T,
                    e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
                    this.stopPropagation()
                }
            },
            ge.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                ge.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, i = this, r = e.relatedTarget, o = e.handleObj;
                        return r && (r === i || ge.contains(i, r)) || (e.type = o.origType,
                        n = o.handler.apply(this, arguments),
                        e.type = t),
                        n
                    }
                }
            }),
            ve.submit || (ge.event.special.submit = {
                setup: function() {
                    return !ge.nodeName(this, "form") && void ge.event.add(this, "click._submit keypress._submit", function(e) {
                        var t = e.target
                          , n = ge.nodeName(t, "input") || ge.nodeName(t, "button") ? ge.prop(t, "form") : void 0;
                        n && !ge._data(n, "submit") && (ge.event.add(n, "submit._submit", function(e) {
                            e._submitBubble = !0
                        }),
                        ge._data(n, "submit", !0))
                    })
                },
                postDispatch: function(e) {
                    e._submitBubble && (delete e._submitBubble,
                    this.parentNode && !e.isTrigger && ge.event.simulate("submit", this.parentNode, e))
                },
                teardown: function() {
                    return !ge.nodeName(this, "form") && void ge.event.remove(this, "._submit")
                }
            }),
            ve.change || (ge.event.special.change = {
                setup: function() {
                    return Ye.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ge.event.add(this, "propertychange._change", function(e) {
                        "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                    }),
                    ge.event.add(this, "click._change", function(e) {
                        this._justChanged && !e.isTrigger && (this._justChanged = !1),
                        ge.event.simulate("change", this, e)
                    })),
                    !1) : void ge.event.add(this, "beforeactivate._change", function(e) {
                        var t = e.target;
                        Ye.test(t.nodeName) && !ge._data(t, "change") && (ge.event.add(t, "change._change", function(e) {
                            !this.parentNode || e.isSimulated || e.isTrigger || ge.event.simulate("change", this.parentNode, e)
                        }),
                        ge._data(t, "change", !0))
                    })
                },
                handle: function(e) {
                    var t = e.target;
                    if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)
                        return e.handleObj.handler.apply(this, arguments)
                },
                teardown: function() {
                    return ge.event.remove(this, "._change"),
                    !Ye.test(this.nodeName)
                }
            }),
            ve.focusin || ge.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = function(e) {
                    ge.event.simulate(t, e.target, ge.event.fix(e))
                };
                ge.event.special[t] = {
                    setup: function() {
                        var i = this.ownerDocument || this
                          , r = ge._data(i, t);
                        r || i.addEventListener(e, n, !0),
                        ge._data(i, t, (r || 0) + 1)
                    },
                    teardown: function() {
                        var i = this.ownerDocument || this
                          , r = ge._data(i, t) - 1;
                        r ? ge._data(i, t, r) : (i.removeEventListener(e, n, !0),
                        ge._removeData(i, t))
                    }
                }
            }),
            ge.fn.extend({
                on: function(e, t, n, i) {
                    return C(this, e, t, n, i)
                },
                one: function(e, t, n, i) {
                    return C(this, e, t, n, i, 1)
                },
                off: function(e, t, n) {
                    var i, r;
                    if (e && e.preventDefault && e.handleObj)
                        return i = e.handleObj,
                        ge(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                        this;
                    if ("object" == typeof e) {
                        for (r in e)
                            this.off(r, t, e[r]);
                        return this
                    }
                    return t !== !1 && "function" != typeof t || (n = t,
                    t = void 0),
                    n === !1 && (n = k),
                    this.each(function() {
                        ge.event.remove(this, e, n, t)
                    })
                },
                trigger: function(e, t) {
                    return this.each(function() {
                        ge.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n)
                        return ge.event.trigger(e, t, n, !0)
                }
            });
            var it = / jQuery\d+="(?:null|\d+)"/g
              , rt = new RegExp("<(?:" + Xe + ")[\\s/>]","i")
              , ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
              , at = /<script|<style|<link/i
              , st = /checked\s*(?:[^=]|=\s*.checked.)/i
              , ct = /^true\/(.*)/
              , ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
              , lt = g(se)
              , dt = lt.appendChild(se.createElement("div"));
            ge.extend({
                htmlPrefilter: function(e) {
                    return e.replace(ot, "<$1></$2>")
                },
                clone: function(e, t, n) {
                    var i, r, o, a, s, c = ge.contains(e.ownerDocument, e);
                    if (ve.html5Clone || ge.isXMLDoc(e) || !rt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (dt.innerHTML = e.outerHTML,
                    dt.removeChild(o = dt.firstChild)),
                    !(ve.noCloneEvent && ve.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ge.isXMLDoc(e)))
                        for (i = y(o),
                        s = y(e),
                        a = 0; null != (r = s[a]); ++a)
                            i[a] && _(r, i[a]);
                    if (t)
                        if (n)
                            for (s = s || y(e),
                            i = i || y(o),
                            a = 0; null != (r = s[a]); a++)
                                S(r, i[a]);
                        else
                            S(e, o);
                    return i = y(o, "script"),
                    i.length > 0 && b(i, !c && y(e, "script")),
                    i = s = r = null,
                    o
                },
                cleanData: function(e, t) {
                    for (var n, i, r, o, a = 0, s = ge.expando, c = ge.cache, u = ve.attributes, l = ge.event.special; null != (n = e[a]); a++)
                        if ((t || Me(n)) && (r = n[s],
                        o = r && c[r])) {
                            if (o.events)
                                for (i in o.events)
                                    l[i] ? ge.event.remove(n, i) : ge.removeEvent(n, i, o.handle);
                            c[r] && (delete c[r],
                            u || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s),
                            ae.push(r))
                        }
                }
            }),
            ge.fn.extend({
                domManip: N,
                detach: function(e) {
                    return q(this, e, !0)
                },
                remove: function(e) {
                    return q(this, e)
                },
                text: function(e) {
                    return He(this, function(e) {
                        return void 0 === e ? ge.text(this) : this.empty().append((this[0] && this[0].ownerDocument || se).createTextNode(e))
                    }, null, e, arguments.length)
                },
                append: function() {
                    return N(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = P(this, e);
                            t.appendChild(e)
                        }
                    })
                },
                prepend: function() {
                    return N(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = P(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return N(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return N(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) {
                        for (1 === e.nodeType && ge.cleanData(y(e, !1)); e.firstChild; )
                            e.removeChild(e.firstChild);
                        e.options && ge.nodeName(e, "select") && (e.options.length = 0)
                    }
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e,
                    t = null == t ? e : t,
                    this.map(function() {
                        return ge.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return He(this, function(e) {
                        var t = this[0] || {}
                          , n = 0
                          , i = this.length;
                        if (void 0 === e)
                            return 1 === t.nodeType ? t.innerHTML.replace(it, "") : void 0;
                        if ("string" == typeof e && !at.test(e) && (ve.htmlSerialize || !rt.test(e)) && (ve.leadingWhitespace || !Ze.test(e)) && !Qe[(Ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = ge.htmlPrefilter(e);
                            try {
                                for (; n < i; n++)
                                    t = this[n] || {},
                                    1 === t.nodeType && (ge.cleanData(y(t, !1)),
                                    t.innerHTML = e);
                                t = 0
                            } catch (r) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return N(this, arguments, function(t) {
                        var n = this.parentNode;
                        ge.inArray(this, e) < 0 && (ge.cleanData(y(this)),
                        n && n.replaceChild(t, this))
                    }, e)
                }
            }),
            ge.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                ge.fn[e] = function(e) {
                    for (var n, i = 0, r = [], o = ge(e), a = o.length - 1; i <= a; i++)
                        n = i === a ? this : this.clone(!0),
                        ge(o[i])[t](n),
                        le.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var pt, ft = {
                HTML: "block",
                BODY: "block"
            }, ht = /^margin/, vt = new RegExp("^(" + Re + ")(?!px)[a-z%]+$","i"), mt = function(e, t, n, i) {
                var r, o, a = {};
                for (o in t)
                    a[o] = e.style[o],
                    e.style[o] = t[o];
                r = n.apply(e, i || []);
                for (o in t)
                    e.style[o] = a[o];
                return r
            }, gt = se.documentElement;
            !function() {
                function e() {
                    var e, l, d = se.documentElement;
                    d.appendChild(c),
                    u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                    t = r = s = !1,
                    i = a = !0,
                    n.getComputedStyle && (l = n.getComputedStyle(u),
                    t = "1%" !== (l || {}).top,
                    s = "2px" === (l || {}).marginLeft,
                    r = "4px" === (l || {
                        width: "4px"
                    }).width,
                    u.style.marginRight = "50%",
                    i = "4px" === (l || {
                        marginRight: "4px"
                    }).marginRight,
                    e = u.appendChild(se.createElement("div")),
                    e.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                    e.style.marginRight = e.style.width = "0",
                    u.style.width = "1px",
                    a = !parseFloat((n.getComputedStyle(e) || {}).marginRight),
                    u.removeChild(e)),
                    u.style.display = "none",
                    o = 0 === u.getClientRects().length,
                    o && (u.style.display = "",
                    u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                    u.childNodes[0].style.borderCollapse = "separate",
                    e = u.getElementsByTagName("td"),
                    e[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                    o = 0 === e[0].offsetHeight,
                    o && (e[0].style.display = "",
                    e[1].style.display = "none",
                    o = 0 === e[0].offsetHeight)),
                    d.removeChild(c)
                }
                var t, i, r, o, a, s, c = se.createElement("div"), u = se.createElement("div");
                u.style && (u.style.cssText = "float:left;opacity:.5",
                ve.opacity = "0.5" === u.style.opacity,
                ve.cssFloat = !!u.style.cssFloat,
                u.style.backgroundClip = "content-box",
                u.cloneNode(!0).style.backgroundClip = "",
                ve.clearCloneStyle = "content-box" === u.style.backgroundClip,
                c = se.createElement("div"),
                c.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
                u.innerHTML = "",
                c.appendChild(u),
                ve.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing,
                ge.extend(ve, {
                    reliableHiddenOffsets: function() {
                        return null == t && e(),
                        o
                    },
                    boxSizingReliable: function() {
                        return null == t && e(),
                        r
                    },
                    pixelMarginRight: function() {
                        return null == t && e(),
                        i
                    },
                    pixelPosition: function() {
                        return null == t && e(),
                        t
                    },
                    reliableMarginRight: function() {
                        return null == t && e(),
                        a
                    },
                    reliableMarginLeft: function() {
                        return null == t && e(),
                        s
                    }
                }))
            }();
            var yt, bt, xt = /^(top|right|bottom|left)$/;
            n.getComputedStyle ? (yt = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n),
                t.getComputedStyle(e)
            }
            ,
            bt = function(e, t, n) {
                var i, r, o, a, s = e.style;
                return n = n || yt(e),
                a = n ? n.getPropertyValue(t) || n[t] : void 0,
                "" !== a && void 0 !== a || ge.contains(e.ownerDocument, e) || (a = ge.style(e, t)),
                n && !ve.pixelMarginRight() && vt.test(a) && ht.test(t) && (i = s.width,
                r = s.minWidth,
                o = s.maxWidth,
                s.minWidth = s.maxWidth = s.width = a,
                a = n.width,
                s.width = i,
                s.minWidth = r,
                s.maxWidth = o),
                void 0 === a ? a : a + ""
            }
            ) : gt.currentStyle && (yt = function(e) {
                return e.currentStyle
            }
            ,
            bt = function(e, t, n) {
                var i, r, o, a, s = e.style;
                return n = n || yt(e),
                a = n ? n[t] : void 0,
                null == a && s && s[t] && (a = s[t]),
                vt.test(a) && !xt.test(t) && (i = s.left,
                r = e.runtimeStyle,
                o = r && r.left,
                o && (r.left = e.currentStyle.left),
                s.left = "fontSize" === t ? "1em" : a,
                a = s.pixelLeft + "px",
                s.left = i,
                o && (r.left = o)),
                void 0 === a ? a : a + "" || "auto"
            }
            );
            var wt = /alpha\([^)]*\)/i
              , Tt = /opacity\s*=\s*([^)]*)/i
              , kt = /^(none|table(?!-c[ea]).+)/
              , It = new RegExp("^(" + Re + ")(.*)$","i")
              , Ct = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }
              , Pt = {
                letterSpacing: "0",
                fontWeight: "400"
            }
              , At = ["Webkit", "O", "Moz", "ms"]
              , Et = se.createElement("div").style;
            ge.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = bt(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": ve.cssFloat ? "cssFloat" : "styleFloat"
                },
                style: function(e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var r, o, a, s = ge.camelCase(t), c = e.style;
                        if (t = ge.cssProps[s] || (ge.cssProps[s] = M(s) || s),
                        a = ge.cssHooks[t] || ge.cssHooks[s],
                        void 0 === n)
                            return a && "get"in a && void 0 !== (r = a.get(e, !1, i)) ? r : c[t];
                        if (o = typeof n,
                        "string" === o && (r = ze.exec(n)) && r[1] && (n = m(e, t, r),
                        o = "number"),
                        null != n && n === n && ("number" === o && (n += r && r[3] || (ge.cssNumber[s] ? "" : "px")),
                        ve.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                        !(a && "set"in a && void 0 === (n = a.set(e, n, i)))))
                            try {
                                c[t] = n
                            } catch (u) {}
                    }
                },
                css: function(e, t, n, i) {
                    var r, o, a, s = ge.camelCase(t);
                    return t = ge.cssProps[s] || (ge.cssProps[s] = M(s) || s),
                    a = ge.cssHooks[t] || ge.cssHooks[s],
                    a && "get"in a && (o = a.get(e, !0, n)),
                    void 0 === o && (o = bt(e, t, i)),
                    "normal" === o && t in Pt && (o = Pt[t]),
                    "" === n || n ? (r = parseFloat(o),
                    n === !0 || isFinite(r) ? r || 0 : o) : o
                }
            }),
            ge.each(["height", "width"], function(e, t) {
                ge.cssHooks[t] = {
                    get: function(e, n, i) {
                        if (n)
                            return kt.test(ge.css(e, "display")) && 0 === e.offsetWidth ? mt(e, Ct, function() {
                                return z(e, t, i)
                            }) : z(e, t, i)
                    },
                    set: function(e, n, i) {
                        var r = i && yt(e);
                        return D(e, n, i ? R(e, t, i, ve.boxSizing && "border-box" === ge.css(e, "boxSizing", !1, r), r) : 0)
                    }
                }
            }),
            ve.opacity || (ge.cssHooks.opacity = {
                get: function(e, t) {
                    return Tt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
                },
                set: function(e, t) {
                    var n = e.style
                      , i = e.currentStyle
                      , r = ge.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
                      , o = i && i.filter || n.filter || "";
                    n.zoom = 1,
                    (t >= 1 || "" === t) && "" === ge.trim(o.replace(wt, "")) && n.removeAttribute && (n.removeAttribute("filter"),
                    "" === t || i && !i.filter) || (n.filter = wt.test(o) ? o.replace(wt, r) : o + " " + r)
                }
            }),
            ge.cssHooks.marginRight = L(ve.reliableMarginRight, function(e, t) {
                if (t)
                    return mt(e, {
                        display: "inline-block"
                    }, bt, [e, "marginRight"])
            }),
            ge.cssHooks.marginLeft = L(ve.reliableMarginLeft, function(e, t) {
                if (t)
                    return (parseFloat(bt(e, "marginLeft")) || (ge.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - mt(e, {
                        marginLeft: 0
                    }, function() {
                        return e.getBoundingClientRect().left
                    }) : 0)) + "px"
            }),
            ge.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                ge.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                            r[e + $e[i] + t] = o[i] || o[i - 2] || o[0];
                        return r
                    }
                },
                ht.test(e) || (ge.cssHooks[e + t].set = D)
            }),
            ge.fn.extend({
                css: function(e, t) {
                    return He(this, function(e, t, n) {
                        var i, r, o = {}, a = 0;
                        if (ge.isArray(t)) {
                            for (i = yt(e),
                            r = t.length; a < r; a++)
                                o[t[a]] = ge.css(e, t[a], !1, i);
                            return o
                        }
                        return void 0 !== n ? ge.style(e, t, n) : ge.css(e, t)
                    }, e, t, arguments.length > 1)
                },
                show: function() {
                    return O(this, !0)
                },
                hide: function() {
                    return O(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        Be(this) ? ge(this).show() : ge(this).hide()
                    })
                }
            }),
            ge.Tween = $,
            $.prototype = {
                constructor: $,
                init: function(e, t, n, i, r, o) {
                    this.elem = e,
                    this.prop = n,
                    this.easing = r || ge.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = i,
                    this.unit = o || (ge.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = $.propHooks[this.prop];
                    return e && e.get ? e.get(this) : $.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = $.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = ge.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                    this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : $.propHooks._default.set(this),
                    this
                }
            },
            $.prototype.init.prototype = $.prototype,
            $.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ge.css(e.elem, e.prop, ""),
                        t && "auto" !== t ? t : 0)
                    },
                    set: function(e) {
                        ge.fx.step[e.prop] ? ge.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ge.cssProps[e.prop]] && !ge.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ge.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            },
            $.propHooks.scrollTop = $.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            },
            ge.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            },
            ge.fx = $.prototype.init,
            ge.fx.step = {};
            var St, _t, Nt = /^(?:toggle|show|hide)$/, qt = /queueHooks$/;
            ge.Animation = ge.extend(Z, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return m(n.elem, e, ze.exec(t), n),
                        n
                    }
                    ]
                },
                tweener: function(e, t) {
                    ge.isFunction(e) ? (t = e,
                    e = ["*"]) : e = e.match(Ve);
                    for (var n, i = 0, r = e.length; i < r; i++)
                        n = e[i],
                        Z.tweeners[n] = Z.tweeners[n] || [],
                        Z.tweeners[n].unshift(t)
                },
                prefilters: [U],
                prefilter: function(e, t) {
                    t ? Z.prefilters.unshift(e) : Z.prefilters.push(e)
                }
            }),
            ge.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? ge.extend({}, e) : {
                    complete: n || !n && t || ge.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !ge.isFunction(t) && t
                };
                return i.duration = ge.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ge.fx.speeds ? ge.fx.speeds[i.duration] : ge.fx.speeds._default,
                null != i.queue && i.queue !== !0 || (i.queue = "fx"),
                i.old = i.complete,
                i.complete = function() {
                    ge.isFunction(i.old) && i.old.call(this),
                    i.queue && ge.dequeue(this, i.queue)
                }
                ,
                i
            }
            ,
            ge.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(Be).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var r = ge.isEmptyObject(e)
                      , o = ge.speed(t, n, i)
                      , a = function() {
                        var t = Z(this, ge.extend({}, e), o);
                        (r || ge._data(this, "finish")) && t.stop(!0)
                    };
                    return a.finish = a,
                    r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop,
                        t(n)
                    };
                    return "string" != typeof e && (n = t,
                    t = e,
                    e = void 0),
                    t && e !== !1 && this.queue(e || "fx", []),
                    this.each(function() {
                        var t = !0
                          , r = null != e && e + "queueHooks"
                          , o = ge.timers
                          , a = ge._data(this);
                        if (r)
                            a[r] && a[r].stop && i(a[r]);
                        else
                            for (r in a)
                                a[r] && a[r].stop && qt.test(r) && i(a[r]);
                        for (r = o.length; r--; )
                            o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n),
                            t = !1,
                            o.splice(r, 1));
                        !t && n || ge.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"),
                    this.each(function() {
                        var t, n = ge._data(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = ge.timers, a = i ? i.length : 0;
                        for (n.finish = !0,
                        ge.queue(this, e, []),
                        r && r.stop && r.stop.call(this, !0),
                        t = o.length; t--; )
                            o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                            o.splice(t, 1));
                        for (t = 0; t < a; t++)
                            i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }),
            ge.each(["toggle", "show", "hide"], function(e, t) {
                var n = ge.fn[t];
                ge.fn[t] = function(e, i, r) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(H(t, !0), e, i, r)
                }
            }),
            ge.each({
                slideDown: H("show"),
                slideUp: H("hide"),
                slideToggle: H("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                ge.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }),
            ge.timers = [],
            ge.fx.tick = function() {
                var e, t = ge.timers, n = 0;
                for (St = ge.now(); n < t.length; n++)
                    e = t[n],
                    e() || t[n] !== e || t.splice(n--, 1);
                t.length || ge.fx.stop(),
                St = void 0
            }
            ,
            ge.fx.timer = function(e) {
                ge.timers.push(e),
                e() ? ge.fx.start() : ge.timers.pop()
            }
            ,
            ge.fx.interval = 13,
            ge.fx.start = function() {
                _t || (_t = n.setInterval(ge.fx.tick, ge.fx.interval))
            }
            ,
            ge.fx.stop = function() {
                n.clearInterval(_t),
                _t = null
            }
            ,
            ge.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            ge.fn.delay = function(e, t) {
                return e = ge.fx ? ge.fx.speeds[e] || e : e,
                t = t || "fx",
                this.queue(t, function(t, i) {
                    var r = n.setTimeout(t, e);
                    i.stop = function() {
                        n.clearTimeout(r)
                    }
                })
            }
            ,
            function() {
                var e, t = se.createElement("input"), n = se.createElement("div"), i = se.createElement("select"), r = i.appendChild(se.createElement("option"));
                n = se.createElement("div"),
                n.setAttribute("className", "t"),
                n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                e = n.getElementsByTagName("a")[0],
                t.setAttribute("type", "checkbox"),
                n.appendChild(t),
                e = n.getElementsByTagName("a")[0],
                e.style.cssText = "top:1px",
                ve.getSetAttribute = "t" !== n.className,
                ve.style = /top/.test(e.getAttribute("style")),
                ve.hrefNormalized = "/a" === e.getAttribute("href"),
                ve.checkOn = !!t.value,
                ve.optSelected = r.selected,
                ve.enctype = !!se.createElement("form").enctype,
                i.disabled = !0,
                ve.optDisabled = !r.disabled,
                t = se.createElement("input"),
                t.setAttribute("value", ""),
                ve.input = "" === t.getAttribute("value"),
                t.value = "t",
                t.setAttribute("type", "radio"),
                ve.radioValue = "t" === t.value
            }();
            var Vt = /\r/g
              , jt = /[\x20\t\r\n\f]+/g;
            ge.fn.extend({
                val: function(e) {
                    var t, n, i, r = this[0];
                    {
                        if (arguments.length)
                            return i = ge.isFunction(e),
                            this.each(function(n) {
                                var r;
                                1 === this.nodeType && (r = i ? e.call(this, n, ge(this).val()) : e,
                                null == r ? r = "" : "number" == typeof r ? r += "" : ge.isArray(r) && (r = ge.map(r, function(e) {
                                    return null == e ? "" : e + ""
                                })),
                                t = ge.valHooks[this.type] || ge.valHooks[this.nodeName.toLowerCase()],
                                t && "set"in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                            });
                        if (r)
                            return t = ge.valHooks[r.type] || ge.valHooks[r.nodeName.toLowerCase()],
                            t && "get"in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value,
                            "string" == typeof n ? n.replace(Vt, "") : null == n ? "" : n)
                    }
                }
            }),
            ge.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = ge.find.attr(e, "value");
                            return null != t ? t : ge.trim(ge.text(e)).replace(jt, " ")
                        }
                    },
                    select: {
                        get: function(e) {
                            for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, a = o ? null : [], s = o ? r + 1 : i.length, c = r < 0 ? s : o ? r : 0; c < s; c++)
                                if (n = i[c],
                                (n.selected || c === r) && (ve.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ge.nodeName(n.parentNode, "optgroup"))) {
                                    if (t = ge(n).val(),
                                    o)
                                        return t;
                                    a.push(t)
                                }
                            return a
                        },
                        set: function(e, t) {
                            for (var n, i, r = e.options, o = ge.makeArray(t), a = r.length; a--; )
                                if (i = r[a],
                                ge.inArray(ge.valHooks.option.get(i), o) > -1)
                                    try {
                                        i.selected = n = !0
                                    } catch (s) {
                                        i.scrollHeight
                                    }
                                else
                                    i.selected = !1;
                            return n || (e.selectedIndex = -1),
                            r
                        }
                    }
                }
            }),
            ge.each(["radio", "checkbox"], function() {
                ge.valHooks[this] = {
                    set: function(e, t) {
                        if (ge.isArray(t))
                            return e.checked = ge.inArray(ge(e).val(), t) > -1
                    }
                },
                ve.checkOn || (ge.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
                )
            });
            var Lt, Mt, Ot = ge.expr.attrHandle, Dt = /^(?:checked|selected)$/i, Rt = ve.getSetAttribute, zt = ve.input;
            ge.fn.extend({
                attr: function(e, t) {
                    return He(this, ge.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        ge.removeAttr(this, e)
                    })
                }
            }),
            ge.extend({
                attr: function(e, t, n) {
                    var i, r, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                        return "undefined" == typeof e.getAttribute ? ge.prop(e, t, n) : (1 === o && ge.isXMLDoc(e) || (t = t.toLowerCase(),
                        r = ge.attrHooks[t] || (ge.expr.match.bool.test(t) ? Mt : Lt)),
                        void 0 !== n ? null === n ? void ge.removeAttr(e, t) : r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                        n) : r && "get"in r && null !== (i = r.get(e, t)) ? i : (i = ge.find.attr(e, t),
                        null == i ? void 0 : i))
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!ve.radioValue && "radio" === t && ge.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t),
                                n && (e.value = n),
                                t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, i, r = 0, o = t && t.match(Ve);
                    if (o && 1 === e.nodeType)
                        for (; n = o[r++]; )
                            i = ge.propFix[n] || n,
                            ge.expr.match.bool.test(n) ? zt && Rt || !Dt.test(n) ? e[i] = !1 : e[ge.camelCase("default-" + n)] = e[i] = !1 : ge.attr(e, n, ""),
                            e.removeAttribute(Rt ? n : i)
                }
            }),
            Mt = {
                set: function(e, t, n) {
                    return t === !1 ? ge.removeAttr(e, n) : zt && Rt || !Dt.test(n) ? e.setAttribute(!Rt && ge.propFix[n] || n, n) : e[ge.camelCase("default-" + n)] = e[n] = !0,
                    n
                }
            },
            ge.each(ge.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = Ot[t] || ge.find.attr;
                zt && Rt || !Dt.test(t) ? Ot[t] = function(e, t, i) {
                    var r, o;
                    return i || (o = Ot[t],
                    Ot[t] = r,
                    r = null != n(e, t, i) ? t.toLowerCase() : null,
                    Ot[t] = o),
                    r
                }
                : Ot[t] = function(e, t, n) {
                    if (!n)
                        return e[ge.camelCase("default-" + t)] ? t.toLowerCase() : null
                }
            }),
            zt && Rt || (ge.attrHooks.value = {
                set: function(e, t, n) {
                    return ge.nodeName(e, "input") ? void (e.defaultValue = t) : Lt && Lt.set(e, t, n)
                }
            }),
            Rt || (Lt = {
                set: function(e, t, n) {
                    var i = e.getAttributeNode(n);
                    if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)),
                    i.value = t += "",
                    "value" === n || t === e.getAttribute(n))
                        return t
                }
            },
            Ot.id = Ot.name = Ot.coords = function(e, t, n) {
                var i;
                if (!n)
                    return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
            }
            ,
            ge.valHooks.button = {
                get: function(e, t) {
                    var n = e.getAttributeNode(t);
                    if (n && n.specified)
                        return n.value
                },
                set: Lt.set
            },
            ge.attrHooks.contenteditable = {
                set: function(e, t, n) {
                    Lt.set(e, "" !== t && t, n)
                }
            },
            ge.each(["width", "height"], function(e, t) {
                ge.attrHooks[t] = {
                    set: function(e, n) {
                        if ("" === n)
                            return e.setAttribute(t, "auto"),
                            n
                    }
                }
            })),
            ve.style || (ge.attrHooks.style = {
                get: function(e) {
                    return e.style.cssText || void 0
                },
                set: function(e, t) {
                    return e.style.cssText = t + ""
                }
            });
            var $t = /^(?:input|select|textarea|button|object)$/i
              , Bt = /^(?:a|area)$/i;
            ge.fn.extend({
                prop: function(e, t) {
                    return He(this, ge.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return e = ge.propFix[e] || e,
                    this.each(function() {
                        try {
                            this[e] = void 0,
                            delete this[e]
                        } catch (t) {}
                    })
                }
            }),
            ge.extend({
                prop: function(e, t, n) {
                    var i, r, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                        return 1 === o && ge.isXMLDoc(e) || (t = ge.propFix[t] || t,
                        r = ge.propHooks[t]),
                        void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = ge.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : $t.test(e.nodeName) || Bt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                }
            }),
            ve.hrefNormalized || ge.each(["href", "src"], function(e, t) {
                ge.propHooks[t] = {
                    get: function(e) {
                        return e.getAttribute(t, 4)
                    }
                }
            }),
            ve.optSelected || (ge.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex),
                    null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex)
                }
            }),
            ge.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                ge.propFix[this.toLowerCase()] = this
            }),
            ve.enctype || (ge.propFix.enctype = "encoding");
            var Ht = /[\t\r\n\f]/g;
            ge.fn.extend({
                addClass: function(e) {
                    var t, n, i, r, o, a, s, c = 0;
                    if (ge.isFunction(e))
                        return this.each(function(t) {
                            ge(this).addClass(e.call(this, t, X(this)))
                        });
                    if ("string" == typeof e && e)
                        for (t = e.match(Ve) || []; n = this[c++]; )
                            if (r = X(n),
                            i = 1 === n.nodeType && (" " + r + " ").replace(Ht, " ")) {
                                for (a = 0; o = t[a++]; )
                                    i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                                s = ge.trim(i),
                                r !== s && ge.attr(n, "class", s)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, n, i, r, o, a, s, c = 0;
                    if (ge.isFunction(e))
                        return this.each(function(t) {
                            ge(this).removeClass(e.call(this, t, X(this)))
                        });
                    if (!arguments.length)
                        return this.attr("class", "");
                    if ("string" == typeof e && e)
                        for (t = e.match(Ve) || []; n = this[c++]; )
                            if (r = X(n),
                            i = 1 === n.nodeType && (" " + r + " ").replace(Ht, " ")) {
                                for (a = 0; o = t[a++]; )
                                    for (; i.indexOf(" " + o + " ") > -1; )
                                        i = i.replace(" " + o + " ", " ");
                                s = ge.trim(i),
                                r !== s && ge.attr(n, "class", s)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ge.isFunction(e) ? this.each(function(n) {
                        ge(this).toggleClass(e.call(this, n, X(this), t), t)
                    }) : this.each(function() {
                        var t, i, r, o;
                        if ("string" === n)
                            for (i = 0,
                            r = ge(this),
                            o = e.match(Ve) || []; t = o[i++]; )
                                r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                        else
                            void 0 !== e && "boolean" !== n || (t = X(this),
                            t && ge._data(this, "__className__", t),
                            ge.attr(this, "class", t || e === !1 ? "" : ge._data(this, "__className__") || ""));
                    })
                },
                hasClass: function(e) {
                    var t, n, i = 0;
                    for (t = " " + e + " "; n = this[i++]; )
                        if (1 === n.nodeType && (" " + X(n) + " ").replace(Ht, " ").indexOf(t) > -1)
                            return !0;
                    return !1
                }
            }),
            ge.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
                ge.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }),
            ge.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            });
            var Ft = n.location
              , Ut = ge.now()
              , Wt = /\?/
              , Zt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            ge.parseJSON = function(e) {
                if (n.JSON && n.JSON.parse)
                    return n.JSON.parse(e + "");
                var t, i = null, r = ge.trim(e + "");
                return r && !ge.trim(r.replace(Zt, function(e, n, r, o) {
                    return t && n && (i = 0),
                    0 === i ? e : (t = r || n,
                    i += !o - !r,
                    "")
                })) ? Function("return " + r)() : ge.error("Invalid JSON: " + e)
            }
            ,
            ge.parseXML = function(e) {
                var t, i;
                if (!e || "string" != typeof e)
                    return null;
                try {
                    n.DOMParser ? (i = new n.DOMParser,
                    t = i.parseFromString(e, "text/xml")) : (t = new n.ActiveXObject("Microsoft.XMLDOM"),
                    t.async = "false",
                    t.loadXML(e))
                } catch (r) {
                    t = void 0
                }
                return t && t.documentElement && !t.getElementsByTagName("parsererror").length || ge.error("Invalid XML: " + e),
                t
            }
            ;
            var Xt = /#.*$/
              , Qt = /([?&])_=[^&]*/
              , Jt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
              , Kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
              , Yt = /^(?:GET|HEAD)$/
              , Gt = /^\/\//
              , en = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
              , tn = {}
              , nn = {}
              , rn = "*/".concat("*")
              , on = Ft.href
              , an = en.exec(on.toLowerCase()) || [];
            ge.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: on,
                    type: "GET",
                    isLocal: Kt.test(an[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": rn,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": ge.parseJSON,
                        "text xml": ge.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? K(K(e, ge.ajaxSettings), t) : K(ge.ajaxSettings, e)
                },
                ajaxPrefilter: Q(tn),
                ajaxTransport: Q(nn),
                ajax: function(e, t) {
                    function i(e, t, i, r) {
                        var o, d, y, b, w, k = t;
                        2 !== x && (x = 2,
                        c && n.clearTimeout(c),
                        l = void 0,
                        s = r || "",
                        T.readyState = e > 0 ? 4 : 0,
                        o = e >= 200 && e < 300 || 304 === e,
                        i && (b = Y(p, T, i)),
                        b = G(p, b, T, o),
                        o ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"),
                        w && (ge.lastModified[a] = w),
                        w = T.getResponseHeader("etag"),
                        w && (ge.etag[a] = w)),
                        204 === e || "HEAD" === p.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = b.state,
                        d = b.data,
                        y = b.error,
                        o = !y)) : (y = k,
                        !e && k || (k = "error",
                        e < 0 && (e = 0))),
                        T.status = e,
                        T.statusText = (t || k) + "",
                        o ? v.resolveWith(f, [d, k, T]) : v.rejectWith(f, [T, k, y]),
                        T.statusCode(g),
                        g = void 0,
                        u && h.trigger(o ? "ajaxSuccess" : "ajaxError", [T, p, o ? d : y]),
                        m.fireWith(f, [T, k]),
                        u && (h.trigger("ajaxComplete", [T, p]),
                        --ge.active || ge.event.trigger("ajaxStop")))
                    }
                    "object" == typeof e && (t = e,
                    e = void 0),
                    t = t || {};
                    var r, o, a, s, c, u, l, d, p = ge.ajaxSetup({}, t), f = p.context || p, h = p.context && (f.nodeType || f.jquery) ? ge(f) : ge.event, v = ge.Deferred(), m = ge.Callbacks("once memory"), g = p.statusCode || {}, y = {}, b = {}, x = 0, w = "canceled", T = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === x) {
                                if (!d)
                                    for (d = {}; t = Jt.exec(s); )
                                        d[t[1].toLowerCase()] = t[2];
                                t = d[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? s : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return x || (e = b[n] = b[n] || e,
                            y[e] = t),
                            this
                        },
                        overrideMimeType: function(e) {
                            return x || (p.mimeType = e),
                            this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (x < 2)
                                    for (t in e)
                                        g[t] = [g[t], e[t]];
                                else
                                    T.always(e[T.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return l && l.abort(t),
                            i(0, t),
                            this
                        }
                    };
                    if (v.promise(T).complete = m.add,
                    T.success = T.done,
                    T.error = T.fail,
                    p.url = ((e || p.url || on) + "").replace(Xt, "").replace(Gt, an[1] + "//"),
                    p.type = t.method || t.type || p.method || p.type,
                    p.dataTypes = ge.trim(p.dataType || "*").toLowerCase().match(Ve) || [""],
                    null == p.crossDomain && (r = en.exec(p.url.toLowerCase()),
                    p.crossDomain = !(!r || r[1] === an[1] && r[2] === an[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (an[3] || ("http:" === an[1] ? "80" : "443")))),
                    p.data && p.processData && "string" != typeof p.data && (p.data = ge.param(p.data, p.traditional)),
                    J(tn, p, t, T),
                    2 === x)
                        return T;
                    u = ge.event && p.global,
                    u && 0 === ge.active++ && ge.event.trigger("ajaxStart"),
                    p.type = p.type.toUpperCase(),
                    p.hasContent = !Yt.test(p.type),
                    a = p.url,
                    p.hasContent || (p.data && (a = p.url += (Wt.test(a) ? "&" : "?") + p.data,
                    delete p.data),
                    p.cache === !1 && (p.url = Qt.test(a) ? a.replace(Qt, "$1_=" + Ut++) : a + (Wt.test(a) ? "&" : "?") + "_=" + Ut++)),
                    p.ifModified && (ge.lastModified[a] && T.setRequestHeader("If-Modified-Since", ge.lastModified[a]),
                    ge.etag[a] && T.setRequestHeader("If-None-Match", ge.etag[a])),
                    (p.data && p.hasContent && p.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", p.contentType),
                    T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + rn + "; q=0.01" : "") : p.accepts["*"]);
                    for (o in p.headers)
                        T.setRequestHeader(o, p.headers[o]);
                    if (p.beforeSend && (p.beforeSend.call(f, T, p) === !1 || 2 === x))
                        return T.abort();
                    w = "abort";
                    for (o in {
                        success: 1,
                        error: 1,
                        complete: 1
                    })
                        T[o](p[o]);
                    if (l = J(nn, p, t, T)) {
                        if (T.readyState = 1,
                        u && h.trigger("ajaxSend", [T, p]),
                        2 === x)
                            return T;
                        p.async && p.timeout > 0 && (c = n.setTimeout(function() {
                            T.abort("timeout")
                        }, p.timeout));
                        try {
                            x = 1,
                            l.send(y, i)
                        } catch (k) {
                            if (!(x < 2))
                                throw k;
                            i(-1, k)
                        }
                    } else
                        i(-1, "No Transport");
                    return T
                },
                getJSON: function(e, t, n) {
                    return ge.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return ge.get(e, void 0, t, "script")
                }
            }),
            ge.each(["get", "post"], function(e, t) {
                ge[t] = function(e, n, i, r) {
                    return ge.isFunction(n) && (r = r || i,
                    i = n,
                    n = void 0),
                    ge.ajax(ge.extend({
                        url: e,
                        type: t,
                        dataType: r,
                        data: n,
                        success: i
                    }, ge.isPlainObject(e) && e))
                }
            }),
            ge._evalUrl = function(e) {
                return ge.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }
            ,
            ge.fn.extend({
                wrapAll: function(e) {
                    if (ge.isFunction(e))
                        return this.each(function(t) {
                            ge(this).wrapAll(e.call(this, t))
                        });
                    if (this[0]) {
                        var t = ge(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]),
                        t.map(function() {
                            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                                e = e.firstChild;
                            return e
                        }).append(this)
                    }
                    return this
                },
                wrapInner: function(e) {
                    return ge.isFunction(e) ? this.each(function(t) {
                        ge(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = ge(this)
                          , n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = ge.isFunction(e);
                    return this.each(function(n) {
                        ge(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        ge.nodeName(this, "body") || ge(this).replaceWith(this.childNodes)
                    }).end()
                }
            }),
            ge.expr.filters.hidden = function(e) {
                return ve.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : te(e)
            }
            ,
            ge.expr.filters.visible = function(e) {
                return !ge.expr.filters.hidden(e)
            }
            ;
            var sn = /%20/g
              , cn = /\[\]$/
              , un = /\r?\n/g
              , ln = /^(?:submit|button|image|reset|file)$/i
              , dn = /^(?:input|select|textarea|keygen)/i;
            ge.param = function(e, t) {
                var n, i = [], r = function(e, t) {
                    t = ge.isFunction(t) ? t() : null == t ? "" : t,
                    i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
                if (void 0 === t && (t = ge.ajaxSettings && ge.ajaxSettings.traditional),
                ge.isArray(e) || e.jquery && !ge.isPlainObject(e))
                    ge.each(e, function() {
                        r(this.name, this.value)
                    });
                else
                    for (n in e)
                        ne(n, e[n], t, r);
                return i.join("&").replace(sn, "+")
            }
            ,
            ge.fn.extend({
                serialize: function() {
                    return ge.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = ge.prop(this, "elements");
                        return e ? ge.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !ge(this).is(":disabled") && dn.test(this.nodeName) && !ln.test(e) && (this.checked || !Fe.test(e))
                    }).map(function(e, t) {
                        var n = ge(this).val();
                        return null == n ? null : ge.isArray(n) ? ge.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(un, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(un, "\r\n")
                        }
                    }).get()
                }
            }),
            ge.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function() {
                return this.isLocal ? re() : se.documentMode > 8 ? ie() : /^(get|post|head|put|delete|options)$/i.test(this.type) && ie() || re()
            }
            : ie;
            var pn = 0
              , fn = {}
              , hn = ge.ajaxSettings.xhr();
            n.attachEvent && n.attachEvent("onunload", function() {
                for (var e in fn)
                    fn[e](void 0, !0)
            }),
            ve.cors = !!hn && "withCredentials"in hn,
            hn = ve.ajax = !!hn,
            hn && ge.ajaxTransport(function(e) {
                if (!e.crossDomain || ve.cors) {
                    var t;
                    return {
                        send: function(i, r) {
                            var o, a = e.xhr(), s = ++pn;
                            if (a.open(e.type, e.url, e.async, e.username, e.password),
                            e.xhrFields)
                                for (o in e.xhrFields)
                                    a[o] = e.xhrFields[o];
                            e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                            e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                            for (o in i)
                                void 0 !== i[o] && a.setRequestHeader(o, i[o] + "");
                            a.send(e.hasContent && e.data || null),
                            t = function(n, i) {
                                var o, c, u;
                                if (t && (i || 4 === a.readyState))
                                    if (delete fn[s],
                                    t = void 0,
                                    a.onreadystatechange = ge.noop,
                                    i)
                                        4 !== a.readyState && a.abort();
                                    else {
                                        u = {},
                                        o = a.status,
                                        "string" == typeof a.responseText && (u.text = a.responseText);
                                        try {
                                            c = a.statusText
                                        } catch (l) {
                                            c = ""
                                        }
                                        o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = u.text ? 200 : 404
                                    }
                                u && r(o, c, u, a.getAllResponseHeaders())
                            }
                            ,
                            e.async ? 4 === a.readyState ? n.setTimeout(t) : a.onreadystatechange = fn[s] = t : t()
                        },
                        abort: function() {
                            t && t(void 0, !0)
                        }
                    }
                }
            }),
            ge.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return ge.globalEval(e),
                        e
                    }
                }
            }),
            ge.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET",
                e.global = !1)
            }),
            ge.ajaxTransport("script", function(e) {
                if (e.crossDomain) {
                    var t, n = se.head || ge("head")[0] || se.documentElement;
                    return {
                        send: function(i, r) {
                            t = se.createElement("script"),
                            t.async = !0,
                            e.scriptCharset && (t.charset = e.scriptCharset),
                            t.src = e.url,
                            t.onload = t.onreadystatechange = function(e, n) {
                                (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null,
                                t.parentNode && t.parentNode.removeChild(t),
                                t = null,
                                n || r(200, "success"))
                            }
                            ,
                            n.insertBefore(t, n.firstChild)
                        },
                        abort: function() {
                            t && t.onload(void 0, !0)
                        }
                    }
                }
            });
            var vn = []
              , mn = /(=)\?(?=&|$)|\?\?/;
            ge.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = vn.pop() || ge.expando + "_" + Ut++;
                    return this[e] = !0,
                    e
                }
            }),
            ge.ajaxPrefilter("json jsonp", function(e, t, i) {
                var r, o, a, s = e.jsonp !== !1 && (mn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && mn.test(e.data) && "data");
                if (s || "jsonp" === e.dataTypes[0])
                    return r = e.jsonpCallback = ge.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                    s ? e[s] = e[s].replace(mn, "$1" + r) : e.jsonp !== !1 && (e.url += (Wt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                    e.converters["script json"] = function() {
                        return a || ge.error(r + " was not called"),
                        a[0]
                    }
                    ,
                    e.dataTypes[0] = "json",
                    o = n[r],
                    n[r] = function() {
                        a = arguments
                    }
                    ,
                    i.always(function() {
                        void 0 === o ? ge(n).removeProp(r) : n[r] = o,
                        e[r] && (e.jsonpCallback = t.jsonpCallback,
                        vn.push(r)),
                        a && ge.isFunction(o) && o(a[0]),
                        a = o = void 0
                    }),
                    "script"
            }),
            ge.parseHTML = function(e, t, n) {
                if (!e || "string" != typeof e)
                    return null;
                "boolean" == typeof t && (n = t,
                t = !1),
                t = t || se;
                var i = Pe.exec(e)
                  , r = !n && [];
                return i ? [t.createElement(i[1])] : (i = w([e], t, r),
                r && r.length && ge(r).remove(),
                ge.merge([], i.childNodes))
            }
            ;
            var gn = ge.fn.load;
            ge.fn.load = function(e, t, n) {
                if ("string" != typeof e && gn)
                    return gn.apply(this, arguments);
                var i, r, o, a = this, s = e.indexOf(" ");
                return s > -1 && (i = ge.trim(e.slice(s, e.length)),
                e = e.slice(0, s)),
                ge.isFunction(t) ? (n = t,
                t = void 0) : t && "object" == typeof t && (r = "POST"),
                a.length > 0 && ge.ajax({
                    url: e,
                    type: r || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    o = arguments,
                    a.html(i ? ge("<div>").append(ge.parseHTML(e)).find(i) : e)
                }).always(n && function(e, t) {
                    a.each(function() {
                        n.apply(this, o || [e.responseText, t, e])
                    })
                }
                ),
                this
            }
            ,
            ge.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                ge.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }),
            ge.expr.filters.animated = function(e) {
                return ge.grep(ge.timers, function(t) {
                    return e === t.elem
                }).length
            }
            ,
            ge.offset = {
                setOffset: function(e, t, n) {
                    var i, r, o, a, s, c, u, l = ge.css(e, "position"), d = ge(e), p = {};
                    "static" === l && (e.style.position = "relative"),
                    s = d.offset(),
                    o = ge.css(e, "top"),
                    c = ge.css(e, "left"),
                    u = ("absolute" === l || "fixed" === l) && ge.inArray("auto", [o, c]) > -1,
                    u ? (i = d.position(),
                    a = i.top,
                    r = i.left) : (a = parseFloat(o) || 0,
                    r = parseFloat(c) || 0),
                    ge.isFunction(t) && (t = t.call(e, n, ge.extend({}, s))),
                    null != t.top && (p.top = t.top - s.top + a),
                    null != t.left && (p.left = t.left - s.left + r),
                    "using"in t ? t.using.call(e, p) : d.css(p)
                }
            },
            ge.fn.extend({
                offset: function(e) {
                    if (arguments.length)
                        return void 0 === e ? this : this.each(function(t) {
                            ge.offset.setOffset(this, e, t)
                        });
                    var t, n, i = {
                        top: 0,
                        left: 0
                    }, r = this[0], o = r && r.ownerDocument;
                    if (o)
                        return t = o.documentElement,
                        ge.contains(t, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()),
                        n = oe(o),
                        {
                            top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                            left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                        }) : i
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n = {
                            top: 0,
                            left: 0
                        }, i = this[0];
                        return "fixed" === ge.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(),
                        t = this.offset(),
                        ge.nodeName(e[0], "html") || (n = e.offset()),
                        n.top += ge.css(e[0], "borderTopWidth", !0),
                        n.left += ge.css(e[0], "borderLeftWidth", !0)),
                        {
                            top: t.top - n.top - ge.css(i, "marginTop", !0),
                            left: t.left - n.left - ge.css(i, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && !ge.nodeName(e, "html") && "static" === ge.css(e, "position"); )
                            e = e.offsetParent;
                        return e || gt
                    })
                }
            }),
            ge.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, t) {
                var n = /Y/.test(t);
                ge.fn[e] = function(i) {
                    return He(this, function(e, i, r) {
                        var o = oe(e);
                        return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void (o ? o.scrollTo(n ? ge(o).scrollLeft() : r, n ? r : ge(o).scrollTop()) : e[i] = r)
                    }, e, i, arguments.length, null)
                }
            }),
            ge.each(["top", "left"], function(e, t) {
                ge.cssHooks[t] = L(ve.pixelPosition, function(e, n) {
                    if (n)
                        return n = bt(e, t),
                        vt.test(n) ? ge(e).position()[t] + "px" : n
                })
            }),
            ge.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                ge.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, i) {
                    ge.fn[i] = function(i, r) {
                        var o = arguments.length && (n || "boolean" != typeof i)
                          , a = n || (i === !0 || r === !0 ? "margin" : "border");
                        return He(this, function(t, n, i) {
                            var r;
                            return ge.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement,
                            Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? ge.css(t, n, a) : ge.style(t, n, i, a)
                        }, t, o ? i : void 0, o, null)
                    }
                })
            }),
            ge.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, i) {
                    return this.on(t, e, n, i)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }),
            ge.fn.size = function() {
                return this.length
            }
            ,
            ge.fn.andSelf = ge.fn.addBack,
            i = [],
            r = function() {
                return ge
            }
            .apply(t, i),
            !(void 0 !== r && (e.exports = r));
            var yn = n.jQuery
              , bn = n.$;
            return ge.noConflict = function(e) {
                return n.$ === ge && (n.$ = bn),
                e && n.jQuery === ge && (n.jQuery = yn),
                ge
            }
            ,
            o || (n.jQuery = n.$ = ge),
            ge
        })
    }
    , function(e, t, n) {
        var i = (n(5),
        n(24));
        i.resolve = n(26),
        i.reject = n(27),
        i.prototype["catch"] = i.prototype.caught = function(e) {
            return this.then(null, e)
        }
        ,
        e.exports = i
    }
    , function(e, t, n) {
        (function(t, i, r) {
            function t(e) {
                var t = this;
                t.handlers = {},
                t.children = [],
                t.state = l;
                var n = f(t, d)
                  , i = f(t, p);
                try {
                    e(function(e) {
                        n(e)
                    }, function(e) {
                        i(e)
                    })
                } catch (r) {
                    i(r)
                }
            }
            function o(e, t, n) {
                e.state = t,
                e.result = n,
                c.each(e.children, function(e) {
                    a(e, t, n)
                })
            }
            function a(e, t, n) {
                s(function() {
                    var i = e.handlers[t];
                    if (u.fn(i)) {
                        var r;
                        try {
                            r = i(n)
                        } catch (a) {
                            return o(e, p, a)
                        }
                        f(e, d, r)
                    } else
                        f(e, t, n)
                })
            }
            function s(e) {
                i.process && r.nextTick ? r.nextTick(e) : setTimeout(e)
            }
            var c = n(5)
              , u = c.is
              , l = 0
              , d = 1
              , p = -1;
            e.exports = t,
            t.prototype.then = function(e, n) {
                var i = this
                  , r = new t(c.noop)
                  , o = r.handlers;
                return o[d] = e,
                o[p] = n,
                l == i.state ? i.children.push(r) : a(r, i.state, i.result),
                r
            }
            ;
            var f = c.curry(function(e, t, n) {
                if (e === n)
                    return f(e, p, new TypeError("circle promise"));
                if (e.state == l) {
                    var i;
                    if (u.oof(n))
                        try {
                            i = n.then
                        } catch (r) {
                            return o(e, p, r)
                        }
                    if (u.fn(i)) {
                        var a = c.once(function(t, n) {
                            t == p ? o(e, t, n) : f(e, t, n)
                        });
                        try {
                            i.call(n, function(e) {
                                a(d, e)
                            }, function(e) {
                                a(p, e)
                            })
                        } catch (s) {
                            a(p, s)
                        }
                    } else
                        o(e, t, n)
                }
            })
        }
        ).call(t, n(23), function() {
            return this
        }(), n(25))
    }
    , function(e, t) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }
        function i() {
            throw new Error("clearTimeout has not been defined")
        }
        function r(e) {
            if (l === setTimeout)
                return setTimeout(e, 0);
            if ((l === n || !l) && setTimeout)
                return l = setTimeout,
                setTimeout(e, 0);
            try {
                return l(e, 0)
            } catch (t) {
                try {
                    return l.call(null, e, 0)
                } catch (t) {
                    return l.call(this, e, 0)
                }
            }
        }
        function o(e) {
            if (d === clearTimeout)
                return clearTimeout(e);
            if ((d === i || !d) && clearTimeout)
                return d = clearTimeout,
                clearTimeout(e);
            try {
                return d(e)
            } catch (t) {
                try {
                    return d.call(null, e)
                } catch (t) {
                    return d.call(this, e)
                }
            }
        }
        function a() {
            v && f && (v = !1,
            f.length ? h = f.concat(h) : m = -1,
            h.length && s())
        }
        function s() {
            if (!v) {
                var e = r(a);
                v = !0;
                for (var t = h.length; t; ) {
                    for (f = h,
                    h = []; ++m < t; )
                        f && f[m].run();
                    m = -1,
                    t = h.length
                }
                f = null,
                v = !1,
                o(e)
            }
        }
        function c(e, t) {
            this.fun = e,
            this.array = t
        }
        function u() {}
        var l, d, p = e.exports = {};
        !function() {
            try {
                l = "function" == typeof setTimeout ? setTimeout : n
            } catch (e) {
                l = n
            }
            try {
                d = "function" == typeof clearTimeout ? clearTimeout : i
            } catch (e) {
                d = i
            }
        }();
        var f, h = [], v = !1, m = -1;
        p.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
            h.push(new c(e,t)),
            1 !== h.length || v || r(s)
        }
        ,
        c.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        p.title = "browser",
        p.browser = !0,
        p.env = {},
        p.argv = [],
        p.version = "",
        p.versions = {},
        p.on = u,
        p.addListener = u,
        p.once = u,
        p.off = u,
        p.removeListener = u,
        p.removeAllListeners = u,
        p.emit = u,
        p.binding = function(e) {
            throw new Error("process.binding is not supported")
        }
        ,
        p.cwd = function() {
            return "/"
        }
        ,
        p.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }
        ,
        p.umask = function() {
            return 0
        }
    }
    , function(e, t, n) {
        var i = n(24);
        e.exports = function(e) {
            return new i(function(t, n) {
                t(e)
            }
            )
        }
    }
    , function(e, t, n) {
        var i = n(24);
        e.exports = function(e) {
            return new i(function(t, n) {
                n(e)
            }
            )
        }
    }
    , function(e, t, n) {
        (function(i, r) {
            function o(e) {
                var t = this;
                t[d] = e,
                t.memory = {},
                s.call(t),
                t.setState("idle")
            }
            function a(e) {
                var t = -1;
                return e && e.getCuepointType && (t = e.getCuepointType()),
                t = parseInt(t),
                c.number(t) || (t = -1),
                t
            }
            var s = n(29)
              , c = i.is
              , u = n(32);
            e.exports = t = o;
            var l = "global sdk view request slot ad env".split(" ")
              , d = "contextName";
            i.inherits(o, s);
            var p = o.prototype;
            o.getLevel = function(e) {
                return i.indexOf(l, e)
            }
            ,
            p.isContext = function(e) {
                return this[d] == e
            }
            ,
            p.index = function() {
                var e = this;
                return e.parent ? i.indexOf(e.parent.children, e) : -1
            }
            ,
            p.setState = function(e) {
                var t = this;
                t.state != e && (t.lastState = t.state,
                t.state = e,
                t.emit("statechange", e))
            }
            ,
            p.belong = function(e) {
                var t = i.indexOf(l, this[d])
                  , n = i.indexOf(l, e);
                return t > -1 && n > -1 && n <= t
            }
            ,
            p.setParent = function(e) {
                var t = this;
                e && (t[e[d]] = t.parent = e,
                e.children = e.children || [],
                e.children.push(t))
            }
            ,
            p.getParentByName = function(e) {
                for (var t = this; t; ) {
                    if (t[d] == e)
                        return t;
                    t = t.parent
                }
            }
            ,
            p.getVideo = function() {
                var e = this
                  , t = e.getParentByName("sdk");
                if (t)
                    return t.video
            }
            ,
            p.getVal = function(e) {
                for (var t = this; t; ) {
                    if (i.has(t, e))
                        return t[e];
                    t = t.parent
                }
            }
            ,
            p.getMultiVals = function(e) {
                var t = this
                  , n = {};
                return i.each(e, function(e) {
                    n[e] = t.getVal(e)
                }),
                n
            }
            ,
            p.getInfo = function() {
                return {}
            }
            ,
            p.getParam = function() {
                for (var e = this, t = 8, n = []; t-- && e; )
                    n.push(e),
                    e = e.parent;
                return n.reverse(),
                n.unshift({}),
                i.extend.apply(i, n)
            }
            ,
            p.isPause = function() {
                return u.pause == a(this)
            }
            ,
            p.isPreroll = function() {
                return u.preroll == a(this)
            }
            ,
            p.isMidroll = function() {
                return u.midroll == a(this)
            }
            ,
            p.isRoll = function() {
                return i.includes([u.preroll, u.midroll, u.postroll], a(this))
            }
            ,
            p.isPage = function() {
                return u.page == a(this)
            }
            ,
            p.isToolbar = function() {
                return u.toolbar == a(this)
            }
            ,
            p.isViewPoint = function() {
                return u.viewPoint == a(this)
            }
            ,
            p.isGeneralOverlay = function() {
                var e = [u.viewPoint, u.common_overlay, u.common_overlay2];
                return i.includes(e, a(this))
            }
            ,
            p.isEnded = function() {
                var e = this.state
                  , t = "ended" == e || "end" == e;
                return !!t
            }
            ,
            p.runIfNotEnded = function(e) {
                this.isEnded() || e()
            }
            ,
            p.isLiving = function(e) {
                var t, n = this;
                if (n.error ? t = n.error : n.isEnded() && (t = "ended"),
                t)
                    return r.reject(t);
                var i = e();
                return r.resolve(i)
            }
            ,
            i.each("pause resume resize".split(" "), function(e) {
                p[e] = function() {
                    var t = this;
                    t.runIfNotEnded(function() {
                        i.each(t.children, function(t) {
                            if (t.isContext("ad")) {
                                var n = i.includes(["playing", "paused", "complete"], t.state);
                                if (!n)
                                    return
                            }
                            t[e]()
                        })
                    })
                }
            })
        }
        ).call(t, n(5), n(23))
    }
    , function(e, t, n) {
        function i() {
            return this instanceof i ? void (this[a] = new o) : new i
        }
        var r = n(5)
          , o = n(30);
        e.exports = i;
        var a = "emitter"
          , s = i.prototype;
        s.on = function(e, t) {
            return this[a].on(e, t)
        }
        ,
        s.once = function(e, t) {
            return this[a].once(e, t)
        }
        ,
        s.emit = function(e) {
            var t = r.slice(arguments, 1)
              , n = this;
            return n[a].emit(e, null, function(e) {
                e.handler.apply(n, t)
            })
        }
        ,
        s.off = function(e, t) {
            var n;
            return t && (n = function(e) {
                return e.handler == t
            }
            ),
            this[a].off(e, n)
        }
    }
    , function(e, t, n) {
        function i() {
            return this instanceof i ? void (this.cache = {}) : new i
        }
        function r() {
            return !0
        }
        function o(e) {
            e.handler()
        }
        var a = n(5)
          , s = n(31)
          , c = a.is;
        e.exports = i;
        var u = i.prototype;
        u.on = function(e, t) {
            if (c.fn(t)) {
                var n = {};
                n.handler = t;
                var i = s(this.cache, e, []);
                return i.push(n),
                n
            }
        }
        ,
        u.once = function(e, t) {
            function n() {
                i || (i = !0,
                r.off(function(e) {
                    return e.handler == n
                }),
                n = null,
                t.apply(this, arguments))
            }
            if (c.fn(t)) {
                var i, r = this;
                return r.on(e, n)
            }
        }
        ,
        u.emit = function(e, t, n) {
            var i = this.filter(e, t);
            return a.each(i, n || o),
            i
        }
        ,
        u.off = function(e, t) {
            void 0 === e ? this.cache = {} : a.remove(this.cache[e], t || r)
        }
        ,
        u.filter = function(e, t) {
            return a.filter(this.cache[e], t || r)
        }
    }
    , function(e, t) {
        e.exports = function(e, t, n) {
            if (n = n || {},
            e) {
                if (null != e[t])
                    return e[t];
                e[t] = n
            }
            return n
        }
    }
    , function(e, t, n) {
        (function(e) {
            var n = t;
            n.name2cuepoint = {
                page: 0,
                preroll: 1,
                midroll: 2,
                postroll: 3,
                corner: 4,
                mark: 5,
                pause: 6,
                toolbar: 7,
                viewPoint: 8,
                overlay: 9,
                common_overlay: 10,
                common_overlay2: 11
            },
            e.extend(n, n.name2cuepoint),
            n.cuepoint2name = e.invert(n.name2cuepoint)
        }
        ).call(t, n(5))
    }
    , function(e, t, n) {
        (function(t, i) {
            function r(e, t) {
                var n = this;
                c.call(n, a),
                n.setParent(t),
                n.sdk = t,
                n.video = n.sdk.video,
                n.init(e),
                n.currentOverlayAds = [],
                n.bindEvent(),
                n.toolbarRequest = null,
                n.isBusyLoading = !0,
                n.hasPrerollRequestFailed = !1,
                n.pageUrl = h.getPageUrl()
            }
            function o(e) {
                var n = [e.episodeId, e.uaaUserId, t.now(), Math.random()];
                return l(n.join(""))
            }
            var a = "view"
              , s = n(17).Log
              , c = n(28)
              , u = n(34)
              , l = n(49)
              , d = n(50)
              , p = n(91)
              , f = n(32)
              , h = n(36)
              , v = t.is
              , m = "videoEventId channelId episodeId albumId videoDefinition videoDuration autoload playSource isPreload".split(" ");
            e.exports = r,
            t.inherits(r, c);
            var g = r.prototype;
            g.getSummary = function() {
                var e = this
                  , t = [];
                return e.isCurrentView() && t.push("进行中!!"),
                e.isVideoView() && (t.push("视频", e.episodeId),
                e.isPreload && t.push("连播")),
                t.push(e.videoEventId),
                t.join(" ")
            }
            ,
            g.isVideoView = function() {
                var e = this;
                return !(v.empty(e.episodeId) || !e.video)
            }
            ,
            g.isCurrentView = function() {
                var e = this;
                return !(!e.sdk || e != e.sdk.currentView)
            }
            ,
            g.notifyPlayer = function(e) {
                var n = this;
                e = t.extend({
                    tvId: n.episodeId,
                    videoEventId: n.getVal("videoEventId")
                }, e),
                n.log.debug("notify video adplayer_ad_info", e),
                n.sdk.emit("adplayer_ad_info", e)
            }
            ,
            g.tryPlayToolbar = function() {
                var e = this;
                if (e.toolbarRequest)
                    e.toolbarRequest.tryReplay();
                else if (e.schedule) {
                    var t = e.schedule.getAdBreaksByType(f.toolbar);
                    v.empty(t) || (e.log.debug("request toolbar"),
                    e.toolbarRequest = new d({
                        adBreaks: t
                    },e),
                    e.toolbarRequest.play())
                }
            }
            ,
            g.tryStopToolbar = function() {
                var e = this;
                e.toolbarRequest && (e.log.debug("stop toolbar"),
                e.toolbarRequest.abort())
            }
            ,
            g.startVideo = function(e) {
                var t = this;
                if (!0 !== t.isVideoPlaying && !t.ended) {
                    var n = "roll-ended"
                      , i = {
                        rollType: e,
                        videoEventId: t.getVal("videoEventId")
                    };
                    t.log.debug(n, i),
                    t.onNetworkFree(),
                    t.sdk.emit(n, i),
                    t.schedule && (t.schedule.startTimer(),
                    t.showAndResume()),
                    t.isVideoPlaying = !0,
                    t.sdk.video.removeOptions("video start")
                }
            }
            ,
            g.startLoadVideo = function(e) {
                var t = this;
                if (!t.ended) {
                    e = e || {};
                    var n = "roll-load-finish"
                      , i = {
                        rollType: e.rollType,
                        reason: e.reason,
                        videoEventId: t.getVal("videoEventId")
                    };
                    t.log.debug(n, i),
                    t.sdk.emit(n, i)
                }
            }
            ,
            g.stopVideo = function(e) {
                var t = this;
                if (!1 !== t.isVideoPlaying) {
                    var n = "roll-play"
                      , i = {
                        videoEventId: t.getVal("videoEventId"),
                        rollType: e
                    };
                    t.log.debug(n, i),
                    t.sdk.emit(n, i),
                    t.schedule && t.schedule.stopTimer(),
                    t.isVideoPlaying = !1
                }
            }
            ,
            g.init = function(e) {
                var n = this;
                e = t.extend({
                    playSource: 0,
                    isPreload: !1
                }, e);
                var r = t.only(e, m);
                t.extend(n, r),
                n.log = s.getLogger("view:" + (n.episodeId || "untitled")),
                n.log.debug("init");
                var a = e.videoEventId || o(e);
                n.id = n.videoEventId = a,
                n.isVideoView() && (n.adPlayedDurationInView = 0,
                n.midrollPointsPlayedInView = 0,
                n.lastRollCompleteTime = NaN,
                n.lastMidrollRequestTime = 0,
                n.pauseRequestTimes = 0,
                n.pauseTimes = 0),
                n.schedule = new p(n),
                u.send(n, {
                    type: "visit",
                    subtype: "success",
                    location: t.get(i, "location.href"),
                    customInfo: n.getVal("sdkUrl")
                });
                var c = this;
                return c.isPreload && c.sdk.currentView && (c.continueFromView = c.sdk.currentView),
                0 != n.autoload && n.load(e),
                n
            }
            ,
            g.getContinuingViews = function() {
                for (var e = this, t = [], n = e.continueFromView; n; )
                    t.push(n),
                    n = n.continueFromView;
                return t
            }
            ,
            g.load = function(e) {
                var t = this;
                t.log.debug("load"),
                e = e || {};
                var n = new d(e,t);
                return t.isPreload || n.play(),
                t
            }
            ,
            g.tryPlayPreload = function() {
                var e = this;
                if (e.isPreload) {
                    var n = t.first(e.children);
                    n && n.play()
                }
            }
            ,
            g.onNetworkFree = function() {
                var e = this;
                e.isBusyLoading && (e.log.debug("network free"),
                e.isBusyLoading = !1,
                e.tryRequestSecondaryAd())
            }
            ,
            g.tryRequestSecondaryAd = function() {
                var e = this;
                if (e.log.debug("try load viewpoint and page"),
                e.schedule) {
                    var t = e.schedule.getAdBreaksByType(f.viewPoint)
                      , n = e.schedule.getAdBreaksByType(f.page)
                      , i = t.concat(n);
                    if (!v.empty(i)) {
                        var r = new d({
                            adBreaks: i
                        },e);
                        r.play()
                    }
                }
            }
            ,
            g.abort = function() {
                var e = this;
                e.ended || (e.log.debug("abort"),
                e.ended = !0,
                e.schedule && e.schedule.stopTimer(),
                h.notifyPage("clearAds", {
                    templateType: "viewPoint",
                    adZoneId: e.viewPointAdZoneId,
                    videoEventId: e.getVal("videoEventId")
                }),
                t.map(e.children, function(e) {
                    e.abort()
                }))
            }
            ,
            g.bindEvent = function() {
                var e = this;
                return e.once("startLoadVideo", function(t) {
                    e.startLoadVideo(t)
                }),
                e
            }
            ,
            g.loadPause = function(e) {
                var n = this;
                if (n.schedule) {
                    var i = n.schedule.getAdBreaksByType(f.pause);
                    if (i = t.map(i, function(e) {
                        return t.extend({}, e, {
                            sequenceId: n.pauseTimes
                        })
                    }),
                    v.empty(i))
                        n.log.debug("no pause schedule");
                    else {
                        n.log.debug("load pause"),
                        e = e || {},
                        e.requestIndex = e.requestIndex || 1,
                        n.pauseRequestTimes++;
                        var r = new d({
                            adBreaks: i,
                            requestIndex: e.requestIndex,
                            from: e.from
                        },n);
                        r.play()
                    }
                }
            }
            ,
            g.addCurrentOverlayAd = function(e) {
                this.currentOverlayAds.push(e)
            }
            ,
            g.removeCurrentOverlayAd = function(e) {
                t.remove(this.currentOverlayAds, function(t) {
                    return e == t
                })
            }
            ,
            g.showAndResume = function() {
                var e = this;
                e.resume(),
                t.each(e.currentOverlayAds, function(t) {
                    e.log.debug("show and resume current overlay", t.format());
                    var n = t.$adzone;
                    n && n.show()
                })
            }
            ,
            g.tryStopPauseAd = function() {
                var e = this;
                t.remove(e.children, function(e) {
                    if (e.isPause())
                        return e.abort(),
                        !0
                })
            }
        }
        ).call(t, n(5), function() {
            return this
        }())
    }
    , function(e, t, n) {
        (function(i) {
            function r() {
                var e = this;
                e.uncompressedParam = {},
                e.compressedParam = {}
            }
            var o = n(16)("pingback")
              , a = n(35)
              , s = n(36)
              , c = n(48)
              , u = n(28)
              , l = i.is;
            e.exports = t = r;
            var d = ["isVIP", "isPreload"]
              , p = "http://msg.71.am/cp2.gif";
            s.isHttps() && (p = "https://msg.iqiyi.com/cp2.gif");
            var f = {
                visit: "v",
                player: "pl",
                policy: "p",
                show: "s",
                template: "tp",
                creative: "c",
                tracking: "t",
                exchangeTracking: "x",
                mixer: "m",
                statistics: "st",
                ad: "a",
                inventory: "i",
                questionnaireInquiry: "qi"
            }
              , h = {
                success: "s",
                error: "e",
                load: "l",
                skip: "sk",
                skipClick: "sc",
                click: "clk",
                impression: "imp",
                adblock: "adb",
                close: "cls",
                start: "st",
                unsupported: "uns"
            }
              , v = {
                type: "p",
                subtype: "t",
                uaaUserId: "u",
                cupidUserId: "a",
                episodeId: "v",
                albumId: "b",
                channelId: "c",
                videoEventId: "e",
                adPlayerId: "y",
                customInfo: "x",
                timestamp: "s",
                videoDuration: "d",
                isVIP: "g",
                isPreload: "pl",
                passportId: "pp",
                location: "lc",
                sdkVersion: "av",
                clientVersion: "vv",
                requestId: "rid",
                sequenceId: "sq",
                orderItemId: "od",
                creativeId: "ct",
                dspId: "dp",
                adInfo: "ai",
                adStrategy: "as",
                rawInventory: "ri",
                originalInventory: "oi",
                deliveredInventory: "di",
                forbiddenInventory: "fi",
                requestDuration: "rd",
                requestCount: "rc",
                reqCount: "rc",
                errorCode: "ec",
                errCode: "ec",
                errorMessage: "em",
                errMessage: "em",
                errMsg: "em"
            }
              , m = c(v)
              , g = "type subtype timestamp videoEventId adPlayerId uaaUserId cupidUserId sdkVersion clientVersion isVIP videoDuration requestId"
              , y = {
                visit: "episodeId albumId channelId location passportId customInfo isPreload",
                show: "requestCount requestDuration",
                creative: "",
                tracking: "",
                statistics: "",
                ad: "episodeId albumId channelId sequenceId",
                inventory: "episodeId albumId channelId rawInventory originalInventory deliveredInventory forbiddenInventory"
            };
            r.send = function(e, t, n) {
                var i = new r;
                i.addUncompressedParam(t),
                i.addCompressedParam(n),
                i.getType(),
                i.getContextParam(e),
                i.filterContextParam(),
                i.mergeContextParam(),
                i.normalizeParam(),
                i.compressKey(),
                i.mergePingbackParam(),
                i.send()
            }
            ,
            r.sendStatistics = function(e, t, n) {
                return r.send(e, {
                    type: "statistics",
                    subtype: t,
                    customInfo: n
                })
            }
            ;
            var b = r.prototype;
            b.getContextParam = function(e) {
                var t = this;
                e instanceof u ? (t.context = e,
                t.contextParam = e.getParam()) : t.contextParam = e
            }
            ,
            b.filterContextParam = function() {
                var e = this
                  , t = g + " " + y[e.type];
                e.contextParam = i.only(e.contextParam, t)
            }
            ,
            b.mergeContextParam = function() {
                this.addUncompressedParam(this.contextParam)
            }
            ,
            b.getType = function() {
                var e = this
                  , t = e.uncompressedParam;
                e.type = e.type || t.type,
                e.subtype = e.subtype || t.subtype,
                t.type = f[e.type] || e.type,
                t.subtype = h[e.subtype] || e.subtype
            }
            ,
            b.normalizeParam = function() {
                var e = this
                  , t = e.uncompressedParam;
                if (e.context && e.context.isContext("ad")) {
                    var n = e.context;
                    e.addUncompressedParam({
                        adInfo: n.getAdInfo()
                    })
                }
                i.each(d, function(e) {
                    var n = t[e];
                    l.bool(n) && (t[e] = n ? 1 : 0)
                }),
                t.timestamp = s.getCalibratedTime(),
                i.forIn(t, function(e, n) {
                    if (l.string(e)) {
                        var i = e.length;
                        "em" == n && i > 300 && (e = e.slice(0, 150) + "||" + e.slice(i - 150)),
                        t[n] = e
                    }
                })
            }
            ,
            b.addCompressedParam = function(e) {
                i.extend(this.compressedParam, e)
            }
            ,
            b.addUncompressedParam = function(e) {
                i.extend(this.uncompressedParam, e)
            }
            ,
            b.compressKey = function() {
                var e = this;
                e.addCompressedParam(m(e.uncompressedParam))
            }
            ,
            b.mergePingbackParam = function() {
                var e = this;
                if (e.context) {
                    var t = e.context.getVal("pingbackParam");
                    e.addCompressedParam(t)
                }
            }
            ,
            b.send = function() {
                var e = this
                  , t = e.compressedParam || {};
                o("send", e.type || t.p, e.subtype || t.t, e.uncompressedParam, t);
                var n = p + "?" + a.stringify(t);
                s.ping(n)
            }
        }
        ).call(t, n(5))
    }
    , function(e, t, n) {
        function i(e, t, n) {
            return n = r.find(arguments, function(e) {
                return o.object(e)
            }),
            e = o.nos(e) ? e : void 0,
            t = o.nos(t) ? t : void 0,
            n = r.extend({}, a, n, {
                sep: e,
                eq: t
            })
        }
        var r = n(5)
          , o = r.is
          , a = {
            sep: "&",
            eq: "=",
            encode: encodeURIComponent,
            decode: decodeURIComponent,
            keepRaw: !1,
            sort: null,
            ignoreValues: [void 0]
        };
        t.parse = function(e, t, n, o) {
            e += "",
            o = i(t, n, o);
            var a = o.decode;
            return e = e.split(o.sep),
            r.reduce(e, function(e, t) {
                if (t = t.split(o.eq),
                2 == t.length) {
                    var n = t[0]
                      , i = t[1];
                    if (!o.keepRaw)
                        try {
                            n = a(n),
                            i = a(i)
                        } catch (r) {}
                    e[n] = i
                }
                return e
            }, {})
        }
        ,
        t.stringify = function(e, t, n, a) {
            a = i(t, n, a);
            var s = r.keys(e)
              , c = a.sort;
            c && (o.fn(c) ? s.sort(c) : s.sort());
            var u = a.encode
              , l = [];
            return r.each(s, function(t) {
                var n = e[t];
                r.includes(a.ignoreValues, n) || ((o.nan(n) || null == n) && (n = ""),
                a.keepRaw || (t = u(t),
                n = u(n)),
                l.push(t + a.eq + n))
            }),
            l.join(a.sep)
        }
    }
    , function(e, t, n) {
        (function(e, i, r, o) {
            var a = n(16)("tool")
              , s = n(37)
              , c = e.document
              , u = i.is
              , l = n(38)
              , d = n(39)
              , p = n(40)
              , f = n(41).template
              , h = n(42);
            t.addStyle = i.once(function() {
                a("add style");
                var e = c.createElement("style");
                e.type = "text/css";
                var t = n(43);
                e.styleSheet ? e.styleSheet.cssText = t : e.innerHTML = t,
                r("head").append(e)
            }),
            t.getSummaryTree = function(e) {
                var n = {};
                if (e) {
                    n.name = e.getSummary();
                    var r = i.map(e.children, function(e) {
                        return t.getSummaryTree(e)
                    });
                    r.length && (n.children = r)
                }
                return n
            }
            ,
            t.getSummaryTreeInDom = function(e) {
                var n = r("<div>");
                if (e) {
                    var o = r("<span>");
                    o.text(e.getSummary()),
                    n.append(o);
                    var a = r("<ul>");
                    i.each(e.children, function(e) {
                        var n = t.getSummaryTreeInDom(e)
                          , i = r("<li>");
                        i.append(n),
                        a.append(i)
                    }),
                    n.append(a)
                }
                return n
            }
            ,
            t.sumBy = function(e, t) {
                var n = 0;
                return i.each(e, function(e) {
                    n += i.get(e, t) || 0
                }),
                n
            }
            ,
            t.isWechatApp = function() {
                return !("object" != typeof wx || !wx || !u.fn(wx.createVideoContext))
            }
            ,
            t.isPageSupportViewPoint = function() {
                return t.isPageSupportAd("viewPoint")
            }
            ,
            t.parseJSON = function(t) {
                var n = i.get(e, "JSON.parse") || r.parseJSON;
                return n(t)
            }
            ,
            t.rawNotifyPage = function(e) {
                try {
                    return Q.__callbacks__.iqiyi_player_notice(e)
                } catch (t) {}
            }
            ,
            t.notifyPage = function(e, n) {
                a("notify page", e, n);
                var i, r = {
                    type: e,
                    data: n
                };
                try {
                    i = JSON.stringify(r)
                } catch (o) {
                    i = null
                }
                if (i)
                    return t.rawNotifyPage(i)
            }
            ,
            t.isPageSupportAd = function(e) {
                try {
                    return Q.external.checkAdSupport(e);
                } catch (t) {
                    return !1
                }
            }
            ,
            t.isPageJobDone = function() {
                try {
                    return Q.external.jobdone()
                } catch (e) {
                    return !1
                }
            }
            ,
            t.waitPageJobDone = function(e) {
                if (t.isPageJobDone())
                    e();
                else
                    var n = h.interval(function() {
                        t.isPageJobDone() && (n.stop(),
                        e())
                    }, 1e3)
            }
            ,
            t.open = function(t, n) {
                if (i.size(t) > 2) {
                    var r = e.open(t, n || "_blank");
                    r && (r.opener = null)
                }
            }
            ,
            t.getCalibratedTime = function() {
                var e = i.now();
                return u.integer(t.deltaTime) && (e += t.deltaTime),
                e
            }
            ,
            t.getTrackingTime = function() {
                return parseInt(t.getCalibratedTime() / 1e3)
            }
            ,
            t.isRoll = function(e) {
                return e = parseInt(e),
                i.includes([1, 2, 3], e)
            }
            ,
            t.getAdById = function(e, t) {
                return i.get(t, ["adMap", e])
            }
            ,
            t.getAdById2 = function(e, n) {
                return t.getAd(n, function(t) {
                    return t.id == e
                })
            }
            ,
            t.smartGetAd = function(e, n) {
                return t.getAd(e, function(e) {
                    return t.isAdMatch(e, n)
                })
            }
            ,
            t.isAdMatch = function(e, t) {
                if (e) {
                    var n = e.creative
                      , r = e.slot;
                    if (n && r) {
                        var o = [e.id, e.orderItemId, r.adZoneId, n.creativeId, n.templateType];
                        return o = i.map(o, i.lower),
                        i.includes(o, i.lower(t))
                    }
                }
                return !1
            }
            ,
            t.getAd = function(e, t) {
                var n;
                return i.some(e.children, function(e) {
                    return i.some(e.children, function(e) {
                        return i.some(e.children, function(e) {
                            return i.some(e.children, function(e) {
                                return !!t(e) && (n = e,
                                !0)
                            })
                        })
                    })
                }),
                n
            }
            ,
            t.isAdPlayerId = function(e) {
                return !!i.startsWith(e, "qc_") && e.length == "qc_100001_100000".length
            }
            ,
            t.isAd = function(e) {
                return !!(e && "orderItemId"in e)
            }
            ,
            t.getAllParam = function(e) {
                for (var t = 8, n = []; t-- && e; )
                    n.push(e),
                    e = e.parent;
                return n.reverse(),
                n.unshift({}),
                i.extend.apply(i, n)
            }
            ;
            var v = 1024
              , m = {
                1: 300,
                2: 600,
                3: 1.1 * v,
                4: 1.5 * v,
                5: 3 * v,
                10: 8 * v,
                96: 170
            }
              , g = i.map([["jUrl", "f4v", 1, -1e3], ["bUrl", "f4v", 170], ["gUrl", "f4v", 300], ["cUrl", "f4v", 1.5 * v], ["lowUrl", "f4v", 300, -1], ["highUrl", "f4v", 600, -1], ["m200Url", "mp4", 300], ["m400Url", "mp4", 600], ["jVid", "vid", 1, -1e3], ["bVid", "vid", 170], ["gVid", "vid", 300], ["cVid", "vid", 1.5 * v], ["m200Vid", "vid", 300, -1], ["m400Vid", "vid", 600, -1]], function(e) {
                return {
                    key: e[0],
                    videoFormat: e[1],
                    minBandwidth: e[2],
                    priority: e[3]
                }
            });
            t.chooseAdVideoByVideoDefinition = function(e, t, n) {
                e = e || {};
                var r = m[t] || 1 * v
                  , o = i.map(g, function(t) {
                    var o = -1
                      , a = t.key
                      , s = e[a];
                    return n == t.videoFormat && (s = e[a],
                    u.empty(s) || (o = 2e3 + (t.priority || 0),
                    o += r >= t.minBandwidth ? t.minBandwidth : 1 / t.minBandwidth)),
                    i.extend({
                        score: o,
                        video: s
                    }, t)
                })
                  , a = i.max(o, function(e) {
                    return e.score
                });
                if (a.score > 0) {
                    var s = "g"
                      , c = a.minBandwidth;
                    return c <= 170 ? s = "b" : c > 1.5 * v && (s = "c"),
                    a.videoDefinition = t,
                    a.definitionLevel = s,
                    a
                }
            }
            ,
            t.translate = i.curry(function(e, t) {
                return i.mapKeys(t, function(t, n) {
                    return e[n]
                })
            }),
            t.convertBoolInQuery = i.curry(function(e, t) {
                return i.each(e, function(e) {
                    var n = t[e];
                    u.bool(n) && (n = n ? 1 : 0),
                    t[e] = n
                })
            }),
            t.isEmptySlot = function(e) {
                if (e) {
                    if (!u.empty(e.ads))
                        return !1;
                    var t = e.emptyTracking;
                    if (t && !u.empty(t.timeSlices))
                        return !1
                }
                return !0
            }
            ,
            t.getUaaUserId = function() {
                var e = s.get("QC005");
                return u.empty(e) && (e = s.get("QC006")),
                e || ""
            }
            ,
            t.getFirstTimeSlice = function(e) {
                var t = NaN;
                return u.string(e) && (e = e.split(",")),
                t = parseInt(i.first(e))
            }
            ,
            t.getPageUrl = function() {
                return l.parse(i.get(e, "location.href"), !0)
            }
            ,
            t.ping = function(e) {
                (new Image).src = e
            }
            ,
            t.replacePlain = function(e, n, i, r) {
                if (e && n) {
                    var o = e.split(n);
                    if (e = o.join(i),
                    r) {
                        var a = encodeURIComponent(n);
                        a != n && (e = t.replacePlain(e, a, i))
                    }
                }
                return e
            }
            ,
            t.replaceMap = function(e, n, r) {
                return i.forIn(n, function(n, i) {
                    e = t.replacePlain(e, i, n, r)
                }),
                e
            }
            ,
            t.replaceTimeMacro = function(e, n) {
                n = n || i.now();
                var r = {
                    "[timestamp]": n,
                    "[M_timestamp]": n,
                    "[TIMESTAMP]": n,
                    "[randnum]": n,
                    __timeStamp__: n
                };
                return t.replaceMap(e, r, !0)
            }
            ,
            t.getCreativeType = function(e) {
                var n = l.parse(e);
                if (n) {
                    var r = n.pathname
                      , o = t.getExtname(r);
                    return o = i.slice(o, 1),
                    d.lookup(o)
                }
            }
            ,
            t.getRenderType = function(e) {
                var n = t.getCreativeType(e);
                return t.getRenderTypeByMime(n)
            }
            ,
            t.getRenderTypeByMime = function(e) {
                return t.isMimeMatch(e, "image") ? "image" : t.isMimeMatch(e, "flash") ? "swf" : t.isMimeMatch(e, "video") ? "video" : t.isMimeMatch(e, "html") ? "html" : void 0
            }
            ,
            t.isCreativeType = function(e, n) {
                var i = t.getCreativeType(e);
                return !(!i || !t.isMimeMatch(i, n))
            }
            ,
            t.isMimeMatch = function(e, t) {
                return i.includes(e, t)
            }
            ,
            t.getExtname = function(e) {
                e += "";
                var t = e.split(".");
                return "." + i.last(t)
            }
            ,
            t.setCursor = function(e, t) {
                t ? e.css({
                    cursor: "pointer"
                }) : e.css({
                    cursor: ""
                })
            }
            ,
            t.addAdBadge = function(e, n) {
                t.addStyle(),
                n = n || {};
                var i = f('<span class="cupid-badge">{广告}</span>', p.resource)
                  , o = r(i);
                "bottom-left" == n.position ? o.css({
                    bottom: 0,
                    left: 0
                }) : o.css({
                    top: 0,
                    left: 0
                }),
                e.append(o)
            }
            ,
            t.loadImage = function(e, t) {
                var n = new Image
                  , a = r(n)
                  , s = i.once(function() {
                    a.off("load").off("error")
                });
                return new o(function(r, o) {
                    a.on("load", function() {
                        s(),
                        r(n)
                    }),
                    a.on("error", function() {
                        s(),
                        o("error")
                    }),
                    t && i.delay(function() {
                        s(),
                        o("timeout")
                    }, t),
                    a.attr("src", e)
                }
                )
            }
            ,
            t.getAdInfo = function(e) {
                e = e || {};
                var t = e.slot || {}
                  , n = e.creative || {}
                  , r = [t.cuepointType, e.dspId, e.orderItemId, n.creativeId, n.templateType];
                return r = i.map(r, function(e) {
                    return null == e && (e = ""),
                    e
                }),
                r.join("||")
            }
            ,
            t.getScalingRange = function(e, t, n) {
                e = e || {},
                t = t || {},
                t = {
                    width: u.number(t.width) ? t.width : 1 / 0,
                    height: u.number(t.height) ? t.height : 1 / 0
                },
                n = n || {},
                n = {
                    width: n.width || 0,
                    height: n.height || 0
                };
                var i = Math.max(n.width / e.width, n.height / e.height)
                  , r = Math.min(t.width / e.width, t.height / e.height);
                return i > r && (i = r = NaN),
                {
                    min: i,
                    max: r
                }
            }
            ,
            t.getActionType = function(e) {
                return i.get(e, "originalEvent.data.actionType")
            }
            ,
            t.isControlsAction = function(e) {
                return "controls" == t.getActionType(e)
            }
            ,
            t.invisible = function(e) {
                r(e).css({
                    visibility: "hidden"
                })
            }
            ,
            t.visible = function(e) {
                r(e).css({
                    visibility: ""
                })
            }
            ,
            t.humanizeDuration = function(e) {
                var t = e
                  , n = []
                  , r = Math.floor(t / 60 / 60);
                r > 0 && (t -= 60 * r * 60,
                n.push(r));
                var o = Math.floor(t / 60);
                o > 0 && (t -= 60 * o,
                n.push(o));
                var a = Math.floor(t);
                return n.push(a),
                n = i.map(n, function(e) {
                    return i.padStart(e, 2, "0")
                }),
                n.join(":")
            }
            ,
            t.getQiyiResponseLevel = function() {
                var t = i.get(e, "Q.PageInfo.respInfo");
                if (t)
                    return {
                        responseLevel: t.curLayout || 0,
                        config: t.cnf
                    }
            }
            ,
            t.tryAppend = function(e, t) {
                var n = r(e)
                  , i = r(t);
                i.parent().get(0) != n.get(0) && n.append(i)
            }
            ,
            t.getPriceText = function(e) {
                return e = parseFloat(e),
                isNaN(e) ? "" : "￥" + e
            }
            ,
            t.limitText = function(e, t) {
                return e = i.trim(e),
                t && e.length > t && (e = i.slice(e, 0, t - 1) + String.fromCharCode(8230)),
                e
            }
            ,
            t.isHttps = function() {
                var t = i.get(e, "location.protocol");
                return !!/https/i.test(t)
            }
            ,
            t.normalizeProtocol = function(e) {
                return u.string(e) && (e = e.replace(/^(http:|https:)/, "")),
                e
            }
        }
        ).call(t, function() {
            return this
        }(), n(5), n(22), n(23))
    }
    , function(e, t) {
        var n = function(e) {
            return new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(e)
        }
          , i = function(e) {
            if (n(e)) {
                var t = new RegExp("(^| )" + e + "=([^;]*)(;|$)")
                  , i = t.exec(document.cookie);
                if (i)
                    return i[2] || null
            }
            return null
        }
          , r = function(e) {
            var t = i(e);
            return "string" == typeof t ? t = decodeURIComponent(t) : null
        };
        t.get = r
    }
    , function(e, t, n) {
        function i(e, t) {
            var n = "";
            return e = e.replace(t, function(e) {
                return n = e,
                ""
            }),
            [n, e]
        }
        function r(e, t) {
            var n = []
              , i = s.indexOf(e, t);
            return -1 == i ? n[0] = e : (n[0] = e.slice(0, i),
            n[1] = e.slice(i + t.length)),
            n
        }
        function o(e) {
            var t = r(e, "@")
              , n = t[0]
              , i = t[1];
            return i || (i = t[0],
            n = null),
            [n, i]
        }
        var a = n(35)
          , s = n(5);
        t.parse = function(e, t) {
            if ("string" != typeof e)
                return e;
            var n, c, u = {};
            u.href = e,
            n = r(e, "#"),
            c = n[0],
            n[1] && (u.hash = "#" + n[1]),
            n = i(c, /^[a-zA-Z][a-zA-Z0-9+-.]*:/),
            c = n[1],
            u.protocol = n[0].toLowerCase(),
            n = r(c, "?"),
            c = n[0];
            var l = n[1];
            if (t && (l = a.parse(l)),
            u.query = l,
            "/" != c.charAt(0) && u.schema)
                return u.opaque = c,
                u;
            if (s.startsWith(c, "//")) {
                c = c.slice(2),
                n = r(c, "/"),
                u.pathname = "/" + unescape(n[1] || ""),
                n = o(n[0]),
                u.auth = n[0];
                var d = n[1];
                n = r(d, ":"),
                u.hostname = n[0],
                u.port = ~~n[1]
            }
            return u
        }
        ;
        var c = "http https ftp gopher file".split(" ");
        t.format = function(e) {
            if (!e || "object" != typeof e)
                return e;
            var t = e.protocol
              , n = [t];
            t && !s.includes(c, t.slice(0, t.length - 1)) || n.push("//"),
            e.auth && n.push(e.auth, "@"),
            n.push(e.hostname),
            e.port && n.push(":", e.port),
            n.push(e.pathname);
            var i = e.query;
            i && ("string" != typeof i && (i = a.stringify(i)),
            i && n.push("?", i)),
            n.push(e.hash);
            for (var r = [], o = 0; o < n.length; o++)
                n[o] && r.push(n[o]);
            return r.join("")
        }
    }
    , function(e, t, n) {
        (function(e) {
            function n(t) {
                t = e.lower(t);
                var n = e.keys(i);
                return e.find(n, function(n) {
                    return e.includes(i[n].extensions, t)
                })
            }
            var i = {
                "image/jpeg": {
                    extensions: ["jpg", "jpeg", "jpe"]
                },
                "image/gif": {
                    extensions: ["gif"]
                },
                "image/png": {
                    extensions: ["png"]
                },
                "image/webp": {
                    extensions: ["webp"]
                },
                "application/x-shockwave-flash": {
                    extensions: ["swf"]
                },
                "video/mp4": {
                    extensions: ["mp4", "mp4v", "mpg4"]
                },
                "video/x-flv": {
                    extensions: ["flv"]
                },
                "video/x-f4v": {
                    extensions: ["f4v"]
                },
                "video/webm": {
                    extensions: ["webm"]
                },
                "text/html": {
                    extensions: ["html", "htm", "shtml"]
                }
            };
            t.lookup = function(e) {
                return n(e)
            }
        }
        ).call(t, n(5))
    }
    , function(e, t, n) {
        (function(n) {
            function i() {
                this.resources = {};
                var e = [];
                "object" == typeof navigator && (e = navigator.languages || [navigator.language]),
                this.setLocales(e)
            }
            var r = i.prototype;
            r.is = function(e) {
                return n.includes(n.lower(this.locale), n.lower(e))
            }
            ,
            r.setResource = function(e, t) {
                this.resources[e] = t
            }
            ,
            r.setResources = function(e) {
                n.extend(this.resources, e)
            }
            ,
            r.setLocale = function(e) {
                var t = this;
                if (e) {
                    t.locale = e;
                    var r = i.matchLocale(n.keys(t.resources), e);
                    return t.resource = t.resources[r] || {},
                    r
                }
            }
            ,
            r.setLocales = function(e) {
                this.locales = e,
                this.setLocale(n.first(e))
            }
            ,
            r.translate = function(e) {
                return this.resource[e] || e
            }
            ,
            i.matchLocale = function(e, t) {
                e = n.map(e, function(e) {
                    return {
                        raw: e,
                        score: i.getSimilar(e, t)
                    }
                }).sort(function(e, t) {
                    return e.score - t.score
                });
                var r = n.last(e) || {};
                return r.raw
            }
            ,
            i.getSimilar = function(e, t) {
                var r = 0;
                return e = i.parseLocale(n.lower(e)),
                t = i.parseLocale(n.lower(t)),
                e.language && e.language == t.language && (r += 50),
                e.country && e.country == t.country && (r += 40),
                e.language && e.language == t.country && (r += 20),
                t.language && t.language == e.country && (r += 20),
                r
            }
            ,
            i.parseLocale = function(e) {
                var t = e.split(/[^a-zA-Z]+/)
                  , n = {
                    language: t[0],
                    country: t[1]
                };
                return n
            }
            ;
            var o = new i;
            e.exports = t = o
        }
        ).call(t, n(5))
    }
    , function(e, t) {
        function n(e, t, n) {
            return t = t || {},
            n = n || {},
            (e + "").replace(i.interpolate, function(e, n) {
                return t[n] || ""
            })
        }
        var i = {
            interpolate: /{([\s\S]+?)}/g
        };
        e.exports = t = {
            template: n,
            templateSettings: i
        }
    }
    , function(e, t, n) {
        function i(e, t) {
            var n = this;
            r.call(n),
            null == t && (t = 1 / 0),
            n.repeatCount = t,
            n.interval = e,
            n.reset()
        }
        var r = n(29)
          , o = n(5);
        e.exports = t = i,
        o.inherits(i, r),
        i.interval = function(e, t, n) {
            var r = new i(t,n);
            return r.on("timer", e),
            r.start(),
            r
        }
        ,
        i.timeout = function(e, t) {
            return i.interval(e, t, 1)
        }
        ;
        var a = i.prototype;
        a.start = function() {
            var e = this;
            e.running || (e.timer = setInterval(function() {
                e.currentCount++,
                e.emit("timer"),
                e.currentCount == e.repeatCount && (e.emit("timerComplete"),
                e.stop())
            }, e.interval)),
            e.running = !0
        }
        ,
        a.reset = function() {
            var e = this;
            e.stop(),
            e.currentCount = 0
        }
        ,
        a.stop = function() {
            var e = this;
            e.running && (clearInterval(e.timer),
            e.timer = null),
            e.running = !1
        }
    }
    , function(e, t, n) {
        t = e.exports = n(44)(),
        t.i(n(45), ""),
        t.i(n(46), ""),
        t.i(n(47), ""),
        t.push([e.id, '.ares-tip{position:absolute;z-index:1000}.ares-tip .ares-tip-body{padding:10px;text-align:center}.ares-tip-basic{padding:5px 0}.ares-tip-basic .ares-tip-arrow{position:absolute;width:0;height:0;line-height:0;border:5px dashed #000;top:0;left:50%;margin-left:-5px;border-bottom-style:solid;border-top:none;border-left-color:transparent;border-right-color:transparent}.ares-tip-basic .ares-tip-body{background:#000;color:#fff}.ares-tip-border{padding:6px 0}.ares-tip-border .ares-tip-head{border:7px dashed transparent;border-bottom:7px solid #ddd;display:block;width:0;height:0;line-height:0;font-size:0;position:absolute;top:-7px;left:50%;margin-left:-5px}.ares-tip-border .ares-tip-head .ares-tip-arrow{position:absolute;border:6px dashed transparent;border-bottom:6px solid #fafafa;left:-6px;top:-5px}.ares-tip-border .ares-tip-body{background:#fafafa;border:1px solid #ddd}.ares-tip{width:422px}.app-wrapper{border:1px solid #505050;display:block;width:278px;float:right;background-color:#444}.app-box{height:39px;border-radius:5px;margin:6px 10px 6px 11px}.app-wrapper img{width:38px;height:38px;border-radius:8px;float:left}.app-info{margin-left:48px;margin-right:85px}.app-title{font-size:15px;height:20px;color:#ddd;font-weight:600}.app-description,.app-title{line-height:20px;overflow:hidden}.app-description{font-size:12px;height:17px;color:#999}.app-btn{margin-top:6px;float:right;border-radius:3px;border-bottom:2px solid #517b00;box-shadow:1px 2px 8px 1px rgba(0,0,0,.25),1px 1px 4px hsla(0,0%,100%,.1);display:inline-block;line-height:24px;height:25px;width:72px;font-size:14px;text-align:center}.app-popup a,.app-wrapper a{color:#699f00}.app-highlight{overflow:hidden;text-overflow:ellipsis;color:#699f00}.app-popup .reverse,.app-wrapper .reverse{background-color:#699f00;color:#fff}.app-popup{line-height:30px;text-align:left;font-size:15px;margin:7px 0 7px 20px;width:390px}.app-popup:after,.app-popup div:after{clear:both;display:block;content:""}.app-section{width:180px}.app-right{margin-left:180px}.app-small{font-size:12px;color:#777;line-height:12px}.app-qrcode{padding:10px 20px 0;box-shadow:1px 2px 8px 1px hsla(0,0%,49%,.25),1px 1px 4px hsla(0,0%,100%,.1);text-align:center;float:left}.app-download{padding:0 15px;text-align:center;border-radius:3px;font-size:17px;font-weight:700;display:inline-block;line-height:29px}.app-popup-text1{font-weight:700;color:#666}.app-download-box{padding-bottom:14px}.app-mb10{margin-bottom:10px}.theatre-transition{transition:all .7s cubic-bezier(.46,.98,.54,1.1)}.theatre-label{background:#8ac024;width:84px;color:#fff;font-size:12px;text-align:center;line-height:22px;border-radius:4px 4px 0 0}.theatre-container{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:10px 1px;width:100%;border:1px solid #8ac024;position:relative;overflow:hidden}.theatre-container img{display:block}.theatre-carousel-wrapper{height:140px;overflow:hidden;margin:0 auto}.theatre-carousel-box{width:5000px;height:170px;margin-left:-10px;display:inline-block;line-height:0}.theatre-hover .theatre-banner{opacity:1}.theatre-item{width:170px;overflow:hidden;transition:all .7s cubic-bezier(.46,.98,.54,1.1);float:left;margin:0 10px;background-color:#fff;cursor:pointer}.theatre-no-width{width:0;margin:0}.theatre-container .theatre-hover{width:930px;z-index:100}.theatre-expand{width:930px}.theatre-left{float:left;width:170px}.theatre-left img{width:100%}.theatre-poster{height:100px}.theatre-logo{height:40px}.theatre-right{float:left;margin-left:20px}.theatre-banner{opacity:0;transition:all .7s cubic-bezier(.46,.98,.54,1.1);width:740px}.theatre-arrow{width:15px;height:26px;cursor:pointer;text-indent:-999px;position:absolute;top:50%;margin-top:-13px}.theatre-arrow-left{left:4px;background:url("http://static.iqiyi.com/common/20150527/arrow-left.png") no-repeat 50%;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,sizingMethod=scale,src="http://static.iqiyi.com/common/20150527/arrow-left.png");_background:0}.theatre-arrow-left:hover{background:url("http://static.iqiyi.com/common/20150527/arrow-left-hover.png") no-repeat 50%;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,sizingMethod=scale,src="http://static.iqiyi.com/common/20150527/arrow-left-hover.png");_background:0}.theatre-arrow-right{right:4px;background:url("http://static.iqiyi.com/common/20150527/arrow-right.png") no-repeat 50%;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,sizingMethod=scale,src="http://static.iqiyi.com/common/20150527/arrow-right.png");_background:0}.theatre-arrow-right:hover{background:url("http://static.iqiyi.com/common/20150527/arrow-right-hover.png") no-repeat 50%;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,sizingMethod=scale,src="http://static.iqiyi.com/common/20150527/arrow-right-hover.png");_background:0}.cupid-badge{width:27px;height:16px;border-radius:1px;background-color:rgba(0,0,0,.5);position:absolute;font-size:10px;color:#fff;line-height:16px;text-align:center}.cupid-close{width:20px;height:20px;background:url(http://www.qiyipic.com/common/fix/videoplay/video_close.png) no-repeat;position:absolute;right:2px;top:2px;cursor:pointer}.cupid-summary-panel{font-family:monospace\\, consolas;padding:10px}.cupid-summary-panel ul{padding-left:40px}', ""])
    }
    , function(e, t) {
        e.exports = function() {
            var e = [];
            return e.toString = function() {
                for (var e = [], t = 0; t < this.length; t++) {
                    var n = this[t];
                    n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
                }
                return e.join("")
            }
            ,
            e.i = function(t, n) {
                "string" == typeof t && (t = [[null, t, ""]]);
                for (var i = {}, r = 0; r < this.length; r++) {
                    var o = this[r][0];
                    "number" == typeof o && (i[o] = !0)
                }
                for (r = 0; r < t.length; r++) {
                    var a = t[r];
                    "number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                    e.push(a))
                }
            }
            ,
            e
        }
    }
    , function(e, t, n) {
        t = e.exports = n(44)(),
        t.push([e.id, '.video_ad{width:200px;height:200px;position:absolute;left:50%;margin-left:-100px;top:50%;margin-top:-100px}.video_ad-icon{width:27px;height:16px;border-radius:1px;background-color:rgba(0,0,0,.5);position:absolute;left:0;top:0;font-size:10px;color:#fff;line-height:16px;text-align:center}.video_ad-close{width:20px;height:20px;background:url(http://www.qiyipic.com/common/fix/videoplay/video_close.png) no-repeat;position:absolute;right:2px;top:2px;cursor:pointer}.video_pause{width:124px;height:42px;background-color:rgba(0,0,0,.8);padding:7px 10px 7px 46px;position:absolute;right:20px;bottom:50px}.video_pause-icon{width:67px;height:56px;background:url(http://www.qiyipic.com/common/fix/videoplay/video_pause.png) no-repeat;position:absolute;left:-28px;top:0}.video_pause p{height:21px;line-height:21px;font-size:14px;color:#fff;text-align:left}.video_pause-progress{width:0;height:56px;background-color:rgba(108,201,0,.5);position:absolute;left:0;top:0}.public-time{position:absolute;z-index:100;background:rgba(26,26,26,.7);border-radius:20px;padding:0 15px 0 0;width:auto!important;height:30px;right:20px;top:20px;line-height:30px;text-align:center}.public-time .cd-time{width:40px;text-align:right}.public-time span{font:20px/1.5 ds-digital!important;display:inline-block;position:relative;top:1px!important;color:#fff}.public-time a{position:relative;top:-1px}.public-time .public-vip{margin-left:8px;color:#fff;font-size:14px}.public-time .public-vip:hover{color:#57a900}.public-vip .vip-marketing-doc{margin-left:8px;color:#c5955d}.public-vip:hover .vip-marketing-doc{color:#57a900}.tp_vip-show{width:623px;height:56px;line-height:56px;color:#c89e6c;font-size:18px;position:absolute;left:0;top:0;background:url(http://www.qiyipic.com/common/fix/view-tp/command.png) no-repeat;overflow:hidden;_background:0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,sizingMethod=scale,src="http://www.qiyipic.com/common/fix/view-tp/command.png")}.tp_vip-show .tp_vip-gif{float:left;width:67px;height:56px;background:url(http://www.qiyipic.com/common/fix/view-tp/vip-tp.gif) no-repeat}.tp_vip-close{position:absolute;right:10px;top:15px;width:169px;height:30px;border-radius:2px;background-color:#434343}.tp_close-time{float:left;width:50px;border-right:1px solid #131313;text-align:center;color:#c89e6c;font:22px/30px ds-digital!important}.tp_close-txt{float:left}.tp_close-txt a{display:inline-block;width:117px;line-height:30px;color:#fff;font-size:14px;text-align:center;border-left:1px solid #3c3c3c}.tp_close-txt a:hover{color:#c89e6c}.tp_vip-time{top:28px;right:10px;width:50px;height:30px;text-align:center;color:#bbb;font:22px/30px ds-digital!important}.tp_vip-nointerest,.tp_vip-time{position:absolute;background-color:#333;background:rgba(51,51,51,.9);filter:alpha(opacity = 90);border-radius:2px}.tp_vip-nointerest{top:15px;right:75px;width:151px;height:55px}.tp_nointerest-top{color:#fff;text-align:center;line-height:30px;font-size:14px}.tp_nointerest-btm{color:#999;font-size:12px;line-height:20px;text-align:center;float:left}.tp_nointerest-btm span{float:left;width:40px;height:20px;color:#5aa700;font:25px/20px ds-digital!important}.tp_vip-detial{position:absolute;bottom:10px;right:10px;width:112px;height:35px;background-color:#333;background:rgba(51,51,51,.5);filter:alpha(opacity = 50);border-radius:2px}.tp_vip-detial a{display:inline-block;width:103px;height:35px;line-height:35px;padding-left:9px;color:#fff;font-size:16px}.tp_vip-detial span{position:absolute;right:5px;top:6px;width:23px;height:23px;background:url(http://www.qiyipic.com/common/fix/view-tp/detial.png) no-repeat;_background:0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,sizingMethod=scale,src="http://www.qiyipic.com/common/fix/view-tp/detial.png")}.tp_vip-detial a:hover,.tp_vip-free a:hover{color:#5aa700}.tp_vip-detial a:hover span{background:url(http://www.qiyipic.com/common/fix/view-tp/detialhover.png) no-repeat;_background:0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,sizingMethod=scale,src="http://www.qiyipic.com/common/fix/view-tp/detialhover.png")}.tp_vip-time1{top:15px}.tp_vip-free{position:absolute;top:15px;right:75px;text-align:center;background-color:#333;background:rgba(51,51,51,.9);filter:alpha(opacity = 90);border-radius:2px}.tp_vip-free a{display:inline-block;width:131px;height:30px;line-height:30px;color:#999;font-size:14px}.tp_disable-skip{position:absolute;right:10px;top:15px;height:30px;border-radius:2px}.tp_disable-skip-txt{float:left;padding:0 10px;background-color:#434343;border-radius:2px}.tp_disable-skip-txt a{display:inline-block;line-height:30px;color:#999;font-size:14px;text-align:center}.tp_disable-skip-time{float:left;margin-left:10px;width:35px;border-radius:2px;text-align:center;color:#999;background-color:#434343;font:16px/30px ds-digital!important}.tp_disable-skip-txt .tp_disable-skip-detail{width:16px;height:16px;line-height:16px;margin-left:5px;color:grey;border:1px solid;border-color:grey;border-radius:8px}.tp_disable-skip-detail:hover{color:#999;border-color:#999}', ""])
    }
    , function(e, t, n) {
        t = e.exports = n(44)(),
        t.push([e.id, ".video_ad-buy{height:90px;border:1px solid #66666f;border-radius:1px;background:rgba(0,0,0,.7)}.buy-pic,.buy-txt{float:left;height:90px}.buy-pic a{display:inline-block;height:90px}.buy-txt{width:176px;height:60px;padding:15px}.buy-txt h3{height:28px;line-height:28px;font-size:16px;color:#fff;margin-bottom:4px}.buy-detial{overflow:hidden}.detial-price{float:left;color:#fe6e16;line-height:28px}.detial-price,.detial-price span{font-size:16px}a.detial-btn{float:right;width:84px;height:28px;line-height:28px;text-align:center;color:#fff;font-size:14px;background:#5ca500;border-radius:2px}.detial-btn:hover,.video-baozhang-btn a:hover{background:#66b500}.video_buy-icon{width:35px;height:20px;background-color:rgba(0,0,0,.5);position:absolute;left:0;top:0;font-size:12px;color:#fff;line-height:20px;text-align:center}.video_buy-close{width:8px;height:8px;background:url(http://www.qiyipic.com/common/fix/videoplay/close.png) no-repeat;position:absolute;right:8px;top:8px;cursor:pointer}.video_buy-close:hover{background-position:-10px 0}", ""])
    }
    , function(e, t, n) {
        t = e.exports = n(44)(),
        t.push([e.id, ".cupid-panel{position:absolute;display:none;top:50%;left:50%;background:#272728;color:#999;z-index:1000}.cupid-common-panel{width:380px;height:180px;margin-left:-190px;margin-top:-90px}.feedback-panel{position:fixed;z-index:1000;width:480px;height:360px;margin-left:-240px;margin-top:-180px;background:#000;border-radius:15px}.cupid-panel-close{width:8px;height:8px;background:url(http://www.qiyipic.com/common/fix/videoplay/close.png) no-repeat;position:absolute;right:8px;top:8px;cursor:pointer}.cupid-panel-body{padding:25px;font-size:14px}.cupid-panel-footer{position:absolute;width:100%;height:30px;bottom:20px}.cupid-panel-btn{display:block;width:120px;height:35px;margin:0 auto;border:1px solid grey;border-radius:3px}.cupid-panel-btn:hover{background:#fff}.feedback-submit{display:block;margin:0 auto;width:90px;height:30px;color:#fff;font-size:16px;border:0;border-radius:3px;background:#7ab400}.cupid-panel label{display:block;color:#999;font-family:\\\\5FAE\\8F6F\\96C5\\9ED1;font-size:12px}.cupid-panel fieldset{margin:0 5px}.feedback-input{display:block;height:24px}.feedback-detail,.feedback-input{width:400px;margin:10px 0;font-size:12px;font-family:\\\\5FAE\\8F6F\\96C5\\9ED1;outline:none;color:#999;background:#444;border:0}.feedback-detail{height:80px;max-height:80px;resize:none}.feedback-tip{display:none;margin:0 5px;color:#7ab400}", ""])
    }
    , function(e, t, n) { // #48# translate
        function i(e, t) {
            var n = {};
            return e && t && o.forIn(t, function(t, s) {
                var c = e[s];
                if (null != c)
                    if (a.object(c)) {
                        var u = c.type || r(t)
                          , l = c.name;
                        "object" == u ? n[l] = i(c.child, t) : "array" == u && (n[l] = o.map(t, function(e) {
                            return i(c.child, e)
                        }))
                    } else
                        n[c] = t
            }),
            n
        }
        function r(e) {
            return a._class(e)
        }
        var o = n(5)
          , a = o.is;
        e.exports = t = o.curry(i)
    }
    , function(e, t) { // #49# md5
        function n(e, t) {
            var n = (65535 & e) + (65535 & t)
              , i = (e >> 16) + (t >> 16) + (n >> 16);
            return i << 16 | 65535 & n
        }
        function i(e, t) {
            return e << t | e >>> 32 - t
        }
        function r(e, t, r, o, a, s) {
            return n(i(n(n(t, e), n(o, s)), a), r)
        }
        function o(e, t, n, i, o, a, s) {
            return r(t & n | ~t & i, e, t, o, a, s)
        }
        function a(e, t, n, i, o, a, s) {
            return r(t & i | n & ~i, e, t, o, a, s)
        }
        function s(e, t, n, i, o, a, s) {
            return r(t ^ n ^ i, e, t, o, a, s)
        }
        function c(e, t, n, i, o, a, s) {
            return r(n ^ (t | ~i), e, t, o, a, s)
        }
        function u(e, t) {
            e[t >> 5] |= 128 << t % 32,
            e[(t + 64 >>> 9 << 4) + 14] = t;
            var i, r, u, l, d, p = 1732584193, f = -271733879, h = -1732584194, v = 271733878;
            for (i = 0; i < e.length; i += 16)
                r = p,
                u = f,
                l = h,
                d = v,
                p = o(p, f, h, v, e[i], 7, -680876936),
                v = o(v, p, f, h, e[i + 1], 12, -389564586),
                h = o(h, v, p, f, e[i + 2], 17, 606105819),
                f = o(f, h, v, p, e[i + 3], 22, -1044525330),
                p = o(p, f, h, v, e[i + 4], 7, -176418897),
                v = o(v, p, f, h, e[i + 5], 12, 1200080426),
                h = o(h, v, p, f, e[i + 6], 17, -1473231341),
                f = o(f, h, v, p, e[i + 7], 22, -45705983),
                p = o(p, f, h, v, e[i + 8], 7, 1770035416),
                v = o(v, p, f, h, e[i + 9], 12, -1958414417),
                h = o(h, v, p, f, e[i + 10], 17, -42063),
                f = o(f, h, v, p, e[i + 11], 22, -1990404162),
                p = o(p, f, h, v, e[i + 12], 7, 1804603682),
                v = o(v, p, f, h, e[i + 13], 12, -40341101),
                h = o(h, v, p, f, e[i + 14], 17, -1502002290),
                f = o(f, h, v, p, e[i + 15], 22, 1236535329),
                p = a(p, f, h, v, e[i + 1], 5, -165796510),
                v = a(v, p, f, h, e[i + 6], 9, -1069501632),
                h = a(h, v, p, f, e[i + 11], 14, 643717713),
                f = a(f, h, v, p, e[i], 20, -373897302),
                p = a(p, f, h, v, e[i + 5], 5, -701558691),
                v = a(v, p, f, h, e[i + 10], 9, 38016083),
                h = a(h, v, p, f, e[i + 15], 14, -660478335),
                f = a(f, h, v, p, e[i + 4], 20, -405537848),
                p = a(p, f, h, v, e[i + 9], 5, 568446438),
                v = a(v, p, f, h, e[i + 14], 9, -1019803690),
                h = a(h, v, p, f, e[i + 3], 14, -187363961),
                f = a(f, h, v, p, e[i + 8], 20, 1163531501),
                p = a(p, f, h, v, e[i + 13], 5, -1444681467),
                v = a(v, p, f, h, e[i + 2], 9, -51403784),
                h = a(h, v, p, f, e[i + 7], 14, 1735328473),
                f = a(f, h, v, p, e[i + 12], 20, -1926607734),
                p = s(p, f, h, v, e[i + 5], 4, -378558),
                v = s(v, p, f, h, e[i + 8], 11, -2022574463),
                h = s(h, v, p, f, e[i + 11], 16, 1839030562),
                f = s(f, h, v, p, e[i + 14], 23, -35309556),
                p = s(p, f, h, v, e[i + 1], 4, -1530992060),
                v = s(v, p, f, h, e[i + 4], 11, 1272893353),
                h = s(h, v, p, f, e[i + 7], 16, -155497632),
                f = s(f, h, v, p, e[i + 10], 23, -1094730640),
                p = s(p, f, h, v, e[i + 13], 4, 681279174),
                v = s(v, p, f, h, e[i], 11, -358537222),
                h = s(h, v, p, f, e[i + 3], 16, -722521979),
                f = s(f, h, v, p, e[i + 6], 23, 76029189),
                p = s(p, f, h, v, e[i + 9], 4, -640364487),
                v = s(v, p, f, h, e[i + 12], 11, -421815835),
                h = s(h, v, p, f, e[i + 15], 16, 530742520),
                f = s(f, h, v, p, e[i + 2], 23, -995338651),
                p = c(p, f, h, v, e[i], 6, -198630844),
                v = c(v, p, f, h, e[i + 7], 10, 1126891415),
                h = c(h, v, p, f, e[i + 14], 15, -1416354905),
                f = c(f, h, v, p, e[i + 5], 21, -57434055),
                p = c(p, f, h, v, e[i + 12], 6, 1700485571),
                v = c(v, p, f, h, e[i + 3], 10, -1894986606),
                h = c(h, v, p, f, e[i + 10], 15, -1051523),
                f = c(f, h, v, p, e[i + 1], 21, -2054922799),
                p = c(p, f, h, v, e[i + 8], 6, 1873313359),
                v = c(v, p, f, h, e[i + 15], 10, -30611744),
                h = c(h, v, p, f, e[i + 6], 15, -1560198380),
                f = c(f, h, v, p, e[i + 13], 21, 1309151649),
                p = c(p, f, h, v, e[i + 4], 6, -145523070),
                v = c(v, p, f, h, e[i + 11], 10, -1120210379),
                h = c(h, v, p, f, e[i + 2], 15, 718787259),
                f = c(f, h, v, p, e[i + 9], 21, -343485551),
                p = n(p, r),
                f = n(f, u),
                h = n(h, l),
                v = n(v, d);
            return [p, f, h, v]
        }
        function l(e) {
            var t, n = "";
            for (t = 0; t < 32 * e.length; t += 8)
                n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
            return n
        }
        function d(e) {
            var t, n = [];
            for (n[(e.length >> 2) - 1] = void 0,
            t = 0; t < n.length; t += 1)
                n[t] = 0;
            for (t = 0; t < 8 * e.length; t += 8)
                n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
            return n
        }
        function p(e) {
            return l(u(d(e), 8 * e.length))
        }
        function f(e, t) {
            var n, i, r = d(e), o = [], a = [];
            for (o[15] = a[15] = void 0,
            r.length > 16 && (r = u(r, 8 * e.length)),
            n = 0; n < 16; n += 1)
                o[n] = 909522486 ^ r[n],
                a[n] = 1549556828 ^ r[n];
            return i = u(o.concat(d(t)), 512 + 8 * t.length),
            l(u(a.concat(i), 640))
        }
        function h(e) {
            var t, n, i = "0123456789abcdef", r = "";
            for (n = 0; n < e.length; n += 1)
                t = e.charCodeAt(n),
                r += i.charAt(t >>> 4 & 15) + i.charAt(15 & t);
            return r
        }
        function v(e) {
            return unescape(encodeURIComponent(e))
        }
        function m(e) {
            return p(v(e))
        }
        function g(e) {
            return h(m(e))
        }
        function y(e, t) {
            return f(v(e), v(t))
        }
        function b(e, t) {
            return h(y(e, t))
        }
        function x(e, t, n) {
            return t ? n ? y(t, e) : b(t, e) : n ? m(e) : g(e)
        }
        e.exports = x
    }
    , function(e, t, n) {
        (function(t, i) {
            function r(e, t) {
                var n = this;
                n.setParent(t),
                c.call(n, a),
                n.init(e),
                n.load()
            }
            function o(e, n) {
                var i = e.getVal("unsupportedCuepointTypes");
                return t.filter(n, function(e) {
                    return !t.includes(i, e.cuepointType)
                })
            }
            var a = "request"
              , s = n(16)(a)
              , c = n(28)
              , u = n(51)
              , l = n(60)
              , d = n(34)
              , p = n(49)
              , f = n(36)
              , h = n(32)
              , v = t.is
              , m = "requestId adBreaks requestIndex from".split(" ");
            e.exports = r,
            t.inherits(r, c);
            var g = r.prototype;
            g.getSummary = function() {
                var e = this;
                return "request: " + h.cuepoint2name[e.getCuepointType()]
            }
            ,
            g.isFirstRequest = function() {
                var e = this;
                return 0 == e.index()
            }
            ,
            g.generateRequestId = function() {
                var e = this.view.videoEventId
                  , n = [e, t.now()];
                return p(n.join(""))
            }
            ,
            g.init = function(e) {
                s("init");
                var n = this;
                e = e || {},
                n.view = n.parent;
                var i = t.only(e, m);
                t.extend(n, i);
                var r = e.requestId || n.generateRequestId();
                return n.id = n.requestId = r,
                n.bindEvent(),
                n
            }
            ,
            g.getRequestName = function() {
                var e = this
                  , t = e.getCuepointType();
                return h.cuepoint2name[t]
            }
            ,
            g.getRollName = function() {
                var e = this;
                if (e.isRoll())
                    return e.getRequestName()
            }
            ,
            g.isPlayable = function() {
                var e = this;
                return t.some(e.children, function(e) {
                    return e.isPlayable()
                })
            }
            ,
            g.getCuepointType = function() {
                var e = this
                  , n = t.first(e.cuepointList);
                if (n)
                    return n.cuepointType
            }
            ,
            g.load = function() {
                var e = this;
                return e.memory.load = e.memory.load || new i(function(n, i) {
                    e.setState("loading");
                    var r = e.view
                      , a = t.slice(e.adBreaks);
                    e.adBreak = t.first(e.adBreaks);
                    var c = {};
                    e.isFirstRequest() && (c.needPolicy = !0,
                    e.view.isVideoView() ? a.push({
                        cuepointType: 1
                    }) : a.push({
                        cuepointType: 0
                    }));
                    var d = o(e, a);
                    if (!c.needPolicy && v.empty(d))
                        return s("empty request"),
                        void e.setState("ended");
                    e.cuepointList = a;
                    var p = e.show = new u;
                    p.init(e).setCuepointList(d).addEncryptionParam(c).request(function(o, a) {
                        o ? (e.setState("ended"),
                        i(o)) : (e.runIfNotEnded(function() {
                            e.result = a = t.extend({}, a),
                            a.slots = t.map(a.slots, function(t) {
                                return new l(t,e)
                            }),
                            r.schedule && (v.empty(a.policySlots) || r.schedule.setPolicySlots(a.policySlots),
                            r.schedule.setAutoChooseMidroll(a.midrollPoints));
                            var n = e.findRollSlot()
                              , i = e.getRollName();
                            if (i) {
                                if ("preroll" == i) {
                                    var o = a.videoInfo;
                                    t.extend(r, o),
                                    e.setPrerollOrderItemIds()
                                }
                                n && n.hasAds() ? (n.tryLoadToVideo().then(function() {
                                    r.emit("startLoadVideo", {
                                        reason: "load complete",
                                        rollType: i
                                    })
                                }, function() {
                                    r.emit("startLoadVideo", {
                                        reason: "load fail",
                                        rollType: i
                                    })
                                }),
                                n.isMidroll() && (r.schedule.bindVideoTimeEvent(n.startTime - 5, function() {
                                    r.sdk.video.startMidrollTip()
                                }),
                                e.view.lastMidrollRequestTime = n.startTime)) : (r.emit("startLoadVideo", {
                                    reason: "noad",
                                    rollType: i
                                }),
                                r.startVideo(i))
                            }
                        }),
                        n())
                    })
                }
                ),
                e.memory.load
            }
            ,
            g.setPrerollOrderItemIds = function() {
                var e = this
                  , n = []
                  , i = t.get(e, "result.slots");
                t.each(i, function(e) {
                    e.isPreroll() && t.each(e.ads, function(e) {
                        n.push(e.orderItemId)
                    })
                }),
                e.view.prerollOrderItemIds = n.join(",")
            }
            ,
            g.abort = function() {
                var e = this;
                e.show && e.show.abort(),
                t.map(e.children, function(e) {
                    e.abort()
                }),
                e.setState("ended")
            }
            ,
            g.bindEvent = function() {
                var e = this;
                e.on("statechange", function(t) {
                    if (s("state change", t),
                    "ended" == t && (e.emit("inventory"),
                    e.isRoll() && (e.view.ended || e.view.startVideo(e.getRollName())),
                    !e.isPlayable() && e.isToolbar())) {
                        s("toolbar is empty and unbind mousemove");
                        var n = e.view.sdk;
                        n.unbindMouseMove()
                    }
                }),
                e.once("inventory", function() {
                    if (e.result && e.result.inventory) {
                        s("send inventory");
                        var n = t.only(e.result.inventory, "originalInventory rawInventory deliveredInventory forbiddenInventory");
                        d.send(e, t.extend({
                            type: "inventory",
                            subtype: "success"
                        }, n))
                    } else
                        s("no data to send inventory")
                })
            }
            ,
            g.trySendInventoryDirectly = function(e) {
                var n = this;
                n.inventoryOnVideoAdImpression = !1;
                var i = t.map(t.keys(t.reduce(e, function(e, t) {
                    return f.isEmptySlot(t) || (e[t.cuepointType] = !0),
                    e
                }, {})), function(e) {
                    return parseInt(e)
                })
                  , r = !0
                  , o = !1;
                v.empty(i) ? o = !0 : v.empty(t.without(i, 0, 8)) ? o = !0 : r && t.some(i, function(e) {
                    return f.isRoll(e)
                }) && (n.inventoryOnVideoAdImpression = !0),
                s("inventory on video ad impression", n.inventoryOnVideoAdImpression),
                o && n.emit("inventory")
            }
            ,
            g.replay = function() {
                var e = this;
                e.reset(),
                e.play()
            }
            ,
            g.tryReplay = function() {
                var e = this;
                "ended" == e.state && e.replay()
            }
            ,
            g.reset = function() {
                var e = this;
                s("reset"),
                e.off(),
                e.bindEvent(),
                e.setState("idle"),
                t.each(e.children, function(e) {
                    e.reset();
                })
            }
            ,
            g.play = function() {
                var e = this;
                "playing" != e.state && e.runIfNotEnded(function() {
                    e.load().then(function() {
                        e._play()
                    })
                })
            }
            ,
            g.findRollSlot = function() {
                var e = t.get(this, "result.slots")
                  , n = t.find(e, function(e) {
                    return f.isRoll(e.cuepointType)
                });
                return n
            }
            ,
            g._play = function() {
                var e = this
                  , n = e.result;
                if (n) {
                    var i = t.reduce(e.cuepointList, function(e, i) {
                        var r = i.cuepointType;
                        return e[r] = t.filter(n.slots, function(e) {
                            return e.cuepointType == r
                        }),
                        e
                    }, {});
                    this.trySendInventoryDirectly(n.slots);
                    var r = !1;
                    t.forIn(i, function(n, i) {
                        if (i = parseInt(i),
                        f.isRoll(i) || t.includes([4, 6, 7, 9, 10, 11], i)) {
                            var o = n[0];
                            o ? (e.setState("playing"),
                            o.play(),
                            r = !0) : e.setState("ended")
                        } else
                            t.includes([h.viewPoint], i) ? e.initViewPoint(n) : i == h.page ? t.each(n, function(e) {
                                e.play()
                            }) : s("unsupport cuepoint type", i)
                    })
                }
                r || e.setState("ended")
            }
            ,
            g.initViewPoint = function(e) {
                var n = this
                  , i = n.view.schedule;
                i && f.isPageSupportViewPoint() ? f.waitPageJobDone(function() {
                    s("js job done");
                    var r = [];
                    if (t.each(e, function(e) {
                        t.each(e.ads, function(e) {
                            r.push(e)
                        })
                    }),
                    !v.empty(r)) {
                        var o = t.map(r, function(e) {
                            var i = e.slot;
                            n.view.viewPointAdZoneId = i.adZoneId;
                            var r = e.creative.creativeObject;
                            return e.exportAdObject = t.extend({
                                startTime: i.startTime,
                                badge: e.badge,
                                adUid: e.id,
                                source: 1,
                                orderItemId: e.orderItemId,
                                dspIcon: e.icon
                            }, r),
                            {
                                ad: e,
                                startTime: i.startTime,
                                adZoneId: i.adZoneId,
                                cuepointType: i.cuepointType
                            }
                        })
                          , a = t.map(r, function(e) {
                            return e.exportAdObject
                        });
                        f.notifyPage("initAds", {
                            ads: a,
                            templateType: "viewPoint",
                            adZoneId: n.view.viewPointAdZoneId,
                            videoEventId: n.getVal("videoEventId")
                        });
                        var c = t.uniqBy(a, function(e) {
                            return e.startTime
                        });
                        n.view.notifyPlayer({
                            viewPoints: c
                        }),
                        s("init viewpoint", o),
                        i.addAdBreaks(o)
                    }
                }) : s("no schedule or page not support viewpoint")
            }
        }
        ).call(t, n(5), n(23))
    }
    , function(e, t, n) {
        (function(t, i, r) {
            function o() {
                var e = this;
                e.requestCount = 0
            }
            function a(e) {
                try {
                    y.string(e) || (e = JSON.stringify(e));
                    var t = new Blob([e],{
                        type: "application/json"
                    })
                      , n = URL.createObjectURL(t);
                    return n
                } catch (i) {}
            }
            var s = n(38)
              , c = n(35)
              , u = n(48)
              , l = n(52)
              , d = n(36)
              , p = n(17).getLogger("show")
              , f = n(54)
              , h = n(55)
              , v = n(34)
              , m = n(56)
              , g = n(58)
              , y = t.is;
            e.exports = o;
            var b = {
                adPlayerId: "a",
                uaaUserId: "u",
                cupidUserId: "i",
                passportId: "p",
                requestId: "s",
                timestamp: "h",
                encryption: {
                    name: "e",
                    type: "object",
                    child: {
                        episodeId: "b",
                        albumId: "l",
                        channelId: "k",
                        cuepointList: {
                            name: "q",
                            type: "array",
                            child: {
                                cuepointType: "ct",
                                adZoneId: "zi",
                                startTime: "st",
                                sequenceId: "si",
                                requestAdDuration: "rd",
                                keyword: "kw",
                                limit: "lm",
                                skip: "sk"
                            }
                        },
                        referrer: "r",
                        offline: "o",
                        mobileKey: "t",
                        userAgent: "m",
                        continuingVideoPlayedCount: "n",
                        continuingVideoPlayedDuration: "y",
                        continuingAdPlayedDuration: "w",
                        isVIP: "v",
                        passportCookie: "pc",
                        network: "nw",
                        needPolicy: "po",
                        encryptionVersion: "pv",
                        isPreload: "pr",
                        checkCode: "cc",
                        checkCodeMethodVersion: "mv",
                        url: "ul",
                        videoPlayedDurationInDay: "cd",
                        adPlayedDurationInDay: "ca",
                        midrollPointsPlayedInView: "nm",
                        lastRollCompleteInterval: "in",
                        lastMidrollRequestTime: "lm",
                        clientVersion: "cv",
                        sdkVersion: "sv",
                        supportIQiyiTracking: "gt",
                        supportEmptyTracking: "ea",
                        searchQuery: "sq",
                        prerollOrderItemIds: "poi",
                        pauseRequestTimes: "pt",
                        playSource: "ps",
                        requestIndex: "rix",
                        videoEventId: "veid"
                    }
                }
            };
            o.request = function(e, t) {
                var n = new o;
                n.init(e).setCuepointList(t).request()
            }
            ,
            o.maxRequestCount = 2,
            o.stringifyCuepointList = function(e) {
                return t.map(e, function(e) {
                    return c.stringify(e, ",", ":")
                }).join(";")
            }
            ,
            o.compressRequestKey = u(b);
            var x = o.prototype;
            x.init = function(e) {
                var t = this;
                return t.context = e,
                t.param = {},
                t.encryptionParam = t.param.encryption = {},
                t
            }
            ,
            x.addParam = function(e) {
                var n = this;
                return t.extend(n.param, e),
                n
            }
            ,
            x.addEncryptionParam = function(e) {
                var n = this;
                return t.extend(n.encryptionParam, e),
                n
            }
            ,
            x.setContextParam = function() {
                var e = this
                  , n = e.context
                  , r = n.view
                  , o = r.sdk;
                o.updateUser();
                var a = t.extend({
                    timestamp: t.now()
                }, n.getMultiVals("adPlayerId uaaUserId passportId requestId".split(" ")));
                e.addParam(a);
                var c = s.parse(t.get(i, "document.referrer") || "") || {}
                  , u = t.extend({
                    referrer: c.host,
                    url: t.get(i, "location.href")
                }, n.getMultiVals("episodeId albumId videoDuration isVIP encryptionVersion isPreload clientVersion sdkVersion supportIQiyiTracking searchQuery passportCookie supportEmptyTracking requestIndex videoEventId pauseRequestTimes prerollOrderItemIds playSource".split(" ")));
                if (e.addEncryptionParam(u),
                r.isVideoView()) {
                    var l = o.video
                      , p = r.getContinuingViews()
                      , f = {
                        continuingVideoPlayedCount: p.length,
                        continuingVideoPlayedDuration: d.sumBy(p, "videoDuration"),
                        continuingAdPlayedDuration: d.sumBy(p.concat(r), "adPlayedDurationInView")
                    };
                    e.addEncryptionParam(f);
                    var h = {
                        adPlayedDurationInDay: m.data.adPlayedDurationInDay
                    }
                      , v = l.videoPlayedDurationInDay();
                    v && (v = parseInt(v)),
                    h.videoPlayedDurationInDay = v || 0,
                    n.isMidroll() && (h.midrollPointsPlayedInView = r.midrollPointsPlayedInView,
                    h.lastMidrollRequestTime = r.lastMidrollRequestTime,
                    r.lastRollCompleteTime && (h.lastRollCompleteInterval = Math.round((t.now() - r.lastRollCompleteTime) / 1e3))),
                    e.addEncryptionParam(h)
                }
                return e
            }
            ,
            x.normalizeRequestParam = function() {
                var e = this;
                return d.convertBoolInQuery(["needPolicy", "supportIQiyiTracking", "supportEmptyTracking", "isVIP", "isPreload"], e.encryptionParam),
                e
            }
            ,
            x.setCuepointList = function(e) {
                var t = this;
                return t.encryptionParam.cuepointList = e,
                t
            }
            ,
            x.compressParamKey = function() {
                var e = this;
                return p.debug("request param", e.param),
                e.compressedParam = o.compressRequestKey(e.param),
                p.debug("compressed request param", t.extend({}, e.compressedParam)),
                e.compressedParam.e.q = o.stringifyCuepointList(e.compressedParam.e.q),
                e
            }
            ,
            x.encryptRequestParam = function() {
                var e = this
                  , t = e.context.getVal("adPlayerId")
                  , n = c.stringify(e.compressedParam.e, "&", "=", {
                    keepRaw: !0
                });
                if (t && n) {
                    var i;
                    try {
                        i = h.encryptBySeed(n, t)
                    } catch (r) {
                        p.debug("encrypt error", n, t),
                        i = ""
                    }
                    e.compressedParam.e = i
                }
                return e
            }
            ,
            x.getPreviewParam = function() {
                var e = s.parse(t.get(i, "location.href"), !0).query
                  , n = "w y z".split(" ")
                  , r = t.only(e, n);
                if (t.keys(r).length == n.length)
                    return r
            }
            ,
            x.getUrl = function() {
                var e = this
                  , n = g.cupidUrl
                  , i = "/show2"
                  , r = e.compressedParam
                  , o = e.previewParam = e.getPreviewParam();
                return o && (p.debug("preview mode", o),
                i = "/preview3",
                r = t.extend({}, o, r)),
                e.url = n + i + "?" + c.stringify(r),
                e
            }
            ,
            x.request = function(e) {
                var t = this;
                return t.setContextParam().normalizeRequestParam().compressParamKey().encryptRequestParam().getUrl()._request(e),
                t
            }
            ,
            x._request = function(e) {
                function n(n, r) {
                    p.debug("status", n, s),
                    i.requestCount++;
                    var c = {
                        type: "show"
                    }
                      , u = t.once(function(t, n) {
                        c.requestCount = -1,
                        i.sendPingback(c),
                        e(t, n)
                    })
                      , l = "success" != n;
                    if (l)
                        c.errorCode = "timeout" == n ? 302 : 301,
                        i.requestCount < o.maxRequestCount ? (c.requestCount = i.requestCount,
                        i.sendPingback(c),
                        p.debug("request retry", i.requestCount),
                        i._request(e)) : (p.debug("request retry use up", o.maxRequestCount),
                        u(new Error(n)));
                    else {
                        if (c.requestDuration = s,
                        1 == i.encryptionParam.encryptionVersion) {
                            p.debug("descrypt response");
                            try {
                                r = h.decryptShowResponse(i.url, r)
                            } catch (d) {
                                p.debug("decrypt crash")
                            }
                        }
                        var v = a(r);
                        p.debug("response", r, v);
                        var m = f.smartLoad(r);
                        if (p.debug("humanize response", m),
                        m.errorCode) {
                            var g = {
                                302400: 305,
                                302500: 306,
                                302503: 307
                            };
                            c.errorCode = g[m.errorCode],
                            c.errorMessage = m.serverError
                        } else
                            i.setSdkParamByShow(m);
                        u(null, m)
                    }
                }
                var i = this;
                p.debug("request", i.url);
                var s, c = t.now(), u = 1e4;
                return y.wechatApp() ? i.ajax = wx.request({
                    url: i.url,
                    dataType: "string",
                    complete: function(e) {
                        s = t.now() - c,
                        e = e || {};
                        var i = "success";
                        /ok/.test(e.errMsg) || (i = s > u ? "timeout" : "error"),
                        n(i, e.data)
                    }
                }) : i.ajax = r.ajax({
                    url: i.url,
                    dataType: "jsonp",
                    jsonp: "cb",
                    timeout: u,
                    complete: function(e, i) {
                        s = t.now() - c,
                        n(i, e.responseJSON)
                    }
                }),
                i
            }
            ,
            x.sendPingback = function(e) {
                var t = this;
                e.type = "show",
                e.errorCode ? e.subtype = "error" : e.subtype = "success",
                v.send(t.context, e)
            }
            ,
            x.setSdkParamByShow = function(e) {
                var n = this.context
                  , i = n.getParentByName("sdk")
                  , r = n.view;
                if (e.cupidUserId && (i.cupidUserId = e.cupidUserId),
                e.pingbackParam && (n.pingbackParam = e.pingbackParam),
                e.pingbackConfig && (n.pingbackConfig = e.pingbackConfig),
                e.serverTime && (d.deltaTime = e.serverTime - t.now()),
                e.clientIP) {
                    var o = l.atob(e.clientIP);
                    p.debug("user ip", o),
                    i.userIP = o
                }
                i.vipMarketingDocuments = t.slice(e.vipMarketingDocuments || "", 0, 7),
                e.videoInfo && (r.disableSkipAd = e.videoInfo.disableSkipAd)
            }
            ,
            x.abort = function() {
                var e = this;
                e.ajax && e.ajax.abort()
            }
        }
        ).call(t, n(5), function() {
            return this
        }(), n(22))
    }
    , function(e, t, n) {
        function i(e, t) {
            var n = r(e, t);
            return f.encode(n)
        }
        function r(e, t) {
            t = t || {};
            var n = v;
            t.useURL ? n = m : null == t.useURL && d(e) && (n = m),
            e = e.replace(/\s+$/, "").replace(/=+$/, "").replace(/[\n\r]/g, "");
            for (var i = p.map(e.split(""), function(e) {
                return ~~n.decodeMap[e]
            }), r = [], o = 0; o < i.length; o += 4) {
                var a = c(p.slice(i, o, o + 4));
                r.push.apply(r, a)
            }
            return r
        }
        function o(e, t) {
            var n = f.decode(e);
            return a(n, t)
        }
        function a(e, t) {
            t = t || {};
            var n = v;
            t.useURL && (n = m);
            for (var i = [], r = 0; r < e.length; r += 3)
                i.push.apply(i, s(p.slice(e, r, r + 3)));
            return i = p.map(i, function(e) {
                return n.encodeMap[e] || h
            }),
            i.join("")
        }
        function s(e) {
            var t = [];
            return null == e[2] ? t[3] = 64 : t[3] = 63 & e[2],
            null == e[1] ? t[2] = 64 : t[2] = (15 & e[1]) << 2 | e[2] >> 6,
            t[1] = (3 & e[0]) << 4 | e[1] >> 4,
            t[0] = e[0] >> 2,
            t
        }
        function c(e) {
            var t = [];
            return null != e[3] && (t[2] = ((3 & e[2]) << 6) + e[3]),
            null != e[2] && (t[1] = ((15 & e[1]) << 4) + ((60 & e[2]) >> 2)),
            null != e[1] && (t[0] = (e[0] << 2) + ((48 & e[1]) >> 4)),
            t
        }
        function u(e) {
            var t = l(e)
              , n = p.invert(t);
            return {
                encodeMap: t,
                decodeMap: n
            }
        }
        function l(e) {
            for (var t = {}, n = 0; n < e.length; n++)
                t[n] = e.charAt(n);
            return t
        }
        function d(e) {
            return /[-_]/.test(e)
        }
        var p = n(5)
          , f = n(53);
        p.is;
        t.encode = t.btoa = o,
        t.decode = t.atob = i,
        t.encodeBytes = a,
        t.decodeToBytes = r;
        var h = "="
          , v = u("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
          , m = u("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_")
    }
    , function(e, t, n) {
        var i = n(5)
          , r = "InvalidCharacterError";
        t.decode = function(e) {
            e = i.tostr(e);
            for (var t, n = [], r = 0; r < e.length; r++)
                t = e.charCodeAt(r),
                t < 128 ? n.push(t) : t < 2048 ? n.push(192 | t >> 6, 128 | 63 & t) : t < 55296 || t >= 57344 ? n.push(224 | t >> 12, 128 | t >> 6 & 63, 128 | 63 & t) : n.push(239, 191, 189);
            return n
        }
        ,
        t.encode = function(e) {
            for (var t = [], n = 0, i = 0, o = 0; o < e.length; o++) {
                if (n = e[o],
                n > 224)
                    i = (15 & n) << 12,
                    n = e[++o],
                    i |= (63 & n) << 6,
                    n = e[++o],
                    i |= 63 & n;
                else if (n > 192)
                    i = (31 & n) << 6,
                    n = e[++o],
                    i |= (63 & n) << 6;
                else {
                    if (n > 128)
                        throw new Error(r);
                    i = n
                }
                t.push(String.fromCharCode(i))
            }
            return t.join("")
        }
    }
    , function(e, t, n) {
        (function(e) {
            function i(e) {}
            var r = n(48)
              , o = e.is
              , a = n(36)
              , s = {
                v: "version",
                ics: "ipCollectionServers",
                cl: "clientIP",
                de: "serverIP",
                set: "serverTime",
                ec: "errorCode",
                sr: "serverError",
                ar: "areaId",
                ui: "cupidUserId",
                ntc: "needTimeChecking",
                vmd: "vipMarketingDocuments",
                ci: "cacheIP",
                idc: "idc",
                ims: "ims",
                inv: {
                    name: "inventory",
                    type: "object",
                    child: {
                        fi: "forbiddenInventory",
                        ri: "rawInventory",
                        oi: "originalInventory",
                        di: "deliveredInventory"
                    }
                },
                vcc: {
                    name: "vipCheckConflict",
                    type: "object",
                    child: {
                        v: "isVIP",
                        c: "code",
                        m: "message"
                    }
                },
                pbp: "pingbackParam",
                m: {
                    name: "midrollPoints",
                    type: "object",
                    child: {
                        ac: "autoChoose",
                        nm: "nextMidroll"
                    }
                },
                pc: "pingbackConfig",
                vdi: {
                    name: "videoInfo",
                    type: "object",
                    child: {
                        dsa: "disableSkipAd",
                        vd: "videoDuration",
                        ai: "albumId"
                    }
                },
                s: {
                    name: "slots",
                    type: "array",
                    child: {
                        ctp: "cuepointType",
                        az: "adZoneId",
                        st: "startTime",
                        kw: "keyword",
                        ea: {
                            name: "emptyTracking",
                            type: "object",
                            child: {
                                tss: "timeSlices",
                                trp: "trackingParam"
                            }
                        },
                        a: {
                            name: "ads",
                            type: "array",
                            child: {
                                comment: "comment",
                                o: "order",
                                ori: "orderItemId",
                                tp: "timeSlices",
                                p: "priority",
                                hkw: "hitKeywords",
                                dtp: "deliverType",
                                ipt: "impressionTime",
                                skt: "skipTime",
                                bge: "badge",
                                h: "host",
                                se: "settle",
                                ta: "targetedAd",
                                ug: "userGroup",
                                ds: "isDSP",
                                dsi: "dspId",
                                dst: "dspType",
                                dsc: "dspIcon",
                                oet: "orderItemEndTime",
                                msm: "macroSubstitutionMap",
                                ies: {
                                    name: "ies",
                                    type: "array",
                                    child: {
                                        dm: "domain",
                                        msm: "macroSubstitutionMap"
                                    }
                                },
                                va: {
                                    name: "vast",
                                    type: "object",
                                    child: {
                                        vo: "vastObject"
                                    }
                                },
                                rp: {
                                    name: "replay",
                                    type: "object",
                                    child: {
                                        rpt: "replayTimes",
                                        bst: "replayShowTime",
                                        bct: "replayCloseTime"
                                    }
                                },
                                cr: {
                                    name: "creative",
                                    type: "object",
                                    child: {
                                        cra: "creativeId",
                                        crb: "creativeType",
                                        crc: "creativeTemplate",
                                        tt: "templateType",
                                        co: "creativeObject"
                                    }
                                },
                                clt: "clickThrough",
                                ctt: "clickThroughType",
                                ct: {
                                    name: "clickTracking",
                                    type: "object",
                                    child: {
                                        at: "exchangeTracking",
                                        ctc: "cupidTracking",
                                        tpt: "thirdPartyTracking"
                                    }
                                },
                                it: {
                                    name: "impressionTracking",
                                    type: "object",
                                    child: {
                                        at: "exchangeTracking",
                                        ctc: "cupidTracking",
                                        tpt: "thirdPartyTracking"
                                    }
                                },
                                et: {
                                    name: "eventTracking",
                                    type: "array",
                                    child: {
                                        ev: "event",
                                        tr: "trackings"
                                    }
                                },
                                qt: {
                                    name: "iqiyiTracking",
                                    type: "object",
                                    child: {
                                        ct: {
                                            name: "cupidTracking",
                                            type: "object",
                                            child: {
                                                evs: "events",
                                                trp: "trackingParam"
                                            }
                                        },
                                        at: {
                                            name: "exchangeTracking",
                                            type: "object",
                                            child: {
                                                evs: "events",
                                                trp: "trackingParam"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                c: {
                    name: "policySlots",
                    type: "array",
                    child: {
                        az: "adZoneId",
                        ctp: "cuepointType",
                        sts: "startTimes",
                        du: "duration",
                        azl: "adZoneStyle"
                    }
                },
                c_c_: "couponCode"
            };
            t.translate = r(s),
            t.decode = function(e) {
                return e
            }
            ,
            t.normalize = function() {}
            ,
            t.smartLoad = function(n) {
                var r = {};
                if (n) {
                    if (o.string(n)) {
                        var s = e.first(n);
                        "{" != s && (n = t.decode(n));
                        try {
                            n = a.parseJSON(n)
                        } catch (c) {}
                    }
                    if (o.object(n))
                        return i(n),
                        r = t.translate(n)
                }
                return r.error = new Error("parse error"),
                r
            }
        }
        ).call(t, n(5))
    }
    , function(e, t, n) {
        function i(e, t) {
            var n = v.decodeToBytes(e);
            n = f.map(n, function(e, n) {
                return e ^ t.charCodeAt(n % t.length)
            });
            var i = m.encode(n);
            return i
        }
        function r(e, t) {
            var n = m.decode(e);
            n = f.map(n, function(e, n) {
                return e ^ t.charCodeAt(n % t.length)
            });
            var i = v.encodeBytes(n);
            return i
        }
        function o(e) {
            var t = l(e)
              , n = h.parse(t)
              , r = n.a
              , o = n.e
              , a = i(o, r);
            return n.e = h.parse(a),
            n
        }
        function a(e) {
            var t = o(e)
              , n = t.e || {}
              , i = 0
              , r = 0
              , a = parseInt(n.b)
              , s = parseInt(n.l)
              , c = f.last(t.a);
            a > 100 && (i = parseInt(a / 100 % 100)),
            s > 100 && (r = parseInt(s / 100 % 100));
            var u = i + "y" + c + "w" + r;
            return u
        }
        function s(e, t) {
            var n = a(e);
            return r(t, n)
        }
        function c(e, t) {
            var n = a(e)
              , r = i(t, n);
            return r
        }
        function u(e, t) {
            var n, i, r = /,"c_c_":"(\w+)"/, o = t.match(r);
            if (o) {
                n = o[1];
                var a = t.replace(o[0], "");
                if (i = d(e, a),
                i == n)
                    return !0
            }
            return !1
        }
        function l(e) {
            var t = f.split(e, "?");
            return f.last(t)
        }
        function d(e, n) {
            var i = g(n + t.SHOW_VERIFY_KEY + l(e))
              , r = p(n, i);
            return r
        }
        function p(e, t) {
            t = f.split(t, "");
            for (var n, i = m.decode(e), r = Math.floor(i.length / 2) - 16, o = 31; o >= 1; --o) {
                var a = i[r + o] % (o + 1);
                o != a && (n = t[o],
                t[o] = t[a],
                t[a] = n)
            }
            return t.join("")
        }
        var f = n(5)
          , h = n(35)
          , v = n(52)
          , m = n(53)
          , g = n(49);
        t.decryptBySeed = i,
        t.encryptBySeed = r,
        t.decryptShowRequestByUrl = o,
        t.decryptShowResponse = c,
        t.encryptShowResponse = s,
        t.SHOW_VERIFY_KEY = "cupid_show2.0",
        t.getShowCheckSum = d,
        t.validateShowChecksum = u
    }
    , function(e, t, n) {
        function i() {
            a("init");
            var e = s.data || {}
              , t = new Date
              , n = t.getDay() != new Date(e.timestamp).getDay();
            e.timestamp && !n || r(),
            s.save()
        }
        function r() {
            a("reset"),
            s.data = {
                timestamp: (new Date).getTime(),
                adPlayedDurationInDay: 0,
                videoPlayedDurationInDay: 0
            },
            s.save()
        }
        var o = n(57)
          , a = n(16)("adstore")
          , s = o.useKey("ares");
        e.exports = s,
        i()
    }
    , function(e, t) {
        (function(n) {
            function i() {}
            function r(e, t) {
                var n = this;
                n.store = t,
                n.key = e,
                n.data = n.store.get(e)
            }
            var o = new i;
            e.exports = t = o;
            var a = i.prototype;
            n.JSON && (a.parse = function(e) {
                try {
                    e = JSON.parse(e)
                } catch (t) {}
                return e
            }
            ,
            a.stringify = function(e) {
                try {
                    e = JSON.stringify(e)
                } catch (t) {}
                return e
            }
            ),
            a.set = function(e, t) {
                var n = this;
                n.stringify && (t = n.stringify(t));
                try {
                    localStorage[e] = t
                } catch (i) {}
            }
            ,
            a.get = function(e) {
                var t = this;
                try {
                    var n = localStorage[e]
                } catch (i) {}
                return t.parse && (n = t.parse(n)),
                n
            }
            ,
            a.useKey = function(e) {
                return new r(e,this)
            }
            ;
            var s = r.prototype;
            s.save = function() {
                var e = this;
                e.store.set(e.key, e.data)
            }
        }
        ).call(t, function() {
            return this
        }())
    }
    , function(e, t, n) {
        var i = n(59);
        e.exports = new i
    }
    , function(e, t, n) {
        (function(t, i, r) {
            function o() {
                var e = this;
                u.call(e, s);
                var n = {
                    sdkVersion: p + "-ares3",
                    supportIQiyiTracking: !0,
                    supportEmptyTracking: !0,
                    encryptionVersion: "",
                    isVideoSupportOverlay: !0,
                    unsupportedCuepointTypes: a(),
                    sdkUrl: t.get(i, "document.currentScript.src"),
                    cupidUrl: "http://t7z.cupid.iqiyi.com",
                    DEBUG: !1,
                    isWechatApp: r.wechatApp()
                };
                d.isHttps() && (n.cupidUrl = "https://c7r.cupid.iqiyi.com"),
                c("config", n),
                t.extend(e, n),
                l.setLocale("zh-CN")
            }
            function a() {
                return t.map("3 5".split(" "), function(e) {
                    return parseInt(e)
                })
            }
            var s = "global"
              , c = n(16)(s)
              , u = n(28)
              , l = n(40)
              , d = n(36)
              , p = "3.21.0";
            c("db mode: `__playertype__=h5` in query");
            var f = {
                zh_CN: {
                    "请您稍事休息": "请您稍事休息",
                    "广告之后更精彩哟~": "广告之后更精彩哟~",
                    "会员免广告": "会员免广告",
                    "了解详情": "了解详情",
                    "查看详情": "查看详情",
                    "广告": "广告",
                    "手机（选填）": "手机（选填）",
                    "邮件（选填）": "邮件（选填）",
                    "请简短说明一下您遇到的问题（选填）": "请简短说明一下您遇到的问题（选填）",
                    "提交": "提交",
                    "我知道了": "我知道了",
                    "收到！我们会尽快为您解决问题!": "收到！我们会尽快为您解决问题!",
                    "提交失败，请稍后重试": "提交失败，请稍后重试",
                    "应版权方要求，会员无法跳过该剧广告": "应版权方要求，会员无法跳过该剧广告",
                    "版权文案": "为了给大家提供更多优质的美剧资源，应版权方的要求，会员在观看《破产姐妹》、《吸血鬼日记》、《无耻之徒》等美剧时，无法跳过广告，我们会为会员用户继续争取跳广告的权益，非常抱歉，感谢大家的支持！"
                },
                tw: {
                    "请您稍事休息": "請您稍事休息",
                    "广告之后更精彩哟~": "廣告之後更精彩喲~",
                    "会员免广告": "會員免廣告",
                    "了解详情": "了解詳情",
                    "查看详情": "查看詳情",
                    "广告": "廣告",
                    "手机（选填）": "手機（選填）",
                    "邮件（选填）": "郵箱（選填）",
                    "请简短说明一下您遇到的问题（选填）": "請簡短說明一下您遇到的問題（選填）",
                    "提交": "提交",
                    "我知道了": "我知道了",
                    "收到！我们会尽快为您解决问题!": "收到！我們會儘快為您解決問題！",
                    "提交失败，请稍后重试": "提交失敗，請稍後重試",
                    "应版权方要求，会员无法跳过该剧广告": "應版權方要求，會員無法跳過該劇廣告",
                    "版权文案": "為了給大家提供更多優質的美劇資源，應版權方的要求，會員在觀看《破產姐妹》、《吸血鬼日記》、《無恥之徒》等美劇時，無法跳過廣告，我們會為會員用戶繼續爭取跳廣告的權益，非常抱歉，感謝大家的支持！"
                }
            };
            l.setResources(f),
            t.inherits(o, u),
            e.exports = o
        }
        ).call(t, n(5), function() {
            return this
        }(), n(8))
    }
    , function(e, t, n) {
        (function(t, i) {
            function r(e, t) {
                var n = this;
                s.call(n, o),
                n.setParent(t),
                n.request = t,
                n.init(e),
                n.bindEvent()
            }
            var o = "slot"
              , a = n(16)(o)
              , s = n(28)
              , c = n(36)
              , u = n(61)
              , l = n(64)
              , d = n(32)
              , p = n(87)
              , f = n(90)
              , h = t.is
              , v = "ads cuepointType adZoneId startTime duration adzoneStyle emptyTracking".split(" ");
            e.exports = r,
            t.inherits(r, s);
            var m = r.prototype;
            m.getSummary = function() {
                var e = this;
                return "slot: " + d.cuepoint2name[e.cuepointType]
            }
            ,
            m.init = function(e) {
                a("init");
                var n = this;
                e = e || {},
                n.request = n.parent;
                var i = t.only(e, v);
                t.extend(n, i);
                var r = e.ads;
                return r = t.filter(r, function(e) {
                    return null == e.host
                }),
                t.each(r, function(e) {
                    var i = t.extend({
                        slot: n
                    }, e);
                    new u(i,n)
                }),
                n.ads = n.children,
                n.hasInited = !0,
                n
            }
            ,
            m.hasAds = function() {
                var e = this;
                return !h.empty(e.ads)
            }
            ,
            m.abort = function() {
                var e = this;
                "ended" != e.state && (a("abort"),
                t.map(e.children, function(e) {
                    e.abort()
                }),
                e.end())
            }
            ,
            m.tryLoadToVideo = function() {
                var e = this;
                return t.reduce(e.ads, function(e, t) {
                    return e.then(function() {
                        return t.tryLoadToVideo()
                    })
                }, i.resolve())
            }
            ,
            m.end = function() {
                var e = this;
                if (a("end"),
                e.isRoll()) {
                    var n = e.request.view;
                    n.lastRollCompleteTime = t.now()
                }
                e.setState("ended"),
                e.emit("ended")
            }
            ,
            m.isLinear = function() {
                var e = this;
                return e.isRoll()
            }
            ,
            m.play = function() {
                var e = this
                  , n = e.adZoneId;
                if (p.isTheatreSlot(e))
                    e.theatre = new p(e),
                    e.theatre.render();
                else if (e.isLinear()) {
                    var i = t.first(e.ads);
                    i ? i.play() : e.complete()
                } else
                    h.empty(e.ads) ? f.DEFINITION_SWITCHING_SHOW != n && e.complete() : t.each(e.ads, function(e) {
                        e.play()
                    })
            }
            ,
            m.reset = function() {
                var e = this;
                e.setState("idle"),
                t.each(e.children, function(e) {
                    e.reset()
                })
            }
            ,
            m.bindEvent = function() {
                var e = this;
                return e.once("init", function() {
                    e.initStatus()
                }),
                e.once("ended", function() {
                    var n = e.cuepointType;
                    if (c.isRoll(n) || t.includes([4, 6, 7, 9, 10, 11], n)) {
                        var i = e.request;
                        i.setState("ended")
                    }
                }),
                e
            }
            ,
            m.isPlayable = function() {
                var e = this;
                return t.some(e.children, function(e) {
                    return e.isPlayable()
                })
            }
            ,
            m.hasImpressed = function() {
                var e = this;
                return t.some(e.children, function(e) {
                    return e.hasImpressed
                })
            }
            ,
            m.complete = function() {
                var e = this;
                if (a("complete"),
                e.sendEmptyTrackingBeforeTimeSlice(1 / 0),
                e.isMidroll() && e.hasImpressed()) {
                    var t = e.request.adBreak;
                    t && !t.hasPlayed && (t.hasPlayed = !0,
                    e.request.view.midrollPointsPlayedInView++)
                }
                e.end()
            }
            ,
            m.getCuepointType = function() {
                var e = this;
                return e.cuepointType
            }
            ,
            m.sendEmptyTrackingBeforeTimeSlice = function(e) {
                var n = this
                  , i = n.emptyTracking || {};
                isNaN(e) || t.remove(i.timeSlices, function(r) {
                    var o = c.getFirstTimeSlice(r.w);
                    if (!isNaN(o) && o <= e) {
                        a("send empty tracking before", e, n.adZoneId);
                        var s = t.extend({}, r, i.trackingParam);
                        return l.send({}, s, n, "cupid", "impression"),
                        !0
                    }
                })
            }
        }
        ).call(t, n(5), n(23))
    }
    , function(e, t, n) {
        (function(t, i, r) {
            function o(e, t) {
                var n = this;
                b.call(n, d),
                n.playTimes = 0,
                n.setParent(t),
                n.bindEvent(),
                n.init(e),
                n.elements = [];
                var i = n.getParentByName("sdk");
                i && (i.adMap[n.id] = n),
                n.isExternal && (n.externalAdMap[n.id] = n)
            }
            function a(e) {
                e.on("video-playing", function() {
                    e.emit("playing")
                }),
                e.on("video-play", function() {
                    e.play()
                }),
                e.on("video-loadstart", function() {
                    e.emit("creativeLoad")
                }),
                e.on("video-pause", function() {
                    e.pause()
                }),
                e.on("video-error", function() {
                    e.template.emit("error", new C("video-error",{},I.CREATIVE_HTTP_ERROR))
                }),
                e.on("video-ended", function() {
                    e.emit("complete", {
                        type: "video-ended"
                    })
                }),
                e.on("click", h.throttle(function() {
                    return p("click", e),
                    e.isExternal ? g.click(e.creative.creativeId) : void m.send(e, "click")
                }, 500, {
                    trailing: !1
                })),
                e.once("impression", function() {
                    if (!e.hasImpressed) {
                        if (e.isEnded())
                            return void p("impression 失败, 广告已结束", e);
                        if (p("impression", e),
                        e.hasImpressed = !0,
                        e.handleConflict(),
                        e.isExternal)
                            return g.impression(e.creative.creativeId);
                        e.slot.sendEmptyTrackingBeforeTimeSlice(y.getFirstTimeSlice(e.timeSlices)),
                        m.send(e, "impression");
                        var t = e.slot.request;
                        t.inventoryOnVideoAdImpression ? e.isRoll() && t.emit("inventory") : t.emit("inventory"),
                        e.isRoll() && (p("roll ad start"),
                        t.view.onNetworkFree(),
                        e.emit("pingback", {
                            subtype: "start"
                        }),
                        m.send(e, "start"))
                    }
                }),
                e.once("trueview", function() {
                    p("trueview", e),
                    m.send(e, "trueview")
                }),
                e.on("skip", function() {
                    p("click skip"),
                    e.isTrueView() || e.isVIPAd() ? p("not send skip click") : e.emit("pingback", {
                        subtype: "skipClick"
                    });
                    var t = e.getParentByName("sdk")
                      , n = t.video;
                    if (t.getUser().isVIP || e.isTrueView() || e.isVIPAd())
                        p("skip success"),
                        e.emit("pingback", {
                            subtype: "skip",
                            customInfo: {
                                ofs: e.getPlayedTime()
                            }
                        }),
                        e.isTrueView() && m.send(e, "skip"),
                        n.pingback("ply_adskpd"),
                        h.each(e.slot.ads, function(e) {
                            e.skipped = !0
                        }),
                        e.emit("end", {
                            type: "skip"
                        });
                    else {
                        n.exitFullscreen();
                        var i = h.get(r, "Q.external.initVipPay");
                        if (A.fn(i))
                            p("support vip pay"),
                            i({
                                fc: "a3aa77e4bb08fdd9"
                            });
                        else {
                            var o = "http://serv.vip.iqiyi.com/order/preview.action?pid=a0226bd958843452&fc=a3aa77e4bb08fdd9";
                            h.includes(e.getVal("locale"), "tw") && (o = "http://serv.vip.iqiyi.com/order/preview.action?pid=af7de4c61c0a1805&qy_fr=WS-VIP-3102&app_lm=tw&platform=a31343b3762c80e7"),
                            p("skip fail, open pay page", o),
                            e.emit("open", o)
                        }
                    }
                }),
                e.once("creativeLoad", function() {
                    return e.isExternal ? g.creative({
                        creativeId: e.creative.creativeId,
                        subtype: "l"
                    }) : void v.send(e, {
                        type: "creative",
                        subtype: "load",
                        customInfo: h.get(e, "matchedVideo.definitionLevel")
                    })
                }),
                e.on("clickAndOpen", function(t, n) {
                    e.hasImpressed || e.isViewPoint() ? (e.emit("click"),
                    e.emit("open", t, n)) : p("has not impressed")
                }),
                e.on("open", h.throttle(function(t, n) {
                    if (p("open", e.format()),
                    A.element(t)) {
                        var r = i(t);
                        t = r.attr("href"),
                        n = n || r.attr("target")
                    }
                    t = t || e.getUseableClickThrough(),
                    y.open(t, n)
                }, 500, {
                    trailing: !1
                })),
                e.once("complete", function(t) {
                    p("complete"),
                    e.isRoll() && (k.data.adPlayedDurationInDay += e.duration,
                    k.save()),
                    e.isPause() ? e.slot.request.view.loadPause({
                        requestIndex: e.getVal("requestIndex") + 1,
                        from: e
                    }) : e.emit("end", t)
                }),
                e.once("end", function(t) {
                    if (t = t || {},
                    p("end by", t.type, e.format()),
                    e.setState("ended"),
                    e.template) {
                        var n = {};
                        "timer-complete" == t.type && (n.abort = !0),
                        e.template.stop(n)
                    }
                    e.isGeneralOverlay() && e.slot.request.view.removeCurrentOverlayAd(e),
                    h.each(e.elements, function(e) {
                        i(e).remove()
                    }),
                    e.emit("ended"),
                    e.slot.hasInited && (e.slot.isPage() || e.tryPlayNextAd())
                }),
                e.on("pingback", function(t) {
                    var n = h.map(e.slot.ads, function(e) {
                        return e.timeSlices.join("")
                    }).join("|")
                      , i = t.customInfo || {};
                    i.rpt = e.playTimes - 1;
                    var r = e.getParentByName("request");
                    r.adBreak && (t.sequenceId = r.adBreak.sequenceId),
                    t = h.extend({}, t, {
                        type: "ad",
                        orderItemId: e.orderItemId,
                        creativeId: e.creative.creativeId,
                        dspId: e.dspId,
                        adStrategy: [e.slot.cuepointType, e.timeSlices.join(""), n].join(":"),
                        customInfo: P.stringify(i, ",", ":")
                    }),
                    v.send(e, t)
                }),
                e.on("creativeError", function(t, n) {
                    return e.isExternal ? g.creative({
                        creativeId: e.creative.creativeId,
                        subtype: "e",
                        errCode: n,
                        errMsg: t,
                        reqCount: -1
                    }) : void v.send(e, {
                        type: "creative",
                        subtype: "error",
                        errorCode: n,
                        errorMessage: t,
                        requestCount: -1
                    })
                }),
                e.on("error", function(t) {
                    t = t || {},
                    p("error", t.message, t.data, e.format()),
                    e.error = t;
                    var n = t.code;
                    if (I.CREATIVE_TIMEOUT == n || I.CREATIVE_HTTP_ERROR == n) {
                        var i = h.get(t, "data.creativeUrl")
                          , r = I.CREATIVE_TIMEOUT == n ? 505 : 504;
                        e.emit("creativeError", i, r)
                    }
                    setTimeout(function() {
                        e.setState("error")
                    })
                }),
                e.on("statechange", function(e) {
                    p("state change", e)
                }),
                e.on("bridge", function() {
                    e.template && e.template.emit.apply(e.template, arguments)
                })
            }
            function s(e) {
                var t = {};
                return h.forIn(e, function(e, n) {
                    if (A.string(e) && (e = h.trim(e)),
                    "true" == e)
                        e = !0;
                    else if ("false" == e)
                        e = !1;
                    else {
                        var i = parseFloat(e);
                        i == e && (e = i)
                    }
                    t[n] = e
                }),
                t
            }
            function c(e, t) {
                return t = T.parse(t),
                !(t.hostname != e && !h.endsWith(t.hostname, "." + e))
            }
            function u(e) {
                var t = {};
                return h.each(e, function(e) {
                    if (e) {
                        var n = e.event;
                        A.array(t[n]) || (t[n] = []),
                        h.each(e.trackings, function(e) {
                            t[n].push(e)
                        })
                    }
                }),
                t
            }
            function l(e, t, n) {
                return t = t || {},
                "theme" == e && (t.url = n.creativeUrl || t.url),
                "giant_screen" == e && (t.url = n.creativeUrl || t.url,
                t.width = t.width || n.creativeWidth,
                t.height = t.height || n.creativeHeight),
                t
            }
            var d = "ad"
              , p = n(16)(d)
              , f = n(62)
              , h = n(5)
              , v = n(34)
              , m = n(63)
              , g = n(65)
              , y = n(36)
              , b = n(28)
              , x = n(66)
              , w = n(67)
              , T = n(38)
              , k = n(56)
              , I = n(71)
              , C = n(70)
              , P = n(35);
            e.exports = o;
            var A = h.is;
            h.inherits(o, b);
            var E = o.prototype;
            E.getSummary = function() {
                var e = this
                  , t = [e.creative.templateType, e.orderItemId, e.id];
                return t.join(" ")
            }
            ,
            E.init = function(e) {
                var t = this;
                p("init"),
                e = e || {},
                t.hasImpressed = !1,
                t.slot = t.parent,
                h.extend(t, e),
                t.id = h.compact(["ad", t.getVal("videoEventId"), f(), e.comment]).join("-"),
                t.timeSlices = h.split(t.timeSlices, ","),
                t.impressionTracking = t.impressionTracking || {},
                t.clickTracking = t.clickTracking || {},
                t.eventTracking = u(t.eventTracking),
                t.creative = t.creative || {},
                t.tryParseAndMergeVastStr(h.get(t, "vast.vastObject")),
                t.creative.rawCreativeObject = t.creative.creativeObject,
                t.creative.creativeObject = s(t.creative.creativeObject),
                t.duration = t.creative.creativeObject.duration,
                t.initTemplate()
            }
            ,
            E.getDuration = function() {
                var e = this;
                return e.initTemplate().then(function() {
                    return e.template.getDuration()
                })
            }
            ,
            E.tryLoadToVideo = function() {
                var e = this
                  , t = e.load().then(function() {
                    return e.isLiving(function() {
                        return e.template.loadRollToVideo()
                    })
                });
                return t["catch"](function(e) {
                    p("load to video fail", e)
                })
            }
            ,
            E.initTemplate = function() {
                var e = this;
                return e.tryTranslate().then(function() {
                    return e.memory.initTemplate = e.memory.initTemplate || new t(function(t, n) {
                        e.template = w.init(e),
                        e.template ? (e.duration = e.template.getDuration(),
                        isNaN(e.duration) ? n(new C("invalid duration")) : (e.isTrueView() && (e.impressionTime = e.parseImpressionTime(e.impressionTime, e.duration),
                        e.skipTime = e.parseSkipTime(e.skipTime, e.duration)),
                        e.checkOnlyPlay(),
                        t())) : (v.send(e, {
                            type: "statistics",
                            subtype: "unsupported"
                        }),
                        n(new C("unknown template",h.get(e, "creative.templateType"))))
                    }
                    ).caught(function(n) {
                        return e.emit("error", n),
                        t.reject(n)
                    }),
                    e.memory.initTemplate
                })
            }
            ,
            E.normalizeTranslatorUrl = function(e) {
                var t = this;
                e = y.replaceTimeMacro(e);
                var n = t.getParentByName("sdk")
                  , i = n.video;
                if (i) {
                    var r = {
                        "[PLAYER_WIDTH]": i.$video.width(),
                        "[PLAYER_HEIGHT]": i.$video.height()
                    };
                    e = y.replaceMap(e, r)
                }
                return e
            }
            ,
            E.tryTranslate = function() {
                var e = this;
                return e.isLiving(function() {
                    return e.memory.translate = e.memory.translate || new t(function(t, n) {
                        var r = e.creative.templateType;
                        if ("translator" == r) {
                            var o = e.creative.creativeObject
                              , a = o.surl;
                            a = e.normalizeTranslatorUrl(a),
                            p("translate vast url", a),
                            e.sendThirdPartyPingback();
                            var s = h.now();
                            i.ajax({
                                url: a,
                                xhrFields: {
                                    withCredentials: !0
                                },
                                dataType: "xml",
                                timeout: 2e3,
                                complete: function(i, a) {
                                    var c = h.now() - s;
                                    if (p("translate complete status", a),
                                    "success" == a) {
                                        var u = o.template || {};
                                        e.creative.oldTemplateType = e.creative.templateType,
                                        r = e.creative.templateType = u.type,
                                        e.creative.creativeTemplate = u.url;
                                        var l = e.tryParseAndMergeVastStr(i.responseText);
                                        l && l.creativeUrl && ("vpaid" == r ? h.extend(o, {
                                            url: l.creativeUrl,
                                            adParameters: l.adParameters
                                        }) : "crazy" == r ? h.extend(o, {
                                            url: l.creativeUrl,
                                            isShowAdTips: "Yes"
                                        }) : "roll" == r && (o.finalUrl = l.creativeUrl),
                                        e.sendThirdPartyPingback({
                                            errorCode: 900,
                                            requestDuration: c
                                        })),
                                        t()
                                    } else {
                                        var d = 901;
                                        "timeout" == a && (d = 902),
                                        e.sendThirdPartyPingback({
                                            errorCode: d
                                        }),
                                        n(new Error("translator " + a))
                                    }
                                }
                            })
                        } else
                            t()
                    }
                    ),
                    e.memory.translate
                })
            }
            ,
            E.load = function() {
                var e = this;
                return e.initTemplate().then(function() {
                    return e.memory.load = e.memory.load || new t(function(t, n) {
                        p("load"),
                        e.setState("loading");
                        var i = e.template.load();
                        t(i)
                    }
                    ),
                    e.memory.load
                })
            }
            ,
            E.play = function() {
                var e = this;
                return e.template && e.template.onAdPlay(),
                e.isLiving(function() {
                    return e.load()
                }).then(function() {
                    return e.isLiving(function() {
                        return "paused" == e.state ? e.resume() : "playing" != e.state ? e._play() : void 0
                    })
                }).caught(function(n) {
                    return e.error = e.error || n,
                    p("play error", e.error),
                    e.error && e.emit("end", {
                        type: "error"
                    }),
                    t.reject(n)
                })
            }
            ,
            E.resume = function() {
                var e = this;
                return e.isLiving(function() {
                    p("resume"),
                    e.setState("playing");
                    var t = e.template;
                    return A.fn(t.resume) ? t.resume() : t.play()
                })
            }
            ,
            E._play = function() {
                var e = this;
                return e.isLiving(function() {
                    p("play"),
                    e.playTimes++,
                    e.setState("playing");
                    var n = e.slot.request;
                    return e.isPause() && n.from && n.from.abort(),
                    e.isConflict() ? t.reject(new Error("conflict")) : (e.isGeneralOverlay() && e.slot.request.view.addCurrentOverlayAd(e),
                    e.template.play())
                })
            }
            ,
            E.isConflict = function() {
                var e = this;
                if (e.isGeneralOverlay()) {
                    var t = e.getVideo();
                    if (t && t.midrollTip.isVisible())
                        return !0;
                    var n = e.getVal("currentOverlayAds")
                      , i = h.some(n, function(e) {
                        return e.isViewPoint()
                    });
                    if (i)
                        return !0
                }
                return !1
            }
            ,
            E.handleConflict = function() {
                var e = this
                  , t = e.getVal("currentOverlayAds");
                (e.isPause() || e.isMidroll()) && h.each(t, function(t) {
                    var n = t.$adzone;
                    n && n.hide(),
                    e.isMidroll() && t.pause()
                });
                var n = h.filter(t, function(t) {
                    if (e != t) {
                        if (e.getVal("adZoneId") == t.getVal("adZoneId"))
                            return !0;
                        if (e.isViewPoint())
                            return !0
                    }
                    return !1
                });
                h.each(n, function(t) {
                    p("same adzone conflict", e.format(), "kill", t.format()),
                    t.abort()
                })
            }
            ,
            E.pause = function() {
                var e = this;
                return e.isLiving(function() {
                    e.setState("paused"),
                    e.template.pause()
                })
            }
            ,
            E.resize = function() {
                var e = this;
                return e.isLiving(function() {
                    h.includes(["paused", "playing"], e.state) && e.template.resize()
                })
            }
            ,
            E.triggerExternalEvent = function(e, t) {
                var n = this;
                if ("onAdImpression" == e) {
                    if (n.isViewPoint()) {
                        p("impression viewpoint sidebar"),
                        n.hasSidebarImpressioned || (n.hasSidebarImpressioned = !0,
                        v.send(n, {
                            type: "statistics",
                            subtype: "impression",
                            customInfo: "viewPointSidebar"
                        }));
                        var i = n.creative.creativeObject.impressionArea;
                        "sidebar" == i && n.emit("impression")
                    }
                } else
                    "onAdClick" == e && (n.emit("click"),
                    n.isViewPoint() && (p("click viewpoint sidebar"),
                    v.send(n, {
                        type: "statistics",
                        subtype: "click",
                        customInfo: "viewPointSidebar"
                    })))
            }
            ,
            E.reset = function() {
                var e = this;
                p("reset"),
                e.off(),
                e.bindEvent(),
                e.setState("idle"),
                e.isToolbar() && (e.hasImpressed = !1);
                var t = e.template;
                t && t.reset && t.reset()
            }
            ,
            E.open = function() {
                var e = this;
                e.emit("open")
            }
            ,
            E.isPlayable = function() {
                var e = this;
                return !e.error
            }
            ,
            E.checkOnlyPlay = function() {
                var e = this
                  , t = e.getVal("pageUrl")
                  , n = h.get(t, "query.onlyplay");
                n && (y.isAdMatch(e, n) ? (p("onlyplay mode match and direct play", n),
                e.play()) : e.emit("error", new C("ad is banned by onlyplay")))
            }
            ,
            E.abort = function() {
                var e = this;
                e.aborted = !0,
                p("abort"),
                e.emit("end", {
                    type: "abort"
                })
            }
            ,
            E.getCuepointType = function() {
                var e = this;
                return e.slot.cuepointType
            }
            ,
            E.sendThirdPartyPingback = function(e) {
                var t = this;
                v.send(t, h.extend({
                    type: "statistics",
                    subtype: "tps"
                }, e))
            }
            ,
            E.tryParseAndMergeVastStr = function(e) {
                var t = this;
                if (e) {
                    var n = x.parse(e);
                    return p("parsed vast", n, e),
                    n.isEmpty ? (p("empty vast"),
                    void t.sendThirdPartyPingback({
                        errorCode: 904,
                        errorMessage: e
                    })) : n.error ? (p("vast xml parse error", n.error),
                    void t.sendThirdPartyPingback({
                        errorCode: 903,
                        errorMessage: e
                    })) : (x.replaceMacro(n, t.settle),
                    n.clickThrough && (t.clickThrough = n.clickThrough),
                    t.dspIcon || (t.dspIcon = n.icon),
                    t.impressionTracking.thirdPartyTracking = h.union(t.impressionTracking.thirdPartyTracking, n.impressionTrackings),
                    t.clickTracking.thirdPartyTracking = h.union(t.clickTracking.thirdPartyTracking, n.clickTrackings),
                    h.forIn(n.eventTracking, function(e, n) {
                        t.eventTracking[n] = t.eventTracking[n] || [],
                        t.eventTracking[n] = h.union(t.eventTracking[n], e)
                    }),
                    t.creative.creativeObject = l(t.creative.templateType, t.creative.creativeObject, n),
                    n)
                }
            }
            ,
            E.canPlayNow = function() {
                var e = this;
                if (e.slot.isLinear()) {
                    var t = e.slot.ads[e.index() - 1];
                    if (t && !t.isEnded() && !t.error)
                        return !1
                }
                return !0
            }
            ,
            E.bindEvent = function() {
                var e = this;
                return a(e),
                e
            }
            ,
            E.index = function() {
                var e = this;
                return h.indexOf(e.slot.ads, e)
            }
            ,
            E.format = function() {
                var e = this;
                return {
                    adZoneId: e.slot.adZoneId,
                    templateType: e.creative.templateType,
                    orderItemId: e.orderItemId
                }
            }
            ,
            E.tryPlayNextAd = function() {
                var e = this
                  , t = e.index()
                  , n = e.slot.ads[t + 1];
                n ? n.skipped ? n.tryPlayNextAd() : (p("play next ad"),
                n.play()) : e.skipped || e.aborted ? e.slot.end() : e.slot.complete()
            }
            ,
            E.replaceCommon3rdMacro = function(e) {
                var t = this;
                e = e || "",
                e = h.trim(e);
                var n = t.getVal("userIP")
                  , i = t.getVal("cupidUserId")
                  , r = t.getVal("uaaUserId")
                  , o = {
                    "[UDID]": i,
                    "[M_IDFA]": r,
                    "[IDFA]": i,
                    "[IQIYI_HCID]": i,
                    "[IQIYI_FCID]": r,
                    "[QIYI_ID]": r,
                    __UDID__: i,
                    __IP__: n,
                    "[M_ADIP]": n,
                    "[M%5fADIP]": n,
                    "[QIYI_AUTHCOOKIE]": t.getVal("passportCookie"),
                    "[IQIYI_OFFSET]": t.getPlayedTime()
                };
                h.extend(o, t.macroSubstitutionMap),
                h.each(h.compact(t.ies), function(t) {
                    var n = h.some(t.domain, function(t) {
                        return c(t, e)
                    });
                    n && h.extend(o, t.macroSubstitutionMap)
                }),
                e = y.replaceMap(e, o, !0);
                var a = y.getCalibratedTime();
                return e = y.replaceTimeMacro(e, a)
            }
            ,
            E.replace3rdTrackingMacro = function(e) {
                var t = this;
                return e = h.trim(t.replaceCommon3rdMacro(e))
            }
            ,
            E.replaceClickThroughMacro = function(e) {
                var t = this
                  , n = t.replaceCommon3rdMacro(e || t.clickThrough);
                return n
            }
            ,
            E.getUseableClickThrough = function(e) {
                var t = this;
                return h.trim(t.replaceClickThroughMacro(e || t.clickThrough))
            }
            ,
            E.hasDspIcon = function() {
                var e = this;
                return !(1 != e.isDSP || !e.dspIcon)
            }
            ,
            E.putIcon = function(e, t) {
                var n = this
                  , r = 25;
                return t = t || {},
                y.loadImage(e).then(function(o) {
                    return n.$adzone ? (p("put icon", e),
                    i(o).css({
                        bottom: (t.bottom || 0) + "px",
                        left: (t.left || 0) + "px",
                        width: r + "px",
                        height: r + "px",
                        position: "absolute"
                    }),
                    n.$adzone.append(o),
                    n.elements.push(o),
                    o) : new Error("no adzone")
                })
            }
            ,
            E.getAdInfo = function() {
                return y.getAdInfo(this)
            }
            ,
            E.getBaseInfo = function() {
                var e = this
                  , t = {
                    id: e.id,
                    orderItemId: e.orderItemId,
                    adZoneId: e.slot.adZoneId,
                    templateType: e.creative.templateType,
                    startTime: e.slot.startTime
                };
                return t
            }
            ,
            E.getPlainInfo = function() {
                var e = this;
                return h.extend(e.getBaseInfo(), e.creative.creativeObject)
            }
            ,
            E.isPMP = function() {
                return 1 == this.deliverType
            }
            ,
            E.isTrueView = function() {
                return 2 == this.deliverType
            }
            ,
            E.isVIPAd = function() {
                return 3 == this.deliverType
            }
            ,
            E.isOriginalRoll = function() {
                return 4 == this.deliverType
            }
            ,
            E.parseImpressionTime = function(e, t) {
                var n = h.endsWith(e, "%")
                  , i = parseFloat(e);
                n && (e = t * i / 100);
                var r = e >= 0 && e <= t;
                return r || (e = t / 2),
                e = parseInt(e)
            }
            ,
            E.parseSkipTime = function(e, t) {
                e = parseInt(e);
                var n = e >= 0 && e <= t;
                return n || (e = Math.min(5, t)),
                e
            }
            ,
            E.getPlayedTime = function() {
                var e = this
                  , t = e.duration || 0
                  , n = e.remain || 0;
                return t - n
            }
        }
        ).call(t, n(23), n(22), function() {
            return this
        }())
    }
    , function(e, t) {
        function n(e) {
            return e = e || 7,
            Math.random().toString(35).substr(2, e)
        }
        e.exports = n
    }
    , function(e, t, n) {
        (function(t) {
            function i(e, t) {
                var n = this;
                e instanceof o && (n.context = e),
                n.eventName = s.normalizeEventName(t),
                n.eventCode = s.getEventCodeByName(n.eventName)
            }
            var r = n(16)("tracking")
              , o = n(28)
              , a = n(36)
              , s = n(64);
            e.exports = i,
            i.send = function(e, t) {
                var n = new i(e,t);
                n.sendAll()
            }
            ;
            var c = i.prototype;
            c.sendAll = function() {
                var e = this;
                e.sendCupid(),
                e.sendExchange(),
                e.sendThirdParty()
            }
            ,
            c.sendCupid = function() {
                var e = this
                  , n = e.context;
                if (n.isContext("ad")) {
                    var i = t.get(n, "iqiyiTracking.cupidTracking") || {};
                    if (t.includes(i.events, e.eventCode)) {
                        var r = i.trackingParam;
                        s.send({}, r, n, "cupid", e.eventName)
                    }
                }
            }
            ,
            c.sendExchange = function() {
                var e = this
                  , n = e.context;
                if (n.isContext("ad")) {
                    var i = t.get(n, "iqiyiTracking.exchangeTracking") || {};
                    if (t.includes(i.events, e.eventCode)) {
                        var r = i.trackingParam;
                        s.send({}, r, n, "exchange", e.eventName)
                    }
                }
            }
            ,
            c.sendThirdParty = function() {
                var e = this
                  , n = e.getThirdParty()
                  , i = e.context.getVal("pingbackConfig") || {}
                  , o = t.keys(i);
                t.each(n, function(n) {
                    r("send", "thirdParty", e.eventName, n);
                    var c = t.find(o, function(e) {
                        return t.startsWith(n, e)
                    });
                    if (c) {
                        r("match pingback config", c);
                        var u = new s;
                        u.context = e.context,
                        u.url = n,
                        u.isQixiao = !0,
                        u._send(function() {
                            u.sendPingback(i[c])
                        })
                    } else
                        a.ping(n)
                })
            }
            ,
            c.getThirdParty = function() {
                var e = this
                  , n = e.context;
                if (!n.isContext("ad"))
                    return [];
                var i = e.eventName
                  , r = t.get(n, i + "Tracking.thirdPartyTracking")
                  , o = t.get(n, ["eventTracking", i])
                  , a = t.compact(t.union(r, o));
                return t.map(a, function(e) {
                    return n.replace3rdTrackingMacro(e)
                })
            }
        }
        ).call(t, n(5))
    }
    , function(e, t, n) {
        (function(t, i) {
            function r() {}
            var o = n(17).getLogger("qiyi-tracking")
              , a = n(36)
              , s = n(28)
              , c = n(48)
              , u = n(49)
              , l = n(35)
              , d = n(34)
              , p = n(58)
              , f = t.is;
            e.exports = r;
            var h = {
                impression: 0,
                click: 1,
                push: 2,
                trueview: 3,
                start: 10,
                firstQuartile: 11,
                midpoint: 12,
                thirdQuartile: 13,
                complete: 14,
                downloadStart: 20,
                downloaded: 21
            }
              , v = {
                "1q": "firstQuartile",
                mid: "midpoint",
                "3q": "thirdQuartile",
                stop: "complete",
                sp: "complete"
            }
              , m = {
                type: "a",
                timestamp: "b",
                videoEventId: "r",
                securityCode: "s",
                md5Version: "ve",
                uploadId: "up",
                clientVersion: "cv",
                sdkVersion: "sv",
                startTime: "st"
            }
              , g = c(m);
            r.getEventCodeByName = function(e) {
                var t = h[e];
                return t
            }
            ,
            r.normalizeEventName = function(e) {
                return e = v[e] || e
            }
            ,
            r.send = function(e, t, n, i, o) {
                var a = new r;
                a.init(n).addCompressedParam(t).addUncompressedParam(e).setType(i).setEvent(o).send(function() {
                    a.sendPingback()
                })
            }
            ,
            r.encryptCupid = function(e) {
                e.b = a.getTrackingTime();
                var n = t.map("a b c d r".split(" "), function(t) {
                    return e[t]
                });
                e.s = u(n.join("") + "cupid")
            }
            ,
            r.encryptExchange = function(e) {
                e.b = a.getTrackingTime();
                var n = t.map("a v b c r d q".split(" "), function(t) {
                    return e[t]
                });
                e.s = u(n.join("") + "qax-track")
            }
            ,
            r.cupidUrl = p.cupidUrl + "/track2",
            r.exchangeUrl = p.cupidUrl + "/etx";
            var y = r.prototype;
            y.init = function(e) {
                var t = this;
                return t.compressedParam = {},
                t.uncompressedParam = {},
                e instanceof s && (t.context = e),
                t
            }
            ,
            y.addCompressedParam = function(e) {
                return t.extend(this.compressedParam, e),
                this
            }
            ,
            y.addUncompressedParam = function(e) {
                return t.extend(this.uncompressedParam, e),
                this
            }
            ,
            y.setType = function(e) {
                var t = this
                  , n = "exchange" == e;
                return t.isExchange = n,
                t.type = "cupid",
                n && (t.type = "exchange"),
                this
            }
            ,
            y.addFrontendParam = function() {
                var e = this
                  , t = {
                    md5Version: 1
                }
                  , n = e.context;
                return n && (t.uploadId = n.getVal("uploadId"),
                t.clientVersion = n.getVal("clientVersion"),
                t.sdkVersion = n.getVal("sdkVersion"),
                t.videoEventId = n.getVal("videoEventId"),
                t.startTime = n.getVal("startTime") || 0),
                e.addUncompressedParam(t),
                e
            }
            ,
            y.mergeUncompressedParam = function() {
                var e = this
                  , n = g(e.uncompressedParam);
                return t.extend(e.compressedParam, n),
                e
            }
            ,
            y.setEvent = function(e) {
                var t = this;
                return t.eventName = r.normalizeEventName(e),
                t.eventCode = r.getEventCodeByName(t.eventName),
                t.compressedParam.a = t.uncompressedParam.type = t.eventCode,
                t
            }
            ,
            y.encryptParam = function() {
                var e = this
                  , t = r.encryptCupid;
                return e.isExchange && (t = r.encryptExchange),
                t(e.compressedParam),
                e
            }
            ,
            y.getUrl = function() {
                var e = this
                  , t = r.cupidUrl;
                return e.isExchange && (t = r.exchangeUrl),
                t = t + "?" + l.stringify(e.compressedParam),
                e.url = t,
                e
            }
            ,
            y._send = function(e) {
                var n = this;
                o.debug("send", n.type, n.eventName),
                o.verbose("verbose send", n.type, n.eventName, n.uncompressedParam, n.compressedParam, n.context.getInfo());
                var r = t.now()
                  , a = n.url;
                return i.ajax({
                    url: a,
                    dataType: "jsonp",
                    jsonp: "cb",
                    timeout: 1e4,
                    complete: function(i, o) {
                        n.response = {
                            textStatus: o,
                            duration: t.now() - r,
                            data: i.responseJSON,
                            status: i.status
                        },
                        e()
                    }
                }),
                n
            }
            ,
            y.send = function(e) {
                var t = this;
                return t.addFrontendParam().mergeUncompressedParam().encryptParam().getUrl()._send(e)
            }
            ,
            y.sendPingback = function(e) {
                var n, i = this, r = {
                    type: "tracking",
                    subtype: "success",
                    requestCount: -1
                }, s = i.response;
                t.includes(s.data, "ok") ? (o.verbose("response success", s),
                r.requestDuration = s.duration) : (o.error("error", s),
                r.subtype = "error",
                n = 601,
                "timeout" == s.textStatus ? n = 602 : "success" != s.textStatus && (n = 603)),
                i.isExchange ? (r.type = "exchange",
                f.number(n) && (n += 500)) : i.isQixiao && (r.type = void 0,
                f.number(n) && (n += 900)),
                r.errorCode = n;
                var c = i.context;
                i.context.isContext("slot") && (c = {
                    slot: i.context
                }),
                r.adInfo = a.getAdInfo(c),
                d.send(i.context, r, e)
            }
        }
        ).call(t, n(5), n(22))
    }
    , function(e, t, n) {
        (function(e) {
            function i() {
                return o || (o = e("#flash")[0]),
                !!o || (a("fail to find #flash"),
                !1)
            }
            function r(e, t) {
                if (i())
                    try {
                        o[e](t),
                        a(e, t)
                    } catch (n) {}
            }
            var o, a = n(16)("call-flash");
            t.click = function(e) {
                r("onPageAdClickThrough", e),
                r("onPageAdClickPb", e)
            }
            ,
            t.impression = function(e) {
                r("onPageAdImpression", e)
            }
            ,
            t.creative = function(e) {
                e && (e.type = "c",
                r("onPageAdPb", e))
            }
        }
        ).call(t, n(22))
    }
    , function(e, t, n) {
        (function(e, i) {
            function r(t) {
                return e.trim(t.text())
            }
            var o = n(36)
              , a = e.is;
            t.parse = function(n) {
                var o, s = {};
                if (a.string(n))
                    try {
                        o = i.parseXML(n)
                    } catch (c) {
                        s.error = c
                    }
                else
                    o = n;
                if (o) {
                    var u = i(o)
                      , l = u.find("Ad").eq(0)
                      , d = l.find("Wrapper")
                      , p = l.find("InLine");
                    d[0] && (s.redirect = r(d.find("VASTAdTagURI")));
                    var f = d[0] || p[0];
                    if (f) {
                        var h = i(f);
                        s.impressionTrackings = e.compact(e.map(h.find("Impression"), function(e) {
                            return r(i(e))
                        }));
                        var v = h.find("Creatives").find("Creative").eq(0);
                        if (v[0]) {
                            var m = v.find("Linear");
                            s.duration = r(m.find("Duration")),
                            s.adParameters = r(m.find("AdParameters")),
                            s.clickThrough = r(m.find("VideoClicks").find("ClickThrough")),
                            s.icon = r(m.find("Icons").find("Icon").find("StaticResource"));
                            var g = m.find("MediaFiles").find("MediaFile");
                            s.creativeUrl = r(g),
                            s.creativeWidth = e.trim(g.attr("width")),
                            s.creativeHeight = e.trim(g.attr("height")),
                            s.clickTrackings = e.compact(e.map(m.find("VideoClicks").find("ClickTracking"), function(e) {
                                return r(i(e))
                            }));
                            var y = m.find("TrackingEvents").find("Tracking")
                              , b = s.eventTracking = {};
                            e.each(y, function(t) {
                                var n = i(t)
                                  , o = e.trim(n.attr("event"));
                                a.array(b[o]) || (b[o] = []);
                                var s = r(n);
                                s && b[o].push(s)
                            })
                        }
                    }
                }
                return s.isEmpty = t.isEmptyVast(o),
                s
            }
            ,
            t.isEmptyVast = function(e) {
                return null == i(e).find("Ad").children()[0]
            }
            ,
            t.replaceMacro = function(t, n) {
                if (t && n) {
                    var i = "${SETTLEMENT}";
                    e.each("redirect clickThrough creativeUrl".split(" "), function(e) {
                        t[e] = o.replacePlain(t[e], i, n)
                    }),
                    t.clickTrackings = e.map(t.clickTrackings, function(e) {
                        return o.replacePlain(e, i, n)
                    }),
                    t.impressionTrackings = e.map(t.impressionTrackings, function(e) {
                        return o.replacePlain(e, i, n)
                    }),
                    e.mapValues(t.eventTracking, function(t, r) {
                        return e.map(t, function(e) {
                            return o.replacePlain(e, i, n)
                        })
                    })
                }
                return t
            }
            ,
            t.appendToAd = function(e, t) {}
        }
        ).call(t, n(5), n(22))
    }
    , function(e, t, n) {
        var i = n(68)
          , r = n(80)
          , o = n(81)
          , a = n(83)
          , s = n(69)
          , c = n(84)
          , u = n(85)
          , l = n(86)
          , d = {
            roll: i,
            pause: i,
            common_pause: i,
            overlay: i,
            common_overlay: i,
            cornerSign: i,
            toolbar: i,
            viewPoint: i,
            crazy: i,
            imageroll: i,
            swfroll: i,
            relatedapp: i,
            ordinary_background: r,
            mini_seed: o,
            seed: o,
            pageer: o,
            giant_screen: a,
            theatre: s,
            theme: c,
            image: u,
            definition_switching: l
        };
        t.init = function(e) {
            var t = e.creative.templateType
              , n = d[t];
            if (n)
                return new n(e)
        }
    }
    , function(e, t, n) {
        (function(i, r, o) {
            function a(e) {
                var t = this;
                d.call(t, e);
                var n = t.creativeObject = e.creative.creativeObject;
                t.isTranslator() && (t.isRoll() && (e.creative.templateType = "translator->" + e.creative.templateType,
                t.creativeUrl = n.finalUrl),
                t.log = f.getLogger(e.creative.templateType + ":" + (e.orderItemId || e.id)));
                var r = e.getParentByName("sdk");
                r && (t.video = r.video),
                t.video && (t.$adContainer = r.video.$adContainer,
                t.$video = r.video.$video,
                t.isRoll() && (e.$adzone = t.$adzone = t.$adContainer)),
                e.$adzone.data({
                    adzone: e.getVal("adZoneId")
                }),
                t.effect = {
                    duration: 500,
                    type: "appear"
                },
                t.isOutVideo = !1,
                t.ad.isPage() && (t.isOutVideo = !0),
                t.isRatioFixed = !0,
                t.canExpand = !0,
                t.waitingTimer = new m(1e3,15),
                t.waitingTimer.on("timerComplete", function() {
                    t.video.paused() || (e.emit("error", new h("waiting too long",{
                        creativeUrl: t.creativeUrl
                    },v.CREATIVE_ERROR)),
                    e.abort())
                }),
                t.on("error", function(n) {
                    n.data = {
                        creativeUrl: t.creativeUrl
                    },
                    e.emit("error", n),
                    t.video && t.video.getCurrentAd() == e && e.abort()
                }),
                t.creativeUrl = t.creativeUrl || n.url,
                t.isCommonOverlay() ? t.creativeUrl = n.creativeUrl : t.isCornerSign() ? t.creativeUrl = n.smallImgUrl : t.isToolbar() ? (t.isRatioFixed = !1,
                t.creativeUrl = n.imgUrl,
                i.extend(t.effect, {
                    type: "move",
                    direction: "left-to-right"
                })) : t.isViewPoint() ? (t.isRatioFixed = !1,
                t.creativeUrl = n.imgUrl,
                t.renderType = "viewPoint",
                n.priceText = u(n.price)) : t.isCrazy() ? t.creativeMode = "Interactive" : t.isRoll() ? t.renderType = "roll" : t.isRelatedApp() && (t.creativeUrl = n.icon,
                t.renderType = "image"),
                t.renderType = t.renderType || n.renderType || p.getRenderType(t.creativeUrl),
                t.creativeMode = t.creativeMode || n.creativeMode,
                t.creativeMode = i.lower(t.creativeMode),
                t.size = {},
                t.log.debug("render type", t.renderType, n, e.creative.templateType, t.creativeMode),
                i.includes(["image", "swf", "video", "html", "viewPoint", "roll"], t.renderType) || t.ad.emit("error", new h("unknown render type",{
                    creativeUrl: t.creativeUrl
                },v.UNKNOWN_RENDER_TYPE)),
                t.hasPlaying = !1
            }
            function s(e) {
                e.css({
                    width: "1px",
                    height: "1px"
                }).show().css({
                    visibility: "hidden"
                })
            }
            function c(e) {
                e.show().css({
                    visibility: ""
                })
            }
            function u(e) {
                return e = parseFloat(e),
                isNaN(e) ? "" : "￥" + e
            }
            function l(e) {
                return i.reduce(e, function(e, t) {
                    return t.error ? e : e + t.duration
                }, 0)
            }
            var d = n(69)
              , p = n(36)
              , f = n(17).Log
              , h = n(70)
              , v = n(71)
              , m = n(42)
              , g = n(73)
              , y = n(32)
              , b = n(41).template
              , x = n(40)
              , w = n(63)
              , T = n(34)
              , k = n(75)
              , I = n(35)
              , C = n(49)
              , P = {
                width: 298,
                height: 92
            }
              , A = [980, 1180, 1360, 1540, 1720];
            e.exports = t = a,
            i.inherits(a, d);
            var E = a.prototype;
            E.isRollLike = function() {
                var e = this;
                return !!(e.isCrazy() || e.isTranslator() || e.isSwfRoll() || e.isImageRoll())
            }
            ,
            E.trySetCrazyMode = function() {
                var e = this;
                if (e.isCrazy()) {
                    var t = !!p.getQiyiResponseLevel()
                      , n = e.video.isFullScreen();
                    !t || n ? (e.isOutVideo = !1,
                    e.isRatioFixed = !0) : (e.isOutVideo = !0,
                    e.isRatioFixed = !1),
                    n && (e.canExpand = !1)
                }
            }
            ,
            E.loadByBridge = function() {
                var e = this;
                return new r(function(t, n) {
                    var r = "http://www.iqiyi.com/basic/bridge.swf?" + i.now();
                    e.log.debug("use ares flash bridge", r);
                    var a = {
                        id: e.ad.id,
                        useHandCursor: !!e.ad.clickThrough,
                        creativeMode: e.creativeMode,
                        jsProxyName: "ares.bridgeEmit"
                    };
                    e.isCrazy() && (a.swfApi = "crazy");
                    var c = g.create(r, {
                        id: e.ad.id,
                        width: "100%",
                        height: "100%",
                        params: {
                            bgcolor: "#000000"
                        },
                        vars: a
                    })
                      , u = !1
                      , l = m.timeout(function() {
                        u ? e.emitCreativeError("timeout", e.creativeUrl) : e.emitCreativeError("timeout", r),
                        n(new Error("bridge timeout"))
                    }, 1e4);
                    e.on("ready", function() {
                        e.log.debug("ready"),
                        u ? (n(new Error("double bridge ready abort")),
                        e.ad.abort()) : (u = !0,
                        l.reset(),
                        l.start(),
                        e.bridge.src(e.creativeUrl))
                    }),
                    e.on("loaded", function(n) {
                        e.log.debug("bridge creative meta loaded", n),
                        l.stop(),
                        e.size.creativeRawWidth = n.width,
                        e.size.creativeRawHeight = n.height,
                        t()
                    }),
                    e.on("error", function(t) {
                        e.log.debug("bridge error", t),
                        l.stop(),
                        e.emitCreativeError("error", e.creativeUrl),
                        n(new Error("creative error"))
                    }),
                    e.on("abort", function() {
                        e.log.debug("abort"),
                        e.ad.abort()
                    }),
                    e.on("pause", function() {
                        e.ad.pause()
                    }),
                    e.on("resume", function() {
                        e.ad.resume()
                    }),
                    e.on("click", function() {
                        e.log.debug("click"),
                        e.isCrazy() && e.ad.pause(),
                        "interactive" == e.creativeMode ? e.ad.emit("click") : e.ad.emit("clickAndOpen")
                    });
                    var d = o(c);
                    e.creativeElement = e.bridge = d[0],
                    s(e.$adzone),
                    e.putOnDocument()
                }
                )
            }
            ,
            E.load = function() {
                var e, t = this, n = t.ad;
                return new r(function(i, r) {
                    if (t.isEnded())
                        return r(new Error("has ended"));
                    if (t.trySetCrazyMode(),
                    t.log.debug("load"),
                    t.isSwfRoll())
                        t.log.debug("swfroll 在 play 的时候才加载 swf, 因为无法只加载且暂停"),
                        i();
                    else if (t.isRoll()) {
                        var a = "mp4";
                        /data/i.test(t.video.getEngineType()) && (a = "f4v");
                        var s = p.chooseAdVideoByVideoDefinition(n.creative.creativeObject, n.slot.request.view.videoDefinition, a);
                        s ? (t.log.debug("matched ad video", s),
                        t.creativeUrl = s.video,
                        "mp4" == a && (t.creativeUrl += "?pv=0.2"),
                        n.matchedVideo = s,
                        i()) : (e = new h("fail to match ad video",n.creative.creativeObject,v.BAD_CREATIVE_OBJECT),
                        n.emit("error", e),
                        r(e))
                    } else if ("image" == t.renderType || t.isViewPoint()) {
                        var c = 5e3;
                        t.ad.isPage() && (c = 3e4),
                        i(t.loadImage(t.creativeUrl, c).then(function(e) {
                            t.creativeElement = e,
                            t.size.creativeRawWidth = e.width,
                            t.size.creativeRawHeight = e.height
                        }))
                    } else if ("html" == t.renderType) {
                        var u = o("<iframe>");
                        u.attr({
                            frameborder: 0,
                            scrolling: "no",
                            src: t.creativeUrl
                        }).css({
                            width: "100%",
                            height: "100%"
                        }),
                        t.creativeElement = u[0],
                        i()
                    } else
                        "swf" != t.renderType && "video" != t.renderType || i(t.loadByBridge());
                    n.error || t.isRoll() || n.emit("creativeLoad")
                }
                )
            }
            ,
            E.putOnDocument = function() {
                var e = this;
                if (e.$adzone)
                    if (e.isViewPoint() || e.ad.isPage() || p.tryAppend(e.$adzone, e.creativeElement),
                    e.$adzone.parent().get(0))
                        ;
                    else if (e.isOutVideo) {
                        var t = document.body;
                        p.tryAppend(t, e.$adzone)
                    } else
                        p.tryAppend(e.$adContainer, e.$adzone)
            }
            ,
            E.onFirstPlaying = function() {
                var e = this;
                if (!e.hasPlaying) {
                    e.hasPlaying = !0;
                    var t = e.ad;
                    if (e.isRoll() || e.isRollLike()) {
                        var n = t.slot.request
                          , r = n.view;
                        r.stopVideo(n.getRollName()),
                        e.isRollLike() && r.sdk.switchToVideoView(r)
                    }
                    t.remain = t.duration,
                    e.log.debug("on first playing"),
                    e.isViewPoint() ? (p.notifyPage("startAd", {
                        startTime: t.slot.startTime,
                        templateType: t.creative.templateType,
                        adUid: t.id,
                        adZoneId: t.slot.adZoneId,
                        videoEventId: t.getVal("videoEventId")
                    }),
                    T.sendStatistics(t, "impression", "viewPointTips"),
                    "tips" == e.creativeObject.impressionArea && e.ad.emit("impression")) : e.ad.emit("impression"),
                    e.initProgress(),
                    e.slotDuration = l(t.slot.ads);
                    var a = {}
                      , s = e.video;
                    if (t.isRoll()) {
                        var c;
                        if (t.isTrueView() ? c = "trueview-before" : t.isVIPAd() ? c = "vip" : t.isOriginalRoll() ? c = "origin" : e.isRoll() ? c = "normal" : e.isRollLike() && (c = "rolllike"),
                        s.trySetOptions({
                            theme: c,
                            ad: t
                        }),
                        t.isTrueView())
                            e.log.debug("trueview", i.only(t, "duration skipTime impressionTime"));
                        else if (t.isVIPAd()) {
                            var u = t.creative.creativeObject.vipTitle;
                            e.log.debug("vip", u),
                            u ? s.$adContainer.find(".tp_vip-text").text(u) : s.$adContainer.find(".tp_vip-show").hide()
                        } else
                            t.isOriginalRoll() && e.log.debug("original roll");
                        a.bottom = s.getControlsHeight() + 10,
                        a.left = 25
                    }
                    t.hasDspIcon() && t.putIcon(t.dspIcon, a),
                    1 == t.targetedAd && (e.log.debug("precise ad and add icon"),
                    t.putIcon("http://pic9.qiyipic.com/common/20161221/privacy.png", a).then(function(e) {
                        o(e).on("click", function() {
                            p.open("http://www.iqiyi.com/common/secret.html")
                        })
                    })),
                    1 / 0 != e.ad.duration && e.updateCountdown()
                }
            }
            ,
            E.updateCountdown = function() {
                var e = this
                  , t = e.ad;
                e.onFirstPlaying();
                var n, r = t.slot.ads;
                if (r.length <= 1)
                    n = t.remain,
                    e.log.debug("countdown", t.remain + "/" + t.duration);
                else {
                    var o = i.slice(r, t.index() + 1);
                    n = t.remain + l(o),
                    e.log.debug("countdown", t.remain + "/" + t.duration, n + "/" + e.slotDuration)
                }
                if (n < 0)
                    return e.log.debug("countdown < 0 不应该发生"),
                    void t.abort();
                if (isNaN(n) ? e.log.debug("countdown NaN") : t.isRoll() && e.video.updateCountdown(n),
                t.isTrueView()) {
                    var a = t.duration - t.remain;
                    a >= t.impressionTime && e.ad.emit("trueview");
                    var s = i.get(e, "video.options.theme");
                    if (i.includes(s, "before")) {
                        var c = t.skipTime - a;
                        c <= 0 ? (e.log.debug("trueview can skip now"),
                        e.video.trySetOptions({
                            theme: "trueview-after",
                            ad: t
                        }),
                        e.video.updateCountdown(n)) : (e.log.debug("trueview countdown", c + "/" + t.skipTime),
                        e.video.updateTrueViewCountdown(c))
                    }
                }
            }
            ,
            E.getDuration = function() {
                var e = this
                  , t = e.ad
                  , n = e.creativeObject.duration;
                return n || (n = e.isViewPoint() ? 10 : t.isPage() || e.isToolbar() ? 1 / 0 : t.isPause() ? 1 / 0 : NaN),
                n && n != 1 / 0 && (n = parseInt(n)),
                n
            }
            ,
            E.initProgress = function() {
                var e = this
                  , t = e.ad
                  , n = [];
                (e.isRollLike() || e.isRoll()) && (n = [{
                    position: .25,
                    event: "1q"
                }, {
                    position: .5,
                    event: "mid"
                }, {
                    position: .75,
                    event: "3q"
                }, {
                    position: 1,
                    event: "sp"
                }]);
                var r = i.once(function() {
                    e.timer && e.timer.stop(),
                    e.timer = null,
                    i.remove(n, function(e) {
                        return w.send(t, e.event),
                        t.emit("pingback", {
                            subtype: e.event
                        }),
                        !0
                    });
                    var r = e.getActualVideoLeftDuration();
                    r > 0 && r < 1 ? setTimeout(function() {
                        e.ad.emit("complete", {
                            type: "timer-complete"
                        })
                    }, 1e3) : e.ad.emit("complete", {
                        type: "timer-complete"
                    })
                })
                  , o = e.getDuration();
                if (o > 0 && 1 / 0 != o) {
                    var a = e.timer = new m(1e3,o);
                    a.on("timer", function() {
                        t.remain = t.duration - a.currentCount,
                        e.updateCountdown();
                        var r = t.getParentByName("view");
                        r && t.isRoll() && r.adPlayedDurationInView++,
                        i.remove(n, function(n) {
                            var i = Math.round(t.duration * n.position);
                            if (a.currentCount == i)
                                return e.log.debug("match quartile", n.event, a.currentCount),
                                w.send(t, n.event),
                                t.emit("pingback", {
                                    subtype: n.event
                                }),
                                !0
                        })
                    }),
                    a.on("timerComplete", r),
                    a.reset(),
                    a.start(),
                    e.isOverlay() && (e.log.debug("hover reset timer"),
                    e.$adzone.on("mouseenter", function() {
                        var t = 5;
                        e.log.debug("mouse enter reset timer to " + t),
                        a.repeatCount = t,
                        a.reset()
                    }),
                    e.$adzone.on("mouseleave", function() {
                        "paused" != e.ad.state && (e.log.debug("mouse leave reset timer"),
                        a.start())
                    }))
                }
                e.isRoll() && (t.on("video-playing", function() {
                    e.timer && !e.timer.running && e.resume()
                }),
                t.on("video-ended", function() {
                    r()
                }))
            }
            ,
            E.loadRollToVideo = function() {
                var e = this;
                if (e.isRoll()) {
                    var t = e.ad
                      , n = e.creativeUrl
                      , i = e.video;
                    t.once("video-waiting", function() {
                        i.paused() || e.hasPlaying || e.waitingTimer && e.waitingTimer.start()
                    });
                    var r = function() {
                        e.waitingTimer && e.waitingTimer.reset(),
                        t.canPlayNow() ? (e.onFirstPlaying(),
                        t.off("video-playing", r)) : e.log.debug("invalid playing")
                    };
                    t.on("video-playing", r);
                    var o = {
                        file: n,
                        id: t.id,
                        offset: parseInt(t.slot.startTime),
                        videoEventId: t.getVal("videoEventId")
                    };
                    e.log.debug("video load", o, o.videoEventId),
                    i.load(o)
                }
            }
            ,
            E.tryAddCloseButton = function() {
                var e = this;
                if (e.ad.isPause() || e.isCornerSign() || e.isOverlay() || e.isViewPoint() || e.creativeObject.isCloseable) {
                    var t;
                    t = o(e.isViewPoint() ? '<span class="video_buy-close"></span>' : '<span class="cupid-close"></span>'),
                    t.on("click", function() {
                        e.log.debug("click close"),
                        e.ad.abort();
                        var t = e.ad.getParentByName("view");
                        return t && t.schedule && (e.isOverlay() ? t.schedule.ban({
                            cuepointType: y.overlay
                        }) : e.isViewPoint() && (T.sendStatistics(e.ad, "close", "viewPointTips"),
                        t.schedule.ban({
                            cuepointType: y.viewPoint,
                            startTime: e.ad.slot.startTime
                        }))),
                        !1
                    }),
                    e.log.debug("add close button"),
                    e.$adzone.append(t)
                }
            }
            ,
            E.tryAddAdBadge = function() {
                var e, t = this, n = !1;
                t.isCommonOverlay() ? (t.creativeObject.needAdBadge && (n = !0),
                e = {
                    position: "bottom-left"
                }) : 0 != t.creativeObject.needAdBadge && (n = !0),
                (t.isRollLike() || t.isRoll()) && (n = !1),
                t.isRelatedApp() && (n = !1),
                n && (t.log.debug("add ad badge"),
                p.addAdBadge(t.$adzone, e))
            }
            ,
            E.onAdPlay = function() {
                var e = this;
                e.isRollLike() && e.video.disableVideo()
            }
            ,
            E.play = function() {
                var e = this;
                return e.isSwfRoll() ? e.loadByBridge().then(function() {
                    return e._play()
                }) : e._play()
            }
            ,
            E.renderRelatedApp = function() {
                function e() {
                    var e = t.$adzone.parent();
                    if (e[0]) {
                        var n = e.css("visibility");
                        "hidden" != n && (t.log.debug("true visible"),
                        t.onFirstPlaying(),
                        t.checkTimer && t.checkTimer.stop())
                    }
                }
                var t = this
                  , r = i.extend({}, t.creativeObject);
                r.action = "下载";
                var a = parseInt(r.gameType, 10);
                i.includes([1, 4], a) && (r.action = "开始游戏");
                var s = r.clickThrough = t.ad.getUseableClickThrough();
                if (s) {
                    if (r.qrcode = "http://qrcode.qiyipic.com/qrcoder/?" + I.stringify({
                        data: s,
                        salt: C("35f4223bb8f6c8638dc91d94e9b16f5" + encodeURIComponent(s)),
                        width: 100
                    }),
                    i.includes([2, 3], a)) {
                        t.log.debug("添加弹出浮层");
                        var c = b(n(77), r)
                          , u = k(c, {
                            style: "border"
                        });
                        setTimeout(function() {
                            u.attach(t.$adzone.children())
                        })
                    }
                } else
                    r.clickThrough = "javascript:;";
                var l = b(n(78), r)
                  , d = o(l);
                t.tryStopLastAdByAdZone(),
                t.$adzone.empty().append(d),
                t.checkTimer = m.interval(e, 3e3),
                e()
            }
            ,
            E.tryStopLastAdByAdZone = function() {
                var e = this;
                if (e.$adzone) {
                    var t = e.$adzone.data("adId");
                    if (t && t != e.ad.id) {
                        var n;
                        if (e.ad.isExternal)
                            n = e.ad.externalAdMap;
                        else {
                            var i = e.ad.getParentByName("sdk");
                            i && (n = i.adMap)
                        }
                        if (n) {
                            var r = n[t];
                            r && r.emit("complete", {
                                type: "adzone-covered"
                            })
                        }
                    }
                }
            }
            ,
            E._play = function() {
                var e = this;
                return new r(function(t, r) {
                    if (e.log.debug("play"),
                    e.isEnded())
                        return r("ended");
                    if (e.isRoll())
                        return t();
                    if (e.isRollLike() && (e.video.disableVideo(),
                    e.video.setCurrentAd(e.ad)),
                    e.bridge)
                        try {
                            e.bridge.play()
                        } catch (a) {
                            r(a)
                        }
                    e.ad.isPage() || e.$adzone.css({
                        position: "absolute"
                    });
                    var s;
                    if (e.isViewPoint()) {
                        s = i.extend({}, x.resource, e.creativeObject),
                        i.extend(s, {
                            brand: p.limitText(s.brand, 7),
                            promotion: p.limitText(s.promotion, 11)
                        }),
                        s.discountedPriceText = p.getPriceText(s.discountedPrice),
                        s.detailUrl = s.detailUrl || "javascript:;";
                        var u = o(b(n(79), s));
                        e.$adzone.empty().append(u)
                    } else
                        e.isRelatedApp() && e.renderRelatedApp();
                    e.isRollLike() && e.$adzone.css({
                        "z-index": "3000"
                    }),
                    e.ad.isPause() && (e.creativeObject.isSuperPause || e.$adzone.css({
                        "box-shadow": "#000 0px 0px 1.4rem"
                    })),
                    e.putOnDocument(),
                    p.addStyle();
                    var l = {
                        adId: e.ad.id,
                        templateType: e.ad.creative.templateType
                    };
                    e.$adzone.data(l),
                    e.tryAddCloseButton(),
                    e.tryAddAdBadge(),
                    e.$adzone.on("click", function(t) {
                        var n = t.target;
                        if (!e.bridge)
                            if (e.isViewPoint()) {
                                var i = "detial-btn" == o(n).attr("class");
                                if (i)
                                    return T.sendStatistics(e.ad, "click", "viewPointTipsDetails"),
                                    e.ad.emit("clickAndOpen", n),
                                    !1;
                                e.video.exitFullscreen();
                                var r = e.ad;
                                p.notifyPage("expandAd", {
                                    startTime: r.slot.startTime,
                                    templateType: r.creative.templateType,
                                    adUid: r.id,
                                    adZoneId: r.slot.adZoneId,
                                    videoEventId: r.getVal("videoEventId")
                                }),
                                T.sendStatistics(e.ad, "click", "viewPointTips")
                            } else
                                e.ad.emit("clickAndOpen");
                        if (e.ad.isPage())
                            return !1
                    }),
                    p.setCursor(e.$adzone, e.ad.clickThrough),
                    o(e.creativeElement).css({
                        width: "100%",
                        height: "100%",
                        visibility: ""
                    }),
                    c(e.$adzone),
                    e.$adContainer && c(e.$adContainer),
                    e.resize(!0),
                    i.includes(["viewPoint", "image", "swf", "html", "video"], e.renderType) && (e.isRelatedApp() || e.onFirstPlaying()),
                    t()
                }
                )
            }
            ,
            E.resume = function() {
                var e = this;
                return e.log.debug("resume"),
                e.timer && e.timer.start(),
                e.midrollTip && e.midrollTip.start(),
                r.resolve()
            }
            ,
            E.pause = function() {
                var e = this;
                e.log.debug("pause"),
                e.timer && e.timer.stop(),
                e.waitingTimer && e.waitingTimer.stop(),
                e.midrollTip && e.midrollTip.stop()
            }
            ,
            E.getActualVideoLeftDuration = function() {
                var e = this.video
                  , t = 0;
                return e && (t = e.duration() - e.currentTime()),
                t
            }
            ,
            E.stop = function(e) {
                var t = this;
                e = e || {},
                t.log.debug("stop", e),
                t.timer && t.timer.stop(),
                t.timer = null,
                t.waitingTimer && t.waitingTimer.stop(),
                t.waitingTimer = null,
                t.checkTimer && t.checkTimer.stop(),
                t.checkTimer = null,
                t.isStoped = !0,
                "left-to-right" == t.effect.direction ? t.$adzone.animate({
                    left: 0 - t.size.computedWidth + "px"
                }, t.effect.duration, "swing", function() {
                    t.destroyAdzone()
                }) : t.destroyAdzone(),
                t.isRoll() && e.abort && t.ad == t.video.getCurrentAd() && (t.log.debug("force abort video"),
                t.video.abort()),
                (t.isRollLike() || t.isRoll()) && t.video && (t.video.getCurrentAd() == t.ad && t.video.trySetOptions(),
                t.isRollLike() && (t.video.removeCurrentAd(),
                t.video.enableVideo())),
                t.midrollTip && t.midrollTip.destroy()
            }
            ,
            E.destroyAdzone = function() {
                var e = this;
                e.isRoll() || (e.ad.isPage() ? e.$adzone.off().empty() : e.$adzone.remove().off().empty()),
                e.$adzone.removeData()
            }
            ,
            E.reset = function() {
                var e = this;
                e.isStoped = !1,
                e.hasPlaying = !1
            }
            ,
            E.resize = function(e) {
                var t = this;
                if (!t.isEnded() && !t.ad.isPage()) {
                    var n = t.size
                      , r = t.creativeObject;
                    if (t.video && (n.videoWidth = t.$video.width(),
                    n.videoHeight = t.$video.height()),
                    n.creativeWidth = r.width,
                    n.creativeHeight = r.height,
                    t.isOverlay()) {
                        var o = i.split(r.dpi, "*");
                        n.creativeWidth = n.creativeWidth || o[0],
                        n.creativeHeight = n.creativeHeight || o[1]
                    }
                    n.creativeWidth = n.creativeWidth || t.size.creativeRawWidth || 300,
                    n.creativeHeight = n.creativeHeight || t.size.creativeRawHeight || 250;
                    var a = r.width == t.size.creativeRawWidth && r.height == t.size.creativeRawHeight;
                    if (a || t.log.debug("实际尺寸与填写尺寸不同"),
                    t.isRatioFixed) {
                        var s = [600, 500];
                        t.isOverlay() ? s = [640, 100] : t.isCornerSign() ? s = [180, 150] : t.isPause() && (t.canExpand = !1,
                        s = [600, 500]),
                        t.isOverlay() || t.isCornerSign() || t.isPause() ? (n.boxWidth = r.maxWidth || s[0],
                        n.boxHeight = r.maxHeight || s[1]) : t.isCommonOverlay() ? (n.boxWidth = n.videoWidth * r.maxWidthScale,
                        n.boxHeight = n.videoHeight * r.maxHeightScale) : t.isCommonPause() ? (n.boxWidth = n.videoWidth * r.widthScale,
                        n.boxHeight = n.videoHeight * r.heightScale) : t.isRollLike() ? (n.boxWidth = n.videoWidth,
                        n.boxHeight = n.videoHeight) : (n.boxWidth = r.width,
                        n.boxHeight = r.height),
                        n.boxWidth = n.boxWidth || s[0],
                        n.boxHeight = n.boxHeight || s[1],
                        n.boxWidth = Math.min(n.boxWidth, n.videoWidth),
                        n.boxHeight = Math.min(n.boxHeight, n.videoHeight);
                        var c = p.getScalingRange({
                            width: n.creativeWidth,
                            height: n.creativeHeight
                        }, {
                            width: n.boxWidth,
                            height: n.boxHeight
                        });
                        c.max && (t.canExpand ? n.scale = c.max : n.scale = Math.min(c.max, 1),
                        n.computedWidth = n.creativeWidth * n.scale,
                        n.computedHeight = n.creativeHeight * n.scale)
                    } else
                        t.isToolbar() && (n.displayWidth = 95,
                        n.displayHeight = 235),
                        t.isCrazy() && (n.displayWidth = t.getCrazyWidth(),
                        n.displayHeight = n.videoHeight),
                        t.isViewPoint() && (n.displayWidth = 298,
                        n.displayHeight = 92),
                        n.displayWidth = n.displayWidth || n.creativeWidth,
                        n.displayHeight = n.displayHeight || n.creativeHeight,
                        n.computedWidth = n.displayWidth,
                        n.computedHeight = n.displayHeight;
                    if (t.isViewPoint() || n.computedWidth && n.computedHeight) {
                        t.setPosition();
                        var u = n.x;
                        e && "left-to-right" == t.effect.direction && (u = 0 - n.computedWidth),
                        t.$adzone.css({
                            width: n.computedWidth,
                            height: n.computedHeight,
                            top: n.y,
                            left: u
                        }),
                        "move" == t.effect.type && t.$adzone.animate({
                            left: n.x + "px"
                        }, t.effect.duration, "swing")
                    } else
                        t.log.debug("fail to resize");
                    t.log.debug("resize", n)
                }
            }
            ,
            E.setPosition = function() {
                var e = this
                  , t = e.size
                  , n = e.creativeObject
                  , i = 0
                  , r = 0
                  , a = 10;
                if (e.ad.isPause())
                    i = (t.videoWidth - t.computedWidth) / 2,
                    r = (t.videoHeight - t.computedHeight) / 2;
                else if (e.isCommonOverlay())
                    i = t.videoWidth * n.xScale - t.computedWidth / 2,
                    r = t.videoHeight * n.yScale - t.computedHeight / 2;
                else if (e.isOverlay())
                    i = (t.videoWidth - t.computedWidth) / 2,
                    r = t.videoHeight - t.computedHeight - a,
                    "top" == n.position && (r = a);
                else if (e.isCornerSign())
                    r = t.videoHeight - t.computedHeight - a,
                    i = a,
                    "right" == n.showPosition && (i = t.videoWidth - t.computedWidth - a);
                else if (e.ad.isToolbar())
                    i = 0,
                    r = (t.videoHeight - t.computedHeight) / 2;
                else if (e.isViewPoint())
                    r = t.videoHeight - 70 - P.height,
                    i = 40,
                    "right" == n.position && (i = t.videoWidth - i - P.width);
                else if (e.isRollLike())
                    if (e.isOutVideo) {
                        var s = e.$video.offset()
                          , c = o(document.body).width();
                        i = (c - t.computedWidth) / 2,
                        r = s.top + 1
                    } else
                        i = (t.videoWidth - t.computedWidth) / 2,
                        r = (t.videoHeight - t.computedHeight) / 2;
                t.x = i,
                t.y = r
            }
            ,
            E.isEnded = function() {
                return this.isStoped
            }
            ,
            E.getCrazyWidth = function() {
                var e = this
                  , t = e.creativeObject.width
                  , n = o(document.body).width()
                  , r = i.get(p.getQiyiResponseLevel(), "responseLevel") || 0
                  , a = A[r];
                return a > t && (t = a),
                t > n && (t = n),
                t
            }
        }
        ).call(t, n(5), n(23), n(22))
    }
    , function(e, t, n) {
        (function(i, r, o) {
            function a(e) {
                var t = this;
                if (s.call(t),
                t.ad = e,
                t.creativeObject = e.creative.creativeObject,
                t.log = u.getLogger(e.creative.templateType + ":" + (e.orderItemId || e.id)),
                t.ad.isPage() && !t.isDefinitionSwitching()) {
                    var n = t.ad.getVal("adZoneId")
                      , r = document.getElementById(n);
                    if (!r)
                        return t.ad.emit("error", new l("fail to find adzone",{
                            adZoneId: n
                        },d.NO_ADZONE)),
                        void t.ad.abort();
                    t.$adzone = i(r)
                } else
                    t.$adzone = i("<div>");
                e.$adzone = t.$adzone
            }
            var s = n(29)
              , c = n(36)
              , u = n(17).Log
              , l = n(70)
              , d = n(71);
            e.exports = t = a,
            r.inherits(a, s);
            var p = a.prototype;
            p.load = function() {
                return o.resolve()
            }
            ,
            p.emitCreativeError = function(e, t) {
                var n = this.ad;
                "timeout" == e ? n.emit("error", new l("creative timeout",{
                    creativeUrl: t
                },d.CREATIVE_TIMEOUT)) : n.emit("error", new l("creative http error",{
                    creativeUrl: t
                },d.CREATIVE_HTTP_ERROR))
            }
            ,
            p.loadImage = function(e, t) {
                var n = this;
                return t = t || 3e4,
                c.loadImage(e, t).caught(function(t) {
                    return "timeout" === t ? n.emitCreativeError("timeout", e) : n.emitCreativeError("error", e),
                    o.reject(t)
                })
            }
            ,
            p.getDuration = function() {
                return 1 / 0
            }
            ,
            p.onFirstPlaying = function() {
                var e = this;
                e.hasPlaying || (e.hasPlaying = !0,
                e.ad.isPage() && e.$adzone && e.$adzone.show().css({
                    overflow: "hidden"
                }),
                e.ad.emit("impression"))
            }
            ,
            p.play = function() {}
            ,
            p.resume = function() {}
            ,
            p.abort = function() {}
            ,
            p.stop = function() {}
            ,
            p.pause = function() {
                this.ad.paused = !0
            }
            ,
            p.resize = function() {}
            ,
            p.getType = function() {
                return this.ad.creative.templateType
            }
            ,
            p.isRoll = function() {
                return "roll" == this.getType()
            }
            ,
            p.isPause = function() {
                return "pause" == this.getType()
            }
            ,
            p.isCommonPause = function() {
                return "common_pause" == this.getType()
            }
            ,
            p.isCornerSign = function() {
                return "cornerSign" == this.getType()
            }
            ,
            p.isOverlay = function() {
                return "overlay" == this.getType()
            }
            ,
            p.isCommonOverlay = function() {
                return "common_overlay" == this.getType()
            }
            ,
            p.isRelatedApp = function() {
                return "relatedapp" == this.getType()
            }
            ,
            p.isToolbar = function() {
                return "toolbar" == this.getType()
            }
            ,
            p.isViewPoint = function() {
                return "viewPoint" == this.getType()
            }
            ,
            p.isCrazy = function() {
                return "crazy" == this.getType()
            }
            ,
            p.isTranslator = function() {
                return "translator" == this.getType() || "translator" == this.ad.creative.oldTemplateType
            }
            ,
            p.isSwfRoll = function() {
                return "swfroll" == this.getType()
            }
            ,
            p.isImageRoll = function() {
                return "imageroll" == this.getType()
            }
            ,
            p.isDefinitionSwitching = function() {
                return "definition_switching" == this.getType()
            }
        }
        ).call(t, n(22), n(5), n(23))
    }
    , function(e, t, n) {
        (function(n) {
            function i(e, t, n) {
                var r = this;
                return r instanceof i ? (Error.call(r, e),
                r.message = e,
                r.data = t,
                void (r.code = n)) : new i(e,t,n)
            }
            e.exports = t = i,
            n.inherits(i, Error)
        }
        ).call(t, n(5))
    }
    , function(e, t, n) {
        var i = n(72);
        e.exports = t = new i(["NO_ADZONE", "CREATIVE_HTTP_ERROR", "CREATIVE_TIMEOUT", "BAD_CREATIVE_OBJECT", "UNSUPPORTED_CREATIVE_TYPE", "UNKNOWN_RENDER_TYPE"])
    }
    , function(e, t, n) {
        (function(n) {
            function i(e) {
                var t = this;
                t.index = 0,
                r.array(e) ? n.each(e, function(e) {
                    t.set(e, t.index),
                    t.index++
                }) : n.forIn(e, function(e, n) {
                    t.set(n, e)
                })
            }
            var r = n.is;
            e.exports = t = i;
            var o = i.prototype;
            o.set = function(e, t) {
                var n = this;
                n[e] = {
                    key: e,
                    value: t
                }
            }
        }
        ).call(t, n(5))
    }
    , function(e, t, n) {
        function i() {
            return /msie/i.test(navigator.userAgent) || /Trident/i.test(navigator.userAgent)
        }
        var r = n(5)
          , o = n(74).extend
          , a = n(35)
          , s = function(e, t) {
            t = t || {};
            var n = {
                id: null,
                height: 1,
                width: 1,
                styles: {},
                properties: {},
                params: {
                    quality: "high",
                    allowScriptAccess: "always",
                    wMode: "transparent",
                    align: "middle",
                    bgcolor: "#000000",
                    swLiveConnect: "true",
                    loop: "true",
                    play: "true",
                    DeviceFont: "false",
                    allowFullScreen: "true",
                    menu: "true"
                },
                vars: {}
            }
              , s = t.id || "swf_" + r.now().toString(36)
              , c = o(n.params, t.params || {})
              , u = o(n.vars, t.vars || {})
              , l = o(n.styles, t.styles || {})
              , d = function() {
                return o(n.properties, {
                    height: n.height,
                    width: n.width
                }, function(e, t) {
                    if (t)
                        return !0
                }),
                o(n.properties, t.properties, function(e, t) {
                    if (t)
                        return !0
                }),
                o(n.properties, {
                    height: t.height,
                    width: t.width
                }, function(e, t) {
                    if (t)
                        return !0
                })
            }();
            c.flashVars = a.stringify(u),
            i() && (d.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            c.movie = e),
            d.type = "application/x-shockwave-flash",
            d.data = e;
            var p = [];
            p.push('<object id="', s, '"');
            for (var f in d)
                p.push(" ", f, '="', d[f], '"');
            p.push(' style="');
            for (var h in l)
                p.push(h, ":", l[h], ";");
            p.push('"'),
            p.push(">");
            for (var v in c)
                c[v] && p.push('<param name="', v, '" value="', c[v], '" />');
            return p.push("</object>"),
            p.join("")
        };
        t.create = s
    }
    , function(e, t) {
        var n = function(e, t, n) {
            n = n || function() {
                return !0
            }
            ;
            for (var i in t)
                t.hasOwnProperty(i) && n(e[i], t[i]) && (e[i] = t[i]);
            return e
        }
          , i = function(e, t, n) {
            var i, r, o;
            if ("function" == typeof t && e)
                if (r = "number" == typeof e.length ? e.length : e.byteLength,
                "number" == typeof r) {
                    if ("[object Function]" === Object.prototype.toString.call(e))
                        return e;
                    for (i = 0; i < r; i++)
                        o = e[i],
                        void 0 === o && (o = e.charAt && e.charAt(i)),
                        t.call(n || null, o, i, e)
                } else if ("number" == typeof e)
                    for (i = 0; i < e; i++)
                        t.call(n || null, i, i, i);
                else if ("object" == typeof e)
                    for (i in e)
                        e.hasOwnProperty(i) && t.call(n || null, e[i], i, e);
            return e
        };
        t.type = function() {
            var e = {}
              , n = [, "HTMLElement", "Attribute", "Text", , , , , "Comment", "Document", , "DocumentFragment"]
              , r = "Array Boolean Date Error Function Number RegExp String"
              , o = {
                object: 1,
                "function": "1"
            }
              , a = e.toString;
            return i(r.split(" "), function(n) {
                e["[object " + n + "]"] = n.toLowerCase(),
                t["is" + n] = function(e) {
                    return CupidAdSdk._Lib.type(e) == n.toLowerCase()
                }
            }),
            function(t) {
                var i = typeof t;
                return o[i] ? null == t ? "null" : t._type_ || e[a.call(t)] || n[t.nodeType] || (t == t.window ? "Window" : "") || "object" : i
            }
        }(),
        t.forEach = i,
        t.extend = n,
        t.isArray = Array.isArray || function(e) {
            return "[object Array]" == Object.prototype.toString.call(e)
        }
    }
    , function(e, t, n) {
        (function(i) {
            function r(e, t) {
                return this instanceof r ? (s || (s = i("body")),
                this.opt = t || {},
                void (this.val = e)) : new r(e,t)
            }
            function o(e) {
                return a(e, {
                    name: t.namespace
                })
            }
            var a = n(76);
            e.exports = t = r;
            var s, c = {
                left: 0,
                top: 0,
                visibility: "hidden",
                display: "block"
            };
            t.namespace = "ares-tip";
            var u = o('<div class="$name"><div class="$name-head"><div class="$name-arrow"></div></div><div class="$name-body"></div></div>')
              , l = r.prototype;
            l.init = function() {
                var e = this;
                if (!e.inited) {
                    e.inited = !0;
                    var n = e.opt.style || "basic"
                      , r = i(u).find(o(".$name-body")).append(i(e.val)).end().addClass(t.namespace + "-" + n).on("mouseenter click", function() {
                        clearTimeout(e.timer)
                    }).on("mouseleave", function() {
                        e.hide(200)
                    });
                    s.append(r),
                    r.css(c),
                    e.tip = r
                }
            }
            ,
            l.hide = function(e) {
                var t = this;
                return e ? void (t.opt.stay || (t.timer = setTimeout(function() {
                    t.hide()
                }, e))) : (t.tip.css(c),
                void (t.curr = null))
            }
            ,
            l.attach = function(e) {
                var t = this;
                i(e).on("mouseenter", function() {
                    t.show(i(this)),
                    clearTimeout(t.timer)
                }).on("mouseleave", function() {
                    t.hide(200)
                })
            }
            ,
            l.show = function(e) {
                if (this.init(),
                this.curr) {
                    if (this.curr == e)
                        return;
                    this.hide()
                }
                this.curr = e;
                var e = i(e).eq(0);
                if (this.target = e,
                e[0]) {
                    var t = this.tip
                      , n = {
                        offset: e.offset(),
                        width: e.outerWidth(),
                        height: e.outerHeight()
                    }
                      , r = {
                        rawOffset: t.offset(),
                        width: t.outerWidth(),
                        height: t.outerHeight()
                    }
                      , o = {
                        top: n.offset.top + n.height - r.rawOffset.top,
                        left: n.offset.left + n.width / 2 - r.width / 2 - r.rawOffset.left
                    }
                      , a = this.opt.offsetHook;
                    a && (o = a.call(this, o)),
                    t.css({
                        left: o.left + "px",
                        top: o.top + "px",
                        visibility: "visible"
                    })
                }
            }
        }
        ).call(t, n(22))
    }
    , function(e, t) {
        function n(e, t) {
            return t = t || {},
            e.replace(/\$(\w+)/g, "${$1}").replace(/\${(\w+)}/g, function(e, n) {
                return t[n] || ""
            })
        }
        e.exports = t = n
    }
    , function(e, t) {
        e.exports = '<div class=app-popup> <div class="app-popup-left app-section" style=float:left> <p class="app-popup-text1 app-mb10">下载方式一：</p> <div class=app-download-box> <a href={clickThrough} target=_blank rel="external nofollow" class="reverse app-download">下载安装包</a> </div> <p class="app-popup-text1 app-mb10">下载方式三：</p> <p class=app-small style=margin-bottom:9px>在手机中输入以下地址即可安装</p> <p class=app-highlight title={shortLink}>{shortLink}</p> </div> <div class="app-popup-right app-section app-right" style=margin-left:200px> <p class="app-popup-text1 app-mb10">下载方式二：</p> <div class=app-qrcode> <img src={qrcode}> <p>二维码下载</p> </div> </div> <div class=app-small style=float:right;margin-top:20px><a href=http://store.iqiyi.com target=_blank rel="external nofollow" style=color:inherit>去游戏中心&gt;&gt;</a></div> </div> '
    }
    , function(e, t) {
        e.exports = '<a class=app-wrapper rel="external nofollow"> <div class=app-box> <img src={icon}> <div class="app-btn reverse">{action}</div> <div class=app-info> <div class=app-title>{name}</div> <div class=app-description>{description}</div> </div> </div> </a> '
    }
    , function(e, t) {
        e.exports = "<div class=video_ad-buy> <div class=buy-pic> <a href=javascript:;> <img src={imgUrl} alt={promotion} width=90 height=90> </a> </div> <div class=buy-txt> <h3>{promotion}</h3> <div class=buy-detial> <div class=detial-price>{discountedPriceText}</div> <a href={detailUrl} class=detial-btn>{查看详情}</a> </div> </div> </div> "
    }
    , function(e, t, n) {
        (function(t, i, r) {
            function o(e) {
                var t = this;
                a.call(t, e)
            }
            var a = n(69)
              , s = n(41).template
              , c = n(36);
            e.exports = o,
            t.inherits(o, a);
            var u = o.prototype;
            u.load = function() {
                var e = this;
                return e.ad.emit("creativeLoad"),
                e.loadImage(e.creativeObject.url)
            }
            ,
            u.play = function() {
                var e = this
                  , t = e.creativeObject
                  , n = i("<div>");
                e.ad.clickThrough && (n = i("<a>"),
                n.attr({
                    href: e.ad.clickThrough,
                    target: "_blank"
                })),
                n.css({
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    display: "block",
                    background: s("url({url}) 0pt 0pt repeat scroll transparent", {
                        url: t.url
                    })
                }),
                0 != t.needAdBadge && c.addAdBadge(n);
                var o = e.$adzone;
                return o.empty().append(n),
                n.on("click", function(t) {
                    return e.ad.emit("clickAndOpen"),
                    !1
                }),
                r.resolve().then(function() {
                    return e.onFirstPlaying()
                })
            }
        }
        ).call(t, n(5), n(22), n(23))
    }
    , function(e, t, n) {
        (function(t, i) {
            function r(e) {
                var t = this;
                o.call(t, e)
            }
            var o = n(69)
              , a = n(82)
              , s = n(73)
              , c = n(34)
              , u = n(36)
              , l = n(40);
            e.exports = r,
            t.inherits(r, o);
            var d = r.prototype;
            d.load = function() {}
            ,
            d.play = function() {
                var e = this
                  , n = e.ad
                  , r = u.normalizeProtocol(n.creative.creativeTemplate) + "?_=" + t.now()
                  , o = n.slot
                  , c = o.adZoneId
                  , d = "flash" + c
                  , p = n.getParentByName("view")
                  , f = t.get(p, "schedule.allAdBreaks")
                  , h = t.find(f, function(e) {
                    return e.adZoneId == c
                })
                  , v = t.get(h, "adZoneStyle") || {}
                  , m = v.width
                  , g = m
                  , y = v.height;
                "clip-w-maintain-h" == v.appearance && (g = "100%");
                var b = {
                    id: n.creative.creativeId,
                    did: c,
                    cap_div: d,
                    t: t.now(),
                    region: a.stringify(v),
                    appearance: v.appearance,
                    creative: a.stringify(t.extend({
                        locale: l.locale
                    }, n.creative.rawCreativeObject)),
                    width: m,
                    height: y
                };
                e.$adzone.css({
                    height: y + "px",
                    display: "block"
                });
                var x = {
                    id: d,
                    width: g,
                    height: y,
                    params: {
                        bgcolor: "#ffffff"
                    },
                    vars: b
                };
                e.log.debug("create flash", r, x);
                var w = s.create(r, x);
                e.$adzone.html(w);
                var T = document.getElementById(d);
                return T ? e.bindFlashListener(T) : e.log.error("error to get flash object", d),
                i.resolve()
            }
            ,
            d.bindFlashListener = function(e) {
                var t = this;
                e.onPageAdLoaded = function(n) {
                    t.log.debug("onPageAdLoaded", n);
                    var i = t.ad.clickThrough;
                    i && (t.log.debug("setClickThrough", i),
                    e["setClickThrough" + t.ad.slot.adZoneId](i))
                }
                ,
                e.onPageAdClicked = function(e) {
                    t.log.debug("onPageAdClicked", e),
                    t.ad.emit("clickAndOpen")
                }
                ,
                e.onPageAdError = function(e) {
                    t.log.debug("onPageAdError", e),
                    t.ad.emit("error")
                }
                ,
                e.onPageAdImpression = function(e) {
                    t.log.debug("onPageAdImpression", e),
                    t.onFirstPlaying()
                }
                ,
                e.onPageAdPb = function(e) {
                    t.log.debug("onPageAdPb", e),
                    e = e || {},
                    c.send(t.ad, e)
                }
            }
        }
        ).call(t, n(5), n(23))
    }
    , function(e, t, n) {
        var i = {}
          , r = n(74);
        t.parse = function(e) {
            return new Function("return (" + e + ")")()
        }
        ,
        i.stringify = function() {
            function e(e) {
                return /["\\\x00-\x1f]/.test(e) && (e = e.replace(/["\\\x00-\x1f]/g, function(e) {
                    var t = a[e];
                    return t ? t : (t = e.charCodeAt(),
                    "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16))
                })),
                '"' + e + '"'
            }
            function t(e) {
                var t, n, r, o = ["["], a = e.length;
                for (n = 0; n < a; n++)
                    switch (r = e[n],
                    typeof r) {
                    case "undefined":
                    case "function":
                    case "unknown":
                        break;
                    default:
                        t && o.push(","),
                        o.push(i.stringify(r)),
                        t = 1
                    }
                return o.push("]"),
                o.join("")
            }
            function n(e) {
                return e < 10 ? "0" + e : e
            }
            function o(e) {
                return '"' + e.getFullYear() + "-" + n(e.getMonth() + 1) + "-" + n(e.getDate()) + "T" + n(e.getHours()) + ":" + n(e.getMinutes()) + ":" + n(e.getSeconds()) + '"'
            }
            var a = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            };
            return function(n) {
                switch (typeof n) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(n) ? String(n) : "null";
                case "string":
                    return e(n);
                case "boolean":
                    return String(n);
                default:
                    if (null === n)
                        return "null";
                    if ("array" === r.type(n))
                        return t(n);
                    if ("date" === r.type(n))
                        return o(n);
                    var a, s, c = ["{"], u = i.stringify;
                    for (var l in n)
                        if (Object.prototype.hasOwnProperty.call(n, l))
                            switch (s = n[l],
                            typeof s) {
                            case "undefined":
                            case "unknown":
                            case "function":
                                break;
                            default:
                                a && c.push(","),
                                a = 1,
                                c.push(u(l) + ":" + u(s))
                            }
                    return c.push("}"),
                    c.join("")
                }
            }
        }(),
        t.stringify = i.stringify
    }
    , function(e, t, n) {
        (function(t, i, r) {
            function o(e) {
                var t = this;
                a.call(t, e)
            }
            var a = n(69)
              , s = n(73);
            e.exports = o,
            t.inherits(o, a);
            var c = o.prototype;
            c.load = function() {
                var e = this;
                e.ad.emit("creativeLoad")
            }
            ,
            c.play = function() {
                var e = this
                  , t = e.creativeObject;
                i.closeCrazy = function() {
                    e.$adzone.hide().empty()
                }
                ;
                var n = t.url
                  , o = {
                    width: t.width,
                    height: t.height,
                    params: {
                        bgcolor: "#000000"
                    }
                }
                  , a = s.create(n, o);
                return e.log.debug("create flash", n, o),
                e.$adzone.empty().append(a),
                r.resolve().then(function() {
                    return e.onFirstPlaying()
                })
            }
        }
        ).call(t, n(5), function() {
            return this
        }(), n(23))
    }
    , function(e, t, n) {
        (function(t, i, r) {
            function o(e) {
                var t = this;
                t.url = e.creative.creativeObject.url,
                t.urlMiddle = e.creative.creativeObject.urlMiddle,
                t.urlSmall = e.creative.creativeObject.urlSmall,
                t.isSpecial = !(!t.urlMiddle || !t.urlSmall),
                a.call(t, e)
            }
            var a = n(69)
              , s = n(36);
            e.exports = o,
            t.inherits(o, a);
            var c = o.prototype;
            c.load = function() {
                var e = this;
                e.ad.emit("creativeLoad");
                var t = e.getCreativeUrl();
                return e.loadImage(t)
            }
            ,
            c.play = function() {
                var e = this
                  , t = e.ad.creative.creativeObject
                  , n = e.getCreativeUrl();
                e.log.debug("play");
                var o = e.ad.clickThrough
                  , a = i("#adDiv");
                if (a.css({
                    width: "",
                    height: "75px",
                    margin: "0 auto"
                }),
                o && e.renderClick(),
                e.isSpecial) {
                    a.addClass("skin_topBar");
                    var c = i(".skin_focus")
                      , u = '<style type="text/css">/*响应式皮肤背景素材*/\n.qypage-1380 .skin_focus{background-image:url(' + e.url + ")}\n.qypage-1180 .skin_focus{background-image:url(" + e.urlMiddle + ")}\n.qypage-980 .skin_focus{background-image:url(" + e.urlSmall + ")}\n</style>"
                      , l = s.normalizeProtocol("http://static.qiyi.com/css/common/skinBg.css")
                      , d = '<link type="text/css" rel="stylesheet" href="' + l + '">';
                    c.prepend(u),
                    c.prepend(d)
                } else
                    a.css({
                        background: 'url("' + n + '") no-repeat scroll center 0pt transparent'
                    });
                var p = '<img class="adClose" src="http://www.qiyipic.com/common/fix/site/ad-btn-close.png" style="position:relative;float:right;cursor:pointer" />';
                0 != t.needAdBadge && s.addAdBadge(a),
                a.append(p);
                var f = a.find(".adClose");
                f.on("click", function() {
                    e.$adzone.empty(),
                    e.isSpecial && (i("#adSkinInner").removeClass("skin_inner"),
                    i(".skin_link").empty())
                });
                var h = setInterval(function() {
                    var t = document.getElementById("adflash");
                    t ? "none" == t.style.display && (clearInterval(h),
                    e.$adzone.show()) : (clearInterval(h),
                    e.$adzone.show())
                }, 500);
                return r.resolve().then(function() {
                    return e.onFirstPlaying()
                })
            }
            ,
            c.getCreativeUrl = function() {
                var e = this
                  , t = e.url;
                if (e.isSpecial) {
                    var n = i("body");
                    n.hasClass("qypage-980") ? t = e.urlSmall : n.hasClass("qypage-1180") && (t = e.urlMiddle)
                }
                return t
            }
            ,
            c.renderClick = function() {
                var e = this
                  , t = e.ad.clickThrough
                  , n = i("#adClick");
                if (0 == n.length)
                    return void e.log.debug("fail to get #adClick");
                if (n.on("click", function() {
                    return e.ad.emit("clickAndOpen"),
                    !1
                }).attr({
                    href: t,
                    target: "_blank"
                }).css({
                    height: "75px",
                    cursor: "pointer"
                }),
                e.isSpecial) {
                    var r = i("<a>")
                      , o = i(".skin_focus");
                    o.prepend(r),
                    r.on("click", function() {
                        return e.ad.emit("clickAndOpen"),
                        !1
                    }).css({
                        height: "655px",
                        cursor: "pointer"
                    }),
                    r.addClass("skin_link")
                }
            }
        }
        ).call(t, n(5), n(22), n(23))
    }
    , function(e, t, n) {
        (function(t, i, r) {
            function o(e) {
                var t = this;
                a.call(t, e)
            }
            var a = n(69)
              , s = n(41).template
              , c = n(36);
            e.exports = o,
            t.inherits(o, a);
            var u = o.prototype;
            u.load = function() {
                var e = this;
                return e.ad.emit("creativeLoad"),
                e.loadImage(e.creativeObject.url).then(function(t) {
                    e.imageHeight = t.height,
                    e.imageWidth = t.width
                })
            }
            ,
            u.play = function() {
                var e = this
                  , t = e.creativeObject
                  , n = i("<div>");
                e.ad.clickThrough && (n = i("<a>"),
                n.attr({
                    href: e.ad.clickThrough,
                    target: "_blank"
                })),
                n.css({
                    height: e.imageHeight + "px",
                    position: "relative",
                    display: "block",
                    margin: "0 auto",
                    background: s('url("{url}") 50% 50% no-repeat', {
                        url: t.url
                    })
                }).attr({
                    href: e.ad.clickThrough || "",
                    rel: "external nofollow"
                }),
                n.width() || n.css("width", e.imageWidth + "px"),
                0 != t.needAdBadge && (e.log.debug("add ad badge"),
                c.addAdBadge(n));
                var o = e.$adzone;
                return o.empty().append(n),
                n.on("click", function(t) {
                    return e.ad.emit("clickAndOpen"),
                    !1
                }),
                r.resolve().then(function() {
                    return e.onFirstPlaying()
                })
            }
        }
        ).call(t, n(5), n(22), n(23))
    }
    , function(e, t, n) {
        (function(t, i) {
            function r(e) {
                var t = this;
                o.call(t, e)
            }
            var o = n(69);
            e.exports = r,
            t.inherits(r, o);
            var a = r.prototype;
            a.load = function() {
                var e = this
                  , t = e.ad
                  , n = t.getParentByName("view")
                  , r = t.getPlainInfo();
                return n.notifyPlayer({
                    definitionSwitchingAd: r
                }),
                i.resolve()
            }
            ,
            a.play = function() {
                return i.resolve()
            }
        }
        ).call(t, n(5), n(23))
    }
    , function(e, t, n) {
        (function(t, i) {
            function r(e) {
                var t = this;
                t.log = l.getLogger("theatre:" + e.adZoneId),
                t.sum = 8,
                t.cursor = 0,
                t.slot = e;
                var n = document.getElementById(e.adZoneId);
                n ? t.$adzone = i(n) : t.error = new Error("fail to find adzone")
            }
            function o(e, t, n) {
                var i = e.length
                  , r = t + n
                  , o = e.slice(t, r);
                if (t + n > i) {
                    r -= i;
                    var a = e.slice(0, r);
                    o = o.concat(a)
                }
                return o
            }
            var a = n(41).template
              , s = n(36)
              , c = n(70)
              , u = n(71)
              , l = n(17).Log
              , d = t.is
              , p = "bannerUrl logoUrl posterUrl".split(" ")
              , f = 170
              , h = 20
              , v = 15;
            e.exports = r,
            r.isTheatreSlot = function(e) {
                var n = t.first(e.ads);
                return !(!n || "theatre" != n.creative.templateType)
            }
            ;
            var m = r.prototype;
            m.resize = function() {
                var e = this;
                if (!e.error) {
                    var t = e.$adzone.find(".theatre-container").width();
                    e.log.debug("resize", "box width", t);
                    var n = (t - 2 * v + h - 8) / (f + h);
                    n = Math.floor(n),
                    n = Math.max(5, n),
                    n = Math.min(8, n),
                    n != e.sum && (e.sum = n,
                    e.drawItems())
                }
            }
            ,
            m.drawItems = function() {
                var e = this;
                e.log.debug("draw items"),
                e.curItems = o(e.items, e.cursor, e.sum);
                var n = t.map(e.curItems, function(e) {
                    return e.element
                });
                e.$adzone.find(".theatre-carousel-box").empty().append(i(n)),
                t.each(e.curItems, function(e) {
                    e.ad.emit("creativeLoad"),
                    e.ad.emit("impression")
                }),
                e.$adzone.find(".theatre-carousel-wrapper").css("width", f * e.sum + h * (e.sum - 1))
            }
            ,
            m.render = function() {
                function e(e) {
                    var n = i(e);
                    n.hasClass("theatre-item") || (n = n.parents(".theatre-item").eq(0));
                    var r = n.attr("href");
                    return t.find(o.items, function(e) {
                        return r == e.clickThrough
                    })
                }
                function r() {
                    i(window).on("resize", t.throttle(function() {
                        setTimeout(function() {
                            o.resize()
                        }, 300)
                    }, 1e3)),
                    f.on("mouseenter", ".theatre-item", function() {
                        var e = i(this)
                          , n = e.data("isHover");
                        if (!n) {
                            e.addClass("theatre-hover"),
                            e.data("isHover", !0),
                            o.log.debug("mouseenter");
                            var r, a, s, c = e.index();
                            c <= 4 ? (r = o.curItems.slice(0, c),
                            s = 4 - r.length,
                            a = o.curItems.slice(o.sum - s, o.sum)) : (a = o.curItems.slice(c + 1, o.sum),
                            s = 4 - a.length,
                            r = o.curItems.slice(0, s)),
                            i(t.map(r.concat(a), function(e) {
                                return e.element
                            })).addClass("theatre-no-width")
                        }
                    }).on("mouseleave", ".theatre-item", function() {
                        o.log.debug("mouseleave");
                        var e = i(this);
                        e.data("isHover", !1),
                        e.removeClass("theatre-hover"),
                        f.find(".theatre-no-width").removeClass("theatre-no-width")
                    }),
                    o.$adzone.find(".theatre-arrow").on("click", function() {
                        var e = i(this);
                        e.hasClass("theatre-arrow-right") ? (o.log.debug("arrow right"),
                        o.cursor = o.cursor + o.curItems.length,
                        o.cursor >= o.items.length && (o.cursor -= o.items.length)) : (o.log.debug("arrow left"),
                        o.cursor = o.cursor - o.curItems.length,
                        o.cursor < 0 && (o.cursor += o.items.length)),
                        o.log.debug("cursor", o.cursor),
                        o.drawItems()
                    }),
                    f.on("click", ".theatre-item", function() {
                        var t = e(this);
                        return t && t.ad.emit("clickAndOpen"),
                        !1
                    });
                    var n = i(t.map(o.items, function(e) {
                        return e.element
                    }));
                    n.find("img").one("error", function() {
                        var t = e(this);
                        if (t) {
                            var n = i(this).attr("src");
                            t.ad.emit("error", new c("creative http error",{
                                creativeUrl: n
                            },u.CREATIVE_HTTP_ERROR))
                        }
                    })
                }
                var o = this;
                if (!o.error) {
                    var l = o.slot;
                    o.log.debug("render", l),
                    o.items = t.compact(t.map(l.ads, function(e) {
                        var n = e.creative.creativeObject || {}
                          , i = t.every(p, function(e) {
                            return !d.empty(t.trim(n[e]))
                        });
                        return i ? t.extend({
                            ad: e
                        }, t.only(n, p), t.only(e, "clickThrough")) : void o.log.error("error creative object", e.format())
                    })),
                    o.items = t.shuffle(o.items),
                    o.curItems = [],
                    o.log.debug("data", o.items),
                    t.each(o.items, function(e) {
                        var t = a(n(88), e);
                        e.element = i.parseHTML(t)[0]
                    }),
                    o.$adzone.empty().html(n(89)).show().css({
                        opacity: 1
                    });
                    var f = o.$adzone.find(".theatre-carousel-box");
                    s.addStyle(),
                    r(),
                    o.resize()
                }
            }
        }
        ).call(t, n(5), n(22))
    }
    , function(e, t) {
        e.exports = '<a href={clickThrough} target=_blank class=theatre-item rel="external nofollow"> <div class=theatre-expand> <div class=theatre-left> <img src={posterUrl} class=theatre-poster> <img src={logoUrl} class=theatre-logo> </div> <div class=theatre-right><img src={bannerUrl} class=theatre-banner></div> </div> </a> '
    }
    , function(e, t) {
        e.exports = '<div class=theatre-label>推广广告</div> <div class=theatre-container style=""> <div class="theatre-arrow-left theatre-arrow"></div> <div class=theatre-carousel-wrapper> <div class=theatre-carousel-box></div> </div> <div class="theatre-arrow-right theatre-arrow"></div> </div> '
    }
    , function(e, t) {
        t.DEFINITION_SWITCHING_SHOW = 0xe8d4a512a0,
        t.CLICK = "click",
        t.IMPRESSION = "impression"
    }
    , function(e, t, n) {
        (function(i) {
            function r(e) {
                var t = this;
                l.call(t),
                t.view = e,
                t.video = e.sdk.video,
                t.midrollPoints = {},
                t.adBreaks = [],
                t.allAdBreaks = [],
                t.timerHandler = function(e) {
                    t.currentTime = Math.round(t.video.currentTime());
                    var n = c.getActionType(e);
                    if ("seeked" == e.type && (s("seeked", t.currentTime, n),
                    "controls" == n && (t.onUserSeeked(),
                    t.disableAutoChooseMidroll("用户 seek 了"))),
                    null == t.lastTime) {
                        var r = i.get(t, "midrollPoints.nextMidroll");
                        r > 0 && r < t.currentTime && t.disableAutoChooseMidroll("开播时间晚于自动中插点")
                    }
                    t.lastTime != t.currentTime && t.updateVideoTime(e)
                }
                ,
                t.running = !1
            }
            function o(e) {
                var t = [];
                return i.each(e, function(e) {
                    p.empty(e.startTimes) ? t.push(new d({
                        cuepointType: e.cuepointType,
                        adZoneId: e.adZoneId,
                        adZoneStyle: e.adZoneStyle
                    })) : i.each(e.startTimes, function(n, i) {
                        t.push(new d({
                            startTime: n,
                            cuepointType: e.cuepointType,
                            adZoneId: e.adZoneId,
                            sequenceId: i + 1,
                            adZoneStyle: e.adZoneStyle
                        }))
                    })
                }),
                t
            }
            function a(e) {
                var t = i.map(e, function(e) {
                    return e.priority
                })
                  , n = i.max(t);
                return e = i.filter(e, function(e) {
                    return n == e.priority || (e.state = "banned",
                    !1)
                })
            }
            var s = n(16)("schedule")
              , c = n(36)
              , u = n(32)
              , l = n(29)
              , d = n(92)
              , p = i.is;
            e.exports = t = r,
            i.inherits(r, l);
            var f = r.prototype;
            f.setPolicySlots = function(e) {
                var t = this;
                t.allAdBreaks = o(e),
                t.adBreaks = t.allAdBreaks.filter(function(e) {
                    return e.isMid()
                }),
                t.prettyAdBreaks(),
                s("set policy slots", t.adBreaks)
            }
            ,
            f.addAdBreak = function(e) {
                return this.addAdBreaks([e])
            }
            ,
            f.addAdBreaks = function(e) {
                var t = this;
                e = i.map(e, function(e) {
                    return new d(e)
                }),
                i.each(e, function(e) {
                    e.isValid() && t.adBreaks.push(e)
                }),
                t.prettyAdBreaks(),
                s("add ad breaks", t.adBreaks)
            }
            ,
            f.getAdBreaksByType = function(e) {
                var t = this;
                return i.filter(t.allAdBreaks, function(t) {
                    return i.isMatch(t, {
                        cuepointType: e
                    })
                })
            }
            ,
            f.startTimer = function() {
                var e = this;
                e.running || (s("start timer"),
                e.video.on("timeupdate", e.timerHandler),
                e.video.on("seeked", e.timerHandler),
                e.video.on("play", function() {
                    if (e.running) {
                        var t = e.video.currentTime();
                        s("video play", t);
                        var n = e.midrollPoints;
                        if (n && n.autoChoose) {
                            var i = n.nextMidroll;
                            -1 != i && i < t && e.disableAutoChooseMidroll("自动中插点在当前时间前面")
                        }
                    }
                }),
                e.running = !0)
            }
            ,
            f.stopTimer = function() {
                var e = this;
                e.running && (s("stop timer"),
                e.video.off("timeupdate", e.timerHandler),
                e.video.off("seeked", e.timerHandler),
                e.running = !1)
            }
            ,
            f.bindVideoTimeEvent = function(e, t) {
                this.on("videotime:" + e, t)
            }
            ,
            f.emitVideoTimeEvent = function(e) {
                this.emit("videotime:" + e)
            }
            ,
            f.updateVideoTime = function(e) {
                var t = this;
                0 == t.currentTime % 10 && s("update", t.currentTime),
                t.emitVideoTimeEvent(t.currentTime),
                t.lastTime = t.currentTime,
                t.adBreaksTimeHandler()
            }
            ,
            f.adBreaksTimeHandler = function() {
                var e = this
                  , t = []
                  , n = [];
                i.each(e.adBreaks, function(i) {
                    "banned" != i.state && (i.isLoaded() || i.canLoad(e.currentTime) && t.push(i),
                    i.isLoaded() && e.currentTime == i.startTime && n.push(i))
                });
                var r = a(t)
                  , o = a(n);
                r.length != t.length && s("adbreaks to load conflict", r, t),
                o.length != n.length && s("adbreaks to play conflict", o, n),
                i.each(r, function(t) {
                    s("adbreak load and fill", t),
                    t.fill(e.view)
                }),
                i.each(o, function(e) {
                    s("adbreak play", e);
                    var t = e.request
                      , n = e.ad;
                    t ? t.play() : n && (n.slot.request.reset(),
                    n.play())
                })
            }
            ,
            f.onUserSeeked = function() {
                var e = this
                  , t = e.currentTime;
                i.each(e.adBreaks, function(e) {
                    e.startTime > t && e.isLoaded() && (e.abort(),
                    e.refresh())
                })
            }
            ,
            f.setAutoChooseMidroll = function(e) {
                var t = this;
                e && p.bool(e.autoChoose) && (s("自动中插点", e),
                t.midrollPoints = e,
                e.autoChoose ? t.enableAutoChooseMidroll(e.nextMidroll) : t.disableAutoChooseMidroll("初始化"))
            }
            ,
            f.enableAutoChooseMidroll = function(e) {
                var t = this;
                return t.currentTime > e ? void s("当前时间晚于自动中插点") : (s("启用自动中插点", e),
                void i.each(t.adBreaks, function(t) {
                    u.midroll == t.cuepointType && (t.startTime == e ? t.state = null : t.state = "banned")
                }))
            }
            ,
            f.disableAutoChooseMidroll = function(e) {
                var t = this;
                !1 !== t.midrollPoints.autoChoose && (s("停用自动中插点", e, t.midrollPoints),
                t.midrollPoints = {
                    autoChoose: !1
                },
                i.each(t.adBreaks, function(e) {
                    u.midroll == e.cuepointType && (e.state = null)
                }))
            }
            ,
            f.ban = function(e) {
                var t = this
                  , n = i.filter(t.adBreaks, function(t) {
                    return i.isMatch(t, e)
                });
                i.each(n, function(e) {
                    e.state = "banned"
                }),
                s("ban ad breaks", e, n)
            }
            ,
            f.prettyAdBreaks = function() {
                var e = this;
                e.sortAdBreaks()
            }
            ,
            f.sortAdBreaks = function() {
                var e = this
                  , t = e.adBreaks;
                t && t.sort(function(e, t) {
                    var n = e.cuepointType - t.cuepointType;
                    return 0 == n && (n = e.startTime - t.startTime),
                    n
                })
            }
        }
        ).call(t, n(5))
    }
    , function(e, t, n) {
        (function(t, i) {
            function r(e) {
                e = e || {};
                var t = this;
                t.startTime = e.startTime,
                t.cuepointType = e.cuepointType,
                t.adZoneId = e.adZoneId,
                t.sequenceId = e.sequenceId,
                t.adZoneStyle = e.adZoneStyle,
                t.humanStartTime = o.humanizeDuration(t.startTime),
                t.state = null,
                t.request = null,
                t.ad = e.ad || null,
                t.priority = 0,
                c.midroll == t.cuepointType ? t.priority = 10 : c.viewPoint == t.cuepointType && (t.priority = 9)
            }
            var o = n(36)
              , a = n(16)("schedule:adbreak")
              , s = n(50)
              , c = n(32);
            e.exports = r;
            var u = 10
              , l = r.prototype;
            l.isMid = function() {
                var e = [2, 4, 9, 10, 11];
                return !!(t.includes(e, this.cuepointType) && this.startTime > 0)
            }
            ,
            l.isOverlay = function() {
                var e = [8, 10, 11];
                return !!t.includes(e, this.cuepointType)
            }
            ,
            l.isValid = function() {
                if (i.number(this.startTime) && i.number(this.cuepointType))
                    return !0
            }
            ,
            l.isLoaded = function() {
                return !(!this.request && !this.ad)
            }
            ,
            l.refresh = function() {
                this.request = null
            }
            ,
            l.fill = function(e) {
                this.isLoaded() ? a("is loaded, no need to request") : this.request = new s({
                    adBreaks: [this]
                },e)
            }
            ,
            l.canLoad = function(e) {
                return e >= this.startTime - u && e <= this.startTime
            }
            ,
            l.abort = function() {
                this.request ? this.request.abort() : this.ad && this.ad.abort()
            }
            ,
            l.getContext = function() {
                return this.ad || this.request
            }
        }
        ).call(t, n(5), n(8))
    }
    , function(e, t, n) {
        (function(t, i) {
            function r(e, t) {
                var n = this;
                l.call(n),
                n.element = e.video(),
                n.$adContainer = i(e.adcontainer()),
                n.$video = i(n.element),
                n.$videoBox = n.$video.parent(),
                n.sdk = t,
                n.mw = e,
                n.options = {},
                n.adId = null,
                n.lastAdId = null,
                n.videoEventId = null,
                n.lastVideoEventId = null,
                n.enabled = !0,
                n.lastState = {},
                n.bindEvent(),
                n.midrollTip = new d(n.$adContainer),
                n.initAdElements(),
                o("video engine type", n.getEngineType())
            }
            var o = n(16)("video")
              , a = n(36)
              , s = t.is
              , c = n(41).template
              , u = n(40)
              , l = n(29)
              , d = n(94);
            e.exports = r,
            t.inherits(r, l);
            var p = r.prototype;
            p.startMidrollTip = function() {
                this.midrollTip.reset(),
                this.midrollTip.start()
            }
            ,
            p.bindEvent = function() {
                var e = this
                  , n = "playing pause waiting error ended play timeupdate seeked loadstart";
                i(e.mw).on(n, function(n) {
                    if (e.enabled) {
                        var i = n.type
                          , r = n.originalEvent.gas || {}
                          , s = r.id
                          , c = t.includes("play playing timeupdate".split(" "), i);
                        if (c && e.setCurrentVideoId(r.videoEventId, n),
                        e.emit(i, n),
                        s) {
                            var u = a.getAdById(s, e.sdk);
                            if (u)
                                return e.emitToAd(u, "video-" + i, n),
                                void (c && e.setCurrentAdId(r.id, n));
                            o("error! fail to find ad", r),
                            e.abort()
                        }
                        e.removeCurrentAd()
                    } else
                        e.pause()
                }),
                e.onBussiness("jsNotifyAdManager", function(n) {
                    o("jsNotifyAdManager", n);
                    var i = t.get(n, "data")
                      , r = t.get(i, "action");
                    if (i = t.get(i, "data") || {},
                    i.adUid) {
                        var s = a.getAdById(i.adUid, e.sdk);
                        s && s.triggerExternalEvent(r, i)
                    }
                })
            }
            ,
            p.onBussiness = function(e, t) {
                var n = this;
                n.mw.bussiness && n.mw.bussiness.on(e, t)
            }
            ,
            p.getCurrentAd = function() {
                var e = this
                  , t = e.adId;
                if (t) {
                    var n = a.getAdById(t, e.sdk);
                    return n
                }
            }
            ,
            p.setCurrentAd = function(e) {
                e && this.setCurrentAdId(e.id)
            }
            ,
            p.setCurrentAdId = function(e, t) {
                var n = this;
                t = t || {},
                n.lastAdId = n.adId,
                n.adId = e,
                n.lastAdId != n.adId && o("current ad changed", n.lastAdId, " => ", n.adId, t.type)
            }
            ,
            p.setCurrentVideoId = function(e, t) {
                var n = this;
                t = t || {},
                n.lastVideoEventId = n.videoEventId,
                n.videoEventId = e,
                n.lastVideoEventId != n.videoEventId && (o("current video changed", n.lastVideoEventId, " => ", n.videoEventId, t.type),
                n.sdk.switchToVideoViewById(e))
            }
            ,
            p.hasCurrentAd = function() {
                return null != this.adId
            }
            ,
            p.removeCurrentAd = function() {
                this.setCurrentAdId(null)
            }
            ,
            p.emitToCurrentAd = function(e) {
                var t = this
                  , n = t.getCurrentAd();
                n && t.emitToAd(n, e)
            }
            ,
            p.emitToAd = function(e, t, n) {
                e && (/timeupdate/.test(t) || o("emit", t, e.id),
                e.emit(t, n))
            }
            ,
            p.updateCountdown = function(e) {
                var t = this;
                t.$countdown && t.$countdown.text(e)
            }
            ,
            p.updateTrueViewCountdown = function(e) {
                var t = this;
                t.$trueViewCountdown && t.$trueViewCountdown.text(e)
            }
            ,
            p.hideAllAdElements = function(e) {
                o("hide all ad elements", e);
                var t = this.$adContainer.children();
                t = t.filter(function() {
                    var e = i(this).data();
                    return !e.adzone
                }),
                t.hide()
            }
            ,
            p.getControlsHeight = function() {
                var e = this
                  , t = 0;
                return e.$controls && e.$controls.is(":visible") && (t = e.$controls.height()),
                t
            }
            ,
            p.saveState = function() {
                var e = this;
                e.lastState = {
                    paused: e.paused(),
                    muted: e.muted(),
                    volume: e.volume(),
                    src: e.src()
                }
            }
            ,
            p.restoreState = function() {}
            ,
            p.disableVideo = function() {
                o("disable video");
                var e = this;
                e.$mask.show(),
                e.pause(),
                e.enabled = !1
            }
            ,
            p.enableVideo = function() {
                o("enable video");
                var e = this;
                e.enabled = !0,
                e.play(),
                e.$mask.hide()
            }
            ,
            p.trySetOptions = function(e) {
                var t = this;
                e = e || {},
                e.theme == t.options.theme || t._setOptions(e),
                t.syncVoiceStatus()
            }
            ,
            p.removeOptions = function(e) {
                var t = this;
                t.options = {},
                t.hideAllAdElements(e)
            }
            ,
            p._setOptions = function(e) {
                var t = this;
                o("set options", e),
                t.hideAllAdElements("默认清除"),
                t.options = e;
                var n = e.ad || t.getCurrentAd() || {};
                t.$video.off("click").css("cursor", ""),
                e.theme && (t.useTheme(e.theme, n),
                n.clickThrough && (t.$video.on("click", function(e) {
                    t.emitToCurrentAd("clickAndOpen")
                }),
                t.$video.css("cursor", "pointer")))
            }
            ,
            p.useTheme = function(e, n) {
                a.addStyle();
                var r = this
                  , s = r.sdk;
                if (o("use theme", e, n.id),
                s.vipMarketingDocuments) {
                    o("use vip marketing doc", s.vipMarketingDocuments);
                    var c = r.$normalAdTip.find(".vip-marketing-doc");
                    c.text(s.vipMarketingDocuments)
                }
                "rolllike" == e ? (r.$controls.hide(),
                r.$mask.show()) : r.$controls.show(),
                r.$countdown = null;
                var u, l = n.getParentByName("view");
                l.disableSkipAd ? u = r.$disableSkipAdTip : "vip" == e ? u = r.$vipAdTip : "origin" == e || (u = t.includes(e, "trueview") ? t.includes(e, "before") ? r.$trueViewBeforeAdTip : r.$trueViewAfterAdTip : "rolllike" == e ? r.$normalAdTip : r.$normalAdTip);
                var d = r.$learnMore;
                n.$dspIcon && n.$dspIcon.show();
                var p = n.clickThrough;
                if (d) {
                    var f = !0;
                    !t.includes(["vip", "origin"], e) && p || (f = !1),
                    o("should show learn more", f),
                    f ? d.show() : d.hide()
                }
                u ? (n.$adzone && (r.$adContainer[0] == n.$adzone[0] || i.contains(r.$adContainer[0], n.$adzone[0]) || (o("clone ad tip for outside mode"),
                u = u.clone(!0),
                a.tryAppend(n.$adzone, u))),
                u.show(),
                r.$countdown = u.find(".cd-time"),
                r.$trueViewCountdown = u.find(".cd-trueview-time")) : o("no ad tip", n.id)
            }
            ,
            p.initAdElements = function(e) {
                function r() {
                    return s.pingback("ply_adclkskp"),
                    s.emitToCurrentAd("skip"),
                    !1
                }
                var s = this;
                if (!s.initedAdElements) {
                    s.initedAdElements = !0;
                    var l = s.$adContainer;
                    s.$normalAdTip = i(c(n(96), u.resource)),
                    s.$vipAdTip = i(c(n(97), u.resource)),
                    s.$trueViewBeforeAdTip = i(c(n(98), u.resource)),
                    s.$trueViewAfterAdTip = i(c(n(99), u.resource)),
                    s.$disableSkipAdTip = i(c(n(100), u.resource)),
                    s.$disableSkipAdPanel = i(c(n(101), u.resource));
                    var d = s.$disableSkipAdPanel.find(".cupid-panel-btn")
                      , p = s.$disableSkipAdTip.find(".tp_disable-skip-detail");
                    p.on("click", function() {
                        s.$disableSkipAdPanel.show()
                    }),
                    d.on("click", function() {
                        s.$disableSkipAdPanel.hide()
                    });
                    var f = i("body");
                    f.on("click", ".public-vip", r),
                    f.on("click", ".tp_close-txt", r),
                    f.on("click", ".tp_vip-free", r);
                    var h = s.$controls = i(c(n(102), u.resource))
                      , v = s.$voice = h.find(".bottom-public_voice")
                      , m = s.$play = h.find(".bottom-public_play")
                      , g = s.$fullscreen = h.find(".public-screen")
                      , y = s.$learnMore = h.find(".know-detail");
                    t.each([s.$normalAdTip, s.$vipAdTip, s.$trueViewBeforeAdTip, s.$trueViewAfterAdTip], function(e) {
                        e.css({
                            "z-index": 3001
                        })
                    }),
                    s.$mask = i("<div>").css({
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        left: 0,
                        top: 0,
                        "background-color": "#000",
                        "z-index": 100
                    }).attr("data-cupid", "mask"),
                    l.append(s.$mask).append(s.$controls).append(s.$normalAdTip).append(s.$vipAdTip).append(s.$trueViewBeforeAdTip).append(s.$trueViewAfterAdTip).append(s.$disableSkipAdTip).append(s.$disableSkipAdPanel),
                    s.removeOptions("default hidden"),
                    !1 === s.sdk.showVoiceIcon && v.hide(),
                    m.on("click", function() {
                        var e = m.find("i")
                          , t = e.hasClass("btn-pause");
                        t ? (o("click pause"),
                        s.pingback("ply_adps"),
                        s.pause(!0)) : (o("click play"),
                        s.pingback("ply_adply"),
                        s.play())
                    }),
                    v.on("click", function() {
                        var e = v.find("i")
                          , t = e.hasClass("voice-no");
                        t ? (o("click mute => voice"),
                        s.pingback("ply_addmt"),
                        s.muted(!1)) : (o("click voice => mute"),
                        s.pingback("ply_admt"),
                        s.muted(!0)),
                        s.syncVoiceStatus()
                    }),
                    g.on("click", function() {
                        var e = i(this).find("i")
                          , t = e.hasClass("screen-small");
                        t ? (o("click fullscreen"),
                        s.pingback("ply_adfllscrn"),
                        s.requestFullscreen()) : (o("click no fullscreen"),
                        s.pingback("ply_addfllscrn"),
                        s.exitFullscreen())
                    }),
                    i(s.mw).on("fullscreen", function() {
                        o("fullscreen"),
                        s.syncFullscreenStatus()
                    }).on("exitfullscreen", function() {
                        o("exitfullscreen"),
                        s.syncFullscreenStatus()
                    }),
                    y.on("click", function() {
                        s.pingback("ply_addtl"),
                        s.emitToCurrentAd("clickAndOpen")
                    }),
                    i(s.mw).on("play pause", function(e) {
                        var t = a.getActionType(e);
                        o("sync play status", e.type, t),
                        s.syncPlayStatus()
                    }),
                    s.syncVoiceStatus()
                }
            }
            ,
            p.syncPlayStatus = function() {
                var e = this
                  , t = e.paused();
                e.midrollTip.isVisible() && (t ? e.midrollTip.stop() : e.midrollTip.start());
                var n = t ? "btn-play" : "btn-pause";
                e.$play.find("i").removeClass().addClass(n)
            }
            ,
            p.syncVoiceStatus = function() {
                var e = this
                  , t = e.muted()
                  , n = e.volume();
                t = t || 0 == n;
                var i = t ? "voice-no" : "voice-middle";
                e.$voice.find("i").removeClass().addClass(i)
            }
            ,
            p.syncFullscreenStatus = function() {
                var e = this
                  , t = e.isFullScreen()
                  , n = "screen-small";
                t && (n = "screen-all"),
                e.$fullscreen.find("i").removeClass().addClass(n)
            }
            ,
            t.each("currentTime src volume muted paused duration".split(" "), function(e) {
                p[e] = function() {
                    var n = this.mw
                      , i = n[e];
                    if (s.fn(i))
                        return n[e].apply(n, arguments);
                    var r = this.element
                      , o = t.first(arguments);
                    return void 0 === o ? r[e] : void (r[e] = o)
                }
            }),
            t.each("play pause addEventListener removeEventListener".split(" "), function(e) {
                p[e] = function() {
                    var t = this.mw
                      , n = t[e];
                    if (s.fn(n))
                        return t[e].apply(t, arguments);
                    var i = this.element;
                    return i[e].apply(i, arguments)
                }
            }),
            p.pingback = function(e) {
                return o("longyuan pingback", e),
                this.mw.sendUserActionPingback(e)
            }
            ,
            t.each("getUserInfo fullscreentoggle videoPlayedDurationInDay isFullScreen getEngineType load getCurrentGas abort".split(" "), function(e) {
                p[e] = function() {
                    var t = this.mw
                      , n = t[e];
                    if (s.fn(n))
                        return n.apply(t, arguments)
                }
            }),
            p.firePlayer = function(e, t) {
                var n = this
                  , i = {
                    type: e,
                    data: t
                };
                o("fire player", i),
                n.mw.fire(i)
            }
            ,
            p.requestFullscreen = function() {
                var e = this;
                e.isFullScreen() || (o("进入全屏"),
                e.fullscreentoggle())
            }
            ,
            p.exitFullscreen = function() {
                var e = this;
                e.isFullScreen() && (o("退出全屏"),
                e.fullscreentoggle())
            }
        }
        ).call(t, n(5), n(22))
    }
    , function(e, t, n) {
        (function(i, r) {
            function o(e, t) {
                var o = this;
                a("init"),
                o.cb = i.once(t || i.noop);
                var l = o.$midrollTip = r(c(n(95), u.resource));
                o.hide(),
                s.addStyle(),
                e.append(l),
                o.$progress = l.find(".video_pause-progress"),
                o.totalDuration = 5e3
            }
            var a = n(16)("midroll-tip")
              , s = n(36)
              , c = n(41).template
              , u = n(40);
            e.exports = t = o;
            var l = o.prototype;
            l.getProgress = function() {
                var e = this
                  , t = e.$progress[0]
                  , n = 0;
                if (t) {
                    var i = t.style.width || "0%";
                    n = parseFloat(i) / 100
                }
                return n
            }
            ,
            l.isVisible = function() {
                return "none" != this.$midrollTip.css("display")
            }
            ,
            l.start = function() {
                var e = this
                  , t = e.getProgress()
                  , n = 1 - t;
                a("start and left", 100 * n + "%"),
                n > 0 && (e.$midrollTip.show(),
                e.$progress.animate({
                    width: "100%"
                }, e.totalDuration * n, "linear", function() {
                    e.stop(),
                    e.hide(),
                    e.cb()
                }))
            }
            ,
            l.reset = function() {
                var e = this;
                e.$progress.css("width", "0%")
            }
            ,
            l.show = function() {
                this.$midrollTip.show()
            }
            ,
            l.hide = function() {
                this.$midrollTip.hide()
            }
            ,
            l.destroy = function() {
                var e = this;
                e.$progress.stop(!0),
                e.$midrollTip.remove()
            }
            ,
            l.stop = function() {
                var e = this;
                a("stop"),
                e.$progress.stop(!0)
            }
        }
        ).call(t, n(5), n(22))
    }
    , function(e, t) {
        e.exports = "<div class=video_pause> <span class=video_pause-progress></span> <span class=video_pause-icon></span> <p>{请您稍事休息}</p> <p>{广告之后更精彩哟~}</p> </div> "
    }
    , function(e, t) {
        e.exports = "<div class=public-time> <span class=cd-time>0</span> <a class=public-vip href=javascript:;>{会员免广告}<i class=vip-marketing-doc></i></a> </div> "
    }
    , function(e, t) {
        e.exports = '<div> <div class=tp_vip-show><span class=tp_vip-gif></span><span class=tp_vip-text>爱奇艺VIP会员团队为您推荐</span></div> <div class=tp_vip-close> <div class="tp_close-time cd-time">0</div> <div class=tp_close-txt><a href=javascript:;>关闭此推荐 &gt;&gt;</a></div> </div> </div> '
    }
    , function(e, t) {
        e.exports = '<div> <div class="tp_vip-time cd-time">0</div> <div class=tp_vip-nointerest> <div class=tp_nointerest-top>不感兴趣？</div> <div class=tp_nointerest-btm><span class=cd-trueview-time>0</span>秒后可跳过此广告</div> </div> </div> ';
    }
    , function(e, t) {
        e.exports = '<div> <div class="tp_vip-time tp_vip-time1 cd-time">0</div> <div class=tp_vip-free><a href=javascript:;>免费跳过广告 &gt;&gt;</a></div> </div> '
    }
    , function(e, t) {
        e.exports = '<div class=tp_disable-skip> <div class=tp_disable-skip-txt><a href=javascript:;>{应版权方要求，会员无法跳过该剧广告}</a><a href=javascript:; class=tp_disable-skip-detail>?</a></div> <div class="tp_disable-skip-time cd-time">0</div> </div> '
    }
    , function(e, t) {
        e.exports = '<div class="cupid-panel cupid-common-panel"> <div class=cupid-panel-header></div> <div class=cupid-panel-body>{版权文案}</div> <div class=cupid-panel-footer> <button class=cupid-panel-btn>{我知道了}</button> </div> </div> '
    }
    , function(e, t) {
        e.exports = "<div class=bottom-public> <a href=javascript:; class=bottom-public_play><i class=btn-pause></i></a> <a href=javascript:; class=bottom-public_voice><i class=voice-middle></i></a> <a href=javascript:; class=know-detail>{了解详情}&gt;</a> <a href=javascript:; class=public-screen><i class=screen-small></i></a> </div> "
    }
    , function(e, t, n) {
        var i = n(61)
          , r = n(16)("external");
        t.externalAdMap = {},
        t.render = function(e, n) {
            r("external", e, n),
            n = n || {},
            n = {
                clickThrough: n.clickThrough,
                creative: {
                    creativeId: n.creativeId,
                    creativeObject: n.creativeObject,
                    templateType: n.templateType
                },
                isExternal: !0,
                externalAdMap: t.externalAdMap
            };
            var o = {
                adZoneId: e,
                cuepointType: 0
            }
              , a = new i(n,o);
            a.play()
        }
    }
    , function(e, t, n) {
        (function(t, i) {
            function r(e) {
                this.$panel = t(u(n(105), l.resource)),
                this.ticket = "",
                this.log = "广告测试",
                this.sdk = e
            }
            function o() {
                var e = c.Log.logs
                  , t = i.map(e, function(e) {
                    var t = ["[" + e.name + "]"];
                    return i.each(e.data, function(e) {
                        if ("object" == typeof e)
                            try {
                                e = JSON.stringify(e)
                            } catch (n) {}
                        t.push(String(e))
                    }),
                    t.join(" ")
                });
                return t.join("\r\n")
            }
            var a = "feedback"
              , s = n(16)(a)
              , c = n(17)
              , u = n(41).template
              , l = n(40)
              , d = n(36);
            e.exports = r;
            var p = r.prototype;
            p.init = function() {
                var e = this
                  , n = e.sdk
                  , i = t(document)
                  , r = !1;
                i.on("keydown", function(t) {
                    85 == t.keyCode && t.ctrlKey && t.altKey && (r || (e.initFeedbackBox(),
                    r = !0),
                    n.video && n.video.isFullScreen() && n.video.fullscreentoggle(),
                    e.$panel.show())
                })
            }
            ,
            p.initFeedbackBox = function() {
                var e = this
                  , n = t("body")
                  , i = e.$panel.find(".cupid-panel-close")
                  , r = e.$panel.find(".feedback-submit");
                d.addStyle(),
                i.on("click", function() {
                    e.closePanel()
                }),
                r.on("click", function() {
                    e.sendFeedback()
                }),
                n.append(e.$panel)
            }
            ,
            p.sendFeedback = function(e) {
                var n = this;
                n.setFeedbackLog(o());
                var i = {
                    entry_class: "guanggao_player",
                    fb_class: "广告报障",
                    fb_selfclass: "广告报障",
                    phone: n.$panel.find(".feedback-phone").val(),
                    email: n.$panel.find(".feedback-email").val(),
                    content: n.$panel.find(".feedback-detail").val(),
                    fb_applog: n.log,
                    format: "json"
                };
                n.getTicket().then(function() {
                    i.ticket = n.ticket,
                    t.ajax({
                        url: "http://feedback.iqiyi.com/f/b/s.html",
                        type: "POST",
                        dataType: "json",
                        timeout: 5e3,
                        data: i
                    }).then(function(e) {
                        "success" == e.data ? (s("feedback success", e),
                        n.$panel.find(".feedback-tip").show().text(l.translate("收到！我们会尽快为您解决问题!")),
                        setTimeout(function() {
                            n.closePanel()
                        }, 1500)) : (s("feedback error", e),
                        n.feedbackError())
                    })
                })
            }
            ,
            p.getTicket = function() {
                var e = this;
                return t.ajax({
                    url: "http://feedback.iqiyi.com/f/b/p.html?format=json"
                }).then(function(t) {
                    e.ticket = t
                })
            }
            ,
            p.closePanel = function() {
                var e = this;
                e.$panel.find(".feedback-tip").hide(),
                e.$panel.hide()
            }
            ,
            p.feedbackError = function() {
                var e = this;
                e.getTicket(),
                e.$panel.find(".feedback-tip").show().text(l.translate("提交失败，请稍后重试!"))
            }
            ,
            p.setFeedbackLog = function(e) {
                this.log = e
            }
        }
        ).call(t, n(22), n(5))
    }
    , function(e, t) {
        e.exports = '<div class="cupid-panel feedback-panel"> <div class=cupid-panel-header> <span class=cupid-panel-close></span> </div> <div class=cupid-panel-body> <fieldset> <label>{手机（选填）}</label> <input class="feedback-input feedback-phone"> </fieldset> <fieldset> <label>{邮件（选填）}</label> <input class="feedback-input feedback-email"> </fieldset> <fieldset> <label>{请简短说明一下您遇到的问题（选填）}</label> <textarea class=feedback-detail></textarea> </fieldset> <p class=feedback-tip></p> </div> <div class=cupid-panel-footer> <button class=feedback-submit>{提交}</button> </div> </div> '
    }
    , function(e, t, n) {
        (function(t) {
            function i(e) {
                var t = this;
                return t instanceof i ? (t.queueList = e || [],
                void t.close()) : new i(e)
            }
            var r = n(5)
              , o = r.is;
            e.exports = i;
            var a = i.prototype;
            a.queue = function() {
                var e = this
                  , t = arguments;
                e.isOpen ? e.exec(t) : e.queueList.push(t)
            }
            ,
            a.close = function() {
                this.isOpen = !1
            }
            ,
            a.open = function() {
                this.isOpen = !0,
                this.execAll()
            }
            ,
            a.execAll = function() {
                var e = this
                  , t = e.queueList;
                r.each(t, function(t) {
                    e.exec(t)
                }),
                t.length = 0
            }
            ,
            a.exec = function(e) {
                var t, n = r.first(e), i = this.ctx;
                if (t = o.fn(n) ? n : r.get(i, n),
                o.fn(t))
                    try {
                        t.apply(i, r.slice(e, 1))
                    } catch (a) {}
            }
            ,
            a.overwriteQueue = function(e) {
                var n = this;
                t[e] = function() {
                    n.queue.apply(n, arguments)
                }
            }
        }
        ).call(t, function() {
            return this
        }())
    }
    ])
});

