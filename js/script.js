const items = document.querySelectorAll(".item");
const mainVideo = document.getElementById("mainVideo");

items.forEach((item) => {
  item.addEventListener("click", () => {
    const videoId = item.getAttribute("data-id");
    mainVideo.src = `https://www.youtube.com/embed/${videoId}`;
  });
});

const arrow = document.querySelector(".arrow");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
});

arrow.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const searchIcon = document.querySelector(".search");
const searchBox = document.querySelector(".search-box");

searchIcon.addEventListener("click", () => {
  searchBox.classList.toggle("hide");
});
const menuBtn = document.querySelector(".menu i"); // أيقونة الـ bars
const overlay = document.getElementById("myNav");
const closeBtn = document.querySelector(".closebtn");

// فتح القائمة
menuBtn.addEventListener("click", () => {
  overlay.style.width = "100%";
});

// غلق القائمة
closeBtn.addEventListener("click", () => {
  overlay.style.width = "0";
});
