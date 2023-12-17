// Sample song data
const songs = [
    {title: "VIKRAM",image: "vikram2.avif",audio: "Vikram.mp3",content: "Annatha"},
    {title: "MASTER",image: "master.jpeg",audio: "master.mp3",},
    {title: "VIKRAM",image: "song5.png",audio: "Vikram.mp3",},
    {title: "MASTER",image: "song6.jpeg",audio: "alan wlkar.mp3",},
    {title: "VIKRAM",image: "song2.jpg",audio: "Vikram.mp3",},
    {title: "MASTER",image: "song4.png",audio: "master.mp3",},
    {title: "VIKRAM",image: "song5.png",audio: "Vikram.mp3",},
    {title: "MASTER",image: "song6.jpeg",audio: "master.mp3",},
    {title: "VIKRAM",image: "song7.jpeg",audio: "Vikram.mp3",},
    {title: "MASTER",image: "song8.jpeg",audio: "master.mp3",},
    {title: "VIKRAM",image: "song6.jpeg",audio: "Vikram.mp3",},
];

// Create music containers for each song
const Sounder = document.getElementById("Sounder");

songs.forEach((songData, index) => {
    const musicContainer = document.createElement("div");
    musicContainer.classList.add("music-container");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const coverImg = document.createElement("img");
    coverImg.src = songData.image;
    coverImg.alt = "cover";

    imgContainer.appendChild(coverImg);

    const title = document.createElement("h4");
    title.classList.add("title");
    title.textContent = songData.title;

    const playPauseBtn = document.createElement("button");
    playPauseBtn.classList.add("play-pause");
    playPauseBtn.id = `play-pause-${index}`;

    const playIcon = document.createElement("i");
    playIcon.classList.add("fa", "fa-play");
    playIcon.setAttribute("aria-hidden", "true");

    playPauseBtn.appendChild(playIcon);

    const progressContainer = document.createElement("div");
    progressContainer.classList.add("progress-container");

    const progress = document.createElement("div");
    progress.classList.add("progress");

    progressContainer.appendChild(progress);

    const songInfo = document.createElement("div");
    songInfo.classList.add("song-info");
    songInfo.textContent = "Pathala Pathala Lyric Kamal Haasan Vijay Sethupathi Lokesh Kanagaraj Anirudh";

    musicContainer.appendChild(imgContainer);
    musicContainer.appendChild(title);
    musicContainer.appendChild(songInfo);
    musicContainer.appendChild(playPauseBtn);
    musicContainer.appendChild(progressContainer);

    Sounder.appendChild(musicContainer);

    let audio = new Audio(songData.audio);
    let isPlaying = false;

    // Add event listener to play or pause the song
    playPauseBtn.addEventListener("click", () => {
        if (isPlaying) {
            audio.pause();
            playIcon.classList.replace("fa-pause", "fa-play");
        } else {
            audio.play();
            playIcon.classList.replace("fa-play", "fa-pause");
        }
        isPlaying = !isPlaying;
    });

    // Update the progress bar while the song is playing
    audio.addEventListener("timeupdate", () => {
        const currentTime = audio.currentTime;
        const duration = audio.duration;
        const progressPercentage = (currentTime / duration) * 100;
        progress.style.width = progressPercentage + "%";
    });

    // Add event listener to seek to a specific point in the song
    progressContainer.addEventListener("click", (e) => {
        const clickX = e.offsetX;
        const width = progressContainer.clientWidth;
        const duration = audio.duration;
        const seekTime = (clickX / width) * duration;
        audio.currentTime = seekTime;
    });
});
