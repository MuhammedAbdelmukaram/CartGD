const toggleDrawerBtns = document.querySelectorAll('[href="/cart"]');
const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");

toggleDrawerBtns.forEach((toggleDrawerBtn) =>
  toggleDrawerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    drawer.classList.toggle("open");
    overlay.style.display = drawer.classList.contains("open")
      ? "block"
      : "none";
  })
);
overlay.addEventListener("click", function () {
  drawer.classList.remove("open");
  overlay.style.display = "none";
});
