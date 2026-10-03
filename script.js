const promises = [
  'I promise to love you with all my heart, every single day',
  'I promise to be there for you through every high and low',
  'I promise to make you smile even on your worst days',
  'I promise to listen to you without judgment',
  'I promise to support your dreams and goals',
  'I promise to be honest with you always',
  'I promise to give you my best, not my leftover',
  'I promise to cuddle you when you need it',
  'I promise to never take you for granted',
  'I promise to love you even when you\'re difficult'
];

const promisesList = document.getElementById('promisesList');
if (promisesList) {
  promises.forEach((promise, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${promise}</span><div class="promise-checkbox">✓</div>`;
    li.addEventListener('click', function() {
      this.classList.toggle('completed');
    });
    promisesList.appendChild(li);
  });
}

// Tic Tac Toe Game
let tictacBoard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;
const boardElement = document.getElementById('tictacBoard');

function initTicTac() {
  boardElement.innerHTML = '';
  tictacBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameOver = false;
  
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.className = 'tictac-cell';
    cell.addEventListener('click', () => makeMove(i, cell));
    boardElement.appendChild(cell);
  }
}

function makeMove(index, cell) {
  if (tictacBoard[index] === '' && !gameOver) {
    tictacBoard[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer.toLowerCase());
    
    if (checkWinner()) {
      gameOver = true;
      setTimeout(() => alert('You won! 🎉 I love you so much!'), 500);
      return;
    }
    
    if (tictacBoard.every(cell => cell !== '')) {
      gameOver = true;
      setTimeout(() => alert('It\'s a draw! Still love you 💕'), 500);
      return;
    }
    
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    
    if (currentPlayer === 'O' && !gameOver) {
      setTimeout(aiMove, 600);
    }
  }
}

function checkWinner() {
  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  return winCombos.some(combo => {
    return tictacBoard[combo[0]] === currentPlayer &&
           tictacBoard[combo[1]] === currentPlayer &&
           tictacBoard[combo[2]] === currentPlayer;
  });
}

function aiMove() {
  const emptyCells = tictacBoard
    .map((cell, index) => cell === '' ? index : null)
    .filter(val => val !== null);
  
  if (emptyCells.length === 0) return;
  
  const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  const cells = boardElement.querySelectorAll('.tictac-cell');
  makeMove(randomIndex, cells[randomIndex]);
}

function resetTicTac() {
  initTicTac();
}

initTicTac();

// Heart Fill Animation
let heartFilled = false;

function fillHeart() {
  if (heartFilled) return;
  
  heartFilled = true;
  const heartPath = document.querySelector('.heart-path');
  const heartMessage = document.getElementById('heartMessage');
  
  heartPath.classList.add('filling');
  
  const messages = [
    'I love you forever 💕',
    'You complete me 💗',
    'My heart is all yours ❤️',
    'You are my everything 💖',
    'Forever and always 💝'
  ];
  
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  heartMessage.textContent = randomMessage;
  
  // Create floating hearts
  for (let i = 0; i < 15; i++) {
    setTimeout(() => createFloatingHeart(), i * 100);
  }
}

function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.textContent = '💕';
  heart.style.position = 'fixed';
  heart.style.pointerEvents = 'none';
  heart.style.fontSize = '2rem';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.top = window.innerHeight + 'px';
  heart.style.zIndex = '999';
  heart.style.animation = 'heartFloat 3s ease-out forwards';
  document.body.appendChild(heart);
  
  setTimeout(() => heart.remove(), 3000);
}

const style = document.createElement('style');
style.innerHTML = `
  @keyframes heartFloat {
    0% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateY(-80vh) scale(0.5);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

function scrollToNextSection() {
  const sections = document.querySelectorAll('section');
  const currentScroll = window.scrollY;
  
  for (let section of sections) {
    const sectionTop = section.offsetTop;
    if (sectionTop > currentScroll + 100) {
      section.scrollIntoView({ behavior: 'smooth' });
      return;
    }
  }
}

const audio = document.getElementById('bgMusic');
let currentTrackIndex = 0;

const playlist = [
  { title: 'Baby Now That I Found You', src: 'music/track-1.mp3' },
  { title: 'Perfect', src: 'music/track-2.mp3' },
  { title: 'Can\'t Help Falling in Love', src: 'music/track-3.mp3' },
  { title: 'We Fell in Love in October', src: 'music/track-4.mp3' },
  { title: 'Enchanted', src: 'music/track-5.mp3' }
];

function setTrack(index) {
  currentTrackIndex = index;
  if (!audio) return;
  audio.src = playlist[index].src;
  audio.load();
  audio.play().catch(() => {});
}

function nextTrack() {
  const nextIndex = (currentTrackIndex + 1) % playlist.length;
  setTrack(nextIndex);
}

function playPlaylist() {
  if (!playlist.length || !audio) return;
  setTrack(0);
}

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  if (audio) {
    audio.volume = 0.45;
  }
});

document.addEventListener('click', playPlaylist, { once: true });

if (audio) {
  audio.addEventListener('ended', nextTrack);
}

const floatingLayer = document.querySelector('.floating-layer');

function createFloatingElement(type) {
  const element = document.createElement('div');
  element.className = type === 'star' ? 'sparkle' : type === 'heart' ? 'heart' : 'kiss';
  element.textContent = type === 'star' ? '' : type === 'heart' ? '❤' : '💋';

  const left = Math.random() * window.innerWidth;
  const duration = 8 + Math.random() * 8;

  element.style.left = `${left}px`;
  element.style.animationDuration = `${duration}s`;

  if (type === 'star') {
    const s = 8 + Math.random() * 10;
    element.style.width = `${s}px`;
    element.style.height = `${s}px`;
  } else {
    element.style.fontSize = `${14 + Math.random() * 14}px`;
  }

  if (floatingLayer) floatingLayer.appendChild(element);

  setTimeout(() => element.remove(), duration * 1000 + 200);
}

setInterval(() => {
  const roll = Math.random();
  if (roll < 0.45) createFloatingElement('star');
  else if (roll < 0.8) createFloatingElement('heart');
  else createFloatingElement('kiss');
}, 650);
