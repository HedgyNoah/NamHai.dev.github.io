const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".about");
hiddenElements.forEach((el) => observer.observe(el));

const links = document.querySelectorAll(".link");
const videos = document.querySelectorAll(".video");
const backs = document.querySelectorAll(".back");
const certificate = document.getElementById("certificate");
const linkcerti = document.getElementById("linkcerti");
const backcerti = document.getElementById("backcerti");

linkcerti.addEventListener("click", () => {
  backcerti.classList.add("appear");
  certificate.classList.add("appear");
});

backcerti.addEventListener("click", () => {
  backcerti.classList.remove("appear");
  certificate.classList.remove("appear");
});

const enter = document.getElementById("enter");
const curtain = document.getElementById("curtain");
enter.addEventListener("click", () => {
  curtain.style.display = "none";
});

links.forEach((link, index) => {
  link.addEventListener("click", () => {
    removeClass();
    videos[index].classList.add("appear");
    backs[index].classList.add("appear");
  });
});
function removeClass() {
  backs.forEach((back) => {
    back.classList.remove("appear");
  });
  videos.forEach((video) => {
    video.classList.remove("appear");
  });
}
backs.forEach((back) => {
  back.addEventListener("click", () => {
    removeClass();
  });
});

document.getElementById("brand").addEventListener("click", () => {
  window.scrollTo(0, -100000);
});
