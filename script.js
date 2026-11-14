
// ===============================
// 1. DARK / LIGHT MODE
// ===============================

const themeToggle = document.getElementById("theme-toggle");

// Load previously selected theme
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

// Update theme button icon
function updateThemeIcon() {
    const isDark = document.body.classList.contains("dark-mode");

    themeToggle.innerHTML = isDark
        ? '<i data-lucide="sun"></i>'
        : '<i data-lucide="moon"></i>';

    if (window.lucide) {
        lucide.createIcons();
    }
}

// Initial icon
updateThemeIcon();

// Toggle theme when button is clicked
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "portfolio-theme",
        isDark ? "dark" : "light"
    );

    updateThemeIcon();
});


// ===============================
// 2. CURRENT YEAR IN FOOTER
// ===============================

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.textContent =
        `© ${new Date().getFullYear()} Yuva Priya G. All rights reserved.`;
}


// ===============================
// 3. CONSOLE MESSAGE
// ===============================

console.log("Welcome to Yuva Priya's Portfolio!");
console.log("Portfolio loaded successfully.");


