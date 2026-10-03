document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.card');

    sections.forEach(section => {
        if (!section.classList.contains('hero-card')) {
            section.classList.add('fade-in');
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});