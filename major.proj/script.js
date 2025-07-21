// Get the form
const form = document.getElementById("validationForm");

// Event listener for submit
form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent default form submission

  // Get values
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  // Error message elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  // Clear old errors
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  let isValid = true;

  // ✅ Name Validation (at least 5 chars)
  if (fullName.length < 5) {
    nameError.textContent = "Name must not be less than 5 characters.";
    isValid = false;
  }

  // ✅ Email Validation (must include @)
  if (!email.includes("@")) {
    emailError.textContent = "Enter a valid email (must include @).";
    isValid = false;
  }

  // ✅ Phone Validation (10 digits and not 1234567890)
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone) || phone === "1234567890") {
    phoneError.textContent = "Enter a valid 10-digit phone number (not 1234567890).";
    isValid = false;
  }

  // ✅ Password Validation
  if (
    password.length < 8 || // less than 8 chars
    password.toLowerCase() === "password" || // is "password"
    password.toLowerCase() === fullName.toLowerCase() // same as user's name
  ) {
    passwordError.textContent = "Password must be at least 8 chars, not 'password' or your name.";
    isValid = false;
  }

  // ✅ Confirm Password Match
  if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match.";
    isValid = false;
  }

  // ✅ Final check
  if (isValid) {
    alert("✅ Form submitted successfully!");
    form.reset();
  }
});