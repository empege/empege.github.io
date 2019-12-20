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
			$('#logo-first-child').fadeOut(200);
			$('#logo-img-small').fadeIn(50);
		}
	}
	function stickyUp() {
		if($(window).scrollTop() >= welcomeHeight){
			header.attr('class', 'container-header');
			$('#logo-first-child').fadeIn(150);
			$('#logo-img-small').fadeOut(150);
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
		//$('.sidebar').slideToggle('fast');
		if($('.sidebar').hasClass('hidden')){
			$('.sidebar').show();
			setTimeout(function(){$('.sidebar').removeClass('hidden').addClass('shown');}, 1);
		}else{$('.sidebar').removeClass('shown').addClass('hidden');
			setTimeout(function(){$('.sidebar').hide();}, 300);
		}
	});
	
	//show sidebar on scroll
	(function(){
		if($(window).width() > 980){
			if($(window).scrollTop() > 300){$('.sidebar').addClass('shown').removeClass('hidden');}
			$(window).scroll(function(){
			if($(window).scrollTop() > 300){
				$('.sidebar').addClass('shown').removeClass('hidden');
						$('.mySlides-product').addClass('shown').removeClass('hidden');
			}else{$('.sidebar').addClass('hidden').removeClass('shown');
						$('.mySlides-product').addClass('hidden').removeClass('shown');}
			});
		}
	})();
	
	//show sidebar-submenu
	$('.boards-menu').on('mouseenter', function(){if($(window).width() > 980){$('.sidebar-submenu').fadeIn(159);}});
	$('.boards-menu').on('mouseleave', function(){if($(window).width() > 980){$('.sidebar-submenu').fadeOut(159);}});
	
	
	
	
	
});



//slider action page
	var slideIndex = 0;
	var test;
	showSlides(slideIndex, true);
	//carousel();
	function plusSlides(n) {
	  showSlides(slideIndex += n);
	}
	function currentSlide(n) {
	  showSlides(slideIndex = n);
	}
	function showSlides(n, carouselArg = false) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides");
	  var dots = document.getElementsByClassName("dot");
	  if (n > slides.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
		  slides[i].style.display = "none";  
	  }
	  for (i = 0; i < dots.length; i++) {
		  dots[i].className = dots[i].className.replace(" active", "");
	  }
	  slides[slideIndex-1].style.display = "block";  
	  dots[slideIndex-1].className += " active";
	  clearTimeout(test);
	  carousel(carouselArg)
	}
	var keepGoing = true;
	var brojac = true;
	function carousel(param = true) {
		if(param) {
			var i;
			var x = document.getElementsByClassName("mySlides");
			var dots = document.getElementsByClassName("dot");
			for (i = 0; i < x.length; i++) {
			  x[i].style.display = "none"; 
			}
			for (i = 0; i < dots.length; i++) {
			  dots[i].className = dots[i].className.replace(" active", "");
			}
			slideIndex++;
			console.log(slideIndex)
			if (slideIndex > x.length) {slideIndex = 1} 
			x[slideIndex-1].style.display = "block";
			dots[slideIndex-1].className += " active";
		}
		test = setTimeout(carousel, 6000);
	}
	$(function() {
	  $(".smoothScroll").click(function() {
		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 800); // The number here represents the speed of the scroll in milliseconds
			return false;
		  }
		}
	  });
	});



//slider products
	//product 1
	var slideIndexProduct1 = 1;
	showSlidesProduct1(slideIndexProduct1, true);
	function plusSlidesProduct1(n) {showSlidesProduct1(slideIndexProduct1 += n);}
	function currentSlideProduct1(n) {showSlidesProduct1(slideIndexProduct1 = n);}
	function showSlidesProduct1(n, carouselArgProduct = false) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides-product product-1");
	  if (n > slides.length) {slideIndexProduct1 = 1}
	  if (n < 1) {slideIndexProduct1 = slides.length}
	  for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
	  slides[slideIndexProduct1-1].style.display = "block";
	}
	//product 2
	var slideIndexProduct2 = 1;
	showSlidesProduct2(slideIndexProduct2, true);
	function plusSlidesProduct2(n) {showSlidesProduct2(slideIndexProduct2 += n);}
	function currentSlideProduct2(n) {showSlidesProduct2(slideIndexProduct2 = n);}
	function showSlidesProduct2(n, carouselArgProduct = false) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides-product product-2");
	  if (n > slides.length) {slideIndexProduct2 = 1}
	  if (n < 1) {slideIndexProduct2 = slides.length}
	  for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
	  slides[slideIndexProduct2-1].style.display = "block";
	}
	//product 3
	var slideIndexProduct3 = 1;
	showSlidesProduct3(slideIndexProduct3, true);
	function plusSlidesProduct3(n) {showSlidesProduct3(slideIndexProduct3 += n);}
	function currentSlideProduct3(n) {showSlidesProduct3(slideIndexProduct3 = n);}
	function showSlidesProduct3(n, carouselArgProduct = false) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides-product product-3");
	  if (n > slides.length) {slideIndexProduct3 = 1}
	  if (n < 1) {slideIndexProduct3 = slides.length}
	  for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
	  slides[slideIndexProduct3-1].style.display = "block";
	}
	//product 4
	var slideIndexProduct4 = 1;
	showSlidesProduct4(slideIndexProduct4, true);
	function plusSlidesProduct4(n) {showSlidesProduct4(slideIndexProduct4 += n);}
	function currentSlideProduct4(n) {showSlidesProduct4(slideIndexProduct4 = n);}
	function showSlidesProduct4(n, carouselArgProduct = false) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides-product product-4");
	  if (n > slides.length) {slideIndexProduct4 = 1}
	  if (n < 1) {slideIndexProduct4 = slides.length}
	  for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
	  slides[slideIndexProduct4-1].style.display = "block";
	}
	//product 5
	var slideIndexProduct5 = 1;
	showSlidesProduct5(slideIndexProduct5, true);
	function plusSlidesProduct5(n) {showSlidesProduct5(slideIndexProduct5 += n);}
	function currentSlideProduct5(n) {showSlidesProduct5(slideIndexProduct5 = n);}
	function showSlidesProduct5(n, carouselArgProduct = false) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides-product product-5");
	  if (n > slides.length) {slideIndexProduct5 = 1}
	  if (n < 1) {slideIndexProduct5 = slides.length}
	  for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
	  slides[slideIndexProduct5-1].style.display = "block";
	}
	//product 6
	var slideIndexProduct6 = 1;
	showSlidesProduct6(slideIndexProduct6, true);
	function plusSlidesProduct6(n) {showSlidesProduct6(slideIndexProduct6 += n);}
	function currentSlideProduct6(n) {showSlidesProduct6(slideIndexProduct6 = n);}
	function showSlidesProduct6(n, carouselArgProduct = false) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides-product product-6");
	  if (n > slides.length) {slideIndexProduct6 = 1}
	  if (n < 1) {slideIndexProduct6 = slides.length}
	  for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
	  slides[slideIndexProduct6-1].style.display = "block";
	}
	//product 7
	var slideIndexProduct7 = 1;
	showSlidesProduct7(slideIndexProduct7, true);
	function plusSlidesProduct7(n) {showSlidesProduct7(slideIndexProduct7 += n);}
	function currentSlideProduct7(n) {showSlidesProduct7(slideIndexProduct7 = n);}
	function showSlidesProduct7(n, carouselArgProduct = false) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides-product product-7");
	  if (n > slides.length) {slideIndexProduct7 = 1}
	  if (n < 1) {slideIndexProduct7 = slides.length}
	  for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
	  slides[slideIndexProduct7-1].style.display = "block";
	}
	//product 8
	var slideIndexProduct8 = 1;
	showSlidesProduct8(slideIndexProduct8, true);
	function plusSlidesProduct8(n) {showSlidesProduct8(slideIndexProduct8 += n);}
	function currentSlideProduct8(n) {showSlidesProduct8(slideIndexProduct8 = n);}
	function showSlidesProduct8(n, carouselArgProduct = false) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides-product product-8");
	  if (n > slides.length) {slideIndexProduct8 = 1}
	  if (n < 1) {slideIndexProduct8 = slides.length}
	  for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
	  slides[slideIndexProduct8-1].style.display = "block";
	}
	//product 9
	var slideIndexProduct9 = 1;
	showSlidesProduct9(slideIndexProduct9, true);
	function plusSlidesProduct9(n) {showSlidesProduct9(slideIndexProduct9 += n);}
	function currentSlideProduct9(n) {showSlidesProduct9(slideIndexProduct9 = n);}
	function showSlidesProduct9(n, carouselArgProduct = false) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides-product product-9");
	  if (n > slides.length) {slideIndexProduct9 = 1}
	  if (n < 1) {slideIndexProduct9 = slides.length}
	  for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
	  slides[slideIndexProduct9-1].style.display = "block";
	}
	//product 10
	var slideIndexProduct10 = 1;
	showSlidesProduct10(slideIndexProduct10, true);
	function plusSlidesProduct10(n) {showSlidesProduct10(slideIndexProduct10 += n);}
	function currentSlideProduct10(n) {showSlidesProduct10(slideIndexProduct10 = n);}
	function showSlidesProduct10(n, carouselArgProduct = false) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides-product product-10");
	  if (n > slides.length) {slideIndexProduct10 = 1}
	  if (n < 1) {slideIndexProduct10 = slides.length}
	  for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
	  slides[slideIndexProduct10-1].style.display = "block";
	}
















