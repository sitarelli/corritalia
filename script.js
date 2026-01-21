const initialData = [
   { città: "✪ L'Aquila", regione: "Abruzzo" }, { città: "Chieti", regione: "Abruzzo" }, { città: "Pescara", regione: "Abruzzo" }, { città: "Teramo", regione: "Abruzzo" },
   { città: "✪ Potenza", regione: "Basilicata" }, { città: "Matera", regione: "Basilicata" },
   { città: "✪ Catanzaro", regione: "Calabria" }, { città: "Cosenza", regione: "Calabria" }, { città: "Crotone", regione: "Calabria" }, { città: "Reggio Calabria", regione: "Calabria" }, { città: "Vibo Valentia", regione: "Calabria" },
   { città: "✪ Napoli", regione: "Campania" }, { città: "Avellino", regione: "Campania" }, { città: "Benevento", regione: "Campania" }, { città: "Caserta", regione: "Campania" }, { città: "Salerno", regione: "Campania" },
   { città: "✪ Bologna", regione: "Emilia-Romagna" }, { città: "Ferrara", regione: "Emilia-Romagna" }, { città: "Forlì", regione: "Emilia-Romagna" }, { città: "Cesena", regione: "Emilia-Romagna" }, { città: "Modena", regione: "Emilia-Romagna" }, { città: "Parma", regione: "Emilia-Romagna" }, { città: "Piacenza", regione: "Emilia-Romagna" }, { città: "Ravenna", regione: "Emilia-Romagna" }, { città: "Reggio Emilia", regione: "Emilia-Romagna" }, { città: "Rimini", regione: "Emilia-Romagna" },
   { città: "✪ Trieste", regione: "Friuli-Venezia Giulia" }, { città: "Gorizia", regione: "Friuli-Venezia Giulia" }, { città: "Pordenone", regione: "Friuli-Venezia Giulia" }, { città: "Udine", regione: "Friuli-Venezia Giulia" },
   { città: "✪ Roma ✪", regione: "Lazio" }, { città: "Frosinone", regione: "Lazio" }, { città: "Latina", regione: "Lazio" }, { città: "Rieti", regione: "Lazio" }, { città: "Viterbo", regione: "Lazio" },
   { città: "✪ Genova", regione: "Liguria" }, { città: "Imperia", regione: "Liguria" }, { città: "La Spezia", regione: "Liguria" }, { città: "Savona", regione: "Liguria" },
   { città: "✪ Milano", regione: "Lombardia" }, { città: "Bergamo", regione: "Lombardia" }, { città: "Brescia", regione: "Lombardia" }, { città: "Como", regione: "Lombardia" }, { città: "Cremona", regione: "Lombardia" }, { città: "Lecco", regione: "Lombardia" }, { città: "Lodi", regione: "Lombardia" }, { città: "Mantova", regione: "Lombardia" }, { città: "Monza", regione: "Lombardia" }, { città: "Pavia", regione: "Lombardia" }, { città: "Sondrio", regione: "Lombardia" }, { città: "Varese", regione: "Lombardia" },
   { città: "✪ Ancona", regione: "Marche" }, { città: "Ascoli Piceno", regione: "Marche" }, { città: "Fermo", regione: "Marche" }, { città: "Macerata", regione: "Marche" }, { città: "Pesaro", regione: "Marche" }, { città: "Urbino", regione: "Marche" },
   { città: "✪ Campobasso", regione: "Molise" }, { città: "Isernia", regione: "Molise" },
   { città: "✪ Torino", regione: "Piemonte" }, { città: "Alessandria", regione: "Piemonte" }, { città: "Asti", regione: "Piemonte" }, { città: "Biella", regione: "Piemonte" }, { città: "Cuneo", regione: "Piemonte" }, { città: "Novara", regione: "Piemonte" }, { città: "Verbania", regione: "Piemonte" }, { città: "Vercelli", regione: "Piemonte" },
   { città: "✪ Bari", regione: "Puglia" }, { città: "Andria", regione: "Puglia" }, { città: "Barletta", regione: "Puglia" }, { città: "Trani", regione: "Puglia" }, { città: "Brindisi", regione: "Puglia" }, { città: "Foggia", regione: "Puglia" }, { città: "Lecce", regione: "Puglia" }, { città: "Taranto", regione: "Puglia" },
   { città: "✪ Cagliari", regione: "Sardegna" }, { città: "Carbonia", regione: "Sardegna" }, { città: "Iglesias", regione: "Sardegna" }, { città: "Nuoro", regione: "Sardegna" }, { città: "Oristano", regione: "Sardegna" }, { città: "Sassari", regione: "Sardegna" },
   { città: "✪ Palermo", regione: "Sicilia" }, { città: "Agrigento", regione: "Sicilia" }, { città: "Caltanissetta", regione: "Sicilia" }, { città: "Catania", regione: "Sicilia" }, { città: "Enna", regione: "Sicilia" }, { città: "Messina", regione: "Sicilia" }, { città: "Ragusa", regione: "Sicilia" }, { città: "Siracusa", regione: "Sicilia" }, { città: "Trapani", regione: "Sicilia" },
   { città: "✪ Firenze", regione: "Toscana" }, { città: "Arezzo", regione: "Toscana" }, { città: "Grosseto", regione: "Toscana" }, { città: "Livorno", regione: "Toscana" }, { città: "Lucca", regione: "Toscana" }, { città: "Massa", regione: "Toscana" }, { città: "Carrara", regione: "Toscana" }, { città: "Pisa", regione: "Toscana" }, { città: "Pistoia", regione: "Toscana" }, { città: "Prato", regione: "Toscana" }, { città: "Siena", regione: "Toscana" },
   { città: "✪ Trento", regione: "Trentino-Alto Adige" }, { città: "Bolzano", regione: "Trentino-Alto Adige" },
   { città: "✪ Perugia", regione: "Umbria" }, { città: "Terni", regione: "Umbria" },
   { città: "✪ Aosta", regione: "Valle d'Aosta" },
   { città: "✪ Venezia", regione: "Veneto" }, { città: "Belluno", regione: "Veneto" }, { città: "Padova", regione: "Veneto" }, { città: "Rovigo", regione: "Veneto" }, { città: "Treviso", regione: "Veneto" }, { città: "Verona", regione: "Veneto" }, { città: "Vicenza", regione: "Veneto" }
];

// --- STATO DEL GIOCO ---
let gameActive = false;
let currentMode = 'classic'; // 'classic' o 'regional'
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
const EXIT_SPEED = 0.025; 

// --- ELEMENTI DOM ---
const container = document.getElementById('entities-container');
const player = document.getElementById('player');
const targetDisplay = document.getElementById('target-display');
const missionLabel = document.getElementById('mission-label');
const scoreDisplay = document.getElementById('score-display');
const livesDisplay = document.getElementById('lives-display');
const feedbackPop = document.getElementById('feedback-pop');

// --- SETUP AUDIO ---
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function unlockAudio() { if (audioCtx.state === 'suspended') audioCtx.resume(); }

function playNote(freq, dur, type = 'sine') {
    unlockAudio();
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
    unlockAudio();
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

function showPopupFeedback(text, color) {
    feedbackPop.textContent = text;
    feedbackPop.style.color = color;
    feedbackPop.classList.remove('hidden', 'animate-pop');
    void feedbackPop.offsetWidth; 
    feedbackPop.classList.add('animate-pop');
}

// --- GESTIONE MENU E MODALITÀ ---
function selectMode(mode) {
    currentMode = mode;
    document.getElementById('overlay-menu').classList.add('hidden');
    
    // Configura i testi dell'overlay Start in base alla modalità
    const startTitle = document.getElementById('start-title');
    const startInstr = document.getElementById('start-instructions');
    
    if (mode === 'classic') {
        startTitle.textContent = "Giro d'Italia Classico";
        startInstr.innerHTML = "Apparirà il nome di una <b>CITTÀ</b>.<br>Guida verso la sua <b>REGIONE</b>.";
    } else {
        startTitle.textContent = "Modalità Esploratore";
        startInstr.innerHTML = "Apparirà una <b>REGIONE</b>.<br>Raccogli tutte le sue <b>CITTÀ</b>.";
    }
    
    document.getElementById('overlay-start').classList.remove('hidden');
}

function returnToMenu() {
    gameActive = false;
    document.querySelectorAll('.overlay').forEach(el => el.classList.add('hidden'));
    document.getElementById('overlay-menu').classList.remove('hidden');
    // Pulisce lo schermo
    activeGates.forEach(g => g.el.remove());
    activeGates = [];
}

function prepareGameQueue() {
    if (currentMode === 'classic') {
        // Mischia tutto casualmente
        return [...initialData].sort(() => Math.random() - 0.5);
    } else {
        // Modalità REGIONAL: Raggruppa per regione, mischia regioni, poi appiattisci
        // 1. Ottieni lista regioni uniche
        const uniqueRegions = [...new Set(initialData.map(item => item.regione))];
        // 2. Mischia le regioni
        uniqueRegions.sort(() => Math.random() - 0.5);
        
        let organizedQueue = [];
        uniqueRegions.forEach(reg => {
            // Trova tutte le città di questa regione
            const citiesInRegion = initialData.filter(d => d.regione === reg);
            // Mischia le città di questa regione
            citiesInRegion.sort(() => Math.random() - 0.5);
            // Aggiungi alla coda
            organizedQueue.push(...citiesInRegion);
        });
        return organizedQueue;
    }
}

function startGame() {
    unlockAudio();
    document.querySelectorAll('.overlay').forEach(el => el.classList.add('hidden'));
    
    gameActive = true;
    score = 0; lives = 3; playerLane = 1;
    isTurbo = false; frameCount = 0;
    
    activeGates.forEach(g => g.el.remove());
    activeGates = [];
    
    gameQueue = prepareGameQueue();
    
    updatePlayerPos();
    updateUI();
    updateTargetDisplay();
    
    spawnGateRow();
    lastTime = performance.now();
    requestAnimationFrame(gameLoop);
}

function updateTargetDisplay() {
    if (gameQueue.length === 0) return;
    
    const target = gameQueue[0];
    if (currentMode === 'classic') {
        missionLabel.textContent = "PORTA QUESTA CITTÀ A CASA:";
        targetDisplay.textContent = target.città.toUpperCase();
    } else {
        missionLabel.textContent = "CERCA LE CITTÀ DI:";
        targetDisplay.textContent = target.regione.toUpperCase();
    }
}

function updateUI() {
    scoreDisplay.textContent = `Punti: ${score}`;
    livesDisplay.textContent = "❤️".repeat(lives);
}

// --- INPUT E CONTROLLI ---
let touchStartY = 0;
let touchStartX = 0;
window.addEventListener('touchmove', e => { if (gameActive) e.preventDefault(); }, { passive: false });
window.addEventListener('touchstart', e => {
    if (gameActive) e.preventDefault(); 
    unlockAudio();
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}, { passive: false });
window.addEventListener('gesturestart', e => { if (gameActive) e.preventDefault(); });
window.addEventListener('touchend', e => {
    if (!gameActive) return;
    e.preventDefault(); 
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    if (touchStartY - endY > 60) {
        if (!isTurbo) { isTurbo = true; playTurboSound(); }
    } else {
        if (endX < window.innerWidth / 2) moveLeft(); else moveRight();
    }
}, { passive: false });

window.addEventListener('keydown', e => {
    if (!gameActive) return;
    if (e.key === "ArrowLeft") moveLeft();
    if (e.key === "ArrowRight") moveRight();
    if (e.key === "ArrowUp") { if (!isTurbo) { isTurbo = true; playTurboSound(); } }
});

function moveLeft() { if (playerLane > 0) { playerLane--; updatePlayerPos(); } }
function moveRight() { if (playerLane < 2) { playerLane++; updatePlayerPos(); } }
function updatePlayerPos() { player.className = `lane-${playerLane}`; }

// --- LOGICA SPAWN ---
function spawnGateRow() {
    const activeRows = activeGates.filter(g => !g.hit).length;
    if (activeRows >= gameQueue.length) return;

    if (activeGates.length > 0) {
        const lastGate = activeGates[activeGates.length - 1];
        if (lastGate.progress < 0.40) return; 
    }

    const rowEl = document.createElement('div');
    rowEl.className = 'gate-row';
    container.appendChild(rowEl);
    
    const currentTarget = gameQueue[activeRows]; 
    let gatesData = [];

    if (currentMode === 'classic') {
        // MODALITÀ CLASSICA: I cartelli sono REGIONI
        const regions = [currentTarget.regione];
        while (regions.length < 3) {
            let r = initialData[Math.floor(Math.random() * initialData.length)].regione;
            if (!regions.includes(r)) regions.push(r);
        }
        regions.sort(() => Math.random() - 0.5);
        
        gatesData = regions.map(reg => ({
            text: reg,
            isCorrect: reg === currentTarget.regione,
            dataRef: reg
        }));

    } else {
        // MODALITÀ ESPLORATORE: I cartelli sono CITTÀ
        // La corretta è la città corrente
        const correctCity = currentTarget.città;
        let options = [correctCity];
        
        // Cerchiamo città sbagliate (che NON siano della stessa regione corrente)
        while (options.length < 3) {
            let randomItem = initialData[Math.floor(Math.random() * initialData.length)];
            // Deve essere di una regione diversa da quella attuale e non già presente
            if (randomItem.regione !== currentTarget.regione && !options.includes(randomItem.città)) {
                options.push(randomItem.città);
            }
        }
        options.sort(() => Math.random() - 0.5);
        
        gatesData = options.map(cit => ({
            text: cit,
            isCorrect: cit === currentTarget.città,
            dataRef: cit
        }));
    }

    // Creazione DOM dei cartelli
    const gateEls = gatesData.map((gData) => {
        const div = document.createElement('div');
        div.className = 'gate';
        // Se il testo è lungo (es. città composte), aggiungi classe small-text
        if(gData.text.length > 12) div.classList.add('small-text');
        div.textContent = gData.text;
        rowEl.appendChild(div);
        return { isCorrect: gData.isCorrect, text: gData.text };
    });

    activeGates.push({ 
        el: rowEl, 
        progress: 0, 
        gates: gateEls, 
        targetRef: currentTarget // Riferimento all'oggetto città/regione target
    });
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

    const currentBaseSpeed = isTurbo ? TURBO_SPEED : NORMAL_SPEED;

    for (let i = activeGates.length - 1; i >= 0; i--) {
        let g = activeGates[i];
        let effectiveSpeed = g.hit ? EXIT_SPEED : currentBaseSpeed;

        g.progress += effectiveSpeed * dt;
        
        const y = 15 + (g.progress * 85);
        const scale = 0.02 + (g.progress * 1.2);
        
        g.el.style.top = y + "%";
        g.el.style.transform = `scale(${scale})`;
        
        if (g.hit) {
            g.el.style.opacity = Math.max(0, 1 - (g.progress - 0.8) * 10);
        } else {
            g.el.style.opacity = g.progress * 5; 
        }
        
        if (g.progress >= 0.81 && !g.hit) {
            g.hit = true;
            checkCollision(g);
        }

        if (g.progress > 1.3) { 
            if (g.hit) {
                isTurbo = false;
            }
            g.el.remove();
            activeGates.splice(i, 1);
        }
    }
    requestAnimationFrame(gameLoop);
}

function checkCollision(group) {
    const playerSelection = group.gates[playerLane];
    const gateEls = group.el.querySelectorAll('.gate');

    frameCount = SPAWN_INTERVAL - 40; // Ritardo leggero per il prossimo spawn

    if (playerSelection.isCorrect) {
        score++;
        playNote(600, 0.1, 'sine');
        showPopupFeedback("ESATTO", "#4CAF50"); 
        gateEls[playerLane].classList.add('correct-flash');
        
        gameQueue.shift();
        
        if (gameQueue.length > 0) {
            updateTargetDisplay();
        } else {
            gameActive = false;
            document.getElementById('overlay-win').classList.remove('hidden');
        }
    } else {
        lives--;
        playNote(150, 0.3, 'sawtooth');
        
        // Trova qual era la risposta giusta per mostrarla
        const correctGate = group.gates.find(g => g.isCorrect);
        showPopupFeedback(correctGate.text.toUpperCase(), "#F44336"); 
        
        gateEls[playerLane].classList.add('wrong-flash');
        
        // Logica errore
        const failedItem = gameQueue.shift();
        gameQueue.push(failedItem); // Rimetti in coda
        updateTargetDisplay(); // Rinfresca display (nel caso regional potrebbe cambiare regione se era l'ultima)
        
        if (lives <= 0) {
            gameActive = false;
            const errorDisplay = document.getElementById('last-error-display');
            const didYouKnowText = document.getElementById('did-you-know-text');
            
            if (currentMode === 'classic') {
                errorDisplay.innerHTML = `Dovevi portare <br><b>${failedItem.città}</b> in <b>${failedItem.regione}</b>`;
                didYouKnowText.textContent = generateTrivia(failedItem);
            } else {
                errorDisplay.innerHTML = `La città <b>${failedItem.città}</b><br>è in <b>${failedItem.regione}</b>`;
                didYouKnowText.textContent = generateTrivia(failedItem);
            }
            
            document.getElementById('overlay-over').classList.remove('hidden');
        }
    }
    updateUI();
}

// --- GENERATORE DI CURIOSITÀ ---
function generateTrivia(item) {
    // Curiosità semplici e procedurali per educare
    const facts = [
        `${item.città} è un importante centro della regione ${item.regione}.`,
        `La regione ${item.regione} ospita diverse province tra cui ${item.città}.`,
        `Se visiti ${item.regione}, non dimenticare di passare per ${item.città}!`,
        `${item.città} contribuisce alla ricchezza culturale della regione ${item.regione}.`
    ];
    // Se la città è un capoluogo di regione (ha la stella)
    if (item.città.includes("✪")) {
        return `${item.città.replace("✪", "").trim()} è il Capoluogo principale della regione ${item.regione}!`;
    }
    
    return facts[Math.floor(Math.random() * facts.length)];
}