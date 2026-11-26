```javascript
// Mobile Navigation
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');

    toggle.setAttribute(
        'aria-expanded',
        String(isOpen)
    );
});

// Close menu after clicking a navigation link
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
    });
});

// Automatically update copyright year
document.getElementById('year')?.textContent =
    new Date().getFullYear();

// Active navigation while scrolling
const sections = document.querySelectorAll(
    'main section[id]'
);

const links = document.querySelectorAll('.nav a');

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            links.forEach(link => {

                link.classList.toggle(
                    'active',
                    link.getAttribute('href') ===
                    '#' + entry.target.id
                );

            });

        }

    });

}, {
    rootMargin: '-35% 0px -55% 0px'
});

sections.forEach(section => {
    observer.observe(section);
});
```
