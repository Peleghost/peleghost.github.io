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

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const responseMessage = document.getElementById("responseMessage");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      // Simulate form submission
      responseMessage.textContent = "Thank you! Your message has been sent.";
      responseMessage.style.color = "green";

      // Clear the form
      contactForm.reset();
    } else {
      responseMessage.textContent = "Please fill out all fields.";
      responseMessage.style.color = "red";
    }

    // Hide message after 3 seconds
    setTimeout(() => {
      responseMessage.textContent = "";
    }, 3000);
  });
});
