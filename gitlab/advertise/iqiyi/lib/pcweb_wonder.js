// Built by iQiyi-FE @2017-7-6 16:16:23
!function(e) {
    function t(i) {
        if (n[i])
            return n[i].exports;
        var o = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(o.exports, o, o.exports, t),
        o.loaded = !0,
        o.exports
    }
    var i = window["QIYIPlayerTrunkLoader"];
    window["QIYIPlayerTrunkLoader"] = function(n, a) {
        for (var r, c, s = 0, p = []; s < n.length; s++)
            c = n[s],
            o[c] && p.push.apply(p, o[c]),
            o[c] = 0;
        for (r in a)
            e[r] = a[r];
        for (i && i(n, a); p.length; )
            p.shift().call(null, t)
    }
    ;
    var n = {}
      , o = {
        0: 0
    };
    t.async = function(e, i) {
        if (0 === o[e])
            return i.call(null, t);
        if (void 0 !== o[e])
            o[e].push(i);
        else {
            o[e] = [i];
            var n = document.getElementsByTagName("head")[0]
              , a = document.createElement("script");
            a.type = "text/javascript",
            a.charset = "utf-8",
            a.async = !0,
            a.src = t.p + "skin/skin." + e + ".962b45fe.js",
            n.appendChild(a)
        }
    }
    ,
    t.m = e,
    t.c = n,
    t.p = "//static.iqiyi.com/js/player_v1/",
    // t(0);
    window.i_require = t;
}([function(e, t, i) {
    var n = function(e, t, i) {
        var n = window
          , o = e(1)
          , a = e(2)
          , r = e(47)
          , c = n.QiyiPlayerConfig.H5_PLAYER_URL;
        Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
            var t = this.length
              , i = +arguments[1] || 0;
            if (0 === t || isNaN(i) || i >= t)
                return -1;
            for (i < 0 && (i = t + i) < 0 && (i = 0); i < t; ++i)
                if (this[i] === e)
                    return i;
            return -1
        }
        );
        var s = n.QiyiPlayerCallbacks || []
          , p = function(e) {
            for (var t = 0; t < s.length; t++)
                s[t].call(null, e);
            s = []
        };
        s.length > 0 && p(a),
        o.ready = function(e) {
            if (e) {
                o.isActived = !0;
                var t = function(e) {
                    var t = /\/.+_(\w+)\.js$/gi.exec(e);
                    return t && 2 === t.length ? t[1] : ""
                }
                  , i = function(e) {
                    var i = a.version
                      , c = t(e);
                    "" !== c && i !== c ? (n.QiyiPlayerCallbacks = s,
                    delete o.spacename,
                    r.seriesLoadScripts(e, function(e) {})) : p(a)
                };
                -1 === s.indexOf(e) && s.push(e),
                n.QiyiPlayerConfig ? i(c) : r.seriesLoadScripts("//static.iqiyi.com/js/player/config/online.js", function(t) {
                    t ? i(c) : "function" == typeof e && e(null)
                })
            }
        }
        ,
        i.exports = o
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#1#
    var n = function(e, t, i) {
        var n = window
          , o = "QiyiPlayerLoader"
          , a = !!(n.MediaSource && n.URL && n.WebSocket && (n.RTCSessionDescription || n.webkitRTCSessionDescription) && (n.RTCPeerConnection || n.webkitRTCPeerConnection) && (n.RTCIceCandidate || n.webkitRTCIceCandidate))
          , r = !!n[o] && !!n[o].isActived;
        i.exports = n[o] = {
            spacename: o,
            __callbacks__: {},
            enableH5P2P: a,
            version: "4.1.1",
            isActived: r
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#2#
    var n = function(e, t, i) {
        var n = e(1)
          , o = e(3)
          , a = (e(4),
        e(5))
          , r = (e(8),
        e(7))
          , c = e(10)
          , s = (e(6),
        e(11))
          , p = e(12)
          , d = e(15)
          , l = e(16)
          , u = e(125)
          , f = {}
          , g = new p("PlayerManager")
          , h = {}
          , m = navigator.userAgent
          , v = function(e) {
            return f[e]
        }
          , b = function(e) {
            var t = !0
              , i = e.tvid || ""
              , n = e.vid || ""
              , o = v(e.parentId);
            return e.hasOwnProperty("parentId") ? null != o ? t = !1 : "" !== i && "" !== n || (t = !1) : t = !1,
            t
        }
          , _ = function(e) {
            var t = h[e] || [];
            h[e] = [];
            for (var i = 0; i < t.length; i++)
                !function(e, t) {
                    setTimeout(function() {
                        e[t].call()
                    }, 0)
                }(t, i)
        }
          , x = function(e, t) {
            var i = v(e)
              , n = h[e] || [];
            h[e] = n,
            n.push(t),
            i && i.__loadsuccess && _(e)
        };
        i.exports = {
            createPlayer: function(e) {
                var t = document.getElementById(e["parentId"])
                  , i = o.mix(e, t);
                if (!b(i))
                    return null;
                i.width && i.height && (t.style.width = parseInt(i.width, 10) + "px",
                t.style.height = parseInt(i.height, 10) + "px");
                var p = function() {
                    return c.get("player_forcedType") || null
                }() || i["playerType"] || function() {
                    var e = d.PlayerType_FlashVOD
                      , t = r.query("__playertype__")
                      , o = !0 === i.usevr || "true" === i.usevr
                      , p = parseInt(i.channelID, 10)
                      , l = (parseInt(i.tvid, 10),
                    1 === parseInt(i.supportedDrmTypes, 10))
                      , u = "https:" === window.location.protocol
                      , f = !0 === i.isPaoPaoFeed || "true" === i.isPaoPaoFeed
                      , g = /chrome\/([\d\.]+) /gi.exec(m.toLowerCase());
                    g = g ? parseInt(g[1], 10) : 0;
                    var h = function() {
                        return n.enableH5P2P && ("true" === r.query("__playerp2p__") || a.browser.CHROME && g >= 57 && "1" !== c.get("QP001") && !s.isTWLocale() && !o && !l && !u && !f)
                    }();
                    if (t)
                        switch (t) {
                        case "h5":
                            e = d.PlayerType_Html5VOD;
                            break;
                        case "flash":
                            e = d.PlayerType_FlashVOD
                        }
                    else
                        (a.os.mac && a.browser.SAFARI && (13 === p || 14 === p) || a.os.ios || a.os.android || h) && (e = d.PlayerType_Html5VOD);
                    return e
                }();
                i.plyct = +new Date,
                g.log("player type: " + p + ", player version: " + n.version + ", location: " + window.location.href + ", env: " + m.toLowerCase());
                var h;
                switch (p) {
                case d.PlayerType_Html5VOD:
                    h = new l(i);
                    break;
                case d.PlayerType_FlashVOD:
                    h = new u(i)
                }
                return f[i.parentId] = h,
                h.on(d.QYPLAYER_LOAD_SUCCESS, function(e) {
                    h.__loadsuccess = !0;
                    var t = e.data.playerId;
                    _(t)
                }),
                h.on("destroy", function() {
                    var e = this.getPlayerId();
                    delete f[e]
                }),
                h
            },
            getPlayerById: function(e) {
                return v(e)
            },
            destroyPlayer: function(e) {
                v(e).destroy()
            },
            constantType: d,
            version: "",
            ready: x
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#3#
    var n = function(e, t, i) {
        var n, o, a, r = e(4), c = e(5), s = e(6), p = e(7), d = {}, l = function() {
            a = document.querySelectorAll ? document.querySelectorAll("span") : document.getElementsByTagName("span"),
            n = window.QiyiPlayerParam || [],
            o = {};
            for (var e = 0; e < n.length; e++)
                n[e].name && (o[n[e].name] = n[e].attribute || {})
        }, u = function(e) {
            (o[e] || o.hasOwnProperty(e)) && (o[e] = null,
            delete o[e]);
            for (var t = n.length; t--; )
                n[t].name === e && n.splice(t, 1)
        }, f = function(e) {
            return e.replace(/([<>])/g, "")
        }, g = function(e) {
            for (var t in e)
                e[t] || !1 === e[t] || delete e[t];
            return e
        }, h = function(e) {
            var t, i, n = function(t) {
                return e.getAttribute(t)
            }, o = {
                // expandState: n("data-player-expandstate"),
                // albumId: n("data-player-albumid"),
                // tvid: n("data-player-tvid"),
                // vid: n("data-player-videoid"),
                // autoplay: n("data-player-autoplay"),
                // isMember: n("data-player-ismember"),
                // cyclePlay: n("data-player-cycleplay"),
                // exclusive: n("data-player-exclusive"),
                // qiyiProduced: n("data-player-qiyiProduced"),
                // share_sTime: n("data-player-startTime"),
                // share_eTime: n("data-player-endTime"),
                // showBarStyle: n("data-player-barStyle")
            };
            for (t = 0; t < a.length; t++)
                if (i = a[t],
                "data-widget-adparam" === i.getAttribute("data-widget-adparam")) {
                    var r = i.getAttribute("data-adparam-cupid")
                      , c = i.getAttribute("data-adparam-playerid");
                    r && (o.adurl = r),
                    c && (o.cid = c)
                }
            return g(o)
        }, m = function() {
            var e, t, i = {};
            for (e = 0; e < a.length; e++)
                if (t = a[e],
                "data-widget-adparam" === t.getAttribute("data-widget-adparam")) {
                    var n = t.getAttribute("data-adparam-cupid")
                      , o = t.getAttribute("data-adparam-playerid");
                    n && (i.adurl = n),
                    o && (i.cid = o)
                }
            return g(i)
        }, v = function() {
            var e, t, i, o, c, s, d = !1, l = {};
            for (c = 0; c < n.length; c++)
                "public" === n[c].name && (r(l, g(n[c].attribute || {}), !0),
                u("public"),
                d = !0);
            if (!d)
                for (e = 0; e < a.length; e++)
                    s = a[e],
                    t = s.getAttribute("data-widget-flashplayerparam"),
                    i = s.getAttribute("data-flashplayerparam-flashvars"),
                    o = s.getAttribute("data-h5playerparam-h5vars"),
                    "public" === t && (i && r(l, g(p.query2Json(i)), !0),
                    o && r(l, g(p.query2Json(o)), !0));
            return g(l)
        }, b = function(e) {
            var t = {
                playerUrl: function() {
                    var e = s.getVer();
                    return e.length > 2 && (parseInt(e[0], 10) >= 12 || 11 === parseInt(e[0], 10) && parseInt(e[1], 10) >= 4)
                }() && window.QiyiPlayerConfig.FLASH_PLAYER_ZURL ? window.QiyiPlayerConfig.FLASH_PLAYER_ZURL : window.QiyiPlayerConfig.FLASH_PLAYER_URL,
                flashP2PCoreUrl: window.QiyiPlayerConfig.FLASH_P2P_URL,
                barrageurl: window.QiyiPlayerConfig.FLASH_BARRAGE_URL,
                preloader: window.QiyiPlayerConfig.FLASH_PRELOADER_URL,
                preloaderTw: window.QiyiPlayerConfig.FLASH_PRELOADER_URL_TW,
                qiyiProducedPreloader: window.QiyiPlayerConfig.FLASH_PRELOADER_PRODUCE,
                qiyiProducedPreloaderTw: window.QiyiPlayerConfig.FLASH_PRELOADER_PRODUCE_TW,
                exclusivePreloader: window.QiyiPlayerConfig.FLASH_PRELOADER_EXCLUSIVE,
                exclusivePreloaderTw: window.QiyiPlayerConfig.FLASH_PRELOADER_EXCLUSIVE_TW,
                // vipPreloader: QiyiPlayerConfig.FLASH_PRELOADER_VIP,
                //vipPreloaderTw: QiyiPlayerConfig.FLASH_PRELOADER_VIP_TW,
                // iconPreloader: QiyiPlayerConfig.FLASH_PRELOADER_ICON,
                //iconPreloaderTw: QiyiPlayerConfig.FLASH_PRELOADER_ICON_TW,
                // iconProducedPreloader: QiyiPlayerConfig.FLASH_PRELOADER_ICON_PRODUCE,
                // iconProducedPreloaderTw: QiyiPlayerConfig.FLASH_PRELOADER_ICON_PRODUCE_TW,
                // iconExclusivePreloader: QiyiPlayerConfig.FLASH_PRELOADER_ICON_EXCLUSIVE,
                // iconExclusivePreloaderTw: QiyiPlayerConfig.FLASH_PRELOADER_ICON_EXCLUSIVE_TW,
                // tipdataurl: QiyiPlayerConfig.FLASH_TIP_XML,
                // h5P2PUrl: QiyiPlayerConfig.H5_P2P_URL
            };
            return g(t)
        }, _ = function() {
            var e, t, i, c, s, d = {};
            for (e = 0; e < a.length; e++)
                s = a[e],
                t = s.getAttribute("data-widget-flashplayerparam"),
                i = s.getAttribute("data-flashplayerparam-flashvars"),
                c = s.getAttribute("data-h5playerparam-h5vars"),
                t && "public" !== t && (o[t] ? (r(d, g(o[t]), !0),
                u(t)) : (i && r(d, g(p.query2Json(i)), !0),
                c && r(d, g(p.query2Json(c)), !0)));
            if (n.length > 0)
                for (e = 0; e < n.length; e++)
                    n[e] && n[e].name && r(d, g(n[e].attribute || {}), !0);
            return g(d)
        }, x = function(e) {
            var t = {}
              , i = function(t) {
                return e.getAttribute(t)
            }("data-player-flashvars");
            return i = i ? p.query2Json(i) : {},
            r(t, g(i), !0),
            g(t)
        }, y = function() {
            var e = {}
              , t = function(e) {
                var t = p.query2Json(e)
                  , i = t.flashvars;
                i = i ? p.query2Json(f(decodeURIComponent(i))) : {};
                var n = t["share_sTime"] || t["s"]
                  , o = t["share_eTime"] || t["e"]
                  , a = n && n.match(/(\d*)-.*?=(\d*)/);
                a && (n = a[1],
                o = a[2]);
                var c = {
                    autoplay: t["autoplay"],
                    vid: t["videoid"] || t["vid"],
                    tvid: t["tvid"] || t["tvId"],
                    albumId: t["albumid"],
                    cyclePlay: t["cycleplay"],
                    isMember: t["ismember"],
                    exclusive: t["exclusive"],
                    qiyiProduced: t["qiyiProduced"],
                    share_sTime: n,
                    share_eTime: o,
                    outsite: t["outsite"],
                    cid: t["cid"],
                    isCid: t["isCid"],
                    vfrm: t["vfrm"],
                    isMute: t["isMute"],
                    showBarStyle: t["barStyle"],
                    local: t["local"]
                };
                return r(i, g(c), !0),
                i
            }
              , i = t(f(window.location.search.replace(/([<>])/g, "")))
              , n = t(f(window.location.hash.slice(1).replace(/([<>])/g, "")));
            r(e, g(i), !0),
            r(e, g(n), !0);
            for (var o in e)
                e[o] || !1 === e[o] || delete e[o];
            return g(e)
        };
        return {
            mix: function(e, t) {
                l();
                var i = window.__qlt
                  , n = ""
                  , o = "";
                i && (i.tmplt && (n = i.tmplt || ""),
                i.brs && (o = i.brs || ""));
                var a = {
                    outsite: s.outsite,
                    components: "feffffe6e",
                    local: "cn_s",
                    browserType: o,
                    pageTmpltType: n
                };
                r(a, h(t), !0),
                r(a, m(), !0),
                r(a, v(), !0),
                r(a, b(), !0),
                r(a, _(), !0),
                r(a, x(t), !0),
                r(a, e, !0),
                r(a, y(), !0),
                (c.os.ios || c.os.android) && (a.autoplay = !1);
                for (var p in a)
                    "string" == typeof a[p] && (a[p] = a[p].replace(/^http:/gi, ""));
                return d = a,
                a
            },
            getVars: function() {
                return d
            }
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#4#
    var n = function(e, t, i) {
        i.exports = function e(t, i, n, o) {
            function a(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            return i && function(e, t) {
                var i;
                for (i in e)
                    if (a(e, i) && t(e[i], i))
                        break
            }(i, function(i, r) {
                !n && a(t, r) || (o && "string" != typeof i && "boolean" != typeof i ? (t[r] || (t[r] = {}),
                e(t[r], i, n, o)) : t[r] = i)
            }),
            t
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#5#
    var n = function(e, t, i) {
        var n = ""
          , o = {}
          , a = {}
          , r = navigator
          , c = r.platform
          , s = r.userAgent.toLowerCase()
          , p = s.match(/rtrident/)
          , d = !p && s.match(/(ipad).*os\s([\d_]+)/)
          , l = !p && !d && s.match(/(iphone\sos)\s([\d_]+)/)
          , u = s.match(/(Android)\s+([\d.]+)/);
        a.userAgent = s,
        a.IE11 = /rv\:11/.test(s),
        a.IE = /msie/.test(s) || a.IE11,
        a.IE6 = /msie 6/.test(s),
        a.IE7 = /msie 7/.test(s),
        a.IE8 = /msie 8/.test(s),
        a.IE9 = /msie 9/.test(s),
        a.IE10 = /msie 10/.test(s),
        a.iPhone = /iphone os/.test(s) && !p,
        a.iPhone4 = /iphone os [45]_/.test(s) && !p,
        a.iPad = /ipad/.test(s) && !p,
        a.iPod = /iPod/i.test(s) && !p,
        a.isTouch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch,
        a.CHROME = /chrome/.test(s),
        a.SAFARI = /safari/.test(s) && !/chrome/.test(s),
        a.mobileSafari = a.iPhone || a.iPhone || a.iPad,
        a.QQ = /QQBrowser/gi.test(s);
        var f = /mac/i.test(c)
          , g = /android/.test(s);
        o.mac = f,
        o.android = g,
        u && (o.version = u[2]),
        o.ios = !1,
        l && (o.ios = !0,
        o.version = l[2].replace(/_/g, ".")),
        d && (o.ios = !0,
        o.version = d[2].replace(/_/g, ".")),
        a.iPod && (o.ios = !0),
        n = a.iPad ? "b85da1cf3ae44351" : "b6c13e26323c537d",
        i.exports = {
            browser: a,
            os: o,
            code: n
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#6#
    var n = function(e, t, i) {
        var n = {
            getVer: function() {
                var e;
                try {
                    e = navigator.plugins["Shockwave Flash"].description
                } catch (t) {
                    try {
                        e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")
                    } catch (e) {}
                }
                return (e || "0 r0").match(/\d+/g)
            },
            outsite: function() {
                var e, t = [];
                try {
                    e = !window.parent.location.href
                } catch (i) {
                    for (0 === t.length && (e = !0); t.length; )
                        if (-1 === document.referrer.indexOf(t.pop())) {
                            e = !0;
                            break
                        }
                }
                return e + ""
            }()
        };
        i.exports = n
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#7#
    var n = function(e, t, i) {
        var n = function(e) {
            var t = e.match(/(\w+):\/\/([^\/:]+):?(\d*)((?:\/|$)[^?#]*)/);
            if (t) {
                return {
                    protocol: t[1],
                    host: t[2],
                    port: t[3],
                    path: t[4]
                }
            }
            return null
        }
          , o = function(e) {
            for (var t, i, n, o = e.substr(e.lastIndexOf("?") + 1), a = o.split("&"), r = a.length, c = {}, s = 0; s < r; s++)
                a[s] && (n = a[s].split("="),
                t = n.shift(),
                i = n.join("="),
                void 0 === c[t] && (c[t] = i));
            return c
        }
          , a = function(e, t) {
            1 === arguments.length && (t = e,
            e = window.location.href);
            var i = String(t).replace(new RegExp("([.*+?^=!:${}()|[\\]/\\\\])","g"), "\\$1")
              , n = new RegExp("(^|&|\\?|#)" + i + "=([^&#]*)(&|$|#)","")
              , o = e.match(n);
            return o ? o[2] : ""
        }
          , r = function(e) {
            var t = n(e);
            return (t ? t.path || "" : "").replace(/^.*[\\\/]/, "").split(".")[0]
        };
        i.exports = {
            parse: n,
            query: a,
            query2Json: o,
            filename: r
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#8#
    var n = function(e, t, i) {
        var n = e(1)
          , o = e(4)
          , a = e(9)
          , r = document
          , c = function() {}
          , s = {}
          , p = {
            "*": "*/".concat("*"),
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
        }
          , d = {
            "*": null,
            text: null,
            html: null,
            xml: null,
            json: function(e) {
                var t = {}
                  , i = window.JSON ? JSON.parse : function() {
                    return {}
                }
                ;
                try {
                    t = i(e)
                } catch (e) {}
                return t
            }
        }
          , l = {
            method: "get",
            dataType: "*",
            timeout: 1e4,
            charset: "utf-8",
            cache: !0,
            withCredentials: !0,
            jsonpCallback: "callback",
            complete: c,
            success: c,
            failure: c
        }
          , u = function(e) {
            var t = [];
            if ("object" == typeof e)
                for (var i in e)
                    t[t.length] = encodeURIComponent(i) + "=" + encodeURIComponent(e[i]);
            return t.join("&").replace(/%20/g, "+")
        }
          , f = function(e) {
            e = e || {},
            o(e, l);
            var t = e.url
              , i = e.params || {}
              , n = e.success
              , a = e.failure;
            if (t) {
                !function() {
                    function o() {
                        var t;
                        4 == s.readyState && (t = d[e.dataType] ? d[e.dataType](s.responseText) : s.responseText,
                        200 == s.status ? n(t) : a(s.statusText, t))
                    }
                    var r = {}
                      , c = u(i);
                    r.params = i,
                    r.url = t + (c.length > 0 ? (/\?/i.test(t) ? "&" : "?") + c : ""),
                    "function" == typeof e.beforeSend && (r = e.beforeSend(r));
                    var s = new XMLHttpRequest;
                    s.timeout = e.timeout,
                    s.withCredentials = e.withCredentials,
                    s.onreadystatechange = o,
                    s.open(e.method, r.url),
                    s.setRequestHeader("Accept", p[e.dataType]),
                    s.send()
                }()
            }
        }
          , g = function(e) {
            e = e || {},
            o(e, l),
            e.dataType = "json",
            f(e)
        }
          , h = function(e) {
            e = e || {},
            o(e, l);
            var t = e.url
              , i = e.params || {}
              , c = e.success
              , p = e.failure
              , d = "Q" + a(e.fixedCallback || t)
              , f = !!e.memory
              , g = a(t + u(i))
              , h = s[g];
            if (t) {
                if (f && h && c)
                    return void c(h);
                var m = function(t, i, o) {
                    switch (delete n["__callbacks__"][d],
                    t) {
                    case "success":
                        f && (s[g] = o),
                        c(o);
                        break;
                    case "fail":
                        p(o, i)
                    }
                    e.complete(o)
                };
                n["__callbacks__"][d] = function(e) {
                    m("success", "200", e)
                }
                ;
                !function() {
                    var o, a = {}, c = r.createElement("script");
                    c.async = !0,
                    c.type = "text/javascript",
                    c.charset = e.charset;
                    var s = function() {
                        if (c)
                            try {
                                c.onload(null, !0)
                            } catch (e) {}
                    };
                    c.onload = c.onreadystatechange = function(e, t) {
                        (t || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null,
                        c.parentNode && c.parentNode.removeChild(c),
                        c = null,
                        clearTimeout(o))
                    }
                    ,
                    c.onerror = function(e) {
                        m("fail", null),
                        s()
                    }
                    ,
                    o = setTimeout(function() {
                        m("fail", 408),
                        s()
                    }, e.timeout),
                    i[e.jsonpCallback] = n.spacename + ".__callbacks__." + d,
                    a.url = t + (/\?/i.test(t) ? "&" : "?") + u(i),
                    a.params = i,
                    "function" == typeof e.beforeSend && (a = e.beforeSend(a)),
                    c.src = a.url,
                    r.getElementsByTagName("head")[0].appendChild(c)
                }()
            }
        }
          , m = function(e, t) {
            if ("string" == typeof t && e) {
                var i = [];
                e._ = +new Date;
                for (var n in e)
                    i.push(n + "=" + encodeURIComponent(e[n]));
                var o = t + "?" + i.join("&");
                if (navigator.sendBeacon)
                    navigator.sendBeacon(o);
                else {
                    var a = new Image;
                    a.onload = a.onerror = a.onabort = function() {
                        a.onload = a.onerror = a.onabort = null,
                        a = null
                    }
                    ,
                    a.src = o
                }
            }
        };
        i.exports = {
            serializeParam: u,
            ajax: f,
            json: g,
            jsonp: h,
            beacon: m
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#9#
    var n = function(e, t, i) {
        function n(e, t) {
            e[t >> 5] |= 128 << t % 32,
            e[14 + (t + 64 >>> 9 << 4)] = t;
            for (var i = 1732584193, n = -271733879, o = -1732584194, d = 271733878, l = 0; l < e.length; l += 16) {
                var u = i
                  , f = n
                  , g = o
                  , h = d;
                i = a(i, n, o, d, e[l + 0], 7, -680876936),
                d = a(d, i, n, o, e[l + 1], 12, -389564586),
                o = a(o, d, i, n, e[l + 2], 17, 606105819),
                n = a(n, o, d, i, e[l + 3], 22, -1044525330),
                i = a(i, n, o, d, e[l + 4], 7, -176418897),
                d = a(d, i, n, o, e[l + 5], 12, 1200080426),
                o = a(o, d, i, n, e[l + 6], 17, -1473231341),
                n = a(n, o, d, i, e[l + 7], 22, -45705983),
                i = a(i, n, o, d, e[l + 8], 7, 1770035416),
                d = a(d, i, n, o, e[l + 9], 12, -1958414417),
                o = a(o, d, i, n, e[l + 10], 17, -42063),
                n = a(n, o, d, i, e[l + 11], 22, -1990404162),
                i = a(i, n, o, d, e[l + 12], 7, 1804603682),
                d = a(d, i, n, o, e[l + 13], 12, -40341101),
                o = a(o, d, i, n, e[l + 14], 17, -1502002290),
                n = a(n, o, d, i, e[l + 15], 22, 1236535329),
                i = r(i, n, o, d, e[l + 1], 5, -165796510),
                d = r(d, i, n, o, e[l + 6], 9, -1069501632),
                o = r(o, d, i, n, e[l + 11], 14, 643717713),
                n = r(n, o, d, i, e[l + 0], 20, -373897302),
                i = r(i, n, o, d, e[l + 5], 5, -701558691),
                d = r(d, i, n, o, e[l + 10], 9, 38016083),
                o = r(o, d, i, n, e[l + 15], 14, -660478335),
                n = r(n, o, d, i, e[l + 4], 20, -405537848),
                i = r(i, n, o, d, e[l + 9], 5, 568446438),
                d = r(d, i, n, o, e[l + 14], 9, -1019803690),
                o = r(o, d, i, n, e[l + 3], 14, -187363961),
                n = r(n, o, d, i, e[l + 8], 20, 1163531501),
                i = r(i, n, o, d, e[l + 13], 5, -1444681467),
                d = r(d, i, n, o, e[l + 2], 9, -51403784),
                o = r(o, d, i, n, e[l + 7], 14, 1735328473),
                n = r(n, o, d, i, e[l + 12], 20, -1926607734),
                i = c(i, n, o, d, e[l + 5], 4, -378558),
                d = c(d, i, n, o, e[l + 8], 11, -2022574463),
                o = c(o, d, i, n, e[l + 11], 16, 1839030562),
                n = c(n, o, d, i, e[l + 14], 23, -35309556),
                i = c(i, n, o, d, e[l + 1], 4, -1530992060),
                d = c(d, i, n, o, e[l + 4], 11, 1272893353),
                o = c(o, d, i, n, e[l + 7], 16, -155497632),
                n = c(n, o, d, i, e[l + 10], 23, -1094730640),
                i = c(i, n, o, d, e[l + 13], 4, 681279174),
                d = c(d, i, n, o, e[l + 0], 11, -358537222),
                o = c(o, d, i, n, e[l + 3], 16, -722521979),
                n = c(n, o, d, i, e[l + 6], 23, 76029189),
                i = c(i, n, o, d, e[l + 9], 4, -640364487),
                d = c(d, i, n, o, e[l + 12], 11, -421815835),
                o = c(o, d, i, n, e[l + 15], 16, 530742520),
                n = c(n, o, d, i, e[l + 2], 23, -995338651),
                i = s(i, n, o, d, e[l + 0], 6, -198630844),
                d = s(d, i, n, o, e[l + 7], 10, 1126891415),
                o = s(o, d, i, n, e[l + 14], 15, -1416354905),
                n = s(n, o, d, i, e[l + 5], 21, -57434055),
                i = s(i, n, o, d, e[l + 12], 6, 1700485571),
                d = s(d, i, n, o, e[l + 3], 10, -1894986606),
                o = s(o, d, i, n, e[l + 10], 15, -1051523),
                n = s(n, o, d, i, e[l + 1], 21, -2054922799),
                i = s(i, n, o, d, e[l + 8], 6, 1873313359),
                d = s(d, i, n, o, e[l + 15], 10, -30611744),
                o = s(o, d, i, n, e[l + 6], 15, -1560198380),
                n = s(n, o, d, i, e[l + 13], 21, 1309151649),
                i = s(i, n, o, d, e[l + 4], 6, -145523070),
                d = s(d, i, n, o, e[l + 11], 10, -1120210379),
                o = s(o, d, i, n, e[l + 2], 15, 718787259),
                n = s(n, o, d, i, e[l + 9], 21, -343485551),
                i = p(i, u),
                n = p(n, f),
                o = p(o, g),
                d = p(d, h)
            }
            return Array(i, n, o, d)
        }
        function o(e, t, i, n, o, a) {
            return p(d(p(p(t, e), p(n, a)), o), i)
        }
        function a(e, t, i, n, a, r, c) {
            return o(t & i | ~t & n, e, t, a, r, c)
        }
        function r(e, t, i, n, a, r, c) {
            return o(t & n | i & ~n, e, t, a, r, c)
        }
        function c(e, t, i, n, a, r, c) {
            return o(t ^ i ^ n, e, t, a, r, c)
        }
        function s(e, t, i, n, a, r, c) {
            return o(i ^ (t | ~n), e, t, a, r, c)
        }
        function p(e, t) {
            var i = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (i >> 16) << 16 | 65535 & i
        }
        function d(e, t) {
            return e << t | e >>> 32 - t
        }
        function l(e) {
            for (var t = Array(), i = (1 << g) - 1, n = 0; n < e.length * g; n += g)
                t[n >> 5] |= (e.charCodeAt(n / g) & i) << n % 32;
            return t
        }
        function u(e) {
            for (var t = f ? "0123456789ABCDEF" : "0123456789abcdef", i = "", n = 0; n < 4 * e.length; n++)
                i += t.charAt(e[n >> 2] >> n % 4 * 8 + 4 & 15) + t.charAt(e[n >> 2] >> n % 4 * 8 & 15);
            return i
        }
        var f = 0
          , g = 8;
        i.exports = function(e) {
            return u(n(l(e), e.length * g))
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#10#
    var n = function(e, t, i) {
        var n = e(4)
          , o = {}
          , a = {
            get: function(e, t) {
                var i = "";
                if (t = n({
                    memory: !1
                }, t, !0),
                t.memory && o.hasOwnProperty(e))
                    i = o[e];
                else {
                    if (new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(e)) {
                        var a = new RegExp("(^| )" + e + "=([^;]*)(;|$)")
                          , r = a.exec(document.cookie);
                        r && (i = r[2] || "")
                    }
                    "string" == typeof i && (i = decodeURIComponent(i)),
                    t.memory && (o[e] = i)
                }
                return i
            },
            set: function(e, t, i) {
                i = i || {},
                t = encodeURIComponent(t);
                var n = i.expires;
                "number" == typeof i.expires && (n = i.expires <= 0 ? new Date(0) : new Date,
                n.setTime(n.getTime() + i.expires)),
                delete o[e],
                document.cookie = e + "=" + t + (i.path ? "; path=" + i.path : "") + (n ? "; expires=" + n.toUTCString() : "") + (i.domain ? "; domain=" + i.domain : "")
            },
            remove: function(e, t) {
                t = t || {},
                t.expires = -1,
                this.set(e, "", t)
            }
        };
        i.exports = a
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#11#
    var n = function(e, t, i) {
        var n = e(3);
        i.exports = {
            isTraditionalChinese: function() {
                var e = !1
                  , t = n.getVars().local;
                return "tw_t" !== t && "cn_t" !== t || (e = !0),
                e
            },
            isTWLocale: function() {
                var e = !1
                  , t = n.getVars().local;
                return "tw_t" !== t && "tw_s" !== t || (e = !0),
                e
            },
            local: function() {
                return n.getVars().local
            }
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#12#
    var n = function(e, t, i) {
        var n = e(13)
          , o = e(4)
          , a = e(14)
          , r = "QiyiPlayerLogger"
          , c = {
            OFF: {
                value: 0,
                name: "OFF"
            },
            ERROR: {
                value: 1,
                name: "ERROR"
            },
            WARN: {
                value: 2,
                name: "WARN"
            },
            INFO: {
                value: 3,
                name: "INFO"
            },
            DEBUG: {
                value: 4,
                name: "DEBUG"
            }
        };
        a.write(r, "");
        var s = parseInt(a.read("QiyiPlayerLoggerLevel"), 10)
          , p = Array.prototype.slice
          , d = function(e, t) {
            var i = ""
              , n = e < 0
              , o = String(Math.abs(e));
            return o.length < t && (i = new Array(t - o.length + 1).join("0")),
            (n ? "-" : "") + i + o
        }
          , l = function() {
            var e = new Date;
            return e.getFullYear() + "-" + d(e.getMonth() + 1, 2) + "-" + d(e.getDate(), 2) + " " + d(e.getHours(), 2) + ":" + d(e.getMinutes(), 2) + ":" + d(e.getSeconds(), 2)
        }
          , u = function(e, t) {
            var i, n = "#FFA500";
            e = p.call(e),
            e.unshift("%c"),
            e.unshift("[" + t.name + "]"),
            e.unshift("%c[" + l() + " IQIYI_PLAYER_" + t.level.name + "]");
            var o = a.read(r) || "";
            if (a.write(r, ("" !== o ? o + "\n" : "") + e.join("").replace(/(%c|IQIYI_PLAYER_)/gi, "")),
            "undefined" != typeof console)
                try {
                    i = console.log,
                    t.level === c.WARN && console.warn ? (i = console.warn,
                    n = "#ff6cb7") : t.level === c.ERROR && console.error ? (i = console.error,
                    n = "#F30") : t.level === c.INFO && console.info ? i = console.info : t.level === c.DEBUG && console.info && (n = "#FFA500"),
                    t.print && i.apply(console, [e.join(" ") + " ", "background-color:#699f00;color:#fff;", "background-color:" + n + ";color:#fff;"])
                } catch (e) {}
        }
          , f = n("Logger", {
            construct: function(e) {
                this.context = {
                    name: e || "Unknown"
                }
            },
            statics: {
                levels: c,
                _filterLevel: function() {
                    var e;
                    for (var t in c)
                        c[t].value === s && (e = c[t]);
                    return e || c.WARN
                }(),
                stringify: function(e) {
                    var t = "";
                    try {
                        t = JSON.stringify(e)
                    } catch (e) {}
                    return t
                },
                setLevel: function(e) {
                    e && "value"in e && (f._filterLevel = e,
                    a.write("QiyiPlayerLoggerLevel", e.value))
                },
                getLevel: function() {
                    return f._filterLevel
                },
                getLog: function() {
                    return a.read(r)
                }
            },
            methods: {
                enabledFor: function(e) {
                    return e.value <= f._filterLevel.value
                },
                invoke: function(e, t) {
                    u(t, o({
                        level: e,
                        print: this.enabledFor(e)
                    }, this.context))
                },
                debug: function() {
                    this.invoke(c.DEBUG, arguments)
                },
                log: function() {
                    this.invoke(c.INFO, arguments)
                },
                info: function() {
                    this.invoke(c.INFO, arguments)
                },
                warn: function() {
                    this.invoke(c.WARN, arguments)
                },
                error: function() {
                    this.invoke(c.ERROR, arguments)
                }
            }
        });
        i.exports = f
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#13#
    var n = function(e, t, i) {
        var n = e(4)
          , o = function() {}
          , a = function() {
            this.__super__ ? this.__super__ = this.__super__.prototype.superclass : this.__super__ = this.superclass,
            this.__super__.apply(this, arguments),
            delete this.__super__
        }
          , r = function(e, t) {
            var i = t.construct || function() {}
              , r = t.extend || o
              , c = function() {};
            c.prototype = r.prototype;
            var s = function() {
                a.apply(this, arguments),
                i.apply(this, arguments)
            }
              , p = new c;
            return n(p, t.props || {}),
            n(p, t.methods || {}),
            n(s, t.statics || {}),
            p.constructor = s,
            p.superclass = r,
            s.prototype = p,
            s
        };
        i.exports = r
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#14#
    var n = function(e, t, i) {
        var n = {}
          , o = {
            getItem: function(e) {
                return n[e]
            },
            setItem: function(e, t) {
                n[e] = t
            },
            removeItem: function(e) {
                delete n[e]
            }
        }
          , a = function() {
            try {
                return window.localStorage.setItem("_Q_test_", 1),
                window.localStorage.removeItem("_Q_test_"),
                window.localStorage
            } catch (e) {}
            return o
        }();
        i.exports = {
            read: function(e) {
                return a.getItem(e)
            },
            write: function(e, t) {
                a.setItem(e, t)
            },
            remove: function(e) {
                a.removeItem(e)
            }
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#15#
    var n = function(e, t, i) {
        i.exports = {
            PlayerType_Html5VOD: "h5_VOD",
            PlayerType_FlashVOD: "flash_VOD",
            PlayerType_Null: "null",
            QYPLAYER_STATUS_DATA_READY: "dataready",
            QYPLAYER_STATUS_AD_PLAYING: "adplaying",
            QYPLAYER_STATUS_AD_PAUSED: "adpaused",
            QYPLAYER_STATUS_AD_RESUMED: "adresumed",
            QYPLAYER_STATUS_READY: "ready",
            QYPLAYER_STATUS_START_PLAY: "startplay",
            QYPLAYER_STATUS_SEEKING: "seeking",
            QYPLAYER_STATUS_WAITING: "waiting",
            QYPLAYER_STATUS_PAUSED: "paused",
            QYPLAYER_STATUS_PLAYING: "playing",
            QYPLAYER_STATUS_STOPED: "stoped",
            QYPLAYER_STATUS_ERROR: "error",
            QYPLAYER_STATUS_END_PLAY: "endplay",
            QYPLAYER_LOAD_COMPLETE: "loadcomplete",
            QYPLAYER_LOAD_SUCCESS: "playerLoadSuccess",
            QYPLAYER_STATE_CHANGE: "playerStateChange",
            QYPLAYER_VIDEO_CHANGE: "videoChanged",
            QYPLAYER_VID_CHANGE: "vidChanged",
            QYPLAYER_NEXT_VIDEO: "playnextvideo",
            QYPLAYER_SET_LIGHT: "setLight",
            QYPLAYER_MOVETO_QITAN: "moveToQitan",
            QYPLAYER_SHOW_LOGIN_PANEL: "showLoginPanel",
            QYPLAYER_EXPAND: "expand",
            QYPLAYER_AUTHENTICATION_RESULE: "authenticationResult",
            QYPLAYER_RECHARGE: "recharge",
            QYPLAYER_SUBSCRIBE: "subscribe",
            QYPLAYER_REFRESH_PAGE: "refreshPage",
            QYPLAYER_DOWNLOAD: "download",
            QYPLAYER_REQUEST_VIDEOLIST: "requestVideoList",
            QYPLAYER_REQUEST_VIDEOLIST_BY_PAGE: "requestVideoListByPage",
            QYPLAYER_REQUEST_CHANGE_VIDEO: "requestChangeVideo",
            QYPLAYER_SWITCH_FULL_SCREEN: "switchFullScreen",
            QYPLAYER_ADD_TO_TABLE: "addToTable",
            QYPLAYER_FOCUS_TIPS: "focusTips",
            QYPLAYER_FOCUS_UPLOADER: "focusUploader",
            QYPLAYER_FIND_GOODS: "findGoods",
            QYPLAYER_PGC_FOLLOW: "pgcFollow",
            QYPLAYER_SHOW_DOWNLOAD_APPPOP: "showDownLoadAppPop",
            QYPLAYER_CHECK_CLIENT_INSTALL: "checkClientInstall",
            QYPLAYER_REQUEST_SEND_PINGBACK: "requestJSSendPB",
            QYPLAYER_DOSOMETHING: "setJsDoSomething",
            QYPLAYER_FOLLOW_UPNEXT_LOAD: "followUpNextLoad",
            QYPLAYER_USER_CLICK_SCORE: "userClickScore",
            QYPLAYER_BARRAGE_REPLAY: "barrageReply",
            QYPLAYER_BARRAGE_RECEIVE_DATA: "barrageReceiveData",
            QYPLAYER_SET_BARRAGE_INTERACT_INFO: "setBarrageInteractInfo",
            QYPLAYER_SET_BARRAGE_CONFIG_INFO: "setHasBarrageConfigInfo",
            QYPLAYER_SET_BARRAGE_CHANNEL_CONFIG_INFO: "setHasBarrageChannelConfigInfo",
            QYPLAYER_BARRAGE_STATE_CHANGE: "barrageStateChange",
            QYPLAYER_BARRAGE_ALLOWED: "barrageAllowed",
            QYPLAYER_REQUEST_REWARD: "requestReward",
            QYPLAYER_COMMENT_ALLOWED: "commentAllowed",
            QYPLAYER_GET_PLAYER_LOG: "getQiyiPlayerLog",
            QYPLAYER_WEBFULLSCREEN_BEFORE_CHANGE: "beforeWebFullScreenChange",
            QYPLAYER_WEBFULLSCREEN_AFTER_CHANGE: "afterWebFullScreenChange",
            QYPLAYER_FULLSCREEN_BEFORE_CHANGE: "beforeFullScreenChange",
            QYPLAYER_FULLSCREEN_AFTER_CHANGE: "afterFullScreenChange",
            QYPLAYER_H5_VIDEO_LOADSTART: "h5videoloadstart",
            QYPLAYER_H5_VIDEO_LOADEDMETADATA: "h5videoloadedmetadata",
            QYPLAYER_H5_DURATION_CHANGED: "h5durationchanged",
            QYPLAYER_H5_VOLUME_CHANGED: "h5volumechanged"
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#16#
    var n = function(e, t, i) {
        var n = e(13)
          , o = e(12)
          , a = e(17)
          , r = e(20)
          , c = e(45)
          , s = e(68)
          , p = e(15);
        new o("h5Adapter");
        i.exports = n("H5Adapter", {
            construct: function(e) {
                var t = this;
                t._player = new r(e);
                var i = function(e, i) {
                    i = i || {},
                    i.state = e.toLocaleLowerCase(),
                    t.fire({
                        type: p.QYPLAYER_STATE_CHANGE,
                        data: i
                    })
                }
                  , n = function(e, i) {
                    var n = {};
                    n.type = e,
                    i && (n.data = i),
                    t.fire(n)
                };
                t._player.on(c.NTF_StatusChanged, function(e) {
                    switch (e.data.state) {
                    case c.Status_AdPlaying:
                        i(p.QYPLAYER_STATUS_AD_PLAYING, e.data);
                        break;
                    case c.Status_AdPaused:
                        i(p.QYPLAYER_STATUS_AD_PAUSED, e.data);
                        break;
                    case c.Status_Loadstart:
                        n(p.QYPLAYER_H5_VIDEO_LOADSTART);
                        break;
                    case c.Status_LoadedMetaData:
                        n(p.QYPLAYER_H5_VIDEO_LOADEDMETADATA);
                        break;
                    case c.Status_StartPlay:
                        i(p.QYPLAYER_STATUS_START_PLAY, e.data);
                        break;
                    case c.Status_Waiting:
                        i(p.QYPLAYER_STATUS_WAITING, e.data);
                        break;
                    case c.Status_Paused:
                        i(p.QYPLAYER_STATUS_PAUSED, e.data);
                        break;
                    case c.Status_Playing:
                        i(p.QYPLAYER_STATUS_PLAYING, e.data);
                        break;
                    case c.Status_Stoped:
                        i(p.QYPLAYER_STATUS_STOPED, e.data);
                        break;
                    case c.Status_End_Play:
                        i(p.QYPLAYER_STATUS_END_PLAY, e.data);
                        break;
                    case c.Status_PlayError:
                        i(p.QYPLAYER_STATUS_ERROR, e.data)
                    }
                }),
                t._player.on(c.NTF_VRSReady, function(e) {
                    n(p.QYPLAYER_STATUS_DATA_READY, e.data.data)
                }),
                t._player.on(c.NTF_CanPlayThrough, function(e) {}),
                t._player.on(c.NTF_VolumeChanged, function(e) {
                    n(p.QYPLAYER_H5_VOLUME_CHANGED, e.data)
                }),
                t._player.on(c.NTF_DurationChanged, function(e) {
                    n(p.QYPLAYER_H5_DURATION_CHANGED, e.data)
                }),
                t._player.on(c.NTF_VideoChanged, function(e) {
                    n(p.QYPLAYER_VIDEO_CHANGE, e.data)
                }),
                t._player.on(c.NTF_VideoChange, function(e) {
                    n(p.QYPLAYER_VID_CHANGE, e.data)
                }),
                t._player.on(c.NTF_FollowUpNextLoad, function(e) {
                    n(p.QYPLAYER_FOLLOW_UPNEXT_LOAD, e.data)
                }),
                t._player.on(p.QYPLAYER_DOSOMETHING, function(e) {
                    t.fire({
                        type: p.QYPLAYER_DOSOMETHING,
                        data: e.data
                    })
                }),
                t._player.on(p.QYPLAYER_REQUEST_VIDEOLIST_BY_PAGE, function(e) {
                    t.fire({
                        type: p.QYPLAYER_REQUEST_VIDEOLIST_BY_PAGE,
                        data: e.data
                    })
                }),
                t._player.on(p.QYPLAYER_REQUEST_CHANGE_VIDEO, function(e) {
                    t.fire({
                        type: p.QYPLAYER_REQUEST_CHANGE_VIDEO,
                        data: e.data
                    })
                }),
                t._player.on(c.NTF_Error, function(e) {
                    i(p.QYPLAYER_STATUS_ERROR, e.data),
                    "A00011" === e.data.realcode && n(p.QYPLAYER_RECHARGE, {
                        code: "Q00310",
                        from: ""
                    })
                }),
                t._player.on(c.NTF_Recharge, function(e) {
                    n(p.QYPLAYER_RECHARGE, e.data.data)
                }),
                t._player.on(p.QYPLAYER_FIND_GOODS, function(e) {
                    t.fire({
                        type: p.QYPLAYER_FIND_GOODS,
                        data: e.data
                    })
                }),
                t._player.on(s.NTF_SHOW_LOGIN_PANEL, function(e) {
                    t.fire({
                        type: p.QYPLAYER_SHOW_LOGIN_PANEL,
                        data: e.data
                    })
                }),
                setTimeout(function() {
                    n(p.QYPLAYER_LOAD_SUCCESS, {
                        playerId: e.parentId
                    }),
                    n(p.QYPLAYER_BARRAGE_ALLOWED, {
                        enable: !1
                    })
                }, 0),
                t._player.on(s.NTF_Barrage_SetConfigInfo, function(e) {
                    n(p.QYPLAYER_SET_BARRAGE_CONFIG_INFO, {
                        configInfo: e.data
                    })
                }),
                t._player.on(s.NTF_Barrage_SetChannelConfigInfo, function(e) {
                    n(p.QYPLAYER_SET_BARRAGE_CHANNEL_CONFIG_INFO, {
                        configInfo: e.data
                    })
                }),
                t._player.on(s.NTF_Barrage_SetSwitch, function(e) {
                    e.data && e.data.selfFire && t.fire({
                        type: p.QYPLAYER_BARRAGE_STATE_CHANGE,
                        data: {
                            barrageState: !0 === e.data.isOpen ? 1 : 0
                        }
                    })
                }),
                t._player.on(s.NTF_WebFullScreen_BeforeChange, function(e) {
                    t.fire({
                        type: p.QYPLAYER_WEBFULLSCREEN_BEFORE_CHANGE,
                        data: "enter" === e.data
                    })
                }),
                t._player.on(s.NTF_WebFullScreen_AfterChange, function(e) {
                    t.fire({
                        type: p.QYPLAYER_WEBFULLSCREEN_AFTER_CHANGE,
                        data: "enter" === e.data
                    })
                }),
                t._player.on(s.NTF_FullScreen_BeforeChange, function(e) {
                    t.fire({
                        type: p.QYPLAYER_FULLSCREEN_BEFORE_CHANGE,
                        data: "enter" === e.data
                    })
                }),
                t._player.on(s.NTF_FullScreen_AfterChange, function(e) {
                    t.fire({
                        type: p.QYPLAYER_FULLSCREEN_AFTER_CHANGE,
                        data: "enter" === e.data
                    })
                })
            },
            extend: a,
            methods: {
                getQiyiPlayerInfo: function(e) {
                    this._player.getQiyiPlayerInfo(e)
                },
                getQiyiPlayerType: function(e) {
                    return e && "function" == typeof e && e("h5"),
                    "h5"
                },
                setBarrageStatus: function(e) {
                    this._player.setBarrageStatus(e)
                },
                setSelfSendBarrageInfo: function(e) {
                    this._player.setSelfSendBarrageInfo(e)
                },
                setBarrageSetting: function(e) {
                    this._player.setBarrageSetting(e)
                },
                setPlayerWebFullScreen: function(e) {
                    this._player.setPlayerWebFullScreen(e)
                },
                setPlayerFullScreen: function(e) {
                    this._player.setPlayerFullScreen(e)
                },
                addPlayListView: function(e) {
                    this._player.addPlayListView(e)
                }
            }
        })
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#17#
    var n = function(e, t, i) {
        var n = e(18)
          , o = e(13)
          , a = e(19)
          , r = function() {}
          , c = o("BaseAdapter", {
            extend: n,
            construct: function() {
                var e = this;
                e.__canRecordEvents = !0,
                a.init(),
                e.eventsRecorder = {},
                e.__evtRecorderTimer = setTimeout(function() {
                    e.stopRecordEvents()
                }, 3e5);
                var t = e.fire;
                e.fire = function(i) {
                    t.call(e, i);
                    var n = i.type;
                    e.__canRecordEvents && (e.eventsRecorder[n] || (e.eventsRecorder[n] = []),
                    "playerStateChange" === n ? e.eventsRecorder[n].push(i) : e.eventsRecorder[n] = [i])
                }
                ,
                e.isSmallWindow = null
            },
            methods: {
                load: function(e) {
                    this._player.load(e)
                },
                stopRecordEvents: function() {
                    var e = this;
                    e.__canRecordEvents = !1,
                    clearTimeout(e.__evtRecorderTimer),
                    setTimeout(function() {
                        e.eventsRecorder = {}
                    }, 1e4)
                },
                destroy: function() {
                    var e = this;
                    e._player.destroy(),
                    e.fire({
                        type: "destroy"
                    })
                },
                play: function() {
                    this._player.play()
                },
                resume: function() {
                    this._player.resume()
                },
                replay: function() {
                    this._player.replay()
                },
                pause: function() {
                    this._player.pause()
                },
                seek: function(e) {
                    this._player.seek(e)
                },
                stop: function() {
                    this._player.stop()
                },
                getPlayInfo: function(e) {
                    this._player.getPlayInfo(e)
                },
                getVideoInfo: function(e) {
                    this._player.getVideoInfo(e, this._tvid, this._videoid)
                },
                getPlayerId: function() {
                    return this._player.getPlayerId()
                },
                setQiyiUserLogin: function(e) {
                    this._player.setQiyiUserLogin(e)
                },
                switchVideo: function(e) {
                    this._player.switchVideo(e)
                },
                switchNextVideo: function() {
                    this._player.switchNextVideo()
                },
                switchPreVideo: function() {
                    this._player.switchPreVideo()
                },
                addVideoList: function(e) {
                    this._player.addVideoList(e)
                },
                removeVideoList: function(e) {
                    this._player.removeVideoList(e)
                },
                setSmallWindowMode: function(e) {
                    var t = this;
                    t.isSmallWindow !== e && (t.isSmallWindow = e,
                    t._player.setSmallWindowMode && t._player.setSmallWindowMode(e))
                },
                jsNotifyAdManager: function(e) {
                    this._player.jsNotifyAdManager(e)
                },
                getQiyiPlayerLog: function(e) {
                    try {
                        this._player.getQiyiPlayerLog(e)
                    } catch (e) {}
                },
                clearBanWord: function() {
                    this._player.clearBanWord()
                },
                addBanWord: function(e) {
                    this._player.addBanWord(e)
                },
                removeBanWord: function(e) {
                    this._player.removeBanWord(e)
                },
                getIsInMainVideo: r,
                setCyclePlay: r,
                getQiyiPlayerInfo: r,
                getQiyiVideoInfo: r,
                setQiyiSubscribe: r,
                setLight: r,
                expand: r,
                setBarrageStatus: r,
                setSelfSendBarrageInfo: r,
                setBarrageSetting: r,
                setActivityNoticeInfo: r,
                zoomQiyiVideo: r,
                setTimeListener: r,
                getHasBarrageConfigInfo: r,
                getHasBarrageChannelConfigInfo: r,
                getCommentConfigInfo: r,
                setSubscribeInfo: r,
                setSubscribeStateChange: r,
                setContinuePlayState: r,
                getSwitchVideoType: r,
                forceToSaveCurVideoInfo: r,
                getContinueData: r,
                setQiyiVisits: r,
                initQiyiVideo: r,
                getQiyiPlayerType: r,
                setPlayerWebFullScreen: r,
                setPlayerFullScreen: r
            }
        });
        i.exports = c
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#18#
    var n = function(e, t, i) {
        var n = e(13);
        i.exports = n("dispatcher", {
            construct: function() {
                this.__evtslist = {}
            },
            methods: {
                once: function(e, t) {
                    var i = this;
                    return i.on(e, function n() {
                        t.apply(this, arguments),
                        i.un(e, n)
                    })
                },
                on: function(e, t) {
                    var i = this.__evtslist;
                    return void 0 === i[e] && (i[e] = []),
                    i[e].push(t),
                    this
                },
                fire: function(e) {
                    var t = this
                      , i = t.__evtslist;
                    if (i[e.type]instanceof Array)
                        for (var n = 0, o = i[e.type]; n < o.length; n++)
                            try {
                                o[n].call(t, e)
                            } catch (e) {
                                try {
                                    console.error(e.stack || e)
                                } catch (e) {}
                            }
                },
                un: function(e, t) {
                    var i = this.__evtslist;
                    return i[e]instanceof Array && (i[e] = t ? i[e].filter(function(e) {
                        return e !== t
                    }) : []),
                    this
                }
            }
        })
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#19#
    var n = function(e, t, i) {
        var n = e(10)
          , o = e(9)
          , a = (e(8),
        0)
          , r = !1
          , c = ""
          , s = ""
          , p = function() {
            s = ""
        }
          , d = function() {
            return o(window.navigator.userAgent + document.cookie + Math.random() + (new Date).getTime() * a++)
        }
          , l = function(e, t) {
            n.set(e, t, {
                expires: 31536e6,
                path: "/",
                domain: "iqiyi.com"
            })
        }
          , u = function() {
            var e = n.get("QC006");
            return e || (r = !0,
            e = d(),
            l("QC006", e)),
            e
        }
          , f = function() {
            var e = n.get("QC005");
            return e || (r = !0,
            e = d(),
            l("QC005", e)),
            e
        }
          , g = {
            createUUID: function() {
                function e() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1).toUpperCase()
                }
                return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
            },
            getJsuid: u,
            getFluid: f,
            getWeid: function() {
                return s || (s = o(u() + "weid" + +new Date)),
                s
            },
            getEid: function() {
                var e = "";
                return c || (e = u(),
                c = o(e + "veid" + 1 * new Date)),
                c
            },
            getIsNewUser: function() {
                return r
            },
            init: function() {
                try {
                    window.addEventListener("unload", p),
                    window.addEventListener("beforeunload", p),
                    window.addEventListener("pagehide", p)
                } catch (e) {}
            }
        };
        i.exports = g
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#20#
    var n = function(e, t, i) {
        var n = e(18)
          , o = e(13)
          , a = e(21)
          , r = e(26)
          , c = e(28)
          , s = e(29)
          , p = e(12)
          , d = e(30)
          , l = e(63)
          , u = e(68)
          , f = e(45)
          , g = e(86)
          , h = e(65)
          , m = new p("h5Player");
        i.exports = o("h5Player", {
            construct: function(e) {
                var t = this;
                t._playerId = e["parentId"],
                t.__tidyVars(e);
                var i = document.getElementById(e["parentId"])
                  , n = document.createElement("div");
                n.innerHTML = '<div class="pw-video" tabindex="-1"></div>',
                i.insertBefore(n.firstChild, null),
                n = null;
                var o = i.querySelector(".pw-video")
                  , a = document.createElement("video");
                a.setAttribute("width", "100%"),
                a.setAttribute("height", "100%"),
                a.setAttribute("x-webkit-airplay", "allow"),
                o.appendChild(a);
                var r = document.createElement("div");
                r.setAttribute("data-player-hook", "plgcontainer"),
                o.appendChild(r),
                c.registElement(r),
                c.registElement(r);
                try {
                    var s = i.querySelector('*[data-widget-layer="layer"]');
                    s && s.parentNode.removeChild(s)
                } catch (e) {}
                t._core = new d(a,e),
                t._view = new l(o,r,t._core),
                [f.NTF_StatusChanged, f.NTF_CanPlayThrough, f.NTF_VolumeChanged, f.NTF_DurationChanged, f.NTF_VRSStart, f.NTF_VRSReady, f.NTF_VideoChange, f.NTF_VideoChanged, f.NTF_Recharge, f.NTF_Error, f.NTF_FollowUpNextLoad].forEach(function(e) {
                    t._core.on(e, function(e) {
                        t.fire(e)
                    })
                }),
                t._view.on(u.NTF_SHOW_LOGIN_PANEL, function(e) {
                    t.fire({
                        type: u.NTF_SHOW_LOGIN_PANEL,
                        data: e.data
                    })
                }),
                t._view.on(u.NTF_Barrage_SetConfigInfo, function(e) {
                    t.fire({
                        type: u.NTF_Barrage_SetConfigInfo,
                        data: e.data
                    })
                }),
                t._view.on(u.NTF_Barrage_SetChannelConfigInfo, function(e) {
                    t.fire({
                        type: u.NTF_Barrage_SetChannelConfigInfo,
                        data: e.data
                    })
                }),
                t._view.on(u.NTF_Barrage_SetSwitch, function(e) {
                    t.fire({
                        type: u.NTF_Barrage_SetSwitch,
                        data: e.data
                    })
                }),
                t._view.on(u.NTF_WebFullScreen_BeforeChange, function(e) {
                    t.fire({
                        type: u.NTF_WebFullScreen_BeforeChange,
                        data: e.data
                    })
                }),
                t._view.on(u.NTF_WebFullScreen_AfterChange, function(e) {
                    t.fire({
                        type: u.NTF_WebFullScreen_AfterChange,
                        data: e.data
                    })
                }),
                t._view.on(u.NTF_FullScreen_BeforeChange, function(e) {
                    t.fire({
                        type: u.NTF_FullScreen_BeforeChange,
                        data: e.data
                    })
                }),
                t._view.on(u.NTF_FullScreen_AfterChange, function(e) {
                    t.fire({
                        type: u.NTF_FullScreen_AfterChange,
                        data: e.data
                    })
                }),
                g.addCallback(function(e) {
                    t.fire(e)
                }),
                t._core.load({
                    tvid: e["tvid"],
                    vid: e["vid"],
                    cid: e["cid"],
                    autoplay: e["autoplay"]
                }),
                t._view.on(u.NTF_Barrage_ShowRulePage, function(e) {
                    h.getInterface().sendBarrageShowRulePagePingback()
                }),
                t._view.on(u.NTF_Barrage_ShowLike, function(e) {
                    h.getInterface().sendBarrageShowLikePingback()
                }),
                t._view.on(u.NTF_Barrage_EnsureReport, function(e) {
                    h.getInterface().sendBarrageEnsureReportPingback()
                }),
                t.__init()
            },
            extend: n,
            methods: {
                __init: function() {
                    this._core.on(f.NTF_Recharge, function() {
                        r.exit(),
                        s.exit()
                    })
                },
                __tidyVars: function(e) {
                    if (e) {
                        for (var t in e)
                            /\.(swf|xml)/gi.test(e[t]) && delete e[t];
                        m.log("vars:" + JSON.stringify(e))
                    }
                },
                destroy: function() {
                    var e = this;
                    e._core.destroy(),
                    document.getElementById(e._playerId).innerHTML = ""
                },
                load: function(e) {
                    e.tvid = e.tvId,
                    delete e.tvId,
                    this._core.load(e)
                },
                play: function() {
                    this._core.play()
                },
                resume: function() {
                    this._core.play()
                },
                replay: function() {
                    this._core.replay()
                },
                pause: function() {
                    this._core.pause()
                },
                seek: function(e) {
                    this._core.seek(e)
                },
                getVideoInfo: function(e) {
                    return this._core.getVideoInfo(e)
                },
                getPlayInfo: function(e) {
                    var t = this
                      , i = t._core
                      , n = t._view.videoWrapper;
                    i.getPlayInfo(function(t) {
                        var o = {};
                        o.tvid = t.tvid,
                        o.vid = t.vid,
                        o.currentTime = i.getCurrenttime(),
                        o.totalDuration = i.getDuration(),
                        o.currentDefination = t.rate,
                        o.currentTrack = "",
                        o.currentStatus = i.getCurrStatus(),
                        o.isTryWatch = i.isTryWatch() ? "1" : "0",
                        o.isPause = i.isPaused() ? "1" : "0",
                        o.width = n.width(),
                        o.height = n.height(),
                        e(o)
                    })
                },
                getPlayerId: function() {
                    return this._playerId
                },
                setQiyiUserLogin: function(e) {
                    a.setInfo(e)
                },
                addVideoList: function(e) {
                    this._core.addVideoList(e)
                },
                addPlayListView: function(e) {
                    this._core.addPlayListView(e)
                },
                removeVideoList: function(e) {
                    this._core.removeVideoList(e)
                },
                switchVideo: function(e) {
                    this._core.switchVideo(e)
                },
                switchNextVideo: function() {
                    this._core.switchNextVideo()
                },
                switchPreVideo: function() {
                    this._core.switchPreVideo()
                },
                jsNotifyAdManager: function(e) {
                    this._core.jsNotifyAdManager(e)
                },
                setSmallWindowMode: function(e) {
                    var t = this;
                    e = parseInt(e, 10),
                    t.__smallWinStatus !== e && (t.__smallWinStatus = e,
                    t._view.fire({
                        type: u.NTF_PlayerSmallWindowStatus,
                        data: e
                    }))
                },
                getQiyiPlayerInfo: function(e) {
                    var t = this
                      , i = t._core
                      , n = i.movieinfo
                      , o = t._view.videoWrapper
                      , a = {
                        currentTime: i.getCurrenttime(),
                        totalDuration: 2736680,
                        vid: n.vi,
                        isTryWatch: i.isTryWatch() ? "1" : "0",
                        width: o.width(),
                        isPause: i.isPaused() ? "1" : "0",
                        tvid: n.tvid,
                        height: o.height()
                    };
                    e && "function" == typeof e && e(a)
                },
                setPlayerWebFullScreen: function(e) {
                    this._view.fire({
                        type: u.NTF_WebFullScreen_SetSwitch,
                        data: e
                    })
                },
                setPlayerFullScreen: function(e) {
                    this._view.fire({
                        type: u.NTF_FullScreen_SetSwitch,
                        data: e
                    })
                },
                setBarrageStatus: function(e) {
                    this._view.fire({
                        type: u.NTF_Barrage_SetSwitch,
                        data: e
                    })
                },
                setSelfSendBarrageInfo: function(e) {
                    this._view.fire({
                        type: u.NTF_BarrageSelfSend,
                        data: e
                    })
                },
                setBarrageSetting: function(e) {
                    this._view.fire({
                        type: u.NTF_BarrageSettingChange,
                        data: e
                    })
                },
                clearBanWord: function() {
                    this._view.fire({
                        type: u.NTF_Barrage_ClearBanWord,
                        data: null
                    })
                },
                addBanWord: function(e) {
                    this._view.fire({
                        type: u.NTF_Barrage_AddBanWord,
                        data: e
                    })
                },
                removeBanWord: function(e) {
                    this._view.fire({
                        type: u.NTF_Barrage_RemoveBanWord,
                        data: e
                    })
                },
                getQiyiPlayerLog: function(e) {
                    e(p.getLog())
                }
            }
        })
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(module, exports, require) {//#21#
    var result = function(require, exports, module) {
        var Dispatcher = require(18), Class = require(13), cookies = require(10), http = require(8), md5 = require(9), Logger = require(12), logger = new Logger("user"), platform = require(5), i18n = require(11), tmtsauth = require(22), ptr = require(25), uuid = require(19), NoticedLoginInfo, REQUEST_KEY = "w0JD89dhtS7BdPLU2", RESPONSE_KEY = "-0J1d9d^ESd)9jSsja", isNewUser = !cookies.get("QC006"), _isVIPSync = !1, _heartBeatTimer = 0, _heartBeatTime = 0, _userLevel = 0, _isActivation = !1, _tvid = "", getUserInfo = function() {
            var userInfo = {}
              , p00002 = cookies.get("P00002");
            return null !== p00002 && "" !== p00002 && (p00002 = window.JSON ? window.JSON.parse(p00002) : eval("(" + p00002 + ")"),
            userInfo.uid = p00002.uid,
            userInfo.name = p00002.nickname,
            userInfo.email = p00002.email),
            userInfo
        }, getUid = function() {
            return getUserInfo().uid || ""
        }, isLogin = function() {
            return NoticedLoginInfo ? NoticedLoginInfo.login : "" !== getUid()
        }, passportCookie = function() {
            return NoticedLoginInfo && NoticedLoginInfo.P00001 ? NoticedLoginInfo.P00001 : cookies.get("P00001") || ""
        }, checkVipStack = [], flushCallback = function(e, t) {
            for (var i = 0; i < checkVipStack.length; i++)
                checkVipStack[i](e, t || null);
            checkVipStack = []
        }, onHeartBeatTimer = function() {
            var e = Math.random()
              , t = [];
            t.push("authcookie=" + cookies.get("P00001")),
            t.push("tn=" + e),
            t.push("tv_id=" + _tvid),
            t.push("device_id=" + uuid.getJsuid()),
            t.push("agenttype=1"),
            t.sort();
            for (var i = "", n = 0; n < t.length; n++)
                i += t[n] + "|";
            i += "jfaljluixn39012$#",
            i = md5(i);
            var o = {
                authcookie: cookies.get("P00001"),
                agenttype: 1,
                sign: i,
                device_id: uuid.getJsuid(),
                tv_id: _tvid,
                tn: e
            };
            http.beacon(o, "http://cm.passport.iqiyi.com/apis/cmonitor/keepalive.action")
        }, openHeartBeat = function() {
            1 === _userLevel && (_isActivation = !0,
            0 === _heartBeatTimer && (onHeartBeatTimer(),
            _heartBeatTimer = setInterval(onHeartBeatTimer, _heartBeatTime)))
        }, closeHeartBeat = function() {
            _isActivation = !1,
            0 !== _heartBeatTimer && (clearInterval(_heartBeatTimer),
            _heartBeatTimer = 0)
        }, isVip = function(e) {
            checkVipStack.push(e);
            var t = cookies.get("P00001")
              , i = "";
            i = platform.browser.iPad ? tmtsauth.getSrc() : i18n.isTWLocale() ? "01010031010010000000" : "01010031010000000000",
            t ? (ptr.sTime_userInfo = new Date - ptr.pgct,
            http.jsonp({
                url: "https://cmonitor.iqiyi.com/apis/user/check_vip.action",
                params: {
                    agenttype: 1,
                    sign: md5(t.substring(4, 36) + "|1|" + REQUEST_KEY),
                    authcookie: t,
                    ptid: i
                },
                timeout: 2e3,
                memory: !0,
                success: function(e) {
                    var i = !1
                      , n = null;
                    if (ptr.usedTime_userInfo = new Date - ptr.sTime_userInfo - ptr.pgct,
                    _userLevel = 0,
                    e)
                        if ("A00000" == e.code) {
                            var o = md5(t.substring(5, 39).split("").reverse().join("") + "<1<" + RESPONSE_KEY);
                            try {
                                i = e.data.sign === o
                            } catch (e) {}
                            if (e.data && e.data.keepalive && i) {
                                _userLevel = 1;
                                var a = 1e3 * parseInt(e.data.keepalive, 10);
                                if (a > 0) {
                                    a < 1e4 && (a = 1e4),
                                    (0 === _heartBeatTimer || 0 !== _heartBeatTimer && a !== _heartBeatTime) && (_heartBeatTime = a,
                                    _isActivation && (clearInterval(_heartBeatTimer),
                                    _heartBeatTimer = 0,
                                    _heartBeatTimer = setInterval(onHeartBeatTimer, _heartBeatTime)))
                                }
                            }
                        } else
                            switch (e.code) {
                            case "A10001":
                            case "A10002":
                            case "A10004":
                                n = "limitation"
                            }
                    _isVIPSync = i,
                    flushCallback(i, n)
                },
                failure: function(e, t) {
                    _userLevel = 0,
                    408 === t && logger.warn("passport: timeout, check user vip fail!"),
                    flushCallback(!1)
                }
            })) : flushCallback(!1)
        }, isVIPSync = function() {
            return _isVIPSync
        }, setInfo = function(e) {
            NoticedLoginInfo = e,
            !0 === NoticedLoginInfo.login ? NoticedLoginInfo.login = !0 : "true" === NoticedLoginInfo.login ? NoticedLoginInfo.login = !0 : NoticedLoginInfo.login = !1,
            this.fire({
                type: "infoset"
            })
        }, UserInfo = new Class("User",{
            extend: Dispatcher,
            methods: {
                isLogin: isLogin,
                getUid: getUid,
                isVip: isVip,
                isVipSync: isVIPSync,
                passportCookie: passportCookie,
                isNewUser: function() {
                    return isNewUser
                },
                setInfo: setInfo,
                tvid: function(e) {
                    _tvid = e
                },
                openHeartBeat: openHeartBeat,
                closeHeartBeat: closeHeartBeat
            }
        });
        module.exports = new UserInfo
    }
    .call(exports, require, exports, module);
    void 0 !== result && (module.exports = result)
}
, function(e, t, i) {//#22#
    var n = function(e, t, i) {
        var n = e(23)
          , o = e(24)
          , a = e(5)
          , r = e(11)
          , c = "";
        i.exports = {
            cmd5xtmts: n.cmd5xtmts,
            cmd5x: n.cmd5x,
            getSrc: function() {
                return c = a.browser.iPad ? r.isTWLocale() ? o.iPad_tw : o.iPad : a.os.mac ? o.Mac : o.phone
            }
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(module, exports, require) {//#23#
    var result = function(require, exports, module) {
        try {
            eval(function(e, t, i, n, o, a) {
                if (o = function(e) {
                    return (e < 62 ? "" : o(parseInt(e / 62))) + ((e %= 62) > 35 ? String.fromCharCode(e + 29) : e.toString(36))
                }
                ,
                !"".replace(/^/, String)) {
                    for (; i--; )
                        a[o(i)] = n[i] || o(i);
                    n = [function(e) {
                        return a[e]
                    }
                    ],
                    o = function() {
                        return "\\w+"
                    }
                    ,
                    i = 1
                }
                for (; i--; )
                    n[i] && (e = e.replace(new RegExp("\\b" + o(i) + "\\b","g"), n[i]));
                return e
            }('2g 2V=(2n(){2g M=cu,N=0,O=0,P=cv,R=2r ct(cs),T=2r 9d(R),U=2r 9j(R),V=2r 3p(R);U[0]=ak;2g S=2r 3p(cp);2g 8Y=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21,5];2M(2g i=8,j=0;i<73;i+=4,j++){S[i]=8Y[j]}2M(2g i=cq,j=48;i<=cr;i++,j++)S[i]=j;2M(2g i=cw,j=97;i<=3n;i++,j++)S[i]=j;V.8D(S,8);2n W(2s,s){2g 2m=2s=3r.cx(2s/(s?s:16))*(s?s:16);2j 2m}N=W(M);O=W(P);2n 2F(2s){2g 2m=O;O=O+2s|0;O=O+15&-16;2j 2m}2n 1w(2s){2g 2m=M;M=M+2s|0;M=M+15&-16;2j 2m}2n 95(2s){2g 2m=N;N=N+2s|0;N=N+15&-16;2j 2m}2n 7V(8y){2g 94=7V;1J(!94.cD){1J(O%3i>0){O=O+3i-O%3i}}2g 2m=O;1J(8y!=0){2g 96=2F(8y);1J(!96)2j-1>>>0}2j 2m}2n X(2y,3u,3x,p){2g z,2s;1J(3d 2y===\'cy\'){z=cz;2s=2y}1L{z=co;2s=2y.2L}2g 8E=3d 3u===\'cn\'?3u:cc;2g 2m;1J(3x==4){2m=p}1L{2m=[3d 7O===\'2n\'?7O:1w,95,1w,2F][3x===al?2:3x](3r.c8(2s,8E?1:3u.2L))}1J(z){2g p=2m,s;1J((2m&3)!=0)2j 2m;s=2m+(2s&~3);2M(;p<s;p+=4){U[p>>2]=0}s=2m+2s;2i(p<s){T[p++>>0]=0}2j 2m}1J(8E===\'a7\'){1J(2y.93||2y.c7){V.8D(2y,2m)}1L{V.8D(2r 3p(2y),2m)}2j 2m}}2n 2R(2E){2D=V;2g 2p,2C,2K,2N,3H,84,2t=\'\';2i(1){2p=2D[2E++];1J(!2p)2j 2t;1J(!(2p&2q)){2t+=2J.2P(2p);1H}2C=2D[2E++]&63;1J((2p&3n)==2T){2t+=2J.2P((2p&31)<<6|2C);1H}2K=2D[2E++]&63;1J((2p&7w)==3n){2p=(2p&15)<<12|2C<<6|2K}1L{2N=2D[2E++]&63;1J((2p&7x)==7w){2p=(2p&7)<<18|2C<<12|2K<<6|2N}1L{3H=2D[2E++]&63;1J((2p&8Z)==7x){2p=(2p&3)<<24|2C<<18|2K<<12|2N<<6|3H}1L{84=2D[2E++]&63;2p=(2p&1)<<30|2C<<24|2K<<18|2N<<12|3H<<6|84}}}1J(2p<2W){2t+=2J.2P(2p)}1L{2g ch=2p-2W;2t+=2J.2P(7S|ch>>10,ck|ch&2S)}}}2n a5(p,l){1J(l===0||!p)2j\'\';2g 7g=0,t,i=0;2i(1){t=V[p+i>>0];7g|=t;1J(t==0&&!l)1K;i++;1J(l&&i==l)1K}1J(!l)l=i;2g 2m=\'\';1J(7g<2q){2g 3I=8U,3o;2i(l>0){3o=2J.2P.ci(2J,V.93(p,p+3r.d1(l,3I)));2m=2m?2m+3o:3o;p+=3I;l-=3I}2j 2m}2j 2R(p)}2n 9f(2t,2o,2l,7d){1J(!(7d>0))2j 0;2g 91=2l,2B=2l+7d-1;2M(2g i=0;i<2t.2L;++i){2g u=2t.39(i);1J(u>=7S&&u<=92)u=2W+((u&2S)<<10)|2t.39(++i)&2S;1J(u<=99){1J(2l>=2B)1K;2o[2l++]=u}1L 1J(u<=9a){1J(2l+1>=2B)1K;2o[2l++]=2T|u>>6;2o[2l++]=2q|u&63}1L 1J(u<=9g){1J(2l+2>=2B)1K;2o[2l++]=3n|u>>12;2o[2l++]=2q|u>>6&63;2o[2l++]=2q|u&63}1L 1J(u<=9h){1J(2l+3>=2B)1K;2o[2l++]=7w|u>>18;2o[2l++]=2q|u>>12&63;2o[2l++]=2q|u>>6&63;2o[2l++]=2q|u&63}1L 1J(u<=9i){1J(2l+4>=2B)1K;2o[2l++]=7x|u>>24;2o[2l++]=2q|u>>18&63;2o[2l++]=2q|u>>12&63;2o[2l++]=2q|u>>6&63;2o[2l++]=2q|u&63}1L{1J(2l+5>=2B)1K;2o[2l++]=8Z|u>>30;2o[2l++]=2q|u>>24&63;2o[2l++]=2q|u>>18&63;2o[2l++]=2q|u>>12&63;2o[2l++]=2q|u>>6&63;2o[2l++]=2q|u&63}}2o[2l]=0;2j 2l-91}2n Y(2t){2g 2v=0;2M(2g i=0;i<2t.2L;++i){2g u=2t.39(i);1J(u>=7S&&u<=92)u=2W+((u&2S)<<10)|2t.39(++i)&2S;1J(u<=99){++2v}1L 1J(u<=9a){2v+=2}1L 1J(u<=9g){2v+=3}1L 1J(u<=9h){2v+=4}1L 1J(u<=9i){2v+=5}1L{2v+=6}}2j 2v}2n a6(7Z,9b,l){2g 2v=l>0?l:Y(7Z)+1;2g 2U=2r d9(2v);2g 9c=9f(7Z,2U,0,2U.2L);1J(9b)2U.2L=9c;2j 2U}2n Z(p){2g 2m=aN.dc()/8V|0;1J(p){U[p>>2]=2m}2j 2m}2g 7R=(2n(){2g a=2r 9d(R);2g b=2r c4(R);2g c=2r 9j(R);2g d=2r 3p(R);2g e=2r d7(R);2g f=2r d5(R);2g g=2r d6(R);2g h=2r cW(R);2g i=N;2g j=P;2g k=cV;2g m=0;2g n=0;2g o=0;2g p=0;2g q=cL,r=cM;2g s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0;2g B=0;2g C=0;2g D=0;2g E=0;2g F=0;2g G=0;2g H=0;2g I=0;2g J=0;2g K=0;2g Q=3r.cK;2g 1f=7V;2g 1Y=Z;2g 1R=0;2n 1U(b){b=b|0;2g d=0,e=0,f=0,g=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,3w=0,$=0,aa=0,ba=0,ca=0,da=0,3h=0,3D=0,3j=0,3e=0,2X=0,2Z=0,2h=0,1f=0,1Y=0,1e=0,1S=0,1d=0,1V=0,1c=0,1T=0,1h=0,1R=0,2Y=0,3J=0,3N=0,3k=0,3v=0,4c=0,3F=0,3a=0,2F=0,1g=0,1P=0,2z=0,1j=0,1U=0,1m=0,1W=0,1k=0,2d=0,1r=0,2f=0,1s=0,2e=0,1q=0,2c=0,3y=0,3G=0,3l=0,1p=0,1X=0,3s=0,$a=0,ab=0,bb=0,cb=0,db=0,3Q=0,3A=0,3T=0,3U=0,3S=0,1a=0,1o=0,1Z=0,1n=0,2a=0,2u=0,3g=0,1Q=0,1I=0,1G=0,1b=0,1i=0,1t=0,1u=0,1l=0,1v=0,1D=0,1B=0,1y=0,1C=0,1w=0,1E=0,1x=0,1z=0,1A=0,1F=0;1Q=i;i=i+cJ|0;1P=1Q+cG|0;1U=1Q+cH|0;1W=1Q+cI|0;q=1Q+cN|0;1R=1Q+cO|0;1Y=1Q+cT|0;1S=1Q+cU|0;1V=1Q+cS|0;1T=1Q+cR|0;2a=1Q+cP|0;1X=1Q+cQ|0;1Z=1Q+dd|0;2d=1Q+by|0;2f=1Q+bi|0;2e=1Q+bh|0;2c=1Q+be|0;o=1Q+bf|0;T=1Q+bl|0;S=1Q+bm|0;R=1Q+br|0;P=1Q+bs|0;$a=1Q+bq|0;3j=1Q+bp|0;bb=1Q+bn|0;3Q=1Q+bo|0;O=1Q+bt|0;N=1Q+bc|0;M=1Q+b4|0;3D=1Q+b6|0;3k=1Q+b7|0;L=1Q+b8|0;B=1Q+b5|0;3h=1Q+bu|0;G=1Q+bN|0;3N=1Q+bP|0;K=1Q+bZ|0;ca=1Q+bL|0;ba=1Q+bB|0;3s=1Q+8U|0;F=1Q+bC|0;3G=1Q+bJ|0;3a=1Q+bK|0;m=1Q+bF|0;E=1Q+bG|0;db=1Q+bE|0;ab=1Q+bH|0;A=1Q+8V|0;z=1Q+bI|0;aa=1Q+bD|0;y=1Q+bx|0;x=1Q+bw|0;$=1Q+bv|0;3w=1Q+bz|0;l=1Q+bA|0;D=1Q+bM|0;3T=1Q+bY|0;cb=1Q+bX|0;Z=1Q+bW|0;3J=1Q+c0|0;Y=1Q+c2|0;w=1Q+c1|0;X=1Q+bV|0;v=1Q+bU|0;3A=1Q+bO|0;u=1Q+bQ|0;3y=1Q+bR|0;3F=1Q+bT|0;W=1Q+bS|0;k=1Q+c3|0;4c=1Q+b9|0;2F=1Q+bd|0;3l=1Q+bg|0;3S=1Q+bk|0;2h=1Q+bj|0;U=1Q+d8|0;t=1Q+dp|0;2Z=1Q+dA|0;I=1Q+dB|0;H=1Q+dz|0;j=1Q+dy|0;C=1Q+dw|0;2X=1Q+dx|0;s=1Q+dC|0;3U=1Q+dD|0;3e=1Q+dI|0;3v=1Q+dG|0;g=1Q+de|0;3g=1Q+dE|0;da=1Q+dH|0;2Y=1Q+dF|0;f=1Q+du|0;r=1Q+dv|0;V=1Q+dj|0;e=1Q+dk|0;d=1Q+di|0;J=1Q+dh|0;2z=1Q+9x|0;2u=1Q;c[J>>2]=2R(33)|0;c[d>>2]=2z;n=0;p=0;1f=0;1e=0;1d=0;1c=0;1h=0;1g=0;1j=0;1m=0;1k=0;1r=0;1s=0;1q=0;1p=0;1a=7G;1o=0;1n=0;a:2i(1){1J((1a|0)>=-8o){1J((1a|0)<4r){1J((1a|0)>=7v){1J((1a|0)>=8B){1J((1a|0)<4A){1J((1a|0)<59){1J((1a|0)<5e){1N(1a|0){1O 8B:1K;1M:{1F=1n;1A=1o;1z=1a;1x=1p;1E=1q;1w=1s;1C=1r;1y=1k;1B=1m;1D=1j;1v=1g;1l=1h;1u=1c;1t=1d;1i=1e;1b=1f;1G=p;1I=n;1n=1F;1o=1A;1a=1z;1p=1x;1q=1E;1s=1w;1r=1C;1k=1y;1m=1B;1j=1D;1g=1v;1h=1l;1c=1u;1d=1t;1e=1i;1f=1b;p=1G;n=1I;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<64?-68:7I;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1J((1a|0)<4J){1N(1a|0){1O 5e:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}a[3h>>0]=(c[1P>>2]|0)<32&1;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=7H;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 4J:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<47?-6N:-7u;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<4j)1J((1a|0)<2k){1N(1a|0){1O 59:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}c[4c>>2]=0-(0-(c[1R>>2]|0)+(0-1));1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-8N;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 2k:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=c[o>>2]|0;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L 1J((1a|0)<7G){1N(1a|0){1O 4j:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<77?7W:-5G;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 7G:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=4h;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<7I){1J((1a|0)<7M){1J((1a|0)<7U)1N(1a|0){1O 4A:1K a;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1N(1a|0){1O 7U:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1l=c[M>>2]|0;1b=c[N>>2]|0;1v=~(~((~(~1l|~-2)&(8W|~8W))-(0-1b))|~-2)&(8X|~8X);1l=(1l^~1)&1l;1u=~1v;1t=~1l;1i=~-3b;c[O>>2]=((1u&-3b|1v&1i)^(1t&-3b|1l&1i)|~(1u|1t)&(-3b|1i))-(0-(~(~1b|~1)&(98|~98)));1b=((c[1P>>2]|0)%4|0)-9X+8+9X|0;1b=c[16+(1b<<2)>>2]|0;c[3Q>>2]=c[O>>2]<<1b;c[bb>>2]=32+(0-1b);1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-4q;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1J((1a|0)<66){1N(1a|0){1O 7M:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}a[3e>>0]=(c[1P>>2]|0)<24&1;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=4o;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 66:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<63?-6q:-5s;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<6z)1J((1a|0)<5m){1N(1a|0){1O 7I:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<65?-6t:8l;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 5m:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<38?7F:-4C;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<7t){1N(1a|0){1O 6z:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==43?-6P:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 7t:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}c[v>>2]=(c[1W>>2]|0)+9K+16-9K;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=6s;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<7p){1J((1a|0)<8F){1J((1a|0)<7H){1N(1a|0){1O 7v:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==1?-5J:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1J((1a|0)<6K){1N(1a|0){1O 7H:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=a[3h>>0]&1?8v:5h;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 6K:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}a[$>>0]=(c[1P>>2]|0)<8&1;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=8M;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<8L)1J((1a|0)<4g){1N(1a|0){1O 8F:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}c[G>>2]=2z+(c[3N>>2]<<2);1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-8z;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 4g:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<25?-6R:-7i;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<5c){1N(1a|0){1O 8L:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=29;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O 5c:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=c[1P>>2]<<2;1b=(1b^~28)&1b;c[3U>>2]=c[1V>>2]>>(4&~1b|1b&~4);1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=8A;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<4p)1J((1a|0)<4f)1J((1a|0)<8w){1N(1a|0){1O 7p:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=35;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O 8w:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==58?-4m:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<6k){1N(1a|0){1O 4f:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}c[u>>2]=0-(0-(c[3y>>2]|0)+(0-14));c[3A>>2]=0-(0-(c[1U>>2]|0)+(0-32))>>2;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-5z;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 6k:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<26?-4y:4w;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<7T)1J((1a|0)<7E){1N(1a|0){1O 4p:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=a[2Z>>0]&1?-5n:-5d;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 7E:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=c[3T>>2]|0;c[D>>2]=2u+(1b<<2);c[l>>2]=c[c[D>>2]>>2];1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=7z;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<5B){1N(1a|0){1O 7T:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1d=c[db>>2]|0;1c=c[m>>2]|0;1e=~1c;1f=~1d;n=~3C;c[c[E>>2]>>2]=(1e&3C|1c&n)^(1f&3C|1d&n)|~(1e|1f)&(3C|n);n=29;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=(c[1P>>2]|0)+ -9L+1+9L|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=(c[1X>>2]|0)-(0-1)|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O 5B:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=c[1P>>2]|0;c[2z+(1b<<2)>>2]=~~+h[3l>>3]>>>0;c[2F>>2]=(c[1P>>2]|0)+ -9M+1+9M;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=7N;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<7f){1J((1a|0)<5y){1J((1a|0)<8C){1J((1a|0)<7F){1N(1a|0){1O-8o:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<15?-5P:7X;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1J((1a|0)<6B){1N(1a|0){1O 7F:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==36?7C:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 6B:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=a[V>>0]&1?89:5j;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<5W)1J((1a|0)<7z){1N(1a|0){1O 8C:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}c[y>>2]=0-(0-(c[x>>2]|0)+(0-34));1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=7A;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 7z:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1d=c[cb>>2]|0;1c=c[l>>2]|0;1e=~1c;1f=~1d;n=~3V;c[c[D>>2]>>2]=(1e&3V|1c&n)^(1f&3V|1d&n)|~(1e|1f)&(3V|n);n=38;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=(c[1R>>2]|0)-(0-1)|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L 1J((1a|0)<5O){1N(1a|0){1O 5W:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=81;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O 5O:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=36;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}}1J((1a|0)<8G)1J((1a|0)<7A)1J((1a|0)<5x){1N(1a|0){1O 5y:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}c[3a>>2]=(c[1R>>2]|0)+9J+1-9J;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=8t;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 5x:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}c[3G>>2]=((c[1X>>2]|0)%4|0)<<3;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-7s;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<7C){1N(1a|0){1O 7A:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=26;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=(c[y>>2]|0)%32|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O 7C:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=c[1R>>2]|0;c[cb>>2]=a[b+1b>>0]<<(((c[1R>>2]|0)%4|0)<<3);c[3T>>2]=c[1R>>2]>>2;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=7E;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<7W)1J((1a|0)<7N){1N(1a|0){1O 8G:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==71?7M:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 7N:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=60;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[2F>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L 1J((1a|0)<4x){1N(1a|0){1O 7W:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==75?-5Z:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 4x:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=49;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}}1L{1J((1a|0)<5A){1J((1a|0)<7X){1J((1a|0)<83){1N(1a|0){1O 7f:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1c=c[16+(c[3k>>2]<<2)>>2]|0;1h=c[L>>2]<<1c;1c=(c[L>>2]|0)>>>(32+ -9I-1c+9I|0);1j=~1c;1g=~1h;1e=~-3M;1e=(1j&-3M|1c&1e)^(1g&-3M|1h&1e)|~(1j|1g)&(-3M|1e);1g=c[1S>>2]|0;1j=~(~(((1g^~-2)&1g)+ -9F+1e+9F)|~-2)&(9G|~9G);1g=~(~1g|~1)&(~-9H|-9H);1h=~1j;1c=~1g;1d=~44;n=11;p=+h[q>>3];1f=c[1T>>2]|0;1e=0-(0-((1h&44|1j&1d)^(1c&44|1g&1d)|~(1h|1c)&(44|1d))+(0-((1e^~1)&1e)))|0;1d=c[1S>>2]|0;1c=c[1V>>2]|0;1h=c[1R>>2]|0;1g=(c[1P>>2]|0)-(0-1)|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1J((1a|0)<6l){1N(1a|0){1O 83:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==3?-6T:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 6l:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=41;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}}1J((1a|0)<70)1J((1a|0)<8Q){1N(1a|0){1O 7X:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==15?8q:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 8Q:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}a[3w>>0]=(c[1R>>2]|0)<4&1;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-8S;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<88){1N(1a|0){1O 70:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=55;p=+h[3S>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O 88:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1v=c[1V>>2]|0;1b=c[1S>>2]|0;1v=1v&~1b|1b&~1v;1b=c[1T>>2]|0;1l=~7Y;1l=(7Y&~1v|1v&1l)^(~1b&7Y|1b&1l);1b=c[1Y>>2]|0;1v=~(~((~(~1b|~-2)&(~-9N|-9N))-(0-1l))|~-2)&(~-9O|-9O);1b=(1b^~1)&1b;c[M>>2]=(1v&1b|1v^1b)-(0-((1l^~1)&1l));1l=c[1P>>2]|0;1l=c[2z+(1l<<2)>>2]|0;1b=((((c[1P>>2]|0)*3|0)-(0-5)|0)%16|0)+ -9U+(c[1R>>2]|0)+9U|0;1b=c[2u+(1b<<2)>>2]|0;1v=~(~(1b-(0-(~(~1l|~-2)&(~-9V|-9V))))|~-2)&(~-9W|-9W);1l=(1l^~1)&1l;1u=~1v;1t=~1l;1i=~-3P;c[N>>2]=((1u&-3P|1v&1i)^(1t&-3P|1l&1i)|~(1u|1t)&(-3P|1i))-(0-((1b^~1)&1b));1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=7U;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<8h)1J((1a|0)<7a)1J((1a|0)<4Z){1N(1a|0){1O 5A:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}c[db>>2]=c[1Z>>2]<<(c[ab>>2]<<3);1b=c[1X>>2]>>2;c[E>>2]=2u+(1b<<2);c[m>>2]=c[c[E>>2]>>2];1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=7T;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 4Z:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=71;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L 1J((1a|0)<7c){1N(1a|0){1O 7a:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=23;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O 7c:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1A=c[1T>>2]|0;1x=~7P;1z=c[1V>>2]|0;1z=(1z^~((7P&~1A|1A&1x)^(~-1&7P|-1&1x)))&1z;1x=c[B>>2]|0;1A=~1x;1t=~1z;1l=~-4d;1l=(1A&-4d|1x&1l)^(1t&-4d|1z&1l)|~(1A|1t)&(-4d|1l);1t=c[1Y>>2]|0;1A=~(~((~(~1t|~-2)&(~-9T|-9T))+9S+1l-9S)|~-2)&(~-9P|-9P);1z=~(~1t|~1)&(~-9Q|-9Q);1x=~1A;1E=~1z;1w=~-3f;1i=c[1P>>2]|0;1i=c[2z+(1i<<2)>>2]|0;1b=0-(0-((((c[1P>>2]|0)*5|0)-(0-1)|0)%16|0)+(0-(c[1R>>2]|0)))|0;1b=c[2u+(1b<<2)>>2]|0;1y=~(~(1b+ -9E+(~(~1i|~-2)&(~-9R|-9R))+9E)|~-2)&(~-9D|-9D);1B=~(~1i|~1)&(~-9q|-9q);1D=~1y;1v=~1B;1u=~3m;1C=(1b^~1)&1b;1w=~(~(((1x&-3f|1A&1w)^(1E&-3f|1z&1w)|~(1x|1E)&(-3f|1w))+9s+(~(~1l|~1)&(9r|~9r))-9s)|~-2)&(9p|~9p);1u=(1w&1C|1w^1C)+9o+((1D&3m|1y&1u)^(1v&3m|1B&1u)|~(1D|1v)&(3m|1u))+ -9o|0;1u=(1u^~-2)&1u;1t=1l+9l+1t-9l|0;1t=(1t^~1)&1t;c[L>>2]=(1u&1t|1u^1t)+9n+(~(~(1b+ -9k+1i+9k)|~1)&(9m|~9m))-9n;1i=0-(0-((c[1P>>2]|0)%4|0)+(0-4))|0;1b=3k;c[1b>>2]=1i;c[1b+4>>2]=((1i|0)<0)<<31>>31;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=7f;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<8j)1J((1a|0)<6I){1N(1a|0){1O 8h:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}c[B>>2]=~(~c[1S>>2]|~c[1T>>2])&(~-9t|-9t);1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=7c;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 6I:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}h[3S>>3]=0- +h[q>>3];1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=70;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<4k){1N(1a|0){1O 8j:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==67?-5X:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 4k:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=63;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}}}1J((1a|0)<5Y)1J((1a|0)<5k){1J((1a|0)<5V){1J((1a|0)<5M){1J((1a|0)<5l){1N(1a|0){1O 4r:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}h[U>>3]=+Q(+(+(c[t>>2]|0)));1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-5N;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1J((1a|0)<6b){1N(1a|0){1O 5l:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<35?-8R:-5u;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 6b:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==60?-4Y:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<5L)1J((1a|0)<6f){1N(1a|0){1O 5M:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}a[W>>0]=(a[k>>0]|0)!=0&1;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-4u;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 6f:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=48;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L 1J((1a|0)<5C){1N(1a|0){1O 5L:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1i=c[1S>>2]|0;1i=(1i^~c[1V>>2])&1i;1v=c[1S>>2]|0;1l=~7k;1l=~(~c[1T>>2]|~((7k&~1v|1v&1l)^(~-1&7k|-1&1l)))&(~-9u|-9u);1i=1l&1i|1l^1i;1l=c[1Y>>2]|0;1v=~(~(((1l^~-2)&1l)+9A+1i+ -9A)|~-2)&(~-9B|-9B);1l=(1l^~1)&1l;1u=~1v;1t=~1l;1b=~42;c[K>>2]=((1u&42|1v&1b)^(1t&42|1l&1b)|~(1u|1t)&(42|1b))+ -9C+((1i^~1)&1i)+9C;1i=c[1P>>2]|0;1b=3N;c[1b>>2]=1i;c[1b+4>>2]=((1i|0)<0)<<31>>31;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=8F;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 5C:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==17?-6S:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<7j)1J((1a|0)<4t)1J((1a|0)<4H){1N(1a|0){1O 5V:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}c[x>>2]=((c[1P>>2]|0)*23|0)-9z+((c[1R>>2]|0)*37|0)+9z;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=8C;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 4H:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<9?-6J:-87;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<85){1N(1a|0){1O 4t:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}a[aa>>0]=(c[1Z>>2]|0)<10&1;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=8a;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 85:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<69?8B:-6L;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<8A)1J((1a|0)<4V){1N(1a|0){1O 7j:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}c[c[F>>2]>>2]=c[3s>>2];n=c[1W>>2]|0;c[2u+(n<<2)>>2]=(c[1U>>2]<<3)+9y+2G-9y;n=19;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O 4V:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<58?-5p:8w;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<5b){1N(1a|0){1O 8A:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=c[3U>>2]|0;c[s>>2]=3E+((1b^-16)&1b);1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-7e;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 5b:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<55?-5H:4T;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1L{1J((1a|0)<8v){1J((1a|0)<5a){1J((1a|0)<8c){1N(1a|0){1O 5k:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=69;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1J((1a|0)<8T){1N(1a|0){1O 8c:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==49?-7b:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 8T:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=c[1P>>2]|0;1b=(1b^~7)&1b;c[3g>>2]=1&~1b|1b&~1;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-6j;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<8r)1J((1a|0)<8s){1N(1a|0){1O 5a:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==31?8L:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 8s:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=64;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L 1J((1a|0)<8M){1N(1a|0){1O 8r:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=45;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[w>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O 8M:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=a[$>>0]&1?5f:-4I;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<8q)1J((1a|0)<89)1J((1a|0)<8K){1N(1a|0){1O 8v:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=9;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O 8K:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<60?-53:85;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<5g){1N(1a|0){1O 89:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=77;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O 5g:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}a[c[H>>2]>>0]=a[j>>0]|0;n=67;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=(c[1P>>2]|0)-(0-1)|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L 1J((1a|0)<6m)1J((1a|0)<6V){1N(1a|0){1O 8q:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}a[ca>>0]=(c[1P>>2]|0)<16&1;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-4E;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 6V:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}c[w>>2]=(c[1W>>2]|0)-(0-16);1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=8r;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<7l){1N(1a|0){1O 6m:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=40;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O 7l:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=43;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}}1L 1J((1a|0)<4h){1J((1a|0)<8H){1J((1a|0)<8l){1J((1a|0)<8n){1N(1a|0){1O 5Y:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=a[2X>>0]&1?-4W:8s;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1J((1a|0)<6n){1N(1a|0){1O 8n:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<13?-5i:-8o;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 6n:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}c[2u+(c[3J>>2]<<2)>>2]=0;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-6p;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<5Q)1J((1a|0)<8t){1N(1a|0){1O 8l:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<67?-5r:8j;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 8t:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=33;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[3a>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L 1J((1a|0)<8f){1N(1a|0){1O 5Q:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==81?-6i:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 8f:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=21;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}}1J((1a|0)<6c)1J((1a|0)<8a)1J((1a|0)<4S){1N(1a|0){1O 8H:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=31;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O 4S:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==5?88:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<5q){1N(1a|0){1O 8a:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=a[aa>>0]&1?-6r:-6U;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 5q:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<73?8G:-8P;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<6D)1J((1a|0)<4w){1N(1a|0){1O 6c:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==19?-4B:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 4w:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<27?4t:-6A;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<6a){1N(1a|0){1O 6D:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}a[3D>>0]=(c[1P>>2]|0)<48&1;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-5v;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 6a:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=a[da>>0]&1?-6Q:4Z;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1L{1J((1a|0)<5f){1J((1a|0)<8b){1J((1a|0)<4o){1N(1a|0){1O 4h:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}7y(c[d>>2]|0,0,2G)|0;c[e>>2]=2u;7y(c[e>>2]|0,0,9x)|0;n=62;p=0;1f=0;1e=0;1d=0;1c=0;1h=0;1g=0;1j=0;1m=0;1k=0;1r=0;1s=0;1q=0;1p=0;1a=-2b;1o=0;1n=0;1H}1J((1a|0)<4N){1N(1a|0){1O 4o:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=a[3e>>0]&1?5k:-6o;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 4N:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==52?59:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<5h)1J((1a|0)<5j){1N(1a|0){1O 8b:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1l=c[2f>>2]|0;1i=c[1S>>2]|0;1v=((1l^~-2)&1l)-(0-1i)|0;1v=(1v^~-2)&1v;1l=(1l^~1)&1l;1u=~1v;1t=~1l;1b=~-3R;c[S>>2]=((1u&-3R|1v&1b)^(1t&-3R|1l&1b)|~(1u|1t)&(-3R|1b))-(0-((1i^~1)&1i));1i=c[2e>>2]|0;1b=c[1V>>2]|0;1t=((1i^~-2)&1i)+9w+1b+ -9w|0;1t=(1t^~-2)&1t;1i=~(~1i|~1)&(~-9v|-9v);c[T>>2]=0-(0-(1t&1i|1t^1i)+(0-((1b^~1)&1b)));1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-6C;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 5j:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=75;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L 1J((1a|0)<5R){1N(1a|0){1O 5h:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=7;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O 5R:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<11?-6w:-8k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<6v)1J((1a|0)<7n)1J((1a|0)<5F){1N(1a|0){1O 5f:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=27;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O 5F:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<54?4N:-6O;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<6W){1N(1a|0){1O 7n:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=55;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O 6W:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=46;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L 1J((1a|0)<6s)1J((1a|0)<4T){1N(1a|0){1O 6v:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<7?4S:4H;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 4T:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<57?-6d:4V;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<4D){1N(1a|0){1O 6s:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}a[X>>0]=(c[v>>2]|0)>=(c[1X>>2]|0)&1;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-6Y;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O 4D:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=0;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}}}1J((1a|0)<-4F)1J((1a|0)<-5K)1J((1a|0)<-61){1J((1a|0)<-6Q){1J((1a|0)<-6i){1J((1a|0)<-6r){1N(1a|0){1O-9e:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=5;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1J((1a|0)<-6w){1N(1a|0){1O-6r:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=25;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O-6w:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<5?-4Q:6v;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<-5S)1J((1a|0)<-4M){1N(1a|0){1O-6i:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=79;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O-4M:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=1;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L 1J((1a|0)<-6O){1N(1a|0){1O-5S:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<31?6k:-5w;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-6O:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=52;p=+h[q>>3];1f=dg;1e=-dl;1d=-dm;1c=ds;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}}1J((1a|0)<-6G)1J((1a|0)<-6S)1J((1a|0)<-6T){1N(1a|0){1O-6Q:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=73;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O-6T:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}a[3j>>0]=(c[1P>>2]|0)<64&1;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-4X;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<-6R){1N(1a|0){1O-6S:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=15;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[1Y>>2]|0;1r=c[1S>>2]|0;1s=c[1V>>2]|0;1q=c[1T>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O-6R:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}c[A>>2]=(c[1Z>>2]|0)-(0-90);1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-8I;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<-6A)1J((1a|0)<-6J){1N(1a|0){1O-6G:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==29?6K:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-6J:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==7?6D:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<-6g){1N(1a|0){1O-6A:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<29?-5U:-6G;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-6g:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<41?-5o:-5E;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1L{1J((1a|0)<-5n){1J((1a|0)<-5p){1J((1a|0)<-4e){1N(1a|0){1O-61:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=17;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1J((1a|0)<-5z){1N(1a|0){1O-4e:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}c[ab>>2]=(c[1X>>2]|0)%4|0;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=5A;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-5z:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=47;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[u>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[3A>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}}1J((1a|0)<-5o)1J((1a|0)<-5T){1N(1a|0){1O-5p:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}a[2h>>0]=+h[q>>3]<0&1;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-82;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-5T:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==79?-6E:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<-6X){1N(1a|0){1O-5o:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=38;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O-6X:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=45;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}}1J((1a|0)<-5w)1J((1a|0)<-4v)1J((1a|0)<-5r){1N(1a|0){1O-5n:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=58;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O-5r:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==65?-6F:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<-5s){1N(1a|0){1O-4v:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=11;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O-5s:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-4G;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<-5u)1J((1a|0)<-5v){1N(1a|0){1O-5w:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<36?-50:-6e;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-5v:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=a[3D>>0]&1?-9e:-4K;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<-5Z){1N(1a|0){1O-5u:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=33;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1R>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O-5Z:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}a[da>>0]=(c[1P>>2]|0)<16&1;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=6a;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1L 1J((1a|0)<-5G){1J((1a|0)<-68){1J((1a|0)<-5P){1J((1a|0)<-8J){1N(1a|0){1O-5K:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=a[Z>>0]&1?5O:7p;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1J((1a|0)<-4i){1N(1a|0){1O-8J:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<23?5R:-5S;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-4i:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<81?-5T:5Q;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<-5N)1J((1a|0)<-5I){1N(1a|0){1O-5P:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==13?5L:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-5I:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=c[2a>>2]|0;a[k>>0]=a[b+1b>>0]|0;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=5M;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<-5U){1N(1a|0){1O-5N:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=57;p=+h[U>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O-5U:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==27?5V:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<-4R)1J((1a|0)<-7o)1J((1a|0)<-4n){1N(1a|0){1O-68:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<62?6b:66;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-4n:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=a[ba>>0]&1?-61:5W;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<-5X){1N(1a|0){1O-7o:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=56;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O-5X:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}a[2X>>0]=(c[1P>>2]|0)<32&1;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=5Y;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<-6M)1J((1a|0)<-5J){1N(1a|0){1O-4R:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}a[Z>>0]=(c[1R>>2]|0)<(c[1U>>2]|0)&1;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-5K;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-5J:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1w=c[1T>>2]|0;1w=~1w|0|1w&~-1;1i=c[1S>>2]|0;1b=~1i;1t=~1w;1u=~3L;1u=(1b&3L|1i&1u)^(1t&3L|1w&1u)|~(1b|1t)&(3L|1u);1t=c[1V>>2]|0;1b=~-5t;1b=(~1t&-5t|1t&1b)^(~1u&-5t|1u&1b);1u=c[1Y>>2]|0;1t=(~(~1u|~-2)&(b3|~b3))+ -aX+1b+aX|0;1t=(1t^~-2)&1t;1w=~(~1u|~1)&(~-aP|-aP);1w=(1t&1w|1t^1w)-aU+(~(~1b|~1)&(aO|~aO))+aU|0;1t=c[1P>>2]|0;1t=c[2z+(1t<<2)>>2]|0;1i=(((c[1P>>2]|0)*7|0)%16|0)-aS+(c[1R>>2]|0)+aS|0;1i=c[2u+(1i<<2)>>2]|0;1y=1i+aR+((1t^~-2)&1t)+ -aR|0;1y=(1y^~-2)&1y;1B=(1t^~1)&1t;1D=~1y;1v=~1B;1l=~3z;1C=~(~1i|~1)&(b2|~b2);1w=(1w^~-2)&1w;1l=(1w&1C|1w^1C)-(0-((1D&3z|1y&1l)^(1v&3z|1B&1l)|~(1D|1v)&(3z|1l)))|0;1l=(1l^~-2)&1l;1u=1b-b0+1u+b0|0;1u=(1u^~1)&1u;1t=0-(0-1i+(0-1t))|0;1t=(1l&1u|1l^1u)-b1+((1t^~1)&1t)+b1|0;1u=0-(0-((c[1P>>2]|0)%4|0)+(0-12))|0;1u=c[16+(1u<<2)>>2]|0;1l=1t<<1u;1u=1t>>>(32-aV-1u+aV|0);1t=~1l;1i=~1u;1b=~3B;c[$a>>2]=(1t&3B|1l&1b)^(1i&3B|1u&1b)|~(1t|1i)&(3B|1b);1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-4z;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<-6u){1N(1a|0){1O-6M:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<71?-4U:5q;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-6u:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<22?5x:5y;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1L{1J((1a|0)<-4L){1J((1a|0)<-6H){1J((1a|0)<-5H){1N(1a|0){1O-5G:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==77?-8g:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1J((1a|0)<-5E){1N(1a|0){1O-5H:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<52?-5I:5F;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-5E:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==41?-6h:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<-6d)1J((1a|0)<-6x){1N(1a|0){1O-6H:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}h[3l>>3]=+h[q>>3]*dt;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=5B;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-6x:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<19?5C:6c;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<-6F){1N(1a|0){1O-6d:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<56?-6H:6I;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-6F:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=c[1P>>2]|0;c[C>>2]=(1b^~7)&1b;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-4P;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<-6L)1J((1a|0)<-6C)1J((1a|0)<-6E){1N(1a|0){1O-4L:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==0?-8m:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-6E:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}a[V>>0]=(c[1P>>2]|0)<8&1;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=6B;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<-6P){1N(1a|0){1O-6C:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1h=c[2c>>2]|0;1c=c[1T>>2]|0;1g=(~(~1h|~-2)&(9Y|~9Y))+aW+1c+ -aW|0;1g=(1g^~-2)&1g;1h=~(~1h|~1)&(~-aQ|-aQ);n=19;p=+h[q>>3];1f=c[R>>2]|0;1e=c[S>>2]|0;1d=c[T>>2]|0;1c=(1g&1h|1g^1h)+aT+((1c^~1)&1c)-aT|0;1h=0-(0-(c[1R>>2]|0)+(0-16))|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O-6P:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}a[Y>>0]=(c[1R>>2]|0)<(c[1X>>2]|0)&1;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-6y;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<-6y)1J((1a|0)<-6N){1N(1a|0){1O-6L:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<75?-6M:-4s;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-6N:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<45?6z:-7m;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<-6j){1N(1a|0){1O-6y:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=a[Y>>0]&1?6l:6m;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-6j:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1i=c[1S>>2]>>(c[3g>>2]<<2);a[g>>0]=a[3E+((1i^-16)&1i)>>0]|0;1i=c[1P>>2]|0;1b=3v;c[1b>>2]=1i;c[1b+4>>2]=((1i|0)<0)<<31>>31;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-6Z;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1L 1J((1a|0)<-50)1J((1a|0)<-4s){1J((1a|0)<-6q){1J((1a|0)<-6o){1J((1a|0)<-6e){1N(1a|0){1O-4F:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=13;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1J((1a|0)<-6h){1N(1a|0){1O-6e:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<40?5m:-6g;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-6h:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1i=c[1R>>2]|0;1b=3J;c[1b>>2]=1i;c[1b+4>>2]=((1i|0)<0)<<31>>31;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=6n;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<-6t)1J((1a|0)<-8u){1N(1a|0){1O-6o:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=67;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O-8u:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<21?-6x:-6u;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<-6p){1N(1a|0){1O-6t:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}c[I>>2]=(c[J>>2]|0)+32;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-4l;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-6p:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=43;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=0-(0-(c[1R>>2]|0)+(0-1))|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}}1J((1a|0)<-4W)1J((1a|0)<-6U)1J((1a|0)<-7h){1N(1a|0){1O-6q:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=60;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=0;1g=0;1j=0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O-7h:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=52;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[3F>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L 1J((1a|0)<-4y){1N(1a|0){1O-6U:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=24;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O-4y:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<24?-4e:4g;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<-4X)1J((1a|0)<-4U){1N(1a|0){1O-4W:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=65;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O-4U:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==69?5c:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<-4l){1N(1a|0){1O-4X:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=a[3j>>0]&1?-4M:4D;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-4l:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}a[c[I>>2]>>0]=0;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=4k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1L{1J((1a|0)<-4K){1J((1a|0)<-53){1J((1a|0)<-4q){1N(1a|0){1O-4s:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<79?4j:-4i;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1J((1a|0)<-5d){1N(1a|0){1O-4q:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=(c[O>>2]|0)>>>(c[bb>>2]|0);1f=c[3Q>>2]|0;1c=~1f;1d=~n;1e=~3K;1e=(1c&3K|1f&1e)^(1d&3K|n&1e)|~(1c|1d)&(3K|1e);1d=c[1S>>2]|0;1c=0-(0-(~(~1d|~-2)&(aY|~aY))+(0-1e))|0;1c=(1c^~-2)&1c;1d=(1d^~1)&1d;n=7;p=+h[q>>3];1f=c[1T>>2]|0;1e=(1c&1d|1c^1d)+aL+(~(~1e|~1)&(~-aZ|-aZ))+ -aL|0;1d=c[1S>>2]|0;1c=c[1V>>2]|0;1h=c[1R>>2]|0;1g=(c[1P>>2]|0)+ag+1+ -ag|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O-5d:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=54;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}}1J((1a|0)<-4E)1J((1a|0)<-4m){1N(1a|0){1O-53:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<51?4J:5b;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-4m:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}c[t>>2]=0-(0-(c[1P>>2]|0)+(0-1));1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=4r;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<-4z){1N(1a|0){1O-4E:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=a[ca>>0]&1?-4F:-4v;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-4z:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=c[$a>>2]|0;1i=c[1S>>2]|0;1t=~(~(((1i^~-2)&1i)+af+1b+ -af)|~-2)&(~-ae|-ae);1i=~(~1i|~1)&(~-ad|-ad);c[P>>2]=(1t&1i|1t^1i)+ -ah+((1b^~1)&1b)+ah;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-8i;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<-4C)1J((1a|0)<-8e)1J((1a|0)<-4Y){1N(1a|0){1O-4K:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=3;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O-4Y:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}a[2Z>>0]=(c[1P>>2]|0)<64&1;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=4p;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<-4B){1N(1a|0){1O-8e:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}c[3y>>2]=(c[1U>>2]|0)-(0-40)>>6<<4;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=4f;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-4B:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}a[ba>>0]=(c[1R>>2]|0)<(c[1W>>2]|0)&1;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-4n;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<-4P)1J((1a|0)<-4Q){1N(1a|0){1O-4C:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==38?-4R:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-4Q:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<1?-4L:-7q;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<-5i){1N(1a|0){1O-4P:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1i=c[C>>2]<<2;1b=~4O;1b=c[1T>>2]>>((4O&~1i|1i&1b)^(~4&4O|4&1b));a[j>>0]=a[3E+((1b^-16)&1b)>>0]|0;1b=c[1P>>2]|0;c[H>>2]=(c[J>>2]|0)+1b;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=5g;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-5i:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==11?5e:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1L 1J((1a|0)<-8O){1J((1a|0)<-87){1J((1a|0)<-4u){1J((1a|0)<-4I){1N(1a|0){1O-50:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<33?5a:5l;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1J((1a|0)<-4G){1N(1a|0){1O-4I:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=22;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O-4G:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=4A;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<-8S)1J((1a|0)<-7e){1N(1a|0){1O-4u:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=a[W>>0]&1?4x:6f;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-7e:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=c[1P>>2]|0;a[(c[J>>2]|0)+n>>0]=a[c[s>>2]>>0]|0;n=71;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=(c[1P>>2]|0)-(0-1)|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L 1J((1a|0)<-8g){1N(1a|0){1O-8S:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=a[3w>>0]&1?8H:8f;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-8g:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=~(~(c[1P>>2]<<2)|~28)&(aj|~aj);c[r>>2]=3E+~(~(c[1Y>>2]>>(4&~1b|1b&~4))|-16);1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-8p;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<-8m)1J((1a|0)<-8p)1J((1a|0)<-8i){1N(1a|0){1O-87:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==9?8h:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-8i:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=3;p=+h[q>>3];1f=c[1T>>2]|0;1e=c[P>>2]|0;1d=c[1S>>2]|0;1c=c[1V>>2]|0;1h=c[1R>>2]|0;1g=(c[1P>>2]|0)+a9+1+ -a9|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L 1J((1a|0)<-8k){1N(1a|0){1O-8p:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}a[f>>0]=a[c[r>>2]>>0]|0;1i=c[1P>>2]|0;1b=2Y;c[1b>>2]=1i;c[1b+4>>2]=((1i|0)<0)<<31>>31;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-8d;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-8k:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<17?8n:-8u;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<-8d)1J((1a|0)<-7r){1N(1a|0){1O-8m:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1l=c[2d>>2]|0;1b=c[1Y>>2]|0;1v=~(~((~(~1l|~-2)&(a2|~a2))-a1+1b+a1)|~-2)&(~-a0|-a0);1l=~(~1l|~1)&(9Z|~9Z);1u=~1v;1t=~1l;1i=~3t;c[R>>2]=((1u&3t|1v&1i)^(1t&3t|1l&1i)|~(1u|1t)&(3t|1i))+a4+(~(~1b|~1)&(a3|~a3))-a4;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=8b;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-7r:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<49?-8e:8c;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<-8N){1N(1a|0){1O-8d:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}a[(c[J>>2]|0)+(c[2Y>>2]|0)>>0]=a[f>>0]|0;n=79;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=(c[1P>>2]|0)+a8+1-a8|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O-8N:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=51;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[4c>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[1R>>2]|0;1H}}1L{1J((1a|0)<-7m){1J((1a|0)<-2b){1J((1a|0)<-8P){1N(1a|0){1O-8O:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<43?-8J:8K;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1J((1a|0)<-8R){1N(1a|0){1O-8P:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==73?8T:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-8R:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)==33?8Q:2k;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<-8z)1J((1a|0)<-8I){1N(1a|0){1O-2b:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}c[o>>2]=n;c[2c>>2]=1q;c[2e>>2]=1s;c[2f>>2]=1r;c[2d>>2]=1k;c[1Z>>2]=1o;c[1X>>2]=1p;c[2a>>2]=1n;c[1T>>2]=1c;c[1V>>2]=1d;c[1S>>2]=1e;c[1Y>>2]=1f;c[1R>>2]=1h;h[q>>3]=p;c[1W>>2]=1m;c[1U>>2]=1j;c[1P>>2]=1g;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-8O;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-8I:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}n=23;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=c[1P>>2]|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[A>>2]|0;1n=c[2a>>2]|0;1H}1L 1J((1a|0)<-82){1N(1a|0){1O-8z:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1c=c[c[G>>2]>>2]|0;n=((c[1P>>2]|0)%16|0)-an+(c[1R>>2]|0)+an|0;n=c[2u+(n<<2)>>2]|0;1j=~(~(n+ -aE+(~(~1c|~-2)&(~-ao|-ao))+aE)|~-2)&(aD|~aD);1g=~(~1c|~1)&(~-aC|-aC);1h=~1j;1e=~1g;1d=~3O;1m=~(~n|~1)&(aB|~aB);1f=c[K>>2]|0;1k=~(~1f|~-2)&(~-aF|-aF);1d=0-(0-(1k&1m|1k^1m)+(0-((1h&3O|1j&1d)^(1e&3O|1g&1d)|~(1h|1e)&(3O|1d))))|0;1d=(1d^~-2)&1d;1f=~(~1f|~1)&(aG|~aG);1c=0-(0-(1d&1f|1d^1f)+(0-(~(~(n-(0-1c))|~1)&(aK|~aK))))|0;n=(c[1P>>2]|0)%4|0;n=c[16+(n<<2)>>2]|0;1f=1c<<n;n=1c>>>(32+aJ-n+ -aJ|0);1c=~1f;1d=~n;1e=~4a;1e=(1c&4a|1f&1e)^(1d&4a|n&1e)|~(1c|1d)&(4a|1e);1d=c[1S>>2]|0;1c=~(~(1e-(0-((1d^~-2)&1d)))|~-2)&(aI|~aI);1d=(1d^~1)&1d;n=15;p=+h[q>>3];1f=c[1T>>2]|0;1e=(1c&1d|1c^1d)-(0-((1e^~1)&1e))|0;1d=c[1S>>2]|0;1c=c[1V>>2]|0;1h=c[1R>>2]|0;1g=(c[1P>>2]|0)+ -aH+1+aH|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L{1N(1a|0){1O-82:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=a[2h>>0]&1?-7o:7n;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}1J((1a|0)<-7i)1J((1a|0)<-7u)1J((1a|0)<-7q){1N(1a|0){1O-7m:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<46?7l:6V;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-7q:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<3?7v:83;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<-7s){1N(1a|0){1O-7u:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=(c[o>>2]|0)<48?7t:-7r;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-7s:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1u=2q<<c[3G>>2];1l=c[1X>>2]>>2;c[F>>2]=2u+(1l<<2);1l=c[c[F>>2]>>2]|0;1t=~1l;1i=~1u;1b=~3q;c[3s>>2]=(1t&3q|1l&1b)^(1i&3q|1u&1b)|~(1t|1i)&(3q|1b);1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=7j;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L 1J((1a|0)<-6Y)1J((1a|0)<-6Z){1N(1a|0){1O-7i:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}c[z>>2]=(c[1Z>>2]|0)+az+49-az;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=7a;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-6Z:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}a[(c[J>>2]|0)+(c[3v>>2]|0)>>0]=a[g>>0]|0;n=75;p=+h[q>>3];1f=c[1Y>>2]|0;1e=c[1S>>2]|0;1d=c[1V>>2]|0;1c=c[1T>>2]|0;1h=c[1R>>2]|0;1g=0-(0-(c[1P>>2]|0)+(0-1))|0;1j=c[1U>>2]|0;1m=c[1W>>2]|0;1k=c[2d>>2]|0;1r=c[2f>>2]|0;1s=c[2e>>2]|0;1q=c[2c>>2]|0;1p=c[1X>>2]|0;1a=-2b;1o=c[1Z>>2]|0;1n=c[2a>>2]|0;1H}1L 1J((1a|0)<-7b){1N(1a|0){1O-6Y:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=a[X>>0]&1?6W:-6X;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}1L{1N(1a|0){1O-7b:1K;1M:{1I=1n;1b=1o;1i=1a;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1n=1I;1o=1b;1a=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H a}}c[3F>>2]=(c[1U>>2]|0)+ -as+1+as;1b=1n;1i=1o;1t=1p;1u=1q;1l=1s;1v=1r;1D=1k;1B=1m;1y=1j;1C=1g;1w=1h;1E=1c;1x=1d;1z=1e;1A=1f;1G=p;1F=n;1a=-7h;1n=1b;1o=1i;1p=1t;1q=1u;1s=1l;1r=1v;1k=1D;1m=1B;1j=1y;1g=1C;1h=1w;1c=1E;1d=1x;1e=1z;1f=1A;p=1G;n=1F;1H}}}i=1Q;2j c[J>>2]|0}2n 2R(a){a=a|0;2g b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0;do 1J(a>>>0<dn){o=a>>>0<11?16:a+11&-8;a=o>>>3;j=c[72]|0;b=j>>>a;1J(b&3|0){b=(b&1^1)+a|0;d=2x+(b<<1<<2)|0;e=d+8|0;f=c[e>>2]|0;g=f+8|0;h=c[g>>2]|0;do 1J((d|0)!=(h|0)){1J(h>>>0<(c[76]|0)>>>0)2h();a=h+12|0;1J((c[a>>2]|0)==(f|0)){c[a>>2]=d;c[e>>2]=h;1K}1L 2h()}1L c[72]=j&~(1<<b);2i(0);L=b<<3;c[f+4>>2]=L|3;L=f+L+4|0;c[L>>2]=c[L>>2]|1;L=g;2j L|0}h=c[74]|0;1J(o>>>0>h>>>0){1J(b|0){d=2<<a;d=b<<a&(d|0-d);d=(d&0-d)+ -1|0;i=d>>>12&16;d=d>>>i;f=d>>>5&8;d=d>>>f;g=d>>>2&4;d=d>>>g;e=d>>>1&2;d=d>>>e;b=d>>>1&1;b=(f|i|g|e|b)+(d>>>b)|0;d=2x+(b<<1<<2)|0;e=d+8|0;g=c[e>>2]|0;i=g+8|0;f=c[i>>2]|0;do 1J((d|0)!=(f|0)){1J(f>>>0<(c[76]|0)>>>0)2h();a=f+12|0;1J((c[a>>2]|0)==(g|0)){c[a>>2]=d;c[e>>2]=f;k=c[74]|0;1K}1L 2h()}1L{c[72]=j&~(1<<b);k=h}2i(0);h=(b<<3)-o|0;c[g+4>>2]=o|3;e=g+o|0;c[e+4>>2]=h|1;c[e+h>>2]=h;1J(k|0){f=c[77]|0;b=k>>>3;d=2x+(b<<1<<2)|0;a=c[72]|0;b=1<<b;1J(a&b){a=d+8|0;b=c[a>>2]|0;1J(b>>>0<(c[76]|0)>>>0)2h();1L{l=a;m=b}}1L{c[72]=a|b;l=d+8|0;m=d}c[l>>2]=f;c[m+12>>2]=f;c[f+8>>2]=m;c[f+12>>2]=d}c[74]=h;c[77]=e;L=i;2j L|0}a=c[73]|0;1J(a){d=(a&0-a)+ -1|0;K=d>>>12&16;d=d>>>K;J=d>>>5&8;d=d>>>J;L=d>>>2&4;d=d>>>L;b=d>>>1&2;d=d>>>b;e=d>>>1&1;e=c[2w+((J|K|L|b|e)+(d>>>e)<<2)>>2]|0;d=(c[e+4>>2]&-8)-o|0;b=e;2i(1){a=c[b+16>>2]|0;1J(!a){a=c[b+20>>2]|0;1J(!a){j=e;1K}}b=(c[a+4>>2]&-8)-o|0;L=b>>>0<d>>>0;d=L?b:d;b=a;e=L?a:e}g=c[76]|0;1J(j>>>0<g>>>0)2h();i=j+o|0;1J(j>>>0>=i>>>0)2h();h=c[j+24>>2]|0;e=c[j+12>>2]|0;do 1J((e|0)==(j|0)){b=j+20|0;a=c[b>>2]|0;1J(!a){b=j+16|0;a=c[b>>2]|0;1J(!a){n=0;1K}}2i(1){e=a+20|0;f=c[e>>2]|0;1J(f|0){a=f;b=e;1H}e=a+16|0;f=c[e>>2]|0;1J(!f)1K;1L{a=f;b=e}}1J(b>>>0<g>>>0)2h();1L{c[b>>2]=0;n=a;1K}}1L{f=c[j+8>>2]|0;1J(f>>>0<g>>>0)2h();a=f+12|0;1J((c[a>>2]|0)!=(j|0))2h();b=e+8|0;1J((c[b>>2]|0)==(j|0)){c[a>>2]=e;c[b>>2]=f;n=e;1K}1L 2h()}2i(0);do 1J(h|0){a=c[j+28>>2]|0;b=2w+(a<<2)|0;1J((j|0)==(c[b>>2]|0)){c[b>>2]=n;1J(!n){c[73]=c[73]&~(1<<a);1K}}1L{1J(h>>>0<(c[76]|0)>>>0)2h();a=h+16|0;1J((c[a>>2]|0)==(j|0))c[a>>2]=n;1L c[h+20>>2]=n;1J(!n)1K}b=c[76]|0;1J(n>>>0<b>>>0)2h();c[n+24>>2]=h;a=c[j+16>>2]|0;do 1J(a|0)1J(a>>>0<b>>>0)2h();1L{c[n+16>>2]=a;c[a+24>>2]=n;1K}2i(0);a=c[j+20>>2]|0;1J(a|0)1J(a>>>0<(c[76]|0)>>>0)2h();1L{c[n+20>>2]=a;c[a+24>>2]=n;1K}}2i(0);1J(d>>>0<16){L=d+o|0;c[j+4>>2]=L|3;L=j+L+4|0;c[L>>2]=c[L>>2]|1}1L{c[j+4>>2]=o|3;c[i+4>>2]=d|1;c[i+d>>2]=d;a=c[74]|0;1J(a|0){f=c[77]|0;b=a>>>3;e=2x+(b<<1<<2)|0;a=c[72]|0;b=1<<b;1J(a&b){a=e+8|0;b=c[a>>2]|0;1J(b>>>0<(c[76]|0)>>>0)2h();1L{p=a;q=b}}1L{c[72]=a|b;p=e+8|0;q=e}c[p>>2]=f;c[q+12>>2]=f;c[f+8>>2]=q;c[f+12>>2]=e}c[74]=d;c[77]=i}L=j+8|0;2j L|0}}}1L 1J(a>>>0<=df){a=a+11|0;o=a&-8;j=c[73]|0;1J(j){d=0-o|0;a=a>>>8;1J(a)1J(o>>>0>3Y)i=31;1L{q=(a+3Z|0)>>>16&8;E=a<<q;p=(E+3X|0)>>>16&4;E=E<<p;i=(E+3W|0)>>>16&2;i=14-(p|q|i)+(E<<i>>>15)|0;i=o>>>(i+7|0)&1|i<<1}1L i=0;b=c[2w+(i<<2)>>2]|0;a:do 1J(!b){a=0;b=0;E=86}1L{f=d;a=0;g=o<<((i|0)==31?0:25-(i>>>1)|0);h=b;b=0;2i(1){e=c[h+4>>2]&-8;d=e-o|0;1J(d>>>0<f>>>0)1J((e|0)==(o|0)){a=h;b=h;E=90;1K a}1L b=h;1L d=f;e=c[h+20>>2]|0;h=c[h+16+(g>>>31<<2)>>2]|0;a=(e|0)==0|(e|0)==(h|0)?a:e;e=(h|0)==0;1J(e){E=86;1K}1L{f=d;g=g<<(e&1^1)}}}2i(0);1J((E|0)==86){1J((a|0)==0&(b|0)==0){a=2<<i;a=j&(a|0-a);1J(!a)1K;q=(a&0-a)+ -1|0;m=q>>>12&16;q=q>>>m;l=q>>>5&8;q=q>>>l;n=q>>>2&4;q=q>>>n;p=q>>>1&2;q=q>>>p;a=q>>>1&1;a=c[2w+((l|m|n|p|a)+(q>>>a)<<2)>>2]|0}1J(!a){i=d;j=b}1L E=90}1J((E|0)==90)2i(1){E=0;q=(c[a+4>>2]&-8)-o|0;e=q>>>0<d>>>0;d=e?q:d;b=e?a:b;e=c[a+16>>2]|0;1J(e|0){a=e;E=90;1H}a=c[a+20>>2]|0;1J(!a){i=d;j=b;1K}1L E=90}1J((j|0)!=0?i>>>0<((c[74]|0)-o|0)>>>0:0){f=c[76]|0;1J(j>>>0<f>>>0)2h();h=j+o|0;1J(j>>>0>=h>>>0)2h();g=c[j+24>>2]|0;d=c[j+12>>2]|0;do 1J((d|0)==(j|0)){b=j+20|0;a=c[b>>2]|0;1J(!a){b=j+16|0;a=c[b>>2]|0;1J(!a){s=0;1K}}2i(1){d=a+20|0;e=c[d>>2]|0;1J(e|0){a=e;b=d;1H}d=a+16|0;e=c[d>>2]|0;1J(!e)1K;1L{a=e;b=d}}1J(b>>>0<f>>>0)2h();1L{c[b>>2]=0;s=a;1K}}1L{e=c[j+8>>2]|0;1J(e>>>0<f>>>0)2h();a=e+12|0;1J((c[a>>2]|0)!=(j|0))2h();b=d+8|0;1J((c[b>>2]|0)==(j|0)){c[a>>2]=d;c[b>>2]=e;s=d;1K}1L 2h()}2i(0);do 1J(g|0){a=c[j+28>>2]|0;b=2w+(a<<2)|0;1J((j|0)==(c[b>>2]|0)){c[b>>2]=s;1J(!s){c[73]=c[73]&~(1<<a);1K}}1L{1J(g>>>0<(c[76]|0)>>>0)2h();a=g+16|0;1J((c[a>>2]|0)==(j|0))c[a>>2]=s;1L c[g+20>>2]=s;1J(!s)1K}b=c[76]|0;1J(s>>>0<b>>>0)2h();c[s+24>>2]=g;a=c[j+16>>2]|0;do 1J(a|0)1J(a>>>0<b>>>0)2h();1L{c[s+16>>2]=a;c[a+24>>2]=s;1K}2i(0);a=c[j+20>>2]|0;1J(a|0)1J(a>>>0<(c[76]|0)>>>0)2h();1L{c[s+20>>2]=a;c[a+24>>2]=s;1K}}2i(0);do 1J(i>>>0>=16){c[j+4>>2]=o|3;c[h+4>>2]=i|1;c[h+i>>2]=i;a=i>>>3;1J(i>>>0<2G){d=2x+(a<<1<<2)|0;b=c[72]|0;a=1<<a;1J(b&a){a=d+8|0;b=c[a>>2]|0;1J(b>>>0<(c[76]|0)>>>0)2h();1L{u=a;v=b}}1L{c[72]=b|a;u=d+8|0;v=d}c[u>>2]=h;c[v+12>>2]=h;c[h+8>>2]=v;c[h+12>>2]=d;1K}a=i>>>8;1J(a)1J(i>>>0>3Y)d=31;1L{K=(a+3Z|0)>>>16&8;L=a<<K;J=(L+3X|0)>>>16&4;L=L<<J;d=(L+3W|0)>>>16&2;d=14-(J|K|d)+(L<<d>>>15)|0;d=i>>>(d+7|0)&1|d<<1}1L d=0;e=2w+(d<<2)|0;c[h+28>>2]=d;a=h+16|0;c[a+4>>2]=0;c[a>>2]=0;a=c[73]|0;b=1<<d;1J(!(a&b)){c[73]=a|b;c[e>>2]=h;c[h+24>>2]=e;c[h+12>>2]=h;c[h+8>>2]=h;1K}f=i<<((d|0)==31?0:25-(d>>>1)|0);a=c[e>>2]|0;2i(1){1J((c[a+4>>2]&-8|0)==(i|0)){d=a;E=at;1K}b=a+16+(f>>>31<<2)|0;d=c[b>>2]|0;1J(!d){E=ap;1K}1L{f=f<<1;a=d}}1J((E|0)==ap)1J(b>>>0<(c[76]|0)>>>0)2h();1L{c[b>>2]=h;c[h+24>>2]=a;c[h+12>>2]=h;c[h+8>>2]=h;1K}1L 1J((E|0)==at){a=d+8|0;b=c[a>>2]|0;L=c[76]|0;1J(b>>>0>=L>>>0&d>>>0>=L>>>0){c[b+12>>2]=h;c[a>>2]=h;c[h+8>>2]=b;c[h+12>>2]=d;c[h+24>>2]=0;1K}1L 2h()}}1L{L=i+o|0;c[j+4>>2]=L|3;L=j+L+4|0;c[L>>2]=c[L>>2]|1}2i(0);L=j+8|0;2j L|0}}}1L o=-1;2i(0);d=c[74]|0;1J(d>>>0>=o>>>0){a=d-o|0;b=c[77]|0;1J(a>>>0>15){L=b+o|0;c[77]=L;c[74]=a;c[L+4>>2]=a|1;c[L+a>>2]=a;c[b+4>>2]=o|3}1L{c[74]=0;c[77]=0;c[b+4>>2]=d|3;L=b+d+4|0;c[L>>2]=c[L>>2]|1}L=b+8|0;2j L|0}a=c[75]|0;1J(a>>>0>o>>>0){J=a-o|0;c[75]=J;L=c[78]|0;K=L+o|0;c[78]=K;c[K+4>>2]=J|1;c[L+4>>2]=o|3;L=L+8|0;2j L|0}do 1J(!(c[2I]|0)){a=3i|0;1J(!(a+ -1&a)){c[2T]=a;c[ay]=a;c[2H]=-1;c[3c]=-1;c[dq]=0;c[2A]=0;c[2I]=(1Y(0)|0)&-16^dr;1K}1L 2h()}2i(0);h=o+48|0;g=c[2T]|0;i=o+47|0;f=g+i|0;g=0-g|0;j=f&g;1J(j>>>0<=o>>>0){L=0;2j L|0}a=c[ax]|0;1J(a|0?(u=c[4b]|0,v=u+j|0,v>>>0<=u>>>0|v>>>0>a>>>0):0){L=0;2j L|0}b:do 1J(!(c[2A]&4)){a=c[78]|0;c:do 1J(a){d=2O;2i(1){b=c[d>>2]|0;1J(b>>>0<=a>>>0?(r=d+4|0,(b+(c[r>>2]|0)|0)>>>0>a>>>0):0){e=d;d=r;1K}d=c[d+8>>2]|0;1J(!d){E=7Q;1K c}}a=f-(c[75]|0)&g;1J(a>>>0<2Q){b=1f(a|0)|0;1J((b|0)==((c[e>>2]|0)+(c[d>>2]|0)|0)){1J((b|0)!=(-1|0)){h=b;f=a;E=2H;1K b}}1L E=2A}}1L E=7Q;2i(0);do 1J((E|0)==7Q?(t=1f(0)|0,(t|0)!=(-1|0)):0){a=t;b=c[ay]|0;d=b+ -1|0;1J(!(d&a))a=j;1L a=j-a+(d+a&0-b)|0;b=c[4b]|0;d=b+a|0;1J(a>>>0>o>>>0&a>>>0<2Q){v=c[ax]|0;1J(v|0?d>>>0<=b>>>0|d>>>0>v>>>0:0)1K;b=1f(a|0)|0;1J((b|0)==(t|0)){h=t;f=a;E=2H;1K b}1L E=2A}}2i(0);d:do 1J((E|0)==2A){d=0-a|0;do 1J(h>>>0>a>>>0&(a>>>0<2Q&(b|0)!=(-1|0))?(w=c[2T]|0,w=i-a+w&0-w,w>>>0<2Q):0)1J((1f(w|0)|0)==(-1|0)){1f(d|0)|0;1K d}1L{a=w+a|0;1K}2i(0);1J((b|0)!=(-1|0)){h=b;f=a;E=2H;1K b}}2i(0);c[2A]=c[2A]|4;E=2I}1L E=2I;2i(0);1J((((E|0)==2I?j>>>0<2Q:0)?(x=1f(j|0)|0,y=1f(0)|0,x>>>0<y>>>0&((x|0)!=(-1|0)&(y|0)!=(-1|0))):0)?(z=y-x|0,z>>>0>(o+40|0)>>>0):0){h=x;f=z;E=2H}1J((E|0)==2H){a=(c[4b]|0)+f|0;c[4b]=a;1J(a>>>0>(c[aw]|0)>>>0)c[aw]=a;i=c[78]|0;do 1J(i){e=2O;do{a=c[e>>2]|0;b=e+4|0;d=c[b>>2]|0;1J((h|0)==(a+d|0)){A=a;B=b;C=d;D=e;E=av;1K}e=c[e+8>>2]|0}2i((e|0)!=0);1J(((E|0)==av?(c[D+12>>2]&8|0)==0:0)?i>>>0<h>>>0&i>>>0>=A>>>0:0){c[B>>2]=C+f;L=i+8|0;L=(L&7|0)==0?0:0-L&7;K=i+L|0;L=f-L+(c[75]|0)|0;c[78]=K;c[75]=L;c[K+4>>2]=L|1;c[K+L+4>>2]=40;c[79]=c[3c];1K}a=c[76]|0;1J(h>>>0<a>>>0){c[76]=h;j=h}1L j=a;d=h+f|0;a=2O;2i(1){1J((c[a>>2]|0)==(d|0)){b=a;E=au;1K}a=c[a+8>>2]|0;1J(!a){b=2O;1K}}1J((E|0)==au)1J(!(c[a+12>>2]&8)){c[b>>2]=h;l=a+4|0;c[l>>2]=(c[l>>2]|0)+f;l=h+8|0;l=h+((l&7|0)==0?0:0-l&7)|0;a=d+8|0;a=d+((a&7|0)==0?0:0-a&7)|0;k=l+o|0;g=a-l-o|0;c[l+4>>2]=o|3;do 1J((a|0)!=(i|0)){1J((a|0)==(c[77]|0)){L=(c[74]|0)+g|0;c[74]=L;c[77]=k;c[k+4>>2]=L|1;c[k+L>>2]=L;1K}b=c[a+4>>2]|0;1J((b&3|0)==1){i=b&-8;f=b>>>3;e:do 1J(b>>>0>=2G){h=c[a+24>>2]|0;e=c[a+12>>2]|0;do 1J((e|0)==(a|0)){d=a+16|0;e=d+4|0;b=c[e>>2]|0;1J(!b){b=c[d>>2]|0;1J(!b){J=0;1K}}1L d=e;2i(1){e=b+20|0;f=c[e>>2]|0;1J(f|0){b=f;d=e;1H}e=b+16|0;f=c[e>>2]|0;1J(!f)1K;1L{b=f;d=e}}1J(d>>>0<j>>>0)2h();1L{c[d>>2]=0;J=b;1K}}1L{f=c[a+8>>2]|0;1J(f>>>0<j>>>0)2h();b=f+12|0;1J((c[b>>2]|0)!=(a|0))2h();d=e+8|0;1J((c[d>>2]|0)==(a|0)){c[b>>2]=e;c[d>>2]=f;J=e;1K}1L 2h()}2i(0);1J(!h)1K;b=c[a+28>>2]|0;d=2w+(b<<2)|0;do 1J((a|0)!=(c[d>>2]|0)){1J(h>>>0<(c[76]|0)>>>0)2h();b=h+16|0;1J((c[b>>2]|0)==(a|0))c[b>>2]=J;1L c[h+20>>2]=J;1J(!J)1K e}1L{c[d>>2]=J;1J(J|0)1K;c[73]=c[73]&~(1<<b);1K e}2i(0);e=c[76]|0;1J(J>>>0<e>>>0)2h();c[J+24>>2]=h;b=a+16|0;d=c[b>>2]|0;do 1J(d|0)1J(d>>>0<e>>>0)2h();1L{c[J+16>>2]=d;c[d+24>>2]=J;1K}2i(0);b=c[b+4>>2]|0;1J(!b)1K;1J(b>>>0<(c[76]|0)>>>0)2h();1L{c[J+20>>2]=b;c[b+24>>2]=J;1K}}1L{d=c[a+8>>2]|0;e=c[a+12>>2]|0;b=2x+(f<<1<<2)|0;do 1J((d|0)!=(b|0)){1J(d>>>0<j>>>0)2h();1J((c[d+12>>2]|0)==(a|0))1K;2h()}2i(0);1J((e|0)==(d|0)){c[72]=c[72]&~(1<<f);1K}do 1J((e|0)==(b|0))G=e+8|0;1L{1J(e>>>0<j>>>0)2h();b=e+8|0;1J((c[b>>2]|0)==(a|0)){G=b;1K}2h()}2i(0);c[d+12>>2]=e;c[G>>2]=d}2i(0);a=a+i|0;g=i+g|0}a=a+4|0;c[a>>2]=c[a>>2]&-2;c[k+4>>2]=g|1;c[k+g>>2]=g;a=g>>>3;1J(g>>>0<2G){d=2x+(a<<1<<2)|0;b=c[72]|0;a=1<<a;do 1J(!(b&a)){c[72]=b|a;K=d+8|0;L=d}1L{a=d+8|0;b=c[a>>2]|0;1J(b>>>0>=(c[76]|0)>>>0){K=a;L=b;1K}2h()}2i(0);c[K>>2]=k;c[L+12>>2]=k;c[k+8>>2]=L;c[k+12>>2]=d;1K}a=g>>>8;do 1J(!a)d=0;1L{1J(g>>>0>3Y){d=31;1K}K=(a+3Z|0)>>>16&8;L=a<<K;J=(L+3X|0)>>>16&4;L=L<<J;d=(L+3W|0)>>>16&2;d=14-(J|K|d)+(L<<d>>>15)|0;d=g>>>(d+7|0)&1|d<<1}2i(0);e=2w+(d<<2)|0;c[k+28>>2]=d;a=k+16|0;c[a+4>>2]=0;c[a>>2]=0;a=c[73]|0;b=1<<d;1J(!(a&b)){c[73]=a|b;c[e>>2]=k;c[k+24>>2]=e;c[k+12>>2]=k;c[k+8>>2]=k;1K}f=g<<((d|0)==31?0:25-(d>>>1)|0);a=c[e>>2]|0;2i(1){1J((c[a+4>>2]&-8|0)==(g|0)){d=a;E=ar;1K}b=a+16+(f>>>31<<2)|0;d=c[b>>2]|0;1J(!d){E=aq;1K}1L{f=f<<1;a=d}}1J((E|0)==aq)1J(b>>>0<(c[76]|0)>>>0)2h();1L{c[b>>2]=k;c[k+24>>2]=a;c[k+12>>2]=k;c[k+8>>2]=k;1K}1L 1J((E|0)==ar){a=d+8|0;b=c[a>>2]|0;L=c[76]|0;1J(b>>>0>=L>>>0&d>>>0>=L>>>0){c[b+12>>2]=k;c[a>>2]=k;c[k+8>>2]=b;c[k+12>>2]=d;c[k+24>>2]=0;1K}1L 2h()}}1L{L=(c[75]|0)+g|0;c[75]=L;c[78]=k;c[k+4>>2]=L|1}2i(0);L=l+8|0;2j L|0}1L b=2O;2i(1){a=c[b>>2]|0;1J(a>>>0<=i>>>0?(F=a+(c[b+4>>2]|0)|0,F>>>0>i>>>0):0){b=F;1K}b=c[b+8>>2]|0}g=b+ -47|0;d=g+8|0;d=g+((d&7|0)==0?0:0-d&7)|0;g=i+16|0;d=d>>>0<g>>>0?i:d;a=d+8|0;e=h+8|0;e=(e&7|0)==0?0:0-e&7;L=h+e|0;e=f+ -40-e|0;c[78]=L;c[75]=e;c[L+4>>2]=e|1;c[L+e+4>>2]=40;c[79]=c[3c];e=d+4|0;c[e>>2]=27;c[a>>2]=c[7L];c[a+4>>2]=c[7K];c[a+8>>2]=c[aA];c[a+12>>2]=c[7J];c[7L]=h;c[7K]=f;c[7J]=0;c[aA]=a;a=d+24|0;do{a=a+4|0;c[a>>2]=7}2i((a+4|0)>>>0<b>>>0);1J((d|0)!=(i|0)){h=d-i|0;c[e>>2]=c[e>>2]&-2;c[i+4>>2]=h|1;c[d>>2]=h;a=h>>>3;1J(h>>>0<2G){d=2x+(a<<1<<2)|0;b=c[72]|0;a=1<<a;1J(b&a){a=d+8|0;b=c[a>>2]|0;1J(b>>>0<(c[76]|0)>>>0)2h();1L{H=a;I=b}}1L{c[72]=b|a;H=d+8|0;I=d}c[H>>2]=i;c[I+12>>2]=i;c[i+8>>2]=I;c[i+12>>2]=d;1K}a=h>>>8;1J(a)1J(h>>>0>3Y)d=31;1L{K=(a+3Z|0)>>>16&8;L=a<<K;J=(L+3X|0)>>>16&4;L=L<<J;d=(L+3W|0)>>>16&2;d=14-(J|K|d)+(L<<d>>>15)|0;d=h>>>(d+7|0)&1|d<<1}1L d=0;f=2w+(d<<2)|0;c[i+28>>2]=d;c[i+20>>2]=0;c[g>>2]=0;a=c[73]|0;b=1<<d;1J(!(a&b)){c[73]=a|b;c[f>>2]=i;c[i+24>>2]=f;c[i+12>>2]=i;c[i+8>>2]=i;1K}e=h<<((d|0)==31?0:25-(d>>>1)|0);a=c[f>>2]|0;2i(1){1J((c[a+4>>2]&-8|0)==(h|0)){d=a;E=ai;1K}b=a+16+(e>>>31<<2)|0;d=c[b>>2]|0;1J(!d){E=aM;1K}1L{e=e<<1;a=d}}1J((E|0)==aM)1J(b>>>0<(c[76]|0)>>>0)2h();1L{c[b>>2]=i;c[i+24>>2]=a;c[i+12>>2]=i;c[i+8>>2]=i;1K}1L 1J((E|0)==ai){a=d+8|0;b=c[a>>2]|0;L=c[76]|0;1J(b>>>0>=L>>>0&d>>>0>=L>>>0){c[b+12>>2]=i;c[a>>2]=i;c[i+8>>2]=b;c[i+12>>2]=d;c[i+24>>2]=0;1K}1L 2h()}}}1L{L=c[76]|0;1J((L|0)==0|h>>>0<L>>>0)c[76]=h;c[7L]=h;c[7K]=f;c[7J]=0;c[81]=c[2I];c[80]=-1;a=0;do{L=2x+(a<<1<<2)|0;c[L+12>>2]=L;c[L+8>>2]=L;a=a+1|0}2i((a|0)!=32);L=h+8|0;L=(L&7|0)==0?0:0-L&7;K=h+L|0;L=f+ -40-L|0;c[78]=K;c[75]=L;c[K+4>>2]=L|1;c[K+L+4>>2]=40;c[79]=c[3c]}2i(0);a=c[75]|0;1J(a>>>0>o>>>0){J=a-o|0;c[75]=J;L=c[78]|0;K=L+o|0;c[78]=K;c[K+4>>2]=J|1;c[L+4>>2]=o|3;L=L+8|0;2j L|0}}c[(1k()|0)>>2]=12;L=0;2j L|0}2n 7y(b,d,e){b=b|0;d=d|0;e=e|0;2g f=0,g=0,h=0,i=0;f=b+e|0;1J((e|0)>=20){d=d&ak;h=b&3;i=d|d<<8|d<<16|d<<24;g=f&~3;1J(h){h=b+4-h|0;2i((b|0)<(h|0)){a[b>>0]=d;b=b+1|0}}2i((b|0)<(g|0)){c[b>>2]=i;b=b+4|0}}2i((b|0)<(f|0)){a[b>>0]=d;b=b+1|0}2j b-e|0}2j[2R,1U]})();2g 7O=7R[0];2n 2V(x){U[75]=d4;U[78]=d3;2j a5(7R[1](X(a6(x),\'a7\',0)))}2j 2V})();2n cY(x){2j 2V(x)}2n cX(){2g r={};r["ac"]="1";2j r}2n 8x(){2g r={};r["ac"]="1";r["cZ"]="n";r["d0"]="x";r["am"]=0;1J(3d(d2)!="al")r["am"]=1;r["cF"]=(cE(cg.cj.cm())==="2n%cl%28%29%20%7B%20%cf%ce%5D%20%7D")?"c6":"c5";r["t"]=(2r aN).c9();2j r}2n cd(){2j 8x()}2n cA(){2g r=8x();r["cB"]=r["t"];cC r["t"];2j r}', 0, 851, "||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||jb|tb|ra|pa|na|la|Ea|ta|ub|Ha|La|xb|Ja|mb|kb|Ya|Ra|Na|Pa|vb|wb|yb|Db|Fb|Bb|Gb|Hb|Ab|Cb|zb|Eb|Ib|sb|continue|rb|if|break|else|default|switch|case|Fa|qb|ua|oa|sa|Ia|qa|Ka|Za|ma|lb|||||||||||nb|188097831|Sa|Ma|Qa|Oa|var|ka|while|return|916103055|sz|ret|function|sx|u0|128|new|Sz|str|ob|len|592|328|Sl|Ga|183|se|u1|ux|idx|Da|256|193|190|String|u2|length|for|u3|736|fromCharCode|2147483647|Ua|1023|192|u8array|cmd5x|65536|ia|va|ja||||||||||charCodeAt|Ca|2039534323|194|typeof|ha|118764121|pb|ea|4096|ga|ya|Wa|35866813|224|curr|Uint8Array|924717824|Math|_a|1572610025|Tl|za|_|Al|Ta|193036646|fb|850713340|243669087|fa|217|Ba|Va|u4|MAX_CHUNK|wa|656398317|2127574409|1044037601|xa|372789369|942245303|eb|315119066|ib|gb|hb|961559109|245760|520192|16777215|1048320|||1812756882||522919445||||||50919874|180|Aa|5458134|1892665105|717745890|635155771|1969546970|1414489443|920364886|601583830|747420302|671207445|1361473685|1980027799|780107150|738461164|1111318124|743013407|1247969426|424000715|1662327480|1867803797|270009349|823999218|665924408|974401706|545058508|526301530|2146552338|668795440|983205733|452257369|1217939919|489741395|852236017|630729423|1137547745|2051875059|1982907982|852477429|521081237|524762773|1341729830|1775530198|2120616980|771214760|1287975406|777225753|763186054|602596021|481757527|494102117|||708759048||||||887924077|1370835909|1290413867|651068526|722374409|809617043|2045376102|1510822949|2028659015|499972263|2014978051|1297236730|1115527364|1058751639|1781069297|1797419395|1841591203|1815387249|1712406553|1649803199|1932706895|1579204746|1610186071|1629615901|153691705|151603818|1878597151|463554092|800362374|1183072760||1183676751|2055800044|1212483299|1202295682|1385908106|1290934332|1552799363|1153477833|1129515855|1380451239|139799944|1396656085|1771209720|2040419279|2017858759|1814214169|1367008151|1203488890|128106704|1355478599|1667927966|1572948785||1924281938|||||1010850097||1361726950||1951978675|1117037785|1826842851|1156946543|968403108|1137039176|1936945228|934444625|2074579782|991315587|775542450|331129789|1618283724|1688333518|920516874|895015477|856036625|2136717671|2131809869|902588506|1266323623|2088360821|2109032559|1157656715|999614033|1093527402|1943746193|60376344|1101163512|1942162936|1129217909|1153545492|1966247896|1173436005|549762434|1951072297|620960943|1060336117|1266383858|1031373064|2014779455|1098566066|2014580748|1967845546|1971280264|1995522865|828878942|1541240532|2070699595|1785460248|44538672|58343100|416259719||||||||||484876086|25886128|494739317|sy|423412824|276665542|hasUtf|843646639|80539691|1264018475|1180867059|1657487624|147891877|2059037329|1360885125|690197071|107249853|303896161|86385898|1102465302|86792897|608838580|240|248|Xa|108332815|167383782||195832850||788846146|13290759|936652527|618822415|1012403908|187|185|184|1008856235|228161238|Mc|137942632|173|cmd5|55296|791025390|999695174|Sx|263250548|343102405|1841611462|stringy|||152754021|304010989|u5|1256704313||411922879|439769685|1468918320|1804404662|2008811188|1315897097|275270623|568636039|1774369769|412272376|545100308|401948426|591681232|331915256|1717331240|327886970|1670387339|22207083|390950602|1514554794|1410343841|1388594392|1720235387|909244188|1432877594|709849698|cmd5xtmts|bytes|164314163|1288598934|801681189|73587007|set|st|633810001|212826519|1775324253|180306226|1530939976|1466680073|637834779|1410777152|256536033|255123066|252274077|368050796|204104119|412361919|1347562810|1024|1000|1469924941|1908236319|S1|252||startIdx|57343|subarray|self|Dc|Su||843895025|127|2047|dontAddNull|numBytesWritten|Int8Array|2141197378|Sc|65535|2097151|67108863|Int32Array|1580481692|1952671327|220197618|42513759|686015919|1345718901|1689304723|621349016|764325492|1131684153|811559434|1507607054|369117907|512|832153837|122893342|430366929|1385448869|1491978542|1342378399|294782852|2033518013|353003127|1418005290|1805529600|1721273904|2072149329|468377855|166607654|2111526991|116829207|91142349|846305798|584088285|1571403275|1815835470|1093534983|1220437297|1967453895|137388177|1610295581|1643252880|978858707|485042156|158737468|1565796204|144431907|Pb|Id|i8|1957808098|1860184337|||qdv|502501551|168997235|780709209|1759879971|1224380757|307|133688724|255|undefined|qds|1178941561|1887619057|145|278|281|1998283379|148|211|203|181|182|191|494575374|186|1643553581|2038887719|1306095578|1142814721|1940854541|1953863738|796114441|1048747497|985163289|687100864|1158045464|304|Date|340471306|1450542935|705350905|690379117|672911061|1557818241|61851760|780953686|500368708|11283782|2104648903|858883747|1022942196|1477198952|1536398528|604911631|1040|1032|1164|912|1036|948|||1044|944|1084|1080|856|1088|1092|1152|848|1076|1072|1056|1052|1165|1060|1068|1064|1048|1163|1159|988|992|1096|1158|984|1161|888|1160|1008|1012|880|1004|996|1020|1016|1162|872|904|964|896|960|956|1154|952|968|1155|1157|976|980|1028|864|972|1156|1153|Int16Array|sijsc|sgve|slice|max|getTime|||null|cmd5xlive|20code|5Bnative|navigator||apply|javaEnabled|56320|20javaEnabled|toString|string|false|228|209|218|8192|ArrayBuffer|1848|2872|219|ceil|number|true|cmd5xvms|tm|delete|called|escape|__jsT|1140|1136|1132|1168|sin|NaN|Infinity|920|1128|1108|1104|1112|1116|1124|1120|1832|Float64Array|cmd5xly|cmd5ly|qdx|qdy|min|js_call_java_obj|4900|3800|Uint32Array|Float32Array|Uint16Array|840|Array|||now|1100|1147|4294967231|1732584193|768|776|1144|784|271733879|1732584194|245||940|195|1431655768|271733878|4294967296|1145|792|936|1149|1150|824|1151|832|816|932|928|800|808|1146|1148".split("|"), 0, {}))
        } catch (e) {}
        window.cmd5xtmts = cmd5xtmts,
        window.cmd5x = cmd5x,
        window.cmd5ly = cmd5ly,
        window.cmd5xlive = cmd5xlive,
        module.exports = {
            cmd5xtmts: cmd5xtmts,
            cmd5x: cmd5x,
            cmd5ly: cmd5ly
        }
    }
    .call(exports, require, exports, module);
    void 0 !== result && (module.exports = result)
}
, function(e, t, i) {//#24#
    var n = function(e, t, i) {
        i.exports = {
            vms: "01010031010000000000",
            Mac: "01030031010000000000",
            iPad: "03020031010000000000",
            iPad_tw: "03020031010010000000",
            phone: "02020031010000000000",
            phone_tw: "02020031010010000000"
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#25#
    var n = function(e, t, i) {
        i.exports = {
            needRecord: !0,
            browserType: "",
            pageTmpltType: "",
            pgct: 0,
            sTime_userInfo: 0,
            sTime_P2PCore: 0,
            sTime_history: 0,
            sTime_showVideo: 0,
            sTime_adInit: 0,
            sTime_vms: 0,
            usedTime_selfLoaded: 0,
            usedTime_userInfo: 0,
            usedTime_P2PCore: 0,
            usedTime_history: 0,
            usedTime_showVideo: 0,
            usedTime_pageShowVideo: 0,
            usedTime_adInit: 0,
            usedTime_vms: 0
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#26#
    var n = function(e, t, i) {
        var n = e(27)
          , o = e(13)
          , a = e(18)
          , r = document
          , c = o("FullScreen", {
            extend: a,
            methods: {
                init: function(e) {
                    var t = this;
                    t._elem = n(e)[0];
                    var i = function() {
                        t.fire({
                            type: "change",
                            data: t.isFullScreen() ? "enter" : "exit"
                        })
                    };
                    t._elem.addEventListener("fullscreenchange", i),
                    r.addEventListener("mozfullscreenchange", i),
                    t._elem.addEventListener("webkitfullscreenchange", i)
                },
                exit: function() {
                    var e = this._elem;
                    if (e)
                        if (this.fire({
                            type: "beforechange",
                            data: this.isFullScreen() ? "enter" : "exit"
                        }),
                        e.exitFullscreen)
                            e.exitFullscreen();
                        else if (r.webkitCancelFullScreen)
                            r.webkitCancelFullScreen();
                        else if (r.mozCancelFullScreen)
                            r.mozCancelFullScreen();
                        else if (e.mozCancelFullScreen)
                            e.mozCancelFullScreen();
                        else if (e.msExitFullscreen)
                            e.msExitFullscreen();
                        else
                            try {
                                e.webkitExitFullscreen()
                            } catch (e) {}
                },
                enter: function() {
                    var e = this._elem;
                    if (e)
                        if (this.fire({
                            type: "beforechange",
                            data: this.isFullScreen() ? "enter" : "exit"
                        }),
                        e.requestFullscreen)
                            e.requestFullscreen();
                        else if (e.webkitRequestFullscreen)
                            e.webkitRequestFullscreen();
                        else if (e.mozRequestFullScreen)
                            e.mozRequestFullScreen();
                        else if (e.msRequestFullscreen)
                            e.msRequestFullscreen();
                        else
                            try {
                                e.webkitEnterFullScreen()
                            } catch (e) {}
                },
                toggle: function() {
                    this.isFullScreen() ? this.exit() : this.enter()
                },
                isFullScreen: function() {
                    return !!(document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen)
                }
            }
        });
        i.exports = new c
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#27#
    var n = function(e, t, i) {
        function n(e) {
            return e.replace(u, "ms-").replace(f, function(e, t) {
                return t.toUpperCase()
            })
        }
        function o(e, t) {
            return (" " + e.className + " ").indexOf(" " + t + " ") >= 0
        }
        function a(e, t) {
            o(e, t) || (e.className += (e.className ? " " : "") + t)
        }
        function r(e, t) {
            for (var i = " " + e.className + " "; i.indexOf(" " + t + " ") >= 0; )
                i = i.replace(" " + t + " ", " ");
            e.className = "function" == typeof i.trim ? i.trim() : i.replace(/^\s+|\s+$/g, "")
        }
        function c(e, t) {
            var i = t;
            e.className = "function" == typeof i.trim ? i.trim() : i.replace(/^\s+|\s+$/g, "")
        }
        function s(e, t) {
            o(e, t) ? r(e, t) : a(e, t)
        }
        var p = e(13)
          , d = document
          , l = window
          , u = /^-ms-/
          , f = /-([a-z])/g
          , g = Object.prototype.toString
          , h = Array.prototype.slice
          , m = p("dom", {
            construct: function(e) {
                return this._query.call(this, e)
            },
            methods: {
                find: function(e) {
                    return this._query(e, new m)
                },
                _query: function(e, t) {
                    var i, n = this, o = [];
                    if (!e)
                        return this;
                    if ("[object nodelist]" === g.call(e).toLowerCase())
                        o = e;
                    else if (e.nodeType)
                        o.push(e);
                    else if (t)
                        for (i = 0; i < n.length; i++)
                            o = o.concat(h.call(n[i].querySelectorAll(e)));
                    else
                        o = e.__$__ && "length"in e ? h.call(e) : d.querySelectorAll(e);
                    for (t = t || n,
                    i = 0; i < o.length; i++)
                        t[i] = o[i];
                    return t.__$__ = !0,
                    t.length = o.length,
                    t
                },
                _each: function(e) {
                    for (var t = this, i = 0; i < t.length && !1 !== e.call(t[i], i, t[i]); i++)
                        ;
                    return t
                },
                addClass: function(e) {
                    return this._each(function(t, i) {
                        a(i, e)
                    })
                },
                removeClass: function(e) {
                    return this._each(function(t, i) {
                        r(i, e)
                    })
                },
                replaceClass: function(e) {
                    return this._each(function(t, i) {
                        c(i, e)
                    })
                },
                toggleClass: function(e) {
                    return this._each(function(t, i) {
                        s(i, e)
                    })
                },
                hasClass: function(e) {
                    return o(this[0], e)
                },
                css: function(e, t) {
                    if ("object" != typeof e)
                        return void 0 !== t ? this._each(function(i, o) {
                            o.style[n(e)] = t
                        }) : (this.length > 0 && (t = getComputedStyle(this[0])[n(e)]),
                        t);
                    for (var i in e)
                        this.css(i, e[i])
                },
                show: function() {
                    return this.css("display", "")
                },
                hide: function() {
                    return this.css("display", "none")
                },
                attr: function(e, t) {
                    return void 0 !== t ? this._each(function(i, n) {
                        n.setAttribute(e, t)
                    }) : (this.length > 0 && (t = this[0].getAttribute(e)),
                    t)
                },
                removeAttr: function(e) {
                    this._each(function(t, i) {
                        1 === i.nodeType && i.removeAttribute(e)
                    })
                },
                children: function() {
                    var e, t = [], i = this[0];
                    if (i)
                        for (e = i.firstChild; e; )
                            1 === e.nodeType && t.push(e),
                            e = e.nextSibling;
                    return t
                },
                html: function(e) {
                    if ("string" == typeof e)
                        this._each(function(t, i) {
                            i.innerHTML = e
                        });
                    else if (this[0])
                        return this[0].innerHTML
                },
                append: function(e) {
                    var t, i, n = this, o = n[0];
                    return o ? ("string" == typeof e && (t = d.createDocumentFragment(),
                    i = d.createElement("div"),
                    t.appendChild(i),
                    i.innerHTML = e,
                    e = i.firstChild),
                    o.appendChild(e),
                    i = null,
                    n) : n
                },
                remove: function() {
                    return this._each(function(e, t) {
                        t.parentNode && t.parentNode.removeChild(t)
                    })
                },
                offset: function() {
                    var e, t = d.documentElement, i = this[0];
                    return i ? (e = i.getBoundingClientRect(),
                    {
                        top: e.top + (l.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                        left: e.left + (l.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                    }) : {
                        top: 0,
                        left: 0
                    }
                },
                width: function(e) {
                    var t = this[0];
                    if (!t)
                        return 0;
                    if (void 0 !== e)
                        return this.css("width", isNaN(e) ? e : e + "px");
                    var i = this.css("width");
                    if (i = parseInt("100%" === i ? 0 : i),
                    isNaN(i)) {
                        var n = t.offsetWidth;
                        n <= 0 || null == n || (i = n)
                    }
                    return i
                },
                height: function(e) {
                    return this[0] ? void 0 !== e ? this.css("height", isNaN(e) ? e : e + "px") : parseInt(this.css("height")) : 0
                },
                contains: function(e) {
                    var t, i = this[0];
                    return e && (e.nodeType ? t = e : e.__$__ && (t = e[0])),
                    !(!i || !t) && i.contains(t)
                },
                on: function(e, t) {
                    var i = this._events = this._events || []
                      , n = i[e];
                    return n || (n = i[e] = []),
                    n.push(t),
                    this._each(function(i, n) {
                        n.addEventListener(e, t, !1)
                    })
                },
                un: function(e, t) {
                    var i = this._events || []
                      , n = i[e];
                    return n || (n = i[e] = []),
                    this._each(function(i, o) {
                        var a;
                        if (t) {
                            for (; (a = n.indexOf(t)) > -1; )
                                n.splice(a, 1);
                            o.removeEventListener(e, t)
                        } else
                            n.length > 0 && (n.forEach(function(t) {
                                o.removeEventListener(e, t)
                            }),
                            n.splice(0, n.length))
                    })
                },
                fire: function(e, t) {
                    var i = this
                      , n = i._events = i._events || []
                      , o = n[e];
                    o || (o = n[e] = []),
                    t.data = t.data || {},
                    i._each(function(e, i) {
                        o.forEach(function(e) {
                            e.call(i, t)
                        })
                    })
                }
            }
        });
        i.exports = function(e) {
            return new m(e)
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#28#
    var n = function(e, t, i) {
        function n(e) {
            var t = e.target || e.srcElement;
            t.__resizeRAF__ && p(t.__resizeRAF__),
            t.__resizeRAF__ = s(function() {
                var i = t.__resizeTrigger__;
                i.__resizeListeners__.forEach(function(t) {
                    t.call(i, e)
                })
            })
        }
        function o(e) {
            this.contentDocument.defaultView.__resizeTrigger__ = this.__resizeElement__,
            this.contentDocument.defaultView.addEventListener("resize", n)
        }
        var a = document.attachEvent
          , r = navigator.userAgent.match(/Trident/)
          , c = null
          , s = function() {
            var e = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                return window.setTimeout(e, 20)
            }
            ;
            return function(t) {
                return e(t)
            }
        }()
          , p = function() {
            var e = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
            return function(t) {
                return e(t)
            }
        }()
          , d = function(e, t) {
            if (!c.__resizeListeners__)
                if (c.__resizeListeners__ = [],
                a)
                    c.__resizeTrigger__ = c,
                    c.attachEvent("onresize", n);
                else {
                    var i = c.__resizeTrigger__ = document.createElement("object");
                    i.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"),
                    i.__resizeElement__ = c,
                    i.onload = o,
                    i.type = "text/html",
                    r && c.appendChild(i),
                    i.data = "about:blank",
                    r || c.appendChild(i)
                }
            c.__resizeListeners__.push(t)
        }
          , l = function(e, t) {
            c.__resizeListeners__.splice(c.__resizeListeners__.indexOf(t), 1),
            c.__resizeListeners__.length || (a ? c.detachEvent("onresize", n) : (c.__resizeTrigger__.contentDocument.defaultView.removeEventListener("resize", n),
            c.__resizeTrigger__ = !c.removeChild(c.__resizeTrigger__)))
        }
          , u = function(e) {
            c = e
        };
        i.exports = {
            on: d,
            off: l,
            registElement: u
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#29#
    var n = function(e, t, i) {
        var n = e(27)
          , o = e(13)
          , a = e(18)
          , r = o("WebFullScreen", {
            extend: a,
            methods: {
                __notice: function() {
                    var e = this;
                    e.fire({
                        type: "change",
                        data: e.isWebFullScreen() ? "enter" : "exit"
                    })
                },
                __beforeNotice: function() {
                    var e = this;
                    e.fire({
                        type: "beforechange",
                        data: e.isWebFullScreen() ? "enter" : "exit"
                    })
                },
                init: function(e, t) {
                    var i = this;
                    i._elem = n(t),
                    i._wrapper = n(e);
                    var o = function() {
                        i.toggle()
                    };
                    i._elem.on("click", o)
                },
                exit: function() {
                    var e = this;
                    e._elem && e.isWebFullScreen() && (e.__beforeNotice(),
                    e._elem.find("i").removeClass("webPage_screen-exit").addClass("webPage_screen"),
                    e._wrapper.removeClass("webfullscreen"),
                    document.body.style.overflow = e.__bodyOverflow,
                    e.__notice())
                },
                enter: function() {
                    var e = this;
                    e._elem && !e.isWebFullScreen() && (e.__bodyOverflow = document.body.style.overflow,
                    e.__beforeNotice(),
                    e._elem.find("i").removeClass("webPage_screen").addClass("webPage_screen-exit"),
                    e._wrapper.addClass("webfullscreen"),
                    document.body.style.overflow = "hidden",
                    e.__notice())
                },
                toggle: function() {
                    this.isWebFullScreen() ? this.exit() : this.enter()
                },
                isWebFullScreen: function() {
                    return !!this._wrapper && this._wrapper.hasClass("webfullscreen")
                }
            }
        });
        i.exports = new r
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#30#
    var n = function(e, t, i) {
        var n = e(18)
          , o = e(13)
          , a = e(31)
          , r = e(21)
          , c = e(12)
          , s = e(5)
          , p = e(32)
          , d = e(46)
          , l = e(45)
          , u = e(59)
          , f = e(39)
          , g = e(61)
          , h = e(62)
          , m = e(44)
          , v = e(60)
          , b = e(1)
          , _ = (e(10),
        e(25))
          , x = {}
          , y = new c("core");
        i.exports = o("core", {
            construct: function(e, t) {
                var i = this;
                i._plyct = t.plyct || +new Date,
                i.autoplay = "boolean" != typeof t.autoplay || t.autoplay,
                i.h5vars = t,
                i._firstPlay = !0,
                i._ADfirstPlay = !0,
                i._vdsSwitch = !1,
                i._isSkipAD = !0,
                i._videolist = [],
                i._movieinfo = null,
                i._skipHT = 0,
                i._skipTT = 0,
                i._aresloaded = !1,
                i._playingDuration = 0,
                i._timeMark = 0,
                i._loadTimePoint = 0,
                i._preMovieInfo = {
                    tvid: t.tvid,
                    vid: t.vid
                },
                m.init(i),
                _.usedTime_selfLoaded = new Date - t.pgct,
                _.pgct = t.pgct,
                _.browserType = t.browserType,
                _.pageTmpltType = t.pageTmpltType,
                i.autoplay ? _.sTime_showVideo = _.usedTime_selfLoaded : _.needRecord = !1,
                m.setPbInfo({
                    vfm: t.vfm,
                    vfrm: t.vfrm,
                    vvfrom: t.videoIsFromQidan
                }),
                i._recorder = new g(i),
                b.enableH5P2P && s.browser.CHROME && !s.os.ios && !s.os.android ? i._engine = new d(e,i.h5vars) : i._engine = new p(e,i.h5vars),
                y.log("engine type: " + i.getEngineType().toLowerCase()),
                i._emitter = new u(i),
                i._engine.assemble(),
                r.on("infoset", function() {
                    i._movieinfo.isVIP && i.refresh()
                })
            },
            extend: n,
            props: {
                eventlog: {},
                currStatus: "",
                errorcode: null
            },
            methods: {
                load: function(e) {
                    var t = this;
                    t._movieinfo && t._movieinfo.tvid == e.tvid && t._movieinfo.vid === e.vid || (parseInt(e.tvid, 10) < 9e7 && y.error(e.tvid + "is not invalid qipu id"),
                    t._loadTimePoint = (new Date).getTime(),
                    t._preMovieInfo = t._movieinfo,
                    t._movieinfo = new h,
                    t._movieinfo.tvid = e.tvid,
                    t._movieinfo.vid = e.vid,
                    e.cid && (t._movieinfo.adPlayerID = e.cid),
                    t._firstPlay = !0,
                    t._ADfirstPlay = !0,
                    t.setStartPlayTime(0),
                    x.__sendTmtsRPB || (x.__sendTmtsRPB = !0),
                    t._engine.updateMovieInfo(t._movieinfo))
                },
                checkPreload: function() {
                    var e = this;
                    if ("DATA" === e.getEngineType()) {
                        var t = !0
                          , i = e.getMovieInfo()
                          , n = e.getCurrenttime()
                          , o = e.getDuration();
                        if (t = t && !e.isAd(),
                        t = t && e.hasNextVideo(),
                        t = t && e._engine.pbDone(),
                        t = t && i.previewTime === 1 / 0,
                        t = t && o - n >= 5) {
                            var a = e._getVideoIndexInList(e._movieinfo.tvid);
                            -1 === a && (a = e._getVideoIndexInList(e._movieinfo.oldTvid));
                            var r = e._videolist[a + 1].tvid
                              , c = e._videolist[a + 1].vid;
                            e._engine.preload(r, c)
                        }
                    }
                },
                refresh: function() {
                    var e, t, i, n = this;
                    n._movieinfo && (e = n._movieinfo.tvid,
                    t = n._movieinfo.vid,
                    i = n._movieinfo.adPlayerID,
                    n._movieinfo = null,
                    n._engine.reset(),
                    n.load({
                        tvid: e,
                        vid: t,
                        cid: i,
                        autoplay: !0
                    }))
                },
                setAres: function(e) {
                    this._engine.setAresSDK(e)
                },
                getAres: function() {
                    return this._engine.getAresSDK()
                },
                setAresMW: function(e) {
                    this._engine.setAresMW(e)
                },
                getCurrentGas: function() {
                    return this._engine.getCurrentGas()
                },
                abortAres: function() {
                    this._engine.abortAres()
                },
                abortAllAres: function(e) {
                    this._engine._abortAllAres(e)
                },
                getEngineType: function() {
                    var e = "";
                    return this._engine instanceof p ? e = "HTTP" : this._engine instanceof d && (e = "DATA"),
                    e
                },
                _getdata: function() {
                    var e = this
                      , t = {};
                    return t["tvid"] = e._movieinfo.tvid,
                    t["vid"] = e._movieinfo.vid,
                    t["privateVideo"] = "0",
                    t["origin"] = "",
                    t
                },
                video: function() {
                    return this._engine.video()
                },
                play: function(e) {
                    this._engine.play(e)
                },
                pause: function(e) {
                    this._engine.pause(e)
                },
                isPaused: function() {
                    return this._engine.isPaused()
                },
                replay: function() {
                    this._engine.replay()
                },
                seek: function(e, t) {
                    y.log("Engine:seek(" + e + ")"),
                    this._engine.seek(e, t)
                },
                isSeeking: function() {
                    return this._engine.isSeeking()
                },
                switchDefinition: function(e) {
                    var t = this;
                    e !== t._engine.getCurrentVD() && (t._vdsSwitch = !0,
                    t.fire({
                        type: l.NTF_DefinitionSwitching,
                        data: e
                    }),
                    t._engine.switchVD(e))
                },
                isSwitchingDefinition: function() {
                    return this._vdsSwitch
                },
                getAudioTracks: function() {
                    return this._engine.getAudioTracks()
                },
                setAudioTracks: function(e) {},
                getBufferTime: function() {
                    return this._engine.getBufferTime()
                },
                getCurrenttime: function() {
                    return this._engine.getCurrenttime()
                },
                getPlayingDuration: function() {
                    return this._playingDuration
                },
                getSkipHeaderTime: function() {
                    return this._skipHT
                },
                getSkipTailTime: function() {
                    return this._skipTT
                },
                isSkipPrelude: function(e, t) {
                    var i = f.isSkipPrelude();
                    if ("boolean" != typeof e)
                        return i;
                    i != e && (f.isSkipPrelude(e),
                    !0 !== t && this._engine.skipPrelude(e))
                },
                setStartPlayTime: function(e, t) {
                    this._engine.setStartPlayTime(e, t)
                },
                getStartPlayTime: function() {
                    return this._engine.getStartPlayTime()
                },
                getDuration: function() {
                    return this._engine.getDuration()
                },
                getVolume: function() {
                    return this._engine.getVolume()
                },
                setVolume: function(e) {
                    this._engine.setVolume(e)
                },
                setMuted: function(e) {
                    var t = this._engine.getVolume();
                    this._tempvolume = t > 0 ? t : this._tempvolume || .6,
                    e ? this._engine.setVolume(0) : this._engine.setVolume(this._tempvolume)
                },
                getMuted: function() {
                    return 0 === this._engine.getVolume()
                },
                getVideoInfo: function(e) {
                    var t = this._movieinfo || this._preMovieInfo;
                    m.setCurrentVD(this._engine.getCurrentVD()),
                    a.get({
                        tvid: t.tvid,
                        vid: t.vid
                    }, e)
                },
                getPlayInfo: function(e) {
                    var t = this;
                    t._getpcall = t._getpcall || [],
                    t._getpcall.push(e);
                    var i = function() {
                        var e = {}
                          , i = t._movieinfo;
                        e.tvid = i.tvid,
                        e.vid = i.vid,
                        e.cid = i.cid,
                        e.albumId = i.albumId,
                        e.duration = t._engine.getDuration(),
                        e.rate = t._engine.getCurrentVD(),
                        e.vidl = t._engine.getVidl(),
                        e.previewImageUrl = i.previewImageUrl,
                        e.keyPoints = i.originalData ? i.originalData.data.vi.fl : [];
                        var n = t._getpcall.slice(0);
                        t._getpcall = [];
                        for (var o = 0; o < n.length; o++)
                            n[o] && function(t) {
                                setTimeout(function() {
                                    t(e)
                                }, 0)
                            }(n[o]);
                        n = null
                    };
                    t._movieinfo ? i() : t.on(l.NTF_VRSReady, i)
                },
                getCurrentVD: function() {
                    return this._engine.getCurrentVD()
                },
                getRealArea: function() {
                    return this._engine.getRealArea()
                },
                getMovieInfo: function() {
                    return this._movieinfo || {}
                },
                getdefaultvds: function() {
                    return [{
                        vd: 96,
                        value: "极速"
                    }, {
                        vd: 1,
                        value: "流畅"
                    }, {
                        vd: 2,
                        value: "高清"
                    }, {
                        vd: 3,
                        value: "超清"
                    }, {
                        vd: 4,
                        value: "720P"
                    }, {
                        vd: 5,
                        value: "1080P"
                    }, {
                        vd: 10,
                        value: "4K"
                    }]
                },
                getCtrlVds: function() {
                    return this._engine.getCtrlVds()
                },
                getTypeByValue: function(e) {
                    for (var t, i = this.getdefaultvds(), n = 0; n < i.length; n++)
                        i[n].vd === e ? t = i[n].value : i[n].value === e && (t = i[n].vd);
                    return t
                },
                getSrc: function() {
                    return this._engine.getSrc()
                },
                getCurrStatus: function() {
                    return this.currStatus
                },
                isAd: function() {
                    return this._engine.isAd()
                },
                getInfoFromVideoList: function(e, t) {
                    for (var i, n = null, o = 0; o < this._videolist.length; o++)
                        if (i = this._videolist[o],
                        i.tvid == e && i.vid === t) {
                            n = i;
                            break
                        }
                    return n
                },
                _getVideoIndexInList: function(e) {
                    for (var t, i = -1, n = 0; n < this._videolist.length; n++)
                        if (t = this._videolist[n],
                        t.tvid == e) {
                            i = n;
                            break
                        }
                    return i
                },
                addVideoList: function(e) {
                    var t = this
                      , i = e.list || []
                      , n = []
                      , o = !1;
                    i.forEach(function(e) {
                        -1 === t._getVideoIndexInList(e.tvid) && (t._videolist.push({
                            tvid: parseInt(e.tvid, 10),
                            vid: e.vid,
                            isMember: "true" == e.isMemberVideo,
                            isQiyiProduced: "1" == e.qiyiProduced,
                            isExclusive: "1" == e.exclusive,
                            cid: e.cid
                        }),
                        n.push(e.tvid + "_" + e.vid),
                        o = !0)
                    }),
                    o && (y.log("addVideoList: [" + n.join() + "]"),
                    n.splice(0, n.length),
                    t.fire({
                        type: l.NTF_VideoListChanged,
                        data: i
                    }),
                    t.checkPreload()),
                    t.fire({
                        type: l.NTF_ADDVideoList,
                        data: e
                    })
                },
                addPlayListView: function(e) {
                    var t = this;
                    e.request = !0,
                    t.fire({
                        type: l.NTF_ADDVideoList,
                        data: e
                    })
                },
                removeVideoList: function(e) {
                    var t = this
                      , i = e.list;
                    0 === i.length ? t._videolist.splice(0, t._videolist.length) : i.forEach(function(e) {
                        for (var i, n = 0; n < t._videolist.length; n++)
                            i = t._videolist[n],
                            i.tvid == e.tvid && i.vid === e.vid && t._videolist.splice(n, 1)
                    }),
                    t.fire({
                        type: l.NTF_VideoListChanged,
                        data: t._videolist
                    })
                },
                _switchVideoAction: function(e) {
                    var t = this
                      , i = !0 === e.autoSwitch && t._engine.hasPreload(e.tvid, e.vid);
                    e.tvid !== t._movieinfo.tvid && e.vid !== t._movieinfo.vid && (i || (t._engine.pause(),
                    t._engine.clearData(),
                    v.removeAll(),
                    v.add(l.Status_Idle)),
                    function() {
                        e.autoSwitch = i;
                        var t = "\nswitch video:" + c.stringify(e)
                          , n = "\n" + new Array(t.length).join("-");
                        y.log(n + t + n)
                    }(),
                    t.load({
                        tvid: e.tvid,
                        vid: e.vid
                    }))
                },
                switchVideo: function(e) {
                    var t = this
                      , i = t.getEngineType();
                    if (e)
                        switch (i) {
                        case "HTTP":
                            t._switchVideoAction(e);
                            break;
                        case "DATA":
                            t._switchActions = t._switchActions || [],
                            t._switchActions.push(e),
                            1 === t._switchActions.length && (0 === t._loadTimePoint || (new Date).getTime() - t._loadTimePoint > 1e3) && (t._switchVideoAction(e),
                            setTimeout(function() {
                                var e = t._switchActions.length
                                  , i = t._switchActions[e - 1];
                                t._switchActions.splice(0, e),
                                e > 1 && t.switchVideo(i)
                            }, 1e3))
                        }
                },
                switchNextVideo: function(e) {
                    var t = this
                      , i = t._getVideoIndexInList(t._movieinfo.tvid)
                      , n = t._videolist;
                    -1 === i && (i = t._getVideoIndexInList(t._movieinfo.oldTvid)),
                    (-1 === i && n.length > 0 || i > -1 && n[i + 1]) && t.switchVideo({
                        autoSwitch: e,
                        tvid: n[i + 1].tvid,
                        vid: n[i + 1].vid
                    })
                },
                switchPreVideo: function() {
                    var e = this
                      , t = e._getVideoIndexInList(e._movieinfo.tvid)
                      , i = e._videolist;
                    -1 === t && (t = e._getVideoIndexInList(e._movieinfo.oldTvid)),
                    t > -1 && i[t - 1] && e.switchVideo({
                        tvid: i[t - 1].tvid,
                        vid: i[t - 1].vid
                    })
                },
                hasNextVideo: function() {
                    var e = this
                      , t = e._getVideoIndexInList(e._movieinfo.tvid)
                      , i = e._videolist;
                    return -1 === t && (t = e._getVideoIndexInList(e._movieinfo.oldTvid)),
                    !!(-1 === t && i.length > 0 || t > -1 && i[t + 1])
                },
                checkADSkipped: function() {
                    return !!this._isSkipAD
                },
                getPoster: function() {
                    return this._movieinfo.poster
                },
                pbVisualizer: function() {
                    var e = this;
                    "DATA" === e.getEngineType() && e._engine.pbVisualizer()
                },
                pbLog: function() {
                    var e = this;
                    "DATA" === e.getEngineType() && e._engine.pbLog()
                },
                pbVersion: function() {
                    try {
                        return this._engine.pbVersion()
                    } catch (e) {
                        return ""
                    }
                },
                isTryWatch: function() {
                    return this._engine.isTryWatch()
                },
                getPreviewType: function() {
                    return parseInt(this._movieinfo.previewType || -1, 10)
                },
                getPreviewTime: function() {
                    return this._engine.getPreviewTime()
                },
                getPreviewTipType: function() {
                    return parseInt(this._movieinfo.authTipType || -1, 10)
                },
                recharge: function(e, t) {
                    this._engine.recharge(e, t)
                },
                jsNotifyAdManager: function(e) {
                    var t = this
                      , i = function() {
                        t.fire({
                            type: l.NTF_AD_NotifyManager,
                            data: e
                        })
                    };
                    t._aresloaded ? i() : t.on(l.Status_AdLoaded, function() {
                        i()
                    })
                },
                hasStatus: function(e) {
                    return v.has(e)
                },
                setPbisdm: function(e) {
                    m.setPbisdm(e)
                },
                destroy: function() {
                    var e = this;
                    e._engine.clearData(),
                    e._engine.reset(),
                    e._engine.destroy()
                }
            }
        })
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#31#
    var n = function(e, t, i) {
        var n = e(8)
          , o = {}
          , a = function(e, t) {
            return e + "|" + t
        };
        i.exports = {
            get: function(e, t) {
                var i = e.tvid
                  , r = e.vid || ""
                  , c = a(i, r);
                o[c] = o[c] || [],
                o[c].push(t),
                i && r && t && n.jsonp({
                    url: "//cache.video.qiyi.com/jp/vi/" + i + "/" + r + "/",
                    memory: !0,
                    success: function(e) {
                        var t = a(e.tvid, e.vid)
                          , i = a(e.videoQipuId, e.vid)
                          , n = [];
                        o[t] ? (n = (o[t] || []).slice(0),
                        delete o[t]) : o[i] && (n = (o[i] || []).slice(0),
                        delete o[i]);
                        for (var r = 0; r < n.length; r++)
                            n[r] && function(e, t) {
                                setTimeout(function() {
                                    e({
                                        tvid: t.videoQipuId,
                                        vid: t.vid,
                                        albumId: t.albumQipuId,
                                        cid: t.c,
                                        vi: t
                                    })
                                }, 0)
                            }(n[r], e);
                        n = null
                    },
                    failure: function(e) {
                        t(e || {})
                    }
                })
            },
            isUGC: function(e) {
                return !!((e += "") && e.length > 2 && "9" == e.charAt(e.length - 1) && "0" == e.charAt(e.length - 2) && (e = parseInt(e, 10)) > 0 && e > 9e7)
            }
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#32#
    var n = function(e, t, i) {
        var n = e(13)
          , o = e(12)
          , a = e(33)
          , r = e(34)
          , c = e(41)
          , s = e(42)
          , p = e(38)
          , d = e(40)
          , l = new o("httpEngine");
        i.exports = n("httpEngine", {
            extend: r,
            construct: function(e, t) {
                var i = this;
                c.init(i)
            },
            methods: {
                assemble: function() {
                    this.fire({
                        type: p.Status_Assembled,
                        data: {}
                    })
                },
                setSrc: function(e, t, i) {
                    var n = this;
                    n._isAd = 1 === parseInt(t, 10);
                    var o = n._isAd ? 0 : n.getStartPlayTime();
                    n._isAd || l.log("continue play time: " + o),
                    n.setDecodeSrc(e, o),
                    i ? n.pause() : n.play()
                },
                loadMovie: function(e, t) {
                    var i = this;
                    clearTimeout(i._midrollTimer),
                    i._noticeDataStart(),
                    i._loadTMTS(e, t, function() {
                        i._vdSwitch ? i.setSrc(i._movieinfo.url, "0", i._vdSwitchVideoPaused) : i._noticeDataReady()
                    })
                },
                isAd: function() {
                    return this._isAd
                },
                _switchVD: function(e) {
                    var t = this;
                    t.loadMovie(t._movieinfo.tvid, e.vid)
                },
                _loadTMTS: function(e, t, i) {
                    var n = this;
                    n._movieinfo.tvid = e,
                    n._movieinfo.vid = t,
                    n._movieinfo.oldTvid = e;
                    var o = function(e) {
                        var t = {
                            MISSPARAM: 1,
                            A00003: 1,
                            A00010: 1,
                            A00114: 1,
                            A00115: 1,
                            A00301: 1,
                            A00302: 1,
                            A00001: 2,
                            A00101: 2,
                            A00004: 6,
                            A00005: 6,
                            A00113: 7,
                            Q00201: 11,
                            Q00202: 11,
                            Q00203: 11,
                            A00110: 12,
                            A00111: 13,
                            A00116: 14,
                            A00002: 21,
                            A00011: 21,
                            A00013: 21,
                            Q00501: 22,
                            P00001: 101,
                            P00002: 102
                        };
                        n.brokedown(t[e], "ENGINE_" + e, "6000")
                    };
                    e && t ? s.request({
                        cupid: n._movieinfo.adPlayerID,
                        tvid: e,
                        vid: t
                    }, function(e) {
                        try {
                            if (n._movieinfo.previewTime = 1 / 0,
                            n._movieinfo.tvid = e.data.tvid,
                            n._movieinfo.albumId = e.data.aid,
                            n._movieinfo.duration = e.data.duration,
                            n._movieinfo.url = e.data.m3u,
                            n._movieinfo.cid = e.data.cid,
                            n._movieinfo.clientIp = e.data.clientIp,
                            n._movieinfo.ugc = e.data.ugc,
                            n._movieinfo.isTryWatch = 1 === parseInt(e.data.prv, 10),
                            n._movieinfo.previewTime = 36e4,
                            n._movieinfo.authTipType = parseInt(e.data.tipType, 10),
                            n._movieinfo.prelude = {
                                headTime: -1,
                                tailTime: -1
                            },
                            n._movieinfo.vidl = [],
                            e.data.vidl)
                                for (var t = 0; t < e.data.vidl.length; t++) {
                                    var a = e.data.vidl[t].screenSize.split("x");
                                    n._movieinfo.vidl.push({
                                        vid: e.data.vidl[t].vid,
                                        vd: e.data.vidl[t].vd,
                                        realArea: {
                                            width: a[0],
                                            height: a[1]
                                        }
                                    })
                                }
                            n._vd = n._findBestPlayVd(e.data.vd || null),
                            n._movieinfo.vd = n._vd || ""
                        } catch (t) {
                            return n._movieinfo = null,
                            o(e["code"])
                        }
                        if ("A00000" == e.data.ds)
                            ;
                        else if ("A00015" === e.data.ds)
                            ;
                        else if ("A00012" != e.data.ds)
                            return o(e.data.ds);
                        i && i()
                    }, o) : o("MISSPARAM")
                },
                _getCurrentGas: function() {
                    var e = this
                      , t = {}
                      , i = e._movieinfo.tvid;
                    return e.isAd() ? t = e._gas : t.videoEventId = a.getEventId(i),
                    t
                },
                _abortAllAres: function(e) {
                    function t() {
                        i.setSrc(i._movieinfo.url, 0, !1)
                    }
                    var i = this
                      , n = parseInt(i._movieinfo.tvid, 10);
                    if (i.getSrc() !== i._movieinfo.url)
                        switch (e) {
                        case "preroll":
                            d.clearPres(n),
                            t();
                            break;
                        case "midroll":
                            l.debug("reload tmts!"),
                            d.clearMids(n),
                            i._loadTMTS(i._movieinfo.tvid, i._movieinfo.vid, function() {
                                t()
                            })
                        }
                },
                _clearData: function() {
                    d.clearAll()
                }
            }
        })
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#33#
    var n = function(e, t, i) {
        function n(e) {
            e = parseInt(e, 10);
            var t = r(e + "IQIYI" + (new Date).getTime());
            return c[e] = t,
            t
        }
        function o(e) {
            var t;
            for (var i in c)
                if (c[i] === e) {
                    t = i;
                    break
                }
            return parseInt(t, 10)
        }
        function a(e) {
            return c[e] || ""
        }
        var r = e(9)
          , c = {};
        i.exports = {
            generate: n,
            getEpisodeId: o,
            getEventId: a
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#34#
    var n = function(e, t, i) {
        var n = e(13)
          , o = e(12)
          , a = e(14)
          , r = e(21)
          , c = e(33)
          , s = e(35)
          , p = e(36)
          , d = e(38)
          , l = (e(39),
        e(40))
          , u = new o("baseEngine");
        i.exports = n("baseEngine", {
            extend: p,
            construct: function(e, t) {
                var i = this;
                i._param = t,
                i._isAd = !1,
                i._startPlayTime = 0,
                i._vd = a.read("QiyiPlayerVD"),
                i._realArea = {
                    width: 16,
                    height: 9
                }
            },
            methods: {
                brokedown: function(e, t, i) {
                    var n = this;
                    n.pause(),
                    n.fire({
                        type: d.Status_Error,
                        data: {
                            code: e,
                            realcode: t,
                            ec: i
                        }
                    })
                },
                reset: function() {
                    var e = this;
                    e._vdSwitch = !1,
                    e._isAd = !1,
                    e._startPlayTime = 0,
                    e._movieinfo = null,
                    clearTimeout(e._switchDelayTimer)
                },
                destroy: function() {
                    this.fire({
                        type: d.Status_Destroy
                    })
                },
                updateMovieInfo: function(e) {
                    var t = this;
                    t._movieinfo && l.clear(t._movieinfo.tvid),
                    t.reset(),
                    t._movieinfo = e,
                    t.fire({
                        type: d.NTF_MovieInfoChange
                    }),
                    l.valid(e.tvid, !0),
                    t.loadMovie(e.tvid, e.vid)
                },
                hasPreload: function(e, t) {
                    return !1
                },
                clearData: function() {
                    u.log("clear engine data!"),
                    this._clearData()
                },
                setAresSDK: function(e) {
                    var t = this
                      , i = e.init;
                    t._aressdk = e,
                    t.fire({
                        type: d.NTF_ARES_Load
                    }),
                    e.init = function(n) {
                        i.call(e, n),
                        t.fire({
                            type: d.NTF_ARES_Init
                        }),
                        u.debug("ares init: " + o.stringify(n))
                    }
                    ,
                    e.on("roll-play", function(e) {
                        var i = e.rollType
                          , n = e.videoEventId
                          , a = c.getEpisodeId(n)
                          , r = l.valid(a);
                        u.debug("ares" + (r ? "" : " invalid") + " roll-play:" + o.stringify(e)),
                        r && t.fire({
                            type: d.NTF_ARES_Play,
                            data: {
                                rollType: i,
                                videoId: a
                            }
                        })
                    }),
                    e.on("roll-ended", function(e) {
                        var i = e.rollType
                          , n = e.videoEventId
                          , a = c.getEpisodeId(n)
                          , r = !t._movieinfo || t._movieinfo.tvid == a
                          , s = l.valid(a) && r;
                        u.debug("ares" + (s ? "" : " invalid") + " roll-ended:" + o.stringify(e)),
                        s && t.fire({
                            type: d.NTF_ARES_End,
                            agent: "ares",
                            data: {
                                rollType: i,
                                videoId: a
                            }
                        })
                    }),
                    e.on("roll-load-finish", function(e) {
                        var i = e.rollType
                          , n = e.videoEventId
                          , a = c.getEpisodeId(n)
                          , r = l.valid(a);
                        u.log("roll-load-finish" + (r ? "" : " invalid") + ":" + o.stringify(e)),
                        r && t.fire({
                            type: d.NTF_ARES_GasFinish,
                            data: {
                                rollType: i,
                                videoId: a
                            }
                        })
                    }),
                    e.on("error", function(e) {
                        t.brokedown(7001, "P07001"),
                        u.log("ad error" + o.stringify(e))
                    }),
                    e.on("adplayer_ad_info", function(e) {
                        e = e || {};
                        var i = e.videoEventId
                          , n = c.getEpisodeId(i)
                          , a = l.valid(n);
                        u.debug("ares notice-info" + (a ? "" : " invalid") + ":" + o.stringify(e)),
                        a && t.fire({
                            type: d.NTF_ARES_Info,
                            data: e
                        })
                    })
                },
                getAresSDK: function() {
                    return this._aressdk
                },
                setAresMW: function(e) {
                    var t = this;
                    t._aresmw = e,
                    t.fire({
                        type: "ares_mwready"
                    }),
                    e.bussiness.on("_playdata_", function(e) {
                        var i = e.data
                          , n = i.videoEventId
                          , a = c.getEpisodeId(n)
                          , r = l.valid(a);
                        u.debug("ares mw load" + (r ? "" : " invalid") + ":" + o.stringify(i)),
                        r && t.fire({
                            type: d.NTF_ARES_Gas,
                            data: i || {}
                        })
                    })
                },
                abortAres: function() {
                    var e = this;
                    u.debug("ares call abort! current gas: " + o.stringify(e.getCurrentGas())),
                    e.isAd() && e._abortAres && e._abortAres()
                },
                isTryWatch: function() {
                    return !(!this._movieinfo || !this._movieinfo.isTryWatch)
                },
                getPreviewTime: function() {
                    var e = this;
                    return e._movieinfo ? e._movieinfo.previewTime : 1 / 0
                },
                recharge: function(e, t) {
                    this._noticeRecharge(e, t)
                },
                setStartPlayTime: function(e, t) {
                    var i = this;
                    e < 0 ? u.error("play start time set error!") : i._startPlayTime = i.isTryWatch() && !t ? 0 : e
                },
                getStartPlayTime: function() {
                    return this._startPlayTime
                },
                _findBestPlayVd: function(e, t) {
                    var i, n, o = this, a = !1, r = [];
                    for (e = parseInt(e || o._vd || null, 10),
                    t = t || o.getVidl(),
                    n = 0; n < t.length; n++)
                        if (r.push(t[n].vd),
                        t[n].vd === e) {
                            a = !0;
                            break
                        }
                    for (i = a ? e : -1 != r.indexOf(2) ? 2 : -1 != r.indexOf(1) ? 1 : -1 != r.indexOf(96) ? 96 : t[t.length - 1].vd,
                    n = 0; n < t.length; n++)
                        if (t[n].vd === i) {
                            o._realArea = t[n].realArea;
                            break
                        }
                    return i
                },
                getCurrentGas: function() {
                    return this._getCurrentGas()
                },
                getCurrentVD: function() {
                    return parseInt(this._vd, 10)
                },
                getRealArea: function() {
                    return this._realArea
                },
                getVidl: function() {
                    var e = this
                      , t = [];
                    return e._movieinfo && s.isArray(e._movieinfo.vidl) && (t = e._movieinfo.vidl),
                    t.filter(function(t) {
                        var i = !0;
                        return !r.isVipSync() && e.getCtrlVds().indexOf(t.vd) > -1 && (i = !1),
                        i
                    })
                },
                getCtrlVds: function() {
                    return this._ctrlBids || []
                },
                switchVD: function(e) {
                    var t, i = this, n = i._movieinfo.vidl;
                    i._vd = e,
                    a.write("QiyiPlayerVD", e);
                    for (var o = 0; o < n.length; o++)
                        if (n[o].vd === e) {
                            t = n[o],
                            i._realArea = t.realArea;
                            break
                        }
                    i._switchVD && (i._vdSwitch = !0,
                    i._vdSwitchVideoPaused = i.isPaused(),
                    u.log("definition changing: " + e),
                    i._switchVD(t))
                },
                skipPrelude: function(e) {
                    var t = this;
                    "boolean" == typeof e && t.fire({
                        type: d.NTF_SetSkipPrelude,
                        data: {
                            skip: e
                        }
                    })
                },
                _noticeVidChanged: function() {
                    var e = this;
                    e._vdSwitch = !1,
                    e.fire({
                        type: d.NTF_VDChanged
                    })
                },
                _noticeTvidChanged: function() {
                    var e = this;
                    e._vdSwitch = !1,
                    e.fire({
                        type: d.NTF_TVIDChanged
                    })
                },
                _noticeDataPreloaded: function() {
                    var e = this;
                    e.fire({
                        type: d.NTF_VRSPreloaded,
                        data: e._preloadedMovieInfo
                    })
                },
                _noticeReJointPreload: function() {
                    var e = this;
                    e.fire({
                        type: d.NTF_ReJointPreload,
                        data: e._preloadedMovieInfo
                    })
                },
                _noticeDataStart: function() {
                    var e = this;
                    e.fire({
                        type: d.NTF_VRSStart,
                        data: e._movieinfo
                    })
                },
                _noticeDataReady: function() {
                    var e = this;
                    e.fire({
                        type: d.NTF_VRSReady,
                        data: e._movieinfo
                    }),
                    e._hasVRSReady ? e._noticeTvidChanged() : e._hasVRSReady = !0
                },
                _noticeRecharge: function(e, t) {
                    var i = this;
                    i.pause(),
                    i.fire({
                        type: d.NTF_Recharge,
                        data: {
                            tvid: i._movieinfo.tvid,
                            vid: i._movieinfo.vid,
                            code: e,
                            from: t || 0,
                            origin: i._param.origin || i._param.parentId
                        }
                    })
                }
            }
        })
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#35#
    var n = function(e, t, i) {
        var n = function(e) {
            return "number" == typeof e
        }
          , o = function(e) {
            return "[object object]" === Object.prototype.toString.call(e).toLowerCase()
        }
          , a = function(e) {
            return Array.isArray ? Array.isArray(e) : "[object array]" === Object.prototype.toString.call(e).toLowerCase()
        }
          , r = function(e) {
            if (isNaN(e))
                return "00:00:00";
            e = Math.round(e);
            var t = e >= 3600 ? Math.floor(e / 3600) : 0
              , i = e % 3600 >= 60 ? Math.floor(e % 3600 / 60) : 0;
            return i = i >= 10 ? i : "0" + i,
            e = parseInt(i, 10) >= 0 ? e % 3600 % 60 : e,
            e = e >= 10 ? e : "0" + e,
            t > 0 ? (t > 9 ? t : "0" + t) + ":" + i + ":" + e : i + ":" + e
        };
        i.exports = {
            isNumber: n,
            isArray: a,
            isObject: o,
            formatMilliseconds: r
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#36#
    var n = function(e, t, i) {
        var n = e(18)
          , o = e(13)
          , a = e(5)
          , r = e(12)
          , c = new r("video decoder")
          , s = e(37);
        i.exports = o("decode", {
            construct: function(e) {
                var t = this;
                t._video = e,
                t._curStatus = "",
                t.hasSeeking = !1,
                t._currentManualAction = null,
                t._currentCodeActionList = [];
                var i = function(i) {
                    if ("" !== e.src) {
                        var n = i.status;
                        t.fire({
                            type: s.NTF_StatusChanged,
                            data: i
                        }),
                        t._curStatus = n,
                        n === s.Status_Playing ? t._playing = !0 : t._playing = !1
                    }
                }
                  , n = function(e) {
                    if (t._currentManualAction && t._currentManualAction === e)
                        return t._currentManualAction = null,
                        s.Action_Type_Controls;
                    if (-1 != t._currentCodeActionList.indexOf(e)) {
                        var i = t._currentCodeActionList.indexOf(e);
                        return t._currentCodeActionList.splice(i, 1),
                        s.Action_Type_Code
                    }
                    return s.Action_Type_Native
                };
                t._canFireDecodeEvt = function() {
                    return !0
                }
                ,
                t._setSrc = function(e) {
                    1 === arguments.length && (t._video.setAttribute("src", e),
                    a.os.ios || t._video.load())
                }
                ,
                e.addEventListener("loadstart", function() {
                    i({
                        status: s.Status_Loadstart,
                        actionType: s.Action_Type_Native
                    })
                }),
                e.addEventListener("error", function(e) {
                    i({
                        status: s.Status_LoadFailed,
                        actionType: s.Action_Type_Native
                    })
                }),
                e.addEventListener("stalled", function(e) {
                    i({
                        status: s.Status_Stalled,
                        actionType: s.Action_Type_Native
                    })
                }),
                e.addEventListener("loadedmetadata", function() {
                    i({
                        status: s.Status_LoadedMetaData,
                        actionType: s.Action_Type_Native
                    })
                }),
                e.addEventListener("canplay", function() {
                    i({
                        status: s.Status_Canplay,
                        actionType: s.Action_Type_Native
                    })
                }),
                e.addEventListener("pause", function() {
                    t._canFireDecodeEvt() && i({
                        status: s.Status_Paused,
                        actionType: n(s.Status_Paused)
                    })
                }),
                e.addEventListener("play", function() {
                    t._canFireDecodeEvt() && i({
                        status: s.Status_Play,
                        actionType: n(s.Status_Play)
                    })
                }),
                e.addEventListener("playing", function() {
                    t._canFireDecodeEvt() && (t.hasSeeking = !1,
                    i({
                        status: s.Status_Playing,
                        actionType: s.Action_Type_Native
                    }))
                }),
                e.addEventListener("waiting", function() {
                    t._canFireDecodeEvt() && i({
                        status: s.Status_Waiting,
                        actionType: s.Action_Type_Native
                    })
                }),
                e.addEventListener("seeking", function() {
                    if (t._canFireDecodeEvt()) {
                        a.os.ios || a.os.android || i({
                            status: s.Status_Waiting,
                            actionType: s.Action_Type_Code
                        });
                        var e = {
                            current: t.getCurrenttime(),
                            duration: t.getDuration()
                        };
                        e["actionType"] = n(s.NTF_Seeking),
                        t.fire({
                            type: s.NTF_Seeking,
                            data: e
                        })
                    }
                }),
                e.addEventListener("ended", function() {
                    t._canFireDecodeEvt() && i({
                        status: s.Status_Stoped,
                        actionType: s.Action_Type_Native
                    })
                }),
                e.addEventListener("canplaythrough", function() {
                    t.fire({
                        type: s.NTF_CanPlayThrough,
                        data: {
                            actionType: s.Action_Type_Native
                        }
                    })
                }),
                e.addEventListener("volumechange", function() {
                    t.fire({
                        type: s.NTF_VolumeChanged,
                        data: t._video.volume,
                        actionType: s.Action_Type_Native
                    })
                }),
                e.addEventListener("durationchange", function() {
                    t._canFireDecodeEvt() && t.fire({
                        type: s.NTF_DurationChanged,
                        data: t.getDuration(),
                        actionType: s.Action_Type_Native
                    })
                }),
                e.addEventListener("timeupdate", function() {
                    t.isPaused() || (t.fire({
                        type: s.NTF_TimeUpdate,
                        data: {
                            current: t.getCurrenttime(),
                            duration: t.getDuration(),
                            actionType: s.Action_Type_Native
                        }
                    }),
                    t._playing || (t.hasSeeking = !1,
                    i({
                        status: s.Status_Playing,
                        actionType: n(s.Status_Playing)
                    })))
                }),
                e.addEventListener("progress", function() {
                    t._canFireDecodeEvt() && t.fire({
                        type: s.NTF_Progress,
                        data: {
                            buffer: t.getBufferTime(),
                            actionType: s.Action_Type_Native
                        }
                    })
                }),
                i({
                    status: s.Status_Idle
                }),
                t._statusChanged = i,
                t._checkActionType = n
            },
            extend: n,
            methods: {
                video: function() {
                    return this._video
                },
                play: function(e) {
                    var t = this;
                    e ? t._currentManualAction = s.Status_Play : t._currentCodeActionList.push(s.Status_Play);
                    var i = t._video.play();
                    void 0 !== i && i.then(function() {})["catch"](function(e) {
                        c.warn(e.message)
                    })
                },
                pause: function(e) {
                    e ? this._currentManualAction = s.Status_Paused : this._currentCodeActionList.push(s.Status_Paused),
                    this._video.pause()
                },
                isPaused: function() {
                    return this._video.paused
                },
                replay: function() {
                    this._video.play(this._video.src)
                },
                seek: function(e, t) {
                    var i = this;
                    i.hasSeeking = !0;
                    var n = i._video.seekable;
                    1 === n.length && n.end(0) > e ? (t ? i._currentManualAction = s.NTF_Seeking : this._currentCodeActionList.push(s.NTF_Seeking),
                    e >= 0 && e <= i.getDuration() && (i._video.currentTime = e),
                    i.isPaused() && i.play()) : setTimeout(function() {
                        i.seek(e)
                    }, 10)
                },
                isSeeking: function() {
                    return this.hasSeeking
                },
                setDecodeSrc: function(e, t) {
                    var i = this;
                    i._setSrc(e),
                    c.debug("decode src current time :" + t);
                    try {
                        i._video.duration = 0,
                        i._video.buffered.length = 0,
                        t > 0 ? i._video.addEventListener("loadedmetadata", function e() {
                            t < i.getDuration() && (i._video.currentTime = t),
                            i._video.removeEventListener("loadedmetadata", e)
                        }, !1) : i._video.currentTime = 0
                    } catch (e) {}
                },
                getSrc: function() {
                    return this._video.src
                },
                getAudioTracks: function() {
                    return this._video.audioTracks
                },
                setAudioTracks: function(e) {},
                getBufferTime: function() {
                    var e = this
                      , t = 0;
                    return e._video.buffered.length > 0 && (t = e._video.buffered.end(e._video.buffered.length - 1)),
                    t
                },
                getBuffered: function() {
                    return this._video.buffered
                },
                getCurrenttime: function() {
                    var e = this
                      , t = e.getDuration()
                      , i = this._video.currentTime || 0;
                    return i < t ? i : t
                },
                getDuration: function() {
                    return this._video.duration || 0
                },
                getVolume: function() {
                    return this._video.volume
                },
                setVolume: function(e) {
                    this._video.volume = e
                },
                setautoplay: function(e) {
                    this._autoplay = e,
                    this._video.autoplay = this._autoplay
                },
                getautoplay: function() {
                    return this._autoplay
                }
            }
        })
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#37#
    var n = function(e, t, i) {
        i.exports = {
            Status_Idle: "idle",
            Status_Loadstart: "loadstart",
            Status_Loaddone: "loaddone",
            Status_LoadFailed: "error",
            Status_LoadedMetaData: "loadedmetadata",
            Status_Canplay: "canplay",
            Status_Waiting: "waiting",
            Status_Paused: "paused",
            Status_Play: "play",
            Status_Playing: "playing",
            Status_Stoped: "ended",
            Status_Stalled: "stalled",
            NTF_StatusChanged: "statusChanged",
            NTF_CanPlayThrough: "canplaythrough",
            NTF_VolumeChanged: "volumechanged",
            NTF_DurationChanged: "durationchange",
            NTF_Seeking: "seeking",
            NTF_TimeUpdate: "timeupdate",
            NTF_Progress: "progress",
            Action_Type_Controls: "controls",
            Action_Type_Code: "code",
            Action_Type_Native: "native"
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#38#
    var n = function(e, t, i) {
        var n = 0
          , o = "engine_ntf_";
        i.exports = {
            Status_Assembled: o + ++n,
            Status_Error: o + ++n,
            Status_Done: o + ++n,
            Status_Destroy: o + ++n,
            NTF_MovieInfoChange: o + ++n,
            NTF_VRSStart: o + ++n,
            NTF_VRSReady: o + ++n,
            NTF_VRSPreloaded: o + ++n,
            NTF_ReJointPreload: o + ++n,
            NTF_TVIDChange: o + ++n,
            NTF_TVIDChanged: o + ++n,
            NTF_VDChanged: o + ++n,
            NTF_Recharge: o + ++n,
            NTF_SetSkipPrelude: o + ++n,
            NTF_ARES_Load: o + ++n,
            NTF_ARES_Init: o + ++n,
            NTF_ARES_Gas: o + ++n,
            NTF_ARES_GasFinish: o + ++n,
            NTF_ARES_Info: o + ++n,
            NTF_ARES_Play: o + ++n,
            NTF_ARES_End: o + ++n
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#39#
    var n = function(e, t, i) {
        var n = e(13)
          , o = e(12)
          , a = e(10)
          , r = e(18)
          , c = (new o("engineSetting"),
        n("engineSetting", {
            extend: r,
            construct: function() {},
            methods: {
                isSkipPrelude: function(e) {
                    if ("boolean" != typeof e)
                        return "skip" === a.get("QC157", {
                            memory: !0
                        });
                    e ? a.set("QC157", "skip", {
                        expires: 31536e6,
                        path: "/",
                        domain: "iqiyi.com"
                    }) : a.remove("QC157", {
                        path: "/",
                        domain: "iqiyi.com"
                    })
                }
            }
        }));
        i.exports = new c
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#40#
    var n = function(e, t, i) {
        var n = e(13)
          , o = e(12)
          , a = e(35)
          , r = (e(9),
        e(18))
          , c = (new o("EpisodeManager"),
        {})
          , s = function(e) {
            return parseInt(e, 10)
        }
          , p = n("EpisodeManager", {
            extend: r,
            construct: function() {},
            methods: {
                _ensureDataStructure: function(e) {
                    var t = c[e] || {};
                    a.isObject(t.pres) ? (t.pres.finish = !!t.pres.finish,
                    t.pres.queue = a.isArray(t.pres.queue) ? t.pres.queue : []) : t.pres = {
                        finish: !1,
                        queue: []
                    },
                    a.isObject(t.mids) ? (t.mids.finish = !!t.mids.finish,
                    t.mids.queue = a.isArray(t.mids.queue) ? t.mids.queue : []) : t.mids = {
                        finish: !1,
                        queue: []
                    },
                    a.isObject(t.features) ? (t.features.finish = !!t.features.finish,
                    t.features.queue = a.isArray(t.features.queue) ? t.features.queue : []) : t.features = {
                        finish: !1,
                        queue: []
                    },
                    c[e] = t
                },
                clear: function(e) {
                    e = s(e),
                    delete c[e]
                },
                clearAll: function() {
                    c = {}
                },
                addPres: function(e, t) {
                    var i = this;
                    e = s(e),
                    i.valid(e) && a.isArray(t) && (c[e].pres.queue = c[e].pres.queue.concat(t))
                },
                finishPres: function(e, t) {
                    var i = this;
                    if (e = s(e),
                    i.valid(e)) {
                        if ("boolean" != typeof t)
                            return c[e].pres.finish;
                        var n = c[e].pres;
                        t && !1 === n.finish && i.fire({
                            type: "finishAddPres",
                            data: {
                                videoId: e,
                                length: n.queue.length
                            }
                        }),
                        n.finish = t
                    }
                },
                getPres: function(e) {
                    var t = this
                      , i = [];
                    return e = s(e),
                    t.valid(e) && (i = c[e].pres.queue),
                    i
                },
                clearPres: function(e) {
                    var t = this
                      , i = [];
                    e = s(e),
                    t.valid(e) && (i = c[e].pres.queue,
                    i.splice(0, i.length))
                },
                addMids: function(e, t) {
                    var i = this;
                    e = s(e),
                    i.valid(e) && a.isArray(t) && (c[e].mids.queue = c[e].mids.queue.concat(t))
                },
                getMids: function(e) {
                    var t = this
                      , i = [];
                    return e = s(e),
                    t.valid(e) && (i = c[e].mids.queue),
                    i
                },
                finishMids: function(e, t) {
                    var i = this;
                    if (e = s(e),
                    i.valid(e)) {
                        if ("boolean" != typeof t)
                            return c[e].mids.finish;
                        c[e].mids.finish = t
                    }
                },
                clearMids: function(e) {
                    var t = this
                      , i = [];
                    e = s(e),
                    t.valid(e) && (i = c[e].mids.queue,
                    i.splice(0, i.length))
                },
                freshFeatures: function(e, t) {
                    var i = this;
                    e = s(e),
                    i.valid(e) && a.isArray(t) && (c[e].features.queue = t)
                },
                finishFeatures: function(e, t) {
                    var i = this;
                    if (e = s(e),
                    i.valid(e)) {
                        if ("boolean" != typeof t)
                            return c[e].features.finish;
                        c[e].features.finish = t
                    }
                },
                setInfo: function(e, t) {
                    var i = this;
                    e = s(e),
                    i.valid(e) && (c[e].movieInfo = t)
                },
                getInfo: function(e) {
                    var t, i = this;
                    return i.valid(e) && c[e] && (t = c[e].movieInfo),
                    t
                },
                valid: function(e, t) {
                    var i = this;
                    if (e = s(e),
                    "boolean" != typeof t)
                        return c[e] && !0 === c[e].valid ? (i._ensureDataStructure(e),
                        t = !0) : t = !1,
                        t;
                    i._ensureDataStructure(e),
                    c[e].valid = t
                }
            }
        });
        i.exports = new p
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#41#
    var n = function(e, t, i) {
        var n = e(13)
          , o = e(18)
          , a = e(12)
          , r = (e(9),
        e(33))
          , c = e(37)
          , s = e(40)
          , p = e(38)
          , d = new a("HEngineEmitters")
          , l = n("HEngineEmitters", {
            extend: o,
            methods: {
                init: function(e) {
                    var t = this;
                    t.engine = e,
                    t._gasDatas = [],
                    t._engineEvents(),
                    t._aresEvents(),
                    t._vrsEvents()
                },
                _engineEvents: function() {
                    var e, t, i = this.engine, n = function() {
                        var e = parseInt(i._movieinfo.tvid, 10)
                          , t = s.getMids(e);
                        if (t.length > 0) {
                            var n = i.getCurrenttime()
                              , o = t[0]
                              , a = o.offset;
                            if (a === parseInt(n, 10)) {
                                var r = n;
                                i.setStartPlayTime(r),
                                i._gas = o,
                                i.setSrc(o.file, 1, !1)
                            } else
                                n > a && s.clearMids(e)
                        }
                    };
                    i.on(c.NTF_StatusChanged, function(n) {
                        var o = n.data.status;
                        switch (o) {
                        case c.Status_LoadedMetaData:
                            !i.isAd() && i._vdSwitch && setTimeout(function() {
                                i._noticeVidChanged()
                            }, 200);
                            break;
                        case c.Status_LoadFailed:
                        case c.Status_Stoped:
                            if (i.isAd()) {
                                var r = i.getCurrentGas();
                                o === c.Status_LoadFailed && d.warn("drop ares gas:" + a.stringify(r)),
                                setTimeout(function() {
                                    var n, o, a = i._movieinfo.tvid;
                                    for (0 === r.offset ? (o = "preroll",
                                    n = s.getPres(a)) : r.offset > 0 && (o = "midroll",
                                    n = s.getMids(a)),
                                    e = 0; e < n.length; e++)
                                        if ((t = n[e]) === r) {
                                            if (e === n.length - 1) {
                                                switch (o) {
                                                case "preroll":
                                                    s.clearPres(a);
                                                    break;
                                                case "midroll":
                                                    s.clearMids(a)
                                                }
                                                i.fire({
                                                    type: p.NTF_ARES_End,
                                                    data: {
                                                        videoId: a,
                                                        rollType: o
                                                    }
                                                })
                                            } else
                                                i._gas = n[e + 1],
                                                i.setSrc(n[e + 1].file, 1, !1);
                                            break
                                        }
                                }, 0)
                            }
                        }
                    }),
                    i.on(c.NTF_TimeUpdate, function() {
                        i.isAd() || n()
                    })
                },
                _aresEvents: function() {
                    var e = this
                      , t = e.engine;
                    t.on(p.NTF_ARES_Gas, function(e) {
                        var i = e.data
                          , n = i.videoEventId
                          , o = r.getEpisodeId(n);
                        0 === i.offset ? (s.addPres(o, [i]),
                        1 === s.getPres(o).length && (t._gas = i,
                        t.setSrc(i.file, 1, !1))) : i.offset > 0 && s.addMids(o, [i])
                    }),
                    t.on(p.NTF_ARES_GasFinish, function(e) {
                        var t = e.data
                          , i = t.videoId;
                        switch (t.rollType) {
                        case "preroll":
                            s.finishPres(i, !0);
                            break;
                        case "midroll":
                            s.finishMids(i, !0)
                        }
                    }),
                    t.on(p.NTF_ARES_End, function(e) {
                        var t = e.data
                          , i = t.rollType
                          , n = t.videoId;
                        switch (i) {
                        case "preroll":
                            s.finishPres(n, !0);
                            break;
                        case "midroll":
                            s.finishMids(n, !0)
                        }
                    })
                },
                _vrsEvents: function() {
                    this.engine.on(p.NTF_VRSReady, function(e) {
                        var t = e.data
                          , i = t.tvid;
                        s.setInfo(i, t),
                        s.finishFeatures(i, !0)
                    })
                }
            }
        });
        i.exports = new l
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#42#
    var n = function(e, t, i) {
        var n = e(5)
          , o = e(7)
          , a = e(8)
          , r = e(21)
          , c = e(4)
          , s = (e(10),
        e(22))
          , p = e(43)
          , d = e(44);
        i.exports = {
            request: function(e, t, i) {
                d.sendVrsRequestPingback(),
                a.jsonp({
                    url: p.h5tmtsUrl + e.tvid + "/" + e.vid + "/",
                    params: function() {
                        var t = {
                            platForm: "h5",
                            uid: r.getUid(),
                            cupid: e.cupid,
                            src: s.getSrc(),
                            type: n.os.mac && n.browser.SAFARI || n.browser.iPad || n.browser.iPhone || navigator.userAgent.match(/miuivideo\//i) ? "m3u8" : "mp4"
                        };
                        try {
                            c(t, s.cmd5xtmts())
                        } catch (e) {}
                        return t
                    }(),
                    beforeSend: function(e) {
                        var t = o.parse(e.url).host;
                        try {
                            s.cmd5x && (e.url += "&vf=" + s.cmd5x(e.url.replace(new RegExp("^https?://" + t,"ig"), "")))
                        } catch (e) {}
                        return e
                    },
                    success: function(e) {
                        d.sendVrsReadyPingback(),
                        e && e.hasOwnProperty("code") ? "A00000" === e.code ? t(e) : i(e.code) : i("P00001")
                    },
                    failure: function(e) {
                        i("P00001")
                    }
                })
            }
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#43#
    var n = function(e, t, i) {
        var n = window.location.protocol;
        i.exports = {
            vipauthUrl: n + "//api.vip.iqiyi.com/services/cknsp.action",
            h5tmtsUrl: n + "//cache.m.iqiyi.com/jp/tmts/",
            vmsUrl: n + "//cache.video.iqiyi.com/jp/vms",
            pingbackUrl: n + "//msg.71.am/core"
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#44#
    var n = function(e, t, i) {
        "use strict";
        var n, o = e(4), a = e(43), r = e(19), c = e(8), s = (e(7),
        e(10)), p = e(5), d = e(21), l = e(23), u = e(11), f = e(25), g = e(1), h = e(45), m = -1, v = !1, b = {
            1: "303",
            2: "302",
            6: "304",
            11: "405",
            12: "401",
            13: "401",
            21: "302"
        }, _ = "01010021010000000000";
        p.browser.weixin ? p.os.ios ? _ = "02038001010000000000" : p.os.android && (_ = "02028001010000000000") : p.os.ios ? _ = p.os.iosMobile ? "02030031010000000000" : "03030021010000000000" : p.os.android && (_ = p.os.androidMobile ? "02020031010000000000" : "03020021010000000000");
        var x = "1"
          , y = "10"
          , w = "101";
        p.browser.iPad ? (x = "2",
        y = "20",
        w = "201") : (p.os.ios || p.os.android) && (x = "2",
        y = "20",
        w = "201");
        var k = "window";
        p.os.ios || p.os.mac ? k = "mac" : p.os.android && (k = "android");
        var A = ""
          , E = {}
          , F = 0
          , C = function(e) {
            !function(e) {
                n.getVideoInfo(function(t) {
                    d.isVip(function(i) {
                        var p = {
                            bstp: 6,
                            ptid: _,
                            pf: x,
                            p: y,
                            p1: w,
                            c1: t.vi ? t.vi.showChannelId || "" : "",
                            r: t.vi ? t.vi.videoQipuId || "" : "",
                            aid: t.vi ? t.vi.aid || "" : "",
                            u: r.getJsuid() || "",
                            pu: d.getUid() || "",
                            os: k,
                            v: g.version,
                            ra: A,
                            nu: r.getIsNewUser() ? 1 : 0,
                            ve: r.getEid(),
                            ce: r.getWeid(),
                            hu: i ? 1 : -1,
                            ht: t.vi && 2 === t.vi.bossStatus ? 1 : 0,
                            ispre: n.isTryWatch() ? 1 : 0,
                            mod: u.local() || "",
                            z: t.userDisInfo_t || "",
                            diaoduuip: t.userDisInfo_t || "",
                            server_ip: t.userDisInfo_l ? String(t.userDisInfo_l).split("//")[1].split("/")[0] : "",
                            stime: (new Date).getTime(),
                            purl: window.location.href,
                            rfr: window.document.referrer,
                            lrfr: s.get("QC007") || "",
                            vfm: E.vfm || s.get("QC161") || "",
                            vvfrom: E.vvfrom || "",
                            vfrm: E.vfrm || "",
                            plyrtp: 0,
                            coop: "",
                            isdm: F,
                            videotp: t.vi && 1 === t.vi.is3D ? 2 : 0,
                            rn: Math.random()
                        }
                          , f = s.get("__dfp");
                        if ("" !== f) {
                            var h = f.split("@")
                              , m = (new Date).getTime();
                            3 == h.length && Number(h[2]) <= m && m <= Number(h[1]) && (f = h[0])
                        }
                        o(p, {
                            dfp: f
                        });
                        try {
                            o(p, {
                                as: l.cmd5ly(p.r + "" + p.p1 + p.u + p.ve + "ChEnYH0804FdadrrEDFf2016tT")
                            })
                        } catch (e) {}
                        o(p, e),
                        c.beacon(p, a.pingbackUrl)
                    })
                })
            }(e)
        };
        i.exports = {
            sendVrsRequestPingback: function() {
                C({
                    t: "init"
                })
            },
            sendVrsReadyPingback: function() {
                C({
                    t: "ready"
                })
            },
            sendADStartPlayPingback: function() {
                C({
                    t: 15
                })
            },
            sendStartPlayPingback: function() {
                C({
                    t: 1
                }),
                -1 === m && this.sendTimingPingback(),
                this.sendProcessesTimePingback()
            },
            sendTimingPingback: function() {
                m = 0;
                var e = 0;
                clearTimeout(m);
                var t = function() {
                    n.getCurrStatus() === h.Status_Playing && (e += 1e3,
                    15e3 == e ? C({
                        t: 2,
                        tm: 15
                    }) : 6e4 == e ? C({
                        t: 2,
                        tm: 60
                    }) : e % 12e4 == 0 && C({
                        t: 2,
                        tm: 120
                    })),
                    clearTimeout(m),
                    m = setTimeout(t, 1e3)
                };
                t()
            },
            sendEndPlayPingback: function() {
                C({
                    t: 13,
                    endtp: 1
                })
            },
            sendWaitingPingback: function(e) {
                v || (v = !0,
                C({
                    t: 8,
                    jamtp: 1,
                    rd: e ? "ad" : "video"
                })),
                this.sendErrorPlayPingback("", "4015")
            },
            sendPlayingPingback: function() {
                v && (v = !1)
            },
            sendErrorPlayPingback: function(e, t) {
                C({
                    t: 0,
                    ec: t || b[e]
                })
            },
            sendProcessesTimePingback: function() {
                if (f.needRecord) {
                    f.needRecord = !1;
                    var e = {};
                    e.t = 10,
                    f.usedTime_userInfo > 0 && (e.tm1 = f.usedTime_userInfo + "," + f.sTime_userInfo),
                    f.usedTime_P2PCore > 0 && (e.tm2 = f.usedTime_P2PCore + "," + f.sTime_P2PCore),
                    f.usedTime_history > 0 && (e.tm7 = f.usedTime_history + "," + f.sTime_history),
                    f.usedTime_pageShowVideo > 0 && f.usedTime_pageShowVideo < 12e4 && 0 === f.usedTime_userInfo && (e.tm8 = f.usedTime_pageShowVideo + ",0"),
                    f.usedTime_showVideo > 0 && f.usedTime_showVideo < 6e4 && 0 === f.usedTime_userInfo && (e.tm9 = f.usedTime_showVideo + "," + f.STime_showVideo),
                    f.usedTime_vms > 0 && (e.tm10 = f.usedTime_vms + "," + f.sTime_vms),
                    f.usedTime_adInit > 0 && (e.tm11 = f.usedTime_adInit + "," + f.sTime_adInit),
                    f.usedTime_selfLoaded > 0 && f.usedTime_selfLoaded < 6e4 && (e.tm12 = f.usedTime_selfLoaded + ",0"),
                    e.br = f.browserType || "",
                    e.tmplt = f.pageTmpltType || "",
                    e.re = window.screen.width + "*" + window.screen.height,
                    C(e)
                }
            },
            init: function(e) {
                m = 0,
                n = e,
                e.once(h.NTF_VRSReady, function() {})
            },
            setCurrentVD: function(e) {
                A = e
            },
            setPbInfo: function(e) {
                E = e
            },
            setPbisdm: function(e) {
                F = e
            }
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#45#
    var n = function(e, t, i) {
        i.exports = {
            Status_Idle: "idle",
            Status_Ready: "ready",
            Status_Loadstart: "loadstart",
            Status_LoadedMetaData: "loadedmetadata",
            Status_StartPlay: "startplay",
            Status_Waiting: "waiting",
            Status_Paused: "paused",
            Status_Play: "play",
            Status_Playing: "playing",
            Status_Stoped: "stoped",
            Status_End_Play: "endplay",
            Status_PlayError: "error",
            Status_AdLoaded: "adloaded",
            Status_AdInit: "adinit",
            Status_AdLoadstart: "adloadstart",
            Status_AdStartPlay: "adstartplay",
            Status_AdPlaying: "adplaying",
            Status_AdPaused: "adpaused",
            Status_AdPlayEnded: "adended",
            Status_AdError: "aderror",
            Status_AdStalled: "adstalled",
            Status_AdWaiting: "adwaiting",
            Status_AresPlay: "aresplay",
            Status_AresEnded: "aresended",
            Status_AresNoticeInfo: "aresnoticeinfo",
            NTF_StatusChanged: "statusChanged",
            NTF_Error: "engineError",
            NTF_VideoChange: "videochange",
            NTF_VideoChanged: "videochanged",
            NTF_VideoListChanged: "videolistchanged",
            NTF_ADDVideoList: "addvideolist",
            NTF_CanPlayThrough: "canplaythrough",
            NTF_VolumeChanged: "volumechanged",
            NTF_KeyVolumeChange: "keyvolumechange",
            NTF_DurationChanged: "durationchange",
            NTF_VRSStart: "vrsstart",
            NTF_VRSPreReady: "vrspreready",
            NTF_VRSReady: "vrsready",
            NTF_VRSPreloaded: "vrspreloaded",
            NTF_DefinitionSwitching: "definitionswitch",
            NTF_DefinitionSwitched: "definitionswitched",
            NTF_TimeUpdate: "timeupdate",
            NTF_Progress: "progress",
            NTF_Seeking: "seeking",
            NTF_Recharge: "recharge",
            NTF_SkipHook: "skiphook",
            NTF_FollowUpNextLoad: "followUpNextLoad",
            NTF_AD_CanPlayThrough: "adcanplaythrough",
            NTF_AD_VolumeChanged: "advolumechanged",
            NTF_AD_DurationChanged: "addurationchange",
            NTF_AD_TimeUpdate: "adtimeupdate",
            NTF_AD_Progress: "adprogress",
            NTF_AD_Seeking: "adseeking",
            NTF_AD_NotifyManager: "jsNotifyAdManager",
            Evt_StartFromHistory: "playStartFromHistory",
            Evt_SkipHeader: "playSkipHeader",
            Evt_SkipTailer: "playSkipTailer",
            ERROR_HttpFailed: "P00001",
            ERROR_AnalyzFailed: "P00002"
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#46#
    var n = function(e, t, i) {
        var n = e(13)
          , o = e(10)
          , a = e(47)
          , r = e(12)
          , c = e(33)
          , s = e(4)
          , p = e(35)
          , d = (e(23),
        e(25))
          , l = e(15)
          , u = e(37)
          , f = e(48)
          , g = e(50)
          , h = e(39)
          , m = e(38)
          , v = e(34)
          , b = e(51)
          , _ = e(52)
          , x = e(53)
          , y = e(55)
          , w = e(58)
          , k = e(40)
          , A = new r("DataEngine");
        i.exports = n("DataEngine", {
            extend: v,
            construct: function(e, t) {
                var i = this;
                i._paused = !0,
                i._pburl = t.h5P2PUrl,
                i._vrs = {},
                w.init(i),
                y.setEngine(i),
                _.__setVideo(e),
                b.setProxy(_),
                _.on("fragmentsChange", function() {
                    b.setData(_.getFragments())
                }),
                x.init(i, e),
                i._canFireDecodeEvt = function() {
                    return !1
                }
                ,
                i._setForcedPlayerType = function(e) {
                    "LoaderState_error_idc" === e && (o.remove("player_forcedType"),
                    o.set("player_forcedType", l.PlayerType_FlashVOD, {
                        expires: 2592e5
                    }),
                    location.reload())
                }
                ,
                i._pb_ = _
            },
            methods: {
                assemble: function() {
                    var e = this
                      , t = function() {
                        var t = window.QIYI_HTML5_P2P_PlayBack_0001;
                        t ? (e._pb_.__setSDK(t),
                        e.fire({
                            type: m.Status_Assembled,
                            data: t
                        })) : A.error("pb sdk load error!")
                    };
                    window.QIYI_HTML5_P2P_PlayBack_0001 ? t() : (d.sTime_P2PCore = new Date - d.pgct,
                    a.seriesLoadScripts(e._pburl, function(e) {
                        d.usedTime_P2PCore = new Date - d.sTime_P2PCore - d.pgct,
                        t()
                    }))
                },
                loadMovie: function(e, t) {
                    var i = this
                      , n = y.getPid(e, t);
                    i._noticeDataStart();
                    var o = function(e) {
                        e.isPreload = !!e.isPreload,
                        s(i._movieinfo, e, !0),
                        i._movieinfo.vd = e.vd,
                        i._vd = e.vd,
                        i._ctrlBids = i._movieinfo.ctrlBids,
                        i._setFragments(i._movieinfo.vidl.filter(function(e) {
                            return e.vd === i._vd
                        })[0]),
                        i._noticeDataReady()
                    };
                    if (y.hasPreload(n)) {
                        var a = y.getPreloadData(n);
                        o(a)
                    } else
                        y.getPromise(n).then(function(e) {
                            e.isPreload = !1,
                            o(e)
                        }, function(e) {
                            switch (e.type) {
                            case 0:
                                i.brokedown(e.code, e.originalCode, e.ec);
                                break;
                            case 1:
                                i._noticeRecharge(e.code)
                            }
                        })
                },
                preload: function(e, t) {
                    var i = this
                      , n = y.getPid(e, t)
                      , o = b.getSegmentsByTvid(e);
                    k.valid(e, !0),
                    y.hasPreload(n) ? 0 === o.length && i._noticeReJointPreload() : y.getPromise(n).then(function(e) {
                        e.isPreload = !0,
                        i._preloadedMovieInfo = e,
                        i._noticeDataPreloaded()
                    }, function(e) {
                        A.warn("preload movie which requires auth: " + r.stringify(e))
                    })
                },
                hasPreload: function(e, t) {
                    var i = y.getPid(e, t);
                    return k.finishPres(e) && y.hasPreload(i) && b.getSegmentsByTvid(e).length > 0
                },
                hasFinishPreload: function(e, t) {
                    return this.hasPreload(e, t) && k.finishPres(e)
                },
                _clearData: function() {
                    _.resetProxy(),
                    k.clearAll(),
                    y.clearAll()
                },
                _checkAuthTime: function(e) {
                    var t = this
                      , i = !0;
                    return t._movieinfo && t._movieinfo.isVIP && e >= t._movieinfo.previewTime && (t._noticeRecharge("Q00304"),
                    i = !1),
                    i
                },
                _checkSkipHeadTime: function(e) {
                    var t = this
                      , i = t._movieinfo;
                    if (i) {
                        var n = t._skipHeadTvid
                          , o = h.isSkipPrelude()
                          , a = o && i.prelude.headTime > 0 ? 1e3 * i.prelude.headTime : -1;
                        n != i.tvid && (o && e === a ? (t._skipHeadTvid = i.tvid,
                        A.log("skip prelude, pos: " + a + "!"),
                        t.fire({
                            type: g.Evt_SkipHeader,
                            data: {
                                time: e
                            }
                        })) : !0 !== t.__checkSkiped && void 0 === n && e > 0 && (t._skipHeadTvid = i.tvid,
                        A.log("apply record, pos: " + e + "!"),
                        t.fire({
                            type: g.Evt_StartFromHistory,
                            data: {
                                time: e
                            }
                        }))),
                        t.__checkSkiped = !0
                    }
                },
                _checkSkipTailTime: function(e) {
                    var t = this
                      , i = t._movieinfo;
                    if (i) {
                        var n = !!t._skipTailTipped
                          , o = h.isSkipPrelude()
                          , a = o && i.prelude.tailTime > 0 ? 1e3 * i.prelude.tailTime : -1;
                        if (t._skipTailTvid != i.tvid && (t._skipTailTvid = i.tvid,
                        t._skipTailTipped = !1),
                        o && a > 0)
                            if (e + 15e3 >= a) {
                                if (!n) {
                                    var r = _.getPlayOrder()
                                      , c = b.getSegmentByOrder(r);
                                    b.isFeatureEndSegment(c) && c.showEndTime === a && (t._skipTailTipped = !0,
                                    A.log("skip tail, cur:" + e + ", tail: " + a + "!"),
                                    t.fire({
                                        type: g.Evt_SkipTail,
                                        data: {
                                            time: a
                                        }
                                    }))
                                }
                            } else
                                t._skipTailTipped = !1
                    }
                },
                isAd: function(e) {
                    var t = "number" == typeof e && e >= 0 ? e : _.getPlayOrder()
                      , i = b.getSegmentByOrder(t);
                    return i && !0 === i.ad
                },
                _abortAllAres: function(e) {
                    var t = this;
                    switch (e) {
                    case "preroll":
                        setTimeout(function() {
                            var e = b.getAresPres(t._movieinfo.tvid);
                            e.length > 0 && (A.debug("setsrc remove pres!"),
                            _.removeFragment(e[0].order, e.length))
                        }, 0);
                        break;
                    case "midroll":
                        setTimeout(function() {
                            var e = b.getAresMids(t._movieinfo.tvid);
                            e.length > 0 && (A.debug("setsrc remove mids!"),
                            _.removeFragment(e[0].order, e.length))
                        }, 0)
                    }
                },
                _getCurrentGas: function() {
                    var e = _.getPlayOrder();
                    return this._getGasByOrder(e)
                },
                _getGasByOrder: function(e) {
                    e = parseInt(e, 10);
                    var t = {}
                      , i = b.getSegmentByOrder(e);
                    return i && (t = i.ad ? i.gas : {
                        videoEventId: c.getEventId(i.tvid)
                    }),
                    t
                },
                _setFragments: function(e) {
                    this._segments = e.segments,
                    this._duration = e.duration
                },
                _checkSegmentsInPreview: function(e, t) {
                    var i = this;
                    return e = e || i._movieinfo.previewTime,
                    t = t || i._segments,
                    t.filter(function(t, i, n) {
                        var o = t.startTime < e;
                        if (i > 0) {
                            var a = n[i - 1];
                            o = o && a.endTime < e
                        }
                        return o
                    })
                },
                _constructPlaySegments: function(e, t) {
                    var i = this
                      , n = []
                      , o = h.isSkipPrelude()
                      , a = i._segments
                      , c = t || i._movieinfo
                      , d = c.isPreload ? 0 : 1e3 * i._startPlayTime
                      , l = c.previewTime
                      , u = o && c.prelude.headTime > 0 ? 1e3 * c.prelude.headTime : 0
                      , f = o && c.prelude.tailTime > 0 ? 1e3 * c.prelude.tailTime : 1 / 0;
                    if ((isNaN(e) || null === e) && (e = u >= d && u > 0 ? u : d),
                    t && (a = c.vidl.filter(function(e) {
                        return e.vd === c.vd
                    })[0].segments),
                    p.isArray(a) && a.length > 0 && (n = a.map(function(e) {
                        return s({}, e, !0)
                    }).filter(function(e, t, i) {
                        var n = e.startTime < l - 3e4;
                        if (t > 0) {
                            var o = i[t - 1];
                            n = n && o.endTime < l
                        }
                        return n
                    }),
                    !isNaN(e) && e >= 0 && e < n[n.length - 1].endTime && (f !== 1 / 0 && e >= f && (f = n[n.length - 1].endTime),
                    n = n.filter(function(t, i, n) {
                        var o = n[i + 1]
                          , a = t.startTime < f;
                        return o && e >= o.startTime && (a = !1),
                        a = a && e < t.endTime
                    }),
                    n.length > 0))) {
                        var g = n[0]
                          , m = n[n.length - 1];
                        g.showStartTime = e,
                        m.showEndTime = f === 1 / 0 ? m.endTime : f
                    }
                    return 0 === n.length && A.warn("construct play segments fail, pos: " + e + ", vmi" + t ? r.stringify(t) : ""),
                    n
                },
                _getVRSSegmentByPlayTime: function(e) {
                    for (var t, i = this, n = i._segments, o = 0; o < n.length; o++)
                        if (n[o + 1]) {
                            if (e < n[o + 1].startTime) {
                                t = n[o];
                                break
                            }
                        } else
                            t = n[o];
                    return t
                },
                _switchVD: function(e) {
                    var t = this;
                    t._setFragments(e);
                    var i = 1e3 * t.getStartPlayTime()
                      , n = t.getBuffered()
                      , o = 0;
                    if (n.length > 0) {
                        o = 1e3 * (n.end(n.length - 1) - v.prototype.getCurrenttime.call(this)),
                        o < 0 && (A.debug("buffered in video: " + o + "s"),
                        o = 0)
                    }
                    _.sleeping() && t.pbReload();
                    var a = t._constructPlaySegments(i);
                    _.freshFragments(a, !0, 0, i),
                    t._switchDelayTimer = setTimeout(function() {
                        "waiting" === _.getState() ? t.once(u.NTF_TimeUpdate, function() {
                            t._noticeVidChanged()
                        }) : t._noticeVidChanged()
                    }, o)
                },
                play: function(e) {
                    var t = this;
                    e ? t._currentManualAction = u.Status_Play : t._currentCodeActionList.push(u.Status_Play),
                    _.resume()
                },
                pause: function(e) {
                    var t = this;
                    e ? t._currentManualAction = u.Status_Paused : t._currentCodeActionList.push(u.Status_Paused),
                    _.pause()
                },
                seek: function(e, t) {
                    var i = this;
                    if (e *= 1e3,
                    i.hasSeeking = !0,
                    i._checkAuthTime(e)) {
                        var n = i._getVRSSegmentByPlayTime(e);
                        if (n) {
                            var o = f.getIdentifier(n)
                              , a = b.getSegmentByIdentifier(o);
                            b.inFeaturesShowSection(a, e) || (_.freshFragments(i._constructPlaySegments(e), !1),
                            a = b.getSegmentByIdentifier(o)),
                            t ? i._currentManualAction = u.NTF_Seeking : i._currentCodeActionList.push(u.NTF_Seeking);
                            var r = !b.isFeatureEndSegment(a);
                            _.seek(b.getOrderById(o), e, {
                                jump: r
                            }),
                            i.play()
                        }
                        i._statusChanged({
                            status: u.Status_Waiting,
                            actionType: u.Action_Type_Code
                        });
                        var c = {
                            current: i.getCurrenttime(),
                            duration: i.getDuration()
                        };
                        c["actionType"] = i._checkActionType(u.NTF_Seeking),
                        i.fire({
                            type: u.NTF_Seeking,
                            data: c
                        })
                    }
                },
                isSeeking: function() {
                    return !!this.hasSeeking
                },
                getBufferTime: function() {
                    var e = this
                      , t = 0
                      , i = _.getPlayInfo()
                      , n = _.getBuffer()
                      , o = i.order
                      , a = n.order;
                    if (t = n.time / 1e3,
                    e.isAd())
                        a > o && (t = e.getDuration());
                    else if (a > o) {
                        var r, c = b.getSegmentByOrder(o), s = [];
                        c && (s = b.getFeaturesBySegment(c),
                        s.length > 0 && (r = s[s.length - 1],
                        a > r.order && (t = e.getDuration())))
                    }
                    return t
                },
                getCurrenttime: function() {
                    var e = this
                      , t = e.getDuration()
                      , i = _.getPlayInfo().time / 1e3;
                    return i < t || isNaN(t) ? i : t
                },
                getDuration: function() {
                    var e = this
                      , t = 0;
                    if (e.isAd()) {
                        var i = _.getPlayInfo();
                        t = i.segment && !0 === i.segment.done ? i.segment.realEndTime / 1e3 : Number.NaN
                    } else
                        e._duration && (t = e._duration / 1e3 || 0);
                    return t
                },
                isPaused: function() {
                    return this._paused
                },
                pbLog: function() {
                    _.log()
                },
                pbVisualizer: function() {
                    x.toggle()
                },
                pbVersion: function() {
                    return _.version
                },
                pbSleep: function() {
                    _.reset(null)
                },
                pbReload: function() {
                    _.reset(this._video)
                },
                pbDone: function() {
                    return _.isDone()
                },
                _removeAres: function(e) {
                    var t = parseInt(e, 10)
                      , i = b.getSegmentByOrder(t)
                      , n = b.getSegmentByOrder(t + 1);
                    i && i.ad && (n ? (A.debug("abortAres removeFragment " + t + ", " + r.stringify(i)),
                    _.removeFragment(i.order, 1)) : (A.warn("remove ares & reset pb, length is 1."),
                    _.resetProxy()))
                },
                _abortAres: function() {
                    var e = _.getPlayOrder();
                    this._removeAres(e)
                }
            }
        })
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#47#
    var n = function(e, t, i) {
        i.exports = {
            seriesLoadScripts: function(e, t) {
                "object" != typeof e && (e = [e]);
                var i = document.getElementsByTagName("head").item(0) || document.documentElement
                  , n = []
                  , o = e.length - 1
                  , a = function(r) {
                    n[r] = document.createElement("script"),
                    n[r].setAttribute("type", "text/javascript"),
                    n[r].onload = n[r].onreadystatechange = function() {
                        this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (this.onload = this.onreadystatechange = null,
                        this.parentNode.removeChild(this),
                        r != o ? a(r + 1) : "function" == typeof t && t(!0))
                    }
                    ,
                    n[r].onerror = n[r].onstalled = function() {
                        "function" == typeof t && t(!1)
                    }
                    ,
                    n[r].setAttribute("src", e[r]),
                    i.appendChild(n[r])
                };
                a(0)
            },
            parallelLoadScripts: function(e, t) {
                "object" != typeof e && (e = [e]);
                for (var i = document.getElementsByTagName("head").item(0) || document.documentElement, n = [], o = 0, a = 0; a < e.length; a++)
                    n[a] = document.createElement("script"),
                    n[a].setAttribute("type", "text/javascript"),
                    n[a].onload = n[a].onreadystatechange = function() {
                        this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (o++,
                        this.onload = this.onreadystatechange = null,
                        this.parentNode.removeChild(this),
                        o == e.length && "function" == typeof t && t(!0))
                    }
                    ,
                    n[a].onerror = n[a].onstalled = function() {
                        "function" == typeof t && t(!1)
                    }
                    ,
                    n[a].setAttribute("src", e[a]),
                    i.appendChild(n[a])
            }
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#48#
    var n = function(e, t, i) {
        var n = e(13)
          , o = e(19)
          , a = e(22)
          , r = (e(21),
        e(12))
          , c = e(10)
          , s = e(7)
          , p = e(4)
          , d = e(9)
          , l = e(23)
          , u = e(49)
          , f = window.location.protocol
          , g = new r("segment")
          , h = n("segment", {
            construct: function(e, t, i, n, r, d, h, m, v, b, _, x, y, w, k, A) {
                var E = this;
                E.ad = e,
                E.vip = t,
                E.index = e ? 0 : n,
                E.tvId = r,
                E.vid = d,
                E.vidl = h,
                E.albumID = m,
                E.channelID = v,
                E.originID = b,
                E.du = _,
                E.size = x,
                E.showStartTime = y,
                E.showEndTime = w,
                E.startTime = k,
                E.endTime = A,
                E.__gas = n,
                E.__url = E.ad ? i : f + "//data.video.iqiyi.com/videos" + i + "&cross-domain=1&qyid=" + o.getJsuid() + "&qypid=" + E.tvId + "_" + a.getSrc(),
                E.__params = s.query2Json(E.__url),
                E.__filename = s.filename(E.__url),
                E.getUrl = function() {
                    var e, t = this;
                    if (t.ad)
                        e = t.__url;
                    else if (t.vip) {
                        var i = arguments[0] || ""
                          , n = l.cmd5x(i + t.__filename);
                        i || g.warn(t.vid + ", segment index: " + t.index + ", boss key is empty!"),
                        e = t.__url + "&t=" + i + "&vid=" + t.vid + "&ibt=" + n + "&cid=afbe8fd3d73448c9&ib=4&ptime=" + u.getPreviewTime(t.tvId) + "&qypid=" + t.tvId + "_" + a.getSrc() + "&QY00001=" + c.get("QY00001")
                    } else
                        e = t.__url + "&qypid=" + t.tvId + "_" + a.getSrc();
                    return e
                }
                ,
                E.getBossUrl = function() {
                    var e = this
                      , t = null;
                    return !e.ad && e.vip && (p(e.__params, {
                        filename: e.__filename,
                        tvid: e.originID,
                        aid: e.albumId
                    }),
                    t = u.getRequestURL(e.__params)),
                    t
                }
            },
            statics: {
                getIdentifier: function(e) {
                    return d(e.tvId + "_" + e.vid + "_" + e.startTime + "_" + e.endTime + "_" + e.__url)
                }
            },
            methods: {
                _setBoss: function(e) {
                    this.boss = e
                }
            }
        });
        i.exports = h
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#49#
    var n = function(e, t, i) {
        var n = e(8)
          , o = e(21)
          , a = e(19)
          , r = e(4)
          , c = e(12)
          , s = e(43)
          , p = e(3)
          , d = {}
          , l = new c("authremote");
        i.exports = {
            getRequestURL: function(e) {
                var t = p.getVars()
                  , i = {
                    version: "4.0",
                    platform: "01010021010000000000",
                    deviceId: a.getJsuid(),
                    uid: o.getUid(),
                    playType: "pcwh5",
                    shareFlag: 0,
                    appname: "h5",
                    messageId: "h5_" + a.createUUID().replace(/-/gi, "")
                };
                return "tw_s" !== t.local && "tw_t" !== t.local || (i.platform = "01010021010010000000"),
                r(e, i),
                s.vipauthUrl + "?" + n.serializeParam(e)
            },
            getPreviewTime: function(e) {
                var t = d[e];
                if (t) {
                    var i = 0;
                    return t.data && t.data.prv && 1 == t.data.prv && 1 == t.previewType && (i = 60 * t.previewTime * 1e3),
                    i
                }
                l.error("the time to invoke getPreviewTime is wrong!")
            },
            request: function(e, t, i) {
                var o = e.tvid
                  , a = this.getRequestURL(e);
                n.json({
                    url: a,
                    success: function(e) {
                        e && e.hasOwnProperty("code") ? "A00000" === e.code ? (e.bossKeyTime = +new Date,
                        d[o] = e,
                        t(e)) : i(e.code, "CKNSP_RECHARGE_" + e.code) : i(null, "CKNSP_Fail")
                    },
                    failure: function() {
                        i(null, "CKNSP_HTTPFail")
                    }
                })
            }
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#50#
    var n = function(e, t, i) {
        var n = 0
          , o = "engine_events_";
        i.exports = {
            Evt_StartFromHistory: o + ++n,
            Evt_SkipHeader: o + ++n,
            Evt_SkipTail: o + ++n
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#51#
    var n = function(e, t, i) {
        var n = e(18)
          , o = e(13)
          , a = e(12)
          , r = e(9)
          , c = e(35)
          , s = e(33)
          , p = e(48)
          , d = (new a("DataSegments"),
        [])
          , l = o("DataSegments", {
            extend: n,
            construct: function() {
                var e = this;
                e.length = 0,
                e.firstCRUD = !0
            },
            methods: {
                setData: function(e) {
                    var t = this;
                    d.splice(0, d.length);
                    for (var i, n, o, a, r = 0, c = null, l = e.length; r < l; r++)
                        i = e[r],
                        n = i.videoInfo,
                        o = n.vidl.filter(function(e) {
                            return e.vid === n.vid
                        }),
                        o.length > 0 && (c = o[0].rate),
                        a = {
                            identifier: p.getIdentifier(n),
                            order: i.order,
                            rollType: function(e) {
                                var t = "null"
                                  , i = e.__gas.offset;
                                return !0 === e.ad && (0 === i ? t = "preroll" : i > 0 && (t = "midroll")),
                                t
                            }(n),
                            ad: n.ad,
                            vip: n.vip,
                            gas: n.__gas,
                            episodeId: parseInt(n.ad ? s.getEpisodeId(n.__gas.videoEventId) : n.tvId, 10),
                            tvid: parseInt(n.tvId, 10),
                            vid: n.vid,
                            rate: c,
                            startTime: n.startTime,
                            endTime: n.endTime,
                            showStartTime: n.showStartTime,
                            showEndTime: n.showEndTime
                        },
                        Object.defineProperty(a, "realStartTime", {
                            get: function() {
                                return this.realStartTime
                            }
                            .bind(i)
                        }),
                        Object.defineProperty(a, "realEndTime", {
                            get: function() {
                                return this.realEndTime
                            }
                            .bind(i)
                        }),
                        d.push(a);
                    t.length = d.length,
                    t._changed()
                },
                getData: function() {
                    return d
                },
                update: function() {
                    this.setData(this.proxy.getFragments())
                },
                setProxy: function(e) {
                    this.proxy = e
                },
                _change: function() {
                    this.fire({
                        type: "change",
                        data: d
                    })
                },
                _changed: function() {
                    var e = this;
                    e.firstCRUD = !1,
                    e.fire({
                        type: "changed",
                        data: d
                    })
                },
                getSegmentsByTvid: function(e) {
                    var t = [];
                    return e = parseInt(e, 10),
                    d.forEach(function(i, n, o) {
                        i.tvid === e && t.push(i)
                    }),
                    t
                },
                getSegmentByIdentifier: function(e) {
                    var t = null;
                    this.update();
                    for (var i = 0; i < d.length; i++)
                        if (d[i].identifier === e) {
                            t = d[i];
                            break
                        }
                    return t
                },
                getSegmentByOrder: function(e) {
                    var t = null;
                    if (this.update(),
                    e >= 0)
                        for (var i = 0, n = d.length; i < n && (t = d[i],
                        t.order !== e); i++)
                            t = null;
                    return t
                },
                getOrderById: function(e) {
                    var t = -1;
                    this.update();
                    for (var i = 0; i < d.length; i++)
                        if (d[i].identifier === e) {
                            t = d[i].order;
                            break
                        }
                    return t
                },
                getIndex: function(e) {
                    var t = -1
                      , i = e;
                    this.update();
                    for (var n, o = 0; o < d.length; o++)
                        if (n = d[o],
                        c.isObject(n) && c.isObject(i) && n.identifier === i.identifier) {
                            t = o;
                            break
                        }
                    return t
                },
                getAresPres: function(e) {
                    var t = [];
                    e = parseInt(e, 10),
                    this.update();
                    for (var i, n = 0, o = d.length; n < o; n++)
                        i = d[n],
                        !0 === i.ad && "preroll" === i.rollType && (isNaN(e) || null === e ? t.push(i) : parseInt(i.episodeId, 10) === e && t.push(i)),
                        i = null;
                    return t
                },
                getAresMids: function(e) {
                    var t = [];
                    e = parseInt(e, 10),
                    this.update();
                    for (var i, n = 0, o = d.length; n < o; n++)
                        i = d[n],
                        !0 === i.ad && "midroll" === i.rollType && (isNaN(e) || null === e ? t.push(i) : parseInt(i.episodeId, 10) === e && t.push(i)),
                        i = null;
                    return t
                },
                getFeaturesBySegment: function(e) {
                    var t = [];
                    if (e) {
                        this.update();
                        var i = function(e, t) {
                            return r(e + t)
                        }
                          , n = i(e.tvid, e.vid);
                        t = d.filter(function(e) {
                            return !e.ad && n === i(e.tvid, e.vid)
                        }).sort(function(e, t) {
                            return e.gas - t.gas
                        })
                    }
                    return t
                },
                inFeaturesShowSection: function(e, t) {
                    var i = this
                      , n = !1
                      , o = i.getFeaturesBySegment(e);
                    return o.length > 0 && t >= o[0].showStartTime && t <= o[o.length - 1].showEndTime && (n = !0),
                    n
                },
                isFeatureFirstSegment: function(e) {
                    var t, i, n = this, o = !1, a = n.getFeaturesBySegment(e);
                    return a.length > 0 && (t = a[0],
                    i = e.realStartTime,
                    e.gas === t.gas && (o = !0,
                    o = null !== i && !isNaN(i) && i >= 0 ? i === t.realStartTime : e.order === t.order && e.vid === t.vid)),
                    o
                },
                isFeatureEndSegment: function(e) {
                    var t, i, n = this, o = !1, a = n.getFeaturesBySegment(e);
                    return a.length > 0 && (t = a[a.length - 1],
                    i = e.realEndTime,
                    e.gas === t.gas && (o = !0,
                    o = null !== i && !isNaN(i) && i > 0 ? i === t.realEndTime : e.order === t.order && e.vid === t.vid)),
                    o
                },
                isEndSegment: function(e) {
                    var t, i = !1;
                    return e && (this.update(),
                    t = d[d.length - 1],
                    i = e.gas === t.gas && e.order === t.order),
                    i
                }
            }
        });
        i.exports = new l
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#52#
    var n = function(e, t, i) {
        var n = e(18)
          , o = e(13)
          , a = e(35)
          , r = e(12)
          , c = e(19)
          , s = e(4)
          , p = new r("PBProxy")
          , d = []
          , l = []
          , u = o("PBProxy", {
            extend: n,
            construct: function() {
                var e = this;
                e._p_ = null,
                e._v_ = null,
                e.version = "",
                e._ready = !1,
                e.clearFragmentsFlag = !0,
                e._actions = {}
            },
            methods: {
                __setVideo: function(e) {
                    this._v_ = e
                },
                __setSDK: function(e) {
                    var t = this;
                    t._p_ = e,
                    t.version = e.version,
                    e.init(t._v_, t.__sdkListener.bind(t), p, c.getJsuid()),
                    e.setLoad(!0),
                    t._ready = !0,
                    t.fire({
                        type: "ready"
                    })
                },
                __sdkListener: function(e, t, i) {
                    e = e || "",
                    t = "undefined" === t || void 0 === t || null === t ? "" : t,
                    i = "undefined" === t || void 0 === t || null === t ? "" : i;
                    var n, o, a, r = this, c = e.split("_")[1] || "";
                    r._state = c;
                    var d = {
                        state: c,
                        arg1: t,
                        arg2: i
                    };
                    if ("startFragment" === c || "endFragment" === c) {
                        var l = (t || "").toString().split("_");
                        n = parseInt(l[0], 10),
                        o = l[1],
                        a = parseInt(l[2], 10),
                        s(d, {
                            vid: o,
                            order: "number" == typeof n ? n : r.getPlayOrder(),
                            time: i
                        }, !0)
                    }
                    "progress" != c && p.debug("pbproxy state: " + c + ", arg1: " + t + ", arg2: " + i),
                    "startFragment" === c && r.hasFragment(o, a) && r.fire({
                        type: "orderChange",
                        data: d
                    }),
                    ("startFragment" !== c && "endFragment" !== c || ("startFragment" === c || "endFragment" === c) && r.hasFragment(o, a)) && r.fire({
                        type: "stateChange",
                        data: d
                    }),
                    "endFragment" === c && r.hasFragment(o, a) && r.fire({
                        type: "orderWillChange",
                        data: d
                    })
                },
                resetProxy: function() {
                    var e = this;
                    e.clearFragmentsFlag = !0,
                    e._actions = {},
                    e.reset(null),
                    e.reset(e._v_)
                },
                ready: function(e) {
                    var t = this
                      , i = function() {
                        for (var e = 0; e < d.length; e++)
                            !function(e, t) {
                                setTimeout(function() {
                                    e[t].call()
                                }, 0)
                            }(d, e)
                    };
                    d.push(e),
                    t._ready ? i() : t.un("ready").once("ready", function() {
                        i()
                    })
                },
                sleeping: function() {
                    return !0 === this._p_.__sleeping
                },
                getState: function() {
                    return this._state || ""
                },
                hasFragment: function(e, t) {
                    for (var i, n = !1, o = this.getFragments(), a = 0; a < o.length; a++)
                        if (i = o[a].videoInfo,
                        i.vid === e && i.index === t) {
                            n = !0;
                            break
                        }
                    return n
                },
                getFragments: function() {
                    var e = this;
                    return e._p_ ? e._p_.fragments : []
                },
                reset: function(e) {
                    var t = this;
                    t._p_ && (t._p_.reset(e),
                    t._p_.__sleeping = null == e)
                },
                fillFragments: function(e) {
                    var t = this;
                    if (a.isArray(e) && e.length > 0) {
                        var i = t.getFragments();
                        0 === i.length || t.clearFragmentsFlag ? (t.freshFragments(e, !1),
                        t.seek(0, e[0].showStartTime, {
                            run: !0
                        }),
                        t.hasAction("pause") || t.resume(),
                        t.clearFragmentsFlag = !1) : t.addFragment(e, i[i.length - 1].order, Number.MAX_VALUE)
                    } else
                        p.warn("fillFragments params $fragmentList: " + e)
                },
                freshFragments: function(e, t, i, n) {
                    var o = this;
                    o._p_ && (e = (e || []).map(function(e) {
                        return s({}, e, !0)
                    }),
                    o._p_.freshFragments.call(o._p_, e, t, i, n),
                    l = e,
                    o.fire({
                        type: "fragmentsChange"
                    }))
                },
                addFragment: function(e, t, i) {
                    var n = this;
                    return n._p_ && (e = (e || []).map(function(e) {
                        return s({}, e, !0)
                    }),
                    n._p_.addFragment.call(n._p_, e, t, i),
                    n.fire({
                        type: "fragmentsChange"
                    })),
                    -1
                },
                removeFragment: function(e, t) {
                    var i = this;
                    i._p_ && (p.debug("removeFragment, $start: " + e + ", $length: " + t),
                    i._p_.removeFragment(e, t),
                    i.fire({
                        type: "fragmentsChange"
                    }))
                },
                seek: function(e, t, i) {
                    var n = this
                      , o = s({
                        run: !1,
                        jump: !1
                    }, i || {}, !0);
                    t < 0 ? p.error("the seek time (" + t + ") is incorrect!") : n._p_ && n._p_.seek.call(n._p_, e, t, o)
                },
                resume: function() {
                    var e = this;
                    e._p_ && (e._actions.pause = !1,
                    e._actions.play = !0,
                    e._p_.resume())
                },
                pause: function() {
                    var e = this;
                    e._p_ && (e._actions.pause = !0,
                    e._actions.play = !1,
                    e._p_.pause())
                },
                getBuffer: function() {
                    var e = this
                      , t = {};
                    if (e._p_) {
                        var i = e._p_.bufferInfo;
                        t = {
                            order: i.order,
                            time: i.time
                        }
                    }
                    return t
                },
                getPlayInfo: function() {
                    var e = this;
                    return e._p_ ? e._p_.playInfo : {}
                },
                getPlayOrder: function() {
                    return this.getPlayInfo().order
                },
                getLastOrder: function() {
                    var e = this.getFragments();
                    return 0 === e.length ? 0 : e[e.length - 1].order
                },
                getFragByOrder: function(e) {
                    for (var t, i = this.getFragments(), n = 0; n < i.length; n++)
                        if (i[n].order === e) {
                            t = i[n];
                            break
                        }
                    return t
                },
                log: function() {
                    var e = this;
                    e._p_ && p.warn("enable pb log: " + e._p_.p2plog)
                },
                hasAction: function(e) {
                    return !0 === this._actions[e]
                },
                isDone: function() {
                    var e = this
                      , t = !1;
                    return e._p_ && (t = !!e._p_.done),
                    t
                }
            }
        });
        i.exports = new u
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#53#
    var n = function(e, t, i) {
        var n = e(13)
          , o = e(12)
          , a = e(35)
          , r = e(18)
          , c = e(27)
          , s = e(14)
          , p = e(54)
          , d = e(51)
          , l = e(52)
          , u = new o("PBVisualizer")
          , f = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
          , g = window.cancelAnimationFrame || window.mozCancelAnimationFrame
          , h = "QiyiPlayerVisualizer"
          , m = n("PBVisualizer", {
            extend: r,
            construct: function() {
                var e = this;
                e._initShowFlag = 1 === parseInt(s.read(h), 10),
                e._showFlag = e._initShowFlag;
                try {
                    e._canvas = document.createElement("canvas"),
                    e._canvas.width = 450,
                    e._canvas.height = 150,
                    e._canvasCTX = e._canvas.getContext("2d"),
                    e._graphics = new p.Graphics(e._canvas),
                    e._hide()
                } catch (e) {}
            },
            methods: {
                init: function(e, t) {
                    var i = this;
                    i._video = t,
                    i._video.parentNode.appendChild(i._canvas),
                    i._layout(),
                    i._initShowFlag && i._show()
                },
                _layout: function() {
                    var e = this;
                    c(e._canvas).css("pointerEvents", "none").css("width", "auto").css("height", "auto").css("position", "absolute").css("zIndex", "100000").css("marginLeft", "-225px").css("marginTop", "-75px").css("top", c(e._video).height() / 2 + "px").css("left", c(e._video).width() / 2 + "px")
                },
                _drawOutline: function() {
                    var e = this;
                    e._canvasCTX.fillStyle = "rgba(255, 255, 255, 0.6)",
                    e._canvasCTX.clearRect(0, 0, 450, 150),
                    e._canvasCTX.fillRect(0, 0, 450, 150),
                    e._canvasCTX.fontSize = "18px"
                },
                _drawCloseTip: function() {
                    var e = this
                      , t = this._graphics;
                    e._canvasCTX.fillStyle = "rgba(0, 125, 125, 1)",
                    t.wrapText("[CTRL+ALT+F7 开启/关闭]", 295, 15, 430, 20)
                },
                _drawFace: function(e, t, i, n) {
                    var o = this._graphics
                      , a = 2 * i
                      , r = o.create(e, t, a, a);
                    r.setColor("#000000"),
                    r.fillCircle(0, 0, i);
                    r.setColor(n),
                    r.fillCircle(1, 1, i - 1);
                    var c = a / 25
                      , s = i - 4 * c
                      , p = i + 4 * c - 2 * c
                      , d = a / 3;
                    r.setStrokeColor("#000000"),
                    r.drawCircle(s, d, c),
                    r.drawCircle(p, d, c);
                    var l = a / 2
                      , u = i - l / 2
                      , f = 2 * a / 3;
                    r.setStrokeColor("#000000"),
                    r.drawLine(u, f, u + l, f)
                },
                _drawSynopsis: function(e) {
                    var t = this
                      , i = t._graphics
                      , n = l.isDone()
                      , o = l.getPlayOrder()
                      , a = 0
                      , r = e.map(function(e) {
                        var t = e.order
                          , i = o === t ? "▶" : ""
                          , n = "F";
                        return e.ad && (n = "A" + e.rollType[0].toUpperCase(),
                        a++),
                        i + n + "-" + e.vid.slice(0, 5)
                    })
                      , c = r.length > 0 ? e[0].rate : "null"
                      , s = "rate: " + c + ", "
                      , p = s;
                    t._drawFace(10, 4, 10, n ? "#699f00" : "red"),
                    t._canvasCTX.fillStyle = "rgba(0, 125, 125, 1)",
                    i.wrapText(p, 35, 15, 430, 20)
                },
                _drawProcess: function(e, t, i) {
                    var n = this
                      , o = n._graphics
                      , r = 45
                      , c = 10
                      , s = 0
                      , p = 0
                      , d = 0
                      , l = 0
                      , u = 0
                      , f = []
                      , g = []
                      , h = [];
                    if (e.forEach(function(e, t, i) {
                        var n = e.tvid;
                        0 !== t && i[t - 1].tvid === n || (h = [],
                        g.push(h)),
                        h.push(e),
                        0 === t && (p = e.startTime,
                        d = e.showStartTime),
                        t !== i.length - 1 && f.push(e.endTime)
                    }),
                    g.map(function(e) {
                        var t = 0
                          , i = 0
                          , n = e[e.length - 1]
                          , o = e[0];
                        return o.startTime > -1 && n.startTime > -1 ? (i = n.endTime - o.startTime,
                        t = n.showEndTime - o.showStartTime) : i = e.reduce(function(e, t) {
                            return e.realEndTime + t.realEndTime
                        }, 0),
                        {
                            du: i,
                            showdu: t
                        }
                    }).forEach(function(e) {
                        l += e.du,
                        u += e.showdu
                    }),
                    s = parseInt(u / l * 430, 10) || 0,
                    c += parseInt((d - p) / l * 430, 10) || 0,
                    o.setStrokeColor("rgba(0, 125, 125, 1)"),
                    o.drawRect(10, r, 430, 20),
                    o.fillRect(c, r, s, 20),
                    f.forEach(function(e) {
                        var t = (e - p) / l * 430 + 10;
                        o.setStrokeColor("rgba(255, 255, 255, 1)"),
                        o.drawLine(t, 46, t, 64),
                        o.setColor("rgba(25, 25, 25, 1)"),
                        o.textBaseline("bottom"),
                        o.fillText(a.formatMilliseconds(e / 1e3), t - 16, 41)
                    }),
                    e.length > 0) {
                        var m = (i - p) / l * 430 + 10
                          , v = n._canvasCTX;
                        v.beginPath();
                        var b = parseInt(8 / Math.tan(120 * Math.PI / 360), 10);
                        v.moveTo(m, 66),
                        v.lineTo(m + b, 74),
                        v.lineTo(m - b, 74),
                        v.fillStyle = "black",
                        v.fill(),
                        v.closePath()
                    }
                },
                _drawSegmentsText: function(e, t) {
                    var i = this
                      , n = i._graphics
                      , o = 0
                      , a = e.map(function(e) {
                        var i = e.order
                          , n = t === i ? "▶" : ""
                          , a = "F";
                        return e.ad && (a = "A" + e.rollType[0].toUpperCase(),
                        o++),
                        n + a + "-" + e.vid.slice(0, 5)
                    })
                      , r = a.length + "_" + o + ", ";
                    i._canvasCTX.fillStyle = "rgba(0, 125, 125, 1)",
                    n.wrapText(r + "[" + a.join("_|_") + "]", 10, 90, 430, 20)
                },
                _show: function() {
                    var e = this;
                    e._showFlag = !0,
                    c(e._canvas).css("display", ""),
                    e._requestID = f(function t() {
                        e._update(),
                        e._requestID = f(t)
                    })
                },
                _hide: function() {
                    var e = this;
                    e._showFlag = !1,
                    c(e._canvas).css("display", "none"),
                    g(e._requestID)
                },
                toggle: function() {
                    var e = this;
                    u.warn("toggle pb visualizer!"),
                    e._showFlag ? (s.remove(h),
                    e._hide()) : (s.write(h, 1),
                    e._show())
                },
                _update: function() {
                    var e = this
                      , t = d.getData()
                      , i = l.getPlayInfo()
                      , n = i.order
                      , o = i.time;
                    try {
                        e._drawOutline(),
                        e._drawSynopsis(t),
                        e._drawCloseTip(t),
                        e._drawProcess(t, n, o),
                        e._drawSegmentsText(t, n),
                        e._layout()
                    } catch (e) {}
                }
            }
        });
        i.exports = new m
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#54#
    var n = function(e, t, i) {
        var n = {
            Rectangle: function(e, t, i, n) {
                this.x = e,
                this.y = t,
                this.width = i,
                this.height = n,
                this.clone = function() {
                    return new this.Rectangle(this.x,this.y,this.width,this.height)
                }
            },
            Graphics: function(e) {
                function t(e, t, i) {
                    a.beginPath(),
                    a.arc(r.x + e + i, r.y + t + i, i, 0, 2 * Math.PI, !0),
                    a.closePath()
                }
                function i(e, t, i) {
                    if (a.beginPath(),
                    null !== e && null !== t) {
                        var n = Math.min(i, Math.min(e.length, t.length));
                        if (n > 0)
                            for (var o = 0; o < i && o < n; o++) {
                                var c = r.x + e[o]
                                  , s = r.y + t[o];
                                0 === o ? a.moveTo(c, s) : a.lineTo(c, s)
                            }
                    }
                }
                var o = "string" == typeof e ? document.getElementById(e) : e
                  , a = o.getContext("2d")
                  , r = new n.Rectangle(0,0);
                this.getCanvas = function() {
                    return o
                }
                ,
                this.getContext = function() {
                    return a
                }
                ,
                this.getWidth = function() {
                    return o.width
                }
                ,
                this.getHeight = function() {
                    return o.height
                }
                ,
                this.create = function(e, t, i, a) {
                    var r = new n.Graphics(o);
                    return void 0 !== e && null !== e && void 0 !== t && null !== t && r.translate(e, t),
                    r
                }
                ,
                this.setColor = function(e) {
                    a.fillStyle = e
                }
                ,
                this.getColor = function() {
                    return a.fillStyle
                }
                ,
                this.setStrokeColor = function(e) {
                    a.strokeStyle = e
                }
                ,
                this.getStrokeColor = function() {
                    return a.strokeStyle
                }
                ,
                this.textBaseline = function(e) {
                    a.textBaseline = e
                }
                ,
                this.clipRect = function(e, t, i, n) {}
                ,
                this.fillRect = function(e, t, i, n) {
                    a.fillRect(r.x + e, r.y + t, i, n)
                }
                ,
                this.clearRect = function(e, t, i, n) {
                    a.clearRect(e, t, i, n)
                }
                ,
                this.drawRect = function(e, t, i, n) {
                    a.strokeRect(r.x + e, r.y + t, i, n)
                }
                ,
                this.fillCircle = function(e, i, n) {
                    t(e, i, n),
                    a.fill()
                }
                ,
                this.drawCircle = function(e, i, n) {
                    t(e, i, n),
                    a.stroke()
                }
                ,
                this.drawLine = function(e, t, i, n) {
                    a.beginPath(),
                    a.moveTo(r.x + e, r.y + t),
                    a.lineTo(r.x + i, r.y + n),
                    a.stroke()
                }
                ,
                this.drawPolygon = function(e, t, n) {
                    n > 0 && null !== e && null !== t && (i(e, t, n),
                    a.stroke())
                }
                ,
                this.fillPolygon = function(e, t, n) {
                    n > 0 && null !== e && null !== t && (i(e, t, n),
                    a.fill())
                }
                ,
                this.translate = function(e, t) {
                    r.x = e,
                    r.y = t
                }
                ,
                this.wrapText = function(e, t, i, n, o) {
                    var a = this
                      , r = a.getContext()
                      , c = e.split("")
                      , s = "";
                    r.textBaseline = "middle";
                    for (var p = 0; p < c.length; p++) {
                        var d = s + c[p] + "";
                        r.measureText(d).width > n && p > 0 ? (r.fillText(s, t, i),
                        s = c[p] + "",
                        i += o) : s = d
                    }
                    r.fillText(s, t, i)
                }
                ,
                this.fillText = function(e, t, i) {
                    this.getContext().fillText(e, t, i)
                }
            }
        };
        i.exports = n
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#55#
    var n = function(e, t, i) {
        var n, o = e(7), a = e(13), r = e(35), c = e(4), s = e(18), p = e(12), d = e(31), l = e(56), u = e(49), f = e(57), g = e(48), h = new p("DataProvider"), m = {}, v = a("DataProvider", {
            extend: s,
            construct: function(e, t) {
                var i = this;
                i._movieinfo = {},
                i._movieinfo.tvid = e,
                i._movieinfo.vid = t,
                i._movieinfo.oldTvid = e,
                l.request({
                    tvid: e,
                    vid: t
                }, i._parse.bind(i), function(e) {
                    var t = {
                        A000001: 2,
                        A000003: 30,
                        A000004: 30,
                        U00001: 22,
                        P00001: 101,
                        P00002: 102
                    };
                    i._reject(0, t[e], e, "6000")
                })
            },
            methods: {
                _reject: function(e, t, i, n) {
                    h.warn("type:" + e + ",e:" + t + ",o:" + i),
                    this.fire({
                        type: "reject",
                        data: {
                            type: e,
                            code: t,
                            originalCode: i,
                            ec: n
                        }
                    })
                },
                _resolve: function() {
                    var e = this;
                    h.log("data resolved"),
                    e.fire({
                        type: "resolve",
                        data: e._movieinfo
                    })
                },
                _parse: function(e) {
                    var t = this;
                    try {
                        var i = 0
                          , a = e.data.vi
                          , s = e.data.vp
                          , p = s.tkl
                          , l = [];
                        if (!function(e) {
                            if (null == e || !e.hasOwnProperty("st"))
                                return h.error("vi st is lose!"),
                                t._reject(0, 1, "", "6000"),
                                !1;
                            var i = parseInt(e.st, 10);
                            return !(200 !== i && (h.error("vi st is: " + i + "!"),
                            t._reject(0, 1, "", "6000"),
                            1))
                        }(a) || !function(e) {
                            if (null == e || !e.hasOwnProperty("st"))
                                return h.error("vp st is lose!"),
                                t._reject(0, 1, "", "6000"),
                                !1;
                            var i, n = parseInt(e.st, 10);
                            if (!(100 < n && n < 200)) {
                                switch (n) {
                                case 304:
                                case 401:
                                case 405:
                                case 406:
                                    i = 10;
                                    break;
                                case 501:
                                    i = 12;
                                    break;
                                case 502:
                                    i = 13;
                                    break;
                                case 601:
                                case 602:
                                case 701:
                                    i = 14;
                                    break;
                                default:
                                    i = 1
                                }
                                return t._reject(0, i, n, "6000"),
                                !1
                            }
                            return !0
                        }(s))
                            return;
                        h.debug("vi & vp checked"),
                        t._movieinfo.previewTime = 1 / 0,
                        t._movieinfo.originalData = e,
                        t._movieinfo.tvid = a.videoQipuId,
                        t._movieinfo.albumId = a.albumQipuId,
                        t._movieinfo.cid = s.cid,
                        t._movieinfo.poster = a.vpic || "",
                        t._movieinfo.ugc = d.isUGC(t._movieinfo.tvid),
                        t._movieinfo.isVIP = a.bossStatus > 0,
                        t._movieinfo.videoQipuId = a.videoQipuId,
                        t._movieinfo.previewImageUrl = a.previewImageUrl,
                        t._movieinfo.prelude = {
                            headTime: s.bt,
                            tailTime: s.et
                        },
                        t._movieinfo.vidl = [];
                        for (var u = 0; u < p.length; u++)
                            for (var m = p[u].vs, v = 0; v < m.length; v++) {
                                var b = 0
                                  , _ = m[v].fs
                                  , x = _.length
                                  , y = m[v].vid
                                  , w = m[v].bid
                                  , k = m[v].scrsz.split("x")
                                  , A = {
                                    width: k[0],
                                    height: k[1]
                                }
                                  , E = [];
                                l.push({
                                    vid: y,
                                    rate: w
                                });
                                for (var F = 0; F < x; F++) {
                                    var C = _[F].s > -1 ? _[F].s : b
                                      , D = C + _[F].d
                                      , S = C
                                      , T = D
                                      , q = new g(!1,t._movieinfo.isVIP,_[F].l,F,a.videoQipuId,y,l,a.albumQipuId,s.cid,a.sid,_[F].d,_[F].b,S,T,C,D);
                                    E.push(q),
                                    b += _[F].d,
                                    F === x - 1 && (i = _[F].s > -1 ? _[F].s + _[F].d : b)
                                }
                                var I = new f(w,y,i,E,A);
                                t._movieinfo.vidl.push(I)
                            }
                        t._movieinfo.vidl.sort(function(e, t) {
                            return e.vd > t.vd
                        }),
                        t._movieinfo.vidl.unshift(t._movieinfo.vidl.pop()),
                        t._movieinfo.duration = i,
                        s.ctl && s.ctl.vip && r.isArray(s.ctl.vip.bids) ? t._movieinfo.ctrlBids = s.ctl.vip.bids : t._movieinfo.ctrlBids = [],
                        s.stl && s.stl.stl_xml && (t._movieinfo.subtitlesUrl = s.stl.d + s.stl.stl_xml[0].l),
                        Object.defineProperty(t._movieinfo, "vd", {
                            get: function() {
                                return n._findBestPlayVd(null, this.vidl)
                            }
                        })
                    } catch (e) {
                        t._movieinfo = null,
                        t._reject(0, 10000001, "vmserror", "6000")
                    }
                    if (t._movieinfo.isVIP) {
                        var B = t._movieinfo.vidl.filter(function(e) {
                            return e.vd === t._movieinfo.vd
                        })[0]
                          , L = B.segments[0].__url
                          , j = o.query2Json(L)
                          , P = o.filename(L);
                        c(j, {
                            filename: P,
                            tvid: t._movieinfo.tvid,
                            aid: t._movieinfo.albumId
                        }),
                        t._vipAuth(j)
                    } else
                        t._resolve()
                },
                _vipAuth: function(e) {
                    var t = this;
                    u.request(e, function(i) {
                        h.log("boss data: " + p.stringify(i));
                        var n = u.getPreviewTime(e.tvid);
                        t._movieinfo.isTryWatch = 1 === parseInt(i.data.prv, 10),
                        t._movieinfo.previewType = i.previewType,
                        t._movieinfo.previewTime = 0 === n ? 1 / 0 : n,
                        t._movieinfo.authTipType = parseInt(i.data.tip_type, 10),
                        h.log("boss preview time: " + n),
                        t._movieinfo.vidl.filter(function(e) {
                            return e.segments.map(function(e) {
                                return e._setBoss(i),
                                e
                            }),
                            e.vd === t._movieinfo.vd
                        }),
                        t._resolve()
                    }, function(e, i) {
                        if (e) {
                            var n = "8" + e.slice(-3);
                            "Q00501" === e || "Q00507" === e ? t._reject(0, 22, e, n) : t._reject(1, e)
                        } else
                            t._reject(0, 21, i, "8000")
                    })
                }
            }
        });
        i.exports = {
            setEngine: function(e) {
                n = e
            },
            getPid: function(e, t) {
                return e + "_" + t
            },
            getPromise: function(e) {
                var t, i = e.split("_")[0], n = e.split("_")[1];
                return m[e] && "pending" === m[e].st ? t = m[e].pm : (t = new Promise(function(t, o) {
                    var a = new v(i,n);
                    a.on("resolve", function(i) {
                        var n = i.data;
                        t(n),
                        m[e].st = "fulfilled",
                        m[e].data = n
                    }),
                    a.on("reject", function(t) {
                        var i = t.data;
                        o(i),
                        m[e].st = "rejected",
                        m[e].data = i
                    })
                }
                ),
                m[e] = {
                    st: "pending",
                    pm: t,
                    data: void 0
                }),
                t
            },
            isPending: function(e) {
                return m[e] && "pending" === m[e].st
            },
            hasPreload: function(e) {
                return !(!m[e] || "fulfilled" !== m[e].st)
            },
            getPreloadData: function(e) {
                return m[e].data
            },
            clearAll: function() {
                m = {}
            }
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#56#
    var n = function(e, t, i) {
        var n = e(5)
          , o = e(9)
          , a = e(7)
          , r = e(8)
          , c = e(21)
          , s = e(19)
          , p = (e(4),
        e(12))
          , d = (e(10),
        e(11))
          , l = e(23)
          , u = e(25)
          , f = e(43)
          , g = e(44)
          , h = null
          , m = new p("mixer");
        i.exports = {
            request: function(e, t, i) {
                c.isVip(function(p, v) {
                    if ("limitation" === v)
                        setTimeout(function() {
                            i("U00001")
                        }, 0);
                    else {
                        var b = e.tvid
                          , _ = e.vid
                          , x = (new Date).getTime()
                          , y = function(e) {
                            if (null != e)
                                try {
                                    h = p ? 0 : e.hasOwnProperty("s") ? parseInt(e.s, 10) : 0
                                } catch (e) {}
                        };
                        u.sTime_vms = new Date - u.pgct,
                        g.sendVrsRequestPingback(new Date - u.pgct),
                        r.jsonp({
                            url: f.vmsUrl,
                            params: function() {
                                var e = {
                                    tvId: b,
                                    vid: _,
                                    key: "fvip",
                                    src: d.isTWLocale() ? "01010031010010000000" : "01010031010000000000",
                                    vinfo: null === h ? 1 : h,
                                    tm: x,
                                    puid: c.getUid(),
                                    qyid: s.getJsuid(),
                                    authKey: o(o("") + x + b),
                                    um: p ? 1 : 0,
                                    pf: n.code,
                                    thdk: "",
                                    thdt: "",
                                    rs: 1,
                                    k_tag: 1,
                                    qdv: 1,
                                    tn: Math.random()
                                };
                                return d.isTraditionalChinese() && (e.locale = "zh_tw"),
                                e
                            }(),
                            memory: !0,
                            beforeSend: function(e) {
                                var t = a.parse(e.url).host;
                                try {
                                    e.url += "&vf=" + l.cmd5x(e.url.replace(new RegExp("^(http|https)://" + t,"ig"), ""))
                                } catch (e) {}
                                return m.log(e.url),
                                e
                            },
                            success: function(e) {
                                u.usedTime_vms = new Date - u.pgct - u.sTime_vms,
                                g.sendVrsReadyPingback(u.usedTime_vms),
                                e && e.hasOwnProperty("code") ? "A000000" === e.code ? (e.data && e.data.f4v && y(e.data.f4v),
                                t(e)) : i(e.code) : i("P00001")
                            },
                            failure: function() {
                                i("P00001")
                            }
                        })
                    }
                })
            }
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#57#
    var n = function(e, t, i) {
        var n = e(13);
        i.exports = n("Definition", {
            construct: function(e, t, i, n, o) {
                var a = this;
                a.vd = e,
                a.vid = t,
                a.duration = i,
                a.segments = n || [],
                a.realArea = o
            },
            methods: {}
        })
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#58#
    var n = function(e, t, i) {
        var n = e(13)
          , o = e(18)
          , a = e(12)
          , r = e(9)
          , c = e(33)
          , s = e(35)
          , p = e(48)
          , d = e(37)
          , l = e(38)
          , u = e(51)
          , f = e(40)
          , g = e(52)
          , h = (e(55),
        new a("DEngineEmitters"))
          , m = n("DEngineEmitters", {
            extend: o,
            methods: {
                init: function(e) {
                    var t = this;
                    t.engine = e,
                    t._engineEvents(),
                    t._episodeEvents(),
                    t._aresEvents(),
                    t._vrsEvents(),
                    t._providerEvents()
                },
                _engineEvents: function() {
                    var e = this
                      , t = e.engine;
                    t.on(d.NTF_TimeUpdate, function() {
                        t._checkAuthTime(1e3 * t.getCurrenttime()),
                        t._checkSkipTailTime(1e3 * t.getCurrenttime())
                    }),
                    t.on(l.NTF_SetSkipPrelude, function(e) {
                        var i = 1e3 * t.getCurrenttime()
                          , n = t._constructPlaySegments(i);
                        g.freshFragments(n, !0, 0, i)
                    })
                },
                _episodeEvents: function() {
                    var e = this
                      , t = e.engine;
                    f.on("finishAddPres", function(e) {
                        var i = e.data
                          , n = i.videoId
                          , o = i.length
                          , a = t._getCurrentGas()
                          , r = c.getEpisodeId(a.videoEventId)
                          , s = t._constructPlaySegments(null, f.getInfo(n));
                        n === r || 0 === o && void 0 === r ? h.debug(n + ": concat cur episode") : h.debug(n + ": concat preload episode"),
                        g.fillFragments(s, g.getLastOrder(), Number.MAX_VALUE)
                    })
                },
                _aresEvents: function() {
                    var e = this
                      , t = e.engine;
                    t.on(l.NTF_ARES_Gas, function(e) {
                        var i = e.data
                          , n = i.videoEventId
                          , o = c.getEpisodeId(n)
                          , s = new p(!0,!1,i.file,i,"AD",r(i.id),[],"AD","AD","AD","AD",-1,0,-1,0,-1)
                          , d = 0
                          , l = 0;
                        if (0 === i.offset)
                            f.finishPres(o) ? h.warn(o + ": ignore ares gas, " + a.stringify(i)) : (f.addPres(o, [s]),
                            h.debug(o + ": concat pre-ares!"),
                            g.fillFragments([s]));
                        else if (i.offset > 0)
                            if (t.getCurrenttime() < i.offset) {
                                var m = u.getAresMids()
                                  , v = m.length;
                                if (m.length > 0) {
                                    var b = m[v - 1];
                                    d = u.getIndex(b),
                                    l = Number.MAX_VALUE
                                } else
                                    d = -1,
                                    l = 1e3 * i.offset;
                                g.addFragment([s], d, l),
                                f.addMids(o, [s])
                            } else
                                h.warn(o + ":drop ares gas, " + a.stringify(i))
                    }),
                    t.on(l.NTF_ARES_GasFinish, function(e) {
                        var t = e.data
                          , i = t.videoId;
                        switch (t.rollType) {
                        case "preroll":
                            f.finishPres(i, !0);
                            break;
                        case "midroll":
                            f.finishMids(i, !0)
                        }
                    }),
                    t.on(l.NTF_ARES_End, function(e) {
                        var t = e.data
                          , i = t.rollType
                          , n = t.videoId;
                        switch (i) {
                        case "preroll":
                            f.finishPres(n, !0);
                            break;
                        case "midroll":
                            f.finishMids(n, !0)
                        }
                    })
                },
                _vrsEvents: function() {
                    var e = this
                      , t = e.engine;
                    t.on(l.NTF_VRSPreloaded, function(e) {
                        var i = e.data
                          , n = i.videoQipuId
                          , o = t._constructPlaySegments(null, i);
                        f.finishPres(n) && !f.finishFeatures(n) && (h.debug(n + ": 预载直接拼Feature seg!"),
                        g.fillFragments(o, g.getLastOrder(), Number.MAX_VALUE)),
                        f.setInfo(n, i),
                        f.freshFeatures(n, o),
                        f.finishFeatures(n, !0)
                    }),
                    t.on(l.NTF_ReJointPreload, function(e) {
                        var i = e.data
                          , n = i.videoQipuId;
                        if (f.finishPres(n) && f.finishFeatures(n)) {
                            var o = f.getPres(n)
                              , a = t._constructPlaySegments(null, i);
                            h.debug(n + ":rejoint preload, ares(" + o.length + ") & feature(" + a.length + ")!"),
                            g.fillFragments(o.concat(a), g.getLastOrder(), Number.MAX_VALUE),
                            f.setInfo(n, i),
                            f.freshFeatures(n, a),
                            f.finishFeatures(n, !0)
                        }
                    }),
                    t.on(l.NTF_VRSReady, function(e) {
                        var i = e.data
                          , n = i.videoQipuId;
                        f.setInfo(n, i),
                        f.freshFeatures(n, t._checkSegmentsInPreview()),
                        f.finishFeatures(n, !0)
                    })
                },
                _providerEvents: function() {
                    var e = this
                      , t = e.engine;
                    g.on("orderWillChange", function(e) {
                        var i = e.data.order
                          , n = u.getSegmentByOrder(i)
                          , o = u.getSegmentByOrder(i + 1)
                          , a = t._getGasByOrder(i);
                        if (t.isAd()) {
                            var r = i >= 0 && o && !0 === o.ad;
                            n && (r || t.fire({
                                type: l.NTF_ARES_End,
                                data: {
                                    videoId: c.getEpisodeId(a.videoEventId),
                                    rollType: n.rollType
                                }
                            }))
                        }
                    }),
                    g.on("stateChange", function(e) {
                        var i, n, o = e.data;
                        switch ("seeking" != o.state && (t.hasSeeking = !1),
                        o.state) {
                        case "endFragment":
                            i = parseInt(o.order, 10),
                            n = u.getSegmentByOrder(i),
                            t.isAd(i) ? n.vid === o.vid && t._statusChanged({
                                status: d.Status_Stoped
                            }) : u.isFeatureEndSegment(n) && !u.isEndSegment(n) && Math.abs(o.time - n.realEndTime) <= 1e3 && t._statusChanged({
                                status: d.Status_Stoped
                            });
                            break;
                        case "startFragment":
                            i = parseInt(o.order, 10),
                            t.isAd(i) ? t._paused || (t._statusChanged({
                                status: d.Status_Play
                            }),
                            t._statusChanged({
                                status: d.Status_Playing
                            })) : u.isFeatureFirstSegment(u.getSegmentByOrder(i)) && (t._statusChanged({
                                status: d.Status_Play
                            }),
                            t._statusChanged({
                                status: d.Status_Playing
                            }),
                            setTimeout(function() {
                                g.isDone() && t._statusChanged({
                                    status: d.Status_Loaddone
                                })
                            }, 200));
                            break;
                        case "loadState":
                            if (t.isAd(o.arg1) && s.isObject(o.arg2)) {
                                var a = o.arg2;
                                "cache" === a.loadType && "start" === a.activeType && t._statusChanged({
                                    status: d.Status_Loadstart,
                                    eventOrigin: "ad",
                                    gas: t._getGasByOrder(o.arg1)
                                })
                            }
                            break;
                        case "playing":
                            t._paused = !1,
                            t._statusChanged({
                                status: d.Status_Play,
                                actionType: t._checkActionType(d.Status_Play)
                            }),
                            t._statusChanged({
                                status: d.Status_Playing,
                                actionType: t._checkActionType(d.Status_Playing)
                            });
                            break;
                        case "pause":
                            t._paused = !0,
                            t._statusChanged({
                                status: d.Status_Paused,
                                actionType: t._checkActionType(d.Status_Paused)
                            });
                            break;
                        case "waiting":
                        case "seeking":
                            t._paused = !0,
                            t._statusChanged({
                                status: d.Status_Waiting,
                                actionType: t._checkActionType(d.Status_Waiting)
                            });
                            break;
                        case "progress":
                            t.fire({
                                type: d.NTF_Progress,
                                data: {
                                    buffer: t.getBufferTime()
                                }
                            });
                            break;
                        case "stop":
                            t._paused = !0,
                            t._checkAuthTime(t._movieinfo.isVIP && t._movieinfo.previewTime < 1 / 0 ? t._movieinfo.previewTime + 1 : 1e3 * t.getCurrenttime()) && t._statusChanged({
                                status: d.Status_Stoped
                            });
                            break;
                        case "done":
                            t._statusChanged({
                                status: d.Status_Loaddone,
                                actionType: !1
                            });
                            break;
                        case "error":
                            t._statusChanged({
                                status: d.Status_LoadFailed,
                                actionType: !1,
                                gas: t._getGasByOrder(o.arg1)
                            }),
                            t.isAd(o.arg1) ? t._removeAres(o.arg1) : t.brokedown(200, "P2P200", "7000")
                        }
                    }),
                    g.on("orderChange", function(e) {
                        var i = e.data.order;
                        if (t.isAd())
                            ;
                        else {
                            var n = u.getSegmentByOrder(i);
                            if (u.isFeatureFirstSegment(n))
                                i > 0 && (h.debug("playing at first feature segment, remove all segments before this segment!"),
                                g.removeFragment(0, i),
                                e.data.order = 0),
                                t._checkSkipHeadTime(n.showStartTime);
                            else {
                                var o = u.getAresPres(n.episodeId)
                                  , a = u.getAresMids(n.episodeId);
                                o.length > 0 && (h.debug("remove all pres!"),
                                g.removeFragment(o[0].order, o.length)),
                                a.length > 0 && (h.debug("remove all mids!"),
                                g.removeFragment(a[0].order, a.length))
                            }
                        }
                    })
                }
            }
        });
        i.exports = new m
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#59#
    var n = function(e, t, i) {
        var n = e(18)
          , o = e(13)
          , a = e(12)
          , r = e(21)
          , c = e(37)
          , s = e(45)
          , p = e(38)
          , d = e(50)
          , l = e(44)
          , u = e(60)
          , f = {}
          , g = !1
          , h = new a("coreEmitters");
        i.exports = o("coreEmitters", {
            construct: function(e) {
                var t = this;
                t._initTypes.bind(e)(),
                t._initEvts.bind(e)()
            },
            extend: n,
            methods: {
                _initTypes: function() {
                    function e(e) {
                        switch (e) {
                        case s.Status_StartPlay:
                            u.add([s.Status_StartPlay], !0);
                            break;
                        case s.Status_Playing:
                            u.add([s.Status_Play, s.Status_Playing]),
                            u.remove([s.Status_Idle, s.Status_PlayError, s.Status_Stoped, s.Status_End_Play, s.Status_Paused, s.Status_Waiting]);
                            break;
                        case s.Status_Paused:
                            u.add(s.Status_Paused),
                            u.remove([s.Status_Idle, s.Status_Play, s.Status_Playing, s.Status_Waiting, s.Status_PlayError, s.Status_Stoped, s.Status_End_Play]);
                            break;
                        case s.Status_Waiting:
                            u.add(s.Status_Waiting),
                            u.remove([s.Status_Idle, s.Status_Play, s.Status_Playing, s.Status_Paused, s.Status_PlayError, s.Status_Stoped, s.Status_End_Play]);
                            break;
                        case s.Status_PlayError:
                            u.add(s.Status_PlayError),
                            u.remove([s.Status_Idle, s.Status_Play, s.Status_Playing]);
                            break;
                        case s.Status_Stoped:
                            u.add(s.Status_Stoped),
                            u.remove([s.Status_Idle, s.Status_Play, s.Status_Playing, s.Status_Waiting]);
                            break;
                        case s.Status_End_Play:
                            u.add(s.Status_End_Play),
                            u.remove([s.Status_Idle, s.Status_Play, s.Status_Playing, s.Status_Waiting])
                        }
                    }
                    var t = this;
                    t._waitingTime = 0;
                    var i = t._engine;
                    i.on(p.Status_Assembled, function() {
                        i.isAssembled = !0,
                        i.on(c.NTF_StatusChanged, function(n) {
                            var o = t.isAd()
                              , a = function(i, n, o) {
                                var a = t._getdata();
                                a.state = i,
                                n && (a.actionType = n.actionType || c.Action_Type_Native,
                                n.gas && (a.gas = n.gas)),
                                t.currStatus === i && !0 !== o || (e(i),
                                t.currStatus = i,
                                t.fire({
                                    type: s.NTF_StatusChanged,
                                    data: a
                                }),
                                h.debug("core status changed: " + i))
                            };
                            switch (n.data.status) {
                            case c.Status_Canplay:
                                o && a(s.Status_Ready, n.data);
                                break;
                            case c.Status_Loadstart:
                                o || "ad" === n.data.eventOrigin ? "ad" === n.data.eventOrigin && "DATA" === t.getEngineType() ? a(s.Status_AdLoadstart, n.data, !0) : a(s.Status_AdLoadstart, n.data) : ("HTTP" === t.getEngineType() && a(s.Status_Loadstart, n.data),
                                r.tvid(t._movieinfo.tvid)),
                                r.closeHeartBeat();
                                break;
                            case c.Status_Loaddone:
                                "DATA" === t.getEngineType() && t.checkPreload();
                                break;
                            case c.Status_LoadedMetaData:
                                o || a(s.Status_LoadedMetaData, n.data);
                                break;
                            case c.Status_Playing:
                                f.__sendADStartPPB || (f.__sendADStartPPB = !0,
                                l.sendADStartPlayPingback()),
                                o ? (t._ADfirstPlay && (t._ADfirstPlay = !1,
                                a(s.Status_AdStartPlay, n.data),
                                h.log("Adplayer start play cur ad!")),
                                t._isSkipAD = !1,
                                a(s.Status_AdPlaying, n.data)) : (t._firstPlay && (l.sendTimingPingback(),
                                t._firstPlay = !1,
                                a(s.Status_StartPlay, n.data)),
                                t.currStatus !== s.Status_Waiting && t.currStatus !== s.Status_Play || l.sendPlayingPingback(),
                                f.__sendFirstFrameShow || (f.__sendFirstFrameShow = !0,
                                l.sendStartPlayPingback()),
                                a(s.Status_Playing, n.data),
                                r.openHeartBeat()),
                                g || (g = !0,
                                t.fire({
                                    type: s.NTF_FollowUpNextLoad,
                                    data: ""
                                })),
                                clearTimeout(t._waitingTime),
                                t._waitingTime = 0;
                                break;
                            case c.Status_Stalled:
                                o && a(s.Status_AdStalled, n.data);
                                break;
                            case c.Status_Waiting:
                                o ? a(s.Status_AdWaiting, n.data) : (t._timeMark = 0,
                                a(s.Status_Waiting, n.data),
                                r.closeHeartBeat()),
                                i.isSeeking() || (clearTimeout(t._waitingTime),
                                t._waitingTime = 0,
                                t._waitingTime = setTimeout(function() {
                                    l.sendWaitingPingback(o),
                                    clearTimeout(t._waitingTime),
                                    t._waitingTime = 0
                                }, 1e3));
                                break;
                            case c.Status_Paused:
                                o ? a(s.Status_AdPaused, n.data) : (t._timeMark = 0,
                                a(s.Status_Paused, n.data),
                                r.closeHeartBeat());
                                break;
                            case c.Status_Stoped:
                                o ? a(s.Status_AdPlayEnded, n.data) : (t._timeMark = 0,
                                l.sendEndPlayPingback(),
                                a(s.Status_Stoped, n.data),
                                t.hasNextVideo() ? t.switchNextVideo(!0) : a(s.Status_End_Play, n.data)),
                                r.closeHeartBeat();
                                break;
                            case c.Status_LoadFailed:
                                o ? a(s.Status_AdError, n.data) : (t._timeMark = 0,
                                a(s.Status_PlayError, n.data)),
                                g || (g = !0,
                                t.fire({
                                    type: s.NTF_FollowUpNextLoad,
                                    data: ""
                                })),
                                r.closeHeartBeat();
                                break;
                            case c.Status_Play:
                                a(s.Status_Play, n.data)
                            }
                        }),
                        [[c.NTF_CanPlayThrough, s.NTF_CanPlayThrough, s.NTF_AD_CanPlayThrough], [c.NTF_VolumeChanged, s.NTF_VolumeChanged, s.NTF_AD_VolumeChanged], [c.NTF_DurationChanged, s.NTF_DurationChanged, s.NTF_AD_DurationChanged], [c.NTF_TimeUpdate, s.NTF_TimeUpdate, s.NTF_AD_TimeUpdate], [c.NTF_Progress, s.NTF_Progress, s.NTF_AD_Progress], [c.NTF_Seeking, s.NTF_Seeking, s.NTF_AD_Seeking]].forEach(function(e) {
                            e[0] == c.NTF_TimeUpdate ? i.on(e[0], function(i) {
                                var n = (new Date).getTime();
                                0 === t._timeMark && (t._timeMark = n),
                                t.isAd() || t.currStatus == c.Status_Stalled || t.currStatus == c.Status_Waiting || t.currStatus == c.Status_Paused || t.currStatus == c.Status_Stoped || t.currStatus == c.Status_LoadFailed || (t._playingDuration += n - t._timeMark),
                                t._timeMark = n,
                                t.fire({
                                    type: t.isAd() ? e[2] : e[1],
                                    data: i.data
                                })
                            }) : i.on(e[0], function(i) {
                                t.fire({
                                    type: t.isAd() ? e[2] : e[1],
                                    data: i.data
                                })
                            })
                        })
                    }),
                    i.on(p.NTF_ARES_Load, function() {
                        t._aresloaded = !0,
                        t.fire({
                            type: s.Status_AdLoaded
                        })
                    }),
                    i.on(p.NTF_ARES_Init, function() {
                        t.fire({
                            type: s.Status_AdInit
                        })
                    }),
                    i.on(p.NTF_ARES_Play, function(e) {
                        t.fire({
                            type: s.Status_AresPlay,
                            data: e.data
                        })
                    }),
                    i.on(p.NTF_ARES_End, function(e) {
                        h.log("ares end, agent: " + (e.agent ? e.agent : "engine")),
                        t.fire({
                            type: s.Status_AresEnded,
                            data: e.data || ""
                        })
                    }),
                    i.on(p.NTF_ARES_Info, function(e) {
                        var i = e.data || {};
                        t._aresinfoed = i,
                        t.fire({
                            type: s.Status_AresNoticeInfo,
                            data: e.data || ""
                        })
                    }),
                    i.on(p.NTF_VRSStart, function(e) {
                        t.fire({
                            type: s.NTF_VRSStart,
                            data: t._getdata()
                        })
                    }),
                    i.on(p.NTF_VRSReady, function(e) {
                        function n() {
                            t.fire({
                                type: s.NTF_VRSPreReady
                            }),
                            t.eventlog.vrspreready = !0
                        }
                        function o() {
                            t.fire({
                                type: s.NTF_VRSReady,
                                data: {
                                    data: t._getdata(),
                                    movieinfo: e.data
                                }
                            }),
                            t.eventlog.vrsready = !0
                        }
                        function a() {
                            var i = t.getStartPlayTime();
                            e.data.originalData && e.data.originalData.data.vp.bt && (i < 10 && t.isSkipPrelude(),
                            t._skipHT = e.data.originalData.data.vp.bt,
                            t._skipTT = e.data.originalData.data.vp.et)
                        }
                        i.isAssembled ? (n(),
                        o(),
                        a()) : i.on(p.Status_Assembled, function() {
                            n(),
                            o(),
                            a()
                        })
                    }),
                    i.on(p.NTF_VRSPreloaded, function(e) {
                        t.fire({
                            type: s.NTF_VRSPreloaded,
                            data: {
                                movieinfo: e.data
                            }
                        })
                    }),
                    i.on(p.NTF_MovieInfoChange, function() {
                        var e;
                        t._preMovieInfo && (e = {
                            tvid: parseInt(t._preMovieInfo.tvid, 10)
                        },
                        t._vdsSwitch = !1,
                        t.fire({
                            type: s.NTF_VideoChange,
                            data: {
                                preMovieInfo: e
                            }
                        })),
                        f = {}
                    }),
                    i.on(p.NTF_VDChanged, function() {
                        t._vdsSwitch = !1;
                        var e = i.getCurrentVD();
                        h.log("definition changed: " + e),
                        t.fire({
                            type: s.NTF_DefinitionSwitched,
                            data: e
                        })
                    }),
                    i.on(p.NTF_TVIDChanged, function() {
                        t.getVideoInfo(function(e) {
                            var i = t._getdata();
                            i.vi = e.vi,
                            t.fire({
                                type: s.NTF_VideoChanged,
                                data: i
                            })
                        })
                    }),
                    i.on(p.NTF_Recharge, function(e) {
                        h.warn("notice recharge: " + a.stringify(e)),
                        t.fire({
                            type: s.NTF_Recharge,
                            data: e
                        }),
                        g || (g = !0,
                        t.fire({
                            type: s.NTF_FollowUpNextLoad,
                            data: ""
                        }))
                    }),
                    i.on(p.Status_Error, function(e) {
                        var i = t._getdata();
                        i.code = e.data.code,
                        i.realcode = e.data.realcode,
                        i.ec = e.data.ec,
                        i.code && 7001 !== i.code && l.sendErrorPlayPingback(i.code, i.ec),
                        t.fire({
                            type: s.NTF_Error,
                            data: i
                        }),
                        g || (g = !0,
                        t.fire({
                            type: s.NTF_FollowUpNextLoad,
                            data: ""
                        })),
                        t.errorcode = i
                    })
                },
                _initEvts: function() {
                    var e = this
                      , t = e._engine;
                    t.on(d.Evt_StartFromHistory, function(t) {
                        e.fire({
                            type: s.Evt_StartFromHistory,
                            data: t.data
                        })
                    }),
                    t.on(d.Evt_SkipHeader, function(t) {
                        e.fire({
                            type: s.Evt_SkipHeader,
                            data: t.data
                        })
                    }),
                    t.on(d.Evt_SkipTail, function(t) {
                        e.fire({
                            type: s.Evt_SkipTailer,
                            data: t.data
                        })
                    })
                }
            }
        })
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#60#
    var n = function(e, t, i) {
        var n = e(18)
          , o = e(13)
          , a = e(35)
          , r = []
          , c = []
          , s = o("StatusPool", {
            construct: function() {},
            extend: n,
            methods: {
                add: function(e, t) {
                    var i = this;
                    if (a.isArray(e))
                        for (var n = 0; n < e.length; n++)
                            i.add(e[n], t);
                    else {
                        var o = !0 === t ? c : r;
                        -1 === o.indexOf(e) && o.push(e)
                    }
                },
                remove: function(e) {
                    var t = this;
                    if (a.isArray(e))
                        for (var i = 0; i < e.length; i++)
                            t.remove(e[i]);
                    else {
                        var n = r.indexOf(e);
                        n > -1 && r.splice(n, 1)
                    }
                },
                removeAll: function() {
                    r.splice(0, r.length)
                },
                has: function(e) {
                    return r.concat(c).indexOf(e) > -1
                }
            }
        });
        i.exports = new s
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#61#
    var n = function(e, t, i) {
        function n() {
            return s.os.ios || s.os.android ? c.getJsuid() : c.getFluid()
        }
        var o = e(13)
          , a = e(8)
          , r = e(21)
          , c = e(19)
          , s = e(5)
          , p = e(12)
          , d = e(25)
          , l = new p("recorder")
          , u = e(45);
        e(44);
        i.exports = o("Recorder", {
            construct: function(e) {
                var t = this
                  , i = !1;
                t._core = e,
                t._isSwitchingDefinition = !1;
                var n = function() {
                    i || (i = !0,
                    t._record())
                };
                e.on(u.NTF_StatusChanged, function(i) {
                    var n = i.data.state;
                    if (n === u.Status_Playing && t._startTimer(),
                    n === u.Status_Paused || n === u.Status_Waiting || n === u.Status_Stoped) {
                        if (e.getCurrenttime() <= 1 && n === u.Status_Waiting)
                            return;
                        if (Math.abs(e.getDuration() - e.getCurrenttime()) <= 1 && n !== u.Status_Stoped)
                            return;
                        t._stopTimer(),
                        t._record(n === u.Status_Stoped)
                    }
                }),
                e.on(u.NTF_Seeking, function() {
                    e.isAd() || t._record()
                }),
                e.on(u.NTF_DefinitionSwitching, function(e) {
                    t._isSwitchingDefinition = !0
                }),
                e.on(u.NTF_DefinitionSwitched, function(e) {
                    t._isSwitchingDefinition = !1
                }).on(u.NTF_VideoChanged, function(e) {
                    t._isSwitchingDefinition = !1
                }),
                e.once(u.NTF_VRSStart, function(e) {
                    t._getCurrent(e.data.tvid)
                }),
                window.addEventListener("unload", n),
                window.addEventListener("beforeunload", n),
                window.addEventListener("pagehide", n)
            },
            methods: {
                _stopTimer: function() {
                    var e = this;
                    e._timer && (clearInterval(e._timer),
                    e._timer = null)
                },
                _startTimer: function() {
                    var e = this;
                    e._timer || (e._timer = setInterval(e._record.bind(e), 12e4))
                },
                _getCurrent: function(e) {
                    function t() {
                        var t = r.isLogin() ? "//l.rcd.iqiyi.com/apis/qiyirc/getvplay" : "//nl.rcd.iqiyi.com/apis/urc/getvplay"
                          , o = {};
                        o.tvId = e,
                        o.agent_type = 1,
                        r.isLogin() || (o.ckuid = n()),
                        d.sTime_history = new Date - d.pgct,
                        a.jsonp({
                            url: t,
                            params: o,
                            success: function(e) {
                                d.usedTime_history = new Date - d.sTime_history - d.pgct;
                                var t = function(e) {
                                    i._core.getMovieInfo().tvid == e.tvId && i._setStartPlayTime(e.videoPlayTime)
                                };
                                e.data && e.data.videoPlayTime > 10 && (i._core.eventlog.vrspreready ? t(e.data) : i._core.once(u.NTF_VRSPreReady, function() {
                                    t(e.data)
                                })),
                                i._startTimer()
                            }
                        })
                    }
                    var i = this;
                    i._isSwitchingDefinition || (e ? t() : i._core.getVideoInfo(function(e) {
                        t(e.tvid)
                    }))
                },
                _setStartPlayTime: function(e) {
                    var t = this;
                    l.log("play time point from record：" + e),
                    t._core.setStartPlayTime(e)
                },
                _record: function(e) {
                    var t = this;
                    t._core.getVideoInfo(function(i) {
                        var o = r.isLogin() ? "//l.rcd.iqiyi.com/apis/qiyirc/setrc.php" : "//nl.rcd.iqiyi.com/apis/urc/setrc"
                          , c = s.browser.ipad || s.browser.ipod ? 21 : 11
                          , p = {
                            tvId: i.tvid,
                            terminalId: c,
                            agent_type: 1
                        };
                        r.isLogin() || (p.ckuid = n()),
                        p.videoPlayTime = e ? 0 : parseInt(t._core.getCurrenttime(), 10) || 0,
                        (p.videoPlayTime > 0 && p.videoPlayTime < t._core.getDuration() || e) && (l.log("record history：" + p.videoPlayTime + ", duration: " + t._core.getDuration() + ", tvid: " + p.tvId),
                        a.jsonp({
                            url: o,
                            params: p
                        }))
                    })
                }
            }
        })
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#62#
    var n = function(e, t, i) {
        var n = e(13);
        i.exports = n("movieinfo", {
            construct: function() {},
            methods: {
                tvid: "",
                vid: "",
                albumId: "",
                duration: 0,
                adPlayerID: "",
                url: "",
                adUrl: "",
                adtype: "",
                vd: "",
                clientIp: "",
                cid: "",
                ugc: "",
                vidl: [],
                poster: "",
                oldTvid: "",
                subtitlesUrl: ""
            }
        })
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#63#
    var n = function(e, t, i) {
        var n = e(64)
          , o = e(13)
          , a = e(5)
          , r = e(27)
          , c = e(65)
          , s = e(66)
          , p = e(70)
          , d = e(75)
          , l = e(45);
        i.exports = o("h5View", {
            construct: function() {
                var e = this;
                c.init(e.core),
                e._loadCSS(),
                e.registerPlugins([s, d, p]),
                e._loadSkins(),
                e._loadPlayListSkin()
            },
            extend: n,
            methods: {
                _loadCSS: function() {
                    var e, t = '@charset "utf-8";html{-webkit-overflow-scrolling:touch;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section,body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,fieldset,legend,button,input,textarea,form,th,td{margin:0;padding:0}article,aside,details,figcaption,figure,footer,header,hgroup,nav,section,summary{display:block}audio,canvas,video{display:inline-block;*display:inline;*zoom:1}button,input,select,textarea{font-family:inherit;font-size:100%;vertical-align:baseline;*vertical-align:middle}button,input[type="button"],input[type="submit"],input[type="reset"]{-webkit-appearance:button;cursor:pointer;*overflow:visible}button::-moz-focus-inner,button::-moz-focus-outer,input::-moz-focus-inner,input::-moz-focus-outer{border:0 none;padding:0;margin:0}textarea{overflow:auto;vertical-align:top;resize:vertical}.pw-video button,.pw-video input,.pw-video select,.pw-video textarea{font:12px/1.5 Tahoma,Helvetica,Arial,"\\5FAE\\8F6F\\96C5\\9ED1",sans-serif}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}address,cite,dfn,em,var,i{font-style:normal}code,kbd,pre,samp,tt{font-family:"Courier New",monospace,serif}small{font-size:80%}ul,ol{list-style:none outside none}a{text-decoration:none}a:hover{text-decoration:none;outline:0;color:#57a900}a:active{text-decoration:none;outline:0}a:focus{outline:0}abbr[title],acronym[title]{border-bottom:1px dotted;cursor:help}q:before,q:after{content:""}mark{background:#ff0;color:#000}pre{white-space:pre;white-space:pre-wrap;word-wrap:break-word}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}legend{border:0;padding:0;white-space:normal;*margin-left:-7px}fieldset,iframe{border:0 none}img{border:0 none;vertical-align:middle;-ms-interpolation-mode:bicubic}button[disabled],input[disabled]{cursor:default}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}video::-webkit-media-controls-start-playback-button{display:none}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}table{border-collapse:collapse;border-spacing:0}strong{font-weight:normal}.dn{display:none!important}.db{display:block}.dib{display:inline-block;*display:inline;*zoom:1}.dib-fix{font-size:0}.fs12{font-size:12px!important}.fs14{font-size:14px!important}.fs16{font-size:16px!important}.fs18{font-size:18px!important}.fs20{font-size:20px!important}.tdu{text-decoration:underline}.lh-1{line-height:1}.tl{text-align:left}.tc{text-align:center}.tr{text-align:right}.fl{float:left;display:inline}.fr{float:right;display:inline}.pr{position:relative;*zoom:1}.pa{position:absolute}.pf{position:fixed}.ps{position:static}.vl-fix{height:100%;display:inline-block;vertical-align:middle}.vl-inline{display:inline-block;vertical-align:middle}.vl-block{display:inline-block;*display:inline;*zoom:1;vertical-align:middle}.m5{margin:5px}.m10{margin:10px}.m20{margin:20px}.m30{margin:30px}.mt5{margin-top:5px}.mt10{margin-top:10px}.mt20{margin-top:20px}.mt15{margin-top:15px}.mt30{margin-top:30px}.mt40{margin-top:40px}.mt50{margin-top:50px}.mr3{margin-right:3px}.mr5{margin-right:5px}.mr10{margin-right:10px}.mr20{margin-right:20px}.mr30{margin-right:30px}.mr50{margin-right:50px}.mb5{margin-bottom:5px}.mb10{margin-bottom:10px}.mb11{margin-bottom:11px}.mb15{margin-bottom:15px}.mb20{margin-bottom:20px}.mb30{margin-bottom:30px}.ml3{margin-left:3px}.ml5{margin-left:5px}.ml10{margin-left:10px}.ml20{margin-left:20px}.ml30{margin-left:30px}.p5{padding:5px}.p10{padding:10px}.p20{padding:20px}.p30{padding:30px}.pt5{padding-top:5px}.pt10{padding-top:10px}.pt20{padding-top:20px}.pt30{padding-top:30px}.pr5{padding-right:5px}.pr10{padding-right:10px}.pr20{padding-right:20px}.pr30{padding-right:30px}.pb5{padding-bottom:5px}.pb10{padding-bottom:10px}.pb20{padding-bottom:20px}.pb30{padding-bottom:30px}.pl5{padding-left:5px}.pl10{padding-left:10px}.pl20{padding-left:20px}.pl30{padding-left:30px}.pl50{padding-left:50px}.textOverflow{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:100%}.breakWord{word-wrap:break-word;word-break:break-all}.clearfix:before,.clearfix:after{content:"";display:table;font:0/0 a}.clearfix:after{clear:both}.clearfix{*zoom:1}.vm-dib{display:inline-block;vertical-align:middle}.flex-wrap{display:-webkit-box;display:-webkit-flex;display:flex}.flex-item{-webkit-box-flex:1;-webkit-flex:1;flex:1}.flex-vl{-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:auto}.block-level{width:100%!important;-webkit-box-sizing:border-box;box-sizing:border-box}.pw-video a{color:#aaa;cursor:pointer}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{color:#999}input:-moz-placeholder,textarea:-moz-placeholder{color:#999}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#999}input.input-common-disabled::-webkit-input-placeholder,textarea.input-common-disabled::-webkit-input-placeholder{color:#ccc}input.input-common-disabled:-ms-input-placeholder,textarea.input-common-disabled:-ms-input-placeholder{color:#ccc}input.input-common-disabled:-moz-placeholder,textarea.input-common-disabled:-moz-placeholder{color:#999}.infoColor{color:#999!important}.pw-video .voice-icon i,.pw-video .bottom-ad_voice i{background:url(//www.qiyipic.com/common/fix/pcWeb-img/icon-all.png) no-repeat;width:18px;height:14px;position:relative;display:inline-block;top:13px;cursor:pointer;left:5px}.pw-video .voice-no{background-position:0 0!important}.pw-video .voice-small{background-position:-25px 0!important;left:4px!important}.pw-video .voice-middle{background-position:-43px 0!important}.pw-video .voice-big{background-position:-65px 0!important}.pw-video .control-right li i,.pw-video .control-right_ad li i{background:url(//www.qiyipic.com/common/fix/pcWeb-img/icon-all.png) no-repeat;width:18px;height:17px;display:inline-block;position:relative;top:4px}.pw-video .control-right a .screen-exit{background:url(//www.qiyipic.com/common/fix/pcWeb-img/screenExit_icon.png) no-repeat}.pw-video .control-right_ad a .screen-exit{background-position:-34px -28px}.pw-video .control-right a:hover .screen-exit{background:url(//www.qiyipic.com/common/fix/pcWeb-img/screenExit_hicon.png) no-repeat}.pw-video .control-right_ad a:hover .screen-exit{background-position:0 -28px}.pw-video .control-right a .screen-all,.pw-video .control-right_ad a .screen-all{background-position:-65px -30px}.pw-video .control-right a:hover .screen-all,.pw-video .control-right_ad a:hover .screen-all{background-position:-94px -30px}.pw-video .control-right a .webPage_screen{background-position:-120px 0}.pw-video .control-right a:hover .webPage_screen{background-position:-145px 0}.pw-video .control-right a .webPage_screen-exit{background-position:-170px 0}.pw-video .control-right a:hover .webPage_screen-exit{background-position:-195px 0}.pw-video .control-right a .voice-no{height:20px;background-position:0 4px!important}.pw-video .control-right a:hover .voice-no{height:20px;background-position:0 -176px!important}.pw-video .control-right a .voice-small{height:20px;background-position:-26px 4px!important}.pw-video .control-right a:hover .voice-small{height:20px;background-position:-24px -176px!important}.pw-video .control-right a .voice-middle{height:20px;background-position:-50px 4px!important}.pw-video .control-right a:hover .voice-middle{height:20px;background-position:-43px -176px!important}.pw-video .control-right a .voice-big{height:20px;background-position:-73px 4px!important}.pw-video .control-right a:hover .voice-big{height:20px;background-position:-65px -176px!important}.pw-video .fast-play{border:20px dashed transparent;border-left:35px solid #ababab;display:inline-block;position:relative;margin-top:40px}.pw-video .fast-play:before{content:"";display:block;position:absolute;top:-20px;border:20px dashed transparent;border-left:35px solid #ababab}.pw-video .txtPlay_cont-long .txt-link i{background:url(//www.qiyipic.com/common/fix/pcWeb-img/icon-all.png) no-repeat;display:block;width:20px;height:15px;float:right;position:relative;top:15px}.pw-video .txtPlay_cont-long .txt-link .icon-arrowUp{background-position:-125px -28px}.pw-video .txtPlay_cont-long .txt-link .icon-arrowDown{background-position:-149px -28px}.pw-video .txtPlay_cont-long .txt-link:hover .icon-arrowUp{background-position:-170px -28px}.pw-video .txtPlay_cont-long .txt-link:hover .icon-arrowDown{background-position:-194px -28px}.pw-video .goback{background:url(//www.qiyipic.com/common/fix/pcWeb-img/icon-all.png) no-repeat;display:block;width:15px;height:30px;background-position:-220px -10px}.pw-video .vip-1080{background:url(//www.qiyipic.com/common/fix/pcWeb-img/icon-all.png) no-repeat;width:15px;height:15px;background-position:-95px 0;position:absolute;left:12px;top:15px}.pw-video .control-right li i.vip_1080p{background:url(//www.qiyipic.com/common/fix/pcWeb-img/icon-all.png) no-repeat;width:23px;height:12px;background-position:-90px -180px;position:absolute;right:16px;top:9px}.vip1080p_txt{position:absolute;left:16px}.pw-video .btn-video .play-loading{background:url(//www.qiyipic.com/common/fix/pcWeb-img/loading-two.gif) no-repeat;width:23px;height:23px;display:block;position:relative;left:20px;top:10px}.pw-video .btn-video .btn-replay{background:url(//www.qiyipic.com/common/fix/pcWeb-img/btn_replayIcon.png) no-repeat;width:15px;height:18px;display:block;position:relative;left:20px;top:11px}.pw-video .btn-video .btn-replay:hover{background:url(//www.qiyipic.com/common/fix/pcWeb-img/btn_replayIconH.png) no-repeat}.pw-video .openvip-bottom .vip-only_list i{background:url(//www.qiyipic.com/common/fix/pcWeb-img/icon-all.png) no-repeat;width:30px;height:30px;display:inline-block}.pw-video .openvip-bottom .vip-only_list .icon-vipvideo{background-position:0 -66px}.pw-video .openvip-bottom .vip-only_list .icon-vipad{background-position:-41px -66px}.pw-video .openvip-bottom .vip-only_list .icon-vipstatus{background-position:-90px -66px}.pw-video .openvip-bottom .vip-only_list .icon-vipfree{background-position:-130px -66px}.pw-video .error .error-warn .icon-error{background:url(//www.qiyipic.com/common/fix/pcWeb-img/icon-all.png) no-repeat;background-position:-60px -130px;width:35px;height:35px;display:inline-block}.video_advWrap{height:63px}.video_advTxt{width:28px;height:15px;border-radius:2px;background:#383838;color:#999;font-size:10px;text-align:center;line-height:14px;display:block}.pw-video .clarty a.video_advBox{width:104px;height:48px;overflow:hidden;display:inline-block;position:absolute;top:16px;left:7px}html{-webkit-overflow-scrolling:touch;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section,body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,fieldset,legend,button,input,textarea,form,th,td{margin:0;padding:0}article,aside,details,figcaption,figure,footer,header,hgroup,nav,section,summary{display:block}audio,canvas,video{display:inline-block;*display:inline;*zoom:1}button,input,select,textarea{font-family:inherit;font-size:100%;vertical-align:baseline;*vertical-align:middle}button,input[type="button"],input[type="submit"],input[type="reset"]{-webkit-appearance:button;cursor:pointer;*overflow:visible}button::-moz-focus-inner,button::-moz-focus-outer,input::-moz-focus-inner,input::-moz-focus-outer{border:0 none;padding:0;margin:0}textarea{overflow:auto;vertical-align:top;resize:vertical}.pw-video button,.pw-video input,.pw-video select,.pw-video textarea{font:12px/1.5 Tahoma,Helvetica,Arial,"\\5FAE\\8F6F\\96C5\\9ED1",sans-serif}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}address,cite,dfn,em,var,i{font-style:normal}code,kbd,pre,samp,tt{font-family:"Courier New",monospace,serif}small{font-size:80%}ul,ol{list-style:none outside none}a{text-decoration:none}a:hover{text-decoration:none;outline:0;color:#57a900}a:active{text-decoration:none;outline:0}a:focus{outline:0}abbr[title],acronym[title]{border-bottom:1px dotted;cursor:help}q:before,q:after{content:""}mark{background:#ff0;color:#000}pre{white-space:pre;white-space:pre-wrap;word-wrap:break-word}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}legend{border:0;padding:0;white-space:normal;*margin-left:-7px}fieldset,iframe{border:0 none}img{border:0 none;vertical-align:middle;-ms-interpolation-mode:bicubic}button[disabled],input[disabled]{cursor:default}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}video::-webkit-media-controls-start-playback-button{display:none}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}table{border-collapse:collapse;border-spacing:0}strong{font-weight:normal}@keyframes show{0%{opacity:.1}100%{opacity:1}}@-webkit-keyframes show{0%{opacity:.1}100%{opacity:1}}.mobile-process .process_btn{opacity:1;width:15px;height:15px}.pw-video .bottom .process_btn,.pw-video .small_bottom .process_btn{transition:opacity .2s;-webkit-transition:opacity .2s;-ms-transition:opacity .2s;-moz-transition:opacity .2s;-o-transition:opacity .2s}.pw-video .bottom .process-response:hover .process_btn,.pw-video .small_bottom .process-response:hover .process_btn{opacity:1;transform:matrix(1,0,0,1,0,0);-webkit-transform:matrix(1,0,0,1,0,0);-moz-transform:matrix(1,0,0,1,0,0);-ms-transform:matrix(1,0,0,1,0,0);-o-transform:matrix(1,0,0,1,0,0)}.play-xuanji,.setting,.clarty{animation:show .2s;-webkit-animation:show .2s;-moz-animation:show .2s;-ms-animation:show .2s;-o-animation:show .2s}.pw-video .bottom-hide{animation:translatedown .2s forwards;-webkit-animation:translatedown .2s forwards;-moz-animation:translatedown .2s forwards;-ms-animation:translatedown .2s forwards;-o-animation:translatedown .2s forwards}@keyframes translatedown{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}100%{transform:translateY(56px);-webkit-transform:translateY(56px);-moz-transform:translateY(56px);-ms-transform:translateY(56px);-o-transform:translateY(56px)}}@-webkit-keyframes translatedown{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}100%{transform:translateY(56px);-webkit-transform:translateY(56px);-moz-transform:translateY(56px);-ms-transform:translateY(56px);-o-transform:translateY(56px)}}@-moz-keyframes translatedown{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}100%{transform:translateY(56px);-webkit-transform:translateY(56px);-moz-transform:translateY(56px);-ms-transform:translateY(56px);-o-transform:translateY(56px)}}@-o-keyframes translatedown{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}100%{transform:translateY(56px);-webkit-transform:translateY(56px);-moz-transform:translateY(56px);-ms-transform:translateY(56px);-o-transform:translateY(56px)}}@keyframes hide{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes hide{0%{opacity:1}100%{opacity:0}}@-moz-keyframes hide{0%{opacity:1}100%{opacity:0}}@-o-keyframes hide{0%{opacity:1}100%{opacity:0}}@keyframes changeSmall{0%{transform:scale(1);opacity:1}50%{transform:scale(0.5,0.5)}100%{transform:scale(0);opacity:0}}@keyframes changeBig{0%{transform:scale(0);opacity:0;display:block}50%{transform:scale(0.5,0.5)}100%{transform:scale(1);opacity:1;display:block}}@charset "utf-8";@font-face{font-family:"ds-digital";src:url(//static.qiyi.com/ext/common/pcWeb_fontFace/ds-digi-webfont.eot);src:url(//static.qiyi.com/ext/common/pcWeb_fontFace/ds-digi-webfont.eot?#iefix) format("embedded-opentype"),url(//static.qiyi.com/ext/common/pcWeb_fontFace/ds-digi-webfont.woff) format("woff"),url(//static.qiyi.com/ext/common/pcWeb_fontFace/ds-digi-webfont.ttf) format("truetype"),url(//static.qiyi.com/ext/common/pcWeb_fontFace/ds-digi-webfont.svg#iconfont) format("svg")}.pw-video .btn-play{border:10px dashed transparent;border-left:15px solid #ababab;display:inline-block;left:20px;top:10px;position:absolute;outline:0}.pw-video .btn-pause{display:inline-block;position:absolute;left:20px;top:13px;height:15px;width:2px;background-color:#ababab}.pw-video .btn-pause:before{content:"";display:block;position:absolute;background-color:#ababab;height:15px;width:2px;left:10px}.pw-video .btn-video:hover .btn-play{border-left-color:#6cc900}.pw-video .btn-video:hover .btn-pause,.pw-video .btn-video:hover .btn-pause:before{background-color:#6cc900}.pw-video .bottom-ad_play:hover .btn-play{border-left-color:#6cc900}.pw-video .bottom-ad_play:hover .btn-pause,.pw-video .bottom-ad_play:hover .btn-pause:before{background-color:#6cc900}.pw-video .voice-icon i,.pw-video .bottom-ad_voice i{background:url(//www.qiyipic.com/common/fix/pcWeb-img/icon-all.png) no-repeat;width:18px;height:14px;position:relative;display:inline-block;top:13px;cursor:pointer;left:5px}.pw-video .voice-no{background-position:0 0!important}.pw-video .voice-small{background-position:-25px 0!important;left:4px!important}.pw-video .voice-middle{background-position:-43px 0!important}.pw-video .voice-big{background-position:-65px 0!important}.pw-video .ad{position:absolute;top:0;left:0;z-index:100;width:100%;height:100%}.pw-video .ad-time{position:absolute;z-index:100;background:rgba(26,26,26,.7);border-radius:20px;width:130px;height:30px;right:20px;top:20px;line-height:30px;text-align:center}.pw-video .ad-time span{font:18px/1.5 Regular,Helvetica,Arial,"\\5FAE\\8F6F\\96C5\\9ED1",sans-serif;display:inline-block;position:relative;top:2px;color:#fff}.pw-small-video .ad-time .ad-vip{margin-left:3px;position:relative;top:-2px;font-size:12px}.pw-video .ad-time .ad-vip{margin-left:8px;color:#fff;font-size:14px}.pw-video .ad-time .ad-vip:hover{color:#57a900}.pw-video .bottom-ad{position:absolute;bottom:0;height:56px;width:100%;z-index:100}.pw-video .bottom-public .know-detail{padding:9px 15px;border-radius:30px;background:rgba(26,26,26,.8);display:block;float:right;color:#fff;margin-right:72px;line-height:18px;font-size:14px}.pw-small-video .bottom-public .know-detail{padding:6px 10px;margin-right:49px}.pw-video .bottom-ad .know-detail:hover{color:#57a900}.pw-video .bottom-ad .bottom-ad_play,.pw-video .bottom-ad .bottom-ad_voice{background:rgba(26,26,26,.8);width:35px;height:35px;border-radius:50%;position:absolute}.pw-video .bottom-ad .bottom-ad_play{left:20px}.pw-video .bottom-ad .bottom-ad_voice{left:74px}.pw-video .bottom-ad .bottom-ad_play .btn-play{left:12px;top:8px}.pw-video .bottom-ad .bottom-ad_play .btn-pause{left:12px;top:10px}.pw-video .ad-screen i{background:url(//www.qiyipic.com/common/fix/pcWeb-img/icon-all.png) no-repeat;width:20px;height:20px;display:inline-block;position:relative;top:7px;left:9px}.pw-small-video .ad-screen i{top:4px;left:6px}.pw-video .voice-icon i,.pw-video .bottom-public_voice i{background:url(//www.qiyipic.com/common/fix/pcWeb-img/icon-all.png) no-repeat;width:18px;height:14px;position:relative;display:inline-block;top:13px;cursor:pointer;left:5px}.pw-video .public-screen i{background:url(//www.qiyipic.com/common/fix/pcWeb-img/icon-all.png) no-repeat;width:20px;height:20px;display:inline-block;position:relative;top:7px;left:9px}.pw-small-video .public-screen i{top:4px;left:6px}.pw-video .bottom-ad .bottom-ad_voice i{left:10px;top:11px}.pw-video .bottom-ad .bottom-ad_play:hover .btn-stop,.pw-video .bottom-ad .bottom-ad_play:hover .btn-stop:before{background-color:#57a900}.pw-video .bottom-ad .bottom-ad_play:hover .btn-pasue{border-left-color:#57a900}.pw-video .bottom-ad .ad-screen{background:rgba(26,26,26,.8);width:35px;height:35px;border-radius:50%;position:absolute;right:20px}.pw-video .ad-screen .screen-small{background-position:-34px -28px}.pw-video .public-screen .screen-small{background-position:-34px -28px}.pw-video .ad-screen:hover .screen-small{background-position:0 -28px}.pw-video .ad-screen .screen-all{background-position:-65px -28px}.pw-video .public-screen .screen-all{background-position:-65px -28px}.pw-video .ad-screen:hover .screen-all{background-position:-94px -28px}.pw-small-video .ad-time{width:100px;height:25px;right:10px;line-height:25px;top:10px}.pw-small-video .ad-time span{top:0}.pw-small-video .bottom-ad .bottom-ad_play,.pw-small-video .bottom-ad .bottom-ad_voice{height:30px;width:30px}.pw-small-video .bottom-ad{height:40px}.pw-small-video .bottom-ad .bottom-ad_voice{left:49px}.pw-small-video .bottom-ad .ad-screen{width:30px;height:30px;right:10px}.pw-small-video .bottom-ad .bottom-ad_voice i{left:7px;top:8px}.pw-small-video .bottom-ad .bottom-ad_play .btn-pause{left:9px;top:7px}.pw-small-video .bottom-ad .bottom-ad_play .btn-play{left:11px;top:7px}.pw-video .bottom-public_play:hover .btn-play{border-left-color:#6cc900}.pw-video .bottom-public_play:hover .btn-pause,.pw-video .bottom-public_play:hover .btn-pause:before{background-color:#6cc900}.pw-video .public{position:absolute;top:0;left:0;z-index:100;width:100%;height:100%}.pw-video .public-time{position:absolute;z-index:100;background:rgba(26,26,26,.7);border-radius:20px;width:130px;height:30px;right:20px;top:20px;line-height:30px;text-align:center}.pw-video .public-time span{font:18px/1.5 Regular,Helvetica,Arial,"\\5FAE\\8F6F\\96C5\\9ED1",sans-serif;display:inline-block;color:#fff}.pw-video .public-time .public-vip{margin-left:8px;color:#fff;font-size:14px}.pw-small-video .public-time .public-vip{margin-left:3px;position:relative;top:-2px;font-size:12px}.pw-video .public-time .public-vip:hover{color:#57a900}.pw-video .bottom-public{position:absolute;bottom:0;height:56px;width:100%;z-index:100}.pw-video .bottom-public .know-detail:hover{color:#57a900}.pw-video .bottom-public .bottom-public_play,.pw-video .bottom-public .bottom-public_voice{background:rgba(26,26,26,.8);width:35px;height:35px;border-radius:50%;position:absolute;text-align:left}.pw-video .bottom-public .bottom-public_play{left:20px}.pw-video .bottom-public .bottom-public_voice{left:74px;text-align:left}.pw-video .bottom-public .bottom-public_play .btn-play{left:12px;top:8px;transition:none}.pw-video .bottom-public .bottom-public_play .btn-pause{left:12px;top:10px;opacity:1;transform:scale(1)}.pw-video .bottom-public .bottom-public_play .btn-pause:before{opacity:1;transform:scale(1)}.pw-video .bottom-public .bottom-public_voice i.voice-middle{left:3px;top:11px}.pw-video .bottom-public .bottom-public_voice i.voice-no{left:10px;top:11px}.pw-video .bottom-public .bottom-public_play:hover .btn-stop,.pw-video .bottom-public .bottom-public_play:hover .btn-stop:before{background-color:#57a900}.pw-video .bottom-public .bottom-public_play:hover .btn-pasue{border-left-color:#57a900}.pw-video .bottom-public .public-screen{background:rgba(26,26,26,.8);width:35px;height:35px;border-radius:50%;position:absolute;right:20px;text-align:left}.pw-video .public-screen:hover .screen-small{background-position:0 -28px}.pw-video .public-screen:hover .screen-all{background-position:-94px -28px}.pw-small-video .public-time{width:100px;height:25px;right:10px;line-height:25px;top:10px}.pw-small-video .public-time span{top:0}.pw-small-video .bottom-public .bottom-public_play{left:10px}.pw-small-video .bottom-public .bottom-public_play,.pw-small-video .bottom-public .bottom-public_voice{height:30px;width:30px}.pw-small-video .bottom-public{height:40px}.pw-small-video .bottom-public .bottom-public_voice{left:49px}.pw-small-video .bottom-public .public-screen{width:30px;height:30px;right:10px}.pw-small-video .bottom-public .bottom-public_voice i{left:7px;top:8px}.pw-small-video .bottom-public .bottom-public_play .btn-pause{left:9px;top:7px}.pw-small-video .bottom-public .bottom-public_play .btn-play{left:11px;top:7px}.pw-video{background-color:#000;position:relative;display:inline-block;height:100%;width:100%;min-width:320px;overflow:hidden;z-index:0}.webfullscreen{position:fixed;left:0;top:0;z-index:4201}.pw-video canvas{width:100%;height:100%}.pw-video .player{position:relative}.pw-video .top{position:absolute;top:0;color:#fff;font-size:16px;left:0;right:0;padding:20px 0 20px 20px;background-image:-webkit-linear-gradient(bottom,rgba(26,26,26,0) 0,rgba(26,26,26,1) 125%);background-image:-moz-linear-gradient(bottom,rgba(26,26,26,0) 0,rgba(26,26,26,1) 125%);background-image:-o-linear-gradient(bottom,rgba(26,26,26,0) 0,rgba(26,26,26,1) 125%);background-image:linear-gradient(to top,rgba(26,26,26,0) 0,rgba(26,26,26,1) 125%)}.skip a{color:#fff;display:inline-block}.pw-video .top a{display:inline-block;position:relative;top:5px}.pw-video .top h3{display:inline-block;margin-left:10px;font-size:18px}.process_hidden .control{display:none}.pw-video .process-response{position:absolute;height:16px;width:100%;cursor:pointer;transition:height .2s;bottom:40px;z-index:5}.pw-video .process_hidden .process-response{bottom:0;height:16px}.pw-video .process_btn{background-color:#fff;border-radius:50%;position:absolute;z-index:5;cursor:pointer;display:block;height:16px;width:16px;opacity:0;box-shadow:-1px 0 5px #626262;-webkit-box-shadow:-1px 0 5px #626262;-moz-box-shadow:-1px 0 5px #626262;-o-box-shadow:-1px 0 5px #626262}.pw-small-video .bottom .process_btn{height:8px;width:8px;top:-2px}.pw-video .process_hidden .process-response:hover .process .process_btn{opacity:1}.pw-video .bottom{position:absolute;left:0;bottom:0;width:100%;z-index:99}.pw-video .process-response:hover{height:16px}.pw-video .process{position:absolute;width:100%;bottom:0;background:rgba(0,0,0,.5);height:2px;cursor:pointer;transition:height .2s,opacity .2s}.pw-video .process_load{background:#828282;height:2px;position:absolute;left:0;bottom:0;cursor:pointer;transition:height .2s}.pw-video .process_play{background-image:linear-gradient(to right,#57a900,#97ff00 80%,#dee2da);background-image:-webkit-linear-gradient(left,#57a900,#97ff00 80%,#dee2da);background-image:-moz-linear-gradient(left,#57a900,#97ff00 80%,#dee2da);background-image:-o-linear-gradient(left,#57a900,#97ff00 80%,#dee2da);height:2px;position:absolute;left:0;bottom:0;cursor:pointer;transition:height .2s}.pw-video .control{width:100%;height:40px;background:rgba(26,26,26,.8);position:relative;z-index:120}.pw-video .control-left{float:left;height:40px;width:65%}.pw-video .pasue{position:relative;height:40px;width:48px;float:left}.pw-video .forward{position:relative;height:40px;width:38px;float:left}.pw-video .btn-video{display:block;height:40px;position:relative;outline:0}.btn-play_changeSmall{animation:changeSmall .5s linear}.btn-pause_changeBig{animation:changeBig .5s linear}.pw-video .btn-pasue{border:10px dashed transparent;border-left:15px solid #ababab;display:inline-block;position:relative;left:20px;top:10px}.pw-video .btn-stop{display:inline-block;position:relative;left:20px;top:13px;height:15px;width:2px;background-color:#ababab}.pw-video .btn-stop:before{content:"";display:block;position:absolute;background-color:#ababab;height:15px;width:2px;left:10px}.pw-video .btn-video:hover .btn-pasue{border-left-color:#6cc900}.pw-video .btn-video:hover .btn-stop,.pw-video .btn-video:hover .btn-stop:before{background-color:#6cc900}.pw-video .btn-forward{border:8px dashed transparent;border-left:13px solid #ababab;display:inline-block;position:relative;left:13px;top:12px}.pw-video .btn-forward:before{content:"";display:block;height:16px;width:2px;position:absolute;right:-1px;top:-8px;background:#ababab}.pw-video .btn-forward:hover{border-left-color:#6cc900}.pw-video .btn-forward:hover:before{background:#6cc900}.pw-video .time{position:relative;line-height:40px;width:128px;text-align:left;float:left;font-size:14px;padding-left:13px}.pw-video .time-recent{color:#f4f4f4}.pw-video .time .time-all{color:#aaa}.pw-video .voice-icon{position:relative;width:30px;float:left;height:40px;text-align:center}.pw-video .voice-des{position:relative;width:100px;float:left;height:40px;text-align:center}.pw-video .voice-process{width:80px;height:20px;display:inline-block;position:relative;top:11px;cursor:pointer}.pw-video .voice_play{height:2px;background:#57a900;position:absolute;top:8px;z-index:5}.pw-video .voice_btn{background-color:#fff;height:9px;width:9px;border-radius:50%;position:absolute;top:5px;z-index:5;cursor:pointer}.pw-video .voice_bground{width:80px;height:2px;background:#5e5755;position:absolute;top:8px}.video_rBox{position:relative;padding:18px 0 0}.video_rBox .voice-des{position:absolute;bottom:29px;left:-10px;z-index:100;width:34px;height:108px;background:rgba(26,26,26,.8);border:1px solid #1c1c1c}.video_rBox .voice-des .voice_box{height:80px;width:10px;display:inline-block;position:absolute;left:12px;top:14px;cursor:pointer}.video_rBox .voice-des .voice_box .voice_playIcon{width:2px;background:#57a900;position:absolute;left:4px;bottom:0;z-index:5}.video_rBox .voice-des .voice_box .voice_btns{background-color:#fff;height:10px;width:10px;border-radius:50%;position:absolute;bottom:5px;z-index:5;cursor:pointer}.video_rBox .voice-des .voice_box .voice_bg{height:80px;width:2px;background:#5e5755;position:absolute;left:4px}.pw-video .control-right{float:right;height:40px;width:33%;line-height:40px;padding-right:7px}.playEnd_ul li{width:160px;height:90px;margin-left:3px;margin-top:3px;float:left;overflow:hidden}.pw-video .control-right li{width:43px;float:right;text-align:center;position:relative}.skip a:hover,.skip a.selected{color:#6cc900}.pw-video .control-right li a{cursor:pointer;font-size:12px}.stream_txt{display:block;padding-top:5px;margin-top:-5px}.pw-video .play-btns{background:rgba(26,26,26,.8);width:240px;height:170px;position:absolute;left:47%;top:44%;margin-left:-120px;margin-top:-85px;text-align:center}.pw-video .fast-time{margin-top:10px;font-size:20px}.pw-video .fast-recent{color:#fff}.pw-video .fast-process{width:180px;height:5px;background-color:#5e5755;margin:12px auto}.pw-video .fast-process .fast-now{height:5px;background:#57a900}.pw-video .selected,.pw-video .selected span{color:#6cc900!important}.pw-video .clarty .disabled{color:#666;cursor:default}.pw-video .clarty .disabled:hover{color:#666;cursor:default}.pw-video .stream{width:240px;height:35px;background:rgba(26,26,26,.8);position:absolute;bottom:2px;transition:bottom .2s}.pw-video .stream h3{font-size:12px;line-height:35px;margin-left:20px;display:inline-block;color:#fff}.pw-video .stream .stream-change{color:#57a900}.pw-video .stream .stream-info{color:#fff}.pw-video .stream .stream-exit{width:9px;height:9px;display:block;float:right;margin-right:15px;margin-top:12px;font-size:0;background:url(//www.qiyipic.com/common/fix/pcWeb-img/icon-all.png) no-repeat -120px -180px}.pw-video .caton .stream-exit{width:9px;height:9px;display:block;float:right;margin-right:15px;margin-top:12px;font-size:0;background:url(//www.qiyipic.com/common/fix/pcWeb-img/icon-all.png) no-repeat -120px -180px}.pw-video .stream .stream-exit:hover{background-position:-140px -180px}.pw-video .video-loading{background-color:#232323;width:100%;height:100%;position:absolute;top:0;left:0;z-index:88}.pw-video .video-loading .video-loading_info{position:absolute;top:44%;left:50%;margin-left:-93px}.pw-video .video-loading .video-loading_btn{background:url(//www.qiyipic.com/common/fix/pcWeb-img/loading-one.gif) no-repeat;width:25px;height:25px;display:inline-block}.pw-video .video-loading span{position:relative;top:-7px;margin-left:5px;color:#fff;font-size:14px}.videoLogo_loading{background-color:#000;width:100%;height:100%;position:absolute;top:0;left:0;z-index:88}.logoLoading_box{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);text-align:center;font-size:0;width:300px}.logoVideo{width:171px;height:78px;background:url(//www.qiyipic.com/common/fix/pcWeb-img/yxpz_loading.png) no-repeat;display:inline-block;margin-bottom:20px}.logoVideo_line{width:270px;height:2px;background:url(//www.qiyipic.com/common/fix/pcWeb-img/iqiyi_loading_line.gif) no-repeat;display:inline-block}.logoVideoft{width:171px;height:78px;background:url(//www.qiyipic.com/common/fix/pcWeb-img/yxpzft_loading.png) no-repeat;display:inline-block;margin-bottom:20px}.logoLoading_vip .logoVideo{width:225px;height:71px;background:url(//www.qiyipic.com/common/fix/pcWeb-img/vip_loading.png) no-repeat;display:inline-block;margin-bottom:20px}.logoLoading_vip .logoVideo_line{width:270px;height:2px;background:url(//www.qiyipic.com/common/fix/pcWeb-img/VIP_loading_line.gif) no-repeat;display:inline-block}.logoLoading_vipft .logoVideo{width:225px;height:71px;background:url(//www.qiyipic.com/common/fix/pcWeb-img/vipft_loading.png) no-repeat;display:inline-block;margin-bottom:20px}.logoLoading_vipft .logoVideo_line{width:270px;height:2px;background:url(//www.qiyipic.com/common/fix/pcWeb-img/VIP_loading_line.gif) no-repeat;display:inline-block}.logoLoading_cp .logoVideo{width:126px;height:106px;background:url(//www.qiyipic.com/common/fix/pcWeb-img/aqycp_loading.png) no-repeat;display:inline-block;margin-bottom:20px}.logoLoading_cp .logoVideo_line{width:270px;height:2px;background:url(//www.qiyipic.com/common/fix/pcWeb-img/iqiyi_loading_line.gif) no-repeat;display:inline-block}.logoLoading_cpft .logoVideo{width:126px;height:106px;background:url(//www.qiyipic.com/common/fix/pcWeb-img/aqycpft_loading.png) no-repeat;display:inline-block;margin-bottom:20px}.logoLoading_cpft .logoVideo_line{width:270px;height:2px;background:url(//www.qiyipic.com/common/fix/pcWeb-img/iqiyi_loading_line.gif) no-repeat;display:inline-block}.logoLoading_db .logoVideo{width:270px;height:89px;background:url(//www.qiyipic.com/common/fix/pcWeb-img/qwdb_loading.gif) no-repeat;display:inline-block}.logoLoading_db .logoVideo_line{display:none}.logoLoading_dbft .logoVideo{width:270px;height:89px;background:url(//www.qiyipic.com/common/fix/pcWeb-img/qwdbft_loading.gif) no-repeat;display:inline-block}.logoLoading_dbft .logoVideo_line{display:none}.pw-video .openvip{background-color:#232323;width:100%;height:100%;position:absolute;top:0;left:0;z-index:100}.pw-video .openvip-top{width:350px;margin:0 auto;position:relative;margin-top:13%}.pw-video .openvip-top .icon-openwarn{display:inline-block;background:url(//www.qiyipic.com/common/fix/pcWeb-img/icon-all.png) no-repeat;height:50px;width:50px;background-position:2px -117px;position:absolute;left:-60px}.pw-video .openvip-top p{font-size:16px;color:#fff}.pw-video .openvip-des{position:relative;margin-top:20px}.pw-video .openvip-des .openvip-link{background-image:linear-gradient(to top,#f3cc9f,#ce9f68);background-image:-webkit-linear-gradient(top,#f3cc9f,#ce9f68);background-image:-moz-linear-gradient(top,#f3cc9f,#ce9f68);background-image:-o-linear-gradient(top,#f3cc9f,#ce9f68);color:#733613;font-size:16px;padding:5px 15px;border-radius:5px}.pw-video .openvip-des .openvip-link:hover{background-image:linear-gradient(to top,#ffdaad,#e0b179);background-image:-webkit-linear-gradient(top,#ffdaad,#e0b179);background-image:-moz-linear-gradient(top,#ffdaad,#e0b179);background-image:-o-linear-gradient(top,#ffdaad,#e0b179)}.pw-video .openvip-des .vip-ship{background:#ff5f02;border-radius:10px;border-bottom-left-radius:0;color:#fff;display:block;position:absolute;text-align:center;width:100px;height:18px;line-height:18px;top:-13px;left:155px}.pw-video .openvip-des .vip-activity{display:block;color:#c5955d;position:relative;top:5px;left:90px}.pw-video .openvip-bottom{width:350px;margin:20px auto 0;position:relative}.pw-video .openvip-bottom h3{color:#eac98f;font-size:16px;border-bottom:1px dotted #454545;width:210px;line-height:45px}.pw-video .openvip-bottom .vip-only_list{position:relative;height:200px;width:210px;margin-top:25px}.pw-video .openvip-bottom .vip-only_list li{width:50%;float:left;margin-bottom:5px}.pw-video .openvip-bottom .vip-only_list span{color:#fff;position:relative;top:-9px}.pw-video .vip-only{float:left}.pw-video .vip-weixin{display:inline-block;margin-left:10px;margin-top:13px}.pw-video .vip-weixin p{text-align:center}.pw-video .vip-weixin .vip-sao{color:#c5955d;margin-top:5px;margin-bottom:5px}.pw-video .error{background-color:#232323;width:100%;height:100%;position:absolute;top:0;left:0;z-index:100}.pw-video .error .error-warn{position:absolute;top:40%;left:50%;margin-left:-154px}.pw-video .error .error-warn span{color:#fff;font-size:14px;position:relative;top:-12px;margin-left:10px;display:inline-block}.pw-video .small-screen .openvip-top{width:210px;left:50%;margin-left:-90px}.pw-video .small-screen .openvip-top p{font-size:12px}.pw-video .small-screen .openvip-des .openvip-link{font-size:12px}.pw-video .small-screen .openvip-top .icon-openwarn{height:25px;width:25px;background-position:0 -58px;left:-30px;background-size:128px 83px}.pw-video .small-screen .openvip-des{margin-top:10px}.pw-video .small-screen .error-warn{width:210px;margin-left:-105px}.pw-video .small-screen .error-warn span{width:160px;font-size:12px;top:-4px}.pw-small-video .bottom{height:35px;position:absolute;left:0;bottom:0;width:100%;z-index:99}.pw-small-video .bottom .process-response{bottom:8px;width:225px;left:45px}.mobile-process .process{transition:none}.pw-small-video .bottom .process{position:absolute;top:6px;z-index:99;height:3px}.pw-small-video .bottom .process_load{height:3px}.pw-small-video .bottom .process_play{height:3px}.pw-small-video .bottom .control-left{width:20%}.pw-small-video .control{height:35px}.pw-small-video .btn-video{height:35px}.pw-small-video .btn-play{border:8px dashed transparent;border-left:10px solid #ababab;left:10px}.pw-small-video .control-right{height:35px}.pw-small-video .control-right li i,.pw-small-video .control-right_ad li i{right:-10px;top:2px}.pw-small-video .btn-pause{height:12px;left:10px;top:11px}.pw-small-video .btn-pause:before{height:12px}.pw-small-video .btn-video .play-loading{left:9px;top:8px}.pw-video .bottom .mobile-process .process{height:2px;z-index:99;opacity:1}.pw-video .bottom .process-response:hover .process,.pw-video .process_hidden .process-response:hover .process{height:16px;z-index:99;opacity:1}.pw-video .bottom .mobile-process .process .process_load{height:2px}.pw-video .bottom .process-response:hover .process .process_load,.pw-video .process_hidden .process-response:hover .process .process_load{height:16px}.pw-video .mobile-process .process_play{transition:none;height:16px}.pw-video .bottom .mobile-process .process .process_play{height:2px}.pw-video .bottom .process-response:hover .process .process_play,.pw-video .process_hidden .process-response:hover .process .process_play{height:16px}.pw-video-screen{position:fixed;top:0;left:0;right:0;z-index:999999;width:100%;height:100%}.pw-video-screen .player{height:100%;display:block;margin:0 auto}:fullscreen{position:fixed!important;top:0;right:0;bottom:0;left:0;margin:0;box-sizing:border-box;object-fit:contain}:-webkit-full-screen{position:fixed!important;top:0;right:0;bottom:0;left:0;margin:0;box-sizing:border-box;object-fit:contain;background-color:#000;z-index:2147483647}:-webkit-full-screen-ancestor:not(iframe){z-index:auto!important;position:static!important;opacity:1!important;-webkit-transform:none!important;-webkit-mask:none!important;clip:none!important;-webkit-filter:none!important;-webkit-transition:none!important;-webkit-box-reflect:none!important;-webkit-perspective:none!important;-webkit-transform-style:flat!important}:root:-webkit-full-screen-ancestor,:root:-webkit-full-screen-document:not(:-webkit-full-screen){overflow:hidden!important}video:-webkit-full-screen,audio:-webkit-full-screen{background-color:transparent!important;position:static!important;margin:0!important;height:100%!important;width:100%!important;-webkit-box-flex:1!important;display:block!important}iframe:-webkit-full-screen{margin:0!important;padding:0!important;border:0!important;position:fixed!important;height:100%!important;width:100%!important;left:0!important;top:0!important}.video-play{background:url(//pic6.qiyipic.com/common/20160601/play-btn.png) no-repeat;width:90px;height:90px;display:block;position:absolute;top:50%;background-size:90px;left:50%;margin-left:-45px;margin-top:-45px}.pw-video .panoramic-btn{position:absolute;top:10px;left:10px;width:54px;height:54px;background:url(//pic0.qiyipic.com/common/20160613/pcWeb.png) no-repeat;font-size:0}.pw-video .panoramic-btn .panoramic-btn-top,.pw-video .panoramic-btn .panoramic-btn-bottom{display:inline-block;width:27px;height:29px;position:absolute;font-size:14px;transform:rotate(45deg);-webkit-transform:rotate(45deg)}.pw-video .panoramic-btn .panoramic-btn-left,.pw-video .panoramic-btn .panoramic-btn-right{display:inline-block;height:27px;width:29px;position:absolute;font-size:14px;transform:rotate(45deg);-webkit-transform:rotate(45deg)}.pw-video .panoramic-btn .panoramic-btn-top{left:12px;top:-6px}.pw-video .panoramic-btn .panoramic-btn-bottom{left:16px;bottom:-5px}.pw-video .panoramic-btn .panoramic-btn-left{left:-5px;top:15px}.pw-video .panoramic-btn .panoramic-btn-right{right:-5px;top:14px}.pw-video .panoramic-btn .panoramic-btn-top:hover{background:url(//pic6.qiyipic.com/common/20160628/hover.png) no-repeat;transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg)}.pw-video .panoramic-btn .panoramic-btn-bottom:hover{background:url(//pic6.qiyipic.com/common/20160628/hover.png) no-repeat;transform:rotate(221deg);-webkit-transform:rotate(221deg);-ms-transform:rotate(221deg);-o-transform:rotate(221deg)}.pw-video .panoramic-btn .panoramic-btn-left:hover{background:url(//pic6.qiyipic.com/common/20160628/hover.png) no-repeat;transform:rotate(-52deg);-webkit-transform:rotate(-52deg);-ms-transform:rotate(-52deg);-o-transform:rotate(-52deg)}.pw-video .panoramic-btn .panoramic-btn-right:hover{background:url(//pic6.qiyipic.com/common/20160628/hover.png) no-repeat;transform:rotate(135deg);-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);-o-transform:rotate(135deg)}.play_imgBox{position:absolute}.play_imgWrap{width:164px;background:#000;position:absolute;bottom:0;left:-82px}.play_imgBg{width:160px;height:90px;margin-top:2px;margin-left:2px}.play_time{width:160px;text-align:center;line-height:24px;color:#fff}.skip{background:rgba(26,26,26,.8);height:56px;width:120px;position:absolute;bottom:16px;font-size:12px;color:#fff;text-align:center}.skip_title{padding-top:7px;padding-bottom:3px}.skip_yBtn{margin-right:19px}.skip_line{width:1px;height:16px;background:#fff;position:absolute;bottom:0;z-index:10;opacity:0}.process-response:hover .skip_line{opacity:1;transition:opacity .2s}.skip_dots{padding:20px 0 0;width:6px;height:6px;position:absolute;bottom:0;z-index:99}.skip_dots:before{content:"";width:6px;height:6px;border-radius:50%;background:#fff;position:absolute;bottom:5px;z-index:10;opacity:0}.process-response:hover .skip_dots:before{opacity:1;transition:opacity .2s}.top_rightTime{font-family:ds-digital;position:absolute;top:25px;right:30px;font-size:20px;color:#fff}.client_down{width:210px;height:75px;position:absolute;right:9px;bottom:64px}.client_down .inner{width:210px;height:75px;position:relative}.pcs_bgBox{width:141px;height:75px;background:url(//www.qiyipic.com/common/fix/pcWeb-img/pca_bgL0608.png) no-repeat;position:absolute;left:0;top:0}.client_downBtn{width:69px;height:75px;font-size:0;position:absolute;right:0;top:0;background:url(//www.qiyipic.com/common/fix/pcWeb-img/pca_bgR0608_h.png) no-repeat}.client_downBtn:hover{background:url(//www.qiyipic.com/common/fix/pcWeb-img/pca_bgR0608.png) no-repeat}.client_down a.closeBtn{width:19px;height:19px;display:block;position:absolute;right:0;top:-22px;z-index:10;background:url(//www.qiyipic.com/common/fix/pcWeb-img/pca_closeBtn.png) no-repeat}.client_down a.closeBtn:hover{background:url(//www.qiyipic.com/common/fix/pcWeb-img/pca_closeBtnH.png) no-repeat}.play_failed{background:#232323;position:absolute;top:0;left:0;right:0;bottom:0;z-index:200}.play_failedInner{text-align:center;width:360px;height:292px;position:absolute;top:50%;margin-top:-146px;left:50%;margin-left:-180px}.failed_icon{width:109px;height:106px;background:url(//www.qiyipic.com/common/fix/pcWeb-img/play_failed.png) no-repeat;display:inline-block;margin-bottom:20px}.failed_title{font-size:18px;color:#fff;margin-bottom:10px}.failed_txt{font-size:14px;color:#aaa;margin-bottom:15px}.failed_downBtn{width:176px;height:36px;line-height:36px;text-align:center;background:#5aa700;border-radius:3px;display:inline-block;margin-bottom:20px}.pw-video a.failed_downBtn{font-size:16px;color:#fff}.failed_downBtn:hover{background:#63b700}.downIcon{width:20px;height:20px;display:inline-block;background:url(//www.qiyipic.com/common/fix/pcWeb-img/downBtn.png) no-repeat;vertical-align:-4px;margin-left:10px}.failed_help{margin-right:40px}.pw-video a.failed_help,.pw-video a.failed_refresh{font-size:14px;color:#fff}.help_icon{width:18px;height:18px;display:inline-block;background:url(//www.qiyipic.com/common/fix/pcWeb-img/helpBtn.png) no-repeat;margin-right:8px;vertical-align:-3px}.refresh_icon{width:18px;height:18px;display:inline-block;background:url(//www.qiyipic.com/common/fix/pcWeb-img/refreshBtn.png) no-repeat;margin-right:8px;vertical-align:-3px}.erroCode_txt{position:absolute;bottom:0;right:0;text-align:right;font-size:14px;color:#666;padding-right:20px;padding-bottom:22px}.play_endBox{position:absolute;top:0;left:0;right:0;bottom:42px;z-index:98;background:#000;height:100%}.play_endInner{overflow:hidden;position:absolute;top:50%;left:50%}.playEnd_ul{margin-left:-3px;margin-top:-3px}.playEnd_link{position:relative;display:block;width:100%;height:100%}.playEnd_ipadLink{position:relative;display:block;width:100%;height:100%}.playEnd_link img{width:100%;height:100%;display:inline-block}.playEnd_ipadLink img{width:100%;height:100%;display:inline-block}.playEnd_title{position:absolute;left:0;right:0;bottom:0;height:22px;line-height:22px;background:rgba(0,0,0,.7);color:#fff;font-size:12px;padding:0 4px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.playEnd_titleLong{display:none;position:absolute;left:0;right:0;bottom:0;height:auto;line-height:22px;background:rgba(0,0,0,.7);color:#fff;font-size:12px;padding:0 4px}.playEnd_linkH .playEnd_title{height:auto;white-space:normal}.playEnd_link:hover .playEnd_title{display:none}.playEnd_link:hover .playEnd_titleLong{display:block}.playEnd_ul .playEnd_bigList{width:323px;height:183px}.playEnd_ul .playEnd_bigList .playEnd_link img{width:323px;height:183px}.playEndW812{width:812px;margin-left:-406px}.playEndW650{width:650px;margin-left:-325px}.playEndW486{width:486px;margin-left:-243px}.playEndH369{height:369px;margin-top:-205px}.playEndH276{height:276px;margin-top:-138px}.playEndH183{height:183px;margin-top:-92px}.pw-video .caton{width:240px;height:35px;background:rgba(26,26,26,.8);position:absolute;bottom:2px;transition:bottom .2s;z-index:9}.pw-video .process-response:hover .caton{bottom:16px}.pw-video .caton h3{font-size:12px;line-height:35px;margin-left:20px;display:inline-block;color:#aaa}.pw-video .caton .stream-change{color:#57a900}.pw-video .caton .stream-info{color:#fff}.pw-video .caton .stream-infoGreen{color:#6cc900}.pw-video .caton .stream-exit:hover{background-position:-140px -180px}.video_advTips{display:inline-block;position:absolute;bottom:2px;height:35px;line-height:35px;padding:0 43px 0 20px;background:rgba(26,26,26,.8);z-index:9}.video_advTips p{font-size:12px;color:#fff}.video_advTips .stream-infoGreen{color:#6cc900}.video_advTips_close{width:9px;height:9px;display:block;float:right;margin-right:15px;margin-top:12px;font-size:0;background:url(//www.qiyipic.com/common/fix/pcWeb-img/icon-all.png) no-repeat -120px -180px;position:absolute;top:0;right:0}.pw-video_logoTop{position:absolute;top:8%;right:5%;animation:logoTopAnimation 240s linear both}.pw-video_logoBtm{position:absolute;bottom:17%;right:20%}.logoShowAnimation{animation:show .5s linear both;-webkit-animation:show .5s linear both}.logoHideAnimation{animation:hide .5s linear both;-webkit-animation:hide .5s linear both}.pw-video .setting{background:rgba(31,31,31,.9);position:absolute;right:0;bottom:45px;width:360px;height:215px}.pw-video .setting ul{height:54px;line-height:53px;padding-left:10px}.pw-video .setting li{display:inline-block;padding-left:15px}.pw-video .setting li .selected{color:#57a900}.pw-video .setting li .disabled{color:#666;cursor:default}.pw-video .setting li .disabled:hover{color:#666;cursor:default}.pw-video .control-tips span{color:#fff;background:#1a1a1a;border:1px solid #444;padding:3px 10px}.pw-video .setting li span{width:60px;display:block}.pw-video .clarty a{position:relative;display:block;height:32px;text-align:center;line-height:32px;color:#fff}.pw-video .setting li a{color:#fff}.pw-video .clarty a:hover{color:#57a900}.pw-video .setting li a:hover{color:#57a900}.pw-video .setting .screen-setting,.pw-video .setting .font-setting,.pw-video .setting .language-setting{border-bottom:1px solid #393431}.pw-video .clarty{background:rgba(26,26,26,.8);position:absolute;right:-38px;bottom:42px;width:118px;border:1px solid #1c1c1c;z-index:100}.pw-video .clarty a.stream_txt{height:0}.pw-video .control-tips{position:absolute;top:-22px;z-index:100}.pw-small-video .control-tips{position:absolute;top:-25px}.pw-video .control-tips-vip{position:absolute;bottom:42px;left:0;min-width:310px;height:25px;padding-left:5px;padding-right:5px;line-height:25px;background-image:-webkit-linear-gradient(left,rgba(0,0,0,1) 10%,rgba(0,0,0,0) 100%);background-image:-o-linear-gradient(left,rgba(0,0,0,1) 10%,rgba(0,0,0,0) 100%);background-image:linear-gradient(to right,rgba(0,0,0,1) 10%,rgba(0,0,0,0) 100%);background-repeat:repeat-x;color:#fff}.pw-video .control-tips-vipHover{bottom:56px}.pw-video .control-tips-vipDef{bottom:2px}.pw-video .control-tips-vip .em{margin-left:3px;margin-right:3px}.pw-video .control-tips-vip .em,.pw-video .control-tips-vip .em:link,.pw-video .control-tips-vip .em:visited,.pw-video .control-tips-vip .em:hover,.pw-video .control-tips-vip .em:active{color:#6cc900}.pw-video .bottom-hide .control-tips-vip{top:-35px}@charset "utf-8";.play_xuanjiBox{position:absolute;left:0;top:0;right:0;bottom:0}.pw-video .play-xuanji{position:absolute;right:0;top:0;height:100%;width:358px;overflow:hidden;background:rgba(26,26,26,.97);border:1px solid #000}.xuanji_heade{height:46px;line-height:46px;position:relative;border-bottom:1px solid #262626}.xuanji_title{padding-left:20px;font-size:14px;color:#fff}.xuanji_close{width:14px;height:14px;display:block;background:url(//www.qiyipic.com/common/fix/pcWeb-img/xuanji_close.png) no-repeat;position:absolute;top:16px;right:10px}.xuanji_close:hover{background:url(//www.qiyipic.com/common/fix/pcWeb-img/xuanji_closeH.png) no-repeat}.xuanji_con{position:relative;height:100%;overflow:hidden}.pw-video .scroll-right{background:#636363;position:absolute;width:5px;right:1px;display:block;z-index:5}.pw-video .scroll-right:hover{background:#57a900}.pw-video .txtPlay_cont{position:relative}.pw-video .pic-play{position:relative;right:0;top:0}.pw-video .pic-list .pic-info{width:110px;height:70px;float:left;position:relative;border-width:2px;border-style:solid;border-color:transparent}.pw-video .pic-list .pic-info img{width:100%;height:100%}.pw-video .pic-list .video-info{display:inline-block;position:relative;width:186px;padding-left:18px}.pic-play li.selected .video-title{color:#6cc900}.pw-video .pic-list .video-info .video-title{height:38px;overflow:hidden;margin-bottom:16px;font-size:12px;color:#aaa}.pic-play li.selected .list-link .video-title{color:#6cc900}.pic-play li .list-link:hover .video-title{color:#6cc900}.pw-video .pic-list .video-info .video-count{font-size:12px;color:#666}.pw-video .selected span.video_countNub{color:#666!important}.pw-video .pic-list .list-time{position:absolute;right:3px;bottom:5px;background:rgba(0,0,0,.6);border-radius:3px}.pw-video .pic-list .list-time_right{padding:0 5px;color:#fff}.pcweb_icon{position:absolute;top:0;right:0;line-height:0}.pcweb_icon span{display:inline-block}.pcweb_juji_new{width:15px;height:15px;cursor:pointer;overflow:hidden;background:url(//www.qiyipic.com/common/fix/v3-play/juji-list-new.png) no-repeat}.pcweb_juji_yugao{width:15px;height:15px;cursor:pointer;overflow:hidden;background:url(//www.qiyipic.com/common/fix/v3-play/juji-list-pre.png) no-repeat}.pcweb_juji_paySm{width:28px;height:16px;cursor:pointer;overflow:hidden;background:url(//www.qiyipic.com/common/fix/site/site-icons-mark.png) no-repeat;background-position:-60px -20px}.pcweb_juji_vip{width:28px;height:16px;cursor:pointer;overflow:hidden;background:url(//www.qiyipic.com/common/fix/site/site-icons-mark.png) no-repeat;background-position:0 -20px}.pw-video .pic-list .list-link{padding:13px 20px 12px;display:block;border-bottom:1px solid #262626;height:75px}.pic-play li.selected .list-link{background:rgba(187,187,187,.05);border-color:#292929}.pw-video .pic-list .list-link:hover{background:rgba(187,187,187,.05);border-color:#292929;border-top:1px solid #292929;margin-top:-1px}.pw-video .list-link:hover .pic-info,.pic-play li.selected .list-link .pic-info{border:2px solid #6cc900}.pic-play li.selected span.list-time_right{color:#fff!important}.pic-play li.selected span.video-count{color:#666!important}.pw-video .txt-link{display:block;height:49px;line-height:49px;text-align:left;padding:0 20px;position:relative;border-bottom:1px solid #262728}.pw-video .txt-link:hover{background:rgba(187,187,187,.05);border-color:#262728;border-top:1px solid #262728;margin-top:-1px;color:#6cc900}.txt-play a.selected{background:rgba(187,187,187,.05);border-color:#262728}.txtPlay_left{display:inline-block;width:18px;vertical-align:top}.txtPlay_icon{width:18px;height:18px;vertical-align:middle;background:url(//www.qiyipic.com/common/fix/pcWeb-img/txtPlay_icon.png) no-repeat;display:none}.txt-play a.selected .txtPlay_icon{display:inline-block}.txt-play a.selected .txtPlay_left{display:none}.pw-video .txt-title{margin-left:14px;display:inline-block;width:280px;height:50px;line-height:50px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;vertical-align:top}.pw-video .txtPlay_cont-long .txt-link i{background:url(//www.qiyipic.com/common/fix/pcWeb-img/icon-all.png) no-repeat;display:block;width:20px;height:15px;float:right;position:relative;top:15px}.pw-video .txtPlay_cont-long .txt-link .icon-arrowUp{background-position:-125px -28px}.pw-video .txtPlay_cont-long .txt-link .icon-arrowDown{background-position:-149px -28px}.pw-video .txtPlay_cont-long .txt-link:hover .icon-arrowUp{background-position:-170px -28px}.pw-video .txtPlay_cont-long .txt-link:hover .icon-arrowDown{background-position:-194px -28px}@charset "utf-8";.report_box{position:absolute;top:0;right:0;bottom:0;left:0}.report_inner{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);text-align:center;width:120px;height:110px;background:rgba(31,31,31,.9);border-radius:10px;font-size:16px;color:#fff}.report_yIcon{width:48px;height:48px;display:inline-block;background:url(//www.qiyipic.com/common/fix/pcWeb-img/report_Yicon.png) no-repeat;margin-top:20px}.report_window{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);font-size:0;width:480px;height:350px;background:#fff;border:2px solid #e9e9e9}.report_wInner{border:1px solid #dbdbdb;width:478px;height:348px}.report_wHeader{height:38px;line-height:38px;background:#f2f2f2;position:relative;padding-left:20px;font-size:14px;color:#333}.report_closeBtn{position:absolute;top:13px;right:20px;width:14px;height:14px;display:block;background:url(//www.qiyipic.com/common/fix/pcWeb-img/report_closeBtn.png) no-repeat}.report_closeBtn:hover{background:url(//www.qiyipic.com/common/fix/pcWeb-img/report_closeBtnH.png) no-repeat}.report_wCon{padding:16px 30px 0}.re_top{position:relative;font-size:12px;color:#333}.re_top span{color:#000}.re_top a.re_dmlyLink{position:absolute;right:0;font-size:12px;color:#5aa700}.re_txt{font-size:12px;color:#666;margin-top:2px}.re_title{margin-top:10px;font-size:12px;color:#000;margin-bottom:7px;clear:both}.re_rebox{float:left;margin-bottom:10px;width:418px}.reBox_item{float:left;width:126px;margin-bottom:10px}.reItemW2{width:107px}.reItemW3{width:112px}.reItemW4{width:70px}.reBox_item a.re_rideo{font-size:12px;color:#666!important;line-height:16px;display:block;height:16px}.re_rideo i{width:16px;height:16px;display:inline-block;background:url(//www.qiyipic.com/common/fix/pcWeb-img/re_rideoIcon.png) no-repeat;vertical-align:-3px;margin-right:6px}.re_rideo:hover i{background:url(//www.qiyipic.com/common/fix/pcWeb-img/re_rideoIconH.png) no-repeat}.reBox_item a.selected i{background:url(//www.qiyipic.com/common/fix/pcWeb-img/re_rideoIconS.png) no-repeat;color:#666!important}.re_textareaBox{width:408px;height:50px;border:1px solid #ddd;padding:4px 5px;position:relative;margin-bottom:20px}.re_textarea{font-size:12px;color:#333;width:100%;height:50px;border:0;outline:0;resize:none}.re_text{position:absolute;bottom:0;right:5px;font-size:12px;color:#999}.re_btnBox{text-align:center}.re_btnBox a{width:100px;height:30px;line-height:30px;box-sizing:border-box;font-size:14px;color:#999;border-radius:3px;border:1px solid #999;display:inline-block;background:#fff}.re_btnBox a.re_submitBtn{border:1px solid #5aa700;color:#fff;background:#5aa700;margin-right:40px}.re_btnBox a.re_submitBtn:hover{border:1px solid #7fb52b;background:#7fb52b}.re_cancelBtn:hover{border:1px solid #5aa700;color:#5aa700}.report_btnInner{background:#eeeef2;border:1px solid #666;border-radius:6px;width:88px;height:69px;line-height:34px}.report_botton a.report_btnLink{font-size:18px;color:#666;display:block;text-align:center}.report_botton a.report_btnLink:hover{color:#5aa700}.report_icon{background:url(//www.qiyipic.com/common/fix/pcWeb-img/report_icon.png) no-repeat;width:22px;height:20px;display:inline-block;vertical-align:-4px;margin-right:5px}.report_dz .report_icon{background:url(//www.qiyipic.com/common/fix/pcWeb-img/report_zanIcon.png) no-repeat;width:19px;height:19px;display:inline-block;vertical-align:-4px;margin-right:5px}.report_botton a.report_btnLink:hover .report_icon{background:url(//www.qiyipic.com/common/fix/pcWeb-img/reportH_icon.png) no-repeat}.report_dz{border-bottom:1px solid #ccc}.report_botton a.report_dz:hover .report_icon{background:url(//www.qiyipic.com/common/fix/pcWeb-img/report_zanIconH.png) no-repeat}.reportBtn_arrowWrap{position:absolute}.reportBtn_arrow{position:absolute;width:0;height:0;overflow:hidden;font-size:0;line-height:0}.reportBtn_arrowInner{position:absolute;width:0;height:0;overflow:hidden;font-size:0;line-height:0}.reportBtn_top{top:0;left:50%;margin-left:-8px}.reportBtn_top .reportBtn_arrow{border:8px dashed transparent;border-bottom:8px solid #666;bottom:0}.reportBtn_top .reportBtn_arrowInner{border:8px dashed transparent;border-bottom:8px solid #eeeef2;bottom:-1px}.reportBtn_topL{top:0;left:12px}.reportBtn_topL .reportBtn_arrow{border:8px dashed transparent;border-bottom:8px solid #666;bottom:0}.reportBtn_topL .reportBtn_arrowInner{border:8px dashed transparent;border-bottom:8px solid #eeeef2;bottom:-1px}.reportBtn_topR{top:0;right:30px}.reportBtn_topR .reportBtn_arrow{border:8px dashed transparent;border-bottom:8px solid #666;bottom:0}.reportBtn_topR .reportBtn_arrowInner{border:8px dashed transparent;border-bottom:8px solid #eeeef2;bottom:-1px}.reportBtn_bottom{bottom:0;left:50%;margin-left:-8px}.reportBtn_bottom .reportBtn_arrow{border:8px dashed transparent;border-top:8px solid #666;top:0}.reportBtn_bottom .reportBtn_arrowInner{border:8px dashed transparent;border-top:8px solid #eeeef2;top:-1px}.reportBtn_bottomL{bottom:0;left:12px}.reportBtn_bottomL .reportBtn_arrow{border:8px dashed transparent;border-top:8px solid #666;top:0}.reportBtn_bottomL .reportBtn_arrowInner{border:8px dashed transparent;border-top:8px solid #eeeef2;top:-1px}.reportBtn_bottomR{bottom:0;right:30px}.reportBtn_bottomR .reportBtn_arrow{border:8px dashed transparent;border-top:8px solid #666;top:0}.reportBtn_bottomR .reportBtn_arrowInner{border:8px dashed transparent;border-top:8px solid #eeeef2;top:-1px}.conduct-bar-v2 .tucao-input{color:#000}.report_loveAdd{width:52px;height:21px;background:url(//www.qiyipic.com/common/fix/pcWeb-img/report_loveAdd.png) no-repeat}.report_love2{width:23px;height:20px;background:url(//www.qiyipic.com/common/fix/pcWeb-img/report_love2.png) no-repeat}@keyframes report_like{0%{transform:rotate(-10deg);opacity:.5;left:11px}44%{transform:rotate(5deg);bottom:4px;left:0;width:52px;height:21px}48%{transform:rotate(10deg);bottom:8px;opacity:.9;left:.6px;width:52px;height:21px}52%{transform:rotate(12deg);bottom:10px;opacity:.825;left:2px;width:52px;height:21px}56%{transform:rotate(14deg);bottom:14px;opacity:.75;left:4px;width:52px;height:21px}60%{transform:rotate(16deg);bottom:16px;opacity:.675;left:6px;width:52px;height:21px}64%{transform:rotate(18deg);bottom:18px;opacity:.6;left:8px;width:52px;height:21px}68%{transform:rotate(20deg);bottom:20px;opacity:.5;left:10px;width:52px;height:21px}76%{transform:rotate(8deg);bottom:26px;opacity:.3;left:9px;width:52px;height:21px}99%{transform:rotate(-10deg);bottom:40px;opacity:.06;left:4px;width:52px;height:21px}100%{transform:rotate(0deg);bottom:0;opacity:0;left:0;width:40px;height:16px}}@-webkit-keyframes report_like{0%{transform:rotate(-10deg);opacity:.5;left:11px}44%{transform:rotate(5deg);bottom:4px;left:0;width:52px;height:21px}48%{transform:rotate(10deg);bottom:8px;opacity:.9;left:.6px;width:52px;height:21px}52%{transform:rotate(12deg);bottom:10px;opacity:.825;left:2px;width:52px;height:21px}56%{transform:rotate(14deg);bottom:14px;opacity:.75;left:4px;width:52px;height:21px}60%{transform:rotate(16deg);bottom:16px;opacity:.675;left:6px;width:52px;height:21px}64%{transform:rotate(18deg);bottom:18px;opacity:.6;left:8px;width:52px;height:21px}68%{transform:rotate(20deg);bottom:20px;opacity:.5;left:10px;width:52px;height:21px}76%{transform:rotate(8deg);bottom:26px;opacity:.3;left:9px;width:52px;height:21px}99%{transform:rotate(-10deg);bottom:40px;opacity:.06;left:4px;width:52px;height:21px}100%{transform:rotate(0deg);bottom:0;opacity:0;left:0;width:40px;height:16px}}@-moz-keyframes report_like{0%{transform:rotate(-10deg);opacity:.5;left:11px}44%{transform:rotate(5deg);bottom:4px;left:0;width:52px;height:21px}48%{transform:rotate(10deg);bottom:8px;opacity:.9;left:.6px;width:52px;height:21px}52%{transform:rotate(12deg);bottom:10px;opacity:.825;left:2px;width:52px;height:21px}56%{transform:rotate(14deg);bottom:14px;opacity:.75;left:4px;width:52px;height:21px}60%{transform:rotate(16deg);bottom:16px;opacity:.675;left:6px;width:52px;height:21px}64%{transform:rotate(18deg);bottom:18px;opacity:.6;left:8px;width:52px;height:21px}68%{transform:rotate(20deg);bottom:20px;opacity:.5;left:10px;width:52px;height:21px}76%{transform:rotate(8deg);bottom:26px;opacity:.3;left:9px;width:52px;height:21px}99%{transform:rotate(-10deg);bottom:40px;opacity:.06;left:4px;width:52px;height:21px}100%{transform:rotate(0deg);bottom:0;opacity:0;left:0;width:40px;height:16px}}@-o-keyframes report_like{0%{transform:rotate(-10deg);opacity:.5;left:11px}44%{transform:rotate(5deg);bottom:4px;left:0;width:52px;height:21px}48%{transform:rotate(10deg);bottom:8px;opacity:.9;left:.6px;width:52px;height:21px}52%{transform:rotate(12deg);bottom:10px;opacity:.825;left:2px;width:52px;height:21px}56%{transform:rotate(14deg);bottom:14px;opacity:.75;left:4px;width:52px;height:21px}60%{transform:rotate(16deg);bottom:16px;opacity:.675;left:6px;width:52px;height:21px}64%{transform:rotate(18deg);bottom:18px;opacity:.6;left:8px;width:52px;height:21px}68%{transform:rotate(20deg);bottom:20px;opacity:.5;left:10px;width:52px;height:21px}76%{transform:rotate(8deg);bottom:26px;opacity:.3;left:9px;width:52px;height:21px}99%{transform:rotate(-10deg);bottom:40px;opacity:.06;left:4px;width:52px;height:21px}100%{transform:rotate(0deg);bottom:0;opacity:0;left:0;width:40px;height:16px}}@keyframes report_likeMore{0%{transform:rotate(-10deg);opacity:.5;left:11px}44%{transform:rotate(5deg);left:0;width:24px;height:21px}48%{transform:rotate(10deg);bottom:8px;opacity:.9;left:.6px;width:24px;height:21px}52%{transform:rotate(12deg);bottom:10px;opacity:.825;left:2px;width:24px;height:21px}56%{transform:rotate(14deg);bottom:14px;opacity:.75;left:4px;width:24px;height:21px}60%{transform:rotate(16deg);bottom:16px;opacity:.675;left:6px;width:24px;height:21px}64%{transform:rotate(18deg);bottom:18px;opacity:.6;left:8px;width:24px;height:21px}68%{transform:rotate(20deg);bottom:20px;opacity:.5;left:10px;width:24px;height:21px}76%{transform:rotate(8deg);bottom:26px;opacity:.3;left:9px;width:24px;height:21px}99%{transform:rotate(-10deg);bottom:40px;opacity:.16;left:4px;width:24px;height:21px}100%{transform:rotate(0deg);bottom:0;opacity:0;left:0;width:18px;height:16px}}@-webkit-keyframes report_likeMore{0%{transform:rotate(-10deg);opacity:.5;left:11px}44%{transform:rotate(5deg);left:0;width:24px;height:21px}48%{transform:rotate(10deg);bottom:8px;opacity:.9;left:.6px;width:24px;height:21px}52%{transform:rotate(12deg);bottom:10px;opacity:.825;left:2px;width:24px;height:21px}56%{transform:rotate(14deg);bottom:14px;opacity:.75;left:4px;width:24px;height:21px}60%{transform:rotate(16deg);bottom:16px;opacity:.675;left:6px;width:24px;height:21px}64%{transform:rotate(18deg);bottom:18px;opacity:.6;left:8px;width:24px;height:21px}68%{transform:rotate(20deg);bottom:20px;opacity:.5;left:10px;width:24px;height:21px}76%{transform:rotate(8deg);bottom:26px;opacity:.3;left:9px;width:24px;height:21px}99%{transform:rotate(-10deg);bottom:40px;opacity:.16;left:4px;width:24px;height:21px}100%{transform:rotate(0deg);bottom:0;opacity:0;left:0;width:18px;height:16px}}@-moz-keyframes report_likeMore{0%{transform:rotate(-10deg);opacity:.5;left:11px}44%{transform:rotate(5deg);left:0;width:24px;height:21px}48%{transform:rotate(10deg);bottom:8px;opacity:.9;left:.6px;width:24px;height:21px}52%{transform:rotate(12deg);bottom:10px;opacity:.825;left:2px;width:24px;height:21px}56%{transform:rotate(14deg);bottom:14px;opacity:.75;left:4px;width:24px;height:21px}60%{transform:rotate(16deg);bottom:16px;opacity:.675;left:6px;width:24px;height:21px}64%{transform:rotate(18deg);bottom:18px;opacity:.6;left:8px;width:24px;height:21px}68%{transform:rotate(20deg);bottom:20px;opacity:.5;left:10px;width:24px;height:21px}76%{transform:rotate(8deg);bottom:26px;opacity:.3;left:9px;width:24px;height:21px}99%{transform:rotate(-10deg);bottom:40px;opacity:.16;left:4px;width:24px;height:21px}100%{transform:rotate(0deg);bottom:0;opacity:0;left:0;width:18px;height:16px}}@-o-keyframes report_likeMore{0%{transform:rotate(-10deg);opacity:.5;left:11px}44%{transform:rotate(5deg);left:0;width:24px;height:21px}48%{transform:rotate(10deg);bottom:8px;opacity:.9;left:.6px;width:24px;height:21px}52%{transform:rotate(12deg);bottom:10px;opacity:.825;left:2px;width:24px;height:21px}56%{transform:rotate(14deg);bottom:14px;opacity:.75;left:4px;width:24px;height:21px}60%{transform:rotate(16deg);bottom:16px;opacity:.675;left:6px;width:24px;height:21px}64%{transform:rotate(18deg);bottom:18px;opacity:.6;left:8px;width:24px;height:21px}68%{transform:rotate(20deg);bottom:20px;opacity:.5;left:10px;width:24px;height:21px}76%{transform:rotate(8deg);bottom:26px;opacity:.3;left:9px;width:24px;height:21px}99%{transform:rotate(-10deg);bottom:40px;opacity:.16;left:4px;width:24px;height:21px}100%{transform:rotate(0deg);bottom:0;opacity:0;left:0;width:18px;height:16px}}@charset "utf-8";.danmu-close_h5{margin-top:10px;margin-left:5px}.danmu-close_h5 .danmuTit{font-size:12px;color:#aaa}.danmu-close_h5 .switch{background:url(//www.qiyipic.com/common/fix/pcWeb-img/barrage_openIcon.png) no-repeat 0 0;width:40px;height:28px;display:block;margin:-2px 30px 0 6px}.danmu-close_h5 .switch_open{background-position:0 -30px}.plugin_box{width:100%;position:absolute;left:0;right:0;bottom:0}.plugin_inner{text-align:center;padding-bottom:6px;color:#fff;padding-left:20px;padding-right:20px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.plugin_ch{font-family:"\\5FAE\\8F6F\\96C5\\9ED1";font-size:13px;line-height:16px;max-height:32px;overflow:hidden;text-shadow:#000 1px 0 0,#333 2px 2px 0,#000 -1px 0 0,#000 0 -1px 0}.plugin_w680_w980{padding-bottom:15px;width:620px;margin:0 auto;padding-left:0;padding-right:0}.plugin_w680_w980 .plugin_ch{font-size:22px;line-height:28px;max-height:56px}.plugin_w980_w1360{padding-bottom:20px;width:860px;margin:0 auto;padding-left:0;padding-right:0}.plugin_w980_w1360 .plugin_ch{font-size:26px;line-height:32px;max-height:64px}.plugin_w1360{padding-bottom:24px;width:1004px;margin:0 auto;padding-left:0;padding-right:0}.plugin_w1360 .plugin_ch{font-size:30px;line-height:36px;max-height:72px}';
                    e = document.createElement("style"),
                    e.innerHTML = t,
                    r("head").append(e)
                },
                _loadSkins: function() {
                    var t = this;
                    a.os.ios || a.os.android ? e.async(1, function(e) {
                        (function(e) {
                            t.loadSkin(e)
                        }
                        ).apply(null, [e(77)])
                    }) : e.async(2, function(e) {
                        (function(e) {
                            t.loadSkin(e)
                        }
                        ).apply(null, [e(96)])
                    })
                },
                _loadPlayListSkin: function() {
                    var t = this
                      , i = !1
                      , n = !1
                      , o = [];
                    t.core.on(l.NTF_ADDVideoList, function(a) {
                        i && !n && o.push(a),
                        i || 3 == a.data.playSource || (e.async(3, function(e) {
                            (function(e) {
                                t.loadSkin(e, a.data, "playlist"),
                                n = !0;
                                for (var i = 0; i < o.length; i++)
                                    t.core.fire({
                                        type: l.NTF_ADDVideoList,
                                        data: o[i].data
                                    })
                            }
                            ).apply(null, [e(116)])
                        }),
                        i = !0)
                    })
                }
            }
        })
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#64#
    var n = function(e, t, i) {
        var n, o = e(12), a = e(18), r = e(13), c = e(27), s = e(45), p = new o("SkinBase"), d = !1;
        i.exports = r("SkinBase", {
            construct: function(e, t, i, n) {
                var o = this;
                o.core = i,
                o.view = n,
                o.videoWrapper = c(e),
                o.plgContainer = c(t);
                var a = function() {
                    for (var e = o.plugins, t = 0; t < e.length; t++)
                        o._checkPlugin(e[t])
                };
                i.on(s.Status_AdInit, function() {
                    d = !0,
                    a()
                }).on(s.Status_AresPlay, function() {
                    d = !0,
                    a()
                }).on(s.Status_AresEnded, function() {
                    d = !1,
                    a()
                }),
                i.on(s.NTF_TimeUpdate, function() {
                    a()
                }).on(s.NTF_AD_TimeUpdate, function() {
                    a()
                })
            },
            extend: a,
            props: {
                plugins: [],
                styleQueues: [],
                paramObject: {}
            },
            methods: {
                registerPlugins: function(e) {
                    n || (n = this);
                    var t = n
                      , i = t.core;
                    e = e || [],
                    e.forEach(function(e) {
                        try {
                            var n = new e(t,i);
                            if (!n.name)
                                throw new Error("plugin name is null");
                            n.init(),
                            t._checkPlugin(n),
                            t.plugins.push(n)
                        } catch (e) {
                            p.error(e.stack)
                        }
                    })
                },
                loadSkin: function(e, t, i) {
                    var o = this;
                    t && i && (n.paramObject[i] = t),
                    new e(o.videoWrapper,o.plgContainer,o.core,n)
                },
                _checkPlugin: function(e) {
                    var t = this;
                    switch (t.core.getEngineType()) {
                    case "DATA":
                        d = t.core.isAd()
                    }
                    d ? e.disable() : e.enable()
                }
            }
        })
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#65#
    var n = function(e, t, i) {
        var n, o = e(13), a = e(4), r = e(19), c = e(8), s = (e(7),
        e(10)), p = e(21), d = e(5), l = e(18), u = e(23), f = e(11), g = e(1), h = "1", m = "10", v = "101";
        d.browser.iPad ? (h = "2",
        m = "20",
        v = "201") : (d.os.ios || d.os.android) && (h = "2",
        m = "20",
        v = "201");
        var b = o("Pingback", {
            construct: function(e) {
                this._core = e
            },
            extend: l,
            methods: {
                _send: function(e) {
                    var t = this;
                    t._core.getVideoInfo(function(i) {
                        p.isVip(function(n) {
                            var o = {
                                bstp: 6,
                                block: "B",
                                pf: h,
                                p: m,
                                p1: v,
                                c1: i.vi ? i.vi.showChannelId || "" : "",
                                r: i.vi ? i.vi.videoQipuId || "" : "",
                                u: r.getJsuid(),
                                pu: p.getUid(),
                                pru: s.get("P00PRU") || "",
                                v: g.version,
                                ra: e.ra || t._core.getCurrentVD(),
                                nu: r.getIsNewUser() || "",
                                ve: r.getEid(),
                                ce: r.getWeid(),
                                hu: n ? 1 : -1,
                                ht: i.vi && 2 === i.vi.bossStatus ? 1 : 0,
                                mod: f.local(),
                                plyrtp: 0,
                                coop: "",
                                isdm: t._pbisdm,
                                videotp: i.vi && 1 === i.vi.is3D ? 2 : 0,
                                rn: Math.random()
                            };
                            try {
                                a(o, {
                                    as: u.cmd5ly(o.r + "" + o.p1 + o.u + o.ve + "ChEnYH0804FdadrrEDFf2016tT")
                                })
                            } catch (e) {}
                            o = a(o, e),
                            c.beacon(o, "//msg.71.am/b")
                        })
                    })
                },
                sendSeekPingback: function(e, t) {
                    this._send({
                        rseat: "ply_seek",
                        from: e,
                        to: t
                    })
                },
                sendSwitchVDPingback: function(e) {
                    var t = this;
                    t._send({
                        rseat: "ply_cc",
                        tra: e,
                        ra: t._core.getCurrentVD()
                    })
                },
                sendUserActionPingback: function(e) {
                    this._send({
                        rseat: e
                    })
                },
                setpbisdm: function(e) {
                    this._pbisdm = e
                },
                sendBarrageShowRulePagePingback: function() {
                    this._send({
                        rseat: "608241_etiquette"
                    })
                },
                sendBarrageShowLikePingback: function() {
                    this._send({
                        rseat: "608241_like"
                    })
                },
                sendBarrageEnsureReportPingback: function() {
                    this._send({
                        rseat: "608241_report"
                    })
                }
            }
        });
        i.exports = {
            init: function(e) {
                n || (n = new b(e))
            },
            getInterface: function() {
                return n
            }
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#66#
    var n = function(e, t, i) {
        var n = e(67)
          , o = e(5)
          , a = e(13)
          , r = e(27)
          , c = e(11)
          , s = e(12)
          , p = (new s("PluginLoading"),
        e(69))
          , d = e(3)
          , l = e(45)
          , u = e(68);
        i.exports = a("PluginLoading", {
            construct: function() {
                var e = this;
                e.name = "loading";
                var t = r(e.wrapper).append(p);
                e.$container = t.find('[data-player-hook="videoLoading"]'),
                e.loading = t.find(".video-loading")
            },
            extend: n,
            methods: {
                init: function() {
                    var e = this
                      , t = e.core
                      , i = t.getEngineType()
                      , n = !1;
                    o.os.ios || o.os.android || !t.autoplay ? e.hideBeginLoading() : e.showBeginLoading(),
                    t.on(l.NTF_StatusChanged, function(i) {
                        switch (i.data.state) {
                        case l.Status_StartPlay:
                        case l.Status_Playing:
                        case l.Status_AdPlaying:
                        case l.Status_AdStartPlay:
                        case l.Status_End_Play:
                            e.hideLoading(),
                            e.hideBeginLoading();
                            break;
                        case l.Status_AdWaiting:
                        case l.Status_Waiting:
                            (o.os.ios || o.os.android) && t.getCurrenttime() < 1 && e.showBeginLoading();
                            break;
                        case l.Status_Loadstart:
                            o.os.ios || o.os.android || e.showLoading();
                            break;
                        case l.Status_Play:
                            (o.os.ios || o.os.android) && t.getCurrenttime() < 1 && e.showBeginLoading();
                            break;
                        case l.Status_PlayError:
                        }
                    }),
                    t.on(l.NTF_VideoChange, function(t) {
                        e.showBeginLoading()
                    }),
                    t.on(l.NTF_DefinitionSwitched, function(t) {
                        e.hideBeginLoading()
                    }),
                    e.skin.once("bigplay:play", function() {
                        n = !0,
                        (o.os.ios || o.os.android) && e.showBeginLoading()
                    }),
                    e.on(u.NTF_PLG_Enable, function() {
                        ("DATA" === i || "HTTP" === i && n) && t.isPaused() && e.showLoading()
                    })
                },
                showBeginLoading: function() {
                    var e = this
                      , t = c.isTraditionalChinese()
                      , i = t ? "_tw" : ""
                      , n = d.getVars()
                      , o = e.core.getMovieInfo()
                      , a = o.tvid
                      , r = o.vid
                      , s = e.core.getInfoFromVideoList(a, r)
                      , p = !1
                      , l = !1
                      , u = !1;
                    s ? s.isMember ? p = !0 : s.isQiyiProduced ? l = !0 : s.isExclusive && (u = !0) : "true" == n.isMember ? p = !0 : 1 == n.qiyiProduced ? l = !0 : 1 == n.exclusive && (u = !0),
                    e.beginloading = p ? e.$container.find('[data-player-hook="videoLoadingVip' + i + '"]') : l ? e.$container.find('[data-player-hook="videoLoadingQiyiProduced' + i + '"]') : u ? e.$container.find('[data-player-hook="videoLoadingExclusive' + i + '"]') : e.$container.find('[data-player-hook="videoLoadingNormal' + i + '"]'),
                    e._begineShow = !0,
                    e.$container.show(),
                    e.beginloading.show()
                },
                hideBeginLoading: function() {
                    var e = this;
                    e._begineShow = !1,
                    e.$container.hide(),
                    e.beginloading && e.beginloading.hide()
                },
                showLoading: function() {
                    var e = this;
                    !0 !== e._begineShow && (e.beginloading && e.beginloading.hide(),
                    e.$container.show(),
                    e.loading.show())
                },
                hideLoading: function() {
                    var e = this;
                    e.$container.hide(),
                    e.loading.hide()
                }
            }
        })
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#67#
    var n = function(e, t, i) {
        var n = e(18)
          , o = e(13)
          , a = e(68)
          , r = document.createDocumentFragment();
        i.exports = o("PluginBase", {
            construct: function(e, t) {
                var i = this;
                i.skin = e,
                i.core = t,
                i.wrapper = e.videoWrapper,
                i.plgContainer = e.plgContainer,
                i.isOpen = !1,
                i.enabled = void 0,
                i.panelType = "normal"
            },
            extend: n,
            methods: {
                open: function() {},
                close: function() {},
                destroy: function() {},
                enable: function() {
                    var e = this;
                    !1 !== e.enabled && void 0 !== e.enabled || (e.enabled = !0,
                    e.$plugin && e.plgContainer.append(e.$plugin[0]),
                    e.fire({
                        type: a.NTF_PLG_Enable
                    }))
                },
                disable: function() {
                    var e = this;
                    !0 !== e.enabled && void 0 !== e.enabled || (e.enabled = !1,
                    e.$plugin && r.appendChild(e.$plugin[0]),
                    e.skin.fire({
                        type: a.NTF_PLG_Disable
                    }))
                }
            }
        })
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#68#
    var n = function(e, t, i) {
        var n = 0
          , o = "ntf_";
        i.exports = {
            NTF_PLG_Enable: o + n++,
            NTF_PLG_Disable: o + n++,
            NTF_Play: o + n++,
            NTF_Pause: o + n++,
            NTF_Replay: o + n++,
            NTF_Seek: o + n++,
            NTF_ChangeVolume: o + n++,
            NTF_SeekTime: o + n++,
            NTF_PlayerSmallWindowStatus: o + n++,
            NTF_ControlbarShow: o + n++,
            NTF_ControlbarHide: o + n++,
            NTF_DefinitionBtnClick: o + n++,
            NTF_DefinitionBtnMouseEnter: o + n++,
            NTF_DefinitionBtnMouseLeave: o + n++,
            NTF_DefinitionListShow: o + n++,
            NTF_DefinitionListhide: o + n++,
            NTF_DefinitionADShow: o + n++,
            NTF_DefinitionADClick: o + n++,
            NTF_FullScreen: o + n++,
            NTF_WebFullScreen: o + n++,
            NTF_SetDownLoad: o + n++,
            NTF_BarrageSelfSend: o + n++,
            NTF_BarrageSettingChange: o + n++,
            NTF_HIDE_BOTTOM_TOP: o + n++,
            NTF_SHOW_BOTTOM_TOP: o + n++,
            NTF_HIDE_PLAYLIST: o + n++,
            NTF_HIDE_TOPBAR: o + n++,
            NTF_SHOW_TOPBAR: o + n++,
            NTF_CLICK_PLAYLIST_BTN: o + n++,
            NTF_SHOW_PLAYLIST_BTN: o + n++,
            NTF_HIDE_PLAYLIST_BTN: o + n++,
            NTF_SHOW_LOGIN_PANEL: o + n++,
            NTF_WebFullScreen_BeforeChange: o + n++,
            NTF_WebFullScreen_AfterChange: o + n++,
            NTF_WebFullScreen_SetSwitch: o + n++,
            NTF_FullScreen_BeforeChange: o + n++,
            NTF_FullScreen_AfterChange: o + n++,
            NTF_FullScreen_SetSwitch: o + n++,
            NTF_Barrage_SetConfigInfo: o + n++,
            NTF_Barrage_SetChannelConfigInfo: o + n++,
            NTF_Barrage_SetSwitch: o + n++,
            NTF_Barrage_ShowLike: o + n++,
            NTF_Barrage_ShowMoreLike: o + n++,
            NTF_Barrage_EnsureReport: o + n++,
            NTF_Barrage_ShowRulePage: o + n++,
            NTF_Barrage_ClearBanWord: o + n++,
            NTF_Barrage_AddBanWord: o + n++,
            NTF_Barrage_RemoveBanWord: o + n++,
            Type_Play: "play",
            Type_Pause: "pause",
            Type_Replay: "replay"
        }
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#69#
    var n = function(e, t, i) {
        return '<div data-player-hook="videoLoading" style="pointer-events: none;position: absolute;top:0;left:0;height:100%;width:100%;z-index:99;"><div class="videoLogo_loading" style="display: none;" data-player-hook="videoLoadingVip"><div class="logoLoading_box logoLoading_vip"><div class="logoVideo"></div><div class="logoVideo_line"></div></div></div><div class="videoLogo_loading" style="display: none;" data-player-hook="videoLoadingVip_tw"><div class="logoLoading_box logoLoading_vipft"><div class="logoVideo"></div><div class="logoVideo_line"></div></div></div><div class="videoLogo_loading" style="display: none;" data-player-hook="videoLoadingQiyiProduced"><div class="logoLoading_box logoLoading_cp"><div class="logoVideo"></div><div class="logoVideo_line"></div></div></div><div class="videoLogo_loading" style="display: none;" data-player-hook="videoLoadingQiyiProduced_tw"><div class="logoLoading_box logoLoading_cpft"><div class="logoVideo"></div><div class="logoVideo_line"></div></div></div><div class="videoLogo_loading" style="display: none;" data-player-hook="videoLoadingExclusive"><div class="logoLoading_box logoLoading_db"><div class="logoVideo"></div><div class="logoVideo_line"></div></div></div><div class="videoLogo_loading" style="display: none;" data-player-hook="videoLoadingExclusive_tw"><div class="logoLoading_box logoLoading_dbft"><div class="logoVideo"></div><div class="logoVideo_line"></div></div></div><div class="videoLogo_loading" style="display: none;" data-player-hook="videoLoadingNormal"><div class="logoLoading_box"><div class="logoVideo"></div><div class="logoVideo_line"></div></div></div><div class="videoLogo_loading" style="display: none;" data-player-hook="videoLoadingNormal_tw"><div class="logoLoading_box"><div class="logoVideoft"></div><div class="logoVideo_line"></div></div></div><div class="video-loading" style="display: none; z-index: 80;"><div class="video-loading_info"><i class="video-loading_btn"></i><span>正在全力加载，请稍候…</span></div></div></div>'
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#70#
    var n = function(e, t, i) {
        var n = e(67)
          , o = e(13)
          , a = e(71)
          , r = (e(27),
        e(26))
          , c = e(29)
          , s = (e(68),
        e(45))
          , p = e(72)
          , d = e(12)
          , l = e(28);
        new d("Subtitles");
        i.exports = o("Subtitles", {
            construct: function() {
                var e = this;
                e.name = "Subtitles",
                e.plgContainer.append(a),
                e.$plugin = e.plgContainer.find('[data-player-hook="subtitles"]'),
                e._text = e.$plugin.find('[data-player-hook="subtitles_text"]'),
                e._textCH = e.$plugin.find('[data-player-hook="subtitles_ch"]'),
                e._curSubData = {}
            },
            extend: n,
            methods: {
                init: function() {
                    var e = this;
                    e.$plugin.hide(),
                    e.core.on(s.NTF_StatusChanged, function(t) {
                        switch (t.data.state) {
                        case s.Status_StartPlay:
                            e.core.getMovieInfo().subtitlesUrl && (e.subtitlesData = new p,
                            e.subtitlesData.updateSubtitlesUrl(e.core.getMovieInfo().subtitlesUrl))
                        }
                    }),
                    e.core.on(s.NTF_TimeUpdate, function(t) {
                        e._timeUpdate(t.data)
                    }),
                    r.on("change", e._changeSize.bind(e)),
                    c.on("change", e._changeSize.bind(e)),
                    l.on("resize", function() {
                        e._changeSize()
                    }),
                    e._changeSize()
                },
                _timeUpdate: function(e) {
                    var t = this;
                    t.subtitlesData && t._curSubData && 1e3 * e.current >= t._curSubData.st && 1e3 * e.current <= t._curSubData.et || t.subtitlesData && (t.$plugin.hide(),
                    t._curSubData = t.subtitlesData.getDataByCurtime(1e3 * e.current),
                    t._curSubData && (t._textCH.html(t._curSubData["sub"]),
                    t.$plugin.show()))
                },
                _changeSize: function() {
                    var e = this
                      , t = e.wrapper.width() / e.wrapper.height()
                      , i = e.core.getRealArea().width / e.core.getRealArea().height
                      , n = {};
                    t > i ? (n.height = e.wrapper.height(),
                    n.width = e.wrapper.height() / e.core.getRealArea().height * e.core.getRealArea().width) : t < i && (n.width = e.wrapper.width(),
                    n.height = e.wrapper.width() / e.core.getRealArea().width * e.core.getRealArea().height),
                    n.width < 680 ? (e._text.removeClass("plugin_w680_w980").removeClass("plugin_w980_w1360").removeClass("plugin_w1360"),
                    n.height < e.wrapper.height() ? e._text.css("padding-bottom", .5 * (e.wrapper.height() - n.height) + 9 + "px") : e._text.css("padding-bottom", "9px")) : n.width >= 680 && n.width <= 980 ? (e._text.removeClass("plugin_w980_w1360").removeClass("plugin_w1360").addClass("plugin_w680_w980"),
                    n.height < e.wrapper.height() ? e._text.css("padding-bottom", .5 * (e.wrapper.height() - n.height) + 15 + "px") : e._text.css("padding-bottom", "15px")) : n.width >= 980 && n.width <= 1360 ? (e._text.removeClass("plugin_w680_w980").removeClass("plugin_w1360").addClass("plugin_w980_w1360"),
                    n.height < e.wrapper.height() ? e._text.css("padding-bottom", .5 * (e.wrapper.height() - n.height) + 20 + "px") : e._text.css("padding-bottom", "20px")) : (e._text.removeClass("plugin_w680_w980").removeClass("plugin_w980_w1360").addClass("plugin_w1360"),
                    n.height < e.wrapper.height() ? e._text.css("padding-bottom", .5 * (e.wrapper.height() - n.height) + 24 + "px") : e._text.css("padding-bottom", "24px"))
                }
            }
        })
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#71#
    var n = function(e, t, i) {
        return '<div class="plugin_box" data-player-hook="subtitles">\t\t<div class="plugin_inner plugin_w680_w980 plugin_w1360" data-player-hook="subtitles_text">\t\t<div class="plugin_ch" data-player-hook="subtitles_ch">我认为她是在保护她某位家人，我不会说是谁，因为我真的不知道可能是谁做了这件事，但我相信是某个他们都很爱的人。</div>\t</div></div>'
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#72#
    var n = function(e, t, i) {
        var n = e(13)
          , o = (e(8),
        e(12),
        e(73))
          , a = e(74);
        i.exports = n("SubtitlesData", {
            construct: function() {
                var e = this;
                e.name = "SubtitlesData",
                e.xmlparser = null
            },
            methods: {
                updateSubtitlesUrl: function(e) {
                    var t = this;
                    t.subtitlesUrl = e,
                    t._requsetSubtitlesData()
                },
                _requsetSubtitlesData: function() {
                    var e = this;
                    e.subtitlesUrl && o.load(e.subtitlesUrl, function(t, i) {
                        if (200 == i.status) {
                            var n = t.response;
                            if (n) {
                                var o = new Uint8Array(n)
                                  , r = e.utf8ArrayToStr(o)
                                  , c = (new a).xml_str2json(r);
                                if (c && c.xml && c.xml.dia) {
                                    for (var s = 0; s < c.xml.dia.length; s++)
                                        c.xml.dia[s].st && c.xml.dia[s].et && (c.xml.dia[s].st = parseInt(c.xml.dia[s].st, 10),
                                        c.xml.dia[s].et = parseInt(c.xml.dia[s].et, 10),
                                        c.xml.dia[s].sub = c.xml.dia[s].sub.replace(/\n/gi, "<br/>"));
                                    e._data = c.xml.dia
                                }
                            }
                        }
                    })
                },
                utf8ArrayToStr: function(e) {
                    var t, i, n, o, a, r;
                    for (t = "",
                    n = e.length,
                    i = 0; i < n; )
                        switch ((o = e[i++]) >> 4) {
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                            t += String.fromCharCode(o);
                            break;
                        case 12:
                        case 13:
                            a = e[i++],
                            t += String.fromCharCode((31 & o) << 6 | 63 & a);
                            break;
                        case 14:
                            a = e[i++],
                            r = e[i++],
                            t += String.fromCharCode((15 & o) << 12 | (63 & a) << 6 | (63 & r) << 0)
                        }
                    return t
                },
                getDataByCurtime: function(e) {
                    for (var t = this, i = 0, n = t._data.length - 1, o = 0, a = {}; i <= n; ) {
                        if (o = parseInt((i + n) / 2, 10),
                        a = t._data[o],
                        e >= a.st && e <= a.et)
                            return a;
                        e < a.st ? n = o - 1 : i = o + 1
                    }
                    return null
                }
            }
        })
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#73#
    var n = function(e, t, i) {
        var n = e(13)
          , o = n("XMLParser", {
            methods: {
                parse: function(e) {
                    var t = null;
                    if (!(window.DOMParser && document.implementation && document.implementation.createDocument))
                        return null;
                    try {
                        t = (new DOMParser).parseFromString(e, "text/xml")
                    } catch (e) {}
                    return t
                },
                load: function(e, t) {
                    var i = null;
                    window.XMLHttpRequest && (i = new XMLHttpRequest),
                    null != i ? (i.open("GET", e, !0),
                    i.responseType = "arraybuffer",
                    i.send(null),
                    i.onload = function(e) {
                        t(i, this)
                    }
                    ) : alert("Your browser does not support XMLHTTP.")
                }
            }
        });
        i.exports = new o
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#74#
    var n = function(e, t, i) {
        return function(e, n) {
            "function" == typeof define && define.amd ? define([], n) : "object" == typeof t ? i.exports = n() : e.X2JS = n()
        }(this, function() {
            return function(e) {
                function t(e) {
                    var t = e.localName;
                    return null == t && (t = e.baseName),
                    null != t && "" != t || (t = e.nodeName),
                    t
                }
                function i(e) {
                    return e.prefix
                }
                function n(e) {
                    return "string" == typeof e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") : e
                }
                function o(e, t, i, n) {
                    for (var o = 0; o < e.length; o++) {
                        var a = e[o];
                        if ("string" == typeof a) {
                            if (a == n)
                                break
                        } else if (a instanceof RegExp) {
                            if (a.test(n))
                                break
                        } else if ("function" == typeof a && a(t, i, n))
                            break
                    }
                    return o != e.length
                }
                function a(t, i, n) {
                    switch (e.arrayAccessForm) {
                    case "property":
                        t[i]instanceof Array ? t[i + "_asArray"] = t[i] : t[i + "_asArray"] = [t[i]]
                    }
                    !(t[i]instanceof Array) && e.arrayAccessFormPaths.length > 0 && o(e.arrayAccessFormPaths, t, i, n) && (t[i] = [t[i]])
                }
                function r(e) {
                    var t = e.split(/[-T:+Z]/g)
                      , i = new Date(t[0],t[1] - 1,t[2])
                      , n = t[5].split(".");
                    if (i.setHours(t[3], t[4], n[0]),
                    n.length > 1 && i.setMilliseconds(n[1]),
                    t[6] && t[7]) {
                        var o = 60 * t[6] + Number(t[7]);
                        o = 0 + ("-" == (/\d\d-\d\d:\d\d$/.test(e) ? "-" : "+") ? -1 * o : o),
                        i.setMinutes(i.getMinutes() - o - i.getTimezoneOffset())
                    } else
                        -1 !== e.indexOf("Z", e.length - 1) && (i = new Date(Date.UTC(i.getFullYear(), i.getMonth(), i.getDate(), i.getHours(), i.getMinutes(), i.getSeconds(), i.getMilliseconds())));
                    return i
                }
                function c(t, i, n) {
                    if (e.datetimeAccessFormPaths.length > 0) {
                        var a = n.split(".#")[0];
                        return o(e.datetimeAccessFormPaths, t, i, a) ? r(t) : t
                    }
                    return t
                }
                function s(t, i, n, a) {
                    return !(i == w.ELEMENT_NODE && e.xmlElementsFilter.length > 0) || o(e.xmlElementsFilter, t, n, a)
                }
                function p(n, o) {
                    if (n.nodeType == w.DOCUMENT_NODE) {
                        for (var r = new Object, d = n.childNodes, l = 0; l < d.length; l++) {
                            var u = d.item(l);
                            if (u.nodeType == w.ELEMENT_NODE) {
                                var f = t(u);
                                r[f] = p(u, f)
                            }
                        }
                        return r
                    }
                    if (n.nodeType == w.ELEMENT_NODE) {
                        var r = new Object;
                        r.__cnt = 0;
                        for (var d = n.childNodes, l = 0; l < d.length; l++) {
                            var u = d.item(l)
                              , f = t(u);
                            if (u.nodeType != w.COMMENT_NODE) {
                                var g = o + "." + f;
                                s(r, u.nodeType, f, g) && (r.__cnt++,
                                null == r[f] ? (r[f] = p(u, g),
                                a(r, f, g)) : (null != r[f] && (r[f]instanceof Array || (r[f] = [r[f]],
                                a(r, f, g))),
                                r[f][r[f].length] = p(u, g)))
                            }
                        }
                        for (var h = 0; h < n.attributes.length; h++) {
                            var m = n.attributes.item(h);
                            r.__cnt++,
                            r[e.attributePrefix + m.name] = m.value
                        }
                        var v = i(n);
                        return null != v && "" != v && (r.__cnt++,
                        r.__prefix = v),
                        null != r["#text"] && (r.__text = r["#text"],
                        r.__text instanceof Array && (r.__text = r.__text.join("\n")),
                        e.stripWhitespaces && (r.__text = r.__text.trim()),
                        delete r["#text"],
                        "property" == e.arrayAccessForm && delete r["#text_asArray"],
                        r.__text = c(r.__text, f, o + "." + f)),
                        null != r["#cdata-section"] && (r.__cdata = r["#cdata-section"],
                        delete r["#cdata-section"],
                        "property" == e.arrayAccessForm && delete r["#cdata-section_asArray"]),
                        0 == r.__cnt && "text" == e.emptyNodeForm ? r = "" : 1 == r.__cnt && null != r.__text ? r = r.__text : 1 != r.__cnt || null == r.__cdata || e.keepCData ? r.__cnt > 1 && null != r.__text && e.skipEmptyTextNodesForObj && (e.stripWhitespaces && "" == r.__text || "" == r.__text.trim()) && delete r.__text : r = r.__cdata,
                        delete r.__cnt,
                        !e.enableToStringFunc || null == r.__text && null == r.__cdata || (r.toString = function() {
                            return (null != this.__text ? this.__text : "") + (null != this.__cdata ? this.__cdata : "")
                        }
                        ),
                        r
                    }
                    if (n.nodeType == w.TEXT_NODE || n.nodeType == w.CDATA_SECTION_NODE)
                        return n.nodeValue
                }
                function d(t, i, o, a) {
                    var r = "<" + (null != t && null != t.__prefix ? t.__prefix + ":" : "") + i;
                    if (null != o)
                        for (var c = 0; c < o.length; c++) {
                            var s = o[c]
                              , p = t[s];
                            e.escapeMode && (p = n(p)),
                            r += " " + s.substr(e.attributePrefix.length) + "=",
                            e.useDoubleQuotes ? r += '"' + p + '"' : r += "'" + p + "'"
                        }
                    return r += a ? "/>" : ">"
                }
                function l(e, t) {
                    return "</" + (null != e.__prefix ? e.__prefix + ":" : "") + t + ">"
                }
                function u(e, t) {
                    return -1 !== e.indexOf(t, e.length - t.length)
                }
                function f(t, i) {
                    return !!("property" == e.arrayAccessForm && u(i.toString(), "_asArray") || 0 == i.toString().indexOf(e.attributePrefix) || 0 == i.toString().indexOf("__") || t[i]instanceof Function)
                }
                function g(e) {
                    var t = 0;
                    if (e instanceof Object)
                        for (var i in e)
                            f(e, i) || t++;
                    return t
                }
                function h(t, i, n) {
                    return 0 == e.jsonPropertiesFilter.length || "" == n || o(e.jsonPropertiesFilter, t, i, n)
                }
                function m(t) {
                    var i = [];
                    if (t instanceof Object)
                        for (var n in t)
                            -1 == n.toString().indexOf("__") && 0 == n.toString().indexOf(e.attributePrefix) && i.push(n);
                    return i
                }
                function v(t) {
                    var i = "";
                    return null != t.__cdata && (i += "<![CDATA[" + t.__cdata + "]]>"),
                    null != t.__text && (e.escapeMode ? i += n(t.__text) : i += t.__text),
                    i
                }
                function b(t) {
                    var i = "";
                    return t instanceof Object ? i += v(t) : null != t && (e.escapeMode ? i += n(t) : i += t),
                    i
                }
                function _(e, t) {
                    return "" === e ? t : e + "." + t
                }
                function x(e, t, i, n) {
                    var o = "";
                    if (0 == e.length)
                        o += d(e, t, i, !0);
                    else
                        for (var a = 0; a < e.length; a++)
                            o += d(e[a], t, m(e[a]), !1),
                            o += y(e[a], _(n, t)),
                            o += l(e[a], t);
                    return o
                }
                function y(e, t) {
                    var i = "";
                    if (g(e) > 0)
                        for (var n in e)
                            if (!f(e, n) && ("" == t || h(e, n, _(t, n)))) {
                                var o = e[n]
                                  , a = m(o);
                                if (null == o || void 0 == o)
                                    i += d(o, n, a, !0);
                                else if (o instanceof Object)
                                    if (o instanceof Array)
                                        i += x(o, n, a, t);
                                    else if (o instanceof Date)
                                        i += d(o, n, a, !1),
                                        i += o.toISOString(),
                                        i += l(o, n);
                                    else {
                                        var r = g(o);
                                        r > 0 || null != o.__text || null != o.__cdata ? (i += d(o, n, a, !1),
                                        i += y(o, _(t, n)),
                                        i += l(o, n)) : i += d(o, n, a, !0)
                                    }
                                else
                                    i += d(o, n, a, !1),
                                    i += b(o),
                                    i += l(o, n)
                            }
                    return i += b(e)
                }
                e = e || {},
                function() {
                    void 0 === e.escapeMode && (e.escapeMode = !0),
                    e.attributePrefix = e.attributePrefix || "_",
                    e.arrayAccessForm = e.arrayAccessForm || "none",
                    e.emptyNodeForm = e.emptyNodeForm || "text",
                    void 0 === e.enableToStringFunc && (e.enableToStringFunc = !0),
                    e.arrayAccessFormPaths = e.arrayAccessFormPaths || [],
                    void 0 === e.skipEmptyTextNodesForObj && (e.skipEmptyTextNodesForObj = !0),
                    void 0 === e.stripWhitespaces && (e.stripWhitespaces = !0),
                    e.datetimeAccessFormPaths = e.datetimeAccessFormPaths || [],
                    void 0 === e.useDoubleQuotes && (e.useDoubleQuotes = !1),
                    e.xmlElementsFilter = e.xmlElementsFilter || [],
                    e.jsonPropertiesFilter = e.jsonPropertiesFilter || [],
                    void 0 === e.keepCData && (e.keepCData = !1)
                }();
                var w = {
                    ELEMENT_NODE: 1,
                    TEXT_NODE: 3,
                    CDATA_SECTION_NODE: 4,
                    COMMENT_NODE: 8,
                    DOCUMENT_NODE: 9
                };
                this.parseXmlString = function(e) {
                    var t = window.ActiveXObject || "ActiveXObject"in window;
                    if (void 0 === e)
                        return null;
                    var i;
                    if (window.DOMParser) {
                        var n = new window.DOMParser
                          , o = null;
                        if (!t)
                            try {
                                o = n.parseFromString("INVALID", "text/xml").getElementsByTagName("parsererror")[0].namespaceURI
                            } catch (e) {
                                o = null
                            }
                        try {
                            i = n.parseFromString(e, "text/xml"),
                            null != o && i.getElementsByTagNameNS(o, "parsererror").length > 0 && (i = null)
                        } catch (e) {
                            i = null
                        }
                    } else
                        0 == e.indexOf("<?") && (e = e.substr(e.indexOf("?>") + 2)),
                        i = new ActiveXObject("Microsoft.XMLDOM"),
                        i.async = "false",
                        i.loadXML(e);
                    return i
                }
                ,
                this.asArray = function(e) {
                    return void 0 === e || null == e ? [] : e instanceof Array ? e : [e]
                }
                ,
                this.toXmlDateTime = function(e) {
                    return e instanceof Date ? e.toISOString() : "number" == typeof e ? new Date(e).toISOString() : null
                }
                ,
                this.asDateTime = function(e) {
                    return "string" == typeof e ? r(e) : e
                }
                ,
                this.xml2json = function(e) {
                    return p(e)
                }
                ,
                this.xml_str2json = function(e) {
                    var t = this.parseXmlString(e);
                    return null != t ? this.xml2json(t) : null
                }
                ,
                this.json2xml_str = function(e) {
                    return y(e, "")
                }
                ,
                this.json2xml = function(e) {
                    var t = this.json2xml_str(e);
                    return this.parseXmlString(t)
                }
                ,
                this.getVersion = function() {
                    return "1.2.0"
                }
            }
        })
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#75#
    var n = function(e, t, i) {
        var n = e(13)
          , o = e(27)
          , a = e(5)
          , r = e(21)
          , c = e(29)
          , s = e(47)
          , p = e(12)
          , d = e(33)
          , l = e(25)
          , u = e(67)
          , f = e(45)
          , g = e(68)
          , h = e(76)
          , m = e(28)
          , v = new p("ares")
          , b = e(1)
          , _ = e(3);
        i.exports = n("PluginAD", {
            construct: function() {
                var e = this;
                e.name = "ad",
                e._firstShow = !0,
                e._sdkloaded = !1;
                var t = document.createElement("div");
                o(t).attr("data-cupid", "container"),
                o(e.wrapper).append(t),
                e._api = new h(t,e.core,e.skin)
            },
            extend: u,
            methods: {
                init: function() {
                    var e = this;
                    e._setAresMW(),
                    e._loadsdk(),
                    e._initEvents()
                },
                _loadsdk: function() {
                    var e = this
                      , t = _.getVars().h5adsrc;
                    "undefined" == typeof ares3 ? t && "" !== t ? (l.sTime_adInit = new Date - l.pgct,
                    s.seriesLoadScripts(t, function(t) {
                        l.usedTime_adInit = new Date - l.sTime_adInit - l.pgct,
                        t && "undefined" != typeof ares3 ? (e._setAresSDK(),
                        e.fire({
                            type: "aresloaded"
                        })) : v.error("h5 ad sdk load error!")
                    })) : v.error("params ares src is null. ") : e._setAresSDK()
                },
                _initEvents: function() {
                    function e() {
                        (a.os.ios || a.os.android) && t._firstShow ? t.skin.once("bigplay:play", function() {
                            t._firstShow = !1,
                            t.initares()
                        }) : t.initares()
                    }
                    var t = this;
                    t.core.on(f.NTF_VideoChange, function(e) {
                        var i = e.data.preMovieInfo;
                        if (i)
                            try {
                                v.debug("stop ares: " + i.tvid),
                                t.core.getAres().stop({
                                    videoEventId: d.getEventId(i.tvid)
                                })
                            } catch (e) {}
                    }),
                    t.core.on(f.NTF_VRSReady, function(i) {
                        t._movieinfo = i.data.movieinfo,
                        t._movieinfo.isPreload || e()
                    }),
                    t.core.on(f.NTF_VRSPreloaded, function(i) {
                        t._movieinfo = i.data.movieinfo,
                        e()
                    }),
                    t.core.on(f.Status_AresEnded, function(e) {
                        t._aresdone(e.data)
                    }),
                    t.skin.on(g.NTF_DefinitionListShow, function(e) {
                        var i = t.core.getAres();
                        i && i.emit(i.DEFINITION_SWITCHING_SHOW)
                    }),
                    t.skin.on(g.NTF_DefinitionADShow, function(e) {
                        var i = e.data
                          , n = t.core.getAres();
                        n && n.emit(n.IMPRESSION, {
                            id: i.id
                        })
                    }),
                    t.skin.on(g.NTF_DefinitionADClick, function(e) {
                        var i = e.data
                          , n = t.core.getAres();
                        n && n.emit(n.CLICK, {
                            id: i.id
                        })
                    }),
                    c.on("change", function() {
                        t._sdkloaded && t.core.getAres().resize()
                    }),
                    m.on("resize", function() {
                        t._sdkloaded && t.core.getAres().resize()
                    })
                },
                _aresdone: function(e) {
                    var t = this
                      , i = e.rollType;
                    v.debug("ares done! " + (i ? "(" + i + ")" : "")),
                    t.core.abortAllAres(i),
                    (t.core.checkADSkipped() && t.core.autoplay || !t.core.checkADSkipped() || a.os.ios || a.os.android) && t.core.isPaused() && (v.debug("manual play"),
                    t.core.play())
                },
                initares: function() {
                    var e = this;
                    e._sdkloaded ? e._initAres() : e.on("aresloaded", function() {
                        e._initAres()
                    })
                },
                _initAres: function() {
                    var e, t = this, i = t._movieinfo, n = t.core.getInfoFromVideoList(i.tvid, i.vid);
                    e = n && n.cid ? n.cid : t.core.h5vars.cid || "",
                    t.core.h5vars.isCid || !a.os.android && !a.os.ios || (e = navigator.userAgent.indexOf("MicroMessenger") > -1 ? "qc_105092_300416" : "qc_100001_100103"),
                    r.isVip(function(n) {
                        t._api._isVip = n;
                        var o = (i.videoQipuId || i.tvid) + ""
                          , c = {
                            autoLoad: !0,
                            autoRender: !0,
                            isMacH5: !0,
                            isPreload: !!i.isPreload,
                            adPlayerId: e,
                            episodeId: o,
                            videoEventId: d.generate(o),
                            videoDefinition: i.vd,
                            showVoiceIcon: !(a.os.android || a.os.ios),
                            videoMidware: t._api,
                            isVIP: n,
                            locale: _.getVars().local,
                            passportId: r.getUid(),
                            passportCookie: r.passportCookie(),
                            clientVersion: b.version,
                            videoContainer: t._api.video()
                        };
                        setTimeout(function() {
                            t.core.getAres().init(c)
                        }, 0)
                    })
                },
                _setAresSDK: function() {
                    var e = this;
                    e._sdkloaded = !0,
                    v.log("ares version: " + ares3.version),
                    e.core.setAres(ares3)
                },
                _setAresMW: function() {
                    var e = this;
                    e.core.setAresMW(e._api)
                }
            }
        })
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#76#
    var n = function(e, t, i) {
        function n() {
            var e = new Date;
            return e.getFullYear() + "" + (e.getMonth() + 1) + e.getDate()
        }
        function o() {
            var e = d.read(b)
              , t = n()
              , i = 0;
            return e && (e = e.split("|"),
            t = e[0],
            i = parseFloat(e[1])),
            {
                day: t,
                totalTime: i
            }
        }
        function a(e) {
            var t = o()
              , i = n();
            t.day === i ? t.totalTime += e : t.totalTime = e,
            d.write(b, i + "|" + t.totalTime)
        }
        var r, c, s = e(13), p = e(18), d = e(14), l = e(12), u = e(26), f = e(21), g = (e(9),
        e(10)), h = e(19), m = e(65), v = e(45), b = "QiyiPlayerTimePlayedInDay", _ = new l("AdApi"), x = s("adBussiness", {
            construct: function(e, t) {
                var i = this;
                e.on(v.NTF_AD_NotifyManager, function(e) {
                    i.fire(e)
                })
            },
            extend: p,
            methods: {}
        }), y = s("adapi", {
            construct: function(e, t, i) {
                var n, o = this;
                o._isVip = !1,
                o._user = f,
                o.bussiness = new x(t,i),
                o._container = e,
                r = t,
                c = i;
                var s = function(e, t) {
                    var i = {
                        type: e,
                        gas: o.getCurrentGas()
                    };
                    t && (i.data = t,
                    t.gas && (i.gas = t.gas)),
                    o.fire(i)
                };
                r.on(v.NTF_StatusChanged, function(e) {
                    switch (e.data.state) {
                    case v.Status_AdLoadstart:
                        s("loadstart", e.data);
                        break;
                    case v.Status_Ready:
                        s("ready", e.data);
                        break;
                    case v.Status_Play:
                        s("play", e.data);
                        break;
                    case v.Status_AdPlaying:
                    case v.Status_Playing:
                        s("playing", e.data);
                        break;
                    case v.Status_AdPaused:
                    case v.Status_Paused:
                        s("pause", e.data);
                        break;
                    case v.Status_AdWaiting:
                    case v.Status_Waiting:
                        s("waiting", e.data);
                        break;
                    case v.Status_AdError:
                    case v.Status_PlayError:
                        s("error", e.data);
                        break;
                    case v.Status_AdStalled:
                        s("stalled", e.data);
                        break;
                    case v.Status_AdPlayEnded:
                    case v.Status_End_Play:
                        s("ended", e.data)
                    }
                }),
                r.on(v.NTF_AD_TimeUpdate, function(e) {
                    s("timeupdate", e.data)
                }),
                r.on(v.NTF_Seeking, function(e) {
                    s("seeked", e.data)
                }),
                r.on(v.NTF_TimeUpdate, function(e) {
                    s("timeupdate", e.data);
                    var i = t.getCurrenttime()
                      , o = i - n;
                    n && o > 0 && o < 1 && a(o),
                    n = i
                }),
                u.on("change", function(e) {
                    s("exit" === e.data ? "exitfullscreen" : "fullscreen")
                }),
                f.on("infoset", function() {
                    f.isVip(function(e) {
                        o._isVip = e
                    })
                })
            },
            extend: p,
            methods: {
                load: function(e) {
                    var t = this;
                    e.file && !isNaN(e.offset) && e.offset >= 0 ? t.bussiness.fire({
                        type: "_playdata_",
                        data: e
                    }) : _.warn("load error data parameter: " + l.stringify(e))
                },
                getEngineType: function() {
                    return r.getEngineType().toLowerCase()
                },
                getCurrentGas: function() {
                    return r.getCurrentGas()
                },
                abort: function() {
                    r.abortAres()
                },
                isVIP: function() {
                    return this._isVip
                },
                getUserInfo: function() {
                    var e = !1;
                    return this._user.isVip(function(t) {
                        e = t
                    }),
                    {
                        isVIP: e,
                        passportCookie: this._user.passportCookie(),
                        passportId: this._user.getUid(),
                        isLogin: this._user.isLogin(),
                        uaaUserId: g.get("QC005") || h.getJsuid()
                    }
                },
                adcontainer: function() {
                    return this._container
                },
                video: function() {
                    return r.video()
                },
                play: function(e) {
                    r.play(e)
                },
                pause: function(e) {
                    r.pause(e)
                },
                addEventListener: function(e, t) {
                    this.on(e, t)
                },
                removeEventListener: function(e, t) {
                    this.un(e, t)
                },
                src: function(e) {
                    if (r) {
                        if (1 !== arguments.length)
                            return r.getSrc() || "";
                        _.error("mw is not support set src!")
                    } else
                        _.error("core is null")
                },
                volume: function(e) {
                    if (r) {
                        if (!e)
                            return r.getVolume();
                        r.setVolume(e)
                    } else
                        _.error("core is null")
                },
                muted: function(e) {
                    if (r) {
                        if ("boolean" != typeof e)
                            return r.getMuted();
                        r.setMuted(e)
                    } else
                        _.error("core is null")
                },
                height: function() {
                    return c ? c.videoWrapper.height() : 0
                },
                width: function() {
                    return c ? c.videoWrapper.width() : 0
                },
                currentTime: function() {
                    return r.getCurrenttime()
                },
                duration: function() {
                    return r.getDuration()
                },
                buffered: function() {
                    return r.getBufferTime()
                },
                sendUserActionPingback: function(e) {
                    m.getInterface().sendUserActionPingback(e)
                },
                fullscreentoggle: function() {
                    u.toggle()
                },
                isFullScreen: function() {
                    return u.isFullScreen()
                },
                videoPlayedDurationInDay: function() {
                    return o().totalTime
                }
            }
        });
        i.exports = y
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, , , , , , , , , , function(e, t, i) {
    var n = function(e, t, i) {
        var n = e(18)
          , o = e(13)
          , a = e(12)
          , r = e(3)
          , c = new a("h5PlayerAPIProxy")
          , s = o("h5PlayerAPIProxy", {
            construct: function() {
                var e = this;
                e.__api_callbacks = [];
                var t = e.fire;
                e.fire = function(i) {
                    t.call(e, i),
                    e.__api_callbacks.forEach(function(t) {
                        t.call(e, i)
                    })
                }
                ,
                e.addCallback = function(e) {
                    this.__api_callbacks.push(e)
                }
            },
            extend: n,
            methods: {
                callJsDoSomething: function(e) {
                    c.log("call js setJsDoSomething: " + e);
                    var t = {};
                    t.type = "setJsDoSomething",
                    t.data = {
                        origin: r.getVars().origin || "flash",
                        handleType: e
                    },
                    this.fire(t)
                },
                callJsFindGoods: function(e) {
                    c.log("call js callJsFindGoods, time:: " + e);
                    var t = {};
                    t.type = "findGoods",
                    t.data = {
                        origin: r.getVars().origin || "flash",
                        time: e
                    },
                    this.fire(t)
                },
                callJsRequestVideoListByPage: function(e) {
                    c.log("call js requestVideoListByPage, pageno:: " + e);
                    var t = {};
                    t.type = "requestVideoListByPage",
                    t.data = {
                        origin: r.getVars().origin || "flash",
                        pageno: e
                    },
                    this.fire(t)
                },
                callJsRequestChangeVideo: function(e) {
                    c.log("call js requestChangeVideo, videoIndex:: " + e.pd);
                    var t = {};
                    t.type = "requestChangeVideo",
                    t.data = {
                        origin: r.getVars().origin || "flash",
                        pd: e.pd,
                        vid: e.vid,
                        tvid: e.tvid
                    },
                    this.fire(t)
                }
            }
        });
        i.exports = new s
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, i) {
    var n = function(e, t, i) {
        var n = e(17)
          , o = e(126)
          , a = e(13)
          , r = e(15)
          , c = a("FlashAdapter", {
            construct: function(e) {
                var t = this;
                t._videoid = e.vid,
                t._tvid = e.tvid,
                t._player = new o(e),
                this._player.on(r.QYPLAYER_STATE_CHANGE, function(e) {
                    e = e || {},
                    e.data = e.data || {};
                    var i = e.data.state || "";
                    e.data.vid != t._videoid && (t._videoid = e.data.vid,
                    t._tvid = e.data.tvid,
                    i.toLocaleLowerCase() == r.QYPLAYER_STATUS_DATA_READY && t.getVideoInfo(function(e) {
                        t.fire({
                            type: r.QYPLAYER_VIDEO_CHANGE,
                            data: e
                        })
                    }),
                    t.fire({
                        type: r.QYPLAYER_VID_CHANGE,
                        data: e.data
                    })),
                    t.fire({
                        type: r.QYPLAYER_STATE_CHANGE,
                        data: e.data
                    })
                }),
                this._player.on(r.QYPLAYER_NEXT_VIDEO, function(e) {
                    t.fire({
                        type: r.QYPLAYER_NEXT_VIDEO
                    })
                }),
                this._player.on(r.QYPLAYER_LOAD_COMPLETE, function(e) {
                    e = e || {},
                    e.data = e.data || {},
                    t.fire({
                        type: r.QYPLAYER_LOAD_COMPLETE,
                        data: e.data
                    })
                }),
                this._player.on(r.QYPLAYER_SET_LIGHT, function(e) {
                    e = e || {},
                    e.data = e.data || {};
                    var i = "false" == e.data.open;
                    t.fire({
                        type: r.QYPLAYER_SET_LIGHT,
                        data: i
                    })
                }),
                this._player.on(r.QYPLAYER_MOVETO_QITAN, function() {
                    t.fire({
                        type: r.QYPLAYER_MOVETO_QITAN
                    })
                }),
                this._player.on(r.QYPLAYER_LOAD_SUCCESS, function(i) {
                    i.data = i.data || {},
                    i.data.playerId = e.parentId,
                    t.fire({
                        type: r.QYPLAYER_LOAD_SUCCESS,
                        data: i.data
                    })
                }),
                this._player.on(r.QYPLAYER_SHOW_LOGIN_PANEL, function(e) {
                    t.fire({
                        type: r.QYPLAYER_SHOW_LOGIN_PANEL,
                        data: e.data
                    })
                }),
                this._player.on(r.QYPLAYER_EXPAND, function(e) {
                    t.fire({
                        type: r.QYPLAYER_EXPAND,
                        data: e.data
                    })
                }),
                this._player.on(r.QYPLAYER_AUTHENTICATION_RESULE, function(e) {
                    t.fire({
                        type: r.QYPLAYER_AUTHENTICATION_RESULE,
                        data: {
                            isTryWatch: "true" == e.data.isTryWatch,
                            tvid: e.data.tvid
                        }
                    })
                }),
                this._player.on(r.QYPLAYER_RECHARGE, function(e) {
                    e = e || {},
                    e.data = e.data || {};
                    var i = e.data.code
                      , n = e.data.from
                      , o = e.data.tvid
                      , a = e.data.aid
                      , c = e.data.vid;
                    t.fire({
                        type: r.QYPLAYER_RECHARGE,
                        data: {
                            code: i,
                            from: n,
                            tvid: o,
                            aid: a,
                            vid: c
                        }
                    })
                }),
                this._player.on(r.QYPLAYER_SUBSCRIBE, function() {
                    t.fire({
                        type: r.QYPLAYER_SUBSCRIBE
                    })
                }),
                this._player.on(r.QYPLAYER_REFRESH_PAGE, function() {
                    t.fire({
                        type: r.QYPLAYER_REFRESH_PAGE
                    })
                }),
                this._player.on(r.QYPLAYER_DOWNLOAD, function(e) {
                    t.fire({
                        type: r.QYPLAYER_DOWNLOAD,
                        data: e.data
                    })
                }),
                this._player.on(r.QYPLAYER_REQUEST_VIDEOLIST, function(e) {
                    t.fire({
                        type: r.QYPLAYER_REQUEST_VIDEOLIST,
                        data: e
                    })
                }),
                this._player.on(r.QYPLAYER_SWITCH_FULL_SCREEN, function(e) {
                    t.fire({
                        type: r.QYPLAYER_SWITCH_FULL_SCREEN,
                        data: e.data.value
                    })
                }),
                this._player.on(r.QYPLAYER_ADD_TO_TABLE, function() {
                    t.fire({
                        type: r.QYPLAYER_ADD_TO_TABLE
                    })
                }),
                this._player.on(r.QYPLAYER_FOCUS_TIPS, function(e) {
                    t.fire({
                        type: r.QYPLAYER_FOCUS_TIPS,
                        data: e.data
                    })
                }),
                this._player.on(r.QYPLAYER_FOCUS_UPLOADER, function(e) {
                    t.fire({
                        type: r.QYPLAYER_FOCUS_UPLOADER,
                        data: e.data
                    })
                }),
                this._player.on(r.QYPLAYER_FIND_GOODS, function(e) {
                    t.fire({
                        type: r.QYPLAYER_FIND_GOODS,
                        data: e.data
                    })
                }),
                this._player.on(r.QYPLAYER_BARRAGE_REPLAY, function(e) {
                    t.fire({
                        type: r.QYPLAYER_BARRAGE_REPLAY,
                        data: e.data
                    })
                }),
                this._player.on(r.QYPLAYER_BARRAGE_RECEIVE_DATA, function(e) {
                    t.fire({
                        type: r.QYPLAYER_BARRAGE_RECEIVE_DATA,
                        data: e.data
                    })
                }),
                this._player.on(r.QYPLAYER_SET_BARRAGE_INTERACT_INFO, function(e) {
                    t.fire({
                        type: r.QYPLAYER_SET_BARRAGE_INTERACT_INFO,
                        data: e.data
                    })
                }),
                this._player.on(r.QYPLAYER_SET_BARRAGE_CONFIG_INFO, function(e) {
                    t.fire({
                        type: r.QYPLAYER_SET_BARRAGE_CONFIG_INFO,
                        data: e.data
                    })
                }),
                this._player.on(r.QYPLAYER_SET_BARRAGE_CHANNEL_CONFIG_INFO, function(e) {
                    t.fire({
                        type: r.QYPLAYER_SET_BARRAGE_CHANNEL_CONFIG_INFO,
                        data: e.data
                    })
                }),
                this._player.on(r.QYPLAYER_PGC_FOLLOW, function(e) {
                    t.fire({
                        type: r.QYPLAYER_PGC_FOLLOW,
                        data: e.data
                    })
                }),
                this._player.on(r.QYPLAYER_SHOW_DOWNLOAD_APPPOP, function(e) {
                    t.fire({
                        type: r.QYPLAYER_SHOW_DOWNLOAD_APPPOP,
                        data: e.data
                    })
                }),
                this._player.on(r.QYPLAYER_CHECK_CLIENT_INSTALL, function(e) {
                    t.fire({
                        type: r.QYPLAYER_CHECK_CLIENT_INSTALL,
                        data: e.data
                    })
                }),
                this._player.on(r.QYPLAYER_REQUEST_SEND_PINGBACK, function(e) {
                    t.fire({
                        type: r.QYPLAYER_REQUEST_SEND_PINGBACK,
                        data: e.data
                    })
                }),
                this._player.on(r.QYPLAYER_DOSOMETHING, function(e) {
                    t.fire({
                        type: r.QYPLAYER_DOSOMETHING,
                        data: e.data
                    })
                }),
                this._player.on(r.QYPLAYER_FOLLOW_UPNEXT_LOAD, function(e) {
                    t.fire({
                        type: r.QYPLAYER_FOLLOW_UPNEXT_LOAD,
                        data: e.data
                    })
                }),
                this._player.on(r.QYPLAYER_USER_CLICK_SCORE, function(e) {
                    t.fire({
                        type: r.QYPLAYER_USER_CLICK_SCORE,
                        data: e.data
                    })
                }),
                this._player.on(r.QYPLAYER_BARRAGE_STATE_CHANGE, function(e) {
                    t.fire({
                        type: r.QYPLAYER_BARRAGE_STATE_CHANGE,
                        data: e.data
                    })
                }),
                this._player.on(r.QYPLAYER_REQUEST_REWARD, function(e) {
                    t.fire({
                        type: r.QYPLAYER_REQUEST_REWARD,
                        data: e.data
                    })
                }),
                this._player.on(r.QYPLAYER_COMMENT_ALLOWED, function(e) {
                    t.fire({
                        type: r.QYPLAYER_COMMENT_ALLOWED,
                        data: e.data
                    })
                })
            },
            extend: n,
            methods: {
                getIsInMainVideo: function(e) {
                    this._player.getIsInMainVideo(e)
                },
                setCyclePlay: function() {
                    this._player.setCyclePlay()
                },
                getQiyiPlayerInfo: function(e) {
                    this._player.getQiyiPlayerInfo(e)
                },
                getQiyiVideoInfo: function(e) {
                    this._player.getQiyiVideoInfo(e)
                },
                setQiyiSubscribe: function(e) {
                    this._player.setQiyiSubscribe(e)
                },
                setLight: function(e) {
                    this._player.setLight(e)
                },
                expand: function(e) {
                    this._player.expand(e)
                },
                setBarrageStatus: function(e) {
                    this._player.setBarrageStatus(e)
                },
                setSelfSendBarrageInfo: function(e) {
                    this._player.setSelfSendBarrageInfo(e)
                },
                setBarrageSetting: function(e) {
                    this._player.setBarrageSetting(e)
                },
                setActivityNoticeInfo: function(e) {
                    this._player.setActivityNoticeInfo(e)
                },
                zoomQiyiVideo: function(e) {
                    this._player.zoomQiyiVideo(e)
                },
                setTimeListener: function(e) {
                    this._player.setTimeListener(e)
                },
                getHasBarrageConfigInfo: function() {
                    this._player.getHasBarrageConfigInfo()
                },
                getHasBarrageChannelConfigInfo: function() {
                    this._player.getHasBarrageChannelConfigInfo()
                },
                getCommentConfigInfo: function() {
                    this._player.getCommentConfigInfo()
                },
                setSubscribeInfo: function(e) {
                    this._player.setSubscribeInfo(e)
                },
                setSubscribeStateChange: function(e) {
                    this._player.setSubscribeStateChange(e)
                },
                setContinuePlayState: function(e) {
                    this._player.setContinuePlayState(e)
                },
                getSwitchVideoType: function(e) {
                    this._player.getSwitchVideoType(e)
                },
                forceToSaveCurVideoInfo: function(e) {
                    this._player.forceToSaveCurVideoInfo(e)
                },
                getContinueData: function(e) {
                    this._player.getContinueData(e)
                },
                setQiyiVisits: function(e) {
                    this._player.setQiyiVisits(e)
                },
                initQiyiVideo: function(e) {
                    this._player.initQiyiVideo(e)
                },
                getQiyiPlayerType: function(e) {
                    return e && "function" == typeof e && e("flash"),
                    "flash"
                }
            }
        });
        i.exports = c
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#77#
    var n = function(e, t, i) {
        var n = e(13)
          , o = e(127)
          , a = e(18)
          , r = e(31)
          , c = function(e, t) {
            var i = t.functionName
              , n = t.parameter
              , o = t.callback || function() {}
            ;
            e && i && e[i] && o(void 0 === n ? e[i]() : "[object Object]" == Object.prototype.toString.apply(n) || "[object Array]" == Object.prototype.toString.apply(n) ? e[i](JSON.stringify(n)) : e[i](n))
        }
          , s = n("FlashPlayer", {
            extend: a,
            construct: function(e) {
                var t = this
                  , i = new o;
                t._swf = i.embed(e),
                t._playerId = e["parentId"] || "",
                t._param = e,
                t._prevCalls = [],
                t._firstTime = !0,
                t._swf && (t._swf.fire = function(e) {
                    try {
                        var i = JSON.parse(e);
                        if (i.data.origin && i.data.origin != t._swf.id)
                            return;
                        i.type = i.type,
                        setTimeout(function() {
                            try {
                                t.fire({
                                    type: i.type,
                                    data: i.data
                                })
                            } catch (e) {}
                        }, 0)
                    } catch (e) {
                        return
                    }
                }
                )
            },
            methods: {
                destroy: function() {
                    var e = this;
                    e._swf.parentNode.removeChild(e._swf),
                    e._swf = null
                },
                _flashcall: function(e, t, i) {
                    var n = {
                        callback: i,
                        functionName: e,
                        parameter: t
                    };
                    c(this._swf, n)
                },
                load: function(e) {
                    this._flashcall("loadQiyiVideo", e)
                },
                play: function() {
                    this._flashcall("playQiyiVideo")
                },
                resume: function() {
                    this._flashcall("resumeQiyiVideo")
                },
                replay: function() {
                    this._flashcall("replayQiyiVideo")
                },
                pause: function() {
                    this._flashcall("pauseQiyiVideo")
                },
                seek: function(e) {
                    this._flashcall("seekQiyiVideo", e)
                },
                stop: function() {
                    this._flashcall("stopQiyiVideo")
                },
                getPlayInfo: function(e) {
                    this._flashcall("getQiyiPlayerInfo", void 0, function(t) {
                        var i = t || ""
                          , n = i ? JSON.parse(i.replace(/\r/g, "").replace(/\n/g, "")) : "";
                        n && (n.currentTime = n.currentTime / 1e3,
                        e(n))
                    })
                },
                getVideoInfo: function(e, t, i) {
                    r.get({
                        tvid: t,
                        vid: i
                    }, e)
                },
                getIsInMainVideo: function(e) {
                    this._flashcall("getIsInMainVideo", void 0, e)
                },
                getPlayerId: function() {
                    return this._playerId
                },
                setCyclePlay: function() {
                    this._flashcall("setCyclePlay")
                },
                switchVideo: function(e) {
                    this._flashcall("switchVideo", e)
                },
                switchNextVideo: function() {
                    this._flashcall("switchNextVideo")
                },
                switchPreVideo: function() {
                    this._flashcall("switchPreVideo")
                },
                addVideoList: function(e) {
                    this._flashcall("addVideoList", e)
                },
                removeVideoList: function(e) {
                    this._flashcall("removeVideoList", e)
                },
                getQiyiPlayerInfo: function(e) {
                    this._flashcall("getQiyiPlayerInfo", void 0, e)
                },
                getQiyiVideoInfo: function(e) {
                    this._flashcall("getQiyiVideoInfo", void 0, e)
                },
                setQiyiUserLogin: function(e) {
                    this._flashcall("setQiyiUserLogin", e)
                },
                setQiyiSubscribe: function(e) {
                    this._flashcall("setQiyiSubscribe", e)
                },
                setLight: function(e) {
                    this._flashcall("setLight", e)
                },
                expand: function(e) {
                    this._flashcall("expand", e)
                },
                setBarrageStatus: function(e) {
                    this._flashcall("setBarrageStatus", e)
                },
                setSelfSendBarrageInfo: function(e) {
                    this._flashcall("setSelfSendBarrageInfo", e)
                },
                setSmallWindowMode: function(e) {
                    this._flashcall("setSmallWindowMode", e)
                },
                setBarrageSetting: function(e) {
                    this._flashcall("setBarrageSetting", e)
                },
                setActivityNoticeInfo: function(e) {
                    this._flashcall("setActivityNoticeInfo", e)
                },
                zoomQiyiVideo: function(e) {
                    this._flashcall("zoomQiyiVideo", e)
                },
                setTimeListener: function(e) {
                    this._flashcall("setTimeListener", e)
                },
                getHasBarrageConfigInfo: function() {
                    this._flashcall("getHasBarrageConfigInfo")
                },
                getHasBarrageChannelConfigInfo: function() {
                    this._flashcall("getHasBarrageChannelConfigInfo")
                },
                getCommentConfigInfo: function() {
                    this._flashcall("getCommentConfigInfo")
                },
                setSubscribeInfo: function(e) {
                    this._flashcall("setSubscribeInfo", e)
                },
                setSubscribeStateChange: function(e) {
                    this._flashcall("setSubscribeStateChange", e)
                },
                setContinuePlayState: function(e) {
                    this._flashcall("setContinuePlayState", e)
                },
                getSwitchVideoType: function(e) {
                    this._flashcall("getSwitchVideoType", void 0, e)
                },
                forceToSaveCurVideoInfo: function(e) {
                    this._flashcall("forceToSaveCurVideoInfo", e)
                },
                getContinueData: function(e) {
                    this._flashcall("getContinueData", e)
                },
                setQiyiVisits: function(e) {
                    this._flashcall("setQiyiVisits", e)
                },
                initQiyiVideo: function(e) {
                    this._flashcall("initQiyiVideo", e)
                },
                jsNotifyAdManager: function(e) {
                    this._flashcall("jsNotifyAdManager", e)
                },
                getQiyiPlayerLog: function(e) {
                    this._flashcall("getQiyiPlayerLog", void 0, e)
                },
                clearBanWord: function() {
                    this._flashcall("clearBanWord")
                },
                addBanWord: function(e) {
                    this._flashcall("addBanWord", e)
                },
                removeBanWord: function(e) {
                    this._flashcall("removeBanWord", e)
                }
            }
        });
        i.exports = s
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
, function(e, t, i) {//#78#
    var n = function(e, t, i) {
        var n, o = e(13), a = e(10), r = e(5), c = (e(7),
        e(4),
        r.browser), s = o("EmbedSwf", {
            construct: function() {},
            methods: {
                embed: function(e) {
                    var t = {}
                      , i = r.os.mac ? "https://itunes.apple.com/cn/app/ai-qi-yi/id1012296988?mt=12" : "//mbdapp.iqiyi.com/j/ot/QIYImedia_0_08.exe";
                    t["quality"] = "high",
                    t["allowScriptAccess"] = "always",
                    t["wmode"] = e.wmode ? e.wmode : "opaque",
                    t["align"] = "middle",
                    t["bgcolor"] = "#000000",
                    t["swLiveConnect"] = "true",
                    t["loop"] = "true",
                    t["play"] = "true",
                    t["DeviceFont"] = "false",
                    t["allowFullScreen"] = "true",
                    t["menu"] = "true",
                    t["flashVars"] = "",
                    (c.IE6 || c.IE7 || c.IE8) && (t["movie"] = e.playerUrl),
                    e["origin"] = e.origin || "swf_" + e["parentId"],
                    e["P00001"] = a.get("P00001") || "",
                    e["profileID"] = a.get("P00PRU") || "",
                    e["profileCookie"] = a.get("P00007") || "",
                    e["passportID"] = a.get("P00003") || "",
                    e["vipuser"] = a.get("CM0001") || "",
                    e["yhls"] = 1 * new Date + parseInt(1e11 * Math.random(), 10),
                    e["playerCTime"] = e.plyct,
                    e["pageCTime"] = e.pgct,
                    e["webEventID"] = window.webEventID || "",
                    e.definitionID = e.vid,
                    e.tvId = e.tvid;
                    for (var o = ["tvid", "vid", "wmode"], s = 0; s < o.length; s++)
                        e.hasOwnProperty(o[s]) && delete e[o[s]];
                    for (var p in e)
                        void 0 === e[p] || /^h5/gi.test(p) || (t["flashVars"] += (/=/gi.test(t["flashVars"]) ? "&" : "") + p + "=" + e[p]);
                    var d = [];
                    d.push('<object id="' + e.origin + '" height="100%" width="100%" data-player-playerbody="flash" ' + (c.IE6 || c.IE7 ? 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ' : "") + 'type="application/x-shockwave-flash" data="' + e.playerUrl + '">');
                    for (var l in t)
                        t[l] && d.push('<param name="', l, '" value="', t[l], '" />');
                    d.push('<div style="background-color:#232323;width:100%;height:100%;position:absolute;top:0;left:0;z-index:100;"><div style="position:absolute;left:50%;margin-left:-180px;top:50%;margin-top:-40px;"><p style="text-align:center;margin-bottom:40px;color:#fff;">主人，没有安装flash player不能播放啊~~请您<a href="http://www.adobe.com/go/getflashplayer" target="_blank" style="color:#57A900;">立即安装</a></p><p style="text-align:center;margin-bottom:40px;color:#fff;">打死也不想装flash？可以试试我们的<a href="' + i + '" target="_blank" style="color:#57A900;">桌面客户端</a>，用过的都觉得好！</p></div></div>'),
                    d.push("</object>");
                    var u = d.join("")
                      , f = document.getElementById(e["parentId"])
                      , g = document.createElement("div");
                    g.innerHTML = u;
                    try {
                        f.insertBefore(g.firstChild, null),
                        n = document.getElementById(e.origin),
                        n.loadSuccess = !1
                    } catch (e) {}
                    return g = null,
                    n
                }
            }
        });
        i.exports = s
    }
    .call(t, i, t, e);
    void 0 !== n && (e.exports = n)
}
]);
