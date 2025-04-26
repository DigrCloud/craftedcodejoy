// Mobile Menu Fix for craftedcodejoy

document.addEventListener('DOMContentLoaded', function() {
    // References to DOM elements
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Add mobile contact link if not exists
    if (navLinks && !document.querySelector('.mobile-contact-link')) {
        const mobileContactLink = document.createElement('li');
        mobileContactLink.className = 'mobile-contact-link';
        mobileContactLink.innerHTML = '<a href="#contact">Contact Us</a>';
        navLinks.appendChild(mobileContactLink);
    }
    
    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            
            if (navLinks) {
                navLinks.classList.toggle('active');
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
        
        // Close menu when clicking on a link
        if (navLinks) {
            const links = navLinks.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', function() {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                });
            });
        }
    }
    
    console.log('Mobile menu fix applied successfully!');
});
