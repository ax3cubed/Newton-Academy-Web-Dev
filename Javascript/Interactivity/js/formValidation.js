document.getElementById('signupForm').addEventListener("submit", function(event){
    // prevent form submission until validation completes
    event.preventDefault();

    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');
    emailError.textContent ="";
    passwordError.textContent = "";
    
    let isValid = true;

    const email = document.getElementById("email").value;
    if (!validateEmail(email)) {
        emailError.textContent = "Please enter a valid email address";
        emailError.style.display = "block";
        isValid = false;
    }

    const password = document.getElementById("password").value;
    if (password.length < 6) {
        passwordError.textContent = "Password must be 6 characters long";
        passwordError.style.display = "block";
        isValid = false;
    }

    if (isValid) {
        alert("Form Submitted successfully")
    }
})
// johndoe@gmail.com
// [a-zA-z0-9.-_]+@[a-zA-z0-9.-]+\.[a-zA-Z](2,6)
function validateEmail(email) {
    const re = /^[a-zA-z0-9.-_]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLocaleLowerCase());
}