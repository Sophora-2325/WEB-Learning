const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
// 切换移动端菜单
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});
// 点击菜单项后自动关闭移动端菜单
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
});
