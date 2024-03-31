const sidebar = document.querySelector(".sidebar");
const navLink = document.querySelector(".nav_link");

sidebar.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});
