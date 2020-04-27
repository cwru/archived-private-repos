/* Rave */

<t4 type="media" id="42056" formatter="inline/*" />

/* End Rave */

// Back to top
jQuery(document).ready(function(){$(window).scroll(function(){if(jQuery(this).scrollTop()>100){jQuery("#back-top").fadeIn()}else{jQuery("#back-top").fadeOut()}});jQuery("#back-top").click(function(){jQuery("body,html").animate({scrollTop:0},300);return false})}) 

// Slider
$(window).load(function(){if($(".flexslider").flexslider){$(".flexslider").flexslider({animation:"slide",controlsContainer:".flex-container"})}})
 
// Mobile Nav
jQuery(document).ready(function(){jQuery(".mobile-nav .dropmenu li a").click(function(){var e=$(this).next();var t=$(this).parent().siblings().find("ul");if(e.is(":visible")){e.slideUp("normal")}else{t.slideUp("normal");e.slideDown("normal")}});jQuery(".mobile-nav-toggle, .mobile-nav-toggle_smartphone").click(function(){jQuery(".mobile-nav .dropmenu ").slideToggle("fast");return false})})

// Global links toggle
jQuery(document).ready(function(){jQuery("#global-menu-toggle").click(function(){jQuery("#global-menu").slideToggle("fast");jQuery(this).toggleClass("active");return false});jQuery(document).click(function(){if(jQuery(this).attr("id")!=="global-menu-toggle"){if(jQuery("#global-menu-toggle").hasClass("active")){jQuery("#global-menu").slideToggle("fast");jQuery("#global-menu-toggle").removeClass("active")}}})})

//Responsive Tables
jQuery(document).ready(function(){
	if($('table').length){

			if($('.ie8 table').length === 0){		
				jQuery('table:not(.noStack)').stacktable({'class':'mobileDisplay'});
			}

	}

});

if ($.browser === undefined) {
  var matched, browser;
  
  // Use of jQuery.browser is frowned upon.
  // More details: http://api.jquery.com/jQuery.browser
  // jQuery.uaMatch maintained for back-compat
  // MIT License
  jQuery.uaMatch=function(ua){ua=ua.toLowerCase();var match=/(chrome)[ \/]([\w.]+)/.exec(ua)||(/(webkit)[ \/]([\w.]+)/.exec(ua)||(/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua)||(/(msie) ([\w.]+)/.exec(ua)||(ua.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)||[]))));return{browser:match[1]||"",version:match[2]||"0"}};matched=jQuery.uaMatch(navigator.userAgent);browser={};if(matched.browser){browser[matched.browser]=true;browser.version=matched.version}if(browser.chrome)browser.webkit=true;else if(browser.webkit)browser.safari=true;jQuery.browser=browser;
}

/*	
 *	jQuery dropmenu 1.1.4
 *	www.frebsite.nl
 *	Copyright (c) 2010 Fred Heusschen
 *	Licensed under the MIT license.
 *	http://www.opensource.org/licenses/mit-license.php
 */
 
(function($){$.fn.dropmenu=function(options){var isIE=$.browser.msie,isIE6=isIE&&$.browser.version<=7,isIE7=isIE&&$.browser.version==7,isIE8=isIE&&$.browser.version==8;return this.each(function(){var opts=$.extend({},$.fn.dropmenu.defaults,options),$menu=$(this),$topl=$menu.find("> li"),menuX=$menu.offset().left;if(opts.maxWidth==0)opts.maxWidth=$("body").width()-menuX;$menu.css({display:"block",listStyle:"none"}).find("li").css({display:"block",listStyle:"none",position:"relative",margin:0,padding:0});var css={display:"block",outline:"none"};if(opts.nbsp)css["whiteSpace"]="nowrap";$menu.find("li > a, li > span").css(css);$topl.find("> a, > span").addClass("toplevel");$menu.find("ul");$topl.find("> ul").css({left:0,top:$topl.outerHeight()}).find("li > a, li > span").addClass("sublevel").parent().find("ul").css({top:0}).data("subsub",true);$topl;if(isIE6)$menu.find("ul").css({lineHeight:0});if(isIE6||(isIE7||isIE8))$menu.find("ul a, ul span").css({zoom:1});$menu.find("a").click(function(){$("ul",$menu).hide();$("a, span",$menu).removeClass("hover")});$menu.find("li").hover(function(){var listit=this,subnav=$.fn.dropmenu.getSubnav(listit),subcss={zIndex:$.fn.dropmenu.zIndex++};$(listit).find("> a, > span").addClass("hover");if(!subnav)return;if($(subnav).is(":animated"))return;if($.data(subnav,"subsub")){var distance=$(listit).outerWidth(),itemWidth=$(listit).offset().left+distance-menuX,position=opts.maxWidth<itemWidth?"right":"left";subcss[position]=distance}$(subnav).css(subcss);$.data(subnav,"stayOpen",true);switch(opts.effect){case "slide":$(subnav).slideDown(opts.speed);break;case "fade":$(subnav).fadeIn(opts.speed);break;default:$(subnav).show();break}},function(){var listit=this,subnav=$.fn.dropmenu.getSubnav(listit);if(!subnav){$(listit).find("> a, > span").removeClass("hover");return}$.data(subnav,"stayOpen",false);setTimeout(function(){if($.data(subnav,"stayOpen"))return;$(listit).find("> a, > span").removeClass("hover");$("ul",subnav).hide();switch(opts.effect){case "slide":$(subnav).slideUp(opts.speed);break;case "fade":$(subnav).fadeOut(opts.speed);break;default:$(subnav).hide();break}},opts.timeout)})})};$.fn.dropmenu.getSubnav=function(ele){if(ele.nodeName.toLowerCase()=="li"){var subnav=$("> ul",ele);return subnav.length?subnav[0]:null}else return ele};$.fn.dropmenu.zIndex=500;$.fn.dropmenu.defaults={effect:"none",speed:"normal",timeout:250,nbsp:false,maxWidth:0}})(jQuery);
 

/* end dropdown */


//menu.js
$(document).ready(function(){$(".desktop-nav .dropmenu").css("display","block");$(".desktop-nav > ul").dropmenu({effect:"slide",speed:"fast",timeout:0,nbsp:false});$("li").has("ul").find("> a").addClass("indicator")});$(window).load(function(){$(".desktop-nav").sticky({topSpacing:-5})});$(document).ready(function(e){$("nav.mobile-nav li:has(ul)").doubleTapToGo();$("#global-menu-toggle").doubleTapToGo()})
//end menu.js

/* bootstraps modal */

/**
* Bootstrap.js by @fat & @mdo
* plugins: bootstrap-transition.js, bootstrap-modal.js
* Copyright 2013 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(a){a(function(){a.support.transition=function(){var a=function(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},c;for(c in b)if(a.style[c]!==undefined)return b[c]}();return a&&{end:a}}()})}(window.jQuery),!function(a){var b=function(b,c){this.options=c,this.$element=a(b).delegate('[data-dismiss="modal"]',"click.dismiss.modal",a.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};b.prototype={constructor:b,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var b=this,c=a.Event("show");this.$element.trigger(c);if(this.isShown||c.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var c=a.support.transition&&b.$element.hasClass("fade");b.$element.parent().length||b.$element.appendTo(document.body),b.$element.show(),c&&b.$element[0].offsetWidth,b.$element.addClass("in").attr("aria-hidden",!1),b.enforceFocus(),c?b.$element.one(a.support.transition.end,function(){b.$element.focus().trigger("shown")}):b.$element.focus().trigger("shown")})},hide:function(b){b&&b.preventDefault();var c=this;b=a.Event("hide"),this.$element.trigger(b);if(!this.isShown||b.isDefaultPrevented())return;this.isShown=!1,this.escape(),a(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),a.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var b=this;a(document).on("focusin.modal",function(a){b.$element[0]!==a.target&&!b.$element.has(a.target).length&&b.$element.focus()})},escape:function(){var a=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(b){b.which==27&&a.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var b=this,c=setTimeout(function(){b.$element.off(a.support.transition.end),b.hideModal()},500);this.$element.one(a.support.transition.end,function(){clearTimeout(c),b.hideModal()})},hideModal:function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?a.proxy(this.$element[0].focus,this.$element[0]):a.proxy(this.hide,this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!b)return;e?this.$backdrop.one(a.support.transition.end,b):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b):b()):b&&b()}};var c=a.fn.modal;a.fn.modal=function(c){return this.each(function(){var d=a(this),e=d.data("modal"),f=a.extend({},a.fn.modal.defaults,d.data(),typeof c=="object"&&c);e||d.data("modal",e=new b(this,f)),typeof c=="string"?e[c]():f.show&&e.show()})},a.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f).one("hide",function(){c.focus()})})}(window.jQuery)  
/* end bootstraps modal */
  
$(document).ready(function() {   
var attrs = {};
var attrMap = $('body')[0].attributes;
$.each(attrMap, function(i,e) { attrs[e.nodeName] = e.nodeValue; });
            
if (attrs['data-href5'] !== '') {
$('body').attr('data-href4', '').attr('data-href3', '').attr('data-href2', '');
} else if (attrs['data-href4'] !== '') {
$('body').attr('data-href3', '').attr('data-href2', '');
} else if (attrs['data-href3'] !== '') {
$('body').attr('data-href2', '');
}
});
             
             
/* ========================================================
 * bootstrap-tab.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */

!function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype={constructor:t,show:function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),r=t.attr("data-target"),i,s,o;if(!r){r=t.attr("href");r=r&&r.replace(/.*(?=#[^\s]*$)/,"")}if(t.parent("li").hasClass("active"))return;i=n.find(".active:last a")[0];o=e.Event("show",{relatedTarget:i});t.trigger(o);if(o.isDefaultPrevented())return;s=e(r);this.activate(t.parent("li"),n);this.activate(s,s.parent(),function(){t.trigger({type:"shown",relatedTarget:i})})},activate:function(t,n,r){function o(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");t.addClass("active");if(s){t[0].offsetWidth;t.addClass("in")}else{t.removeClass("fade")}if(t.parent(".dropdown-menu")){t.closest("li.dropdown").addClass("active")}r&&r()}var i=n.find("> .active"),s=r&&e.support.transition&&i.hasClass("fade");s?i.one(e.support.transition.end,o):o();i.removeClass("in")}};var n=e.fn.tab;e.fn.tab=function(n){return this.each(function(){var r=e(this),i=r.data("tab");if(!i)r.data("tab",i=new t(this));if(typeof n=="string")i[n]()})};e.fn.tab.Constructor=t;e.fn.tab.noConflict=function(){e.fn.tab=n;return this};e(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault();e(this).tab("show")})}(window.jQuery);
             

/* FitVidJS */

(function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null};if(!document.getElementById("fit-vids-style")){var r=document.head||document.getElementsByTagName("head")[0];var i=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}";var s=document.createElement("div");s.innerHTML='<p>x</p><style id="fit-vids-style">'+i+"</style>";r.appendChild(s.childNodes[1])}if(t){e.extend(n,t)}return this.each(function(){var t=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];if(n.customSelector){t.push(n.customSelector)}var r=e(this).find(t.join(","));r=r.not("object object");r.each(function(){var t=e(this);if(this.tagName.toLowerCase()==="embed"&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length){return}var n=this.tagName.toLowerCase()==="object"||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),r=!isNaN(parseInt(t.attr("width"),10))?parseInt(t.attr("width"),10):t.width(),i=n/r;if(!t.attr("id")){var s="fitvid"+Math.floor(Math.random()*999999);t.attr("id",s)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",i*100+"%");t.removeAttr("height").removeAttr("width")})})}})(window.jQuery||window.Zepto)
 
/* end FitVidJS */

/*IMPORTANT!! - Hides Aurora Injected Banner to not duplicate site banners during RAVE alerts 
document.getElementById("cap_alert_div").style.display="none";*/