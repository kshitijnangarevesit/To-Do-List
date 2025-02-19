document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("dark-mode-toggle");
  const body = document.body;

  // Check for saved user preference in local storage
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("light-mode");
    toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
  }

  toggleButton.addEventListener("click", function () {
    body.classList.toggle("light-mode");

    // Save user preference in local storage
    if (body.classList.contains("light-mode")) {
      localStorage.setItem("darkMode", "enabled");
      toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      localStorage.setItem("darkMode", "disabled");
      toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    }
  });
});
