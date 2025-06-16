document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        const username = form.querySelector('input[type="text"]');
        const email = form.querySelector('input[type="email"]');
        const password = form.querySelector('input[type="password"]');

        let valid = true;
        let message = "";

        // Check Username
        if (username.value.trim() === "") {
            message += "Username is required.\n";
            valid = false;
        }

        // Check Email Format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            message += "Please enter a valid email address.\n";
            valid = false;
        }

        // Check Password
        if (password.value.trim() === "") {
            message += "Password is required.\n";
            valid = false;
        }

        if (!valid) {
            e.preventDefault(); // Prevent form submission
            alert(message); // Show error messages
        }
    });
});
      