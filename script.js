const menuButton = document.querySelector("#menuButton");
const sidebar = document.querySelector("#sidebar");
const overlay = document.querySelector("#overlay");
const categoryButtons = document.querySelectorAll(".category-card");
const productCards = document.querySelectorAll(".product-card");
const navLinks = document.querySelectorAll(".sidebar a");

function setMenu(open) {
  document.body.classList.toggle("menu-open", open);
  menuButton?.setAttribute("aria-expanded", String(open));
}

menuButton?.addEventListener("click", () => {
  setMenu(!document.body.classList.contains("menu-open"));
});

overlay?.addEventListener("click", () => setMenu(false));

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    categoryButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    productCards.forEach((card) => {
      const isVisible = filter === "todos" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !isVisible);
    });
  });
});
