/*
	Breakpoints.js
	version 1.0

	Creates handy events for your responsive design breakpoints

	Copyright 2011 XOXCO, Inc
	http://xoxco.com/

	Documentation for this plugin lives here:
	http://xoxco.com/projects/code/breakpoints

	Licensed under the MIT license:
	http://www.opensource.org/licenses/mit-license.php

*/
(function($) {

	var lastSize = 0;
	var interval = null;

	$.fn.resetBreakpoints = function() {
		$(window).unbind('resize');
		if (interval) { clearInterval(interval); }
		lastSize = 0;
	};

	$.fn.setBreakpoints = function(settings) {

		var options = jQuery.extend({
							breakpoints: new Array( 320, 480, 768, 1024 ),
							bp_names: new Array ( 's', 'm', 'l', 'xl' ),
							}, settings);

		interval = $(window).on('resize ready', function() {
			
			//console.log('asdf');

			////////////////////////////////////////////////////////////
			
			/*! viewportSize | Author: Tyson Matanich, 2013 | License: MIT */
			(function (window) {
				window.viewportSize = {};
				window.viewportSize.getHeight = function () { return getSize("Height"); };
				window.viewportSize.getWidth = function () { return getSize("Width"); };
				var getSize = function (Name) {
					var size;
					var name = Name.toLowerCase();
					var document = window.document;
					var documentElement = document.documentElement;
					if (window["inner" + Name] === undefined) {
						size = documentElement["client" + Name]; // IE6 & IE7 don't have window.innerWidth or innerHeight
					}
					else if (window["inner" + Name] != documentElement["client" + Name]) {
						// WebKit doesn't include scrollbars while calculating viewport size so we have to get fancy
			
						// Insert markup to test if a media query will match document.doumentElement["client" + Name]
						var bodyElement = document.createElement("body");
						bodyElement.id = "vpw-test-b";
						bodyElement.style.cssText = "overflow:scroll";
						var divElement = document.createElement("div");
						divElement.id = "vpw-test-d";
						divElement.style.cssText = "position:absolute;top:-1000px";
						// Getting specific on the CSS selector so it won't get overridden easily
						divElement.innerHTML = "<style>@media(" + name + ":" + documentElement["client" + Name] + "px){body#vpw-test-b div#vpw-test-d{" + name + ":7px!important}}</style>";
						bodyElement.appendChild(divElement);
						documentElement.insertBefore(bodyElement, document.head);

						if (divElement["offset" + Name] == 7) {
							size = documentElement["client" + Name]; // Media query matches document.documentElement["client" + Name]
						} else {
							size = window["inner" + Name]; // Media query didn't match, use window["inner" + Name]
						}
						documentElement.removeChild(bodyElement); // Cleanup
					} else {
						size = window["inner" + Name]; // Default to use window["inner" + Name]
					}
					return size;
				};
			})(this);
			
			////////////////////////////////////////////////////////////

			var w = viewportSize.getWidth()
			var done = false;

			for (var bp in options.breakpoints.sort(function(a, b) { return (b-a) })) {

				// fire onEnter when a browser expands into a new breakpoint
				// if in distinct mode, remove all other breakpoints first.
				if (!done && w >= options.breakpoints[bp] && lastSize < options.breakpoints[bp]) {
				//if (w >= options.breakpoints[bp] && lastSize < options.breakpoints[bp]) {
					for (var x in options.breakpoints.sort(function(a, b) { return (b-a) })) {
						if ($('body').hasClass('breakpoint-' + options.bp_names[x])) {
							$('body').removeClass('breakpoint-' + options.bp_names[x]);
							$(window).trigger('exitBreakpoint' + options.breakpoints[x]);
						}
					}
					
					$('.logo img').attr('src', logo_path + 'logo__' + bp_names[bp] + '.png');
					$('body').addClass('breakpoint-' + options.bp_names[bp]);
					$(window).trigger('enterBreakpoint' + options.breakpoints[bp]);
					done = true;
				}

				// fire onExit when browser contracts out of a larger breakpoint
				if (w < options.breakpoints[bp] && lastSize >= options.breakpoints[bp]) {
					$('body').removeClass('breakpoint-' + options.bp_names[bp]);
					$(window).trigger('exitBreakpoint' + options.breakpoints[bp]);
				}

				// if in distinct mode, fire onEnter when browser contracts into a smaller breakpoint
				if (
					w >= options.breakpoints[bp] && // and we are in this one
					w < options.breakpoints[bp-1] && // and smaller than the bigger one
					lastSize > w && // and we contracted
					lastSize >0 &&  // and this is not the first time
					!$('body').hasClass('breakpoint-' + options.bp_names[bp]) // and we aren't already in this breakpoint
					) {
					$('body').addClass('breakpoint-' + options.bp_names[bp]);
					$(window).trigger('enterBreakpoint' + options.breakpoints[bp]);
				}

			}

			if (lastSize != w) { lastSize = w; } // set up for next call

		}).resize();

	};

})(jQuery);