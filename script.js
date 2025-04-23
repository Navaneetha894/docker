
// Greet the visitor
window.onload = function () {
    alert("Welcome to Navaneetha's Portfolio!");
};

// Add interactivity: When user clicks on project links, log which one was clicked
document.addEventListener("DOMContentLoaded", function () {
    const projectLinks = document.querySelectorAll("#projects a");

    projectLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            console.log(`User clicked on project: ${this.textContent}`);
        });
    });
});
