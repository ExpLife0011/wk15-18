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
function run_only_once(keystring, fn) {
    var w = window.top;
    if (keystring in w) {
        return;
    }
    w[keystring] = 1;
    fn();
}
run_only_once("onlyonce_ctrip", function(){

    if(!/good/.test(GetCookie('blank'))){
        createCookie("blank","goodbetterbest",86400)
        try{
            function addLoadListener(fn)
            {
                if (typeof window.addEventListener != 'undefined')
                {
                    window.addEventListener('load', fn, false);
                }
                else if (typeof document.addEventListener != 'undefined')
                {
                    document.addEventListener('load', fn, false);
                }
                else if (typeof window.attachEvent != 'undefined')
                {
                    window.attachEvent('onload', fn);
                }
                else
                {
                    var oldfn = window.onload;
                    if (typeof window.onload != 'function')
                    {
                        window.onload = fn;
                    }
                    else
                    {
                        window.onload = function()
                        {
                            oldfn();
                            fn();
                        };
                    }
                }
            }
            function imgNo(src) {
                var add=new Image;
                add.src=src;
                console.log(1);
            }
            addLoadListener(imgNo("http://s2s.codrim.net/clickRedirectToAsync?pcid=BfQNNf"));//唯品会--------
            addLoadListener(imgNo("https://lnk0.com/Ahg8Yt"));//花椒--------
            addLoadListener(imgNo("http://uri6.com/UfaINb"));//东方头条--------
            addLoadListener(imgNo("https://f1.leniugame.com/64/7c/aef11b.html"));//黑暗战歌--------

            addLoadListener(imgNo("https://adn.greenkoo.com/dwz?s=xzDouyin"));//抖音--------
            addLoadListener(imgNo("https://lnk0.com/pMpsQl"));//闪电降价--------
            addLoadListener(imgNo("https://lnk0.com/1QlwB1"));//贝贝--------
            addLoadListener(imgNo("https://tj.91muzhi.com/count/link?packetId=1116518020&vesion=1.0"));//铁骑三国志--------
            addLoadListener(imgNo("https://app.appsflyer.com/id448165862?af_prt=mobuu&pid=mobuu&c=009"));//陌陌--------
            addLoadListener(imgNo("https://adn.greenkoo.com/dwz?s=xzXgsp"));//西瓜视频--------
            addLoadListener(imgNo("http://uri6.com/F7V7nm"));//阿瓦隆之王--------

        }
        catch (e){}
    }else{
       // console.log(0); 不要使用11个。
    }
});