const initialData = 

[
  { città: "Agrigento", regione: "Sicilia" },
  { città: "Alessandria", regione: "Piemonte" },
  { città: "Ancona", regione: "Marche" },
  { città: "Aosta", regione: "Valle d'Aosta" },
  { città: "Arezzo", regione: "Toscana" },
  { città: "Ascoli Piceno", regione: "Marche" },
  { città: "Asti", regione: "Piemonte" },
  { città: "Avellino", regione: "Campania" },
  { città: "Bari", regione: "Puglia" },
  { città: "Barletta-Andria-Trani", regione: "Puglia" },
  { città: "Belluno", regione: "Veneto" },
  { città: "Benevento", regione: "Campania" },
  { città: "Bergamo", regione: "Lombardia" },
  { città: "Biella", regione: "Piemonte" },
  { città: "Bologna", regione: "Emilia-Romagna" },
  { città: "Bolzano", regione: "Trentino-Alto Adige" },
  { città: "Brescia", regione: "Lombardia" },
  { città: "Brindisi", regione: "Puglia" },
  { città: "Cagliari", regione: "Sardegna" },
  { città: "Caltanissetta", regione: "Sicilia" },
  { città: "Campobasso", regione: "Molise" },
  { città: "Caserta", regione: "Campania" },
  { città: "Catania", regione: "Sicilia" },
  { città: "Catanzaro", regione: "Calabria" },
  { città: "Chieti", regione: "Abruzzo" },
  { città: "Como", regione: "Lombardia" },
  { città: "Cosenza", regione: "Calabria" },
  { città: "Cremona", regione: "Lombardia" },
  { città: "Crotone", regione: "Calabria" },
  { città: "Cuneo", regione: "Piemonte" },
  { città: "Enna", regione: "Sicilia" },
  { città: "Fermo", regione: "Marche" },
  { città: "Ferrara", regione: "Emilia-Romagna" },
  { città: "Firenze", regione: "Toscana" },
  { città: "Foggia", regione: "Puglia" },
  { città: "Forlì-Cesena", regione: "Emilia-Romagna" },
  { città: "Frosinone", regione: "Lazio" },
  { città: "Genova", regione: "Liguria" },
  { città: "Gorizia", regione: "Friuli-Venezia Giulia" },
  { città: "Grosseto", regione: "Toscana" },
  { città: "Imperia", regione: "Liguria" },
  { città: "Isernia", regione: "Molise" },
  { città: "La Spezia", regione: "Liguria" },
  { città: "L'Aquila", regione: "Abruzzo" },
  { città: "Latina", regione: "Lazio" },
  { città: "Lecce", regione: "Puglia" },
  { città: "Lecco", regione: "Lombardia" },
  { città: "Livorno", regione: "Toscana" },
  { città: "Lodi", regione: "Lombardia" },
  { città: "Lucca", regione: "Toscana" },
  { città: "Macerata", regione: "Marche" },
  { città: "Mantova", regione: "Lombardia" },
  { città: "Massa-Carrara", regione: "Toscana" },
  { città: "Matera", regione: "Basilicata" },
  { città: "Messina", regione: "Sicilia" },
  { città: "Milano", regione: "Lombardia" },
  { città: "Modena", regione: "Emilia-Romagna" },
  { città: "Monza e della Brianza", regione: "Lombardia" },
  { città: "Napoli", regione: "Campania" },
  { città: "Novara", regione: "Piemonte" },
  { città: "Nuoro", regione: "Sardegna" },
  { città: "Oristano", regione: "Sardegna" },
  { città: "Padova", regione: "Veneto" },
  { città: "Palermo", regione: "Sicilia" },
  { città: "Parma", regione: "Emilia-Romagna" },
  { città: "Pavia", regione: "Lombardia" },
  { città: "Perugia", regione: "Umbria" },
  { città: "Pesaro e Urbino", regione: "Marche" },
  { città: "Pescara", regione: "Abruzzo" },
  { città: "Piacenza", regione: "Emilia-Romagna" },
  { città: "Pisa", regione: "Toscana" },
  { città: "Pistoia", regione: "Toscana" },
  { città: "Pordenone", regione: "Friuli-Venezia Giulia" },
  { città: "Potenza", regione: "Basilicata" },
  { città: "Prato", regione: "Toscana" },
  { città: "Ragusa", regione: "Sicilia" },
  { città: "Ravenna", regione: "Emilia-Romagna" },
  { città: "Reggio Calabria", regione: "Calabria" },
  { città: "Reggio Emilia", regione: "Emilia-Romagna" },
  { città: "Rieti", regione: "Lazio" },
  { città: "Rimini", regione: "Emilia-Romagna" },
  { città: "Roma", regione: "Lazio" },
  { città: "Rovigo", regione: "Veneto" },
  { città: "Salerno", regione: "Campania" },
  { città: "Sassari", regione: "Sardegna" },
  { città: "Savona", regione: "Liguria" },
  { città: "Siena", regione: "Toscana" },
  { città: "Siracusa", regione: "Sicilia" },
  { città: "Sondrio", regione: "Lombardia" },
  { città: "Sud Sardegna", regione: "Sardegna" },
  { città: "Taranto", regione: "Puglia" },
  { città: "Teramo", regione: "Abruzzo" },
  { città: "Terni", regione: "Umbria" },
  { città: "Torino", regione: "Piemonte" },
  { città: "Trapani", regione: "Sicilia" },
  { città: "Trento", regione: "Trentino-Alto Adige" },
  { città: "Treviso", regione: "Veneto" },
  { città: "Trieste", regione: "Friuli-Venezia Giulia" },
  { città: "Udine", regione: "Friuli-Venezia Giulia" },
  { città: "Varese", regione: "Lombardia" },
  { città: "Venezia", regione: "Veneto" },
  { città: "Verbano-Cusio-Ossola", regione: "Piemonte" },
  { città: "Vercelli", regione: "Piemonte" },
  { città: "Verona", regione: "Veneto" },
  { città: "Vibo Valentia", regione: "Calabria" },
  { città: "Vicenza", regione: "Veneto" },
  { città: "Viterbo", regione: "Lazio" }
];






let gameActive = false;
let score = 0;
let lives = 3;
let gameQueue = [];
let playerLane = 1; 
let activeGates = [];
let frameCount = 0;
let isTurbo = false; 
let lastTime = 0;

const SPAWN_INTERVAL = 400; 
const NORMAL_SPEED = 0.0018; 
const TURBO_SPEED = 0.01; 

const container = document.getElementById('entities-container');
const player = document.getElementById('player');
const targetCityTitle = document.getElementById('target-city');
const scoreDisplay = document.getElementById('score-display');
const livesDisplay = document.getElementById('lives-display');
const feedbackPop = document.getElementById('feedback-pop');

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playNote(freq, dur, type = 'sine') {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + dur);
    osc.start(); osc.stop(audioCtx.currentTime + dur);
}

function playTurboSound() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.connect(gain); gain.connect(audioCtx.destination);
    const now = audioCtx.currentTime;
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.3);
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.linearRampToValueAtTime(0, now + 0.3);
    osc.start(); osc.stop(now + 0.3);
}

// NUOVA FUNZIONE PER TESTO A SCHERMO
function showPopupFeedback(text, color) {
    feedbackPop.textContent = text;
    feedbackPop.style.color = color;
    feedbackPop.classList.remove('hidden', 'animate-pop');
    void feedbackPop.offsetWidth; // Trigger reflow per riavviare animazione
    feedbackPop.classList.add('animate-pop');
}

function startGame() {
    document.querySelectorAll('.overlay').forEach(el => el.classList.add('hidden'));
    gameActive = true;
    score = 0; lives = 3; playerLane = 1;
    isTurbo = false; frameCount = 0;
    activeGates.forEach(g => g.el.remove());
    activeGates = [];
    gameQueue = [...initialData].sort(() => Math.random() - 0.5);
    updatePlayerPos();
    updateUI();
    targetCityTitle.textContent = gameQueue[0].città.toUpperCase();
    spawnGateRow();
    lastTime = performance.now();
    requestAnimationFrame(gameLoop);
}

function updateUI() {
    scoreDisplay.textContent = `Città: ${score}`;
    livesDisplay.textContent = "❤️".repeat(lives);
}

// Input Touch
let touchStartY = 0;
let touchStartX = 0;
window.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}, {passive: false});

window.addEventListener('touchend', e => {
    if (!gameActive) return;
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    if (touchStartY - endY > 60) {
        if (!isTurbo) { isTurbo = true; playTurboSound(); }
    } else {
        if (endX < window.innerWidth / 2) moveLeft(); else moveRight();
    }
});

// Input Tastiera
window.addEventListener('keydown', e => {
    if (!gameActive) return;
    if (e.key === "ArrowLeft") moveLeft();
    if (e.key === "ArrowRight") moveRight();
    if (e.key === "ArrowUp") { if (!isTurbo) { isTurbo = true; playTurboSound(); } }
});

function moveLeft() { if (playerLane > 0) { playerLane--; updatePlayerPos(); } }
function moveRight() { if (playerLane < 2) { playerLane++; updatePlayerPos(); } }
function updatePlayerPos() { player.className = `lane-${playerLane}`; }

function spawnGateRow() {
    if (gameQueue.length === 0) return;
    const rowEl = document.createElement('div');
    rowEl.className = 'gate-row';
    container.appendChild(rowEl);
    const targetForThisRow = gameQueue[0]; 
    const regions = [targetForThisRow.regione];
    while (regions.length < 3) {
        let r = initialData[Math.floor(Math.random() * initialData.length)].regione;
        if (!regions.includes(r)) regions.push(r);
    }
    regions.sort(() => Math.random() - 0.5);
    const gates = regions.map((reg) => {
        const div = document.createElement('div');
        div.className = 'gate';
        div.textContent = reg;
        rowEl.appendChild(div);
        return { name: reg, correct: reg === targetForThisRow.regione };
    });
    activeGates.push({ el: rowEl, progress: 0, gates: gates, targetRegione: targetForThisRow.regione });
}

function gameLoop(currentTime) {
    if (!gameActive) return;
    const deltaTime = (currentTime - lastTime) / 16.67;
    lastTime = currentTime;
    const dt = Math.min(deltaTime, 2);
    frameCount += dt;
    if (frameCount >= SPAWN_INTERVAL) {
        spawnGateRow();
        frameCount = 0;
    }
    const currentSpeed = isTurbo ? TURBO_SPEED : NORMAL_SPEED;
    for (let i = activeGates.length - 1; i >= 0; i--) {
        let g = activeGates[i];
        g.progress += currentSpeed * dt;
        const y = 15 + (g.progress * 85);
        const scale = 0.02 + (g.progress * 1.2);
        g.el.style.top = y + "%";
        g.el.style.transform = `scale(${scale})`;
        g.el.style.opacity = g.progress * 5; 
        if (g.progress >= 0.81 && !g.hit) {
            g.hit = true;
            isTurbo = false; 
            checkCollision(g);
        }
        if (g.progress > 1.2) {
            g.el.remove();
            activeGates.splice(i, 1);
        }
    }
    requestAnimationFrame(gameLoop);
}

function checkCollision(group) {
    const playerSelection = group.gates[playerLane];
    const gateEls = group.el.querySelectorAll('.gate');

    if (playerSelection.name === group.targetRegione) {
        score++;
        playNote(600, 0.1, 'sine');
        showPopupFeedback("ESATTO", "#4CAF50"); // Testo Verde
        gateEls[playerLane].classList.add('correct-flash');
        gameQueue.shift();
        if (gameQueue.length > 0) {
            targetCityTitle.textContent = gameQueue[0].città.toUpperCase();
        } else {
            gameActive = false;
            document.getElementById('overlay-win').classList.remove('hidden');
        }
    } else {
        lives--;
        playNote(150, 0.3, 'sawtooth');
        showPopupFeedback("NOO!", "#F44336"); // Testo Rosso
        gateEls[playerLane].classList.add('wrong-flash');
        const failed = gameQueue.shift();
        gameQueue.push(failed);
        targetCityTitle.textContent = gameQueue[0].città.toUpperCase();
        if (lives <= 0) {
            gameActive = false;
            document.getElementById('overlay-over').classList.remove('hidden');
        }
    }
    updateUI();
}