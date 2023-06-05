const films = [
    {
        'name': 'Il grande Lebowsky',
        'img': 'il-grande-lebowsky.jpg'
    },
    {
        'name': 'Il signore degli anelli: il ritorno del re',
        'img': 'il-ritorno-del-re.jpg'
    },
    {
        'name': 'Star wars: l\'impero colpisce ancora',
        'img': 'impero-colpisce-ancora.jpg'
    },
    {
        'name': 'Inception',
        'img': 'inception.jpg'
    },
    {
        'name': 'Il signore degli anelli: la compagnia dell\'anello',
        'img': 'la-compagnia-dellanello.jpg'
    },
    {
        'name': 'Il signore degli anelli: le due torri',
        'img': 'le-due-torri.jpg'
    },
    {
        'name': 'Shutter Island',
        'img': 'shutter-island.jpg'
    },
    {
        'name': 'The departed',
        'img': 'the-departed.jpg'
    },
    {
        'name': 'V per Vendetta',
        'img': 'v-per-vendetta.jpg'
    },
    {
        'name': 'Star wars: la vendetta dei sith',
        'img': 'la-vendetta-dei-sith.jpg'
    },
    {
        'name': 'Il mistero di Sleepy Hollow',
        'img': 'il-mistero-di-sleepy-hollow.jpg'
    },
    {
        'name': 'Non è un paese per vecchi',
        'img': 'non-e-un-paese-per-vecchi.jpg'
    },
    {
        'name': 'The hateful eight',
        'img': 'the-hateful-eight.jpg'
    },
    {
        'name': 'Pulp fiction',
        'img': 'pulp-fiction.jpg'
    },
    {
        'name': 'Matrix',
        'img': 'matrix.jpg'
    },
    {
        'name': 'Il caso spotlight',
        'img': 'il-caso-spotlight.jpg'
    },
    {
        'name': 'The founder',
        'img': 'the-founder.jpg'
    },
    {
        'name': 'Django: unchained',
        'img': 'django-unchained.jpg'
    },
    {
        'name': 'The wolf of wall street',
        'img': 'the-wolf-of-wall-street.jpg'
    },
    {
        'name': 'Constantine',
        'img': 'constantine.jpg'
    },
    {
        'name': 'Interstellar',
        'img': 'interstellar.jpg'
    },
    {
        'name': 'Full metal jacket',
        'img': 'full-metal-jacket.jpg'
    },
    {
        'name': 'Arancia meccanica',
        'img': 'arancia-meccanica.jpg'
    },
    {
        'name': 'Eyes wide shut',
        'img': 'eyes-wide-shut.jpg'
    },
    {
        'name': 'John Wick',
        'img': 'john-wick.jpg'
    },
    {
        'name': 'Matrix: Reloaded',
        'img': 'matrix-reloaded.jpg'
    },
    {
        'name': 'Matrix: Revolutions',
        'img': 'matrix-revolutions.jpg'
    },
    {
        'name': 'Il grande gatsby',
        'img': 'il-grande-gatsby.jpg'
    },
    {
        'name': 'La maledizione della prima luna',
        'img': 'la-maledizione-della-prima-luna.jpg'
    },
    {
        'name': 'Scarface',
        'img': 'scarface.jpg'
    },
    {
        'name': 'Mad Max: Fury road',
        'img': 'mad-max.jpg'
    },
    {
        'name': 'Ready Player One',
        'img': 'ready-player-one.jpg'
    },
    {
        'name': 'Jurassic Park',
        'img': 'jurassic-park.jpg'
    },
    {
        'name': 'Alien',
        'img': 'alien.jpg'
    },
    
];

// FUNZIONE CHE GENERA LA GRIGLIA DI CARTE
function createNewGame(timer){
    // RECUPERO TUTTI GLI ELEMENTI DEL DOM CHE MI SERVONO
    const grid = document.getElementById('grid');
    const select = document.getElementById('difficulty');

    // DICHIARAZIONE DELLA VARIABILE CHE MI INDICA IL NUMERO DI CARTE (QUINDI LA DIFFICOLTA')
    let difficulty;

    grid.innerHTML = '';
    
    // SETTO IL NUMERO DI CARTE IN BASE AL VALORE SELEZIONATO
    let value = parseInt(select.value);
    
    switch(value){
        case 0:
            difficulty = 16;
            break;
        case 1:
            difficulty = 36;
            break;
        default:
            alert('Seleziona un livello di difficoltà per giocare');
            break;
    }

    let arrayCards = createArrayCards(films, difficulty);
    let totalCards = [...arrayCards, ...arrayCards].sort(() => 0.5 - Math.random());
    
    
    //ESEGUO LA FUNZIONE CHE CREA LE CARTE DI GIOCO
    createCards(difficulty, totalCards, timer);

    
}

// FUNZIONE CHE CREA SOLO GRAFICAMENTE LE CARTE DI GIOCO
function createGameCard(cardPerRow, arrayCards, i){
    const card = document.createElement('div');
    card.classList.add('game-card');
    card.style.width =`calc(100% / ${cardPerRow} - 20px)`;

    //A SECONDA DEL LIVELLO DI DIFFICOLTA' CAMBIO L'ALTEZZA DELLE CARTE (SOLA RESA GRAFICA)
    if(cardPerRow == 4){
        card.style.height = `400px`;
    }
    else{
        card.style.height = `300px`; 
    }

    card.style.margin = '10px';
    //IMPOSTO UN DATA ATTRIBUTE PER RECUPERARE IL NOME DEL FILM 
    card.dataset.name = arrayCards[i].name;
    card.innerHTML += `<img src="./img/card-back-black.png" class="card-face-back h-100">`
    card.innerHTML += `<img src="./img/${arrayCards[i].img}" class="card-face-front">`
    
    return card;
}

// FUNZIONE CHE CREA L'ARRAY DEI FILM: PRENDE RANDOMICAMENTE N FILM (DOVE N E' IL NUMERO DI COPPIE DI CARTE)
function createArrayCards(array_films, total_cards){
    return shuffled = array_films.sort(() => 0.5 - Math.random()).slice(0,total_cards/2); //sort con funzione di comparazione
}

// FUNZIONE CHE REALIZZA LA STRUTTURA INTERATTIVA DELLA CARTA DI GIOCO
function createCards(total_cards, arrayCards, timer){

    let cardPerRow = Math.sqrt(total_cards);
    let flipped = []; //array per il controllo se le carte girate sono uguali
    let guessed = []; // array che contiene le carte indovinate (POSSIBILE IMPLEMENTAZIONE);

    for(let i=0; i<total_cards; i++){
        const card = createGameCard(cardPerRow, arrayCards, i);
        
        card.addEventListener('click', function(){
            this.classList.add('flipped');
            const flippedCards = document.querySelectorAll('.flipped');

            flipped.push(this.dataset.name);

            //SE L'ARRAY DELLE CARTE GIRATE CONTIENE DUE ELEMENTI ALLORA VERIFICO SE I SONO UGUALI
            if(flipped.length == 2){
                if(flipped[0] == flipped[1]){
                    //prendo la carta indovinata dall'array delle carte e la metto in un array nuovo. 
                    guessed.push(flipped[0]);

                    //SVUOTO L'ARRAY DELLE CARTE GIRATE
                    flipped = [];

                    //SE L'ARRAY DELLE CARTE INDOVINATE HA LA STESSA LUNGHEZZA DI QUELLO DELLE CARTE ALLORA LA PARTITA E' TERMINATA, HO INDOVINATO TUTTE LE CARTE, INTERROMPO IL TIMER
                    if(guessed.length == arrayCards.length){
                        clearInterval(timer);
                    }
                }
                else{
                    //SE NON HO INDOVINATO, TOLGO LA CLASSE FLIPPED DA TUTTE LE CARTE CHE CE L'HANNO E SVUOTO L'ARRAY DELLE CARTE GIRATE
                    flippedCards.forEach((elem) => {
                        //DOPO UN SECONDO RIMUOVO LA CLASSE FLIPPED
                        setTimeout(() => elem.classList.remove('flipped'), 1000);
                    })
    
                    flipped = [];
                }
            }
        })

        grid.append(card);
    }
}

//FUNZIONE CHE MOSTRA IL TIMER UP DELLA PARTITA
function startTimer(){
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    totalSeconds = 0;

    seconds.innerHTML = '00';
    minutes.innerHTML = '00';

    return setInterval(function(){
        totalSeconds++;
        seconds.innerHTML = formatting_timer(totalSeconds % 60);
        minutes.innerHTML = parseInt(formatting_timer(totalSeconds / 60));
    }, 1000);
    
}
//FUNZIONE CHE FORMATTA I SECONDI ED I MINUTI
function formatting_timer(value){
    return value > 9 ? value : "0"+value;
}

const button = document.getElementById('start');
let timer;

button.addEventListener('click', function(){
    //CANCELLO PREVENTIVAMENTE IL TIMER SE ATTIVO
    clearInterval(timer);

    //INIZIO UN NUOVO TIMER
    timer = startTimer();

    //INIZA UNA NUOVA PARTITA
    createNewGame(timer);
});






