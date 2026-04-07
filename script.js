document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const emailInput = document.getElementById("email");
    const message = document.getElementById("formMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = emailInput.value.trim();

        if (!isValidEmail(email)) {  /// basic email validation
            message.textContent = "Please enter a valid email address.";
            message.style.color = "red";
            emailInput.style.border = "2px solid red";
            return;
        }

        emailInput.style.border = "";
        message.textContent = "Thank you for Contacting us! We'll reply as quickly as possible.";
        message.style.color = "green";

        form.reset();
    });

    function isValidEmail(email) {
        return email.includes("@") && email.includes(".");
    }

});