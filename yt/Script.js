const apiKey = "AIzaSyA4BEqGgdrxB1ol273m5kefr2aigjpO2HM";
const channelId = "UCE6DGorlGo5dpLRm-XrN54w";
const maxResults = 3;
const videosContainer = document.getElementById("videos-container");

async function fetchVideos() {
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&type=video&order=date&maxResults=${maxResults}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayVideos(data.items);
    } catch (error) {
        console.error("Error fetching videos:", error);
    }
}

function displayVideos(videos) {
    videos.forEach(video => {
        const videoCard = document.createElement("div");
        videoCard.className = "video-card";

        videoCard.innerHTML = `
            <div class="video-content">
                <iframe src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>
                <div class="featured-text">Featured</div>
                <h3 class="video-title">${video.snippet.title}</h3>
            </div>
        `;

        videosContainer.appendChild(videoCard);
    });
}

fetchVideos();



function adjustNavVisibility() {
    const logoContainer = document.querySelector('.logo-container');
    const navLinks = document.querySelectorAll('.nav-link');


    if (window.innerWidth <= 600) {

        navLinks.forEach(link => {
            link.style.display = 'none';
        });
    } else {

        navLinks.forEach(link => {
            link.style.display = 'inline-block';
        });
    }
}


adjustNavVisibility();
window.addEventListener('resize', adjustNavVisibility);