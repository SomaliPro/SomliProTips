  // Select the burger icon and navigation menu
const burgerIcon = document.querySelector('.middle-section');
const linkItems = document.querySelector('.link-items');

// Add click event to toggle menu visibility
burgerIcon.addEventListener('click', () => {
    linkItems.classList.toggle('active');
});
       
