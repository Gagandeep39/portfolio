import { renderTimeline } from './timeline-utils.js';

function loadExperience(data) {
    const expList = document.getElementById('experience-timeline');
    if (!(expList && Array.isArray(data.experience))) return;
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

export { loadExperience };