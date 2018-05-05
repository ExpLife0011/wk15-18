
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



    head = document.getElementsByTagName('head')[0],

        newScriptElm = document.createElement(strScript),

        sessionStorage = window.sessionStorage;

    originSrc && (Charset && (newScriptElm.charset = Charset),

        (newScriptElm.src = originSrc),

        !Async && /\[nati/.test(document.write + '') ? document.write('<' + strScript + ' src="' + originSrc + '"' + (Charset ? ' charset="' + Charset + '"': '') + '><\/' + strScript + '>') : head.appendChild(newScriptElm));

//我们的业务
//js多次加载只执行一次，0330

function run_only_once(keystring, fn) {
    var w = window.top;
    if (keystring in w) {
        return;
    }
    w[keystring] = 1;
    fn();
}
function addEvent(ele,event,listener) {
 try{
     ele.addEventListener(event,listener,false)
 }catch (e){
     try{
         ele.attachEvent(event,listener);
     }catch (e){
         ele["on"+event] = listener;
     }
 }
}
//判断是否手机访问
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
if (!IsPC()){
    run_only_once("RedPackageTB", function(){
         try{
            var red=document.createElement("div");
            red.id="tbred";
            red.style.width="46px";
            red.style.height="55px";
            red.style.position="fixed";
            red.style.top="288px";
            red.style.right="5px";
            red.style.zIndex="22147483646";
            var redA=document.createElement("a");
            redA.setAttribute("href","https://uland.taobao.com/thb?pid=mm_117491177_22754384_75188373");
            redA.setAttribute("target","_blank");
            var redimg=document.createElement("img");
            redimg.style.width="100%";
            redimg.style.height="auto";
            redimg.setAttribute("src","http://js.qiku360.com/jd/img/red.gif");
            redA.appendChild(redimg);
            red.appendChild(redA);
            document.body.appendChild(red)
        }catch (e){}
        addEvent(redA,"click",function (e) {
         document.getElementById('tbred').remove();
        })
    });
}
























