const fs = require('fs');

const jsdom = require("jsdom");
const {JSDOM} = jsdom;
const randomUseragent = require('random-useragent');
const md5 = require('md5');
const querystring = require("querystring");
const http = require('http');

var iqiyi = function (fn) {
    var options = {
        userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36",
        runScripts: "outside-only"
    };
    JSDOM.fromURL("http://www.iqiyi.com/w_19rtnqp4g1.html", options).then(dom => {
        const {window} = dom;
    const {document, navigator} = window;
    // pcweb_wonder
    window.eval(fs.readFileSync("./lib/config/online.js", 'utf8') + "");
    window.eval(fs.readFileSync("./lib/pcweb_wonder.js", 'utf8') + "");
    window.eval(fs.readFileSync("./jquery-3.2.1.min.js", 'utf8') + "");
    var Q = window.Q = window.jQuery;
    // cookiesdk
    window.eval(fs.readFileSync("./lib/cookiesdk.js", 'utf8') + "");
    var Fingerprint2 = window.Fingerprint2;
    navigator.plugins = [];
    window.dfp.getEnvAndDfp(function (info) {
        fn({
            'dfp': info.dfp,
        });
    });
}).catch(function () {

    });
};

function getdfp() {
    console.log(111);
    var User = {}
    var self = User;
    return new Promise(function (resolve, reject) {
        iqiyi(function (info) {
            self.dfp = info.dfp;
            console.log(self.dfp);
            resolve(self.dfp); //return 的就是this
        });
    });

}

function getua() {
    return new Promise(function (resolve, reject) {
        var ua = randomUseragent.getRandom()
        resolve(ua);
    });
}

var server = http.createServer(function (req, res) {
    Promise.all([getdfp(), getua()]).then(function (values) {
        var dfp = values[0];
        var ua = values[1];
        var message = {'ua': ua, 'dfp': dfp};
        console.log(message);
        var messagestring = JSON.stringify(message);
        console.log(req.method);
        if (req.url !== "/favicon.ico") {
            res.writeHead(200, {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"});
            res.write(messagestring);
        }
        res.end();
    });

});
server.listen(1337, "localhost", function () {
    console.log("开始监听...");
});