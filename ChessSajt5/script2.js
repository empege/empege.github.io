$(document).ready(function(){
		
	var welcome = document.getElementById('welcome');
	var welcomeHeight = welcome.offsetHeight;
	// 85 je visina headera
	var lastScroll = $(window).scrollTop();
	var newScroll = $(window).scrollTop();
	var scrolling = false;
	var scrollingDown = false;
	var scrollingUp = false;
	var productsBtn = $('#products-action-btn');
	
	//When screen resizes get the values of the screen again
	$(window).resize(function() {
		welcomeHeight = welcome.offsetHeight;
		lastScroll = $(window).scrollTop();
		newScroll = $(window).scrollTop();
	});
	
	//Full page scroll from and to welcome page
	$(window).scroll(function(){
		console.log('1')
		newScroll = $(window).scrollTop();
		//going down
		console.log('2')
		if(newScroll > lastScroll){
			if($(document).scrollTop() >= 0 && $(document).scrollTop() <= (welcomeHeight - 85) && scrollingDown == false){
				window.scrollTo(0, (welcomeHeight - 85));
				//setTimeout(function(){window.scrollTo(0, (welcomeHeight - 85));}, 100);
				scrollingDown = true;
			}
			lastScroll = newScroll;
			if($(window).scrollTop() >= (welcomeHeight - 85)){scrollingDown = false;}
			if($(window).scrollTop() == 0){scrollingDown = false;}
		//going up	
		}else if(newScroll < lastScroll){
			if($(document).scrollTop() <= (welcomeHeight - 150) && scrollingUp == false){
				window.scrollTo(0, 0);
				scrollingUp = true;
			}
			lastScroll = newScroll;
			if($(window).scrollTop() == 0){scrollingUp = false;}
		}
	
		/* console.log('scrolling ' + scrolling)
		newScroll = $(window).scrollTop();
		if(scrolling == false){
			scrolling = true;
			//going down
			if(newScroll > lastScroll){
				if($(document).scrollTop() >= 0 && $(document).scrollTop() <= (welcomeHeight - 85)){
					window.scrollTo(0, (welcomeHeight - 85));
				}
				lastScroll = newScroll;
				setTimeout(function(){ scrolling = false; console.log('kraj')}, 500);
			//going up	
			}else if(newScroll < lastScroll){
				if($(document).scrollTop() <= (welcomeHeight - 150)){
					window.scrollTo(0, 0);
				}
				lastScroll = newScroll;
				setTimeout(function(){ scrolling = false; console.log('kraj')}, 500);
			}
		} */
	});
});





















