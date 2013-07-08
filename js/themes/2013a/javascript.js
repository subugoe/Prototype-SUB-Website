/* *	BREAKPOINTS */var breakpoints = [ 1600, 1200, 1024, 768, 480, 320];var bp_names = [ 'xxl', 'xl', 'l', 'm', 's', 'xs' ];var footer_icon = $('.footer__icon i');var logo_path = '../img/tmp/';var banner = $('.banner');var menu = $('.menu');var search = $('.search');//$(window).ready().bind('enterBreakpoint');$(window).setBreakpoints({	breakpoints: breakpoints,	bp_names: bp_names,});/* *	XXL * *	1.	insert the banner before the menu */$(window).bind('enterBreakpoint' + breakpoints[0], function() {	footer_icon.addClass('icon-desktop');	$('.logo img').attr('src', logo_path + 'logo__' + bp_names[0] + '.png');	$('.headersearch').show();	//breadcrumb.detach().prependTo('.contentbox');	banner.detach().prependTo('.contentbox');	console.log( 'Enter ' + bp_names[0] );});$(window).bind('exitBreakpoint' + breakpoints[0], function() {	footer_icon.removeClass('icon-desktop');	menu.before(banner);	// 1.	//$('.contentwrap').before(breadcrumb);	// 1.	console.log('Exit ' + bp_names[0]);});/* *	XL * */$(window).bind('enterBreakpoint' + breakpoints[1], function() {	footer_icon.addClass('icon-laptop');	$('.logo img').attr('src', logo_path + 'logo__' + bp_names[1] + '.png');	$('.headersearch').show();	//search.detach().appendTo('.header');	console.log('Enter ' + bp_names[1]);});$(window).bind('exitBreakpoint' + breakpoints[1], function() {	footer_icon.removeClass('icon-laptop');	console.log('Exit ' + bp_names[1]);});/* *	L * */$(window).bind('enterBreakpoint' + breakpoints[2], function() {	footer_icon.addClass('icon-tablet icon-rotate-right');	$('.logo img').attr('src', logo_path + 'logo__' + bp_names[2] + '.png');	$('.headersearch__content').hide();	$('.headersearch').hide();	console.log('Enter ' + bp_names[2]);});$(window).bind('exitBreakpoint' + breakpoints[2], function() {	footer_icon.removeClass('icon-tablet icon-rotate-right');	console.log('Exit ' + bp_names[2]);});// /* *	M * *	1.	replace the logo with the appropriate version * */$(window).bind('enterBreakpoint' + breakpoints[3], function() {	footer_icon.addClass('icon-tablet');	$('.logo img').attr('src', logo_path + 'logo__' + bp_names[3] + '.png');	// 1.	$('.headersearch__content').hide();	$('.headersearch').hide();	console.log('Enter ' + bp_names[3]);});$(window).bind('exitBreakpoint' + breakpoints[3], function() {	footer_icon.removeClass('icon-tablet');	console.log('Exit ' + bp_names[3]);});/* *	S * */$(window).bind('enterBreakpoint' + breakpoints[4], function() {	footer_icon.addClass('icon-mobile-phone icon-rotate-right');	$('.logo img').attr('src', logo_path + 'logo__' + bp_names[4] + '.png');	$('.headersearch__content').hide();	$('.headersearch').hide();	console.log('Enter ' + bp_names[4]);});$(window).bind('exitBreakpoint' + breakpoints[4], function() {	footer_icon.removeClass('icon-mobile-phone icon-rotate-right');	console.log('Exit ' + bp_names[4]);});/* *	XS * */$(window).bind( 'enterBreakpoint' + breakpoints[5], function() {	footer_icon.addClass('icon-mobile-phone');	$('.logo img' ).attr('src', logo_path + 'logo__' + bp_names[5] + '.png');	$('.headersearch__content').hide();	$('.headersearch').hide();	console.log('Enter ' + bp_names[5]);});$(window).bind('exitBreakpoint' + breakpoints[5], function() {	footer_icon.removeClass('icon-mobile-phone');	console.log('Exit ' + bp_names[5]);});/* *	MENU * *	http://jsfiddle.net/chriscoyier/VPfJ5/3/ *	 *	1.	hide all second level lists *	2.	save all first level link for later usage *	3.	catch click *	 *	z		prevent click */(function($) {	var allPanels = $('.mainnav .mainnav__list--secondlevel').hide();		// 1.	var allLinks = $('.mainnav .mainnav__link');												// 2.	var allI = $('.mainnav .mainnav__link i');													//	$('.mainnav__link').click(function() {															//		allPanels.slideUp();																							//		allLinks.removeClass('mainnav__link--active');										//		allI.removeClass('icon-angle-down');															//		allI.addClass('icon-angle-right');																//		$(this).addClass('mainnav__link--active');												//		var currentItemI = $(this).find('i');															//		currentItemI.removeClass('icon-angle-right');											//		currentItemI.addClass('icon-angle-down');													//		$(this).parent().next().slideDown();															//		return false;																											// z	});})(jQuery);/* *	SEARCH */(function($){	var allSearchContent = $('.search__content').hide();	$('.search__header').click(function() {		allSearchContent.slideUp();		$(this).next().slideDown();		});})(jQuery);/* *	PANEL *//* * *	valid values for first val: *		everything after the double dash 				"panel__trigger--'value'" *		everything after the double underscore 	"panel__'value'" *	valid values for second val: 'left', 'right' *		('top', 'bottom' currently not implemented) * *	1.	Panel trigger clicked *	2.	react on active panel triggers only *	3.	push the body (wrap) to one side *	4.	open the triggered panel *	5.	deactive all panel tiggers *	6.	check if a panel is open *	7.	reactivate the panel trigger related to the currently open panel *	8.	if currently no panel is open *	9.	reactivate all panel triggers *	z.	prevent click */function panel(panel, direction) {	//var height = $(window).height();																								// 	$('.panel__trigger--' + panel).click(function() {																	// 1.		if ($('.panel__trigger--' + panel).hasClass('panel__trigger--active')) {				// 2.			$('body').toggleClass('panel__helper--push-to' + direction);									// 3.			$('.panel__' + panel ).toggleClass('panel__helper--open');										// 4.			$('.panel__trigger').removeClass('panel__trigger--active');										// 5.			if ($('.panel__' + panel).hasClass('panel__helper--open')) {									// 6.				//$('.panel__' + panel + ' .panel__content').css('height', (height - 25));	// 				$('.panel__trigger--' + panel).addClass('panel__trigger--active');					// 7.				$('.overlay').show();			} else {																																			// 8.				$('.panel__trigger').addClass('panel__trigger--active');										// 9.				$('.overlay').hide();			}		}		return false;																																		// z.	});}function panelClose() {	$('.panel__close').click(function() {		$('.panel__trigger').addClass('panel__trigger--active');		$('.panel__item').removeClass('panel__helper--open');		$('body').removeClass('panel__helper--push-toleft');		$('body').removeClass('panel__helper--push-toright');		$('body').removeClass('panel__helper--push-totop');		$('body').removeClass('panel__helper--push-tobottom');		$('.overlay').hide();		return false;	});}panel('guk', 'left');panel('gvk', 'left');panel('gvkplus', 'left');panel('ezb', 'left');panel('dbis', 'left');panelClose();/* *	HEADERSEARCH */$('.headersearch__chooselink').click(function() {	if ($(this).hasClass('headersearch__choose--catalog')) {		//console.log('headersearch__choose--catalog');		$('.headersearch__content--catalog').toggleClass('headersearch__content--active');		$('.headersearch__content--discipline').removeClass('headersearch__content--active');		$('.headersearch__content--website').removeClass('headersearch__content--active');	} else if ($(this).hasClass('headersearch__choose--discipline')) {		$('.headersearch__content--discipline').toggleClass('headersearch__content--active');		$('.headersearch__content--catalog').removeClass('headersearch__content--active');		$('.headersearch__content--website').removeClass('headersearch__content--active');		//console.log('headersearch__choose--discipline');	} else if ($(this).hasClass('headersearch__choose--website')) {		$('.headersearch__content--website').toggleClass('headersearch__content--active');		$('.headersearch__content--catalog').removeClass('headersearch__content--active');		$('.headersearch__content--discipline').removeClass('headersearch__content--active');		//console.log('headersearch__choose--website');	}	if ($('.headersearch__chooseitem').hasClass('headersearch__chooseitem--active')) {		$('.headersearch__content').hide();	} else {		$('.headersearch__content').show();	}	$('.headersearch__chooseitem').toggleClass('headersearch__chooseitem--active');	//console.log('choose');	return false;});$('.headersearch__content').hide();$('.headersearch__infolink').click(function() {	return false;});