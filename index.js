document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const container = document.querySelector('.container');
    const successContainer = document.querySelector('.success-container');
    const email = document.getElementById('input');
    const errorElement = document.getElementById('error');
    const dismissBtn = document.querySelector('.success-button');

    // Ensure success container is hidden on page load
    successContainer.style.display = 'none';

    // Show success container on form submission if valid
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default submission
        
        let messages = [];
        
        if (email.value === '' || email.value == null) {
            messages.push('Email is required');
        }

        if (!email.value.includes('@')) {
            messages.push('Email must include "@"');
        }

        if (!email.value.includes('.com')) {
            messages.push('Email must include ".com"');
        }

        if (email.value.length <= 6) {
            messages.push('Email must be longer than 6 characters');
        }

        if (email.value.length >= 40) {
            messages.push('Email must be less than 40 characters');
        }

        // Display error messages if any
        if (messages.length > 0) {
            errorElement.innerText = messages.join(', ');
            return; // Exit early if validation fails
        }

        // Hide error messages if validation passes
        errorElement.innerText = '';

        // Show success container
        container.style.display = 'none';
        successContainer.style.display = 'flex';

    });

    dismissBtn.addEventListener('click', (e) => {
        container.style.display = 'flex';
        successContainer.style.display = 'none';
        email.value = ''; 
        errorElement.innerText = ''
    });

});
