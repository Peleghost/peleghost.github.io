var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active-link");
  }
  for (i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

function openMenu() {
  const sideMenu = document.getElementById("sideMenu");
  sideMenu.style.right = "0";
}
function closeMenu() {
  const sideMenu = document.getElementById("sideMenu");
  sideMenu.style.right = "-160px";
}
