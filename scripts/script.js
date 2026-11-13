gsap.registerPlugin(ScrollTrigger);
window.addEventListener("load", () => {
  gsap.fromTo(
    ".hero-subtitle",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
  );

  gsap.fromTo(
    ".hero-title",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
  );

  gsap.fromTo(
    ".hero-description",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power3.out" }
  );

  gsap.fromTo(
    ".cta-button",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, delay: 0.9, ease: "power3.out" }
  );
});

// Initial background parallax setup
gsap.to(".background-image", {
  scale: 1,
  duration: 2,
  ease: "power2.out",
});

// Scroll-based animations
const aboutContent = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-section",
    start: "top center",
    end: "center center",
    toggleActions: "play none none reverse",
  },
});

aboutContent
  .fromTo(
    ".section-title",
    { opacity: 0, x: -20 },
    { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
  )
  .fromTo(
    ".about-heading",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    "-=0.7"
  )
  .fromTo(
    ".about-description",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    "-=0.7"
  )
  .fromTo(
    ".about-link",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    "-=0.7"
  )
  .fromTo(
    ".bgi",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    "-=0.7")
    
  .fromTo(
    ".about-texts",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    "-=0.7");

// Parallax effect on scroll
gsap.to(".background-image", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
  y: "20%",
  ease: "none",
});

var swiper = new Swiper(".mySwiper", {
  speed: 2000,
  parallax: true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//project scetion
const cubeContainer = document.querySelector(".cube-container");
const popup1 = document.querySelector(".project-popup1");
const popup2 = document.querySelector(".project-popup2");
const popup3 = document.querySelector(".project-popup3");
const popup4 = document.querySelector(".project-popup4");
const closeBtn1 = document.querySelector(".close-btn1");
const closeBtn2 = document.querySelector(".close-btn2");
const closeBtn3 = document.querySelector(".close-btn3");
const closeBtn4 = document.querySelector(".close-btn4");
const front = document.querySelector(".front");
const back = document.querySelector(".back ");
const right = document.querySelector(".right");
const left = document.querySelector(".left");

front.addEventListener("mouseenter", () => {
  cubeContainer.classList.add("shifted");
  popup1.classList.add("active");

  // GSAP animation for smooth popup entrance
  gsap.from(".project-popup1", {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    ease: "power2.out",
  });
});
back.addEventListener("mouseenter", () => {
  cubeContainer.classList.add("shifted");
  popup2.classList.add("active");

  // GSAP animation for smooth popup entrance
  gsap.from(".project-popup2", {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    ease: "power2.out",
  });
});
left.addEventListener("mouseenter", () => {
  cubeContainer.classList.add("shifted");
  popup3.classList.add("active");

  // GSAP animation for smooth popup entrance
  gsap.from(".project-popup3", {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    ease: "power2.out",
  });
});
right.addEventListener("mouseenter", () => {
  cubeContainer.classList.add("shifted");
  popup4.classList.add("active");

  // GSAP animation for smooth popup entrance
  gsap.from(".project-popup4", {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    ease: "power2.out",
  });
});

closeBtn1.addEventListener("click", (e) => {
  e.stopPropagation();
  cubeContainer.classList.remove("shifted");
  popup1.classList.remove("active");
});
closeBtn2.addEventListener("click", (e) => {
  e.stopPropagation();
  cubeContainer.classList.remove("shifted");
  popup2.classList.remove("active");
});
closeBtn3.addEventListener("click", (e) => {
  e.stopPropagation();
  cubeContainer.classList.remove("shifted");
  popup3.classList.remove("active");
});
closeBtn4.addEventListener("click", (e) => {
  e.stopPropagation();
  cubeContainer.classList.remove("shifted");
  popup4.classList.remove("active");
});

gsap.to(".video-container", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power3.out",
});

// Video functionality
const myVideo = document.getElementById("myVideo");
const videoOverlay = document.querySelector(".video-overlay2");
const videoTitle = document.querySelector(".video-title");
const playButton = document.querySelector(".play-button-container");

// Play button click handler
playButton.addEventListener("click", () => {
  // Play button animation
  gsap.to(playButton, {
    scale: 0.9,
    duration: 0.1,
    yoyo: true,
    repeat: 1,
    ease: "power2.out",
  });

  // Video play/pause logic
  if (myVideo.paused) {
    myVideo.play();
    gsap.to(videoOverlay, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        videoOverlay.style.pointerEvents = "none";
      },
    });
  } else {
    myVideo.pause();
    gsap.to(videoOverlay, {
      opacity: 1,
      duration: 0.3,
      onStart: () => {
        videoOverlay.style.pointerEvents = "auto";
      },
    });
  }
});

// Video click handler
myVideo.addEventListener("click", () => {
  if (myVideo.paused) {
    myVideo.play();
    videoOverlay.style.opacity = "0";
    videoOverlay.style.pointerEvents = "none";
  } else {
    myVideo.pause();
    videoOverlay.style.opacity = "1";
    videoOverlay.style.pointerEvents = "auto";
  }
});

// Hover animations
videoOverlay.addEventListener("mouseenter", () => {
  gsap.to(videoTitle, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  });
});

videoOverlay.addEventListener("mouseleave", () => {
  gsap.to(videoTitle, {
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: "power2.in",
  });
});

// Animate floating shapes
gsap.to(".shape-11", {
  rotation: 360,
  duration: 20,
  repeat: -1,
  ease: "none",
});

gsap.to(".shape-22", {
  rotation: -360,
  duration: 25,
  repeat: -1,
  ease: "none",
});
