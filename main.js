/**
 * DevCore Enterprise Suite Web-Intake Engine
 */
document.addEventListener("DOMContentLoaded", function () {
    
    // Instantiate system-wide active context engine
    initSystemThemeDirector();
});

/**
 * Monitors and toggles color space variables dynamically across layouts
 */
function initSystemThemeDirector() {
    const triggerButton = document.getElementById("themeSwitcher");
    const structuralRoot = document.getElementById("themeRootEngine");
    const visualIcon = document.getElementById("themeIcon");

    if (!triggerButton || !structuralRoot) return;

    // Detect browser initialization presets or local history keys
    const historicalSelection = localStorage.getItem("devcore-labs-theme") || "dark";
    executeSpectrumShifting(historicalSelection, structuralRoot, visualIcon);

    triggerButton.addEventListener("click", () => {
        const currentActiveMode = structuralRoot.getAttribute("data-bs-theme");
        const targetMode = currentActiveMode === "dark" ? "light" : "dark";

        executeSpectrumShifting(targetMode, structuralRoot, visualIcon);
        localStorage.setItem("devcore-labs-theme", targetMode);
    });
}

/**
 * Mutates icon elements and global dataset configuration flags safely
 */
function executeSpectrumShifting(mode, root, icon) {
    root.setAttribute("data-bs-theme", mode);
    
    if (!icon) return;
    
    if (mode === "dark") {
        icon.className = "bi bi-moon-stars-fill fs-5 text-white";
    } else {
        icon.className = "bi bi-sun-fill fs-5 text-warning";
    }
}