// script.js
document.addEventListener("DOMContentLoaded", function() {
    const screens = document.querySelectorAll('.screen');
    screens[0].classList.add('active');

    // You can add event listeners here to handle screen changes
    const listItems = document.querySelectorAll('.location-list li');
    listItems.forEach(item => {
        item.addEventListener('click', function() {
            alert(`You selected: ${this.textContent}`);
            // Change screen logic can be added here
        });
    });
});
