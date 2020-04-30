(function($) {
	var l = '';
	// 40 vars for title
	var t1 = 'Facebook Ads';
	var t2 = 'Facebook';
	var t3 = 'Google Ads';
	var t4 = 'Google';
	var t5 = 'SEO';
	var t6 = 'Conversion Rate Optimization';
	var t7 = l;
	var t8 = l;
	var t9 = l;
	var t10 = l;
	var t11 = l;
	var t12 = l;
	var t13 = l;
	var t14 = l;
	var t15 = l;
	var t16 = l;
	var t17 = l;
	var t18 = l;
	var t19 = l;
	var t20 = l;
	var t21 = l;
	var t22 = l;
	var t23 = l;
	var t24 = l;
	var t25 = l;
	var t26 = l;
	var t27 = l;
	var t28 = l;
	var t29 = l;
	var t30 = l;
	var t31 = l;
	var t32 = l;
	var t33 = l;
	var t34 = l;
	var t35 = l;
	var t36 = l;
	var t37 = l;
	var t38 = l;
	var t39 = l;
	var t40 = l;
	var t41 = 'DEFAULT TITLE';
	
	// titles array
	var titles = [];
	for(var i = 1; i<42; i++){
		titles[(i-1)] = eval('t' + i);
	}
	console.log(titles);
	
	//     /(\sseo\s)/gi
	
	// change original title to cutTitle
	var cutTitle;
	function cutTitleFoo(){
		var input = $('#jobTitle').val();
		for(var i = 0; i < titles.length; i++){
			var current = titles[i];
			var regex = new RegExp('\(\\s'+current+'\\s\)', 'gi');
			var rez = input.match(regex);
			if(input.match(regex) != null && input.match(regex) != 'undefined') {
				cutTitle = titles[i];
				break;
			} else {
				cutTitle = titles[titles.length-1];
			}
		}
		$('#cutTitle').val(cutTitle);
	}
	$('#cutTitleButton').on('click', cutTitleFoo);
	$(window).on('keydown', function(e){
		if(e.keyCode === 13){
			e.preventDefault();
			cutTitleFoo();
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
			//var str = input.match(/(\sFacebook\s)/gi);
	
	
	
})(jQuery);