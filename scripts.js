document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookies");

    // Check if cookies were previously accepted
    if (localStorage.getItem("cookiesAccepted") === "true") {
        cookieBanner.style.display = "none";
    }

    // Accept all cookies
    acceptButton.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.style.display = "none";
    });

    // Optionally add functionality for "Customize" button
    const customizeButton = document.getElementById("customize-cookies");
    customizeButton.addEventListener("click", () => {
        alert("Customize cookie options coming soon!");
        // Future implementation for more granular controls
    });
});

