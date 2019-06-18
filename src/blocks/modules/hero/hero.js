import u from "umbrellajs/umbrella.esm.js";

u("#js-toggle-share").on("click", function() {
  u(".hero__share").toggleClass("hero__share--open");
});

var player,
  isPlayerPlay = true,
  videoId = window.innerWidth <= 892 ? "eHoA-W3F9hI" : "48UxuOaCgrU";

window.onload = function() {
  var tag = document.createElement("script");

  tag.src = "https://www.youtube.com/iframe_api";
  var lastScriptTag = u("script").last();
  lastScriptTag.after(tag);

  window.onYouTubeIframeAPIReady = function() {
    player = new YT.Player("player", {
      height: "360",
      width: "640",
      videoId: videoId,
      playerVars: { "mute": 1, "autoplay": 1, "controls": 0, "showinfo": 0, "rel": 0, "fs": 0, "cc_load_policy": 0, "iv_load_policy": 3, "modestbranding": 1, "loop": 1, "wmode": "opaque", "enablejsapi": 1 },
      events: {
        "onReady": onPlayerReady,
        "onStateChange": function(e) {
          if (e.data === YT.PlayerState.ENDED) {
            player.playVideo();
          }
          u(".hero__play-video").first().style.opacity = 0;
          if (e.data === 2) {
            u(".hero__play-video").first().style.opacity = 1;
          }
          console.log(e.data);
        }
      }
    });
  };

  function onPlayerReady() {
    u(".hero").addClass("video-show");
    player.playVideo();

    u("#js-play-video").on("click", function() {
      isPlayerPlay ? player.pauseVideo() : player.playVideo();
      isPlayerPlay = !isPlayerPlay;
      u(".hero").toggleClass("video-show");
    });
  }
};
