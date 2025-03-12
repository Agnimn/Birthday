var defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  colors: ["#FFE400", "#FFBD00", "#E89400", "#FFCA6C", "#FDFFB8"],
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 500,
    scalar: 1.2,
    shapes: ["star"],
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ["circle"],
  });
}

// Trigger confetti immediately when the page loads
window.addEventListener("load", function () {
  shoot();
  setTimeout(shoot, 1000);
  setTimeout(shoot, 2000);
});

// Also trigger confetti when the user switches back to this tab
document.addEventListener("visibilitychange", function () {
  if (!document.hidden) {
    shoot();
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  }
});
