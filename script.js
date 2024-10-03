document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.getElementById("toggler");
    const navbar = document.querySelector(".navbar");

    // Toggle navbar visibility when the checkbox is checked/unchecked
    toggler.addEventListener("change", function () {
        navbar.style.display = toggler.checked ? "flex" : "none"; // Show or hide navbar
    });

    // Function to handle form submission
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Gather form data
        const name = event.target.querySelector('input[placeholder="Your Name"]').value;
        const email = event.target.querySelector('input[placeholder="Your Email"]').value;
        const address = event.target.querySelector('input[placeholder="Your Address"]').value;
        const phone = event.target.querySelector('input[placeholder="Phone Number"]').value;
        const message = event.target.querySelector('textarea#message').value;

        // Simple validation
        if (name && email && address && phone && message) {
            // You can send the data to your server or API here

            // Display a success message
            const successMessage = document.getElementById("successMessage");
            successMessage.innerText = `Thank you, ${name}! Your message has been sent.`;
            successMessage.style.display = 'block';

            // Optionally, clear the form after submission
            event.target.reset();
        } else {
            // Handle the case where validation fails
            alert("Please fill in all fields.");
        }
    });

    // Optional: Smooth scroll to sections when navigation links are clicked
    const navLinks = document.querySelectorAll('nav.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1); // Get the ID from href
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
