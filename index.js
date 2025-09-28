// Small reusable renderer for timeline sections
function renderTimeline(container, items, mapItemToHtml) {
    if (!container || !Array.isArray(items)) return;
    container.innerHTML = items.map(mapItemToHtml).join('');
}

// Fetch data from data.json and populate HTML
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        // Profile Info
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

        // Experience Timeline
        const expList = document.getElementById('experience-timeline');
        if (expList && Array.isArray(data.experience)) {
            renderTimeline(expList, data.experience, (job) => {
                const responsibilities = Array.isArray(job.responsibilities)
                    ? job.responsibilities.map((r) => `<li>${r}</li>`).join('')
                    : '';
                return `
                    <li class="timeline-item">
                        <div class="timeline-content">
                            <div class="header">
                                <span class="role">${job.role ?? ''}</span>
                                <span class="duration">${job.duration ?? ''}</span>
                            </div>
                            <div class="company">${job.company ?? ''}</div>
                            ${responsibilities ? `<ul class="responsibilities">${responsibilities}</ul>` : ''}
                        </div>
                    </li>
                `;
            });
        }
    })
    .catch(error => console.error('Error loading data.json:', error));
