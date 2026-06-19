document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Simple fade-in animation for elements as they scroll into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('section, .fade-in');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });

    // Alert for Gorra Digital (since we don't have the link yet)
    const btnGorra = document.getElementById('btn-gorra');
    if (btnGorra) {
        btnGorra.addEventListener('click', (e) => {
            e.preventDefault();
            alert('¡Próximamente! Aquí enlazaremos la cuenta de PayPal, Stripe o Bizum para recibir apoyos a la Gorra Digital.');
        });
    }
});
