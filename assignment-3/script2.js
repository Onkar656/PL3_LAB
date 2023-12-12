document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const checkButton = document.getElementById("checkButton");
    const messageElement = document.getElementById("message");

    checkButton.addEventListener("click", function () {
        const password = passwordInput.value;

        if (validatePassword(password)) {
            messageElement.textContent = "Password is valid!";
            messageElement.style.color = "green";
        } else {
            messageElement.textContent = "Password is not valid. Please check the criteria.";
            messageElement.style.color = "red";
        }
    });

    function validatePassword(password) {
        // Check if the password meets all criteria
        const lengthCheck = password.length >= 8;
        const uppercaseCheck = /[A-Z]/.test(password);
        const lowercaseCheck = /[a-z]/.test(password);
        const digitCheck = /[0-9]/.test(password);
        const specialCharCheck = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

        return lengthCheck && uppercaseCheck && lowercaseCheck && digitCheck && specialCharCheck;
    }
});
