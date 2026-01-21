const initialData = [
   { città: "L'Aquila", regione: "Abruzzo" },
    { città: "Chieti", regione: "Abruzzo" },
    { città: "Pescara", regione: "Abruzzo" },
    { città: "Teramo", regione: "Abruzzo" },
    { città: "Potenza", regione: "Basilicata" },
    { città: "Matera", regione: "Basilicata" },
    { città: "Catanzaro", regione: "Calabria" },
    { città: "Cosenza", regione: "Calabria" },
    { città: "Crotone", regione: "Calabria" },
    { città: "Reggio Calabria", regione: "Calabria" },
    { città: "Vibo Valentia", regione: "Calabria" },
    { città: "Napoli", regione: "Campania" },
    { città: "Avellino", regione: "Campania" },
    { città: "Benevento", regione: "Campania" },
    { città: "Caserta", regione: "Campania" },
    { città: "Salerno", regione: "Campania" },
    { città: "Bologna", regione: "Emilia-Romagna" },
    { città: "Ferrara", regione: "Emilia-Romagna" },
    { città: "Forlì", regione: "Emilia-Romagna" },
    { città: "Cesena", regione: "Emilia-Romagna" },
    { città: "Modena", regione: "Emilia-Romagna" },
    { città: "Parma", regione: "Emilia-Romagna" },
    { città: "Piacenza", regione: "Emilia-Romagna" },
    { città: "Ravenna", regione: "Emilia-Romagna" },
    { città: "Reggio Emilia", regione: "Emilia-Romagna" },
    { città: "Rimini", regione: "Emilia-Romagna" },
    { città: "Trieste", regione: "Friuli-Venezia Giulia" },
    { città: "Gorizia", regione: "Friuli-Venezia Giulia" },
    { città: "Pordenone", regione: "Friuli-Venezia Giulia" },
    { città: "Udine", regione: "Friuli-Venezia Giulia" },
    { città: "Roma", regione: "Lazio" },
    { città: "Frosinone", regione: "Lazio" },
    { città: "Latina", regione: "Lazio" },
    { città: "Rieti", regione: "Lazio" },
    { città: "Viterbo", regione: "Lazio" },
    { città: "Genova", regione: "Liguria" },
    { città: "Imperia", regione: "Liguria" },
    { città: "La Spezia", regione: "Liguria" },
    { città: "Savona", regione: "Liguria" },
    { città: "Milano", regione: "Lombardia" },
    { città: "Bergamo", regione: "Lombardia" },
    { città: "Brescia", regione: "Lombardia" },
    { città: "Como", regione: "Lombardia" },
    { città: "Cremona", regione: "Lombardia" },
    { città: "Lecco", regione: "Lombardia" },
    { città: "Lodi", regione: "Lombardia" },
    { città: "Mantova", regione: "Lombardia" },
    { città: "Monza", regione: "Lombardia" },
    { città: "Pavia", regione: "Lombardia" },
    { città: "Sondrio", regione: "Lombardia" },
    { città: "Varese", regione: "Lombardia" },
    { città: "Ancona", regione: "Marche" },
    { città: "Ascoli Piceno", regione: "Marche" },
    { città: "Fermo", regione: "Marche" },
    { città: "Macerata", regione: "Marche" },
    { città: "Pesaro", regione: "Marche" },
    { città: "Urbino", regione: "Marche" },
    { città: "Campobasso", regione: "Molise" },
    { città: "Isernia", regione: "Molise" },
    { città: "Torino", regione: "Piemonte" },
    { città: "Alessandria", regione: "Piemonte" },
    { città: "Asti", regione: "Piemonte" },
    { città: "Biella", regione: "Piemonte" },
    { città: "Cuneo", regione: "Piemonte" },
    { città: "Novara", regione: "Piemonte" },
    { città: "Verbania", regione: "Piemonte" },
    { città: "Vercelli", regione: "Piemonte" },
    { città: "Bari", regione: "Puglia" },
    { città: "Andria", regione: "Puglia" },
    { città: "Barletta", regione: "Puglia" },
    { città: "Trani", regione: "Puglia" },
    { città: "Brindisi", regione: "Puglia" },
    { città: "Foggia", regione: "Puglia" },
    { città: "Lecce", regione: "Puglia" },
    { città: "Taranto", regione: "Puglia" },
    { città: "Cagliari", regione: "Sardegna" },
    { città: "Carbonia", regione: "Sardegna" },
    { città: "Iglesias", regione: "Sardegna" },
    { città: "Nuoro", regione: "Sardegna" },
    { città: "Oristano", regione: "Sardegna" },
    { città: "Sassari", regione: "Sardegna" },
    { città: "Palermo", regione: "Sicilia" },
    { città: "Agrigento", regione: "Sicilia" },
    { città: "Caltanissetta", regione: "Sicilia" },
    { città: "Catania", regione: "Sicilia" },
    { città: "Enna", regione: "Sicilia" },
    { città: "Messina", regione: "Sicilia" },
    { città: "Ragusa", regione: "Sicilia" },
    { città: "Siracusa", regione: "Sicilia" },
    { città: "Trapani", regione: "Sicilia" },
    { città: "Firenze", regione: "Toscana" },
    { città: "Arezzo", regione: "Toscana" },
    { città: "Grosseto", regione: "Toscana" },
    { città: "Livorno", regione: "Toscana" },
    { città: "Lucca", regione: "Toscana" },
    { città: "Massa", regione: "Toscana" },
    { città: "Carrara", regione: "Toscana" },
    { città: "Pisa", regione: "Toscana" },
    { città: "Pistoia", regione: "Toscana" },
    { città: "Prato", regione: "Toscana" },
    { città: "Siena", regione: "Toscana" },
    { città: "Trento", regione: "Trentino-Alto Adige" },
    { città: "Bolzano", regione: "Trentino-Alto Adige" },
    { città: "Perugia", regione: "Umbria" },
    { città: "Terni", regione: "Umbria" },
    { città: "Aosta", regione: "Valle d'Aosta" },
    { città: "Venezia", regione: "Veneto" },
    { città: "Belluno", regione: "Veneto" },
    { città: "Padova", regione: "Veneto" },
    { città: "Rovigo", regione: "Veneto" },
    { città: "Treviso", regione: "Veneto" },
    { città: "Verona", regione: "Veneto" },
    { città: "Vicenza", regione: "Veneto" }
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

// --- MODIFICA FONDAMENTALE QUI ---
function spawnGateRow() {
    // Calcoliamo quante righe sono attive ma NON ancora colpite.
    // Questo ci dice quale città della coda dobbiamo prendere.
    const activeRows = activeGates.filter(g => !g.hit).length;
    
    // Se stiamo cercando di spawnare più righe di quante città rimangono, fermiamoci
    if (activeRows >= gameQueue.length) return;

    const rowEl = document.createElement('div');
    rowEl.className = 'gate-row';
    container.appendChild(rowEl);
    
    // Invece di gameQueue[0], prendiamo la città in base all'offset
    const targetForThisRow = gameQueue[activeRows]; 
    
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
    // Importante: salviamo targetRegione dentro l'oggetto, così non dipende più dalla coda globale
    activeGates.push({ el: rowEl, progress: 0, gates: gates, targetRegione: targetForThisRow.regione });
}
// --- FINE MODIFICA ---

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