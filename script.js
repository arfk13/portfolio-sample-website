function openProject(name) {
  alert("Opening project: " + name);
  // Later you can replace alert with:
  // window.location.href = name + ".html";
}

// 🎥 Autoplay videos on hover
document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".video-card video");

  videos.forEach(video => {
    video.addEventListener("mouseenter", () => {
      video.play();
    });

    video.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0; // Reset video to start
    });
  });
});
