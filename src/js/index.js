document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cta-form");
  const emailInput = document.getElementById("email-input");
  const errorMessage = document.getElementById("error-message");

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!isValidEmail(emailInput.value)) {
      errorMessage.classList.remove("opacity-0");
      errorMessage.classList.add("opacity-100");
    } else {
      errorMessage.classList.remove("opacity-100");
      errorMessage.classList.add("opacity-0");
      emailInput.value = "";
      alert("Thanks for signing up!");
    }
  });

  emailInput.addEventListener("input", () => {
    if (errorMessage.classList.contains("opacity-100")) {
      errorMessage.classList.remove("opacity-100");
      errorMessage.classList.add("opacity-0");
    }
  });
});
