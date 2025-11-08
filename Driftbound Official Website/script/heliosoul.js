const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    observer.unobserve(entry.target); // Animate once
    }
});
}, {
threshold: 0.2 // Adjust sensitivity (20% of element visible)
});

document.querySelectorAll('.fade-in').forEach(el => {
observer.observe(el);
});
