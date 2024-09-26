(function() {
    var playerContainer = document.createElement('div');
    playerContainer.style.width = '100%';
    playerContainer.style.height = '150px';
    playerContainer.style.backgroundColor = '#f0f0f0';
    playerContainer.style.textAlign = 'center';
    playerContainer.style.padding = '10px';
    playerContainer.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    
    var audio = document.createElement('audio');
    audio.src = 'https://streamer.radio.co/s7b5c2da7f/listen';
    audio.controls = true;
    audio.style.width = '100%';
    
    var playPauseBtn = document.createElement('button');
    playPauseBtn.innerText = 'Play';
    playPauseBtn.style.padding = '10px 20px';
    playPauseBtn.style.fontSize = '16px';
    playPauseBtn.style.cursor = 'pointer';
    playPauseBtn.style.marginTop = '10px';

    playPauseBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.innerText = 'Pause';
        } else {
            audio.pause();
            playPauseBtn.innerText = 'Play';
        }
    });

    playerContainer.appendChild(audio);
    playerContainer.appendChild(playPauseBtn);
    document.body.appendChild(playerContainer);
})();

