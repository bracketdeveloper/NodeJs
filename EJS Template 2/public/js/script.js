document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("clickBtn");
  const message = document.getElementById("message");

  btn.addEventListener("click", () => {
    message.textContent = "Button clicked successfully";
  });
});