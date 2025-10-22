//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const progressLine = document.querySelector('.progress-line');

let currentStep = 1;

function render(){
	circles.forEach((circle, index) => {
		if(index < currentStep){
			circle.classList.add("active");
		} else {
			circle.classList.remove("active");
		}

		progressLine.style.width = ((currentStep - 1) / (circles.length - 1)) * 100 + '%';

		prevButton.disabled = currentStep === 1;
	    nextButton.disabled = currentStep === circles.length;
	})
}

nextButton.addEventListener("click", () => {
	if(currentStep < circles.length){
		currentStep++;
		render();
	}
})

prevButton.addEventListener("click", () => {
	if(currentStep > 1){
		currentStep--;
		render();
	}
})

render();