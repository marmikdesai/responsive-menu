/*!
 * Marmik Desai - Responsive menu with third level
 * Original author: @Marmik Desai
 * Further changes, comments: @Marmik Desai
 * Licensed under the MIT license
 */
(function($){
	mobileMenu();
	desktopMenu();
})(jQuery);
function desktopMenu(){
	if($(".navigation ul li ul").has("ul")){
		$(".navigation ul li ul").find("ul").parent().append("<i class='desktop-submenu-first'></i>");
	}
}
function mobileMenu(){
	var menuHtml = $(".navigation").html();
	
	$(".mobile-navigation").append(menuHtml);
	
	if($(".mobile-navigation ul li").has("ul")){
		$(".mobile-navigation ul li").find("ul").parent().append("<i class='mobile-submenu-first'></i>");
	}
	if($(".mobile-navigation ul li ul").has("ul")){
		$(".mobile-navigation ul li ul").find("ul").parent().find("i").attr("class","mobile-submenu-second");
	}
	$(".mmenu a").on("click touch", function(){
		if($(this).hasClass("mactive")){
			$(".mobile-navigation ul").slideUp(300);
			$(this).removeClass("mactive");
			$(".mobile-submenu-second").removeClass("mactive-second");
			$(".mobile-submenu-first").removeClass("mactive-first");
		} else {
			$(this).addClass("mactive");
			$(".mobile-navigation ul").slideDown(300);
			$(".mobile-navigation .sub-menu").hide();
			event.preventDefault();
		}
	});
	$(".mobile-submenu-first").on("click", function(event){
		if($(this).hasClass("mactive-first")){
			$(".mobile-navigation .sub-menu").hide(500);
			$(this).removeClass("mactive-first");
			$(".mobile-submenu-second").removeClass("mactive-second");
			
			$(this).parent().removeAttr("id");
			event.preventDefault();
		} else {
			$(".mobile-navigation ul li").removeAttr("id");
			$(this).parent().attr("id", "menu-active1");
			$(".mobile-navigation .sub-menu .sub-menu").hide();
			$(".mobile-navigation .sub-menu").hide(500);
			$(".mobile-submenu-first").removeClass("mactive-first");
			$(this).parent().find(".sub-menu").show(500);
			$(".mobile-navigation .sub-menu .sub-menu").hide();
			$(this).addClass("mactive-first");
			event.preventDefault();
		}
	});
	$(".mobile-submenu-second").on("click", function(event){
		if($(this).hasClass("mactive-second")){
			$(".mobile-navigation .sub-menu .sub-menu").hide(500);
			$(this).removeClass("mactive-second");
			event.preventDefault();
		} else {
			$(".mobile-navigation .sub-menu .sub-menu").hide(500);
			$(".mobile-submenu-second").removeClass("mactive-second");
			$(this).parent().find(".sub-menu").show(500);
			$(this).addClass("mactive-second");
			event.preventDefault();
		}
	});
}