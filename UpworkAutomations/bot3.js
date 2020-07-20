(function($) {
	
	$('#customEmailButton').on('click', () => {
		//get value of email body (taken from UI) and search it for needed matrix (c1, c2...)
		let receivedEmail = $('#receivedEmail').val();
		let customEmailField = $('#customEmail');
		let firstName = $('#firstName').val();
		let chosenTemplate;
{	
		// 10 template recenica
		// TEMPLATE 1
		var tAfamiliar = 
		`🔥Hey there ${firstName}, I've reviewed what you put, and I want to give you value and see if we're a good fit to work with each other via a call. There's no benevolent way I can give you the answers you deserve via text. We need to dive way deeper into your situation via a proper call. Does that sound reasonable?

Let's discover the answers to the above questions of mine, and all your questions about:
- the investment amount
- my case studies/experience
- my expertise
and more on a call, not via text, to see if we're a good fit for each other and to potentially come to an agreement over the phone. Sound good?

If so, you can lock in a slot over the next 48 hours, you can select one here: https://go.oncehub.com/moreconversions-upwork and you'll immediately get a time confirmed. Please note that due to my 100% Top Rated status here on Upwork, there is very high demand, so time slots are very limited, and actual project slots are even more scarce.
		`;
		// TEMPLATE 2
		var tBexpensive = `🔥Hey there ${firstName}, don't worry about the price, as it's just a placeholder until we have a discussion to see what the true upside is for you.

I guarantee I will show you things on our call that you've never seen before. So var's talk first and see how much more money you can be making before you simply write me off based on my non-binding upwork rate. Does that sound reasonable?

Also, I would do you a disservice if I randomly tell you a price.

If you have 1,000,000 people per month looking at your funnel, wouldn't you want to make sure it's reaaaaaaallllllly done properly?

VS. if you have 10 people per month looking at it?

It's not a simple task, with a simple price!

Another analogy would be, if you are building a bridge, and only 10 cars will drive on it any time, then you need to only build the bridge to a certain specification - BUT - if you know 10,000 cars will drive on it at any time, people will DIE if you build the same bridge as above.

There's no standard price of funnels, just like there is no standard price of a bridge. Does that make sense?

Let's discover the answers to the above questions of mine, and all your questions about:
- the investment amount
- my case studies/experience
- my expertise
and more on a call, not via text, to see if we're a good fit for each other and to potentially come to an agreement over the phone. Sound good?

If so, you can lock in a slot over the next 48 hours, you can select one here: https://go.oncehub.com/moreconversions-upwork and you'll immediately get a time confirmed. Please note that due to my 100% Top Rated status here on Upwork, there is very high demand, so time slots are very limited, and actual project slots are even more scarce.
		
		`;
		// TEMPLATE 3
		var tCprefer = `🔥Hey there ${firstName},

I'm genuinely sorry you got the impression from talking to some other people on upwork and other "freelancing" platforms that it's helpful for you to chat via text instead of getting on a call.

If you want to work with a professional and not a copy-paste freelancer, then let's get on a call to discuss your new project and if you like what you hear, maybe we can work together if we're both suitable for each other.

Otherwise I do suggest that you keep chatting with the copy-paste kids 🙂 which of course is a joke 🙂 , but in all seriousness no one who's an actual professional will chat with you via text, we prefer to talk on the phone, so we can actually provide value, instead of just copy-pasting some replies/screenshots to you and promising that we can do everything you say you need, to get some small payment... and deliver low value...

It's up to you, here is the booking tool, go ahead and fill it in if you wish, I'd be more than happy to try and help you out: https://go.oncehub.com/moreconversions-upwork

PS. We can certainly do the call here in the secured upwork area if you'd like; but please pick a time at the link above so we can handle that without any back and forth messages and resultant lost precious time.
		
		`
		// TEMPLATE 4
		var tDnotime = `🔥Hi ${firstName}, respectfully, this isn't an interview for an employee.

If you want to hire a $3/hr person that you give the processes to, you can certainly find those guys on here and I'm not that guy.

However, I've reviewed what you put, and the next normal step of this process is to see if we'd be a great long term fit for eachother, because that is who I'm looking to work with. Guys that wanna make $100K+ in new revenue in the next 3 months, and $1M+ over the next year.

Isn't that worth an hour? Maybe you're more rich than that 😉

If it is not worth an hour, or you would like me to invest a ton more time before we get on a call as part of your screening process, I am kindly not interested, and to be honest, respectfully, people of my caliber won't be interested in that either.

If you're convinced, 😉 let's discover the answers to the above questions of mine, and all your questions about:
- the investment amount
- my case studies/experience
- my expertise
and more on a call, not via text, to see if we're a good fit for each other and to potentially come to an agreement over the phone.

If so, to find a time we can speak, you can select one here: https://go.oncehub.com/moreconversions-upwork and you'll immediately get a time confirmed. Please note that time slots are very limited due to high demand.
		
		`
		// TEMPLATE 5
		var tBookingLink = `🔥Hi ${firstName}, I cross referenced my calendar with yours, and at the moment I see some times that match up - but the reason why I would like you to fill in my link is because I need to gather some information first to see if your business qualifies for a call with me. Sound ok?

It only takes 60 seconds to fill in, go ahead and click here: https://https://go.oncehub.com/moreconversions-upwork
		
		`
		// TEMPLATE 6
		var tSchedule = `🔥 Please go ahead and simply fill in the time and answer the few questions at this automated link: https://go.oncehub.com/moreconversions-upwork
		
		`
		// TEMPLATE 7
		var tSkypeCallHiDefault = `🔥 Please go ahead and simply fill in the time you want and answer the few questions at this automated link: https://go.oncehub.com/moreconversions-upwork
		
		`
		// TEMPLATE 8
		var tPhoneNow = `🔥It's a high demand day today; if you're sure you don't wanna miss out talking with the 100% Top Rated guy around these parts, go ahead and schedule in a slot sometime in the next 48 hours here: https://go.oncehub.com/moreconversions-upwork
		
		`
		// TEMPLATE 9
		var tOtherAvail = `🔥Hi ${firstName}, what's your phone number so I can call you to find a mutually available time?
		
		`
		// TEMPLATE 10
		var tBusy = `🔥What's your phone number?
		
		`
		
		// TEMPLATE 11
		var tAlreadyBooked = `🔥Hey there ${firstName}, I saw your booking.

I've emailed you a booking confirmation.

We will do the call on Zoom.

Also, I've already emailed you a link to a form that will get you more value on our call because it will give me more details about your business.

It should only take 10 minutes to complete, and it will help you get 2-3X more value on our call compared with not providing any additional data.

Please complete it well in advance of our scheduled call day and time, so that I can give it the proper attention.

Feel free to add a loom.com video to add more information about your funnel, tracking and situation if you want.

If you haven't completed it yet, the form link is also here: https://docs.google.com/forms/d/e/1FAIpQLSe7SkIL16GXGZSRWPYPNed6RnOKpsHSFQRb1JyWqRkqEAmFSQ/viewform?usp=sf_link
		
		`;
		
		// TEMPLATE STOP!
		var stopReply = '';
}		
		
		//if... regex parts --->>>
		//regA, regB, regC...
		// u zavisnosti od toga sta nadje ovaj regex, pali se odredjeni template
		let regAfamiliar = new RegExp(/(?<=^|[\s])(familiar|review|description|specs|specifications|hours|time)(?=$|[\s])/,'gi')
		let regBexpensive = new RegExp(/(?<=^|[\s])(expensive|budget|quote|cost|price|too high)(?=$|[\s])/,'gi')
		let regCprefer = new RegExp(/(?<=^|[\s])(prefer)(?=$|[\s])/,'gi')
		let regDnotime = new RegExp(/(?<=^|[\s])(no time to talk on the phone)(?=$|[\s])/,'gi')
		let regBookingLink = new RegExp(/(?<=^|[\s])(booking link)(?=$|[\s])/,'gi')
		let regSchedule = new RegExp(/(?<=^|[\s])(schedule|calendar)(?=$|[\s])/,'gi')
		let regSkypeCallHiDefault = new RegExp(/(?<=^|[\s])(skype)(?=$|[\s])/,'gi')
		let regPhoneNow = new RegExp(/(?<=^|[\s])(phone)(?=$|[\s])/,'gi')
		let regOtherAvail = new RegExp(/(?<=^|[\s])(other availability)(?=$|[\s])/,'gi')
		let regBusy = new RegExp(/(?<=^|[\s])(busy)(?=$|[\s])/,'gi')
		let regAlreadyBooked = new RegExp(/(?<=^|[\s])(already booked)(?=$|[\s])/,'gi')
		
		let regStopHiredCancelled = new RegExp(/(?<=^|[\s])(stop|hired|cancelled)(?=$|[\s])/,'gi');
		//mozda stavi sve regexe kao ovaj za stop...
		
		// check regexes based on received email text
		if(receivedEmail.match(regStopHiredCancelled)){
				chosenTemplate = stopReply;
		}else if(receivedEmail.match(regAfamiliar)) {
				chosenTemplate = tAfamiliar;
		}else if(receivedEmail.match(regBexpensive)){
				chosenTemplate = tBexpensive;
		}else if(receivedEmail.match(regCprefer)){
				chosenTemplate = tCprefer;
		}else if(receivedEmail.match(regDnotime)){
				chosenTemplate = tDnotime;
		}else if(receivedEmail.match(regBookingLink)){
				chosenTemplate = tBookingLink;
		}else if(receivedEmail.match(regSchedule)){
				chosenTemplate = tSchedule;
		}else if(receivedEmail.match(regSkypeCallHiDefault)){
				chosenTemplate = tSkypeCallHiDefault;
		}else if(receivedEmail.match(regPhoneNow)){
				chosenTemplate = tPhoneNow;
		}else if(receivedEmail.match(regOtherAvail)){
				chosenTemplate = tOtherAvail;
		}else if(receivedEmail.match(regBusy)){
				chosenTemplate = tBusy;
		}else if(receivedEmail.match(regAlreadyBooked)){
				chosenTemplate = tAlreadyBooked;
		}else{
				chosenTemplate = tSkypeCallHiDefault;
		}
		
		
		
		
		customEmailField.val(chosenTemplate);
		
	});

		
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