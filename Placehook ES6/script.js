
// get current page id
const currentPage = document.querySelector('body');
const currentPageId = currentPage.getAttribute('id');

// fade in content (totally not needed)
const opacityInContent = document.querySelector('.opacity-effect');
opacityInEffect(opacityInContent);


/* Welcome page */
if(currentPageId.includes('welcome-page')){
	document.getElementsByClassName('focused')[0].focus();
}

/* Sign Up page */
if(currentPageId.includes('signup-page')){
	
	const signUpExitBtn = document.querySelector('.exit-btn');
	const signUpForm = document.getElementById('signup-form');
	signUpExitBtn.addEventListener('click', (e) => {
		if (confirm('Are you sure you want to exit?\n(Input data will be lost)')==false) {
			e.preventDefault();
		}
	});
	
	
}

/* Verification page */
if(currentPageId.includes('verification-page')){
		
	const verificationNav = document.querySelectorAll('.verification-page-nav *');
	for(element of verificationNav){
		element.addEventListener('click', (e) => {
			if(confirm('WARNING:\nYou might NOT be able to come back to this page!\nAre you sure you want to leave?') == false){
				e.preventDefault();
			}
			e.stopPropagation();
		});
	}
}
// Fade Effects
//const fadeEffect = document.querySelector('.fade-effect');
//signUpBtn.addEventListener('click', () =>  fadeInEffect(signUpPage));
function fadeInEffect(el) {
	el.classList.add('triger-enter');
	setTimeout(() => el.classList.add('triger-enter-active'), 150);
}
function fadeOutEffect(el) {
	el.classList.remove('triger-enter-active');
	setTimeout(() => el.classList.remove('triger-enter'), 300);
}
function opacityInEffect(el) {
	setTimeout(() => el.classList.add('opacity-enter'), 150);
}



























