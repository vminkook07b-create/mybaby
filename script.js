* {
  box-sizing: border-box;
}

:root {
  --bg-1: #fff5f7;
  --bg-2: #f9e4eb;
  --bg-3: #f1d2db;
  --pink-rose: #e77d97;
  --rose-deep: #9b4d63;
  --rose-soft: #f7ccd7;
  --paper: #f7ebdb;
  --paper-deep: #d9b78b;
  --ink: #542e33;
  --brown: #6a403a;
  --white: #fffafc;
  --shadow: rgba(104, 62, 70, 0.18);
  --shadow-strong: rgba(104, 62, 70, 0.28);
  --gold: #f4d3a4;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Georgia", serif;
  color: var(--ink);
  background:
    radial-gradient(circle at 20% 10%, rgba(255,255,255,0.9), transparent 26%),
    radial-gradient(circle at 80% 28%, rgba(255, 200, 220, 0.55), transparent 22%),
    radial-gradient(circle at 50% 110%, rgba(245, 176, 209, 0.4), transparent 40%),
    linear-gradient(135deg, var(--bg-1), var(--bg-2) 35%, var(--bg-3));
  overflow-x: hidden;
  position: relative;
}

body::before,
body::after {
  content: "";
  position: fixed;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.45;
  pointer-events: none;
  z-index: 0;
}

body::before {
  width: 420px;
  height: 420px;
  background: rgba(255, 177, 205, 0.5);
  top: -80px;
  left: -30px;
}

body::after {
  width: 500px;
  height: 500px;
  background: rgba(255, 222, 232, 0.65);
  right: -100px;
  bottom: -150px;
}

.page-shell {
  position: relative;
  z-index: 1;
  width: min(1200px, calc(100% - 30px));
  margin: 0 auto;
  padding: 36px 0 80px;
}

.hero {
  text-align: center;
  padding: 16px 0 10px;
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 1.1s ease, transform 1.1s ease;
}

body.loaded .hero {
  opacity: 1;
  transform: translateY(0);
}

.intro-line {
  margin: 0 0 10px;
  font-size: clamp(1.1rem, 2vw, 2rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--rose-deep);
  text-transform: uppercase;
}

.hero h1 {
  margin: 0;
  font-size: clamp(2.9rem, 7vw, 6rem);
  letter-spacing: 0.06em;
  color: var(--rose-deep);
  text-shadow:
    0 6px 24px rgba(255,255,255,0.8),
    0 0 22px rgba(255, 160, 196, 0.35);
  font-weight: 700;
}

.tagline {
  margin: 12px 0 0;
  font-size: clamp(1rem, 1.5vw, 1.3rem);
  color: rgba(84, 46, 51, 0.82);
  font-style: italic;
  letter-spacing: 0.04em;
}

main {
  display: block;
}

.letter-section {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.paper-letter {
  position: relative;
  width: min(1000px, 100%);
  background:
    linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0.04)),
    var(--paper);
  border: 3px solid rgba(122, 75, 61, 0.46);
  border-radius: 24px 28px 24px 32px / 24px 30px 20px 28px;
  box-shadow:
    0 26px 50px rgba(120, 70, 82, 0.17),
    inset 0 0 0 1px rgba(255,255,255,0.44);
  padding: 30px 28px 28px;
  transform: rotate(-0.8deg);
  overflow: hidden;
  opacity: 0;
  transform: rotate(-0.8deg) translateY(26px);
  transition: opacity 1.2s ease 0.15s, transform 1.2s ease 0.15s;
}

body.loaded .paper-letter {
  opacity: 1;
  transform: rotate(-0.8deg) translateY(0);
}

.paper-letter::before,
.paper-letter::after {
  content: "";
  position: absolute;
  inset: 12px;
  border: 2px solid rgba(114, 83, 62, 0.2);
  border-radius: 18px;
  pointer-events: none;
}

.paper-letter::after {
  inset: auto 18px 18px auto;
  width: 110px;
  height: 110px;
  background: radial-gradient(circle, rgba(164, 108, 82, 0.18), transparent 60%);
  border: none;
  filter: blur(5px);
}

.letter-title {
  text-align: center;
  font-size: clamp(1.7rem, 2.9vw, 3rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--rose-deep);
  text-shadow: 0 3px 12px rgba(255,255,255,0.5);
  margin: 10px 0 18px;
}

.letter-body {
  max-width: 840px;
  margin: 0 auto;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(1.2rem, 1.8vw, 1.65rem);
  line-height: 1.8;
  letter-spacing: 0.02em;
  color: var(--brown);
  text-align: justify;
}

.letter-body p {
  margin: 0 0 0.8em;
}

.signature {
  margin-top: 18px;
  text-align: right;
  font-weight: 700;
  color: var(--rose-deep);
  font-size: clamp(1.08rem, 1.5vw, 1.5rem);
  font-style: italic;
  letter-spacing: 0.08em;
}

.section-heading {
  margin: 58px 0 20px;
  text-align: center;
  font-size: clamp(1.8rem, 3vw, 3.2rem);
  color: var(--rose-deep);
  letter-spacing: 0.06em;
  text-shadow: 0 3px 18px rgba(255,255,255,0.45);
}

.memory-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: 22px;
}

.polaroid {
  background: rgba(255,255,255,0.60);
  border-radius: 14px;
  padding: 14px 14px 20px;
  box-shadow: 0 18px 35px rgba(96, 60, 66, 0.12);
  transition: transform 0.28s ease, box-shadow 0.28s ease;
  border: 1px solid rgba(255,255,255,0.7);
}

.polaroid:hover {
  transform: translateY(-8px) rotate(0deg) scale(1.02) !important;
  box-shadow: 0 22px 42px rgba(96, 60, 66, 0.18);
}

.tilt-left { transform: rotate(-4deg); }
.tilt-right { transform: rotate(4deg); }

.photo {
  width: 100%;
  aspect-ratio: 1 / 1.2;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  border: 2px solid rgba(113, 75, 73, 0.12);
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 24px rgba(255,255,255,0.26);
}

.photo::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255,255,255,0.18), rgba(0,0,0,0.05));
}

.photo-one {
  background-image: linear-gradient(135deg, rgba(255,255,255,0.18), rgba(0,0,0,0.12)), url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80');
}

.photo-two {
  background-image: linear-gradient(135deg, rgba(255,255,255,0.18), rgba(0,0,0,0.12)), url('https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80');
}

.photo-three {
  background-image: linear-gradient(135deg, rgba(255,255,255,0.18), rgba(0,0,0,0.12)), url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80');
}

.photo-four {
  background-image: linear-gradient(135deg, rgba(255,255,255,0.18), rgba(0,0,0,0.12)), url('https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80');
}

.polaroid figcaption {
  margin-top: 12px;
  text-align: center;
  font-size: 0.92rem;
  font-weight: 700;
  font-style: italic;
  color: var(--brown);
  letter-spacing: 0.04em;
}

.reasons-box {
  max-width: 980px;
  margin: 0 auto;
  background: rgba(255,255,255,0.38);
  border: 2px solid rgba(155, 77, 99, 0.18);
  border-radius: 24px;
  padding: 18px 18px 20px;
  box-shadow: 0 18px 36px rgba(96, 60, 66, 0.08);
  backdrop-filter: blur(5px);
}

.reasons-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(240px, 1fr));
  gap: 12px 20px;
}

.reasons-list li {
  background: rgba(255,255,255,0.30);
  border: 1px solid rgba(155, 77, 99, 0.10);
  border-radius: 14px;
  padding: 12px 14px;
  color: var(--ink);
  font-size: 1.02rem;
  line-height: 1.55;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.2);
}

.reasons-list strong {
  color: var(--rose-deep);
}

.envelope-section {
  margin-top: 55px;
}

.envelope-wrap {
  position: relative;
  width: min(950px, 100%);
  min-height: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.envelope {
  position: relative;
  width: min(700px, 88vw);
  height: 360px;
  background: linear-gradient(135deg, #f9d8d0, #f0b9ae 50%, #eaaea9);
  border: 2px solid rgba(104, 76, 69, 0.2);
  border-radius: 20px;
  box-shadow: 0 24px 40px rgba(112, 74, 72, 0.18);
  overflow: hidden;
  transition: transform 0.6s ease, opacity 0.6s ease, box-shadow 0.6s ease;
  z-index: 1;
}

.envelope:hover {
  transform: translateY(-4px);
  box-shadow: 0 30px 50px rgba(112, 74, 72, 0.22);
}

.envelope::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent 47.5%, rgba(255,255,255,0.18) 47.5% 52.5%, transparent 52.5%);
}

.envelope::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(225deg, transparent 47.5%, rgba(255,255,255,0.16) 47.5% 52.5%, transparent 52.5%);
}

.flap {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #f9d9d3, #e8bba9);
  clip-path: polygon(0 0, 50% 48%, 100% 0);
  border-bottom: 2px solid rgba(104, 76, 69, 0.18);
  transform-origin: top center;
  transition: transform 0.85s ease;
  z-index: 2;
}

.envelope.open .flap {
  transform: rotateX(180deg);
}

.envelope-text {
  position: relative;
  z-index: 3;
  text-align: center;
  color: var(--rose-deep);
  font-weight: 700;
  font-size: clamp(1.1rem, 2vw, 1.8rem);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  line-height: 1.5;
  padding-top: 10px;
}

.envelope-text small {
  display: block;
  margin-top: 10px;
  font-size: 0.66em;
  letter-spacing: 0.14em;
  font-style: italic;
  text-transform: none;
}

.open-button {
  position: absolute;
  bottom: 22px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  background: linear-gradient(135deg, #ef8eaa, #d85d7e);
  border: none;
  border-radius: 999px;
  padding: 14px 26px;
  color: white;
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 12px 26px rgba(184, 103, 124, 0.22);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.open-button:hover {
  transform: translateX(-50%) translateY(-2px);
  box-shadow: 0 16px 30px rgba(184, 103, 124, 0.28);
}

.surprise-card {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transform: scale(0.96) translateY(18px);
  transition: all 0.8s ease;
  z-index: 5;
}

.envelope.open + .surprise-card {
  opacity: 1;
  pointer-events: auto;
  transform: scale(1) translateY(0);
}

.surprise-inner {
  width: min(760px, 88vw);
  background: rgba(255,255,255,0.62);
  backdrop-filter: blur(8px);
  border: 2px solid rgba(155, 77, 99, 0.18);
  border-radius: 22px;
  padding: 22px 18px 18px;
  box-shadow: 0 28px 44px rgba(101, 61, 66, 0.18);
}

.surprise-grid {
  display: grid;
  grid-template-columns: 1.05fr 1.6fr;
  gap: 18px;
  align-items: center;
}

.final-polaroid {
  background: rgba(255,255,255,0.68);
  border-radius: 12px;
  padding: 12px 12px 18px;
  box-shadow: 0 18px 28px rgba(102, 71, 77, 0.12);
  transform: rotate(-3deg);
}

.final-photo {
  width: 100%;
  aspect-ratio: 4 / 5;
  background-image: linear-gradient(135deg, rgba(255,255,255,0.18), rgba(0,0,0,0.1)), url('https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80');
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  border: 2px solid rgba(112, 74, 73, 0.1);
}

.final-polaroid figcaption {
  margin-top: 12px;
  text-align: center;
  color: var(--rose-deep);
  font-weight: 700;
  letter-spacing: 0.04em;
  font-style: italic;
}

.surprise-message {
  color: var(--ink);
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(1.06rem, 1.8vw, 1.45rem);
  line-height: 1.8;
  letter-spacing: 0.03em;
  text-align: justify;
}

.surprise-message p {
  margin: 0 0 0.8em;
}

.love-sign {
  margin-top: 12px;
  text-align: center;
  font-weight: 700;
  color: var(--rose-deep);
  letter-spacing: 0.08em;
  font-size: clamp(1.05rem, 1.5vw, 1.6rem);
  font-style: italic;
}

.floating-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.sparkle,
.heart,
.kiss {
  position: fixed;
  pointer-events: none;
  z-index: 0;
  animation: drift linear infinite;
  opacity: 0.9;
}

.sparkle {
  width: 10px;
  height: 10px;
  background: radial-gradient(circle, rgba(255,255,255,0.8), rgba(255,200,218,0.85) 40%, transparent 70%);
  border-radius: 50%;
  box-shadow: 0 0 12px rgba(255,255,255,0.7);
}

.heart, .kiss {
  font-size: 18px;
  transform: translateY(0);
}

.heart { color: rgba(255, 111, 144, 0.88); }
.kiss { color: rgba(248, 155, 183, 0.9); }

@keyframes drift {
  0% {
    transform: translateY(100vh) scale(0.75) rotate(0deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  100% {
    transform: translateY(-15vh) scale(1.15) rotate(24deg);
    opacity: 0;
  }
}

@media (max-width: 860px) {
  .memory-grid {
    grid-template-columns: repeat(2, minmax(180px, 1fr));
  }

  .reasons-list {
    grid-template-columns: 1fr;
  }

  .surprise-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .page-shell {
    width: min(100% - 16px, 1200px);
  }

  .paper-letter {
    padding: 20px 16px 18px;
  }

  .letter-body {
    font-size: 1.08rem;
  }

  .memory-grid {
    grid-template-columns: 1fr;
  }

  .envelope {
    height: 300px;
  }
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 143, 188, 0.8);
  border-radius: 999px;
}

::-webkit-scrollbar-track {
  background: rgba(255,255,255,0.22);
}
