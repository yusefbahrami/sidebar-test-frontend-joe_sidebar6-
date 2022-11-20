const logoImage = document.querySelector(".logo-img");
const profileImage = document.querySelector(".profile-image");
window.onload = async () => {
  const logo = await fetch("./logo.svg");
  const profile = await fetch("./IMG_20221024_160602_501.jpg");
  logoImage.setAttribute("src", logo.url);
  profileImage.setAttribute("src", profile.url);
};
