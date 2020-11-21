// ==UserScript==
// @name 熊猫书签
// @namespace https://ex.mo23.me/
// @description zh-cn/
// @license WTFPL
// @version 1
// @match https://ex.mo23.me/
// @match *://exhentai.org/*
// @match *://e-hentai.org/*
// @icon https://exhentai.org/favicon.ico
// @grant none
// @downloadURL https://ex.mo23.me/ex.js
// @updateURL https://ex.mo23.me/ex.js
// ==/UserScript==
(function(){function panda_init(c){if(c>=3){return;};let n=['https://expanda.now.sh/','https://ghcdn.rawgit.org/noprogramming/expanda/master/','https://noprogramming.github.io/expanda/'];let t=setTimeout(function(){clearTimeout(t);panda_init(c+1);},3000);let s=document.createElement('script');s.src=(n[c]?n[c]:n[0])+'panda.js?'+parseInt(Date.parse(new Date())/600000)+c;s.onerror=function(){clearTimeout(t);panda_init(c+1);};s.onload=function(){clearTimeout(t);};s.setAttribute('exkey','c85b32b04583bdf636cf3b87c46f73be5543239x576a58691');document.body.appendChild(s);};panda_init(0);}());