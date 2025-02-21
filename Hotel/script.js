// Placeholder for future JavaScript functionality
// Add any interactivity or additional features here.

document.addEventListener("DOMContentLoaded", function() {
    // Example of a simple JavaScript event
    const navLinks = document.querySelectorAll(".nav-link");
  
    navLinks.forEach(function(link) {
      link.addEventListener("click", function() {
        console.log(`Navigating to: ${link.textContent}`);
      });
    });
  });

  