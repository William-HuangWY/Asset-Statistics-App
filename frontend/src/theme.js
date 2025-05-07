export function initTheme() {
    const userPref = localStorage.getItem("theme") || "light";
    const userPrefDark = userPref === "dark" || (!userPref && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", userPrefDark);
}

export function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
}