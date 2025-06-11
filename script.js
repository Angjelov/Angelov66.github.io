// PRELOADER ANIMATION
const preloader = document.getElementById('preloader');
const progressFill = document.querySelector('.progress-fill');
const mainContent = document.querySelector('.main-content');

let progress = 0;
const interval = setInterval(() => {
  progress += 1.5;
  progressFill.style.width = progress + '%';
  if (progress >= 100) {
    clearInterval(interval);
    preloader.style.display = 'none';
    mainContent.style.display = 'flex';
    startFloatingElements();
  }
}, 50);

// FLOATING HEARTS AND QUESTION MARKS
const floatingContainer = document.querySelector('.floating-container');

function createFloatingElement(char, animationName, duration, delay, left) {
  const el = document.createElement('div');
  el.classList.add(animationName === 'floatUpSway' ? 'floating-heart' : 'floating-question');
  el.textContent = char;
  el.style.left = left + 'vw';
  el.style.animation = `${animationName} ${duration}s linear ${delay}s forwards`;
  floatingContainer.appendChild(el);

  // Remove after animation
  setTimeout(() => {
    el.remove();
  }, (duration + delay) * 1000);
}

function startFloatingElements() {
  // Generate floating hearts and question marks every 800ms
  setInterval(() => {
    const leftPosHeart = Math.random() * 100;
    const durationHeart = 6 + Math.random() * 4;
    createFloatingElement('❤️', 'floatUpSway', durationHeart, 0, leftPosHeart);

    const leftPosQ = Math.random() * 100;
    const durationQ = 7 + Math.random() * 3;
    createFloatingElement('❓', 'driftUpRotate', durationQ, 1, leftPosQ);
  }, 800);
}

// BUTTON INTERACTION
const btnYes = document.querySelector('button.yes');
const btnNo = document.querySelector('button.no');
const response = document.getElementById('response');
const confettiCanvas = document.getElementById('confetti-canvas');
const sadFaceContainer = document.querySelector('.sad-face-container');

btnYes.addEventListener('click', () => {
  response.textContent = "Yay! 💖 I can't wait to see you!\n11.06.2025 at 13:00";
  launchConfetti();
});

btnNo.addEventListener('click', () => {
  response.textContent = "Oh no... 😞";
  showSadFaces();
});

// SIMPLE CONFETTI EFFECT
function launchConfetti() {
  confettiCanvas.style.display = 'block';
  const ctx = confettiCanvas.getContext('2d');
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const confettiPieces = [];
  const colors = ['#d72828', '#ff4b4b', '#a31515', '#e63946', '#f94144'];

  for (let i = 0; i < 150; i++) {
    confettiPieces.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height - confettiCanvas.height,
      size: (Math.random() * 7) + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: (Math.random() * 3) + 1,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10
    });
  }

  function updateConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confettiPieces.forEach(p => {
      p.y += p.speed;
      p.rotation += p.rotationSpeed;
      if (p.y > confettiCanvas.height) p.y = -10;
      
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    });
    requestAnimationFrame(updateConfetti);
  }
  updateConfetti();

  // Stop confetti after 6 seconds
  setTimeout(() => {
    confettiCanvas.style.display = 'none';
  }, 6000);
}

// SAD FACE RAIN
function showSadFaces() {
  sadFaceContainer.innerHTML = '';
  let count = 0;
  const maxCount = 40;

  function createSadFace() {
    if (count >= maxCount) return;
    count++;

    const face = document.createElement('div');
    face.classList.add('sad-face');
    face.textContent = '😢';
    face.style.left = Math.random() * 100 + 'vw';
    face.style.fontSize = (16 + Math.random() * 20) + 'px';
    face.style.animationDuration = (3 + Math.random() * 3) + 's';

    sadFaceContainer.appendChild(face);

    setTimeout(() => {
      face.remove();
    }, 6000);

    setTimeout(createSadFace, 150);
  }
  createSadFace();
}

// RESPONSIVE CANVAS RESIZE
window.addEventListener('resize', () => {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
});
