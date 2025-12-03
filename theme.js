
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(prefersDark ? "dark" : "light");
}

const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const newTheme = current === "dark" ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
  toggleBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";
});
