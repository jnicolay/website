// Button und Body-Element abrufen
const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

// Elemente für den Inhalt abrufen
const mainHeading = document.getElementById('main-heading');
const mainParagraph = document.getElementById('main-paragraph');
const exampleImage = document.getElementById('professional-img');

// Event-Listener zum Wechseln zwischen Light und Dark Mode
toggleButton.addEventListener('click', function () {
    // Wechseln zwischen den Modi
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        toggleButton.textContent = 'Go to work profile';
        
        // Inhalt im Dark Mode ändern
        mainHeading.textContent = "Welcome to my artist profile!";
        mainParagraph.textContent = "I am passionate for contemporary music with or without live electronics and digital art";
        exampleImage.src = "art-img.jpeg";
        
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        toggleButton.textContent = 'Go to artist profile';
        
        // Inhalt im Light Mode ändern
        mainHeading.textContent = "Welcome to my work space!";
        mainParagraph.textContent = "I proudly present my current work projects and social engagement here. Take your time and have a look!";
        exampleImage.src = "JN_professional.jpeg";
    }
});
