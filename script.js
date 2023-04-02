// Select the audio player, file input, and play button
const audioPlayer = document.querySelector('#audio-player');
const fileInput = document.querySelector('#file-input');
const playButton = document.querySelector('#play-button');

// Disable the play button by default
playButton.disabled = true;

// Change the song title and artist when a new file is selected
fileInput.addEventListener('change', function() {
	const file = fileInput.files[0];
	if (file) {
		const songTitle = document.querySelector('.song-title');
		const songArtist = document.querySelector('.song-artist');
		songTitle.textContent = file.name;
		songArtist.textContent = 'Uploaded Song';
		audioPlayer.src = URL.createObjectURL(file);
		playButton.disabled = false;
	} else {
		audioPlayer.src = '';
		playButton.disabled = true;
	}
});

// Play the selected file
playButton.addEventListener('click', function() {
	audioPlayer.play();
});
