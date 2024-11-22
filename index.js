document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const container = document.querySelector('.container');
    const successContainer = document.querySelector('.success-container');

    // Ensure success container is hidden on page load
    successContainer.style.display = 'none';

    // Show success container on form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission
        container.style.display = 'none'; // Hide the main container
        successContainer.style.display = 'flex'; // Show the success container
    });
});
