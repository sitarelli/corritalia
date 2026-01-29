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

// --- LOGICA CORE ---
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
    const suffix = isPortrait ? "_V" : "_H";
    const maxIndex = Math.min(gameQueue.length, PRELOAD_BUFFER_SIZE);
    
    for (let i = 1; i < maxIndex; i++) {
        const cityData = gameQueue[i];
        const cacheKey = cityData.città + suffix;
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
        bgDiv.style.cssText = `position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -2; background-color: #1a1a1a; background-size: cover; background-position: center bottom; transition: none;`;
        gameViewport.prepend(bgDiv);
    }

    if (!document.getElementById('road-frame')) {
        const roadDiv = document.createElement('div');
        roadDiv.id = 'road-frame';
        roadDiv.style.cssText = `position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; background-image: url('img/strada_trasparente.png'); background-size: cover; background-position: center bottom; pointer-events: none;`;
        gameViewport.prepend(roadDiv);
    }

    // NUOVO: Overlay Caricamento con BARRA DI PROGRESSO
    if (!document.getElementById('loading-overlay')) {
        const loadingDiv = document.createElement('div');
        loadingDiv.id = 'loading-overlay';
        loadingDiv.className = 'hidden';
        loadingDiv.style.cssText = `
            position: absolute; top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            z-index: 100; color: white; text-align: center;
            background: rgba(0,0,0,0.7); padding: 30px; border-radius: 15px; pointer-events: none;
        `;
        
        const loadingText = document.createElement('div');
        loadingText.textContent = "Caricamento...";
        loadingText.style.marginBottom = "15px";
        loadingText.style.fontWeight = "bold";
        loadingText.style.fontSize = "1.2rem";

        const barContainer = document.createElement('div');
        barContainer.style.cssText = `
            width: 200px; height: 10px; background: #444; border-radius: 5px; overflow: hidden; position: relative;
        `;

        const barFill = document.createElement('div');
        barFill.id = 'loading-bar-fill';
        barFill.style.cssText = `
            width: 0%; height: 100%; background: #2196F3; border-radius: 5px;
            transition: width 0.3s ease-out;
        `;

        // Animazione CSS per il caricamento
        const styleSheet = document.createElement("style");
        styleSheet.innerText = `
            @keyframes fillProgress {
                0% { width: 0%; }
                100% { width: 100%; }
            }
            .animate-fill { animation: fillProgress 5s linear forwards; }
        `;
        document.head.appendChild(styleSheet);

        barContainer.appendChild(barFill);
        loadingDiv.appendChild(loadingText);
        loadingDiv.appendChild(barContainer);
        gameViewport.appendChild(loadingDiv);
    }

    // Elemento Feedback per errori durante il gioco
    if (!document.getElementById('game-feedback')) {
        const feedbackDiv = document.createElement('div');
        feedbackDiv.id = 'game-feedback';
        feedbackDiv.className = 'hidden';

feedbackDiv.style.cssText = `position: absolute; top: 15%; left: 50%; transform: translateX(-50%); z-index: 90; color: #ffeb3b; font-size: 1.2rem; font-weight: bold; text-align: center; text-shadow: 2px 2px 4px black; background: rgba(100, 28, 28, 0.8); padding: 10px 20px; border-radius: 8px; pointer-events: none; transition: opacity 0.3s;`;

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

    const missionLabel = document.getElementById('mission-label');
    const targetDisplay = document.getElementById('target-display');
    const targetCuriosity = document.getElementById('target-curiosity');

    if (missionLabel) missionLabel.textContent = "DESTINAZIONE:";
 
if (targetDisplay) targetDisplay.textContent = currentItem.città.toUpperCase();
    // if (targetCuriosity) {
    //     targetCuriosity.textContent = currentItem.curiosità || "";
    //     targetCuriosity.classList.remove('hidden');
    // }

    const applyBackground = (src) => {
        if (requestId !== currentImageRequestID) return;
        const innerBg = document.getElementById('city-background');
        if (innerBg) {
            innerBg.style.backgroundImage = `url('${src}')`;
            innerBg.style.backgroundColor = "transparent";
            innerBg.style.opacity = "1";
        }
        document.body.style.backgroundImage = `url('${src}')`;
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
                    innerBg.style.backgroundColor = "#1a1a1a";
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
    

// AVVIO MUSICA
    const bgMusic = document.getElementById('bg-music');
    if (bgMusic) { 
        bgMusic.volume = 0.3; // Volume al 30% per non coprire i suoni
        bgMusic.currentTime = 0;
        bgMusic.play().catch(e => console.log("Audio autoplay bloccato:", e)); 
    }

    // Mostra caricamento e reset barra
    const loader = document.getElementById('loading-overlay');
    const barFill = document.getElementById('loading-bar-fill');
    if (loader) loader.classList.remove('hidden');
    if (barFill) {
        barFill.classList.remove('animate-fill');
        void barFill.offsetWidth; // Trigger reflow
        barFill.classList.add('animate-fill');
    }

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
   if (e.key === "ArrowUp" && !isTurbo) { isTurbo = true; playTurboSound(); spawnSmoke(); }



});

// --- LOGICA SPAWN ---
function spawnGateRow() {
    // Nascondi caricamento al primo spawn
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
        return { isCorrect: reg === currentTarget.regione, text: reg, el: div }; // Aggiunto el: div
    });
    activeGates.push({ el: rowEl, progress: 0, gates: gateEls });
}

function gameLoop(currentTime) {
    if (!gameActive) return;
    const dt = Math.min((currentTime - lastTime) / 16.67, 2);
    lastTime = currentTime;
    frameCount += dt;
    if (frameCount >= SPAWN_INTERVAL) { spawnGateRow(); frameCount = 0; }const speed = isTurbo ? TURBO_SPEED : NORMAL_SPEED;
    // Se il turbo è attivo, genera 2 nuvole di fumo PER OGNI FRAME (scia densissima)
    if (isTurbo) { spawnSmoke(); spawnSmoke(); }
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
        triggerCrashEffects(selection.el, playerLane); // Effetti visivi impatto
        const failed = gameQueue.shift(); 
        
        // --- SISTEMAZIONE Feedback a video: [Nome Città] sbagliato! ---
        const feedback = document.getElementById('game-feedback');
        if (feedback) {
            feedback.innerHTML = `<b>${failed.città}</b> sbagliato!<br>Era in: <b>${failed.regione}</b>`;
            feedback.classList.remove('hidden');
            setTimeout(() => feedback.classList.add('hidden'), 2200);
        }

        if (lives <= 0) {
            endGame(failed);
        } else {
            gameQueue.push(failed); 
            frameCount = SPAWN_INTERVAL;
            updateTargetDisplay();
        }
    }
    updateUI();
}
A

// --- NUOVE FUNZIONI EFFETTI ---
function spawnSmoke() {
    const smoke = document.createElement('div');
    smoke.classList.add('smoke-particle');
    const player = document.getElementById('player');
    const viewport = document.getElementById('game-viewport');
    
    const rect = player.getBoundingClientRect();
    const viewRect = viewport.getBoundingClientRect();
    
    // Calcolo centro moto
    const centerX = rect.left - viewRect.left + rect.width / 2;
    // Aggiungo variazione casuale di +/- 15px a destra/sinistra per effetto "nuvola"
    const randomOffset = (Math.random() - 0.5) * 30; 

    smoke.style.left = (centerX + randomOffset) + 'px';
    smoke.style.top = (rect.bottom - viewRect.top - 20) + 'px';
    
    viewport.appendChild(smoke);
    // Rimuovi dopo 1.2 secondi (coerente con il CSS modificato prima)
    setTimeout(() => smoke.remove(), 1200);
}

function triggerCrashEffects(gateElement, laneIndex) {
    // 1. Vibrazione Moto
    const player = document.getElementById('player');
    player.classList.add('shake-effect');
    setTimeout(() => player.classList.remove('shake-effect'), 400);

    // 2. Cartello vola via
    if (gateElement) {
        if (laneIndex === 0) gateElement.classList.add('fly-left');
        else if (laneIndex === 1) gateElement.classList.add('fly-up');
        else if (laneIndex === 2) gateElement.classList.add('fly-right');
    }
}
// -----------------------------

function endGame(failedItem) {
    gameActive = false;
    const errorDisplay = document.getElementById('last-error-display');
    const didYouKnow = document.getElementById('did-you-know-text');
    if (errorDisplay && failedItem) {
        errorDisplay.innerHTML = `Hai sbagliato!<br>Dovevi portare <br><b>${failedItem.città}</b> in <b>${failedItem.regione}</b>`;
    }
    if (didYouKnow && failedItem) {
        didYouKnow.textContent = failedItem.curiosità || "";
    }
    const overlayOver = document.getElementById('overlay-over');
    if (overlayOver) overlayOver.classList.remove('hidden');
}

function resetToStart() {
    gameActive = false;

// STOP MUSICA
    const bgMusic = document.getElementById('bg-music');
    if (bgMusic) bgMusic.pause();

    document.querySelectorAll('.overlay').forEach(el => el.classList.add('hidden'));
    document.getElementById('overlay-start').classList.remove('hidden');
}

window.addEventListener('resize', () => {
    if (gameActive) updateTargetDisplay();
});