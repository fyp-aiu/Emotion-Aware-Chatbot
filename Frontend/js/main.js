document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add logo hover effect
    const logo = document.querySelector('.logo');
    if(logo) {
        logo.addEventListener('mouseenter', () => {
            logo.style.transform = 'scale(1.05) rotate(-5deg)';
        });
        logo.addEventListener('mouseleave', () => {
            logo.style.transform = 'none';
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Clear previous errors
        document.querySelectorAll('.error').forEach(el => el.remove());

        let isValid = true;

        // Validate username
        if(usernameInput.value.trim() === '') {
            showError(usernameInput, 'Username is required');
            isValid = false;
        }

        // Validate password
        if(passwordInput.value.trim() === '') {
            showError(passwordInput, 'Password is required');
            isValid = false;
        }

        if(isValid) {
            // Add loading animation
            loginForm.classList.add('animate__animated', 'animate__zoomOut');
            
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 500);
        }
    });

    function showError(input, message) {
        const error = document.createElement('div');
        error.className = 'error animate__animated animate__shakeX';
        error.textContent = message;
        error.style.color = '#e74c3c';
        error.style.fontSize = '0.9rem';
        error.style.marginTop = '0.5rem';
        input.parentElement.appendChild(error);
    }
});
