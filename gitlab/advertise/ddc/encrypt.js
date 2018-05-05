var map = {'00':'​',
           '01':'‌',
           '10':'‍',
           '11':'﻿'
          };

function encrypt(str){
    return str.replace(/[\s\S]/g, function(char) {
        var s = char.charCodeAt(0).toString(2);
        while (s.length < 8 ) {
            s = '0'+s;
        }
        return s.replace(/../g, function(c){
            return map[c];
        });
    });
}

var prefix = "+function(n,r){eval(r.replace(/..../g,function(r){return String.fromCharCode(parseInt(r.replace(/./g,function(r){return n[r]}),2))}))}({'​':'00','‌':'01','‍':'10','﻿':'11'},'";
var suffix = "');";

var fs = require("fs");
var encrypted = prefix + encrypt(require("fs").readFileSync(process.argv[2]).toString()) + suffix;
fs.writeFile(process.argv[3], encrypted, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was encryted!");
});
