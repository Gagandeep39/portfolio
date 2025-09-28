import { renderTimeline } from './timeline-utils.js';

function loadEducation(data) {
  const eduList = document.getElementById('education-timeline');
  if (!(eduList && Array.isArray(data.education))) return;

  renderTimeline(eduList, data.education, (edu) => {
    const highlights = Array.isArray(edu.highlights)
      ? edu.highlights.map((h) => `<li>${h}</li>`).join('')
      : '';
    return `
      <li class="timeline-item">
        <div class="timeline-content">
          <div class="header">
            <span class="role">${edu.degree ?? ''}</span>
            <span class="duration">${edu.duration ?? ''}</span>
          </div>
          <div class="company">${edu.institution ?? ''}</div>
          ${highlights ? `<ul class="responsibilities">${highlights}</ul>` : ''}
        </div>
      </li>
    `;
  });
}

export { loadEducation };
