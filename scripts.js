// Initialize EmailJS with public key
(function() {
    emailjs.init('NO3nvodMTY8c2rZFB');  
})();

// Function to show the popup modal
function showPopup(section) {
    const popupText = {
        academics: `
            <div class="popup-content">
                <div class="popup-text">
                    <p>Some call it gifted, some say it's talent, but to me, it has always been as simple as passion. Growing up, I’ve always loved the idea of learning, but more specifically, I fell in love with math and logic. I never dreaded doing math problems; instead, I did them for fun, learning concepts years ahead of my grade level. In 5th grade, my teacher would pull me aside to give me high school math lessons, and that same year, for my elementary school graduation, I was awarded the math award. Years later, I graduated middle school with awards in both math and history. In 10th grade, I received the OSBA All-Academic Award, and I later graduated high school with honors and an acceptance to the University of Toronto for "Mathematical & Physical Sciences," all while playing basketball at an elite prep level. Due to COVID-19, I decided to stay in Ottawa, where I pursued Computer Science, received multiple merit scholarships, and earned several spots on the dean’s honors list. My excellent grades in recent semesters led to being congratulated by the Faculty of Engineering and having my master's application prioritized. Now in my last semester of undergrad, I aspire to continue my education with a "Master of Computer Science with a Concentration in Applied Artificial Intelligence." I’m a fast and dedicated learner, eager to take my abilities to the next level and unlock my true potential because I know I have much more to offer.</p>
                </div>
                <div class="popup-media">
                    <img src="images/academic.jpg" alt="Academics" class="popup-img">
                </div>
            </div>`,
        lifestyle: `
            <div class="popup-content">
                <div class="popup-text">
                    <p>In athletics, I have a passion for basketball and long-distance running, which keeps me active and healthy.</p>
                </div>
                <div class="popup-media">
                    <video controls class="popup-video">
                        <source src="videos/motivation.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>`,
        businesses: `
            <div class="popup-content">
                <div class="popup-text">
                    <p>I have experience with various business ventures and projects, emphasizing entrepreneurship and innovation. Tutor and basketball service business as well as a freelance web development startup starting soon with a partner.</p>
                </div>
                <div class="popup-media">
                    <img src="images/business.jpg" alt="Business Ventures" class="popup-img">
                </div>
            </div>`
    };

    document.getElementById('popup-text').innerHTML = popupText[section];
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
