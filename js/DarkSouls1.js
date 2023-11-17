var audio = document.getElementById("backgroundAudio");
    var playPauseButton = document.getElementById("playPauseButton");

    playPauseButton.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            playPauseButton.innerHTML = "Pause";
        } else {
            audio.pause();
            playPauseButton.innerHTML = "Play";
        }
    });
   