function loadSocial(data) {
    const nameEl = document.querySelector('.name');
    if (nameEl) nameEl.textContent = data.name ?? nameEl.textContent;

    const titlePill = document.querySelector('.profile-title-pill');
    if (titlePill && data.title) titlePill.textContent = data.title;

    const emailText = document.querySelector('.email span');
    if (emailText && data.social?.email) emailText.textContent = data.social.email;

    const locationText = document.querySelector('.location span');
    if (locationText && data.location) locationText.textContent = data.location;

    // Social Links (robust selectors by aria-label)
    const githubA = document.querySelector('.profile-social a[aria-label="GitHub"]');
    if (githubA && data.social?.github) {
        githubA.href = `https://github.com/${data.social.github}`;
    }

    const linkedinA = document.querySelector('.profile-social a[aria-label="LinkedIn"]');
    if (linkedinA && data.social?.linkedin) {
        linkedinA.href = `https://linkedin.com/in/${data.social.linkedin}`;
    }

    const emailA = document.querySelector('.email a[aria-label="Email"]');
    if (emailA && data.social?.email) {
        emailA.href = `mailto:${data.social.email}`;
    }
}

export { loadSocial };