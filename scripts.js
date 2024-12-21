// ✅ Cookie Consent Logic
document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesButton = document.getElementById('accept-cookies');
    const customizeCookiesButton = document.getElementById('customize-cookies');

    if (localStorage.getItem('cookiesAccepted') === 'true') {
        cookieBanner.style.display = 'none';
    }

    acceptCookiesButton.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = 'none';
    });

    customizeCookiesButton.addEventListener('click', () => {
        alert('Customize cookie preferences (not yet implemented).');
    });
});

// ✅ Highlight Active Button
const currentUrl = window.location.pathname;
document.querySelectorAll('.button').forEach(button => {
    if (button.href.includes(currentUrl)) {
        button.classList.add('active');
    }
});

// ✅ Ad Placeholder Click (Optional Enhancement)
document.querySelectorAll('.ad-placeholder').forEach(ad => {
    ad.addEventListener('click', () => {
        alert('Ad clicked! This space can be configured for advertisements.');
    });
});
