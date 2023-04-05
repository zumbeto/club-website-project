// Hamburger Menu
window.onload = function() {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
}

// Scroll Animation
const animation_elements = document.querySelectorAll('.animate-on-scroll-left, .animate-on-scroll-right');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }  
    })
}, {
    threshold: 0.5
});

for (let i = 0; i < animation_elements.length; i++) {
    const el = animation_elements[i];

    observer.observe(el);
}