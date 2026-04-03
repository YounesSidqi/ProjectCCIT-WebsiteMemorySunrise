// Toggle class active
const navbarNav = document.querySelector
('.navbar-nav');
// ketika hamberger menu di klik
document.querySelector('#hamburger-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};

// klok diluar slidebar untuk menghilangkan nav

const hamburger = document.querySelector
('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});


let timer;
let isRunning = false;
let timeLeft = 25 * 60; // Default 25 menit
let currentMode = 'kerja';

const display = document.getElementById('timer-digits');
const startBtn = document.getElementById('btn-start');
const label = document.getElementById('timer-label');

function updateDisplay() {
    let min = Math.floor(timeLeft / 60);
    let sec = timeLeft % 60;
    display.textContent = `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

function toggleTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        startBtn.textContent = "Lanjut";
    } else {
        isRunning = true;
        startBtn.textContent = "Jeda";
        timer = setInterval(() => {
            timeLeft--;
            updateDisplay();
            if (timeLeft <= 0) {
                clearInterval(timer);
                alert("Waktu habis!");
                resetTimer();
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    startBtn.textContent = "Mulai";
    // Balikin waktu sesuai mode terakhir
    if (currentMode === 'kerja') timeLeft = 25 * 60;
    else if (currentMode === 'singkat') timeLeft = 5 * 60;
    else timeLeft = 15 * 60;
    updateDisplay();
}

function changeMode(mode, minutes) {
    currentMode = mode;
    timeLeft = minutes * 60;
    isRunning = false;
    clearInterval(timer);
    
    // Update label
    if(mode === 'kerja') label.textContent = "Fokus dulu, yuk!";
    else label.textContent = "Istirahat sejenak...";

    // Update UI tombol tab
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    startBtn.textContent = "Mulai";
    updateDisplay();
}

// Inisialisasi awal
updateDisplay();

// const audio = new Audio('audio/lofi.mp3');
// audio.loop = true;
// audio.volume = 0.2;

// // Fungsi ini bakal terus mencoba play setiap kali ada pergerakan
// const autoPlayVibe = () => {
//     audio.play().then(() => {
//         // Jika berhasil, hapus semua pancingan agar tidak berat
//         window.removeEventListener('mousemove', autoPlayVibe);
//         window.removeEventListener('scroll', autoPlayVibe);
//         window.removeEventListener('keydown', autoPlayVibe);
//     }).catch(() => {
//         // Gagal karena browser blokir, diamkan saja sampai user gerak lagi
//     });
// };

// Pasang di event yang pasti kejadian pas web kebuka
window.addEventListener('mousemove', autoPlayVibe);
window.addEventListener('scroll', autoPlayVibe);
window.addEventListener('keydown', autoPlayVibe);