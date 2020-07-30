(function($) {
	
	
	let totalTriggers;
	const triggersElement = $('#triggers');
	
	$('#makeInputsButton').on('click', () => {
		//delete inputs from before
		triggersElement.html('');
		
		totalTriggers = $('#makeInputsInput').val();
				
		//make inputs
		for(let x = 1; x <= totalTriggers; x++){
			let trClass = 'tr' + x;
			let childInput = $("<input>", {"class": trClass, "type":"text"});
			triggersElement.append(childInput).append("<br>");
		}
		
	});
	
	
	$('#templateNumberButton').on('click', () => {
		//get value of email body (taken from UI) and search it for needed matrix (c1, c2...)
		let receivedEmail = $('#receivedEmail').val();
		const templateNumber = $('#templateNumber');
		let chosenTemplate;
		
		


		
		for(let x = 1; x <= totalTriggers; x++){
			//let tr1, tr2, tr3, tr4... tr34
			window['tr'+x] = '\(\?\<\=\^\|\[\\\s\]\)\(' + $('.tr' + x + '').val() + '\)\(\?\=\$\|\[\\\s\.\!\?\\\-\:\"\'\\\/\]\)';
			console.log(x + ' TR: ' + window['tr'+x]);
			//let reg1, reg2, reg3, reg4... reg34
			window['reg'+x] = new RegExp(window['tr'+x], 'gi');
			console.log(x + ' REG: ' + window['reg'+x]);
		}
		for(let x = 1; x <= totalTriggers; x++){
			console.log(window['reg'+x], receivedEmail)
			if((window['reg'+x]).test(receivedEmail)){
				//console.log('Izabrani ' + chosenTemplate)
				chosenTemplate = x;
				break;
			}else{
				chosenTemplate = Number(totalTriggers); //+ 1;
			}
		}
		
		//console.log(tr1, tr2, tr3) 
		
		/* let tr1 = '\(\?\<\=\^\|\[\\\s\]\)\(' + $('.tr1').val() + '\)\(\?\=\$\|\[\\\s\.\!\?\\\-\:\"\'\\\/\]\)';
		let tr2 = '\(\?\<\=\^\|\[\\\s\]\)\(' + $('.tr2').val() + '\)\(\?\=\$\|\[\\\s\.\!\?\\\-\:\"\'\\\/\]\)';
		let tr3 = '\(\?\<\=\^\|\[\\\s\]\)\(' + $('.tr3').val() + '\)\(\?\=\$\|\[\\\s\.\!\?\\\-\:\"\'\\\/\]\)';
		let tr4 = '\(\?\<\=\^\|\[\\\s\]\)\(' + $('.tr4').val() + '\)\(\?\=\$\|\[\\\s\.\!\?\\\-\:\"\'\\\/\]\)';
		let tr5 = '\(\?\<\=\^\|\[\\\s\]\)\(' + $('.tr5').val() + '\)\(\?\=\$\|\[\\\s\.\!\?\\\-\:\"\'\\\/\]\)';
		let tr6 = '\(\?\<\=\^\|\[\\\s\]\)\(' + $('.tr6').val() + '\)\(\?\=\$\|\[\\\s\.\!\?\\\-\:\"\'\\\/\]\)';
		let tr7 = '\(\?\<\=\^\|\[\\\s\]\)\(' + $('.tr7').val() + '\)\(\?\=\$\|\[\\\s\.\!\?\\\-\:\"\'\\\/\]\)';
		let tr8 = '\(\?\<\=\^\|\[\\\s\]\)\(' + $('.tr8').val() + '\)\(\?\=\$\|\[\\\s\.\!\?\\\-\:\"\'\\\/\]\)';
		let tr9 = '\(\?\<\=\^\|\[\\\s\]\)\(' + $('.tr9').val() + '\)\(\?\=\$\|\[\\\s\.\!\?\\\-\:\"\'\\\/\]\)';
		let tr10 = '\(\?\<\=\^\|\[\\\s\]\)\(' + $('.tr10').val() + '\)\(\?\=\$\|\[\\\s\.\!\?\\\-\:\"\'\\\/\]\)';
		let tr11 = '\(\?\<\=\^\|\[\\\s\]\)\(' + $('.tr11').val() + '\)\(\?\=\$\|\[\\\s\.\!\?\\\-\:\"\'\\\/\]\)';
		let tr12 = '\(\?\<\=\^\|\[\\\s\]\)\(' + $('.tr12').val() + '\)\(\?\=\$\|\[\\\s\.\!\?\\\-\:\"\'\\\/\]\)';
		let tr13 = '\(\?\<\=\^\|\[\\\s\]\)\(' + $('.tr13').val() + '\)\(\?\=\$\|\[\\\s\.\!\?\\\-\:\"\'\\\/\]\)';
		let tr14 = '\(\?\<\=\^\|\[\\\s\]\)\(' + $('.tr14').val() + '\)\(\?\=\$\|\[\\\s\.\!\?\\\-\:\"\'\\\/\]\)';
		let tr15 = '\(\?\<\=\^\|\[\\\s\]\)\(' + $('.tr15').val() + '\)\(\?\=\$\|\[\\\s\.\!\?\\\-\:\"\'\\\/\]\)';
		let tr16 = '\(\?\<\=\^\|\[\\\s\]\)\(' + $('.tr16').val() + '\)\(\?\=\$\|\[\\\s\.\!\?\\\-\:\"\'\\\/\]\)';
		let tr17 = '\(\?\<\=\^\|\[\\\s\]\)\(' + $('.tr17').val() + '\)\(\?\=\$\|\[\\\s\.\!\?\\\-\:\"\'\\\/\]\)';
		let tr18 = '\(\?\<\=\^\|\[\\\s\]\)\(' + $('.tr18').val() + '\)\(\?\=\$\|\[\\\s\.\!\?\\\-\:\"\'\\\/\]\)';
		let tr19 = '\(\?\<\=\^\|\[\\\s\]\)\(' + $('.tr19').val() + '\)\(\?\=\$\|\[\\\s\.\!\?\\\-\:\"\'\\\/\]\)';
		*/
		/*
		let reg1 = new RegExp(tr1, 'gi');
		let reg2 = new RegExp(tr2, 'gi');
		let reg3 = new RegExp(tr3, 'gi');
		let reg4 = new RegExp(tr4, 'gi');
		let reg5 = new RegExp(tr5, 'gi');
		let reg6 = new RegExp(tr6, 'gi');
		let reg7 = new RegExp(tr7, 'gi');
		let reg8 = new RegExp(tr8, 'gi');
		let reg9 = new RegExp(tr9, 'gi');
		let reg10 = new RegExp(tr10, 'gi');
		let reg11 = new RegExp(tr11, 'gi');
		let reg12 = new RegExp(tr12, 'gi');
		let reg13 = new RegExp(tr13, 'gi');
		let reg14 = new RegExp(tr14, 'gi');
		let reg15 = new RegExp(tr15, 'gi');
		let reg16 = new RegExp(tr16, 'gi');
		let reg17 = new RegExp(tr17, 'gi');
		let reg18 = new RegExp(tr18, 'gi');
		let reg19 = new RegExp(tr19, 'gi');
		*/
		/*
		// GET TEMPLATE NUMBER WHICH YOU'LL USE TO FIND TEMPLATE IN AIRTABLE
		if(reg1.test(receivedEmail)){
			chosenTemplate = 1;
		}else if(reg2.test(receivedEmail)){
				chosenTemplate = 2;
		}else if(reg3.test(receivedEmail)) {
				chosenTemplate = 3;
		}else if(reg4.test(receivedEmail)){
				chosenTemplate = 4;
		}else if(reg5.test(receivedEmail)){
				chosenTemplate = 5;
		}else if(reg6.test(receivedEmail)){
				chosenTemplate = 6;
		}else if(reg7.test(receivedEmail)){
				chosenTemplate = 7;
		}else if(reg8.test(receivedEmail)){
				chosenTemplate = 8;
		}else if(reg9.test(receivedEmail)){
				chosenTemplate = 9;
		}else if(reg10.test(receivedEmail)){
				chosenTemplate = 10;
		}else if(reg11.test(receivedEmail)){
				chosenTemplate = 11;
		}else if(reg12.test(receivedEmail)){
				chosenTemplate = 12;
		}else if(reg13.test(receivedEmail)){
				chosenTemplate = 13;
		}else if(reg14.test(receivedEmail)){
				chosenTemplate = 14;
		}else if(reg15.test(receivedEmail)){
				chosenTemplate = 15;
		}else if(reg16.test(receivedEmail)){
				chosenTemplate = 16;
		}else if(reg17.test(receivedEmail)){
				chosenTemplate = 17;
		}else if(reg18.test(receivedEmail)){
				chosenTemplate = 18;
		}else if(reg19.test(receivedEmail)){
				chosenTemplate = 19;
		}else{
				chosenTemplate = 20;
		} */
		
		
		templateNumber.val(chosenTemplate);
	});
	
	
	
	
	// PUT FIRST NAME INTO THE TEMPLATE AND CUT " " IF NEEDED
	$('#customEmailButton').on('click', () => {
		//get value of email body (taken from UI) and search it for needed matrix (c1, c2...)
		let receivedEmail = $('#receivedEmail').val();
		let customEmailField = $('#customEmail');
		let fullName = $('#firstName').val();
		let firstName = fullName.slice(0, fullName.indexOf(' '));
		
		let newEmail = receivedEmail.replace("\[FIRST NAME\]", firstName);
		customEmailField.val(newEmail);
		

		
	});
	
})(jQuery);