var audio = new Audio();
audio.src = "videos/Bohemian/Bohemian.mp3";
audio.controls = true;
audio.loop = true;
audio.autoplay = true;


var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height;

window.addEventListener("load", initMp3Player, false);
function initMp3Player() {
	document.getElementById("audio_box").appendChild(audio);
	context = new webkitAudioContext(); // AudioContext object instance
	analyser = context.createAnalyser(); // AnalyserNode method
	canvas = document.getElementById("analyser_render");
	ctx = canvas.getContext("2d");
	// Re-route audio playback into the processing graph of the AudioContext
	source = context.createMediaElementSource(audio);
	source.connect(analyser);
	analyser.connect(context.destination);
	frameLooper();
}
// frameLooper() animates any style of graphics you wish to the audio frequency
// Looping at the default frame rate that the browser provides(approx. 60 FPS)
function frameLooper() {
	window.webkitRequestAnimationFrame(frameLooper);
	fbc_array = new Uint8Array(analyser.frequencyBinCount);
	analyser.getByteFrequencyData(fbc_array);
	ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
	ctx.fillStyle = "#00CCFF"; // Color of the bars
	bars = 100;
	for (var i = 0; i < bars; i++) {
		bar_x = i * 3;
		bar_width = 2;
		bar_height = -(fbc_array[i] / 2);
		// fillRect( x, y, width, height ) // Explanation of the parameters
		// below
		ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
	}
}