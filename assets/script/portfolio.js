let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
let title = document.getElementById("title");
let scrollWidth = scrollContainer.clientWidth;

window.addEventListener("resize", () => {
  location.reload();
  scrollContainer.scrollLeft = 0;
  console.log(window.innerHeight);
  // if (window.innerHeight < 550) {
  //   title.style.marginTop = "100%";
  // }
});

// scrollContainer.addEventListener("wheel", (evt) => {
//   evt.preventDefault();
//   scrollContainer.scrollLeft += evt.deltaY;
//   scrollContainer.style.scrollBehavior = "auto";
// });

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += scrollWidth;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= scrollWidth;
});
