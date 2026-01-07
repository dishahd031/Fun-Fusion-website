// Select elements
const loginBtn = document.querySelector('.btnLogin-popup');
const wrapper = document.querySelector('.wrapper');

// Open login box
loginBtn.addEventListener('click', () => {
    wrapper.style.display = "flex";
});

// Close login box when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === wrapper) {
        wrapper.style.display = "none";
    }
});

// Simple login message
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();  // Stop page refresh
    alert("Login Successful!");
});

