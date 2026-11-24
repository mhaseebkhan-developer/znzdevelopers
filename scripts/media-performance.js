/* Defer off-screen autoplay media without changing its visual presentation. */
(() => {
  const media = document.querySelectorAll('video[data-play-in-view]');
  if (!media.length) return;
  if (!('IntersectionObserver' in window)) {
    media.forEach(v => v.play().catch(() => {}));
    return;
  }
  const watcher = new IntersectionObserver(entries => {
    entries.forEach(({ target: video, isIntersecting }) => {
      if (isIntersecting && !document.hidden) {
        video.play().catch(() => {});
      } else if (!video.paused) {
        video.pause();
      }
    });
  }, { rootMargin: '120px 0px', threshold: 0.05 });
  media.forEach(video => watcher.observe(video));
  document.addEventListener('visibilitychange', () => {
    media.forEach(video => {
      if (document.hidden) video.pause();
      else if (video.getBoundingClientRect().top < innerHeight && video.getBoundingClientRect().bottom > 0) {
        video.play().catch(() => {});
      }
    });
  });
})();
