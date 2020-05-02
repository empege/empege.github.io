(function($) {
	
	// FREKIN REGEX RULES!!!
	// ALWAYS USE ESCAPE CHARACTERS WHEN YOU MAKE IT, STRING OR NEW REGEXP
	// DONT USE VARNAME = VARNAME.REPLACE(REGEX, NEW) - DOESNT FREKIN WORK - USE VAR VARNAME = VARNAME.REPLACE(REGEX, NEW)
	
	var l = 'HASTALAVISTABABY';
	// 40 vars for title
	var t1 = 'Facebook Ads';
	var t2 = 'Facebook Ad';
	var t3 = 'Facebook';
	var t4 = l;
	var t5 = l;
	var t6 = l;
	var t7 = l;
	var t8 = l;
	var t9 = 'Google Tag Manager';
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
	
	// change original title to cutTitle
	var cutTitle;
	function cutTitleFoo(){
		var jobTitle = $('#jobTitle').val();
		for(var i = 0; i < titles.length; i++){
			//check what is current word in our list
			var current = titles[i];
			//make a temporary string regex out of it so before can be space or nothing and behind space or nothing or dot.
			var regexTemp1 = '\(\(\^\|\[\\s\+\(\]\)'+current+'\(\$\|\[\\s.\+\)\]\)\)';
			//with global and case-insensitive
			var regex = new RegExp(regexTemp1, 'gi');
			//check if it exists inside the whole title we took from Feeder
			var rez = jobTitle.match(regex);
			console.log(regex);
			//if found put current our word as cutTitle (part that we use in cover letter)
			if(rez != null && rez != 'undefined') {
				cutTitle = titles[i];
				break;
			} else {
				cutTitle = titles[titles.length-1];
			}
		}
		//put it in field so UI can take it as variable (storeValue, not storeText btw)
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
	var c4 = 'LOOKING TO';
	var c5 = 'SEEKING FOR';
	var c6 = 'SEEKING';
	var c7 = 'HASTALAVISTABABY';
	var c8 = 'HASTALAVISTABABY';
	var c9 = 'HASTALAVISTABABY';
	var c10 = 'HASTALAVISTABABY';
	var c11 = 'HASTALAVISTABABY';
	var c12 = 'HASTALAVISTABABY';
	var c13 = 'HASTALAVISTABABY';
	var c14 = 'HASTALAVISTABABY';
	var c15 = 'HASTALAVISTABABY';
	var c16 = 'HASTALAVISTABABY';
	var c17 = 'HASTALAVISTABABY';
	var c18 = 'I WOULD LIKE';
	var c19 = 'I\'D LIKE';
	var c20 = 'HASTALAVISTABABY';
	var c21 = 'DEFAULT CUSTOM SENTENCE';
	// first occurence array
	var foarr = [];
	for(var i = 1; i<22; i++){
		foarr[(i-1)] = eval('c' + i);
	}
	//console.log(foarr);
	
	// make customSentence out of fullBodyText (whole job description)
	var customSentence;
	function customSentenceFoo(){
		//get value of job description (taken from UI) and search it for needed sentence (c1, c2...)
		var fullBodyText = $('#fullBody').val();
		
		for(var j = 0; j < foarr.length; j++){
			//check what is current word in our list
			var current = foarr[j];
			//make a temporary string regex out of it so that it starts either with space or nothing and ends with either dot or new line (so that it doesn't take 10 new line texts if there is no dot)
			var regexTemp2 = '\(\[\^\\s\]\{0\}'+current+'\[\^.\\n\]\*)';
			//with global and case-insensitive
			var regex2 = new RegExp(regexTemp2, 'gi');
			//check if it exists inside the whole fullBodyText we took from Feeder
			var rez = fullBodyText.match(regex2);
			//if found take out that sentence, delete our start occurence (with replace LOOKING FOR with empty string) and save it as customSentence
			if(rez != null && rez != 'undefined') {
				var regexTemp3 = new RegExp(current, 'i');
				customeSentence = rez[0].replace(regexTemp3, '') + '.';
				console.log(regexTemp3)
				break;
			} else {
				customeSentence = foarr[foarr.length-1];
			}
		}
		//chage personal pronouns
		// I, ME, US, WE to YOU
		regexTempYOU = new RegExp('\(\[\\s.\]I\\s\)\|\(\[\\s.\]ME\\s\)\|\(\[\\s.\]US\\s\)\|\(\[\\s.\]WE\\s\)', 'gi');
		var customeSentence = customeSentence.replace(regexTempYOU, ' you ');
		console.log(regexTempYOU)
		
		// MY, OUR to YOUR
		regexTempYOUR = new RegExp('\(\[\\s.\]MY\\s\)\|\(\[\\s.\]OUR\\s\)', 'gi');
		var customeSentence = customeSentence.replace(regexTempYOUR, ' your ');
		console.log(regexTempYOUR)
		
		// DELETE YOUR, YOU if it's at start (i need your help with ---> you are looking for help with...)
		regexTempDELETE = new RegExp('\^\(\[\\s\]?(YOUR|YOU)\\s\)', 'gi');
		var customeSentence = customeSentence.replace(regexTempDELETE, '');
		console.log(regexTempDELETE)
		
		// DELETE PLEASE (looking for someone to please help me... ---> what you're looking for is someone to help you...)
		regexTempDELETE = new RegExp('\(\[\^\\s\]\{0\}(PLEASE|HE|SHE)\[\\s.\]\)', 'gi');
		var customeSentence = customeSentence.replace(regexTempDELETE, '');
		console.log(regexTempDELETE)
		
		$('#customSentence').val(customeSentence);
	}
	$('#customSentenceButton').on('click', customSentenceFoo);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		// looking for PRVI. looking for DRUGI
		//fullBodyText.match(/(LOOKING FOR[^.]*)/i);
		//fullBodyText.match(/(LOOKING FOR[^.\n]*)/i); sa tackom i nju line
		
		//(${customCheck}[0]).replace(/(LOOKING FOR\s)/i, '')+'.'
		//\('+current+'\[\^\.\\n\]\*\)
		//var regex2 = new RegExp('\(\[\^\\s\]\{0\}'+current+'\[\^\.\\n\]\*\)', 'gi');
	
	
	
	
	
	
	
})(jQuery);