// Setting variables
var video;
var volumeSlider = document.getElementById('slider');
var volumeDisplay = document.getElementById('volume');

// Page load, autoplay and video loop
window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video = document.querySelector('#player1')
	video.autoplay = false;
	video.loop = false;
	console.log('auto play is set to ' + video.autoplay);
	video.classList.add('oldSchool');
});

// Play video
document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play();
	video.volume = 0.6;     // Volume was too loud I set this as a default
	volumeSlider.value = 60;
	volumeDisplay.textContent = "60%";
});


// Pause Video
document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});

// Slow video by 10%
document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate -= 0.1;
	console.log("Slower Video Speed Rate: " + video.playbackRate);
});

// Faster video
document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate += 0.1;
	console.log("Faster Video Speed Rate: " + video.playbackRate);
});


// Skipping video time
document.querySelector("#skip").addEventListener("click", function () {
	console.log("Skip by 10 secs");
	var newTime = video.currentTime + 10;
	if (newTime > video.duration) {
		newTime = 0;
	}
	video.currentTime = newTime;
	console.log("Video Time: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").textContent = "Mute";
		volumeSlider.value = video.volume * 100;
		volumeDisplay.textContent = Math.round(video.volume * 100) + '%';
		console.log("Unmuted Video");
	}
	else {
		video.muted = true;
		document.querySelector("#mute").textContent = "Unmute";
		if (volumeSlider.value !== '0') {
			volumeSlider.value = video.volume * 100;
			volumeDisplay.textContent = Math.round(video.volume * 100) + '%';
			console.log("Muted Video");
		}
		// I added a logic so that the muting function does not go back to 0 every time
	}

});

// Volume Slider Control and Display
volumeSlider.addEventListener('input', function () {
	video.volume = volumeSlider.value / 100;
	volumeDisplay.textContent = volumeSlider.value + '%';
});


// Apply oldSchool class
document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});

// Apply Original Style
document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});
