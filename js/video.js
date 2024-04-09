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
	var volume = video.volume *100;
	document.querySelector("#volume").textContent = volume + "%";
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

// Mute/unmute the video and update the text in the button.
document.querySelector("#mute").addEventListener("click", function () {
    if (video.muted) {
        video.muted = false;
        document.querySelector("#mute").textContent = "Mute";
    } else {
        video.muted = true;
        document.querySelector("#mute").textContent = "Unmute";
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
