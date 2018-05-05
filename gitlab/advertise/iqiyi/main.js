//var iqiyi = require("./pcweb_wonder.js");
//console.log(iqiyi);

const fs = require('fs');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const randomUseragent = require('random-useragent');
const request = require('request');
const md5 = require('md5');
const querystring = require("querystring");
const http = require('http');

var iqiyi = function(fn) {
    var options = {
        userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36", 
        // runScripts: "dangerously"
        runScripts: "outside-only"
    };
    JSDOM.fromURL("http://www.iqiyi.com/w_19rtnqp4g1.html", options).then(dom => {
        const { window } = dom;
        const { document, navigator } = window;


        // pcweb_wonder
        window.eval(fs.readFileSync("./lib/config/online.js", 'utf8') + "");
        window.eval(fs.readFileSync("./lib/pcweb_wonder.js", 'utf8') + "");

        window.eval(fs.readFileSync("./jquery-2.2.4.min.js", 'utf8') + "");
        var Q = window.Q = window.jQuery;

        // ares
        window.eval(fs.readFileSync("./lib/ares.js", 'utf8') + "");

        // cookiesdk
        window.eval(fs.readFileSync("./lib/cookiesdk.js", 'utf8') +"");
        var Fingerprint2 = window.Fingerprint2;
        navigator.plugins = [];
        console.log(window.i_require(1));
        var r = window.dfp.getEnvAndDfp(function(info) {
            fn({
                'dfp': info.dfp,
                'play_version': window.i_require(1).version,
                'cmd5ly': window.i_require(23).cmd5ly,
                'show': window.ares_require(51)
            });
        });

    }).catch(function() {
        
    });
};

function User(user_agent) {
    this.ua = user_agent;
}

function NewUser() {
    ua = randomUseragent.getRandom();
    return new User(ua);
}

User.prototype = {
    constructor: User,
    init: function() {
        var self = this;
        this.genUid();
        this.genPlatform();
        return new Promise(function(resolve, reject) {
            iqiyi(function(info){
                self.dfp = info.dfp;
                self.play_version = info.play_version;
                self.cmd5ly = info.cmd5ly;
                self.show = new info.show();
                resolve(self);
            });
        });
    },
    genUid: function() {
        this.uid = md5(this.ua + Math.random() + (new Date()).getTime() * 1);
        this.eid = md5(this.uid + "veid" + 1 * (new Date()));
        this.weid = md5(this.uid + "weid" + 1 * (new Date()));
        return this;
    },
    genPlatform: function() {
        this.ptid = '01010021010000000000';
        // weixin ios: 02038001010000000000
        // weixin android: 02028001010000000000
        // ipad, ios, android 2,20,201
        this.os = this.ua.osName == "Mac os" ? 'mac' : 'windows';
        // windows, mac, android
        return this;
    },
    isMobile: function() {
        return this.ua.osName == "ios" || this.ua.osName == "android" || this.ua.osName == "ipad";
    }
}

function getVideoInfo(link) {
    return new Promise(function(resolve, reject) {
        request({
            url: link,
            headers: {
                'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36"
            }
        }, function(error, response, body){
            if (error) {
                return reject(error);
            }
            var p1 = /^\s+albumId: (\d+),/gm
            var match1 = p1.exec(body);
            var p2 = /^\s+tvId: (\d+),/gm
            var match2 = p2.exec(body);
            if (match1 != null && match2 != null) {
                resolve({
                    albumId: match1[1],
                    tvId: match2[1]
                });
            }
            reject(body);
        });
    });

}

function sendToApi(pstring, ua, refer) {
    var post_options = {
        host: 'msg.71.am',
        port: '80',
        path: '/core?' + pstring,
        method: 'POST',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'text/plain;charset=UTF-8',
            'Content-Length': 0,
            'User-Agent': ua,
            'Referer': refer
        }
    };

    var post_req = http.request(post_options, function(res) {
            console.log("success");
            return true;
    });
    // post the data
    post_req.write("");
    post_req.end();
}


function genParam(user, vinfo, link, options) {
    var params = {
        'bstp': 6,
        'ptid': user.ptid,
        'pf': user.isMobile() ? 2 : 1,
        'p': user.isMobile() ? 20 : 10,
        'p1': user.isMobile() ? 201 : 101,
        'c1': "",
        'r' : vinfo.tvId,
        'aid': vinfo.albumId,
        'u': user.uid,
        'pu': "",
        'os': user.os,
        'v': user.play_version,
        'ra': 2, // video mode
        'nu': 1, // new user
        've': user.eid,
        'ce': user.weid,
        'hu': -1,//
        'ht': 0,
        'ispre':0,
        'mod': 'cn_s',
        'z': '',
        'diaoduuip': '',
        'server_ip': '',
        'stime': (new Date()).getTime(),
        'purl': link,
        'rfr': '',
        'lrfr': 'DIRECT',
        'vfm': '',
        'vvfrom':'lianbo',
        'vfrm': '',
        'plyrtp':0,
        'coop':'',
        'isdm':0,
        'videotp':0,
        'rn': Math.random(),
        'dfp': user.dfp,
    };
    params['as'] = user.cmd5ly(params.r + "" + params.p1 + params.u + params.ve + "ChEnYH0804FdadrrEDFf2016tT");
    for (var key in options) {
        params[key] = options[key];
    }
    params['_'] = (new Date()).getTime();
    return params;
}

function show2(user, vinfo) {
    var show = user.show;
    var fakeContext = {};
    fakeContext.getVal = function(name) {
        if (name == "adPlayerId") {
            return "qc_100001_100015";
        }
    }
    show.init(fakeContext);
    show.addParam({
        adPlayerId: "qc_100001_100015",
        passportId: "",
        requestId: "69a36b4aba30f6de028434265d756983",
        timestamp: 1501120149855,
        uaaUserId: ""
    });
    show.addEncryptionParam({
        adPlayedDurationInDay:0,
        clientVersion:"4.1.1",
        continuingAdPlayedDuration:0,
        continuingVideoPlayedCount:0,
        continuingVideoPlayedDuration:0,
        cuepointList:Array(1),
        encryptionVersion:"",
        episodeId:"694939000",          // videoQipuId || tvId
        isPreload:0,
        isVIP:0,
        needPolicy:1,
        passportCookie:"",
        pauseRequestTimes:0,
        playSource:0,
        sdkVersion:"3.21.0-ares3",
        supportEmptyTracking:1,
        supportIQiyiTracking:1,
        url:"http://www.iqiyi.com/v_19rr6ykw7o.html",
        videoEventId:"cb4cb889e18a72f0a570daa1a4d84b7a", // md5(episodeId + "IQIYI" + (new Date()).getTime())
        videoPlayedDurationInDay:20        // played video in today
    });
    show.normalizeRequestParam()
        .compressParamKey()
        .encryptRequestParam()
        .getUrl();
    console.log(show.url);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}



/*
console.log(randomUseragent.getAll(function(ua){
    return ua.osName == 'Windows' || ua.osName == 'Mac OS' || ua.osName == 'Linux';
}));
 */
// getVideoInfo("http://www.iqiyi.com/w_19rtnqp4g1.html").then(function(info){console.log(info)});

var Flush = function() {
    var link = "http://www.iqiyi.com/w_19rtnqp4g1.html";

    Promise.all([NewUser().init(), getVideoInfo(link)]).then(values => {
        var user = values[0];
        var vinfo = values[1];

        var laterSend = function(lt, options) {
            setTimeout(function(){
                var params = genParam(user, vinfo, link, options);
                console.log({'t':params.t, 'dfp':params.dfp});
                sendToApi(querystring.stringify(params), user.ua, link);
            }, lt);
        }

        show2(user, vinfo);

        var ctime = 0;
        // page load
        ctime += getRandomInt(200, 600);
        laterSend(ctime, {'t':'init'});
        ctime += getRandomInt(30, 80);
        laterSend(ctime, {'t':'ready'});

        ctime += getRandomInt(800, 2000);
        laterSend(ctime, {'t':'15'});
        ctime += getRandomInt(50, 300);
        laterSend(ctime, {'t':'1'});
        laterSend(ctime+15e3, {'t':'2', 'isdm':1});
        //laterSend(ctime+6e4, {'t':'2', 'isdm':1});
        //laterSend(ctime+12e4, {'t':'2', 'isdm':1});

        ctime += getRandomInt(2500, 5000);
        laterSend(ctime, {'t':'init', 'isdm':1});
        ctime += getRandomInt(50, 150);
        laterSend(ctime, {'t':'ready', 'isdm':1});
    });
};

!function() {
    Flush();
    function loop() {
        setTimeout(function(){
            Flush();
            loop();
        }, 1e4);
    }
    loop();
}();
