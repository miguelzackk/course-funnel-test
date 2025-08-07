document.querySelectorAll('.video-thumbnail').forEach(function(thumbnail) {
  thumbnail.addEventListener("click", function () {
    const video = this.querySelector("video");
    video.classList.remove("hidden");
    video.play();
    this.querySelector("img").style.display = "none";
    this.style.cursor = "default";
  });
});