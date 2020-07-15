(function($) {
	
	$('#customEmailButton').on('click', () => {
		
		let firstName = $('#firstName').val();
		
		//get value of email body (taken from UI) and search it for needed matrix (c1, c2...)
		let receivedEmail = $('#receivedEmail').val();
		
		
		
		
		
		
		
		
		
		
		
		
		$('#customEmail').html();
	})
	

	
	// titles array
	var titles = [];
	for(var i = 1; i<156; i++){
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
			var regexTemp1 = '\(\(\^\|\[\\s\+\(\/\]\)'+current+'\(\$\|\[\\s.,\+\)\/\]\)\)';
			//with global and case-insensitive
			var regex = new RegExp(regexTemp1, 'gi');
			//check if it exists inside the whole title we took from Feeder
			var rez = jobTitle.match(regex);
			console.log(regex);
			//if found put current our word as cutTitle (part that we use in cover letter)
			if(rez != null && rez != 'undefined') {
				cutTitle = titles[i]+' ';
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
	
	var c1 = 'HASTALAVISTABABY';
	var c2 = 'LOOKING FOR\\?';
	var c21 = 'DEFAULT SENTENCE';
	// first occurence array
	var foarr = [];
	for(var i = 1; i<22; i++){
		foarr[(i-1)] = eval('c' + i);
	}
	// make customSentence out of fullBodyText (whole job description)
	var customSentence;
	
	// customSentence function
	function customSentenceFoo(){
		//get value of job description (taken from UI) and search it for needed sentence (c1, c2...)
		var fullBodyText = $('#fullBody').val();
		// &amp; first change this coz regex will not include ; which is end of this and will screw up & sign which is ok and needed.
		var fullBodyText = fullBodyText.replace(/(&amp;)(?=(.|\s))/g, '&');
		var fullBodyText = fullBodyText.replace(/(&gt;)(?=(.|\s))/gi, '>');
		var fullBodyText = fullBodyText.replace(/(&lt;)(?=(.|\s))/gi, '<');
		var fullBodyText = fullBodyText.replace(/(&quot;)(?=(.|\s))/gi, '"');
		//console.log(fullBodyText);
		//for(var j = 0; j < foarr.length; j++){
			var regexCurrentTemp = '(LOOKING FOR\|LOOKING TO\|WE ARE WANTING\|SEEKING FOR\|SEEKING\|WE NEED\|I NEED\|NEED HELP\|HELP WITH\|IN NEED OF\|NEED SOMEONE\|WE REQUIRE\|I WOULD LIKE\|I\'D LIKE\|WE WOULD LIKE\|SEARCHING\|I WILL NEED\|I HAVE A NEED FOR\)';
			var regexCurrent = new RegExp(regexCurrentTemp, 'gi');
			var current = fullBodyText.match(regexCurrent);
			if(current != null && current != 'undefined') { var current = current[0].toUpperCase(); }
			var regexTemp2 =
				'\(\[\^\\s\]\{0\}\(\?\<\!not|do\[\\s\]*\)\(\?\<\!\(what\|do\)\[\\s\]\*\)'+current+'\(\:\| \:\|\: \| \: \)\*\(\[\\s\]\*\(\?\=\[\^\\s\]\)\)\)\(\(\[\^.\\n\]\*\[e\]\[.\]\?\[g\]\[.\]\)\|\(\[\^.\\n\]\*\(https\?\:\/\/\)\?(www\.\)\?\[\-a\-zA\-Z0\-9\@\:\%.\_\\\+\~\#\=\]\{1,256\}\\.\[a\-zA\-Z0\-9\(\)\]\{1,20\}\\b\(\[\-a\-zA\-Z0\-9\@\:\%\_\\\+.\~\#\?\&\/\/\=\]\*\)\)\[\^.\\n\]\)\*\[\^.\!\?\\n\]\*';
			var regex2 = new RegExp(regexTemp2, 'gi');
			var rez = fullBodyText.match(regex2);
			if(rez != null && rez != 'undefined') {
				var rezTemp = rez[0].toString(); //Pazi, ovde trazi sledeci koji ide tako da znas samo!
				// if last is : make it null
				if(rezTemp[rezTemp.length - 1] == ':') {var rez = null;}
				
				// if last is 'following' (meaning, it will start counting and fck it all up) make it null
				if(rezTemp.slice(-9) == 'following' || rezTemp.slice(-3) == '...' ) {var rez = null;}
				
				// if matches any of the words that refer to the 'above', meaning, it's not mentioned in the sentence, return null
				var regexTempRefer = new RegExp(/(this)|(those)|(these)|(certain)|(above)|(invite you)|(mentioned)|(bonus)|(partnership)|(i'm)|(I'm)|(I'M)|(’)|(speak)|(approx)|(com[.])|(discuss)|(thanks)|(below)|(specifically)|(\;)|(local to)|(if possible)|(\sit\s)|(get your take)|(experience in that)|(bring to market)|(the following)|(\.\.)/gi);
				if(rezTemp.match(regexTempRefer)) {var rez = null;}
				
				// if has 3 or more spaces in a row (probably not caring about writting proper offer, return null
				var regexTempSigns = new RegExp(/( ){3,6}/gi);
				if(rezTemp.match(regexTempSigns) != null) {var rez = null;}
				
				// if more than 150 chars and have no elements like , ; - ( ) then null (means they aren't using any signs to sepparate parts of sentences that make sense.
				var regexTempSigns = new RegExp(/[;,.&"\-()]/gi);
				if((rezTemp.split('').length >= 150) && (rezTemp.match(regexTempSigns) == null)) {var rez = null;}
				
				// if less than 5 chars, look for others in array of first occurances
			console.log(current)
				var regexTempLess5 = new RegExp(current, 'gi');
				var rezTemp = rezTemp.replace(regexTempLess5, '');
				if(rezTemp.split('').length <= 18) { rez = null; }
				
				// if all upprCase return null
				if(rezTemp === rezTemp.toUpperCase()){ rez = null; }
			}
			if(rez != null && rez != 'undefined') {
				rez = rez[0].toString();
				// ! ?
				if(rez.split('')[rez.length-1] == '!' || rez.split('')[rez.length-1] == '?') { var rez = rez.replace(/[!?]/gi, '')}
		
				var regexTemp3 = new RegExp(current, 'gi');
				var regexHelpWith = new RegExp('(need help with)|(require help with)', 'gi');
				var regexHelpWithIME = new RegExp('\\s\?\(I\|WE\)\\s\*\(need help with\)\|\(require help with\)', 'gi');
				// if looking to, 'to' will need to stay for grammar looking to bring ... what you're lookinf for is TO bring...
				if(current == 'LOOKING TO'){
					customSentence = rez.replace(regexTemp3, 'to') + '.';
				}else if(current == 'NEED SOMEONE'){
					customSentence = rez.replace(regexTemp3, 'someone') + '.';
				}else if(rez.match(regexHelpWith) && !regexHelpWithIME.test(rez)){
					// i need help with bla bla ... what you're looking for is help with bla bla BUT I need help with is searching for I NEED so it will be (I need) need help with so make sure its not I or WE need!
					customSentence = rez.replace(regexTemp3, 'help') + '.';
				}else{
					customSentence = rez.replace(regexTemp3, '') + '.';
				}
				
				// ending with ( ~something~ ) delete (if this makes errors, just null the whole thing outside this if 
				var regexTempParant = '\(\[\\s\]\?\[\(\].\*\[\)\]\)';
				var regexParant = new RegExp(regexTempParant, 'gi');
				if(customSentence.match(regexParant)){var customSentence = customSentence.replace(regexParant, '')}
				var customSentence = customSentence.replace(':','');
				var customSentence = customSentence.trim();
				//break;
			} else {
				customSentence = foarr[foarr.length-1];
			}
		//}
		
		//change all dashes ( — ) with minuses ( - )
		var customSentence = customSentence.replace(/\—/gi , '-');
		
		//chage personal pronouns
		
		// AM to ARE
		regexTempAM = new RegExp('\(\[\\s\]AM\[\\s\]\)', 'gi');
		var customSentence = customSentence.replace(regexTempAM, ' are ');
		
		// I, ME, US, WE to YOU
		regexTempYOU = new RegExp('\(\[\\s.\]I\[\\s.\]\)\|\(\[\\s.\]ME\[\\s.\]\)\|\(\[\\s.\]US\[\\s.\]\)\|\(\[\\s.\]WE\[\\s.\]\)', 'gi');
		var customSentence = customSentence.replace(regexTempYOU, ' you ');
		
		// I, ME, US, WE to YOU with ,
		regexTempYOU = new RegExp('\(\[\\s.\]I\[,\]\)\|\(\[\\s.\]ME\[,\]\)\|\(\[\\s.\]US\[,\]\)\|\(\[\\s.\]WE\[,\]\)', 'gi');
		var customSentence = customSentence.replace(regexTempYOU, ' you');
		
		// I', WE' to YOU with ' - I've - You've
		//regexTempYOUVE = new RegExp('\(\[\\s.\]I\[\'\]\)\|\(\[\\s.\]WE\[\'\]\)', 'gi');
		//var customSentence = customSentence.replace(regexTempYOUVE, ' you\'');
		
		// WE'RE to YOU'RE
		regexTempYOURE = new RegExp('\(\[\\s.\]WE\(\?\=\(\'\)\)\)\|\(\[\\s.\]I\(\?\=\(\'\)\)\)', 'gi');
		var customSentence = customSentence.replace(regexTempYOURE, ' you');
		
		// MY, OUR with Funny Chars to YOUR - this is only for minus sign, if more, find better solution
		regexTempYOUR = new RegExp('\(\[-\]MY\[\\s\]\)\|\(\[-\]OUR\[\\s\]\)', 'gi');
		var customSentence = customSentence.replace(regexTempYOUR, '-your ');
		
		// MY, OUR to YOUR
		regexTempYOUR = new RegExp('\(\[\\s.\]MY\[\\s\]\)\|\(\[\\s.\]OUR\[\\s\]\)', 'gi');
		var customSentence = customSentence.replace(regexTempYOUR, ' your ');
		
		// THIS to THAT
		regexTempYOUR = new RegExp('\(\[\\s.\]THIS\\s\)', 'gi');
		var customSentence = customSentence.replace(regexTempYOUR, ' that ');
		
		// DELETE YOUR, YOU if it's at start (i need your help with ---> you are looking for help with...)
		regexTempDELETE = new RegExp('\^\(\[\\s\]?(YOUR|YOU)\\s\)', 'gi');
		var customSentence = customSentence.replace(regexTempDELETE, '');
		
		// if YOUR HELP is found return default sentence
		regexTempYOURHELP = new RegExp('\(\[\\s\]?(YOUR HELP)\[\\s.\]\)', 'gi');
		if(customSentence.match(regexTempYOURHELP)){ var customSentence = foarr[foarr.length-1]; }
		
		
		// DELETE PLEASE (looking for someone to please help me... ---> what you're looking for is someone to help you...)
		regexTempDELETE = new RegExp('\(\[\\s\]\(PLEASE|HE|SHE|HERE)\[\\s.\]\)', 'gi');
		var customSentence = customSentence.replace(regexTempDELETE, ' ');
		
		if(customSentence.split('')[customSentence.length-1] != '.'){var customSentence = customSentence.trim() + '.'}
		
		console.log(customSentence);
		
		if(customSentence == 'DEFAULT SENTENCE.') {
			var customSentence = 'an expert to help you with this specific challenge, and along the way have revealed to you other hidden diamonds that you may not even see right now.';
		}
		
		$('#customSentence').val(customSentence);
		console.log('What you\'re looking for is ' + customSentence);
		
		
		//PROBA
		
		
		/* fetch('sendMail.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({customsentence:customSentence}),
		})
		.then(data => {
			console.log('Success:', data);
		})
		.catch((error) => {
			console.error('Error:', error);
		}); */
		
		//PROBA
	
})(jQuery);