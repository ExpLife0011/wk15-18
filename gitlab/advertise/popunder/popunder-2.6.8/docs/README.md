## Better Javascript Popunder
\#1 pop script on the market

* Author: Phan Thanh Cong
* Email: contact@ptcong.com
* Official website: http://popunderjs.com

----

### Table Of Contents
* [Introduction](#introduction)
* [Installation](#installation)
    - [Configuration](#configuration)
        - [Limit Domains For Unlimited Package](#limit-domains-for-unlimited-package)
    - [Adding new pop](#adding-new-pop)
    - [Use pop options](#use-pop-options)
* [API](#api)
    - [config()](#config-method)
    - [getConfig()](#getconfig-method)
    - [add()](#add-method)
    - [getStack()](#getstack-method)
    - [emptyStack()](#emptystack-method)
    - [bindTo()](#bindto-method)
    - [ignoreTo()](#ignoreto-method)
    - [getBindTo()](#getbindto-method)
    - [getIgnoreTo()](#getignoreto-method)
    - [coverElement()](#coverelement-method)
    - [getClickedElement()](#getclickedelement-method)
    - [getFiredCount()](#getfiredcount-method)
    - [getQueuedCount()](#getqueuedcount-method)
    - [hasQueued()](#hasqueued-method)
    - [isReachedPerpage()](#isreachedperpage-method)
    - [getLastOpenAt()](#getlastopenat-method)
    - [getLastEvent()](#getlastevent-method)
    - [reset()](#reset-method)
* [Logger](#logger-api)
    - [log()](#loggerlog-method)
    - [print()](#loggerprint-method)
* [Cookie](#cookie-api)
    - [set()](#cookieset-method)
    - [get()](#cookieget-method)
    - [remove()](#cookieremove-method)
* [Storage](#storage-api)
    - [isAvailable()](#storageisavailable-method)
    - [set()](#storageisavailableset-method)
    - [get()](#storageisavailableget-method)
    - [remove()](#storageisavailableremove-method)
* [Browser](#browser-api)
    - [version](#browserversion-property)
    - [longVersion](#browserlongversion-property)
    - [isLinux](#browserislinux-property)
    - [isWin](#browseriswin-property)
    - [isMac](#browserismac-property)
    - [isIOS](#browserisios-property)
    - [isAndroid](#browserisandroid-property)
    - [isMobile](#browserismobile-property)
    - [isWebkit](#browseriswebkit-property)
    - [isMozilla](#browserismozilla-property)
    - [isChrome](#browserischrome-property)
    - [isFirefox](#browserisfirefox-property)
    - [isSafari](#browserissafari-property)
    - [isIE](#browserisie-property)
    - [isEdge](#browserisedge-property)
    - [isOpera](#browserisopera-property)
    - [versionCompare](#browserversioncompare-method)
    - [popunderAvailable](#browserpopunderavailable-method)
* [Event](#event-api)
    - [bind()](#eventbind-method)
    - [unbind()](#eventunbind-method)
    - [getTarget()](#eventgettarget-method)
* [Utils](#utils-api)
    - [versionCompare()](#utilsversioncompare-method)
    - [time()](#utilstime-method)
    - [isFlashEnabled()](#utilsisflashenabled-method)
    - [addQueryString()](#utilsaddquerystring-method)
    - [merge()](#utilsmerge-method)
    - [rand()](#utilsrand-method)
    - [createElement()](#utilscreateelement-method)
    - [removeElement()](#utilsremoveelement-method)
    - [getParent()](#utilsgetparent-method)
    - [uTimeout()](#utilsutimeout-method)


### Introduction

BetterJsPop is #1 pop under script on the market, written in Javascript by Thanh Cong since 2012. At first it was shared for free but not updated frequently and become paid premium script since lately 2015 with lot of improvements.

* Make pop/tab under/up, works on every desktop, mobile browsers.
* Bypass Adblock Plus ([read more](#bypass-adblock))
* Support multiple urls, random urls, hooks.
* Keep normal browser behaviors while running pops.
* Use OOP - modern syntax, very easy to setup/install.
* Filter mobile, desktop traffics.
* Support asynchonours loading.
* Can register or ignore to specific HTML tag names or elements (DOM).
* Hidding traffic source.
* Well API, documents.
* and more..

###### Bypass Adblock
> Our script can open pop even with Adblock enabled, but unfortunately, if your pop url is in Adblock's blacklist, they will close pop window/tab right after it opened. First time we can use `redirector` trick to bypass this, but Adblock has updated their mechanism same as uBlock Origin as they monitor all urls in tabs, windows then close it when they found a url in blacklist. 
> If your pop url isn't in their blacklist ? Congratulation!! You can use our script to open your pop as well even if Adblock is enabled.

### Installation

To install this script, you have to upload these files to your server.

They are: `script.js`, `license.packed.js` or `license.XX.js` while XX is a random number.

If you're using local environment, you can use some local domains as `127.0.0.1`, `*.local`, `192.168.1.99`

> *Note: `license.packed.js` is file i sent you via email after you registered your domains with us. Don't use license file that you got from updates or .zip file, it's just a demo license and does not work in production environment.*

For example, your domain is: domain.com, after uploaded all needed files, we got some links:

`http://domain.com/script/script.js`
`http://domain.com/script/license.packed.js`

So we use basic setup to see how it works.

```
<script src="http://domain.com/script/script.js"></script>
<script src="http://domain.com/script/license.packed.js"></script>
<script>
BetterJsPop.add('http://example.com', {under: true, newTab: false});
</script>
```

Then open your browser to see your result

> *Note: You have to run it in `http://` or `https://` protocol, don't run it by double click to your html file. It may not works with `file://` protocol.*

#### Configuration

> By default, the script using `BetterJsPop` as variable name. You can chagne this to any name you want to avoid conflict with other adnetwork (due we have lot of adnetwork as customers).
> To change this variable, please add `window.popns = 'YourVarName'` on top of `script.js` or before loading `script.js`
> For example:
> ```
> <script>window.popns = 'YourVarName';</script>
> <script src="http://domain.com/script/script.js"></script>
> ```


We have some config options with default values:

|                         Option                         |         Type        |             Default             |
|--------------------------------------------------------|---------------------|---------------------------------|
| [**`perpage`**](#option-perpage)                       | `integer`           | `9999`                          |
| [**`bindTo`**](#option-bindto)                         | `Array`             | `[] `                           |
| [**`ignoreTo`**](#option-ignoreto)                     | `string` `null`     | `null`                          |
| [**`delay`**](#option-delay)                           | `integer`           | `0`                             |
| [**`coverTags`**](#option-covertags)                   | `Array`             | `[]`                            |
| [**`ignoreListener`**](#option-ignorelistener)         | `boolean`           | `true`                          |
| [**`debug`**](#option-debug)                           | `boolean`           | `false`                         |
| [**`tabunderUrl`**](#option-tabunderurl)               | `string` `function` | `window.location.href`          |
| [**`coverScrollbar`**](#option-coverscrollbar)         | `boolean`           | `true`                          |
| [**`webkitAnchorBlank`**](#option-webkitanchorblank)   | `boolean`           | `true`                          |
| [**`forceUnder`**](#option-forceunder)                 | `boolean`           | `false`                         |
| [**`popFallbackOptions`**](#option-popfallbackoptions) | `Object`            | `{ under: true, newTab: true }` |
| [**`mobileSensitive`**](#option-mobilesensitive)       | `integer`           | `30`                            |
| [**`noOpenerHijacking`**](#option-noopenerhijacking)   | `boolean`           | `false`                         |
| [**`initOnload`**](#option-initonload)                 | `boolean`           | `false`                         |


To use the options, we put inside [`.config()`](#config-method).

For example:

```
BetterJsPop.config({
    debug: true,
    perpage: 5
});
```

##### Option: perpage

To limit number of pop per page. This script can opens multiple pops at once in most of browsers, but in some browser as Chrome, it just able to open only 1 pop by 1 click.

##### Option: `bindTo`

To register script to specific tag names or DOM node. Default is for whole of web page.

##### Option: `ignoreTo`

To tell script don't open pop when user click to this tag names or DOM node.

##### Option: `delay`

Number of milliseconds to wait between two pops. In some browsers, must have at least x seconds to avoid pop blocked message.

##### Option: `coverTags`

Sometimes you want to opens pop when user click to an IFRAME, VIDEO or OBJECT element, you should use this option.

##### Option: `ignoreListener`

Sometimes your user clicks to an element that has registered with `onclick` and that events `return false` or `preventDefault()`. By defaults, script will ignore that, but if you want to tell script don't open pop when user click to element like that, change this option to `false`

##### Option: `debug`

Enable this option to see log message, or you can use `BetterJsPop.Logger.print()` to print all queued messages.

##### Option: `tabunderUrl`

Sometimes when using tab-under, you want to pop open but redirect to another url instead of current url, you can set it by this option. This option allows input as a string or function callback.

###### Option: `coverScrollbar`

Allow the script fire pop when user click to scrollbar. Default value is `true`

##### Option: `webkitAnchorBlank`

Chrome and Opera browser allow open only one pop/tab by 1 click, we can't open more at once. If user click to a link with `target="_blank"`, we only can open pop or that link. By default, the script will open pop and does not open that link. If you want to open that link instead of pop, change this config to `false`

##### Option: `forceUnder`

In some desktop browsers where pop under is not available as Window Opera 39+ and Edge. We have two ways to fire pop

* `true` Make a small pop up at the bottom right corner of the screen then wait for user click to main window to focus to main window, then complete the pop (make it fullscreen and under after got a click to main window)
* `false` Use tab under

##### Option: `popFallbackOptions`

`@since 2.2.0`

In some cases, popunder is not avalable, the script will use this option to open pop. 

Default is tab under `{ under: true, newTab: true }`

You may change it to popup as `{ under: false, newTab: false }` 

or tabup `{ under: false, newTab: true }` 

##### Option: `mobileSensitive`

`@since 2.2.26`

`mobileSensitive` is option to control our fast click technique, sometimes if user scroll a short distance, the script will consider it's a click and open pop fast. 
Default value is `30` will get more pop impressions, if you don't like this way, you can reduce to `20` or `10`. 
Don't set it higher `30`, the option should be `30`, `20` or `10`.

`@since 2.3.27`
If you want to disable mobile sensitive, just set it to `-1`

##### Option: `noOpenerHijacking`

Some popped window try to redirect main window by using `window.opener.location`, this option used to avoid this problem. For now, it can prevent this problem in most of browsers except pop-under in Chrome Mac, if you use pop-up or tab in Chrome Mac, it works fine.

##### Option: `initOnload`

`@since 2.4.13`

By defaults, this script will initialize its handlers when script loaded, but sometimes you want to initialize after entire page loaded. Just set it to `true`


##### Limit Domains For Unlimited Package

`@since 1.3.2`

Unlimited package mean any website can embed and use your script. Sometimes you want to prevent this and just want to active for some domains. 
It's so easy, just open your license file, then add the code on the top.

```
window[window.popns || 'BetterJsPop'].href = ['domain1.com', 'domain2.com'];
...
```


#### Adding New Pop

To add new pop to queue list, we ust `.add()` method.

```
BetterJsPop.add('http://example.com');
```

> *Note: By defaults, the script will opens pop under for each url. If you want to use pop up or tab-under, read it under.*

#### Use Pop Options

For each pop, we have these options:

* **`name`**, *type `string`*
    - Name of the pop window, each pop already has a unique name by default, you can change it if you want.
* **`device`** *type `string`, default `"any"`, accepted `"desktop", "mobile" or "any"`*
    - To filter traffic for the pop, sometimes you want to open pop only for `"mobile"` or `"desktop"`.
* **`cookieName`** *type `string`*
    - Name of cookie flag, each pop already has a unique cookie name by default, you can change it if you want.
* **`cookieExpires`** *type `integer` `DateTime`, default session*
    - By defaults, pop works with session that mean user have to close their browser to get new pop. You can change this to number of seconds or `DateTime` value. [(read more)](#pop-option-cookieexpires)
    - For example, if you want pop for every 30 minutes, use `cookieExpires: 1800`
* **`cookiePath`** *type `string`, default `"/"`*
    - Cookie path for this pop
* **`under`** *type `boolean`, default `true`*
    - If you want to open pop up, change this to `false`
* **`newTab`** *type `boolean`, default `false`*
    - Change this to `true` if you want to use tab instead of new window.
* **`shouldFire`** *type `boolean` `function`, default: `true`*
    - You can add your logic to determine this pop should be fire or not.
    - Your logic will be used after main logic, so if pop is fired, even you use `true`, it will not fire.
    - You can use this to tell the script only open pop if user click to specifc element. [(read more)](#example-shouldfire-option)
* **`beforeOpen`** *type `function(url, options) - context: this pop`, default: NOOP*
    - This method will be called before the pop fired.
* **`afterOpen`** *type `function(url, options, popWin) - context: this pop`, default: NOOP*
    - This method will be called after the pop fired.
    - `popWin` references to window object of the pop (if you use pop up/under)
* **`noReferer`** *type `boolean`, default `false`*
    - Change this to `true` if you want to hide referer for the pop url.
    - Note: We can't hide referer in IE11
* You also have option `width`, `height`, `top`, `bottom`, `left`, `right` to custom pop window size, postion

##### Example: use pop options

To use pop options, please take a look at this basic example:

```
BetterJsPop
.add('http://example.com/url1', {
    under: true,
    newTab: false
})
.add('http://example.com/url2', {
    device: 'desktop',
    cookieExpires: 900, // open every 15 minutes. Note: user have to click to page content to get pop
    beforeOpen: function(url, options) {
        // `this` inside this function is reference of pop object
        console.log('hey, waiting for me...');
        console.log('pop options', this.getOptions());
        console.log('pop options', options);
    },
    afterOpen: function(url, options, popWin) {
        // wait for 3 seconds then close popped window.
        setTimeout(function(){
            popWin.close();
        }, 3e3);

        // you also can use this method to track pop impressions
        $.get('http://your-track-url');
    }
})
```


##### Example: `shouldFire` option

```
BetterJsPop.add('http://example.com', {
    shouldFire: function() {
        return BetterJsPop.getClickedElement() === jQuery('#your-element')[0];
    }
});
```

##### Pop option: `cookieExpires`

By defaults, this script use cookie as session for pop, so if pop is fired, user have to close browser to get new pop.

You also can set a `DateTime` or `integer` number of seconds for `cookieExpires`.

If you want to pop for every click, you can use `cookieExpires: -1`, but to get more pops, you have to use setting `perpage: 9999` or any number you want. [See `perpage` option](#option-perpage)

### API

#### `config()` method

Used to configure the script, for more options, check [Configuration](#configuration) section.

```
/**
 * @param options object
 * @return self
 */
BetterJsPop.config(options);
```

#### `getConfig()` method

Used to get all options that script is using.

```
/**
 * return object
 */
BetterJsPop.getConfig();
```


#### `add()` method

Used to push a pop to queue then will fire pop when user click to page content.

```
/**
 * @param url       string|function
 * @param options   object or not defined.
 * @return self
 */
BetterJsPop.add(url, options);
```

You can pass a function as url to this method to get random url or run your logic before get url for pop.

Example for random urls.

```
var getPopUrl = function() {
    var urls = [
        'http://example.com/?url1',
        'http://example.com/?url2'
    ];
    return urls[Math.floor(Math.random() * urls.length)];
}

// each time before open this pop, script will execute getPopUrl function to get new url.
BetterJsPop.add(getPopUrl);
```

You also can repeat `.add()` multiple times to add more pop

```
BetterJsPop.add('http://example1.com');
BetterJsPop.add('http://example2.com');
BetterJsPop.add('http://example3.com');
```

or you can use like this:

```
// Remember, don't have `;` after each `add`
BetterJsPop
    .add('http://example.com')
    .add('http://example2.com')
    .add('http://example3.com')
```

#### `getStack()` method

Used to get all added pops.

```
/**
 * @return array
 */
BetterJsPop.getStack();
```

#### `emptyStack()` method

Used to remove all added pops from stack. This will not remove cookie flags.
If you want to remove cookies, use [`reset()` method](#reset-method) instead of.

```
/**
 * @return void
 */
BetterJsPop.emptyStack();
```


#### `bindTo()` method

Used to register the pop to some speicifc tag names or DOM nodes.

```
/**
 * @param array|multiple arguments
 * @return self
 */
BetterJsPop.bindTo(arguments);
```

Example:

```
// bind script to all img tags
BetterJsPop.bindTo('img');

// you want to bind to all <a> tag ?
BetterJsPop.bindTo('a');

// bind to more than one tag ?
BetterJsPop.bindTo(['button', 'img']);

// or can use like this
BetterJsPop.bindTo('button', 'img');

// @since 2.5.16 - Support selector
BetterJsPop.bindTo(['#id-of-element', '.class-of-elements']);

// To clear bind/ignored list, use
BetterJsPop.bindTo(false);
```


If you want to bind script to all class name ?

```
jQuery(document).ready(function($) {
  $('.your-class-name').each(function () {
    BetterJsPop.bindTo(this);
  });
});
```

#### `ignoreTo()` method

Same as [bindTo()](#bindto-method) but just used to tell the script don't open pop when user click to ignored elements/ DOM nodes.

```
/**
 * @param array|multiple arguments
 * return self
 */
BetterJsPop.ignoreTo(arguments);
```

#### `getBindTo()` method

```
/**
 * Returns array of registered elements/ DOM nodes
 */
BetterJsPop.getBindTo();
```

#### `getBindTo()` method

```
/**
 * Returns array of ignored elements/ DOM nodes
 */
BetterJsPop.getIgnoreTo();
```

#### `coverElement()` method

Similar to [**`coverTags`**](#option-covertags) settings, this method is used to cover any element you want.

```
/**
 * Tell pop script covers any element you want
 * @param DOM
 * @return self
 */
BetterJsPop.coverElement(element);
```


#### `getClickedElement()` method

```
/**
 * Returns last element that user just clicked on.
 * return object|false
 */
BetterJsPop.getClickedElement();
```


#### `getFiredCount()` method

```
/**
 * Returns number of pop fired.
 * return integer
 */
BetterJsPop.getFiredCount();
```

#### `getQueuedCount()` method

```
/**
 * Returns number of pop in queued
 * return integer
 */
BetterJsPop.getQueuedCount();
```

#### `hasQueued()` method

```
/**
 * Determine if have pop in queued.
 * return boolean
 */
BetterJsPop.hasQueued();
```


#### `isReachedPerpage()` method

```
/**
 * Determine is reached to number of pop per page
 * return boolean
 */
BetterJsPop.isReachedPerpage();
```

#### `getLastOpenAt()` method

```
/**
 * Returns time when last pop openned
 * return integer
 */
BetterJsPop.getLastOpenAt();
```

#### `getLastEvent()` method

```
/**
 * Returns last mouse event
 * return MouseEvent
 */
BetterJsPop.getLastEvent();
```

#### `reset()` method

```
/**
 * Used to reset all cookies, flags and can fire pop again without refresh current page.
 */
BetterJsPop.reset();
```


### Logger API

#### `Logger.log()` method

```
/**
 * Add a log message to list. If debug mode is enabled, it will log to console immediately.
 * Support multiple arguments as console.log()
 */
BetterJsPop.Logger.log(arguments)
```

#### `Logger.print()` method

```
/**
 * Print all log messages to console.
 */
BetterJsPop.Logger.print();
```

### Cookie API

#### `Cookie.set()` method

```
/**
 * Set cookie.
 *
 * @param string
 * @param mixed
 * @param DateTime|integer number of seconds 
 * @param string
 */
BetterJsPop.Cookie.set(name, value, expires, path);
```

#### `Cookie.get()` method

```
/**
 * Return cookie value for speicifc name.
 * If cookie is not exist, return `null`.
 *
 * @param  string
 * @return string|null
 */
BetterJsPop.Cookie.get(name);
```

#### `Cookie.remove()` method

```
/**
 * Remove a cookie by name.
 *
 * @param string name
 */
BetterJsPop.Cookie.remove(name);
```

### Storage API

#### `Storage.isAvailable()` method

```
/**
 * Determine if local storage is supported.
 * If not supported, get/set/remove still work but use cookie insteadof.
 *
 * @return boolean
 */
BetterJsPop.Storage.isAvailable();
```

#### `Storage.set()` method

```
/**
 * Set storage.
 *
 * @param string    name
 * @param mixed     value
 */
BetterJsPop.Storage.set(name, value);
```

#### `Storage.get()` method

```
/**
 * Return storage value for speicifc name.
 * If storage is not exist, return `null`.
 *
 * @param  string       name
 * @return string|null
 */
BetterJsPop.Storage.get(name);
```

#### `Storage.remove()` method

```
/**
 * Remove a storage by name.
 *
 * @param name string
 */
BetterJsPop.Storage.remove(name);
```

### Browser API

#### `Browser.version` property

```
/**
 * Return version number of browser
 * @type integer
 */
BetterJsPop.Browser.version;
```

#### `Browser.longVersion` property

```
/**
 * Return long version number of browser
 * @type string
 */
BetterJsPop.Browser.longVersion;
```

#### `Browser.isLinux` property

```
/**
 * @type boolean
 */
BetterJsPop.Browser.isLinux;
```

#### `Browser.isWin` property

```
/**
 * @type boolean
 */
BetterJsPop.Browser.isWin;
```

#### `Browser.isMac` property

```
/**
 * @type boolean
 */
BetterJsPop.Browser.isMac;
```

#### `Browser.isIOS` property

```
/**
 * @type boolean
 */
BetterJsPop.Browser.isIOS;
```

#### `Browser.isAndroid` property

```
/**
 * @type boolean
 */
BetterJsPop.Browser.isAndroid;
```

#### `Browser.isMobile` property

```
/**
 * @type boolean
 */
BetterJsPop.Browser.isMobile;
```

#### `Browser.isWebkit` property

```
/**
 * @type boolean
 */
BetterJsPop.Browser.isWebkit;
```

#### `Browser.isMozilla` property

```
/**
 * @type boolean
 */
BetterJsPop.Browser.isMozilla;
```

#### `Browser.isChrome` property

```
/**
 * @type boolean
 */
BetterJsPop.Browser.isChrome;
```

#### `Browser.isFirefox` property

```
/**
 * @type boolean
 */
BetterJsPop.Browser.isFirefox;
```

#### `Browser.isSafari` property

```
/**
 * @type boolean
 */
BetterJsPop.Browser.isSafari;
```

#### `Browser.isIE` property

```
/**
 * @type boolean
 */
BetterJsPop.Browser.isIE;
```

#### `Browser.isEdge` property

```
/**
 * @type boolean
 */
BetterJsPop.Browser.isEdge;
```

#### `Browser.isOpera` property

```
/**
 * @type boolean
 */
BetterJsPop.Browser.isOpera;
```

#### `Browser.versionCompare` method

```
/**
 * Compare current browser version to a version.
 * Returns -1 if current version is less than target version,
 * 0 if both are same, and 1 if greater than target version.
 * @return boolean
 */
BetterJsPop.Browser.versionCompare(operator, version);
```

#### `Browser.popunderAvailable` method

```
/**
 * Determine if pop under is vailable in current browser, platform
 * @return boolean
 */
BetterJsPop.Browser.popunderAvailable();
```

### Event API

#### `Event.bind()` method

```
/**
 * Register an event listener to given object
 *
 * @param object 
 * @param string
 * @param function
 */
BetterJsPop.Event.bind(obj, event, callback);
```

#### `Event.unbind()` method

```
/**
 * Unregister an event listener to given object
 *
 * @param object 
 * @param string
 * @param function
 */
BetterJsPop.Event.unbind(object, event, callback);
```

#### `Event.getTarget()` method

```
/**
 * Unregister an event listener to given object
 *
 * @param object 
 * @return Document|false
 */
BetterJsPop.Event.getTarget(event);
```

### Utils API

#### `Utils.versionCompare()` method

```
/**
 * Compare two version.
 *
 * @param string|integer 
 * @param string|integer
 * @param string
 * @param string
 * @return integer
 */
BetterJsPop.Utils.versionCompare(ver1, ver2, operator, separator);
```

#### `Utils.time()` method

```
/**
 * Returns timestamp for current time or a date.
 *
 * @param undefined|DateTime
 * @return integer milliseconds
 */
BetterJsPop.Utils.time(date);
```

#### `Utils.isFlashEnabled()` method

```
/**
 * Determine if flash is enabled.
 *
 * @return boolean
 */
BetterJsPop.Utils.isFlashEnabled();
```

#### `Utils.addQueryString()` method

```
/**
 * Append a query string to url.
 *
 * @return string
 */
BetterJsPop.Utils.addQueryString(url, queryString);
```

#### `Utils.merge()` method

```
/**
 * Merge multiple objects
 *
 * @return object
 */
BetterJsPop.Utils.merge(obj1, obj2, objN);
```

#### `Utils.rand()` method

```
/**
 * Returns a random string by length.
 *
 * @return string
 */
BetterJsPop.Utils.rand(length);
```

#### `Utils.createElement()` method

```
/**
 * Create an element.
 *
 * @param string
 * @param object|undefined
 * @param string|undefined
 * @return Document
 */
BetterJsPop.Utils.createElement(tagName, attrs, content);
```

#### `Utils.removeElement()` method

```
/**
 * Remove an element
 *
 * @param Document
 */
BetterJsPop.Utils.removeElement(element);
```

#### `Utils.getParent()` method

```
/**
 * Find a parent of element - same as jQuery.fn..closest()
 *
 * @param Document
 * @param string
 * @param integer|undefined
 */
BetterJsPop.Utils.getParent(element, parentTagName, deep);
```

#### `Utils.uTimeout()` method

```
/**
 * Create unique setTimeout.
 *
 * @param string
 * @param function
 * @param integer
 */
BetterJsPop.Utils.uTimeout(key, callback, milliseconds);
```
