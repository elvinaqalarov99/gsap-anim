const navButton = document.querySelector(".nav-button");
const navOpen = document.querySelector(".nav-opened");

const tl = new TimelineLite({
	paused: true,
	reversed: true
});

tl
	.to('.cover',1,{
	left: '40%',
	width: '60%',
	ease: Power2.easeOut
	})
	.to('nav',1,{
		height: '100%',
		ease: Power2.easeOut
	},'-=0.5')
	.fromTo('.nav-opened',0.5,
		{
			opacity: 0,
			x : 100,
			ease: Power2.easeOut
		},
		{
			opacity: 1,
			x : 0,
			onComplete: function(){
				navOpen.style.pointerEvents = 'auto'
			}
		}	
	);

navButton.addEventListener('click',(e)=>{
	if(tl.isActive()){
		return false;
	}
	toggleTween(tl);
});


function toggleTween(tween){
	tween.reversed() ? tween.play() : tween.reverse(); 
}