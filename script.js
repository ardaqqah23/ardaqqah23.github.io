
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const country = document.getElementById("country").value;
    const comments = document.getElementById("comments").value.trim();

    if (
        fullName === "" ||
        email === "" ||
        country === "" ||
        comments === ""
    ) {
        alert("Please fill in all fields.");
    } else {
        alert("Your message has been submitted successfully!");
        contactForm.reset();
    }

});
