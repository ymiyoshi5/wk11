var video = document.querySelector(".video");
var muted = document.querySelector("#mute");
var slider = document.querySelector('#slider');
var volumeDisplay = document.querySelector('#volume');
let first = true;

window.addEventListener("load", function() {
	video.autoplay = false;
	video.loop = false;

	console.log("Good job opening the window");
	console.log("Autoplay is set to false");
	console.log("Loop is set to false");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

	if (first) {
		document.querySelector("#volume").innerText = "100%";
		slider.value = 100;
		video.volume = 1;
		console.log("volume set to 100")
		first = false;
	}
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Speed is ", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	
	video.playbackRate = video.playbackRate * 1.1;
	console.log("Speed is ", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");

	console.log("Video current time is ", video.currentTime);
	video.currentTime = video.currentTime + 10;
	video.loop = true;
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		console.log("Mute");
		video.muted = true;
		muted.innerText = "Unmute";	
	} else {
		console.log("Unmute");
		video.muted = false;
		muted.innerText = "Mute";
	}
});

document.querySelector("#slider").addEventListener("input", function() {
    const volume = this.value;
    document.querySelector("#volume").innerText = volume + "%";
    video.volume = volume / 100;
    console.log("Volume set to: " + volume + "%");
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("theme set to vintage");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("theme set to original");
});
