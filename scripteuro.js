const initialData = [
   // EUROPA OCCIDENTALE
   { città: "✪ Parigi", regione: "Francia", curiosità: "La città dell'amore, famosa per la Torre Eiffel e il Museo del Louvre." },
   { città: "✪ Londra", regione: "Regno Unito", curiosità: "Attraversata dal Tamigi, ospita l'iconico Big Ben e Buckingham Palace." },
   { città: "✪ Berlino", regione: "Germania", curiosità: "Famosa per la Porta di Brandeburgo e i resti del suo storico Muro." },
   { città: "✪ Amsterdam", regione: "Paesi Bassi", curiosità: "Nota per i suoi canali, le biciclette e la casa di Anna Frank." },
   { città: "✪ Bruxelles", regione: "Belgio", curiosità: "Sede delle principali istituzioni UE e famosa per il cioccolato." },
   { città: "✪ Dublino", regione: "Irlanda", curiosità: "Patria della Guinness e del vivace quartiere di Temple Bar." },
   { città: "✪ Lussemburgo", regione: "Lussemburgo", curiosità: "Una delle capitali più piccole, situata su gole profonde." },
   { città: "✪ Monaco", regione: "Monaco", curiosità: "Famosa per il Gran Premio di F1 e il lussuoso casinò di Monte Carlo." },

   // EUROPA MERIDIONALE
   { città: "✪ Roma", regione: "Italia", curiosità: "La Città Eterna, culla dell'Impero Romano e del Rinascimento." },
   { città: "✪ Madrid", regione: "Spagna", curiosità: "Celebre per il Museo del Prado e la movida notturna." },
   { città: "✪ Lisbona", regione: "Portogallo", curiosità: "Costruita su sette colli, famosa per i suoi tram gialli e il Fado." },
   { città: "✪ Atene", regione: "Grecia", curiosità: "Culla della democrazia, dominata dal maestoso Partenone." },
   { città: "✪ La Valletta", regione: "Malta", curiosità: "Città fortezza barocca, interamente patrimonio UNESCO." },
   { città: "✪ San Marino", regione: "San Marino", curiosità: "Capitale della repubblica più antica del mondo, arroccata sul Monte Titano." },
   { città: "✪ Città del Vaticano", regione: "Vaticano", curiosità: "Lo stato più piccolo del mondo, cuore della cristianità." },
   { città: "✪ Andorra la Vella", regione: "Andorra", curiosità: "La capitale più alta d'Europa, situata nei Pirenei." },

   // EUROPA SETTENTRIONALE
   { città: "✪ Stoccolma", regione: "Svezia", curiosità: "Costruita su 14 isole collegate da 57 ponti." },
   { città: "✪ Oslo", regione: "Norvegia", curiosità: "Nota per i suoi parchi, musei di navi vichinghe e il design moderno." },
   { città: "✪ Copenaghen", regione: "Danimarca", curiosità: "Sede della Sirenetta e dei colorati canali di Nyhavn." },
   { città: "✪ Helsinki", regione: "Finlandia", curiosità: "La città bianca del Nord, affacciata sul Mar Baltico." },
   { città: "✪ Reykjavik", regione: "Islanda", curiosità: "La capitale più a nord del mondo, terra di vulcani e geyser." },
   { città: "✪ Tallinn", regione: "Estonia", curiosità: "Vanta uno dei centri storici medievali meglio conservati d'Europa." },
   { città: "✪ Riga", regione: "Lettonia", curiosità: "Famosa per la sua architettura Art Nouveau e il mercato centrale." },
   { città: "✪ Vilnius", regione: "Lituania", curiosità: "Nota per la sua grande città vecchia barocca." },

   // EUROPA CENTRALE
   { città: "✪ Vienna", regione: "Austria", curiosità: "Città della musica classica, dei valzer e delle torte Sacher." },
   { città: "✪ Berna", regione: "Svizzera", curiosità: "Città medievale circondata dal fiume Aare, famosa per gli orsi." },
   { città: "✪ Praga", regione: "Repubblica Ceca", curiosità: "La città delle cento torri, famosa per il Ponte Carlo." },
   { città: "✪ Varsavia", regione: "Polonia", curiosità: "Risorta dalle ceneri della guerra, un mix di storia e grattacieli." },
   { città: "✪ Budapest", regione: "Ungheria", curiosità: "La perla del Danubio, famosa per i suoi bagni termali." },
   { città: "✪ Bratislava", regione: "Slovacchia", curiosità: "Situata al confine tra tre nazioni, dominata dal suo castello." },
   { città: "✪ Lubiana", regione: "Slovenia", curiosità: "Città verde ricca di draghi e ponti pittoreschi." },
   { città: "✪ Vaduz", regione: "Liechtenstein", curiosità: "Piccola capitale dominata dal castello della famiglia principesca." },

   // EUROPA ORIENTALE E BALCANI
   { città: "✪ Kiev", regione: "Ucraina", curiosità: "Famosa per le cupole dorate del monastero delle grotte." },
   { città: "✪ Mosca", regione: "Russia", curiosità: "Sede del Cremlino e della coloratissima Piazza Rossa." },
   { città: "✪ Bucarest", regione: "Romania", curiosità: "Nota un tempo come la 'Piccola Parigi' dell'Est." },
   { città: "✪ Sofia", regione: "Bulgaria", curiosità: "Una delle città più antiche, costruita su sorgenti termali." },
   { città: "✪ Belgrado", regione: "Serbia", curiosità: "La città bianca alla confluenza tra Danubio e Sava." },
   { città: "✪ Zagabria", regione: "Croazia", curiosità: "Famosa per i suoi musei insoliti e la città alta storica." },
   { città: "✪ Sarajevo", regione: "Bosnia", curiosità: "Punto d'incontro tra cultura orientale e occidentale." },
   { città: "✪ Tirana", regione: "Albania", curiosità: "Celebre per i suoi edifici dai colori vivaci e Piazza Scanderbeg." },
   { città: "✪ Skopje", regione: "Macedonia del Nord", curiosità: "Città natale di Madre Teresa, ricca di statue e ponti." },
   { città: "✪ Podgorica", regione: "Montenegro", curiosità: "Città moderna situata tra cinque fiumi." },
   { città: "✪ Pristina", regione: "Kosovo", curiosità: "La capitale più giovane d'Europa, vivace e dinamica." },
   { città: "✪ Chisinau", regione: "Moldavia", curiosità: "Conosciuta per i suoi ampi parchi e la cultura del vino." },
   { città: "✪ Minsk", regione: "Bielorussia", curiosità: "Caratterizzata da un'imponente architettura in stile impero stalinista." },

   // ALTRE (CAUCASO / CONFINE)
   { città: "✪ Ankara", regione: "Turchia", curiosità: "Cuore pulsante della Turchia moderna, ospita il mausoleo di Atatürk." },
   { città: "✪ Tbilisi", regione: "Georgia", curiosità: "Famosa per le terme sulfuree e il centro storico pittoresco." },
   { città: "✪ Yerevan", regione: "Armenia", curiosità: "La città rosa, una delle più antiche del mondo abitata ininterrottamente." },
   { città: "✪ Baku", regione: "Azerbaigian", curiosità: "Città del vento, dove grattacieli moderni incontrano mura medievali." },
   { città: "✪ Nicosia", regione: "Cipro", curiosità: "L'ultima capitale al mondo ancora divisa da una linea verde." }
];

// --- LOGICA CORE ---
const macroRegions = {
    "Europa Occidentale": ["Francia", "Regno Unito", "Germania", "Paesi Bassi", "Belgio", "Irlanda", "Lussemburgo", "Monaco"],
    "Europa Meridionale": ["Italia", "Spagna", "Portogallo", "Grecia", "Malta", "San Marino", "Vaticano", "Andorra", "Cipro"],
    "Europa Centrale": ["Austria", "Svizzera", "Repubblica Ceca", "Polonia", "Ungheria", "Slovacchia", "Slovenia", "Liechtenstein"],
    "Europa Nord-Est": ["Svezia", "Norvegia", "Danimarca", "Finlandia", "Islanda", "Estonia", "Lettonia", "Lituania"],
    "Europa Est-Balcani": ["Ucraina", "Russia", "Romania", "Bulgaria", "Serbia", "Croazia", "Bosnia", "Albania", "Macedonia del Nord", "Montenegro", "Kosovo", "Moldavia", "Bielorussia", "Turchia", "Georgia", "Armenia", "Azerbaigian"]
};

function getMacroArea(regione) {
    for (const [area, regioni] of Object.entries(macroRegions)) {
        if (regioni.includes(regione)) return area;
    }
    return "Europa Meridionale"; 
}

let imageCache = {}; 
const PRELOAD_BUFFER_SIZE = 5; 
let currentImageRequestID = 0; 

function removeDiacritics(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

function isPortraitDevice() {
    return window.innerHeight > window.innerWidth;
}

function generateImageFilenameCandidates(nomeCittaRaw) {
    if (!nomeCittaRaw) return [];
    const isPortrait = isPortraitDevice();
    const primaryDir = isPortrait ? "imgvert" : "img";
    const backupDir = isPortrait ? "img" : "imgvert";
    
    let clean = nomeCittaRaw.replace(/✪/g, '').trim();
    clean = removeDiacritics(clean).toLowerCase();
    const simpleName = clean.replace(/[^a-z0-9]/g, "");
    
    const candidates = [];
    [primaryDir, backupDir].forEach(dir => {
        candidates.push(`${dir}/${simpleName}.webp`);
        candidates.push(`${dir}/${simpleName}.jpg`);
        candidates.push(`${dir}/${clean.replace(/'/g, " ")}.webp`);
        candidates.push(`${dir}/${clean.replace(/ /g, "_")}.jpg`);
    });
    return candidates;
}

function tryLoadImageSequential(candidates, onSuccess, onFail) {
    let i = 0;
    function tryOne() {
        if (i >= candidates.length) { onFail(); return; }
        const img = new Image();
        img.onload = () => onSuccess(candidates[i]);
        img.onerror = () => { i++; tryOne(); };
        img.src = candidates[i];
    }
    tryOne();
}

function bufferUpcomingCities() {
    if (gameQueue.length <= 1) return;
    const isPortrait = isPortraitDevice();
    const maxIndex = Math.min(gameQueue.length, PRELOAD_BUFFER_SIZE);
    
    for (let i = 1; i < maxIndex; i++) {
        const cityData = gameQueue[i];
        const cacheKey = cityData.città + (isPortrait ? "_V" : "_H");
        if (imageCache[cacheKey]) continue;
        
        const candidates = generateImageFilenameCandidates(cityData.città);
        tryLoadImageSequential(candidates, (foundSrc) => {
            const img = new Image();
            img.src = foundSrc;
            imageCache[cacheKey] = foundSrc;
        }, () => {});
    }
}

// --- CREAZIONE ELEMENTI ---
function createGameElements() {
    const gameViewport = document.getElementById('game-viewport');
    if (!gameViewport) return;

    if (!document.getElementById('city-background')) {
        const bgDiv = document.createElement('div');
        bgDiv.id = 'city-background';
        bgDiv.style.cssText = `
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            z-index: -2;
            background-color: transparent; /* TRASPARENTE DI DEFAULT */
            background-size: cover;
            background-position: center bottom;
            transition: none;
        `;
        gameViewport.prepend(bgDiv);
    }

    if (!document.getElementById('road-frame')) {
        const roadDiv = document.createElement('div');
        roadDiv.id = 'road-frame';
        roadDiv.style.cssText = `position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; background-image: url('img/strada_trasparente.png'); background-size: cover; background-position: center bottom; pointer-events: none;`;
        gameViewport.prepend(roadDiv);
    }

    // Overlay Caricamento con BARRA
    if (!document.getElementById('loading-overlay')) {
        const loadingDiv = document.createElement('div');
        loadingDiv.id = 'loading-overlay';
        loadingDiv.className = 'hidden';
        loadingDiv.style.cssText = `position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 100; color: white; text-align: center; background: rgba(0,0,0,0.7); padding: 30px; border-radius: 15px; pointer-events: none;`;
        
        const loadingText = document.createElement('div');
        loadingText.textContent = "Caricamento...";
        loadingText.style.cssText = "margin-bottom: 15px; font-weight: bold; font-size: 1.2rem;";

        const barContainer = document.createElement('div');
        barContainer.style.cssText = "width: 200px; height: 10px; background: #444; border-radius: 5px; overflow: hidden; position: relative;";

        const barFill = document.createElement('div');
        barFill.id = 'loading-bar-fill';
        barFill.style.cssText = "width: 0%; height: 100%; background: #2196F3; border-radius: 5px; transition: width 0.3s ease-out;";

        const styleSheet = document.createElement("style");
        styleSheet.innerText = `@keyframes fillProgress { 0% { width: 0%; } 100% { width: 100%; } } .animate-fill { animation: fillProgress 5s linear forwards; }`;
        document.head.appendChild(styleSheet);

        barContainer.appendChild(barFill);
        loadingDiv.appendChild(loadingText);
        loadingDiv.appendChild(barContainer);
        gameViewport.appendChild(loadingDiv);
    }

    // Feedback per errori a video
    if (!document.getElementById('game-feedback')) {
        const feedbackDiv = document.createElement('div');
        feedbackDiv.id = 'game-feedback';
        feedbackDiv.className = 'hidden';
        feedbackDiv.style.cssText = `position: absolute; top: 30%; left: 50%; transform: translateX(-50%); z-index: 90; color: #ffeb3b; font-size: 1.2rem; font-weight: bold; text-align: center; text-shadow: 2px 2px 4px black; background: rgba(183, 28, 28, 0.8); padding: 10px 20px; border-radius: 8px; pointer-events: none; transition: opacity 0.3s;`;
        gameViewport.appendChild(feedbackDiv);
    }
}
createGameElements();

// --- AUDIO ---
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playNote(freq, dur, type = 'sine') {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type; osc.connect(gain); gain.connect(audioCtx.destination);
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + dur);
    osc.start(); osc.stop(audioCtx.currentTime + dur);
}
function playTurboSound() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle'; osc.connect(gain); gain.connect(audioCtx.destination);
    const now = audioCtx.currentTime;
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.3);
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.linearRampToValueAtTime(0, now + 0.3);
    osc.start(); osc.stop(now + 0.3);
}

// --- VISUALIZZAZIONE SFONDO ---
function updateTargetDisplay() {
    if (gameQueue.length === 0) return;
    const currentItem = gameQueue[0];
    const requestId = ++currentImageRequestID;
    const isPortrait = isPortraitDevice();
    const cacheKey = currentItem.città + (isPortrait ? "_V" : "_H");

    const targetDisplay = document.getElementById('target-display');
    const targetCuriosity = document.getElementById('target-curiosity');
    if (targetDisplay) targetDisplay.textContent = currentItem.città.toUpperCase();
    if (targetCuriosity) {
        targetCuriosity.textContent = currentItem.curiosità || "";
        targetCuriosity.classList.remove('hidden');
    }

    const applyBackground = (src) => {
        if (requestId !== currentImageRequestID) return;
        const innerBg = document.getElementById('city-background');
        if (innerBg) {
            innerBg.style.backgroundImage = `url('${src}')`;
            innerBg.style.backgroundColor = "transparent";
            innerBg.style.opacity = "1";
        }
    };

    if (imageCache[cacheKey]) {
        applyBackground(imageCache[cacheKey]);
    } else {
        const candidates = generateImageFilenameCandidates(currentItem.città);
        tryLoadImageSequential(candidates, (foundSrc) => {
            imageCache[cacheKey] = foundSrc;
            applyBackground(foundSrc);
        }, () => {
            if (requestId === currentImageRequestID) {
                const innerBg = document.getElementById('city-background');
                if (innerBg) {
                    innerBg.style.backgroundImage = "none";
                    innerBg.style.backgroundColor = "transparent"; // TRASPARENTE SE MANCA FOTO
                }
            }
        });
    }
}

// --- GESTIONE GIOCO ---
let gameActive = false, score = 0, lives = 3, gameQueue = [], playerLane = 1, activeGates = [], frameCount = 0, isTurbo = false, lastTime = 0;
const SPAWN_INTERVAL = 400, NORMAL_SPEED = 0.0019, TURBO_SPEED = 0.03, EXIT_SPEED = 0.055;

const player = document.getElementById('player'), scoreDisplay = document.getElementById('score-display'), livesDisplay = document.getElementById('lives-display'), container = document.getElementById('entities-container');

function startGame() {
    document.querySelectorAll('.overlay').forEach(el => el.classList.add('hidden'));
    const loader = document.getElementById('loading-overlay');
    const barFill = document.getElementById('loading-bar-fill');
    if (loader) loader.classList.remove('hidden');
    if (barFill) { barFill.classList.remove('animate-fill'); void barFill.offsetWidth; barFill.classList.add('animate-fill'); }

    gameActive = true; score = 0; lives = 3; playerLane = 1; isTurbo = false; frameCount = 0;
    activeGates.forEach(g => g.el.remove()); activeGates = [];
    gameQueue = [...initialData].sort(() => Math.random() - 0.5);
    updatePlayerPos(); updateUI(); updateTargetDisplay(); bufferUpcomingCities();
    lastTime = performance.now(); requestAnimationFrame(gameLoop);
}

function updateUI() {
    if (scoreDisplay) scoreDisplay.textContent = `Punti: ${score}`;
    if (livesDisplay) livesDisplay.textContent = "❤️".repeat(lives);
}

function moveLeft() { if (playerLane > 0) { playerLane--; updatePlayerPos(); } }
function moveRight() { if (playerLane < 2) { playerLane++; updatePlayerPos(); } }
function updatePlayerPos() { if(player) player.className = `lane-${playerLane}`; }

// --- CONTROLLI ---
let touchStartY = 0, touchStartX = 0;
window.addEventListener('touchstart', e => { if (gameActive) e.preventDefault(); touchStartX = e.touches[0].clientX; touchStartY = e.touches[0].clientY; }, { passive: false });
window.addEventListener('touchend', e => {
    if (!gameActive) return;
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    if (touchStartY - endY > 60) { if (!isTurbo) { isTurbo = true; playTurboSound(); } } else { if (endX < window.innerWidth / 2) moveLeft(); else moveRight(); }
}, { passive: false });

window.addEventListener('keydown', e => {
    if (!gameActive) return;
    if (e.key === "ArrowLeft") moveLeft();
    if (e.key === "ArrowRight") moveRight();
    if (e.key === "ArrowUp" && !isTurbo) { isTurbo = true; playTurboSound(); }
});

// --- LOGICA SPAWN ---
function spawnGateRow() {
    const loader = document.getElementById('loading-overlay');
    if (loader) loader.classList.add('hidden');

    const activeRows = activeGates.filter(g => !g.hit).length;
    if (activeRows >= gameQueue.length || (activeGates.length > 0 && activeGates[activeGates.length - 1].progress < 0.40)) return;

    const rowEl = document.createElement('div');
    rowEl.className = 'gate-row';
    container.appendChild(rowEl);
    
    const currentTarget = gameQueue[activeRows]; 
    const targetArea = getMacroArea(currentTarget.regione);
    let options = [currentTarget.regione];
    const possible = macroRegions[targetArea];
    while (options.length < 3) {
        let r = possible[Math.floor(Math.random() * possible.length)];
        if (!options.includes(r)) options.push(r);
    }
    options.sort(() => Math.random() - 0.5);

    const gateEls = options.map(reg => {
        const div = document.createElement('div');
        div.className = 'gate';
        div.textContent = reg;
        rowEl.appendChild(div);
        return { isCorrect: reg === currentTarget.regione, text: reg };
    });
    activeGates.push({ el: rowEl, progress: 0, gates: gateEls });
}

function gameLoop(currentTime) {
    if (!gameActive) return;
    const dt = Math.min((currentTime - lastTime) / 16.67, 2);
    lastTime = currentTime;
    frameCount += dt;
    if (frameCount >= SPAWN_INTERVAL) { spawnGateRow(); frameCount = 0; }
    const speed = isTurbo ? TURBO_SPEED : NORMAL_SPEED;
    for (let i = activeGates.length - 1; i >= 0; i--) {
        let g = activeGates[i];
        g.progress += (g.hit ? EXIT_SPEED : speed) * dt;
        g.el.style.top = (15 + g.progress * 85) + "%";
        g.el.style.transform = `scale(${0.02 + g.progress * 1.2})`;
        if (g.progress >= 0.81 && !g.hit) { g.hit = true; checkCollision(g); }
        if (g.progress > 1.3) { if(g.hit) isTurbo = false; g.el.remove(); activeGates.splice(i, 1); }
    }
    requestAnimationFrame(gameLoop);
}

function checkCollision(group) {
    const selection = group.gates[playerLane];
    if (selection.isCorrect) {
        score++; playNote(600, 0.1); 
        gameQueue.shift();
        frameCount = SPAWN_INTERVAL; 
        if (gameQueue.length > 0) { updateTargetDisplay(); bufferUpcomingCities(); } 
        else { gameActive = false; document.getElementById('overlay-win').classList.remove('hidden'); }
    } else {
        lives--; playNote(150, 0.3, 'sawtooth');
        const failed = gameQueue.shift(); 
        
        const feedback = document.getElementById('game-feedback');
        if (feedback) {
            feedback.innerHTML = `<b>${failed.città}</b> sbagliato!<br>Era in: <b>${failed.regione}</b>`;
            feedback.classList.remove('hidden');
            setTimeout(() => feedback.classList.add('hidden'), 2200);
        }

        if (lives <= 0) { endGame(failed); } else { gameQueue.push(failed); frameCount = SPAWN_INTERVAL; updateTargetDisplay(); }
    }
    updateUI();
}

function endGame(failedItem) {
    gameActive = false;
    const errorDisplay = document.getElementById('last-error-display');
    const didYouKnow = document.getElementById('did-you-know-text');
    if (errorDisplay && failedItem) { errorDisplay.innerHTML = `Hai sbagliato!<br>Dovevi portare <br><b>${failedItem.città}</b> in <b>${failedItem.regione}</b>`; }
    if (didYouKnow && failedItem) { didYouKnow.textContent = failedItem.curiosità || ""; }
    document.getElementById('overlay-over').classList.remove('hidden');
}

function resetToStart() {
    gameActive = false;
    document.querySelectorAll('.overlay').forEach(el => el.classList.add('hidden'));
    document.getElementById('overlay-start').classList.remove('hidden');
}

window.addEventListener('resize', () => { if (gameActive) updateTargetDisplay(); });