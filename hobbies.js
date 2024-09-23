const hobbies = [
    {
        title: 'Exploring technologies',
        media: '<img src="images/tech2.jpg" alt="Exploring new technologies" class="hobby-media"><img src="images/tech.jpg" alt="Exploring new technologies" class="hobby-media"><img src="images/tech3.jpg" alt="Exploring new technologies" class="hobby-media"><img src="images/tech4.jpg" alt="Exploring new technologies" class="hobby-media">'
    },
    {
        title: 'Fitness',
        media: '<img src="images/fitness.jpg" alt="Fitness" class="hobby-media"><video class="hobby-media" controls> <source src="videos/fitness.mp4" type="video/mp4"> Your browser does not support the video tag. </video><img src="images/Fitness2.jpg" alt="Learning" class="hobby-media">'
    },
    {
        title: 'Coding',
        media: '<img src="images/coding2.png" alt="coding2" class="hobby-media"><img src="images/coding.JPG" alt="Coding" class="hobby-media"><img src="images/coding3.png" alt="coding3" class="hobby-media">'
    },
    {
    title: 'Self-development (reading books, watching podcasts)',
    media: '<img src="images/learning.jpg" alt="Learning" class="hobby-media"><img src="images/learning2.jpg" alt="Learning" class="hobby-media"><img src="images/learning3.jpg" alt="Learning" class="hobby-media">'
    },
    {
        title: 'Basketball',
        media: ' <video class="hobby-media" controls> <source src="videos/basketball.mp4" type="video/mp4"> Your browser does not support the video tag. </video> '
    }
];

let currentHobbyIndex = 0;

function showHobby(index) {
    const hobbyDisplay = document.getElementById('hobby-display');
    hobbyDisplay.innerHTML = `
    <div class="hobby-item">
        <div class="hobby-title">${hobbies[index].title}</div>
        <div class="hobby-images">
            ${hobbies[index].media}
        </div>
    </div>`;
}

function showNextHobby() {
    console.log("Next hobby function called");
    currentHobbyIndex = (currentHobbyIndex + 1) % hobbies.length;
    showHobby(currentHobbyIndex);
}

function showPreviousHobby() {
    console.log("Previous hobby function called");
    currentHobbyIndex = (currentHobbyIndex - 1 + hobbies.length) % hobbies.length;
    showHobby(currentHobbyIndex);
}

// Initialize by showing the first hobby
showHobby(currentHobbyIndex);



