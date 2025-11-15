// Low-Level, Beginner JavaScript for Kudla Tourism Site

// 1. Mobile Navigation Toggle (Interactive Feature)
document.addEventListener('DOMContentLoaded', function() {
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const mobileNavMenu = document.getElementById('mobile-nav-menu');

    // Simple function to toggle the 'display' style of the mobile menu
    menuToggleBtn.addEventListener('click', function() {
        if (mobileNavMenu.style.display === 'block') {
            mobileNavMenu.style.display = 'none';
        } else {
            mobileNavMenu.style.display = 'block';
        }
    });

    // 2. Dynamic Content Population (Simulating Content Management)
    const destinations = [
        { name: "Panambur Beach", description: "Famous for its clean sands and annual kite festival. A perfect spot for sunset viewing." },
        { name: "Kadri Manjunath Temple", description: "An ancient temple dedicated to Manjunatha. Known for its historical architecture." },
        { name: "Mangala Devi Temple", description: "The city's namesake temple, a significant cultural and religious site." },
        { name: "Sultan Battery", description: "A historical watchtower built by Tipu Sultan, offering a beautiful view of the river." }
    ];

    const destinationContainer = document.getElementById('destination-container');

    // Check if the container exists (only on index.html)
    if (destinationContainer) {
        // Iterate over the data array
        destinations.forEach(place => {
            // Create a new HTML element (DOM Manipulation)
            const card = document.createElement('div');
            card.classList.add('destination-card');

            // Set the inner HTML content using Template Literals
            card.innerHTML = `
                <h4>${place.name}</h4>
                <p>${place.description}</p>
                <a href="blog.html?dest=${encodeURIComponent(place.name)}">View Guides</a>
            `;

            // Append the new element to the main container
            destinationContainer.appendChild(card);
        });
    }
});
