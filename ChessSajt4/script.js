$(document).ready(function(){
		
	var welcome = document.getElementById('welcome');
	var welcomeHeight = welcome.offsetHeight;
	// 85 je visina headera
	var lastScroll = $(window).scrollTop();
	var newScroll = $(window).scrollTop();
	var scrollingDown = false;
	var scrollingUp = false;
	var homeOrDownBtnClicked = false;
	var homeOrDownBtnIsOn = false;
	var windowsWidthOk = true;
	if($(window).width() < 768 || $(window).height() < 768){windowsWidthOk = false;}else{windowsWidthOk = true;}
	
	//When screen resizes get the values of the screen again
	$(window).resize(function() {
		welcomeHeight = welcome.offsetHeight;
		lastScroll = $(window).scrollTop();
		newScroll = $(window).scrollTop();
		if($(window).width() < 768 || $(window).height() < 550){windowsWidthOk = false;}else{windowsWidthOk = true;}
		console.log($(window).width());
	});
	
	//Sticky header :D
	var header = $('#header');
	function stickyDown() {
		if($(window).scrollTop() >= welcomeHeight){
			header.attr('class', 'container-header sticky');
		}
	}
	function stickyUp() {
		if($(window).scrollTop() >= welcomeHeight){
			header.attr('class', 'container-header');
		}
	}


	//When Products or Home btn are clicked there's sometimes a bug with scrolling up or down, this fixes it.
	$('.up-down-btn-slide').on('click', function(){
		if(homeOrDownBtnIsOn == false){
			homeOrDownBtnClicked = true;
			homeOrDownBtnIsOn = true;
			setTimeout(function(){
				homeOrDownBtnClicked = false;
				homeOrDownBtnIsOn = false;
			}, 900);
		}
	});
	
	//Full page scroll from and to welcome page
	$(window).scroll(function(){
	if(windowsWidthOk == true){//kad se resize da nema taj efekat da skloni ceo ekran - ovo mozda izbrisi ako lepo radi na fonu, videces vec
		newScroll = $(window).scrollTop();
		//going down
		if(newScroll > lastScroll){
			stickyDown();
			if(($(document).scrollTop() >= 0) && $(document).scrollTop() <= (welcomeHeight - 85) && scrollingDown == false && homeOrDownBtnClicked == false){
				window.scrollTo(0, (welcomeHeight - 85));
				scrollingDown = true;
			}
			lastScroll = newScroll;
			if(($(window).scrollTop() >= (welcomeHeight - 85)) && scrollingDown == true){scrollingDown = false;}
			if(($(window).scrollTop() == 0) && scrollingDown == true){scrollingDown = false;}
		//going up	
		}else if(newScroll < lastScroll){
			stickyUp();
			if($(document).scrollTop() <= (welcomeHeight - 150) && scrollingUp == false && homeOrDownBtnClicked == false){
				window.scrollTo(0, 0);
				scrollingUp = true;
			}
			lastScroll = newScroll;
			if(($(window).scrollTop() == 0) && scrollingUp == true){scrollingUp = false;}
		}
	}
	});
	
	
	
	$('#ham').on('click', function(){
		$('.sidebar').slideToggle('fast');
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});