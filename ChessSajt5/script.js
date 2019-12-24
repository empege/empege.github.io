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
	if($(window).width() < 560){$('#logo-img-big').attr('src', 'logos/nin2.jpg');}else{$('#logo-img-big').attr('src', 'logos/crnobeli.png');}
	
	//When screen resizes get the values of the screen again
	$(window).resize(function() {
		welcomeHeight = welcome.offsetHeight;
		lastScroll = $(window).scrollTop();
		newScroll = $(window).scrollTop();
		if($(window).width() < 768 || $(window).height() < 550){windowsWidthOk = false;}else{windowsWidthOk = true;}
		console.log($(window).width());
		if($(window).width() < 560){$('#logo-img-big').attr('src', 'logos/verlogobeli.png');}else{$('#logo-img-big').attr('src', 'logos/crnobeli.png');}
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
						$('.swiper-slide').addClass('shown').removeClass('hidden');
			}else{$('.sidebar').addClass('hidden').removeClass('shown');
						$('.swiper-slide').addClass('hidden').removeClass('shown');}
			});
		}
	})();
	
	//show sidebar-submenu
	$('.boards-menu').on('mouseenter', function(){if($(window).width() > 980){$('.sidebar-submenu').fadeIn(159);}});
	$('.boards-menu').on('mouseleave', function(){if($(window).width() > 980){$('.sidebar-submenu').fadeOut(159);}});
	
	
	var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
	
	
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



	









