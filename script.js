const coin = document.getElementById("coin");
const result = document.getElementById("result");
const flipBtn = document.getElementById("flipBtn");

flipBtn.addEventListener("click", () => {
  // Disable button during flip
  flipBtn.disabled = true;
  result.textContent = "";

  const isHeads = Math.random() < 0.5;

  // Start with a strong 3D spin
  coin.style.transition = "transform 1s cubic-bezier(0.3, 0.7, 0.4, 1)";
  coin.style.transform = `rotateY(${1080 + (isHeads ? 0 : 180)}deg) rotateX(0deg)`;

  // After spin ends, reset it perfectly flat
  setTimeout(() => {
    coin.style.transition = "none"; // Remove smooth animation for reset
    coin.style.transform = `rotateY(${isHeads ? 0 : 180}deg) rotateX(0deg)`;
    result.textContent = isHeads ? "HEAD" : "TAIL";
    flipBtn.disabled = false;
  }, 1000);
});