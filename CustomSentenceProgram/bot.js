(function($) {
	
	// FREKIN REGEX RULES!!!
	// ALWAYS USE ESCAPE CHARACTERS WHEN YOU MAKE IT, STRING OR NEW REGEXP
	// DONT USE VARNAME = VARNAME.REPLACE(REGEX, NEW) - DOESNT FREKIN WORK - USE VAR VARNAME = VARNAME.REPLACE(REGEX, NEW)
	
	var l = ' ';
	// 40 vars for title
	var t1 = 'Facebook Ads';
	var t2 = 'Facebook Ad';
	var t3 = 'Facebook';
	var t4 = l;
	var t5 = l;
	var t6 = l;
	var t7 = l;
	var t8 = l;
	var t9 = l;
	var t10 = 'Google Ads';
	var t11 = 'Google';
	var t12 = l;
	var t13 = l;
	var t14 = l;
	var t15 = l;
	var t16 = l;
	var t17 = l;
	var t18 = l;
	var t19 = 'Conversion Rate Optimization';
	var t20 = 'CRO';
	var t21 = l;
	var t22 = l;
	var t23 = l;
	var t24 = l;
	var t25 = l;
	var t26 = l;
	var t27 = 'SEO';
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
	//console.log(titles);
	
	//     /(\sseo\s)/gi
	//var regex = new RegExp('\(\\s'+current+'\\s\)', 'gi');
	
	// change original title to cutTitle
	var cutTitle;
	function cutTitleFoo(){
		var jobTitle = $('#jobTitle').val();
		for(var i = 0; i < titles.length; i++){
			var current = titles[i];
			var regexTemp1 = '(\\s'+current+'\\s)';
			var regex = new RegExp(regexTemp1, 'gi');
			var rez = jobTitle.match(regex);
			console.log(regex);
			if(rez != null && rez != 'undefined') {
				cutTitle = titles[i];
				break;
			} else {
				cutTitle = titles[titles.length-1];
			}
		}
		$('#cutTitle').val(cutTitle);
	}
	$('#cutTitleButton').on('click', cutTitleFoo);
	/* $(window).on('keydown', function(e){
		if(e.keyCode === 13){
			e.preventDefault();
			cutTitleFoo();
		}
	}); */
	
	/* CUSTOM SENTENCE */
	
	var c1 = 'I NEED';
	var c2 = 'WE NEED';
	var c3 = 'LOOKING FOR';
	var c4 = 'DEFAULT CUSTOM SENTENCE';
	// first occurence array
	var foarr = [];
	for(var i = 1; i<5; i++){
		foarr[(i-1)] = eval('c' + i);
	}
	//console.log(foarr);
	
	// cut our found sentence into customSentence
	var customSentence;
	function customSentenceFoo(){
		var fullBodyText = $('#fullBody').val();
		
		// looking for PRVI. looking for DRUGI
		//fullBodyText.match(/(LOOKING FOR[^.]*)/i);
		//fullBodyText.match(/(LOOKING FOR[^.\n]*)/i); sa tackom i nju line
		
		//(${customCheck}[0]).replace(/(LOOKING FOR\s)/i, '')+'.'
		//\('+current+'\[\^\.\\n\]\*\)
		//var regex2 = new RegExp('\(\[\^\\s\]\{0\}'+current+'\[\^\.\\n\]\*\)', 'gi');
		
		for(var j = 0; j < foarr.length; j++){
			var current = foarr[j];
			var regexTemp2 = '\(\[\^\\s\]\{0\}'+current+'\[\^.\\n\]\*)';
			var regex2 = new RegExp(regexTemp2, 'gi');
			var rez = fullBodyText.match(regex2);

			if(rez != null && rez != 'undefined') {
				var regexTemp3 = new RegExp(current, 'i');
				customeSentence = rez[0].replace(regexTemp3, '') + '.';
				console.log(regexTemp3)
				break;
			} else {
				customeSentence = foarr[foarr.length-1];
			}
		}
		
		//asdal;s looking for asdlkajs I asdask jh
		
		// I, ME, US, WE to YOU
		regexTempYOU = new RegExp('\(\[\\s.\]I\\s\)\|\(\[\\s.\]ME\\s\)\|\(\[\\s.\]US\\s\)\|\(\[\\s.\]WE\\s\)', 'gi');
		var customeSentence = customeSentence.replace(regexTempYOU, ' you ');
		console.log(regexTempYOU)
		
		// MY, OUR to YOUR
		regexTempYOUR = new RegExp('\(\[\\s.\]MY\\s\)\|\(\[\\s.\]OUR\\s\)', 'gi');
		var customeSentence = customeSentence.replace(regexTempYOUR, ' your ');
		console.log(regexTempYOUR)
		
		// DELETE YOUR
		regexTempDELETE = new RegExp('\^\(\[\\s\]?YOUR\\s\)', 'gi');
		var customeSentence = customeSentence.replace(regexTempDELETE, '');
		console.log(regexTempDELETE)
		
		$('#customSentence').val(customeSentence);
	}
	$('#customSentenceButton').on('click', customSentenceFoo);
	$(window).on('keydown', function(e){
		/* if(e.shiftKey){
			e.preventDefault();
			customSentenceFoo();
		} */
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})(jQuery);