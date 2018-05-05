
(function (BetterJsPop) {
  var base = 'http://code.ptcong.com/demos/pop/';
  var useTab = !!~window.location.href.indexOf('tabunder');
  var getPopUrl = function () {
    var urls = [
      base + 'poped.html?1',
      base + 'poped.html?2'
    ];
    if (!!~window.location.href.indexOf('checkref')) {
      return 'https://www.whatismyreferer.com/';
    }

    return urls[Math.floor(Math.random() * urls.length)];
  };

  if (/^(localhost|192\.168\.|127\.0\.0\.)/.test(window.location.host)) {
    base = window.location.pathname.replace(/[^/]+$/g, '');
  }

  BetterJsPop
    .config({
      debug: true,
      perpage: 5,
      coverTags: ['iframe']
    })
    .add(getPopUrl, {
      width:100,
      height:100,
      top:'1200px',
      left:100,
      opacity:0.1,
      under:false, //zitian如果要打开弹出窗口，请将其更改为 false
      //popFallbackOptions:{under: true, newTab: false},
      newTab: false,
      cookieExpires: 2,//每隔多少分钟弹出一次
      beforeOpen: function (url, options) {
        // `this` inside this function is reference of pop object
        console.log('before open pop', options.name);
        // you can use both way to get current options
        console.log('this.getOptions()', this.getOptions());
        console.log('options param', options);
      },
      afterOpen: function (url, options, popWin) {
        console.log('after open pop', options.name, popWin);
        //wait for 3 seconds then close popped window.
        setTimeout(function() {
          popWin.close();
        }, 3e3);

        // you also can use this method to track pop impressions
        // jQuery.get('http://your-track-url');
      }
    });
}(window.BetterJsPop));
