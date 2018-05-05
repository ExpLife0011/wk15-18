function getCookieVal(offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1) endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
}
function SetCookie(name, value, time) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + 60 * 1000 * time);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
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
var cook_key = "__mvjs";
var ifHave = GetCookie(cook_key);
if (ifHave==null)
{
    SetCookie(cook_key,"d75237ac553db79eb77abb07832f8753",20);
    window.location.href="http://click.union.vip.com/redirect.php?url=eyJjaGFuIjoibXFpMzYwa3UiLCJ0cmFudHlwZSI6MywiYWRjb2RlIjoiIiwibWFyayI6ImhGTSxoRk0saEZsIiwic2NoZW1lY29kZSI6Im9tYnN3NjIzIiwidWNvZGUiOiJpa3Y2ZWt1cSJ9";
}else{
    var url = "http://m.vip.com/?f=553db79eb77";
    window.location.href = url ;
}