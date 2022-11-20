const logoImage = document.querySelector(".logo-img");
const profileImage = document.querySelector(".profile-image");
const sidebarHeader_uilBars = document.querySelector(
  ".sidebar-header .uil-bars"
);
const sidebar = document.querySelector(".sidebar");

const setImages = async () => {
  const logo = await fetch("./logo.svg");
  const profile = await fetch("./IMG_20221024_160602_501.jpg");
  logoImage.setAttribute("src", logo.url);
  profileImage.setAttribute("src", profile.url);
};

const steSidebarResponsive = () => {
  sidebar.classList.toggle("minimal-sidebar");
};
sidebarHeader_uilBars.addEventListener("click", steSidebarResponsive);

window.onload = () => {
  setImages();
  if (window.innerWidth >= 728) {
    sidebar.classList.remove("minimal-sidebar");
  }
};
window.addEventListener("resize", () => {
  if (window.innerWidth <= 728) {
    sidebar.classList.add("minimal-sidebar");
  } else {
    sidebar.classList.remove("minimal-sidebar");
  }
});
