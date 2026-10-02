// ===============================
// DARK / LIGHT MODE
// ===============================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.innerHTML = "☀️";

    } else {

        themeButton.innerHTML = "🌙";

    }

});


// ===============================
// PROJECT FILTER
// ===============================

const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.getAttribute("data-category");

        projects.forEach(project => {

            if (
                category === "all" ||
                project.getAttribute("data-category") === category
            ) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});


// ===============================
// CONTACT FORM VALIDATION
// ===============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("formMessage");


    // Check empty fields

    if (name === "" || email === "" || message === "") {

        formMessage.innerHTML =
            "Please fill in all fields.";

        formMessage.style.color = "red";

        return;

    }


    // Email validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formMessage.innerHTML =
            "Please enter a valid email address.";

        formMessage.style.color = "red";

        return;

    }


    // Success

    formMessage.innerHTML =
        "Thank you! Your message has been submitted.";

    formMessage.style.color = "green";


    contactForm.reset();

});