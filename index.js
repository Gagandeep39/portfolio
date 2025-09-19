// Fetch data from data.json and populate HTML
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        // Profile Info
        document.querySelector('.name').textContent = data.name;
        document.querySelector('.email span').textContent = data.social.email;
        document.querySelector('.location span').textContent = data.location;

        // Social Links
        const socialLinks = document.querySelectorAll('.profile-social a');
        // GitHub
        socialLinks[2].href = `https://github.com/${data.social.github}`;
        // LinkedIn
        socialLinks[1].href = `https://linkedin.com/in/${data.social.linkedin}`;
        // Email
        socialLinks[0].href = `mailto:${data.social.email}`;
    })
    .catch(error => console.error('Error loading data.json:', error));
