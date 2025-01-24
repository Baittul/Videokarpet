
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Video karpet masjid</title>
    <link rel="stylesheet" href="style-zip.css">
    <link rel="stylesheet" href="responsive-zip.css">
</head>
<body>
    <div class="video-gallery">
        <!-- Video 1 -->
        <div class="video-container">
            <video class="video-player" controls poster="kopi.png" data-id="video1">
                <source src="contoh.mp4" type="video/mp4">
                Browser Anda tidak mendukung video .
            </video>
            <div class="viewer-counter">
                <span id="view-count-video1">0</span> Viewers
            </div>
            <p style="color:#2fff;margin:5px;">pasang karpet di kendal</p>
        </div>

        
        <div class="video-container">
            <video class="video-player" controls poster="kopi.png" data-id="video2">
                <source src="contoh.mp4" type="video/mp4">
                Browser Anda tidak mendukung video .
            </video>
            <div class="viewer-counter">
                <span id="view-count-video2">0</span> Viewers
            </div>
            <p style="color:#2fff;margin:5px;">pasang karpet di jogja</p>
        </div>
             <div class="video-container">
            <video class="video-player" controls poster="kopi.png" data-id="video3">
                <source src="contoh.mp4" type="video/mp4">
                Browser Anda tidak mendukung video .
            </video>
            <div class="viewer-counter">
                <span id="view-count-video3">0</span> Viewers
            </div>
                <p style="color:#2fff;margin:5px;">pasang karpet di bandung</p>
        </div>
           <div class="video-container">
            <video class="video-player" controls poster="thumbnail2.jpg" data-id="video4">
                <source src="contoh.mp4" type="video/mp4">
                Browser Anda tidak mendukung video .
            </video>
            <div class="viewer-counter">
                <span id="view-count-video4">0</span> Viewers
            </div>
              <p style="color:#2fff;margin:5px;">pasang karpet di cimais</p>
        </div>
                     <div class="video-container">
            <video class="video-player" controls poster="thumbnail2.jpg" data-id="video5">
                <source src="contoh.mp4" type="video/mp4">
                Browser Anda tidak mendukung video .
            </video>
            <div class="viewer-counter">
                <span id="view-count-video5">0</span> Viewers
            </div>
                <p style="color:#2fff;margin:5px;">pasang karpet di garut</p>
        </div>
    </div>
    
    <a href="#" class="floating-home-btn">
        <img src="home.png" alt="Home Icon">
    </a>
    <script src="script-zip.js"></script>
    <script>
      
function enterFullscreen(videoId) {
    const video = document.querySelector(`video[data-id="${videoId}"]`); 
    if (video.requestFullscreen) {
        video.requestFullscreen(); // Browser modern 
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen(); // Firefox
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen(); // Chrome dan Safari
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen(); // IE/Edge
    }
}

    </script>
</body>
</html>
