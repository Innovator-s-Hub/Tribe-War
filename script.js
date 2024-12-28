window.onload = function () {
  // Trigger fade-in animations for h1 and p
  const h1 = document.querySelector("h1");
  const p = document.querySelector("p");
  const clickMessage = document.getElementById("click-message");

  // Reset opacity to 0 before triggering animations
  h1.style.opacity = 0;
  p.style.opacity = 0;
  clickMessage.style.opacity = 0;

  // Trigger reflow to restart the animation
  h1.offsetHeight; // Forces reflow
  p.offsetHeight;
  clickMessage.offsetHeight;

  // Start the animations by adding the class again
  h1.classList.add("animate");
  p.classList.add("animate");

  // Wait for the fade-in animations to complete before showing click message
  setTimeout(() => {
    clickMessage.style.display = "block"; // Show the click message
    clickMessage.classList.add("animate"); // Animate the click message
  }, 4000); // After both h1 and p animations complete

  // Make the entire screen clickable
  document.body.addEventListener("click", function () {
    window.location.href = "game.htm"; // Replace with your target URL
  });
};

document.getElementById("tech-button").addEventListener("click", () => {
  const messageDiv = document.getElementById("message");

  // Set the celebratory and cocky message
  messageDiv.innerHTML =
    "<h1>Default winners!<br> Was there ever any doubt? 🎉💻</h1>";

  // Add class to show the message with animation
  messageDiv.classList.add("show");

  // Optional: Remove the class after a delay to hide the message
  setTimeout(() => {
    messageDiv.classList.remove("show");
  }, 5000);
});
