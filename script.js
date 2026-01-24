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
   { città: "Terni", regione: "Umbria", curiosità: "Città dell'acciaio e di San Valentino, patrono degli innamovati." },

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

function getMacroArea(regione) {
    for (const [area, regioni] of Object.entries(macroRegions)) {
        if (regioni.includes(regione)) return area;
    }
    return "Sud"; 
}

// --- FUNZIONE PRELOAD ---
// Carica silenziosamente l'immagine della PROSSIMA città in lista
function preloadNextTarget() {
    // Se c'è almeno una città successiva in coda (indice 1, perché 0 è quella attuale)
    if (gameQueue.length > 1) {
        const nextCity = gameQueue[1]; 
        const candidates = generateImageFilenameCandidates(nextCity.città);
        
        // Usiamo la stessa logica di ricerca, ma senza cambiare lo sfondo
        tryLoadImageSequential(candidates, function(src) {
            console.log("Preloaded in background: " + src);
            // Non facciamo nulla: il browser ha salvato l'immagine in cache
        }, function() {
            // Se fallisce pazienza, ci riproverà il gioco principale
        });
    }
}



// --- UTIL: rimuove accenti (normalize) ---
function removeDiacritics(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

// --- FUNZIONE NOMI FILE: Versione Aggiornata (Priorità WEBP) ---
function generateImageFilenameCandidates(nomeCittaRaw) {
    if (!nomeCittaRaw) return [];
    
    // 1. Togli la stellina
    let clean = nomeCittaRaw.replace(/✪/g, '').trim();
    
    // 2. Togli gli accenti
    clean = removeDiacritics(clean).toLowerCase();
    
    // 3. GENERIAMO IL NOME "PULITO" (solo lettere e numeri)
    // Esempio: "L'Aquila" diventa "laquila"
    const simpleName = clean.replace(/[^a-z0-9]/g, "");
    
    // Restituisce array con priorità ai file .webp
    return [
        `img/${simpleName}.webp`,               // Priorità 1: laquila.webp
        `img/${simpleName}.jpg`,                // Priorità 2: laquila.jpg
        `img/${simpleName}.jpeg`,               // Priorità 3: laquila.jpeg
        `img/${clean.replace(/'/g, " ")}.webp`, // Priorità 4: l aquila.webp
        `img/${clean.replace(/'/g, " ")}.jpg`,  // Priorità 5: l aquila.jpg
        `img/${clean.replace(/ /g, "_")}.webp`, // Priorità 6: l_aquila.webp
        `img/${clean.replace(/ /g, "_")}.jpg`   // Priorità 7: l_aquila.jpg
    ];
}


// --- CARICAMENTO IMMAGINI CON TIMEOUT ---
function tryLoadImageSequential(candidates, onSuccess, onFail) {
    if (!candidates || candidates.length === 0) { onFail(); return; }
    let i = 0;
    
    function tryOne() {
        if (i >= candidates.length) { onFail(); return; }
        
        const img = new Image();
        const src = candidates[i];
        let timeoutId;
        let loaded = false;
        
        // Timeout di 3 secondi per ogni immagine
        timeoutId = setTimeout(() => {
            if (!loaded) {
                console.log(`Timeout caricamento: ${src}`);
                i++;
                tryOne();
            }
        }, 3000);
        
        img.onload = function() {
            if (!loaded) {
                loaded = true;
                clearTimeout(timeoutId);
                onSuccess(src);
            }
        };
        
        img.onerror = function() {
            if (!loaded) {
                loaded = true;
                clearTimeout(timeoutId);
                console.log(`Errore caricamento: ${src}`);
                i++;
                tryOne();
            }
        };
        
        img.src = src;
    }
    tryOne();
}





























// --- SETUP ELEMENTI GRAFICI ---
function createGameElements() {
    const gameViewport = document.getElementById('game-viewport');
    if (!gameViewport) return;

    if (!document.getElementById('city-background')) {
        const bgDiv = document.createElement('div');
        bgDiv.id = 'city-background';
        bgDiv.style.cssText = `
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            z-index: -2;
            background-color: #333;
            background-size: cover;
            background-position: center bottom;
            transition: background-image 0.5s ease-in-out;
        `;
        gameViewport.prepend(bgDiv);
    }

    if (!document.getElementById('road-frame')) {
        const roadDiv = document.createElement('div');
        roadDiv.id = 'road-frame';
        roadDiv.style.cssText = `
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            z-index: -1;
            background-image: url('img/strada_trasparente.png'); 
            background-size: cover;
            background-position: center bottom;
            pointer-events: none;
        `;
        gameViewport.prepend(roadDiv);
    }

    if (!document.getElementById('ingame-trivia')) {
        const style = document.createElement('style');
        style.innerHTML = `
            #ingame-trivia {
                position: absolute;
                bottom: 590px; 
                left: 50%;
                transform: translateX(-50%);
                width: 85%;
                max-width: 400px;
                text-align: center;
                color: #fff;
                font-family: 'Arial', sans-serif;
                font-size: 14px;
                font-weight: bold;
                line-height: 1.2;
                background: rgba(0, 0, 0, 0.7);
                padding: 8px 12px;
                border-radius: 10px;
                z-index: 5;
                pointer-events: none;
                transition: opacity 0.5s;
                text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
                border: 1px solid rgba(255, 255, 255, 0.2);
            }
        `;
        document.head.appendChild(style);

        const triviaDiv = document.createElement('div');
        triviaDiv.id = 'ingame-trivia';
        triviaDiv.className = 'hidden'; 
        gameViewport.appendChild(triviaDiv);
    }
}

createGameElements();

// --- STATO DEL GIOCO ---
let gameActive = false;
let currentMode = 'classic'; 
let score = 0;
let lives = 3;
let gameQueue = [];
let playerLane = 1; 
let activeGates = [];
let frameCount = 0;
let isTurbo = false; 
let lastTime = 0;

const SPAWN_INTERVAL = 400; 
const NORMAL_SPEED = 0.0019; 
const TURBO_SPEED = 0.03; 
const EXIT_SPEED = 0.055; 

// --- ELEMENTI DOM ---
const container = document.getElementById('entities-container');
const player = document.getElementById('player');
const targetDisplay = document.getElementById('target-display');
const missionLabel = document.getElementById('mission-label');
const scoreDisplay = document.getElementById('score-display');
const livesDisplay = document.getElementById('lives-display');
const feedbackPop = document.getElementById('feedback-pop');
const targetCuriosity = document.getElementById('target-curiosity');

// --- AUDIO ---
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
    if (!feedbackPop) return;
    feedbackPop.textContent = text;
    feedbackPop.style.color = color;
    feedbackPop.classList.remove('hidden', 'animate-pop');
    void feedbackPop.offsetWidth; 
    feedbackPop.classList.add('animate-pop');
}

// --- MENU E GESTIONE CODE ---
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
    
    updateTargetDisplay(); // Carica la città attuale (indice 0)
    preloadNextTarget();   // Inizia a scaricare la città successiva (indice 1)

    spawnGateRow();
    lastTime = performance.now();
    requestAnimationFrame(gameLoop);
}

function prepareGameQueue() {
    return [...initialData].sort(() => Math.random() - 0.5);
}

// --- AGGIORNAMENTO TARGET E SFONDI ---
function updateTargetDisplay() {
    if (gameQueue.length === 0) return;
    const currentItem = gameQueue[0];
    const triviaEl = document.getElementById('ingame-trivia');
    const innerBg = document.getElementById('city-background');

    if (missionLabel) missionLabel.textContent = "DESTINAZIONE:";
    if (targetDisplay) targetDisplay.textContent = currentItem.città.toUpperCase();

    if (targetCuriosity) {
        targetCuriosity.textContent = currentItem.curiosità || "";
        targetCuriosity.classList.remove('hidden');
    }
    if (triviaEl) triviaEl.classList.add('hidden');

    const candidates = generateImageFilenameCandidates(currentItem.città);
    tryLoadImageSequential(candidates, function(foundSrc) {
        document.body.style.backgroundImage = `url('${foundSrc}')`;
        document.body.style.backgroundColor = "transparent";
        if (innerBg) {
            innerBg.style.backgroundImage = `url('${foundSrc}')`;
            innerBg.style.opacity = "1";
        }
    }, function() {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "black";
        if (innerBg) {
            innerBg.style.backgroundImage = "none";
            innerBg.style.backgroundColor = "#1a1a1a";
            innerBg.style.opacity = "1";
        }
    });
}

function updateUI() {
    if (scoreDisplay) scoreDisplay.textContent = `Punti: ${score}`;
    if (livesDisplay) livesDisplay.textContent = "❤️".repeat(lives);
}

// --- CONTROLLI ---
let touchStartY = 0, touchStartX = 0;
window.addEventListener('touchstart', e => {
    if (gameActive) e.preventDefault();
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}, { passive: false });

window.addEventListener('touchend', e => {
    if (!gameActive) return;
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
    if (e.key === "ArrowUp" && !isTurbo) { isTurbo = true; playTurboSound(); }
});

function moveLeft() { if (playerLane > 0) { playerLane--; updatePlayerPos(); } }
function moveRight() { if (playerLane < 2) { playerLane++; updatePlayerPos(); } }
function updatePlayerPos() { if(player) player.className = `lane-${playerLane}`; }

// --- SPAWN E LOOP ---
function spawnGateRow() {
    const activeRows = activeGates.filter(g => !g.hit).length;
    if (activeRows >= gameQueue.length) return;
    if (activeGates.length > 0 && activeGates[activeGates.length - 1].progress < 0.40) return;

    const rowEl = document.createElement('div');
    rowEl.className = 'gate-row';
    container.appendChild(rowEl);
    
    const currentTarget = gameQueue[activeRows]; 
    const targetArea = getMacroArea(currentTarget.regione);
    let gatesData = [];

    let options = [currentTarget.regione];
    const possible = macroRegions[targetArea];
    while (options.length < 3) {
        let r = possible[Math.floor(Math.random() * possible.length)];
        if (!options.includes(r)) options.push(r);
    }
    options.sort(() => Math.random() - 0.5);
    gatesData = options.map(reg => ({ text: reg, isCorrect: reg === currentTarget.regione }));

    const gateEls = gatesData.map(d => {
        const div = document.createElement('div');
        div.className = 'gate';
        if(d.text.length > 12) div.classList.add('small-text');
        div.textContent = d.text;
        rowEl.appendChild(div);
        return { isCorrect: d.isCorrect, text: d.text };
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
        g.el.style.opacity = g.hit ? Math.max(0, 1 - (g.progress - 0.8) * 10) : g.progress * 5;
        
        if (g.progress >= 0.81 && !g.hit) { g.hit = true; checkCollision(g); }
        if (g.progress > 1.3) { if (g.hit) isTurbo = false; g.el.remove(); activeGates.splice(i, 1); }
    }
    requestAnimationFrame(gameLoop);
}

function checkCollision(group) {
    const selection = group.gates[playerLane];
    const els = group.el.querySelectorAll('.gate');
    
    // Resetta il contatore per dare spazio al prossimo muro
    frameCount = SPAWN_INTERVAL - 40; 

    if (selection.isCorrect) {
        // --- RISPOSTA CORRETTA ---
        score++;
        playNote(600, 0.1);
        
        // Feedback visivo sulla porta attraversata
        els[playerLane].classList.add('correct-flash');
        
        // Rimuovi la città appena indovinata dalla coda
        gameQueue.shift();
        
        if (gameQueue.length > 0) {
            updateTargetDisplay(); // Mostra la nuova città attuale
            preloadNextTarget();   // Scarica già la prossima immagine in background!
        } else { 
            // Hai finito tutte le città: VITTORIA
            gameActive = false; 
            document.getElementById('overlay-win').classList.remove('hidden'); 
        }
    } else {
        // --- RISPOSTA SBAGLIATA ---
        lives--;
        playNote(150, 0.3, 'sawtooth');
        
        // Trova la porta corretta per mostrarla nel popup
        const correct = group.gates.find(g => g.isCorrect);
        showPopupFeedback(correct.text.toUpperCase(), "#F44336");
        
        // Feedback visivo errore
        els[playerLane].classList.add('wrong-flash');
        
        // Prendi la città sbagliata e rimettila in fondo alla coda
        const failed = gameQueue.shift();
        gameQueue.push(failed);
        
        updateTargetDisplay();
        
        // Se le vite sono finite: GAME OVER
        if (lives <= 0) endGame(failed);
    }
    
    updateUI();
}

function endGame(failedItem) {
    gameActive = false;
    const errorDisplay = document.getElementById('last-error-display');
    const didYouKnow = document.getElementById('did-you-know-text');
    errorDisplay.innerHTML = `Dovevi portare <br><b>${failedItem.città}</b> in <b>${failedItem.regione}</b>`;
    didYouKnow.textContent = failedItem.curiosità || "";
    document.getElementById('overlay-over').classList.remove('hidden');
}