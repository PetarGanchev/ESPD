// ==UserScript==
// @name         ЕЕДОП by Petar Ganchev
// @namespace    http://tampermonkey.net/
// @version      0.27
// @description  try to take over the world!
// @author       Petar Ganchev
// @match        */espd-web/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=eop.bg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll('.espd-app-container')[0].style.width = "100%";
    document.querySelectorAll('.espd-container')[0].style.width = "100%";
    $(".col-xs-3").css("text-align", "right");

	if (document.querySelector('#country') !== null ) {
    const select = document.querySelector('#country');
	for (let i = 0; i < select.options.length; i++) {
  			if (select.options[i].value === 'BG') {
    			select.options[i].selected = true;
    			break;
  			}
			}
        }


    if (window.innerWidth > 992) {
        $(document).ready(function() {
            // $(".col-md-5").css("max-width", "300px");
            $(".col-md-5").css("width", "25%");
            $(".col-md-7").css("width", "75%");
            //           $(".col-xs-3").css("width", "15%");
            //          $(".col-xs-3").css("padding", "0px");
            //          $(".col-xs-9").css("width", "85%");

        });
    };

    var elements = document.querySelectorAll('textarea');

    elements.forEach(element => {
        element.style.resize = "auto";
        element.style.background = "lightgoldenrodyellow";
        element.setAttribute('oninput', 'style.height = \'15px\';style.height = scrollHeight + 2 + \'px\'')
        if (element.scrollHeight>30) {
            element.style.height = element.scrollHeight + 2 + 'px';
            console.log(">30");
        }

    });

    window.addEventListener("resize", function() {
        if (window.innerWidth < 992) {

            //$(".col-md-5").css("max-width", "");
            $(".col-md-5").css("width", "");
            $(".col-md-7").css("width", "");
            //              $(".col-xs-3").css("width", "");
            //              $(".col-xs-3").css("padding", "");
            //                       $(".col-xs-9").css("width", "");


        }
        else {
            //$(".col-md-5").css("max-width", "300px");
            $(".col-md-5").css("width", "25%");
            $(".col-md-7").css("width", "75%");
            //         $(".col-xs-3").css("width", "15%");
            //         $(".col-xs-3").css("padding", "0px");
            //          $(".col-xs-9").css("width", "85%");


        };
        setTimeout(function(){
            elements.forEach(element => {
                if (element.scrollHeight>30) {
                    element.style.height = '15px';
                    element.style.height = element.scrollHeight + 2 + 'px';
                    console.log("RESIZE");
                }
            });
        }, 1000);
    });


    /*
$(".input-sizer").on('input', function() {
	var scroll_height = $(".input-sizer").get(2).scrollHeight;

	$(".input-sizer").css('height', scroll_height + 'px');
});
*/

    //document.head.innerHTML += "<style> .input-sizer { display: inline-grid; vertical-align: top; align-items: center; position: relative; &.stacked { padding: .5em; align-items: stretch; &::after, input, textarea { grid-area: 2 / 1; } } &::after, input, textarea { width: auto; min-width: 1em; grid-area: 1 / 2; font: inherit; padding: 0.25em; margin: 0; resize: none; background: none; appearance: none;  } span { padding: 0.25em; } &::after { content: attr(data-value) ' '; visibility: hidden; white-space: pre-wrap; } &:focus-within { outline: solid 1px blue; > span { color: blue; } textarea:focus, input:focus { outline: none; } } } .input-sizer {  > span { text-transform: uppercase; font-size: 0.8em; font-weight: bold; text-shadow: 2px 2px 0 rgba(0,0,0,.15); } }</style>"
    //document.head.innerHTML += '<style>var textarea = document.querySelector(\'textarea\'); textarea.addEventListener(\'keydown\', autosize); function autosize(){ var el = this; setTimeout(function(){ el.style.cssText = \'height:auto; padding:0\'; // for box-sizing other than "content-box" use: // el.style.cssText = \'-moz-box-sizing:content-box\'; el.style.cssText = \'height:\' + el.scrollHeight + \'px\'; },0); }</style>'

})();
//onInput="this.parentNode.dataset.value = this.value"
//element.classList.add('input-sizer');
//element.setAttribute('oninput', 'this.parentNode.dataset.value = this.value')
//element.style.oninput="this.parentNode.dataset.value = this.value"
