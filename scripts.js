// Initialize EmailJS with public key
(function() {
    emailjs.init('NO3nvodMTY8c2rZFB');  
})();

// Function to show the popup modal
function showPopup(section) {
    const popupText = {
        academics: "I have a strong academic background in Computer Science, focusing on algorithms and software development.",
        athletics: "In athletics, I have a passion for basketball and long-distance running, which keeps me active and healthy.",
        businesses: "I have experience with various business ventures and projects, emphasizing entrepreneurship and innovation. Tutor and basketball service business as well as a freelance web development startup starting soon with a partner."
    };

    document.getElementById('popup-text').innerText = popupText[section];
    document.getElementById('popup-modal').style.display = 'block';
}

// Function to close the popup modal
function closePopup() {
    document.getElementById('popup-modal').style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target === document.getElementById('popup-modal')) {
        closePopup();
    }
};

// Add event listener to handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    // Get values from the form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Template parameters that will be sent to my EmailJS
    const templateParams = {
        name: name,
        email: email,
        message: message
    };

    // Send the email using EmailJS
    emailjs.send('service_by86qby', 'template_dw4jsfz', templateParams)
        .then(function(response) {
            // Alert success message if the email was sent successfully
            alert('Thank you, ' + name + '! Your message was sent successfully.');
            document.getElementById("contact-form").reset();  // Clear the form
        }, function(error) {
            console.log('FAILED...', error); // Log the actual error
            // Alert failure message if something went wrong
            alert('Oops! Something went wrong. Please try again later.');
        });

    
});

// --- Start of Image Gallery Functionality ---

// Get all images and arrows
const images = document.querySelectorAll('.about-img');
const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');

let currentIndex = 0;

// Function to show image based on index
function showImage(index) {
    // Hide all images
    images.forEach(image => image.classList.remove('active'));

    // Show the current image
    images[index].classList.add('active');
}

// Show the first image by default
showImage(currentIndex);

// Event listeners for arrows
nextArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Loop to the first image
    showImage(currentIndex);
});

prevArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the last image
    showImage(currentIndex);
});
