document.addEventListener("click", toggleAnimation); 

function toggleAnimation() {
	event.target.classList.toggle("animated")
	event.target.classList.toggle("heartBeat")
	console.log(event.target);
};

$('#checkbox').prop('checked', true);
$('#textInput').prop('disabled', true);