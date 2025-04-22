const menuBtn = document.getElementById("menu_button");
const navItems = document.getElementById("nav_items");

menuBtn.addEventListener("click", () => {
  const expanded = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", !expanded);
  navItems.classList.toggle("show");
});
