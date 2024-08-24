// Define content for each "page"
const pages = {
    home: "<h1>Welcome to Home</h1><p>This is the home page.</p>",
    about: "<h1>About Us</h1><p>This is the about page.</p>",
    contact: "<h1>Contact Us</h1><p>This is the contact page.</p>"
};

// Function to load content based on the hash in the URL
function loadContent() {
    // Get the current hash from the URL
    let page = window.location.hash.substring(1);
    if (!page || !pages[page]) {
        page = "home"; // Default to home if no valid hash is found
    }

    // Inject content into the content div
    document.getElementById("content").innerHTML = pages[page];

    // Update active link class
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById(`${page}-link`).classList.add('active');
}

// Listen for hash changes in the URL
window.addEventListener("hashchange", loadContent);

// Load the initial content when the page loads
window.addEventListener("load", loadContent);
