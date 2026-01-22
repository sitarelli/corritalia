const initialData = [
   // ABRUZZO
   { città: "✪ L'Aquila", regione: "Abruzzo", curiosità: "Famosa per la Basilica di Collemaggio e la Fontana delle 99 cannelle." },
   { città: "Chieti", regione: "Abruzzo", curiosità: "Antica città dei Marrucini, ospita il Museo Archeologico Nazionale." },
   { città: "Pescara", regione: "Abruzzo", curiosità: "Città natale di Gabriele D'Annunzio, moderna e vivace sul mare." },
   { città: "Teramo", regione: "Abruzzo", curiosità: "Situata tra il Gran Sasso e l'Adriatico, nota per il Duomo." },
   
   // BASILICATA
   { città: "✪ Potenza", regione: "Basilicata", curiosità: "È il capoluogo di regione più alto d'Italia (819 m s.l.m.)." },
   { città: "Matera", regione: "Basilicata", curiosità: "Celebre in tutto il mondo per i Sassi, patrimonio UNESCO." },

   // CALABRIA
   { città: "✪ Catanzaro", regione: "Calabria", curiosità: "Detta la 'Città dei due mari' per la sua posizione panoramica." },
   { città: "Cosenza", regione: "Calabria", curiosità: "Definita l'Atene della Calabria per la sua tradizione culturale." },
   { città: "Crotone", regione: "Calabria", curiosità: "Città di Pitagora e sede di una famosa scuola medica antica." },
   { città: "Reggio Calabria", regione: "Calabria", curiosità: "Ospita i famosi Bronzi di Riace nel suo Museo Nazionale." },
   { città: "Vibo Valentia", regione: "Calabria", curiosità: "Domina il Tirreno ed è famosa per il Castello Normanno-Svevo." },

   // CAMPANIA
   { città: "✪ Napoli", regione: "Campania", curiosità: "Patria della pizza, del Vesuvio e di una cultura millenaria." },
   { città: "Avellino", regione: "Campania", curiosità: "Cuore dell'Irpinia, famosa per le nocciole e il verde." },
   { città: "Benevento", regione: "Campania", curiosità: "Nota come la città delle Streghe e per l'Arco di Traiano." },
   { città: "Caserta", regione: "Campania", curiosità: "Celebre per la maestosa Reggia Borbonica e il suo parco." },
   { città: "Salerno", regione: "Campania", curiosità: "Sede della Scuola Medica Salernitana, la prima in Europa." },

   // EMILIA-ROMAGNA
   { città: "✪ Bologna", regione: "Emilia-Romagna", curiosità: "La Dotta, la Grassa e la Rossa, famosa per i portici infiniti." },
   { città: "Ferrara", regione: "Emilia-Romagna", curiosità: "Splendida città rinascimentale governata dagli Estensi." },
   { città: "Forlì", regione: "Emilia-Romagna", curiosità: "Città d'arte nota per l'abbazia di San Mercuriale." },
   { città: "Cesena", regione: "Emilia-Romagna", curiosità: "Ospita la Biblioteca Malatestiana, memoria del mondo UNESCO." },
   { città: "Modena", regione: "Emilia-Romagna", curiosità: "Terra dei motori (Ferrari) e dell'aceto balsamico." },
   { città: "Parma", regione: "Emilia-Romagna", curiosità: "Capitale della Food Valley, famosa per prosciutto e parmigiano." },
   { città: "Piacenza", regione: "Emilia-Romagna", curiosità: "Città di confine sul Po, nota per il Palazzo Gotico." },
   { città: "Ravenna", regione: "Emilia-Romagna", curiosità: "Capitale dei mosaici bizantini e tomba di Dante Alighieri." },
   { città: "Reggio Emilia", regione: "Emilia-Romagna", curiosità: "Qui nacque il Tricolore, la bandiera nazionale italiana." },
   { città: "Rimini", regione: "Emilia-Romagna", curiosità: "Capitale del turismo estivo e antica città romana." },

   // FRIULI-VENEZIA GIULIA
   { città: "✪ Trieste", regione: "Friuli-Venezia Giulia", curiosità: "Città della Bora, dei caffè storici e della letteratura." },
   { città: "Gorizia", regione: "Friuli-Venezia Giulia", curiosità: "Città di confine, simbolo di unione tra culture diverse." },
   { città: "Pordenone", regione: "Friuli-Venezia Giulia", curiosità: "Città dinamica, nota per il festival letterario Pordenonelegge." },
   { città: "Udine", regione: "Friuli-Venezia Giulia", curiosità: "Il salotto del Friuli, con piazze in stile veneziano e il Tiepolo." },

   // LAZIO
   { città: "✪ Roma ✪", regione: "Lazio", curiosità: "La Città Eterna, culla della civiltà e sede del Colosseo." },
   { città: "Frosinone", regione: "Lazio", curiosità: "Capoluogo della Ciociaria, situata su un colle panoramico." },
   { città: "Latina", regione: "Lazio", curiosità: "Città di fondazione (1932) nata dalla bonifica dell'Agro Pontino." },
   { città: "Rieti", regione: "Lazio", curiosità: "Considerata dagli antichi l'Ombelico d'Italia (Umbilicus Italiae)." },
   { città: "Viterbo", regione: "Lazio", curiosità: "La Città dei Papi, famosa per il quartiere medievale San Pellegrino." },

   // LIGURIA
   { città: "✪ Genova", regione: "Liguria", curiosità: "La Superba, famosa per il porto, l'acquario e i vicoli (caruggi)." },
   { città: "Imperia", regione: "Liguria", curiosità: "Nata dall'unione di due città: Oneglia e Porto Maurizio." },
   { città: "La Spezia", regione: "Liguria", curiosità: "Sede di un importante arsenale e porta delle Cinque Terre." },
   { città: "Savona", regione: "Liguria", curiosità: "Città dei Papi e della Torretta, porto crocieristico." },

   // LOMBARDIA
   { città: "✪ Milano", regione: "Lombardia", curiosità: "Capitale della moda, del design e sede del Duomo gotico." },
   { città: "Bergamo", regione: "Lombardia", curiosità: "Divisa in due: Città Alta (storica) e Città Bassa (moderna)." },
   { città: "Brescia", regione: "Lombardia", curiosità: "La Leonessa d'Italia, con un'area archeologica romana unica." },
   { città: "Como", regione: "Lombardia", curiosità: "Celebre in tutto il mondo per il suo splendido lago e le ville." },
   { città: "Cremona", regione: "Lombardia", curiosità: "La città dei violini (Stradivari) e del torrone." },
   { città: "Lecco", regione: "Lombardia", curiosità: "Lo scenario de 'I Promessi Sposi' di Alessandro Manzoni." },
   { città: "Lodi", regione: "Lombardia", curiosità: "Nota per la ceramica e la sua piazza quadrata porticata." },
   { città: "Mantova", regione: "Lombardia", curiosità: "Gioiello del Rinascimento circondata da tre laghi." },
   { città: "Monza", regione: "Lombardia", curiosità: "Famosa per il Gran Premio di F1, la Villa Reale e la Corona Ferrea." },
   { città: "Pavia", regione: "Lombardia", curiosità: "Antica capitale longobarda e sede di una storica università." },
   { città: "Sondrio", regione: "Lombardia", curiosità: "Cuore della Valtellina, terra di vigneti eroici e bresaola." },
   { città: "Varese", regione: "Lombardia", curiosità: "La 'Città Giardino', ricca di parchi e ville liberty." },

   // MARCHE
   { città: "✪ Ancona", regione: "Marche", curiosità: "Città dorica con un porto a gomito dove il sole sorge e tramonta sul mare." },
   { città: "Ascoli Piceno", regione: "Marche", curiosità: "La città delle cento torri, costruita interamente in travertino." },
   { città: "Fermo", regione: "Marche", curiosità: "Domina l'Adriatico e custodisce le Cisterne Romane." },
   { città: "Macerata", regione: "Marche", curiosità: "Famosa per lo Sferisterio, arena per la lirica all'aperto." },
   { città: "Pesaro", regione: "Marche", curiosità: "Città della Musica e luogo di nascita di Gioachino Rossini." },
   { città: "Urbino", regione: "Marche", curiosità: "Culla del Rinascimento e città natale di Raffaello Sanzio." },

   // MOLISE
   { città: "✪ Campobasso", regione: "Molise", curiosità: "Nota per la sfilata dei Misteri e la produzione di acciaio." },
   { città: "Isernia", regione: "Molise", curiosità: "Città della preistoria e del merletto a tombolo." },

   // PIEMONTE
   { città: "✪ Torino", regione: "Piemonte", curiosità: "Prima capitale d'Italia, città dell'auto, del cinema e del cioccolato." },
   { città: "Alessandria", regione: "Piemonte", curiosità: "Famosa per la Cittadella e i cappelli Borsalino." },
   { città: "Asti", regione: "Piemonte", curiosità: "Patria dello spumante e del Palio più antico d'Italia." },
   { città: "Biella", regione: "Piemonte", curiosità: "Capitale della lana e dei tessuti di alta qualità." },
   { città: "Cuneo", regione: "Piemonte", curiosità: "Città dalla particolare forma a cuneo, tra due fiumi." },
   { città: "Novara", regione: "Piemonte", curiosità: "Dominata dalla cupola di San Gaudenzio, alta 121 metri." },
   { città: "Verbania", regione: "Piemonte", curiosità: "Un giardino sul Lago Maggiore, famosa per Villa Taranto." },
   { città: "Vercelli", regione: "Piemonte", curiosità: "Capitale europea del riso." },

   // PUGLIA
   { città: "✪ Bari", regione: "Puglia", curiosità: "Città di San Nicola, con un grande borgo antico sul mare." },
   { città: "Andria", regione: "Puglia", curiosità: "Nel suo territorio sorge Castel del Monte, fortezza di Federico II." },
   { città: "Barletta", regione: "Puglia", curiosità: "Città della Disfida (1503) e del Colosso 'Eraclio'." },
   { città: "Trani", regione: "Puglia", curiosità: "Celebre per la sua Cattedrale romanica affacciata direttamente sul mare." },
   { città: "Brindisi", regione: "Puglia", curiosità: "Porta d'Oriente e termine della Via Appia romana." },
   { città: "Foggia", regione: "Puglia", curiosità: "Cuore del Tavoliere delle Puglie, granaio d'Italia." },
   { città: "Lecce", regione: "Puglia", curiosità: "La Firenze del Sud, capolavoro del barocco in pietra leccese." },
   { città: "Taranto", regione: "Puglia", curiosità: "Città dei due mari e dell'antica cultura spartana." },

   // SARDEGNA
   { città: "✪ Cagliari", regione: "Sardegna", curiosità: "Città del sole, affacciata sul Golfo degli Angeli." },
   { città: "Carbonia", regione: "Sardegna", curiosità: "Città di fondazione (1938), nata per le miniere di carbone." },
   { città: "Iglesias", regione: "Sardegna", curiosità: "Nota per le sue miniere storiche e le tradizioni medievali." },
   { città: "Nuoro", regione: "Sardegna", curiosità: "Cuore della Barbagia e città di Grazia Deledda." },
   { città: "Oristano", regione: "Sardegna", curiosità: "Famosa per la Sartiglia, spettacolare giostra equestre di carnevale." },
   { città: "Sassari", regione: "Sardegna", curiosità: "Celebre per la discesa dei Candelieri, patrimonio UNESCO." },

   // SICILIA
   { città: "✪ Palermo", regione: "Sicilia", curiosità: "Crocevia di culture, famosa per l'arte arabo-normanna e lo street food." },
   { città: "Agrigento", regione: "Sicilia", curiosità: "Custodisce la meravigliosa Valle dei Templi greci." },
   { città: "Caltanissetta", regione: "Sicilia", curiosità: "Cuore della Sicilia e antica capitale dello zolfo." },
   { città: "Catania", regione: "Sicilia", curiosità: "La città nera costruita in pietra lavica ai piedi dell'Etna." },
   { città: "Enna", regione: "Sicilia", curiosità: "Il 'Belvedere di Sicilia', capoluogo più alto d'Italia (931m)." },
   { città: "Messina", regione: "Sicilia", curiosità: "La porta della Sicilia, famosa per il suo orologio astronomico." },
   { città: "Ragusa", regione: "Sicilia", curiosità: "Gioiello del barocco, divisa tra Ragusa Superiore e Ibla." },
   { città: "Siracusa", regione: "Sicilia", curiosità: "Una delle più grandi polis greche, patria di Archimede." },
   { città: "Trapani", regione: "Sicilia", curiosità: "Città del sale e della vela, protesa sul mare a forma di falce." },

   // TOSCANA
   { città: "✪ Firenze", regione: "Toscana", curiosità: "Culla del Rinascimento, del David e degli Uffizi." },
   { città: "Arezzo", regione: "Toscana", curiosità: "Città dell'oro e set del film 'La vita è bella'." },
   { città: "Grosseto", regione: "Toscana", curiosità: "Capoluogo della Maremma, circondata da mura medicee intatte." },
   { città: "Livorno", regione: "Toscana", curiosità: "Porto franco famoso per la Fortezza Vecchia e la Terrazza Mascagni." },
   { città: "Lucca", regione: "Toscana", curiosità: "La città delle cento chiese, racchiusa da mura rinascimentali." },
   { città: "Massa", regione: "Toscana", curiosità: "Dominata dal Castello Malaspina e vicina al mare." },
   { città: "Carrara", regione: "Toscana", curiosità: "Capitale mondiale del marmo bianco pregiato." },
   { città: "Pisa", regione: "Toscana", curiosità: "Famosa in tutto il mondo per la Torre Pendente." },
   { città: "Pistoia", regione: "Toscana", curiosità: "Città verde, famosa per i vivai e la piazza del Duomo." },
   { città: "Prato", regione: "Toscana", curiosità: "Capitale del distretto tessile e dei cantucci." },
   { città: "Siena", regione: "Toscana", curiosità: "Celebre per il Palio che si corre in Piazza del Campo." },

   // TRENTINO-ALTO ADIGE
   { città: "✪ Trento", regione: "Trentino-Alto Adige", curiosità: "Città del Concilio, ricca di storia e circondata dalle Alpi." },
   { città: "Bolzano", regione: "Trentino-Alto Adige", curiosità: "Incontro tra cultura mediterranea e mitteleuropea, casa di Ötzi." },

   // UMBRIA
   { città: "✪ Perugia", regione: "Umbria", curiosità: "Città del cioccolato, del jazz e di un centro storico medievale." },
   { città: "Terni", regione: "Umbria", curiosità: "Città dell'acciaio e di San Valentino, patrono degli innamorati." },

   // VALLE D'AOSTA
   { città: "✪ Aosta", regione: "Valle d'Aosta", curiosità: "La 'Roma delle Alpi', ricchissima di monumenti romani." },

   // VENETO
   { città: "✪ Venezia", regione: "Veneto", curiosità: "Unica al mondo, costruita su 118 isole collegate da canali." },
   { città: "Belluno", regione: "Veneto", curiosità: "La porta delle Dolomiti, affacciata sulla valle del Piave." },
   { città: "Padova", regione: "Veneto", curiosità: "Città di Sant'Antonio, di Giotto e di un'antica università." },
   { città: "Rovigo", regione: "Veneto", curiosità: "La città delle rose, cuore del Polesine." },
   { città: "Treviso", regione: "Veneto", curiosità: "La città dipinta, famosa per il radicchio rosso e il prosecco." },
   { città: "Verona", regione: "Veneto", curiosità: "Città dell'amore (Romeo e Giulietta) e dell'Arena romana." },
   { città: "Vicenza", regione: "Veneto", curiosità: "Città del Palladio, patrimonio UNESCO per le sue architetture." }
];

// --- DEFINIZIONE AREE GEOGRAFICHE ---
const macroRegions = {
    "Nord": ["Valle d'Aosta", "Piemonte", "Liguria", "Lombardia", "Trentino-Alto Adige", "Veneto", "Friuli-Venezia Giulia", "Emilia-Romagna"],
    "Centro": ["Toscana", "Umbria", "Marche", "Lazio", "Abruzzo"], 
    "Sud": ["Molise", "Campania", "Puglia", "Basilicata", "Calabria", "Sicilia", "Sardegna"]
};

// Funzione helper per trovare l'area di una regione
function getMacroArea(regione) {
    for (const [area, regioni] of Object.entries(macroRegions)) {
        if (regioni.includes(regione)) return area;
    }
    return "Sud"; // Fallback
}

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
    
    // Configura i testi dell'overlay Start
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
    activeGates.forEach(g => g.el.remove());
    activeGates = [];
}

function prepareGameQueue() {
    if (currentMode === 'classic') {
        // Mischia tutto casualmente
        return [...initialData].sort(() => Math.random() - 0.5);
    } else {
        // Modalità REGIONAL: Raggruppa per regione
        const uniqueRegions = [...new Set(initialData.map(item => item.regione))];
        uniqueRegions.sort(() => Math.random() - 0.5);
        
        let organizedQueue = [];
        uniqueRegions.forEach(reg => {
            const citiesInRegion = initialData.filter(d => d.regione === reg);
            citiesInRegion.sort(() => Math.random() - 0.5);
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

    // Ottieni l'area geografica corrente
    const targetMacroArea = getMacroArea(currentTarget.regione);

    if (currentMode === 'classic') {
        const correctRegion = currentTarget.regione;
        let options = [correctRegion];
        const possibleRegions = macroRegions[targetMacroArea];

        while (options.length < 3) {
            let r = possibleRegions[Math.floor(Math.random() * possibleRegions.length)];
            if (!options.includes(r)) options.push(r);
        }
        options.sort(() => Math.random() - 0.5);
        
        gatesData = options.map(reg => ({
            text: reg,
            isCorrect: reg === currentTarget.regione,
            dataRef: reg
        }));

    } else {
        const correctCity = currentTarget.città;
        let options = [correctCity];
        
        const candidateCities = initialData.filter(item => {
            if (getMacroArea(item.regione) !== targetMacroArea) return false;
            if (item.regione === currentTarget.regione) return false;
            return true;
        });
        
        while (options.length < 3) {
            if (candidateCities.length > 0) {
                let randomIndex = Math.floor(Math.random() * candidateCities.length);
                let randomCity = candidateCities[randomIndex].città;
                if (!options.includes(randomCity)) {
                    options.push(randomCity);
                }
            } else {
                let r = initialData[Math.floor(Math.random() * initialData.length)].città;
                if (!options.includes(r)) options.push(r);
            }
        }
        options.sort(() => Math.random() - 0.5);
        
        gatesData = options.map(cit => ({
            text: cit,
            isCorrect: cit === currentTarget.città,
            dataRef: cit
        }));
    }

    const gateEls = gatesData.map((gData) => {
        const div = document.createElement('div');
        div.className = 'gate';
        if(gData.text.length > 12) div.classList.add('small-text');
        div.textContent = gData.text;
        rowEl.appendChild(div);
        return { isCorrect: gData.isCorrect, text: gData.text };
    });

    activeGates.push({ 
        el: rowEl, 
        progress: 0, 
        gates: gateEls, 
        targetRef: currentTarget 
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

    frameCount = SPAWN_INTERVAL - 40; 

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
        
        const correctGate = group.gates.find(g => g.isCorrect);
        showPopupFeedback(correctGate.text.toUpperCase(), "#F44336"); 
        
        gateEls[playerLane].classList.add('wrong-flash');
        
        const failedItem = gameQueue.shift();
        gameQueue.push(failedItem); 
        updateTargetDisplay(); 
        
        if (lives <= 0) {
            gameActive = false;
            const errorDisplay = document.getElementById('last-error-display');
            const didYouKnowText = document.getElementById('did-you-know-text');
            
            if (currentMode === 'classic') {
                errorDisplay.innerHTML = `Dovevi portare <br><b>${failedItem.città}</b> in <b>${failedItem.regione}</b>`;
            } else {
                errorDisplay.innerHTML = `La città <b>${failedItem.città}</b><br>è in <b>${failedItem.regione}</b>`;
            }
            
            // UTILIZZA LA NUOVA FUNZIONE SEMPLIFICATA
            didYouKnowText.textContent = generateTrivia(failedItem);
            
            document.getElementById('overlay-over').classList.remove('hidden');
        }
    }
    updateUI();
}

// --- GENERATORE DI CURIOSITÀ AGGIORNATO ---
function generateTrivia(item) {
    // Ora legge direttamente la proprietà 'curiosità' dall'oggetto
    if (item.curiosità) {
        return item.curiosità;
    }
    // Fallback di sicurezza nel caso mancasse qualche dato
    return `${item.città} è un'importante località della regione ${item.regione}.`;
}