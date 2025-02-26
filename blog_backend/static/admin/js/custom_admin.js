// Custom JavaScript for the Django admin interface

// Function to display an alert when a button is clicked
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    });
});

// Function to change the background color of the header on hover
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    header.addEventListener('mouseover', function() {
        header.style.backgroundColor = '#45a049';
    });
    header.addEventListener('mouseout', function() {
        header.style.backgroundColor = '#4CAF50';
    });
});
