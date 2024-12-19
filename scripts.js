document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookies");
    const customizeButton = document.getElementById("customize-cookies");

    // Check if cookies have already been accepted
    if (localStorage.getItem("cookiesAccepted") === "true") {
        cookieBanner.style.display = "none";
    }

    // Accept all cookies
    acceptButton.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.style.display = "none";
    });

    // Customize cookie options (future implementation)
    customizeButton.addEventListener("click", () => {
        alert("Customize cookie options coming soon!");
    });
});
