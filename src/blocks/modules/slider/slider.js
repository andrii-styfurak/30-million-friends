import Glide from "@glidejs/glide";

window.addEventListener("load", function(){
  const slider = new Glide(".glide", {
    gap: 50,
    swipeThreshold: 30,
    animationDuration: 600,
  }).mount();
});
