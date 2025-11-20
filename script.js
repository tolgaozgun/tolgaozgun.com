document.addEventListener('DOMContentLoaded', () => {
    // Typing Effect
    const textElement = document.querySelector('.typing-text');
    const words = ['Machine Learning Engineer', 'Backend Developer', 'Researcher'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            textElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Pause before typing next word
        }

        setTimeout(type, typeSpeed);
    }

    type();

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for Fade In
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-title, .about-content, .timeline-item, .project-card, .skills-category, .education-card, .cert-list').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Google Analytics Event Tracking (via Firebase)
    // Wait for Firebase to load
    window.addEventListener('load', () => {
        if (typeof firebase !== 'undefined') {
            const analytics = firebase.analytics();

            // Track Resume Download
            const resumeBtn = document.querySelector('a[href*="drive.google.com"]');
            if (resumeBtn) {
                resumeBtn.addEventListener('click', () => {
                    analytics.logEvent('download_resume', {
                        'event_category': 'engagement',
                        'event_label': 'Resume Download'
                    });
                });
            }

            // Track Social Links
            document.querySelectorAll('.social-links a').forEach(link => {
                link.addEventListener('click', function () {
                    const platform = this.querySelector('i').className.replace('fab fa-', '').replace('fas fa-', '');
                    analytics.logEvent('social_click', {
                        'event_category': 'engagement',
                        'event_label': platform
                    });
                });
            });

            // Track Project Links
            document.querySelectorAll('.project-link').forEach(link => {
                link.addEventListener('click', function () {
                    const projectName = this.closest('.project-content').querySelector('h3').textContent;
                    analytics.logEvent('view_project', {
                        'event_category': 'engagement',
                        'event_label': projectName
                    });
                });
            });
        }
    });

    // Header Scroll Effect
    const header = document.querySelector('.glass-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '1rem 5%';
            header.style.background = 'rgba(15, 23, 42, 0.9)';
        } else {
            header.style.padding = '1.5rem 5%';
            header.style.background = 'rgba(30, 41, 59, 0.7)';
        }
    });
});
