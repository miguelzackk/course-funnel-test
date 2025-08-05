document
        .getElementById("video-thumbnail")
        .addEventListener("click", function () {
          const video = document.getElementById("main-video");
          video.classList.remove("hidden");
          video.play();
          this.querySelector("img").style.display = "none";
          this.style.cursor = "default";
        });