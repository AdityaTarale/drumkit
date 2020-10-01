window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-value= "${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-value="${e.keyCode}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();

  setTimeout(() => {
    key.classList.toggle("play");
  }, 300);
  key.classList.toggle("play");
});
