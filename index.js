import { loadExperience } from './experience.js';
import { loadEducation } from './education.js';
import { loadSocial } from './social.js';

// Fetch data from data.json and populate HTML
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        // Profile Info
        loadSocial(data);

        // Experience Timeline
        loadExperience(data);

        // Education Timeline
        loadEducation(data);

    })
    .catch(error => console.error('Error loading data.json:', error));
