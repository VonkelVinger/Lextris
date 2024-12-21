// ✅ COOKIE CONSENT LOGIC
document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesButton = document.getElementById('accept-cookies');
    const customizeCookiesButton = document.getElementById('customize-cookies');

    // Hide banner if cookies are already accepted
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        cookieBanner.style.display = 'none';
        document.documentElement.classList.remove('show-cookie-banner');
    }

    // Accept Cookies Button Logic
    acceptCookiesButton.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = 'none';
        document.documentElement.classList.remove('show-cookie-banner');
    });

    // Customize Cookies Button Logic
    customizeCookiesButton.addEventListener('click', () => {
        alert('Customize cookie preferences (not yet implemented).');
    });
});

// ✅ HIGHLIGHT ACTIVE BUTTON IN NAVIGATION
const currentUrl = window.location.pathname;
document.querySelectorAll('.button').forEach(button => {
    if (button.href.includes(currentUrl)) {
        button.classList.add('active');
    }
});

// ✅ AD PLACEHOLDER CLICK (Optional Enhancement)
document.querySelectorAll('.ad-placeholder').forEach(ad => {
    ad.addEventListener('click', () => {
        alert('Ad clicked! This space can be configured for advertisements.');
    });
});
