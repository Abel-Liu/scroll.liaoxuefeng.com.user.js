// ==UserScript==
// @name         scroll.liaoxuefeng.com.user.js
// @namespace    http://abelliu.com
// @version      1.0
// @description  Add a button that click to scroll navigation to selected chapter
// @author       Abel
// @require      https://code.jquery.com/jquery-2.2.2.min.js
// @require      http://cdn.jsdelivr.net/jquery.scrollto/2.1.2/jquery.scrollTo.min.js
// @include      http://www.liaoxuefeng.com/*
// @grant        none
// ==/UserScript==

$(document).ready(function(){
    $("#header").after("<input id='btngo' type='button' value='go' style='position: fixed;z-index: 9999;top: 100px;right: 10px;opacity: .5;width: 50px;height: 40px;' />");
    $("#btngo").click(function(){
        var es = $(".uk-active");
        for(var i = 0;i < es.length;i++){
            if(es[i].id.length > 10 && es[i].id.substr(0,3)!='off'){
                $(window).scrollTo(es[i]);
                $(window).scrollTo("-=100px");
                break;
            }
        }
    });
});
