const btn = document.getElementById("btnToggle");
const siteWrap = document.querySelector(".site-wrap");
const sidebar = document.getElementById("sidebar");

let collapsed = false;

// --- Toggle Sidebar ---
btn.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    // 📱 Móvil
    sidebar.classList.toggle("show");
    btn.textContent = sidebar.classList.contains("show")
      ? "✕ Cerrar"
      : "☰ Menú";
  } else {
    // 🖥️ Escritorio
    collapsed = !collapsed;
    siteWrap.classList.toggle("collapsed", collapsed);
    btn.textContent = collapsed ? "☰ Plegar" : "✕ Expandir";
  }
});

// --- Reset cuando cambias de tamaño ---
window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    siteWrap.classList.remove("collapsed");
    collapsed = false;
    btn.textContent = sidebar.classList.contains("show")
      ? "✕ Cerrar"
      : "☰ Menú";
  } else {
    sidebar.classList.remove("show");
    btn.textContent = collapsed ? "☰ Plegar" : "✕ Expandir";
  }
});

// DARK MODE

// Dark mode persistente
const btnTheme = document.getElementById("btnTheme");

// Revisar preferencia de tema del usuario
let darkMode = localStorage.getItem("darkMode") === "true";
document.documentElement.classList.toggle("dark", darkMode);

btnTheme.innerHTML = `<img src="../img/sol-y-luna.png" alt="tema" class="nav-icon">`;

// Evento de click para cambiar tema

btnTheme.addEventListener("click", () => {
  darkMode = !darkMode;
  document.documentElement.classList.toggle("dark", darkMode);
  localStorage.setItem("darkMode", darkMode);
  btnTheme.innerHTML = `<img src="../img/sol-y-luna.png" alt="tema" class="nav-icon">`;
});
